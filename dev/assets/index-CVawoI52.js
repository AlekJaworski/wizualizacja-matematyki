(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();var Js={exports:{}},yi={},el={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1;function Tm(){if(C1)return Ce;C1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),b=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,R={};function B(j,F,he){this.props=j,this.context=F,this.refs=R,this.updater=he||z}B.prototype.isReactComponent={},B.prototype.setState=function(j,F){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,F,"setState")},B.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function N(){}N.prototype=B.prototype;function O(j,F,he){this.props=j,this.context=F,this.refs=R,this.updater=he||z}var H=O.prototype=new N;H.constructor=O,P(H,B.prototype),H.isPureReactComponent=!0;var E=Array.isArray,G=Object.prototype.hasOwnProperty,U={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function W(j,F,he){var we,xe={},qe=null,Ee=null;if(F!=null)for(we in F.ref!==void 0&&(Ee=F.ref),F.key!==void 0&&(qe=""+F.key),F)G.call(F,we)&&!X.hasOwnProperty(we)&&(xe[we]=F[we]);var Re=arguments.length-2;if(Re===1)xe.children=he;else if(1<Re){for(var Ne=Array(Re),mt=0;mt<Re;mt++)Ne[mt]=arguments[mt+2];xe.children=Ne}if(j&&j.defaultProps)for(we in Re=j.defaultProps,Re)xe[we]===void 0&&(xe[we]=Re[we]);return{$$typeof:o,type:j,key:qe,ref:Ee,props:xe,_owner:U.current}}function J(j,F){return{$$typeof:o,type:j.type,key:F,ref:j.ref,props:j.props,_owner:j._owner}}function ve(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function ke(j){var F={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(he){return F[he]})}var Te=/\/+/g;function je(j,F){return typeof j=="object"&&j!==null&&j.key!=null?ke(""+j.key):F.toString(36)}function Pe(j,F,he,we,xe){var qe=typeof j;(qe==="undefined"||qe==="boolean")&&(j=null);var Ee=!1;if(j===null)Ee=!0;else switch(qe){case"string":case"number":Ee=!0;break;case"object":switch(j.$$typeof){case o:case n:Ee=!0}}if(Ee)return Ee=j,xe=xe(Ee),j=we===""?"."+je(Ee,0):we,E(xe)?(he="",j!=null&&(he=j.replace(Te,"$&/")+"/"),Pe(xe,F,he,"",function(mt){return mt})):xe!=null&&(ve(xe)&&(xe=J(xe,he+(!xe.key||Ee&&Ee.key===xe.key?"":(""+xe.key).replace(Te,"$&/")+"/")+j)),F.push(xe)),1;if(Ee=0,we=we===""?".":we+":",E(j))for(var Re=0;Re<j.length;Re++){qe=j[Re];var Ne=we+je(qe,Re);Ee+=Pe(qe,F,he,Ne,xe)}else if(Ne=k(j),typeof Ne=="function")for(j=Ne.call(j),Re=0;!(qe=j.next()).done;)qe=qe.value,Ne=we+je(qe,Re++),Ee+=Pe(qe,F,he,Ne,xe);else if(qe==="object")throw F=String(j),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Ke(j,F,he){if(j==null)return j;var we=[],xe=0;return Pe(j,we,"","",function(qe){return F.call(he,qe,xe++)}),we}function Ue(j){if(j._status===-1){var F=j._result;F=F(),F.then(function(he){(j._status===0||j._status===-1)&&(j._status=1,j._result=he)},function(he){(j._status===0||j._status===-1)&&(j._status=2,j._result=he)}),j._status===-1&&(j._status=0,j._result=F)}if(j._status===1)return j._result.default;throw j._result}var De={current:null},oe={transition:null},ye={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:oe,ReactCurrentOwner:U};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ke,forEach:function(j,F,he){Ke(j,function(){F.apply(this,arguments)},he)},count:function(j){var F=0;return Ke(j,function(){F++}),F},toArray:function(j){return Ke(j,function(F){return F})||[]},only:function(j){if(!ve(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Ce.Component=B,Ce.Fragment=r,Ce.Profiler=l,Ce.PureComponent=O,Ce.StrictMode=a,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Ce.act=ae,Ce.cloneElement=function(j,F,he){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var we=P({},j.props),xe=j.key,qe=j.ref,Ee=j._owner;if(F!=null){if(F.ref!==void 0&&(qe=F.ref,Ee=U.current),F.key!==void 0&&(xe=""+F.key),j.type&&j.type.defaultProps)var Re=j.type.defaultProps;for(Ne in F)G.call(F,Ne)&&!X.hasOwnProperty(Ne)&&(we[Ne]=F[Ne]===void 0&&Re!==void 0?Re[Ne]:F[Ne])}var Ne=arguments.length-2;if(Ne===1)we.children=he;else if(1<Ne){Re=Array(Ne);for(var mt=0;mt<Ne;mt++)Re[mt]=arguments[mt+2];we.children=Re}return{$$typeof:o,type:j.type,key:xe,ref:qe,props:we,_owner:Ee}},Ce.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:u,_context:j},j.Consumer=j},Ce.createElement=W,Ce.createFactory=function(j){var F=W.bind(null,j);return F.type=j,F},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(j){return{$$typeof:v,render:j}},Ce.isValidElement=ve,Ce.lazy=function(j){return{$$typeof:$,_payload:{_status:-1,_result:j},_init:Ue}},Ce.memo=function(j,F){return{$$typeof:x,type:j,compare:F===void 0?null:F}},Ce.startTransition=function(j){var F=oe.transition;oe.transition={};try{j()}finally{oe.transition=F}},Ce.unstable_act=ae,Ce.useCallback=function(j,F){return De.current.useCallback(j,F)},Ce.useContext=function(j){return De.current.useContext(j)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(j){return De.current.useDeferredValue(j)},Ce.useEffect=function(j,F){return De.current.useEffect(j,F)},Ce.useId=function(){return De.current.useId()},Ce.useImperativeHandle=function(j,F,he){return De.current.useImperativeHandle(j,F,he)},Ce.useInsertionEffect=function(j,F){return De.current.useInsertionEffect(j,F)},Ce.useLayoutEffect=function(j,F){return De.current.useLayoutEffect(j,F)},Ce.useMemo=function(j,F){return De.current.useMemo(j,F)},Ce.useReducer=function(j,F,he){return De.current.useReducer(j,F,he)},Ce.useRef=function(j){return De.current.useRef(j)},Ce.useState=function(j){return De.current.useState(j)},Ce.useSyncExternalStore=function(j,F,he){return De.current.useSyncExternalStore(j,F,he)},Ce.useTransition=function(){return De.current.useTransition()},Ce.version="18.3.1",Ce}var P1;function Cl(){return P1||(P1=1,el.exports=Tm()),el.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function Mm(){if(E1)return yi;E1=1;var o=Cl(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(v,p,x){var $,b={},k=null,z=null;x!==void 0&&(k=""+x),p.key!==void 0&&(k=""+p.key),p.ref!==void 0&&(z=p.ref);for($ in p)a.call(p,$)&&!u.hasOwnProperty($)&&(b[$]=p[$]);if(v&&v.defaultProps)for($ in p=v.defaultProps,p)b[$]===void 0&&(b[$]=p[$]);return{$$typeof:n,type:v,key:k,ref:z,props:b,_owner:l.current}}return yi.Fragment=r,yi.jsx=f,yi.jsxs=f,yi}var R1;function qm(){return R1||(R1=1,Js.exports=Mm()),Js.exports}var _=qm(),ee=Cl(),Oo={},tl={exports:{}},Ot={},nl={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function jm(){return D1||(D1=1,(function(o){function n(oe,ye){var ae=oe.length;oe.push(ye);e:for(;0<ae;){var j=ae-1>>>1,F=oe[j];if(0<l(F,ye))oe[j]=ye,oe[ae]=F,ae=j;else break e}}function r(oe){return oe.length===0?null:oe[0]}function a(oe){if(oe.length===0)return null;var ye=oe[0],ae=oe.pop();if(ae!==ye){oe[0]=ae;e:for(var j=0,F=oe.length,he=F>>>1;j<he;){var we=2*(j+1)-1,xe=oe[we],qe=we+1,Ee=oe[qe];if(0>l(xe,ae))qe<F&&0>l(Ee,xe)?(oe[j]=Ee,oe[qe]=ae,j=qe):(oe[j]=xe,oe[we]=ae,j=we);else if(qe<F&&0>l(Ee,ae))oe[j]=Ee,oe[qe]=ae,j=qe;else break e}}return ye}function l(oe,ye){var ae=oe.sortIndex-ye.sortIndex;return ae!==0?ae:oe.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,v=f.now();o.unstable_now=function(){return f.now()-v}}var p=[],x=[],$=1,b=null,k=3,z=!1,P=!1,R=!1,B=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(oe){for(var ye=r(x);ye!==null;){if(ye.callback===null)a(x);else if(ye.startTime<=oe)a(x),ye.sortIndex=ye.expirationTime,n(p,ye);else break;ye=r(x)}}function E(oe){if(R=!1,H(oe),!P)if(r(p)!==null)P=!0,Ue(G);else{var ye=r(x);ye!==null&&De(E,ye.startTime-oe)}}function G(oe,ye){P=!1,R&&(R=!1,N(W),W=-1),z=!0;var ae=k;try{for(H(ye),b=r(p);b!==null&&(!(b.expirationTime>ye)||oe&&!ke());){var j=b.callback;if(typeof j=="function"){b.callback=null,k=b.priorityLevel;var F=j(b.expirationTime<=ye);ye=o.unstable_now(),typeof F=="function"?b.callback=F:b===r(p)&&a(p),H(ye)}else a(p);b=r(p)}if(b!==null)var he=!0;else{var we=r(x);we!==null&&De(E,we.startTime-ye),he=!1}return he}finally{b=null,k=ae,z=!1}}var U=!1,X=null,W=-1,J=5,ve=-1;function ke(){return!(o.unstable_now()-ve<J)}function Te(){if(X!==null){var oe=o.unstable_now();ve=oe;var ye=!0;try{ye=X(!0,oe)}finally{ye?je():(U=!1,X=null)}}else U=!1}var je;if(typeof O=="function")je=function(){O(Te)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ke=Pe.port2;Pe.port1.onmessage=Te,je=function(){Ke.postMessage(null)}}else je=function(){B(Te,0)};function Ue(oe){X=oe,U||(U=!0,je())}function De(oe,ye){W=B(function(){oe(o.unstable_now())},ye)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(oe){oe.callback=null},o.unstable_continueExecution=function(){P||z||(P=!0,Ue(G))},o.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<oe?Math.floor(1e3/oe):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_getFirstCallbackNode=function(){return r(p)},o.unstable_next=function(oe){switch(k){case 1:case 2:case 3:var ye=3;break;default:ye=k}var ae=k;k=ye;try{return oe()}finally{k=ae}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(oe,ye){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ae=k;k=oe;try{return ye()}finally{k=ae}},o.unstable_scheduleCallback=function(oe,ye,ae){var j=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?j+ae:j):ae=j,oe){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=ae+F,oe={id:$++,callback:ye,priorityLevel:oe,startTime:ae,expirationTime:F,sortIndex:-1},ae>j?(oe.sortIndex=ae,n(x,oe),r(p)===null&&oe===r(x)&&(R?(N(W),W=-1):R=!0,De(E,ae-j))):(oe.sortIndex=F,n(p,oe),P||z||(P=!0,Ue(G))),oe},o.unstable_shouldYield=ke,o.unstable_wrapCallback=function(oe){var ye=k;return function(){var ae=k;k=ye;try{return oe.apply(this,arguments)}finally{k=ae}}}})(rl)),rl}var N1;function Am(){return N1||(N1=1,nl.exports=jm()),nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1;function Cm(){if(B1)return Ot;B1=1;var o=Cl(),n=Am();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},b={};function k(e){return p.call(b,e)?!0:p.call($,e)?!1:x.test(e)?b[e]=!0:($[e]=!0,!1)}function z(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,i,s){if(t===null||typeof t>"u"||z(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,i,s,c,m,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=m,this.removeEmptyString=y}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,O);B[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,O);B[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,O);B[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,t,i,s){var c=B.hasOwnProperty(t)?B[t]:null;(c!==null?c.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,i,c,s)&&(i=null),s||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,s=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var E=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),U=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),ke=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),oe=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,j;function F(e){if(j===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var he=!1;function we(e,t){if(!e||he)return"";he=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(L){var s=L}Reflect.construct(e,[],t)}else{try{t.call()}catch(L){s=L}e.call(t.prototype)}else{try{throw Error()}catch(L){s=L}e()}}catch(L){if(L&&s&&typeof L.stack=="string"){for(var c=L.stack.split(`
`),m=s.stack.split(`
`),y=c.length-1,S=m.length-1;1<=y&&0<=S&&c[y]!==m[S];)S--;for(;1<=y&&0<=S;y--,S--)if(c[y]!==m[S]){if(y!==1||S!==1)do if(y--,S--,0>S||c[y]!==m[S]){var q=`
`+c[y].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=y&&0<=S);break}}}finally{he=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?F(e):""}function xe(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=we(e.type,!1),e;case 11:return e=we(e.type.render,!1),e;case 1:return e=we(e.type,!0),e;default:return""}}function qe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case U:return"Portal";case J:return"Profiler";case W:return"StrictMode";case je:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ke:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qe(t);case 8:return t===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mt(e){var t=Ne(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,m=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xt(e){e._valueTracker||(e._valueTracker=mt(e))}function zr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Ne(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kn(e,t){var i=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Sr(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=Re(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function We(e,t){t=t.checked,t!=null&&H(e,"checked",t,!1)}function Zt(e,t){We(e,t);var i=Re(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yn(e,t.type,i):t.hasOwnProperty("defaultValue")&&yn(e,t.type,Re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Je(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function yn(e,t,i){(t!=="number"||gn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var at=Array.isArray;function _t(e,t,i,s){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Re(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Qr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ji(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(at(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Re(i)}}function Ai(e,t){var i=Re(t.value),s=Re(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function q0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ci(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ci(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,j0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pi=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){Pi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function Xr(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function Mr(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,c=Xr(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,c):e[i]=c}}var ga=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function A0(e,t){if(t){if(ga[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function qr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=null;function Cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yn=null,un=null,wn=null;function Ei(e){if(e=ri(e)){if(typeof Yn!="function")throw Error(r(280));var t=e.stateNode;t&&(t=no(t),Yn(e.stateNode,e.type,t))}}function Xn(e){un?wn?wn.push(e):wn=[e]:un=e}function P0(){if(un){var e=un,t=wn;if(wn=un=null,Ei(e),t)for(e=0;e<t.length;e++)Ei(t[e])}}function E0(e,t){return e(t)}function Ri(){}var R0=!1;function D0(e,t,i){if(R0)return e(t,i);R0=!0;try{return E0(e,t,i)}finally{R0=!1,(un!==null||wn!==null)&&(Ri(),P0())}}function jr(e,t){var i=e.stateNode;if(i===null)return null;var s=no(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var N0=!1;if(v)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){N0=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{N0=!1}function ya(e,t,i,s,c,m,y,S,q){var L=Array.prototype.slice.call(arguments,3);try{t.apply(i,L)}catch(Q){this.onError(Q)}}var Cr=!1,Zr=null,Jr=!1,le=null,Le={onError:function(e){Cr=!0,Zr=e}};function Fe(e,t,i,s,c,m,y,S,q){Cr=!1,Zr=null,ya.apply(Le,arguments)}function B0(e,t,i,s,c,m,y,S,q){if(Fe.apply(this,arguments),Cr){if(Cr){var L=Zr;Cr=!1,Zr=null}else throw Error(r(198));Jr||(Jr=!0,le=L)}}function Pr(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(Pr(e)!==e)throw Error(r(188))}function Nf(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,s=t;;){var c=i.return;if(c===null)break;var m=c.alternate;if(m===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===m.child){for(m=c.child;m;){if(m===i)return nu(c),e;if(m===s)return nu(c),t;m=m.sibling}throw Error(r(188))}if(i.return!==s.return)i=c,s=m;else{for(var y=!1,S=c.child;S;){if(S===i){y=!0,i=c,s=m;break}if(S===s){y=!0,s=c,i=m;break}S=S.sibling}if(!y){for(S=m.child;S;){if(S===i){y=!0,i=m,s=c;break}if(S===s){y=!0,s=m,i=c;break}S=S.sibling}if(!y)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function ru(e){return e=Nf(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var ou=n.unstable_scheduleCallback,au=n.unstable_cancelCallback,Bf=n.unstable_shouldYield,If=n.unstable_requestPaint,ut=n.unstable_now,Lf=n.unstable_getCurrentPriorityLevel,xa=n.unstable_ImmediatePriority,su=n.unstable_UserBlockingPriority,Di=n.unstable_NormalPriority,Ff=n.unstable_LowPriority,lu=n.unstable_IdlePriority,Ni=null,bn=null;function Of(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Wf,Hf=Math.log,Gf=Math.LN2;function Wf(e){return e>>>=0,e===0?32:31-(Hf(e)/Gf|0)|0}var Bi=64,Ii=4194304;function I0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,m=e.pingedLanes,y=i&268435455;if(y!==0){var S=y&~c;S!==0?s=I0(S):(m&=y,m!==0&&(s=I0(m)))}else y=i&~c,y!==0?s=I0(y):m!==0&&(s=I0(m));if(s===0)return 0;if(t!==0&&t!==s&&(t&c)===0&&(c=s&-s,m=t&-t,c>=m||c===16&&(m&4194240)!==0))return t;if((s&4)!==0&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-cn(t),c=1<<i,s|=e[i],t&=~c;return s}function Uf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,m=e.pendingLanes;0<m;){var y=31-cn(m),S=1<<y,q=c[y];q===-1?((S&i)===0||(S&s)!==0)&&(c[y]=Uf(S,t)):q<=t&&(e.expiredLanes|=S),m&=~S}}function wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=Bi;return Bi<<=1,(Bi&4194240)===0&&(Bi=64),e}function ba(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function L0(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=i}function Kf(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-cn(i),m=1<<c;t[c]=0,s[c]=-1,e[c]=-1,i&=~m}}function $a(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-cn(i),c=1<<s;c&t|e[s]&t&&(e[s]|=t),i&=~c}}var Ge=0;function cu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var du,_a,fu,mu,hu,ka=!1,Fi=[],Zn=null,Jn=null,er=null,F0=new Map,O0=new Map,tr=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":F0.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":O0.delete(t.pointerId)}}function H0(e,t,i,s,c,m){return e===null||e.nativeEvent!==m?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:m,targetContainers:[c]},t!==null&&(t=ri(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Yf(e,t,i,s,c){switch(t){case"focusin":return Zn=H0(Zn,e,t,i,s,c),!0;case"dragenter":return Jn=H0(Jn,e,t,i,s,c),!0;case"mouseover":return er=H0(er,e,t,i,s,c),!0;case"pointerover":var m=c.pointerId;return F0.set(m,H0(F0.get(m)||null,e,t,i,s,c)),!0;case"gotpointercapture":return m=c.pointerId,O0.set(m,H0(O0.get(m)||null,e,t,i,s,c)),!0}return!1}function vu(e){var t=Er(e.target);if(t!==null){var i=Pr(t);if(i!==null){if(t=i.tag,t===13){if(t=tu(i),t!==null){e.blockedOn=t,hu(e.priority,function(){fu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);C0=s,i.target.dispatchEvent(s),C0=null}else return t=ri(i),t!==null&&_a(t),e.blockedOn=i,!1;t.shift()}return!0}function gu(e,t,i){Oi(e)&&i.delete(t)}function Xf(){ka=!1,Zn!==null&&Oi(Zn)&&(Zn=null),Jn!==null&&Oi(Jn)&&(Jn=null),er!==null&&Oi(er)&&(er=null),F0.forEach(gu),O0.forEach(gu)}function G0(e,t){e.blockedOn===t&&(e.blockedOn=null,ka||(ka=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Xf)))}function W0(e){function t(c){return G0(c,e)}if(0<Fi.length){G0(Fi[0],e);for(var i=1;i<Fi.length;i++){var s=Fi[i];s.blockedOn===e&&(s.blockedOn=null)}}for(Zn!==null&&G0(Zn,e),Jn!==null&&G0(Jn,e),er!==null&&G0(er,e),F0.forEach(t),O0.forEach(t),i=0;i<tr.length;i++)s=tr[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<tr.length&&(i=tr[0],i.blockedOn===null);)vu(i),i.blockedOn===null&&tr.shift()}var e0=E.ReactCurrentBatchConfig,Hi=!0;function Zf(e,t,i,s){var c=Ge,m=e0.transition;e0.transition=null;try{Ge=1,za(e,t,i,s)}finally{Ge=c,e0.transition=m}}function Jf(e,t,i,s){var c=Ge,m=e0.transition;e0.transition=null;try{Ge=4,za(e,t,i,s)}finally{Ge=c,e0.transition=m}}function za(e,t,i,s){if(Hi){var c=Sa(e,t,i,s);if(c===null)Ha(e,t,s,Gi,i),pu(e,s);else if(Yf(c,e,t,i,s))s.stopPropagation();else if(pu(e,s),t&4&&-1<Qf.indexOf(e)){for(;c!==null;){var m=ri(c);if(m!==null&&du(m),m=Sa(e,t,i,s),m===null&&Ha(e,t,s,Gi,i),m===c)break;c=m}c!==null&&s.stopPropagation()}else Ha(e,t,s,null,i)}}var Gi=null;function Sa(e,t,i,s){if(Gi=null,e=Cn(s),e=Er(e),e!==null)if(t=Pr(e),t===null)e=null;else if(i=t.tag,i===13){if(e=tu(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case xa:return 1;case su:return 4;case Di:case Ff:return 16;case lu:return 536870912;default:return 16}default:return 16}}var nr=null,Ta=null,Wi=null;function xu(){if(Wi)return Wi;var e,t=Ta,i=t.length,s,c="value"in nr?nr.value:nr.textContent,m=c.length;for(e=0;e<i&&t[e]===c[e];e++);var y=i-e;for(s=1;s<=y&&t[i-s]===c[m-s];s++);return Wi=c.slice(e,1<s?1-s:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function wu(){return!1}function Wt(e){function t(i,s,c,m,y){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Vi:wu,this.isPropagationStopped=wu,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var t0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=Wt(t0),U0=ae({},t0,{view:0,detail:0}),e4=Wt(U0),qa,ja,V0,Ki=ae({},U0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==V0&&(V0&&e.type==="mousemove"?(qa=e.screenX-V0.screenX,ja=e.screenY-V0.screenY):ja=qa=0,V0=e),qa)},movementY:function(e){return"movementY"in e?e.movementY:ja}}),bu=Wt(Ki),t4=ae({},Ki,{dataTransfer:0}),n4=Wt(t4),r4=ae({},U0,{relatedTarget:0}),Aa=Wt(r4),i4=ae({},t0,{animationName:0,elapsedTime:0,pseudoElement:0}),o4=Wt(i4),a4=ae({},t0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s4=Wt(a4),l4=ae({},t0,{data:0}),$u=Wt(l4),u4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d4[e])?!!t[e]:!1}function Ca(){return f4}var m4=ae({},U0,{key:function(e){if(e.key){var t=u4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h4=Wt(m4),p4=ae({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Wt(p4),v4=ae({},U0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),g4=Wt(v4),y4=ae({},t0,{propertyName:0,elapsedTime:0,pseudoElement:0}),x4=Wt(y4),w4=ae({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b4=Wt(w4),$4=[9,13,27,32],Pa=v&&"CompositionEvent"in window,K0=null;v&&"documentMode"in document&&(K0=document.documentMode);var _4=v&&"TextEvent"in window&&!K0,ku=v&&(!Pa||K0&&8<K0&&11>=K0),zu=" ",Su=!1;function Tu(e,t){switch(e){case"keyup":return $4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var n0=!1;function k4(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Su=!0,zu);case"textInput":return e=t.data,e===zu&&Su?null:e;default:return null}}function z4(e,t){if(n0)return e==="compositionend"||!Pa&&Tu(e,t)?(e=xu(),Wi=Ta=nr=null,n0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var S4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S4[e.type]:t==="textarea"}function ju(e,t,i,s){Xn(s),t=Ji(t,"onChange"),0<t.length&&(i=new Ma("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var Q0=null,Y0=null;function T4(e){Ku(e,0)}function Qi(e){var t=s0(e);if(zr(t))return e}function M4(e,t){if(e==="change")return t}var Au=!1;if(v){var Ea;if(v){var Ra="oninput"in document;if(!Ra){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),Ra=typeof Cu.oninput=="function"}Ea=Ra}else Ea=!1;Au=Ea&&(!document.documentMode||9<document.documentMode)}function Pu(){Q0&&(Q0.detachEvent("onpropertychange",Eu),Y0=Q0=null)}function Eu(e){if(e.propertyName==="value"&&Qi(Y0)){var t=[];ju(t,Y0,e,Cn(e)),D0(T4,t)}}function q4(e,t,i){e==="focusin"?(Pu(),Q0=t,Y0=i,Q0.attachEvent("onpropertychange",Eu)):e==="focusout"&&Pu()}function j4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Y0)}function A4(e,t){if(e==="click")return Qi(t)}function C4(e,t){if(e==="input"||e==="change")return Qi(t)}function P4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:P4;function X0(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!p.call(t,c)||!dn(e[c],t[c]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var i=Ru(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ru(i)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(){for(var e=window,t=gn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=gn(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E4(e){var t=Bu(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Nu(i.ownerDocument.documentElement,i)){if(s!==null&&Da(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,m=Math.min(s.start,c);s=s.end===void 0?m:Math.min(s.end,c),!e.extend&&m>s&&(c=s,s=m,m=c),c=Du(i,m);var y=Du(i,s);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),m>s?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R4=v&&"documentMode"in document&&11>=document.documentMode,r0=null,Na=null,Z0=null,Ba=!1;function Iu(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ba||r0==null||r0!==gn(s)||(s=r0,"selectionStart"in s&&Da(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Z0&&X0(Z0,s)||(Z0=s,s=Ji(Na,"onSelect"),0<s.length&&(t=new Ma("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=r0)))}function Yi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var i0={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},Ia={},Lu={};v&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete i0.animationend.animation,delete i0.animationiteration.animation,delete i0.animationstart.animation),"TransitionEvent"in window||delete i0.transitionend.transition);function Xi(e){if(Ia[e])return Ia[e];if(!i0[e])return e;var t=i0[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Lu)return Ia[e]=t[i];return e}var Fu=Xi("animationend"),Ou=Xi("animationiteration"),Hu=Xi("animationstart"),Gu=Xi("transitionend"),Wu=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,t){Wu.set(e,t),u(t,[e])}for(var La=0;La<Uu.length;La++){var Fa=Uu[La],D4=Fa.toLowerCase(),N4=Fa[0].toUpperCase()+Fa.slice(1);rr(D4,"on"+N4)}rr(Fu,"onAnimationEnd"),rr(Ou,"onAnimationIteration"),rr(Hu,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(Gu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var J0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B4=new Set("cancel close invalid load scroll toggle".split(" ").concat(J0));function Vu(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,B0(s,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],c=s.event;s=s.listeners;e:{var m=void 0;if(t)for(var y=s.length-1;0<=y;y--){var S=s[y],q=S.instance,L=S.currentTarget;if(S=S.listener,q!==m&&c.isPropagationStopped())break e;Vu(c,S,L),m=q}else for(y=0;y<s.length;y++){if(S=s[y],q=S.instance,L=S.currentTarget,S=S.listener,q!==m&&c.isPropagationStopped())break e;Vu(c,S,L),m=q}}}if(Jr)throw e=le,Jr=!1,le=null,e}function Xe(e,t){var i=t[Qa];i===void 0&&(i=t[Qa]=new Set);var s=e+"__bubble";i.has(s)||(Qu(t,e,2,!1),i.add(s))}function Oa(e,t,i){var s=0;t&&(s|=4),Qu(i,e,s,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[Zi]){e[Zi]=!0,a.forEach(function(i){i!=="selectionchange"&&(B4.has(i)||Oa(i,!1,e),Oa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,Oa("selectionchange",!1,t))}}function Qu(e,t,i,s){switch(yu(t)){case 1:var c=Zf;break;case 4:c=Jf;break;default:c=za}i=c.bind(null,t,i,e),c=void 0,!N0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Ha(e,t,i,s,c){var m=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var S=s.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if(y===4)for(y=s.return;y!==null;){var q=y.tag;if((q===3||q===4)&&(q=y.stateNode.containerInfo,q===c||q.nodeType===8&&q.parentNode===c))return;y=y.return}for(;S!==null;){if(y=Er(S),y===null)return;if(q=y.tag,q===5||q===6){s=m=y;continue e}S=S.parentNode}}s=s.return}D0(function(){var L=m,Q=Cn(i),Z=[];e:{var V=Wu.get(e);if(V!==void 0){var ce=Ma,me=e;switch(e){case"keypress":if(Ui(i)===0)break e;case"keydown":case"keyup":ce=h4;break;case"focusin":me="focus",ce=Aa;break;case"focusout":me="blur",ce=Aa;break;case"beforeblur":case"afterblur":ce=Aa;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=n4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=g4;break;case Fu:case Ou:case Hu:ce=o4;break;case Gu:ce=x4;break;case"scroll":ce=e4;break;case"wheel":ce=b4;break;case"copy":case"cut":case"paste":ce=s4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=_u}var pe=(t&4)!==0,ct=!pe&&e==="scroll",D=pe?V!==null?V+"Capture":null:V;pe=[];for(var C=L,I;C!==null;){I=C;var ie=I.stateNode;if(I.tag===5&&ie!==null&&(I=ie,D!==null&&(ie=jr(C,D),ie!=null&&pe.push(ti(C,ie,I)))),ct)break;C=C.return}0<pe.length&&(V=new ce(V,me,null,i,Q),Z.push({event:V,listeners:pe}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",V&&i!==C0&&(me=i.relatedTarget||i.fromElement)&&(Er(me)||me[Pn]))break e;if((ce||V)&&(V=Q.window===Q?Q:(V=Q.ownerDocument)?V.defaultView||V.parentWindow:window,ce?(me=i.relatedTarget||i.toElement,ce=L,me=me?Er(me):null,me!==null&&(ct=Pr(me),me!==ct||me.tag!==5&&me.tag!==6)&&(me=null)):(ce=null,me=L),ce!==me)){if(pe=bu,ie="onMouseLeave",D="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(pe=_u,ie="onPointerLeave",D="onPointerEnter",C="pointer"),ct=ce==null?V:s0(ce),I=me==null?V:s0(me),V=new pe(ie,C+"leave",ce,i,Q),V.target=ct,V.relatedTarget=I,ie=null,Er(Q)===L&&(pe=new pe(D,C+"enter",me,i,Q),pe.target=I,pe.relatedTarget=ct,ie=pe),ct=ie,ce&&me)t:{for(pe=ce,D=me,C=0,I=pe;I;I=o0(I))C++;for(I=0,ie=D;ie;ie=o0(ie))I++;for(;0<C-I;)pe=o0(pe),C--;for(;0<I-C;)D=o0(D),I--;for(;C--;){if(pe===D||D!==null&&pe===D.alternate)break t;pe=o0(pe),D=o0(D)}pe=null}else pe=null;ce!==null&&Yu(Z,V,ce,pe,!1),me!==null&&ct!==null&&Yu(Z,ct,me,pe,!0)}}e:{if(V=L?s0(L):window,ce=V.nodeName&&V.nodeName.toLowerCase(),ce==="select"||ce==="input"&&V.type==="file")var ge=M4;else if(qu(V))if(Au)ge=C4;else{ge=j4;var be=q4}else(ce=V.nodeName)&&ce.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(ge=A4);if(ge&&(ge=ge(e,L))){ju(Z,ge,i,Q);break e}be&&be(e,V,L),e==="focusout"&&(be=V._wrapperState)&&be.controlled&&V.type==="number"&&yn(V,"number",V.value)}switch(be=L?s0(L):window,e){case"focusin":(qu(be)||be.contentEditable==="true")&&(r0=be,Na=L,Z0=null);break;case"focusout":Z0=Na=r0=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Iu(Z,i,Q);break;case"selectionchange":if(R4)break;case"keydown":case"keyup":Iu(Z,i,Q)}var $e;if(Pa)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else n0?Tu(e,i)&&(Se="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Se="onCompositionStart");Se&&(ku&&i.locale!=="ko"&&(n0||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&n0&&($e=xu()):(nr=Q,Ta="value"in nr?nr.value:nr.textContent,n0=!0)),be=Ji(L,Se),0<be.length&&(Se=new $u(Se,e,null,i,Q),Z.push({event:Se,listeners:be}),$e?Se.data=$e:($e=Mu(i),$e!==null&&(Se.data=$e)))),($e=_4?k4(e,i):z4(e,i))&&(L=Ji(L,"onBeforeInput"),0<L.length&&(Q=new $u("onBeforeInput","beforeinput",null,i,Q),Z.push({event:Q,listeners:L}),Q.data=$e))}Ku(Z,t)})}function ti(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ji(e,t){for(var i=t+"Capture",s=[];e!==null;){var c=e,m=c.stateNode;c.tag===5&&m!==null&&(c=m,m=jr(e,i),m!=null&&s.unshift(ti(e,m,c)),m=jr(e,t),m!=null&&s.push(ti(e,m,c))),e=e.return}return s}function o0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,i,s,c){for(var m=t._reactName,y=[];i!==null&&i!==s;){var S=i,q=S.alternate,L=S.stateNode;if(q!==null&&q===s)break;S.tag===5&&L!==null&&(S=L,c?(q=jr(i,m),q!=null&&y.unshift(ti(i,q,S))):c||(q=jr(i,m),q!=null&&y.push(ti(i,q,S)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var I4=/\r\n?/g,L4=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(I4,`
`).replace(L4,"")}function eo(e,t,i){if(t=Xu(t),Xu(e)!==t&&i)throw Error(r(425))}function to(){}var Ga=null,Wa=null;function Ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Va=typeof setTimeout=="function"?setTimeout:void 0,F4=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,O4=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(H4)}:Va;function H4(e){setTimeout(function(){throw e})}function Ka(e,t){var i=t,s=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(s===0){e.removeChild(c),W0(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=c}while(i);W0(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var a0=Math.random().toString(36).slice(2),$n="__reactFiber$"+a0,ni="__reactProps$"+a0,Pn="__reactContainer$"+a0,Qa="__reactEvents$"+a0,G4="__reactListeners$"+a0,W4="__reactHandles$"+a0;function Er(e){var t=e[$n];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Pn]||i[$n]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ju(e);e!==null;){if(i=e[$n])return i;e=Ju(e)}return t}e=i,i=e.parentNode}return null}function ri(e){return e=e[$n]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function s0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function no(e){return e[ni]||null}var Ya=[],l0=-1;function or(e){return{current:e}}function Ze(e){0>l0||(e.current=Ya[l0],Ya[l0]=null,l0--)}function Qe(e,t){l0++,Ya[l0]=e.current,e.current=t}var ar={},St=or(ar),Nt=or(!1),Rr=ar;function u0(e,t){var i=e.type.contextTypes;if(!i)return ar;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var c={},m;for(m in i)c[m]=t[m];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Bt(e){return e=e.childContextTypes,e!=null}function ro(){Ze(Nt),Ze(St)}function ec(e,t,i){if(St.current!==ar)throw Error(r(168));Qe(St,t),Qe(Nt,i)}function tc(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var c in s)if(!(c in t))throw Error(r(108,Ee(e)||"Unknown",c));return ae({},i,s)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ar,Rr=St.current,Qe(St,e),Qe(Nt,Nt.current),!0}function nc(e,t,i){var s=e.stateNode;if(!s)throw Error(r(169));i?(e=tc(e,t,Rr),s.__reactInternalMemoizedMergedChildContext=e,Ze(Nt),Ze(St),Qe(St,e)):Ze(Nt),Qe(Nt,i)}var En=null,oo=!1,Xa=!1;function rc(e){En===null?En=[e]:En.push(e)}function U4(e){oo=!0,rc(e)}function sr(){if(!Xa&&En!==null){Xa=!0;var e=0,t=Ge;try{var i=En;for(Ge=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}En=null,oo=!1}catch(c){throw En!==null&&(En=En.slice(e+1)),ou(xa,sr),c}finally{Ge=t,Xa=!1}}return null}var c0=[],d0=0,ao=null,so=0,Jt=[],en=0,Dr=null,Rn=1,Dn="";function Nr(e,t){c0[d0++]=so,c0[d0++]=ao,ao=e,so=t}function ic(e,t,i){Jt[en++]=Rn,Jt[en++]=Dn,Jt[en++]=Dr,Dr=e;var s=Rn;e=Dn;var c=32-cn(s)-1;s&=~(1<<c),i+=1;var m=32-cn(t)+c;if(30<m){var y=c-c%5;m=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Rn=1<<32-cn(t)+c|i<<c|s,Dn=m+e}else Rn=1<<m|i<<c|s,Dn=e}function Za(e){e.return!==null&&(Nr(e,1),ic(e,1,0))}function Ja(e){for(;e===ao;)ao=c0[--d0],c0[d0]=null,so=c0[--d0],c0[d0]=null;for(;e===Dr;)Dr=Jt[--en],Jt[en]=null,Dn=Jt[--en],Jt[en]=null,Rn=Jt[--en],Jt[en]=null}var Ut=null,Vt=null,et=!1,fn=null;function oc(e,t){var i=on(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function ac(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Vt=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Dr!==null?{id:Rn,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=on(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ut=e,Vt=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(et){var t=Vt;if(t){var i=t;if(!ac(e,t)){if(es(e))throw Error(r(418));t=ir(i.nextSibling);var s=Ut;t&&ac(e,t)?oc(s,i):(e.flags=e.flags&-4097|2,et=!1,Ut=e)}}else{if(es(e))throw Error(r(418));e.flags=e.flags&-4097|2,et=!1,Ut=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function lo(e){if(e!==Ut)return!1;if(!et)return sc(e),et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ua(e.type,e.memoizedProps)),t&&(t=Vt)){if(es(e))throw lc(),Error(r(418));for(;t;)oc(e,t),t=ir(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Vt=ir(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Ut?ir(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=Vt;e;)e=ir(e.nextSibling)}function f0(){Vt=Ut=null,et=!1}function ns(e){fn===null?fn=[e]:fn.push(e)}var V4=E.ReactCurrentBatchConfig;function ii(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var s=i.stateNode}if(!s)throw Error(r(147,e));var c=s,m=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===m?t.ref:(t=function(y){var S=c.refs;y===null?delete S[m]:S[m]=y},t._stringRef=m,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function cc(e){function t(D,C){if(e){var I=D.deletions;I===null?(D.deletions=[C],D.flags|=16):I.push(C)}}function i(D,C){if(!e)return null;for(;C!==null;)t(D,C),C=C.sibling;return null}function s(D,C){for(D=new Map;C!==null;)C.key!==null?D.set(C.key,C):D.set(C.index,C),C=C.sibling;return D}function c(D,C){return D=pr(D,C),D.index=0,D.sibling=null,D}function m(D,C,I){return D.index=I,e?(I=D.alternate,I!==null?(I=I.index,I<C?(D.flags|=2,C):I):(D.flags|=2,C)):(D.flags|=1048576,C)}function y(D){return e&&D.alternate===null&&(D.flags|=2),D}function S(D,C,I,ie){return C===null||C.tag!==6?(C=Vs(I,D.mode,ie),C.return=D,C):(C=c(C,I),C.return=D,C)}function q(D,C,I,ie){var ge=I.type;return ge===X?Q(D,C,I.props.children,ie,I.key):C!==null&&(C.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ue&&uc(ge)===C.type)?(ie=c(C,I.props),ie.ref=ii(D,C,I),ie.return=D,ie):(ie=Eo(I.type,I.key,I.props,null,D.mode,ie),ie.ref=ii(D,C,I),ie.return=D,ie)}function L(D,C,I,ie){return C===null||C.tag!==4||C.stateNode.containerInfo!==I.containerInfo||C.stateNode.implementation!==I.implementation?(C=Ks(I,D.mode,ie),C.return=D,C):(C=c(C,I.children||[]),C.return=D,C)}function Q(D,C,I,ie,ge){return C===null||C.tag!==7?(C=Wr(I,D.mode,ie,ge),C.return=D,C):(C=c(C,I),C.return=D,C)}function Z(D,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Vs(""+C,D.mode,I),C.return=D,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case G:return I=Eo(C.type,C.key,C.props,null,D.mode,I),I.ref=ii(D,null,C),I.return=D,I;case U:return C=Ks(C,D.mode,I),C.return=D,C;case Ue:var ie=C._init;return Z(D,ie(C._payload),I)}if(at(C)||ye(C))return C=Wr(C,D.mode,I,null),C.return=D,C;uo(D,C)}return null}function V(D,C,I,ie){var ge=C!==null?C.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ge!==null?null:S(D,C,""+I,ie);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case G:return I.key===ge?q(D,C,I,ie):null;case U:return I.key===ge?L(D,C,I,ie):null;case Ue:return ge=I._init,V(D,C,ge(I._payload),ie)}if(at(I)||ye(I))return ge!==null?null:Q(D,C,I,ie,null);uo(D,I)}return null}function ce(D,C,I,ie,ge){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return D=D.get(I)||null,S(C,D,""+ie,ge);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case G:return D=D.get(ie.key===null?I:ie.key)||null,q(C,D,ie,ge);case U:return D=D.get(ie.key===null?I:ie.key)||null,L(C,D,ie,ge);case Ue:var be=ie._init;return ce(D,C,I,be(ie._payload),ge)}if(at(ie)||ye(ie))return D=D.get(I)||null,Q(C,D,ie,ge,null);uo(C,ie)}return null}function me(D,C,I,ie){for(var ge=null,be=null,$e=C,Se=C=0,$t=null;$e!==null&&Se<I.length;Se++){$e.index>Se?($t=$e,$e=null):$t=$e.sibling;var Oe=V(D,$e,I[Se],ie);if(Oe===null){$e===null&&($e=$t);break}e&&$e&&Oe.alternate===null&&t(D,$e),C=m(Oe,C,Se),be===null?ge=Oe:be.sibling=Oe,be=Oe,$e=$t}if(Se===I.length)return i(D,$e),et&&Nr(D,Se),ge;if($e===null){for(;Se<I.length;Se++)$e=Z(D,I[Se],ie),$e!==null&&(C=m($e,C,Se),be===null?ge=$e:be.sibling=$e,be=$e);return et&&Nr(D,Se),ge}for($e=s(D,$e);Se<I.length;Se++)$t=ce($e,D,Se,I[Se],ie),$t!==null&&(e&&$t.alternate!==null&&$e.delete($t.key===null?Se:$t.key),C=m($t,C,Se),be===null?ge=$t:be.sibling=$t,be=$t);return e&&$e.forEach(function(vr){return t(D,vr)}),et&&Nr(D,Se),ge}function pe(D,C,I,ie){var ge=ye(I);if(typeof ge!="function")throw Error(r(150));if(I=ge.call(I),I==null)throw Error(r(151));for(var be=ge=null,$e=C,Se=C=0,$t=null,Oe=I.next();$e!==null&&!Oe.done;Se++,Oe=I.next()){$e.index>Se?($t=$e,$e=null):$t=$e.sibling;var vr=V(D,$e,Oe.value,ie);if(vr===null){$e===null&&($e=$t);break}e&&$e&&vr.alternate===null&&t(D,$e),C=m(vr,C,Se),be===null?ge=vr:be.sibling=vr,be=vr,$e=$t}if(Oe.done)return i(D,$e),et&&Nr(D,Se),ge;if($e===null){for(;!Oe.done;Se++,Oe=I.next())Oe=Z(D,Oe.value,ie),Oe!==null&&(C=m(Oe,C,Se),be===null?ge=Oe:be.sibling=Oe,be=Oe);return et&&Nr(D,Se),ge}for($e=s(D,$e);!Oe.done;Se++,Oe=I.next())Oe=ce($e,D,Se,Oe.value,ie),Oe!==null&&(e&&Oe.alternate!==null&&$e.delete(Oe.key===null?Se:Oe.key),C=m(Oe,C,Se),be===null?ge=Oe:be.sibling=Oe,be=Oe);return e&&$e.forEach(function(Sm){return t(D,Sm)}),et&&Nr(D,Se),ge}function ct(D,C,I,ie){if(typeof I=="object"&&I!==null&&I.type===X&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case G:e:{for(var ge=I.key,be=C;be!==null;){if(be.key===ge){if(ge=I.type,ge===X){if(be.tag===7){i(D,be.sibling),C=c(be,I.props.children),C.return=D,D=C;break e}}else if(be.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ue&&uc(ge)===be.type){i(D,be.sibling),C=c(be,I.props),C.ref=ii(D,be,I),C.return=D,D=C;break e}i(D,be);break}else t(D,be);be=be.sibling}I.type===X?(C=Wr(I.props.children,D.mode,ie,I.key),C.return=D,D=C):(ie=Eo(I.type,I.key,I.props,null,D.mode,ie),ie.ref=ii(D,C,I),ie.return=D,D=ie)}return y(D);case U:e:{for(be=I.key;C!==null;){if(C.key===be)if(C.tag===4&&C.stateNode.containerInfo===I.containerInfo&&C.stateNode.implementation===I.implementation){i(D,C.sibling),C=c(C,I.children||[]),C.return=D,D=C;break e}else{i(D,C);break}else t(D,C);C=C.sibling}C=Ks(I,D.mode,ie),C.return=D,D=C}return y(D);case Ue:return be=I._init,ct(D,C,be(I._payload),ie)}if(at(I))return me(D,C,I,ie);if(ye(I))return pe(D,C,I,ie);uo(D,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,C!==null&&C.tag===6?(i(D,C.sibling),C=c(C,I),C.return=D,D=C):(i(D,C),C=Vs(I,D.mode,ie),C.return=D,D=C),y(D)):i(D,C)}return ct}var m0=cc(!0),dc=cc(!1),co=or(null),fo=null,h0=null,rs=null;function is(){rs=h0=fo=null}function os(e){var t=co.current;Ze(co),e._currentValue=t}function as(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function p0(e,t){fo=e,rs=h0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(It=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(rs!==e)if(e={context:e,memoizedValue:t,next:null},h0===null){if(fo===null)throw Error(r(308));h0=e,fo.dependencies={lanes:0,firstContext:e}}else h0=h0.next=e;return t}var Br=null;function ss(e){Br===null?Br=[e]:Br.push(e)}function fc(e,t,i,s){var c=t.interleaved;return c===null?(i.next=i,ss(t)):(i.next=c.next,c.next=i),t.interleaved=i,Nn(e,s)}function Nn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var lr=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Be&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,Nn(e,i)}return c=s.interleaved,c===null?(t.next=t,ss(s)):(t.next=c.next,c.next=t),s.interleaved=t,Nn(e,i)}function mo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,$a(e,i)}}function hc(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};m===null?c=m=y:m=m.next=y,i=i.next}while(i!==null);m===null?c=m=t:m=m.next=t}else c=m=t;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:m,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ho(e,t,i,s){var c=e.updateQueue;lr=!1;var m=c.firstBaseUpdate,y=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var q=S,L=q.next;q.next=null,y===null?m=L:y.next=L,y=q;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==y&&(S===null?Q.firstBaseUpdate=L:S.next=L,Q.lastBaseUpdate=q))}if(m!==null){var Z=c.baseState;y=0,Q=L=q=null,S=m;do{var V=S.lane,ce=S.eventTime;if((s&V)===V){Q!==null&&(Q=Q.next={eventTime:ce,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var me=e,pe=S;switch(V=t,ce=i,pe.tag){case 1:if(me=pe.payload,typeof me=="function"){Z=me.call(ce,Z,V);break e}Z=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=pe.payload,V=typeof me=="function"?me.call(ce,Z,V):me,V==null)break e;Z=ae({},Z,V);break e;case 2:lr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,V=c.effects,V===null?c.effects=[S]:V.push(S))}else ce={eventTime:ce,lane:V,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(L=Q=ce,q=Z):Q=Q.next=ce,y|=V;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;V=S,S=V.next,V.next=null,c.lastBaseUpdate=V,c.shared.pending=null}}while(!0);if(Q===null&&(q=Z),c.baseState=q,c.firstBaseUpdate=L,c.lastBaseUpdate=Q,t=c.shared.interleaved,t!==null){c=t;do y|=c.lane,c=c.next;while(c!==t)}else m===null&&(c.shared.lanes=0);Fr|=y,e.lanes=y,e.memoizedState=Z}}function pc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],c=s.callback;if(c!==null){if(s.callback=null,s=i,typeof c!="function")throw Error(r(191,c));c.call(s)}}}var oi={},_n=or(oi),ai=or(oi),si=or(oi);function Ir(e){if(e===oi)throw Error(r(174));return e}function us(e,t){switch(Qe(si,t),Qe(ai,e),Qe(_n,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xn(t,e)}Ze(_n),Qe(_n,t)}function v0(){Ze(_n),Ze(ai),Ze(si)}function vc(e){Ir(si.current);var t=Ir(_n.current),i=xn(t,e.type);t!==i&&(Qe(ai,e),Qe(_n,i))}function cs(e){ai.current===e&&(Ze(_n),Ze(ai))}var nt=or(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function fs(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var vo=E.ReactCurrentDispatcher,ms=E.ReactCurrentBatchConfig,Lr=0,rt=null,gt=null,wt=null,go=!1,li=!1,ui=0,K4=0;function Tt(){throw Error(r(321))}function hs(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!dn(e[i],t[i]))return!1;return!0}function ps(e,t,i,s,c,m){if(Lr=m,rt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?Z4:J4,e=i(s,c),li){m=0;do{if(li=!1,ui=0,25<=m)throw Error(r(301));m+=1,wt=gt=null,t.updateQueue=null,vo.current=em,e=i(s,c)}while(li)}if(vo.current=wo,t=gt!==null&&gt.next!==null,Lr=0,wt=gt=rt=null,go=!1,t)throw Error(r(300));return e}function vs(){var e=ui!==0;return ui=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?rt.memoizedState=wt=e:wt=wt.next=e,wt}function nn(){if(gt===null){var e=rt.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=wt===null?rt.memoizedState:wt.next;if(t!==null)wt=t,gt=e;else{if(e===null)throw Error(r(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},wt===null?rt.memoizedState=wt=e:wt=wt.next=e}return wt}function ci(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=nn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=gt,c=s.baseQueue,m=i.pending;if(m!==null){if(c!==null){var y=c.next;c.next=m.next,m.next=y}s.baseQueue=c=m,i.pending=null}if(c!==null){m=c.next,s=s.baseState;var S=y=null,q=null,L=m;do{var Q=L.lane;if((Lr&Q)===Q)q!==null&&(q=q.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),s=L.hasEagerState?L.eagerState:e(s,L.action);else{var Z={lane:Q,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};q===null?(S=q=Z,y=s):q=q.next=Z,rt.lanes|=Q,Fr|=Q}L=L.next}while(L!==null&&L!==m);q===null?y=s:q.next=S,dn(s,t.memoizedState)||(It=!0),t.memoizedState=s,t.baseState=y,t.baseQueue=q,i.lastRenderedState=s}if(e=i.interleaved,e!==null){c=e;do m=c.lane,rt.lanes|=m,Fr|=m,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ys(e){var t=nn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=i.dispatch,c=i.pending,m=t.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do m=e(m,y.action),y=y.next;while(y!==c);dn(m,t.memoizedState)||(It=!0),t.memoizedState=m,t.baseQueue===null&&(t.baseState=m),i.lastRenderedState=m}return[m,s]}function gc(){}function yc(e,t){var i=rt,s=nn(),c=t(),m=!dn(s.memoizedState,c);if(m&&(s.memoizedState=c,It=!0),s=s.queue,xs(bc.bind(null,i,s,e),[e]),s.getSnapshot!==t||m||wt!==null&&wt.memoizedState.tag&1){if(i.flags|=2048,di(9,wc.bind(null,i,s,c,t),void 0,null),bt===null)throw Error(r(349));(Lr&30)!==0||xc(i,t,c)}return c}function xc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=rt.updateQueue,t===null?(t={lastEffect:null,stores:null},rt.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function wc(e,t,i,s){t.value=i,t.getSnapshot=s,$c(t)&&_c(e)}function bc(e,t,i){return i(function(){$c(t)&&_c(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!dn(e,i)}catch{return!0}}function _c(e){var t=Nn(e,1);t!==null&&vn(t,e,1,-1)}function kc(e){var t=kn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=X4.bind(null,rt,e),[t.memoizedState,e]}function di(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=rt.updateQueue,t===null?(t={lastEffect:null,stores:null},rt.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function zc(){return nn().memoizedState}function yo(e,t,i,s){var c=kn();rt.flags|=e,c.memoizedState=di(1|t,i,void 0,s===void 0?null:s)}function xo(e,t,i,s){var c=nn();s=s===void 0?null:s;var m=void 0;if(gt!==null){var y=gt.memoizedState;if(m=y.destroy,s!==null&&hs(s,y.deps)){c.memoizedState=di(t,i,m,s);return}}rt.flags|=e,c.memoizedState=di(1|t,i,m,s)}function Sc(e,t){return yo(8390656,8,e,t)}function xs(e,t){return xo(2048,8,e,t)}function Tc(e,t){return xo(4,2,e,t)}function Mc(e,t){return xo(4,4,e,t)}function qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jc(e,t,i){return i=i!=null?i.concat([e]):null,xo(4,4,qc.bind(null,t,e),i)}function ws(){}function Ac(e,t){var i=nn();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&hs(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function Cc(e,t){var i=nn();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&hs(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function Pc(e,t,i){return(Lr&21)===0?(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=i):(dn(i,t)||(i=uu(),rt.lanes|=i,Fr|=i,e.baseState=!0),t)}function Q4(e,t){var i=Ge;Ge=i!==0&&4>i?i:4,e(!0);var s=ms.transition;ms.transition={};try{e(!1),t()}finally{Ge=i,ms.transition=s}}function Ec(){return nn().memoizedState}function Y4(e,t,i){var s=mr(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Rc(e))Dc(t,i);else if(i=fc(e,t,i,s),i!==null){var c=Ct();vn(i,e,s,c),Nc(i,t,s)}}function X4(e,t,i){var s=mr(e),c={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))Dc(t,c);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=t.lastRenderedReducer,m!==null))try{var y=t.lastRenderedState,S=m(y,i);if(c.hasEagerState=!0,c.eagerState=S,dn(S,y)){var q=t.interleaved;q===null?(c.next=c,ss(t)):(c.next=q.next,q.next=c),t.interleaved=c;return}}catch{}finally{}i=fc(e,t,c,s),i!==null&&(c=Ct(),vn(i,e,s,c),Nc(i,t,s))}}function Rc(e){var t=e.alternate;return e===rt||t!==null&&t===rt}function Dc(e,t){li=go=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Nc(e,t,i){if((i&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,$a(e,i)}}var wo={readContext:tn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Z4={readContext:tn,useCallback:function(e,t){return kn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Sc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,yo(4194308,4,qc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var i=kn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=kn();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Y4.bind(null,rt,e),[s.memoizedState,e]},useRef:function(e){var t=kn();return e={current:e},t.memoizedState=e},useState:kc,useDebugValue:ws,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=kc(!1),t=e[0];return e=Q4.bind(null,e[1]),kn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=rt,c=kn();if(et){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),bt===null)throw Error(r(349));(Lr&30)!==0||xc(s,t,i)}c.memoizedState=i;var m={value:i,getSnapshot:t};return c.queue=m,Sc(bc.bind(null,s,m,e),[e]),s.flags|=2048,di(9,wc.bind(null,s,m,i,t),void 0,null),i},useId:function(){var e=kn(),t=bt.identifierPrefix;if(et){var i=Dn,s=Rn;i=(s&~(1<<32-cn(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=ui++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=K4++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J4={readContext:tn,useCallback:Ac,useContext:tn,useEffect:xs,useImperativeHandle:jc,useInsertionEffect:Tc,useLayoutEffect:Mc,useMemo:Cc,useReducer:gs,useRef:zc,useState:function(){return gs(ci)},useDebugValue:ws,useDeferredValue:function(e){var t=nn();return Pc(t,gt.memoizedState,e)},useTransition:function(){var e=gs(ci)[0],t=nn().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Ec,unstable_isNewReconciler:!1},em={readContext:tn,useCallback:Ac,useContext:tn,useEffect:xs,useImperativeHandle:jc,useInsertionEffect:Tc,useLayoutEffect:Mc,useMemo:Cc,useReducer:ys,useRef:zc,useState:function(){return ys(ci)},useDebugValue:ws,useDeferredValue:function(e){var t=nn();return gt===null?t.memoizedState=e:Pc(t,gt.memoizedState,e)},useTransition:function(){var e=ys(ci)[0],t=nn().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Ec,unstable_isNewReconciler:!1};function mn(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function bs(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:ae({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var bo={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=Ct(),c=mr(e),m=Bn(s,c);m.payload=t,i!=null&&(m.callback=i),t=ur(e,m,c),t!==null&&(vn(t,e,c,s),mo(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=Ct(),c=mr(e),m=Bn(s,c);m.tag=1,m.payload=t,i!=null&&(m.callback=i),t=ur(e,m,c),t!==null&&(vn(t,e,c,s),mo(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ct(),s=mr(e),c=Bn(i,s);c.tag=2,t!=null&&(c.callback=t),t=ur(e,c,s),t!==null&&(vn(t,e,s,i),mo(t,e,s))}};function Bc(e,t,i,s,c,m,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,m,y):t.prototype&&t.prototype.isPureReactComponent?!X0(i,s)||!X0(c,m):!0}function Ic(e,t,i){var s=!1,c=ar,m=t.contextType;return typeof m=="object"&&m!==null?m=tn(m):(c=Bt(t)?Rr:St.current,s=t.contextTypes,m=(s=s!=null)?u0(e,c):ar),t=new t(i,m),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=m),t}function Lc(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function $s(e,t,i,s){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},ls(e);var m=t.contextType;typeof m=="object"&&m!==null?c.context=tn(m):(m=Bt(t)?Rr:St.current,c.context=u0(e,m)),c.state=e.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(bs(e,t,m,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&bo.enqueueReplaceState(c,c.state,null),ho(e,i,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function g0(e,t){try{var i="",s=t;do i+=xe(s),s=s.return;while(s);var c=i}catch(m){c=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:t,stack:c,digest:null}}function _s(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var tm=typeof WeakMap=="function"?WeakMap:Map;function Fc(e,t,i){i=Bn(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){Mo||(Mo=!0,Is=s),ks(e,t)},i}function Oc(e,t,i){i=Bn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=t.value;i.payload=function(){return s(c)},i.callback=function(){ks(e,t)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(i.callback=function(){ks(e,t),typeof s!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function Hc(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new tm;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(i)||(c.add(i),e=pm.bind(null,e,t,i),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,i,s,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Bn(-1,1),t.tag=2,ur(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var nm=E.ReactCurrentOwner,It=!1;function At(e,t,i,s){t.child=e===null?dc(t,null,i,s):m0(t,e.child,i,s)}function Uc(e,t,i,s,c){i=i.render;var m=t.ref;return p0(t,c),s=ps(e,t,i,s,m,c),i=vs(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,In(e,t,c)):(et&&i&&Za(t),t.flags|=1,At(e,t,s,c),t.child)}function Vc(e,t,i,s,c){if(e===null){var m=i.type;return typeof m=="function"&&!Us(m)&&m.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=m,Kc(e,t,m,s,c)):(e=Eo(i.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(m=e.child,(e.lanes&c)===0){var y=m.memoizedProps;if(i=i.compare,i=i!==null?i:X0,i(y,s)&&e.ref===t.ref)return In(e,t,c)}return t.flags|=1,e=pr(m,s),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,i,s,c){if(e!==null){var m=e.memoizedProps;if(X0(m,s)&&e.ref===t.ref)if(It=!1,t.pendingProps=s=m,(e.lanes&c)!==0)(e.flags&131072)!==0&&(It=!0);else return t.lanes=e.lanes,In(e,t,c)}return zs(e,t,i,s,c)}function Qc(e,t,i){var s=t.pendingProps,c=s.children,m=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(x0,Kt),Kt|=i;else{if((i&1073741824)===0)return e=m!==null?m.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Qe(x0,Kt),Kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=m!==null?m.baseLanes:i,Qe(x0,Kt),Kt|=s}else m!==null?(s=m.baseLanes|i,t.memoizedState=null):s=i,Qe(x0,Kt),Kt|=s;return At(e,t,c,i),t.child}function Yc(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function zs(e,t,i,s,c){var m=Bt(i)?Rr:St.current;return m=u0(t,m),p0(t,c),i=ps(e,t,i,s,m,c),s=vs(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,In(e,t,c)):(et&&s&&Za(t),t.flags|=1,At(e,t,i,c),t.child)}function Xc(e,t,i,s,c){if(Bt(i)){var m=!0;io(t)}else m=!1;if(p0(t,c),t.stateNode===null)_o(e,t),Ic(t,i,s),$s(t,i,s,c),s=!0;else if(e===null){var y=t.stateNode,S=t.memoizedProps;y.props=S;var q=y.context,L=i.contextType;typeof L=="object"&&L!==null?L=tn(L):(L=Bt(i)?Rr:St.current,L=u0(t,L));var Q=i.getDerivedStateFromProps,Z=typeof Q=="function"||typeof y.getSnapshotBeforeUpdate=="function";Z||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(S!==s||q!==L)&&Lc(t,y,s,L),lr=!1;var V=t.memoizedState;y.state=V,ho(t,s,y,c),q=t.memoizedState,S!==s||V!==q||Nt.current||lr?(typeof Q=="function"&&(bs(t,i,Q,s),q=t.memoizedState),(S=lr||Bc(t,i,S,s,V,q,L))?(Z||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=q),y.props=s,y.state=q,y.context=L,s=S):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{y=t.stateNode,mc(e,t),S=t.memoizedProps,L=t.type===t.elementType?S:mn(t.type,S),y.props=L,Z=t.pendingProps,V=y.context,q=i.contextType,typeof q=="object"&&q!==null?q=tn(q):(q=Bt(i)?Rr:St.current,q=u0(t,q));var ce=i.getDerivedStateFromProps;(Q=typeof ce=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(S!==Z||V!==q)&&Lc(t,y,s,q),lr=!1,V=t.memoizedState,y.state=V,ho(t,s,y,c);var me=t.memoizedState;S!==Z||V!==me||Nt.current||lr?(typeof ce=="function"&&(bs(t,i,ce,s),me=t.memoizedState),(L=lr||Bc(t,i,L,s,V,me,q)||!1)?(Q||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,me,q),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,me,q)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||S===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=me),y.props=s,y.state=me,y.context=q,s=L):(typeof y.componentDidUpdate!="function"||S===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),s=!1)}return Ss(e,t,i,s,m,c)}function Ss(e,t,i,s,c,m){Yc(e,t);var y=(t.flags&128)!==0;if(!s&&!y)return c&&nc(t,i,!1),In(e,t,m);s=t.stateNode,nm.current=t;var S=y&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&y?(t.child=m0(t,e.child,null,m),t.child=m0(t,null,S,m)):At(e,t,S,m),t.memoizedState=s.state,c&&nc(t,i,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),us(e,t.containerInfo)}function Jc(e,t,i,s,c){return f0(),ns(c),t.flags|=256,At(e,t,i,s),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function e1(e,t,i){var s=t.pendingProps,c=nt.current,m=!1,y=(t.flags&128)!==0,S;if((S=y)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(m=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Qe(nt,c&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=s.children,e=s.fallback,m?(s=t.mode,m=t.child,y={mode:"hidden",children:y},(s&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=y):m=Ro(y,s,0,null),e=Wr(e,s,i,null),m.return=t,e.return=t,m.sibling=e,t.child=m,t.child.memoizedState=Ms(i),t.memoizedState=Ts,e):qs(t,y));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return rm(e,t,y,s,S,c,i);if(m){m=s.fallback,y=t.mode,c=e.child,S=c.sibling;var q={mode:"hidden",children:s.children};return(y&1)===0&&t.child!==c?(s=t.child,s.childLanes=0,s.pendingProps=q,t.deletions=null):(s=pr(c,q),s.subtreeFlags=c.subtreeFlags&14680064),S!==null?m=pr(S,m):(m=Wr(m,y,i,null),m.flags|=2),m.return=t,s.return=t,s.sibling=m,t.child=s,s=m,m=t.child,y=e.child.memoizedState,y=y===null?Ms(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},m.memoizedState=y,m.childLanes=e.childLanes&~i,t.memoizedState=Ts,s}return m=e.child,e=m.sibling,s=pr(m,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function qs(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $o(e,t,i,s){return s!==null&&ns(s),m0(t,e.child,null,i),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,i,s,c,m,y){if(i)return t.flags&256?(t.flags&=-257,s=_s(Error(r(422))),$o(e,t,y,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(m=s.fallback,c=t.mode,s=Ro({mode:"visible",children:s.children},c,0,null),m=Wr(m,c,y,null),m.flags|=2,s.return=t,m.return=t,s.sibling=m,t.child=s,(t.mode&1)!==0&&m0(t,e.child,null,y),t.child.memoizedState=Ms(y),t.memoizedState=Ts,m);if((t.mode&1)===0)return $o(e,t,y,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var S=s.dgst;return s=S,m=Error(r(419)),s=_s(m,s,void 0),$o(e,t,y,s)}if(S=(y&e.childLanes)!==0,It||S){if(s=bt,s!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(s.suspendedLanes|y))!==0?0:c,c!==0&&c!==m.retryLane&&(m.retryLane=c,Nn(e,c),vn(s,e,c,-1))}return Ws(),s=_s(Error(r(421))),$o(e,t,y,s)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=vm.bind(null,e),c._reactRetry=t,null):(e=m.treeContext,Vt=ir(c.nextSibling),Ut=t,et=!0,fn=null,e!==null&&(Jt[en++]=Rn,Jt[en++]=Dn,Jt[en++]=Dr,Rn=e.id,Dn=e.overflow,Dr=t),t=qs(t,s.children),t.flags|=4096,t)}function t1(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),as(e.return,t,i)}function js(e,t,i,s,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=i,m.tailMode=c)}function n1(e,t,i){var s=t.pendingProps,c=s.revealOrder,m=s.tail;if(At(e,t,s.children,i),s=nt.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t1(e,i,t);else if(e.tag===19)t1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Qe(nt,s),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&po(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),js(t,!1,c,i,m);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&po(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}js(t,!0,i,null,m);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=pr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=pr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function im(e,t,i){switch(t.tag){case 3:Zc(t),f0();break;case 5:vc(t);break;case 1:Bt(t.type)&&io(t);break;case 4:us(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,c=t.memoizedProps.value;Qe(co,s._currentValue),s._currentValue=c;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Qe(nt,nt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?e1(e,t,i):(Qe(nt,nt.current&1),e=In(e,t,i),e!==null?e.sibling:null);Qe(nt,nt.current&1);break;case 19:if(s=(i&t.childLanes)!==0,(e.flags&128)!==0){if(s)return n1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Qe(nt,nt.current),s)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,i)}return In(e,t,i)}var r1,As,i1,o1;r1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},As=function(){},i1=function(e,t,i,s){var c=e.memoizedProps;if(c!==s){e=t.stateNode,Ir(_n.current);var m=null;switch(i){case"input":c=Kn(e,c),s=Kn(e,s),m=[];break;case"select":c=ae({},c,{value:void 0}),s=ae({},s,{value:void 0}),m=[];break;case"textarea":c=Qr(e,c),s=Qr(e,s),m=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=to)}A0(i,s);var y;i=null;for(L in c)if(!s.hasOwnProperty(L)&&c.hasOwnProperty(L)&&c[L]!=null)if(L==="style"){var S=c[L];for(y in S)S.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(l.hasOwnProperty(L)?m||(m=[]):(m=m||[]).push(L,null));for(L in s){var q=s[L];if(S=c!=null?c[L]:void 0,s.hasOwnProperty(L)&&q!==S&&(q!=null||S!=null))if(L==="style")if(S){for(y in S)!S.hasOwnProperty(y)||q&&q.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in q)q.hasOwnProperty(y)&&S[y]!==q[y]&&(i||(i={}),i[y]=q[y])}else i||(m||(m=[]),m.push(L,i)),i=q;else L==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,S=S?S.__html:void 0,q!=null&&S!==q&&(m=m||[]).push(L,q)):L==="children"?typeof q!="string"&&typeof q!="number"||(m=m||[]).push(L,""+q):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(l.hasOwnProperty(L)?(q!=null&&L==="onScroll"&&Xe("scroll",e),m||S===q||(m=[])):(m=m||[]).push(L,q))}i&&(m=m||[]).push("style",i);var L=m;(t.updateQueue=L)&&(t.flags|=4)}},o1=function(e,t,i,s){i!==s&&(t.flags|=4)};function fi(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function om(e,t,i){var s=t.pendingProps;switch(Ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(t),null;case 1:return Bt(t.type)&&ro(),Mt(t),null;case 3:return s=t.stateNode,v0(),Ze(Nt),Ze(St),fs(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fn!==null&&(Os(fn),fn=null))),As(e,t),Mt(t),null;case 5:cs(t);var c=Ir(si.current);if(i=t.type,e!==null&&t.stateNode!=null)i1(e,t,i,s,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(r(166));return Mt(t),null}if(e=Ir(_n.current),lo(t)){s=t.stateNode,i=t.type;var m=t.memoizedProps;switch(s[$n]=t,s[ni]=m,e=(t.mode&1)!==0,i){case"dialog":Xe("cancel",s),Xe("close",s);break;case"iframe":case"object":case"embed":Xe("load",s);break;case"video":case"audio":for(c=0;c<J0.length;c++)Xe(J0[c],s);break;case"source":Xe("error",s);break;case"img":case"image":case"link":Xe("error",s),Xe("load",s);break;case"details":Xe("toggle",s);break;case"input":Sr(s,m),Xe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!m.multiple},Xe("invalid",s);break;case"textarea":ji(s,m),Xe("invalid",s)}A0(i,m),c=null;for(var y in m)if(m.hasOwnProperty(y)){var S=m[y];y==="children"?typeof S=="string"?s.textContent!==S&&(m.suppressHydrationWarning!==!0&&eo(s.textContent,S,e),c=["children",S]):typeof S=="number"&&s.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&eo(s.textContent,S,e),c=["children",""+S]):l.hasOwnProperty(y)&&S!=null&&y==="onScroll"&&Xe("scroll",s)}switch(i){case"input":Xt(s),Je(s,m,!0);break;case"textarea":Xt(s),q0(s);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(s.onclick=to)}s=c,t.updateQueue=s,s!==null&&(t.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ci(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(i,{is:s.is}):(e=y.createElement(i),i==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,i),e[$n]=t,e[ni]=s,r1(e,t,!1,!1),t.stateNode=e;e:{switch(y=qr(i,s),i){case"dialog":Xe("cancel",e),Xe("close",e),c=s;break;case"iframe":case"object":case"embed":Xe("load",e),c=s;break;case"video":case"audio":for(c=0;c<J0.length;c++)Xe(J0[c],e);c=s;break;case"source":Xe("error",e),c=s;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),c=s;break;case"details":Xe("toggle",e),c=s;break;case"input":Sr(e,s),c=Kn(e,s),Xe("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=ae({},s,{value:void 0}),Xe("invalid",e);break;case"textarea":ji(e,s),c=Qr(e,s),Xe("invalid",e);break;default:c=s}A0(i,c),S=c;for(m in S)if(S.hasOwnProperty(m)){var q=S[m];m==="style"?Mr(e,q):m==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&j0(e,q)):m==="children"?typeof q=="string"?(i!=="textarea"||q!=="")&&Qn(e,q):typeof q=="number"&&Qn(e,""+q):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?q!=null&&m==="onScroll"&&Xe("scroll",e):q!=null&&H(e,m,q,y))}switch(i){case"input":Xt(e),Je(e,s,!1);break;case"textarea":Xt(e),q0(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Re(s.value));break;case"select":e.multiple=!!s.multiple,m=s.value,m!=null?_t(e,!!s.multiple,m,!1):s.defaultValue!=null&&_t(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=to)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Mt(t),null;case 6:if(e&&t.stateNode!=null)o1(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(r(166));if(i=Ir(si.current),Ir(_n.current),lo(t)){if(s=t.stateNode,i=t.memoizedProps,s[$n]=t,(m=s.nodeValue!==i)&&(e=Ut,e!==null))switch(e.tag){case 3:eo(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(s.nodeValue,i,(e.mode&1)!==0)}m&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[$n]=t,t.stateNode=s}return Mt(t),null;case 13:if(Ze(nt),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&Vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lc(),f0(),t.flags|=98560,m=!1;else if(m=lo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!m)throw Error(r(318));if(m=t.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[$n]=t}else f0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Mt(t),m=!1}else fn!==null&&(Os(fn),fn=null),m=!0;if(!m)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(nt.current&1)!==0?yt===0&&(yt=3):Ws())),t.updateQueue!==null&&(t.flags|=4),Mt(t),null);case 4:return v0(),As(e,t),e===null&&ei(t.stateNode.containerInfo),Mt(t),null;case 10:return os(t.type._context),Mt(t),null;case 17:return Bt(t.type)&&ro(),Mt(t),null;case 19:if(Ze(nt),m=t.memoizedState,m===null)return Mt(t),null;if(s=(t.flags&128)!==0,y=m.rendering,y===null)if(s)fi(m,!1);else{if(yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=po(e),y!==null){for(t.flags|=128,fi(m,!1),s=y.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)m=i,e=s,m.flags&=14680066,y=m.alternate,y===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=y.childLanes,m.lanes=y.lanes,m.child=y.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=y.memoizedProps,m.memoizedState=y.memoizedState,m.updateQueue=y.updateQueue,m.type=y.type,e=y.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Qe(nt,nt.current&1|2),t.child}e=e.sibling}m.tail!==null&&ut()>w0&&(t.flags|=128,s=!0,fi(m,!1),t.lanes=4194304)}else{if(!s)if(e=po(y),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),fi(m,!0),m.tail===null&&m.tailMode==="hidden"&&!y.alternate&&!et)return Mt(t),null}else 2*ut()-m.renderingStartTime>w0&&i!==1073741824&&(t.flags|=128,s=!0,fi(m,!1),t.lanes=4194304);m.isBackwards?(y.sibling=t.child,t.child=y):(i=m.last,i!==null?i.sibling=y:t.child=y,m.last=y)}return m.tail!==null?(t=m.tail,m.rendering=t,m.tail=t.sibling,m.renderingStartTime=ut(),t.sibling=null,i=nt.current,Qe(nt,s?i&1|2:i&1),t):(Mt(t),null);case 22:case 23:return Gs(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Kt&1073741824)!==0&&(Mt(t),t.subtreeFlags&6&&(t.flags|=8192)):Mt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function am(e,t){switch(Ja(t),t.tag){case 1:return Bt(t.type)&&ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return v0(),Ze(Nt),Ze(St),fs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return cs(t),null;case 13:if(Ze(nt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));f0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ze(nt),null;case 4:return v0(),null;case 10:return os(t.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var ko=!1,qt=!1,sm=typeof WeakSet=="function"?WeakSet:Set,fe=null;function y0(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){st(e,t,s)}else i.current=null}function Cs(e,t,i){try{i()}catch(s){st(e,t,s)}}var a1=!1;function lm(e,t){if(Ga=Hi,e=Bu(),Da(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,m=s.focusNode;s=s.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var y=0,S=-1,q=-1,L=0,Q=0,Z=e,V=null;t:for(;;){for(var ce;Z!==i||c!==0&&Z.nodeType!==3||(S=y+c),Z!==m||s!==0&&Z.nodeType!==3||(q=y+s),Z.nodeType===3&&(y+=Z.nodeValue.length),(ce=Z.firstChild)!==null;)V=Z,Z=ce;for(;;){if(Z===e)break t;if(V===i&&++L===c&&(S=y),V===m&&++Q===s&&(q=y),(ce=Z.nextSibling)!==null)break;Z=V,V=Z.parentNode}Z=ce}i=S===-1||q===-1?null:{start:S,end:q}}else i=null}i=i||{start:0,end:0}}else i=null;for(Wa={focusedElem:e,selectionRange:i},Hi=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var me=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var pe=me.memoizedProps,ct=me.memoizedState,D=t.stateNode,C=D.getSnapshotBeforeUpdate(t.elementType===t.type?pe:mn(t.type,pe),ct);D.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ie){st(t,t.return,ie)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return me=a1,a1=!1,me}function mi(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var m=c.destroy;c.destroy=void 0,m!==void 0&&Cs(t,i,m)}c=c.next}while(c!==s)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function Ps(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function s1(e){var t=e.alternate;t!==null&&(e.alternate=null,s1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$n],delete t[ni],delete t[Qa],delete t[G4],delete t[W4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l1(e){return e.tag===5||e.tag===3||e.tag===4}function u1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Es(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=to));else if(s!==4&&(e=e.child,e!==null))for(Es(e,t,i),e=e.sibling;e!==null;)Es(e,t,i),e=e.sibling}function Rs(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Rs(e,t,i),e=e.sibling;e!==null;)Rs(e,t,i),e=e.sibling}var kt=null,hn=!1;function cr(e,t,i){for(i=i.child;i!==null;)c1(e,t,i),i=i.sibling}function c1(e,t,i){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Ni,i)}catch{}switch(i.tag){case 5:qt||y0(i,t);case 6:var s=kt,c=hn;kt=null,cr(e,t,i),kt=s,hn=c,kt!==null&&(hn?(e=kt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):kt.removeChild(i.stateNode));break;case 18:kt!==null&&(hn?(e=kt,i=i.stateNode,e.nodeType===8?Ka(e.parentNode,i):e.nodeType===1&&Ka(e,i),W0(e)):Ka(kt,i.stateNode));break;case 4:s=kt,c=hn,kt=i.stateNode.containerInfo,hn=!0,cr(e,t,i),kt=s,hn=c;break;case 0:case 11:case 14:case 15:if(!qt&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var m=c,y=m.destroy;m=m.tag,y!==void 0&&((m&2)!==0||(m&4)!==0)&&Cs(i,t,y),c=c.next}while(c!==s)}cr(e,t,i);break;case 1:if(!qt&&(y0(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(S){st(i,t,S)}cr(e,t,i);break;case 21:cr(e,t,i);break;case 22:i.mode&1?(qt=(s=qt)||i.memoizedState!==null,cr(e,t,i),qt=s):cr(e,t,i);break;default:cr(e,t,i)}}function d1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new sm),t.forEach(function(s){var c=gm.bind(null,e,s);i.has(s)||(i.add(s),s.then(c,c))})}}function pn(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];try{var m=e,y=t,S=y;e:for(;S!==null;){switch(S.tag){case 5:kt=S.stateNode,hn=!1;break e;case 3:kt=S.stateNode.containerInfo,hn=!0;break e;case 4:kt=S.stateNode.containerInfo,hn=!0;break e}S=S.return}if(kt===null)throw Error(r(160));c1(m,y,c),kt=null,hn=!1;var q=c.alternate;q!==null&&(q.return=null),c.return=null}catch(L){st(c,t,L)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)f1(t,e),t=t.sibling}function f1(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(t,e),zn(e),s&4){try{mi(3,e,e.return),zo(3,e)}catch(pe){st(e,e.return,pe)}try{mi(5,e,e.return)}catch(pe){st(e,e.return,pe)}}break;case 1:pn(t,e),zn(e),s&512&&i!==null&&y0(i,i.return);break;case 5:if(pn(t,e),zn(e),s&512&&i!==null&&y0(i,i.return),e.flags&32){var c=e.stateNode;try{Qn(c,"")}catch(pe){st(e,e.return,pe)}}if(s&4&&(c=e.stateNode,c!=null)){var m=e.memoizedProps,y=i!==null?i.memoizedProps:m,S=e.type,q=e.updateQueue;if(e.updateQueue=null,q!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&We(c,m),qr(S,y);var L=qr(S,m);for(y=0;y<q.length;y+=2){var Q=q[y],Z=q[y+1];Q==="style"?Mr(c,Z):Q==="dangerouslySetInnerHTML"?j0(c,Z):Q==="children"?Qn(c,Z):H(c,Q,Z,L)}switch(S){case"input":Zt(c,m);break;case"textarea":Ai(c,m);break;case"select":var V=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!m.multiple;var ce=m.value;ce!=null?_t(c,!!m.multiple,ce,!1):V!==!!m.multiple&&(m.defaultValue!=null?_t(c,!!m.multiple,m.defaultValue,!0):_t(c,!!m.multiple,m.multiple?[]:"",!1))}c[ni]=m}catch(pe){st(e,e.return,pe)}}break;case 6:if(pn(t,e),zn(e),s&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,m=e.memoizedProps;try{c.nodeValue=m}catch(pe){st(e,e.return,pe)}}break;case 3:if(pn(t,e),zn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{W0(t.containerInfo)}catch(pe){st(e,e.return,pe)}break;case 4:pn(t,e),zn(e);break;case 13:pn(t,e),zn(e),c=e.child,c.flags&8192&&(m=c.memoizedState!==null,c.stateNode.isHidden=m,!m||c.alternate!==null&&c.alternate.memoizedState!==null||(Bs=ut())),s&4&&d1(e);break;case 22:if(Q=i!==null&&i.memoizedState!==null,e.mode&1?(qt=(L=qt)||Q,pn(t,e),qt=L):pn(t,e),zn(e),s&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!Q&&(e.mode&1)!==0)for(fe=e,Q=e.child;Q!==null;){for(Z=fe=Q;fe!==null;){switch(V=fe,ce=V.child,V.tag){case 0:case 11:case 14:case 15:mi(4,V,V.return);break;case 1:y0(V,V.return);var me=V.stateNode;if(typeof me.componentWillUnmount=="function"){s=V,i=V.return;try{t=s,me.props=t.memoizedProps,me.state=t.memoizedState,me.componentWillUnmount()}catch(pe){st(s,i,pe)}}break;case 5:y0(V,V.return);break;case 22:if(V.memoizedState!==null){p1(Z);continue}}ce!==null?(ce.return=V,fe=ce):p1(Z)}Q=Q.sibling}e:for(Q=null,Z=e;;){if(Z.tag===5){if(Q===null){Q=Z;try{c=Z.stateNode,L?(m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Z.stateNode,q=Z.memoizedProps.style,y=q!=null&&q.hasOwnProperty("display")?q.display:null,S.style.display=Xr("display",y))}catch(pe){st(e,e.return,pe)}}}else if(Z.tag===6){if(Q===null)try{Z.stateNode.nodeValue=L?"":Z.memoizedProps}catch(pe){st(e,e.return,pe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===e)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===e)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===e)break e;Q===Z&&(Q=null),Z=Z.return}Q===Z&&(Q=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:pn(t,e),zn(e),s&4&&d1(e);break;case 21:break;default:pn(t,e),zn(e)}}function zn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(l1(i)){var s=i;break e}i=i.return}throw Error(r(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(Qn(c,""),s.flags&=-33);var m=u1(e);Rs(e,m,c);break;case 3:case 4:var y=s.stateNode.containerInfo,S=u1(e);Es(e,S,y);break;default:throw Error(r(161))}}catch(q){st(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function um(e,t,i){fe=e,m1(e)}function m1(e,t,i){for(var s=(e.mode&1)!==0;fe!==null;){var c=fe,m=c.child;if(c.tag===22&&s){var y=c.memoizedState!==null||ko;if(!y){var S=c.alternate,q=S!==null&&S.memoizedState!==null||qt;S=ko;var L=qt;if(ko=y,(qt=q)&&!L)for(fe=c;fe!==null;)y=fe,q=y.child,y.tag===22&&y.memoizedState!==null?v1(c):q!==null?(q.return=y,fe=q):v1(c);for(;m!==null;)fe=m,m1(m),m=m.sibling;fe=c,ko=S,qt=L}h1(e)}else(c.subtreeFlags&8772)!==0&&m!==null?(m.return=c,fe=m):h1(e)}}function h1(e){for(;fe!==null;){var t=fe;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qt||zo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!qt)if(i===null)s.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:mn(t.type,i.memoizedProps);s.componentDidUpdate(c,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var m=t.updateQueue;m!==null&&pc(t,m,s);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}pc(t,y,i)}break;case 5:var S=t.stateNode;if(i===null&&t.flags&4){i=S;var q=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&i.focus();break;case"img":q.src&&(i.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var L=t.alternate;if(L!==null){var Q=L.memoizedState;if(Q!==null){var Z=Q.dehydrated;Z!==null&&W0(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}qt||t.flags&512&&Ps(t)}catch(V){st(t,t.return,V)}}if(t===e){fe=null;break}if(i=t.sibling,i!==null){i.return=t.return,fe=i;break}fe=t.return}}function p1(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var i=t.sibling;if(i!==null){i.return=t.return,fe=i;break}fe=t.return}}function v1(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{zo(4,t)}catch(q){st(t,i,q)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var c=t.return;try{s.componentDidMount()}catch(q){st(t,c,q)}}var m=t.return;try{Ps(t)}catch(q){st(t,m,q)}break;case 5:var y=t.return;try{Ps(t)}catch(q){st(t,y,q)}}}catch(q){st(t,t.return,q)}if(t===e){fe=null;break}var S=t.sibling;if(S!==null){S.return=t.return,fe=S;break}fe=t.return}}var cm=Math.ceil,So=E.ReactCurrentDispatcher,Ds=E.ReactCurrentOwner,rn=E.ReactCurrentBatchConfig,Be=0,bt=null,ht=null,zt=0,Kt=0,x0=or(0),yt=0,hi=null,Fr=0,To=0,Ns=0,pi=null,Lt=null,Bs=0,w0=1/0,Ln=null,Mo=!1,Is=null,dr=null,qo=!1,fr=null,jo=0,vi=0,Ls=null,Ao=-1,Co=0;function Ct(){return(Be&6)!==0?ut():Ao!==-1?Ao:Ao=ut()}function mr(e){return(e.mode&1)===0?1:(Be&2)!==0&&zt!==0?zt&-zt:V4.transition!==null?(Co===0&&(Co=uu()),Co):(e=Ge,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e)}function vn(e,t,i,s){if(50<vi)throw vi=0,Ls=null,Error(r(185));L0(e,i,s),((Be&2)===0||e!==bt)&&(e===bt&&((Be&2)===0&&(To|=i),yt===4&&hr(e,zt)),Ft(e,s),i===1&&Be===0&&(t.mode&1)===0&&(w0=ut()+500,oo&&sr()))}function Ft(e,t){var i=e.callbackNode;Vf(e,t);var s=Li(e,e===bt?zt:0);if(s===0)i!==null&&au(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&au(i),t===1)e.tag===0?U4(y1.bind(null,e)):rc(y1.bind(null,e)),O4(function(){(Be&6)===0&&sr()}),i=null;else{switch(cu(s)){case 1:i=xa;break;case 4:i=su;break;case 16:i=Di;break;case 536870912:i=lu;break;default:i=Di}i=S1(i,g1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function g1(e,t){if(Ao=-1,Co=0,(Be&6)!==0)throw Error(r(327));var i=e.callbackNode;if(b0()&&e.callbackNode!==i)return null;var s=Li(e,e===bt?zt:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Po(e,s);else{t=s;var c=Be;Be|=2;var m=w1();(bt!==e||zt!==t)&&(Ln=null,w0=ut()+500,Hr(e,t));do try{mm();break}catch(S){x1(e,S)}while(!0);is(),So.current=m,Be=c,ht!==null?t=0:(bt=null,zt=0,t=yt)}if(t!==0){if(t===2&&(c=wa(e),c!==0&&(s=c,t=Fs(e,c))),t===1)throw i=hi,Hr(e,0),hr(e,s),Ft(e,ut()),i;if(t===6)hr(e,s);else{if(c=e.current.alternate,(s&30)===0&&!dm(c)&&(t=Po(e,s),t===2&&(m=wa(e),m!==0&&(s=m,t=Fs(e,m))),t===1))throw i=hi,Hr(e,0),hr(e,s),Ft(e,ut()),i;switch(e.finishedWork=c,e.finishedLanes=s,t){case 0:case 1:throw Error(r(345));case 2:Gr(e,Lt,Ln);break;case 3:if(hr(e,s),(s&130023424)===s&&(t=Bs+500-ut(),10<t)){if(Li(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){Ct(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Va(Gr.bind(null,e,Lt,Ln),t);break}Gr(e,Lt,Ln);break;case 4:if(hr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,c=-1;0<s;){var y=31-cn(s);m=1<<y,y=t[y],y>c&&(c=y),s&=~m}if(s=c,s=ut()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*cm(s/1960))-s,10<s){e.timeoutHandle=Va(Gr.bind(null,e,Lt,Ln),s);break}Gr(e,Lt,Ln);break;case 5:Gr(e,Lt,Ln);break;default:throw Error(r(329))}}}return Ft(e,ut()),e.callbackNode===i?g1.bind(null,e):null}function Fs(e,t){var i=pi;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=Po(e,t),e!==2&&(t=Lt,Lt=i,t!==null&&Os(t)),e}function Os(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function dm(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var c=i[s],m=c.getSnapshot;c=c.value;try{if(!dn(m(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hr(e,t){for(t&=~Ns,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-cn(t),s=1<<i;e[i]=-1,t&=~s}}function y1(e){if((Be&6)!==0)throw Error(r(327));b0();var t=Li(e,0);if((t&1)===0)return Ft(e,ut()),null;var i=Po(e,t);if(e.tag!==0&&i===2){var s=wa(e);s!==0&&(t=s,i=Fs(e,s))}if(i===1)throw i=hi,Hr(e,0),hr(e,t),Ft(e,ut()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gr(e,Lt,Ln),Ft(e,ut()),null}function Hs(e,t){var i=Be;Be|=1;try{return e(t)}finally{Be=i,Be===0&&(w0=ut()+500,oo&&sr())}}function Or(e){fr!==null&&fr.tag===0&&(Be&6)===0&&b0();var t=Be;Be|=1;var i=rn.transition,s=Ge;try{if(rn.transition=null,Ge=1,e)return e()}finally{Ge=s,rn.transition=i,Be=t,(Be&6)===0&&sr()}}function Gs(){Kt=x0.current,Ze(x0)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,F4(i)),ht!==null)for(i=ht.return;i!==null;){var s=i;switch(Ja(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ro();break;case 3:v0(),Ze(Nt),Ze(St),fs();break;case 5:cs(s);break;case 4:v0();break;case 13:Ze(nt);break;case 19:Ze(nt);break;case 10:os(s.type._context);break;case 22:case 23:Gs()}i=i.return}if(bt=e,ht=e=pr(e.current,null),zt=Kt=t,yt=0,hi=null,Ns=To=Fr=0,Lt=pi=null,Br!==null){for(t=0;t<Br.length;t++)if(i=Br[t],s=i.interleaved,s!==null){i.interleaved=null;var c=s.next,m=i.pending;if(m!==null){var y=m.next;m.next=c,s.next=y}i.pending=s}Br=null}return e}function x1(e,t){do{var i=ht;try{if(is(),vo.current=wo,go){for(var s=rt.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}go=!1}if(Lr=0,wt=gt=rt=null,li=!1,ui=0,Ds.current=null,i===null||i.return===null){yt=1,hi=t,ht=null;break}e:{var m=e,y=i.return,S=i,q=t;if(t=zt,S.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var L=q,Q=S,Z=Q.tag;if((Q.mode&1)===0&&(Z===0||Z===11||Z===15)){var V=Q.alternate;V?(Q.updateQueue=V.updateQueue,Q.memoizedState=V.memoizedState,Q.lanes=V.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ce=Gc(y);if(ce!==null){ce.flags&=-257,Wc(ce,y,S,m,t),ce.mode&1&&Hc(m,L,t),t=ce,q=L;var me=t.updateQueue;if(me===null){var pe=new Set;pe.add(q),t.updateQueue=pe}else me.add(q);break e}else{if((t&1)===0){Hc(m,L,t),Ws();break e}q=Error(r(426))}}else if(et&&S.mode&1){var ct=Gc(y);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Wc(ct,y,S,m,t),ns(g0(q,S));break e}}m=q=g0(q,S),yt!==4&&(yt=2),pi===null?pi=[m]:pi.push(m),m=y;do{switch(m.tag){case 3:m.flags|=65536,t&=-t,m.lanes|=t;var D=Fc(m,q,t);hc(m,D);break e;case 1:S=q;var C=m.type,I=m.stateNode;if((m.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(dr===null||!dr.has(I)))){m.flags|=65536,t&=-t,m.lanes|=t;var ie=Oc(m,S,t);hc(m,ie);break e}}m=m.return}while(m!==null)}$1(i)}catch(ge){t=ge,ht===i&&i!==null&&(ht=i=i.return);continue}break}while(!0)}function w1(){var e=So.current;return So.current=wo,e===null?wo:e}function Ws(){(yt===0||yt===3||yt===2)&&(yt=4),bt===null||(Fr&268435455)===0&&(To&268435455)===0||hr(bt,zt)}function Po(e,t){var i=Be;Be|=2;var s=w1();(bt!==e||zt!==t)&&(Ln=null,Hr(e,t));do try{fm();break}catch(c){x1(e,c)}while(!0);if(is(),Be=i,So.current=s,ht!==null)throw Error(r(261));return bt=null,zt=0,yt}function fm(){for(;ht!==null;)b1(ht)}function mm(){for(;ht!==null&&!Bf();)b1(ht)}function b1(e){var t=z1(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?$1(e):ht=t,Ds.current=null}function $1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=om(i,t,Kt),i!==null){ht=i;return}}else{if(i=am(i,t),i!==null){i.flags&=32767,ht=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,ht=null;return}}if(t=t.sibling,t!==null){ht=t;return}ht=t=e}while(t!==null);yt===0&&(yt=5)}function Gr(e,t,i){var s=Ge,c=rn.transition;try{rn.transition=null,Ge=1,hm(e,t,i,s)}finally{rn.transition=c,Ge=s}return null}function hm(e,t,i,s){do b0();while(fr!==null);if((Be&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var m=i.lanes|i.childLanes;if(Kf(e,m),e===bt&&(ht=bt=null,zt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||qo||(qo=!0,S1(Di,function(){return b0(),null})),m=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||m){m=rn.transition,rn.transition=null;var y=Ge;Ge=1;var S=Be;Be|=4,Ds.current=null,lm(e,i),f1(i,e),E4(Wa),Hi=!!Ga,Wa=Ga=null,e.current=i,um(i),If(),Be=S,Ge=y,rn.transition=m}else e.current=i;if(qo&&(qo=!1,fr=e,jo=c),m=e.pendingLanes,m===0&&(dr=null),Of(i.stateNode),Ft(e,ut()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],s(c.value,{componentStack:c.stack,digest:c.digest});if(Mo)throw Mo=!1,e=Is,Is=null,e;return(jo&1)!==0&&e.tag!==0&&b0(),m=e.pendingLanes,(m&1)!==0?e===Ls?vi++:(vi=0,Ls=e):vi=0,sr(),null}function b0(){if(fr!==null){var e=cu(jo),t=rn.transition,i=Ge;try{if(rn.transition=null,Ge=16>e?16:e,fr===null)var s=!1;else{if(e=fr,fr=null,jo=0,(Be&6)!==0)throw Error(r(331));var c=Be;for(Be|=4,fe=e.current;fe!==null;){var m=fe,y=m.child;if((fe.flags&16)!==0){var S=m.deletions;if(S!==null){for(var q=0;q<S.length;q++){var L=S[q];for(fe=L;fe!==null;){var Q=fe;switch(Q.tag){case 0:case 11:case 15:mi(8,Q,m)}var Z=Q.child;if(Z!==null)Z.return=Q,fe=Z;else for(;fe!==null;){Q=fe;var V=Q.sibling,ce=Q.return;if(s1(Q),Q===L){fe=null;break}if(V!==null){V.return=ce,fe=V;break}fe=ce}}}var me=m.alternate;if(me!==null){var pe=me.child;if(pe!==null){me.child=null;do{var ct=pe.sibling;pe.sibling=null,pe=ct}while(pe!==null)}}fe=m}}if((m.subtreeFlags&2064)!==0&&y!==null)y.return=m,fe=y;else e:for(;fe!==null;){if(m=fe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:mi(9,m,m.return)}var D=m.sibling;if(D!==null){D.return=m.return,fe=D;break e}fe=m.return}}var C=e.current;for(fe=C;fe!==null;){y=fe;var I=y.child;if((y.subtreeFlags&2064)!==0&&I!==null)I.return=y,fe=I;else e:for(y=C;fe!==null;){if(S=fe,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:zo(9,S)}}catch(ge){st(S,S.return,ge)}if(S===y){fe=null;break e}var ie=S.sibling;if(ie!==null){ie.return=S.return,fe=ie;break e}fe=S.return}}if(Be=c,sr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Ni,e)}catch{}s=!0}return s}finally{Ge=i,rn.transition=t}}return!1}function _1(e,t,i){t=g0(i,t),t=Fc(e,t,1),e=ur(e,t,1),t=Ct(),e!==null&&(L0(e,1,t),Ft(e,t))}function st(e,t,i){if(e.tag===3)_1(e,e,i);else for(;t!==null;){if(t.tag===3){_1(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(dr===null||!dr.has(s))){e=g0(i,e),e=Oc(t,e,1),t=ur(t,e,1),e=Ct(),t!==null&&(L0(t,1,e),Ft(t,e));break}}t=t.return}}function pm(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&i,bt===e&&(zt&i)===i&&(yt===4||yt===3&&(zt&130023424)===zt&&500>ut()-Bs?Hr(e,0):Ns|=i),Ft(e,t)}function k1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ii,Ii<<=1,(Ii&130023424)===0&&(Ii=4194304)));var i=Ct();e=Nn(e,t),e!==null&&(L0(e,t,i),Ft(e,i))}function vm(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),k1(e,i)}function gm(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(r(314))}s!==null&&s.delete(t),k1(e,i)}var z1;z1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)It=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return It=!1,im(e,t,i);It=(e.flags&131072)!==0}else It=!1,et&&(t.flags&1048576)!==0&&ic(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;_o(e,t),e=t.pendingProps;var c=u0(t,St.current);p0(t,i),c=ps(null,t,s,e,c,i);var m=vs();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bt(s)?(m=!0,io(t)):m=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ls(t),c.updater=bo,t.stateNode=c,c._reactInternals=t,$s(t,s,e,i),t=Ss(null,t,s,!0,m,i)):(t.tag=0,et&&m&&Za(t),At(null,t,c,i),t=t.child),t;case 16:s=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,c=s._init,s=c(s._payload),t.type=s,c=t.tag=xm(s),e=mn(s,e),c){case 0:t=zs(null,t,s,e,i);break e;case 1:t=Xc(null,t,s,e,i);break e;case 11:t=Uc(null,t,s,e,i);break e;case 14:t=Vc(null,t,s,mn(s.type,e),i);break e}throw Error(r(306,s,""))}return t;case 0:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:mn(s,c),zs(e,t,s,c,i);case 1:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:mn(s,c),Xc(e,t,s,c,i);case 3:e:{if(Zc(t),e===null)throw Error(r(387));s=t.pendingProps,m=t.memoizedState,c=m.element,mc(e,t),ho(t,s,null,i);var y=t.memoizedState;if(s=y.element,m.isDehydrated)if(m={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=m,t.memoizedState=m,t.flags&256){c=g0(Error(r(423)),t),t=Jc(e,t,s,i,c);break e}else if(s!==c){c=g0(Error(r(424)),t),t=Jc(e,t,s,i,c);break e}else for(Vt=ir(t.stateNode.containerInfo.firstChild),Ut=t,et=!0,fn=null,i=dc(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(f0(),s===c){t=In(e,t,i);break e}At(e,t,s,i)}t=t.child}return t;case 5:return vc(t),e===null&&ts(t),s=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,y=c.children,Ua(s,c)?y=null:m!==null&&Ua(s,m)&&(t.flags|=32),Yc(e,t),At(e,t,y,i),t.child;case 6:return e===null&&ts(t),null;case 13:return e1(e,t,i);case 4:return us(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=m0(t,null,s,i):At(e,t,s,i),t.child;case 11:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:mn(s,c),Uc(e,t,s,c,i);case 7:return At(e,t,t.pendingProps,i),t.child;case 8:return At(e,t,t.pendingProps.children,i),t.child;case 12:return At(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,c=t.pendingProps,m=t.memoizedProps,y=c.value,Qe(co,s._currentValue),s._currentValue=y,m!==null)if(dn(m.value,y)){if(m.children===c.children&&!Nt.current){t=In(e,t,i);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var S=m.dependencies;if(S!==null){y=m.child;for(var q=S.firstContext;q!==null;){if(q.context===s){if(m.tag===1){q=Bn(-1,i&-i),q.tag=2;var L=m.updateQueue;if(L!==null){L=L.shared;var Q=L.pending;Q===null?q.next=q:(q.next=Q.next,Q.next=q),L.pending=q}}m.lanes|=i,q=m.alternate,q!==null&&(q.lanes|=i),as(m.return,i,t),S.lanes|=i;break}q=q.next}}else if(m.tag===10)y=m.type===t.type?null:m.child;else if(m.tag===18){if(y=m.return,y===null)throw Error(r(341));y.lanes|=i,S=y.alternate,S!==null&&(S.lanes|=i),as(y,i,t),y=m.sibling}else y=m.child;if(y!==null)y.return=m;else for(y=m;y!==null;){if(y===t){y=null;break}if(m=y.sibling,m!==null){m.return=y.return,y=m;break}y=y.return}m=y}At(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,s=t.pendingProps.children,p0(t,i),c=tn(c),s=s(c),t.flags|=1,At(e,t,s,i),t.child;case 14:return s=t.type,c=mn(s,t.pendingProps),c=mn(s.type,c),Vc(e,t,s,c,i);case 15:return Kc(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:mn(s,c),_o(e,t),t.tag=1,Bt(s)?(e=!0,io(t)):e=!1,p0(t,i),Ic(t,s,c),$s(t,s,c,i),Ss(null,t,s,!0,e,i);case 19:return n1(e,t,i);case 22:return Qc(e,t,i)}throw Error(r(156,t.tag))};function S1(e,t){return ou(e,t)}function ym(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,t,i,s){return new ym(e,t,i,s)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xm(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===Ke)return 14}return 2}function pr(e,t){var i=e.alternate;return i===null?(i=on(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Eo(e,t,i,s,c,m){var y=2;if(s=e,typeof e=="function")Us(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case X:return Wr(i.children,c,m,t);case W:y=8,c|=8;break;case J:return e=on(12,i,t,c|2),e.elementType=J,e.lanes=m,e;case je:return e=on(13,i,t,c),e.elementType=je,e.lanes=m,e;case Pe:return e=on(19,i,t,c),e.elementType=Pe,e.lanes=m,e;case De:return Ro(i,c,m,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:y=10;break e;case ke:y=9;break e;case Te:y=11;break e;case Ke:y=14;break e;case Ue:y=16,s=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=on(y,i,t,c),t.elementType=e,t.type=s,t.lanes=m,t}function Wr(e,t,i,s){return e=on(7,e,s,t),e.lanes=i,e}function Ro(e,t,i,s){return e=on(22,e,s,t),e.elementType=De,e.lanes=i,e.stateNode={isHidden:!1},e}function Vs(e,t,i){return e=on(6,e,null,t),e.lanes=i,e}function Ks(e,t,i){return t=on(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wm(e,t,i,s,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Qs(e,t,i,s,c,m,y,S,q){return e=new wm(e,t,i,S,q),t===1?(t=1,m===!0&&(t|=8)):t=0,m=on(3,null,null,t),e.current=m,m.stateNode=e,m.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(m),e}function bm(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function T1(e){if(!e)return ar;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Bt(i))return tc(e,i,t)}return t}function M1(e,t,i,s,c,m,y,S,q){return e=Qs(i,s,!0,e,c,m,y,S,q),e.context=T1(null),i=e.current,s=Ct(),c=mr(i),m=Bn(s,c),m.callback=t??null,ur(i,m,c),e.current.lanes=c,L0(e,c,s),Ft(e,s),e}function Do(e,t,i,s){var c=t.current,m=Ct(),y=mr(c);return i=T1(i),t.context===null?t.context=i:t.pendingContext=i,t=Bn(m,y),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=ur(c,t,y),e!==null&&(vn(e,c,y,m),mo(e,c,y)),y}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function q1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Ys(e,t){q1(e,t),(e=e.alternate)&&q1(e,t)}function $m(){return null}var j1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}Bo.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));Do(e,t,null,null)},Bo.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){Do(null,e,null,null)}),t[Pn]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<tr.length&&t!==0&&t<tr[i].priority;i++);tr.splice(i,0,e),i===0&&vu(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function A1(){}function _m(e,t,i,s,c){if(c){if(typeof s=="function"){var m=s;s=function(){var L=No(y);m.call(L)}}var y=M1(t,s,e,0,null,!1,!1,"",A1);return e._reactRootContainer=y,e[Pn]=y.current,ei(e.nodeType===8?e.parentNode:e),Or(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var S=s;s=function(){var L=No(q);S.call(L)}}var q=Qs(e,0,!1,null,null,!1,!1,"",A1);return e._reactRootContainer=q,e[Pn]=q.current,ei(e.nodeType===8?e.parentNode:e),Or(function(){Do(t,q,i,s)}),q}function Lo(e,t,i,s,c){var m=i._reactRootContainer;if(m){var y=m;if(typeof c=="function"){var S=c;c=function(){var q=No(y);S.call(q)}}Do(t,y,e,c)}else y=_m(i,t,e,c,s);return No(y)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=I0(t.pendingLanes);i!==0&&($a(t,i|1),Ft(t,ut()),(Be&6)===0&&(w0=ut()+500,sr()))}break;case 13:Or(function(){var s=Nn(e,1);if(s!==null){var c=Ct();vn(s,e,1,c)}}),Ys(e,1)}},_a=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var i=Ct();vn(t,e,134217728,i)}Ys(e,134217728)}},fu=function(e){if(e.tag===13){var t=mr(e),i=Nn(e,t);if(i!==null){var s=Ct();vn(i,e,t,s)}Ys(e,t)}},mu=function(){return Ge},hu=function(e,t){var i=Ge;try{return Ge=e,t()}finally{Ge=i}},Yn=function(e,t,i){switch(t){case"input":if(Zt(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var c=no(s);if(!c)throw Error(r(90));zr(s),Zt(s,c)}}}break;case"textarea":Ai(e,i);break;case"select":t=i.value,t!=null&&_t(e,!!i.multiple,t,!1)}},E0=Hs,Ri=Or;var km={usingClientEntryPoint:!1,Events:[ri,s0,no,Xn,P0,Hs]},gi={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Ni=Fo.inject(zm),bn=Fo}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km,Ot.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(t))throw Error(r(200));return bm(e,t,null,i)},Ot.createRoot=function(e,t){if(!Zs(e))throw Error(r(299));var i=!1,s="",c=j1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Qs(e,1,!1,null,null,i,!1,s,c),e[Pn]=t.current,ei(e.nodeType===8?e.parentNode:e),new Xs(t)},Ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},Ot.flushSync=function(e){return Or(e)},Ot.hydrate=function(e,t,i){if(!Io(t))throw Error(r(200));return Lo(null,e,t,!0,i)},Ot.hydrateRoot=function(e,t,i){if(!Zs(e))throw Error(r(405));var s=i!=null&&i.hydratedSources||null,c=!1,m="",y=j1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(m=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=M1(t,null,e,1,i??null,c,!1,m,y),e[Pn]=t.current,ei(e),s)for(e=0;e<s.length;e++)i=s[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new Bo(t)},Ot.render=function(e,t,i){if(!Io(t))throw Error(r(200));return Lo(null,e,t,!1,i)},Ot.unmountComponentAtNode=function(e){if(!Io(e))throw Error(r(40));return e._reactRootContainer?(Or(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},Ot.unstable_batchedUpdates=Hs,Ot.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!Io(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Lo(e,t,i,!1,s)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var I1;function Pm(){if(I1)return tl.exports;I1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),tl.exports=Cm(),tl.exports}var L1;function Em(){if(L1)return Oo;L1=1;var o=Pm();return Oo.createRoot=o.createRoot,Oo.hydrateRoot=o.hydrateRoot,Oo}var Rm=Em();const Dm=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Nm=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Bm=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Im=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,Lm=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Fm=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Om=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Hm=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Gm=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Wm=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
---
`,Um=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Vm=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,Km=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,Qm=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,Ym=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
---
`,Xm=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,Zm=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,Jm=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,eh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,th=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,nh=`---
label: "Linear Function"
labelPl: "Funkcja liniowa"
scope: funkcje
section: SP8
level: 2
x: 260
y: 540
---
`,rh=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,ih=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,oh=`---
label: "Quadratic Function"
labelPl: "Funkcja kwadratowa"
scope: funkcje
section: LP
level: 2
x: 390
y: 700
---
`,ah=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,sh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,lh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,uh=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,ch=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,dh=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
---
`,fh=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
---
`,mh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,hh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,ph=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,vh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,gh=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,yh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
`,xh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,wh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,bh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,$h=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,_h=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,kh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,zh=`---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
---
`,Sh=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,Th=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
---
`,Mh=`---
label: "Quadratic Equations"
labelPl: "Równania kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 390
---
`,qh=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
`,jh=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Ah=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Ch=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Ph=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
---
`,Eh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Rh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Dh=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
`,Nh=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,Bh=`---
label: "Trygonometria - podstawy"
labelPl: "Trygonometria - podstawy"
scope: trygonometria
section: LP
level: 1
x: 830
y: 200
---
`,Ih=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,Lh=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,Fh=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,Oh=`---
label: "Vectors"
labelPl: "Wektory"
scope: geometria_analityczna
section: LR
level: 3
x: 660
y: 870
---
`,Hh=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
`,Gh=`---
options:
  - "(−∞, −2] ∪ [4, +∞)"
  - "[−2, 4]"
  - "(−∞, −2)"
  - "(4, +∞)"
correct: 0
hint: "Nierówność |x−1| ≥ 3 daje x−1 ≥ 3 lub x−1 ≤ −3."
---

Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:
`,Wh=`---
options:
  - "$|x| = -x$ dla $x < 0$"
  - "$|x| = x$ dla każdego $x$"
  - "$|x| = -x$ dla $x > 0$"
  - "$|x|$ może być ujemna"
correct: 0
hint: "Wartość bezwzględna to odległość od zera — zawsze nieujemna. Dla $x < 0$: $|x| = -x > 0$."
---

Które zdanie o wartości bezwzględnej jest prawdziwe?
`,Uh=`---
options:
  - "$x \\in (-3, 3)$"
  - "$x \\in [-3, 3]$"
  - "$x \\in (-\\infty, -3) \\cup (3, +\\infty)$"
  - "$x \\in \\{-3, 3\\}$"
correct: 0
hint: "$|x| < 3$ oznacza $-3 < x < 3$. To przedział otwarty."
---

Zbiór rozwiązań nierówności $|x| < 3$ to:
`,Vh=`---
options:
  - "2"
  - "4"
  - "1/2"
  - "3"
correct: 0
hint: "a = (6−2)/(3−1) = 4/2 = 2."
---

Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:
`,Kh=`---
options:
  - "$\\sqrt{13}$"
  - "$\\sqrt{7}$"
  - "$5$"
  - "$13$"
correct: 0
hint: "$d = \\sqrt{(3-1)^2 + (5-2)^2} = \\sqrt{4+9} = \\sqrt{13}$."
---

Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:
`,Qh=`---
options:
  - "$(2, 3{,}5)$"
  - "$(4, 7)$"
  - "$(1, 3)$"
  - "$(3, 2{,}5)$"
correct: 0
hint: "Środek odcinka $AB$: $S = \\left(\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2}\\right) = \\left(\\frac{0+4}{2}, \\frac{2+5}{2}\\right) = (2, 3{,}5)$."
---

Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:
`,Yh=`---
options:
  - "$24$"
  - "$48$"
  - "$14$"
  - "$12$"
correct: 0
hint: "$P = \\frac{d_1 \\cdot d_2}{2} = \\frac{8 \\cdot 6}{2} = \\frac{48}{2} = 24$."
---

Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:
`,Xh=`---
options:
  - "$24\\ \\text{cm}^2$"
  - "$20\\ \\text{cm}^2$"
  - "$12\\ \\text{cm}^2$"
  - "$48\\ \\text{cm}^2$"
correct: 0
hint: "Pole prostokąta = $a \\cdot b = 6 \\cdot 4 = 24\\ \\text{cm}^2$."
---

Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:
`,Zh=`---
options:
  - "$9\\pi\\ \\text{cm}^2$"
  - "$6\\pi\\ \\text{cm}^2$"
  - "$3\\pi\\ \\text{cm}^2$"
  - "$18\\pi\\ \\text{cm}^2$"
correct: 0
hint: "Pole koła = $\\pi r^2 = \\pi \\cdot 3^2 = 9\\pi\\ \\text{cm}^2$."
---

Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:
`,Jh=`---
options:
  - "155"
  - "150"
  - "145"
  - "160"
correct: 0
hint: "S₁₀ = (10/2)·(2·2 + 9·3) = 5·31 = 155."
---

Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:
`,e2=`---
options:
  - "$48$"
  - "$24$"
  - "$96$"
  - "$16$"
correct: 0
hint: "Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$. $a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$."
---

Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:
`,t2=`---
options:
  - "$S_{10} = 55$"
  - "$S_{10} = 50$"
  - "$S_{10} = 45$"
  - "$S_{10} = 100$"
correct: 0
hint: "Suma $n$ wyrazów ciągu arytm.: $S_n = \\frac{n(a_1 + a_n)}{2}$. $a_{10} = 10$, $S_{10} = \\frac{10 \\cdot (1+10)}{2} = 55$."
---

Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:
`,n2=`---
options:
  - "1/4"
  - "1/8"
  - "3/8"
  - "1/2"
correct: 0
hint: "C(4,3)·(1/2)³·(1/2)¹ = 4/16 = 1/4."
---

Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:
`,r2=`---
options:
  - "$\\binom{n}{k} p^k (1-p)^{n-k}$"
  - "$p^k (1-p)^{n-k}$"
  - "$\\binom{n}{k} p^{n-k} (1-p)^k$"
  - "$n \\cdot p^k$"
correct: 0
hint: "Wzór Bernoulliego: $P(X=k) = \\binom{n}{k} p^k q^{n-k}$, gdzie $q = 1-p$."
---

W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:
`,i2=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{1}{8}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "$P(X=2) = \\binom{3}{2} \\cdot (\\frac{1}{2})^2 \\cdot \\frac{1}{2} = 3 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:
`,o2=`---
options:
  - "10"
  - "5"
  - "20"
  - "15"
correct: 0
hint: "C(5,2) = 5!/(2!·3!) = 10."
---

Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:
`,a2=`---
options:
  - "$a^3 + 3a^2b + 3ab^2 + b^3$"
  - "$a^3 + b^3$"
  - "$a^3 - 3a^2b + 3ab^2 - b^3$"
  - "$3a^2b + 3ab^2$"
correct: 0
hint: "Wzór dwumianowy dla $n=3$: $(a+b)^3 = \\binom{3}{0}a^3 + \\binom{3}{1}a^2b + \\binom{3}{2}ab^2 + \\binom{3}{3}b^3$."
---

Rozwiń $(a + b)^3$:
`,s2=`---
options:
  - "$\\binom{n}{k} a^{n-k} b^k$"
  - "$\\binom{n}{k} a^k b^{n-k}$"
  - "$n! \\cdot a^{n-k} b^k$"
  - "$\\binom{k}{n} a^{n-k} b^k$"
correct: 0
hint: "$(k+1)$-ty wyraz (od $k=0$) rozwinięcia $(a+b)^n$: $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$."
---

Wyraz ogólny rozwinięcia $(a+b)^n$ to:
`,l2=`---
options:
  - "(x−2)²+(y+1)²=9"
  - "(x+2)²+(y−1)²=9"
  - "(x−2)²+(y−1)²=9"
  - "(x+2)²+(y+1)²=3"
correct: 0
hint: "Wzór: (x−a)²+(y−b)²=r². Tu a=2, b=−1, r=3."
---

Okrąg o środku (2,−1) i promieniu 3 ma równanie:
`,u2=`---
options:
  - "$(x-2)^2 + (y+1)^2 = 9$"
  - "$(x+2)^2 + (y-1)^2 = 9$"
  - "$(x-2)^2 + (y+1)^2 = 3$"
  - "$(x+2)^2 + (y-1)^2 = 3$"
correct: 0
hint: "Równanie okręgu o środku $(a, b)$ i promieniu $r$: $(x-a)^2 + (y-b)^2 = r^2$. Tu: $(x-2)^2+(y+1)^2=9$."
---

Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:
`,c2=`---
options:
  - "Środek $(1, -2)$, promień $3$"
  - "Środek $(-1, 2)$, promień $3$"
  - "Środek $(1, -2)$, promień $9$"
  - "Środek $(-1, 2)$, promień $9$"
correct: 0
hint: "$(x-1)^2 + (y+2)^2 = 9$: środek $(1, -2)$, promień $\\sqrt{9} = 3$."
---

Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:
`,d2=`---
options:
  - "10"
  - "15"
  - "20"
  - "60"
correct: 0
hint: "C(5,3) = 5!/(3!·2!) = 10."
---

Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?
`,f2=`---
options:
  - "$10$"
  - "$20$"
  - "$60$"
  - "$5$"
correct: 0
hint: "$\\binom{5}{2} = \\frac{5!}{2!\\cdot 3!} = \\frac{20}{2} = 10$."
---

Ile jest sposobów wybrania 2 osób z 5?
`,m2=`---
options:
  - "$\\binom{n}{k} = \\binom{n}{n-k}$"
  - "$\\binom{n}{k} = \\binom{n+1}{k}$"
  - "$\\binom{n}{k} = k \\cdot \\binom{n}{k-1}$"
  - "$\\binom{n}{k} = n \\cdot \\binom{n-1}{k}$"
correct: 0
hint: "Symetria kombinacji: wybór $k$ elementów jest równoznaczny z pominięciem $n-k$. Więc $\\binom{n}{k} = \\binom{n}{n-k}$."
---

Który wzór jest prawdziwą własnością symbolu Newtona?
`,h2=`---
options:
  - "5"
  - "7"
  - "1"
  - "√5"
correct: 0
hint: "|z| = √(3²+4²) = √25 = 5."
---

Moduł liczby zespolonej z = 3 + 4i wynosi:
`,p2=`---
options:
  - "$2 + 3i$"
  - "$2 - 3i$"
  - "$-2 + 3i$"
  - "$-2 - 3i$"
correct: 0
hint: "$(1+2i) + (1+i) = (1+1) + (2+1)i = 2 + 3i$."
---

Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$
`,v2=`---
options:
  - "$\\sqrt{5}$"
  - "$5$"
  - "$3$"
  - "$\\sqrt{3}$"
correct: 0
hint: "$|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$."
---

Moduł liczby zespolonej $z = 1 + 2i$ wynosi:
`,g2=`---
options:
  - "0.2"
  - "0.9"
  - "0.5"
  - "0.1"
correct: 0
hint: "P(A∩B) = P(A)·P(B|A) = 0.4·0.5 = 0.2."
---

P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =
`,y2=`---
options:
  - "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$"
  - "$P(A|B) = P(A) \\cdot P(B)$"
  - "$P(A|B) = P(A) + P(B)$"
  - "$P(A|B) = \\frac{P(A)}{P(B)}$"
correct: 0
hint: "Definicja prawdopodobieństwa warunkowego: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (dla $P(B) > 0$)."
---

Wzór na prawdopodobieństwo warunkowe $P(A|B)$:
`,x2=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{5}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Karty $\\leq 4$: {1,2,3,4}. Parzyste wśród nich: {2,4}. $P = \\frac{2}{4} = \\frac{1}{2}$."
---

Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:
`,w2=`---
options:
  - "a=3, b=2"
  - "a=9, b=4"
  - "a=2, b=3"
  - "a=√3, b=√2"
correct: 0
hint: "Standardowa postać: x²/a² + y²/b² = 1."
---

Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:
`,b2=`---
options:
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
  - "$y = ax^2$"
  - "$(x-h)^2 + (y-k)^2 = r^2$"
correct: 0
hint: "Równanie elipsy o półosiach $a$ (pozioma) i $b$ (pionowa): $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
---

Równanie elipsy o środku w początku układu współrzędnych to:
`,$2=`---
options:
  - "$y = \\frac{1}{4p}x^2$"
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$x^2 + y^2 = r^2$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
correct: 0
hint: "Parabola z ogniskiem w $(0,p)$: $y = \\frac{x^2}{4p}$. Jest to krzywa stożkowa będąca przekrojem stożka płaszczyzną równoległą do tworzącej."
---

Które równanie opisuje parabolę jako krzywą stożkową?
`,_2=`---
options:
  - "6"
  - "3"
  - "9"
  - "27"
correct: 0
hint: "3! = 6 permutacji."
---

Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?
`,k2=`---
options:
  - "$8$"
  - "$6$"
  - "$3$"
  - "$12$"
correct: 0
hint: "Zasada mnożenia: $2 \\times 4 = 8$ możliwości (każda koszulka z każdą spodnicą)."
---

Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?
`,z2=`---
options:
  - "$12$"
  - "$6$"
  - "$3$"
  - "$24$"
correct: 0
hint: "Zasada mnożenia: $3 \\times 4 = 12$ tras (3 drogi z A do B, 4 z B do C)."
---

Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?
`,S2=`---
options:
  - "5"
  - "3"
  - "7"
  - "25/5"
correct: 0
hint: "Sortujesz: 1,3,5,7,9. Środkowy element to 5."
---

Mediana zbioru {3, 7, 1, 9, 5} wynosi:
`,T2=`---
options:
  - "$7$"
  - "$6$"
  - "$8$"
  - "$7{,}5$"
correct: 0
hint: "Mediana to środkowa wartość po posortowaniu. Posortowane: 3, 5, 7, 9, 11. Środkowa to 7."
---

Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:
`,M2=`---
options:
  - "$6$"
  - "$5$"
  - "$7$"
  - "$8$"
correct: 0
hint: "Średnia arytmetyczna: suma wszystkich / liczba elementów. $(4+6+8+6)/4 = 24/4 = 6$."
---

Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:
`,q2=`---
options:
  - "(−∞,−1) ∪ (1,+∞)"
  - "(−1, 1)"
  - "(0, +∞)"
  - "(−∞, 0)"
correct: 0
hint: "f'(x) = 3x²−3 = 3(x−1)(x+1). f'>0 gdy |x|>1."
---

Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:
`,j2=`---
options:
  - "Funkcja rośnie"
  - "Funkcja maleje"
  - "Funkcja jest stała"
  - "Funkcja ma minimum"
correct: 0
hint: "Gdy $f'(x) > 0$ na przedziale, funkcja jest rosnąca na tym przedziale."
---

Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:
`,A2=`---
options:
  - "$x = 1$ (minimum)"
  - "$x = 1$ (maksimum)"
  - "$x = -1$ (minimum)"
  - "$x = 0$ (minimum)"
correct: 0
hint: "$f'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f''(x) = 2 > 0$, więc to minimum."
---

Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:
`,C2=`---
options:
  - "$3x^2 - 4$"
  - "$3x^2 + 4$"
  - "$x^2 - 4$"
  - "$3x^2$"
correct: 0
hint: "Reguła potęgi: $(x^n)' = n \\cdot x^{n-1}$. Ponadto $(x^3)' = 3x^2$ i $(-4x)' = -4$."
---

Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:
`,P2=`---
options:
  - "$\\cos x$"
  - "$-\\cos x$"
  - "$-\\sin x$"
  - "$\\sin x$"
correct: 0
hint: "Podstawowa reguła: $(\\sin x)' = \\cos x$."
---

Pochodna funkcji $f(x) = \\sin x$ wynosi:
`,E2=`---
options:
  - "$6x^2 - 2$"
  - "$6x^2 + 2$"
  - "$2x^3 - 2x$"
  - "$6x - 2$"
correct: 0
hint: "$(2x^3)' = 6x^2$, $(-2x)' = -2$. Łącznie: $6x^2 - 2$."
---

Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:
`,R2=`---
options:
  - "5"
  - "10"
  - "2.5"
  - "0.5"
correct: 0
hint: "E(X) = n·p = 10·0.5 = 5."
---

W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:
`,D2=`---
options:
  - "$np$"
  - "$np(1-p)$"
  - "$\\sqrt{np(1-p)}$"
  - "$\\frac{1}{np}$"
correct: 0
hint: "Wartość oczekiwana rozkładu dwumianowego $B(n,p)$: $E(X) = np$."
---

Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:
`,N2=`---
options:
  - "Symetryczny dzwon wokół średniej"
  - "Wykładniczy wzrost"
  - "Jednostajny prostokąt"
  - "Asymetryczny skok w górę"
correct: 0
hint: "Rozkład normalny (Gaussa) ma charakterystyczny kształt dzwonu, symetryczny względem średniej $\\mu$."
---

Wykres rozkładu normalnego ma kształt:
`,B2=`---
options:
  - "(x−2)(x−3)"
  - "(x+2)(x+3)"
  - "(x−1)(x−6)"
  - "(x−2)(x+3)"
correct: 0
hint: "Szukasz dwóch liczb, których suma = −5 i iloczyn = 6."
---

Rozkład na czynniki: x² − 5x + 6 =
`,I2=`---
options:
  - "$(x-4)(x+2)$"
  - "$(x+4)(x-2)$"
  - "$(x-4)(x-2)$"
  - "$(x+4)(x+2)$"
correct: 0
hint: "Szukasz dwóch liczb o sumie $-2$ i iloczynie $-8$: to $-4$ i $2$."
---

Rozłóż na czynniki: $x^2 - 2x - 8 =$
`,L2=`---
options:
  - "$2x(x - 3)$"
  - "$2(x^2 - 3)$"
  - "$x(2x - 3)$"
  - "$2x^2 - 6x$"
correct: 0
hint: "Wyłącz wspólny czynnik $2x$: $2x^2 - 6x = 2x(x - 3)$."
---

Rozłóż na czynniki: $2x^2 - 6x =$
`,F2=`---
options:
  - "2x+2"
  - "2x+1"
  - "2x²+2"
  - "x+2"
correct: 0
hint: "f(g(x)) = f(x+1) = 2(x+1) = 2x+2."
---

Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =
`,O2=`---
options:
  - "$4x^2 - 1$"
  - "$2x^2 - 1$"
  - "$4x - 1$"
  - "$2x - 1$"
correct: 0
hint: "$(f \\circ g)(x) = f(g(x)) = f(2x) = (2x)^2 - 1 = 4x^2 - 1$."
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:
`,H2=`---
options:
  - "$2x^2 - 2$"
  - "$4x^2 - 1$"
  - "$2x - 1$"
  - "$x^2 - 2$"
correct: 0
hint: "$(g \\circ f)(x) = g(f(x)) = g(x^2 - 1) = 2(x^2-1) = 2x^2 - 2$. Złożenia nie są przemienne!"
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:
`,G2=`---
options:
  - "{(1,2),(1,3),(2,4)}"
  - "{(1,2),(2,3),(3,4)}"
  - "{(1,1),(2,2),(3,3)}"
  - "{(1,2),(2,1)}"
correct: 0
hint: "Funkcja przypisuje każdemu argumentowi dokładnie jedną wartość. Para (1,2) i (1,3) — jeden argument, dwie wartości."
---

Która z poniższych relacji NIE jest funkcją?
`,W2=`---
options:
  - "Każdemu argumentowi odpowiada dokładnie jedna wartość"
  - "Każdej wartości odpowiada dokładnie jeden argument"
  - "Funkcja musi być rosnąca"
  - "Dziedzina musi być zbiorem liczb rzeczywistych"
correct: 0
hint: "Funkcja to przyporządkowanie: każdemu $x$ z dziedziny odpowiada dokładnie jedno $f(x)$."
---

Funkcja to takie przyporządkowanie, że:
`,U2=`---
options:
  - "$10$"
  - "$-10$"
  - "$7$"
  - "$5$"
correct: 0
hint: "Podstawiamy $x=3$: $f(3) = 2 \\cdot 3 + 4 = 6 + 4 = 10$."
---

Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:
`,V2=`---
options:
  - "rosnąca na całej dziedzinie"
  - "malejąca na całej dziedzinie"
  - "stała"
  - "rosnąca tylko dla x > 0"
correct: 0
hint: "Podstawa 2 > 1, więc funkcja wykładnicza jest rosnąca."
---

Funkcja f(x) = 2ˣ jest:
`,K2=`---
options:
  - "Rosnąca dla $a > 1$, malejąca dla $0 < a < 1$"
  - "Zawsze rosnąca"
  - "Zawsze malejąca"
  - "Rosnąca dla $a < 0$"
correct: 0
hint: "$f(x) = a^x$: jeśli $a > 1$, funkcja rośnie; jeśli $0 < a < 1$, maleje."
---

Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:
`,Q2=`---
options:
  - "$(0, 1)$"
  - "$(1, 0)$"
  - "$(0, 0)$"
  - "$(1, a)$"
correct: 0
hint: "Dla każdego $a \\neq 0$: $a^0 = 1$, więc wykres przecina oś $Oy$ w punkcie $(0, 1)$."
---

Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:
`,Y2=`---
options:
  - "$k > \\frac{3}{2}$"
  - "$k < \\frac{3}{2}$"
  - "$k > 1$"
  - "$k < 0$"
correct: 0
hint: "Funkcja liniowa jest malejąca gdy współczynnik kierunkowy $a < 0$, czyli $-2k + 3 < 0$."
---

Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:
`,X2=`---
options:
  - "Rosnąca"
  - "Malejąca"
  - "Stała"
  - "Parzysta"
correct: 0
hint: "Dla $f(x) = 2x - 1$ współczynnik kierunkowy $a = 2 > 0$, więc funkcja jest rosnąca."
---

Funkcja $f(x) = 2x - 1$ jest:
`,Z2=`---
options:
  - "$(0, -3)$ i $(3/2, 0)$"
  - "$(0, 3)$ i $(3/2, 0)$"
  - "$(0, -3)$ i $(-3/2, 0)$"
  - "$(3, 0)$ i $(0, 3/2)$"
correct: 0
hint: "Przecięcie z $Oy$: $x=0 \\Rightarrow f(0) = -3$. Z $Ox$: $2x-3=0 \\Rightarrow x = 3/2$."
---

Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:
`,J2=`---
options:
  - "(2, +∞)"
  - "[2, +∞)"
  - "(−∞, 2)"
  - "R"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: x − 2 > 0."
---

Dziedzina funkcji f(x) = log(x − 2) to:
`,ep=`---
options:
  - "$(1, 0)$"
  - "$(0, 1)$"
  - "$(0, 0)$"
  - "$(a, 1)$"
correct: 0
hint: "Dla każdej podstawy $a$: $\\log_a 1 = 0$, więc wykres przechodzi przez $(1, 0)$."
---

Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:
`,tp=`---
options:
  - "$(0, +\\infty)$"
  - "$(-\\infty, +\\infty)$"
  - "$(1, +\\infty)$"
  - "$[0, +\\infty)$"
correct: 0
hint: "Logarytm jest określony tylko dla argumentów dodatnich: $\\log_a x$ istnieje $\\Leftrightarrow x > 0$."
---

Dziedzina funkcji $f(x) = \\log_a x$ to:
`,np=`---
options:
  - "3"
  - "1"
  - "2"
  - "0"
correct: 0
hint: "W(x) = x(x−1)(x+1). Trzy miejsca zerowe: 0, 1, −1."
---

Wielomian W(x) = x³ − x ma ile miejsc zerowych?
`,rp=`---
options:
  - "Parzysta"
  - "Nieparzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Rosnąca"
correct: 0
hint: "$f(-x) = (-x)^4 + 2(-x)^2 = x^4 + 2x^2 = f(x)$, więc funkcja jest parzysta."
---

Funkcja $f(x) = x^4 + 2x^2$ jest:
`,ip=`---
options:
  - "Nieparzysta"
  - "Parzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Stała"
correct: 0
hint: "$f(-x) = (-x)^3 = -x^3 = -f(x)$, więc funkcja jest nieparzysta."
---

Funkcja $f(x) = x^3$ jest:
`,op=`---
options:
  - "(2, −1)"
  - "(−2, 1)"
  - "(2, 1)"
  - "(4, 3)"
correct: 0
hint: "p = −b/(2a) = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
---

Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:
`,ap=`---
options:
  - "$(1, -4)$"
  - "$(-1, -4)$"
  - "$(1, 4)$"
  - "$(2, 0)$"
correct: 0
hint: "Wierzchołek paraboli $f(x) = ax^2 + bx + c$: $p = -b/(2a) = 2/2 = 1$, $q = f(1) = 1 - 2 - 3 = -4$."
---

Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:
`,sp=`---
options:
  - "W górę (ramiona skierowane w górę)"
  - "W dół (ramiona skierowane w dół)"
  - "Jest pozioma"
  - "Nie jest parabolą"
correct: 0
hint: "Gdy $a > 0$, parabola ma ramiona skierowane w górę (minimum). Gdy $a < 0$ — w dół."
---

Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:
`,lp=`---
options:
  - "π"
  - "2π"
  - "π/2"
  - "4π"
correct: 0
hint: "Podstawowy okres sin to 2π. Przy sin(2x) dzielisz przez 2: T = π."
---

Okres funkcji f(x) = sin(2x) wynosi:
`,up=`---
options:
  - "$2\\pi$"
  - "$\\pi$"
  - "$\\frac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Funkcje $\\sin$ i $\\cos$ mają okres $2\\pi$ (pełny obrót)."
---

Okres funkcji $f(x) = \\sin x$ wynosi:
`,cp=`---
options:
  - "$[-1, 1]$"
  - "$[0, 1]$"
  - "$\\mathbb{R}$"
  - "$[0, 2\\pi]$"
correct: 0
hint: "Zbiór wartości funkcji $\\sin x$ to $[-1, 1]$ — sinus jest zawsze między $-1$ a $1$."
---

Zbiór wartości funkcji $f(x) = \\sin x$ to:
`,dp=`---
options:
  - "3/4"
  - "9/12"
  - "4/5"
  - "7/9"
correct: 0
hint: "Dzielisz licznik i mianownik przez NWD(45,60) = 15."
---

Uproszczona postać ułamka 45/60 to:
`,fp=`---
options:
  - "$\\frac{7}{12}$"
  - "$\\frac{7}{6}$"
  - "$\\frac{2}{6}$"
  - "$\\frac{5}{12}$"
correct: 0
hint: "Wspólny mianownik to 12: $\\frac{1}{4} = \\frac{3}{12}$, $\\frac{1}{3} = \\frac{4}{12}$. Suma: $\\frac{7}{12}$."
---

Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$
`,mp=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{6}{8}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Mnożenie ułamków: licznik przez licznik, mianownik przez mianownik. $\\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$
`,hp=`---
options:
  - "9"
  - "6"
  - "18"
  - "3"
correct: 0
hint: "S = a₁/(1−q) = 6/(1−1/3) = 6/(2/3) = 9."
---

Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:
`,pp=`---
options:
  - "$\\frac{a_1}{1 - q}$"
  - "$\\frac{a_1}{1 + q}$"
  - "$a_1 \\cdot q$"
  - "$\\frac{a_1 q}{1-q}$"
correct: 0
hint: "Suma nieskończonego szeregu geometrycznego (dla $|q| < 1$): $S = \\frac{a_1}{1-q}$."
---

Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:
`,vp=`---
options:
  - "$2$"
  - "$1$"
  - "$4$"
  - "Szereg rozbieżny"
correct: 0
hint: "$a_1 = 1$, $q = \\frac{1}{2}$. $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$."
---

Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:
`,gp=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: 84 = 4·21, 56 = 8·7."
---

Ile wynosi NWD(84, 56)?
`,yp=`---
options:
  - "$-12$"
  - "$12$"
  - "$-4$"
  - "$4$"
correct: 0
hint: "Minus razy plus to minus. $(-3) \\cdot 4 = -12$."
---

Oblicz: $(-3) \\cdot 4 =$
`,xp=`---
options:
  - "$-5$"
  - "$5$"
  - "$-15$"
  - "$15$"
correct: 0
hint: "Odejmowanie to dodawanie liczby przeciwnej: $3 - 8 = 3 + (-8) = -5$."
---

Oblicz: $3 - 8 =$
`,wp=`---
options:
  - "$x^2 + C$"
  - "$2 + C$"
  - "$x + C$"
  - "$2x^2 + C$"
correct: 0
hint: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Dla $n = 1$: $\\int x \\, dx = \\frac{x^2}{2} + C$ — uwaga, to $\\int 2x \\, dx = x^2 + C$."
---

$\\displaystyle \\int 2x \\, dx =$
`,bp=`---
options:
  - "$\\frac{x^3}{3} + C$"
  - "$2x + C$"
  - "$x^3 + C$"
  - "$\\frac{x^2}{2} + C$"
correct: 0
hint: "$\\int x^2\\,dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$."
---

Oblicz całkę: $\\displaystyle\\int x^2\\,dx$
`,$p=`---
options:
  - "$\\frac{9}{2}$"
  - "$9$"
  - "$3$"
  - "$\\frac{3}{2}$"
correct: 0
hint: "$\\int_0^3 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{9}{2} - 0 = \\frac{9}{2}$."
---

Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$
`,_p=`---
options:
  - "$3$"
  - "$1$"
  - "$\\infty$"
  - "$0$"
correct: 0
hint: "Dzielimy licznik i mianownik przez $x^2$. Wyrazy $\\frac{1}{x^2}$ i $\\frac{5}{x^2}$ dążą do $0$."
---

Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:
`,kp=`---
options:
  - "$1$"
  - "$0$"
  - "$\\infty$"
  - "$-1$"
correct: 0
hint: "$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ — to ważna granica (granica Eulera)."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$
`,zp=`---
options:
  - "$5$"
  - "$0$"
  - "$\\infty$"
  - "$\\frac{5}{3}$"
correct: 0
hint: "Podziel przez $x^2$: $\\frac{5x^2-1}{x^2+3} = \\frac{5 - 1/x^2}{1 + 3/x^2} \\to \\frac{5}{1} = 5$."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$
`,Sp=`---
options:
  - "$x = 5$"
  - "$x = 2$"
  - "$x = -2$"
  - "$x = 7$"
correct: 0
hint: "$2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."
---

Rozwiązaniem równania $2x - 3 = 7$ jest:
`,Tp=`---
options:
  - "$x = 4$"
  - "$x = -4$"
  - "$x = 2$"
  - "$x = 8$"
correct: 0
hint: "$3x = 12$, więc $x = 4$."
---

Rozwiąż równanie: $3x - 2 = 10$
`,Mp=`---
options:
  - "$x = -3$"
  - "$x = 3$"
  - "$x = 1$"
  - "$x = -1$"
correct: 0
hint: "$2x + 8 = 2$, więc $2x = -6$, $x = -3$."
---

Rozwiąż równanie: $2(x + 4) = 2$
`,qp=`---
options:
  - "(2/3, +∞)"
  - "(−∞, 2/3)"
  - "(−2/3, +∞)"
  - "(−∞, −2/3)"
correct: 0
hint: "Mnożysz obie strony przez 6, potem przenosisz x na lewą stronę."
---

Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:
`,jp=`---
options:
  - "$x > 3$"
  - "$x < 3$"
  - "$x > -3$"
  - "$x \\geq 3$"
correct: 0
hint: "Dodaj 1 do obu stron: $2x > 6$, dziel przez 2: $x > 3$."
---

Rozwiąż nierówność: $2x - 1 > 5$
`,Ap=`---
options:
  - "$x \\geq -2$"
  - "$x \\leq -2$"
  - "$x \\geq 2$"
  - "$x \\leq 2$"
correct: 0
hint: "Przy dzieleniu przez liczbę ujemną odwracamy znak: $-3x \\leq 6 \\Rightarrow x \\geq -2$."
---

Rozwiąż nierówność: $-3x \\leq 6$
`,Cp=`---
options:
  - "x=3, y=2"
  - "x=2, y=3"
  - "x=4, y=1"
  - "x=1, y=4"
correct: 0
hint: "Dodajesz równania: 2x = 6, x = 3."
---

Układ { x+y=5, x−y=1 } ma rozwiązanie:
`,Pp=`---
options:
  - "$x = 1,\\ y = 2$"
  - "$x = 2,\\ y = 1$"
  - "$x = -1,\\ y = 2$"
  - "$x = 1,\\ y = -2$"
correct: 0
hint: "Z drugiego równania $y = 2x$. Podstaw do pierwszego: $x + 2x = 3$, $3x = 3$, $x = 1$, $y = 2$."
---

Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$
`,Ep=`---
options:
  - "$x = 3,\\ y = -1$"
  - "$x = 1,\\ y = 3$"
  - "$x = -3,\\ y = 1$"
  - "$x = 2,\\ y = 0$"
correct: 0
hint: "Odejmij równania: $(2x + y) - (x + y) = 5 - 2$, więc $x = 3$. Potem $y = 2 - 3 = -1$."
---

Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$
`,Rp=`---
options:
  - "x = 8"
  - "x = 6"
  - "x = 9"
  - "x = 4"
correct: 0
hint: "log₂(x) = 3 ⟺ x = 2³ = 8."
---

Rozwiązaniem równania log₂(x) = 3 jest:
`,Dp=`---
options:
  - "$x = 9$"
  - "$x = 3$"
  - "$x = 27$"
  - "$x = 81$"
correct: 0
hint: "$\\log_3 x = 2 \\Leftrightarrow x = 3^2 = 9$."
---

Rozwiąż równanie: $\\log_3 x = 2$
`,Np=`---
options:
  - "$x = 4$"
  - "$x = 2$"
  - "$x = 8$"
  - "$x = 16$"
correct: 0
hint: "$2^x = 16 = 2^4$, więc $x = 4$."
---

Rozwiąż równanie: $2^x = 16$
`,Bp=`---
options:
  - "$2$"
  - "$3$"
  - "$4$"
  - "$9$"
correct: 2
hint: "$(\\sqrt{3})^x = 9$, czyli $3^{x/2} = 3^2$, więc $\\frac{x}{2} = 2$ i $x = 4$."
---

Wartość $\\log_{\\sqrt{3}} 9$ jest równa:
`,Ip=`---
options:
  - "$3$"
  - "$8$"
  - "$\\frac{1}{3}$"
  - "$27$"
correct: 0
hint: "$\\log_2 8 = x \\Leftrightarrow 2^x = 8 = 2^3$, więc $x = 3$."
---

Oblicz: $\\log_2 8 =$
`,Lp=`---
options:
  - "$\\log_a x + \\log_a y$"
  - "$\\log_a x \\cdot \\log_a y$"
  - "$\\log_a (x + y)$"
  - "$\\log_a x - \\log_a y$"
correct: 0
hint: "Własność logarytmu: $\\log_a(xy) = \\log_a x + \\log_a y$."
---

Które wyrażenie jest równe $\\log_a(xy)$?
`,Fp=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja ∀x: P(x) to ∃x: ¬P(x)."
---

Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:
`,Op=`---
options:
  - "Fałsz"
  - "Prawda"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Koniunkcja $p \\wedge q$ jest prawdziwa tylko gdy obie zdania są prawdziwe. Jeśli $q$ jest fałszywe, wynik to fałsz."
---

Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:
`,Hp=`---
options:
  - "Prawda"
  - "Fałsz"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Alternatywa $p \\vee q$ jest fałszywa tylko gdy oba zdania są fałszywe. Jeśli $p$ jest prawdziwe, wynik to prawda."
---

Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:
`,Gp=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "x + y = 10. Pole P = x·y maksymalne dla x=y=5 (wierzchołek paraboli)."
---

Prostokąt o obwodzie 20 ma największe pole gdy:
`,Wp=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 0$"
  - "$x = 6$"
correct: 0
hint: "Minimum paraboli $f(x) = (x-3)^2 + 2$ jest w wierzchołku $x = 3$."
---

Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:
`,Up=`---
options:
  - "$25$"
  - "$20$"
  - "$30$"
  - "$50$"
correct: 0
hint: "Suma $x + y = 10$, więc $y = 10-x$. Iloczyn $P = x(10-x) = 10x - x^2$. Maksimum w $x=5$: $P = 25$."
---

Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:
`,Vp=`---
options:
  - "$k \\leq 0 \\lor k \\geq 1$"
  - "$0 < k < 1$"
  - "$k < 0 \\lor k > 1$"
  - "$k = 0 \\lor k = 1$"
correct: 0
hint: "$\\Delta = (2k)^2 - 4k = 4k^2 - 4k \\geq 0$, czyli $k(k-1) \\geq 0$, co zachodzi dla $k \\leq 0$ lub $k \\geq 1$."
---

Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:
`,Kp=`---
options:
  - "$k = 0$ lub $k = 4$"
  - "$k = 2$"
  - "$k \\in \\mathbb{R}$"
  - "Brak rozwiązań"
correct: 0
hint: "$\\Delta = 0$: $4k^2 - 4k \\cdot 4 = 0 \\Rightarrow 4k(k-4) = 0 \\Rightarrow k=0$ lub $k=4$."
---

Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:
`,Qp=`---
options:
  - "$m < -2$ lub $m > 2$"
  - "$-2 < m < 2$"
  - "$m = \\pm 2$"
  - "$m \\in \\mathbb{R}$"
correct: 0
hint: "$\\Delta > 0$: $4m^2 - 4 \\cdot 1 \\cdot 4 > 0 \\Rightarrow m^2 > 4 \\Rightarrow |m| > 2$."
---

Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:
`,Yp=`---
options:
  - "24"
  - "12"
  - "16"
  - "10"
correct: 0
hint: "P₄ = 4! = 24."
---

Liczba permutacji zbioru {A, B, C, D} wynosi:
`,Xp=`---
options:
  - "$24$"
  - "$12$"
  - "$6$"
  - "$120$"
correct: 0
hint: "$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$."
---

Na ile sposobów można ustawić 4 osoby w rzędzie?
`,Zp=`---
options:
  - "$60$"
  - "$120$"
  - "$20$"
  - "$30$"
correct: 0
hint: "$P_5 / n_A! = 5! / 2! = 120 / 2 = 60$. Słowo ABCDA ma 5 liter, A powtarza się 2 razy."
---

Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?
`,Jp=`---
options:
  - "90°"
  - "45°"
  - "60°"
  - "180°"
correct: 0
hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
---

Kąt wpisany w okrąg oparty na średnicy mierzy:
`,e3=`---
options:
  - "$180°$"
  - "$360°$"
  - "$90°$"
  - "$270°$"
correct: 0
hint: "Suma kątów wewnętrznych trójkąta zawsze równa się $180°$."
---

Suma kątów wewnętrznych trójkąta wynosi:
`,t3=`---
options:
  - "$P = \\frac{a \\cdot h}{2}$"
  - "$P = a \\cdot h$"
  - "$P = \\frac{a + h}{2}$"
  - "$P = a^2$"
correct: 0
hint: "Pole trójkąta = $\\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość}$."
---

Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:
`,n3=`---
options:
  - "W(2) = 0"
  - "W(2) = 4"
  - "W(2) = 2"
  - "W(0) = 0"
correct: 0
hint: "Podstaw x=2: 8 − 8 − 6 + 6 = 0."
---

Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:
`,r3=`---
options:
  - "Tak, bo $2^3 - 4 \\cdot 2 = 0$"
  - "Nie, bo $2^3 - 4 \\cdot 2 \\neq 0$"
  - "Tak, bo stopień wielomianu to $3$"
  - "Nie, bo wielomian ma zawsze 3 pierwiastki"
correct: 0
hint: "$p(2) = 8 - 8 = 0$, więc $x=2$ jest pierwiastkiem."
---

Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?
`,i3=`---
options:
  - "Co najwyżej $n$ pierwiastków"
  - "Dokładnie $n$ pierwiastków"
  - "Zawsze nieskończenie wiele"
  - "Co najmniej $1$ pierwiastek"
correct: 0
hint: "Wielomian stopnia $n$ ma co najwyżej $n$ pierwiastków rzeczywistych (może mieć mniej lub zero)."
---

Wielomian stopnia $n$ ma:
`,o3=`---
options:
  - "3x(x² + 2x + 3)"
  - "3(x³ + 2x + 3)"
  - "x(3x² + 6x)"
  - "3x²(x + 2)"
correct: 0
hint: "Wyłącz przed nawias 3x z każdego wyrazu."
---

Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:
`,a3=`---
options:
  - "$3$"
  - "$2$"
  - "$4$"
  - "$1$"
correct: 0
hint: "Stopień wielomianu to najwyższy wykładnik. W $2x^3 + x - 5$ najwyższy to $3$."
---

Stopień wielomianu $2x^3 + x - 5$ wynosi:
`,s3=`---
options:
  - "$x^2 + 3x + 2$"
  - "$x^2 - 3x + 2$"
  - "$x^2 + x + 2$"
  - "$x^2 + 3x - 2$"
correct: 0
hint: "$(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$."
---

Rozwiń: $(x + 1)(x + 2) =$
`,l3=`---
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^8$"
correct: 1
hint: "$\\frac{1}{16} = 2^{-4}$, więc $(\\frac{1}{16})^8 = 2^{-32}$. Ponadto $8 = 2^3$, więc $8^{16} = 2^{48}$. Razem: $2^{-32} \\cdot 2^{48} = 2^{16}$."
---

Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:
`,u3=`---
options:
  - "$8$"
  - "$6$"
  - "$9$"
  - "$4$"
correct: 0
hint: "$2^3 = 2 \\cdot 2 \\cdot 2 = 8$."
---

Oblicz: $2^3 =$
`,c3=`---
options:
  - "$a^5$"
  - "$a^6$"
  - "$a^2$"
  - "$2a^3$"
correct: 0
hint: "Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki: $a^2 \\cdot a^3 = a^{2+3} = a^5$."
---

Uprość: $a^2 \\cdot a^3 =$
`,d3=`---
options:
  - "1/2"
  - "1/3"
  - "2/3"
  - "1/6"
correct: 0
hint: "Parzyste: {2,4,6}. P = 3/6 = 1/2."
---

Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,f3=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Prawa liczb parzystych na kostce: 2, 4, 6 — to 3 z 6 możliwych wyników. $P = \\frac{3}{6} = \\frac{1}{2}$."
---

Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,m3=`---
options:
  - "$\\frac{1}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
  - "$1$"
correct: 0
hint: "Zdarzenia niezależne: $P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$."
---

Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:
`,h3=`---
options:
  - "2k+1 i 2m+1 są nieparzyste, ich suma = 2(k+m+1) — parzysta"
  - "5+7=12, więc działa"
  - "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta"
  - "Wystarczy sprawdzić kilka przykładów"
correct: 0
hint: "Dowód ogólny: reprezentujesz liczby jako 2k+1 i 2m+1."
---

Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?
`,p3=`---
options:
  - "Przyjmujemy negację tezy i dochodzimy do sprzeczności"
  - "Sprawdzamy wszystkie przypadki"
  - "Używamy tylko przykładów"
  - "Dowodzimy przez analogię"
correct: 0
hint: "Dowód nie wprost (reductio ad absurdum): zakładamy, że teza jest fałszywa, i wyprowadzamy sprzeczność."
---

Dowód nie wprost polega na tym, że:
`,v3=`---
options:
  - "Krok bazowy + krok indukcyjny (zakładamy prawdziwość dla $n$, dowodzimy dla $n+1$)"
  - "Sprawdzenie kilku pierwszych przypadków"
  - "Dowód dla $n=1$ wystarczy"
  - "Zakładamy prawdziwość dla $n+1$ i dowodzimy dla $n$"
correct: 0
hint: "Indukcja matematyczna: 1) Krok bazowy — sprawdzamy dla $n=1$. 2) Krok indukcyjny — zakładamy dla $n$, dowodzimy dla $n+1$."
---

Dowód przez indukcję matematyczną składa się z:
`,g3=`---
options:
  - "$10$"
  - "$12$"
  - "$14$"
  - "$\\sqrt{48}$"
correct: 0
hint: "$c^2 = 6^2 + 8^2 = 36 + 64 = 100$, więc $c = 10$."
---

Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:
`,y3=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$\\sqrt{58}$"
correct: 0
hint: "$c^2 = 3^2 + 4^2 = 9 + 16 = 25$, więc $c = 5$."
---

Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:
`,x3=`---
options:
  - "$\\sqrt{11}$"
  - "$\\sqrt{13}$"
  - "$11$"
  - "$3$"
correct: 0
hint: "$a^2 = c^2 - b^2 = 36 - 25 = 11$, więc $a = \\sqrt{11}$."
---

Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:
`,w3=`---
options:
  - "$x = 2$ i $x = 3$"
  - "$x = -2$ i $x = -3$"
  - "$x = 1$ i $x = 6$"
  - "$x = 2$ i $x = -3$"
correct: 0
hint: "$\\Delta = 25 - 24 = 1$. Wzory Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = 6$. Lub $x = \\frac{5 \\pm 1}{2}$."
---

Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:
`,b3=`---
options:
  - "$x = 1$ lub $x = -3$"
  - "$x = -1$ lub $x = 3$"
  - "$x = 1$ lub $x = 3$"
  - "Brak rozwiązań rzeczywistych"
correct: 0
hint: "$\\Delta = 4 + 12 = 16$, $\\sqrt{\\Delta} = 4$. $x = \\frac{-2 \\pm 4}{2}$: $x_1 = 1$, $x_2 = -3$."
---

Rozwiąż: $x^2 + 2x - 3 = 0$
`,$3=`---
options:
  - "Brak rozwiązań rzeczywistych"
  - "$x = 0$"
  - "$x = \\pm 2$"
  - "$x = 4$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. Ujemna delta oznacza brak rozwiązań w $\\mathbb{R}$."
---

Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?
`,_3=`---
options:
  - "(−2, 3)"
  - "(−∞,−2)∪(3,+∞)"
  - "[−2, 3]"
  - "(−3, 2)"
correct: 0
hint: "Pierwiastki to −2 i 3. Parabola jest nad osią poza przedziałem (−2,3)."
---

Rozwiązaniem nierówności x² − x − 6 < 0 jest:
`,k3=`---
options:
  - "$x \\in (-2, 3)$"
  - "$x \\in (-\\infty, -2) \\cup (3, +\\infty)$"
  - "$x \\in [-2, 3]$"
  - "$x \\in \\mathbb{R}$"
correct: 0
hint: "Pierwiastki to $x = -2$ i $x = 3$. Ramiona paraboli skierowane w górę ($a=1>0$), więc parabola jest poniżej zera między pierwiastkami."
---

Rozwiąż nierówność: $x^2 - x - 6 < 0$
`,z3=`---
options:
  - "$x \\in (-\\infty, -1] \\cup [4, +\\infty)$"
  - "$x \\in (-1, 4)$"
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
correct: 0
hint: "Pierwiastki: $\\Delta = 25$, $x_1 = -1$, $x_2 = 4$. Parabola ($a=1>0$) jest powyżej zera poza pierwiastkami."
---

Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$
`,S3=`---
options:
  - "x + 2"
  - "x − 2"
  - "x² + 2"
  - "2x"
correct: 0
hint: "x²−4 = (x−2)(x+2). Skracasz (x−2)."
---

Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:
`,T3=`---
options:
  - "$\\frac{x+1}{x-1}$"
  - "$\\frac{x-1}{x+1}$"
  - "$\\frac{x^2-1}{(x-1)^2}$"
  - "$1$"
correct: 0
hint: "Licznik $x^2-1 = (x-1)(x+1)$. Po skróceniu przez $(x-1)$ zostaje $\\frac{x+1}{x-1} \\cdot \\frac{1}{1}$... Sprawdź: $\\frac{(x-1)(x+1)}{(x-1)^2} = \\frac{x+1}{x-1}$."
---

Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$
`,M3=`---
options:
  - "$\\frac{5x}{6}$"
  - "$\\frac{5}{6x}$"
  - "$\\frac{5x^2}{6}$"
  - "$\\frac{x}{2}$"
correct: 0
hint: "Mnożenie ułamków: $\\frac{x}{2} \\cdot \\frac{5}{3} = \\frac{5x}{6}$."
---

Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$
`,q3=`---
options:
  - "3"
  - "1"
  - "∞"
  - "0"
correct: 0
hint: "Dzielisz licznik i mianownik przez n². Wyrazy 1/n² i 2/n² dążą do 0."
---

Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:
`,j3=`---
options:
  - "$0$"
  - "$1$"
  - "$\\infty$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$, bo mianownik rośnie bez ograniczeń."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$
`,A3=`---
options:
  - "$3$"
  - "$\\infty$"
  - "$0$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Podziel licznik i mianownik przez $n$: $\\frac{3n+1}{n} = 3 + \\frac{1}{n} \\to 3$."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$
`,C3=`---
options:
  - "$14$"
  - "$13$"
  - "$15$"
  - "$12$"
correct: 0
hint: "$a_5 = 3 \\cdot 5 - 1 = 15 - 1 = 14$."
---

Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:
`,P3=`---
options:
  - "$a_n = 2n - 1$"
  - "$a_n = 2n + 1$"
  - "$a_n = n + 2$"
  - "$a_n = 2n$"
correct: 0
hint: "Ciąg: $1, 3, 5, 7, \\ldots$ — liczby nieparzyste. Wzór ogólny: $a_n = 2n - 1$."
---

Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:
`,E3=`---
options:
  - "$a_5 = 17$"
  - "$a_5 = 15$"
  - "$a_5 = 13$"
  - "$a_5 = 20$"
correct: 0
hint: "$a_1 = 1$, $r = 4$, $a_5 = a_1 + 4r = 1 + 16 = 17$."
---

Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:
`,R3=`---
options:
  - "{3,4}"
  - "{1,2,5,6}"
  - "{1,2,3,4,5,6}"
  - "{3}"
correct: 0
hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
---

A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =
`,D3=`---
options:
  - "$\\{2, 4\\}$"
  - "$\\{1, 2, 3, 4, 5, 6\\}$"
  - "$\\{1, 3, 5, 6\\}$"
  - "$\\emptyset$"
correct: 0
hint: "Część wspólna $A \\cap B$ zawiera elementy należące do obu zbiorów jednocześnie."
---

Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:
`,N3=`---
options:
  - "$\\{1, 2, 3, 4, 6\\}$"
  - "$\\{2, 4\\}$"
  - "$\\{1, 3\\}$"
  - "$\\{6\\}$"
correct: 0
hint: "Suma $A \\cup B$ zawiera wszystkie elementy z obu zbiorów (bez powtórzeń)."
---

Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:
`,B3=`---
options:
  - "39"
  - "25"
  - "49"
  - "74"
correct: 0
hint: "Tw. cosinusów: c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39."
---

W trójkącie a=5, b=7, C=60°. Wartość c² =
`,I3=`---
options:
  - "$c^2 = a^2 + b^2 - 2ab\\cos\\gamma$"
  - "$c^2 = a^2 + b^2 + 2ab\\cos\\gamma$"
  - "$c = a + b - 2\\cos\\gamma$"
  - "$\\cos\\gamma = a^2 + b^2 - c^2$"
correct: 0
hint: "Twierdzenie cosinusów: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$, gdzie $\\gamma$ to kąt między bokami $a$ i $b$."
---

Twierdzenie cosinusów brzmi:
`,L3=`---
options:
  - "$\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma}$"
  - "$a \\cdot \\sin\\alpha = b \\cdot \\sin\\beta$"
  - "$\\frac{\\sin\\alpha}{a} = \\frac{\\sin\\beta}{b} + \\frac{\\sin\\gamma}{c}$"
  - "$a = b \\cdot \\sin\\alpha$"
correct: 0
hint: "Twierdzenie sinusów: iloraz każdego boku przez sinus przeciwległego kąta jest stały (= $2R$)."
---

Twierdzenie sinusów głosi, że w każdym trójkącie:
`,F3=`---
options:
  - "12π"
  - "36π"
  - "9π"
  - "48π"
correct: 0
hint: "V = (1/3)πr²h = (1/3)·π·9·4 = 12π."
---

Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:
`,O3=`---
options:
  - "$V = a^3$"
  - "$V = 6a^2$"
  - "$V = 3a^3$"
  - "$V = a^2 h$"
correct: 0
hint: "Objętość sześcianu o krawędzi $a$: $V = a \\cdot a \\cdot a = a^3$."
---

Wzór na objętość sześcianu o krawędzi $a$:
`,H3=`---
options:
  - "$V = \\frac{4}{3}\\pi r^3$"
  - "$V = \\pi r^2 h$"
  - "$V = 4\\pi r^2$"
  - "$V = \\frac{1}{3}\\pi r^2 h$"
correct: 0
hint: "Objętość kuli o promieniu $r$: $V = \\frac{4}{3}\\pi r^3$."
---

Wzór na objętość kuli o promieniu $r$:
`,G3=`---
options:
  - "6"
  - "5"
  - "7"
  - "8"
correct: 0
hint: "Suma = 30, liczba wyrazów = 5. 30/5 = 6."
---

Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:
`,W3=`---
options:
  - "Najczęściej powtarzająca się wartość"
  - "Środkowa wartość po posortowaniu"
  - "Suma podzielona przez liczbę elementów"
  - "Różnica między max i min"
correct: 0
hint: "Dominanta (moda) to wartość, która pojawia się najczęściej w danych."
---

Dominanta (moda) zbioru danych to:
`,U3=`---
options:
  - "$8$"
  - "$4$"
  - "$2$"
  - "$16$"
correct: 0
hint: "Rozstęp = max $-$ min $= 12 - 4 = 8$."
---

Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:
`,V3=`---
options:
  - "8"
  - "6"
  - "12"
  - "4"
correct: 0
hint: "Tw. Talesa: AD/DB = AE/EC, więc EC = 4·6/3 = 8."
---

Proste równoległe odcinają na siecznych odcinki proporcjonalne.
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=
`,K3=`---
options:
  - "$6$"
  - "$4$"
  - "$8$"
  - "$3$"
correct: 0
hint: "Twierdzenie Talesa: $\\frac{AB}{BC} = \\frac{DE}{EF}$. Mamy $\\frac{4}{8} = \\frac{3}{EF}$, więc $EF = 6$."
---

Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$
`,Q3=`---
options:
  - "Odcinki są proporcjonalne"
  - "Kąty są równe"
  - "Trójkąty są przystające"
  - "Pole trójkąta jest stałe"
correct: 0
hint: "Twierdzenie Talesa stwierdza, że prosta równoległa do boku trójkąta wyznacza proporcjonalne odcinki na pozostałych bokach."
---

Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?
`,Y3=`---
options:
  - "$\\frac{4}{5}$"
  - "$\\frac{3}{4}$"
  - "$\\frac{5}{3}$"
  - "$\\frac{1}{5}$"
correct: 0
hint: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$, więc $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, a $\\cos\\alpha = \\frac{4}{5}$ (dla kąta ostrego)."
---

W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:
`,X3=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "Trójkąt prostokątny 30-60-90: $\\sin 30° = \\frac{1}{2}$."
---

Wartość $\\sin 30°$ wynosi:
`,Z3=`---
options:
  - "$1$"
  - "$0$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
correct: 0
hint: "Tożsamość Pitagorejska: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ dla każdego kąta $\\alpha$."
---

Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:
`,J3=`---
options:
  - "x = 30° i x = 150°"
  - "x = 30° tylko"
  - "x = 60° i x = 120°"
  - "x = 45°"
correct: 0
hint: "sin jest symetryczny względem 90°. sin(30°) = sin(150°) = 1/2."
---

Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:
`,e5=`---
options:
  - "$x = \\frac{\\pi}{6} + 2k\\pi$ lub $x = \\frac{5\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$ lub $x = -\\frac{\\pi}{6} + k\\pi$"
correct: 0
hint: "$\\sin x = \\frac{1}{2}$ dla $x = \\frac{\\pi}{6}$ (30°) i $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (150°), plus okresy $2\\pi$."
---

Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$
`,t5=`---
options:
  - "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = k\\pi$, $k \\in \\mathbb{Z}$"
correct: 0
hint: "$\\tan x = 1$ dla $x = \\frac{\\pi}{4}$. Tangens ma okres $\\pi$, więc ogólne rozwiązanie: $x = \\frac{\\pi}{4} + k\\pi$."
---

Rozwiąż równanie: $\\tan x = 1$
`,n5=`---
options:
  - "2sin(α)cos(α)"
  - "sin²(α)−cos²(α)"
  - "cos²(α)−sin²(α)"
  - "2cos²(α)−1"
correct: 0
hint: "Wzór na sinus kąta podwojonego: sin(2α) = 2sin(α)cos(α)."
---

sin(2α) jest równe:
`,r5=`---
options:
  - "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$"
  - "$\\sin 2\\alpha = \\sin^2\\alpha + \\cos^2\\alpha$"
  - "$\\sin 2\\alpha = 2\\sin^2\\alpha$"
  - "$\\sin 2\\alpha = \\sin\\alpha \\cdot \\cos\\alpha$"
correct: 0
hint: "Wzór na sinus podwojonego kąta: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$."
---

Wzór na $\\sin 2\\alpha$:
`,i5=`---
options:
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha - \\cos\\beta$"
correct: 0
hint: "Wzór redukcyjny: $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$."
---

Wzór na $\\cos(\\alpha - \\beta)$:
`,o5=`---
options:
  - "√3/2"
  - "1/2"
  - "−√3/2"
  - "√2/2"
correct: 0
hint: "120° = 180°−60°, sin(180°−α) = sin(α), sin(60°) = √3/2."
---

Wartość sin(120°) jest równa:
`,a5=`---
options:
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "$\\cos 30° = \\frac{\\sqrt{3}}{2}$. Zapamiętaj wartości dla 30°, 45°, 60°."
---

Wartość $\\cos 30°$ wynosi:
`,s5=`---
options:
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$0$"
correct: 0
hint: "$\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$."
---

Wartość $\\sin 45°$ wynosi:
`,l5=`---
options:
  - "5"
  - "7"
  - "√7"
  - "12"
correct: 0
hint: "|v| = √(3²+4²) = √25 = 5."
---

Długość wektora v = [3, 4] wynosi:
`,u5=`---
options:
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$"
  - "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|$"
  - "$\\vec{a} \\cdot \\vec{b} = (a_1+b_1, a_2+b_2)$"
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_2 - a_2 b_1$"
correct: 0
hint: "Iloczyn skalarny: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$. Wynikiem jest liczba, nie wektor."
---

Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:
`,c5=`---
options:
  - "$\\sqrt{13}$"
  - "$5$"
  - "$13$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|\\vec{v}| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$."
---

Długość wektora $\\vec{v} = (2, 3)$ wynosi:
`,d5=`---
options:
  - "12"
  - "7"
  - "−12"
  - "−7"
correct: 0
hint: "Wzór Viète'a: x₁·x₂ = c/a = 12/1 = 12."
---

Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =
`,f5=`---
options:
  - "$x_1 + x_2 = 5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = 5$, $x_1 x_2 = -6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = -6$"
correct: 0
hint: "Wzory Viète'a dla $ax^2+bx+c=0$: $x_1+x_2 = -b/a$, $x_1 x_2 = c/a$. Tu: $-(-5)/1=5$, $6/1=6$."
---

Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:
`,m5=`---
options:
  - "$13$"
  - "$25$"
  - "$12$"
  - "$5$"
correct: 0
hint: "Wzory Viète'a: $x_1+x_2=5$, $x_1 x_2=6$. Suma kwadratów: $(x_1+x_2)^2 - 2x_1x_2 = 25 - 12 = 13$."
---

Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:
`;function Md(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],a=n[2].trim(),l={},u=r.split(/\r?\n/);let f=0;for(;f<u.length;){const v=u[f];if(v.startsWith("  ")){f++;continue}const p=v.match(/^(\w+):\s*(.*)/);if(!p){f++;continue}const x=p[1];let $=p[2].trim();if($===""||$===null){const b=u[f+1]??"";if(b.startsWith("  - ")){const k=[];for(f++;f<u.length&&u[f].startsWith("  - ");){let z=u[f].replace(/^  - /,"").trim();z=z.replace(/^["']|["']$/g,""),k.push(z),f++}l[x]=k.length>0?k:null}else if(b.match(/^  \w+:/)){const k={};for(f++;f<u.length&&u[f].match(/^  \w+:/);){const z=u[f].match(/^  (\w+):\s*(.*)/);if(z){const P=z[1];let R=z[2].trim().replace(/^["']|["']$/g,"");k[P]=!isNaN(R)&&R!==""?Number(R):R}f++}l[x]=k}else l[x]=null,f++}else $=$.replace(/^["']|["']$/g,""),!isNaN($)&&$!==""?l[x]=Number($):$==="true"?l[x]=!0:$==="false"?l[x]=!1:l[x]=$,f++}return{meta:l,body:a}}function qd(o,n){return Object.entries(o).map(([r,a])=>{var f;const l=(f=r.match(n))==null?void 0:f[1],{meta:u}=Md(a);return{id:l,label:u.label??l,labelPl:u.labelPl??u.label??l,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0}})}function jd(o,n){var a;const r={};for(const[l,u]of Object.entries(o)){const f=(a=l.match(n))==null?void 0:a[1];if(!f)continue;const{meta:v,body:p}=Md(u);r[f]||(r[f]=[]),r[f].push({q:p,options:v.options??[],correct:v.correct??0,hint:v.hint??"",tests:v.tests&&typeof v.tests=="object"&&Object.keys(v.tests).length>0?v.tests:{[f]:1}})}return r}function h5(o,n,r=[]){const a=o[n];if(!a||a.length===0)return null;const l=a.map((f,v)=>({q:f,i:v})).filter(({i:f})=>!r.includes(f));if(l.length===0)return null;const u=l[Math.floor(Math.random()*l.length)];return{...u.q,index:u.i}}const p5=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],v5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},g5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},y5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Ad={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},x5=Object.assign({"./nodes/abs_value/node.md":Dm,"./nodes/analytic_geom/node.md":Nm,"./nodes/area_perimeter/node.md":Bm,"./nodes/arith_geom/node.md":Im,"./nodes/bernoulli/node.md":Lm,"./nodes/binom_theorem/node.md":Fm,"./nodes/circle_eq/node.md":Om,"./nodes/combinations/node.md":Hm,"./nodes/complex/node.md":Gm,"./nodes/cond_prob/node.md":Wm,"./nodes/conic_sections/node.md":Um,"./nodes/counting/node.md":Vm,"./nodes/data_basics/node.md":Km,"./nodes/deriv_apps/node.md":Qm,"./nodes/derivative/node.md":Ym,"./nodes/distributions/node.md":Xm,"./nodes/factoring/node.md":Zm,"./nodes/fn_compositions/node.md":Jm,"./nodes/fn_concept/node.md":eh,"./nodes/fn_exp/node.md":th,"./nodes/fn_linear/node.md":nh,"./nodes/fn_log/node.md":rh,"./nodes/fn_poly/node.md":ih,"./nodes/fn_quadratic/node.md":oh,"./nodes/fn_trig/node.md":ah,"./nodes/fractions/node.md":sh,"./nodes/geo_series/node.md":lh,"./nodes/integers/node.md":uh,"./nodes/integral/node.md":ch,"./nodes/limits/node.md":dh,"./nodes/linear_eq/node.md":fh,"./nodes/linear_ineq/node.md":mh,"./nodes/linear_sys/node.md":hh,"./nodes/log_eq/node.md":ph,"./nodes/log_exp/node.md":vh,"./nodes/logic_basics/node.md":gh,"./nodes/optimization_lp/node.md":yh,"./nodes/param_eq/node.md":xh,"./nodes/permutations/node.md":wh,"./nodes/planimetria_lp/node.md":bh,"./nodes/poly_roots/node.md":$h,"./nodes/polynomials/node.md":_h,"./nodes/powers/node.md":kh,"./nodes/probability/node.md":zh,"./nodes/proof/node.md":Sh,"./nodes/pythagoras/node.md":Th,"./nodes/quadratic_eq/node.md":Mh,"./nodes/quadratic_ineq/node.md":qh,"./nodes/rational_expr/node.md":jh,"./nodes/seq_limits/node.md":Ah,"./nodes/sequences/node.md":Ch,"./nodes/sets/node.md":Ph,"./nodes/sin_cos_law/node.md":Eh,"./nodes/solid_geom/node.md":Rh,"./nodes/stat_lp/node.md":Dh,"./nodes/thales/node.md":Nh,"./nodes/trig_basic/node.md":Bh,"./nodes/trig_eq/node.md":Ih,"./nodes/trig_formulas/node.md":Lh,"./nodes/trig_lp/node.md":Fh,"./nodes/vectors/node.md":Oh,"./nodes/vieta/node.md":Hh}),w5=qd(x5,/\.\/nodes\/([^/]+)\/node\.md$/),b5=Object.assign({"./nodes/abs_value/questions/01.md":Gh,"./nodes/abs_value/questions/02.md":Wh,"./nodes/abs_value/questions/03.md":Uh,"./nodes/analytic_geom/questions/01.md":Vh,"./nodes/analytic_geom/questions/02.md":Kh,"./nodes/analytic_geom/questions/03.md":Qh,"./nodes/area_perimeter/questions/01.md":Yh,"./nodes/area_perimeter/questions/02.md":Xh,"./nodes/area_perimeter/questions/03.md":Zh,"./nodes/arith_geom/questions/01.md":Jh,"./nodes/arith_geom/questions/02.md":e2,"./nodes/arith_geom/questions/03.md":t2,"./nodes/bernoulli/questions/01.md":n2,"./nodes/bernoulli/questions/02.md":r2,"./nodes/bernoulli/questions/03.md":i2,"./nodes/binom_theorem/questions/01.md":o2,"./nodes/binom_theorem/questions/02.md":a2,"./nodes/binom_theorem/questions/03.md":s2,"./nodes/circle_eq/questions/01.md":l2,"./nodes/circle_eq/questions/02.md":u2,"./nodes/circle_eq/questions/03.md":c2,"./nodes/combinations/questions/01.md":d2,"./nodes/combinations/questions/02.md":f2,"./nodes/combinations/questions/03.md":m2,"./nodes/complex/questions/01.md":h2,"./nodes/complex/questions/02.md":p2,"./nodes/complex/questions/03.md":v2,"./nodes/cond_prob/questions/01.md":g2,"./nodes/cond_prob/questions/02.md":y2,"./nodes/cond_prob/questions/03.md":x2,"./nodes/conic_sections/questions/01.md":w2,"./nodes/conic_sections/questions/02.md":b2,"./nodes/conic_sections/questions/03.md":$2,"./nodes/counting/questions/01.md":_2,"./nodes/counting/questions/02.md":k2,"./nodes/counting/questions/03.md":z2,"./nodes/data_basics/questions/01.md":S2,"./nodes/data_basics/questions/02.md":T2,"./nodes/data_basics/questions/03.md":M2,"./nodes/deriv_apps/questions/01.md":q2,"./nodes/deriv_apps/questions/02.md":j2,"./nodes/deriv_apps/questions/03.md":A2,"./nodes/derivative/questions/01.md":C2,"./nodes/derivative/questions/02.md":P2,"./nodes/derivative/questions/03.md":E2,"./nodes/distributions/questions/01.md":R2,"./nodes/distributions/questions/02.md":D2,"./nodes/distributions/questions/03.md":N2,"./nodes/factoring/questions/01.md":B2,"./nodes/factoring/questions/02.md":I2,"./nodes/factoring/questions/03.md":L2,"./nodes/fn_compositions/questions/01.md":F2,"./nodes/fn_compositions/questions/02.md":O2,"./nodes/fn_compositions/questions/03.md":H2,"./nodes/fn_concept/questions/01.md":G2,"./nodes/fn_concept/questions/02.md":W2,"./nodes/fn_concept/questions/03.md":U2,"./nodes/fn_exp/questions/01.md":V2,"./nodes/fn_exp/questions/02.md":K2,"./nodes/fn_exp/questions/03.md":Q2,"./nodes/fn_linear/questions/01.md":Y2,"./nodes/fn_linear/questions/02.md":X2,"./nodes/fn_linear/questions/03.md":Z2,"./nodes/fn_log/questions/01.md":J2,"./nodes/fn_log/questions/02.md":ep,"./nodes/fn_log/questions/03.md":tp,"./nodes/fn_poly/questions/01.md":np,"./nodes/fn_poly/questions/02.md":rp,"./nodes/fn_poly/questions/03.md":ip,"./nodes/fn_quadratic/questions/01.md":op,"./nodes/fn_quadratic/questions/02.md":ap,"./nodes/fn_quadratic/questions/03.md":sp,"./nodes/fn_trig/questions/01.md":lp,"./nodes/fn_trig/questions/02.md":up,"./nodes/fn_trig/questions/03.md":cp,"./nodes/fractions/questions/01.md":dp,"./nodes/fractions/questions/02.md":fp,"./nodes/fractions/questions/03.md":mp,"./nodes/geo_series/questions/01.md":hp,"./nodes/geo_series/questions/02.md":pp,"./nodes/geo_series/questions/03.md":vp,"./nodes/integers/questions/01.md":gp,"./nodes/integers/questions/02.md":yp,"./nodes/integers/questions/03.md":xp,"./nodes/integral/questions/01.md":wp,"./nodes/integral/questions/02.md":bp,"./nodes/integral/questions/03.md":$p,"./nodes/limits/questions/01.md":_p,"./nodes/limits/questions/02.md":kp,"./nodes/limits/questions/03.md":zp,"./nodes/linear_eq/questions/01.md":Sp,"./nodes/linear_eq/questions/02.md":Tp,"./nodes/linear_eq/questions/03.md":Mp,"./nodes/linear_ineq/questions/01.md":qp,"./nodes/linear_ineq/questions/02.md":jp,"./nodes/linear_ineq/questions/03.md":Ap,"./nodes/linear_sys/questions/01.md":Cp,"./nodes/linear_sys/questions/02.md":Pp,"./nodes/linear_sys/questions/03.md":Ep,"./nodes/log_eq/questions/01.md":Rp,"./nodes/log_eq/questions/02.md":Dp,"./nodes/log_eq/questions/03.md":Np,"./nodes/log_exp/questions/01.md":Bp,"./nodes/log_exp/questions/02.md":Ip,"./nodes/log_exp/questions/03.md":Lp,"./nodes/logic_basics/questions/01.md":Fp,"./nodes/logic_basics/questions/02.md":Op,"./nodes/logic_basics/questions/03.md":Hp,"./nodes/optimization_lp/questions/01.md":Gp,"./nodes/optimization_lp/questions/02.md":Wp,"./nodes/optimization_lp/questions/03.md":Up,"./nodes/param_eq/questions/01.md":Vp,"./nodes/param_eq/questions/02.md":Kp,"./nodes/param_eq/questions/03.md":Qp,"./nodes/permutations/questions/01.md":Yp,"./nodes/permutations/questions/02.md":Xp,"./nodes/permutations/questions/03.md":Zp,"./nodes/planimetria_lp/questions/01.md":Jp,"./nodes/planimetria_lp/questions/02.md":e3,"./nodes/planimetria_lp/questions/03.md":t3,"./nodes/poly_roots/questions/01.md":n3,"./nodes/poly_roots/questions/02.md":r3,"./nodes/poly_roots/questions/03.md":i3,"./nodes/polynomials/questions/01.md":o3,"./nodes/polynomials/questions/02.md":a3,"./nodes/polynomials/questions/03.md":s3,"./nodes/powers/questions/01.md":l3,"./nodes/powers/questions/02.md":u3,"./nodes/powers/questions/03.md":c3,"./nodes/probability/questions/01.md":d3,"./nodes/probability/questions/02.md":f3,"./nodes/probability/questions/03.md":m3,"./nodes/proof/questions/01.md":h3,"./nodes/proof/questions/02.md":p3,"./nodes/proof/questions/03.md":v3,"./nodes/pythagoras/questions/01.md":g3,"./nodes/pythagoras/questions/02.md":y3,"./nodes/pythagoras/questions/03.md":x3,"./nodes/quadratic_eq/questions/01.md":w3,"./nodes/quadratic_eq/questions/02.md":b3,"./nodes/quadratic_eq/questions/03.md":$3,"./nodes/quadratic_ineq/questions/01.md":_3,"./nodes/quadratic_ineq/questions/02.md":k3,"./nodes/quadratic_ineq/questions/03.md":z3,"./nodes/rational_expr/questions/01.md":S3,"./nodes/rational_expr/questions/02.md":T3,"./nodes/rational_expr/questions/03.md":M3,"./nodes/seq_limits/questions/01.md":q3,"./nodes/seq_limits/questions/02.md":j3,"./nodes/seq_limits/questions/03.md":A3,"./nodes/sequences/questions/01.md":C3,"./nodes/sequences/questions/02.md":P3,"./nodes/sequences/questions/03.md":E3,"./nodes/sets/questions/01.md":R3,"./nodes/sets/questions/02.md":D3,"./nodes/sets/questions/03.md":N3,"./nodes/sin_cos_law/questions/01.md":B3,"./nodes/sin_cos_law/questions/02.md":I3,"./nodes/sin_cos_law/questions/03.md":L3,"./nodes/solid_geom/questions/01.md":F3,"./nodes/solid_geom/questions/02.md":O3,"./nodes/solid_geom/questions/03.md":H3,"./nodes/stat_lp/questions/01.md":G3,"./nodes/stat_lp/questions/02.md":W3,"./nodes/stat_lp/questions/03.md":U3,"./nodes/thales/questions/01.md":V3,"./nodes/thales/questions/02.md":K3,"./nodes/thales/questions/03.md":Q3,"./nodes/trig_basic/questions/01.md":Y3,"./nodes/trig_basic/questions/02.md":X3,"./nodes/trig_basic/questions/03.md":Z3,"./nodes/trig_eq/questions/01.md":J3,"./nodes/trig_eq/questions/02.md":e5,"./nodes/trig_eq/questions/03.md":t5,"./nodes/trig_formulas/questions/01.md":n5,"./nodes/trig_formulas/questions/02.md":r5,"./nodes/trig_formulas/questions/03.md":i5,"./nodes/trig_lp/questions/01.md":o5,"./nodes/trig_lp/questions/02.md":a5,"./nodes/trig_lp/questions/03.md":s5,"./nodes/vectors/questions/01.md":l5,"./nodes/vectors/questions/02.md":u5,"./nodes/vectors/questions/03.md":c5,"./nodes/vieta/questions/01.md":d5,"./nodes/vieta/questions/02.md":f5,"./nodes/vieta/questions/03.md":m5}),$5=jd(b5,/\.\/nodes\/([^/]+)\/questions\//),_5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Ad,QUESTION_BANK:$5,RAW_EDGES:p5,RAW_NODES:w5,SCOPE_COLORS:g5,SCOPE_LABELS:y5,SECTIONS:v5},Symbol.toStringTag,{value:"Module"})),k5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,z5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,S5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,T5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,M5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,q5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,j5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,A5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,C5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,P5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,E5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,R5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,D5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,N5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,B5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,I5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,L5=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,F5=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,O5=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,H5=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,G5=`---
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
`,W5=`---
options:
  - "There is exactly one identity element"
  - "There can be two or more identity elements"
  - "An identity element need not be unique"
  - "Identity elements only exist in groups"
correct: 0
hint: Suppose e and e' are both identities. Then e = e·e' = e'. The argument forces uniqueness in any algebraic structure with an associative operation.
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
---
The left cosets of a subgroup $H$ in a group $G$:
`,K5=`---
options:
  - "$gN = Ng$ for all $g \\in G$"
  - "$N$ is abelian"
  - "Every element of $N$ commutes with every element of $G$"
  - "$N$ has index 2 in $G$"
correct: 0
hint: N ⊴ G means left and right cosets coincide: gN = Ng for every g ∈ G. Equivalently, gNg⁻¹ = N for all g. Every subgroup of index 2 is automatically normal.
---
A subgroup $N$ of $G$ is called normal if:
`,Q5=`---
options:
  - "3"
  - "2"
  - "6"
  - "1"
correct: 0
hint: The order of S₃ is 3! = 6. By Lagrange the index [S₃:H] = |S₃|/|H| = 6/2 = 3. So there are 3 left cosets.
---
How many left cosets does a subgroup of order $2$ have in $S_3$ (order $6$)?
`,Y5=`---
options:
  - "Every cyclic group is abelian"
  - "Every abelian group is cyclic"
  - "Cyclic groups must be finite"
  - "The only cyclic group is $\\mathbb{Z}$"
correct: 0
hint: If G = ⟨g⟩ then any two elements gᵐ and gⁿ commute: gᵐgⁿ = gᵐ⁺ⁿ = gⁿgᵐ. So every cyclic group is abelian. The converse fails: ℤ₂×ℤ₂ is abelian but not cyclic.
---
Which statement about cyclic groups is always true?
`,X5=`---
options:
  - "2"
  - "1"
  - "4"
  - "6"
correct: 0
hint: The generators of ℤ₆ are elements of order 6, i.e., those coprime to 6. φ(6) = φ(2)φ(3) = 1·2 = 2. The generators are 1 and 5.
---
How many generators does the cyclic group $\\mathbb{Z}_6$ have?
`,Z5=`---
options:
  - "Every subgroup of a cyclic group is cyclic"
  - "Cyclic groups have no proper subgroups"
  - "A cyclic group can have non-cyclic subgroups"
  - "The only subgroup of $\\mathbb{Z}$ is $\\mathbb{Z}$ itself"
correct: 0
hint: If G = ⟨g⟩ is cyclic, any subgroup H consists of powers of g, so H = ⟨gᵏ⟩ for some k — cyclic. For ℤ, every subgroup is nℤ = ⟨n⟩ for some n ≥ 0.
---
Which is true about subgroups of cyclic groups?
`,J5=`---
options:
  - "$\\dim_F K$ as a vector space over $F$"
  - "The number of elements in $K$"
  - "The degree of the minimal polynomial of $K$"
  - "$|K| / |F|$"
correct: 0
hint: The degree [K:F] is the dimension of K as a vector space over F. For example [ℂ:ℝ] = 2 (basis {1, i}), [ℝ:ℚ] = ∞.
---
The degree of a field extension $K/F$, written $[K:F]$, is:
`,e6=`---
options:
  - "$[L:F] = [L:K][K:F]$"
  - "$[L:F] = [L:K] + [K:F]$"
  - "$[L:F] = [L:K] / [K:F]$"
  - "$[L:K] = [L:F]$ always"
correct: 0
hint: Tower law (multiplicativity of degree): if F ⊆ K ⊆ L are fields, then [L:F] = [L:K]·[K:F]. For example [ℚ(√2,√3):ℚ] = [ℚ(√2,√3):ℚ(√2)]·[ℚ(√2):ℚ] = 2·2 = 4.
---
The Tower Law for field extensions $F \\subseteq K \\subseteq L$ states:
`,t6=`---
options:
  - "The smallest field extension of $F$ over which $f$ splits into linear factors"
  - "Any field containing $F$"
  - "The field $F$ itself if $f$ is irreducible"
  - "The field generated by the coefficients of $f$"
correct: 0
hint: The splitting field of f over F is F(α₁,...,αₙ) where α₁,...,αₙ are all roots of f. It is the smallest extension where f factors completely into linear factors.
---
The splitting field of a polynomial $f \\in F[x]$ over $F$ is:
`,n6=`---
options:
  - "A commutative ring with unity in which every nonzero element is a unit"
  - "A ring with no zero divisors"
  - "Any integral domain"
  - "A ring in which $1 = 0$"
correct: 0
hint: A field is a commutative ring with 1 ≠ 0 where every nonzero element has a multiplicative inverse. Every field is an integral domain, but not vice versa (ℤ is not a field).
---
A field is:
`,r6=`---
options:
  - "$\\mathbb{Z}_p$ for prime $p$"
  - "$\\mathbb{Z}_n$ for any $n > 1$"
  - "$\\mathbb{Z}_4$"
  - "$\\mathbb{Z}_6$"
correct: 0
hint: ℤₙ is a field iff n is prime. If n is composite, say n = ab with 1 < a,b < n, then a and b are zero divisors (a·b ≡ 0 mod n) so ℤₙ is not even an integral domain.
---
Which of the following is a field?
`,i6=`---
options:
  - "The multiplicative group of a finite field is cyclic"
  - "Every finite field has prime order"
  - "There are infinitely many non-isomorphic fields of order $p^2$"
  - "Finite fields of the same order may be non-isomorphic"
correct: 0
hint: For GF(pⁿ), the multiplicative group GF(pⁿ)* has order pⁿ-1 and is cyclic (generated by a primitive element). Also: finite fields of the same order are unique up to isomorphism.
---
Which is true about finite fields (Galois fields)?
`,o6=`---
options:
  - "$|G| = |\\text{Orb}(x)| \\cdot |\\text{Stab}(x)|$"
  - "$|G| = |\\text{Orb}(x)| + |\\text{Stab}(x)|$"
  - "$|\\text{Orb}(x)| = |\\text{Stab}(x)|$"
  - "$|\\text{Stab}(x)| = |G| / |X|$"
correct: 0
hint: The orbit-stabiliser theorem says [G:Stab(x)] = |Orb(x)|. Since |G| = |Orb(x)|·|Stab(x)| follows directly from the index formula.
---
The Orbit-Stabiliser Theorem states that for any $x \\in X$ (where $G$ acts on $X$):
`,a6=`---
options:
  - "Every group $G$ embeds into the symmetric group $S_{|G|}$"
  - "Every finite group is isomorphic to $S_n$ for some $n$"
  - "Every group is abelian"
  - "Every group acts trivially on itself"
correct: 0
hint: Cayley's theorem: the left-multiplication action of G on itself gives an injective homomorphism G → Sym(G) ≅ S_{|G|}. So every group is isomorphic to a subgroup of some symmetric group.
---
Cayley's Theorem asserts that:
`,s6=`---
options:
  - "Conjugacy classes of $G$"
  - "Left cosets of $G$"
  - "Normal subgroups of $G$"
  - "Elements of order 2"
correct: 0
hint: When G acts on itself by conjugation g·x = gxg⁻¹, the orbits are exactly the conjugacy classes {gxg⁻¹ : g ∈ G}. The class equation counts elements via these orbits.
---
The orbits of the conjugation action of $G$ on itself are:
`,l6=`---
options:
  - "A normal subgroup of $G$"
  - "A subgroup of $H$"
  - "The whole group $G$"
  - "Always trivial"
correct: 0
hint: ker(φ) = {g ∈ G : φ(g) = eH}. It is a subgroup of G. Moreover it is normal because g·ker(φ)·g⁻¹ ⊆ ker(φ) for any g ∈ G.
---
The kernel of a group homomorphism $\\varphi: G \\to H$ is:
`,u6=`---
options:
  - "Bijective homomorphism"
  - "Surjective homomorphism"
  - "Injective homomorphism"
  - "Homomorphism with trivial kernel"
correct: 0
hint: An isomorphism is a homomorphism that is both injective and surjective (bijective). A monomorphism is injective; an epimorphism is surjective.
---
A group isomorphism $G \\cong H$ is defined as a:
`,c6=`---
options:
  - "$\\ker(\\varphi) = \\{e\\}$"
  - "$\\text{im}(\\varphi) = H$"
  - "$\\varphi(e_G) \\neq e_H$"
  - "$\\ker(\\varphi) = G$"
correct: 0
hint: A homomorphism is injective iff its kernel is trivial ({e}). This follows from: φ(a)=φ(b) ⟺ φ(ab⁻¹)=e ⟺ ab⁻¹ ∈ ker(φ).
---
A homomorphism $\\varphi: G \\to H$ is injective if and only if:
`,d6=`---
options:
  - "Closure, associativity, identity, inverses"
  - "Closure, commutativity, identity, inverses"
  - "Closure, associativity, commutativity, identity"
  - "Associativity, identity, inverses (closure is automatic)"
correct: 0
hint: The four group axioms are: (1) closure, (2) associativity, (3) identity element, (4) inverses. Commutativity is NOT required — that makes an abelian group.
---
The four axioms that define a group $(G, \\cdot)$ are:
`,f6=`---
options:
  - "$n!$"
  - "$n$"
  - "$2n$"
  - "$n^2$"
correct: 0
hint: The symmetric group Sₙ consists of all bijections {1,...,n} → {1,...,n}. The number of such bijections is n! (n factorial).
---
The order of the symmetric group $S_n$ (the group of all permutations of $\\{1, \\ldots, n\\}$) is:
`,m6=`---
options:
  - "$(\\mathbb{R} \\setminus \\{0\\}, \\times)$"
  - "$(\\mathbb{R}, \\times)$"
  - "$(\\mathbb{N}, +)$"
  - "$(\\mathbb{Z}, \\times)$"
correct: 0
hint: (ℝ\\{0}, ×): closed ✓, associative ✓, identity 1 ✓, inverses (1/x) ✓. (ℝ,×) fails because 0 has no inverse. (ℕ,+) has no inverses. (ℤ,×) has no inverses except ±1.
---
Which of the following is a group?
`,h6=`---
options:
  - "A subring $I$ such that $rI \\subseteq I$ and $Ir \\subseteq I$ for all $r \\in R$"
  - "Any subring of $R$"
  - "A subring closed under multiplication"
  - "A subset closed under addition only"
correct: 0
hint: An ideal absorbs multiplication from R on both sides. This is stronger than being a subring. Left ideal: rI ⊆ I. Right ideal: Ir ⊆ I. Two-sided ideal: both.
---
A two-sided ideal $I$ of a ring $R$ is:
`,p6=`---
options:
  - "An ideal $M$ such that no ideal $I$ satisfies $M \\subsetneq I \\subsetneq R$"
  - "An ideal generated by a prime element"
  - "An ideal equal to $R$ itself"
  - "An ideal with exactly one element"
correct: 0
hint: M is maximal if it is proper (M ≠ R) and maximal among proper ideals. Equivalently R/M is a field. Maximal ideals are always prime, but not vice versa.
---
A maximal ideal in a commutative ring $R$ is:
`,v6=`---
options:
  - "A field"
  - "An integral domain"
  - "A ring with zero divisors"
  - "Always the zero ring"
correct: 0
hint: R/M is a field iff M is maximal. This is a key theorem: the quotient by a maximal ideal has no proper nontrivial ideals, which for commutative rings with 1 is equivalent to being a field.
---
If $M$ is a maximal ideal of a commutative ring $R$, then $R/M$ is:
`,g6=`---
options:
  - "Verify P(1) and show P(k) ⟹ P(k+1)"
  - "Verify P(1) only"
  - "Show P(k+1) ⟹ P(k) for all k"
  - "Verify P(n) for all n ≤ 10, then conclude"
correct: 0
hint: Weak induction requires a base case (usually n=1) plus an inductive step that proves the next case from the current one.
---
To prove a statement $P(n)$ for all $n \\geq 1$ by weak mathematical induction, you must:
`,y6=`---
options:
  - "$\\\\frac{n(n+1)}{2}$"
  - "$n^2$"
  - "$\\\\frac{n(n-1)}{2}$"
  - "$2^n - 1$"
correct: 0
hint: Base case: 1 = 1(2)/2 ✓. Inductive step: assume sum to k = k(k+1)/2, then adding (k+1) gives (k+1)(k+2)/2.
---
By induction, $1 + 2 + \\cdots + n$ equals:
`,x6=`---
options:
  - "Strong induction assumes P(1), …, P(k) to prove P(k+1)"
  - "Strong induction only needs the base case P(0)"
  - "Strong induction is weaker than ordinary induction"
  - "Strong induction cannot prove statements about integers"
correct: 0
hint: In strong induction the inductive hypothesis is that P(j) holds for ALL j ≤ k, not just j = k. This makes it more powerful for some proofs (e.g. prime factorisation).
---
Which best describes strong (complete) induction?
`,w6=`---
options:
  - "A commutative ring with unity and no zero divisors"
  - "Any commutative ring"
  - "A ring in which every nonzero element has an inverse"
  - "A ring with a unique maximal ideal"
correct: 0
hint: Integral domain = commutative + unity + no zero divisors. A field is stronger: every nonzero element has an inverse. ℤ is an integral domain but not a field.
---
An integral domain is:
`,b6=`---
options:
  - "It is a field"
  - "It has zero divisors"
  - "It has characteristic zero"
  - "It is isomorphic to $\\mathbb{Z}$"
correct: 0
hint: In a finite integral domain D, for any nonzero a, the map x ↦ ax is injective (no zero divisors) hence surjective (D finite). So a has an inverse and D is a field.
---
Every finite integral domain:
`,$6=`---
options:
  - "The field $\\mathbb{Q}$ of rationals constructed from $\\mathbb{Z}$"
  - "The ring $\\mathbb{Z}[x]$ of integer polynomials"
  - "The ring $\\mathbb{Z}/n\\mathbb{Z}$"
  - "The ring of $2\\times 2$ integer matrices"
correct: 0
hint: The field of fractions of an integral domain D is the smallest field containing D. For D = ℤ, the field of fractions is ℚ = {a/b : a,b ∈ ℤ, b ≠ 0}.
---
The field of fractions of the integral domain $\\mathbb{Z}$ is:
`,_6=`---
options:
  - "$G / \\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$G \\cong H$ whenever $\\varphi$ is a homomorphism"
  - "$\\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$G / \\text{im}(\\varphi) \\cong \\ker(\\varphi)$"
correct: 0
hint: First Isomorphism Theorem: given φ: G → H, the map G/ker(φ) → im(φ) sending g·ker(φ) ↦ φ(g) is a well-defined isomorphism.
---
The First Isomorphism Theorem states that for a homomorphism $\\varphi: G \\to H$:
`,k6=`---
options:
  - "$\\mathbb{Z}/n\\mathbb{Z}$"
  - "$n\\mathbb{Z}$"
  - "$\\mathbb{Z} \\times \\mathbb{Z}_n$"
  - "$\\mathbb{Z}$"
correct: 0
hint: Apply the First Isomorphism Theorem to φ: ℤ → ℤₙ defined by φ(k) = k mod n. ker(φ) = nℤ and im(φ) = ℤₙ, so ℤ/nℤ ≅ ℤₙ.
---
By the First Isomorphism Theorem, the quotient $\\mathbb{Z} / n\\mathbb{Z}$ is isomorphic to:
`,z6=`---
options:
  - "Subgroups of $G/N$ correspond bijectively to subgroups of $G$ containing $N$"
  - "Every subgroup of $G$ maps to a subgroup of $G/N$"
  - "$G/N$ has fewer subgroups than $G$"
  - "Normal subgroups of $G/N$ correspond to all subgroups of $G$"
correct: 0
hint: The Correspondence (Lattice) Theorem: there is an order-preserving bijection between subgroups of G/N and subgroups of G that contain N. Normal subgroups correspond to normal subgroups.
---
The Correspondence Theorem (Fourth Isomorphism Theorem) says:
`,S6=`---
options:
  - "Every subgroup of an abelian group is normal"
  - "Every normal subgroup is abelian"
  - "Normal subgroups must have index 2"
  - "The trivial subgroup is never normal"
correct: 0
hint: If G is abelian then gH = Hg trivially for any H ≤ G (since gh = hg). So every subgroup of an abelian group is automatically normal.
---
Which statement about normal subgroups is correct?
`,T6=`---
options:
  - "$gNg^{-1} = N$ for all $g \\in G$"
  - "$gN = g$ for all $g \\in G$"
  - "$N$ is closed under conjugation by elements of $N$"
  - "$N$ commutes with itself"
correct: 0
hint: N ⊴ G iff N is closed under conjugation by any element of G: for all g∈G and n∈N, gng⁻¹ ∈ N. This is equivalent to gNg⁻¹ = N.
---
The conjugation characterisation of a normal subgroup $N \\trianglelefteq G$ is:
`,M6=`---
options:
  - "A group with no proper nontrivial normal subgroups"
  - "A group with no subgroups at all"
  - "A cyclic group of prime order"
  - "An abelian group"
correct: 0
hint: A simple group has exactly two normal subgroups: {e} and G itself. ℤₚ (p prime) is simple. Non-abelian examples: A₅ (order 60), the first non-abelian simple group.
---
A simple group is:
`,q6=`---
options:
  - "There exist unique $q(x), r(x)$ with $f = qg + r$ and $\\deg r < \\deg g$"
  - "Every polynomial divides every other polynomial"
  - "Division is only possible when $\\deg f \\geq \\deg g$, and the remainder is always 0"
  - "Polynomial division requires $F$ to have characteristic 0"
correct: 0
hint: The division algorithm in F[x]: given f and g ≠ 0 in F[x], there exist unique q (quotient) and r (remainder) with f = qg + r and either r = 0 or deg(r) < deg(g).
---
The division algorithm for polynomials over a field $F$ states:
`,j6=`---
options:
  - "$F[x]/(p(x))$ is a field"
  - "$F[x]/(p(x))$ is the zero ring"
  - "$p(x)$ has a root in $F$"
  - "$F[x]/(p(x))$ has zero divisors"
correct: 0
hint: In F[x], (p(x)) is a maximal ideal iff p(x) is irreducible. Quotient by a maximal ideal in a commutative ring with 1 gives a field.
---
If $p(x)$ is an irreducible polynomial over a field $F$, then:
`,A6=`---
options:
  - "$a$ is a root of $f$ iff $(x-a)$ divides $f(x)$"
  - "$a$ is a root of $f$ iff $f(x) = x - a$"
  - "Every polynomial of degree $n$ has exactly $n$ roots"
  - "$f$ has a root iff $f$ is irreducible"
correct: 0
hint: Factor theorem: f(a) = 0 ⟺ (x-a) | f(x). This follows from the division algorithm: f(x) = (x-a)q(x) + f(a), so if f(a)=0 then (x-a) | f(x).
---
The Factor Theorem for polynomials over a field $F$ states:
`,C6=`---
options:
  - "It is an equivalence relation"
  - "It is reflexive but not transitive"
  - "It is symmetric but not reflexive"
  - "It is transitive but not symmetric"
correct: 0
hint: Check all three properties. The relation 'a ≡ b (mod n)' is reflexive (a-a=0 divisible by n), symmetric, and transitive.
---
The relation $a \\sim b$ on $\\mathbb{Z}$ defined by $n \\mid (a - b)$ for a fixed $n > 1$ is:
`,P6=`---
options:
  - "The equivalence classes of ~ partition S"
  - "Every element belongs to exactly two equivalence classes"
  - "Equivalence classes may overlap"
  - "An equivalence class can be empty"
correct: 0
hint: A fundamental theorem: equivalence classes are disjoint (an element belongs to exactly one class) and their union is all of S.
---
If $\\sim$ is an equivalence relation on a set $S$, then:
`,E6=`---
options:
  - "3"
  - "2"
  - "4"
  - "6"
correct: 0
hint: The equivalence classes are {0,3}, {1,4}, {2,5} — elements with the same remainder mod 3. That gives 3 classes.
---
How many equivalence classes does the relation $a \\sim b \\iff 3 \\mid (a-b)$ have on $\\{0,1,2,3,4,5\\}$?
`,R6=`---
options:
  - "An ideal of $R$"
  - "A subring of $R$ but not necessarily an ideal"
  - "Always the zero ideal"
  - "A field"
correct: 0
hint: ker(φ) = {r ∈ R : φ(r) = 0_S}. It is an ideal (not just a subring) because for any r ∈ R and k ∈ ker(φ): φ(rk) = φ(r)·0 = 0, so rk ∈ ker(φ).
---
The kernel of a ring homomorphism $\\varphi: R \\to S$ is:
`,D6=`---
options:
  - "$R / \\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$R \\cong S$ whenever $\\varphi$ is a ring homomorphism"
  - "$\\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$\\text{im}(\\varphi)$ is an ideal of $S$"
correct: 0
hint: The First Isomorphism Theorem for rings mirrors the group version: R/ker(φ) ≅ im(φ) via the map r + ker(φ) ↦ φ(r). Note: im(φ) is a subring of S, not necessarily an ideal.
---
The First Isomorphism Theorem for rings states:
`,N6=`---
options:
  - "Evaluating a polynomial at a fixed element $\\alpha \\in S$"
  - "Differentiating a polynomial"
  - "Mapping each coefficient to its square"
  - "Reducing coefficients modulo $n$"
correct: 0
hint: The evaluation homomorphism ev_α: R[x] → S sends f(x) ↦ f(α). It is a ring homomorphism: ev_α(f+g) = f(α)+g(α) and ev_α(fg) = f(α)g(α).
---
The evaluation homomorphism $\\text{ev}_\\alpha: R[x] \\to S$ is defined by:
`,B6=`---
options:
  - "$(R, +)$ is an abelian group, $\\cdot$ is associative, and $\\cdot$ distributes over $+$"
  - "$(R, +)$ is a group and $(R, \\cdot)$ is a group"
  - "$(R, +)$ is abelian and $(R, \\cdot)$ is abelian"
  - "Every element has a multiplicative inverse"
correct: 0
hint: A ring needs: (R,+) abelian group, (R,·) associative (semigroup), and both distributive laws. Multiplication need not be commutative, and inverses are not required.
---
A ring $(R, +, \\cdot)$ requires:
`,I6=`---
options:
  - "A nonzero element $a$ such that $ab = 0$ for some nonzero $b$"
  - "An element with no multiplicative inverse"
  - "The additive identity element"
  - "An element equal to its own square"
correct: 0
hint: a is a zero divisor if a ≠ 0 and there exists b ≠ 0 with ab = 0 (or ba = 0). Example: in ℤ₆, the element 2 is a zero divisor because 2·3 = 6 ≡ 0.
---
A zero divisor in a ring $R$ is:
`,L6=`---
options:
  - "The smallest positive integer $n$ such that $n \\cdot 1 = 0$, or $0$ if no such $n$ exists"
  - "The number of elements in the ring"
  - "The largest prime dividing $|R|$"
  - "The additive order of the identity element always"
correct: 0
hint: char(R) = the additive order of 1 if it is finite, or 0 if 1 has infinite additive order. For ℤₙ, char = n. For ℤ, ℚ, ℝ, char = 0.
---
The characteristic of a ring $R$ is:
`,F6=`---
options:
  - "It is both injective and surjective"
  - "It is injective but not surjective"
  - "It is surjective but not injective"
  - "It is neither injective nor surjective"
correct: 0
hint: A bijection is a function that is both injective (one-to-one) and surjective (onto). Every element of the codomain is hit exactly once.
---
A function $f: A \\to B$ is called a **bijection** if and only if:
`,O6=`---
options:
  - "H is nonempty and closed under the operation and taking inverses"
  - "H is nonempty and closed under the operation only"
  - "H contains the identity and is closed under the operation"
  - "H is a group under any binary operation"
correct: 0
hint: The one-step subgroup test: H ≤ G iff H ≠ ∅ and for all a,b ∈ H we have ab⁻¹ ∈ H. Equivalently H is nonempty, closed under multiplication, and closed under inverses.
---
The subgroup test says $H \\leq G$ if and only if:
`,H6=`---
options:
  - "The order of H divides the order of G"
  - "The order of G divides the order of H"
  - "H and G must have the same order"
  - "The order of H equals the index of H in G"
correct: 0
hint: Lagrange's theorem: if G is a finite group and H ≤ G, then |H| divides |G|. The index [G:H] = |G|/|H| is the number of cosets.
---
Lagrange's theorem states that for a finite group $G$ with subgroup $H$:
`,G6=`---
options:
  - "The order of every element divides |G|"
  - "Every divisor of |G| is the order of some element"
  - "G has a subgroup of every order that divides |G|"
  - "All elements of G have the same order"
correct: 0
hint: The order of an element g is |⟨g⟩|, and ⟨g⟩ is a subgroup of G, so by Lagrange |⟨g⟩| divides |G|. The converse (every divisor gives an element) is false in general.
---
A corollary of Lagrange's theorem for a finite group $G$ is:
`,W6=`---
options:
  - "A subgroup of order $p^n$"
  - "A subgroup of order $p$"
  - "Any $p$-subgroup of $G$"
  - "The center of $G$"
correct: 0
hint: If |G| = pⁿm with p∤m, a Sylow p-subgroup has the full p-part of the order, i.e., order pⁿ. Sylow's first theorem guarantees at least one exists.
---
For a group $G$ with $|G| = p^n m$ ($\\gcd(p,m)=1$), a Sylow $p$-subgroup is:
`,U6=`---
options:
  - "All Sylow $p$-subgroups of $G$ are conjugate to each other"
  - "There is exactly one Sylow $p$-subgroup"
  - "Sylow $p$-subgroups are always normal"
  - "All subgroups of the same order are Sylow subgroups"
correct: 0
hint: Sylow's second theorem: any two Sylow p-subgroups are conjugate. A Sylow p-subgroup is normal iff it is unique (nₚ = 1). Many groups have multiple non-normal Sylow subgroups.
---
Sylow's Second Theorem states:
`,V6=`---
options:
  - "$n_p \\equiv 1 \\pmod{p}$ and $n_p \\mid m$"
  - "$n_p \\equiv 0 \\pmod{p}$ and $n_p \\mid |G|$"
  - "$n_p = 1$ always"
  - "$n_p \\mid p^n$"
correct: 0
hint: Sylow's third theorem: nₚ ≡ 1 (mod p) and nₚ divides m (the p'-part of |G|). This often forces nₚ = 1, making the Sylow subgroup normal and unique.
---
Sylow's Third Theorem constrains the number $n_p$ of Sylow $p$-subgroups by:
`,K6=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"]],Q6={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"}},Y6={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",morphisms:"#f5a623",structure:"#4a9eff"},X6={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},Cd={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},Z6=Object.assign({"./nodes/binary_ops/node.md":k5,"./nodes/cosets/node.md":z5,"./nodes/cyclic_groups/node.md":S5,"./nodes/field_extensions/node.md":T5,"./nodes/fields_intro/node.md":M5,"./nodes/group_actions/node.md":q5,"./nodes/group_homomorphisms/node.md":j5,"./nodes/groups_intro/node.md":A5,"./nodes/ideals/node.md":C5,"./nodes/induction/node.md":P5,"./nodes/integral_domains/node.md":E5,"./nodes/iso_theorem/node.md":R5,"./nodes/normal_subgroups/node.md":D5,"./nodes/poly_rings/node.md":N5,"./nodes/relations/node.md":B5,"./nodes/ring_homomorphisms/node.md":I5,"./nodes/rings_intro/node.md":L5,"./nodes/sets_functions/node.md":F5,"./nodes/subgroups/node.md":O5,"./nodes/sylow/node.md":H5}),J6=qd(Z6,/\.\/nodes\/([^/]+)\/node\.md$/),e7=Object.assign({"./nodes/binary_ops/questions/01.md":G5,"./nodes/binary_ops/questions/02.md":W5,"./nodes/binary_ops/questions/03.md":U5,"./nodes/cosets/questions/01.md":V5,"./nodes/cosets/questions/02.md":K5,"./nodes/cosets/questions/03.md":Q5,"./nodes/cyclic_groups/questions/01.md":Y5,"./nodes/cyclic_groups/questions/02.md":X5,"./nodes/cyclic_groups/questions/03.md":Z5,"./nodes/field_extensions/questions/01.md":J5,"./nodes/field_extensions/questions/02.md":e6,"./nodes/field_extensions/questions/03.md":t6,"./nodes/fields_intro/questions/01.md":n6,"./nodes/fields_intro/questions/02.md":r6,"./nodes/fields_intro/questions/03.md":i6,"./nodes/group_actions/questions/01.md":o6,"./nodes/group_actions/questions/02.md":a6,"./nodes/group_actions/questions/03.md":s6,"./nodes/group_homomorphisms/questions/01.md":l6,"./nodes/group_homomorphisms/questions/02.md":u6,"./nodes/group_homomorphisms/questions/03.md":c6,"./nodes/groups_intro/questions/01.md":d6,"./nodes/groups_intro/questions/02.md":f6,"./nodes/groups_intro/questions/03.md":m6,"./nodes/ideals/questions/01.md":h6,"./nodes/ideals/questions/02.md":p6,"./nodes/ideals/questions/03.md":v6,"./nodes/induction/questions/01.md":g6,"./nodes/induction/questions/02.md":y6,"./nodes/induction/questions/03.md":x6,"./nodes/integral_domains/questions/01.md":w6,"./nodes/integral_domains/questions/02.md":b6,"./nodes/integral_domains/questions/03.md":$6,"./nodes/iso_theorem/questions/01.md":_6,"./nodes/iso_theorem/questions/02.md":k6,"./nodes/iso_theorem/questions/03.md":z6,"./nodes/normal_subgroups/questions/01.md":S6,"./nodes/normal_subgroups/questions/02.md":T6,"./nodes/normal_subgroups/questions/03.md":M6,"./nodes/poly_rings/questions/01.md":q6,"./nodes/poly_rings/questions/02.md":j6,"./nodes/poly_rings/questions/03.md":A6,"./nodes/relations/questions/01.md":C6,"./nodes/relations/questions/02.md":P6,"./nodes/relations/questions/03.md":E6,"./nodes/ring_homomorphisms/questions/01.md":R6,"./nodes/ring_homomorphisms/questions/02.md":D6,"./nodes/ring_homomorphisms/questions/03.md":N6,"./nodes/rings_intro/questions/01.md":B6,"./nodes/rings_intro/questions/02.md":I6,"./nodes/rings_intro/questions/03.md":L6,"./nodes/sets_functions/questions/01.md":F6,"./nodes/subgroups/questions/01.md":O6,"./nodes/subgroups/questions/02.md":H6,"./nodes/subgroups/questions/03.md":G6,"./nodes/sylow/questions/01.md":W6,"./nodes/sylow/questions/02.md":U6,"./nodes/sylow/questions/03.md":V6}),t7=jd(e7,/\.\/nodes\/([^/]+)\/questions\//),n7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Cd,QUESTION_BANK:t7,RAW_EDGES:K6,RAW_NODES:J6,SCOPE_COLORS:Y6,SCOPE_LABELS:X6,SECTIONS:Q6},Symbol.toStringTag,{value:"Module"})),r7={math_pl:_5,abstract_algebra:n7},i7=[Ad,Cd],o7="math_pl",a7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."}};function re(o,n="pl"){const r=a7[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function s7(o,n){const r={},a={};return o.forEach(l=>{r[l.id]=[],a[l.id]=[]}),n.forEach(([l,u])=>{var f,v;(f=r[u])==null||f.push(l),(v=a[l])==null||v.push(u)}),{prereqs:r,dependents:a}}function Pl(o,n){const r=Object.fromEntries(o.map(f=>[f.id,0])),a=Object.fromEntries(o.map(f=>[f.id,[]]));for(const[f,v]of n)r[v]!==void 0&&r[v]++,a[f]!==void 0&&a[f].push(v);const l=Object.fromEntries(o.map(f=>[f.id,0])),u=o.filter(f=>r[f.id]===0).map(f=>f.id);for(;u.length;){const f=u.shift();for(const v of a[f])l[v]=Math.max(l[v],l[f]+1),--r[v]===0&&u.push(v)}return l}const l7={id:"spectral",label:"Spectral"};function u7(o,n,r,a,l=80){const u=o.length,f=Object.fromEntries(o.map((X,W)=>[X.id,W])),v=Array.from({length:u},()=>new Float64Array(u));n.forEach(([X,W])=>{const J=f[X],ve=f[W];J==null||ve==null||(v[J][ve]=1,v[ve][J]=1)});const p=v.map(X=>X.reduce((W,J)=>W+J,0)),x=X=>X.map((W,J)=>{let ve=0;for(let ke=0;ke<u;ke++)ve+=v[J][ke]*X[ke];return p[J]*X[J]-ve}),$=(X,W)=>X.reduce((J,ve,ke)=>J+ve*W[ke],0),b=X=>{const W=Math.sqrt($(X,X))||1;return X.map(J=>J/W)},k=(X,W)=>{let J=[...X];return W.forEach(ve=>{const ke=$(J,ve);J=J.map((Te,je)=>Te-ke*ve[je])}),b(J)},z=(X,W=400)=>{let J=b(Array.from({length:u},()=>Math.random()-.5));J=k(J,X);for(let ve=0;ve<W;ve++){const ke=Math.max(...p)+1;J=k(J.map((Te,je)=>ke*Te-x(J)[je]),X)}return J},P=b(new Array(u).fill(1)),R=z([P]),B=z([P,R]),N=Math.min(...R),O=Math.max(...R),H=Math.min(...B),E=Math.max(...B),G=O-N<1e-6?1:(r-2*l)/(O-N),U=E-H<1e-6?1:(a-2*l)/(E-H);return o.map((X,W)=>({id:X.id,x:l+(R[W]-N)*G,y:l+(B[W]-H)*U,vx:0,vy:0}))}const c7=Object.freeze(Object.defineProperty({__proto__:null,apply:u7,meta:l7},Symbol.toStringTag,{value:"Module"})),d7={id:"topoRank",label:"Topo Rank"},F1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function f7(o,n,r,a,l=80){const u=Pl(o,n),f=Math.max(...o.map($=>u[$.id]??0),0),v={};for(const $ of o){const b=u[$.id]??0;(v[b]??(v[b]=[])).push($)}for(const $ of Object.values(v))$.sort((b,k)=>{const z=F1.indexOf(b.scope),P=F1.indexOf(k.scope);return(z===-1?999:z)-(P===-1?999:P)});const p=r-2*l,x=a-2*l;return o.map($=>{const b=u[$.id]??0,k=v[b],z=k.indexOf($);return{id:$.id,x:l+(z+.5)/k.length*p,y:l+b/Math.max(f,1)*x,vx:0,vy:0}})}const m7=Object.freeze(Object.defineProperty({__proto__:null,apply:f7,meta:d7},Symbol.toStringTag,{value:"Module"})),h7={id:"nPartite",label:"N-Partite Grid"};function p7(o,n,r,a,l=80){const u=Pl(o,n),f=Math.max(...o.map(z=>u[z.id]??0),0),v={};for(const z of o){const P=u[z.id]??0;(v[P]??(v[P]=[])).push(z)}const p={};for(const z of o)p[z.id]=[];for(const[z,P]of n)p[P]&&p[P].push(z);const x=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],$={},b=r-2*l,k=a-2*l;for(let z=0;z<=f;z++){const P=v[z]??[];z===0?P.sort((B,N)=>{const O=x.indexOf(B.scope),H=x.indexOf(N.scope);return(O===-1?999:O)-(H===-1?999:H)}):P.sort((B,N)=>{const O=H=>{const E=p[H.id]??[];return E.length===0?r/2:E.reduce((G,U)=>{var X;return G+(((X=$[U])==null?void 0:X.x)??r/2)},0)/E.length};return O(B)-O(N)});const R=l+z/Math.max(f,1)*k;P.forEach((B,N)=>{const O=P.length===1?r/2:l+N/(P.length-1)*b;$[B.id]={x:O,y:R}})}return o.map(z=>{var P,R;return{id:z.id,x:((P=$[z.id])==null?void 0:P.x)??r/2,y:((R=$[z.id])==null?void 0:R.y)??a/2,vx:0,vy:0}})}const Pd=Object.freeze(Object.defineProperty({__proto__:null,apply:p7,meta:h7},Symbol.toStringTag,{value:"Module"})),Ed=[Pd,m7,c7],Rd="nPartite";function v7(o){return Ed.find(n=>n.meta.id===o)??Pd}const ea=1400,El=1e3,ki=80,g7=.4,O1=6,y7=.35,H1=.012;function x7(o,n){const r=Pl(o,n),a=Math.max(...o.map(u=>r[u.id]??0),0),l=Object.fromEntries(o.map(u=>[u.id,ki+(r[u.id]??0)/Math.max(a,1)*(El-2*ki)]));return{ranks:r,rankY:l}}function w7(o,n){const r=Object.fromEntries(o.map((a,l)=>[a.id,l]));return n.map(([a,l])=>[r[a],r[l]]).filter(([a,l])=>a!=null&&l!=null)}function b7(o){return Math.sqrt(ea*El/Math.max(o.length,1))*.9}function $7(o,n,r,a){return v7(o).apply(n,r,ea,El,ki).map(f=>({id:f.id,x:f.x+(Math.random()-.5)*20,y:a[f.id]??f.y,vx:0,vy:0}))}function _7(o,n,r,a,{ranks:l,rankY:u,simEdges:f,idealK:v}){const p=o.length,x=new Float64Array(p);for(let $=0;$<p;$++)for(let b=$+1;b<p;b++){if(l[o[$].id]!==l[o[b].id])continue;const k=o[$].x-o[b].x,z=Math.abs(k)||.1,P=v*v/(z*z),R=k<0?-1:1;x[$]+=R*P,x[b]-=R*P}for(const[$,b]of f){const k=o[b].x-o[$].x;x[$]+=k*H1,x[b]-=k*H1}for(let $=0;$<p;$++)x[$]+=(ea/2-o[$].x)*.003;return o.map(($,b)=>{if($.id===n)return{...$,x:r,y:a,vx:0,vy:0};let k=($.vx+x[b])*g7;Math.abs(k)>O1&&(k*=O1/Math.abs(k));const z=u[$.id]??$.y,P=$.y+(z-$.y)*y7;return{...$,vx:k,vy:0,x:Math.max(ki,Math.min(ea-ki,$.x+k)),y:P}})}function il(o=Rd,n=300,r,a){if(!r||r.length===0)return{};const{ranks:l,rankY:u}=x7(r,a??[]),f=w7(r,a??[]),v=b7(r),p={ranks:l,rankY:u,simEdges:f,idealK:v};let x=$7(o,r,a??[],u);for(let $=0;$<n;$++)x=_7(x,null,0,0,p);return Object.fromEntries(x.map($=>[$.id,{x:$.x,y:$.y}]))}const dt={bg:"#0a0e17",surface:"#0d1520",border:"#1e2d45",textPrimary:"#f5f6fa",textBody:"#c8d6e5",textMuted:"#8a9dbe",textDim:"#6b7d9a",textFaint:"#3a4d63",knownHi:"#2ecc71",unknownHi:"#e74c3c",frontier:"#f39c12"},Dd="'JetBrains Mono','SF Mono','Fira Code',monospace",xi=(o,n)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${dt.border}`,background:o?`${n}22`:"transparent",color:o?n:dt.textDim,minHeight:32}),wi=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function k7(o){const n=typeof window<"u"&&window.innerWidth<600,[r,a]=ee.useState(n?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[l,u]=ee.useState("grab"),f=ee.useRef(!1),v=ee.useRef({x:0,y:0}),p=ee.useRef(null),x=ee.useRef(null),$=ee.useCallback(E=>{E.preventDefault();const G=E.deltaY>0?.9:1.1;a(U=>{const X=Math.max(.15,Math.min(5,U.scale*G)),W=E.clientX,J=E.clientY,ve=W-(W-U.x)/U.scale*X,ke=J-(J-U.y)/U.scale*X;return{x:ve,y:ke,scale:X}})},[]),b=ee.useCallback((E,G)=>({x:(E-r.x)/r.scale,y:(G-r.y)/r.scale}),[r]),k=ee.useCallback((E,G)=>{f.current=!0,u("grabbing"),v.current={x:E-r.x,y:G-r.y}},[r]),z=ee.useCallback(E=>f.current?(a(G=>({...G,x:E.clientX-v.current.x,y:E.clientY-v.current.y})),!0):!1,[]),P=ee.useCallback(()=>{f.current=!1,u("grab")},[]),R=(E,G)=>{const U=E.clientX-G.clientX,X=E.clientY-G.clientY;return Math.sqrt(U*U+X*X)},B=(E,G)=>({x:(E.clientX+G.clientX)/2,y:(E.clientY+G.clientY)/2}),N=ee.useCallback(E=>{E.touches.length===1?(f.current=!0,a(G=>(v.current={x:E.touches[0].clientX-G.x,y:E.touches[0].clientY-G.y},G)),p.current=null,x.current=null):E.touches.length===2&&(f.current=!1,p.current=R(E.touches[0],E.touches[1]),x.current=B(E.touches[0],E.touches[1]))},[]),O=ee.useCallback(E=>{if(E.preventDefault(),E.touches.length===1&&f.current)a(G=>({...G,x:E.touches[0].clientX-v.current.x,y:E.touches[0].clientY-v.current.y}));else if(E.touches.length===2&&p.current!==null){const G=R(E.touches[0],E.touches[1]),U=B(E.touches[0],E.touches[1]),X=G/p.current;a(W=>{const J=Math.max(.15,Math.min(5,W.scale*X)),ve=x.current.x,ke=x.current.y,Te=ve-(ve-W.x)/W.scale*J,je=ke-(ke-W.y)/W.scale*J;return{x:Te,y:je,scale:J}}),p.current=G,x.current=U}},[]),H=ee.useCallback(()=>{f.current=!1,p.current=null,x.current=null},[]);return ee.useEffect(()=>{const E=o.current;if(E)return E.addEventListener("wheel",$,{passive:!1}),E.addEventListener("touchstart",N,{passive:!1}),E.addEventListener("touchmove",O,{passive:!1}),E.addEventListener("touchend",H,{passive:!1}),()=>{E.removeEventListener("wheel",$),E.removeEventListener("touchstart",N),E.removeEventListener("touchmove",O),E.removeEventListener("touchend",H)}},[o,$,N,O,H]),{viewTransform:r,setViewTransform:a,toCanvas:b,isPanning:f,panStart:v,startPan:k,cursorStyle:l,setCursorStyle:u,handleMouseMove:z,handleMouseUp:P,handleWheel:$}}function z7(o,n,r,a){const l=ee.useRef(null),u=ee.useRef({x:0,y:0}),f=ee.useCallback((x,$,b)=>{const k=o($,b),z=n.find(P=>P.id===x);z&&(l.current=x,u.current={x:k.x-z.x,y:k.y-z.y},a==null||a("grabbing"))},[o,n,a]),v=ee.useCallback((x,$)=>{if(!l.current)return!1;const b=o(x,$),k=l.current;return r(z=>({...z,[k]:{x:b.x-u.current.x,y:b.y-u.current.y}})),!0},[o,r]),p=ee.useCallback(()=>{l.current=null,a==null||a("grab")},[a]);return{draggingNode:l,startNodeDrag:f,handleDragMove:v,handleDragEnd:p}}const Nd="wizmat_v1_";function S7(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function T7(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function Sn(o,n){const r=Nd+o,[a,l]=ee.useState(()=>{try{const f=localStorage.getItem(r);return f===null?n:T7(f,n)}catch{return n}});ee.useEffect(()=>{try{localStorage.setItem(r,S7(a))}catch{}},[r,a]);const u=ee.useCallback(f=>{l(v=>typeof f=="function"?f(v):f)},[]);return[a,u]}function M7(){try{Object.keys(localStorage).filter(o=>o.startsWith(Nd)).forEach(o=>localStorage.removeItem(o))}catch{}}function q7(o,n,r){var u;const a={...n},l=[o];for(;l.length;){const f=l.shift();a[f]!=="known"&&(a[f]="known",(u=r.prereqs[f])==null||u.forEach(v=>{a[v]!=="known"&&l.push(v)}))}return a}function G1(o,n,r){var u;const a={...n},l=[o];for(;l.length;){const f=l.shift();a[f]!=="unknown"&&(a[f]="unknown",(u=r.dependents[f])==null||u.forEach(v=>{a[v]!=="unknown"&&l.push(v)}))}return a}function j7(o,n,r){return o.filter(a=>n[a.id]!=="known"&&n[a.id]!=="unknown").filter(a=>(r.prereqs[a.id]??[]).every(l=>n[l]==="known")).map(a=>a.id)}function A7(o,n,r,a=.5){var l,u,f;try{const v=1-a,p=o.filter(b=>n[b.id]!=="known"&&n[b.id]!=="unknown");if(p.length===0)return null;const x=p.map(b=>{const k=Bd(b.id,n,r),z=Id(b.id,n,r),P=a*k+v*z;return{id:b.id,erv:P||0,ancestorsToReveal:k,descendantsToReveal:z}});return x.sort((b,k)=>k.erv-b.erv),((l=x[0])==null?void 0:l.id)||((u=p[0])==null?void 0:u.id)||null}catch(v){return console.error("pickNextQuestion error:",v),((f=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown")[0])==null?void 0:f.id)||null}}function Bd(o,n,r){const a=new Set,l=[...r.prereqs[o]??[]];let u=0;for(;l.length>0;){const f=l.shift();if(a.has(f))continue;a.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const v=r.prereqs[f]??[];for(const p of v)a.has(p)||l.push(p)}return u}function Id(o,n,r){const a=new Set,l=[...r.dependents[o]??[]];let u=0;for(;l.length>0;){const f=l.shift();if(a.has(f))continue;a.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const v=r.dependents[f]??[];for(const p of v)a.has(p)||l.push(p)}return u}function C7(o,n,r,a=.5){try{const l=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown");if(l.length===0)return 0;const u=1-a;let f=0;for(const x of l){const $=Bd(x.id,n,r),b=Id(x.id,n,r),k=a*$+u*b;f+=k||0}if(!f||f===0)return l.length;const v=l.length,p=v*v/f;return isNaN(p)?l.length:Math.ceil(p)}catch(l){return console.error("estimateRemainingQuestions error:",l),null}}function P7(o,n,r){const a={...o};for(const[l,u]of Object.entries(n)){const f=a[l]??{alpha:1,beta:1};a[l]={alpha:f.alpha+(r?u:0),beta:f.beta+(r?0:u)}}return a}function E7(o,n){const r={};for(const a of o){const l=n[a]??{alpha:1,beta:1},u=l.alpha+l.beta,f=l.alpha/u;f>.75&&u>2?r[a]="known":f<.25&&u>2?r[a]="unknown":r[a]="uncertain"}return r}function R7(o,n,r){const a=new Set,l=new Set(r.map(f=>f.id)),u=[o];for(;u.length;){const f=u.shift();if(!a.has(f)&&l.has(f)){a.add(f);for(const v of n.prereqs[f]??[])a.has(v)||u.push(v)}}return a}function D7(o,n,r,a,l){var v;const u=o.filter(p=>r[p]==="uncertain");if(u.length===0)return null;const f=u.map(p=>{const x=n[p]??{alpha:1,beta:1},$=x.alpha+x.beta,b=x.alpha/$,k=1-b,z=new Set(o);let P=0;const R=[...a.prereqs[p]??[]],B=new Set;for(;R.length;){const G=R.shift();if(!B.has(G)){B.add(G),z.has(G)&&r[G]==="uncertain"&&P++;for(const U of a.prereqs[G]??[])B.has(U)||R.push(U)}}let N=0;const O=[...a.dependents[p]??[]],H=new Set;for(;O.length;){const G=O.shift();if(!H.has(G)){H.add(G),z.has(G)&&r[G]==="uncertain"&&N++;for(const U of a.dependents[G]??[])H.has(U)||O.push(U)}}const E=b*P+k*N;return{id:p,erv:E,strength:$}});return f.sort((p,x)=>Math.abs(p.erv-x.erv)>.01?x.erv-p.erv:p.strength-x.strength),((v=f[0])==null?void 0:v.id)??u[0]}function N7(o,n){return o.every(r=>n[r]!=="uncertain")}function B7(o,n){return o.every(r=>n[r.id]==="known"||n[r.id]==="unknown")}function I7(o,n,r){const a=r?`${r}_`:"",[l,u]=Sn(`${a}diagMode`,!1),[f,v]=Sn(`${a}diagSubMode`,"quick"),[p,x]=Sn(`${a}belief`,{}),[$,b]=Sn(`${a}targetNode`,null),[k,z]=Sn(`${a}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[P,R]=Sn(`${a}answeredQuestions`,new Set),[B,N]=Sn(`${a}betaBeliefs`,{}),[O,H]=Sn(`${a}quizNode`,null),E=ee.useMemo(()=>{const j=k.correct+k.incorrect;return j===0?.5:(k.correct+.5)/(j+1)},[k]),G=k.questionsAnswered,U=ee.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents)])].map(F=>({id:F})),[o]),X=ee.useMemo(()=>l&&f==="quick"?j7(U,p,o):[],[l,f,p,o,U]),W=ee.useMemo(()=>Object.keys(p).length>0||k.questionsAnswered>0,[p,k]),J=W?X:[],ve=ee.useMemo(()=>l&&f==="quick"?A7(U,p,o,E):null,[l,f,p,o,E,U]),ke=ee.useMemo(()=>l&&f==="quick"?C7(U,p,o,E):null,[l,f,p,o,E,U]),Te=ee.useMemo(()=>l&&f==="quick"&&W&&B7(U,p),[l,f,W,p,U]),je=ee.useMemo(()=>!l||f!=="deepdive"||!$?[]:[...R7($,o,U)],[l,f,$,o,U]),Pe=ee.useMemo(()=>f!=="deepdive"?{}:E7(je,B),[f,je,B]),Ke=ee.useMemo(()=>!l||f!=="deepdive"||je.length===0?null:D7(je,B,Pe,o),[l,f,je,B,Pe,o,U]),Ue=ee.useMemo(()=>!l||f!=="deepdive"||je.length===0?!1:N7(je,Pe),[l,f,je,Pe]),De=ee.useCallback((j,F)=>l?f==="deepdive"?je.includes(j)?(Pe[j]!=="uncertain"||H(j),!0):!1:p[j]==="unknown"?!0:F?(x(he=>G1(j,he,o)),H(null),!0):p[j]==="known"?(x(he=>{const we={...he};return delete we[j],we}),H(null),!0):(H(j),!0):!1,[l,f,p,o,je,Pe]),oe=ee.useCallback((j,F,he,we)=>{if(f==="deepdive"){const xe=(he==null?void 0:he.tests)??{[j]:1};N(qe=>P7(qe,xe,F))}else x(xe=>F?q7(j,xe,o):G1(j,xe,o));typeof we=="number"&&R(xe=>new Set([...xe,`${j}:${we}`])),z(xe=>({correct:xe.correct+(F?1:0),incorrect:xe.incorrect+(F?0:1),questionsAnswered:xe.questionsAnswered+1})),H(null)},[f,o]),ye=ee.useCallback(()=>{M7(),u(!1),v("quick"),x({}),N({}),H(null),b(null),z({correct:0,incorrect:0,questionsAnswered:0}),R(new Set)},[]),ae=ee.useCallback(j=>{v("deepdive"),b(j),N({}),x({}),H(null),z({correct:0,incorrect:0,questionsAnswered:0}),R(new Set),u(!0)},[]);return{diagMode:l,setDiagMode:u,mode:f,setMode:v,quizNode:O,setQuizNode:H,questionsAnswered:G,answeredQuestions:P,setAnsweredQuestions:R,getAnsweredIndices:j=>{const F=[];return P.forEach(he=>{const[we,xe]=he.split(":");we===j&&F.push(parseInt(xe,10))}),F},handleDiagClick:De,handleQuizAnswer:oe,resetDiagnostic:ye,startDeepDive:ae,targetNode:$,belief:p,frontier:X,visibleFrontier:J,hasStarted:W,nextSuggestedId:ve,expectedRemaining:ke,pCorrect:E,sessionComplete:Te,betaBeliefs:B,subgraphIds:je,ddClassification:Pe,ddNextNodeId:Ke,ddComplete:Ue}}function W1(o){return 6+o.level*2}function L7({edges:o,nodes:n,highlightedIds:r}){const a=ee.useMemo(()=>Object.fromEntries(n.map(l=>[l.id,l])),[n]);return _.jsx("g",{children:o.map(([l,u])=>{const f=a[l],v=a[u];if(!f||!v)return null;const p=(r==null?void 0:r.has(l))&&(r==null?void 0:r.has(u)),x=r&&!p,$=v.x-f.x,b=v.y-f.y,k=Math.sqrt($*$+b*b)||1,z=W1(v)+3,P=v.x-$/k*z,R=v.y-b/k*z,B=W1(f)+2,N=f.x+$/k*B,O=f.y+b/k*B,H=x?"#0f1825":p?"#4a9eff":"#2a3f5a",E=p?1.8:1,G=x?.15:p?1:.55,U=x?"url(#arrow-dim)":p?"url(#arrow-hi)":"url(#arrow-default)";return _.jsx("line",{x1:N,y1:O,x2:P,y2:R,stroke:H,strokeWidth:E,opacity:G,markerEnd:U},`${l}-${u}`)})})}function F7(o){return 6+o.level*2}function O7(o){return o<.4?8:o<.65?13:o<1?18:28}function H7({nodes:o,filteredIds:n,highlightedIds:r,selected:a,onSelect:l,onHover:u,lang:f,diagMode:v,belief:p,frontier:x,scale:$,scopeColors:b}){return _.jsx("g",{children:o.map(k=>{const z=F7(k),P=(b==null?void 0:b[k.scope])||"#4a9eff",R=n&&!n.has(k.id),B=r==null?void 0:r.has(k.id),N=a===k.id,O=r&&!B||R,H=f==="pl"?k.labelPl:k.label,E=O7($??1);let G=P,U=O?.15:.9,X=O?.2:.85,W=null,J=2;if(v){const ve=p[k.id],ke=x.includes(k.id);U=R?.1:.9,X=R?.15:.9,ve==="known"?(G="#27ae60",W="#2ecc71"):ve==="unknown"?(G="#c0392b",U=R?.1:.5,W="#e74c3c"):ke?(G="#f39c12",W="#f1c40f",J=3):(G=P,U=R?.1:.35)}return _.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>l(k.id===a?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(N||v&&W)&&_.jsx("circle",{cx:k.x,cy:k.y,r:z+(N?5:4),fill:"none",stroke:N?P:W,strokeWidth:N?2:J,opacity:N?.5:.9}),_.jsx("circle",{cx:k.x,cy:k.y,r:z,fill:G,fillOpacity:U,stroke:!v&&(B||N)?P:"none",strokeWidth:1.5}),_.jsx("text",{x:k.x,y:k.y+z+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:X,style:{pointerEvents:"none",userSelect:"none"},children:H.length>E?H.slice(0,E-1)+"…":H})]},k.id)})})}function G7({nodeId:o,nodes:n,adjacency:r,lang:a,SCOPE_COLORS:l,SCOPE_LABELS:u,SECTIONS:f}){var P,R;const v=n.find(B=>B.id===o);if(!v)return null;const p=(l==null?void 0:l[v.scope])??"#4a9eff",x=a==="pl"?v.labelPl:v.label,$=r.prereqs[o]||[],b=r.dependents[o]||[],k=Object.fromEntries(n.map(B=>[B.id,B])),z=B=>{var N,O;return a==="pl"?(N=k[B])==null?void 0:N.labelPl:(O=k[B])==null?void 0:O.label};return _.jsxs("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:`1px solid ${p}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",lineHeight:1.6,zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[_.jsx("div",{style:{color:p,fontWeight:700,fontSize:13,marginBottom:6},children:x}),_.jsxs("div",{style:{color:"#6b7d9a",fontSize:10,marginBottom:8},children:[(P=f==null?void 0:f[v.section])==null?void 0:P.label," · ",(R=u==null?void 0:u[v.scope])==null?void 0:R[a==="pl"?"pl":"en"]," · ",re("level",a)," ",v.level]}),$.length>0?_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:re("prerequisites",a)}),$.map(B=>_.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:10,lineHeight:1.7},children:["← ",z(B)]},B))]}):_.jsx("div",{style:{color:"#3a4d63",fontSize:10,fontStyle:"italic"},children:re("noPrereqs",a)}),b.length>0?_.jsxs("div",{style:{marginTop:10},children:[_.jsx("div",{style:{color:"#3dc9b0",fontSize:10,fontWeight:600,marginBottom:4},children:re("enables",a)}),b.map(B=>_.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:10,lineHeight:1.7},children:["→ ",z(B)]},B))]}):_.jsx("div",{style:{color:"#3a4d63",fontSize:10,fontStyle:"italic",marginTop:8},children:re("noDependents",a)})]})}class Ht{constructor(n,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=a}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Ht(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Qt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Qt(r,Ht.range(this,n))}}class te{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var a="KaTeX parse error: "+n,l,u,f=r&&r.loc;if(f&&f.start<=f.end){var v=f.lexer.input;l=f.start,u=f.end,l===v.length?a+=" at end of input: ":a+=" at position "+(l+1)+": ";var p=v.slice(l,u).replace(/[^]/g,"$&̲"),x;l>15?x="…"+v.slice(l-15,l):x=v.slice(0,l);var $;u+15<v.length?$=v.slice(u,u+15)+"…":$=v.slice(u),a+=x+p+$}var b=new Error(a);return b.name="ParseError",b.__proto__=te.prototype,b.position=l,l!=null&&u!=null&&(b.length=u-l),b.rawMessage=n,b}}te.prototype.__proto__=Error.prototype;var W7=/([A-Z])/g,Rl=o=>o.replace(W7,"-$1").toLowerCase(),U7={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},V7=/[&><"']/g,jt=o=>String(o).replace(V7,n=>U7[n]),$i=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?$i(o.body[0]):o:o.type==="font"?$i(o.body):o,K7=new Set(["mathord","textord","atom"]),Wn=o=>K7.has($i(o).type),Q7=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},Zo={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Y7(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Dl{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in Zo)if(Zo.hasOwnProperty(r)){var a=Zo[r];this[r]=n[r]!==void 0?a.processor?a.processor(n[r]):n[r]:Y7(a)}}reportNonstrict(n,r,a){var l=this.strict;if(typeof l=="function"&&(l=l(n,r,a)),!(!l||l==="ignore")){if(l===!0||l==="error")throw new te("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),a);l==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,a){var l=this.strict;if(typeof l=="function")try{l=l(n,r,a)}catch{l="error"}return!l||l==="ignore"?!1:l===!0||l==="error"?!0:l==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=Q7(n.url);if(r==null)return!1;n.protocol=r}var a=typeof this.trust=="function"?this.trust(n):this.trust;return!!a}}class gr{constructor(n,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=a}sup(){return Tn[X7[this.id]]}sub(){return Tn[Z7[this.id]]}fracNum(){return Tn[J7[this.id]]}fracDen(){return Tn[e8[this.id]]}cramp(){return Tn[t8[this.id]]}text(){return Tn[n8[this.id]]}isTight(){return this.size>=2}}var Nl=0,ta=1,_0=2,Hn=3,zi=4,an=5,k0=6,Rt=7,Tn=[new gr(Nl,0,!1),new gr(ta,0,!0),new gr(_0,1,!1),new gr(Hn,1,!0),new gr(zi,2,!1),new gr(an,2,!0),new gr(k0,3,!1),new gr(Rt,3,!0)],X7=[zi,an,zi,an,k0,Rt,k0,Rt],Z7=[an,an,an,an,Rt,Rt,Rt,Rt],J7=[_0,Hn,zi,an,k0,Rt,k0,Rt],e8=[Hn,Hn,an,an,Rt,Rt,Rt,Rt],t8=[ta,ta,Hn,Hn,an,an,Rt,Rt],n8=[Nl,ta,_0,Hn,_0,Hn,_0,Hn],Me={DISPLAY:Tn[Nl],TEXT:Tn[_0],SCRIPT:Tn[zi],SCRIPTSCRIPT:Tn[k0]},bl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function r8(o){for(var n=0;n<bl.length;n++)for(var r=bl[n],a=0;a<r.blocks.length;a++){var l=r.blocks[a];if(o>=l[0]&&o<=l[1])return r.name}return null}var Jo=[];bl.forEach(o=>o.blocks.forEach(n=>Jo.push(...n)));function Ld(o){for(var n=0;n<Jo.length;n+=2)if(o>=Jo[n]&&o<=Jo[n+1])return!0;return!1}var $0=80,i8=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},o8=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},a8=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},s8=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},l8=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},u8=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},c8=function(n,r,a){var l=a-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+l+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},d8=function(n,r,a){r=1e3*r;var l="";switch(n){case"sqrtMain":l=i8(r,$0);break;case"sqrtSize1":l=o8(r,$0);break;case"sqrtSize2":l=a8(r,$0);break;case"sqrtSize3":l=s8(r,$0);break;case"sqrtSize4":l=l8(r,$0);break;case"sqrtTall":l=c8(r,$0,a)}return l},f8=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},U1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},m8=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Ti{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var Mn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ho={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},V1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function h8(o,n){Mn[o]=n}function Bl(o,n,r){if(!Mn[n])throw new Error("Font metrics not found for font: "+n+".");var a=o.charCodeAt(0),l=Mn[n][a];if(!l&&o[0]in V1&&(a=V1[o[0]].charCodeAt(0),l=Mn[n][a]),!l&&r==="text"&&Ld(a)&&(l=Mn[n][77]),l)return{depth:l[0],height:l[1],italic:l[2],skew:l[3],width:l[4]}}var ol={};function p8(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!ol[n]){var r=ol[n]={cssEmPerMu:Ho.quad[n]/18};for(var a in Ho)Ho.hasOwnProperty(a)&&(r[a]=Ho[a][n])}return ol[n]}var v8=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],K1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Q1=function(n,r){return r.size<2?n:v8[n-1][r.size-1]};class On{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||On.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=K1[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a]);return new On(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:Q1(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:K1[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=Q1(On.BASESIZE,n);return this.size===r&&this.textSize===On.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==On.BASESIZE?["sizing","reset-size"+this.size,"size"+On.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=p8(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}On.BASESIZE=6;var $l={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},g8={ex:!0,em:!0,mu:!0},Fd=function(n){return typeof n!="string"&&(n=n.unit),n in $l||n in g8||n==="ex"},ot=function(n,r){var a;if(n.unit in $l)a=$l[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var l;if(r.style.isTight()?l=r.havingStyle(r.style.text()):l=r,n.unit==="ex")a=l.fontMetrics().xHeight;else if(n.unit==="em")a=l.fontMetrics().quad;else throw new te("Invalid unit: '"+n.unit+"'");l!==r&&(a*=l.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*a,r.maxSize)},se=function(n){return+n.toFixed(4)+"em"},wr=function(n){return n.filter(r=>r).join(" ")},Od=function(n,r,a){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var l=r.getColor();l&&(this.style.color=l)}},Hd=function(n){var r=document.createElement(n);r.className=wr(this.classes);for(var a in this.style)this.style.hasOwnProperty(a)&&(r.style[a]=this.style[a]);for(var l in this.attributes)this.attributes.hasOwnProperty(l)&&r.setAttribute(l,this.attributes[l]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},y8=/[\s"'>/=\x00-\x1f]/,Gd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+jt(wr(this.classes))+'"');var a="";for(var l in this.style)this.style.hasOwnProperty(l)&&(a+=Rl(l)+":"+this.style[l]+";");a&&(r+=' style="'+jt(a)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(y8.test(u))throw new te("Invalid attribute name '"+u+"'");r+=" "+u+'="'+jt(this.attributes[u])+'"'}r+=">";for(var f=0;f<this.children.length;f++)r+=this.children[f].toMarkup();return r+="</"+n+">",r};class Mi{constructor(n,r,a,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Od.call(this,n,a,l),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Hd.call(this,"span")}toMarkup(){return Gd.call(this,"span")}}class Il{constructor(n,r,a,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Od.call(this,r,l),this.children=a||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Hd.call(this,"a")}toMarkup(){return Gd.call(this,"a")}}class x8{constructor(n,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=a}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+jt(this.src)+'"'+(' alt="'+jt(this.alt)+'"'),r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=Rl(a)+":"+this.style[a]+";");return r&&(n+=' style="'+jt(r)+'"'),n+="'/>",n}}var w8={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class sn{constructor(n,r,a,l,u,f,v,p){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=a||0,this.italic=l||0,this.skew=u||0,this.width=f||0,this.classes=v||[],this.style=p||{},this.maxFontSize=0;var x=r8(this.text.charCodeAt(0));x&&this.classes.push(x+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=w8[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=se(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=wr(this.classes));for(var a in this.style)this.style.hasOwnProperty(a)&&(r=r||document.createElement("span"),r.style[a]=this.style[a]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=jt(wr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+this.italic+"em;");for(var l in this.style)this.style.hasOwnProperty(l)&&(a+=Rl(l)+":"+this.style[l]+";");a&&(n=!0,r+=' style="'+jt(a)+'"');var u=jt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Gn{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);for(var l=0;l<this.children.length;l++)r.appendChild(this.children[l].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+jt(this.attributes[r])+'"');n+=">";for(var a=0;a<this.children.length;a++)n+=this.children[a].toMarkup();return n+="</svg>",n}}class br{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",U1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+jt(this.alternate)+'"/>':'<path d="'+jt(U1[this.pathName])+'"/>'}}class _l{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+jt(this.attributes[r])+'"');return n+="/>",n}}function Y1(o){if(o instanceof sn)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function b8(o){if(o instanceof Mi)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var $8={bin:1,close:1,inner:1,open:1,punct:1,rel:1},_8={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ye={math:{},text:{}};function d(o,n,r,a,l,u){Ye[o][l]={font:n,group:r,replace:a},u&&a&&(Ye[o][a]=Ye[o][l])}var h="math",K="text",g="main",T="ams",tt="accent-token",de="bin",Dt="close",T0="inner",_e="mathord",vt="op-token",Yt="open",sa="punct",M="rel",Un="spacing",A="textord";d(h,g,M,"≡","\\equiv",!0);d(h,g,M,"≺","\\prec",!0);d(h,g,M,"≻","\\succ",!0);d(h,g,M,"∼","\\sim",!0);d(h,g,M,"⊥","\\perp");d(h,g,M,"⪯","\\preceq",!0);d(h,g,M,"⪰","\\succeq",!0);d(h,g,M,"≃","\\simeq",!0);d(h,g,M,"∣","\\mid",!0);d(h,g,M,"≪","\\ll",!0);d(h,g,M,"≫","\\gg",!0);d(h,g,M,"≍","\\asymp",!0);d(h,g,M,"∥","\\parallel");d(h,g,M,"⋈","\\bowtie",!0);d(h,g,M,"⌣","\\smile",!0);d(h,g,M,"⊑","\\sqsubseteq",!0);d(h,g,M,"⊒","\\sqsupseteq",!0);d(h,g,M,"≐","\\doteq",!0);d(h,g,M,"⌢","\\frown",!0);d(h,g,M,"∋","\\ni",!0);d(h,g,M,"∝","\\propto",!0);d(h,g,M,"⊢","\\vdash",!0);d(h,g,M,"⊣","\\dashv",!0);d(h,g,M,"∋","\\owns");d(h,g,sa,".","\\ldotp");d(h,g,sa,"⋅","\\cdotp");d(h,g,A,"#","\\#");d(K,g,A,"#","\\#");d(h,g,A,"&","\\&");d(K,g,A,"&","\\&");d(h,g,A,"ℵ","\\aleph",!0);d(h,g,A,"∀","\\forall",!0);d(h,g,A,"ℏ","\\hbar",!0);d(h,g,A,"∃","\\exists",!0);d(h,g,A,"∇","\\nabla",!0);d(h,g,A,"♭","\\flat",!0);d(h,g,A,"ℓ","\\ell",!0);d(h,g,A,"♮","\\natural",!0);d(h,g,A,"♣","\\clubsuit",!0);d(h,g,A,"℘","\\wp",!0);d(h,g,A,"♯","\\sharp",!0);d(h,g,A,"♢","\\diamondsuit",!0);d(h,g,A,"ℜ","\\Re",!0);d(h,g,A,"♡","\\heartsuit",!0);d(h,g,A,"ℑ","\\Im",!0);d(h,g,A,"♠","\\spadesuit",!0);d(h,g,A,"§","\\S",!0);d(K,g,A,"§","\\S");d(h,g,A,"¶","\\P",!0);d(K,g,A,"¶","\\P");d(h,g,A,"†","\\dag");d(K,g,A,"†","\\dag");d(K,g,A,"†","\\textdagger");d(h,g,A,"‡","\\ddag");d(K,g,A,"‡","\\ddag");d(K,g,A,"‡","\\textdaggerdbl");d(h,g,Dt,"⎱","\\rmoustache",!0);d(h,g,Yt,"⎰","\\lmoustache",!0);d(h,g,Dt,"⟯","\\rgroup",!0);d(h,g,Yt,"⟮","\\lgroup",!0);d(h,g,de,"∓","\\mp",!0);d(h,g,de,"⊖","\\ominus",!0);d(h,g,de,"⊎","\\uplus",!0);d(h,g,de,"⊓","\\sqcap",!0);d(h,g,de,"∗","\\ast");d(h,g,de,"⊔","\\sqcup",!0);d(h,g,de,"◯","\\bigcirc",!0);d(h,g,de,"∙","\\bullet",!0);d(h,g,de,"‡","\\ddagger");d(h,g,de,"≀","\\wr",!0);d(h,g,de,"⨿","\\amalg");d(h,g,de,"&","\\And");d(h,g,M,"⟵","\\longleftarrow",!0);d(h,g,M,"⇐","\\Leftarrow",!0);d(h,g,M,"⟸","\\Longleftarrow",!0);d(h,g,M,"⟶","\\longrightarrow",!0);d(h,g,M,"⇒","\\Rightarrow",!0);d(h,g,M,"⟹","\\Longrightarrow",!0);d(h,g,M,"↔","\\leftrightarrow",!0);d(h,g,M,"⟷","\\longleftrightarrow",!0);d(h,g,M,"⇔","\\Leftrightarrow",!0);d(h,g,M,"⟺","\\Longleftrightarrow",!0);d(h,g,M,"↦","\\mapsto",!0);d(h,g,M,"⟼","\\longmapsto",!0);d(h,g,M,"↗","\\nearrow",!0);d(h,g,M,"↩","\\hookleftarrow",!0);d(h,g,M,"↪","\\hookrightarrow",!0);d(h,g,M,"↘","\\searrow",!0);d(h,g,M,"↼","\\leftharpoonup",!0);d(h,g,M,"⇀","\\rightharpoonup",!0);d(h,g,M,"↙","\\swarrow",!0);d(h,g,M,"↽","\\leftharpoondown",!0);d(h,g,M,"⇁","\\rightharpoondown",!0);d(h,g,M,"↖","\\nwarrow",!0);d(h,g,M,"⇌","\\rightleftharpoons",!0);d(h,T,M,"≮","\\nless",!0);d(h,T,M,"","\\@nleqslant");d(h,T,M,"","\\@nleqq");d(h,T,M,"⪇","\\lneq",!0);d(h,T,M,"≨","\\lneqq",!0);d(h,T,M,"","\\@lvertneqq");d(h,T,M,"⋦","\\lnsim",!0);d(h,T,M,"⪉","\\lnapprox",!0);d(h,T,M,"⊀","\\nprec",!0);d(h,T,M,"⋠","\\npreceq",!0);d(h,T,M,"⋨","\\precnsim",!0);d(h,T,M,"⪹","\\precnapprox",!0);d(h,T,M,"≁","\\nsim",!0);d(h,T,M,"","\\@nshortmid");d(h,T,M,"∤","\\nmid",!0);d(h,T,M,"⊬","\\nvdash",!0);d(h,T,M,"⊭","\\nvDash",!0);d(h,T,M,"⋪","\\ntriangleleft");d(h,T,M,"⋬","\\ntrianglelefteq",!0);d(h,T,M,"⊊","\\subsetneq",!0);d(h,T,M,"","\\@varsubsetneq");d(h,T,M,"⫋","\\subsetneqq",!0);d(h,T,M,"","\\@varsubsetneqq");d(h,T,M,"≯","\\ngtr",!0);d(h,T,M,"","\\@ngeqslant");d(h,T,M,"","\\@ngeqq");d(h,T,M,"⪈","\\gneq",!0);d(h,T,M,"≩","\\gneqq",!0);d(h,T,M,"","\\@gvertneqq");d(h,T,M,"⋧","\\gnsim",!0);d(h,T,M,"⪊","\\gnapprox",!0);d(h,T,M,"⊁","\\nsucc",!0);d(h,T,M,"⋡","\\nsucceq",!0);d(h,T,M,"⋩","\\succnsim",!0);d(h,T,M,"⪺","\\succnapprox",!0);d(h,T,M,"≆","\\ncong",!0);d(h,T,M,"","\\@nshortparallel");d(h,T,M,"∦","\\nparallel",!0);d(h,T,M,"⊯","\\nVDash",!0);d(h,T,M,"⋫","\\ntriangleright");d(h,T,M,"⋭","\\ntrianglerighteq",!0);d(h,T,M,"","\\@nsupseteqq");d(h,T,M,"⊋","\\supsetneq",!0);d(h,T,M,"","\\@varsupsetneq");d(h,T,M,"⫌","\\supsetneqq",!0);d(h,T,M,"","\\@varsupsetneqq");d(h,T,M,"⊮","\\nVdash",!0);d(h,T,M,"⪵","\\precneqq",!0);d(h,T,M,"⪶","\\succneqq",!0);d(h,T,M,"","\\@nsubseteqq");d(h,T,de,"⊴","\\unlhd");d(h,T,de,"⊵","\\unrhd");d(h,T,M,"↚","\\nleftarrow",!0);d(h,T,M,"↛","\\nrightarrow",!0);d(h,T,M,"⇍","\\nLeftarrow",!0);d(h,T,M,"⇏","\\nRightarrow",!0);d(h,T,M,"↮","\\nleftrightarrow",!0);d(h,T,M,"⇎","\\nLeftrightarrow",!0);d(h,T,M,"△","\\vartriangle");d(h,T,A,"ℏ","\\hslash");d(h,T,A,"▽","\\triangledown");d(h,T,A,"◊","\\lozenge");d(h,T,A,"Ⓢ","\\circledS");d(h,T,A,"®","\\circledR");d(K,T,A,"®","\\circledR");d(h,T,A,"∡","\\measuredangle",!0);d(h,T,A,"∄","\\nexists");d(h,T,A,"℧","\\mho");d(h,T,A,"Ⅎ","\\Finv",!0);d(h,T,A,"⅁","\\Game",!0);d(h,T,A,"‵","\\backprime");d(h,T,A,"▲","\\blacktriangle");d(h,T,A,"▼","\\blacktriangledown");d(h,T,A,"■","\\blacksquare");d(h,T,A,"⧫","\\blacklozenge");d(h,T,A,"★","\\bigstar");d(h,T,A,"∢","\\sphericalangle",!0);d(h,T,A,"∁","\\complement",!0);d(h,T,A,"ð","\\eth",!0);d(K,g,A,"ð","ð");d(h,T,A,"╱","\\diagup");d(h,T,A,"╲","\\diagdown");d(h,T,A,"□","\\square");d(h,T,A,"□","\\Box");d(h,T,A,"◊","\\Diamond");d(h,T,A,"¥","\\yen",!0);d(K,T,A,"¥","\\yen",!0);d(h,T,A,"✓","\\checkmark",!0);d(K,T,A,"✓","\\checkmark");d(h,T,A,"ℶ","\\beth",!0);d(h,T,A,"ℸ","\\daleth",!0);d(h,T,A,"ℷ","\\gimel",!0);d(h,T,A,"ϝ","\\digamma",!0);d(h,T,A,"ϰ","\\varkappa");d(h,T,Yt,"┌","\\@ulcorner",!0);d(h,T,Dt,"┐","\\@urcorner",!0);d(h,T,Yt,"└","\\@llcorner",!0);d(h,T,Dt,"┘","\\@lrcorner",!0);d(h,T,M,"≦","\\leqq",!0);d(h,T,M,"⩽","\\leqslant",!0);d(h,T,M,"⪕","\\eqslantless",!0);d(h,T,M,"≲","\\lesssim",!0);d(h,T,M,"⪅","\\lessapprox",!0);d(h,T,M,"≊","\\approxeq",!0);d(h,T,de,"⋖","\\lessdot");d(h,T,M,"⋘","\\lll",!0);d(h,T,M,"≶","\\lessgtr",!0);d(h,T,M,"⋚","\\lesseqgtr",!0);d(h,T,M,"⪋","\\lesseqqgtr",!0);d(h,T,M,"≑","\\doteqdot");d(h,T,M,"≓","\\risingdotseq",!0);d(h,T,M,"≒","\\fallingdotseq",!0);d(h,T,M,"∽","\\backsim",!0);d(h,T,M,"⋍","\\backsimeq",!0);d(h,T,M,"⫅","\\subseteqq",!0);d(h,T,M,"⋐","\\Subset",!0);d(h,T,M,"⊏","\\sqsubset",!0);d(h,T,M,"≼","\\preccurlyeq",!0);d(h,T,M,"⋞","\\curlyeqprec",!0);d(h,T,M,"≾","\\precsim",!0);d(h,T,M,"⪷","\\precapprox",!0);d(h,T,M,"⊲","\\vartriangleleft");d(h,T,M,"⊴","\\trianglelefteq");d(h,T,M,"⊨","\\vDash",!0);d(h,T,M,"⊪","\\Vvdash",!0);d(h,T,M,"⌣","\\smallsmile");d(h,T,M,"⌢","\\smallfrown");d(h,T,M,"≏","\\bumpeq",!0);d(h,T,M,"≎","\\Bumpeq",!0);d(h,T,M,"≧","\\geqq",!0);d(h,T,M,"⩾","\\geqslant",!0);d(h,T,M,"⪖","\\eqslantgtr",!0);d(h,T,M,"≳","\\gtrsim",!0);d(h,T,M,"⪆","\\gtrapprox",!0);d(h,T,de,"⋗","\\gtrdot");d(h,T,M,"⋙","\\ggg",!0);d(h,T,M,"≷","\\gtrless",!0);d(h,T,M,"⋛","\\gtreqless",!0);d(h,T,M,"⪌","\\gtreqqless",!0);d(h,T,M,"≖","\\eqcirc",!0);d(h,T,M,"≗","\\circeq",!0);d(h,T,M,"≜","\\triangleq",!0);d(h,T,M,"∼","\\thicksim");d(h,T,M,"≈","\\thickapprox");d(h,T,M,"⫆","\\supseteqq",!0);d(h,T,M,"⋑","\\Supset",!0);d(h,T,M,"⊐","\\sqsupset",!0);d(h,T,M,"≽","\\succcurlyeq",!0);d(h,T,M,"⋟","\\curlyeqsucc",!0);d(h,T,M,"≿","\\succsim",!0);d(h,T,M,"⪸","\\succapprox",!0);d(h,T,M,"⊳","\\vartriangleright");d(h,T,M,"⊵","\\trianglerighteq");d(h,T,M,"⊩","\\Vdash",!0);d(h,T,M,"∣","\\shortmid");d(h,T,M,"∥","\\shortparallel");d(h,T,M,"≬","\\between",!0);d(h,T,M,"⋔","\\pitchfork",!0);d(h,T,M,"∝","\\varpropto");d(h,T,M,"◀","\\blacktriangleleft");d(h,T,M,"∴","\\therefore",!0);d(h,T,M,"∍","\\backepsilon");d(h,T,M,"▶","\\blacktriangleright");d(h,T,M,"∵","\\because",!0);d(h,T,M,"⋘","\\llless");d(h,T,M,"⋙","\\gggtr");d(h,T,de,"⊲","\\lhd");d(h,T,de,"⊳","\\rhd");d(h,T,M,"≂","\\eqsim",!0);d(h,g,M,"⋈","\\Join");d(h,T,M,"≑","\\Doteq",!0);d(h,T,de,"∔","\\dotplus",!0);d(h,T,de,"∖","\\smallsetminus");d(h,T,de,"⋒","\\Cap",!0);d(h,T,de,"⋓","\\Cup",!0);d(h,T,de,"⩞","\\doublebarwedge",!0);d(h,T,de,"⊟","\\boxminus",!0);d(h,T,de,"⊞","\\boxplus",!0);d(h,T,de,"⋇","\\divideontimes",!0);d(h,T,de,"⋉","\\ltimes",!0);d(h,T,de,"⋊","\\rtimes",!0);d(h,T,de,"⋋","\\leftthreetimes",!0);d(h,T,de,"⋌","\\rightthreetimes",!0);d(h,T,de,"⋏","\\curlywedge",!0);d(h,T,de,"⋎","\\curlyvee",!0);d(h,T,de,"⊝","\\circleddash",!0);d(h,T,de,"⊛","\\circledast",!0);d(h,T,de,"⋅","\\centerdot");d(h,T,de,"⊺","\\intercal",!0);d(h,T,de,"⋒","\\doublecap");d(h,T,de,"⋓","\\doublecup");d(h,T,de,"⊠","\\boxtimes",!0);d(h,T,M,"⇢","\\dashrightarrow",!0);d(h,T,M,"⇠","\\dashleftarrow",!0);d(h,T,M,"⇇","\\leftleftarrows",!0);d(h,T,M,"⇆","\\leftrightarrows",!0);d(h,T,M,"⇚","\\Lleftarrow",!0);d(h,T,M,"↞","\\twoheadleftarrow",!0);d(h,T,M,"↢","\\leftarrowtail",!0);d(h,T,M,"↫","\\looparrowleft",!0);d(h,T,M,"⇋","\\leftrightharpoons",!0);d(h,T,M,"↶","\\curvearrowleft",!0);d(h,T,M,"↺","\\circlearrowleft",!0);d(h,T,M,"↰","\\Lsh",!0);d(h,T,M,"⇈","\\upuparrows",!0);d(h,T,M,"↿","\\upharpoonleft",!0);d(h,T,M,"⇃","\\downharpoonleft",!0);d(h,g,M,"⊶","\\origof",!0);d(h,g,M,"⊷","\\imageof",!0);d(h,T,M,"⊸","\\multimap",!0);d(h,T,M,"↭","\\leftrightsquigarrow",!0);d(h,T,M,"⇉","\\rightrightarrows",!0);d(h,T,M,"⇄","\\rightleftarrows",!0);d(h,T,M,"↠","\\twoheadrightarrow",!0);d(h,T,M,"↣","\\rightarrowtail",!0);d(h,T,M,"↬","\\looparrowright",!0);d(h,T,M,"↷","\\curvearrowright",!0);d(h,T,M,"↻","\\circlearrowright",!0);d(h,T,M,"↱","\\Rsh",!0);d(h,T,M,"⇊","\\downdownarrows",!0);d(h,T,M,"↾","\\upharpoonright",!0);d(h,T,M,"⇂","\\downharpoonright",!0);d(h,T,M,"⇝","\\rightsquigarrow",!0);d(h,T,M,"⇝","\\leadsto");d(h,T,M,"⇛","\\Rrightarrow",!0);d(h,T,M,"↾","\\restriction");d(h,g,A,"‘","`");d(h,g,A,"$","\\$");d(K,g,A,"$","\\$");d(K,g,A,"$","\\textdollar");d(h,g,A,"%","\\%");d(K,g,A,"%","\\%");d(h,g,A,"_","\\_");d(K,g,A,"_","\\_");d(K,g,A,"_","\\textunderscore");d(h,g,A,"∠","\\angle",!0);d(h,g,A,"∞","\\infty",!0);d(h,g,A,"′","\\prime");d(h,g,A,"△","\\triangle");d(h,g,A,"Γ","\\Gamma",!0);d(h,g,A,"Δ","\\Delta",!0);d(h,g,A,"Θ","\\Theta",!0);d(h,g,A,"Λ","\\Lambda",!0);d(h,g,A,"Ξ","\\Xi",!0);d(h,g,A,"Π","\\Pi",!0);d(h,g,A,"Σ","\\Sigma",!0);d(h,g,A,"Υ","\\Upsilon",!0);d(h,g,A,"Φ","\\Phi",!0);d(h,g,A,"Ψ","\\Psi",!0);d(h,g,A,"Ω","\\Omega",!0);d(h,g,A,"A","Α");d(h,g,A,"B","Β");d(h,g,A,"E","Ε");d(h,g,A,"Z","Ζ");d(h,g,A,"H","Η");d(h,g,A,"I","Ι");d(h,g,A,"K","Κ");d(h,g,A,"M","Μ");d(h,g,A,"N","Ν");d(h,g,A,"O","Ο");d(h,g,A,"P","Ρ");d(h,g,A,"T","Τ");d(h,g,A,"X","Χ");d(h,g,A,"¬","\\neg",!0);d(h,g,A,"¬","\\lnot");d(h,g,A,"⊤","\\top");d(h,g,A,"⊥","\\bot");d(h,g,A,"∅","\\emptyset");d(h,T,A,"∅","\\varnothing");d(h,g,_e,"α","\\alpha",!0);d(h,g,_e,"β","\\beta",!0);d(h,g,_e,"γ","\\gamma",!0);d(h,g,_e,"δ","\\delta",!0);d(h,g,_e,"ϵ","\\epsilon",!0);d(h,g,_e,"ζ","\\zeta",!0);d(h,g,_e,"η","\\eta",!0);d(h,g,_e,"θ","\\theta",!0);d(h,g,_e,"ι","\\iota",!0);d(h,g,_e,"κ","\\kappa",!0);d(h,g,_e,"λ","\\lambda",!0);d(h,g,_e,"μ","\\mu",!0);d(h,g,_e,"ν","\\nu",!0);d(h,g,_e,"ξ","\\xi",!0);d(h,g,_e,"ο","\\omicron",!0);d(h,g,_e,"π","\\pi",!0);d(h,g,_e,"ρ","\\rho",!0);d(h,g,_e,"σ","\\sigma",!0);d(h,g,_e,"τ","\\tau",!0);d(h,g,_e,"υ","\\upsilon",!0);d(h,g,_e,"ϕ","\\phi",!0);d(h,g,_e,"χ","\\chi",!0);d(h,g,_e,"ψ","\\psi",!0);d(h,g,_e,"ω","\\omega",!0);d(h,g,_e,"ε","\\varepsilon",!0);d(h,g,_e,"ϑ","\\vartheta",!0);d(h,g,_e,"ϖ","\\varpi",!0);d(h,g,_e,"ϱ","\\varrho",!0);d(h,g,_e,"ς","\\varsigma",!0);d(h,g,_e,"φ","\\varphi",!0);d(h,g,de,"∗","*",!0);d(h,g,de,"+","+");d(h,g,de,"−","-",!0);d(h,g,de,"⋅","\\cdot",!0);d(h,g,de,"∘","\\circ",!0);d(h,g,de,"÷","\\div",!0);d(h,g,de,"±","\\pm",!0);d(h,g,de,"×","\\times",!0);d(h,g,de,"∩","\\cap",!0);d(h,g,de,"∪","\\cup",!0);d(h,g,de,"∖","\\setminus",!0);d(h,g,de,"∧","\\land");d(h,g,de,"∨","\\lor");d(h,g,de,"∧","\\wedge",!0);d(h,g,de,"∨","\\vee",!0);d(h,g,A,"√","\\surd");d(h,g,Yt,"⟨","\\langle",!0);d(h,g,Yt,"∣","\\lvert");d(h,g,Yt,"∥","\\lVert");d(h,g,Dt,"?","?");d(h,g,Dt,"!","!");d(h,g,Dt,"⟩","\\rangle",!0);d(h,g,Dt,"∣","\\rvert");d(h,g,Dt,"∥","\\rVert");d(h,g,M,"=","=");d(h,g,M,":",":");d(h,g,M,"≈","\\approx",!0);d(h,g,M,"≅","\\cong",!0);d(h,g,M,"≥","\\ge");d(h,g,M,"≥","\\geq",!0);d(h,g,M,"←","\\gets");d(h,g,M,">","\\gt",!0);d(h,g,M,"∈","\\in",!0);d(h,g,M,"","\\@not");d(h,g,M,"⊂","\\subset",!0);d(h,g,M,"⊃","\\supset",!0);d(h,g,M,"⊆","\\subseteq",!0);d(h,g,M,"⊇","\\supseteq",!0);d(h,T,M,"⊈","\\nsubseteq",!0);d(h,T,M,"⊉","\\nsupseteq",!0);d(h,g,M,"⊨","\\models");d(h,g,M,"←","\\leftarrow",!0);d(h,g,M,"≤","\\le");d(h,g,M,"≤","\\leq",!0);d(h,g,M,"<","\\lt",!0);d(h,g,M,"→","\\rightarrow",!0);d(h,g,M,"→","\\to");d(h,T,M,"≱","\\ngeq",!0);d(h,T,M,"≰","\\nleq",!0);d(h,g,Un," ","\\ ");d(h,g,Un," ","\\space");d(h,g,Un," ","\\nobreakspace");d(K,g,Un," ","\\ ");d(K,g,Un," "," ");d(K,g,Un," ","\\space");d(K,g,Un," ","\\nobreakspace");d(h,g,Un,null,"\\nobreak");d(h,g,Un,null,"\\allowbreak");d(h,g,sa,",",",");d(h,g,sa,";",";");d(h,T,de,"⊼","\\barwedge",!0);d(h,T,de,"⊻","\\veebar",!0);d(h,g,de,"⊙","\\odot",!0);d(h,g,de,"⊕","\\oplus",!0);d(h,g,de,"⊗","\\otimes",!0);d(h,g,A,"∂","\\partial",!0);d(h,g,de,"⊘","\\oslash",!0);d(h,T,de,"⊚","\\circledcirc",!0);d(h,T,de,"⊡","\\boxdot",!0);d(h,g,de,"△","\\bigtriangleup");d(h,g,de,"▽","\\bigtriangledown");d(h,g,de,"†","\\dagger");d(h,g,de,"⋄","\\diamond");d(h,g,de,"⋆","\\star");d(h,g,de,"◃","\\triangleleft");d(h,g,de,"▹","\\triangleright");d(h,g,Yt,"{","\\{");d(K,g,A,"{","\\{");d(K,g,A,"{","\\textbraceleft");d(h,g,Dt,"}","\\}");d(K,g,A,"}","\\}");d(K,g,A,"}","\\textbraceright");d(h,g,Yt,"{","\\lbrace");d(h,g,Dt,"}","\\rbrace");d(h,g,Yt,"[","\\lbrack",!0);d(K,g,A,"[","\\lbrack",!0);d(h,g,Dt,"]","\\rbrack",!0);d(K,g,A,"]","\\rbrack",!0);d(h,g,Yt,"(","\\lparen",!0);d(h,g,Dt,")","\\rparen",!0);d(K,g,A,"<","\\textless",!0);d(K,g,A,">","\\textgreater",!0);d(h,g,Yt,"⌊","\\lfloor",!0);d(h,g,Dt,"⌋","\\rfloor",!0);d(h,g,Yt,"⌈","\\lceil",!0);d(h,g,Dt,"⌉","\\rceil",!0);d(h,g,A,"\\","\\backslash");d(h,g,A,"∣","|");d(h,g,A,"∣","\\vert");d(K,g,A,"|","\\textbar",!0);d(h,g,A,"∥","\\|");d(h,g,A,"∥","\\Vert");d(K,g,A,"∥","\\textbardbl");d(K,g,A,"~","\\textasciitilde");d(K,g,A,"\\","\\textbackslash");d(K,g,A,"^","\\textasciicircum");d(h,g,M,"↑","\\uparrow",!0);d(h,g,M,"⇑","\\Uparrow",!0);d(h,g,M,"↓","\\downarrow",!0);d(h,g,M,"⇓","\\Downarrow",!0);d(h,g,M,"↕","\\updownarrow",!0);d(h,g,M,"⇕","\\Updownarrow",!0);d(h,g,vt,"∐","\\coprod");d(h,g,vt,"⋁","\\bigvee");d(h,g,vt,"⋀","\\bigwedge");d(h,g,vt,"⨄","\\biguplus");d(h,g,vt,"⋂","\\bigcap");d(h,g,vt,"⋃","\\bigcup");d(h,g,vt,"∫","\\int");d(h,g,vt,"∫","\\intop");d(h,g,vt,"∬","\\iint");d(h,g,vt,"∭","\\iiint");d(h,g,vt,"∏","\\prod");d(h,g,vt,"∑","\\sum");d(h,g,vt,"⨂","\\bigotimes");d(h,g,vt,"⨁","\\bigoplus");d(h,g,vt,"⨀","\\bigodot");d(h,g,vt,"∮","\\oint");d(h,g,vt,"∯","\\oiint");d(h,g,vt,"∰","\\oiiint");d(h,g,vt,"⨆","\\bigsqcup");d(h,g,vt,"∫","\\smallint");d(K,g,T0,"…","\\textellipsis");d(h,g,T0,"…","\\mathellipsis");d(K,g,T0,"…","\\ldots",!0);d(h,g,T0,"…","\\ldots",!0);d(h,g,T0,"⋯","\\@cdots",!0);d(h,g,T0,"⋱","\\ddots",!0);d(h,g,A,"⋮","\\varvdots");d(K,g,A,"⋮","\\varvdots");d(h,g,tt,"ˊ","\\acute");d(h,g,tt,"ˋ","\\grave");d(h,g,tt,"¨","\\ddot");d(h,g,tt,"~","\\tilde");d(h,g,tt,"ˉ","\\bar");d(h,g,tt,"˘","\\breve");d(h,g,tt,"ˇ","\\check");d(h,g,tt,"^","\\hat");d(h,g,tt,"⃗","\\vec");d(h,g,tt,"˙","\\dot");d(h,g,tt,"˚","\\mathring");d(h,g,_e,"","\\@imath");d(h,g,_e,"","\\@jmath");d(h,g,A,"ı","ı");d(h,g,A,"ȷ","ȷ");d(K,g,A,"ı","\\i",!0);d(K,g,A,"ȷ","\\j",!0);d(K,g,A,"ß","\\ss",!0);d(K,g,A,"æ","\\ae",!0);d(K,g,A,"œ","\\oe",!0);d(K,g,A,"ø","\\o",!0);d(K,g,A,"Æ","\\AE",!0);d(K,g,A,"Œ","\\OE",!0);d(K,g,A,"Ø","\\O",!0);d(K,g,tt,"ˊ","\\'");d(K,g,tt,"ˋ","\\`");d(K,g,tt,"ˆ","\\^");d(K,g,tt,"˜","\\~");d(K,g,tt,"ˉ","\\=");d(K,g,tt,"˘","\\u");d(K,g,tt,"˙","\\.");d(K,g,tt,"¸","\\c");d(K,g,tt,"˚","\\r");d(K,g,tt,"ˇ","\\v");d(K,g,tt,"¨",'\\"');d(K,g,tt,"˝","\\H");d(K,g,tt,"◯","\\textcircled");var Wd={"--":!0,"---":!0,"``":!0,"''":!0};d(K,g,A,"–","--",!0);d(K,g,A,"–","\\textendash");d(K,g,A,"—","---",!0);d(K,g,A,"—","\\textemdash");d(K,g,A,"‘","`",!0);d(K,g,A,"‘","\\textquoteleft");d(K,g,A,"’","'",!0);d(K,g,A,"’","\\textquoteright");d(K,g,A,"“","``",!0);d(K,g,A,"“","\\textquotedblleft");d(K,g,A,"”","''",!0);d(K,g,A,"”","\\textquotedblright");d(h,g,A,"°","\\degree",!0);d(K,g,A,"°","\\degree");d(K,g,A,"°","\\textdegree",!0);d(h,g,A,"£","\\pounds");d(h,g,A,"£","\\mathsterling",!0);d(K,g,A,"£","\\pounds");d(K,g,A,"£","\\textsterling",!0);d(h,T,A,"✠","\\maltese");d(K,T,A,"✠","\\maltese");var X1='0123456789/@."';for(var al=0;al<X1.length;al++){var Z1=X1.charAt(al);d(h,g,A,Z1,Z1)}var J1='0123456789!@*()-=+";:?/.,';for(var sl=0;sl<J1.length;sl++){var ed=J1.charAt(sl);d(K,g,A,ed,ed)}var na="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var ll=0;ll<na.length;ll++){var Go=na.charAt(ll);d(h,g,_e,Go,Go),d(K,g,A,Go,Go)}d(h,T,A,"C","ℂ");d(K,T,A,"C","ℂ");d(h,T,A,"H","ℍ");d(K,T,A,"H","ℍ");d(h,T,A,"N","ℕ");d(K,T,A,"N","ℕ");d(h,T,A,"P","ℙ");d(K,T,A,"P","ℙ");d(h,T,A,"Q","ℚ");d(K,T,A,"Q","ℚ");d(h,T,A,"R","ℝ");d(K,T,A,"R","ℝ");d(h,T,A,"Z","ℤ");d(K,T,A,"Z","ℤ");d(h,g,_e,"h","ℎ");d(K,g,_e,"h","ℎ");var ze="";for(var Pt=0;Pt<na.length;Pt++){var lt=na.charAt(Pt);ze=String.fromCharCode(55349,56320+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56372+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56424+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56580+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56684+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56736+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56788+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56840+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56944+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),Pt<26&&(ze=String.fromCharCode(55349,56632+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze),ze=String.fromCharCode(55349,56476+Pt),d(h,g,_e,lt,ze),d(K,g,A,lt,ze))}ze="𝕜";d(h,g,_e,"k",ze);d(K,g,A,"k",ze);for(var Ur=0;Ur<10;Ur++){var yr=Ur.toString();ze=String.fromCharCode(55349,57294+Ur),d(h,g,_e,yr,ze),d(K,g,A,yr,ze),ze=String.fromCharCode(55349,57314+Ur),d(h,g,_e,yr,ze),d(K,g,A,yr,ze),ze=String.fromCharCode(55349,57324+Ur),d(h,g,_e,yr,ze),d(K,g,A,yr,ze),ze=String.fromCharCode(55349,57334+Ur),d(h,g,_e,yr,ze),d(K,g,A,yr,ze)}var kl="ÐÞþ";for(var ul=0;ul<kl.length;ul++){var Wo=kl.charAt(ul);d(h,g,_e,Wo,Wo),d(K,g,A,Wo,Wo)}var Uo=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],td=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],k8=function(n,r){var a=n.charCodeAt(0),l=n.charCodeAt(1),u=(a-55296)*1024+(l-56320)+65536,f=r==="math"?0:1;if(119808<=u&&u<120484){var v=Math.floor((u-119808)/26);return[Uo[v][2],Uo[v][f]]}else if(120782<=u&&u<=120831){var p=Math.floor((u-120782)/10);return[td[p][2],td[p][f]]}else{if(u===120485||u===120486)return[Uo[0][2],Uo[0][f]];if(120486<u&&u<120782)return["",""];throw new te("Unsupported character: "+n)}},la=function(n,r,a){return Ye[a][n]&&Ye[a][n].replace&&(n=Ye[a][n].replace),{value:n,metrics:Bl(n,r,a)}},Et=function(n,r,a,l,u){var f=la(n,r,a),v=f.metrics;n=f.value;var p;if(v){var x=v.italic;(a==="text"||l&&l.font==="mathit")&&(x=0),p=new sn(n,v.height,v.depth,x,v.skew,v.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+a+"'")),p=new sn(n,0,0,0,0,0,u);if(l){p.maxFontSize=l.sizeMultiplier,l.style.isTight()&&p.classes.push("mtight");var $=l.getColor();$&&(p.style.color=$)}return p},Ll=function(n,r,a,l){return l===void 0&&(l=[]),a.font==="boldsymbol"&&la(n,"Main-Bold",r).metrics?Et(n,"Main-Bold",r,a,l.concat(["mathbf"])):n==="\\"||Ye[r][n].font==="main"?Et(n,"Main-Regular",r,a,l):Et(n,"AMS-Regular",r,a,l.concat(["amsrm"]))},z8=function(n,r,a,l,u){return u!=="textord"&&la(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ua=function(n,r,a){var l=n.mode,u=n.text,f=["mord"],v=l==="math"||l==="text"&&r.font,p=v?r.font:r.fontFamily,x="",$="";if(u.charCodeAt(0)===55349&&([x,$]=k8(u,l)),x.length>0)return Et(u,x,l,r,f.concat($));if(p){var b,k;if(p==="boldsymbol"){var z=z8(u,l,r,f,a);b=z.fontName,k=[z.fontClass]}else v?(b=zl[p].fontName,k=[p]):(b=Vo(p,r.fontWeight,r.fontShape),k=[p,r.fontWeight,r.fontShape]);if(la(u,b,l).metrics)return Et(u,b,l,r,f.concat(k));if(Wd.hasOwnProperty(u)&&b.slice(0,10)==="Typewriter"){for(var P=[],R=0;R<u.length;R++)P.push(Et(u[R],b,l,r,f.concat(k)));return Vn(P)}}if(a==="mathord")return Et(u,"Math-Italic",l,r,f.concat(["mathnormal"]));if(a==="textord"){var B=Ye[l][u]&&Ye[l][u].font;if(B==="ams"){var N=Vo("amsrm",r.fontWeight,r.fontShape);return Et(u,N,l,r,f.concat("amsrm",r.fontWeight,r.fontShape))}else if(B==="main"||!B){var O=Vo("textrm",r.fontWeight,r.fontShape);return Et(u,O,l,r,f.concat(r.fontWeight,r.fontShape))}else{var H=Vo(B,r.fontWeight,r.fontShape);return Et(u,H,l,r,f.concat(H,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+a+" in makeOrd")},S8=(o,n)=>{if(wr(o.classes)!==wr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a in o.style)if(o.style.hasOwnProperty(a)&&o.style[a]!==n.style[a])return!1;for(var l in n.style)if(n.style.hasOwnProperty(l)&&o.style[l]!==n.style[l])return!1;return!0},Ud=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],a=o[n+1];r instanceof sn&&a instanceof sn&&S8(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,o.splice(n+1,1),n--)}return o},Fl=function(n){for(var r=0,a=0,l=0,u=0;u<n.children.length;u++){var f=n.children[u];f.height>r&&(r=f.height),f.depth>a&&(a=f.depth),f.maxFontSize>l&&(l=f.maxFontSize)}n.height=r,n.depth=a,n.maxFontSize=l},Y=function(n,r,a,l){var u=new Mi(n,r,a,l);return Fl(u),u},$r=(o,n,r,a)=>new Mi(o,n,r,a),z0=function(n,r,a){var l=Y([n],[],r);return l.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),l.style.borderBottomWidth=se(l.height),l.maxFontSize=1,l},T8=function(n,r,a,l){var u=new Il(n,r,a,l);return Fl(u),u},Vn=function(n){var r=new Ti(n);return Fl(r),r},S0=function(n,r){return n instanceof Ti?Y([],[n],r):n},M8=function(n){if(n.positionType==="individualShift"){for(var r=n.children,a=[r[0]],l=-r[0].shift-r[0].elem.depth,u=l,f=1;f<r.length;f++){var v=-r[f].shift-u-r[f].elem.depth,p=v-(r[f-1].elem.height+r[f-1].elem.depth);u=u+v,a.push({type:"kern",size:p}),a.push(r[f])}return{children:a,depth:l}}var x;if(n.positionType==="top"){for(var $=n.positionData,b=0;b<n.children.length;b++){var k=n.children[b];$-=k.type==="kern"?k.size:k.elem.height+k.elem.depth}x=$}else if(n.positionType==="bottom")x=-n.positionData;else{var z=n.children[0];if(z.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")x=-z.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")x=-z.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:x}},He=function(n,r){for(var{children:a,depth:l}=M8(n),u=0,f=0;f<a.length;f++){var v=a[f];if(v.type==="elem"){var p=v.elem;u=Math.max(u,p.maxFontSize,p.height)}}u+=2;var x=Y(["pstrut"],[]);x.style.height=se(u);for(var $=[],b=l,k=l,z=l,P=0;P<a.length;P++){var R=a[P];if(R.type==="kern")z+=R.size;else{var B=R.elem,N=R.wrapperClasses||[],O=R.wrapperStyle||{},H=Y(N,[x,B],void 0,O);H.style.top=se(-u-z-B.depth),R.marginLeft&&(H.style.marginLeft=R.marginLeft),R.marginRight&&(H.style.marginRight=R.marginRight),$.push(H),z+=B.height+B.depth}b=Math.min(b,z),k=Math.max(k,z)}var E=Y(["vlist"],$);E.style.height=se(k);var G;if(b<0){var U=Y([],[]),X=Y(["vlist"],[U]);X.style.height=se(-b);var W=Y(["vlist-s"],[new sn("​")]);G=[Y(["vlist-r"],[E,W]),Y(["vlist-r"],[X])]}else G=[Y(["vlist-r"],[E])];var J=Y(["vlist-t"],G);return G.length===2&&J.classes.push("vlist-t2"),J.height=k,J.depth=-b,J},Vd=(o,n)=>{var r=Y(["mspace"],[],n),a=ot(o,n);return r.style.marginRight=se(a),r},Vo=function(n,r,a){var l="";switch(n){case"amsrm":l="AMS";break;case"textrm":l="Main";break;case"textsf":l="SansSerif";break;case"texttt":l="Typewriter";break;default:l=n}var u;return r==="textbf"&&a==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",l+"-"+u},zl={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Kd={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Qd=function(n,r){var[a,l,u]=Kd[n],f=new br(a),v=new Gn([f],{width:se(l),height:se(u),style:"width:"+se(l),viewBox:"0 0 "+1e3*l+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),p=$r(["overlay"],[v],r);return p.height=u,p.style.height=se(u),p.style.width=se(l),p},it={number:3,unit:"mu"},Vr={number:4,unit:"mu"},Fn={number:5,unit:"mu"},q8={mord:{mop:it,mbin:Vr,mrel:Fn,minner:it},mop:{mord:it,mop:it,mrel:Fn,minner:it},mbin:{mord:Vr,mop:Vr,mopen:Vr,minner:Vr},mrel:{mord:Fn,mop:Fn,mopen:Fn,minner:Fn},mopen:{},mclose:{mop:it,mbin:Vr,mrel:Fn,minner:it},mpunct:{mord:it,mop:it,mrel:Fn,mopen:it,mclose:it,mpunct:it,minner:it},minner:{mord:it,mop:it,mbin:Vr,mrel:Fn,mopen:it,mpunct:it,minner:it}},j8={mord:{mop:it},mop:{mord:it,mop:it},mbin:{},mrel:{},mopen:{},mclose:{mop:it},mpunct:{},minner:{mop:it}},Yd={},ra={},ia={};function ue(o){for(var{type:n,names:r,props:a,handler:l,htmlBuilder:u,mathmlBuilder:f}=o,v={type:n,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:l},p=0;p<r.length;++p)Yd[r[p]]=v;n&&(u&&(ra[n]=u),f&&(ia[n]=f))}function Kr(o){var{type:n,htmlBuilder:r,mathmlBuilder:a}=o;ue({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var oa=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},ft=function(n){return n.type==="ordgroup"?n.body:[n]},A8=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),C8=new Set(["rightmost","mrel","mclose","mpunct"]),P8={display:Me.DISPLAY,text:Me.TEXT,script:Me.SCRIPT,scriptscript:Me.SCRIPTSCRIPT},E8={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},xt=function(n,r,a,l){l===void 0&&(l=[null,null]);for(var u=[],f=0;f<n.length;f++){var v=Ie(n[f],r);if(v instanceof Ti){var p=v.children;u.push(...p)}else u.push(v)}if(Ud(u),!a)return u;var x=r;if(n.length===1){var $=n[0];$.type==="sizing"?x=r.havingSize($.size):$.type==="styling"&&(x=r.havingStyle(P8[$.style]))}var b=Y([l[0]||"leftmost"],[],r),k=Y([l[1]||"rightmost"],[],r),z=a==="root";return nd(u,(P,R)=>{var B=R.classes[0],N=P.classes[0];B==="mbin"&&C8.has(N)?R.classes[0]="mord":N==="mbin"&&A8.has(B)&&(P.classes[0]="mord")},{node:b},k,z),nd(u,(P,R)=>{var B=Sl(R),N=Sl(P),O=B&&N?P.hasClass("mtight")?j8[B][N]:q8[B][N]:null;if(O)return Vd(O,x)},{node:b},k,z),u},nd=function o(n,r,a,l,u){l&&n.push(l);for(var f=0;f<n.length;f++){var v=n[f],p=Xd(v);if(p){o(p.children,r,a,null,u);continue}var x=!v.hasClass("mspace");if(x){var $=r(v,a.node);$&&(a.insertAfter?a.insertAfter($):(n.unshift($),f++))}x?a.node=v:u&&v.hasClass("newline")&&(a.node=Y(["leftmost"])),a.insertAfter=(b=>k=>{n.splice(b+1,0,k),f++})(f)}l&&n.pop()},Xd=function(n){return n instanceof Ti||n instanceof Il||n instanceof Mi&&n.hasClass("enclosing")?n:null},R8=function o(n,r){var a=Xd(n);if(a){var l=a.children;if(l.length){if(r==="right")return o(l[l.length-1],"right");if(r==="left")return o(l[0],"left")}}return n},Sl=function(n,r){return n?(r&&(n=R8(n,r)),E8[n.classes[0]]||null):null},Si=function(n,r){var a=["nulldelimiter"].concat(n.baseSizingClasses());return Y(r.concat(a))},Ie=function(n,r,a){if(!n)return Y();if(ra[n.type]){var l=ra[n.type](n,r);if(a&&r.size!==a.size){l=Y(r.sizingClasses(a),[l],r);var u=r.sizeMultiplier/a.sizeMultiplier;l.height*=u,l.depth*=u}return l}else throw new te("Got group of unknown type: '"+n.type+"'")};function Ko(o,n){var r=Y(["base"],o,n),a=Y(["strut"]);return a.style.height=se(r.height+r.depth),r.depth&&(a.style.verticalAlign=se(-r.depth)),r.children.unshift(a),r}function Tl(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var a=xt(o,n,"root"),l;a.length===2&&a[1].hasClass("tag")&&(l=a.pop());for(var u=[],f=[],v=0;v<a.length;v++)if(f.push(a[v]),a[v].hasClass("mbin")||a[v].hasClass("mrel")||a[v].hasClass("allowbreak")){for(var p=!1;v<a.length-1&&a[v+1].hasClass("mspace")&&!a[v+1].hasClass("newline");)v++,f.push(a[v]),a[v].hasClass("nobreak")&&(p=!0);p||(u.push(Ko(f,n)),f=[])}else a[v].hasClass("newline")&&(f.pop(),f.length>0&&(u.push(Ko(f,n)),f=[]),u.push(a[v]));f.length>0&&u.push(Ko(f,n));var x;r?(x=Ko(xt(r,n,!0)),x.classes=["tag"],u.push(x)):l&&u.push(l);var $=Y(["katex-html"],u);if($.setAttribute("aria-hidden","true"),x){var b=x.children[0];b.style.height=se($.height+$.depth),$.depth&&(b.style.verticalAlign=se(-$.depth))}return $}function Zd(o){return new Ti(o)}class ne{constructor(n,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=wr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof pt&&this.children[a+1]instanceof pt){for(var l=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof pt;)l+=this.children[++a].toText();n.appendChild(new pt(l).toNode())}else n.appendChild(this.children[a].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=jt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+jt(wr(this.classes))+'"'),n+=">";for(var a=0;a<this.children.length;a++)n+=this.children[a].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class pt{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return jt(this.toText())}toText(){return this.text}}class Jd{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",se(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+se(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var D8=new Set(["\\imath","\\jmath"]),N8=new Set(["mrow","mtable"]),ln=function(n,r,a){return Ye[r][n]&&Ye[r][n].replace&&n.charCodeAt(0)!==55349&&!(Wd.hasOwnProperty(n)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(n=Ye[r][n].replace),new pt(n)},Ol=function(n){return n.length===1?n[0]:new ne("mrow",n)},Hl=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var a=r.font;if(!a||a==="mathnormal")return null;var l=n.mode;if(a==="mathit")return"italic";if(a==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(a==="mathbf")return"bold";if(a==="mathbb")return"double-struck";if(a==="mathsfit")return"sans-serif-italic";if(a==="mathfrak")return"fraktur";if(a==="mathscr"||a==="mathcal")return"script";if(a==="mathsf")return"sans-serif";if(a==="mathtt")return"monospace";var u=n.text;if(D8.has(u))return null;Ye[l][u]&&Ye[l][u].replace&&(u=Ye[l][u].replace);var f=zl[a].fontName;return Bl(u,f,l)?zl[a].variant:null};function cl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof pt&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof pt&&r.text===","}else return!1}var Gt=function(n,r,a){if(n.length===1){var l=Ve(n[0],r);return a&&l instanceof ne&&l.type==="mo"&&(l.setAttribute("lspace","0em"),l.setAttribute("rspace","0em")),[l]}for(var u=[],f,v=0;v<n.length;v++){var p=Ve(n[v],r);if(p instanceof ne&&f instanceof ne){if(p.type==="mtext"&&f.type==="mtext"&&p.getAttribute("mathvariant")===f.getAttribute("mathvariant")){f.children.push(...p.children);continue}else if(p.type==="mn"&&f.type==="mn"){f.children.push(...p.children);continue}else if(cl(p)&&f.type==="mn"){f.children.push(...p.children);continue}else if(p.type==="mn"&&cl(f))p.children=[...f.children,...p.children],u.pop();else if((p.type==="msup"||p.type==="msub")&&p.children.length>=1&&(f.type==="mn"||cl(f))){var x=p.children[0];x instanceof ne&&x.type==="mn"&&(x.children=[...f.children,...x.children],u.pop())}else if(f.type==="mi"&&f.children.length===1){var $=f.children[0];if($ instanceof pt&&$.text==="̸"&&(p.type==="mo"||p.type==="mi"||p.type==="mn")){var b=p.children[0];b instanceof pt&&b.text.length>0&&(b.text=b.text.slice(0,1)+"̸"+b.text.slice(1),u.pop())}}}u.push(p),f=p}return u},_r=function(n,r,a){return Ol(Gt(n,r,a))},Ve=function(n,r){if(!n)return new ne("mrow");if(ia[n.type]){var a=ia[n.type](n,r);return a}else throw new te("Got group of unknown type: '"+n.type+"'")};function rd(o,n,r,a,l){var u=Gt(o,r),f;u.length===1&&u[0]instanceof ne&&N8.has(u[0].type)?f=u[0]:f=new ne("mrow",u);var v=new ne("annotation",[new pt(n)]);v.setAttribute("encoding","application/x-tex");var p=new ne("semantics",[f,v]),x=new ne("math",[p]);x.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&x.setAttribute("display","block");var $=l?"katex":"katex-mathml";return Y([$],[x])}var ef=function(n){return new On({style:n.displayMode?Me.DISPLAY:Me.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},tf=function(n,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),n=Y(a,[n])}return n},B8=function(n,r,a){var l=ef(a),u;if(a.output==="mathml")return rd(n,r,l,a.displayMode,!0);if(a.output==="html"){var f=Tl(n,l);u=Y(["katex"],[f])}else{var v=rd(n,r,l,a.displayMode,!1),p=Tl(n,l);u=Y(["katex"],[v,p])}return tf(u,a)},I8=function(n,r,a){var l=ef(a),u=Tl(n,l),f=Y(["katex"],[u]);return tf(f,a)},L8={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ca=function(n){var r=new ne("mo",[new pt(L8[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},F8={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},O8=new Set(["widehat","widecheck","widetilde","utilde"]),da=function(n,r){function a(){var v=4e5,p=n.label.slice(1);if(O8.has(p)){var x=n,$=x.base.type==="ordgroup"?x.base.body.length:1,b,k,z;if($>5)p==="widehat"||p==="widecheck"?(b=420,v=2364,z=.42,k=p+"4"):(b=312,v=2340,z=.34,k="tilde4");else{var P=[1,1,2,2,3,3][$];p==="widehat"||p==="widecheck"?(v=[0,1062,2364,2364,2364][P],b=[0,239,300,360,420][P],z=[0,.24,.3,.3,.36,.42][P],k=p+P):(v=[0,600,1033,2339,2340][P],b=[0,260,286,306,312][P],z=[0,.26,.286,.3,.306,.34][P],k="tilde"+P)}var R=new br(k),B=new Gn([R],{width:"100%",height:se(z),viewBox:"0 0 "+v+" "+b,preserveAspectRatio:"none"});return{span:$r([],[B],r),minWidth:0,height:z}}else{var N=[],O=F8[p],[H,E,G]=O,U=G/1e3,X=H.length,W,J;if(X===1){var ve=O[3];W=["hide-tail"],J=[ve]}else if(X===2)W=["halfarrow-left","halfarrow-right"],J=["xMinYMin","xMaxYMin"];else if(X===3)W=["brace-left","brace-center","brace-right"],J=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+X+" children.");for(var ke=0;ke<X;ke++){var Te=new br(H[ke]),je=new Gn([Te],{width:"400em",height:se(U),viewBox:"0 0 "+v+" "+G,preserveAspectRatio:J[ke]+" slice"}),Pe=$r([W[ke]],[je],r);if(X===1)return{span:Pe,minWidth:E,height:U};Pe.style.height=se(U),N.push(Pe)}return{span:Y(["stretchy"],N,r),minWidth:E,height:U}}}var{span:l,minWidth:u,height:f}=a();return l.height=f,l.style.height=se(f),u>0&&(l.style.minWidth=se(u)),l},H8=function(n,r,a,l,u){var f,v=n.height+n.depth+a+l;if(/fbox|color|angl/.test(r)){if(f=Y(["stretchy",r],[],u),r==="fbox"){var p=u.color&&u.getColor();p&&(f.style.borderColor=p)}}else{var x=[];/^[bx]cancel$/.test(r)&&x.push(new _l({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&x.push(new _l({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var $=new Gn(x,{width:"100%",height:se(v)});f=$r([],[$],u)}return f.height=v,f.style.height=se(v),f};function Ae(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function Gl(o){var n=fa(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function fa(o){return o&&(o.type==="atom"||_8.hasOwnProperty(o.type))?o:null}var Wl=(o,n)=>{var r,a,l;o&&o.type==="supsub"?(a=Ae(o.base,"accent"),r=a.base,o.base=r,l=b8(Ie(o,n)),o.base=a):(a=Ae(o,"accent"),r=a.base);var u=Ie(r,n.havingCrampedStyle()),f=a.isShifty&&Wn(r),v=0;if(f){var p=$i(r),x=Ie(p,n.havingCrampedStyle());v=Y1(x).skew}var $=a.label==="\\c",b=$?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),k;if(a.isStretchy)k=da(a,n),k=He({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:k,wrapperClasses:["svg-align"],wrapperStyle:v>0?{width:"calc(100% - "+se(2*v)+")",marginLeft:se(2*v)}:void 0}]});else{var z,P;a.label==="\\vec"?(z=Qd("vec",n),P=Kd.vec[1]):(z=ua({mode:a.mode,text:a.label},n,"textord"),z=Y1(z),z.italic=0,P=z.width,$&&(b+=z.depth)),k=Y(["accent-body"],[z]);var R=a.label==="\\textcircled";R&&(k.classes.push("accent-full"),b=u.height);var B=v;R||(B-=P/2),k.style.left=se(B),a.label==="\\textcircled"&&(k.style.top=".2em"),k=He({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-b},{type:"elem",elem:k}]})}var N=Y(["mord","accent"],[k],n);return l?(l.children[0]=N,l.height=Math.max(N.height,l.height),l.classes[0]="mord",l):N},nf=(o,n)=>{var r=o.isStretchy?ca(o.label):new ne("mo",[ln(o.label,o.mode)]),a=new ne("mover",[Ve(o.base,n),r]);return a.setAttribute("accent","true"),a},G8=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ue({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=oa(n[0]),a=!G8.test(o.funcName),l=!a||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:a,isShifty:l,base:r}},htmlBuilder:Wl,mathmlBuilder:nf});ue({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],a=o.parser.mode;return a==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Wl,mathmlBuilder:nf});ue({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0];return{type:"accentUnder",mode:r.mode,label:a,base:l}},htmlBuilder:(o,n)=>{var r=Ie(o.base,n),a=da(o,n),l=o.label==="\\utilde"?.12:0,u=He({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:l},{type:"elem",elem:r}]});return Y(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=ca(o.label),a=new ne("munder",[Ve(o.base,n),r]);return a.setAttribute("accentunder","true"),a}});var Qo=o=>{var n=new ne("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};ue({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:a,funcName:l}=o;return{type:"xArrow",mode:a.mode,label:l,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,a=n.havingStyle(r.sup()),l=S0(Ie(o.body,a,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";l.classes.push(u+"-arrow-pad");var f;o.below&&(a=n.havingStyle(r.sub()),f=S0(Ie(o.below,a,n),n),f.classes.push(u+"-arrow-pad"));var v=da(o,n),p=-n.fontMetrics().axisHeight+.5*v.height,x=-n.fontMetrics().axisHeight-.5*v.height-.111;(l.depth>.25||o.label==="\\xleftequilibrium")&&(x-=l.depth);var $;if(f){var b=-n.fontMetrics().axisHeight+f.height+.5*v.height+.111;$=He({positionType:"individualShift",children:[{type:"elem",elem:l,shift:x},{type:"elem",elem:v,shift:p},{type:"elem",elem:f,shift:b}]})}else $=He({positionType:"individualShift",children:[{type:"elem",elem:l,shift:x},{type:"elem",elem:v,shift:p}]});return $.children[0].children[0].children[1].classes.push("svg-align"),Y(["mrel","x-arrow"],[$],n)},mathmlBuilder(o,n){var r=ca(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(o.body){var l=Qo(Ve(o.body,n));if(o.below){var u=Qo(Ve(o.below,n));a=new ne("munderover",[r,u,l])}else a=new ne("mover",[r,l])}else if(o.below){var f=Qo(Ve(o.below,n));a=new ne("munder",[r,f])}else a=Qo(),a=new ne("mover",[r,a]);return a}});function rf(o,n){var r=xt(o.body,n,!0);return Y([o.mclass],r,n)}function of(o,n){var r,a=Gt(o.body,n);return o.mclass==="minner"?r=new ne("mpadded",a):o.mclass==="mord"?o.isCharacterBox?(r=a[0],r.type="mi"):r=new ne("mi",a):(o.isCharacterBox?(r=a[0],r.type="mo"):r=new ne("mo",a),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ue({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:ft(l),isCharacterBox:Wn(l)}},htmlBuilder:rf,mathmlBuilder:of});var ma=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};ue({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:ma(n[0]),body:ft(n[1]),isCharacterBox:Wn(n[1])}}});ue({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:a}=o,l=n[1],u=n[0],f;a!=="\\stackrel"?f=ma(l):f="mrel";var v={type:"op",mode:l.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:ft(l)},p={type:"supsub",mode:u.mode,base:v,sup:a==="\\underset"?null:u,sub:a==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:f,body:[p],isCharacterBox:Wn(p)}},htmlBuilder:rf,mathmlBuilder:of});ue({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:ma(n[0]),body:ft(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!0),a=Y([o.mclass],r,n);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(o,n){var r=Gt(o.body,n),a=new ne("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var W8={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},id=()=>({type:"styling",body:[],mode:"math",style:"display"}),od=o=>o.type==="textord"&&o.text==="@",U8=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function V8(o,n,r){var a=W8[o];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var l=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:a,mode:"math",family:"rel"},f=r.callFunction("\\Big",[u],[]),v=r.callFunction("\\\\cdright",[n[1]],[]),p={type:"ordgroup",mode:"math",body:[l,f,v]};return r.callFunction("\\\\cdparent",[p],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var x={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[x],[])}default:return{type:"textord",text:" ",mode:"math"}}}function K8(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new te("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var a=[],l=[a],u=0;u<n.length;u++){for(var f=n[u],v=id(),p=0;p<f.length;p++)if(!od(f[p]))v.body.push(f[p]);else{a.push(v),p+=1;var x=Gl(f[p]).text,$=new Array(2);if($[0]={type:"ordgroup",mode:"math",body:[]},$[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(x))if("<>AV".includes(x))for(var b=0;b<2;b++){for(var k=!0,z=p+1;z<f.length;z++){if(U8(f[z],x)){k=!1,p=z;break}if(od(f[z]))throw new te("Missing a "+x+" character to complete a CD arrow.",f[z]);$[b].body.push(f[z])}if(k)throw new te("Missing a "+x+" character to complete a CD arrow.",f[p])}else throw new te('Expected one of "<>AV=|." after @',f[p]);var P=V8(x,$,o),R={type:"styling",body:[P],mode:"math",style:"display"};a.push(R),v=id()}u%2===0?a.push(v):a.shift(),a=[],l.push(a)}o.gullet.endGroup(),o.gullet.endGroup();var B=new Array(l[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:l,arraystretch:1,addJot:!0,rowGaps:[null],cols:B,colSeparationType:"CD",hLinesBeforeRow:new Array(l.length+1).fill([])}}ue({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),a=S0(Ie(o.label,r,n),n);return a.classes.push("cd-label-"+o.side),a.style.bottom=se(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(o,n){var r=new ne("mrow",[Ve(o.label,n)]);return r=new ne("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new ne("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ue({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=S0(Ie(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new ne("mrow",[Ve(o.fragment,n)])}});ue({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,a=Ae(n[0],"ordgroup"),l=a.body,u="",f=0;f<l.length;f++){var v=Ae(l[f],"textord");u+=v.text}var p=parseInt(u),x;if(isNaN(p))throw new te("\\@char has non-numeric argument "+u);if(p<0||p>=1114111)throw new te("\\@char with invalid code point "+u);return p<=65535?x=String.fromCharCode(p):(p-=65536,x=String.fromCharCode((p>>10)+55296,(p&1023)+56320)),{type:"textord",mode:r.mode,text:x}}});var af=(o,n)=>{var r=xt(o.body,n.withColor(o.color),!1);return Vn(r)},sf=(o,n)=>{var r=Gt(o.body,n.withColor(o.color)),a=new ne("mstyle",r);return a.setAttribute("mathcolor",o.color),a};ue({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,a=Ae(n[0],"color-token").color,l=n[1];return{type:"color",mode:r.mode,color:a,body:ft(l)}},htmlBuilder:af,mathmlBuilder:sf});ue({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:a}=o,l=Ae(n[0],"color-token").color;r.gullet.macros.set("\\current@color",l);var u=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:l,body:u}},htmlBuilder:af,mathmlBuilder:sf});ue({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:a}=o,l=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,u=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:u,size:l&&Ae(l,"size").value}},htmlBuilder(o,n){var r=Y(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=se(ot(o.size,n)))),r},mathmlBuilder(o,n){var r=new ne("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",se(ot(o.size,n)))),r}});var Ml={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},lf=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new te("Expected a control sequence",o);return n},Q8=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},uf=(o,n,r,a)=>{var l=o.gullet.macros.get(r.text);l==null&&(r.noexpand=!0,l={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,l,a)};ue({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var a=n.fetch();if(Ml[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=Ml[a.text]),Ae(n.parseFunction(),"internal");throw new te("Invalid token after macro prefix",a)}});ue({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=n.gullet.popToken(),l=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(l))throw new te("Expected a control sequence",a);for(var u=0,f,v=[[]];n.gullet.future().text!=="{";)if(a=n.gullet.popToken(),a.text==="#"){if(n.gullet.future().text==="{"){f=n.gullet.future(),v[u].push("{");break}if(a=n.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new te('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==u+1)throw new te('Argument number "'+a.text+'" out of order');u++,v.push([])}else{if(a.text==="EOF")throw new te("Expected a macro definition");v[u].push(a.text)}var{tokens:p}=n.gullet.consumeArg();return f&&p.unshift(f),(r==="\\edef"||r==="\\xdef")&&(p=n.gullet.expandTokens(p),p.reverse()),n.gullet.macros.set(l,{tokens:p,numArgs:u,delimiters:v},r===Ml[r]),{type:"internal",mode:n.mode}}});ue({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=lf(n.gullet.popToken());n.gullet.consumeSpaces();var l=Q8(n);return uf(n,a,l,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});ue({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=lf(n.gullet.popToken()),l=n.gullet.popToken(),u=n.gullet.popToken();return uf(n,a,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(l),{type:"internal",mode:n.mode}}});var bi=function(n,r,a){var l=Ye.math[n]&&Ye.math[n].replace,u=Bl(l||n,r,a);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Ul=function(n,r,a,l){var u=a.havingBaseStyle(r),f=Y(l.concat(u.sizingClasses(a)),[n],a),v=u.sizeMultiplier/a.sizeMultiplier;return f.height*=v,f.depth*=v,f.maxFontSize=u.sizeMultiplier,f},cf=function(n,r,a){var l=r.havingBaseStyle(a),u=(1-r.sizeMultiplier/l.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=se(u),n.height-=u,n.depth+=u},Y8=function(n,r,a,l,u,f){var v=Et(n,"Main-Regular",u,l),p=Ul(v,r,l,f);return cf(p,l,r),p},X8=function(n,r,a,l){return Et(n,"Size"+r+"-Regular",a,l)},df=function(n,r,a,l,u,f){var v=X8(n,r,u,l),p=Ul(Y(["delimsizing","size"+r],[v],l),Me.TEXT,l,f);return a&&cf(p,l,Me.TEXT),p},dl=function(n,r,a){var l;r==="Size1-Regular"?l="delim-size1":l="delim-size4";var u=Y(["delimsizinginner",l],[Y([],[Et(n,r,a)])]);return{type:"elem",elem:u}},fl=function(n,r,a){var l=Mn["Size4-Regular"][n.charCodeAt(0)]?Mn["Size4-Regular"][n.charCodeAt(0)][4]:Mn["Size1-Regular"][n.charCodeAt(0)][4],u=new br("inner",f8(n,Math.round(1e3*r))),f=new Gn([u],{width:se(l),height:se(r),style:"width:"+se(l),viewBox:"0 0 "+1e3*l+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),v=$r([],[f],a);return v.height=r,v.style.height=se(r),v.style.width=se(l),{type:"elem",elem:v}},ql=.008,Yo={type:"kern",size:-1*ql},Z8=new Set(["|","\\lvert","\\rvert","\\vert"]),J8=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),ff=function(n,r,a,l,u,f){var v,p,x,$,b="",k=0;v=x=$=n,p=null;var z="Size1-Regular";n==="\\uparrow"?x=$="⏐":n==="\\Uparrow"?x=$="‖":n==="\\downarrow"?v=x="⏐":n==="\\Downarrow"?v=x="‖":n==="\\updownarrow"?(v="\\uparrow",x="⏐",$="\\downarrow"):n==="\\Updownarrow"?(v="\\Uparrow",x="‖",$="\\Downarrow"):Z8.has(n)?(x="∣",b="vert",k=333):J8.has(n)?(x="∥",b="doublevert",k=556):n==="["||n==="\\lbrack"?(v="⎡",x="⎢",$="⎣",z="Size4-Regular",b="lbrack",k=667):n==="]"||n==="\\rbrack"?(v="⎤",x="⎥",$="⎦",z="Size4-Regular",b="rbrack",k=667):n==="\\lfloor"||n==="⌊"?(x=v="⎢",$="⎣",z="Size4-Regular",b="lfloor",k=667):n==="\\lceil"||n==="⌈"?(v="⎡",x=$="⎢",z="Size4-Regular",b="lceil",k=667):n==="\\rfloor"||n==="⌋"?(x=v="⎥",$="⎦",z="Size4-Regular",b="rfloor",k=667):n==="\\rceil"||n==="⌉"?(v="⎤",x=$="⎥",z="Size4-Regular",b="rceil",k=667):n==="("||n==="\\lparen"?(v="⎛",x="⎜",$="⎝",z="Size4-Regular",b="lparen",k=875):n===")"||n==="\\rparen"?(v="⎞",x="⎟",$="⎠",z="Size4-Regular",b="rparen",k=875):n==="\\{"||n==="\\lbrace"?(v="⎧",p="⎨",$="⎩",x="⎪",z="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(v="⎫",p="⎬",$="⎭",x="⎪",z="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(v="⎧",$="⎩",x="⎪",z="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(v="⎫",$="⎭",x="⎪",z="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(v="⎧",$="⎭",x="⎪",z="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(v="⎫",$="⎩",x="⎪",z="Size4-Regular");var P=bi(v,z,u),R=P.height+P.depth,B=bi(x,z,u),N=B.height+B.depth,O=bi($,z,u),H=O.height+O.depth,E=0,G=1;if(p!==null){var U=bi(p,z,u);E=U.height+U.depth,G=2}var X=R+H+E,W=Math.max(0,Math.ceil((r-X)/(G*N))),J=X+W*G*N,ve=l.fontMetrics().axisHeight;a&&(ve*=l.sizeMultiplier);var ke=J/2-ve,Te=[];if(b.length>0){var je=J-R-H,Pe=Math.round(J*1e3),Ke=m8(b,Math.round(je*1e3)),Ue=new br(b,Ke),De=(k/1e3).toFixed(3)+"em",oe=(Pe/1e3).toFixed(3)+"em",ye=new Gn([Ue],{width:De,height:oe,viewBox:"0 0 "+k+" "+Pe}),ae=$r([],[ye],l);ae.height=Pe/1e3,ae.style.width=De,ae.style.height=oe,Te.push({type:"elem",elem:ae})}else{if(Te.push(dl($,z,u)),Te.push(Yo),p===null){var j=J-R-H+2*ql;Te.push(fl(x,j,l))}else{var F=(J-R-H-E)/2+2*ql;Te.push(fl(x,F,l)),Te.push(Yo),Te.push(dl(p,z,u)),Te.push(Yo),Te.push(fl(x,F,l))}Te.push(Yo),Te.push(dl(v,z,u))}var he=l.havingBaseStyle(Me.TEXT),we=He({positionType:"bottom",positionData:ke,children:Te});return Ul(Y(["delimsizing","mult"],[we],he),Me.TEXT,l,f)},ml=80,hl=.08,pl=function(n,r,a,l,u){var f=d8(n,l,a),v=new br(n,f),p=new Gn([v],{width:"400em",height:se(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return $r(["hide-tail"],[p],u)},ev=function(n,r){var a=r.havingBaseSizing(),l=gf("\\surd",n*a.sizeMultiplier,vf,a),u=a.sizeMultiplier,f=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),v,p=0,x=0,$=0,b;return l.type==="small"?($=1e3+1e3*f+ml,n<1?u=1:n<1.4&&(u=.7),p=(1+f+hl)/u,x=(1+f)/u,v=pl("sqrtMain",p,$,f,r),v.style.minWidth="0.853em",b=.833/u):l.type==="large"?($=(1e3+ml)*_i[l.size],x=(_i[l.size]+f)/u,p=(_i[l.size]+f+hl)/u,v=pl("sqrtSize"+l.size,p,$,f,r),v.style.minWidth="1.02em",b=1/u):(p=n+f+hl,x=n+f,$=Math.floor(1e3*n+f)+ml,v=pl("sqrtTall",p,$,f,r),v.style.minWidth="0.742em",b=1.056),v.height=x,v.style.height=se(p),{span:v,advanceWidth:b,ruleWidth:(r.fontMetrics().sqrtRuleThickness+f)*u}},mf=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),tv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),hf=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),_i=[0,1.2,1.8,2.4,3],pf=function(n,r,a,l,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),mf.has(n)||hf.has(n))return df(n,r,!1,a,l,u);if(tv.has(n))return ff(n,_i[r],!1,a,l,u);throw new te("Illegal delimiter: '"+n+"'")},nv=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],rv=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"stack"}],vf=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],iv=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},gf=function(n,r,a,l){for(var u=Math.min(2,3-l.style.size),f=u;f<a.length&&a[f].type!=="stack";f++){var v=bi(n,iv(a[f]),"math"),p=v.height+v.depth;if(a[f].type==="small"){var x=l.havingBaseStyle(a[f].style);p*=x.sizeMultiplier}if(p>r)return a[f]}return a[a.length-1]},jl=function(n,r,a,l,u,f){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var v;hf.has(n)?v=nv:mf.has(n)?v=vf:v=rv;var p=gf(n,r,v,l);return p.type==="small"?Y8(n,p.style,a,l,u,f):p.type==="large"?df(n,p.size,a,l,u,f):ff(n,r,a,l,u,f)},vl=function(n,r,a,l,u,f){var v=l.fontMetrics().axisHeight*l.sizeMultiplier,p=901,x=5/l.fontMetrics().ptPerEm,$=Math.max(r-v,a+v),b=Math.max($/500*p,2*$-x);return jl(n,b,!0,l,u,f)},ad={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},ov=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function ha(o,n){var r=fa(o);if(r&&ov.has(r.text))return r;throw r?new te("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new te("Invalid delimiter type '"+o.type+"'",o)}ue({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=ha(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:ad[o.funcName].size,mclass:ad[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?Y([o.mclass]):pf(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(ln(o.delim,o.mode));var r=new ne("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=se(_i[o.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function sd(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ue({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new te("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:ha(n[0],o).text,color:r}}});ue({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=ha(n[0],o),a=o.parser;++a.leftrightDepth;var l=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var u=Ae(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:l,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{sd(o);for(var r=xt(o.body,n,!0,["mopen","mclose"]),a=0,l=0,u=!1,f=0;f<r.length;f++)r[f].isMiddle?u=!0:(a=Math.max(r[f].height,a),l=Math.max(r[f].depth,l));a*=n.sizeMultiplier,l*=n.sizeMultiplier;var v;if(o.left==="."?v=Si(n,["mopen"]):v=vl(o.left,a,l,n,o.mode,["mopen"]),r.unshift(v),u)for(var p=1;p<r.length;p++){var x=r[p],$=x.isMiddle;$&&(r[p]=vl($.delim,a,l,$.options,o.mode,[]))}var b;if(o.right===".")b=Si(n,["mclose"]);else{var k=o.rightColor?n.withColor(o.rightColor):n;b=vl(o.right,a,l,k,o.mode,["mclose"])}return r.push(b),Y(["minner"],r,n)},mathmlBuilder:(o,n)=>{sd(o);var r=Gt(o.body,n);if(o.left!=="."){var a=new ne("mo",[ln(o.left,o.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(o.right!=="."){var l=new ne("mo",[ln(o.right,o.mode)]);l.setAttribute("fence","true"),o.rightColor&&l.setAttribute("mathcolor",o.rightColor),r.push(l)}return Ol(r)}});ue({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=ha(n[0],o);if(!o.parser.leftrightDepth)throw new te("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=Si(n,[]);else{r=pf(o.delim,1,n,o.mode,[]);var a={delim:o.delim,options:n};r.isMiddle=a}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?ln("|","text"):ln(o.delim,o.mode),a=new ne("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var Vl=(o,n)=>{var r=S0(Ie(o.body,n),n),a=o.label.slice(1),l=n.sizeMultiplier,u,f=0,v=Wn(o.body);if(a==="sout")u=Y(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/l,f=-.5*n.fontMetrics().xHeight;else if(a==="phase"){var p=ot({number:.6,unit:"pt"},n),x=ot({number:.35,unit:"ex"},n),$=n.havingBaseSizing();l=l/$.sizeMultiplier;var b=r.height+r.depth+p+x;r.style.paddingLeft=se(b/2+p);var k=Math.floor(1e3*b*l),z=u8(k),P=new Gn([new br("phase",z)],{width:"400em",height:se(k/1e3),viewBox:"0 0 400000 "+k,preserveAspectRatio:"xMinYMin slice"});u=$r(["hide-tail"],[P],n),u.style.height=se(b),f=r.depth+p+x}else{/cancel/.test(a)?v||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var R=0,B=0,N=0;/box/.test(a)?(N=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),R=n.fontMetrics().fboxsep+(a==="colorbox"?0:N),B=R):a==="angl"?(N=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),R=4*N,B=Math.max(0,.25-r.depth)):(R=v?.2:0,B=R),u=H8(r,a,R,B,n),/fbox|boxed|fcolorbox/.test(a)?(u.style.borderStyle="solid",u.style.borderWidth=se(N)):a==="angl"&&N!==.049&&(u.style.borderTopWidth=se(N),u.style.borderRightWidth=se(N)),f=r.depth+B,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var O;if(o.backgroundColor)O=He({positionType:"individualShift",children:[{type:"elem",elem:u,shift:f},{type:"elem",elem:r,shift:0}]});else{var H=/cancel|phase/.test(a)?["svg-align"]:[];O=He({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:f,wrapperClasses:H}]})}return/cancel/.test(a)&&(O.height=r.height,O.depth=r.depth),/cancel/.test(a)&&!v?Y(["mord","cancel-lap"],[O],n):Y(["mord"],[O],n)},Kl=(o,n)=>{var r=0,a=new ne(o.label.includes("colorbox")?"mpadded":"menclose",[Ve(o.body,n)]);switch(o.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var l=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);a.setAttribute("style","border: "+l+"em solid "+String(o.borderColor))}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&a.setAttribute("mathbackground",o.backgroundColor),a};ue({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:a,funcName:l}=o,u=Ae(n[0],"color-token").color,f=n[1];return{type:"enclose",mode:a.mode,label:l,backgroundColor:u,body:f}},htmlBuilder:Vl,mathmlBuilder:Kl});ue({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:a,funcName:l}=o,u=Ae(n[0],"color-token").color,f=Ae(n[1],"color-token").color,v=n[2];return{type:"enclose",mode:a.mode,label:l,backgroundColor:f,borderColor:u,body:v}},htmlBuilder:Vl,mathmlBuilder:Kl});ue({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});ue({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];return{type:"enclose",mode:r.mode,label:a,body:l}},htmlBuilder:Vl,mathmlBuilder:Kl});ue({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var yf={};function qn(o){for(var{type:n,names:r,props:a,handler:l,htmlBuilder:u,mathmlBuilder:f}=o,v={type:n,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:l},p=0;p<r.length;++p)yf[r[p]]=v;u&&(ra[n]=u),f&&(ia[n]=f)}var xf={};function w(o,n){xf[o]=n}function ld(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var pa=o=>{var n=o.parser.settings;if(!n.displayMode)throw new te("{"+o.envName+"} can be used only in display mode.")},av=new Set(["gather","gather*"]);function Ql(o){if(!o.includes("ed"))return!o.includes("*")}function kr(o,n,r){var{hskipBeforeAndAfter:a,addJot:l,cols:u,arraystretch:f,colSeparationType:v,autoTag:p,singleRow:x,emptySingleRow:$,maxNumCols:b,leqno:k}=n;if(o.gullet.beginGroup(),x||o.gullet.macros.set("\\cr","\\\\\\relax"),!f){var z=o.gullet.expandMacroAsText("\\arraystretch");if(z==null)f=1;else if(f=parseFloat(z),!f||f<0)throw new te("Invalid \\arraystretch: "+z)}o.gullet.beginGroup();var P=[],R=[P],B=[],N=[],O=p!=null?[]:void 0;function H(){p&&o.gullet.macros.set("\\@eqnsw","1",!0)}function E(){O&&(o.gullet.macros.get("\\df@tag")?(O.push(o.subparse([new Qt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):O.push(!!p&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(H(),N.push(ld(o));;){var G=o.parseExpression(!1,x?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),G={type:"ordgroup",mode:o.mode,body:G},r&&(G={type:"styling",mode:o.mode,style:r,body:[G]}),P.push(G);var U=o.fetch().text;if(U==="&"){if(b&&P.length===b){if(x||v)throw new te("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(U==="\\end"){E(),P.length===1&&G.type==="styling"&&G.body[0].body.length===0&&(R.length>1||!$)&&R.pop(),N.length<R.length+1&&N.push([]);break}else if(U==="\\\\"){o.consume();var X=void 0;o.gullet.future().text!==" "&&(X=o.parseSizeGroup(!0)),B.push(X?X.value:null),E(),N.push(ld(o)),P=[],R.push(P),H()}else throw new te("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:l,arraystretch:f,body:R,cols:u,rowGaps:B,hskipBeforeAndAfter:a,hLinesBeforeRow:N,colSeparationType:v,tags:O,leqno:k}}function Yl(o){return o.slice(0,1)==="d"?"display":"text"}var jn=function(n,r){var a,l,u=n.body.length,f=n.hLinesBeforeRow,v=0,p=new Array(u),x=[],$=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),b=1/r.fontMetrics().ptPerEm,k=5*b;if(n.colSeparationType&&n.colSeparationType==="small"){var z=r.havingStyle(Me.SCRIPT).sizeMultiplier;k=.2778*(z/r.sizeMultiplier)}var P=n.colSeparationType==="CD"?ot({number:3,unit:"ex"},r):12*b,R=3*b,B=n.arraystretch*P,N=.7*B,O=.3*B,H=0;function E(at){for(var _t=0;_t<at.length;++_t)_t>0&&(H+=.25),x.push({pos:H,isDashed:at[_t]})}for(E(f[0]),a=0;a<n.body.length;++a){var G=n.body[a],U=N,X=O;v<G.length&&(v=G.length);var W=new Array(G.length);for(l=0;l<G.length;++l){var J=Ie(G[l],r);X<J.depth&&(X=J.depth),U<J.height&&(U=J.height),W[l]=J}var ve=n.rowGaps[a],ke=0;ve&&(ke=ot(ve,r),ke>0&&(ke+=O,X<ke&&(X=ke),ke=0)),n.addJot&&(X+=R),W.height=U,W.depth=X,H+=U,W.pos=H,H+=X+ke,p[a]=W,E(f[a+1])}var Te=H/2+r.fontMetrics().axisHeight,je=n.cols||[],Pe=[],Ke,Ue,De=[];if(n.tags&&n.tags.some(at=>at))for(a=0;a<u;++a){var oe=p[a],ye=oe.pos-Te,ae=n.tags[a],j=void 0;ae===!0?j=Y(["eqn-num"],[],r):ae===!1?j=Y([],[],r):j=Y([],xt(ae,r,!0),r),j.depth=oe.depth,j.height=oe.height,De.push({type:"elem",elem:j,shift:ye})}for(l=0,Ue=0;l<v||Ue<je.length;++l,++Ue){for(var F=je[Ue]||{},he=!0;F.type==="separator";){if(he||(Ke=Y(["arraycolsep"],[]),Ke.style.width=se(r.fontMetrics().doubleRuleSep),Pe.push(Ke)),F.separator==="|"||F.separator===":"){var we=F.separator==="|"?"solid":"dashed",xe=Y(["vertical-separator"],[],r);xe.style.height=se(H),xe.style.borderRightWidth=se($),xe.style.borderRightStyle=we,xe.style.margin="0 "+se(-$/2);var qe=H-Te;qe&&(xe.style.verticalAlign=se(-qe)),Pe.push(xe)}else throw new te("Invalid separator type: "+F.separator);Ue++,F=je[Ue]||{},he=!1}if(!(l>=v)){var Ee=void 0;if(l>0||n.hskipBeforeAndAfter){var Re;Ee=(Re=F.pregap)!=null?Re:k,Ee!==0&&(Ke=Y(["arraycolsep"],[]),Ke.style.width=se(Ee),Pe.push(Ke))}var Ne=[];for(a=0;a<u;++a){var mt=p[a],Xt=mt[l];if(Xt){var zr=mt.pos-Te;Xt.depth=mt.depth,Xt.height=mt.height,Ne.push({type:"elem",elem:Xt,shift:zr})}}if(Ne=He({positionType:"individualShift",children:Ne}),Ne=Y(["col-align-"+(F.align||"c")],[Ne]),Pe.push(Ne),l<v-1||n.hskipBeforeAndAfter){var gn;Ee=(gn=F.postgap)!=null?gn:k,Ee!==0&&(Ke=Y(["arraycolsep"],[]),Ke.style.width=se(Ee),Pe.push(Ke))}}}if(p=Y(["mtable"],Pe),x.length>0){for(var Kn=z0("hline",r,$),Sr=z0("hdashline",r,$),We=[{type:"elem",elem:p,shift:0}];x.length>0;){var Zt=x.pop(),Je=Zt.pos-Te;Zt.isDashed?We.push({type:"elem",elem:Sr,shift:Je}):We.push({type:"elem",elem:Kn,shift:Je})}p=He({positionType:"individualShift",children:We})}if(De.length===0)return Y(["mord"],[p],r);var yn=He({positionType:"individualShift",children:De});return yn=Y(["tag"],[yn],r),Vn([p,yn])},sv={c:"center ",l:"left ",r:"right "},An=function(n,r){for(var a=[],l=new ne("mtd",[],["mtr-glue"]),u=new ne("mtd",[],["mml-eqn-num"]),f=0;f<n.body.length;f++){for(var v=n.body[f],p=[],x=0;x<v.length;x++)p.push(new ne("mtd",[Ve(v[x],r)]));n.tags&&n.tags[f]&&(p.unshift(l),p.push(l),n.leqno?p.unshift(u):p.push(u)),a.push(new ne("mtr",p))}var $=new ne("mtable",a),b=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);$.setAttribute("rowspacing",se(b));var k="",z="";if(n.cols&&n.cols.length>0){var P=n.cols,R="",B=!1,N=0,O=P.length;P[0].type==="separator"&&(k+="top ",N=1),P[P.length-1].type==="separator"&&(k+="bottom ",O-=1);for(var H=N;H<O;H++)P[H].type==="align"?(z+=sv[P[H].align],B&&(R+="none "),B=!0):P[H].type==="separator"&&B&&(R+=P[H].separator==="|"?"solid ":"dashed ",B=!1);$.setAttribute("columnalign",z.trim()),/[sd]/.test(R)&&$.setAttribute("columnlines",R.trim())}if(n.colSeparationType==="align"){for(var E=n.cols||[],G="",U=1;U<E.length;U++)G+=U%2?"0em ":"1em ";$.setAttribute("columnspacing",G.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?$.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?$.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?$.setAttribute("columnspacing","0.5em"):$.setAttribute("columnspacing","1em");var X="",W=n.hLinesBeforeRow;k+=W[0].length>0?"left ":"",k+=W[W.length-1].length>0?"right ":"";for(var J=1;J<W.length-1;J++)X+=W[J].length===0?"none ":W[J][0]?"dashed ":"solid ";return/[sd]/.test(X)&&$.setAttribute("rowlines",X.trim()),k!==""&&($=new ne("menclose",[$]),$.setAttribute("notation",k.trim())),n.arraystretch&&n.arraystretch<1&&($=new ne("mstyle",[$]),$.setAttribute("scriptlevel","1")),$},wf=function(n,r){n.envName.includes("ed")||pa(n);var a=[],l=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",f=kr(n.parser,{cols:a,addJot:!0,autoTag:u?void 0:Ql(n.envName),emptySingleRow:!0,colSeparationType:l,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),v,p=0,x={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var $="",b=0;b<r[0].body.length;b++){var k=Ae(r[0].body[b],"textord");$+=k.text}v=Number($),p=v*2}var z=!p;f.body.forEach(function(N){for(var O=1;O<N.length;O+=2){var H=Ae(N[O],"styling"),E=Ae(H.body[0],"ordgroup");E.body.unshift(x)}if(z)p<N.length&&(p=N.length);else{var G=N.length/2;if(v<G)throw new te("Too many math in a row: "+("expected "+v+", but got "+G),N[0])}});for(var P=0;P<p;++P){var R="r",B=0;P%2===1?R="l":P>0&&z&&(B=1),a[P]={type:"align",align:R,pregap:B,postgap:0}}return f.colSeparationType=z?"align":"alignat",f};qn({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=fa(n[0]),a=r?[n[0]]:Ae(n[0],"ordgroup").body,l=a.map(function(f){var v=Gl(f),p=v.text;if("lcr".includes(p))return{type:"align",align:p};if(p==="|")return{type:"separator",separator:"|"};if(p===":")return{type:"separator",separator:":"};throw new te("Unknown column alignment: "+p,f)}),u={cols:l,hskipBeforeAndAfter:!0,maxNumCols:l.length};return kr(o.parser,u,Yl(o.envName))},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var l=o.parser;if(l.consumeSpaces(),l.fetch().text==="["){if(l.consume(),l.consumeSpaces(),r=l.fetch().text,!"lcr".includes(r))throw new te("Expected l or c or r",l.nextToken);l.consume(),l.consumeSpaces(),l.expect("]"),l.consume(),a.cols=[{type:"align",align:r}]}}var u=kr(o.parser,a,Yl(o.envName)),f=Math.max(0,...u.body.map(v=>v.length));return u.cols=new Array(f).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=kr(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=fa(n[0]),a=r?[n[0]]:Ae(n[0],"ordgroup").body,l=a.map(function(f){var v=Gl(f),p=v.text;if("lc".includes(p))return{type:"align",align:p};throw new te("Unknown column alignment: "+p,f)});if(l.length>1)throw new te("{subarray} can contain only one column");var u={cols:l,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=kr(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new te("{subarray} can contain only one column");return u},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=kr(o.parser,n,Yl(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:wf,htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){av.has(o.envName)&&pa(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Ql(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return kr(o.parser,n,"display")},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:wf,htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){pa(o);var n={autoTag:Ql(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return kr(o.parser,n,"display")},htmlBuilder:jn,mathmlBuilder:An});qn({type:"array",names:["CD"],props:{numArgs:0},handler(o){return pa(o),K8(o.parser)},htmlBuilder:jn,mathmlBuilder:An});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");ue({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new te(o.funcName+" valid only within array environment")}});var ud=yf;ue({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];if(l.type!=="ordgroup")throw new te("Invalid environment name",l);for(var u="",f=0;f<l.body.length;++f)u+=Ae(l.body[f],"textord").text;if(a==="\\begin"){if(!ud.hasOwnProperty(u))throw new te("No such environment: "+u,l);var v=ud[u],{args:p,optArgs:x}=r.parseArguments("\\begin{"+u+"}",v),$={mode:r.mode,envName:u,parser:r},b=v.handler($,p,x);r.expect("\\end",!1);var k=r.nextToken,z=Ae(r.parseFunction(),"environment");if(z.name!==u)throw new te("Mismatch: \\begin{"+u+"} matched by \\end{"+z.name+"}",k);return b}return{type:"environment",mode:r.mode,name:u,nameGroup:l}}});var bf=(o,n)=>{var r=o.font,a=n.withFont(r);return Ie(o.body,a)},$f=(o,n)=>{var r=o.font,a=n.withFont(r);return Ve(o.body,a)},cd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ue({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=oa(n[0]),u=a;return u in cd&&(u=cd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:l}},htmlBuilder:bf,mathmlBuilder:$f});ue({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"mclass",mode:r.mode,mclass:ma(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:Wn(a)}}});ue({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a,breakOnTokenText:l}=o,{mode:u}=r,f=r.parseExpression(!0,l),v="math"+a.slice(1);return{type:"font",mode:u,font:v,body:{type:"ordgroup",mode:r.mode,body:f}}},htmlBuilder:bf,mathmlBuilder:$f});var lv=(o,n)=>{var r=n.style,a=r.fracNum(),l=r.fracDen(),u;u=n.havingStyle(a);var f=Ie(o.numer,u,n);if(o.continued){var v=8.5/n.fontMetrics().ptPerEm,p=3.5/n.fontMetrics().ptPerEm;f.height=f.height<v?v:f.height,f.depth=f.depth<p?p:f.depth}u=n.havingStyle(l);var x=Ie(o.denom,u,n),$,b,k;o.hasBarLine?(o.barSize?(b=ot(o.barSize,n),$=z0("frac-line",n,b)):$=z0("frac-line",n),b=$.height,k=$.height):($=null,b=0,k=n.fontMetrics().defaultRuleThickness);var z,P,R;r.size===Me.DISPLAY.size?(z=n.fontMetrics().num1,b>0?P=3*k:P=7*k,R=n.fontMetrics().denom1):(b>0?(z=n.fontMetrics().num2,P=k):(z=n.fontMetrics().num3,P=3*k),R=n.fontMetrics().denom2);var B;if($){var O=n.fontMetrics().axisHeight;z-f.depth-(O+.5*b)<P&&(z+=P-(z-f.depth-(O+.5*b))),O-.5*b-(x.height-R)<P&&(R+=P-(O-.5*b-(x.height-R)));var H=-(O-.5*b);B=He({positionType:"individualShift",children:[{type:"elem",elem:x,shift:R},{type:"elem",elem:$,shift:H},{type:"elem",elem:f,shift:-z}]})}else{var N=z-f.depth-(x.height-R);N<P&&(z+=.5*(P-N),R+=.5*(P-N)),B=He({positionType:"individualShift",children:[{type:"elem",elem:x,shift:R},{type:"elem",elem:f,shift:-z}]})}u=n.havingStyle(r),B.height*=u.sizeMultiplier/n.sizeMultiplier,B.depth*=u.sizeMultiplier/n.sizeMultiplier;var E;r.size===Me.DISPLAY.size?E=n.fontMetrics().delim1:r.size===Me.SCRIPTSCRIPT.size?E=n.havingStyle(Me.SCRIPT).fontMetrics().delim2:E=n.fontMetrics().delim2;var G,U;return o.leftDelim==null?G=Si(n,["mopen"]):G=jl(o.leftDelim,E,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?U=Y([]):o.rightDelim==null?U=Si(n,["mclose"]):U=jl(o.rightDelim,E,!0,n.havingStyle(r),o.mode,["mclose"]),Y(["mord"].concat(u.sizingClasses(n)),[G,Y(["mfrac"],[B]),U],n)},uv=(o,n)=>{var r=new ne("mfrac",[Ve(o.numer,n),Ve(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var a=ot(o.barSize,n);r.setAttribute("linethickness",se(a))}if(o.leftDelim!=null||o.rightDelim!=null){var l=[];if(o.leftDelim!=null){var u=new ne("mo",[new pt(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),l.push(u)}if(l.push(r),o.rightDelim!=null){var f=new ne("mo",[new pt(o.rightDelim.replace("\\",""))]);f.setAttribute("fence","true"),l.push(f)}return Ol(l)}return r},_f=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};ue({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0],u=n[1],f,v=null,p=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":f=!0;break;case"\\\\atopfrac":f=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":f=!1,v="(",p=")";break;case"\\\\bracefrac":f=!1,v="\\{",p="\\}";break;case"\\\\brackfrac":f=!1,v="[",p="]";break;default:throw new Error("Unrecognized genfrac command")}var x=a==="\\cfrac",$=null;return x||a.startsWith("\\d")?$="display":a.startsWith("\\t")&&($="text"),_f({type:"genfrac",mode:r.mode,numer:l,denom:u,continued:x,hasBarLine:f,leftDelim:v,rightDelim:p,barSize:null},$)},htmlBuilder:lv,mathmlBuilder:uv});ue({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:a}=o,l;switch(r){case"\\over":l="\\frac";break;case"\\choose":l="\\binom";break;case"\\atop":l="\\\\atopfrac";break;case"\\brace":l="\\\\bracefrac";break;case"\\brack":l="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:l,token:a}}});var dd=["display","text","script","scriptscript"],fd=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};ue({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,a=n[4],l=n[5],u=oa(n[0]),f=u.type==="atom"&&u.family==="open"?fd(u.text):null,v=oa(n[1]),p=v.type==="atom"&&v.family==="close"?fd(v.text):null,x=Ae(n[2],"size"),$,b=null;x.isBlank?$=!0:(b=x.value,$=b.number>0);var k=null,z=n[3];if(z.type==="ordgroup"){if(z.body.length>0){var P=Ae(z.body[0],"textord");k=dd[Number(P.text)]}}else z=Ae(z,"textord"),k=dd[Number(z.text)];return _f({type:"genfrac",mode:r.mode,numer:a,denom:l,continued:!1,hasBarLine:$,barSize:b,leftDelim:f,rightDelim:p},k)}});ue({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:a,token:l}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ae(n[0],"size").value,token:l}}});ue({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0],u=Ae(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var f=n[2],v=u.number>0;return{type:"genfrac",mode:r.mode,numer:l,denom:f,continued:!1,hasBarLine:v,barSize:u,leftDelim:null,rightDelim:null}}});var kf=(o,n)=>{var r=n.style,a,l;o.type==="supsub"?(a=o.sup?Ie(o.sup,n.havingStyle(r.sup()),n):Ie(o.sub,n.havingStyle(r.sub()),n),l=Ae(o.base,"horizBrace")):l=Ae(o,"horizBrace");var u=Ie(l.base,n.havingBaseStyle(Me.DISPLAY)),f=da(l,n),v;if(l.isOver?(v=He({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:f}]}),v.children[0].children[0].children[1].classes.push("svg-align")):(v=He({positionType:"bottom",positionData:u.depth+.1+f.height,children:[{type:"elem",elem:f},{type:"kern",size:.1},{type:"elem",elem:u}]}),v.children[0].children[0].children[0].classes.push("svg-align")),a){var p=Y(["mord",l.isOver?"mover":"munder"],[v],n);l.isOver?v=He({positionType:"firstBaseline",children:[{type:"elem",elem:p},{type:"kern",size:.2},{type:"elem",elem:a}]}):v=He({positionType:"bottom",positionData:p.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:p}]})}return Y(["mord",l.isOver?"mover":"munder"],[v],n)},cv=(o,n)=>{var r=ca(o.label);return new ne(o.isOver?"mover":"munder",[Ve(o.base,n),r])};ue({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:n[0]}},htmlBuilder:kf,mathmlBuilder:cv});ue({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[1],l=Ae(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:l})?{type:"href",mode:r.mode,href:l,body:ft(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1);return T8(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=_r(o.body,n);return r instanceof ne||(r=new ne("mrow",[r])),r.setAttribute("href",o.href),r}});ue({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=Ae(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var l=[],u=0;u<a.length;u++){var f=a[u];f==="~"&&(f="\\textasciitilde"),l.push({type:"textord",mode:"text",text:f})}var v={type:"text",mode:r.mode,font:"\\texttt",body:l};return{type:"href",mode:r.mode,href:a,body:ft(v)}}});ue({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:ft(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!1);return Vn(r)},mathmlBuilder(o,n){return new ne("mrow",Gt(o.body,n))}});ue({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a,token:l}=o,u=Ae(n[0],"raw").string,f=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var v,p={};switch(a){case"\\htmlClass":p.class=u,v={command:"\\htmlClass",class:u};break;case"\\htmlId":p.id=u,v={command:"\\htmlId",id:u};break;case"\\htmlStyle":p.style=u,v={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var x=u.split(","),$=0;$<x.length;$++){var b=x[$],k=b.indexOf("=");if(k<0)throw new te("\\htmlData key/value '"+b+"' missing equals sign");var z=b.slice(0,k),P=b.slice(k+1);p["data-"+z.trim()]=P}v={command:"\\htmlData",attributes:p};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(v)?{type:"html",mode:r.mode,attributes:p,body:ft(f)}:r.formatUnsupportedCmd(a)},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1),a=["enclosing"];o.attributes.class&&a.push(...o.attributes.class.trim().split(/\s+/));var l=Y(a,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&l.setAttribute(u,o.attributes[u]);return l},mathmlBuilder:(o,n)=>_r(o.body,n)});ue({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:ft(n[0]),mathml:ft(n[1])}},htmlBuilder:(o,n)=>{var r=xt(o.html,n,!1);return Vn(r)},mathmlBuilder:(o,n)=>_r(o.mathml,n)});var gl=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new te("Invalid size: '"+n+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!Fd(a))throw new te("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};ue({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:a}=o,l={number:0,unit:"em"},u={number:.9,unit:"em"},f={number:0,unit:"em"},v="";if(r[0])for(var p=Ae(r[0],"raw").string,x=p.split(","),$=0;$<x.length;$++){var b=x[$].split("=");if(b.length===2){var k=b[1].trim();switch(b[0].trim()){case"alt":v=k;break;case"width":l=gl(k);break;case"height":u=gl(k);break;case"totalheight":f=gl(k);break;default:throw new te("Invalid key: '"+b[0]+"' in \\includegraphics.")}}}var z=Ae(n[0],"url").url;return v===""&&(v=z,v=v.replace(/^.*[\\/]/,""),v=v.substring(0,v.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:z})?{type:"includegraphics",mode:a.mode,alt:v,width:l,height:u,totalheight:f,src:z}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=ot(o.height,n),a=0;o.totalheight.number>0&&(a=ot(o.totalheight,n)-r);var l=0;o.width.number>0&&(l=ot(o.width,n));var u={height:se(r+a)};l>0&&(u.width=se(l)),a>0&&(u.verticalAlign=se(-a));var f=new x8(o.src,o.alt,u);return f.height=r,f.depth=a,f},mathmlBuilder:(o,n)=>{var r=new ne("mglyph",[]);r.setAttribute("alt",o.alt);var a=ot(o.height,n),l=0;if(o.totalheight.number>0&&(l=ot(o.totalheight,n)-a,r.setAttribute("valign",se(-l))),r.setAttribute("height",se(a+l)),o.width.number>0){var u=ot(o.width,n);r.setAttribute("width",se(u))}return r.setAttribute("src",o.src),r}});ue({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:a}=o,l=Ae(n[0],"size");if(r.settings.strict){var u=a[1]==="m",f=l.value.unit==="mu";u?(f||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+l.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):f&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:l.value}},htmlBuilder(o,n){return Vd(o.dimension,n)},mathmlBuilder(o,n){var r=ot(o.dimension,n);return new Jd(r)}});ue({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:l}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=Y([],[Ie(o.body,n)]),r=Y(["inner"],[r],n)):r=Y(["inner"],[Ie(o.body,n)]);var a=Y(["fix"],[]),l=Y([o.alignment],[r,a],n),u=Y(["strut"]);return u.style.height=se(l.height+l.depth),l.depth&&(u.style.verticalAlign=se(-l.depth)),l.children.unshift(u),l=Y(["thinbox"],[l],n),Y(["mord","vbox"],[l],n)},mathmlBuilder:(o,n)=>{var r=new ne("mpadded",[Ve(o.body,n)]);if(o.alignment!=="rlap"){var a=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});ue({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:a}=o,l=a.mode;a.switchMode("math");var u=r==="\\("?"\\)":"$",f=a.parseExpression(!1,u);return a.expect(u),a.switchMode(l),{type:"styling",mode:a.mode,style:"text",body:f}}});ue({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new te("Mismatched "+o.funcName)}});var md=(o,n)=>{switch(n.style.size){case Me.DISPLAY.size:return o.display;case Me.TEXT.size:return o.text;case Me.SCRIPT.size:return o.script;case Me.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ue({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:ft(n[0]),text:ft(n[1]),script:ft(n[2]),scriptscript:ft(n[3])}},htmlBuilder:(o,n)=>{var r=md(o,n),a=xt(r,n,!1);return Vn(a)},mathmlBuilder:(o,n)=>{var r=md(o,n);return _r(r,n)}});var zf=(o,n,r,a,l,u,f)=>{o=Y([],[o]);var v=r&&Wn(r),p,x;if(n){var $=Ie(n,a.havingStyle(l.sup()),a);x={elem:$,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-$.depth)}}if(r){var b=Ie(r,a.havingStyle(l.sub()),a);p={elem:b,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-b.height)}}var k;if(x&&p){var z=a.fontMetrics().bigOpSpacing5+p.elem.height+p.elem.depth+p.kern+o.depth+f;k=He({positionType:"bottom",positionData:z,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:p.elem,marginLeft:se(-u)},{type:"kern",size:p.kern},{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:se(u)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if(p){var P=o.height-f;k=He({positionType:"top",positionData:P,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:p.elem,marginLeft:se(-u)},{type:"kern",size:p.kern},{type:"elem",elem:o}]})}else if(x){var R=o.depth+f;k=He({positionType:"bottom",positionData:R,children:[{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:se(u)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return o;var B=[k];if(p&&u!==0&&!v){var N=Y(["mspace"],[],a);N.style.marginRight=se(u),B.unshift(N)}return Y(["mop","op-limits"],B,a)},Sf=new Set(["\\smallint"]),M0=(o,n)=>{var r,a,l=!1,u;o.type==="supsub"?(r=o.sup,a=o.sub,u=Ae(o.base,"op"),l=!0):u=Ae(o,"op");var f=n.style,v=!1;f.size===Me.DISPLAY.size&&u.symbol&&!Sf.has(u.name)&&(v=!0);var p;if(u.symbol){var x=v?"Size2-Regular":"Size1-Regular",$="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&($=u.name.slice(1),u.name=$==="oiint"?"\\iint":"\\iiint"),p=Et(u.name,x,"math",n,["mop","op-symbol",v?"large-op":"small-op"]),$.length>0){var b=p.italic,k=Qd($+"Size"+(v?"2":"1"),n);p=He({positionType:"individualShift",children:[{type:"elem",elem:p,shift:0},{type:"elem",elem:k,shift:v?.08:0}]}),u.name="\\"+$,p.classes.unshift("mop"),p.italic=b}}else if(u.body){var z=xt(u.body,n,!0);z.length===1&&z[0]instanceof sn?(p=z[0],p.classes[0]="mop"):p=Y(["mop"],z,n)}else{for(var P=[],R=1;R<u.name.length;R++)P.push(Ll(u.name[R],u.mode,n));p=Y(["mop"],P,n)}var B=0,N=0;return(p instanceof sn||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(B=(p.height-p.depth)/2-n.fontMetrics().axisHeight,N=p.italic),l?zf(p,r,a,n,f,N,B):(B&&(p.style.position="relative",p.style.top=se(B)),p)},qi=(o,n)=>{var r;if(o.symbol)r=new ne("mo",[ln(o.name,o.mode)]),Sf.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new ne("mo",Gt(o.body,n));else{r=new ne("mi",[new pt(o.name.slice(1))]);var a=new ne("mo",[ln("⁡","text")]);o.parentIsSupSub?r=new ne("mrow",[r,a]):r=Zd([r,a])}return r},dv={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ue({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=a;return l.length===1&&(l=dv[l]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:l}},htmlBuilder:M0,mathmlBuilder:qi});ue({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:ft(a)}},htmlBuilder:M0,mathmlBuilder:qi});var fv={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ue({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:M0,mathmlBuilder:qi});ue({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:M0,mathmlBuilder:qi});ue({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,a=r;return a.length===1&&(a=fv[a]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:M0,mathmlBuilder:qi});var Tf=(o,n)=>{var r,a,l=!1,u;o.type==="supsub"?(r=o.sup,a=o.sub,u=Ae(o.base,"operatorname"),l=!0):u=Ae(o,"operatorname");var f;if(u.body.length>0){for(var v=u.body.map(b=>{var k=b.text;return typeof k=="string"?{type:"textord",mode:b.mode,text:k}:b}),p=xt(v,n.withFont("mathrm"),!0),x=0;x<p.length;x++){var $=p[x];$ instanceof sn&&($.text=$.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}f=Y(["mop"],p,n)}else f=Y(["mop"],[],n);return l?zf(f,r,a,n,n.style,0,0):f},mv=(o,n)=>{for(var r=Gt(o.body,n.withFont("mathrm")),a=!0,l=0;l<r.length;l++){var u=r[l];if(!(u instanceof Jd))if(u instanceof ne)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var f=u.children[0];u.children.length===1&&f instanceof pt?f.text=f.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var v=r.map($=>$.toText()).join("");r=[new pt(v)]}var p=new ne("mi",r);p.setAttribute("mathvariant","normal");var x=new ne("mo",[ln("⁡","text")]);return o.parentIsSupSub?new ne("mrow",[p,x]):Zd([p,x])};ue({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0];return{type:"operatorname",mode:r.mode,body:ft(l),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Tf,mathmlBuilder:mv});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Kr({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?Vn(xt(o.body,n,!1)):Y(["mord"],xt(o.body,n,!0),n)},mathmlBuilder(o,n){return _r(o.body,n,!0)}});ue({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,a=n[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(o,n){var r=Ie(o.body,n.havingCrampedStyle()),a=z0("overline-line",n),l=n.fontMetrics().defaultRuleThickness,u=He({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*l},{type:"elem",elem:a},{type:"kern",size:l}]});return Y(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new ne("mo",[new pt("‾")]);r.setAttribute("stretchy","true");var a=new ne("mover",[Ve(o.body,n),r]);return a.setAttribute("accent","true"),a}});ue({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"phantom",mode:r.mode,body:ft(a)}},htmlBuilder:(o,n)=>{var r=xt(o.body,n.withPhantom(),!1);return Vn(r)},mathmlBuilder:(o,n)=>{var r=Gt(o.body,n);return new ne("mphantom",r)}});ue({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:(o,n)=>{var r=Y([],[Ie(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=He({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),Y(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Gt(ft(o.body),n),a=new ne("mphantom",r),l=new ne("mpadded",[a]);return l.setAttribute("height","0px"),l.setAttribute("depth","0px"),l}});ue({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(o,n)=>{var r=Y(["inner"],[Ie(o.body,n.withPhantom())]),a=Y(["fix"],[]);return Y(["mord","rlap"],[r,a],n)},mathmlBuilder:(o,n)=>{var r=Gt(ft(o.body),n),a=new ne("mphantom",r),l=new ne("mpadded",[a]);return l.setAttribute("width","0px"),l}});ue({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,a=Ae(n[0],"size").value,l=n[1];return{type:"raisebox",mode:r.mode,dy:a,body:l}},htmlBuilder(o,n){var r=Ie(o.body,n),a=ot(o.dy,n);return He({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new ne("mpadded",[Ve(o.body,n)]),a=o.dy.number+o.dy.unit;return r.setAttribute("voffset",a),r}});ue({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});ue({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:a}=o,l=r[0],u=Ae(n[0],"size"),f=Ae(n[1],"size");return{type:"rule",mode:a.mode,shift:l&&Ae(l,"size").value,width:u.value,height:f.value}},htmlBuilder(o,n){var r=Y(["mord","rule"],[],n),a=ot(o.width,n),l=ot(o.height,n),u=o.shift?ot(o.shift,n):0;return r.style.borderRightWidth=se(a),r.style.borderTopWidth=se(l),r.style.bottom=se(u),r.width=a,r.height=l+u,r.depth=-u,r.maxFontSize=l*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=ot(o.width,n),a=ot(o.height,n),l=o.shift?ot(o.shift,n):0,u=n.color&&n.getColor()||"black",f=new ne("mspace");f.setAttribute("mathbackground",u),f.setAttribute("width",se(r)),f.setAttribute("height",se(a));var v=new ne("mpadded",[f]);return l>=0?v.setAttribute("height",se(l)):(v.setAttribute("height",se(l)),v.setAttribute("depth",se(-l))),v.setAttribute("voffset",se(l)),v}});function Mf(o,n,r){for(var a=xt(o,n,!1),l=n.sizeMultiplier/r.sizeMultiplier,u=0;u<a.length;u++){var f=a[u].classes.indexOf("sizing");f<0?Array.prototype.push.apply(a[u].classes,n.sizingClasses(r)):a[u].classes[f+1]==="reset-size"+n.size&&(a[u].classes[f+1]="reset-size"+r.size),a[u].height*=l,a[u].depth*=l}return Vn(a)}var hd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],hv=(o,n)=>{var r=n.havingSize(o.size);return Mf(o.body,r,n)};ue({type:"sizing",names:hd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:a,parser:l}=o,u=l.parseExpression(!1,r);return{type:"sizing",mode:l.mode,size:hd.indexOf(a)+1,body:u}},htmlBuilder:hv,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),a=Gt(o.body,r),l=new ne("mstyle",a);return l.setAttribute("mathsize",se(r.sizeMultiplier)),l}});ue({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:a}=o,l=!1,u=!1,f=r[0]&&Ae(r[0],"ordgroup");if(f)for(var v="",p=0;p<f.body.length;++p){var x=f.body[p];if(v=x.text,v==="t")l=!0;else if(v==="b")u=!0;else{l=!1,u=!1;break}}else l=!0,u=!0;var $=n[0];return{type:"smash",mode:a.mode,body:$,smashHeight:l,smashDepth:u}},htmlBuilder:(o,n)=>{var r=Y([],[Ie(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var l=0;l<r.children.length;l++)r.children[l].depth=0;var u=He({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return Y(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new ne("mpadded",[Ve(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ue({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:a}=o,l=r[0],u=n[0];return{type:"sqrt",mode:a.mode,body:u,index:l}},htmlBuilder(o,n){var r=Ie(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=S0(r,n);var a=n.fontMetrics(),l=a.defaultRuleThickness,u=l;n.style.id<Me.TEXT.id&&(u=n.fontMetrics().xHeight);var f=l+u/4,v=r.height+r.depth+f+l,{span:p,ruleWidth:x,advanceWidth:$}=ev(v,n),b=p.height-x;b>r.height+r.depth+f&&(f=(f+b-r.height-r.depth)/2);var k=p.height-r.height-f-x;r.style.paddingLeft=se($);var z=He({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+k)},{type:"elem",elem:p},{type:"kern",size:x}]});if(o.index){var P=n.havingStyle(Me.SCRIPTSCRIPT),R=Ie(o.index,P,n),B=.6*(z.height-z.depth),N=He({positionType:"shift",positionData:-B,children:[{type:"elem",elem:R}]}),O=Y(["root"],[N]);return Y(["mord","sqrt"],[O,z],n)}else return Y(["mord","sqrt"],[z],n)},mathmlBuilder(o,n){var{body:r,index:a}=o;return a?new ne("mroot",[Ve(r,n),Ve(a,n)]):new ne("msqrt",[Ve(r,n)])}});var pd={display:Me.DISPLAY,text:Me.TEXT,script:Me.SCRIPT,scriptscript:Me.SCRIPTSCRIPT};ue({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:a,parser:l}=o,u=l.parseExpression(!0,r),f=a.slice(1,a.length-5);return{type:"styling",mode:l.mode,style:f,body:u}},htmlBuilder(o,n){var r=pd[o.style],a=n.havingStyle(r).withFont("");return Mf(o.body,a,n)},mathmlBuilder(o,n){var r=pd[o.style],a=n.havingStyle(r),l=Gt(o.body,a),u=new ne("mstyle",l),f={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},v=f[o.style];return u.setAttribute("scriptlevel",v[0]),u.setAttribute("displaystyle",v[1]),u}});var pv=function(n,r){var a=n.base;if(a)if(a.type==="op"){var l=a.limits&&(r.style.size===Me.DISPLAY.size||a.alwaysHandleSupSub);return l?M0:null}else if(a.type==="operatorname"){var u=a.alwaysHandleSupSub&&(r.style.size===Me.DISPLAY.size||a.limits);return u?Tf:null}else{if(a.type==="accent")return Wn(a.base)?Wl:null;if(a.type==="horizBrace"){var f=!n.sub;return f===a.isOver?kf:null}else return null}else return null};Kr({type:"supsub",htmlBuilder(o,n){var r=pv(o,n);if(r)return r(o,n);var{base:a,sup:l,sub:u}=o,f=Ie(a,n),v,p,x=n.fontMetrics(),$=0,b=0,k=a&&Wn(a);if(l){var z=n.havingStyle(n.style.sup());v=Ie(l,z,n),k||($=f.height-z.fontMetrics().supDrop*z.sizeMultiplier/n.sizeMultiplier)}if(u){var P=n.havingStyle(n.style.sub());p=Ie(u,P,n),k||(b=f.depth+P.fontMetrics().subDrop*P.sizeMultiplier/n.sizeMultiplier)}var R;n.style===Me.DISPLAY?R=x.sup1:n.style.cramped?R=x.sup3:R=x.sup2;var B=n.sizeMultiplier,N=se(.5/x.ptPerEm/B),O=null;if(p){var H=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(f instanceof sn||H)&&(O=se(-f.italic))}var E;if(v&&p){$=Math.max($,R,v.depth+.25*x.xHeight),b=Math.max(b,x.sub2);var G=x.defaultRuleThickness,U=4*G;if($-v.depth-(p.height-b)<U){b=U-($-v.depth)+p.height;var X=.8*x.xHeight-($-v.depth);X>0&&($+=X,b-=X)}var W=[{type:"elem",elem:p,shift:b,marginRight:N,marginLeft:O},{type:"elem",elem:v,shift:-$,marginRight:N}];E=He({positionType:"individualShift",children:W})}else if(p){b=Math.max(b,x.sub1,p.height-.8*x.xHeight);var J=[{type:"elem",elem:p,marginLeft:O,marginRight:N}];E=He({positionType:"shift",positionData:b,children:J})}else if(v)$=Math.max($,R,v.depth+.25*x.xHeight),E=He({positionType:"shift",positionData:-$,children:[{type:"elem",elem:v,marginRight:N}]});else throw new Error("supsub must have either sup or sub.");var ve=Sl(f,"right")||"mord";return Y([ve],[f,Y(["msupsub"],[E])],n)},mathmlBuilder(o,n){var r=!1,a,l;o.base&&o.base.type==="horizBrace"&&(l=!!o.sup,l===o.base.isOver&&(r=!0,a=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Ve(o.base,n)];o.sub&&u.push(Ve(o.sub,n)),o.sup&&u.push(Ve(o.sup,n));var f;if(r)f=a?"mover":"munder";else if(o.sub)if(o.sup){var x=o.base;x&&x.type==="op"&&x.limits&&n.style===Me.DISPLAY||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(n.style===Me.DISPLAY||x.limits)?f="munderover":f="msubsup"}else{var p=o.base;p&&p.type==="op"&&p.limits&&(n.style===Me.DISPLAY||p.alwaysHandleSupSub)||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(p.limits||n.style===Me.DISPLAY)?f="munder":f="msub"}else{var v=o.base;v&&v.type==="op"&&v.limits&&(n.style===Me.DISPLAY||v.alwaysHandleSupSub)||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(v.limits||n.style===Me.DISPLAY)?f="mover":f="msup"}return new ne(f,u)}});Kr({type:"atom",htmlBuilder(o,n){return Ll(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new ne("mo",[ln(o.text,o.mode)]);if(o.family==="bin"){var a=Hl(o,n);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var qf={mi:"italic",mn:"normal",mtext:"normal"};Kr({type:"mathord",htmlBuilder(o,n){return ua(o,n,"mathord")},mathmlBuilder(o,n){var r=new ne("mi",[ln(o.text,o.mode,n)]),a=Hl(o,n)||"italic";return a!==qf[r.type]&&r.setAttribute("mathvariant",a),r}});Kr({type:"textord",htmlBuilder(o,n){return ua(o,n,"textord")},mathmlBuilder(o,n){var r=ln(o.text,o.mode,n),a=Hl(o,n)||"normal",l;return o.mode==="text"?l=new ne("mtext",[r]):/[0-9]/.test(o.text)?l=new ne("mn",[r]):o.text==="\\prime"?l=new ne("mo",[r]):l=new ne("mi",[r]),a!==qf[l.type]&&l.setAttribute("mathvariant",a),l}});var yl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},xl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Kr({type:"spacing",htmlBuilder(o,n){if(xl.hasOwnProperty(o.text)){var r=xl[o.text].className||"";if(o.mode==="text"){var a=ua(o,n,"textord");return a.classes.push(r),a}else return Y(["mspace",r],[Ll(o.text,o.mode,n)],n)}else{if(yl.hasOwnProperty(o.text))return Y(["mspace",yl[o.text]],[],n);throw new te('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if(xl.hasOwnProperty(o.text))r=new ne("mtext",[new pt(" ")]);else{if(yl.hasOwnProperty(o.text))return new ne("mspace");throw new te('Unknown type of space "'+o.text+'"')}return r}});var vd=()=>{var o=new ne("mtd",[]);return o.setAttribute("width","50%"),o};Kr({type:"tag",mathmlBuilder(o,n){var r=new ne("mtable",[new ne("mtr",[vd(),new ne("mtd",[_r(o.body,n)]),vd(),new ne("mtd",[_r(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var gd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},yd={"\\textbf":"textbf","\\textmd":"textmd"},vv={"\\textit":"textit","\\textup":"textup"},xd=(o,n)=>{var r=o.font;if(r){if(gd[r])return n.withTextFontFamily(gd[r]);if(yd[r])return n.withTextFontWeight(yd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(vv[r])};ue({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];return{type:"text",mode:r.mode,body:ft(l),font:a}},htmlBuilder(o,n){var r=xd(o,n),a=xt(o.body,r,!0);return Y(["mord","text"],a,r)},mathmlBuilder(o,n){var r=xd(o,n);return _r(o.body,r)}});ue({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Ie(o.body,n),a=z0("underline-line",n),l=n.fontMetrics().defaultRuleThickness,u=He({positionType:"top",positionData:r.height,children:[{type:"kern",size:l},{type:"elem",elem:a},{type:"kern",size:3*l},{type:"elem",elem:r}]});return Y(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new ne("mo",[new pt("‾")]);r.setAttribute("stretchy","true");var a=new ne("munder",[Ve(o.body,n),r]);return a.setAttribute("accentunder","true"),a}});ue({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Ie(o.body,n),a=n.fontMetrics().axisHeight,l=.5*(r.height-a-(r.depth+a));return He({positionType:"shift",positionData:l,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new ne("mpadded",[Ve(o.body,n)],["vcenter"])}});ue({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new te("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=wd(o),a=[],l=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var f=r[u];f==="~"&&(f="\\textasciitilde"),a.push(Et(f,"Typewriter-Regular",o.mode,l,["mord","texttt"]))}return Y(["mord","text"].concat(l.sizingClasses(n)),Ud(a),l)},mathmlBuilder(o,n){var r=new pt(wd(o)),a=new ne("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var wd=o=>o.body.replace(/ /g,o.star?"␣":" "),xr=Yd,jf=`[ \r
	]`,gv="\\\\[a-zA-Z@]+",yv="\\\\[^\uD800-\uDFFF]",xv="("+gv+")"+jf+"*",wv=`\\\\(
|[ \r	]+
?)[ \r	]*`,Al="[̀-ͯ]",bv=new RegExp(Al+"+$"),$v="("+jf+"+)|"+(wv+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Al+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Al+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+xv)+("|"+yv+")");class bd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp($v,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Qt("EOF",new Ht(this,r,r));var a=this.tokenRegex.exec(n);if(a===null||a.index!==r)throw new te("Unexpected character: '"+n[r]+"'",new Qt(n[r],new Ht(this,r,r+1)));var l=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[l]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Qt(l,new Ht(this,r,this.tokenRegex.lastIndex))}}class _v{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new te("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,a){if(a===void 0&&(a=!1),a){for(var l=0;l<this.undefStack.length;l++)delete this.undefStack[l][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var kv=xf;w("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});w("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});w("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});w("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});w("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var $d={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(o){var n=o.popToken(),r,a="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")a=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new te("\\char` missing argument");a=n.text.charCodeAt(0)}else r=10;if(r){if(a=$d[n.text],a==null||a>=r)throw new te("Invalid base-"+r+" digit "+n.text);for(var l;(l=$d[o.future().text])!=null&&l<r;)a*=r,a+=l,o.popToken()}return"\\@char{"+a+"}"});var Xl=(o,n,r,a)=>{var l=o.consumeArg().tokens;if(l.length!==1)throw new te("\\newcommand's first argument must be a macro name");var u=l[0].text,f=o.isDefined(u);if(f&&!n)throw new te("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!f&&!r)throw new te("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var v=0;if(l=o.consumeArg().tokens,l.length===1&&l[0].text==="["){for(var p="",x=o.expandNextToken();x.text!=="]"&&x.text!=="EOF";)p+=x.text,x=o.expandNextToken();if(!p.match(/^\s*[0-9]+\s*$/))throw new te("Invalid number of arguments: "+p);v=parseInt(p),l=o.consumeArg().tokens}return f&&a||o.macros.set(u,{tokens:l,numArgs:v}),""};w("\\newcommand",o=>Xl(o,!1,!0,!1));w("\\renewcommand",o=>Xl(o,!0,!1,!1));w("\\providecommand",o=>Xl(o,!0,!0,!0));w("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});w("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});w("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),xr[r],Ye.math[r],Ye.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var _d={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},zv=new Set(["bin","rel"]);w("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in _d?n=_d[r]:(r.slice(0,4)==="\\not"||r in Ye.math&&zv.has(Ye.math[r].group))&&(n="\\dotsb"),n});var Zl={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(o){var n=o.future().text;return n in Zl?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(o){var n=o.future().text;return n in Zl&&n!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(o){var n=o.future().text;return n in Zl?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new te("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Af=se(Mn["Main-Regular"][84][1]-.7*Mn["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Af+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Af+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var Cf=o=>n=>{var r=n.consumeArg().tokens,a=n.consumeArg().tokens,l=n.consumeArg().tokens,u=n.consumeArg().tokens,f=n.macros.get("|"),v=n.macros.get("\\|");n.macros.beginGroup();var p=b=>k=>{o&&(k.macros.set("|",f),l.length&&k.macros.set("\\|",v));var z=b;if(!b&&l.length){var P=k.future();P.text==="|"&&(k.popToken(),z=!0)}return{tokens:z?l:a,numArgs:0}};n.macros.set("|",p(!1)),l.length&&n.macros.set("\\|",p(!0));var x=n.consumeArg().tokens,$=n.expandTokens([...u,...x,...r]);return n.macros.endGroup(),{tokens:$.reverse(),numArgs:0}};w("\\bra@ket",Cf(!1));w("\\bra@set",Cf(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var Pf={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Sv{constructor(n,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new _v(kv,r.macros),this.mode=a,this.stack=[]}feed(n){this.lexer=new bd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,a,l;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:l,end:a}=this.consumeArg(["]"])}else({tokens:l,start:r,end:a}=this.consumeArg());return this.pushToken(new Qt("EOF",a.loc)),this.pushTokens(l),new Qt("",Ht.range(r,a))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],a=n&&n.length>0;a||this.consumeSpaces();var l=this.future(),u,f=0,v=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++f;else if(u.text==="}"){if(--f,f===-1)throw new te("Extra }",u)}else if(u.text==="EOF")throw new te("Unexpected end of input in a macro argument, expected '"+(n&&a?n[v]:"}")+"'",u);if(n&&a)if((f===0||f===1&&n[v]==="{")&&u.text===n[v]){if(++v,v===n.length){r.splice(-v,v);break}}else v=0}while(f!==0||a);return l.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:l,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new te("The length of delimiters doesn't match the number of args!");for(var a=r[0],l=0;l<a.length;l++){var u=this.popToken();if(a[l]!==u.text)throw new te("Use of the macro doesn't match its definition",u)}}for(var f=[],v=0;v<n;v++)f.push(this.consumeArg(r&&r[v+1]).tokens);return f}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new te("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),a=r.text,l=r.noexpand?null:this._getExpansion(a);if(l==null||n&&l.unexpandable){if(n&&l==null&&a[0]==="\\"&&!this.isDefined(a))throw new te("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var u=l.tokens,f=this.consumeArgs(l.numArgs,l.delimiters);if(l.numArgs){u=u.slice();for(var v=u.length-1;v>=0;--v){var p=u[v];if(p.text==="#"){if(v===0)throw new te("Incomplete placeholder at end of macro body",p);if(p=u[--v],p.text==="#")u.splice(v+1,1);else if(/^[1-9]$/.test(p.text))u.splice(v,2,...f[+p.text-1]);else throw new te("Not a valid argument number",p)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Qt(n)]):void 0}expandTokens(n){var r=[],a=this.stack.length;for(this.pushTokens(n);this.stack.length>a;)if(this.expandOnce(!0)===!1){var l=this.stack.pop();l.treatAsRelax&&(l.noexpand=!1,l.treatAsRelax=!1),r.push(l)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(a=>a.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var a=this.lexer.catcodes[n];if(a!=null&&a!==13)return}var l=typeof r=="function"?r(this):r;if(typeof l=="string"){var u=0;if(l.includes("#"))for(var f=l.replace(/##/g,"");f.includes("#"+(u+1));)++u;for(var v=new bd(l,this.settings),p=[],x=v.lex();x.text!=="EOF";)p.push(x),x=v.lex();p.reverse();var $={tokens:p,numArgs:u};return $}return l}isDefined(n){return this.macros.has(n)||xr.hasOwnProperty(n)||Ye.math.hasOwnProperty(n)||Ye.text.hasOwnProperty(n)||Pf.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:xr.hasOwnProperty(n)&&!xr[n].primitive}}var kd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Xo=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),wl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},zd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class va{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Sv(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new te("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Qt("}")),this.gullet.pushTokens(n);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(n,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var l=this.fetch();if(va.endOfExpression.has(l.text)||r&&l.text===r||n&&xr[l.text]&&xr[l.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;a.push(u)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(n){for(var r=-1,a,l=0;l<n.length;l++)if(n[l].type==="infix"){if(r!==-1)throw new te("only one infix operator per group",n[l].token);r=l,a=n[l].replaceWith}if(r!==-1&&a){var u,f,v=n.slice(0,r),p=n.slice(r+1);v.length===1&&v[0].type==="ordgroup"?u=v[0]:u={type:"ordgroup",mode:this.mode,body:v},p.length===1&&p[0].type==="ordgroup"?f=p[0]:f={type:"ordgroup",mode:this.mode,body:p};var x;return a==="\\\\abovefrac"?x=this.callFunction(a,[u,n[r],f],[]):x=this.callFunction(a,[u,f],[]),[x]}else return n}handleSupSubscript(n){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var l;do{var u;l=this.parseGroup(n)}while(((u=l)==null?void 0:u.type)==="internal");if(!l)throw new te("Expected group after '"+a+"'",r);return l}formatUnsupportedCmd(n){for(var r=[],a=0;a<n.length;a++)r.push({type:"textord",mode:"text",text:n[a]});var l={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[l]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,l;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var f=u.text==="\\limits";r.limits=f,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new te("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(a)throw new te("Double superscript",u);a=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(l)throw new te("Double subscript",u);l=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(a)throw new te("Double superscript",u);var v={type:"textord",mode:this.mode,text:"\\prime"},p=[v];for(this.consume();this.fetch().text==="'";)p.push(v),this.consume();this.fetch().text==="^"&&p.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:p}}else if(Xo[u.text]){var x=kd.test(u.text),$=[];for($.push(new Qt(Xo[u.text])),this.consume();;){var b=this.fetch().text;if(!Xo[b]||kd.test(b)!==x)break;$.unshift(new Qt(Xo[b])),this.consume()}var k=this.subparse($);x?l={type:"ordgroup",mode:"math",body:k}:a={type:"ordgroup",mode:"math",body:k}}else break}return a||l?{type:"supsub",mode:this.mode,base:r,sup:a,sub:l}:r}parseFunction(n,r){var a=this.fetch(),l=a.text,u=xr[l];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new te("Got function '"+l+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!u.allowedInText)throw new te("Can't use function '"+l+"' in text mode",a);if(this.mode==="math"&&u.allowedInMath===!1)throw new te("Can't use function '"+l+"' in math mode",a);var{args:f,optArgs:v}=this.parseArguments(l,u);return this.callFunction(l,f,v,a,n)}callFunction(n,r,a,l,u){var f={funcName:n,parser:this,token:l,breakOnTokenText:u},v=xr[n];if(v&&v.handler)return v.handler(f,r,a);throw new te("No function handler for "+n)}parseArguments(n,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var l=[],u=[],f=0;f<a;f++){var v=r.argTypes&&r.argTypes[f],p=f<r.numOptionalArgs;(r.primitive&&v==null||r.type==="sqrt"&&f===1&&u[0]==null)&&(v="primitive");var x=this.parseGroupOfType("argument to '"+n+"'",v,p);if(p)u.push(x);else if(x!=null)l.push(x);else throw new te("Null argument, please report this as a bug")}return{args:l,optArgs:u}}parseGroupOfType(n,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var l=this.parseArgumentGroup(a,"text");return l!=null?{type:"styling",mode:l.mode,body:[l],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",a);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(a)throw new te("A primitive argument cannot be optional");var f=this.parseGroup(n);if(f==null)throw new te("Expected group as "+n,this.fetch());return f}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new te("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var l="",u;(u=this.fetch()).text!=="EOF";)l+=u.text,this.consume();return this.consume(),a.text=l,a}parseRegexGroup(n,r){for(var a=this.fetch(),l=a,u="",f;(f=this.fetch()).text!=="EOF"&&n.test(u+f.text);)l=f,u+=l.text,this.consume();if(u==="")throw new te("Invalid "+r+": '"+a.text+"'",a);return a.range(l,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new te("Invalid color: '"+r.text+"'",r);var l=a[0];return/^[0-9a-f]{6}$/i.test(l)&&(l="#"+l),{type:"color-token",mode:this.mode,color:l}}parseSizeGroup(n){var r,a=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",a=!0);var l=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!l)throw new te("Invalid size: '"+r.text+"'",r);var u={number:+(l[1]+l[2]),unit:l[3]};if(!Fd(u))throw new te("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:a}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(n,r){var a=this.gullet.scanArgument(n);if(a==null)return null;var l=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var f={type:"ordgroup",mode:this.mode,loc:a.loc,body:u};return r&&this.switchMode(l),f}parseGroup(n,r){var a=this.fetch(),l=a.text,u;if(l==="{"||l==="\\begingroup"){this.consume();var f=l==="{"?"}":"\\endgroup";this.gullet.beginGroup();var v=this.parseExpression(!1,f),p=this.fetch();this.expect(f),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Ht.range(a,p),body:v,semisimple:l==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&l[0]==="\\"&&!Pf.hasOwnProperty(l)){if(this.settings.throwOnError)throw new te("Undefined control sequence: "+l,a);u=this.formatUnsupportedCmd(l),this.consume()}return u}formLigatures(n){for(var r=n.length-1,a=0;a<r;++a){var l=n[a],u=l.text;u==="-"&&n[a+1].text==="-"&&(a+1<r&&n[a+2].text==="-"?(n.splice(a,3,{type:"textord",mode:"text",loc:Ht.range(l,n[a+2]),text:"---"}),r-=2):(n.splice(a,2,{type:"textord",mode:"text",loc:Ht.range(l,n[a+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[a+1].text===u&&(n.splice(a,2,{type:"textord",mode:"text",loc:Ht.range(l,n[a+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),l=a.charAt(0)==="*";if(l&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new te(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:l}}zd.hasOwnProperty(r[0])&&!Ye[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=zd[r[0]]+r.slice(1));var u=bv.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var f;if(Ye[this.mode][r]){this.settings.strict&&this.mode==="math"&&kl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var v=Ye[this.mode][r].group,p=Ht.range(n),x;if($8.hasOwnProperty(v)){var $=v;x={type:"atom",mode:this.mode,family:$,loc:p,text:r}}else x={type:v,mode:this.mode,loc:p,text:r};f=x}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Ld(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),f={type:"textord",mode:"text",loc:Ht.range(n),text:r};else return null;if(this.consume(),u)for(var b=0;b<u[0].length;b++){var k=u[0][b];if(!wl[k])throw new te("Unknown accent ' "+k+"'",n);var z=wl[k][this.mode]||wl[k].text;if(!z)throw new te("Accent "+k+" unsupported in "+this.mode+" mode",n);f={type:"accent",mode:this.mode,loc:Ht.range(n),label:z,isStretchy:!1,isShifty:!0,base:f}}return f}}va.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Jl=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new va(n,r);delete a.gullet.macros.current["\\df@tag"];var l=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new te("\\tag works only in display equations");l=[{type:"tag",mode:"text",body:l,tag:a.subparse([new Qt("\\df@tag")])}]}return l},Ef=function(n,r,a){r.textContent="";var l=eu(n,a).toNode();r.appendChild(l)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Ef=function(){throw new te("KaTeX doesn't work in quirks mode.")});var Tv=function(n,r){var a=eu(n,r).toMarkup();return a},Mv=function(n,r){var a=new Dl(r);return Jl(n,a)},Rf=function(n,r,a){if(a.throwOnError||!(n instanceof te))throw n;var l=Y(["katex-error"],[new sn(r)]);return l.setAttribute("title",n.toString()),l.setAttribute("style","color:"+a.errorColor),l},eu=function(n,r){var a=new Dl(r);try{var l=Jl(n,a);return B8(l,n,a)}catch(u){return Rf(u,n,a)}},qv=function(n,r){var a=new Dl(r);try{var l=Jl(n,a);return I8(l,n,a)}catch(u){return Rf(u,n,a)}},jv="0.16.33",Av={Span:Mi,Anchor:Il,SymbolNode:sn,SvgNode:Gn,PathNode:br,LineNode:_l},Sd={version:jv,render:Ef,renderToString:Tv,ParseError:te,SETTINGS_SCHEMA:Zo,__parse:Mv,__renderToDomTree:eu,__renderToHTMLTree:qv,__setFontMetrics:h8,__defineSymbol:d,__defineFunction:ue,__defineMacro:w,__domTree:Av};function Cv(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,a)=>{try{return Sd.renderToString(a.trim(),{displayMode:!0,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,a)=>{try{return Sd.renderToString(a.trim(),{displayMode:!1,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}}),n}function Pv({nodeId:o,nodes:n,questionBank:r,onAnswer:a,onSkip:l,lang:u,excludeIndices:f=[]}){const v=n.find(O=>O.id===o),p=ee.useMemo(()=>h5(r,o,f),[o,f]),x="#4a9eff",$=v?u==="pl"?v.labelPl:v.label:o,[b,k]=ee.useState(null),[z,P]=ee.useState(!1),R=()=>{b!==null&&P(!0)},B=()=>{a(b===p.correct,p,p.index),k(null),P(!1)},N=O=>_.jsx("span",{dangerouslySetInnerHTML:{__html:Cv(O)}});return _.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(5,9,18,0.75)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16},children:_.jsxs("div",{style:{width:"100%",maxWidth:500,background:dt.surface,border:`1px solid ${x}40`,borderRadius:12,padding:"20px 24px",color:dt.textBody,boxShadow:"0 24px 64px rgba(0,0,0,0.6)",maxHeight:"90vh",overflowY:"auto",boxSizing:"border-box"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[_.jsx("div",{style:{color:x,fontWeight:700,fontSize:14},children:$}),_.jsx("button",{onClick:()=>l(p==null?void 0:p.index),style:{background:"none",border:"none",color:dt.textDim,cursor:"pointer",fontSize:20,lineHeight:1,padding:"0 4px",minWidth:32,minHeight:32},children:"×"})]}),p?_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{fontSize:14,color:dt.textBody,marginBottom:16,lineHeight:1.7},children:N(p.q)}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16},children:p.options.map((O,H)=>{let E=dt.bg,G=dt.border,U=dt.textBody;return b===H&&!z&&(E=`${x}22`,G=x,U=x),z&&(H===p.correct?(E="#27ae6022",G="#27ae60",U="#2ecc71"):H===b&&(E="#e74c3c22",G="#e74c3c",U="#ff6b6b")),_.jsxs("button",{onClick:()=>{z||k(H)},style:{textAlign:"left",padding:"12px 14px",borderRadius:8,fontSize:13,cursor:z?"default":"pointer",background:E,border:`1px solid ${G}`,color:U,lineHeight:1.5,minHeight:44},children:[_.jsxs("span",{style:{marginRight:8,opacity:.5},children:[["A","B","C","D"][H],"."]}),N(O)]},H)})}),z&&p.hint&&_.jsx("div",{style:{fontSize:12,color:dt.textMuted,marginBottom:14,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:N(p.hint)}),z?_.jsx("button",{onClick:B,style:{...wi(b===p.correct?"#27ae60":"#e74c3c"),width:"100%"},children:b===p.correct?re("knownConfirm",u):re("unknownConfirm",u)}):_.jsx("button",{onClick:R,disabled:b===null,style:{...wi(x),width:"100%",opacity:b===null?.4:1},children:re("checkAnswer",u)})]}):_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:dt.textDim,fontSize:13,marginBottom:16},children:re("noQuestion",u)}),_.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[_.jsx("button",{onClick:()=>a(!0,null,null),style:wi("#27ae60"),children:re("yesKnow",u)}),_.jsx("button",{onClick:()=>a(!1,null,null),style:wi("#e74c3c"),children:re("noKnow",u)}),_.jsx("button",{onClick:()=>l(null),style:wi("#3a4d63"),children:re("skipBtn",u)})]})]})]})})}function Ev({belief:o,frontier:n,visibleFrontier:r,hasStarted:a,nextSuggestedId:l,sessionComplete:u,adjacency:f,expectedRemaining:v,pCorrect:p,questionsAnswered:x,nodes:$,lang:b,onReset:k,onNodeClick:z,SCOPE_LABELS:P}){var U,X;const R=Object.fromEntries($.map(W=>[W.id,W])),B=W=>{var J,ve;return b==="pl"?(J=R[W])==null?void 0:J.labelPl:(ve=R[W])==null?void 0:ve.label},N=$.filter(W=>o[W.id]==="known"),O=$.filter(W=>o[W.id]==="unknown"),H=$.length,E=[{label:re("statKnown",b),count:N.length,color:"#27ae60"},{label:re("statUnknown",b),count:O.length,color:"#e74c3c"},{label:re("statRemaining",b),count:v??"-",color:"#4a9eff"}],G=p?Math.round(p*100):50;return _.jsxs("div",{style:{position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[_.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:10,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{children:[re("diagHeader",b)," ",u?"✓":""]}),_.jsx("button",{onClick:k,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:re("reset",b)})]}),_.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:E.map(({label:W,count:J,color:ve})=>_.jsxs("div",{style:{flex:1,textAlign:"center",background:`${ve}18`,borderRadius:5,padding:"5px 0",border:`1px solid ${ve}40`},children:[_.jsx("div",{style:{color:ve,fontWeight:700,fontSize:15},children:J}),_.jsx("div",{style:{color:"#6b7d9a",fontSize:8},children:W})]},W))}),!u&&a&&_.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between"},children:[_.jsxs("span",{children:[re("answered",b),": ",_.jsx("span",{style:{color:"#f5f6fa"},children:x})]}),_.jsxs("span",{children:[re("estimated",b),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:["~",v??"-"]})]}),_.jsxs("span",{children:[re("accuracy",b),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:[G,"%"]})]})]}),u&&_.jsxs("div",{children:[_.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[_.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:12,marginBottom:4},children:re("sessionDone",b)}),_.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[re("sessionDoneSub",b)," ",_.jsx("span",{style:{color:"#f5f6fa"},children:x})," ",re("sessionDoneQ",b),"."," ",re("sessionDoneClass",b)," ",N.length+O.length,"/",H,".",_.jsx("br",{}),re("sessionDoneAcc",b),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:[G,"%"]}),"."," ",re("sessionDoneKnown",b)," ",_.jsx("span",{style:{color:"#2ecc71"},children:N.length}),","," ",re("sessionDoneStudy",b)," ",_.jsx("span",{style:{color:"#e74c3c"},children:O.length}),"."]})]}),O.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:[re("toStudy",b)," (",O.length,")"]}),$.filter(W=>o[W.id]==="unknown").filter(W=>(f.prereqs[W.id]??[]).every(J=>o[J]==="known")).slice(0,8).map(W=>{var J,ve;return _.jsxs("div",{style:{padding:"5px 8px",marginBottom:3,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:9,color:"#ff8a8a",lineHeight:1.4},children:[B(W.id),_.jsx("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:(ve=P==null?void 0:P[(J=R[W.id])==null?void 0:J.scope])==null?void 0:ve[b==="pl"?"pl":"en"]})]},W.id)})]}),N.length>0&&_.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:9},children:["✓ ",re("knownList",b)," ",N.length]})]}),!u&&!a&&_.jsxs("div",{style:{marginBottom:10},children:[l&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:5},children:re("startHere",b)}),_.jsx(Rv,{id:l,label:B(l),scope:(X=P==null?void 0:P[(U=R[l])==null?void 0:U.scope])==null?void 0:X[b==="pl"?"pl":"en"],subtitle:re("startHereSub",b),onClick:()=>z==null?void 0:z(l)})]}),_.jsx("div",{style:{fontSize:9,color:"#3a4d63",marginTop:8,lineHeight:1.5},children:re("clickAnyNode",b)})]}),!u&&a&&r.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:5},children:re("whatNext",b)}),r.map(W=>{var ve,ke;const J=W===l;return _.jsxs("div",{onClick:()=>z==null?void 0:z(W),style:{padding:"6px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:J?"#4a9eff18":"#f39c1215",border:`1px solid ${J?"#4a9eff55":"#f39c1240"}`,fontSize:10,color:J?"#a8d4ff":"#f5d78e",transition:"background 0.15s"},onMouseEnter:Te=>Te.currentTarget.style.background=J?"#4a9eff30":"#f39c1230",onMouseLeave:Te=>Te.currentTarget.style.background=J?"#4a9eff18":"#f39c1215",children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:B(W)}),_.jsx("span",{style:{fontSize:9,opacity:.7},children:J?"★":"→"})]}),_.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:[(ke=P==null?void 0:P[(ve=R[W])==null?void 0:ve.scope])==null?void 0:ke[b==="pl"?"pl":"en"],J&&_.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:re("best",b)})]})]},W)})]}),!u&&N.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",re("knownList",b)," (",N.length,")"]}),N.map(W=>_.jsx("div",{style:{fontSize:9,color:"#6dbb87",paddingLeft:4,lineHeight:1.7},children:B(W.id)},W.id))]}),!u&&_.jsxs("div",{style:{marginTop:12,color:"#3a4d63",fontSize:9,lineHeight:1.5},children:[re("hintClick",b),_.jsx("br",{}),re("hintShift",b),_.jsx("br",{}),re("hintGreen",b)]})]})}function Rv({id:o,label:n,scope:r,subtitle:a,onClick:l}){return _.jsxs("div",{onClick:l,style:{padding:"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff",transition:"background 0.15s"},onMouseEnter:u=>u.currentTarget.style.background="#4a9eff30",onMouseLeave:u=>u.currentTarget.style.background="#4a9eff18",children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[_.jsx("span",{style:{fontWeight:600},children:n}),_.jsx("span",{style:{opacity:.5},children:"→"})]}),_.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[r,a?` · ${a}`:""]})]})}function Dv({nodes:o,lang:n,targetNode:r,subgraphIds:a,ddClassification:l,betaBeliefs:u,ddComplete:f,ddNextNodeId:v,questionsAnswered:p,onNodeClick:x,onReset:$}){const b=Object.fromEntries(o.map(E=>[E.id,E])),k=E=>{var G,U;return n==="pl"?(G=b[E])==null?void 0:G.labelPl:(U=b[E])==null?void 0:U.label},z=a.filter(E=>l[E]==="known"),P=a.filter(E=>l[E]==="unknown"),R=a.filter(E=>l[E]==="uncertain"),B=a.length,N=z.length+P.length,O=B>0?Math.round(N/B*100):0,H=k(r);return _.jsxs("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[_.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{children:[re("deepDiveHeader",n)," ",f?"✓":""]}),_.jsx("button",{onClick:$,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:re("reset",n)})]}),_.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[_.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:re("deepDiveTarget",n)}),_.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:H}),_.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[B," ",re("deepDiveNodes",n)]})]}),_.jsxs("div",{style:{marginBottom:10},children:[_.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:_.jsx("div",{style:{height:"100%",borderRadius:3,width:`${O}%`,background:f?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[_.jsxs("span",{children:[re("classified",n),": ",_.jsxs("span",{style:{color:"#f5f6fa"},children:[N,"/",B]})]}),_.jsxs("span",{children:[re("questions",n),": ",_.jsx("span",{style:{color:"#f5f6fa"},children:p})]})]})]}),f&&_.jsxs("div",{children:[_.jsxs("div",{style:{background:z.length>P.length?"#27ae6018":"#e74c3c18",border:`1px solid ${z.length>P.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[_.jsx("div",{style:{color:z.length>P.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:re("diagReady",n)}),_.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[re("diagKnown",n),": ",_.jsx("span",{style:{color:"#2ecc71"},children:z.length})," / ",re("diagStudy",n),": ",_.jsx("span",{style:{color:"#ff6b6b"},children:P.length})," / ",re("diagTotal",n),": ",B]})]}),P.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:re("studyThese",n)}),a.filter(E=>l[E]==="unknown").slice(0,8).map(E=>{var G;return _.jsx(Td,{id:E,label:k(E),scope:(G=b[E])==null?void 0:G.scope,classification:"unknown",beta:u[E]},E)})]}),z.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:re("mastered",n)}),a.filter(E=>l[E]==="known").map(E=>{var G;return _.jsx(Td,{id:E,label:k(E),scope:(G=b[E])==null?void 0:G.scope,classification:"known",beta:u[E]},E)})]})]}),!f&&_.jsxs(_.Fragment,{children:[v&&_.jsxs("div",{style:{marginBottom:10},children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:re("nextQuestion",n)}),_.jsxs("div",{onClick:()=>x==null?void 0:x(v),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[k(v),_.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[re("confidence",n),": ",Nv(u[v])]})]})]}),R.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[re("unclassified",n)," (",R.length,")"]}),R.map(E=>_.jsxs("div",{onClick:()=>x==null?void 0:x(E),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:E===v?"#4a9eff18":"#f39c1212",border:`1px solid ${E===v?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:E===v?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:k(E)}),_.jsx(Df,{beta:u[E]})]},E))]})]})]})}function Nv(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function Df({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,a=Math.min(1,(r-2)/4),l=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return _.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:_.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:l,opacity:.4+a*.6,transition:"width 0.3s ease"}})})}function Td({id:o,label:n,scope:r,classification:a,beta:l}){const u=a==="known"?"#27ae60":"#e74c3c";return _.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:a==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:n}),_.jsx(Df,{beta:l})]})}function Bv({filterScope:o,toggleScope:n,clearScope:r,filterSection:a,toggleSection:l,clearSection:u,searchTerm:f,setSearchTerm:v,lang:p,setLang:x,SECTIONS:$,SCOPE_COLORS:b,SCOPE_LABELS:k}){return _.jsxs("div",{style:{padding:"6px 12px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",flexShrink:0,minHeight:40},children:[_.jsx("input",{value:f,onChange:z=>v(z.target.value),placeholder:re("search",p),style:{background:"#0d1520",border:"1px solid #1e2d45",borderRadius:4,color:"#c8d6e5",padding:"6px 10px",fontSize:13,width:"min(140px, 30vw)",outline:"none",minHeight:32}}),_.jsx("span",{style:{color:"#1e2d45",fontSize:10},children:"|"}),_.jsx("span",{style:{fontSize:11,color:"#3a4d63"},children:re("filterSection",p)}),_.jsx("button",{style:xi(a.size===0,"#c8d6e5"),onClick:u,children:re("all",p)}),Object.entries($).map(([z,P])=>_.jsx("button",{style:xi(a.has(z),P.color),onClick:()=>l(z),children:P.label},z)),_.jsx("span",{style:{color:"#1e2d45",fontSize:10},children:"|"}),_.jsx("span",{style:{fontSize:11,color:"#3a4d63"},children:re("filterScope",p)}),_.jsx("button",{style:xi(o.size===0,"#c8d6e5"),onClick:r,children:re("all",p)}),Object.entries(b).map(([z,P])=>{var R;return _.jsx("button",{style:xi(o.has(z),P),onClick:()=>n(z),children:(R=k[z])==null?void 0:R[p==="pl"?"pl":"en"]},z)}),_.jsx("span",{style:{color:"#1e2d45",fontSize:10},children:"|"}),_.jsx("button",{style:xi(!0,p==="pl"?"#f5a623":"#4a9eff"),onClick:()=>x(z=>z==="pl"?"en":"pl"),title:p==="pl"?"Switch to English":"Przełącz na polski",children:p==="pl"?"PL":"EN"})]})}function Iv({lang:o,diagMode:n,SCOPE_COLORS:r,SCOPE_LABELS:a,SECTIONS:l}){const[u,f]=ee.useState(!1),v=Object.entries(r).map(([p,x])=>{var $;return{color:x,label:($=a[p])==null?void 0:$[o==="pl"?"pl":"en"]}});return _.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152095",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[_.jsxs("button",{onClick:()=>f(p=>!p),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[_.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),re("legendTitle",o)]}),u&&_.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&_.jsxs("div",{style:{marginBottom:8},children:[[{color:dt.knownHi,label:re("legendKnown",o)},{color:dt.unknownHi,label:re("legendUnknown",o)},{color:dt.frontier,label:re("legendFrontier",o)},{color:"#4a5568",label:re("legendUnclassified",o)}].map(({color:p,label:x})=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:p,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),_.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),_.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:re("legendScopes",o)}),v.map(({color:p,label:x})=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:p,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),_.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[_.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:re("legendStages",o)}),Object.entries(l).map(([p,x])=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[_.jsx("div",{style:{width:8,height:3,borderRadius:1,background:x.color,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:x.label})]},p))]})]})]})}function Lv({nodes:o,lang:n,onSelect:r,onClose:a,SECTIONS:l,SCOPE_COLORS:u}){const[f,v]=ee.useState(""),[p,x]=ee.useState(-1),$=ee.useRef([]),b=ee.useMemo(()=>Object.keys(l??{}),[l]),k=ee.useMemo(()=>{const N=f.toLowerCase();return o.filter(O=>!N||O.label.toLowerCase().includes(N)||O.labelPl.toLowerCase().includes(N))},[o,f]),z=ee.useMemo(()=>{const N={};for(const H of b)N[H]=[];for(const H of k){const E=H.section??b[0]??"default";N[E]||(N[E]=[]),N[E].push(H)}const O=[];for(const H of b)for(const E of N[H]??[])O.push(E);return O},[k,b]),P=ee.useMemo(()=>{const N={};for(const O of b)N[O]=[];for(const O of k){const H=O.section??b[0]??"default";N[H]||(N[H]=[]),N[H].push(O)}return N},[k,b]),R=N=>n==="pl"?N.labelPl:N.label;ee.useEffect(()=>{const N=O=>{if(O.key==="Escape"){a();return}O.key==="ArrowDown"&&(O.preventDefault(),x(H=>Math.min(H+1,z.length-1))),O.key==="ArrowUp"&&(O.preventDefault(),x(H=>Math.max(H-1,0))),O.key==="Enter"&&p>=0&&z[p]&&(O.preventDefault(),r(z[p].id))};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[z,p,a,r]),ee.useEffect(()=>{p>=0&&$.current[p]&&$.current[p].scrollIntoView({block:"nearest"})},[p]),ee.useEffect(()=>{x(-1)},[f]);const B={title:n==="pl"?"Wybierz cel":"Select Goal",subtitle:n==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:n==="pl"?"Szukaj tematu...":"Search topics...",noResults:n==="pl"?"Brak wyników":"No results",footer:`${k.length} / ${o.length} ${n==="pl"?"tematów":"topics"}`,cancel:n==="pl"?"Anuluj":"Cancel"};return _.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:N=>{N.target===N.currentTarget&&a()},children:_.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:B.title}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:B.subtitle})]}),_.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),_.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:_.jsx("input",{autoFocus:!0,value:f,onChange:N=>v(N.target.value),placeholder:B.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),_.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[b.map(N=>{const O=P[N];if(!O||O.length===0)return null;const H=l==null?void 0:l[N];return _.jsxs("div",{style:{marginBottom:12},children:[_.jsx("div",{style:{fontSize:9,fontWeight:700,color:(H==null?void 0:H.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(H==null?void 0:H.label)??N}),_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:O.map(E=>{const G=z.indexOf(E),U=(u==null?void 0:u[E.scope])??"#4a9eff",X=p===G;return _.jsxs("button",{ref:W=>$.current[G]=W,onClick:()=>r(E.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:X?`${U}35`:`${U}15`,border:`1px solid ${X?U:`${U}40`}`,color:"#c8d6e5",cursor:"pointer",outline:X?`2px solid ${U}`:"none",outlineOffset:1},onMouseEnter:W=>{W.currentTarget.style.background=`${U}30`,W.currentTarget.style.borderColor=`${U}90`},onMouseLeave:W=>{z.indexOf(E)!==p&&(W.currentTarget.style.background=`${U}15`,W.currentTarget.style.borderColor=`${U}40`)},children:[_.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:U,verticalAlign:"middle"}}),R(E)]},E.id)})})]},N)}),k.length===0&&_.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:B.noResults})]}),_.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:B.footer}),_.jsx("button",{onClick:a,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:B.cancel})]})]})})}function Fv({isOpen:o,onSelect:n,onClose:r,lang:a="pl"}){const l=[{id:"quick",icon:"⚡",color:"#4a9eff",label:re("modeQuickLabel",a),description:re("modeQuickDesc",a)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:re("modeDeepLabel",a),description:re("modeDeepDesc",a)}],[u,f]=ee.useState(null),v=ee.useRef(null);return ee.useEffect(()=>{o&&(f(null),setTimeout(()=>{var p;return(p=v.current)==null?void 0:p.focus()},100))},[o]),ee.useEffect(()=>{if(!o)return;const p=x=>{x.key==="Escape"&&r(),x.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[o,u,r,n]),o?_.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:p=>{p.target===p.currentTarget&&r()},children:_.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[_.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:re("modePickerTitle",a)}),_.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:re("modePickerSub",a)})]}),_.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:l.map((p,x)=>_.jsxs("button",{ref:x===0?v:null,onClick:()=>f(p.id),onDoubleClick:()=>n(p.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===p.id?`${p.color}18`:"#0a0e17",border:`1px solid ${u===p.id?p.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:$=>{$.currentTarget.style.background=`${p.color}18`,$.currentTarget.style.borderColor=`${p.color}60`},onMouseLeave:$=>{u!==p.id&&($.currentTarget.style.background="#0a0e17",$.currentTarget.style.borderColor="#1e2d45")},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[_.jsx("span",{style:{fontSize:16},children:p.icon}),_.jsx("span",{style:{fontWeight:600,color:u===p.id?p.color:"#f5f6fa"},children:p.label})]}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:p.description})]},p.id))}),_.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:re("cancel",a)}),_.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#1e2d45",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:re("next",a)})]})]})}):null}const Ov=[{key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function Hv({isOpen:o,onClose:n,lang:r}){return ee.useEffect(()=>{if(!o)return;const a=l=>{l.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,n]),o?_.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&n()},children:_.jsxs("div",{style:{width:"100%",maxWidth:480,background:dt.surface,border:"1px solid #1e2d45",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[_.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #0a1628 100%)",borderBottom:"1px solid #1e2d45",textAlign:"center"},children:[_.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),_.jsx("div",{style:{fontWeight:700,fontSize:18,color:dt.textPrimary,marginBottom:8},children:re("onboardingTitle",r)}),_.jsx("div",{style:{fontSize:12,color:dt.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:re("onboardingSub",r)})]}),_.jsx("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:12},children:Ov.map(({key:a,descKey:l,color:u})=>_.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",padding:"10px 12px",borderRadius:8,background:`${u}0e`,border:`1px solid ${u}25`},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:u,flexShrink:0,marginTop:4}}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:600,fontSize:12,color:dt.textPrimary,marginBottom:3},children:re(a,r)}),_.jsx("div",{style:{fontSize:10,color:dt.textDim,lineHeight:1.5},children:re(l,r)})]})]},a))}),_.jsx("div",{style:{margin:"0 24px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:dt.textFaint,textAlign:"center"},children:re("onboardingLangHint",r)}),_.jsxs("div",{style:{padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("button",{onClick:n,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:dt.textDim},children:re("onboardingSkip",r)}),_.jsx("button",{onClick:n,style:{padding:"8px 22px",borderRadius:6,fontSize:12,cursor:"pointer",fontWeight:700,background:"#4a9eff",border:"none",color:"#fff",boxShadow:"0 0 16px #4a9eff44"},children:re("onboardingStart",r)})]})]})}):null}const aa={x:40,y:40,scale:.72};function Gv(){return typeof window>"u"?aa:window.innerWidth<600?{x:20,y:20,scale:.42}:aa}function Wv({courseId:o,RAW_NODES:n,RAW_EDGES:r,QUESTION_BANK:a,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:f,COURSE_META:v,onBackToCourses:p}){const[x,$]=ee.useState(Rd),[b,k]=Sn("lang","pl"),[z,P]=ee.useState(new Set),[R,B]=ee.useState(new Set),[N,O]=ee.useState(""),[H,E]=ee.useState(null),[G,U]=ee.useState(null),[X,W]=ee.useState(!1),[J,ve]=ee.useState(!1),[ke,Te]=Sn("onboardingSeen",!1),[je,Pe]=ee.useState(!ke),Ke=ee.useCallback(()=>{Te(!0),Pe(!1)},[Te]),Ue=ee.useCallback(le=>P(Le=>{const Fe=new Set(Le);return Fe.has(le)?Fe.delete(le):Fe.add(le),Fe}),[]),De=ee.useCallback(le=>B(Le=>{const Fe=new Set(Le);return Fe.has(le)?Fe.delete(le):Fe.add(le),Fe}),[]),oe=ee.useCallback(()=>P(new Set),[]),ye=ee.useCallback(()=>B(new Set),[]),ae=ee.useMemo(()=>s7(n,r),[n,r]),[j,F]=ee.useState(()=>il(x,300,n,r));ee.useMemo(()=>Gv(),[]);const he=ee.useMemo(()=>n.map(le=>{var Le,Fe;return{...le,x:((Le=j[le.id])==null?void 0:Le.x)??le.x,y:((Fe=j[le.id])==null?void 0:Fe.y)??le.y}}),[n,j]),we=ee.useRef(null),{viewTransform:xe,setViewTransform:qe,toCanvas:Ee,startPan:Re,cursorStyle:Ne,setCursorStyle:mt,handleMouseMove:Xt,handleMouseUp:zr}=k7(we),{startNodeDrag:gn,handleDragMove:Kn,handleDragEnd:Sr}=z7(Ee,he,F,mt),{diagMode:We,setDiagMode:Zt,mode:Je,setMode:yn,quizNode:at,setQuizNode:_t,questionsAnswered:Qr,setAnsweredQuestions:ji,getAnsweredIndices:Ai,handleDiagClick:q0,handleQuizAnswer:Ci,resetDiagnostic:xn,startDeepDive:Yr,targetNode:j0,belief:Qn,frontier:Tr,visibleFrontier:Pi,hasStarted:Xr,nextSuggestedId:Mr,expectedRemaining:ga,pCorrect:A0,sessionComplete:qr,betaBeliefs:C0,subgraphIds:Cn,ddClassification:Yn,ddNextNodeId:un,ddComplete:wn}=I7(ae,a,o),Ei=ee.useMemo(()=>{const le=N.toLowerCase(),Le=n.filter(Fe=>!(z.size>0&&!z.has(Fe.scope)||R.size>0&&!R.has(Fe.section)||le&&!Fe.label.toLowerCase().includes(le)&&!Fe.labelPl.toLowerCase().includes(le)));return Le.length<n.length?new Set(Le.map(Fe=>Fe.id)):null},[n,z,R,N]),Xn=H||G,P0=ee.useMemo(()=>{var Le,Fe;if(!Xn)return null;const le=new Set([Xn]);return(Le=ae.prereqs[Xn])==null||Le.forEach(B0=>le.add(B0)),(Fe=ae.dependents[Xn])==null||Fe.forEach(B0=>le.add(B0)),le},[Xn,ae]),E0=ee.useMemo(()=>!We||Je!=="deepdive"||Cn.length===0?null:new Set(Cn),[We,Je,Cn]),Ri=ee.useCallback(le=>{const Le=le.target.closest("[data-node-id]");if(Le){gn(Le.getAttribute("data-node-id"),le.clientX,le.clientY),le.stopPropagation();return}Re(le.clientX,le.clientY)},[gn,Re]),R0=ee.useCallback(le=>{Kn(le.clientX,le.clientY)||Xt(le)},[Kn,Xt]),D0=ee.useCallback(()=>{Sr(),zr()},[Sr,zr]);ee.useEffect(()=>{if(Je==="quick"&&!at&&Mr&&!qr&&Xr){const le=setTimeout(()=>_t(Mr),400);return()=>clearTimeout(le)}},[Je,at,Mr,qr,Xr]),ee.useEffect(()=>{if(Je==="deepdive"&&!at&&un&&!wn){const le=setTimeout(()=>_t(un),400);return()=>clearTimeout(le)}},[Je,at,un,wn]),ee.useEffect(()=>{const le=Le=>{Le.key==="Escape"&&(E(null),W(!1))};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[]);const jr=ee.useCallback(le=>{$(le),F(il(le,300,n,r)),qe(aa)},[qe,n,r]),N0=ee.useCallback(()=>{We?(Zt(!1),xn(),E(null)):ve(!0)},[We,Zt,xn]),Ar=ee.useCallback(le=>{ve(!1),xn(),le==="deepdive"?(Zt(!0),W(!0)):(Zt(!0),yn("quick"),E(null))},[Zt,yn,xn]),ya=ee.useMemo(()=>{if(Je!=="deepdive")return{};const le={};for(const[Le,Fe]of Object.entries(Yn))Fe==="known"?le[Le]="known":Fe==="unknown"&&(le[Le]="unknown");return le},[Je,Yn]),Cr=Je==="deepdive"?ya:Qn,Zr=Je==="deepdive"?Cn.filter(le=>Yn[le]==="uncertain"):Pi,Jr=b==="pl"?v.title??v.titleEn:v.titleEn??v.title;return _.jsxs("div",{style:{width:"100%",height:"100vh",background:"#0a0e17",fontFamily:Dd,color:"#c8d6e5",display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"8px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:10,flexShrink:0,flexWrap:"wrap"},children:[p&&_.jsx("button",{onClick:p,title:"Back to course picker",style:{padding:"6px 10px",borderRadius:4,fontSize:13,cursor:"pointer",border:"1px solid #1e2d45",background:"transparent",color:"#6b7d9a",minHeight:36},children:"←"}),_.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:"#f5f6fa",letterSpacing:1,whiteSpace:"nowrap"},children:Jr}),_.jsxs("span",{style:{fontSize:9,color:"#3a4d63",whiteSpace:"nowrap"},children:[n.length," ",re("topicsCount",b)," · ",r.length," ",re("edgesCount",b)]}),_.jsx("span",{style:{fontSize:9,color:"#3a4d63",marginLeft:"auto"},children:re(We?Je==="deepdive"?"hintDiagDeep":"hintDiagQuick":"hintBrowse",b)}),_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[_.jsx("div",{style:{display:"flex",gap:3},children:Ed.map(le=>_.jsx("button",{onClick:()=>jr(le.meta.id),title:re("layoutLabel",b),style:{padding:"6px 10px",borderRadius:4,fontSize:12,cursor:"pointer",border:x===le.meta.id?"1px solid #4a9eff":"1px solid #1e2d45",background:x===le.meta.id?"#4a9eff22":"transparent",color:x===le.meta.id?"#4a9eff":"#6b7d9a",minHeight:36},children:le.meta.label},le.meta.id))}),_.jsx("span",{style:{color:"#1e2d45"},children:"|"}),_.jsx("button",{onClick:N0,style:{padding:"8px 14px",borderRadius:5,fontSize:13,cursor:"pointer",fontWeight:600,border:We?"1px solid #f39c12":"1px solid #1e2d45",background:We?"#f39c1222":"transparent",color:We?"#f39c12":"#6b7d9a",whiteSpace:"nowrap",minHeight:36},children:re(We?Je==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",b)}),We&&_.jsx("button",{onClick:()=>W(!0),title:re("goalBtnTitle",b),style:{padding:"8px 12px",borderRadius:5,fontSize:13,cursor:"pointer",border:"1px solid #8e44ad",background:Je==="deepdive"?"#8e44ad22":"transparent",color:Je==="deepdive"?"#c39bd3":"#6b7d9a",whiteSpace:"nowrap",minHeight:36},children:re("goalBtn",b)})]})]}),_.jsx(Bv,{filterScope:z,toggleScope:Ue,clearScope:oe,filterSection:R,toggleSection:De,clearSection:ye,searchTerm:N,setSearchTerm:O,lang:b,setLang:k,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:f}),_.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[_.jsxs("svg",{ref:we,width:"100%",height:"100%",style:{cursor:Ne},onMouseDown:Ri,onMouseMove:R0,onMouseUp:D0,onMouseLeave:D0,onClick:le=>{if(!We)return;const Le=le.target.closest("[data-node-id]");Le&&q0(Le.getAttribute("data-node-id"),le.shiftKey)},children:[_.jsxs("defs",{children:[_.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),_.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),_.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),_.jsxs("g",{transform:`translate(${xe.x},${xe.y}) scale(${xe.scale})`,children:[_.jsx(L7,{edges:r,nodes:he,highlightedIds:We&&Je==="deepdive"?E0:P0}),_.jsx(H7,{nodes:he,filteredIds:We&&Je==="deepdive"?E0:Ei,highlightedIds:We?null:P0,selected:H,onSelect:le=>{if(We){q0(le,!1);return}E(le===H?null:le)},onHover:U,lang:b,diagMode:We,belief:Cr,frontier:Zr,scale:xe.scale,scopeColors:u})]})]}),H&&!We&&_.jsx(G7,{nodeId:H,nodes:he,adjacency:ae,lang:b,SCOPE_COLORS:u,SCOPE_LABELS:f,SECTIONS:l}),We&&at&&_.jsx(Pv,{nodeId:at,nodes:he,lang:b,questionBank:a,excludeIndices:Ai(at),onAnswer:(le,Le,Fe)=>Ci(at,le,Le,Fe),onSkip:le=>{typeof le=="number"&&ji(Le=>new Set([...Le,`${at}:${le}`])),_t(null)}}),We&&Je==="quick"&&!at&&_.jsx(Ev,{belief:Qn,frontier:Tr,visibleFrontier:Pi,hasStarted:Xr,nextSuggestedId:Mr,sessionComplete:qr,adjacency:ae,expectedRemaining:ga,pCorrect:A0,questionsAnswered:Qr,nodes:he,lang:b,onNodeClick:le=>_t(le),onReset:xn,SCOPE_LABELS:f}),We&&Je==="deepdive"&&!at&&j0&&_.jsx(Dv,{nodes:he,lang:b,targetNode:j0,subgraphIds:Cn,ddClassification:Yn,betaBeliefs:C0,ddComplete:wn,ddNextNodeId:un,questionsAnswered:Qr,onNodeClick:le=>_t(le),onReset:xn}),_.jsx(Iv,{lang:b,diagMode:We,SCOPE_COLORS:u,SCOPE_LABELS:f,SECTIONS:l}),_.jsx("div",{style:{position:"absolute",right:16,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([le,Le])=>_.jsx("button",{onClick:()=>{Le===null?(F(il(x,300,n,r)),qe(aa)):qe(Fe=>({...Fe,scale:Math.max(.15,Math.min(5,Fe.scale*Le))}))},style:{width:44,height:44,background:"#0d1520",border:"1px solid #1e2d45",color:"#c8d6e5",borderRadius:6,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"},children:le},le))})]}),X&&_.jsx(Lv,{nodes:he,lang:b,SECTIONS:l,SCOPE_COLORS:u,onSelect:le=>{W(!1),Yr(le)},onClose:()=>W(!1)}),_.jsx(Fv,{isOpen:J,onSelect:Ar,onClose:()=>ve(!1),lang:b}),_.jsx(Hv,{isOpen:je,onClose:Ke,lang:b})]})}function Uv(){const[o,n]=ee.useState(o7),[r,a]=ee.useState(!1),l=r7[o];return l?r?_.jsx(Vv,{courses:i7,activeCourseId:o,onSelect:u=>{n(u),a(!1)},onClose:()=>a(!1)}):_.jsx(Wv,{courseId:o,RAW_NODES:l.RAW_NODES,RAW_EDGES:l.RAW_EDGES,QUESTION_BANK:l.QUESTION_BANK,SECTIONS:l.SECTIONS,SCOPE_COLORS:l.SCOPE_COLORS,SCOPE_LABELS:l.SCOPE_LABELS,COURSE_META:l.COURSE_META,onBackToCourses:()=>a(!0)},o):_.jsxs("div",{style:{color:"#ff6b6b",padding:20},children:["Unknown course: ",o]})}function Vv({courses:o,activeCourseId:n,onSelect:r,onClose:a}){return _.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#0a0e17",fontFamily:Dd,color:"#c8d6e5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32},children:[_.jsxs("div",{style:{textAlign:"center"},children:[_.jsx("div",{style:{fontSize:28,fontWeight:700,color:"#f5f6fa",marginBottom:6},children:"oczochodzi.pl"}),_.jsx("div",{style:{fontSize:12,color:"#3a4d63"},children:"Select a course"})]}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"min(340px, calc(100vw - 32px))"},children:o.map(l=>_.jsxs("button",{onClick:()=>r(l.id),style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:10,cursor:"pointer",border:l.id===n?`1px solid ${l.color}`:"1px solid #1a2235",background:l.id===n?`${l.color}18`:"#0d1520",color:"#c8d6e5",textAlign:"left",transition:"border-color 0.15s, background 0.15s"},children:[_.jsx("span",{style:{fontSize:28,lineHeight:1},children:l.icon}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:l.titleEn??l.title}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:3,lineHeight:1.4},children:l.descriptionEn??l.description})]})]},l.id))}),_.jsx("button",{onClick:a,style:{fontSize:11,color:"#3a4d63",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"},children:"Cancel"})]})}Rm.createRoot(document.getElementById("root")).render(_.jsx(ee.StrictMode,{children:_.jsx(Uv,{})}));
