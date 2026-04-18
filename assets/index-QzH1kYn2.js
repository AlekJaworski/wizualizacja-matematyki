(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();var zl={exports:{}},Bi={},_l={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function th(){if(t1)return He;t1=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),w=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=w&&R[w]||R["@@iterator"],typeof R=="function"?R:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,k={};function T(R,Z,_e){this.props=R,this.context=Z,this.refs=k,this.updater=_e||j}T.prototype.isReactComponent={},T.prototype.setState=function(R,Z){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Z,"setState")},T.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function A(){}A.prototype=T.prototype;function L(R,Z,_e){this.props=R,this.context=Z,this.refs=k,this.updater=_e||j}var H=L.prototype=new A;H.constructor=L,q(H,T.prototype),H.isPureReactComponent=!0;var F=Array.isArray,E=Object.prototype.hasOwnProperty,G={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function Q(R,Z,_e){var Te,je={},xe=null,ae=null;if(Z!=null)for(Te in Z.ref!==void 0&&(ae=Z.ref),Z.key!==void 0&&(xe=""+Z.key),Z)E.call(Z,Te)&&!I.hasOwnProperty(Te)&&(je[Te]=Z[Te]);var he=arguments.length-2;if(he===1)je.children=_e;else if(1<he){for(var Ce=Array(he),Ge=0;Ge<he;Ge++)Ce[Ge]=arguments[Ge+2];je.children=Ce}if(R&&R.defaultProps)for(Te in he=R.defaultProps,he)je[Te]===void 0&&(je[Te]=he[Te]);return{$$typeof:o,type:R,key:xe,ref:ae,props:je,_owner:G.current}}function Y(R,Z){return{$$typeof:o,type:R.type,key:Z,ref:R.ref,props:R.props,_owner:R._owner}}function te(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function re(R){var Z={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(_e){return Z[_e]})}var J=/\/+/g;function ee(R,Z){return typeof R=="object"&&R!==null&&R.key!=null?re(""+R.key):Z.toString(36)}function fe(R,Z,_e,Te,je){var xe=typeof R;(xe==="undefined"||xe==="boolean")&&(R=null);var ae=!1;if(R===null)ae=!0;else switch(xe){case"string":case"number":ae=!0;break;case"object":switch(R.$$typeof){case o:case t:ae=!0}}if(ae)return ae=R,je=je(ae),R=Te===""?"."+ee(ae,0):Te,F(je)?(_e="",R!=null&&(_e=R.replace(J,"$&/")+"/"),fe(je,Z,_e,"",function(Ge){return Ge})):je!=null&&(te(je)&&(je=Y(je,_e+(!je.key||ae&&ae.key===je.key?"":(""+je.key).replace(J,"$&/")+"/")+R)),Z.push(je)),1;if(ae=0,Te=Te===""?".":Te+":",F(R))for(var he=0;he<R.length;he++){xe=R[he];var Ce=Te+ee(xe,he);ae+=fe(xe,Z,_e,Ce,je)}else if(Ce=S(R),typeof Ce=="function")for(R=Ce.call(R),he=0;!(xe=R.next()).done;)xe=xe.value,Ce=Te+ee(xe,he++),ae+=fe(xe,Z,_e,Ce,je);else if(xe==="object")throw Z=String(R),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ae}function be(R,Z,_e){if(R==null)return R;var Te=[],je=0;return fe(R,Te,"","",function(xe){return Z.call(_e,xe,je++)}),Te}function ze(R){if(R._status===-1){var Z=R._result;Z=Z(),Z.then(function(_e){(R._status===0||R._status===-1)&&(R._status=1,R._result=_e)},function(_e){(R._status===0||R._status===-1)&&(R._status=2,R._result=_e)}),R._status===-1&&(R._status=0,R._result=Z)}if(R._status===1)return R._result.default;throw R._result}var ie={current:null},X={transition:null},$e={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:X,ReactCurrentOwner:G};function ne(){throw Error("act(...) is not supported in production builds of React.")}return He.Children={map:be,forEach:function(R,Z,_e){be(R,function(){Z.apply(this,arguments)},_e)},count:function(R){var Z=0;return be(R,function(){Z++}),Z},toArray:function(R){return be(R,function(Z){return Z})||[]},only:function(R){if(!te(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},He.Component=T,He.Fragment=r,He.Profiler=s,He.PureComponent=L,He.StrictMode=a,He.Suspense=y,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$e,He.act=ne,He.cloneElement=function(R,Z,_e){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var Te=q({},R.props),je=R.key,xe=R.ref,ae=R._owner;if(Z!=null){if(Z.ref!==void 0&&(xe=Z.ref,ae=G.current),Z.key!==void 0&&(je=""+Z.key),R.type&&R.type.defaultProps)var he=R.type.defaultProps;for(Ce in Z)E.call(Z,Ce)&&!I.hasOwnProperty(Ce)&&(Te[Ce]=Z[Ce]===void 0&&he!==void 0?he[Ce]:Z[Ce])}var Ce=arguments.length-2;if(Ce===1)Te.children=_e;else if(1<Ce){he=Array(Ce);for(var Ge=0;Ge<Ce;Ge++)he[Ge]=arguments[Ge+2];Te.children=he}return{$$typeof:o,type:R.type,key:je,ref:xe,props:Te,_owner:ae}},He.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:c,_context:R},R.Consumer=R},He.createElement=Q,He.createFactory=function(R){var Z=Q.bind(null,R);return Z.type=R,Z},He.createRef=function(){return{current:null}},He.forwardRef=function(R){return{$$typeof:f,render:R}},He.isValidElement=te,He.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:ze}},He.memo=function(R,Z){return{$$typeof:x,type:R,compare:Z===void 0?null:Z}},He.startTransition=function(R){var Z=X.transition;X.transition={};try{R()}finally{X.transition=Z}},He.unstable_act=ne,He.useCallback=function(R,Z){return ie.current.useCallback(R,Z)},He.useContext=function(R){return ie.current.useContext(R)},He.useDebugValue=function(){},He.useDeferredValue=function(R){return ie.current.useDeferredValue(R)},He.useEffect=function(R,Z){return ie.current.useEffect(R,Z)},He.useId=function(){return ie.current.useId()},He.useImperativeHandle=function(R,Z,_e){return ie.current.useImperativeHandle(R,Z,_e)},He.useInsertionEffect=function(R,Z){return ie.current.useInsertionEffect(R,Z)},He.useLayoutEffect=function(R,Z){return ie.current.useLayoutEffect(R,Z)},He.useMemo=function(R,Z){return ie.current.useMemo(R,Z)},He.useReducer=function(R,Z,_e){return ie.current.useReducer(R,Z,_e)},He.useRef=function(R){return ie.current.useRef(R)},He.useState=function(R){return ie.current.useState(R)},He.useSyncExternalStore=function(R,Z,_e){return ie.current.useSyncExternalStore(R,Z,_e)},He.useTransition=function(){return ie.current.useTransition()},He.version="18.3.1",He}var r1;function ac(){return r1||(r1=1,_l.exports=th()),_l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function rh(){if(o1)return Bi;o1=1;var o=ac(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,y,x){var g,w={},S=null,j=null;x!==void 0&&(S=""+x),y.key!==void 0&&(S=""+y.key),y.ref!==void 0&&(j=y.ref);for(g in y)a.call(y,g)&&!c.hasOwnProperty(g)&&(w[g]=y[g]);if(f&&f.defaultProps)for(g in y=f.defaultProps,y)w[g]===void 0&&(w[g]=y[g]);return{$$typeof:t,type:f,key:S,ref:j,props:w,_owner:s.current}}return Bi.Fragment=r,Bi.jsx=d,Bi.jsxs=d,Bi}var i1;function oh(){return i1||(i1=1,zl.exports=rh()),zl.exports}var m=oh(),D=ac(),ls={},kl={exports:{}},Jn={},jl={exports:{}},Sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function ih(){return a1||(a1=1,(function(o){function t(X,$e){var ne=X.length;X.push($e);e:for(;0<ne;){var R=ne-1>>>1,Z=X[R];if(0<s(Z,$e))X[R]=$e,X[ne]=Z,ne=R;else break e}}function r(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var $e=X[0],ne=X.pop();if(ne!==$e){X[0]=ne;e:for(var R=0,Z=X.length,_e=Z>>>1;R<_e;){var Te=2*(R+1)-1,je=X[Te],xe=Te+1,ae=X[xe];if(0>s(je,ne))xe<Z&&0>s(ae,je)?(X[R]=ae,X[xe]=ne,R=xe):(X[R]=je,X[Te]=ne,R=Te);else if(xe<Z&&0>s(ae,ne))X[R]=ae,X[xe]=ne,R=xe;else break e}}return $e}function s(X,$e){var ne=X.sortIndex-$e.sortIndex;return ne!==0?ne:X.id-$e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();o.unstable_now=function(){return d.now()-f}}var y=[],x=[],g=1,w=null,S=3,j=!1,q=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(X){for(var $e=r(x);$e!==null;){if($e.callback===null)a(x);else if($e.startTime<=X)a(x),$e.sortIndex=$e.expirationTime,t(y,$e);else break;$e=r(x)}}function F(X){if(k=!1,H(X),!q)if(r(y)!==null)q=!0,ze(E);else{var $e=r(x);$e!==null&&ie(F,$e.startTime-X)}}function E(X,$e){q=!1,k&&(k=!1,A(Q),Q=-1),j=!0;var ne=S;try{for(H($e),w=r(y);w!==null&&(!(w.expirationTime>$e)||X&&!re());){var R=w.callback;if(typeof R=="function"){w.callback=null,S=w.priorityLevel;var Z=R(w.expirationTime<=$e);$e=o.unstable_now(),typeof Z=="function"?w.callback=Z:w===r(y)&&a(y),H($e)}else a(y);w=r(y)}if(w!==null)var _e=!0;else{var Te=r(x);Te!==null&&ie(F,Te.startTime-$e),_e=!1}return _e}finally{w=null,S=ne,j=!1}}var G=!1,I=null,Q=-1,Y=5,te=-1;function re(){return!(o.unstable_now()-te<Y)}function J(){if(I!==null){var X=o.unstable_now();te=X;var $e=!0;try{$e=I(!0,X)}finally{$e?ee():(G=!1,I=null)}}else G=!1}var ee;if(typeof L=="function")ee=function(){L(J)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,be=fe.port2;fe.port1.onmessage=J,ee=function(){be.postMessage(null)}}else ee=function(){T(J,0)};function ze(X){I=X,G||(G=!0,ee())}function ie(X,$e){Q=T(function(){X(o.unstable_now())},$e)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){q||j||(q=!0,ze(E))},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return r(y)},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var $e=3;break;default:$e=S}var ne=S;S=$e;try{return X()}finally{S=ne}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,$e){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ne=S;S=X;try{return $e()}finally{S=ne}},o.unstable_scheduleCallback=function(X,$e,ne){var R=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?R+ne:R):ne=R,X){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ne+Z,X={id:g++,callback:$e,priorityLevel:X,startTime:ne,expirationTime:Z,sortIndex:-1},ne>R?(X.sortIndex=ne,t(x,X),r(y)===null&&X===r(x)&&(k?(A(Q),Q=-1):k=!0,ie(F,ne-R))):(X.sortIndex=Z,t(y,X),q||j||(q=!0,ze(E))),X},o.unstable_shouldYield=re,o.unstable_wrapCallback=function(X){var $e=S;return function(){var ne=S;S=$e;try{return X.apply(this,arguments)}finally{S=ne}}}})(Sl)),Sl}var s1;function ah(){return s1||(s1=1,jl.exports=ih()),jl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function sh(){if(l1)return Jn;l1=1;var o=ac(),t=ah();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(s[e]=n,e=0;e<n.length;e++)a.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},w={};function S(e){return y.call(w,e)?!0:y.call(g,e)?!1:x.test(e)?w[e]=!0:(g[e]=!0,!1)}function j(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,n,i,l){if(n===null||typeof n>"u"||j(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function k(e,n,i,l,u,h,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=v}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];T[n]=new k(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(A,L);T[n]=new k(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(A,L);T[n]=new k(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(A,L);T[n]=new k(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,n,i,l){var u=T.hasOwnProperty(n)?T[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(q(n,i,u,l)&&(i=null),l||u===null?S(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(n=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(n):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var F=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),G=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),re=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),X=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,R;function Z(e){if(R===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);R=n&&n[1]||""}return`
`+R+e}var _e=!1;function Te(e,n){if(!e||_e)return"";_e=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(K){var l=K}Reflect.construct(e,[],n)}else{try{n.call()}catch(K){l=K}e.call(n.prototype)}else{try{throw Error()}catch(K){l=K}e()}}catch(K){if(K&&l&&typeof K.stack=="string"){for(var u=K.stack.split(`
`),h=l.stack.split(`
`),v=u.length-1,M=h.length-1;1<=v&&0<=M&&u[v]!==h[M];)M--;for(;1<=v&&0<=M;v--,M--)if(u[v]!==h[M]){if(v!==1||M!==1)do if(v--,M--,0>M||u[v]!==h[M]){var B=`
`+u[v].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=v&&0<=M);break}}}finally{_e=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Z(e):""}function je(e){switch(e.tag){case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return e=Te(e.type,!1),e;case 11:return e=Te(e.type.render,!1),e;case 1:return e=Te(e.type,!0),e;default:return""}}function xe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case G:return"Portal";case Y:return"Profiler";case Q:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case te:return(e._context.displayName||"Context")+".Provider";case J:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return n=e.displayName||null,n!==null?n:xe(e.type)||"Memo";case ze:n=e._payload,e=e._init;try{return xe(e(n))}catch{}}return null}function ae(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(e){var n=Ce(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,h=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){l=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pn(e){e._valueTracker||(e._valueTracker=Ge(e))}function Wt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=Ce(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function qn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function We(e,n){var i=n.checked;return ne({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function tn(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=he(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Be(e,n){n=n.checked,n!=null&&H(e,"checked",n,!1)}function Cn(e,n){Be(e,n);var i=he(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ut(e,n.type,i):n.hasOwnProperty("defaultValue")&&ut(e,n.type,he(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Rn(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ut(e,n,i){(n!=="number"||qn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var dt=Array.isArray;function Vn(e,n,i,l){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+he(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Oo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return ne({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qi(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(dt(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:he(i)}}function Ho(e,n){var i=he(n.value),l=he(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Go(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Uo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Ue=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tn(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ir=["Webkit","ms","Moz","O"];Object.keys(rn).forEach(function(e){ir.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),rn[n]=rn[e]})});function tt(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||rn.hasOwnProperty(e)&&rn[e]?(""+n).trim():n+"px"}function Tt(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=tt(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var Yi=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vo(e,n){if(n){if(Yi[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Zo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wt=null,At=null,pt=null;function Yo(e){if(e=wi(e)){if(typeof wt!="function")throw Error(r(280));var n=e.stateNode;n&&(n=za(n),wt(e.stateNode,e.type,n))}}function Xi(e){At?pt?pt.push(e):pt=[e]:At=e}function Ji(){if(At){var e=At,n=pt;if(pt=At=null,Yo(e),n)for(e=0;e<n.length;e++)Yo(n[e])}}function Xo(e,n){return e(n)}function co(){}var ar=!1;function ea(e,n,i){if(ar)return e(n,i);ar=!0;try{return Xo(e,n,i)}finally{ar=!1,(At!==null||pt!==null)&&(co(),Ji())}}function Nr(e,n){var i=e.stateNode;if(i===null)return null;var l=za(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var Lr=!1;if(f)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Lr=!1}function Or(e,n,i,l,u,h,v,M,B){var K=Array.prototype.slice.call(arguments,3);try{n.apply(i,K)}catch(ce){this.onError(ce)}}var Mt=!1,Ot=null,sr=!1,Jo=null,lr={onError:function(e){Mt=!0,Ot=e}};function Is(e,n,i,l,u,h,v,M,B){Mt=!1,Ot=null,Or.apply(lr,arguments)}function Hr(e,n,i,l,u,h,v,M,B){if(Is.apply(this,arguments),Mt){if(Mt){var K=Ot;Mt=!1,Ot=null}else throw Error(r(198));sr||(sr=!0,Jo=K)}}function Pt(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function ei(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function na(e){if(Pt(e)!==e)throw Error(r(188))}function Ns(e){var n=e.alternate;if(!n){if(n=Pt(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,l=n;;){var u=i.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===i)return na(u),e;if(h===l)return na(u),n;h=h.sibling}throw Error(r(188))}if(i.return!==l.return)i=u,l=h;else{for(var v=!1,M=u.child;M;){if(M===i){v=!0,i=u,l=h;break}if(M===l){v=!0,l=u,i=h;break}M=M.sibling}if(!v){for(M=h.child;M;){if(M===i){v=!0,i=h,l=u;break}if(M===l){v=!0,l=h,i=u;break}M=M.sibling}if(!v)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function ni(e){return e=Ns(e),e!==null?ta(e):null}function ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ta(e);if(n!==null)return n;e=e.sibling}return null}var cr=t.unstable_scheduleCallback,ra=t.unstable_cancelCallback,Ls=t.unstable_shouldYield,ti=t.unstable_requestPaint,cn=t.unstable_now,Ws=t.unstable_getCurrentPriorityLevel,ur=t.unstable_ImmediatePriority,oa=t.unstable_UserBlockingPriority,uo=t.unstable_NormalPriority,Os=t.unstable_LowPriority,ri=t.unstable_IdlePriority,oe=null,Ne=null;function Ke(e){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(oe,e,void 0,(e.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:xm,$m=Math.log,gm=Math.LN2;function xm(e){return e>>>=0,e===0?32:31-($m(e)/gm|0)|0}var ia=64,aa=4194304;function oi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sa(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,h=e.pingedLanes,v=i&268435455;if(v!==0){var M=v&~u;M!==0?l=oi(M):(h&=v,h!==0&&(l=oi(h)))}else v=i&~u,v!==0?l=oi(v):h!==0&&(l=oi(h));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,h=n&-n,u>=h||u===16&&(h&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-Nn(n),u=1<<i,l|=e[i],n&=~u;return l}function bm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes;0<h;){var v=31-Nn(h),M=1<<v,B=u[v];B===-1?((M&i)===0||(M&l)!==0)&&(u[v]=bm(M,n)):B<=n&&(e.expiredLanes|=M),h&=~M}}function Hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=ia;return ia<<=1,(ia&4194240)===0&&(ia=64),e}function Gs(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ii(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Nn(n),e[n]=i}function wm(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-Nn(i),h=1<<u;n[u]=0,l[u]=-1,e[u]=-1,i&=~h}}function Us(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-Nn(i),u=1<<l;u&n|e[l]&n&&(e[l]|=n),i&=~u}}var Xe=0;function Rc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dc,Vs,Ec,Bc,Fc,Zs=!1,la=[],dr=null,pr=null,mr=null,ai=new Map,si=new Map,fr=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(e,n){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ai.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(n.pointerId)}}function li(e,n,i,l,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},n!==null&&(n=wi(n),n!==null&&Vs(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function _m(e,n,i,l,u){switch(n){case"focusin":return dr=li(dr,e,n,i,l,u),!0;case"dragenter":return pr=li(pr,e,n,i,l,u),!0;case"mouseover":return mr=li(mr,e,n,i,l,u),!0;case"pointerover":var h=u.pointerId;return ai.set(h,li(ai.get(h)||null,e,n,i,l,u)),!0;case"gotpointercapture":return h=u.pointerId,si.set(h,li(si.get(h)||null,e,n,i,l,u)),!0}return!1}function Nc(e){var n=Gr(e.target);if(n!==null){var i=Pt(n);if(i!==null){if(n=i.tag,n===13){if(n=ei(i),n!==null){e.blockedOn=n,Fc(e.priority,function(){Ec(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ca(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Qs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Ko=l,i.target.dispatchEvent(l),Ko=null}else return n=wi(i),n!==null&&Vs(n),e.blockedOn=i,!1;n.shift()}return!0}function Lc(e,n,i){ca(e)&&i.delete(n)}function km(){Zs=!1,dr!==null&&ca(dr)&&(dr=null),pr!==null&&ca(pr)&&(pr=null),mr!==null&&ca(mr)&&(mr=null),ai.forEach(Lc),si.forEach(Lc)}function ci(e,n){e.blockedOn===n&&(e.blockedOn=null,Zs||(Zs=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,km)))}function ui(e){function n(u){return ci(u,e)}if(0<la.length){ci(la[0],e);for(var i=1;i<la.length;i++){var l=la[i];l.blockedOn===e&&(l.blockedOn=null)}}for(dr!==null&&ci(dr,e),pr!==null&&ci(pr,e),mr!==null&&ci(mr,e),ai.forEach(n),si.forEach(n),i=0;i<fr.length;i++)l=fr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<fr.length&&(i=fr[0],i.blockedOn===null);)Nc(i),i.blockedOn===null&&fr.shift()}var po=F.ReactCurrentBatchConfig,ua=!0;function jm(e,n,i,l){var u=Xe,h=po.transition;po.transition=null;try{Xe=1,Ks(e,n,i,l)}finally{Xe=u,po.transition=h}}function Sm(e,n,i,l){var u=Xe,h=po.transition;po.transition=null;try{Xe=4,Ks(e,n,i,l)}finally{Xe=u,po.transition=h}}function Ks(e,n,i,l){if(ua){var u=Qs(e,n,i,l);if(u===null)m0(e,n,l,da,i),Ic(e,l);else if(_m(u,e,n,i,l))l.stopPropagation();else if(Ic(e,l),n&4&&-1<zm.indexOf(e)){for(;u!==null;){var h=wi(u);if(h!==null&&Dc(h),h=Qs(e,n,i,l),h===null&&m0(e,n,l,da,i),h===u)break;u=h}u!==null&&l.stopPropagation()}else m0(e,n,l,null,i)}}var da=null;function Qs(e,n,i,l){if(da=null,e=Qo(l),e=Gr(e),e!==null)if(n=Pt(e),n===null)e=null;else if(i=n.tag,i===13){if(e=ei(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return da=e,null}function Wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ws()){case ur:return 1;case oa:return 4;case uo:case Os:return 16;case ri:return 536870912;default:return 16}default:return 16}}var hr=null,Ys=null,pa=null;function Oc(){if(pa)return pa;var e,n=Ys,i=n.length,l,u="value"in hr?hr.value:hr.textContent,h=u.length;for(e=0;e<i&&n[e]===u[e];e++);var v=i-e;for(l=1;l<=v&&n[i-l]===u[h-l];l++);return pa=u.slice(e,1<l?1-l:void 0)}function ma(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fa(){return!0}function Hc(){return!1}function rt(e){function n(i,l,u,h,v){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(i=e[M],this[M]=i?i(h):h[M]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fa:Hc,this.isPropagationStopped=Hc,this}return ne(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),n}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=rt(mo),di=ne({},mo,{view:0,detail:0}),qm=rt(di),Js,e0,pi,ha=ne({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:t0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pi&&(pi&&e.type==="mousemove"?(Js=e.screenX-pi.screenX,e0=e.screenY-pi.screenY):e0=Js=0,pi=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:e0}}),Gc=rt(ha),Tm=ne({},ha,{dataTransfer:0}),Am=rt(Tm),Mm=ne({},di,{relatedTarget:0}),n0=rt(Mm),Pm=ne({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=rt(Pm),Rm=ne({},mo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dm=rt(Rm),Em=ne({},mo,{data:0}),Uc=rt(Em),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Im[e])?!!n[e]:!1}function t0(){return Nm}var Lm=ne({},di,{key:function(e){if(e.key){var n=Bm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:t0,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wm=rt(Lm),Om=ne({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=rt(Om),Hm=ne({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:t0}),Gm=rt(Hm),Um=ne({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vm=rt(Um),Zm=ne({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=rt(Zm),Qm=[9,13,27,32],r0=f&&"CompositionEvent"in window,mi=null;f&&"documentMode"in document&&(mi=document.documentMode);var Ym=f&&"TextEvent"in window&&!mi,Zc=f&&(!r0||mi&&8<mi&&11>=mi),Kc=" ",Qc=!1;function Yc(e,n){switch(e){case"keyup":return Qm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function Xm(e,n){switch(e){case"compositionend":return Xc(n);case"keypress":return n.which!==32?null:(Qc=!0,Kc);case"textInput":return e=n.data,e===Kc&&Qc?null:e;default:return null}}function Jm(e,n){if(fo)return e==="compositionend"||!r0&&Yc(e,n)?(e=Oc(),pa=Ys=hr=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zc&&n.locale!=="ko"?null:n.data;default:return null}}var ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ef[e.type]:n==="textarea"}function eu(e,n,i,l){Xi(l),n=ba(n,"onChange"),0<n.length&&(i=new Xs("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var fi=null,hi=null;function nf(e){gu(e,0)}function ya(e){var n=xo(e);if(Wt(n))return e}function tf(e,n){if(e==="change")return n}var nu=!1;if(f){var o0;if(f){var i0="oninput"in document;if(!i0){var tu=document.createElement("div");tu.setAttribute("oninput","return;"),i0=typeof tu.oninput=="function"}o0=i0}else o0=!1;nu=o0&&(!document.documentMode||9<document.documentMode)}function ru(){fi&&(fi.detachEvent("onpropertychange",ou),hi=fi=null)}function ou(e){if(e.propertyName==="value"&&ya(hi)){var n=[];eu(n,hi,e,Qo(e)),ea(nf,n)}}function rf(e,n,i){e==="focusin"?(ru(),fi=n,hi=i,fi.attachEvent("onpropertychange",ou)):e==="focusout"&&ru()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ya(hi)}function af(e,n){if(e==="click")return ya(n)}function sf(e,n){if(e==="input"||e==="change")return ya(n)}function lf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zt=typeof Object.is=="function"?Object.is:lf;function yi(e,n){if(zt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!y.call(n,u)||!zt(e[u],n[u]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,n){var i=iu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=iu(i)}}function su(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?su(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lu(){for(var e=window,n=qn();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=qn(e.document)}return n}function a0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cf(e){var n=lu(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&su(i.ownerDocument.documentElement,i)){if(l!==null&&a0(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!e.extend&&h>l&&(u=l,l=h,h=u),u=au(i,h);var v=au(i,l);u&&v&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),h>l?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uf=f&&"documentMode"in document&&11>=document.documentMode,ho=null,s0=null,$i=null,l0=!1;function cu(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;l0||ho==null||ho!==qn(l)||(l=ho,"selectionStart"in l&&a0(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$i&&yi($i,l)||($i=l,l=ba(s0,"onSelect"),0<l.length&&(n=new Xs("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=ho)))}function $a(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var yo={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},c0={},uu={};f&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function ga(e){if(c0[e])return c0[e];if(!yo[e])return e;var n=yo[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in uu)return c0[e]=n[i];return e}var du=ga("animationend"),pu=ga("animationiteration"),mu=ga("animationstart"),fu=ga("transitionend"),hu=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,n){hu.set(e,n),c(n,[e])}for(var u0=0;u0<yu.length;u0++){var d0=yu[u0],df=d0.toLowerCase(),pf=d0[0].toUpperCase()+d0.slice(1);yr(df,"on"+pf)}yr(du,"onAnimationEnd"),yr(pu,"onAnimationIteration"),yr(mu,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(fu,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function $u(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,Hr(l,n,void 0,e),e.currentTarget=null}function gu(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var v=l.length-1;0<=v;v--){var M=l[v],B=M.instance,K=M.currentTarget;if(M=M.listener,B!==h&&u.isPropagationStopped())break e;$u(u,M,K),h=B}else for(v=0;v<l.length;v++){if(M=l[v],B=M.instance,K=M.currentTarget,M=M.listener,B!==h&&u.isPropagationStopped())break e;$u(u,M,K),h=B}}}if(sr)throw e=Jo,sr=!1,Jo=null,e}function on(e,n){var i=n[x0];i===void 0&&(i=n[x0]=new Set);var l=e+"__bubble";i.has(l)||(xu(n,e,2,!1),i.add(l))}function p0(e,n,i){var l=0;n&&(l|=4),xu(i,e,l,n)}var xa="_reactListening"+Math.random().toString(36).slice(2);function xi(e){if(!e[xa]){e[xa]=!0,a.forEach(function(i){i!=="selectionchange"&&(mf.has(i)||p0(i,!1,e),p0(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xa]||(n[xa]=!0,p0("selectionchange",!1,n))}}function xu(e,n,i,l){switch(Wc(n)){case 1:var u=jm;break;case 4:u=Sm;break;default:u=Ks}i=u.bind(null,n,i,e),u=void 0,!Lr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function m0(e,n,i,l,u){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var M=l.stateNode.containerInfo;if(M===u||M.nodeType===8&&M.parentNode===u)break;if(v===4)for(v=l.return;v!==null;){var B=v.tag;if((B===3||B===4)&&(B=v.stateNode.containerInfo,B===u||B.nodeType===8&&B.parentNode===u))return;v=v.return}for(;M!==null;){if(v=Gr(M),v===null)return;if(B=v.tag,B===5||B===6){l=h=v;continue e}M=M.parentNode}}l=l.return}ea(function(){var K=h,ce=Qo(i),de=[];e:{var se=hu.get(e);if(se!==void 0){var we=Xs,Ae=e;switch(e){case"keypress":if(ma(i)===0)break e;case"keydown":case"keyup":we=Wm;break;case"focusin":Ae="focus",we=n0;break;case"focusout":Ae="blur",we=n0;break;case"beforeblur":case"afterblur":we=n0;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=Am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=Gm;break;case du:case pu:case mu:we=Cm;break;case fu:we=Vm;break;case"scroll":we=qm;break;case"wheel":we=Km;break;case"copy":case"cut":case"paste":we=Dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=Vc}var Me=(n&4)!==0,yn=!Me&&e==="scroll",U=Me?se!==null?se+"Capture":null:se;Me=[];for(var O=K,V;O!==null;){V=O;var ye=V.stateNode;if(V.tag===5&&ye!==null&&(V=ye,U!==null&&(ye=Nr(O,U),ye!=null&&Me.push(bi(O,ye,V)))),yn)break;O=O.return}0<Me.length&&(se=new we(se,Ae,null,i,ce),de.push({event:se,listeners:Me}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",we=e==="mouseout"||e==="pointerout",se&&i!==Ko&&(Ae=i.relatedTarget||i.fromElement)&&(Gr(Ae)||Ae[Ht]))break e;if((we||se)&&(se=ce.window===ce?ce:(se=ce.ownerDocument)?se.defaultView||se.parentWindow:window,we?(Ae=i.relatedTarget||i.toElement,we=K,Ae=Ae?Gr(Ae):null,Ae!==null&&(yn=Pt(Ae),Ae!==yn||Ae.tag!==5&&Ae.tag!==6)&&(Ae=null)):(we=null,Ae=K),we!==Ae)){if(Me=Gc,ye="onMouseLeave",U="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Me=Vc,ye="onPointerLeave",U="onPointerEnter",O="pointer"),yn=we==null?se:xo(we),V=Ae==null?se:xo(Ae),se=new Me(ye,O+"leave",we,i,ce),se.target=yn,se.relatedTarget=V,ye=null,Gr(ce)===K&&(Me=new Me(U,O+"enter",Ae,i,ce),Me.target=V,Me.relatedTarget=yn,ye=Me),yn=ye,we&&Ae)n:{for(Me=we,U=Ae,O=0,V=Me;V;V=$o(V))O++;for(V=0,ye=U;ye;ye=$o(ye))V++;for(;0<O-V;)Me=$o(Me),O--;for(;0<V-O;)U=$o(U),V--;for(;O--;){if(Me===U||U!==null&&Me===U.alternate)break n;Me=$o(Me),U=$o(U)}Me=null}else Me=null;we!==null&&bu(de,se,we,Me,!1),Ae!==null&&yn!==null&&bu(de,yn,Ae,Me,!0)}}e:{if(se=K?xo(K):window,we=se.nodeName&&se.nodeName.toLowerCase(),we==="select"||we==="input"&&se.type==="file")var Pe=tf;else if(Jc(se))if(nu)Pe=sf;else{Pe=of;var Re=rf}else(we=se.nodeName)&&we.toLowerCase()==="input"&&(se.type==="checkbox"||se.type==="radio")&&(Pe=af);if(Pe&&(Pe=Pe(e,K))){eu(de,Pe,i,ce);break e}Re&&Re(e,se,K),e==="focusout"&&(Re=se._wrapperState)&&Re.controlled&&se.type==="number"&&ut(se,"number",se.value)}switch(Re=K?xo(K):window,e){case"focusin":(Jc(Re)||Re.contentEditable==="true")&&(ho=Re,s0=K,$i=null);break;case"focusout":$i=s0=ho=null;break;case"mousedown":l0=!0;break;case"contextmenu":case"mouseup":case"dragend":l0=!1,cu(de,i,ce);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":cu(de,i,ce)}var De;if(r0)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else fo?Yc(e,i)&&(Ie="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ie="onCompositionStart");Ie&&(Zc&&i.locale!=="ko"&&(fo||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&fo&&(De=Oc()):(hr=ce,Ys="value"in hr?hr.value:hr.textContent,fo=!0)),Re=ba(K,Ie),0<Re.length&&(Ie=new Uc(Ie,e,null,i,ce),de.push({event:Ie,listeners:Re}),De?Ie.data=De:(De=Xc(i),De!==null&&(Ie.data=De)))),(De=Ym?Xm(e,i):Jm(e,i))&&(K=ba(K,"onBeforeInput"),0<K.length&&(ce=new Uc("onBeforeInput","beforeinput",null,i,ce),de.push({event:ce,listeners:K}),ce.data=De))}gu(de,n)})}function bi(e,n,i){return{instance:e,listener:n,currentTarget:i}}function ba(e,n){for(var i=n+"Capture",l=[];e!==null;){var u=e,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Nr(e,i),h!=null&&l.unshift(bi(e,h,u)),h=Nr(e,n),h!=null&&l.push(bi(e,h,u))),e=e.return}return l}function $o(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bu(e,n,i,l,u){for(var h=n._reactName,v=[];i!==null&&i!==l;){var M=i,B=M.alternate,K=M.stateNode;if(B!==null&&B===l)break;M.tag===5&&K!==null&&(M=K,u?(B=Nr(i,h),B!=null&&v.unshift(bi(i,B,M))):u||(B=Nr(i,h),B!=null&&v.push(bi(i,B,M)))),i=i.return}v.length!==0&&e.push({event:n,listeners:v})}var ff=/\r\n?/g,hf=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace(ff,`
`).replace(hf,"")}function va(e,n,i){if(n=vu(n),vu(e)!==n&&i)throw Error(r(425))}function wa(){}var f0=null,h0=null;function y0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $0=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,wu=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof wu<"u"?function(e){return wu.resolve(null).then(e).catch(gf)}:$0;function gf(e){setTimeout(function(){throw e})}function g0(e,n){var i=n,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),ui(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);ui(n)}function $r(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function zu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var go=Math.random().toString(36).slice(2),Ct="__reactFiber$"+go,vi="__reactProps$"+go,Ht="__reactContainer$"+go,x0="__reactEvents$"+go,xf="__reactListeners$"+go,bf="__reactHandles$"+go;function Gr(e){var n=e[Ct];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ht]||i[Ct]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=zu(e);e!==null;){if(i=e[Ct])return i;e=zu(e)}return n}e=i,i=e.parentNode}return null}function wi(e){return e=e[Ct]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function za(e){return e[vi]||null}var b0=[],bo=-1;function gr(e){return{current:e}}function an(e){0>bo||(e.current=b0[bo],b0[bo]=null,bo--)}function en(e,n){bo++,b0[bo]=e.current,e.current=n}var xr={},Dn=gr(xr),Zn=gr(!1),Ur=xr;function vo(e,n){var i=e.type.contextTypes;if(!i)return xr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in i)u[h]=n[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Kn(e){return e=e.childContextTypes,e!=null}function _a(){an(Zn),an(Dn)}function _u(e,n,i){if(Dn.current!==xr)throw Error(r(168));en(Dn,n),en(Zn,i)}function ku(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(r(108,ae(e)||"Unknown",u));return ne({},i,l)}function ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Ur=Dn.current,en(Dn,e),en(Zn,Zn.current),!0}function ju(e,n,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=ku(e,n,Ur),l.__reactInternalMemoizedMergedChildContext=e,an(Zn),an(Dn),en(Dn,e)):an(Zn),en(Zn,i)}var Gt=null,ja=!1,v0=!1;function Su(e){Gt===null?Gt=[e]:Gt.push(e)}function vf(e){ja=!0,Su(e)}function br(){if(!v0&&Gt!==null){v0=!0;var e=0,n=Xe;try{var i=Gt;for(Xe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Gt=null,ja=!1}catch(u){throw Gt!==null&&(Gt=Gt.slice(e+1)),cr(ur,br),u}finally{Xe=n,v0=!1}}return null}var wo=[],zo=0,Sa=null,qa=0,mt=[],ft=0,Vr=null,Ut=1,Vt="";function Zr(e,n){wo[zo++]=qa,wo[zo++]=Sa,Sa=e,qa=n}function qu(e,n,i){mt[ft++]=Ut,mt[ft++]=Vt,mt[ft++]=Vr,Vr=e;var l=Ut;e=Vt;var u=32-Nn(l)-1;l&=~(1<<u),i+=1;var h=32-Nn(n)+u;if(30<h){var v=u-u%5;h=(l&(1<<v)-1).toString(32),l>>=v,u-=v,Ut=1<<32-Nn(n)+u|i<<u|l,Vt=h+e}else Ut=1<<h|i<<u|l,Vt=e}function w0(e){e.return!==null&&(Zr(e,1),qu(e,1,0))}function z0(e){for(;e===Sa;)Sa=wo[--zo],wo[zo]=null,qa=wo[--zo],wo[zo]=null;for(;e===Vr;)Vr=mt[--ft],mt[ft]=null,Vt=mt[--ft],mt[ft]=null,Ut=mt[--ft],mt[ft]=null}var ot=null,it=null,sn=!1,_t=null;function Tu(e,n){var i=gt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Au(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ot=e,it=$r(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ot=e,it=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Vr!==null?{id:Ut,overflow:Vt}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=gt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,ot=e,it=null,!0):!1;default:return!1}}function _0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function k0(e){if(sn){var n=it;if(n){var i=n;if(!Au(e,n)){if(_0(e))throw Error(r(418));n=$r(i.nextSibling);var l=ot;n&&Au(e,n)?Tu(l,i):(e.flags=e.flags&-4097|2,sn=!1,ot=e)}}else{if(_0(e))throw Error(r(418));e.flags=e.flags&-4097|2,sn=!1,ot=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function Ta(e){if(e!==ot)return!1;if(!sn)return Mu(e),sn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!y0(e.type,e.memoizedProps)),n&&(n=it)){if(_0(e))throw Pu(),Error(r(418));for(;n;)Tu(e,n),n=$r(n.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){it=$r(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}it=null}}else it=ot?$r(e.stateNode.nextSibling):null;return!0}function Pu(){for(var e=it;e;)e=$r(e.nextSibling)}function _o(){it=ot=null,sn=!1}function j0(e){_t===null?_t=[e]:_t.push(e)}var wf=F.ReactCurrentBatchConfig;function zi(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var u=l,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(v){var M=u.refs;v===null?delete M[h]:M[h]=v},n._stringRef=h,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function Aa(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Cu(e){var n=e._init;return n(e._payload)}function Ru(e){function n(U,O){if(e){var V=U.deletions;V===null?(U.deletions=[O],U.flags|=16):V.push(O)}}function i(U,O){if(!e)return null;for(;O!==null;)n(U,O),O=O.sibling;return null}function l(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function u(U,O){return U=qr(U,O),U.index=0,U.sibling=null,U}function h(U,O,V){return U.index=V,e?(V=U.alternate,V!==null?(V=V.index,V<O?(U.flags|=2,O):V):(U.flags|=2,O)):(U.flags|=1048576,O)}function v(U){return e&&U.alternate===null&&(U.flags|=2),U}function M(U,O,V,ye){return O===null||O.tag!==6?(O=$l(V,U.mode,ye),O.return=U,O):(O=u(O,V),O.return=U,O)}function B(U,O,V,ye){var Pe=V.type;return Pe===I?ce(U,O,V.props.children,ye,V.key):O!==null&&(O.elementType===Pe||typeof Pe=="object"&&Pe!==null&&Pe.$$typeof===ze&&Cu(Pe)===O.type)?(ye=u(O,V.props),ye.ref=zi(U,O,V),ye.return=U,ye):(ye=es(V.type,V.key,V.props,null,U.mode,ye),ye.ref=zi(U,O,V),ye.return=U,ye)}function K(U,O,V,ye){return O===null||O.tag!==4||O.stateNode.containerInfo!==V.containerInfo||O.stateNode.implementation!==V.implementation?(O=gl(V,U.mode,ye),O.return=U,O):(O=u(O,V.children||[]),O.return=U,O)}function ce(U,O,V,ye,Pe){return O===null||O.tag!==7?(O=to(V,U.mode,ye,Pe),O.return=U,O):(O=u(O,V),O.return=U,O)}function de(U,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return O=$l(""+O,U.mode,V),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case E:return V=es(O.type,O.key,O.props,null,U.mode,V),V.ref=zi(U,null,O),V.return=U,V;case G:return O=gl(O,U.mode,V),O.return=U,O;case ze:var ye=O._init;return de(U,ye(O._payload),V)}if(dt(O)||$e(O))return O=to(O,U.mode,V,null),O.return=U,O;Aa(U,O)}return null}function se(U,O,V,ye){var Pe=O!==null?O.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return Pe!==null?null:M(U,O,""+V,ye);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return V.key===Pe?B(U,O,V,ye):null;case G:return V.key===Pe?K(U,O,V,ye):null;case ze:return Pe=V._init,se(U,O,Pe(V._payload),ye)}if(dt(V)||$e(V))return Pe!==null?null:ce(U,O,V,ye,null);Aa(U,V)}return null}function we(U,O,V,ye,Pe){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return U=U.get(V)||null,M(O,U,""+ye,Pe);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case E:return U=U.get(ye.key===null?V:ye.key)||null,B(O,U,ye,Pe);case G:return U=U.get(ye.key===null?V:ye.key)||null,K(O,U,ye,Pe);case ze:var Re=ye._init;return we(U,O,V,Re(ye._payload),Pe)}if(dt(ye)||$e(ye))return U=U.get(V)||null,ce(O,U,ye,Pe,null);Aa(O,ye)}return null}function Ae(U,O,V,ye){for(var Pe=null,Re=null,De=O,Ie=O=0,jn=null;De!==null&&Ie<V.length;Ie++){De.index>Ie?(jn=De,De=null):jn=De.sibling;var Qe=se(U,De,V[Ie],ye);if(Qe===null){De===null&&(De=jn);break}e&&De&&Qe.alternate===null&&n(U,De),O=h(Qe,O,Ie),Re===null?Pe=Qe:Re.sibling=Qe,Re=Qe,De=jn}if(Ie===V.length)return i(U,De),sn&&Zr(U,Ie),Pe;if(De===null){for(;Ie<V.length;Ie++)De=de(U,V[Ie],ye),De!==null&&(O=h(De,O,Ie),Re===null?Pe=De:Re.sibling=De,Re=De);return sn&&Zr(U,Ie),Pe}for(De=l(U,De);Ie<V.length;Ie++)jn=we(De,U,Ie,V[Ie],ye),jn!==null&&(e&&jn.alternate!==null&&De.delete(jn.key===null?Ie:jn.key),O=h(jn,O,Ie),Re===null?Pe=jn:Re.sibling=jn,Re=jn);return e&&De.forEach(function(Tr){return n(U,Tr)}),sn&&Zr(U,Ie),Pe}function Me(U,O,V,ye){var Pe=$e(V);if(typeof Pe!="function")throw Error(r(150));if(V=Pe.call(V),V==null)throw Error(r(151));for(var Re=Pe=null,De=O,Ie=O=0,jn=null,Qe=V.next();De!==null&&!Qe.done;Ie++,Qe=V.next()){De.index>Ie?(jn=De,De=null):jn=De.sibling;var Tr=se(U,De,Qe.value,ye);if(Tr===null){De===null&&(De=jn);break}e&&De&&Tr.alternate===null&&n(U,De),O=h(Tr,O,Ie),Re===null?Pe=Tr:Re.sibling=Tr,Re=Tr,De=jn}if(Qe.done)return i(U,De),sn&&Zr(U,Ie),Pe;if(De===null){for(;!Qe.done;Ie++,Qe=V.next())Qe=de(U,Qe.value,ye),Qe!==null&&(O=h(Qe,O,Ie),Re===null?Pe=Qe:Re.sibling=Qe,Re=Qe);return sn&&Zr(U,Ie),Pe}for(De=l(U,De);!Qe.done;Ie++,Qe=V.next())Qe=we(De,U,Ie,Qe.value,ye),Qe!==null&&(e&&Qe.alternate!==null&&De.delete(Qe.key===null?Ie:Qe.key),O=h(Qe,O,Ie),Re===null?Pe=Qe:Re.sibling=Qe,Re=Qe);return e&&De.forEach(function(nh){return n(U,nh)}),sn&&Zr(U,Ie),Pe}function yn(U,O,V,ye){if(typeof V=="object"&&V!==null&&V.type===I&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case E:e:{for(var Pe=V.key,Re=O;Re!==null;){if(Re.key===Pe){if(Pe=V.type,Pe===I){if(Re.tag===7){i(U,Re.sibling),O=u(Re,V.props.children),O.return=U,U=O;break e}}else if(Re.elementType===Pe||typeof Pe=="object"&&Pe!==null&&Pe.$$typeof===ze&&Cu(Pe)===Re.type){i(U,Re.sibling),O=u(Re,V.props),O.ref=zi(U,Re,V),O.return=U,U=O;break e}i(U,Re);break}else n(U,Re);Re=Re.sibling}V.type===I?(O=to(V.props.children,U.mode,ye,V.key),O.return=U,U=O):(ye=es(V.type,V.key,V.props,null,U.mode,ye),ye.ref=zi(U,O,V),ye.return=U,U=ye)}return v(U);case G:e:{for(Re=V.key;O!==null;){if(O.key===Re)if(O.tag===4&&O.stateNode.containerInfo===V.containerInfo&&O.stateNode.implementation===V.implementation){i(U,O.sibling),O=u(O,V.children||[]),O.return=U,U=O;break e}else{i(U,O);break}else n(U,O);O=O.sibling}O=gl(V,U.mode,ye),O.return=U,U=O}return v(U);case ze:return Re=V._init,yn(U,O,Re(V._payload),ye)}if(dt(V))return Ae(U,O,V,ye);if($e(V))return Me(U,O,V,ye);Aa(U,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,O!==null&&O.tag===6?(i(U,O.sibling),O=u(O,V),O.return=U,U=O):(i(U,O),O=$l(V,U.mode,ye),O.return=U,U=O),v(U)):i(U,O)}return yn}var ko=Ru(!0),Du=Ru(!1),Ma=gr(null),Pa=null,jo=null,S0=null;function q0(){S0=jo=Pa=null}function T0(e){var n=Ma.current;an(Ma),e._currentValue=n}function A0(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function So(e,n){Pa=e,S0=jo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Qn=!0),e.firstContext=null)}function ht(e){var n=e._currentValue;if(S0!==e)if(e={context:e,memoizedValue:n,next:null},jo===null){if(Pa===null)throw Error(r(308));jo=e,Pa.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return n}var Kr=null;function M0(e){Kr===null?Kr=[e]:Kr.push(e)}function Eu(e,n,i,l){var u=n.interleaved;return u===null?(i.next=i,M0(n)):(i.next=u.next,u.next=i),n.interleaved=i,Zt(e,l)}function Zt(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var vr=!1;function P0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wr(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ve&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Zt(e,i)}return u=l.interleaved,u===null?(n.next=n,M0(l)):(n.next=u.next,u.next=n),l.interleaved=n,Zt(e,i)}function Ca(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Us(e,i)}}function Fu(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var v={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?u=h=v:h=h.next=v,i=i.next}while(i!==null);h===null?u=h=n:h=h.next=n}else u=h=n;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Ra(e,n,i,l){var u=e.updateQueue;vr=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,M=u.shared.pending;if(M!==null){u.shared.pending=null;var B=M,K=B.next;B.next=null,v===null?h=K:v.next=K,v=B;var ce=e.alternate;ce!==null&&(ce=ce.updateQueue,M=ce.lastBaseUpdate,M!==v&&(M===null?ce.firstBaseUpdate=K:M.next=K,ce.lastBaseUpdate=B))}if(h!==null){var de=u.baseState;v=0,ce=K=B=null,M=h;do{var se=M.lane,we=M.eventTime;if((l&se)===se){ce!==null&&(ce=ce.next={eventTime:we,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var Ae=e,Me=M;switch(se=n,we=i,Me.tag){case 1:if(Ae=Me.payload,typeof Ae=="function"){de=Ae.call(we,de,se);break e}de=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Me.payload,se=typeof Ae=="function"?Ae.call(we,de,se):Ae,se==null)break e;de=ne({},de,se);break e;case 2:vr=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,se=u.effects,se===null?u.effects=[M]:se.push(M))}else we={eventTime:we,lane:se,tag:M.tag,payload:M.payload,callback:M.callback,next:null},ce===null?(K=ce=we,B=de):ce=ce.next=we,v|=se;if(M=M.next,M===null){if(M=u.shared.pending,M===null)break;se=M,M=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);if(ce===null&&(B=de),u.baseState=B,u.firstBaseUpdate=K,u.lastBaseUpdate=ce,n=u.shared.interleaved,n!==null){u=n;do v|=u.lane,u=u.next;while(u!==n)}else h===null&&(u.shared.lanes=0);Xr|=v,e.lanes=v,e.memoizedState=de}}function Iu(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var _i={},Rt=gr(_i),ki=gr(_i),ji=gr(_i);function Qr(e){if(e===_i)throw Error(r(174));return e}function C0(e,n){switch(en(ji,n),en(ki,e),en(Rt,_i),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=lo(n,e)}an(Rt),en(Rt,n)}function qo(){an(Rt),an(ki),an(ji)}function Nu(e){Qr(ji.current);var n=Qr(Rt.current),i=lo(n,e.type);n!==i&&(en(ki,e),en(Rt,i))}function R0(e){ki.current===e&&(an(Rt),an(ki))}var un=gr(0);function Da(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var D0=[];function E0(){for(var e=0;e<D0.length;e++)D0[e]._workInProgressVersionPrimary=null;D0.length=0}var Ea=F.ReactCurrentDispatcher,B0=F.ReactCurrentBatchConfig,Yr=0,dn=null,vn=null,_n=null,Ba=!1,Si=!1,qi=0,zf=0;function En(){throw Error(r(321))}function F0(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!zt(e[i],n[i]))return!1;return!0}function I0(e,n,i,l,u,h){if(Yr=h,dn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ea.current=e===null||e.memoizedState===null?Sf:qf,e=i(l,u),Si){h=0;do{if(Si=!1,qi=0,25<=h)throw Error(r(301));h+=1,_n=vn=null,n.updateQueue=null,Ea.current=Tf,e=i(l,u)}while(Si)}if(Ea.current=Na,n=vn!==null&&vn.next!==null,Yr=0,_n=vn=dn=null,Ba=!1,n)throw Error(r(300));return e}function N0(){var e=qi!==0;return qi=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?dn.memoizedState=_n=e:_n=_n.next=e,_n}function yt(){if(vn===null){var e=dn.alternate;e=e!==null?e.memoizedState:null}else e=vn.next;var n=_n===null?dn.memoizedState:_n.next;if(n!==null)_n=n,vn=e;else{if(e===null)throw Error(r(310));vn=e,e={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},_n===null?dn.memoizedState=_n=e:_n=_n.next=e}return _n}function Ti(e,n){return typeof n=="function"?n(e):n}function L0(e){var n=yt(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=vn,u=l.baseQueue,h=i.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}l.baseQueue=u=h,i.pending=null}if(u!==null){h=u.next,l=l.baseState;var M=v=null,B=null,K=h;do{var ce=K.lane;if((Yr&ce)===ce)B!==null&&(B=B.next={lane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),l=K.hasEagerState?K.eagerState:e(l,K.action);else{var de={lane:ce,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};B===null?(M=B=de,v=l):B=B.next=de,dn.lanes|=ce,Xr|=ce}K=K.next}while(K!==null&&K!==h);B===null?v=l:B.next=M,zt(l,n.memoizedState)||(Qn=!0),n.memoizedState=l,n.baseState=v,n.baseQueue=B,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do h=u.lane,dn.lanes|=h,Xr|=h,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function W0(e){var n=yt(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,h=n.memoizedState;if(u!==null){i.pending=null;var v=u=u.next;do h=e(h,v.action),v=v.next;while(v!==u);zt(h,n.memoizedState)||(Qn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),i.lastRenderedState=h}return[h,l]}function Lu(){}function Wu(e,n){var i=dn,l=yt(),u=n(),h=!zt(l.memoizedState,u);if(h&&(l.memoizedState=u,Qn=!0),l=l.queue,O0(Gu.bind(null,i,l,e),[e]),l.getSnapshot!==n||h||_n!==null&&_n.memoizedState.tag&1){if(i.flags|=2048,Ai(9,Hu.bind(null,i,l,u,n),void 0,null),kn===null)throw Error(r(349));(Yr&30)!==0||Ou(i,n,u)}return u}function Ou(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=dn.updateQueue,n===null?(n={lastEffect:null,stores:null},dn.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Hu(e,n,i,l){n.value=i,n.getSnapshot=l,Uu(n)&&Vu(e)}function Gu(e,n,i){return i(function(){Uu(n)&&Vu(e)})}function Uu(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!zt(e,i)}catch{return!0}}function Vu(e){var n=Zt(e,1);n!==null&&qt(n,e,1,-1)}function Zu(e){var n=Dt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},n.queue=e,e=e.dispatch=jf.bind(null,dn,e),[n.memoizedState,e]}function Ai(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=dn.updateQueue,n===null?(n={lastEffect:null,stores:null},dn.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function Ku(){return yt().memoizedState}function Fa(e,n,i,l){var u=Dt();dn.flags|=e,u.memoizedState=Ai(1|n,i,void 0,l===void 0?null:l)}function Ia(e,n,i,l){var u=yt();l=l===void 0?null:l;var h=void 0;if(vn!==null){var v=vn.memoizedState;if(h=v.destroy,l!==null&&F0(l,v.deps)){u.memoizedState=Ai(n,i,h,l);return}}dn.flags|=e,u.memoizedState=Ai(1|n,i,h,l)}function Qu(e,n){return Fa(8390656,8,e,n)}function O0(e,n){return Ia(2048,8,e,n)}function Yu(e,n){return Ia(4,2,e,n)}function Xu(e,n){return Ia(4,4,e,n)}function Ju(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ed(e,n,i){return i=i!=null?i.concat([e]):null,Ia(4,4,Ju.bind(null,n,e),i)}function H0(){}function nd(e,n){var i=yt();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&F0(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function td(e,n){var i=yt();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&F0(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function rd(e,n,i){return(Yr&21)===0?(e.baseState&&(e.baseState=!1,Qn=!0),e.memoizedState=i):(zt(i,n)||(i=Cc(),dn.lanes|=i,Xr|=i,e.baseState=!0),n)}function _f(e,n){var i=Xe;Xe=i!==0&&4>i?i:4,e(!0);var l=B0.transition;B0.transition={};try{e(!1),n()}finally{Xe=i,B0.transition=l}}function od(){return yt().memoizedState}function kf(e,n,i){var l=jr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},id(e))ad(n,i);else if(i=Eu(e,n,i,l),i!==null){var u=Wn();qt(i,e,l,u),sd(i,n,l)}}function jf(e,n,i){var l=jr(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(id(e))ad(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,M=h(v,i);if(u.hasEagerState=!0,u.eagerState=M,zt(M,v)){var B=n.interleaved;B===null?(u.next=u,M0(n)):(u.next=B.next,B.next=u),n.interleaved=u;return}}catch{}finally{}i=Eu(e,n,u,l),i!==null&&(u=Wn(),qt(i,e,l,u),sd(i,n,l))}}function id(e){var n=e.alternate;return e===dn||n!==null&&n===dn}function ad(e,n){Si=Ba=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function sd(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Us(e,i)}}var Na={readContext:ht,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},Sf={readContext:ht,useCallback:function(e,n){return Dt().memoizedState=[e,n===void 0?null:n],e},useContext:ht,useEffect:Qu,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Fa(4194308,4,Ju.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Fa(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fa(4,2,e,n)},useMemo:function(e,n){var i=Dt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=Dt();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=kf.bind(null,dn,e),[l.memoizedState,e]},useRef:function(e){var n=Dt();return e={current:e},n.memoizedState=e},useState:Zu,useDebugValue:H0,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Zu(!1),n=e[0];return e=_f.bind(null,e[1]),Dt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=dn,u=Dt();if(sn){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),kn===null)throw Error(r(349));(Yr&30)!==0||Ou(l,n,i)}u.memoizedState=i;var h={value:i,getSnapshot:n};return u.queue=h,Qu(Gu.bind(null,l,h,e),[e]),l.flags|=2048,Ai(9,Hu.bind(null,l,h,i,n),void 0,null),i},useId:function(){var e=Dt(),n=kn.identifierPrefix;if(sn){var i=Vt,l=Ut;i=(l&~(1<<32-Nn(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=qi++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=zf++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qf={readContext:ht,useCallback:nd,useContext:ht,useEffect:O0,useImperativeHandle:ed,useInsertionEffect:Yu,useLayoutEffect:Xu,useMemo:td,useReducer:L0,useRef:Ku,useState:function(){return L0(Ti)},useDebugValue:H0,useDeferredValue:function(e){var n=yt();return rd(n,vn.memoizedState,e)},useTransition:function(){var e=L0(Ti)[0],n=yt().memoizedState;return[e,n]},useMutableSource:Lu,useSyncExternalStore:Wu,useId:od,unstable_isNewReconciler:!1},Tf={readContext:ht,useCallback:nd,useContext:ht,useEffect:O0,useImperativeHandle:ed,useInsertionEffect:Yu,useLayoutEffect:Xu,useMemo:td,useReducer:W0,useRef:Ku,useState:function(){return W0(Ti)},useDebugValue:H0,useDeferredValue:function(e){var n=yt();return vn===null?n.memoizedState=e:rd(n,vn.memoizedState,e)},useTransition:function(){var e=W0(Ti)[0],n=yt().memoizedState;return[e,n]},useMutableSource:Lu,useSyncExternalStore:Wu,useId:od,unstable_isNewReconciler:!1};function kt(e,n){if(e&&e.defaultProps){n=ne({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function G0(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:ne({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var La={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Wn(),u=jr(e),h=Kt(l,u);h.payload=n,i!=null&&(h.callback=i),n=wr(e,h,u),n!==null&&(qt(n,e,u,l),Ca(n,e,u))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Wn(),u=jr(e),h=Kt(l,u);h.tag=1,h.payload=n,i!=null&&(h.callback=i),n=wr(e,h,u),n!==null&&(qt(n,e,u,l),Ca(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Wn(),l=jr(e),u=Kt(i,l);u.tag=2,n!=null&&(u.callback=n),n=wr(e,u,l),n!==null&&(qt(n,e,l,i),Ca(n,e,l))}};function ld(e,n,i,l,u,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,v):n.prototype&&n.prototype.isPureReactComponent?!yi(i,l)||!yi(u,h):!0}function cd(e,n,i){var l=!1,u=xr,h=n.contextType;return typeof h=="object"&&h!==null?h=ht(h):(u=Kn(n)?Ur:Dn.current,l=n.contextTypes,h=(l=l!=null)?vo(e,u):xr),n=new n(i,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=La,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=h),n}function ud(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&La.enqueueReplaceState(n,n.state,null)}function U0(e,n,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},P0(e);var h=n.contextType;typeof h=="object"&&h!==null?u.context=ht(h):(h=Kn(n)?Ur:Dn.current,u.context=vo(e,h)),u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(G0(e,n,h,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&La.enqueueReplaceState(u,u.state,null),Ra(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function To(e,n){try{var i="",l=n;do i+=je(l),l=l.return;while(l);var u=i}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:u,digest:null}}function V0(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Z0(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function dd(e,n,i){i=Kt(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Za||(Za=!0,cl=l),Z0(e,n)},i}function pd(e,n,i){i=Kt(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;i.payload=function(){return l(u)},i.callback=function(){Z0(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){Z0(e,n),typeof l!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),i}function md(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Af;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(i)||(u.add(i),e=Hf.bind(null,e,n,i),n.then(e,e))}function fd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function hd(e,n,i,l,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Kt(-1,1),n.tag=2,wr(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Mf=F.ReactCurrentOwner,Qn=!1;function Ln(e,n,i,l){n.child=e===null?Du(n,null,i,l):ko(n,e.child,i,l)}function yd(e,n,i,l,u){i=i.render;var h=n.ref;return So(n,u),l=I0(e,n,i,l,h,u),i=N0(),e!==null&&!Qn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Qt(e,n,u)):(sn&&i&&w0(n),n.flags|=1,Ln(e,n,l,u),n.child)}function $d(e,n,i,l,u){if(e===null){var h=i.type;return typeof h=="function"&&!yl(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=h,gd(e,n,h,l,u)):(e=es(i.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&u)===0){var v=h.memoizedProps;if(i=i.compare,i=i!==null?i:yi,i(v,l)&&e.ref===n.ref)return Qt(e,n,u)}return n.flags|=1,e=qr(h,l),e.ref=n.ref,e.return=n,n.child=e}function gd(e,n,i,l,u){if(e!==null){var h=e.memoizedProps;if(yi(h,l)&&e.ref===n.ref)if(Qn=!1,n.pendingProps=l=h,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Qn=!0);else return n.lanes=e.lanes,Qt(e,n,u)}return K0(e,n,i,l,u)}function xd(e,n,i){var l=n.pendingProps,u=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Mo,at),at|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,en(Mo,at),at|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,en(Mo,at),at|=l}else h!==null?(l=h.baseLanes|i,n.memoizedState=null):l=i,en(Mo,at),at|=l;return Ln(e,n,u,i),n.child}function bd(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function K0(e,n,i,l,u){var h=Kn(i)?Ur:Dn.current;return h=vo(n,h),So(n,u),i=I0(e,n,i,l,h,u),l=N0(),e!==null&&!Qn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Qt(e,n,u)):(sn&&l&&w0(n),n.flags|=1,Ln(e,n,i,u),n.child)}function vd(e,n,i,l,u){if(Kn(i)){var h=!0;ka(n)}else h=!1;if(So(n,u),n.stateNode===null)Oa(e,n),cd(n,i,l),U0(n,i,l,u),l=!0;else if(e===null){var v=n.stateNode,M=n.memoizedProps;v.props=M;var B=v.context,K=i.contextType;typeof K=="object"&&K!==null?K=ht(K):(K=Kn(i)?Ur:Dn.current,K=vo(n,K));var ce=i.getDerivedStateFromProps,de=typeof ce=="function"||typeof v.getSnapshotBeforeUpdate=="function";de||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==l||B!==K)&&ud(n,v,l,K),vr=!1;var se=n.memoizedState;v.state=se,Ra(n,l,v,u),B=n.memoizedState,M!==l||se!==B||Zn.current||vr?(typeof ce=="function"&&(G0(n,i,ce,l),B=n.memoizedState),(M=vr||ld(n,i,M,l,se,B,K))?(de||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=B),v.props=l,v.state=B,v.context=K,l=M):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{v=n.stateNode,Bu(e,n),M=n.memoizedProps,K=n.type===n.elementType?M:kt(n.type,M),v.props=K,de=n.pendingProps,se=v.context,B=i.contextType,typeof B=="object"&&B!==null?B=ht(B):(B=Kn(i)?Ur:Dn.current,B=vo(n,B));var we=i.getDerivedStateFromProps;(ce=typeof we=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==de||se!==B)&&ud(n,v,l,B),vr=!1,se=n.memoizedState,v.state=se,Ra(n,l,v,u);var Ae=n.memoizedState;M!==de||se!==Ae||Zn.current||vr?(typeof we=="function"&&(G0(n,i,we,l),Ae=n.memoizedState),(K=vr||ld(n,i,K,l,se,Ae,B)||!1)?(ce||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,Ae,B),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,Ae,B)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Ae),v.props=l,v.state=Ae,v.context=B,l=K):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),l=!1)}return Q0(e,n,i,l,h,u)}function Q0(e,n,i,l,u,h){bd(e,n);var v=(n.flags&128)!==0;if(!l&&!v)return u&&ju(n,i,!1),Qt(e,n,h);l=n.stateNode,Mf.current=n;var M=v&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&v?(n.child=ko(n,e.child,null,h),n.child=ko(n,null,M,h)):Ln(e,n,M,h),n.memoizedState=l.state,u&&ju(n,i,!0),n.child}function wd(e){var n=e.stateNode;n.pendingContext?_u(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_u(e,n.context,!1),C0(e,n.containerInfo)}function zd(e,n,i,l,u){return _o(),j0(u),n.flags|=256,Ln(e,n,i,l),n.child}var Y0={dehydrated:null,treeContext:null,retryLane:0};function X0(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,n,i){var l=n.pendingProps,u=un.current,h=!1,v=(n.flags&128)!==0,M;if((M=v)||(M=e!==null&&e.memoizedState===null?!1:(u&2)!==0),M?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),en(un,u&1),e===null)return k0(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=l.children,e=l.fallback,h?(l=n.mode,h=n.child,v={mode:"hidden",children:v},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=v):h=ns(v,l,0,null),e=to(e,l,i,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=X0(i),n.memoizedState=Y0,e):J0(n,v));if(u=e.memoizedState,u!==null&&(M=u.dehydrated,M!==null))return Pf(e,n,v,l,M,u,i);if(h){h=l.fallback,v=n.mode,u=e.child,M=u.sibling;var B={mode:"hidden",children:l.children};return(v&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=B,n.deletions=null):(l=qr(u,B),l.subtreeFlags=u.subtreeFlags&14680064),M!==null?h=qr(M,h):(h=to(h,v,i,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,v=e.child.memoizedState,v=v===null?X0(i):{baseLanes:v.baseLanes|i,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=e.childLanes&~i,n.memoizedState=Y0,l}return h=e.child,e=h.sibling,l=qr(h,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function J0(e,n){return n=ns({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wa(e,n,i,l){return l!==null&&j0(l),ko(n,e.child,null,i),e=J0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pf(e,n,i,l,u,h,v){if(i)return n.flags&256?(n.flags&=-257,l=V0(Error(r(422))),Wa(e,n,v,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=l.fallback,u=n.mode,l=ns({mode:"visible",children:l.children},u,0,null),h=to(h,u,v,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,(n.mode&1)!==0&&ko(n,e.child,null,v),n.child.memoizedState=X0(v),n.memoizedState=Y0,h);if((n.mode&1)===0)return Wa(e,n,v,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var M=l.dgst;return l=M,h=Error(r(419)),l=V0(h,l,void 0),Wa(e,n,v,l)}if(M=(v&e.childLanes)!==0,Qn||M){if(l=kn,l!==null){switch(v&-v){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|v))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Zt(e,u),qt(l,e,u,-1))}return hl(),l=V0(Error(r(421))),Wa(e,n,v,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=Gf.bind(null,e),u._reactRetry=n,null):(e=h.treeContext,it=$r(u.nextSibling),ot=n,sn=!0,_t=null,e!==null&&(mt[ft++]=Ut,mt[ft++]=Vt,mt[ft++]=Vr,Ut=e.id,Vt=e.overflow,Vr=n),n=J0(n,l.children),n.flags|=4096,n)}function kd(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),A0(e.return,n,i)}function el(e,n,i,l,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=u)}function jd(e,n,i){var l=n.pendingProps,u=l.revealOrder,h=l.tail;if(Ln(e,n,l.children,i),l=un.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,i,n);else if(e.tag===19)kd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(en(un,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&Da(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),el(n,!1,u,i,h);break;case"backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Da(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}el(n,!0,i,null,h);break;case"together":el(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oa(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Xr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=qr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=qr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Cf(e,n,i){switch(n.tag){case 3:wd(n),_o();break;case 5:Nu(n);break;case 1:Kn(n.type)&&ka(n);break;case 4:C0(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;en(Ma,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(en(un,un.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?_d(e,n,i):(en(un,un.current&1),e=Qt(e,n,i),e!==null?e.sibling:null);en(un,un.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return jd(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),en(un,un.current),l)break;return null;case 22:case 23:return n.lanes=0,xd(e,n,i)}return Qt(e,n,i)}var Sd,nl,qd,Td;Sd=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},nl=function(){},qd=function(e,n,i,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,Qr(Rt.current);var h=null;switch(i){case"input":u=We(e,u),l=We(e,l),h=[];break;case"select":u=ne({},u,{value:void 0}),l=ne({},l,{value:void 0}),h=[];break;case"textarea":u=Oo(e,u),l=Oo(e,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=wa)}Vo(i,l);var v;i=null;for(K in u)if(!l.hasOwnProperty(K)&&u.hasOwnProperty(K)&&u[K]!=null)if(K==="style"){var M=u[K];for(v in M)M.hasOwnProperty(v)&&(i||(i={}),i[v]="")}else K!=="dangerouslySetInnerHTML"&&K!=="children"&&K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&K!=="autoFocus"&&(s.hasOwnProperty(K)?h||(h=[]):(h=h||[]).push(K,null));for(K in l){var B=l[K];if(M=u!=null?u[K]:void 0,l.hasOwnProperty(K)&&B!==M&&(B!=null||M!=null))if(K==="style")if(M){for(v in M)!M.hasOwnProperty(v)||B&&B.hasOwnProperty(v)||(i||(i={}),i[v]="");for(v in B)B.hasOwnProperty(v)&&M[v]!==B[v]&&(i||(i={}),i[v]=B[v])}else i||(h||(h=[]),h.push(K,i)),i=B;else K==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,M=M?M.__html:void 0,B!=null&&M!==B&&(h=h||[]).push(K,B)):K==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(K,""+B):K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&(s.hasOwnProperty(K)?(B!=null&&K==="onScroll"&&on("scroll",e),h||M===B||(h=[])):(h=h||[]).push(K,B))}i&&(h=h||[]).push("style",i);var K=h;(n.updateQueue=K)&&(n.flags|=4)}},Td=function(e,n,i,l){i!==l&&(n.flags|=4)};function Mi(e,n){if(!sn)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Bn(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function Rf(e,n,i){var l=n.pendingProps;switch(z0(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(n),null;case 1:return Kn(n.type)&&_a(),Bn(n),null;case 3:return l=n.stateNode,qo(),an(Zn),an(Dn),E0(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ta(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_t!==null&&(pl(_t),_t=null))),nl(e,n),Bn(n),null;case 5:R0(n);var u=Qr(ji.current);if(i=n.type,e!==null&&n.stateNode!=null)qd(e,n,i,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Bn(n),null}if(e=Qr(Rt.current),Ta(n)){l=n.stateNode,i=n.type;var h=n.memoizedProps;switch(l[Ct]=n,l[vi]=h,e=(n.mode&1)!==0,i){case"dialog":on("cancel",l),on("close",l);break;case"iframe":case"object":case"embed":on("load",l);break;case"video":case"audio":for(u=0;u<gi.length;u++)on(gi[u],l);break;case"source":on("error",l);break;case"img":case"image":case"link":on("error",l),on("load",l);break;case"details":on("toggle",l);break;case"input":tn(l,h),on("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},on("invalid",l);break;case"textarea":Qi(l,h),on("invalid",l)}Vo(i,h),u=null;for(var v in h)if(h.hasOwnProperty(v)){var M=h[v];v==="children"?typeof M=="string"?l.textContent!==M&&(h.suppressHydrationWarning!==!0&&va(l.textContent,M,e),u=["children",M]):typeof M=="number"&&l.textContent!==""+M&&(h.suppressHydrationWarning!==!0&&va(l.textContent,M,e),u=["children",""+M]):s.hasOwnProperty(v)&&M!=null&&v==="onScroll"&&on("scroll",l)}switch(i){case"input":Pn(l),Rn(l,h,!0);break;case"textarea":Pn(l),Go(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=wa)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{v=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uo(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=v.createElement(i,{is:l.is}):(e=v.createElement(i),i==="select"&&(v=e,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):e=v.createElementNS(e,i),e[Ct]=n,e[vi]=l,Sd(e,n,!1,!1),n.stateNode=e;e:{switch(v=Zo(i,l),i){case"dialog":on("cancel",e),on("close",e),u=l;break;case"iframe":case"object":case"embed":on("load",e),u=l;break;case"video":case"audio":for(u=0;u<gi.length;u++)on(gi[u],e);u=l;break;case"source":on("error",e),u=l;break;case"img":case"image":case"link":on("error",e),on("load",e),u=l;break;case"details":on("toggle",e),u=l;break;case"input":tn(e,l),u=We(e,l),on("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=ne({},l,{value:void 0}),on("invalid",e);break;case"textarea":Qi(e,l),u=Oo(e,l),on("invalid",e);break;default:u=l}Vo(i,u),M=u;for(h in M)if(M.hasOwnProperty(h)){var B=M[h];h==="style"?Tt(e,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ue(e,B)):h==="children"?typeof B=="string"?(i!=="textarea"||B!=="")&&Tn(e,B):typeof B=="number"&&Tn(e,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(s.hasOwnProperty(h)?B!=null&&h==="onScroll"&&on("scroll",e):B!=null&&H(e,h,B,v))}switch(i){case"input":Pn(e),Rn(e,l,!1);break;case"textarea":Pn(e),Go(e);break;case"option":l.value!=null&&e.setAttribute("value",""+he(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?Vn(e,!!l.multiple,h,!1):l.defaultValue!=null&&Vn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=wa)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Bn(n),null;case 6:if(e&&n.stateNode!=null)Td(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=Qr(ji.current),Qr(Rt.current),Ta(n)){if(l=n.stateNode,i=n.memoizedProps,l[Ct]=n,(h=l.nodeValue!==i)&&(e=ot,e!==null))switch(e.tag){case 3:va(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&va(l.nodeValue,i,(e.mode&1)!==0)}h&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Ct]=n,n.stateNode=l}return Bn(n),null;case 13:if(an(un),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(sn&&it!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Pu(),_o(),n.flags|=98560,h=!1;else if(h=Ta(n),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Ct]=n}else _o(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Bn(n),h=!1}else _t!==null&&(pl(_t),_t=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(un.current&1)!==0?wn===0&&(wn=3):hl())),n.updateQueue!==null&&(n.flags|=4),Bn(n),null);case 4:return qo(),nl(e,n),e===null&&xi(n.stateNode.containerInfo),Bn(n),null;case 10:return T0(n.type._context),Bn(n),null;case 17:return Kn(n.type)&&_a(),Bn(n),null;case 19:if(an(un),h=n.memoizedState,h===null)return Bn(n),null;if(l=(n.flags&128)!==0,v=h.rendering,v===null)if(l)Mi(h,!1);else{if(wn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=Da(e),v!==null){for(n.flags|=128,Mi(h,!1),l=v.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)h=i,e=l,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,e=v.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return en(un,un.current&1|2),n.child}e=e.sibling}h.tail!==null&&cn()>Po&&(n.flags|=128,l=!0,Mi(h,!1),n.lanes=4194304)}else{if(!l)if(e=Da(v),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Mi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!sn)return Bn(n),null}else 2*cn()-h.renderingStartTime>Po&&i!==1073741824&&(n.flags|=128,l=!0,Mi(h,!1),n.lanes=4194304);h.isBackwards?(v.sibling=n.child,n.child=v):(i=h.last,i!==null?i.sibling=v:n.child=v,h.last=v)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=cn(),n.sibling=null,i=un.current,en(un,l?i&1|2:i&1),n):(Bn(n),null);case 22:case 23:return fl(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(at&1073741824)!==0&&(Bn(n),n.subtreeFlags&6&&(n.flags|=8192)):Bn(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Df(e,n){switch(z0(n),n.tag){case 1:return Kn(n.type)&&_a(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qo(),an(Zn),an(Dn),E0(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return R0(n),null;case 13:if(an(un),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_o()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return an(un),null;case 4:return qo(),null;case 10:return T0(n.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Ha=!1,Fn=!1,Ef=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ao(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){fn(e,n,l)}else i.current=null}function tl(e,n,i){try{i()}catch(l){fn(e,n,l)}}var Ad=!1;function Bf(e,n){if(f0=ua,e=lu(),a0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var v=0,M=-1,B=-1,K=0,ce=0,de=e,se=null;n:for(;;){for(var we;de!==i||u!==0&&de.nodeType!==3||(M=v+u),de!==h||l!==0&&de.nodeType!==3||(B=v+l),de.nodeType===3&&(v+=de.nodeValue.length),(we=de.firstChild)!==null;)se=de,de=we;for(;;){if(de===e)break n;if(se===i&&++K===u&&(M=v),se===h&&++ce===l&&(B=v),(we=de.nextSibling)!==null)break;de=se,se=de.parentNode}de=we}i=M===-1||B===-1?null:{start:M,end:B}}else i=null}i=i||{start:0,end:0}}else i=null;for(h0={focusedElem:e,selectionRange:i},ua=!1,Se=n;Se!==null;)if(n=Se,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Se=e;else for(;Se!==null;){n=Se;try{var Ae=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Ae!==null){var Me=Ae.memoizedProps,yn=Ae.memoizedState,U=n.stateNode,O=U.getSnapshotBeforeUpdate(n.elementType===n.type?Me:kt(n.type,Me),yn);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var V=n.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ye){fn(n,n.return,ye)}if(e=n.sibling,e!==null){e.return=n.return,Se=e;break}Se=n.return}return Ae=Ad,Ad=!1,Ae}function Pi(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var h=u.destroy;u.destroy=void 0,h!==void 0&&tl(n,i,h)}u=u.next}while(u!==l)}}function Ga(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function rl(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Md(e){var n=e.alternate;n!==null&&(e.alternate=null,Md(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ct],delete n[vi],delete n[x0],delete n[xf],delete n[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=wa));else if(l!==4&&(e=e.child,e!==null))for(ol(e,n,i),e=e.sibling;e!==null;)ol(e,n,i),e=e.sibling}function il(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(il(e,n,i),e=e.sibling;e!==null;)il(e,n,i),e=e.sibling}var An=null,jt=!1;function zr(e,n,i){for(i=i.child;i!==null;)Rd(e,n,i),i=i.sibling}function Rd(e,n,i){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(oe,i)}catch{}switch(i.tag){case 5:Fn||Ao(i,n);case 6:var l=An,u=jt;An=null,zr(e,n,i),An=l,jt=u,An!==null&&(jt?(e=An,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):An.removeChild(i.stateNode));break;case 18:An!==null&&(jt?(e=An,i=i.stateNode,e.nodeType===8?g0(e.parentNode,i):e.nodeType===1&&g0(e,i),ui(e)):g0(An,i.stateNode));break;case 4:l=An,u=jt,An=i.stateNode.containerInfo,jt=!0,zr(e,n,i),An=l,jt=u;break;case 0:case 11:case 14:case 15:if(!Fn&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,v=h.destroy;h=h.tag,v!==void 0&&((h&2)!==0||(h&4)!==0)&&tl(i,n,v),u=u.next}while(u!==l)}zr(e,n,i);break;case 1:if(!Fn&&(Ao(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(M){fn(i,n,M)}zr(e,n,i);break;case 21:zr(e,n,i);break;case 22:i.mode&1?(Fn=(l=Fn)||i.memoizedState!==null,zr(e,n,i),Fn=l):zr(e,n,i);break;default:zr(e,n,i)}}function Dd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Ef),n.forEach(function(l){var u=Uf.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function St(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var h=e,v=n,M=v;e:for(;M!==null;){switch(M.tag){case 5:An=M.stateNode,jt=!1;break e;case 3:An=M.stateNode.containerInfo,jt=!0;break e;case 4:An=M.stateNode.containerInfo,jt=!0;break e}M=M.return}if(An===null)throw Error(r(160));Rd(h,v,u),An=null,jt=!1;var B=u.alternate;B!==null&&(B.return=null),u.return=null}catch(K){fn(u,n,K)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ed(n,e),n=n.sibling}function Ed(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(n,e),Et(e),l&4){try{Pi(3,e,e.return),Ga(3,e)}catch(Me){fn(e,e.return,Me)}try{Pi(5,e,e.return)}catch(Me){fn(e,e.return,Me)}}break;case 1:St(n,e),Et(e),l&512&&i!==null&&Ao(i,i.return);break;case 5:if(St(n,e),Et(e),l&512&&i!==null&&Ao(i,i.return),e.flags&32){var u=e.stateNode;try{Tn(u,"")}catch(Me){fn(e,e.return,Me)}}if(l&4&&(u=e.stateNode,u!=null)){var h=e.memoizedProps,v=i!==null?i.memoizedProps:h,M=e.type,B=e.updateQueue;if(e.updateQueue=null,B!==null)try{M==="input"&&h.type==="radio"&&h.name!=null&&Be(u,h),Zo(M,v);var K=Zo(M,h);for(v=0;v<B.length;v+=2){var ce=B[v],de=B[v+1];ce==="style"?Tt(u,de):ce==="dangerouslySetInnerHTML"?Ue(u,de):ce==="children"?Tn(u,de):H(u,ce,de,K)}switch(M){case"input":Cn(u,h);break;case"textarea":Ho(u,h);break;case"select":var se=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var we=h.value;we!=null?Vn(u,!!h.multiple,we,!1):se!==!!h.multiple&&(h.defaultValue!=null?Vn(u,!!h.multiple,h.defaultValue,!0):Vn(u,!!h.multiple,h.multiple?[]:"",!1))}u[vi]=h}catch(Me){fn(e,e.return,Me)}}break;case 6:if(St(n,e),Et(e),l&4){if(e.stateNode===null)throw Error(r(162));u=e.stateNode,h=e.memoizedProps;try{u.nodeValue=h}catch(Me){fn(e,e.return,Me)}}break;case 3:if(St(n,e),Et(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{ui(n.containerInfo)}catch(Me){fn(e,e.return,Me)}break;case 4:St(n,e),Et(e);break;case 13:St(n,e),Et(e),u=e.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(ll=cn())),l&4&&Dd(e);break;case 22:if(ce=i!==null&&i.memoizedState!==null,e.mode&1?(Fn=(K=Fn)||ce,St(n,e),Fn=K):St(n,e),Et(e),l&8192){if(K=e.memoizedState!==null,(e.stateNode.isHidden=K)&&!ce&&(e.mode&1)!==0)for(Se=e,ce=e.child;ce!==null;){for(de=Se=ce;Se!==null;){switch(se=Se,we=se.child,se.tag){case 0:case 11:case 14:case 15:Pi(4,se,se.return);break;case 1:Ao(se,se.return);var Ae=se.stateNode;if(typeof Ae.componentWillUnmount=="function"){l=se,i=se.return;try{n=l,Ae.props=n.memoizedProps,Ae.state=n.memoizedState,Ae.componentWillUnmount()}catch(Me){fn(l,i,Me)}}break;case 5:Ao(se,se.return);break;case 22:if(se.memoizedState!==null){Id(de);continue}}we!==null?(we.return=se,Se=we):Id(de)}ce=ce.sibling}e:for(ce=null,de=e;;){if(de.tag===5){if(ce===null){ce=de;try{u=de.stateNode,K?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(M=de.stateNode,B=de.memoizedProps.style,v=B!=null&&B.hasOwnProperty("display")?B.display:null,M.style.display=tt("display",v))}catch(Me){fn(e,e.return,Me)}}}else if(de.tag===6){if(ce===null)try{de.stateNode.nodeValue=K?"":de.memoizedProps}catch(Me){fn(e,e.return,Me)}}else if((de.tag!==22&&de.tag!==23||de.memoizedState===null||de===e)&&de.child!==null){de.child.return=de,de=de.child;continue}if(de===e)break e;for(;de.sibling===null;){if(de.return===null||de.return===e)break e;ce===de&&(ce=null),de=de.return}ce===de&&(ce=null),de.sibling.return=de.return,de=de.sibling}}break;case 19:St(n,e),Et(e),l&4&&Dd(e);break;case 21:break;default:St(n,e),Et(e)}}function Et(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Pd(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Tn(u,""),l.flags&=-33);var h=Cd(e);il(e,h,u);break;case 3:case 4:var v=l.stateNode.containerInfo,M=Cd(e);ol(e,M,v);break;default:throw Error(r(161))}}catch(B){fn(e,e.return,B)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ff(e,n,i){Se=e,Bd(e)}function Bd(e,n,i){for(var l=(e.mode&1)!==0;Se!==null;){var u=Se,h=u.child;if(u.tag===22&&l){var v=u.memoizedState!==null||Ha;if(!v){var M=u.alternate,B=M!==null&&M.memoizedState!==null||Fn;M=Ha;var K=Fn;if(Ha=v,(Fn=B)&&!K)for(Se=u;Se!==null;)v=Se,B=v.child,v.tag===22&&v.memoizedState!==null?Nd(u):B!==null?(B.return=v,Se=B):Nd(u);for(;h!==null;)Se=h,Bd(h),h=h.sibling;Se=u,Ha=M,Fn=K}Fd(e)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,Se=h):Fd(e)}}function Fd(e){for(;Se!==null;){var n=Se;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Fn||Ga(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Fn)if(i===null)l.componentDidMount();else{var u=n.elementType===n.type?i.memoizedProps:kt(n.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&Iu(n,h,l);break;case 3:var v=n.updateQueue;if(v!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Iu(n,v,i)}break;case 5:var M=n.stateNode;if(i===null&&n.flags&4){i=M;var B=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&i.focus();break;case"img":B.src&&(i.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var K=n.alternate;if(K!==null){var ce=K.memoizedState;if(ce!==null){var de=ce.dehydrated;de!==null&&ui(de)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Fn||n.flags&512&&rl(n)}catch(se){fn(n,n.return,se)}}if(n===e){Se=null;break}if(i=n.sibling,i!==null){i.return=n.return,Se=i;break}Se=n.return}}function Id(e){for(;Se!==null;){var n=Se;if(n===e){Se=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Se=i;break}Se=n.return}}function Nd(e){for(;Se!==null;){var n=Se;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Ga(4,n)}catch(B){fn(n,i,B)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(B){fn(n,u,B)}}var h=n.return;try{rl(n)}catch(B){fn(n,h,B)}break;case 5:var v=n.return;try{rl(n)}catch(B){fn(n,v,B)}}}catch(B){fn(n,n.return,B)}if(n===e){Se=null;break}var M=n.sibling;if(M!==null){M.return=n.return,Se=M;break}Se=n.return}}var If=Math.ceil,Ua=F.ReactCurrentDispatcher,al=F.ReactCurrentOwner,$t=F.ReactCurrentBatchConfig,Ve=0,kn=null,gn=null,Mn=0,at=0,Mo=gr(0),wn=0,Ci=null,Xr=0,Va=0,sl=0,Ri=null,Yn=null,ll=0,Po=1/0,Yt=null,Za=!1,cl=null,_r=null,Ka=!1,kr=null,Qa=0,Di=0,ul=null,Ya=-1,Xa=0;function Wn(){return(Ve&6)!==0?cn():Ya!==-1?Ya:Ya=cn()}function jr(e){return(e.mode&1)===0?1:(Ve&2)!==0&&Mn!==0?Mn&-Mn:wf.transition!==null?(Xa===0&&(Xa=Cc()),Xa):(e=Xe,e!==0||(e=window.event,e=e===void 0?16:Wc(e.type)),e)}function qt(e,n,i,l){if(50<Di)throw Di=0,ul=null,Error(r(185));ii(e,i,l),((Ve&2)===0||e!==kn)&&(e===kn&&((Ve&2)===0&&(Va|=i),wn===4&&Sr(e,Mn)),Xn(e,l),i===1&&Ve===0&&(n.mode&1)===0&&(Po=cn()+500,ja&&br()))}function Xn(e,n){var i=e.callbackNode;vm(e,n);var l=sa(e,e===kn?Mn:0);if(l===0)i!==null&&ra(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&ra(i),n===1)e.tag===0?vf(Wd.bind(null,e)):Su(Wd.bind(null,e)),$f(function(){(Ve&6)===0&&br()}),i=null;else{switch(Rc(l)){case 1:i=ur;break;case 4:i=oa;break;case 16:i=uo;break;case 536870912:i=ri;break;default:i=uo}i=Qd(i,Ld.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Ld(e,n){if(Ya=-1,Xa=0,(Ve&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Co()&&e.callbackNode!==i)return null;var l=sa(e,e===kn?Mn:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=Ja(e,l);else{n=l;var u=Ve;Ve|=2;var h=Hd();(kn!==e||Mn!==n)&&(Yt=null,Po=cn()+500,eo(e,n));do try{Wf();break}catch(M){Od(e,M)}while(!0);q0(),Ua.current=h,Ve=u,gn!==null?n=0:(kn=null,Mn=0,n=wn)}if(n!==0){if(n===2&&(u=Hs(e),u!==0&&(l=u,n=dl(e,u))),n===1)throw i=Ci,eo(e,0),Sr(e,l),Xn(e,cn()),i;if(n===6)Sr(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Nf(u)&&(n=Ja(e,l),n===2&&(h=Hs(e),h!==0&&(l=h,n=dl(e,h))),n===1))throw i=Ci,eo(e,0),Sr(e,l),Xn(e,cn()),i;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:no(e,Yn,Yt);break;case 3:if(Sr(e,l),(l&130023424)===l&&(n=ll+500-cn(),10<n)){if(sa(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){Wn(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=$0(no.bind(null,e,Yn,Yt),n);break}no(e,Yn,Yt);break;case 4:if(Sr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var v=31-Nn(l);h=1<<v,v=n[v],v>u&&(u=v),l&=~h}if(l=u,l=cn()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*If(l/1960))-l,10<l){e.timeoutHandle=$0(no.bind(null,e,Yn,Yt),l);break}no(e,Yn,Yt);break;case 5:no(e,Yn,Yt);break;default:throw Error(r(329))}}}return Xn(e,cn()),e.callbackNode===i?Ld.bind(null,e):null}function dl(e,n){var i=Ri;return e.current.memoizedState.isDehydrated&&(eo(e,n).flags|=256),e=Ja(e,n),e!==2&&(n=Yn,Yn=i,n!==null&&pl(n)),e}function pl(e){Yn===null?Yn=e:Yn.push.apply(Yn,e)}function Nf(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],h=u.getSnapshot;u=u.value;try{if(!zt(h(),u))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sr(e,n){for(n&=~sl,n&=~Va,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Nn(n),l=1<<i;e[i]=-1,n&=~l}}function Wd(e){if((Ve&6)!==0)throw Error(r(327));Co();var n=sa(e,0);if((n&1)===0)return Xn(e,cn()),null;var i=Ja(e,n);if(e.tag!==0&&i===2){var l=Hs(e);l!==0&&(n=l,i=dl(e,l))}if(i===1)throw i=Ci,eo(e,0),Sr(e,n),Xn(e,cn()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,no(e,Yn,Yt),Xn(e,cn()),null}function ml(e,n){var i=Ve;Ve|=1;try{return e(n)}finally{Ve=i,Ve===0&&(Po=cn()+500,ja&&br())}}function Jr(e){kr!==null&&kr.tag===0&&(Ve&6)===0&&Co();var n=Ve;Ve|=1;var i=$t.transition,l=Xe;try{if($t.transition=null,Xe=1,e)return e()}finally{Xe=l,$t.transition=i,Ve=n,(Ve&6)===0&&br()}}function fl(){at=Mo.current,an(Mo)}function eo(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,yf(i)),gn!==null)for(i=gn.return;i!==null;){var l=i;switch(z0(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_a();break;case 3:qo(),an(Zn),an(Dn),E0();break;case 5:R0(l);break;case 4:qo();break;case 13:an(un);break;case 19:an(un);break;case 10:T0(l.type._context);break;case 22:case 23:fl()}i=i.return}if(kn=e,gn=e=qr(e.current,null),Mn=at=n,wn=0,Ci=null,sl=Va=Xr=0,Yn=Ri=null,Kr!==null){for(n=0;n<Kr.length;n++)if(i=Kr[n],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,h=i.pending;if(h!==null){var v=h.next;h.next=u,l.next=v}i.pending=l}Kr=null}return e}function Od(e,n){do{var i=gn;try{if(q0(),Ea.current=Na,Ba){for(var l=dn.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ba=!1}if(Yr=0,_n=vn=dn=null,Si=!1,qi=0,al.current=null,i===null||i.return===null){wn=1,Ci=n,gn=null;break}e:{var h=e,v=i.return,M=i,B=n;if(n=Mn,M.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var K=B,ce=M,de=ce.tag;if((ce.mode&1)===0&&(de===0||de===11||de===15)){var se=ce.alternate;se?(ce.updateQueue=se.updateQueue,ce.memoizedState=se.memoizedState,ce.lanes=se.lanes):(ce.updateQueue=null,ce.memoizedState=null)}var we=fd(v);if(we!==null){we.flags&=-257,hd(we,v,M,h,n),we.mode&1&&md(h,K,n),n=we,B=K;var Ae=n.updateQueue;if(Ae===null){var Me=new Set;Me.add(B),n.updateQueue=Me}else Ae.add(B);break e}else{if((n&1)===0){md(h,K,n),hl();break e}B=Error(r(426))}}else if(sn&&M.mode&1){var yn=fd(v);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),hd(yn,v,M,h,n),j0(To(B,M));break e}}h=B=To(B,M),wn!==4&&(wn=2),Ri===null?Ri=[h]:Ri.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var U=dd(h,B,n);Fu(h,U);break e;case 1:M=B;var O=h.type,V=h.stateNode;if((h.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(_r===null||!_r.has(V)))){h.flags|=65536,n&=-n,h.lanes|=n;var ye=pd(h,M,n);Fu(h,ye);break e}}h=h.return}while(h!==null)}Ud(i)}catch(Pe){n=Pe,gn===i&&i!==null&&(gn=i=i.return);continue}break}while(!0)}function Hd(){var e=Ua.current;return Ua.current=Na,e===null?Na:e}function hl(){(wn===0||wn===3||wn===2)&&(wn=4),kn===null||(Xr&268435455)===0&&(Va&268435455)===0||Sr(kn,Mn)}function Ja(e,n){var i=Ve;Ve|=2;var l=Hd();(kn!==e||Mn!==n)&&(Yt=null,eo(e,n));do try{Lf();break}catch(u){Od(e,u)}while(!0);if(q0(),Ve=i,Ua.current=l,gn!==null)throw Error(r(261));return kn=null,Mn=0,wn}function Lf(){for(;gn!==null;)Gd(gn)}function Wf(){for(;gn!==null&&!Ls();)Gd(gn)}function Gd(e){var n=Kd(e.alternate,e,at);e.memoizedProps=e.pendingProps,n===null?Ud(e):gn=n,al.current=null}function Ud(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=Rf(i,n,at),i!==null){gn=i;return}}else{if(i=Df(i,n),i!==null){i.flags&=32767,gn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{wn=6,gn=null;return}}if(n=n.sibling,n!==null){gn=n;return}gn=n=e}while(n!==null);wn===0&&(wn=5)}function no(e,n,i){var l=Xe,u=$t.transition;try{$t.transition=null,Xe=1,Of(e,n,i,l)}finally{$t.transition=u,Xe=l}return null}function Of(e,n,i,l){do Co();while(kr!==null);if((Ve&6)!==0)throw Error(r(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(wm(e,h),e===kn&&(gn=kn=null,Mn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Ka||(Ka=!0,Qd(uo,function(){return Co(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=$t.transition,$t.transition=null;var v=Xe;Xe=1;var M=Ve;Ve|=4,al.current=null,Bf(e,i),Ed(i,e),cf(h0),ua=!!f0,h0=f0=null,e.current=i,Ff(i),ti(),Ve=M,Xe=v,$t.transition=h}else e.current=i;if(Ka&&(Ka=!1,kr=e,Qa=u),h=e.pendingLanes,h===0&&(_r=null),Ke(i.stateNode),Xn(e,cn()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)u=n[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(Za)throw Za=!1,e=cl,cl=null,e;return(Qa&1)!==0&&e.tag!==0&&Co(),h=e.pendingLanes,(h&1)!==0?e===ul?Di++:(Di=0,ul=e):Di=0,br(),null}function Co(){if(kr!==null){var e=Rc(Qa),n=$t.transition,i=Xe;try{if($t.transition=null,Xe=16>e?16:e,kr===null)var l=!1;else{if(e=kr,kr=null,Qa=0,(Ve&6)!==0)throw Error(r(331));var u=Ve;for(Ve|=4,Se=e.current;Se!==null;){var h=Se,v=h.child;if((Se.flags&16)!==0){var M=h.deletions;if(M!==null){for(var B=0;B<M.length;B++){var K=M[B];for(Se=K;Se!==null;){var ce=Se;switch(ce.tag){case 0:case 11:case 15:Pi(8,ce,h)}var de=ce.child;if(de!==null)de.return=ce,Se=de;else for(;Se!==null;){ce=Se;var se=ce.sibling,we=ce.return;if(Md(ce),ce===K){Se=null;break}if(se!==null){se.return=we,Se=se;break}Se=we}}}var Ae=h.alternate;if(Ae!==null){var Me=Ae.child;if(Me!==null){Ae.child=null;do{var yn=Me.sibling;Me.sibling=null,Me=yn}while(Me!==null)}}Se=h}}if((h.subtreeFlags&2064)!==0&&v!==null)v.return=h,Se=v;else e:for(;Se!==null;){if(h=Se,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Pi(9,h,h.return)}var U=h.sibling;if(U!==null){U.return=h.return,Se=U;break e}Se=h.return}}var O=e.current;for(Se=O;Se!==null;){v=Se;var V=v.child;if((v.subtreeFlags&2064)!==0&&V!==null)V.return=v,Se=V;else e:for(v=O;Se!==null;){if(M=Se,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Ga(9,M)}}catch(Pe){fn(M,M.return,Pe)}if(M===v){Se=null;break e}var ye=M.sibling;if(ye!==null){ye.return=M.return,Se=ye;break e}Se=M.return}}if(Ve=u,br(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(oe,e)}catch{}l=!0}return l}finally{Xe=i,$t.transition=n}}return!1}function Vd(e,n,i){n=To(i,n),n=dd(e,n,1),e=wr(e,n,1),n=Wn(),e!==null&&(ii(e,1,n),Xn(e,n))}function fn(e,n,i){if(e.tag===3)Vd(e,e,i);else for(;n!==null;){if(n.tag===3){Vd(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_r===null||!_r.has(l))){e=To(i,e),e=pd(n,e,1),n=wr(n,e,1),e=Wn(),n!==null&&(ii(n,1,e),Xn(n,e));break}}n=n.return}}function Hf(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=Wn(),e.pingedLanes|=e.suspendedLanes&i,kn===e&&(Mn&i)===i&&(wn===4||wn===3&&(Mn&130023424)===Mn&&500>cn()-ll?eo(e,0):sl|=i),Xn(e,n)}function Zd(e,n){n===0&&((e.mode&1)===0?n=1:(n=aa,aa<<=1,(aa&130023424)===0&&(aa=4194304)));var i=Wn();e=Zt(e,n),e!==null&&(ii(e,n,i),Xn(e,i))}function Gf(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Zd(e,i)}function Uf(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),Zd(e,i)}var Kd;Kd=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Zn.current)Qn=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return Qn=!1,Cf(e,n,i);Qn=(e.flags&131072)!==0}else Qn=!1,sn&&(n.flags&1048576)!==0&&qu(n,qa,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Oa(e,n),e=n.pendingProps;var u=vo(n,Dn.current);So(n,i),u=I0(null,n,l,e,u,i);var h=N0();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Kn(l)?(h=!0,ka(n)):h=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,P0(n),u.updater=La,n.stateNode=u,u._reactInternals=n,U0(n,l,e,i),n=Q0(null,n,l,!0,h,i)):(n.tag=0,sn&&h&&w0(n),Ln(null,n,u,i),n=n.child),n;case 16:l=n.elementType;e:{switch(Oa(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=Zf(l),e=kt(l,e),u){case 0:n=K0(null,n,l,e,i);break e;case 1:n=vd(null,n,l,e,i);break e;case 11:n=yd(null,n,l,e,i);break e;case 14:n=$d(null,n,l,kt(l.type,e),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),K0(e,n,l,u,i);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),vd(e,n,l,u,i);case 3:e:{if(wd(n),e===null)throw Error(r(387));l=n.pendingProps,h=n.memoizedState,u=h.element,Bu(e,n),Ra(n,l,null,i);var v=n.memoizedState;if(l=v.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){u=To(Error(r(423)),n),n=zd(e,n,l,i,u);break e}else if(l!==u){u=To(Error(r(424)),n),n=zd(e,n,l,i,u);break e}else for(it=$r(n.stateNode.containerInfo.firstChild),ot=n,sn=!0,_t=null,i=Du(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(_o(),l===u){n=Qt(e,n,i);break e}Ln(e,n,l,i)}n=n.child}return n;case 5:return Nu(n),e===null&&k0(n),l=n.type,u=n.pendingProps,h=e!==null?e.memoizedProps:null,v=u.children,y0(l,u)?v=null:h!==null&&y0(l,h)&&(n.flags|=32),bd(e,n),Ln(e,n,v,i),n.child;case 6:return e===null&&k0(n),null;case 13:return _d(e,n,i);case 4:return C0(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ko(n,null,l,i):Ln(e,n,l,i),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),yd(e,n,l,u,i);case 7:return Ln(e,n,n.pendingProps,i),n.child;case 8:return Ln(e,n,n.pendingProps.children,i),n.child;case 12:return Ln(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,h=n.memoizedProps,v=u.value,en(Ma,l._currentValue),l._currentValue=v,h!==null)if(zt(h.value,v)){if(h.children===u.children&&!Zn.current){n=Qt(e,n,i);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var M=h.dependencies;if(M!==null){v=h.child;for(var B=M.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=Kt(-1,i&-i),B.tag=2;var K=h.updateQueue;if(K!==null){K=K.shared;var ce=K.pending;ce===null?B.next=B:(B.next=ce.next,ce.next=B),K.pending=B}}h.lanes|=i,B=h.alternate,B!==null&&(B.lanes|=i),A0(h.return,i,n),M.lanes|=i;break}B=B.next}}else if(h.tag===10)v=h.type===n.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(r(341));v.lanes|=i,M=v.alternate,M!==null&&(M.lanes|=i),A0(v,i,n),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===n){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}Ln(e,n,u.children,i),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,So(n,i),u=ht(u),l=l(u),n.flags|=1,Ln(e,n,l,i),n.child;case 14:return l=n.type,u=kt(l,n.pendingProps),u=kt(l.type,u),$d(e,n,l,u,i);case 15:return gd(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),Oa(e,n),n.tag=1,Kn(l)?(e=!0,ka(n)):e=!1,So(n,i),cd(n,l,u),U0(n,l,u,i),Q0(null,n,l,!0,e,i);case 19:return jd(e,n,i);case 22:return xd(e,n,i)}throw Error(r(156,n.tag))};function Qd(e,n){return cr(e,n)}function Vf(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,n,i,l){return new Vf(e,n,i,l)}function yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zf(e){if(typeof e=="function")return yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===J)return 11;if(e===be)return 14}return 2}function qr(e,n){var i=e.alternate;return i===null?(i=gt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function es(e,n,i,l,u,h){var v=2;if(l=e,typeof e=="function")yl(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case I:return to(i.children,u,h,n);case Q:v=8,u|=8;break;case Y:return e=gt(12,i,n,u|2),e.elementType=Y,e.lanes=h,e;case ee:return e=gt(13,i,n,u),e.elementType=ee,e.lanes=h,e;case fe:return e=gt(19,i,n,u),e.elementType=fe,e.lanes=h,e;case ie:return ns(i,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:v=10;break e;case re:v=9;break e;case J:v=11;break e;case be:v=14;break e;case ze:v=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=gt(v,i,n,u),n.elementType=e,n.type=l,n.lanes=h,n}function to(e,n,i,l){return e=gt(7,e,l,n),e.lanes=i,e}function ns(e,n,i,l){return e=gt(22,e,l,n),e.elementType=ie,e.lanes=i,e.stateNode={isHidden:!1},e}function $l(e,n,i){return e=gt(6,e,null,n),e.lanes=i,e}function gl(e,n,i){return n=gt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kf(e,n,i,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function xl(e,n,i,l,u,h,v,M,B){return e=new Kf(e,n,i,M,B),n===1?(n=1,h===!0&&(n|=8)):n=0,h=gt(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},P0(h),e}function Qf(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function Yd(e){if(!e)return xr;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Kn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Kn(i))return ku(e,i,n)}return n}function Xd(e,n,i,l,u,h,v,M,B){return e=xl(i,l,!0,e,u,h,v,M,B),e.context=Yd(null),i=e.current,l=Wn(),u=jr(i),h=Kt(l,u),h.callback=n??null,wr(i,h,u),e.current.lanes=u,ii(e,u,l),Xn(e,l),e}function ts(e,n,i,l){var u=n.current,h=Wn(),v=jr(u);return i=Yd(i),n.context===null?n.context=i:n.pendingContext=i,n=Kt(h,v),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=wr(u,n,v),e!==null&&(qt(e,u,v,h),Ca(e,u,v)),v}function rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function bl(e,n){Jd(e,n),(e=e.alternate)&&Jd(e,n)}function Yf(){return null}var e1=typeof reportError=="function"?reportError:function(e){console.error(e)};function vl(e){this._internalRoot=e}os.prototype.render=vl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));ts(e,n,null,null)},os.prototype.unmount=vl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jr(function(){ts(null,e,null,null)}),n[Ht]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bc();e={blockedOn:null,target:e,priority:n};for(var i=0;i<fr.length&&n!==0&&n<fr[i].priority;i++);fr.splice(i,0,e),i===0&&Nc(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function n1(){}function Xf(e,n,i,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var K=rs(v);h.call(K)}}var v=Xd(n,l,e,0,null,!1,!1,"",n1);return e._reactRootContainer=v,e[Ht]=v.current,xi(e.nodeType===8?e.parentNode:e),Jr(),v}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var M=l;l=function(){var K=rs(B);M.call(K)}}var B=xl(e,0,!1,null,null,!1,!1,"",n1);return e._reactRootContainer=B,e[Ht]=B.current,xi(e.nodeType===8?e.parentNode:e),Jr(function(){ts(n,B,i,l)}),B}function as(e,n,i,l,u){var h=i._reactRootContainer;if(h){var v=h;if(typeof u=="function"){var M=u;u=function(){var B=rs(v);M.call(B)}}ts(n,v,e,u)}else v=Xf(i,n,e,u,l);return rs(v)}Dc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=oi(n.pendingLanes);i!==0&&(Us(n,i|1),Xn(n,cn()),(Ve&6)===0&&(Po=cn()+500,br()))}break;case 13:Jr(function(){var l=Zt(e,1);if(l!==null){var u=Wn();qt(l,e,1,u)}}),bl(e,1)}},Vs=function(e){if(e.tag===13){var n=Zt(e,134217728);if(n!==null){var i=Wn();qt(n,e,134217728,i)}bl(e,134217728)}},Ec=function(e){if(e.tag===13){var n=jr(e),i=Zt(e,n);if(i!==null){var l=Wn();qt(i,e,n,l)}bl(e,n)}},Bc=function(){return Xe},Fc=function(e,n){var i=Xe;try{return Xe=e,n()}finally{Xe=i}},wt=function(e,n,i){switch(n){case"input":if(Cn(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var u=za(l);if(!u)throw Error(r(90));Wt(l),Cn(l,u)}}}break;case"textarea":Ho(e,i);break;case"select":n=i.value,n!=null&&Vn(e,!!i.multiple,n,!1)}},Xo=ml,co=Jr;var Jf={usingClientEntryPoint:!1,Events:[wi,xo,za,Xi,Ji,ml]},Ei={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eh={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ni(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||Yf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{oe=ss.inject(eh),Ne=ss}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf,Jn.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(n))throw Error(r(200));return Qf(e,n,null,i)},Jn.createRoot=function(e,n){if(!wl(e))throw Error(r(299));var i=!1,l="",u=e1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=xl(e,1,!1,null,null,i,!1,l,u),e[Ht]=n.current,xi(e.nodeType===8?e.parentNode:e),new vl(n)},Jn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ni(n),e=e===null?null:e.stateNode,e},Jn.flushSync=function(e){return Jr(e)},Jn.hydrate=function(e,n,i){if(!is(n))throw Error(r(200));return as(null,e,n,!0,i)},Jn.hydrateRoot=function(e,n,i){if(!wl(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,u=!1,h="",v=e1;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),n=Xd(n,null,e,1,i??null,u,!1,h,v),e[Ht]=n.current,xi(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,u]:n.mutableSourceEagerHydrationData.push(i,u);return new os(n)},Jn.render=function(e,n,i){if(!is(n))throw Error(r(200));return as(null,e,n,!1,i)},Jn.unmountComponentAtNode=function(e){if(!is(e))throw Error(r(40));return e._reactRootContainer?(Jr(function(){as(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1},Jn.unstable_batchedUpdates=ml,Jn.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!is(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return as(e,n,i,!1,l)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var c1;function lh(){if(c1)return kl.exports;c1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kl.exports=sh(),kl.exports}var u1;function ch(){if(u1)return ls;u1=1;var o=lh();return ls.createRoot=o.createRoot,ls.hydrateRoot=o.hydrateRoot,ls}var uh=ch();const dh=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
resources:
  - "interactive|resources/abs_value/abs-value-explorer.html|Absolute Value Explorer|Wartosc bezwzgledna — odleglosc od zera"
---
Wartość bezwzględna mierzy odległość liczby od zera na osi liczbowej — niezależnie od znaku, zawsze dostajemy wynik nieujemny.<br><br>Definicja: $|x| = x$ gdy $x \\geq 0$, oraz $|x| = -x$ gdy $x < 0$. Zawsze zachodzi $|x| \\geq 0$.<br><br>Równanie $|x| = a$ (dla $a > 0$) ma dwa rozwiązania: $x = a$ i $x = -a$. Nierówność $|x| < a$ oznacza $-a < x < a$. Uogólnienie: $|x - c|$ to odległość od punktu $c$.

<!-- example -->
Na przykład: $|-5| = 5$, bo $-5$ jest w odległości 5 od zera.<br><br>Równanie $|x| = 3$ daje $x = 3$ lub $x = -3$.<br><br>Nierówność $|x - 2| < 3$ oznacza $-1 < x < 5$, czyli wszystkie punkty bliżej niż 3 od punktu 2.
`,ph=`---
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
`,mh=`---
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
`,fh=`---
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
Na przykład: arytmetyczny $1, 4, 7, 10$ ($d = 3$) vs geometryczny $1, 2, 4, 8$ ($q = 2$).<br><br>Przy $n = 10$: arytmetyczny daje $a_{10} = 28$, geometryczny $a_{10} = 512$ — ogromna różnica!<br><br>Ale gdy $q = 0{,}5$: $1;\\ 0{,}5;\\ 0{,}25;\\ 0{,}125;\\ \\ldots$ zbiega do $S_\\infty = \\frac{1}{1-0{,}5} = 2$.
`,hh=`---
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
`,yh=`---
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
`,$h=`---
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
`,gh=`---
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
`,xh=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,bh=`---
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
Prawdopodobieństwo warunkowe odpowiada na pytanie: jak zmienia się szansa zdarzenia, gdy wiemy, że inne zdarzenie już zaszło?<br><br>Wzór: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ — prawdopodobieństwo $A$, gdy wiemy że zaszło $B$.<br><br>Bayes pozwala odwrócić warunek — z $P(B|A)$ wyliczyć $P(A|B)$. Twierdzenie Bayesa: $P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$. Jeśli zdarzenia $A_i$ rozbijają przestrzeń na rozłączne przypadki, to $P(B)$ można policzyć sumując po nich: Wzór na prawdopodobieństwo całkowite: $P(B) = \\sum P(B|A_i) \\cdot P(A_i)$. Drzewo decyzyjne pomaga organizować obliczenia.

<!-- example -->
Na przykład: w klasie 30 osób, 12 gra w piłkę nożną, 8 gra w piłkę i koszykówkę.<br><br>$P(\\text{koszykówka} | \\text{piłka}) = \\frac{8}{12} = \\frac{2}{3}$. Wiemy, że ktoś gra w piłkę — jakie szanse, że gra też w kosza?
`,vh=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
Krzywe stożkowe powstają dosłownie tak, jak sugeruje nazwa: tniesz nieskończony stożek płaszczyzną pod różnymi kątami i patrzysz, co zostaje na przecięciu. W zależności od kąta cięcia dostajesz okrąg, elipsę, parabolę albo hiperbolę.<br><br>Równania w postaci kanonicznej (wycentrowane w $(0,0)$):<br>**Elipsa**: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ — $a$ i $b$ to półosie (wzdłuż $x$ i $y$). Używasz, gdy masz sumę kwadratów z różnymi mianownikami.<br>**Hiperbola**: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ — różnica kwadratów. Dwie oddzielne "gałęzie", otwarte w lewo i prawo.<br>**Parabola**: $y^2 = 2px$ — jedna zmienna w kwadracie, druga liniowo. Otwarta w bok (dla $x^2 = 2py$ — do góry/dołu).<br><br>Okrąg $x^2 + y^2 = r^2$ to szczególny przypadek elipsy, gdy $a = b = r$.

<!-- example -->
Rozpoznaj krzywą $4x^2 + 9y^2 = 36$.<br><br>Dzielisz obie strony przez $36$: $\\frac{4x^2}{36} + \\frac{9y^2}{36} = 1 \\Rightarrow \\frac{x^2}{9} + \\frac{y^2}{4} = 1$.<br><br>Suma kwadratów z różnymi mianownikami $\\Rightarrow$ **elipsa** o półosiach $a = 3$ (wzdłuż $x$) i $b = 2$ (wzdłuż $y$).
`,wh=`---
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
`,zh=`---
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
`,_h=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
resources:
  - "interactive|deriv-apps-explorer.html|Applications of Derivatives|Zastosowania pochodnych"
---
Pochodna sama w sobie jest ciekawa, ale prawdziwa moc ujawnia się w trzech zastosowaniach: badanie monotoniczności, szukanie ekstremów i zadania optymalizacyjne.<br><br>Monotoniczność: jeśli $f'(x) > 0$ na przedziale, to $f$ rośnie; jeśli $f'(x) < 0$ — maleje. Używasz, gdy trzeba podać przedziały wzrostu/spadku.<br><br>Ekstrema: szukasz $x_0$, gdzie $f'(x_0) = 0$, i sprawdzasz znak $f'$ przed i po. Zmiana z $+$ na $-$ = maksimum, z $-$ na $+$ = minimum.<br><br>Optymalizacja — schemat, którego trzymaj się sztywno:<br>1. Z treści zadania wypisz, co minimalizujesz/maksymalizujesz (np. objętość, pole).<br>2. Zapisz wszystkie zmienne i powiąż je równaniem z warunków zadania.<br>3. Sprowadź do funkcji *jednej* zmiennej $f(x)$ z zaznaczoną dziedziną.<br>4. Policz $f'(x)$, przyrównaj do zera, sprawdź znak pochodnej wokół pierwiastka.

<!-- example -->
Z kartonu $20 \\times 30$ cm wycinamy kwadraty o boku $x$ w rogach i składamy pudełko. Jakie $x$ daje maksymalną objętość?<br><br>Wymiary pudełka: podstawa $(20 - 2x)(30 - 2x)$, wysokość $x$. Objętość: $V(x) = x(20 - 2x)(30 - 2x)$, gdzie $x \\in (0, 10)$.<br><br>Po rozwinięciu $V(x) = 4x^3 - 100x^2 + 600x \\Rightarrow V'(x) = 12x^2 - 200x + 600$.<br><br>$V'(x) = 0 \\Rightarrow x^2 - \\tfrac{50}{3}x + 50 = 0 \\Rightarrow x \\approx 3{,}92$ (drugi pierwiastek odpada — poza dziedziną). Znak $V'$ zmienia się z $+$ na $-$, więc to maksimum.
`,kh=`---
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
---
Pochodna mówi, jak szybko zmienia się funkcja w danym punkcie — to tempo zmian. Geometrycznie: nachylenie stycznej do wykresu w tym punkcie.<br><br>Definicja: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ — czyli średnia prędkość na odcinku $[x, x+h]$, gdy $h$ staje się znikomo małe.<br><br>Reguły, które musisz znać:<br>$(x^n)' = n x^{n-1}$ — używasz zawsze, gdy masz potęgę.<br>$(f+g)' = f' + g'$ i $(c \\cdot f)' = c f'$ — rozbijasz sumę na kawałki, stałą wyciągasz.<br>$(f \\cdot g)' = f'g + fg'$ — dla iloczynu, np. $x^2 \\sin x$.<br>$(f/g)' = \\frac{f'g - fg'}{g^2}$ — dla ilorazu.<br>$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$ — reguła łańcuchowa, gdy masz funkcję "w funkcji", np. $\\sin(x^2)$.<br><br>W praktyce: rozbij funkcję na najprostsze kawałki, policz każdy osobno, złóż wyniki.

<!-- example -->
Policz $f'(x)$ dla $f(x) = 3x^4 - 2x + 7$.<br><br>Rozbij na składniki: $(3x^4)' - (2x)' + (7)'$.<br><br>$(3x^4)' = 3 \\cdot 4x^3 = 12x^3 \\Rightarrow (2x)' = 2 \\Rightarrow (7)' = 0$.<br><br>Składamy: $f'(x) = 12x^3 - 2$.
`,jh=`---
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
Zmienna losowa $X$ przypisuje każdemu zdarzeniu z przestrzeni probabilistycznej liczbę. Rozróżniamy dwa typy: **dyskretne** (wynik ze zbioru przeliczalnego — np. rzut kostką, liczba orłów w serii) i **ciągłe** (wynik z przedziału — np. czas oczekiwania, wzrost człowieka).<br><br>Dla zmiennej dyskretnej rozkład opisuje **funkcja masy prawdopodobieństwa** $p(k) = P(X = k)$. Dla ciągłej — **gęstość** $f(x)$, dla której $P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$. W obu przypadkach $\\sum p(k) = 1$ lub $\\int f(x)\\,dx = 1$.<br><br>Dwie kluczowe charakterystyki rozkładu:<br>• **Wartość oczekiwana** $\\mathbb{E}(X) = \\sum k \\cdot p(k)$ (lub $\\int x \\, f(x)\\,dx$) — "średnia" w sensie probabilistycznym.<br>• **Wariancja** $\\text{Var}(X) = \\mathbb{E}\\bigl((X - \\mathbb{E}(X))^2\\bigr) = \\mathbb{E}(X^2) - \\mathbb{E}(X)^2$ — miara rozrzutu.<br><br>Najważniejsze rozkłady: **dwumianowy** $B(n, p)$ (liczba sukcesów w $n$ próbach Bernoulliego), **Poissona** $\\mathcal{P}(\\lambda)$ (rzadkie zdarzenia, granica dwumianowego), **normalny** $\\mathcal{N}(\\mu, \\sigma^2)$ (centralne twierdzenie graniczne: suma wielu niezależnych zmiennych losowych o skończonej wariancji, po standaryzacji, zbiega do rozkładu normalnego — niezależnie od tego, z jakich rozkładów pochodzą składniki).

<!-- example -->
**Przykład** (dwumianowy): Rzucamy monetą 10 razy. Jakie jest prawdopodobieństwo dokładnie 3 orłów?<br><br>$X \\sim B(10, 0.5)$, więc $P(X = 3) = \\binom{10}{3} \\cdot 0.5^3 \\cdot 0.5^7 = 120 \\cdot \\tfrac{1}{1024} \\approx 0.117$.<br><br>Wartość oczekiwana: $\\mathbb{E}(X) = np = 5$. Wariancja: $\\text{Var}(X) = np(1-p) = 2.5$.<br><br>**Ciekawostka** (granica Poissona): dla dużych $n$ i małych $p$, takich że $\\lambda = np$ jest stałe, $B(n, p) \\to \\mathcal{P}(\\lambda)$. To dlatego Poisson modeluje "rzadkie zdarzenia w czasie" — np. liczbę trzęsień ziemi w roku, połączeń do call center na minutę.
`,Sh=`---
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
Rozkład na czynniki to jedno z najważniejszych narzędzi w algebrze — zamienia sumę w iloczyn, co upraszcza równania i wyrażenia.<br><br>Kluczowe metody: wyłączanie wspólnego czynnika, wzory skróconego mnożenia ($a^2 - b^2 = (a-b)(a+b)$), grupowanie wyrazów, oraz rozkład trójmianu kwadratowego na iloczyn $(x - x_1)(x - x_2)$.

<!-- example -->
Na przykład: $x^2 - 9 = (x-3)(x+3)$. Sprawdź mnożąc: $(x-3)(x+3) = x^2 + 3x - 3x - 9 = x^2 - 9$ ✓.<br><br>Albo: $x^2 - 5x + 6$ — szukasz dwóch liczb, które dają w sumie $-5$, a w iloczynie $6$: to $-2$ i $-3$, więc $(x-2)(x-3)$.
`,qh=`---
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
`,Th=`---
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
`,Ah=`---
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
`,Mh=`---
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
`,Ph=`---
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
`,Ch=`---
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
`,Rh=`---
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
`,Dh=`---
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
`,Eh=`---
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
`,Bh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
resources:
  - "interactive|geo-series-explorer.html|Geometric Series Explorer|Szeregi geometryczne — Eksplorator"
---
Szereg geometryczny to suma nieskończenie wielu wyrazów ciągu geometrycznego — choć składników jest nieskończenie wiele, suma może być skończona.<br><br>Postać: $S = a_1 + a_1 q + a_1 q^2 + \\ldots$ Gdy $|q| < 1$, szereg jest zbieżny i $S = \\frac{a_1}{1-q}$. Gdy $|q| \\geq 1$, szereg jest rozbieżny (suma rośnie bez końca).<br><br>Suma częściowa $S_n = \\frac{a_1(1-q^n)}{1-q}$ przybliża sumę nieskończoną z błędem $\\left|\\frac{a_1 q^n}{1-q}\\right|$.

<!-- example -->
Na przykład: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ to szereg z $a_1 = \\frac{1}{2}$, $q = \\frac{1}{2}$. Suma: $S = \\frac{1/2}{1 - 1/2} = 1$.<br><br>Ciekawe zastosowanie: $0{,}333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\ldots = \\frac{3/10}{1 - 1/10} = \\frac{1}{3}$.
`,Fh=`---
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
`,Ih=`---
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
Całka to dwie rzeczy w jednym: operacja odwrotna do pochodnej (antypochodna) oraz pole pod wykresem funkcji. Te dwa światy spina wzór Newtona–Leibniza.<br><br>Wzór Newtona–Leibniza: $\\int_a^b f(x)\\,dx = F(b) - F(a)$, gdzie $F$ jest dowolną antypochodną $f$ (czyli $F' = f$). Używasz go zawsze, gdy liczysz całkę oznaczoną.<br><br>Podstawowe antypochodne — trzeba umieć na pamięć:<br>$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ (dla $n \\neq -1$) — potęgi.<br>$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ — jedyny wyjątek od reguły potęg.<br>$\\int e^x\\,dx = e^x + C$ — eksponenta sama sobie.<br>$\\int \\sin x\\,dx = -\\cos x + C$, $\\int \\cos x\\,dx = \\sin x + C$.<br><br>Uwaga praktyczna: gdy wykres leży poniżej osi $x$, całka wychodzi ujemna — to nie błąd, to "pole ze znakiem".

<!-- example -->
Policz $\\int_0^2 3x^2\\,dx$.<br><br>Antypochodna: $F(x) = 3 \\cdot \\frac{x^3}{3} = x^3 \\Rightarrow$ sprawdź: $(x^3)' = 3x^2$ ✓.<br><br>Stosujesz Newtona–Leibniza: $\\int_0^2 3x^2\\,dx = F(2) - F(0) = 8 - 0 = 8$.
`,Nh=`---
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
Granica funkcji opisuje, do jakiej wartości funkcja dąży, gdy $x$ zbliża się do pewnego punktu — nawet jeśli sama funkcja w tym punkcie nie jest określona.<br><br>Formalnie: $\\lim_{x \\to a} f(x) = L$ oznacza, że dla każdego $\\varepsilon > 0$ istnieje $\\delta > 0$, takie że $0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon$.<br><br>Aby granica istniała, granice jednostronne (lewostronna i prawostronna) muszą się zgadzać.

<!-- example -->
Na przykład: $f(x) = \\frac{x^2 - 1}{x - 1}$ jest nieokreślona dla $x = 1$ (bo $\\frac{0}{0}$).<br><br>Ale $\\frac{x^2 - 1}{x - 1} = x + 1$ dla $x \\neq 1$, więc $\\lim_{x \\to 1} f(x) = 2$. Funkcja dąży do 2, choć w punkcie 1 nie istnieje.
`,Lh=`---
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
`,Wh=`---
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
`,Oh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
resources:
  - "interactive|linear-systems-explorer.html|Linear Systems Explorer|Układy równań liniowych — Eksplorator"
---
Układ równań liniowych to dwie (lub więcej) prostych na płaszczyźnie — szukamy punktu, w którym się przecinają.<br><br>Jeśli proste się przecinają, układ ma dokładnie jedno rozwiązanie. Jeśli są równoległe (ten sam współczynnik kierunkowy, różne wyrazy wolne), układ jest sprzeczny. Jeśli się pokrywają — nieoznaczony (nieskończenie wiele rozwiązań).<br><br>Metoda podstawiania: z jednego równania wyrażamy jedną zmienną i wstawiamy do drugiego. Metoda przeciwnych współczynników: dodajemy równania tak, by jedna zmienna się skróciła.

<!-- example -->
Na przykład: $y = 2x + 1$ i $y = -x + 4$.<br><br>Podstawiamy: $2x + 1 = -x + 4$, więc $3x = 3$, $x = 1$, $y = 3$. Rozwiązanie: $(1, 3)$.<br><br>Sprawdzenie: $3 = 2 \\cdot 1 + 1$ ✓ i $3 = -1 + 4$ ✓.
`,Hh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
resources:
  - "interactive|log-eq-explorer.html|Log & Exp Equations Explorer|Równania log. i wykł."
---
`,Gh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
resources:
  - "interactive|resources/log_exp/log-exp-explorer.html|Logarithms & Exponentials Explorer|Logarytmy i wykładnicze — eksplorator"
---
Logarytm to odwrotność potęgowania — odpowiada na pytanie: do jakiej potęgi podnieść podstawę, by otrzymać daną liczbę?<br><br>Definicja: $\\log_a b = c \\iff a^c = b$. Wykres $y = \\log_a x$ jest odbiciem $y = a^x$ względem prostej $y = x$.<br><br>Kluczowe własności: $\\log(a \\cdot b) = \\log a + \\log b$, $\\log(a/b) = \\log a - \\log b$, $\\log(a^n) = n \\cdot \\log a$. Zmiana podstawy: $\\log_a x = \\frac{\\log_b x}{\\log_b a}$.

<!-- example -->
Na przykład: $2^3 = 8$, więc $\\log_2 8 = 3$.<br><br>Reguła iloczynu: $\\log_2(4 \\cdot 8) = \\log_2 4 + \\log_2 8 = 2 + 3 = 5$. Sprawdzenie: $\\log_2 32 = 5$ ✓.<br><br>Zmiana podstawy: $\\log_2 8 = \\frac{\\ln 8}{\\ln 2} = \\frac{2{,}08}{0{,}69} = 3$ ✓.
`,Uh=`---
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
`,Vh=`---
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
`,Zh=`---
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
`,Kh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,Qh=`---
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
`,Yh=`---
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
`,Xh=`---
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
`,Jh=`---
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
`,e2=`---
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
`,n2=`---
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
Prawdopodobieństwo mierzy szansę zajścia zdarzenia — od 0 (niemożliwe) do 1 (pewne).<br><br>Prawdopodobieństwo klasyczne: $P(A) = \\frac{|A|}{|\\Omega|}$ — liczba zdarzeń sprzyjających dzielona przez liczbę wszystkich zdarzeń. Zdarzenie przeciwne: $P(A') = 1 - P(A)$.<br><br>Dla zdarzeń niezależnych: $P(A \\cap B) = P(A) \\cdot P(B)$. Dla dowolnych: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.

<!-- example -->
Na przykład: kostka sześcienna. Zdarzenia parzyste: $\\{2, 4, 6\\}$, więc $P(\\text{parzysta}) = \\frac{3}{6} = \\frac{1}{2}$.<br><br>Zdarzenie przeciwne: $P(\\text{NIE parzysta}) = 1 - \\frac{1}{2} = \\frac{1}{2}$.
`,t2=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
Dowód matematyczny to nie magia, tylko uporządkowany ciąg argumentów: ze **Założenia** przez **przekształcenia** dochodzisz do **Tezy**. Na maturze za dowody są duże punkty, a większość uczniów po prostu ich nie próbuje — to strata.<br><br>Rodzaje poleceń (każde wymaga czegoś innego):<br>**"Wykaż" / "Udowodnij"** — pełen dowód, od założenia do tezy, z uzasadnieniem każdego kroku.<br>**"Uzasadnij"** — krócej, ale nadal z argumentacją (nie samo obliczenie).<br>**"Sprawdź"** — wystarczy podstawić i pokazać, że się zgadza.<br><br>Typowe techniki:<br>• **Dowód bezpośredni** — wyprowadzasz tezę z założenia przez przekształcenia algebraiczne.<br>• **Przez sprzeczność** — zakładasz zaprzeczenie tezy i dochodzisz do czegoś niemożliwego.<br>• **Indukcja** — dla zdań o wszystkich $n \\in \\mathbb{N}$ (szczegóły w osobnym temacie).<br>• **Kontrprzykład** — jeden przykład łamiący tezę wystarczy, by ją **obalić** (nie potwierdzić).<br><br>Formalnie: musisz napisać spójniki "stąd", "więc", "zatem", "ponieważ". Brak łączenia = utrata punktu za formę, nawet jak obliczenia są OK.

<!-- example -->
**Wykaż, że dla każdego $n \\in \\mathbb{N}$ liczba $n^2 + n$ jest parzysta.**<br><br>Wyciągamy wspólny czynnik: $n^2 + n = n(n+1)$.<br><br>Zauważamy, że $n$ i $n+1$ to dwie **kolejne** liczby naturalne — jedna z nich musi być parzysta.<br><br>Zatem iloczyn $n(n+1)$ zawiera czynnik parzysty, więc sam jest parzysty. $\\blacksquare$
`,r2=`---
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
`,o2=`---
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
Równanie kwadratowe to jedno z najczęstszych równań w matematyce — rozwiązuje się je za pomocą wyróżnika (delty).<br><br>Postać: $ax^2 + bx + c = 0$. Wyróżnik: $\\Delta = b^2 - 4ac$. Gdy $\\Delta > 0$: dwa rozwiązania $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$. Gdy $\\Delta = 0$: jedno rozwiązanie $x = \\frac{-b}{2a}$. Gdy $\\Delta < 0$: brak rozwiązań rzeczywistych.<br><br>Alternatywne metody: rozkład na czynniki lub wzory Viete'a.

<!-- example -->
Na przykład: $x^2 - 5x + 6 = 0$. Tu $a=1$, $b=-5$, $c=6$.<br><br>$\\Delta = 25 - 24 = 1$. Rozwiązania: $x = \\frac{5 \\pm 1}{2}$, czyli $x=3$ lub $x=2$.<br><br>Sprawdź: $3^2 - 5 \\cdot 3 + 6 = 9 - 15 + 6 = 0$ ✓.
`,i2=`---
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
`,a2=`---
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
`,s2=`---
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
`,l2=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
resources:
  - "interactive|resources/sequences/sequences-explorer.html|Sequences Explorer|Ciągi — eksplorator"
---
Ciąg to uporządkowana lista liczb, w której każdy wyraz ma swój numer — formalnie, funkcja z liczb naturalnych w liczby rzeczywiste.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$ (stała różnica $d$ między kolejnymi wyrazami). Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$ (stały iloraz $q$).<br><br>Sumy: arytmetyczny $S_n = \\frac{n(a_1 + a_n)}{2}$, geometryczny $S_n = a_1 \\cdot \\frac{1 - q^n}{1 - q}$.

<!-- example -->
Na przykład: ciąg arytmetyczny $2, 5, 8, 11, \\ldots$ ma $a_1 = 2$, $d = 3$. Więc $a_{10} = 2 + 9 \\cdot 3 = 29$, a $S_{10} = \\frac{10(2+29)}{2} = 155$.<br><br>Ciąg geometryczny $3, 6, 12, 24, \\ldots$ ma $q = 2$, więc $a_5 = 3 \\cdot 2^4 = 48$.
`,c2=`---
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
`,u2=`---
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
`,d2=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
resources:
  - "interactive|solid-geom-explorer.html|Solid Geometry Explorer|Eksplorator stereometrii — bryły 3D"
---
Stereometria to geometria w trzech wymiarach — patrzysz na bryłę i próbujesz „zobaczyć" trójkąty ukryte w środku. Bryła jest foremna, gdy jej podstawa jest wielokątem foremnym, a wierzchołek leży nad jej środkiem.<br><br>**Podstawowe bryły**: prostopadłościan, graniastosłup (boki to prostokąty), ostrosłup (ściany boczne to trójkąty schodzące się w wierzchołku), walec, stożek, kula.<br><br>**Wzory na objętość** (gdzie $B$ = pole podstawy, $h$ = wysokość): $V_{\\text{graniastosłup}} = B \\cdot h$, $V_{\\text{ostrosłup}} = \\frac{1}{3} B h$, $V_{\\text{walec}} = \\pi r^2 h$, $V_{\\text{stożek}} = \\frac{1}{3}\\pi r^2 h$, $V_{\\text{kula}} = \\frac{4}{3}\\pi r^3$.<br><br>**Pole powierzchni**: całkowite $P_c = P_b + 2B$ (dla bryły z dwiema podstawami) oraz pole boczne $P_b$. Dla walca rozwinięcie boku to prostokąt $2\\pi r \\times h$, więc $P_b = 2\\pi r h$ — zawsze myśl o rozwinięciu.<br><br>**Elementy ostrosłupa** (ucz się ich na pamięć): **krawędź boczna** łączy wierzchołek z wierzchołkiem podstawy; **wysokość ściany bocznej** (apotema bryły) idzie z wierzchołka ostrosłupa prostopadle do krawędzi podstawy; **apotema podstawy** leży w podstawie — od środka podstawy prostopadle do jej krawędzi; **wysokość** $H$ spada z wierzchołka prostopadle do środka podstawy. **Kąt nachylenia krawędzi bocznej do podstawy** to kąt między tą krawędzią a jej rzutem (odcinek od środka podstawy do wierzchołka podstawy). **Kąt nachylenia ściany bocznej do podstawy** to kąt między wysokością ściany bocznej a apotemą podstawy.<br><br>**Najważniejszy trick matury**: prawie każde zadanie ze stereometrii = znajdź odpowiedni trójkąt prostokątny wewnątrz bryły i użyj Pitagorasa / trygonometrii. Serio — rysuj bryłę, zaznacz wysokość i szukaj trójkątów.<br><br>**Przekrój osiowy**: dla walca to prostokąt $2r \\times h$; dla stożka — trójkąt równoramienny o podstawie $2r$ i wysokości $h$.

<!-- example -->
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 6$ i krawędź boczną $b = 5$. Oblicz wysokość $H$ i kąt $\\alpha$ nachylenia krawędzi bocznej do podstawy.<br><br>Krok 1: przekątna kwadratu podstawy $d = a\\sqrt{2} = 6\\sqrt{2}$, więc połowa przekątnej $p = 3\\sqrt{2}$ (to rzut krawędzi bocznej na podstawę).<br><br>Krok 2: znajdź trójkąt prostokątny wewnątrz — przyprostokątne $H$ i $p$, przeciwprostokątna $b$. Z Pitagorasa: $H^2 = b^2 - p^2 = 25 - 18 = 7$, więc $H = \\sqrt{7}$.<br><br>Krok 3: $\\tan \\alpha = \\frac{H}{p} = \\frac{\\sqrt{7}}{3\\sqrt{2}} = \\frac{\\sqrt{14}}{6}$.
`,p2=`---
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
`,m2=`---
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
`,f2=`---
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
Trygonometria zaczyna się prosto: w trójkącie prostokątnym $\\sin$, $\\cos$ i $\\tan$ to po prostu stosunki boków względem kąta ostrego $x$.<br><br>Nazwy boków (najczęściej się mylą): **przeciwprostokątna** — najdłuższy bok, naprzeciw kąta prostego; **przyprostokątna naprzeciwległa** — naprzeciw kąta $x$; **przyprostokątna przyległa** — dotyka kąta $x$ (ale nie jest przeciwprostokątną).<br><br>Definicje:<br>$\\sin x = \\frac{\\text{naprzeciwległa}}{\\text{przeciwprostokątna}}$, $\\cos x = \\frac{\\text{przyległa}}{\\text{przeciwprostokątna}}$, $\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\text{naprzeciwległa}}{\\text{przyległa}}$.<br><br>Wartości do zapamiętania: $\\sin 0° = 0$, $\\sin 30° = \\tfrac{1}{2}$, $\\sin 45° = \\tfrac{\\sqrt{2}}{2}$, $\\sin 60° = \\tfrac{\\sqrt{3}}{2}$, $\\sin 90° = 1$ (cosinus — to samo, ale od końca).<br><br>Jedynka trygonometryczna: $\\sin^2 x + \\cos^2 x = 1$ — używasz, gdy znasz jedną funkcję i szukasz drugiej. Koło trygonometryczne rozszerza definicje na kąty powyżej $90°$ i ujemne.

<!-- example -->
Oblicz $\\sin 30° + \\cos 60°$. Podstawiasz: $\\tfrac{1}{2} + \\tfrac{1}{2} = 1$.<br><br>Teraz trudniej: $\\sin x = \\tfrac{3}{5}$ i $x$ jest ostry. Znajdź $\\cos x$.<br><br>Z jedynki: $\\cos^2 x = 1 - \\sin^2 x = 1 - \\tfrac{9}{25} = \\tfrac{16}{25} \\Rightarrow \\cos x = \\tfrac{4}{5}$ (bierzesz $+$, bo $x$ ostry, więc $\\cos > 0$).
`,h2=`---
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
`,y2=`---
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
Wzorów trygonometrycznych jest dużo i wyglądają groźnie, ale na maturze chodzi o jedno: rozpoznać, który wzór pasuje, i podstawić. Nie musisz wiedzieć, skąd się biorą — musisz umieć je zastosować.<br><br>Wzory redukcyjne — zamieniają kąt "dziwny" na kąt z pierwszej ćwiartki. Zasada: $\\sin(90° - x) = \\cos x$, $\\cos(90° - x) = \\sin x$ (kąty dopełniające zamieniają funkcję). $\\sin(180° - x) = \\sin x$, $\\cos(180° - x) = -\\cos x$ (sam znak się zmienia).<br><br>Sumy i różnice:<br>$\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$ — używasz, gdy argument to suma/różnica.<br>$\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$ (uwaga na odwrócony znak).<br><br>Podwojone kąty (wynikają z sum, ale warto znać osobno):<br>$\\sin 2x = 2 \\sin x \\cos x$.<br>$\\cos 2x = \\cos^2 x - \\sin^2 x = 1 - 2\\sin^2 x = 2\\cos^2 x - 1$ — trzy formy, bo różne są wygodne w różnych zadaniach.

<!-- example -->
Uprość $\\sin(90° - 30°) + \\cos(2 \\cdot 30°)$.<br><br>Pierwszy człon (redukcja): $\\sin(90° - 30°) = \\cos 30° = \\tfrac{\\sqrt{3}}{2}$.<br><br>Drugi człon (podwojony kąt, ale prościej policzyć wprost): $\\cos 60° = \\tfrac{1}{2}$.<br><br>Suma: $\\tfrac{\\sqrt{3}}{2} + \\tfrac{1}{2} = \\tfrac{\\sqrt{3} + 1}{2}$.
`,$2=`---
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
`,g2=`---
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
`,x2=`---
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
`,b2=`---
options:
  - "$(-\\\\infty, -2] \\\\cup [4, +\\\\infty)$"
  - "$[-2, 4]$"
  - "$(-\\\\infty, -2)$"
  - "$(4, +\\\\infty)$"
correct: 0
hint: "Nierówność $|x-1| \\\\geq 3$ daje $x-1 \\\\geq 3$ lub $x-1 \\\\leq -3$."
tests:
  abs_value: 1.0
  linear_eq: 0.5
---
Zbiorem rozwiązań nierówności $|x - 1| \\geq 3$ jest:
`,v2=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,w2=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,z2=`---
source: cke
options:
  - "$(-\\\\infty, -2] \\\\cup [5, +\\\\infty)$"
  - "$[-2, 5]$"
  - "$(-\\\\infty, -2) \\\\cup (5, +\\\\infty)$"
  - "$(-\\\\infty, 5]$"
correct: 0
hint: "Zbiór na osi to $(-\\\\infty, -2] \\\\cup [5, +\\\\infty)$. Środek: $\\\\frac{-2+5}{2} = 1{,}5$, odległość: $3{,}5$. Nierówność $|x - 1{,}5| \\\\geq 3{,}5$ spełnia zaznaczony zbiór."
tests:
  abs_value: 1.0
  linear_ineq: 0.5
---
Na osi liczbowej zaznaczono zbiór $(-\\infty, -2] \\cup [5, +\\infty)$. Zbiór ten jest zbiorem wszystkich rozwiązań nierówności:
`,_2=`---
source: cke
options:
  - "$|x - 3{,}5| \\\\geq 1{,}5$"
  - "$|x - 1{,}5| \\\\geq 3{,}5$"
  - "$|x - 3{,}5| \\\\leq 1{,}5$"
  - "$|x - 1{,}5| \\\\leq 3{,}5$"
correct: 1
hint: "Zaznaczony zbiór to $(-\\\\infty, -2] \\\\cup [5, +\\\\infty)$. Środek symetrii: $\\\\frac{-2+5}{2} = 1{,}5$, promień: $\\\\frac{5-(-2)}{2} = 3{,}5$. Warunek: punkty oddalone od $1{,}5$ o co najmniej $3{,}5$, czyli $|x - 1{,}5| \\\\geq 3{,}5$."
tests:
  abs_value: 1.0
  linear_ineq: 0.3
---
Na osi liczbowej zaznaczono sumę przedziałów $(-\\infty, -2] \\cup [5, +\\infty)$. Zaznaczony zbiór jest zbiorem wszystkich rozwiązań nierówności:
`,k2=`---
options:
  - "2"
  - "4"
  - "1/2"
  - "3"
correct: 0
hint: "$a = \\\\dfrac{6-2}{3-1} = \\\\dfrac{4}{2} = 2$."
tests:
  analytic_geom: 1.0
---
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,j2=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,S2=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,q2=`---
source: cke
options:
  - "$m = -\\\\frac{1}{2}$"
  - "$m = \\\\frac{1}{2}$"
  - "$m = -3$"
  - "$m = 1$"
correct: 0
hint: "Proste prostopadłe mają iloczyn współczynników kierunkowych równy $-1$: $(m+1) \\\\cdot (-2) = -1$, więc $m + 1 = \\\\frac{1}{2}$, stąd $m = -\\\\frac{1}{2}$."
tests:
  analytic_geom: 1.0
  fn_linear: 0.5
---
W układzie współrzędnych proste $k: y = (m + 1)x + 7$ oraz $l: y = -2x + 7$ są prostopadłe, gdy liczba $m$ jest równa:
`,T2=`---
source: cke
options:
  - "$m = -4$"
  - "$m = -2$"
  - "$m = 2$"
  - "$m = 5$"
correct: 1
hint: "Proste $k: y = (m-2)x + 5$ i $l: y = -4x + (m+3)$ są równoległe gdy współczynniki kierunkowe są równe: $m - 2 = -4$, więc $m = -2$. Sprawdzenie: $y_k = -6x + 5$ i $y_l = -4x + 1$ — nie równoległe dla $m=-2$: $m-2 = -4$, $-4 = -4$ TAK. Wyrazy wolne: $5 \\\\neq m+3 = 1$ — różne, więc proste są równoległe."
tests:
  analytic_geom: 1.0
  fn_linear: 0.5
---
W układzie współrzędnych proste $k: y = (m - 2)x + 5$ oraz $l: y = -4x + (m + 3)$ są równoległe, gdy liczba $m$ jest równa:
`,A2=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,M2=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,P2=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,C2=`---
source: cke
options:
  - "$12$"
  - "$12\\sqrt{3}$"
  - "$6$"
  - "$6\\sqrt{3}$"
correct: 3
hint: "Pole równoległoboku: $P = a \\\\cdot b \\\\cdot \\\\sin \\\\alpha = 3 \\\\cdot 4 \\\\cdot \\\\sin 120° = 12 \\\\cdot \\\\frac{\\\\sqrt{3}}{2} = 6\\\\sqrt{3}$."
tests:
  area_perimeter: 1.0
  trig_basic: 0.5
  sin_cos_law: 0.3
---
Równoległobok ma boki długości $3$ i $4$ oraz kąt między nimi o mierze $120°$. Pole tego równoległoboku jest równe:
`,R2=`---
options:
  - "$155$"
  - "$150$"
  - "$145$"
  - "$160$"
correct: 0
hint: "$S_{10} = \\\\frac{10}{2}(2 \\\\cdot 2 + 9 \\\\cdot 3) = 5 \\\\cdot 31 = 155$."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Suma pierwszych 10 wyrazów ciągu arytmetycznego ($a_1=2$, $d=3$) wynosi:
`,D2=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,E2=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,B2=`---
source: cke
options:
  - "$-2$"
  - "$-1$"
  - "$2$"
  - "$3$"
correct: 0
hint: "Dane: $a_3 = -1$, $S_{15} = -165$. Mamy $a_3 = a_1 + 2r = -1$ i $S_{15} = 15a_1 + \\\\frac{15 \\\\cdot 14}{2}r = -165$. Z pierwszego: $a_1 = -1 - 2r$. Podstawiając: $15(-1-2r) + 105r = -165$, czyli $-15 + 75r = -165$, $75r = -150$, $r = -2$."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Ciąg arytmetyczny $(a_n)$ ma trzeci wyraz równy $-1$ i sumę piętnastu początkowych wyrazów równą $-165$. Różnica tego ciągu jest równa:
`,F2=`---
source: cke
options:
  - "$740$ zł"
  - "$745$ zł"
  - "$750$ zł"
  - "$755$ zł"
correct: 2
hint: "Raty tworzą ciąg arytmetyczny o 18 wyrazach i różnicy $-30$. Suma: $S = \\\\frac{18}{2}(2a_1 + 17 \\\\cdot (-30)) = 9(2a_1 - 510) = 8910$. Stąd $2a_1 - 510 = 990$, $a_1 = 750$ zł."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Pan Stanisław spłacił pożyczkę w wysokości $8910$ zł w osiemnastu ratach. Każda kolejna rata była mniejsza od poprzedniej o $30$ zł. Pierwsza rata wynosiła:
`,I2=`---
options:
  - "$\\dfrac{1}{4}$"
  - "$\\dfrac{1}{8}$"
  - "$\\dfrac{3}{8}$"
  - "$\\dfrac{1}{2}$"
correct: 0
hint: "$\\\\binom{4}{3} \\\\cdot \\\\left(\\\\dfrac{1}{2}\\\\right)^3 \\\\cdot \\\\left(\\\\dfrac{1}{2}\\\\right)^1 = \\\\dfrac{4}{16} = \\\\dfrac{1}{4}$."
tests:
  bernoulli: 1.0
  probability: 0.5
---
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:
`,N2=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,L2=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,W2=`---
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
Prawdopodobieństwo sukcesu w pojedynczej próbie wynosi $\\frac{1}{3}$. Wykonujemy 5 niezależnych prób. Jakie jest prawdopodobieństwo dokładnie 2 sukcesów?`,O2=`---
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
Rzucamy monetą 6 razy. Jaka jest oczekiwana liczba orłów?`,H2=`---
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
Rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo otrzymania co najmniej jednego orła?`,G2=`---
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
Rzucamy monetą 7 razy. Jakie jest prawdopodobieństwo uzyskania dokładnie 3 orłów?`,U2=`---
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
Prawdopodobieństwo trafienia w cel jednym strzałem wynosi $\\frac{1}{5}$. Strzelec oddaje 4 strzały. Jakie jest prawdopodobieństwo, że nie trafi ani razu?`,V2=`---
options:
  - "$10$"
  - "$5$"
  - "$20$"
  - "$15$"
correct: 0
hint: "$\\\\binom{5}{2} = \\\\dfrac{5!}{2! \\\\cdot 3!} = 10$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
  permutations: 0.5
  powers: 0.5
---
Współczynnik przy $x^2$ w rozwinięciu $(1+x)^5$ wynosi:
`,Z2=`---
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
Rozwiń $(a + b)^3$:`,K2=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,Q2=`---
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
Rozwiń $(x+1)^4$:`,Y2=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x+2)^5$?`,X2=`---
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
Ile wynosi suma wszystkich współczynników dwumianowych w rozwinięciu $(a+b)^5$?`,J2=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x - 3)^6$?`,e4=`---
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
Ile wyrazów ma rozwinięcie dwumianu $(a+b)^6$?`,n4=`---
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
`,t4=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,r4=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,o4=`---
source: cke
options:
  - "$(x-2)^2 + (y-4)^2 = 2\\sqrt{5}$"
  - "$(x-2)^2 + (y-4)^2 = 20$"
  - "$(x+2)^2 + (y+4)^2 = 2\\sqrt{5}$"
  - "$(x+2)^2 + (y+4)^2 = 20$"
correct: 1
hint: "Okrąg o środku $S = (2, 4)$ przechodzi przez $P = (0, 0)$. Promień: $r = |SP| = \\\\sqrt{(2-0)^2 + (4-0)^2} = \\\\sqrt{20}$. Równanie: $(x-2)^2 + (y-4)^2 = 20$."
tests:
  circle_eq: 1.0
  analytic_geom: 0.5
---
Punkt $P = (0,\\ 0)$ leży na okręgu $\\mathcal{O}$ o środku w punkcie $S = (2,\\ 4)$. Okrąg $\\mathcal{O}$ jest określony równaniem:
`,i4=`---
options:
  - "$10$"
  - "$15$"
  - "$20$"
  - "$60$"
correct: 0
hint: "$\\\\binom{5}{3} = \\\\dfrac{5!}{3! \\\\cdot 2!} = 10$."
tests:
  combinations: 1.0
  counting: 0.5
---
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?
`,a4=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,s4=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,l4=`---
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
Na turnieju gra 8 drużyn. Każda para gra ze sobą dokładnie raz. Ile meczów zostanie rozegranych?`,c4=`---
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
Z 10 uczniów wybieramy 4-osobową drużynę. Na ile sposobów?`,u4=`---
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
Która z poniższych tożsamości jest prawdziwa dla $0 \\le k \\le n$?`,d4=`---
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
Z grupy 6 kobiet i 8 mężczyzn wybieramy komisję złożoną z 2 kobiet i 3 mężczyzn. Na ile sposobów można to zrobić?`,p4=`---
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
Ile wynosi $\\binom{7}{3}$?`,m4=`---
options:
  - "$5$"
  - "$7$"
  - "$1$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|z| = \\\\sqrt{3^2+4^2} = \\\\sqrt{25} = 5$."
tests:
  complex: 1.0
---
Moduł liczby zespolonej $z = 3 + 4i$ wynosi:
`,f4=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,h4=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,y4=`---
options:
  - "$0.2$"
  - "$0.9$"
  - "$0.5$"
  - "$0.1$"
correct: 0
hint: "$P(A \\\\cap B) = P(A) \\\\cdot P(B|A) = 0.4 \\\\cdot 0.5 = 0.2$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
$P(A) = 0.4$, $P(B|A) = 0.5$. Wartość $P(A \\cap B) =$
`,$4=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,g4=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,x4=`---
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
Rzucamy kostką. Wiemy, że wypadła liczba parzysta. Jakie jest prawdopodobieństwo, że jest ona większa niż 4?`,b4=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(B|A) = 0{,}8$. Korzystając ze wzoru Bayesa, oblicz $P(A|B)$.`,v4=`---
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
$P(A) = 0{,}4$, $P(B|A) = 0{,}9$, $P(B|A') = 0{,}4$. Oblicz $P(B)$ korzystając ze wzoru prawdopodobieństwa całkowitego.`,w4=`---
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
W urnie są 3 kule czerwone i 9 niebieskich. Losujemy bez zwracania. Pierwsza kula była czerwona. Jakie jest prawdopodobieństwo, że druga też będzie czerwona?`,z4=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}12$. Czy zdarzenia $A$ i $B$ są niezależne?`,_4=`---
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
$P(A) = 0{,}4$ i $P(A \\cap B) = 0{,}3$. Ile wynosi $P(B|A)$?`,k4=`---
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
Fabryka ma dwie linie produkcyjne. Linia I wytwarza 40% produkcji z 5% braków, linia II — 60% produkcji z 3% braków. Losowo wybrany produkt okazał się wadliwy. Jakie jest prawdopodobieństwo, że pochodzi z linii I?`,j4=`---
options:
  - "$a=3,\\ b=2$"
  - "$a=9,\\ b=4$"
  - "$a=2,\\ b=3$"
  - "$a=\\sqrt{3},\\ b=\\sqrt{2}$"
correct: 0
hint: "Standardowa postać: $\\\\dfrac{x^2}{a^2} + \\\\dfrac{y^2}{b^2} = 1$."
tests:
  conic_sections: 1.0
  circle_eq: 0.5
---
Elipsa o równaniu $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ ma półosie:
`,S4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,q4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,T4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,A4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,M4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,P4=`---
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
Ile jest liczb 5-cyfrowych, w których każda cyfra (od 1 do 5) występuje dokładnie raz?`,C4=`---
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
Na jednej półce stoi 7 książek, na drugiej 8. Na ile sposobów można wybrać jedną książkę?`,R4=`---
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
Ile jest możliwych 4-cyfrowych kodów PIN (cyfry 0–9, mogą się powtarzać)?`,D4=`---
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
W restauracji jest 4 rodzaje zup i 9 dań głównych. Na ile sposobów można zamówić obiad składający się z zupy i dania głównego?`,E4=`---
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
W pokoju jest 13 osób. Co najmniej ile osób musiało urodzić się w tym samym miesiącu?`,B4=`---
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
Z 10 zawodników wybieramy 3 na podium (1., 2. i 3. miejsce). Na ile sposobów można to zrobić?`,F4=`---
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
Ile liczb parzystych 4-cyfrowych można utworzyć z cyfr $\\{1, 2, 3, 4\\}$, jeśli każda cyfra występuje dokładnie raz?`,I4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,N4=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,L4=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,W4=`---
source: cke
options:
  - "$4{,}5$"
  - "$4$"
  - "$3{,}5$"
  - "$3$"
correct: 1
hint: "Mediana to wartość środkowa. Na diagramie: ocenę 1 — 1 uczeń, 2 — 2, 3 — 6, 4 — 7, 5 — 8, 6 — 4 uczniów (łącznie ok. 28). Środkowe wartości (14. i 15.) to ocena 4. Mediana = 4."
tests:
  data_basics: 1.0
  stat_lp: 0.5
---
Na diagramie słupkowym przedstawiono oceny ze sprawdzianu pewnej klasy (oceny 1–6). Mediana ocen uzyskanych przez uczniów tej klasy jest równa:
`,O4=`---
options:
  - "$(-\\\\infty,-1) \\\\cup (1,+\\\\infty)$"
  - "$(-1, 1)$"
  - "$(0, +\\\\infty)$"
  - "$(-\\\\infty, 0)$"
correct: 0
hint: "$f'(x) = 3x^2-3 = 3(x-1)(x+1)$. $f'>0$ gdy $|x|>1$."
tests:
  deriv_apps: 1.0
  derivative: 0.5
  optimization_lp: 0.5
---
Funkcja $f(x) = x^3 - 3x$ jest rosnąca na przedziale:
`,H4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,G4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,U4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,V4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,Z4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,K4=`---
options:
  - "$5$"
  - "$10$"
  - "$2.5$"
  - "$0.5$"
correct: 0
hint: "$E(X) = n \\\\cdot p = 10 \\\\cdot 0.5 = 5$."
tests:
  distributions: 1.0
  cond_prob: 0.5
  bernoulli: 0.5
---
W schemacie Bernoulliego z $n=10$, $p=0.5$, wartość oczekiwana wynosi:
`,Q4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,Y4=`---
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
Wykres rozkładu normalnego ma kształt:`,X4=`---
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
`,J4=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,ey=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,ny=`---
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
Rozłóż na czynniki: $x^2 - 25 =$`,ty=`---
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
Rozłóż na czynniki: $x^2 + 6x + 9 =$`,ry=`---
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
Rozłóż na czynniki: $4x^2 - 9 =$`,oy=`---
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
Rozłóż na czynniki: $3x^2 - 3x - 6 =$`,iy=`---
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
Rozłóż przez grupowanie: $x^3 + x^2 + 3x + 3 =$`,ay=`---
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
Rozłóż na czynniki: $3x^2 + 7x + 2 =$`,sy=`---
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
Rozłóż na czynniki: $x^3 - 1 =$`,ly=`---
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
`,cy=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,uy=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,dy=`---
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
Która z poniższych relacji NIE jest funkcją?`,py=`---
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
Funkcja to takie przyporządkowanie, że:`,my=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,fy=`---
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
`,hy=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,yy=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,$y=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,gy=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,xy=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,by=`---
options:
  - "$(2, +\\\\infty)$"
  - "$[2, +\\\\infty)$"
  - "$(-\\\\infty, 2)$"
  - "$\\\\mathbb{R}$"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: $x - 2 > 0$."
tests:
  fn_log: 1.0
  log_exp: 0.5
---
Dziedzina funkcji $f(x) = \\log(x - 2)$ to:
`,vy=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,wy=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,zy=`---
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
`,_y=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,ky=`---
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
Funkcja $f(x) = x^3$ jest:`,jy=`---
options:
  - "$(2, -1)$"
  - "$(-2, 1)$"
  - "$(2, 1)$"
  - "$(4, 3)$"
correct: 0
hint: "$p = -\\\\frac{b}{2a} = \\\\frac{4}{2} = 2$, $q = f(2) = 4 - 8 + 3 = -1$."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Wierzchołek paraboli $f(x) = x^2 - 4x + 3$ ma współrzędne:
`,Sy=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,qy=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,Ty=`---
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
Oś symetrii paraboli $f(x) = x^2 - 6x + 5$ ma równanie:`,Ay=`---
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
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,My=`---
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
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,Py=`---
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
Funkcja $f(x) = -x^2 + 2x + 3$ ma:`,Cy=`---
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
Postać kanoniczna funkcji $f(x) = x^2 - 6x + 10$ to:`,Ry=`---
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
Funkcja $g(x) = (x - 2)^2 + 3$ jest obrazem funkcji $f(x) = x^2$ przez:`,Dy=`---
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
Funkcja $f(x) = -2x^2 + 4x + 5$ ma:`,Ey=`---
options:
  - "$\\pi$"
  - "$2\\pi$"
  - "$\\dfrac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Podstawowy okres $\\\\sin$ to $2\\\\pi$. Przy $\\\\sin(2x)$ dzielisz przez $2$: $T = \\\\pi$."
tests:
  fn_trig: 1.0
  trig_formulas: 0.5
  trig_eq: 0.5
---
Okres funkcji $f(x) = \\sin(2x)$ wynosi:
`,By=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,Fy=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,Iy=`---
options:
  - "$\\dfrac{3}{4}$"
  - "$\\dfrac{9}{12}$"
  - "$\\dfrac{4}{5}$"
  - "$\\dfrac{7}{9}$"
correct: 0
hint: "Dzielisz licznik i mianownik przez $\\\\text{NWD}(45,60) = 15$."
tests:
  fractions: 1.0
---
Uproszczona postać ułamka $\\dfrac{45}{60}$ to:
`,Ny=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,Ly=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,Wy=`---
options:
  - "$9$"
  - "$6$"
  - "$18$"
  - "$3$"
correct: 0
hint: "$S = \\\\dfrac{a_1}{1-q} = \\\\dfrac{6}{1-\\\\frac{1}{3}} = \\\\dfrac{6}{\\\\frac{2}{3}} = 9$."
tests:
  geo_series: 1.0
  arith_geom: 0.5
---
Suma nieskończonego szeregu geometrycznego $a_1=6$, $q=\\frac{1}{3}$ wynosi:
`,Oy=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,Hy=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,Gy=`---
source: cke
options:
  - "$3$"
  - "$0$"
  - "$4$"
  - "$2$"
correct: 2
hint: "Ciąg geometryczny $(27, 9, a-1)$ spełnia $\\\\frac{9}{27} = \\\\frac{a-1}{9}$, czyli $q = \\\\frac{1}{3}$ i $a-1 = 9 \\\\cdot \\\\frac{1}{3} = 3$, więc $a = 4$."
tests:
  geo_series: 1.0
  sequences: 0.5
---
Trzywyrazowy ciąg $(27,\\ 9,\\ a - 1)$ jest geometryczny. Liczba $a$ jest równa:
`,Uy=`---
source: cke
options:
  - "$\\\\frac{1}{3}$"
  - "$1$"
  - "$3$"
  - "$729$"
correct: 1
hint: "Iloraz ciągu: $q = \\\\frac{a_2}{a_1} = \\\\frac{9}{27} = \\\\frac{1}{3}$. Czwarty wyraz: $a_4 = a_1 \\\\cdot q^3 = 27 \\\\cdot \\\\left(\\\\frac{1}{3}\\\\right)^3 = 27 \\\\cdot \\\\frac{1}{27} = 1$."
tests:
  geo_series: 1.0
  sequences: 0.5
---
Dany jest ciąg geometryczny $(a_n)$ dla $n \\geq 1$, w którym $a_1 = 27$ oraz $a_2 = 9$. Czwarty wyraz tego ciągu jest równy:
`,Vy=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: $84 = 4 \\\\cdot 21$, $56 = 8 \\\\cdot 7$."
tests:
  integers: 1.0
---
Ile wynosi NWD(84, 56)?`,Zy=`---
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
Oblicz: $(-3) \\cdot 4 =$`,Ky=`---
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
Oblicz: $3 - 8 =$`,Qy=`---
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
$\\displaystyle \\int 2x \\, dx =$`,Yy=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,Xy=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,Jy=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,e$=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,n$=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,t$=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,r$=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,o$=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,i$=`---
options:
  - "$\\\\left(\\\\dfrac{2}{3}, +\\\\infty\\\\right)$"
  - "$\\\\left(-\\\\infty, \\\\dfrac{2}{3}\\\\right)$"
  - "$\\\\left(-\\\\dfrac{2}{3}, +\\\\infty\\\\right)$"
  - "$\\\\left(-\\\\infty, -\\\\dfrac{2}{3}\\\\right)$"
correct: 0
hint: "Mnożysz obie strony przez $6$, potem przenosisz $x$ na lewą stronę."
tests:
  linear_ineq: 1.0
  linear_eq: 0.25
---
Zbiór rozwiązań nierówności $1 - \\dfrac{3}{2}x < \\dfrac{2}{3} - x$ to przedział:
`,a$=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,s$=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,l$=`---
source: cke
options:
  - "$(-\\\\infty, -\\\\frac{2}{3})$"
  - "$(-\\\\infty, \\\\frac{2}{3})$"
  - "$(-\\\\frac{2}{3}, +\\\\infty)$"
  - "$(\\\\frac{2}{3}, +\\\\infty)$"
correct: 3
hint: "$1 - \\\\frac{3}{2}x < -x + \\\\frac{2}{3}$ daje $1 - \\\\frac{2}{3} < \\\\frac{3}{2}x - x = \\\\frac{1}{2}x$, czyli $\\\\frac{1}{3} < \\\\frac{1}{2}x$, więc $x > \\\\frac{2}{3}$."
tests:
  linear_ineq: 1.0
  fractions: 0.3
---
Zbiorem wszystkich rozwiązań nierówności $1 - \\dfrac{3}{2}x < -x + \\dfrac{2}{3}$ jest przedział:
`,c$=`---
source: cke
options:
  - "$(-\\\\infty, -4]$"
  - "$(-\\\\infty, 4]$"
  - "$[-4, +\\\\infty)$"
  - "$[4, +\\\\infty)$"
correct: 2
hint: "$-2(x+3) \\\\leq \\\\frac{2-x}{3}$ mnoży się przez $3$: $-6(x+3) \\\\leq 2-x$, czyli $-6x - 18 \\\\leq 2 - x$, więc $-5x \\\\leq 20$, stąd $x \\\\geq -4$."
tests:
  linear_ineq: 1.0
  fractions: 0.3
---
Zbiorem wszystkich rozwiązań nierówności $-2(x + 3) \\leq \\dfrac{2 - x}{3}$ jest przedział:
`,u$=`---
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
`,d$=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,p$=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,m$=`---
source: cke
options:
  - "$\\\\begin{cases} x + y = 1960 \\\\\\\\ 0{,}6 \\\\cdot 0{,}95x = 0{,}9y \\\\end{cases}$"
  - "$\\\\begin{cases} x + y = 1960 \\\\\\\\ 0{,}95x = 0{,}6 \\\\cdot 0{,}9y \\\\end{cases}$"
  - "$\\\\begin{cases} x + y = 1960 \\\\\\\\ 0{,}05x = 0{,}6 \\\\cdot 0{,}1y \\\\end{cases}$"
  - "$\\\\begin{cases} x + y = 1960 \\\\\\\\ 0{,}4 \\\\cdot 0{,}95x = 0{,}9y \\\\end{cases}$"
correct: 1
hint: "Łącznie $x + y = 1960$. Po usunięciu: w sadzie 1 zostało $0{,}95x$ drzew, w sadzie 2 zostało $0{,}9y$ drzew. Warunek: $0{,}9y = 0{,}6 \\\\cdot 0{,}95x$, czyli $0{,}95x = \\\\frac{0{,}9y}{0{,}6} = 1{,}5 \\\\cdot 0{,}9y$. Poprawny układ: $0{,}95x = 0{,}6 \\\\cdot 0{,}9y$."
tests:
  linear_sys: 1.0
  linear_eq: 0.3
---
W dwóch sadach posadzono łącznie $1960$ drzew. Po roku uschło $5\\%$ w sadzie I i $10\\%$ w sadzie II. Liczba drzew, które pozostały w sadzie II, stanowiła $60\\%$ liczby drzew, które pozostały w sadzie I. Niech $x$ i $y$ oznaczają odpowiednio liczby posadzonych drzew. Właściwym układem równań jest:
`,f$=`---
options:
  - "$x = 8$"
  - "$x = 6$"
  - "$x = 9$"
  - "$x = 4$"
correct: 0
hint: "$\\\\log_2(x) = 3 \\\\iff x = 2^3 = 8$."
tests:
  log_eq: 1.0
  log_exp: 0.5
---
Rozwiązaniem równania $\\log_2(x) = 3$ jest:
`,h$=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,y$=`---
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
Rozwiąż równanie: $2^x = 16$`,$$=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,g$=`---
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
Oblicz: $\\log_2 8 =$`,x$=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,b$=`---
source: cke
options:
  - "$3$"
  - "$9$"
  - "$4$"
  - "$2$"
correct: 3
hint: "$\\\\log_9 27 + \\\\log_9 3 = \\\\log_9(27 \\\\cdot 3) = \\\\log_9 81 = \\\\log_9 9^2 = 2$."
tests:
  log_exp: 1.0
  powers: 0.3
---
Wartość wyrażenia $\\log_9 27 + \\log_9 3$ jest równa:
`,v$=`---
source: cke
options:
  - "$3$"
  - "$9$"
  - "$\\\\log_3 104$"
  - "$2\\\\log_3 54$"
correct: 0
hint: "$\\\\log_3 108 - 2\\\\log_3 2 = \\\\log_3 108 - \\\\log_3 4 = \\\\log_3 \\\\frac{108}{4} = \\\\log_3 27 = 3$."
tests:
  log_exp: 1.0
  powers: 0.3
---
Wartość wyrażenia $\\log_3 108 - 2\\log_3 2$ jest równa:
`,w$=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja $\\\\forall x: P(x)$ to $\\\\exists x: \\\\neg P(x)$."
tests:
  logic_basics: 1.0
  sets: 0.5
---
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:
`,z$=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,_$=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,k$=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "$x + y = 10$. Pole $P = x \\\\cdot y$ maksymalne dla $x=y=5$ (wierzchołek paraboli)."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Prostokąt o obwodzie 20 ma największe pole gdy:
`,j$=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,S$=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,q$=`---
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
Rolnik ma $50$ m ogrodzenia i chce ogrodzić prostokątny wybieg przy ścianie stodoły (jedna strona nie wymaga ogrodzenia). Jaką długość powinna mieć strona przy ścianie, aby pole wybiegu było największe?`,T$=`---
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
Piłkę wyrzucono pionowo w górę. Jej wysokość (w metrach) po $t$ sekundach opisuje wzór $h(t) = -5t^2 + 30t$. Jaka jest maksymalna wysokość piłki?`,A$=`---
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
Sklep sprzedaje produkt w cenie $x$ zł za sztukę. Liczba sprzedanych sztuk wynosi $(100 - x)$. Przy jakiej cenie przychód jest największy i ile wynosi?`,M$=`---
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
Suma dwóch liczb nieujemnych wynosi $16$. Iloczyn tych liczb jest największy, gdy te liczby to:`,P$=`---
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
Najmniejsza wartość funkcji $f(x) = 2x^2 - 4x - 1$ wynosi:`,C$=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,R$=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,D$=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,E$=`---
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
`,B$=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,F$=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,I$=`---
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
Na ile sposobów można ustawić 5 różnych książek na półce?`,N$=`---
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
Ile różnych „słów" (ciągów liter) można utworzyć ze wszystkich liter wyrazu KOTEK?`,L$=`---
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
Z 5 kandydatów wybieramy przewodniczącego, zastępcę i sekretarza. Na ile sposobów?`,W$=`---
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
Ile anagramów (różnych ciągów liter) można utworzyć ze wszystkich liter wyrazu MATEMATYKA?`,O$=`---
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
Na ile sposobów można ustawić w rzędzie 5 osób, jeśli dwie konkretne osoby muszą stać obok siebie?`,H$=`---
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
`,G$=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,U$=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,V$=`---
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
`,Z$=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,K$=`---
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
Wielomian stopnia $n$ ma:`,Q$=`---
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
`,Y$=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,X$=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,J$=`---
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
Rozwiń: $(2x - 1)(x + 3) =$`,e3=`---
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
Jaki jest stopień wielomianu $W(x) = x^5 - 3x^3 + 2x - 7$?`,n3=`---
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
Oblicz wartość wielomianu $W(x) = 2x^3 - 3x^2 + 2x - 2$ dla $x = 2$.`,t3=`---
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
Iloraz $\\frac{x^3 + 4x^2 + 7x + 6}{x + 2}$ jest równy:`,r3=`---
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
Suma wielomianów $P(x) = x^4 - 3x^2 + 1$ i $Q(x) = -2x^3 + 4x^2 + 2x - 3$ wynosi:`,o3=`---
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
Rozwiń $(x + 1)^3 =$`,i3=`---
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
Wielomian $P(x)$ ma stopień $1$, a wielomian $Q(x)$ ma stopień $3$. Jaki jest stopień wielomianu $P(x) \\cdot Q(x)$?`,a3=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,s3=`---
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
Oblicz: $2^3 =$`,l3=`---
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
Uprość: $a^2 \\cdot a^3 =$`,c3=`---
source: cke
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^{8}$"
correct: 1
hint: "$\\\\left(\\\\frac{1}{16}\\\\right)^8 \\\\cdot 8^{16} = (2^{-4})^8 \\\\cdot (2^3)^{16} = 2^{-32} \\\\cdot 2^{48} = 2^{16}$."
tests:
  powers: 1.0
---
Wartość wyrażenia $\\left(\\dfrac{1}{16}\\right)^8 \\cdot 8^{16}$ jest równa:
`,u3=`---
options:
  - "$\\dfrac{1}{2}$"
  - "$\\dfrac{1}{3}$"
  - "$\\dfrac{2}{3}$"
  - "$\\dfrac{1}{6}$"
correct: 0
hint: "Parzyste: $\\\\{2,4,6\\\\}$. $P = \\\\dfrac{3}{6} = \\\\dfrac{1}{2}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,d3=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,p3=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,m3=`---
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
Z talii 52 kart losujemy jedną kartę. Jakie jest prawdopodobieństwo wylosowania asa?`,f3=`---
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
Rzucamy kostką sześcienną. Jakie jest prawdopodobieństwo, że NIE wypadnie szóstka?`,h3=`---
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
Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo otrzymania dwóch orłów?`,y3=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?`,$3=`---
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
$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$, $P(A \\cap B) = \\frac{1}{6}$. Ile wynosi $P(A \\cup B)$?`,g3=`---
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
Zdarzenia $A$ i $B$ są niezależne. $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{5}$. Ile wynosi $P(A \\cap B)$?`,x3=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek będzie większa niż 8?`,b3=`---
source: cke
options:
  - "$\\\\frac{9}{25}$"
  - "$\\\\frac{12}{25}$"
  - "$\\\\frac{13}{25}$"
  - "$\\\\frac{16}{25}$"
correct: 2
hint: "Ze zbioru $\\\\{5,6,7,8,9\\\\}$ losujemy 2 razy ze zwracaniem. Suma jest parzysta gdy oba losowania dają liczby tej samej parzystości. Parzyste: $\\\\{6,8\\\\}$ — 2 z 5, nieparzyste: $\\\\{5,7,9\\\\}$ — 3 z 5. $P = \\\\left(\\\\frac{2}{5}\\\\right)^2 + \\\\left(\\\\frac{3}{5}\\\\right)^2 = \\\\frac{4+9}{25} = \\\\frac{13}{25}$."
tests:
  probability: 1.0
  counting: 0.3
---
Ze zbioru $K = \\{5, 6, 7, 8, 9\\}$ losujemy ze zwracaniem kolejno dwa razy po jednej liczbie. Prawdopodobieństwo zdarzenia, że suma wylosowanych liczb jest parzysta, wynosi:
`,v3=`---
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
`,w3=`---
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
Dowód nie wprost polega na tym, że:`,z3=`---
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
Dowód przez indukcję matematyczną składa się z:`,_3=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,k3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,j3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,S3=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,q3=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,T3=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,A3=`---
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
Ile rozwiązań ma równanie $x^2 - 6x + 9 = 0$?`,M3=`---
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
Równanie $x^2 + 1 = 0$ ma:`,P3=`---
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
Rozwiąż równanie $2x^2 - x - 3 = 0$.`,C3=`---
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
Wyróżnik równania $2x^2 - 3x - 5 = 0$ wynosi:`,R3=`---
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
Rozwiąż równanie $x^2 - 5x = 0$.`,D3=`---
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
Równanie $2x^2 + x + m = 0$ ma dwa różne pierwiastki rzeczywiste, gdy:`,E3=`---
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
Iloczyn dwóch kolejnych liczb nieparzystych wynosi $35$. Te liczby to:`,B3=`---
options:
  - "$(-2, 3)$"
  - "$(-\\\\infty,-2) \\\\cup (3,+\\\\infty)$"
  - "$[-2, 3]$"
  - "$(-3, 2)$"
correct: 0
hint: "Pierwiastki to $-2$ i $3$. Parabola jest pod osią między nimi (ramiona w górę)."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności $x^2 - x - 6 < 0$ jest:
`,F3=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,I3=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,N3=`---
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
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,L3=`---
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
Rozwiązaniem nierówności $x^2 + 2x + 5 > 0$ jest:`,W3=`---
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
Rozwiąż nierówność $x^2 - 5x + 4 \\leq 0$.`,O3=`---
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
Rozwiąż nierówność $-x^2 - 2x + 3 \\leq 0$.`,H3=`---
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
Rozwiązaniem nierówności $x^2 - 4x + 4 > 0$ jest:`,G3=`---
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
`,U3=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,V3=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,Z3=`---
options:
  - "$(-\\\\infty, -1) \\\\cup (3, +\\\\infty)$"
  - "$(-1, 3)$"
  - "$[-1, 3]$"
  - "$(-\\\\infty, -1] \\\\cup [3, +\\\\infty)$"
correct: 0
hint: "Metoda rozwiązywania nierówności wymiernych — krok po kroku:\\n\\n① ROZŁÓŻ na czynniki: licznik = $(x+1)$, mianownik = $(x-3)$. Już rozłożone.\\n\\n② ZNAJDŹ MIEJSCA ZEROWE: licznik = 0 → $x = -1$. Mianownik = 0 → $x = 3$.\\n\\n③ DZIEDZINA: mianownik $\\\\neq 0$, więc $x \\\\neq 3$. Punkt $x = 3$ jest WYŁĄCZONY (kółko puste).\\n\\n④ TABELKA ZNAKÓW — zaznacz $-1$ i $3$ na osi, sprawdź znak w każdym przedziale:\\n• $x < -1$ (np. $x=-2$): $\\\\frac{-1}{-5} = +$ ✓\\n• $-1 < x < 3$ (np. $x=0$): $\\\\frac{1}{-3} = -$ ✗\\n• $x > 3$ (np. $x=4$): $\\\\frac{5}{1} = +$ ✓\\n\\n⑤ ODPOWIEDŹ: nierówność $> 0$ (ostra), więc nie włączamy punktów: $x \\\\in (-\\\\infty, -1) \\\\cup (3, +\\\\infty)$."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.25
---
Rozwiąż nierówność: $\\dfrac{x+1}{x-3} > 0$
`,K3=`---
options:
  - "$[-2, 0) \\\\cup [4, +\\\\infty)$"
  - "$(-2, 0) \\\\cup (4, +\\\\infty)$"
  - "$(-\\\\infty, -2] \\\\cup (0, 4]$"
  - "$(-\\\\infty, -2) \\\\cup (0, 4)$"
correct: 0
hint: "Krok po kroku:\\n\\n① PRZENIEŚ na jedną stronę: $\\\\frac{x^2-2x-8}{x} \\\\geq 0$.\\n\\n② ROZŁÓŻ LICZNIK: $x^2-2x-8 = (x-4)(x+2)$. Szukasz dwóch liczb: iloczyn $= -8$, suma $= -2$ → $\\\\Delta = 4+32 = 36$, $x = \\\\frac{2 \\\\pm 6}{2}$ → $x=4$ lub $x=-2$.\\n\\n③ MIANOWNIK: $x$. Miejsce zerowe: $x = 0$. Wyłączone z dziedziny ($x \\\\neq 0$).\\n\\n④ MIEJSCA ZEROWE LICZNIKA: $x = -2$, $x = 4$. Te WŁĄCZAMY (bo $\\\\geq 0$, ułamek = 0 gdy licznik = 0).\\n\\n⑤ TABELKA ZNAKÓW — punkty krytyczne: $-2$, $0$, $4$:\\n• $x < -2$ (np. $x=-3$): $\\\\frac{(-7)(-1)}{-3} = \\\\frac{7}{-3} < 0$ ✗\\n• $-2 < x < 0$ (np. $x=-1$): $\\\\frac{(-5)(1)}{-1} = 5 > 0$ ✓\\n• $0 < x < 4$ (np. $x=1$): $\\\\frac{(-3)(3)}{1} = -9 < 0$ ✗\\n• $x > 4$ (np. $x=5$): $\\\\frac{(1)(7)}{5} > 0$ ✓\\n\\n⑥ ODPOWIEDŹ: $\\\\geq 0$, więc włączamy $-2$ i $4$ (licznik=0), ale NIE $0$ (mianownik=0): $x \\\\in [-2, 0) \\\\cup [4, +\\\\infty)$."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 - 2x - 8}{x} \\geq 0$
`,Q3=`---
options:
  - "$(2, 5]$"
  - "$[2, 5]$"
  - "$(2, 5)$"
  - "$(-\\\\infty, 2) \\\\cup [5, +\\\\infty)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ: licznik = $(x-5)$, mianownik = $(x-2)$. Już rozłożone.\\n\\n② MIEJSCA ZEROWE: licznik = 0 → $x = 5$. Mianownik = 0 → $x = 2$ (WYŁĄCZONY — dzielenie przez 0!).\\n\\n③ CZY WŁĄCZAMY PUNKTY?\\n• $x = 5$: ułamek = $0/3 = 0$, a $0 \\\\leq 0$ ✓ → WŁĄCZAMY (nawias kwadratowy]\\n• $x = 2$: mianownik = 0 → WYŁĄCZAMY zawsze (nawias okrągły)\\n\\n④ TABELKA ZNAKÓW — punkty krytyczne: $2$ i $5$:\\n• $x < 2$ (np. $x=0$): $\\\\frac{-5}{-2} = +2.5$ → dodatni ✗\\n• $2 < x < 5$ (np. $x=3$): $\\\\frac{-2}{1} = -2$ → ujemny ✓\\n• $x > 5$ (np. $x=6$): $\\\\frac{1}{4}$ → dodatni ✗\\n\\n⑤ ODPOWIEDŹ: ujemny lub zero w przedziale $(2, 5]$. Nawias okrągły przy $2$ (mianownik=0), kwadratowy przy $5$ (licznik=0, ułamek=0 ✓)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
---
Rozwiąż nierówność: $\\dfrac{x-5}{x-2} \\leq 0$
`,Y3=`---
options:
  - "$(-\\\\infty, -3] \\\\cup (-1, 2]$"
  - "$[-3, -1) \\\\cup [2, +\\\\infty)$"
  - "$(-3, -1) \\\\cup (2, +\\\\infty)$"
  - "$(-\\\\infty, -3) \\\\cup (-1, 2)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ LICZNIK NA CZYNNIKI:\\n$x^2 + x - 6 = ?$ Szukamy dwóch liczb: iloczyn $= -6$, suma $= 1$ → to $3$ i $-2$: $x^2 + x - 6 = (x+3)(x-2)$. Sprawdź: $(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$ ✓\\n\\n② MIANOWNIK: $(x+1)$. Miejsce zerowe: $x = -1$ (WYŁĄCZONY z dziedziny).\\n\\n③ WSZYSTKIE PUNKTY KRYTYCZNE: $x = -3$ (licznik), $x = -1$ (mianownik), $x = 2$ (licznik).\\n\\n④ CZY WŁĄCZAMY?\\n• $x = -3$: ułamek $= 0 \\leq 0$ ✓ → WŁĄCZAMY $[-3$\\n• $x = -1$: mianownik = 0 → WYŁĄCZAMY $)$\\n• $x = 2$: ułamek $= 0 \\leq 0$ ✓ → WŁĄCZAMY $2]$\\n\\n⑤ TABELKA ZNAKÓW — 4 przedziały:\\n• $x < -3$ (np. $x=-4$): $\\\\frac{(-1)(-6)}{-3} = -2$ → ujemny ✓\\n• $-3 < x < -1$ (np. $x=-2$): $\\\\frac{(1)(-4)}{-1} = 4$ → dodatni ✗\\n• $-1 < x < 2$ (np. $x=0$): $\\\\frac{(3)(-2)}{1} = -6$ → ujemny ✓\\n• $x > 2$ (np. $x=3$): $\\\\frac{(6)(1)}{4} = 1.5$ → dodatni ✗\\n\\n⑥ ODPOWIEDŹ: ujemny lub zero → $x \\\\in (-\\\\infty, -3] \\\\cup (-1, 2]$.\\n\\nWskazówka: przy nierównościach wymiernych ZAWSZE rób tabelkę znaków. Nigdy nie mnóż obu stron przez mianownik (bo nie wiesz, czy jest dodatni czy ujemny!)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 + x - 6}{x + 1} \\leq 0$
`,X3=`---
options:
  - "$3$"
  - "$1$"
  - "$+\\infty$"
  - "$0$"
correct: 0
hint: "Dzielisz licznik i mianownik przez $n^2$. Wyrazy $\\\\frac{1}{n^2}$ i $\\\\frac{2}{n^2}$ dążą do $0$."
tests:
  seq_limits: 1.0
  arith_geom: 0.5
---
Granica ciągu $a_n = \\dfrac{3n^2 + 1}{n^2 - 2}$ dla $n \\to \\infty$ wynosi:
`,J3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,eg=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,ng=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,tg=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,rg=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,og=`---
source: cke
options:
  - "$64$"
  - "$40$"
  - "$48$"
  - "$80$"
correct: 3
hint: "$a_n = 2^n \\\\cdot (n+1)$, więc $a_4 = 2^4 \\\\cdot (4+1) = 16 \\\\cdot 5 = 80$."
tests:
  sequences: 1.0
  powers: 0.3
---
Ciąg $(a_n)$ jest określony wzorem $a_n = 2^n \\cdot (n + 1)$ dla każdej liczby naturalnej $n \\geq 1$. Wyraz $a_4$ jest równy:
`,ig=`---
source: cke
options:
  - "Oba zdania prawdziwe"
  - "Zdanie (1) prawdziwe, zdanie (2) fałszywe"
  - "Zdanie (1) fałszywe, zdanie (2) prawdziwe"
  - "Oba zdania fałszywe"
correct: 1
hint: "$a_1 = (-1)^1(1-5) = 4$; $a_3 = (-1)^3(3-5) = 2$; $a_1 = 2 \\\\cdot a_3$ — zdanie (1) PRAWDZIWE. $a_2 = (-1)^2(2-5) = -3 < 0$ — zdanie (2) FAŁSZYWE."
tests:
  sequences: 1.0
---
Ciąg $(a_n)$ jest określony wzorem $a_n = (-1)^n \\cdot (n - 5)$ dla $n \\geq 1$. Oceń prawdziwość zdań: (1) Pierwszy wyraz ciągu jest dwa razy większy od trzeciego wyrazu. (2) Wszystkie wyrazy ciągu są dodatnie.
`,ag=`---
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
`,sg=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,lg=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,cg=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,ug=`---
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
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,dg=`---
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
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,pg=`---
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
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,mg=`---
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
Które z poniższych jest poprawnym prawem De Morgana?`,fg=`---
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
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,hg=`---
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
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,yg=`---
options:
  - "$39$"
  - "$25$"
  - "$49$"
  - "$74$"
correct: 0
hint: "Tw. cosinusów: $c^2 = 25 + 49 - 2 \\\\cdot 5 \\\\cdot 7 \\\\cdot \\\\cos 60° = 74 - 35 = 39$."
tests:
  sin_cos_law: 1.0
  trig_lp: 0.5
---
W trójkącie $a=5$, $b=7$, $C=60°$. Wartość $c^2 =$
`,$g=`---
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
Twierdzenie cosinusów brzmi:`,gg=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,xg=`---
options:
  - "$12\\pi$"
  - "$36\\pi$"
  - "$9\\pi$"
  - "$48\\pi$"
correct: 0
hint: "$V = \\\\frac{1}{3}\\\\pi r^2 h = \\\\frac{1}{3} \\\\cdot \\\\pi \\\\cdot 9 \\\\cdot 4 = 12\\\\pi$."
tests:
  solid_geom: 1.0
---
Objętość stożka o promieniu podstawy $r=3$ i wysokości $h=4$ wynosi:
`,bg=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,vg=`---
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
Wzór na objętość kuli o promieniu $r$:`,wg=`---
options:
  - "$1$"
  - "$\\\\sqrt{2}$"
  - "$\\\\frac{\\\\sqrt{2}}{2}$"
  - "$2$"
correct: 0
hint: "Rzut krawędzi bocznej na podstawę to połowa przekątnej podstawy. Przekątna kwadratu o boku $4$ ma długość $4\\\\sqrt{2}$, więc połowa to $2\\\\sqrt{2}$. Stąd $\\\\tan \\\\alpha = H / (2\\\\sqrt{2}) = 2\\\\sqrt{2} / 2\\\\sqrt{2} = 1$."
tests:
  solid_geom: 1.0
  trig_basic: 0.3
---
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 4$ i wysokość $H = 2\\sqrt{2}$. Oblicz tangens kąta nachylenia krawędzi bocznej do płaszczyzny podstawy.
`,zg=`---
options:
  - "$12$"
  - "$6$"
  - "$24$"
  - "$9$"
correct: 0
hint: "Przekrój osiowy stożka to trójkąt równoramienny: podstawa $= 2r = 6$, wysokość $= h = 4$. Pole $= \\\\frac{1}{2} \\\\cdot 2r \\\\cdot h = \\\\frac{1}{2} \\\\cdot 6 \\\\cdot 4 = 12$."
tests:
  solid_geom: 1.0
  area_perimeter: 0.3
---
Stożek ma promień podstawy $r = 3$ i wysokość $h = 4$. Oblicz pole przekroju osiowego tego stożka.
`,_g=`---
options:
  - "$60$"
  - "$30$"
  - "$120$"
  - "$96$"
correct: 0
hint: "Pole powierzchni bocznej $= 4 \\\\cdot$ pole trójkąta bocznego. Każdy trójkąt boczny ma podstawę $a = 6$ i wysokość $l = 5$, więc jego pole $= \\\\frac{a \\\\cdot l}{2} = 15$. Razy 4 ściany: $P_b = 60$."
tests:
  solid_geom: 1.0
---
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 6$ i wysokość ściany bocznej (apotemę bryły) $l = 5$. Oblicz pole powierzchni bocznej.
`,kg=`---
options:
  - "$60°$"
  - "$30°$"
  - "$45°$"
  - "$75°$"
correct: 0
hint: "Przekrój osiowy walca to prostokąt o bokach $2r = 2$ i $h = 2\\\\sqrt{3}$. Przekątna tworzy z bokiem podstawy trójkąt prostokątny, w którym $\\\\tan \\\\alpha = h / 2r = 2\\\\sqrt{3} / 2 = \\\\sqrt{3}$. Stąd $\\\\alpha = 60°$."
tests:
  solid_geom: 1.0
  trig_basic: 0.3
---
Walec ma promień podstawy $r = 1$ i wysokość $h = 2\\sqrt{3}$. Jaki jest kąt nachylenia przekątnej przekroju osiowego walca do płaszczyzny podstawy?
`,jg=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,Sg=`---
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
Dominanta (moda) zbioru danych to:`,qg=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,Tg=`---
source: cke
options:
  - "$4$"
  - "$5$"
  - "$6$"
  - "$7$"
correct: 2
hint: "Średnia siedmiu liczb $1, 2, 3, 4, 5, x, y$ wynosi 3. Suma wszystkich: $7 \\\\cdot 3 = 21$. Suma znanych: $1+2+3+4+5 = 15$. Więc $x + y = 21 - 15 = 6$."
tests:
  stat_lp: 1.0
  data_basics: 0.5
---
Średnia arytmetyczna siedmiu liczb $1, 2, 3, 4, 5, x, y$ jest równa $3$. Suma $x + y$ jest równa:
`,Ag=`---
options:
  - "$8$"
  - "$6$"
  - "$12$"
  - "$4$"
correct: 0
hint: "Tw. Talesa: $\\\\dfrac{AD}{DB} = \\\\dfrac{AE}{EC}$, więc $EC = \\\\dfrac{4 \\\\cdot 6}{3} = 8$."
tests:
  thales: 1.0
---
Proste równoległe odcinają na siecznych odcinki proporcjonalne.
Jeśli $DE \\parallel BC$ i $AD=3$, $DB=6$, $AE=4$, to $EC=$
`,Mg=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,Pg=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,Cg=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,Rg=`---
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
Wartość $\\sin 30°$ wynosi:`,Dg=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,Eg=`---
source: cke
options:
  - "$\\\\cos 20°$"
  - "$\\\\sin 20°$"
  - "$\\\\mathrm{tg}\\\\ 20°$"
  - "$\\\\sin 20° \\\\cdot \\\\cos 20°$"
correct: 1
hint: "$\\\\sin^3 20° + \\\\cos^2 20° \\\\cdot \\\\sin 20° = \\\\sin 20°(\\\\sin^2 20° + \\\\cos^2 20°) = \\\\sin 20° \\\\cdot 1 = \\\\sin 20°$."
tests:
  trig_basic: 1.0
  trig_formulas: 0.5
---
Wartość wyrażenia $\\sin^3 20° + \\cos^2 20° \\cdot \\sin 20°$ jest równa:
`,Bg=`---
source: cke
options:
  - "$\\\\sin^2 \\\\alpha$"
  - "$\\\\sin^6 \\\\alpha \\\\cdot \\\\cos^2 \\\\alpha$"
  - "$\\\\sin^4 \\\\alpha + 1$"
  - "$\\\\sin^2 \\\\alpha \\\\cdot (\\\\sin \\\\alpha + \\\\cos \\\\alpha)(\\\\sin \\\\alpha - \\\\cos \\\\alpha)$"
correct: 0
hint: "$\\\\sin^4 \\\\alpha + \\\\sin^2 \\\\alpha \\\\cdot \\\\cos^2 \\\\alpha = \\\\sin^2 \\\\alpha(\\\\sin^2 \\\\alpha + \\\\cos^2 \\\\alpha) = \\\\sin^2 \\\\alpha \\\\cdot 1 = \\\\sin^2 \\\\alpha$."
tests:
  trig_basic: 1.0
  trig_formulas: 0.5
---
Dla każdego kąta ostrego $\\alpha$ wyrażenie $\\sin^4 \\alpha + \\sin^2 \\alpha \\cdot \\cos^2 \\alpha$ jest równe:
`,Fg=`---
options:
  - "$x = 30°$ i $x = 150°$"
  - "$x = 30°$ tylko"
  - "$x = 60°$ i $x = 120°$"
  - "$x = 45°$"
correct: 0
hint: "$\\\\sin$ jest symetryczny względem $90°$: $\\\\sin(30°) = \\\\sin(150°) = \\\\frac{1}{2}$."
tests:
  trig_eq: 1.0
  trig_formulas: 0.5
---
Rozwiązaniem równania $\\sin(x) = \\frac{1}{2}$ w przedziale $[0°, 180°]$ jest:
`,Ig=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,Ng=`---
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
Rozwiąż równanie: $\\tan x = 1$`,Lg=`---
options:
  - "$2\\\\sin(\\\\alpha)\\\\cos(\\\\alpha)$"
  - "$\\\\sin^2(\\\\alpha)-\\\\cos^2(\\\\alpha)$"
  - "$\\\\cos^2(\\\\alpha)-\\\\sin^2(\\\\alpha)$"
  - "$2\\\\cos^2(\\\\alpha)-1$"
correct: 0
hint: "Wzór na sinus kąta podwojonego: $\\\\sin(2\\\\alpha) = 2\\\\sin(\\\\alpha)\\\\cos(\\\\alpha)$."
tests:
  trig_formulas: 1.0
---
$\\sin(2\\alpha)$ jest równe:
`,Wg=`---
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
Wzór na $\\sin 2\\alpha$:`,Og=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,Hg=`---
options:
  - "$\\\\dfrac{\\\\sqrt{3}}{2}$"
  - "$\\\\dfrac{1}{2}$"
  - "$-\\\\dfrac{\\\\sqrt{3}}{2}$"
  - "$\\\\dfrac{\\\\sqrt{2}}{2}$"
correct: 0
hint: "$120° = 180°-60°$, $\\\\sin(180°-\\\\alpha) = \\\\sin(\\\\alpha)$, $\\\\sin(60°) = \\\\dfrac{\\\\sqrt{3}}{2}$."
tests:
  trig_lp: 1.0
  trig_basic: 0.25
---
Wartość $\\sin(120°)$ jest równa:
`,Gg=`---
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
Wartość $\\cos 30°$ wynosi:`,Ug=`---
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
Wartość $\\sin 45°$ wynosi:`,Vg=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$12$"
correct: 0
hint: "$|\\\\vec{v}| = \\\\sqrt{3^2+4^2} = \\\\sqrt{25} = 5$."
tests:
  vectors: 1.0
---
Długość wektora $\\vec{v} = [3, 4]$ wynosi:
`,Zg=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,Kg=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,Qg=`---
options:
  - "$12$"
  - "$7$"
  - "$-12$"
  - "$-7$"
correct: 0
hint: "Wzór Viète'a: $x_1 \\\\cdot x_2 = \\\\frac{c}{a} = \\\\frac{12}{1} = 12$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 7x + 12 = 0$, to $x_1 \\cdot x_2 =$
`,Yg=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,Xg=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,Jg=`---
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
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,e5=`---
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
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,n5=`---
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
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,t5=`---
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
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,r5=`---
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
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`;function sp(o){const t=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:o.trim()};const r=t[1],a=t[2].trim(),s={},c=r.split(/\r?\n/);let d=0;for(;d<c.length;){const f=c[d];if(f.startsWith("  ")){d++;continue}const y=f.match(/^(\w+):\s*(.*)/);if(!y){d++;continue}const x=y[1];let g=y[2].trim();if(g===""||g===null){const w=c[d+1]??"";if(w.startsWith("  - ")){const S=[];for(d++;d<c.length&&c[d].startsWith("  - ");){let j=c[d].replace(/^  - /,"").trim();j=j.replace(/^["']|["']$/g,""),S.push(j),d++}s[x]=S.length>0?S:null}else if(w.match(/^  \w+:/)){const S={};for(d++;d<c.length&&c[d].match(/^  \w+:/);){const j=c[d].match(/^  (\w+):\s*(.*)/);if(j){const q=j[1];let k=j[2].trim().replace(/^["']|["']$/g,"");S[q]=!isNaN(k)&&k!==""?Number(k):k}d++}s[x]=S}else s[x]=null,d++}else g=g.replace(/^["']|["']$/g,""),!isNaN(g)&&g!==""?s[x]=Number(g):g==="true"?s[x]=!0:g==="false"?s[x]=!1:s[x]=g,d++}return{meta:s,body:a}}function lp(o,t){return Object.entries(o).map(([r,a])=>{var f;const s=(f=r.match(t))==null?void 0:f[1],{meta:c,body:d}=sp(a);return{id:s,body:d||"",label:c.label??s,labelPl:c.labelPl??c.label??s,scope:c.scope??"default",section:c.section??"default",level:c.level??1,x:c.x??0,y:c.y??0,resources:Array.isArray(c.resources)?c.resources.map(y=>{if(typeof y!="string")return null;const[x,g,w,S]=y.split("|").map(q=>q.trim()),j=g&&!g.includes("/")&&!g.startsWith("http")?`resources/${s}/${g}`:g??"";return{type:x??"article",url:j,titleEn:w??"",titlePl:S??w??""}}).filter(Boolean):[]}})}function cp(o,t){var a;const r={};for(const[s,c]of Object.entries(o)){const d=(a=s.match(t))==null?void 0:a[1];if(!d)continue;const{meta:f,body:y}=sp(c);r[d]||(r[d]=[]),r[d].push({q:y,options:f.options??[],correct:f.correct??0,hint:f.hint??"",source:f.source??null,tests:f.tests&&typeof f.tests=="object"&&Object.keys(f.tests).length>0?f.tests:{[d]:1}})}return r}function Wi(o,t,r=[],a=null){const s=o[t];if(!s||s.length===0||r.includes(-1))return null;const c=s.map((f,y)=>({q:f,i:y})).filter(({q:f,i:y})=>!r.includes(y)&&(a?f.source===a:!0));if(c.length===0)return null;const d=c[Math.floor(Math.random()*c.length)];return{...d.q,index:d.i}}const o5=[["integers","linear_eq"],["integers","modular_arithmetic"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],i5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},a5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},s5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},l5={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},c5=Object.assign({"./nodes/abs_value/node.md":dh,"./nodes/analytic_geom/node.md":ph,"./nodes/area_perimeter/node.md":mh,"./nodes/arith_geom/node.md":fh,"./nodes/bernoulli/node.md":hh,"./nodes/binom_theorem/node.md":yh,"./nodes/circle_eq/node.md":$h,"./nodes/combinations/node.md":gh,"./nodes/complex/node.md":xh,"./nodes/cond_prob/node.md":bh,"./nodes/conic_sections/node.md":vh,"./nodes/counting/node.md":wh,"./nodes/data_basics/node.md":zh,"./nodes/deriv_apps/node.md":_h,"./nodes/derivative/node.md":kh,"./nodes/distributions/node.md":jh,"./nodes/factoring/node.md":Sh,"./nodes/fn_compositions/node.md":qh,"./nodes/fn_concept/node.md":Th,"./nodes/fn_exp/node.md":Ah,"./nodes/fn_linear/node.md":Mh,"./nodes/fn_log/node.md":Ph,"./nodes/fn_poly/node.md":Ch,"./nodes/fn_quadratic/node.md":Rh,"./nodes/fn_trig/node.md":Dh,"./nodes/fractions/node.md":Eh,"./nodes/geo_series/node.md":Bh,"./nodes/integers/node.md":Fh,"./nodes/integral/node.md":Ih,"./nodes/limits/node.md":Nh,"./nodes/linear_eq/node.md":Lh,"./nodes/linear_ineq/node.md":Wh,"./nodes/linear_sys/node.md":Oh,"./nodes/log_eq/node.md":Hh,"./nodes/log_exp/node.md":Gh,"./nodes/logic_basics/node.md":Uh,"./nodes/modular_arithmetic/node.md":Vh,"./nodes/optimization_lp/node.md":Zh,"./nodes/param_eq/node.md":Kh,"./nodes/permutations/node.md":Qh,"./nodes/planimetria_lp/node.md":Yh,"./nodes/poly_roots/node.md":Xh,"./nodes/polynomials/node.md":Jh,"./nodes/powers/node.md":e2,"./nodes/probability/node.md":n2,"./nodes/proof/node.md":t2,"./nodes/pythagoras/node.md":r2,"./nodes/quadratic_eq/node.md":o2,"./nodes/quadratic_ineq/node.md":i2,"./nodes/rational_expr/node.md":a2,"./nodes/seq_limits/node.md":s2,"./nodes/sequences/node.md":l2,"./nodes/sets/node.md":c2,"./nodes/sin_cos_law/node.md":u2,"./nodes/solid_geom/node.md":d2,"./nodes/stat_lp/node.md":p2,"./nodes/thales/node.md":m2,"./nodes/trig_basic/node.md":f2,"./nodes/trig_eq/node.md":h2,"./nodes/trig_formulas/node.md":y2,"./nodes/trig_lp/node.md":$2,"./nodes/vectors/node.md":g2,"./nodes/vieta/node.md":x2}),u5=lp(c5,/\.\/nodes\/([^/]+)\/node\.md$/),d5=Object.assign({"./nodes/abs_value/questions/01.md":b2,"./nodes/abs_value/questions/02.md":v2,"./nodes/abs_value/questions/03.md":w2,"./nodes/abs_value/questions/04.md":z2,"./nodes/abs_value/questions/05.md":_2,"./nodes/analytic_geom/questions/01.md":k2,"./nodes/analytic_geom/questions/02.md":j2,"./nodes/analytic_geom/questions/03.md":S2,"./nodes/analytic_geom/questions/04.md":q2,"./nodes/analytic_geom/questions/05.md":T2,"./nodes/area_perimeter/questions/01.md":A2,"./nodes/area_perimeter/questions/02.md":M2,"./nodes/area_perimeter/questions/03.md":P2,"./nodes/area_perimeter/questions/04.md":C2,"./nodes/arith_geom/questions/01.md":R2,"./nodes/arith_geom/questions/02.md":D2,"./nodes/arith_geom/questions/03.md":E2,"./nodes/arith_geom/questions/04.md":B2,"./nodes/arith_geom/questions/05.md":F2,"./nodes/bernoulli/questions/01.md":I2,"./nodes/bernoulli/questions/02.md":N2,"./nodes/bernoulli/questions/03.md":L2,"./nodes/bernoulli/questions/04.md":W2,"./nodes/bernoulli/questions/05.md":O2,"./nodes/bernoulli/questions/06.md":H2,"./nodes/bernoulli/questions/07.md":G2,"./nodes/bernoulli/questions/08.md":U2,"./nodes/binom_theorem/questions/01.md":V2,"./nodes/binom_theorem/questions/02.md":Z2,"./nodes/binom_theorem/questions/03.md":K2,"./nodes/binom_theorem/questions/04.md":Q2,"./nodes/binom_theorem/questions/05.md":Y2,"./nodes/binom_theorem/questions/06.md":X2,"./nodes/binom_theorem/questions/07.md":J2,"./nodes/binom_theorem/questions/08.md":e4,"./nodes/circle_eq/questions/01.md":n4,"./nodes/circle_eq/questions/02.md":t4,"./nodes/circle_eq/questions/03.md":r4,"./nodes/circle_eq/questions/04.md":o4,"./nodes/combinations/questions/01.md":i4,"./nodes/combinations/questions/02.md":a4,"./nodes/combinations/questions/03.md":s4,"./nodes/combinations/questions/04.md":l4,"./nodes/combinations/questions/05.md":c4,"./nodes/combinations/questions/06.md":u4,"./nodes/combinations/questions/07.md":d4,"./nodes/combinations/questions/08.md":p4,"./nodes/complex/questions/01.md":m4,"./nodes/complex/questions/02.md":f4,"./nodes/complex/questions/03.md":h4,"./nodes/cond_prob/questions/01.md":y4,"./nodes/cond_prob/questions/02.md":$4,"./nodes/cond_prob/questions/03.md":g4,"./nodes/cond_prob/questions/04.md":x4,"./nodes/cond_prob/questions/05.md":b4,"./nodes/cond_prob/questions/06.md":v4,"./nodes/cond_prob/questions/07.md":w4,"./nodes/cond_prob/questions/08.md":z4,"./nodes/cond_prob/questions/09.md":_4,"./nodes/cond_prob/questions/10.md":k4,"./nodes/conic_sections/questions/01.md":j4,"./nodes/conic_sections/questions/02.md":S4,"./nodes/conic_sections/questions/03.md":q4,"./nodes/counting/questions/01.md":T4,"./nodes/counting/questions/02.md":A4,"./nodes/counting/questions/03.md":M4,"./nodes/counting/questions/04.md":P4,"./nodes/counting/questions/05.md":C4,"./nodes/counting/questions/06.md":R4,"./nodes/counting/questions/07.md":D4,"./nodes/counting/questions/08.md":E4,"./nodes/counting/questions/09.md":B4,"./nodes/counting/questions/10.md":F4,"./nodes/data_basics/questions/01.md":I4,"./nodes/data_basics/questions/02.md":N4,"./nodes/data_basics/questions/03.md":L4,"./nodes/data_basics/questions/04.md":W4,"./nodes/deriv_apps/questions/01.md":O4,"./nodes/deriv_apps/questions/02.md":H4,"./nodes/deriv_apps/questions/03.md":G4,"./nodes/derivative/questions/01.md":U4,"./nodes/derivative/questions/02.md":V4,"./nodes/derivative/questions/03.md":Z4,"./nodes/distributions/questions/01.md":K4,"./nodes/distributions/questions/02.md":Q4,"./nodes/distributions/questions/03.md":Y4,"./nodes/factoring/questions/01.md":X4,"./nodes/factoring/questions/02.md":J4,"./nodes/factoring/questions/03.md":ey,"./nodes/factoring/questions/04.md":ny,"./nodes/factoring/questions/05.md":ty,"./nodes/factoring/questions/06.md":ry,"./nodes/factoring/questions/07.md":oy,"./nodes/factoring/questions/08.md":iy,"./nodes/factoring/questions/09.md":ay,"./nodes/factoring/questions/10.md":sy,"./nodes/fn_compositions/questions/01.md":ly,"./nodes/fn_compositions/questions/02.md":cy,"./nodes/fn_compositions/questions/03.md":uy,"./nodes/fn_concept/questions/01.md":dy,"./nodes/fn_concept/questions/02.md":py,"./nodes/fn_concept/questions/03.md":my,"./nodes/fn_exp/questions/01.md":fy,"./nodes/fn_exp/questions/02.md":hy,"./nodes/fn_exp/questions/03.md":yy,"./nodes/fn_linear/questions/01.md":$y,"./nodes/fn_linear/questions/02.md":gy,"./nodes/fn_linear/questions/03.md":xy,"./nodes/fn_log/questions/01.md":by,"./nodes/fn_log/questions/02.md":vy,"./nodes/fn_log/questions/03.md":wy,"./nodes/fn_poly/questions/01.md":zy,"./nodes/fn_poly/questions/02.md":_y,"./nodes/fn_poly/questions/03.md":ky,"./nodes/fn_quadratic/questions/01.md":jy,"./nodes/fn_quadratic/questions/02.md":Sy,"./nodes/fn_quadratic/questions/03.md":qy,"./nodes/fn_quadratic/questions/04.md":Ty,"./nodes/fn_quadratic/questions/05.md":Ay,"./nodes/fn_quadratic/questions/06.md":My,"./nodes/fn_quadratic/questions/07.md":Py,"./nodes/fn_quadratic/questions/08.md":Cy,"./nodes/fn_quadratic/questions/09.md":Ry,"./nodes/fn_quadratic/questions/10.md":Dy,"./nodes/fn_trig/questions/01.md":Ey,"./nodes/fn_trig/questions/02.md":By,"./nodes/fn_trig/questions/03.md":Fy,"./nodes/fractions/questions/01.md":Iy,"./nodes/fractions/questions/02.md":Ny,"./nodes/fractions/questions/03.md":Ly,"./nodes/geo_series/questions/01.md":Wy,"./nodes/geo_series/questions/02.md":Oy,"./nodes/geo_series/questions/03.md":Hy,"./nodes/geo_series/questions/04.md":Gy,"./nodes/geo_series/questions/05.md":Uy,"./nodes/integers/questions/01.md":Vy,"./nodes/integers/questions/02.md":Zy,"./nodes/integers/questions/03.md":Ky,"./nodes/integral/questions/01.md":Qy,"./nodes/integral/questions/02.md":Yy,"./nodes/integral/questions/03.md":Xy,"./nodes/limits/questions/01.md":Jy,"./nodes/limits/questions/02.md":e$,"./nodes/limits/questions/03.md":n$,"./nodes/linear_eq/questions/01.md":t$,"./nodes/linear_eq/questions/02.md":r$,"./nodes/linear_eq/questions/03.md":o$,"./nodes/linear_ineq/questions/01.md":i$,"./nodes/linear_ineq/questions/02.md":a$,"./nodes/linear_ineq/questions/03.md":s$,"./nodes/linear_ineq/questions/04.md":l$,"./nodes/linear_ineq/questions/05.md":c$,"./nodes/linear_sys/questions/01.md":u$,"./nodes/linear_sys/questions/02.md":d$,"./nodes/linear_sys/questions/03.md":p$,"./nodes/linear_sys/questions/04.md":m$,"./nodes/log_eq/questions/01.md":f$,"./nodes/log_eq/questions/02.md":h$,"./nodes/log_eq/questions/03.md":y$,"./nodes/log_exp/questions/01.md":$$,"./nodes/log_exp/questions/02.md":g$,"./nodes/log_exp/questions/03.md":x$,"./nodes/log_exp/questions/04.md":b$,"./nodes/log_exp/questions/05.md":v$,"./nodes/logic_basics/questions/01.md":w$,"./nodes/logic_basics/questions/02.md":z$,"./nodes/logic_basics/questions/03.md":_$,"./nodes/optimization_lp/questions/01.md":k$,"./nodes/optimization_lp/questions/02.md":j$,"./nodes/optimization_lp/questions/03.md":S$,"./nodes/optimization_lp/questions/04.md":q$,"./nodes/optimization_lp/questions/05.md":T$,"./nodes/optimization_lp/questions/06.md":A$,"./nodes/optimization_lp/questions/07.md":M$,"./nodes/optimization_lp/questions/08.md":P$,"./nodes/param_eq/questions/01.md":C$,"./nodes/param_eq/questions/02.md":R$,"./nodes/param_eq/questions/03.md":D$,"./nodes/permutations/questions/01.md":E$,"./nodes/permutations/questions/02.md":B$,"./nodes/permutations/questions/03.md":F$,"./nodes/permutations/questions/04.md":I$,"./nodes/permutations/questions/05.md":N$,"./nodes/permutations/questions/06.md":L$,"./nodes/permutations/questions/07.md":W$,"./nodes/permutations/questions/08.md":O$,"./nodes/planimetria_lp/questions/01.md":H$,"./nodes/planimetria_lp/questions/02.md":G$,"./nodes/planimetria_lp/questions/03.md":U$,"./nodes/poly_roots/questions/01.md":V$,"./nodes/poly_roots/questions/02.md":Z$,"./nodes/poly_roots/questions/03.md":K$,"./nodes/polynomials/questions/01.md":Q$,"./nodes/polynomials/questions/02.md":Y$,"./nodes/polynomials/questions/03.md":X$,"./nodes/polynomials/questions/04.md":J$,"./nodes/polynomials/questions/05.md":e3,"./nodes/polynomials/questions/06.md":n3,"./nodes/polynomials/questions/07.md":t3,"./nodes/polynomials/questions/08.md":r3,"./nodes/polynomials/questions/09.md":o3,"./nodes/polynomials/questions/10.md":i3,"./nodes/powers/questions/01.md":a3,"./nodes/powers/questions/02.md":s3,"./nodes/powers/questions/03.md":l3,"./nodes/powers/questions/04.md":c3,"./nodes/probability/questions/01.md":u3,"./nodes/probability/questions/02.md":d3,"./nodes/probability/questions/03.md":p3,"./nodes/probability/questions/04.md":m3,"./nodes/probability/questions/05.md":f3,"./nodes/probability/questions/06.md":h3,"./nodes/probability/questions/07.md":y3,"./nodes/probability/questions/08.md":$3,"./nodes/probability/questions/09.md":g3,"./nodes/probability/questions/10.md":x3,"./nodes/probability/questions/11.md":b3,"./nodes/proof/questions/01.md":v3,"./nodes/proof/questions/02.md":w3,"./nodes/proof/questions/03.md":z3,"./nodes/pythagoras/questions/01.md":_3,"./nodes/pythagoras/questions/02.md":k3,"./nodes/pythagoras/questions/03.md":j3,"./nodes/quadratic_eq/questions/01.md":S3,"./nodes/quadratic_eq/questions/02.md":q3,"./nodes/quadratic_eq/questions/03.md":T3,"./nodes/quadratic_eq/questions/04.md":A3,"./nodes/quadratic_eq/questions/05.md":M3,"./nodes/quadratic_eq/questions/06.md":P3,"./nodes/quadratic_eq/questions/07.md":C3,"./nodes/quadratic_eq/questions/08.md":R3,"./nodes/quadratic_eq/questions/09.md":D3,"./nodes/quadratic_eq/questions/10.md":E3,"./nodes/quadratic_ineq/questions/01.md":B3,"./nodes/quadratic_ineq/questions/02.md":F3,"./nodes/quadratic_ineq/questions/03.md":I3,"./nodes/quadratic_ineq/questions/04.md":N3,"./nodes/quadratic_ineq/questions/05.md":L3,"./nodes/quadratic_ineq/questions/06.md":W3,"./nodes/quadratic_ineq/questions/07.md":O3,"./nodes/quadratic_ineq/questions/08.md":H3,"./nodes/rational_expr/questions/01.md":G3,"./nodes/rational_expr/questions/02.md":U3,"./nodes/rational_expr/questions/03.md":V3,"./nodes/rational_expr/questions/04.md":Z3,"./nodes/rational_expr/questions/05.md":K3,"./nodes/rational_expr/questions/06.md":Q3,"./nodes/rational_expr/questions/07.md":Y3,"./nodes/seq_limits/questions/01.md":X3,"./nodes/seq_limits/questions/02.md":J3,"./nodes/seq_limits/questions/03.md":eg,"./nodes/sequences/questions/01.md":ng,"./nodes/sequences/questions/02.md":tg,"./nodes/sequences/questions/03.md":rg,"./nodes/sequences/questions/04.md":og,"./nodes/sequences/questions/05.md":ig,"./nodes/sets/questions/01.md":ag,"./nodes/sets/questions/02.md":sg,"./nodes/sets/questions/03.md":lg,"./nodes/sets/questions/04.md":cg,"./nodes/sets/questions/05.md":ug,"./nodes/sets/questions/06.md":dg,"./nodes/sets/questions/07.md":pg,"./nodes/sets/questions/08.md":mg,"./nodes/sets/questions/09.md":fg,"./nodes/sets/questions/10.md":hg,"./nodes/sin_cos_law/questions/01.md":yg,"./nodes/sin_cos_law/questions/02.md":$g,"./nodes/sin_cos_law/questions/03.md":gg,"./nodes/solid_geom/questions/01.md":xg,"./nodes/solid_geom/questions/02.md":bg,"./nodes/solid_geom/questions/03.md":vg,"./nodes/solid_geom/questions/04.md":wg,"./nodes/solid_geom/questions/05.md":zg,"./nodes/solid_geom/questions/06.md":_g,"./nodes/solid_geom/questions/07.md":kg,"./nodes/stat_lp/questions/01.md":jg,"./nodes/stat_lp/questions/02.md":Sg,"./nodes/stat_lp/questions/03.md":qg,"./nodes/stat_lp/questions/04.md":Tg,"./nodes/thales/questions/01.md":Ag,"./nodes/thales/questions/02.md":Mg,"./nodes/thales/questions/03.md":Pg,"./nodes/trig_basic/questions/01.md":Cg,"./nodes/trig_basic/questions/02.md":Rg,"./nodes/trig_basic/questions/03.md":Dg,"./nodes/trig_basic/questions/04.md":Eg,"./nodes/trig_basic/questions/05.md":Bg,"./nodes/trig_eq/questions/01.md":Fg,"./nodes/trig_eq/questions/02.md":Ig,"./nodes/trig_eq/questions/03.md":Ng,"./nodes/trig_formulas/questions/01.md":Lg,"./nodes/trig_formulas/questions/02.md":Wg,"./nodes/trig_formulas/questions/03.md":Og,"./nodes/trig_lp/questions/01.md":Hg,"./nodes/trig_lp/questions/02.md":Gg,"./nodes/trig_lp/questions/03.md":Ug,"./nodes/vectors/questions/01.md":Vg,"./nodes/vectors/questions/02.md":Zg,"./nodes/vectors/questions/03.md":Kg,"./nodes/vieta/questions/01.md":Qg,"./nodes/vieta/questions/02.md":Yg,"./nodes/vieta/questions/03.md":Xg,"./nodes/vieta/questions/04.md":Jg,"./nodes/vieta/questions/05.md":e5,"./nodes/vieta/questions/06.md":n5,"./nodes/vieta/questions/07.md":t5,"./nodes/vieta/questions/08.md":r5}),p5=cp(d5,/\.\/nodes\/([^/]+)\/questions\//),m5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:l5,QUESTION_BANK:p5,RAW_EDGES:o5,RAW_NODES:u5,SCOPE_COLORS:a5,SCOPE_LABELS:s5,SECTIONS:i5},Symbol.toStringTag,{value:"Module"})),f5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,h5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,y5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,$5=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,g5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,x5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,b5=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,v5=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,w5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,z5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,_5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,k5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,j5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,S5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,q5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,T5=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,A5=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,M5=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,P5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,C5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,R5=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,D5=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,E5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,B5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,F5=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,I5=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,N5=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,L5=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,W5=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,O5=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,H5=`---
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
`,G5=`---
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
`,U5=`---
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
`,V5=`---
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
`,Z5=`---
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
`,K5=`---
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
`,Q5=`---
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
`,Y5=`---
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
`,X5=`---
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
`,J5=`---
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

`,e6=`---
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

`,n6=`---
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

`,t6=`---
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
`,r6=`---
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
`,o6=`---
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
`,i6=`---
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
`,a6=`---
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
`,s6=`---
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
`,l6=`---
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

`,c6=`---
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

`,u6=`---
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

`,d6=`---
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

`,p6=`---
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

`,m6=`---
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

`,f6=`---
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
`,h6=`---
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
`,y6=`---
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
`,$6=`---
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
`,g6=`---
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
`,x6=`---
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
`,b6=`---
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
`,v6=`---
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
`,w6=`---
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
`,z6=`---
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
`,_6=`---
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
`,k6=`---
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
`,j6=`---
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
`,S6=`---
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
`,q6=`---
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
`,T6=`---
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
`,A6=`---
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
`,M6=`---
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
`,P6=`---
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
`,C6=`---
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
`,R6=`---
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
`,D6=`---
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

`,E6=`---
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

`,B6=`---
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

`,F6=`---
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

`,I6=`---
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

`,N6=`---
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

`,L6=`---
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

`,W6=`---
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

`,O6=`---
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

`,H6=`---
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
`,G6=`---
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
`,U6=`---
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
`,V6=`---
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
`,Z6=`---
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
`,K6=`---
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
`,Q6=`---
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

`,Y6=`---
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

`,X6=`---
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

`,J6=`---
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

`,ex=`---
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

`,nx=`---
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

`,tx=`---
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
`,rx=`---
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
`,ox=`---
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
`,ix=`---
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
`,ax=`---
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
`,sx=`---
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
`,lx=`---
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
`,cx=`---
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
`,ux=`---
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
`,dx=`---
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
`,px=`---
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

`,mx=`---
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

`,fx=`---
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
`,hx=`---
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
`,yx=`---
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
`,$x=`---
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

`,gx=`---
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

`,xx=`---
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

`,bx=`---
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
`,vx=`---
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
`,wx=`---
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
`,zx=`---
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

`,_x=`---
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

`,kx=`---
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

`,jx=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],Sx={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},qx={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},Tx={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},Ax={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},Mx=Object.assign({"./nodes/binary_ops/node.md":f5,"./nodes/cosets/node.md":h5,"./nodes/cyclic_groups/node.md":y5,"./nodes/direct_sums/node.md":$5,"./nodes/field_extensions/node.md":g5,"./nodes/fields_intro/node.md":x5,"./nodes/finitely_generated/node.md":b5,"./nodes/free_modules/node.md":v5,"./nodes/group_actions/node.md":w5,"./nodes/group_homomorphisms/node.md":z5,"./nodes/groups_intro/node.md":_5,"./nodes/ideals/node.md":k5,"./nodes/induction/node.md":j5,"./nodes/integral_domains/node.md":S5,"./nodes/iso_theorem/node.md":q5,"./nodes/jordan_normal_form/node.md":T5,"./nodes/module_homs/node.md":A5,"./nodes/modules_intro/node.md":M5,"./nodes/normal_subgroups/node.md":P5,"./nodes/poly_rings/node.md":C5,"./nodes/primary_decomp/node.md":R5,"./nodes/rational_canonical/node.md":D5,"./nodes/relations/node.md":E5,"./nodes/ring_homomorphisms/node.md":B5,"./nodes/rings_intro/node.md":F5,"./nodes/sets_functions/node.md":I5,"./nodes/subgroups/node.md":N5,"./nodes/submodules/node.md":L5,"./nodes/sylow/node.md":W5,"./nodes/torsion_modules/node.md":O5}),Px=lp(Mx,/\.\/nodes\/([^/]+)\/node\.md$/),Cx=Object.assign({"./nodes/binary_ops/questions/01.md":H5,"./nodes/binary_ops/questions/02.md":G5,"./nodes/binary_ops/questions/03.md":U5,"./nodes/cosets/questions/01.md":V5,"./nodes/cosets/questions/02.md":Z5,"./nodes/cosets/questions/03.md":K5,"./nodes/cyclic_groups/questions/01.md":Q5,"./nodes/cyclic_groups/questions/02.md":Y5,"./nodes/cyclic_groups/questions/03.md":X5,"./nodes/direct_sums/questions/01.md":J5,"./nodes/direct_sums/questions/02.md":e6,"./nodes/direct_sums/questions/03.md":n6,"./nodes/field_extensions/questions/01.md":t6,"./nodes/field_extensions/questions/02.md":r6,"./nodes/field_extensions/questions/03.md":o6,"./nodes/fields_intro/questions/01.md":i6,"./nodes/fields_intro/questions/02.md":a6,"./nodes/fields_intro/questions/03.md":s6,"./nodes/finitely_generated/questions/01.md":l6,"./nodes/finitely_generated/questions/02.md":c6,"./nodes/finitely_generated/questions/03.md":u6,"./nodes/free_modules/questions/01.md":d6,"./nodes/free_modules/questions/02.md":p6,"./nodes/free_modules/questions/03.md":m6,"./nodes/group_actions/questions/01.md":f6,"./nodes/group_actions/questions/02.md":h6,"./nodes/group_actions/questions/03.md":y6,"./nodes/group_homomorphisms/questions/01.md":$6,"./nodes/group_homomorphisms/questions/02.md":g6,"./nodes/group_homomorphisms/questions/03.md":x6,"./nodes/groups_intro/questions/01.md":b6,"./nodes/groups_intro/questions/02.md":v6,"./nodes/groups_intro/questions/03.md":w6,"./nodes/ideals/questions/01.md":z6,"./nodes/ideals/questions/02.md":_6,"./nodes/ideals/questions/03.md":k6,"./nodes/induction/questions/01.md":j6,"./nodes/induction/questions/02.md":S6,"./nodes/induction/questions/03.md":q6,"./nodes/integral_domains/questions/01.md":T6,"./nodes/integral_domains/questions/02.md":A6,"./nodes/integral_domains/questions/03.md":M6,"./nodes/iso_theorem/questions/01.md":P6,"./nodes/iso_theorem/questions/02.md":C6,"./nodes/iso_theorem/questions/03.md":R6,"./nodes/jordan_normal_form/questions/01.md":D6,"./nodes/jordan_normal_form/questions/02.md":E6,"./nodes/jordan_normal_form/questions/03.md":B6,"./nodes/module_homs/questions/01.md":F6,"./nodes/module_homs/questions/02.md":I6,"./nodes/module_homs/questions/03.md":N6,"./nodes/modules_intro/questions/01.md":L6,"./nodes/modules_intro/questions/02.md":W6,"./nodes/modules_intro/questions/03.md":O6,"./nodes/normal_subgroups/questions/01.md":H6,"./nodes/normal_subgroups/questions/02.md":G6,"./nodes/normal_subgroups/questions/03.md":U6,"./nodes/poly_rings/questions/01.md":V6,"./nodes/poly_rings/questions/02.md":Z6,"./nodes/poly_rings/questions/03.md":K6,"./nodes/primary_decomp/questions/01.md":Q6,"./nodes/primary_decomp/questions/02.md":Y6,"./nodes/primary_decomp/questions/03.md":X6,"./nodes/rational_canonical/questions/01.md":J6,"./nodes/rational_canonical/questions/02.md":ex,"./nodes/rational_canonical/questions/03.md":nx,"./nodes/relations/questions/01.md":tx,"./nodes/relations/questions/02.md":rx,"./nodes/relations/questions/03.md":ox,"./nodes/ring_homomorphisms/questions/01.md":ix,"./nodes/ring_homomorphisms/questions/02.md":ax,"./nodes/ring_homomorphisms/questions/03.md":sx,"./nodes/rings_intro/questions/01.md":lx,"./nodes/rings_intro/questions/02.md":cx,"./nodes/rings_intro/questions/03.md":ux,"./nodes/sets_functions/questions/01.md":dx,"./nodes/sets_functions/questions/02.md":px,"./nodes/sets_functions/questions/03.md":mx,"./nodes/subgroups/questions/01.md":fx,"./nodes/subgroups/questions/02.md":hx,"./nodes/subgroups/questions/03.md":yx,"./nodes/submodules/questions/01.md":$x,"./nodes/submodules/questions/02.md":gx,"./nodes/submodules/questions/03.md":xx,"./nodes/sylow/questions/01.md":bx,"./nodes/sylow/questions/02.md":vx,"./nodes/sylow/questions/03.md":wx,"./nodes/torsion_modules/questions/01.md":zx,"./nodes/torsion_modules/questions/02.md":_x,"./nodes/torsion_modules/questions/03.md":kx}),Rx=cp(Cx,/\.\/nodes\/([^/]+)\/questions\//),Dx=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Ax,QUESTION_BANK:Rx,RAW_EDGES:jx,RAW_NODES:Px,SCOPE_COLORS:qx,SCOPE_LABELS:Tx,SECTIONS:Sx},Symbol.toStringTag,{value:"Module"})),Ex={math_pl:m5,abstract_algebra:Dx},Bx="math_pl",up="wizmat_v1_";function Fx(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function Ix(o,t){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function st(o,t){const r=up+o,[a,s]=D.useState(()=>{try{const d=localStorage.getItem(r);return d===null?t:Ix(d,t)}catch{return t}});D.useEffect(()=>{try{localStorage.setItem(r,Fx(a))}catch{}},[r,a]);const c=D.useCallback(d=>{s(f=>typeof d=="function"?d(f):d)},[]);return[a,c]}function Nx(){try{Object.keys(localStorage).filter(o=>o.startsWith(up)).forEach(o=>localStorage.removeItem(o))}catch{}}const sc={midnight:{name:"Midnight",bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",edgeDefault:"#334766",edgeHighlighted:"#4a9eff",edgeDimmed:"#151b26"},highContrast:{name:"High Contrast",bg:"#08090d",surface:"#111318",surfaceHi:"#111318ee",border:"#2e3a50",borderSubtle:"#1c2436",textPrimary:"#ffffff",textBody:"#dce4ef",textMuted:"#a3b5cc",textDim:"#8899b3",textFaint:"#556a85",edgeDefault:"#3d5577",edgeHighlighted:"#5ab0ff",edgeDimmed:"#0d1118"},warm:{name:"Warm",bg:"#131110",surface:"#1c1916",surfaceHi:"#1c1916ee",border:"#33291f",borderSubtle:"#28211a",textPrimary:"#f2ede6",textBody:"#d4cabb",textMuted:"#a89d8e",textDim:"#8a7e6f",textFaint:"#5c5347",edgeDefault:"#4a3f32",edgeHighlighted:"#e8a84c",edgeDimmed:"#1a1614"},bright:{name:"Bright",bg:"#f7f7f2",surface:"#ffffff",surfaceHi:"#ffffffee",border:"#e0ddd5",borderSubtle:"#ebe8e2",textPrimary:"#1a1a1a",textBody:"#3a3a3a",textMuted:"#6b6b6b",textDim:"#8a8a8a",textFaint:"#b5b5b5",edgeDefault:"#c5c0b6",edgeHighlighted:"#58cc02",edgeDimmed:"#edebe6"}},_={...sc.midnight,known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",frontierHi:"#f1c40f"};function d1(o){const t=sc[o];t&&Object.assign(_,t)}const qe="'JetBrains Mono','SF Mono','Fira Code',monospace",Ro=(o,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${t}`:`1px solid ${_.border}`,background:o?`${t}22`:"transparent",color:o?t:_.textDim,minHeight:32}),Fi=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44}),bs=["abs_value","analytic_geom","area_perimeter","arith_geom","bernoulli","binom_theorem","circle_eq","combinations","complex","cond_prob","conic_sections","counting","data_basics","deriv_apps","derivative","distributions","factoring","fn_compositions","fn_concept","fn_exp","fn_linear","fn_log","fn_poly","fn_quadratic","fn_trig","fractions","geo_series","integers","integral","limits","linear_eq","linear_ineq","linear_sys","log_eq","log_exp","logic_basics","optimization_lp","param_eq","permutations","planimetria_lp","poly_roots","polynomials","powers","probability","proof","pythagoras","quadratic_eq","quadratic_ineq","rational_expr","seq_limits","sequences","sets","sin_cos_law","solid_geom","stat_lp","thales","trig_basic","trig_eq","trig_formulas","trig_lp","vectors","vieta"];function Vl(o){return bs.map(t=>o[t]==="known"?"1":o[t]==="unknown"?"2":"0").join("")}function Lx(o){const t={};for(let r=0;r<bs.length&&r<o.length;r++)o[r]==="1"?t[bs[r]]="known":o[r]==="2"&&(t[bs[r]]="unknown");return t}const Wx={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie, aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. Algorytm dobierze najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). Algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Zbadamy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Trafność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Trafność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do sprawdzenia)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niesklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, a połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź, co umiesz — algorytm dobierze najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Matura coraz bliżej — co jeszcze powtórzyć?",en:"Find your gaps in mathematics"},heroSub:{pl:"Odpowiedz na kilkanaście pytań. Pokażemy, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",en:"Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations."},heroStart:{pl:"Sprawdź się",en:"Start assessment"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroMore:{pl:"Więcej opcji",en:"More options"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki przegląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizOf:{pl:"pytań",en:"questions"},quizCorrectShort:{pl:"poprawnych",en:"correct"},quizSeeViz:{pl:"Nie rozumiesz? Zobacz wizualizację →",en:"Don't get it? See the visualization →"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizProcessing:{pl:"Analizuję wyniki…",en:"Analyzing results…"},quizExitConfirm:{pl:"Na pewno chcesz przerwać? Postęp zostanie utracony.",en:"Are you sure you want to quit? Progress will be lost."},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your biggest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},resultsStartPath:{pl:"Zacznij naukę — ścieżka do pierwszej luki",en:"Start learning — path to your first gap"},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsShare:{pl:"Udostępnij wynik",en:"Share results"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},coffeeText:{pl:"Pomogło? Możesz postawić mi kawę.",en:"Found it helpful? You can buy me a coffee."},coffeeBtn:{pl:"Postaw kawę ☕",en:"Buy me a coffee ☕"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicLearnPath:{pl:"Ścieżka do tego tematu",en:"Path to this topic"},topicQuizMe:{pl:"Sprawdź się z tego tematu",en:"Quiz me on this topic"},galleryTitle:{pl:"Interaktywne wizualizacje",en:"Interactive visualizations"},galleryCount:{pl:"wizualizacji",en:"visualizations"},heroBrowseViz:{pl:"Przeglądaj wizualizacje",en:"Browse visualizations"},pathLabel:{pl:"Ścieżka nauki",en:"Learning path"},pathTopics:{pl:"tematów w ścieżce",en:"topics in path"},pathKnown:{pl:"znasz",en:"known"},pathToStudy:{pl:"do nauki",en:"to study"},pathGoal:{pl:"— cel",en:"— goal"},pathStartHere:{pl:"zacznij tutaj",en:"start here"},heroGoal:{pl:"Wybierz cel i sprawdź gotowość",en:"Pick a goal & test readiness"},heroExplore:{pl:"Eksploruj mapę bez testu →",en:"Explore the map without a test →"},goalQuizTitle:{pl:"Szczegółowa analiza",en:"Deep analysis"},goalQuizSub:{pl:"Sprawdzamy wymagania wstępne dla:",en:"Testing prerequisites for:"},goalQuizTopics:{pl:"tematów do zbadania",en:"topics to assess"},goalQuizDone:{pl:"Analiza zakończona",en:"Analysis complete"},goalQuizSeeMap:{pl:"Zobacz na mapie",en:"See on map"},goalQuizRetake:{pl:"Powtórz analizę",en:"Retake analysis"},goalQuizBackHero:{pl:"Wróć na start",en:"Back to start"},profileTitle:{pl:"Twój profil",en:"Your profile"},profileFullCourse:{pl:"Pełny kurs",en:"Full course"},profileGoal:{pl:"Cel",en:"Goal"},profileStarted:{pl:"Rozpoczęto",en:"Started"},profileProgress:{pl:"Postęp",en:"Progress"},profileContinue:{pl:"Kontynuuj naukę",en:"Continue learning"},profileSeeMap:{pl:"Zobacz mapę",en:"See map"},profileStartNew:{pl:"Zacznij od nowa",en:"Start fresh"},profileStartNewConfirm:{pl:"Na pewno? Obecny postęp zostanie utracony.",en:"Are you sure? Current progress will be lost."},profileTimeline:{pl:"Ścieżka nauki",en:"Learning timeline"},profileEmpty:{pl:"Nie masz jeszcze zapisanego kursu.",en:"You don't have a saved course yet."},profileStartQuiz:{pl:"Rozwiąż test, żeby rozpocząć",en:"Take a quiz to get started"},profileFromScratch:{pl:"Zacznij od zera",en:"Start from scratch"},profileFromScratchSub:{pl:"Pełna ścieżka przez wszystkie tematy",en:"Full path through all topics"},heroContinue:{pl:"Kontynuuj naukę →",en:"Continue learning →"},heroProfile:{pl:"Mój profil",en:"My profile"},startLesson:{pl:"Rozpocznij lekcję",en:"Start lesson"},lessonOf:{pl:"z",en:"of"},iUnderstand:{pl:"Rozumiem — dalej →",en:"I understand — next →"},lessonPrev:{pl:"← Poprzedni",en:"← Previous"},lessonNext:{pl:"Następny →",en:"Next →"},lessonComplete:{pl:"Ścieżka ukończona! 🎉",en:"Path complete! 🎉"},lessonCompleteSub:{pl:"Gratulacje — przeszedłeś całą ścieżkę.",en:"Congratulations — you've completed the entire path."},lessonViz:{pl:"Wizualizacja",en:"Visualization"},lessonPractice:{pl:"Sprawdź się",en:"Check yourself"},lessonCheck:{pl:"Sprawdź",en:"Check"}};function N(o,t="pl"){const r=Wx[o];return r?r[t]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function ao(o,t){const r={},a={};return o.forEach(s=>{r[s.id]=[],a[s.id]=[]}),t.forEach(([s,c])=>{var d,f;(d=r[c])==null||d.push(s),(f=a[s])==null||f.push(c)}),{prereqs:r,dependents:a}}function lc(o,t){const r=Object.fromEntries(o.map(d=>[d.id,0])),a=Object.fromEntries(o.map(d=>[d.id,[]]));for(const[d,f]of t)r[f]!==void 0&&r[f]++,a[d]!==void 0&&a[d].push(f);const s=Object.fromEntries(o.map(d=>[d.id,0])),c=o.filter(d=>r[d.id]===0).map(d=>d.id);for(;c.length;){const d=c.shift();for(const f of a[d])s[f]=Math.max(s[f],s[d]+1),--r[f]===0&&c.push(f)}return s}const Ox={id:"spectral",label:"Spectral"};function Hx(o,t,r,a,s=80){const c=o.length,d=Object.fromEntries(o.map((I,Q)=>[I.id,Q])),f=Array.from({length:c},()=>new Float64Array(c));t.forEach(([I,Q])=>{const Y=d[I],te=d[Q];Y==null||te==null||(f[Y][te]=1,f[te][Y]=1)});const y=f.map(I=>I.reduce((Q,Y)=>Q+Y,0)),x=I=>I.map((Q,Y)=>{let te=0;for(let re=0;re<c;re++)te+=f[Y][re]*I[re];return y[Y]*I[Y]-te}),g=(I,Q)=>I.reduce((Y,te,re)=>Y+te*Q[re],0),w=I=>{const Q=Math.sqrt(g(I,I))||1;return I.map(Y=>Y/Q)},S=(I,Q)=>{let Y=[...I];return Q.forEach(te=>{const re=g(Y,te);Y=Y.map((J,ee)=>J-re*te[ee])}),w(Y)},j=(I,Q=400)=>{let Y=w(Array.from({length:c},()=>Math.random()-.5));Y=S(Y,I);for(let te=0;te<Q;te++){const re=Math.max(...y)+1;Y=S(Y.map((J,ee)=>re*J-x(Y)[ee]),I)}return Y},q=w(new Array(c).fill(1)),k=j([q]),T=j([q,k]),A=Math.min(...k),L=Math.max(...k),H=Math.min(...T),F=Math.max(...T),E=L-A<1e-6?1:(r-2*s)/(L-A),G=F-H<1e-6?1:(a-2*s)/(F-H);return o.map((I,Q)=>({id:I.id,x:s+(k[Q]-A)*E,y:s+(T[Q]-H)*G,vx:0,vy:0}))}const Gx=Object.freeze(Object.defineProperty({__proto__:null,apply:Hx,meta:Ox},Symbol.toStringTag,{value:"Module"})),Ux={id:"topoRank",label:"Topo Rank"},p1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function Vx(o,t,r,a,s=80){const c=lc(o,t),d=Math.max(...o.map(g=>c[g.id]??0),0),f={};for(const g of o){const w=c[g.id]??0;(f[w]??(f[w]=[])).push(g)}for(const g of Object.values(f))g.sort((w,S)=>{const j=p1.indexOf(w.scope),q=p1.indexOf(S.scope);return(j===-1?999:j)-(q===-1?999:q)});const y=r-2*s,x=a-2*s;return o.map(g=>{const w=c[g.id]??0,S=f[w],j=S.indexOf(g);return{id:g.id,x:s+(j+.5)/S.length*y,y:s+w/Math.max(d,1)*x,vx:0,vy:0}})}const Zx=Object.freeze(Object.defineProperty({__proto__:null,apply:Vx,meta:Ux},Symbol.toStringTag,{value:"Module"})),Kx={id:"nPartite",label:"N-Partite Grid"},Qx=90;function Yx(o,t,r,a,s=120){const c=lc(o,t),d=Math.max(...o.map(q=>c[q.id]??0),0),f={};for(const q of o){const k=c[q.id]??0;(f[k]??(f[k]=[])).push(q)}const y={},x={};for(const q of o)y[q.id]=[],x[q.id]=[];for(const[q,k]of t)y[k]&&y[k].push(q),x[q]&&x[q].push(k);const g=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],w={},S=r-2*s,j=a-2*s;for(let q=0;q<=d;q++){const k=f[q]??[];q===0?k.sort((T,A)=>{const L=g.indexOf(T.scope),H=g.indexOf(A.scope);return(L===-1?999:L)-(H===-1?999:H)}):k.sort((T,A)=>Ar(T,y,w,r)-Ar(A,y,w,r)),ql(k,s,S,r,q,d,j,w)}for(let q=0;q<6;q++)if(q%2===0)for(let k=1;k<=d;k++){const T=f[k]??[];T.sort((A,L)=>Ar(A,y,w,r)-Ar(L,y,w,r)),ql(T,s,S,r,k,d,j,w)}else for(let k=d-1;k>=0;k--){const T=f[k]??[];k===0?T.sort((A,L)=>{const H=Ar(A,x,w,r),F=Ar(L,x,w,r);if(Math.abs(H-F)>1)return H-F;const E=g.indexOf(A.scope),G=g.indexOf(L.scope);return(E===-1?999:E)-(G===-1?999:G)}):T.sort((A,L)=>Ar(A,x,w,r)-Ar(L,x,w,r)),ql(T,s,S,r,k,d,j,w)}return o.map(q=>{var k,T;return{id:q.id,x:((k=w[q.id])==null?void 0:k.x)??r/2,y:((T=w[q.id])==null?void 0:T.y)??a/2,vx:0,vy:0}})}function Ar(o,t,r,a){const s=t[o.id]??[];return s.length===0?a/2:s.reduce((c,d)=>{var f;return c+(((f=r[d])==null?void 0:f.x)??a/2)},0)/s.length}function ql(o,t,r,a,s,c,d,f){const y=t+s/Math.max(c,1)*d,x=(o.length-1)*Qx,g=Math.max(x,r),w=t+(r-g)/2;o.forEach((S,j)=>{const q=o.length===1?a/2:w+j/(o.length-1)*g;f[S.id]={x:q,y}})}const dp=Object.freeze(Object.defineProperty({__proto__:null,apply:Yx,meta:Kx},Symbol.toStringTag,{value:"Module"})),pp=[dp,Zx,Gx],mp="nPartite";function Xx(o){return pp.find(t=>t.meta.id===o)??dp}const zs=2200,cc=1600,Oi=120,Jx=.4,m1=10,eb=.35,f1=.01;function nb(o,t){const r=lc(o,t),a=Math.max(...o.map(c=>r[c.id]??0),0),s=Object.fromEntries(o.map(c=>[c.id,Oi+(r[c.id]??0)/Math.max(a,1)*(cc-2*Oi)]));return{ranks:r,rankY:s}}function tb(o,t){const r=Object.fromEntries(o.map((a,s)=>[a.id,s]));return t.map(([a,s])=>[r[a],r[s]]).filter(([a,s])=>a!=null&&s!=null)}function rb(o){return Math.sqrt(zs*cc/Math.max(o.length,1))*.9}function ob(o,t,r,a){return Xx(o).apply(t,r,zs,cc,Oi).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:a[d.id]??d.y,vx:0,vy:0}))}function ib(o,t,r,a,{ranks:s,rankY:c,simEdges:d,idealK:f}){const y=o.length,x=new Float64Array(y);for(let g=0;g<y;g++)for(let w=g+1;w<y;w++){if(s[o[g].id]!==s[o[w].id])continue;const S=o[g].x-o[w].x,j=Math.abs(S)||.1,q=f*f/(j*j),k=S<0?-1:1;x[g]+=k*q,x[w]-=k*q}for(const[g,w]of d){const S=o[w].x-o[g].x;x[g]+=S*f1,x[w]-=S*f1}for(let g=0;g<y;g++)x[g]+=(zs/2-o[g].x)*.003;return o.map((g,w)=>{if(g.id===t)return{...g,x:r,y:a,vx:0,vy:0};let S=(g.vx+x[w])*Jx;Math.abs(S)>m1&&(S*=m1/Math.abs(S));const j=c[g.id]??g.y,q=g.y+(j-g.y)*eb;return{...g,vx:S,vy:0,x:Math.max(Oi,Math.min(zs-Oi,g.x+S)),y:q}})}function Tl(o=mp,t=300,r,a){if(!r||r.length===0)return{};const{ranks:s,rankY:c}=nb(r,a??[]),d=tb(r,a??[]),f=rb(r),y={ranks:s,rankY:c,simEdges:d,idealK:f};let x=ob(o,r,a??[],c);for(let g=0;g<t;g++)x=ib(x,null,0,0,y);return Object.fromEntries(x.map(g=>[g.id,{x:g.x,y:g.y}]))}function ab(o){const t=typeof window<"u"&&window.innerWidth<600,[r,a]=D.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[s,c]=D.useState("grab"),d=D.useRef(!1),f=D.useRef({x:0,y:0}),y=D.useRef(null),x=D.useRef(null),g=D.useCallback(F=>{F.preventDefault();const E=F.deltaY>0?.9:1.1;a(G=>{const I=Math.max(.15,Math.min(5,G.scale*E)),Q=F.clientX,Y=F.clientY,te=Q-(Q-G.x)/G.scale*I,re=Y-(Y-G.y)/G.scale*I;return{x:te,y:re,scale:I}})},[]),w=D.useCallback((F,E)=>({x:(F-r.x)/r.scale,y:(E-r.y)/r.scale}),[r]),S=D.useCallback((F,E)=>{d.current=!0,c("grabbing"),f.current={x:F-r.x,y:E-r.y}},[r]),j=D.useCallback(F=>d.current?(a(E=>({...E,x:F.clientX-f.current.x,y:F.clientY-f.current.y})),!0):!1,[]),q=D.useCallback(()=>{d.current=!1,c("grab")},[]),k=(F,E)=>{const G=F.clientX-E.clientX,I=F.clientY-E.clientY;return Math.sqrt(G*G+I*I)},T=(F,E)=>({x:(F.clientX+E.clientX)/2,y:(F.clientY+E.clientY)/2}),A=D.useCallback(F=>{F.touches.length===1?(d.current=!0,a(E=>(f.current={x:F.touches[0].clientX-E.x,y:F.touches[0].clientY-E.y},E)),y.current=null,x.current=null):F.touches.length===2&&(d.current=!1,y.current=k(F.touches[0],F.touches[1]),x.current=T(F.touches[0],F.touches[1]))},[]),L=D.useCallback(F=>{if(F.preventDefault(),F.touches.length===1&&d.current)a(E=>({...E,x:F.touches[0].clientX-f.current.x,y:F.touches[0].clientY-f.current.y}));else if(F.touches.length===2&&y.current!==null){const E=k(F.touches[0],F.touches[1]),G=T(F.touches[0],F.touches[1]),I=E/y.current;a(Q=>{const Y=Math.max(.15,Math.min(5,Q.scale*I)),te=x.current.x,re=x.current.y,J=te-(te-Q.x)/Q.scale*Y,ee=re-(re-Q.y)/Q.scale*Y;return{x:J,y:ee,scale:Y}}),y.current=E,x.current=G}},[]),H=D.useCallback(()=>{d.current=!1,y.current=null,x.current=null},[]);return D.useEffect(()=>{const F=o.current;if(F)return F.addEventListener("wheel",g,{passive:!1}),F.addEventListener("touchstart",A,{passive:!1}),F.addEventListener("touchmove",L,{passive:!1}),F.addEventListener("touchend",H,{passive:!1}),()=>{F.removeEventListener("wheel",g),F.removeEventListener("touchstart",A),F.removeEventListener("touchmove",L),F.removeEventListener("touchend",H)}},[o,g,A,L,H]),{viewTransform:r,setViewTransform:a,toCanvas:w,isPanning:d,panStart:f,startPan:S,cursorStyle:s,setCursorStyle:c,handleMouseMove:j,handleMouseUp:q,handleWheel:g}}function sb(o,t,r,a){const s=D.useRef(null),c=D.useRef({x:0,y:0}),d=D.useCallback((x,g,w)=>{const S=o(g,w),j=t.find(q=>q.id===x);j&&(s.current=x,c.current={x:S.x-j.x,y:S.y-j.y},a==null||a("grabbing"))},[o,t,a]),f=D.useCallback((x,g)=>{if(!s.current)return!1;const w=o(x,g),S=s.current;return r(j=>({...j,[S]:{x:w.x-c.current.x,y:w.y-c.current.y}})),!0},[o,r]),y=D.useCallback(()=>{s.current=null,a==null||a("grab")},[a]);return{draggingNode:s,startNodeDrag:d,handleDragMove:f,handleDragEnd:y}}const io={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function uc(o,t,r){var c;const a={...t},s=[o];for(;s.length;){const d=s.shift();a[d]!=="known"&&(a[d]="known",(c=r.prereqs[d])==null||c.forEach(f=>{a[f]!=="known"&&s.push(f)}))}return a}function fp(o,t,r){var c;const a={...t},s=[o];for(;s.length;){const d=s.shift();a[d]!=="unknown"&&(a[d]="unknown",(c=r.dependents[d])==null||c.forEach(f=>{a[f]!=="unknown"&&s.push(f)}))}return a}function Hi(o,t,r,a,s){let c={...a};if(t){for(const d of Object.keys(r))c[d]="known";for(const d of Object.keys(r))c=uc(d,c,s)}else{for(const d of Object.keys(r))c[d]="unknown";for(const d of Object.keys(r))c=fp(d,c,s)}return c}function lb(o,t,r){return o.filter(a=>t[a.id]!=="known"&&t[a.id]!=="unknown").filter(a=>(r.prereqs[a.id]??[]).every(s=>t[s]==="known")).map(a=>a.id)}function dc(o,t,r,a=.5){var s,c,d;try{const f=1-a,y=o.filter(w=>t[w.id]!=="known"&&t[w.id]!=="unknown");if(y.length===0)return null;const x=y.map(w=>{const S=hp(w.id,t,r),j=yp(w.id,t,r),q=a*S+f*j;return{id:w.id,erv:q||0,ancestorsToReveal:S,descendantsToReveal:j}});return x.sort((w,S)=>S.erv-w.erv),((s=x[0])==null?void 0:s.id)||((c=y[0])==null?void 0:c.id)||null}catch(f){return console.error("pickNextQuestion error:",f),((d=o.filter(x=>t[x.id]!=="known"&&t[x.id]!=="unknown")[0])==null?void 0:d.id)||null}}function hp(o,t,r){const a=new Set,s=[...r.prereqs[o]??[]];let c=0;for(;s.length>0;){const d=s.shift();if(a.has(d))continue;a.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const f=r.prereqs[d]??[];for(const y of f)a.has(y)||s.push(y)}return c}function yp(o,t,r){const a=new Set,s=[...r.dependents[o]??[]];let c=0;for(;s.length>0;){const d=s.shift();if(a.has(d))continue;a.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const f=r.dependents[d]??[];for(const y of f)a.has(y)||s.push(y)}return c}function cb(o,t,r,a=.5){try{const s=o.filter(x=>t[x.id]!=="known"&&t[x.id]!=="unknown");if(s.length===0)return 0;const c=1-a;let d=0;for(const x of s){const g=hp(x.id,t,r),w=yp(x.id,t,r),S=a*g+c*w;d+=S||0}if(!d||d===0)return s.length;const f=s.length,y=f*f/d;return isNaN(y)?s.length:Math.ceil(y)}catch(s){return console.error("estimateRemainingQuestions error:",s),null}}function ub(o,t,r){const a={...o};for(const[s,c]of Object.entries(t)){const d=a[s]??{alpha:1,beta:1};a[s]={alpha:d.alpha+(r?c:0),beta:d.beta+(r?0:c)}}return a}function db(o,t){const r={};for(const a of o){const s=t[a]??{alpha:1,beta:1},c=s.alpha+s.beta,d=s.alpha/c;d>io.deepKnownThreshold&&c>io.deepMinStrength?r[a]="known":d<io.deepUnknownThreshold&&c>io.deepMinStrength?r[a]="unknown":r[a]="uncertain"}return r}function $p(o,t,r){const a=new Set,s=new Set(r.map(d=>d.id)),c=[o];for(;c.length;){const d=c.shift();if(!a.has(d)&&s.has(d)){a.add(d);for(const f of t.prereqs[d]??[])a.has(f)||c.push(f)}}return a}function pb(o,t,r,a,s){var f;const c=o.filter(y=>r[y]==="uncertain");if(c.length===0)return null;const d=c.map(y=>{const x=t[y]??{alpha:1,beta:1},g=x.alpha+x.beta,w=x.alpha/g,S=1-w,j=new Set(o);let q=0;const k=[...a.prereqs[y]??[]],T=new Set;for(;k.length;){const E=k.shift();if(!T.has(E)){T.add(E),j.has(E)&&r[E]==="uncertain"&&q++;for(const G of a.prereqs[E]??[])T.has(G)||k.push(G)}}let A=0;const L=[...a.dependents[y]??[]],H=new Set;for(;L.length;){const E=L.shift();if(!H.has(E)){H.add(E),j.has(E)&&r[E]==="uncertain"&&A++;for(const G of a.dependents[E]??[])H.has(G)||L.push(G)}}const F=w*q+S*A;return{id:y,erv:F,strength:g}});return d.sort((y,x)=>Math.abs(y.erv-x.erv)>.01?x.erv-y.erv:y.strength-x.strength),((f=d[0])==null?void 0:f.id)??c[0]}function mb(o,t,r=0){return!!(o.every(a=>t[a]!=="uncertain")||r>=io.deepMaxQuestions)}function pc(o,t,r=0,a){const s=(a==null?void 0:a.maxQuestions)??io.quickMaxQuestions,c=(a==null?void 0:a.completionRatio)??io.quickCompletionRatio,d=o.length;if(d===0)return!0;const f=o.filter(y=>t[y.id]!=="known"&&t[y.id]!=="unknown").length;return f===0||r>=s||f/d<=c}const Zl={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function fb(o,t,r){const a=r?`${r}_`:"",[s,c]=st(`${a}diagMode`,!1),[d,f]=st(`${a}diagSubMode`,"quick"),[y,x]=st(`${a}belief`,{}),[g,w]=st(`${a}targetNode`,null),[S,j]=st(`${a}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[q,k]=st(`${a}answeredQuestions`,new Set),[T,A]=st(`${a}betaBeliefs`,{}),[L,H]=st(`${a}quizNode`,null),F=D.useMemo(()=>{const R=S.correct+S.incorrect;return R===0?.5:(S.correct+.5)/(R+1)},[S]),E=S.questionsAnswered,G=D.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(t)])].map(Z=>({id:Z})),[o,t]),I=D.useMemo(()=>Object.keys(y).length>0||S.questionsAnswered>0,[y,S]),Q=D.useMemo(()=>I?lb(G,y,o):[],[I,y,o,G]),Y=I?Q:[],te=D.useMemo(()=>s&&d==="quick"?dc(G,y,o,F):null,[s,d,y,o,F,G]),re=D.useMemo(()=>s&&d==="quick"?cb(G,y,o,F):null,[s,d,y,o,F,G]),J=D.useMemo(()=>s&&d==="quick"&&I&&pc(G,y,E),[s,d,I,y,G,E]),ee=D.useMemo(()=>!s||d!=="deepdive"||!g?[]:[...$p(g,o,G)],[s,d,g,o,G]),fe=D.useMemo(()=>d!=="deepdive"?{}:db(ee,T),[d,ee,T]),be=D.useMemo(()=>!s||d!=="deepdive"||ee.length===0?null:pb(ee,T,fe,o),[s,d,ee,T,fe,o,G]),ze=D.useMemo(()=>!s||d!=="deepdive"||ee.length===0?!1:mb(ee,fe,E),[s,d,ee,fe,E]),ie=D.useCallback((R,Z)=>s?d==="deepdive"?ee.includes(R)?(fe[R]!=="uncertain"||H(R),!0):!1:y[R]==="unknown"?!0:Z?(x(_e=>fp(R,_e,o)),H(null),!0):y[R]==="known"?(x(_e=>{const Te={..._e};return delete Te[R],Te}),H(null),!0):(H(R),!0):!1,[s,d,y,o,ee,fe]),X=D.useCallback((R,Z,_e,Te)=>{if(d==="deepdive"){const je=(_e==null?void 0:_e.tests)??{[R]:1};A(xe=>ub(xe,je,Z))}else{const je=(_e==null?void 0:_e.tests)??{[R]:1};x(xe=>Hi(R,Z,je,xe,o))}typeof Te=="number"&&k(je=>new Set([...je,`${R}:${Te}`])),j(je=>({correct:je.correct+(Z?1:0),incorrect:je.incorrect+(Z?0:1),questionsAnswered:je.questionsAnswered+1})),H(null)},[d,o]),$e=D.useCallback(()=>{Nx(),c(!1),f("quick"),x({}),A({}),H(null),w(null),j({correct:0,incorrect:0,questionsAnswered:0}),k(new Set)},[]),ne=D.useCallback(R=>{f("deepdive"),w(R),A({}),x({}),H(null),j({correct:0,incorrect:0,questionsAnswered:0}),k(new Set),c(!0)},[]);return{diagMode:s,setDiagMode:c,mode:d,setMode:f,quizNode:L,setQuizNode:H,questionsAnswered:E,answeredQuestions:q,setAnsweredQuestions:k,getAnsweredIndices:R=>{const Z=[];return q.forEach(_e=>{const[Te,je]=_e.split(":");Te===R&&Z.push(parseInt(je,10))}),Z},handleDiagClick:ie,handleQuizAnswer:X,resetDiagnostic:$e,startDeepDive:ne,targetNode:g,belief:y,setBelief:x,frontier:Q,visibleFrontier:Y,hasStarted:I,nextSuggestedId:te,expectedRemaining:re,pCorrect:F,sessionComplete:J,betaBeliefs:T,subgraphIds:ee,ddClassification:fe,ddNextNodeId:be,ddComplete:ze}}const h1=640;function hb(){const[o,t]=D.useState(()=>typeof window<"u"&&window.innerWidth<h1);return D.useEffect(()=>{const r=window.matchMedia(`(max-width: ${h1-1}px)`),a=s=>t(s.matches);return r.addEventListener("change",a),t(r.matches),()=>r.removeEventListener("change",a)},[]),o}const yb=new Set(["pl","en"]);function y1(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let a="pl",s=r;if(r.length>0&&yb.has(r[0])&&(a=r[0],s=r.slice(1)),s[0]==="node"&&s[1]){const c=decodeURIComponent(s[1]);return s[2]==="resource"&&s[3]!=null?{view:"resource",nodeId:c,resourceIndex:parseInt(s[3],10),lang:a}:{view:"node",nodeId:c,lang:a}}if(s[0]==="diagnostic"){if(s[1]==="deepdive"&&s[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(s[2]),lang:a};if(s[1]==="quick")return{view:"diagnostic",mode:"quick",lang:a}}return{view:"graph",lang:a}}function $b(o){const t=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${t}`;switch(o.view){case"node":return`#/${t}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function gb(o){const t=D.useRef(o);t.current=o;const r=D.useRef(!1),a=D.useCallback(s=>{const c=$b(s);window.location.hash!==c&&(r.current=!0,window.location.hash=c)},[]);return D.useEffect(()=>{const s=()=>{if(r.current){r.current=!1;return}t.current(y1(window.location.hash))};window.addEventListener("hashchange",s);const c=y1(window.location.hash);return Promise.resolve().then(()=>t.current(c)),()=>window.removeEventListener("hashchange",s)},[]),{setRoute:a}}function $1(o){return 6+o.level*2}function xb({edges:o,nodes:t,highlightedIds:r}){const a=D.useMemo(()=>Object.fromEntries(t.map(s=>[s.id,s])),[t]);return m.jsx("g",{children:o.map(([s,c])=>{const d=a[s],f=a[c];if(!d||!f)return null;const y=(r==null?void 0:r.has(s))&&(r==null?void 0:r.has(c)),x=r&&!y,g=f.x-d.x,w=f.y-d.y,S=Math.sqrt(g*g+w*w)||1,j=$1(f)+3,q=f.x-g/S*j,k=f.y-w/S*j,T=$1(d)+2,A=d.x+g/S*T,L=d.y+w/S*T,H=x?"#151b26":y?"#4a9eff":"#334766",F=y?1.8:1,E=x?.15:y?1:.55,G=x?"url(#arrow-dim)":y?"url(#arrow-hi)":"url(#arrow-default)";return m.jsx("line",{x1:A,y1:L,x2:q,y2:k,stroke:H,strokeWidth:F,opacity:E,markerEnd:G},`${s}-${c}`)})})}function bb(o,t){const r=8+o.level*3,a=Math.min(4.8,(t||0)*.6);return r+a}function vb(o){return o<.3?6:o<.5?12:o<.8?18:30}function wb(o){return o<.3?9:o<.6?10:11}function zb({nodes:o,filteredIds:t,highlightedIds:r,selected:a,onSelect:s,onHover:c,lang:d,diagMode:f,belief:y,frontier:x,scale:g,scopeColors:w,edges:S}){const j=y&&Object.keys(y).length>0,q=D.useMemo(()=>{const k={};if(!S)return k;for(const[T,A]of S)k[T]=(k[T]||0)+1,k[A]=(k[A]||0)+1;return k},[S]);return m.jsx("g",{children:o.map(k=>{const T=q[k.id]||0,A=bb(k,T),L=(w==null?void 0:w[k.scope])||"#4a9eff",H=t&&!t.has(k.id),F=r==null?void 0:r.has(k.id),E=a===k.id,G=r&&!F||H,I=d==="pl"?k.labelPl:k.label,Q=vb(g??1),Y=wb(g??1);let te=L,re=G?.15:.9,J=G?.2:.85,ee=null,fe=2;if(j){const ze=y[k.id],ie=x==null?void 0:x.includes(k.id);ze==="known"?(te="#27ae60",ee="#2ecc71",re=H?.1:.85,J=H?.15:.9):ze==="unknown"?(te="#c0392b",re=H?.1:.45,ee="#e74c3c",J=H?.15:.7):ie?(te="#f39c12",ee="#f1c40f",fe=3,re=H?.1:.9,J=H?.15:.9):(re=H?.1:f?.35:.5,J=H?.15:.7)}const be=I.length>Q?I.slice(0,Q-1)+"…":I;return m.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>s(k.id===a?null:k.id),onMouseEnter:()=>c(k.id),onMouseLeave:()=>c(null),children:[(E||ee)&&m.jsx("circle",{cx:k.x,cy:k.y,r:A+(E?5:4),fill:"none",stroke:E?L:ee,strokeWidth:E?2:fe,opacity:E?.5:.9}),m.jsx("circle",{cx:k.x,cy:k.y,r:A,fill:te,fillOpacity:re,stroke:(F||E)&&!j?L:"none",strokeWidth:1.5}),m.jsx("rect",{x:k.x-be.length*Y*.3,y:k.y+A+3,width:be.length*Y*.6,height:Y+4,rx:2,fill:_.bg,fillOpacity:J*.6,style:{pointerEvents:"none"}}),m.jsx("text",{x:k.x,y:k.y+A+Y+2,textAnchor:"middle",fontSize:Y,fill:_.textBody,opacity:J,style:{pointerEvents:"none",userSelect:"none"},children:be})]},k.id)})})}function gp({resource:o,lang:t,onClose:r}){const a=D.useRef(null);if(D.useEffect(()=>{const w=S=>{S.key==="Escape"&&r()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[r]),D.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const s=t==="pl"?o.titlePl:o.titleEn,c=o.type==="interactive",d={interactive:N("resourceInteractive",t),video:N("resourceVideo",t),article:N("resourceArticle",t)}[o.type]??o.type,f={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!c)return window.open(o.url,"_blank","noopener"),r(),null;const x=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,g=x+(x.includes("?")?"&":"?")+"lang="+t;return m.jsxs("div",{ref:a,onClick:w=>{w.target===a.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[m.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),m.jsxs("div",{style:{width:"100%",maxWidth:"calc(100vw - 32px)",maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${f}33`,boxShadow:`0 0 48px ${f}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:`${_.surface}f8`,borderBottom:`1px solid ${f}22`,flexShrink:0,fontFamily:qe},children:[m.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:f,background:`${f}18`,border:`1px solid ${f}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),m.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:_.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s}),m.jsx("button",{onClick:()=>window.open(g,"_blank","noopener"),title:N("openInTab",t),style:g1,children:"↗"}),m.jsx("button",{onClick:r,title:N("closeResource",t),style:{...g1,fontSize:18,lineHeight:1},children:"×"})]}),m.jsx("iframe",{src:g,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:"calc(100vh - 120px)",display:"block"},title:s,loading:"eager"})]})]})}const g1={background:"none",border:`1px solid ${_.border}`,borderRadius:5,color:_.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:qe,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};class et{constructor(t,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=a}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new et(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class lt{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new lt(r,et.range(this,t))}}class pe{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var a="KaTeX parse error: "+t,s,c,d=r&&r.loc;if(d&&d.start<=d.end){var f=d.lexer.input;s=d.start,c=d.end,s===f.length?a+=" at end of input: ":a+=" at position "+(s+1)+": ";var y=f.slice(s,c).replace(/[^]/g,"$&̲"),x;s>15?x="…"+f.slice(s-15,s):x=f.slice(0,s);var g;c+15<f.length?g=f.slice(c,c+15)+"…":g=f.slice(c),a+=x+y+g}var w=new Error(a);return w.name="ParseError",w.__proto__=pe.prototype,w.position=s,s!=null&&c!=null&&(w.length=c-s),w.rawMessage=t,w}}pe.prototype.__proto__=Error.prototype;var _b=/([A-Z])/g,mc=o=>o.replace(_b,"-$1").toLowerCase(),kb={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},jb=/[&><"']/g,In=o=>String(o).replace(jb,t=>kb[t]),Ni=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Ni(o.body[0]):o:o.type==="font"?Ni(o.body):o,Sb=new Set(["mathord","textord","atom"]),tr=o=>Sb.has(Ni(o).type),qb=o=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},vs={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,t)=>(t.push(o),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Tb(o){if(o.default)return o.default;var t=o.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class fc{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in vs)if(vs.hasOwnProperty(r)){var a=vs[r];this[r]=t[r]!==void 0?a.processor?a.processor(t[r]):t[r]:Tb(a)}}reportNonstrict(t,r,a){var s=this.strict;if(typeof s=="function"&&(s=s(t,r,a)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new pe("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),a);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,a){var s=this.strict;if(typeof s=="function")try{s=s(t,r,a)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=qb(t.url);if(r==null)return!1;t.protocol=r}var a=typeof this.trust=="function"?this.trust(t):this.trust;return!!a}}class Mr{constructor(t,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=a}sup(){return Bt[Ab[this.id]]}sub(){return Bt[Mb[this.id]]}fracNum(){return Bt[Pb[this.id]]}fracDen(){return Bt[Cb[this.id]]}cramp(){return Bt[Rb[this.id]]}text(){return Bt[Db[this.id]]}isTight(){return this.size>=2}}var hc=0,_s=1,Eo=2,er=3,Gi=4,xt=5,Bo=6,Gn=7,Bt=[new Mr(hc,0,!1),new Mr(_s,0,!0),new Mr(Eo,1,!1),new Mr(er,1,!0),new Mr(Gi,2,!1),new Mr(xt,2,!0),new Mr(Bo,3,!1),new Mr(Gn,3,!0)],Ab=[Gi,xt,Gi,xt,Bo,Gn,Bo,Gn],Mb=[xt,xt,xt,xt,Gn,Gn,Gn,Gn],Pb=[Eo,er,Gi,xt,Bo,Gn,Bo,Gn],Cb=[er,er,xt,xt,Gn,Gn,Gn,Gn],Rb=[_s,_s,er,er,xt,xt,Gn,Gn],Db=[hc,_s,Eo,er,Eo,er,Eo,er],Le={DISPLAY:Bt[hc],TEXT:Bt[Eo],SCRIPT:Bt[Gi],SCRIPTSCRIPT:Bt[Bo]},Kl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Eb(o){for(var t=0;t<Kl.length;t++)for(var r=Kl[t],a=0;a<r.blocks.length;a++){var s=r.blocks[a];if(o>=s[0]&&o<=s[1])return r.name}return null}var ws=[];Kl.forEach(o=>o.blocks.forEach(t=>ws.push(...t)));function xp(o){for(var t=0;t<ws.length;t+=2)if(o>=ws[t]&&o<=ws[t+1])return!0;return!1}var Do=80,Bb=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Fb=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Ib=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Nb=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},Lb=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},Wb=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},Ob=function(t,r,a){var s=a-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},Hb=function(t,r,a){r=1e3*r;var s="";switch(t){case"sqrtMain":s=Bb(r,Do);break;case"sqrtSize1":s=Fb(r,Do);break;case"sqrtSize2":s=Ib(r,Do);break;case"sqrtSize3":s=Nb(r,Do);break;case"sqrtSize4":s=Lb(r,Do);break;case"sqrtTall":s=Ob(r,Do,a)}return s},Gb=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},x1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Ub=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Vi{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Ft={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},cs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},b1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Vb(o,t){Ft[o]=t}function yc(o,t,r){if(!Ft[t])throw new Error("Font metrics not found for font: "+t+".");var a=o.charCodeAt(0),s=Ft[t][a];if(!s&&o[0]in b1&&(a=b1[o[0]].charCodeAt(0),s=Ft[t][a]),!s&&r==="text"&&xp(a)&&(s=Ft[t][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var Al={};function Zb(o){var t;if(o>=5?t=0:o>=3?t=1:t=2,!Al[t]){var r=Al[t]={cssEmPerMu:cs.quad[t]/18};for(var a in cs)cs.hasOwnProperty(a)&&(r[a]=cs[a][t])}return Al[t]}var Kb=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],v1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],w1=function(t,r){return r.size<2?t:Kb[t-1][r.size-1]};class Jt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Jt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=v1[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a]);return new Jt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:w1(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:v1[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=w1(Jt.BASESIZE,t);return this.size===r&&this.textSize===Jt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Jt.BASESIZE?["sizing","reset-size"+this.size,"size"+Jt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Zb(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Jt.BASESIZE=6;var Ql={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Qb={ex:!0,em:!0,mu:!0},bp=function(t){return typeof t!="string"&&(t=t.unit),t in Ql||t in Qb||t==="ex"},mn=function(t,r){var a;if(t.unit in Ql)a=Ql[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,t.unit==="ex")a=s.fontMetrics().xHeight;else if(t.unit==="em")a=s.fontMetrics().quad;else throw new pe("Invalid unit: '"+t.unit+"'");s!==r&&(a*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*a,r.maxSize)},ge=function(t){return+t.toFixed(4)+"em"},Rr=function(t){return t.filter(r=>r).join(" ")},vp=function(t,r,a){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},wp=function(t){var r=document.createElement(t);r.className=Rr(this.classes);for(var a in this.style)this.style.hasOwnProperty(a)&&(r.style[a]=this.style[a]);for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&r.setAttribute(s,this.attributes[s]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r},Yb=/[\s"'>/=\x00-\x1f]/,zp=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+In(Rr(this.classes))+'"');var a="";for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=mc(s)+":"+this.style[s]+";");a&&(r+=' style="'+In(a)+'"');for(var c in this.attributes)if(this.attributes.hasOwnProperty(c)){if(Yb.test(c))throw new pe("Invalid attribute name '"+c+"'");r+=" "+c+'="'+In(this.attributes[c])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+t+">",r};class Zi{constructor(t,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,vp.call(this,t,a,s),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return wp.call(this,"span")}toMarkup(){return zp.call(this,"span")}}class $c{constructor(t,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,vp.call(this,r,s),this.children=a||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return wp.call(this,"a")}toMarkup(){return zp.call(this,"a")}}class Xb{constructor(t,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=a}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+In(this.src)+'"'+(' alt="'+In(this.alt)+'"'),r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=mc(a)+":"+this.style[a]+";");return r&&(t+=' style="'+In(r)+'"'),t+="'/>",t}}var Jb={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class bt{constructor(t,r,a,s,c,d,f,y){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=a||0,this.italic=s||0,this.skew=c||0,this.width=d||0,this.classes=f||[],this.style=y||{},this.maxFontSize=0;var x=Eb(this.text.charCodeAt(0));x&&this.classes.push(x+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Jb[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=ge(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Rr(this.classes));for(var a in this.style)this.style.hasOwnProperty(a)&&(r=r||document.createElement("span"),r.style[a]=this.style[a]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=In(Rr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+this.italic+"em;");for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=mc(s)+":"+this.style[s]+";");a&&(t=!0,r+=' style="'+In(a)+'"');var c=In(this.text);return t?(r+=">",r+=c,r+="</span>",r):c}}class nr{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+In(this.attributes[r])+'"');t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</svg>",t}}class Dr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",x1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+In(this.alternate)+'"/>':'<path d="'+In(x1[this.pathName])+'"/>'}}class Yl{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+In(this.attributes[r])+'"');return t+="/>",t}}function z1(o){if(o instanceof bt)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function ev(o){if(o instanceof Zi)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var nv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},tv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},nn={math:{},text:{}};function p(o,t,r,a,s,c){nn[o][s]={font:t,group:r,replace:a},c&&a&&(nn[o][a]=nn[o][s])}var $="math",le="text",b="main",P="ams",ln="accent-token",ke="bin",Un="close",Lo="inner",Ee="mathord",bn="op-token",ct="open",Ts="punct",C="rel",rr="spacing",W="textord";p($,b,C,"≡","\\equiv",!0);p($,b,C,"≺","\\prec",!0);p($,b,C,"≻","\\succ",!0);p($,b,C,"∼","\\sim",!0);p($,b,C,"⊥","\\perp");p($,b,C,"⪯","\\preceq",!0);p($,b,C,"⪰","\\succeq",!0);p($,b,C,"≃","\\simeq",!0);p($,b,C,"∣","\\mid",!0);p($,b,C,"≪","\\ll",!0);p($,b,C,"≫","\\gg",!0);p($,b,C,"≍","\\asymp",!0);p($,b,C,"∥","\\parallel");p($,b,C,"⋈","\\bowtie",!0);p($,b,C,"⌣","\\smile",!0);p($,b,C,"⊑","\\sqsubseteq",!0);p($,b,C,"⊒","\\sqsupseteq",!0);p($,b,C,"≐","\\doteq",!0);p($,b,C,"⌢","\\frown",!0);p($,b,C,"∋","\\ni",!0);p($,b,C,"∝","\\propto",!0);p($,b,C,"⊢","\\vdash",!0);p($,b,C,"⊣","\\dashv",!0);p($,b,C,"∋","\\owns");p($,b,Ts,".","\\ldotp");p($,b,Ts,"⋅","\\cdotp");p($,b,W,"#","\\#");p(le,b,W,"#","\\#");p($,b,W,"&","\\&");p(le,b,W,"&","\\&");p($,b,W,"ℵ","\\aleph",!0);p($,b,W,"∀","\\forall",!0);p($,b,W,"ℏ","\\hbar",!0);p($,b,W,"∃","\\exists",!0);p($,b,W,"∇","\\nabla",!0);p($,b,W,"♭","\\flat",!0);p($,b,W,"ℓ","\\ell",!0);p($,b,W,"♮","\\natural",!0);p($,b,W,"♣","\\clubsuit",!0);p($,b,W,"℘","\\wp",!0);p($,b,W,"♯","\\sharp",!0);p($,b,W,"♢","\\diamondsuit",!0);p($,b,W,"ℜ","\\Re",!0);p($,b,W,"♡","\\heartsuit",!0);p($,b,W,"ℑ","\\Im",!0);p($,b,W,"♠","\\spadesuit",!0);p($,b,W,"§","\\S",!0);p(le,b,W,"§","\\S");p($,b,W,"¶","\\P",!0);p(le,b,W,"¶","\\P");p($,b,W,"†","\\dag");p(le,b,W,"†","\\dag");p(le,b,W,"†","\\textdagger");p($,b,W,"‡","\\ddag");p(le,b,W,"‡","\\ddag");p(le,b,W,"‡","\\textdaggerdbl");p($,b,Un,"⎱","\\rmoustache",!0);p($,b,ct,"⎰","\\lmoustache",!0);p($,b,Un,"⟯","\\rgroup",!0);p($,b,ct,"⟮","\\lgroup",!0);p($,b,ke,"∓","\\mp",!0);p($,b,ke,"⊖","\\ominus",!0);p($,b,ke,"⊎","\\uplus",!0);p($,b,ke,"⊓","\\sqcap",!0);p($,b,ke,"∗","\\ast");p($,b,ke,"⊔","\\sqcup",!0);p($,b,ke,"◯","\\bigcirc",!0);p($,b,ke,"∙","\\bullet",!0);p($,b,ke,"‡","\\ddagger");p($,b,ke,"≀","\\wr",!0);p($,b,ke,"⨿","\\amalg");p($,b,ke,"&","\\And");p($,b,C,"⟵","\\longleftarrow",!0);p($,b,C,"⇐","\\Leftarrow",!0);p($,b,C,"⟸","\\Longleftarrow",!0);p($,b,C,"⟶","\\longrightarrow",!0);p($,b,C,"⇒","\\Rightarrow",!0);p($,b,C,"⟹","\\Longrightarrow",!0);p($,b,C,"↔","\\leftrightarrow",!0);p($,b,C,"⟷","\\longleftrightarrow",!0);p($,b,C,"⇔","\\Leftrightarrow",!0);p($,b,C,"⟺","\\Longleftrightarrow",!0);p($,b,C,"↦","\\mapsto",!0);p($,b,C,"⟼","\\longmapsto",!0);p($,b,C,"↗","\\nearrow",!0);p($,b,C,"↩","\\hookleftarrow",!0);p($,b,C,"↪","\\hookrightarrow",!0);p($,b,C,"↘","\\searrow",!0);p($,b,C,"↼","\\leftharpoonup",!0);p($,b,C,"⇀","\\rightharpoonup",!0);p($,b,C,"↙","\\swarrow",!0);p($,b,C,"↽","\\leftharpoondown",!0);p($,b,C,"⇁","\\rightharpoondown",!0);p($,b,C,"↖","\\nwarrow",!0);p($,b,C,"⇌","\\rightleftharpoons",!0);p($,P,C,"≮","\\nless",!0);p($,P,C,"","\\@nleqslant");p($,P,C,"","\\@nleqq");p($,P,C,"⪇","\\lneq",!0);p($,P,C,"≨","\\lneqq",!0);p($,P,C,"","\\@lvertneqq");p($,P,C,"⋦","\\lnsim",!0);p($,P,C,"⪉","\\lnapprox",!0);p($,P,C,"⊀","\\nprec",!0);p($,P,C,"⋠","\\npreceq",!0);p($,P,C,"⋨","\\precnsim",!0);p($,P,C,"⪹","\\precnapprox",!0);p($,P,C,"≁","\\nsim",!0);p($,P,C,"","\\@nshortmid");p($,P,C,"∤","\\nmid",!0);p($,P,C,"⊬","\\nvdash",!0);p($,P,C,"⊭","\\nvDash",!0);p($,P,C,"⋪","\\ntriangleleft");p($,P,C,"⋬","\\ntrianglelefteq",!0);p($,P,C,"⊊","\\subsetneq",!0);p($,P,C,"","\\@varsubsetneq");p($,P,C,"⫋","\\subsetneqq",!0);p($,P,C,"","\\@varsubsetneqq");p($,P,C,"≯","\\ngtr",!0);p($,P,C,"","\\@ngeqslant");p($,P,C,"","\\@ngeqq");p($,P,C,"⪈","\\gneq",!0);p($,P,C,"≩","\\gneqq",!0);p($,P,C,"","\\@gvertneqq");p($,P,C,"⋧","\\gnsim",!0);p($,P,C,"⪊","\\gnapprox",!0);p($,P,C,"⊁","\\nsucc",!0);p($,P,C,"⋡","\\nsucceq",!0);p($,P,C,"⋩","\\succnsim",!0);p($,P,C,"⪺","\\succnapprox",!0);p($,P,C,"≆","\\ncong",!0);p($,P,C,"","\\@nshortparallel");p($,P,C,"∦","\\nparallel",!0);p($,P,C,"⊯","\\nVDash",!0);p($,P,C,"⋫","\\ntriangleright");p($,P,C,"⋭","\\ntrianglerighteq",!0);p($,P,C,"","\\@nsupseteqq");p($,P,C,"⊋","\\supsetneq",!0);p($,P,C,"","\\@varsupsetneq");p($,P,C,"⫌","\\supsetneqq",!0);p($,P,C,"","\\@varsupsetneqq");p($,P,C,"⊮","\\nVdash",!0);p($,P,C,"⪵","\\precneqq",!0);p($,P,C,"⪶","\\succneqq",!0);p($,P,C,"","\\@nsubseteqq");p($,P,ke,"⊴","\\unlhd");p($,P,ke,"⊵","\\unrhd");p($,P,C,"↚","\\nleftarrow",!0);p($,P,C,"↛","\\nrightarrow",!0);p($,P,C,"⇍","\\nLeftarrow",!0);p($,P,C,"⇏","\\nRightarrow",!0);p($,P,C,"↮","\\nleftrightarrow",!0);p($,P,C,"⇎","\\nLeftrightarrow",!0);p($,P,C,"△","\\vartriangle");p($,P,W,"ℏ","\\hslash");p($,P,W,"▽","\\triangledown");p($,P,W,"◊","\\lozenge");p($,P,W,"Ⓢ","\\circledS");p($,P,W,"®","\\circledR");p(le,P,W,"®","\\circledR");p($,P,W,"∡","\\measuredangle",!0);p($,P,W,"∄","\\nexists");p($,P,W,"℧","\\mho");p($,P,W,"Ⅎ","\\Finv",!0);p($,P,W,"⅁","\\Game",!0);p($,P,W,"‵","\\backprime");p($,P,W,"▲","\\blacktriangle");p($,P,W,"▼","\\blacktriangledown");p($,P,W,"■","\\blacksquare");p($,P,W,"⧫","\\blacklozenge");p($,P,W,"★","\\bigstar");p($,P,W,"∢","\\sphericalangle",!0);p($,P,W,"∁","\\complement",!0);p($,P,W,"ð","\\eth",!0);p(le,b,W,"ð","ð");p($,P,W,"╱","\\diagup");p($,P,W,"╲","\\diagdown");p($,P,W,"□","\\square");p($,P,W,"□","\\Box");p($,P,W,"◊","\\Diamond");p($,P,W,"¥","\\yen",!0);p(le,P,W,"¥","\\yen",!0);p($,P,W,"✓","\\checkmark",!0);p(le,P,W,"✓","\\checkmark");p($,P,W,"ℶ","\\beth",!0);p($,P,W,"ℸ","\\daleth",!0);p($,P,W,"ℷ","\\gimel",!0);p($,P,W,"ϝ","\\digamma",!0);p($,P,W,"ϰ","\\varkappa");p($,P,ct,"┌","\\@ulcorner",!0);p($,P,Un,"┐","\\@urcorner",!0);p($,P,ct,"└","\\@llcorner",!0);p($,P,Un,"┘","\\@lrcorner",!0);p($,P,C,"≦","\\leqq",!0);p($,P,C,"⩽","\\leqslant",!0);p($,P,C,"⪕","\\eqslantless",!0);p($,P,C,"≲","\\lesssim",!0);p($,P,C,"⪅","\\lessapprox",!0);p($,P,C,"≊","\\approxeq",!0);p($,P,ke,"⋖","\\lessdot");p($,P,C,"⋘","\\lll",!0);p($,P,C,"≶","\\lessgtr",!0);p($,P,C,"⋚","\\lesseqgtr",!0);p($,P,C,"⪋","\\lesseqqgtr",!0);p($,P,C,"≑","\\doteqdot");p($,P,C,"≓","\\risingdotseq",!0);p($,P,C,"≒","\\fallingdotseq",!0);p($,P,C,"∽","\\backsim",!0);p($,P,C,"⋍","\\backsimeq",!0);p($,P,C,"⫅","\\subseteqq",!0);p($,P,C,"⋐","\\Subset",!0);p($,P,C,"⊏","\\sqsubset",!0);p($,P,C,"≼","\\preccurlyeq",!0);p($,P,C,"⋞","\\curlyeqprec",!0);p($,P,C,"≾","\\precsim",!0);p($,P,C,"⪷","\\precapprox",!0);p($,P,C,"⊲","\\vartriangleleft");p($,P,C,"⊴","\\trianglelefteq");p($,P,C,"⊨","\\vDash",!0);p($,P,C,"⊪","\\Vvdash",!0);p($,P,C,"⌣","\\smallsmile");p($,P,C,"⌢","\\smallfrown");p($,P,C,"≏","\\bumpeq",!0);p($,P,C,"≎","\\Bumpeq",!0);p($,P,C,"≧","\\geqq",!0);p($,P,C,"⩾","\\geqslant",!0);p($,P,C,"⪖","\\eqslantgtr",!0);p($,P,C,"≳","\\gtrsim",!0);p($,P,C,"⪆","\\gtrapprox",!0);p($,P,ke,"⋗","\\gtrdot");p($,P,C,"⋙","\\ggg",!0);p($,P,C,"≷","\\gtrless",!0);p($,P,C,"⋛","\\gtreqless",!0);p($,P,C,"⪌","\\gtreqqless",!0);p($,P,C,"≖","\\eqcirc",!0);p($,P,C,"≗","\\circeq",!0);p($,P,C,"≜","\\triangleq",!0);p($,P,C,"∼","\\thicksim");p($,P,C,"≈","\\thickapprox");p($,P,C,"⫆","\\supseteqq",!0);p($,P,C,"⋑","\\Supset",!0);p($,P,C,"⊐","\\sqsupset",!0);p($,P,C,"≽","\\succcurlyeq",!0);p($,P,C,"⋟","\\curlyeqsucc",!0);p($,P,C,"≿","\\succsim",!0);p($,P,C,"⪸","\\succapprox",!0);p($,P,C,"⊳","\\vartriangleright");p($,P,C,"⊵","\\trianglerighteq");p($,P,C,"⊩","\\Vdash",!0);p($,P,C,"∣","\\shortmid");p($,P,C,"∥","\\shortparallel");p($,P,C,"≬","\\between",!0);p($,P,C,"⋔","\\pitchfork",!0);p($,P,C,"∝","\\varpropto");p($,P,C,"◀","\\blacktriangleleft");p($,P,C,"∴","\\therefore",!0);p($,P,C,"∍","\\backepsilon");p($,P,C,"▶","\\blacktriangleright");p($,P,C,"∵","\\because",!0);p($,P,C,"⋘","\\llless");p($,P,C,"⋙","\\gggtr");p($,P,ke,"⊲","\\lhd");p($,P,ke,"⊳","\\rhd");p($,P,C,"≂","\\eqsim",!0);p($,b,C,"⋈","\\Join");p($,P,C,"≑","\\Doteq",!0);p($,P,ke,"∔","\\dotplus",!0);p($,P,ke,"∖","\\smallsetminus");p($,P,ke,"⋒","\\Cap",!0);p($,P,ke,"⋓","\\Cup",!0);p($,P,ke,"⩞","\\doublebarwedge",!0);p($,P,ke,"⊟","\\boxminus",!0);p($,P,ke,"⊞","\\boxplus",!0);p($,P,ke,"⋇","\\divideontimes",!0);p($,P,ke,"⋉","\\ltimes",!0);p($,P,ke,"⋊","\\rtimes",!0);p($,P,ke,"⋋","\\leftthreetimes",!0);p($,P,ke,"⋌","\\rightthreetimes",!0);p($,P,ke,"⋏","\\curlywedge",!0);p($,P,ke,"⋎","\\curlyvee",!0);p($,P,ke,"⊝","\\circleddash",!0);p($,P,ke,"⊛","\\circledast",!0);p($,P,ke,"⋅","\\centerdot");p($,P,ke,"⊺","\\intercal",!0);p($,P,ke,"⋒","\\doublecap");p($,P,ke,"⋓","\\doublecup");p($,P,ke,"⊠","\\boxtimes",!0);p($,P,C,"⇢","\\dashrightarrow",!0);p($,P,C,"⇠","\\dashleftarrow",!0);p($,P,C,"⇇","\\leftleftarrows",!0);p($,P,C,"⇆","\\leftrightarrows",!0);p($,P,C,"⇚","\\Lleftarrow",!0);p($,P,C,"↞","\\twoheadleftarrow",!0);p($,P,C,"↢","\\leftarrowtail",!0);p($,P,C,"↫","\\looparrowleft",!0);p($,P,C,"⇋","\\leftrightharpoons",!0);p($,P,C,"↶","\\curvearrowleft",!0);p($,P,C,"↺","\\circlearrowleft",!0);p($,P,C,"↰","\\Lsh",!0);p($,P,C,"⇈","\\upuparrows",!0);p($,P,C,"↿","\\upharpoonleft",!0);p($,P,C,"⇃","\\downharpoonleft",!0);p($,b,C,"⊶","\\origof",!0);p($,b,C,"⊷","\\imageof",!0);p($,P,C,"⊸","\\multimap",!0);p($,P,C,"↭","\\leftrightsquigarrow",!0);p($,P,C,"⇉","\\rightrightarrows",!0);p($,P,C,"⇄","\\rightleftarrows",!0);p($,P,C,"↠","\\twoheadrightarrow",!0);p($,P,C,"↣","\\rightarrowtail",!0);p($,P,C,"↬","\\looparrowright",!0);p($,P,C,"↷","\\curvearrowright",!0);p($,P,C,"↻","\\circlearrowright",!0);p($,P,C,"↱","\\Rsh",!0);p($,P,C,"⇊","\\downdownarrows",!0);p($,P,C,"↾","\\upharpoonright",!0);p($,P,C,"⇂","\\downharpoonright",!0);p($,P,C,"⇝","\\rightsquigarrow",!0);p($,P,C,"⇝","\\leadsto");p($,P,C,"⇛","\\Rrightarrow",!0);p($,P,C,"↾","\\restriction");p($,b,W,"‘","`");p($,b,W,"$","\\$");p(le,b,W,"$","\\$");p(le,b,W,"$","\\textdollar");p($,b,W,"%","\\%");p(le,b,W,"%","\\%");p($,b,W,"_","\\_");p(le,b,W,"_","\\_");p(le,b,W,"_","\\textunderscore");p($,b,W,"∠","\\angle",!0);p($,b,W,"∞","\\infty",!0);p($,b,W,"′","\\prime");p($,b,W,"△","\\triangle");p($,b,W,"Γ","\\Gamma",!0);p($,b,W,"Δ","\\Delta",!0);p($,b,W,"Θ","\\Theta",!0);p($,b,W,"Λ","\\Lambda",!0);p($,b,W,"Ξ","\\Xi",!0);p($,b,W,"Π","\\Pi",!0);p($,b,W,"Σ","\\Sigma",!0);p($,b,W,"Υ","\\Upsilon",!0);p($,b,W,"Φ","\\Phi",!0);p($,b,W,"Ψ","\\Psi",!0);p($,b,W,"Ω","\\Omega",!0);p($,b,W,"A","Α");p($,b,W,"B","Β");p($,b,W,"E","Ε");p($,b,W,"Z","Ζ");p($,b,W,"H","Η");p($,b,W,"I","Ι");p($,b,W,"K","Κ");p($,b,W,"M","Μ");p($,b,W,"N","Ν");p($,b,W,"O","Ο");p($,b,W,"P","Ρ");p($,b,W,"T","Τ");p($,b,W,"X","Χ");p($,b,W,"¬","\\neg",!0);p($,b,W,"¬","\\lnot");p($,b,W,"⊤","\\top");p($,b,W,"⊥","\\bot");p($,b,W,"∅","\\emptyset");p($,P,W,"∅","\\varnothing");p($,b,Ee,"α","\\alpha",!0);p($,b,Ee,"β","\\beta",!0);p($,b,Ee,"γ","\\gamma",!0);p($,b,Ee,"δ","\\delta",!0);p($,b,Ee,"ϵ","\\epsilon",!0);p($,b,Ee,"ζ","\\zeta",!0);p($,b,Ee,"η","\\eta",!0);p($,b,Ee,"θ","\\theta",!0);p($,b,Ee,"ι","\\iota",!0);p($,b,Ee,"κ","\\kappa",!0);p($,b,Ee,"λ","\\lambda",!0);p($,b,Ee,"μ","\\mu",!0);p($,b,Ee,"ν","\\nu",!0);p($,b,Ee,"ξ","\\xi",!0);p($,b,Ee,"ο","\\omicron",!0);p($,b,Ee,"π","\\pi",!0);p($,b,Ee,"ρ","\\rho",!0);p($,b,Ee,"σ","\\sigma",!0);p($,b,Ee,"τ","\\tau",!0);p($,b,Ee,"υ","\\upsilon",!0);p($,b,Ee,"ϕ","\\phi",!0);p($,b,Ee,"χ","\\chi",!0);p($,b,Ee,"ψ","\\psi",!0);p($,b,Ee,"ω","\\omega",!0);p($,b,Ee,"ε","\\varepsilon",!0);p($,b,Ee,"ϑ","\\vartheta",!0);p($,b,Ee,"ϖ","\\varpi",!0);p($,b,Ee,"ϱ","\\varrho",!0);p($,b,Ee,"ς","\\varsigma",!0);p($,b,Ee,"φ","\\varphi",!0);p($,b,ke,"∗","*",!0);p($,b,ke,"+","+");p($,b,ke,"−","-",!0);p($,b,ke,"⋅","\\cdot",!0);p($,b,ke,"∘","\\circ",!0);p($,b,ke,"÷","\\div",!0);p($,b,ke,"±","\\pm",!0);p($,b,ke,"×","\\times",!0);p($,b,ke,"∩","\\cap",!0);p($,b,ke,"∪","\\cup",!0);p($,b,ke,"∖","\\setminus",!0);p($,b,ke,"∧","\\land");p($,b,ke,"∨","\\lor");p($,b,ke,"∧","\\wedge",!0);p($,b,ke,"∨","\\vee",!0);p($,b,W,"√","\\surd");p($,b,ct,"⟨","\\langle",!0);p($,b,ct,"∣","\\lvert");p($,b,ct,"∥","\\lVert");p($,b,Un,"?","?");p($,b,Un,"!","!");p($,b,Un,"⟩","\\rangle",!0);p($,b,Un,"∣","\\rvert");p($,b,Un,"∥","\\rVert");p($,b,C,"=","=");p($,b,C,":",":");p($,b,C,"≈","\\approx",!0);p($,b,C,"≅","\\cong",!0);p($,b,C,"≥","\\ge");p($,b,C,"≥","\\geq",!0);p($,b,C,"←","\\gets");p($,b,C,">","\\gt",!0);p($,b,C,"∈","\\in",!0);p($,b,C,"","\\@not");p($,b,C,"⊂","\\subset",!0);p($,b,C,"⊃","\\supset",!0);p($,b,C,"⊆","\\subseteq",!0);p($,b,C,"⊇","\\supseteq",!0);p($,P,C,"⊈","\\nsubseteq",!0);p($,P,C,"⊉","\\nsupseteq",!0);p($,b,C,"⊨","\\models");p($,b,C,"←","\\leftarrow",!0);p($,b,C,"≤","\\le");p($,b,C,"≤","\\leq",!0);p($,b,C,"<","\\lt",!0);p($,b,C,"→","\\rightarrow",!0);p($,b,C,"→","\\to");p($,P,C,"≱","\\ngeq",!0);p($,P,C,"≰","\\nleq",!0);p($,b,rr," ","\\ ");p($,b,rr," ","\\space");p($,b,rr," ","\\nobreakspace");p(le,b,rr," ","\\ ");p(le,b,rr," "," ");p(le,b,rr," ","\\space");p(le,b,rr," ","\\nobreakspace");p($,b,rr,null,"\\nobreak");p($,b,rr,null,"\\allowbreak");p($,b,Ts,",",",");p($,b,Ts,";",";");p($,P,ke,"⊼","\\barwedge",!0);p($,P,ke,"⊻","\\veebar",!0);p($,b,ke,"⊙","\\odot",!0);p($,b,ke,"⊕","\\oplus",!0);p($,b,ke,"⊗","\\otimes",!0);p($,b,W,"∂","\\partial",!0);p($,b,ke,"⊘","\\oslash",!0);p($,P,ke,"⊚","\\circledcirc",!0);p($,P,ke,"⊡","\\boxdot",!0);p($,b,ke,"△","\\bigtriangleup");p($,b,ke,"▽","\\bigtriangledown");p($,b,ke,"†","\\dagger");p($,b,ke,"⋄","\\diamond");p($,b,ke,"⋆","\\star");p($,b,ke,"◃","\\triangleleft");p($,b,ke,"▹","\\triangleright");p($,b,ct,"{","\\{");p(le,b,W,"{","\\{");p(le,b,W,"{","\\textbraceleft");p($,b,Un,"}","\\}");p(le,b,W,"}","\\}");p(le,b,W,"}","\\textbraceright");p($,b,ct,"{","\\lbrace");p($,b,Un,"}","\\rbrace");p($,b,ct,"[","\\lbrack",!0);p(le,b,W,"[","\\lbrack",!0);p($,b,Un,"]","\\rbrack",!0);p(le,b,W,"]","\\rbrack",!0);p($,b,ct,"(","\\lparen",!0);p($,b,Un,")","\\rparen",!0);p(le,b,W,"<","\\textless",!0);p(le,b,W,">","\\textgreater",!0);p($,b,ct,"⌊","\\lfloor",!0);p($,b,Un,"⌋","\\rfloor",!0);p($,b,ct,"⌈","\\lceil",!0);p($,b,Un,"⌉","\\rceil",!0);p($,b,W,"\\","\\backslash");p($,b,W,"∣","|");p($,b,W,"∣","\\vert");p(le,b,W,"|","\\textbar",!0);p($,b,W,"∥","\\|");p($,b,W,"∥","\\Vert");p(le,b,W,"∥","\\textbardbl");p(le,b,W,"~","\\textasciitilde");p(le,b,W,"\\","\\textbackslash");p(le,b,W,"^","\\textasciicircum");p($,b,C,"↑","\\uparrow",!0);p($,b,C,"⇑","\\Uparrow",!0);p($,b,C,"↓","\\downarrow",!0);p($,b,C,"⇓","\\Downarrow",!0);p($,b,C,"↕","\\updownarrow",!0);p($,b,C,"⇕","\\Updownarrow",!0);p($,b,bn,"∐","\\coprod");p($,b,bn,"⋁","\\bigvee");p($,b,bn,"⋀","\\bigwedge");p($,b,bn,"⨄","\\biguplus");p($,b,bn,"⋂","\\bigcap");p($,b,bn,"⋃","\\bigcup");p($,b,bn,"∫","\\int");p($,b,bn,"∫","\\intop");p($,b,bn,"∬","\\iint");p($,b,bn,"∭","\\iiint");p($,b,bn,"∏","\\prod");p($,b,bn,"∑","\\sum");p($,b,bn,"⨂","\\bigotimes");p($,b,bn,"⨁","\\bigoplus");p($,b,bn,"⨀","\\bigodot");p($,b,bn,"∮","\\oint");p($,b,bn,"∯","\\oiint");p($,b,bn,"∰","\\oiiint");p($,b,bn,"⨆","\\bigsqcup");p($,b,bn,"∫","\\smallint");p(le,b,Lo,"…","\\textellipsis");p($,b,Lo,"…","\\mathellipsis");p(le,b,Lo,"…","\\ldots",!0);p($,b,Lo,"…","\\ldots",!0);p($,b,Lo,"⋯","\\@cdots",!0);p($,b,Lo,"⋱","\\ddots",!0);p($,b,W,"⋮","\\varvdots");p(le,b,W,"⋮","\\varvdots");p($,b,ln,"ˊ","\\acute");p($,b,ln,"ˋ","\\grave");p($,b,ln,"¨","\\ddot");p($,b,ln,"~","\\tilde");p($,b,ln,"ˉ","\\bar");p($,b,ln,"˘","\\breve");p($,b,ln,"ˇ","\\check");p($,b,ln,"^","\\hat");p($,b,ln,"⃗","\\vec");p($,b,ln,"˙","\\dot");p($,b,ln,"˚","\\mathring");p($,b,Ee,"","\\@imath");p($,b,Ee,"","\\@jmath");p($,b,W,"ı","ı");p($,b,W,"ȷ","ȷ");p(le,b,W,"ı","\\i",!0);p(le,b,W,"ȷ","\\j",!0);p(le,b,W,"ß","\\ss",!0);p(le,b,W,"æ","\\ae",!0);p(le,b,W,"œ","\\oe",!0);p(le,b,W,"ø","\\o",!0);p(le,b,W,"Æ","\\AE",!0);p(le,b,W,"Œ","\\OE",!0);p(le,b,W,"Ø","\\O",!0);p(le,b,ln,"ˊ","\\'");p(le,b,ln,"ˋ","\\`");p(le,b,ln,"ˆ","\\^");p(le,b,ln,"˜","\\~");p(le,b,ln,"ˉ","\\=");p(le,b,ln,"˘","\\u");p(le,b,ln,"˙","\\.");p(le,b,ln,"¸","\\c");p(le,b,ln,"˚","\\r");p(le,b,ln,"ˇ","\\v");p(le,b,ln,"¨",'\\"');p(le,b,ln,"˝","\\H");p(le,b,ln,"◯","\\textcircled");var _p={"--":!0,"---":!0,"``":!0,"''":!0};p(le,b,W,"–","--",!0);p(le,b,W,"–","\\textendash");p(le,b,W,"—","---",!0);p(le,b,W,"—","\\textemdash");p(le,b,W,"‘","`",!0);p(le,b,W,"‘","\\textquoteleft");p(le,b,W,"’","'",!0);p(le,b,W,"’","\\textquoteright");p(le,b,W,"“","``",!0);p(le,b,W,"“","\\textquotedblleft");p(le,b,W,"”","''",!0);p(le,b,W,"”","\\textquotedblright");p($,b,W,"°","\\degree",!0);p(le,b,W,"°","\\degree");p(le,b,W,"°","\\textdegree",!0);p($,b,W,"£","\\pounds");p($,b,W,"£","\\mathsterling",!0);p(le,b,W,"£","\\pounds");p(le,b,W,"£","\\textsterling",!0);p($,P,W,"✠","\\maltese");p(le,P,W,"✠","\\maltese");var _1='0123456789/@."';for(var Ml=0;Ml<_1.length;Ml++){var k1=_1.charAt(Ml);p($,b,W,k1,k1)}var j1='0123456789!@*()-=+";:?/.,';for(var Pl=0;Pl<j1.length;Pl++){var S1=j1.charAt(Pl);p(le,b,W,S1,S1)}var ks="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Cl=0;Cl<ks.length;Cl++){var us=ks.charAt(Cl);p($,b,Ee,us,us),p(le,b,W,us,us)}p($,P,W,"C","ℂ");p(le,P,W,"C","ℂ");p($,P,W,"H","ℍ");p(le,P,W,"H","ℍ");p($,P,W,"N","ℕ");p(le,P,W,"N","ℕ");p($,P,W,"P","ℙ");p(le,P,W,"P","ℙ");p($,P,W,"Q","ℚ");p(le,P,W,"Q","ℚ");p($,P,W,"R","ℝ");p(le,P,W,"R","ℝ");p($,P,W,"Z","ℤ");p(le,P,W,"Z","ℤ");p($,b,Ee,"h","ℎ");p(le,b,Ee,"h","ℎ");var Fe="";for(var On=0;On<ks.length;On++){var hn=ks.charAt(On);Fe=String.fromCharCode(55349,56320+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56372+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56424+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56580+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56684+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56736+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56788+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56840+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56944+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),On<26&&(Fe=String.fromCharCode(55349,56632+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe),Fe=String.fromCharCode(55349,56476+On),p($,b,Ee,hn,Fe),p(le,b,W,hn,Fe))}Fe="𝕜";p($,b,Ee,"k",Fe);p(le,b,W,"k",Fe);for(var ro=0;ro<10;ro++){var Pr=ro.toString();Fe=String.fromCharCode(55349,57294+ro),p($,b,Ee,Pr,Fe),p(le,b,W,Pr,Fe),Fe=String.fromCharCode(55349,57314+ro),p($,b,Ee,Pr,Fe),p(le,b,W,Pr,Fe),Fe=String.fromCharCode(55349,57324+ro),p($,b,Ee,Pr,Fe),p(le,b,W,Pr,Fe),Fe=String.fromCharCode(55349,57334+ro),p($,b,Ee,Pr,Fe),p(le,b,W,Pr,Fe)}var Xl="ÐÞþ";for(var Rl=0;Rl<Xl.length;Rl++){var ds=Xl.charAt(Rl);p($,b,Ee,ds,ds),p(le,b,W,ds,ds)}var ps=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],q1=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],rv=function(t,r){var a=t.charCodeAt(0),s=t.charCodeAt(1),c=(a-55296)*1024+(s-56320)+65536,d=r==="math"?0:1;if(119808<=c&&c<120484){var f=Math.floor((c-119808)/26);return[ps[f][2],ps[f][d]]}else if(120782<=c&&c<=120831){var y=Math.floor((c-120782)/10);return[q1[y][2],q1[y][d]]}else{if(c===120485||c===120486)return[ps[0][2],ps[0][d]];if(120486<c&&c<120782)return["",""];throw new pe("Unsupported character: "+t)}},As=function(t,r,a){return nn[a][t]&&nn[a][t].replace&&(t=nn[a][t].replace),{value:t,metrics:yc(t,r,a)}},Hn=function(t,r,a,s,c){var d=As(t,r,a),f=d.metrics;t=d.value;var y;if(f){var x=f.italic;(a==="text"||s&&s.font==="mathit")&&(x=0),y=new bt(t,f.height,f.depth,x,f.skew,f.width,c)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+a+"'")),y=new bt(t,0,0,0,0,0,c);if(s){y.maxFontSize=s.sizeMultiplier,s.style.isTight()&&y.classes.push("mtight");var g=s.getColor();g&&(y.style.color=g)}return y},gc=function(t,r,a,s){return s===void 0&&(s=[]),a.font==="boldsymbol"&&As(t,"Main-Bold",r).metrics?Hn(t,"Main-Bold",r,a,s.concat(["mathbf"])):t==="\\"||nn[r][t].font==="main"?Hn(t,"Main-Regular",r,a,s):Hn(t,"AMS-Regular",r,a,s.concat(["amsrm"]))},ov=function(t,r,a,s,c){return c!=="textord"&&As(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ms=function(t,r,a){var s=t.mode,c=t.text,d=["mord"],f=s==="math"||s==="text"&&r.font,y=f?r.font:r.fontFamily,x="",g="";if(c.charCodeAt(0)===55349&&([x,g]=rv(c,s)),x.length>0)return Hn(c,x,s,r,d.concat(g));if(y){var w,S;if(y==="boldsymbol"){var j=ov(c,s,r,d,a);w=j.fontName,S=[j.fontClass]}else f?(w=Jl[y].fontName,S=[y]):(w=ms(y,r.fontWeight,r.fontShape),S=[y,r.fontWeight,r.fontShape]);if(As(c,w,s).metrics)return Hn(c,w,s,r,d.concat(S));if(_p.hasOwnProperty(c)&&w.slice(0,10)==="Typewriter"){for(var q=[],k=0;k<c.length;k++)q.push(Hn(c[k],w,s,r,d.concat(S)));return or(q)}}if(a==="mathord")return Hn(c,"Math-Italic",s,r,d.concat(["mathnormal"]));if(a==="textord"){var T=nn[s][c]&&nn[s][c].font;if(T==="ams"){var A=ms("amsrm",r.fontWeight,r.fontShape);return Hn(c,A,s,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(T==="main"||!T){var L=ms("textrm",r.fontWeight,r.fontShape);return Hn(c,L,s,r,d.concat(r.fontWeight,r.fontShape))}else{var H=ms(T,r.fontWeight,r.fontShape);return Hn(c,H,s,r,d.concat(H,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+a+" in makeOrd")},iv=(o,t)=>{if(Rr(o.classes)!==Rr(t.classes)||o.skew!==t.skew||o.maxFontSize!==t.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a in o.style)if(o.style.hasOwnProperty(a)&&o.style[a]!==t.style[a])return!1;for(var s in t.style)if(t.style.hasOwnProperty(s)&&o.style[s]!==t.style[s])return!1;return!0},kp=o=>{for(var t=0;t<o.length-1;t++){var r=o[t],a=o[t+1];r instanceof bt&&a instanceof bt&&iv(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,o.splice(t+1,1),t--)}return o},xc=function(t){for(var r=0,a=0,s=0,c=0;c<t.children.length;c++){var d=t.children[c];d.height>r&&(r=d.height),d.depth>a&&(a=d.depth),d.maxFontSize>s&&(s=d.maxFontSize)}t.height=r,t.depth=a,t.maxFontSize=s},ue=function(t,r,a,s){var c=new Zi(t,r,a,s);return xc(c),c},Er=(o,t,r,a)=>new Zi(o,t,r,a),Fo=function(t,r,a){var s=ue([t],[],r);return s.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=ge(s.height),s.maxFontSize=1,s},av=function(t,r,a,s){var c=new $c(t,r,a,s);return xc(c),c},or=function(t){var r=new Vi(t);return xc(r),r},Io=function(t,r){return t instanceof Vi?ue([],[t],r):t},sv=function(t){if(t.positionType==="individualShift"){for(var r=t.children,a=[r[0]],s=-r[0].shift-r[0].elem.depth,c=s,d=1;d<r.length;d++){var f=-r[d].shift-c-r[d].elem.depth,y=f-(r[d-1].elem.height+r[d-1].elem.depth);c=c+f,a.push({type:"kern",size:y}),a.push(r[d])}return{children:a,depth:s}}var x;if(t.positionType==="top"){for(var g=t.positionData,w=0;w<t.children.length;w++){var S=t.children[w];g-=S.type==="kern"?S.size:S.elem.height+S.elem.depth}x=g}else if(t.positionType==="bottom")x=-t.positionData;else{var j=t.children[0];if(j.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")x=-j.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")x=-j.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:x}},Ye=function(t,r){for(var{children:a,depth:s}=sv(t),c=0,d=0;d<a.length;d++){var f=a[d];if(f.type==="elem"){var y=f.elem;c=Math.max(c,y.maxFontSize,y.height)}}c+=2;var x=ue(["pstrut"],[]);x.style.height=ge(c);for(var g=[],w=s,S=s,j=s,q=0;q<a.length;q++){var k=a[q];if(k.type==="kern")j+=k.size;else{var T=k.elem,A=k.wrapperClasses||[],L=k.wrapperStyle||{},H=ue(A,[x,T],void 0,L);H.style.top=ge(-c-j-T.depth),k.marginLeft&&(H.style.marginLeft=k.marginLeft),k.marginRight&&(H.style.marginRight=k.marginRight),g.push(H),j+=T.height+T.depth}w=Math.min(w,j),S=Math.max(S,j)}var F=ue(["vlist"],g);F.style.height=ge(S);var E;if(w<0){var G=ue([],[]),I=ue(["vlist"],[G]);I.style.height=ge(-w);var Q=ue(["vlist-s"],[new bt("​")]);E=[ue(["vlist-r"],[F,Q]),ue(["vlist-r"],[I])]}else E=[ue(["vlist-r"],[F])];var Y=ue(["vlist-t"],E);return E.length===2&&Y.classes.push("vlist-t2"),Y.height=S,Y.depth=-w,Y},jp=(o,t)=>{var r=ue(["mspace"],[],t),a=mn(o,t);return r.style.marginRight=ge(a),r},ms=function(t,r,a){var s="";switch(t){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=t}var c;return r==="textbf"&&a==="textit"?c="BoldItalic":r==="textbf"?c="Bold":r==="textit"?c="Italic":c="Regular",s+"-"+c},Jl={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Sp={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},qp=function(t,r){var[a,s,c]=Sp[t],d=new Dr(a),f=new nr([d],{width:ge(s),height:ge(c),style:"width:"+ge(s),viewBox:"0 0 "+1e3*s+" "+1e3*c,preserveAspectRatio:"xMinYMin"}),y=Er(["overlay"],[f],r);return y.height=c,y.style.height=ge(c),y.style.width=ge(s),y},pn={number:3,unit:"mu"},oo={number:4,unit:"mu"},Xt={number:5,unit:"mu"},lv={mord:{mop:pn,mbin:oo,mrel:Xt,minner:pn},mop:{mord:pn,mop:pn,mrel:Xt,minner:pn},mbin:{mord:oo,mop:oo,mopen:oo,minner:oo},mrel:{mord:Xt,mop:Xt,mopen:Xt,minner:Xt},mopen:{},mclose:{mop:pn,mbin:oo,mrel:Xt,minner:pn},mpunct:{mord:pn,mop:pn,mrel:Xt,mopen:pn,mclose:pn,mpunct:pn,minner:pn},minner:{mord:pn,mop:pn,mbin:oo,mrel:Xt,mopen:pn,mpunct:pn,minner:pn}},cv={mord:{mop:pn},mop:{mord:pn,mop:pn},mbin:{},mrel:{},mopen:{},mclose:{mop:pn},mpunct:{},minner:{mop:pn}},Tp={},js={},Ss={};function ve(o){for(var{type:t,names:r,props:a,handler:s,htmlBuilder:c,mathmlBuilder:d}=o,f={type:t,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:s},y=0;y<r.length;++y)Tp[r[y]]=f;t&&(c&&(js[t]=c),d&&(Ss[t]=d))}function so(o){var{type:t,htmlBuilder:r,mathmlBuilder:a}=o;ve({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var qs=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},$n=function(t){return t.type==="ordgroup"?t.body:[t]},uv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),dv=new Set(["rightmost","mrel","mclose","mpunct"]),pv={display:Le.DISPLAY,text:Le.TEXT,script:Le.SCRIPT,scriptscript:Le.SCRIPTSCRIPT},mv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},zn=function(t,r,a,s){s===void 0&&(s=[null,null]);for(var c=[],d=0;d<t.length;d++){var f=Ze(t[d],r);if(f instanceof Vi){var y=f.children;c.push(...y)}else c.push(f)}if(kp(c),!a)return c;var x=r;if(t.length===1){var g=t[0];g.type==="sizing"?x=r.havingSize(g.size):g.type==="styling"&&(x=r.havingStyle(pv[g.style]))}var w=ue([s[0]||"leftmost"],[],r),S=ue([s[1]||"rightmost"],[],r),j=a==="root";return T1(c,(q,k)=>{var T=k.classes[0],A=q.classes[0];T==="mbin"&&dv.has(A)?k.classes[0]="mord":A==="mbin"&&uv.has(T)&&(q.classes[0]="mord")},{node:w},S,j),T1(c,(q,k)=>{var T=ec(k),A=ec(q),L=T&&A?q.hasClass("mtight")?cv[T][A]:lv[T][A]:null;if(L)return jp(L,x)},{node:w},S,j),c},T1=function o(t,r,a,s,c){s&&t.push(s);for(var d=0;d<t.length;d++){var f=t[d],y=Ap(f);if(y){o(y.children,r,a,null,c);continue}var x=!f.hasClass("mspace");if(x){var g=r(f,a.node);g&&(a.insertAfter?a.insertAfter(g):(t.unshift(g),d++))}x?a.node=f:c&&f.hasClass("newline")&&(a.node=ue(["leftmost"])),a.insertAfter=(w=>S=>{t.splice(w+1,0,S),d++})(d)}s&&t.pop()},Ap=function(t){return t instanceof Vi||t instanceof $c||t instanceof Zi&&t.hasClass("enclosing")?t:null},fv=function o(t,r){var a=Ap(t);if(a){var s=a.children;if(s.length){if(r==="right")return o(s[s.length-1],"right");if(r==="left")return o(s[0],"left")}}return t},ec=function(t,r){return t?(r&&(t=fv(t,r)),mv[t.classes[0]]||null):null},Ui=function(t,r){var a=["nulldelimiter"].concat(t.baseSizingClasses());return ue(r.concat(a))},Ze=function(t,r,a){if(!t)return ue();if(js[t.type]){var s=js[t.type](t,r);if(a&&r.size!==a.size){s=ue(r.sizingClasses(a),[s],r);var c=r.sizeMultiplier/a.sizeMultiplier;s.height*=c,s.depth*=c}return s}else throw new pe("Got group of unknown type: '"+t.type+"'")};function fs(o,t){var r=ue(["base"],o,t),a=ue(["strut"]);return a.style.height=ge(r.height+r.depth),r.depth&&(a.style.verticalAlign=ge(-r.depth)),r.children.unshift(a),r}function nc(o,t){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var a=zn(o,t,"root"),s;a.length===2&&a[1].hasClass("tag")&&(s=a.pop());for(var c=[],d=[],f=0;f<a.length;f++)if(d.push(a[f]),a[f].hasClass("mbin")||a[f].hasClass("mrel")||a[f].hasClass("allowbreak")){for(var y=!1;f<a.length-1&&a[f+1].hasClass("mspace")&&!a[f+1].hasClass("newline");)f++,d.push(a[f]),a[f].hasClass("nobreak")&&(y=!0);y||(c.push(fs(d,t)),d=[])}else a[f].hasClass("newline")&&(d.pop(),d.length>0&&(c.push(fs(d,t)),d=[]),c.push(a[f]));d.length>0&&c.push(fs(d,t));var x;r?(x=fs(zn(r,t,!0)),x.classes=["tag"],c.push(x)):s&&c.push(s);var g=ue(["katex-html"],c);if(g.setAttribute("aria-hidden","true"),x){var w=x.children[0];w.style.height=ge(g.height+g.depth),g.depth&&(w.style.verticalAlign=ge(-g.depth))}return g}function Mp(o){return new Vi(o)}class me{constructor(t,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Rr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof xn&&this.children[a+1]instanceof xn){for(var s=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof xn;)s+=this.children[++a].toText();t.appendChild(new xn(s).toNode())}else t.appendChild(this.children[a].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=In(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+In(Rr(this.classes))+'"'),t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class xn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return In(this.toText())}toText(){return this.text}}class Pp{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",ge(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ge(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var hv=new Set(["\\imath","\\jmath"]),yv=new Set(["mrow","mtable"]),vt=function(t,r,a){return nn[r][t]&&nn[r][t].replace&&t.charCodeAt(0)!==55349&&!(_p.hasOwnProperty(t)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(t=nn[r][t].replace),new xn(t)},bc=function(t){return t.length===1?t[0]:new me("mrow",t)},vc=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var a=r.font;if(!a||a==="mathnormal")return null;var s=t.mode;if(a==="mathit")return"italic";if(a==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(a==="mathbf")return"bold";if(a==="mathbb")return"double-struck";if(a==="mathsfit")return"sans-serif-italic";if(a==="mathfrak")return"fraktur";if(a==="mathscr"||a==="mathcal")return"script";if(a==="mathsf")return"sans-serif";if(a==="mathtt")return"monospace";var c=t.text;if(hv.has(c))return null;nn[s][c]&&nn[s][c].replace&&(c=nn[s][c].replace);var d=Jl[a].fontName;return yc(c,d,s)?Jl[a].variant:null};function Dl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var t=o.children[0];return t instanceof xn&&t.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof xn&&r.text===","}else return!1}var nt=function(t,r,a){if(t.length===1){var s=Je(t[0],r);return a&&s instanceof me&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var c=[],d,f=0;f<t.length;f++){var y=Je(t[f],r);if(y instanceof me&&d instanceof me){if(y.type==="mtext"&&d.type==="mtext"&&y.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...y.children);continue}else if(y.type==="mn"&&d.type==="mn"){d.children.push(...y.children);continue}else if(Dl(y)&&d.type==="mn"){d.children.push(...y.children);continue}else if(y.type==="mn"&&Dl(d))y.children=[...d.children,...y.children],c.pop();else if((y.type==="msup"||y.type==="msub")&&y.children.length>=1&&(d.type==="mn"||Dl(d))){var x=y.children[0];x instanceof me&&x.type==="mn"&&(x.children=[...d.children,...x.children],c.pop())}else if(d.type==="mi"&&d.children.length===1){var g=d.children[0];if(g instanceof xn&&g.text==="̸"&&(y.type==="mo"||y.type==="mi"||y.type==="mn")){var w=y.children[0];w instanceof xn&&w.text.length>0&&(w.text=w.text.slice(0,1)+"̸"+w.text.slice(1),c.pop())}}}c.push(y),d=y}return c},Br=function(t,r,a){return bc(nt(t,r,a))},Je=function(t,r){if(!t)return new me("mrow");if(Ss[t.type]){var a=Ss[t.type](t,r);return a}else throw new pe("Got group of unknown type: '"+t.type+"'")};function A1(o,t,r,a,s){var c=nt(o,r),d;c.length===1&&c[0]instanceof me&&yv.has(c[0].type)?d=c[0]:d=new me("mrow",c);var f=new me("annotation",[new xn(t)]);f.setAttribute("encoding","application/x-tex");var y=new me("semantics",[d,f]),x=new me("math",[y]);x.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&x.setAttribute("display","block");var g=s?"katex":"katex-mathml";return ue([g],[x])}var Cp=function(t){return new Jt({style:t.displayMode?Le.DISPLAY:Le.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Rp=function(t,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),t=ue(a,[t])}return t},$v=function(t,r,a){var s=Cp(a),c;if(a.output==="mathml")return A1(t,r,s,a.displayMode,!0);if(a.output==="html"){var d=nc(t,s);c=ue(["katex"],[d])}else{var f=A1(t,r,s,a.displayMode,!1),y=nc(t,s);c=ue(["katex"],[f,y])}return Rp(c,a)},gv=function(t,r,a){var s=Cp(a),c=nc(t,s),d=ue(["katex"],[c]);return Rp(d,a)},xv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Ps=function(t){var r=new me("mo",[new xn(xv[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},bv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},vv=new Set(["widehat","widecheck","widetilde","utilde"]),Cs=function(t,r){function a(){var f=4e5,y=t.label.slice(1);if(vv.has(y)){var x=t,g=x.base.type==="ordgroup"?x.base.body.length:1,w,S,j;if(g>5)y==="widehat"||y==="widecheck"?(w=420,f=2364,j=.42,S=y+"4"):(w=312,f=2340,j=.34,S="tilde4");else{var q=[1,1,2,2,3,3][g];y==="widehat"||y==="widecheck"?(f=[0,1062,2364,2364,2364][q],w=[0,239,300,360,420][q],j=[0,.24,.3,.3,.36,.42][q],S=y+q):(f=[0,600,1033,2339,2340][q],w=[0,260,286,306,312][q],j=[0,.26,.286,.3,.306,.34][q],S="tilde"+q)}var k=new Dr(S),T=new nr([k],{width:"100%",height:ge(j),viewBox:"0 0 "+f+" "+w,preserveAspectRatio:"none"});return{span:Er([],[T],r),minWidth:0,height:j}}else{var A=[],L=bv[y],[H,F,E]=L,G=E/1e3,I=H.length,Q,Y;if(I===1){var te=L[3];Q=["hide-tail"],Y=[te]}else if(I===2)Q=["halfarrow-left","halfarrow-right"],Y=["xMinYMin","xMaxYMin"];else if(I===3)Q=["brace-left","brace-center","brace-right"],Y=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+I+" children.");for(var re=0;re<I;re++){var J=new Dr(H[re]),ee=new nr([J],{width:"400em",height:ge(G),viewBox:"0 0 "+f+" "+E,preserveAspectRatio:Y[re]+" slice"}),fe=Er([Q[re]],[ee],r);if(I===1)return{span:fe,minWidth:F,height:G};fe.style.height=ge(G),A.push(fe)}return{span:ue(["stretchy"],A,r),minWidth:F,height:G}}}var{span:s,minWidth:c,height:d}=a();return s.height=d,s.style.height=ge(d),c>0&&(s.style.minWidth=ge(c)),s},wv=function(t,r,a,s,c){var d,f=t.height+t.depth+a+s;if(/fbox|color|angl/.test(r)){if(d=ue(["stretchy",r],[],c),r==="fbox"){var y=c.color&&c.getColor();y&&(d.style.borderColor=y)}}else{var x=[];/^[bx]cancel$/.test(r)&&x.push(new Yl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&x.push(new Yl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var g=new nr(x,{width:"100%",height:ge(f)});d=Er([],[g],c)}return d.height=f,d.style.height=ge(f),d};function Oe(o,t){if(!o||o.type!==t)throw new Error("Expected node of type "+t+", but got "+(o?"node of type "+o.type:String(o)));return o}function wc(o){var t=Rs(o);if(!t)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return t}function Rs(o){return o&&(o.type==="atom"||tv.hasOwnProperty(o.type))?o:null}var zc=(o,t)=>{var r,a,s;o&&o.type==="supsub"?(a=Oe(o.base,"accent"),r=a.base,o.base=r,s=ev(Ze(o,t)),o.base=a):(a=Oe(o,"accent"),r=a.base);var c=Ze(r,t.havingCrampedStyle()),d=a.isShifty&&tr(r),f=0;if(d){var y=Ni(r),x=Ze(y,t.havingCrampedStyle());f=z1(x).skew}var g=a.label==="\\c",w=g?c.height+c.depth:Math.min(c.height,t.fontMetrics().xHeight),S;if(a.isStretchy)S=Cs(a,t),S=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"elem",elem:S,wrapperClasses:["svg-align"],wrapperStyle:f>0?{width:"calc(100% - "+ge(2*f)+")",marginLeft:ge(2*f)}:void 0}]});else{var j,q;a.label==="\\vec"?(j=qp("vec",t),q=Sp.vec[1]):(j=Ms({mode:a.mode,text:a.label},t,"textord"),j=z1(j),j.italic=0,q=j.width,g&&(w+=j.depth)),S=ue(["accent-body"],[j]);var k=a.label==="\\textcircled";k&&(S.classes.push("accent-full"),w=c.height);var T=f;k||(T-=q/2),S.style.left=ge(T),a.label==="\\textcircled"&&(S.style.top=".2em"),S=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:-w},{type:"elem",elem:S}]})}var A=ue(["mord","accent"],[S],t);return s?(s.children[0]=A,s.height=Math.max(A.height,s.height),s.classes[0]="mord",s):A},Dp=(o,t)=>{var r=o.isStretchy?Ps(o.label):new me("mo",[vt(o.label,o.mode)]),a=new me("mover",[Je(o.base,t),r]);return a.setAttribute("accent","true"),a},zv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ve({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,t)=>{var r=qs(t[0]),a=!zv.test(o.funcName),s=!a||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:a,isShifty:s,base:r}},htmlBuilder:zc,mathmlBuilder:Dp});ve({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,t)=>{var r=t[0],a=o.parser.mode;return a==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:zc,mathmlBuilder:Dp});ve({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"accentUnder",mode:r.mode,label:a,base:s}},htmlBuilder:(o,t)=>{var r=Ze(o.base,t),a=Cs(o,t),s=o.label==="\\utilde"?.12:0,c=Ye({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return ue(["mord","accentunder"],[c],t)},mathmlBuilder:(o,t)=>{var r=Ps(o.label),a=new me("munder",[Je(o.base,t),r]);return a.setAttribute("accentunder","true"),a}});var hs=o=>{var t=new me("mpadded",o?[o]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};ve({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:a,funcName:s}=o;return{type:"xArrow",mode:a.mode,label:s,body:t[0],below:r[0]}},htmlBuilder(o,t){var r=t.style,a=t.havingStyle(r.sup()),s=Io(Ze(o.body,a,t),t),c=o.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(c+"-arrow-pad");var d;o.below&&(a=t.havingStyle(r.sub()),d=Io(Ze(o.below,a,t),t),d.classes.push(c+"-arrow-pad"));var f=Cs(o,t),y=-t.fontMetrics().axisHeight+.5*f.height,x=-t.fontMetrics().axisHeight-.5*f.height-.111;(s.depth>.25||o.label==="\\xleftequilibrium")&&(x-=s.depth);var g;if(d){var w=-t.fontMetrics().axisHeight+d.height+.5*f.height+.111;g=Ye({positionType:"individualShift",children:[{type:"elem",elem:s,shift:x},{type:"elem",elem:f,shift:y},{type:"elem",elem:d,shift:w}]})}else g=Ye({positionType:"individualShift",children:[{type:"elem",elem:s,shift:x},{type:"elem",elem:f,shift:y}]});return g.children[0].children[0].children[1].classes.push("svg-align"),ue(["mrel","x-arrow"],[g],t)},mathmlBuilder(o,t){var r=Ps(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(o.body){var s=hs(Je(o.body,t));if(o.below){var c=hs(Je(o.below,t));a=new me("munderover",[r,c,s])}else a=new me("mover",[r,s])}else if(o.below){var d=hs(Je(o.below,t));a=new me("munder",[r,d])}else a=hs(),a=new me("mover",[r,a]);return a}});function Ep(o,t){var r=zn(o.body,t,!0);return ue([o.mclass],r,t)}function Bp(o,t){var r,a=nt(o.body,t);return o.mclass==="minner"?r=new me("mpadded",a):o.mclass==="mord"?o.isCharacterBox?(r=a[0],r.type="mi"):r=new me("mi",a):(o.isCharacterBox?(r=a[0],r.type="mo"):r=new me("mo",a),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ve({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:$n(s),isCharacterBox:tr(s)}},htmlBuilder:Ep,mathmlBuilder:Bp});var Ds=o=>{var t=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};ve({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,t){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:Ds(t[0]),body:$n(t[1]),isCharacterBox:tr(t[1])}}});ve({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,t){var{parser:r,funcName:a}=o,s=t[1],c=t[0],d;a!=="\\stackrel"?d=Ds(s):d="mrel";var f={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:$n(s)},y={type:"supsub",mode:c.mode,base:f,sup:a==="\\underset"?null:c,sub:a==="\\underset"?c:null};return{type:"mclass",mode:r.mode,mclass:d,body:[y],isCharacterBox:tr(y)}},htmlBuilder:Ep,mathmlBuilder:Bp});ve({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:Ds(t[0]),body:$n(t[0])}},htmlBuilder(o,t){var r=zn(o.body,t,!0),a=ue([o.mclass],r,t);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(o,t){var r=nt(o.body,t),a=new me("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var _v={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},M1=()=>({type:"styling",body:[],mode:"math",style:"display"}),P1=o=>o.type==="textord"&&o.text==="@",kv=(o,t)=>(o.type==="mathord"||o.type==="atom")&&o.text===t;function jv(o,t,r){var a=_v[o];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[t[0]],[]),c={type:"atom",text:a,mode:"math",family:"rel"},d=r.callFunction("\\Big",[c],[]),f=r.callFunction("\\\\cdright",[t[1]],[]),y={type:"ordgroup",mode:"math",body:[s,d,f]};return r.callFunction("\\\\cdparent",[y],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var x={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[x],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Sv(o){var t=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){t.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new pe("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var a=[],s=[a],c=0;c<t.length;c++){for(var d=t[c],f=M1(),y=0;y<d.length;y++)if(!P1(d[y]))f.body.push(d[y]);else{a.push(f),y+=1;var x=wc(d[y]).text,g=new Array(2);if(g[0]={type:"ordgroup",mode:"math",body:[]},g[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(x))if("<>AV".includes(x))for(var w=0;w<2;w++){for(var S=!0,j=y+1;j<d.length;j++){if(kv(d[j],x)){S=!1,y=j;break}if(P1(d[j]))throw new pe("Missing a "+x+" character to complete a CD arrow.",d[j]);g[w].body.push(d[j])}if(S)throw new pe("Missing a "+x+" character to complete a CD arrow.",d[y])}else throw new pe('Expected one of "<>AV=|." after @',d[y]);var q=jv(x,g,o),k={type:"styling",body:[q],mode:"math",style:"display"};a.push(k),f=M1()}c%2===0?a.push(f):a.shift(),a=[],s.push(a)}o.gullet.endGroup(),o.gullet.endGroup();var T=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:T,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}ve({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:t[0]}},htmlBuilder(o,t){var r=t.havingStyle(t.style.sup()),a=Io(Ze(o.label,r,t),t);return a.classes.push("cd-label-"+o.side),a.style.bottom=ge(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(o,t){var r=new me("mrow",[Je(o.label,t)]);return r=new me("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new me("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ve({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,t){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(o,t){var r=Io(Ze(o.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,t){return new me("mrow",[Je(o.fragment,t)])}});ve({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,t){for(var{parser:r}=o,a=Oe(t[0],"ordgroup"),s=a.body,c="",d=0;d<s.length;d++){var f=Oe(s[d],"textord");c+=f.text}var y=parseInt(c),x;if(isNaN(y))throw new pe("\\@char has non-numeric argument "+c);if(y<0||y>=1114111)throw new pe("\\@char with invalid code point "+c);return y<=65535?x=String.fromCharCode(y):(y-=65536,x=String.fromCharCode((y>>10)+55296,(y&1023)+56320)),{type:"textord",mode:r.mode,text:x}}});var Fp=(o,t)=>{var r=zn(o.body,t.withColor(o.color),!1);return or(r)},Ip=(o,t)=>{var r=nt(o.body,t.withColor(o.color)),a=new me("mstyle",r);return a.setAttribute("mathcolor",o.color),a};ve({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,t){var{parser:r}=o,a=Oe(t[0],"color-token").color,s=t[1];return{type:"color",mode:r.mode,color:a,body:$n(s)}},htmlBuilder:Fp,mathmlBuilder:Ip});ve({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,t){var{parser:r,breakOnTokenText:a}=o,s=Oe(t[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var c=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:s,body:c}},htmlBuilder:Fp,mathmlBuilder:Ip});ve({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,t,r){var{parser:a}=o,s=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,c=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:c,size:s&&Oe(s,"size").value}},htmlBuilder(o,t){var r=ue(["mspace"],[],t);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=ge(mn(o.size,t)))),r},mathmlBuilder(o,t){var r=new me("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",ge(mn(o.size,t)))),r}});var tc={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Np=o=>{var t=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new pe("Expected a control sequence",o);return t},qv=o=>{var t=o.gullet.popToken();return t.text==="="&&(t=o.gullet.popToken(),t.text===" "&&(t=o.gullet.popToken())),t},Lp=(o,t,r,a)=>{var s=o.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(t,s,a)};ve({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:t,funcName:r}=o;t.consumeSpaces();var a=t.fetch();if(tc[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=tc[a.text]),Oe(t.parseFunction(),"internal");throw new pe("Invalid token after macro prefix",a)}});ve({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=t.gullet.popToken(),s=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new pe("Expected a control sequence",a);for(var c=0,d,f=[[]];t.gullet.future().text!=="{";)if(a=t.gullet.popToken(),a.text==="#"){if(t.gullet.future().text==="{"){d=t.gullet.future(),f[c].push("{");break}if(a=t.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new pe('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==c+1)throw new pe('Argument number "'+a.text+'" out of order');c++,f.push([])}else{if(a.text==="EOF")throw new pe("Expected a macro definition");f[c].push(a.text)}var{tokens:y}=t.gullet.consumeArg();return d&&y.unshift(d),(r==="\\edef"||r==="\\xdef")&&(y=t.gullet.expandTokens(y),y.reverse()),t.gullet.macros.set(s,{tokens:y,numArgs:c,delimiters:f},r===tc[r]),{type:"internal",mode:t.mode}}});ve({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=Np(t.gullet.popToken());t.gullet.consumeSpaces();var s=qv(t);return Lp(t,a,s,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});ve({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=Np(t.gullet.popToken()),s=t.gullet.popToken(),c=t.gullet.popToken();return Lp(t,a,c,r==="\\\\globalfuture"),t.gullet.pushToken(c),t.gullet.pushToken(s),{type:"internal",mode:t.mode}}});var Ii=function(t,r,a){var s=nn.math[t]&&nn.math[t].replace,c=yc(s||t,r,a);if(!c)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return c},_c=function(t,r,a,s){var c=a.havingBaseStyle(r),d=ue(s.concat(c.sizingClasses(a)),[t],a),f=c.sizeMultiplier/a.sizeMultiplier;return d.height*=f,d.depth*=f,d.maxFontSize=c.sizeMultiplier,d},Wp=function(t,r,a){var s=r.havingBaseStyle(a),c=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=ge(c),t.height-=c,t.depth+=c},Tv=function(t,r,a,s,c,d){var f=Hn(t,"Main-Regular",c,s),y=_c(f,r,s,d);return Wp(y,s,r),y},Av=function(t,r,a,s){return Hn(t,"Size"+r+"-Regular",a,s)},Op=function(t,r,a,s,c,d){var f=Av(t,r,c,s),y=_c(ue(["delimsizing","size"+r],[f],s),Le.TEXT,s,d);return a&&Wp(y,s,Le.TEXT),y},El=function(t,r,a){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var c=ue(["delimsizinginner",s],[ue([],[Hn(t,r,a)])]);return{type:"elem",elem:c}},Bl=function(t,r,a){var s=Ft["Size4-Regular"][t.charCodeAt(0)]?Ft["Size4-Regular"][t.charCodeAt(0)][4]:Ft["Size1-Regular"][t.charCodeAt(0)][4],c=new Dr("inner",Gb(t,Math.round(1e3*r))),d=new nr([c],{width:ge(s),height:ge(r),style:"width:"+ge(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),f=Er([],[d],a);return f.height=r,f.style.height=ge(r),f.style.width=ge(s),{type:"elem",elem:f}},rc=.008,ys={type:"kern",size:-1*rc},Mv=new Set(["|","\\lvert","\\rvert","\\vert"]),Pv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Hp=function(t,r,a,s,c,d){var f,y,x,g,w="",S=0;f=x=g=t,y=null;var j="Size1-Regular";t==="\\uparrow"?x=g="⏐":t==="\\Uparrow"?x=g="‖":t==="\\downarrow"?f=x="⏐":t==="\\Downarrow"?f=x="‖":t==="\\updownarrow"?(f="\\uparrow",x="⏐",g="\\downarrow"):t==="\\Updownarrow"?(f="\\Uparrow",x="‖",g="\\Downarrow"):Mv.has(t)?(x="∣",w="vert",S=333):Pv.has(t)?(x="∥",w="doublevert",S=556):t==="["||t==="\\lbrack"?(f="⎡",x="⎢",g="⎣",j="Size4-Regular",w="lbrack",S=667):t==="]"||t==="\\rbrack"?(f="⎤",x="⎥",g="⎦",j="Size4-Regular",w="rbrack",S=667):t==="\\lfloor"||t==="⌊"?(x=f="⎢",g="⎣",j="Size4-Regular",w="lfloor",S=667):t==="\\lceil"||t==="⌈"?(f="⎡",x=g="⎢",j="Size4-Regular",w="lceil",S=667):t==="\\rfloor"||t==="⌋"?(x=f="⎥",g="⎦",j="Size4-Regular",w="rfloor",S=667):t==="\\rceil"||t==="⌉"?(f="⎤",x=g="⎥",j="Size4-Regular",w="rceil",S=667):t==="("||t==="\\lparen"?(f="⎛",x="⎜",g="⎝",j="Size4-Regular",w="lparen",S=875):t===")"||t==="\\rparen"?(f="⎞",x="⎟",g="⎠",j="Size4-Regular",w="rparen",S=875):t==="\\{"||t==="\\lbrace"?(f="⎧",y="⎨",g="⎩",x="⎪",j="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(f="⎫",y="⎬",g="⎭",x="⎪",j="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(f="⎧",g="⎩",x="⎪",j="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(f="⎫",g="⎭",x="⎪",j="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(f="⎧",g="⎭",x="⎪",j="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(f="⎫",g="⎩",x="⎪",j="Size4-Regular");var q=Ii(f,j,c),k=q.height+q.depth,T=Ii(x,j,c),A=T.height+T.depth,L=Ii(g,j,c),H=L.height+L.depth,F=0,E=1;if(y!==null){var G=Ii(y,j,c);F=G.height+G.depth,E=2}var I=k+H+F,Q=Math.max(0,Math.ceil((r-I)/(E*A))),Y=I+Q*E*A,te=s.fontMetrics().axisHeight;a&&(te*=s.sizeMultiplier);var re=Y/2-te,J=[];if(w.length>0){var ee=Y-k-H,fe=Math.round(Y*1e3),be=Ub(w,Math.round(ee*1e3)),ze=new Dr(w,be),ie=(S/1e3).toFixed(3)+"em",X=(fe/1e3).toFixed(3)+"em",$e=new nr([ze],{width:ie,height:X,viewBox:"0 0 "+S+" "+fe}),ne=Er([],[$e],s);ne.height=fe/1e3,ne.style.width=ie,ne.style.height=X,J.push({type:"elem",elem:ne})}else{if(J.push(El(g,j,c)),J.push(ys),y===null){var R=Y-k-H+2*rc;J.push(Bl(x,R,s))}else{var Z=(Y-k-H-F)/2+2*rc;J.push(Bl(x,Z,s)),J.push(ys),J.push(El(y,j,c)),J.push(ys),J.push(Bl(x,Z,s))}J.push(ys),J.push(El(f,j,c))}var _e=s.havingBaseStyle(Le.TEXT),Te=Ye({positionType:"bottom",positionData:re,children:J});return _c(ue(["delimsizing","mult"],[Te],_e),Le.TEXT,s,d)},Fl=80,Il=.08,Nl=function(t,r,a,s,c){var d=Hb(t,s,a),f=new Dr(t,d),y=new nr([f],{width:"400em",height:ge(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return Er(["hide-tail"],[y],c)},Cv=function(t,r){var a=r.havingBaseSizing(),s=Kp("\\surd",t*a.sizeMultiplier,Zp,a),c=a.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),f,y=0,x=0,g=0,w;return s.type==="small"?(g=1e3+1e3*d+Fl,t<1?c=1:t<1.4&&(c=.7),y=(1+d+Il)/c,x=(1+d)/c,f=Nl("sqrtMain",y,g,d,r),f.style.minWidth="0.853em",w=.833/c):s.type==="large"?(g=(1e3+Fl)*Li[s.size],x=(Li[s.size]+d)/c,y=(Li[s.size]+d+Il)/c,f=Nl("sqrtSize"+s.size,y,g,d,r),f.style.minWidth="1.02em",w=1/c):(y=t+d+Il,x=t+d,g=Math.floor(1e3*t+d)+Fl,f=Nl("sqrtTall",y,g,d,r),f.style.minWidth="0.742em",w=1.056),f.height=x,f.style.height=ge(y),{span:f,advanceWidth:w,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*c}},Gp=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Rv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Up=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Li=[0,1.2,1.8,2.4,3],Vp=function(t,r,a,s,c){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Gp.has(t)||Up.has(t))return Op(t,r,!1,a,s,c);if(Rv.has(t))return Hp(t,Li[r],!1,a,s,c);throw new pe("Illegal delimiter: '"+t+"'")},Dv=[{type:"small",style:Le.SCRIPTSCRIPT},{type:"small",style:Le.SCRIPT},{type:"small",style:Le.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Ev=[{type:"small",style:Le.SCRIPTSCRIPT},{type:"small",style:Le.SCRIPT},{type:"small",style:Le.TEXT},{type:"stack"}],Zp=[{type:"small",style:Le.SCRIPTSCRIPT},{type:"small",style:Le.SCRIPT},{type:"small",style:Le.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Bv=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Kp=function(t,r,a,s){for(var c=Math.min(2,3-s.style.size),d=c;d<a.length&&a[d].type!=="stack";d++){var f=Ii(t,Bv(a[d]),"math"),y=f.height+f.depth;if(a[d].type==="small"){var x=s.havingBaseStyle(a[d].style);y*=x.sizeMultiplier}if(y>r)return a[d]}return a[a.length-1]},oc=function(t,r,a,s,c,d){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var f;Up.has(t)?f=Dv:Gp.has(t)?f=Zp:f=Ev;var y=Kp(t,r,f,s);return y.type==="small"?Tv(t,y.style,a,s,c,d):y.type==="large"?Op(t,y.size,a,s,c,d):Hp(t,r,a,s,c,d)},Ll=function(t,r,a,s,c,d){var f=s.fontMetrics().axisHeight*s.sizeMultiplier,y=901,x=5/s.fontMetrics().ptPerEm,g=Math.max(r-f,a+f),w=Math.max(g/500*y,2*g-x);return oc(t,w,!0,s,c,d)},C1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},Fv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Es(o,t){var r=Rs(o);if(r&&Fv.has(r.text))return r;throw r?new pe("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",o):new pe("Invalid delimiter type '"+o.type+"'",o)}ve({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,t)=>{var r=Es(t[0],o);return{type:"delimsizing",mode:o.parser.mode,size:C1[o.funcName].size,mclass:C1[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,t)=>o.delim==="."?ue([o.mclass]):Vp(o.delim,o.size,t,o.mode,[o.mclass]),mathmlBuilder:o=>{var t=[];o.delim!=="."&&t.push(vt(o.delim,o.mode));var r=new me("mo",t);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=ge(Li[o.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function R1(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ve({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new pe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:Es(t[0],o).text,color:r}}});ve({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Es(t[0],o),a=o.parser;++a.leftrightDepth;var s=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var c=Oe(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:s,left:r.text,right:c.delim,rightColor:c.color}},htmlBuilder:(o,t)=>{R1(o);for(var r=zn(o.body,t,!0,["mopen","mclose"]),a=0,s=0,c=!1,d=0;d<r.length;d++)r[d].isMiddle?c=!0:(a=Math.max(r[d].height,a),s=Math.max(r[d].depth,s));a*=t.sizeMultiplier,s*=t.sizeMultiplier;var f;if(o.left==="."?f=Ui(t,["mopen"]):f=Ll(o.left,a,s,t,o.mode,["mopen"]),r.unshift(f),c)for(var y=1;y<r.length;y++){var x=r[y],g=x.isMiddle;g&&(r[y]=Ll(g.delim,a,s,g.options,o.mode,[]))}var w;if(o.right===".")w=Ui(t,["mclose"]);else{var S=o.rightColor?t.withColor(o.rightColor):t;w=Ll(o.right,a,s,S,o.mode,["mclose"])}return r.push(w),ue(["minner"],r,t)},mathmlBuilder:(o,t)=>{R1(o);var r=nt(o.body,t);if(o.left!=="."){var a=new me("mo",[vt(o.left,o.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(o.right!=="."){var s=new me("mo",[vt(o.right,o.mode)]);s.setAttribute("fence","true"),o.rightColor&&s.setAttribute("mathcolor",o.rightColor),r.push(s)}return bc(r)}});ve({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Es(t[0],o);if(!o.parser.leftrightDepth)throw new pe("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,t)=>{var r;if(o.delim===".")r=Ui(t,[]);else{r=Vp(o.delim,1,t,o.mode,[]);var a={delim:o.delim,options:t};r.isMiddle=a}return r},mathmlBuilder:(o,t)=>{var r=o.delim==="\\vert"||o.delim==="|"?vt("|","text"):vt(o.delim,o.mode),a=new me("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var kc=(o,t)=>{var r=Io(Ze(o.body,t),t),a=o.label.slice(1),s=t.sizeMultiplier,c,d=0,f=tr(o.body);if(a==="sout")c=ue(["stretchy","sout"]),c.height=t.fontMetrics().defaultRuleThickness/s,d=-.5*t.fontMetrics().xHeight;else if(a==="phase"){var y=mn({number:.6,unit:"pt"},t),x=mn({number:.35,unit:"ex"},t),g=t.havingBaseSizing();s=s/g.sizeMultiplier;var w=r.height+r.depth+y+x;r.style.paddingLeft=ge(w/2+y);var S=Math.floor(1e3*w*s),j=Wb(S),q=new nr([new Dr("phase",j)],{width:"400em",height:ge(S/1e3),viewBox:"0 0 400000 "+S,preserveAspectRatio:"xMinYMin slice"});c=Er(["hide-tail"],[q],t),c.style.height=ge(w),d=r.depth+y+x}else{/cancel/.test(a)?f||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var k=0,T=0,A=0;/box/.test(a)?(A=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),k=t.fontMetrics().fboxsep+(a==="colorbox"?0:A),T=k):a==="angl"?(A=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),k=4*A,T=Math.max(0,.25-r.depth)):(k=f?.2:0,T=k),c=wv(r,a,k,T,t),/fbox|boxed|fcolorbox/.test(a)?(c.style.borderStyle="solid",c.style.borderWidth=ge(A)):a==="angl"&&A!==.049&&(c.style.borderTopWidth=ge(A),c.style.borderRightWidth=ge(A)),d=r.depth+T,o.backgroundColor&&(c.style.backgroundColor=o.backgroundColor,o.borderColor&&(c.style.borderColor=o.borderColor))}var L;if(o.backgroundColor)L=Ye({positionType:"individualShift",children:[{type:"elem",elem:c,shift:d},{type:"elem",elem:r,shift:0}]});else{var H=/cancel|phase/.test(a)?["svg-align"]:[];L=Ye({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:c,shift:d,wrapperClasses:H}]})}return/cancel/.test(a)&&(L.height=r.height,L.depth=r.depth),/cancel/.test(a)&&!f?ue(["mord","cancel-lap"],[L],t):ue(["mord"],[L],t)},jc=(o,t)=>{var r=0,a=new me(o.label.includes("colorbox")?"mpadded":"menclose",[Je(o.body,t)]);switch(o.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var s=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);a.setAttribute("style","border: "+s+"em solid "+String(o.borderColor))}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&a.setAttribute("mathbackground",o.backgroundColor),a};ve({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,t,r){var{parser:a,funcName:s}=o,c=Oe(t[0],"color-token").color,d=t[1];return{type:"enclose",mode:a.mode,label:s,backgroundColor:c,body:d}},htmlBuilder:kc,mathmlBuilder:jc});ve({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,t,r){var{parser:a,funcName:s}=o,c=Oe(t[0],"color-token").color,d=Oe(t[1],"color-token").color,f=t[2];return{type:"enclose",mode:a.mode,label:s,backgroundColor:d,borderColor:c,body:f}},htmlBuilder:kc,mathmlBuilder:jc});ve({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});ve({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"enclose",mode:r.mode,label:a,body:s}},htmlBuilder:kc,mathmlBuilder:jc});ve({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Qp={};function It(o){for(var{type:t,names:r,props:a,handler:s,htmlBuilder:c,mathmlBuilder:d}=o,f={type:t,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},y=0;y<r.length;++y)Qp[r[y]]=f;c&&(js[t]=c),d&&(Ss[t]=d)}var Yp={};function z(o,t){Yp[o]=t}function D1(o){var t=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),t.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return t}var Bs=o=>{var t=o.parser.settings;if(!t.displayMode)throw new pe("{"+o.envName+"} can be used only in display mode.")},Iv=new Set(["gather","gather*"]);function Sc(o){if(!o.includes("ed"))return!o.includes("*")}function Fr(o,t,r){var{hskipBeforeAndAfter:a,addJot:s,cols:c,arraystretch:d,colSeparationType:f,autoTag:y,singleRow:x,emptySingleRow:g,maxNumCols:w,leqno:S}=t;if(o.gullet.beginGroup(),x||o.gullet.macros.set("\\cr","\\\\\\relax"),!d){var j=o.gullet.expandMacroAsText("\\arraystretch");if(j==null)d=1;else if(d=parseFloat(j),!d||d<0)throw new pe("Invalid \\arraystretch: "+j)}o.gullet.beginGroup();var q=[],k=[q],T=[],A=[],L=y!=null?[]:void 0;function H(){y&&o.gullet.macros.set("\\@eqnsw","1",!0)}function F(){L&&(o.gullet.macros.get("\\df@tag")?(L.push(o.subparse([new lt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):L.push(!!y&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(H(),A.push(D1(o));;){var E=o.parseExpression(!1,x?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),E={type:"ordgroup",mode:o.mode,body:E},r&&(E={type:"styling",mode:o.mode,style:r,body:[E]}),q.push(E);var G=o.fetch().text;if(G==="&"){if(w&&q.length===w){if(x||f)throw new pe("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(G==="\\end"){F(),q.length===1&&E.type==="styling"&&E.body[0].body.length===0&&(k.length>1||!g)&&k.pop(),A.length<k.length+1&&A.push([]);break}else if(G==="\\\\"){o.consume();var I=void 0;o.gullet.future().text!==" "&&(I=o.parseSizeGroup(!0)),T.push(I?I.value:null),F(),A.push(D1(o)),q=[],k.push(q),H()}else throw new pe("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:s,arraystretch:d,body:k,cols:c,rowGaps:T,hskipBeforeAndAfter:a,hLinesBeforeRow:A,colSeparationType:f,tags:L,leqno:S}}function qc(o){return o.slice(0,1)==="d"?"display":"text"}var Nt=function(t,r){var a,s,c=t.body.length,d=t.hLinesBeforeRow,f=0,y=new Array(c),x=[],g=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),w=1/r.fontMetrics().ptPerEm,S=5*w;if(t.colSeparationType&&t.colSeparationType==="small"){var j=r.havingStyle(Le.SCRIPT).sizeMultiplier;S=.2778*(j/r.sizeMultiplier)}var q=t.colSeparationType==="CD"?mn({number:3,unit:"ex"},r):12*w,k=3*w,T=t.arraystretch*q,A=.7*T,L=.3*T,H=0;function F(dt){for(var Vn=0;Vn<dt.length;++Vn)Vn>0&&(H+=.25),x.push({pos:H,isDashed:dt[Vn]})}for(F(d[0]),a=0;a<t.body.length;++a){var E=t.body[a],G=A,I=L;f<E.length&&(f=E.length);var Q=new Array(E.length);for(s=0;s<E.length;++s){var Y=Ze(E[s],r);I<Y.depth&&(I=Y.depth),G<Y.height&&(G=Y.height),Q[s]=Y}var te=t.rowGaps[a],re=0;te&&(re=mn(te,r),re>0&&(re+=L,I<re&&(I=re),re=0)),t.addJot&&(I+=k),Q.height=G,Q.depth=I,H+=G,Q.pos=H,H+=I+re,y[a]=Q,F(d[a+1])}var J=H/2+r.fontMetrics().axisHeight,ee=t.cols||[],fe=[],be,ze,ie=[];if(t.tags&&t.tags.some(dt=>dt))for(a=0;a<c;++a){var X=y[a],$e=X.pos-J,ne=t.tags[a],R=void 0;ne===!0?R=ue(["eqn-num"],[],r):ne===!1?R=ue([],[],r):R=ue([],zn(ne,r,!0),r),R.depth=X.depth,R.height=X.height,ie.push({type:"elem",elem:R,shift:$e})}for(s=0,ze=0;s<f||ze<ee.length;++s,++ze){for(var Z=ee[ze]||{},_e=!0;Z.type==="separator";){if(_e||(be=ue(["arraycolsep"],[]),be.style.width=ge(r.fontMetrics().doubleRuleSep),fe.push(be)),Z.separator==="|"||Z.separator===":"){var Te=Z.separator==="|"?"solid":"dashed",je=ue(["vertical-separator"],[],r);je.style.height=ge(H),je.style.borderRightWidth=ge(g),je.style.borderRightStyle=Te,je.style.margin="0 "+ge(-g/2);var xe=H-J;xe&&(je.style.verticalAlign=ge(-xe)),fe.push(je)}else throw new pe("Invalid separator type: "+Z.separator);ze++,Z=ee[ze]||{},_e=!1}if(!(s>=f)){var ae=void 0;if(s>0||t.hskipBeforeAndAfter){var he;ae=(he=Z.pregap)!=null?he:S,ae!==0&&(be=ue(["arraycolsep"],[]),be.style.width=ge(ae),fe.push(be))}var Ce=[];for(a=0;a<c;++a){var Ge=y[a],Pn=Ge[s];if(Pn){var Wt=Ge.pos-J;Pn.depth=Ge.depth,Pn.height=Ge.height,Ce.push({type:"elem",elem:Pn,shift:Wt})}}if(Ce=Ye({positionType:"individualShift",children:Ce}),Ce=ue(["col-align-"+(Z.align||"c")],[Ce]),fe.push(Ce),s<f-1||t.hskipBeforeAndAfter){var qn;ae=(qn=Z.postgap)!=null?qn:S,ae!==0&&(be=ue(["arraycolsep"],[]),be.style.width=ge(ae),fe.push(be))}}}if(y=ue(["mtable"],fe),x.length>0){for(var We=Fo("hline",r,g),tn=Fo("hdashline",r,g),Be=[{type:"elem",elem:y,shift:0}];x.length>0;){var Cn=x.pop(),Rn=Cn.pos-J;Cn.isDashed?Be.push({type:"elem",elem:tn,shift:Rn}):Be.push({type:"elem",elem:We,shift:Rn})}y=Ye({positionType:"individualShift",children:Be})}if(ie.length===0)return ue(["mord"],[y],r);var ut=Ye({positionType:"individualShift",children:ie});return ut=ue(["tag"],[ut],r),or([y,ut])},Nv={c:"center ",l:"left ",r:"right "},Lt=function(t,r){for(var a=[],s=new me("mtd",[],["mtr-glue"]),c=new me("mtd",[],["mml-eqn-num"]),d=0;d<t.body.length;d++){for(var f=t.body[d],y=[],x=0;x<f.length;x++)y.push(new me("mtd",[Je(f[x],r)]));t.tags&&t.tags[d]&&(y.unshift(s),y.push(s),t.leqno?y.unshift(c):y.push(c)),a.push(new me("mtr",y))}var g=new me("mtable",a),w=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);g.setAttribute("rowspacing",ge(w));var S="",j="";if(t.cols&&t.cols.length>0){var q=t.cols,k="",T=!1,A=0,L=q.length;q[0].type==="separator"&&(S+="top ",A=1),q[q.length-1].type==="separator"&&(S+="bottom ",L-=1);for(var H=A;H<L;H++)q[H].type==="align"?(j+=Nv[q[H].align],T&&(k+="none "),T=!0):q[H].type==="separator"&&T&&(k+=q[H].separator==="|"?"solid ":"dashed ",T=!1);g.setAttribute("columnalign",j.trim()),/[sd]/.test(k)&&g.setAttribute("columnlines",k.trim())}if(t.colSeparationType==="align"){for(var F=t.cols||[],E="",G=1;G<F.length;G++)E+=G%2?"0em ":"1em ";g.setAttribute("columnspacing",E.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?g.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?g.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?g.setAttribute("columnspacing","0.5em"):g.setAttribute("columnspacing","1em");var I="",Q=t.hLinesBeforeRow;S+=Q[0].length>0?"left ":"",S+=Q[Q.length-1].length>0?"right ":"";for(var Y=1;Y<Q.length-1;Y++)I+=Q[Y].length===0?"none ":Q[Y][0]?"dashed ":"solid ";return/[sd]/.test(I)&&g.setAttribute("rowlines",I.trim()),S!==""&&(g=new me("menclose",[g]),g.setAttribute("notation",S.trim())),t.arraystretch&&t.arraystretch<1&&(g=new me("mstyle",[g]),g.setAttribute("scriptlevel","1")),g},Xp=function(t,r){t.envName.includes("ed")||Bs(t);var a=[],s=t.envName.includes("at")?"alignat":"align",c=t.envName==="split",d=Fr(t.parser,{cols:a,addJot:!0,autoTag:c?void 0:Sc(t.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:c?2:void 0,leqno:t.parser.settings.leqno},"display"),f,y=0,x={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var g="",w=0;w<r[0].body.length;w++){var S=Oe(r[0].body[w],"textord");g+=S.text}f=Number(g),y=f*2}var j=!y;d.body.forEach(function(A){for(var L=1;L<A.length;L+=2){var H=Oe(A[L],"styling"),F=Oe(H.body[0],"ordgroup");F.body.unshift(x)}if(j)y<A.length&&(y=A.length);else{var E=A.length/2;if(f<E)throw new pe("Too many math in a row: "+("expected "+f+", but got "+E),A[0])}});for(var q=0;q<y;++q){var k="r",T=0;q%2===1?k="l":q>0&&j&&(T=1),a[q]={type:"align",align:k,pregap:T,postgap:0}}return d.colSeparationType=j?"align":"alignat",d};It({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,t){var r=Rs(t[0]),a=r?[t[0]]:Oe(t[0],"ordgroup").body,s=a.map(function(d){var f=wc(d),y=f.text;if("lcr".includes(y))return{type:"align",align:y};if(y==="|")return{type:"separator",separator:"|"};if(y===":")return{type:"separator",separator:":"};throw new pe("Unknown column alignment: "+y,d)}),c={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return Fr(o.parser,c,qc(o.envName))},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var s=o.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new pe("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),a.cols=[{type:"align",align:r}]}}var c=Fr(o.parser,a,qc(o.envName)),d=Math.max(0,...c.body.map(f=>f.length));return c.cols=new Array(d).fill({type:"align",align:r}),t?{type:"leftright",mode:o.mode,body:[c],left:t[0],right:t[1],rightColor:void 0}:c},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var t={arraystretch:.5},r=Fr(o.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["subarray"],props:{numArgs:1},handler(o,t){var r=Rs(t[0]),a=r?[t[0]]:Oe(t[0],"ordgroup").body,s=a.map(function(d){var f=wc(d),y=f.text;if("lc".includes(y))return{type:"align",align:y};throw new pe("Unknown column alignment: "+y,d)});if(s.length>1)throw new pe("{subarray} can contain only one column");var c={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5};if(c=Fr(o.parser,c,"script"),c.body.length>0&&c.body[0].length>1)throw new pe("{subarray} can contain only one column");return c},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Fr(o.parser,t,qc(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Xp,htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){Iv.has(o.envName)&&Bs(o);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Sc(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Fr(o.parser,t,"display")},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Xp,htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){Bs(o);var t={autoTag:Sc(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Fr(o.parser,t,"display")},htmlBuilder:Nt,mathmlBuilder:Lt});It({type:"array",names:["CD"],props:{numArgs:0},handler(o){return Bs(o),Sv(o.parser)},htmlBuilder:Nt,mathmlBuilder:Lt});z("\\nonumber","\\gdef\\@eqnsw{0}");z("\\notag","\\nonumber");ve({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,t){throw new pe(o.funcName+" valid only within array environment")}});var E1=Qp;ve({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];if(s.type!=="ordgroup")throw new pe("Invalid environment name",s);for(var c="",d=0;d<s.body.length;++d)c+=Oe(s.body[d],"textord").text;if(a==="\\begin"){if(!E1.hasOwnProperty(c))throw new pe("No such environment: "+c,s);var f=E1[c],{args:y,optArgs:x}=r.parseArguments("\\begin{"+c+"}",f),g={mode:r.mode,envName:c,parser:r},w=f.handler(g,y,x);r.expect("\\end",!1);var S=r.nextToken,j=Oe(r.parseFunction(),"environment");if(j.name!==c)throw new pe("Mismatch: \\begin{"+c+"} matched by \\end{"+j.name+"}",S);return w}return{type:"environment",mode:r.mode,name:c,nameGroup:s}}});var Jp=(o,t)=>{var r=o.font,a=t.withFont(r);return Ze(o.body,a)},em=(o,t)=>{var r=o.font,a=t.withFont(r);return Je(o.body,a)},B1={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ve({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=qs(t[0]),c=a;return c in B1&&(c=B1[c]),{type:"font",mode:r.mode,font:c.slice(1),body:s}},htmlBuilder:Jp,mathmlBuilder:em});ve({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"mclass",mode:r.mode,mclass:Ds(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:tr(a)}}});ve({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a,breakOnTokenText:s}=o,{mode:c}=r,d=r.parseExpression(!0,s),f="math"+a.slice(1);return{type:"font",mode:c,font:f,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:Jp,mathmlBuilder:em});var Lv=(o,t)=>{var r=t.style,a=r.fracNum(),s=r.fracDen(),c;c=t.havingStyle(a);var d=Ze(o.numer,c,t);if(o.continued){var f=8.5/t.fontMetrics().ptPerEm,y=3.5/t.fontMetrics().ptPerEm;d.height=d.height<f?f:d.height,d.depth=d.depth<y?y:d.depth}c=t.havingStyle(s);var x=Ze(o.denom,c,t),g,w,S;o.hasBarLine?(o.barSize?(w=mn(o.barSize,t),g=Fo("frac-line",t,w)):g=Fo("frac-line",t),w=g.height,S=g.height):(g=null,w=0,S=t.fontMetrics().defaultRuleThickness);var j,q,k;r.size===Le.DISPLAY.size?(j=t.fontMetrics().num1,w>0?q=3*S:q=7*S,k=t.fontMetrics().denom1):(w>0?(j=t.fontMetrics().num2,q=S):(j=t.fontMetrics().num3,q=3*S),k=t.fontMetrics().denom2);var T;if(g){var L=t.fontMetrics().axisHeight;j-d.depth-(L+.5*w)<q&&(j+=q-(j-d.depth-(L+.5*w))),L-.5*w-(x.height-k)<q&&(k+=q-(L-.5*w-(x.height-k)));var H=-(L-.5*w);T=Ye({positionType:"individualShift",children:[{type:"elem",elem:x,shift:k},{type:"elem",elem:g,shift:H},{type:"elem",elem:d,shift:-j}]})}else{var A=j-d.depth-(x.height-k);A<q&&(j+=.5*(q-A),k+=.5*(q-A)),T=Ye({positionType:"individualShift",children:[{type:"elem",elem:x,shift:k},{type:"elem",elem:d,shift:-j}]})}c=t.havingStyle(r),T.height*=c.sizeMultiplier/t.sizeMultiplier,T.depth*=c.sizeMultiplier/t.sizeMultiplier;var F;r.size===Le.DISPLAY.size?F=t.fontMetrics().delim1:r.size===Le.SCRIPTSCRIPT.size?F=t.havingStyle(Le.SCRIPT).fontMetrics().delim2:F=t.fontMetrics().delim2;var E,G;return o.leftDelim==null?E=Ui(t,["mopen"]):E=oc(o.leftDelim,F,!0,t.havingStyle(r),o.mode,["mopen"]),o.continued?G=ue([]):o.rightDelim==null?G=Ui(t,["mclose"]):G=oc(o.rightDelim,F,!0,t.havingStyle(r),o.mode,["mclose"]),ue(["mord"].concat(c.sizingClasses(t)),[E,ue(["mfrac"],[T]),G],t)},Wv=(o,t)=>{var r=new me("mfrac",[Je(o.numer,t),Je(o.denom,t)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var a=mn(o.barSize,t);r.setAttribute("linethickness",ge(a))}if(o.leftDelim!=null||o.rightDelim!=null){var s=[];if(o.leftDelim!=null){var c=new me("mo",[new xn(o.leftDelim.replace("\\",""))]);c.setAttribute("fence","true"),s.push(c)}if(s.push(r),o.rightDelim!=null){var d=new me("mo",[new xn(o.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),s.push(d)}return bc(s)}return r},nm=(o,t)=>{if(!t)return o;var r={type:"styling",mode:o.mode,style:t,body:[o]};return r};ve({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0],c=t[1],d,f=null,y=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,f="(",y=")";break;case"\\\\bracefrac":d=!1,f="\\{",y="\\}";break;case"\\\\brackfrac":d=!1,f="[",y="]";break;default:throw new Error("Unrecognized genfrac command")}var x=a==="\\cfrac",g=null;return x||a.startsWith("\\d")?g="display":a.startsWith("\\t")&&(g="text"),nm({type:"genfrac",mode:r.mode,numer:s,denom:c,continued:x,hasBarLine:d,leftDelim:f,rightDelim:y,barSize:null},g)},htmlBuilder:Lv,mathmlBuilder:Wv});ve({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:t,funcName:r,token:a}=o,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:s,token:a}}});var F1=["display","text","script","scriptscript"],I1=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};ve({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,t){var{parser:r}=o,a=t[4],s=t[5],c=qs(t[0]),d=c.type==="atom"&&c.family==="open"?I1(c.text):null,f=qs(t[1]),y=f.type==="atom"&&f.family==="close"?I1(f.text):null,x=Oe(t[2],"size"),g,w=null;x.isBlank?g=!0:(w=x.value,g=w.number>0);var S=null,j=t[3];if(j.type==="ordgroup"){if(j.body.length>0){var q=Oe(j.body[0],"textord");S=F1[Number(q.text)]}}else j=Oe(j,"textord"),S=F1[Number(j.text)];return nm({type:"genfrac",mode:r.mode,numer:a,denom:s,continued:!1,hasBarLine:g,barSize:w,leftDelim:d,rightDelim:y},S)}});ve({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,t){var{parser:r,funcName:a,token:s}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Oe(t[0],"size").value,token:s}}});ve({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0],c=Oe(t[1],"infix").size;if(!c)throw new Error("\\\\abovefrac expected size, but got "+String(c));var d=t[2],f=c.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:d,continued:!1,hasBarLine:f,barSize:c,leftDelim:null,rightDelim:null}}});var tm=(o,t)=>{var r=t.style,a,s;o.type==="supsub"?(a=o.sup?Ze(o.sup,t.havingStyle(r.sup()),t):Ze(o.sub,t.havingStyle(r.sub()),t),s=Oe(o.base,"horizBrace")):s=Oe(o,"horizBrace");var c=Ze(s.base,t.havingBaseStyle(Le.DISPLAY)),d=Cs(s,t),f;if(s.isOver?(f=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:.1},{type:"elem",elem:d}]}),f.children[0].children[0].children[1].classes.push("svg-align")):(f=Ye({positionType:"bottom",positionData:c.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:c}]}),f.children[0].children[0].children[0].classes.push("svg-align")),a){var y=ue(["mord",s.isOver?"mover":"munder"],[f],t);s.isOver?f=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:y},{type:"kern",size:.2},{type:"elem",elem:a}]}):f=Ye({positionType:"bottom",positionData:y.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:y}]})}return ue(["mord",s.isOver?"mover":"munder"],[f],t)},Ov=(o,t)=>{var r=Ps(o.label);return new me(o.isOver?"mover":"munder",[Je(o.base,t),r])};ve({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:t[0]}},htmlBuilder:tm,mathmlBuilder:Ov});ve({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[1],s=Oe(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:$n(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,t)=>{var r=zn(o.body,t,!1);return av(o.href,[],r,t)},mathmlBuilder:(o,t)=>{var r=Br(o.body,t);return r instanceof me||(r=new me("mrow",[r])),r.setAttribute("href",o.href),r}});ve({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=Oe(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var s=[],c=0;c<a.length;c++){var d=a[c];d==="~"&&(d="\\textasciitilde"),s.push({type:"textord",mode:"text",text:d})}var f={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:a,body:$n(f)}}});ve({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,t){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:$n(t[0])}},htmlBuilder(o,t){var r=zn(o.body,t,!1);return or(r)},mathmlBuilder(o,t){return new me("mrow",nt(o.body,t))}});ve({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a,token:s}=o,c=Oe(t[0],"raw").string,d=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var f,y={};switch(a){case"\\htmlClass":y.class=c,f={command:"\\htmlClass",class:c};break;case"\\htmlId":y.id=c,f={command:"\\htmlId",id:c};break;case"\\htmlStyle":y.style=c,f={command:"\\htmlStyle",style:c};break;case"\\htmlData":{for(var x=c.split(","),g=0;g<x.length;g++){var w=x[g],S=w.indexOf("=");if(S<0)throw new pe("\\htmlData key/value '"+w+"' missing equals sign");var j=w.slice(0,S),q=w.slice(S+1);y["data-"+j.trim()]=q}f={command:"\\htmlData",attributes:y};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(f)?{type:"html",mode:r.mode,attributes:y,body:$n(d)}:r.formatUnsupportedCmd(a)},htmlBuilder:(o,t)=>{var r=zn(o.body,t,!1),a=["enclosing"];o.attributes.class&&a.push(...o.attributes.class.trim().split(/\s+/));var s=ue(a,r,t);for(var c in o.attributes)c!=="class"&&o.attributes.hasOwnProperty(c)&&s.setAttribute(c,o.attributes[c]);return s},mathmlBuilder:(o,t)=>Br(o.body,t)});ve({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:$n(t[0]),mathml:$n(t[1])}},htmlBuilder:(o,t)=>{var r=zn(o.html,t,!1);return or(r)},mathmlBuilder:(o,t)=>Br(o.mathml,t)});var Wl=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new pe("Invalid size: '"+t+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!bp(a))throw new pe("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};ve({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,t,r)=>{var{parser:a}=o,s={number:0,unit:"em"},c={number:.9,unit:"em"},d={number:0,unit:"em"},f="";if(r[0])for(var y=Oe(r[0],"raw").string,x=y.split(","),g=0;g<x.length;g++){var w=x[g].split("=");if(w.length===2){var S=w[1].trim();switch(w[0].trim()){case"alt":f=S;break;case"width":s=Wl(S);break;case"height":c=Wl(S);break;case"totalheight":d=Wl(S);break;default:throw new pe("Invalid key: '"+w[0]+"' in \\includegraphics.")}}}var j=Oe(t[0],"url").url;return f===""&&(f=j,f=f.replace(/^.*[\\/]/,""),f=f.substring(0,f.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:j})?{type:"includegraphics",mode:a.mode,alt:f,width:s,height:c,totalheight:d,src:j}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,t)=>{var r=mn(o.height,t),a=0;o.totalheight.number>0&&(a=mn(o.totalheight,t)-r);var s=0;o.width.number>0&&(s=mn(o.width,t));var c={height:ge(r+a)};s>0&&(c.width=ge(s)),a>0&&(c.verticalAlign=ge(-a));var d=new Xb(o.src,o.alt,c);return d.height=r,d.depth=a,d},mathmlBuilder:(o,t)=>{var r=new me("mglyph",[]);r.setAttribute("alt",o.alt);var a=mn(o.height,t),s=0;if(o.totalheight.number>0&&(s=mn(o.totalheight,t)-a,r.setAttribute("valign",ge(-s))),r.setAttribute("height",ge(a+s)),o.width.number>0){var c=mn(o.width,t);r.setAttribute("width",ge(c))}return r.setAttribute("src",o.src),r}});ve({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:a}=o,s=Oe(t[0],"size");if(r.settings.strict){var c=a[1]==="m",d=s.value.unit==="mu";c?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(o,t){return jp(o.dimension,t)},mathmlBuilder(o,t){var r=mn(o.dimension,t);return new Pp(r)}});ve({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:s}},htmlBuilder:(o,t)=>{var r;o.alignment==="clap"?(r=ue([],[Ze(o.body,t)]),r=ue(["inner"],[r],t)):r=ue(["inner"],[Ze(o.body,t)]);var a=ue(["fix"],[]),s=ue([o.alignment],[r,a],t),c=ue(["strut"]);return c.style.height=ge(s.height+s.depth),s.depth&&(c.style.verticalAlign=ge(-s.depth)),s.children.unshift(c),s=ue(["thinbox"],[s],t),ue(["mord","vbox"],[s],t)},mathmlBuilder:(o,t)=>{var r=new me("mpadded",[Je(o.body,t)]);if(o.alignment!=="rlap"){var a=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});ve({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){var{funcName:r,parser:a}=o,s=a.mode;a.switchMode("math");var c=r==="\\("?"\\)":"$",d=a.parseExpression(!1,c);return a.expect(c),a.switchMode(s),{type:"styling",mode:a.mode,style:"text",body:d}}});ve({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){throw new pe("Mismatched "+o.funcName)}});var N1=(o,t)=>{switch(t.style.size){case Le.DISPLAY.size:return o.display;case Le.TEXT.size:return o.text;case Le.SCRIPT.size:return o.script;case Le.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ve({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:$n(t[0]),text:$n(t[1]),script:$n(t[2]),scriptscript:$n(t[3])}},htmlBuilder:(o,t)=>{var r=N1(o,t),a=zn(r,t,!1);return or(a)},mathmlBuilder:(o,t)=>{var r=N1(o,t);return Br(r,t)}});var rm=(o,t,r,a,s,c,d)=>{o=ue([],[o]);var f=r&&tr(r),y,x;if(t){var g=Ze(t,a.havingStyle(s.sup()),a);x={elem:g,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-g.depth)}}if(r){var w=Ze(r,a.havingStyle(s.sub()),a);y={elem:w,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-w.height)}}var S;if(x&&y){var j=a.fontMetrics().bigOpSpacing5+y.elem.height+y.elem.depth+y.kern+o.depth+d;S=Ye({positionType:"bottom",positionData:j,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:ge(-c)},{type:"kern",size:y.kern},{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:ge(c)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if(y){var q=o.height-d;S=Ye({positionType:"top",positionData:q,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:ge(-c)},{type:"kern",size:y.kern},{type:"elem",elem:o}]})}else if(x){var k=o.depth+d;S=Ye({positionType:"bottom",positionData:k,children:[{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:ge(c)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return o;var T=[S];if(y&&c!==0&&!f){var A=ue(["mspace"],[],a);A.style.marginRight=ge(c),T.unshift(A)}return ue(["mop","op-limits"],T,a)},om=new Set(["\\smallint"]),Wo=(o,t)=>{var r,a,s=!1,c;o.type==="supsub"?(r=o.sup,a=o.sub,c=Oe(o.base,"op"),s=!0):c=Oe(o,"op");var d=t.style,f=!1;d.size===Le.DISPLAY.size&&c.symbol&&!om.has(c.name)&&(f=!0);var y;if(c.symbol){var x=f?"Size2-Regular":"Size1-Regular",g="";if((c.name==="\\oiint"||c.name==="\\oiiint")&&(g=c.name.slice(1),c.name=g==="oiint"?"\\iint":"\\iiint"),y=Hn(c.name,x,"math",t,["mop","op-symbol",f?"large-op":"small-op"]),g.length>0){var w=y.italic,S=qp(g+"Size"+(f?"2":"1"),t);y=Ye({positionType:"individualShift",children:[{type:"elem",elem:y,shift:0},{type:"elem",elem:S,shift:f?.08:0}]}),c.name="\\"+g,y.classes.unshift("mop"),y.italic=w}}else if(c.body){var j=zn(c.body,t,!0);j.length===1&&j[0]instanceof bt?(y=j[0],y.classes[0]="mop"):y=ue(["mop"],j,t)}else{for(var q=[],k=1;k<c.name.length;k++)q.push(gc(c.name[k],c.mode,t));y=ue(["mop"],q,t)}var T=0,A=0;return(y instanceof bt||c.name==="\\oiint"||c.name==="\\oiiint")&&!c.suppressBaseShift&&(T=(y.height-y.depth)/2-t.fontMetrics().axisHeight,A=y.italic),s?rm(y,r,a,t,d,A,T):(T&&(y.style.position="relative",y.style.top=ge(T)),y)},Ki=(o,t)=>{var r;if(o.symbol)r=new me("mo",[vt(o.name,o.mode)]),om.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new me("mo",nt(o.body,t));else{r=new me("mi",[new xn(o.name.slice(1))]);var a=new me("mo",[vt("⁡","text")]);o.parentIsSupSub?r=new me("mrow",[r,a]):r=Mp([r,a])}return r},Hv={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ve({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=a;return s.length===1&&(s=Hv[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Wo,mathmlBuilder:Ki});ve({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:$n(a)}},htmlBuilder:Wo,mathmlBuilder:Ki});var Gv={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ve({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Wo,mathmlBuilder:Ki});ve({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Wo,mathmlBuilder:Ki});ve({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:t,funcName:r}=o,a=r;return a.length===1&&(a=Gv[a]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Wo,mathmlBuilder:Ki});var im=(o,t)=>{var r,a,s=!1,c;o.type==="supsub"?(r=o.sup,a=o.sub,c=Oe(o.base,"operatorname"),s=!0):c=Oe(o,"operatorname");var d;if(c.body.length>0){for(var f=c.body.map(w=>{var S=w.text;return typeof S=="string"?{type:"textord",mode:w.mode,text:S}:w}),y=zn(f,t.withFont("mathrm"),!0),x=0;x<y.length;x++){var g=y[x];g instanceof bt&&(g.text=g.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=ue(["mop"],y,t)}else d=ue(["mop"],[],t);return s?rm(d,r,a,t,t.style,0,0):d},Uv=(o,t)=>{for(var r=nt(o.body,t.withFont("mathrm")),a=!0,s=0;s<r.length;s++){var c=r[s];if(!(c instanceof Pp))if(c instanceof me)switch(c.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=c.children[0];c.children.length===1&&d instanceof xn?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var f=r.map(g=>g.toText()).join("");r=[new xn(f)]}var y=new me("mi",r);y.setAttribute("mathvariant","normal");var x=new me("mo",[vt("⁡","text")]);return o.parentIsSupSub?new me("mrow",[y,x]):Mp([y,x])};ve({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"operatorname",mode:r.mode,body:$n(s),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:im,mathmlBuilder:Uv});z("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");so({type:"ordgroup",htmlBuilder(o,t){return o.semisimple?or(zn(o.body,t,!1)):ue(["mord"],zn(o.body,t,!0),t)},mathmlBuilder(o,t){return Br(o.body,t,!0)}});ve({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,t){var{parser:r}=o,a=t[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(o,t){var r=Ze(o.body,t.havingCrampedStyle()),a=Fo("overline-line",t),s=t.fontMetrics().defaultRuleThickness,c=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:a},{type:"kern",size:s}]});return ue(["mord","overline"],[c],t)},mathmlBuilder(o,t){var r=new me("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var a=new me("mover",[Je(o.body,t),r]);return a.setAttribute("accent","true"),a}});ve({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"phantom",mode:r.mode,body:$n(a)}},htmlBuilder:(o,t)=>{var r=zn(o.body,t.withPhantom(),!1);return or(r)},mathmlBuilder:(o,t)=>{var r=nt(o.body,t);return new me("mphantom",r)}});ve({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:(o,t)=>{var r=ue([],[Ze(o.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),ue(["mord"],[r],t)},mathmlBuilder:(o,t)=>{var r=nt($n(o.body),t),a=new me("mphantom",r),s=new me("mpadded",[a]);return s.setAttribute("height","0px"),s.setAttribute("depth","0px"),s}});ve({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(o,t)=>{var r=ue(["inner"],[Ze(o.body,t.withPhantom())]),a=ue(["fix"],[]);return ue(["mord","rlap"],[r,a],t)},mathmlBuilder:(o,t)=>{var r=nt($n(o.body),t),a=new me("mphantom",r),s=new me("mpadded",[a]);return s.setAttribute("width","0px"),s}});ve({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o,a=Oe(t[0],"size").value,s=t[1];return{type:"raisebox",mode:r.mode,dy:a,body:s}},htmlBuilder(o,t){var r=Ze(o.body,t),a=mn(o.dy,t);return Ye({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){var r=new me("mpadded",[Je(o.body,t)]),a=o.dy.number+o.dy.unit;return r.setAttribute("voffset",a),r}});ve({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:t}=o;return{type:"internal",mode:t.mode}}});ve({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,t,r){var{parser:a}=o,s=r[0],c=Oe(t[0],"size"),d=Oe(t[1],"size");return{type:"rule",mode:a.mode,shift:s&&Oe(s,"size").value,width:c.value,height:d.value}},htmlBuilder(o,t){var r=ue(["mord","rule"],[],t),a=mn(o.width,t),s=mn(o.height,t),c=o.shift?mn(o.shift,t):0;return r.style.borderRightWidth=ge(a),r.style.borderTopWidth=ge(s),r.style.bottom=ge(c),r.width=a,r.height=s+c,r.depth=-c,r.maxFontSize=s*1.125*t.sizeMultiplier,r},mathmlBuilder(o,t){var r=mn(o.width,t),a=mn(o.height,t),s=o.shift?mn(o.shift,t):0,c=t.color&&t.getColor()||"black",d=new me("mspace");d.setAttribute("mathbackground",c),d.setAttribute("width",ge(r)),d.setAttribute("height",ge(a));var f=new me("mpadded",[d]);return s>=0?f.setAttribute("height",ge(s)):(f.setAttribute("height",ge(s)),f.setAttribute("depth",ge(-s))),f.setAttribute("voffset",ge(s)),f}});function am(o,t,r){for(var a=zn(o,t,!1),s=t.sizeMultiplier/r.sizeMultiplier,c=0;c<a.length;c++){var d=a[c].classes.indexOf("sizing");d<0?Array.prototype.push.apply(a[c].classes,t.sizingClasses(r)):a[c].classes[d+1]==="reset-size"+t.size&&(a[c].classes[d+1]="reset-size"+r.size),a[c].height*=s,a[c].depth*=s}return or(a)}var L1=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Vv=(o,t)=>{var r=t.havingSize(o.size);return am(o.body,r,t)};ve({type:"sizing",names:L1,props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{breakOnTokenText:r,funcName:a,parser:s}=o,c=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:L1.indexOf(a)+1,body:c}},htmlBuilder:Vv,mathmlBuilder:(o,t)=>{var r=t.havingSize(o.size),a=nt(o.body,r),s=new me("mstyle",a);return s.setAttribute("mathsize",ge(r.sizeMultiplier)),s}});ve({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,t,r)=>{var{parser:a}=o,s=!1,c=!1,d=r[0]&&Oe(r[0],"ordgroup");if(d)for(var f="",y=0;y<d.body.length;++y){var x=d.body[y];if(f=x.text,f==="t")s=!0;else if(f==="b")c=!0;else{s=!1,c=!1;break}}else s=!0,c=!0;var g=t[0];return{type:"smash",mode:a.mode,body:g,smashHeight:s,smashDepth:c}},htmlBuilder:(o,t)=>{var r=ue([],[Ze(o.body,t)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].depth=0;var c=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return ue(["mord"],[c],t)},mathmlBuilder:(o,t)=>{var r=new me("mpadded",[Je(o.body,t)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ve({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:a}=o,s=r[0],c=t[0];return{type:"sqrt",mode:a.mode,body:c,index:s}},htmlBuilder(o,t){var r=Ze(o.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Io(r,t);var a=t.fontMetrics(),s=a.defaultRuleThickness,c=s;t.style.id<Le.TEXT.id&&(c=t.fontMetrics().xHeight);var d=s+c/4,f=r.height+r.depth+d+s,{span:y,ruleWidth:x,advanceWidth:g}=Cv(f,t),w=y.height-x;w>r.height+r.depth+d&&(d=(d+w-r.height-r.depth)/2);var S=y.height-r.height-d-x;r.style.paddingLeft=ge(g);var j=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+S)},{type:"elem",elem:y},{type:"kern",size:x}]});if(o.index){var q=t.havingStyle(Le.SCRIPTSCRIPT),k=Ze(o.index,q,t),T=.6*(j.height-j.depth),A=Ye({positionType:"shift",positionData:-T,children:[{type:"elem",elem:k}]}),L=ue(["root"],[A]);return ue(["mord","sqrt"],[L,j],t)}else return ue(["mord","sqrt"],[j],t)},mathmlBuilder(o,t){var{body:r,index:a}=o;return a?new me("mroot",[Je(r,t),Je(a,t)]):new me("msqrt",[Je(r,t)])}});var W1={display:Le.DISPLAY,text:Le.TEXT,script:Le.SCRIPT,scriptscript:Le.SCRIPTSCRIPT};ve({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,t){var{breakOnTokenText:r,funcName:a,parser:s}=o,c=s.parseExpression(!0,r),d=a.slice(1,a.length-5);return{type:"styling",mode:s.mode,style:d,body:c}},htmlBuilder(o,t){var r=W1[o.style],a=t.havingStyle(r).withFont("");return am(o.body,a,t)},mathmlBuilder(o,t){var r=W1[o.style],a=t.havingStyle(r),s=nt(o.body,a),c=new me("mstyle",s),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},f=d[o.style];return c.setAttribute("scriptlevel",f[0]),c.setAttribute("displaystyle",f[1]),c}});var Zv=function(t,r){var a=t.base;if(a)if(a.type==="op"){var s=a.limits&&(r.style.size===Le.DISPLAY.size||a.alwaysHandleSupSub);return s?Wo:null}else if(a.type==="operatorname"){var c=a.alwaysHandleSupSub&&(r.style.size===Le.DISPLAY.size||a.limits);return c?im:null}else{if(a.type==="accent")return tr(a.base)?zc:null;if(a.type==="horizBrace"){var d=!t.sub;return d===a.isOver?tm:null}else return null}else return null};so({type:"supsub",htmlBuilder(o,t){var r=Zv(o,t);if(r)return r(o,t);var{base:a,sup:s,sub:c}=o,d=Ze(a,t),f,y,x=t.fontMetrics(),g=0,w=0,S=a&&tr(a);if(s){var j=t.havingStyle(t.style.sup());f=Ze(s,j,t),S||(g=d.height-j.fontMetrics().supDrop*j.sizeMultiplier/t.sizeMultiplier)}if(c){var q=t.havingStyle(t.style.sub());y=Ze(c,q,t),S||(w=d.depth+q.fontMetrics().subDrop*q.sizeMultiplier/t.sizeMultiplier)}var k;t.style===Le.DISPLAY?k=x.sup1:t.style.cramped?k=x.sup3:k=x.sup2;var T=t.sizeMultiplier,A=ge(.5/x.ptPerEm/T),L=null;if(y){var H=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(d instanceof bt||H)&&(L=ge(-d.italic))}var F;if(f&&y){g=Math.max(g,k,f.depth+.25*x.xHeight),w=Math.max(w,x.sub2);var E=x.defaultRuleThickness,G=4*E;if(g-f.depth-(y.height-w)<G){w=G-(g-f.depth)+y.height;var I=.8*x.xHeight-(g-f.depth);I>0&&(g+=I,w-=I)}var Q=[{type:"elem",elem:y,shift:w,marginRight:A,marginLeft:L},{type:"elem",elem:f,shift:-g,marginRight:A}];F=Ye({positionType:"individualShift",children:Q})}else if(y){w=Math.max(w,x.sub1,y.height-.8*x.xHeight);var Y=[{type:"elem",elem:y,marginLeft:L,marginRight:A}];F=Ye({positionType:"shift",positionData:w,children:Y})}else if(f)g=Math.max(g,k,f.depth+.25*x.xHeight),F=Ye({positionType:"shift",positionData:-g,children:[{type:"elem",elem:f,marginRight:A}]});else throw new Error("supsub must have either sup or sub.");var te=ec(d,"right")||"mord";return ue([te],[d,ue(["msupsub"],[F])],t)},mathmlBuilder(o,t){var r=!1,a,s;o.base&&o.base.type==="horizBrace"&&(s=!!o.sup,s===o.base.isOver&&(r=!0,a=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var c=[Je(o.base,t)];o.sub&&c.push(Je(o.sub,t)),o.sup&&c.push(Je(o.sup,t));var d;if(r)d=a?"mover":"munder";else if(o.sub)if(o.sup){var x=o.base;x&&x.type==="op"&&x.limits&&t.style===Le.DISPLAY||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(t.style===Le.DISPLAY||x.limits)?d="munderover":d="msubsup"}else{var y=o.base;y&&y.type==="op"&&y.limits&&(t.style===Le.DISPLAY||y.alwaysHandleSupSub)||y&&y.type==="operatorname"&&y.alwaysHandleSupSub&&(y.limits||t.style===Le.DISPLAY)?d="munder":d="msub"}else{var f=o.base;f&&f.type==="op"&&f.limits&&(t.style===Le.DISPLAY||f.alwaysHandleSupSub)||f&&f.type==="operatorname"&&f.alwaysHandleSupSub&&(f.limits||t.style===Le.DISPLAY)?d="mover":d="msup"}return new me(d,c)}});so({type:"atom",htmlBuilder(o,t){return gc(o.text,o.mode,t,["m"+o.family])},mathmlBuilder(o,t){var r=new me("mo",[vt(o.text,o.mode)]);if(o.family==="bin"){var a=vc(o,t);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var sm={mi:"italic",mn:"normal",mtext:"normal"};so({type:"mathord",htmlBuilder(o,t){return Ms(o,t,"mathord")},mathmlBuilder(o,t){var r=new me("mi",[vt(o.text,o.mode,t)]),a=vc(o,t)||"italic";return a!==sm[r.type]&&r.setAttribute("mathvariant",a),r}});so({type:"textord",htmlBuilder(o,t){return Ms(o,t,"textord")},mathmlBuilder(o,t){var r=vt(o.text,o.mode,t),a=vc(o,t)||"normal",s;return o.mode==="text"?s=new me("mtext",[r]):/[0-9]/.test(o.text)?s=new me("mn",[r]):o.text==="\\prime"?s=new me("mo",[r]):s=new me("mi",[r]),a!==sm[s.type]&&s.setAttribute("mathvariant",a),s}});var Ol={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Hl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};so({type:"spacing",htmlBuilder(o,t){if(Hl.hasOwnProperty(o.text)){var r=Hl[o.text].className||"";if(o.mode==="text"){var a=Ms(o,t,"textord");return a.classes.push(r),a}else return ue(["mspace",r],[gc(o.text,o.mode,t)],t)}else{if(Ol.hasOwnProperty(o.text))return ue(["mspace",Ol[o.text]],[],t);throw new pe('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,t){var r;if(Hl.hasOwnProperty(o.text))r=new me("mtext",[new xn(" ")]);else{if(Ol.hasOwnProperty(o.text))return new me("mspace");throw new pe('Unknown type of space "'+o.text+'"')}return r}});var O1=()=>{var o=new me("mtd",[]);return o.setAttribute("width","50%"),o};so({type:"tag",mathmlBuilder(o,t){var r=new me("mtable",[new me("mtr",[O1(),new me("mtd",[Br(o.body,t)]),O1(),new me("mtd",[Br(o.tag,t)])])]);return r.setAttribute("width","100%"),r}});var H1={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},G1={"\\textbf":"textbf","\\textmd":"textmd"},Kv={"\\textit":"textit","\\textup":"textup"},U1=(o,t)=>{var r=o.font;if(r){if(H1[r])return t.withTextFontFamily(H1[r]);if(G1[r])return t.withTextFontWeight(G1[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(Kv[r])};ve({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"text",mode:r.mode,body:$n(s),font:a}},htmlBuilder(o,t){var r=U1(o,t),a=zn(o.body,r,!0);return ue(["mord","text"],a,r)},mathmlBuilder(o,t){var r=U1(o,t);return Br(o.body,r)}});ve({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ze(o.body,t),a=Fo("underline-line",t),s=t.fontMetrics().defaultRuleThickness,c=Ye({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:a},{type:"kern",size:3*s},{type:"elem",elem:r}]});return ue(["mord","underline"],[c],t)},mathmlBuilder(o,t){var r=new me("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var a=new me("munder",[Je(o.body,t),r]);return a.setAttribute("accentunder","true"),a}});ve({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ze(o.body,t),a=t.fontMetrics().axisHeight,s=.5*(r.height-a-(r.depth+a));return Ye({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){return new me("mpadded",[Je(o.body,t)],["vcenter"])}});ve({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,t,r){throw new pe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,t){for(var r=V1(o),a=[],s=t.havingStyle(t.style.text()),c=0;c<r.length;c++){var d=r[c];d==="~"&&(d="\\textasciitilde"),a.push(Hn(d,"Typewriter-Regular",o.mode,s,["mord","texttt"]))}return ue(["mord","text"].concat(s.sizingClasses(t)),kp(a),s)},mathmlBuilder(o,t){var r=new xn(V1(o)),a=new me("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var V1=o=>o.body.replace(/ /g,o.star?"␣":" "),Cr=Tp,lm=`[ \r
	]`,Qv="\\\\[a-zA-Z@]+",Yv="\\\\[^\uD800-\uDFFF]",Xv="("+Qv+")"+lm+"*",Jv=`\\\\(
|[ \r	]+
?)[ \r	]*`,ic="[̀-ͯ]",e7=new RegExp(ic+"+$"),n7="("+lm+"+)|"+(Jv+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(ic+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(ic+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Xv)+("|"+Yv+")");class Z1{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(n7,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new lt("EOF",new et(this,r,r));var a=this.tokenRegex.exec(t);if(a===null||a.index!==r)throw new pe("Unexpected character: '"+t[r]+"'",new lt(t[r],new et(this,r,r+1)));var s=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[s]===14){var c=t.indexOf(`
`,this.tokenRegex.lastIndex);return c===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=c+1,this.lex()}return new lt(s,new et(this,r,this.tokenRegex.lastIndex))}}class t7{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new pe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,a){if(a===void 0&&(a=!1),a){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var c=this.undefStack[this.undefStack.length-1];c&&!c.hasOwnProperty(t)&&(c[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var r7=Yp;z("\\noexpand",function(o){var t=o.popToken();return o.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});z("\\expandafter",function(o){var t=o.popToken();return o.expandOnce(!0),{tokens:[t],numArgs:0}});z("\\@firstoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[0],numArgs:0}});z("\\@secondoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[1],numArgs:0}});z("\\@ifnextchar",function(o){var t=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});z("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");z("\\TextOrMath",function(o){var t=o.consumeArgs(2);return o.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var K1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};z("\\char",function(o){var t=o.popToken(),r,a="";if(t.text==="'")r=8,t=o.popToken();else if(t.text==='"')r=16,t=o.popToken();else if(t.text==="`")if(t=o.popToken(),t.text[0]==="\\")a=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new pe("\\char` missing argument");a=t.text.charCodeAt(0)}else r=10;if(r){if(a=K1[t.text],a==null||a>=r)throw new pe("Invalid base-"+r+" digit "+t.text);for(var s;(s=K1[o.future().text])!=null&&s<r;)a*=r,a+=s,o.popToken()}return"\\@char{"+a+"}"});var Tc=(o,t,r,a)=>{var s=o.consumeArg().tokens;if(s.length!==1)throw new pe("\\newcommand's first argument must be a macro name");var c=s[0].text,d=o.isDefined(c);if(d&&!t)throw new pe("\\newcommand{"+c+"} attempting to redefine "+(c+"; use \\renewcommand"));if(!d&&!r)throw new pe("\\renewcommand{"+c+"} when command "+c+" does not yet exist; use \\newcommand");var f=0;if(s=o.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var y="",x=o.expandNextToken();x.text!=="]"&&x.text!=="EOF";)y+=x.text,x=o.expandNextToken();if(!y.match(/^\s*[0-9]+\s*$/))throw new pe("Invalid number of arguments: "+y);f=parseInt(y),s=o.consumeArg().tokens}return d&&a||o.macros.set(c,{tokens:s,numArgs:f}),""};z("\\newcommand",o=>Tc(o,!1,!0,!1));z("\\renewcommand",o=>Tc(o,!0,!1,!1));z("\\providecommand",o=>Tc(o,!0,!0,!0));z("\\message",o=>{var t=o.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});z("\\errmessage",o=>{var t=o.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});z("\\show",o=>{var t=o.popToken(),r=t.text;return console.log(t,o.macros.get(r),Cr[r],nn.math[r],nn.text[r]),""});z("\\bgroup","{");z("\\egroup","}");z("~","\\nobreakspace");z("\\lq","`");z("\\rq","'");z("\\aa","\\r a");z("\\AA","\\r A");z("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");z("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");z("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");z("ℬ","\\mathscr{B}");z("ℰ","\\mathscr{E}");z("ℱ","\\mathscr{F}");z("ℋ","\\mathscr{H}");z("ℐ","\\mathscr{I}");z("ℒ","\\mathscr{L}");z("ℳ","\\mathscr{M}");z("ℛ","\\mathscr{R}");z("ℭ","\\mathfrak{C}");z("ℌ","\\mathfrak{H}");z("ℨ","\\mathfrak{Z}");z("\\Bbbk","\\Bbb{k}");z("·","\\cdotp");z("\\llap","\\mathllap{\\textrm{#1}}");z("\\rlap","\\mathrlap{\\textrm{#1}}");z("\\clap","\\mathclap{\\textrm{#1}}");z("\\mathstrut","\\vphantom{(}");z("\\underbar","\\underline{\\text{#1}}");z("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');z("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");z("\\ne","\\neq");z("≠","\\neq");z("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");z("∉","\\notin");z("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");z("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");z("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");z("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");z("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");z("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");z("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");z("⟂","\\perp");z("‼","\\mathclose{!\\mkern-0.8mu!}");z("∌","\\notni");z("⌜","\\ulcorner");z("⌝","\\urcorner");z("⌞","\\llcorner");z("⌟","\\lrcorner");z("©","\\copyright");z("®","\\textregistered");z("️","\\textregistered");z("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');z("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');z("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');z("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');z("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");z("⋮","\\vdots");z("\\varGamma","\\mathit{\\Gamma}");z("\\varDelta","\\mathit{\\Delta}");z("\\varTheta","\\mathit{\\Theta}");z("\\varLambda","\\mathit{\\Lambda}");z("\\varXi","\\mathit{\\Xi}");z("\\varPi","\\mathit{\\Pi}");z("\\varSigma","\\mathit{\\Sigma}");z("\\varUpsilon","\\mathit{\\Upsilon}");z("\\varPhi","\\mathit{\\Phi}");z("\\varPsi","\\mathit{\\Psi}");z("\\varOmega","\\mathit{\\Omega}");z("\\substack","\\begin{subarray}{c}#1\\end{subarray}");z("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");z("\\boxed","\\fbox{$\\displaystyle{#1}$}");z("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");z("\\implies","\\DOTSB\\;\\Longrightarrow\\;");z("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");z("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");z("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Q1={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},o7=new Set(["bin","rel"]);z("\\dots",function(o){var t="\\dotso",r=o.expandAfterFuture().text;return r in Q1?t=Q1[r]:(r.slice(0,4)==="\\not"||r in nn.math&&o7.has(nn.math[r].group))&&(t="\\dotsb"),t});var Ac={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};z("\\dotso",function(o){var t=o.future().text;return t in Ac?"\\ldots\\,":"\\ldots"});z("\\dotsc",function(o){var t=o.future().text;return t in Ac&&t!==","?"\\ldots\\,":"\\ldots"});z("\\cdots",function(o){var t=o.future().text;return t in Ac?"\\@cdots\\,":"\\@cdots"});z("\\dotsb","\\cdots");z("\\dotsm","\\cdots");z("\\dotsi","\\!\\cdots");z("\\dotsx","\\ldots\\,");z("\\DOTSI","\\relax");z("\\DOTSB","\\relax");z("\\DOTSX","\\relax");z("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");z("\\,","\\tmspace+{3mu}{.1667em}");z("\\thinspace","\\,");z("\\>","\\mskip{4mu}");z("\\:","\\tmspace+{4mu}{.2222em}");z("\\medspace","\\:");z("\\;","\\tmspace+{5mu}{.2777em}");z("\\thickspace","\\;");z("\\!","\\tmspace-{3mu}{.1667em}");z("\\negthinspace","\\!");z("\\negmedspace","\\tmspace-{4mu}{.2222em}");z("\\negthickspace","\\tmspace-{5mu}{.277em}");z("\\enspace","\\kern.5em ");z("\\enskip","\\hskip.5em\\relax");z("\\quad","\\hskip1em\\relax");z("\\qquad","\\hskip2em\\relax");z("\\tag","\\@ifstar\\tag@literal\\tag@paren");z("\\tag@paren","\\tag@literal{({#1})}");z("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new pe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});z("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");z("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");z("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");z("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");z("\\newline","\\\\\\relax");z("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var cm=ge(Ft["Main-Regular"][84][1]-.7*Ft["Main-Regular"][65][1]);z("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+cm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");z("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+cm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");z("\\hspace","\\@ifstar\\@hspacer\\@hspace");z("\\@hspace","\\hskip #1\\relax");z("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");z("\\ordinarycolon",":");z("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");z("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');z("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');z("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');z("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');z("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');z("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');z("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');z("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');z("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');z("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');z("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');z("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');z("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');z("∷","\\dblcolon");z("∹","\\eqcolon");z("≔","\\coloneqq");z("≕","\\eqqcolon");z("⩴","\\Coloneqq");z("\\ratio","\\vcentcolon");z("\\coloncolon","\\dblcolon");z("\\colonequals","\\coloneqq");z("\\coloncolonequals","\\Coloneqq");z("\\equalscolon","\\eqqcolon");z("\\equalscoloncolon","\\Eqqcolon");z("\\colonminus","\\coloneq");z("\\coloncolonminus","\\Coloneq");z("\\minuscolon","\\eqcolon");z("\\minuscoloncolon","\\Eqcolon");z("\\coloncolonapprox","\\Colonapprox");z("\\coloncolonsim","\\Colonsim");z("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");z("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");z("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");z("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");z("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");z("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");z("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");z("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");z("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");z("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");z("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");z("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");z("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");z("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");z("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");z("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");z("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");z("\\nleqq","\\html@mathml{\\@nleqq}{≰}");z("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");z("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");z("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");z("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");z("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");z("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");z("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");z("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");z("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");z("\\imath","\\html@mathml{\\@imath}{ı}");z("\\jmath","\\html@mathml{\\@jmath}{ȷ}");z("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");z("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");z("⟦","\\llbracket");z("⟧","\\rrbracket");z("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");z("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");z("⦃","\\lBrace");z("⦄","\\rBrace");z("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");z("⦵","\\minuso");z("\\darr","\\downarrow");z("\\dArr","\\Downarrow");z("\\Darr","\\Downarrow");z("\\lang","\\langle");z("\\rang","\\rangle");z("\\uarr","\\uparrow");z("\\uArr","\\Uparrow");z("\\Uarr","\\Uparrow");z("\\N","\\mathbb{N}");z("\\R","\\mathbb{R}");z("\\Z","\\mathbb{Z}");z("\\alef","\\aleph");z("\\alefsym","\\aleph");z("\\Alpha","\\mathrm{A}");z("\\Beta","\\mathrm{B}");z("\\bull","\\bullet");z("\\Chi","\\mathrm{X}");z("\\clubs","\\clubsuit");z("\\cnums","\\mathbb{C}");z("\\Complex","\\mathbb{C}");z("\\Dagger","\\ddagger");z("\\diamonds","\\diamondsuit");z("\\empty","\\emptyset");z("\\Epsilon","\\mathrm{E}");z("\\Eta","\\mathrm{H}");z("\\exist","\\exists");z("\\harr","\\leftrightarrow");z("\\hArr","\\Leftrightarrow");z("\\Harr","\\Leftrightarrow");z("\\hearts","\\heartsuit");z("\\image","\\Im");z("\\infin","\\infty");z("\\Iota","\\mathrm{I}");z("\\isin","\\in");z("\\Kappa","\\mathrm{K}");z("\\larr","\\leftarrow");z("\\lArr","\\Leftarrow");z("\\Larr","\\Leftarrow");z("\\lrarr","\\leftrightarrow");z("\\lrArr","\\Leftrightarrow");z("\\Lrarr","\\Leftrightarrow");z("\\Mu","\\mathrm{M}");z("\\natnums","\\mathbb{N}");z("\\Nu","\\mathrm{N}");z("\\Omicron","\\mathrm{O}");z("\\plusmn","\\pm");z("\\rarr","\\rightarrow");z("\\rArr","\\Rightarrow");z("\\Rarr","\\Rightarrow");z("\\real","\\Re");z("\\reals","\\mathbb{R}");z("\\Reals","\\mathbb{R}");z("\\Rho","\\mathrm{P}");z("\\sdot","\\cdot");z("\\sect","\\S");z("\\spades","\\spadesuit");z("\\sub","\\subset");z("\\sube","\\subseteq");z("\\supe","\\supseteq");z("\\Tau","\\mathrm{T}");z("\\thetasym","\\vartheta");z("\\weierp","\\wp");z("\\Zeta","\\mathrm{Z}");z("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");z("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");z("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");z("\\bra","\\mathinner{\\langle{#1}|}");z("\\ket","\\mathinner{|{#1}\\rangle}");z("\\braket","\\mathinner{\\langle{#1}\\rangle}");z("\\Bra","\\left\\langle#1\\right|");z("\\Ket","\\left|#1\\right\\rangle");var um=o=>t=>{var r=t.consumeArg().tokens,a=t.consumeArg().tokens,s=t.consumeArg().tokens,c=t.consumeArg().tokens,d=t.macros.get("|"),f=t.macros.get("\\|");t.macros.beginGroup();var y=w=>S=>{o&&(S.macros.set("|",d),s.length&&S.macros.set("\\|",f));var j=w;if(!w&&s.length){var q=S.future();q.text==="|"&&(S.popToken(),j=!0)}return{tokens:j?s:a,numArgs:0}};t.macros.set("|",y(!1)),s.length&&t.macros.set("\\|",y(!0));var x=t.consumeArg().tokens,g=t.expandTokens([...c,...x,...r]);return t.macros.endGroup(),{tokens:g.reverse(),numArgs:0}};z("\\bra@ket",um(!1));z("\\bra@set",um(!0));z("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");z("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");z("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");z("\\angln","{\\angl n}");z("\\blue","\\textcolor{##6495ed}{#1}");z("\\orange","\\textcolor{##ffa500}{#1}");z("\\pink","\\textcolor{##ff00af}{#1}");z("\\red","\\textcolor{##df0030}{#1}");z("\\green","\\textcolor{##28ae7b}{#1}");z("\\gray","\\textcolor{gray}{#1}");z("\\purple","\\textcolor{##9d38bd}{#1}");z("\\blueA","\\textcolor{##ccfaff}{#1}");z("\\blueB","\\textcolor{##80f6ff}{#1}");z("\\blueC","\\textcolor{##63d9ea}{#1}");z("\\blueD","\\textcolor{##11accd}{#1}");z("\\blueE","\\textcolor{##0c7f99}{#1}");z("\\tealA","\\textcolor{##94fff5}{#1}");z("\\tealB","\\textcolor{##26edd5}{#1}");z("\\tealC","\\textcolor{##01d1c1}{#1}");z("\\tealD","\\textcolor{##01a995}{#1}");z("\\tealE","\\textcolor{##208170}{#1}");z("\\greenA","\\textcolor{##b6ffb0}{#1}");z("\\greenB","\\textcolor{##8af281}{#1}");z("\\greenC","\\textcolor{##74cf70}{#1}");z("\\greenD","\\textcolor{##1fab54}{#1}");z("\\greenE","\\textcolor{##0d923f}{#1}");z("\\goldA","\\textcolor{##ffd0a9}{#1}");z("\\goldB","\\textcolor{##ffbb71}{#1}");z("\\goldC","\\textcolor{##ff9c39}{#1}");z("\\goldD","\\textcolor{##e07d10}{#1}");z("\\goldE","\\textcolor{##a75a05}{#1}");z("\\redA","\\textcolor{##fca9a9}{#1}");z("\\redB","\\textcolor{##ff8482}{#1}");z("\\redC","\\textcolor{##f9685d}{#1}");z("\\redD","\\textcolor{##e84d39}{#1}");z("\\redE","\\textcolor{##bc2612}{#1}");z("\\maroonA","\\textcolor{##ffbde0}{#1}");z("\\maroonB","\\textcolor{##ff92c6}{#1}");z("\\maroonC","\\textcolor{##ed5fa6}{#1}");z("\\maroonD","\\textcolor{##ca337c}{#1}");z("\\maroonE","\\textcolor{##9e034e}{#1}");z("\\purpleA","\\textcolor{##ddd7ff}{#1}");z("\\purpleB","\\textcolor{##c6b9fc}{#1}");z("\\purpleC","\\textcolor{##aa87ff}{#1}");z("\\purpleD","\\textcolor{##7854ab}{#1}");z("\\purpleE","\\textcolor{##543b78}{#1}");z("\\mintA","\\textcolor{##f5f9e8}{#1}");z("\\mintB","\\textcolor{##edf2df}{#1}");z("\\mintC","\\textcolor{##e0e5cc}{#1}");z("\\grayA","\\textcolor{##f6f7f7}{#1}");z("\\grayB","\\textcolor{##f0f1f2}{#1}");z("\\grayC","\\textcolor{##e3e5e6}{#1}");z("\\grayD","\\textcolor{##d6d8da}{#1}");z("\\grayE","\\textcolor{##babec2}{#1}");z("\\grayF","\\textcolor{##888d93}{#1}");z("\\grayG","\\textcolor{##626569}{#1}");z("\\grayH","\\textcolor{##3b3e40}{#1}");z("\\grayI","\\textcolor{##21242c}{#1}");z("\\kaBlue","\\textcolor{##314453}{#1}");z("\\kaGreen","\\textcolor{##71B307}{#1}");var dm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class i7{constructor(t,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new t7(r7,r.macros),this.mode=a,this.stack=[]}feed(t){this.lexer=new Z1(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,a,s;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:a}=this.consumeArg(["]"])}else({tokens:s,start:r,end:a}=this.consumeArg());return this.pushToken(new lt("EOF",a.loc)),this.pushTokens(s),new lt("",et.range(r,a))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],a=t&&t.length>0;a||this.consumeSpaces();var s=this.future(),c,d=0,f=0;do{if(c=this.popToken(),r.push(c),c.text==="{")++d;else if(c.text==="}"){if(--d,d===-1)throw new pe("Extra }",c)}else if(c.text==="EOF")throw new pe("Unexpected end of input in a macro argument, expected '"+(t&&a?t[f]:"}")+"'",c);if(t&&a)if((d===0||d===1&&t[f]==="{")&&c.text===t[f]){if(++f,f===t.length){r.splice(-f,f);break}}else f=0}while(d!==0||a);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:c}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new pe("The length of delimiters doesn't match the number of args!");for(var a=r[0],s=0;s<a.length;s++){var c=this.popToken();if(a[s]!==c.text)throw new pe("Use of the macro doesn't match its definition",c)}}for(var d=[],f=0;f<t;f++)d.push(this.consumeArg(r&&r[f+1]).tokens);return d}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new pe("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),a=r.text,s=r.noexpand?null:this._getExpansion(a);if(s==null||t&&s.unexpandable){if(t&&s==null&&a[0]==="\\"&&!this.isDefined(a))throw new pe("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var c=s.tokens,d=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){c=c.slice();for(var f=c.length-1;f>=0;--f){var y=c[f];if(y.text==="#"){if(f===0)throw new pe("Incomplete placeholder at end of macro body",y);if(y=c[--f],y.text==="#")c.splice(f+1,1);else if(/^[1-9]$/.test(y.text))c.splice(f,2,...d[+y.text-1]);else throw new pe("Not a valid argument number",y)}}}return this.pushTokens(c),c.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new lt(t)]):void 0}expandTokens(t){var r=[],a=this.stack.length;for(this.pushTokens(t);this.stack.length>a;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(a=>a.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var a=this.lexer.catcodes[t];if(a!=null&&a!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var c=0;if(s.includes("#"))for(var d=s.replace(/##/g,"");d.includes("#"+(c+1));)++c;for(var f=new Z1(s,this.settings),y=[],x=f.lex();x.text!=="EOF";)y.push(x),x=f.lex();y.reverse();var g={tokens:y,numArgs:c};return g}return s}isDefined(t){return this.macros.has(t)||Cr.hasOwnProperty(t)||nn.math.hasOwnProperty(t)||nn.text.hasOwnProperty(t)||dm.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Cr.hasOwnProperty(t)&&!Cr[t].primitive}}var Y1=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,$s=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Gl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},X1={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Fs{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new i7(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new pe("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new lt("}")),this.gullet.pushTokens(t);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(t,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(Fs.endOfExpression.has(s.text)||r&&s.text===r||t&&Cr[s.text]&&Cr[s.text].infix)break;var c=this.parseAtom(r);if(c){if(c.type==="internal")continue}else break;a.push(c)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(t){for(var r=-1,a,s=0;s<t.length;s++)if(t[s].type==="infix"){if(r!==-1)throw new pe("only one infix operator per group",t[s].token);r=s,a=t[s].replaceWith}if(r!==-1&&a){var c,d,f=t.slice(0,r),y=t.slice(r+1);f.length===1&&f[0].type==="ordgroup"?c=f[0]:c={type:"ordgroup",mode:this.mode,body:f},y.length===1&&y[0].type==="ordgroup"?d=y[0]:d={type:"ordgroup",mode:this.mode,body:y};var x;return a==="\\\\abovefrac"?x=this.callFunction(a,[c,t[r],d],[]):x=this.callFunction(a,[c,d],[]),[x]}else return t}handleSupSubscript(t){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var s;do{var c;s=this.parseGroup(t)}while(((c=s)==null?void 0:c.type)==="internal");if(!s)throw new pe("Expected group after '"+a+"'",r);return s}formatUnsupportedCmd(t){for(var r=[],a=0;a<t.length;a++)r.push({type:"textord",mode:"text",text:t[a]});var s={type:"text",mode:this.mode,body:r},c={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return c}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,s;;){this.consumeSpaces();var c=this.fetch();if(c.text==="\\limits"||c.text==="\\nolimits"){if(r&&r.type==="op"){var d=c.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=c.text==="\\limits");else throw new pe("Limit controls must follow a math operator",c);this.consume()}else if(c.text==="^"){if(a)throw new pe("Double superscript",c);a=this.handleSupSubscript("superscript")}else if(c.text==="_"){if(s)throw new pe("Double subscript",c);s=this.handleSupSubscript("subscript")}else if(c.text==="'"){if(a)throw new pe("Double superscript",c);var f={type:"textord",mode:this.mode,text:"\\prime"},y=[f];for(this.consume();this.fetch().text==="'";)y.push(f),this.consume();this.fetch().text==="^"&&y.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:y}}else if($s[c.text]){var x=Y1.test(c.text),g=[];for(g.push(new lt($s[c.text])),this.consume();;){var w=this.fetch().text;if(!$s[w]||Y1.test(w)!==x)break;g.unshift(new lt($s[w])),this.consume()}var S=this.subparse(g);x?s={type:"ordgroup",mode:"math",body:S}:a={type:"ordgroup",mode:"math",body:S}}else break}return a||s?{type:"supsub",mode:this.mode,base:r,sup:a,sub:s}:r}parseFunction(t,r){var a=this.fetch(),s=a.text,c=Cr[s];if(!c)return null;if(this.consume(),r&&r!=="atom"&&!c.allowedInArgument)throw new pe("Got function '"+s+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!c.allowedInText)throw new pe("Can't use function '"+s+"' in text mode",a);if(this.mode==="math"&&c.allowedInMath===!1)throw new pe("Can't use function '"+s+"' in math mode",a);var{args:d,optArgs:f}=this.parseArguments(s,c);return this.callFunction(s,d,f,a,t)}callFunction(t,r,a,s,c){var d={funcName:t,parser:this,token:s,breakOnTokenText:c},f=Cr[t];if(f&&f.handler)return f.handler(d,r,a);throw new pe("No function handler for "+t)}parseArguments(t,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var s=[],c=[],d=0;d<a;d++){var f=r.argTypes&&r.argTypes[d],y=d<r.numOptionalArgs;(r.primitive&&f==null||r.type==="sqrt"&&d===1&&c[0]==null)&&(f="primitive");var x=this.parseGroupOfType("argument to '"+t+"'",f,y);if(y)c.push(x);else if(x!=null)s.push(x);else throw new pe("Null argument, please report this as a bug")}return{args:s,optArgs:c}}parseGroupOfType(t,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var s=this.parseArgumentGroup(a,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text"}:null}case"raw":{var c=this.parseStringGroup("raw",a);return c!=null?{type:"raw",mode:"text",string:c.text}:null}case"primitive":{if(a)throw new pe("A primitive argument cannot be optional");var d=this.parseGroup(t);if(d==null)throw new pe("Expected group as "+t,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new pe("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var s="",c;(c=this.fetch()).text!=="EOF";)s+=c.text,this.consume();return this.consume(),a.text=s,a}parseRegexGroup(t,r){for(var a=this.fetch(),s=a,c="",d;(d=this.fetch()).text!=="EOF"&&t.test(c+d.text);)s=d,c+=s.text,this.consume();if(c==="")throw new pe("Invalid "+r+": '"+a.text+"'",a);return a.range(s,c)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new pe("Invalid color: '"+r.text+"'",r);var s=a[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(t){var r,a=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",a=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new pe("Invalid size: '"+r.text+"'",r);var c={number:+(s[1]+s[2]),unit:s[3]};if(!bp(c))throw new pe("Invalid unit: '"+c.unit+"'",r);return{type:"size",mode:this.mode,value:c,isBlank:a}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(t,r){var a=this.gullet.scanArgument(t);if(a==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var c=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:a.loc,body:c};return r&&this.switchMode(s),d}parseGroup(t,r){var a=this.fetch(),s=a.text,c;if(s==="{"||s==="\\begingroup"){this.consume();var d=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var f=this.parseExpression(!1,d),y=this.fetch();this.expect(d),this.gullet.endGroup(),c={type:"ordgroup",mode:this.mode,loc:et.range(a,y),body:f,semisimple:s==="\\begingroup"||void 0}}else if(c=this.parseFunction(r,t)||this.parseSymbol(),c==null&&s[0]==="\\"&&!dm.hasOwnProperty(s)){if(this.settings.throwOnError)throw new pe("Undefined control sequence: "+s,a);c=this.formatUnsupportedCmd(s),this.consume()}return c}formLigatures(t){for(var r=t.length-1,a=0;a<r;++a){var s=t[a],c=s.text;c==="-"&&t[a+1].text==="-"&&(a+1<r&&t[a+2].text==="-"?(t.splice(a,3,{type:"textord",mode:"text",loc:et.range(s,t[a+2]),text:"---"}),r-=2):(t.splice(a,2,{type:"textord",mode:"text",loc:et.range(s,t[a+1]),text:"--"}),r-=1)),(c==="'"||c==="`")&&t[a+1].text===c&&(t.splice(a,2,{type:"textord",mode:"text",loc:et.range(s,t[a+1]),text:c+c}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),s=a.charAt(0)==="*";if(s&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new pe(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:s}}X1.hasOwnProperty(r[0])&&!nn[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=X1[r[0]]+r.slice(1));var c=e7.exec(r);c&&(r=r.substring(0,c.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(nn[this.mode][r]){this.settings.strict&&this.mode==="math"&&Xl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var f=nn[this.mode][r].group,y=et.range(t),x;if(nv.hasOwnProperty(f)){var g=f;x={type:"atom",mode:this.mode,family:g,loc:y,text:r}}else x={type:f,mode:this.mode,loc:y,text:r};d=x}else if(r.charCodeAt(0)>=128)this.settings.strict&&(xp(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),d={type:"textord",mode:"text",loc:et.range(t),text:r};else return null;if(this.consume(),c)for(var w=0;w<c[0].length;w++){var S=c[0][w];if(!Gl[S])throw new pe("Unknown accent ' "+S+"'",t);var j=Gl[S][this.mode]||Gl[S].text;if(!j)throw new pe("Accent "+S+" unsupported in "+this.mode+" mode",t);d={type:"accent",mode:this.mode,loc:et.range(t),label:j,isStretchy:!1,isShifty:!0,base:d}}return d}}Fs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Mc=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new Fs(t,r);delete a.gullet.macros.current["\\df@tag"];var s=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new pe("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:a.subparse([new lt("\\df@tag")])}]}return s},pm=function(t,r,a){r.textContent="";var s=Pc(t,a).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),pm=function(){throw new pe("KaTeX doesn't work in quirks mode.")});var a7=function(t,r){var a=Pc(t,r).toMarkup();return a},s7=function(t,r){var a=new fc(r);return Mc(t,a)},mm=function(t,r,a){if(a.throwOnError||!(t instanceof pe))throw t;var s=ue(["katex-error"],[new bt(r)]);return s.setAttribute("title",t.toString()),s.setAttribute("style","color:"+a.errorColor),s},Pc=function(t,r){var a=new fc(r);try{var s=Mc(t,a);return $v(s,t,a)}catch(c){return mm(c,t,a)}},l7=function(t,r){var a=new fc(r);try{var s=Mc(t,a);return gv(s,t,a)}catch(c){return mm(c,t,a)}},c7="0.16.33",u7={Span:Zi,Anchor:$c,SymbolNode:bt,SvgNode:nr,PathNode:Dr,LineNode:Yl},J1={version:c7,render:pm,renderToString:a7,ParseError:pe,SETTINGS_SCHEMA:vs,__parse:s7,__renderToDomTree:Pc,__renderToHTMLTree:l7,__setFontMetrics:Vb,__defineSymbol:p,__defineFunction:ve,__defineMacro:z,__domTree:u7};function Sn(o){if(!o)return"";let t=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,a)=>{try{return J1.renderToString(a.trim(),{displayMode:!0,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}});return t=t.replace(/\$([^$\n]+)\$/g,(r,a)=>{try{return J1.renderToString(a.trim(),{displayMode:!1,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}}),t}function d7({nodeId:o,nodes:t,adjacency:r,lang:a,SCOPE_COLORS:s,SCOPE_LABELS:c,SECTIONS:d,belief:f,evidence:y,onClose:x,onNavigate:g,onShowPath:w,onQuizMe:S,onQuizMatura:j,QUESTION_BANK:q}){var fe,be,ze;const[k,T]=D.useState(null),A=t.find(ie=>ie.id===o);if(!A)return null;const L=Object.fromEntries(t.map(ie=>[ie.id,ie])),H=ie=>{var X,$e;return a==="pl"?(X=L[ie])==null?void 0:X.labelPl:($e=L[ie])==null?void 0:$e.label},F=a==="pl"?A.labelPl:A.label,E=(s==null?void 0:s[A.scope])??"#4a9eff",G=((fe=c==null?void 0:c[A.scope])==null?void 0:fe[a==="pl"?"pl":"en"])??"",I=((be=d==null?void 0:d[A.section])==null?void 0:be.label)??"",Q=r.prereqs[o]??[],Y=r.dependents[o]??[],te=A.resources??[],re=f==null?void 0:f[o],J=k!=null?te[k]??null:null,ee={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return m.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:_.bg,fontFamily:qe,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[m.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),m.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[m.jsxs("div",{style:{display:"flex",gap:8,marginBottom:28},children:[m.jsxs("button",{onClick:x,style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:["← ",N("topicBack",a)]}),w&&Q.length>0&&m.jsx("button",{onClick:()=>w(o),style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${E}30`,background:`${E}08`,color:E,cursor:"pointer"},children:N("topicLearnPath",a)})]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[m.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:E,opacity:.8,flexShrink:0}}),m.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:_.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:Sn(F??"")}})]}),m.jsxs("div",{style:{fontSize:12,color:_.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[I," · ",G," · ",N("level",a)," ",A.level]}),re&&m.jsx(p7,{nodeId:o,status:re,evidence:y,adjacency:r,belief:f,nodes:t,lang:a,onNavigate:g}),A.body&&m.jsx(m7,{body:A.body,lang:a}),S&&((ze=q==null?void 0:q[o])==null?void 0:ze.length)>0&&(()=>{const ie=q[o].filter(X=>X.source==="cke").length;return m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:20},children:[m.jsx("button",{onClick:()=>S(o),style:{width:"100%",padding:"12px 16px",fontSize:13,fontWeight:600,fontFamily:qe,borderRadius:8,border:`1px solid ${E}40`,background:`${E}10`,color:E,cursor:"pointer",transition:"background 0.15s"},onMouseEnter:X=>{X.currentTarget.style.background=`${E}20`},onMouseLeave:X=>{X.currentTarget.style.background=`${E}10`},children:N("topicQuizMe",a)}),ie>0&&j&&m.jsxs("button",{onClick:()=>j(o),style:{width:"100%",padding:"12px 16px",fontSize:13,fontWeight:600,fontFamily:qe,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",cursor:"pointer",transition:"background 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:8},onMouseEnter:X=>{X.currentTarget.style.background="#FFD16620"},onMouseLeave:X=>{X.currentTarget.style.background="#FFD16610"},children:[m.jsx("span",{children:a==="pl"?"Pytania maturalne (CKE)":"Past matura questions (CKE)"}),m.jsx("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:4,background:"#FFD16622",letterSpacing:"0.04em"},children:ie})]})]})})(),m.jsx(ep,{title:N("prerequisites",a),color:"#4a9eff",empty:Q.length===0,emptyText:N("noPrereqs",a),children:Q.map(ie=>{var X;return m.jsx(np,{label:H(ie),color:(s==null?void 0:s[(X=L[ie])==null?void 0:X.scope])??"#4a9eff",status:f==null?void 0:f[ie],onClick:()=>g(ie)},ie)})}),m.jsx(ep,{title:N("enables",a),color:"#3dc9b0",empty:Y.length===0,emptyText:N("noDependents",a),children:Y.map(ie=>{var X;return m.jsx(np,{label:H(ie),color:(s==null?void 0:s[(X=L[ie])==null?void 0:X.scope])??"#4a9eff",status:f==null?void 0:f[ie],onClick:()=>g(ie)},ie)})}),te.length>0&&m.jsxs("div",{style:{marginTop:28},children:[m.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:N("learningResources",a)}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:te.map((ie,X)=>{const $e=a==="pl"?ie.titlePl:ie.titleEn,ne=ee[ie.type]??"#8a9dbe",R=ie.type==="interactive"?"resourceInteractive":ie.type==="video"?"resourceVideo":"resourceArticle";return m.jsxs("button",{onClick:()=>T(X),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${ne}0a`,border:`1px solid ${ne}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:qe,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Z=>{Z.currentTarget.style.background=`${ne}18`,Z.currentTarget.style.borderColor=`${ne}50`},onMouseLeave:Z=>{Z.currentTarget.style.background=`${ne}0a`,Z.currentTarget.style.borderColor=`${ne}25`},children:[m.jsx("span",{style:{fontSize:18,flexShrink:0},children:ie.type==="interactive"?"⬡":ie.type==="video"?"▶":"📄"}),m.jsxs("div",{style:{flex:1},children:[m.jsx("div",{style:{fontSize:13,color:_.textBody,fontWeight:500,lineHeight:1.4},children:$e}),m.jsx("div",{style:{fontSize:10,color:ne,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:N(R,a)})]}),m.jsx("span",{style:{fontSize:14,color:_.textFaint},children:"→"})]},X)})})]}),m.jsx("div",{style:{marginTop:32,paddingTop:16,borderTop:`1px solid ${_.border}`,textAlign:"center"},children:m.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{fontSize:11,color:_.textFaint,textDecoration:"none",transition:"color 0.15s"},onMouseEnter:ie=>{ie.currentTarget.style.color="#FFD166"},onMouseLeave:ie=>{ie.currentTarget.style.color=_.textFaint},children:N("coffeeBtn",a)})})]}),J&&m.jsx(gp,{resource:J,lang:a,onClose:()=>T(null)})]})}function p7({nodeId:o,status:t,evidence:r,adjacency:a,belief:s,nodes:c,lang:d,onNavigate:f}){const y=r==null?void 0:r[o],x=!!y,g=t==="known"?"#27ae60":"#e74c3c",w=t==="known"?"#2ecc71":"#ff6b6b",S=Object.fromEntries(c.map(k=>[k.id,k])),j=k=>{var T,A;return d==="pl"?(T=S[k])==null?void 0:T.labelPl:(A=S[k])==null?void 0:A.label};let q=null;return!x&&r&&(t==="known"?q=(a.dependents[o]??[]).find(T=>{var A;return((A=r[T])==null?void 0:A.correct)&&s[T]==="known"}):q=(a.prereqs[o]??[]).find(T=>r[T]&&!r[T].correct&&s[T]==="unknown")),m.jsxs("div",{style:{marginBottom:20,padding:"12px 14px",borderRadius:8,background:`${g}08`,border:`1px solid ${g}20`},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[m.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g}}),m.jsx("span",{style:{fontSize:13,fontWeight:600,color:w},children:N(t==="known"?"beliefKnown":"beliefUnknown",d)}),m.jsx("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:4,background:x?`${g}15`:"#ffffff08",color:x?w:_.textFaint,border:`1px solid ${x?g+"30":_.border}`},children:x?d==="pl"?"sprawdzone":"tested":d==="pl"?"wywnioskowane":"inferred"})]}),x&&m.jsxs("div",{style:{fontSize:12,color:_.textDim,lineHeight:1.6},children:[y.correct?d==="pl"?"Odpowiedź poprawna":"Answered correctly":d==="pl"?"Odpowiedź niepoprawna":"Answered incorrectly",y.questionText&&m.jsx("div",{style:{marginTop:8,padding:"8px 10px",borderRadius:6,background:"#ffffff06",borderLeft:`2px solid ${g}40`,fontSize:12,color:_.textBody,lineHeight:1.6},children:m.jsx("span",{dangerouslySetInnerHTML:{__html:Sn(y.questionText)}})})]}),!x&&m.jsxs("div",{style:{fontSize:12,color:_.textDim,lineHeight:1.6},children:[t==="known"?d==="pl"?"Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten.":"Inferred — if you know a harder topic, you likely know this one too.":d==="pl"?"Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem.":"Inferred — if you don't know the foundation, topics that build on it may also be difficult.",q&&m.jsxs("button",{onClick:()=>f(q),style:{display:"block",marginTop:6,padding:"10px 14px",borderRadius:4,background:"#ffffff06",border:`1px solid ${_.border}`,color:"#4a9eff",cursor:"pointer",fontSize:11,fontFamily:qe},children:[d==="pl"?"Na podstawie:":"Based on:"," ",j(q)," →"]})]})]})}function m7({body:o,lang:t}){var f,y;const[r,a]=D.useState(!1),s=o.split("<!-- example -->"),c=(f=s[0])==null?void 0:f.trim(),d=(y=s[1])==null?void 0:y.trim();return c?m.jsxs("div",{style:{marginBottom:20},children:[m.jsx("div",{style:{fontSize:13,color:_.textBody,lineHeight:1.7},dangerouslySetInnerHTML:{__html:Sn(c)}}),d&&m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>a(x=>!x),style:{marginTop:10,padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${r?"#FFD16640":_.border}`,background:r?"#FFD16610":"transparent",color:r?"#FFD166":_.textDim,cursor:"pointer",transition:"all 0.15s"},children:r?t==="pl"?"Schowaj przykład":"Hide example":t==="pl"?"Nie kumam — pokaż na liczbach":"Show me a concrete example"}),r&&m.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#FFD16608",border:"1px solid #FFD16620",color:"#e8d5a0",lineHeight:1.7},dangerouslySetInnerHTML:{__html:Sn(d)}})]})]}):null}function ep({title:o,color:t,empty:r,emptyText:a,children:s}){return m.jsxs("div",{style:{marginTop:24},children:[m.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:o}),r?m.jsx("div",{style:{fontSize:12,color:_.textFaint,fontStyle:"italic"},children:a}):m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:s})]})}function np({label:o,color:t,status:r,onClick:a}){const s=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return m.jsxs("button",{onClick:a,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:qe,fontSize:12,color:_.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:c=>{c.currentTarget.style.background=`${t}1c`,c.currentTarget.style.borderColor=`${t}50`},onMouseLeave:c=>{c.currentTarget.style.background=`${t}0c`,c.currentTarget.style.borderColor=`${t}25`},children:[s&&m.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:s,flexShrink:0}}),m.jsx("span",{dangerouslySetInnerHTML:{__html:Sn(o??"")}})]})}function fm({goalId:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c,belief:d,evidence:f,lang:y,onSelectTopic:x,onStartLesson:g,onClose:w}){const S=D.useMemo(()=>ao(t,r),[t,r]),j=D.useMemo(()=>Object.fromEntries(t.map(F=>[F.id,F])),[t]),q=F=>{var E,G;return y==="pl"?(E=j[F])==null?void 0:E.labelPl:(G=j[F])==null?void 0:G.label};j[o];const k=D.useMemo(()=>{const F=new Set,E=[],G=[o];for(;G.length;){const re=G.shift();if(!F.has(re)&&j[re]){F.add(re),E.push(re);for(const J of S.prereqs[re]??[])F.has(J)||G.push(J)}}const I=new Set(E),Q={};for(const re of I)Q[re]=0;for(const re of I)for(const J of S.dependents[re]??[])I.has(J)&&(Q[J]=(Q[J]||0)+1);const Y=[],te=[];for(const re of I)Q[re]===0&&te.push(re);for(;te.length;){te.sort((J,ee)=>{var fe,be;return(((fe=j[J])==null?void 0:fe.level)??0)-(((be=j[ee])==null?void 0:be.level)??0)});const re=te.shift();Y.push(re);for(const J of S.dependents[re]??[])I.has(J)&&(Q[J]--,Q[J]===0&&te.push(J))}return Y},[o,S,j]),T=k.filter(F=>(d==null?void 0:d[F])==="known").length,A=k.filter(F=>(d==null?void 0:d[F])==="unknown").length,L=k.length,H=L>0?Math.round(T/L*100):0;return m.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:_.bg,fontFamily:qe,overflowY:"auto",animation:"pathSlideIn 0.2s ease"},children:[m.jsx("style",{children:`
        @keyframes pathSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),m.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[m.jsxs("button",{onClick:w,style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer",marginBottom:24},children:["← ",N("topicBack",y)]}),m.jsx("div",{style:{marginBottom:6},children:m.jsx("span",{style:{fontSize:10,color:_.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:N("pathLabel",y)})}),m.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:_.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:Sn(q(o)??"")}}),m.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:_.textDim},children:[L," ",N("pathTopics",y),d&&Object.keys(d).length>0&&m.jsxs(m.Fragment,{children:[" · ",m.jsx("span",{style:{color:_.known},children:T})," ",N("pathKnown",y)," · ",m.jsx("span",{style:{color:"#e74c3c"},children:A})," ",N("pathToStudy",y)]})]}),d&&Object.keys(d).length>0&&m.jsx("div",{style:{height:4,borderRadius:2,background:_.border,overflow:"hidden",marginBottom:20},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${H}%`,background:_.known,transition:"width 0.4s ease"}})}),g&&m.jsx("button",{onClick:()=>g(k,o),style:{width:"100%",padding:"14px 24px",marginBottom:28,fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:N("startLesson",y)}),m.jsxs("div",{style:{position:"relative"},children:[m.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:_.border,borderRadius:1}}),k.map((F,E)=>{var ie,X,$e;const G=j[F],I=F===o,Q=d==null?void 0:d[F],Y=f==null?void 0:f[F],te=!!Y,re=((ie=G==null?void 0:G.resources)==null?void 0:ie.length)>0,J=(a==null?void 0:a[G==null?void 0:G.scope])??"#4a9eff",ee=((X=s==null?void 0:s[G==null?void 0:G.scope])==null?void 0:X[y==="pl"?"pl":"en"])??"",fe=(($e=c==null?void 0:c[G==null?void 0:G.section])==null?void 0:$e.label)??"";let be=_.textFaint,ze=_.border;return Q==="known"?(be=_.known,ze=_.known):Q==="unknown"&&(be="#e74c3c",ze="#e74c3c"),m.jsxs("div",{onClick:()=>x(F),style:{position:"relative",paddingLeft:40,paddingBottom:E<k.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[m.jsx("div",{style:{position:"absolute",left:8,top:12,width:I?16:12,height:I?16:12,borderRadius:"50%",background:Q?be:_.bg,border:`2px solid ${Q?ze:_.textFaint}`,marginLeft:I?-2:0,zIndex:1}}),m.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:I?`${J}10`:"transparent",border:`1px solid ${I?J+"30":_.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:ne=>{I||(ne.currentTarget.style.background=`${_.textFaint}10`,ne.currentTarget.style.borderColor=_.border)},onMouseLeave:ne=>{I||(ne.currentTarget.style.background="transparent",ne.currentTarget.style.borderColor=_.borderSubtle)},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[m.jsx("span",{style:{fontSize:13,fontWeight:I?700:500,color:I?_.textPrimary:_.textBody,flex:1},dangerouslySetInnerHTML:{__html:Sn(q(F)??"")}}),m.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[re&&m.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#58C4DD15",color:"#58C4DD",border:"1px solid #58C4DD30"},children:"⬡"}),te&&m.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:Y.correct?"#27ae6015":"#e74c3c15",color:Y.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${Y.correct?"#27ae6030":"#e74c3c30"}`},children:Y.correct?"✓":"✗"})]})]}),m.jsxs("div",{style:{fontSize:10,color:_.textFaint,marginTop:3},children:[fe," · ",ee,I&&m.jsx("span",{style:{color:J,marginLeft:6},children:N("pathGoal",y)})]})]})]},F)})]})]})]})}class No{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(a,s)=>s);for(let a=t-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[r[a],r[s]]=[r[s],r[a]]}return new No(r)}static identity(t){return new No(Array.from({length:t},(r,a)=>a))}}function f7({nodeId:o,nodes:t,questionBank:r,onAnswer:a,onSkip:s,lang:c,excludeIndices:d=[],isMobile:f,sourceFilter:y=null}){const x=t.find(Q=>Q.id===o),g=D.useMemo(()=>Wi(r,o,d,y),[o,d,y]),w=y==="cke"?"#FFD166":"#4a9eff",S=x?c==="pl"?x.labelPl:x.label:o,j=D.useMemo(()=>g?No.random(g.options.length):null,[g]),q=D.useMemo(()=>j?j.apply(g.options):[],[j,g]),k=D.useMemo(()=>j?j.displayIndex(g.correct):-1,[j,g]),[T,A]=D.useState(null),[L,H]=D.useState(!1),F=()=>{T!==null&&H(!0)},E=()=>{a(T===k,g,g.index),A(null),H(!1)};D.useEffect(()=>{const Q=Y=>{Y.key==="Escape"&&s((g==null?void 0:g.index)??-1)};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[s,g]);const G=Q=>m.jsx("span",{dangerouslySetInnerHTML:{__html:Sn(Q)}}),I=f?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:_.surface,border:`1px solid ${w}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:_.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:_.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${w}40`,borderRadius:10,padding:"14px 16px",color:_.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return m.jsxs("div",{style:I,children:[f&&m.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:m.jsx("div",{style:{width:36,height:4,borderRadius:2,background:_.textFaint}})}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[m.jsxs("div",{style:{color:w,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:[S,y==="cke"&&m.jsx("span",{style:{marginLeft:8,fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,background:`${w}22`,color:w,border:`1px solid ${w}40`,letterSpacing:"0.04em"},children:"CKE"})]}),m.jsx("button",{onClick:()=>s((g==null?void 0:g.index)??-1),style:{background:`${_.textDim}22`,border:`1px solid ${_.border}`,color:_.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:N("close",c)})]}),g?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{fontSize:13,color:_.textBody,marginBottom:12,lineHeight:1.65},children:G(g.q)}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:q.map((Q,Y)=>{let te=_.bg,re=_.border,J=_.textBody;return T===Y&&!L&&(te=`${w}22`,re=w,J=w),L&&(Y===k?(te="#27ae6022",re="#27ae60",J="#2ecc71"):Y===T&&(te="#e74c3c22",re="#e74c3c",J="#ff6b6b")),m.jsxs("button",{onClick:()=>{L||A(Y)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:L?"default":"pointer",background:te,border:`1px solid ${re}`,color:J,lineHeight:1.5,minHeight:38},children:[m.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][Y],"."]}),G(Q)]},Y)})}),L&&g.hint&&m.jsx("div",{style:{fontSize:11,color:_.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:G(g.hint)}),L?m.jsx("button",{onClick:E,style:{...Fi(T===k?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:N(T===k?"knownConfirm":"unknownConfirm",c)}):m.jsx("button",{onClick:F,disabled:T===null,style:{...Fi(w),width:"100%",opacity:T===null?.4:1,fontSize:13},children:N("checkAnswer",c)})]}):m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{color:_.textDim,fontSize:12,marginBottom:12},children:N("noQuestion",c)}),m.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[m.jsx("button",{onClick:()=>a(!0,null,-1),style:{...Fi("#27ae60"),fontSize:12,padding:"8px 14px"},children:N("yesKnow",c)}),m.jsx("button",{onClick:()=>a(!1,null,-1),style:{...Fi("#e74c3c"),fontSize:12,padding:"8px 14px"},children:N("noKnow",c)}),m.jsx("button",{onClick:()=>s(-1),style:{...Fi("#3a4d63"),fontSize:12,padding:"8px 14px"},children:N("skipBtn",c)})]})]})]})}function h7(){return{position:"absolute",right:16,top:16,width:230,background:_.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${_.border}`,borderRadius:8,padding:"12px 14px",fontSize:11,color:_.textBody,zIndex:10,maxHeight:"80vh",overflowY:"auto"}}function y7({belief:o,frontier:t,visibleFrontier:r,hasStarted:a,nextSuggestedId:s,sessionComplete:c,adjacency:d,expectedRemaining:f,pCorrect:y,questionsAnswered:x,nodes:g,lang:w,onReset:S,onNodeClick:j,SCOPE_LABELS:q,isMobile:k}){var te,re;const T=Object.fromEntries(g.map(J=>[J.id,J])),A=J=>{var ee,fe;return w==="pl"?(ee=T[J])==null?void 0:ee.labelPl:(fe=T[J])==null?void 0:fe.label},L=g.filter(J=>o[J.id]==="known"),H=g.filter(J=>o[J.id]==="unknown"),F=g.length,E=[{label:N("statKnown",w),count:L.length,color:"#27ae60"},{label:N("statUnknown",w),count:H.length,color:"#e74c3c"},{label:N("statRemaining",w),count:f??"-",color:"#4a9eff"}],G=y?Math.round(y*100):50,I=k?13:11,Q=k?11:9,Y=m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{fontWeight:700,fontSize:k?14:12,marginBottom:10,color:_.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("span",{children:[N("diagHeader",w)," ",c?"✓":""]}),m.jsx("button",{onClick:S,style:{fontSize:Q,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${_.textFaint}`,color:_.textDim,minHeight:k?32:"auto"},children:N("reset",w)})]}),m.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:E.map(({label:J,count:ee,color:fe})=>m.jsxs("div",{style:{flex:1,textAlign:"center",background:`${fe}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${fe}40`},children:[m.jsx("div",{style:{color:fe,fontWeight:700,fontSize:k?20:15},children:ee}),m.jsx("div",{style:{color:_.textDim,fontSize:Q},children:J})]},J))}),!c&&a&&m.jsxs("div",{style:{fontSize:Q,color:_.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[m.jsxs("span",{children:[N("answered",w),": ",m.jsx("span",{style:{color:_.textPrimary},children:x})]}),m.jsxs("span",{children:[N("estimated",w),": ",m.jsxs("span",{style:{color:"#4a9eff"},children:["~",f??"-"]})]}),m.jsxs("span",{children:[N("accuracy",w),": ",m.jsxs("span",{style:{color:"#4a9eff"},children:[G,"%"]})]})]}),c&&m.jsxs("div",{children:[m.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[m.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:k?14:12,marginBottom:4},children:N("sessionDone",w)}),m.jsxs("div",{style:{color:_.textDim,fontSize:Q,lineHeight:1.6},children:[N("sessionDoneSub",w)," ",m.jsx("span",{style:{color:_.textPrimary},children:x})," ",N("sessionDoneQ",w),"."," ",N("sessionDoneClass",w)," ",L.length+H.length,"/",F,".",m.jsx("br",{}),N("sessionDoneAcc",w),": ",m.jsxs("span",{style:{color:"#4a9eff"},children:[G,"%"]}),"."," ",N("sessionDoneKnown",w)," ",m.jsx("span",{style:{color:"#2ecc71"},children:L.length}),","," ",N("sessionDoneStudy",w)," ",m.jsx("span",{style:{color:"#e74c3c"},children:H.length}),"."]})]}),H.length>0&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{color:"#e74c3c",fontSize:I,fontWeight:600,marginBottom:5},children:[N("toStudy",w)," (",H.length,")"]}),g.filter(J=>o[J.id]==="unknown").filter(J=>(d.prereqs[J.id]??[]).every(ee=>o[ee]==="known")).slice(0,8).map(J=>{var ee,fe;return m.jsxs("div",{style:{padding:k?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:I,color:"#ff8a8a",lineHeight:1.4},children:[A(J.id),m.jsx("div",{style:{fontSize:Q,color:_.textDim,marginTop:1},children:(fe=q==null?void 0:q[(ee=T[J.id])==null?void 0:ee.scope])==null?void 0:fe[w==="pl"?"pl":"en"]})]},J.id)})]}),L.length>0&&m.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:I},children:["✓ ",N("knownList",w)," ",L.length]})]}),!c&&!a&&m.jsxs("div",{style:{marginBottom:10},children:[s&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{color:"#4a9eff",fontSize:I,fontWeight:600,marginBottom:5},children:N("startHere",w)}),m.jsxs("div",{onClick:()=>j==null?void 0:j(s),style:{padding:k?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:I,color:"#a8d4ff",minHeight:k?44:"auto"},children:[m.jsx("div",{style:{fontWeight:600},children:A(s)}),m.jsxs("div",{style:{fontSize:Q,color:_.textDim,marginTop:2},children:[(re=q==null?void 0:q[(te=T[s])==null?void 0:te.scope])==null?void 0:re[w==="pl"?"pl":"en"]," · ",N("startHereSub",w)]})]})]}),m.jsx("div",{style:{fontSize:Q,color:_.textFaint,marginTop:8,lineHeight:1.5},children:N("clickAnyNode",w)})]}),!c&&a&&r.length>0&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{color:"#f39c12",fontSize:I,fontWeight:600,marginBottom:5},children:N("whatNext",w)}),r.map(J=>{var fe,be;const ee=J===s;return m.jsxs("div",{onClick:()=>j==null?void 0:j(J),style:{padding:k?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:ee?"#4a9eff18":"#f39c1215",border:`1px solid ${ee?"#4a9eff55":"#f39c1240"}`,fontSize:I,color:ee?"#a8d4ff":"#f5d78e",minHeight:k?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsxs("div",{children:[m.jsx("div",{children:A(J)}),m.jsxs("div",{style:{fontSize:Q,color:_.textDim,marginTop:1},children:[(be=q==null?void 0:q[(fe=T[J])==null?void 0:fe.scope])==null?void 0:be[w==="pl"?"pl":"en"],ee&&m.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:N("best",w)})]})]}),m.jsx("span",{style:{opacity:.7},children:ee?"★":"→"})]},J)})]}),!c&&L.length>0&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{color:"#27ae60",fontSize:I,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",N("knownList",w)," (",L.length,")"]}),L.map(J=>m.jsx("div",{style:{fontSize:Q,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:A(J.id)},J.id))]}),!c&&!k&&m.jsxs("div",{style:{marginTop:12,color:_.textFaint,fontSize:Q,lineHeight:1.5},children:[N("hintClick",w),m.jsx("br",{}),N("hintShift",w),m.jsx("br",{}),N("hintGreen",w)]})]});return k?m.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:`${_.surface}f5`,backdropFilter:"blur(8px)",borderTop:`1px solid ${_.border}`,borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[m.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:m.jsx("div",{style:{width:36,height:4,borderRadius:2,background:_.textFaint}})}),Y]}):m.jsx("div",{style:h7(),children:Y})}function $7({nodes:o,lang:t,targetNode:r,subgraphIds:a,ddClassification:s,betaBeliefs:c,ddComplete:d,ddNextNodeId:f,questionsAnswered:y,onNodeClick:x,onReset:g,isMobile:w}){const S=Object.fromEntries(o.map(I=>[I.id,I])),j=I=>{var Q,Y;return t==="pl"?(Q=S[I])==null?void 0:Q.labelPl:(Y=S[I])==null?void 0:Y.label},q=a.filter(I=>s[I]==="known"),k=a.filter(I=>s[I]==="unknown"),T=a.filter(I=>s[I]==="uncertain"),A=a.length,L=q.length+k.length,H=A>0?Math.round(L/A*100):0,F=j(r),E=w?11:9,G=w?{position:"fixed",left:0,right:0,bottom:0,background:`${_.surface}f5`,backdropFilter:"blur(8px)",borderTop:`1px solid ${_.border}`,borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:_.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${_.border}`,borderRadius:8,padding:"12px 14px",fontSize:11,color:_.textBody,zIndex:10,maxHeight:"80vh",overflowY:"auto"};return m.jsxs("div",{style:G,children:[w&&m.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:m.jsx("div",{style:{width:36,height:4,borderRadius:2,background:_.textFaint}})}),m.jsxs("div",{style:{fontWeight:700,fontSize:w?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("span",{children:[N("deepDiveHeader",t)," ",d?"✓":""]}),m.jsx("button",{onClick:g,style:{fontSize:E,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${_.textFaint}`,color:_.textDim,minHeight:w?32:"auto"},children:N("reset",t)})]}),m.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[m.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:N("deepDiveTarget",t)}),m.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:F}),m.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[A," ",N("deepDiveNodes",t)]})]}),m.jsxs("div",{style:{marginBottom:10},children:[m.jsx("div",{style:{height:5,borderRadius:3,background:_.bg,overflow:"hidden",marginBottom:4},children:m.jsx("div",{style:{height:"100%",borderRadius:3,width:`${H}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[m.jsxs("span",{children:[N("classified",t),": ",m.jsxs("span",{style:{color:"#f5f6fa"},children:[L,"/",A]})]}),m.jsxs("span",{children:[N("questions",t),": ",m.jsx("span",{style:{color:"#f5f6fa"},children:y})]})]})]}),d&&m.jsxs("div",{children:[m.jsxs("div",{style:{background:q.length>k.length?"#27ae6018":"#e74c3c18",border:`1px solid ${q.length>k.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[m.jsx("div",{style:{color:q.length>k.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:N("diagReady",t)}),m.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[N("diagKnown",t),": ",m.jsx("span",{style:{color:"#2ecc71"},children:q.length})," / ",N("diagStudy",t),": ",m.jsx("span",{style:{color:"#ff6b6b"},children:k.length})," / ",N("diagTotal",t),": ",A]})]}),k.length>0&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:N("studyThese",t)}),a.filter(I=>s[I]==="unknown").slice(0,8).map(I=>{var Q;return m.jsx(tp,{id:I,label:j(I),scope:(Q=S[I])==null?void 0:Q.scope,classification:"unknown",beta:c[I]},I)})]}),q.length>0&&m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:N("mastered",t)}),a.filter(I=>s[I]==="known").map(I=>{var Q;return m.jsx(tp,{id:I,label:j(I),scope:(Q=S[I])==null?void 0:Q.scope,classification:"known",beta:c[I]},I)})]})]}),!d&&m.jsxs(m.Fragment,{children:[f&&m.jsxs("div",{style:{marginBottom:10},children:[m.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:N("nextQuestion",t)}),m.jsxs("div",{onClick:()=>x==null?void 0:x(f),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[j(f),m.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[N("confidence",t),": ",g7(c[f])]})]})]}),T.length>0&&m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[N("unclassified",t)," (",T.length,")"]}),T.map(I=>m.jsxs("div",{onClick:()=>x==null?void 0:x(I),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:I===f?"#4a9eff18":"#f39c1212",border:`1px solid ${I===f?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:I===f?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:j(I)}),m.jsx(hm,{beta:c[I]})]},I))]})]})]})}function g7(o){if(!o)return"50%";const t=o.alpha/(o.alpha+o.beta);return`${Math.round(t*100)}%`}function hm({beta:o}){const t=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,a=Math.min(1,(r-2)/4),s=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return m.jsx("div",{style:{width:30,height:4,borderRadius:2,background:_.bg,overflow:"hidden",flexShrink:0},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:s,opacity:.4+a*.6,transition:"width 0.3s ease"}})})}function tp({id:o,label:t,scope:r,classification:a,beta:s}){const c=a==="known"?"#27ae60":"#e74c3c";return m.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${c}10`,border:`1px solid ${c}30`,fontSize:9,color:a==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:t}),m.jsx(hm,{beta:s})]})}function x7({lang:o,diagMode:t,hasBelief:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c}){const[d,f]=D.useState(r),y=Object.entries(a).map(([x,g])=>{var w;return{color:g,label:(w=s[x])==null?void 0:w[o==="pl"?"pl":"en"]}});return m.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:`${_.surface}95`,backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[m.jsxs("button",{onClick:()=>f(x=>!x),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[m.jsx("span",{style:{opacity:.6},children:d?"▼":"▶"}),N("legendTitle",o)]}),d&&m.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[(t||r)&&m.jsxs("div",{style:{marginBottom:8},children:[[{color:_.knownHi,label:N("legendKnown",o)},{color:_.unknownHi,label:N("legendUnknown",o)},{color:_.frontier,label:N("legendFrontier",o)},{color:"#4a5568",label:N("legendUnclassified",o)}].map(({color:x,label:g})=>m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[m.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:x,flexShrink:0}}),m.jsx("span",{style:{color:"#8a9dbe"},children:g})]},g)),m.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),m.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:N("legendScopes",o)}),y.map(({color:x,label:g})=>m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[m.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:x,flexShrink:0}}),m.jsx("span",{style:{color:"#8a9dbe"},children:g})]},g)),m.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[m.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:N("legendStages",o)}),Object.entries(c).map(([x,g])=>m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[m.jsx("div",{style:{width:8,height:3,borderRadius:1,background:g.color,flexShrink:0}}),m.jsx("span",{style:{color:"#8a9dbe"},children:g.label})]},x))]})]})]})}function ym({nodes:o,lang:t,onSelect:r,onClose:a,SECTIONS:s,SCOPE_COLORS:c}){const[d,f]=D.useState(""),[y,x]=D.useState(-1),g=D.useRef([]),w=D.useMemo(()=>Object.keys(s??{}),[s]),S=D.useMemo(()=>{const A=d.toLowerCase();return o.filter(L=>!A||L.label.toLowerCase().includes(A)||L.labelPl.toLowerCase().includes(A))},[o,d]),j=D.useMemo(()=>{const A={};for(const H of w)A[H]=[];for(const H of S){const F=H.section??w[0]??"default";A[F]||(A[F]=[]),A[F].push(H)}const L=[];for(const H of w)for(const F of A[H]??[])L.push(F);return L},[S,w]),q=D.useMemo(()=>{const A={};for(const L of w)A[L]=[];for(const L of S){const H=L.section??w[0]??"default";A[H]||(A[H]=[]),A[H].push(L)}return A},[S,w]),k=A=>t==="pl"?A.labelPl:A.label;D.useEffect(()=>{const A=L=>{if(L.key==="Escape"){a();return}L.key==="ArrowDown"&&(L.preventDefault(),x(H=>Math.min(H+1,j.length-1))),L.key==="ArrowUp"&&(L.preventDefault(),x(H=>Math.max(H-1,0))),L.key==="Enter"&&y>=0&&j[y]&&(L.preventDefault(),r(j[y].id))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[j,y,a,r]),D.useEffect(()=>{y>=0&&g.current[y]&&g.current[y].scrollIntoView({block:"nearest"})},[y]),D.useEffect(()=>{x(-1)},[d]);const T={title:t==="pl"?"Wybierz cel":"Select Goal",subtitle:t==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:t==="pl"?"Szukaj tematu...":"Search topics...",noResults:t==="pl"?"Brak wyników":"No results",footer:`${S.length} / ${o.length} ${t==="pl"?"tematów":"topics"}`,cancel:t==="pl"?"Anuluj":"Cancel"};return m.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:A=>{A.target===A.currentTarget&&a()},children:m.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:_.surface,border:`1px solid ${_.border}`,borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[m.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:`1px solid ${_.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:T.title}),m.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:T.subtitle})]}),m.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),m.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:m.jsx("input",{autoFocus:!0,value:d,onChange:A=>f(A.target.value),placeholder:T.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:_.bg,border:`1px solid ${_.border}`,color:"#c8d6e5",outline:"none"}})}),m.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[w.map(A=>{const L=q[A];if(!L||L.length===0)return null;const H=s==null?void 0:s[A];return m.jsxs("div",{style:{marginBottom:12},children:[m.jsx("div",{style:{fontSize:9,fontWeight:700,color:(H==null?void 0:H.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(H==null?void 0:H.label)??A}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:L.map(F=>{const E=j.indexOf(F),G=(c==null?void 0:c[F.scope])??"#4a9eff",I=y===E;return m.jsxs("button",{ref:Q=>g.current[E]=Q,onClick:()=>r(F.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:I?`${G}35`:`${G}15`,border:`1px solid ${I?G:`${G}40`}`,color:"#c8d6e5",cursor:"pointer",outline:I?`2px solid ${G}`:"none",outlineOffset:1},onMouseEnter:Q=>{Q.currentTarget.style.background=`${G}30`,Q.currentTarget.style.borderColor=`${G}90`},onMouseLeave:Q=>{j.indexOf(F)!==y&&(Q.currentTarget.style.background=`${G}15`,Q.currentTarget.style.borderColor=`${G}40`)},children:[m.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:G,verticalAlign:"middle"}}),k(F)]},F.id)})})]},A)}),S.length===0&&m.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:T.noResults})]}),m.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:T.footer}),m.jsx("button",{onClick:a,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:`1px solid ${_.border}`,color:"#6b7d9a"},children:T.cancel})]})]})})}function b7({isOpen:o,onSelect:t,onClose:r,lang:a="pl"}){const s=[{id:"quick",icon:"⚡",color:"#4a9eff",label:N("modeQuickLabel",a),description:N("modeQuickDesc",a)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:N("modeDeepLabel",a),description:N("modeDeepDesc",a)}],[c,d]=D.useState(null),f=D.useRef(null);return D.useEffect(()=>{o&&(d(null),setTimeout(()=>{var y;return(y=f.current)==null?void 0:y.focus()},100))},[o]),D.useEffect(()=>{if(!o)return;const y=x=>{x.key==="Escape"&&r(),x.key==="Enter"&&c&&t(c)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[o,c,r,t]),o?m.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:y=>{y.target===y.currentTarget&&r()},children:m.jsxs("div",{style:{width:420,maxWidth:"90vw",background:_.surface,border:`1px solid ${_.border}`,borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[m.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:`1px solid ${_.border}`},children:[m.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:N("modePickerTitle",a)}),m.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:N("modePickerSub",a)})]}),m.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:s.map((y,x)=>m.jsxs("button",{ref:x===0?f:null,onClick:()=>d(y.id),onDoubleClick:()=>t(y.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:c===y.id?`${y.color}18`:_.bg,border:`1px solid ${c===y.id?y.color:_.border}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${y.color}18`,g.currentTarget.style.borderColor=`${y.color}60`},onMouseLeave:g=>{c!==y.id&&(g.currentTarget.style.background=_.bg,g.currentTarget.style.borderColor=_.border)},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[m.jsx("span",{style:{fontSize:16},children:y.icon}),m.jsx("span",{style:{fontWeight:600,color:c===y.id?y.color:"#f5f6fa"},children:y.label})]}),m.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:y.description})]},y.id))}),m.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:`1px solid ${_.border}`,color:"#6b7d9a"},children:N("cancel",a)}),m.jsx("button",{onClick:()=>c&&t(c),disabled:!c,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:c?"pointer":"not-allowed",background:c?"#4a9eff":_.border,border:"none",color:c?"#fff":"#3a4d63",opacity:c?1:.5},children:N("next",a)})]})]})}):null}const v7=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function w7({isOpen:o,onSelect:t,onClose:r,lang:a}){return D.useEffect(()=>{if(!o)return;const s=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[o,r]),o?m.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:s=>{s.target===s.currentTarget&&r()},children:m.jsxs("div",{style:{width:"100%",maxWidth:480,background:_.surface,border:`1px solid ${_.border}`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[m.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:`1px solid ${_.border}`,textAlign:"center"},children:[m.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),m.jsx("div",{style:{fontWeight:700,fontSize:18,color:_.textPrimary,marginBottom:8},children:N("onboardingTitle",a)}),m.jsx("div",{style:{fontSize:12,color:_.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:N("onboardingSub",a)})]}),m.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[m.jsx("div",{style:{fontSize:11,color:_.textFaint,marginBottom:2},children:N("onboardingChoose",a)}),v7.map(({id:s,key:c,descKey:d,color:f})=>m.jsxs("button",{onClick:()=>t(s),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${f}0e`,border:`1px solid ${f}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:y=>{y.currentTarget.style.background=`${f}1c`,y.currentTarget.style.borderColor=`${f}70`},onMouseLeave:y=>{y.currentTarget.style.background=`${f}0e`,y.currentTarget.style.borderColor=`${f}30`},children:[m.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:f,flexShrink:0,marginTop:5}}),m.jsxs("div",{style:{flex:1},children:[m.jsx("div",{style:{fontWeight:600,fontSize:13,color:_.textPrimary,marginBottom:3},children:N(c,a)}),m.jsx("div",{style:{fontSize:11,color:_.textDim,lineHeight:1.5},children:N(d,a)})]}),m.jsx("div",{style:{color:f,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},s))]}),m.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:_.textFaint,textAlign:"center"},children:N("onboardingLangHint",a)})]})}):null}function z7({lang:o,setLang:t,layoutId:r,layouts:a,onLayoutChange:s,searchTerm:c,setSearchTerm:d,filterScope:f,toggleScope:y,clearScope:x,filterSection:g,toggleSection:w,clearSection:S,SECTIONS:j,SCOPE_COLORS:q,SCOPE_LABELS:k,isMobile:T}){const[A,L]=D.useState(!1),H=D.useRef(null);D.useEffect(()=>{if(!A)return;const E=I=>{H.current&&!H.current.contains(I.target)&&L(!1)},G=I=>{I.key==="Escape"&&L(!1)};return document.addEventListener("mousedown",E),document.addEventListener("keydown",G),()=>{document.removeEventListener("mousedown",E),document.removeEventListener("keydown",G)}},[A]);const F=f.size+g.size+(c?1:0);return m.jsxs("div",{ref:H,style:{position:"relative"},children:[m.jsxs("button",{onClick:()=>L(E=>!E),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:A||F>0?"1px solid #4a9eff":`1px solid ${_.border}`,background:A?"#4a9eff22":"transparent",color:A||F>0?"#4a9eff":_.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:N("moreOptions",o),children:[m.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[m.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),m.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),m.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),F>0&&m.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:F})]}),A&&m.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:T?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:_.surface,border:`1px solid ${_.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[m.jsxs("div",{style:{marginBottom:14},children:[m.jsx("label",{style:{fontSize:11,color:_.textDim,fontWeight:600,marginBottom:6,display:"block"},children:N("search",o)}),m.jsx("input",{value:c,onChange:E=>d(E.target.value),placeholder:N("search",o),style:{width:"100%",boxSizing:"border-box",background:_.bg,border:`1px solid ${_.border}`,borderRadius:6,color:_.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),m.jsxs("div",{style:{marginBottom:14},children:[m.jsx("label",{style:{fontSize:11,color:_.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),m.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(E=>m.jsx("button",{onClick:()=>t(E),style:{...Ro(o===E,E==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:E.toUpperCase()},E))})]}),m.jsxs("div",{style:{marginBottom:14},children:[m.jsx("label",{style:{fontSize:11,color:_.textDim,fontWeight:600,marginBottom:6,display:"block"},children:N("layoutLabel",o)}),m.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:a.map(E=>m.jsx("button",{onClick:()=>s(E.meta.id),style:{...Ro(r===E.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:E.meta.label},E.meta.id))})]}),m.jsxs("div",{style:{marginBottom:14},children:[m.jsx("label",{style:{fontSize:11,color:_.textDim,fontWeight:600,marginBottom:6,display:"block"},children:N("filterSection",o)}),m.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[m.jsx("button",{style:{...Ro(g.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:S,children:N("all",o)}),Object.entries(j).map(([E,G])=>m.jsx("button",{style:{...Ro(g.has(E),G.color),fontSize:11,padding:"4px 10px"},onClick:()=>w(E),children:G.label},E))]})]}),m.jsxs("div",{children:[m.jsx("label",{style:{fontSize:11,color:_.textDim,fontWeight:600,marginBottom:6,display:"block"},children:N("filterScope",o)}),m.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[m.jsx("button",{style:{...Ro(f.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:x,children:N("all",o)}),Object.entries(q).map(([E,G])=>{var I;return m.jsx("button",{style:{...Ro(f.has(E),G),fontSize:11,padding:"4px 10px"},onClick:()=>y(E),children:(I=k[E])==null?void 0:I[o==="pl"?"pl":"en"]},E)})]})]})]})]})}const rp={x:40,y:40,scale:.52},op={x:10,y:10,scale:.3};function _7({courseId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:a,SECTIONS:s,SCOPE_COLORS:c,SCOPE_LABELS:d,COURSE_META:f,onBackToCourses:y,initialBelief:x,initialEvidence:g,initialSelectedNode:w,initialLang:S,onBackToHome:j}){const q=hb(),[k,T]=D.useState(mp),[A,L]=st("lang",S??"pl"),[H,F]=D.useState(new Set),[E,G]=D.useState(new Set),[I,Q]=D.useState(""),[Y,te]=D.useState(w??null),[re,J]=D.useState(null),[ee,fe]=D.useState(null),[be,ze]=D.useState(null),[ie,X]=D.useState(null),[$e,ne]=D.useState(!1),[R,Z]=D.useState(!1),_e=!!x,[Te,je]=st("onboardingSeen",!1),[xe,ae]=D.useState(!Te&&!_e),he=D.useCallback(()=>{je(!0),ae(!1)},[je]),Ce=D.useCallback(oe=>F(Ne=>{const Ke=new Set(Ne);return Ke.has(oe)?Ke.delete(oe):Ke.add(oe),Ke}),[]),Ge=D.useCallback(oe=>G(Ne=>{const Ke=new Set(Ne);return Ke.has(oe)?Ke.delete(oe):Ke.add(oe),Ke}),[]),Pn=D.useCallback(()=>F(new Set),[]),Wt=D.useCallback(()=>G(new Set),[]),qn=D.useMemo(()=>ao(t,r),[t,r]),[We,tn]=D.useState(()=>Tl(k,300,t,r)),Be=D.useMemo(()=>t.map(oe=>{var Ne,Ke;return{...oe,x:((Ne=We[oe.id])==null?void 0:Ne.x)??oe.x,y:((Ke=We[oe.id])==null?void 0:Ke.y)??oe.y}}),[t,We]),Cn=D.useRef(null),{viewTransform:Rn,setViewTransform:ut,toCanvas:dt,startPan:Vn,cursorStyle:Oo,setCursorStyle:Qi,handleMouseMove:Ho,handleMouseUp:Go}=ab(Cn),{startNodeDrag:Uo,handleDragMove:lo,handleDragEnd:Ir}=sb(dt,Be,tn,Qi),{diagMode:Ue,setDiagMode:Tn,mode:rn,setMode:ir,quizNode:tt,setQuizNode:Tt,questionsAnswered:Yi,setAnsweredQuestions:Vo,getAnsweredIndices:Zo,handleDiagClick:Ko,handleQuizAnswer:Qo,resetDiagnostic:wt,startDeepDive:At,targetNode:pt,belief:Yo,setBelief:Xi,frontier:Ji,visibleFrontier:Xo,hasStarted:co,nextSuggestedId:ar,expectedRemaining:ea,pCorrect:Nr,sessionComplete:Lr,betaBeliefs:Wr,subgraphIds:Or,ddClassification:Mt,ddNextNodeId:Ot,ddComplete:sr}=fb(qn,a,o);D.useEffect(()=>{x&&Object.keys(x).length>0&&Xi(x)},[]);const Jo=D.useCallback(oe=>{oe.lang&&L(oe.lang),oe.view==="node"?(te(oe.nodeId),fe(null)):oe.view==="resource"?(te(oe.nodeId),fe(oe.resourceIndex)):oe.view==="diagnostic"?oe.mode==="quick"?(Tn(!0),ir("quick"),te(null)):oe.mode==="deepdive"&&oe.goalNode&&(Tn(!0),At(oe.goalNode)):(te(null),fe(null))},[L,Tn,ir,At]),{setRoute:lr}=gb(Jo);D.useEffect(()=>{Ue?lr(rn==="deepdive"&&pt?{view:"diagnostic",mode:"deepdive",goalNode:pt,lang:A}:{view:"diagnostic",mode:"quick",lang:A}):Y?ee!=null?lr({view:"resource",nodeId:Y,resourceIndex:ee,lang:A}):lr({view:"node",nodeId:Y,lang:A}):lr({view:"graph",lang:A})},[Y,ee,Ue,rn,pt,A,lr]);const Is=D.useMemo(()=>{const oe=I.toLowerCase(),Ne=t.filter(Ke=>!(H.size>0&&!H.has(Ke.scope)||E.size>0&&!E.has(Ke.section)||oe&&!Ke.label.toLowerCase().includes(oe)&&!Ke.labelPl.toLowerCase().includes(oe)));return Ne.length<t.length?new Set(Ne.map(Ke=>Ke.id)):null},[t,H,E,I]),Hr=Y||re,Pt=D.useMemo(()=>{var Ne,Ke;if(!Hr)return null;const oe=new Set([Hr]);return(Ne=qn.prereqs[Hr])==null||Ne.forEach(Nn=>oe.add(Nn)),(Ke=qn.dependents[Hr])==null||Ke.forEach(Nn=>oe.add(Nn)),oe},[Hr,qn]),ei=D.useMemo(()=>!Ue||rn!=="deepdive"||Or.length===0?null:new Set(Or),[Ue,rn,Or]),na=D.useCallback(oe=>{const Ne=oe.target.closest("[data-node-id]");if(Ne){Uo(Ne.getAttribute("data-node-id"),oe.clientX,oe.clientY),oe.stopPropagation();return}Vn(oe.clientX,oe.clientY)},[Uo,Vn]),Ns=D.useCallback(oe=>{lo(oe.clientX,oe.clientY)||Ho(oe)},[lo,Ho]),ni=D.useCallback(()=>{Ir(),Go()},[Ir,Go]),ta=D.useCallback(oe=>{q&&!oe.target.closest("[data-node-id]")&&te(null)},[q]),cr=D.useRef(!1);D.useEffect(()=>{if(!(!Ue||rn!=="quick")&&!tt&&ar&&!Lr&&co&&cr.current){cr.current=!1;const oe=setTimeout(()=>Tt(ar),400);return()=>clearTimeout(oe)}},[Ue,rn,tt,ar,Lr,co]),D.useEffect(()=>{if(!(!Ue||rn!=="deepdive")&&!tt&&Ot&&!sr&&cr.current){cr.current=!1;const oe=setTimeout(()=>Tt(Ot),400);return()=>clearTimeout(oe)}},[Ue,rn,tt,Ot,sr]),D.useEffect(()=>{const oe=Ne=>{Ne.key==="Escape"&&(te(null),ne(!1))};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[]);const ra=D.useCallback(oe=>{T(oe),tn(Tl(oe,300,t,r)),ut(q?op:rp)},[ut,t,r,q]),Ls=D.useCallback(()=>{Ue?(Tn(!1),wt(),te(null)):Z(!0)},[Ue,Tn,wt]),ti=D.useCallback(oe=>{Z(!1),wt(),oe==="deepdive"?(Tn(!0),ne(!0)):(Tn(!0),ir("quick"),te(null))},[Tn,ir,wt]),cn=D.useCallback(oe=>{je(!0),ae(!1),(oe==="quick"||oe==="deepdive")&&ti(oe)},[je,ti]),Ws=D.useMemo(()=>{if(rn!=="deepdive")return{};const oe={};for(const[Ne,Ke]of Object.entries(Mt))Ke==="known"?oe[Ne]="known":Ke==="unknown"&&(oe[Ne]="unknown");return oe},[rn,Mt]),ur=rn==="deepdive"?Ws:Yo,oa=rn==="deepdive"?Or.filter(oe=>Mt[oe]==="uncertain"):Xo,uo=A==="pl"?f.title??f.titleEn:f.titleEn??f.title,Os=xe||R||$e,ri=(oe,Ne="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:oe?`1px solid ${Ne}`:`1px solid ${_.border}`,background:oe?`${Ne}22`:"transparent",color:oe?Ne:_.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:oe?600:400});return m.jsxs("div",{style:{width:"100%",height:"100dvh",background:_.bg,fontFamily:qe,color:_.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[m.jsxs("div",{style:{padding:q?"8px 12px":"8px 16px",borderBottom:`1px solid ${_.borderSubtle}`,display:"flex",alignItems:"center",gap:q?8:10,flexShrink:0},children:[(j||y)&&m.jsx("button",{onClick:j??y,style:{...ri(!1),padding:"7px 10px"},children:"←"}),m.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:_.textPrimary,letterSpacing:q?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:uo}),m.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${_.border}`},children:[m.jsx("button",{onClick:()=>{Ue&&(Tn(!1),wt(),te(null))},style:{padding:q?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Ue?400:700,background:Ue?"transparent":"#4a9eff22",color:Ue?_.textDim:"#4a9eff",minHeight:36},children:N("exploreMode",A)}),m.jsx("button",{onClick:()=>{Ue||Z(!0)},style:{padding:q?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${_.border}`,fontWeight:Ue?700:400,background:Ue?"#f39c1222":"transparent",color:Ue?"#f39c12":_.textDim,minHeight:36},children:N(Ue?rn==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",A)})]}),Ue&&m.jsx("button",{onClick:()=>ne(!0),style:ri(rn==="deepdive","#8e44ad"),children:N("goalBtn",A)}),m.jsx(z7,{lang:A,setLang:oe=>L(oe),layoutId:k,layouts:pp,onLayoutChange:ra,searchTerm:I,setSearchTerm:Q,filterScope:H,toggleScope:Ce,clearScope:Pn,filterSection:E,toggleSection:Ge,clearSection:Wt,SECTIONS:s,SCOPE_COLORS:c,SCOPE_LABELS:d,isMobile:q})]}),m.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[m.jsxs("svg",{ref:Cn,width:"100%",height:"100%",style:{cursor:Oo,touchAction:"none",pointerEvents:Os?"none":"auto"},onMouseDown:na,onMouseMove:Ns,onMouseUp:ni,onMouseLeave:ni,onClick:oe=>{if(ta(oe),!Ue)return;const Ne=oe.target.closest("[data-node-id]");Ne&&Ko(Ne.getAttribute("data-node-id"),oe.shiftKey)},children:[m.jsxs("defs",{children:[m.jsx("marker",{id:"arrow-default",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:m.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#3a5578"})}),m.jsx("marker",{id:"arrow-hi",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:m.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#4a9eff"})}),m.jsx("marker",{id:"arrow-dim",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:m.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#151b26"})})]}),m.jsxs("g",{transform:`translate(${Rn.x},${Rn.y}) scale(${Rn.scale})`,children:[m.jsx(xb,{edges:r,nodes:Be,highlightedIds:Ue&&rn==="deepdive"?ei:Pt}),m.jsx(zb,{nodes:Be,filteredIds:Ue&&rn==="deepdive"?ei:Is,highlightedIds:Ue?null:Pt,selected:Y,onSelect:oe=>{fe(null),te(oe===Y?null:oe)},onHover:J,lang:A,diagMode:Ue,belief:ur,frontier:oa,scale:Rn.scale,scopeColors:c,edges:r})]})]}),Y&&!be&&m.jsx(d7,{nodeId:Y,nodes:Be,adjacency:qn,lang:A,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:s,belief:ur,evidence:g,QUESTION_BANK:a,onClose:()=>te(null),onNavigate:oe=>te(oe),onShowPath:oe=>{te(null),ze(oe)},onQuizMe:oe=>{te(null),Tn(!0),ir("quick"),X(null),Tt(oe)},onQuizMatura:oe=>{te(null),Tn(!0),ir("quick"),X("cke"),Tt(oe)}}),be&&m.jsx(fm,{goalId:be,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:s,belief:ur,evidence:g,lang:A,onSelectTopic:oe=>{ze(null),te(oe)},onClose:()=>ze(null)}),Ue&&tt&&m.jsx(f7,{nodeId:tt,nodes:Be,lang:A,questionBank:a,excludeIndices:Zo(tt),isMobile:q,sourceFilter:ie,onAnswer:(oe,Ne,Ke)=>{cr.current=!0,Qo(tt,oe,Ne,Ke)},onSkip:oe=>{typeof oe=="number"&&Vo(Ne=>new Set([...Ne,`${tt}:${oe}`])),Tt(null),X(null)}}),Ue&&rn==="quick"&&m.jsx(y7,{belief:Yo,frontier:Ji,visibleFrontier:Xo,hasStarted:co,nextSuggestedId:ar,sessionComplete:Lr,adjacency:qn,expectedRemaining:ea,pCorrect:Nr,questionsAnswered:Yi,nodes:Be,lang:A,onNodeClick:oe=>Tt(oe),onReset:wt,SCOPE_LABELS:d,isMobile:q}),Ue&&rn==="deepdive"&&pt&&m.jsx($7,{nodes:Be,lang:A,targetNode:pt,subgraphIds:Or,ddClassification:Mt,betaBeliefs:Wr,ddComplete:sr,ddNextNodeId:Ot,questionsAnswered:Yi,onNodeClick:oe=>Tt(oe),onReset:wt,isMobile:q}),!q&&m.jsx(x7,{lang:A,diagMode:Ue,hasBelief:Object.keys(ur).length>0,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:s}),m.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([oe,Ne])=>m.jsx("button",{onClick:()=>{Ne===null?(tn(Tl(k,300,t,r)),ut(q?op:rp)):ut(Ke=>({...Ke,scale:Math.max(.15,Math.min(5,Ke.scale*Ne))}))},style:{width:44,height:44,background:_.surface,border:`1px solid ${_.border}`,color:_.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:oe},oe))}),q&&Ue&&!tt&&m.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${_.surface}ee`,borderTop:`1px solid ${_.border}`,display:"flex",gap:0,zIndex:20},children:[m.jsx("button",{onClick:()=>ne(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${_.border}`,color:rn==="deepdive"?"#c39bd3":_.textDim,cursor:"pointer"},children:N("goalBtn",A)}),m.jsx("button",{onClick:Ls,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:N("reset",A)})]})]}),$e&&m.jsx(ym,{nodes:Be,lang:A,SECTIONS:s,SCOPE_COLORS:c,onSelect:oe=>{ne(!1),At(oe)},onClose:()=>ne(!1)}),m.jsx(b7,{isOpen:R,onSelect:ti,onClose:()=>Z(!1),lang:A}),m.jsx(w7,{isOpen:xe,onSelect:cn,onClose:he,lang:A})]})}function k7({lang:o,setLang:t,themeId:r,onThemeChange:a,onStartQuiz:s,onStartGoalQuiz:c,onBrowseViz:d,onBrowseMap:f,onProfile:y,onFromScratch:x,hasSavedCourse:g}){const[w,S]=D.useState("standard"),[j,q]=D.useState(!1);return m.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:_.bg,fontFamily:qe,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[m.jsxs("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:10,alignItems:"center"},children:[m.jsx("div",{style:{display:"flex",gap:5},children:Object.entries(sc).map(([k,T])=>m.jsx("button",{onClick:()=>a(k),title:T.name,style:{width:18,height:18,borderRadius:"50%",background:T.bg,border:r===k?`2px solid ${T.textPrimary}`:`2px solid ${T.border}`,cursor:"pointer",padding:0,boxShadow:r===k?`0 0 6px ${T.textDim}`:"none"}},k))}),m.jsx("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${_.border}`},children:["pl","en"].map(k=>m.jsx("button",{onClick:()=>t(k),style:{padding:"10px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:k==="en"?`1px solid ${_.border}`:"none",background:o===k?"#4a9eff18":"transparent",color:o===k?"#4a9eff":_.textDim,fontWeight:o===k?600:400,fontFamily:qe},children:k.toUpperCase()},k))})]}),m.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[m.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[m.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:_.edgeDefault,strokeWidth:"1.5"}),m.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:_.edgeDefault,strokeWidth:"1.5"}),m.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:_.edgeDefault,strokeWidth:"1.5"}),m.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:_.edgeDefault,strokeWidth:"1.5"}),m.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:_.edgeDefault,strokeWidth:"1.5"}),m.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),m.jsx("circle",{cx:"14",cy:"44",r:"5",fill:_.known,opacity:"0.8"}),m.jsx("circle",{cx:"40",cy:"44",r:"5",fill:_.frontier,opacity:"0.8"}),m.jsx("circle",{cx:"66",cy:"44",r:"5",fill:_.unknown,opacity:"0.6"})]}),m.jsx("div",{style:{fontSize:13,fontWeight:600,color:_.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),m.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:_.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:N("heroTitle",o)}),m.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:_.textDim,maxWidth:360},children:N("heroSub",o)}),g&&y&&m.jsx("button",{onClick:y,style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:qe,borderRadius:10,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer",marginBottom:10,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:k=>{k.currentTarget.style.background="#f39c1228",k.currentTarget.style.borderColor="#f39c1280"},onMouseLeave:k=>{k.currentTarget.style.background="#f39c1218",k.currentTarget.style.borderColor="#f39c1250"},children:N("heroContinue",o)}),m.jsx("button",{onClick:()=>s(w),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:qe,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:k=>{k.currentTarget.style.background="#4a9eff28",k.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:k=>{k.currentTarget.style.background="#4a9eff18",k.currentTarget.style.borderColor="#4a9eff50"},children:N("heroStart",o)}),m.jsxs("button",{onClick:()=>q(k=>!k),style:{padding:"8px 16px",fontSize:12,fontFamily:qe,border:"none",background:"transparent",color:_.textFaint,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:k=>{k.currentTarget.style.color=_.textDim},onMouseLeave:k=>{k.currentTarget.style.color=_.textFaint},children:[j?"▲":"▼"," ",N("heroMore",o)]}),j&&m.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginTop:4,width:"100%",maxWidth:320},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:12},children:[m.jsx("span",{style:{color:_.textFaint},children:N("heroLength",o)}),m.jsx("select",{value:w,onChange:k=>S(k.target.value),style:{background:_.surface,border:`1px solid ${_.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:qe,color:_.textBody,cursor:"pointer",outline:"none"},children:Object.entries(Zl).map(([k,T])=>m.jsxs("option",{value:k,children:[N(T.labelKey,o)," (~",T.maxQuestions," ",N("heroQuestions",o),")"]},k))})]}),x&&m.jsxs("button",{onClick:x,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:qe,borderRadius:6,border:"1px solid #27ae6040",background:"#27ae6010",color:"#27ae60",cursor:"pointer"},children:[N("profileFromScratch",o),m.jsx("span",{style:{display:"block",fontSize:10,color:_.textFaint,marginTop:2},children:N("profileFromScratchSub",o)})]}),m.jsx("button",{onClick:c,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textBody,cursor:"pointer"},children:N("heroGoal",o)}),g&&y&&m.jsx("button",{onClick:y,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("heroProfile",o)}),m.jsxs("button",{onClick:d,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:["⬡ ",N("heroBrowseViz",o)]}),m.jsx("button",{onClick:f,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textFaint,cursor:"pointer"},children:N("heroExplore",o)})]}),m.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:_.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:N("heroStep1",o)},{num:"2",text:N("heroStep2",o)},{num:"3",text:N("heroStep3",o)}].map(({num:k,text:T})=>m.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[m.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${_.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:_.textDim,flexShrink:0},children:k}),m.jsx("span",{children:T})]},k))})]}),m.jsx("div",{style:{position:"absolute",bottom:20,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:m.jsxs("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:7,padding:"8px 18px",borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,fontSize:13,fontFamily:qe,textDecoration:"none",transition:"background 0.15s, color 0.15s, border-color 0.15s"},onMouseEnter:k=>{k.currentTarget.style.background="rgba(255,209,102,0.08)",k.currentTarget.style.borderColor="rgba(255,209,102,0.4)",k.currentTarget.style.color="#FFD166"},onMouseLeave:k=>{k.currentTarget.style.background="transparent",k.currentTarget.style.borderColor=_.border,k.currentTarget.style.color=_.textDim},children:["☕ ",o==="pl"?"Postaw kawę — wspieraj projekt":"Buy me a coffee — support this project"]})})]})}function j7({RAW_NODES:o,RAW_EDGES:t,QUESTION_BANK:r,lang:a,quizPreset:s="standard",onComplete:c,onExit:d}){var Te,je;const f=Zl[s]??Zl.standard,y=D.useMemo(()=>ao(o,t),[o,t]),x=D.useMemo(()=>[...new Set([...Object.keys(y.prereqs),...Object.keys(y.dependents),...Object.keys(r)])].map(ae=>({id:ae})),[y,r]),g=D.useMemo(()=>Object.fromEntries(o.map(xe=>[xe.id,xe])),[o]),[w,S]=D.useState({}),[j,q]=D.useState({correct:0,incorrect:0,questionsAnswered:0}),[k,T]=D.useState(new Set),[A,L]=D.useState({}),[H,F]=D.useState("answering"),[E,G]=D.useState(null),[I,Q]=D.useState(0),Y=D.useMemo(()=>{const xe=j.correct+j.incorrect;return xe===0?.5:(j.correct+.5)/(xe+1)},[j]),te=D.useMemo(()=>dc(x,w,y,Y),[x,w,y,Y]),re=D.useMemo(()=>{const xe=[];return k.forEach(ae=>{const[he,Ce]=ae.split(":");he===te&&xe.push(parseInt(Ce,10))}),xe},[k,te]),J=D.useMemo(()=>te?Wi(r,te,re):null,[r,te,re]),ee=D.useMemo(()=>J?No.random(J.options.length):null,[J]),fe=D.useMemo(()=>ee?ee.apply(J.options):[],[ee,J]),be=D.useMemo(()=>ee?ee.displayIndex(J.correct):-1,[ee,J]),ze=D.useMemo(()=>pc(x,w,j.questionsAnswered,f),[x,w,j.questionsAnswered,f]);D.useEffect(()=>{ze&&j.questionsAnswered>0&&F("done")},[ze,j.questionsAnswered]);const ie=D.useCallback(()=>{E!==null&&F("revealed")},[E]),X=D.useCallback(()=>{const xe=E===be,ae=(J==null?void 0:J.tests)??{[te]:1};S(he=>Hi(te,xe,ae,he,y)),L(he=>({...he,[te]:{correct:xe,questionText:(J==null?void 0:J.q)??null}})),(J==null?void 0:J.index)!=null&&T(he=>new Set([...he,`${te}:${J.index}`])),q(he=>({correct:he.correct+(xe?1:0),incorrect:he.incorrect+(xe?0:1),questionsAnswered:he.questionsAnswered+1})),G(null),F("answering"),Q(he=>he+1)},[E,be,J,te,y]),$e=D.useCallback(xe=>{const ae={[te]:1};S(he=>Hi(te,xe,ae,he,y)),L(he=>({...he,[te]:{correct:xe,questionText:null}})),T(he=>new Set([...he,`${te}:-1`])),q(he=>({correct:he.correct+(xe?1:0),incorrect:he.incorrect+(xe?0:1),questionsAnswered:he.questionsAnswered+1})),Q(he=>he+1)},[te,y]);D.useEffect(()=>{const xe=ae=>{if(ae.key==="Enter"&&(H==="answering"&&E!==null?ie():H==="revealed"&&X()),H==="answering"&&["1","2","3","4"].includes(ae.key)){const he=parseInt(ae.key)-1;he<fe.length&&G(he)}};return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[H,E,ie,X,fe.length]),D.useEffect(()=>{H==="done"&&c(w,j,A)},[H]);const ne=te?(a==="pl"?(Te=g[te])==null?void 0:Te.labelPl:(je=g[te])==null?void 0:je.label)??te:"",R=xe=>m.jsx("span",{dangerouslySetInnerHTML:{__html:Sn(xe)}});if(H==="done"||!te&&j.questionsAnswered>0)return m.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:_.bg,fontFamily:qe,display:"flex",alignItems:"center",justifyContent:"center",color:_.textDim,fontSize:14},children:N("quizProcessing",a)});const Z=f.maxQuestions,_e=Z>0?Math.min(100,Math.round(j.questionsAnswered/Z*100)):0;return m.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:_.bg,fontFamily:qe,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsx("button",{onClick:()=>{(j.questionsAnswered===0||window.confirm(N("quizExitConfirm",a)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("quizExit",a)}),m.jsxs("span",{style:{fontSize:12,color:_.textFaint},children:[N("quizQuestion",a)," ",j.questionsAnswered+1]})]}),m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16},children:[m.jsx("div",{style:{height:3,borderRadius:2,background:_.border,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${_e}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:_.textFaint},children:[m.jsxs("span",{children:[j.questionsAnswered," / ",Z," ",N("quizOf",a)]}),m.jsxs("span",{children:[j.correct," ",N("quizCorrectShort",a)]})]})]}),m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:40,animation:"fadeIn 0.25s ease"},children:[m.jsx("div",{style:{fontSize:11,color:_.textFaint,marginBottom:16,letterSpacing:.5},children:ne}),J?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{fontSize:16,color:_.textPrimary,lineHeight:1.7,marginBottom:28},children:R(J.q)}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:fe.map((xe,ae)=>{let he="transparent",Ce=_.border,Ge=_.textBody;return E===ae&&H==="answering"&&(he="#4a9eff12",Ce="#4a9eff60",Ge="#4a9eff"),H==="revealed"&&(ae===be?(he="#27ae6015",Ce="#27ae6060",Ge="#2ecc71"):ae===E?(he="#e74c3c15",Ce="#e74c3c60",Ge="#ff6b6b"):Ge=_.textFaint),m.jsxs("button",{onClick:()=>{H==="answering"&&G(ae)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:qe,cursor:H==="answering"?"pointer":"default",background:he,border:`1px solid ${Ce}`,color:Ge,lineHeight:1.6,transition:"all 0.15s ease"},children:[m.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][ae]}),R(xe)]},ae)})}),H==="revealed"&&J.hint&&m.jsxs("div",{style:{fontSize:12,color:_.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${_.border}`},children:[R(J.hint),E!==be&&(()=>{var Ge;const xe=g[te],ae=(Ge=xe==null?void 0:xe.resources)==null?void 0:Ge.find(Pn=>Pn.type==="interactive");if(!ae)return null;const Ce=ae.url.startsWith("http")?ae.url:`${"/".replace(/\/$/,"")}/${ae.url.replace(/^\//,"")}?lang=${a}`;return m.jsxs("a",{href:Ce,target:"_blank",rel:"noopener noreferrer",style:{display:"block",marginTop:10,padding:"8px 12px",borderRadius:6,background:"#58C4DD10",border:"1px solid #58C4DD30",color:"#58C4DD",fontSize:12,fontFamily:qe,textDecoration:"none"},children:["⬡ ",N("quizSeeViz",a)]})})()]}),H==="answering"?m.jsxs("button",{onClick:ie,disabled:E===null,style:{...gs("#4a9eff"),width:"100%",opacity:E===null?.3:1},children:[N("quizCheck",a),m.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):m.jsxs("button",{onClick:X,style:{...gs(E===be?_.known:"#4a9eff"),width:"100%"},children:[N("quizContinue",a),m.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):m.jsxs("div",{children:[m.jsx("p",{style:{fontSize:15,color:_.textBody,lineHeight:1.7,marginBottom:24},children:N("quizNoQuestion",a)}),m.jsxs("div",{style:{display:"flex",gap:10},children:[m.jsx("button",{onClick:()=>$e(!0),style:{...gs(_.known),flex:1},children:N("quizYes",a)}),m.jsx("button",{onClick:()=>$e(!1),style:{...gs(_.unknown),flex:1},children:N("quizNo",a)})]})]})]},I),m.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function gs(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}const ip=10;function S7({goalId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:a,lang:s,onComplete:c,onExit:d}){var Ge,Pn,Wt,qn;const f=D.useMemo(()=>ao(t,r),[t,r]),y=D.useMemo(()=>t.map(We=>({id:We.id})),[t]),x=D.useMemo(()=>Object.fromEntries(t.map(We=>[We.id,We])),[t]),g=D.useMemo(()=>[...$p(o,f,y)],[o,f,y]),w=D.useMemo(()=>g.map(We=>({id:We})),[g]),[S,j]=D.useState({}),[q,k]=D.useState({correct:0,incorrect:0,questionsAnswered:0}),[T,A]=D.useState(new Set),[L,H]=D.useState({}),[F,E]=D.useState("answering"),[G,I]=D.useState(null),[Q,Y]=D.useState(0),te=D.useMemo(()=>{const We=q.correct+q.incorrect;return We===0?.5:(q.correct+.5)/(We+1)},[q]),re=D.useMemo(()=>dc(w,S,f,te),[w,S,f,te]),J=D.useMemo(()=>{const We=[];return T.forEach(tn=>{const[Be,Cn]=tn.split(":");Be===re&&We.push(parseInt(Cn,10))}),We},[T,re]),ee=D.useMemo(()=>re?Wi(a,re,J):null,[a,re,J]),fe=D.useMemo(()=>ee?No.random(ee.options.length):null,[ee]),be=D.useMemo(()=>fe?fe.apply(ee.options):[],[fe,ee]),ze=D.useMemo(()=>fe?fe.displayIndex(ee.correct):-1,[fe,ee]),ie=D.useMemo(()=>({maxQuestions:ip,completionRatio:0}),[]),X=D.useMemo(()=>pc(w,S,q.questionsAnswered,ie),[w,S,q.questionsAnswered,ie]);D.useEffect(()=>{X&&q.questionsAnswered>0&&E("done")},[X,q.questionsAnswered]);const $e=D.useCallback(()=>{G!==null&&E("revealed")},[G]),ne=D.useCallback(()=>{const We=G===ze,tn=(ee==null?void 0:ee.tests)??{[re]:1};j(Be=>Hi(re,We,tn,Be,f)),H(Be=>({...Be,[re]:{correct:We,questionText:(ee==null?void 0:ee.q)??null}})),(ee==null?void 0:ee.index)!=null&&A(Be=>new Set([...Be,`${re}:${ee.index}`])),k(Be=>({correct:Be.correct+(We?1:0),incorrect:Be.incorrect+(We?0:1),questionsAnswered:Be.questionsAnswered+1})),I(null),E("answering"),Y(Be=>Be+1)},[G,ze,ee,re,f]),R=D.useCallback(We=>{const tn={[re]:1};j(Be=>Hi(re,We,tn,Be,f)),H(Be=>({...Be,[re]:{correct:We,questionText:null}})),A(Be=>new Set([...Be,`${re}:-1`])),k(Be=>({correct:Be.correct+(We?1:0),incorrect:Be.incorrect+(We?0:1),questionsAnswered:Be.questionsAnswered+1})),Y(Be=>Be+1)},[re,f]);D.useEffect(()=>{const We=tn=>{if(tn.key==="Enter"&&(F==="answering"&&G!==null?$e():F==="revealed"&&ne()),F==="answering"&&["1","2","3","4"].includes(tn.key)){const Be=parseInt(tn.key)-1;Be<be.length&&I(Be)}};return window.addEventListener("keydown",We),()=>window.removeEventListener("keydown",We)},[F,G,$e,ne,be.length]),D.useEffect(()=>{F==="done"&&c(o,S,q,L)},[F]);const Z=s==="pl"?(Ge=x[o])==null?void 0:Ge.labelPl:(Pn=x[o])==null?void 0:Pn.label,_e=re?(s==="pl"?(Wt=x[re])==null?void 0:Wt.labelPl:(qn=x[re])==null?void 0:qn.label)??re:"",Te=We=>m.jsx("span",{dangerouslySetInnerHTML:{__html:Sn(We)}}),je=Object.values(S).filter(We=>We==="known").length,xe=Object.values(S).filter(We=>We==="unknown").length,ae=je+xe,he=g.length,Ce=he>0?Math.round(ae/he*100):0;return F==="done"||!re&&q.questionsAnswered>0?m.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:_.bg,fontFamily:qe,display:"flex",alignItems:"center",justifyContent:"center",color:_.textDim,fontSize:14},children:N("quizProcessing",s)}):m.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:_.bg,fontFamily:qe,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsx("button",{onClick:()=>{(q.questionsAnswered===0||window.confirm(N("quizExitConfirm",s)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("quizExit",s)}),m.jsxs("span",{style:{fontSize:12,color:_.textFaint},children:[N("quizQuestion",s)," ",q.questionsAnswered+1," / ",ip]})]}),m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16,padding:"10px 14px",borderRadius:8,background:"#4a9eff08",border:"1px solid #4a9eff20"},children:[m.jsx("div",{style:{fontSize:10,color:_.textFaint,letterSpacing:.5,marginBottom:2},children:N("goalQuizSub",s)}),m.jsx("div",{style:{fontSize:13,color:"#4a9eff",fontWeight:600},children:Z}),m.jsxs("div",{style:{fontSize:10,color:_.textFaint,marginTop:2},children:[he," ",N("goalQuizTopics",s)]})]}),m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:12},children:[m.jsx("div",{style:{height:3,borderRadius:2,background:_.border,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Ce}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:_.textFaint},children:[m.jsxs("span",{children:[ae,"/",he," ",N("quizClassified",s)]}),m.jsxs("span",{children:[Math.round(te*100),"% ",N("quizAccuracy",s)]})]})]}),m.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:32,animation:"fadeIn 0.25s ease"},children:[m.jsx("div",{style:{fontSize:11,color:_.textFaint,marginBottom:16,letterSpacing:.5},children:_e}),ee?m.jsxs(m.Fragment,{children:[m.jsx("div",{style:{fontSize:16,color:_.textPrimary,lineHeight:1.7,marginBottom:28},children:Te(ee.q)}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:be.map((We,tn)=>{let Be="transparent",Cn=_.border,Rn=_.textBody;return G===tn&&F==="answering"&&(Be="#4a9eff12",Cn="#4a9eff60",Rn="#4a9eff"),F==="revealed"&&(tn===ze?(Be="#27ae6015",Cn="#27ae6060",Rn="#2ecc71"):tn===G?(Be="#e74c3c15",Cn="#e74c3c60",Rn="#ff6b6b"):Rn=_.textFaint),m.jsxs("button",{onClick:()=>{F==="answering"&&I(tn)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:qe,cursor:F==="answering"?"pointer":"default",background:Be,border:`1px solid ${Cn}`,color:Rn,lineHeight:1.6,transition:"all 0.15s ease"},children:[m.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][tn]}),Te(We)]},tn)})}),F==="revealed"&&ee.hint&&m.jsx("div",{style:{fontSize:12,color:_.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${_.border}`},children:Te(ee.hint)}),F==="answering"?m.jsxs("button",{onClick:$e,disabled:G===null,style:{...xs("#4a9eff"),width:"100%",opacity:G===null?.3:1},children:[N("quizCheck",s),m.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):m.jsxs("button",{onClick:ne,style:{...xs(G===ze?_.known:"#4a9eff"),width:"100%"},children:[N("quizContinue",s),m.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):m.jsxs("div",{children:[m.jsx("p",{style:{fontSize:15,color:_.textBody,lineHeight:1.7,marginBottom:24},children:N("quizNoQuestion",s)}),m.jsxs("div",{style:{display:"flex",gap:10},children:[m.jsx("button",{onClick:()=>R(!0),style:{...xs(_.known),flex:1},children:N("quizYes",s)}),m.jsx("button",{onClick:()=>R(!1),style:{...xs(_.unknown),flex:1},children:N("quizNo",s)})]})]})]},Q),m.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function xs(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function q7({RAW_NODES:o,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:a,belief:s,stats:c,evidence:d,lang:f,onSeeMap:y,onRetake:x,onSelectTopic:g,onStartPath:w}){const S=D.useMemo(()=>ao(o,t),[o,t]),j=D.useMemo(()=>Object.fromEntries(o.map(E=>[E.id,E])),[o]),q=E=>{var G,I;return f==="pl"?(G=j[E])==null?void 0:G.labelPl:(I=j[E])==null?void 0:I.label},k=o.filter(E=>s[E.id]==="known"),T=o.filter(E=>s[E.id]==="unknown"),A=o.length,L=D.useMemo(()=>T.filter(E=>(S.prereqs[E.id]??[]).every(G=>s[G]==="known")).slice(0,8),[T,S,s]),H=c.correct+c.incorrect>0?Math.round(c.correct/(c.correct+c.incorrect)*100):0,F=L.length>0;return m.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:_.bg,fontFamily:qe,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:m.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%"},children:[m.jsx("div",{style:{fontSize:11,color:_.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),m.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:_.textPrimary,lineHeight:1.3},children:N("resultsTitle",f)}),m.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:_.textDim,lineHeight:1.6},children:[c.questionsAnswered," ",N("resultsAnswered",f)," · ",H,"% ",N("resultsAccuracy",f)]}),m.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[m.jsx(ap,{count:k.length,label:N("resultsKnown",f),color:_.known,total:A}),m.jsx(ap,{count:T.length,label:N("resultsToStudy",f),color:"#e74c3c",total:A})]}),F&&m.jsxs("div",{style:{marginBottom:32},children:[m.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:_.textPrimary},children:N("resultsGapsTitle",f)}),m.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:_.textDim,lineHeight:1.6},children:N("resultsGapsSub",f)}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:L.map((E,G)=>{var te;const I=(r==null?void 0:r[E.scope])??_.textDim,Q=((te=a==null?void 0:a[E.scope])==null?void 0:te[f==="pl"?"pl":"en"])??"",Y=E.resources&&E.resources.length>0;return m.jsxs("div",{onClick:()=>g==null?void 0:g(E.id),style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12,cursor:g?"pointer":"default",transition:"background 0.15s, border-color 0.15s"},onMouseEnter:re=>{g&&(re.currentTarget.style.background="#e74c3c14",re.currentTarget.style.borderColor="#e74c3c40")},onMouseLeave:re=>{g&&(re.currentTarget.style.background="#e74c3c08",re.currentTarget.style.borderColor="#e74c3c20")},children:[m.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${I}18`,border:`1px solid ${I}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:I,flexShrink:0,fontWeight:600},children:G+1}),m.jsxs("div",{style:{flex:1},children:[m.jsx("div",{style:{fontSize:13,color:_.textPrimary,fontWeight:500},dangerouslySetInnerHTML:{__html:Sn(q(E.id)??"")}}),m.jsxs("div",{style:{fontSize:10,color:_.textFaint,marginTop:2},children:[Q,Y&&m.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:N("resultsHasResource",f)})]})]})]},E.id)})}),T.length>L.length&&m.jsxs("div",{style:{marginTop:8,fontSize:11,color:_.textFaint},children:["+",T.length-L.length," ",N("resultsMore",f)]})]}),!F&&T.length===0&&m.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[m.jsx("div",{style:{fontSize:15,color:_.known,fontWeight:600,marginBottom:4},children:N("resultsAllGood",f)}),m.jsx("div",{style:{fontSize:12,color:_.textDim},children:N("resultsAllGoodSub",f)})]}),m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[F&&L[0]&&w&&m.jsx("button",{onClick:()=>w(L[0].id),style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:N("resultsStartPath",f)}),m.jsx("button",{onClick:y,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textBody,cursor:"pointer"},children:N("resultsSeeMap",f)}),m.jsx("button",{onClick:()=>{const G=`https://oczochodzi.pl/#/results/${s?Vl(s):""}`,I=f==="pl"?`Sprawdziłem swoją wiedzę z matmy — ${k.length}/${A} tematów znanych! Sprawdź się:`:`I tested my math knowledge — ${k.length}/${A} topics known! Try it:`;navigator.share?navigator.share({title:"oczochodzi.pl",text:I,url:G}).catch(()=>{}):navigator.clipboard.writeText(`${I} ${G}`).then(()=>{alert(f==="pl"?"Skopiowano do schowka!":"Copied to clipboard!")})},style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textBody,cursor:"pointer"},children:N("resultsShare",f)}),m.jsx("button",{onClick:x,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("resultsRetake",f)})]}),m.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:`1px solid ${_.border}`,textAlign:"center"},children:[m.jsx("p",{style:{fontSize:12,color:_.textDim,marginBottom:8,lineHeight:1.6},children:N("coffeeText",f)}),m.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:13,fontFamily:qe,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",textDecoration:"none",cursor:"pointer"},children:N("coffeeBtn",f)})]})]})})}function ap({count:o,label:t,color:r,total:a}){const s=a>0?Math.round(o/a*100):0;return m.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[m.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),m.jsx("div",{style:{fontSize:11,color:_.textFaint,marginTop:6},children:t}),m.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${s}%`,background:r,opacity:.6}})}),m.jsxs("div",{style:{fontSize:10,color:_.textFaint,marginTop:4},children:[s,"% of ",a]})]})}function T7({RAW_NODES:o,SCOPE_COLORS:t,SCOPE_LABELS:r,lang:a,onClose:s}){const[c,d]=D.useState(""),[f,y]=D.useState(null),[x,g]=D.useState(null),w=D.useMemo(()=>{const T=[];for(const A of o)if(A.resources)for(const L of A.resources)L.type==="interactive"&&T.push({nodeId:A.id,nodeLabel:a==="pl"?A.labelPl:A.label,scope:A.scope,section:A.section,title:a==="pl"?L.titlePl:L.titleEn,resource:L,isDlaCiekawych:(L.titlePl||"").includes("Dla ciekawych")||(L.titleEn||"").includes("curious")});return T},[o,a]),S=D.useMemo(()=>{const T=c.toLowerCase();return w.filter(A=>!(x&&A.scope!==x||T&&!A.title.toLowerCase().includes(T)&&!A.nodeLabel.toLowerCase().includes(T)))},[w,c,x]),j=D.useMemo(()=>[...new Set(w.map(A=>A.scope))].sort(),[w]),q=T=>(t==null?void 0:t[T])??"#4a9eff",k=T=>{var A;return((A=r==null?void 0:r[T])==null?void 0:A[a==="pl"?"pl":"en"])??T};return m.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:_.bg,fontFamily:qe,overflowY:"auto",animation:"galleryIn 0.2s ease"},children:[m.jsx("style",{children:`
        @keyframes galleryIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),m.jsxs("div",{style:{maxWidth:"min(720px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[m.jsx("button",{onClick:s,style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:"←"}),m.jsxs("div",{children:[m.jsx("h1",{style:{margin:0,fontSize:20,fontWeight:700,color:_.textPrimary},children:N("galleryTitle",a)}),m.jsxs("p",{style:{margin:0,fontSize:12,color:_.textDim},children:[S.length," ",N("galleryCount",a)]})]})]}),m.jsx("input",{type:"text",value:c,onChange:T=>d(T.target.value),placeholder:N("search",a),style:{width:"100%",padding:"12px 14px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:_.surface,color:_.textBody,marginBottom:12,outline:"none"}}),m.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:20},children:[m.jsx("button",{onClick:()=>g(null),style:{padding:"6px 12px",fontSize:11,fontFamily:qe,borderRadius:16,cursor:"pointer",border:x?`1px solid ${_.border}`:"1px solid #4a9eff",background:x?"transparent":"#4a9eff18",color:x?_.textDim:"#4a9eff"},children:N("all",a)}),j.map(T=>m.jsx("button",{onClick:()=>g(x===T?null:T),style:{padding:"6px 12px",fontSize:11,fontFamily:qe,borderRadius:16,cursor:"pointer",border:x===T?`1px solid ${q(T)}`:`1px solid ${_.border}`,background:x===T?`${q(T)}18`:"transparent",color:x===T?q(T):_.textDim},children:k(T)},T))]}),m.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:S.map((T,A)=>{const L=q(T.scope);return m.jsxs("button",{onClick:()=>y(T.resource),style:{padding:"16px 14px",borderRadius:10,background:_.surface,border:`1px solid ${_.border}`,cursor:"pointer",textAlign:"left",fontFamily:qe,display:"flex",flexDirection:"column",gap:8,transition:"border-color 0.15s, background 0.15s"},onMouseEnter:H=>{H.currentTarget.style.borderColor=L+"60",H.currentTarget.style.background=`${L}08`},onMouseLeave:H=>{H.currentTarget.style.borderColor=_.border,H.currentTarget.style.background=_.surface},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsx("span",{style:{fontSize:22},children:"⬡"}),T.isDlaCiekawych&&m.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:4,background:"#8e44ad18",color:"#c39bd3",border:"1px solid #8e44ad30"},children:"🧩"})]}),m.jsx("div",{style:{fontSize:13,fontWeight:600,color:_.textPrimary,lineHeight:1.4},children:T.title}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:"auto"},children:[m.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:L,flexShrink:0}}),m.jsx("span",{style:{fontSize:10,color:_.textFaint},children:T.nodeLabel})]})]},`${T.nodeId}-${A}`)})}),S.length===0&&m.jsx("div",{style:{textAlign:"center",padding:"40px 0",color:_.textFaint,fontSize:13},children:N("noResults",a)})]}),f&&m.jsx(gp,{resource:f,lang:a,onClose:()=>y(null)})]})}function A7({savedCourse:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c,lang:d,onResumePath:f,onStartLesson:y,onStartNew:x,onSeeMap:g,onClose:w}){const[S,j]=D.useState(!1),{goalId:q,belief:k={},evidence:T={},createdAt:A}=o??{},L=D.useMemo(()=>ao(t,r),[t,r]),H=D.useMemo(()=>Object.fromEntries(t.map(ee=>[ee.id,ee])),[t]),F=ee=>{var fe,be;return d==="pl"?(fe=H[ee])==null?void 0:fe.labelPl:(be=H[ee])==null?void 0:be.label},E=D.useMemo(()=>{const ee=new Set;if(q){const ie=[q];for(;ie.length;){const X=ie.shift();if(!ee.has(X)&&H[X]){ee.add(X);for(const $e of L.prereqs[X]??[])ee.has($e)||ie.push($e)}}}else for(const ie of t)ee.add(ie.id);const fe={};for(const ie of ee)fe[ie]=0;for(const ie of ee)for(const X of L.dependents[ie]??[])ee.has(X)&&(fe[X]=(fe[X]||0)+1);const be=[],ze=[];for(const ie of ee)fe[ie]===0&&ze.push(ie);for(;ze.length;){ze.sort((X,$e)=>{var ne,R;return(((ne=H[X])==null?void 0:ne.level)??0)-(((R=H[$e])==null?void 0:R.level)??0)});const ie=ze.shift();be.push(ie);for(const X of L.dependents[ie]??[])ee.has(X)&&(fe[X]--,fe[X]===0&&ze.push(X))}return be},[q,L,H,t]),G=E.filter(ee=>k[ee]==="known").length,I=E.filter(ee=>k[ee]==="unknown").length,Q=E.length-G-I,Y=E.length,te=Y>0?Math.round(G/Y*100):0,re=E.find(ee=>k[ee]!=="known")??null,J=A?new Date(A).toLocaleDateString(d==="pl"?"pl-PL":"en-US",{year:"numeric",month:"short",day:"numeric"}):"—";return m.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:_.bg,fontFamily:qe,overflowY:"auto",animation:"profileSlideIn 0.2s ease"},children:[m.jsx("style",{children:`
        @keyframes profileSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),m.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[m.jsxs("button",{onClick:w,style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer",marginBottom:24},children:["← ",N("topicBack",d)]}),m.jsx("div",{style:{marginBottom:6},children:m.jsx("span",{style:{fontSize:10,color:_.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:"oczochodzi.pl"})}),m.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:_.textPrimary,lineHeight:1.3},children:N("profileTitle",d)}),m.jsxs("div",{style:{padding:"18px 16px",borderRadius:10,background:_.surface,border:`1px solid ${_.border}`,marginBottom:28},children:[m.jsx("div",{style:{fontSize:12,color:_.textDim,marginBottom:10,lineHeight:1.5},children:q?m.jsxs("span",{children:[N("profileGoal",d),":"," ",m.jsx("span",{style:{color:_.textPrimary,fontWeight:600},dangerouslySetInnerHTML:{__html:Sn(F(q)??"")}})]}):m.jsx("span",{style:{color:_.textPrimary,fontWeight:600},children:N("profileFullCourse",d)})}),m.jsxs("div",{style:{fontSize:11,color:_.textFaint,marginBottom:14},children:[N("profileStarted",d),": ",J]}),m.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[m.jsx(Ul,{count:G,label:N("resultsKnown",d),color:_.known}),m.jsx(Ul,{count:I,label:N("resultsToStudy",d),color:"#e74c3c"}),m.jsx(Ul,{count:Q,label:N("unclassified",d),color:_.textFaint})]}),m.jsx("div",{style:{height:4,borderRadius:2,background:_.border,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${te}%`,background:_.known,transition:"width 0.4s ease"}})}),m.jsxs("div",{style:{fontSize:10,color:_.textFaint,marginTop:6,textAlign:"right"},children:[te,"% (",G,"/",Y,")"]})]}),m.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:_.textPrimary},children:N("profileTimeline",d)}),m.jsxs("p",{style:{margin:"0 0 16px",fontSize:12,color:_.textDim,lineHeight:1.6},children:[Y," ",N("pathTopics",d)]}),m.jsxs("div",{style:{position:"relative",marginBottom:32},children:[m.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:_.border,borderRadius:1}}),E.map((ee,fe)=>{var je,xe;const be=H[ee],ze=q&&ee===q,ie=k[ee],X=T[ee],$e=!!X,ne=(a==null?void 0:a[be==null?void 0:be.scope])??"#4a9eff",R=((je=s==null?void 0:s[be==null?void 0:be.scope])==null?void 0:je[d==="pl"?"pl":"en"])??"",Z=((xe=c==null?void 0:c[be==null?void 0:be.section])==null?void 0:xe.label)??"";let _e=_.textFaint,Te=_.border;return ie==="known"?(_e=_.known,Te=_.known):ie==="unknown"&&(_e="#e74c3c",Te="#e74c3c"),m.jsxs("div",{onClick:()=>f(ee),style:{position:"relative",paddingLeft:40,paddingBottom:fe<E.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[m.jsx("div",{style:{position:"absolute",left:8,top:12,width:ze?16:12,height:ze?16:12,borderRadius:"50%",background:ie?_e:_.bg,border:`2px solid ${ie?Te:_.textFaint}`,marginLeft:ze?-2:0,zIndex:1}}),m.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:ze?`${ne}10`:"transparent",border:`1px solid ${ze?ne+"30":_.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:ae=>{ze||(ae.currentTarget.style.background=`${_.textFaint}10`,ae.currentTarget.style.borderColor=_.border)},onMouseLeave:ae=>{ze||(ae.currentTarget.style.background="transparent",ae.currentTarget.style.borderColor=_.borderSubtle)},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[m.jsx("span",{style:{fontSize:13,fontWeight:ze?700:500,color:ze?_.textPrimary:_.textBody,flex:1},dangerouslySetInnerHTML:{__html:Sn(F(ee)??"")}}),m.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[$e&&m.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:X.correct?"#27ae6015":"#e74c3c15",color:X.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${X.correct?"#27ae6030":"#e74c3c30"}`},children:X.correct?"✓":"✗"}),ie==="known"&&!$e&&m.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#27ae6015",color:"#2ecc71",border:"1px solid #27ae6030"},children:"✓"}),ie==="unknown"&&!$e&&m.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#e74c3c15",color:"#ff6b6b",border:"1px solid #e74c3c30"},children:"✗"})]})]}),m.jsxs("div",{style:{fontSize:10,color:_.textFaint,marginTop:3},children:[Z,Z&&R?" · ":"",R,ze&&m.jsx("span",{style:{color:ne,marginLeft:6},children:N("pathGoal",d)})]})]})]},ee)})]}),m.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[re&&m.jsx("button",{onClick:()=>{y?y(E,q):f(re)},style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:N("profileContinue",d)}),m.jsx("button",{onClick:g,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textBody,cursor:"pointer"},children:N("resultsSeeMap",d)}),S?m.jsxs("div",{style:{padding:"14px 16px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c30",textAlign:"center"},children:[m.jsx("p",{style:{margin:"0 0 10px",fontSize:12,color:_.textBody,lineHeight:1.5},children:N("profileStartNewConfirm",d)}),m.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:[m.jsx("button",{onClick:()=>{j(!1),x()},style:{padding:"8px 18px",fontSize:12,fontFamily:qe,borderRadius:6,border:"1px solid #e74c3c50",background:"#e74c3c18",color:"#e74c3c",cursor:"pointer",fontWeight:600},children:N("profileStartNew",d)}),m.jsx("button",{onClick:()=>j(!1),style:{padding:"8px 18px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("cancel",d)})]})]}):m.jsx("button",{onClick:()=>j(!0),style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("profileStartNew",d)})]})]})]})}function Ul({count:o,label:t,color:r}){return m.jsxs("div",{style:{flex:1,textAlign:"center",padding:"8px 6px",borderRadius:6,background:`${r}08`,border:`1px solid ${r}20`},children:[m.jsx("div",{style:{fontSize:20,fontWeight:700,color:r,lineHeight:1},children:o}),m.jsx("div",{style:{fontSize:10,color:_.textFaint,marginTop:4},children:t})]})}function M7({path:o,goalId:t,RAW_NODES:r,RAW_EDGES:a,QUESTION_BANK:s,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:f,belief:y,evidence:x,lang:g,onUpdateBelief:w,onClose:S}){var ie,X,$e;const j=D.useMemo(()=>ao(r,a),[r,a]),q=D.useMemo(()=>Object.fromEntries(r.map(ne=>[ne.id,ne])),[r]),k=D.useMemo(()=>{const ne=o.findIndex(R=>y[R]!=="known");return ne>=0?ne:0},[]),[T,A]=D.useState(k),[L,H]=D.useState(!1),F=o.length,E=o.filter(ne=>y[ne]==="known").length,G=F>0?Math.round(E/F*100):0,I=o[T],Q=q[I],Y=D.useCallback(()=>{const ne=uc(I,y,j),R={...x};w(ne,R),T<F-1?A(T+1):H(!0)},[I,y,j,x,w,T,F]),te=D.useCallback(()=>{T>0&&A(T-1)},[T]),re=D.useCallback(()=>{T<F-1?A(T+1):H(!0)},[T,F]);if(L)return m.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,background:_.bg,fontFamily:qe,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},children:m.jsxs("div",{style:{textAlign:"center",maxWidth:400},children:[m.jsx("div",{style:{fontSize:40,marginBottom:16},children:"🎉"}),m.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:_.textPrimary},children:N("lessonComplete",g)}),m.jsx("p",{style:{margin:"0 0 28px",fontSize:13,color:_.textDim,lineHeight:1.6},children:N("lessonCompleteSub",g)}),m.jsxs("button",{onClick:S,style:{padding:"14px 28px",fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:["← ",N("topicBack",g)]})]})});if(!Q)return null;const J=g==="pl"?Q.labelPl:Q.label,ee=(c==null?void 0:c[Q.scope])??"#4a9eff",fe=((ie=d==null?void 0:d[Q.scope])==null?void 0:ie[g==="pl"?"pl":"en"])??"",be=((X=f==null?void 0:f[Q.section])==null?void 0:X.label)??"",ze=(Q.resources??[]).find(ne=>ne.type==="interactive");return m.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:_.bg,fontFamily:qe,overflowY:"auto",animation:"lessonSlideIn 0.2s ease"},children:[m.jsx("style",{children:`
        @keyframes lessonSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),m.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[m.jsxs("button",{onClick:S,style:{padding:"10px 14px",fontSize:12,fontFamily:qe,borderRadius:6,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:["← ",N("topicBack",g)]}),m.jsxs("span",{style:{fontSize:12,color:_.textFaint},children:[T+1," ",N("lessonOf",g)," ",F]})]}),m.jsx("div",{style:{height:4,borderRadius:2,background:_.border,overflow:"hidden",marginBottom:24},children:m.jsx("div",{style:{height:"100%",borderRadius:2,width:`${G}%`,background:_.known,transition:"width 0.4s ease"}})}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[m.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:ee,opacity:.8,flexShrink:0}}),m.jsxs("span",{style:{fontSize:11,color:_.textDim},children:[be," · ",fe]})]}),m.jsx("h1",{style:{margin:"0 0 16px",fontSize:22,fontWeight:700,color:_.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:Sn(J??"")}}),Q.body&&m.jsx("div",{style:{fontSize:13,color:_.textBody,lineHeight:1.7,marginBottom:24},dangerouslySetInnerHTML:{__html:Sn((($e=Q.body.split("<!-- example -->")[0])==null?void 0:$e.trim())??"")}}),ze&&m.jsx(P7,{resource:ze,lang:g}),m.jsx(C7,{nodeId:I,QUESTION_BANK:s,belief:y,evidence:x,adjacency:j,lang:g,onUpdateBelief:w}),m.jsxs("div",{style:{borderTop:`1px solid ${_.border}`,paddingTop:20,marginTop:28,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"},children:[T>0&&m.jsx("button",{onClick:te,style:{padding:"12px 18px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("lessonPrev",g)}),m.jsx("button",{onClick:Y,style:{flex:1,padding:"14px 20px",fontSize:14,fontWeight:600,fontFamily:qe,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer",textAlign:"center",minWidth:180},children:N("iUnderstand",g)}),T<F-1&&m.jsx("button",{onClick:re,style:{padding:"12px 18px",fontSize:13,fontFamily:qe,borderRadius:8,border:`1px solid ${_.border}`,background:"transparent",color:_.textDim,cursor:"pointer"},children:N("lessonNext",g)})]})]})]})}function P7({resource:o,lang:t}){const a=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,s=a+(a.includes("?")?"&":"?")+"lang="+t,c=t==="pl"?o.titlePl:o.titleEn;return m.jsxs("div",{style:{marginBottom:24},children:[m.jsxs("div",{style:{fontSize:11,fontWeight:600,color:"#58C4DD",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:8},children:[m.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#58C4DD20"}}),m.jsx("span",{style:{flexShrink:0},children:N("lessonViz",t)}),m.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#58C4DD20"}})]}),m.jsx("div",{style:{borderRadius:10,overflow:"hidden",border:"1px solid #58C4DD25",background:"#0e0e12"},children:m.jsx("iframe",{src:s,sandbox:"allow-scripts allow-same-origin allow-forms",style:{width:"100%",height:420,border:"none",display:"block",background:"#0e0e12"},title:c,loading:"lazy"})})]})}function C7({nodeId:o,QUESTION_BANK:t,belief:r,evidence:a,adjacency:s,lang:c,onUpdateBelief:d}){const[f,y]=D.useState(null),[x,g]=D.useState(!1),[w,S]=D.useState(()=>Wi(t,o,[])),[j,q]=D.useState(o);o!==j&&(q(o),y(null),g(!1),S(Wi(t,o,[])));const k=D.useCallback(()=>{if(f==null||!w)return;g(!0);const A=f===w.correct,L={...a,[o]:{correct:A,questionText:w.q}};if(A){const H=uc(o,r,s);d(H,L)}else{const H={...r,[o]:"unknown"};d(H,L)}},[f,w,o,r,a,s,d]);if(!w)return null;const T=x&&f===w.correct;return m.jsxs("div",{style:{marginBottom:24},children:[m.jsxs("div",{style:{fontSize:11,fontWeight:600,color:"#FFD166",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:14,display:"flex",alignItems:"center",gap:8},children:[m.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#FFD16620"}}),m.jsx("span",{style:{flexShrink:0},children:N("lessonPractice",c)}),m.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#FFD16620"}})]}),m.jsx("div",{style:{fontSize:13,color:_.textBody,lineHeight:1.7,marginBottom:14},dangerouslySetInnerHTML:{__html:Sn(w.q??"")}}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:14},children:(w.options??[]).map((A,L)=>{const H=f===L,F=String.fromCharCode(65+L);let E="transparent",G=_.border,I=_.textBody;return x?L===w.correct?(E="#27ae6015",G="#27ae6050",I="#2ecc71"):H&&L!==w.correct&&(E="#e74c3c15",G="#e74c3c50",I="#ff6b6b"):H&&(E="#f39c1215",G="#f39c1250",I="#f39c12"),m.jsxs("button",{onClick:()=>{x||y(L)},style:{display:"flex",alignItems:"flex-start",gap:10,padding:"12px 14px",borderRadius:8,background:E,border:`1px solid ${G}`,cursor:x?"default":"pointer",textAlign:"left",fontFamily:qe,fontSize:13,color:I,lineHeight:1.5,transition:"background 0.15s, border-color 0.15s",width:"100%"},children:[m.jsx("span",{style:{fontWeight:700,fontSize:12,flexShrink:0,width:22,height:22,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",background:H&&!x?"#f39c1220":x&&L===w.correct?"#27ae6020":"transparent",border:`1px solid ${H&&!x?"#f39c1240":"transparent"}`},children:F}),m.jsx("span",{dangerouslySetInnerHTML:{__html:Sn(A)}})]},L)})}),x?m.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:T?"#27ae6008":"#e74c3c08",border:`1px solid ${T?"#27ae6020":"#e74c3c20"}`},children:[m.jsx("div",{style:{fontSize:13,fontWeight:600,marginBottom:6,color:T?"#2ecc71":"#ff6b6b"},children:T?c==="pl"?"Poprawnie!":"Correct!":c==="pl"?"Niepoprawnie":"Incorrect"}),w.hint&&m.jsx("div",{style:{fontSize:12,color:_.textDim,lineHeight:1.6},dangerouslySetInnerHTML:{__html:Sn(w.hint)}})]}):m.jsx("button",{onClick:k,disabled:f==null,style:{padding:"12px 24px",fontSize:13,fontWeight:600,fontFamily:qe,borderRadius:8,border:`1px solid ${f!=null?"#FFD16650":_.border}`,background:f!=null?"#FFD16618":"transparent",color:f!=null?"#FFD166":_.textFaint,cursor:f!=null?"pointer":"default",width:"100%"},children:N("lessonCheck",c)})]})}function R7(){const t=window.location.hash.replace(/^#\/?/,"").split("/");return t[0]==="results"&&t[1]?{phase:"results",code:t[1]}:t[0]==="map"&&t[1]?{phase:"map",code:t[1],node:t[2]||null}:t[0]==="map"?{phase:"map"}:null}function D7(){var xe;const o=Bx,t=Ex[o],[r,a]=st("lang","pl"),s=typeof window<"u"&&((xe=window.matchMedia)!=null&&xe.call(window,"(prefers-color-scheme: light)").matches)?"bright":"midnight",[c,d]=st("theme",s),f=R7(),y=f!=null&&f.code?Lx(f.code):null,[x,g]=D.useState((f==null?void 0:f.phase)??"hero"),[w,S]=D.useState((f==null?void 0:f.node)??null),[j,q]=D.useState(y),[k,T]=D.useState(y?{correct:0,incorrect:0,questionsAnswered:0}:null),[A,L]=D.useState(null),[H,F]=D.useState("standard"),[E,G]=D.useState(null),[I,Q]=D.useState(null),[Y,te]=st("savedCourse",null),re=D.useCallback(ae=>{d1(ae),d(ae)},[d]);d1(c),D.useEffect(()=>{let ae="";x==="results"&&j?ae=`#/results/${Vl(j)}`:x==="map"&&j&&(ae=`#/map/${Vl(j)}`),ae&&window.location.hash!==ae?window.history.replaceState(null,"",ae):!ae&&window.location.hash&&window.history.replaceState(null,"",window.location.pathname)},[x,j]);const J=D.useCallback((ae="standard")=>{F(ae),q(null),T(null),L(null),g("quiz")},[]),ee=D.useCallback((ae,he,Ce)=>{q(ae),T(he),L(Ce??{}),te({goalId:null,belief:ae,evidence:Ce??{},createdAt:new Date().toISOString()}),g("results")},[te]),fe=D.useCallback(()=>{g("goalPick")},[]),be=D.useCallback(ae=>{G(ae),q(null),T(null),L(null),g("goalQuiz")},[]),ze=D.useCallback((ae,he,Ce,Ge)=>{G(ae),q(he),T(Ce),L(Ge??{}),te({goalId:ae,belief:he,evidence:Ge??{},createdAt:new Date().toISOString()}),g("goalPath")},[te]),ie=D.useCallback(ae=>{S(ae??null),g("map")},[]),X=D.useCallback(()=>{g("gallery")},[]),$e=D.useCallback(()=>{q(null),T(null),L(null),g("map")},[]),ne=D.useCallback(()=>{g("hero")},[]),R=D.useCallback(()=>{g("profile")},[]),Z=D.useCallback(()=>{const ae={goalId:null,belief:{},evidence:{},createdAt:new Date().toISOString()};te(ae),q({}),L({}),g("profile")},[te]),_e=D.useCallback(ae=>{Y&&(q(Y.belief??{}),L(Y.evidence??{})),S(ae??null),g("map")},[Y]),Te=D.useCallback((ae,he)=>{Q(ae),G(he??null),Y&&(q(Y.belief??{}),L(Y.evidence??{})),g("lesson")},[Y]),je=D.useCallback((ae,he)=>{q(ae),L(he),te(Ce=>({...Ce??{},goalId:E,belief:ae,evidence:he,createdAt:(Ce==null?void 0:Ce.createdAt)??new Date().toISOString()}))},[E,te]);if(!t)return null;switch(x){case"hero":return m.jsx(k7,{lang:r,setLang:a,themeId:c,onThemeChange:re,onStartQuiz:J,onStartGoalQuiz:fe,onBrowseViz:X,onBrowseMap:$e,onProfile:R,onFromScratch:Z,hasSavedCourse:!!Y});case"gallery":return m.jsx(T7,{RAW_NODES:t.RAW_NODES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,lang:r,onClose:ne});case"quiz":return m.jsx(j7,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:H,onComplete:ee,onExit:ne});case"goalPick":return m.jsx(ym,{isOpen:!0,nodes:t.RAW_NODES,lang:r,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,onSelect:be,onClose:ne});case"goalQuiz":return m.jsx(S7,{goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,onComplete:ze,onExit:ne});case"goalPath":return m.jsx(fm,{goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:j,evidence:A,lang:r,onSelectTopic:ae=>ie(ae),onStartLesson:Te,onClose:ne});case"results":return m.jsx(q7,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:j,stats:k,evidence:A,lang:r,onSeeMap:ie,onRetake:()=>J(H),onSelectTopic:ae=>ie(ae),onStartPath:ae=>{G(ae),te(he=>({...he??{},goalId:ae,belief:j??{},evidence:A??{},createdAt:(he==null?void 0:he.createdAt)??new Date().toISOString()})),g("goalPath")}});case"lesson":return m.jsx(M7,{path:I,goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:j??{},evidence:A??{},lang:r,onUpdateBelief:je,onClose:()=>g(Y?"profile":"hero")});case"profile":return m.jsx(A7,{savedCourse:Y,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,lang:r,onResumePath:_e,onStartLesson:Te,onStartNew:()=>{te(null),q(null),T(null),L(null),g("hero")},onSeeMap:()=>{Y&&(q(Y.belief??{}),L(Y.evidence??{})),g("map")},onClose:ne});case"map":return m.jsx(_7,{courseId:o,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:j,initialEvidence:A,initialSelectedNode:w,initialLang:r,onBackToHome:ne},`${o}-${w??""}`);default:return null}}uh.createRoot(document.getElementById("root")).render(m.jsx(D.StrictMode,{children:m.jsx(D7,{})}));
