(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();var nl={exports:{}},bi={},rl={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1;function qm(){if(C1)return Ee;C1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.iterator;function k(M){return M===null||typeof M!="object"?null:(M=_&&M[_]||M["@@iterator"],typeof M=="function"?M:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,E={};function N(M,G,ge){this.props=M,this.context=G,this.refs=E,this.updater=ge||T}N.prototype.isReactComponent={},N.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},N.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function D(){}D.prototype=N.prototype;function O(M,G,ge){this.props=M,this.context=G,this.refs=E,this.updater=ge||T}var H=O.prototype=new D;H.constructor=O,P(H,N.prototype),H.isPureReactComponent=!0;var B=Array.isArray,W=Object.prototype.hasOwnProperty,U={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function V(M,G,ge){var $e,be={},Ae=null,Ne=null;if(G!=null)for($e in G.ref!==void 0&&(Ne=G.ref),G.key!==void 0&&(Ae=""+G.key),G)W.call(G,$e)&&!L.hasOwnProperty($e)&&(be[$e]=G[$e]);var De=arguments.length-2;if(De===1)be.children=ge;else if(1<De){for(var Be=Array(De),ft=0;ft<De;ft++)Be[ft]=arguments[ft+2];be.children=Be}if(M&&M.defaultProps)for($e in De=M.defaultProps,De)be[$e]===void 0&&(be[$e]=De[$e]);return{$$typeof:o,type:M,key:Ae,ref:Ne,props:be,_owner:U.current}}function oe(M,G){return{$$typeof:o,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function Te(M){return typeof M=="object"&&M!==null&&M.$$typeof===o}function Se(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ge){return G[ge]})}var fe=/\/+/g;function we(M,G){return typeof M=="object"&&M!==null&&M.key!=null?Se(""+M.key):G.toString(36)}function je(M,G,ge,$e,be){var Ae=typeof M;(Ae==="undefined"||Ae==="boolean")&&(M=null);var Ne=!1;if(M===null)Ne=!0;else switch(Ae){case"string":case"number":Ne=!0;break;case"object":switch(M.$$typeof){case o:case n:Ne=!0}}if(Ne)return Ne=M,be=be(Ne),M=$e===""?"."+we(Ne,0):$e,B(be)?(ge="",M!=null&&(ge=M.replace(fe,"$&/")+"/"),je(be,G,ge,"",function(ft){return ft})):be!=null&&(Te(be)&&(be=oe(be,ge+(!be.key||Ne&&Ne.key===be.key?"":(""+be.key).replace(fe,"$&/")+"/")+M)),G.push(be)),1;if(Ne=0,$e=$e===""?".":$e+":",B(M))for(var De=0;De<M.length;De++){Ae=M[De];var Be=$e+we(Ae,De);Ne+=je(Ae,G,ge,Be,be)}else if(Be=k(M),typeof Be=="function")for(M=Be.call(M),De=0;!(Ae=M.next()).done;)Ae=Ae.value,Be=$e+we(Ae,De++),Ne+=je(Ae,G,ge,Be,be);else if(Ae==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ne}function We(M,G,ge){if(M==null)return M;var $e=[],be=0;return je(M,$e,"","",function(Ae){return G.call(ge,Ae,be++)}),$e}function Ye(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(ge){(M._status===0||M._status===-1)&&(M._status=1,M._result=ge)},function(ge){(M._status===0||M._status===-1)&&(M._status=2,M._result=ge)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var Ie={current:null},ae={transition:null},xe={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ae,ReactCurrentOwner:U};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:We,forEach:function(M,G,ge){We(M,function(){G.apply(this,arguments)},ge)},count:function(M){var G=0;return We(M,function(){G++}),G},toArray:function(M){return We(M,function(G){return G})||[]},only:function(M){if(!Te(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ee.Component=N,Ee.Fragment=r,Ee.Profiler=l,Ee.PureComponent=O,Ee.StrictMode=a,Ee.Suspense=p,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,Ee.act=ue,Ee.cloneElement=function(M,G,ge){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var $e=P({},M.props),be=M.key,Ae=M.ref,Ne=M._owner;if(G!=null){if(G.ref!==void 0&&(Ae=G.ref,Ne=U.current),G.key!==void 0&&(be=""+G.key),M.type&&M.type.defaultProps)var De=M.type.defaultProps;for(Be in G)W.call(G,Be)&&!L.hasOwnProperty(Be)&&($e[Be]=G[Be]===void 0&&De!==void 0?De[Be]:G[Be])}var Be=arguments.length-2;if(Be===1)$e.children=ge;else if(1<Be){De=Array(Be);for(var ft=0;ft<Be;ft++)De[ft]=arguments[ft+2];$e.children=De}return{$$typeof:o,type:M.type,key:be,ref:Ae,props:$e,_owner:Ne}},Ee.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},Ee.createElement=V,Ee.createFactory=function(M){var G=V.bind(null,M);return G.type=M,G},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(M){return{$$typeof:v,render:M}},Ee.isValidElement=Te,Ee.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:Ye}},Ee.memo=function(M,G){return{$$typeof:x,type:M,compare:G===void 0?null:G}},Ee.startTransition=function(M){var G=ae.transition;ae.transition={};try{M()}finally{ae.transition=G}},Ee.unstable_act=ue,Ee.useCallback=function(M,G){return Ie.current.useCallback(M,G)},Ee.useContext=function(M){return Ie.current.useContext(M)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(M){return Ie.current.useDeferredValue(M)},Ee.useEffect=function(M,G){return Ie.current.useEffect(M,G)},Ee.useId=function(){return Ie.current.useId()},Ee.useImperativeHandle=function(M,G,ge){return Ie.current.useImperativeHandle(M,G,ge)},Ee.useInsertionEffect=function(M,G){return Ie.current.useInsertionEffect(M,G)},Ee.useLayoutEffect=function(M,G){return Ie.current.useLayoutEffect(M,G)},Ee.useMemo=function(M,G){return Ie.current.useMemo(M,G)},Ee.useReducer=function(M,G,ge){return Ie.current.useReducer(M,G,ge)},Ee.useRef=function(M){return Ie.current.useRef(M)},Ee.useState=function(M){return Ie.current.useState(M)},Ee.useSyncExternalStore=function(M,G,ge){return Ie.current.useSyncExternalStore(M,G,ge)},Ee.useTransition=function(){return Ie.current.useTransition()},Ee.version="18.3.1",Ee}var P1;function Dl(){return P1||(P1=1,rl.exports=qm()),rl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function Mm(){if(E1)return bi;E1=1;var o=Dl(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(v,p,x){var b,_={},k=null,T=null;x!==void 0&&(k=""+x),p.key!==void 0&&(k=""+p.key),p.ref!==void 0&&(T=p.ref);for(b in p)a.call(p,b)&&!u.hasOwnProperty(b)&&(_[b]=p[b]);if(v&&v.defaultProps)for(b in p=v.defaultProps,p)_[b]===void 0&&(_[b]=p[b]);return{$$typeof:n,type:v,key:k,ref:T,props:_,_owner:l.current}}return bi.Fragment=r,bi.jsx=f,bi.jsxs=f,bi}var D1;function Am(){return D1||(D1=1,nl.exports=Mm()),nl.exports}var $=Am(),J=Dl(),Wo={},il={exports:{}},Ht={},ol={exports:{}},al={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function Cm(){return R1||(R1=1,(function(o){function n(ae,xe){var ue=ae.length;ae.push(xe);e:for(;0<ue;){var M=ue-1>>>1,G=ae[M];if(0<l(G,xe))ae[M]=xe,ae[ue]=G,ue=M;else break e}}function r(ae){return ae.length===0?null:ae[0]}function a(ae){if(ae.length===0)return null;var xe=ae[0],ue=ae.pop();if(ue!==xe){ae[0]=ue;e:for(var M=0,G=ae.length,ge=G>>>1;M<ge;){var $e=2*(M+1)-1,be=ae[$e],Ae=$e+1,Ne=ae[Ae];if(0>l(be,ue))Ae<G&&0>l(Ne,be)?(ae[M]=Ne,ae[Ae]=ue,M=Ae):(ae[M]=be,ae[$e]=ue,M=$e);else if(Ae<G&&0>l(Ne,ue))ae[M]=Ne,ae[Ae]=ue,M=Ae;else break e}}return xe}function l(ae,xe){var ue=ae.sortIndex-xe.sortIndex;return ue!==0?ue:ae.id-xe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,v=f.now();o.unstable_now=function(){return f.now()-v}}var p=[],x=[],b=1,_=null,k=3,T=!1,P=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(ae){for(var xe=r(x);xe!==null;){if(xe.callback===null)a(x);else if(xe.startTime<=ae)a(x),xe.sortIndex=xe.expirationTime,n(p,xe);else break;xe=r(x)}}function B(ae){if(E=!1,H(ae),!P)if(r(p)!==null)P=!0,Ye(W);else{var xe=r(x);xe!==null&&Ie(B,xe.startTime-ae)}}function W(ae,xe){P=!1,E&&(E=!1,D(V),V=-1),T=!0;var ue=k;try{for(H(xe),_=r(p);_!==null&&(!(_.expirationTime>xe)||ae&&!Se());){var M=_.callback;if(typeof M=="function"){_.callback=null,k=_.priorityLevel;var G=M(_.expirationTime<=xe);xe=o.unstable_now(),typeof G=="function"?_.callback=G:_===r(p)&&a(p),H(xe)}else a(p);_=r(p)}if(_!==null)var ge=!0;else{var $e=r(x);$e!==null&&Ie(B,$e.startTime-xe),ge=!1}return ge}finally{_=null,k=ue,T=!1}}var U=!1,L=null,V=-1,oe=5,Te=-1;function Se(){return!(o.unstable_now()-Te<oe)}function fe(){if(L!==null){var ae=o.unstable_now();Te=ae;var xe=!0;try{xe=L(!0,ae)}finally{xe?we():(U=!1,L=null)}}else U=!1}var we;if(typeof O=="function")we=function(){O(fe)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,We=je.port2;je.port1.onmessage=fe,we=function(){We.postMessage(null)}}else we=function(){N(fe,0)};function Ye(ae){L=ae,U||(U=!0,we())}function Ie(ae,xe){V=N(function(){ae(o.unstable_now())},xe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ae){ae.callback=null},o.unstable_continueExecution=function(){P||T||(P=!0,Ye(W))},o.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<ae?Math.floor(1e3/ae):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_getFirstCallbackNode=function(){return r(p)},o.unstable_next=function(ae){switch(k){case 1:case 2:case 3:var xe=3;break;default:xe=k}var ue=k;k=xe;try{return ae()}finally{k=ue}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ae,xe){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var ue=k;k=ae;try{return xe()}finally{k=ue}},o.unstable_scheduleCallback=function(ae,xe,ue){var M=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?M+ue:M):ue=M,ae){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ue+G,ae={id:b++,callback:xe,priorityLevel:ae,startTime:ue,expirationTime:G,sortIndex:-1},ue>M?(ae.sortIndex=ue,n(x,ae),r(p)===null&&ae===r(x)&&(E?(D(V),V=-1):E=!0,Ie(B,ue-M))):(ae.sortIndex=G,n(p,ae),P||T||(P=!0,Ye(W))),ae},o.unstable_shouldYield=Se,o.unstable_wrapCallback=function(ae){var xe=k;return function(){var ue=k;k=xe;try{return ae.apply(this,arguments)}finally{k=ue}}}})(al)),al}var N1;function Pm(){return N1||(N1=1,ol.exports=Cm()),ol.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1;function Em(){if(B1)return Ht;B1=1;var o=Dl(),n=Pm();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},_={};function k(e){return p.call(_,e)?!0:p.call(b,e)?!1:x.test(e)?_[e]=!0:(b[e]=!0,!1)}function T(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,i,s){if(t===null||typeof t>"u"||T(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,i,s,c,m,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=m,this.removeEmptyString=y}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];N[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D,O);N[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D,O);N[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D,O);N[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,t,i,s){var c=N.hasOwnProperty(t)?N[t]:null;(c!==null?c.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,i,c,s)&&(i=null),s||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,s=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var B=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Se=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),ae=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,M;function G(e){if(M===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return`
`+M+e}var ge=!1;function $e(e,t){if(!e||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(F){var s=F}Reflect.construct(e,[],t)}else{try{t.call()}catch(F){s=F}e.call(t.prototype)}else{try{throw Error()}catch(F){s=F}e()}}catch(F){if(F&&s&&typeof F.stack=="string"){for(var c=F.stack.split(`
`),m=s.stack.split(`
`),y=c.length-1,z=m.length-1;1<=y&&0<=z&&c[y]!==m[z];)z--;for(;1<=y&&0<=z;y--,z--)if(c[y]!==m[z]){if(y!==1||z!==1)do if(y--,z--,0>z||c[y]!==m[z]){var q=`
`+c[y].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=y&&0<=z);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?G(e):""}function be(e){switch(e.tag){case 5:return G(e.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return e=$e(e.type,!1),e;case 11:return e=$e(e.type.render,!1),e;case 1:return e=$e(e.type,!0),e;default:return""}}function Ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case U:return"Portal";case oe:return"Profiler";case V:return"StrictMode";case we:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Se:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case We:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}function Ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function De(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ft(e){var t=Be(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,m=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,m.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){e._valueTracker||(e._valueTracker=ft(e))}function Jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=Be(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kn(e,t){var i=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function qr(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=De(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function An(e,t){t=t.checked,t!=null&&H(e,"checked",t,!1)}function Cn(e,t){An(e,t);var i=De(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ue(e,t.type,i):t.hasOwnProperty("defaultValue")&&Ue(e,t.type,De(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ue(e,t,i){(t!=="number"||Mn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var kt=Array.isArray;function Ve(e,t,i,s){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&s&&(e[i].defaultSelected=!0)}else{for(i=""+De(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function e0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function At(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(kt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:De(i)}}function Qn(e,t){var i=De(t.value),s=De(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function E0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ci(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function D0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ci(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,Pi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jt(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ei=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Ei.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function R0(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Di(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,c=R0(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,c):e[i]=c}}var Ri=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cr(e,t){if(t){if(Ri[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function Xn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N0=null;function B0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Zn=null,en=null;function Er(e){if(e=ai(e)){if(typeof Pr!="function")throw Error(r(280));var t=e.stateNode;t&&(t=oo(t),Pr(e.stateNode,e.type,t))}}function Dr(e){Zn?en?en.push(e):en=[e]:Zn=e}function t0(){if(Zn){var e=Zn,t=en;if(en=Zn=null,Er(e),t)for(e=0;e<t.length;e++)Er(t[e])}}function Ni(e,t){return e(t)}function Jn(){}var n0=!1;function I0(e,t,i){if(n0)return e(t,i);n0=!0;try{return Ni(e,t,i)}finally{n0=!1,(Zn!==null||en!==null)&&(Jn(),t0())}}function Rr(e,t){var i=e.stateNode;if(i===null)return null;var s=oo(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var F0=!1;if(v)try{var er={};Object.defineProperty(er,"passive",{get:function(){F0=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{F0=!1}function xa(e,t,i,s,c,m,y,z,q){var F=Array.prototype.slice.call(arguments,3);try{t.apply(i,F)}catch(Q){this.onError(Q)}}var Nr=!1,tr=null,r0=!1,L0=null,wa={onError:function(e){Nr=!0,tr=e}};function ba(e,t,i,s,c,m,y,z,q){Nr=!1,tr=null,xa.apply(wa,arguments)}function Bi(e,t,i,s,c,m,y,z,q){if(ba.apply(this,arguments),Nr){if(Nr){var F=tr;Nr=!1,tr=null}else throw Error(r(198));r0||(r0=!0,L0=F)}}function zt(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function re(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Re(e){if(zt(e)!==e)throw Error(r(188))}function Oe(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,s=t;;){var c=i.return;if(c===null)break;var m=c.alternate;if(m===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===m.child){for(m=c.child;m;){if(m===i)return Re(c),e;if(m===s)return Re(c),t;m=m.sibling}throw Error(r(188))}if(i.return!==s.return)i=c,s=m;else{for(var y=!1,z=c.child;z;){if(z===i){y=!0,i=c,s=m;break}if(z===s){y=!0,s=c,i=m;break}z=z.sibling}if(!y){for(z=m.child;z;){if(z===i){y=!0,i=m,s=c;break}if(z===s){y=!0,s=m,i=c;break}z=z.sibling}if(!y)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function i0(e){return e=Oe(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var ou=n.unstable_scheduleCallback,au=n.unstable_cancelCallback,Ff=n.unstable_shouldYield,Lf=n.unstable_requestPaint,ut=n.unstable_now,Of=n.unstable_getCurrentPriorityLevel,$a=n.unstable_ImmediatePriority,su=n.unstable_UserBlockingPriority,Ii=n.unstable_NormalPriority,Hf=n.unstable_LowPriority,lu=n.unstable_IdlePriority,Fi=null,yn=null;function Gf(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Fi,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:Vf,Wf=Math.log,Uf=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-(Wf(e)/Uf|0)|0}var Li=64,Oi=4194304;function O0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,c=e.suspendedLanes,m=e.pingedLanes,y=i&268435455;if(y!==0){var z=y&~c;z!==0?s=O0(z):(m&=y,m!==0&&(s=O0(m)))}else y=i&~c,y!==0?s=O0(y):m!==0&&(s=O0(m));if(s===0)return 0;if(t!==0&&t!==s&&(t&c)===0&&(c=s&-s,m=t&-t,c>=m||c===16&&(m&4194240)!==0))return t;if((s&4)!==0&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-dn(t),c=1<<i,s|=e[i],t&=~c;return s}function Kf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,m=e.pendingLanes;0<m;){var y=31-dn(m),z=1<<y,q=c[y];q===-1?((z&i)===0||(z&s)!==0)&&(c[y]=Kf(z,t)):q<=t&&(e.expiredLanes|=z),m&=~z}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=Li;return Li<<=1,(Li&4194240)===0&&(Li=64),e}function ka(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function H0(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=i}function Qf(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-dn(i),m=1<<c;t[c]=0,s[c]=-1,e[c]=-1,i&=~m}}function za(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-dn(i),c=1<<s;c&t|e[s]&t&&(e[s]|=t),i&=~c}}var Ke=0;function cu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var du,Sa,fu,mu,hu,Ta=!1,Gi=[],nr=null,rr=null,ir=null,G0=new Map,W0=new Map,or=[],Xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,t){switch(e){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":G0.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":W0.delete(t.pointerId)}}function U0(e,t,i,s,c,m){return e===null||e.nativeEvent!==m?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:m,targetContainers:[c]},t!==null&&(t=ai(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Zf(e,t,i,s,c){switch(t){case"focusin":return nr=U0(nr,e,t,i,s,c),!0;case"dragenter":return rr=U0(rr,e,t,i,s,c),!0;case"mouseover":return ir=U0(ir,e,t,i,s,c),!0;case"pointerover":var m=c.pointerId;return G0.set(m,U0(G0.get(m)||null,e,t,i,s,c)),!0;case"gotpointercapture":return m=c.pointerId,W0.set(m,U0(W0.get(m)||null,e,t,i,s,c)),!0}return!1}function vu(e){var t=Br(e.target);if(t!==null){var i=zt(t);if(i!==null){if(t=i.tag,t===13){if(t=re(i),t!==null){e.blockedOn=t,hu(e.priority,function(){fu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);N0=s,i.target.dispatchEvent(s),N0=null}else return t=ai(i),t!==null&&Sa(t),e.blockedOn=i,!1;t.shift()}return!0}function gu(e,t,i){Wi(e)&&i.delete(t)}function Jf(){Ta=!1,nr!==null&&Wi(nr)&&(nr=null),rr!==null&&Wi(rr)&&(rr=null),ir!==null&&Wi(ir)&&(ir=null),G0.forEach(gu),W0.forEach(gu)}function V0(e,t){e.blockedOn===t&&(e.blockedOn=null,Ta||(Ta=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Jf)))}function K0(e){function t(c){return V0(c,e)}if(0<Gi.length){V0(Gi[0],e);for(var i=1;i<Gi.length;i++){var s=Gi[i];s.blockedOn===e&&(s.blockedOn=null)}}for(nr!==null&&V0(nr,e),rr!==null&&V0(rr,e),ir!==null&&V0(ir,e),G0.forEach(t),W0.forEach(t),i=0;i<or.length;i++)s=or[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<or.length&&(i=or[0],i.blockedOn===null);)vu(i),i.blockedOn===null&&or.shift()}var o0=B.ReactCurrentBatchConfig,Ui=!0;function e4(e,t,i,s){var c=Ke,m=o0.transition;o0.transition=null;try{Ke=1,ja(e,t,i,s)}finally{Ke=c,o0.transition=m}}function t4(e,t,i,s){var c=Ke,m=o0.transition;o0.transition=null;try{Ke=4,ja(e,t,i,s)}finally{Ke=c,o0.transition=m}}function ja(e,t,i,s){if(Ui){var c=qa(e,t,i,s);if(c===null)Ua(e,t,s,Vi,i),pu(e,s);else if(Zf(c,e,t,i,s))s.stopPropagation();else if(pu(e,s),t&4&&-1<Xf.indexOf(e)){for(;c!==null;){var m=ai(c);if(m!==null&&du(m),m=qa(e,t,i,s),m===null&&Ua(e,t,s,Vi,i),m===c)break;c=m}c!==null&&s.stopPropagation()}else Ua(e,t,s,null,i)}}var Vi=null;function qa(e,t,i,s){if(Vi=null,e=B0(s),e=Br(e),e!==null)if(t=zt(e),t===null)e=null;else if(i=t.tag,i===13){if(e=re(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Of()){case $a:return 1;case su:return 4;case Ii:case Hf:return 16;case lu:return 536870912;default:return 16}default:return 16}}var ar=null,Ma=null,Ki=null;function xu(){if(Ki)return Ki;var e,t=Ma,i=t.length,s,c="value"in ar?ar.value:ar.textContent,m=c.length;for(e=0;e<i&&t[e]===c[e];e++);var y=i-e;for(s=1;s<=y&&t[i-s]===c[m-s];s++);return Ki=c.slice(e,1<s?1-s:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function wu(){return!1}function Ut(e){function t(i,s,c,m,y){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(m):m[z]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Qi:wu,this.isPropagationStopped=wu,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var a0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=Ut(a0),Y0=ue({},a0,{view:0,detail:0}),n4=Ut(Y0),Ca,Pa,Q0,Xi=ue({},Y0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Q0&&(Q0&&e.type==="mousemove"?(Ca=e.screenX-Q0.screenX,Pa=e.screenY-Q0.screenY):Pa=Ca=0,Q0=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),bu=Ut(Xi),r4=ue({},Xi,{dataTransfer:0}),i4=Ut(r4),o4=ue({},Y0,{relatedTarget:0}),Ea=Ut(o4),a4=ue({},a0,{animationName:0,elapsedTime:0,pseudoElement:0}),s4=Ut(a4),l4=ue({},a0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u4=Ut(l4),c4=ue({},a0,{data:0}),$u=Ut(c4),d4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m4[e])?!!t[e]:!1}function Da(){return h4}var p4=ue({},Y0,{key:function(e){if(e.key){var t=d4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v4=Ut(p4),g4=ue({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Ut(g4),y4=ue({},Y0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),x4=Ut(y4),w4=ue({},a0,{propertyName:0,elapsedTime:0,pseudoElement:0}),b4=Ut(w4),$4=ue({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_4=Ut($4),k4=[9,13,27,32],Ra=v&&"CompositionEvent"in window,X0=null;v&&"documentMode"in document&&(X0=document.documentMode);var z4=v&&"TextEvent"in window&&!X0,ku=v&&(!Ra||X0&&8<X0&&11>=X0),zu=" ",Su=!1;function Tu(e,t){switch(e){case"keyup":return k4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var s0=!1;function S4(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Su=!0,zu);case"textInput":return e=t.data,e===zu&&Su?null:e;default:return null}}function T4(e,t){if(s0)return e==="compositionend"||!Ra&&Tu(e,t)?(e=xu(),Ki=Ma=ar=null,s0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var j4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j4[e.type]:t==="textarea"}function Mu(e,t,i,s){Dr(s),t=no(t,"onChange"),0<t.length&&(i=new Aa("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var Z0=null,J0=null;function q4(e){Ku(e,0)}function Zi(e){var t=f0(e);if(Jr(t))return e}function M4(e,t){if(e==="change")return t}var Au=!1;if(v){var Na;if(v){var Ba="oninput"in document;if(!Ba){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),Ba=typeof Cu.oninput=="function"}Na=Ba}else Na=!1;Au=Na&&(!document.documentMode||9<document.documentMode)}function Pu(){Z0&&(Z0.detachEvent("onpropertychange",Eu),J0=Z0=null)}function Eu(e){if(e.propertyName==="value"&&Zi(J0)){var t=[];Mu(t,J0,e,B0(e)),I0(q4,t)}}function A4(e,t,i){e==="focusin"?(Pu(),Z0=t,J0=i,Z0.attachEvent("onpropertychange",Eu)):e==="focusout"&&Pu()}function C4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(J0)}function P4(e,t){if(e==="click")return Zi(t)}function E4(e,t){if(e==="input"||e==="change")return Zi(t)}function D4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fn=typeof Object.is=="function"?Object.is:D4;function ei(e,t){if(fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!p.call(t,c)||!fn(e[c],t[c]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ru(e,t){var i=Du(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Du(i)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(){for(var e=window,t=Mn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Mn(e.document)}return t}function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R4(e){var t=Bu(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Nu(i.ownerDocument.documentElement,i)){if(s!==null&&Ia(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,m=Math.min(s.start,c);s=s.end===void 0?m:Math.min(s.end,c),!e.extend&&m>s&&(c=s,s=m,m=c),c=Ru(i,m);var y=Ru(i,s);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),m>s?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var N4=v&&"documentMode"in document&&11>=document.documentMode,l0=null,Fa=null,ti=null,La=!1;function Iu(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;La||l0==null||l0!==Mn(s)||(s=l0,"selectionStart"in s&&Ia(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ti&&ei(ti,s)||(ti=s,s=no(Fa,"onSelect"),0<s.length&&(t=new Aa("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=l0)))}function Ji(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var u0={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},Oa={},Fu={};v&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete u0.animationend.animation,delete u0.animationiteration.animation,delete u0.animationstart.animation),"TransitionEvent"in window||delete u0.transitionend.transition);function eo(e){if(Oa[e])return Oa[e];if(!u0[e])return e;var t=u0[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Fu)return Oa[e]=t[i];return e}var Lu=eo("animationend"),Ou=eo("animationiteration"),Hu=eo("animationstart"),Gu=eo("transitionend"),Wu=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(e,t){Wu.set(e,t),u(t,[e])}for(var Ha=0;Ha<Uu.length;Ha++){var Ga=Uu[Ha],B4=Ga.toLowerCase(),I4=Ga[0].toUpperCase()+Ga.slice(1);sr(B4,"on"+I4)}sr(Lu,"onAnimationEnd"),sr(Ou,"onAnimationIteration"),sr(Hu,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(Gu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F4=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function Vu(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,Bi(s,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],c=s.event;s=s.listeners;e:{var m=void 0;if(t)for(var y=s.length-1;0<=y;y--){var z=s[y],q=z.instance,F=z.currentTarget;if(z=z.listener,q!==m&&c.isPropagationStopped())break e;Vu(c,z,F),m=q}else for(y=0;y<s.length;y++){if(z=s[y],q=z.instance,F=z.currentTarget,z=z.listener,q!==m&&c.isPropagationStopped())break e;Vu(c,z,F),m=q}}}if(r0)throw e=L0,r0=!1,L0=null,e}function Je(e,t){var i=t[Za];i===void 0&&(i=t[Za]=new Set);var s=e+"__bubble";i.has(s)||(Yu(t,e,2,!1),i.add(s))}function Wa(e,t,i){var s=0;t&&(s|=4),Yu(i,e,s,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[to]){e[to]=!0,a.forEach(function(i){i!=="selectionchange"&&(F4.has(i)||Wa(i,!1,e),Wa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,Wa("selectionchange",!1,t))}}function Yu(e,t,i,s){switch(yu(t)){case 1:var c=e4;break;case 4:c=t4;break;default:c=ja}i=c.bind(null,t,i,e),c=void 0,!F0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Ua(e,t,i,s,c){var m=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var z=s.stateNode.containerInfo;if(z===c||z.nodeType===8&&z.parentNode===c)break;if(y===4)for(y=s.return;y!==null;){var q=y.tag;if((q===3||q===4)&&(q=y.stateNode.containerInfo,q===c||q.nodeType===8&&q.parentNode===c))return;y=y.return}for(;z!==null;){if(y=Br(z),y===null)return;if(q=y.tag,q===5||q===6){s=m=y;continue e}z=z.parentNode}}s=s.return}I0(function(){var F=m,Q=B0(i),ee=[];e:{var K=Wu.get(e);if(K!==void 0){var de=Aa,pe=e;switch(e){case"keypress":if(Yi(i)===0)break e;case"keydown":case"keyup":de=v4;break;case"focusin":pe="focus",de=Ea;break;case"focusout":pe="blur",de=Ea;break;case"beforeblur":case"afterblur":de=Ea;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=i4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=x4;break;case Lu:case Ou:case Hu:de=s4;break;case Gu:de=b4;break;case"scroll":de=n4;break;case"wheel":de=_4;break;case"copy":case"cut":case"paste":de=u4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=_u}var ve=(t&4)!==0,ct=!ve&&e==="scroll",R=ve?K!==null?K+"Capture":null:K;ve=[];for(var C=F,I;C!==null;){I=C;var ie=I.stateNode;if(I.tag===5&&ie!==null&&(I=ie,R!==null&&(ie=Rr(C,R),ie!=null&&ve.push(ii(C,ie,I)))),ct)break;C=C.return}0<ve.length&&(K=new de(K,pe,null,i,Q),ee.push({event:K,listeners:ve}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",K&&i!==N0&&(pe=i.relatedTarget||i.fromElement)&&(Br(pe)||pe[Pn]))break e;if((de||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,de?(pe=i.relatedTarget||i.toElement,de=F,pe=pe?Br(pe):null,pe!==null&&(ct=zt(pe),pe!==ct||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(de=null,pe=F),de!==pe)){if(ve=bu,ie="onMouseLeave",R="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ve=_u,ie="onPointerLeave",R="onPointerEnter",C="pointer"),ct=de==null?K:f0(de),I=pe==null?K:f0(pe),K=new ve(ie,C+"leave",de,i,Q),K.target=ct,K.relatedTarget=I,ie=null,Br(Q)===F&&(ve=new ve(R,C+"enter",pe,i,Q),ve.target=I,ve.relatedTarget=ct,ie=ve),ct=ie,de&&pe)t:{for(ve=de,R=pe,C=0,I=ve;I;I=c0(I))C++;for(I=0,ie=R;ie;ie=c0(ie))I++;for(;0<C-I;)ve=c0(ve),C--;for(;0<I-C;)R=c0(R),I--;for(;C--;){if(ve===R||R!==null&&ve===R.alternate)break t;ve=c0(ve),R=c0(R)}ve=null}else ve=null;de!==null&&Qu(ee,K,de,ve,!1),pe!==null&&ct!==null&&Qu(ee,ct,pe,ve,!0)}}e:{if(K=F?f0(F):window,de=K.nodeName&&K.nodeName.toLowerCase(),de==="select"||de==="input"&&K.type==="file")var ye=M4;else if(qu(K))if(Au)ye=E4;else{ye=C4;var _e=A4}else(de=K.nodeName)&&de.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ye=P4);if(ye&&(ye=ye(e,F))){Mu(ee,ye,i,Q);break e}_e&&_e(e,K,F),e==="focusout"&&(_e=K._wrapperState)&&_e.controlled&&K.type==="number"&&Ue(K,"number",K.value)}switch(_e=F?f0(F):window,e){case"focusin":(qu(_e)||_e.contentEditable==="true")&&(l0=_e,Fa=F,ti=null);break;case"focusout":ti=Fa=l0=null;break;case"mousedown":La=!0;break;case"contextmenu":case"mouseup":case"dragend":La=!1,Iu(ee,i,Q);break;case"selectionchange":if(N4)break;case"keydown":case"keyup":Iu(ee,i,Q)}var ke;if(Ra)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else s0?Tu(e,i)&&(Me="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Me="onCompositionStart");Me&&(ku&&i.locale!=="ko"&&(s0||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&s0&&(ke=xu()):(ar=Q,Ma="value"in ar?ar.value:ar.textContent,s0=!0)),_e=no(F,Me),0<_e.length&&(Me=new $u(Me,e,null,i,Q),ee.push({event:Me,listeners:_e}),ke?Me.data=ke:(ke=ju(i),ke!==null&&(Me.data=ke)))),(ke=z4?S4(e,i):T4(e,i))&&(F=no(F,"onBeforeInput"),0<F.length&&(Q=new $u("onBeforeInput","beforeinput",null,i,Q),ee.push({event:Q,listeners:F}),Q.data=ke))}Ku(ee,t)})}function ii(e,t,i){return{instance:e,listener:t,currentTarget:i}}function no(e,t){for(var i=t+"Capture",s=[];e!==null;){var c=e,m=c.stateNode;c.tag===5&&m!==null&&(c=m,m=Rr(e,i),m!=null&&s.unshift(ii(e,m,c)),m=Rr(e,t),m!=null&&s.push(ii(e,m,c))),e=e.return}return s}function c0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,i,s,c){for(var m=t._reactName,y=[];i!==null&&i!==s;){var z=i,q=z.alternate,F=z.stateNode;if(q!==null&&q===s)break;z.tag===5&&F!==null&&(z=F,c?(q=Rr(i,m),q!=null&&y.unshift(ii(i,q,z))):c||(q=Rr(i,m),q!=null&&y.push(ii(i,q,z)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var L4=/\r\n?/g,O4=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(L4,`
`).replace(O4,"")}function ro(e,t,i){if(t=Xu(t),Xu(e)!==t&&i)throw Error(r(425))}function io(){}var Va=null,Ka=null;function Ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qa=typeof setTimeout=="function"?setTimeout:void 0,H4=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,G4=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(W4)}:Qa;function W4(e){setTimeout(function(){throw e})}function Xa(e,t){var i=t,s=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(s===0){e.removeChild(c),K0(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=c}while(i);K0(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var d0=Math.random().toString(36).slice(2),xn="__reactFiber$"+d0,oi="__reactProps$"+d0,Pn="__reactContainer$"+d0,Za="__reactEvents$"+d0,U4="__reactListeners$"+d0,V4="__reactHandles$"+d0;function Br(e){var t=e[xn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Pn]||i[xn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ju(e);e!==null;){if(i=e[xn])return i;e=Ju(e)}return t}e=i,i=e.parentNode}return null}function ai(e){return e=e[xn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function f0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function oo(e){return e[oi]||null}var Ja=[],m0=-1;function ur(e){return{current:e}}function et(e){0>m0||(e.current=Ja[m0],Ja[m0]=null,m0--)}function Xe(e,t){m0++,Ja[m0]=e.current,e.current=t}var cr={},St=ur(cr),Bt=ur(!1),Ir=cr;function h0(e,t){var i=e.type.contextTypes;if(!i)return cr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var c={},m;for(m in i)c[m]=t[m];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function It(e){return e=e.childContextTypes,e!=null}function ao(){et(Bt),et(St)}function ec(e,t,i){if(St.current!==cr)throw Error(r(168));Xe(St,t),Xe(Bt,i)}function tc(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var c in s)if(!(c in t))throw Error(r(108,Ne(e)||"Unknown",c));return ue({},i,s)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,Ir=St.current,Xe(St,e),Xe(Bt,Bt.current),!0}function nc(e,t,i){var s=e.stateNode;if(!s)throw Error(r(169));i?(e=tc(e,t,Ir),s.__reactInternalMemoizedMergedChildContext=e,et(Bt),et(St),Xe(St,e)):et(Bt),Xe(Bt,i)}var En=null,lo=!1,es=!1;function rc(e){En===null?En=[e]:En.push(e)}function K4(e){lo=!0,rc(e)}function dr(){if(!es&&En!==null){es=!0;var e=0,t=Ke;try{var i=En;for(Ke=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}En=null,lo=!1}catch(c){throw En!==null&&(En=En.slice(e+1)),ou($a,dr),c}finally{Ke=t,es=!1}}return null}var p0=[],v0=0,uo=null,co=0,tn=[],nn=0,Fr=null,Dn=1,Rn="";function Lr(e,t){p0[v0++]=co,p0[v0++]=uo,uo=e,co=t}function ic(e,t,i){tn[nn++]=Dn,tn[nn++]=Rn,tn[nn++]=Fr,Fr=e;var s=Dn;e=Rn;var c=32-dn(s)-1;s&=~(1<<c),i+=1;var m=32-dn(t)+c;if(30<m){var y=c-c%5;m=(s&(1<<y)-1).toString(32),s>>=y,c-=y,Dn=1<<32-dn(t)+c|i<<c|s,Rn=m+e}else Dn=1<<m|i<<c|s,Rn=e}function ts(e){e.return!==null&&(Lr(e,1),ic(e,1,0))}function ns(e){for(;e===uo;)uo=p0[--v0],p0[v0]=null,co=p0[--v0],p0[v0]=null;for(;e===Fr;)Fr=tn[--nn],tn[nn]=null,Rn=tn[--nn],tn[nn]=null,Dn=tn[--nn],tn[nn]=null}var Vt=null,Kt=null,tt=!1,mn=null;function oc(e,t){var i=sn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function ac(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Kt=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Fr!==null?{id:Dn,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=sn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Vt=e,Kt=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(tt){var t=Kt;if(t){var i=t;if(!ac(e,t)){if(rs(e))throw Error(r(418));t=lr(i.nextSibling);var s=Vt;t&&ac(e,t)?oc(s,i):(e.flags=e.flags&-4097|2,tt=!1,Vt=e)}}else{if(rs(e))throw Error(r(418));e.flags=e.flags&-4097|2,tt=!1,Vt=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function fo(e){if(e!==Vt)return!1;if(!tt)return sc(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ya(e.type,e.memoizedProps)),t&&(t=Kt)){if(rs(e))throw lc(),Error(r(418));for(;t;)oc(e,t),t=lr(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Kt=lr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Vt?lr(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=Kt;e;)e=lr(e.nextSibling)}function g0(){Kt=Vt=null,tt=!1}function os(e){mn===null?mn=[e]:mn.push(e)}var Y4=B.ReactCurrentBatchConfig;function si(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var s=i.stateNode}if(!s)throw Error(r(147,e));var c=s,m=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===m?t.ref:(t=function(y){var z=c.refs;y===null?delete z[m]:z[m]=y},t._stringRef=m,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uc(e){var t=e._init;return t(e._payload)}function cc(e){function t(R,C){if(e){var I=R.deletions;I===null?(R.deletions=[C],R.flags|=16):I.push(C)}}function i(R,C){if(!e)return null;for(;C!==null;)t(R,C),C=C.sibling;return null}function s(R,C){for(R=new Map;C!==null;)C.key!==null?R.set(C.key,C):R.set(C.index,C),C=C.sibling;return R}function c(R,C){return R=xr(R,C),R.index=0,R.sibling=null,R}function m(R,C,I){return R.index=I,e?(I=R.alternate,I!==null?(I=I.index,I<C?(R.flags|=2,C):I):(R.flags|=2,C)):(R.flags|=1048576,C)}function y(R){return e&&R.alternate===null&&(R.flags|=2),R}function z(R,C,I,ie){return C===null||C.tag!==6?(C=Qs(I,R.mode,ie),C.return=R,C):(C=c(C,I),C.return=R,C)}function q(R,C,I,ie){var ye=I.type;return ye===L?Q(R,C,I.props.children,ie,I.key):C!==null&&(C.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Ye&&uc(ye)===C.type)?(ie=c(C,I.props),ie.ref=si(R,C,I),ie.return=R,ie):(ie=No(I.type,I.key,I.props,null,R.mode,ie),ie.ref=si(R,C,I),ie.return=R,ie)}function F(R,C,I,ie){return C===null||C.tag!==4||C.stateNode.containerInfo!==I.containerInfo||C.stateNode.implementation!==I.implementation?(C=Xs(I,R.mode,ie),C.return=R,C):(C=c(C,I.children||[]),C.return=R,C)}function Q(R,C,I,ie,ye){return C===null||C.tag!==7?(C=Yr(I,R.mode,ie,ye),C.return=R,C):(C=c(C,I),C.return=R,C)}function ee(R,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Qs(""+C,R.mode,I),C.return=R,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case W:return I=No(C.type,C.key,C.props,null,R.mode,I),I.ref=si(R,null,C),I.return=R,I;case U:return C=Xs(C,R.mode,I),C.return=R,C;case Ye:var ie=C._init;return ee(R,ie(C._payload),I)}if(kt(C)||xe(C))return C=Yr(C,R.mode,I,null),C.return=R,C;mo(R,C)}return null}function K(R,C,I,ie){var ye=C!==null?C.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ye!==null?null:z(R,C,""+I,ie);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case W:return I.key===ye?q(R,C,I,ie):null;case U:return I.key===ye?F(R,C,I,ie):null;case Ye:return ye=I._init,K(R,C,ye(I._payload),ie)}if(kt(I)||xe(I))return ye!==null?null:Q(R,C,I,ie,null);mo(R,I)}return null}function de(R,C,I,ie,ye){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return R=R.get(I)||null,z(C,R,""+ie,ye);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case W:return R=R.get(ie.key===null?I:ie.key)||null,q(C,R,ie,ye);case U:return R=R.get(ie.key===null?I:ie.key)||null,F(C,R,ie,ye);case Ye:var _e=ie._init;return de(R,C,I,_e(ie._payload),ye)}if(kt(ie)||xe(ie))return R=R.get(I)||null,Q(C,R,ie,ye,null);mo(C,ie)}return null}function pe(R,C,I,ie){for(var ye=null,_e=null,ke=C,Me=C=0,bt=null;ke!==null&&Me<I.length;Me++){ke.index>Me?(bt=ke,ke=null):bt=ke.sibling;var He=K(R,ke,I[Me],ie);if(He===null){ke===null&&(ke=bt);break}e&&ke&&He.alternate===null&&t(R,ke),C=m(He,C,Me),_e===null?ye=He:_e.sibling=He,_e=He,ke=bt}if(Me===I.length)return i(R,ke),tt&&Lr(R,Me),ye;if(ke===null){for(;Me<I.length;Me++)ke=ee(R,I[Me],ie),ke!==null&&(C=m(ke,C,Me),_e===null?ye=ke:_e.sibling=ke,_e=ke);return tt&&Lr(R,Me),ye}for(ke=s(R,ke);Me<I.length;Me++)bt=de(ke,R,Me,I[Me],ie),bt!==null&&(e&&bt.alternate!==null&&ke.delete(bt.key===null?Me:bt.key),C=m(bt,C,Me),_e===null?ye=bt:_e.sibling=bt,_e=bt);return e&&ke.forEach(function(wr){return t(R,wr)}),tt&&Lr(R,Me),ye}function ve(R,C,I,ie){var ye=xe(I);if(typeof ye!="function")throw Error(r(150));if(I=ye.call(I),I==null)throw Error(r(151));for(var _e=ye=null,ke=C,Me=C=0,bt=null,He=I.next();ke!==null&&!He.done;Me++,He=I.next()){ke.index>Me?(bt=ke,ke=null):bt=ke.sibling;var wr=K(R,ke,He.value,ie);if(wr===null){ke===null&&(ke=bt);break}e&&ke&&wr.alternate===null&&t(R,ke),C=m(wr,C,Me),_e===null?ye=wr:_e.sibling=wr,_e=wr,ke=bt}if(He.done)return i(R,ke),tt&&Lr(R,Me),ye;if(ke===null){for(;!He.done;Me++,He=I.next())He=ee(R,He.value,ie),He!==null&&(C=m(He,C,Me),_e===null?ye=He:_e.sibling=He,_e=He);return tt&&Lr(R,Me),ye}for(ke=s(R,ke);!He.done;Me++,He=I.next())He=de(ke,R,Me,He.value,ie),He!==null&&(e&&He.alternate!==null&&ke.delete(He.key===null?Me:He.key),C=m(He,C,Me),_e===null?ye=He:_e.sibling=He,_e=He);return e&&ke.forEach(function(jm){return t(R,jm)}),tt&&Lr(R,Me),ye}function ct(R,C,I,ie){if(typeof I=="object"&&I!==null&&I.type===L&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case W:e:{for(var ye=I.key,_e=C;_e!==null;){if(_e.key===ye){if(ye=I.type,ye===L){if(_e.tag===7){i(R,_e.sibling),C=c(_e,I.props.children),C.return=R,R=C;break e}}else if(_e.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Ye&&uc(ye)===_e.type){i(R,_e.sibling),C=c(_e,I.props),C.ref=si(R,_e,I),C.return=R,R=C;break e}i(R,_e);break}else t(R,_e);_e=_e.sibling}I.type===L?(C=Yr(I.props.children,R.mode,ie,I.key),C.return=R,R=C):(ie=No(I.type,I.key,I.props,null,R.mode,ie),ie.ref=si(R,C,I),ie.return=R,R=ie)}return y(R);case U:e:{for(_e=I.key;C!==null;){if(C.key===_e)if(C.tag===4&&C.stateNode.containerInfo===I.containerInfo&&C.stateNode.implementation===I.implementation){i(R,C.sibling),C=c(C,I.children||[]),C.return=R,R=C;break e}else{i(R,C);break}else t(R,C);C=C.sibling}C=Xs(I,R.mode,ie),C.return=R,R=C}return y(R);case Ye:return _e=I._init,ct(R,C,_e(I._payload),ie)}if(kt(I))return pe(R,C,I,ie);if(xe(I))return ve(R,C,I,ie);mo(R,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,C!==null&&C.tag===6?(i(R,C.sibling),C=c(C,I),C.return=R,R=C):(i(R,C),C=Qs(I,R.mode,ie),C.return=R,R=C),y(R)):i(R,C)}return ct}var y0=cc(!0),dc=cc(!1),ho=ur(null),po=null,x0=null,as=null;function ss(){as=x0=po=null}function ls(e){var t=ho.current;et(ho),e._currentValue=t}function us(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function w0(e,t){po=e,as=x0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ft=!0),e.firstContext=null)}function rn(e){var t=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:t,next:null},x0===null){if(po===null)throw Error(r(308));x0=e,po.dependencies={lanes:0,firstContext:e}}else x0=x0.next=e;return t}var Or=null;function cs(e){Or===null?Or=[e]:Or.push(e)}function fc(e,t,i,s){var c=t.interleaved;return c===null?(i.next=i,cs(t)):(i.next=c.next,c.next=i),t.interleaved=i,Nn(e,s)}function Nn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var fr=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,Nn(e,i)}return c=s.interleaved,c===null?(t.next=t,cs(s)):(t.next=c.next,c.next=t),s.interleaved=t,Nn(e,i)}function vo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,za(e,i)}}function hc(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};m===null?c=m=y:m=m.next=y,i=i.next}while(i!==null);m===null?c=m=t:m=m.next=t}else c=m=t;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:m,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function go(e,t,i,s){var c=e.updateQueue;fr=!1;var m=c.firstBaseUpdate,y=c.lastBaseUpdate,z=c.shared.pending;if(z!==null){c.shared.pending=null;var q=z,F=q.next;q.next=null,y===null?m=F:y.next=F,y=q;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,z=Q.lastBaseUpdate,z!==y&&(z===null?Q.firstBaseUpdate=F:z.next=F,Q.lastBaseUpdate=q))}if(m!==null){var ee=c.baseState;y=0,Q=F=q=null,z=m;do{var K=z.lane,de=z.eventTime;if((s&K)===K){Q!==null&&(Q=Q.next={eventTime:de,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var pe=e,ve=z;switch(K=t,de=i,ve.tag){case 1:if(pe=ve.payload,typeof pe=="function"){ee=pe.call(de,ee,K);break e}ee=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=ve.payload,K=typeof pe=="function"?pe.call(de,ee,K):pe,K==null)break e;ee=ue({},ee,K);break e;case 2:fr=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,K=c.effects,K===null?c.effects=[z]:K.push(z))}else de={eventTime:de,lane:K,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Q===null?(F=Q=de,q=ee):Q=Q.next=de,y|=K;if(z=z.next,z===null){if(z=c.shared.pending,z===null)break;K=z,z=K.next,K.next=null,c.lastBaseUpdate=K,c.shared.pending=null}}while(!0);if(Q===null&&(q=ee),c.baseState=q,c.firstBaseUpdate=F,c.lastBaseUpdate=Q,t=c.shared.interleaved,t!==null){c=t;do y|=c.lane,c=c.next;while(c!==t)}else m===null&&(c.shared.lanes=0);Wr|=y,e.lanes=y,e.memoizedState=ee}}function pc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],c=s.callback;if(c!==null){if(s.callback=null,s=i,typeof c!="function")throw Error(r(191,c));c.call(s)}}}var li={},wn=ur(li),ui=ur(li),ci=ur(li);function Hr(e){if(e===li)throw Error(r(174));return e}function fs(e,t){switch(Xe(ci,t),Xe(ui,e),Xe(wn,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:D0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=D0(t,e)}et(wn),Xe(wn,t)}function b0(){et(wn),et(ui),et(ci)}function vc(e){Hr(ci.current);var t=Hr(wn.current),i=D0(t,e.type);t!==i&&(Xe(ui,e),Xe(wn,i))}function ms(e){ui.current===e&&(et(wn),et(ui))}var rt=ur(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hs=[];function ps(){for(var e=0;e<hs.length;e++)hs[e]._workInProgressVersionPrimary=null;hs.length=0}var xo=B.ReactCurrentDispatcher,vs=B.ReactCurrentBatchConfig,Gr=0,it=null,vt=null,xt=null,wo=!1,di=!1,fi=0,Q4=0;function Tt(){throw Error(r(321))}function gs(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!fn(e[i],t[i]))return!1;return!0}function ys(e,t,i,s,c,m){if(Gr=m,it=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?em:tm,e=i(s,c),di){m=0;do{if(di=!1,fi=0,25<=m)throw Error(r(301));m+=1,xt=vt=null,t.updateQueue=null,xo.current=nm,e=i(s,c)}while(di)}if(xo.current=_o,t=vt!==null&&vt.next!==null,Gr=0,xt=vt=it=null,wo=!1,t)throw Error(r(300));return e}function xs(){var e=fi!==0;return fi=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?it.memoizedState=xt=e:xt=xt.next=e,xt}function on(){if(vt===null){var e=it.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=xt===null?it.memoizedState:xt.next;if(t!==null)xt=t,vt=e;else{if(e===null)throw Error(r(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},xt===null?it.memoizedState=xt=e:xt=xt.next=e}return xt}function mi(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=on(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=vt,c=s.baseQueue,m=i.pending;if(m!==null){if(c!==null){var y=c.next;c.next=m.next,m.next=y}s.baseQueue=c=m,i.pending=null}if(c!==null){m=c.next,s=s.baseState;var z=y=null,q=null,F=m;do{var Q=F.lane;if((Gr&Q)===Q)q!==null&&(q=q.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),s=F.hasEagerState?F.eagerState:e(s,F.action);else{var ee={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};q===null?(z=q=ee,y=s):q=q.next=ee,it.lanes|=Q,Wr|=Q}F=F.next}while(F!==null&&F!==m);q===null?y=s:q.next=z,fn(s,t.memoizedState)||(Ft=!0),t.memoizedState=s,t.baseState=y,t.baseQueue=q,i.lastRenderedState=s}if(e=i.interleaved,e!==null){c=e;do m=c.lane,it.lanes|=m,Wr|=m,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function bs(e){var t=on(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=i.dispatch,c=i.pending,m=t.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do m=e(m,y.action),y=y.next;while(y!==c);fn(m,t.memoizedState)||(Ft=!0),t.memoizedState=m,t.baseQueue===null&&(t.baseState=m),i.lastRenderedState=m}return[m,s]}function gc(){}function yc(e,t){var i=it,s=on(),c=t(),m=!fn(s.memoizedState,c);if(m&&(s.memoizedState=c,Ft=!0),s=s.queue,$s(bc.bind(null,i,s,e),[e]),s.getSnapshot!==t||m||xt!==null&&xt.memoizedState.tag&1){if(i.flags|=2048,hi(9,wc.bind(null,i,s,c,t),void 0,null),wt===null)throw Error(r(349));(Gr&30)!==0||xc(i,t,c)}return c}function xc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function wc(e,t,i,s){t.value=i,t.getSnapshot=s,$c(t)&&_c(e)}function bc(e,t,i){return i(function(){$c(t)&&_c(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!fn(e,i)}catch{return!0}}function _c(e){var t=Nn(e,1);t!==null&&gn(t,e,1,-1)}function kc(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=J4.bind(null,it,e),[t.memoizedState,e]}function hi(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function zc(){return on().memoizedState}function bo(e,t,i,s){var c=bn();it.flags|=e,c.memoizedState=hi(1|t,i,void 0,s===void 0?null:s)}function $o(e,t,i,s){var c=on();s=s===void 0?null:s;var m=void 0;if(vt!==null){var y=vt.memoizedState;if(m=y.destroy,s!==null&&gs(s,y.deps)){c.memoizedState=hi(t,i,m,s);return}}it.flags|=e,c.memoizedState=hi(1|t,i,m,s)}function Sc(e,t){return bo(8390656,8,e,t)}function $s(e,t){return $o(2048,8,e,t)}function Tc(e,t){return $o(4,2,e,t)}function jc(e,t){return $o(4,4,e,t)}function qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,i){return i=i!=null?i.concat([e]):null,$o(4,4,qc.bind(null,t,e),i)}function _s(){}function Ac(e,t){var i=on();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&gs(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function Cc(e,t){var i=on();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&gs(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function Pc(e,t,i){return(Gr&21)===0?(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=i):(fn(i,t)||(i=uu(),it.lanes|=i,Wr|=i,e.baseState=!0),t)}function X4(e,t){var i=Ke;Ke=i!==0&&4>i?i:4,e(!0);var s=vs.transition;vs.transition={};try{e(!1),t()}finally{Ke=i,vs.transition=s}}function Ec(){return on().memoizedState}function Z4(e,t,i){var s=gr(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Dc(e))Rc(t,i);else if(i=fc(e,t,i,s),i!==null){var c=Pt();gn(i,e,s,c),Nc(i,t,s)}}function J4(e,t,i){var s=gr(e),c={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))Rc(t,c);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=t.lastRenderedReducer,m!==null))try{var y=t.lastRenderedState,z=m(y,i);if(c.hasEagerState=!0,c.eagerState=z,fn(z,y)){var q=t.interleaved;q===null?(c.next=c,cs(t)):(c.next=q.next,q.next=c),t.interleaved=c;return}}catch{}finally{}i=fc(e,t,c,s),i!==null&&(c=Pt(),gn(i,e,s,c),Nc(i,t,s))}}function Dc(e){var t=e.alternate;return e===it||t!==null&&t===it}function Rc(e,t){di=wo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Nc(e,t,i){if((i&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,za(e,i)}}var _o={readContext:rn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},em={readContext:rn,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:rn,useEffect:Sc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,bo(4194308,4,qc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return bo(4,2,e,t)},useMemo:function(e,t){var i=bn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=bn();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Z4.bind(null,it,e),[s.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:kc,useDebugValue:_s,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=kc(!1),t=e[0];return e=X4.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=it,c=bn();if(tt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),wt===null)throw Error(r(349));(Gr&30)!==0||xc(s,t,i)}c.memoizedState=i;var m={value:i,getSnapshot:t};return c.queue=m,Sc(bc.bind(null,s,m,e),[e]),s.flags|=2048,hi(9,wc.bind(null,s,m,i,t),void 0,null),i},useId:function(){var e=bn(),t=wt.identifierPrefix;if(tt){var i=Rn,s=Dn;i=(s&~(1<<32-dn(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=fi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Q4++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tm={readContext:rn,useCallback:Ac,useContext:rn,useEffect:$s,useImperativeHandle:Mc,useInsertionEffect:Tc,useLayoutEffect:jc,useMemo:Cc,useReducer:ws,useRef:zc,useState:function(){return ws(mi)},useDebugValue:_s,useDeferredValue:function(e){var t=on();return Pc(t,vt.memoizedState,e)},useTransition:function(){var e=ws(mi)[0],t=on().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Ec,unstable_isNewReconciler:!1},nm={readContext:rn,useCallback:Ac,useContext:rn,useEffect:$s,useImperativeHandle:Mc,useInsertionEffect:Tc,useLayoutEffect:jc,useMemo:Cc,useReducer:bs,useRef:zc,useState:function(){return bs(mi)},useDebugValue:_s,useDeferredValue:function(e){var t=on();return vt===null?t.memoizedState=e:Pc(t,vt.memoizedState,e)},useTransition:function(){var e=bs(mi)[0],t=on().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Ec,unstable_isNewReconciler:!1};function hn(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function ks(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:ue({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var ko={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=Pt(),c=gr(e),m=Bn(s,c);m.payload=t,i!=null&&(m.callback=i),t=mr(e,m,c),t!==null&&(gn(t,e,c,s),vo(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=Pt(),c=gr(e),m=Bn(s,c);m.tag=1,m.payload=t,i!=null&&(m.callback=i),t=mr(e,m,c),t!==null&&(gn(t,e,c,s),vo(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Pt(),s=gr(e),c=Bn(i,s);c.tag=2,t!=null&&(c.callback=t),t=mr(e,c,s),t!==null&&(gn(t,e,s,i),vo(t,e,s))}};function Bc(e,t,i,s,c,m,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,m,y):t.prototype&&t.prototype.isPureReactComponent?!ei(i,s)||!ei(c,m):!0}function Ic(e,t,i){var s=!1,c=cr,m=t.contextType;return typeof m=="object"&&m!==null?m=rn(m):(c=It(t)?Ir:St.current,s=t.contextTypes,m=(s=s!=null)?h0(e,c):cr),t=new t(i,m),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=m),t}function Fc(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function zs(e,t,i,s){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},ds(e);var m=t.contextType;typeof m=="object"&&m!==null?c.context=rn(m):(m=It(t)?Ir:St.current,c.context=h0(e,m)),c.state=e.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(ks(e,t,m,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&ko.enqueueReplaceState(c,c.state,null),go(e,i,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function $0(e,t){try{var i="",s=t;do i+=be(s),s=s.return;while(s);var c=i}catch(m){c=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:t,stack:c,digest:null}}function Ss(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var rm=typeof WeakMap=="function"?WeakMap:Map;function Lc(e,t,i){i=Bn(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){Ao||(Ao=!0,Os=s),Ts(e,t)},i}function Oc(e,t,i){i=Bn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=t.value;i.payload=function(){return s(c)},i.callback=function(){Ts(e,t)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(i.callback=function(){Ts(e,t),typeof s!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function Hc(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new rm;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(i)||(c.add(i),e=gm.bind(null,e,t,i),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,i,s,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Bn(-1,1),t.tag=2,mr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var im=B.ReactCurrentOwner,Ft=!1;function Ct(e,t,i,s){t.child=e===null?dc(t,null,i,s):y0(t,e.child,i,s)}function Uc(e,t,i,s,c){i=i.render;var m=t.ref;return w0(t,c),s=ys(e,t,i,s,m,c),i=xs(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,In(e,t,c)):(tt&&i&&ts(t),t.flags|=1,Ct(e,t,s,c),t.child)}function Vc(e,t,i,s,c){if(e===null){var m=i.type;return typeof m=="function"&&!Ys(m)&&m.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=m,Kc(e,t,m,s,c)):(e=No(i.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(m=e.child,(e.lanes&c)===0){var y=m.memoizedProps;if(i=i.compare,i=i!==null?i:ei,i(y,s)&&e.ref===t.ref)return In(e,t,c)}return t.flags|=1,e=xr(m,s),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,i,s,c){if(e!==null){var m=e.memoizedProps;if(ei(m,s)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=s=m,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Ft=!0);else return t.lanes=e.lanes,In(e,t,c)}return js(e,t,i,s,c)}function Yc(e,t,i){var s=t.pendingProps,c=s.children,m=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(k0,Yt),Yt|=i;else{if((i&1073741824)===0)return e=m!==null?m.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Xe(k0,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=m!==null?m.baseLanes:i,Xe(k0,Yt),Yt|=s}else m!==null?(s=m.baseLanes|i,t.memoizedState=null):s=i,Xe(k0,Yt),Yt|=s;return Ct(e,t,c,i),t.child}function Qc(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,i,s,c){var m=It(i)?Ir:St.current;return m=h0(t,m),w0(t,c),i=ys(e,t,i,s,m,c),s=xs(),e!==null&&!Ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,In(e,t,c)):(tt&&s&&ts(t),t.flags|=1,Ct(e,t,i,c),t.child)}function Xc(e,t,i,s,c){if(It(i)){var m=!0;so(t)}else m=!1;if(w0(t,c),t.stateNode===null)So(e,t),Ic(t,i,s),zs(t,i,s,c),s=!0;else if(e===null){var y=t.stateNode,z=t.memoizedProps;y.props=z;var q=y.context,F=i.contextType;typeof F=="object"&&F!==null?F=rn(F):(F=It(i)?Ir:St.current,F=h0(t,F));var Q=i.getDerivedStateFromProps,ee=typeof Q=="function"||typeof y.getSnapshotBeforeUpdate=="function";ee||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(z!==s||q!==F)&&Fc(t,y,s,F),fr=!1;var K=t.memoizedState;y.state=K,go(t,s,y,c),q=t.memoizedState,z!==s||K!==q||Bt.current||fr?(typeof Q=="function"&&(ks(t,i,Q,s),q=t.memoizedState),(z=fr||Bc(t,i,z,s,K,q,F))?(ee||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=q),y.props=s,y.state=q,y.context=F,s=z):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{y=t.stateNode,mc(e,t),z=t.memoizedProps,F=t.type===t.elementType?z:hn(t.type,z),y.props=F,ee=t.pendingProps,K=y.context,q=i.contextType,typeof q=="object"&&q!==null?q=rn(q):(q=It(i)?Ir:St.current,q=h0(t,q));var de=i.getDerivedStateFromProps;(Q=typeof de=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(z!==ee||K!==q)&&Fc(t,y,s,q),fr=!1,K=t.memoizedState,y.state=K,go(t,s,y,c);var pe=t.memoizedState;z!==ee||K!==pe||Bt.current||fr?(typeof de=="function"&&(ks(t,i,de,s),pe=t.memoizedState),(F=fr||Bc(t,i,F,s,K,pe,q)||!1)?(Q||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,pe,q),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,pe,q)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=pe),y.props=s,y.state=pe,y.context=q,s=F):(typeof y.componentDidUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),s=!1)}return qs(e,t,i,s,m,c)}function qs(e,t,i,s,c,m){Qc(e,t);var y=(t.flags&128)!==0;if(!s&&!y)return c&&nc(t,i,!1),In(e,t,m);s=t.stateNode,im.current=t;var z=y&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&y?(t.child=y0(t,e.child,null,m),t.child=y0(t,null,z,m)):Ct(e,t,z,m),t.memoizedState=s.state,c&&nc(t,i,!0),t.child}function Zc(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),fs(e,t.containerInfo)}function Jc(e,t,i,s,c){return g0(),os(c),t.flags|=256,Ct(e,t,i,s),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function e1(e,t,i){var s=t.pendingProps,c=rt.current,m=!1,y=(t.flags&128)!==0,z;if((z=y)||(z=e!==null&&e.memoizedState===null?!1:(c&2)!==0),z?(m=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Xe(rt,c&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=s.children,e=s.fallback,m?(s=t.mode,m=t.child,y={mode:"hidden",children:y},(s&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=y):m=Bo(y,s,0,null),e=Yr(e,s,i,null),m.return=t,e.return=t,m.sibling=e,t.child=m,t.child.memoizedState=As(i),t.memoizedState=Ms,e):Cs(t,y));if(c=e.memoizedState,c!==null&&(z=c.dehydrated,z!==null))return om(e,t,y,s,z,c,i);if(m){m=s.fallback,y=t.mode,c=e.child,z=c.sibling;var q={mode:"hidden",children:s.children};return(y&1)===0&&t.child!==c?(s=t.child,s.childLanes=0,s.pendingProps=q,t.deletions=null):(s=xr(c,q),s.subtreeFlags=c.subtreeFlags&14680064),z!==null?m=xr(z,m):(m=Yr(m,y,i,null),m.flags|=2),m.return=t,s.return=t,s.sibling=m,t.child=s,s=m,m=t.child,y=e.child.memoizedState,y=y===null?As(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},m.memoizedState=y,m.childLanes=e.childLanes&~i,t.memoizedState=Ms,s}return m=e.child,e=m.sibling,s=xr(m,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function Cs(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,i,s){return s!==null&&os(s),y0(t,e.child,null,i),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,i,s,c,m,y){if(i)return t.flags&256?(t.flags&=-257,s=Ss(Error(r(422))),zo(e,t,y,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(m=s.fallback,c=t.mode,s=Bo({mode:"visible",children:s.children},c,0,null),m=Yr(m,c,y,null),m.flags|=2,s.return=t,m.return=t,s.sibling=m,t.child=s,(t.mode&1)!==0&&y0(t,e.child,null,y),t.child.memoizedState=As(y),t.memoizedState=Ms,m);if((t.mode&1)===0)return zo(e,t,y,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var z=s.dgst;return s=z,m=Error(r(419)),s=Ss(m,s,void 0),zo(e,t,y,s)}if(z=(y&e.childLanes)!==0,Ft||z){if(s=wt,s!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(s.suspendedLanes|y))!==0?0:c,c!==0&&c!==m.retryLane&&(m.retryLane=c,Nn(e,c),gn(s,e,c,-1))}return Ks(),s=Ss(Error(r(421))),zo(e,t,y,s)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=ym.bind(null,e),c._reactRetry=t,null):(e=m.treeContext,Kt=lr(c.nextSibling),Vt=t,tt=!0,mn=null,e!==null&&(tn[nn++]=Dn,tn[nn++]=Rn,tn[nn++]=Fr,Dn=e.id,Rn=e.overflow,Fr=t),t=Cs(t,s.children),t.flags|=4096,t)}function t1(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),us(e.return,t,i)}function Ps(e,t,i,s,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=i,m.tailMode=c)}function n1(e,t,i){var s=t.pendingProps,c=s.revealOrder,m=s.tail;if(Ct(e,t,s.children,i),s=rt.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t1(e,i,t);else if(e.tag===19)t1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Xe(rt,s),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&yo(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Ps(t,!1,c,i,m);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&yo(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Ps(t,!0,i,null,m);break;case"together":Ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Wr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=xr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=xr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function am(e,t,i){switch(t.tag){case 3:Zc(t),g0();break;case 5:vc(t);break;case 1:It(t.type)&&so(t);break;case 4:fs(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,c=t.memoizedProps.value;Xe(ho,s._currentValue),s._currentValue=c;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Xe(rt,rt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?e1(e,t,i):(Xe(rt,rt.current&1),e=In(e,t,i),e!==null?e.sibling:null);Xe(rt,rt.current&1);break;case 19:if(s=(i&t.childLanes)!==0,(e.flags&128)!==0){if(s)return n1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xe(rt,rt.current),s)break;return null;case 22:case 23:return t.lanes=0,Yc(e,t,i)}return In(e,t,i)}var r1,Es,i1,o1;r1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Es=function(){},i1=function(e,t,i,s){var c=e.memoizedProps;if(c!==s){e=t.stateNode,Hr(wn.current);var m=null;switch(i){case"input":c=Kn(e,c),s=Kn(e,s),m=[];break;case"select":c=ue({},c,{value:void 0}),s=ue({},s,{value:void 0}),m=[];break;case"textarea":c=e0(e,c),s=e0(e,s),m=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=io)}Cr(i,s);var y;i=null;for(F in c)if(!s.hasOwnProperty(F)&&c.hasOwnProperty(F)&&c[F]!=null)if(F==="style"){var z=c[F];for(y in z)z.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(l.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in s){var q=s[F];if(z=c!=null?c[F]:void 0,s.hasOwnProperty(F)&&q!==z&&(q!=null||z!=null))if(F==="style")if(z){for(y in z)!z.hasOwnProperty(y)||q&&q.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in q)q.hasOwnProperty(y)&&z[y]!==q[y]&&(i||(i={}),i[y]=q[y])}else i||(m||(m=[]),m.push(F,i)),i=q;else F==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,z=z?z.__html:void 0,q!=null&&z!==q&&(m=m||[]).push(F,q)):F==="children"?typeof q!="string"&&typeof q!="number"||(m=m||[]).push(F,""+q):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(l.hasOwnProperty(F)?(q!=null&&F==="onScroll"&&Je("scroll",e),m||z===q||(m=[])):(m=m||[]).push(F,q))}i&&(m=m||[]).push("style",i);var F=m;(t.updateQueue=F)&&(t.flags|=4)}},o1=function(e,t,i,s){i!==s&&(t.flags|=4)};function pi(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function jt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function sm(e,t,i){var s=t.pendingProps;switch(ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(t),null;case 1:return It(t.type)&&ao(),jt(t),null;case 3:return s=t.stateNode,b0(),et(Bt),et(St),ps(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mn!==null&&(Ws(mn),mn=null))),Es(e,t),jt(t),null;case 5:ms(t);var c=Hr(ci.current);if(i=t.type,e!==null&&t.stateNode!=null)i1(e,t,i,s,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(r(166));return jt(t),null}if(e=Hr(wn.current),fo(t)){s=t.stateNode,i=t.type;var m=t.memoizedProps;switch(s[xn]=t,s[oi]=m,e=(t.mode&1)!==0,i){case"dialog":Je("cancel",s),Je("close",s);break;case"iframe":case"object":case"embed":Je("load",s);break;case"video":case"audio":for(c=0;c<ni.length;c++)Je(ni[c],s);break;case"source":Je("error",s);break;case"img":case"image":case"link":Je("error",s),Je("load",s);break;case"details":Je("toggle",s);break;case"input":qr(s,m),Je("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!m.multiple},Je("invalid",s);break;case"textarea":At(s,m),Je("invalid",s)}Cr(i,m),c=null;for(var y in m)if(m.hasOwnProperty(y)){var z=m[y];y==="children"?typeof z=="string"?s.textContent!==z&&(m.suppressHydrationWarning!==!0&&ro(s.textContent,z,e),c=["children",z]):typeof z=="number"&&s.textContent!==""+z&&(m.suppressHydrationWarning!==!0&&ro(s.textContent,z,e),c=["children",""+z]):l.hasOwnProperty(y)&&z!=null&&y==="onScroll"&&Je("scroll",s)}switch(i){case"input":Zt(s),Yn(s,m,!0);break;case"textarea":Zt(s),E0(s);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(s.onclick=io)}s=c,t.updateQueue=s,s!==null&&(t.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ci(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(i,{is:s.is}):(e=y.createElement(i),i==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,i),e[xn]=t,e[oi]=s,r1(e,t,!1,!1),t.stateNode=e;e:{switch(y=Xn(i,s),i){case"dialog":Je("cancel",e),Je("close",e),c=s;break;case"iframe":case"object":case"embed":Je("load",e),c=s;break;case"video":case"audio":for(c=0;c<ni.length;c++)Je(ni[c],e);c=s;break;case"source":Je("error",e),c=s;break;case"img":case"image":case"link":Je("error",e),Je("load",e),c=s;break;case"details":Je("toggle",e),c=s;break;case"input":qr(e,s),c=Kn(e,s),Je("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=ue({},s,{value:void 0}),Je("invalid",e);break;case"textarea":At(e,s),c=e0(e,s),Je("invalid",e);break;default:c=s}Cr(i,c),z=c;for(m in z)if(z.hasOwnProperty(m)){var q=z[m];m==="style"?Di(e,q):m==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&Pi(e,q)):m==="children"?typeof q=="string"?(i!=="textarea"||q!=="")&&Jt(e,q):typeof q=="number"&&Jt(e,""+q):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?q!=null&&m==="onScroll"&&Je("scroll",e):q!=null&&H(e,m,q,y))}switch(i){case"input":Zt(e),Yn(e,s,!1);break;case"textarea":Zt(e),E0(e);break;case"option":s.value!=null&&e.setAttribute("value",""+De(s.value));break;case"select":e.multiple=!!s.multiple,m=s.value,m!=null?Ve(e,!!s.multiple,m,!1):s.defaultValue!=null&&Ve(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=io)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return jt(t),null;case 6:if(e&&t.stateNode!=null)o1(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(r(166));if(i=Hr(ci.current),Hr(wn.current),fo(t)){if(s=t.stateNode,i=t.memoizedProps,s[xn]=t,(m=s.nodeValue!==i)&&(e=Vt,e!==null))switch(e.tag){case 3:ro(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ro(s.nodeValue,i,(e.mode&1)!==0)}m&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[xn]=t,t.stateNode=s}return jt(t),null;case 13:if(et(rt),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Kt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lc(),g0(),t.flags|=98560,m=!1;else if(m=fo(t),s!==null&&s.dehydrated!==null){if(e===null){if(!m)throw Error(r(318));if(m=t.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[xn]=t}else g0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;jt(t),m=!1}else mn!==null&&(Ws(mn),mn=null),m=!0;if(!m)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(rt.current&1)!==0?gt===0&&(gt=3):Ks())),t.updateQueue!==null&&(t.flags|=4),jt(t),null);case 4:return b0(),Es(e,t),e===null&&ri(t.stateNode.containerInfo),jt(t),null;case 10:return ls(t.type._context),jt(t),null;case 17:return It(t.type)&&ao(),jt(t),null;case 19:if(et(rt),m=t.memoizedState,m===null)return jt(t),null;if(s=(t.flags&128)!==0,y=m.rendering,y===null)if(s)pi(m,!1);else{if(gt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=yo(e),y!==null){for(t.flags|=128,pi(m,!1),s=y.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)m=i,e=s,m.flags&=14680066,y=m.alternate,y===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=y.childLanes,m.lanes=y.lanes,m.child=y.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=y.memoizedProps,m.memoizedState=y.memoizedState,m.updateQueue=y.updateQueue,m.type=y.type,e=y.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Xe(rt,rt.current&1|2),t.child}e=e.sibling}m.tail!==null&&ut()>z0&&(t.flags|=128,s=!0,pi(m,!1),t.lanes=4194304)}else{if(!s)if(e=yo(y),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),pi(m,!0),m.tail===null&&m.tailMode==="hidden"&&!y.alternate&&!tt)return jt(t),null}else 2*ut()-m.renderingStartTime>z0&&i!==1073741824&&(t.flags|=128,s=!0,pi(m,!1),t.lanes=4194304);m.isBackwards?(y.sibling=t.child,t.child=y):(i=m.last,i!==null?i.sibling=y:t.child=y,m.last=y)}return m.tail!==null?(t=m.tail,m.rendering=t,m.tail=t.sibling,m.renderingStartTime=ut(),t.sibling=null,i=rt.current,Xe(rt,s?i&1|2:i&1),t):(jt(t),null);case 22:case 23:return Vs(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(Yt&1073741824)!==0&&(jt(t),t.subtreeFlags&6&&(t.flags|=8192)):jt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function lm(e,t){switch(ns(t),t.tag){case 1:return It(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return b0(),et(Bt),et(St),ps(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(et(rt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));g0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(rt),null;case 4:return b0(),null;case 10:return ls(t.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var To=!1,qt=!1,um=typeof WeakSet=="function"?WeakSet:Set,he=null;function _0(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){st(e,t,s)}else i.current=null}function Ds(e,t,i){try{i()}catch(s){st(e,t,s)}}var a1=!1;function cm(e,t){if(Va=Ui,e=Bu(),Ia(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,m=s.focusNode;s=s.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break e}var y=0,z=-1,q=-1,F=0,Q=0,ee=e,K=null;t:for(;;){for(var de;ee!==i||c!==0&&ee.nodeType!==3||(z=y+c),ee!==m||s!==0&&ee.nodeType!==3||(q=y+s),ee.nodeType===3&&(y+=ee.nodeValue.length),(de=ee.firstChild)!==null;)K=ee,ee=de;for(;;){if(ee===e)break t;if(K===i&&++F===c&&(z=y),K===m&&++Q===s&&(q=y),(de=ee.nextSibling)!==null)break;ee=K,K=ee.parentNode}ee=de}i=z===-1||q===-1?null:{start:z,end:q}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ka={focusedElem:e,selectionRange:i},Ui=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var pe=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var ve=pe.memoizedProps,ct=pe.memoizedState,R=t.stateNode,C=R.getSnapshotBeforeUpdate(t.elementType===t.type?ve:hn(t.type,ve),ct);R.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ie){st(t,t.return,ie)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return pe=a1,a1=!1,pe}function vi(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var m=c.destroy;c.destroy=void 0,m!==void 0&&Ds(t,i,m)}c=c.next}while(c!==s)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function Rs(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function s1(e){var t=e.alternate;t!==null&&(e.alternate=null,s1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[oi],delete t[Za],delete t[U4],delete t[V4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l1(e){return e.tag===5||e.tag===3||e.tag===4}function u1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=io));else if(s!==4&&(e=e.child,e!==null))for(Ns(e,t,i),e=e.sibling;e!==null;)Ns(e,t,i),e=e.sibling}function Bs(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Bs(e,t,i),e=e.sibling;e!==null;)Bs(e,t,i),e=e.sibling}var $t=null,pn=!1;function hr(e,t,i){for(i=i.child;i!==null;)c1(e,t,i),i=i.sibling}function c1(e,t,i){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Fi,i)}catch{}switch(i.tag){case 5:qt||_0(i,t);case 6:var s=$t,c=pn;$t=null,hr(e,t,i),$t=s,pn=c,$t!==null&&(pn?(e=$t,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):$t.removeChild(i.stateNode));break;case 18:$t!==null&&(pn?(e=$t,i=i.stateNode,e.nodeType===8?Xa(e.parentNode,i):e.nodeType===1&&Xa(e,i),K0(e)):Xa($t,i.stateNode));break;case 4:s=$t,c=pn,$t=i.stateNode.containerInfo,pn=!0,hr(e,t,i),$t=s,pn=c;break;case 0:case 11:case 14:case 15:if(!qt&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var m=c,y=m.destroy;m=m.tag,y!==void 0&&((m&2)!==0||(m&4)!==0)&&Ds(i,t,y),c=c.next}while(c!==s)}hr(e,t,i);break;case 1:if(!qt&&(_0(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(z){st(i,t,z)}hr(e,t,i);break;case 21:hr(e,t,i);break;case 22:i.mode&1?(qt=(s=qt)||i.memoizedState!==null,hr(e,t,i),qt=s):hr(e,t,i);break;default:hr(e,t,i)}}function d1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new um),t.forEach(function(s){var c=xm.bind(null,e,s);i.has(s)||(i.add(s),s.then(c,c))})}}function vn(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];try{var m=e,y=t,z=y;e:for(;z!==null;){switch(z.tag){case 5:$t=z.stateNode,pn=!1;break e;case 3:$t=z.stateNode.containerInfo,pn=!0;break e;case 4:$t=z.stateNode.containerInfo,pn=!0;break e}z=z.return}if($t===null)throw Error(r(160));c1(m,y,c),$t=null,pn=!1;var q=c.alternate;q!==null&&(q.return=null),c.return=null}catch(F){st(c,t,F)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)f1(t,e),t=t.sibling}function f1(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(t,e),$n(e),s&4){try{vi(3,e,e.return),jo(3,e)}catch(ve){st(e,e.return,ve)}try{vi(5,e,e.return)}catch(ve){st(e,e.return,ve)}}break;case 1:vn(t,e),$n(e),s&512&&i!==null&&_0(i,i.return);break;case 5:if(vn(t,e),$n(e),s&512&&i!==null&&_0(i,i.return),e.flags&32){var c=e.stateNode;try{Jt(c,"")}catch(ve){st(e,e.return,ve)}}if(s&4&&(c=e.stateNode,c!=null)){var m=e.memoizedProps,y=i!==null?i.memoizedProps:m,z=e.type,q=e.updateQueue;if(e.updateQueue=null,q!==null)try{z==="input"&&m.type==="radio"&&m.name!=null&&An(c,m),Xn(z,y);var F=Xn(z,m);for(y=0;y<q.length;y+=2){var Q=q[y],ee=q[y+1];Q==="style"?Di(c,ee):Q==="dangerouslySetInnerHTML"?Pi(c,ee):Q==="children"?Jt(c,ee):H(c,Q,ee,F)}switch(z){case"input":Cn(c,m);break;case"textarea":Qn(c,m);break;case"select":var K=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!m.multiple;var de=m.value;de!=null?Ve(c,!!m.multiple,de,!1):K!==!!m.multiple&&(m.defaultValue!=null?Ve(c,!!m.multiple,m.defaultValue,!0):Ve(c,!!m.multiple,m.multiple?[]:"",!1))}c[oi]=m}catch(ve){st(e,e.return,ve)}}break;case 6:if(vn(t,e),$n(e),s&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,m=e.memoizedProps;try{c.nodeValue=m}catch(ve){st(e,e.return,ve)}}break;case 3:if(vn(t,e),$n(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{K0(t.containerInfo)}catch(ve){st(e,e.return,ve)}break;case 4:vn(t,e),$n(e);break;case 13:vn(t,e),$n(e),c=e.child,c.flags&8192&&(m=c.memoizedState!==null,c.stateNode.isHidden=m,!m||c.alternate!==null&&c.alternate.memoizedState!==null||(Ls=ut())),s&4&&d1(e);break;case 22:if(Q=i!==null&&i.memoizedState!==null,e.mode&1?(qt=(F=qt)||Q,vn(t,e),qt=F):vn(t,e),$n(e),s&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!Q&&(e.mode&1)!==0)for(he=e,Q=e.child;Q!==null;){for(ee=he=Q;he!==null;){switch(K=he,de=K.child,K.tag){case 0:case 11:case 14:case 15:vi(4,K,K.return);break;case 1:_0(K,K.return);var pe=K.stateNode;if(typeof pe.componentWillUnmount=="function"){s=K,i=K.return;try{t=s,pe.props=t.memoizedProps,pe.state=t.memoizedState,pe.componentWillUnmount()}catch(ve){st(s,i,ve)}}break;case 5:_0(K,K.return);break;case 22:if(K.memoizedState!==null){p1(ee);continue}}de!==null?(de.return=K,he=de):p1(ee)}Q=Q.sibling}e:for(Q=null,ee=e;;){if(ee.tag===5){if(Q===null){Q=ee;try{c=ee.stateNode,F?(m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(z=ee.stateNode,q=ee.memoizedProps.style,y=q!=null&&q.hasOwnProperty("display")?q.display:null,z.style.display=R0("display",y))}catch(ve){st(e,e.return,ve)}}}else if(ee.tag===6){if(Q===null)try{ee.stateNode.nodeValue=F?"":ee.memoizedProps}catch(ve){st(e,e.return,ve)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===e)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===e)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===e)break e;Q===ee&&(Q=null),ee=ee.return}Q===ee&&(Q=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:vn(t,e),$n(e),s&4&&d1(e);break;case 21:break;default:vn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(l1(i)){var s=i;break e}i=i.return}throw Error(r(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(Jt(c,""),s.flags&=-33);var m=u1(e);Bs(e,m,c);break;case 3:case 4:var y=s.stateNode.containerInfo,z=u1(e);Ns(e,z,y);break;default:throw Error(r(161))}}catch(q){st(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dm(e,t,i){he=e,m1(e)}function m1(e,t,i){for(var s=(e.mode&1)!==0;he!==null;){var c=he,m=c.child;if(c.tag===22&&s){var y=c.memoizedState!==null||To;if(!y){var z=c.alternate,q=z!==null&&z.memoizedState!==null||qt;z=To;var F=qt;if(To=y,(qt=q)&&!F)for(he=c;he!==null;)y=he,q=y.child,y.tag===22&&y.memoizedState!==null?v1(c):q!==null?(q.return=y,he=q):v1(c);for(;m!==null;)he=m,m1(m),m=m.sibling;he=c,To=z,qt=F}h1(e)}else(c.subtreeFlags&8772)!==0&&m!==null?(m.return=c,he=m):h1(e)}}function h1(e){for(;he!==null;){var t=he;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qt||jo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!qt)if(i===null)s.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:hn(t.type,i.memoizedProps);s.componentDidUpdate(c,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var m=t.updateQueue;m!==null&&pc(t,m,s);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}pc(t,y,i)}break;case 5:var z=t.stateNode;if(i===null&&t.flags&4){i=z;var q=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&i.focus();break;case"img":q.src&&(i.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var F=t.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var ee=Q.dehydrated;ee!==null&&K0(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}qt||t.flags&512&&Rs(t)}catch(K){st(t,t.return,K)}}if(t===e){he=null;break}if(i=t.sibling,i!==null){i.return=t.return,he=i;break}he=t.return}}function p1(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var i=t.sibling;if(i!==null){i.return=t.return,he=i;break}he=t.return}}function v1(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{jo(4,t)}catch(q){st(t,i,q)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var c=t.return;try{s.componentDidMount()}catch(q){st(t,c,q)}}var m=t.return;try{Rs(t)}catch(q){st(t,m,q)}break;case 5:var y=t.return;try{Rs(t)}catch(q){st(t,y,q)}}}catch(q){st(t,t.return,q)}if(t===e){he=null;break}var z=t.sibling;if(z!==null){z.return=t.return,he=z;break}he=t.return}}var fm=Math.ceil,qo=B.ReactCurrentDispatcher,Is=B.ReactCurrentOwner,an=B.ReactCurrentBatchConfig,Fe=0,wt=null,mt=null,_t=0,Yt=0,k0=ur(0),gt=0,gi=null,Wr=0,Mo=0,Fs=0,yi=null,Lt=null,Ls=0,z0=1/0,Fn=null,Ao=!1,Os=null,pr=null,Co=!1,vr=null,Po=0,xi=0,Hs=null,Eo=-1,Do=0;function Pt(){return(Fe&6)!==0?ut():Eo!==-1?Eo:Eo=ut()}function gr(e){return(e.mode&1)===0?1:(Fe&2)!==0&&_t!==0?_t&-_t:Y4.transition!==null?(Do===0&&(Do=uu()),Do):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e)}function gn(e,t,i,s){if(50<xi)throw xi=0,Hs=null,Error(r(185));H0(e,i,s),((Fe&2)===0||e!==wt)&&(e===wt&&((Fe&2)===0&&(Mo|=i),gt===4&&yr(e,_t)),Ot(e,s),i===1&&Fe===0&&(t.mode&1)===0&&(z0=ut()+500,lo&&dr()))}function Ot(e,t){var i=e.callbackNode;Yf(e,t);var s=Hi(e,e===wt?_t:0);if(s===0)i!==null&&au(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&au(i),t===1)e.tag===0?K4(y1.bind(null,e)):rc(y1.bind(null,e)),G4(function(){(Fe&6)===0&&dr()}),i=null;else{switch(cu(s)){case 1:i=$a;break;case 4:i=su;break;case 16:i=Ii;break;case 536870912:i=lu;break;default:i=Ii}i=S1(i,g1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function g1(e,t){if(Eo=-1,Do=0,(Fe&6)!==0)throw Error(r(327));var i=e.callbackNode;if(S0()&&e.callbackNode!==i)return null;var s=Hi(e,e===wt?_t:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Ro(e,s);else{t=s;var c=Fe;Fe|=2;var m=w1();(wt!==e||_t!==t)&&(Fn=null,z0=ut()+500,Vr(e,t));do try{pm();break}catch(z){x1(e,z)}while(!0);ss(),qo.current=m,Fe=c,mt!==null?t=0:(wt=null,_t=0,t=gt)}if(t!==0){if(t===2&&(c=_a(e),c!==0&&(s=c,t=Gs(e,c))),t===1)throw i=gi,Vr(e,0),yr(e,s),Ot(e,ut()),i;if(t===6)yr(e,s);else{if(c=e.current.alternate,(s&30)===0&&!mm(c)&&(t=Ro(e,s),t===2&&(m=_a(e),m!==0&&(s=m,t=Gs(e,m))),t===1))throw i=gi,Vr(e,0),yr(e,s),Ot(e,ut()),i;switch(e.finishedWork=c,e.finishedLanes=s,t){case 0:case 1:throw Error(r(345));case 2:Kr(e,Lt,Fn);break;case 3:if(yr(e,s),(s&130023424)===s&&(t=Ls+500-ut(),10<t)){if(Hi(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){Pt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Qa(Kr.bind(null,e,Lt,Fn),t);break}Kr(e,Lt,Fn);break;case 4:if(yr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,c=-1;0<s;){var y=31-dn(s);m=1<<y,y=t[y],y>c&&(c=y),s&=~m}if(s=c,s=ut()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*fm(s/1960))-s,10<s){e.timeoutHandle=Qa(Kr.bind(null,e,Lt,Fn),s);break}Kr(e,Lt,Fn);break;case 5:Kr(e,Lt,Fn);break;default:throw Error(r(329))}}}return Ot(e,ut()),e.callbackNode===i?g1.bind(null,e):null}function Gs(e,t){var i=yi;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=Lt,Lt=i,t!==null&&Ws(t)),e}function Ws(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function mm(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var c=i[s],m=c.getSnapshot;c=c.value;try{if(!fn(m(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yr(e,t){for(t&=~Fs,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-dn(t),s=1<<i;e[i]=-1,t&=~s}}function y1(e){if((Fe&6)!==0)throw Error(r(327));S0();var t=Hi(e,0);if((t&1)===0)return Ot(e,ut()),null;var i=Ro(e,t);if(e.tag!==0&&i===2){var s=_a(e);s!==0&&(t=s,i=Gs(e,s))}if(i===1)throw i=gi,Vr(e,0),yr(e,t),Ot(e,ut()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,Lt,Fn),Ot(e,ut()),null}function Us(e,t){var i=Fe;Fe|=1;try{return e(t)}finally{Fe=i,Fe===0&&(z0=ut()+500,lo&&dr())}}function Ur(e){vr!==null&&vr.tag===0&&(Fe&6)===0&&S0();var t=Fe;Fe|=1;var i=an.transition,s=Ke;try{if(an.transition=null,Ke=1,e)return e()}finally{Ke=s,an.transition=i,Fe=t,(Fe&6)===0&&dr()}}function Vs(){Yt=k0.current,et(k0)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,H4(i)),mt!==null)for(i=mt.return;i!==null;){var s=i;switch(ns(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ao();break;case 3:b0(),et(Bt),et(St),ps();break;case 5:ms(s);break;case 4:b0();break;case 13:et(rt);break;case 19:et(rt);break;case 10:ls(s.type._context);break;case 22:case 23:Vs()}i=i.return}if(wt=e,mt=e=xr(e.current,null),_t=Yt=t,gt=0,gi=null,Fs=Mo=Wr=0,Lt=yi=null,Or!==null){for(t=0;t<Or.length;t++)if(i=Or[t],s=i.interleaved,s!==null){i.interleaved=null;var c=s.next,m=i.pending;if(m!==null){var y=m.next;m.next=c,s.next=y}i.pending=s}Or=null}return e}function x1(e,t){do{var i=mt;try{if(ss(),xo.current=_o,wo){for(var s=it.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}wo=!1}if(Gr=0,xt=vt=it=null,di=!1,fi=0,Is.current=null,i===null||i.return===null){gt=1,gi=t,mt=null;break}e:{var m=e,y=i.return,z=i,q=t;if(t=_t,z.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var F=q,Q=z,ee=Q.tag;if((Q.mode&1)===0&&(ee===0||ee===11||ee===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var de=Gc(y);if(de!==null){de.flags&=-257,Wc(de,y,z,m,t),de.mode&1&&Hc(m,F,t),t=de,q=F;var pe=t.updateQueue;if(pe===null){var ve=new Set;ve.add(q),t.updateQueue=ve}else pe.add(q);break e}else{if((t&1)===0){Hc(m,F,t),Ks();break e}q=Error(r(426))}}else if(tt&&z.mode&1){var ct=Gc(y);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Wc(ct,y,z,m,t),os($0(q,z));break e}}m=q=$0(q,z),gt!==4&&(gt=2),yi===null?yi=[m]:yi.push(m),m=y;do{switch(m.tag){case 3:m.flags|=65536,t&=-t,m.lanes|=t;var R=Lc(m,q,t);hc(m,R);break e;case 1:z=q;var C=m.type,I=m.stateNode;if((m.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(pr===null||!pr.has(I)))){m.flags|=65536,t&=-t,m.lanes|=t;var ie=Oc(m,z,t);hc(m,ie);break e}}m=m.return}while(m!==null)}$1(i)}catch(ye){t=ye,mt===i&&i!==null&&(mt=i=i.return);continue}break}while(!0)}function w1(){var e=qo.current;return qo.current=_o,e===null?_o:e}function Ks(){(gt===0||gt===3||gt===2)&&(gt=4),wt===null||(Wr&268435455)===0&&(Mo&268435455)===0||yr(wt,_t)}function Ro(e,t){var i=Fe;Fe|=2;var s=w1();(wt!==e||_t!==t)&&(Fn=null,Vr(e,t));do try{hm();break}catch(c){x1(e,c)}while(!0);if(ss(),Fe=i,qo.current=s,mt!==null)throw Error(r(261));return wt=null,_t=0,gt}function hm(){for(;mt!==null;)b1(mt)}function pm(){for(;mt!==null&&!Ff();)b1(mt)}function b1(e){var t=z1(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?$1(e):mt=t,Is.current=null}function $1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=sm(i,t,Yt),i!==null){mt=i;return}}else{if(i=lm(i,t),i!==null){i.flags&=32767,mt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gt=6,mt=null;return}}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);gt===0&&(gt=5)}function Kr(e,t,i){var s=Ke,c=an.transition;try{an.transition=null,Ke=1,vm(e,t,i,s)}finally{an.transition=c,Ke=s}return null}function vm(e,t,i,s){do S0();while(vr!==null);if((Fe&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var m=i.lanes|i.childLanes;if(Qf(e,m),e===wt&&(mt=wt=null,_t=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Co||(Co=!0,S1(Ii,function(){return S0(),null})),m=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||m){m=an.transition,an.transition=null;var y=Ke;Ke=1;var z=Fe;Fe|=4,Is.current=null,cm(e,i),f1(i,e),R4(Ka),Ui=!!Va,Ka=Va=null,e.current=i,dm(i),Lf(),Fe=z,Ke=y,an.transition=m}else e.current=i;if(Co&&(Co=!1,vr=e,Po=c),m=e.pendingLanes,m===0&&(pr=null),Gf(i.stateNode),Ot(e,ut()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],s(c.value,{componentStack:c.stack,digest:c.digest});if(Ao)throw Ao=!1,e=Os,Os=null,e;return(Po&1)!==0&&e.tag!==0&&S0(),m=e.pendingLanes,(m&1)!==0?e===Hs?xi++:(xi=0,Hs=e):xi=0,dr(),null}function S0(){if(vr!==null){var e=cu(Po),t=an.transition,i=Ke;try{if(an.transition=null,Ke=16>e?16:e,vr===null)var s=!1;else{if(e=vr,vr=null,Po=0,(Fe&6)!==0)throw Error(r(331));var c=Fe;for(Fe|=4,he=e.current;he!==null;){var m=he,y=m.child;if((he.flags&16)!==0){var z=m.deletions;if(z!==null){for(var q=0;q<z.length;q++){var F=z[q];for(he=F;he!==null;){var Q=he;switch(Q.tag){case 0:case 11:case 15:vi(8,Q,m)}var ee=Q.child;if(ee!==null)ee.return=Q,he=ee;else for(;he!==null;){Q=he;var K=Q.sibling,de=Q.return;if(s1(Q),Q===F){he=null;break}if(K!==null){K.return=de,he=K;break}he=de}}}var pe=m.alternate;if(pe!==null){var ve=pe.child;if(ve!==null){pe.child=null;do{var ct=ve.sibling;ve.sibling=null,ve=ct}while(ve!==null)}}he=m}}if((m.subtreeFlags&2064)!==0&&y!==null)y.return=m,he=y;else e:for(;he!==null;){if(m=he,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:vi(9,m,m.return)}var R=m.sibling;if(R!==null){R.return=m.return,he=R;break e}he=m.return}}var C=e.current;for(he=C;he!==null;){y=he;var I=y.child;if((y.subtreeFlags&2064)!==0&&I!==null)I.return=y,he=I;else e:for(y=C;he!==null;){if(z=he,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:jo(9,z)}}catch(ye){st(z,z.return,ye)}if(z===y){he=null;break e}var ie=z.sibling;if(ie!==null){ie.return=z.return,he=ie;break e}he=z.return}}if(Fe=c,dr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Fi,e)}catch{}s=!0}return s}finally{Ke=i,an.transition=t}}return!1}function _1(e,t,i){t=$0(i,t),t=Lc(e,t,1),e=mr(e,t,1),t=Pt(),e!==null&&(H0(e,1,t),Ot(e,t))}function st(e,t,i){if(e.tag===3)_1(e,e,i);else for(;t!==null;){if(t.tag===3){_1(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(pr===null||!pr.has(s))){e=$0(i,e),e=Oc(t,e,1),t=mr(t,e,1),e=Pt(),t!==null&&(H0(t,1,e),Ot(t,e));break}}t=t.return}}function gm(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=Pt(),e.pingedLanes|=e.suspendedLanes&i,wt===e&&(_t&i)===i&&(gt===4||gt===3&&(_t&130023424)===_t&&500>ut()-Ls?Vr(e,0):Fs|=i),Ot(e,t)}function k1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Oi,Oi<<=1,(Oi&130023424)===0&&(Oi=4194304)));var i=Pt();e=Nn(e,t),e!==null&&(H0(e,t,i),Ot(e,i))}function ym(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),k1(e,i)}function xm(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(r(314))}s!==null&&s.delete(t),k1(e,i)}var z1;z1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Bt.current)Ft=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Ft=!1,am(e,t,i);Ft=(e.flags&131072)!==0}else Ft=!1,tt&&(t.flags&1048576)!==0&&ic(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;So(e,t),e=t.pendingProps;var c=h0(t,St.current);w0(t,i),c=ys(null,t,s,e,c,i);var m=xs();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,It(s)?(m=!0,so(t)):m=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ds(t),c.updater=ko,t.stateNode=c,c._reactInternals=t,zs(t,s,e,i),t=qs(null,t,s,!0,m,i)):(t.tag=0,tt&&m&&ts(t),Ct(null,t,c,i),t=t.child),t;case 16:s=t.elementType;e:{switch(So(e,t),e=t.pendingProps,c=s._init,s=c(s._payload),t.type=s,c=t.tag=bm(s),e=hn(s,e),c){case 0:t=js(null,t,s,e,i);break e;case 1:t=Xc(null,t,s,e,i);break e;case 11:t=Uc(null,t,s,e,i);break e;case 14:t=Vc(null,t,s,hn(s.type,e),i);break e}throw Error(r(306,s,""))}return t;case 0:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:hn(s,c),js(e,t,s,c,i);case 1:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:hn(s,c),Xc(e,t,s,c,i);case 3:e:{if(Zc(t),e===null)throw Error(r(387));s=t.pendingProps,m=t.memoizedState,c=m.element,mc(e,t),go(t,s,null,i);var y=t.memoizedState;if(s=y.element,m.isDehydrated)if(m={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=m,t.memoizedState=m,t.flags&256){c=$0(Error(r(423)),t),t=Jc(e,t,s,i,c);break e}else if(s!==c){c=$0(Error(r(424)),t),t=Jc(e,t,s,i,c);break e}else for(Kt=lr(t.stateNode.containerInfo.firstChild),Vt=t,tt=!0,mn=null,i=dc(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(g0(),s===c){t=In(e,t,i);break e}Ct(e,t,s,i)}t=t.child}return t;case 5:return vc(t),e===null&&is(t),s=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,y=c.children,Ya(s,c)?y=null:m!==null&&Ya(s,m)&&(t.flags|=32),Qc(e,t),Ct(e,t,y,i),t.child;case 6:return e===null&&is(t),null;case 13:return e1(e,t,i);case 4:return fs(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=y0(t,null,s,i):Ct(e,t,s,i),t.child;case 11:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:hn(s,c),Uc(e,t,s,c,i);case 7:return Ct(e,t,t.pendingProps,i),t.child;case 8:return Ct(e,t,t.pendingProps.children,i),t.child;case 12:return Ct(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,c=t.pendingProps,m=t.memoizedProps,y=c.value,Xe(ho,s._currentValue),s._currentValue=y,m!==null)if(fn(m.value,y)){if(m.children===c.children&&!Bt.current){t=In(e,t,i);break e}}else for(m=t.child,m!==null&&(m.return=t);m!==null;){var z=m.dependencies;if(z!==null){y=m.child;for(var q=z.firstContext;q!==null;){if(q.context===s){if(m.tag===1){q=Bn(-1,i&-i),q.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?q.next=q:(q.next=Q.next,Q.next=q),F.pending=q}}m.lanes|=i,q=m.alternate,q!==null&&(q.lanes|=i),us(m.return,i,t),z.lanes|=i;break}q=q.next}}else if(m.tag===10)y=m.type===t.type?null:m.child;else if(m.tag===18){if(y=m.return,y===null)throw Error(r(341));y.lanes|=i,z=y.alternate,z!==null&&(z.lanes|=i),us(y,i,t),y=m.sibling}else y=m.child;if(y!==null)y.return=m;else for(y=m;y!==null;){if(y===t){y=null;break}if(m=y.sibling,m!==null){m.return=y.return,y=m;break}y=y.return}m=y}Ct(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,s=t.pendingProps.children,w0(t,i),c=rn(c),s=s(c),t.flags|=1,Ct(e,t,s,i),t.child;case 14:return s=t.type,c=hn(s,t.pendingProps),c=hn(s.type,c),Vc(e,t,s,c,i);case 15:return Kc(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,c=t.pendingProps,c=t.elementType===s?c:hn(s,c),So(e,t),t.tag=1,It(s)?(e=!0,so(t)):e=!1,w0(t,i),Ic(t,s,c),zs(t,s,c,i),qs(null,t,s,!0,e,i);case 19:return n1(e,t,i);case 22:return Yc(e,t,i)}throw Error(r(156,t.tag))};function S1(e,t){return ou(e,t)}function wm(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,i,s){return new wm(e,t,i,s)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bm(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===We)return 14}return 2}function xr(e,t){var i=e.alternate;return i===null?(i=sn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function No(e,t,i,s,c,m){var y=2;if(s=e,typeof e=="function")Ys(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case L:return Yr(i.children,c,m,t);case V:y=8,c|=8;break;case oe:return e=sn(12,i,t,c|2),e.elementType=oe,e.lanes=m,e;case we:return e=sn(13,i,t,c),e.elementType=we,e.lanes=m,e;case je:return e=sn(19,i,t,c),e.elementType=je,e.lanes=m,e;case Ie:return Bo(i,c,m,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:y=10;break e;case Se:y=9;break e;case fe:y=11;break e;case We:y=14;break e;case Ye:y=16,s=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=sn(y,i,t,c),t.elementType=e,t.type=s,t.lanes=m,t}function Yr(e,t,i,s){return e=sn(7,e,s,t),e.lanes=i,e}function Bo(e,t,i,s){return e=sn(22,e,s,t),e.elementType=Ie,e.lanes=i,e.stateNode={isHidden:!1},e}function Qs(e,t,i){return e=sn(6,e,null,t),e.lanes=i,e}function Xs(e,t,i){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $m(e,t,i,s,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Zs(e,t,i,s,c,m,y,z,q){return e=new $m(e,t,i,z,q),t===1?(t=1,m===!0&&(t|=8)):t=0,m=sn(3,null,null,t),e.current=m,m.stateNode=e,m.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(m),e}function _m(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function T1(e){if(!e)return cr;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(It(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(It(i))return tc(e,i,t)}return t}function j1(e,t,i,s,c,m,y,z,q){return e=Zs(i,s,!0,e,c,m,y,z,q),e.context=T1(null),i=e.current,s=Pt(),c=gr(i),m=Bn(s,c),m.callback=t??null,mr(i,m,c),e.current.lanes=c,H0(e,c,s),Ot(e,s),e}function Io(e,t,i,s){var c=t.current,m=Pt(),y=gr(c);return i=T1(i),t.context===null?t.context=i:t.pendingContext=i,t=Bn(m,y),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=mr(c,t,y),e!==null&&(gn(e,c,y,m),vo(e,c,y)),y}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function q1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Js(e,t){q1(e,t),(e=e.alternate)&&q1(e,t)}function km(){return null}var M1=typeof reportError=="function"?reportError:function(e){console.error(e)};function el(e){this._internalRoot=e}Lo.prototype.render=el.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));Io(e,t,null,null)},Lo.prototype.unmount=el.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ur(function(){Io(null,e,null,null)}),t[Pn]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<or.length&&t!==0&&t<or[i].priority;i++);or.splice(i,0,e),i===0&&vu(e)}};function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function A1(){}function zm(e,t,i,s,c){if(c){if(typeof s=="function"){var m=s;s=function(){var F=Fo(y);m.call(F)}}var y=j1(t,s,e,0,null,!1,!1,"",A1);return e._reactRootContainer=y,e[Pn]=y.current,ri(e.nodeType===8?e.parentNode:e),Ur(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var z=s;s=function(){var F=Fo(q);z.call(F)}}var q=Zs(e,0,!1,null,null,!1,!1,"",A1);return e._reactRootContainer=q,e[Pn]=q.current,ri(e.nodeType===8?e.parentNode:e),Ur(function(){Io(t,q,i,s)}),q}function Ho(e,t,i,s,c){var m=i._reactRootContainer;if(m){var y=m;if(typeof c=="function"){var z=c;c=function(){var q=Fo(y);z.call(q)}}Io(t,y,e,c)}else y=zm(i,t,e,c,s);return Fo(y)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=O0(t.pendingLanes);i!==0&&(za(t,i|1),Ot(t,ut()),(Fe&6)===0&&(z0=ut()+500,dr()))}break;case 13:Ur(function(){var s=Nn(e,1);if(s!==null){var c=Pt();gn(s,e,1,c)}}),Js(e,1)}},Sa=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var i=Pt();gn(t,e,134217728,i)}Js(e,134217728)}},fu=function(e){if(e.tag===13){var t=gr(e),i=Nn(e,t);if(i!==null){var s=Pt();gn(i,e,t,s)}Js(e,t)}},mu=function(){return Ke},hu=function(e,t){var i=Ke;try{return Ke=e,t()}finally{Ke=i}},Pr=function(e,t,i){switch(t){case"input":if(Cn(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var c=oo(s);if(!c)throw Error(r(90));Jr(s),Cn(s,c)}}}break;case"textarea":Qn(e,i);break;case"select":t=i.value,t!=null&&Ve(e,!!i.multiple,t,!1)}},Ni=Us,Jn=Ur;var Sm={usingClientEntryPoint:!1,Events:[ai,f0,oo,Dr,t0,Us]},wi={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tm={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=i0(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Fi=Go.inject(Tm),yn=Go}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm,Ht.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tl(t))throw Error(r(200));return _m(e,t,null,i)},Ht.createRoot=function(e,t){if(!tl(e))throw Error(r(299));var i=!1,s="",c=M1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Zs(e,1,!1,null,null,i,!1,s,c),e[Pn]=t.current,ri(e.nodeType===8?e.parentNode:e),new el(t)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=i0(t),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return Ur(e)},Ht.hydrate=function(e,t,i){if(!Oo(t))throw Error(r(200));return Ho(null,e,t,!0,i)},Ht.hydrateRoot=function(e,t,i){if(!tl(e))throw Error(r(405));var s=i!=null&&i.hydratedSources||null,c=!1,m="",y=M1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(m=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=j1(t,null,e,1,i??null,c,!1,m,y),e[Pn]=t.current,ri(e),s)for(e=0;e<s.length;e++)i=s[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new Lo(t)},Ht.render=function(e,t,i){if(!Oo(t))throw Error(r(200));return Ho(null,e,t,!1,i)},Ht.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(r(40));return e._reactRootContainer?(Ur(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},Ht.unstable_batchedUpdates=Us,Ht.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!Oo(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ho(e,t,i,!1,s)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var I1;function Dm(){if(I1)return il.exports;I1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),il.exports=Em(),il.exports}var F1;function Rm(){if(F1)return Wo;F1=1;var o=Dm();return Wo.createRoot=o.createRoot,Wo.hydrateRoot=o.hydrateRoot,Wo}var Nm=Rm();const Bm=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Im=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Fm=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Lm=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,Om=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Hm=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Gm=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Wm=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Um=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Vm=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
---
`,Km=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Ym=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,Qm=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,Xm=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,Zm=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
---
`,Jm=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,eh=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,th=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,nh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,rh=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,ih=`---
label: "Linear Function"
labelPl: "Funkcja liniowa"
scope: funkcje
section: SP8
level: 2
x: 260
y: 540
---
`,oh=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,ah=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,sh=`---
label: "Quadratic Function"
labelPl: "Funkcja kwadratowa"
scope: funkcje
section: LP
level: 2
x: 390
y: 700
---
`,lh=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,uh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,ch=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,dh=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,fh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,mh=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
---
`,hh=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
---
`,ph=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,vh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,gh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,yh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,xh=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,wh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
`,bh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,$h=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,_h=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,kh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,zh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,Sh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,Th=`---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
---
`,jh=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,qh=`---
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
`,Ah=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
`,Ch=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Ph=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Eh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Dh=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
---
`,Rh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Nh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Bh=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
`,Ih=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,Fh=`---
label: "Trygonometria - podstawy"
labelPl: "Trygonometria - podstawy"
scope: trygonometria
section: LP
level: 1
x: 830
y: 200
---
`,Lh=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,Oh=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,Hh=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,Gh=`---
label: "Vectors"
labelPl: "Wektory"
scope: geometria_analityczna
section: LR
level: 3
x: 660
y: 870
---
`,Wh=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
`,Uh=`---
options:
  - "(−∞, −2] ∪ [4, +∞)"
  - "[−2, 4]"
  - "(−∞, −2)"
  - "(4, +∞)"
correct: 0
hint: "Nierówność |x−1| ≥ 3 daje x−1 ≥ 3 lub x−1 ≤ −3."
---

Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:
`,Vh=`---
options:
  - "$|x| = -x$ dla $x < 0$"
  - "$|x| = x$ dla każdego $x$"
  - "$|x| = -x$ dla $x > 0$"
  - "$|x|$ może być ujemna"
correct: 0
hint: "Wartość bezwzględna to odległość od zera — zawsze nieujemna. Dla $x < 0$: $|x| = -x > 0$."
---

Które zdanie o wartości bezwzględnej jest prawdziwe?
`,Kh=`---
options:
  - "$x \\in (-3, 3)$"
  - "$x \\in [-3, 3]$"
  - "$x \\in (-\\infty, -3) \\cup (3, +\\infty)$"
  - "$x \\in \\{-3, 3\\}$"
correct: 0
hint: "$|x| < 3$ oznacza $-3 < x < 3$. To przedział otwarty."
---

Zbiór rozwiązań nierówności $|x| < 3$ to:
`,Yh=`---
options:
  - "2"
  - "4"
  - "1/2"
  - "3"
correct: 0
hint: "a = (6−2)/(3−1) = 4/2 = 2."
---

Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:
`,Qh=`---
options:
  - "$\\sqrt{13}$"
  - "$\\sqrt{7}$"
  - "$5$"
  - "$13$"
correct: 0
hint: "$d = \\sqrt{(3-1)^2 + (5-2)^2} = \\sqrt{4+9} = \\sqrt{13}$."
---

Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:
`,Xh=`---
options:
  - "$(2, 3{,}5)$"
  - "$(4, 7)$"
  - "$(1, 3)$"
  - "$(3, 2{,}5)$"
correct: 0
hint: "Środek odcinka $AB$: $S = \\left(\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2}\\right) = \\left(\\frac{0+4}{2}, \\frac{2+5}{2}\\right) = (2, 3{,}5)$."
---

Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:
`,Zh=`---
options:
  - "$24$"
  - "$48$"
  - "$14$"
  - "$12$"
correct: 0
hint: "$P = \\frac{d_1 \\cdot d_2}{2} = \\frac{8 \\cdot 6}{2} = \\frac{48}{2} = 24$."
---

Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:
`,Jh=`---
options:
  - "$24\\ \\text{cm}^2$"
  - "$20\\ \\text{cm}^2$"
  - "$12\\ \\text{cm}^2$"
  - "$48\\ \\text{cm}^2$"
correct: 0
hint: "Pole prostokąta = $a \\cdot b = 6 \\cdot 4 = 24\\ \\text{cm}^2$."
---

Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:
`,ep=`---
options:
  - "$9\\pi\\ \\text{cm}^2$"
  - "$6\\pi\\ \\text{cm}^2$"
  - "$3\\pi\\ \\text{cm}^2$"
  - "$18\\pi\\ \\text{cm}^2$"
correct: 0
hint: "Pole koła = $\\pi r^2 = \\pi \\cdot 3^2 = 9\\pi\\ \\text{cm}^2$."
---

Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:
`,tp=`---
options:
  - "155"
  - "150"
  - "145"
  - "160"
correct: 0
hint: "S₁₀ = (10/2)·(2·2 + 9·3) = 5·31 = 155."
---

Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:
`,np=`---
options:
  - "$48$"
  - "$24$"
  - "$96$"
  - "$16$"
correct: 0
hint: "Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$. $a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$."
---

Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:
`,rp=`---
options:
  - "$S_{10} = 55$"
  - "$S_{10} = 50$"
  - "$S_{10} = 45$"
  - "$S_{10} = 100$"
correct: 0
hint: "Suma $n$ wyrazów ciągu arytm.: $S_n = \\frac{n(a_1 + a_n)}{2}$. $a_{10} = 10$, $S_{10} = \\frac{10 \\cdot (1+10)}{2} = 55$."
---

Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:
`,ip=`---
options:
  - "1/4"
  - "1/8"
  - "3/8"
  - "1/2"
correct: 0
hint: "C(4,3)·(1/2)³·(1/2)¹ = 4/16 = 1/4."
---

Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:
`,op=`---
options:
  - "$\\binom{n}{k} p^k (1-p)^{n-k}$"
  - "$p^k (1-p)^{n-k}$"
  - "$\\binom{n}{k} p^{n-k} (1-p)^k$"
  - "$n \\cdot p^k$"
correct: 0
hint: "Wzór Bernoulliego: $P(X=k) = \\binom{n}{k} p^k q^{n-k}$, gdzie $q = 1-p$."
---

W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:
`,ap=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{1}{8}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "$P(X=2) = \\binom{3}{2} \\cdot (\\frac{1}{2})^2 \\cdot \\frac{1}{2} = 3 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:
`,sp=`---
options:
  - "10"
  - "5"
  - "20"
  - "15"
correct: 0
hint: "C(5,2) = 5!/(2!·3!) = 10."
---

Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:
`,lp=`---
options:
  - "$a^3 + 3a^2b + 3ab^2 + b^3$"
  - "$a^3 + b^3$"
  - "$a^3 - 3a^2b + 3ab^2 - b^3$"
  - "$3a^2b + 3ab^2$"
correct: 0
hint: "Wzór dwumianowy dla $n=3$: $(a+b)^3 = \\binom{3}{0}a^3 + \\binom{3}{1}a^2b + \\binom{3}{2}ab^2 + \\binom{3}{3}b^3$."
---

Rozwiń $(a + b)^3$:
`,up=`---
options:
  - "$\\binom{n}{k} a^{n-k} b^k$"
  - "$\\binom{n}{k} a^k b^{n-k}$"
  - "$n! \\cdot a^{n-k} b^k$"
  - "$\\binom{k}{n} a^{n-k} b^k$"
correct: 0
hint: "$(k+1)$-ty wyraz (od $k=0$) rozwinięcia $(a+b)^n$: $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$."
---

Wyraz ogólny rozwinięcia $(a+b)^n$ to:
`,cp=`---
options:
  - "(x−2)²+(y+1)²=9"
  - "(x+2)²+(y−1)²=9"
  - "(x−2)²+(y−1)²=9"
  - "(x+2)²+(y+1)²=3"
correct: 0
hint: "Wzór: (x−a)²+(y−b)²=r². Tu a=2, b=−1, r=3."
---

Okrąg o środku (2,−1) i promieniu 3 ma równanie:
`,dp=`---
options:
  - "$(x-2)^2 + (y+1)^2 = 9$"
  - "$(x+2)^2 + (y-1)^2 = 9$"
  - "$(x-2)^2 + (y+1)^2 = 3$"
  - "$(x+2)^2 + (y-1)^2 = 3$"
correct: 0
hint: "Równanie okręgu o środku $(a, b)$ i promieniu $r$: $(x-a)^2 + (y-b)^2 = r^2$. Tu: $(x-2)^2+(y+1)^2=9$."
---

Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:
`,fp=`---
options:
  - "Środek $(1, -2)$, promień $3$"
  - "Środek $(-1, 2)$, promień $3$"
  - "Środek $(1, -2)$, promień $9$"
  - "Środek $(-1, 2)$, promień $9$"
correct: 0
hint: "$(x-1)^2 + (y+2)^2 = 9$: środek $(1, -2)$, promień $\\sqrt{9} = 3$."
---

Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:
`,mp=`---
options:
  - "10"
  - "15"
  - "20"
  - "60"
correct: 0
hint: "C(5,3) = 5!/(3!·2!) = 10."
---

Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?
`,hp=`---
options:
  - "$10$"
  - "$20$"
  - "$60$"
  - "$5$"
correct: 0
hint: "$\\binom{5}{2} = \\frac{5!}{2!\\cdot 3!} = \\frac{20}{2} = 10$."
---

Ile jest sposobów wybrania 2 osób z 5?
`,pp=`---
options:
  - "$\\binom{n}{k} = \\binom{n}{n-k}$"
  - "$\\binom{n}{k} = \\binom{n+1}{k}$"
  - "$\\binom{n}{k} = k \\cdot \\binom{n}{k-1}$"
  - "$\\binom{n}{k} = n \\cdot \\binom{n-1}{k}$"
correct: 0
hint: "Symetria kombinacji: wybór $k$ elementów jest równoznaczny z pominięciem $n-k$. Więc $\\binom{n}{k} = \\binom{n}{n-k}$."
---

Który wzór jest prawdziwą własnością symbolu Newtona?
`,vp=`---
options:
  - "5"
  - "7"
  - "1"
  - "√5"
correct: 0
hint: "|z| = √(3²+4²) = √25 = 5."
---

Moduł liczby zespolonej z = 3 + 4i wynosi:
`,gp=`---
options:
  - "$2 + 3i$"
  - "$2 - 3i$"
  - "$-2 + 3i$"
  - "$-2 - 3i$"
correct: 0
hint: "$(1+2i) + (1+i) = (1+1) + (2+1)i = 2 + 3i$."
---

Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$
`,yp=`---
options:
  - "$\\sqrt{5}$"
  - "$5$"
  - "$3$"
  - "$\\sqrt{3}$"
correct: 0
hint: "$|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$."
---

Moduł liczby zespolonej $z = 1 + 2i$ wynosi:
`,xp=`---
options:
  - "0.2"
  - "0.9"
  - "0.5"
  - "0.1"
correct: 0
hint: "P(A∩B) = P(A)·P(B|A) = 0.4·0.5 = 0.2."
---

P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =
`,wp=`---
options:
  - "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$"
  - "$P(A|B) = P(A) \\cdot P(B)$"
  - "$P(A|B) = P(A) + P(B)$"
  - "$P(A|B) = \\frac{P(A)}{P(B)}$"
correct: 0
hint: "Definicja prawdopodobieństwa warunkowego: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (dla $P(B) > 0$)."
---

Wzór na prawdopodobieństwo warunkowe $P(A|B)$:
`,bp=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{5}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Karty $\\leq 4$: {1,2,3,4}. Parzyste wśród nich: {2,4}. $P = \\frac{2}{4} = \\frac{1}{2}$."
---

Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:
`,$p=`---
options:
  - "a=3, b=2"
  - "a=9, b=4"
  - "a=2, b=3"
  - "a=√3, b=√2"
correct: 0
hint: "Standardowa postać: x²/a² + y²/b² = 1."
---

Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:
`,_p=`---
options:
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
  - "$y = ax^2$"
  - "$(x-h)^2 + (y-k)^2 = r^2$"
correct: 0
hint: "Równanie elipsy o półosiach $a$ (pozioma) i $b$ (pionowa): $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
---

Równanie elipsy o środku w początku układu współrzędnych to:
`,kp=`---
options:
  - "$y = \\frac{1}{4p}x^2$"
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$x^2 + y^2 = r^2$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
correct: 0
hint: "Parabola z ogniskiem w $(0,p)$: $y = \\frac{x^2}{4p}$. Jest to krzywa stożkowa będąca przekrojem stożka płaszczyzną równoległą do tworzącej."
---

Które równanie opisuje parabolę jako krzywą stożkową?
`,zp=`---
options:
  - "6"
  - "3"
  - "9"
  - "27"
correct: 0
hint: "3! = 6 permutacji."
---

Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?
`,Sp=`---
options:
  - "$8$"
  - "$6$"
  - "$3$"
  - "$12$"
correct: 0
hint: "Zasada mnożenia: $2 \\times 4 = 8$ możliwości (każda koszulka z każdą spodnicą)."
---

Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?
`,Tp=`---
options:
  - "$12$"
  - "$6$"
  - "$3$"
  - "$24$"
correct: 0
hint: "Zasada mnożenia: $3 \\times 4 = 12$ tras (3 drogi z A do B, 4 z B do C)."
---

Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?
`,jp=`---
options:
  - "5"
  - "3"
  - "7"
  - "25/5"
correct: 0
hint: "Sortujesz: 1,3,5,7,9. Środkowy element to 5."
---

Mediana zbioru {3, 7, 1, 9, 5} wynosi:
`,qp=`---
options:
  - "$7$"
  - "$6$"
  - "$8$"
  - "$7{,}5$"
correct: 0
hint: "Mediana to środkowa wartość po posortowaniu. Posortowane: 3, 5, 7, 9, 11. Środkowa to 7."
---

Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:
`,Mp=`---
options:
  - "$6$"
  - "$5$"
  - "$7$"
  - "$8$"
correct: 0
hint: "Średnia arytmetyczna: suma wszystkich / liczba elementów. $(4+6+8+6)/4 = 24/4 = 6$."
---

Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:
`,Ap=`---
options:
  - "(−∞,−1) ∪ (1,+∞)"
  - "(−1, 1)"
  - "(0, +∞)"
  - "(−∞, 0)"
correct: 0
hint: "f'(x) = 3x²−3 = 3(x−1)(x+1). f'>0 gdy |x|>1."
---

Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:
`,Cp=`---
options:
  - "Funkcja rośnie"
  - "Funkcja maleje"
  - "Funkcja jest stała"
  - "Funkcja ma minimum"
correct: 0
hint: "Gdy $f'(x) > 0$ na przedziale, funkcja jest rosnąca na tym przedziale."
---

Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:
`,Pp=`---
options:
  - "$x = 1$ (minimum)"
  - "$x = 1$ (maksimum)"
  - "$x = -1$ (minimum)"
  - "$x = 0$ (minimum)"
correct: 0
hint: "$f'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f''(x) = 2 > 0$, więc to minimum."
---

Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:
`,Ep=`---
options:
  - "$3x^2 - 4$"
  - "$3x^2 + 4$"
  - "$x^2 - 4$"
  - "$3x^2$"
correct: 0
hint: "Reguła potęgi: $(x^n)' = n \\cdot x^{n-1}$. Ponadto $(x^3)' = 3x^2$ i $(-4x)' = -4$."
---

Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:
`,Dp=`---
options:
  - "$\\cos x$"
  - "$-\\cos x$"
  - "$-\\sin x$"
  - "$\\sin x$"
correct: 0
hint: "Podstawowa reguła: $(\\sin x)' = \\cos x$."
---

Pochodna funkcji $f(x) = \\sin x$ wynosi:
`,Rp=`---
options:
  - "$6x^2 - 2$"
  - "$6x^2 + 2$"
  - "$2x^3 - 2x$"
  - "$6x - 2$"
correct: 0
hint: "$(2x^3)' = 6x^2$, $(-2x)' = -2$. Łącznie: $6x^2 - 2$."
---

Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:
`,Np=`---
options:
  - "5"
  - "10"
  - "2.5"
  - "0.5"
correct: 0
hint: "E(X) = n·p = 10·0.5 = 5."
---

W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:
`,Bp=`---
options:
  - "$np$"
  - "$np(1-p)$"
  - "$\\sqrt{np(1-p)}$"
  - "$\\frac{1}{np}$"
correct: 0
hint: "Wartość oczekiwana rozkładu dwumianowego $B(n,p)$: $E(X) = np$."
---

Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:
`,Ip=`---
options:
  - "Symetryczny dzwon wokół średniej"
  - "Wykładniczy wzrost"
  - "Jednostajny prostokąt"
  - "Asymetryczny skok w górę"
correct: 0
hint: "Rozkład normalny (Gaussa) ma charakterystyczny kształt dzwonu, symetryczny względem średniej $\\mu$."
---

Wykres rozkładu normalnego ma kształt:
`,Fp=`---
options:
  - "(x−2)(x−3)"
  - "(x+2)(x+3)"
  - "(x−1)(x−6)"
  - "(x−2)(x+3)"
correct: 0
hint: "Szukasz dwóch liczb, których suma = −5 i iloczyn = 6."
---

Rozkład na czynniki: x² − 5x + 6 =
`,Lp=`---
options:
  - "$(x-4)(x+2)$"
  - "$(x+4)(x-2)$"
  - "$(x-4)(x-2)$"
  - "$(x+4)(x+2)$"
correct: 0
hint: "Szukasz dwóch liczb o sumie $-2$ i iloczynie $-8$: to $-4$ i $2$."
---

Rozłóż na czynniki: $x^2 - 2x - 8 =$
`,Op=`---
options:
  - "$2x(x - 3)$"
  - "$2(x^2 - 3)$"
  - "$x(2x - 3)$"
  - "$2x^2 - 6x$"
correct: 0
hint: "Wyłącz wspólny czynnik $2x$: $2x^2 - 6x = 2x(x - 3)$."
---

Rozłóż na czynniki: $2x^2 - 6x =$
`,Hp=`---
options:
  - "2x+2"
  - "2x+1"
  - "2x²+2"
  - "x+2"
correct: 0
hint: "f(g(x)) = f(x+1) = 2(x+1) = 2x+2."
---

Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =
`,Gp=`---
options:
  - "$4x^2 - 1$"
  - "$2x^2 - 1$"
  - "$4x - 1$"
  - "$2x - 1$"
correct: 0
hint: "$(f \\circ g)(x) = f(g(x)) = f(2x) = (2x)^2 - 1 = 4x^2 - 1$."
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:
`,Wp=`---
options:
  - "$2x^2 - 2$"
  - "$4x^2 - 1$"
  - "$2x - 1$"
  - "$x^2 - 2$"
correct: 0
hint: "$(g \\circ f)(x) = g(f(x)) = g(x^2 - 1) = 2(x^2-1) = 2x^2 - 2$. Złożenia nie są przemienne!"
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:
`,Up=`---
options:
  - "{(1,2),(1,3),(2,4)}"
  - "{(1,2),(2,3),(3,4)}"
  - "{(1,1),(2,2),(3,3)}"
  - "{(1,2),(2,1)}"
correct: 0
hint: "Funkcja przypisuje każdemu argumentowi dokładnie jedną wartość. Para (1,2) i (1,3) — jeden argument, dwie wartości."
---

Która z poniższych relacji NIE jest funkcją?
`,Vp=`---
options:
  - "Każdemu argumentowi odpowiada dokładnie jedna wartość"
  - "Każdej wartości odpowiada dokładnie jeden argument"
  - "Funkcja musi być rosnąca"
  - "Dziedzina musi być zbiorem liczb rzeczywistych"
correct: 0
hint: "Funkcja to przyporządkowanie: każdemu $x$ z dziedziny odpowiada dokładnie jedno $f(x)$."
---

Funkcja to takie przyporządkowanie, że:
`,Kp=`---
options:
  - "$10$"
  - "$-10$"
  - "$7$"
  - "$5$"
correct: 0
hint: "Podstawiamy $x=3$: $f(3) = 2 \\cdot 3 + 4 = 6 + 4 = 10$."
---

Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:
`,Yp=`---
options:
  - "rosnąca na całej dziedzinie"
  - "malejąca na całej dziedzinie"
  - "stała"
  - "rosnąca tylko dla x > 0"
correct: 0
hint: "Podstawa 2 > 1, więc funkcja wykładnicza jest rosnąca."
---

Funkcja f(x) = 2ˣ jest:
`,Qp=`---
options:
  - "Rosnąca dla $a > 1$, malejąca dla $0 < a < 1$"
  - "Zawsze rosnąca"
  - "Zawsze malejąca"
  - "Rosnąca dla $a < 0$"
correct: 0
hint: "$f(x) = a^x$: jeśli $a > 1$, funkcja rośnie; jeśli $0 < a < 1$, maleje."
---

Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:
`,Xp=`---
options:
  - "$(0, 1)$"
  - "$(1, 0)$"
  - "$(0, 0)$"
  - "$(1, a)$"
correct: 0
hint: "Dla każdego $a \\neq 0$: $a^0 = 1$, więc wykres przecina oś $Oy$ w punkcie $(0, 1)$."
---

Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:
`,Zp=`---
options:
  - "$k > \\frac{3}{2}$"
  - "$k < \\frac{3}{2}$"
  - "$k > 1$"
  - "$k < 0$"
correct: 0
hint: "Funkcja liniowa jest malejąca gdy współczynnik kierunkowy $a < 0$, czyli $-2k + 3 < 0$."
---

Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:
`,Jp=`---
options:
  - "Rosnąca"
  - "Malejąca"
  - "Stała"
  - "Parzysta"
correct: 0
hint: "Dla $f(x) = 2x - 1$ współczynnik kierunkowy $a = 2 > 0$, więc funkcja jest rosnąca."
---

Funkcja $f(x) = 2x - 1$ jest:
`,e2=`---
options:
  - "$(0, -3)$ i $(3/2, 0)$"
  - "$(0, 3)$ i $(3/2, 0)$"
  - "$(0, -3)$ i $(-3/2, 0)$"
  - "$(3, 0)$ i $(0, 3/2)$"
correct: 0
hint: "Przecięcie z $Oy$: $x=0 \\Rightarrow f(0) = -3$. Z $Ox$: $2x-3=0 \\Rightarrow x = 3/2$."
---

Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:
`,t2=`---
options:
  - "(2, +∞)"
  - "[2, +∞)"
  - "(−∞, 2)"
  - "R"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: x − 2 > 0."
---

Dziedzina funkcji f(x) = log(x − 2) to:
`,n2=`---
options:
  - "$(1, 0)$"
  - "$(0, 1)$"
  - "$(0, 0)$"
  - "$(a, 1)$"
correct: 0
hint: "Dla każdej podstawy $a$: $\\log_a 1 = 0$, więc wykres przechodzi przez $(1, 0)$."
---

Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:
`,r2=`---
options:
  - "$(0, +\\infty)$"
  - "$(-\\infty, +\\infty)$"
  - "$(1, +\\infty)$"
  - "$[0, +\\infty)$"
correct: 0
hint: "Logarytm jest określony tylko dla argumentów dodatnich: $\\log_a x$ istnieje $\\Leftrightarrow x > 0$."
---

Dziedzina funkcji $f(x) = \\log_a x$ to:
`,i2=`---
options:
  - "3"
  - "1"
  - "2"
  - "0"
correct: 0
hint: "W(x) = x(x−1)(x+1). Trzy miejsca zerowe: 0, 1, −1."
---

Wielomian W(x) = x³ − x ma ile miejsc zerowych?
`,o2=`---
options:
  - "Parzysta"
  - "Nieparzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Rosnąca"
correct: 0
hint: "$f(-x) = (-x)^4 + 2(-x)^2 = x^4 + 2x^2 = f(x)$, więc funkcja jest parzysta."
---

Funkcja $f(x) = x^4 + 2x^2$ jest:
`,a2=`---
options:
  - "Nieparzysta"
  - "Parzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Stała"
correct: 0
hint: "$f(-x) = (-x)^3 = -x^3 = -f(x)$, więc funkcja jest nieparzysta."
---

Funkcja $f(x) = x^3$ jest:
`,s2=`---
options:
  - "(2, −1)"
  - "(−2, 1)"
  - "(2, 1)"
  - "(4, 3)"
correct: 0
hint: "p = −b/(2a) = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
---

Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:
`,l2=`---
options:
  - "$(1, -4)$"
  - "$(-1, -4)$"
  - "$(1, 4)$"
  - "$(2, 0)$"
correct: 0
hint: "Wierzchołek paraboli $f(x) = ax^2 + bx + c$: $p = -b/(2a) = 2/2 = 1$, $q = f(1) = 1 - 2 - 3 = -4$."
---

Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:
`,u2=`---
options:
  - "W górę (ramiona skierowane w górę)"
  - "W dół (ramiona skierowane w dół)"
  - "Jest pozioma"
  - "Nie jest parabolą"
correct: 0
hint: "Gdy $a > 0$, parabola ma ramiona skierowane w górę (minimum). Gdy $a < 0$ — w dół."
---

Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:
`,c2=`---
options:
  - "π"
  - "2π"
  - "π/2"
  - "4π"
correct: 0
hint: "Podstawowy okres sin to 2π. Przy sin(2x) dzielisz przez 2: T = π."
---

Okres funkcji f(x) = sin(2x) wynosi:
`,d2=`---
options:
  - "$2\\pi$"
  - "$\\pi$"
  - "$\\frac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Funkcje $\\sin$ i $\\cos$ mają okres $2\\pi$ (pełny obrót)."
---

Okres funkcji $f(x) = \\sin x$ wynosi:
`,f2=`---
options:
  - "$[-1, 1]$"
  - "$[0, 1]$"
  - "$\\mathbb{R}$"
  - "$[0, 2\\pi]$"
correct: 0
hint: "Zbiór wartości funkcji $\\sin x$ to $[-1, 1]$ — sinus jest zawsze między $-1$ a $1$."
---

Zbiór wartości funkcji $f(x) = \\sin x$ to:
`,m2=`---
options:
  - "3/4"
  - "9/12"
  - "4/5"
  - "7/9"
correct: 0
hint: "Dzielisz licznik i mianownik przez NWD(45,60) = 15."
---

Uproszczona postać ułamka 45/60 to:
`,h2=`---
options:
  - "$\\frac{7}{12}$"
  - "$\\frac{7}{6}$"
  - "$\\frac{2}{6}$"
  - "$\\frac{5}{12}$"
correct: 0
hint: "Wspólny mianownik to 12: $\\frac{1}{4} = \\frac{3}{12}$, $\\frac{1}{3} = \\frac{4}{12}$. Suma: $\\frac{7}{12}$."
---

Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$
`,p2=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{6}{8}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Mnożenie ułamków: licznik przez licznik, mianownik przez mianownik. $\\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$
`,v2=`---
options:
  - "9"
  - "6"
  - "18"
  - "3"
correct: 0
hint: "S = a₁/(1−q) = 6/(1−1/3) = 6/(2/3) = 9."
---

Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:
`,g2=`---
options:
  - "$\\frac{a_1}{1 - q}$"
  - "$\\frac{a_1}{1 + q}$"
  - "$a_1 \\cdot q$"
  - "$\\frac{a_1 q}{1-q}$"
correct: 0
hint: "Suma nieskończonego szeregu geometrycznego (dla $|q| < 1$): $S = \\frac{a_1}{1-q}$."
---

Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:
`,y2=`---
options:
  - "$2$"
  - "$1$"
  - "$4$"
  - "Szereg rozbieżny"
correct: 0
hint: "$a_1 = 1$, $q = \\frac{1}{2}$. $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$."
---

Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:
`,x2=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: 84 = 4·21, 56 = 8·7."
---

Ile wynosi NWD(84, 56)?
`,w2=`---
options:
  - "$-12$"
  - "$12$"
  - "$-4$"
  - "$4$"
correct: 0
hint: "Minus razy plus to minus. $(-3) \\cdot 4 = -12$."
---

Oblicz: $(-3) \\cdot 4 =$
`,b2=`---
options:
  - "$-5$"
  - "$5$"
  - "$-15$"
  - "$15$"
correct: 0
hint: "Odejmowanie to dodawanie liczby przeciwnej: $3 - 8 = 3 + (-8) = -5$."
---

Oblicz: $3 - 8 =$
`,$2=`---
options:
  - "$x^2 + C$"
  - "$2 + C$"
  - "$x + C$"
  - "$2x^2 + C$"
correct: 0
hint: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Dla $n = 1$: $\\int x \\, dx = \\frac{x^2}{2} + C$ — uwaga, to $\\int 2x \\, dx = x^2 + C$."
---

$\\displaystyle \\int 2x \\, dx =$
`,_2=`---
options:
  - "$\\frac{x^3}{3} + C$"
  - "$2x + C$"
  - "$x^3 + C$"
  - "$\\frac{x^2}{2} + C$"
correct: 0
hint: "$\\int x^2\\,dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$."
---

Oblicz całkę: $\\displaystyle\\int x^2\\,dx$
`,k2=`---
options:
  - "$\\frac{9}{2}$"
  - "$9$"
  - "$3$"
  - "$\\frac{3}{2}$"
correct: 0
hint: "$\\int_0^3 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{9}{2} - 0 = \\frac{9}{2}$."
---

Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$
`,z2=`---
options:
  - "$3$"
  - "$1$"
  - "$\\infty$"
  - "$0$"
correct: 0
hint: "Dzielimy licznik i mianownik przez $x^2$. Wyrazy $\\frac{1}{x^2}$ i $\\frac{5}{x^2}$ dążą do $0$."
---

Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:
`,S2=`---
options:
  - "$1$"
  - "$0$"
  - "$\\infty$"
  - "$-1$"
correct: 0
hint: "$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ — to ważna granica (granica Eulera)."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$
`,T2=`---
options:
  - "$5$"
  - "$0$"
  - "$\\infty$"
  - "$\\frac{5}{3}$"
correct: 0
hint: "Podziel przez $x^2$: $\\frac{5x^2-1}{x^2+3} = \\frac{5 - 1/x^2}{1 + 3/x^2} \\to \\frac{5}{1} = 5$."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$
`,j2=`---
options:
  - "$x = 5$"
  - "$x = 2$"
  - "$x = -2$"
  - "$x = 7$"
correct: 0
hint: "$2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."
---

Rozwiązaniem równania $2x - 3 = 7$ jest:
`,q2=`---
options:
  - "$x = 4$"
  - "$x = -4$"
  - "$x = 2$"
  - "$x = 8$"
correct: 0
hint: "$3x = 12$, więc $x = 4$."
---

Rozwiąż równanie: $3x - 2 = 10$
`,M2=`---
options:
  - "$x = -3$"
  - "$x = 3$"
  - "$x = 1$"
  - "$x = -1$"
correct: 0
hint: "$2x + 8 = 2$, więc $2x = -6$, $x = -3$."
---

Rozwiąż równanie: $2(x + 4) = 2$
`,A2=`---
options:
  - "(2/3, +∞)"
  - "(−∞, 2/3)"
  - "(−2/3, +∞)"
  - "(−∞, −2/3)"
correct: 0
hint: "Mnożysz obie strony przez 6, potem przenosisz x na lewą stronę."
---

Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:
`,C2=`---
options:
  - "$x > 3$"
  - "$x < 3$"
  - "$x > -3$"
  - "$x \\geq 3$"
correct: 0
hint: "Dodaj 1 do obu stron: $2x > 6$, dziel przez 2: $x > 3$."
---

Rozwiąż nierówność: $2x - 1 > 5$
`,P2=`---
options:
  - "$x \\geq -2$"
  - "$x \\leq -2$"
  - "$x \\geq 2$"
  - "$x \\leq 2$"
correct: 0
hint: "Przy dzieleniu przez liczbę ujemną odwracamy znak: $-3x \\leq 6 \\Rightarrow x \\geq -2$."
---

Rozwiąż nierówność: $-3x \\leq 6$
`,E2=`---
options:
  - "x=3, y=2"
  - "x=2, y=3"
  - "x=4, y=1"
  - "x=1, y=4"
correct: 0
hint: "Dodajesz równania: 2x = 6, x = 3."
---

Układ { x+y=5, x−y=1 } ma rozwiązanie:
`,D2=`---
options:
  - "$x = 1,\\ y = 2$"
  - "$x = 2,\\ y = 1$"
  - "$x = -1,\\ y = 2$"
  - "$x = 1,\\ y = -2$"
correct: 0
hint: "Z drugiego równania $y = 2x$. Podstaw do pierwszego: $x + 2x = 3$, $3x = 3$, $x = 1$, $y = 2$."
---

Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$
`,R2=`---
options:
  - "$x = 3,\\ y = -1$"
  - "$x = 1,\\ y = 3$"
  - "$x = -3,\\ y = 1$"
  - "$x = 2,\\ y = 0$"
correct: 0
hint: "Odejmij równania: $(2x + y) - (x + y) = 5 - 2$, więc $x = 3$. Potem $y = 2 - 3 = -1$."
---

Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$
`,N2=`---
options:
  - "x = 8"
  - "x = 6"
  - "x = 9"
  - "x = 4"
correct: 0
hint: "log₂(x) = 3 ⟺ x = 2³ = 8."
---

Rozwiązaniem równania log₂(x) = 3 jest:
`,B2=`---
options:
  - "$x = 9$"
  - "$x = 3$"
  - "$x = 27$"
  - "$x = 81$"
correct: 0
hint: "$\\log_3 x = 2 \\Leftrightarrow x = 3^2 = 9$."
---

Rozwiąż równanie: $\\log_3 x = 2$
`,I2=`---
options:
  - "$x = 4$"
  - "$x = 2$"
  - "$x = 8$"
  - "$x = 16$"
correct: 0
hint: "$2^x = 16 = 2^4$, więc $x = 4$."
---

Rozwiąż równanie: $2^x = 16$
`,F2=`---
options:
  - "$2$"
  - "$3$"
  - "$4$"
  - "$9$"
correct: 2
hint: "$(\\sqrt{3})^x = 9$, czyli $3^{x/2} = 3^2$, więc $\\frac{x}{2} = 2$ i $x = 4$."
---

Wartość $\\log_{\\sqrt{3}} 9$ jest równa:
`,L2=`---
options:
  - "$3$"
  - "$8$"
  - "$\\frac{1}{3}$"
  - "$27$"
correct: 0
hint: "$\\log_2 8 = x \\Leftrightarrow 2^x = 8 = 2^3$, więc $x = 3$."
---

Oblicz: $\\log_2 8 =$
`,O2=`---
options:
  - "$\\log_a x + \\log_a y$"
  - "$\\log_a x \\cdot \\log_a y$"
  - "$\\log_a (x + y)$"
  - "$\\log_a x - \\log_a y$"
correct: 0
hint: "Własność logarytmu: $\\log_a(xy) = \\log_a x + \\log_a y$."
---

Które wyrażenie jest równe $\\log_a(xy)$?
`,H2=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja ∀x: P(x) to ∃x: ¬P(x)."
---

Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:
`,G2=`---
options:
  - "Fałsz"
  - "Prawda"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Koniunkcja $p \\wedge q$ jest prawdziwa tylko gdy obie zdania są prawdziwe. Jeśli $q$ jest fałszywe, wynik to fałsz."
---

Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:
`,W2=`---
options:
  - "Prawda"
  - "Fałsz"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Alternatywa $p \\vee q$ jest fałszywa tylko gdy oba zdania są fałszywe. Jeśli $p$ jest prawdziwe, wynik to prawda."
---

Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:
`,U2=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "x + y = 10. Pole P = x·y maksymalne dla x=y=5 (wierzchołek paraboli)."
---

Prostokąt o obwodzie 20 ma największe pole gdy:
`,V2=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 0$"
  - "$x = 6$"
correct: 0
hint: "Minimum paraboli $f(x) = (x-3)^2 + 2$ jest w wierzchołku $x = 3$."
---

Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:
`,K2=`---
options:
  - "$25$"
  - "$20$"
  - "$30$"
  - "$50$"
correct: 0
hint: "Suma $x + y = 10$, więc $y = 10-x$. Iloczyn $P = x(10-x) = 10x - x^2$. Maksimum w $x=5$: $P = 25$."
---

Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:
`,Y2=`---
options:
  - "$k \\leq 0 \\lor k \\geq 1$"
  - "$0 < k < 1$"
  - "$k < 0 \\lor k > 1$"
  - "$k = 0 \\lor k = 1$"
correct: 0
hint: "$\\Delta = (2k)^2 - 4k = 4k^2 - 4k \\geq 0$, czyli $k(k-1) \\geq 0$, co zachodzi dla $k \\leq 0$ lub $k \\geq 1$."
---

Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:
`,Q2=`---
options:
  - "$k = 0$ lub $k = 4$"
  - "$k = 2$"
  - "$k \\in \\mathbb{R}$"
  - "Brak rozwiązań"
correct: 0
hint: "$\\Delta = 0$: $4k^2 - 4k \\cdot 4 = 0 \\Rightarrow 4k(k-4) = 0 \\Rightarrow k=0$ lub $k=4$."
---

Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:
`,X2=`---
options:
  - "$m < -2$ lub $m > 2$"
  - "$-2 < m < 2$"
  - "$m = \\pm 2$"
  - "$m \\in \\mathbb{R}$"
correct: 0
hint: "$\\Delta > 0$: $4m^2 - 4 \\cdot 1 \\cdot 4 > 0 \\Rightarrow m^2 > 4 \\Rightarrow |m| > 2$."
---

Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:
`,Z2=`---
options:
  - "24"
  - "12"
  - "16"
  - "10"
correct: 0
hint: "P₄ = 4! = 24."
---

Liczba permutacji zbioru {A, B, C, D} wynosi:
`,J2=`---
options:
  - "$24$"
  - "$12$"
  - "$6$"
  - "$120$"
correct: 0
hint: "$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$."
---

Na ile sposobów można ustawić 4 osoby w rzędzie?
`,e3=`---
options:
  - "$60$"
  - "$120$"
  - "$20$"
  - "$30$"
correct: 0
hint: "$P_5 / n_A! = 5! / 2! = 120 / 2 = 60$. Słowo ABCDA ma 5 liter, A powtarza się 2 razy."
---

Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?
`,t3=`---
options:
  - "90°"
  - "45°"
  - "60°"
  - "180°"
correct: 0
hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
---

Kąt wpisany w okrąg oparty na średnicy mierzy:
`,n3=`---
options:
  - "$180°$"
  - "$360°$"
  - "$90°$"
  - "$270°$"
correct: 0
hint: "Suma kątów wewnętrznych trójkąta zawsze równa się $180°$."
---

Suma kątów wewnętrznych trójkąta wynosi:
`,r3=`---
options:
  - "$P = \\frac{a \\cdot h}{2}$"
  - "$P = a \\cdot h$"
  - "$P = \\frac{a + h}{2}$"
  - "$P = a^2$"
correct: 0
hint: "Pole trójkąta = $\\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość}$."
---

Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:
`,i3=`---
options:
  - "W(2) = 0"
  - "W(2) = 4"
  - "W(2) = 2"
  - "W(0) = 0"
correct: 0
hint: "Podstaw x=2: 8 − 8 − 6 + 6 = 0."
---

Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:
`,o3=`---
options:
  - "Tak, bo $2^3 - 4 \\cdot 2 = 0$"
  - "Nie, bo $2^3 - 4 \\cdot 2 \\neq 0$"
  - "Tak, bo stopień wielomianu to $3$"
  - "Nie, bo wielomian ma zawsze 3 pierwiastki"
correct: 0
hint: "$p(2) = 8 - 8 = 0$, więc $x=2$ jest pierwiastkiem."
---

Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?
`,a3=`---
options:
  - "Co najwyżej $n$ pierwiastków"
  - "Dokładnie $n$ pierwiastków"
  - "Zawsze nieskończenie wiele"
  - "Co najmniej $1$ pierwiastek"
correct: 0
hint: "Wielomian stopnia $n$ ma co najwyżej $n$ pierwiastków rzeczywistych (może mieć mniej lub zero)."
---

Wielomian stopnia $n$ ma:
`,s3=`---
options:
  - "3x(x² + 2x + 3)"
  - "3(x³ + 2x + 3)"
  - "x(3x² + 6x)"
  - "3x²(x + 2)"
correct: 0
hint: "Wyłącz przed nawias 3x z każdego wyrazu."
---

Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:
`,l3=`---
options:
  - "$3$"
  - "$2$"
  - "$4$"
  - "$1$"
correct: 0
hint: "Stopień wielomianu to najwyższy wykładnik. W $2x^3 + x - 5$ najwyższy to $3$."
---

Stopień wielomianu $2x^3 + x - 5$ wynosi:
`,u3=`---
options:
  - "$x^2 + 3x + 2$"
  - "$x^2 - 3x + 2$"
  - "$x^2 + x + 2$"
  - "$x^2 + 3x - 2$"
correct: 0
hint: "$(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$."
---

Rozwiń: $(x + 1)(x + 2) =$
`,c3=`---
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^8$"
correct: 1
hint: "$\\frac{1}{16} = 2^{-4}$, więc $(\\frac{1}{16})^8 = 2^{-32}$. Ponadto $8 = 2^3$, więc $8^{16} = 2^{48}$. Razem: $2^{-32} \\cdot 2^{48} = 2^{16}$."
---

Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:
`,d3=`---
options:
  - "$8$"
  - "$6$"
  - "$9$"
  - "$4$"
correct: 0
hint: "$2^3 = 2 \\cdot 2 \\cdot 2 = 8$."
---

Oblicz: $2^3 =$
`,f3=`---
options:
  - "$a^5$"
  - "$a^6$"
  - "$a^2$"
  - "$2a^3$"
correct: 0
hint: "Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki: $a^2 \\cdot a^3 = a^{2+3} = a^5$."
---

Uprość: $a^2 \\cdot a^3 =$
`,m3=`---
options:
  - "1/2"
  - "1/3"
  - "2/3"
  - "1/6"
correct: 0
hint: "Parzyste: {2,4,6}. P = 3/6 = 1/2."
---

Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,h3=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Prawa liczb parzystych na kostce: 2, 4, 6 — to 3 z 6 możliwych wyników. $P = \\frac{3}{6} = \\frac{1}{2}$."
---

Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,p3=`---
options:
  - "$\\frac{1}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
  - "$1$"
correct: 0
hint: "Zdarzenia niezależne: $P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$."
---

Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:
`,v3=`---
options:
  - "2k+1 i 2m+1 są nieparzyste, ich suma = 2(k+m+1) — parzysta"
  - "5+7=12, więc działa"
  - "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta"
  - "Wystarczy sprawdzić kilka przykładów"
correct: 0
hint: "Dowód ogólny: reprezentujesz liczby jako 2k+1 i 2m+1."
---

Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?
`,g3=`---
options:
  - "Przyjmujemy negację tezy i dochodzimy do sprzeczności"
  - "Sprawdzamy wszystkie przypadki"
  - "Używamy tylko przykładów"
  - "Dowodzimy przez analogię"
correct: 0
hint: "Dowód nie wprost (reductio ad absurdum): zakładamy, że teza jest fałszywa, i wyprowadzamy sprzeczność."
---

Dowód nie wprost polega na tym, że:
`,y3=`---
options:
  - "Krok bazowy + krok indukcyjny (zakładamy prawdziwość dla $n$, dowodzimy dla $n+1$)"
  - "Sprawdzenie kilku pierwszych przypadków"
  - "Dowód dla $n=1$ wystarczy"
  - "Zakładamy prawdziwość dla $n+1$ i dowodzimy dla $n$"
correct: 0
hint: "Indukcja matematyczna: 1) Krok bazowy — sprawdzamy dla $n=1$. 2) Krok indukcyjny — zakładamy dla $n$, dowodzimy dla $n+1$."
---

Dowód przez indukcję matematyczną składa się z:
`,x3=`---
options:
  - "$10$"
  - "$12$"
  - "$14$"
  - "$\\sqrt{48}$"
correct: 0
hint: "$c^2 = 6^2 + 8^2 = 36 + 64 = 100$, więc $c = 10$."
---

Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:
`,w3=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$\\sqrt{58}$"
correct: 0
hint: "$c^2 = 3^2 + 4^2 = 9 + 16 = 25$, więc $c = 5$."
---

Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:
`,b3=`---
options:
  - "$\\sqrt{11}$"
  - "$\\sqrt{13}$"
  - "$11$"
  - "$3$"
correct: 0
hint: "$a^2 = c^2 - b^2 = 36 - 25 = 11$, więc $a = \\sqrt{11}$."
---

Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:
`,$3=`---
options:
  - "$x = 2$ i $x = 3$"
  - "$x = -2$ i $x = -3$"
  - "$x = 1$ i $x = 6$"
  - "$x = 2$ i $x = -3$"
correct: 0
hint: "$\\Delta = 25 - 24 = 1$. Wzory Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = 6$. Lub $x = \\frac{5 \\pm 1}{2}$."
---

Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:
`,_3=`---
options:
  - "$x = 1$ lub $x = -3$"
  - "$x = -1$ lub $x = 3$"
  - "$x = 1$ lub $x = 3$"
  - "Brak rozwiązań rzeczywistych"
correct: 0
hint: "$\\Delta = 4 + 12 = 16$, $\\sqrt{\\Delta} = 4$. $x = \\frac{-2 \\pm 4}{2}$: $x_1 = 1$, $x_2 = -3$."
---

Rozwiąż: $x^2 + 2x - 3 = 0$
`,k3=`---
options:
  - "Brak rozwiązań rzeczywistych"
  - "$x = 0$"
  - "$x = \\pm 2$"
  - "$x = 4$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. Ujemna delta oznacza brak rozwiązań w $\\mathbb{R}$."
---

Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?
`,z3=`---
options:
  - "(−2, 3)"
  - "(−∞,−2)∪(3,+∞)"
  - "[−2, 3]"
  - "(−3, 2)"
correct: 0
hint: "Pierwiastki to −2 i 3. Parabola jest nad osią poza przedziałem (−2,3)."
---

Rozwiązaniem nierówności x² − x − 6 < 0 jest:
`,S3=`---
options:
  - "$x \\in (-2, 3)$"
  - "$x \\in (-\\infty, -2) \\cup (3, +\\infty)$"
  - "$x \\in [-2, 3]$"
  - "$x \\in \\mathbb{R}$"
correct: 0
hint: "Pierwiastki to $x = -2$ i $x = 3$. Ramiona paraboli skierowane w górę ($a=1>0$), więc parabola jest poniżej zera między pierwiastkami."
---

Rozwiąż nierówność: $x^2 - x - 6 < 0$
`,T3=`---
options:
  - "$x \\in (-\\infty, -1] \\cup [4, +\\infty)$"
  - "$x \\in (-1, 4)$"
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
correct: 0
hint: "Pierwiastki: $\\Delta = 25$, $x_1 = -1$, $x_2 = 4$. Parabola ($a=1>0$) jest powyżej zera poza pierwiastkami."
---

Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$
`,j3=`---
options:
  - "x + 2"
  - "x − 2"
  - "x² + 2"
  - "2x"
correct: 0
hint: "x²−4 = (x−2)(x+2). Skracasz (x−2)."
---

Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:
`,q3=`---
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
`,A3=`---
options:
  - "3"
  - "1"
  - "∞"
  - "0"
correct: 0
hint: "Dzielisz licznik i mianownik przez n². Wyrazy 1/n² i 2/n² dążą do 0."
---

Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:
`,C3=`---
options:
  - "$0$"
  - "$1$"
  - "$\\infty$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$, bo mianownik rośnie bez ograniczeń."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$
`,P3=`---
options:
  - "$3$"
  - "$\\infty$"
  - "$0$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Podziel licznik i mianownik przez $n$: $\\frac{3n+1}{n} = 3 + \\frac{1}{n} \\to 3$."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$
`,E3=`---
options:
  - "$14$"
  - "$13$"
  - "$15$"
  - "$12$"
correct: 0
hint: "$a_5 = 3 \\cdot 5 - 1 = 15 - 1 = 14$."
---

Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:
`,D3=`---
options:
  - "$a_n = 2n - 1$"
  - "$a_n = 2n + 1$"
  - "$a_n = n + 2$"
  - "$a_n = 2n$"
correct: 0
hint: "Ciąg: $1, 3, 5, 7, \\ldots$ — liczby nieparzyste. Wzór ogólny: $a_n = 2n - 1$."
---

Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:
`,R3=`---
options:
  - "$a_5 = 17$"
  - "$a_5 = 15$"
  - "$a_5 = 13$"
  - "$a_5 = 20$"
correct: 0
hint: "$a_1 = 1$, $r = 4$, $a_5 = a_1 + 4r = 1 + 16 = 17$."
---

Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:
`,N3=`---
options:
  - "{3,4}"
  - "{1,2,5,6}"
  - "{1,2,3,4,5,6}"
  - "{3}"
correct: 0
hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
---

A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =
`,B3=`---
options:
  - "$\\{2, 4\\}$"
  - "$\\{1, 2, 3, 4, 5, 6\\}$"
  - "$\\{1, 3, 5, 6\\}$"
  - "$\\emptyset$"
correct: 0
hint: "Część wspólna $A \\cap B$ zawiera elementy należące do obu zbiorów jednocześnie."
---

Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:
`,I3=`---
options:
  - "$\\{1, 2, 3, 4, 6\\}$"
  - "$\\{2, 4\\}$"
  - "$\\{1, 3\\}$"
  - "$\\{6\\}$"
correct: 0
hint: "Suma $A \\cup B$ zawiera wszystkie elementy z obu zbiorów (bez powtórzeń)."
---

Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:
`,F3=`---
options:
  - "39"
  - "25"
  - "49"
  - "74"
correct: 0
hint: "Tw. cosinusów: c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39."
---

W trójkącie a=5, b=7, C=60°. Wartość c² =
`,L3=`---
options:
  - "$c^2 = a^2 + b^2 - 2ab\\cos\\gamma$"
  - "$c^2 = a^2 + b^2 + 2ab\\cos\\gamma$"
  - "$c = a + b - 2\\cos\\gamma$"
  - "$\\cos\\gamma = a^2 + b^2 - c^2$"
correct: 0
hint: "Twierdzenie cosinusów: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$, gdzie $\\gamma$ to kąt między bokami $a$ i $b$."
---

Twierdzenie cosinusów brzmi:
`,O3=`---
options:
  - "$\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma}$"
  - "$a \\cdot \\sin\\alpha = b \\cdot \\sin\\beta$"
  - "$\\frac{\\sin\\alpha}{a} = \\frac{\\sin\\beta}{b} + \\frac{\\sin\\gamma}{c}$"
  - "$a = b \\cdot \\sin\\alpha$"
correct: 0
hint: "Twierdzenie sinusów: iloraz każdego boku przez sinus przeciwległego kąta jest stały (= $2R$)."
---

Twierdzenie sinusów głosi, że w każdym trójkącie:
`,H3=`---
options:
  - "12π"
  - "36π"
  - "9π"
  - "48π"
correct: 0
hint: "V = (1/3)πr²h = (1/3)·π·9·4 = 12π."
---

Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:
`,G3=`---
options:
  - "$V = a^3$"
  - "$V = 6a^2$"
  - "$V = 3a^3$"
  - "$V = a^2 h$"
correct: 0
hint: "Objętość sześcianu o krawędzi $a$: $V = a \\cdot a \\cdot a = a^3$."
---

Wzór na objętość sześcianu o krawędzi $a$:
`,W3=`---
options:
  - "$V = \\frac{4}{3}\\pi r^3$"
  - "$V = \\pi r^2 h$"
  - "$V = 4\\pi r^2$"
  - "$V = \\frac{1}{3}\\pi r^2 h$"
correct: 0
hint: "Objętość kuli o promieniu $r$: $V = \\frac{4}{3}\\pi r^3$."
---

Wzór na objętość kuli o promieniu $r$:
`,U3=`---
options:
  - "6"
  - "5"
  - "7"
  - "8"
correct: 0
hint: "Suma = 30, liczba wyrazów = 5. 30/5 = 6."
---

Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:
`,V3=`---
options:
  - "Najczęściej powtarzająca się wartość"
  - "Środkowa wartość po posortowaniu"
  - "Suma podzielona przez liczbę elementów"
  - "Różnica między max i min"
correct: 0
hint: "Dominanta (moda) to wartość, która pojawia się najczęściej w danych."
---

Dominanta (moda) zbioru danych to:
`,K3=`---
options:
  - "$8$"
  - "$4$"
  - "$2$"
  - "$16$"
correct: 0
hint: "Rozstęp = max $-$ min $= 12 - 4 = 8$."
---

Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:
`,Y3=`---
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
`,Q3=`---
options:
  - "$6$"
  - "$4$"
  - "$8$"
  - "$3$"
correct: 0
hint: "Twierdzenie Talesa: $\\frac{AB}{BC} = \\frac{DE}{EF}$. Mamy $\\frac{4}{8} = \\frac{3}{EF}$, więc $EF = 6$."
---

Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$
`,X3=`---
options:
  - "Odcinki są proporcjonalne"
  - "Kąty są równe"
  - "Trójkąty są przystające"
  - "Pole trójkąta jest stałe"
correct: 0
hint: "Twierdzenie Talesa stwierdza, że prosta równoległa do boku trójkąta wyznacza proporcjonalne odcinki na pozostałych bokach."
---

Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?
`,Z3=`---
options:
  - "$\\frac{4}{5}$"
  - "$\\frac{3}{4}$"
  - "$\\frac{5}{3}$"
  - "$\\frac{1}{5}$"
correct: 0
hint: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$, więc $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, a $\\cos\\alpha = \\frac{4}{5}$ (dla kąta ostrego)."
---

W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:
`,J3=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "Trójkąt prostokątny 30-60-90: $\\sin 30° = \\frac{1}{2}$."
---

Wartość $\\sin 30°$ wynosi:
`,e5=`---
options:
  - "$1$"
  - "$0$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
correct: 0
hint: "Tożsamość Pitagorejska: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ dla każdego kąta $\\alpha$."
---

Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:
`,t5=`---
options:
  - "x = 30° i x = 150°"
  - "x = 30° tylko"
  - "x = 60° i x = 120°"
  - "x = 45°"
correct: 0
hint: "sin jest symetryczny względem 90°. sin(30°) = sin(150°) = 1/2."
---

Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:
`,n5=`---
options:
  - "$x = \\frac{\\pi}{6} + 2k\\pi$ lub $x = \\frac{5\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$ lub $x = -\\frac{\\pi}{6} + k\\pi$"
correct: 0
hint: "$\\sin x = \\frac{1}{2}$ dla $x = \\frac{\\pi}{6}$ (30°) i $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (150°), plus okresy $2\\pi$."
---

Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$
`,r5=`---
options:
  - "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = k\\pi$, $k \\in \\mathbb{Z}$"
correct: 0
hint: "$\\tan x = 1$ dla $x = \\frac{\\pi}{4}$. Tangens ma okres $\\pi$, więc ogólne rozwiązanie: $x = \\frac{\\pi}{4} + k\\pi$."
---

Rozwiąż równanie: $\\tan x = 1$
`,i5=`---
options:
  - "2sin(α)cos(α)"
  - "sin²(α)−cos²(α)"
  - "cos²(α)−sin²(α)"
  - "2cos²(α)−1"
correct: 0
hint: "Wzór na sinus kąta podwojonego: sin(2α) = 2sin(α)cos(α)."
---

sin(2α) jest równe:
`,o5=`---
options:
  - "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$"
  - "$\\sin 2\\alpha = \\sin^2\\alpha + \\cos^2\\alpha$"
  - "$\\sin 2\\alpha = 2\\sin^2\\alpha$"
  - "$\\sin 2\\alpha = \\sin\\alpha \\cdot \\cos\\alpha$"
correct: 0
hint: "Wzór na sinus podwojonego kąta: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$."
---

Wzór na $\\sin 2\\alpha$:
`,a5=`---
options:
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha - \\cos\\beta$"
correct: 0
hint: "Wzór redukcyjny: $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$."
---

Wzór na $\\cos(\\alpha - \\beta)$:
`,s5=`---
options:
  - "√3/2"
  - "1/2"
  - "−√3/2"
  - "√2/2"
correct: 0
hint: "120° = 180°−60°, sin(180°−α) = sin(α), sin(60°) = √3/2."
---

Wartość sin(120°) jest równa:
`,l5=`---
options:
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "$\\cos 30° = \\frac{\\sqrt{3}}{2}$. Zapamiętaj wartości dla 30°, 45°, 60°."
---

Wartość $\\cos 30°$ wynosi:
`,u5=`---
options:
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$0$"
correct: 0
hint: "$\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$."
---

Wartość $\\sin 45°$ wynosi:
`,c5=`---
options:
  - "5"
  - "7"
  - "√7"
  - "12"
correct: 0
hint: "|v| = √(3²+4²) = √25 = 5."
---

Długość wektora v = [3, 4] wynosi:
`,d5=`---
options:
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$"
  - "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|$"
  - "$\\vec{a} \\cdot \\vec{b} = (a_1+b_1, a_2+b_2)$"
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_2 - a_2 b_1$"
correct: 0
hint: "Iloczyn skalarny: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$. Wynikiem jest liczba, nie wektor."
---

Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:
`,f5=`---
options:
  - "$\\sqrt{13}$"
  - "$5$"
  - "$13$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|\\vec{v}| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$."
---

Długość wektora $\\vec{v} = (2, 3)$ wynosi:
`,m5=`---
options:
  - "12"
  - "7"
  - "−12"
  - "−7"
correct: 0
hint: "Wzór Viète'a: x₁·x₂ = c/a = 12/1 = 12."
---

Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =
`,h5=`---
options:
  - "$x_1 + x_2 = 5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = 5$, $x_1 x_2 = -6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = -6$"
correct: 0
hint: "Wzory Viète'a dla $ax^2+bx+c=0$: $x_1+x_2 = -b/a$, $x_1 x_2 = c/a$. Tu: $-(-5)/1=5$, $6/1=6$."
---

Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:
`,p5=`---
options:
  - "$13$"
  - "$25$"
  - "$12$"
  - "$5$"
correct: 0
hint: "Wzory Viète'a: $x_1+x_2=5$, $x_1 x_2=6$. Suma kwadratów: $(x_1+x_2)^2 - 2x_1x_2 = 25 - 12 = 13$."
---

Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:
`;function Ad(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],a=n[2].trim(),l={},u=r.split(/\r?\n/);let f=0;for(;f<u.length;){const v=u[f];if(v.startsWith("  ")){f++;continue}const p=v.match(/^(\w+):\s*(.*)/);if(!p){f++;continue}const x=p[1];let b=p[2].trim();if(b===""||b===null){const _=u[f+1]??"";if(_.startsWith("  - ")){const k=[];for(f++;f<u.length&&u[f].startsWith("  - ");){let T=u[f].replace(/^  - /,"").trim();T=T.replace(/^["']|["']$/g,""),k.push(T),f++}l[x]=k.length>0?k:null}else if(_.match(/^  \w+:/)){const k={};for(f++;f<u.length&&u[f].match(/^  \w+:/);){const T=u[f].match(/^  (\w+):\s*(.*)/);if(T){const P=T[1];let E=T[2].trim().replace(/^["']|["']$/g,"");k[P]=!isNaN(E)&&E!==""?Number(E):E}f++}l[x]=k}else l[x]=null,f++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?l[x]=Number(b):b==="true"?l[x]=!0:b==="false"?l[x]=!1:l[x]=b,f++}return{meta:l,body:a}}function Cd(o,n){return Object.entries(o).map(([r,a])=>{var f;const l=(f=r.match(n))==null?void 0:f[1],{meta:u}=Ad(a);return{id:l,label:u.label??l,labelPl:u.labelPl??u.label??l,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0}})}function Pd(o,n){var a;const r={};for(const[l,u]of Object.entries(o)){const f=(a=l.match(n))==null?void 0:a[1];if(!f)continue;const{meta:v,body:p}=Ad(u);r[f]||(r[f]=[]),r[f].push({q:p,options:v.options??[],correct:v.correct??0,hint:v.hint??"",tests:v.tests&&typeof v.tests=="object"&&Object.keys(v.tests).length>0?v.tests:{[f]:1}})}return r}function v5(o,n,r=[]){const a=o[n];if(!a||a.length===0)return null;const l=a.map((f,v)=>({q:f,i:v})).filter(({i:f})=>!r.includes(f));if(l.length===0)return null;const u=l[Math.floor(Math.random()*l.length)];return{...u.q,index:u.i}}const g5=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],y5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},x5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},w5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Ed={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},b5=Object.assign({"./nodes/abs_value/node.md":Bm,"./nodes/analytic_geom/node.md":Im,"./nodes/area_perimeter/node.md":Fm,"./nodes/arith_geom/node.md":Lm,"./nodes/bernoulli/node.md":Om,"./nodes/binom_theorem/node.md":Hm,"./nodes/circle_eq/node.md":Gm,"./nodes/combinations/node.md":Wm,"./nodes/complex/node.md":Um,"./nodes/cond_prob/node.md":Vm,"./nodes/conic_sections/node.md":Km,"./nodes/counting/node.md":Ym,"./nodes/data_basics/node.md":Qm,"./nodes/deriv_apps/node.md":Xm,"./nodes/derivative/node.md":Zm,"./nodes/distributions/node.md":Jm,"./nodes/factoring/node.md":eh,"./nodes/fn_compositions/node.md":th,"./nodes/fn_concept/node.md":nh,"./nodes/fn_exp/node.md":rh,"./nodes/fn_linear/node.md":ih,"./nodes/fn_log/node.md":oh,"./nodes/fn_poly/node.md":ah,"./nodes/fn_quadratic/node.md":sh,"./nodes/fn_trig/node.md":lh,"./nodes/fractions/node.md":uh,"./nodes/geo_series/node.md":ch,"./nodes/integers/node.md":dh,"./nodes/integral/node.md":fh,"./nodes/limits/node.md":mh,"./nodes/linear_eq/node.md":hh,"./nodes/linear_ineq/node.md":ph,"./nodes/linear_sys/node.md":vh,"./nodes/log_eq/node.md":gh,"./nodes/log_exp/node.md":yh,"./nodes/logic_basics/node.md":xh,"./nodes/optimization_lp/node.md":wh,"./nodes/param_eq/node.md":bh,"./nodes/permutations/node.md":$h,"./nodes/planimetria_lp/node.md":_h,"./nodes/poly_roots/node.md":kh,"./nodes/polynomials/node.md":zh,"./nodes/powers/node.md":Sh,"./nodes/probability/node.md":Th,"./nodes/proof/node.md":jh,"./nodes/pythagoras/node.md":qh,"./nodes/quadratic_eq/node.md":Mh,"./nodes/quadratic_ineq/node.md":Ah,"./nodes/rational_expr/node.md":Ch,"./nodes/seq_limits/node.md":Ph,"./nodes/sequences/node.md":Eh,"./nodes/sets/node.md":Dh,"./nodes/sin_cos_law/node.md":Rh,"./nodes/solid_geom/node.md":Nh,"./nodes/stat_lp/node.md":Bh,"./nodes/thales/node.md":Ih,"./nodes/trig_basic/node.md":Fh,"./nodes/trig_eq/node.md":Lh,"./nodes/trig_formulas/node.md":Oh,"./nodes/trig_lp/node.md":Hh,"./nodes/vectors/node.md":Gh,"./nodes/vieta/node.md":Wh}),$5=Cd(b5,/\.\/nodes\/([^/]+)\/node\.md$/),_5=Object.assign({"./nodes/abs_value/questions/01.md":Uh,"./nodes/abs_value/questions/02.md":Vh,"./nodes/abs_value/questions/03.md":Kh,"./nodes/analytic_geom/questions/01.md":Yh,"./nodes/analytic_geom/questions/02.md":Qh,"./nodes/analytic_geom/questions/03.md":Xh,"./nodes/area_perimeter/questions/01.md":Zh,"./nodes/area_perimeter/questions/02.md":Jh,"./nodes/area_perimeter/questions/03.md":ep,"./nodes/arith_geom/questions/01.md":tp,"./nodes/arith_geom/questions/02.md":np,"./nodes/arith_geom/questions/03.md":rp,"./nodes/bernoulli/questions/01.md":ip,"./nodes/bernoulli/questions/02.md":op,"./nodes/bernoulli/questions/03.md":ap,"./nodes/binom_theorem/questions/01.md":sp,"./nodes/binom_theorem/questions/02.md":lp,"./nodes/binom_theorem/questions/03.md":up,"./nodes/circle_eq/questions/01.md":cp,"./nodes/circle_eq/questions/02.md":dp,"./nodes/circle_eq/questions/03.md":fp,"./nodes/combinations/questions/01.md":mp,"./nodes/combinations/questions/02.md":hp,"./nodes/combinations/questions/03.md":pp,"./nodes/complex/questions/01.md":vp,"./nodes/complex/questions/02.md":gp,"./nodes/complex/questions/03.md":yp,"./nodes/cond_prob/questions/01.md":xp,"./nodes/cond_prob/questions/02.md":wp,"./nodes/cond_prob/questions/03.md":bp,"./nodes/conic_sections/questions/01.md":$p,"./nodes/conic_sections/questions/02.md":_p,"./nodes/conic_sections/questions/03.md":kp,"./nodes/counting/questions/01.md":zp,"./nodes/counting/questions/02.md":Sp,"./nodes/counting/questions/03.md":Tp,"./nodes/data_basics/questions/01.md":jp,"./nodes/data_basics/questions/02.md":qp,"./nodes/data_basics/questions/03.md":Mp,"./nodes/deriv_apps/questions/01.md":Ap,"./nodes/deriv_apps/questions/02.md":Cp,"./nodes/deriv_apps/questions/03.md":Pp,"./nodes/derivative/questions/01.md":Ep,"./nodes/derivative/questions/02.md":Dp,"./nodes/derivative/questions/03.md":Rp,"./nodes/distributions/questions/01.md":Np,"./nodes/distributions/questions/02.md":Bp,"./nodes/distributions/questions/03.md":Ip,"./nodes/factoring/questions/01.md":Fp,"./nodes/factoring/questions/02.md":Lp,"./nodes/factoring/questions/03.md":Op,"./nodes/fn_compositions/questions/01.md":Hp,"./nodes/fn_compositions/questions/02.md":Gp,"./nodes/fn_compositions/questions/03.md":Wp,"./nodes/fn_concept/questions/01.md":Up,"./nodes/fn_concept/questions/02.md":Vp,"./nodes/fn_concept/questions/03.md":Kp,"./nodes/fn_exp/questions/01.md":Yp,"./nodes/fn_exp/questions/02.md":Qp,"./nodes/fn_exp/questions/03.md":Xp,"./nodes/fn_linear/questions/01.md":Zp,"./nodes/fn_linear/questions/02.md":Jp,"./nodes/fn_linear/questions/03.md":e2,"./nodes/fn_log/questions/01.md":t2,"./nodes/fn_log/questions/02.md":n2,"./nodes/fn_log/questions/03.md":r2,"./nodes/fn_poly/questions/01.md":i2,"./nodes/fn_poly/questions/02.md":o2,"./nodes/fn_poly/questions/03.md":a2,"./nodes/fn_quadratic/questions/01.md":s2,"./nodes/fn_quadratic/questions/02.md":l2,"./nodes/fn_quadratic/questions/03.md":u2,"./nodes/fn_trig/questions/01.md":c2,"./nodes/fn_trig/questions/02.md":d2,"./nodes/fn_trig/questions/03.md":f2,"./nodes/fractions/questions/01.md":m2,"./nodes/fractions/questions/02.md":h2,"./nodes/fractions/questions/03.md":p2,"./nodes/geo_series/questions/01.md":v2,"./nodes/geo_series/questions/02.md":g2,"./nodes/geo_series/questions/03.md":y2,"./nodes/integers/questions/01.md":x2,"./nodes/integers/questions/02.md":w2,"./nodes/integers/questions/03.md":b2,"./nodes/integral/questions/01.md":$2,"./nodes/integral/questions/02.md":_2,"./nodes/integral/questions/03.md":k2,"./nodes/limits/questions/01.md":z2,"./nodes/limits/questions/02.md":S2,"./nodes/limits/questions/03.md":T2,"./nodes/linear_eq/questions/01.md":j2,"./nodes/linear_eq/questions/02.md":q2,"./nodes/linear_eq/questions/03.md":M2,"./nodes/linear_ineq/questions/01.md":A2,"./nodes/linear_ineq/questions/02.md":C2,"./nodes/linear_ineq/questions/03.md":P2,"./nodes/linear_sys/questions/01.md":E2,"./nodes/linear_sys/questions/02.md":D2,"./nodes/linear_sys/questions/03.md":R2,"./nodes/log_eq/questions/01.md":N2,"./nodes/log_eq/questions/02.md":B2,"./nodes/log_eq/questions/03.md":I2,"./nodes/log_exp/questions/01.md":F2,"./nodes/log_exp/questions/02.md":L2,"./nodes/log_exp/questions/03.md":O2,"./nodes/logic_basics/questions/01.md":H2,"./nodes/logic_basics/questions/02.md":G2,"./nodes/logic_basics/questions/03.md":W2,"./nodes/optimization_lp/questions/01.md":U2,"./nodes/optimization_lp/questions/02.md":V2,"./nodes/optimization_lp/questions/03.md":K2,"./nodes/param_eq/questions/01.md":Y2,"./nodes/param_eq/questions/02.md":Q2,"./nodes/param_eq/questions/03.md":X2,"./nodes/permutations/questions/01.md":Z2,"./nodes/permutations/questions/02.md":J2,"./nodes/permutations/questions/03.md":e3,"./nodes/planimetria_lp/questions/01.md":t3,"./nodes/planimetria_lp/questions/02.md":n3,"./nodes/planimetria_lp/questions/03.md":r3,"./nodes/poly_roots/questions/01.md":i3,"./nodes/poly_roots/questions/02.md":o3,"./nodes/poly_roots/questions/03.md":a3,"./nodes/polynomials/questions/01.md":s3,"./nodes/polynomials/questions/02.md":l3,"./nodes/polynomials/questions/03.md":u3,"./nodes/powers/questions/01.md":c3,"./nodes/powers/questions/02.md":d3,"./nodes/powers/questions/03.md":f3,"./nodes/probability/questions/01.md":m3,"./nodes/probability/questions/02.md":h3,"./nodes/probability/questions/03.md":p3,"./nodes/proof/questions/01.md":v3,"./nodes/proof/questions/02.md":g3,"./nodes/proof/questions/03.md":y3,"./nodes/pythagoras/questions/01.md":x3,"./nodes/pythagoras/questions/02.md":w3,"./nodes/pythagoras/questions/03.md":b3,"./nodes/quadratic_eq/questions/01.md":$3,"./nodes/quadratic_eq/questions/02.md":_3,"./nodes/quadratic_eq/questions/03.md":k3,"./nodes/quadratic_ineq/questions/01.md":z3,"./nodes/quadratic_ineq/questions/02.md":S3,"./nodes/quadratic_ineq/questions/03.md":T3,"./nodes/rational_expr/questions/01.md":j3,"./nodes/rational_expr/questions/02.md":q3,"./nodes/rational_expr/questions/03.md":M3,"./nodes/seq_limits/questions/01.md":A3,"./nodes/seq_limits/questions/02.md":C3,"./nodes/seq_limits/questions/03.md":P3,"./nodes/sequences/questions/01.md":E3,"./nodes/sequences/questions/02.md":D3,"./nodes/sequences/questions/03.md":R3,"./nodes/sets/questions/01.md":N3,"./nodes/sets/questions/02.md":B3,"./nodes/sets/questions/03.md":I3,"./nodes/sin_cos_law/questions/01.md":F3,"./nodes/sin_cos_law/questions/02.md":L3,"./nodes/sin_cos_law/questions/03.md":O3,"./nodes/solid_geom/questions/01.md":H3,"./nodes/solid_geom/questions/02.md":G3,"./nodes/solid_geom/questions/03.md":W3,"./nodes/stat_lp/questions/01.md":U3,"./nodes/stat_lp/questions/02.md":V3,"./nodes/stat_lp/questions/03.md":K3,"./nodes/thales/questions/01.md":Y3,"./nodes/thales/questions/02.md":Q3,"./nodes/thales/questions/03.md":X3,"./nodes/trig_basic/questions/01.md":Z3,"./nodes/trig_basic/questions/02.md":J3,"./nodes/trig_basic/questions/03.md":e5,"./nodes/trig_eq/questions/01.md":t5,"./nodes/trig_eq/questions/02.md":n5,"./nodes/trig_eq/questions/03.md":r5,"./nodes/trig_formulas/questions/01.md":i5,"./nodes/trig_formulas/questions/02.md":o5,"./nodes/trig_formulas/questions/03.md":a5,"./nodes/trig_lp/questions/01.md":s5,"./nodes/trig_lp/questions/02.md":l5,"./nodes/trig_lp/questions/03.md":u5,"./nodes/vectors/questions/01.md":c5,"./nodes/vectors/questions/02.md":d5,"./nodes/vectors/questions/03.md":f5,"./nodes/vieta/questions/01.md":m5,"./nodes/vieta/questions/02.md":h5,"./nodes/vieta/questions/03.md":p5}),k5=Pd(_5,/\.\/nodes\/([^/]+)\/questions\//),z5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Ed,QUESTION_BANK:k5,RAW_EDGES:g5,RAW_NODES:$5,SCOPE_COLORS:x5,SCOPE_LABELS:w5,SECTIONS:y5},Symbol.toStringTag,{value:"Module"})),S5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,T5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,j5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,q5=`---
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
`,A5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,C5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,P5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,E5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,D5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,R5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,N5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,B5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,I5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,F5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,L5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,O5=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,H5=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,G5=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
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
`,U5=`---
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
`,V5=`---
options:
  - "There is exactly one identity element"
  - "There can be two or more identity elements"
  - "An identity element need not be unique"
  - "Identity elements only exist in groups"
correct: 0
hint: Suppose e and e' are both identities. Then e = e·e' = e'. The argument forces uniqueness in any algebraic structure with an associative operation.
---
In a monoid (S, ·), the identity element is:
`,K5=`---
options:
  - "A binary operation ∗ on S such that for all a,b,c ∈ S: (a∗b)∗c = a∗(b∗c)"
  - "A binary operation ∗ on S such that a∗b = b∗a for all a,b"
  - "A function S → S"
  - "An operation where every element has an inverse"
correct: 0
hint: Associativity is the property (a∗b)∗c = a∗(b∗c). Commutativity (a∗b = b∗a) is a separate, stronger condition not required for a semigroup.
---
Associativity of a binary operation ∗ on S means:
`,Y5=`---
options:
  - "They partition $G$ into equal-sized pieces"
  - "They form a group under coset multiplication"
  - "Left cosets and right cosets are always equal"
  - "A coset is always a subgroup"
correct: 0
hint: The cosets of H in G partition G (each element belongs to exactly one coset) and all cosets have the same size |H|. They form a group only if H is normal.
---
The left cosets of a subgroup $H$ in a group $G$:
`,Q5=`---
options:
  - "$gN = Ng$ for all $g \\in G$"
  - "$N$ is abelian"
  - "Every element of $N$ commutes with every element of $G$"
  - "$N$ has index 2 in $G$"
correct: 0
hint: N ⊴ G means left and right cosets coincide: gN = Ng for every g ∈ G. Equivalently, gNg⁻¹ = N for all g. Every subgroup of index 2 is automatically normal.
---
A subgroup $N$ of $G$ is called normal if:
`,X5=`---
options:
  - "3"
  - "2"
  - "6"
  - "1"
correct: 0
hint: The order of S₃ is 3! = 6. By Lagrange the index [S₃:H] = |S₃|/|H| = 6/2 = 3. So there are 3 left cosets.
---
How many left cosets does a subgroup of order $2$ have in $S_3$ (order $6$)?
`,Z5=`---
options:
  - "Every cyclic group is abelian"
  - "Every abelian group is cyclic"
  - "Cyclic groups must be finite"
  - "The only cyclic group is $\\mathbb{Z}$"
correct: 0
hint: If G = ⟨g⟩ then any two elements gᵐ and gⁿ commute: gᵐgⁿ = gᵐ⁺ⁿ = gⁿgᵐ. So every cyclic group is abelian. The converse fails: ℤ₂×ℤ₂ is abelian but not cyclic.
---
Which statement about cyclic groups is always true?
`,J5=`---
options:
  - "2"
  - "1"
  - "4"
  - "6"
correct: 0
hint: The generators of ℤ₆ are elements of order 6, i.e., those coprime to 6. φ(6) = φ(2)φ(3) = 1·2 = 2. The generators are 1 and 5.
---
How many generators does the cyclic group $\\mathbb{Z}_6$ have?
`,e6=`---
options:
  - "Every subgroup of a cyclic group is cyclic"
  - "Cyclic groups have no proper subgroups"
  - "A cyclic group can have non-cyclic subgroups"
  - "The only subgroup of $\\mathbb{Z}$ is $\\mathbb{Z}$ itself"
correct: 0
hint: If G = ⟨g⟩ is cyclic, any subgroup H consists of powers of g, so H = ⟨gᵏ⟩ for some k — cyclic. For ℤ, every subgroup is nℤ = ⟨n⟩ for some n ≥ 0.
---
Which is true about subgroups of cyclic groups?
`,t6=`---
options:
  - "$\\dim_F K$ as a vector space over $F$"
  - "The number of elements in $K$"
  - "The degree of the minimal polynomial of $K$"
  - "$|K| / |F|$"
correct: 0
hint: The degree [K:F] is the dimension of K as a vector space over F. For example [ℂ:ℝ] = 2 (basis {1, i}), [ℝ:ℚ] = ∞.
---
The degree of a field extension $K/F$, written $[K:F]$, is:
`,n6=`---
options:
  - "$[L:F] = [L:K][K:F]$"
  - "$[L:F] = [L:K] + [K:F]$"
  - "$[L:F] = [L:K] / [K:F]$"
  - "$[L:K] = [L:F]$ always"
correct: 0
hint: Tower law (multiplicativity of degree): if F ⊆ K ⊆ L are fields, then [L:F] = [L:K]·[K:F]. For example [ℚ(√2,√3):ℚ] = [ℚ(√2,√3):ℚ(√2)]·[ℚ(√2):ℚ] = 2·2 = 4.
---
The Tower Law for field extensions $F \\subseteq K \\subseteq L$ states:
`,r6=`---
options:
  - "The smallest field extension of $F$ over which $f$ splits into linear factors"
  - "Any field containing $F$"
  - "The field $F$ itself if $f$ is irreducible"
  - "The field generated by the coefficients of $f$"
correct: 0
hint: The splitting field of f over F is F(α₁,...,αₙ) where α₁,...,αₙ are all roots of f. It is the smallest extension where f factors completely into linear factors.
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
---
A field is:
`,o6=`---
options:
  - "$\\mathbb{Z}_p$ for prime $p$"
  - "$\\mathbb{Z}_n$ for any $n > 1$"
  - "$\\mathbb{Z}_4$"
  - "$\\mathbb{Z}_6$"
correct: 0
hint: ℤₙ is a field iff n is prime. If n is composite, say n = ab with 1 < a,b < n, then a and b are zero divisors (a·b ≡ 0 mod n) so ℤₙ is not even an integral domain.
---
Which of the following is a field?
`,a6=`---
options:
  - "The multiplicative group of a finite field is cyclic"
  - "Every finite field has prime order"
  - "There are infinitely many non-isomorphic fields of order $p^2$"
  - "Finite fields of the same order may be non-isomorphic"
correct: 0
hint: For GF(pⁿ), the multiplicative group GF(pⁿ)* has order pⁿ-1 and is cyclic (generated by a primitive element). Also: finite fields of the same order are unique up to isomorphism.
---
Which is true about finite fields (Galois fields)?
`,s6=`---
options:
  - "$|G| = |\\text{Orb}(x)| \\cdot |\\text{Stab}(x)|$"
  - "$|G| = |\\text{Orb}(x)| + |\\text{Stab}(x)|$"
  - "$|\\text{Orb}(x)| = |\\text{Stab}(x)|$"
  - "$|\\text{Stab}(x)| = |G| / |X|$"
correct: 0
hint: The orbit-stabiliser theorem says [G:Stab(x)] = |Orb(x)|. Since |G| = |Orb(x)|·|Stab(x)| follows directly from the index formula.
---
The Orbit-Stabiliser Theorem states that for any $x \\in X$ (where $G$ acts on $X$):
`,l6=`---
options:
  - "Every group $G$ embeds into the symmetric group $S_{|G|}$"
  - "Every finite group is isomorphic to $S_n$ for some $n$"
  - "Every group is abelian"
  - "Every group acts trivially on itself"
correct: 0
hint: Cayley's theorem: the left-multiplication action of G on itself gives an injective homomorphism G → Sym(G) ≅ S_{|G|}. So every group is isomorphic to a subgroup of some symmetric group.
---
Cayley's Theorem asserts that:
`,u6=`---
options:
  - "Conjugacy classes of $G$"
  - "Left cosets of $G$"
  - "Normal subgroups of $G$"
  - "Elements of order 2"
correct: 0
hint: When G acts on itself by conjugation g·x = gxg⁻¹, the orbits are exactly the conjugacy classes {gxg⁻¹ : g ∈ G}. The class equation counts elements via these orbits.
---
The orbits of the conjugation action of $G$ on itself are:
`,c6=`---
options:
  - "A normal subgroup of $G$"
  - "A subgroup of $H$"
  - "The whole group $G$"
  - "Always trivial"
correct: 0
hint: ker(φ) = {g ∈ G : φ(g) = eH}. It is a subgroup of G. Moreover it is normal because g·ker(φ)·g⁻¹ ⊆ ker(φ) for any g ∈ G.
---
The kernel of a group homomorphism $\\varphi: G \\to H$ is:
`,d6=`---
options:
  - "Bijective homomorphism"
  - "Surjective homomorphism"
  - "Injective homomorphism"
  - "Homomorphism with trivial kernel"
correct: 0
hint: An isomorphism is a homomorphism that is both injective and surjective (bijective). A monomorphism is injective; an epimorphism is surjective.
---
A group isomorphism $G \\cong H$ is defined as a:
`,f6=`---
options:
  - "$\\ker(\\varphi) = \\{e\\}$"
  - "$\\text{im}(\\varphi) = H$"
  - "$\\varphi(e_G) \\neq e_H$"
  - "$\\ker(\\varphi) = G$"
correct: 0
hint: A homomorphism is injective iff its kernel is trivial ({e}). This follows from: φ(a)=φ(b) ⟺ φ(ab⁻¹)=e ⟺ ab⁻¹ ∈ ker(φ).
---
A homomorphism $\\varphi: G \\to H$ is injective if and only if:
`,m6=`---
options:
  - "Closure, associativity, identity, inverses"
  - "Closure, commutativity, identity, inverses"
  - "Closure, associativity, commutativity, identity"
  - "Associativity, identity, inverses (closure is automatic)"
correct: 0
hint: The four group axioms are: (1) closure, (2) associativity, (3) identity element, (4) inverses. Commutativity is NOT required — that makes an abelian group.
---
The four axioms that define a group $(G, \\cdot)$ are:
`,h6=`---
options:
  - "$n!$"
  - "$n$"
  - "$2n$"
  - "$n^2$"
correct: 0
hint: The symmetric group Sₙ consists of all bijections {1,...,n} → {1,...,n}. The number of such bijections is n! (n factorial).
---
The order of the symmetric group $S_n$ (the group of all permutations of $\\{1, \\ldots, n\\}$) is:
`,p6=`---
options:
  - "$(\\mathbb{R} \\setminus \\{0\\}, \\times)$"
  - "$(\\mathbb{R}, \\times)$"
  - "$(\\mathbb{N}, +)$"
  - "$(\\mathbb{Z}, \\times)$"
correct: 0
hint: (ℝ\\{0}, ×): closed ✓, associative ✓, identity 1 ✓, inverses (1/x) ✓. (ℝ,×) fails because 0 has no inverse. (ℕ,+) has no inverses. (ℤ,×) has no inverses except ±1.
---
Which of the following is a group?
`,v6=`---
options:
  - "A subring $I$ such that $rI \\subseteq I$ and $Ir \\subseteq I$ for all $r \\in R$"
  - "Any subring of $R$"
  - "A subring closed under multiplication"
  - "A subset closed under addition only"
correct: 0
hint: An ideal absorbs multiplication from R on both sides. This is stronger than being a subring. Left ideal: rI ⊆ I. Right ideal: Ir ⊆ I. Two-sided ideal: both.
---
A two-sided ideal $I$ of a ring $R$ is:
`,g6=`---
options:
  - "An ideal $M$ such that no ideal $I$ satisfies $M \\subsetneq I \\subsetneq R$"
  - "An ideal generated by a prime element"
  - "An ideal equal to $R$ itself"
  - "An ideal with exactly one element"
correct: 0
hint: M is maximal if it is proper (M ≠ R) and maximal among proper ideals. Equivalently R/M is a field. Maximal ideals are always prime, but not vice versa.
---
A maximal ideal in a commutative ring $R$ is:
`,y6=`---
options:
  - "A field"
  - "An integral domain"
  - "A ring with zero divisors"
  - "Always the zero ring"
correct: 0
hint: R/M is a field iff M is maximal. This is a key theorem: the quotient by a maximal ideal has no proper nontrivial ideals, which for commutative rings with 1 is equivalent to being a field.
---
If $M$ is a maximal ideal of a commutative ring $R$, then $R/M$ is:
`,x6=`---
options:
  - "Verify P(1) and show P(k) ⟹ P(k+1)"
  - "Verify P(1) only"
  - "Show P(k+1) ⟹ P(k) for all k"
  - "Verify P(n) for all n ≤ 10, then conclude"
correct: 0
hint: Weak induction requires a base case (usually n=1) plus an inductive step that proves the next case from the current one.
---
To prove a statement $P(n)$ for all $n \\geq 1$ by weak mathematical induction, you must:
`,w6=`---
options:
  - "$\\\\frac{n(n+1)}{2}$"
  - "$n^2$"
  - "$\\\\frac{n(n-1)}{2}$"
  - "$2^n - 1$"
correct: 0
hint: Base case: 1 = 1(2)/2 ✓. Inductive step: assume sum to k = k(k+1)/2, then adding (k+1) gives (k+1)(k+2)/2.
---
By induction, $1 + 2 + \\cdots + n$ equals:
`,b6=`---
options:
  - "Strong induction assumes P(1), …, P(k) to prove P(k+1)"
  - "Strong induction only needs the base case P(0)"
  - "Strong induction is weaker than ordinary induction"
  - "Strong induction cannot prove statements about integers"
correct: 0
hint: In strong induction the inductive hypothesis is that P(j) holds for ALL j ≤ k, not just j = k. This makes it more powerful for some proofs (e.g. prime factorisation).
---
Which best describes strong (complete) induction?
`,$6=`---
options:
  - "A commutative ring with unity and no zero divisors"
  - "Any commutative ring"
  - "A ring in which every nonzero element has an inverse"
  - "A ring with a unique maximal ideal"
correct: 0
hint: Integral domain = commutative + unity + no zero divisors. A field is stronger: every nonzero element has an inverse. ℤ is an integral domain but not a field.
---
An integral domain is:
`,_6=`---
options:
  - "It is a field"
  - "It has zero divisors"
  - "It has characteristic zero"
  - "It is isomorphic to $\\mathbb{Z}$"
correct: 0
hint: In a finite integral domain D, for any nonzero a, the map x ↦ ax is injective (no zero divisors) hence surjective (D finite). So a has an inverse and D is a field.
---
Every finite integral domain:
`,k6=`---
options:
  - "The field $\\mathbb{Q}$ of rationals constructed from $\\mathbb{Z}$"
  - "The ring $\\mathbb{Z}[x]$ of integer polynomials"
  - "The ring $\\mathbb{Z}/n\\mathbb{Z}$"
  - "The ring of $2\\times 2$ integer matrices"
correct: 0
hint: The field of fractions of an integral domain D is the smallest field containing D. For D = ℤ, the field of fractions is ℚ = {a/b : a,b ∈ ℤ, b ≠ 0}.
---
The field of fractions of the integral domain $\\mathbb{Z}$ is:
`,z6=`---
options:
  - "$G / \\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$G \\cong H$ whenever $\\varphi$ is a homomorphism"
  - "$\\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$G / \\text{im}(\\varphi) \\cong \\ker(\\varphi)$"
correct: 0
hint: First Isomorphism Theorem: given φ: G → H, the map G/ker(φ) → im(φ) sending g·ker(φ) ↦ φ(g) is a well-defined isomorphism.
---
The First Isomorphism Theorem states that for a homomorphism $\\varphi: G \\to H$:
`,S6=`---
options:
  - "$\\mathbb{Z}/n\\mathbb{Z}$"
  - "$n\\mathbb{Z}$"
  - "$\\mathbb{Z} \\times \\mathbb{Z}_n$"
  - "$\\mathbb{Z}$"
correct: 0
hint: Apply the First Isomorphism Theorem to φ: ℤ → ℤₙ defined by φ(k) = k mod n. ker(φ) = nℤ and im(φ) = ℤₙ, so ℤ/nℤ ≅ ℤₙ.
---
By the First Isomorphism Theorem, the quotient $\\mathbb{Z} / n\\mathbb{Z}$ is isomorphic to:
`,T6=`---
options:
  - "Subgroups of $G/N$ correspond bijectively to subgroups of $G$ containing $N$"
  - "Every subgroup of $G$ maps to a subgroup of $G/N$"
  - "$G/N$ has fewer subgroups than $G$"
  - "Normal subgroups of $G/N$ correspond to all subgroups of $G$"
correct: 0
hint: The Correspondence (Lattice) Theorem: there is an order-preserving bijection between subgroups of G/N and subgroups of G that contain N. Normal subgroups correspond to normal subgroups.
---
The Correspondence Theorem (Fourth Isomorphism Theorem) says:
`,j6=`---
options:
  - "Every subgroup of an abelian group is normal"
  - "Every normal subgroup is abelian"
  - "Normal subgroups must have index 2"
  - "The trivial subgroup is never normal"
correct: 0
hint: If G is abelian then gH = Hg trivially for any H ≤ G (since gh = hg). So every subgroup of an abelian group is automatically normal.
---
Which statement about normal subgroups is correct?
`,q6=`---
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
`,A6=`---
options:
  - "There exist unique $q(x), r(x)$ with $f = qg + r$ and $\\deg r < \\deg g$"
  - "Every polynomial divides every other polynomial"
  - "Division is only possible when $\\deg f \\geq \\deg g$, and the remainder is always 0"
  - "Polynomial division requires $F$ to have characteristic 0"
correct: 0
hint: The division algorithm in F[x]: given f and g ≠ 0 in F[x], there exist unique q (quotient) and r (remainder) with f = qg + r and either r = 0 or deg(r) < deg(g).
---
The division algorithm for polynomials over a field $F$ states:
`,C6=`---
options:
  - "$F[x]/(p(x))$ is a field"
  - "$F[x]/(p(x))$ is the zero ring"
  - "$p(x)$ has a root in $F$"
  - "$F[x]/(p(x))$ has zero divisors"
correct: 0
hint: In F[x], (p(x)) is a maximal ideal iff p(x) is irreducible. Quotient by a maximal ideal in a commutative ring with 1 gives a field.
---
If $p(x)$ is an irreducible polynomial over a field $F$, then:
`,P6=`---
options:
  - "$a$ is a root of $f$ iff $(x-a)$ divides $f(x)$"
  - "$a$ is a root of $f$ iff $f(x) = x - a$"
  - "Every polynomial of degree $n$ has exactly $n$ roots"
  - "$f$ has a root iff $f$ is irreducible"
correct: 0
hint: Factor theorem: f(a) = 0 ⟺ (x-a) | f(x). This follows from the division algorithm: f(x) = (x-a)q(x) + f(a), so if f(a)=0 then (x-a) | f(x).
---
The Factor Theorem for polynomials over a field $F$ states:
`,E6=`---
options:
  - "It is an equivalence relation"
  - "It is reflexive but not transitive"
  - "It is symmetric but not reflexive"
  - "It is transitive but not symmetric"
correct: 0
hint: Check all three properties. The relation 'a ≡ b (mod n)' is reflexive (a-a=0 divisible by n), symmetric, and transitive.
---
The relation $a \\sim b$ on $\\mathbb{Z}$ defined by $n \\mid (a - b)$ for a fixed $n > 1$ is:
`,D6=`---
options:
  - "The equivalence classes of ~ partition S"
  - "Every element belongs to exactly two equivalence classes"
  - "Equivalence classes may overlap"
  - "An equivalence class can be empty"
correct: 0
hint: A fundamental theorem: equivalence classes are disjoint (an element belongs to exactly one class) and their union is all of S.
---
If $\\sim$ is an equivalence relation on a set $S$, then:
`,R6=`---
options:
  - "3"
  - "2"
  - "4"
  - "6"
correct: 0
hint: The equivalence classes are {0,3}, {1,4}, {2,5} — elements with the same remainder mod 3. That gives 3 classes.
---
How many equivalence classes does the relation $a \\sim b \\iff 3 \\mid (a-b)$ have on $\\{0,1,2,3,4,5\\}$?
`,N6=`---
options:
  - "An ideal of $R$"
  - "A subring of $R$ but not necessarily an ideal"
  - "Always the zero ideal"
  - "A field"
correct: 0
hint: ker(φ) = {r ∈ R : φ(r) = 0_S}. It is an ideal (not just a subring) because for any r ∈ R and k ∈ ker(φ): φ(rk) = φ(r)·0 = 0, so rk ∈ ker(φ).
---
The kernel of a ring homomorphism $\\varphi: R \\to S$ is:
`,B6=`---
options:
  - "$R / \\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$R \\cong S$ whenever $\\varphi$ is a ring homomorphism"
  - "$\\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$\\text{im}(\\varphi)$ is an ideal of $S$"
correct: 0
hint: The First Isomorphism Theorem for rings mirrors the group version: R/ker(φ) ≅ im(φ) via the map r + ker(φ) ↦ φ(r). Note: im(φ) is a subring of S, not necessarily an ideal.
---
The First Isomorphism Theorem for rings states:
`,I6=`---
options:
  - "Evaluating a polynomial at a fixed element $\\alpha \\in S$"
  - "Differentiating a polynomial"
  - "Mapping each coefficient to its square"
  - "Reducing coefficients modulo $n$"
correct: 0
hint: The evaluation homomorphism ev_α: R[x] → S sends f(x) ↦ f(α). It is a ring homomorphism: ev_α(f+g) = f(α)+g(α) and ev_α(fg) = f(α)g(α).
---
The evaluation homomorphism $\\text{ev}_\\alpha: R[x] \\to S$ is defined by:
`,F6=`---
options:
  - "$(R, +)$ is an abelian group, $\\cdot$ is associative, and $\\cdot$ distributes over $+$"
  - "$(R, +)$ is a group and $(R, \\cdot)$ is a group"
  - "$(R, +)$ is abelian and $(R, \\cdot)$ is abelian"
  - "Every element has a multiplicative inverse"
correct: 0
hint: A ring needs: (R,+) abelian group, (R,·) associative (semigroup), and both distributive laws. Multiplication need not be commutative, and inverses are not required.
---
A ring $(R, +, \\cdot)$ requires:
`,L6=`---
options:
  - "A nonzero element $a$ such that $ab = 0$ for some nonzero $b$"
  - "An element with no multiplicative inverse"
  - "The additive identity element"
  - "An element equal to its own square"
correct: 0
hint: a is a zero divisor if a ≠ 0 and there exists b ≠ 0 with ab = 0 (or ba = 0). Example: in ℤ₆, the element 2 is a zero divisor because 2·3 = 6 ≡ 0.
---
A zero divisor in a ring $R$ is:
`,O6=`---
options:
  - "The smallest positive integer $n$ such that $n \\cdot 1 = 0$, or $0$ if no such $n$ exists"
  - "The number of elements in the ring"
  - "The largest prime dividing $|R|$"
  - "The additive order of the identity element always"
correct: 0
hint: char(R) = the additive order of 1 if it is finite, or 0 if 1 has infinite additive order. For ℤₙ, char = n. For ℤ, ℚ, ℝ, char = 0.
---
The characteristic of a ring $R$ is:
`,H6=`---
options:
  - "It is both injective and surjective"
  - "It is injective but not surjective"
  - "It is surjective but not injective"
  - "It is neither injective nor surjective"
correct: 0
hint: A bijection is a function that is both injective (one-to-one) and surjective (onto). Every element of the codomain is hit exactly once.
---
A function $f: A \\to B$ is called a **bijection** if and only if:
`,G6=`---
options:
  - "H is nonempty and closed under the operation and taking inverses"
  - "H is nonempty and closed under the operation only"
  - "H contains the identity and is closed under the operation"
  - "H is a group under any binary operation"
correct: 0
hint: The one-step subgroup test: H ≤ G iff H ≠ ∅ and for all a,b ∈ H we have ab⁻¹ ∈ H. Equivalently H is nonempty, closed under multiplication, and closed under inverses.
---
The subgroup test says $H \\leq G$ if and only if:
`,W6=`---
options:
  - "The order of H divides the order of G"
  - "The order of G divides the order of H"
  - "H and G must have the same order"
  - "The order of H equals the index of H in G"
correct: 0
hint: Lagrange's theorem: if G is a finite group and H ≤ G, then |H| divides |G|. The index [G:H] = |G|/|H| is the number of cosets.
---
Lagrange's theorem states that for a finite group $G$ with subgroup $H$:
`,U6=`---
options:
  - "The order of every element divides |G|"
  - "Every divisor of |G| is the order of some element"
  - "G has a subgroup of every order that divides |G|"
  - "All elements of G have the same order"
correct: 0
hint: The order of an element g is |⟨g⟩|, and ⟨g⟩ is a subgroup of G, so by Lagrange |⟨g⟩| divides |G|. The converse (every divisor gives an element) is false in general.
---
A corollary of Lagrange's theorem for a finite group $G$ is:
`,V6=`---
options:
  - "A subgroup of order $p^n$"
  - "A subgroup of order $p$"
  - "Any $p$-subgroup of $G$"
  - "The center of $G$"
correct: 0
hint: If |G| = pⁿm with p∤m, a Sylow p-subgroup has the full p-part of the order, i.e., order pⁿ. Sylow's first theorem guarantees at least one exists.
---
For a group $G$ with $|G| = p^n m$ ($\\gcd(p,m)=1$), a Sylow $p$-subgroup is:
`,K6=`---
options:
  - "All Sylow $p$-subgroups of $G$ are conjugate to each other"
  - "There is exactly one Sylow $p$-subgroup"
  - "Sylow $p$-subgroups are always normal"
  - "All subgroups of the same order are Sylow subgroups"
correct: 0
hint: Sylow's second theorem: any two Sylow p-subgroups are conjugate. A Sylow p-subgroup is normal iff it is unique (nₚ = 1). Many groups have multiple non-normal Sylow subgroups.
---
Sylow's Second Theorem states:
`,Y6=`---
options:
  - "$n_p \\equiv 1 \\pmod{p}$ and $n_p \\mid m$"
  - "$n_p \\equiv 0 \\pmod{p}$ and $n_p \\mid |G|$"
  - "$n_p = 1$ always"
  - "$n_p \\mid p^n$"
correct: 0
hint: Sylow's third theorem: nₚ ≡ 1 (mod p) and nₚ divides m (the p'-part of |G|). This often forces nₚ = 1, making the Sylow subgroup normal and unique.
---
Sylow's Third Theorem constrains the number $n_p$ of Sylow $p$-subgroups by:
`,Q6=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"]],X6={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"}},Z6={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",morphisms:"#f5a623",structure:"#4a9eff"},J6={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},Dd={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},e7=Object.assign({"./nodes/binary_ops/node.md":S5,"./nodes/cosets/node.md":T5,"./nodes/cyclic_groups/node.md":j5,"./nodes/field_extensions/node.md":q5,"./nodes/fields_intro/node.md":M5,"./nodes/group_actions/node.md":A5,"./nodes/group_homomorphisms/node.md":C5,"./nodes/groups_intro/node.md":P5,"./nodes/ideals/node.md":E5,"./nodes/induction/node.md":D5,"./nodes/integral_domains/node.md":R5,"./nodes/iso_theorem/node.md":N5,"./nodes/normal_subgroups/node.md":B5,"./nodes/poly_rings/node.md":I5,"./nodes/relations/node.md":F5,"./nodes/ring_homomorphisms/node.md":L5,"./nodes/rings_intro/node.md":O5,"./nodes/sets_functions/node.md":H5,"./nodes/subgroups/node.md":G5,"./nodes/sylow/node.md":W5}),t7=Cd(e7,/\.\/nodes\/([^/]+)\/node\.md$/),n7=Object.assign({"./nodes/binary_ops/questions/01.md":U5,"./nodes/binary_ops/questions/02.md":V5,"./nodes/binary_ops/questions/03.md":K5,"./nodes/cosets/questions/01.md":Y5,"./nodes/cosets/questions/02.md":Q5,"./nodes/cosets/questions/03.md":X5,"./nodes/cyclic_groups/questions/01.md":Z5,"./nodes/cyclic_groups/questions/02.md":J5,"./nodes/cyclic_groups/questions/03.md":e6,"./nodes/field_extensions/questions/01.md":t6,"./nodes/field_extensions/questions/02.md":n6,"./nodes/field_extensions/questions/03.md":r6,"./nodes/fields_intro/questions/01.md":i6,"./nodes/fields_intro/questions/02.md":o6,"./nodes/fields_intro/questions/03.md":a6,"./nodes/group_actions/questions/01.md":s6,"./nodes/group_actions/questions/02.md":l6,"./nodes/group_actions/questions/03.md":u6,"./nodes/group_homomorphisms/questions/01.md":c6,"./nodes/group_homomorphisms/questions/02.md":d6,"./nodes/group_homomorphisms/questions/03.md":f6,"./nodes/groups_intro/questions/01.md":m6,"./nodes/groups_intro/questions/02.md":h6,"./nodes/groups_intro/questions/03.md":p6,"./nodes/ideals/questions/01.md":v6,"./nodes/ideals/questions/02.md":g6,"./nodes/ideals/questions/03.md":y6,"./nodes/induction/questions/01.md":x6,"./nodes/induction/questions/02.md":w6,"./nodes/induction/questions/03.md":b6,"./nodes/integral_domains/questions/01.md":$6,"./nodes/integral_domains/questions/02.md":_6,"./nodes/integral_domains/questions/03.md":k6,"./nodes/iso_theorem/questions/01.md":z6,"./nodes/iso_theorem/questions/02.md":S6,"./nodes/iso_theorem/questions/03.md":T6,"./nodes/normal_subgroups/questions/01.md":j6,"./nodes/normal_subgroups/questions/02.md":q6,"./nodes/normal_subgroups/questions/03.md":M6,"./nodes/poly_rings/questions/01.md":A6,"./nodes/poly_rings/questions/02.md":C6,"./nodes/poly_rings/questions/03.md":P6,"./nodes/relations/questions/01.md":E6,"./nodes/relations/questions/02.md":D6,"./nodes/relations/questions/03.md":R6,"./nodes/ring_homomorphisms/questions/01.md":N6,"./nodes/ring_homomorphisms/questions/02.md":B6,"./nodes/ring_homomorphisms/questions/03.md":I6,"./nodes/rings_intro/questions/01.md":F6,"./nodes/rings_intro/questions/02.md":L6,"./nodes/rings_intro/questions/03.md":O6,"./nodes/sets_functions/questions/01.md":H6,"./nodes/subgroups/questions/01.md":G6,"./nodes/subgroups/questions/02.md":W6,"./nodes/subgroups/questions/03.md":U6,"./nodes/sylow/questions/01.md":V6,"./nodes/sylow/questions/02.md":K6,"./nodes/sylow/questions/03.md":Y6}),r7=Pd(n7,/\.\/nodes\/([^/]+)\/questions\//),i7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Dd,QUESTION_BANK:r7,RAW_EDGES:Q6,RAW_NODES:t7,SCOPE_COLORS:Z6,SCOPE_LABELS:J6,SECTIONS:X6},Symbol.toStringTag,{value:"Module"})),o7={math_pl:z5,abstract_algebra:i7},a7=[Ed,Dd],s7="math_pl",l7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."}};function X(o,n="pl"){const r=l7[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function u7(o,n){const r={},a={};return o.forEach(l=>{r[l.id]=[],a[l.id]=[]}),n.forEach(([l,u])=>{var f,v;(f=r[u])==null||f.push(l),(v=a[l])==null||v.push(u)}),{prereqs:r,dependents:a}}function Rl(o,n){const r=Object.fromEntries(o.map(f=>[f.id,0])),a=Object.fromEntries(o.map(f=>[f.id,[]]));for(const[f,v]of n)r[v]!==void 0&&r[v]++,a[f]!==void 0&&a[f].push(v);const l=Object.fromEntries(o.map(f=>[f.id,0])),u=o.filter(f=>r[f.id]===0).map(f=>f.id);for(;u.length;){const f=u.shift();for(const v of a[f])l[v]=Math.max(l[v],l[f]+1),--r[v]===0&&u.push(v)}return l}const c7={id:"spectral",label:"Spectral"};function d7(o,n,r,a,l=80){const u=o.length,f=Object.fromEntries(o.map((L,V)=>[L.id,V])),v=Array.from({length:u},()=>new Float64Array(u));n.forEach(([L,V])=>{const oe=f[L],Te=f[V];oe==null||Te==null||(v[oe][Te]=1,v[Te][oe]=1)});const p=v.map(L=>L.reduce((V,oe)=>V+oe,0)),x=L=>L.map((V,oe)=>{let Te=0;for(let Se=0;Se<u;Se++)Te+=v[oe][Se]*L[Se];return p[oe]*L[oe]-Te}),b=(L,V)=>L.reduce((oe,Te,Se)=>oe+Te*V[Se],0),_=L=>{const V=Math.sqrt(b(L,L))||1;return L.map(oe=>oe/V)},k=(L,V)=>{let oe=[...L];return V.forEach(Te=>{const Se=b(oe,Te);oe=oe.map((fe,we)=>fe-Se*Te[we])}),_(oe)},T=(L,V=400)=>{let oe=_(Array.from({length:u},()=>Math.random()-.5));oe=k(oe,L);for(let Te=0;Te<V;Te++){const Se=Math.max(...p)+1;oe=k(oe.map((fe,we)=>Se*fe-x(oe)[we]),L)}return oe},P=_(new Array(u).fill(1)),E=T([P]),N=T([P,E]),D=Math.min(...E),O=Math.max(...E),H=Math.min(...N),B=Math.max(...N),W=O-D<1e-6?1:(r-2*l)/(O-D),U=B-H<1e-6?1:(a-2*l)/(B-H);return o.map((L,V)=>({id:L.id,x:l+(E[V]-D)*W,y:l+(N[V]-H)*U,vx:0,vy:0}))}const f7=Object.freeze(Object.defineProperty({__proto__:null,apply:d7,meta:c7},Symbol.toStringTag,{value:"Module"})),m7={id:"topoRank",label:"Topo Rank"},L1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function h7(o,n,r,a,l=80){const u=Rl(o,n),f=Math.max(...o.map(b=>u[b.id]??0),0),v={};for(const b of o){const _=u[b.id]??0;(v[_]??(v[_]=[])).push(b)}for(const b of Object.values(v))b.sort((_,k)=>{const T=L1.indexOf(_.scope),P=L1.indexOf(k.scope);return(T===-1?999:T)-(P===-1?999:P)});const p=r-2*l,x=a-2*l;return o.map(b=>{const _=u[b.id]??0,k=v[_],T=k.indexOf(b);return{id:b.id,x:l+(T+.5)/k.length*p,y:l+_/Math.max(f,1)*x,vx:0,vy:0}})}const p7=Object.freeze(Object.defineProperty({__proto__:null,apply:h7,meta:m7},Symbol.toStringTag,{value:"Module"})),v7={id:"nPartite",label:"N-Partite Grid"};function g7(o,n,r,a,l=80){const u=Rl(o,n),f=Math.max(...o.map(T=>u[T.id]??0),0),v={};for(const T of o){const P=u[T.id]??0;(v[P]??(v[P]=[])).push(T)}const p={};for(const T of o)p[T.id]=[];for(const[T,P]of n)p[P]&&p[P].push(T);const x=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},_=r-2*l,k=a-2*l;for(let T=0;T<=f;T++){const P=v[T]??[];T===0?P.sort((N,D)=>{const O=x.indexOf(N.scope),H=x.indexOf(D.scope);return(O===-1?999:O)-(H===-1?999:H)}):P.sort((N,D)=>{const O=H=>{const B=p[H.id]??[];return B.length===0?r/2:B.reduce((W,U)=>{var L;return W+(((L=b[U])==null?void 0:L.x)??r/2)},0)/B.length};return O(N)-O(D)});const E=l+T/Math.max(f,1)*k;P.forEach((N,D)=>{const O=P.length===1?r/2:l+D/(P.length-1)*_;b[N.id]={x:O,y:E}})}return o.map(T=>{var P,E;return{id:T.id,x:((P=b[T.id])==null?void 0:P.x)??r/2,y:((E=b[T.id])==null?void 0:E.y)??a/2,vx:0,vy:0}})}const Rd=Object.freeze(Object.defineProperty({__proto__:null,apply:g7,meta:v7},Symbol.toStringTag,{value:"Module"})),Nd=[Rd,p7,f7],Bd="nPartite";function y7(o){return Nd.find(n=>n.meta.id===o)??Rd}const ra=1400,Nl=1e3,Si=80,x7=.4,O1=6,w7=.35,H1=.012;function b7(o,n){const r=Rl(o,n),a=Math.max(...o.map(u=>r[u.id]??0),0),l=Object.fromEntries(o.map(u=>[u.id,Si+(r[u.id]??0)/Math.max(a,1)*(Nl-2*Si)]));return{ranks:r,rankY:l}}function $7(o,n){const r=Object.fromEntries(o.map((a,l)=>[a.id,l]));return n.map(([a,l])=>[r[a],r[l]]).filter(([a,l])=>a!=null&&l!=null)}function _7(o){return Math.sqrt(ra*Nl/Math.max(o.length,1))*.9}function k7(o,n,r,a){return y7(o).apply(n,r,ra,Nl,Si).map(f=>({id:f.id,x:f.x+(Math.random()-.5)*20,y:a[f.id]??f.y,vx:0,vy:0}))}function z7(o,n,r,a,{ranks:l,rankY:u,simEdges:f,idealK:v}){const p=o.length,x=new Float64Array(p);for(let b=0;b<p;b++)for(let _=b+1;_<p;_++){if(l[o[b].id]!==l[o[_].id])continue;const k=o[b].x-o[_].x,T=Math.abs(k)||.1,P=v*v/(T*T),E=k<0?-1:1;x[b]+=E*P,x[_]-=E*P}for(const[b,_]of f){const k=o[_].x-o[b].x;x[b]+=k*H1,x[_]-=k*H1}for(let b=0;b<p;b++)x[b]+=(ra/2-o[b].x)*.003;return o.map((b,_)=>{if(b.id===n)return{...b,x:r,y:a,vx:0,vy:0};let k=(b.vx+x[_])*x7;Math.abs(k)>O1&&(k*=O1/Math.abs(k));const T=u[b.id]??b.y,P=b.y+(T-b.y)*w7;return{...b,vx:k,vy:0,x:Math.max(Si,Math.min(ra-Si,b.x+k)),y:P}})}function sl(o=Bd,n=300,r,a){if(!r||r.length===0)return{};const{ranks:l,rankY:u}=b7(r,a??[]),f=$7(r,a??[]),v=_7(r),p={ranks:l,rankY:u,simEdges:f,idealK:v};let x=k7(o,r,a??[],u);for(let b=0;b<n;b++)x=z7(x,null,0,0,p);return Object.fromEntries(x.map(b=>[b.id,{x:b.x,y:b.y}]))}const se={bg:"#0a0e17",surface:"#0d1520",border:"#1e2d45",borderSubtle:"#1a2235",textPrimary:"#f5f6fa",textBody:"#c8d6e5",textMuted:"#8a9dbe",textDim:"#6b7d9a",textFaint:"#3a4d63",knownHi:"#2ecc71",unknownHi:"#e74c3c",frontier:"#f39c12"},Id="'JetBrains Mono','SF Mono','Fira Code',monospace",kn=(o,n)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${se.border}`,background:o?`${n}22`:"transparent",color:o?n:se.textDim,minHeight:32}),$i=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function S7(o){const n=typeof window<"u"&&window.innerWidth<600,[r,a]=J.useState(n?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[l,u]=J.useState("grab"),f=J.useRef(!1),v=J.useRef({x:0,y:0}),p=J.useRef(null),x=J.useRef(null),b=J.useCallback(B=>{B.preventDefault();const W=B.deltaY>0?.9:1.1;a(U=>{const L=Math.max(.15,Math.min(5,U.scale*W)),V=B.clientX,oe=B.clientY,Te=V-(V-U.x)/U.scale*L,Se=oe-(oe-U.y)/U.scale*L;return{x:Te,y:Se,scale:L}})},[]),_=J.useCallback((B,W)=>({x:(B-r.x)/r.scale,y:(W-r.y)/r.scale}),[r]),k=J.useCallback((B,W)=>{f.current=!0,u("grabbing"),v.current={x:B-r.x,y:W-r.y}},[r]),T=J.useCallback(B=>f.current?(a(W=>({...W,x:B.clientX-v.current.x,y:B.clientY-v.current.y})),!0):!1,[]),P=J.useCallback(()=>{f.current=!1,u("grab")},[]),E=(B,W)=>{const U=B.clientX-W.clientX,L=B.clientY-W.clientY;return Math.sqrt(U*U+L*L)},N=(B,W)=>({x:(B.clientX+W.clientX)/2,y:(B.clientY+W.clientY)/2}),D=J.useCallback(B=>{B.touches.length===1?(f.current=!0,a(W=>(v.current={x:B.touches[0].clientX-W.x,y:B.touches[0].clientY-W.y},W)),p.current=null,x.current=null):B.touches.length===2&&(f.current=!1,p.current=E(B.touches[0],B.touches[1]),x.current=N(B.touches[0],B.touches[1]))},[]),O=J.useCallback(B=>{if(B.preventDefault(),B.touches.length===1&&f.current)a(W=>({...W,x:B.touches[0].clientX-v.current.x,y:B.touches[0].clientY-v.current.y}));else if(B.touches.length===2&&p.current!==null){const W=E(B.touches[0],B.touches[1]),U=N(B.touches[0],B.touches[1]),L=W/p.current;a(V=>{const oe=Math.max(.15,Math.min(5,V.scale*L)),Te=x.current.x,Se=x.current.y,fe=Te-(Te-V.x)/V.scale*oe,we=Se-(Se-V.y)/V.scale*oe;return{x:fe,y:we,scale:oe}}),p.current=W,x.current=U}},[]),H=J.useCallback(()=>{f.current=!1,p.current=null,x.current=null},[]);return J.useEffect(()=>{const B=o.current;if(B)return B.addEventListener("wheel",b,{passive:!1}),B.addEventListener("touchstart",D,{passive:!1}),B.addEventListener("touchmove",O,{passive:!1}),B.addEventListener("touchend",H,{passive:!1}),()=>{B.removeEventListener("wheel",b),B.removeEventListener("touchstart",D),B.removeEventListener("touchmove",O),B.removeEventListener("touchend",H)}},[o,b,D,O,H]),{viewTransform:r,setViewTransform:a,toCanvas:_,isPanning:f,panStart:v,startPan:k,cursorStyle:l,setCursorStyle:u,handleMouseMove:T,handleMouseUp:P,handleWheel:b}}function T7(o,n,r,a){const l=J.useRef(null),u=J.useRef({x:0,y:0}),f=J.useCallback((x,b,_)=>{const k=o(b,_),T=n.find(P=>P.id===x);T&&(l.current=x,u.current={x:k.x-T.x,y:k.y-T.y},a==null||a("grabbing"))},[o,n,a]),v=J.useCallback((x,b)=>{if(!l.current)return!1;const _=o(x,b),k=l.current;return r(T=>({...T,[k]:{x:_.x-u.current.x,y:_.y-u.current.y}})),!0},[o,r]),p=J.useCallback(()=>{l.current=null,a==null||a("grab")},[a]);return{draggingNode:l,startNodeDrag:f,handleDragMove:v,handleDragEnd:p}}const Fd="wizmat_v1_";function j7(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function q7(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function _n(o,n){const r=Fd+o,[a,l]=J.useState(()=>{try{const f=localStorage.getItem(r);return f===null?n:q7(f,n)}catch{return n}});J.useEffect(()=>{try{localStorage.setItem(r,j7(a))}catch{}},[r,a]);const u=J.useCallback(f=>{l(v=>typeof f=="function"?f(v):f)},[]);return[a,u]}function M7(){try{Object.keys(localStorage).filter(o=>o.startsWith(Fd)).forEach(o=>localStorage.removeItem(o))}catch{}}function A7(o,n,r){var u;const a={...n},l=[o];for(;l.length;){const f=l.shift();a[f]!=="known"&&(a[f]="known",(u=r.prereqs[f])==null||u.forEach(v=>{a[v]!=="known"&&l.push(v)}))}return a}function G1(o,n,r){var u;const a={...n},l=[o];for(;l.length;){const f=l.shift();a[f]!=="unknown"&&(a[f]="unknown",(u=r.dependents[f])==null||u.forEach(v=>{a[v]!=="unknown"&&l.push(v)}))}return a}function C7(o,n,r){return o.filter(a=>n[a.id]!=="known"&&n[a.id]!=="unknown").filter(a=>(r.prereqs[a.id]??[]).every(l=>n[l]==="known")).map(a=>a.id)}function P7(o,n,r,a=.5){var l,u,f;try{const v=1-a,p=o.filter(_=>n[_.id]!=="known"&&n[_.id]!=="unknown");if(p.length===0)return null;const x=p.map(_=>{const k=Ld(_.id,n,r),T=Od(_.id,n,r),P=a*k+v*T;return{id:_.id,erv:P||0,ancestorsToReveal:k,descendantsToReveal:T}});return x.sort((_,k)=>k.erv-_.erv),((l=x[0])==null?void 0:l.id)||((u=p[0])==null?void 0:u.id)||null}catch(v){return console.error("pickNextQuestion error:",v),((f=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown")[0])==null?void 0:f.id)||null}}function Ld(o,n,r){const a=new Set,l=[...r.prereqs[o]??[]];let u=0;for(;l.length>0;){const f=l.shift();if(a.has(f))continue;a.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const v=r.prereqs[f]??[];for(const p of v)a.has(p)||l.push(p)}return u}function Od(o,n,r){const a=new Set,l=[...r.dependents[o]??[]];let u=0;for(;l.length>0;){const f=l.shift();if(a.has(f))continue;a.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const v=r.dependents[f]??[];for(const p of v)a.has(p)||l.push(p)}return u}function E7(o,n,r,a=.5){try{const l=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown");if(l.length===0)return 0;const u=1-a;let f=0;for(const x of l){const b=Ld(x.id,n,r),_=Od(x.id,n,r),k=a*b+u*_;f+=k||0}if(!f||f===0)return l.length;const v=l.length,p=v*v/f;return isNaN(p)?l.length:Math.ceil(p)}catch(l){return console.error("estimateRemainingQuestions error:",l),null}}function D7(o,n,r){const a={...o};for(const[l,u]of Object.entries(n)){const f=a[l]??{alpha:1,beta:1};a[l]={alpha:f.alpha+(r?u:0),beta:f.beta+(r?0:u)}}return a}function R7(o,n){const r={};for(const a of o){const l=n[a]??{alpha:1,beta:1},u=l.alpha+l.beta,f=l.alpha/u;f>.75&&u>2?r[a]="known":f<.25&&u>2?r[a]="unknown":r[a]="uncertain"}return r}function N7(o,n,r){const a=new Set,l=new Set(r.map(f=>f.id)),u=[o];for(;u.length;){const f=u.shift();if(!a.has(f)&&l.has(f)){a.add(f);for(const v of n.prereqs[f]??[])a.has(v)||u.push(v)}}return a}function B7(o,n,r,a,l){var v;const u=o.filter(p=>r[p]==="uncertain");if(u.length===0)return null;const f=u.map(p=>{const x=n[p]??{alpha:1,beta:1},b=x.alpha+x.beta,_=x.alpha/b,k=1-_,T=new Set(o);let P=0;const E=[...a.prereqs[p]??[]],N=new Set;for(;E.length;){const W=E.shift();if(!N.has(W)){N.add(W),T.has(W)&&r[W]==="uncertain"&&P++;for(const U of a.prereqs[W]??[])N.has(U)||E.push(U)}}let D=0;const O=[...a.dependents[p]??[]],H=new Set;for(;O.length;){const W=O.shift();if(!H.has(W)){H.add(W),T.has(W)&&r[W]==="uncertain"&&D++;for(const U of a.dependents[W]??[])H.has(U)||O.push(U)}}const B=_*P+k*D;return{id:p,erv:B,strength:b}});return f.sort((p,x)=>Math.abs(p.erv-x.erv)>.01?x.erv-p.erv:p.strength-x.strength),((v=f[0])==null?void 0:v.id)??u[0]}function I7(o,n){return o.every(r=>n[r]!=="uncertain")}function F7(o,n){return o.every(r=>n[r.id]==="known"||n[r.id]==="unknown")}function L7(o,n,r){const a=r?`${r}_`:"",[l,u]=_n(`${a}diagMode`,!1),[f,v]=_n(`${a}diagSubMode`,"quick"),[p,x]=_n(`${a}belief`,{}),[b,_]=_n(`${a}targetNode`,null),[k,T]=_n(`${a}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[P,E]=_n(`${a}answeredQuestions`,new Set),[N,D]=_n(`${a}betaBeliefs`,{}),[O,H]=_n(`${a}quizNode`,null),B=J.useMemo(()=>{const M=k.correct+k.incorrect;return M===0?.5:(k.correct+.5)/(M+1)},[k]),W=k.questionsAnswered,U=J.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents)])].map(G=>({id:G})),[o]),L=J.useMemo(()=>l&&f==="quick"?C7(U,p,o):[],[l,f,p,o,U]),V=J.useMemo(()=>Object.keys(p).length>0||k.questionsAnswered>0,[p,k]),oe=V?L:[],Te=J.useMemo(()=>l&&f==="quick"?P7(U,p,o,B):null,[l,f,p,o,B,U]),Se=J.useMemo(()=>l&&f==="quick"?E7(U,p,o,B):null,[l,f,p,o,B,U]),fe=J.useMemo(()=>l&&f==="quick"&&V&&F7(U,p),[l,f,V,p,U]),we=J.useMemo(()=>!l||f!=="deepdive"||!b?[]:[...N7(b,o,U)],[l,f,b,o,U]),je=J.useMemo(()=>f!=="deepdive"?{}:R7(we,N),[f,we,N]),We=J.useMemo(()=>!l||f!=="deepdive"||we.length===0?null:B7(we,N,je,o),[l,f,we,N,je,o,U]),Ye=J.useMemo(()=>!l||f!=="deepdive"||we.length===0?!1:I7(we,je),[l,f,we,je]),Ie=J.useCallback((M,G)=>l?f==="deepdive"?we.includes(M)?(je[M]!=="uncertain"||H(M),!0):!1:p[M]==="unknown"?!0:G?(x(ge=>G1(M,ge,o)),H(null),!0):p[M]==="known"?(x(ge=>{const $e={...ge};return delete $e[M],$e}),H(null),!0):(H(M),!0):!1,[l,f,p,o,we,je]),ae=J.useCallback((M,G,ge,$e)=>{if(f==="deepdive"){const be=(ge==null?void 0:ge.tests)??{[M]:1};D(Ae=>D7(Ae,be,G))}else x(be=>G?A7(M,be,o):G1(M,be,o));typeof $e=="number"&&E(be=>new Set([...be,`${M}:${$e}`])),T(be=>({correct:be.correct+(G?1:0),incorrect:be.incorrect+(G?0:1),questionsAnswered:be.questionsAnswered+1})),H(null)},[f,o]),xe=J.useCallback(()=>{M7(),u(!1),v("quick"),x({}),D({}),H(null),_(null),T({correct:0,incorrect:0,questionsAnswered:0}),E(new Set)},[]),ue=J.useCallback(M=>{v("deepdive"),_(M),D({}),x({}),H(null),T({correct:0,incorrect:0,questionsAnswered:0}),E(new Set),u(!0)},[]);return{diagMode:l,setDiagMode:u,mode:f,setMode:v,quizNode:O,setQuizNode:H,questionsAnswered:W,answeredQuestions:P,setAnsweredQuestions:E,getAnsweredIndices:M=>{const G=[];return P.forEach(ge=>{const[$e,be]=ge.split(":");$e===M&&G.push(parseInt(be,10))}),G},handleDiagClick:Ie,handleQuizAnswer:ae,resetDiagnostic:xe,startDeepDive:ue,targetNode:b,belief:p,frontier:L,visibleFrontier:oe,hasStarted:V,nextSuggestedId:Te,expectedRemaining:Se,pCorrect:B,sessionComplete:fe,betaBeliefs:N,subgraphIds:we,ddClassification:je,ddNextNodeId:We,ddComplete:Ye}}const W1=640;function O7(){const[o,n]=J.useState(()=>typeof window<"u"&&window.innerWidth<W1);return J.useEffect(()=>{const r=window.matchMedia(`(max-width: ${W1-1}px)`),a=l=>n(l.matches);return r.addEventListener("change",a),n(r.matches),()=>r.removeEventListener("change",a)},[]),o}function U1(o){return 6+o.level*2}function H7({edges:o,nodes:n,highlightedIds:r}){const a=J.useMemo(()=>Object.fromEntries(n.map(l=>[l.id,l])),[n]);return $.jsx("g",{children:o.map(([l,u])=>{const f=a[l],v=a[u];if(!f||!v)return null;const p=(r==null?void 0:r.has(l))&&(r==null?void 0:r.has(u)),x=r&&!p,b=v.x-f.x,_=v.y-f.y,k=Math.sqrt(b*b+_*_)||1,T=U1(v)+3,P=v.x-b/k*T,E=v.y-_/k*T,N=U1(f)+2,D=f.x+b/k*N,O=f.y+_/k*N,H=x?"#0f1825":p?"#4a9eff":"#2a3f5a",B=p?1.8:1,W=x?.15:p?1:.55,U=x?"url(#arrow-dim)":p?"url(#arrow-hi)":"url(#arrow-default)";return $.jsx("line",{x1:D,y1:O,x2:P,y2:E,stroke:H,strokeWidth:B,opacity:W,markerEnd:U},`${l}-${u}`)})})}function G7(o){return 6+o.level*2}function W7(o){return o<.4?8:o<.65?13:o<1?18:28}function U7({nodes:o,filteredIds:n,highlightedIds:r,selected:a,onSelect:l,onHover:u,lang:f,diagMode:v,belief:p,frontier:x,scale:b,scopeColors:_}){return $.jsx("g",{children:o.map(k=>{const T=G7(k),P=(_==null?void 0:_[k.scope])||"#4a9eff",E=n&&!n.has(k.id),N=r==null?void 0:r.has(k.id),D=a===k.id,O=r&&!N||E,H=f==="pl"?k.labelPl:k.label,B=W7(b??1);let W=P,U=O?.15:.9,L=O?.2:.85,V=null,oe=2;if(v){const Te=p[k.id],Se=x.includes(k.id);U=E?.1:.9,L=E?.15:.9,Te==="known"?(W="#27ae60",V="#2ecc71"):Te==="unknown"?(W="#c0392b",U=E?.1:.5,V="#e74c3c"):Se?(W="#f39c12",V="#f1c40f",oe=3):(W=P,U=E?.1:.35)}return $.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>l(k.id===a?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(D||v&&V)&&$.jsx("circle",{cx:k.x,cy:k.y,r:T+(D?5:4),fill:"none",stroke:D?P:V,strokeWidth:D?2:oe,opacity:D?.5:.9}),$.jsx("circle",{cx:k.x,cy:k.y,r:T,fill:W,fillOpacity:U,stroke:!v&&(N||D)?P:"none",strokeWidth:1.5}),$.jsx("text",{x:k.x,y:k.y+T+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:L,style:{pointerEvents:"none",userSelect:"none"},children:H.length>B?H.slice(0,B-1)+"…":H})]},k.id)})})}function V7({nodeId:o,nodes:n,adjacency:r,lang:a,SCOPE_COLORS:l,SCOPE_LABELS:u,SECTIONS:f,isMobile:v,onClose:p}){var O,H;const x=n.find(B=>B.id===o);if(!x)return null;const b=(l==null?void 0:l[x.scope])??"#4a9eff",_=a==="pl"?x.labelPl:x.label,k=r.prereqs[o]||[],T=r.dependents[o]||[],P=Object.fromEntries(n.map(B=>[B.id,B])),E=B=>{var W,U;return a==="pl"?(W=P[B])==null?void 0:W.labelPl:(U=P[B])==null?void 0:U.label},N=v?12:10,D=$.jsxs($.Fragment,{children:[v&&$.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:$.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[$.jsx("div",{style:{color:b,fontWeight:700,fontSize:v?16:13,marginBottom:4},children:_}),v&&$.jsx("button",{onClick:p,style:{background:"none",border:"none",color:se.textDim,fontSize:22,cursor:"pointer",lineHeight:1,padding:"0 4px"},children:"×"})]}),$.jsxs("div",{style:{color:se.textDim,fontSize:N,marginBottom:12,lineHeight:1.6},children:[(O=f==null?void 0:f[x.section])==null?void 0:O.label," · ",(H=u==null?void 0:u[x.scope])==null?void 0:H[a==="pl"?"pl":"en"]," · ",X("level",a)," ",x.level]}),k.length>0?$.jsxs($.Fragment,{children:[$.jsx("div",{style:{color:"#4a9eff",fontSize:N,fontWeight:600,marginBottom:6},children:X("prerequisites",a)}),k.map(B=>$.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:N,lineHeight:v?2:1.7},children:["← ",E(B)]},B))]}):$.jsx("div",{style:{color:se.textFaint,fontSize:N,fontStyle:"italic"},children:X("noPrereqs",a)}),T.length>0?$.jsxs("div",{style:{marginTop:12},children:[$.jsx("div",{style:{color:"#3dc9b0",fontSize:N,fontWeight:600,marginBottom:6},children:X("enables",a)}),T.map(B=>$.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:N,lineHeight:v?2:1.7},children:["→ ",E(B)]},B))]}):$.jsx("div",{style:{color:se.textFaint,fontSize:N,fontStyle:"italic",marginTop:10},children:X("noDependents",a)})]});return v?$.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:`1px solid ${b}40`,borderRadius:"14px 14px 0 0",padding:"16px 16px 32px",zIndex:30,maxHeight:"60vh",overflowY:"auto"},children:D}):$.jsx("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:`1px solid ${b}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:se.textBody,lineHeight:1.6,zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:D})}class Gt{constructor(n,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=a}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Gt(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Qt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Qt(r,Gt.range(this,n))}}class te{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var a="KaTeX parse error: "+n,l,u,f=r&&r.loc;if(f&&f.start<=f.end){var v=f.lexer.input;l=f.start,u=f.end,l===v.length?a+=" at end of input: ":a+=" at position "+(l+1)+": ";var p=v.slice(l,u).replace(/[^]/g,"$&̲"),x;l>15?x="…"+v.slice(l-15,l):x=v.slice(0,l);var b;u+15<v.length?b=v.slice(u,u+15)+"…":b=v.slice(u),a+=x+p+b}var _=new Error(a);return _.name="ParseError",_.__proto__=te.prototype,_.position=l,l!=null&&u!=null&&(_.length=u-l),_.rawMessage=n,_}}te.prototype.__proto__=Error.prototype;var K7=/([A-Z])/g,Bl=o=>o.replace(K7,"-$1").toLowerCase(),Y7={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Q7=/[&><"']/g,Mt=o=>String(o).replace(Q7,n=>Y7[n]),ki=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?ki(o.body[0]):o:o.type==="font"?ki(o.body):o,X7=new Set(["mathord","textord","atom"]),Wn=o=>X7.has(ki(o).type),Z7=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},ta={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function J7(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Il{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in ta)if(ta.hasOwnProperty(r)){var a=ta[r];this[r]=n[r]!==void 0?a.processor?a.processor(n[r]):n[r]:J7(a)}}reportNonstrict(n,r,a){var l=this.strict;if(typeof l=="function"&&(l=l(n,r,a)),!(!l||l==="ignore")){if(l===!0||l==="error")throw new te("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),a);l==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,a){var l=this.strict;if(typeof l=="function")try{l=l(n,r,a)}catch{l="error"}return!l||l==="ignore"?!1:l===!0||l==="error"?!0:l==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=Z7(n.url);if(r==null)return!1;n.protocol=r}var a=typeof this.trust=="function"?this.trust(n):this.trust;return!!a}}class br{constructor(n,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=a}sup(){return zn[e8[this.id]]}sub(){return zn[t8[this.id]]}fracNum(){return zn[n8[this.id]]}fracDen(){return zn[r8[this.id]]}cramp(){return zn[i8[this.id]]}text(){return zn[o8[this.id]]}isTight(){return this.size>=2}}var Fl=0,ia=1,j0=2,Hn=3,Ti=4,ln=5,q0=6,Rt=7,zn=[new br(Fl,0,!1),new br(ia,0,!0),new br(j0,1,!1),new br(Hn,1,!0),new br(Ti,2,!1),new br(ln,2,!0),new br(q0,3,!1),new br(Rt,3,!0)],e8=[Ti,ln,Ti,ln,q0,Rt,q0,Rt],t8=[ln,ln,ln,ln,Rt,Rt,Rt,Rt],n8=[j0,Hn,Ti,ln,q0,Rt,q0,Rt],r8=[Hn,Hn,ln,ln,Rt,Rt,Rt,Rt],i8=[ia,ia,Hn,Hn,ln,ln,Rt,Rt],o8=[Fl,ia,j0,Hn,j0,Hn,j0,Hn],Ce={DISPLAY:zn[Fl],TEXT:zn[j0],SCRIPT:zn[Ti],SCRIPTSCRIPT:zn[q0]},kl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function a8(o){for(var n=0;n<kl.length;n++)for(var r=kl[n],a=0;a<r.blocks.length;a++){var l=r.blocks[a];if(o>=l[0]&&o<=l[1])return r.name}return null}var na=[];kl.forEach(o=>o.blocks.forEach(n=>na.push(...n)));function Hd(o){for(var n=0;n<na.length;n+=2)if(o>=na[n]&&o<=na[n+1])return!0;return!1}var T0=80,s8=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},l8=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},u8=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},c8=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},d8=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},f8=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},m8=function(n,r,a){var l=a-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+l+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},h8=function(n,r,a){r=1e3*r;var l="";switch(n){case"sqrtMain":l=s8(r,T0);break;case"sqrtSize1":l=l8(r,T0);break;case"sqrtSize2":l=u8(r,T0);break;case"sqrtSize3":l=c8(r,T0);break;case"sqrtSize4":l=d8(r,T0);break;case"sqrtTall":l=m8(r,T0,a)}return l},p8=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},V1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},v8=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class qi{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var Sn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Uo={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},K1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function g8(o,n){Sn[o]=n}function Ll(o,n,r){if(!Sn[n])throw new Error("Font metrics not found for font: "+n+".");var a=o.charCodeAt(0),l=Sn[n][a];if(!l&&o[0]in K1&&(a=K1[o[0]].charCodeAt(0),l=Sn[n][a]),!l&&r==="text"&&Hd(a)&&(l=Sn[n][77]),l)return{depth:l[0],height:l[1],italic:l[2],skew:l[3],width:l[4]}}var ll={};function y8(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!ll[n]){var r=ll[n]={cssEmPerMu:Uo.quad[n]/18};for(var a in Uo)Uo.hasOwnProperty(a)&&(r[a]=Uo[a][n])}return ll[n]}var x8=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Y1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Q1=function(n,r){return r.size<2?n:x8[n-1][r.size-1]};class On{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||On.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Y1[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a]);return new On(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:Q1(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Y1[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=Q1(On.BASESIZE,n);return this.size===r&&this.textSize===On.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==On.BASESIZE?["sizing","reset-size"+this.size,"size"+On.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=y8(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}On.BASESIZE=6;var zl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},w8={ex:!0,em:!0,mu:!0},Gd=function(n){return typeof n!="string"&&(n=n.unit),n in zl||n in w8||n==="ex"},at=function(n,r){var a;if(n.unit in zl)a=zl[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var l;if(r.style.isTight()?l=r.havingStyle(r.style.text()):l=r,n.unit==="ex")a=l.fontMetrics().xHeight;else if(n.unit==="em")a=l.fontMetrics().quad;else throw new te("Invalid unit: '"+n.unit+"'");l!==r&&(a*=l.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*a,r.maxSize)},le=function(n){return+n.toFixed(4)+"em"},kr=function(n){return n.filter(r=>r).join(" ")},Wd=function(n,r,a){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var l=r.getColor();l&&(this.style.color=l)}},Ud=function(n){var r=document.createElement(n);r.className=kr(this.classes);for(var a in this.style)this.style.hasOwnProperty(a)&&(r.style[a]=this.style[a]);for(var l in this.attributes)this.attributes.hasOwnProperty(l)&&r.setAttribute(l,this.attributes[l]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},b8=/[\s"'>/=\x00-\x1f]/,Vd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+Mt(kr(this.classes))+'"');var a="";for(var l in this.style)this.style.hasOwnProperty(l)&&(a+=Bl(l)+":"+this.style[l]+";");a&&(r+=' style="'+Mt(a)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(b8.test(u))throw new te("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Mt(this.attributes[u])+'"'}r+=">";for(var f=0;f<this.children.length;f++)r+=this.children[f].toMarkup();return r+="</"+n+">",r};class Mi{constructor(n,r,a,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Wd.call(this,n,a,l),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Ud.call(this,"span")}toMarkup(){return Vd.call(this,"span")}}class Ol{constructor(n,r,a,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Wd.call(this,r,l),this.children=a||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Ud.call(this,"a")}toMarkup(){return Vd.call(this,"a")}}class $8{constructor(n,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=a}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+Mt(this.src)+'"'+(' alt="'+Mt(this.alt)+'"'),r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=Bl(a)+":"+this.style[a]+";");return r&&(n+=' style="'+Mt(r)+'"'),n+="'/>",n}}var _8={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class un{constructor(n,r,a,l,u,f,v,p){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=a||0,this.italic=l||0,this.skew=u||0,this.width=f||0,this.classes=v||[],this.style=p||{},this.maxFontSize=0;var x=a8(this.text.charCodeAt(0));x&&this.classes.push(x+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=_8[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=le(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=kr(this.classes));for(var a in this.style)this.style.hasOwnProperty(a)&&(r=r||document.createElement("span"),r.style[a]=this.style[a]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=Mt(kr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+this.italic+"em;");for(var l in this.style)this.style.hasOwnProperty(l)&&(a+=Bl(l)+":"+this.style[l]+";");a&&(n=!0,r+=' style="'+Mt(a)+'"');var u=Mt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Gn{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);for(var l=0;l<this.children.length;l++)r.appendChild(this.children[l].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');n+=">";for(var a=0;a<this.children.length;a++)n+=this.children[a].toMarkup();return n+="</svg>",n}}class zr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",V1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Mt(this.alternate)+'"/>':'<path d="'+Mt(V1[this.pathName])+'"/>'}}class Sl{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');return n+="/>",n}}function X1(o){if(o instanceof un)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function k8(o){if(o instanceof Mi)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var z8={bin:1,close:1,inner:1,open:1,punct:1,rel:1},S8={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ze={math:{},text:{}};function d(o,n,r,a,l,u){Ze[o][l]={font:n,group:r,replace:a},u&&a&&(Ze[o][a]=Ze[o][l])}var h="math",Y="text",g="main",S="ams",nt="accent-token",me="bin",Nt="close",C0="inner",ze="mathord",pt="op-token",Xt="open",ua="punct",j="rel",Un="spacing",A="textord";d(h,g,j,"≡","\\equiv",!0);d(h,g,j,"≺","\\prec",!0);d(h,g,j,"≻","\\succ",!0);d(h,g,j,"∼","\\sim",!0);d(h,g,j,"⊥","\\perp");d(h,g,j,"⪯","\\preceq",!0);d(h,g,j,"⪰","\\succeq",!0);d(h,g,j,"≃","\\simeq",!0);d(h,g,j,"∣","\\mid",!0);d(h,g,j,"≪","\\ll",!0);d(h,g,j,"≫","\\gg",!0);d(h,g,j,"≍","\\asymp",!0);d(h,g,j,"∥","\\parallel");d(h,g,j,"⋈","\\bowtie",!0);d(h,g,j,"⌣","\\smile",!0);d(h,g,j,"⊑","\\sqsubseteq",!0);d(h,g,j,"⊒","\\sqsupseteq",!0);d(h,g,j,"≐","\\doteq",!0);d(h,g,j,"⌢","\\frown",!0);d(h,g,j,"∋","\\ni",!0);d(h,g,j,"∝","\\propto",!0);d(h,g,j,"⊢","\\vdash",!0);d(h,g,j,"⊣","\\dashv",!0);d(h,g,j,"∋","\\owns");d(h,g,ua,".","\\ldotp");d(h,g,ua,"⋅","\\cdotp");d(h,g,A,"#","\\#");d(Y,g,A,"#","\\#");d(h,g,A,"&","\\&");d(Y,g,A,"&","\\&");d(h,g,A,"ℵ","\\aleph",!0);d(h,g,A,"∀","\\forall",!0);d(h,g,A,"ℏ","\\hbar",!0);d(h,g,A,"∃","\\exists",!0);d(h,g,A,"∇","\\nabla",!0);d(h,g,A,"♭","\\flat",!0);d(h,g,A,"ℓ","\\ell",!0);d(h,g,A,"♮","\\natural",!0);d(h,g,A,"♣","\\clubsuit",!0);d(h,g,A,"℘","\\wp",!0);d(h,g,A,"♯","\\sharp",!0);d(h,g,A,"♢","\\diamondsuit",!0);d(h,g,A,"ℜ","\\Re",!0);d(h,g,A,"♡","\\heartsuit",!0);d(h,g,A,"ℑ","\\Im",!0);d(h,g,A,"♠","\\spadesuit",!0);d(h,g,A,"§","\\S",!0);d(Y,g,A,"§","\\S");d(h,g,A,"¶","\\P",!0);d(Y,g,A,"¶","\\P");d(h,g,A,"†","\\dag");d(Y,g,A,"†","\\dag");d(Y,g,A,"†","\\textdagger");d(h,g,A,"‡","\\ddag");d(Y,g,A,"‡","\\ddag");d(Y,g,A,"‡","\\textdaggerdbl");d(h,g,Nt,"⎱","\\rmoustache",!0);d(h,g,Xt,"⎰","\\lmoustache",!0);d(h,g,Nt,"⟯","\\rgroup",!0);d(h,g,Xt,"⟮","\\lgroup",!0);d(h,g,me,"∓","\\mp",!0);d(h,g,me,"⊖","\\ominus",!0);d(h,g,me,"⊎","\\uplus",!0);d(h,g,me,"⊓","\\sqcap",!0);d(h,g,me,"∗","\\ast");d(h,g,me,"⊔","\\sqcup",!0);d(h,g,me,"◯","\\bigcirc",!0);d(h,g,me,"∙","\\bullet",!0);d(h,g,me,"‡","\\ddagger");d(h,g,me,"≀","\\wr",!0);d(h,g,me,"⨿","\\amalg");d(h,g,me,"&","\\And");d(h,g,j,"⟵","\\longleftarrow",!0);d(h,g,j,"⇐","\\Leftarrow",!0);d(h,g,j,"⟸","\\Longleftarrow",!0);d(h,g,j,"⟶","\\longrightarrow",!0);d(h,g,j,"⇒","\\Rightarrow",!0);d(h,g,j,"⟹","\\Longrightarrow",!0);d(h,g,j,"↔","\\leftrightarrow",!0);d(h,g,j,"⟷","\\longleftrightarrow",!0);d(h,g,j,"⇔","\\Leftrightarrow",!0);d(h,g,j,"⟺","\\Longleftrightarrow",!0);d(h,g,j,"↦","\\mapsto",!0);d(h,g,j,"⟼","\\longmapsto",!0);d(h,g,j,"↗","\\nearrow",!0);d(h,g,j,"↩","\\hookleftarrow",!0);d(h,g,j,"↪","\\hookrightarrow",!0);d(h,g,j,"↘","\\searrow",!0);d(h,g,j,"↼","\\leftharpoonup",!0);d(h,g,j,"⇀","\\rightharpoonup",!0);d(h,g,j,"↙","\\swarrow",!0);d(h,g,j,"↽","\\leftharpoondown",!0);d(h,g,j,"⇁","\\rightharpoondown",!0);d(h,g,j,"↖","\\nwarrow",!0);d(h,g,j,"⇌","\\rightleftharpoons",!0);d(h,S,j,"≮","\\nless",!0);d(h,S,j,"","\\@nleqslant");d(h,S,j,"","\\@nleqq");d(h,S,j,"⪇","\\lneq",!0);d(h,S,j,"≨","\\lneqq",!0);d(h,S,j,"","\\@lvertneqq");d(h,S,j,"⋦","\\lnsim",!0);d(h,S,j,"⪉","\\lnapprox",!0);d(h,S,j,"⊀","\\nprec",!0);d(h,S,j,"⋠","\\npreceq",!0);d(h,S,j,"⋨","\\precnsim",!0);d(h,S,j,"⪹","\\precnapprox",!0);d(h,S,j,"≁","\\nsim",!0);d(h,S,j,"","\\@nshortmid");d(h,S,j,"∤","\\nmid",!0);d(h,S,j,"⊬","\\nvdash",!0);d(h,S,j,"⊭","\\nvDash",!0);d(h,S,j,"⋪","\\ntriangleleft");d(h,S,j,"⋬","\\ntrianglelefteq",!0);d(h,S,j,"⊊","\\subsetneq",!0);d(h,S,j,"","\\@varsubsetneq");d(h,S,j,"⫋","\\subsetneqq",!0);d(h,S,j,"","\\@varsubsetneqq");d(h,S,j,"≯","\\ngtr",!0);d(h,S,j,"","\\@ngeqslant");d(h,S,j,"","\\@ngeqq");d(h,S,j,"⪈","\\gneq",!0);d(h,S,j,"≩","\\gneqq",!0);d(h,S,j,"","\\@gvertneqq");d(h,S,j,"⋧","\\gnsim",!0);d(h,S,j,"⪊","\\gnapprox",!0);d(h,S,j,"⊁","\\nsucc",!0);d(h,S,j,"⋡","\\nsucceq",!0);d(h,S,j,"⋩","\\succnsim",!0);d(h,S,j,"⪺","\\succnapprox",!0);d(h,S,j,"≆","\\ncong",!0);d(h,S,j,"","\\@nshortparallel");d(h,S,j,"∦","\\nparallel",!0);d(h,S,j,"⊯","\\nVDash",!0);d(h,S,j,"⋫","\\ntriangleright");d(h,S,j,"⋭","\\ntrianglerighteq",!0);d(h,S,j,"","\\@nsupseteqq");d(h,S,j,"⊋","\\supsetneq",!0);d(h,S,j,"","\\@varsupsetneq");d(h,S,j,"⫌","\\supsetneqq",!0);d(h,S,j,"","\\@varsupsetneqq");d(h,S,j,"⊮","\\nVdash",!0);d(h,S,j,"⪵","\\precneqq",!0);d(h,S,j,"⪶","\\succneqq",!0);d(h,S,j,"","\\@nsubseteqq");d(h,S,me,"⊴","\\unlhd");d(h,S,me,"⊵","\\unrhd");d(h,S,j,"↚","\\nleftarrow",!0);d(h,S,j,"↛","\\nrightarrow",!0);d(h,S,j,"⇍","\\nLeftarrow",!0);d(h,S,j,"⇏","\\nRightarrow",!0);d(h,S,j,"↮","\\nleftrightarrow",!0);d(h,S,j,"⇎","\\nLeftrightarrow",!0);d(h,S,j,"△","\\vartriangle");d(h,S,A,"ℏ","\\hslash");d(h,S,A,"▽","\\triangledown");d(h,S,A,"◊","\\lozenge");d(h,S,A,"Ⓢ","\\circledS");d(h,S,A,"®","\\circledR");d(Y,S,A,"®","\\circledR");d(h,S,A,"∡","\\measuredangle",!0);d(h,S,A,"∄","\\nexists");d(h,S,A,"℧","\\mho");d(h,S,A,"Ⅎ","\\Finv",!0);d(h,S,A,"⅁","\\Game",!0);d(h,S,A,"‵","\\backprime");d(h,S,A,"▲","\\blacktriangle");d(h,S,A,"▼","\\blacktriangledown");d(h,S,A,"■","\\blacksquare");d(h,S,A,"⧫","\\blacklozenge");d(h,S,A,"★","\\bigstar");d(h,S,A,"∢","\\sphericalangle",!0);d(h,S,A,"∁","\\complement",!0);d(h,S,A,"ð","\\eth",!0);d(Y,g,A,"ð","ð");d(h,S,A,"╱","\\diagup");d(h,S,A,"╲","\\diagdown");d(h,S,A,"□","\\square");d(h,S,A,"□","\\Box");d(h,S,A,"◊","\\Diamond");d(h,S,A,"¥","\\yen",!0);d(Y,S,A,"¥","\\yen",!0);d(h,S,A,"✓","\\checkmark",!0);d(Y,S,A,"✓","\\checkmark");d(h,S,A,"ℶ","\\beth",!0);d(h,S,A,"ℸ","\\daleth",!0);d(h,S,A,"ℷ","\\gimel",!0);d(h,S,A,"ϝ","\\digamma",!0);d(h,S,A,"ϰ","\\varkappa");d(h,S,Xt,"┌","\\@ulcorner",!0);d(h,S,Nt,"┐","\\@urcorner",!0);d(h,S,Xt,"└","\\@llcorner",!0);d(h,S,Nt,"┘","\\@lrcorner",!0);d(h,S,j,"≦","\\leqq",!0);d(h,S,j,"⩽","\\leqslant",!0);d(h,S,j,"⪕","\\eqslantless",!0);d(h,S,j,"≲","\\lesssim",!0);d(h,S,j,"⪅","\\lessapprox",!0);d(h,S,j,"≊","\\approxeq",!0);d(h,S,me,"⋖","\\lessdot");d(h,S,j,"⋘","\\lll",!0);d(h,S,j,"≶","\\lessgtr",!0);d(h,S,j,"⋚","\\lesseqgtr",!0);d(h,S,j,"⪋","\\lesseqqgtr",!0);d(h,S,j,"≑","\\doteqdot");d(h,S,j,"≓","\\risingdotseq",!0);d(h,S,j,"≒","\\fallingdotseq",!0);d(h,S,j,"∽","\\backsim",!0);d(h,S,j,"⋍","\\backsimeq",!0);d(h,S,j,"⫅","\\subseteqq",!0);d(h,S,j,"⋐","\\Subset",!0);d(h,S,j,"⊏","\\sqsubset",!0);d(h,S,j,"≼","\\preccurlyeq",!0);d(h,S,j,"⋞","\\curlyeqprec",!0);d(h,S,j,"≾","\\precsim",!0);d(h,S,j,"⪷","\\precapprox",!0);d(h,S,j,"⊲","\\vartriangleleft");d(h,S,j,"⊴","\\trianglelefteq");d(h,S,j,"⊨","\\vDash",!0);d(h,S,j,"⊪","\\Vvdash",!0);d(h,S,j,"⌣","\\smallsmile");d(h,S,j,"⌢","\\smallfrown");d(h,S,j,"≏","\\bumpeq",!0);d(h,S,j,"≎","\\Bumpeq",!0);d(h,S,j,"≧","\\geqq",!0);d(h,S,j,"⩾","\\geqslant",!0);d(h,S,j,"⪖","\\eqslantgtr",!0);d(h,S,j,"≳","\\gtrsim",!0);d(h,S,j,"⪆","\\gtrapprox",!0);d(h,S,me,"⋗","\\gtrdot");d(h,S,j,"⋙","\\ggg",!0);d(h,S,j,"≷","\\gtrless",!0);d(h,S,j,"⋛","\\gtreqless",!0);d(h,S,j,"⪌","\\gtreqqless",!0);d(h,S,j,"≖","\\eqcirc",!0);d(h,S,j,"≗","\\circeq",!0);d(h,S,j,"≜","\\triangleq",!0);d(h,S,j,"∼","\\thicksim");d(h,S,j,"≈","\\thickapprox");d(h,S,j,"⫆","\\supseteqq",!0);d(h,S,j,"⋑","\\Supset",!0);d(h,S,j,"⊐","\\sqsupset",!0);d(h,S,j,"≽","\\succcurlyeq",!0);d(h,S,j,"⋟","\\curlyeqsucc",!0);d(h,S,j,"≿","\\succsim",!0);d(h,S,j,"⪸","\\succapprox",!0);d(h,S,j,"⊳","\\vartriangleright");d(h,S,j,"⊵","\\trianglerighteq");d(h,S,j,"⊩","\\Vdash",!0);d(h,S,j,"∣","\\shortmid");d(h,S,j,"∥","\\shortparallel");d(h,S,j,"≬","\\between",!0);d(h,S,j,"⋔","\\pitchfork",!0);d(h,S,j,"∝","\\varpropto");d(h,S,j,"◀","\\blacktriangleleft");d(h,S,j,"∴","\\therefore",!0);d(h,S,j,"∍","\\backepsilon");d(h,S,j,"▶","\\blacktriangleright");d(h,S,j,"∵","\\because",!0);d(h,S,j,"⋘","\\llless");d(h,S,j,"⋙","\\gggtr");d(h,S,me,"⊲","\\lhd");d(h,S,me,"⊳","\\rhd");d(h,S,j,"≂","\\eqsim",!0);d(h,g,j,"⋈","\\Join");d(h,S,j,"≑","\\Doteq",!0);d(h,S,me,"∔","\\dotplus",!0);d(h,S,me,"∖","\\smallsetminus");d(h,S,me,"⋒","\\Cap",!0);d(h,S,me,"⋓","\\Cup",!0);d(h,S,me,"⩞","\\doublebarwedge",!0);d(h,S,me,"⊟","\\boxminus",!0);d(h,S,me,"⊞","\\boxplus",!0);d(h,S,me,"⋇","\\divideontimes",!0);d(h,S,me,"⋉","\\ltimes",!0);d(h,S,me,"⋊","\\rtimes",!0);d(h,S,me,"⋋","\\leftthreetimes",!0);d(h,S,me,"⋌","\\rightthreetimes",!0);d(h,S,me,"⋏","\\curlywedge",!0);d(h,S,me,"⋎","\\curlyvee",!0);d(h,S,me,"⊝","\\circleddash",!0);d(h,S,me,"⊛","\\circledast",!0);d(h,S,me,"⋅","\\centerdot");d(h,S,me,"⊺","\\intercal",!0);d(h,S,me,"⋒","\\doublecap");d(h,S,me,"⋓","\\doublecup");d(h,S,me,"⊠","\\boxtimes",!0);d(h,S,j,"⇢","\\dashrightarrow",!0);d(h,S,j,"⇠","\\dashleftarrow",!0);d(h,S,j,"⇇","\\leftleftarrows",!0);d(h,S,j,"⇆","\\leftrightarrows",!0);d(h,S,j,"⇚","\\Lleftarrow",!0);d(h,S,j,"↞","\\twoheadleftarrow",!0);d(h,S,j,"↢","\\leftarrowtail",!0);d(h,S,j,"↫","\\looparrowleft",!0);d(h,S,j,"⇋","\\leftrightharpoons",!0);d(h,S,j,"↶","\\curvearrowleft",!0);d(h,S,j,"↺","\\circlearrowleft",!0);d(h,S,j,"↰","\\Lsh",!0);d(h,S,j,"⇈","\\upuparrows",!0);d(h,S,j,"↿","\\upharpoonleft",!0);d(h,S,j,"⇃","\\downharpoonleft",!0);d(h,g,j,"⊶","\\origof",!0);d(h,g,j,"⊷","\\imageof",!0);d(h,S,j,"⊸","\\multimap",!0);d(h,S,j,"↭","\\leftrightsquigarrow",!0);d(h,S,j,"⇉","\\rightrightarrows",!0);d(h,S,j,"⇄","\\rightleftarrows",!0);d(h,S,j,"↠","\\twoheadrightarrow",!0);d(h,S,j,"↣","\\rightarrowtail",!0);d(h,S,j,"↬","\\looparrowright",!0);d(h,S,j,"↷","\\curvearrowright",!0);d(h,S,j,"↻","\\circlearrowright",!0);d(h,S,j,"↱","\\Rsh",!0);d(h,S,j,"⇊","\\downdownarrows",!0);d(h,S,j,"↾","\\upharpoonright",!0);d(h,S,j,"⇂","\\downharpoonright",!0);d(h,S,j,"⇝","\\rightsquigarrow",!0);d(h,S,j,"⇝","\\leadsto");d(h,S,j,"⇛","\\Rrightarrow",!0);d(h,S,j,"↾","\\restriction");d(h,g,A,"‘","`");d(h,g,A,"$","\\$");d(Y,g,A,"$","\\$");d(Y,g,A,"$","\\textdollar");d(h,g,A,"%","\\%");d(Y,g,A,"%","\\%");d(h,g,A,"_","\\_");d(Y,g,A,"_","\\_");d(Y,g,A,"_","\\textunderscore");d(h,g,A,"∠","\\angle",!0);d(h,g,A,"∞","\\infty",!0);d(h,g,A,"′","\\prime");d(h,g,A,"△","\\triangle");d(h,g,A,"Γ","\\Gamma",!0);d(h,g,A,"Δ","\\Delta",!0);d(h,g,A,"Θ","\\Theta",!0);d(h,g,A,"Λ","\\Lambda",!0);d(h,g,A,"Ξ","\\Xi",!0);d(h,g,A,"Π","\\Pi",!0);d(h,g,A,"Σ","\\Sigma",!0);d(h,g,A,"Υ","\\Upsilon",!0);d(h,g,A,"Φ","\\Phi",!0);d(h,g,A,"Ψ","\\Psi",!0);d(h,g,A,"Ω","\\Omega",!0);d(h,g,A,"A","Α");d(h,g,A,"B","Β");d(h,g,A,"E","Ε");d(h,g,A,"Z","Ζ");d(h,g,A,"H","Η");d(h,g,A,"I","Ι");d(h,g,A,"K","Κ");d(h,g,A,"M","Μ");d(h,g,A,"N","Ν");d(h,g,A,"O","Ο");d(h,g,A,"P","Ρ");d(h,g,A,"T","Τ");d(h,g,A,"X","Χ");d(h,g,A,"¬","\\neg",!0);d(h,g,A,"¬","\\lnot");d(h,g,A,"⊤","\\top");d(h,g,A,"⊥","\\bot");d(h,g,A,"∅","\\emptyset");d(h,S,A,"∅","\\varnothing");d(h,g,ze,"α","\\alpha",!0);d(h,g,ze,"β","\\beta",!0);d(h,g,ze,"γ","\\gamma",!0);d(h,g,ze,"δ","\\delta",!0);d(h,g,ze,"ϵ","\\epsilon",!0);d(h,g,ze,"ζ","\\zeta",!0);d(h,g,ze,"η","\\eta",!0);d(h,g,ze,"θ","\\theta",!0);d(h,g,ze,"ι","\\iota",!0);d(h,g,ze,"κ","\\kappa",!0);d(h,g,ze,"λ","\\lambda",!0);d(h,g,ze,"μ","\\mu",!0);d(h,g,ze,"ν","\\nu",!0);d(h,g,ze,"ξ","\\xi",!0);d(h,g,ze,"ο","\\omicron",!0);d(h,g,ze,"π","\\pi",!0);d(h,g,ze,"ρ","\\rho",!0);d(h,g,ze,"σ","\\sigma",!0);d(h,g,ze,"τ","\\tau",!0);d(h,g,ze,"υ","\\upsilon",!0);d(h,g,ze,"ϕ","\\phi",!0);d(h,g,ze,"χ","\\chi",!0);d(h,g,ze,"ψ","\\psi",!0);d(h,g,ze,"ω","\\omega",!0);d(h,g,ze,"ε","\\varepsilon",!0);d(h,g,ze,"ϑ","\\vartheta",!0);d(h,g,ze,"ϖ","\\varpi",!0);d(h,g,ze,"ϱ","\\varrho",!0);d(h,g,ze,"ς","\\varsigma",!0);d(h,g,ze,"φ","\\varphi",!0);d(h,g,me,"∗","*",!0);d(h,g,me,"+","+");d(h,g,me,"−","-",!0);d(h,g,me,"⋅","\\cdot",!0);d(h,g,me,"∘","\\circ",!0);d(h,g,me,"÷","\\div",!0);d(h,g,me,"±","\\pm",!0);d(h,g,me,"×","\\times",!0);d(h,g,me,"∩","\\cap",!0);d(h,g,me,"∪","\\cup",!0);d(h,g,me,"∖","\\setminus",!0);d(h,g,me,"∧","\\land");d(h,g,me,"∨","\\lor");d(h,g,me,"∧","\\wedge",!0);d(h,g,me,"∨","\\vee",!0);d(h,g,A,"√","\\surd");d(h,g,Xt,"⟨","\\langle",!0);d(h,g,Xt,"∣","\\lvert");d(h,g,Xt,"∥","\\lVert");d(h,g,Nt,"?","?");d(h,g,Nt,"!","!");d(h,g,Nt,"⟩","\\rangle",!0);d(h,g,Nt,"∣","\\rvert");d(h,g,Nt,"∥","\\rVert");d(h,g,j,"=","=");d(h,g,j,":",":");d(h,g,j,"≈","\\approx",!0);d(h,g,j,"≅","\\cong",!0);d(h,g,j,"≥","\\ge");d(h,g,j,"≥","\\geq",!0);d(h,g,j,"←","\\gets");d(h,g,j,">","\\gt",!0);d(h,g,j,"∈","\\in",!0);d(h,g,j,"","\\@not");d(h,g,j,"⊂","\\subset",!0);d(h,g,j,"⊃","\\supset",!0);d(h,g,j,"⊆","\\subseteq",!0);d(h,g,j,"⊇","\\supseteq",!0);d(h,S,j,"⊈","\\nsubseteq",!0);d(h,S,j,"⊉","\\nsupseteq",!0);d(h,g,j,"⊨","\\models");d(h,g,j,"←","\\leftarrow",!0);d(h,g,j,"≤","\\le");d(h,g,j,"≤","\\leq",!0);d(h,g,j,"<","\\lt",!0);d(h,g,j,"→","\\rightarrow",!0);d(h,g,j,"→","\\to");d(h,S,j,"≱","\\ngeq",!0);d(h,S,j,"≰","\\nleq",!0);d(h,g,Un," ","\\ ");d(h,g,Un," ","\\space");d(h,g,Un," ","\\nobreakspace");d(Y,g,Un," ","\\ ");d(Y,g,Un," "," ");d(Y,g,Un," ","\\space");d(Y,g,Un," ","\\nobreakspace");d(h,g,Un,null,"\\nobreak");d(h,g,Un,null,"\\allowbreak");d(h,g,ua,",",",");d(h,g,ua,";",";");d(h,S,me,"⊼","\\barwedge",!0);d(h,S,me,"⊻","\\veebar",!0);d(h,g,me,"⊙","\\odot",!0);d(h,g,me,"⊕","\\oplus",!0);d(h,g,me,"⊗","\\otimes",!0);d(h,g,A,"∂","\\partial",!0);d(h,g,me,"⊘","\\oslash",!0);d(h,S,me,"⊚","\\circledcirc",!0);d(h,S,me,"⊡","\\boxdot",!0);d(h,g,me,"△","\\bigtriangleup");d(h,g,me,"▽","\\bigtriangledown");d(h,g,me,"†","\\dagger");d(h,g,me,"⋄","\\diamond");d(h,g,me,"⋆","\\star");d(h,g,me,"◃","\\triangleleft");d(h,g,me,"▹","\\triangleright");d(h,g,Xt,"{","\\{");d(Y,g,A,"{","\\{");d(Y,g,A,"{","\\textbraceleft");d(h,g,Nt,"}","\\}");d(Y,g,A,"}","\\}");d(Y,g,A,"}","\\textbraceright");d(h,g,Xt,"{","\\lbrace");d(h,g,Nt,"}","\\rbrace");d(h,g,Xt,"[","\\lbrack",!0);d(Y,g,A,"[","\\lbrack",!0);d(h,g,Nt,"]","\\rbrack",!0);d(Y,g,A,"]","\\rbrack",!0);d(h,g,Xt,"(","\\lparen",!0);d(h,g,Nt,")","\\rparen",!0);d(Y,g,A,"<","\\textless",!0);d(Y,g,A,">","\\textgreater",!0);d(h,g,Xt,"⌊","\\lfloor",!0);d(h,g,Nt,"⌋","\\rfloor",!0);d(h,g,Xt,"⌈","\\lceil",!0);d(h,g,Nt,"⌉","\\rceil",!0);d(h,g,A,"\\","\\backslash");d(h,g,A,"∣","|");d(h,g,A,"∣","\\vert");d(Y,g,A,"|","\\textbar",!0);d(h,g,A,"∥","\\|");d(h,g,A,"∥","\\Vert");d(Y,g,A,"∥","\\textbardbl");d(Y,g,A,"~","\\textasciitilde");d(Y,g,A,"\\","\\textbackslash");d(Y,g,A,"^","\\textasciicircum");d(h,g,j,"↑","\\uparrow",!0);d(h,g,j,"⇑","\\Uparrow",!0);d(h,g,j,"↓","\\downarrow",!0);d(h,g,j,"⇓","\\Downarrow",!0);d(h,g,j,"↕","\\updownarrow",!0);d(h,g,j,"⇕","\\Updownarrow",!0);d(h,g,pt,"∐","\\coprod");d(h,g,pt,"⋁","\\bigvee");d(h,g,pt,"⋀","\\bigwedge");d(h,g,pt,"⨄","\\biguplus");d(h,g,pt,"⋂","\\bigcap");d(h,g,pt,"⋃","\\bigcup");d(h,g,pt,"∫","\\int");d(h,g,pt,"∫","\\intop");d(h,g,pt,"∬","\\iint");d(h,g,pt,"∭","\\iiint");d(h,g,pt,"∏","\\prod");d(h,g,pt,"∑","\\sum");d(h,g,pt,"⨂","\\bigotimes");d(h,g,pt,"⨁","\\bigoplus");d(h,g,pt,"⨀","\\bigodot");d(h,g,pt,"∮","\\oint");d(h,g,pt,"∯","\\oiint");d(h,g,pt,"∰","\\oiiint");d(h,g,pt,"⨆","\\bigsqcup");d(h,g,pt,"∫","\\smallint");d(Y,g,C0,"…","\\textellipsis");d(h,g,C0,"…","\\mathellipsis");d(Y,g,C0,"…","\\ldots",!0);d(h,g,C0,"…","\\ldots",!0);d(h,g,C0,"⋯","\\@cdots",!0);d(h,g,C0,"⋱","\\ddots",!0);d(h,g,A,"⋮","\\varvdots");d(Y,g,A,"⋮","\\varvdots");d(h,g,nt,"ˊ","\\acute");d(h,g,nt,"ˋ","\\grave");d(h,g,nt,"¨","\\ddot");d(h,g,nt,"~","\\tilde");d(h,g,nt,"ˉ","\\bar");d(h,g,nt,"˘","\\breve");d(h,g,nt,"ˇ","\\check");d(h,g,nt,"^","\\hat");d(h,g,nt,"⃗","\\vec");d(h,g,nt,"˙","\\dot");d(h,g,nt,"˚","\\mathring");d(h,g,ze,"","\\@imath");d(h,g,ze,"","\\@jmath");d(h,g,A,"ı","ı");d(h,g,A,"ȷ","ȷ");d(Y,g,A,"ı","\\i",!0);d(Y,g,A,"ȷ","\\j",!0);d(Y,g,A,"ß","\\ss",!0);d(Y,g,A,"æ","\\ae",!0);d(Y,g,A,"œ","\\oe",!0);d(Y,g,A,"ø","\\o",!0);d(Y,g,A,"Æ","\\AE",!0);d(Y,g,A,"Œ","\\OE",!0);d(Y,g,A,"Ø","\\O",!0);d(Y,g,nt,"ˊ","\\'");d(Y,g,nt,"ˋ","\\`");d(Y,g,nt,"ˆ","\\^");d(Y,g,nt,"˜","\\~");d(Y,g,nt,"ˉ","\\=");d(Y,g,nt,"˘","\\u");d(Y,g,nt,"˙","\\.");d(Y,g,nt,"¸","\\c");d(Y,g,nt,"˚","\\r");d(Y,g,nt,"ˇ","\\v");d(Y,g,nt,"¨",'\\"');d(Y,g,nt,"˝","\\H");d(Y,g,nt,"◯","\\textcircled");var Kd={"--":!0,"---":!0,"``":!0,"''":!0};d(Y,g,A,"–","--",!0);d(Y,g,A,"–","\\textendash");d(Y,g,A,"—","---",!0);d(Y,g,A,"—","\\textemdash");d(Y,g,A,"‘","`",!0);d(Y,g,A,"‘","\\textquoteleft");d(Y,g,A,"’","'",!0);d(Y,g,A,"’","\\textquoteright");d(Y,g,A,"“","``",!0);d(Y,g,A,"“","\\textquotedblleft");d(Y,g,A,"”","''",!0);d(Y,g,A,"”","\\textquotedblright");d(h,g,A,"°","\\degree",!0);d(Y,g,A,"°","\\degree");d(Y,g,A,"°","\\textdegree",!0);d(h,g,A,"£","\\pounds");d(h,g,A,"£","\\mathsterling",!0);d(Y,g,A,"£","\\pounds");d(Y,g,A,"£","\\textsterling",!0);d(h,S,A,"✠","\\maltese");d(Y,S,A,"✠","\\maltese");var Z1='0123456789/@."';for(var ul=0;ul<Z1.length;ul++){var J1=Z1.charAt(ul);d(h,g,A,J1,J1)}var ed='0123456789!@*()-=+";:?/.,';for(var cl=0;cl<ed.length;cl++){var td=ed.charAt(cl);d(Y,g,A,td,td)}var oa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var dl=0;dl<oa.length;dl++){var Vo=oa.charAt(dl);d(h,g,ze,Vo,Vo),d(Y,g,A,Vo,Vo)}d(h,S,A,"C","ℂ");d(Y,S,A,"C","ℂ");d(h,S,A,"H","ℍ");d(Y,S,A,"H","ℍ");d(h,S,A,"N","ℕ");d(Y,S,A,"N","ℕ");d(h,S,A,"P","ℙ");d(Y,S,A,"P","ℙ");d(h,S,A,"Q","ℚ");d(Y,S,A,"Q","ℚ");d(h,S,A,"R","ℝ");d(Y,S,A,"R","ℝ");d(h,S,A,"Z","ℤ");d(Y,S,A,"Z","ℤ");d(h,g,ze,"h","ℎ");d(Y,g,ze,"h","ℎ");var qe="";for(var Et=0;Et<oa.length;Et++){var lt=oa.charAt(Et);qe=String.fromCharCode(55349,56320+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56372+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56424+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56580+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56684+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56736+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56788+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56840+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56944+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),Et<26&&(qe=String.fromCharCode(55349,56632+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe),qe=String.fromCharCode(55349,56476+Et),d(h,g,ze,lt,qe),d(Y,g,A,lt,qe))}qe="𝕜";d(h,g,ze,"k",qe);d(Y,g,A,"k",qe);for(var Qr=0;Qr<10;Qr++){var $r=Qr.toString();qe=String.fromCharCode(55349,57294+Qr),d(h,g,ze,$r,qe),d(Y,g,A,$r,qe),qe=String.fromCharCode(55349,57314+Qr),d(h,g,ze,$r,qe),d(Y,g,A,$r,qe),qe=String.fromCharCode(55349,57324+Qr),d(h,g,ze,$r,qe),d(Y,g,A,$r,qe),qe=String.fromCharCode(55349,57334+Qr),d(h,g,ze,$r,qe),d(Y,g,A,$r,qe)}var Tl="ÐÞþ";for(var fl=0;fl<Tl.length;fl++){var Ko=Tl.charAt(fl);d(h,g,ze,Ko,Ko),d(Y,g,A,Ko,Ko)}var Yo=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],nd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],T8=function(n,r){var a=n.charCodeAt(0),l=n.charCodeAt(1),u=(a-55296)*1024+(l-56320)+65536,f=r==="math"?0:1;if(119808<=u&&u<120484){var v=Math.floor((u-119808)/26);return[Yo[v][2],Yo[v][f]]}else if(120782<=u&&u<=120831){var p=Math.floor((u-120782)/10);return[nd[p][2],nd[p][f]]}else{if(u===120485||u===120486)return[Yo[0][2],Yo[0][f]];if(120486<u&&u<120782)return["",""];throw new te("Unsupported character: "+n)}},ca=function(n,r,a){return Ze[a][n]&&Ze[a][n].replace&&(n=Ze[a][n].replace),{value:n,metrics:Ll(n,r,a)}},Dt=function(n,r,a,l,u){var f=ca(n,r,a),v=f.metrics;n=f.value;var p;if(v){var x=v.italic;(a==="text"||l&&l.font==="mathit")&&(x=0),p=new un(n,v.height,v.depth,x,v.skew,v.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+a+"'")),p=new un(n,0,0,0,0,0,u);if(l){p.maxFontSize=l.sizeMultiplier,l.style.isTight()&&p.classes.push("mtight");var b=l.getColor();b&&(p.style.color=b)}return p},Hl=function(n,r,a,l){return l===void 0&&(l=[]),a.font==="boldsymbol"&&ca(n,"Main-Bold",r).metrics?Dt(n,"Main-Bold",r,a,l.concat(["mathbf"])):n==="\\"||Ze[r][n].font==="main"?Dt(n,"Main-Regular",r,a,l):Dt(n,"AMS-Regular",r,a,l.concat(["amsrm"]))},j8=function(n,r,a,l,u){return u!=="textord"&&ca(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},da=function(n,r,a){var l=n.mode,u=n.text,f=["mord"],v=l==="math"||l==="text"&&r.font,p=v?r.font:r.fontFamily,x="",b="";if(u.charCodeAt(0)===55349&&([x,b]=T8(u,l)),x.length>0)return Dt(u,x,l,r,f.concat(b));if(p){var _,k;if(p==="boldsymbol"){var T=j8(u,l,r,f,a);_=T.fontName,k=[T.fontClass]}else v?(_=jl[p].fontName,k=[p]):(_=Qo(p,r.fontWeight,r.fontShape),k=[p,r.fontWeight,r.fontShape]);if(ca(u,_,l).metrics)return Dt(u,_,l,r,f.concat(k));if(Kd.hasOwnProperty(u)&&_.slice(0,10)==="Typewriter"){for(var P=[],E=0;E<u.length;E++)P.push(Dt(u[E],_,l,r,f.concat(k)));return Vn(P)}}if(a==="mathord")return Dt(u,"Math-Italic",l,r,f.concat(["mathnormal"]));if(a==="textord"){var N=Ze[l][u]&&Ze[l][u].font;if(N==="ams"){var D=Qo("amsrm",r.fontWeight,r.fontShape);return Dt(u,D,l,r,f.concat("amsrm",r.fontWeight,r.fontShape))}else if(N==="main"||!N){var O=Qo("textrm",r.fontWeight,r.fontShape);return Dt(u,O,l,r,f.concat(r.fontWeight,r.fontShape))}else{var H=Qo(N,r.fontWeight,r.fontShape);return Dt(u,H,l,r,f.concat(H,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+a+" in makeOrd")},q8=(o,n)=>{if(kr(o.classes)!==kr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a in o.style)if(o.style.hasOwnProperty(a)&&o.style[a]!==n.style[a])return!1;for(var l in n.style)if(n.style.hasOwnProperty(l)&&o.style[l]!==n.style[l])return!1;return!0},Yd=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],a=o[n+1];r instanceof un&&a instanceof un&&q8(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,o.splice(n+1,1),n--)}return o},Gl=function(n){for(var r=0,a=0,l=0,u=0;u<n.children.length;u++){var f=n.children[u];f.height>r&&(r=f.height),f.depth>a&&(a=f.depth),f.maxFontSize>l&&(l=f.maxFontSize)}n.height=r,n.depth=a,n.maxFontSize=l},Z=function(n,r,a,l){var u=new Mi(n,r,a,l);return Gl(u),u},Sr=(o,n,r,a)=>new Mi(o,n,r,a),M0=function(n,r,a){var l=Z([n],[],r);return l.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),l.style.borderBottomWidth=le(l.height),l.maxFontSize=1,l},M8=function(n,r,a,l){var u=new Ol(n,r,a,l);return Gl(u),u},Vn=function(n){var r=new qi(n);return Gl(r),r},A0=function(n,r){return n instanceof qi?Z([],[n],r):n},A8=function(n){if(n.positionType==="individualShift"){for(var r=n.children,a=[r[0]],l=-r[0].shift-r[0].elem.depth,u=l,f=1;f<r.length;f++){var v=-r[f].shift-u-r[f].elem.depth,p=v-(r[f-1].elem.height+r[f-1].elem.depth);u=u+v,a.push({type:"kern",size:p}),a.push(r[f])}return{children:a,depth:l}}var x;if(n.positionType==="top"){for(var b=n.positionData,_=0;_<n.children.length;_++){var k=n.children[_];b-=k.type==="kern"?k.size:k.elem.height+k.elem.depth}x=b}else if(n.positionType==="bottom")x=-n.positionData;else{var T=n.children[0];if(T.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")x=-T.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")x=-T.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:x}},Ge=function(n,r){for(var{children:a,depth:l}=A8(n),u=0,f=0;f<a.length;f++){var v=a[f];if(v.type==="elem"){var p=v.elem;u=Math.max(u,p.maxFontSize,p.height)}}u+=2;var x=Z(["pstrut"],[]);x.style.height=le(u);for(var b=[],_=l,k=l,T=l,P=0;P<a.length;P++){var E=a[P];if(E.type==="kern")T+=E.size;else{var N=E.elem,D=E.wrapperClasses||[],O=E.wrapperStyle||{},H=Z(D,[x,N],void 0,O);H.style.top=le(-u-T-N.depth),E.marginLeft&&(H.style.marginLeft=E.marginLeft),E.marginRight&&(H.style.marginRight=E.marginRight),b.push(H),T+=N.height+N.depth}_=Math.min(_,T),k=Math.max(k,T)}var B=Z(["vlist"],b);B.style.height=le(k);var W;if(_<0){var U=Z([],[]),L=Z(["vlist"],[U]);L.style.height=le(-_);var V=Z(["vlist-s"],[new un("​")]);W=[Z(["vlist-r"],[B,V]),Z(["vlist-r"],[L])]}else W=[Z(["vlist-r"],[B])];var oe=Z(["vlist-t"],W);return W.length===2&&oe.classes.push("vlist-t2"),oe.height=k,oe.depth=-_,oe},Qd=(o,n)=>{var r=Z(["mspace"],[],n),a=at(o,n);return r.style.marginRight=le(a),r},Qo=function(n,r,a){var l="";switch(n){case"amsrm":l="AMS";break;case"textrm":l="Main";break;case"textsf":l="SansSerif";break;case"texttt":l="Typewriter";break;default:l=n}var u;return r==="textbf"&&a==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",l+"-"+u},jl={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Xd={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Zd=function(n,r){var[a,l,u]=Xd[n],f=new zr(a),v=new Gn([f],{width:le(l),height:le(u),style:"width:"+le(l),viewBox:"0 0 "+1e3*l+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),p=Sr(["overlay"],[v],r);return p.height=u,p.style.height=le(u),p.style.width=le(l),p},ot={number:3,unit:"mu"},Xr={number:4,unit:"mu"},Ln={number:5,unit:"mu"},C8={mord:{mop:ot,mbin:Xr,mrel:Ln,minner:ot},mop:{mord:ot,mop:ot,mrel:Ln,minner:ot},mbin:{mord:Xr,mop:Xr,mopen:Xr,minner:Xr},mrel:{mord:Ln,mop:Ln,mopen:Ln,minner:Ln},mopen:{},mclose:{mop:ot,mbin:Xr,mrel:Ln,minner:ot},mpunct:{mord:ot,mop:ot,mrel:Ln,mopen:ot,mclose:ot,mpunct:ot,minner:ot},minner:{mord:ot,mop:ot,mbin:Xr,mrel:Ln,mopen:ot,mpunct:ot,minner:ot}},P8={mord:{mop:ot},mop:{mord:ot,mop:ot},mbin:{},mrel:{},mopen:{},mclose:{mop:ot},mpunct:{},minner:{mop:ot}},Jd={},aa={},sa={};function ce(o){for(var{type:n,names:r,props:a,handler:l,htmlBuilder:u,mathmlBuilder:f}=o,v={type:n,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:l},p=0;p<r.length;++p)Jd[r[p]]=v;n&&(u&&(aa[n]=u),f&&(sa[n]=f))}function Zr(o){var{type:n,htmlBuilder:r,mathmlBuilder:a}=o;ce({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var la=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},dt=function(n){return n.type==="ordgroup"?n.body:[n]},E8=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),D8=new Set(["rightmost","mrel","mclose","mpunct"]),R8={display:Ce.DISPLAY,text:Ce.TEXT,script:Ce.SCRIPT,scriptscript:Ce.SCRIPTSCRIPT},N8={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},yt=function(n,r,a,l){l===void 0&&(l=[null,null]);for(var u=[],f=0;f<n.length;f++){var v=Le(n[f],r);if(v instanceof qi){var p=v.children;u.push(...p)}else u.push(v)}if(Yd(u),!a)return u;var x=r;if(n.length===1){var b=n[0];b.type==="sizing"?x=r.havingSize(b.size):b.type==="styling"&&(x=r.havingStyle(R8[b.style]))}var _=Z([l[0]||"leftmost"],[],r),k=Z([l[1]||"rightmost"],[],r),T=a==="root";return rd(u,(P,E)=>{var N=E.classes[0],D=P.classes[0];N==="mbin"&&D8.has(D)?E.classes[0]="mord":D==="mbin"&&E8.has(N)&&(P.classes[0]="mord")},{node:_},k,T),rd(u,(P,E)=>{var N=ql(E),D=ql(P),O=N&&D?P.hasClass("mtight")?P8[N][D]:C8[N][D]:null;if(O)return Qd(O,x)},{node:_},k,T),u},rd=function o(n,r,a,l,u){l&&n.push(l);for(var f=0;f<n.length;f++){var v=n[f],p=ef(v);if(p){o(p.children,r,a,null,u);continue}var x=!v.hasClass("mspace");if(x){var b=r(v,a.node);b&&(a.insertAfter?a.insertAfter(b):(n.unshift(b),f++))}x?a.node=v:u&&v.hasClass("newline")&&(a.node=Z(["leftmost"])),a.insertAfter=(_=>k=>{n.splice(_+1,0,k),f++})(f)}l&&n.pop()},ef=function(n){return n instanceof qi||n instanceof Ol||n instanceof Mi&&n.hasClass("enclosing")?n:null},B8=function o(n,r){var a=ef(n);if(a){var l=a.children;if(l.length){if(r==="right")return o(l[l.length-1],"right");if(r==="left")return o(l[0],"left")}}return n},ql=function(n,r){return n?(r&&(n=B8(n,r)),N8[n.classes[0]]||null):null},ji=function(n,r){var a=["nulldelimiter"].concat(n.baseSizingClasses());return Z(r.concat(a))},Le=function(n,r,a){if(!n)return Z();if(aa[n.type]){var l=aa[n.type](n,r);if(a&&r.size!==a.size){l=Z(r.sizingClasses(a),[l],r);var u=r.sizeMultiplier/a.sizeMultiplier;l.height*=u,l.depth*=u}return l}else throw new te("Got group of unknown type: '"+n.type+"'")};function Xo(o,n){var r=Z(["base"],o,n),a=Z(["strut"]);return a.style.height=le(r.height+r.depth),r.depth&&(a.style.verticalAlign=le(-r.depth)),r.children.unshift(a),r}function Ml(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var a=yt(o,n,"root"),l;a.length===2&&a[1].hasClass("tag")&&(l=a.pop());for(var u=[],f=[],v=0;v<a.length;v++)if(f.push(a[v]),a[v].hasClass("mbin")||a[v].hasClass("mrel")||a[v].hasClass("allowbreak")){for(var p=!1;v<a.length-1&&a[v+1].hasClass("mspace")&&!a[v+1].hasClass("newline");)v++,f.push(a[v]),a[v].hasClass("nobreak")&&(p=!0);p||(u.push(Xo(f,n)),f=[])}else a[v].hasClass("newline")&&(f.pop(),f.length>0&&(u.push(Xo(f,n)),f=[]),u.push(a[v]));f.length>0&&u.push(Xo(f,n));var x;r?(x=Xo(yt(r,n,!0)),x.classes=["tag"],u.push(x)):l&&u.push(l);var b=Z(["katex-html"],u);if(b.setAttribute("aria-hidden","true"),x){var _=x.children[0];_.style.height=le(b.height+b.depth),b.depth&&(_.style.verticalAlign=le(-b.depth))}return b}function tf(o){return new qi(o)}class ne{constructor(n,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=kr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof ht&&this.children[a+1]instanceof ht){for(var l=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof ht;)l+=this.children[++a].toText();n.appendChild(new ht(l).toNode())}else n.appendChild(this.children[a].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=Mt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+Mt(kr(this.classes))+'"'),n+=">";for(var a=0;a<this.children.length;a++)n+=this.children[a].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class ht{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return Mt(this.toText())}toText(){return this.text}}class nf{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",le(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+le(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var I8=new Set(["\\imath","\\jmath"]),F8=new Set(["mrow","mtable"]),cn=function(n,r,a){return Ze[r][n]&&Ze[r][n].replace&&n.charCodeAt(0)!==55349&&!(Kd.hasOwnProperty(n)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(n=Ze[r][n].replace),new ht(n)},Wl=function(n){return n.length===1?n[0]:new ne("mrow",n)},Ul=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var a=r.font;if(!a||a==="mathnormal")return null;var l=n.mode;if(a==="mathit")return"italic";if(a==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(a==="mathbf")return"bold";if(a==="mathbb")return"double-struck";if(a==="mathsfit")return"sans-serif-italic";if(a==="mathfrak")return"fraktur";if(a==="mathscr"||a==="mathcal")return"script";if(a==="mathsf")return"sans-serif";if(a==="mathtt")return"monospace";var u=n.text;if(I8.has(u))return null;Ze[l][u]&&Ze[l][u].replace&&(u=Ze[l][u].replace);var f=jl[a].fontName;return Ll(u,f,l)?jl[a].variant:null};function ml(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof ht&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof ht&&r.text===","}else return!1}var Wt=function(n,r,a){if(n.length===1){var l=Qe(n[0],r);return a&&l instanceof ne&&l.type==="mo"&&(l.setAttribute("lspace","0em"),l.setAttribute("rspace","0em")),[l]}for(var u=[],f,v=0;v<n.length;v++){var p=Qe(n[v],r);if(p instanceof ne&&f instanceof ne){if(p.type==="mtext"&&f.type==="mtext"&&p.getAttribute("mathvariant")===f.getAttribute("mathvariant")){f.children.push(...p.children);continue}else if(p.type==="mn"&&f.type==="mn"){f.children.push(...p.children);continue}else if(ml(p)&&f.type==="mn"){f.children.push(...p.children);continue}else if(p.type==="mn"&&ml(f))p.children=[...f.children,...p.children],u.pop();else if((p.type==="msup"||p.type==="msub")&&p.children.length>=1&&(f.type==="mn"||ml(f))){var x=p.children[0];x instanceof ne&&x.type==="mn"&&(x.children=[...f.children,...x.children],u.pop())}else if(f.type==="mi"&&f.children.length===1){var b=f.children[0];if(b instanceof ht&&b.text==="̸"&&(p.type==="mo"||p.type==="mi"||p.type==="mn")){var _=p.children[0];_ instanceof ht&&_.text.length>0&&(_.text=_.text.slice(0,1)+"̸"+_.text.slice(1),u.pop())}}}u.push(p),f=p}return u},Tr=function(n,r,a){return Wl(Wt(n,r,a))},Qe=function(n,r){if(!n)return new ne("mrow");if(sa[n.type]){var a=sa[n.type](n,r);return a}else throw new te("Got group of unknown type: '"+n.type+"'")};function id(o,n,r,a,l){var u=Wt(o,r),f;u.length===1&&u[0]instanceof ne&&F8.has(u[0].type)?f=u[0]:f=new ne("mrow",u);var v=new ne("annotation",[new ht(n)]);v.setAttribute("encoding","application/x-tex");var p=new ne("semantics",[f,v]),x=new ne("math",[p]);x.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&x.setAttribute("display","block");var b=l?"katex":"katex-mathml";return Z([b],[x])}var rf=function(n){return new On({style:n.displayMode?Ce.DISPLAY:Ce.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},of=function(n,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),n=Z(a,[n])}return n},L8=function(n,r,a){var l=rf(a),u;if(a.output==="mathml")return id(n,r,l,a.displayMode,!0);if(a.output==="html"){var f=Ml(n,l);u=Z(["katex"],[f])}else{var v=id(n,r,l,a.displayMode,!1),p=Ml(n,l);u=Z(["katex"],[v,p])}return of(u,a)},O8=function(n,r,a){var l=rf(a),u=Ml(n,l),f=Z(["katex"],[u]);return of(f,a)},H8={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},fa=function(n){var r=new ne("mo",[new ht(H8[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},G8={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},W8=new Set(["widehat","widecheck","widetilde","utilde"]),ma=function(n,r){function a(){var v=4e5,p=n.label.slice(1);if(W8.has(p)){var x=n,b=x.base.type==="ordgroup"?x.base.body.length:1,_,k,T;if(b>5)p==="widehat"||p==="widecheck"?(_=420,v=2364,T=.42,k=p+"4"):(_=312,v=2340,T=.34,k="tilde4");else{var P=[1,1,2,2,3,3][b];p==="widehat"||p==="widecheck"?(v=[0,1062,2364,2364,2364][P],_=[0,239,300,360,420][P],T=[0,.24,.3,.3,.36,.42][P],k=p+P):(v=[0,600,1033,2339,2340][P],_=[0,260,286,306,312][P],T=[0,.26,.286,.3,.306,.34][P],k="tilde"+P)}var E=new zr(k),N=new Gn([E],{width:"100%",height:le(T),viewBox:"0 0 "+v+" "+_,preserveAspectRatio:"none"});return{span:Sr([],[N],r),minWidth:0,height:T}}else{var D=[],O=G8[p],[H,B,W]=O,U=W/1e3,L=H.length,V,oe;if(L===1){var Te=O[3];V=["hide-tail"],oe=[Te]}else if(L===2)V=["halfarrow-left","halfarrow-right"],oe=["xMinYMin","xMaxYMin"];else if(L===3)V=["brace-left","brace-center","brace-right"],oe=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+L+" children.");for(var Se=0;Se<L;Se++){var fe=new zr(H[Se]),we=new Gn([fe],{width:"400em",height:le(U),viewBox:"0 0 "+v+" "+W,preserveAspectRatio:oe[Se]+" slice"}),je=Sr([V[Se]],[we],r);if(L===1)return{span:je,minWidth:B,height:U};je.style.height=le(U),D.push(je)}return{span:Z(["stretchy"],D,r),minWidth:B,height:U}}}var{span:l,minWidth:u,height:f}=a();return l.height=f,l.style.height=le(f),u>0&&(l.style.minWidth=le(u)),l},U8=function(n,r,a,l,u){var f,v=n.height+n.depth+a+l;if(/fbox|color|angl/.test(r)){if(f=Z(["stretchy",r],[],u),r==="fbox"){var p=u.color&&u.getColor();p&&(f.style.borderColor=p)}}else{var x=[];/^[bx]cancel$/.test(r)&&x.push(new Sl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&x.push(new Sl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new Gn(x,{width:"100%",height:le(v)});f=Sr([],[b],u)}return f.height=v,f.style.height=le(v),f};function Pe(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function Vl(o){var n=ha(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function ha(o){return o&&(o.type==="atom"||S8.hasOwnProperty(o.type))?o:null}var Kl=(o,n)=>{var r,a,l;o&&o.type==="supsub"?(a=Pe(o.base,"accent"),r=a.base,o.base=r,l=k8(Le(o,n)),o.base=a):(a=Pe(o,"accent"),r=a.base);var u=Le(r,n.havingCrampedStyle()),f=a.isShifty&&Wn(r),v=0;if(f){var p=ki(r),x=Le(p,n.havingCrampedStyle());v=X1(x).skew}var b=a.label==="\\c",_=b?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),k;if(a.isStretchy)k=ma(a,n),k=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:k,wrapperClasses:["svg-align"],wrapperStyle:v>0?{width:"calc(100% - "+le(2*v)+")",marginLeft:le(2*v)}:void 0}]});else{var T,P;a.label==="\\vec"?(T=Zd("vec",n),P=Xd.vec[1]):(T=da({mode:a.mode,text:a.label},n,"textord"),T=X1(T),T.italic=0,P=T.width,b&&(_+=T.depth)),k=Z(["accent-body"],[T]);var E=a.label==="\\textcircled";E&&(k.classes.push("accent-full"),_=u.height);var N=v;E||(N-=P/2),k.style.left=le(N),a.label==="\\textcircled"&&(k.style.top=".2em"),k=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-_},{type:"elem",elem:k}]})}var D=Z(["mord","accent"],[k],n);return l?(l.children[0]=D,l.height=Math.max(D.height,l.height),l.classes[0]="mord",l):D},af=(o,n)=>{var r=o.isStretchy?fa(o.label):new ne("mo",[cn(o.label,o.mode)]),a=new ne("mover",[Qe(o.base,n),r]);return a.setAttribute("accent","true"),a},V8=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ce({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=la(n[0]),a=!V8.test(o.funcName),l=!a||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:a,isShifty:l,base:r}},htmlBuilder:Kl,mathmlBuilder:af});ce({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],a=o.parser.mode;return a==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Kl,mathmlBuilder:af});ce({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0];return{type:"accentUnder",mode:r.mode,label:a,base:l}},htmlBuilder:(o,n)=>{var r=Le(o.base,n),a=ma(o,n),l=o.label==="\\utilde"?.12:0,u=Ge({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:l},{type:"elem",elem:r}]});return Z(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=fa(o.label),a=new ne("munder",[Qe(o.base,n),r]);return a.setAttribute("accentunder","true"),a}});var Zo=o=>{var n=new ne("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};ce({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:a,funcName:l}=o;return{type:"xArrow",mode:a.mode,label:l,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,a=n.havingStyle(r.sup()),l=A0(Le(o.body,a,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";l.classes.push(u+"-arrow-pad");var f;o.below&&(a=n.havingStyle(r.sub()),f=A0(Le(o.below,a,n),n),f.classes.push(u+"-arrow-pad"));var v=ma(o,n),p=-n.fontMetrics().axisHeight+.5*v.height,x=-n.fontMetrics().axisHeight-.5*v.height-.111;(l.depth>.25||o.label==="\\xleftequilibrium")&&(x-=l.depth);var b;if(f){var _=-n.fontMetrics().axisHeight+f.height+.5*v.height+.111;b=Ge({positionType:"individualShift",children:[{type:"elem",elem:l,shift:x},{type:"elem",elem:v,shift:p},{type:"elem",elem:f,shift:_}]})}else b=Ge({positionType:"individualShift",children:[{type:"elem",elem:l,shift:x},{type:"elem",elem:v,shift:p}]});return b.children[0].children[0].children[1].classes.push("svg-align"),Z(["mrel","x-arrow"],[b],n)},mathmlBuilder(o,n){var r=fa(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(o.body){var l=Zo(Qe(o.body,n));if(o.below){var u=Zo(Qe(o.below,n));a=new ne("munderover",[r,u,l])}else a=new ne("mover",[r,l])}else if(o.below){var f=Zo(Qe(o.below,n));a=new ne("munder",[r,f])}else a=Zo(),a=new ne("mover",[r,a]);return a}});function sf(o,n){var r=yt(o.body,n,!0);return Z([o.mclass],r,n)}function lf(o,n){var r,a=Wt(o.body,n);return o.mclass==="minner"?r=new ne("mpadded",a):o.mclass==="mord"?o.isCharacterBox?(r=a[0],r.type="mi"):r=new ne("mi",a):(o.isCharacterBox?(r=a[0],r.type="mo"):r=new ne("mo",a),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ce({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:dt(l),isCharacterBox:Wn(l)}},htmlBuilder:sf,mathmlBuilder:lf});var pa=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};ce({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:pa(n[0]),body:dt(n[1]),isCharacterBox:Wn(n[1])}}});ce({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:a}=o,l=n[1],u=n[0],f;a!=="\\stackrel"?f=pa(l):f="mrel";var v={type:"op",mode:l.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:dt(l)},p={type:"supsub",mode:u.mode,base:v,sup:a==="\\underset"?null:u,sub:a==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:f,body:[p],isCharacterBox:Wn(p)}},htmlBuilder:sf,mathmlBuilder:lf});ce({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:pa(n[0]),body:dt(n[0])}},htmlBuilder(o,n){var r=yt(o.body,n,!0),a=Z([o.mclass],r,n);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(o,n){var r=Wt(o.body,n),a=new ne("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var K8={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},od=()=>({type:"styling",body:[],mode:"math",style:"display"}),ad=o=>o.type==="textord"&&o.text==="@",Y8=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function Q8(o,n,r){var a=K8[o];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var l=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:a,mode:"math",family:"rel"},f=r.callFunction("\\Big",[u],[]),v=r.callFunction("\\\\cdright",[n[1]],[]),p={type:"ordgroup",mode:"math",body:[l,f,v]};return r.callFunction("\\\\cdparent",[p],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var x={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[x],[])}default:return{type:"textord",text:" ",mode:"math"}}}function X8(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new te("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var a=[],l=[a],u=0;u<n.length;u++){for(var f=n[u],v=od(),p=0;p<f.length;p++)if(!ad(f[p]))v.body.push(f[p]);else{a.push(v),p+=1;var x=Vl(f[p]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(x))if("<>AV".includes(x))for(var _=0;_<2;_++){for(var k=!0,T=p+1;T<f.length;T++){if(Y8(f[T],x)){k=!1,p=T;break}if(ad(f[T]))throw new te("Missing a "+x+" character to complete a CD arrow.",f[T]);b[_].body.push(f[T])}if(k)throw new te("Missing a "+x+" character to complete a CD arrow.",f[p])}else throw new te('Expected one of "<>AV=|." after @',f[p]);var P=Q8(x,b,o),E={type:"styling",body:[P],mode:"math",style:"display"};a.push(E),v=od()}u%2===0?a.push(v):a.shift(),a=[],l.push(a)}o.gullet.endGroup(),o.gullet.endGroup();var N=new Array(l[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:l,arraystretch:1,addJot:!0,rowGaps:[null],cols:N,colSeparationType:"CD",hLinesBeforeRow:new Array(l.length+1).fill([])}}ce({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),a=A0(Le(o.label,r,n),n);return a.classes.push("cd-label-"+o.side),a.style.bottom=le(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(o,n){var r=new ne("mrow",[Qe(o.label,n)]);return r=new ne("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new ne("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ce({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=A0(Le(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new ne("mrow",[Qe(o.fragment,n)])}});ce({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,a=Pe(n[0],"ordgroup"),l=a.body,u="",f=0;f<l.length;f++){var v=Pe(l[f],"textord");u+=v.text}var p=parseInt(u),x;if(isNaN(p))throw new te("\\@char has non-numeric argument "+u);if(p<0||p>=1114111)throw new te("\\@char with invalid code point "+u);return p<=65535?x=String.fromCharCode(p):(p-=65536,x=String.fromCharCode((p>>10)+55296,(p&1023)+56320)),{type:"textord",mode:r.mode,text:x}}});var uf=(o,n)=>{var r=yt(o.body,n.withColor(o.color),!1);return Vn(r)},cf=(o,n)=>{var r=Wt(o.body,n.withColor(o.color)),a=new ne("mstyle",r);return a.setAttribute("mathcolor",o.color),a};ce({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,a=Pe(n[0],"color-token").color,l=n[1];return{type:"color",mode:r.mode,color:a,body:dt(l)}},htmlBuilder:uf,mathmlBuilder:cf});ce({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:a}=o,l=Pe(n[0],"color-token").color;r.gullet.macros.set("\\current@color",l);var u=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:l,body:u}},htmlBuilder:uf,mathmlBuilder:cf});ce({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:a}=o,l=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,u=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:u,size:l&&Pe(l,"size").value}},htmlBuilder(o,n){var r=Z(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=le(at(o.size,n)))),r},mathmlBuilder(o,n){var r=new ne("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",le(at(o.size,n)))),r}});var Al={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},df=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new te("Expected a control sequence",o);return n},Z8=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},ff=(o,n,r,a)=>{var l=o.gullet.macros.get(r.text);l==null&&(r.noexpand=!0,l={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,l,a)};ce({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var a=n.fetch();if(Al[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=Al[a.text]),Pe(n.parseFunction(),"internal");throw new te("Invalid token after macro prefix",a)}});ce({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=n.gullet.popToken(),l=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(l))throw new te("Expected a control sequence",a);for(var u=0,f,v=[[]];n.gullet.future().text!=="{";)if(a=n.gullet.popToken(),a.text==="#"){if(n.gullet.future().text==="{"){f=n.gullet.future(),v[u].push("{");break}if(a=n.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new te('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==u+1)throw new te('Argument number "'+a.text+'" out of order');u++,v.push([])}else{if(a.text==="EOF")throw new te("Expected a macro definition");v[u].push(a.text)}var{tokens:p}=n.gullet.consumeArg();return f&&p.unshift(f),(r==="\\edef"||r==="\\xdef")&&(p=n.gullet.expandTokens(p),p.reverse()),n.gullet.macros.set(l,{tokens:p,numArgs:u,delimiters:v},r===Al[r]),{type:"internal",mode:n.mode}}});ce({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=df(n.gullet.popToken());n.gullet.consumeSpaces();var l=Z8(n);return ff(n,a,l,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});ce({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=df(n.gullet.popToken()),l=n.gullet.popToken(),u=n.gullet.popToken();return ff(n,a,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(l),{type:"internal",mode:n.mode}}});var _i=function(n,r,a){var l=Ze.math[n]&&Ze.math[n].replace,u=Ll(l||n,r,a);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Yl=function(n,r,a,l){var u=a.havingBaseStyle(r),f=Z(l.concat(u.sizingClasses(a)),[n],a),v=u.sizeMultiplier/a.sizeMultiplier;return f.height*=v,f.depth*=v,f.maxFontSize=u.sizeMultiplier,f},mf=function(n,r,a){var l=r.havingBaseStyle(a),u=(1-r.sizeMultiplier/l.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=le(u),n.height-=u,n.depth+=u},J8=function(n,r,a,l,u,f){var v=Dt(n,"Main-Regular",u,l),p=Yl(v,r,l,f);return mf(p,l,r),p},ev=function(n,r,a,l){return Dt(n,"Size"+r+"-Regular",a,l)},hf=function(n,r,a,l,u,f){var v=ev(n,r,u,l),p=Yl(Z(["delimsizing","size"+r],[v],l),Ce.TEXT,l,f);return a&&mf(p,l,Ce.TEXT),p},hl=function(n,r,a){var l;r==="Size1-Regular"?l="delim-size1":l="delim-size4";var u=Z(["delimsizinginner",l],[Z([],[Dt(n,r,a)])]);return{type:"elem",elem:u}},pl=function(n,r,a){var l=Sn["Size4-Regular"][n.charCodeAt(0)]?Sn["Size4-Regular"][n.charCodeAt(0)][4]:Sn["Size1-Regular"][n.charCodeAt(0)][4],u=new zr("inner",p8(n,Math.round(1e3*r))),f=new Gn([u],{width:le(l),height:le(r),style:"width:"+le(l),viewBox:"0 0 "+1e3*l+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),v=Sr([],[f],a);return v.height=r,v.style.height=le(r),v.style.width=le(l),{type:"elem",elem:v}},Cl=.008,Jo={type:"kern",size:-1*Cl},tv=new Set(["|","\\lvert","\\rvert","\\vert"]),nv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),pf=function(n,r,a,l,u,f){var v,p,x,b,_="",k=0;v=x=b=n,p=null;var T="Size1-Regular";n==="\\uparrow"?x=b="⏐":n==="\\Uparrow"?x=b="‖":n==="\\downarrow"?v=x="⏐":n==="\\Downarrow"?v=x="‖":n==="\\updownarrow"?(v="\\uparrow",x="⏐",b="\\downarrow"):n==="\\Updownarrow"?(v="\\Uparrow",x="‖",b="\\Downarrow"):tv.has(n)?(x="∣",_="vert",k=333):nv.has(n)?(x="∥",_="doublevert",k=556):n==="["||n==="\\lbrack"?(v="⎡",x="⎢",b="⎣",T="Size4-Regular",_="lbrack",k=667):n==="]"||n==="\\rbrack"?(v="⎤",x="⎥",b="⎦",T="Size4-Regular",_="rbrack",k=667):n==="\\lfloor"||n==="⌊"?(x=v="⎢",b="⎣",T="Size4-Regular",_="lfloor",k=667):n==="\\lceil"||n==="⌈"?(v="⎡",x=b="⎢",T="Size4-Regular",_="lceil",k=667):n==="\\rfloor"||n==="⌋"?(x=v="⎥",b="⎦",T="Size4-Regular",_="rfloor",k=667):n==="\\rceil"||n==="⌉"?(v="⎤",x=b="⎥",T="Size4-Regular",_="rceil",k=667):n==="("||n==="\\lparen"?(v="⎛",x="⎜",b="⎝",T="Size4-Regular",_="lparen",k=875):n===")"||n==="\\rparen"?(v="⎞",x="⎟",b="⎠",T="Size4-Regular",_="rparen",k=875):n==="\\{"||n==="\\lbrace"?(v="⎧",p="⎨",b="⎩",x="⎪",T="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(v="⎫",p="⎬",b="⎭",x="⎪",T="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(v="⎧",b="⎩",x="⎪",T="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(v="⎫",b="⎭",x="⎪",T="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(v="⎧",b="⎭",x="⎪",T="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(v="⎫",b="⎩",x="⎪",T="Size4-Regular");var P=_i(v,T,u),E=P.height+P.depth,N=_i(x,T,u),D=N.height+N.depth,O=_i(b,T,u),H=O.height+O.depth,B=0,W=1;if(p!==null){var U=_i(p,T,u);B=U.height+U.depth,W=2}var L=E+H+B,V=Math.max(0,Math.ceil((r-L)/(W*D))),oe=L+V*W*D,Te=l.fontMetrics().axisHeight;a&&(Te*=l.sizeMultiplier);var Se=oe/2-Te,fe=[];if(_.length>0){var we=oe-E-H,je=Math.round(oe*1e3),We=v8(_,Math.round(we*1e3)),Ye=new zr(_,We),Ie=(k/1e3).toFixed(3)+"em",ae=(je/1e3).toFixed(3)+"em",xe=new Gn([Ye],{width:Ie,height:ae,viewBox:"0 0 "+k+" "+je}),ue=Sr([],[xe],l);ue.height=je/1e3,ue.style.width=Ie,ue.style.height=ae,fe.push({type:"elem",elem:ue})}else{if(fe.push(hl(b,T,u)),fe.push(Jo),p===null){var M=oe-E-H+2*Cl;fe.push(pl(x,M,l))}else{var G=(oe-E-H-B)/2+2*Cl;fe.push(pl(x,G,l)),fe.push(Jo),fe.push(hl(p,T,u)),fe.push(Jo),fe.push(pl(x,G,l))}fe.push(Jo),fe.push(hl(v,T,u))}var ge=l.havingBaseStyle(Ce.TEXT),$e=Ge({positionType:"bottom",positionData:Se,children:fe});return Yl(Z(["delimsizing","mult"],[$e],ge),Ce.TEXT,l,f)},vl=80,gl=.08,yl=function(n,r,a,l,u){var f=h8(n,l,a),v=new zr(n,f),p=new Gn([v],{width:"400em",height:le(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return Sr(["hide-tail"],[p],u)},rv=function(n,r){var a=r.havingBaseSizing(),l=wf("\\surd",n*a.sizeMultiplier,xf,a),u=a.sizeMultiplier,f=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),v,p=0,x=0,b=0,_;return l.type==="small"?(b=1e3+1e3*f+vl,n<1?u=1:n<1.4&&(u=.7),p=(1+f+gl)/u,x=(1+f)/u,v=yl("sqrtMain",p,b,f,r),v.style.minWidth="0.853em",_=.833/u):l.type==="large"?(b=(1e3+vl)*zi[l.size],x=(zi[l.size]+f)/u,p=(zi[l.size]+f+gl)/u,v=yl("sqrtSize"+l.size,p,b,f,r),v.style.minWidth="1.02em",_=1/u):(p=n+f+gl,x=n+f,b=Math.floor(1e3*n+f)+vl,v=yl("sqrtTall",p,b,f,r),v.style.minWidth="0.742em",_=1.056),v.height=x,v.style.height=le(p),{span:v,advanceWidth:_,ruleWidth:(r.fontMetrics().sqrtRuleThickness+f)*u}},vf=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),iv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),gf=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),zi=[0,1.2,1.8,2.4,3],yf=function(n,r,a,l,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),vf.has(n)||gf.has(n))return hf(n,r,!1,a,l,u);if(iv.has(n))return pf(n,zi[r],!1,a,l,u);throw new te("Illegal delimiter: '"+n+"'")},ov=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],av=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"stack"}],xf=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],sv=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},wf=function(n,r,a,l){for(var u=Math.min(2,3-l.style.size),f=u;f<a.length&&a[f].type!=="stack";f++){var v=_i(n,sv(a[f]),"math"),p=v.height+v.depth;if(a[f].type==="small"){var x=l.havingBaseStyle(a[f].style);p*=x.sizeMultiplier}if(p>r)return a[f]}return a[a.length-1]},Pl=function(n,r,a,l,u,f){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var v;gf.has(n)?v=ov:vf.has(n)?v=xf:v=av;var p=wf(n,r,v,l);return p.type==="small"?J8(n,p.style,a,l,u,f):p.type==="large"?hf(n,p.size,a,l,u,f):pf(n,r,a,l,u,f)},xl=function(n,r,a,l,u,f){var v=l.fontMetrics().axisHeight*l.sizeMultiplier,p=901,x=5/l.fontMetrics().ptPerEm,b=Math.max(r-v,a+v),_=Math.max(b/500*p,2*b-x);return Pl(n,_,!0,l,u,f)},sd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},lv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function va(o,n){var r=ha(o);if(r&&lv.has(r.text))return r;throw r?new te("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new te("Invalid delimiter type '"+o.type+"'",o)}ce({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=va(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:sd[o.funcName].size,mclass:sd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?Z([o.mclass]):yf(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(cn(o.delim,o.mode));var r=new ne("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=le(zi[o.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function ld(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ce({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new te("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:va(n[0],o).text,color:r}}});ce({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=va(n[0],o),a=o.parser;++a.leftrightDepth;var l=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var u=Pe(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:l,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{ld(o);for(var r=yt(o.body,n,!0,["mopen","mclose"]),a=0,l=0,u=!1,f=0;f<r.length;f++)r[f].isMiddle?u=!0:(a=Math.max(r[f].height,a),l=Math.max(r[f].depth,l));a*=n.sizeMultiplier,l*=n.sizeMultiplier;var v;if(o.left==="."?v=ji(n,["mopen"]):v=xl(o.left,a,l,n,o.mode,["mopen"]),r.unshift(v),u)for(var p=1;p<r.length;p++){var x=r[p],b=x.isMiddle;b&&(r[p]=xl(b.delim,a,l,b.options,o.mode,[]))}var _;if(o.right===".")_=ji(n,["mclose"]);else{var k=o.rightColor?n.withColor(o.rightColor):n;_=xl(o.right,a,l,k,o.mode,["mclose"])}return r.push(_),Z(["minner"],r,n)},mathmlBuilder:(o,n)=>{ld(o);var r=Wt(o.body,n);if(o.left!=="."){var a=new ne("mo",[cn(o.left,o.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(o.right!=="."){var l=new ne("mo",[cn(o.right,o.mode)]);l.setAttribute("fence","true"),o.rightColor&&l.setAttribute("mathcolor",o.rightColor),r.push(l)}return Wl(r)}});ce({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=va(n[0],o);if(!o.parser.leftrightDepth)throw new te("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=ji(n,[]);else{r=yf(o.delim,1,n,o.mode,[]);var a={delim:o.delim,options:n};r.isMiddle=a}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?cn("|","text"):cn(o.delim,o.mode),a=new ne("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var Ql=(o,n)=>{var r=A0(Le(o.body,n),n),a=o.label.slice(1),l=n.sizeMultiplier,u,f=0,v=Wn(o.body);if(a==="sout")u=Z(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/l,f=-.5*n.fontMetrics().xHeight;else if(a==="phase"){var p=at({number:.6,unit:"pt"},n),x=at({number:.35,unit:"ex"},n),b=n.havingBaseSizing();l=l/b.sizeMultiplier;var _=r.height+r.depth+p+x;r.style.paddingLeft=le(_/2+p);var k=Math.floor(1e3*_*l),T=f8(k),P=new Gn([new zr("phase",T)],{width:"400em",height:le(k/1e3),viewBox:"0 0 400000 "+k,preserveAspectRatio:"xMinYMin slice"});u=Sr(["hide-tail"],[P],n),u.style.height=le(_),f=r.depth+p+x}else{/cancel/.test(a)?v||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var E=0,N=0,D=0;/box/.test(a)?(D=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),E=n.fontMetrics().fboxsep+(a==="colorbox"?0:D),N=E):a==="angl"?(D=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),E=4*D,N=Math.max(0,.25-r.depth)):(E=v?.2:0,N=E),u=U8(r,a,E,N,n),/fbox|boxed|fcolorbox/.test(a)?(u.style.borderStyle="solid",u.style.borderWidth=le(D)):a==="angl"&&D!==.049&&(u.style.borderTopWidth=le(D),u.style.borderRightWidth=le(D)),f=r.depth+N,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var O;if(o.backgroundColor)O=Ge({positionType:"individualShift",children:[{type:"elem",elem:u,shift:f},{type:"elem",elem:r,shift:0}]});else{var H=/cancel|phase/.test(a)?["svg-align"]:[];O=Ge({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:f,wrapperClasses:H}]})}return/cancel/.test(a)&&(O.height=r.height,O.depth=r.depth),/cancel/.test(a)&&!v?Z(["mord","cancel-lap"],[O],n):Z(["mord"],[O],n)},Xl=(o,n)=>{var r=0,a=new ne(o.label.includes("colorbox")?"mpadded":"menclose",[Qe(o.body,n)]);switch(o.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var l=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);a.setAttribute("style","border: "+l+"em solid "+String(o.borderColor))}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&a.setAttribute("mathbackground",o.backgroundColor),a};ce({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:a,funcName:l}=o,u=Pe(n[0],"color-token").color,f=n[1];return{type:"enclose",mode:a.mode,label:l,backgroundColor:u,body:f}},htmlBuilder:Ql,mathmlBuilder:Xl});ce({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:a,funcName:l}=o,u=Pe(n[0],"color-token").color,f=Pe(n[1],"color-token").color,v=n[2];return{type:"enclose",mode:a.mode,label:l,backgroundColor:f,borderColor:u,body:v}},htmlBuilder:Ql,mathmlBuilder:Xl});ce({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});ce({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];return{type:"enclose",mode:r.mode,label:a,body:l}},htmlBuilder:Ql,mathmlBuilder:Xl});ce({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var bf={};function Tn(o){for(var{type:n,names:r,props:a,handler:l,htmlBuilder:u,mathmlBuilder:f}=o,v={type:n,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:l},p=0;p<r.length;++p)bf[r[p]]=v;u&&(aa[n]=u),f&&(sa[n]=f)}var $f={};function w(o,n){$f[o]=n}function ud(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var ga=o=>{var n=o.parser.settings;if(!n.displayMode)throw new te("{"+o.envName+"} can be used only in display mode.")},uv=new Set(["gather","gather*"]);function Zl(o){if(!o.includes("ed"))return!o.includes("*")}function jr(o,n,r){var{hskipBeforeAndAfter:a,addJot:l,cols:u,arraystretch:f,colSeparationType:v,autoTag:p,singleRow:x,emptySingleRow:b,maxNumCols:_,leqno:k}=n;if(o.gullet.beginGroup(),x||o.gullet.macros.set("\\cr","\\\\\\relax"),!f){var T=o.gullet.expandMacroAsText("\\arraystretch");if(T==null)f=1;else if(f=parseFloat(T),!f||f<0)throw new te("Invalid \\arraystretch: "+T)}o.gullet.beginGroup();var P=[],E=[P],N=[],D=[],O=p!=null?[]:void 0;function H(){p&&o.gullet.macros.set("\\@eqnsw","1",!0)}function B(){O&&(o.gullet.macros.get("\\df@tag")?(O.push(o.subparse([new Qt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):O.push(!!p&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(H(),D.push(ud(o));;){var W=o.parseExpression(!1,x?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),W={type:"ordgroup",mode:o.mode,body:W},r&&(W={type:"styling",mode:o.mode,style:r,body:[W]}),P.push(W);var U=o.fetch().text;if(U==="&"){if(_&&P.length===_){if(x||v)throw new te("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(U==="\\end"){B(),P.length===1&&W.type==="styling"&&W.body[0].body.length===0&&(E.length>1||!b)&&E.pop(),D.length<E.length+1&&D.push([]);break}else if(U==="\\\\"){o.consume();var L=void 0;o.gullet.future().text!==" "&&(L=o.parseSizeGroup(!0)),N.push(L?L.value:null),B(),D.push(ud(o)),P=[],E.push(P),H()}else throw new te("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:l,arraystretch:f,body:E,cols:u,rowGaps:N,hskipBeforeAndAfter:a,hLinesBeforeRow:D,colSeparationType:v,tags:O,leqno:k}}function Jl(o){return o.slice(0,1)==="d"?"display":"text"}var jn=function(n,r){var a,l,u=n.body.length,f=n.hLinesBeforeRow,v=0,p=new Array(u),x=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),_=1/r.fontMetrics().ptPerEm,k=5*_;if(n.colSeparationType&&n.colSeparationType==="small"){var T=r.havingStyle(Ce.SCRIPT).sizeMultiplier;k=.2778*(T/r.sizeMultiplier)}var P=n.colSeparationType==="CD"?at({number:3,unit:"ex"},r):12*_,E=3*_,N=n.arraystretch*P,D=.7*N,O=.3*N,H=0;function B(kt){for(var Ve=0;Ve<kt.length;++Ve)Ve>0&&(H+=.25),x.push({pos:H,isDashed:kt[Ve]})}for(B(f[0]),a=0;a<n.body.length;++a){var W=n.body[a],U=D,L=O;v<W.length&&(v=W.length);var V=new Array(W.length);for(l=0;l<W.length;++l){var oe=Le(W[l],r);L<oe.depth&&(L=oe.depth),U<oe.height&&(U=oe.height),V[l]=oe}var Te=n.rowGaps[a],Se=0;Te&&(Se=at(Te,r),Se>0&&(Se+=O,L<Se&&(L=Se),Se=0)),n.addJot&&(L+=E),V.height=U,V.depth=L,H+=U,V.pos=H,H+=L+Se,p[a]=V,B(f[a+1])}var fe=H/2+r.fontMetrics().axisHeight,we=n.cols||[],je=[],We,Ye,Ie=[];if(n.tags&&n.tags.some(kt=>kt))for(a=0;a<u;++a){var ae=p[a],xe=ae.pos-fe,ue=n.tags[a],M=void 0;ue===!0?M=Z(["eqn-num"],[],r):ue===!1?M=Z([],[],r):M=Z([],yt(ue,r,!0),r),M.depth=ae.depth,M.height=ae.height,Ie.push({type:"elem",elem:M,shift:xe})}for(l=0,Ye=0;l<v||Ye<we.length;++l,++Ye){for(var G=we[Ye]||{},ge=!0;G.type==="separator";){if(ge||(We=Z(["arraycolsep"],[]),We.style.width=le(r.fontMetrics().doubleRuleSep),je.push(We)),G.separator==="|"||G.separator===":"){var $e=G.separator==="|"?"solid":"dashed",be=Z(["vertical-separator"],[],r);be.style.height=le(H),be.style.borderRightWidth=le(b),be.style.borderRightStyle=$e,be.style.margin="0 "+le(-b/2);var Ae=H-fe;Ae&&(be.style.verticalAlign=le(-Ae)),je.push(be)}else throw new te("Invalid separator type: "+G.separator);Ye++,G=we[Ye]||{},ge=!1}if(!(l>=v)){var Ne=void 0;if(l>0||n.hskipBeforeAndAfter){var De;Ne=(De=G.pregap)!=null?De:k,Ne!==0&&(We=Z(["arraycolsep"],[]),We.style.width=le(Ne),je.push(We))}var Be=[];for(a=0;a<u;++a){var ft=p[a],Zt=ft[l];if(Zt){var Jr=ft.pos-fe;Zt.depth=ft.depth,Zt.height=ft.height,Be.push({type:"elem",elem:Zt,shift:Jr})}}if(Be=Ge({positionType:"individualShift",children:Be}),Be=Z(["col-align-"+(G.align||"c")],[Be]),je.push(Be),l<v-1||n.hskipBeforeAndAfter){var Mn;Ne=(Mn=G.postgap)!=null?Mn:k,Ne!==0&&(We=Z(["arraycolsep"],[]),We.style.width=le(Ne),je.push(We))}}}if(p=Z(["mtable"],je),x.length>0){for(var Kn=M0("hline",r,b),qr=M0("hdashline",r,b),An=[{type:"elem",elem:p,shift:0}];x.length>0;){var Cn=x.pop(),Yn=Cn.pos-fe;Cn.isDashed?An.push({type:"elem",elem:qr,shift:Yn}):An.push({type:"elem",elem:Kn,shift:Yn})}p=Ge({positionType:"individualShift",children:An})}if(Ie.length===0)return Z(["mord"],[p],r);var Ue=Ge({positionType:"individualShift",children:Ie});return Ue=Z(["tag"],[Ue],r),Vn([p,Ue])},cv={c:"center ",l:"left ",r:"right "},qn=function(n,r){for(var a=[],l=new ne("mtd",[],["mtr-glue"]),u=new ne("mtd",[],["mml-eqn-num"]),f=0;f<n.body.length;f++){for(var v=n.body[f],p=[],x=0;x<v.length;x++)p.push(new ne("mtd",[Qe(v[x],r)]));n.tags&&n.tags[f]&&(p.unshift(l),p.push(l),n.leqno?p.unshift(u):p.push(u)),a.push(new ne("mtr",p))}var b=new ne("mtable",a),_=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);b.setAttribute("rowspacing",le(_));var k="",T="";if(n.cols&&n.cols.length>0){var P=n.cols,E="",N=!1,D=0,O=P.length;P[0].type==="separator"&&(k+="top ",D=1),P[P.length-1].type==="separator"&&(k+="bottom ",O-=1);for(var H=D;H<O;H++)P[H].type==="align"?(T+=cv[P[H].align],N&&(E+="none "),N=!0):P[H].type==="separator"&&N&&(E+=P[H].separator==="|"?"solid ":"dashed ",N=!1);b.setAttribute("columnalign",T.trim()),/[sd]/.test(E)&&b.setAttribute("columnlines",E.trim())}if(n.colSeparationType==="align"){for(var B=n.cols||[],W="",U=1;U<B.length;U++)W+=U%2?"0em ":"1em ";b.setAttribute("columnspacing",W.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var L="",V=n.hLinesBeforeRow;k+=V[0].length>0?"left ":"",k+=V[V.length-1].length>0?"right ":"";for(var oe=1;oe<V.length-1;oe++)L+=V[oe].length===0?"none ":V[oe][0]?"dashed ":"solid ";return/[sd]/.test(L)&&b.setAttribute("rowlines",L.trim()),k!==""&&(b=new ne("menclose",[b]),b.setAttribute("notation",k.trim())),n.arraystretch&&n.arraystretch<1&&(b=new ne("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},_f=function(n,r){n.envName.includes("ed")||ga(n);var a=[],l=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",f=jr(n.parser,{cols:a,addJot:!0,autoTag:u?void 0:Zl(n.envName),emptySingleRow:!0,colSeparationType:l,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),v,p=0,x={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",_=0;_<r[0].body.length;_++){var k=Pe(r[0].body[_],"textord");b+=k.text}v=Number(b),p=v*2}var T=!p;f.body.forEach(function(D){for(var O=1;O<D.length;O+=2){var H=Pe(D[O],"styling"),B=Pe(H.body[0],"ordgroup");B.body.unshift(x)}if(T)p<D.length&&(p=D.length);else{var W=D.length/2;if(v<W)throw new te("Too many math in a row: "+("expected "+v+", but got "+W),D[0])}});for(var P=0;P<p;++P){var E="r",N=0;P%2===1?E="l":P>0&&T&&(N=1),a[P]={type:"align",align:E,pregap:N,postgap:0}}return f.colSeparationType=T?"align":"alignat",f};Tn({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=ha(n[0]),a=r?[n[0]]:Pe(n[0],"ordgroup").body,l=a.map(function(f){var v=Vl(f),p=v.text;if("lcr".includes(p))return{type:"align",align:p};if(p==="|")return{type:"separator",separator:"|"};if(p===":")return{type:"separator",separator:":"};throw new te("Unknown column alignment: "+p,f)}),u={cols:l,hskipBeforeAndAfter:!0,maxNumCols:l.length};return jr(o.parser,u,Jl(o.envName))},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var l=o.parser;if(l.consumeSpaces(),l.fetch().text==="["){if(l.consume(),l.consumeSpaces(),r=l.fetch().text,!"lcr".includes(r))throw new te("Expected l or c or r",l.nextToken);l.consume(),l.consumeSpaces(),l.expect("]"),l.consume(),a.cols=[{type:"align",align:r}]}}var u=jr(o.parser,a,Jl(o.envName)),f=Math.max(0,...u.body.map(v=>v.length));return u.cols=new Array(f).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=jr(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=ha(n[0]),a=r?[n[0]]:Pe(n[0],"ordgroup").body,l=a.map(function(f){var v=Vl(f),p=v.text;if("lc".includes(p))return{type:"align",align:p};throw new te("Unknown column alignment: "+p,f)});if(l.length>1)throw new te("{subarray} can contain only one column");var u={cols:l,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=jr(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new te("{subarray} can contain only one column");return u},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=jr(o.parser,n,Jl(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:_f,htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){uv.has(o.envName)&&ga(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Zl(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return jr(o.parser,n,"display")},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:_f,htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){ga(o);var n={autoTag:Zl(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return jr(o.parser,n,"display")},htmlBuilder:jn,mathmlBuilder:qn});Tn({type:"array",names:["CD"],props:{numArgs:0},handler(o){return ga(o),X8(o.parser)},htmlBuilder:jn,mathmlBuilder:qn});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");ce({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new te(o.funcName+" valid only within array environment")}});var cd=bf;ce({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];if(l.type!=="ordgroup")throw new te("Invalid environment name",l);for(var u="",f=0;f<l.body.length;++f)u+=Pe(l.body[f],"textord").text;if(a==="\\begin"){if(!cd.hasOwnProperty(u))throw new te("No such environment: "+u,l);var v=cd[u],{args:p,optArgs:x}=r.parseArguments("\\begin{"+u+"}",v),b={mode:r.mode,envName:u,parser:r},_=v.handler(b,p,x);r.expect("\\end",!1);var k=r.nextToken,T=Pe(r.parseFunction(),"environment");if(T.name!==u)throw new te("Mismatch: \\begin{"+u+"} matched by \\end{"+T.name+"}",k);return _}return{type:"environment",mode:r.mode,name:u,nameGroup:l}}});var kf=(o,n)=>{var r=o.font,a=n.withFont(r);return Le(o.body,a)},zf=(o,n)=>{var r=o.font,a=n.withFont(r);return Qe(o.body,a)},dd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ce({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=la(n[0]),u=a;return u in dd&&(u=dd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:l}},htmlBuilder:kf,mathmlBuilder:zf});ce({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"mclass",mode:r.mode,mclass:pa(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:Wn(a)}}});ce({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a,breakOnTokenText:l}=o,{mode:u}=r,f=r.parseExpression(!0,l),v="math"+a.slice(1);return{type:"font",mode:u,font:v,body:{type:"ordgroup",mode:r.mode,body:f}}},htmlBuilder:kf,mathmlBuilder:zf});var dv=(o,n)=>{var r=n.style,a=r.fracNum(),l=r.fracDen(),u;u=n.havingStyle(a);var f=Le(o.numer,u,n);if(o.continued){var v=8.5/n.fontMetrics().ptPerEm,p=3.5/n.fontMetrics().ptPerEm;f.height=f.height<v?v:f.height,f.depth=f.depth<p?p:f.depth}u=n.havingStyle(l);var x=Le(o.denom,u,n),b,_,k;o.hasBarLine?(o.barSize?(_=at(o.barSize,n),b=M0("frac-line",n,_)):b=M0("frac-line",n),_=b.height,k=b.height):(b=null,_=0,k=n.fontMetrics().defaultRuleThickness);var T,P,E;r.size===Ce.DISPLAY.size?(T=n.fontMetrics().num1,_>0?P=3*k:P=7*k,E=n.fontMetrics().denom1):(_>0?(T=n.fontMetrics().num2,P=k):(T=n.fontMetrics().num3,P=3*k),E=n.fontMetrics().denom2);var N;if(b){var O=n.fontMetrics().axisHeight;T-f.depth-(O+.5*_)<P&&(T+=P-(T-f.depth-(O+.5*_))),O-.5*_-(x.height-E)<P&&(E+=P-(O-.5*_-(x.height-E)));var H=-(O-.5*_);N=Ge({positionType:"individualShift",children:[{type:"elem",elem:x,shift:E},{type:"elem",elem:b,shift:H},{type:"elem",elem:f,shift:-T}]})}else{var D=T-f.depth-(x.height-E);D<P&&(T+=.5*(P-D),E+=.5*(P-D)),N=Ge({positionType:"individualShift",children:[{type:"elem",elem:x,shift:E},{type:"elem",elem:f,shift:-T}]})}u=n.havingStyle(r),N.height*=u.sizeMultiplier/n.sizeMultiplier,N.depth*=u.sizeMultiplier/n.sizeMultiplier;var B;r.size===Ce.DISPLAY.size?B=n.fontMetrics().delim1:r.size===Ce.SCRIPTSCRIPT.size?B=n.havingStyle(Ce.SCRIPT).fontMetrics().delim2:B=n.fontMetrics().delim2;var W,U;return o.leftDelim==null?W=ji(n,["mopen"]):W=Pl(o.leftDelim,B,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?U=Z([]):o.rightDelim==null?U=ji(n,["mclose"]):U=Pl(o.rightDelim,B,!0,n.havingStyle(r),o.mode,["mclose"]),Z(["mord"].concat(u.sizingClasses(n)),[W,Z(["mfrac"],[N]),U],n)},fv=(o,n)=>{var r=new ne("mfrac",[Qe(o.numer,n),Qe(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var a=at(o.barSize,n);r.setAttribute("linethickness",le(a))}if(o.leftDelim!=null||o.rightDelim!=null){var l=[];if(o.leftDelim!=null){var u=new ne("mo",[new ht(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),l.push(u)}if(l.push(r),o.rightDelim!=null){var f=new ne("mo",[new ht(o.rightDelim.replace("\\",""))]);f.setAttribute("fence","true"),l.push(f)}return Wl(l)}return r},Sf=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};ce({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0],u=n[1],f,v=null,p=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":f=!0;break;case"\\\\atopfrac":f=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":f=!1,v="(",p=")";break;case"\\\\bracefrac":f=!1,v="\\{",p="\\}";break;case"\\\\brackfrac":f=!1,v="[",p="]";break;default:throw new Error("Unrecognized genfrac command")}var x=a==="\\cfrac",b=null;return x||a.startsWith("\\d")?b="display":a.startsWith("\\t")&&(b="text"),Sf({type:"genfrac",mode:r.mode,numer:l,denom:u,continued:x,hasBarLine:f,leftDelim:v,rightDelim:p,barSize:null},b)},htmlBuilder:dv,mathmlBuilder:fv});ce({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:a}=o,l;switch(r){case"\\over":l="\\frac";break;case"\\choose":l="\\binom";break;case"\\atop":l="\\\\atopfrac";break;case"\\brace":l="\\\\bracefrac";break;case"\\brack":l="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:l,token:a}}});var fd=["display","text","script","scriptscript"],md=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};ce({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,a=n[4],l=n[5],u=la(n[0]),f=u.type==="atom"&&u.family==="open"?md(u.text):null,v=la(n[1]),p=v.type==="atom"&&v.family==="close"?md(v.text):null,x=Pe(n[2],"size"),b,_=null;x.isBlank?b=!0:(_=x.value,b=_.number>0);var k=null,T=n[3];if(T.type==="ordgroup"){if(T.body.length>0){var P=Pe(T.body[0],"textord");k=fd[Number(P.text)]}}else T=Pe(T,"textord"),k=fd[Number(T.text)];return Sf({type:"genfrac",mode:r.mode,numer:a,denom:l,continued:!1,hasBarLine:b,barSize:_,leftDelim:f,rightDelim:p},k)}});ce({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:a,token:l}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Pe(n[0],"size").value,token:l}}});ce({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0],u=Pe(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var f=n[2],v=u.number>0;return{type:"genfrac",mode:r.mode,numer:l,denom:f,continued:!1,hasBarLine:v,barSize:u,leftDelim:null,rightDelim:null}}});var Tf=(o,n)=>{var r=n.style,a,l;o.type==="supsub"?(a=o.sup?Le(o.sup,n.havingStyle(r.sup()),n):Le(o.sub,n.havingStyle(r.sub()),n),l=Pe(o.base,"horizBrace")):l=Pe(o,"horizBrace");var u=Le(l.base,n.havingBaseStyle(Ce.DISPLAY)),f=ma(l,n),v;if(l.isOver?(v=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:f}]}),v.children[0].children[0].children[1].classes.push("svg-align")):(v=Ge({positionType:"bottom",positionData:u.depth+.1+f.height,children:[{type:"elem",elem:f},{type:"kern",size:.1},{type:"elem",elem:u}]}),v.children[0].children[0].children[0].classes.push("svg-align")),a){var p=Z(["mord",l.isOver?"mover":"munder"],[v],n);l.isOver?v=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:p},{type:"kern",size:.2},{type:"elem",elem:a}]}):v=Ge({positionType:"bottom",positionData:p.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:p}]})}return Z(["mord",l.isOver?"mover":"munder"],[v],n)},mv=(o,n)=>{var r=fa(o.label);return new ne(o.isOver?"mover":"munder",[Qe(o.base,n),r])};ce({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:n[0]}},htmlBuilder:Tf,mathmlBuilder:mv});ce({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[1],l=Pe(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:l})?{type:"href",mode:r.mode,href:l,body:dt(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=yt(o.body,n,!1);return M8(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=Tr(o.body,n);return r instanceof ne||(r=new ne("mrow",[r])),r.setAttribute("href",o.href),r}});ce({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=Pe(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var l=[],u=0;u<a.length;u++){var f=a[u];f==="~"&&(f="\\textasciitilde"),l.push({type:"textord",mode:"text",text:f})}var v={type:"text",mode:r.mode,font:"\\texttt",body:l};return{type:"href",mode:r.mode,href:a,body:dt(v)}}});ce({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:dt(n[0])}},htmlBuilder(o,n){var r=yt(o.body,n,!1);return Vn(r)},mathmlBuilder(o,n){return new ne("mrow",Wt(o.body,n))}});ce({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a,token:l}=o,u=Pe(n[0],"raw").string,f=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var v,p={};switch(a){case"\\htmlClass":p.class=u,v={command:"\\htmlClass",class:u};break;case"\\htmlId":p.id=u,v={command:"\\htmlId",id:u};break;case"\\htmlStyle":p.style=u,v={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var x=u.split(","),b=0;b<x.length;b++){var _=x[b],k=_.indexOf("=");if(k<0)throw new te("\\htmlData key/value '"+_+"' missing equals sign");var T=_.slice(0,k),P=_.slice(k+1);p["data-"+T.trim()]=P}v={command:"\\htmlData",attributes:p};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(v)?{type:"html",mode:r.mode,attributes:p,body:dt(f)}:r.formatUnsupportedCmd(a)},htmlBuilder:(o,n)=>{var r=yt(o.body,n,!1),a=["enclosing"];o.attributes.class&&a.push(...o.attributes.class.trim().split(/\s+/));var l=Z(a,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&l.setAttribute(u,o.attributes[u]);return l},mathmlBuilder:(o,n)=>Tr(o.body,n)});ce({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:dt(n[0]),mathml:dt(n[1])}},htmlBuilder:(o,n)=>{var r=yt(o.html,n,!1);return Vn(r)},mathmlBuilder:(o,n)=>Tr(o.mathml,n)});var wl=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new te("Invalid size: '"+n+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!Gd(a))throw new te("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};ce({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:a}=o,l={number:0,unit:"em"},u={number:.9,unit:"em"},f={number:0,unit:"em"},v="";if(r[0])for(var p=Pe(r[0],"raw").string,x=p.split(","),b=0;b<x.length;b++){var _=x[b].split("=");if(_.length===2){var k=_[1].trim();switch(_[0].trim()){case"alt":v=k;break;case"width":l=wl(k);break;case"height":u=wl(k);break;case"totalheight":f=wl(k);break;default:throw new te("Invalid key: '"+_[0]+"' in \\includegraphics.")}}}var T=Pe(n[0],"url").url;return v===""&&(v=T,v=v.replace(/^.*[\\/]/,""),v=v.substring(0,v.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:T})?{type:"includegraphics",mode:a.mode,alt:v,width:l,height:u,totalheight:f,src:T}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=at(o.height,n),a=0;o.totalheight.number>0&&(a=at(o.totalheight,n)-r);var l=0;o.width.number>0&&(l=at(o.width,n));var u={height:le(r+a)};l>0&&(u.width=le(l)),a>0&&(u.verticalAlign=le(-a));var f=new $8(o.src,o.alt,u);return f.height=r,f.depth=a,f},mathmlBuilder:(o,n)=>{var r=new ne("mglyph",[]);r.setAttribute("alt",o.alt);var a=at(o.height,n),l=0;if(o.totalheight.number>0&&(l=at(o.totalheight,n)-a,r.setAttribute("valign",le(-l))),r.setAttribute("height",le(a+l)),o.width.number>0){var u=at(o.width,n);r.setAttribute("width",le(u))}return r.setAttribute("src",o.src),r}});ce({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:a}=o,l=Pe(n[0],"size");if(r.settings.strict){var u=a[1]==="m",f=l.value.unit==="mu";u?(f||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+l.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):f&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:l.value}},htmlBuilder(o,n){return Qd(o.dimension,n)},mathmlBuilder(o,n){var r=at(o.dimension,n);return new nf(r)}});ce({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:l}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=Z([],[Le(o.body,n)]),r=Z(["inner"],[r],n)):r=Z(["inner"],[Le(o.body,n)]);var a=Z(["fix"],[]),l=Z([o.alignment],[r,a],n),u=Z(["strut"]);return u.style.height=le(l.height+l.depth),l.depth&&(u.style.verticalAlign=le(-l.depth)),l.children.unshift(u),l=Z(["thinbox"],[l],n),Z(["mord","vbox"],[l],n)},mathmlBuilder:(o,n)=>{var r=new ne("mpadded",[Qe(o.body,n)]);if(o.alignment!=="rlap"){var a=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});ce({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:a}=o,l=a.mode;a.switchMode("math");var u=r==="\\("?"\\)":"$",f=a.parseExpression(!1,u);return a.expect(u),a.switchMode(l),{type:"styling",mode:a.mode,style:"text",body:f}}});ce({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new te("Mismatched "+o.funcName)}});var hd=(o,n)=>{switch(n.style.size){case Ce.DISPLAY.size:return o.display;case Ce.TEXT.size:return o.text;case Ce.SCRIPT.size:return o.script;case Ce.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ce({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:dt(n[0]),text:dt(n[1]),script:dt(n[2]),scriptscript:dt(n[3])}},htmlBuilder:(o,n)=>{var r=hd(o,n),a=yt(r,n,!1);return Vn(a)},mathmlBuilder:(o,n)=>{var r=hd(o,n);return Tr(r,n)}});var jf=(o,n,r,a,l,u,f)=>{o=Z([],[o]);var v=r&&Wn(r),p,x;if(n){var b=Le(n,a.havingStyle(l.sup()),a);x={elem:b,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var _=Le(r,a.havingStyle(l.sub()),a);p={elem:_,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-_.height)}}var k;if(x&&p){var T=a.fontMetrics().bigOpSpacing5+p.elem.height+p.elem.depth+p.kern+o.depth+f;k=Ge({positionType:"bottom",positionData:T,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:p.elem,marginLeft:le(-u)},{type:"kern",size:p.kern},{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:le(u)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if(p){var P=o.height-f;k=Ge({positionType:"top",positionData:P,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:p.elem,marginLeft:le(-u)},{type:"kern",size:p.kern},{type:"elem",elem:o}]})}else if(x){var E=o.depth+f;k=Ge({positionType:"bottom",positionData:E,children:[{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:le(u)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return o;var N=[k];if(p&&u!==0&&!v){var D=Z(["mspace"],[],a);D.style.marginRight=le(u),N.unshift(D)}return Z(["mop","op-limits"],N,a)},qf=new Set(["\\smallint"]),P0=(o,n)=>{var r,a,l=!1,u;o.type==="supsub"?(r=o.sup,a=o.sub,u=Pe(o.base,"op"),l=!0):u=Pe(o,"op");var f=n.style,v=!1;f.size===Ce.DISPLAY.size&&u.symbol&&!qf.has(u.name)&&(v=!0);var p;if(u.symbol){var x=v?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),p=Dt(u.name,x,"math",n,["mop","op-symbol",v?"large-op":"small-op"]),b.length>0){var _=p.italic,k=Zd(b+"Size"+(v?"2":"1"),n);p=Ge({positionType:"individualShift",children:[{type:"elem",elem:p,shift:0},{type:"elem",elem:k,shift:v?.08:0}]}),u.name="\\"+b,p.classes.unshift("mop"),p.italic=_}}else if(u.body){var T=yt(u.body,n,!0);T.length===1&&T[0]instanceof un?(p=T[0],p.classes[0]="mop"):p=Z(["mop"],T,n)}else{for(var P=[],E=1;E<u.name.length;E++)P.push(Hl(u.name[E],u.mode,n));p=Z(["mop"],P,n)}var N=0,D=0;return(p instanceof un||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(N=(p.height-p.depth)/2-n.fontMetrics().axisHeight,D=p.italic),l?jf(p,r,a,n,f,D,N):(N&&(p.style.position="relative",p.style.top=le(N)),p)},Ai=(o,n)=>{var r;if(o.symbol)r=new ne("mo",[cn(o.name,o.mode)]),qf.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new ne("mo",Wt(o.body,n));else{r=new ne("mi",[new ht(o.name.slice(1))]);var a=new ne("mo",[cn("⁡","text")]);o.parentIsSupSub?r=new ne("mrow",[r,a]):r=tf([r,a])}return r},hv={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ce({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=a;return l.length===1&&(l=hv[l]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:l}},htmlBuilder:P0,mathmlBuilder:Ai});ce({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:dt(a)}},htmlBuilder:P0,mathmlBuilder:Ai});var pv={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ce({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:P0,mathmlBuilder:Ai});ce({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:P0,mathmlBuilder:Ai});ce({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,a=r;return a.length===1&&(a=pv[a]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:P0,mathmlBuilder:Ai});var Mf=(o,n)=>{var r,a,l=!1,u;o.type==="supsub"?(r=o.sup,a=o.sub,u=Pe(o.base,"operatorname"),l=!0):u=Pe(o,"operatorname");var f;if(u.body.length>0){for(var v=u.body.map(_=>{var k=_.text;return typeof k=="string"?{type:"textord",mode:_.mode,text:k}:_}),p=yt(v,n.withFont("mathrm"),!0),x=0;x<p.length;x++){var b=p[x];b instanceof un&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}f=Z(["mop"],p,n)}else f=Z(["mop"],[],n);return l?jf(f,r,a,n,n.style,0,0):f},vv=(o,n)=>{for(var r=Wt(o.body,n.withFont("mathrm")),a=!0,l=0;l<r.length;l++){var u=r[l];if(!(u instanceof nf))if(u instanceof ne)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var f=u.children[0];u.children.length===1&&f instanceof ht?f.text=f.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var v=r.map(b=>b.toText()).join("");r=[new ht(v)]}var p=new ne("mi",r);p.setAttribute("mathvariant","normal");var x=new ne("mo",[cn("⁡","text")]);return o.parentIsSupSub?new ne("mrow",[p,x]):tf([p,x])};ce({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:a}=o,l=n[0];return{type:"operatorname",mode:r.mode,body:dt(l),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Mf,mathmlBuilder:vv});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Zr({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?Vn(yt(o.body,n,!1)):Z(["mord"],yt(o.body,n,!0),n)},mathmlBuilder(o,n){return Tr(o.body,n,!0)}});ce({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,a=n[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(o,n){var r=Le(o.body,n.havingCrampedStyle()),a=M0("overline-line",n),l=n.fontMetrics().defaultRuleThickness,u=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*l},{type:"elem",elem:a},{type:"kern",size:l}]});return Z(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new ne("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var a=new ne("mover",[Qe(o.body,n),r]);return a.setAttribute("accent","true"),a}});ce({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"phantom",mode:r.mode,body:dt(a)}},htmlBuilder:(o,n)=>{var r=yt(o.body,n.withPhantom(),!1);return Vn(r)},mathmlBuilder:(o,n)=>{var r=Wt(o.body,n);return new ne("mphantom",r)}});ce({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:(o,n)=>{var r=Z([],[Le(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),Z(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Wt(dt(o.body),n),a=new ne("mphantom",r),l=new ne("mpadded",[a]);return l.setAttribute("height","0px"),l.setAttribute("depth","0px"),l}});ce({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(o,n)=>{var r=Z(["inner"],[Le(o.body,n.withPhantom())]),a=Z(["fix"],[]);return Z(["mord","rlap"],[r,a],n)},mathmlBuilder:(o,n)=>{var r=Wt(dt(o.body),n),a=new ne("mphantom",r),l=new ne("mpadded",[a]);return l.setAttribute("width","0px"),l}});ce({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,a=Pe(n[0],"size").value,l=n[1];return{type:"raisebox",mode:r.mode,dy:a,body:l}},htmlBuilder(o,n){var r=Le(o.body,n),a=at(o.dy,n);return Ge({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new ne("mpadded",[Qe(o.body,n)]),a=o.dy.number+o.dy.unit;return r.setAttribute("voffset",a),r}});ce({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});ce({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:a}=o,l=r[0],u=Pe(n[0],"size"),f=Pe(n[1],"size");return{type:"rule",mode:a.mode,shift:l&&Pe(l,"size").value,width:u.value,height:f.value}},htmlBuilder(o,n){var r=Z(["mord","rule"],[],n),a=at(o.width,n),l=at(o.height,n),u=o.shift?at(o.shift,n):0;return r.style.borderRightWidth=le(a),r.style.borderTopWidth=le(l),r.style.bottom=le(u),r.width=a,r.height=l+u,r.depth=-u,r.maxFontSize=l*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=at(o.width,n),a=at(o.height,n),l=o.shift?at(o.shift,n):0,u=n.color&&n.getColor()||"black",f=new ne("mspace");f.setAttribute("mathbackground",u),f.setAttribute("width",le(r)),f.setAttribute("height",le(a));var v=new ne("mpadded",[f]);return l>=0?v.setAttribute("height",le(l)):(v.setAttribute("height",le(l)),v.setAttribute("depth",le(-l))),v.setAttribute("voffset",le(l)),v}});function Af(o,n,r){for(var a=yt(o,n,!1),l=n.sizeMultiplier/r.sizeMultiplier,u=0;u<a.length;u++){var f=a[u].classes.indexOf("sizing");f<0?Array.prototype.push.apply(a[u].classes,n.sizingClasses(r)):a[u].classes[f+1]==="reset-size"+n.size&&(a[u].classes[f+1]="reset-size"+r.size),a[u].height*=l,a[u].depth*=l}return Vn(a)}var pd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],gv=(o,n)=>{var r=n.havingSize(o.size);return Af(o.body,r,n)};ce({type:"sizing",names:pd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:a,parser:l}=o,u=l.parseExpression(!1,r);return{type:"sizing",mode:l.mode,size:pd.indexOf(a)+1,body:u}},htmlBuilder:gv,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),a=Wt(o.body,r),l=new ne("mstyle",a);return l.setAttribute("mathsize",le(r.sizeMultiplier)),l}});ce({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:a}=o,l=!1,u=!1,f=r[0]&&Pe(r[0],"ordgroup");if(f)for(var v="",p=0;p<f.body.length;++p){var x=f.body[p];if(v=x.text,v==="t")l=!0;else if(v==="b")u=!0;else{l=!1,u=!1;break}}else l=!0,u=!0;var b=n[0];return{type:"smash",mode:a.mode,body:b,smashHeight:l,smashDepth:u}},htmlBuilder:(o,n)=>{var r=Z([],[Le(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var l=0;l<r.children.length;l++)r.children[l].depth=0;var u=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return Z(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new ne("mpadded",[Qe(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ce({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:a}=o,l=r[0],u=n[0];return{type:"sqrt",mode:a.mode,body:u,index:l}},htmlBuilder(o,n){var r=Le(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=A0(r,n);var a=n.fontMetrics(),l=a.defaultRuleThickness,u=l;n.style.id<Ce.TEXT.id&&(u=n.fontMetrics().xHeight);var f=l+u/4,v=r.height+r.depth+f+l,{span:p,ruleWidth:x,advanceWidth:b}=rv(v,n),_=p.height-x;_>r.height+r.depth+f&&(f=(f+_-r.height-r.depth)/2);var k=p.height-r.height-f-x;r.style.paddingLeft=le(b);var T=Ge({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+k)},{type:"elem",elem:p},{type:"kern",size:x}]});if(o.index){var P=n.havingStyle(Ce.SCRIPTSCRIPT),E=Le(o.index,P,n),N=.6*(T.height-T.depth),D=Ge({positionType:"shift",positionData:-N,children:[{type:"elem",elem:E}]}),O=Z(["root"],[D]);return Z(["mord","sqrt"],[O,T],n)}else return Z(["mord","sqrt"],[T],n)},mathmlBuilder(o,n){var{body:r,index:a}=o;return a?new ne("mroot",[Qe(r,n),Qe(a,n)]):new ne("msqrt",[Qe(r,n)])}});var vd={display:Ce.DISPLAY,text:Ce.TEXT,script:Ce.SCRIPT,scriptscript:Ce.SCRIPTSCRIPT};ce({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:a,parser:l}=o,u=l.parseExpression(!0,r),f=a.slice(1,a.length-5);return{type:"styling",mode:l.mode,style:f,body:u}},htmlBuilder(o,n){var r=vd[o.style],a=n.havingStyle(r).withFont("");return Af(o.body,a,n)},mathmlBuilder(o,n){var r=vd[o.style],a=n.havingStyle(r),l=Wt(o.body,a),u=new ne("mstyle",l),f={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},v=f[o.style];return u.setAttribute("scriptlevel",v[0]),u.setAttribute("displaystyle",v[1]),u}});var yv=function(n,r){var a=n.base;if(a)if(a.type==="op"){var l=a.limits&&(r.style.size===Ce.DISPLAY.size||a.alwaysHandleSupSub);return l?P0:null}else if(a.type==="operatorname"){var u=a.alwaysHandleSupSub&&(r.style.size===Ce.DISPLAY.size||a.limits);return u?Mf:null}else{if(a.type==="accent")return Wn(a.base)?Kl:null;if(a.type==="horizBrace"){var f=!n.sub;return f===a.isOver?Tf:null}else return null}else return null};Zr({type:"supsub",htmlBuilder(o,n){var r=yv(o,n);if(r)return r(o,n);var{base:a,sup:l,sub:u}=o,f=Le(a,n),v,p,x=n.fontMetrics(),b=0,_=0,k=a&&Wn(a);if(l){var T=n.havingStyle(n.style.sup());v=Le(l,T,n),k||(b=f.height-T.fontMetrics().supDrop*T.sizeMultiplier/n.sizeMultiplier)}if(u){var P=n.havingStyle(n.style.sub());p=Le(u,P,n),k||(_=f.depth+P.fontMetrics().subDrop*P.sizeMultiplier/n.sizeMultiplier)}var E;n.style===Ce.DISPLAY?E=x.sup1:n.style.cramped?E=x.sup3:E=x.sup2;var N=n.sizeMultiplier,D=le(.5/x.ptPerEm/N),O=null;if(p){var H=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(f instanceof un||H)&&(O=le(-f.italic))}var B;if(v&&p){b=Math.max(b,E,v.depth+.25*x.xHeight),_=Math.max(_,x.sub2);var W=x.defaultRuleThickness,U=4*W;if(b-v.depth-(p.height-_)<U){_=U-(b-v.depth)+p.height;var L=.8*x.xHeight-(b-v.depth);L>0&&(b+=L,_-=L)}var V=[{type:"elem",elem:p,shift:_,marginRight:D,marginLeft:O},{type:"elem",elem:v,shift:-b,marginRight:D}];B=Ge({positionType:"individualShift",children:V})}else if(p){_=Math.max(_,x.sub1,p.height-.8*x.xHeight);var oe=[{type:"elem",elem:p,marginLeft:O,marginRight:D}];B=Ge({positionType:"shift",positionData:_,children:oe})}else if(v)b=Math.max(b,E,v.depth+.25*x.xHeight),B=Ge({positionType:"shift",positionData:-b,children:[{type:"elem",elem:v,marginRight:D}]});else throw new Error("supsub must have either sup or sub.");var Te=ql(f,"right")||"mord";return Z([Te],[f,Z(["msupsub"],[B])],n)},mathmlBuilder(o,n){var r=!1,a,l;o.base&&o.base.type==="horizBrace"&&(l=!!o.sup,l===o.base.isOver&&(r=!0,a=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Qe(o.base,n)];o.sub&&u.push(Qe(o.sub,n)),o.sup&&u.push(Qe(o.sup,n));var f;if(r)f=a?"mover":"munder";else if(o.sub)if(o.sup){var x=o.base;x&&x.type==="op"&&x.limits&&n.style===Ce.DISPLAY||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(n.style===Ce.DISPLAY||x.limits)?f="munderover":f="msubsup"}else{var p=o.base;p&&p.type==="op"&&p.limits&&(n.style===Ce.DISPLAY||p.alwaysHandleSupSub)||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(p.limits||n.style===Ce.DISPLAY)?f="munder":f="msub"}else{var v=o.base;v&&v.type==="op"&&v.limits&&(n.style===Ce.DISPLAY||v.alwaysHandleSupSub)||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(v.limits||n.style===Ce.DISPLAY)?f="mover":f="msup"}return new ne(f,u)}});Zr({type:"atom",htmlBuilder(o,n){return Hl(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new ne("mo",[cn(o.text,o.mode)]);if(o.family==="bin"){var a=Ul(o,n);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Cf={mi:"italic",mn:"normal",mtext:"normal"};Zr({type:"mathord",htmlBuilder(o,n){return da(o,n,"mathord")},mathmlBuilder(o,n){var r=new ne("mi",[cn(o.text,o.mode,n)]),a=Ul(o,n)||"italic";return a!==Cf[r.type]&&r.setAttribute("mathvariant",a),r}});Zr({type:"textord",htmlBuilder(o,n){return da(o,n,"textord")},mathmlBuilder(o,n){var r=cn(o.text,o.mode,n),a=Ul(o,n)||"normal",l;return o.mode==="text"?l=new ne("mtext",[r]):/[0-9]/.test(o.text)?l=new ne("mn",[r]):o.text==="\\prime"?l=new ne("mo",[r]):l=new ne("mi",[r]),a!==Cf[l.type]&&l.setAttribute("mathvariant",a),l}});var bl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},$l={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Zr({type:"spacing",htmlBuilder(o,n){if($l.hasOwnProperty(o.text)){var r=$l[o.text].className||"";if(o.mode==="text"){var a=da(o,n,"textord");return a.classes.push(r),a}else return Z(["mspace",r],[Hl(o.text,o.mode,n)],n)}else{if(bl.hasOwnProperty(o.text))return Z(["mspace",bl[o.text]],[],n);throw new te('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if($l.hasOwnProperty(o.text))r=new ne("mtext",[new ht(" ")]);else{if(bl.hasOwnProperty(o.text))return new ne("mspace");throw new te('Unknown type of space "'+o.text+'"')}return r}});var gd=()=>{var o=new ne("mtd",[]);return o.setAttribute("width","50%"),o};Zr({type:"tag",mathmlBuilder(o,n){var r=new ne("mtable",[new ne("mtr",[gd(),new ne("mtd",[Tr(o.body,n)]),gd(),new ne("mtd",[Tr(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var yd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},xd={"\\textbf":"textbf","\\textmd":"textmd"},xv={"\\textit":"textit","\\textup":"textup"},wd=(o,n)=>{var r=o.font;if(r){if(yd[r])return n.withTextFontFamily(yd[r]);if(xd[r])return n.withTextFontWeight(xd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(xv[r])};ce({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:a}=o,l=n[0];return{type:"text",mode:r.mode,body:dt(l),font:a}},htmlBuilder(o,n){var r=wd(o,n),a=yt(o.body,r,!0);return Z(["mord","text"],a,r)},mathmlBuilder(o,n){var r=wd(o,n);return Tr(o.body,r)}});ce({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Le(o.body,n),a=M0("underline-line",n),l=n.fontMetrics().defaultRuleThickness,u=Ge({positionType:"top",positionData:r.height,children:[{type:"kern",size:l},{type:"elem",elem:a},{type:"kern",size:3*l},{type:"elem",elem:r}]});return Z(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new ne("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var a=new ne("munder",[Qe(o.body,n),r]);return a.setAttribute("accentunder","true"),a}});ce({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Le(o.body,n),a=n.fontMetrics().axisHeight,l=.5*(r.height-a-(r.depth+a));return Ge({positionType:"shift",positionData:l,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new ne("mpadded",[Qe(o.body,n)],["vcenter"])}});ce({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new te("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=bd(o),a=[],l=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var f=r[u];f==="~"&&(f="\\textasciitilde"),a.push(Dt(f,"Typewriter-Regular",o.mode,l,["mord","texttt"]))}return Z(["mord","text"].concat(l.sizingClasses(n)),Yd(a),l)},mathmlBuilder(o,n){var r=new ht(bd(o)),a=new ne("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var bd=o=>o.body.replace(/ /g,o.star?"␣":" "),_r=Jd,Pf=`[ \r
	]`,wv="\\\\[a-zA-Z@]+",bv="\\\\[^\uD800-\uDFFF]",$v="("+wv+")"+Pf+"*",_v=`\\\\(
|[ \r	]+
?)[ \r	]*`,El="[̀-ͯ]",kv=new RegExp(El+"+$"),zv="("+Pf+"+)|"+(_v+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(El+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(El+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+$v)+("|"+bv+")");class $d{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(zv,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Qt("EOF",new Gt(this,r,r));var a=this.tokenRegex.exec(n);if(a===null||a.index!==r)throw new te("Unexpected character: '"+n[r]+"'",new Qt(n[r],new Gt(this,r,r+1)));var l=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[l]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Qt(l,new Gt(this,r,this.tokenRegex.lastIndex))}}class Sv{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new te("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,a){if(a===void 0&&(a=!1),a){for(var l=0;l<this.undefStack.length;l++)delete this.undefStack[l][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var Tv=$f;w("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});w("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});w("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});w("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});w("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var _d={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(o){var n=o.popToken(),r,a="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")a=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new te("\\char` missing argument");a=n.text.charCodeAt(0)}else r=10;if(r){if(a=_d[n.text],a==null||a>=r)throw new te("Invalid base-"+r+" digit "+n.text);for(var l;(l=_d[o.future().text])!=null&&l<r;)a*=r,a+=l,o.popToken()}return"\\@char{"+a+"}"});var eu=(o,n,r,a)=>{var l=o.consumeArg().tokens;if(l.length!==1)throw new te("\\newcommand's first argument must be a macro name");var u=l[0].text,f=o.isDefined(u);if(f&&!n)throw new te("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!f&&!r)throw new te("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var v=0;if(l=o.consumeArg().tokens,l.length===1&&l[0].text==="["){for(var p="",x=o.expandNextToken();x.text!=="]"&&x.text!=="EOF";)p+=x.text,x=o.expandNextToken();if(!p.match(/^\s*[0-9]+\s*$/))throw new te("Invalid number of arguments: "+p);v=parseInt(p),l=o.consumeArg().tokens}return f&&a||o.macros.set(u,{tokens:l,numArgs:v}),""};w("\\newcommand",o=>eu(o,!1,!0,!1));w("\\renewcommand",o=>eu(o,!0,!1,!1));w("\\providecommand",o=>eu(o,!0,!0,!0));w("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});w("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});w("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),_r[r],Ze.math[r],Ze.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var kd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},jv=new Set(["bin","rel"]);w("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in kd?n=kd[r]:(r.slice(0,4)==="\\not"||r in Ze.math&&jv.has(Ze.math[r].group))&&(n="\\dotsb"),n});var tu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(o){var n=o.future().text;return n in tu?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(o){var n=o.future().text;return n in tu&&n!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(o){var n=o.future().text;return n in tu?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new te("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Ef=le(Sn["Main-Regular"][84][1]-.7*Sn["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Ef+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Ef+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var Df=o=>n=>{var r=n.consumeArg().tokens,a=n.consumeArg().tokens,l=n.consumeArg().tokens,u=n.consumeArg().tokens,f=n.macros.get("|"),v=n.macros.get("\\|");n.macros.beginGroup();var p=_=>k=>{o&&(k.macros.set("|",f),l.length&&k.macros.set("\\|",v));var T=_;if(!_&&l.length){var P=k.future();P.text==="|"&&(k.popToken(),T=!0)}return{tokens:T?l:a,numArgs:0}};n.macros.set("|",p(!1)),l.length&&n.macros.set("\\|",p(!0));var x=n.consumeArg().tokens,b=n.expandTokens([...u,...x,...r]);return n.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};w("\\bra@ket",Df(!1));w("\\bra@set",Df(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var Rf={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class qv{constructor(n,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new Sv(Tv,r.macros),this.mode=a,this.stack=[]}feed(n){this.lexer=new $d(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,a,l;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:l,end:a}=this.consumeArg(["]"])}else({tokens:l,start:r,end:a}=this.consumeArg());return this.pushToken(new Qt("EOF",a.loc)),this.pushTokens(l),new Qt("",Gt.range(r,a))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],a=n&&n.length>0;a||this.consumeSpaces();var l=this.future(),u,f=0,v=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++f;else if(u.text==="}"){if(--f,f===-1)throw new te("Extra }",u)}else if(u.text==="EOF")throw new te("Unexpected end of input in a macro argument, expected '"+(n&&a?n[v]:"}")+"'",u);if(n&&a)if((f===0||f===1&&n[v]==="{")&&u.text===n[v]){if(++v,v===n.length){r.splice(-v,v);break}}else v=0}while(f!==0||a);return l.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:l,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new te("The length of delimiters doesn't match the number of args!");for(var a=r[0],l=0;l<a.length;l++){var u=this.popToken();if(a[l]!==u.text)throw new te("Use of the macro doesn't match its definition",u)}}for(var f=[],v=0;v<n;v++)f.push(this.consumeArg(r&&r[v+1]).tokens);return f}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new te("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),a=r.text,l=r.noexpand?null:this._getExpansion(a);if(l==null||n&&l.unexpandable){if(n&&l==null&&a[0]==="\\"&&!this.isDefined(a))throw new te("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var u=l.tokens,f=this.consumeArgs(l.numArgs,l.delimiters);if(l.numArgs){u=u.slice();for(var v=u.length-1;v>=0;--v){var p=u[v];if(p.text==="#"){if(v===0)throw new te("Incomplete placeholder at end of macro body",p);if(p=u[--v],p.text==="#")u.splice(v+1,1);else if(/^[1-9]$/.test(p.text))u.splice(v,2,...f[+p.text-1]);else throw new te("Not a valid argument number",p)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Qt(n)]):void 0}expandTokens(n){var r=[],a=this.stack.length;for(this.pushTokens(n);this.stack.length>a;)if(this.expandOnce(!0)===!1){var l=this.stack.pop();l.treatAsRelax&&(l.noexpand=!1,l.treatAsRelax=!1),r.push(l)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(a=>a.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var a=this.lexer.catcodes[n];if(a!=null&&a!==13)return}var l=typeof r=="function"?r(this):r;if(typeof l=="string"){var u=0;if(l.includes("#"))for(var f=l.replace(/##/g,"");f.includes("#"+(u+1));)++u;for(var v=new $d(l,this.settings),p=[],x=v.lex();x.text!=="EOF";)p.push(x),x=v.lex();p.reverse();var b={tokens:p,numArgs:u};return b}return l}isDefined(n){return this.macros.has(n)||_r.hasOwnProperty(n)||Ze.math.hasOwnProperty(n)||Ze.text.hasOwnProperty(n)||Rf.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:_r.hasOwnProperty(n)&&!_r[n].primitive}}var zd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ea=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),_l={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Sd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class ya{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new qv(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new te("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Qt("}")),this.gullet.pushTokens(n);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(n,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var l=this.fetch();if(ya.endOfExpression.has(l.text)||r&&l.text===r||n&&_r[l.text]&&_r[l.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;a.push(u)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(n){for(var r=-1,a,l=0;l<n.length;l++)if(n[l].type==="infix"){if(r!==-1)throw new te("only one infix operator per group",n[l].token);r=l,a=n[l].replaceWith}if(r!==-1&&a){var u,f,v=n.slice(0,r),p=n.slice(r+1);v.length===1&&v[0].type==="ordgroup"?u=v[0]:u={type:"ordgroup",mode:this.mode,body:v},p.length===1&&p[0].type==="ordgroup"?f=p[0]:f={type:"ordgroup",mode:this.mode,body:p};var x;return a==="\\\\abovefrac"?x=this.callFunction(a,[u,n[r],f],[]):x=this.callFunction(a,[u,f],[]),[x]}else return n}handleSupSubscript(n){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var l;do{var u;l=this.parseGroup(n)}while(((u=l)==null?void 0:u.type)==="internal");if(!l)throw new te("Expected group after '"+a+"'",r);return l}formatUnsupportedCmd(n){for(var r=[],a=0;a<n.length;a++)r.push({type:"textord",mode:"text",text:n[a]});var l={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[l]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,l;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var f=u.text==="\\limits";r.limits=f,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new te("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(a)throw new te("Double superscript",u);a=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(l)throw new te("Double subscript",u);l=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(a)throw new te("Double superscript",u);var v={type:"textord",mode:this.mode,text:"\\prime"},p=[v];for(this.consume();this.fetch().text==="'";)p.push(v),this.consume();this.fetch().text==="^"&&p.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:p}}else if(ea[u.text]){var x=zd.test(u.text),b=[];for(b.push(new Qt(ea[u.text])),this.consume();;){var _=this.fetch().text;if(!ea[_]||zd.test(_)!==x)break;b.unshift(new Qt(ea[_])),this.consume()}var k=this.subparse(b);x?l={type:"ordgroup",mode:"math",body:k}:a={type:"ordgroup",mode:"math",body:k}}else break}return a||l?{type:"supsub",mode:this.mode,base:r,sup:a,sub:l}:r}parseFunction(n,r){var a=this.fetch(),l=a.text,u=_r[l];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new te("Got function '"+l+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!u.allowedInText)throw new te("Can't use function '"+l+"' in text mode",a);if(this.mode==="math"&&u.allowedInMath===!1)throw new te("Can't use function '"+l+"' in math mode",a);var{args:f,optArgs:v}=this.parseArguments(l,u);return this.callFunction(l,f,v,a,n)}callFunction(n,r,a,l,u){var f={funcName:n,parser:this,token:l,breakOnTokenText:u},v=_r[n];if(v&&v.handler)return v.handler(f,r,a);throw new te("No function handler for "+n)}parseArguments(n,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var l=[],u=[],f=0;f<a;f++){var v=r.argTypes&&r.argTypes[f],p=f<r.numOptionalArgs;(r.primitive&&v==null||r.type==="sqrt"&&f===1&&u[0]==null)&&(v="primitive");var x=this.parseGroupOfType("argument to '"+n+"'",v,p);if(p)u.push(x);else if(x!=null)l.push(x);else throw new te("Null argument, please report this as a bug")}return{args:l,optArgs:u}}parseGroupOfType(n,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var l=this.parseArgumentGroup(a,"text");return l!=null?{type:"styling",mode:l.mode,body:[l],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",a);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(a)throw new te("A primitive argument cannot be optional");var f=this.parseGroup(n);if(f==null)throw new te("Expected group as "+n,this.fetch());return f}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new te("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var l="",u;(u=this.fetch()).text!=="EOF";)l+=u.text,this.consume();return this.consume(),a.text=l,a}parseRegexGroup(n,r){for(var a=this.fetch(),l=a,u="",f;(f=this.fetch()).text!=="EOF"&&n.test(u+f.text);)l=f,u+=l.text,this.consume();if(u==="")throw new te("Invalid "+r+": '"+a.text+"'",a);return a.range(l,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new te("Invalid color: '"+r.text+"'",r);var l=a[0];return/^[0-9a-f]{6}$/i.test(l)&&(l="#"+l),{type:"color-token",mode:this.mode,color:l}}parseSizeGroup(n){var r,a=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",a=!0);var l=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!l)throw new te("Invalid size: '"+r.text+"'",r);var u={number:+(l[1]+l[2]),unit:l[3]};if(!Gd(u))throw new te("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:a}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(n,r){var a=this.gullet.scanArgument(n);if(a==null)return null;var l=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var f={type:"ordgroup",mode:this.mode,loc:a.loc,body:u};return r&&this.switchMode(l),f}parseGroup(n,r){var a=this.fetch(),l=a.text,u;if(l==="{"||l==="\\begingroup"){this.consume();var f=l==="{"?"}":"\\endgroup";this.gullet.beginGroup();var v=this.parseExpression(!1,f),p=this.fetch();this.expect(f),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Gt.range(a,p),body:v,semisimple:l==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&l[0]==="\\"&&!Rf.hasOwnProperty(l)){if(this.settings.throwOnError)throw new te("Undefined control sequence: "+l,a);u=this.formatUnsupportedCmd(l),this.consume()}return u}formLigatures(n){for(var r=n.length-1,a=0;a<r;++a){var l=n[a],u=l.text;u==="-"&&n[a+1].text==="-"&&(a+1<r&&n[a+2].text==="-"?(n.splice(a,3,{type:"textord",mode:"text",loc:Gt.range(l,n[a+2]),text:"---"}),r-=2):(n.splice(a,2,{type:"textord",mode:"text",loc:Gt.range(l,n[a+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[a+1].text===u&&(n.splice(a,2,{type:"textord",mode:"text",loc:Gt.range(l,n[a+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),l=a.charAt(0)==="*";if(l&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new te(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:l}}Sd.hasOwnProperty(r[0])&&!Ze[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Sd[r[0]]+r.slice(1));var u=kv.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var f;if(Ze[this.mode][r]){this.settings.strict&&this.mode==="math"&&Tl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var v=Ze[this.mode][r].group,p=Gt.range(n),x;if(z8.hasOwnProperty(v)){var b=v;x={type:"atom",mode:this.mode,family:b,loc:p,text:r}}else x={type:v,mode:this.mode,loc:p,text:r};f=x}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Hd(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),f={type:"textord",mode:"text",loc:Gt.range(n),text:r};else return null;if(this.consume(),u)for(var _=0;_<u[0].length;_++){var k=u[0][_];if(!_l[k])throw new te("Unknown accent ' "+k+"'",n);var T=_l[k][this.mode]||_l[k].text;if(!T)throw new te("Accent "+k+" unsupported in "+this.mode+" mode",n);f={type:"accent",mode:this.mode,loc:Gt.range(n),label:T,isStretchy:!1,isShifty:!0,base:f}}return f}}ya.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var nu=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new ya(n,r);delete a.gullet.macros.current["\\df@tag"];var l=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new te("\\tag works only in display equations");l=[{type:"tag",mode:"text",body:l,tag:a.subparse([new Qt("\\df@tag")])}]}return l},Nf=function(n,r,a){r.textContent="";var l=ru(n,a).toNode();r.appendChild(l)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Nf=function(){throw new te("KaTeX doesn't work in quirks mode.")});var Mv=function(n,r){var a=ru(n,r).toMarkup();return a},Av=function(n,r){var a=new Il(r);return nu(n,a)},Bf=function(n,r,a){if(a.throwOnError||!(n instanceof te))throw n;var l=Z(["katex-error"],[new un(r)]);return l.setAttribute("title",n.toString()),l.setAttribute("style","color:"+a.errorColor),l},ru=function(n,r){var a=new Il(r);try{var l=nu(n,a);return L8(l,n,a)}catch(u){return Bf(u,n,a)}},Cv=function(n,r){var a=new Il(r);try{var l=nu(n,a);return O8(l,n,a)}catch(u){return Bf(u,n,a)}},Pv="0.16.33",Ev={Span:Mi,Anchor:Ol,SymbolNode:un,SvgNode:Gn,PathNode:zr,LineNode:Sl},Td={version:Pv,render:Nf,renderToString:Mv,ParseError:te,SETTINGS_SCHEMA:ta,__parse:Av,__renderToDomTree:ru,__renderToHTMLTree:Cv,__setFontMetrics:g8,__defineSymbol:d,__defineFunction:ce,__defineMacro:w,__domTree:Ev};function Dv(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,a)=>{try{return Td.renderToString(a.trim(),{displayMode:!0,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,a)=>{try{return Td.renderToString(a.trim(),{displayMode:!1,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}}),n}function Rv({nodeId:o,nodes:n,questionBank:r,onAnswer:a,onSkip:l,lang:u,excludeIndices:f=[]}){const v=n.find(O=>O.id===o),p=J.useMemo(()=>v5(r,o,f),[o,f]),x="#4a9eff",b=v?u==="pl"?v.labelPl:v.label:o,[_,k]=J.useState(null),[T,P]=J.useState(!1),E=()=>{_!==null&&P(!0)},N=()=>{a(_===p.correct,p,p.index),k(null),P(!1)},D=O=>$.jsx("span",{dangerouslySetInnerHTML:{__html:Dv(O)}});return $.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(5,9,18,0.75)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16},children:$.jsxs("div",{style:{width:"100%",maxWidth:500,background:se.surface,border:`1px solid ${x}40`,borderRadius:12,padding:"20px 24px",color:se.textBody,boxShadow:"0 24px 64px rgba(0,0,0,0.6)",maxHeight:"90vh",overflowY:"auto",boxSizing:"border-box"},children:[$.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[$.jsx("div",{style:{color:x,fontWeight:700,fontSize:14},children:b}),$.jsx("button",{onClick:()=>l(p==null?void 0:p.index),style:{background:"none",border:"none",color:se.textDim,cursor:"pointer",fontSize:20,lineHeight:1,padding:"0 4px",minWidth:32,minHeight:32},children:"×"})]}),p?$.jsxs($.Fragment,{children:[$.jsx("div",{style:{fontSize:14,color:se.textBody,marginBottom:16,lineHeight:1.7},children:D(p.q)}),$.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16},children:p.options.map((O,H)=>{let B=se.bg,W=se.border,U=se.textBody;return _===H&&!T&&(B=`${x}22`,W=x,U=x),T&&(H===p.correct?(B="#27ae6022",W="#27ae60",U="#2ecc71"):H===_&&(B="#e74c3c22",W="#e74c3c",U="#ff6b6b")),$.jsxs("button",{onClick:()=>{T||k(H)},style:{textAlign:"left",padding:"12px 14px",borderRadius:8,fontSize:13,cursor:T?"default":"pointer",background:B,border:`1px solid ${W}`,color:U,lineHeight:1.5,minHeight:44},children:[$.jsxs("span",{style:{marginRight:8,opacity:.5},children:[["A","B","C","D"][H],"."]}),D(O)]},H)})}),T&&p.hint&&$.jsx("div",{style:{fontSize:12,color:se.textMuted,marginBottom:14,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:D(p.hint)}),T?$.jsx("button",{onClick:N,style:{...$i(_===p.correct?"#27ae60":"#e74c3c"),width:"100%"},children:_===p.correct?X("knownConfirm",u):X("unknownConfirm",u)}):$.jsx("button",{onClick:E,disabled:_===null,style:{...$i(x),width:"100%",opacity:_===null?.4:1},children:X("checkAnswer",u)})]}):$.jsxs($.Fragment,{children:[$.jsx("div",{style:{color:se.textDim,fontSize:13,marginBottom:16},children:X("noQuestion",u)}),$.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[$.jsx("button",{onClick:()=>a(!0,null,null),style:$i("#27ae60"),children:X("yesKnow",u)}),$.jsx("button",{onClick:()=>a(!1,null,null),style:$i("#e74c3c"),children:X("noKnow",u)}),$.jsx("button",{onClick:()=>l(null),style:$i("#3a4d63"),children:X("skipBtn",u)})]})]})]})})}const Nv={position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function Bv({belief:o,frontier:n,visibleFrontier:r,hasStarted:a,nextSuggestedId:l,sessionComplete:u,adjacency:f,expectedRemaining:v,pCorrect:p,questionsAnswered:x,nodes:b,lang:_,onReset:k,onNodeClick:T,SCOPE_LABELS:P,isMobile:E}){var Te,Se;const N=Object.fromEntries(b.map(fe=>[fe.id,fe])),D=fe=>{var we,je;return _==="pl"?(we=N[fe])==null?void 0:we.labelPl:(je=N[fe])==null?void 0:je.label},O=b.filter(fe=>o[fe.id]==="known"),H=b.filter(fe=>o[fe.id]==="unknown"),B=b.length,W=[{label:X("statKnown",_),count:O.length,color:"#27ae60"},{label:X("statUnknown",_),count:H.length,color:"#e74c3c"},{label:X("statRemaining",_),count:v??"-",color:"#4a9eff"}],U=p?Math.round(p*100):50,L=E?13:11,V=E?11:9,oe=$.jsxs($.Fragment,{children:[$.jsxs("div",{style:{fontWeight:700,fontSize:E?14:12,marginBottom:10,color:se.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsxs("span",{children:[X("diagHeader",_)," ",u?"✓":""]}),$.jsx("button",{onClick:k,style:{fontSize:V,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${se.textFaint}`,color:se.textDim,minHeight:E?32:"auto"},children:X("reset",_)})]}),$.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:W.map(({label:fe,count:we,color:je})=>$.jsxs("div",{style:{flex:1,textAlign:"center",background:`${je}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${je}40`},children:[$.jsx("div",{style:{color:je,fontWeight:700,fontSize:E?20:15},children:we}),$.jsx("div",{style:{color:se.textDim,fontSize:V},children:fe})]},fe))}),!u&&a&&$.jsxs("div",{style:{fontSize:V,color:se.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[$.jsxs("span",{children:[X("answered",_),": ",$.jsx("span",{style:{color:se.textPrimary},children:x})]}),$.jsxs("span",{children:[X("estimated",_),": ",$.jsxs("span",{style:{color:"#4a9eff"},children:["~",v??"-"]})]}),$.jsxs("span",{children:[X("accuracy",_),": ",$.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]})]})]}),u&&$.jsxs("div",{children:[$.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[$.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:E?14:12,marginBottom:4},children:X("sessionDone",_)}),$.jsxs("div",{style:{color:se.textDim,fontSize:V,lineHeight:1.6},children:[X("sessionDoneSub",_)," ",$.jsx("span",{style:{color:se.textPrimary},children:x})," ",X("sessionDoneQ",_),"."," ",X("sessionDoneClass",_)," ",O.length+H.length,"/",B,".",$.jsx("br",{}),X("sessionDoneAcc",_),": ",$.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]}),"."," ",X("sessionDoneKnown",_)," ",$.jsx("span",{style:{color:"#2ecc71"},children:O.length}),","," ",X("sessionDoneStudy",_)," ",$.jsx("span",{style:{color:"#e74c3c"},children:H.length}),"."]})]}),H.length>0&&$.jsxs($.Fragment,{children:[$.jsxs("div",{style:{color:"#e74c3c",fontSize:L,fontWeight:600,marginBottom:5},children:[X("toStudy",_)," (",H.length,")"]}),b.filter(fe=>o[fe.id]==="unknown").filter(fe=>(f.prereqs[fe.id]??[]).every(we=>o[we]==="known")).slice(0,8).map(fe=>{var we,je;return $.jsxs("div",{style:{padding:E?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:L,color:"#ff8a8a",lineHeight:1.4},children:[D(fe.id),$.jsx("div",{style:{fontSize:V,color:se.textDim,marginTop:1},children:(je=P==null?void 0:P[(we=N[fe.id])==null?void 0:we.scope])==null?void 0:je[_==="pl"?"pl":"en"]})]},fe.id)})]}),O.length>0&&$.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:L},children:["✓ ",X("knownList",_)," ",O.length]})]}),!u&&!a&&$.jsxs("div",{style:{marginBottom:10},children:[l&&$.jsxs($.Fragment,{children:[$.jsx("div",{style:{color:"#4a9eff",fontSize:L,fontWeight:600,marginBottom:5},children:X("startHere",_)}),$.jsxs("div",{onClick:()=>T==null?void 0:T(l),style:{padding:E?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:L,color:"#a8d4ff",minHeight:E?44:"auto"},children:[$.jsx("div",{style:{fontWeight:600},children:D(l)}),$.jsxs("div",{style:{fontSize:V,color:se.textDim,marginTop:2},children:[(Se=P==null?void 0:P[(Te=N[l])==null?void 0:Te.scope])==null?void 0:Se[_==="pl"?"pl":"en"]," · ",X("startHereSub",_)]})]})]}),$.jsx("div",{style:{fontSize:V,color:se.textFaint,marginTop:8,lineHeight:1.5},children:X("clickAnyNode",_)})]}),!u&&a&&r.length>0&&$.jsxs($.Fragment,{children:[$.jsx("div",{style:{color:"#f39c12",fontSize:L,fontWeight:600,marginBottom:5},children:X("whatNext",_)}),r.map(fe=>{var je,We;const we=fe===l;return $.jsxs("div",{onClick:()=>T==null?void 0:T(fe),style:{padding:E?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:we?"#4a9eff18":"#f39c1215",border:`1px solid ${we?"#4a9eff55":"#f39c1240"}`,fontSize:L,color:we?"#a8d4ff":"#f5d78e",minHeight:E?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[$.jsxs("div",{children:[$.jsx("div",{children:D(fe)}),$.jsxs("div",{style:{fontSize:V,color:se.textDim,marginTop:1},children:[(We=P==null?void 0:P[(je=N[fe])==null?void 0:je.scope])==null?void 0:We[_==="pl"?"pl":"en"],we&&$.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:X("best",_)})]})]}),$.jsx("span",{style:{opacity:.7},children:we?"★":"→"})]},fe)})]}),!u&&O.length>0&&$.jsxs($.Fragment,{children:[$.jsxs("div",{style:{color:"#27ae60",fontSize:L,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",X("knownList",_)," (",O.length,")"]}),O.map(fe=>$.jsx("div",{style:{fontSize:V,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:D(fe.id)},fe.id))]}),!u&&!E&&$.jsxs("div",{style:{marginTop:12,color:se.textFaint,fontSize:V,lineHeight:1.5},children:[X("hintClick",_),$.jsx("br",{}),X("hintShift",_),$.jsx("br",{}),X("hintGreen",_)]})]});return E?$.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[$.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:$.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),oe]}):$.jsx("div",{style:Nv,children:oe})}function Iv({nodes:o,lang:n,targetNode:r,subgraphIds:a,ddClassification:l,betaBeliefs:u,ddComplete:f,ddNextNodeId:v,questionsAnswered:p,onNodeClick:x,onReset:b,isMobile:_}){const k=Object.fromEntries(o.map(L=>[L.id,L])),T=L=>{var V,oe;return n==="pl"?(V=k[L])==null?void 0:V.labelPl:(oe=k[L])==null?void 0:oe.label},P=a.filter(L=>l[L]==="known"),E=a.filter(L=>l[L]==="unknown"),N=a.filter(L=>l[L]==="uncertain"),D=a.length,O=P.length+E.length,H=D>0?Math.round(O/D*100):0,B=T(r),W=_?11:9,U=_?{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return $.jsxs("div",{style:U,children:[_&&$.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:$.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),$.jsxs("div",{style:{fontWeight:700,fontSize:_?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsxs("span",{children:[X("deepDiveHeader",n)," ",f?"✓":""]}),$.jsx("button",{onClick:b,style:{fontSize:W,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${se.textFaint}`,color:se.textDim,minHeight:_?32:"auto"},children:X("reset",n)})]}),$.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[$.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:X("deepDiveTarget",n)}),$.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:B}),$.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[D," ",X("deepDiveNodes",n)]})]}),$.jsxs("div",{style:{marginBottom:10},children:[$.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:$.jsx("div",{style:{height:"100%",borderRadius:3,width:`${H}%`,background:f?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),$.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[$.jsxs("span",{children:[X("classified",n),": ",$.jsxs("span",{style:{color:"#f5f6fa"},children:[O,"/",D]})]}),$.jsxs("span",{children:[X("questions",n),": ",$.jsx("span",{style:{color:"#f5f6fa"},children:p})]})]})]}),f&&$.jsxs("div",{children:[$.jsxs("div",{style:{background:P.length>E.length?"#27ae6018":"#e74c3c18",border:`1px solid ${P.length>E.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[$.jsx("div",{style:{color:P.length>E.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:X("diagReady",n)}),$.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[X("diagKnown",n),": ",$.jsx("span",{style:{color:"#2ecc71"},children:P.length})," / ",X("diagStudy",n),": ",$.jsx("span",{style:{color:"#ff6b6b"},children:E.length})," / ",X("diagTotal",n),": ",D]})]}),E.length>0&&$.jsxs($.Fragment,{children:[$.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:X("studyThese",n)}),a.filter(L=>l[L]==="unknown").slice(0,8).map(L=>{var V;return $.jsx(jd,{id:L,label:T(L),scope:(V=k[L])==null?void 0:V.scope,classification:"unknown",beta:u[L]},L)})]}),P.length>0&&$.jsxs($.Fragment,{children:[$.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:X("mastered",n)}),a.filter(L=>l[L]==="known").map(L=>{var V;return $.jsx(jd,{id:L,label:T(L),scope:(V=k[L])==null?void 0:V.scope,classification:"known",beta:u[L]},L)})]})]}),!f&&$.jsxs($.Fragment,{children:[v&&$.jsxs("div",{style:{marginBottom:10},children:[$.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:X("nextQuestion",n)}),$.jsxs("div",{onClick:()=>x==null?void 0:x(v),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[T(v),$.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[X("confidence",n),": ",Fv(u[v])]})]})]}),N.length>0&&$.jsxs($.Fragment,{children:[$.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[X("unclassified",n)," (",N.length,")"]}),N.map(L=>$.jsxs("div",{onClick:()=>x==null?void 0:x(L),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:L===v?"#4a9eff18":"#f39c1212",border:`1px solid ${L===v?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:L===v?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsx("span",{children:T(L)}),$.jsx(If,{beta:u[L]})]},L))]})]})]})}function Fv(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function If({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,a=Math.min(1,(r-2)/4),l=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return $.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:$.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:l,opacity:.4+a*.6,transition:"width 0.3s ease"}})})}function jd({id:o,label:n,scope:r,classification:a,beta:l}){const u=a==="known"?"#27ae60":"#e74c3c";return $.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:a==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsx("span",{children:n}),$.jsx(If,{beta:l})]})}function Lv({isOpen:o,onClose:n,title:r,children:a,maxHeight:l="75vh"}){return o?$.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50},children:[$.jsx("div",{onClick:n,style:{position:"absolute",inset:0,background:"rgba(5,9,18,0.6)",backdropFilter:"blur(2px)"}}),$.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:0,background:se.surface,borderTop:`1px solid ${se.border}`,borderRadius:"16px 16px 0 0",maxHeight:l,display:"flex",flexDirection:"column",overflow:"hidden"},children:[$.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"10px 0 4px",flexShrink:0},children:$.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),r&&$.jsx("div",{style:{padding:"4px 16px 10px",fontWeight:700,fontSize:14,color:se.textPrimary,flexShrink:0,borderBottom:`1px solid ${se.borderSubtle}`},children:r}),$.jsx("div",{style:{overflowY:"auto",flex:1,padding:"12px 16px 24px"},children:a})]})]}):null}function Ov({filterScope:o,toggleScope:n,clearScope:r,filterSection:a,toggleSection:l,clearSection:u,searchTerm:f,setSearchTerm:v,lang:p,setLang:x,SECTIONS:b,SCOPE_COLORS:_,SCOPE_LABELS:k,isMobile:T}){const[P,E]=J.useState(!1),N=o.size+a.size;return T?$.jsxs($.Fragment,{children:[$.jsxs("div",{style:{padding:"6px 12px",borderBottom:`1px solid ${se.borderSubtle}`,display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[$.jsx("input",{value:f,onChange:D=>v(D.target.value),placeholder:X("search",p),style:{flex:1,background:"#0d1520",border:`1px solid ${se.border}`,borderRadius:6,color:se.textBody,padding:"8px 12px",fontSize:14,outline:"none",minHeight:36}}),$.jsxs("button",{onClick:()=>E(!0),style:{padding:"8px 12px",borderRadius:6,fontSize:13,cursor:"pointer",border:N>0?"1px solid #4a9eff":`1px solid ${se.border}`,background:N>0?"#4a9eff22":"transparent",color:N>0?"#4a9eff":se.textDim,whiteSpace:"nowrap",minHeight:36},children:[X("filters",p),N>0?` (${N})`:""]}),$.jsx("button",{style:{...kn(!0,p==="pl"?"#f5a623":"#4a9eff"),minHeight:36,fontSize:13},onClick:()=>x(D=>D==="pl"?"en":"pl"),children:p==="pl"?"PL":"EN"})]}),$.jsx(Lv,{isOpen:P,onClose:()=>E(!1),title:X("filterTitle",p),maxHeight:"60vh",children:$.jsx(Hv,{filterScope:o,toggleScope:n,clearScope:r,filterSection:a,toggleSection:l,clearSection:u,lang:p,SECTIONS:b,SCOPE_COLORS:_,SCOPE_LABELS:k,onDone:()=>E(!1)})})]}):$.jsxs("div",{style:{padding:"6px 12px",borderBottom:`1px solid ${se.borderSubtle}`,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",flexShrink:0,minHeight:40},children:[$.jsx("input",{value:f,onChange:D=>v(D.target.value),placeholder:X("search",p),style:{background:"#0d1520",border:`1px solid ${se.border}`,borderRadius:4,color:se.textBody,padding:"6px 10px",fontSize:13,width:"min(140px, 30vw)",outline:"none",minHeight:32}}),$.jsx("span",{style:{color:se.border,fontSize:10},children:"|"}),$.jsx("span",{style:{fontSize:11,color:se.textFaint},children:X("filterSection",p)}),$.jsx("button",{style:kn(a.size===0,"#c8d6e5"),onClick:u,children:X("all",p)}),Object.entries(b).map(([D,O])=>$.jsx("button",{style:kn(a.has(D),O.color),onClick:()=>l(D),children:O.label},D)),$.jsx("span",{style:{color:se.border,fontSize:10},children:"|"}),$.jsx("span",{style:{fontSize:11,color:se.textFaint},children:X("filterScope",p)}),$.jsx("button",{style:kn(o.size===0,"#c8d6e5"),onClick:r,children:X("all",p)}),Object.entries(_).map(([D,O])=>{var H;return $.jsx("button",{style:kn(o.has(D),O),onClick:()=>n(D),children:(H=k[D])==null?void 0:H[p==="pl"?"pl":"en"]},D)}),$.jsx("span",{style:{color:se.border,fontSize:10},children:"|"}),$.jsx("button",{style:{...kn(!0,p==="pl"?"#f5a623":"#4a9eff")},onClick:()=>x(D=>D==="pl"?"en":"pl"),children:p==="pl"?"PL":"EN"})]})}function Hv({filterScope:o,toggleScope:n,clearScope:r,filterSection:a,toggleSection:l,clearSection:u,lang:f,SECTIONS:v,SCOPE_COLORS:p,SCOPE_LABELS:x,onDone:b}){return $.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[$.jsxs("div",{children:[$.jsx("div",{style:{fontSize:12,color:se.textDim,marginBottom:8,fontWeight:600},children:X("filterSection",f)}),$.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[$.jsx("button",{style:{...kn(a.size===0,"#c8d6e5"),fontSize:13,minHeight:36},onClick:u,children:X("all",f)}),Object.entries(v).map(([_,k])=>$.jsx("button",{style:{...kn(a.has(_),k.color),fontSize:13,minHeight:36},onClick:()=>l(_),children:k.label},_))]})]}),$.jsxs("div",{children:[$.jsx("div",{style:{fontSize:12,color:se.textDim,marginBottom:8,fontWeight:600},children:X("filterScope",f)}),$.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[$.jsx("button",{style:{...kn(o.size===0,"#c8d6e5"),fontSize:13,minHeight:36},onClick:r,children:X("all",f)}),Object.entries(p).map(([_,k])=>{var T;return $.jsx("button",{style:{...kn(o.has(_),k),fontSize:13,minHeight:36},onClick:()=>n(_),children:(T=x[_])==null?void 0:T[f==="pl"?"pl":"en"]},_)})]})]}),$.jsx("button",{onClick:b,style:{padding:"12px",borderRadius:8,fontSize:15,cursor:"pointer",background:"#4a9eff22",border:"1px solid #4a9eff",color:"#4a9eff",fontWeight:600},children:X("done",f)})]})}function Gv({lang:o,diagMode:n,SCOPE_COLORS:r,SCOPE_LABELS:a,SECTIONS:l}){const[u,f]=J.useState(!1),v=Object.entries(r).map(([p,x])=>{var b;return{color:x,label:(b=a[p])==null?void 0:b[o==="pl"?"pl":"en"]}});return $.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152095",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[$.jsxs("button",{onClick:()=>f(p=>!p),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[$.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),X("legendTitle",o)]}),u&&$.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&$.jsxs("div",{style:{marginBottom:8},children:[[{color:se.knownHi,label:X("legendKnown",o)},{color:se.unknownHi,label:X("legendUnknown",o)},{color:se.frontier,label:X("legendFrontier",o)},{color:"#4a5568",label:X("legendUnclassified",o)}].map(({color:p,label:x})=>$.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[$.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:p,flexShrink:0}}),$.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),$.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),$.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:X("legendScopes",o)}),v.map(({color:p,label:x})=>$.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[$.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:p,flexShrink:0}}),$.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),$.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[$.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:X("legendStages",o)}),Object.entries(l).map(([p,x])=>$.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[$.jsx("div",{style:{width:8,height:3,borderRadius:1,background:x.color,flexShrink:0}}),$.jsx("span",{style:{color:"#8a9dbe"},children:x.label})]},p))]})]})]})}function Wv({nodes:o,lang:n,onSelect:r,onClose:a,SECTIONS:l,SCOPE_COLORS:u}){const[f,v]=J.useState(""),[p,x]=J.useState(-1),b=J.useRef([]),_=J.useMemo(()=>Object.keys(l??{}),[l]),k=J.useMemo(()=>{const D=f.toLowerCase();return o.filter(O=>!D||O.label.toLowerCase().includes(D)||O.labelPl.toLowerCase().includes(D))},[o,f]),T=J.useMemo(()=>{const D={};for(const H of _)D[H]=[];for(const H of k){const B=H.section??_[0]??"default";D[B]||(D[B]=[]),D[B].push(H)}const O=[];for(const H of _)for(const B of D[H]??[])O.push(B);return O},[k,_]),P=J.useMemo(()=>{const D={};for(const O of _)D[O]=[];for(const O of k){const H=O.section??_[0]??"default";D[H]||(D[H]=[]),D[H].push(O)}return D},[k,_]),E=D=>n==="pl"?D.labelPl:D.label;J.useEffect(()=>{const D=O=>{if(O.key==="Escape"){a();return}O.key==="ArrowDown"&&(O.preventDefault(),x(H=>Math.min(H+1,T.length-1))),O.key==="ArrowUp"&&(O.preventDefault(),x(H=>Math.max(H-1,0))),O.key==="Enter"&&p>=0&&T[p]&&(O.preventDefault(),r(T[p].id))};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[T,p,a,r]),J.useEffect(()=>{p>=0&&b.current[p]&&b.current[p].scrollIntoView({block:"nearest"})},[p]),J.useEffect(()=>{x(-1)},[f]);const N={title:n==="pl"?"Wybierz cel":"Select Goal",subtitle:n==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:n==="pl"?"Szukaj tematu...":"Search topics...",noResults:n==="pl"?"Brak wyników":"No results",footer:`${k.length} / ${o.length} ${n==="pl"?"tematów":"topics"}`,cancel:n==="pl"?"Anuluj":"Cancel"};return $.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:D=>{D.target===D.currentTarget&&a()},children:$.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[$.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[$.jsxs("div",{children:[$.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:N.title}),$.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:N.subtitle})]}),$.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),$.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:$.jsx("input",{autoFocus:!0,value:f,onChange:D=>v(D.target.value),placeholder:N.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),$.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[_.map(D=>{const O=P[D];if(!O||O.length===0)return null;const H=l==null?void 0:l[D];return $.jsxs("div",{style:{marginBottom:12},children:[$.jsx("div",{style:{fontSize:9,fontWeight:700,color:(H==null?void 0:H.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(H==null?void 0:H.label)??D}),$.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:O.map(B=>{const W=T.indexOf(B),U=(u==null?void 0:u[B.scope])??"#4a9eff",L=p===W;return $.jsxs("button",{ref:V=>b.current[W]=V,onClick:()=>r(B.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:L?`${U}35`:`${U}15`,border:`1px solid ${L?U:`${U}40`}`,color:"#c8d6e5",cursor:"pointer",outline:L?`2px solid ${U}`:"none",outlineOffset:1},onMouseEnter:V=>{V.currentTarget.style.background=`${U}30`,V.currentTarget.style.borderColor=`${U}90`},onMouseLeave:V=>{T.indexOf(B)!==p&&(V.currentTarget.style.background=`${U}15`,V.currentTarget.style.borderColor=`${U}40`)},children:[$.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:U,verticalAlign:"middle"}}),E(B)]},B.id)})})]},D)}),k.length===0&&$.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:N.noResults})]}),$.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:N.footer}),$.jsx("button",{onClick:a,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:N.cancel})]})]})})}function Uv({isOpen:o,onSelect:n,onClose:r,lang:a="pl"}){const l=[{id:"quick",icon:"⚡",color:"#4a9eff",label:X("modeQuickLabel",a),description:X("modeQuickDesc",a)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:X("modeDeepLabel",a),description:X("modeDeepDesc",a)}],[u,f]=J.useState(null),v=J.useRef(null);return J.useEffect(()=>{o&&(f(null),setTimeout(()=>{var p;return(p=v.current)==null?void 0:p.focus()},100))},[o]),J.useEffect(()=>{if(!o)return;const p=x=>{x.key==="Escape"&&r(),x.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[o,u,r,n]),o?$.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:p=>{p.target===p.currentTarget&&r()},children:$.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[$.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[$.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:X("modePickerTitle",a)}),$.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:X("modePickerSub",a)})]}),$.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:l.map((p,x)=>$.jsxs("button",{ref:x===0?v:null,onClick:()=>f(p.id),onDoubleClick:()=>n(p.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===p.id?`${p.color}18`:"#0a0e17",border:`1px solid ${u===p.id?p.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:b=>{b.currentTarget.style.background=`${p.color}18`,b.currentTarget.style.borderColor=`${p.color}60`},onMouseLeave:b=>{u!==p.id&&(b.currentTarget.style.background="#0a0e17",b.currentTarget.style.borderColor="#1e2d45")},children:[$.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[$.jsx("span",{style:{fontSize:16},children:p.icon}),$.jsx("span",{style:{fontWeight:600,color:u===p.id?p.color:"#f5f6fa"},children:p.label})]}),$.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:p.description})]},p.id))}),$.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:X("cancel",a)}),$.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#1e2d45",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:X("next",a)})]})]})}):null}const Vv=[{key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function Kv({isOpen:o,onClose:n,lang:r}){return J.useEffect(()=>{if(!o)return;const a=l=>{l.key==="Escape"&&n()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,n]),o?$.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&n()},children:$.jsxs("div",{style:{width:"100%",maxWidth:480,background:se.surface,border:"1px solid #1e2d45",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[$.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #0a1628 100%)",borderBottom:"1px solid #1e2d45",textAlign:"center"},children:[$.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),$.jsx("div",{style:{fontWeight:700,fontSize:18,color:se.textPrimary,marginBottom:8},children:X("onboardingTitle",r)}),$.jsx("div",{style:{fontSize:12,color:se.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:X("onboardingSub",r)})]}),$.jsx("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:12},children:Vv.map(({key:a,descKey:l,color:u})=>$.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",padding:"10px 12px",borderRadius:8,background:`${u}0e`,border:`1px solid ${u}25`},children:[$.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:u,flexShrink:0,marginTop:4}}),$.jsxs("div",{children:[$.jsx("div",{style:{fontWeight:600,fontSize:12,color:se.textPrimary,marginBottom:3},children:X(a,r)}),$.jsx("div",{style:{fontSize:10,color:se.textDim,lineHeight:1.5},children:X(l,r)})]})]},a))}),$.jsx("div",{style:{margin:"0 24px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:se.textFaint,textAlign:"center"},children:X("onboardingLangHint",r)}),$.jsxs("div",{style:{padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[$.jsx("button",{onClick:n,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:se.textDim},children:X("onboardingSkip",r)}),$.jsx("button",{onClick:n,style:{padding:"8px 22px",borderRadius:6,fontSize:12,cursor:"pointer",fontWeight:700,background:"#4a9eff",border:"none",color:"#fff",boxShadow:"0 0 16px #4a9eff44"},children:X("onboardingStart",r)})]})]})}):null}const qd={x:40,y:40,scale:.72},Md={x:20,y:20,scale:.42};function Yv({courseId:o,RAW_NODES:n,RAW_EDGES:r,QUESTION_BANK:a,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:f,COURSE_META:v,onBackToCourses:p}){const x=O7(),[b,_]=J.useState(Bd),[k,T]=_n("lang","pl"),[P,E]=J.useState(new Set),[N,D]=J.useState(new Set),[O,H]=J.useState(""),[B,W]=J.useState(null),[U,L]=J.useState(null),[V,oe]=J.useState(!1),[Te,Se]=J.useState(!1),[fe,we]=J.useState(!1),[je,We]=_n("onboardingSeen",!1),[Ye,Ie]=J.useState(!je),ae=J.useCallback(()=>{We(!0),Ie(!1)},[We]),xe=J.useCallback(re=>E(Re=>{const Oe=new Set(Re);return Oe.has(re)?Oe.delete(re):Oe.add(re),Oe}),[]),ue=J.useCallback(re=>D(Re=>{const Oe=new Set(Re);return Oe.has(re)?Oe.delete(re):Oe.add(re),Oe}),[]),M=J.useCallback(()=>E(new Set),[]),G=J.useCallback(()=>D(new Set),[]),ge=J.useMemo(()=>u7(n,r),[n,r]),[$e,be]=J.useState(()=>sl(b,300,n,r)),Ae=J.useMemo(()=>n.map(re=>{var Re,Oe;return{...re,x:((Re=$e[re.id])==null?void 0:Re.x)??re.x,y:((Oe=$e[re.id])==null?void 0:Oe.y)??re.y}}),[n,$e]),Ne=J.useRef(null),{viewTransform:De,setViewTransform:Be,toCanvas:ft,startPan:Zt,cursorStyle:Jr,setCursorStyle:Mn,handleMouseMove:Kn,handleMouseUp:qr}=S7(Ne),{startNodeDrag:An,handleDragMove:Cn,handleDragEnd:Yn}=T7(ft,Ae,be,Mn),{diagMode:Ue,setDiagMode:kt,mode:Ve,setMode:e0,quizNode:At,setQuizNode:Qn,questionsAnswered:E0,setAnsweredQuestions:Ci,getAnsweredIndices:D0,handleDiagClick:Mr,handleQuizAnswer:Pi,resetDiagnostic:Jt,startDeepDive:Ar,targetNode:Ei,belief:R0,frontier:Di,visibleFrontier:Ri,hasStarted:Cr,nextSuggestedId:Xn,expectedRemaining:N0,pCorrect:B0,sessionComplete:Pr,betaBeliefs:Zn,subgraphIds:en,ddClassification:Er,ddNextNodeId:Dr,ddComplete:t0}=L7(ge,a,o),Ni=J.useMemo(()=>{const re=O.toLowerCase(),Re=n.filter(Oe=>!(P.size>0&&!P.has(Oe.scope)||N.size>0&&!N.has(Oe.section)||re&&!Oe.label.toLowerCase().includes(re)&&!Oe.labelPl.toLowerCase().includes(re)));return Re.length<n.length?new Set(Re.map(Oe=>Oe.id)):null},[n,P,N,O]),Jn=B||U,n0=J.useMemo(()=>{var Re,Oe;if(!Jn)return null;const re=new Set([Jn]);return(Re=ge.prereqs[Jn])==null||Re.forEach(i0=>re.add(i0)),(Oe=ge.dependents[Jn])==null||Oe.forEach(i0=>re.add(i0)),re},[Jn,ge]),I0=J.useMemo(()=>!Ue||Ve!=="deepdive"||en.length===0?null:new Set(en),[Ue,Ve,en]),Rr=J.useCallback(re=>{const Re=re.target.closest("[data-node-id]");if(Re){An(Re.getAttribute("data-node-id"),re.clientX,re.clientY),re.stopPropagation();return}Zt(re.clientX,re.clientY)},[An,Zt]),F0=J.useCallback(re=>{Cn(re.clientX,re.clientY)||Kn(re)},[Cn,Kn]),er=J.useCallback(()=>{Yn(),qr()},[Yn,qr]),xa=J.useCallback(re=>{x&&!re.target.closest("[data-node-id]")&&W(null)},[x]);J.useEffect(()=>{if(Ve==="quick"&&!At&&Xn&&!Pr&&Cr){const re=setTimeout(()=>Qn(Xn),400);return()=>clearTimeout(re)}},[Ve,At,Xn,Pr,Cr]),J.useEffect(()=>{if(Ve==="deepdive"&&!At&&Dr&&!t0){const re=setTimeout(()=>Qn(Dr),400);return()=>clearTimeout(re)}},[Ve,At,Dr,t0]),J.useEffect(()=>{const re=Re=>{Re.key==="Escape"&&(W(null),oe(!1))};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[]);const Nr=J.useCallback(re=>{_(re),be(sl(re,300,n,r)),Be(x?Md:qd)},[Be,n,r,x]),tr=J.useCallback(()=>{Ue?(kt(!1),Jt(),W(null)):Se(!0)},[Ue,kt,Jt]),r0=J.useCallback(re=>{Se(!1),Jt(),re==="deepdive"?(kt(!0),oe(!0)):(kt(!0),e0("quick"),W(null))},[kt,e0,Jt]),L0=J.useMemo(()=>{if(Ve!=="deepdive")return{};const re={};for(const[Re,Oe]of Object.entries(Er))Oe==="known"?re[Re]="known":Oe==="unknown"&&(re[Re]="unknown");return re},[Ve,Er]),wa=Ve==="deepdive"?L0:R0,ba=Ve==="deepdive"?en.filter(re=>Er[re]==="uncertain"):Ri,Bi=k==="pl"?v.title??v.titleEn:v.titleEn??v.title,zt=(re,Re="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:re?`1px solid ${Re}`:`1px solid ${se.border}`,background:re?`${Re}22`:"transparent",color:re?Re:se.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:re?600:400});return $.jsxs("div",{style:{width:"100%",height:"100dvh",background:se.bg,fontFamily:Id,color:se.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[x?$.jsxs("div",{style:{padding:"8px 12px",borderBottom:`1px solid ${se.borderSubtle}`,display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[p&&$.jsx("button",{onClick:p,style:{...zt(!1),padding:"7px 10px"},children:"←"}),$.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:se.textPrimary,letterSpacing:.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:Bi}),$.jsx("button",{onClick:tr,style:zt(Ue,"#f39c12"),children:Ue?"✓":X("diagnosticOff",k)}),$.jsx("button",{style:zt(!0,k==="pl"?"#f5a623":"#4a9eff"),onClick:()=>T(re=>re==="pl"?"en":"pl"),children:k==="pl"?"PL":"EN"})]}):$.jsxs("div",{style:{padding:"8px 16px",borderBottom:`1px solid ${se.borderSubtle}`,display:"flex",alignItems:"center",gap:10,flexShrink:0,flexWrap:"wrap"},children:[p&&$.jsx("button",{onClick:p,style:zt(!1),children:"←"}),$.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:se.textPrimary,letterSpacing:1,whiteSpace:"nowrap"},children:Bi}),$.jsxs("span",{style:{fontSize:9,color:se.textFaint,whiteSpace:"nowrap"},children:[n.length," ",X("topicsCount",k)," · ",r.length," ",X("edgesCount",k)]}),$.jsx("span",{style:{fontSize:9,color:se.textFaint,marginLeft:"auto"},children:X(Ue?Ve==="deepdive"?"hintDiagDeep":"hintDiagQuick":"hintBrowse",k)}),$.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[$.jsx("div",{style:{display:"flex",gap:3},children:Nd.map(re=>$.jsx("button",{onClick:()=>Nr(re.meta.id),style:zt(b===re.meta.id),children:re.meta.label},re.meta.id))}),$.jsx("span",{style:{color:se.border},children:"|"}),$.jsx("button",{onClick:tr,style:zt(Ue,"#f39c12"),children:X(Ue?Ve==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",k)}),Ue&&$.jsx("button",{onClick:()=>oe(!0),style:zt(Ve==="deepdive","#8e44ad"),children:X("goalBtn",k)}),$.jsx("span",{style:{color:se.border},children:"|"}),$.jsx("button",{style:zt(!0,k==="pl"?"#f5a623":"#4a9eff"),onClick:()=>T(re=>re==="pl"?"en":"pl"),children:k==="pl"?"PL":"EN"})]})]}),$.jsx(Ov,{filterScope:P,toggleScope:xe,clearScope:M,filterSection:N,toggleSection:ue,clearSection:G,searchTerm:O,setSearchTerm:H,lang:k,setLang:T,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:f,isMobile:x}),$.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[$.jsxs("svg",{ref:Ne,width:"100%",height:"100%",style:{cursor:Jr,touchAction:"none"},onMouseDown:Rr,onMouseMove:F0,onMouseUp:er,onMouseLeave:er,onClick:re=>{if(xa(re),!Ue)return;const Re=re.target.closest("[data-node-id]");Re&&Mr(Re.getAttribute("data-node-id"),re.shiftKey)},children:[$.jsxs("defs",{children:[$.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:$.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),$.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:$.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),$.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:$.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),$.jsxs("g",{transform:`translate(${De.x},${De.y}) scale(${De.scale})`,children:[$.jsx(H7,{edges:r,nodes:Ae,highlightedIds:Ue&&Ve==="deepdive"?I0:n0}),$.jsx(U7,{nodes:Ae,filteredIds:Ue&&Ve==="deepdive"?I0:Ni,highlightedIds:Ue?null:n0,selected:B,onSelect:re=>{if(Ue){Mr(re,!1);return}W(re===B?null:re)},onHover:L,lang:k,diagMode:Ue,belief:wa,frontier:ba,scale:De.scale,scopeColors:u})]})]}),B&&!Ue&&$.jsx(V7,{nodeId:B,nodes:Ae,adjacency:ge,lang:k,SCOPE_COLORS:u,SCOPE_LABELS:f,SECTIONS:l,isMobile:x,onClose:()=>W(null)}),Ue&&At&&$.jsx(Rv,{nodeId:At,nodes:Ae,lang:k,questionBank:a,excludeIndices:D0(At),onAnswer:(re,Re,Oe)=>Pi(At,re,Re,Oe),onSkip:re=>{typeof re=="number"&&Ci(Re=>new Set([...Re,`${At}:${re}`])),Qn(null)}}),Ue&&Ve==="quick"&&!At&&$.jsx(Bv,{belief:R0,frontier:Di,visibleFrontier:Ri,hasStarted:Cr,nextSuggestedId:Xn,sessionComplete:Pr,adjacency:ge,expectedRemaining:N0,pCorrect:B0,questionsAnswered:E0,nodes:Ae,lang:k,onNodeClick:re=>Qn(re),onReset:Jt,SCOPE_LABELS:f,isMobile:x}),Ue&&Ve==="deepdive"&&!At&&Ei&&$.jsx(Iv,{nodes:Ae,lang:k,targetNode:Ei,subgraphIds:en,ddClassification:Er,betaBeliefs:Zn,ddComplete:t0,ddNextNodeId:Dr,questionsAnswered:E0,onNodeClick:re=>Qn(re),onReset:Jt,isMobile:x}),!x&&$.jsx(Gv,{lang:k,diagMode:Ue,SCOPE_COLORS:u,SCOPE_LABELS:f,SECTIONS:l}),$.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([re,Re])=>$.jsx("button",{onClick:()=>{Re===null?(be(sl(b,300,n,r)),Be(x?Md:qd)):Be(Oe=>({...Oe,scale:Math.max(.15,Math.min(5,Oe.scale*Re))}))},style:{width:44,height:44,background:se.surface,border:`1px solid ${se.border}`,color:se.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:re},re))}),x&&Ue&&!At&&$.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${se.surface}ee`,borderTop:`1px solid ${se.border}`,display:"flex",gap:0,zIndex:20},children:[$.jsx("button",{onClick:()=>oe(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${se.border}`,color:Ve==="deepdive"?"#c39bd3":se.textDim,cursor:"pointer"},children:X("goalBtn",k)}),$.jsx("button",{onClick:tr,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:X("reset",k)})]})]}),V&&$.jsx(Wv,{nodes:Ae,lang:k,SECTIONS:l,SCOPE_COLORS:u,onSelect:re=>{oe(!1),Ar(re)},onClose:()=>oe(!1)}),$.jsx(Uv,{isOpen:Te,onSelect:r0,onClose:()=>Se(!1),lang:k}),$.jsx(Kv,{isOpen:Ye,onClose:ae,lang:k})]})}function Qv(){const[o,n]=J.useState(s7),[r,a]=J.useState(!1),l=o7[o];return l?r?$.jsx(Xv,{courses:a7,activeCourseId:o,onSelect:u=>{n(u),a(!1)},onClose:()=>a(!1)}):$.jsx(Yv,{courseId:o,RAW_NODES:l.RAW_NODES,RAW_EDGES:l.RAW_EDGES,QUESTION_BANK:l.QUESTION_BANK,SECTIONS:l.SECTIONS,SCOPE_COLORS:l.SCOPE_COLORS,SCOPE_LABELS:l.SCOPE_LABELS,COURSE_META:l.COURSE_META,onBackToCourses:()=>a(!0)},o):$.jsxs("div",{style:{color:"#ff6b6b",padding:20},children:["Unknown course: ",o]})}function Xv({courses:o,activeCourseId:n,onSelect:r,onClose:a}){return $.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#0a0e17",fontFamily:Id,color:"#c8d6e5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32},children:[$.jsxs("div",{style:{textAlign:"center"},children:[$.jsx("div",{style:{fontSize:28,fontWeight:700,color:"#f5f6fa",marginBottom:6},children:"oczochodzi.pl"}),$.jsx("div",{style:{fontSize:12,color:"#3a4d63"},children:"Select a course"})]}),$.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"min(340px, calc(100vw - 32px))"},children:o.map(l=>$.jsxs("button",{onClick:()=>r(l.id),style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:10,cursor:"pointer",border:l.id===n?`1px solid ${l.color}`:"1px solid #1a2235",background:l.id===n?`${l.color}18`:"#0d1520",color:"#c8d6e5",textAlign:"left",transition:"border-color 0.15s, background 0.15s"},children:[$.jsx("span",{style:{fontSize:28,lineHeight:1},children:l.icon}),$.jsxs("div",{children:[$.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:l.titleEn??l.title}),$.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:3,lineHeight:1.4},children:l.descriptionEn??l.description})]})]},l.id))}),$.jsx("button",{onClick:a,style:{fontSize:11,color:"#3a4d63",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"},children:"Cancel"})]})}Nm.createRoot(document.getElementById("root")).render($.jsx(J.StrictMode,{children:$.jsx(Qv,{})}));
