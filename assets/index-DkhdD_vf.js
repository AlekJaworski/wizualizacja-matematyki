(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();var fl={exports:{}},To={},pl={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function Op(){if(O1)return Ie;O1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),$=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=$&&A[$]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,q={};function B(A,Q,$e){this.props=A,this.context=Q,this.refs=q,this.updater=$e||k}B.prototype.isReactComponent={},B.prototype.setState=function(A,Q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Q,"setState")},B.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function E(){}E.prototype=B.prototype;function I(A,Q,$e){this.props=A,this.context=Q,this.refs=q,this.updater=$e||k}var W=I.prototype=new E;W.constructor=I,D(W,B.prototype),W.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,Y={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function V(A,Q,$e){var je,Se={},De=null,he=null;if(Q!=null)for(je in Q.ref!==void 0&&(he=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)O.call(Q,je)&&!P.hasOwnProperty(je)&&(Se[je]=Q[je]);var Te=arguments.length-2;if(Te===1)Se.children=$e;else if(1<Te){for(var be=Array(Te),He=0;He<Te;He++)be[He]=arguments[He+2];Se.children=be}if(A&&A.defaultProps)for(je in Te=A.defaultProps,Te)Se[je]===void 0&&(Se[je]=Te[je]);return{$$typeof:o,type:A,key:De,ref:he,props:Se,_owner:Y.current}}function ne(A,Q){return{$$typeof:o,type:A.type,key:Q,ref:A.ref,props:A.props,_owner:A._owner}}function me(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function se(A){var Q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function($e){return Q[$e]})}var ae=/\/+/g;function ve(A,Q){return typeof A=="object"&&A!==null&&A.key!=null?se(""+A.key):Q.toString(36)}function xe(A,Q,$e,je,Se){var De=typeof A;(De==="undefined"||De==="boolean")&&(A=null);var he=!1;if(A===null)he=!0;else switch(De){case"string":case"number":he=!0;break;case"object":switch(A.$$typeof){case o:case n:he=!0}}if(he)return he=A,Se=Se(he),A=je===""?"."+ve(he,0):je,F(Se)?($e="",A!=null&&($e=A.replace(ae,"$&/")+"/"),xe(Se,Q,$e,"",function(He){return He})):Se!=null&&(me(Se)&&(Se=ne(Se,$e+(!Se.key||he&&he.key===Se.key?"":(""+Se.key).replace(ae,"$&/")+"/")+A)),Q.push(Se)),1;if(he=0,je=je===""?".":je+":",F(A))for(var Te=0;Te<A.length;Te++){De=A[Te];var be=je+ve(De,Te);he+=xe(De,Q,$e,be,Se)}else if(be=z(A),typeof be=="function")for(A=be.call(A),Te=0;!(De=A.next()).done;)De=De.value,be=je+ve(De,Te++),he+=xe(De,Q,$e,be,Se);else if(De==="object")throw Q=String(A),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return he}function Fe(A,Q,$e){if(A==null)return A;var je=[],Se=0;return xe(A,je,"","",function(De){return Q.call($e,De,Se++)}),je}function Be(A){if(A._status===-1){var Q=A._result;Q=Q(),Q.then(function($e){(A._status===0||A._status===-1)&&(A._status=1,A._result=$e)},function($e){(A._status===0||A._status===-1)&&(A._status=2,A._result=$e)}),A._status===-1&&(A._status=0,A._result=Q)}if(A._status===1)return A._result.default;throw A._result}var Le={current:null},ue={transition:null},we={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:ue,ReactCurrentOwner:Y};function de(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Fe,forEach:function(A,Q,$e){Fe(A,function(){Q.apply(this,arguments)},$e)},count:function(A){var Q=0;return Fe(A,function(){Q++}),Q},toArray:function(A){return Fe(A,function(Q){return Q})||[]},only:function(A){if(!me(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ie.Component=B,Ie.Fragment=r,Ie.Profiler=a,Ie.PureComponent=I,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=we,Ie.act=de,Ie.cloneElement=function(A,Q,$e){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var je=D({},A.props),Se=A.key,De=A.ref,he=A._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,he=Y.current),Q.key!==void 0&&(Se=""+Q.key),A.type&&A.type.defaultProps)var Te=A.type.defaultProps;for(be in Q)O.call(Q,be)&&!P.hasOwnProperty(be)&&(je[be]=Q[be]===void 0&&Te!==void 0?Te[be]:Q[be])}var be=arguments.length-2;if(be===1)je.children=$e;else if(1<be){Te=Array(be);for(var He=0;He<be;He++)Te[He]=arguments[He+2];je.children=Te}return{$$typeof:o,type:A.type,key:Se,ref:De,props:je,_owner:he}},Ie.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},Ie.createElement=V,Ie.createFactory=function(A){var Q=V.bind(null,A);return Q.type=A,Q},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(A){return{$$typeof:h,render:A}},Ie.isValidElement=me,Ie.lazy=function(A){return{$$typeof:w,_payload:{_status:-1,_result:A},_init:Be}},Ie.memo=function(A,Q){return{$$typeof:x,type:A,compare:Q===void 0?null:Q}},Ie.startTransition=function(A){var Q=ue.transition;ue.transition={};try{A()}finally{ue.transition=Q}},Ie.unstable_act=de,Ie.useCallback=function(A,Q){return Le.current.useCallback(A,Q)},Ie.useContext=function(A){return Le.current.useContext(A)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(A){return Le.current.useDeferredValue(A)},Ie.useEffect=function(A,Q){return Le.current.useEffect(A,Q)},Ie.useId=function(){return Le.current.useId()},Ie.useImperativeHandle=function(A,Q,$e){return Le.current.useImperativeHandle(A,Q,$e)},Ie.useInsertionEffect=function(A,Q){return Le.current.useInsertionEffect(A,Q)},Ie.useLayoutEffect=function(A,Q){return Le.current.useLayoutEffect(A,Q)},Ie.useMemo=function(A,Q){return Le.current.useMemo(A,Q)},Ie.useReducer=function(A,Q,$e){return Le.current.useReducer(A,Q,$e)},Ie.useRef=function(A){return Le.current.useRef(A)},Ie.useState=function(A){return Le.current.useState(A)},Ie.useSyncExternalStore=function(A,Q,$e){return Le.current.useSyncExternalStore(A,Q,$e)},Ie.useTransition=function(){return Le.current.useTransition()},Ie.version="18.3.1",Ie}var H1;function Kl(){return H1||(H1=1,pl.exports=Op()),pl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function Hp(){if(W1)return To;W1=1;var o=Kl(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,g,x){var w,$={},z=null,k=null;x!==void 0&&(z=""+x),g.key!==void 0&&(z=""+g.key),g.ref!==void 0&&(k=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&($[w]=g[w]);if(h&&h.defaultProps)for(w in g=h.defaultProps,g)$[w]===void 0&&($[w]=g[w]);return{$$typeof:n,type:h,key:z,ref:k,props:$,_owner:a.current}}return To.Fragment=r,To.jsx=d,To.jsxs=d,To}var G1;function Wp(){return G1||(G1=1,fl.exports=Hp()),fl.exports}var v=Wp(),H=Kl(),es={},hl={exports:{}},Wt={},gl={exports:{}},vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function Gp(){return U1||(U1=1,(function(o){function n(ue,we){var de=ue.length;ue.push(we);e:for(;0<de;){var A=de-1>>>1,Q=ue[A];if(0<a(Q,we))ue[A]=we,ue[de]=Q,de=A;else break e}}function r(ue){return ue.length===0?null:ue[0]}function s(ue){if(ue.length===0)return null;var we=ue[0],de=ue.pop();if(de!==we){ue[0]=de;e:for(var A=0,Q=ue.length,$e=Q>>>1;A<$e;){var je=2*(A+1)-1,Se=ue[je],De=je+1,he=ue[De];if(0>a(Se,de))De<Q&&0>a(he,Se)?(ue[A]=he,ue[De]=de,A=De):(ue[A]=Se,ue[je]=de,A=je);else if(De<Q&&0>a(he,de))ue[A]=he,ue[De]=de,A=De;else break e}}return we}function a(ue,we){var de=ue.sortIndex-we.sortIndex;return de!==0?de:ue.id-we.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],x=[],w=1,$=null,z=3,k=!1,D=!1,q=!1,B=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(ue){for(var we=r(x);we!==null;){if(we.callback===null)s(x);else if(we.startTime<=ue)s(x),we.sortIndex=we.expirationTime,n(g,we);else break;we=r(x)}}function F(ue){if(q=!1,W(ue),!D)if(r(g)!==null)D=!0,Be(O);else{var we=r(x);we!==null&&Le(F,we.startTime-ue)}}function O(ue,we){D=!1,q&&(q=!1,E(V),V=-1),k=!0;var de=z;try{for(W(we),$=r(g);$!==null&&(!($.expirationTime>we)||ue&&!se());){var A=$.callback;if(typeof A=="function"){$.callback=null,z=$.priorityLevel;var Q=A($.expirationTime<=we);we=o.unstable_now(),typeof Q=="function"?$.callback=Q:$===r(g)&&s(g),W(we)}else s(g);$=r(g)}if($!==null)var $e=!0;else{var je=r(x);je!==null&&Le(F,je.startTime-we),$e=!1}return $e}finally{$=null,z=de,k=!1}}var Y=!1,P=null,V=-1,ne=5,me=-1;function se(){return!(o.unstable_now()-me<ne)}function ae(){if(P!==null){var ue=o.unstable_now();me=ue;var we=!0;try{we=P(!0,ue)}finally{we?ve():(Y=!1,P=null)}}else Y=!1}var ve;if(typeof I=="function")ve=function(){I(ae)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Fe=xe.port2;xe.port1.onmessage=ae,ve=function(){Fe.postMessage(null)}}else ve=function(){B(ae,0)};function Be(ue){P=ue,Y||(Y=!0,ve())}function Le(ue,we){V=B(function(){ue(o.unstable_now())},we)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ue){ue.callback=null},o.unstable_continueExecution=function(){D||k||(D=!0,Be(O))},o.unstable_forceFrameRate=function(ue){0>ue||125<ue?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<ue?Math.floor(1e3/ue):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return r(g)},o.unstable_next=function(ue){switch(z){case 1:case 2:case 3:var we=3;break;default:we=z}var de=z;z=we;try{return ue()}finally{z=de}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ue,we){switch(ue){case 1:case 2:case 3:case 4:case 5:break;default:ue=3}var de=z;z=ue;try{return we()}finally{z=de}},o.unstable_scheduleCallback=function(ue,we,de){var A=o.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?A+de:A):de=A,ue){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=de+Q,ue={id:w++,callback:we,priorityLevel:ue,startTime:de,expirationTime:Q,sortIndex:-1},de>A?(ue.sortIndex=de,n(x,ue),r(g)===null&&ue===r(x)&&(q?(E(V),V=-1):q=!0,Le(F,de-A))):(ue.sortIndex=Q,n(g,ue),D||k||(D=!0,Be(O))),ue},o.unstable_shouldYield=se,o.unstable_wrapCallback=function(ue){var we=z;return function(){var de=z;z=we;try{return ue.apply(this,arguments)}finally{z=de}}}})(vl)),vl}var V1;function Up(){return V1||(V1=1,gl.exports=Gp()),gl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1;function Vp(){if(K1)return Wt;K1=1;var o=Kl(),n=Up();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},$={};function z(e){return g.call($,e)?!0:g.call(w,e)?!1:x.test(e)?$[e]=!0:(w[e]=!0,!1)}function k(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,t,i,l){if(t===null||typeof t>"u"||k(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,i,l,c,f,b){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=f,this.removeEmptyString=b}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,I);B[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,I);B[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,I);B[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,i,l){var c=B.hasOwnProperty(t)?B[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D(t,i,c,l)&&(i=null),l||c===null?z(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var F=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),Y=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),se=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),ue=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,A;function Q(e){if(A===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var $e=!1;function je(e,t){if(!e||$e)return"";$e=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(U){var l=U}Reflect.construct(e,[],t)}else{try{t.call()}catch(U){l=U}e.call(t.prototype)}else{try{throw Error()}catch(U){l=U}e()}}catch(U){if(U&&l&&typeof U.stack=="string"){for(var c=U.stack.split(`
`),f=l.stack.split(`
`),b=c.length-1,S=f.length-1;1<=b&&0<=S&&c[b]!==f[S];)S--;for(;1<=b&&0<=S;b--,S--)if(c[b]!==f[S]){if(b!==1||S!==1)do if(b--,S--,0>S||c[b]!==f[S]){var M=`
`+c[b].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=b&&0<=S);break}}}finally{$e=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Q(e):""}function Se(e){switch(e.tag){case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return e=je(e.type,!1),e;case 11:return e=je(e.type.render,!1),e;case 1:return e=je(e.type,!0),e;default:return""}}function De(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case Y:return"Portal";case ne:return"Profiler";case V:return"StrictMode";case ve:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fe:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function He(e){var t=be(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(b){l=""+b,f.call(this,b)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=He(e))}function Nn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=be(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dr(e,t){var i=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Pr(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=Te(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nr(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function rr(e,t){nr(e,t);var i=Te(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kn(e,t.type,i):t.hasOwnProperty("defaultValue")&&kn(e,t.type,Te(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ir(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function kn(e,t,i){(t!=="number"||tn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Vt=Array.isArray;function Bt(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Te(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oe(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(Vt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Te(i)}}function nn(e,t){var i=Te(t.value),l=Te(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function lt(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Br(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Br(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zn,Ii=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zn=zn||document.createElement("div"),zn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Io=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){Io.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function Fo(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Sn(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Fo(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var Fi=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function In(e,t){if(t){if(Fi[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,Tn=null,pn=null;function Lo(e){if(e=mo(e)){if(typeof ai!="function")throw Error(r(280));var t=e.stateNode;t&&(t=h0(t),ai(e.stateNode,e.type,t))}}function Oo(e){Tn?pn?pn.push(e):pn=[e]:Tn=e}function li(){if(Tn){var e=Tn,t=pn;if(pn=Tn=null,Lo(e),t)for(e=0;e<t.length;e++)Lo(t[e])}}function Ho(e,t){return e(t)}function or(){}var sr=!1;function Fr(e,t,i){if(sr)return e(t,i);sr=!0;try{return Ho(e,t,i)}finally{sr=!1,(Tn!==null||pn!==null)&&(or(),li())}}function Fn(e,t){var i=e.stateNode;if(i===null)return null;var l=h0(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var Hi=!1;if(h)try{var rn={};Object.defineProperty(rn,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",rn,rn),window.removeEventListener("test",rn,rn)}catch{Hi=!1}function qs(e,t,i,l,c,f,b,S,M){var U=Array.prototype.slice.call(arguments,3);try{t.apply(i,U)}catch(ee){this.onError(ee)}}var hn=!1,Lr=null,Or=!1,Wi=null,Ms={onError:function(e){hn=!0,Lr=e}};function Wo(e,t,i,l,c,f,b,S,M){hn=!1,Lr=null,qs.apply(Ms,arguments)}function As(e,t,i,l,c,f,b,S,M){if(Wo.apply(this,arguments),hn){if(hn){var U=Lr;hn=!1,Lr=null}else throw Error(r(198));Or||(Or=!0,Wi=U)}}function Kt(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Go(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uo(e){if(Kt(e)!==e)throw Error(r(188))}function Gi(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return Uo(c),e;if(f===l)return Uo(c),t;f=f.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=f;else{for(var b=!1,S=c.child;S;){if(S===i){b=!0,i=c,l=f;break}if(S===l){b=!0,l=c,i=f;break}S=S.sibling}if(!b){for(S=f.child;S;){if(S===i){b=!0,i=f,l=c;break}if(S===l){b=!0,l=f,i=c;break}S=S.sibling}if(!b)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function Vo(e){return e=Gi(e),e!==null?Ko(e):null}function Ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ko(e);if(t!==null)return t;e=e.sibling}return null}var Ui=n.unstable_scheduleCallback,Qo=n.unstable_cancelCallback,Cs=n.unstable_shouldYield,Rs=n.unstable_requestPaint,tt=n.unstable_now,Z=n.unstable_getCurrentPriorityLevel,Ne=n.unstable_ImmediatePriority,We=n.unstable_UserBlockingPriority,ar=n.unstable_NormalPriority,tf=n.unstable_LowPriority,yu=n.unstable_IdlePriority,Yo=null,jn=null;function nf(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Yo,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:sf,rf=Math.log,of=Math.LN2;function sf(e){return e>>>=0,e===0?32:31-(rf(e)/of|0)|0}var Zo=64,Xo=4194304;function Vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,f=e.pingedLanes,b=i&268435455;if(b!==0){var S=b&~c;S!==0?l=Vi(S):(f&=b,f!==0&&(l=Vi(f)))}else b=i&~c,b!==0?l=Vi(b):f!==0&&(l=Vi(f));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,f=t&-t,c>=f||c===16&&(f&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-gn(t),c=1<<i,l|=e[i],t&=~c;return l}function af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var b=31-gn(f),S=1<<b,M=c[b];M===-1?((S&i)===0||(S&l)!==0)&&(c[b]=af(S,t)):M<=t&&(e.expiredLanes|=S),f&=~S}}function Es(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=Zo;return Zo<<=1,(Zo&4194240)===0&&(Zo=64),e}function Ds(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Ki(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gn(t),e[t]=i}function uf(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-gn(i),f=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~f}}function Ps(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-gn(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var Qe=0;function bu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wu,Bs,_u,$u,ku,Ns=!1,e0=[],lr=null,ur=null,cr=null,Qi=new Map,Yi=new Map,dr=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function Zi(e,t,i,l,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},t!==null&&(t=mo(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function df(e,t,i,l,c){switch(t){case"focusin":return lr=Zi(lr,e,t,i,l,c),!0;case"dragenter":return ur=Zi(ur,e,t,i,l,c),!0;case"mouseover":return cr=Zi(cr,e,t,i,l,c),!0;case"pointerover":var f=c.pointerId;return Qi.set(f,Zi(Qi.get(f)||null,e,t,i,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Yi.set(f,Zi(Yi.get(f)||null,e,t,i,l,c)),!0}return!1}function Su(e){var t=Hr(e.target);if(t!==null){var i=Kt(t);if(i!==null){if(t=i.tag,t===13){if(t=Go(i),t!==null){e.blockedOn=t,ku(e.priority,function(){_u(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function t0(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Li=l,i.target.dispatchEvent(l),Li=null}else return t=mo(i),t!==null&&Bs(t),e.blockedOn=i,!1;t.shift()}return!0}function Tu(e,t,i){t0(e)&&i.delete(t)}function mf(){Ns=!1,lr!==null&&t0(lr)&&(lr=null),ur!==null&&t0(ur)&&(ur=null),cr!==null&&t0(cr)&&(cr=null),Qi.forEach(Tu),Yi.forEach(Tu)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ns||(Ns=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,mf)))}function Ji(e){function t(c){return Xi(c,e)}if(0<e0.length){Xi(e0[0],e);for(var i=1;i<e0.length;i++){var l=e0[i];l.blockedOn===e&&(l.blockedOn=null)}}for(lr!==null&&Xi(lr,e),ur!==null&&Xi(ur,e),cr!==null&&Xi(cr,e),Qi.forEach(t),Yi.forEach(t),i=0;i<dr.length;i++)l=dr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<dr.length&&(i=dr[0],i.blockedOn===null);)Su(i),i.blockedOn===null&&dr.shift()}var ui=F.ReactCurrentBatchConfig,n0=!0;function ff(e,t,i,l){var c=Qe,f=ui.transition;ui.transition=null;try{Qe=1,Is(e,t,i,l)}finally{Qe=c,ui.transition=f}}function pf(e,t,i,l){var c=Qe,f=ui.transition;ui.transition=null;try{Qe=4,Is(e,t,i,l)}finally{Qe=c,ui.transition=f}}function Is(e,t,i,l){if(n0){var c=Fs(e,t,i,l);if(c===null)ra(e,t,l,r0,i),zu(e,l);else if(df(c,e,t,i,l))l.stopPropagation();else if(zu(e,l),t&4&&-1<cf.indexOf(e)){for(;c!==null;){var f=mo(c);if(f!==null&&wu(f),f=Fs(e,t,i,l),f===null&&ra(e,t,l,r0,i),f===c)break;c=f}c!==null&&l.stopPropagation()}else ra(e,t,l,null,i)}}var r0=null;function Fs(e,t,i,l){if(r0=null,e=Oi(l),e=Hr(e),e!==null)if(t=Kt(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Go(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return r0=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z()){case Ne:return 1;case We:return 4;case ar:case tf:return 16;case yu:return 536870912;default:return 16}default:return 16}}var mr=null,Ls=null,i0=null;function qu(){if(i0)return i0;var e,t=Ls,i=t.length,l,c="value"in mr?mr.value:mr.textContent,f=c.length;for(e=0;e<i&&t[e]===c[e];e++);var b=i-e;for(l=1;l<=b&&t[i-l]===c[f-l];l++);return i0=c.slice(e,1<l?1-l:void 0)}function o0(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function s0(){return!0}function Mu(){return!1}function Qt(e){function t(i,l,c,f,b){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?s0:Mu,this.isPropagationStopped=Mu,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=s0)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=s0)},persist:function(){},isPersistent:s0}),t}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Qt(ci),eo=de({},ci,{view:0,detail:0}),hf=Qt(eo),Hs,Ws,to,a0=de({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(Hs=e.screenX-to.screenX,Ws=e.screenY-to.screenY):Ws=Hs=0,to=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),Au=Qt(a0),gf=de({},a0,{dataTransfer:0}),vf=Qt(gf),yf=de({},eo,{relatedTarget:0}),Gs=Qt(yf),xf=de({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),bf=Qt(xf),wf=de({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_f=Qt(wf),$f=de({},ci,{data:0}),Cu=Qt($f),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sf[e])?!!t[e]:!1}function Us(){return Tf}var jf=de({},eo,{key:function(e){if(e.key){var t=kf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=o0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?o0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?o0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qf=Qt(jf),Mf=de({},a0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Qt(Mf),Af=de({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),Cf=Qt(Af),Rf=de({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=Qt(Rf),Df=de({},a0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=Qt(Df),Bf=[9,13,27,32],Vs=h&&"CompositionEvent"in window,no=null;h&&"documentMode"in document&&(no=document.documentMode);var Nf=h&&"TextEvent"in window&&!no,Eu=h&&(!Vs||no&&8<no&&11>=no),Du=" ",Pu=!1;function Bu(e,t){switch(e){case"keyup":return Bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var di=!1;function If(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(Pu=!0,Du);case"textInput":return e=t.data,e===Du&&Pu?null:e;default:return null}}function Ff(e,t){if(di)return e==="compositionend"||!Vs&&Bu(e,t)?(e=qu(),i0=Ls=mr=null,di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function Fu(e,t,i,l){Oo(l),t=m0(t,"onChange"),0<t.length&&(i=new Os("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var ro=null,io=null;function Of(e){ic(e,0)}function l0(e){var t=gi(e);if(Nn(t))return e}function Hf(e,t){if(e==="change")return t}var Lu=!1;if(h){var Ks;if(h){var Qs="oninput"in document;if(!Qs){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Qs=typeof Ou.oninput=="function"}Ks=Qs}else Ks=!1;Lu=Ks&&(!document.documentMode||9<document.documentMode)}function Hu(){ro&&(ro.detachEvent("onpropertychange",Wu),io=ro=null)}function Wu(e){if(e.propertyName==="value"&&l0(io)){var t=[];Fu(t,io,e,Oi(e)),Fr(Of,t)}}function Wf(e,t,i){e==="focusin"?(Hu(),ro=t,io=i,ro.attachEvent("onpropertychange",Wu)):e==="focusout"&&Hu()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return l0(io)}function Uf(e,t){if(e==="click")return l0(t)}function Vf(e,t){if(e==="input"||e==="change")return l0(t)}function Kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:Kf;function oo(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!g.call(t,c)||!vn(e[c],t[c]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,t){var i=Gu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Gu(i)}}function Vu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=tn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=tn(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=Ku(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Vu(i.ownerDocument.documentElement,i)){if(l!==null&&Ys(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(l.start,c);l=l.end===void 0?f:Math.min(l.end,c),!e.extend&&f>l&&(c=l,l=f,f=c),c=Uu(i,f);var b=Uu(i,l);c&&b&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),f>l?(e.addRange(t),e.extend(b.node,b.offset)):(t.setEnd(b.node,b.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yf=h&&"documentMode"in document&&11>=document.documentMode,mi=null,Zs=null,so=null,Xs=!1;function Qu(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Xs||mi==null||mi!==tn(l)||(l=mi,"selectionStart"in l&&Ys(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&oo(so,l)||(so=l,l=m0(Zs,"onSelect"),0<l.length&&(t=new Os("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=mi)))}function u0(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var fi={animationend:u0("Animation","AnimationEnd"),animationiteration:u0("Animation","AnimationIteration"),animationstart:u0("Animation","AnimationStart"),transitionend:u0("Transition","TransitionEnd")},Js={},Yu={};h&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function c0(e){if(Js[e])return Js[e];if(!fi[e])return e;var t=fi[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Yu)return Js[e]=t[i];return e}var Zu=c0("animationend"),Xu=c0("animationiteration"),Ju=c0("animationstart"),ec=c0("transitionend"),tc=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){tc.set(e,t),u(t,[e])}for(var ea=0;ea<nc.length;ea++){var ta=nc[ea],Zf=ta.toLowerCase(),Xf=ta[0].toUpperCase()+ta.slice(1);fr(Zf,"on"+Xf)}fr(Zu,"onAnimationEnd"),fr(Xu,"onAnimationIteration"),fr(Ju,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(ec,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function rc(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,As(l,t,void 0,e),e.currentTarget=null}function ic(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var b=l.length-1;0<=b;b--){var S=l[b],M=S.instance,U=S.currentTarget;if(S=S.listener,M!==f&&c.isPropagationStopped())break e;rc(c,S,U),f=M}else for(b=0;b<l.length;b++){if(S=l[b],M=S.instance,U=S.currentTarget,S=S.listener,M!==f&&c.isPropagationStopped())break e;rc(c,S,U),f=M}}}if(Or)throw e=Wi,Or=!1,Wi=null,e}function Je(e,t){var i=t[ua];i===void 0&&(i=t[ua]=new Set);var l=e+"__bubble";i.has(l)||(oc(t,e,2,!1),i.add(l))}function na(e,t,i){var l=0;t&&(l|=4),oc(i,e,l,t)}var d0="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[d0]){e[d0]=!0,s.forEach(function(i){i!=="selectionchange"&&(Jf.has(i)||na(i,!1,e),na(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[d0]||(t[d0]=!0,na("selectionchange",!1,t))}}function oc(e,t,i,l){switch(ju(t)){case 1:var c=ff;break;case 4:c=pf;break;default:c=Is}i=c.bind(null,t,i,e),c=void 0,!Hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function ra(e,t,i,l,c){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var S=l.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if(b===4)for(b=l.return;b!==null;){var M=b.tag;if((M===3||M===4)&&(M=b.stateNode.containerInfo,M===c||M.nodeType===8&&M.parentNode===c))return;b=b.return}for(;S!==null;){if(b=Hr(S),b===null)return;if(M=b.tag,M===5||M===6){l=f=b;continue e}S=S.parentNode}}l=l.return}Fr(function(){var U=f,ee=Oi(i),re=[];e:{var X=tc.get(e);if(X!==void 0){var pe=Os,_e=e;switch(e){case"keypress":if(o0(i)===0)break e;case"keydown":case"keyup":pe=qf;break;case"focusin":_e="focus",pe=Gs;break;case"focusout":_e="blur",pe=Gs;break;case"beforeblur":case"afterblur":pe=Gs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Cf;break;case Zu:case Xu:case Ju:pe=bf;break;case ec:pe=Ef;break;case"scroll":pe=hf;break;case"wheel":pe=Pf;break;case"copy":case"cut":case"paste":pe=_f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Ru}var ke=(t&4)!==0,dt=!ke&&e==="scroll",N=ke?X!==null?X+"Capture":null:X;ke=[];for(var R=U,L;R!==null;){L=R;var le=L.stateNode;if(L.tag===5&&le!==null&&(L=le,N!==null&&(le=Fn(R,N),le!=null&&ke.push(uo(R,le,L)))),dt)break;R=R.return}0<ke.length&&(X=new pe(X,_e,null,i,ee),re.push({event:X,listeners:ke}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",X&&i!==Li&&(_e=i.relatedTarget||i.fromElement)&&(Hr(_e)||_e[Ln]))break e;if((pe||X)&&(X=ee.window===ee?ee:(X=ee.ownerDocument)?X.defaultView||X.parentWindow:window,pe?(_e=i.relatedTarget||i.toElement,pe=U,_e=_e?Hr(_e):null,_e!==null&&(dt=Kt(_e),_e!==dt||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(pe=null,_e=U),pe!==_e)){if(ke=Au,le="onMouseLeave",N="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Ru,le="onPointerLeave",N="onPointerEnter",R="pointer"),dt=pe==null?X:gi(pe),L=_e==null?X:gi(_e),X=new ke(le,R+"leave",pe,i,ee),X.target=dt,X.relatedTarget=L,le=null,Hr(ee)===U&&(ke=new ke(N,R+"enter",_e,i,ee),ke.target=L,ke.relatedTarget=dt,le=ke),dt=le,pe&&_e)t:{for(ke=pe,N=_e,R=0,L=ke;L;L=pi(L))R++;for(L=0,le=N;le;le=pi(le))L++;for(;0<R-L;)ke=pi(ke),R--;for(;0<L-R;)N=pi(N),L--;for(;R--;){if(ke===N||N!==null&&ke===N.alternate)break t;ke=pi(ke),N=pi(N)}ke=null}else ke=null;pe!==null&&sc(re,X,pe,ke,!1),_e!==null&&dt!==null&&sc(re,dt,_e,ke,!0)}}e:{if(X=U?gi(U):window,pe=X.nodeName&&X.nodeName.toLowerCase(),pe==="select"||pe==="input"&&X.type==="file")var ze=Hf;else if(Iu(X))if(Lu)ze=Vf;else{ze=Gf;var qe=Wf}else(pe=X.nodeName)&&pe.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(ze=Uf);if(ze&&(ze=ze(e,U))){Fu(re,ze,i,ee);break e}qe&&qe(e,X,U),e==="focusout"&&(qe=X._wrapperState)&&qe.controlled&&X.type==="number"&&kn(X,"number",X.value)}switch(qe=U?gi(U):window,e){case"focusin":(Iu(qe)||qe.contentEditable==="true")&&(mi=qe,Zs=U,so=null);break;case"focusout":so=Zs=mi=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,Qu(re,i,ee);break;case"selectionchange":if(Yf)break;case"keydown":case"keyup":Qu(re,i,ee)}var Me;if(Vs)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else di?Bu(e,i)&&(Re="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Re="onCompositionStart");Re&&(Eu&&i.locale!=="ko"&&(di||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&di&&(Me=qu()):(mr=ee,Ls="value"in mr?mr.value:mr.textContent,di=!0)),qe=m0(U,Re),0<qe.length&&(Re=new Cu(Re,e,null,i,ee),re.push({event:Re,listeners:qe}),Me?Re.data=Me:(Me=Nu(i),Me!==null&&(Re.data=Me)))),(Me=Nf?If(e,i):Ff(e,i))&&(U=m0(U,"onBeforeInput"),0<U.length&&(ee=new Cu("onBeforeInput","beforeinput",null,i,ee),re.push({event:ee,listeners:U}),ee.data=Me))}ic(re,t)})}function uo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function m0(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=Fn(e,i),f!=null&&l.unshift(uo(e,f,c)),f=Fn(e,t),f!=null&&l.push(uo(e,f,c))),e=e.return}return l}function pi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sc(e,t,i,l,c){for(var f=t._reactName,b=[];i!==null&&i!==l;){var S=i,M=S.alternate,U=S.stateNode;if(M!==null&&M===l)break;S.tag===5&&U!==null&&(S=U,c?(M=Fn(i,f),M!=null&&b.unshift(uo(i,M,S))):c||(M=Fn(i,f),M!=null&&b.push(uo(i,M,S)))),i=i.return}b.length!==0&&e.push({event:t,listeners:b})}var ep=/\r\n?/g,tp=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(ep,`
`).replace(tp,"")}function f0(e,t,i){if(t=ac(t),ac(e)!==t&&i)throw Error(r(425))}function p0(){}var ia=null,oa=null;function sa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,np=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,rp=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(ip)}:aa;function ip(e){setTimeout(function(){throw e})}function la(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),Ji(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);Ji(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),qn="__reactFiber$"+hi,co="__reactProps$"+hi,Ln="__reactContainer$"+hi,ua="__reactEvents$"+hi,op="__reactListeners$"+hi,sp="__reactHandles$"+hi;function Hr(e){var t=e[qn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ln]||i[qn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=uc(e);e!==null;){if(i=e[qn])return i;e=uc(e)}return t}e=i,i=e.parentNode}return null}function mo(e){return e=e[qn]||e[Ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function h0(e){return e[co]||null}var ca=[],vi=-1;function hr(e){return{current:e}}function et(e){0>vi||(e.current=ca[vi],ca[vi]=null,vi--)}function Ze(e,t){vi++,ca[vi]=e.current,e.current=t}var gr={},St=hr(gr),It=hr(!1),Wr=gr;function yi(e,t){var i=e.type.contextTypes;if(!i)return gr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=t[f];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Ft(e){return e=e.childContextTypes,e!=null}function g0(){et(It),et(St)}function cc(e,t,i){if(St.current!==gr)throw Error(r(168));Ze(St,t),Ze(It,i)}function dc(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(r(108,he(e)||"Unknown",c));return de({},i,l)}function v0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Wr=St.current,Ze(St,e),Ze(It,It.current),!0}function mc(e,t,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=dc(e,t,Wr),l.__reactInternalMemoizedMergedChildContext=e,et(It),et(St),Ze(St,e)):et(It),Ze(It,i)}var On=null,y0=!1,da=!1;function fc(e){On===null?On=[e]:On.push(e)}function ap(e){y0=!0,fc(e)}function vr(){if(!da&&On!==null){da=!0;var e=0,t=Qe;try{var i=On;for(Qe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}On=null,y0=!1}catch(c){throw On!==null&&(On=On.slice(e+1)),Ui(Ne,vr),c}finally{Qe=t,da=!1}}return null}var xi=[],bi=0,x0=null,b0=0,on=[],sn=0,Gr=null,Hn=1,Wn="";function Ur(e,t){xi[bi++]=b0,xi[bi++]=x0,x0=e,b0=t}function pc(e,t,i){on[sn++]=Hn,on[sn++]=Wn,on[sn++]=Gr,Gr=e;var l=Hn;e=Wn;var c=32-gn(l)-1;l&=~(1<<c),i+=1;var f=32-gn(t)+c;if(30<f){var b=c-c%5;f=(l&(1<<b)-1).toString(32),l>>=b,c-=b,Hn=1<<32-gn(t)+c|i<<c|l,Wn=f+e}else Hn=1<<f|i<<c|l,Wn=e}function ma(e){e.return!==null&&(Ur(e,1),pc(e,1,0))}function fa(e){for(;e===x0;)x0=xi[--bi],xi[bi]=null,b0=xi[--bi],xi[bi]=null;for(;e===Gr;)Gr=on[--sn],on[sn]=null,Wn=on[--sn],on[sn]=null,Hn=on[--sn],on[sn]=null}var Yt=null,Zt=null,nt=!1,yn=null;function hc(e,t){var i=cn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function gc(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Yt=e,Zt=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Yt=e,Zt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Gr!==null?{id:Hn,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=cn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Yt=e,Zt=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(nt){var t=Zt;if(t){var i=t;if(!gc(e,t)){if(pa(e))throw Error(r(418));t=pr(i.nextSibling);var l=Yt;t&&gc(e,t)?hc(l,i):(e.flags=e.flags&-4097|2,nt=!1,Yt=e)}}else{if(pa(e))throw Error(r(418));e.flags=e.flags&-4097|2,nt=!1,Yt=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function w0(e){if(e!==Yt)return!1;if(!nt)return vc(e),nt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sa(e.type,e.memoizedProps)),t&&(t=Zt)){if(pa(e))throw yc(),Error(r(418));for(;t;)hc(e,t),t=pr(t.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Zt=pr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Zt=null}}else Zt=Yt?pr(e.stateNode.nextSibling):null;return!0}function yc(){for(var e=Zt;e;)e=pr(e.nextSibling)}function wi(){Zt=Yt=null,nt=!1}function ga(e){yn===null?yn=[e]:yn.push(e)}var lp=F.ReactCurrentBatchConfig;function fo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,f=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f?t.ref:(t=function(b){var S=c.refs;b===null?delete S[f]:S[f]=b},t._stringRef=f,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function _0(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xc(e){var t=e._init;return t(e._payload)}function bc(e){function t(N,R){if(e){var L=N.deletions;L===null?(N.deletions=[R],N.flags|=16):L.push(R)}}function i(N,R){if(!e)return null;for(;R!==null;)t(N,R),R=R.sibling;return null}function l(N,R){for(N=new Map;R!==null;)R.key!==null?N.set(R.key,R):N.set(R.index,R),R=R.sibling;return N}function c(N,R){return N=zr(N,R),N.index=0,N.sibling=null,N}function f(N,R,L){return N.index=L,e?(L=N.alternate,L!==null?(L=L.index,L<R?(N.flags|=2,R):L):(N.flags|=2,R)):(N.flags|=1048576,R)}function b(N){return e&&N.alternate===null&&(N.flags|=2),N}function S(N,R,L,le){return R===null||R.tag!==6?(R=al(L,N.mode,le),R.return=N,R):(R=c(R,L),R.return=N,R)}function M(N,R,L,le){var ze=L.type;return ze===P?ee(N,R,L.props.children,le,L.key):R!==null&&(R.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===Be&&xc(ze)===R.type)?(le=c(R,L.props),le.ref=fo(N,R,L),le.return=N,le):(le=U0(L.type,L.key,L.props,null,N.mode,le),le.ref=fo(N,R,L),le.return=N,le)}function U(N,R,L,le){return R===null||R.tag!==4||R.stateNode.containerInfo!==L.containerInfo||R.stateNode.implementation!==L.implementation?(R=ll(L,N.mode,le),R.return=N,R):(R=c(R,L.children||[]),R.return=N,R)}function ee(N,R,L,le,ze){return R===null||R.tag!==7?(R=ei(L,N.mode,le,ze),R.return=N,R):(R=c(R,L),R.return=N,R)}function re(N,R,L){if(typeof R=="string"&&R!==""||typeof R=="number")return R=al(""+R,N.mode,L),R.return=N,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case O:return L=U0(R.type,R.key,R.props,null,N.mode,L),L.ref=fo(N,null,R),L.return=N,L;case Y:return R=ll(R,N.mode,L),R.return=N,R;case Be:var le=R._init;return re(N,le(R._payload),L)}if(Vt(R)||we(R))return R=ei(R,N.mode,L,null),R.return=N,R;_0(N,R)}return null}function X(N,R,L,le){var ze=R!==null?R.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ze!==null?null:S(N,R,""+L,le);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case O:return L.key===ze?M(N,R,L,le):null;case Y:return L.key===ze?U(N,R,L,le):null;case Be:return ze=L._init,X(N,R,ze(L._payload),le)}if(Vt(L)||we(L))return ze!==null?null:ee(N,R,L,le,null);_0(N,L)}return null}function pe(N,R,L,le,ze){if(typeof le=="string"&&le!==""||typeof le=="number")return N=N.get(L)||null,S(R,N,""+le,ze);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case O:return N=N.get(le.key===null?L:le.key)||null,M(R,N,le,ze);case Y:return N=N.get(le.key===null?L:le.key)||null,U(R,N,le,ze);case Be:var qe=le._init;return pe(N,R,L,qe(le._payload),ze)}if(Vt(le)||we(le))return N=N.get(L)||null,ee(R,N,le,ze,null);_0(R,le)}return null}function _e(N,R,L,le){for(var ze=null,qe=null,Me=R,Re=R=0,$t=null;Me!==null&&Re<L.length;Re++){Me.index>Re?($t=Me,Me=null):$t=Me.sibling;var Ve=X(N,Me,L[Re],le);if(Ve===null){Me===null&&(Me=$t);break}e&&Me&&Ve.alternate===null&&t(N,Me),R=f(Ve,R,Re),qe===null?ze=Ve:qe.sibling=Ve,qe=Ve,Me=$t}if(Re===L.length)return i(N,Me),nt&&Ur(N,Re),ze;if(Me===null){for(;Re<L.length;Re++)Me=re(N,L[Re],le),Me!==null&&(R=f(Me,R,Re),qe===null?ze=Me:qe.sibling=Me,qe=Me);return nt&&Ur(N,Re),ze}for(Me=l(N,Me);Re<L.length;Re++)$t=pe(Me,N,Re,L[Re],le),$t!==null&&(e&&$t.alternate!==null&&Me.delete($t.key===null?Re:$t.key),R=f($t,R,Re),qe===null?ze=$t:qe.sibling=$t,qe=$t);return e&&Me.forEach(function(Sr){return t(N,Sr)}),nt&&Ur(N,Re),ze}function ke(N,R,L,le){var ze=we(L);if(typeof ze!="function")throw Error(r(150));if(L=ze.call(L),L==null)throw Error(r(151));for(var qe=ze=null,Me=R,Re=R=0,$t=null,Ve=L.next();Me!==null&&!Ve.done;Re++,Ve=L.next()){Me.index>Re?($t=Me,Me=null):$t=Me.sibling;var Sr=X(N,Me,Ve.value,le);if(Sr===null){Me===null&&(Me=$t);break}e&&Me&&Sr.alternate===null&&t(N,Me),R=f(Sr,R,Re),qe===null?ze=Sr:qe.sibling=Sr,qe=Sr,Me=$t}if(Ve.done)return i(N,Me),nt&&Ur(N,Re),ze;if(Me===null){for(;!Ve.done;Re++,Ve=L.next())Ve=re(N,Ve.value,le),Ve!==null&&(R=f(Ve,R,Re),qe===null?ze=Ve:qe.sibling=Ve,qe=Ve);return nt&&Ur(N,Re),ze}for(Me=l(N,Me);!Ve.done;Re++,Ve=L.next())Ve=pe(Me,N,Re,Ve.value,le),Ve!==null&&(e&&Ve.alternate!==null&&Me.delete(Ve.key===null?Re:Ve.key),R=f(Ve,R,Re),qe===null?ze=Ve:qe.sibling=Ve,qe=Ve);return e&&Me.forEach(function(Lp){return t(N,Lp)}),nt&&Ur(N,Re),ze}function dt(N,R,L,le){if(typeof L=="object"&&L!==null&&L.type===P&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case O:e:{for(var ze=L.key,qe=R;qe!==null;){if(qe.key===ze){if(ze=L.type,ze===P){if(qe.tag===7){i(N,qe.sibling),R=c(qe,L.props.children),R.return=N,N=R;break e}}else if(qe.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===Be&&xc(ze)===qe.type){i(N,qe.sibling),R=c(qe,L.props),R.ref=fo(N,qe,L),R.return=N,N=R;break e}i(N,qe);break}else t(N,qe);qe=qe.sibling}L.type===P?(R=ei(L.props.children,N.mode,le,L.key),R.return=N,N=R):(le=U0(L.type,L.key,L.props,null,N.mode,le),le.ref=fo(N,R,L),le.return=N,N=le)}return b(N);case Y:e:{for(qe=L.key;R!==null;){if(R.key===qe)if(R.tag===4&&R.stateNode.containerInfo===L.containerInfo&&R.stateNode.implementation===L.implementation){i(N,R.sibling),R=c(R,L.children||[]),R.return=N,N=R;break e}else{i(N,R);break}else t(N,R);R=R.sibling}R=ll(L,N.mode,le),R.return=N,N=R}return b(N);case Be:return qe=L._init,dt(N,R,qe(L._payload),le)}if(Vt(L))return _e(N,R,L,le);if(we(L))return ke(N,R,L,le);_0(N,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,R!==null&&R.tag===6?(i(N,R.sibling),R=c(R,L),R.return=N,N=R):(i(N,R),R=al(L,N.mode,le),R.return=N,N=R),b(N)):i(N,R)}return dt}var _i=bc(!0),wc=bc(!1),$0=hr(null),k0=null,$i=null,va=null;function ya(){va=$i=k0=null}function xa(e){var t=$0.current;et($0),e._currentValue=t}function ba(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function ki(e,t){k0=e,va=$i=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Lt=!0),e.firstContext=null)}function an(e){var t=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:t,next:null},$i===null){if(k0===null)throw Error(r(308));$i=e,k0.dependencies={lanes:0,firstContext:e}}else $i=$i.next=e;return t}var Vr=null;function wa(e){Vr===null?Vr=[e]:Vr.push(e)}function _c(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,wa(t)):(i.next=c.next,c.next=i),t.interleaved=i,Gn(e,l)}function Gn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var yr=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xr(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,Gn(e,i)}return c=l.interleaved,c===null?(t.next=t,wa(l)):(t.next=c.next,c.next=t),l.interleaved=t,Gn(e,i)}function z0(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Ps(e,i)}}function kc(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var b={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=b:f=f.next=b,i=i.next}while(i!==null);f===null?c=f=t:f=f.next=t}else c=f=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function S0(e,t,i,l){var c=e.updateQueue;yr=!1;var f=c.firstBaseUpdate,b=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var M=S,U=M.next;M.next=null,b===null?f=U:b.next=U,b=M;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,S=ee.lastBaseUpdate,S!==b&&(S===null?ee.firstBaseUpdate=U:S.next=U,ee.lastBaseUpdate=M))}if(f!==null){var re=c.baseState;b=0,ee=U=M=null,S=f;do{var X=S.lane,pe=S.eventTime;if((l&X)===X){ee!==null&&(ee=ee.next={eventTime:pe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var _e=e,ke=S;switch(X=t,pe=i,ke.tag){case 1:if(_e=ke.payload,typeof _e=="function"){re=_e.call(pe,re,X);break e}re=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=ke.payload,X=typeof _e=="function"?_e.call(pe,re,X):_e,X==null)break e;re=de({},re,X);break e;case 2:yr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,X=c.effects,X===null?c.effects=[S]:X.push(S))}else pe={eventTime:pe,lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ee===null?(U=ee=pe,M=re):ee=ee.next=pe,b|=X;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;X=S,S=X.next,X.next=null,c.lastBaseUpdate=X,c.shared.pending=null}}while(!0);if(ee===null&&(M=re),c.baseState=M,c.firstBaseUpdate=U,c.lastBaseUpdate=ee,t=c.shared.interleaved,t!==null){c=t;do b|=c.lane,c=c.next;while(c!==t)}else f===null&&(c.shared.lanes=0);Yr|=b,e.lanes=b,e.memoizedState=re}}function zc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var po={},Mn=hr(po),ho=hr(po),go=hr(po);function Kr(e){if(e===po)throw Error(r(174));return e}function $a(e,t){switch(Ze(go,t),Ze(ho,e),Ze(Mn,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nt(t,e)}et(Mn),Ze(Mn,t)}function zi(){et(Mn),et(ho),et(go)}function Sc(e){Kr(go.current);var t=Kr(Mn.current),i=Nt(t,e.type);t!==i&&(Ze(ho,e),Ze(Mn,i))}function ka(e){ho.current===e&&(et(Mn),et(ho))}var it=hr(0);function T0(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=[];function Sa(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var j0=F.ReactCurrentDispatcher,Ta=F.ReactCurrentBatchConfig,Qr=0,ot=null,vt=null,wt=null,q0=!1,vo=!1,yo=0,up=0;function Tt(){throw Error(r(321))}function ja(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!vn(e[i],t[i]))return!1;return!0}function qa(e,t,i,l,c,f){if(Qr=f,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j0.current=e===null||e.memoizedState===null?fp:pp,e=i(l,c),vo){f=0;do{if(vo=!1,yo=0,25<=f)throw Error(r(301));f+=1,wt=vt=null,t.updateQueue=null,j0.current=hp,e=i(l,c)}while(vo)}if(j0.current=C0,t=vt!==null&&vt.next!==null,Qr=0,wt=vt=ot=null,q0=!1,t)throw Error(r(300));return e}function Ma(){var e=yo!==0;return yo=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ot.memoizedState=wt=e:wt=wt.next=e,wt}function ln(){if(vt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=wt===null?ot.memoizedState:wt.next;if(t!==null)wt=t,vt=e;else{if(e===null)throw Error(r(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},wt===null?ot.memoizedState=wt=e:wt=wt.next=e}return wt}function xo(e,t){return typeof t=="function"?t(e):t}function Aa(e){var t=ln(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=vt,c=l.baseQueue,f=i.pending;if(f!==null){if(c!==null){var b=c.next;c.next=f.next,f.next=b}l.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,l=l.baseState;var S=b=null,M=null,U=f;do{var ee=U.lane;if((Qr&ee)===ee)M!==null&&(M=M.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),l=U.hasEagerState?U.eagerState:e(l,U.action);else{var re={lane:ee,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};M===null?(S=M=re,b=l):M=M.next=re,ot.lanes|=ee,Yr|=ee}U=U.next}while(U!==null&&U!==f);M===null?b=l:M.next=S,vn(l,t.memoizedState)||(Lt=!0),t.memoizedState=l,t.baseState=b,t.baseQueue=M,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do f=c.lane,ot.lanes|=f,Yr|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ca(e){var t=ln(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,f=t.memoizedState;if(c!==null){i.pending=null;var b=c=c.next;do f=e(f,b.action),b=b.next;while(b!==c);vn(f,t.memoizedState)||(Lt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),i.lastRenderedState=f}return[f,l]}function Tc(){}function jc(e,t){var i=ot,l=ln(),c=t(),f=!vn(l.memoizedState,c);if(f&&(l.memoizedState=c,Lt=!0),l=l.queue,Ra(Ac.bind(null,i,l,e),[e]),l.getSnapshot!==t||f||wt!==null&&wt.memoizedState.tag&1){if(i.flags|=2048,bo(9,Mc.bind(null,i,l,c,t),void 0,null),_t===null)throw Error(r(349));(Qr&30)!==0||qc(i,t,c)}return c}function qc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Mc(e,t,i,l){t.value=i,t.getSnapshot=l,Cc(t)&&Rc(e)}function Ac(e,t,i){return i(function(){Cc(t)&&Rc(e)})}function Cc(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!vn(e,i)}catch{return!0}}function Rc(e){var t=Gn(e,1);t!==null&&_n(t,e,1,-1)}function Ec(e){var t=An();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=mp.bind(null,ot,e),[t.memoizedState,e]}function bo(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function Dc(){return ln().memoizedState}function M0(e,t,i,l){var c=An();ot.flags|=e,c.memoizedState=bo(1|t,i,void 0,l===void 0?null:l)}function A0(e,t,i,l){var c=ln();l=l===void 0?null:l;var f=void 0;if(vt!==null){var b=vt.memoizedState;if(f=b.destroy,l!==null&&ja(l,b.deps)){c.memoizedState=bo(t,i,f,l);return}}ot.flags|=e,c.memoizedState=bo(1|t,i,f,l)}function Pc(e,t){return M0(8390656,8,e,t)}function Ra(e,t){return A0(2048,8,e,t)}function Bc(e,t){return A0(4,2,e,t)}function Nc(e,t){return A0(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,i){return i=i!=null?i.concat([e]):null,A0(4,4,Ic.bind(null,t,e),i)}function Ea(){}function Lc(e,t){var i=ln();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&ja(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Oc(e,t){var i=ln();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&ja(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function Hc(e,t,i){return(Qr&21)===0?(e.baseState&&(e.baseState=!1,Lt=!0),e.memoizedState=i):(vn(i,t)||(i=xu(),ot.lanes|=i,Yr|=i,e.baseState=!0),t)}function cp(e,t){var i=Qe;Qe=i!==0&&4>i?i:4,e(!0);var l=Ta.transition;Ta.transition={};try{e(!1),t()}finally{Qe=i,Ta.transition=l}}function Wc(){return ln().memoizedState}function dp(e,t,i){var l=$r(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Gc(e))Uc(t,i);else if(i=_c(e,t,i,l),i!==null){var c=Ct();_n(i,e,l,c),Vc(i,t,l)}}function mp(e,t,i){var l=$r(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Uc(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var b=t.lastRenderedState,S=f(b,i);if(c.hasEagerState=!0,c.eagerState=S,vn(S,b)){var M=t.interleaved;M===null?(c.next=c,wa(t)):(c.next=M.next,M.next=c),t.interleaved=c;return}}catch{}finally{}i=_c(e,t,c,l),i!==null&&(c=Ct(),_n(i,e,l,c),Vc(i,t,l))}}function Gc(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function Uc(e,t){vo=q0=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Vc(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Ps(e,i)}}var C0={readContext:an,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},fp={readContext:an,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:Pc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,M0(4194308,4,Ic.bind(null,t,e),i)},useLayoutEffect:function(e,t){return M0(4194308,4,e,t)},useInsertionEffect:function(e,t){return M0(4,2,e,t)},useMemo:function(e,t){var i=An();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=An();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=dp.bind(null,ot,e),[l.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:Ea,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=cp.bind(null,e[1]),An().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=ot,c=An();if(nt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),_t===null)throw Error(r(349));(Qr&30)!==0||qc(l,t,i)}c.memoizedState=i;var f={value:i,getSnapshot:t};return c.queue=f,Pc(Ac.bind(null,l,f,e),[e]),l.flags|=2048,bo(9,Mc.bind(null,l,f,i,t),void 0,null),i},useId:function(){var e=An(),t=_t.identifierPrefix;if(nt){var i=Wn,l=Hn;i=(l&~(1<<32-gn(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=yo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=up++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:an,useCallback:Lc,useContext:an,useEffect:Ra,useImperativeHandle:Fc,useInsertionEffect:Bc,useLayoutEffect:Nc,useMemo:Oc,useReducer:Aa,useRef:Dc,useState:function(){return Aa(xo)},useDebugValue:Ea,useDeferredValue:function(e){var t=ln();return Hc(t,vt.memoizedState,e)},useTransition:function(){var e=Aa(xo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:jc,useId:Wc,unstable_isNewReconciler:!1},hp={readContext:an,useCallback:Lc,useContext:an,useEffect:Ra,useImperativeHandle:Fc,useInsertionEffect:Bc,useLayoutEffect:Nc,useMemo:Oc,useReducer:Ca,useRef:Dc,useState:function(){return Ca(xo)},useDebugValue:Ea,useDeferredValue:function(e){var t=ln();return vt===null?t.memoizedState=e:Hc(t,vt.memoizedState,e)},useTransition:function(){var e=Ca(xo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:jc,useId:Wc,unstable_isNewReconciler:!1};function xn(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Da(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:de({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var R0={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Ct(),c=$r(e),f=Un(l,c);f.payload=t,i!=null&&(f.callback=i),t=xr(e,f,c),t!==null&&(_n(t,e,c,l),z0(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Ct(),c=$r(e),f=Un(l,c);f.tag=1,f.payload=t,i!=null&&(f.callback=i),t=xr(e,f,c),t!==null&&(_n(t,e,c,l),z0(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ct(),l=$r(e),c=Un(i,l);c.tag=2,t!=null&&(c.callback=t),t=xr(e,c,l),t!==null&&(_n(t,e,l,i),z0(t,e,l))}};function Kc(e,t,i,l,c,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,b):t.prototype&&t.prototype.isPureReactComponent?!oo(i,l)||!oo(c,f):!0}function Qc(e,t,i){var l=!1,c=gr,f=t.contextType;return typeof f=="object"&&f!==null?f=an(f):(c=Ft(t)?Wr:St.current,l=t.contextTypes,f=(l=l!=null)?yi(e,c):gr),t=new t(i,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=R0,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),t}function Yc(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&R0.enqueueReplaceState(t,t.state,null)}function Pa(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},_a(e);var f=t.contextType;typeof f=="object"&&f!==null?c.context=an(f):(f=Ft(t)?Wr:St.current,c.context=yi(e,f)),c.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(Da(e,t,f,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&R0.enqueueReplaceState(c,c.state,null),S0(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Si(e,t){try{var i="",l=t;do i+=Se(l),l=l.return;while(l);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:t,stack:c,digest:null}}function Ba(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,i){i=Un(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){F0||(F0=!0,Ja=l),Na(e,t)},i}function Xc(e,t,i){i=Un(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){Na(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){Na(e,t),typeof l!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var b=t.stack;this.componentDidCatch(t.value,{componentStack:b!==null?b:""})}),i}function Jc(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new gp;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=Mp.bind(null,e,t,i),t.then(e,e))}function e1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function t1(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Un(-1,1),t.tag=2,xr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var vp=F.ReactCurrentOwner,Lt=!1;function At(e,t,i,l){t.child=e===null?wc(t,null,i,l):_i(t,e.child,i,l)}function n1(e,t,i,l,c){i=i.render;var f=t.ref;return ki(t,c),l=qa(e,t,i,l,f,c),i=Ma(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Vn(e,t,c)):(nt&&i&&ma(t),t.flags|=1,At(e,t,l,c),t.child)}function r1(e,t,i,l,c){if(e===null){var f=i.type;return typeof f=="function"&&!sl(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=f,i1(e,t,f,l,c)):(e=U0(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,(e.lanes&c)===0){var b=f.memoizedProps;if(i=i.compare,i=i!==null?i:oo,i(b,l)&&e.ref===t.ref)return Vn(e,t,c)}return t.flags|=1,e=zr(f,l),e.ref=t.ref,e.return=t,t.child=e}function i1(e,t,i,l,c){if(e!==null){var f=e.memoizedProps;if(oo(f,l)&&e.ref===t.ref)if(Lt=!1,t.pendingProps=l=f,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Lt=!0);else return t.lanes=e.lanes,Vn(e,t,c)}return Ia(e,t,i,l,c)}function o1(e,t,i){var l=t.pendingProps,c=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(ji,Xt),Xt|=i;else{if((i&1073741824)===0)return e=f!==null?f.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(ji,Xt),Xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:i,Ze(ji,Xt),Xt|=l}else f!==null?(l=f.baseLanes|i,t.memoizedState=null):l=i,Ze(ji,Xt),Xt|=l;return At(e,t,c,i),t.child}function s1(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ia(e,t,i,l,c){var f=Ft(i)?Wr:St.current;return f=yi(t,f),ki(t,c),i=qa(e,t,i,l,f,c),l=Ma(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Vn(e,t,c)):(nt&&l&&ma(t),t.flags|=1,At(e,t,i,c),t.child)}function a1(e,t,i,l,c){if(Ft(i)){var f=!0;v0(t)}else f=!1;if(ki(t,c),t.stateNode===null)D0(e,t),Qc(t,i,l),Pa(t,i,l,c),l=!0;else if(e===null){var b=t.stateNode,S=t.memoizedProps;b.props=S;var M=b.context,U=i.contextType;typeof U=="object"&&U!==null?U=an(U):(U=Ft(i)?Wr:St.current,U=yi(t,U));var ee=i.getDerivedStateFromProps,re=typeof ee=="function"||typeof b.getSnapshotBeforeUpdate=="function";re||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(S!==l||M!==U)&&Yc(t,b,l,U),yr=!1;var X=t.memoizedState;b.state=X,S0(t,l,b,c),M=t.memoizedState,S!==l||X!==M||It.current||yr?(typeof ee=="function"&&(Da(t,i,ee,l),M=t.memoizedState),(S=yr||Kc(t,i,S,l,X,M,U))?(re||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(t.flags|=4194308)):(typeof b.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=M),b.props=l,b.state=M,b.context=U,l=S):(typeof b.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{b=t.stateNode,$c(e,t),S=t.memoizedProps,U=t.type===t.elementType?S:xn(t.type,S),b.props=U,re=t.pendingProps,X=b.context,M=i.contextType,typeof M=="object"&&M!==null?M=an(M):(M=Ft(i)?Wr:St.current,M=yi(t,M));var pe=i.getDerivedStateFromProps;(ee=typeof pe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(S!==re||X!==M)&&Yc(t,b,l,M),yr=!1,X=t.memoizedState,b.state=X,S0(t,l,b,c);var _e=t.memoizedState;S!==re||X!==_e||It.current||yr?(typeof pe=="function"&&(Da(t,i,pe,l),_e=t.memoizedState),(U=yr||Kc(t,i,U,l,X,_e,M)||!1)?(ee||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,_e,M),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,_e,M)),typeof b.componentDidUpdate=="function"&&(t.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof b.componentDidUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=_e),b.props=l,b.state=_e,b.context=M,l=U):(typeof b.componentDidUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),l=!1)}return Fa(e,t,i,l,f,c)}function Fa(e,t,i,l,c,f){s1(e,t);var b=(t.flags&128)!==0;if(!l&&!b)return c&&mc(t,i,!1),Vn(e,t,f);l=t.stateNode,vp.current=t;var S=b&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&b?(t.child=_i(t,e.child,null,f),t.child=_i(t,null,S,f)):At(e,t,S,f),t.memoizedState=l.state,c&&mc(t,i,!0),t.child}function l1(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,!1),$a(e,t.containerInfo)}function u1(e,t,i,l,c){return wi(),ga(c),t.flags|=256,At(e,t,i,l),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function c1(e,t,i){var l=t.pendingProps,c=it.current,f=!1,b=(t.flags&128)!==0,S;if((S=b)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(f=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ze(it,c&1),e===null)return ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(b=l.children,e=l.fallback,f?(l=t.mode,f=t.child,b={mode:"hidden",children:b},(l&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=b):f=V0(b,l,0,null),e=ei(e,l,i,null),f.return=t,e.return=t,f.sibling=e,t.child=f,t.child.memoizedState=Oa(i),t.memoizedState=La,e):Ha(t,b));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return yp(e,t,b,l,S,c,i);if(f){f=l.fallback,b=t.mode,c=e.child,S=c.sibling;var M={mode:"hidden",children:l.children};return(b&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=M,t.deletions=null):(l=zr(c,M),l.subtreeFlags=c.subtreeFlags&14680064),S!==null?f=zr(S,f):(f=ei(f,b,i,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,l=f,f=t.child,b=e.child.memoizedState,b=b===null?Oa(i):{baseLanes:b.baseLanes|i,cachePool:null,transitions:b.transitions},f.memoizedState=b,f.childLanes=e.childLanes&~i,t.memoizedState=La,l}return f=e.child,e=f.sibling,l=zr(f,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function Ha(e,t){return t=V0({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function E0(e,t,i,l){return l!==null&&ga(l),_i(t,e.child,null,i),e=Ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,i,l,c,f,b){if(i)return t.flags&256?(t.flags&=-257,l=Ba(Error(r(422))),E0(e,t,b,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(f=l.fallback,c=t.mode,l=V0({mode:"visible",children:l.children},c,0,null),f=ei(f,c,b,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,(t.mode&1)!==0&&_i(t,e.child,null,b),t.child.memoizedState=Oa(b),t.memoizedState=La,f);if((t.mode&1)===0)return E0(e,t,b,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var S=l.dgst;return l=S,f=Error(r(419)),l=Ba(f,l,void 0),E0(e,t,b,l)}if(S=(b&e.childLanes)!==0,Lt||S){if(l=_t,l!==null){switch(b&-b){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|b))!==0?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,Gn(e,c),_n(l,e,c,-1))}return ol(),l=Ba(Error(r(421))),E0(e,t,b,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),c._reactRetry=t,null):(e=f.treeContext,Zt=pr(c.nextSibling),Yt=t,nt=!0,yn=null,e!==null&&(on[sn++]=Hn,on[sn++]=Wn,on[sn++]=Gr,Hn=e.id,Wn=e.overflow,Gr=t),t=Ha(t,l.children),t.flags|=4096,t)}function d1(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ba(e.return,t,i)}function Wa(e,t,i,l,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=i,f.tailMode=c)}function m1(e,t,i){var l=t.pendingProps,c=l.revealOrder,f=l.tail;if(At(e,t,l.children,i),l=it.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d1(e,i,t);else if(e.tag===19)d1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ze(it,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&T0(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Wa(t,!1,c,i,f);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&T0(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Wa(t,!0,i,null,f);break;case"together":Wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function D0(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Yr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=zr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=zr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function xp(e,t,i){switch(t.tag){case 3:l1(t),wi();break;case 5:Sc(t);break;case 1:Ft(t.type)&&v0(t);break;case 4:$a(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Ze($0,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ze(it,it.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?c1(e,t,i):(Ze(it,it.current&1),e=Vn(e,t,i),e!==null?e.sibling:null);Ze(it,it.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return m1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ze(it,it.current),l)break;return null;case 22:case 23:return t.lanes=0,o1(e,t,i)}return Vn(e,t,i)}var f1,Ga,p1,h1;f1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ga=function(){},p1=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Kr(Mn.current);var f=null;switch(i){case"input":c=Dr(e,c),l=Dr(e,l),f=[];break;case"select":c=de({},c,{value:void 0}),l=de({},l,{value:void 0}),f=[];break;case"textarea":c=oi(e,c),l=oi(e,l),f=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=p0)}In(i,l);var b;i=null;for(U in c)if(!l.hasOwnProperty(U)&&c.hasOwnProperty(U)&&c[U]!=null)if(U==="style"){var S=c[U];for(b in S)S.hasOwnProperty(b)&&(i||(i={}),i[b]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(a.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in l){var M=l[U];if(S=c!=null?c[U]:void 0,l.hasOwnProperty(U)&&M!==S&&(M!=null||S!=null))if(U==="style")if(S){for(b in S)!S.hasOwnProperty(b)||M&&M.hasOwnProperty(b)||(i||(i={}),i[b]="");for(b in M)M.hasOwnProperty(b)&&S[b]!==M[b]&&(i||(i={}),i[b]=M[b])}else i||(f||(f=[]),f.push(U,i)),i=M;else U==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,S=S?S.__html:void 0,M!=null&&S!==M&&(f=f||[]).push(U,M)):U==="children"?typeof M!="string"&&typeof M!="number"||(f=f||[]).push(U,""+M):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(a.hasOwnProperty(U)?(M!=null&&U==="onScroll"&&Je("scroll",e),f||S===M||(f=[])):(f=f||[]).push(U,M))}i&&(f=f||[]).push("style",i);var U=f;(t.updateQueue=U)&&(t.flags|=4)}},h1=function(e,t,i,l){i!==l&&(t.flags|=4)};function wo(e,t){if(!nt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function jt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function bp(e,t,i){var l=t.pendingProps;switch(fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(t),null;case 1:return Ft(t.type)&&g0(),jt(t),null;case 3:return l=t.stateNode,zi(),et(It),et(St),Sa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(w0(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yn!==null&&(nl(yn),yn=null))),Ga(e,t),jt(t),null;case 5:ka(t);var c=Kr(go.current);if(i=t.type,e!==null&&t.stateNode!=null)p1(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(r(166));return jt(t),null}if(e=Kr(Mn.current),w0(t)){l=t.stateNode,i=t.type;var f=t.memoizedProps;switch(l[qn]=t,l[co]=f,e=(t.mode&1)!==0,i){case"dialog":Je("cancel",l),Je("close",l);break;case"iframe":case"object":case"embed":Je("load",l);break;case"video":case"audio":for(c=0;c<ao.length;c++)Je(ao[c],l);break;case"source":Je("error",l);break;case"img":case"image":case"link":Je("error",l),Je("load",l);break;case"details":Je("toggle",l);break;case"input":Pr(l,f),Je("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Je("invalid",l);break;case"textarea":Oe(l,f),Je("invalid",l)}In(i,f),c=null;for(var b in f)if(f.hasOwnProperty(b)){var S=f[b];b==="children"?typeof S=="string"?l.textContent!==S&&(f.suppressHydrationWarning!==!0&&f0(l.textContent,S,e),c=["children",S]):typeof S=="number"&&l.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&f0(l.textContent,S,e),c=["children",""+S]):a.hasOwnProperty(b)&&S!=null&&b==="onScroll"&&Je("scroll",l)}switch(i){case"input":bt(l),ir(l,f,!0);break;case"textarea":bt(l),lt(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=p0)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{b=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Br(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=b.createElement(i,{is:l.is}):(e=b.createElement(i),i==="select"&&(b=e,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):e=b.createElementNS(e,i),e[qn]=t,e[co]=l,f1(e,t,!1,!1),t.stateNode=e;e:{switch(b=si(i,l),i){case"dialog":Je("cancel",e),Je("close",e),c=l;break;case"iframe":case"object":case"embed":Je("load",e),c=l;break;case"video":case"audio":for(c=0;c<ao.length;c++)Je(ao[c],e);c=l;break;case"source":Je("error",e),c=l;break;case"img":case"image":case"link":Je("error",e),Je("load",e),c=l;break;case"details":Je("toggle",e),c=l;break;case"input":Pr(e,l),c=Dr(e,l),Je("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=de({},l,{value:void 0}),Je("invalid",e);break;case"textarea":Oe(e,l),c=oi(e,l),Je("invalid",e);break;default:c=l}In(i,c),S=c;for(f in S)if(S.hasOwnProperty(f)){var M=S[f];f==="style"?Sn(e,M):f==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Ii(e,M)):f==="children"?typeof M=="string"?(i!=="textarea"||M!=="")&&Nr(e,M):typeof M=="number"&&Nr(e,""+M):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?M!=null&&f==="onScroll"&&Je("scroll",e):M!=null&&W(e,f,M,b))}switch(i){case"input":bt(e),ir(e,l,!1);break;case"textarea":bt(e),lt(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Te(l.value));break;case"select":e.multiple=!!l.multiple,f=l.value,f!=null?Bt(e,!!l.multiple,f,!1):l.defaultValue!=null&&Bt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=p0)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return jt(t),null;case 6:if(e&&t.stateNode!=null)h1(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(i=Kr(go.current),Kr(Mn.current),w0(t)){if(l=t.stateNode,i=t.memoizedProps,l[qn]=t,(f=l.nodeValue!==i)&&(e=Yt,e!==null))switch(e.tag){case 3:f0(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&f0(l.nodeValue,i,(e.mode&1)!==0)}f&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[qn]=t,t.stateNode=l}return jt(t),null;case 13:if(et(it),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(nt&&Zt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yc(),wi(),t.flags|=98560,f=!1;else if(f=w0(t),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[qn]=t}else wi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;jt(t),f=!1}else yn!==null&&(nl(yn),yn=null),f=!0;if(!f)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(it.current&1)!==0?yt===0&&(yt=3):ol())),t.updateQueue!==null&&(t.flags|=4),jt(t),null);case 4:return zi(),Ga(e,t),e===null&&lo(t.stateNode.containerInfo),jt(t),null;case 10:return xa(t.type._context),jt(t),null;case 17:return Ft(t.type)&&g0(),jt(t),null;case 19:if(et(it),f=t.memoizedState,f===null)return jt(t),null;if(l=(t.flags&128)!==0,b=f.rendering,b===null)if(l)wo(f,!1);else{if(yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(b=T0(e),b!==null){for(t.flags|=128,wo(f,!1),l=b.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)f=i,e=l,f.flags&=14680066,b=f.alternate,b===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=b.childLanes,f.lanes=b.lanes,f.child=b.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=b.memoizedProps,f.memoizedState=b.memoizedState,f.updateQueue=b.updateQueue,f.type=b.type,e=b.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ze(it,it.current&1|2),t.child}e=e.sibling}f.tail!==null&&tt()>qi&&(t.flags|=128,l=!0,wo(f,!1),t.lanes=4194304)}else{if(!l)if(e=T0(b),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),wo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!b.alternate&&!nt)return jt(t),null}else 2*tt()-f.renderingStartTime>qi&&i!==1073741824&&(t.flags|=128,l=!0,wo(f,!1),t.lanes=4194304);f.isBackwards?(b.sibling=t.child,t.child=b):(i=f.last,i!==null?i.sibling=b:t.child=b,f.last=b)}return f.tail!==null?(t=f.tail,f.rendering=t,f.tail=t.sibling,f.renderingStartTime=tt(),t.sibling=null,i=it.current,Ze(it,l?i&1|2:i&1),t):(jt(t),null);case 22:case 23:return il(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Xt&1073741824)!==0&&(jt(t),t.subtreeFlags&6&&(t.flags|=8192)):jt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function wp(e,t){switch(fa(t),t.tag){case 1:return Ft(t.type)&&g0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zi(),et(It),et(St),Sa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ka(t),null;case 13:if(et(it),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(it),null;case 4:return zi(),null;case 10:return xa(t.type._context),null;case 22:case 23:return il(),null;case 24:return null;default:return null}}var P0=!1,qt=!1,_p=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Ti(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){ut(e,t,l)}else i.current=null}function Ua(e,t,i){try{i()}catch(l){ut(e,t,l)}}var g1=!1;function $p(e,t){if(ia=n0,e=Ku(),Ys(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var b=0,S=-1,M=-1,U=0,ee=0,re=e,X=null;t:for(;;){for(var pe;re!==i||c!==0&&re.nodeType!==3||(S=b+c),re!==f||l!==0&&re.nodeType!==3||(M=b+l),re.nodeType===3&&(b+=re.nodeValue.length),(pe=re.firstChild)!==null;)X=re,re=pe;for(;;){if(re===e)break t;if(X===i&&++U===c&&(S=b),X===f&&++ee===l&&(M=b),(pe=re.nextSibling)!==null)break;re=X,X=re.parentNode}re=pe}i=S===-1||M===-1?null:{start:S,end:M}}else i=null}i=i||{start:0,end:0}}else i=null;for(oa={focusedElem:e,selectionRange:i},n0=!1,ye=t;ye!==null;)if(t=ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ye=e;else for(;ye!==null;){t=ye;try{var _e=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var ke=_e.memoizedProps,dt=_e.memoizedState,N=t.stateNode,R=N.getSnapshotBeforeUpdate(t.elementType===t.type?ke:xn(t.type,ke),dt);N.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(le){ut(t,t.return,le)}if(e=t.sibling,e!==null){e.return=t.return,ye=e;break}ye=t.return}return _e=g1,g1=!1,_e}function _o(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&Ua(t,i,f)}c=c.next}while(c!==l)}}function B0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Va(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function v1(e){var t=e.alternate;t!==null&&(e.alternate=null,v1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[co],delete t[ua],delete t[op],delete t[sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function y1(e){return e.tag===5||e.tag===3||e.tag===4}function x1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||y1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=p0));else if(l!==4&&(e=e.child,e!==null))for(Ka(e,t,i),e=e.sibling;e!==null;)Ka(e,t,i),e=e.sibling}function Qa(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Qa(e,t,i),e=e.sibling;e!==null;)Qa(e,t,i),e=e.sibling}var kt=null,bn=!1;function br(e,t,i){for(i=i.child;i!==null;)b1(e,t,i),i=i.sibling}function b1(e,t,i){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Yo,i)}catch{}switch(i.tag){case 5:qt||Ti(i,t);case 6:var l=kt,c=bn;kt=null,br(e,t,i),kt=l,bn=c,kt!==null&&(bn?(e=kt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):kt.removeChild(i.stateNode));break;case 18:kt!==null&&(bn?(e=kt,i=i.stateNode,e.nodeType===8?la(e.parentNode,i):e.nodeType===1&&la(e,i),Ji(e)):la(kt,i.stateNode));break;case 4:l=kt,c=bn,kt=i.stateNode.containerInfo,bn=!0,br(e,t,i),kt=l,bn=c;break;case 0:case 11:case 14:case 15:if(!qt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var f=c,b=f.destroy;f=f.tag,b!==void 0&&((f&2)!==0||(f&4)!==0)&&Ua(i,t,b),c=c.next}while(c!==l)}br(e,t,i);break;case 1:if(!qt&&(Ti(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(S){ut(i,t,S)}br(e,t,i);break;case 21:br(e,t,i);break;case 22:i.mode&1?(qt=(l=qt)||i.memoizedState!==null,br(e,t,i),qt=l):br(e,t,i);break;default:br(e,t,i)}}function w1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new _p),t.forEach(function(l){var c=Cp.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function wn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var f=e,b=t,S=b;e:for(;S!==null;){switch(S.tag){case 5:kt=S.stateNode,bn=!1;break e;case 3:kt=S.stateNode.containerInfo,bn=!0;break e;case 4:kt=S.stateNode.containerInfo,bn=!0;break e}S=S.return}if(kt===null)throw Error(r(160));b1(f,b,c),kt=null,bn=!1;var M=c.alternate;M!==null&&(M.return=null),c.return=null}catch(U){ut(c,t,U)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_1(t,e),t=t.sibling}function _1(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(t,e),Cn(e),l&4){try{_o(3,e,e.return),B0(3,e)}catch(ke){ut(e,e.return,ke)}try{_o(5,e,e.return)}catch(ke){ut(e,e.return,ke)}}break;case 1:wn(t,e),Cn(e),l&512&&i!==null&&Ti(i,i.return);break;case 5:if(wn(t,e),Cn(e),l&512&&i!==null&&Ti(i,i.return),e.flags&32){var c=e.stateNode;try{Nr(c,"")}catch(ke){ut(e,e.return,ke)}}if(l&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,b=i!==null?i.memoizedProps:f,S=e.type,M=e.updateQueue;if(e.updateQueue=null,M!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&nr(c,f),si(S,b);var U=si(S,f);for(b=0;b<M.length;b+=2){var ee=M[b],re=M[b+1];ee==="style"?Sn(c,re):ee==="dangerouslySetInnerHTML"?Ii(c,re):ee==="children"?Nr(c,re):W(c,ee,re,U)}switch(S){case"input":rr(c,f);break;case"textarea":nn(c,f);break;case"select":var X=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var pe=f.value;pe!=null?Bt(c,!!f.multiple,pe,!1):X!==!!f.multiple&&(f.defaultValue!=null?Bt(c,!!f.multiple,f.defaultValue,!0):Bt(c,!!f.multiple,f.multiple?[]:"",!1))}c[co]=f}catch(ke){ut(e,e.return,ke)}}break;case 6:if(wn(t,e),Cn(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(ke){ut(e,e.return,ke)}}break;case 3:if(wn(t,e),Cn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(ke){ut(e,e.return,ke)}break;case 4:wn(t,e),Cn(e);break;case 13:wn(t,e),Cn(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(Xa=tt())),l&4&&w1(e);break;case 22:if(ee=i!==null&&i.memoizedState!==null,e.mode&1?(qt=(U=qt)||ee,wn(t,e),qt=U):wn(t,e),Cn(e),l&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!ee&&(e.mode&1)!==0)for(ye=e,ee=e.child;ee!==null;){for(re=ye=ee;ye!==null;){switch(X=ye,pe=X.child,X.tag){case 0:case 11:case 14:case 15:_o(4,X,X.return);break;case 1:Ti(X,X.return);var _e=X.stateNode;if(typeof _e.componentWillUnmount=="function"){l=X,i=X.return;try{t=l,_e.props=t.memoizedProps,_e.state=t.memoizedState,_e.componentWillUnmount()}catch(ke){ut(l,i,ke)}}break;case 5:Ti(X,X.return);break;case 22:if(X.memoizedState!==null){z1(re);continue}}pe!==null?(pe.return=X,ye=pe):z1(re)}ee=ee.sibling}e:for(ee=null,re=e;;){if(re.tag===5){if(ee===null){ee=re;try{c=re.stateNode,U?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=re.stateNode,M=re.memoizedProps.style,b=M!=null&&M.hasOwnProperty("display")?M.display:null,S.style.display=Fo("display",b))}catch(ke){ut(e,e.return,ke)}}}else if(re.tag===6){if(ee===null)try{re.stateNode.nodeValue=U?"":re.memoizedProps}catch(ke){ut(e,e.return,ke)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===e)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===e)break e;for(;re.sibling===null;){if(re.return===null||re.return===e)break e;ee===re&&(ee=null),re=re.return}ee===re&&(ee=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:wn(t,e),Cn(e),l&4&&w1(e);break;case 21:break;default:wn(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(y1(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Nr(c,""),l.flags&=-33);var f=x1(e);Qa(e,f,c);break;case 3:case 4:var b=l.stateNode.containerInfo,S=x1(e);Ka(e,S,b);break;default:throw Error(r(161))}}catch(M){ut(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e,t,i){ye=e,$1(e)}function $1(e,t,i){for(var l=(e.mode&1)!==0;ye!==null;){var c=ye,f=c.child;if(c.tag===22&&l){var b=c.memoizedState!==null||P0;if(!b){var S=c.alternate,M=S!==null&&S.memoizedState!==null||qt;S=P0;var U=qt;if(P0=b,(qt=M)&&!U)for(ye=c;ye!==null;)b=ye,M=b.child,b.tag===22&&b.memoizedState!==null?S1(c):M!==null?(M.return=b,ye=M):S1(c);for(;f!==null;)ye=f,$1(f),f=f.sibling;ye=c,P0=S,qt=U}k1(e)}else(c.subtreeFlags&8772)!==0&&f!==null?(f.return=c,ye=f):k1(e)}}function k1(e){for(;ye!==null;){var t=ye;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qt||B0(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!qt)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:xn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=t.updateQueue;f!==null&&zc(t,f,l);break;case 3:var b=t.updateQueue;if(b!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}zc(t,b,i)}break;case 5:var S=t.stateNode;if(i===null&&t.flags&4){i=S;var M=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&i.focus();break;case"img":M.src&&(i.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var U=t.alternate;if(U!==null){var ee=U.memoizedState;if(ee!==null){var re=ee.dehydrated;re!==null&&Ji(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}qt||t.flags&512&&Va(t)}catch(X){ut(t,t.return,X)}}if(t===e){ye=null;break}if(i=t.sibling,i!==null){i.return=t.return,ye=i;break}ye=t.return}}function z1(e){for(;ye!==null;){var t=ye;if(t===e){ye=null;break}var i=t.sibling;if(i!==null){i.return=t.return,ye=i;break}ye=t.return}}function S1(e){for(;ye!==null;){var t=ye;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{B0(4,t)}catch(M){ut(t,i,M)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(M){ut(t,c,M)}}var f=t.return;try{Va(t)}catch(M){ut(t,f,M)}break;case 5:var b=t.return;try{Va(t)}catch(M){ut(t,b,M)}}}catch(M){ut(t,t.return,M)}if(t===e){ye=null;break}var S=t.sibling;if(S!==null){S.return=t.return,ye=S;break}ye=t.return}}var zp=Math.ceil,N0=F.ReactCurrentDispatcher,Ya=F.ReactCurrentOwner,un=F.ReactCurrentBatchConfig,Ge=0,_t=null,ft=null,zt=0,Xt=0,ji=hr(0),yt=0,$o=null,Yr=0,I0=0,Za=0,ko=null,Ot=null,Xa=0,qi=1/0,Kn=null,F0=!1,Ja=null,wr=null,L0=!1,_r=null,O0=0,zo=0,el=null,H0=-1,W0=0;function Ct(){return(Ge&6)!==0?tt():H0!==-1?H0:H0=tt()}function $r(e){return(e.mode&1)===0?1:(Ge&2)!==0&&zt!==0?zt&-zt:lp.transition!==null?(W0===0&&(W0=xu()),W0):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e)}function _n(e,t,i,l){if(50<zo)throw zo=0,el=null,Error(r(185));Ki(e,i,l),((Ge&2)===0||e!==_t)&&(e===_t&&((Ge&2)===0&&(I0|=i),yt===4&&kr(e,zt)),Ht(e,l),i===1&&Ge===0&&(t.mode&1)===0&&(qi=tt()+500,y0&&vr()))}function Ht(e,t){var i=e.callbackNode;lf(e,t);var l=Jo(e,e===_t?zt:0);if(l===0)i!==null&&Qo(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&Qo(i),t===1)e.tag===0?ap(j1.bind(null,e)):fc(j1.bind(null,e)),rp(function(){(Ge&6)===0&&vr()}),i=null;else{switch(bu(l)){case 1:i=Ne;break;case 4:i=We;break;case 16:i=ar;break;case 536870912:i=yu;break;default:i=ar}i=P1(i,T1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function T1(e,t){if(H0=-1,W0=0,(Ge&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Mi()&&e.callbackNode!==i)return null;var l=Jo(e,e===_t?zt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=G0(e,l);else{t=l;var c=Ge;Ge|=2;var f=M1();(_t!==e||zt!==t)&&(Kn=null,qi=tt()+500,Xr(e,t));do try{jp();break}catch(S){q1(e,S)}while(!0);ya(),N0.current=f,Ge=c,ft!==null?t=0:(_t=null,zt=0,t=yt)}if(t!==0){if(t===2&&(c=Es(e),c!==0&&(l=c,t=tl(e,c))),t===1)throw i=$o,Xr(e,0),kr(e,l),Ht(e,tt()),i;if(t===6)kr(e,l);else{if(c=e.current.alternate,(l&30)===0&&!Sp(c)&&(t=G0(e,l),t===2&&(f=Es(e),f!==0&&(l=f,t=tl(e,f))),t===1))throw i=$o,Xr(e,0),kr(e,l),Ht(e,tt()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(r(345));case 2:Jr(e,Ot,Kn);break;case 3:if(kr(e,l),(l&130023424)===l&&(t=Xa+500-tt(),10<t)){if(Jo(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){Ct(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=aa(Jr.bind(null,e,Ot,Kn),t);break}Jr(e,Ot,Kn);break;case 4:if(kr(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var b=31-gn(l);f=1<<b,b=t[b],b>c&&(c=b),l&=~f}if(l=c,l=tt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*zp(l/1960))-l,10<l){e.timeoutHandle=aa(Jr.bind(null,e,Ot,Kn),l);break}Jr(e,Ot,Kn);break;case 5:Jr(e,Ot,Kn);break;default:throw Error(r(329))}}}return Ht(e,tt()),e.callbackNode===i?T1.bind(null,e):null}function tl(e,t){var i=ko;return e.current.memoizedState.isDehydrated&&(Xr(e,t).flags|=256),e=G0(e,t),e!==2&&(t=Ot,Ot=i,t!==null&&nl(t)),e}function nl(e){Ot===null?Ot=e:Ot.push.apply(Ot,e)}function Sp(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],f=c.getSnapshot;c=c.value;try{if(!vn(f(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kr(e,t){for(t&=~Za,t&=~I0,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-gn(t),l=1<<i;e[i]=-1,t&=~l}}function j1(e){if((Ge&6)!==0)throw Error(r(327));Mi();var t=Jo(e,0);if((t&1)===0)return Ht(e,tt()),null;var i=G0(e,t);if(e.tag!==0&&i===2){var l=Es(e);l!==0&&(t=l,i=tl(e,l))}if(i===1)throw i=$o,Xr(e,0),kr(e,t),Ht(e,tt()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,Ot,Kn),Ht(e,tt()),null}function rl(e,t){var i=Ge;Ge|=1;try{return e(t)}finally{Ge=i,Ge===0&&(qi=tt()+500,y0&&vr())}}function Zr(e){_r!==null&&_r.tag===0&&(Ge&6)===0&&Mi();var t=Ge;Ge|=1;var i=un.transition,l=Qe;try{if(un.transition=null,Qe=1,e)return e()}finally{Qe=l,un.transition=i,Ge=t,(Ge&6)===0&&vr()}}function il(){Xt=ji.current,et(ji)}function Xr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,np(i)),ft!==null)for(i=ft.return;i!==null;){var l=i;switch(fa(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&g0();break;case 3:zi(),et(It),et(St),Sa();break;case 5:ka(l);break;case 4:zi();break;case 13:et(it);break;case 19:et(it);break;case 10:xa(l.type._context);break;case 22:case 23:il()}i=i.return}if(_t=e,ft=e=zr(e.current,null),zt=Xt=t,yt=0,$o=null,Za=I0=Yr=0,Ot=ko=null,Vr!==null){for(t=0;t<Vr.length;t++)if(i=Vr[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,f=i.pending;if(f!==null){var b=f.next;f.next=c,l.next=b}i.pending=l}Vr=null}return e}function q1(e,t){do{var i=ft;try{if(ya(),j0.current=C0,q0){for(var l=ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}q0=!1}if(Qr=0,wt=vt=ot=null,vo=!1,yo=0,Ya.current=null,i===null||i.return===null){yt=1,$o=t,ft=null;break}e:{var f=e,b=i.return,S=i,M=t;if(t=zt,S.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var U=M,ee=S,re=ee.tag;if((ee.mode&1)===0&&(re===0||re===11||re===15)){var X=ee.alternate;X?(ee.updateQueue=X.updateQueue,ee.memoizedState=X.memoizedState,ee.lanes=X.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var pe=e1(b);if(pe!==null){pe.flags&=-257,t1(pe,b,S,f,t),pe.mode&1&&Jc(f,U,t),t=pe,M=U;var _e=t.updateQueue;if(_e===null){var ke=new Set;ke.add(M),t.updateQueue=ke}else _e.add(M);break e}else{if((t&1)===0){Jc(f,U,t),ol();break e}M=Error(r(426))}}else if(nt&&S.mode&1){var dt=e1(b);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),t1(dt,b,S,f,t),ga(Si(M,S));break e}}f=M=Si(M,S),yt!==4&&(yt=2),ko===null?ko=[f]:ko.push(f),f=b;do{switch(f.tag){case 3:f.flags|=65536,t&=-t,f.lanes|=t;var N=Zc(f,M,t);kc(f,N);break e;case 1:S=M;var R=f.type,L=f.stateNode;if((f.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(wr===null||!wr.has(L)))){f.flags|=65536,t&=-t,f.lanes|=t;var le=Xc(f,S,t);kc(f,le);break e}}f=f.return}while(f!==null)}C1(i)}catch(ze){t=ze,ft===i&&i!==null&&(ft=i=i.return);continue}break}while(!0)}function M1(){var e=N0.current;return N0.current=C0,e===null?C0:e}function ol(){(yt===0||yt===3||yt===2)&&(yt=4),_t===null||(Yr&268435455)===0&&(I0&268435455)===0||kr(_t,zt)}function G0(e,t){var i=Ge;Ge|=2;var l=M1();(_t!==e||zt!==t)&&(Kn=null,Xr(e,t));do try{Tp();break}catch(c){q1(e,c)}while(!0);if(ya(),Ge=i,N0.current=l,ft!==null)throw Error(r(261));return _t=null,zt=0,yt}function Tp(){for(;ft!==null;)A1(ft)}function jp(){for(;ft!==null&&!Cs();)A1(ft)}function A1(e){var t=D1(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,t===null?C1(e):ft=t,Ya.current=null}function C1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=bp(i,t,Xt),i!==null){ft=i;return}}else{if(i=wp(i,t),i!==null){i.flags&=32767,ft=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,ft=null;return}}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);yt===0&&(yt=5)}function Jr(e,t,i){var l=Qe,c=un.transition;try{un.transition=null,Qe=1,qp(e,t,i,l)}finally{un.transition=c,Qe=l}return null}function qp(e,t,i,l){do Mi();while(_r!==null);if((Ge&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(uf(e,f),e===_t&&(ft=_t=null,zt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||L0||(L0=!0,P1(ar,function(){return Mi(),null})),f=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||f){f=un.transition,un.transition=null;var b=Qe;Qe=1;var S=Ge;Ge|=4,Ya.current=null,$p(e,i),_1(i,e),Qf(oa),n0=!!ia,oa=ia=null,e.current=i,kp(i),Rs(),Ge=S,Qe=b,un.transition=f}else e.current=i;if(L0&&(L0=!1,_r=e,O0=c),f=e.pendingLanes,f===0&&(wr=null),nf(i.stateNode),Ht(e,tt()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(F0)throw F0=!1,e=Ja,Ja=null,e;return(O0&1)!==0&&e.tag!==0&&Mi(),f=e.pendingLanes,(f&1)!==0?e===el?zo++:(zo=0,el=e):zo=0,vr(),null}function Mi(){if(_r!==null){var e=bu(O0),t=un.transition,i=Qe;try{if(un.transition=null,Qe=16>e?16:e,_r===null)var l=!1;else{if(e=_r,_r=null,O0=0,(Ge&6)!==0)throw Error(r(331));var c=Ge;for(Ge|=4,ye=e.current;ye!==null;){var f=ye,b=f.child;if((ye.flags&16)!==0){var S=f.deletions;if(S!==null){for(var M=0;M<S.length;M++){var U=S[M];for(ye=U;ye!==null;){var ee=ye;switch(ee.tag){case 0:case 11:case 15:_o(8,ee,f)}var re=ee.child;if(re!==null)re.return=ee,ye=re;else for(;ye!==null;){ee=ye;var X=ee.sibling,pe=ee.return;if(v1(ee),ee===U){ye=null;break}if(X!==null){X.return=pe,ye=X;break}ye=pe}}}var _e=f.alternate;if(_e!==null){var ke=_e.child;if(ke!==null){_e.child=null;do{var dt=ke.sibling;ke.sibling=null,ke=dt}while(ke!==null)}}ye=f}}if((f.subtreeFlags&2064)!==0&&b!==null)b.return=f,ye=b;else e:for(;ye!==null;){if(f=ye,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:_o(9,f,f.return)}var N=f.sibling;if(N!==null){N.return=f.return,ye=N;break e}ye=f.return}}var R=e.current;for(ye=R;ye!==null;){b=ye;var L=b.child;if((b.subtreeFlags&2064)!==0&&L!==null)L.return=b,ye=L;else e:for(b=R;ye!==null;){if(S=ye,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:B0(9,S)}}catch(ze){ut(S,S.return,ze)}if(S===b){ye=null;break e}var le=S.sibling;if(le!==null){le.return=S.return,ye=le;break e}ye=S.return}}if(Ge=c,vr(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Yo,e)}catch{}l=!0}return l}finally{Qe=i,un.transition=t}}return!1}function R1(e,t,i){t=Si(i,t),t=Zc(e,t,1),e=xr(e,t,1),t=Ct(),e!==null&&(Ki(e,1,t),Ht(e,t))}function ut(e,t,i){if(e.tag===3)R1(e,e,i);else for(;t!==null;){if(t.tag===3){R1(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wr===null||!wr.has(l))){e=Si(i,e),e=Xc(t,e,1),t=xr(t,e,1),e=Ct(),t!==null&&(Ki(t,1,e),Ht(t,e));break}}t=t.return}}function Mp(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&i,_t===e&&(zt&i)===i&&(yt===4||yt===3&&(zt&130023424)===zt&&500>tt()-Xa?Xr(e,0):Za|=i),Ht(e,t)}function E1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Xo,Xo<<=1,(Xo&130023424)===0&&(Xo=4194304)));var i=Ct();e=Gn(e,t),e!==null&&(Ki(e,t,i),Ht(e,i))}function Ap(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),E1(e,i)}function Cp(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(t),E1(e,i)}var D1;D1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)Lt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Lt=!1,xp(e,t,i);Lt=(e.flags&131072)!==0}else Lt=!1,nt&&(t.flags&1048576)!==0&&pc(t,b0,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;D0(e,t),e=t.pendingProps;var c=yi(t,St.current);ki(t,i),c=qa(null,t,l,e,c,i);var f=Ma();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ft(l)?(f=!0,v0(t)):f=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,_a(t),c.updater=R0,t.stateNode=c,c._reactInternals=t,Pa(t,l,e,i),t=Fa(null,t,l,!0,f,i)):(t.tag=0,nt&&f&&ma(t),At(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(D0(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=Ep(l),e=xn(l,e),c){case 0:t=Ia(null,t,l,e,i);break e;case 1:t=a1(null,t,l,e,i);break e;case 11:t=n1(null,t,l,e,i);break e;case 14:t=r1(null,t,l,xn(l.type,e),i);break e}throw Error(r(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:xn(l,c),Ia(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:xn(l,c),a1(e,t,l,c,i);case 3:e:{if(l1(t),e===null)throw Error(r(387));l=t.pendingProps,f=t.memoizedState,c=f.element,$c(e,t),S0(t,l,null,i);var b=t.memoizedState;if(l=b.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){c=Si(Error(r(423)),t),t=u1(e,t,l,i,c);break e}else if(l!==c){c=Si(Error(r(424)),t),t=u1(e,t,l,i,c);break e}else for(Zt=pr(t.stateNode.containerInfo.firstChild),Yt=t,nt=!0,yn=null,i=wc(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(wi(),l===c){t=Vn(e,t,i);break e}At(e,t,l,i)}t=t.child}return t;case 5:return Sc(t),e===null&&ha(t),l=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,b=c.children,sa(l,c)?b=null:f!==null&&sa(l,f)&&(t.flags|=32),s1(e,t),At(e,t,b,i),t.child;case 6:return e===null&&ha(t),null;case 13:return c1(e,t,i);case 4:return $a(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=_i(t,null,l,i):At(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:xn(l,c),n1(e,t,l,c,i);case 7:return At(e,t,t.pendingProps,i),t.child;case 8:return At(e,t,t.pendingProps.children,i),t.child;case 12:return At(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,f=t.memoizedProps,b=c.value,Ze($0,l._currentValue),l._currentValue=b,f!==null)if(vn(f.value,b)){if(f.children===c.children&&!It.current){t=Vn(e,t,i);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var S=f.dependencies;if(S!==null){b=f.child;for(var M=S.firstContext;M!==null;){if(M.context===l){if(f.tag===1){M=Un(-1,i&-i),M.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var ee=U.pending;ee===null?M.next=M:(M.next=ee.next,ee.next=M),U.pending=M}}f.lanes|=i,M=f.alternate,M!==null&&(M.lanes|=i),ba(f.return,i,t),S.lanes|=i;break}M=M.next}}else if(f.tag===10)b=f.type===t.type?null:f.child;else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=i,S=b.alternate,S!==null&&(S.lanes|=i),ba(b,i,t),b=f.sibling}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}At(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,ki(t,i),c=an(c),l=l(c),t.flags|=1,At(e,t,l,i),t.child;case 14:return l=t.type,c=xn(l,t.pendingProps),c=xn(l.type,c),r1(e,t,l,c,i);case 15:return i1(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:xn(l,c),D0(e,t),t.tag=1,Ft(l)?(e=!0,v0(t)):e=!1,ki(t,i),Qc(t,l,c),Pa(t,l,c,i),Fa(null,t,l,!0,e,i);case 19:return m1(e,t,i);case 22:return o1(e,t,i)}throw Error(r(156,t.tag))};function P1(e,t){return Ui(e,t)}function Rp(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,i,l){return new Rp(e,t,i,l)}function sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===Fe)return 14}return 2}function zr(e,t){var i=e.alternate;return i===null?(i=cn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function U0(e,t,i,l,c,f){var b=2;if(l=e,typeof e=="function")sl(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case P:return ei(i.children,c,f,t);case V:b=8,c|=8;break;case ne:return e=cn(12,i,t,c|2),e.elementType=ne,e.lanes=f,e;case ve:return e=cn(13,i,t,c),e.elementType=ve,e.lanes=f,e;case xe:return e=cn(19,i,t,c),e.elementType=xe,e.lanes=f,e;case Le:return V0(i,c,f,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:b=10;break e;case se:b=9;break e;case ae:b=11;break e;case Fe:b=14;break e;case Be:b=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=cn(b,i,t,c),t.elementType=e,t.type=l,t.lanes=f,t}function ei(e,t,i,l){return e=cn(7,e,l,t),e.lanes=i,e}function V0(e,t,i,l){return e=cn(22,e,l,t),e.elementType=Le,e.lanes=i,e.stateNode={isHidden:!1},e}function al(e,t,i){return e=cn(6,e,null,t),e.lanes=i,e}function ll(e,t,i){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ul(e,t,i,l,c,f,b,S,M){return e=new Dp(e,t,i,S,M),t===1?(t=1,f===!0&&(t|=8)):t=0,f=cn(3,null,null,t),e.current=f,f.stateNode=e,f.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(f),e}function Pp(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function B1(e){if(!e)return gr;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Ft(i))return dc(e,i,t)}return t}function N1(e,t,i,l,c,f,b,S,M){return e=ul(i,l,!0,e,c,f,b,S,M),e.context=B1(null),i=e.current,l=Ct(),c=$r(i),f=Un(l,c),f.callback=t??null,xr(i,f,c),e.current.lanes=c,Ki(e,c,l),Ht(e,l),e}function K0(e,t,i,l){var c=t.current,f=Ct(),b=$r(c);return i=B1(i),t.context===null?t.context=i:t.pendingContext=i,t=Un(f,b),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=xr(c,t,b),e!==null&&(_n(e,c,b,f),z0(e,c,b)),b}function Q0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function cl(e,t){I1(e,t),(e=e.alternate)&&I1(e,t)}function Bp(){return null}var F1=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}Y0.prototype.render=dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));K0(e,t,null,null)},Y0.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zr(function(){K0(null,e,null,null)}),t[Ln]=null}};function Y0(e){this._internalRoot=e}Y0.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var i=0;i<dr.length&&t!==0&&t<dr[i].priority;i++);dr.splice(i,0,e),i===0&&Su(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Z0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function L1(){}function Np(e,t,i,l,c){if(c){if(typeof l=="function"){var f=l;l=function(){var U=Q0(b);f.call(U)}}var b=N1(t,l,e,0,null,!1,!1,"",L1);return e._reactRootContainer=b,e[Ln]=b.current,lo(e.nodeType===8?e.parentNode:e),Zr(),b}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var S=l;l=function(){var U=Q0(M);S.call(U)}}var M=ul(e,0,!1,null,null,!1,!1,"",L1);return e._reactRootContainer=M,e[Ln]=M.current,lo(e.nodeType===8?e.parentNode:e),Zr(function(){K0(t,M,i,l)}),M}function X0(e,t,i,l,c){var f=i._reactRootContainer;if(f){var b=f;if(typeof c=="function"){var S=c;c=function(){var M=Q0(b);S.call(M)}}K0(t,b,e,c)}else b=Np(i,t,e,c,l);return Q0(b)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Vi(t.pendingLanes);i!==0&&(Ps(t,i|1),Ht(t,tt()),(Ge&6)===0&&(qi=tt()+500,vr()))}break;case 13:Zr(function(){var l=Gn(e,1);if(l!==null){var c=Ct();_n(l,e,1,c)}}),cl(e,1)}},Bs=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var i=Ct();_n(t,e,134217728,i)}cl(e,134217728)}},_u=function(e){if(e.tag===13){var t=$r(e),i=Gn(e,t);if(i!==null){var l=Ct();_n(i,e,t,l)}cl(e,t)}},$u=function(){return Qe},ku=function(e,t){var i=Qe;try{return Qe=e,t()}finally{Qe=i}},ai=function(e,t,i){switch(t){case"input":if(rr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=h0(l);if(!c)throw Error(r(90));Nn(l),rr(l,c)}}}break;case"textarea":nn(e,i);break;case"select":t=i.value,t!=null&&Bt(e,!!i.multiple,t,!1)}},Ho=rl,or=Zr;var Ip={usingClientEntryPoint:!1,Events:[mo,gi,h0,Oo,li,rl]},So={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vo(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var J0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!J0.isDisabled&&J0.supportsFiber)try{Yo=J0.inject(Fp),jn=J0}catch{}}return Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip,Wt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(t))throw Error(r(200));return Pp(e,t,null,i)},Wt.createRoot=function(e,t){if(!ml(e))throw Error(r(299));var i=!1,l="",c=F1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ul(e,1,!1,null,null,i,!1,l,c),e[Ln]=t.current,lo(e.nodeType===8?e.parentNode:e),new dl(t)},Wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Vo(t),e=e===null?null:e.stateNode,e},Wt.flushSync=function(e){return Zr(e)},Wt.hydrate=function(e,t,i){if(!Z0(t))throw Error(r(200));return X0(null,e,t,!0,i)},Wt.hydrateRoot=function(e,t,i){if(!ml(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,f="",b=F1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),t=N1(t,null,e,1,i??null,c,!1,f,b),e[Ln]=t.current,lo(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new Y0(t)},Wt.render=function(e,t,i){if(!Z0(t))throw Error(r(200));return X0(null,e,t,!1,i)},Wt.unmountComponentAtNode=function(e){if(!Z0(e))throw Error(r(40));return e._reactRootContainer?(Zr(function(){X0(null,null,e,!1,function(){e._reactRootContainer=null,e[Ln]=null})}),!0):!1},Wt.unstable_batchedUpdates=rl,Wt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!Z0(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return X0(e,t,i,!1,l)},Wt.version="18.3.1-next-f1338f8080-20240426",Wt}var Q1;function Kp(){if(Q1)return hl.exports;Q1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),hl.exports=Vp(),hl.exports}var Y1;function Qp(){if(Y1)return es;Y1=1;var o=Kp();return es.createRoot=o.createRoot,es.hydrateRoot=o.hydrateRoot,es}var Yp=Qp();const Zp=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Xp=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Jp=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,eh=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,th=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,nh=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,rh=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,ih=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,oh=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,sh=`---
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
`,ah=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,lh=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,uh=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,ch=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,dh=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
resources:
  - "interactive|derivative-explorer.html|Derivative Explorer|Eksplorator pochodnej"
---
`,mh=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,fh=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,ph=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,hh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,gh=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,vh=`---
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
`,yh=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,xh=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,bh=`---
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
`,wh=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,_h=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,$h=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,kh=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,zh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,Sh=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
---
`,Th=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
---
`,jh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,qh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,Mh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,Ah=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,Ch=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,Rh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
`,Eh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,Dh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,Ph=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,Bh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,Nh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,Ih=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,Fh=`---
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
`,Lh=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,Oh=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
---
`,Hh=`---
label: "Quadratic Equations"
labelPl: "Równania kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 390
resources:
  - "interactive|resources/fn_quadratic/quadratic-derivation.html|Parabola Explorer — Quadratic Formula|Eksplorator paraboli — wzór kwadratowy"
---
`,Wh=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
`,Gh=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Uh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Vh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Kh=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
---
`,Qh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Yh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Zh=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
`,Xh=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,Jh=`---
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
`,e4=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,t4=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,n4=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,r4=`---
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
`,i4=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
`,o4=`---
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
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,s4=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,a4=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,l4=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,u4=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,c4=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,d4=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,m4=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,f4=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,p4=`---
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
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,h4=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,g4=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,v4=`---
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
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,y4=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,x4=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,b4=`---
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
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,w4=`---
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
Rozwiń $(a + b)^3$:`,_4=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,$4=`---
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
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,k4=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,z4=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,S4=`---
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
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,T4=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,j4=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,q4=`---
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
Moduł liczby zespolonej z = 3 + 4i wynosi:`,M4=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,A4=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,C4=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,R4=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,E4=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,D4=`---
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
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,P4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,B4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,N4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,I4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,F4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,L4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,O4=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,H4=`---
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
Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:`,G4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,U4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,V4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,K4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,Q4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,Y4=`---
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
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,Z4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,X4=`---
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
Wykres rozkładu normalnego ma kształt:`,J4=`---
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
Rozkład na czynniki: x² − 5x + 6 =`,e2=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,t2=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,n2=`---
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
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,r2=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,i2=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,o2=`---
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
Która z poniższych relacji NIE jest funkcją?`,s2=`---
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
Funkcja to takie przyporządkowanie, że:`,a2=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,l2=`---
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
Funkcja f(x) = 2ˣ jest:`,u2=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,c2=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,d2=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,m2=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,f2=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,p2=`---
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
Dziedzina funkcji f(x) = log(x − 2) to:`,h2=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,g2=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,v2=`---
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
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,y2=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,x2=`---
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
Funkcja $f(x) = x^3$ jest:`,b2=`---
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
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,w2=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,_2=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,$2=`---
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
Okres funkcji f(x) = sin(2x) wynosi:`,k2=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,z2=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,S2=`---
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
Uproszczona postać ułamka 45/60 to:`,T2=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,j2=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,q2=`---
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
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,M2=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,A2=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,C2=`---
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
Ile wynosi NWD(84, 56)?`,R2=`---
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
Oblicz: $(-3) \\cdot 4 =$`,E2=`---
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
Oblicz: $3 - 8 =$`,D2=`---
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
$\\displaystyle \\int 2x \\, dx =$`,P2=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,B2=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,N2=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,I2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,F2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,L2=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,O2=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,H2=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,W2=`---
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
Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:`,G2=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,U2=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,V2=`---
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
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,K2=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,Q2=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,Y2=`---
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
Rozwiązaniem równania log₂(x) = 3 jest:`,Z2=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,X2=`---
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
Rozwiąż równanie: $2^x = 16$`,J2=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,e3=`---
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
Oblicz: $\\log_2 8 =$`,t3=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,n3=`---
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
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,r3=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,i3=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,o3=`---
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
Prostokąt o obwodzie 20 ma największe pole gdy:`,s3=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,a3=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,l3=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,u3=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,c3=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,d3=`---
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
Liczba permutacji zbioru {A, B, C, D} wynosi:`,m3=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,f3=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,p3=`---
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
Kąt wpisany w okrąg oparty na średnicy mierzy:`,h3=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,g3=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,v3=`---
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
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,y3=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,x3=`---
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
Wielomian stopnia $n$ ma:`,b3=`---
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
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,w3=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,_3=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,$3=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,k3=`---
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
Oblicz: $2^3 =$`,z3=`---
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
Uprość: $a^2 \\cdot a^3 =$`,S3=`---
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
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,T3=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,j3=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,q3=`---
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
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,M3=`---
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
Dowód nie wprost polega na tym, że:`,A3=`---
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
Dowód przez indukcję matematyczną składa się z:`,C3=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,R3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,E3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,D3=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,P3=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,B3=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,N3=`---
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
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,I3=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,F3=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,L3=`---
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
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,O3=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,H3=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,W3=`---
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
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,G3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,U3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,V3=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,K3=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,Q3=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,Y3=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,Z3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,X3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,J3=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,e5=`---
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
Twierdzenie cosinusów brzmi:`,t5=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,n5=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,r5=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,i5=`---
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
Wzór na objętość kuli o promieniu $r$:`,o5=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,s5=`---
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
Dominanta (moda) zbioru danych to:`,a5=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,l5=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,u5=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,c5=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,d5=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,m5=`---
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
Wartość $\\sin 30°$ wynosi:`,f5=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,p5=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,h5=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,g5=`---
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
Rozwiąż równanie: $\\tan x = 1$`,v5=`---
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
sin(2α) jest równe:`,y5=`---
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
Wartość sin(120°) jest równa:`,w5=`---
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
Wartość $\\cos 30°$ wynosi:`,_5=`---
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
Wartość $\\sin 45°$ wynosi:`,$5=`---
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
Długość wektora v = [3, 4] wynosi:`,k5=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,z5=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,T5=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,j5=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`;function Gd(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],s=n[2].trim(),a={},u=r.split(/\r?\n/);let d=0;for(;d<u.length;){const h=u[d];if(h.startsWith("  ")){d++;continue}const g=h.match(/^(\w+):\s*(.*)/);if(!g){d++;continue}const x=g[1];let w=g[2].trim();if(w===""||w===null){const $=u[d+1]??"";if($.startsWith("  - ")){const z=[];for(d++;d<u.length&&u[d].startsWith("  - ");){let k=u[d].replace(/^  - /,"").trim();k=k.replace(/^["']|["']$/g,""),z.push(k),d++}a[x]=z.length>0?z:null}else if($.match(/^  \w+:/)){const z={};for(d++;d<u.length&&u[d].match(/^  \w+:/);){const k=u[d].match(/^  (\w+):\s*(.*)/);if(k){const D=k[1];let q=k[2].trim().replace(/^["']|["']$/g,"");z[D]=!isNaN(q)&&q!==""?Number(q):q}d++}a[x]=z}else a[x]=null,d++}else w=w.replace(/^["']|["']$/g,""),!isNaN(w)&&w!==""?a[x]=Number(w):w==="true"?a[x]=!0:w==="false"?a[x]=!1:a[x]=w,d++}return{meta:a,body:s}}function Ud(o,n){return Object.entries(o).map(([r,s])=>{var d;const a=(d=r.match(n))==null?void 0:d[1],{meta:u}=Gd(s);return{id:a,label:u.label??a,labelPl:u.labelPl??u.label??a,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0,resources:Array.isArray(u.resources)?u.resources.map(h=>{if(typeof h!="string")return null;const[g,x,w,$]=h.split("|").map(k=>k.trim()),z=x&&!x.includes("/")&&!x.startsWith("http")?`resources/${a}/${x}`:x??"";return{type:g??"article",url:z,titleEn:w??"",titlePl:$??w??""}}).filter(Boolean):[]}})}function Vd(o,n){var s;const r={};for(const[a,u]of Object.entries(o)){const d=(s=a.match(n))==null?void 0:s[1];if(!d)continue;const{meta:h,body:g}=Gd(u);r[d]||(r[d]=[]),r[d].push({q:g,options:h.options??[],correct:h.correct??0,hint:h.hint??"",tests:h.tests&&typeof h.tests=="object"&&Object.keys(h.tests).length>0?h.tests:{[d]:1}})}return r}function Kd(o,n,r=[]){const s=o[n];if(!s||s.length===0||r.includes(-1))return null;const a=s.map((d,h)=>({q:d,i:h})).filter(({i:d})=>!r.includes(d));if(a.length===0)return null;const u=a[Math.floor(Math.random()*a.length)];return{...u.q,index:u.i}}const q5=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],M5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},A5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},C5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},R5={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},E5=Object.assign({"./nodes/abs_value/node.md":Zp,"./nodes/analytic_geom/node.md":Xp,"./nodes/area_perimeter/node.md":Jp,"./nodes/arith_geom/node.md":eh,"./nodes/bernoulli/node.md":th,"./nodes/binom_theorem/node.md":nh,"./nodes/circle_eq/node.md":rh,"./nodes/combinations/node.md":ih,"./nodes/complex/node.md":oh,"./nodes/cond_prob/node.md":sh,"./nodes/conic_sections/node.md":ah,"./nodes/counting/node.md":lh,"./nodes/data_basics/node.md":uh,"./nodes/deriv_apps/node.md":ch,"./nodes/derivative/node.md":dh,"./nodes/distributions/node.md":mh,"./nodes/factoring/node.md":fh,"./nodes/fn_compositions/node.md":ph,"./nodes/fn_concept/node.md":hh,"./nodes/fn_exp/node.md":gh,"./nodes/fn_linear/node.md":vh,"./nodes/fn_log/node.md":yh,"./nodes/fn_poly/node.md":xh,"./nodes/fn_quadratic/node.md":bh,"./nodes/fn_trig/node.md":wh,"./nodes/fractions/node.md":_h,"./nodes/geo_series/node.md":$h,"./nodes/integers/node.md":kh,"./nodes/integral/node.md":zh,"./nodes/limits/node.md":Sh,"./nodes/linear_eq/node.md":Th,"./nodes/linear_ineq/node.md":jh,"./nodes/linear_sys/node.md":qh,"./nodes/log_eq/node.md":Mh,"./nodes/log_exp/node.md":Ah,"./nodes/logic_basics/node.md":Ch,"./nodes/optimization_lp/node.md":Rh,"./nodes/param_eq/node.md":Eh,"./nodes/permutations/node.md":Dh,"./nodes/planimetria_lp/node.md":Ph,"./nodes/poly_roots/node.md":Bh,"./nodes/polynomials/node.md":Nh,"./nodes/powers/node.md":Ih,"./nodes/probability/node.md":Fh,"./nodes/proof/node.md":Lh,"./nodes/pythagoras/node.md":Oh,"./nodes/quadratic_eq/node.md":Hh,"./nodes/quadratic_ineq/node.md":Wh,"./nodes/rational_expr/node.md":Gh,"./nodes/seq_limits/node.md":Uh,"./nodes/sequences/node.md":Vh,"./nodes/sets/node.md":Kh,"./nodes/sin_cos_law/node.md":Qh,"./nodes/solid_geom/node.md":Yh,"./nodes/stat_lp/node.md":Zh,"./nodes/thales/node.md":Xh,"./nodes/trig_basic/node.md":Jh,"./nodes/trig_eq/node.md":e4,"./nodes/trig_formulas/node.md":t4,"./nodes/trig_lp/node.md":n4,"./nodes/vectors/node.md":r4,"./nodes/vieta/node.md":i4}),D5=Ud(E5,/\.\/nodes\/([^/]+)\/node\.md$/),P5=Object.assign({"./nodes/abs_value/questions/01.md":o4,"./nodes/abs_value/questions/02.md":s4,"./nodes/abs_value/questions/03.md":a4,"./nodes/analytic_geom/questions/01.md":l4,"./nodes/analytic_geom/questions/02.md":u4,"./nodes/analytic_geom/questions/03.md":c4,"./nodes/area_perimeter/questions/01.md":d4,"./nodes/area_perimeter/questions/02.md":m4,"./nodes/area_perimeter/questions/03.md":f4,"./nodes/arith_geom/questions/01.md":p4,"./nodes/arith_geom/questions/02.md":h4,"./nodes/arith_geom/questions/03.md":g4,"./nodes/bernoulli/questions/01.md":v4,"./nodes/bernoulli/questions/02.md":y4,"./nodes/bernoulli/questions/03.md":x4,"./nodes/binom_theorem/questions/01.md":b4,"./nodes/binom_theorem/questions/02.md":w4,"./nodes/binom_theorem/questions/03.md":_4,"./nodes/circle_eq/questions/01.md":$4,"./nodes/circle_eq/questions/02.md":k4,"./nodes/circle_eq/questions/03.md":z4,"./nodes/combinations/questions/01.md":S4,"./nodes/combinations/questions/02.md":T4,"./nodes/combinations/questions/03.md":j4,"./nodes/complex/questions/01.md":q4,"./nodes/complex/questions/02.md":M4,"./nodes/complex/questions/03.md":A4,"./nodes/cond_prob/questions/01.md":C4,"./nodes/cond_prob/questions/02.md":R4,"./nodes/cond_prob/questions/03.md":E4,"./nodes/conic_sections/questions/01.md":D4,"./nodes/conic_sections/questions/02.md":P4,"./nodes/conic_sections/questions/03.md":B4,"./nodes/counting/questions/01.md":N4,"./nodes/counting/questions/02.md":I4,"./nodes/counting/questions/03.md":F4,"./nodes/data_basics/questions/01.md":L4,"./nodes/data_basics/questions/02.md":O4,"./nodes/data_basics/questions/03.md":H4,"./nodes/deriv_apps/questions/01.md":W4,"./nodes/deriv_apps/questions/02.md":G4,"./nodes/deriv_apps/questions/03.md":U4,"./nodes/derivative/questions/01.md":V4,"./nodes/derivative/questions/02.md":K4,"./nodes/derivative/questions/03.md":Q4,"./nodes/distributions/questions/01.md":Y4,"./nodes/distributions/questions/02.md":Z4,"./nodes/distributions/questions/03.md":X4,"./nodes/factoring/questions/01.md":J4,"./nodes/factoring/questions/02.md":e2,"./nodes/factoring/questions/03.md":t2,"./nodes/fn_compositions/questions/01.md":n2,"./nodes/fn_compositions/questions/02.md":r2,"./nodes/fn_compositions/questions/03.md":i2,"./nodes/fn_concept/questions/01.md":o2,"./nodes/fn_concept/questions/02.md":s2,"./nodes/fn_concept/questions/03.md":a2,"./nodes/fn_exp/questions/01.md":l2,"./nodes/fn_exp/questions/02.md":u2,"./nodes/fn_exp/questions/03.md":c2,"./nodes/fn_linear/questions/01.md":d2,"./nodes/fn_linear/questions/02.md":m2,"./nodes/fn_linear/questions/03.md":f2,"./nodes/fn_log/questions/01.md":p2,"./nodes/fn_log/questions/02.md":h2,"./nodes/fn_log/questions/03.md":g2,"./nodes/fn_poly/questions/01.md":v2,"./nodes/fn_poly/questions/02.md":y2,"./nodes/fn_poly/questions/03.md":x2,"./nodes/fn_quadratic/questions/01.md":b2,"./nodes/fn_quadratic/questions/02.md":w2,"./nodes/fn_quadratic/questions/03.md":_2,"./nodes/fn_trig/questions/01.md":$2,"./nodes/fn_trig/questions/02.md":k2,"./nodes/fn_trig/questions/03.md":z2,"./nodes/fractions/questions/01.md":S2,"./nodes/fractions/questions/02.md":T2,"./nodes/fractions/questions/03.md":j2,"./nodes/geo_series/questions/01.md":q2,"./nodes/geo_series/questions/02.md":M2,"./nodes/geo_series/questions/03.md":A2,"./nodes/integers/questions/01.md":C2,"./nodes/integers/questions/02.md":R2,"./nodes/integers/questions/03.md":E2,"./nodes/integral/questions/01.md":D2,"./nodes/integral/questions/02.md":P2,"./nodes/integral/questions/03.md":B2,"./nodes/limits/questions/01.md":N2,"./nodes/limits/questions/02.md":I2,"./nodes/limits/questions/03.md":F2,"./nodes/linear_eq/questions/01.md":L2,"./nodes/linear_eq/questions/02.md":O2,"./nodes/linear_eq/questions/03.md":H2,"./nodes/linear_ineq/questions/01.md":W2,"./nodes/linear_ineq/questions/02.md":G2,"./nodes/linear_ineq/questions/03.md":U2,"./nodes/linear_sys/questions/01.md":V2,"./nodes/linear_sys/questions/02.md":K2,"./nodes/linear_sys/questions/03.md":Q2,"./nodes/log_eq/questions/01.md":Y2,"./nodes/log_eq/questions/02.md":Z2,"./nodes/log_eq/questions/03.md":X2,"./nodes/log_exp/questions/01.md":J2,"./nodes/log_exp/questions/02.md":e3,"./nodes/log_exp/questions/03.md":t3,"./nodes/logic_basics/questions/01.md":n3,"./nodes/logic_basics/questions/02.md":r3,"./nodes/logic_basics/questions/03.md":i3,"./nodes/optimization_lp/questions/01.md":o3,"./nodes/optimization_lp/questions/02.md":s3,"./nodes/optimization_lp/questions/03.md":a3,"./nodes/param_eq/questions/01.md":l3,"./nodes/param_eq/questions/02.md":u3,"./nodes/param_eq/questions/03.md":c3,"./nodes/permutations/questions/01.md":d3,"./nodes/permutations/questions/02.md":m3,"./nodes/permutations/questions/03.md":f3,"./nodes/planimetria_lp/questions/01.md":p3,"./nodes/planimetria_lp/questions/02.md":h3,"./nodes/planimetria_lp/questions/03.md":g3,"./nodes/poly_roots/questions/01.md":v3,"./nodes/poly_roots/questions/02.md":y3,"./nodes/poly_roots/questions/03.md":x3,"./nodes/polynomials/questions/01.md":b3,"./nodes/polynomials/questions/02.md":w3,"./nodes/polynomials/questions/03.md":_3,"./nodes/powers/questions/01.md":$3,"./nodes/powers/questions/02.md":k3,"./nodes/powers/questions/03.md":z3,"./nodes/probability/questions/01.md":S3,"./nodes/probability/questions/02.md":T3,"./nodes/probability/questions/03.md":j3,"./nodes/proof/questions/01.md":q3,"./nodes/proof/questions/02.md":M3,"./nodes/proof/questions/03.md":A3,"./nodes/pythagoras/questions/01.md":C3,"./nodes/pythagoras/questions/02.md":R3,"./nodes/pythagoras/questions/03.md":E3,"./nodes/quadratic_eq/questions/01.md":D3,"./nodes/quadratic_eq/questions/02.md":P3,"./nodes/quadratic_eq/questions/03.md":B3,"./nodes/quadratic_ineq/questions/01.md":N3,"./nodes/quadratic_ineq/questions/02.md":I3,"./nodes/quadratic_ineq/questions/03.md":F3,"./nodes/rational_expr/questions/01.md":L3,"./nodes/rational_expr/questions/02.md":O3,"./nodes/rational_expr/questions/03.md":H3,"./nodes/seq_limits/questions/01.md":W3,"./nodes/seq_limits/questions/02.md":G3,"./nodes/seq_limits/questions/03.md":U3,"./nodes/sequences/questions/01.md":V3,"./nodes/sequences/questions/02.md":K3,"./nodes/sequences/questions/03.md":Q3,"./nodes/sets/questions/01.md":Y3,"./nodes/sets/questions/02.md":Z3,"./nodes/sets/questions/03.md":X3,"./nodes/sin_cos_law/questions/01.md":J3,"./nodes/sin_cos_law/questions/02.md":e5,"./nodes/sin_cos_law/questions/03.md":t5,"./nodes/solid_geom/questions/01.md":n5,"./nodes/solid_geom/questions/02.md":r5,"./nodes/solid_geom/questions/03.md":i5,"./nodes/stat_lp/questions/01.md":o5,"./nodes/stat_lp/questions/02.md":s5,"./nodes/stat_lp/questions/03.md":a5,"./nodes/thales/questions/01.md":l5,"./nodes/thales/questions/02.md":u5,"./nodes/thales/questions/03.md":c5,"./nodes/trig_basic/questions/01.md":d5,"./nodes/trig_basic/questions/02.md":m5,"./nodes/trig_basic/questions/03.md":f5,"./nodes/trig_eq/questions/01.md":p5,"./nodes/trig_eq/questions/02.md":h5,"./nodes/trig_eq/questions/03.md":g5,"./nodes/trig_formulas/questions/01.md":v5,"./nodes/trig_formulas/questions/02.md":y5,"./nodes/trig_formulas/questions/03.md":x5,"./nodes/trig_lp/questions/01.md":b5,"./nodes/trig_lp/questions/02.md":w5,"./nodes/trig_lp/questions/03.md":_5,"./nodes/vectors/questions/01.md":$5,"./nodes/vectors/questions/02.md":k5,"./nodes/vectors/questions/03.md":z5,"./nodes/vieta/questions/01.md":S5,"./nodes/vieta/questions/02.md":T5,"./nodes/vieta/questions/03.md":j5}),B5=Vd(P5,/\.\/nodes\/([^/]+)\/questions\//),N5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:R5,QUESTION_BANK:B5,RAW_EDGES:q5,RAW_NODES:D5,SCOPE_COLORS:A5,SCOPE_LABELS:C5,SECTIONS:M5},Symbol.toStringTag,{value:"Module"})),I5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,F5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,L5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,O5=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,H5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,W5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,G5=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,U5=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,V5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,K5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,Q5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,Y5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,Z5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,X5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,J5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,e6=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,t6=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,n6=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,r6=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,i6=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,o6=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,s6=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,a6=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,l6=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,u6=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,c6=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,d6=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,m6=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,f6=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,p6=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,h6=`---
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
`,g6=`---
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
`,v6=`---
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
`,y6=`---
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
`,x6=`---
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
`,b6=`---
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
`,w6=`---
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
`,_6=`---
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
`,$6=`---
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
`,k6=`---
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

`,z6=`---
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

`,S6=`---
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

`,T6=`---
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
`,j6=`---
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
`,q6=`---
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
`,M6=`---
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
`,A6=`---
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
`,C6=`---
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
`,R6=`---
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

`,E6=`---
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

`,D6=`---
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

`,P6=`---
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

`,B6=`---
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

`,N6=`---
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

`,I6=`---
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
`,F6=`---
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
`,L6=`---
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
`,O6=`---
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
`,H6=`---
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
`,W6=`---
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
`,G6=`---
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
`,U6=`---
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
`,V6=`---
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
`,K6=`---
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
`,Q6=`---
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
`,Y6=`---
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
`,Z6=`---
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
`,X6=`---
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
`,J6=`---
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
`,eg=`---
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
`,tg=`---
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
`,ng=`---
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
`,rg=`---
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
`,ig=`---
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
`,og=`---
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
`,sg=`---
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

`,ag=`---
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

`,lg=`---
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

`,ug=`---
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

`,cg=`---
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

`,dg=`---
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

`,mg=`---
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

`,fg=`---
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

`,pg=`---
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

`,hg=`---
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
`,gg=`---
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
`,vg=`---
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
`,yg=`---
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
`,xg=`---
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
`,bg=`---
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
`,wg=`---
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

`,_g=`---
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

`,$g=`---
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

`,kg=`---
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

`,zg=`---
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

`,Sg=`---
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

`,Tg=`---
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
`,jg=`---
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
`,qg=`---
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
`,Mg=`---
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
`,Ag=`---
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
`,Cg=`---
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
`,Rg=`---
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
`,Eg=`---
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
`,Dg=`---
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
`,Pg=`---
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
`,Bg=`---
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

`,Ng=`---
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

`,Ig=`---
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
`,Fg=`---
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
`,Lg=`---
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
`,Og=`---
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

`,Hg=`---
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

`,Wg=`---
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

`,Gg=`---
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
`,Ug=`---
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
`,Vg=`---
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
`,Kg=`---
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

`,Qg=`---
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

`,Yg=`---
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

`,Zg=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],Xg={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},Jg={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},e7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},t7={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},n7=Object.assign({"./nodes/binary_ops/node.md":I5,"./nodes/cosets/node.md":F5,"./nodes/cyclic_groups/node.md":L5,"./nodes/direct_sums/node.md":O5,"./nodes/field_extensions/node.md":H5,"./nodes/fields_intro/node.md":W5,"./nodes/finitely_generated/node.md":G5,"./nodes/free_modules/node.md":U5,"./nodes/group_actions/node.md":V5,"./nodes/group_homomorphisms/node.md":K5,"./nodes/groups_intro/node.md":Q5,"./nodes/ideals/node.md":Y5,"./nodes/induction/node.md":Z5,"./nodes/integral_domains/node.md":X5,"./nodes/iso_theorem/node.md":J5,"./nodes/jordan_normal_form/node.md":e6,"./nodes/module_homs/node.md":t6,"./nodes/modules_intro/node.md":n6,"./nodes/normal_subgroups/node.md":r6,"./nodes/poly_rings/node.md":i6,"./nodes/primary_decomp/node.md":o6,"./nodes/rational_canonical/node.md":s6,"./nodes/relations/node.md":a6,"./nodes/ring_homomorphisms/node.md":l6,"./nodes/rings_intro/node.md":u6,"./nodes/sets_functions/node.md":c6,"./nodes/subgroups/node.md":d6,"./nodes/submodules/node.md":m6,"./nodes/sylow/node.md":f6,"./nodes/torsion_modules/node.md":p6}),r7=Ud(n7,/\.\/nodes\/([^/]+)\/node\.md$/),i7=Object.assign({"./nodes/binary_ops/questions/01.md":h6,"./nodes/binary_ops/questions/02.md":g6,"./nodes/binary_ops/questions/03.md":v6,"./nodes/cosets/questions/01.md":y6,"./nodes/cosets/questions/02.md":x6,"./nodes/cosets/questions/03.md":b6,"./nodes/cyclic_groups/questions/01.md":w6,"./nodes/cyclic_groups/questions/02.md":_6,"./nodes/cyclic_groups/questions/03.md":$6,"./nodes/direct_sums/questions/01.md":k6,"./nodes/direct_sums/questions/02.md":z6,"./nodes/direct_sums/questions/03.md":S6,"./nodes/field_extensions/questions/01.md":T6,"./nodes/field_extensions/questions/02.md":j6,"./nodes/field_extensions/questions/03.md":q6,"./nodes/fields_intro/questions/01.md":M6,"./nodes/fields_intro/questions/02.md":A6,"./nodes/fields_intro/questions/03.md":C6,"./nodes/finitely_generated/questions/01.md":R6,"./nodes/finitely_generated/questions/02.md":E6,"./nodes/finitely_generated/questions/03.md":D6,"./nodes/free_modules/questions/01.md":P6,"./nodes/free_modules/questions/02.md":B6,"./nodes/free_modules/questions/03.md":N6,"./nodes/group_actions/questions/01.md":I6,"./nodes/group_actions/questions/02.md":F6,"./nodes/group_actions/questions/03.md":L6,"./nodes/group_homomorphisms/questions/01.md":O6,"./nodes/group_homomorphisms/questions/02.md":H6,"./nodes/group_homomorphisms/questions/03.md":W6,"./nodes/groups_intro/questions/01.md":G6,"./nodes/groups_intro/questions/02.md":U6,"./nodes/groups_intro/questions/03.md":V6,"./nodes/ideals/questions/01.md":K6,"./nodes/ideals/questions/02.md":Q6,"./nodes/ideals/questions/03.md":Y6,"./nodes/induction/questions/01.md":Z6,"./nodes/induction/questions/02.md":X6,"./nodes/induction/questions/03.md":J6,"./nodes/integral_domains/questions/01.md":eg,"./nodes/integral_domains/questions/02.md":tg,"./nodes/integral_domains/questions/03.md":ng,"./nodes/iso_theorem/questions/01.md":rg,"./nodes/iso_theorem/questions/02.md":ig,"./nodes/iso_theorem/questions/03.md":og,"./nodes/jordan_normal_form/questions/01.md":sg,"./nodes/jordan_normal_form/questions/02.md":ag,"./nodes/jordan_normal_form/questions/03.md":lg,"./nodes/module_homs/questions/01.md":ug,"./nodes/module_homs/questions/02.md":cg,"./nodes/module_homs/questions/03.md":dg,"./nodes/modules_intro/questions/01.md":mg,"./nodes/modules_intro/questions/02.md":fg,"./nodes/modules_intro/questions/03.md":pg,"./nodes/normal_subgroups/questions/01.md":hg,"./nodes/normal_subgroups/questions/02.md":gg,"./nodes/normal_subgroups/questions/03.md":vg,"./nodes/poly_rings/questions/01.md":yg,"./nodes/poly_rings/questions/02.md":xg,"./nodes/poly_rings/questions/03.md":bg,"./nodes/primary_decomp/questions/01.md":wg,"./nodes/primary_decomp/questions/02.md":_g,"./nodes/primary_decomp/questions/03.md":$g,"./nodes/rational_canonical/questions/01.md":kg,"./nodes/rational_canonical/questions/02.md":zg,"./nodes/rational_canonical/questions/03.md":Sg,"./nodes/relations/questions/01.md":Tg,"./nodes/relations/questions/02.md":jg,"./nodes/relations/questions/03.md":qg,"./nodes/ring_homomorphisms/questions/01.md":Mg,"./nodes/ring_homomorphisms/questions/02.md":Ag,"./nodes/ring_homomorphisms/questions/03.md":Cg,"./nodes/rings_intro/questions/01.md":Rg,"./nodes/rings_intro/questions/02.md":Eg,"./nodes/rings_intro/questions/03.md":Dg,"./nodes/sets_functions/questions/01.md":Pg,"./nodes/sets_functions/questions/02.md":Bg,"./nodes/sets_functions/questions/03.md":Ng,"./nodes/subgroups/questions/01.md":Ig,"./nodes/subgroups/questions/02.md":Fg,"./nodes/subgroups/questions/03.md":Lg,"./nodes/submodules/questions/01.md":Og,"./nodes/submodules/questions/02.md":Hg,"./nodes/submodules/questions/03.md":Wg,"./nodes/sylow/questions/01.md":Gg,"./nodes/sylow/questions/02.md":Ug,"./nodes/sylow/questions/03.md":Vg,"./nodes/torsion_modules/questions/01.md":Kg,"./nodes/torsion_modules/questions/02.md":Qg,"./nodes/torsion_modules/questions/03.md":Yg}),o7=Vd(i7,/\.\/nodes\/([^/]+)\/questions\//),s7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:t7,QUESTION_BANK:o7,RAW_EDGES:Zg,RAW_NODES:r7,SCOPE_COLORS:Jg,SCOPE_LABELS:e7,SECTIONS:Xg},Symbol.toStringTag,{value:"Module"})),a7={math_pl:N5,abstract_algebra:s7},l7="math_pl",Qd="wizmat_v1_";function u7(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function c7(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function $n(o,n){const r=Qd+o,[s,a]=H.useState(()=>{try{const d=localStorage.getItem(r);return d===null?n:c7(d,n)}catch{return n}});H.useEffect(()=>{try{localStorage.setItem(r,u7(s))}catch{}},[r,s]);const u=H.useCallback(d=>{a(h=>typeof d=="function"?d(h):d)},[]);return[s,u]}function d7(){try{Object.keys(localStorage).filter(o=>o.startsWith(Qd)).forEach(o=>localStorage.removeItem(o))}catch{}}const m7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Znajdź swoje luki w matematyce",en:"Find your gaps in mathematics"},heroSub:{pl:"Odpowiedz na kilkanaście pytań. Pokażemy Ci, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",en:"Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations."},heroStart:{pl:"Sprawdź się",en:"Start assessment"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki ogląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje najniższe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your lowest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicNoResources:{pl:"Brak materiałów do nauki dla tego tematu — wkrótce!",en:"No learning resources for this topic yet — coming soon!"}};function K(o,n="pl"){const r=m7[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function Ql(o,n){const r={},s={};return o.forEach(a=>{r[a.id]=[],s[a.id]=[]}),n.forEach(([a,u])=>{var d,h;(d=r[u])==null||d.push(a),(h=s[a])==null||h.push(u)}),{prereqs:r,dependents:s}}function Yl(o,n){const r=Object.fromEntries(o.map(d=>[d.id,0])),s=Object.fromEntries(o.map(d=>[d.id,[]]));for(const[d,h]of n)r[h]!==void 0&&r[h]++,s[d]!==void 0&&s[d].push(h);const a=Object.fromEntries(o.map(d=>[d.id,0])),u=o.filter(d=>r[d.id]===0).map(d=>d.id);for(;u.length;){const d=u.shift();for(const h of s[d])a[h]=Math.max(a[h],a[d]+1),--r[h]===0&&u.push(h)}return a}const f7={id:"spectral",label:"Spectral"};function p7(o,n,r,s,a=80){const u=o.length,d=Object.fromEntries(o.map((P,V)=>[P.id,V])),h=Array.from({length:u},()=>new Float64Array(u));n.forEach(([P,V])=>{const ne=d[P],me=d[V];ne==null||me==null||(h[ne][me]=1,h[me][ne]=1)});const g=h.map(P=>P.reduce((V,ne)=>V+ne,0)),x=P=>P.map((V,ne)=>{let me=0;for(let se=0;se<u;se++)me+=h[ne][se]*P[se];return g[ne]*P[ne]-me}),w=(P,V)=>P.reduce((ne,me,se)=>ne+me*V[se],0),$=P=>{const V=Math.sqrt(w(P,P))||1;return P.map(ne=>ne/V)},z=(P,V)=>{let ne=[...P];return V.forEach(me=>{const se=w(ne,me);ne=ne.map((ae,ve)=>ae-se*me[ve])}),$(ne)},k=(P,V=400)=>{let ne=$(Array.from({length:u},()=>Math.random()-.5));ne=z(ne,P);for(let me=0;me<V;me++){const se=Math.max(...g)+1;ne=z(ne.map((ae,ve)=>se*ae-x(ne)[ve]),P)}return ne},D=$(new Array(u).fill(1)),q=k([D]),B=k([D,q]),E=Math.min(...q),I=Math.max(...q),W=Math.min(...B),F=Math.max(...B),O=I-E<1e-6?1:(r-2*a)/(I-E),Y=F-W<1e-6?1:(s-2*a)/(F-W);return o.map((P,V)=>({id:P.id,x:a+(q[V]-E)*O,y:a+(B[V]-W)*Y,vx:0,vy:0}))}const h7=Object.freeze(Object.defineProperty({__proto__:null,apply:p7,meta:f7},Symbol.toStringTag,{value:"Module"})),g7={id:"topoRank",label:"Topo Rank"},Z1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function v7(o,n,r,s,a=80){const u=Yl(o,n),d=Math.max(...o.map(w=>u[w.id]??0),0),h={};for(const w of o){const $=u[w.id]??0;(h[$]??(h[$]=[])).push(w)}for(const w of Object.values(h))w.sort(($,z)=>{const k=Z1.indexOf($.scope),D=Z1.indexOf(z.scope);return(k===-1?999:k)-(D===-1?999:D)});const g=r-2*a,x=s-2*a;return o.map(w=>{const $=u[w.id]??0,z=h[$],k=z.indexOf(w);return{id:w.id,x:a+(k+.5)/z.length*g,y:a+$/Math.max(d,1)*x,vx:0,vy:0}})}const y7=Object.freeze(Object.defineProperty({__proto__:null,apply:v7,meta:g7},Symbol.toStringTag,{value:"Module"})),x7={id:"nPartite",label:"N-Partite Grid"};function b7(o,n,r,s,a=80){const u=Yl(o,n),d=Math.max(...o.map(k=>u[k.id]??0),0),h={};for(const k of o){const D=u[k.id]??0;(h[D]??(h[D]=[])).push(k)}const g={};for(const k of o)g[k.id]=[];for(const[k,D]of n)g[D]&&g[D].push(k);const x=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],w={},$=r-2*a,z=s-2*a;for(let k=0;k<=d;k++){const D=h[k]??[];k===0?D.sort((B,E)=>{const I=x.indexOf(B.scope),W=x.indexOf(E.scope);return(I===-1?999:I)-(W===-1?999:W)}):D.sort((B,E)=>{const I=W=>{const F=g[W.id]??[];return F.length===0?r/2:F.reduce((O,Y)=>{var P;return O+(((P=w[Y])==null?void 0:P.x)??r/2)},0)/F.length};return I(B)-I(E)});const q=a+k/Math.max(d,1)*z;D.forEach((B,E)=>{const I=D.length===1?r/2:a+E/(D.length-1)*$;w[B.id]={x:I,y:q}})}return o.map(k=>{var D,q;return{id:k.id,x:((D=w[k.id])==null?void 0:D.x)??r/2,y:((q=w[k.id])==null?void 0:q.y)??s/2,vx:0,vy:0}})}const Yd=Object.freeze(Object.defineProperty({__proto__:null,apply:b7,meta:x7},Symbol.toStringTag,{value:"Module"})),Zd=[Yd,y7,h7],Xd="nPartite";function w7(o){return Zd.find(n=>n.meta.id===o)??Yd}const fs=1400,Zl=1e3,Co=80,_7=.4,X1=6,$7=.35,J1=.012;function k7(o,n){const r=Yl(o,n),s=Math.max(...o.map(u=>r[u.id]??0),0),a=Object.fromEntries(o.map(u=>[u.id,Co+(r[u.id]??0)/Math.max(s,1)*(Zl-2*Co)]));return{ranks:r,rankY:a}}function z7(o,n){const r=Object.fromEntries(o.map((s,a)=>[s.id,a]));return n.map(([s,a])=>[r[s],r[a]]).filter(([s,a])=>s!=null&&a!=null)}function S7(o){return Math.sqrt(fs*Zl/Math.max(o.length,1))*.9}function T7(o,n,r,s){return w7(o).apply(n,r,fs,Zl,Co).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:s[d.id]??d.y,vx:0,vy:0}))}function j7(o,n,r,s,{ranks:a,rankY:u,simEdges:d,idealK:h}){const g=o.length,x=new Float64Array(g);for(let w=0;w<g;w++)for(let $=w+1;$<g;$++){if(a[o[w].id]!==a[o[$].id])continue;const z=o[w].x-o[$].x,k=Math.abs(z)||.1,D=h*h/(k*k),q=z<0?-1:1;x[w]+=q*D,x[$]-=q*D}for(const[w,$]of d){const z=o[$].x-o[w].x;x[w]+=z*J1,x[$]-=z*J1}for(let w=0;w<g;w++)x[w]+=(fs/2-o[w].x)*.003;return o.map((w,$)=>{if(w.id===n)return{...w,x:r,y:s,vx:0,vy:0};let z=(w.vx+x[$])*_7;Math.abs(z)>X1&&(z*=X1/Math.abs(z));const k=u[w.id]??w.y,D=w.y+(k-w.y)*$7;return{...w,vx:z,vy:0,x:Math.max(Co,Math.min(fs-Co,w.x+z)),y:D}})}function yl(o=Xd,n=300,r,s){if(!r||r.length===0)return{};const{ranks:a,rankY:u}=k7(r,s??[]),d=z7(r,s??[]),h=S7(r),g={ranks:a,rankY:u,simEdges:d,idealK:h};let x=T7(o,r,s??[],u);for(let w=0;w<n;w++)x=j7(x,null,0,0,g);return Object.fromEntries(x.map(w=>[w.id,{x:w.x,y:w.y}]))}const G={bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",edgeDefault:"#334766"},pt="'JetBrains Mono','SF Mono','Fira Code',monospace",Ai=(o,n)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${G.border}`,background:o?`${n}22`:"transparent",color:o?n:G.textDim,minHeight:32}),jo=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function q7(o){const n=typeof window<"u"&&window.innerWidth<600,[r,s]=H.useState(n?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[a,u]=H.useState("grab"),d=H.useRef(!1),h=H.useRef({x:0,y:0}),g=H.useRef(null),x=H.useRef(null),w=H.useCallback(F=>{F.preventDefault();const O=F.deltaY>0?.9:1.1;s(Y=>{const P=Math.max(.15,Math.min(5,Y.scale*O)),V=F.clientX,ne=F.clientY,me=V-(V-Y.x)/Y.scale*P,se=ne-(ne-Y.y)/Y.scale*P;return{x:me,y:se,scale:P}})},[]),$=H.useCallback((F,O)=>({x:(F-r.x)/r.scale,y:(O-r.y)/r.scale}),[r]),z=H.useCallback((F,O)=>{d.current=!0,u("grabbing"),h.current={x:F-r.x,y:O-r.y}},[r]),k=H.useCallback(F=>d.current?(s(O=>({...O,x:F.clientX-h.current.x,y:F.clientY-h.current.y})),!0):!1,[]),D=H.useCallback(()=>{d.current=!1,u("grab")},[]),q=(F,O)=>{const Y=F.clientX-O.clientX,P=F.clientY-O.clientY;return Math.sqrt(Y*Y+P*P)},B=(F,O)=>({x:(F.clientX+O.clientX)/2,y:(F.clientY+O.clientY)/2}),E=H.useCallback(F=>{F.touches.length===1?(d.current=!0,s(O=>(h.current={x:F.touches[0].clientX-O.x,y:F.touches[0].clientY-O.y},O)),g.current=null,x.current=null):F.touches.length===2&&(d.current=!1,g.current=q(F.touches[0],F.touches[1]),x.current=B(F.touches[0],F.touches[1]))},[]),I=H.useCallback(F=>{if(F.preventDefault(),F.touches.length===1&&d.current)s(O=>({...O,x:F.touches[0].clientX-h.current.x,y:F.touches[0].clientY-h.current.y}));else if(F.touches.length===2&&g.current!==null){const O=q(F.touches[0],F.touches[1]),Y=B(F.touches[0],F.touches[1]),P=O/g.current;s(V=>{const ne=Math.max(.15,Math.min(5,V.scale*P)),me=x.current.x,se=x.current.y,ae=me-(me-V.x)/V.scale*ne,ve=se-(se-V.y)/V.scale*ne;return{x:ae,y:ve,scale:ne}}),g.current=O,x.current=Y}},[]),W=H.useCallback(()=>{d.current=!1,g.current=null,x.current=null},[]);return H.useEffect(()=>{const F=o.current;if(F)return F.addEventListener("wheel",w,{passive:!1}),F.addEventListener("touchstart",E,{passive:!1}),F.addEventListener("touchmove",I,{passive:!1}),F.addEventListener("touchend",W,{passive:!1}),()=>{F.removeEventListener("wheel",w),F.removeEventListener("touchstart",E),F.removeEventListener("touchmove",I),F.removeEventListener("touchend",W)}},[o,w,E,I,W]),{viewTransform:r,setViewTransform:s,toCanvas:$,isPanning:d,panStart:h,startPan:z,cursorStyle:a,setCursorStyle:u,handleMouseMove:k,handleMouseUp:D,handleWheel:w}}function M7(o,n,r,s){const a=H.useRef(null),u=H.useRef({x:0,y:0}),d=H.useCallback((x,w,$)=>{const z=o(w,$),k=n.find(D=>D.id===x);k&&(a.current=x,u.current={x:z.x-k.x,y:z.y-k.y},s==null||s("grabbing"))},[o,n,s]),h=H.useCallback((x,w)=>{if(!a.current)return!1;const $=o(x,w),z=a.current;return r(k=>({...k,[z]:{x:$.x-u.current.x,y:$.y-u.current.y}})),!0},[o,r]),g=H.useCallback(()=>{a.current=null,s==null||s("grab")},[s]);return{draggingNode:a,startNodeDrag:d,handleDragMove:h,handleDragEnd:g}}const ri={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function A7(o,n,r){var u;const s={...n},a=[o];for(;a.length;){const d=a.shift();s[d]!=="known"&&(s[d]="known",(u=r.prereqs[d])==null||u.forEach(h=>{s[h]!=="known"&&a.push(h)}))}return s}function Jd(o,n,r){var u;const s={...n},a=[o];for(;a.length;){const d=a.shift();s[d]!=="unknown"&&(s[d]="unknown",(u=r.dependents[d])==null||u.forEach(h=>{s[h]!=="unknown"&&a.push(h)}))}return s}function Dl(o,n,r,s,a){let u={...s};if(n){for(const d of Object.keys(r))u[d]="known";for(const d of Object.keys(r))u=A7(d,u,a)}else{for(const d of Object.keys(r))u[d]="unknown";for(const d of Object.keys(r))u=Jd(d,u,a)}return u}function C7(o,n,r){return o.filter(s=>n[s.id]!=="known"&&n[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(a=>n[a]==="known")).map(s=>s.id)}function em(o,n,r,s=.5){var a,u,d;try{const h=1-s,g=o.filter($=>n[$.id]!=="known"&&n[$.id]!=="unknown");if(g.length===0)return null;const x=g.map($=>{const z=tm($.id,n,r),k=nm($.id,n,r),D=s*z+h*k;return{id:$.id,erv:D||0,ancestorsToReveal:z,descendantsToReveal:k}});return x.sort(($,z)=>z.erv-$.erv),((a=x[0])==null?void 0:a.id)||((u=g[0])==null?void 0:u.id)||null}catch(h){return console.error("pickNextQuestion error:",h),((d=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown")[0])==null?void 0:d.id)||null}}function tm(o,n,r){const s=new Set,a=[...r.prereqs[o]??[]];let u=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),n[d]!=="known"&&n[d]!=="unknown"&&u++;const h=r.prereqs[d]??[];for(const g of h)s.has(g)||a.push(g)}return u}function nm(o,n,r){const s=new Set,a=[...r.dependents[o]??[]];let u=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),n[d]!=="known"&&n[d]!=="unknown"&&u++;const h=r.dependents[d]??[];for(const g of h)s.has(g)||a.push(g)}return u}function R7(o,n,r,s=.5){try{const a=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown");if(a.length===0)return 0;const u=1-s;let d=0;for(const x of a){const w=tm(x.id,n,r),$=nm(x.id,n,r),z=s*w+u*$;d+=z||0}if(!d||d===0)return a.length;const h=a.length,g=h*h/d;return isNaN(g)?a.length:Math.ceil(g)}catch(a){return console.error("estimateRemainingQuestions error:",a),null}}function E7(o,n,r){const s={...o};for(const[a,u]of Object.entries(n)){const d=s[a]??{alpha:1,beta:1};s[a]={alpha:d.alpha+(r?u:0),beta:d.beta+(r?0:u)}}return s}function D7(o,n){const r={};for(const s of o){const a=n[s]??{alpha:1,beta:1},u=a.alpha+a.beta,d=a.alpha/u;d>ri.deepKnownThreshold&&u>ri.deepMinStrength?r[s]="known":d<ri.deepUnknownThreshold&&u>ri.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function P7(o,n,r){const s=new Set,a=new Set(r.map(d=>d.id)),u=[o];for(;u.length;){const d=u.shift();if(!s.has(d)&&a.has(d)){s.add(d);for(const h of n.prereqs[d]??[])s.has(h)||u.push(h)}}return s}function B7(o,n,r,s,a){var h;const u=o.filter(g=>r[g]==="uncertain");if(u.length===0)return null;const d=u.map(g=>{const x=n[g]??{alpha:1,beta:1},w=x.alpha+x.beta,$=x.alpha/w,z=1-$,k=new Set(o);let D=0;const q=[...s.prereqs[g]??[]],B=new Set;for(;q.length;){const O=q.shift();if(!B.has(O)){B.add(O),k.has(O)&&r[O]==="uncertain"&&D++;for(const Y of s.prereqs[O]??[])B.has(Y)||q.push(Y)}}let E=0;const I=[...s.dependents[g]??[]],W=new Set;for(;I.length;){const O=I.shift();if(!W.has(O)){W.add(O),k.has(O)&&r[O]==="uncertain"&&E++;for(const Y of s.dependents[O]??[])W.has(Y)||I.push(Y)}}const F=$*D+z*E;return{id:g,erv:F,strength:w}});return d.sort((g,x)=>Math.abs(g.erv-x.erv)>.01?x.erv-g.erv:g.strength-x.strength),((h=d[0])==null?void 0:h.id)??u[0]}function N7(o,n,r=0){return!!(o.every(s=>n[s]!=="uncertain")||r>=ri.deepMaxQuestions)}function rm(o,n,r=0,s){const a=(s==null?void 0:s.maxQuestions)??ri.quickMaxQuestions,u=(s==null?void 0:s.completionRatio)??ri.quickCompletionRatio,d=o.length;if(d===0)return!0;const h=o.filter(g=>n[g.id]!=="known"&&n[g.id]!=="unknown").length;return h===0||r>=a||h/d<=u}const Pl={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function I7(o,n,r){const s=r?`${r}_`:"",[a,u]=$n(`${s}diagMode`,!1),[d,h]=$n(`${s}diagSubMode`,"quick"),[g,x]=$n(`${s}belief`,{}),[w,$]=$n(`${s}targetNode`,null),[z,k]=$n(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[D,q]=$n(`${s}answeredQuestions`,new Set),[B,E]=$n(`${s}betaBeliefs`,{}),[I,W]=$n(`${s}quizNode`,null),F=H.useMemo(()=>{const A=z.correct+z.incorrect;return A===0?.5:(z.correct+.5)/(A+1)},[z]),O=z.questionsAnswered,Y=H.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(n)])].map(Q=>({id:Q})),[o,n]),P=H.useMemo(()=>Object.keys(g).length>0||z.questionsAnswered>0,[g,z]),V=H.useMemo(()=>P?C7(Y,g,o):[],[P,g,o,Y]),ne=P?V:[],me=H.useMemo(()=>a&&d==="quick"?em(Y,g,o,F):null,[a,d,g,o,F,Y]),se=H.useMemo(()=>a&&d==="quick"?R7(Y,g,o,F):null,[a,d,g,o,F,Y]),ae=H.useMemo(()=>a&&d==="quick"&&P&&rm(Y,g,O),[a,d,P,g,Y,O]),ve=H.useMemo(()=>!a||d!=="deepdive"||!w?[]:[...P7(w,o,Y)],[a,d,w,o,Y]),xe=H.useMemo(()=>d!=="deepdive"?{}:D7(ve,B),[d,ve,B]),Fe=H.useMemo(()=>!a||d!=="deepdive"||ve.length===0?null:B7(ve,B,xe,o),[a,d,ve,B,xe,o,Y]),Be=H.useMemo(()=>!a||d!=="deepdive"||ve.length===0?!1:N7(ve,xe,O),[a,d,ve,xe,O]),Le=H.useCallback((A,Q)=>a?d==="deepdive"?ve.includes(A)?(xe[A]!=="uncertain"||W(A),!0):!1:g[A]==="unknown"?!0:Q?(x($e=>Jd(A,$e,o)),W(null),!0):g[A]==="known"?(x($e=>{const je={...$e};return delete je[A],je}),W(null),!0):(W(A),!0):!1,[a,d,g,o,ve,xe]),ue=H.useCallback((A,Q,$e,je)=>{if(d==="deepdive"){const Se=($e==null?void 0:$e.tests)??{[A]:1};E(De=>E7(De,Se,Q))}else{const Se=($e==null?void 0:$e.tests)??{[A]:1};x(De=>Dl(A,Q,Se,De,o))}typeof je=="number"&&q(Se=>new Set([...Se,`${A}:${je}`])),k(Se=>({correct:Se.correct+(Q?1:0),incorrect:Se.incorrect+(Q?0:1),questionsAnswered:Se.questionsAnswered+1})),W(null)},[d,o]),we=H.useCallback(()=>{d7(),u(!1),h("quick"),x({}),E({}),W(null),$(null),k({correct:0,incorrect:0,questionsAnswered:0}),q(new Set)},[]),de=H.useCallback(A=>{h("deepdive"),$(A),E({}),x({}),W(null),k({correct:0,incorrect:0,questionsAnswered:0}),q(new Set),u(!0)},[]);return{diagMode:a,setDiagMode:u,mode:d,setMode:h,quizNode:I,setQuizNode:W,questionsAnswered:O,answeredQuestions:D,setAnsweredQuestions:q,getAnsweredIndices:A=>{const Q=[];return D.forEach($e=>{const[je,Se]=$e.split(":");je===A&&Q.push(parseInt(Se,10))}),Q},handleDiagClick:Le,handleQuizAnswer:ue,resetDiagnostic:we,startDeepDive:de,targetNode:w,belief:g,setBelief:x,frontier:V,visibleFrontier:ne,hasStarted:P,nextSuggestedId:me,expectedRemaining:se,pCorrect:F,sessionComplete:ae,betaBeliefs:B,subgraphIds:ve,ddClassification:xe,ddNextNodeId:Fe,ddComplete:Be}}const ed=640;function F7(){const[o,n]=H.useState(()=>typeof window<"u"&&window.innerWidth<ed);return H.useEffect(()=>{const r=window.matchMedia(`(max-width: ${ed-1}px)`),s=a=>n(a.matches);return r.addEventListener("change",s),n(r.matches),()=>r.removeEventListener("change",s)},[]),o}const L7=new Set(["pl","en"]);function td(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let s="pl",a=r;if(r.length>0&&L7.has(r[0])&&(s=r[0],a=r.slice(1)),a[0]==="node"&&a[1]){const u=decodeURIComponent(a[1]);return a[2]==="resource"&&a[3]!=null?{view:"resource",nodeId:u,resourceIndex:parseInt(a[3],10),lang:s}:{view:"node",nodeId:u,lang:s}}if(a[0]==="diagnostic"){if(a[1]==="deepdive"&&a[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(a[2]),lang:s};if(a[1]==="quick")return{view:"diagnostic",mode:"quick",lang:s}}return{view:"graph",lang:s}}function O7(o){const n=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${n}`;switch(o.view){case"node":return`#/${n}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${n}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${n}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${n}/diagnostic/quick`;default:return`#/${n}`}}function H7(o){const n=H.useRef(o);n.current=o;const r=H.useRef(!1),s=H.useCallback(a=>{const u=O7(a);window.location.hash!==u&&(r.current=!0,window.location.hash=u)},[]);return H.useEffect(()=>{const a=()=>{if(r.current){r.current=!1;return}n.current(td(window.location.hash))};window.addEventListener("hashchange",a);const u=td(window.location.hash);return Promise.resolve().then(()=>n.current(u)),()=>window.removeEventListener("hashchange",a)},[]),{setRoute:s}}function nd(o){return 6+o.level*2}function W7({edges:o,nodes:n,highlightedIds:r}){const s=H.useMemo(()=>Object.fromEntries(n.map(a=>[a.id,a])),[n]);return v.jsx("g",{children:o.map(([a,u])=>{const d=s[a],h=s[u];if(!d||!h)return null;const g=(r==null?void 0:r.has(a))&&(r==null?void 0:r.has(u)),x=r&&!g,w=h.x-d.x,$=h.y-d.y,z=Math.sqrt(w*w+$*$)||1,k=nd(h)+3,D=h.x-w/z*k,q=h.y-$/z*k,B=nd(d)+2,E=d.x+w/z*B,I=d.y+$/z*B,W=x?"#151b26":g?"#4a9eff":"#334766",F=g?1.8:1,O=x?.15:g?1:.55,Y=x?"url(#arrow-dim)":g?"url(#arrow-hi)":"url(#arrow-default)";return v.jsx("line",{x1:E,y1:I,x2:D,y2:q,stroke:W,strokeWidth:F,opacity:O,markerEnd:Y},`${a}-${u}`)})})}function G7(o){return 6+o.level*2}function U7(o){return o<.4?8:o<.65?13:o<1?18:28}function V7({nodes:o,filteredIds:n,highlightedIds:r,selected:s,onSelect:a,onHover:u,lang:d,diagMode:h,belief:g,frontier:x,scale:w,scopeColors:$}){const z=g&&Object.keys(g).length>0;return v.jsx("g",{children:o.map(k=>{const D=G7(k),q=($==null?void 0:$[k.scope])||"#4a9eff",B=n&&!n.has(k.id),E=r==null?void 0:r.has(k.id),I=s===k.id,W=r&&!E||B,F=d==="pl"?k.labelPl:k.label,O=U7(w??1);let Y=q,P=W?.15:.9,V=W?.2:.85,ne=null,me=2;if(z){const se=g[k.id],ae=x==null?void 0:x.includes(k.id);se==="known"?(Y="#27ae60",ne="#2ecc71",P=B?.1:.85,V=B?.15:.9):se==="unknown"?(Y="#c0392b",P=B?.1:.45,ne="#e74c3c",V=B?.15:.7):ae?(Y="#f39c12",ne="#f1c40f",me=3,P=B?.1:.9,V=B?.15:.9):(P=B?.1:h?.35:.5,V=B?.15:.7)}return v.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>a(k.id===s?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(I||ne)&&v.jsx("circle",{cx:k.x,cy:k.y,r:D+(I?5:4),fill:"none",stroke:I?q:ne,strokeWidth:I?2:me,opacity:I?.5:.9}),v.jsx("circle",{cx:k.x,cy:k.y,r:D,fill:Y,fillOpacity:P,stroke:(E||I)&&!z?q:"none",strokeWidth:1.5}),v.jsx("text",{x:k.x,y:k.y+D+10,textAnchor:"middle",fontSize:8,fill:"#cdd8e4",opacity:V,style:{pointerEvents:"none",userSelect:"none"},children:F.length>O?F.slice(0,O-1)+"…":F})]},k.id)})})}function K7({resource:o,lang:n,onClose:r}){const s=H.useRef(null);if(H.useEffect(()=>{const $=z=>{z.key==="Escape"&&r()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[r]),H.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const a=n==="pl"?o.titlePl:o.titleEn,u=o.type==="interactive",d={interactive:K("resourceInteractive",n),video:K("resourceVideo",n),article:K("resourceArticle",n)}[o.type]??o.type,h={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!u)return window.open(o.url,"_blank","noopener"),r(),null;const x=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,w=x+(x.includes("?")?"&":"?")+"lang="+n;return v.jsxs("div",{ref:s,onClick:$=>{$.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[v.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),v.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${h}33`,boxShadow:`0 0 48px ${h}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#161c28f8",borderBottom:`1px solid ${h}22`,flexShrink:0,fontFamily:pt},children:[v.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:h,background:`${h}18`,border:`1px solid ${h}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),v.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:G.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),v.jsx("button",{onClick:()=>window.open(w,"_blank","noopener"),title:K("openInTab",n),style:rd,children:"↗"}),v.jsx("button",{onClick:r,title:K("closeResource",n),style:{...rd,fontSize:18,lineHeight:1},children:"×"})]}),v.jsx("iframe",{src:w,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:a,loading:"eager"})]})]})}const rd={background:"none",border:`1px solid ${G.border}`,borderRadius:5,color:G.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:pt,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};function Q7({nodeId:o,nodes:n,adjacency:r,lang:s,SCOPE_COLORS:a,SCOPE_LABELS:u,SECTIONS:d,belief:h,onClose:g,onNavigate:x}){var ne,me;const[w,$]=H.useState(null),z=n.find(se=>se.id===o);if(!z)return null;const k=Object.fromEntries(n.map(se=>[se.id,se])),D=se=>{var ae,ve;return s==="pl"?(ae=k[se])==null?void 0:ae.labelPl:(ve=k[se])==null?void 0:ve.label},q=s==="pl"?z.labelPl:z.label,B=(a==null?void 0:a[z.scope])??"#4a9eff",E=((ne=u==null?void 0:u[z.scope])==null?void 0:ne[s==="pl"?"pl":"en"])??"",I=((me=d==null?void 0:d[z.section])==null?void 0:me.label)??"",W=r.prereqs[o]??[],F=r.dependents[o]??[],O=z.resources??[],Y=h==null?void 0:h[o],P=w!=null?O[w]??null:null,V={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return v.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:G.bg,fontFamily:pt,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[v.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),v.jsxs("div",{style:{maxWidth:580,width:"100%",margin:"0 auto",padding:"32px 24px 64px"},children:[v.jsxs("button",{onClick:g,style:{padding:"6px 14px",fontSize:12,fontFamily:pt,borderRadius:6,border:`1px solid ${G.border}`,background:"transparent",color:G.textDim,cursor:"pointer",marginBottom:28},children:["← ",K("topicBack",s)]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[v.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:B,opacity:.8,flexShrink:0}}),v.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:G.textPrimary,lineHeight:1.3},children:q})]}),v.jsxs("div",{style:{fontSize:12,color:G.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[I," · ",E," · ",K("level",s)," ",z.level]}),Y&&v.jsx("div",{style:{display:"inline-block",fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:6,marginBottom:20,background:Y==="known"?"#27ae6012":"#e74c3c12",border:`1px solid ${Y==="known"?"#27ae6040":"#e74c3c40"}`,color:Y==="known"?"#2ecc71":"#ff6b6b"},children:K(Y==="known"?"beliefKnown":"beliefUnknown",s)}),v.jsx(id,{title:K("prerequisites",s),color:"#4a9eff",empty:W.length===0,emptyText:K("noPrereqs",s),children:W.map(se=>{var ae;return v.jsx(od,{label:D(se),color:(a==null?void 0:a[(ae=k[se])==null?void 0:ae.scope])??"#4a9eff",status:h==null?void 0:h[se],onClick:()=>x(se)},se)})}),v.jsx(id,{title:K("enables",s),color:"#3dc9b0",empty:F.length===0,emptyText:K("noDependents",s),children:F.map(se=>{var ae;return v.jsx(od,{label:D(se),color:(a==null?void 0:a[(ae=k[se])==null?void 0:ae.scope])??"#4a9eff",status:h==null?void 0:h[se],onClick:()=>x(se)},se)})}),O.length>0&&v.jsxs("div",{style:{marginTop:28},children:[v.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:K("learningResources",s)}),v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:O.map((se,ae)=>{const ve=s==="pl"?se.titlePl:se.titleEn,xe=V[se.type]??"#8a9dbe",Fe=se.type==="interactive"?"resourceInteractive":se.type==="video"?"resourceVideo":"resourceArticle";return v.jsxs("button",{onClick:()=>$(ae),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${xe}0a`,border:`1px solid ${xe}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:pt,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Be=>{Be.currentTarget.style.background=`${xe}18`,Be.currentTarget.style.borderColor=`${xe}50`},onMouseLeave:Be=>{Be.currentTarget.style.background=`${xe}0a`,Be.currentTarget.style.borderColor=`${xe}25`},children:[v.jsx("span",{style:{fontSize:18,flexShrink:0},children:se.type==="interactive"?"⬡":se.type==="video"?"▶":"📄"}),v.jsxs("div",{style:{flex:1},children:[v.jsx("div",{style:{fontSize:13,color:G.textBody,fontWeight:500,lineHeight:1.4},children:ve}),v.jsx("div",{style:{fontSize:10,color:xe,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:K(Fe,s)})]}),v.jsx("span",{style:{fontSize:14,color:G.textFaint},children:"→"})]},ae)})})]}),O.length===0&&v.jsx("div",{style:{marginTop:28,padding:"16px 18px",borderRadius:8,background:"#ffffff04",border:`1px solid ${G.border}`,fontSize:12,color:G.textFaint,lineHeight:1.6},children:K("topicNoResources",s)})]}),P&&v.jsx(K7,{resource:P,lang:s,onClose:()=>$(null)})]})}function id({title:o,color:n,empty:r,emptyText:s,children:a}){return v.jsxs("div",{style:{marginTop:24},children:[v.jsx("div",{style:{fontSize:13,fontWeight:600,color:n,marginBottom:10},children:o}),r?v.jsx("div",{style:{fontSize:12,color:G.textFaint,fontStyle:"italic"},children:s}):v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:a})]})}function od({label:o,color:n,status:r,onClick:s}){const a=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return v.jsxs("button",{onClick:s,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${n}0c`,border:`1px solid ${n}25`,cursor:"pointer",fontFamily:pt,fontSize:12,color:G.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:u=>{u.currentTarget.style.background=`${n}1c`,u.currentTarget.style.borderColor=`${n}50`},onMouseLeave:u=>{u.currentTarget.style.background=`${n}0c`,u.currentTarget.style.borderColor=`${n}25`},children:[a&&v.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:a,flexShrink:0}}),o]})}class Gt{constructor(n,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=s}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Gt(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Jt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Jt(r,Gt.range(this,n))}}class ie{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+n,a,u,d=r&&r.loc;if(d&&d.start<=d.end){var h=d.lexer.input;a=d.start,u=d.end,a===h.length?s+=" at end of input: ":s+=" at position "+(a+1)+": ";var g=h.slice(a,u).replace(/[^]/g,"$&̲"),x;a>15?x="…"+h.slice(a-15,a):x=h.slice(0,a);var w;u+15<h.length?w=h.slice(u,u+15)+"…":w=h.slice(u),s+=x+g+w}var $=new Error(s);return $.name="ParseError",$.__proto__=ie.prototype,$.position=a,a!=null&&u!=null&&($.length=u-a),$.rawMessage=n,$}}ie.prototype.__proto__=Error.prototype;var Y7=/([A-Z])/g,Xl=o=>o.replace(Y7,"-$1").toLowerCase(),Z7={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},X7=/[&><"']/g,Mt=o=>String(o).replace(X7,n=>Z7[n]),Mo=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Mo(o.body[0]):o:o.type==="font"?Mo(o.body):o,J7=new Set(["mathord","textord","atom"]),Jn=o=>J7.has(Mo(o).type),ev=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},ds={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function tv(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Jl{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in ds)if(ds.hasOwnProperty(r)){var s=ds[r];this[r]=n[r]!==void 0?s.processor?s.processor(n[r]):n[r]:tv(s)}}reportNonstrict(n,r,s){var a=this.strict;if(typeof a=="function"&&(a=a(n,r,s)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new ie("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),s);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,s){var a=this.strict;if(typeof a=="function")try{a=a(n,r,s)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=ev(n.url);if(r==null)return!1;n.protocol=r}var s=typeof this.trust=="function"?this.trust(n):this.trust;return!!s}}class Tr{constructor(n,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=s}sup(){return Rn[nv[this.id]]}sub(){return Rn[rv[this.id]]}fracNum(){return Rn[iv[this.id]]}fracDen(){return Rn[ov[this.id]]}cramp(){return Rn[sv[this.id]]}text(){return Rn[av[this.id]]}isTight(){return this.size>=2}}var eu=0,ps=1,Ri=2,Zn=3,Ro=4,dn=5,Ei=6,Dt=7,Rn=[new Tr(eu,0,!1),new Tr(ps,0,!0),new Tr(Ri,1,!1),new Tr(Zn,1,!0),new Tr(Ro,2,!1),new Tr(dn,2,!0),new Tr(Ei,3,!1),new Tr(Dt,3,!0)],nv=[Ro,dn,Ro,dn,Ei,Dt,Ei,Dt],rv=[dn,dn,dn,dn,Dt,Dt,Dt,Dt],iv=[Ri,Zn,Ro,dn,Ei,Dt,Ei,Dt],ov=[Zn,Zn,dn,dn,Dt,Dt,Dt,Dt],sv=[ps,ps,Zn,Zn,dn,dn,Dt,Dt],av=[eu,ps,Ri,Zn,Ri,Zn,Ri,Zn],Ee={DISPLAY:Rn[eu],TEXT:Rn[Ri],SCRIPT:Rn[Ro],SCRIPTSCRIPT:Rn[Ei]},Bl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function lv(o){for(var n=0;n<Bl.length;n++)for(var r=Bl[n],s=0;s<r.blocks.length;s++){var a=r.blocks[s];if(o>=a[0]&&o<=a[1])return r.name}return null}var ms=[];Bl.forEach(o=>o.blocks.forEach(n=>ms.push(...n)));function im(o){for(var n=0;n<ms.length;n+=2)if(o>=ms[n]&&o<=ms[n+1])return!0;return!1}var Ci=80,uv=function(n,r){return"M95,"+(622+n+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+n/2.075+" -"+n+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+n)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},cv=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},dv=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},mv=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},fv=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},pv=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},hv=function(n,r,s){var a=s-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},gv=function(n,r,s){r=1e3*r;var a="";switch(n){case"sqrtMain":a=uv(r,Ci);break;case"sqrtSize1":a=cv(r,Ci);break;case"sqrtSize2":a=dv(r,Ci);break;case"sqrtSize3":a=mv(r,Ci);break;case"sqrtSize4":a=fv(r,Ci);break;case"sqrtTall":a=hv(r,Ci,s)}return a},vv=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},sd={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},yv=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Po{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var En={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},ts={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},ad={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function xv(o,n){En[o]=n}function tu(o,n,r){if(!En[n])throw new Error("Font metrics not found for font: "+n+".");var s=o.charCodeAt(0),a=En[n][s];if(!a&&o[0]in ad&&(s=ad[o[0]].charCodeAt(0),a=En[n][s]),!a&&r==="text"&&im(s)&&(a=En[n][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var xl={};function bv(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!xl[n]){var r=xl[n]={cssEmPerMu:ts.quad[n]/18};for(var s in ts)ts.hasOwnProperty(s)&&(r[s]=ts[s][n])}return xl[n]}var wv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],ld=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],ud=function(n,r){return r.size<2?n:wv[n-1][r.size-1]};class Yn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Yn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=ld[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return new Yn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:ud(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:ld[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=ud(Yn.BASESIZE,n);return this.size===r&&this.textSize===Yn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Yn.BASESIZE?["sizing","reset-size"+this.size,"size"+Yn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=bv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Yn.BASESIZE=6;var Nl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},_v={ex:!0,em:!0,mu:!0},om=function(n){return typeof n!="string"&&(n=n.unit),n in Nl||n in _v||n==="ex"},at=function(n,r){var s;if(n.unit in Nl)s=Nl[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,n.unit==="ex")s=a.fontMetrics().xHeight;else if(n.unit==="em")s=a.fontMetrics().quad;else throw new ie("Invalid unit: '"+n.unit+"'");a!==r&&(s*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*s,r.maxSize)},ce=function(n){return+n.toFixed(4)+"em"},Mr=function(n){return n.filter(r=>r).join(" ")},sm=function(n,r,s){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},am=function(n){var r=document.createElement(n);r.className=Mr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},$v=/[\s"'>/=\x00-\x1f]/,lm=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+Mt(Mr(this.classes))+'"');var s="";for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=Xl(a)+":"+this.style[a]+";");s&&(r+=' style="'+Mt(s)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if($v.test(u))throw new ie("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Mt(this.attributes[u])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+n+">",r};class Bo{constructor(n,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,sm.call(this,n,s,a),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return am.call(this,"span")}toMarkup(){return lm.call(this,"span")}}class nu{constructor(n,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,sm.call(this,r,a),this.children=s||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return am.call(this,"a")}toMarkup(){return lm.call(this,"a")}}class kv{constructor(n,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=s}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+Mt(this.src)+'"'+(' alt="'+Mt(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=Xl(s)+":"+this.style[s]+";");return r&&(n+=' style="'+Mt(r)+'"'),n+="'/>",n}}var zv={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class mn{constructor(n,r,s,a,u,d,h,g){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=s||0,this.italic=a||0,this.skew=u||0,this.width=d||0,this.classes=h||[],this.style=g||{},this.maxFontSize=0;var x=lv(this.text.charCodeAt(0));x&&this.classes.push(x+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=zv[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=ce(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Mr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=Mt(Mr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=Xl(a)+":"+this.style[a]+";");s&&(n=!0,r+=' style="'+Mt(s)+'"');var u=Mt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Xn{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</svg>",n}}class Ar{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",sd[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Mt(this.alternate)+'"/>':'<path d="'+Mt(sd[this.pathName])+'"/>'}}class Il{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');return n+="/>",n}}function cd(o){if(o instanceof mn)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function Sv(o){if(o instanceof Bo)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var Tv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},jv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Xe={math:{},text:{}};function m(o,n,r,s,a,u){Xe[o][a]={font:n,group:r,replace:s},u&&s&&(Xe[o][s]=Xe[o][a])}var p="math",J="text",y="main",T="ams",rt="accent-token",ge="bin",Pt="close",Bi="inner",Ae="mathord",gt="op-token",en="open",xs="punct",j="rel",er="spacing",C="textord";m(p,y,j,"≡","\\equiv",!0);m(p,y,j,"≺","\\prec",!0);m(p,y,j,"≻","\\succ",!0);m(p,y,j,"∼","\\sim",!0);m(p,y,j,"⊥","\\perp");m(p,y,j,"⪯","\\preceq",!0);m(p,y,j,"⪰","\\succeq",!0);m(p,y,j,"≃","\\simeq",!0);m(p,y,j,"∣","\\mid",!0);m(p,y,j,"≪","\\ll",!0);m(p,y,j,"≫","\\gg",!0);m(p,y,j,"≍","\\asymp",!0);m(p,y,j,"∥","\\parallel");m(p,y,j,"⋈","\\bowtie",!0);m(p,y,j,"⌣","\\smile",!0);m(p,y,j,"⊑","\\sqsubseteq",!0);m(p,y,j,"⊒","\\sqsupseteq",!0);m(p,y,j,"≐","\\doteq",!0);m(p,y,j,"⌢","\\frown",!0);m(p,y,j,"∋","\\ni",!0);m(p,y,j,"∝","\\propto",!0);m(p,y,j,"⊢","\\vdash",!0);m(p,y,j,"⊣","\\dashv",!0);m(p,y,j,"∋","\\owns");m(p,y,xs,".","\\ldotp");m(p,y,xs,"⋅","\\cdotp");m(p,y,C,"#","\\#");m(J,y,C,"#","\\#");m(p,y,C,"&","\\&");m(J,y,C,"&","\\&");m(p,y,C,"ℵ","\\aleph",!0);m(p,y,C,"∀","\\forall",!0);m(p,y,C,"ℏ","\\hbar",!0);m(p,y,C,"∃","\\exists",!0);m(p,y,C,"∇","\\nabla",!0);m(p,y,C,"♭","\\flat",!0);m(p,y,C,"ℓ","\\ell",!0);m(p,y,C,"♮","\\natural",!0);m(p,y,C,"♣","\\clubsuit",!0);m(p,y,C,"℘","\\wp",!0);m(p,y,C,"♯","\\sharp",!0);m(p,y,C,"♢","\\diamondsuit",!0);m(p,y,C,"ℜ","\\Re",!0);m(p,y,C,"♡","\\heartsuit",!0);m(p,y,C,"ℑ","\\Im",!0);m(p,y,C,"♠","\\spadesuit",!0);m(p,y,C,"§","\\S",!0);m(J,y,C,"§","\\S");m(p,y,C,"¶","\\P",!0);m(J,y,C,"¶","\\P");m(p,y,C,"†","\\dag");m(J,y,C,"†","\\dag");m(J,y,C,"†","\\textdagger");m(p,y,C,"‡","\\ddag");m(J,y,C,"‡","\\ddag");m(J,y,C,"‡","\\textdaggerdbl");m(p,y,Pt,"⎱","\\rmoustache",!0);m(p,y,en,"⎰","\\lmoustache",!0);m(p,y,Pt,"⟯","\\rgroup",!0);m(p,y,en,"⟮","\\lgroup",!0);m(p,y,ge,"∓","\\mp",!0);m(p,y,ge,"⊖","\\ominus",!0);m(p,y,ge,"⊎","\\uplus",!0);m(p,y,ge,"⊓","\\sqcap",!0);m(p,y,ge,"∗","\\ast");m(p,y,ge,"⊔","\\sqcup",!0);m(p,y,ge,"◯","\\bigcirc",!0);m(p,y,ge,"∙","\\bullet",!0);m(p,y,ge,"‡","\\ddagger");m(p,y,ge,"≀","\\wr",!0);m(p,y,ge,"⨿","\\amalg");m(p,y,ge,"&","\\And");m(p,y,j,"⟵","\\longleftarrow",!0);m(p,y,j,"⇐","\\Leftarrow",!0);m(p,y,j,"⟸","\\Longleftarrow",!0);m(p,y,j,"⟶","\\longrightarrow",!0);m(p,y,j,"⇒","\\Rightarrow",!0);m(p,y,j,"⟹","\\Longrightarrow",!0);m(p,y,j,"↔","\\leftrightarrow",!0);m(p,y,j,"⟷","\\longleftrightarrow",!0);m(p,y,j,"⇔","\\Leftrightarrow",!0);m(p,y,j,"⟺","\\Longleftrightarrow",!0);m(p,y,j,"↦","\\mapsto",!0);m(p,y,j,"⟼","\\longmapsto",!0);m(p,y,j,"↗","\\nearrow",!0);m(p,y,j,"↩","\\hookleftarrow",!0);m(p,y,j,"↪","\\hookrightarrow",!0);m(p,y,j,"↘","\\searrow",!0);m(p,y,j,"↼","\\leftharpoonup",!0);m(p,y,j,"⇀","\\rightharpoonup",!0);m(p,y,j,"↙","\\swarrow",!0);m(p,y,j,"↽","\\leftharpoondown",!0);m(p,y,j,"⇁","\\rightharpoondown",!0);m(p,y,j,"↖","\\nwarrow",!0);m(p,y,j,"⇌","\\rightleftharpoons",!0);m(p,T,j,"≮","\\nless",!0);m(p,T,j,"","\\@nleqslant");m(p,T,j,"","\\@nleqq");m(p,T,j,"⪇","\\lneq",!0);m(p,T,j,"≨","\\lneqq",!0);m(p,T,j,"","\\@lvertneqq");m(p,T,j,"⋦","\\lnsim",!0);m(p,T,j,"⪉","\\lnapprox",!0);m(p,T,j,"⊀","\\nprec",!0);m(p,T,j,"⋠","\\npreceq",!0);m(p,T,j,"⋨","\\precnsim",!0);m(p,T,j,"⪹","\\precnapprox",!0);m(p,T,j,"≁","\\nsim",!0);m(p,T,j,"","\\@nshortmid");m(p,T,j,"∤","\\nmid",!0);m(p,T,j,"⊬","\\nvdash",!0);m(p,T,j,"⊭","\\nvDash",!0);m(p,T,j,"⋪","\\ntriangleleft");m(p,T,j,"⋬","\\ntrianglelefteq",!0);m(p,T,j,"⊊","\\subsetneq",!0);m(p,T,j,"","\\@varsubsetneq");m(p,T,j,"⫋","\\subsetneqq",!0);m(p,T,j,"","\\@varsubsetneqq");m(p,T,j,"≯","\\ngtr",!0);m(p,T,j,"","\\@ngeqslant");m(p,T,j,"","\\@ngeqq");m(p,T,j,"⪈","\\gneq",!0);m(p,T,j,"≩","\\gneqq",!0);m(p,T,j,"","\\@gvertneqq");m(p,T,j,"⋧","\\gnsim",!0);m(p,T,j,"⪊","\\gnapprox",!0);m(p,T,j,"⊁","\\nsucc",!0);m(p,T,j,"⋡","\\nsucceq",!0);m(p,T,j,"⋩","\\succnsim",!0);m(p,T,j,"⪺","\\succnapprox",!0);m(p,T,j,"≆","\\ncong",!0);m(p,T,j,"","\\@nshortparallel");m(p,T,j,"∦","\\nparallel",!0);m(p,T,j,"⊯","\\nVDash",!0);m(p,T,j,"⋫","\\ntriangleright");m(p,T,j,"⋭","\\ntrianglerighteq",!0);m(p,T,j,"","\\@nsupseteqq");m(p,T,j,"⊋","\\supsetneq",!0);m(p,T,j,"","\\@varsupsetneq");m(p,T,j,"⫌","\\supsetneqq",!0);m(p,T,j,"","\\@varsupsetneqq");m(p,T,j,"⊮","\\nVdash",!0);m(p,T,j,"⪵","\\precneqq",!0);m(p,T,j,"⪶","\\succneqq",!0);m(p,T,j,"","\\@nsubseteqq");m(p,T,ge,"⊴","\\unlhd");m(p,T,ge,"⊵","\\unrhd");m(p,T,j,"↚","\\nleftarrow",!0);m(p,T,j,"↛","\\nrightarrow",!0);m(p,T,j,"⇍","\\nLeftarrow",!0);m(p,T,j,"⇏","\\nRightarrow",!0);m(p,T,j,"↮","\\nleftrightarrow",!0);m(p,T,j,"⇎","\\nLeftrightarrow",!0);m(p,T,j,"△","\\vartriangle");m(p,T,C,"ℏ","\\hslash");m(p,T,C,"▽","\\triangledown");m(p,T,C,"◊","\\lozenge");m(p,T,C,"Ⓢ","\\circledS");m(p,T,C,"®","\\circledR");m(J,T,C,"®","\\circledR");m(p,T,C,"∡","\\measuredangle",!0);m(p,T,C,"∄","\\nexists");m(p,T,C,"℧","\\mho");m(p,T,C,"Ⅎ","\\Finv",!0);m(p,T,C,"⅁","\\Game",!0);m(p,T,C,"‵","\\backprime");m(p,T,C,"▲","\\blacktriangle");m(p,T,C,"▼","\\blacktriangledown");m(p,T,C,"■","\\blacksquare");m(p,T,C,"⧫","\\blacklozenge");m(p,T,C,"★","\\bigstar");m(p,T,C,"∢","\\sphericalangle",!0);m(p,T,C,"∁","\\complement",!0);m(p,T,C,"ð","\\eth",!0);m(J,y,C,"ð","ð");m(p,T,C,"╱","\\diagup");m(p,T,C,"╲","\\diagdown");m(p,T,C,"□","\\square");m(p,T,C,"□","\\Box");m(p,T,C,"◊","\\Diamond");m(p,T,C,"¥","\\yen",!0);m(J,T,C,"¥","\\yen",!0);m(p,T,C,"✓","\\checkmark",!0);m(J,T,C,"✓","\\checkmark");m(p,T,C,"ℶ","\\beth",!0);m(p,T,C,"ℸ","\\daleth",!0);m(p,T,C,"ℷ","\\gimel",!0);m(p,T,C,"ϝ","\\digamma",!0);m(p,T,C,"ϰ","\\varkappa");m(p,T,en,"┌","\\@ulcorner",!0);m(p,T,Pt,"┐","\\@urcorner",!0);m(p,T,en,"└","\\@llcorner",!0);m(p,T,Pt,"┘","\\@lrcorner",!0);m(p,T,j,"≦","\\leqq",!0);m(p,T,j,"⩽","\\leqslant",!0);m(p,T,j,"⪕","\\eqslantless",!0);m(p,T,j,"≲","\\lesssim",!0);m(p,T,j,"⪅","\\lessapprox",!0);m(p,T,j,"≊","\\approxeq",!0);m(p,T,ge,"⋖","\\lessdot");m(p,T,j,"⋘","\\lll",!0);m(p,T,j,"≶","\\lessgtr",!0);m(p,T,j,"⋚","\\lesseqgtr",!0);m(p,T,j,"⪋","\\lesseqqgtr",!0);m(p,T,j,"≑","\\doteqdot");m(p,T,j,"≓","\\risingdotseq",!0);m(p,T,j,"≒","\\fallingdotseq",!0);m(p,T,j,"∽","\\backsim",!0);m(p,T,j,"⋍","\\backsimeq",!0);m(p,T,j,"⫅","\\subseteqq",!0);m(p,T,j,"⋐","\\Subset",!0);m(p,T,j,"⊏","\\sqsubset",!0);m(p,T,j,"≼","\\preccurlyeq",!0);m(p,T,j,"⋞","\\curlyeqprec",!0);m(p,T,j,"≾","\\precsim",!0);m(p,T,j,"⪷","\\precapprox",!0);m(p,T,j,"⊲","\\vartriangleleft");m(p,T,j,"⊴","\\trianglelefteq");m(p,T,j,"⊨","\\vDash",!0);m(p,T,j,"⊪","\\Vvdash",!0);m(p,T,j,"⌣","\\smallsmile");m(p,T,j,"⌢","\\smallfrown");m(p,T,j,"≏","\\bumpeq",!0);m(p,T,j,"≎","\\Bumpeq",!0);m(p,T,j,"≧","\\geqq",!0);m(p,T,j,"⩾","\\geqslant",!0);m(p,T,j,"⪖","\\eqslantgtr",!0);m(p,T,j,"≳","\\gtrsim",!0);m(p,T,j,"⪆","\\gtrapprox",!0);m(p,T,ge,"⋗","\\gtrdot");m(p,T,j,"⋙","\\ggg",!0);m(p,T,j,"≷","\\gtrless",!0);m(p,T,j,"⋛","\\gtreqless",!0);m(p,T,j,"⪌","\\gtreqqless",!0);m(p,T,j,"≖","\\eqcirc",!0);m(p,T,j,"≗","\\circeq",!0);m(p,T,j,"≜","\\triangleq",!0);m(p,T,j,"∼","\\thicksim");m(p,T,j,"≈","\\thickapprox");m(p,T,j,"⫆","\\supseteqq",!0);m(p,T,j,"⋑","\\Supset",!0);m(p,T,j,"⊐","\\sqsupset",!0);m(p,T,j,"≽","\\succcurlyeq",!0);m(p,T,j,"⋟","\\curlyeqsucc",!0);m(p,T,j,"≿","\\succsim",!0);m(p,T,j,"⪸","\\succapprox",!0);m(p,T,j,"⊳","\\vartriangleright");m(p,T,j,"⊵","\\trianglerighteq");m(p,T,j,"⊩","\\Vdash",!0);m(p,T,j,"∣","\\shortmid");m(p,T,j,"∥","\\shortparallel");m(p,T,j,"≬","\\between",!0);m(p,T,j,"⋔","\\pitchfork",!0);m(p,T,j,"∝","\\varpropto");m(p,T,j,"◀","\\blacktriangleleft");m(p,T,j,"∴","\\therefore",!0);m(p,T,j,"∍","\\backepsilon");m(p,T,j,"▶","\\blacktriangleright");m(p,T,j,"∵","\\because",!0);m(p,T,j,"⋘","\\llless");m(p,T,j,"⋙","\\gggtr");m(p,T,ge,"⊲","\\lhd");m(p,T,ge,"⊳","\\rhd");m(p,T,j,"≂","\\eqsim",!0);m(p,y,j,"⋈","\\Join");m(p,T,j,"≑","\\Doteq",!0);m(p,T,ge,"∔","\\dotplus",!0);m(p,T,ge,"∖","\\smallsetminus");m(p,T,ge,"⋒","\\Cap",!0);m(p,T,ge,"⋓","\\Cup",!0);m(p,T,ge,"⩞","\\doublebarwedge",!0);m(p,T,ge,"⊟","\\boxminus",!0);m(p,T,ge,"⊞","\\boxplus",!0);m(p,T,ge,"⋇","\\divideontimes",!0);m(p,T,ge,"⋉","\\ltimes",!0);m(p,T,ge,"⋊","\\rtimes",!0);m(p,T,ge,"⋋","\\leftthreetimes",!0);m(p,T,ge,"⋌","\\rightthreetimes",!0);m(p,T,ge,"⋏","\\curlywedge",!0);m(p,T,ge,"⋎","\\curlyvee",!0);m(p,T,ge,"⊝","\\circleddash",!0);m(p,T,ge,"⊛","\\circledast",!0);m(p,T,ge,"⋅","\\centerdot");m(p,T,ge,"⊺","\\intercal",!0);m(p,T,ge,"⋒","\\doublecap");m(p,T,ge,"⋓","\\doublecup");m(p,T,ge,"⊠","\\boxtimes",!0);m(p,T,j,"⇢","\\dashrightarrow",!0);m(p,T,j,"⇠","\\dashleftarrow",!0);m(p,T,j,"⇇","\\leftleftarrows",!0);m(p,T,j,"⇆","\\leftrightarrows",!0);m(p,T,j,"⇚","\\Lleftarrow",!0);m(p,T,j,"↞","\\twoheadleftarrow",!0);m(p,T,j,"↢","\\leftarrowtail",!0);m(p,T,j,"↫","\\looparrowleft",!0);m(p,T,j,"⇋","\\leftrightharpoons",!0);m(p,T,j,"↶","\\curvearrowleft",!0);m(p,T,j,"↺","\\circlearrowleft",!0);m(p,T,j,"↰","\\Lsh",!0);m(p,T,j,"⇈","\\upuparrows",!0);m(p,T,j,"↿","\\upharpoonleft",!0);m(p,T,j,"⇃","\\downharpoonleft",!0);m(p,y,j,"⊶","\\origof",!0);m(p,y,j,"⊷","\\imageof",!0);m(p,T,j,"⊸","\\multimap",!0);m(p,T,j,"↭","\\leftrightsquigarrow",!0);m(p,T,j,"⇉","\\rightrightarrows",!0);m(p,T,j,"⇄","\\rightleftarrows",!0);m(p,T,j,"↠","\\twoheadrightarrow",!0);m(p,T,j,"↣","\\rightarrowtail",!0);m(p,T,j,"↬","\\looparrowright",!0);m(p,T,j,"↷","\\curvearrowright",!0);m(p,T,j,"↻","\\circlearrowright",!0);m(p,T,j,"↱","\\Rsh",!0);m(p,T,j,"⇊","\\downdownarrows",!0);m(p,T,j,"↾","\\upharpoonright",!0);m(p,T,j,"⇂","\\downharpoonright",!0);m(p,T,j,"⇝","\\rightsquigarrow",!0);m(p,T,j,"⇝","\\leadsto");m(p,T,j,"⇛","\\Rrightarrow",!0);m(p,T,j,"↾","\\restriction");m(p,y,C,"‘","`");m(p,y,C,"$","\\$");m(J,y,C,"$","\\$");m(J,y,C,"$","\\textdollar");m(p,y,C,"%","\\%");m(J,y,C,"%","\\%");m(p,y,C,"_","\\_");m(J,y,C,"_","\\_");m(J,y,C,"_","\\textunderscore");m(p,y,C,"∠","\\angle",!0);m(p,y,C,"∞","\\infty",!0);m(p,y,C,"′","\\prime");m(p,y,C,"△","\\triangle");m(p,y,C,"Γ","\\Gamma",!0);m(p,y,C,"Δ","\\Delta",!0);m(p,y,C,"Θ","\\Theta",!0);m(p,y,C,"Λ","\\Lambda",!0);m(p,y,C,"Ξ","\\Xi",!0);m(p,y,C,"Π","\\Pi",!0);m(p,y,C,"Σ","\\Sigma",!0);m(p,y,C,"Υ","\\Upsilon",!0);m(p,y,C,"Φ","\\Phi",!0);m(p,y,C,"Ψ","\\Psi",!0);m(p,y,C,"Ω","\\Omega",!0);m(p,y,C,"A","Α");m(p,y,C,"B","Β");m(p,y,C,"E","Ε");m(p,y,C,"Z","Ζ");m(p,y,C,"H","Η");m(p,y,C,"I","Ι");m(p,y,C,"K","Κ");m(p,y,C,"M","Μ");m(p,y,C,"N","Ν");m(p,y,C,"O","Ο");m(p,y,C,"P","Ρ");m(p,y,C,"T","Τ");m(p,y,C,"X","Χ");m(p,y,C,"¬","\\neg",!0);m(p,y,C,"¬","\\lnot");m(p,y,C,"⊤","\\top");m(p,y,C,"⊥","\\bot");m(p,y,C,"∅","\\emptyset");m(p,T,C,"∅","\\varnothing");m(p,y,Ae,"α","\\alpha",!0);m(p,y,Ae,"β","\\beta",!0);m(p,y,Ae,"γ","\\gamma",!0);m(p,y,Ae,"δ","\\delta",!0);m(p,y,Ae,"ϵ","\\epsilon",!0);m(p,y,Ae,"ζ","\\zeta",!0);m(p,y,Ae,"η","\\eta",!0);m(p,y,Ae,"θ","\\theta",!0);m(p,y,Ae,"ι","\\iota",!0);m(p,y,Ae,"κ","\\kappa",!0);m(p,y,Ae,"λ","\\lambda",!0);m(p,y,Ae,"μ","\\mu",!0);m(p,y,Ae,"ν","\\nu",!0);m(p,y,Ae,"ξ","\\xi",!0);m(p,y,Ae,"ο","\\omicron",!0);m(p,y,Ae,"π","\\pi",!0);m(p,y,Ae,"ρ","\\rho",!0);m(p,y,Ae,"σ","\\sigma",!0);m(p,y,Ae,"τ","\\tau",!0);m(p,y,Ae,"υ","\\upsilon",!0);m(p,y,Ae,"ϕ","\\phi",!0);m(p,y,Ae,"χ","\\chi",!0);m(p,y,Ae,"ψ","\\psi",!0);m(p,y,Ae,"ω","\\omega",!0);m(p,y,Ae,"ε","\\varepsilon",!0);m(p,y,Ae,"ϑ","\\vartheta",!0);m(p,y,Ae,"ϖ","\\varpi",!0);m(p,y,Ae,"ϱ","\\varrho",!0);m(p,y,Ae,"ς","\\varsigma",!0);m(p,y,Ae,"φ","\\varphi",!0);m(p,y,ge,"∗","*",!0);m(p,y,ge,"+","+");m(p,y,ge,"−","-",!0);m(p,y,ge,"⋅","\\cdot",!0);m(p,y,ge,"∘","\\circ",!0);m(p,y,ge,"÷","\\div",!0);m(p,y,ge,"±","\\pm",!0);m(p,y,ge,"×","\\times",!0);m(p,y,ge,"∩","\\cap",!0);m(p,y,ge,"∪","\\cup",!0);m(p,y,ge,"∖","\\setminus",!0);m(p,y,ge,"∧","\\land");m(p,y,ge,"∨","\\lor");m(p,y,ge,"∧","\\wedge",!0);m(p,y,ge,"∨","\\vee",!0);m(p,y,C,"√","\\surd");m(p,y,en,"⟨","\\langle",!0);m(p,y,en,"∣","\\lvert");m(p,y,en,"∥","\\lVert");m(p,y,Pt,"?","?");m(p,y,Pt,"!","!");m(p,y,Pt,"⟩","\\rangle",!0);m(p,y,Pt,"∣","\\rvert");m(p,y,Pt,"∥","\\rVert");m(p,y,j,"=","=");m(p,y,j,":",":");m(p,y,j,"≈","\\approx",!0);m(p,y,j,"≅","\\cong",!0);m(p,y,j,"≥","\\ge");m(p,y,j,"≥","\\geq",!0);m(p,y,j,"←","\\gets");m(p,y,j,">","\\gt",!0);m(p,y,j,"∈","\\in",!0);m(p,y,j,"","\\@not");m(p,y,j,"⊂","\\subset",!0);m(p,y,j,"⊃","\\supset",!0);m(p,y,j,"⊆","\\subseteq",!0);m(p,y,j,"⊇","\\supseteq",!0);m(p,T,j,"⊈","\\nsubseteq",!0);m(p,T,j,"⊉","\\nsupseteq",!0);m(p,y,j,"⊨","\\models");m(p,y,j,"←","\\leftarrow",!0);m(p,y,j,"≤","\\le");m(p,y,j,"≤","\\leq",!0);m(p,y,j,"<","\\lt",!0);m(p,y,j,"→","\\rightarrow",!0);m(p,y,j,"→","\\to");m(p,T,j,"≱","\\ngeq",!0);m(p,T,j,"≰","\\nleq",!0);m(p,y,er," ","\\ ");m(p,y,er," ","\\space");m(p,y,er," ","\\nobreakspace");m(J,y,er," ","\\ ");m(J,y,er," "," ");m(J,y,er," ","\\space");m(J,y,er," ","\\nobreakspace");m(p,y,er,null,"\\nobreak");m(p,y,er,null,"\\allowbreak");m(p,y,xs,",",",");m(p,y,xs,";",";");m(p,T,ge,"⊼","\\barwedge",!0);m(p,T,ge,"⊻","\\veebar",!0);m(p,y,ge,"⊙","\\odot",!0);m(p,y,ge,"⊕","\\oplus",!0);m(p,y,ge,"⊗","\\otimes",!0);m(p,y,C,"∂","\\partial",!0);m(p,y,ge,"⊘","\\oslash",!0);m(p,T,ge,"⊚","\\circledcirc",!0);m(p,T,ge,"⊡","\\boxdot",!0);m(p,y,ge,"△","\\bigtriangleup");m(p,y,ge,"▽","\\bigtriangledown");m(p,y,ge,"†","\\dagger");m(p,y,ge,"⋄","\\diamond");m(p,y,ge,"⋆","\\star");m(p,y,ge,"◃","\\triangleleft");m(p,y,ge,"▹","\\triangleright");m(p,y,en,"{","\\{");m(J,y,C,"{","\\{");m(J,y,C,"{","\\textbraceleft");m(p,y,Pt,"}","\\}");m(J,y,C,"}","\\}");m(J,y,C,"}","\\textbraceright");m(p,y,en,"{","\\lbrace");m(p,y,Pt,"}","\\rbrace");m(p,y,en,"[","\\lbrack",!0);m(J,y,C,"[","\\lbrack",!0);m(p,y,Pt,"]","\\rbrack",!0);m(J,y,C,"]","\\rbrack",!0);m(p,y,en,"(","\\lparen",!0);m(p,y,Pt,")","\\rparen",!0);m(J,y,C,"<","\\textless",!0);m(J,y,C,">","\\textgreater",!0);m(p,y,en,"⌊","\\lfloor",!0);m(p,y,Pt,"⌋","\\rfloor",!0);m(p,y,en,"⌈","\\lceil",!0);m(p,y,Pt,"⌉","\\rceil",!0);m(p,y,C,"\\","\\backslash");m(p,y,C,"∣","|");m(p,y,C,"∣","\\vert");m(J,y,C,"|","\\textbar",!0);m(p,y,C,"∥","\\|");m(p,y,C,"∥","\\Vert");m(J,y,C,"∥","\\textbardbl");m(J,y,C,"~","\\textasciitilde");m(J,y,C,"\\","\\textbackslash");m(J,y,C,"^","\\textasciicircum");m(p,y,j,"↑","\\uparrow",!0);m(p,y,j,"⇑","\\Uparrow",!0);m(p,y,j,"↓","\\downarrow",!0);m(p,y,j,"⇓","\\Downarrow",!0);m(p,y,j,"↕","\\updownarrow",!0);m(p,y,j,"⇕","\\Updownarrow",!0);m(p,y,gt,"∐","\\coprod");m(p,y,gt,"⋁","\\bigvee");m(p,y,gt,"⋀","\\bigwedge");m(p,y,gt,"⨄","\\biguplus");m(p,y,gt,"⋂","\\bigcap");m(p,y,gt,"⋃","\\bigcup");m(p,y,gt,"∫","\\int");m(p,y,gt,"∫","\\intop");m(p,y,gt,"∬","\\iint");m(p,y,gt,"∭","\\iiint");m(p,y,gt,"∏","\\prod");m(p,y,gt,"∑","\\sum");m(p,y,gt,"⨂","\\bigotimes");m(p,y,gt,"⨁","\\bigoplus");m(p,y,gt,"⨀","\\bigodot");m(p,y,gt,"∮","\\oint");m(p,y,gt,"∯","\\oiint");m(p,y,gt,"∰","\\oiiint");m(p,y,gt,"⨆","\\bigsqcup");m(p,y,gt,"∫","\\smallint");m(J,y,Bi,"…","\\textellipsis");m(p,y,Bi,"…","\\mathellipsis");m(J,y,Bi,"…","\\ldots",!0);m(p,y,Bi,"…","\\ldots",!0);m(p,y,Bi,"⋯","\\@cdots",!0);m(p,y,Bi,"⋱","\\ddots",!0);m(p,y,C,"⋮","\\varvdots");m(J,y,C,"⋮","\\varvdots");m(p,y,rt,"ˊ","\\acute");m(p,y,rt,"ˋ","\\grave");m(p,y,rt,"¨","\\ddot");m(p,y,rt,"~","\\tilde");m(p,y,rt,"ˉ","\\bar");m(p,y,rt,"˘","\\breve");m(p,y,rt,"ˇ","\\check");m(p,y,rt,"^","\\hat");m(p,y,rt,"⃗","\\vec");m(p,y,rt,"˙","\\dot");m(p,y,rt,"˚","\\mathring");m(p,y,Ae,"","\\@imath");m(p,y,Ae,"","\\@jmath");m(p,y,C,"ı","ı");m(p,y,C,"ȷ","ȷ");m(J,y,C,"ı","\\i",!0);m(J,y,C,"ȷ","\\j",!0);m(J,y,C,"ß","\\ss",!0);m(J,y,C,"æ","\\ae",!0);m(J,y,C,"œ","\\oe",!0);m(J,y,C,"ø","\\o",!0);m(J,y,C,"Æ","\\AE",!0);m(J,y,C,"Œ","\\OE",!0);m(J,y,C,"Ø","\\O",!0);m(J,y,rt,"ˊ","\\'");m(J,y,rt,"ˋ","\\`");m(J,y,rt,"ˆ","\\^");m(J,y,rt,"˜","\\~");m(J,y,rt,"ˉ","\\=");m(J,y,rt,"˘","\\u");m(J,y,rt,"˙","\\.");m(J,y,rt,"¸","\\c");m(J,y,rt,"˚","\\r");m(J,y,rt,"ˇ","\\v");m(J,y,rt,"¨",'\\"');m(J,y,rt,"˝","\\H");m(J,y,rt,"◯","\\textcircled");var um={"--":!0,"---":!0,"``":!0,"''":!0};m(J,y,C,"–","--",!0);m(J,y,C,"–","\\textendash");m(J,y,C,"—","---",!0);m(J,y,C,"—","\\textemdash");m(J,y,C,"‘","`",!0);m(J,y,C,"‘","\\textquoteleft");m(J,y,C,"’","'",!0);m(J,y,C,"’","\\textquoteright");m(J,y,C,"“","``",!0);m(J,y,C,"“","\\textquotedblleft");m(J,y,C,"”","''",!0);m(J,y,C,"”","\\textquotedblright");m(p,y,C,"°","\\degree",!0);m(J,y,C,"°","\\degree");m(J,y,C,"°","\\textdegree",!0);m(p,y,C,"£","\\pounds");m(p,y,C,"£","\\mathsterling",!0);m(J,y,C,"£","\\pounds");m(J,y,C,"£","\\textsterling",!0);m(p,T,C,"✠","\\maltese");m(J,T,C,"✠","\\maltese");var dd='0123456789/@."';for(var bl=0;bl<dd.length;bl++){var md=dd.charAt(bl);m(p,y,C,md,md)}var fd='0123456789!@*()-=+";:?/.,';for(var wl=0;wl<fd.length;wl++){var pd=fd.charAt(wl);m(J,y,C,pd,pd)}var hs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var _l=0;_l<hs.length;_l++){var ns=hs.charAt(_l);m(p,y,Ae,ns,ns),m(J,y,C,ns,ns)}m(p,T,C,"C","ℂ");m(J,T,C,"C","ℂ");m(p,T,C,"H","ℍ");m(J,T,C,"H","ℍ");m(p,T,C,"N","ℕ");m(J,T,C,"N","ℕ");m(p,T,C,"P","ℙ");m(J,T,C,"P","ℙ");m(p,T,C,"Q","ℚ");m(J,T,C,"Q","ℚ");m(p,T,C,"R","ℝ");m(J,T,C,"R","ℝ");m(p,T,C,"Z","ℤ");m(J,T,C,"Z","ℤ");m(p,y,Ae,"h","ℎ");m(J,y,Ae,"h","ℎ");var Ce="";for(var Rt=0;Rt<hs.length;Rt++){var ct=hs.charAt(Rt);Ce=String.fromCharCode(55349,56320+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56372+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56424+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56580+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56684+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56736+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56788+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56840+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56944+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Rt<26&&(Ce=String.fromCharCode(55349,56632+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce),Ce=String.fromCharCode(55349,56476+Rt),m(p,y,Ae,ct,Ce),m(J,y,C,ct,Ce))}Ce="𝕜";m(p,y,Ae,"k",Ce);m(J,y,C,"k",Ce);for(var ti=0;ti<10;ti++){var jr=ti.toString();Ce=String.fromCharCode(55349,57294+ti),m(p,y,Ae,jr,Ce),m(J,y,C,jr,Ce),Ce=String.fromCharCode(55349,57314+ti),m(p,y,Ae,jr,Ce),m(J,y,C,jr,Ce),Ce=String.fromCharCode(55349,57324+ti),m(p,y,Ae,jr,Ce),m(J,y,C,jr,Ce),Ce=String.fromCharCode(55349,57334+ti),m(p,y,Ae,jr,Ce),m(J,y,C,jr,Ce)}var Fl="ÐÞþ";for(var $l=0;$l<Fl.length;$l++){var rs=Fl.charAt($l);m(p,y,Ae,rs,rs),m(J,y,C,rs,rs)}var is=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],hd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],qv=function(n,r){var s=n.charCodeAt(0),a=n.charCodeAt(1),u=(s-55296)*1024+(a-56320)+65536,d=r==="math"?0:1;if(119808<=u&&u<120484){var h=Math.floor((u-119808)/26);return[is[h][2],is[h][d]]}else if(120782<=u&&u<=120831){var g=Math.floor((u-120782)/10);return[hd[g][2],hd[g][d]]}else{if(u===120485||u===120486)return[is[0][2],is[0][d]];if(120486<u&&u<120782)return["",""];throw new ie("Unsupported character: "+n)}},bs=function(n,r,s){return Xe[s][n]&&Xe[s][n].replace&&(n=Xe[s][n].replace),{value:n,metrics:tu(n,r,s)}},Et=function(n,r,s,a,u){var d=bs(n,r,s),h=d.metrics;n=d.value;var g;if(h){var x=h.italic;(s==="text"||a&&a.font==="mathit")&&(x=0),g=new mn(n,h.height,h.depth,x,h.skew,h.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+s+"'")),g=new mn(n,0,0,0,0,0,u);if(a){g.maxFontSize=a.sizeMultiplier,a.style.isTight()&&g.classes.push("mtight");var w=a.getColor();w&&(g.style.color=w)}return g},ru=function(n,r,s,a){return a===void 0&&(a=[]),s.font==="boldsymbol"&&bs(n,"Main-Bold",r).metrics?Et(n,"Main-Bold",r,s,a.concat(["mathbf"])):n==="\\"||Xe[r][n].font==="main"?Et(n,"Main-Regular",r,s,a):Et(n,"AMS-Regular",r,s,a.concat(["amsrm"]))},Mv=function(n,r,s,a,u){return u!=="textord"&&bs(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ws=function(n,r,s){var a=n.mode,u=n.text,d=["mord"],h=a==="math"||a==="text"&&r.font,g=h?r.font:r.fontFamily,x="",w="";if(u.charCodeAt(0)===55349&&([x,w]=qv(u,a)),x.length>0)return Et(u,x,a,r,d.concat(w));if(g){var $,z;if(g==="boldsymbol"){var k=Mv(u,a,r,d,s);$=k.fontName,z=[k.fontClass]}else h?($=Ll[g].fontName,z=[g]):($=os(g,r.fontWeight,r.fontShape),z=[g,r.fontWeight,r.fontShape]);if(bs(u,$,a).metrics)return Et(u,$,a,r,d.concat(z));if(um.hasOwnProperty(u)&&$.slice(0,10)==="Typewriter"){for(var D=[],q=0;q<u.length;q++)D.push(Et(u[q],$,a,r,d.concat(z)));return tr(D)}}if(s==="mathord")return Et(u,"Math-Italic",a,r,d.concat(["mathnormal"]));if(s==="textord"){var B=Xe[a][u]&&Xe[a][u].font;if(B==="ams"){var E=os("amsrm",r.fontWeight,r.fontShape);return Et(u,E,a,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(B==="main"||!B){var I=os("textrm",r.fontWeight,r.fontShape);return Et(u,I,a,r,d.concat(r.fontWeight,r.fontShape))}else{var W=os(B,r.fontWeight,r.fontShape);return Et(u,W,a,r,d.concat(W,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},Av=(o,n)=>{if(Mr(o.classes)!==Mr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==n.style[s])return!1;for(var a in n.style)if(n.style.hasOwnProperty(a)&&o.style[a]!==n.style[a])return!1;return!0},cm=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],s=o[n+1];r instanceof mn&&s instanceof mn&&Av(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(n+1,1),n--)}return o},iu=function(n){for(var r=0,s=0,a=0,u=0;u<n.children.length;u++){var d=n.children[u];d.height>r&&(r=d.height),d.depth>s&&(s=d.depth),d.maxFontSize>a&&(a=d.maxFontSize)}n.height=r,n.depth=s,n.maxFontSize=a},te=function(n,r,s,a){var u=new Bo(n,r,s,a);return iu(u),u},Cr=(o,n,r,s)=>new Bo(o,n,r,s),Di=function(n,r,s){var a=te([n],[],r);return a.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=ce(a.height),a.maxFontSize=1,a},Cv=function(n,r,s,a){var u=new nu(n,r,s,a);return iu(u),u},tr=function(n){var r=new Po(n);return iu(r),r},Pi=function(n,r){return n instanceof Po?te([],[n],r):n},Rv=function(n){if(n.positionType==="individualShift"){for(var r=n.children,s=[r[0]],a=-r[0].shift-r[0].elem.depth,u=a,d=1;d<r.length;d++){var h=-r[d].shift-u-r[d].elem.depth,g=h-(r[d-1].elem.height+r[d-1].elem.depth);u=u+h,s.push({type:"kern",size:g}),s.push(r[d])}return{children:s,depth:a}}var x;if(n.positionType==="top"){for(var w=n.positionData,$=0;$<n.children.length;$++){var z=n.children[$];w-=z.type==="kern"?z.size:z.elem.height+z.elem.depth}x=w}else if(n.positionType==="bottom")x=-n.positionData;else{var k=n.children[0];if(k.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")x=-k.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")x=-k.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:x}},Ke=function(n,r){for(var{children:s,depth:a}=Rv(n),u=0,d=0;d<s.length;d++){var h=s[d];if(h.type==="elem"){var g=h.elem;u=Math.max(u,g.maxFontSize,g.height)}}u+=2;var x=te(["pstrut"],[]);x.style.height=ce(u);for(var w=[],$=a,z=a,k=a,D=0;D<s.length;D++){var q=s[D];if(q.type==="kern")k+=q.size;else{var B=q.elem,E=q.wrapperClasses||[],I=q.wrapperStyle||{},W=te(E,[x,B],void 0,I);W.style.top=ce(-u-k-B.depth),q.marginLeft&&(W.style.marginLeft=q.marginLeft),q.marginRight&&(W.style.marginRight=q.marginRight),w.push(W),k+=B.height+B.depth}$=Math.min($,k),z=Math.max(z,k)}var F=te(["vlist"],w);F.style.height=ce(z);var O;if($<0){var Y=te([],[]),P=te(["vlist"],[Y]);P.style.height=ce(-$);var V=te(["vlist-s"],[new mn("​")]);O=[te(["vlist-r"],[F,V]),te(["vlist-r"],[P])]}else O=[te(["vlist-r"],[F])];var ne=te(["vlist-t"],O);return O.length===2&&ne.classes.push("vlist-t2"),ne.height=z,ne.depth=-$,ne},dm=(o,n)=>{var r=te(["mspace"],[],n),s=at(o,n);return r.style.marginRight=ce(s),r},os=function(n,r,s){var a="";switch(n){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=n}var u;return r==="textbf"&&s==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",a+"-"+u},Ll={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},mm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},fm=function(n,r){var[s,a,u]=mm[n],d=new Ar(s),h=new Xn([d],{width:ce(a),height:ce(u),style:"width:"+ce(a),viewBox:"0 0 "+1e3*a+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),g=Cr(["overlay"],[h],r);return g.height=u,g.style.height=ce(u),g.style.width=ce(a),g},st={number:3,unit:"mu"},ni={number:4,unit:"mu"},Qn={number:5,unit:"mu"},Ev={mord:{mop:st,mbin:ni,mrel:Qn,minner:st},mop:{mord:st,mop:st,mrel:Qn,minner:st},mbin:{mord:ni,mop:ni,mopen:ni,minner:ni},mrel:{mord:Qn,mop:Qn,mopen:Qn,minner:Qn},mopen:{},mclose:{mop:st,mbin:ni,mrel:Qn,minner:st},mpunct:{mord:st,mop:st,mrel:Qn,mopen:st,mclose:st,mpunct:st,minner:st},minner:{mord:st,mop:st,mbin:ni,mrel:Qn,mopen:st,mpunct:st,minner:st}},Dv={mord:{mop:st},mop:{mord:st,mop:st},mbin:{},mrel:{},mopen:{},mclose:{mop:st},mpunct:{},minner:{mop:st}},pm={},gs={},vs={};function fe(o){for(var{type:n,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:d}=o,h={type:n,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:a},g=0;g<r.length;++g)pm[r[g]]=h;n&&(u&&(gs[n]=u),d&&(vs[n]=d))}function ii(o){var{type:n,htmlBuilder:r,mathmlBuilder:s}=o;fe({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var ys=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},mt=function(n){return n.type==="ordgroup"?n.body:[n]},Pv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Bv=new Set(["rightmost","mrel","mclose","mpunct"]),Nv={display:Ee.DISPLAY,text:Ee.TEXT,script:Ee.SCRIPT,scriptscript:Ee.SCRIPTSCRIPT},Iv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},xt=function(n,r,s,a){a===void 0&&(a=[null,null]);for(var u=[],d=0;d<n.length;d++){var h=Ue(n[d],r);if(h instanceof Po){var g=h.children;u.push(...g)}else u.push(h)}if(cm(u),!s)return u;var x=r;if(n.length===1){var w=n[0];w.type==="sizing"?x=r.havingSize(w.size):w.type==="styling"&&(x=r.havingStyle(Nv[w.style]))}var $=te([a[0]||"leftmost"],[],r),z=te([a[1]||"rightmost"],[],r),k=s==="root";return gd(u,(D,q)=>{var B=q.classes[0],E=D.classes[0];B==="mbin"&&Bv.has(E)?q.classes[0]="mord":E==="mbin"&&Pv.has(B)&&(D.classes[0]="mord")},{node:$},z,k),gd(u,(D,q)=>{var B=Ol(q),E=Ol(D),I=B&&E?D.hasClass("mtight")?Dv[B][E]:Ev[B][E]:null;if(I)return dm(I,x)},{node:$},z,k),u},gd=function o(n,r,s,a,u){a&&n.push(a);for(var d=0;d<n.length;d++){var h=n[d],g=hm(h);if(g){o(g.children,r,s,null,u);continue}var x=!h.hasClass("mspace");if(x){var w=r(h,s.node);w&&(s.insertAfter?s.insertAfter(w):(n.unshift(w),d++))}x?s.node=h:u&&h.hasClass("newline")&&(s.node=te(["leftmost"])),s.insertAfter=($=>z=>{n.splice($+1,0,z),d++})(d)}a&&n.pop()},hm=function(n){return n instanceof Po||n instanceof nu||n instanceof Bo&&n.hasClass("enclosing")?n:null},Fv=function o(n,r){var s=hm(n);if(s){var a=s.children;if(a.length){if(r==="right")return o(a[a.length-1],"right");if(r==="left")return o(a[0],"left")}}return n},Ol=function(n,r){return n?(r&&(n=Fv(n,r)),Iv[n.classes[0]]||null):null},Eo=function(n,r){var s=["nulldelimiter"].concat(n.baseSizingClasses());return te(r.concat(s))},Ue=function(n,r,s){if(!n)return te();if(gs[n.type]){var a=gs[n.type](n,r);if(s&&r.size!==s.size){a=te(r.sizingClasses(s),[a],r);var u=r.sizeMultiplier/s.sizeMultiplier;a.height*=u,a.depth*=u}return a}else throw new ie("Got group of unknown type: '"+n.type+"'")};function ss(o,n){var r=te(["base"],o,n),s=te(["strut"]);return s.style.height=ce(r.height+r.depth),r.depth&&(s.style.verticalAlign=ce(-r.depth)),r.children.unshift(s),r}function Hl(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=xt(o,n,"root"),a;s.length===2&&s[1].hasClass("tag")&&(a=s.pop());for(var u=[],d=[],h=0;h<s.length;h++)if(d.push(s[h]),s[h].hasClass("mbin")||s[h].hasClass("mrel")||s[h].hasClass("allowbreak")){for(var g=!1;h<s.length-1&&s[h+1].hasClass("mspace")&&!s[h+1].hasClass("newline");)h++,d.push(s[h]),s[h].hasClass("nobreak")&&(g=!0);g||(u.push(ss(d,n)),d=[])}else s[h].hasClass("newline")&&(d.pop(),d.length>0&&(u.push(ss(d,n)),d=[]),u.push(s[h]));d.length>0&&u.push(ss(d,n));var x;r?(x=ss(xt(r,n,!0)),x.classes=["tag"],u.push(x)):a&&u.push(a);var w=te(["katex-html"],u);if(w.setAttribute("aria-hidden","true"),x){var $=x.children[0];$.style.height=ce(w.height+w.depth),w.depth&&($.style.verticalAlign=ce(-w.depth))}return w}function gm(o){return new Po(o)}class oe{constructor(n,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=Mr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof ht&&this.children[s+1]instanceof ht){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof ht;)a+=this.children[++s].toText();n.appendChild(new ht(a).toNode())}else n.appendChild(this.children[s].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=Mt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+Mt(Mr(this.classes))+'"'),n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class ht{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return Mt(this.toText())}toText(){return this.text}}class vm{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",ce(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ce(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Lv=new Set(["\\imath","\\jmath"]),Ov=new Set(["mrow","mtable"]),fn=function(n,r,s){return Xe[r][n]&&Xe[r][n].replace&&n.charCodeAt(0)!==55349&&!(um.hasOwnProperty(n)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(n=Xe[r][n].replace),new ht(n)},ou=function(n){return n.length===1?n[0]:new oe("mrow",n)},su=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var a=n.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var u=n.text;if(Lv.has(u))return null;Xe[a][u]&&Xe[a][u].replace&&(u=Xe[a][u].replace);var d=Ll[s].fontName;return tu(u,d,a)?Ll[s].variant:null};function kl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof ht&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof ht&&r.text===","}else return!1}var Ut=function(n,r,s){if(n.length===1){var a=Ye(n[0],r);return s&&a instanceof oe&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var u=[],d,h=0;h<n.length;h++){var g=Ye(n[h],r);if(g instanceof oe&&d instanceof oe){if(g.type==="mtext"&&d.type==="mtext"&&g.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...g.children);continue}else if(g.type==="mn"&&d.type==="mn"){d.children.push(...g.children);continue}else if(kl(g)&&d.type==="mn"){d.children.push(...g.children);continue}else if(g.type==="mn"&&kl(d))g.children=[...d.children,...g.children],u.pop();else if((g.type==="msup"||g.type==="msub")&&g.children.length>=1&&(d.type==="mn"||kl(d))){var x=g.children[0];x instanceof oe&&x.type==="mn"&&(x.children=[...d.children,...x.children],u.pop())}else if(d.type==="mi"&&d.children.length===1){var w=d.children[0];if(w instanceof ht&&w.text==="̸"&&(g.type==="mo"||g.type==="mi"||g.type==="mn")){var $=g.children[0];$ instanceof ht&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),u.pop())}}}u.push(g),d=g}return u},Rr=function(n,r,s){return ou(Ut(n,r,s))},Ye=function(n,r){if(!n)return new oe("mrow");if(vs[n.type]){var s=vs[n.type](n,r);return s}else throw new ie("Got group of unknown type: '"+n.type+"'")};function vd(o,n,r,s,a){var u=Ut(o,r),d;u.length===1&&u[0]instanceof oe&&Ov.has(u[0].type)?d=u[0]:d=new oe("mrow",u);var h=new oe("annotation",[new ht(n)]);h.setAttribute("encoding","application/x-tex");var g=new oe("semantics",[d,h]),x=new oe("math",[g]);x.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&x.setAttribute("display","block");var w=a?"katex":"katex-mathml";return te([w],[x])}var ym=function(n){return new Yn({style:n.displayMode?Ee.DISPLAY:Ee.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},xm=function(n,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),n=te(s,[n])}return n},Hv=function(n,r,s){var a=ym(s),u;if(s.output==="mathml")return vd(n,r,a,s.displayMode,!0);if(s.output==="html"){var d=Hl(n,a);u=te(["katex"],[d])}else{var h=vd(n,r,a,s.displayMode,!1),g=Hl(n,a);u=te(["katex"],[h,g])}return xm(u,s)},Wv=function(n,r,s){var a=ym(s),u=Hl(n,a),d=te(["katex"],[u]);return xm(d,s)},Gv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},_s=function(n){var r=new oe("mo",[new ht(Gv[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Uv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Vv=new Set(["widehat","widecheck","widetilde","utilde"]),$s=function(n,r){function s(){var h=4e5,g=n.label.slice(1);if(Vv.has(g)){var x=n,w=x.base.type==="ordgroup"?x.base.body.length:1,$,z,k;if(w>5)g==="widehat"||g==="widecheck"?($=420,h=2364,k=.42,z=g+"4"):($=312,h=2340,k=.34,z="tilde4");else{var D=[1,1,2,2,3,3][w];g==="widehat"||g==="widecheck"?(h=[0,1062,2364,2364,2364][D],$=[0,239,300,360,420][D],k=[0,.24,.3,.3,.36,.42][D],z=g+D):(h=[0,600,1033,2339,2340][D],$=[0,260,286,306,312][D],k=[0,.26,.286,.3,.306,.34][D],z="tilde"+D)}var q=new Ar(z),B=new Xn([q],{width:"100%",height:ce(k),viewBox:"0 0 "+h+" "+$,preserveAspectRatio:"none"});return{span:Cr([],[B],r),minWidth:0,height:k}}else{var E=[],I=Uv[g],[W,F,O]=I,Y=O/1e3,P=W.length,V,ne;if(P===1){var me=I[3];V=["hide-tail"],ne=[me]}else if(P===2)V=["halfarrow-left","halfarrow-right"],ne=["xMinYMin","xMaxYMin"];else if(P===3)V=["brace-left","brace-center","brace-right"],ne=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+P+" children.");for(var se=0;se<P;se++){var ae=new Ar(W[se]),ve=new Xn([ae],{width:"400em",height:ce(Y),viewBox:"0 0 "+h+" "+O,preserveAspectRatio:ne[se]+" slice"}),xe=Cr([V[se]],[ve],r);if(P===1)return{span:xe,minWidth:F,height:Y};xe.style.height=ce(Y),E.push(xe)}return{span:te(["stretchy"],E,r),minWidth:F,height:Y}}}var{span:a,minWidth:u,height:d}=s();return a.height=d,a.style.height=ce(d),u>0&&(a.style.minWidth=ce(u)),a},Kv=function(n,r,s,a,u){var d,h=n.height+n.depth+s+a;if(/fbox|color|angl/.test(r)){if(d=te(["stretchy",r],[],u),r==="fbox"){var g=u.color&&u.getColor();g&&(d.style.borderColor=g)}}else{var x=[];/^[bx]cancel$/.test(r)&&x.push(new Il({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&x.push(new Il({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var w=new Xn(x,{width:"100%",height:ce(h)});d=Cr([],[w],u)}return d.height=h,d.style.height=ce(h),d};function Pe(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function au(o){var n=ks(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function ks(o){return o&&(o.type==="atom"||jv.hasOwnProperty(o.type))?o:null}var lu=(o,n)=>{var r,s,a;o&&o.type==="supsub"?(s=Pe(o.base,"accent"),r=s.base,o.base=r,a=Sv(Ue(o,n)),o.base=s):(s=Pe(o,"accent"),r=s.base);var u=Ue(r,n.havingCrampedStyle()),d=s.isShifty&&Jn(r),h=0;if(d){var g=Mo(r),x=Ue(g,n.havingCrampedStyle());h=cd(x).skew}var w=s.label==="\\c",$=w?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),z;if(s.isStretchy)z=$s(s,n),z=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:z,wrapperClasses:["svg-align"],wrapperStyle:h>0?{width:"calc(100% - "+ce(2*h)+")",marginLeft:ce(2*h)}:void 0}]});else{var k,D;s.label==="\\vec"?(k=fm("vec",n),D=mm.vec[1]):(k=ws({mode:s.mode,text:s.label},n,"textord"),k=cd(k),k.italic=0,D=k.width,w&&($+=k.depth)),z=te(["accent-body"],[k]);var q=s.label==="\\textcircled";q&&(z.classes.push("accent-full"),$=u.height);var B=h;q||(B-=D/2),z.style.left=ce(B),s.label==="\\textcircled"&&(z.style.top=".2em"),z=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-$},{type:"elem",elem:z}]})}var E=te(["mord","accent"],[z],n);return a?(a.children[0]=E,a.height=Math.max(E.height,a.height),a.classes[0]="mord",a):E},bm=(o,n)=>{var r=o.isStretchy?_s(o.label):new oe("mo",[fn(o.label,o.mode)]),s=new oe("mover",[Ye(o.base,n),r]);return s.setAttribute("accent","true"),s},Qv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));fe({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=ys(n[0]),s=!Qv.test(o.funcName),a=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:a,base:r}},htmlBuilder:lu,mathmlBuilder:bm});fe({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:lu,mathmlBuilder:bm});fe({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0];return{type:"accentUnder",mode:r.mode,label:s,base:a}},htmlBuilder:(o,n)=>{var r=Ue(o.base,n),s=$s(o,n),a=o.label==="\\utilde"?.12:0,u=Ke({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return te(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=_s(o.label),s=new oe("munder",[Ye(o.base,n),r]);return s.setAttribute("accentunder","true"),s}});var as=o=>{var n=new oe("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};fe({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s,funcName:a}=o;return{type:"xArrow",mode:s.mode,label:a,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,s=n.havingStyle(r.sup()),a=Pi(Ue(o.body,s,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(u+"-arrow-pad");var d;o.below&&(s=n.havingStyle(r.sub()),d=Pi(Ue(o.below,s,n),n),d.classes.push(u+"-arrow-pad"));var h=$s(o,n),g=-n.fontMetrics().axisHeight+.5*h.height,x=-n.fontMetrics().axisHeight-.5*h.height-.111;(a.depth>.25||o.label==="\\xleftequilibrium")&&(x-=a.depth);var w;if(d){var $=-n.fontMetrics().axisHeight+d.height+.5*h.height+.111;w=Ke({positionType:"individualShift",children:[{type:"elem",elem:a,shift:x},{type:"elem",elem:h,shift:g},{type:"elem",elem:d,shift:$}]})}else w=Ke({positionType:"individualShift",children:[{type:"elem",elem:a,shift:x},{type:"elem",elem:h,shift:g}]});return w.children[0].children[0].children[1].classes.push("svg-align"),te(["mrel","x-arrow"],[w],n)},mathmlBuilder(o,n){var r=_s(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var a=as(Ye(o.body,n));if(o.below){var u=as(Ye(o.below,n));s=new oe("munderover",[r,u,a])}else s=new oe("mover",[r,a])}else if(o.below){var d=as(Ye(o.below,n));s=new oe("munder",[r,d])}else s=as(),s=new oe("mover",[r,s]);return s}});function wm(o,n){var r=xt(o.body,n,!0);return te([o.mclass],r,n)}function _m(o,n){var r,s=Ut(o.body,n);return o.mclass==="minner"?r=new oe("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new oe("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new oe("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}fe({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:mt(a),isCharacterBox:Jn(a)}},htmlBuilder:wm,mathmlBuilder:_m});var zs=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};fe({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:zs(n[0]),body:mt(n[1]),isCharacterBox:Jn(n[1])}}});fe({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:s}=o,a=n[1],u=n[0],d;s!=="\\stackrel"?d=zs(a):d="mrel";var h={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:mt(a)},g={type:"supsub",mode:u.mode,base:h,sup:s==="\\underset"?null:u,sub:s==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:d,body:[g],isCharacterBox:Jn(g)}},htmlBuilder:wm,mathmlBuilder:_m});fe({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:zs(n[0]),body:mt(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!0),s=te([o.mclass],r,n);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,n){var r=Ut(o.body,n),s=new oe("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var Yv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},yd=()=>({type:"styling",body:[],mode:"math",style:"display"}),xd=o=>o.type==="textord"&&o.text==="@",Zv=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function Xv(o,n,r){var s=Yv[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:s,mode:"math",family:"rel"},d=r.callFunction("\\Big",[u],[]),h=r.callFunction("\\\\cdright",[n[1]],[]),g={type:"ordgroup",mode:"math",body:[a,d,h]};return r.callFunction("\\\\cdparent",[g],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var x={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[x],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Jv(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new ie("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],a=[s],u=0;u<n.length;u++){for(var d=n[u],h=yd(),g=0;g<d.length;g++)if(!xd(d[g]))h.body.push(d[g]);else{s.push(h),g+=1;var x=au(d[g]).text,w=new Array(2);if(w[0]={type:"ordgroup",mode:"math",body:[]},w[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(x))if("<>AV".includes(x))for(var $=0;$<2;$++){for(var z=!0,k=g+1;k<d.length;k++){if(Zv(d[k],x)){z=!1,g=k;break}if(xd(d[k]))throw new ie("Missing a "+x+" character to complete a CD arrow.",d[k]);w[$].body.push(d[k])}if(z)throw new ie("Missing a "+x+" character to complete a CD arrow.",d[g])}else throw new ie('Expected one of "<>AV=|." after @',d[g]);var D=Xv(x,w,o),q={type:"styling",body:[D],mode:"math",style:"display"};s.push(q),h=yd()}u%2===0?s.push(h):s.shift(),s=[],a.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var B=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:B,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}fe({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),s=Pi(Ue(o.label,r,n),n);return s.classes.push("cd-label-"+o.side),s.style.bottom=ce(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,n){var r=new oe("mrow",[Ye(o.label,n)]);return r=new oe("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new oe("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});fe({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=Pi(Ue(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new oe("mrow",[Ye(o.fragment,n)])}});fe({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,s=Pe(n[0],"ordgroup"),a=s.body,u="",d=0;d<a.length;d++){var h=Pe(a[d],"textord");u+=h.text}var g=parseInt(u),x;if(isNaN(g))throw new ie("\\@char has non-numeric argument "+u);if(g<0||g>=1114111)throw new ie("\\@char with invalid code point "+u);return g<=65535?x=String.fromCharCode(g):(g-=65536,x=String.fromCharCode((g>>10)+55296,(g&1023)+56320)),{type:"textord",mode:r.mode,text:x}}});var $m=(o,n)=>{var r=xt(o.body,n.withColor(o.color),!1);return tr(r)},km=(o,n)=>{var r=Ut(o.body,n.withColor(o.color)),s=new oe("mstyle",r);return s.setAttribute("mathcolor",o.color),s};fe({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,s=Pe(n[0],"color-token").color,a=n[1];return{type:"color",mode:r.mode,color:s,body:mt(a)}},htmlBuilder:$m,mathmlBuilder:km});fe({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:s}=o,a=Pe(n[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var u=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:a,body:u}},htmlBuilder:$m,mathmlBuilder:km});fe({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:s}=o,a=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,u=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:u,size:a&&Pe(a,"size").value}},htmlBuilder(o,n){var r=te(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=ce(at(o.size,n)))),r},mathmlBuilder(o,n){var r=new oe("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",ce(at(o.size,n)))),r}});var Wl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},zm=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new ie("Expected a control sequence",o);return n},e8=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},Sm=(o,n,r,s)=>{var a=o.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,a,s)};fe({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var s=n.fetch();if(Wl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Wl[s.text]),Pe(n.parseFunction(),"internal");throw new ie("Invalid token after macro prefix",s)}});fe({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=n.gullet.popToken(),a=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new ie("Expected a control sequence",s);for(var u=0,d,h=[[]];n.gullet.future().text!=="{";)if(s=n.gullet.popToken(),s.text==="#"){if(n.gullet.future().text==="{"){d=n.gullet.future(),h[u].push("{");break}if(s=n.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new ie('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==u+1)throw new ie('Argument number "'+s.text+'" out of order');u++,h.push([])}else{if(s.text==="EOF")throw new ie("Expected a macro definition");h[u].push(s.text)}var{tokens:g}=n.gullet.consumeArg();return d&&g.unshift(d),(r==="\\edef"||r==="\\xdef")&&(g=n.gullet.expandTokens(g),g.reverse()),n.gullet.macros.set(a,{tokens:g,numArgs:u,delimiters:h},r===Wl[r]),{type:"internal",mode:n.mode}}});fe({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=zm(n.gullet.popToken());n.gullet.consumeSpaces();var a=e8(n);return Sm(n,s,a,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});fe({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=zm(n.gullet.popToken()),a=n.gullet.popToken(),u=n.gullet.popToken();return Sm(n,s,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(a),{type:"internal",mode:n.mode}}});var qo=function(n,r,s){var a=Xe.math[n]&&Xe.math[n].replace,u=tu(a||n,r,s);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},uu=function(n,r,s,a){var u=s.havingBaseStyle(r),d=te(a.concat(u.sizingClasses(s)),[n],s),h=u.sizeMultiplier/s.sizeMultiplier;return d.height*=h,d.depth*=h,d.maxFontSize=u.sizeMultiplier,d},Tm=function(n,r,s){var a=r.havingBaseStyle(s),u=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=ce(u),n.height-=u,n.depth+=u},t8=function(n,r,s,a,u,d){var h=Et(n,"Main-Regular",u,a),g=uu(h,r,a,d);return Tm(g,a,r),g},n8=function(n,r,s,a){return Et(n,"Size"+r+"-Regular",s,a)},jm=function(n,r,s,a,u,d){var h=n8(n,r,u,a),g=uu(te(["delimsizing","size"+r],[h],a),Ee.TEXT,a,d);return s&&Tm(g,a,Ee.TEXT),g},zl=function(n,r,s){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var u=te(["delimsizinginner",a],[te([],[Et(n,r,s)])]);return{type:"elem",elem:u}},Sl=function(n,r,s){var a=En["Size4-Regular"][n.charCodeAt(0)]?En["Size4-Regular"][n.charCodeAt(0)][4]:En["Size1-Regular"][n.charCodeAt(0)][4],u=new Ar("inner",vv(n,Math.round(1e3*r))),d=new Xn([u],{width:ce(a),height:ce(r),style:"width:"+ce(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),h=Cr([],[d],s);return h.height=r,h.style.height=ce(r),h.style.width=ce(a),{type:"elem",elem:h}},Gl=.008,ls={type:"kern",size:-1*Gl},r8=new Set(["|","\\lvert","\\rvert","\\vert"]),i8=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),qm=function(n,r,s,a,u,d){var h,g,x,w,$="",z=0;h=x=w=n,g=null;var k="Size1-Regular";n==="\\uparrow"?x=w="⏐":n==="\\Uparrow"?x=w="‖":n==="\\downarrow"?h=x="⏐":n==="\\Downarrow"?h=x="‖":n==="\\updownarrow"?(h="\\uparrow",x="⏐",w="\\downarrow"):n==="\\Updownarrow"?(h="\\Uparrow",x="‖",w="\\Downarrow"):r8.has(n)?(x="∣",$="vert",z=333):i8.has(n)?(x="∥",$="doublevert",z=556):n==="["||n==="\\lbrack"?(h="⎡",x="⎢",w="⎣",k="Size4-Regular",$="lbrack",z=667):n==="]"||n==="\\rbrack"?(h="⎤",x="⎥",w="⎦",k="Size4-Regular",$="rbrack",z=667):n==="\\lfloor"||n==="⌊"?(x=h="⎢",w="⎣",k="Size4-Regular",$="lfloor",z=667):n==="\\lceil"||n==="⌈"?(h="⎡",x=w="⎢",k="Size4-Regular",$="lceil",z=667):n==="\\rfloor"||n==="⌋"?(x=h="⎥",w="⎦",k="Size4-Regular",$="rfloor",z=667):n==="\\rceil"||n==="⌉"?(h="⎤",x=w="⎥",k="Size4-Regular",$="rceil",z=667):n==="("||n==="\\lparen"?(h="⎛",x="⎜",w="⎝",k="Size4-Regular",$="lparen",z=875):n===")"||n==="\\rparen"?(h="⎞",x="⎟",w="⎠",k="Size4-Regular",$="rparen",z=875):n==="\\{"||n==="\\lbrace"?(h="⎧",g="⎨",w="⎩",x="⎪",k="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(h="⎫",g="⎬",w="⎭",x="⎪",k="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(h="⎧",w="⎩",x="⎪",k="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(h="⎫",w="⎭",x="⎪",k="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(h="⎧",w="⎭",x="⎪",k="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(h="⎫",w="⎩",x="⎪",k="Size4-Regular");var D=qo(h,k,u),q=D.height+D.depth,B=qo(x,k,u),E=B.height+B.depth,I=qo(w,k,u),W=I.height+I.depth,F=0,O=1;if(g!==null){var Y=qo(g,k,u);F=Y.height+Y.depth,O=2}var P=q+W+F,V=Math.max(0,Math.ceil((r-P)/(O*E))),ne=P+V*O*E,me=a.fontMetrics().axisHeight;s&&(me*=a.sizeMultiplier);var se=ne/2-me,ae=[];if($.length>0){var ve=ne-q-W,xe=Math.round(ne*1e3),Fe=yv($,Math.round(ve*1e3)),Be=new Ar($,Fe),Le=(z/1e3).toFixed(3)+"em",ue=(xe/1e3).toFixed(3)+"em",we=new Xn([Be],{width:Le,height:ue,viewBox:"0 0 "+z+" "+xe}),de=Cr([],[we],a);de.height=xe/1e3,de.style.width=Le,de.style.height=ue,ae.push({type:"elem",elem:de})}else{if(ae.push(zl(w,k,u)),ae.push(ls),g===null){var A=ne-q-W+2*Gl;ae.push(Sl(x,A,a))}else{var Q=(ne-q-W-F)/2+2*Gl;ae.push(Sl(x,Q,a)),ae.push(ls),ae.push(zl(g,k,u)),ae.push(ls),ae.push(Sl(x,Q,a))}ae.push(ls),ae.push(zl(h,k,u))}var $e=a.havingBaseStyle(Ee.TEXT),je=Ke({positionType:"bottom",positionData:se,children:ae});return uu(te(["delimsizing","mult"],[je],$e),Ee.TEXT,a,d)},Tl=80,jl=.08,ql=function(n,r,s,a,u){var d=gv(n,a,s),h=new Ar(n,d),g=new Xn([h],{width:"400em",height:ce(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Cr(["hide-tail"],[g],u)},o8=function(n,r){var s=r.havingBaseSizing(),a=Em("\\surd",n*s.sizeMultiplier,Rm,s),u=s.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),h,g=0,x=0,w=0,$;return a.type==="small"?(w=1e3+1e3*d+Tl,n<1?u=1:n<1.4&&(u=.7),g=(1+d+jl)/u,x=(1+d)/u,h=ql("sqrtMain",g,w,d,r),h.style.minWidth="0.853em",$=.833/u):a.type==="large"?(w=(1e3+Tl)*Ao[a.size],x=(Ao[a.size]+d)/u,g=(Ao[a.size]+d+jl)/u,h=ql("sqrtSize"+a.size,g,w,d,r),h.style.minWidth="1.02em",$=1/u):(g=n+d+jl,x=n+d,w=Math.floor(1e3*n+d)+Tl,h=ql("sqrtTall",g,w,d,r),h.style.minWidth="0.742em",$=1.056),h.height=x,h.style.height=ce(g),{span:h,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*u}},Mm=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),s8=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Am=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Ao=[0,1.2,1.8,2.4,3],Cm=function(n,r,s,a,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),Mm.has(n)||Am.has(n))return jm(n,r,!1,s,a,u);if(s8.has(n))return qm(n,Ao[r],!1,s,a,u);throw new ie("Illegal delimiter: '"+n+"'")},a8=[{type:"small",style:Ee.SCRIPTSCRIPT},{type:"small",style:Ee.SCRIPT},{type:"small",style:Ee.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],l8=[{type:"small",style:Ee.SCRIPTSCRIPT},{type:"small",style:Ee.SCRIPT},{type:"small",style:Ee.TEXT},{type:"stack"}],Rm=[{type:"small",style:Ee.SCRIPTSCRIPT},{type:"small",style:Ee.SCRIPT},{type:"small",style:Ee.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],u8=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},Em=function(n,r,s,a){for(var u=Math.min(2,3-a.style.size),d=u;d<s.length&&s[d].type!=="stack";d++){var h=qo(n,u8(s[d]),"math"),g=h.height+h.depth;if(s[d].type==="small"){var x=a.havingBaseStyle(s[d].style);g*=x.sizeMultiplier}if(g>r)return s[d]}return s[s.length-1]},Ul=function(n,r,s,a,u,d){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var h;Am.has(n)?h=a8:Mm.has(n)?h=Rm:h=l8;var g=Em(n,r,h,a);return g.type==="small"?t8(n,g.style,s,a,u,d):g.type==="large"?jm(n,g.size,s,a,u,d):qm(n,r,s,a,u,d)},Ml=function(n,r,s,a,u,d){var h=a.fontMetrics().axisHeight*a.sizeMultiplier,g=901,x=5/a.fontMetrics().ptPerEm,w=Math.max(r-h,s+h),$=Math.max(w/500*g,2*w-x);return Ul(n,$,!0,a,u,d)},bd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},c8=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ss(o,n){var r=ks(o);if(r&&c8.has(r.text))return r;throw r?new ie("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new ie("Invalid delimiter type '"+o.type+"'",o)}fe({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=Ss(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:bd[o.funcName].size,mclass:bd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?te([o.mclass]):Cm(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(fn(o.delim,o.mode));var r=new oe("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=ce(Ao[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function wd(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}fe({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ie("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:Ss(n[0],o).text,color:r}}});fe({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=Ss(n[0],o),s=o.parser;++s.leftrightDepth;var a=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var u=Pe(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:a,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{wd(o);for(var r=xt(o.body,n,!0,["mopen","mclose"]),s=0,a=0,u=!1,d=0;d<r.length;d++)r[d].isMiddle?u=!0:(s=Math.max(r[d].height,s),a=Math.max(r[d].depth,a));s*=n.sizeMultiplier,a*=n.sizeMultiplier;var h;if(o.left==="."?h=Eo(n,["mopen"]):h=Ml(o.left,s,a,n,o.mode,["mopen"]),r.unshift(h),u)for(var g=1;g<r.length;g++){var x=r[g],w=x.isMiddle;w&&(r[g]=Ml(w.delim,s,a,w.options,o.mode,[]))}var $;if(o.right===".")$=Eo(n,["mclose"]);else{var z=o.rightColor?n.withColor(o.rightColor):n;$=Ml(o.right,s,a,z,o.mode,["mclose"])}return r.push($),te(["minner"],r,n)},mathmlBuilder:(o,n)=>{wd(o);var r=Ut(o.body,n);if(o.left!=="."){var s=new oe("mo",[fn(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var a=new oe("mo",[fn(o.right,o.mode)]);a.setAttribute("fence","true"),o.rightColor&&a.setAttribute("mathcolor",o.rightColor),r.push(a)}return ou(r)}});fe({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=Ss(n[0],o);if(!o.parser.leftrightDepth)throw new ie("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=Eo(n,[]);else{r=Cm(o.delim,1,n,o.mode,[]);var s={delim:o.delim,options:n};r.isMiddle=s}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?fn("|","text"):fn(o.delim,o.mode),s=new oe("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var cu=(o,n)=>{var r=Pi(Ue(o.body,n),n),s=o.label.slice(1),a=n.sizeMultiplier,u,d=0,h=Jn(o.body);if(s==="sout")u=te(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/a,d=-.5*n.fontMetrics().xHeight;else if(s==="phase"){var g=at({number:.6,unit:"pt"},n),x=at({number:.35,unit:"ex"},n),w=n.havingBaseSizing();a=a/w.sizeMultiplier;var $=r.height+r.depth+g+x;r.style.paddingLeft=ce($/2+g);var z=Math.floor(1e3*$*a),k=pv(z),D=new Xn([new Ar("phase",k)],{width:"400em",height:ce(z/1e3),viewBox:"0 0 400000 "+z,preserveAspectRatio:"xMinYMin slice"});u=Cr(["hide-tail"],[D],n),u.style.height=ce($),d=r.depth+g+x}else{/cancel/.test(s)?h||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var q=0,B=0,E=0;/box/.test(s)?(E=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),q=n.fontMetrics().fboxsep+(s==="colorbox"?0:E),B=q):s==="angl"?(E=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),q=4*E,B=Math.max(0,.25-r.depth)):(q=h?.2:0,B=q),u=Kv(r,s,q,B,n),/fbox|boxed|fcolorbox/.test(s)?(u.style.borderStyle="solid",u.style.borderWidth=ce(E)):s==="angl"&&E!==.049&&(u.style.borderTopWidth=ce(E),u.style.borderRightWidth=ce(E)),d=r.depth+B,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var I;if(o.backgroundColor)I=Ke({positionType:"individualShift",children:[{type:"elem",elem:u,shift:d},{type:"elem",elem:r,shift:0}]});else{var W=/cancel|phase/.test(s)?["svg-align"]:[];I=Ke({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:d,wrapperClasses:W}]})}return/cancel/.test(s)&&(I.height=r.height,I.depth=r.depth),/cancel/.test(s)&&!h?te(["mord","cancel-lap"],[I],n):te(["mord"],[I],n)},du=(o,n)=>{var r=0,s=new oe(o.label.includes("colorbox")?"mpadded":"menclose",[Ye(o.body,n)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var a=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);s.setAttribute("style","border: "+a+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};fe({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:s,funcName:a}=o,u=Pe(n[0],"color-token").color,d=n[1];return{type:"enclose",mode:s.mode,label:a,backgroundColor:u,body:d}},htmlBuilder:cu,mathmlBuilder:du});fe({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:s,funcName:a}=o,u=Pe(n[0],"color-token").color,d=Pe(n[1],"color-token").color,h=n[2];return{type:"enclose",mode:s.mode,label:a,backgroundColor:d,borderColor:u,body:h}},htmlBuilder:cu,mathmlBuilder:du});fe({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});fe({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];return{type:"enclose",mode:r.mode,label:s,body:a}},htmlBuilder:cu,mathmlBuilder:du});fe({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var Dm={};function Dn(o){for(var{type:n,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:d}=o,h={type:n,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},g=0;g<r.length;++g)Dm[r[g]]=h;u&&(gs[n]=u),d&&(vs[n]=d)}var Pm={};function _(o,n){Pm[o]=n}function _d(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var Ts=o=>{var n=o.parser.settings;if(!n.displayMode)throw new ie("{"+o.envName+"} can be used only in display mode.")},d8=new Set(["gather","gather*"]);function mu(o){if(!o.includes("ed"))return!o.includes("*")}function Er(o,n,r){var{hskipBeforeAndAfter:s,addJot:a,cols:u,arraystretch:d,colSeparationType:h,autoTag:g,singleRow:x,emptySingleRow:w,maxNumCols:$,leqno:z}=n;if(o.gullet.beginGroup(),x||o.gullet.macros.set("\\cr","\\\\\\relax"),!d){var k=o.gullet.expandMacroAsText("\\arraystretch");if(k==null)d=1;else if(d=parseFloat(k),!d||d<0)throw new ie("Invalid \\arraystretch: "+k)}o.gullet.beginGroup();var D=[],q=[D],B=[],E=[],I=g!=null?[]:void 0;function W(){g&&o.gullet.macros.set("\\@eqnsw","1",!0)}function F(){I&&(o.gullet.macros.get("\\df@tag")?(I.push(o.subparse([new Jt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):I.push(!!g&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(W(),E.push(_d(o));;){var O=o.parseExpression(!1,x?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),O={type:"ordgroup",mode:o.mode,body:O},r&&(O={type:"styling",mode:o.mode,style:r,body:[O]}),D.push(O);var Y=o.fetch().text;if(Y==="&"){if($&&D.length===$){if(x||h)throw new ie("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(Y==="\\end"){F(),D.length===1&&O.type==="styling"&&O.body[0].body.length===0&&(q.length>1||!w)&&q.pop(),E.length<q.length+1&&E.push([]);break}else if(Y==="\\\\"){o.consume();var P=void 0;o.gullet.future().text!==" "&&(P=o.parseSizeGroup(!0)),B.push(P?P.value:null),F(),E.push(_d(o)),D=[],q.push(D),W()}else throw new ie("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:a,arraystretch:d,body:q,cols:u,rowGaps:B,hskipBeforeAndAfter:s,hLinesBeforeRow:E,colSeparationType:h,tags:I,leqno:z}}function fu(o){return o.slice(0,1)==="d"?"display":"text"}var Pn=function(n,r){var s,a,u=n.body.length,d=n.hLinesBeforeRow,h=0,g=new Array(u),x=[],w=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,z=5*$;if(n.colSeparationType&&n.colSeparationType==="small"){var k=r.havingStyle(Ee.SCRIPT).sizeMultiplier;z=.2778*(k/r.sizeMultiplier)}var D=n.colSeparationType==="CD"?at({number:3,unit:"ex"},r):12*$,q=3*$,B=n.arraystretch*D,E=.7*B,I=.3*B,W=0;function F(Vt){for(var Bt=0;Bt<Vt.length;++Bt)Bt>0&&(W+=.25),x.push({pos:W,isDashed:Vt[Bt]})}for(F(d[0]),s=0;s<n.body.length;++s){var O=n.body[s],Y=E,P=I;h<O.length&&(h=O.length);var V=new Array(O.length);for(a=0;a<O.length;++a){var ne=Ue(O[a],r);P<ne.depth&&(P=ne.depth),Y<ne.height&&(Y=ne.height),V[a]=ne}var me=n.rowGaps[s],se=0;me&&(se=at(me,r),se>0&&(se+=I,P<se&&(P=se),se=0)),n.addJot&&(P+=q),V.height=Y,V.depth=P,W+=Y,V.pos=W,W+=P+se,g[s]=V,F(d[s+1])}var ae=W/2+r.fontMetrics().axisHeight,ve=n.cols||[],xe=[],Fe,Be,Le=[];if(n.tags&&n.tags.some(Vt=>Vt))for(s=0;s<u;++s){var ue=g[s],we=ue.pos-ae,de=n.tags[s],A=void 0;de===!0?A=te(["eqn-num"],[],r):de===!1?A=te([],[],r):A=te([],xt(de,r,!0),r),A.depth=ue.depth,A.height=ue.height,Le.push({type:"elem",elem:A,shift:we})}for(a=0,Be=0;a<h||Be<ve.length;++a,++Be){for(var Q=ve[Be]||{},$e=!0;Q.type==="separator";){if($e||(Fe=te(["arraycolsep"],[]),Fe.style.width=ce(r.fontMetrics().doubleRuleSep),xe.push(Fe)),Q.separator==="|"||Q.separator===":"){var je=Q.separator==="|"?"solid":"dashed",Se=te(["vertical-separator"],[],r);Se.style.height=ce(W),Se.style.borderRightWidth=ce(w),Se.style.borderRightStyle=je,Se.style.margin="0 "+ce(-w/2);var De=W-ae;De&&(Se.style.verticalAlign=ce(-De)),xe.push(Se)}else throw new ie("Invalid separator type: "+Q.separator);Be++,Q=ve[Be]||{},$e=!1}if(!(a>=h)){var he=void 0;if(a>0||n.hskipBeforeAndAfter){var Te;he=(Te=Q.pregap)!=null?Te:z,he!==0&&(Fe=te(["arraycolsep"],[]),Fe.style.width=ce(he),xe.push(Fe))}var be=[];for(s=0;s<u;++s){var He=g[s],bt=He[a];if(bt){var Nn=He.pos-ae;bt.depth=He.depth,bt.height=He.height,be.push({type:"elem",elem:bt,shift:Nn})}}if(be=Ke({positionType:"individualShift",children:be}),be=te(["col-align-"+(Q.align||"c")],[be]),xe.push(be),a<h-1||n.hskipBeforeAndAfter){var tn;he=(tn=Q.postgap)!=null?tn:z,he!==0&&(Fe=te(["arraycolsep"],[]),Fe.style.width=ce(he),xe.push(Fe))}}}if(g=te(["mtable"],xe),x.length>0){for(var Dr=Di("hline",r,w),Pr=Di("hdashline",r,w),nr=[{type:"elem",elem:g,shift:0}];x.length>0;){var rr=x.pop(),ir=rr.pos-ae;rr.isDashed?nr.push({type:"elem",elem:Pr,shift:ir}):nr.push({type:"elem",elem:Dr,shift:ir})}g=Ke({positionType:"individualShift",children:nr})}if(Le.length===0)return te(["mord"],[g],r);var kn=Ke({positionType:"individualShift",children:Le});return kn=te(["tag"],[kn],r),tr([g,kn])},m8={c:"center ",l:"left ",r:"right "},Bn=function(n,r){for(var s=[],a=new oe("mtd",[],["mtr-glue"]),u=new oe("mtd",[],["mml-eqn-num"]),d=0;d<n.body.length;d++){for(var h=n.body[d],g=[],x=0;x<h.length;x++)g.push(new oe("mtd",[Ye(h[x],r)]));n.tags&&n.tags[d]&&(g.unshift(a),g.push(a),n.leqno?g.unshift(u):g.push(u)),s.push(new oe("mtr",g))}var w=new oe("mtable",s),$=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);w.setAttribute("rowspacing",ce($));var z="",k="";if(n.cols&&n.cols.length>0){var D=n.cols,q="",B=!1,E=0,I=D.length;D[0].type==="separator"&&(z+="top ",E=1),D[D.length-1].type==="separator"&&(z+="bottom ",I-=1);for(var W=E;W<I;W++)D[W].type==="align"?(k+=m8[D[W].align],B&&(q+="none "),B=!0):D[W].type==="separator"&&B&&(q+=D[W].separator==="|"?"solid ":"dashed ",B=!1);w.setAttribute("columnalign",k.trim()),/[sd]/.test(q)&&w.setAttribute("columnlines",q.trim())}if(n.colSeparationType==="align"){for(var F=n.cols||[],O="",Y=1;Y<F.length;Y++)O+=Y%2?"0em ":"1em ";w.setAttribute("columnspacing",O.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?w.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?w.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?w.setAttribute("columnspacing","0.5em"):w.setAttribute("columnspacing","1em");var P="",V=n.hLinesBeforeRow;z+=V[0].length>0?"left ":"",z+=V[V.length-1].length>0?"right ":"";for(var ne=1;ne<V.length-1;ne++)P+=V[ne].length===0?"none ":V[ne][0]?"dashed ":"solid ";return/[sd]/.test(P)&&w.setAttribute("rowlines",P.trim()),z!==""&&(w=new oe("menclose",[w]),w.setAttribute("notation",z.trim())),n.arraystretch&&n.arraystretch<1&&(w=new oe("mstyle",[w]),w.setAttribute("scriptlevel","1")),w},Bm=function(n,r){n.envName.includes("ed")||Ts(n);var s=[],a=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",d=Er(n.parser,{cols:s,addJot:!0,autoTag:u?void 0:mu(n.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),h,g=0,x={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var w="",$=0;$<r[0].body.length;$++){var z=Pe(r[0].body[$],"textord");w+=z.text}h=Number(w),g=h*2}var k=!g;d.body.forEach(function(E){for(var I=1;I<E.length;I+=2){var W=Pe(E[I],"styling"),F=Pe(W.body[0],"ordgroup");F.body.unshift(x)}if(k)g<E.length&&(g=E.length);else{var O=E.length/2;if(h<O)throw new ie("Too many math in a row: "+("expected "+h+", but got "+O),E[0])}});for(var D=0;D<g;++D){var q="r",B=0;D%2===1?q="l":D>0&&k&&(B=1),s[D]={type:"align",align:q,pregap:B,postgap:0}}return d.colSeparationType=k?"align":"alignat",d};Dn({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=ks(n[0]),s=r?[n[0]]:Pe(n[0],"ordgroup").body,a=s.map(function(d){var h=au(d),g=h.text;if("lcr".includes(g))return{type:"align",align:g};if(g==="|")return{type:"separator",separator:"|"};if(g===":")return{type:"separator",separator:":"};throw new ie("Unknown column alignment: "+g,d)}),u={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Er(o.parser,u,fu(o.envName))},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var a=o.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new ie("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),s.cols=[{type:"align",align:r}]}}var u=Er(o.parser,s,fu(o.envName)),d=Math.max(0,...u.body.map(h=>h.length));return u.cols=new Array(d).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=Er(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=ks(n[0]),s=r?[n[0]]:Pe(n[0],"ordgroup").body,a=s.map(function(d){var h=au(d),g=h.text;if("lc".includes(g))return{type:"align",align:g};throw new ie("Unknown column alignment: "+g,d)});if(a.length>1)throw new ie("{subarray} can contain only one column");var u={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=Er(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new ie("{subarray} can contain only one column");return u},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Er(o.parser,n,fu(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Bm,htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){d8.has(o.envName)&&Ts(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:mu(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Er(o.parser,n,"display")},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Bm,htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){Ts(o);var n={autoTag:mu(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Er(o.parser,n,"display")},htmlBuilder:Pn,mathmlBuilder:Bn});Dn({type:"array",names:["CD"],props:{numArgs:0},handler(o){return Ts(o),Jv(o.parser)},htmlBuilder:Pn,mathmlBuilder:Bn});_("\\nonumber","\\gdef\\@eqnsw{0}");_("\\notag","\\nonumber");fe({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new ie(o.funcName+" valid only within array environment")}});var $d=Dm;fe({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];if(a.type!=="ordgroup")throw new ie("Invalid environment name",a);for(var u="",d=0;d<a.body.length;++d)u+=Pe(a.body[d],"textord").text;if(s==="\\begin"){if(!$d.hasOwnProperty(u))throw new ie("No such environment: "+u,a);var h=$d[u],{args:g,optArgs:x}=r.parseArguments("\\begin{"+u+"}",h),w={mode:r.mode,envName:u,parser:r},$=h.handler(w,g,x);r.expect("\\end",!1);var z=r.nextToken,k=Pe(r.parseFunction(),"environment");if(k.name!==u)throw new ie("Mismatch: \\begin{"+u+"} matched by \\end{"+k.name+"}",z);return $}return{type:"environment",mode:r.mode,name:u,nameGroup:a}}});var Nm=(o,n)=>{var r=o.font,s=n.withFont(r);return Ue(o.body,s)},Im=(o,n)=>{var r=o.font,s=n.withFont(r);return Ye(o.body,s)},kd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};fe({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=ys(n[0]),u=s;return u in kd&&(u=kd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:a}},htmlBuilder:Nm,mathmlBuilder:Im});fe({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"mclass",mode:r.mode,mclass:zs(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:Jn(s)}}});fe({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,breakOnTokenText:a}=o,{mode:u}=r,d=r.parseExpression(!0,a),h="math"+s.slice(1);return{type:"font",mode:u,font:h,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:Nm,mathmlBuilder:Im});var f8=(o,n)=>{var r=n.style,s=r.fracNum(),a=r.fracDen(),u;u=n.havingStyle(s);var d=Ue(o.numer,u,n);if(o.continued){var h=8.5/n.fontMetrics().ptPerEm,g=3.5/n.fontMetrics().ptPerEm;d.height=d.height<h?h:d.height,d.depth=d.depth<g?g:d.depth}u=n.havingStyle(a);var x=Ue(o.denom,u,n),w,$,z;o.hasBarLine?(o.barSize?($=at(o.barSize,n),w=Di("frac-line",n,$)):w=Di("frac-line",n),$=w.height,z=w.height):(w=null,$=0,z=n.fontMetrics().defaultRuleThickness);var k,D,q;r.size===Ee.DISPLAY.size?(k=n.fontMetrics().num1,$>0?D=3*z:D=7*z,q=n.fontMetrics().denom1):($>0?(k=n.fontMetrics().num2,D=z):(k=n.fontMetrics().num3,D=3*z),q=n.fontMetrics().denom2);var B;if(w){var I=n.fontMetrics().axisHeight;k-d.depth-(I+.5*$)<D&&(k+=D-(k-d.depth-(I+.5*$))),I-.5*$-(x.height-q)<D&&(q+=D-(I-.5*$-(x.height-q)));var W=-(I-.5*$);B=Ke({positionType:"individualShift",children:[{type:"elem",elem:x,shift:q},{type:"elem",elem:w,shift:W},{type:"elem",elem:d,shift:-k}]})}else{var E=k-d.depth-(x.height-q);E<D&&(k+=.5*(D-E),q+=.5*(D-E)),B=Ke({positionType:"individualShift",children:[{type:"elem",elem:x,shift:q},{type:"elem",elem:d,shift:-k}]})}u=n.havingStyle(r),B.height*=u.sizeMultiplier/n.sizeMultiplier,B.depth*=u.sizeMultiplier/n.sizeMultiplier;var F;r.size===Ee.DISPLAY.size?F=n.fontMetrics().delim1:r.size===Ee.SCRIPTSCRIPT.size?F=n.havingStyle(Ee.SCRIPT).fontMetrics().delim2:F=n.fontMetrics().delim2;var O,Y;return o.leftDelim==null?O=Eo(n,["mopen"]):O=Ul(o.leftDelim,F,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?Y=te([]):o.rightDelim==null?Y=Eo(n,["mclose"]):Y=Ul(o.rightDelim,F,!0,n.havingStyle(r),o.mode,["mclose"]),te(["mord"].concat(u.sizingClasses(n)),[O,te(["mfrac"],[B]),Y],n)},p8=(o,n)=>{var r=new oe("mfrac",[Ye(o.numer,n),Ye(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=at(o.barSize,n);r.setAttribute("linethickness",ce(s))}if(o.leftDelim!=null||o.rightDelim!=null){var a=[];if(o.leftDelim!=null){var u=new oe("mo",[new ht(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),a.push(u)}if(a.push(r),o.rightDelim!=null){var d=new oe("mo",[new ht(o.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),a.push(d)}return ou(a)}return r},Fm=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};fe({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0],u=n[1],d,h=null,g=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,h="(",g=")";break;case"\\\\bracefrac":d=!1,h="\\{",g="\\}";break;case"\\\\brackfrac":d=!1,h="[",g="]";break;default:throw new Error("Unrecognized genfrac command")}var x=s==="\\cfrac",w=null;return x||s.startsWith("\\d")?w="display":s.startsWith("\\t")&&(w="text"),Fm({type:"genfrac",mode:r.mode,numer:a,denom:u,continued:x,hasBarLine:d,leftDelim:h,rightDelim:g,barSize:null},w)},htmlBuilder:f8,mathmlBuilder:p8});fe({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:s}=o,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:a,token:s}}});var zd=["display","text","script","scriptscript"],Sd=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};fe({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,s=n[4],a=n[5],u=ys(n[0]),d=u.type==="atom"&&u.family==="open"?Sd(u.text):null,h=ys(n[1]),g=h.type==="atom"&&h.family==="close"?Sd(h.text):null,x=Pe(n[2],"size"),w,$=null;x.isBlank?w=!0:($=x.value,w=$.number>0);var z=null,k=n[3];if(k.type==="ordgroup"){if(k.body.length>0){var D=Pe(k.body[0],"textord");z=zd[Number(D.text)]}}else k=Pe(k,"textord"),z=zd[Number(k.text)];return Fm({type:"genfrac",mode:r.mode,numer:s,denom:a,continued:!1,hasBarLine:w,barSize:$,leftDelim:d,rightDelim:g},z)}});fe({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:s,token:a}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Pe(n[0],"size").value,token:a}}});fe({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0],u=Pe(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var d=n[2],h=u.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:d,continued:!1,hasBarLine:h,barSize:u,leftDelim:null,rightDelim:null}}});var Lm=(o,n)=>{var r=n.style,s,a;o.type==="supsub"?(s=o.sup?Ue(o.sup,n.havingStyle(r.sup()),n):Ue(o.sub,n.havingStyle(r.sub()),n),a=Pe(o.base,"horizBrace")):a=Pe(o,"horizBrace");var u=Ue(a.base,n.havingBaseStyle(Ee.DISPLAY)),d=$s(a,n),h;if(a.isOver?(h=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:d}]}),h.children[0].children[0].children[1].classes.push("svg-align")):(h=Ke({positionType:"bottom",positionData:u.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:u}]}),h.children[0].children[0].children[0].classes.push("svg-align")),s){var g=te(["mord",a.isOver?"mover":"munder"],[h],n);a.isOver?h=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:g},{type:"kern",size:.2},{type:"elem",elem:s}]}):h=Ke({positionType:"bottom",positionData:g.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:g}]})}return te(["mord",a.isOver?"mover":"munder"],[h],n)},h8=(o,n)=>{var r=_s(o.label);return new oe(o.isOver?"mover":"munder",[Ye(o.base,n),r])};fe({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:n[0]}},htmlBuilder:Lm,mathmlBuilder:h8});fe({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[1],a=Pe(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:mt(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1);return Cv(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=Rr(o.body,n);return r instanceof oe||(r=new oe("mrow",[r])),r.setAttribute("href",o.href),r}});fe({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=Pe(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var a=[],u=0;u<s.length;u++){var d=s[u];d==="~"&&(d="\\textasciitilde"),a.push({type:"textord",mode:"text",text:d})}var h={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:s,body:mt(h)}}});fe({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:mt(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!1);return tr(r)},mathmlBuilder(o,n){return new oe("mrow",Ut(o.body,n))}});fe({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,token:a}=o,u=Pe(n[0],"raw").string,d=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var h,g={};switch(s){case"\\htmlClass":g.class=u,h={command:"\\htmlClass",class:u};break;case"\\htmlId":g.id=u,h={command:"\\htmlId",id:u};break;case"\\htmlStyle":g.style=u,h={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var x=u.split(","),w=0;w<x.length;w++){var $=x[w],z=$.indexOf("=");if(z<0)throw new ie("\\htmlData key/value '"+$+"' missing equals sign");var k=$.slice(0,z),D=$.slice(z+1);g["data-"+k.trim()]=D}h={command:"\\htmlData",attributes:g};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(h)?{type:"html",mode:r.mode,attributes:g,body:mt(d)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var a=te(s,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&a.setAttribute(u,o.attributes[u]);return a},mathmlBuilder:(o,n)=>Rr(o.body,n)});fe({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:mt(n[0]),mathml:mt(n[1])}},htmlBuilder:(o,n)=>{var r=xt(o.html,n,!1);return tr(r)},mathmlBuilder:(o,n)=>Rr(o.mathml,n)});var Al=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new ie("Invalid size: '"+n+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!om(s))throw new ie("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};fe({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:s}=o,a={number:0,unit:"em"},u={number:.9,unit:"em"},d={number:0,unit:"em"},h="";if(r[0])for(var g=Pe(r[0],"raw").string,x=g.split(","),w=0;w<x.length;w++){var $=x[w].split("=");if($.length===2){var z=$[1].trim();switch($[0].trim()){case"alt":h=z;break;case"width":a=Al(z);break;case"height":u=Al(z);break;case"totalheight":d=Al(z);break;default:throw new ie("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var k=Pe(n[0],"url").url;return h===""&&(h=k,h=h.replace(/^.*[\\/]/,""),h=h.substring(0,h.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:k})?{type:"includegraphics",mode:s.mode,alt:h,width:a,height:u,totalheight:d,src:k}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=at(o.height,n),s=0;o.totalheight.number>0&&(s=at(o.totalheight,n)-r);var a=0;o.width.number>0&&(a=at(o.width,n));var u={height:ce(r+s)};a>0&&(u.width=ce(a)),s>0&&(u.verticalAlign=ce(-s));var d=new kv(o.src,o.alt,u);return d.height=r,d.depth=s,d},mathmlBuilder:(o,n)=>{var r=new oe("mglyph",[]);r.setAttribute("alt",o.alt);var s=at(o.height,n),a=0;if(o.totalheight.number>0&&(a=at(o.totalheight,n)-s,r.setAttribute("valign",ce(-a))),r.setAttribute("height",ce(s+a)),o.width.number>0){var u=at(o.width,n);r.setAttribute("width",ce(u))}return r.setAttribute("src",o.src),r}});fe({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,a=Pe(n[0],"size");if(r.settings.strict){var u=s[1]==="m",d=a.value.unit==="mu";u?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(o,n){return dm(o.dimension,n)},mathmlBuilder(o,n){var r=at(o.dimension,n);return new vm(r)}});fe({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:a}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=te([],[Ue(o.body,n)]),r=te(["inner"],[r],n)):r=te(["inner"],[Ue(o.body,n)]);var s=te(["fix"],[]),a=te([o.alignment],[r,s],n),u=te(["strut"]);return u.style.height=ce(a.height+a.depth),a.depth&&(u.style.verticalAlign=ce(-a.depth)),a.children.unshift(u),a=te(["thinbox"],[a],n),te(["mord","vbox"],[a],n)},mathmlBuilder:(o,n)=>{var r=new oe("mpadded",[Ye(o.body,n)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});fe({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:s}=o,a=s.mode;s.switchMode("math");var u=r==="\\("?"\\)":"$",d=s.parseExpression(!1,u);return s.expect(u),s.switchMode(a),{type:"styling",mode:s.mode,style:"text",body:d}}});fe({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new ie("Mismatched "+o.funcName)}});var Td=(o,n)=>{switch(n.style.size){case Ee.DISPLAY.size:return o.display;case Ee.TEXT.size:return o.text;case Ee.SCRIPT.size:return o.script;case Ee.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};fe({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:mt(n[0]),text:mt(n[1]),script:mt(n[2]),scriptscript:mt(n[3])}},htmlBuilder:(o,n)=>{var r=Td(o,n),s=xt(r,n,!1);return tr(s)},mathmlBuilder:(o,n)=>{var r=Td(o,n);return Rr(r,n)}});var Om=(o,n,r,s,a,u,d)=>{o=te([],[o]);var h=r&&Jn(r),g,x;if(n){var w=Ue(n,s.havingStyle(a.sup()),s);x={elem:w,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-w.depth)}}if(r){var $=Ue(r,s.havingStyle(a.sub()),s);g={elem:$,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-$.height)}}var z;if(x&&g){var k=s.fontMetrics().bigOpSpacing5+g.elem.height+g.elem.depth+g.kern+o.depth+d;z=Ke({positionType:"bottom",positionData:k,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:ce(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:ce(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(g){var D=o.height-d;z=Ke({positionType:"top",positionData:D,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:ce(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o}]})}else if(x){var q=o.depth+d;z=Ke({positionType:"bottom",positionData:q,children:[{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:ce(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var B=[z];if(g&&u!==0&&!h){var E=te(["mspace"],[],s);E.style.marginRight=ce(u),B.unshift(E)}return te(["mop","op-limits"],B,s)},Hm=new Set(["\\smallint"]),Ni=(o,n)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Pe(o.base,"op"),a=!0):u=Pe(o,"op");var d=n.style,h=!1;d.size===Ee.DISPLAY.size&&u.symbol&&!Hm.has(u.name)&&(h=!0);var g;if(u.symbol){var x=h?"Size2-Regular":"Size1-Regular",w="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(w=u.name.slice(1),u.name=w==="oiint"?"\\iint":"\\iiint"),g=Et(u.name,x,"math",n,["mop","op-symbol",h?"large-op":"small-op"]),w.length>0){var $=g.italic,z=fm(w+"Size"+(h?"2":"1"),n);g=Ke({positionType:"individualShift",children:[{type:"elem",elem:g,shift:0},{type:"elem",elem:z,shift:h?.08:0}]}),u.name="\\"+w,g.classes.unshift("mop"),g.italic=$}}else if(u.body){var k=xt(u.body,n,!0);k.length===1&&k[0]instanceof mn?(g=k[0],g.classes[0]="mop"):g=te(["mop"],k,n)}else{for(var D=[],q=1;q<u.name.length;q++)D.push(ru(u.name[q],u.mode,n));g=te(["mop"],D,n)}var B=0,E=0;return(g instanceof mn||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(B=(g.height-g.depth)/2-n.fontMetrics().axisHeight,E=g.italic),a?Om(g,r,s,n,d,E,B):(B&&(g.style.position="relative",g.style.top=ce(B)),g)},No=(o,n)=>{var r;if(o.symbol)r=new oe("mo",[fn(o.name,o.mode)]),Hm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new oe("mo",Ut(o.body,n));else{r=new oe("mi",[new ht(o.name.slice(1))]);var s=new oe("mo",[fn("⁡","text")]);o.parentIsSupSub?r=new oe("mrow",[r,s]):r=gm([r,s])}return r},g8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};fe({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=s;return a.length===1&&(a=g8[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Ni,mathmlBuilder:No});fe({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:mt(s)}},htmlBuilder:Ni,mathmlBuilder:No});var v8={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};fe({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Ni,mathmlBuilder:No});fe({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Ni,mathmlBuilder:No});fe({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,s=r;return s.length===1&&(s=v8[s]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Ni,mathmlBuilder:No});var Wm=(o,n)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Pe(o.base,"operatorname"),a=!0):u=Pe(o,"operatorname");var d;if(u.body.length>0){for(var h=u.body.map($=>{var z=$.text;return typeof z=="string"?{type:"textord",mode:$.mode,text:z}:$}),g=xt(h,n.withFont("mathrm"),!0),x=0;x<g.length;x++){var w=g[x];w instanceof mn&&(w.text=w.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=te(["mop"],g,n)}else d=te(["mop"],[],n);return a?Om(d,r,s,n,n.style,0,0):d},y8=(o,n)=>{for(var r=Ut(o.body,n.withFont("mathrm")),s=!0,a=0;a<r.length;a++){var u=r[a];if(!(u instanceof vm))if(u instanceof oe)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=u.children[0];u.children.length===1&&d instanceof ht?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var h=r.map(w=>w.toText()).join("");r=[new ht(h)]}var g=new oe("mi",r);g.setAttribute("mathvariant","normal");var x=new oe("mo",[fn("⁡","text")]);return o.parentIsSupSub?new oe("mrow",[g,x]):gm([g,x])};fe({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0];return{type:"operatorname",mode:r.mode,body:mt(a),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Wm,mathmlBuilder:y8});_("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ii({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?tr(xt(o.body,n,!1)):te(["mord"],xt(o.body,n,!0),n)},mathmlBuilder(o,n){return Rr(o.body,n,!0)}});fe({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,s=n[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,n){var r=Ue(o.body,n.havingCrampedStyle()),s=Di("overline-line",n),a=n.fontMetrics().defaultRuleThickness,u=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}]});return te(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new oe("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var s=new oe("mover",[Ye(o.body,n),r]);return s.setAttribute("accent","true"),s}});fe({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"phantom",mode:r.mode,body:mt(s)}},htmlBuilder:(o,n)=>{var r=xt(o.body,n.withPhantom(),!1);return tr(r)},mathmlBuilder:(o,n)=>{var r=Ut(o.body,n);return new oe("mphantom",r)}});fe({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=te([],[Ue(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),te(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Ut(mt(o.body),n),s=new oe("mphantom",r),a=new oe("mpadded",[s]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});fe({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=te(["inner"],[Ue(o.body,n.withPhantom())]),s=te(["fix"],[]);return te(["mord","rlap"],[r,s],n)},mathmlBuilder:(o,n)=>{var r=Ut(mt(o.body),n),s=new oe("mphantom",r),a=new oe("mpadded",[s]);return a.setAttribute("width","0px"),a}});fe({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,s=Pe(n[0],"size").value,a=n[1];return{type:"raisebox",mode:r.mode,dy:s,body:a}},htmlBuilder(o,n){var r=Ue(o.body,n),s=at(o.dy,n);return Ke({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new oe("mpadded",[Ye(o.body,n)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});fe({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});fe({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:s}=o,a=r[0],u=Pe(n[0],"size"),d=Pe(n[1],"size");return{type:"rule",mode:s.mode,shift:a&&Pe(a,"size").value,width:u.value,height:d.value}},htmlBuilder(o,n){var r=te(["mord","rule"],[],n),s=at(o.width,n),a=at(o.height,n),u=o.shift?at(o.shift,n):0;return r.style.borderRightWidth=ce(s),r.style.borderTopWidth=ce(a),r.style.bottom=ce(u),r.width=s,r.height=a+u,r.depth=-u,r.maxFontSize=a*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=at(o.width,n),s=at(o.height,n),a=o.shift?at(o.shift,n):0,u=n.color&&n.getColor()||"black",d=new oe("mspace");d.setAttribute("mathbackground",u),d.setAttribute("width",ce(r)),d.setAttribute("height",ce(s));var h=new oe("mpadded",[d]);return a>=0?h.setAttribute("height",ce(a)):(h.setAttribute("height",ce(a)),h.setAttribute("depth",ce(-a))),h.setAttribute("voffset",ce(a)),h}});function Gm(o,n,r){for(var s=xt(o,n,!1),a=n.sizeMultiplier/r.sizeMultiplier,u=0;u<s.length;u++){var d=s[u].classes.indexOf("sizing");d<0?Array.prototype.push.apply(s[u].classes,n.sizingClasses(r)):s[u].classes[d+1]==="reset-size"+n.size&&(s[u].classes[d+1]="reset-size"+r.size),s[u].height*=a,s[u].depth*=a}return tr(s)}var jd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],x8=(o,n)=>{var r=n.havingSize(o.size);return Gm(o.body,r,n)};fe({type:"sizing",names:jd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:jd.indexOf(s)+1,body:u}},htmlBuilder:x8,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),s=Ut(o.body,r),a=new oe("mstyle",s);return a.setAttribute("mathsize",ce(r.sizeMultiplier)),a}});fe({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:s}=o,a=!1,u=!1,d=r[0]&&Pe(r[0],"ordgroup");if(d)for(var h="",g=0;g<d.body.length;++g){var x=d.body[g];if(h=x.text,h==="t")a=!0;else if(h==="b")u=!0;else{a=!1,u=!1;break}}else a=!0,u=!0;var w=n[0];return{type:"smash",mode:s.mode,body:w,smashHeight:a,smashDepth:u}},htmlBuilder:(o,n)=>{var r=te([],[Ue(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var u=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return te(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new oe("mpadded",[Ye(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});fe({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s}=o,a=r[0],u=n[0];return{type:"sqrt",mode:s.mode,body:u,index:a}},htmlBuilder(o,n){var r=Ue(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=Pi(r,n);var s=n.fontMetrics(),a=s.defaultRuleThickness,u=a;n.style.id<Ee.TEXT.id&&(u=n.fontMetrics().xHeight);var d=a+u/4,h=r.height+r.depth+d+a,{span:g,ruleWidth:x,advanceWidth:w}=o8(h,n),$=g.height-x;$>r.height+r.depth+d&&(d=(d+$-r.height-r.depth)/2);var z=g.height-r.height-d-x;r.style.paddingLeft=ce(w);var k=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+z)},{type:"elem",elem:g},{type:"kern",size:x}]});if(o.index){var D=n.havingStyle(Ee.SCRIPTSCRIPT),q=Ue(o.index,D,n),B=.6*(k.height-k.depth),E=Ke({positionType:"shift",positionData:-B,children:[{type:"elem",elem:q}]}),I=te(["root"],[E]);return te(["mord","sqrt"],[I,k],n)}else return te(["mord","sqrt"],[k],n)},mathmlBuilder(o,n){var{body:r,index:s}=o;return s?new oe("mroot",[Ye(r,n),Ye(s,n)]):new oe("msqrt",[Ye(r,n)])}});var qd={display:Ee.DISPLAY,text:Ee.TEXT,script:Ee.SCRIPT,scriptscript:Ee.SCRIPTSCRIPT};fe({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!0,r),d=s.slice(1,s.length-5);return{type:"styling",mode:a.mode,style:d,body:u}},htmlBuilder(o,n){var r=qd[o.style],s=n.havingStyle(r).withFont("");return Gm(o.body,s,n)},mathmlBuilder(o,n){var r=qd[o.style],s=n.havingStyle(r),a=Ut(o.body,s),u=new oe("mstyle",a),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},h=d[o.style];return u.setAttribute("scriptlevel",h[0]),u.setAttribute("displaystyle",h[1]),u}});var b8=function(n,r){var s=n.base;if(s)if(s.type==="op"){var a=s.limits&&(r.style.size===Ee.DISPLAY.size||s.alwaysHandleSupSub);return a?Ni:null}else if(s.type==="operatorname"){var u=s.alwaysHandleSupSub&&(r.style.size===Ee.DISPLAY.size||s.limits);return u?Wm:null}else{if(s.type==="accent")return Jn(s.base)?lu:null;if(s.type==="horizBrace"){var d=!n.sub;return d===s.isOver?Lm:null}else return null}else return null};ii({type:"supsub",htmlBuilder(o,n){var r=b8(o,n);if(r)return r(o,n);var{base:s,sup:a,sub:u}=o,d=Ue(s,n),h,g,x=n.fontMetrics(),w=0,$=0,z=s&&Jn(s);if(a){var k=n.havingStyle(n.style.sup());h=Ue(a,k,n),z||(w=d.height-k.fontMetrics().supDrop*k.sizeMultiplier/n.sizeMultiplier)}if(u){var D=n.havingStyle(n.style.sub());g=Ue(u,D,n),z||($=d.depth+D.fontMetrics().subDrop*D.sizeMultiplier/n.sizeMultiplier)}var q;n.style===Ee.DISPLAY?q=x.sup1:n.style.cramped?q=x.sup3:q=x.sup2;var B=n.sizeMultiplier,E=ce(.5/x.ptPerEm/B),I=null;if(g){var W=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(d instanceof mn||W)&&(I=ce(-d.italic))}var F;if(h&&g){w=Math.max(w,q,h.depth+.25*x.xHeight),$=Math.max($,x.sub2);var O=x.defaultRuleThickness,Y=4*O;if(w-h.depth-(g.height-$)<Y){$=Y-(w-h.depth)+g.height;var P=.8*x.xHeight-(w-h.depth);P>0&&(w+=P,$-=P)}var V=[{type:"elem",elem:g,shift:$,marginRight:E,marginLeft:I},{type:"elem",elem:h,shift:-w,marginRight:E}];F=Ke({positionType:"individualShift",children:V})}else if(g){$=Math.max($,x.sub1,g.height-.8*x.xHeight);var ne=[{type:"elem",elem:g,marginLeft:I,marginRight:E}];F=Ke({positionType:"shift",positionData:$,children:ne})}else if(h)w=Math.max(w,q,h.depth+.25*x.xHeight),F=Ke({positionType:"shift",positionData:-w,children:[{type:"elem",elem:h,marginRight:E}]});else throw new Error("supsub must have either sup or sub.");var me=Ol(d,"right")||"mord";return te([me],[d,te(["msupsub"],[F])],n)},mathmlBuilder(o,n){var r=!1,s,a;o.base&&o.base.type==="horizBrace"&&(a=!!o.sup,a===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Ye(o.base,n)];o.sub&&u.push(Ye(o.sub,n)),o.sup&&u.push(Ye(o.sup,n));var d;if(r)d=s?"mover":"munder";else if(o.sub)if(o.sup){var x=o.base;x&&x.type==="op"&&x.limits&&n.style===Ee.DISPLAY||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(n.style===Ee.DISPLAY||x.limits)?d="munderover":d="msubsup"}else{var g=o.base;g&&g.type==="op"&&g.limits&&(n.style===Ee.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||n.style===Ee.DISPLAY)?d="munder":d="msub"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(n.style===Ee.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||n.style===Ee.DISPLAY)?d="mover":d="msup"}return new oe(d,u)}});ii({type:"atom",htmlBuilder(o,n){return ru(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new oe("mo",[fn(o.text,o.mode)]);if(o.family==="bin"){var s=su(o,n);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Um={mi:"italic",mn:"normal",mtext:"normal"};ii({type:"mathord",htmlBuilder(o,n){return ws(o,n,"mathord")},mathmlBuilder(o,n){var r=new oe("mi",[fn(o.text,o.mode,n)]),s=su(o,n)||"italic";return s!==Um[r.type]&&r.setAttribute("mathvariant",s),r}});ii({type:"textord",htmlBuilder(o,n){return ws(o,n,"textord")},mathmlBuilder(o,n){var r=fn(o.text,o.mode,n),s=su(o,n)||"normal",a;return o.mode==="text"?a=new oe("mtext",[r]):/[0-9]/.test(o.text)?a=new oe("mn",[r]):o.text==="\\prime"?a=new oe("mo",[r]):a=new oe("mi",[r]),s!==Um[a.type]&&a.setAttribute("mathvariant",s),a}});var Cl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Rl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ii({type:"spacing",htmlBuilder(o,n){if(Rl.hasOwnProperty(o.text)){var r=Rl[o.text].className||"";if(o.mode==="text"){var s=ws(o,n,"textord");return s.classes.push(r),s}else return te(["mspace",r],[ru(o.text,o.mode,n)],n)}else{if(Cl.hasOwnProperty(o.text))return te(["mspace",Cl[o.text]],[],n);throw new ie('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if(Rl.hasOwnProperty(o.text))r=new oe("mtext",[new ht(" ")]);else{if(Cl.hasOwnProperty(o.text))return new oe("mspace");throw new ie('Unknown type of space "'+o.text+'"')}return r}});var Md=()=>{var o=new oe("mtd",[]);return o.setAttribute("width","50%"),o};ii({type:"tag",mathmlBuilder(o,n){var r=new oe("mtable",[new oe("mtr",[Md(),new oe("mtd",[Rr(o.body,n)]),Md(),new oe("mtd",[Rr(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var Ad={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Cd={"\\textbf":"textbf","\\textmd":"textmd"},w8={"\\textit":"textit","\\textup":"textup"},Rd=(o,n)=>{var r=o.font;if(r){if(Ad[r])return n.withTextFontFamily(Ad[r]);if(Cd[r])return n.withTextFontWeight(Cd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(w8[r])};fe({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];return{type:"text",mode:r.mode,body:mt(a),font:s}},htmlBuilder(o,n){var r=Rd(o,n),s=xt(o.body,r,!0);return te(["mord","text"],s,r)},mathmlBuilder(o,n){var r=Rd(o,n);return Rr(o.body,r)}});fe({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Ue(o.body,n),s=Di("underline-line",n),a=n.fontMetrics().defaultRuleThickness,u=Ke({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:s},{type:"kern",size:3*a},{type:"elem",elem:r}]});return te(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new oe("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var s=new oe("munder",[Ye(o.body,n),r]);return s.setAttribute("accentunder","true"),s}});fe({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Ue(o.body,n),s=n.fontMetrics().axisHeight,a=.5*(r.height-s-(r.depth+s));return Ke({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new oe("mpadded",[Ye(o.body,n)],["vcenter"])}});fe({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new ie("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=Ed(o),s=[],a=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var d=r[u];d==="~"&&(d="\\textasciitilde"),s.push(Et(d,"Typewriter-Regular",o.mode,a,["mord","texttt"]))}return te(["mord","text"].concat(a.sizingClasses(n)),cm(s),a)},mathmlBuilder(o,n){var r=new ht(Ed(o)),s=new oe("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var Ed=o=>o.body.replace(/ /g,o.star?"␣":" "),qr=pm,Vm=`[ \r
	]`,_8="\\\\[a-zA-Z@]+",$8="\\\\[^\uD800-\uDFFF]",k8="("+_8+")"+Vm+"*",z8=`\\\\(
|[ \r	]+
?)[ \r	]*`,Vl="[̀-ͯ]",S8=new RegExp(Vl+"+$"),T8="("+Vm+"+)|"+(z8+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Vl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Vl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+k8)+("|"+$8+")");class Dd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(T8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Jt("EOF",new Gt(this,r,r));var s=this.tokenRegex.exec(n);if(s===null||s.index!==r)throw new ie("Unexpected character: '"+n[r]+"'",new Jt(n[r],new Gt(this,r,r+1)));var a=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[a]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Jt(a,new Gt(this,r,this.tokenRegex.lastIndex))}}class j8{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ie("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,s){if(s===void 0&&(s=!1),s){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var q8=Pm;_("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});_("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});_("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});_("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});_("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});_("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");_("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var Pd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};_("\\char",function(o){var n=o.popToken(),r,s="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")s=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new ie("\\char` missing argument");s=n.text.charCodeAt(0)}else r=10;if(r){if(s=Pd[n.text],s==null||s>=r)throw new ie("Invalid base-"+r+" digit "+n.text);for(var a;(a=Pd[o.future().text])!=null&&a<r;)s*=r,s+=a,o.popToken()}return"\\@char{"+s+"}"});var pu=(o,n,r,s)=>{var a=o.consumeArg().tokens;if(a.length!==1)throw new ie("\\newcommand's first argument must be a macro name");var u=a[0].text,d=o.isDefined(u);if(d&&!n)throw new ie("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!d&&!r)throw new ie("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var h=0;if(a=o.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var g="",x=o.expandNextToken();x.text!=="]"&&x.text!=="EOF";)g+=x.text,x=o.expandNextToken();if(!g.match(/^\s*[0-9]+\s*$/))throw new ie("Invalid number of arguments: "+g);h=parseInt(g),a=o.consumeArg().tokens}return d&&s||o.macros.set(u,{tokens:a,numArgs:h}),""};_("\\newcommand",o=>pu(o,!1,!0,!1));_("\\renewcommand",o=>pu(o,!0,!1,!1));_("\\providecommand",o=>pu(o,!0,!0,!0));_("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});_("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});_("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),qr[r],Xe.math[r],Xe.text[r]),""});_("\\bgroup","{");_("\\egroup","}");_("~","\\nobreakspace");_("\\lq","`");_("\\rq","'");_("\\aa","\\r a");_("\\AA","\\r A");_("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");_("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");_("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");_("ℬ","\\mathscr{B}");_("ℰ","\\mathscr{E}");_("ℱ","\\mathscr{F}");_("ℋ","\\mathscr{H}");_("ℐ","\\mathscr{I}");_("ℒ","\\mathscr{L}");_("ℳ","\\mathscr{M}");_("ℛ","\\mathscr{R}");_("ℭ","\\mathfrak{C}");_("ℌ","\\mathfrak{H}");_("ℨ","\\mathfrak{Z}");_("\\Bbbk","\\Bbb{k}");_("·","\\cdotp");_("\\llap","\\mathllap{\\textrm{#1}}");_("\\rlap","\\mathrlap{\\textrm{#1}}");_("\\clap","\\mathclap{\\textrm{#1}}");_("\\mathstrut","\\vphantom{(}");_("\\underbar","\\underline{\\text{#1}}");_("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');_("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");_("\\ne","\\neq");_("≠","\\neq");_("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");_("∉","\\notin");_("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");_("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");_("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");_("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");_("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");_("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");_("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");_("⟂","\\perp");_("‼","\\mathclose{!\\mkern-0.8mu!}");_("∌","\\notni");_("⌜","\\ulcorner");_("⌝","\\urcorner");_("⌞","\\llcorner");_("⌟","\\lrcorner");_("©","\\copyright");_("®","\\textregistered");_("️","\\textregistered");_("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');_("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');_("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');_("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');_("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");_("⋮","\\vdots");_("\\varGamma","\\mathit{\\Gamma}");_("\\varDelta","\\mathit{\\Delta}");_("\\varTheta","\\mathit{\\Theta}");_("\\varLambda","\\mathit{\\Lambda}");_("\\varXi","\\mathit{\\Xi}");_("\\varPi","\\mathit{\\Pi}");_("\\varSigma","\\mathit{\\Sigma}");_("\\varUpsilon","\\mathit{\\Upsilon}");_("\\varPhi","\\mathit{\\Phi}");_("\\varPsi","\\mathit{\\Psi}");_("\\varOmega","\\mathit{\\Omega}");_("\\substack","\\begin{subarray}{c}#1\\end{subarray}");_("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");_("\\boxed","\\fbox{$\\displaystyle{#1}$}");_("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");_("\\implies","\\DOTSB\\;\\Longrightarrow\\;");_("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");_("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");_("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Bd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},M8=new Set(["bin","rel"]);_("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in Bd?n=Bd[r]:(r.slice(0,4)==="\\not"||r in Xe.math&&M8.has(Xe.math[r].group))&&(n="\\dotsb"),n});var hu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};_("\\dotso",function(o){var n=o.future().text;return n in hu?"\\ldots\\,":"\\ldots"});_("\\dotsc",function(o){var n=o.future().text;return n in hu&&n!==","?"\\ldots\\,":"\\ldots"});_("\\cdots",function(o){var n=o.future().text;return n in hu?"\\@cdots\\,":"\\@cdots"});_("\\dotsb","\\cdots");_("\\dotsm","\\cdots");_("\\dotsi","\\!\\cdots");_("\\dotsx","\\ldots\\,");_("\\DOTSI","\\relax");_("\\DOTSB","\\relax");_("\\DOTSX","\\relax");_("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");_("\\,","\\tmspace+{3mu}{.1667em}");_("\\thinspace","\\,");_("\\>","\\mskip{4mu}");_("\\:","\\tmspace+{4mu}{.2222em}");_("\\medspace","\\:");_("\\;","\\tmspace+{5mu}{.2777em}");_("\\thickspace","\\;");_("\\!","\\tmspace-{3mu}{.1667em}");_("\\negthinspace","\\!");_("\\negmedspace","\\tmspace-{4mu}{.2222em}");_("\\negthickspace","\\tmspace-{5mu}{.277em}");_("\\enspace","\\kern.5em ");_("\\enskip","\\hskip.5em\\relax");_("\\quad","\\hskip1em\\relax");_("\\qquad","\\hskip2em\\relax");_("\\tag","\\@ifstar\\tag@literal\\tag@paren");_("\\tag@paren","\\tag@literal{({#1})}");_("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new ie("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});_("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");_("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");_("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");_("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");_("\\newline","\\\\\\relax");_("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Km=ce(En["Main-Regular"][84][1]-.7*En["Main-Regular"][65][1]);_("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Km+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");_("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Km+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");_("\\hspace","\\@ifstar\\@hspacer\\@hspace");_("\\@hspace","\\hskip #1\\relax");_("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");_("\\ordinarycolon",":");_("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");_("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');_("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');_("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');_("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');_("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');_("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');_("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');_("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');_("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');_("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');_("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');_("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');_("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');_("∷","\\dblcolon");_("∹","\\eqcolon");_("≔","\\coloneqq");_("≕","\\eqqcolon");_("⩴","\\Coloneqq");_("\\ratio","\\vcentcolon");_("\\coloncolon","\\dblcolon");_("\\colonequals","\\coloneqq");_("\\coloncolonequals","\\Coloneqq");_("\\equalscolon","\\eqqcolon");_("\\equalscoloncolon","\\Eqqcolon");_("\\colonminus","\\coloneq");_("\\coloncolonminus","\\Coloneq");_("\\minuscolon","\\eqcolon");_("\\minuscoloncolon","\\Eqcolon");_("\\coloncolonapprox","\\Colonapprox");_("\\coloncolonsim","\\Colonsim");_("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");_("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");_("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");_("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");_("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");_("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");_("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");_("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");_("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");_("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");_("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");_("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");_("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");_("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");_("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");_("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");_("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");_("\\nleqq","\\html@mathml{\\@nleqq}{≰}");_("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");_("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");_("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");_("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");_("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");_("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");_("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");_("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");_("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");_("\\imath","\\html@mathml{\\@imath}{ı}");_("\\jmath","\\html@mathml{\\@jmath}{ȷ}");_("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");_("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");_("⟦","\\llbracket");_("⟧","\\rrbracket");_("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");_("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");_("⦃","\\lBrace");_("⦄","\\rBrace");_("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");_("⦵","\\minuso");_("\\darr","\\downarrow");_("\\dArr","\\Downarrow");_("\\Darr","\\Downarrow");_("\\lang","\\langle");_("\\rang","\\rangle");_("\\uarr","\\uparrow");_("\\uArr","\\Uparrow");_("\\Uarr","\\Uparrow");_("\\N","\\mathbb{N}");_("\\R","\\mathbb{R}");_("\\Z","\\mathbb{Z}");_("\\alef","\\aleph");_("\\alefsym","\\aleph");_("\\Alpha","\\mathrm{A}");_("\\Beta","\\mathrm{B}");_("\\bull","\\bullet");_("\\Chi","\\mathrm{X}");_("\\clubs","\\clubsuit");_("\\cnums","\\mathbb{C}");_("\\Complex","\\mathbb{C}");_("\\Dagger","\\ddagger");_("\\diamonds","\\diamondsuit");_("\\empty","\\emptyset");_("\\Epsilon","\\mathrm{E}");_("\\Eta","\\mathrm{H}");_("\\exist","\\exists");_("\\harr","\\leftrightarrow");_("\\hArr","\\Leftrightarrow");_("\\Harr","\\Leftrightarrow");_("\\hearts","\\heartsuit");_("\\image","\\Im");_("\\infin","\\infty");_("\\Iota","\\mathrm{I}");_("\\isin","\\in");_("\\Kappa","\\mathrm{K}");_("\\larr","\\leftarrow");_("\\lArr","\\Leftarrow");_("\\Larr","\\Leftarrow");_("\\lrarr","\\leftrightarrow");_("\\lrArr","\\Leftrightarrow");_("\\Lrarr","\\Leftrightarrow");_("\\Mu","\\mathrm{M}");_("\\natnums","\\mathbb{N}");_("\\Nu","\\mathrm{N}");_("\\Omicron","\\mathrm{O}");_("\\plusmn","\\pm");_("\\rarr","\\rightarrow");_("\\rArr","\\Rightarrow");_("\\Rarr","\\Rightarrow");_("\\real","\\Re");_("\\reals","\\mathbb{R}");_("\\Reals","\\mathbb{R}");_("\\Rho","\\mathrm{P}");_("\\sdot","\\cdot");_("\\sect","\\S");_("\\spades","\\spadesuit");_("\\sub","\\subset");_("\\sube","\\subseteq");_("\\supe","\\supseteq");_("\\Tau","\\mathrm{T}");_("\\thetasym","\\vartheta");_("\\weierp","\\wp");_("\\Zeta","\\mathrm{Z}");_("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");_("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");_("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");_("\\bra","\\mathinner{\\langle{#1}|}");_("\\ket","\\mathinner{|{#1}\\rangle}");_("\\braket","\\mathinner{\\langle{#1}\\rangle}");_("\\Bra","\\left\\langle#1\\right|");_("\\Ket","\\left|#1\\right\\rangle");var Qm=o=>n=>{var r=n.consumeArg().tokens,s=n.consumeArg().tokens,a=n.consumeArg().tokens,u=n.consumeArg().tokens,d=n.macros.get("|"),h=n.macros.get("\\|");n.macros.beginGroup();var g=$=>z=>{o&&(z.macros.set("|",d),a.length&&z.macros.set("\\|",h));var k=$;if(!$&&a.length){var D=z.future();D.text==="|"&&(z.popToken(),k=!0)}return{tokens:k?a:s,numArgs:0}};n.macros.set("|",g(!1)),a.length&&n.macros.set("\\|",g(!0));var x=n.consumeArg().tokens,w=n.expandTokens([...u,...x,...r]);return n.macros.endGroup(),{tokens:w.reverse(),numArgs:0}};_("\\bra@ket",Qm(!1));_("\\bra@set",Qm(!0));_("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");_("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");_("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");_("\\angln","{\\angl n}");_("\\blue","\\textcolor{##6495ed}{#1}");_("\\orange","\\textcolor{##ffa500}{#1}");_("\\pink","\\textcolor{##ff00af}{#1}");_("\\red","\\textcolor{##df0030}{#1}");_("\\green","\\textcolor{##28ae7b}{#1}");_("\\gray","\\textcolor{gray}{#1}");_("\\purple","\\textcolor{##9d38bd}{#1}");_("\\blueA","\\textcolor{##ccfaff}{#1}");_("\\blueB","\\textcolor{##80f6ff}{#1}");_("\\blueC","\\textcolor{##63d9ea}{#1}");_("\\blueD","\\textcolor{##11accd}{#1}");_("\\blueE","\\textcolor{##0c7f99}{#1}");_("\\tealA","\\textcolor{##94fff5}{#1}");_("\\tealB","\\textcolor{##26edd5}{#1}");_("\\tealC","\\textcolor{##01d1c1}{#1}");_("\\tealD","\\textcolor{##01a995}{#1}");_("\\tealE","\\textcolor{##208170}{#1}");_("\\greenA","\\textcolor{##b6ffb0}{#1}");_("\\greenB","\\textcolor{##8af281}{#1}");_("\\greenC","\\textcolor{##74cf70}{#1}");_("\\greenD","\\textcolor{##1fab54}{#1}");_("\\greenE","\\textcolor{##0d923f}{#1}");_("\\goldA","\\textcolor{##ffd0a9}{#1}");_("\\goldB","\\textcolor{##ffbb71}{#1}");_("\\goldC","\\textcolor{##ff9c39}{#1}");_("\\goldD","\\textcolor{##e07d10}{#1}");_("\\goldE","\\textcolor{##a75a05}{#1}");_("\\redA","\\textcolor{##fca9a9}{#1}");_("\\redB","\\textcolor{##ff8482}{#1}");_("\\redC","\\textcolor{##f9685d}{#1}");_("\\redD","\\textcolor{##e84d39}{#1}");_("\\redE","\\textcolor{##bc2612}{#1}");_("\\maroonA","\\textcolor{##ffbde0}{#1}");_("\\maroonB","\\textcolor{##ff92c6}{#1}");_("\\maroonC","\\textcolor{##ed5fa6}{#1}");_("\\maroonD","\\textcolor{##ca337c}{#1}");_("\\maroonE","\\textcolor{##9e034e}{#1}");_("\\purpleA","\\textcolor{##ddd7ff}{#1}");_("\\purpleB","\\textcolor{##c6b9fc}{#1}");_("\\purpleC","\\textcolor{##aa87ff}{#1}");_("\\purpleD","\\textcolor{##7854ab}{#1}");_("\\purpleE","\\textcolor{##543b78}{#1}");_("\\mintA","\\textcolor{##f5f9e8}{#1}");_("\\mintB","\\textcolor{##edf2df}{#1}");_("\\mintC","\\textcolor{##e0e5cc}{#1}");_("\\grayA","\\textcolor{##f6f7f7}{#1}");_("\\grayB","\\textcolor{##f0f1f2}{#1}");_("\\grayC","\\textcolor{##e3e5e6}{#1}");_("\\grayD","\\textcolor{##d6d8da}{#1}");_("\\grayE","\\textcolor{##babec2}{#1}");_("\\grayF","\\textcolor{##888d93}{#1}");_("\\grayG","\\textcolor{##626569}{#1}");_("\\grayH","\\textcolor{##3b3e40}{#1}");_("\\grayI","\\textcolor{##21242c}{#1}");_("\\kaBlue","\\textcolor{##314453}{#1}");_("\\kaGreen","\\textcolor{##71B307}{#1}");var Ym={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class A8{constructor(n,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new j8(q8,r.macros),this.mode=s,this.stack=[]}feed(n){this.lexer=new Dd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,s,a;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:s}=this.consumeArg(["]"])}else({tokens:a,start:r,end:s}=this.consumeArg());return this.pushToken(new Jt("EOF",s.loc)),this.pushTokens(a),new Jt("",Gt.range(r,s))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],s=n&&n.length>0;s||this.consumeSpaces();var a=this.future(),u,d=0,h=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++d;else if(u.text==="}"){if(--d,d===-1)throw new ie("Extra }",u)}else if(u.text==="EOF")throw new ie("Unexpected end of input in a macro argument, expected '"+(n&&s?n[h]:"}")+"'",u);if(n&&s)if((d===0||d===1&&n[h]==="{")&&u.text===n[h]){if(++h,h===n.length){r.splice(-h,h);break}}else h=0}while(d!==0||s);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new ie("The length of delimiters doesn't match the number of args!");for(var s=r[0],a=0;a<s.length;a++){var u=this.popToken();if(s[a]!==u.text)throw new ie("Use of the macro doesn't match its definition",u)}}for(var d=[],h=0;h<n;h++)d.push(this.consumeArg(r&&r[h+1]).tokens);return d}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new ie("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),s=r.text,a=r.noexpand?null:this._getExpansion(s);if(a==null||n&&a.unexpandable){if(n&&a==null&&s[0]==="\\"&&!this.isDefined(s))throw new ie("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var u=a.tokens,d=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){u=u.slice();for(var h=u.length-1;h>=0;--h){var g=u[h];if(g.text==="#"){if(h===0)throw new ie("Incomplete placeholder at end of macro body",g);if(g=u[--h],g.text==="#")u.splice(h+1,1);else if(/^[1-9]$/.test(g.text))u.splice(h,2,...d[+g.text-1]);else throw new ie("Not a valid argument number",g)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Jt(n)]):void 0}expandTokens(n){var r=[],s=this.stack.length;for(this.pushTokens(n);this.stack.length>s;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(s=>s.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var s=this.lexer.catcodes[n];if(s!=null&&s!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var u=0;if(a.includes("#"))for(var d=a.replace(/##/g,"");d.includes("#"+(u+1));)++u;for(var h=new Dd(a,this.settings),g=[],x=h.lex();x.text!=="EOF";)g.push(x),x=h.lex();g.reverse();var w={tokens:g,numArgs:u};return w}return a}isDefined(n){return this.macros.has(n)||qr.hasOwnProperty(n)||Xe.math.hasOwnProperty(n)||Xe.text.hasOwnProperty(n)||Ym.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:qr.hasOwnProperty(n)&&!qr[n].primitive}}var Nd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,us=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),El={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Id={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class js{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new A8(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new ie("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Jt("}")),this.gullet.pushTokens(n);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(n,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(js.endOfExpression.has(a.text)||r&&a.text===r||n&&qr[a.text]&&qr[a.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;s.push(u)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(n){for(var r=-1,s,a=0;a<n.length;a++)if(n[a].type==="infix"){if(r!==-1)throw new ie("only one infix operator per group",n[a].token);r=a,s=n[a].replaceWith}if(r!==-1&&s){var u,d,h=n.slice(0,r),g=n.slice(r+1);h.length===1&&h[0].type==="ordgroup"?u=h[0]:u={type:"ordgroup",mode:this.mode,body:h},g.length===1&&g[0].type==="ordgroup"?d=g[0]:d={type:"ordgroup",mode:this.mode,body:g};var x;return s==="\\\\abovefrac"?x=this.callFunction(s,[u,n[r],d],[]):x=this.callFunction(s,[u,d],[]),[x]}else return n}handleSupSubscript(n){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var a;do{var u;a=this.parseGroup(n)}while(((u=a)==null?void 0:u.type)==="internal");if(!a)throw new ie("Expected group after '"+s+"'",r);return a}formatUnsupportedCmd(n){for(var r=[],s=0;s<n.length;s++)r.push({type:"textord",mode:"text",text:n[s]});var a={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,a;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var d=u.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new ie("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(s)throw new ie("Double superscript",u);s=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(a)throw new ie("Double subscript",u);a=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(s)throw new ie("Double superscript",u);var h={type:"textord",mode:this.mode,text:"\\prime"},g=[h];for(this.consume();this.fetch().text==="'";)g.push(h),this.consume();this.fetch().text==="^"&&g.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:g}}else if(us[u.text]){var x=Nd.test(u.text),w=[];for(w.push(new Jt(us[u.text])),this.consume();;){var $=this.fetch().text;if(!us[$]||Nd.test($)!==x)break;w.unshift(new Jt(us[$])),this.consume()}var z=this.subparse(w);x?a={type:"ordgroup",mode:"math",body:z}:s={type:"ordgroup",mode:"math",body:z}}else break}return s||a?{type:"supsub",mode:this.mode,base:r,sup:s,sub:a}:r}parseFunction(n,r){var s=this.fetch(),a=s.text,u=qr[a];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new ie("Got function '"+a+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!u.allowedInText)throw new ie("Can't use function '"+a+"' in text mode",s);if(this.mode==="math"&&u.allowedInMath===!1)throw new ie("Can't use function '"+a+"' in math mode",s);var{args:d,optArgs:h}=this.parseArguments(a,u);return this.callFunction(a,d,h,s,n)}callFunction(n,r,s,a,u){var d={funcName:n,parser:this,token:a,breakOnTokenText:u},h=qr[n];if(h&&h.handler)return h.handler(d,r,s);throw new ie("No function handler for "+n)}parseArguments(n,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var a=[],u=[],d=0;d<s;d++){var h=r.argTypes&&r.argTypes[d],g=d<r.numOptionalArgs;(r.primitive&&h==null||r.type==="sqrt"&&d===1&&u[0]==null)&&(h="primitive");var x=this.parseGroupOfType("argument to '"+n+"'",h,g);if(g)u.push(x);else if(x!=null)a.push(x);else throw new ie("Null argument, please report this as a bug")}return{args:a,optArgs:u}}parseGroupOfType(n,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var a=this.parseArgumentGroup(s,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",s);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(s)throw new ie("A primitive argument cannot be optional");var d=this.parseGroup(n);if(d==null)throw new ie("Expected group as "+n,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new ie("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var a="",u;(u=this.fetch()).text!=="EOF";)a+=u.text,this.consume();return this.consume(),s.text=a,s}parseRegexGroup(n,r){for(var s=this.fetch(),a=s,u="",d;(d=this.fetch()).text!=="EOF"&&n.test(u+d.text);)a=d,u+=a.text,this.consume();if(u==="")throw new ie("Invalid "+r+": '"+s.text+"'",s);return s.range(a,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new ie("Invalid color: '"+r.text+"'",r);var a=s[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(n){var r,s=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",s=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new ie("Invalid size: '"+r.text+"'",r);var u={number:+(a[1]+a[2]),unit:a[3]};if(!om(u))throw new ie("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:s}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(n,r){var s=this.gullet.scanArgument(n);if(s==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:s.loc,body:u};return r&&this.switchMode(a),d}parseGroup(n,r){var s=this.fetch(),a=s.text,u;if(a==="{"||a==="\\begingroup"){this.consume();var d=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var h=this.parseExpression(!1,d),g=this.fetch();this.expect(d),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Gt.range(s,g),body:h,semisimple:a==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&a[0]==="\\"&&!Ym.hasOwnProperty(a)){if(this.settings.throwOnError)throw new ie("Undefined control sequence: "+a,s);u=this.formatUnsupportedCmd(a),this.consume()}return u}formLigatures(n){for(var r=n.length-1,s=0;s<r;++s){var a=n[s],u=a.text;u==="-"&&n[s+1].text==="-"&&(s+1<r&&n[s+2].text==="-"?(n.splice(s,3,{type:"textord",mode:"text",loc:Gt.range(a,n[s+2]),text:"---"}),r-=2):(n.splice(s,2,{type:"textord",mode:"text",loc:Gt.range(a,n[s+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[s+1].text===u&&(n.splice(s,2,{type:"textord",mode:"text",loc:Gt.range(a,n[s+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),a=s.charAt(0)==="*";if(a&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new ie(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:a}}Id.hasOwnProperty(r[0])&&!Xe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Id[r[0]]+r.slice(1));var u=S8.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(Xe[this.mode][r]){this.settings.strict&&this.mode==="math"&&Fl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var h=Xe[this.mode][r].group,g=Gt.range(n),x;if(Tv.hasOwnProperty(h)){var w=h;x={type:"atom",mode:this.mode,family:w,loc:g,text:r}}else x={type:h,mode:this.mode,loc:g,text:r};d=x}else if(r.charCodeAt(0)>=128)this.settings.strict&&(im(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),d={type:"textord",mode:"text",loc:Gt.range(n),text:r};else return null;if(this.consume(),u)for(var $=0;$<u[0].length;$++){var z=u[0][$];if(!El[z])throw new ie("Unknown accent ' "+z+"'",n);var k=El[z][this.mode]||El[z].text;if(!k)throw new ie("Accent "+z+" unsupported in "+this.mode+" mode",n);d={type:"accent",mode:this.mode,loc:Gt.range(n),label:k,isStretchy:!1,isShifty:!0,base:d}}return d}}js.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var gu=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new js(n,r);delete s.gullet.macros.current["\\df@tag"];var a=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ie("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:s.subparse([new Jt("\\df@tag")])}]}return a},Zm=function(n,r,s){r.textContent="";var a=vu(n,s).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Zm=function(){throw new ie("KaTeX doesn't work in quirks mode.")});var C8=function(n,r){var s=vu(n,r).toMarkup();return s},R8=function(n,r){var s=new Jl(r);return gu(n,s)},Xm=function(n,r,s){if(s.throwOnError||!(n instanceof ie))throw n;var a=te(["katex-error"],[new mn(r)]);return a.setAttribute("title",n.toString()),a.setAttribute("style","color:"+s.errorColor),a},vu=function(n,r){var s=new Jl(r);try{var a=gu(n,s);return Hv(a,n,s)}catch(u){return Xm(u,n,s)}},E8=function(n,r){var s=new Jl(r);try{var a=gu(n,s);return Wv(a,n,s)}catch(u){return Xm(u,n,s)}},D8="0.16.33",P8={Span:Bo,Anchor:nu,SymbolNode:mn,SvgNode:Xn,PathNode:Ar,LineNode:Il},Fd={version:D8,render:Zm,renderToString:C8,ParseError:ie,SETTINGS_SCHEMA:ds,__parse:R8,__renderToDomTree:vu,__renderToHTMLTree:E8,__setFontMetrics:xv,__defineSymbol:m,__defineFunction:fe,__defineMacro:_,__domTree:P8};function Jm(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Fd.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Fd.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}}),n}class Do{constructor(n){this._perm=n}get length(){return this._perm.length}originalIndex(n){return this._perm[n]}displayIndex(n){return this._perm.indexOf(n)}apply(n){return this._perm.map(r=>n[r])}static random(n){const r=Array.from({length:n},(s,a)=>a);for(let s=n-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return new Do(r)}static identity(n){return new Do(Array.from({length:n},(r,s)=>s))}}function B8({nodeId:o,nodes:n,questionBank:r,onAnswer:s,onSkip:a,lang:u,excludeIndices:d=[],isMobile:h}){const g=n.find(P=>P.id===o),x=H.useMemo(()=>Kd(r,o,d),[o,d]),w="#4a9eff",$=g?u==="pl"?g.labelPl:g.label:o,z=H.useMemo(()=>x?Do.random(x.options.length):null,[x]),k=H.useMemo(()=>z?z.apply(x.options):[],[z,x]),D=H.useMemo(()=>z?z.displayIndex(x.correct):-1,[z,x]),[q,B]=H.useState(null),[E,I]=H.useState(!1),W=()=>{q!==null&&I(!0)},F=()=>{s(q===D,x,x.index),B(null),I(!1)};H.useEffect(()=>{const P=V=>{V.key==="Escape"&&a((x==null?void 0:x.index)??-1)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[a,x]);const O=P=>v.jsx("span",{dangerouslySetInnerHTML:{__html:Jm(P)}}),Y=h?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:G.surface,border:`1px solid ${w}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:G.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:G.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${w}40`,borderRadius:10,padding:"14px 16px",color:G.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return v.jsxs("div",{style:Y,children:[h&&v.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:v.jsx("div",{style:{width:36,height:4,borderRadius:2,background:G.textFaint}})}),v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[v.jsx("div",{style:{color:w,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:$}),v.jsx("button",{onClick:()=>a((x==null?void 0:x.index)??-1),style:{background:`${G.textDim}22`,border:`1px solid ${G.border}`,color:G.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:K("close",u)})]}),x?v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{fontSize:13,color:G.textBody,marginBottom:12,lineHeight:1.65},children:O(x.q)}),v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:k.map((P,V)=>{let ne=G.bg,me=G.border,se=G.textBody;return q===V&&!E&&(ne=`${w}22`,me=w,se=w),E&&(V===D?(ne="#27ae6022",me="#27ae60",se="#2ecc71"):V===q&&(ne="#e74c3c22",me="#e74c3c",se="#ff6b6b")),v.jsxs("button",{onClick:()=>{E||B(V)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:E?"default":"pointer",background:ne,border:`1px solid ${me}`,color:se,lineHeight:1.5,minHeight:38},children:[v.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][V],"."]}),O(P)]},V)})}),E&&x.hint&&v.jsx("div",{style:{fontSize:11,color:G.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:O(x.hint)}),E?v.jsx("button",{onClick:F,style:{...jo(q===D?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:K(q===D?"knownConfirm":"unknownConfirm",u)}):v.jsx("button",{onClick:W,disabled:q===null,style:{...jo(w),width:"100%",opacity:q===null?.4:1,fontSize:13},children:K("checkAnswer",u)})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{color:G.textDim,fontSize:12,marginBottom:12},children:K("noQuestion",u)}),v.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[v.jsx("button",{onClick:()=>s(!0,null,-1),style:{...jo("#27ae60"),fontSize:12,padding:"8px 14px"},children:K("yesKnow",u)}),v.jsx("button",{onClick:()=>s(!1,null,-1),style:{...jo("#e74c3c"),fontSize:12,padding:"8px 14px"},children:K("noKnow",u)}),v.jsx("button",{onClick:()=>a(-1),style:{...jo("#3a4d63"),fontSize:12,padding:"8px 14px"},children:K("skipBtn",u)})]})]})]})}const N8={position:"absolute",right:16,top:16,width:230,background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function I8({belief:o,frontier:n,visibleFrontier:r,hasStarted:s,nextSuggestedId:a,sessionComplete:u,adjacency:d,expectedRemaining:h,pCorrect:g,questionsAnswered:x,nodes:w,lang:$,onReset:z,onNodeClick:k,SCOPE_LABELS:D,isMobile:q}){var me,se;const B=Object.fromEntries(w.map(ae=>[ae.id,ae])),E=ae=>{var ve,xe;return $==="pl"?(ve=B[ae])==null?void 0:ve.labelPl:(xe=B[ae])==null?void 0:xe.label},I=w.filter(ae=>o[ae.id]==="known"),W=w.filter(ae=>o[ae.id]==="unknown"),F=w.length,O=[{label:K("statKnown",$),count:I.length,color:"#27ae60"},{label:K("statUnknown",$),count:W.length,color:"#e74c3c"},{label:K("statRemaining",$),count:h??"-",color:"#4a9eff"}],Y=g?Math.round(g*100):50,P=q?13:11,V=q?11:9,ne=v.jsxs(v.Fragment,{children:[v.jsxs("div",{style:{fontWeight:700,fontSize:q?14:12,marginBottom:10,color:G.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsxs("span",{children:[K("diagHeader",$)," ",u?"✓":""]}),v.jsx("button",{onClick:z,style:{fontSize:V,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${G.textFaint}`,color:G.textDim,minHeight:q?32:"auto"},children:K("reset",$)})]}),v.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:O.map(({label:ae,count:ve,color:xe})=>v.jsxs("div",{style:{flex:1,textAlign:"center",background:`${xe}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${xe}40`},children:[v.jsx("div",{style:{color:xe,fontWeight:700,fontSize:q?20:15},children:ve}),v.jsx("div",{style:{color:G.textDim,fontSize:V},children:ae})]},ae))}),!u&&s&&v.jsxs("div",{style:{fontSize:V,color:G.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[v.jsxs("span",{children:[K("answered",$),": ",v.jsx("span",{style:{color:G.textPrimary},children:x})]}),v.jsxs("span",{children:[K("estimated",$),": ",v.jsxs("span",{style:{color:"#4a9eff"},children:["~",h??"-"]})]}),v.jsxs("span",{children:[K("accuracy",$),": ",v.jsxs("span",{style:{color:"#4a9eff"},children:[Y,"%"]})]})]}),u&&v.jsxs("div",{children:[v.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[v.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:q?14:12,marginBottom:4},children:K("sessionDone",$)}),v.jsxs("div",{style:{color:G.textDim,fontSize:V,lineHeight:1.6},children:[K("sessionDoneSub",$)," ",v.jsx("span",{style:{color:G.textPrimary},children:x})," ",K("sessionDoneQ",$),"."," ",K("sessionDoneClass",$)," ",I.length+W.length,"/",F,".",v.jsx("br",{}),K("sessionDoneAcc",$),": ",v.jsxs("span",{style:{color:"#4a9eff"},children:[Y,"%"]}),"."," ",K("sessionDoneKnown",$)," ",v.jsx("span",{style:{color:"#2ecc71"},children:I.length}),","," ",K("sessionDoneStudy",$)," ",v.jsx("span",{style:{color:"#e74c3c"},children:W.length}),"."]})]}),W.length>0&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{style:{color:"#e74c3c",fontSize:P,fontWeight:600,marginBottom:5},children:[K("toStudy",$)," (",W.length,")"]}),w.filter(ae=>o[ae.id]==="unknown").filter(ae=>(d.prereqs[ae.id]??[]).every(ve=>o[ve]==="known")).slice(0,8).map(ae=>{var ve,xe;return v.jsxs("div",{style:{padding:q?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:P,color:"#ff8a8a",lineHeight:1.4},children:[E(ae.id),v.jsx("div",{style:{fontSize:V,color:G.textDim,marginTop:1},children:(xe=D==null?void 0:D[(ve=B[ae.id])==null?void 0:ve.scope])==null?void 0:xe[$==="pl"?"pl":"en"]})]},ae.id)})]}),I.length>0&&v.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:P},children:["✓ ",K("knownList",$)," ",I.length]})]}),!u&&!s&&v.jsxs("div",{style:{marginBottom:10},children:[a&&v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{color:"#4a9eff",fontSize:P,fontWeight:600,marginBottom:5},children:K("startHere",$)}),v.jsxs("div",{onClick:()=>k==null?void 0:k(a),style:{padding:q?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:P,color:"#a8d4ff",minHeight:q?44:"auto"},children:[v.jsx("div",{style:{fontWeight:600},children:E(a)}),v.jsxs("div",{style:{fontSize:V,color:G.textDim,marginTop:2},children:[(se=D==null?void 0:D[(me=B[a])==null?void 0:me.scope])==null?void 0:se[$==="pl"?"pl":"en"]," · ",K("startHereSub",$)]})]})]}),v.jsx("div",{style:{fontSize:V,color:G.textFaint,marginTop:8,lineHeight:1.5},children:K("clickAnyNode",$)})]}),!u&&s&&r.length>0&&v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{color:"#f39c12",fontSize:P,fontWeight:600,marginBottom:5},children:K("whatNext",$)}),r.map(ae=>{var xe,Fe;const ve=ae===a;return v.jsxs("div",{onClick:()=>k==null?void 0:k(ae),style:{padding:q?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:ve?"#4a9eff18":"#f39c1215",border:`1px solid ${ve?"#4a9eff55":"#f39c1240"}`,fontSize:P,color:ve?"#a8d4ff":"#f5d78e",minHeight:q?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[v.jsxs("div",{children:[v.jsx("div",{children:E(ae)}),v.jsxs("div",{style:{fontSize:V,color:G.textDim,marginTop:1},children:[(Fe=D==null?void 0:D[(xe=B[ae])==null?void 0:xe.scope])==null?void 0:Fe[$==="pl"?"pl":"en"],ve&&v.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:K("best",$)})]})]}),v.jsx("span",{style:{opacity:.7},children:ve?"★":"→"})]},ae)})]}),!u&&I.length>0&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{style:{color:"#27ae60",fontSize:P,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",K("knownList",$)," (",I.length,")"]}),I.map(ae=>v.jsx("div",{style:{fontSize:V,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:E(ae.id)},ae.id))]}),!u&&!q&&v.jsxs("div",{style:{marginTop:12,color:G.textFaint,fontSize:V,lineHeight:1.5},children:[K("hintClick",$),v.jsx("br",{}),K("hintShift",$),v.jsx("br",{}),K("hintGreen",$)]})]});return q?v.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:v.jsx("div",{style:{width:36,height:4,borderRadius:2,background:G.textFaint}})}),ne]}):v.jsx("div",{style:N8,children:ne})}function F8({nodes:o,lang:n,targetNode:r,subgraphIds:s,ddClassification:a,betaBeliefs:u,ddComplete:d,ddNextNodeId:h,questionsAnswered:g,onNodeClick:x,onReset:w,isMobile:$}){const z=Object.fromEntries(o.map(P=>[P.id,P])),k=P=>{var V,ne;return n==="pl"?(V=z[P])==null?void 0:V.labelPl:(ne=z[P])==null?void 0:ne.label},D=s.filter(P=>a[P]==="known"),q=s.filter(P=>a[P]==="unknown"),B=s.filter(P=>a[P]==="uncertain"),E=s.length,I=D.length+q.length,W=E>0?Math.round(I/E*100):0,F=k(r),O=$?11:9,Y=$?{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return v.jsxs("div",{style:Y,children:[$&&v.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:v.jsx("div",{style:{width:36,height:4,borderRadius:2,background:G.textFaint}})}),v.jsxs("div",{style:{fontWeight:700,fontSize:$?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsxs("span",{children:[K("deepDiveHeader",n)," ",d?"✓":""]}),v.jsx("button",{onClick:w,style:{fontSize:O,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${G.textFaint}`,color:G.textDim,minHeight:$?32:"auto"},children:K("reset",n)})]}),v.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[v.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:K("deepDiveTarget",n)}),v.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:F}),v.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[E," ",K("deepDiveNodes",n)]})]}),v.jsxs("div",{style:{marginBottom:10},children:[v.jsx("div",{style:{height:5,borderRadius:3,background:"#10141c",overflow:"hidden",marginBottom:4},children:v.jsx("div",{style:{height:"100%",borderRadius:3,width:`${W}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[v.jsxs("span",{children:[K("classified",n),": ",v.jsxs("span",{style:{color:"#f5f6fa"},children:[I,"/",E]})]}),v.jsxs("span",{children:[K("questions",n),": ",v.jsx("span",{style:{color:"#f5f6fa"},children:g})]})]})]}),d&&v.jsxs("div",{children:[v.jsxs("div",{style:{background:D.length>q.length?"#27ae6018":"#e74c3c18",border:`1px solid ${D.length>q.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[v.jsx("div",{style:{color:D.length>q.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:K("diagReady",n)}),v.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[K("diagKnown",n),": ",v.jsx("span",{style:{color:"#2ecc71"},children:D.length})," / ",K("diagStudy",n),": ",v.jsx("span",{style:{color:"#ff6b6b"},children:q.length})," / ",K("diagTotal",n),": ",E]})]}),q.length>0&&v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:K("studyThese",n)}),s.filter(P=>a[P]==="unknown").slice(0,8).map(P=>{var V;return v.jsx(Ld,{id:P,label:k(P),scope:(V=z[P])==null?void 0:V.scope,classification:"unknown",beta:u[P]},P)})]}),D.length>0&&v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:K("mastered",n)}),s.filter(P=>a[P]==="known").map(P=>{var V;return v.jsx(Ld,{id:P,label:k(P),scope:(V=z[P])==null?void 0:V.scope,classification:"known",beta:u[P]},P)})]})]}),!d&&v.jsxs(v.Fragment,{children:[h&&v.jsxs("div",{style:{marginBottom:10},children:[v.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:K("nextQuestion",n)}),v.jsxs("div",{onClick:()=>x==null?void 0:x(h),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[k(h),v.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[K("confidence",n),": ",L8(u[h])]})]})]}),B.length>0&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[K("unclassified",n)," (",B.length,")"]}),B.map(P=>v.jsxs("div",{onClick:()=>x==null?void 0:x(P),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:P===h?"#4a9eff18":"#f39c1212",border:`1px solid ${P===h?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:P===h?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsx("span",{children:k(P)}),v.jsx(ef,{beta:u[P]})]},P))]})]})]})}function L8(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function ef({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),a=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return v.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#10141c",overflow:"hidden",flexShrink:0},children:v.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:a,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function Ld({id:o,label:n,scope:r,classification:s,beta:a}){const u=s==="known"?"#27ae60":"#e74c3c";return v.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsx("span",{children:n}),v.jsx(ef,{beta:a})]})}function O8({lang:o,diagMode:n,SCOPE_COLORS:r,SCOPE_LABELS:s,SECTIONS:a}){const[u,d]=H.useState(!1),h=Object.entries(r).map(([g,x])=>{var w;return{color:x,label:(w=s[g])==null?void 0:w[o==="pl"?"pl":"en"]}});return v.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#161c2895",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[v.jsxs("button",{onClick:()=>d(g=>!g),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[v.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),K("legendTitle",o)]}),u&&v.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&v.jsxs("div",{style:{marginBottom:8},children:[[{color:G.knownHi,label:K("legendKnown",o)},{color:G.unknownHi,label:K("legendUnknown",o)},{color:G.frontier,label:K("legendFrontier",o)},{color:"#4a5568",label:K("legendUnclassified",o)}].map(({color:g,label:x})=>v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[v.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),v.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),v.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),v.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:K("legendScopes",o)}),h.map(({color:g,label:x})=>v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[v.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),v.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),v.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[v.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:K("legendStages",o)}),Object.entries(a).map(([g,x])=>v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[v.jsx("div",{style:{width:8,height:3,borderRadius:1,background:x.color,flexShrink:0}}),v.jsx("span",{style:{color:"#8a9dbe"},children:x.label})]},g))]})]})]})}function H8({nodes:o,lang:n,onSelect:r,onClose:s,SECTIONS:a,SCOPE_COLORS:u}){const[d,h]=H.useState(""),[g,x]=H.useState(-1),w=H.useRef([]),$=H.useMemo(()=>Object.keys(a??{}),[a]),z=H.useMemo(()=>{const E=d.toLowerCase();return o.filter(I=>!E||I.label.toLowerCase().includes(E)||I.labelPl.toLowerCase().includes(E))},[o,d]),k=H.useMemo(()=>{const E={};for(const W of $)E[W]=[];for(const W of z){const F=W.section??$[0]??"default";E[F]||(E[F]=[]),E[F].push(W)}const I=[];for(const W of $)for(const F of E[W]??[])I.push(F);return I},[z,$]),D=H.useMemo(()=>{const E={};for(const I of $)E[I]=[];for(const I of z){const W=I.section??$[0]??"default";E[W]||(E[W]=[]),E[W].push(I)}return E},[z,$]),q=E=>n==="pl"?E.labelPl:E.label;H.useEffect(()=>{const E=I=>{if(I.key==="Escape"){s();return}I.key==="ArrowDown"&&(I.preventDefault(),x(W=>Math.min(W+1,k.length-1))),I.key==="ArrowUp"&&(I.preventDefault(),x(W=>Math.max(W-1,0))),I.key==="Enter"&&g>=0&&k[g]&&(I.preventDefault(),r(k[g].id))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[k,g,s,r]),H.useEffect(()=>{g>=0&&w.current[g]&&w.current[g].scrollIntoView({block:"nearest"})},[g]),H.useEffect(()=>{x(-1)},[d]);const B={title:n==="pl"?"Wybierz cel":"Select Goal",subtitle:n==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:n==="pl"?"Szukaj tematu...":"Search topics...",noResults:n==="pl"?"Brak wyników":"No results",footer:`${z.length} / ${o.length} ${n==="pl"?"tematów":"topics"}`,cancel:n==="pl"?"Anuluj":"Cancel"};return v.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:E=>{E.target===E.currentTarget&&s()},children:v.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[v.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #263248",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[v.jsxs("div",{children:[v.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:B.title}),v.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:B.subtitle})]}),v.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),v.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:v.jsx("input",{autoFocus:!0,value:d,onChange:E=>h(E.target.value),placeholder:B.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#10141c",border:"1px solid #263248",color:"#c8d6e5",outline:"none"}})}),v.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[$.map(E=>{const I=D[E];if(!I||I.length===0)return null;const W=a==null?void 0:a[E];return v.jsxs("div",{style:{marginBottom:12},children:[v.jsx("div",{style:{fontSize:9,fontWeight:700,color:(W==null?void 0:W.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(W==null?void 0:W.label)??E}),v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:I.map(F=>{const O=k.indexOf(F),Y=(u==null?void 0:u[F.scope])??"#4a9eff",P=g===O;return v.jsxs("button",{ref:V=>w.current[O]=V,onClick:()=>r(F.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:P?`${Y}35`:`${Y}15`,border:`1px solid ${P?Y:`${Y}40`}`,color:"#c8d6e5",cursor:"pointer",outline:P?`2px solid ${Y}`:"none",outlineOffset:1},onMouseEnter:V=>{V.currentTarget.style.background=`${Y}30`,V.currentTarget.style.borderColor=`${Y}90`},onMouseLeave:V=>{k.indexOf(F)!==g&&(V.currentTarget.style.background=`${Y}15`,V.currentTarget.style.borderColor=`${Y}40`)},children:[v.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:Y,verticalAlign:"middle"}}),q(F)]},F.id)})})]},E)}),z.length===0&&v.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:B.noResults})]}),v.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:B.footer}),v.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:B.cancel})]})]})})}function W8({isOpen:o,onSelect:n,onClose:r,lang:s="pl"}){const a=[{id:"quick",icon:"⚡",color:"#4a9eff",label:K("modeQuickLabel",s),description:K("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:K("modeDeepLabel",s),description:K("modeDeepDesc",s)}],[u,d]=H.useState(null),h=H.useRef(null);return H.useEffect(()=>{o&&(d(null),setTimeout(()=>{var g;return(g=h.current)==null?void 0:g.focus()},100))},[o]),H.useEffect(()=>{if(!o)return;const g=x=>{x.key==="Escape"&&r(),x.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[o,u,r,n]),o?v.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:g=>{g.target===g.currentTarget&&r()},children:v.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[v.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #263248"},children:[v.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:K("modePickerTitle",s)}),v.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:K("modePickerSub",s)})]}),v.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:a.map((g,x)=>v.jsxs("button",{ref:x===0?h:null,onClick:()=>d(g.id),onDoubleClick:()=>n(g.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===g.id?`${g.color}18`:"#10141c",border:`1px solid ${u===g.id?g.color:"#263248"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:w=>{w.currentTarget.style.background=`${g.color}18`,w.currentTarget.style.borderColor=`${g.color}60`},onMouseLeave:w=>{u!==g.id&&(w.currentTarget.style.background="#10141c",w.currentTarget.style.borderColor="#263248")},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[v.jsx("span",{style:{fontSize:16},children:g.icon}),v.jsx("span",{style:{fontWeight:600,color:u===g.id?g.color:"#f5f6fa"},children:g.label})]}),v.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:g.description})]},g.id))}),v.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:K("cancel",s)}),v.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#263248",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:K("next",s)})]})]})}):null}const G8=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function U8({isOpen:o,onSelect:n,onClose:r,lang:s}){return H.useEffect(()=>{if(!o)return;const a=u=>{u.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,r]),o?v.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&r()},children:v.jsxs("div",{style:{width:"100%",maxWidth:480,background:G.surface,border:"1px solid #263248",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[v.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:"1px solid #263248",textAlign:"center"},children:[v.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),v.jsx("div",{style:{fontWeight:700,fontSize:18,color:G.textPrimary,marginBottom:8},children:K("onboardingTitle",s)}),v.jsx("div",{style:{fontSize:12,color:G.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:K("onboardingSub",s)})]}),v.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[v.jsx("div",{style:{fontSize:11,color:G.textFaint,marginBottom:2},children:K("onboardingChoose",s)}),G8.map(({id:a,key:u,descKey:d,color:h})=>v.jsxs("button",{onClick:()=>n(a),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${h}0e`,border:`1px solid ${h}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${h}1c`,g.currentTarget.style.borderColor=`${h}70`},onMouseLeave:g=>{g.currentTarget.style.background=`${h}0e`,g.currentTarget.style.borderColor=`${h}30`},children:[v.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0,marginTop:5}}),v.jsxs("div",{style:{flex:1},children:[v.jsx("div",{style:{fontWeight:600,fontSize:13,color:G.textPrimary,marginBottom:3},children:K(u,s)}),v.jsx("div",{style:{fontSize:11,color:G.textDim,lineHeight:1.5},children:K(d,s)})]}),v.jsx("div",{style:{color:h,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},a))]}),v.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:G.textFaint,textAlign:"center"},children:K("onboardingLangHint",s)})]})}):null}function V8({lang:o,setLang:n,layoutId:r,layouts:s,onLayoutChange:a,searchTerm:u,setSearchTerm:d,filterScope:h,toggleScope:g,clearScope:x,filterSection:w,toggleSection:$,clearSection:z,SECTIONS:k,SCOPE_COLORS:D,SCOPE_LABELS:q,isMobile:B}){const[E,I]=H.useState(!1),W=H.useRef(null);H.useEffect(()=>{if(!E)return;const O=P=>{W.current&&!W.current.contains(P.target)&&I(!1)},Y=P=>{P.key==="Escape"&&I(!1)};return document.addEventListener("mousedown",O),document.addEventListener("keydown",Y),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",Y)}},[E]);const F=h.size+w.size+(u?1:0);return v.jsxs("div",{ref:W,style:{position:"relative"},children:[v.jsxs("button",{onClick:()=>I(O=>!O),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:E||F>0?"1px solid #4a9eff":`1px solid ${G.border}`,background:E?"#4a9eff22":"transparent",color:E||F>0?"#4a9eff":G.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:K("moreOptions",o),children:[v.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[v.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),v.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),v.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),F>0&&v.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:F})]}),E&&v.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:B?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:G.surface,border:`1px solid ${G.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[v.jsxs("div",{style:{marginBottom:14},children:[v.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("search",o)}),v.jsx("input",{value:u,onChange:O=>d(O.target.value),placeholder:K("search",o),style:{width:"100%",boxSizing:"border-box",background:G.bg,border:`1px solid ${G.border}`,borderRadius:6,color:G.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),v.jsxs("div",{style:{marginBottom:14},children:[v.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),v.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(O=>v.jsx("button",{onClick:()=>n(O),style:{...Ai(o===O,O==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:O.toUpperCase()},O))})]}),v.jsxs("div",{style:{marginBottom:14},children:[v.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("layoutLabel",o)}),v.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(O=>v.jsx("button",{onClick:()=>a(O.meta.id),style:{...Ai(r===O.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:O.meta.label},O.meta.id))})]}),v.jsxs("div",{style:{marginBottom:14},children:[v.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("filterSection",o)}),v.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[v.jsx("button",{style:{...Ai(w.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:z,children:K("all",o)}),Object.entries(k).map(([O,Y])=>v.jsx("button",{style:{...Ai(w.has(O),Y.color),fontSize:11,padding:"4px 10px"},onClick:()=>$(O),children:Y.label},O))]})]}),v.jsxs("div",{children:[v.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("filterScope",o)}),v.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[v.jsx("button",{style:{...Ai(h.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:x,children:K("all",o)}),Object.entries(D).map(([O,Y])=>{var P;return v.jsx("button",{style:{...Ai(h.has(O),Y),fontSize:11,padding:"4px 10px"},onClick:()=>g(O),children:(P=q[O])==null?void 0:P[o==="pl"?"pl":"en"]},O)})]})]})]})]})}const Od={x:40,y:40,scale:.72},Hd={x:20,y:20,scale:.42};function K8({courseId:o,RAW_NODES:n,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:d,COURSE_META:h,onBackToCourses:g,initialBelief:x,initialLang:w,onBackToHome:$}){const z=F7(),[k,D]=H.useState(Xd),[q,B]=$n("lang",w??"pl"),[E,I]=H.useState(new Set),[W,F]=H.useState(new Set),[O,Y]=H.useState(""),[P,V]=H.useState(null),[ne,me]=H.useState(null),[se,ae]=H.useState(null),[ve,xe]=H.useState(!1),[Fe,Be]=H.useState(!1),Le=!!x,[ue,we]=$n("onboardingSeen",!1),[de,A]=H.useState(!ue&&!Le),Q=H.useCallback(()=>{we(!0),A(!1)},[we]),$e=H.useCallback(Z=>I(Ne=>{const We=new Set(Ne);return We.has(Z)?We.delete(Z):We.add(Z),We}),[]),je=H.useCallback(Z=>F(Ne=>{const We=new Set(Ne);return We.has(Z)?We.delete(Z):We.add(Z),We}),[]),Se=H.useCallback(()=>I(new Set),[]),De=H.useCallback(()=>F(new Set),[]),he=H.useMemo(()=>Ql(n,r),[n,r]),[Te,be]=H.useState(()=>yl(k,300,n,r)),He=H.useMemo(()=>n.map(Z=>{var Ne,We;return{...Z,x:((Ne=Te[Z.id])==null?void 0:Ne.x)??Z.x,y:((We=Te[Z.id])==null?void 0:We.y)??Z.y}}),[n,Te]),bt=H.useRef(null),{viewTransform:Nn,setViewTransform:tn,toCanvas:Dr,startPan:Pr,cursorStyle:nr,setCursorStyle:rr,handleMouseMove:ir,handleMouseUp:kn}=q7(bt),{startNodeDrag:Vt,handleDragMove:Bt,handleDragEnd:oi}=M7(Dr,He,be,rr),{diagMode:Oe,setDiagMode:nn,mode:lt,setMode:Br,quizNode:Nt,setQuizNode:zn,questionsAnswered:Ii,setAnsweredQuestions:Nr,getAnsweredIndices:Ir,handleDiagClick:Io,handleQuizAnswer:Fo,resetDiagnostic:Sn,startDeepDive:Fi,targetNode:In,belief:si,setBelief:Li,frontier:Oi,visibleFrontier:ai,hasStarted:Tn,nextSuggestedId:pn,expectedRemaining:Lo,pCorrect:Oo,sessionComplete:li,betaBeliefs:Ho,subgraphIds:or,ddClassification:sr,ddNextNodeId:Fr,ddComplete:Fn}=I7(he,s,o);H.useEffect(()=>{x&&Object.keys(x).length>0&&Li(x)},[]);const Hi=H.useCallback(Z=>{Z.lang&&B(Z.lang),Z.view==="node"?(V(Z.nodeId),ae(null)):Z.view==="resource"?(V(Z.nodeId),ae(Z.resourceIndex)):Z.view==="diagnostic"?Z.mode==="quick"?(nn(!0),Br("quick"),V(null)):Z.mode==="deepdive"&&Z.goalNode&&(nn(!0),Fi(Z.goalNode)):(V(null),ae(null))},[B,nn,Br,Fi]),{setRoute:rn}=H7(Hi);H.useEffect(()=>{Oe?rn(lt==="deepdive"&&In?{view:"diagnostic",mode:"deepdive",goalNode:In,lang:q}:{view:"diagnostic",mode:"quick",lang:q}):P?se!=null?rn({view:"resource",nodeId:P,resourceIndex:se,lang:q}):rn({view:"node",nodeId:P,lang:q}):rn({view:"graph",lang:q})},[P,se,Oe,lt,In,q,rn]);const qs=H.useMemo(()=>{const Z=O.toLowerCase(),Ne=n.filter(We=>!(E.size>0&&!E.has(We.scope)||W.size>0&&!W.has(We.section)||Z&&!We.label.toLowerCase().includes(Z)&&!We.labelPl.toLowerCase().includes(Z)));return Ne.length<n.length?new Set(Ne.map(We=>We.id)):null},[n,E,W,O]),hn=P||ne,Lr=H.useMemo(()=>{var Ne,We;if(!hn)return null;const Z=new Set([hn]);return(Ne=he.prereqs[hn])==null||Ne.forEach(ar=>Z.add(ar)),(We=he.dependents[hn])==null||We.forEach(ar=>Z.add(ar)),Z},[hn,he]),Or=H.useMemo(()=>!Oe||lt!=="deepdive"||or.length===0?null:new Set(or),[Oe,lt,or]),Wi=H.useCallback(Z=>{const Ne=Z.target.closest("[data-node-id]");if(Ne){Vt(Ne.getAttribute("data-node-id"),Z.clientX,Z.clientY),Z.stopPropagation();return}Pr(Z.clientX,Z.clientY)},[Vt,Pr]),Ms=H.useCallback(Z=>{Bt(Z.clientX,Z.clientY)||ir(Z)},[Bt,ir]),Wo=H.useCallback(()=>{oi(),kn()},[oi,kn]),As=H.useCallback(Z=>{z&&!Z.target.closest("[data-node-id]")&&V(null)},[z]),Kt=H.useRef(!1);H.useEffect(()=>{if(!(!Oe||lt!=="quick")&&!Nt&&pn&&!li&&Tn&&Kt.current){Kt.current=!1;const Z=setTimeout(()=>zn(pn),400);return()=>clearTimeout(Z)}},[Oe,lt,Nt,pn,li,Tn]),H.useEffect(()=>{if(!(!Oe||lt!=="deepdive")&&!Nt&&Fr&&!Fn&&Kt.current){Kt.current=!1;const Z=setTimeout(()=>zn(Fr),400);return()=>clearTimeout(Z)}},[Oe,lt,Nt,Fr,Fn]),H.useEffect(()=>{const Z=Ne=>{Ne.key==="Escape"&&(V(null),xe(!1))};return window.addEventListener("keydown",Z),()=>window.removeEventListener("keydown",Z)},[]);const Go=H.useCallback(Z=>{D(Z),be(yl(Z,300,n,r)),tn(z?Hd:Od)},[tn,n,r,z]),Uo=H.useCallback(()=>{Oe?(nn(!1),Sn(),V(null)):Be(!0)},[Oe,nn,Sn]),Gi=H.useCallback(Z=>{Be(!1),Sn(),Z==="deepdive"?(nn(!0),xe(!0)):(nn(!0),Br("quick"),V(null))},[nn,Br,Sn]),Vo=H.useCallback(Z=>{we(!0),A(!1),(Z==="quick"||Z==="deepdive")&&Gi(Z)},[we,Gi]),Ko=H.useMemo(()=>{if(lt!=="deepdive")return{};const Z={};for(const[Ne,We]of Object.entries(sr))We==="known"?Z[Ne]="known":We==="unknown"&&(Z[Ne]="unknown");return Z},[lt,sr]),Ui=lt==="deepdive"?Ko:si,Qo=lt==="deepdive"?or.filter(Z=>sr[Z]==="uncertain"):ai,Cs=q==="pl"?h.title??h.titleEn:h.titleEn??h.title,Rs=de||Fe||ve,tt=(Z,Ne="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:Z?`1px solid ${Ne}`:`1px solid ${G.border}`,background:Z?`${Ne}22`:"transparent",color:Z?Ne:G.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:Z?600:400});return v.jsxs("div",{style:{width:"100%",height:"100dvh",background:G.bg,fontFamily:pt,color:G.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[v.jsxs("div",{style:{padding:z?"8px 12px":"8px 16px",borderBottom:`1px solid ${G.borderSubtle}`,display:"flex",alignItems:"center",gap:z?8:10,flexShrink:0},children:[($||g)&&v.jsx("button",{onClick:$??g,style:{...tt(!1),padding:"7px 10px"},children:"←"}),v.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:G.textPrimary,letterSpacing:z?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:Cs}),v.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${G.border}`},children:[v.jsx("button",{onClick:()=>{Oe&&(nn(!1),Sn(),V(null))},style:{padding:z?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Oe?400:700,background:Oe?"transparent":"#4a9eff22",color:Oe?G.textDim:"#4a9eff"},children:K("exploreMode",q)}),v.jsx("button",{onClick:()=>{Oe||Be(!0)},style:{padding:z?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${G.border}`,fontWeight:Oe?700:400,background:Oe?"#f39c1222":"transparent",color:Oe?"#f39c12":G.textDim},children:K(Oe?lt==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",q)})]}),Oe&&v.jsx("button",{onClick:()=>xe(!0),style:tt(lt==="deepdive","#8e44ad"),children:K("goalBtn",q)}),v.jsx(V8,{lang:q,setLang:Z=>B(Z),layoutId:k,layouts:Zd,onLayoutChange:Go,searchTerm:O,setSearchTerm:Y,filterScope:E,toggleScope:$e,clearScope:Se,filterSection:W,toggleSection:je,clearSection:De,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:d,isMobile:z})]}),v.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[v.jsxs("svg",{ref:bt,width:"100%",height:"100%",style:{cursor:nr,touchAction:"none",pointerEvents:Rs?"none":"auto"},onMouseDown:Wi,onMouseMove:Ms,onMouseUp:Wo,onMouseLeave:Wo,onClick:Z=>{if(As(Z),!Oe)return;const Ne=Z.target.closest("[data-node-id]");Ne&&Io(Ne.getAttribute("data-node-id"),Z.shiftKey)},children:[v.jsxs("defs",{children:[v.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:v.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),v.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:v.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),v.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:v.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#151b26"})})]}),v.jsxs("g",{transform:`translate(${Nn.x},${Nn.y}) scale(${Nn.scale})`,children:[v.jsx(W7,{edges:r,nodes:He,highlightedIds:Oe&&lt==="deepdive"?Or:Lr}),v.jsx(V7,{nodes:He,filteredIds:Oe&&lt==="deepdive"?Or:qs,highlightedIds:Oe?null:Lr,selected:P,onSelect:Z=>{if(Oe){Io(Z,!1);return}ae(null),V(Z===P?null:Z)},onHover:me,lang:q,diagMode:Oe,belief:Ui,frontier:Qo,scale:Nn.scale,scopeColors:u})]})]}),P&&!Oe&&v.jsx(Q7,{nodeId:P,nodes:He,adjacency:he,lang:q,SCOPE_COLORS:u,SCOPE_LABELS:d,SECTIONS:a,belief:Ui,onClose:()=>V(null),onNavigate:Z=>V(Z)}),Oe&&Nt&&v.jsx(B8,{nodeId:Nt,nodes:He,lang:q,questionBank:s,excludeIndices:Ir(Nt),isMobile:z,onAnswer:(Z,Ne,We)=>{Kt.current=!0,Fo(Nt,Z,Ne,We)},onSkip:Z=>{typeof Z=="number"&&Nr(Ne=>new Set([...Ne,`${Nt}:${Z}`])),zn(null)}}),Oe&&lt==="quick"&&v.jsx(I8,{belief:si,frontier:Oi,visibleFrontier:ai,hasStarted:Tn,nextSuggestedId:pn,sessionComplete:li,adjacency:he,expectedRemaining:Lo,pCorrect:Oo,questionsAnswered:Ii,nodes:He,lang:q,onNodeClick:Z=>zn(Z),onReset:Sn,SCOPE_LABELS:d,isMobile:z}),Oe&&lt==="deepdive"&&In&&v.jsx(F8,{nodes:He,lang:q,targetNode:In,subgraphIds:or,ddClassification:sr,betaBeliefs:Ho,ddComplete:Fn,ddNextNodeId:Fr,questionsAnswered:Ii,onNodeClick:Z=>zn(Z),onReset:Sn,isMobile:z}),!z&&v.jsx(O8,{lang:q,diagMode:Oe,SCOPE_COLORS:u,SCOPE_LABELS:d,SECTIONS:a}),v.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([Z,Ne])=>v.jsx("button",{onClick:()=>{Ne===null?(be(yl(k,300,n,r)),tn(z?Hd:Od)):tn(We=>({...We,scale:Math.max(.15,Math.min(5,We.scale*Ne))}))},style:{width:44,height:44,background:G.surface,border:`1px solid ${G.border}`,color:G.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:Z},Z))}),z&&Oe&&!Nt&&v.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${G.surface}ee`,borderTop:`1px solid ${G.border}`,display:"flex",gap:0,zIndex:20},children:[v.jsx("button",{onClick:()=>xe(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${G.border}`,color:lt==="deepdive"?"#c39bd3":G.textDim,cursor:"pointer"},children:K("goalBtn",q)}),v.jsx("button",{onClick:Uo,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:K("reset",q)})]})]}),ve&&v.jsx(H8,{nodes:He,lang:q,SECTIONS:a,SCOPE_COLORS:u,onSelect:Z=>{xe(!1),Fi(Z)},onClose:()=>xe(!1)}),v.jsx(W8,{isOpen:Fe,onSelect:Gi,onClose:()=>Be(!1),lang:q}),v.jsx(U8,{isOpen:de,onSelect:Vo,onClose:Q,lang:q})]})}function Q8({lang:o,setLang:n,onStartQuiz:r,onBrowseMap:s}){const[a,u]=H.useState("standard");return v.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:pt,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[v.jsx("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${G.border}`},children:["pl","en"].map(d=>v.jsx("button",{onClick:()=>n(d),style:{padding:"6px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:d==="en"?`1px solid ${G.border}`:"none",background:o===d?"#4a9eff18":"transparent",color:o===d?"#4a9eff":G.textDim,fontWeight:o===d?600:400,fontFamily:pt},children:d.toUpperCase()},d))}),v.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[v.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[v.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:G.edgeDefault,strokeWidth:"1.5"}),v.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:G.edgeDefault,strokeWidth:"1.5"}),v.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:G.edgeDefault,strokeWidth:"1.5"}),v.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:G.edgeDefault,strokeWidth:"1.5"}),v.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:G.edgeDefault,strokeWidth:"1.5"}),v.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),v.jsx("circle",{cx:"14",cy:"44",r:"5",fill:G.known,opacity:"0.8"}),v.jsx("circle",{cx:"40",cy:"44",r:"5",fill:G.frontier,opacity:"0.8"}),v.jsx("circle",{cx:"66",cy:"44",r:"5",fill:G.unknown,opacity:"0.6"})]}),v.jsx("div",{style:{fontSize:13,fontWeight:600,color:G.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),v.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:G.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:K("heroTitle",o)}),v.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:G.textDim,maxWidth:360},children:K("heroSub",o)}),v.jsx("button",{onClick:()=>r(a),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:pt,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:d=>{d.currentTarget.style.background="#4a9eff28",d.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:d=>{d.currentTarget.style.background="#4a9eff18",d.currentTarget.style.borderColor="#4a9eff50"},children:K("heroStart",o)}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,fontSize:12},children:[v.jsx("span",{style:{color:G.textFaint},children:K("heroLength",o)}),v.jsx("select",{value:a,onChange:d=>u(d.target.value),style:{background:G.surface,border:`1px solid ${G.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:pt,color:G.textBody,cursor:"pointer",outline:"none"},children:Object.entries(Pl).map(([d,h])=>v.jsxs("option",{value:d,children:[K(h.labelKey,o)," (~",h.maxQuestions," ",K("heroQuestions",o),")"]},d))})]}),v.jsx("button",{onClick:s,style:{padding:"12px 24px",fontSize:13,fontFamily:pt,borderRadius:8,border:"none",background:"transparent",color:G.textDim,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:d=>{d.currentTarget.style.color=G.textBody},onMouseLeave:d=>{d.currentTarget.style.color=G.textDim},children:K("heroBrowse",o)}),v.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:G.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:K("heroStep1",o)},{num:"2",text:K("heroStep2",o)},{num:"3",text:K("heroStep3",o)}].map(({num:d,text:h})=>v.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[v.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${G.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:G.textDim,flexShrink:0},children:d}),v.jsx("span",{children:h})]},d))})]})]})}function Y8({RAW_NODES:o,RAW_EDGES:n,QUESTION_BANK:r,lang:s,quizPreset:a="standard",onComplete:u,onExit:d}){var Se,De;const h=Pl[a]??Pl.standard,g=H.useMemo(()=>Ql(o,n),[o,n]),x=H.useMemo(()=>[...new Set([...Object.keys(g.prereqs),...Object.keys(g.dependents),...Object.keys(r)])].map(Te=>({id:Te})),[g,r]),w=H.useMemo(()=>Object.fromEntries(o.map(he=>[he.id,he])),[o]),[$,z]=H.useState({}),[k,D]=H.useState({correct:0,incorrect:0,questionsAnswered:0}),[q,B]=H.useState(new Set),[E,I]=H.useState("answering"),[W,F]=H.useState(null),[O,Y]=H.useState(0),P=H.useMemo(()=>{const he=k.correct+k.incorrect;return he===0?.5:(k.correct+.5)/(he+1)},[k]),V=H.useMemo(()=>em(x,$,g,P),[x,$,g,P]),ne=H.useMemo(()=>{const he=[];return q.forEach(Te=>{const[be,He]=Te.split(":");be===V&&he.push(parseInt(He,10))}),he},[q,V]),me=H.useMemo(()=>V?Kd(r,V,ne):null,[r,V,ne]),se=H.useMemo(()=>me?Do.random(me.options.length):null,[me]),ae=H.useMemo(()=>se?se.apply(me.options):[],[se,me]),ve=H.useMemo(()=>se?se.displayIndex(me.correct):-1,[se,me]),xe=H.useMemo(()=>rm(x,$,k.questionsAnswered,h),[x,$,k.questionsAnswered,h]);H.useEffect(()=>{xe&&k.questionsAnswered>0&&I("done")},[xe,k.questionsAnswered]);const Fe=H.useCallback(()=>{W!==null&&I("revealed")},[W]),Be=H.useCallback(()=>{const he=W===ve,Te=(me==null?void 0:me.tests)??{[V]:1};z(be=>Dl(V,he,Te,be,g)),(me==null?void 0:me.index)!=null&&B(be=>new Set([...be,`${V}:${me.index}`])),D(be=>({correct:be.correct+(he?1:0),incorrect:be.incorrect+(he?0:1),questionsAnswered:be.questionsAnswered+1})),F(null),I("answering"),Y(be=>be+1)},[W,ve,me,V,g]),Le=H.useCallback(he=>{const Te={[V]:1};z(be=>Dl(V,he,Te,be,g)),B(be=>new Set([...be,`${V}:-1`])),D(be=>({correct:be.correct+(he?1:0),incorrect:be.incorrect+(he?0:1),questionsAnswered:be.questionsAnswered+1})),Y(be=>be+1)},[V,g]);H.useEffect(()=>{const he=Te=>{if(Te.key==="Enter"&&(E==="answering"&&W!==null?Fe():E==="revealed"&&Be()),E==="answering"&&["1","2","3","4"].includes(Te.key)){const be=parseInt(Te.key)-1;be<ae.length&&F(be)}};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)},[E,W,Fe,Be,ae.length]),H.useEffect(()=>{E==="done"&&u($,k)},[E]);const ue=V?(s==="pl"?(Se=w[V])==null?void 0:Se.labelPl:(De=w[V])==null?void 0:De.label)??V:"",we=he=>v.jsx("span",{dangerouslySetInnerHTML:{__html:Jm(he)}});if(E==="done"||!V&&k.questionsAnswered>0)return v.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:pt,display:"flex",alignItems:"center",justifyContent:"center",color:G.textDim,fontSize:14},children:[K("quizContinue",s),"..."]});const de=Object.values($).filter(he=>he==="known").length,A=Object.values($).filter(he=>he==="unknown").length,Q=de+A,$e=x.length,je=$e>0?Math.round(Q/$e*100):0;return v.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:pt,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[v.jsxs("div",{style:{width:"100%",maxWidth:520,padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[v.jsx("button",{onClick:d,style:{padding:"6px 12px",fontSize:12,fontFamily:pt,borderRadius:6,border:`1px solid ${G.border}`,background:"transparent",color:G.textDim,cursor:"pointer"},children:K("quizExit",s)}),v.jsxs("span",{style:{fontSize:12,color:G.textFaint},children:[K("quizQuestion",s)," ",k.questionsAnswered+1]})]}),v.jsxs("div",{style:{width:"100%",maxWidth:520,marginTop:16},children:[v.jsx("div",{style:{height:3,borderRadius:2,background:G.border,overflow:"hidden"},children:v.jsx("div",{style:{height:"100%",borderRadius:2,width:`${je}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:G.textFaint},children:[v.jsxs("span",{children:[Q,"/",$e," ",K("quizClassified",s)]}),v.jsxs("span",{children:[Math.round(P*100),"% ",K("quizAccuracy",s)]})]})]}),v.jsxs("div",{style:{width:"100%",maxWidth:520,marginTop:40,animation:"fadeIn 0.25s ease"},children:[v.jsx("div",{style:{fontSize:11,color:G.textFaint,marginBottom:16,letterSpacing:.5},children:ue}),me?v.jsxs(v.Fragment,{children:[v.jsx("div",{style:{fontSize:16,color:G.textPrimary,lineHeight:1.7,marginBottom:28},children:we(me.q)}),v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:ae.map((he,Te)=>{let be="transparent",He=G.border,bt=G.textBody;return W===Te&&E==="answering"&&(be="#4a9eff12",He="#4a9eff60",bt="#4a9eff"),E==="revealed"&&(Te===ve?(be="#27ae6015",He="#27ae6060",bt="#2ecc71"):Te===W?(be="#e74c3c15",He="#e74c3c60",bt="#ff6b6b"):bt=G.textFaint),v.jsxs("button",{onClick:()=>{E==="answering"&&F(Te)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:pt,cursor:E==="answering"?"pointer":"default",background:be,border:`1px solid ${He}`,color:bt,lineHeight:1.6,transition:"all 0.15s ease"},children:[v.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][Te]}),we(he)]},Te)})}),E==="revealed"&&me.hint&&v.jsx("div",{style:{fontSize:12,color:G.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${G.border}`},children:we(me.hint)}),E==="answering"?v.jsxs("button",{onClick:Fe,disabled:W===null,style:{...cs("#4a9eff"),width:"100%",opacity:W===null?.3:1},children:[K("quizCheck",s),v.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):v.jsxs("button",{onClick:Be,style:{...cs(W===ve?G.known:"#4a9eff"),width:"100%"},children:[K("quizContinue",s),v.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):v.jsxs("div",{children:[v.jsx("p",{style:{fontSize:15,color:G.textBody,lineHeight:1.7,marginBottom:24},children:K("quizNoQuestion",s)}),v.jsxs("div",{style:{display:"flex",gap:10},children:[v.jsx("button",{onClick:()=>Le(!0),style:{...cs(G.known),flex:1},children:K("quizYes",s)}),v.jsx("button",{onClick:()=>Le(!1),style:{...cs(G.unknown),flex:1},children:K("quizNo",s)})]})]})]},O),v.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function cs(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:pt,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function Z8({RAW_NODES:o,RAW_EDGES:n,SCOPE_COLORS:r,SCOPE_LABELS:s,belief:a,stats:u,lang:d,onSeeMap:h,onRetake:g}){const x=H.useMemo(()=>Ql(o,n),[o,n]),w=H.useMemo(()=>Object.fromEntries(o.map(I=>[I.id,I])),[o]),$=I=>{var W,F;return d==="pl"?(W=w[I])==null?void 0:W.labelPl:(F=w[I])==null?void 0:F.label},z=o.filter(I=>a[I.id]==="known"),k=o.filter(I=>a[I.id]==="unknown"),D=o.length,q=H.useMemo(()=>k.filter(I=>(x.prereqs[I.id]??[]).every(W=>a[W]==="known")).slice(0,8),[k,x,a]),B=u.correct+u.incorrect>0?Math.round((u.correct+.5)/(u.correct+u.incorrect+1)*100):50,E=q.length>0;return v.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:pt,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:v.jsxs("div",{style:{maxWidth:520,width:"100%"},children:[v.jsx("div",{style:{fontSize:11,color:G.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),v.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:G.textPrimary,lineHeight:1.3},children:K("resultsTitle",d)}),v.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:G.textDim,lineHeight:1.6},children:[u.questionsAnswered," ",K("resultsAnswered",d)," · ",B,"% ",K("resultsAccuracy",d)]}),v.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[v.jsx(Wd,{count:z.length,label:K("resultsKnown",d),color:G.known,total:D}),v.jsx(Wd,{count:k.length,label:K("resultsToStudy",d),color:"#e74c3c",total:D})]}),E&&v.jsxs("div",{style:{marginBottom:32},children:[v.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:G.textPrimary},children:K("resultsGapsTitle",d)}),v.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:G.textDim,lineHeight:1.6},children:K("resultsGapsSub",d)}),v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:q.map((I,W)=>{var P;const F=(r==null?void 0:r[I.scope])??G.textDim,O=((P=s==null?void 0:s[I.scope])==null?void 0:P[d==="pl"?"pl":"en"])??"",Y=I.resources&&I.resources.length>0;return v.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12},children:[v.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${F}18`,border:`1px solid ${F}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:F,flexShrink:0,fontWeight:600},children:W+1}),v.jsxs("div",{style:{flex:1},children:[v.jsx("div",{style:{fontSize:13,color:G.textPrimary,fontWeight:500},children:$(I.id)}),v.jsxs("div",{style:{fontSize:10,color:G.textFaint,marginTop:2},children:[O,Y&&v.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:K("resultsHasResource",d)})]})]})]},I.id)})}),k.length>q.length&&v.jsxs("div",{style:{marginTop:8,fontSize:11,color:G.textFaint},children:["+",k.length-q.length," ",K("resultsMore",d)]})]}),!E&&k.length===0&&v.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[v.jsx("div",{style:{fontSize:15,color:G.known,fontWeight:600,marginBottom:4},children:K("resultsAllGood",d)}),v.jsx("div",{style:{fontSize:12,color:G.textDim},children:K("resultsAllGoodSub",d)})]}),v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[v.jsx("button",{onClick:h,style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:pt,borderRadius:8,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer"},children:K("resultsSeeMap",d)}),v.jsx("button",{onClick:g,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:pt,borderRadius:8,border:`1px solid ${G.border}`,background:"transparent",color:G.textDim,cursor:"pointer"},children:K("resultsRetake",d)})]})]})})}function Wd({count:o,label:n,color:r,total:s}){const a=s>0?Math.round(o/s*100):0;return v.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[v.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),v.jsx("div",{style:{fontSize:11,color:G.textFaint,marginTop:6},children:n}),v.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:v.jsx("div",{style:{height:"100%",borderRadius:2,width:`${a}%`,background:r,opacity:.6}})}),v.jsxs("div",{style:{fontSize:10,color:G.textFaint,marginTop:4},children:[a,"% of ",s]})]})}function X8(){const o=l7,n=a7[o],[r,s]=$n("lang","pl"),[a,u]=H.useState("hero"),[d,h]=H.useState(null),[g,x]=H.useState(null),[w,$]=H.useState("standard"),z=H.useCallback((E="standard")=>{$(E),h(null),x(null),u("quiz")},[]),k=H.useCallback((E,I)=>{h(E),x(I),u("results")},[]),D=H.useCallback(()=>{u("map")},[]),q=H.useCallback(()=>{h(null),x(null),u("map")},[]),B=H.useCallback(()=>{u("hero")},[]);if(!n)return null;switch(a){case"hero":return v.jsx(Q8,{lang:r,setLang:s,onStartQuiz:z,onBrowseMap:q});case"quiz":return v.jsx(Y8,{RAW_NODES:n.RAW_NODES,RAW_EDGES:n.RAW_EDGES,QUESTION_BANK:n.QUESTION_BANK,lang:r,quizPreset:w,onComplete:k,onExit:B});case"results":return v.jsx(Z8,{RAW_NODES:n.RAW_NODES,RAW_EDGES:n.RAW_EDGES,SCOPE_COLORS:n.SCOPE_COLORS,SCOPE_LABELS:n.SCOPE_LABELS,belief:d,stats:g,lang:r,onSeeMap:D,onRetake:z});case"map":return v.jsx(K8,{courseId:o,RAW_NODES:n.RAW_NODES,RAW_EDGES:n.RAW_EDGES,QUESTION_BANK:n.QUESTION_BANK,SECTIONS:n.SECTIONS,SCOPE_COLORS:n.SCOPE_COLORS,SCOPE_LABELS:n.SCOPE_LABELS,COURSE_META:n.COURSE_META,initialBelief:d,initialLang:r,onBackToHome:B},o);default:return null}}Yp.createRoot(document.getElementById("root")).render(v.jsx(H.StrictMode,{children:v.jsx(X8,{})}));
