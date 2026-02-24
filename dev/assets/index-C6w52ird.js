(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();var Gl={exports:{}},ci={},Yl={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc;function Tf(){if(qc)return Ee;qc=1;var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),$=Symbol.iterator;function T(E){return E===null||typeof E!="object"?null:(E=$&&E[$]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,D={};function j(E,F,$e){this.props=E,this.context=F,this.refs=D,this.updater=$e||S}j.prototype.isReactComponent={},j.prototype.setState=function(E,F){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,F,"setState")},j.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function I(){}I.prototype=j.prototype;function W(E,F,$e){this.props=E,this.context=F,this.refs=D,this.updater=$e||S}var N=W.prototype=new I;N.constructor=W,P(N,j.prototype),N.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,K={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Z(E,F,$e){var pe,ke={},Ce=null,je=null;if(F!=null)for(pe in F.ref!==void 0&&(je=F.ref),F.key!==void 0&&(Ce=""+F.key),F)U.call(F,pe)&&!H.hasOwnProperty(pe)&&(ke[pe]=F[pe]);var Re=arguments.length-2;if(Re===1)ke.children=$e;else if(1<Re){for(var De=Array(Re),st=0;st<Re;st++)De[st]=arguments[st+2];ke.children=De}if(E&&E.defaultProps)for(pe in Re=E.defaultProps,Re)ke[pe]===void 0&&(ke[pe]=Re[pe]);return{$$typeof:a,type:E,key:Ce,ref:je,props:ke,_owner:K.current}}function V(E,F){return{$$typeof:a,type:E.type,key:F,ref:E.ref,props:E.props,_owner:E._owner}}function ge(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function ze(E){var F={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function($e){return F[$e]})}var Te=/\/+/g;function Fe(E,F){return typeof E=="object"&&E!==null&&E.key!=null?ze(""+E.key):F.toString(36)}function Ie(E,F,$e,pe,ke){var Ce=typeof E;(Ce==="undefined"||Ce==="boolean")&&(E=null);var je=!1;if(E===null)je=!0;else switch(Ce){case"string":case"number":je=!0;break;case"object":switch(E.$$typeof){case a:case n:je=!0}}if(je)return je=E,ke=ke(je),E=pe===""?"."+Fe(je,0):pe,L(ke)?($e="",E!=null&&($e=E.replace(Te,"$&/")+"/"),Ie(ke,F,$e,"",function(st){return st})):ke!=null&&(ge(ke)&&(ke=V(ke,$e+(!ke.key||je&&je.key===ke.key?"":(""+ke.key).replace(Te,"$&/")+"/")+E)),F.push(ke)),1;if(je=0,pe=pe===""?".":pe+":",L(E))for(var Re=0;Re<E.length;Re++){Ce=E[Re];var De=pe+Fe(Ce,Re);je+=Ie(Ce,F,$e,De,ke)}else if(De=T(E),typeof De=="function")for(E=De.call(E),Re=0;!(Ce=E.next()).done;)Ce=Ce.value,De=pe+Fe(Ce,Re++),je+=Ie(Ce,F,$e,De,ke);else if(Ce==="object")throw F=String(E),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return je}function Ve(E,F,$e){if(E==null)return E;var pe=[],ke=0;return Ie(E,pe,"","",function(Ce){return F.call($e,Ce,ke++)}),pe}function We(E){if(E._status===-1){var F=E._result;F=F(),F.then(function($e){(E._status===0||E._status===-1)&&(E._status=1,E._result=$e)},function($e){(E._status===0||E._status===-1)&&(E._status=2,E._result=$e)}),E._status===-1&&(E._status=0,E._result=F)}if(E._status===1)return E._result.default;throw E._result}var ye={current:null},ne={transition:null},de={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:ne,ReactCurrentOwner:K};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:Ve,forEach:function(E,F,$e){Ve(E,function(){F.apply(this,arguments)},$e)},count:function(E){var F=0;return Ve(E,function(){F++}),F},toArray:function(E){return Ve(E,function(F){return F})||[]},only:function(E){if(!ge(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ee.Component=j,Ee.Fragment=r,Ee.Profiler=s,Ee.PureComponent=W,Ee.StrictMode=o,Ee.Suspense=v,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ee.act=ae,Ee.cloneElement=function(E,F,$e){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var pe=P({},E.props),ke=E.key,Ce=E.ref,je=E._owner;if(F!=null){if(F.ref!==void 0&&(Ce=F.ref,je=K.current),F.key!==void 0&&(ke=""+F.key),E.type&&E.type.defaultProps)var Re=E.type.defaultProps;for(De in F)U.call(F,De)&&!H.hasOwnProperty(De)&&(pe[De]=F[De]===void 0&&Re!==void 0?Re[De]:F[De])}var De=arguments.length-2;if(De===1)pe.children=$e;else if(1<De){Re=Array(De);for(var st=0;st<De;st++)Re[st]=arguments[st+2];pe.children=Re}return{$$typeof:a,type:E.type,key:ke,ref:Ce,props:pe,_owner:je}},Ee.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:u,_context:E},E.Consumer=E},Ee.createElement=Z,Ee.createFactory=function(E){var F=Z.bind(null,E);return F.type=E,F},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(E){return{$$typeof:p,render:E}},Ee.isValidElement=ge,Ee.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:We}},Ee.memo=function(E,F){return{$$typeof:w,type:E,compare:F===void 0?null:F}},Ee.startTransition=function(E){var F=ne.transition;ne.transition={};try{E()}finally{ne.transition=F}},Ee.unstable_act=ae,Ee.useCallback=function(E,F){return ye.current.useCallback(E,F)},Ee.useContext=function(E){return ye.current.useContext(E)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(E){return ye.current.useDeferredValue(E)},Ee.useEffect=function(E,F){return ye.current.useEffect(E,F)},Ee.useId=function(){return ye.current.useId()},Ee.useImperativeHandle=function(E,F,$e){return ye.current.useImperativeHandle(E,F,$e)},Ee.useInsertionEffect=function(E,F){return ye.current.useInsertionEffect(E,F)},Ee.useLayoutEffect=function(E,F){return ye.current.useLayoutEffect(E,F)},Ee.useMemo=function(E,F){return ye.current.useMemo(E,F)},Ee.useReducer=function(E,F,$e){return ye.current.useReducer(E,F,$e)},Ee.useRef=function(E){return ye.current.useRef(E)},Ee.useState=function(E){return ye.current.useState(E)},Ee.useSyncExternalStore=function(E,F,$e){return ye.current.useSyncExternalStore(E,F,$e)},Ee.useTransition=function(){return ye.current.useTransition()},Ee.version="18.3.1",Ee}var jc;function Ss(){return jc||(jc=1,Yl.exports=Tf()),Yl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function Cf(){if(Pc)return ci;Pc=1;var a=Ss(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,v,w){var b,$={},T=null,S=null;w!==void 0&&(T=""+w),v.key!==void 0&&(T=""+v.key),v.ref!==void 0&&(S=v.ref);for(b in v)o.call(v,b)&&!u.hasOwnProperty(b)&&($[b]=v[b]);if(p&&p.defaultProps)for(b in v=p.defaultProps,v)$[b]===void 0&&($[b]=v[b]);return{$$typeof:n,type:p,key:T,ref:S,props:$,_owner:s.current}}return ci.Fragment=r,ci.jsx=f,ci.jsxs=f,ci}var Rc;function Af(){return Rc||(Rc=1,Gl.exports=Cf()),Gl.exports}var M=Af(),re=Ss(),Aa={},Xl={exports:{}},Lt={},Ql={exports:{}},Kl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Ef(){return Dc||(Dc=1,(function(a){function n(ne,de){var ae=ne.length;ne.push(de);e:for(;0<ae;){var E=ae-1>>>1,F=ne[E];if(0<s(F,de))ne[E]=de,ne[ae]=F,ae=E;else break e}}function r(ne){return ne.length===0?null:ne[0]}function o(ne){if(ne.length===0)return null;var de=ne[0],ae=ne.pop();if(ae!==de){ne[0]=ae;e:for(var E=0,F=ne.length,$e=F>>>1;E<$e;){var pe=2*(E+1)-1,ke=ne[pe],Ce=pe+1,je=ne[Ce];if(0>s(ke,ae))Ce<F&&0>s(je,ke)?(ne[E]=je,ne[Ce]=ae,E=Ce):(ne[E]=ke,ne[pe]=ae,E=pe);else if(Ce<F&&0>s(je,ae))ne[E]=je,ne[Ce]=ae,E=Ce;else break e}}return de}function s(ne,de){var ae=ne.sortIndex-de.sortIndex;return ae!==0?ae:ne.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();a.unstable_now=function(){return f.now()-p}}var v=[],w=[],b=1,$=null,T=3,S=!1,P=!1,D=!1,j=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(ne){for(var de=r(w);de!==null;){if(de.callback===null)o(w);else if(de.startTime<=ne)o(w),de.sortIndex=de.expirationTime,n(v,de);else break;de=r(w)}}function L(ne){if(D=!1,N(ne),!P)if(r(v)!==null)P=!0,We(U);else{var de=r(w);de!==null&&ye(L,de.startTime-ne)}}function U(ne,de){P=!1,D&&(D=!1,I(Z),Z=-1),S=!0;var ae=T;try{for(N(de),$=r(v);$!==null&&(!($.expirationTime>de)||ne&&!ze());){var E=$.callback;if(typeof E=="function"){$.callback=null,T=$.priorityLevel;var F=E($.expirationTime<=de);de=a.unstable_now(),typeof F=="function"?$.callback=F:$===r(v)&&o(v),N(de)}else o(v);$=r(v)}if($!==null)var $e=!0;else{var pe=r(w);pe!==null&&ye(L,pe.startTime-de),$e=!1}return $e}finally{$=null,T=ae,S=!1}}var K=!1,H=null,Z=-1,V=5,ge=-1;function ze(){return!(a.unstable_now()-ge<V)}function Te(){if(H!==null){var ne=a.unstable_now();ge=ne;var de=!0;try{de=H(!0,ne)}finally{de?Fe():(K=!1,H=null)}}else K=!1}var Fe;if(typeof W=="function")Fe=function(){W(Te)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Ve=Ie.port2;Ie.port1.onmessage=Te,Fe=function(){Ve.postMessage(null)}}else Fe=function(){j(Te,0)};function We(ne){H=ne,K||(K=!0,Fe())}function ye(ne,de){Z=j(function(){ne(a.unstable_now())},de)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(ne){ne.callback=null},a.unstable_continueExecution=function(){P||S||(P=!0,We(U))},a.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<ne?Math.floor(1e3/ne):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_getFirstCallbackNode=function(){return r(v)},a.unstable_next=function(ne){switch(T){case 1:case 2:case 3:var de=3;break;default:de=T}var ae=T;T=de;try{return ne()}finally{T=ae}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(ne,de){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var ae=T;T=ne;try{return de()}finally{T=ae}},a.unstable_scheduleCallback=function(ne,de,ae){var E=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?E+ae:E):ae=E,ne){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=ae+F,ne={id:b++,callback:de,priorityLevel:ne,startTime:ae,expirationTime:F,sortIndex:-1},ae>E?(ne.sortIndex=ae,n(w,ne),r(v)===null&&ne===r(w)&&(D?(I(Z),Z=-1):D=!0,ye(L,ae-E))):(ne.sortIndex=F,n(v,ne),P||S||(P=!0,We(U))),ne},a.unstable_shouldYield=ze,a.unstable_wrapCallback=function(ne){var de=T;return function(){var ae=T;T=de;try{return ne.apply(this,arguments)}finally{T=ae}}}})(Kl)),Kl}var Bc;function qf(){return Bc||(Bc=1,Ql.exports=Ef()),Ql.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function jf(){if(Nc)return Lt;Nc=1;var a=Ss(),n=qf();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},$={};function T(e){return v.call($,e)?!0:v.call(b,e)?!1:w.test(e)?$[e]=!0:(b[e]=!0,!1)}function S(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,i,l){if(t===null||typeof t>"u"||S(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function D(e,t,i,l,c,h,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=y}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];j[t]=new D(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){j[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){j[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){j[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){j[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,W);j[t]=new D(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,W);j[t]=new D(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,W);j[t]=new D(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){j[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),j.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){j[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,t,i,l){var c=j.hasOwnProperty(t)?j[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,i,c,l)&&(i=null),l||c===null?T(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var L=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),K=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),ne=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,E;function F(e){if(E===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var $e=!1;function pe(e,t){if(!e||$e)return"";$e=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var l=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){l=O}e.call(t.prototype)}else{try{throw Error()}catch(O){l=O}e()}}catch(O){if(O&&l&&typeof O.stack=="string"){for(var c=O.stack.split(`
`),h=l.stack.split(`
`),y=c.length-1,k=h.length-1;1<=y&&0<=k&&c[y]!==h[k];)k--;for(;1<=y&&0<=k;y--,k--)if(c[y]!==h[k]){if(y!==1||k!==1)do if(y--,k--,0>k||c[y]!==h[k]){var C=`
`+c[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=y&&0<=k);break}}}finally{$e=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?F(e):""}function ke(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return""}}function Ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case K:return"Portal";case V:return"Profiler";case Z:return"StrictMode";case Fe:return"Suspense";case Ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ze:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ve:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(t);case 8:return t===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function st(e){var t=De(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){l=""+y,h.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=st(e))}function Nr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=De(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hn(e,t){var i=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Lr(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=Re(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sn(e,t){t=t.checked,t!=null&&N(e,"checked",t,!1)}function hn(e,t){Sn(e,t);var i=Re(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mn(e,t.type,i):t.hasOwnProperty("defaultValue")&&Mn(e,t.type,Re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Mn(e,t,i){(t!=="number"||fn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Yt=Array.isArray;function Mt(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Re(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function w0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wn(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(Yt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Re(i)}}function xr(e,t){var i=Re(t.value),l=Re(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function wr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Or(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Or(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pn,$0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pn=pn||document.createElement("div"),pn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lo=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){lo.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function k0(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function $i(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=k0(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var so=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _0(e,t){if(t){if(so[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function z0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S0=null;function M0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var le=null,Pe=null,qe=null;function Ir(e){if(e=X0(e)){if(typeof le!="function")throw Error(r(280));var t=e.stateNode;t&&(t=Ui(t),le(e.stateNode,e.type,t))}}function Qs(e){Pe?qe?qe.push(e):qe=[e]:Pe=e}function Ks(){if(Pe){var e=Pe,t=qe;if(qe=Pe=null,Ir(e),t)for(e=0;e<t.length;e++)Ir(t[e])}}function Zs(e,t){return e(t)}function Js(){}var uo=!1;function eu(e,t,i){if(uo)return e(t,i);uo=!0;try{return Zs(e,t,i)}finally{uo=!1,(Pe!==null||qe!==null)&&(Js(),Ks())}}function T0(e,t){var i=e.stateNode;if(i===null)return null;var l=Ui(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var co=!1;if(p)try{var C0={};Object.defineProperty(C0,"passive",{get:function(){co=!0}}),window.addEventListener("test",C0,C0),window.removeEventListener("test",C0,C0)}catch{co=!1}function j4(e,t,i,l,c,h,y,k,C){var O=Array.prototype.slice.call(arguments,3);try{t.apply(i,O)}catch(X){this.onError(X)}}var A0=!1,ki=null,_i=!1,fo=null,P4={onError:function(e){A0=!0,ki=e}};function R4(e,t,i,l,c,h,y,k,C){A0=!1,ki=null,j4.apply(P4,arguments)}function D4(e,t,i,l,c,h,y,k,C){if(R4.apply(this,arguments),A0){if(A0){var O=ki;A0=!1,ki=null}else throw Error(r(198));_i||(_i=!0,fo=O)}}function $r(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if($r(e)!==e)throw Error(r(188))}function B4(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===i)return nu(c),e;if(h===l)return nu(c),t;h=h.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=h;else{for(var y=!1,k=c.child;k;){if(k===i){y=!0,i=c,l=h;break}if(k===l){y=!0,l=c,i=h;break}k=k.sibling}if(!y){for(k=h.child;k;){if(k===i){y=!0,i=h,l=c;break}if(k===l){y=!0,l=h,i=c;break}k=k.sibling}if(!y)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function ru(e){return e=B4(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var au=n.unstable_scheduleCallback,ou=n.unstable_cancelCallback,N4=n.unstable_shouldYield,L4=n.unstable_requestPaint,at=n.unstable_now,O4=n.unstable_getCurrentPriorityLevel,ho=n.unstable_ImmediatePriority,lu=n.unstable_UserBlockingPriority,zi=n.unstable_NormalPriority,I4=n.unstable_LowPriority,su=n.unstable_IdlePriority,Si=null,vn=null;function F4(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Si,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:U4,H4=Math.log,W4=Math.LN2;function U4(e){return e>>>=0,e===0?32:31-(H4(e)/W4|0)|0}var Mi=64,Ti=4194304;function E0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ci(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,h=e.pingedLanes,y=i&268435455;if(y!==0){var k=y&~c;k!==0?l=E0(k):(h&=y,h!==0&&(l=E0(h)))}else y=i&~c,y!==0?l=E0(y):h!==0&&(l=E0(h));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,h=t&-t,c>=h||c===16&&(h&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-an(t),c=1<<i,l|=e[i],t&=~c;return l}function V4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G4(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-an(h),k=1<<y,C=c[y];C===-1?((k&i)===0||(k&l)!==0)&&(c[y]=V4(k,t)):C<=t&&(e.expiredLanes|=k),h&=~k}}function mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=Mi;return Mi<<=1,(Mi&4194240)===0&&(Mi=64),e}function po(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function q0(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=i}function Y4(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-an(i),h=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~h}}function vo(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-an(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var He=0;function cu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var du,go,fu,hu,mu,yo=!1,Ai=[],Vn=null,Gn=null,Yn=null,j0=new Map,P0=new Map,Xn=[],X4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":j0.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":P0.delete(t.pointerId)}}function R0(e,t,i,l,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},t!==null&&(t=X0(t),t!==null&&go(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Q4(e,t,i,l,c){switch(t){case"focusin":return Vn=R0(Vn,e,t,i,l,c),!0;case"dragenter":return Gn=R0(Gn,e,t,i,l,c),!0;case"mouseover":return Yn=R0(Yn,e,t,i,l,c),!0;case"pointerover":var h=c.pointerId;return j0.set(h,R0(j0.get(h)||null,e,t,i,l,c)),!0;case"gotpointercapture":return h=c.pointerId,P0.set(h,R0(P0.get(h)||null,e,t,i,l,c)),!0}return!1}function vu(e){var t=kr(e.target);if(t!==null){var i=$r(t);if(i!==null){if(t=i.tag,t===13){if(t=tu(i),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);S0=l,i.target.dispatchEvent(l),S0=null}else return t=X0(i),t!==null&&go(t),e.blockedOn=i,!1;t.shift()}return!0}function gu(e,t,i){Ei(e)&&i.delete(t)}function K4(){yo=!1,Vn!==null&&Ei(Vn)&&(Vn=null),Gn!==null&&Ei(Gn)&&(Gn=null),Yn!==null&&Ei(Yn)&&(Yn=null),j0.forEach(gu),P0.forEach(gu)}function D0(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,K4)))}function B0(e){function t(c){return D0(c,e)}if(0<Ai.length){D0(Ai[0],e);for(var i=1;i<Ai.length;i++){var l=Ai[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Vn!==null&&D0(Vn,e),Gn!==null&&D0(Gn,e),Yn!==null&&D0(Yn,e),j0.forEach(t),P0.forEach(t),i=0;i<Xn.length;i++)l=Xn[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Xn.length&&(i=Xn[0],i.blockedOn===null);)vu(i),i.blockedOn===null&&Xn.shift()}var Fr=L.ReactCurrentBatchConfig,qi=!0;function Z4(e,t,i,l){var c=He,h=Fr.transition;Fr.transition=null;try{He=1,xo(e,t,i,l)}finally{He=c,Fr.transition=h}}function J4(e,t,i,l){var c=He,h=Fr.transition;Fr.transition=null;try{He=4,xo(e,t,i,l)}finally{He=c,Fr.transition=h}}function xo(e,t,i,l){if(qi){var c=wo(e,t,i,l);if(c===null)Bo(e,t,l,ji,i),pu(e,l);else if(Q4(c,e,t,i,l))l.stopPropagation();else if(pu(e,l),t&4&&-1<X4.indexOf(e)){for(;c!==null;){var h=X0(c);if(h!==null&&du(h),h=wo(e,t,i,l),h===null&&Bo(e,t,l,ji,i),h===c)break;c=h}c!==null&&l.stopPropagation()}else Bo(e,t,l,null,i)}}var ji=null;function wo(e,t,i,l){if(ji=null,e=M0(l),e=kr(e),e!==null)if(t=$r(e),t===null)e=null;else if(i=t.tag,i===13){if(e=tu(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O4()){case ho:return 1;case lu:return 4;case zi:case I4:return 16;case su:return 536870912;default:return 16}default:return 16}}var Qn=null,bo=null,Pi=null;function xu(){if(Pi)return Pi;var e,t=bo,i=t.length,l,c="value"in Qn?Qn.value:Qn.textContent,h=c.length;for(e=0;e<i&&t[e]===c[e];e++);var y=i-e;for(l=1;l<=y&&t[i-l]===c[h-l];l++);return Pi=c.slice(e,1<l?1-l:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function wu(){return!1}function Ft(e){function t(i,l,c,h,y){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(i=e[k],this[k]=i?i(h):h[k]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Di:wu,this.isPropagationStopped=wu,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Ft(Hr),N0=ae({},Hr,{view:0,detail:0}),e2=Ft(N0),ko,_o,L0,Bi=ae({},N0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==L0&&(L0&&e.type==="mousemove"?(ko=e.screenX-L0.screenX,_o=e.screenY-L0.screenY):_o=ko=0,L0=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),bu=Ft(Bi),t2=ae({},Bi,{dataTransfer:0}),n2=Ft(t2),r2=ae({},N0,{relatedTarget:0}),zo=Ft(r2),i2=ae({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),a2=Ft(i2),o2=ae({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l2=Ft(o2),s2=ae({},Hr,{data:0}),$u=Ft(s2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d2[e])?!!t[e]:!1}function So(){return f2}var h2=ae({},N0,{key:function(e){if(e.key){var t=u2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m2=Ft(h2),p2=ae({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Ft(p2),v2=ae({},N0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),g2=Ft(v2),y2=ae({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),x2=Ft(y2),w2=ae({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b2=Ft(w2),$2=[9,13,27,32],Mo=p&&"CompositionEvent"in window,O0=null;p&&"documentMode"in document&&(O0=document.documentMode);var k2=p&&"TextEvent"in window&&!O0,_u=p&&(!Mo||O0&&8<O0&&11>=O0),zu=" ",Su=!1;function Mu(e,t){switch(e){case"keyup":return $2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function _2(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Su=!0,zu);case"textInput":return e=t.data,e===zu&&Su?null:e;default:return null}}function z2(e,t){if(Wr)return e==="compositionend"||!Mo&&Mu(e,t)?(e=xu(),Pi=bo=Qn=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var S2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S2[e.type]:t==="textarea"}function Au(e,t,i,l){Qs(l),t=Fi(t,"onChange"),0<t.length&&(i=new $o("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var I0=null,F0=null;function M2(e){Yu(e,0)}function Ni(e){var t=Xr(e);if(Nr(t))return e}function T2(e,t){if(e==="change")return t}var Eu=!1;if(p){var To;if(p){var Co="oninput"in document;if(!Co){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Co=typeof qu.oninput=="function"}To=Co}else To=!1;Eu=To&&(!document.documentMode||9<document.documentMode)}function ju(){I0&&(I0.detachEvent("onpropertychange",Pu),F0=I0=null)}function Pu(e){if(e.propertyName==="value"&&Ni(F0)){var t=[];Au(t,F0,e,M0(e)),eu(M2,t)}}function C2(e,t,i){e==="focusin"?(ju(),I0=t,F0=i,I0.attachEvent("onpropertychange",Pu)):e==="focusout"&&ju()}function A2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(F0)}function E2(e,t){if(e==="click")return Ni(t)}function q2(e,t){if(e==="input"||e==="change")return Ni(t)}function j2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var on=typeof Object.is=="function"?Object.is:j2;function H0(e,t){if(on(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!v.call(t,c)||!on(e[c],t[c]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var i=Ru(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ru(i)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(){for(var e=window,t=fn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=fn(e.document)}return t}function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function P2(e){var t=Nu(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Bu(i.ownerDocument.documentElement,i)){if(l!==null&&Ao(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!e.extend&&h>l&&(c=l,l=h,h=c),c=Du(i,h);var y=Du(i,l);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),h>l?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R2=p&&"documentMode"in document&&11>=document.documentMode,Ur=null,Eo=null,W0=null,qo=!1;function Lu(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;qo||Ur==null||Ur!==fn(l)||(l=Ur,"selectionStart"in l&&Ao(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),W0&&H0(W0,l)||(W0=l,l=Fi(Eo,"onSelect"),0<l.length&&(t=new $o("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Ur)))}function Li(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Vr={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},jo={},Ou={};p&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Oi(e){if(jo[e])return jo[e];if(!Vr[e])return e;var t=Vr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Ou)return jo[e]=t[i];return e}var Iu=Oi("animationend"),Fu=Oi("animationiteration"),Hu=Oi("animationstart"),Wu=Oi("transitionend"),Uu=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Uu.set(e,t),u(t,[e])}for(var Po=0;Po<Vu.length;Po++){var Ro=Vu[Po],D2=Ro.toLowerCase(),B2=Ro[0].toUpperCase()+Ro.slice(1);Kn(D2,"on"+B2)}Kn(Iu,"onAnimationEnd"),Kn(Fu,"onAnimationIteration"),Kn(Hu,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Wu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var U0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N2=new Set("cancel close invalid load scroll toggle".split(" ").concat(U0));function Gu(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,D4(l,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var h=void 0;if(t)for(var y=l.length-1;0<=y;y--){var k=l[y],C=k.instance,O=k.currentTarget;if(k=k.listener,C!==h&&c.isPropagationStopped())break e;Gu(c,k,O),h=C}else for(y=0;y<l.length;y++){if(k=l[y],C=k.instance,O=k.currentTarget,k=k.listener,C!==h&&c.isPropagationStopped())break e;Gu(c,k,O),h=C}}}if(_i)throw e=fo,_i=!1,fo=null,e}function Xe(e,t){var i=t[Ho];i===void 0&&(i=t[Ho]=new Set);var l=e+"__bubble";i.has(l)||(Xu(t,e,2,!1),i.add(l))}function Do(e,t,i){var l=0;t&&(l|=4),Xu(i,e,l,t)}var Ii="_reactListening"+Math.random().toString(36).slice(2);function V0(e){if(!e[Ii]){e[Ii]=!0,o.forEach(function(i){i!=="selectionchange"&&(N2.has(i)||Do(i,!1,e),Do(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ii]||(t[Ii]=!0,Do("selectionchange",!1,t))}}function Xu(e,t,i,l){switch(yu(t)){case 1:var c=Z4;break;case 4:c=J4;break;default:c=xo}i=c.bind(null,t,i,e),c=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Bo(e,t,i,l,c){var h=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var k=l.stateNode.containerInfo;if(k===c||k.nodeType===8&&k.parentNode===c)break;if(y===4)for(y=l.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===c||C.nodeType===8&&C.parentNode===c))return;y=y.return}for(;k!==null;){if(y=kr(k),y===null)return;if(C=y.tag,C===5||C===6){l=h=y;continue e}k=k.parentNode}}l=l.return}eu(function(){var O=h,X=M0(i),J=[];e:{var G=Uu.get(e);if(G!==void 0){var ue=$o,he=e;switch(e){case"keypress":if(Ri(i)===0)break e;case"keydown":case"keyup":ue=m2;break;case"focusin":he="focus",ue=zo;break;case"focusout":he="blur",ue=zo;break;case"beforeblur":case"afterblur":ue=zo;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=g2;break;case Iu:case Fu:case Hu:ue=a2;break;case Wu:ue=x2;break;case"scroll":ue=e2;break;case"wheel":ue=b2;break;case"copy":case"cut":case"paste":ue=l2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=ku}var me=(t&4)!==0,ot=!me&&e==="scroll",R=me?G!==null?G+"Capture":null:G;me=[];for(var q=O,B;q!==null;){B=q;var ie=B.stateNode;if(B.tag===5&&ie!==null&&(B=ie,R!==null&&(ie=T0(q,R),ie!=null&&me.push(G0(q,ie,B)))),ot)break;q=q.return}0<me.length&&(G=new ue(G,he,null,i,X),J.push({event:G,listeners:me}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",G&&i!==S0&&(he=i.relatedTarget||i.fromElement)&&(kr(he)||he[Tn]))break e;if((ue||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,ue?(he=i.relatedTarget||i.toElement,ue=O,he=he?kr(he):null,he!==null&&(ot=$r(he),he!==ot||he.tag!==5&&he.tag!==6)&&(he=null)):(ue=null,he=O),ue!==he)){if(me=bu,ie="onMouseLeave",R="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(me=ku,ie="onPointerLeave",R="onPointerEnter",q="pointer"),ot=ue==null?G:Xr(ue),B=he==null?G:Xr(he),G=new me(ie,q+"leave",ue,i,X),G.target=ot,G.relatedTarget=B,ie=null,kr(X)===O&&(me=new me(R,q+"enter",he,i,X),me.target=B,me.relatedTarget=ot,ie=me),ot=ie,ue&&he)t:{for(me=ue,R=he,q=0,B=me;B;B=Gr(B))q++;for(B=0,ie=R;ie;ie=Gr(ie))B++;for(;0<q-B;)me=Gr(me),q--;for(;0<B-q;)R=Gr(R),B--;for(;q--;){if(me===R||R!==null&&me===R.alternate)break t;me=Gr(me),R=Gr(R)}me=null}else me=null;ue!==null&&Qu(J,G,ue,me,!1),he!==null&&ot!==null&&Qu(J,ot,he,me,!0)}}e:{if(G=O?Xr(O):window,ue=G.nodeName&&G.nodeName.toLowerCase(),ue==="select"||ue==="input"&&G.type==="file")var ve=T2;else if(Cu(G))if(Eu)ve=q2;else{ve=A2;var xe=C2}else(ue=G.nodeName)&&ue.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ve=E2);if(ve&&(ve=ve(e,O))){Au(J,ve,i,X);break e}xe&&xe(e,G,O),e==="focusout"&&(xe=G._wrapperState)&&xe.controlled&&G.type==="number"&&Mn(G,"number",G.value)}switch(xe=O?Xr(O):window,e){case"focusin":(Cu(xe)||xe.contentEditable==="true")&&(Ur=xe,Eo=O,W0=null);break;case"focusout":W0=Eo=Ur=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Lu(J,i,X);break;case"selectionchange":if(R2)break;case"keydown":case"keyup":Lu(J,i,X)}var we;if(Mo)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Wr?Mu(e,i)&&(Se="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Se="onCompositionStart");Se&&(_u&&i.locale!=="ko"&&(Wr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Wr&&(we=xu()):(Qn=X,bo="value"in Qn?Qn.value:Qn.textContent,Wr=!0)),xe=Fi(O,Se),0<xe.length&&(Se=new $u(Se,e,null,i,X),J.push({event:Se,listeners:xe}),we?Se.data=we:(we=Tu(i),we!==null&&(Se.data=we)))),(we=k2?_2(e,i):z2(e,i))&&(O=Fi(O,"onBeforeInput"),0<O.length&&(X=new $u("onBeforeInput","beforeinput",null,i,X),J.push({event:X,listeners:O}),X.data=we))}Yu(J,t)})}function G0(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Fi(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=T0(e,i),h!=null&&l.unshift(G0(e,h,c)),h=T0(e,t),h!=null&&l.push(G0(e,h,c))),e=e.return}return l}function Gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,i,l,c){for(var h=t._reactName,y=[];i!==null&&i!==l;){var k=i,C=k.alternate,O=k.stateNode;if(C!==null&&C===l)break;k.tag===5&&O!==null&&(k=O,c?(C=T0(i,h),C!=null&&y.unshift(G0(i,C,k))):c||(C=T0(i,h),C!=null&&y.push(G0(i,C,k)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var L2=/\r\n?/g,O2=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(L2,`
`).replace(O2,"")}function Hi(e,t,i){if(t=Ku(t),Ku(e)!==t&&i)throw Error(r(425))}function Wi(){}var No=null,Lo=null;function Oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,I2=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,F2=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(H2)}:Io;function H2(e){setTimeout(function(){throw e})}function Fo(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),B0(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);B0(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),gn="__reactFiber$"+Yr,Y0="__reactProps$"+Yr,Tn="__reactContainer$"+Yr,Ho="__reactEvents$"+Yr,W2="__reactListeners$"+Yr,U2="__reactHandles$"+Yr;function kr(e){var t=e[gn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Tn]||i[gn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ju(e);e!==null;){if(i=e[gn])return i;e=Ju(e)}return t}e=i,i=e.parentNode}return null}function X0(e){return e=e[gn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ui(e){return e[Y0]||null}var Wo=[],Qr=-1;function Jn(e){return{current:e}}function Qe(e){0>Qr||(e.current=Wo[Qr],Wo[Qr]=null,Qr--)}function Ge(e,t){Qr++,Wo[Qr]=e.current,e.current=t}var er={},$t=Jn(er),Pt=Jn(!1),_r=er;function Kr(e,t){var i=e.type.contextTypes;if(!i)return er;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in i)c[h]=t[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Rt(e){return e=e.childContextTypes,e!=null}function Vi(){Qe(Pt),Qe($t)}function e1(e,t,i){if($t.current!==er)throw Error(r(168));Ge($t,t),Ge(Pt,i)}function t1(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(r(108,je(e)||"Unknown",c));return ae({},i,l)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,_r=$t.current,Ge($t,e),Ge(Pt,Pt.current),!0}function n1(e,t,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=t1(e,t,_r),l.__reactInternalMemoizedMergedChildContext=e,Qe(Pt),Qe($t),Ge($t,e)):Qe(Pt),Ge(Pt,i)}var Cn=null,Yi=!1,Uo=!1;function r1(e){Cn===null?Cn=[e]:Cn.push(e)}function V2(e){Yi=!0,r1(e)}function tr(){if(!Uo&&Cn!==null){Uo=!0;var e=0,t=He;try{var i=Cn;for(He=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Cn=null,Yi=!1}catch(c){throw Cn!==null&&(Cn=Cn.slice(e+1)),au(ho,tr),c}finally{He=t,Uo=!1}}return null}var Zr=[],Jr=0,Xi=null,Qi=0,Xt=[],Qt=0,zr=null,An=1,En="";function Sr(e,t){Zr[Jr++]=Qi,Zr[Jr++]=Xi,Xi=e,Qi=t}function i1(e,t,i){Xt[Qt++]=An,Xt[Qt++]=En,Xt[Qt++]=zr,zr=e;var l=An;e=En;var c=32-an(l)-1;l&=~(1<<c),i+=1;var h=32-an(t)+c;if(30<h){var y=c-c%5;h=(l&(1<<y)-1).toString(32),l>>=y,c-=y,An=1<<32-an(t)+c|i<<c|l,En=h+e}else An=1<<h|i<<c|l,En=e}function Vo(e){e.return!==null&&(Sr(e,1),i1(e,1,0))}function Go(e){for(;e===Xi;)Xi=Zr[--Jr],Zr[Jr]=null,Qi=Zr[--Jr],Zr[Jr]=null;for(;e===zr;)zr=Xt[--Qt],Xt[Qt]=null,En=Xt[--Qt],Xt[Qt]=null,An=Xt[--Qt],Xt[Qt]=null}var Ht=null,Wt=null,Ke=!1,ln=null;function a1(e,t){var i=en(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function o1(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=zr!==null?{id:An,overflow:En}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=en(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ht=e,Wt=null,!0):!1;default:return!1}}function Yo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xo(e){if(Ke){var t=Wt;if(t){var i=t;if(!o1(e,t)){if(Yo(e))throw Error(r(418));t=Zn(i.nextSibling);var l=Ht;t&&o1(e,t)?a1(l,i):(e.flags=e.flags&-4097|2,Ke=!1,Ht=e)}}else{if(Yo(e))throw Error(r(418));e.flags=e.flags&-4097|2,Ke=!1,Ht=e}}}function l1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Ki(e){if(e!==Ht)return!1;if(!Ke)return l1(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oo(e.type,e.memoizedProps)),t&&(t=Wt)){if(Yo(e))throw s1(),Error(r(418));for(;t;)a1(e,t),t=Zn(t.nextSibling)}if(l1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Wt=Zn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Ht?Zn(e.stateNode.nextSibling):null;return!0}function s1(){for(var e=Wt;e;)e=Zn(e.nextSibling)}function e0(){Wt=Ht=null,Ke=!1}function Qo(e){ln===null?ln=[e]:ln.push(e)}var G2=L.ReactCurrentBatchConfig;function Q0(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(y){var k=c.refs;y===null?delete k[h]:k[h]=y},t._stringRef=h,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function u1(e){var t=e._init;return t(e._payload)}function c1(e){function t(R,q){if(e){var B=R.deletions;B===null?(R.deletions=[q],R.flags|=16):B.push(q)}}function i(R,q){if(!e)return null;for(;q!==null;)t(R,q),q=q.sibling;return null}function l(R,q){for(R=new Map;q!==null;)q.key!==null?R.set(q.key,q):R.set(q.index,q),q=q.sibling;return R}function c(R,q){return R=ur(R,q),R.index=0,R.sibling=null,R}function h(R,q,B){return R.index=B,e?(B=R.alternate,B!==null?(B=B.index,B<q?(R.flags|=2,q):B):(R.flags|=2,q)):(R.flags|=1048576,q)}function y(R){return e&&R.alternate===null&&(R.flags|=2),R}function k(R,q,B,ie){return q===null||q.tag!==6?(q=Il(B,R.mode,ie),q.return=R,q):(q=c(q,B),q.return=R,q)}function C(R,q,B,ie){var ve=B.type;return ve===H?X(R,q,B.props.children,ie,B.key):q!==null&&(q.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===We&&u1(ve)===q.type)?(ie=c(q,B.props),ie.ref=Q0(R,q,B),ie.return=R,ie):(ie=$a(B.type,B.key,B.props,null,R.mode,ie),ie.ref=Q0(R,q,B),ie.return=R,ie)}function O(R,q,B,ie){return q===null||q.tag!==4||q.stateNode.containerInfo!==B.containerInfo||q.stateNode.implementation!==B.implementation?(q=Fl(B,R.mode,ie),q.return=R,q):(q=c(q,B.children||[]),q.return=R,q)}function X(R,q,B,ie,ve){return q===null||q.tag!==7?(q=Pr(B,R.mode,ie,ve),q.return=R,q):(q=c(q,B),q.return=R,q)}function J(R,q,B){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Il(""+q,R.mode,B),q.return=R,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case U:return B=$a(q.type,q.key,q.props,null,R.mode,B),B.ref=Q0(R,null,q),B.return=R,B;case K:return q=Fl(q,R.mode,B),q.return=R,q;case We:var ie=q._init;return J(R,ie(q._payload),B)}if(Yt(q)||de(q))return q=Pr(q,R.mode,B,null),q.return=R,q;Zi(R,q)}return null}function G(R,q,B,ie){var ve=q!==null?q.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ve!==null?null:k(R,q,""+B,ie);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case U:return B.key===ve?C(R,q,B,ie):null;case K:return B.key===ve?O(R,q,B,ie):null;case We:return ve=B._init,G(R,q,ve(B._payload),ie)}if(Yt(B)||de(B))return ve!==null?null:X(R,q,B,ie,null);Zi(R,B)}return null}function ue(R,q,B,ie,ve){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return R=R.get(B)||null,k(q,R,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:return R=R.get(ie.key===null?B:ie.key)||null,C(q,R,ie,ve);case K:return R=R.get(ie.key===null?B:ie.key)||null,O(q,R,ie,ve);case We:var xe=ie._init;return ue(R,q,B,xe(ie._payload),ve)}if(Yt(ie)||de(ie))return R=R.get(B)||null,X(q,R,ie,ve,null);Zi(q,ie)}return null}function he(R,q,B,ie){for(var ve=null,xe=null,we=q,Se=q=0,yt=null;we!==null&&Se<B.length;Se++){we.index>Se?(yt=we,we=null):yt=we.sibling;var Le=G(R,we,B[Se],ie);if(Le===null){we===null&&(we=yt);break}e&&we&&Le.alternate===null&&t(R,we),q=h(Le,q,Se),xe===null?ve=Le:xe.sibling=Le,xe=Le,we=yt}if(Se===B.length)return i(R,we),Ke&&Sr(R,Se),ve;if(we===null){for(;Se<B.length;Se++)we=J(R,B[Se],ie),we!==null&&(q=h(we,q,Se),xe===null?ve=we:xe.sibling=we,xe=we);return Ke&&Sr(R,Se),ve}for(we=l(R,we);Se<B.length;Se++)yt=ue(we,R,Se,B[Se],ie),yt!==null&&(e&&yt.alternate!==null&&we.delete(yt.key===null?Se:yt.key),q=h(yt,q,Se),xe===null?ve=yt:xe.sibling=yt,xe=yt);return e&&we.forEach(function(cr){return t(R,cr)}),Ke&&Sr(R,Se),ve}function me(R,q,B,ie){var ve=de(B);if(typeof ve!="function")throw Error(r(150));if(B=ve.call(B),B==null)throw Error(r(151));for(var xe=ve=null,we=q,Se=q=0,yt=null,Le=B.next();we!==null&&!Le.done;Se++,Le=B.next()){we.index>Se?(yt=we,we=null):yt=we.sibling;var cr=G(R,we,Le.value,ie);if(cr===null){we===null&&(we=yt);break}e&&we&&cr.alternate===null&&t(R,we),q=h(cr,q,Se),xe===null?ve=cr:xe.sibling=cr,xe=cr,we=yt}if(Le.done)return i(R,we),Ke&&Sr(R,Se),ve;if(we===null){for(;!Le.done;Se++,Le=B.next())Le=J(R,Le.value,ie),Le!==null&&(q=h(Le,q,Se),xe===null?ve=Le:xe.sibling=Le,xe=Le);return Ke&&Sr(R,Se),ve}for(we=l(R,we);!Le.done;Se++,Le=B.next())Le=ue(we,R,Se,Le.value,ie),Le!==null&&(e&&Le.alternate!==null&&we.delete(Le.key===null?Se:Le.key),q=h(Le,q,Se),xe===null?ve=Le:xe.sibling=Le,xe=Le);return e&&we.forEach(function(Mf){return t(R,Mf)}),Ke&&Sr(R,Se),ve}function ot(R,q,B,ie){if(typeof B=="object"&&B!==null&&B.type===H&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case U:e:{for(var ve=B.key,xe=q;xe!==null;){if(xe.key===ve){if(ve=B.type,ve===H){if(xe.tag===7){i(R,xe.sibling),q=c(xe,B.props.children),q.return=R,R=q;break e}}else if(xe.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===We&&u1(ve)===xe.type){i(R,xe.sibling),q=c(xe,B.props),q.ref=Q0(R,xe,B),q.return=R,R=q;break e}i(R,xe);break}else t(R,xe);xe=xe.sibling}B.type===H?(q=Pr(B.props.children,R.mode,ie,B.key),q.return=R,R=q):(ie=$a(B.type,B.key,B.props,null,R.mode,ie),ie.ref=Q0(R,q,B),ie.return=R,R=ie)}return y(R);case K:e:{for(xe=B.key;q!==null;){if(q.key===xe)if(q.tag===4&&q.stateNode.containerInfo===B.containerInfo&&q.stateNode.implementation===B.implementation){i(R,q.sibling),q=c(q,B.children||[]),q.return=R,R=q;break e}else{i(R,q);break}else t(R,q);q=q.sibling}q=Fl(B,R.mode,ie),q.return=R,R=q}return y(R);case We:return xe=B._init,ot(R,q,xe(B._payload),ie)}if(Yt(B))return he(R,q,B,ie);if(de(B))return me(R,q,B,ie);Zi(R,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,q!==null&&q.tag===6?(i(R,q.sibling),q=c(q,B),q.return=R,R=q):(i(R,q),q=Il(B,R.mode,ie),q.return=R,R=q),y(R)):i(R,q)}return ot}var t0=c1(!0),d1=c1(!1),Ji=Jn(null),ea=null,n0=null,Ko=null;function Zo(){Ko=n0=ea=null}function Jo(e){var t=Ji.current;Qe(Ji),e._currentValue=t}function el(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function r0(e,t){ea=e,Ko=n0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Dt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Ko!==e)if(e={context:e,memoizedValue:t,next:null},n0===null){if(ea===null)throw Error(r(308));n0=e,ea.dependencies={lanes:0,firstContext:e}}else n0=n0.next=e;return t}var Mr=null;function tl(e){Mr===null?Mr=[e]:Mr.push(e)}function f1(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,tl(t)):(i.next=c.next,c.next=i),t.interleaved=i,qn(e,l)}function qn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var nr=!1;function nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rr(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,qn(e,i)}return c=l.interleaved,c===null?(t.next=t,tl(l)):(t.next=c.next,c.next=t),l.interleaved=t,qn(e,i)}function ta(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,vo(e,i)}}function m1(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?c=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?c=h=t:h=h.next=t}else c=h=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function na(e,t,i,l){var c=e.updateQueue;nr=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,k=c.shared.pending;if(k!==null){c.shared.pending=null;var C=k,O=C.next;C.next=null,y===null?h=O:y.next=O,y=C;var X=e.alternate;X!==null&&(X=X.updateQueue,k=X.lastBaseUpdate,k!==y&&(k===null?X.firstBaseUpdate=O:k.next=O,X.lastBaseUpdate=C))}if(h!==null){var J=c.baseState;y=0,X=O=C=null,k=h;do{var G=k.lane,ue=k.eventTime;if((l&G)===G){X!==null&&(X=X.next={eventTime:ue,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var he=e,me=k;switch(G=t,ue=i,me.tag){case 1:if(he=me.payload,typeof he=="function"){J=he.call(ue,J,G);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=me.payload,G=typeof he=="function"?he.call(ue,J,G):he,G==null)break e;J=ae({},J,G);break e;case 2:nr=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,G=c.effects,G===null?c.effects=[k]:G.push(k))}else ue={eventTime:ue,lane:G,tag:k.tag,payload:k.payload,callback:k.callback,next:null},X===null?(O=X=ue,C=J):X=X.next=ue,y|=G;if(k=k.next,k===null){if(k=c.shared.pending,k===null)break;G=k,k=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);if(X===null&&(C=J),c.baseState=C,c.firstBaseUpdate=O,c.lastBaseUpdate=X,t=c.shared.interleaved,t!==null){c=t;do y|=c.lane,c=c.next;while(c!==t)}else h===null&&(c.shared.lanes=0);Ar|=y,e.lanes=y,e.memoizedState=J}}function p1(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var K0={},yn=Jn(K0),Z0=Jn(K0),J0=Jn(K0);function Tr(e){if(e===K0)throw Error(r(174));return e}function rl(e,t){switch(Ge(J0,t),Ge(Z0,e),Ge(yn,K0),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:b0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=b0(t,e)}Qe(yn),Ge(yn,t)}function i0(){Qe(yn),Qe(Z0),Qe(J0)}function v1(e){Tr(J0.current);var t=Tr(yn.current),i=b0(t,e.type);t!==i&&(Ge(Z0,e),Ge(yn,i))}function il(e){Z0.current===e&&(Qe(yn),Qe(Z0))}var Je=Jn(0);function ra(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function ol(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var ia=L.ReactCurrentDispatcher,ll=L.ReactCurrentBatchConfig,Cr=0,et=null,ht=null,vt=null,aa=!1,ei=!1,ti=0,Y2=0;function kt(){throw Error(r(321))}function sl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!on(e[i],t[i]))return!1;return!0}function ul(e,t,i,l,c,h){if(Cr=h,et=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?Z2:J2,e=i(l,c),ei){h=0;do{if(ei=!1,ti=0,25<=h)throw Error(r(301));h+=1,vt=ht=null,t.updateQueue=null,ia.current=ef,e=i(l,c)}while(ei)}if(ia.current=sa,t=ht!==null&&ht.next!==null,Cr=0,vt=ht=et=null,aa=!1,t)throw Error(r(300));return e}function cl(){var e=ti!==0;return ti=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=e:vt=vt.next=e,vt}function Zt(){if(ht===null){var e=et.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var t=vt===null?et.memoizedState:vt.next;if(t!==null)vt=t,ht=e;else{if(e===null)throw Error(r(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},vt===null?et.memoizedState=vt=e:vt=vt.next=e}return vt}function ni(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Zt(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=ht,c=l.baseQueue,h=i.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}l.baseQueue=c=h,i.pending=null}if(c!==null){h=c.next,l=l.baseState;var k=y=null,C=null,O=h;do{var X=O.lane;if((Cr&X)===X)C!==null&&(C=C.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),l=O.hasEagerState?O.eagerState:e(l,O.action);else{var J={lane:X,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};C===null?(k=C=J,y=l):C=C.next=J,et.lanes|=X,Ar|=X}O=O.next}while(O!==null&&O!==h);C===null?y=l:C.next=k,on(l,t.memoizedState)||(Dt=!0),t.memoizedState=l,t.baseState=y,t.baseQueue=C,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do h=c.lane,et.lanes|=h,Ar|=h,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function fl(e){var t=Zt(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,h=t.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);on(h,t.memoizedState)||(Dt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,l]}function g1(){}function y1(e,t){var i=et,l=Zt(),c=t(),h=!on(l.memoizedState,c);if(h&&(l.memoizedState=c,Dt=!0),l=l.queue,hl(b1.bind(null,i,l,e),[e]),l.getSnapshot!==t||h||vt!==null&&vt.memoizedState.tag&1){if(i.flags|=2048,ri(9,w1.bind(null,i,l,c,t),void 0,null),gt===null)throw Error(r(349));(Cr&30)!==0||x1(i,t,c)}return c}function x1(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function w1(e,t,i,l){t.value=i,t.getSnapshot=l,$1(t)&&k1(e)}function b1(e,t,i){return i(function(){$1(t)&&k1(e)})}function $1(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!on(e,i)}catch{return!0}}function k1(e){var t=qn(e,1);t!==null&&dn(t,e,1,-1)}function _1(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=K2.bind(null,et,e),[t.memoizedState,e]}function ri(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function z1(){return Zt().memoizedState}function oa(e,t,i,l){var c=xn();et.flags|=e,c.memoizedState=ri(1|t,i,void 0,l===void 0?null:l)}function la(e,t,i,l){var c=Zt();l=l===void 0?null:l;var h=void 0;if(ht!==null){var y=ht.memoizedState;if(h=y.destroy,l!==null&&sl(l,y.deps)){c.memoizedState=ri(t,i,h,l);return}}et.flags|=e,c.memoizedState=ri(1|t,i,h,l)}function S1(e,t){return oa(8390656,8,e,t)}function hl(e,t){return la(2048,8,e,t)}function M1(e,t){return la(4,2,e,t)}function T1(e,t){return la(4,4,e,t)}function C1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function A1(e,t,i){return i=i!=null?i.concat([e]):null,la(4,4,C1.bind(null,t,e),i)}function ml(){}function E1(e,t){var i=Zt();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&sl(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function q1(e,t){var i=Zt();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&sl(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function j1(e,t,i){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=i):(on(i,t)||(i=uu(),et.lanes|=i,Ar|=i,e.baseState=!0),t)}function X2(e,t){var i=He;He=i!==0&&4>i?i:4,e(!0);var l=ll.transition;ll.transition={};try{e(!1),t()}finally{He=i,ll.transition=l}}function P1(){return Zt().memoizedState}function Q2(e,t,i){var l=lr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},R1(e))D1(t,i);else if(i=f1(e,t,i,l),i!==null){var c=Ct();dn(i,e,l,c),B1(i,t,l)}}function K2(e,t,i){var l=lr(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(R1(e))D1(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var y=t.lastRenderedState,k=h(y,i);if(c.hasEagerState=!0,c.eagerState=k,on(k,y)){var C=t.interleaved;C===null?(c.next=c,tl(t)):(c.next=C.next,C.next=c),t.interleaved=c;return}}catch{}finally{}i=f1(e,t,c,l),i!==null&&(c=Ct(),dn(i,e,l,c),B1(i,t,l))}}function R1(e){var t=e.alternate;return e===et||t!==null&&t===et}function D1(e,t){ei=aa=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function B1(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,vo(e,i)}}var sa={readContext:Kt,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Z2={readContext:Kt,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:S1,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,oa(4194308,4,C1.bind(null,t,e),i)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var i=xn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=xn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Q2.bind(null,et,e),[l.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:_1,useDebugValue:ml,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=_1(!1),t=e[0];return e=X2.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=et,c=xn();if(Ke){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),gt===null)throw Error(r(349));(Cr&30)!==0||x1(l,t,i)}c.memoizedState=i;var h={value:i,getSnapshot:t};return c.queue=h,S1(b1.bind(null,l,h,e),[e]),l.flags|=2048,ri(9,w1.bind(null,l,h,i,t),void 0,null),i},useId:function(){var e=xn(),t=gt.identifierPrefix;if(Ke){var i=En,l=An;i=(l&~(1<<32-an(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=ti++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Y2++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J2={readContext:Kt,useCallback:E1,useContext:Kt,useEffect:hl,useImperativeHandle:A1,useInsertionEffect:M1,useLayoutEffect:T1,useMemo:q1,useReducer:dl,useRef:z1,useState:function(){return dl(ni)},useDebugValue:ml,useDeferredValue:function(e){var t=Zt();return j1(t,ht.memoizedState,e)},useTransition:function(){var e=dl(ni)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:g1,useSyncExternalStore:y1,useId:P1,unstable_isNewReconciler:!1},ef={readContext:Kt,useCallback:E1,useContext:Kt,useEffect:hl,useImperativeHandle:A1,useInsertionEffect:M1,useLayoutEffect:T1,useMemo:q1,useReducer:fl,useRef:z1,useState:function(){return fl(ni)},useDebugValue:ml,useDeferredValue:function(e){var t=Zt();return ht===null?t.memoizedState=e:j1(t,ht.memoizedState,e)},useTransition:function(){var e=fl(ni)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:g1,useSyncExternalStore:y1,useId:P1,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function pl(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:ae({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var ua={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Ct(),c=lr(e),h=jn(l,c);h.payload=t,i!=null&&(h.callback=i),t=rr(e,h,c),t!==null&&(dn(t,e,c,l),ta(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Ct(),c=lr(e),h=jn(l,c);h.tag=1,h.payload=t,i!=null&&(h.callback=i),t=rr(e,h,c),t!==null&&(dn(t,e,c,l),ta(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ct(),l=lr(e),c=jn(i,l);c.tag=2,t!=null&&(c.callback=t),t=rr(e,c,l),t!==null&&(dn(t,e,l,i),ta(t,e,l))}};function N1(e,t,i,l,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,y):t.prototype&&t.prototype.isPureReactComponent?!H0(i,l)||!H0(c,h):!0}function L1(e,t,i){var l=!1,c=er,h=t.contextType;return typeof h=="object"&&h!==null?h=Kt(h):(c=Rt(t)?_r:$t.current,l=t.contextTypes,h=(l=l!=null)?Kr(e,c):er),t=new t(i,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),t}function O1(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function vl(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},nl(e);var h=t.contextType;typeof h=="object"&&h!==null?c.context=Kt(h):(h=Rt(t)?_r:$t.current,c.context=Kr(e,h)),c.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(pl(e,t,h,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&ua.enqueueReplaceState(c,c.state,null),na(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function a0(e,t){try{var i="",l=t;do i+=ke(l),l=l.return;while(l);var c=i}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:c,digest:null}}function gl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function yl(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function I1(e,t,i){i=jn(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){va||(va=!0,jl=l),yl(e,t)},i}function F1(e,t,i){i=jn(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){yl(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){yl(e,t),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function H1(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new tf;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=vf.bind(null,e,t,i),t.then(e,e))}function W1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function U1(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=jn(-1,1),t.tag=2,rr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var nf=L.ReactCurrentOwner,Dt=!1;function Tt(e,t,i,l){t.child=e===null?d1(t,null,i,l):t0(t,e.child,i,l)}function V1(e,t,i,l,c){i=i.render;var h=t.ref;return r0(t,c),l=ul(e,t,i,l,h,c),i=cl(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Pn(e,t,c)):(Ke&&i&&Vo(t),t.flags|=1,Tt(e,t,l,c),t.child)}function G1(e,t,i,l,c){if(e===null){var h=i.type;return typeof h=="function"&&!Ol(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=h,Y1(e,t,h,l,c)):(e=$a(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&c)===0){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:H0,i(y,l)&&e.ref===t.ref)return Pn(e,t,c)}return t.flags|=1,e=ur(h,l),e.ref=t.ref,e.return=t,t.child=e}function Y1(e,t,i,l,c){if(e!==null){var h=e.memoizedProps;if(H0(h,l)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=l=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Dt=!0);else return t.lanes=e.lanes,Pn(e,t,c)}return xl(e,t,i,l,c)}function X1(e,t,i){var l=t.pendingProps,c=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(l0,Ut),Ut|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ge(l0,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,Ge(l0,Ut),Ut|=l}else h!==null?(l=h.baseLanes|i,t.memoizedState=null):l=i,Ge(l0,Ut),Ut|=l;return Tt(e,t,c,i),t.child}function Q1(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function xl(e,t,i,l,c){var h=Rt(i)?_r:$t.current;return h=Kr(t,h),r0(t,c),i=ul(e,t,i,l,h,c),l=cl(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Pn(e,t,c)):(Ke&&l&&Vo(t),t.flags|=1,Tt(e,t,i,c),t.child)}function K1(e,t,i,l,c){if(Rt(i)){var h=!0;Gi(t)}else h=!1;if(r0(t,c),t.stateNode===null)da(e,t),L1(t,i,l),vl(t,i,l,c),l=!0;else if(e===null){var y=t.stateNode,k=t.memoizedProps;y.props=k;var C=y.context,O=i.contextType;typeof O=="object"&&O!==null?O=Kt(O):(O=Rt(i)?_r:$t.current,O=Kr(t,O));var X=i.getDerivedStateFromProps,J=typeof X=="function"||typeof y.getSnapshotBeforeUpdate=="function";J||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==l||C!==O)&&O1(t,y,l,O),nr=!1;var G=t.memoizedState;y.state=G,na(t,l,y,c),C=t.memoizedState,k!==l||G!==C||Pt.current||nr?(typeof X=="function"&&(pl(t,i,X,l),C=t.memoizedState),(k=nr||N1(t,i,k,l,G,C,O))?(J||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),y.props=l,y.state=C,y.context=O,l=k):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{y=t.stateNode,h1(e,t),k=t.memoizedProps,O=t.type===t.elementType?k:sn(t.type,k),y.props=O,J=t.pendingProps,G=y.context,C=i.contextType,typeof C=="object"&&C!==null?C=Kt(C):(C=Rt(i)?_r:$t.current,C=Kr(t,C));var ue=i.getDerivedStateFromProps;(X=typeof ue=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==J||G!==C)&&O1(t,y,l,C),nr=!1,G=t.memoizedState,y.state=G,na(t,l,y,c);var he=t.memoizedState;k!==J||G!==he||Pt.current||nr?(typeof ue=="function"&&(pl(t,i,ue,l),he=t.memoizedState),(O=nr||N1(t,i,O,l,G,he,C)||!1)?(X||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,he,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,he,C)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=he),y.props=l,y.state=he,y.context=C,l=O):(typeof y.componentDidUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),l=!1)}return wl(e,t,i,l,h,c)}function wl(e,t,i,l,c,h){Q1(e,t);var y=(t.flags&128)!==0;if(!l&&!y)return c&&n1(t,i,!1),Pn(e,t,h);l=t.stateNode,nf.current=t;var k=y&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&y?(t.child=t0(t,e.child,null,h),t.child=t0(t,null,k,h)):Tt(e,t,k,h),t.memoizedState=l.state,c&&n1(t,i,!0),t.child}function Z1(e){var t=e.stateNode;t.pendingContext?e1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e1(e,t.context,!1),rl(e,t.containerInfo)}function J1(e,t,i,l,c){return e0(),Qo(c),t.flags|=256,Tt(e,t,i,l),t.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,i){var l=t.pendingProps,c=Je.current,h=!1,y=(t.flags&128)!==0,k;if((k=y)||(k=e!==null&&e.memoizedState===null?!1:(c&2)!==0),k?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ge(Je,c&1),e===null)return Xo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=l.children,e=l.fallback,h?(l=t.mode,h=t.child,y={mode:"hidden",children:y},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=ka(y,l,0,null),e=Pr(e,l,i,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=$l(i),t.memoizedState=bl,e):kl(t,y));if(c=e.memoizedState,c!==null&&(k=c.dehydrated,k!==null))return rf(e,t,y,l,k,c,i);if(h){h=l.fallback,y=t.mode,c=e.child,k=c.sibling;var C={mode:"hidden",children:l.children};return(y&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=C,t.deletions=null):(l=ur(c,C),l.subtreeFlags=c.subtreeFlags&14680064),k!==null?h=ur(k,h):(h=Pr(h,y,i,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,l=h,h=t.child,y=e.child.memoizedState,y=y===null?$l(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~i,t.memoizedState=bl,l}return h=e.child,e=h.sibling,l=ur(h,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function kl(e,t){return t=ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,i,l){return l!==null&&Qo(l),t0(t,e.child,null,i),e=kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,i,l,c,h,y){if(i)return t.flags&256?(t.flags&=-257,l=gl(Error(r(422))),ca(e,t,y,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=l.fallback,c=t.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Pr(h,c,y,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,(t.mode&1)!==0&&t0(t,e.child,null,y),t.child.memoizedState=$l(y),t.memoizedState=bl,h);if((t.mode&1)===0)return ca(e,t,y,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var k=l.dgst;return l=k,h=Error(r(419)),l=gl(h,l,void 0),ca(e,t,y,l)}if(k=(y&e.childLanes)!==0,Dt||k){if(l=gt,l!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|y))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,qn(e,c),dn(l,e,c,-1))}return Ll(),l=gl(Error(r(421))),ca(e,t,y,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),c._reactRetry=t,null):(e=h.treeContext,Wt=Zn(c.nextSibling),Ht=t,Ke=!0,ln=null,e!==null&&(Xt[Qt++]=An,Xt[Qt++]=En,Xt[Qt++]=zr,An=e.id,En=e.overflow,zr=t),t=kl(t,l.children),t.flags|=4096,t)}function tc(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),el(e.return,t,i)}function _l(e,t,i,l,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=c)}function nc(e,t,i){var l=t.pendingProps,c=l.revealOrder,h=l.tail;if(Tt(e,t,l.children,i),l=Je.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,i,t);else if(e.tag===19)tc(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ge(Je,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&ra(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),_l(t,!1,c,i,h);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ra(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}_l(t,!0,i,null,h);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function da(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=ur(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ur(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function af(e,t,i){switch(t.tag){case 3:Z1(t),e0();break;case 5:v1(t);break;case 1:Rt(t.type)&&Gi(t);break;case 4:rl(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Ge(Ji,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ge(Je,Je.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?ec(e,t,i):(Ge(Je,Je.current&1),e=Pn(e,t,i),e!==null?e.sibling:null);Ge(Je,Je.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return nc(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ge(Je,Je.current),l)break;return null;case 22:case 23:return t.lanes=0,X1(e,t,i)}return Pn(e,t,i)}var rc,zl,ic,ac;rc=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},zl=function(){},ic=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Tr(yn.current);var h=null;switch(i){case"input":c=Hn(e,c),l=Hn(e,l),h=[];break;case"select":c=ae({},c,{value:void 0}),l=ae({},l,{value:void 0}),h=[];break;case"textarea":c=w0(e,c),l=w0(e,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Wi)}_0(i,l);var y;i=null;for(O in c)if(!l.hasOwnProperty(O)&&c.hasOwnProperty(O)&&c[O]!=null)if(O==="style"){var k=c[O];for(y in k)k.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(s.hasOwnProperty(O)?h||(h=[]):(h=h||[]).push(O,null));for(O in l){var C=l[O];if(k=c!=null?c[O]:void 0,l.hasOwnProperty(O)&&C!==k&&(C!=null||k!=null))if(O==="style")if(k){for(y in k)!k.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in C)C.hasOwnProperty(y)&&k[y]!==C[y]&&(i||(i={}),i[y]=C[y])}else i||(h||(h=[]),h.push(O,i)),i=C;else O==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,k=k?k.__html:void 0,C!=null&&k!==C&&(h=h||[]).push(O,C)):O==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(O,""+C):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(s.hasOwnProperty(O)?(C!=null&&O==="onScroll"&&Xe("scroll",e),h||k===C||(h=[])):(h=h||[]).push(O,C))}i&&(h=h||[]).push("style",i);var O=h;(t.updateQueue=O)&&(t.flags|=4)}},ac=function(e,t,i,l){i!==l&&(t.flags|=4)};function ii(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _t(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function of(e,t,i){var l=t.pendingProps;switch(Go(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(t),null;case 1:return Rt(t.type)&&Vi(),_t(t),null;case 3:return l=t.stateNode,i0(),Qe(Pt),Qe($t),ol(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ln!==null&&(Dl(ln),ln=null))),zl(e,t),_t(t),null;case 5:il(t);var c=Tr(J0.current);if(i=t.type,e!==null&&t.stateNode!=null)ic(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(r(166));return _t(t),null}if(e=Tr(yn.current),Ki(t)){l=t.stateNode,i=t.type;var h=t.memoizedProps;switch(l[gn]=t,l[Y0]=h,e=(t.mode&1)!==0,i){case"dialog":Xe("cancel",l),Xe("close",l);break;case"iframe":case"object":case"embed":Xe("load",l);break;case"video":case"audio":for(c=0;c<U0.length;c++)Xe(U0[c],l);break;case"source":Xe("error",l);break;case"img":case"image":case"link":Xe("error",l),Xe("load",l);break;case"details":Xe("toggle",l);break;case"input":Lr(l,h),Xe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Xe("invalid",l);break;case"textarea":Wn(l,h),Xe("invalid",l)}_0(i,h),c=null;for(var y in h)if(h.hasOwnProperty(y)){var k=h[y];y==="children"?typeof k=="string"?l.textContent!==k&&(h.suppressHydrationWarning!==!0&&Hi(l.textContent,k,e),c=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(h.suppressHydrationWarning!==!0&&Hi(l.textContent,k,e),c=["children",""+k]):s.hasOwnProperty(y)&&k!=null&&y==="onScroll"&&Xe("scroll",l)}switch(i){case"input":bt(l),mn(l,h,!0);break;case"textarea":bt(l),wr(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Wi)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Or(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(i,{is:l.is}):(e=y.createElement(i),i==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,i),e[gn]=t,e[Y0]=l,rc(e,t,!1,!1),t.stateNode=e;e:{switch(y=z0(i,l),i){case"dialog":Xe("cancel",e),Xe("close",e),c=l;break;case"iframe":case"object":case"embed":Xe("load",e),c=l;break;case"video":case"audio":for(c=0;c<U0.length;c++)Xe(U0[c],e);c=l;break;case"source":Xe("error",e),c=l;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),c=l;break;case"details":Xe("toggle",e),c=l;break;case"input":Lr(e,l),c=Hn(e,l),Xe("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=ae({},l,{value:void 0}),Xe("invalid",e);break;case"textarea":Wn(e,l),c=w0(e,l),Xe("invalid",e);break;default:c=l}_0(i,c),k=c;for(h in k)if(k.hasOwnProperty(h)){var C=k[h];h==="style"?$i(e,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&$0(e,C)):h==="children"?typeof C=="string"?(i!=="textarea"||C!=="")&&Un(e,C):typeof C=="number"&&Un(e,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(s.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Xe("scroll",e):C!=null&&N(e,h,C,y))}switch(i){case"input":bt(e),mn(e,l,!1);break;case"textarea":bt(e),wr(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Re(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?Mt(e,!!l.multiple,h,!1):l.defaultValue!=null&&Mt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Wi)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _t(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(i=Tr(J0.current),Tr(yn.current),Ki(t)){if(l=t.stateNode,i=t.memoizedProps,l[gn]=t,(h=l.nodeValue!==i)&&(e=Ht,e!==null))switch(e.tag){case 3:Hi(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(l.nodeValue,i,(e.mode&1)!==0)}h&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[gn]=t,t.stateNode=l}return _t(t),null;case 13:if(Qe(Je),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&Wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)s1(),e0(),t.flags|=98560,h=!1;else if(h=Ki(t),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[gn]=t}else e0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_t(t),h=!1}else ln!==null&&(Dl(ln),ln=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Je.current&1)!==0?mt===0&&(mt=3):Ll())),t.updateQueue!==null&&(t.flags|=4),_t(t),null);case 4:return i0(),zl(e,t),e===null&&V0(t.stateNode.containerInfo),_t(t),null;case 10:return Jo(t.type._context),_t(t),null;case 17:return Rt(t.type)&&Vi(),_t(t),null;case 19:if(Qe(Je),h=t.memoizedState,h===null)return _t(t),null;if(l=(t.flags&128)!==0,y=h.rendering,y===null)if(l)ii(h,!1);else{if(mt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=ra(e),y!==null){for(t.flags|=128,ii(h,!1),l=y.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)h=i,e=l,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ge(Je,Je.current&1|2),t.child}e=e.sibling}h.tail!==null&&at()>s0&&(t.flags|=128,l=!0,ii(h,!1),t.lanes=4194304)}else{if(!l)if(e=ra(y),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),ii(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Ke)return _t(t),null}else 2*at()-h.renderingStartTime>s0&&i!==1073741824&&(t.flags|=128,l=!0,ii(h,!1),t.lanes=4194304);h.isBackwards?(y.sibling=t.child,t.child=y):(i=h.last,i!==null?i.sibling=y:t.child=y,h.last=y)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=at(),t.sibling=null,i=Je.current,Ge(Je,l?i&1|2:i&1),t):(_t(t),null);case 22:case 23:return Nl(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Ut&1073741824)!==0&&(_t(t),t.subtreeFlags&6&&(t.flags|=8192)):_t(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function lf(e,t){switch(Go(t),t.tag){case 1:return Rt(t.type)&&Vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return i0(),Qe(Pt),Qe($t),ol(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return il(t),null;case 13:if(Qe(Je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));e0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(Je),null;case 4:return i0(),null;case 10:return Jo(t.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var fa=!1,zt=!1,sf=typeof WeakSet=="function"?WeakSet:Set,fe=null;function o0(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){rt(e,t,l)}else i.current=null}function Sl(e,t,i){try{i()}catch(l){rt(e,t,l)}}var oc=!1;function uf(e,t){if(No=qi,e=Nu(),Ao(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,k=-1,C=-1,O=0,X=0,J=e,G=null;t:for(;;){for(var ue;J!==i||c!==0&&J.nodeType!==3||(k=y+c),J!==h||l!==0&&J.nodeType!==3||(C=y+l),J.nodeType===3&&(y+=J.nodeValue.length),(ue=J.firstChild)!==null;)G=J,J=ue;for(;;){if(J===e)break t;if(G===i&&++O===c&&(k=y),G===h&&++X===l&&(C=y),(ue=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=ue}i=k===-1||C===-1?null:{start:k,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(Lo={focusedElem:e,selectionRange:i},qi=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var he=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var me=he.memoizedProps,ot=he.memoizedState,R=t.stateNode,q=R.getSnapshotBeforeUpdate(t.elementType===t.type?me:sn(t.type,me),ot);R.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ie){rt(t,t.return,ie)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return he=oc,oc=!1,he}function ai(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&Sl(t,i,h)}c=c.next}while(c!==l)}}function ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Ml(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[Y0],delete t[Ho],delete t[W2],delete t[U2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tl(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Wi));else if(l!==4&&(e=e.child,e!==null))for(Tl(e,t,i),e=e.sibling;e!==null;)Tl(e,t,i),e=e.sibling}function Cl(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Cl(e,t,i),e=e.sibling;e!==null;)Cl(e,t,i),e=e.sibling}var xt=null,un=!1;function ir(e,t,i){for(i=i.child;i!==null;)cc(e,t,i),i=i.sibling}function cc(e,t,i){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Si,i)}catch{}switch(i.tag){case 5:zt||o0(i,t);case 6:var l=xt,c=un;xt=null,ir(e,t,i),xt=l,un=c,xt!==null&&(un?(e=xt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):xt.removeChild(i.stateNode));break;case 18:xt!==null&&(un?(e=xt,i=i.stateNode,e.nodeType===8?Fo(e.parentNode,i):e.nodeType===1&&Fo(e,i),B0(e)):Fo(xt,i.stateNode));break;case 4:l=xt,c=un,xt=i.stateNode.containerInfo,un=!0,ir(e,t,i),xt=l,un=c;break;case 0:case 11:case 14:case 15:if(!zt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&Sl(i,t,y),c=c.next}while(c!==l)}ir(e,t,i);break;case 1:if(!zt&&(o0(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(k){rt(i,t,k)}ir(e,t,i);break;case 21:ir(e,t,i);break;case 22:i.mode&1?(zt=(l=zt)||i.memoizedState!==null,ir(e,t,i),zt=l):ir(e,t,i);break;default:ir(e,t,i)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new sf),t.forEach(function(l){var c=yf.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function cn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var h=e,y=t,k=y;e:for(;k!==null;){switch(k.tag){case 5:xt=k.stateNode,un=!1;break e;case 3:xt=k.stateNode.containerInfo,un=!0;break e;case 4:xt=k.stateNode.containerInfo,un=!0;break e}k=k.return}if(xt===null)throw Error(r(160));cc(h,y,c),xt=null,un=!1;var C=c.alternate;C!==null&&(C.return=null),c.return=null}catch(O){rt(c,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),wn(e),l&4){try{ai(3,e,e.return),ha(3,e)}catch(me){rt(e,e.return,me)}try{ai(5,e,e.return)}catch(me){rt(e,e.return,me)}}break;case 1:cn(t,e),wn(e),l&512&&i!==null&&o0(i,i.return);break;case 5:if(cn(t,e),wn(e),l&512&&i!==null&&o0(i,i.return),e.flags&32){var c=e.stateNode;try{Un(c,"")}catch(me){rt(e,e.return,me)}}if(l&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,y=i!==null?i.memoizedProps:h,k=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{k==="input"&&h.type==="radio"&&h.name!=null&&Sn(c,h),z0(k,y);var O=z0(k,h);for(y=0;y<C.length;y+=2){var X=C[y],J=C[y+1];X==="style"?$i(c,J):X==="dangerouslySetInnerHTML"?$0(c,J):X==="children"?Un(c,J):N(c,X,J,O)}switch(k){case"input":hn(c,h);break;case"textarea":xr(c,h);break;case"select":var G=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var ue=h.value;ue!=null?Mt(c,!!h.multiple,ue,!1):G!==!!h.multiple&&(h.defaultValue!=null?Mt(c,!!h.multiple,h.defaultValue,!0):Mt(c,!!h.multiple,h.multiple?[]:"",!1))}c[Y0]=h}catch(me){rt(e,e.return,me)}}break;case 6:if(cn(t,e),wn(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(me){rt(e,e.return,me)}}break;case 3:if(cn(t,e),wn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{B0(t.containerInfo)}catch(me){rt(e,e.return,me)}break;case 4:cn(t,e),wn(e);break;case 13:cn(t,e),wn(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ql=at())),l&4&&dc(e);break;case 22:if(X=i!==null&&i.memoizedState!==null,e.mode&1?(zt=(O=zt)||X,cn(t,e),zt=O):cn(t,e),wn(e),l&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!X&&(e.mode&1)!==0)for(fe=e,X=e.child;X!==null;){for(J=fe=X;fe!==null;){switch(G=fe,ue=G.child,G.tag){case 0:case 11:case 14:case 15:ai(4,G,G.return);break;case 1:o0(G,G.return);var he=G.stateNode;if(typeof he.componentWillUnmount=="function"){l=G,i=G.return;try{t=l,he.props=t.memoizedProps,he.state=t.memoizedState,he.componentWillUnmount()}catch(me){rt(l,i,me)}}break;case 5:o0(G,G.return);break;case 22:if(G.memoizedState!==null){pc(J);continue}}ue!==null?(ue.return=G,fe=ue):pc(J)}X=X.sibling}e:for(X=null,J=e;;){if(J.tag===5){if(X===null){X=J;try{c=J.stateNode,O?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(k=J.stateNode,C=J.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,k.style.display=k0("display",y))}catch(me){rt(e,e.return,me)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=O?"":J.memoizedProps}catch(me){rt(e,e.return,me)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===e)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===e)break e;for(;J.sibling===null;){if(J.return===null||J.return===e)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:cn(t,e),wn(e),l&4&&dc(e);break;case 21:break;default:cn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(sc(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Un(c,""),l.flags&=-33);var h=uc(e);Cl(e,h,c);break;case 3:case 4:var y=l.stateNode.containerInfo,k=uc(e);Tl(e,k,y);break;default:throw Error(r(161))}}catch(C){rt(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,i){fe=e,hc(e)}function hc(e,t,i){for(var l=(e.mode&1)!==0;fe!==null;){var c=fe,h=c.child;if(c.tag===22&&l){var y=c.memoizedState!==null||fa;if(!y){var k=c.alternate,C=k!==null&&k.memoizedState!==null||zt;k=fa;var O=zt;if(fa=y,(zt=C)&&!O)for(fe=c;fe!==null;)y=fe,C=y.child,y.tag===22&&y.memoizedState!==null?vc(c):C!==null?(C.return=y,fe=C):vc(c);for(;h!==null;)fe=h,hc(h),h=h.sibling;fe=c,fa=k,zt=O}mc(e)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,fe=h):mc(e)}}function mc(e){for(;fe!==null;){var t=fe;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:zt||ha(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!zt)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:sn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&p1(t,h,l);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}p1(t,y,i)}break;case 5:var k=t.stateNode;if(i===null&&t.flags&4){i=k;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&i.focus();break;case"img":C.src&&(i.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var X=O.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&B0(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}zt||t.flags&512&&Ml(t)}catch(G){rt(t,t.return,G)}}if(t===e){fe=null;break}if(i=t.sibling,i!==null){i.return=t.return,fe=i;break}fe=t.return}}function pc(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var i=t.sibling;if(i!==null){i.return=t.return,fe=i;break}fe=t.return}}function vc(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{ha(4,t)}catch(C){rt(t,i,C)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(C){rt(t,c,C)}}var h=t.return;try{Ml(t)}catch(C){rt(t,h,C)}break;case 5:var y=t.return;try{Ml(t)}catch(C){rt(t,y,C)}}}catch(C){rt(t,t.return,C)}if(t===e){fe=null;break}var k=t.sibling;if(k!==null){k.return=t.return,fe=k;break}fe=t.return}}var df=Math.ceil,ma=L.ReactCurrentDispatcher,Al=L.ReactCurrentOwner,Jt=L.ReactCurrentBatchConfig,Be=0,gt=null,ut=null,wt=0,Ut=0,l0=Jn(0),mt=0,oi=null,Ar=0,pa=0,El=0,li=null,Bt=null,ql=0,s0=1/0,Rn=null,va=!1,jl=null,ar=null,ga=!1,or=null,ya=0,si=0,Pl=null,xa=-1,wa=0;function Ct(){return(Be&6)!==0?at():xa!==-1?xa:xa=at()}function lr(e){return(e.mode&1)===0?1:(Be&2)!==0&&wt!==0?wt&-wt:G2.transition!==null?(wa===0&&(wa=uu()),wa):(e=He,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e)}function dn(e,t,i,l){if(50<si)throw si=0,Pl=null,Error(r(185));q0(e,i,l),((Be&2)===0||e!==gt)&&(e===gt&&((Be&2)===0&&(pa|=i),mt===4&&sr(e,wt)),Nt(e,l),i===1&&Be===0&&(t.mode&1)===0&&(s0=at()+500,Yi&&tr()))}function Nt(e,t){var i=e.callbackNode;G4(e,t);var l=Ci(e,e===gt?wt:0);if(l===0)i!==null&&ou(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&ou(i),t===1)e.tag===0?V2(yc.bind(null,e)):r1(yc.bind(null,e)),F2(function(){(Be&6)===0&&tr()}),i=null;else{switch(cu(l)){case 1:i=ho;break;case 4:i=lu;break;case 16:i=zi;break;case 536870912:i=su;break;default:i=zi}i=Sc(i,gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function gc(e,t){if(xa=-1,wa=0,(Be&6)!==0)throw Error(r(327));var i=e.callbackNode;if(u0()&&e.callbackNode!==i)return null;var l=Ci(e,e===gt?wt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ba(e,l);else{t=l;var c=Be;Be|=2;var h=wc();(gt!==e||wt!==t)&&(Rn=null,s0=at()+500,qr(e,t));do try{mf();break}catch(k){xc(e,k)}while(!0);Zo(),ma.current=h,Be=c,ut!==null?t=0:(gt=null,wt=0,t=mt)}if(t!==0){if(t===2&&(c=mo(e),c!==0&&(l=c,t=Rl(e,c))),t===1)throw i=oi,qr(e,0),sr(e,l),Nt(e,at()),i;if(t===6)sr(e,l);else{if(c=e.current.alternate,(l&30)===0&&!ff(c)&&(t=ba(e,l),t===2&&(h=mo(e),h!==0&&(l=h,t=Rl(e,h))),t===1))throw i=oi,qr(e,0),sr(e,l),Nt(e,at()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(r(345));case 2:jr(e,Bt,Rn);break;case 3:if(sr(e,l),(l&130023424)===l&&(t=ql+500-at(),10<t)){if(Ci(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){Ct(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Io(jr.bind(null,e,Bt,Rn),t);break}jr(e,Bt,Rn);break;case 4:if(sr(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var y=31-an(l);h=1<<y,y=t[y],y>c&&(c=y),l&=~h}if(l=c,l=at()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*df(l/1960))-l,10<l){e.timeoutHandle=Io(jr.bind(null,e,Bt,Rn),l);break}jr(e,Bt,Rn);break;case 5:jr(e,Bt,Rn);break;default:throw Error(r(329))}}}return Nt(e,at()),e.callbackNode===i?gc.bind(null,e):null}function Rl(e,t){var i=li;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=ba(e,t),e!==2&&(t=Bt,Bt=i,t!==null&&Dl(t)),e}function Dl(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function ff(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],h=c.getSnapshot;c=c.value;try{if(!on(h(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~El,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-an(t),l=1<<i;e[i]=-1,t&=~l}}function yc(e){if((Be&6)!==0)throw Error(r(327));u0();var t=Ci(e,0);if((t&1)===0)return Nt(e,at()),null;var i=ba(e,t);if(e.tag!==0&&i===2){var l=mo(e);l!==0&&(t=l,i=Rl(e,l))}if(i===1)throw i=oi,qr(e,0),sr(e,t),Nt(e,at()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,Bt,Rn),Nt(e,at()),null}function Bl(e,t){var i=Be;Be|=1;try{return e(t)}finally{Be=i,Be===0&&(s0=at()+500,Yi&&tr())}}function Er(e){or!==null&&or.tag===0&&(Be&6)===0&&u0();var t=Be;Be|=1;var i=Jt.transition,l=He;try{if(Jt.transition=null,He=1,e)return e()}finally{He=l,Jt.transition=i,Be=t,(Be&6)===0&&tr()}}function Nl(){Ut=l0.current,Qe(l0)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,I2(i)),ut!==null)for(i=ut.return;i!==null;){var l=i;switch(Go(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Vi();break;case 3:i0(),Qe(Pt),Qe($t),ol();break;case 5:il(l);break;case 4:i0();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:Jo(l.type._context);break;case 22:case 23:Nl()}i=i.return}if(gt=e,ut=e=ur(e.current,null),wt=Ut=t,mt=0,oi=null,El=pa=Ar=0,Bt=li=null,Mr!==null){for(t=0;t<Mr.length;t++)if(i=Mr[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,h=i.pending;if(h!==null){var y=h.next;h.next=c,l.next=y}i.pending=l}Mr=null}return e}function xc(e,t){do{var i=ut;try{if(Zo(),ia.current=sa,aa){for(var l=et.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}aa=!1}if(Cr=0,vt=ht=et=null,ei=!1,ti=0,Al.current=null,i===null||i.return===null){mt=1,oi=t,ut=null;break}e:{var h=e,y=i.return,k=i,C=t;if(t=wt,k.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var O=C,X=k,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var G=X.alternate;G?(X.updateQueue=G.updateQueue,X.memoizedState=G.memoizedState,X.lanes=G.lanes):(X.updateQueue=null,X.memoizedState=null)}var ue=W1(y);if(ue!==null){ue.flags&=-257,U1(ue,y,k,h,t),ue.mode&1&&H1(h,O,t),t=ue,C=O;var he=t.updateQueue;if(he===null){var me=new Set;me.add(C),t.updateQueue=me}else he.add(C);break e}else{if((t&1)===0){H1(h,O,t),Ll();break e}C=Error(r(426))}}else if(Ke&&k.mode&1){var ot=W1(y);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),U1(ot,y,k,h,t),Qo(a0(C,k));break e}}h=C=a0(C,k),mt!==4&&(mt=2),li===null?li=[h]:li.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var R=I1(h,C,t);m1(h,R);break e;case 1:k=C;var q=h.type,B=h.stateNode;if((h.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(ar===null||!ar.has(B)))){h.flags|=65536,t&=-t,h.lanes|=t;var ie=F1(h,k,t);m1(h,ie);break e}}h=h.return}while(h!==null)}$c(i)}catch(ve){t=ve,ut===i&&i!==null&&(ut=i=i.return);continue}break}while(!0)}function wc(){var e=ma.current;return ma.current=sa,e===null?sa:e}function Ll(){(mt===0||mt===3||mt===2)&&(mt=4),gt===null||(Ar&268435455)===0&&(pa&268435455)===0||sr(gt,wt)}function ba(e,t){var i=Be;Be|=2;var l=wc();(gt!==e||wt!==t)&&(Rn=null,qr(e,t));do try{hf();break}catch(c){xc(e,c)}while(!0);if(Zo(),Be=i,ma.current=l,ut!==null)throw Error(r(261));return gt=null,wt=0,mt}function hf(){for(;ut!==null;)bc(ut)}function mf(){for(;ut!==null&&!N4();)bc(ut)}function bc(e){var t=zc(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?$c(e):ut=t,Al.current=null}function $c(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=of(i,t,Ut),i!==null){ut=i;return}}else{if(i=lf(i,t),i!==null){i.flags&=32767,ut=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{mt=6,ut=null;return}}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);mt===0&&(mt=5)}function jr(e,t,i){var l=He,c=Jt.transition;try{Jt.transition=null,He=1,pf(e,t,i,l)}finally{Jt.transition=c,He=l}return null}function pf(e,t,i,l){do u0();while(or!==null);if((Be&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(Y4(e,h),e===gt&&(ut=gt=null,wt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||ga||(ga=!0,Sc(zi,function(){return u0(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=Jt.transition,Jt.transition=null;var y=He;He=1;var k=Be;Be|=4,Al.current=null,uf(e,i),fc(i,e),P2(Lo),qi=!!No,Lo=No=null,e.current=i,cf(i),L4(),Be=k,He=y,Jt.transition=h}else e.current=i;if(ga&&(ga=!1,or=e,ya=c),h=e.pendingLanes,h===0&&(ar=null),F4(i.stateNode),Nt(e,at()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(va)throw va=!1,e=jl,jl=null,e;return(ya&1)!==0&&e.tag!==0&&u0(),h=e.pendingLanes,(h&1)!==0?e===Pl?si++:(si=0,Pl=e):si=0,tr(),null}function u0(){if(or!==null){var e=cu(ya),t=Jt.transition,i=He;try{if(Jt.transition=null,He=16>e?16:e,or===null)var l=!1;else{if(e=or,or=null,ya=0,(Be&6)!==0)throw Error(r(331));var c=Be;for(Be|=4,fe=e.current;fe!==null;){var h=fe,y=h.child;if((fe.flags&16)!==0){var k=h.deletions;if(k!==null){for(var C=0;C<k.length;C++){var O=k[C];for(fe=O;fe!==null;){var X=fe;switch(X.tag){case 0:case 11:case 15:ai(8,X,h)}var J=X.child;if(J!==null)J.return=X,fe=J;else for(;fe!==null;){X=fe;var G=X.sibling,ue=X.return;if(lc(X),X===O){fe=null;break}if(G!==null){G.return=ue,fe=G;break}fe=ue}}}var he=h.alternate;if(he!==null){var me=he.child;if(me!==null){he.child=null;do{var ot=me.sibling;me.sibling=null,me=ot}while(me!==null)}}fe=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,fe=y;else e:for(;fe!==null;){if(h=fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ai(9,h,h.return)}var R=h.sibling;if(R!==null){R.return=h.return,fe=R;break e}fe=h.return}}var q=e.current;for(fe=q;fe!==null;){y=fe;var B=y.child;if((y.subtreeFlags&2064)!==0&&B!==null)B.return=y,fe=B;else e:for(y=q;fe!==null;){if(k=fe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:ha(9,k)}}catch(ve){rt(k,k.return,ve)}if(k===y){fe=null;break e}var ie=k.sibling;if(ie!==null){ie.return=k.return,fe=ie;break e}fe=k.return}}if(Be=c,tr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Si,e)}catch{}l=!0}return l}finally{He=i,Jt.transition=t}}return!1}function kc(e,t,i){t=a0(i,t),t=I1(e,t,1),e=rr(e,t,1),t=Ct(),e!==null&&(q0(e,1,t),Nt(e,t))}function rt(e,t,i){if(e.tag===3)kc(e,e,i);else for(;t!==null;){if(t.tag===3){kc(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){e=a0(i,e),e=F1(t,e,1),t=rr(t,e,1),e=Ct(),t!==null&&(q0(t,1,e),Nt(t,e));break}}t=t.return}}function vf(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&i,gt===e&&(wt&i)===i&&(mt===4||mt===3&&(wt&130023424)===wt&&500>at()-ql?qr(e,0):El|=i),Nt(e,t)}function _c(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ti,Ti<<=1,(Ti&130023424)===0&&(Ti=4194304)));var i=Ct();e=qn(e,t),e!==null&&(q0(e,t,i),Nt(e,i))}function gf(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),_c(e,i)}function yf(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(t),_c(e,i)}var zc;zc=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)Dt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Dt=!1,af(e,t,i);Dt=(e.flags&131072)!==0}else Dt=!1,Ke&&(t.flags&1048576)!==0&&i1(t,Qi,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;da(e,t),e=t.pendingProps;var c=Kr(t,$t.current);r0(t,i),c=ul(null,t,l,e,c,i);var h=cl();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(l)?(h=!0,Gi(t)):h=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,nl(t),c.updater=ua,t.stateNode=c,c._reactInternals=t,vl(t,l,e,i),t=wl(null,t,l,!0,h,i)):(t.tag=0,Ke&&h&&Vo(t),Tt(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(da(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=wf(l),e=sn(l,e),c){case 0:t=xl(null,t,l,e,i);break e;case 1:t=K1(null,t,l,e,i);break e;case 11:t=V1(null,t,l,e,i);break e;case 14:t=G1(null,t,l,sn(l.type,e),i);break e}throw Error(r(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),xl(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),K1(e,t,l,c,i);case 3:e:{if(Z1(t),e===null)throw Error(r(387));l=t.pendingProps,h=t.memoizedState,c=h.element,h1(e,t),na(t,l,null,i);var y=t.memoizedState;if(l=y.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){c=a0(Error(r(423)),t),t=J1(e,t,l,i,c);break e}else if(l!==c){c=a0(Error(r(424)),t),t=J1(e,t,l,i,c);break e}else for(Wt=Zn(t.stateNode.containerInfo.firstChild),Ht=t,Ke=!0,ln=null,i=d1(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(e0(),l===c){t=Pn(e,t,i);break e}Tt(e,t,l,i)}t=t.child}return t;case 5:return v1(t),e===null&&Xo(t),l=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,y=c.children,Oo(l,c)?y=null:h!==null&&Oo(l,h)&&(t.flags|=32),Q1(e,t),Tt(e,t,y,i),t.child;case 6:return e===null&&Xo(t),null;case 13:return ec(e,t,i);case 4:return rl(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=t0(t,null,l,i):Tt(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),V1(e,t,l,c,i);case 7:return Tt(e,t,t.pendingProps,i),t.child;case 8:return Tt(e,t,t.pendingProps.children,i),t.child;case 12:return Tt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,h=t.memoizedProps,y=c.value,Ge(Ji,l._currentValue),l._currentValue=y,h!==null)if(on(h.value,y)){if(h.children===c.children&&!Pt.current){t=Pn(e,t,i);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var k=h.dependencies;if(k!==null){y=h.child;for(var C=k.firstContext;C!==null;){if(C.context===l){if(h.tag===1){C=jn(-1,i&-i),C.tag=2;var O=h.updateQueue;if(O!==null){O=O.shared;var X=O.pending;X===null?C.next=C:(C.next=X.next,X.next=C),O.pending=C}}h.lanes|=i,C=h.alternate,C!==null&&(C.lanes|=i),el(h.return,i,t),k.lanes|=i;break}C=C.next}}else if(h.tag===10)y=h.type===t.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=i,k=y.alternate,k!==null&&(k.lanes|=i),el(y,i,t),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}Tt(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,r0(t,i),c=Kt(c),l=l(c),t.flags|=1,Tt(e,t,l,i),t.child;case 14:return l=t.type,c=sn(l,t.pendingProps),c=sn(l.type,c),G1(e,t,l,c,i);case 15:return Y1(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),da(e,t),t.tag=1,Rt(l)?(e=!0,Gi(t)):e=!1,r0(t,i),L1(t,l,c),vl(t,l,c,i),wl(null,t,l,!0,e,i);case 19:return nc(e,t,i);case 22:return X1(e,t,i)}throw Error(r(156,t.tag))};function Sc(e,t){return au(e,t)}function xf(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,i,l){return new xf(e,t,i,l)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wf(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===Ve)return 14}return 2}function ur(e,t){var i=e.alternate;return i===null?(i=en(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function $a(e,t,i,l,c,h){var y=2;if(l=e,typeof e=="function")Ol(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case H:return Pr(i.children,c,h,t);case Z:y=8,c|=8;break;case V:return e=en(12,i,t,c|2),e.elementType=V,e.lanes=h,e;case Fe:return e=en(13,i,t,c),e.elementType=Fe,e.lanes=h,e;case Ie:return e=en(19,i,t,c),e.elementType=Ie,e.lanes=h,e;case ye:return ka(i,c,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:y=10;break e;case ze:y=9;break e;case Te:y=11;break e;case Ve:y=14;break e;case We:y=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=en(y,i,t,c),t.elementType=e,t.type=l,t.lanes=h,t}function Pr(e,t,i,l){return e=en(7,e,l,t),e.lanes=i,e}function ka(e,t,i,l){return e=en(22,e,l,t),e.elementType=ye,e.lanes=i,e.stateNode={isHidden:!1},e}function Il(e,t,i){return e=en(6,e,null,t),e.lanes=i,e}function Fl(e,t,i){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=po(0),this.expirationTimes=po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Hl(e,t,i,l,c,h,y,k,C){return e=new bf(e,t,i,k,C),t===1?(t=1,h===!0&&(t|=8)):t=0,h=en(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},nl(h),e}function $f(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function Mc(e){if(!e)return er;e=e._reactInternals;e:{if($r(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Rt(i))return t1(e,i,t)}return t}function Tc(e,t,i,l,c,h,y,k,C){return e=Hl(i,l,!0,e,c,h,y,k,C),e.context=Mc(null),i=e.current,l=Ct(),c=lr(i),h=jn(l,c),h.callback=t??null,rr(i,h,c),e.current.lanes=c,q0(e,c,l),Nt(e,l),e}function _a(e,t,i,l){var c=t.current,h=Ct(),y=lr(c);return i=Mc(i),t.context===null?t.context=i:t.pendingContext=i,t=jn(h,y),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=rr(c,t,y),e!==null&&(dn(e,c,y,h),ta(e,c,y)),y}function za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Wl(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function kf(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}Sa.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));_a(e,t,null,null)},Sa.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){_a(null,e,null,null)}),t[Tn]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=hu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Xn.length&&t!==0&&t<Xn[i].priority;i++);Xn.splice(i,0,e),i===0&&vu(e)}};function Vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function _f(e,t,i,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var O=za(y);h.call(O)}}var y=Tc(t,l,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=y,e[Tn]=y.current,V0(e.nodeType===8?e.parentNode:e),Er(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var k=l;l=function(){var O=za(C);k.call(O)}}var C=Hl(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=C,e[Tn]=C.current,V0(e.nodeType===8?e.parentNode:e),Er(function(){_a(t,C,i,l)}),C}function Ta(e,t,i,l,c){var h=i._reactRootContainer;if(h){var y=h;if(typeof c=="function"){var k=c;c=function(){var C=za(y);k.call(C)}}_a(t,y,e,c)}else y=_f(i,t,e,c,l);return za(y)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=E0(t.pendingLanes);i!==0&&(vo(t,i|1),Nt(t,at()),(Be&6)===0&&(s0=at()+500,tr()))}break;case 13:Er(function(){var l=qn(e,1);if(l!==null){var c=Ct();dn(l,e,1,c)}}),Wl(e,1)}},go=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var i=Ct();dn(t,e,134217728,i)}Wl(e,134217728)}},fu=function(e){if(e.tag===13){var t=lr(e),i=qn(e,t);if(i!==null){var l=Ct();dn(i,e,t,l)}Wl(e,t)}},hu=function(){return He},mu=function(e,t){var i=He;try{return He=e,t()}finally{He=i}},le=function(e,t,i){switch(t){case"input":if(hn(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=Ui(l);if(!c)throw Error(r(90));Nr(l),hn(l,c)}}}break;case"textarea":xr(e,i);break;case"select":t=i.value,t!=null&&Mt(e,!!i.multiple,t,!1)}},Zs=Bl,Js=Er;var zf={usingClientEntryPoint:!1,Events:[X0,Xr,Ui,Qs,Ks,Bl]},ui={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sf={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{Si=Ca.inject(Sf),vn=Ca}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf,Lt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vl(t))throw Error(r(200));return $f(e,t,null,i)},Lt.createRoot=function(e,t){if(!Vl(e))throw Error(r(299));var i=!1,l="",c=Ac;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Hl(e,1,!1,null,null,i,!1,l,c),e[Tn]=t.current,V0(e.nodeType===8?e.parentNode:e),new Ul(t)},Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},Lt.flushSync=function(e){return Er(e)},Lt.hydrate=function(e,t,i){if(!Ma(t))throw Error(r(200));return Ta(null,e,t,!0,i)},Lt.hydrateRoot=function(e,t,i){if(!Vl(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,h="",y=Ac;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=Tc(t,null,e,1,i??null,c,!1,h,y),e[Tn]=t.current,V0(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new Sa(t)},Lt.render=function(e,t,i){if(!Ma(t))throw Error(r(200));return Ta(null,e,t,!1,i)},Lt.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(r(40));return e._reactRootContainer?(Er(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},Lt.unstable_batchedUpdates=Bl,Lt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!Ma(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ta(e,t,i,!1,l)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var Lc;function Pf(){if(Lc)return Xl.exports;Lc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),Xl.exports=jf(),Xl.exports}var Oc;function Rf(){if(Oc)return Aa;Oc=1;var a=Pf();return Aa.createRoot=a.createRoot,Aa.hydrateRoot=a.hydrateRoot,Aa}var Df=Rf();const Bf=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Nf=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Lf=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Of=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,If=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Ff=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Hf=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Wf=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Uf=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Vf=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
---
`,Gf=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Yf=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,Xf=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,Qf=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,Kf=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
---
`,Zf=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,Jf=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,eh=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,th=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,nh=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,rh=`---
label: "Linear Function"
labelPl: "Funkcja liniowa"
scope: funkcje
section: SP8
level: 2
x: 260
y: 540
---
`,ih=`---
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
`,oh=`---
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
`,sh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,uh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,ch=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,dh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,fh=`---
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
`,mh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,ph=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,vh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,gh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,yh=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,xh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
`,wh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,bh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,$h=`---
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
`,_h=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,zh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,Sh=`---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
---
`,Mh=`---
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
`,Ch=`---
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
`,Eh=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,qh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,jh=`---
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
`,Rh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Dh=`---
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
`,Nh=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,Lh=`---
label: "Trygonometria - podstawy"
labelPl: "Trygonometria - podstawy"
scope: trygonometria
section: LP
level: 1
x: 830
y: 200
---
`,Oh=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,Ih=`---
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
`,Hh=`---
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
`,Gh=`---
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
`,Xh=`---
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
`,Kh=`---
options:
  - "$24$"
  - "$48$"
  - "$14$"
  - "$12$"
correct: 0
hint: "$P = \\frac{d_1 \\cdot d_2}{2} = \\frac{8 \\cdot 6}{2} = \\frac{48}{2} = 24$."
---

Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:
`,Zh=`---
options:
  - "$24\\ \\text{cm}^2$"
  - "$20\\ \\text{cm}^2$"
  - "$12\\ \\text{cm}^2$"
  - "$48\\ \\text{cm}^2$"
correct: 0
hint: "Pole prostokąta = $a \\cdot b = 6 \\cdot 4 = 24\\ \\text{cm}^2$."
---

Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:
`,Jh=`---
options:
  - "$9\\pi\\ \\text{cm}^2$"
  - "$6\\pi\\ \\text{cm}^2$"
  - "$3\\pi\\ \\text{cm}^2$"
  - "$18\\pi\\ \\text{cm}^2$"
correct: 0
hint: "Pole koła = $\\pi r^2 = \\pi \\cdot 3^2 = 9\\pi\\ \\text{cm}^2$."
---

Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:
`,em=`---
options:
  - "155"
  - "150"
  - "145"
  - "160"
correct: 0
hint: "S₁₀ = (10/2)·(2·2 + 9·3) = 5·31 = 155."
---

Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:
`,tm=`---
options:
  - "$48$"
  - "$24$"
  - "$96$"
  - "$16$"
correct: 0
hint: "Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$. $a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$."
---

Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:
`,nm=`---
options:
  - "$S_{10} = 55$"
  - "$S_{10} = 50$"
  - "$S_{10} = 45$"
  - "$S_{10} = 100$"
correct: 0
hint: "Suma $n$ wyrazów ciągu arytm.: $S_n = \\frac{n(a_1 + a_n)}{2}$. $a_{10} = 10$, $S_{10} = \\frac{10 \\cdot (1+10)}{2} = 55$."
---

Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:
`,rm=`---
options:
  - "1/4"
  - "1/8"
  - "3/8"
  - "1/2"
correct: 0
hint: "C(4,3)·(1/2)³·(1/2)¹ = 4/16 = 1/4."
---

Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:
`,im=`---
options:
  - "$\\binom{n}{k} p^k (1-p)^{n-k}$"
  - "$p^k (1-p)^{n-k}$"
  - "$\\binom{n}{k} p^{n-k} (1-p)^k$"
  - "$n \\cdot p^k$"
correct: 0
hint: "Wzór Bernoulliego: $P(X=k) = \\binom{n}{k} p^k q^{n-k}$, gdzie $q = 1-p$."
---

W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:
`,am=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{1}{8}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "$P(X=2) = \\binom{3}{2} \\cdot (\\frac{1}{2})^2 \\cdot \\frac{1}{2} = 3 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:
`,om=`---
options:
  - "10"
  - "5"
  - "20"
  - "15"
correct: 0
hint: "C(5,2) = 5!/(2!·3!) = 10."
---

Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:
`,lm=`---
options:
  - "$a^3 + 3a^2b + 3ab^2 + b^3$"
  - "$a^3 + b^3$"
  - "$a^3 - 3a^2b + 3ab^2 - b^3$"
  - "$3a^2b + 3ab^2$"
correct: 0
hint: "Wzór dwumianowy dla $n=3$: $(a+b)^3 = \\binom{3}{0}a^3 + \\binom{3}{1}a^2b + \\binom{3}{2}ab^2 + \\binom{3}{3}b^3$."
---

Rozwiń $(a + b)^3$:
`,sm=`---
options:
  - "$\\binom{n}{k} a^{n-k} b^k$"
  - "$\\binom{n}{k} a^k b^{n-k}$"
  - "$n! \\cdot a^{n-k} b^k$"
  - "$\\binom{k}{n} a^{n-k} b^k$"
correct: 0
hint: "$(k+1)$-ty wyraz (od $k=0$) rozwinięcia $(a+b)^n$: $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$."
---

Wyraz ogólny rozwinięcia $(a+b)^n$ to:
`,um=`---
options:
  - "(x−2)²+(y+1)²=9"
  - "(x+2)²+(y−1)²=9"
  - "(x−2)²+(y−1)²=9"
  - "(x+2)²+(y+1)²=3"
correct: 0
hint: "Wzór: (x−a)²+(y−b)²=r². Tu a=2, b=−1, r=3."
---

Okrąg o środku (2,−1) i promieniu 3 ma równanie:
`,cm=`---
options:
  - "$(x-2)^2 + (y+1)^2 = 9$"
  - "$(x+2)^2 + (y-1)^2 = 9$"
  - "$(x-2)^2 + (y+1)^2 = 3$"
  - "$(x+2)^2 + (y-1)^2 = 3$"
correct: 0
hint: "Równanie okręgu o środku $(a, b)$ i promieniu $r$: $(x-a)^2 + (y-b)^2 = r^2$. Tu: $(x-2)^2+(y+1)^2=9$."
---

Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:
`,dm=`---
options:
  - "Środek $(1, -2)$, promień $3$"
  - "Środek $(-1, 2)$, promień $3$"
  - "Środek $(1, -2)$, promień $9$"
  - "Środek $(-1, 2)$, promień $9$"
correct: 0
hint: "$(x-1)^2 + (y+2)^2 = 9$: środek $(1, -2)$, promień $\\sqrt{9} = 3$."
---

Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:
`,fm=`---
options:
  - "10"
  - "15"
  - "20"
  - "60"
correct: 0
hint: "C(5,3) = 5!/(3!·2!) = 10."
---

Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?
`,hm=`---
options:
  - "$10$"
  - "$20$"
  - "$60$"
  - "$5$"
correct: 0
hint: "$\\binom{5}{2} = \\frac{5!}{2!\\cdot 3!} = \\frac{20}{2} = 10$."
---

Ile jest sposobów wybrania 2 osób z 5?
`,mm=`---
options:
  - "$\\binom{n}{k} = \\binom{n}{n-k}$"
  - "$\\binom{n}{k} = \\binom{n+1}{k}$"
  - "$\\binom{n}{k} = k \\cdot \\binom{n}{k-1}$"
  - "$\\binom{n}{k} = n \\cdot \\binom{n-1}{k}$"
correct: 0
hint: "Symetria kombinacji: wybór $k$ elementów jest równoznaczny z pominięciem $n-k$. Więc $\\binom{n}{k} = \\binom{n}{n-k}$."
---

Który wzór jest prawdziwą własnością symbolu Newtona?
`,pm=`---
options:
  - "5"
  - "7"
  - "1"
  - "√5"
correct: 0
hint: "|z| = √(3²+4²) = √25 = 5."
---

Moduł liczby zespolonej z = 3 + 4i wynosi:
`,vm=`---
options:
  - "$2 + 3i$"
  - "$2 - 3i$"
  - "$-2 + 3i$"
  - "$-2 - 3i$"
correct: 0
hint: "$(1+2i) + (1+i) = (1+1) + (2+1)i = 2 + 3i$."
---

Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$
`,gm=`---
options:
  - "$\\sqrt{5}$"
  - "$5$"
  - "$3$"
  - "$\\sqrt{3}$"
correct: 0
hint: "$|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$."
---

Moduł liczby zespolonej $z = 1 + 2i$ wynosi:
`,ym=`---
options:
  - "0.2"
  - "0.9"
  - "0.5"
  - "0.1"
correct: 0
hint: "P(A∩B) = P(A)·P(B|A) = 0.4·0.5 = 0.2."
---

P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =
`,xm=`---
options:
  - "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$"
  - "$P(A|B) = P(A) \\cdot P(B)$"
  - "$P(A|B) = P(A) + P(B)$"
  - "$P(A|B) = \\frac{P(A)}{P(B)}$"
correct: 0
hint: "Definicja prawdopodobieństwa warunkowego: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (dla $P(B) > 0$)."
---

Wzór na prawdopodobieństwo warunkowe $P(A|B)$:
`,wm=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{5}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Karty $\\leq 4$: {1,2,3,4}. Parzyste wśród nich: {2,4}. $P = \\frac{2}{4} = \\frac{1}{2}$."
---

Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:
`,bm=`---
options:
  - "a=3, b=2"
  - "a=9, b=4"
  - "a=2, b=3"
  - "a=√3, b=√2"
correct: 0
hint: "Standardowa postać: x²/a² + y²/b² = 1."
---

Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:
`,$m=`---
options:
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
  - "$y = ax^2$"
  - "$(x-h)^2 + (y-k)^2 = r^2$"
correct: 0
hint: "Równanie elipsy o półosiach $a$ (pozioma) i $b$ (pionowa): $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
---

Równanie elipsy o środku w początku układu współrzędnych to:
`,km=`---
options:
  - "$y = \\frac{1}{4p}x^2$"
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$x^2 + y^2 = r^2$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
correct: 0
hint: "Parabola z ogniskiem w $(0,p)$: $y = \\frac{x^2}{4p}$. Jest to krzywa stożkowa będąca przekrojem stożka płaszczyzną równoległą do tworzącej."
---

Które równanie opisuje parabolę jako krzywą stożkową?
`,_m=`---
options:
  - "6"
  - "3"
  - "9"
  - "27"
correct: 0
hint: "3! = 6 permutacji."
---

Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?
`,zm=`---
options:
  - "$8$"
  - "$6$"
  - "$3$"
  - "$12$"
correct: 0
hint: "Zasada mnożenia: $2 \\times 4 = 8$ możliwości (każda koszulka z każdą spodnicą)."
---

Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?
`,Sm=`---
options:
  - "$12$"
  - "$6$"
  - "$3$"
  - "$24$"
correct: 0
hint: "Zasada mnożenia: $3 \\times 4 = 12$ tras (3 drogi z A do B, 4 z B do C)."
---

Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?
`,Mm=`---
options:
  - "5"
  - "3"
  - "7"
  - "25/5"
correct: 0
hint: "Sortujesz: 1,3,5,7,9. Środkowy element to 5."
---

Mediana zbioru {3, 7, 1, 9, 5} wynosi:
`,Tm=`---
options:
  - "$7$"
  - "$6$"
  - "$8$"
  - "$7{,}5$"
correct: 0
hint: "Mediana to środkowa wartość po posortowaniu. Posortowane: 3, 5, 7, 9, 11. Środkowa to 7."
---

Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:
`,Cm=`---
options:
  - "$6$"
  - "$5$"
  - "$7$"
  - "$8$"
correct: 0
hint: "Średnia arytmetyczna: suma wszystkich / liczba elementów. $(4+6+8+6)/4 = 24/4 = 6$."
---

Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:
`,Am=`---
options:
  - "(−∞,−1) ∪ (1,+∞)"
  - "(−1, 1)"
  - "(0, +∞)"
  - "(−∞, 0)"
correct: 0
hint: "f'(x) = 3x²−3 = 3(x−1)(x+1). f'>0 gdy |x|>1."
---

Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:
`,Em=`---
options:
  - "Funkcja rośnie"
  - "Funkcja maleje"
  - "Funkcja jest stała"
  - "Funkcja ma minimum"
correct: 0
hint: "Gdy $f'(x) > 0$ na przedziale, funkcja jest rosnąca na tym przedziale."
---

Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:
`,qm=`---
options:
  - "$x = 1$ (minimum)"
  - "$x = 1$ (maksimum)"
  - "$x = -1$ (minimum)"
  - "$x = 0$ (minimum)"
correct: 0
hint: "$f'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f''(x) = 2 > 0$, więc to minimum."
---

Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:
`,jm=`---
options:
  - "$3x^2 - 4$"
  - "$3x^2 + 4$"
  - "$x^2 - 4$"
  - "$3x^2$"
correct: 0
hint: "Reguła potęgi: $(x^n)' = n \\cdot x^{n-1}$. Ponadto $(x^3)' = 3x^2$ i $(-4x)' = -4$."
---

Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:
`,Pm=`---
options:
  - "$\\cos x$"
  - "$-\\cos x$"
  - "$-\\sin x$"
  - "$\\sin x$"
correct: 0
hint: "Podstawowa reguła: $(\\sin x)' = \\cos x$."
---

Pochodna funkcji $f(x) = \\sin x$ wynosi:
`,Rm=`---
options:
  - "$6x^2 - 2$"
  - "$6x^2 + 2$"
  - "$2x^3 - 2x$"
  - "$6x - 2$"
correct: 0
hint: "$(2x^3)' = 6x^2$, $(-2x)' = -2$. Łącznie: $6x^2 - 2$."
---

Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:
`,Dm=`---
options:
  - "5"
  - "10"
  - "2.5"
  - "0.5"
correct: 0
hint: "E(X) = n·p = 10·0.5 = 5."
---

W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:
`,Bm=`---
options:
  - "$np$"
  - "$np(1-p)$"
  - "$\\sqrt{np(1-p)}$"
  - "$\\frac{1}{np}$"
correct: 0
hint: "Wartość oczekiwana rozkładu dwumianowego $B(n,p)$: $E(X) = np$."
---

Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:
`,Nm=`---
options:
  - "Symetryczny dzwon wokół średniej"
  - "Wykładniczy wzrost"
  - "Jednostajny prostokąt"
  - "Asymetryczny skok w górę"
correct: 0
hint: "Rozkład normalny (Gaussa) ma charakterystyczny kształt dzwonu, symetryczny względem średniej $\\mu$."
---

Wykres rozkładu normalnego ma kształt:
`,Lm=`---
options:
  - "(x−2)(x−3)"
  - "(x+2)(x+3)"
  - "(x−1)(x−6)"
  - "(x−2)(x+3)"
correct: 0
hint: "Szukasz dwóch liczb, których suma = −5 i iloczyn = 6."
---

Rozkład na czynniki: x² − 5x + 6 =
`,Om=`---
options:
  - "$(x-4)(x+2)$"
  - "$(x+4)(x-2)$"
  - "$(x-4)(x-2)$"
  - "$(x+4)(x+2)$"
correct: 0
hint: "Szukasz dwóch liczb o sumie $-2$ i iloczynie $-8$: to $-4$ i $2$."
---

Rozłóż na czynniki: $x^2 - 2x - 8 =$
`,Im=`---
options:
  - "$2x(x - 3)$"
  - "$2(x^2 - 3)$"
  - "$x(2x - 3)$"
  - "$2x^2 - 6x$"
correct: 0
hint: "Wyłącz wspólny czynnik $2x$: $2x^2 - 6x = 2x(x - 3)$."
---

Rozłóż na czynniki: $2x^2 - 6x =$
`,Fm=`---
options:
  - "2x+2"
  - "2x+1"
  - "2x²+2"
  - "x+2"
correct: 0
hint: "f(g(x)) = f(x+1) = 2(x+1) = 2x+2."
---

Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =
`,Hm=`---
options:
  - "$4x^2 - 1$"
  - "$2x^2 - 1$"
  - "$4x - 1$"
  - "$2x - 1$"
correct: 0
hint: "$(f \\circ g)(x) = f(g(x)) = f(2x) = (2x)^2 - 1 = 4x^2 - 1$."
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:
`,Wm=`---
options:
  - "$2x^2 - 2$"
  - "$4x^2 - 1$"
  - "$2x - 1$"
  - "$x^2 - 2$"
correct: 0
hint: "$(g \\circ f)(x) = g(f(x)) = g(x^2 - 1) = 2(x^2-1) = 2x^2 - 2$. Złożenia nie są przemienne!"
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:
`,Um=`---
options:
  - "{(1,2),(1,3),(2,4)}"
  - "{(1,2),(2,3),(3,4)}"
  - "{(1,1),(2,2),(3,3)}"
  - "{(1,2),(2,1)}"
correct: 0
hint: "Funkcja przypisuje każdemu argumentowi dokładnie jedną wartość. Para (1,2) i (1,3) — jeden argument, dwie wartości."
---

Która z poniższych relacji NIE jest funkcją?
`,Vm=`---
options:
  - "Każdemu argumentowi odpowiada dokładnie jedna wartość"
  - "Każdej wartości odpowiada dokładnie jeden argument"
  - "Funkcja musi być rosnąca"
  - "Dziedzina musi być zbiorem liczb rzeczywistych"
correct: 0
hint: "Funkcja to przyporządkowanie: każdemu $x$ z dziedziny odpowiada dokładnie jedno $f(x)$."
---

Funkcja to takie przyporządkowanie, że:
`,Gm=`---
options:
  - "$10$"
  - "$-10$"
  - "$7$"
  - "$5$"
correct: 0
hint: "Podstawiamy $x=3$: $f(3) = 2 \\cdot 3 + 4 = 6 + 4 = 10$."
---

Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:
`,Ym=`---
options:
  - "rosnąca na całej dziedzinie"
  - "malejąca na całej dziedzinie"
  - "stała"
  - "rosnąca tylko dla x > 0"
correct: 0
hint: "Podstawa 2 > 1, więc funkcja wykładnicza jest rosnąca."
---

Funkcja f(x) = 2ˣ jest:
`,Xm=`---
options:
  - "Rosnąca dla $a > 1$, malejąca dla $0 < a < 1$"
  - "Zawsze rosnąca"
  - "Zawsze malejąca"
  - "Rosnąca dla $a < 0$"
correct: 0
hint: "$f(x) = a^x$: jeśli $a > 1$, funkcja rośnie; jeśli $0 < a < 1$, maleje."
---

Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:
`,Qm=`---
options:
  - "$(0, 1)$"
  - "$(1, 0)$"
  - "$(0, 0)$"
  - "$(1, a)$"
correct: 0
hint: "Dla każdego $a \\neq 0$: $a^0 = 1$, więc wykres przecina oś $Oy$ w punkcie $(0, 1)$."
---

Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:
`,Km=`---
options:
  - "$k > \\frac{3}{2}$"
  - "$k < \\frac{3}{2}$"
  - "$k > 1$"
  - "$k < 0$"
correct: 0
hint: "Funkcja liniowa jest malejąca gdy współczynnik kierunkowy $a < 0$, czyli $-2k + 3 < 0$."
---

Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:
`,Zm=`---
options:
  - "Rosnąca"
  - "Malejąca"
  - "Stała"
  - "Parzysta"
correct: 0
hint: "Dla $f(x) = 2x - 1$ współczynnik kierunkowy $a = 2 > 0$, więc funkcja jest rosnąca."
---

Funkcja $f(x) = 2x - 1$ jest:
`,Jm=`---
options:
  - "$(0, -3)$ i $(3/2, 0)$"
  - "$(0, 3)$ i $(3/2, 0)$"
  - "$(0, -3)$ i $(-3/2, 0)$"
  - "$(3, 0)$ i $(0, 3/2)$"
correct: 0
hint: "Przecięcie z $Oy$: $x=0 \\Rightarrow f(0) = -3$. Z $Ox$: $2x-3=0 \\Rightarrow x = 3/2$."
---

Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:
`,e3=`---
options:
  - "(2, +∞)"
  - "[2, +∞)"
  - "(−∞, 2)"
  - "R"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: x − 2 > 0."
---

Dziedzina funkcji f(x) = log(x − 2) to:
`,t3=`---
options:
  - "$(1, 0)$"
  - "$(0, 1)$"
  - "$(0, 0)$"
  - "$(a, 1)$"
correct: 0
hint: "Dla każdej podstawy $a$: $\\log_a 1 = 0$, więc wykres przechodzi przez $(1, 0)$."
---

Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:
`,n3=`---
options:
  - "$(0, +\\infty)$"
  - "$(-\\infty, +\\infty)$"
  - "$(1, +\\infty)$"
  - "$[0, +\\infty)$"
correct: 0
hint: "Logarytm jest określony tylko dla argumentów dodatnich: $\\log_a x$ istnieje $\\Leftrightarrow x > 0$."
---

Dziedzina funkcji $f(x) = \\log_a x$ to:
`,r3=`---
options:
  - "3"
  - "1"
  - "2"
  - "0"
correct: 0
hint: "W(x) = x(x−1)(x+1). Trzy miejsca zerowe: 0, 1, −1."
---

Wielomian W(x) = x³ − x ma ile miejsc zerowych?
`,i3=`---
options:
  - "Parzysta"
  - "Nieparzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Rosnąca"
correct: 0
hint: "$f(-x) = (-x)^4 + 2(-x)^2 = x^4 + 2x^2 = f(x)$, więc funkcja jest parzysta."
---

Funkcja $f(x) = x^4 + 2x^2$ jest:
`,a3=`---
options:
  - "Nieparzysta"
  - "Parzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Stała"
correct: 0
hint: "$f(-x) = (-x)^3 = -x^3 = -f(x)$, więc funkcja jest nieparzysta."
---

Funkcja $f(x) = x^3$ jest:
`,o3=`---
options:
  - "(2, −1)"
  - "(−2, 1)"
  - "(2, 1)"
  - "(4, 3)"
correct: 0
hint: "p = −b/(2a) = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
---

Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:
`,l3=`---
options:
  - "$(1, -4)$"
  - "$(-1, -4)$"
  - "$(1, 4)$"
  - "$(2, 0)$"
correct: 0
hint: "Wierzchołek paraboli $f(x) = ax^2 + bx + c$: $p = -b/(2a) = 2/2 = 1$, $q = f(1) = 1 - 2 - 3 = -4$."
---

Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:
`,s3=`---
options:
  - "W górę (ramiona skierowane w górę)"
  - "W dół (ramiona skierowane w dół)"
  - "Jest pozioma"
  - "Nie jest parabolą"
correct: 0
hint: "Gdy $a > 0$, parabola ma ramiona skierowane w górę (minimum). Gdy $a < 0$ — w dół."
---

Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:
`,u3=`---
options:
  - "π"
  - "2π"
  - "π/2"
  - "4π"
correct: 0
hint: "Podstawowy okres sin to 2π. Przy sin(2x) dzielisz przez 2: T = π."
---

Okres funkcji f(x) = sin(2x) wynosi:
`,c3=`---
options:
  - "$2\\pi$"
  - "$\\pi$"
  - "$\\frac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Funkcje $\\sin$ i $\\cos$ mają okres $2\\pi$ (pełny obrót)."
---

Okres funkcji $f(x) = \\sin x$ wynosi:
`,d3=`---
options:
  - "$[-1, 1]$"
  - "$[0, 1]$"
  - "$\\mathbb{R}$"
  - "$[0, 2\\pi]$"
correct: 0
hint: "Zbiór wartości funkcji $\\sin x$ to $[-1, 1]$ — sinus jest zawsze między $-1$ a $1$."
---

Zbiór wartości funkcji $f(x) = \\sin x$ to:
`,f3=`---
options:
  - "3/4"
  - "9/12"
  - "4/5"
  - "7/9"
correct: 0
hint: "Dzielisz licznik i mianownik przez NWD(45,60) = 15."
---

Uproszczona postać ułamka 45/60 to:
`,h3=`---
options:
  - "$\\frac{7}{12}$"
  - "$\\frac{7}{6}$"
  - "$\\frac{2}{6}$"
  - "$\\frac{5}{12}$"
correct: 0
hint: "Wspólny mianownik to 12: $\\frac{1}{4} = \\frac{3}{12}$, $\\frac{1}{3} = \\frac{4}{12}$. Suma: $\\frac{7}{12}$."
---

Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$
`,m3=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{6}{8}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Mnożenie ułamków: licznik przez licznik, mianownik przez mianownik. $\\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$
`,p3=`---
options:
  - "9"
  - "6"
  - "18"
  - "3"
correct: 0
hint: "S = a₁/(1−q) = 6/(1−1/3) = 6/(2/3) = 9."
---

Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:
`,v3=`---
options:
  - "$\\frac{a_1}{1 - q}$"
  - "$\\frac{a_1}{1 + q}$"
  - "$a_1 \\cdot q$"
  - "$\\frac{a_1 q}{1-q}$"
correct: 0
hint: "Suma nieskończonego szeregu geometrycznego (dla $|q| < 1$): $S = \\frac{a_1}{1-q}$."
---

Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:
`,g3=`---
options:
  - "$2$"
  - "$1$"
  - "$4$"
  - "Szereg rozbieżny"
correct: 0
hint: "$a_1 = 1$, $q = \\frac{1}{2}$. $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$."
---

Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:
`,y3=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: 84 = 4·21, 56 = 8·7."
---

Ile wynosi NWD(84, 56)?
`,x3=`---
options:
  - "$-12$"
  - "$12$"
  - "$-4$"
  - "$4$"
correct: 0
hint: "Minus razy plus to minus. $(-3) \\cdot 4 = -12$."
---

Oblicz: $(-3) \\cdot 4 =$
`,w3=`---
options:
  - "$-5$"
  - "$5$"
  - "$-15$"
  - "$15$"
correct: 0
hint: "Odejmowanie to dodawanie liczby przeciwnej: $3 - 8 = 3 + (-8) = -5$."
---

Oblicz: $3 - 8 =$
`,b3=`---
options:
  - "$x^2 + C$"
  - "$2 + C$"
  - "$x + C$"
  - "$2x^2 + C$"
correct: 0
hint: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Dla $n = 1$: $\\int x \\, dx = \\frac{x^2}{2} + C$ — uwaga, to $\\int 2x \\, dx = x^2 + C$."
---

$\\displaystyle \\int 2x \\, dx =$
`,$3=`---
options:
  - "$\\frac{x^3}{3} + C$"
  - "$2x + C$"
  - "$x^3 + C$"
  - "$\\frac{x^2}{2} + C$"
correct: 0
hint: "$\\int x^2\\,dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$."
---

Oblicz całkę: $\\displaystyle\\int x^2\\,dx$
`,k3=`---
options:
  - "$\\frac{9}{2}$"
  - "$9$"
  - "$3$"
  - "$\\frac{3}{2}$"
correct: 0
hint: "$\\int_0^3 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{9}{2} - 0 = \\frac{9}{2}$."
---

Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$
`,_3=`---
options:
  - "$3$"
  - "$1$"
  - "$\\infty$"
  - "$0$"
correct: 0
hint: "Dzielimy licznik i mianownik przez $x^2$. Wyrazy $\\frac{1}{x^2}$ i $\\frac{5}{x^2}$ dążą do $0$."
---

Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:
`,z3=`---
options:
  - "$1$"
  - "$0$"
  - "$\\infty$"
  - "$-1$"
correct: 0
hint: "$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ — to ważna granica (granica Eulera)."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$
`,S3=`---
options:
  - "$5$"
  - "$0$"
  - "$\\infty$"
  - "$\\frac{5}{3}$"
correct: 0
hint: "Podziel przez $x^2$: $\\frac{5x^2-1}{x^2+3} = \\frac{5 - 1/x^2}{1 + 3/x^2} \\to \\frac{5}{1} = 5$."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$
`,M3=`---
options:
  - "$x = 5$"
  - "$x = 2$"
  - "$x = -2$"
  - "$x = 7$"
correct: 0
hint: "$2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."
---

Rozwiązaniem równania $2x - 3 = 7$ jest:
`,T3=`---
options:
  - "$x = 4$"
  - "$x = -4$"
  - "$x = 2$"
  - "$x = 8$"
correct: 0
hint: "$3x = 12$, więc $x = 4$."
---

Rozwiąż równanie: $3x - 2 = 10$
`,C3=`---
options:
  - "$x = -3$"
  - "$x = 3$"
  - "$x = 1$"
  - "$x = -1$"
correct: 0
hint: "$2x + 8 = 2$, więc $2x = -6$, $x = -3$."
---

Rozwiąż równanie: $2(x + 4) = 2$
`,A3=`---
options:
  - "(2/3, +∞)"
  - "(−∞, 2/3)"
  - "(−2/3, +∞)"
  - "(−∞, −2/3)"
correct: 0
hint: "Mnożysz obie strony przez 6, potem przenosisz x na lewą stronę."
---

Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:
`,E3=`---
options:
  - "$x > 3$"
  - "$x < 3$"
  - "$x > -3$"
  - "$x \\geq 3$"
correct: 0
hint: "Dodaj 1 do obu stron: $2x > 6$, dziel przez 2: $x > 3$."
---

Rozwiąż nierówność: $2x - 1 > 5$
`,q3=`---
options:
  - "$x \\geq -2$"
  - "$x \\leq -2$"
  - "$x \\geq 2$"
  - "$x \\leq 2$"
correct: 0
hint: "Przy dzieleniu przez liczbę ujemną odwracamy znak: $-3x \\leq 6 \\Rightarrow x \\geq -2$."
---

Rozwiąż nierówność: $-3x \\leq 6$
`,j3=`---
options:
  - "x=3, y=2"
  - "x=2, y=3"
  - "x=4, y=1"
  - "x=1, y=4"
correct: 0
hint: "Dodajesz równania: 2x = 6, x = 3."
---

Układ { x+y=5, x−y=1 } ma rozwiązanie:
`,P3=`---
options:
  - "$x = 1,\\ y = 2$"
  - "$x = 2,\\ y = 1$"
  - "$x = -1,\\ y = 2$"
  - "$x = 1,\\ y = -2$"
correct: 0
hint: "Z drugiego równania $y = 2x$. Podstaw do pierwszego: $x + 2x = 3$, $3x = 3$, $x = 1$, $y = 2$."
---

Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$
`,R3=`---
options:
  - "$x = 3,\\ y = -1$"
  - "$x = 1,\\ y = 3$"
  - "$x = -3,\\ y = 1$"
  - "$x = 2,\\ y = 0$"
correct: 0
hint: "Odejmij równania: $(2x + y) - (x + y) = 5 - 2$, więc $x = 3$. Potem $y = 2 - 3 = -1$."
---

Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$
`,D3=`---
options:
  - "x = 8"
  - "x = 6"
  - "x = 9"
  - "x = 4"
correct: 0
hint: "log₂(x) = 3 ⟺ x = 2³ = 8."
---

Rozwiązaniem równania log₂(x) = 3 jest:
`,B3=`---
options:
  - "$x = 9$"
  - "$x = 3$"
  - "$x = 27$"
  - "$x = 81$"
correct: 0
hint: "$\\log_3 x = 2 \\Leftrightarrow x = 3^2 = 9$."
---

Rozwiąż równanie: $\\log_3 x = 2$
`,N3=`---
options:
  - "$x = 4$"
  - "$x = 2$"
  - "$x = 8$"
  - "$x = 16$"
correct: 0
hint: "$2^x = 16 = 2^4$, więc $x = 4$."
---

Rozwiąż równanie: $2^x = 16$
`,L3=`---
options:
  - "$2$"
  - "$3$"
  - "$4$"
  - "$9$"
correct: 2
hint: "$(\\sqrt{3})^x = 9$, czyli $3^{x/2} = 3^2$, więc $\\frac{x}{2} = 2$ i $x = 4$."
---

Wartość $\\log_{\\sqrt{3}} 9$ jest równa:
`,O3=`---
options:
  - "$3$"
  - "$8$"
  - "$\\frac{1}{3}$"
  - "$27$"
correct: 0
hint: "$\\log_2 8 = x \\Leftrightarrow 2^x = 8 = 2^3$, więc $x = 3$."
---

Oblicz: $\\log_2 8 =$
`,I3=`---
options:
  - "$\\log_a x + \\log_a y$"
  - "$\\log_a x \\cdot \\log_a y$"
  - "$\\log_a (x + y)$"
  - "$\\log_a x - \\log_a y$"
correct: 0
hint: "Własność logarytmu: $\\log_a(xy) = \\log_a x + \\log_a y$."
---

Które wyrażenie jest równe $\\log_a(xy)$?
`,F3=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja ∀x: P(x) to ∃x: ¬P(x)."
---

Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:
`,H3=`---
options:
  - "Fałsz"
  - "Prawda"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Koniunkcja $p \\wedge q$ jest prawdziwa tylko gdy obie zdania są prawdziwe. Jeśli $q$ jest fałszywe, wynik to fałsz."
---

Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:
`,W3=`---
options:
  - "Prawda"
  - "Fałsz"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Alternatywa $p \\vee q$ jest fałszywa tylko gdy oba zdania są fałszywe. Jeśli $p$ jest prawdziwe, wynik to prawda."
---

Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:
`,U3=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "x + y = 10. Pole P = x·y maksymalne dla x=y=5 (wierzchołek paraboli)."
---

Prostokąt o obwodzie 20 ma największe pole gdy:
`,V3=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 0$"
  - "$x = 6$"
correct: 0
hint: "Minimum paraboli $f(x) = (x-3)^2 + 2$ jest w wierzchołku $x = 3$."
---

Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:
`,G3=`---
options:
  - "$25$"
  - "$20$"
  - "$30$"
  - "$50$"
correct: 0
hint: "Suma $x + y = 10$, więc $y = 10-x$. Iloczyn $P = x(10-x) = 10x - x^2$. Maksimum w $x=5$: $P = 25$."
---

Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:
`,Y3=`---
options:
  - "$k \\leq 0 \\lor k \\geq 1$"
  - "$0 < k < 1$"
  - "$k < 0 \\lor k > 1$"
  - "$k = 0 \\lor k = 1$"
correct: 0
hint: "$\\Delta = (2k)^2 - 4k = 4k^2 - 4k \\geq 0$, czyli $k(k-1) \\geq 0$, co zachodzi dla $k \\leq 0$ lub $k \\geq 1$."
---

Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:
`,X3=`---
options:
  - "$k = 0$ lub $k = 4$"
  - "$k = 2$"
  - "$k \\in \\mathbb{R}$"
  - "Brak rozwiązań"
correct: 0
hint: "$\\Delta = 0$: $4k^2 - 4k \\cdot 4 = 0 \\Rightarrow 4k(k-4) = 0 \\Rightarrow k=0$ lub $k=4$."
---

Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:
`,Q3=`---
options:
  - "$m < -2$ lub $m > 2$"
  - "$-2 < m < 2$"
  - "$m = \\pm 2$"
  - "$m \\in \\mathbb{R}$"
correct: 0
hint: "$\\Delta > 0$: $4m^2 - 4 \\cdot 1 \\cdot 4 > 0 \\Rightarrow m^2 > 4 \\Rightarrow |m| > 2$."
---

Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:
`,K3=`---
options:
  - "24"
  - "12"
  - "16"
  - "10"
correct: 0
hint: "P₄ = 4! = 24."
---

Liczba permutacji zbioru {A, B, C, D} wynosi:
`,Z3=`---
options:
  - "$24$"
  - "$12$"
  - "$6$"
  - "$120$"
correct: 0
hint: "$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$."
---

Na ile sposobów można ustawić 4 osoby w rzędzie?
`,J3=`---
options:
  - "$60$"
  - "$120$"
  - "$20$"
  - "$30$"
correct: 0
hint: "$P_5 / n_A! = 5! / 2! = 120 / 2 = 60$. Słowo ABCDA ma 5 liter, A powtarza się 2 razy."
---

Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?
`,ep=`---
options:
  - "90°"
  - "45°"
  - "60°"
  - "180°"
correct: 0
hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
---

Kąt wpisany w okrąg oparty na średnicy mierzy:
`,tp=`---
options:
  - "$180°$"
  - "$360°$"
  - "$90°$"
  - "$270°$"
correct: 0
hint: "Suma kątów wewnętrznych trójkąta zawsze równa się $180°$."
---

Suma kątów wewnętrznych trójkąta wynosi:
`,np=`---
options:
  - "$P = \\frac{a \\cdot h}{2}$"
  - "$P = a \\cdot h$"
  - "$P = \\frac{a + h}{2}$"
  - "$P = a^2$"
correct: 0
hint: "Pole trójkąta = $\\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość}$."
---

Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:
`,rp=`---
options:
  - "W(2) = 0"
  - "W(2) = 4"
  - "W(2) = 2"
  - "W(0) = 0"
correct: 0
hint: "Podstaw x=2: 8 − 8 − 6 + 6 = 0."
---

Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:
`,ip=`---
options:
  - "Tak, bo $2^3 - 4 \\cdot 2 = 0$"
  - "Nie, bo $2^3 - 4 \\cdot 2 \\neq 0$"
  - "Tak, bo stopień wielomianu to $3$"
  - "Nie, bo wielomian ma zawsze 3 pierwiastki"
correct: 0
hint: "$p(2) = 8 - 8 = 0$, więc $x=2$ jest pierwiastkiem."
---

Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?
`,ap=`---
options:
  - "Co najwyżej $n$ pierwiastków"
  - "Dokładnie $n$ pierwiastków"
  - "Zawsze nieskończenie wiele"
  - "Co najmniej $1$ pierwiastek"
correct: 0
hint: "Wielomian stopnia $n$ ma co najwyżej $n$ pierwiastków rzeczywistych (może mieć mniej lub zero)."
---

Wielomian stopnia $n$ ma:
`,op=`---
options:
  - "3x(x² + 2x + 3)"
  - "3(x³ + 2x + 3)"
  - "x(3x² + 6x)"
  - "3x²(x + 2)"
correct: 0
hint: "Wyłącz przed nawias 3x z każdego wyrazu."
---

Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:
`,lp=`---
options:
  - "$3$"
  - "$2$"
  - "$4$"
  - "$1$"
correct: 0
hint: "Stopień wielomianu to najwyższy wykładnik. W $2x^3 + x - 5$ najwyższy to $3$."
---

Stopień wielomianu $2x^3 + x - 5$ wynosi:
`,sp=`---
options:
  - "$x^2 + 3x + 2$"
  - "$x^2 - 3x + 2$"
  - "$x^2 + x + 2$"
  - "$x^2 + 3x - 2$"
correct: 0
hint: "$(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$."
---

Rozwiń: $(x + 1)(x + 2) =$
`,up=`---
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^8$"
correct: 1
hint: "$\\frac{1}{16} = 2^{-4}$, więc $(\\frac{1}{16})^8 = 2^{-32}$. Ponadto $8 = 2^3$, więc $8^{16} = 2^{48}$. Razem: $2^{-32} \\cdot 2^{48} = 2^{16}$."
---

Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:
`,cp=`---
options:
  - "$8$"
  - "$6$"
  - "$9$"
  - "$4$"
correct: 0
hint: "$2^3 = 2 \\cdot 2 \\cdot 2 = 8$."
---

Oblicz: $2^3 =$
`,dp=`---
options:
  - "$a^5$"
  - "$a^6$"
  - "$a^2$"
  - "$2a^3$"
correct: 0
hint: "Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki: $a^2 \\cdot a^3 = a^{2+3} = a^5$."
---

Uprość: $a^2 \\cdot a^3 =$
`,fp=`---
options:
  - "1/2"
  - "1/3"
  - "2/3"
  - "1/6"
correct: 0
hint: "Parzyste: {2,4,6}. P = 3/6 = 1/2."
---

Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,hp=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Prawa liczb parzystych na kostce: 2, 4, 6 — to 3 z 6 możliwych wyników. $P = \\frac{3}{6} = \\frac{1}{2}$."
---

Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,mp=`---
options:
  - "$\\frac{1}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
  - "$1$"
correct: 0
hint: "Zdarzenia niezależne: $P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$."
---

Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:
`,pp=`---
options:
  - "2k+1 i 2m+1 są nieparzyste, ich suma = 2(k+m+1) — parzysta"
  - "5+7=12, więc działa"
  - "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta"
  - "Wystarczy sprawdzić kilka przykładów"
correct: 0
hint: "Dowód ogólny: reprezentujesz liczby jako 2k+1 i 2m+1."
---

Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?
`,vp=`---
options:
  - "Przyjmujemy negację tezy i dochodzimy do sprzeczności"
  - "Sprawdzamy wszystkie przypadki"
  - "Używamy tylko przykładów"
  - "Dowodzimy przez analogię"
correct: 0
hint: "Dowód nie wprost (reductio ad absurdum): zakładamy, że teza jest fałszywa, i wyprowadzamy sprzeczność."
---

Dowód nie wprost polega na tym, że:
`,gp=`---
options:
  - "Krok bazowy + krok indukcyjny (zakładamy prawdziwość dla $n$, dowodzimy dla $n+1$)"
  - "Sprawdzenie kilku pierwszych przypadków"
  - "Dowód dla $n=1$ wystarczy"
  - "Zakładamy prawdziwość dla $n+1$ i dowodzimy dla $n$"
correct: 0
hint: "Indukcja matematyczna: 1) Krok bazowy — sprawdzamy dla $n=1$. 2) Krok indukcyjny — zakładamy dla $n$, dowodzimy dla $n+1$."
---

Dowód przez indukcję matematyczną składa się z:
`,yp=`---
options:
  - "$10$"
  - "$12$"
  - "$14$"
  - "$\\sqrt{48}$"
correct: 0
hint: "$c^2 = 6^2 + 8^2 = 36 + 64 = 100$, więc $c = 10$."
---

Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:
`,xp=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$\\sqrt{58}$"
correct: 0
hint: "$c^2 = 3^2 + 4^2 = 9 + 16 = 25$, więc $c = 5$."
---

Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:
`,wp=`---
options:
  - "$\\sqrt{11}$"
  - "$\\sqrt{13}$"
  - "$11$"
  - "$3$"
correct: 0
hint: "$a^2 = c^2 - b^2 = 36 - 25 = 11$, więc $a = \\sqrt{11}$."
---

Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:
`,bp=`---
options:
  - "$x = 2$ i $x = 3$"
  - "$x = -2$ i $x = -3$"
  - "$x = 1$ i $x = 6$"
  - "$x = 2$ i $x = -3$"
correct: 0
hint: "$\\Delta = 25 - 24 = 1$. Wzory Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = 6$. Lub $x = \\frac{5 \\pm 1}{2}$."
---

Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:
`,$p=`---
options:
  - "$x = 1$ lub $x = -3$"
  - "$x = -1$ lub $x = 3$"
  - "$x = 1$ lub $x = 3$"
  - "Brak rozwiązań rzeczywistych"
correct: 0
hint: "$\\Delta = 4 + 12 = 16$, $\\sqrt{\\Delta} = 4$. $x = \\frac{-2 \\pm 4}{2}$: $x_1 = 1$, $x_2 = -3$."
---

Rozwiąż: $x^2 + 2x - 3 = 0$
`,kp=`---
options:
  - "Brak rozwiązań rzeczywistych"
  - "$x = 0$"
  - "$x = \\pm 2$"
  - "$x = 4$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. Ujemna delta oznacza brak rozwiązań w $\\mathbb{R}$."
---

Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?
`,_p=`---
options:
  - "(−2, 3)"
  - "(−∞,−2)∪(3,+∞)"
  - "[−2, 3]"
  - "(−3, 2)"
correct: 0
hint: "Pierwiastki to −2 i 3. Parabola jest nad osią poza przedziałem (−2,3)."
---

Rozwiązaniem nierówności x² − x − 6 < 0 jest:
`,zp=`---
options:
  - "$x \\in (-2, 3)$"
  - "$x \\in (-\\infty, -2) \\cup (3, +\\infty)$"
  - "$x \\in [-2, 3]$"
  - "$x \\in \\mathbb{R}$"
correct: 0
hint: "Pierwiastki to $x = -2$ i $x = 3$. Ramiona paraboli skierowane w górę ($a=1>0$), więc parabola jest poniżej zera między pierwiastkami."
---

Rozwiąż nierówność: $x^2 - x - 6 < 0$
`,Sp=`---
options:
  - "$x \\in (-\\infty, -1] \\cup [4, +\\infty)$"
  - "$x \\in (-1, 4)$"
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
correct: 0
hint: "Pierwiastki: $\\Delta = 25$, $x_1 = -1$, $x_2 = 4$. Parabola ($a=1>0$) jest powyżej zera poza pierwiastkami."
---

Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$
`,Mp=`---
options:
  - "x + 2"
  - "x − 2"
  - "x² + 2"
  - "2x"
correct: 0
hint: "x²−4 = (x−2)(x+2). Skracasz (x−2)."
---

Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:
`,Tp=`---
options:
  - "$\\frac{x+1}{x-1}$"
  - "$\\frac{x-1}{x+1}$"
  - "$\\frac{x^2-1}{(x-1)^2}$"
  - "$1$"
correct: 0
hint: "Licznik $x^2-1 = (x-1)(x+1)$. Po skróceniu przez $(x-1)$ zostaje $\\frac{x+1}{x-1} \\cdot \\frac{1}{1}$... Sprawdź: $\\frac{(x-1)(x+1)}{(x-1)^2} = \\frac{x+1}{x-1}$."
---

Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$
`,Cp=`---
options:
  - "$\\frac{5x}{6}$"
  - "$\\frac{5}{6x}$"
  - "$\\frac{5x^2}{6}$"
  - "$\\frac{x}{2}$"
correct: 0
hint: "Mnożenie ułamków: $\\frac{x}{2} \\cdot \\frac{5}{3} = \\frac{5x}{6}$."
---

Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$
`,Ap=`---
options:
  - "3"
  - "1"
  - "∞"
  - "0"
correct: 0
hint: "Dzielisz licznik i mianownik przez n². Wyrazy 1/n² i 2/n² dążą do 0."
---

Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:
`,Ep=`---
options:
  - "$0$"
  - "$1$"
  - "$\\infty$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$, bo mianownik rośnie bez ograniczeń."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$
`,qp=`---
options:
  - "$3$"
  - "$\\infty$"
  - "$0$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Podziel licznik i mianownik przez $n$: $\\frac{3n+1}{n} = 3 + \\frac{1}{n} \\to 3$."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$
`,jp=`---
options:
  - "$14$"
  - "$13$"
  - "$15$"
  - "$12$"
correct: 0
hint: "$a_5 = 3 \\cdot 5 - 1 = 15 - 1 = 14$."
---

Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:
`,Pp=`---
options:
  - "$a_n = 2n - 1$"
  - "$a_n = 2n + 1$"
  - "$a_n = n + 2$"
  - "$a_n = 2n$"
correct: 0
hint: "Ciąg: $1, 3, 5, 7, \\ldots$ — liczby nieparzyste. Wzór ogólny: $a_n = 2n - 1$."
---

Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:
`,Rp=`---
options:
  - "$a_5 = 17$"
  - "$a_5 = 15$"
  - "$a_5 = 13$"
  - "$a_5 = 20$"
correct: 0
hint: "$a_1 = 1$, $r = 4$, $a_5 = a_1 + 4r = 1 + 16 = 17$."
---

Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:
`,Dp=`---
options:
  - "{3,4}"
  - "{1,2,5,6}"
  - "{1,2,3,4,5,6}"
  - "{3}"
correct: 0
hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
---

A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =
`,Bp=`---
options:
  - "$\\{2, 4\\}$"
  - "$\\{1, 2, 3, 4, 5, 6\\}$"
  - "$\\{1, 3, 5, 6\\}$"
  - "$\\emptyset$"
correct: 0
hint: "Część wspólna $A \\cap B$ zawiera elementy należące do obu zbiorów jednocześnie."
---

Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:
`,Np=`---
options:
  - "$\\{1, 2, 3, 4, 6\\}$"
  - "$\\{2, 4\\}$"
  - "$\\{1, 3\\}$"
  - "$\\{6\\}$"
correct: 0
hint: "Suma $A \\cup B$ zawiera wszystkie elementy z obu zbiorów (bez powtórzeń)."
---

Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:
`,Lp=`---
options:
  - "39"
  - "25"
  - "49"
  - "74"
correct: 0
hint: "Tw. cosinusów: c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39."
---

W trójkącie a=5, b=7, C=60°. Wartość c² =
`,Op=`---
options:
  - "$c^2 = a^2 + b^2 - 2ab\\cos\\gamma$"
  - "$c^2 = a^2 + b^2 + 2ab\\cos\\gamma$"
  - "$c = a + b - 2\\cos\\gamma$"
  - "$\\cos\\gamma = a^2 + b^2 - c^2$"
correct: 0
hint: "Twierdzenie cosinusów: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$, gdzie $\\gamma$ to kąt między bokami $a$ i $b$."
---

Twierdzenie cosinusów brzmi:
`,Ip=`---
options:
  - "$\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma}$"
  - "$a \\cdot \\sin\\alpha = b \\cdot \\sin\\beta$"
  - "$\\frac{\\sin\\alpha}{a} = \\frac{\\sin\\beta}{b} + \\frac{\\sin\\gamma}{c}$"
  - "$a = b \\cdot \\sin\\alpha$"
correct: 0
hint: "Twierdzenie sinusów: iloraz każdego boku przez sinus przeciwległego kąta jest stały (= $2R$)."
---

Twierdzenie sinusów głosi, że w każdym trójkącie:
`,Fp=`---
options:
  - "12π"
  - "36π"
  - "9π"
  - "48π"
correct: 0
hint: "V = (1/3)πr²h = (1/3)·π·9·4 = 12π."
---

Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:
`,Hp=`---
options:
  - "$V = a^3$"
  - "$V = 6a^2$"
  - "$V = 3a^3$"
  - "$V = a^2 h$"
correct: 0
hint: "Objętość sześcianu o krawędzi $a$: $V = a \\cdot a \\cdot a = a^3$."
---

Wzór na objętość sześcianu o krawędzi $a$:
`,Wp=`---
options:
  - "$V = \\frac{4}{3}\\pi r^3$"
  - "$V = \\pi r^2 h$"
  - "$V = 4\\pi r^2$"
  - "$V = \\frac{1}{3}\\pi r^2 h$"
correct: 0
hint: "Objętość kuli o promieniu $r$: $V = \\frac{4}{3}\\pi r^3$."
---

Wzór na objętość kuli o promieniu $r$:
`,Up=`---
options:
  - "6"
  - "5"
  - "7"
  - "8"
correct: 0
hint: "Suma = 30, liczba wyrazów = 5. 30/5 = 6."
---

Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:
`,Vp=`---
options:
  - "Najczęściej powtarzająca się wartość"
  - "Środkowa wartość po posortowaniu"
  - "Suma podzielona przez liczbę elementów"
  - "Różnica między max i min"
correct: 0
hint: "Dominanta (moda) to wartość, która pojawia się najczęściej w danych."
---

Dominanta (moda) zbioru danych to:
`,Gp=`---
options:
  - "$8$"
  - "$4$"
  - "$2$"
  - "$16$"
correct: 0
hint: "Rozstęp = max $-$ min $= 12 - 4 = 8$."
---

Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:
`,Yp=`---
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
`,Xp=`---
options:
  - "$6$"
  - "$4$"
  - "$8$"
  - "$3$"
correct: 0
hint: "Twierdzenie Talesa: $\\frac{AB}{BC} = \\frac{DE}{EF}$. Mamy $\\frac{4}{8} = \\frac{3}{EF}$, więc $EF = 6$."
---

Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$
`,Qp=`---
options:
  - "Odcinki są proporcjonalne"
  - "Kąty są równe"
  - "Trójkąty są przystające"
  - "Pole trójkąta jest stałe"
correct: 0
hint: "Twierdzenie Talesa stwierdza, że prosta równoległa do boku trójkąta wyznacza proporcjonalne odcinki na pozostałych bokach."
---

Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?
`,Kp=`---
options:
  - "$\\frac{4}{5}$"
  - "$\\frac{3}{4}$"
  - "$\\frac{5}{3}$"
  - "$\\frac{1}{5}$"
correct: 0
hint: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$, więc $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, a $\\cos\\alpha = \\frac{4}{5}$ (dla kąta ostrego)."
---

W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:
`,Zp=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "Trójkąt prostokątny 30-60-90: $\\sin 30° = \\frac{1}{2}$."
---

Wartość $\\sin 30°$ wynosi:
`,Jp=`---
options:
  - "$1$"
  - "$0$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
correct: 0
hint: "Tożsamość Pitagorejska: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ dla każdego kąta $\\alpha$."
---

Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:
`,e5=`---
options:
  - "x = 30° i x = 150°"
  - "x = 30° tylko"
  - "x = 60° i x = 120°"
  - "x = 45°"
correct: 0
hint: "sin jest symetryczny względem 90°. sin(30°) = sin(150°) = 1/2."
---

Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:
`,t5=`---
options:
  - "$x = \\frac{\\pi}{6} + 2k\\pi$ lub $x = \\frac{5\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$ lub $x = -\\frac{\\pi}{6} + k\\pi$"
correct: 0
hint: "$\\sin x = \\frac{1}{2}$ dla $x = \\frac{\\pi}{6}$ (30°) i $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (150°), plus okresy $2\\pi$."
---

Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$
`,n5=`---
options:
  - "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = k\\pi$, $k \\in \\mathbb{Z}$"
correct: 0
hint: "$\\tan x = 1$ dla $x = \\frac{\\pi}{4}$. Tangens ma okres $\\pi$, więc ogólne rozwiązanie: $x = \\frac{\\pi}{4} + k\\pi$."
---

Rozwiąż równanie: $\\tan x = 1$
`,r5=`---
options:
  - "2sin(α)cos(α)"
  - "sin²(α)−cos²(α)"
  - "cos²(α)−sin²(α)"
  - "2cos²(α)−1"
correct: 0
hint: "Wzór na sinus kąta podwojonego: sin(2α) = 2sin(α)cos(α)."
---

sin(2α) jest równe:
`,i5=`---
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
`,u5=`---
options:
  - "5"
  - "7"
  - "√7"
  - "12"
correct: 0
hint: "|v| = √(3²+4²) = √25 = 5."
---

Długość wektora v = [3, 4] wynosi:
`,c5=`---
options:
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$"
  - "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|$"
  - "$\\vec{a} \\cdot \\vec{b} = (a_1+b_1, a_2+b_2)$"
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_2 - a_2 b_1$"
correct: 0
hint: "Iloczyn skalarny: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$. Wynikiem jest liczba, nie wektor."
---

Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:
`,d5=`---
options:
  - "$\\sqrt{13}$"
  - "$5$"
  - "$13$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|\\vec{v}| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$."
---

Długość wektora $\\vec{v} = (2, 3)$ wynosi:
`,f5=`---
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
`;function Ed(a){const n=a.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:a.trim()};const r=n[1],o=n[2].trim(),s={},u=r.split(/\r?\n/);let f=0;for(;f<u.length;){const p=u[f];if(p.startsWith("  ")){f++;continue}const v=p.match(/^(\w+):\s*(.*)/);if(!v){f++;continue}const w=v[1];let b=v[2].trim();if(b===""||b===null){const $=u[f+1]??"";if($.startsWith("  - ")){const T=[];for(f++;f<u.length&&u[f].startsWith("  - ");){let S=u[f].replace(/^  - /,"").trim();S=S.replace(/^["']|["']$/g,""),T.push(S),f++}s[w]=T.length>0?T:null}else if($.match(/^  \w+:/)){const T={};for(f++;f<u.length&&u[f].match(/^  \w+:/);){const S=u[f].match(/^  (\w+):\s*(.*)/);if(S){const P=S[1];let D=S[2].trim().replace(/^["']|["']$/g,"");T[P]=!isNaN(D)&&D!==""?Number(D):D}f++}s[w]=T}else s[w]=null,f++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?s[w]=Number(b):b==="true"?s[w]=!0:b==="false"?s[w]=!1:s[w]=b,f++}return{meta:s,body:o}}const p5=Object.assign({"./nodes/abs_value/node.md":Bf,"./nodes/analytic_geom/node.md":Nf,"./nodes/area_perimeter/node.md":Lf,"./nodes/arith_geom/node.md":Of,"./nodes/bernoulli/node.md":If,"./nodes/binom_theorem/node.md":Ff,"./nodes/circle_eq/node.md":Hf,"./nodes/combinations/node.md":Wf,"./nodes/complex/node.md":Uf,"./nodes/cond_prob/node.md":Vf,"./nodes/conic_sections/node.md":Gf,"./nodes/counting/node.md":Yf,"./nodes/data_basics/node.md":Xf,"./nodes/deriv_apps/node.md":Qf,"./nodes/derivative/node.md":Kf,"./nodes/distributions/node.md":Zf,"./nodes/factoring/node.md":Jf,"./nodes/fn_compositions/node.md":eh,"./nodes/fn_concept/node.md":th,"./nodes/fn_exp/node.md":nh,"./nodes/fn_linear/node.md":rh,"./nodes/fn_log/node.md":ih,"./nodes/fn_poly/node.md":ah,"./nodes/fn_quadratic/node.md":oh,"./nodes/fn_trig/node.md":lh,"./nodes/fractions/node.md":sh,"./nodes/geo_series/node.md":uh,"./nodes/integers/node.md":ch,"./nodes/integral/node.md":dh,"./nodes/limits/node.md":fh,"./nodes/linear_eq/node.md":hh,"./nodes/linear_ineq/node.md":mh,"./nodes/linear_sys/node.md":ph,"./nodes/log_eq/node.md":vh,"./nodes/log_exp/node.md":gh,"./nodes/logic_basics/node.md":yh,"./nodes/optimization_lp/node.md":xh,"./nodes/param_eq/node.md":wh,"./nodes/permutations/node.md":bh,"./nodes/planimetria_lp/node.md":$h,"./nodes/poly_roots/node.md":kh,"./nodes/polynomials/node.md":_h,"./nodes/powers/node.md":zh,"./nodes/probability/node.md":Sh,"./nodes/proof/node.md":Mh,"./nodes/pythagoras/node.md":Th,"./nodes/quadratic_eq/node.md":Ch,"./nodes/quadratic_ineq/node.md":Ah,"./nodes/rational_expr/node.md":Eh,"./nodes/seq_limits/node.md":qh,"./nodes/sequences/node.md":jh,"./nodes/sets/node.md":Ph,"./nodes/sin_cos_law/node.md":Rh,"./nodes/solid_geom/node.md":Dh,"./nodes/stat_lp/node.md":Bh,"./nodes/thales/node.md":Nh,"./nodes/trig_basic/node.md":Lh,"./nodes/trig_eq/node.md":Oh,"./nodes/trig_formulas/node.md":Ih,"./nodes/trig_lp/node.md":Fh,"./nodes/vectors/node.md":Hh,"./nodes/vieta/node.md":Wh}),ct=Object.entries(p5).map(([a,n])=>{var s;const r=(s=a.match(/\.\/nodes\/([^/]+)\/node\.md$/))==null?void 0:s[1],{meta:o}=Ed(n);return{id:r,label:o.label??r,labelPl:o.labelPl??o.label??r,scope:o.scope??"unknown",section:o.section??"SP8",level:o.level??1,x:o.x??0,y:o.y??0}}),v5=Object.assign({"./nodes/abs_value/questions/01.md":Uh,"./nodes/abs_value/questions/02.md":Vh,"./nodes/abs_value/questions/03.md":Gh,"./nodes/analytic_geom/questions/01.md":Yh,"./nodes/analytic_geom/questions/02.md":Xh,"./nodes/analytic_geom/questions/03.md":Qh,"./nodes/area_perimeter/questions/01.md":Kh,"./nodes/area_perimeter/questions/02.md":Zh,"./nodes/area_perimeter/questions/03.md":Jh,"./nodes/arith_geom/questions/01.md":em,"./nodes/arith_geom/questions/02.md":tm,"./nodes/arith_geom/questions/03.md":nm,"./nodes/bernoulli/questions/01.md":rm,"./nodes/bernoulli/questions/02.md":im,"./nodes/bernoulli/questions/03.md":am,"./nodes/binom_theorem/questions/01.md":om,"./nodes/binom_theorem/questions/02.md":lm,"./nodes/binom_theorem/questions/03.md":sm,"./nodes/circle_eq/questions/01.md":um,"./nodes/circle_eq/questions/02.md":cm,"./nodes/circle_eq/questions/03.md":dm,"./nodes/combinations/questions/01.md":fm,"./nodes/combinations/questions/02.md":hm,"./nodes/combinations/questions/03.md":mm,"./nodes/complex/questions/01.md":pm,"./nodes/complex/questions/02.md":vm,"./nodes/complex/questions/03.md":gm,"./nodes/cond_prob/questions/01.md":ym,"./nodes/cond_prob/questions/02.md":xm,"./nodes/cond_prob/questions/03.md":wm,"./nodes/conic_sections/questions/01.md":bm,"./nodes/conic_sections/questions/02.md":$m,"./nodes/conic_sections/questions/03.md":km,"./nodes/counting/questions/01.md":_m,"./nodes/counting/questions/02.md":zm,"./nodes/counting/questions/03.md":Sm,"./nodes/data_basics/questions/01.md":Mm,"./nodes/data_basics/questions/02.md":Tm,"./nodes/data_basics/questions/03.md":Cm,"./nodes/deriv_apps/questions/01.md":Am,"./nodes/deriv_apps/questions/02.md":Em,"./nodes/deriv_apps/questions/03.md":qm,"./nodes/derivative/questions/01.md":jm,"./nodes/derivative/questions/02.md":Pm,"./nodes/derivative/questions/03.md":Rm,"./nodes/distributions/questions/01.md":Dm,"./nodes/distributions/questions/02.md":Bm,"./nodes/distributions/questions/03.md":Nm,"./nodes/factoring/questions/01.md":Lm,"./nodes/factoring/questions/02.md":Om,"./nodes/factoring/questions/03.md":Im,"./nodes/fn_compositions/questions/01.md":Fm,"./nodes/fn_compositions/questions/02.md":Hm,"./nodes/fn_compositions/questions/03.md":Wm,"./nodes/fn_concept/questions/01.md":Um,"./nodes/fn_concept/questions/02.md":Vm,"./nodes/fn_concept/questions/03.md":Gm,"./nodes/fn_exp/questions/01.md":Ym,"./nodes/fn_exp/questions/02.md":Xm,"./nodes/fn_exp/questions/03.md":Qm,"./nodes/fn_linear/questions/01.md":Km,"./nodes/fn_linear/questions/02.md":Zm,"./nodes/fn_linear/questions/03.md":Jm,"./nodes/fn_log/questions/01.md":e3,"./nodes/fn_log/questions/02.md":t3,"./nodes/fn_log/questions/03.md":n3,"./nodes/fn_poly/questions/01.md":r3,"./nodes/fn_poly/questions/02.md":i3,"./nodes/fn_poly/questions/03.md":a3,"./nodes/fn_quadratic/questions/01.md":o3,"./nodes/fn_quadratic/questions/02.md":l3,"./nodes/fn_quadratic/questions/03.md":s3,"./nodes/fn_trig/questions/01.md":u3,"./nodes/fn_trig/questions/02.md":c3,"./nodes/fn_trig/questions/03.md":d3,"./nodes/fractions/questions/01.md":f3,"./nodes/fractions/questions/02.md":h3,"./nodes/fractions/questions/03.md":m3,"./nodes/geo_series/questions/01.md":p3,"./nodes/geo_series/questions/02.md":v3,"./nodes/geo_series/questions/03.md":g3,"./nodes/integers/questions/01.md":y3,"./nodes/integers/questions/02.md":x3,"./nodes/integers/questions/03.md":w3,"./nodes/integral/questions/01.md":b3,"./nodes/integral/questions/02.md":$3,"./nodes/integral/questions/03.md":k3,"./nodes/limits/questions/01.md":_3,"./nodes/limits/questions/02.md":z3,"./nodes/limits/questions/03.md":S3,"./nodes/linear_eq/questions/01.md":M3,"./nodes/linear_eq/questions/02.md":T3,"./nodes/linear_eq/questions/03.md":C3,"./nodes/linear_ineq/questions/01.md":A3,"./nodes/linear_ineq/questions/02.md":E3,"./nodes/linear_ineq/questions/03.md":q3,"./nodes/linear_sys/questions/01.md":j3,"./nodes/linear_sys/questions/02.md":P3,"./nodes/linear_sys/questions/03.md":R3,"./nodes/log_eq/questions/01.md":D3,"./nodes/log_eq/questions/02.md":B3,"./nodes/log_eq/questions/03.md":N3,"./nodes/log_exp/questions/01.md":L3,"./nodes/log_exp/questions/02.md":O3,"./nodes/log_exp/questions/03.md":I3,"./nodes/logic_basics/questions/01.md":F3,"./nodes/logic_basics/questions/02.md":H3,"./nodes/logic_basics/questions/03.md":W3,"./nodes/optimization_lp/questions/01.md":U3,"./nodes/optimization_lp/questions/02.md":V3,"./nodes/optimization_lp/questions/03.md":G3,"./nodes/param_eq/questions/01.md":Y3,"./nodes/param_eq/questions/02.md":X3,"./nodes/param_eq/questions/03.md":Q3,"./nodes/permutations/questions/01.md":K3,"./nodes/permutations/questions/02.md":Z3,"./nodes/permutations/questions/03.md":J3,"./nodes/planimetria_lp/questions/01.md":ep,"./nodes/planimetria_lp/questions/02.md":tp,"./nodes/planimetria_lp/questions/03.md":np,"./nodes/poly_roots/questions/01.md":rp,"./nodes/poly_roots/questions/02.md":ip,"./nodes/poly_roots/questions/03.md":ap,"./nodes/polynomials/questions/01.md":op,"./nodes/polynomials/questions/02.md":lp,"./nodes/polynomials/questions/03.md":sp,"./nodes/powers/questions/01.md":up,"./nodes/powers/questions/02.md":cp,"./nodes/powers/questions/03.md":dp,"./nodes/probability/questions/01.md":fp,"./nodes/probability/questions/02.md":hp,"./nodes/probability/questions/03.md":mp,"./nodes/proof/questions/01.md":pp,"./nodes/proof/questions/02.md":vp,"./nodes/proof/questions/03.md":gp,"./nodes/pythagoras/questions/01.md":yp,"./nodes/pythagoras/questions/02.md":xp,"./nodes/pythagoras/questions/03.md":wp,"./nodes/quadratic_eq/questions/01.md":bp,"./nodes/quadratic_eq/questions/02.md":$p,"./nodes/quadratic_eq/questions/03.md":kp,"./nodes/quadratic_ineq/questions/01.md":_p,"./nodes/quadratic_ineq/questions/02.md":zp,"./nodes/quadratic_ineq/questions/03.md":Sp,"./nodes/rational_expr/questions/01.md":Mp,"./nodes/rational_expr/questions/02.md":Tp,"./nodes/rational_expr/questions/03.md":Cp,"./nodes/seq_limits/questions/01.md":Ap,"./nodes/seq_limits/questions/02.md":Ep,"./nodes/seq_limits/questions/03.md":qp,"./nodes/sequences/questions/01.md":jp,"./nodes/sequences/questions/02.md":Pp,"./nodes/sequences/questions/03.md":Rp,"./nodes/sets/questions/01.md":Dp,"./nodes/sets/questions/02.md":Bp,"./nodes/sets/questions/03.md":Np,"./nodes/sin_cos_law/questions/01.md":Lp,"./nodes/sin_cos_law/questions/02.md":Op,"./nodes/sin_cos_law/questions/03.md":Ip,"./nodes/solid_geom/questions/01.md":Fp,"./nodes/solid_geom/questions/02.md":Hp,"./nodes/solid_geom/questions/03.md":Wp,"./nodes/stat_lp/questions/01.md":Up,"./nodes/stat_lp/questions/02.md":Vp,"./nodes/stat_lp/questions/03.md":Gp,"./nodes/thales/questions/01.md":Yp,"./nodes/thales/questions/02.md":Xp,"./nodes/thales/questions/03.md":Qp,"./nodes/trig_basic/questions/01.md":Kp,"./nodes/trig_basic/questions/02.md":Zp,"./nodes/trig_basic/questions/03.md":Jp,"./nodes/trig_eq/questions/01.md":e5,"./nodes/trig_eq/questions/02.md":t5,"./nodes/trig_eq/questions/03.md":n5,"./nodes/trig_formulas/questions/01.md":r5,"./nodes/trig_formulas/questions/02.md":i5,"./nodes/trig_formulas/questions/03.md":a5,"./nodes/trig_lp/questions/01.md":o5,"./nodes/trig_lp/questions/02.md":l5,"./nodes/trig_lp/questions/03.md":s5,"./nodes/vectors/questions/01.md":u5,"./nodes/vectors/questions/02.md":c5,"./nodes/vectors/questions/03.md":d5,"./nodes/vieta/questions/01.md":f5,"./nodes/vieta/questions/02.md":h5,"./nodes/vieta/questions/03.md":m5}),g5=(()=>{var n;const a={};for(const[r,o]of Object.entries(v5)){const s=(n=r.match(/\.\/nodes\/([^/]+)\/questions\//))==null?void 0:n[1];if(!s)continue;const{meta:u,body:f}=Ed(o);a[s]||(a[s]=[]),a[s].push({q:f,options:u.options??[],correct:u.correct??0,hint:u.hint??"",tests:u.tests&&typeof u.tests=="object"&&Object.keys(u.tests).length>0?u.tests:{[s]:1}})}return a})();function y5(a,n=[]){const r=g5[a];if(!r||r.length===0)return null;const o=r.map((u,f)=>({q:u,i:f})).filter(({i:u})=>!n.includes(u));if(o.length===0)return null;const s=o[Math.floor(Math.random()*o.length)];return{...s.q,index:s.i}}const d0=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]];function x5(a,n){const r={},o={};return a.forEach(s=>{r[s.id]=[],o[s.id]=[]}),n.forEach(([s,u])=>{var f,p;(f=r[u])==null||f.push(s),(p=o[s])==null||p.push(u)}),{prereqs:r,dependents:o}}function Ms(a,n){const r=Object.fromEntries(a.map(f=>[f.id,0])),o=Object.fromEntries(a.map(f=>[f.id,[]]));for(const[f,p]of n)r[p]!==void 0&&r[p]++,o[f]!==void 0&&o[f].push(p);const s=Object.fromEntries(a.map(f=>[f.id,0])),u=a.filter(f=>r[f.id]===0).map(f=>f.id);for(;u.length;){const f=u.shift();for(const p of o[f])s[p]=Math.max(s[p],s[f]+1),--r[p]===0&&u.push(p)}return s}const w5={id:"spectral",label:"Spectral"};function b5(a,n,r,o,s=80){const u=a.length,f=Object.fromEntries(a.map((H,Z)=>[H.id,Z])),p=Array.from({length:u},()=>new Float64Array(u));n.forEach(([H,Z])=>{const V=f[H],ge=f[Z];V==null||ge==null||(p[V][ge]=1,p[ge][V]=1)});const v=p.map(H=>H.reduce((Z,V)=>Z+V,0)),w=H=>H.map((Z,V)=>{let ge=0;for(let ze=0;ze<u;ze++)ge+=p[V][ze]*H[ze];return v[V]*H[V]-ge}),b=(H,Z)=>H.reduce((V,ge,ze)=>V+ge*Z[ze],0),$=H=>{const Z=Math.sqrt(b(H,H))||1;return H.map(V=>V/Z)},T=(H,Z)=>{let V=[...H];return Z.forEach(ge=>{const ze=b(V,ge);V=V.map((Te,Fe)=>Te-ze*ge[Fe])}),$(V)},S=(H,Z=400)=>{let V=$(Array.from({length:u},()=>Math.random()-.5));V=T(V,H);for(let ge=0;ge<Z;ge++){const ze=Math.max(...v)+1;V=T(V.map((Te,Fe)=>ze*Te-w(V)[Fe]),H)}return V},P=$(new Array(u).fill(1)),D=S([P]),j=S([P,D]),I=Math.min(...D),W=Math.max(...D),N=Math.min(...j),L=Math.max(...j),U=W-I<1e-6?1:(r-2*s)/(W-I),K=L-N<1e-6?1:(o-2*s)/(L-N);return a.map((H,Z)=>({id:H.id,x:s+(D[Z]-I)*U,y:s+(j[Z]-N)*K,vx:0,vy:0}))}const $5=Object.freeze(Object.defineProperty({__proto__:null,apply:b5,meta:w5},Symbol.toStringTag,{value:"Module"})),k5={id:"topoRank",label:"Topo Rank"},Ic=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function _5(a,n,r,o,s=80){const u=Ms(a,n),f=Math.max(...a.map(b=>u[b.id]??0),0),p={};for(const b of a){const $=u[b.id]??0;(p[$]??(p[$]=[])).push(b)}for(const b of Object.values(p))b.sort(($,T)=>{const S=Ic.indexOf($.scope),P=Ic.indexOf(T.scope);return(S===-1?999:S)-(P===-1?999:P)});const v=r-2*s,w=o-2*s;return a.map(b=>{const $=u[b.id]??0,T=p[$],S=T.indexOf(b);return{id:b.id,x:s+(S+.5)/T.length*v,y:s+$/Math.max(f,1)*w,vx:0,vy:0}})}const z5=Object.freeze(Object.defineProperty({__proto__:null,apply:_5,meta:k5},Symbol.toStringTag,{value:"Module"})),S5={id:"nPartite",label:"N-Partite Grid"};function M5(a,n,r,o,s=80){const u=Ms(a,n),f=Math.max(...a.map(S=>u[S.id]??0),0),p={};for(const S of a){const P=u[S.id]??0;(p[P]??(p[P]=[])).push(S)}const v={};for(const S of a)v[S.id]=[];for(const[S,P]of n)v[P]&&v[P].push(S);const w=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},$=r-2*s,T=o-2*s;for(let S=0;S<=f;S++){const P=p[S]??[];S===0?P.sort((j,I)=>{const W=w.indexOf(j.scope),N=w.indexOf(I.scope);return(W===-1?999:W)-(N===-1?999:N)}):P.sort((j,I)=>{const W=N=>{const L=v[N.id]??[];return L.length===0?r/2:L.reduce((U,K)=>{var H;return U+(((H=b[K])==null?void 0:H.x)??r/2)},0)/L.length};return W(j)-W(I)});const D=s+S/Math.max(f,1)*T;P.forEach((j,I)=>{const W=P.length===1?r/2:s+I/(P.length-1)*$;b[j.id]={x:W,y:D}})}return a.map(S=>{var P,D;return{id:S.id,x:((P=b[S.id])==null?void 0:P.x)??r/2,y:((D=b[S.id])==null?void 0:D.y)??o/2,vx:0,vy:0}})}const qd=Object.freeze(Object.defineProperty({__proto__:null,apply:M5,meta:S5},Symbol.toStringTag,{value:"Module"})),jd=[qd,z5,$5],Ts="nPartite";function T5(a){return jd.find(n=>n.meta.id===a)??qd}const Fa=1400,Cs=1e3,vi=80,Ha=Ms(ct,d0),C5=Math.max(...ct.map(a=>Ha[a.id]??0),0),Pd=Object.fromEntries(ct.map(a=>[a.id,vi+(Ha[a.id]??0)/Math.max(C5,1)*(Cs-2*vi)])),A5=(()=>{const a=Object.fromEntries(ct.map((n,r)=>[n.id,r]));return d0.map(([n,r])=>[a[n],a[r]]).filter(([n,r])=>n!=null&&r!=null)})(),Fc=Math.sqrt(Fa*Cs/ct.length)*.9,E5=.4,Hc=6,q5=.35,Wc=.012;function j5(a=Ts){return T5(a).apply(ct,d0,Fa,Cs,vi).map(o=>({id:o.id,x:o.x+(Math.random()-.5)*20,y:Pd[o.id]??o.y,vx:0,vy:0}))}function P5(a,n,r,o){const s=a.length,u=new Float64Array(s);for(let f=0;f<s;f++)for(let p=f+1;p<s;p++){if(Ha[a[f].id]!==Ha[a[p].id])continue;const v=a[f].x-a[p].x,w=Math.abs(v)||.1,b=Fc*Fc/(w*w),$=v<0?-1:1;u[f]+=$*b,u[p]-=$*b}for(const[f,p]of A5){const v=a[p].x-a[f].x;u[f]+=v*Wc,u[p]-=v*Wc}for(let f=0;f<s;f++)u[f]+=(Fa/2-a[f].x)*.003;return a.map((f,p)=>{if(f.id===n)return{...f,x:r,y:o,vx:0,vy:0};let v=(f.vx+u[p])*E5;Math.abs(v)>Hc&&(v*=Hc/Math.abs(v));const w=Pd[f.id]??f.y,b=f.y+(w-f.y)*q5;return{...f,vx:v,vy:0,x:Math.max(vi,Math.min(Fa-vi,f.x+v)),y:b}})}function Zl(a=Ts,n=300){let r=j5(a);for(let o=0;o<n;o++)r=P5(r,null,0,0);return Object.fromEntries(r.map(o=>[o.id,{x:o.x,y:o.y}]))}const Wa={surfaceHi:"#0d1520ee",border:"#1e2d45",textBody:"#c8d6e5",textDim:"#6b7d9a"},R5="'JetBrains Mono','SF Mono','Fira Code',monospace",di=(a,n)=>({padding:"3px 10px",borderRadius:20,fontSize:10,cursor:"pointer",border:a?`1px solid ${n}`:`1px solid ${Wa.border}`,background:a?`${n}22`:"transparent",color:a?n:Wa.textDim}),Uc=a=>({position:"absolute",right:16,top:16,width:280,background:Wa.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${a}40`,borderRadius:8,padding:"14px 16px",fontSize:11,color:Wa.textBody,zIndex:20,maxHeight:"85vh",overflowY:"auto"}),fi=a=>({padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",fontWeight:600,border:`1px solid ${a}`,background:`${a}22`,color:a});function D5(a){const[n,r]=re.useState({x:40,y:40,scale:.72}),[o,s]=re.useState("grab"),u=re.useRef(!1),f=re.useRef({x:0,y:0}),p=re.useRef(null),v=re.useRef(null),w=re.useCallback(N=>{N.preventDefault();const L=N.deltaY>0?.9:1.1;r(U=>{const K=Math.max(.15,Math.min(5,U.scale*L)),H=N.clientX,Z=N.clientY,V=H-(H-U.x)/U.scale*K,ge=Z-(Z-U.y)/U.scale*K;return{x:V,y:ge,scale:K}})},[]),b=re.useCallback((N,L)=>({x:(N-n.x)/n.scale,y:(L-n.y)/n.scale}),[n]),$=re.useCallback((N,L)=>{u.current=!0,s("grabbing"),f.current={x:N-n.x,y:L-n.y}},[n]),T=re.useCallback(N=>u.current?(r(L=>({...L,x:N.clientX-f.current.x,y:N.clientY-f.current.y})),!0):!1,[]),S=re.useCallback(()=>{u.current=!1,s("grab")},[]),P=(N,L)=>{const U=N.clientX-L.clientX,K=N.clientY-L.clientY;return Math.sqrt(U*U+K*K)},D=(N,L)=>({x:(N.clientX+L.clientX)/2,y:(N.clientY+L.clientY)/2}),j=re.useCallback(N=>{N.touches.length===1?(u.current=!0,r(L=>(f.current={x:N.touches[0].clientX-L.x,y:N.touches[0].clientY-L.y},L)),p.current=null,v.current=null):N.touches.length===2&&(u.current=!1,p.current=P(N.touches[0],N.touches[1]),v.current=D(N.touches[0],N.touches[1]))},[]),I=re.useCallback(N=>{if(N.preventDefault(),N.touches.length===1&&u.current)r(L=>({...L,x:N.touches[0].clientX-f.current.x,y:N.touches[0].clientY-f.current.y}));else if(N.touches.length===2&&p.current!==null){const L=P(N.touches[0],N.touches[1]),U=D(N.touches[0],N.touches[1]),K=L/p.current;r(H=>{const Z=Math.max(.15,Math.min(5,H.scale*K)),V=v.current.x,ge=v.current.y,ze=V-(V-H.x)/H.scale*Z,Te=ge-(ge-H.y)/H.scale*Z;return{x:ze,y:Te,scale:Z}}),p.current=L,v.current=U}},[]),W=re.useCallback(()=>{u.current=!1,p.current=null,v.current=null},[]);return re.useEffect(()=>{const N=a.current;if(N)return N.addEventListener("wheel",w,{passive:!1}),N.addEventListener("touchstart",j,{passive:!1}),N.addEventListener("touchmove",I,{passive:!1}),N.addEventListener("touchend",W,{passive:!1}),()=>{N.removeEventListener("wheel",w),N.removeEventListener("touchstart",j),N.removeEventListener("touchmove",I),N.removeEventListener("touchend",W)}},[a,w,j,I,W]),{viewTransform:n,setViewTransform:r,toCanvas:b,isPanning:u,panStart:f,startPan:$,cursorStyle:o,setCursorStyle:s,handleMouseMove:T,handleMouseUp:S,handleWheel:w}}function B5(a,n,r,o){const s=re.useRef(null),u=re.useRef({x:0,y:0}),f=re.useCallback((w,b,$)=>{const T=a(b,$),S=n.find(P=>P.id===w);S&&(s.current=w,u.current={x:T.x-S.x,y:T.y-S.y},o==null||o("grabbing"))},[a,n,o]),p=re.useCallback((w,b)=>{if(!s.current)return!1;const $=a(w,b),T=s.current;return r(S=>({...S,[T]:{x:$.x-u.current.x,y:$.y-u.current.y}})),!0},[a,r]),v=re.useCallback(()=>{s.current=null,o==null||o("grab")},[o]);return{draggingNode:s,startNodeDrag:f,handleDragMove:p,handleDragEnd:v}}function N5(a,n,r){var u;const o={...n},s=[a];for(;s.length;){const f=s.shift();o[f]!=="known"&&(o[f]="known",(u=r.prereqs[f])==null||u.forEach(p=>{o[p]!=="known"&&s.push(p)}))}return o}function Vc(a,n,r){var u;const o={...n},s=[a];for(;s.length;){const f=s.shift();o[f]!=="unknown"&&(o[f]="unknown",(u=r.dependents[f])==null||u.forEach(p=>{o[p]!=="unknown"&&s.push(p)}))}return o}function L5(a,n,r){return a.filter(o=>n[o.id]!=="known"&&n[o.id]!=="unknown").filter(o=>(r.prereqs[o.id]??[]).every(s=>n[s]==="known")).map(o=>o.id)}function O5(a,n,r,o=.5){var s,u,f;try{const p=1-o,v=a.filter($=>n[$.id]!=="known"&&n[$.id]!=="unknown");if(v.length===0)return null;const w=v.map($=>{const T=Rd($.id,n,r),S=Dd($.id,n,r),P=o*T+p*S;return{id:$.id,erv:P||0,ancestorsToReveal:T,descendantsToReveal:S}});return w.sort(($,T)=>T.erv-$.erv),((s=w[0])==null?void 0:s.id)||((u=v[0])==null?void 0:u.id)||null}catch(p){return console.error("pickNextQuestion error:",p),((f=a.filter(w=>n[w.id]!=="known"&&n[w.id]!=="unknown")[0])==null?void 0:f.id)||null}}function Rd(a,n,r){const o=new Set,s=[...r.prereqs[a]??[]];let u=0;for(;s.length>0;){const f=s.shift();if(o.has(f))continue;o.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const p=r.prereqs[f]??[];for(const v of p)o.has(v)||s.push(v)}return u}function Dd(a,n,r){const o=new Set,s=[...r.dependents[a]??[]];let u=0;for(;s.length>0;){const f=s.shift();if(o.has(f))continue;o.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const p=r.dependents[f]??[];for(const v of p)o.has(v)||s.push(v)}return u}function I5(a,n,r,o=.5){try{const s=a.filter(w=>n[w.id]!=="known"&&n[w.id]!=="unknown");if(s.length===0)return 0;const u=1-o;let f=0;for(const w of s){const b=Rd(w.id,n,r),$=Dd(w.id,n,r),T=o*b+u*$;f+=T||0}if(!f||f===0)return s.length;const p=s.length,v=p*p/f;return isNaN(v)?s.length:Math.ceil(v)}catch(s){return console.error("estimateRemainingQuestions error:",s),null}}function F5(a,n,r){const o={...a};for(const[s,u]of Object.entries(n)){const f=o[s]??{alpha:1,beta:1};o[s]={alpha:f.alpha+(r?u:0),beta:f.beta+(r?0:u)}}return o}function H5(a,n){const r={};for(const o of a){const s=n[o]??{alpha:1,beta:1},u=s.alpha+s.beta,f=s.alpha/u;f>.75&&u>2?r[o]="known":f<.25&&u>2?r[o]="unknown":r[o]="uncertain"}return r}function W5(a,n,r){const o=new Set,s=new Set(r.map(f=>f.id)),u=[a];for(;u.length;){const f=u.shift();if(!o.has(f)&&s.has(f)){o.add(f);for(const p of n.prereqs[f]??[])o.has(p)||u.push(p)}}return o}function U5(a,n,r,o,s){var p;const u=a.filter(v=>r[v]==="uncertain");if(u.length===0)return null;const f=u.map(v=>{const w=n[v]??{alpha:1,beta:1},b=w.alpha+w.beta,$=w.alpha/b,T=1-$,S=new Set(a);let P=0;const D=[...o.prereqs[v]??[]],j=new Set;for(;D.length;){const U=D.shift();if(!j.has(U)){j.add(U),S.has(U)&&r[U]==="uncertain"&&P++;for(const K of o.prereqs[U]??[])j.has(K)||D.push(K)}}let I=0;const W=[...o.dependents[v]??[]],N=new Set;for(;W.length;){const U=W.shift();if(!N.has(U)){N.add(U),S.has(U)&&r[U]==="uncertain"&&I++;for(const K of o.dependents[U]??[])N.has(K)||W.push(K)}}const L=$*P+T*I;return{id:v,erv:L,strength:b}});return f.sort((v,w)=>Math.abs(v.erv-w.erv)>.01?w.erv-v.erv:v.strength-w.strength),((p=f[0])==null?void 0:p.id)??u[0]}function V5(a,n){return a.every(r=>n[r]!=="uncertain")}function G5(a,n){return a.every(r=>n[r.id]==="known"||n[r.id]==="unknown")}function Y5(a){const[n,r]=re.useState(!1),[o,s]=re.useState("quick"),[u,f]=re.useState({}),[p,v]=re.useState(null),[w,b]=re.useState(null),[$,T]=re.useState({correct:0,incorrect:0,questionsAnswered:0}),[S,P]=re.useState(new Set),[D,j]=re.useState({}),I=re.useMemo(()=>{const ye=$.correct+$.incorrect;return ye===0?.5:($.correct+.5)/(ye+1)},[$]),W=$.questionsAnswered,N=re.useMemo(()=>n&&o==="quick"?L5(ct,u,a):[],[n,o,u,a]),L=re.useMemo(()=>Object.keys(u).length>0||$.questionsAnswered>0,[u,$]),U=L?N:[],K=re.useMemo(()=>n&&o==="quick"?O5(ct,u,a,I):null,[n,o,u,a,I]),H=re.useMemo(()=>n&&o==="quick"?I5(ct,u,a,I):null,[n,o,u,a,I]),Z=re.useMemo(()=>n&&o==="quick"&&L&&G5(ct,u),[n,o,L,u]),V=re.useMemo(()=>!n||o!=="deepdive"||!w?[]:[...W5(w,a,ct)],[n,o,w,a]),ge=re.useMemo(()=>o!=="deepdive"?{}:H5(V,D),[o,V,D]),ze=re.useMemo(()=>!n||o!=="deepdive"||V.length===0?null:U5(V,D,ge,a),[n,o,V,D,ge,a]),Te=re.useMemo(()=>!n||o!=="deepdive"||V.length===0?!1:V5(V,ge),[n,o,V,ge]),Fe=re.useCallback((ye,ne)=>n?o==="deepdive"?V.includes(ye)?(ge[ye]!=="uncertain"||v(ye),!0):!1:u[ye]==="unknown"?!0:ne?(f(de=>Vc(ye,de,a)),v(null),!0):u[ye]==="known"?(f(de=>{const ae={...de};return delete ae[ye],ae}),v(null),!0):(v(ye),!0):!1,[n,o,u,a,V,ge]),Ie=re.useCallback((ye,ne,de,ae)=>{if(o==="deepdive"){const E=(de==null?void 0:de.tests)??{[ye]:1};j(F=>F5(F,E,ne))}else f(E=>ne?N5(ye,E,a):Vc(ye,E,a));typeof ae=="number"&&P(E=>new Set([...E,`${ye}:${ae}`])),T(E=>({correct:E.correct+(ne?1:0),incorrect:E.incorrect+(ne?0:1),questionsAnswered:E.questionsAnswered+1})),v(null)},[o,a]),Ve=re.useCallback(()=>{s("quick"),f({}),j({}),v(null),b(null),T({correct:0,incorrect:0,questionsAnswered:0}),P(new Set)},[]),We=re.useCallback(ye=>{s("deepdive"),b(ye),j({}),f({}),v(null),T({correct:0,incorrect:0,questionsAnswered:0}),P(new Set),r(!0)},[]);return{diagMode:n,setDiagMode:r,mode:o,setMode:s,quizNode:p,setQuizNode:v,questionsAnswered:W,answeredQuestions:S,getAnsweredIndices:ye=>{const ne=[];return S.forEach(de=>{const[ae,E]=de.split(":");ae===ye&&ne.push(parseInt(E,10))}),ne},handleDiagClick:Fe,handleQuizAnswer:Ie,resetDiagnostic:Ve,startDeepDive:We,targetNode:w,belief:u,frontier:N,visibleFrontier:U,hasStarted:L,nextSuggestedId:K,expectedRemaining:H,pCorrect:I,sessionComplete:Z,betaBeliefs:D,subgraphIds:V,ddClassification:ge,ddNextNodeId:ze,ddComplete:Te}}function Gc(a){return 6+a.level*2}function X5({edges:a,nodes:n,highlightedIds:r}){const o=re.useMemo(()=>Object.fromEntries(n.map(s=>[s.id,s])),[n]);return M.jsx("g",{children:a.map(([s,u])=>{const f=o[s],p=o[u];if(!f||!p)return null;const v=(r==null?void 0:r.has(s))&&(r==null?void 0:r.has(u)),w=r&&!v,b=p.x-f.x,$=p.y-f.y,T=Math.sqrt(b*b+$*$)||1,S=Gc(p)+3,P=p.x-b/T*S,D=p.y-$/T*S,j=Gc(f)+2,I=f.x+b/T*j,W=f.y+$/T*j,N=w?"#0f1825":v?"#4a9eff":"#2a3f5a",L=v?1.8:1,U=w?.15:v?1:.55,K=w?"url(#arrow-dim)":v?"url(#arrow-hi)":"url(#arrow-default)";return M.jsx("line",{x1:I,y1:W,x2:P,y2:D,stroke:N,strokeWidth:L,opacity:U,markerEnd:K},`${s}-${u}`)})})}const Qa={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},g0={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},f0={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}};function Q5(a){return 6+a.level*2}function K5(a){return a<.4?8:a<.65?13:a<1?18:28}function Z5({nodes:a,filteredIds:n,highlightedIds:r,selected:o,onSelect:s,onHover:u,lang:f,diagMode:p,belief:v,frontier:w,scale:b}){return M.jsx("g",{children:a.map($=>{const T=Q5($),S=g0[$.scope]||"#aaa",P=n&&!n.has($.id),D=r==null?void 0:r.has($.id),j=o===$.id,I=r&&!D||P,W=f==="pl"?$.labelPl:$.label,N=K5(b??1);let L=S,U=I?.15:.9,K=I?.2:.85,H=null,Z=2;if(p){const V=v[$.id],ge=w.includes($.id);U=P?.1:.9,K=P?.15:.9,V==="known"?(L="#27ae60",H="#2ecc71"):V==="unknown"?(L="#c0392b",U=P?.1:.5,H="#e74c3c"):ge?(L="#f39c12",H="#f1c40f",Z=3):(L=S,U=P?.1:.35)}return M.jsxs("g",{"data-node-id":$.id,style:{cursor:"pointer"},onClick:()=>s($.id===o?null:$.id),onMouseEnter:()=>u($.id),onMouseLeave:()=>u(null),children:[(j||p&&H)&&M.jsx("circle",{cx:$.x,cy:$.y,r:T+(j?5:4),fill:"none",stroke:j?S:H,strokeWidth:j?2:Z,opacity:j?.5:.9}),M.jsx("circle",{cx:$.x,cy:$.y,r:T,fill:L,fillOpacity:U,stroke:!p&&(D||j)?S:"none",strokeWidth:1.5}),M.jsx("text",{x:$.x,y:$.y+T+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:K,style:{pointerEvents:"none",userSelect:"none"},children:W.length>N?W.slice(0,N-1)+"…":W})]},$.id)})})}function J5({nodeId:a,nodes:n,adjacency:r,lang:o}){var $,T;const s=n.find(S=>S.id===a);if(!s)return null;const u=g0[s.scope]||"#aaa",f=o==="pl"?s.labelPl:s.label,p=r.prereqs[a]||[],v=r.dependents[a]||[],w=Object.fromEntries(n.map(S=>[S.id,S])),b=S=>{var P,D;return o==="pl"?(P=w[S])==null?void 0:P.labelPl:(D=w[S])==null?void 0:D.label};return M.jsxs("div",{style:{position:"absolute",right:16,top:70,width:240,background:"#0d1520",border:`1px solid ${u}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",lineHeight:1.6},children:[M.jsx("div",{style:{color:u,fontWeight:700,fontSize:13,marginBottom:6},children:f}),M.jsxs("div",{style:{color:"#6b7d9a",fontSize:10,marginBottom:8},children:[($=Qa[s.section])==null?void 0:$.label," · ",(T=f0[s.scope])==null?void 0:T[o==="pl"?"pl":"en"]," · Level ",s.level]}),p.length>0&&M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{color:"#4a9eff",fontSize:10,marginBottom:4},children:"Prerequisites:"}),p.map(S=>M.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:10},children:["← ",b(S)]},S))]}),v.length>0&&M.jsxs("div",{style:{marginTop:8},children:[M.jsx("div",{style:{color:"#3dc9b0",fontSize:10,marginBottom:4},children:"Enables:"}),v.map(S=>M.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:10},children:["→ ",b(S)]},S))]})]})}class Ot{constructor(n,r,o){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=o}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Ot(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Vt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Vt(r,Ot.range(this,n))}}class ee{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var o="KaTeX parse error: "+n,s,u,f=r&&r.loc;if(f&&f.start<=f.end){var p=f.lexer.input;s=f.start,u=f.end,s===p.length?o+=" at end of input: ":o+=" at position "+(s+1)+": ";var v=p.slice(s,u).replace(/[^]/g,"$&̲"),w;s>15?w="…"+p.slice(s-15,s):w=p.slice(0,s);var b;u+15<p.length?b=p.slice(u,u+15)+"…":b=p.slice(u),o+=w+v+b}var $=new Error(o);return $.name="ParseError",$.__proto__=ee.prototype,$.position=s,s!=null&&u!=null&&($.length=u-s),$.rawMessage=n,$}}ee.prototype.__proto__=Error.prototype;var e6=/([A-Z])/g,As=a=>a.replace(e6,"-$1").toLowerCase(),t6={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},n6=/[&><"']/g,St=a=>String(a).replace(n6,n=>t6[n]),mi=a=>a.type==="ordgroup"||a.type==="color"?a.body.length===1?mi(a.body[0]):a:a.type==="font"?mi(a.body):a,r6=new Set(["mathord","textord","atom"]),On=a=>r6.has(mi(a).type),i6=a=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(a);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},Oa={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:a=>"#"+a},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(a,n)=>(n.push(a),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:a=>Math.max(0,a),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:a=>Math.max(0,a),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:a=>Math.max(0,a),cli:"-e, --max-expand <n>",cliProcessor:a=>a==="Infinity"?1/0:parseInt(a)},globalGroup:{type:"boolean",cli:!1}};function a6(a){if(a.default)return a.default;var n=a.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Es{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in Oa)if(Oa.hasOwnProperty(r)){var o=Oa[r];this[r]=n[r]!==void 0?o.processor?o.processor(n[r]):n[r]:a6(o)}}reportNonstrict(n,r,o){var s=this.strict;if(typeof s=="function"&&(s=s(n,r,o)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new ee("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),o);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,o){var s=this.strict;if(typeof s=="function")try{s=s(n,r,o)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=i6(n.url);if(r==null)return!1;n.protocol=r}var o=typeof this.trust=="function"?this.trust(n):this.trust;return!!o}}class dr{constructor(n,r,o){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=o}sup(){return bn[o6[this.id]]}sub(){return bn[l6[this.id]]}fracNum(){return bn[s6[this.id]]}fracDen(){return bn[u6[this.id]]}cramp(){return bn[c6[this.id]]}text(){return bn[d6[this.id]]}isTight(){return this.size>=2}}var qs=0,Ua=1,h0=2,Nn=3,gi=4,tn=5,m0=6,qt=7,bn=[new dr(qs,0,!1),new dr(Ua,0,!0),new dr(h0,1,!1),new dr(Nn,1,!0),new dr(gi,2,!1),new dr(tn,2,!0),new dr(m0,3,!1),new dr(qt,3,!0)],o6=[gi,tn,gi,tn,m0,qt,m0,qt],l6=[tn,tn,tn,tn,qt,qt,qt,qt],s6=[h0,Nn,gi,tn,m0,qt,m0,qt],u6=[Nn,Nn,tn,tn,qt,qt,qt,qt],c6=[Ua,Ua,Nn,Nn,tn,tn,qt,qt],d6=[qs,Ua,h0,Nn,h0,Nn,h0,Nn],Me={DISPLAY:bn[qs],TEXT:bn[h0],SCRIPT:bn[gi],SCRIPTSCRIPT:bn[m0]},ps=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function f6(a){for(var n=0;n<ps.length;n++)for(var r=ps[n],o=0;o<r.blocks.length;o++){var s=r.blocks[o];if(a>=s[0]&&a<=s[1])return r.name}return null}var Ia=[];ps.forEach(a=>a.blocks.forEach(n=>Ia.push(...n)));function Bd(a){for(var n=0;n<Ia.length;n+=2)if(a>=Ia[n]&&a<=Ia[n+1])return!0;return!1}var c0=80,h6=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},m6=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},p6=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},v6=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},g6=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},y6=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},x6=function(n,r,o){var s=o-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},w6=function(n,r,o){r=1e3*r;var s="";switch(n){case"sqrtMain":s=h6(r,c0);break;case"sqrtSize1":s=m6(r,c0);break;case"sqrtSize2":s=p6(r,c0);break;case"sqrtSize3":s=v6(r,c0);break;case"sqrtSize4":s=g6(r,c0);break;case"sqrtTall":s=x6(r,c0,o)}return s},b6=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},Yc={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},$6=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class xi{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var $n={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ea={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Xc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function k6(a,n){$n[a]=n}function js(a,n,r){if(!$n[n])throw new Error("Font metrics not found for font: "+n+".");var o=a.charCodeAt(0),s=$n[n][o];if(!s&&a[0]in Xc&&(o=Xc[a[0]].charCodeAt(0),s=$n[n][o]),!s&&r==="text"&&Bd(o)&&(s=$n[n][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var Jl={};function _6(a){var n;if(a>=5?n=0:a>=3?n=1:n=2,!Jl[n]){var r=Jl[n]={cssEmPerMu:Ea.quad[n]/18};for(var o in Ea)Ea.hasOwnProperty(o)&&(r[o]=Ea[o][n])}return Jl[n]}var z6=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Qc=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Kc=function(n,r){return r.size<2?n:z6[n-1][r.size-1]};class Bn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Bn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Qc[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return new Bn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:Kc(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Qc[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=Kc(Bn.BASESIZE,n);return this.size===r&&this.textSize===Bn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Bn.BASESIZE?["sizing","reset-size"+this.size,"size"+Bn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=_6(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Bn.BASESIZE=6;var vs={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},S6={ex:!0,em:!0,mu:!0},Nd=function(n){return typeof n!="string"&&(n=n.unit),n in vs||n in S6||n==="ex"},nt=function(n,r){var o;if(n.unit in vs)o=vs[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")o=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,n.unit==="ex")o=s.fontMetrics().xHeight;else if(n.unit==="em")o=s.fontMetrics().quad;else throw new ee("Invalid unit: '"+n.unit+"'");s!==r&&(o*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*o,r.maxSize)},oe=function(n){return+n.toFixed(4)+"em"},mr=function(n){return n.filter(r=>r).join(" ")},Ld=function(n,r,o){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=o||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},Od=function(n){var r=document.createElement(n);r.className=mr(this.classes);for(var o in this.style)this.style.hasOwnProperty(o)&&(r.style[o]=this.style[o]);for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&r.setAttribute(s,this.attributes[s]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},M6=/[\s"'>/=\x00-\x1f]/,Id=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+St(mr(this.classes))+'"');var o="";for(var s in this.style)this.style.hasOwnProperty(s)&&(o+=As(s)+":"+this.style[s]+";");o&&(r+=' style="'+St(o)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(M6.test(u))throw new ee("Invalid attribute name '"+u+"'");r+=" "+u+'="'+St(this.attributes[u])+'"'}r+=">";for(var f=0;f<this.children.length;f++)r+=this.children[f].toMarkup();return r+="</"+n+">",r};class wi{constructor(n,r,o,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Ld.call(this,n,o,s),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Od.call(this,"span")}toMarkup(){return Id.call(this,"span")}}class Ps{constructor(n,r,o,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Ld.call(this,r,s),this.children=o||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Od.call(this,"a")}toMarkup(){return Id.call(this,"a")}}class T6{constructor(n,r,o){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=o}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+St(this.src)+'"'+(' alt="'+St(this.alt)+'"'),r="";for(var o in this.style)this.style.hasOwnProperty(o)&&(r+=As(o)+":"+this.style[o]+";");return r&&(n+=' style="'+St(r)+'"'),n+="'/>",n}}var C6={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class nn{constructor(n,r,o,s,u,f,p,v){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=o||0,this.italic=s||0,this.skew=u||0,this.width=f||0,this.classes=p||[],this.style=v||{},this.maxFontSize=0;var w=f6(this.text.charCodeAt(0));w&&this.classes.push(w+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=C6[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=oe(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=mr(this.classes));for(var o in this.style)this.style.hasOwnProperty(o)&&(r=r||document.createElement("span"),r.style[o]=this.style[o]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=St(mr(this.classes)),r+='"');var o="";this.italic>0&&(o+="margin-right:"+this.italic+"em;");for(var s in this.style)this.style.hasOwnProperty(s)&&(o+=As(s)+":"+this.style[s]+";");o&&(n=!0,r+=' style="'+St(o)+'"');var u=St(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Ln{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var o in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,o)&&r.setAttribute(o,this.attributes[o]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+St(this.attributes[r])+'"');n+=">";for(var o=0;o<this.children.length;o++)n+=this.children[o].toMarkup();return n+="</svg>",n}}class pr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Yc[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+St(this.alternate)+'"/>':'<path d="'+St(Yc[this.pathName])+'"/>'}}class gs{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var o in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,o)&&r.setAttribute(o,this.attributes[o]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+St(this.attributes[r])+'"');return n+="/>",n}}function Zc(a){if(a instanceof nn)return a;throw new Error("Expected symbolNode but got "+String(a)+".")}function A6(a){if(a instanceof wi)return a;throw new Error("Expected span<HtmlDomNode> but got "+String(a)+".")}var E6={bin:1,close:1,inner:1,open:1,punct:1,rel:1},q6={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ye={math:{},text:{}};function d(a,n,r,o,s,u){Ye[a][s]={font:n,group:r,replace:o},u&&o&&(Ye[a][o]=Ye[a][s])}var m="math",Y="text",g="main",_="ams",Ze="accent-token",ce="bin",jt="close",y0="inner",be="mathord",ft="op-token",Gt="open",Ka="punct",z="rel",In="spacing",A="textord";d(m,g,z,"≡","\\equiv",!0);d(m,g,z,"≺","\\prec",!0);d(m,g,z,"≻","\\succ",!0);d(m,g,z,"∼","\\sim",!0);d(m,g,z,"⊥","\\perp");d(m,g,z,"⪯","\\preceq",!0);d(m,g,z,"⪰","\\succeq",!0);d(m,g,z,"≃","\\simeq",!0);d(m,g,z,"∣","\\mid",!0);d(m,g,z,"≪","\\ll",!0);d(m,g,z,"≫","\\gg",!0);d(m,g,z,"≍","\\asymp",!0);d(m,g,z,"∥","\\parallel");d(m,g,z,"⋈","\\bowtie",!0);d(m,g,z,"⌣","\\smile",!0);d(m,g,z,"⊑","\\sqsubseteq",!0);d(m,g,z,"⊒","\\sqsupseteq",!0);d(m,g,z,"≐","\\doteq",!0);d(m,g,z,"⌢","\\frown",!0);d(m,g,z,"∋","\\ni",!0);d(m,g,z,"∝","\\propto",!0);d(m,g,z,"⊢","\\vdash",!0);d(m,g,z,"⊣","\\dashv",!0);d(m,g,z,"∋","\\owns");d(m,g,Ka,".","\\ldotp");d(m,g,Ka,"⋅","\\cdotp");d(m,g,A,"#","\\#");d(Y,g,A,"#","\\#");d(m,g,A,"&","\\&");d(Y,g,A,"&","\\&");d(m,g,A,"ℵ","\\aleph",!0);d(m,g,A,"∀","\\forall",!0);d(m,g,A,"ℏ","\\hbar",!0);d(m,g,A,"∃","\\exists",!0);d(m,g,A,"∇","\\nabla",!0);d(m,g,A,"♭","\\flat",!0);d(m,g,A,"ℓ","\\ell",!0);d(m,g,A,"♮","\\natural",!0);d(m,g,A,"♣","\\clubsuit",!0);d(m,g,A,"℘","\\wp",!0);d(m,g,A,"♯","\\sharp",!0);d(m,g,A,"♢","\\diamondsuit",!0);d(m,g,A,"ℜ","\\Re",!0);d(m,g,A,"♡","\\heartsuit",!0);d(m,g,A,"ℑ","\\Im",!0);d(m,g,A,"♠","\\spadesuit",!0);d(m,g,A,"§","\\S",!0);d(Y,g,A,"§","\\S");d(m,g,A,"¶","\\P",!0);d(Y,g,A,"¶","\\P");d(m,g,A,"†","\\dag");d(Y,g,A,"†","\\dag");d(Y,g,A,"†","\\textdagger");d(m,g,A,"‡","\\ddag");d(Y,g,A,"‡","\\ddag");d(Y,g,A,"‡","\\textdaggerdbl");d(m,g,jt,"⎱","\\rmoustache",!0);d(m,g,Gt,"⎰","\\lmoustache",!0);d(m,g,jt,"⟯","\\rgroup",!0);d(m,g,Gt,"⟮","\\lgroup",!0);d(m,g,ce,"∓","\\mp",!0);d(m,g,ce,"⊖","\\ominus",!0);d(m,g,ce,"⊎","\\uplus",!0);d(m,g,ce,"⊓","\\sqcap",!0);d(m,g,ce,"∗","\\ast");d(m,g,ce,"⊔","\\sqcup",!0);d(m,g,ce,"◯","\\bigcirc",!0);d(m,g,ce,"∙","\\bullet",!0);d(m,g,ce,"‡","\\ddagger");d(m,g,ce,"≀","\\wr",!0);d(m,g,ce,"⨿","\\amalg");d(m,g,ce,"&","\\And");d(m,g,z,"⟵","\\longleftarrow",!0);d(m,g,z,"⇐","\\Leftarrow",!0);d(m,g,z,"⟸","\\Longleftarrow",!0);d(m,g,z,"⟶","\\longrightarrow",!0);d(m,g,z,"⇒","\\Rightarrow",!0);d(m,g,z,"⟹","\\Longrightarrow",!0);d(m,g,z,"↔","\\leftrightarrow",!0);d(m,g,z,"⟷","\\longleftrightarrow",!0);d(m,g,z,"⇔","\\Leftrightarrow",!0);d(m,g,z,"⟺","\\Longleftrightarrow",!0);d(m,g,z,"↦","\\mapsto",!0);d(m,g,z,"⟼","\\longmapsto",!0);d(m,g,z,"↗","\\nearrow",!0);d(m,g,z,"↩","\\hookleftarrow",!0);d(m,g,z,"↪","\\hookrightarrow",!0);d(m,g,z,"↘","\\searrow",!0);d(m,g,z,"↼","\\leftharpoonup",!0);d(m,g,z,"⇀","\\rightharpoonup",!0);d(m,g,z,"↙","\\swarrow",!0);d(m,g,z,"↽","\\leftharpoondown",!0);d(m,g,z,"⇁","\\rightharpoondown",!0);d(m,g,z,"↖","\\nwarrow",!0);d(m,g,z,"⇌","\\rightleftharpoons",!0);d(m,_,z,"≮","\\nless",!0);d(m,_,z,"","\\@nleqslant");d(m,_,z,"","\\@nleqq");d(m,_,z,"⪇","\\lneq",!0);d(m,_,z,"≨","\\lneqq",!0);d(m,_,z,"","\\@lvertneqq");d(m,_,z,"⋦","\\lnsim",!0);d(m,_,z,"⪉","\\lnapprox",!0);d(m,_,z,"⊀","\\nprec",!0);d(m,_,z,"⋠","\\npreceq",!0);d(m,_,z,"⋨","\\precnsim",!0);d(m,_,z,"⪹","\\precnapprox",!0);d(m,_,z,"≁","\\nsim",!0);d(m,_,z,"","\\@nshortmid");d(m,_,z,"∤","\\nmid",!0);d(m,_,z,"⊬","\\nvdash",!0);d(m,_,z,"⊭","\\nvDash",!0);d(m,_,z,"⋪","\\ntriangleleft");d(m,_,z,"⋬","\\ntrianglelefteq",!0);d(m,_,z,"⊊","\\subsetneq",!0);d(m,_,z,"","\\@varsubsetneq");d(m,_,z,"⫋","\\subsetneqq",!0);d(m,_,z,"","\\@varsubsetneqq");d(m,_,z,"≯","\\ngtr",!0);d(m,_,z,"","\\@ngeqslant");d(m,_,z,"","\\@ngeqq");d(m,_,z,"⪈","\\gneq",!0);d(m,_,z,"≩","\\gneqq",!0);d(m,_,z,"","\\@gvertneqq");d(m,_,z,"⋧","\\gnsim",!0);d(m,_,z,"⪊","\\gnapprox",!0);d(m,_,z,"⊁","\\nsucc",!0);d(m,_,z,"⋡","\\nsucceq",!0);d(m,_,z,"⋩","\\succnsim",!0);d(m,_,z,"⪺","\\succnapprox",!0);d(m,_,z,"≆","\\ncong",!0);d(m,_,z,"","\\@nshortparallel");d(m,_,z,"∦","\\nparallel",!0);d(m,_,z,"⊯","\\nVDash",!0);d(m,_,z,"⋫","\\ntriangleright");d(m,_,z,"⋭","\\ntrianglerighteq",!0);d(m,_,z,"","\\@nsupseteqq");d(m,_,z,"⊋","\\supsetneq",!0);d(m,_,z,"","\\@varsupsetneq");d(m,_,z,"⫌","\\supsetneqq",!0);d(m,_,z,"","\\@varsupsetneqq");d(m,_,z,"⊮","\\nVdash",!0);d(m,_,z,"⪵","\\precneqq",!0);d(m,_,z,"⪶","\\succneqq",!0);d(m,_,z,"","\\@nsubseteqq");d(m,_,ce,"⊴","\\unlhd");d(m,_,ce,"⊵","\\unrhd");d(m,_,z,"↚","\\nleftarrow",!0);d(m,_,z,"↛","\\nrightarrow",!0);d(m,_,z,"⇍","\\nLeftarrow",!0);d(m,_,z,"⇏","\\nRightarrow",!0);d(m,_,z,"↮","\\nleftrightarrow",!0);d(m,_,z,"⇎","\\nLeftrightarrow",!0);d(m,_,z,"△","\\vartriangle");d(m,_,A,"ℏ","\\hslash");d(m,_,A,"▽","\\triangledown");d(m,_,A,"◊","\\lozenge");d(m,_,A,"Ⓢ","\\circledS");d(m,_,A,"®","\\circledR");d(Y,_,A,"®","\\circledR");d(m,_,A,"∡","\\measuredangle",!0);d(m,_,A,"∄","\\nexists");d(m,_,A,"℧","\\mho");d(m,_,A,"Ⅎ","\\Finv",!0);d(m,_,A,"⅁","\\Game",!0);d(m,_,A,"‵","\\backprime");d(m,_,A,"▲","\\blacktriangle");d(m,_,A,"▼","\\blacktriangledown");d(m,_,A,"■","\\blacksquare");d(m,_,A,"⧫","\\blacklozenge");d(m,_,A,"★","\\bigstar");d(m,_,A,"∢","\\sphericalangle",!0);d(m,_,A,"∁","\\complement",!0);d(m,_,A,"ð","\\eth",!0);d(Y,g,A,"ð","ð");d(m,_,A,"╱","\\diagup");d(m,_,A,"╲","\\diagdown");d(m,_,A,"□","\\square");d(m,_,A,"□","\\Box");d(m,_,A,"◊","\\Diamond");d(m,_,A,"¥","\\yen",!0);d(Y,_,A,"¥","\\yen",!0);d(m,_,A,"✓","\\checkmark",!0);d(Y,_,A,"✓","\\checkmark");d(m,_,A,"ℶ","\\beth",!0);d(m,_,A,"ℸ","\\daleth",!0);d(m,_,A,"ℷ","\\gimel",!0);d(m,_,A,"ϝ","\\digamma",!0);d(m,_,A,"ϰ","\\varkappa");d(m,_,Gt,"┌","\\@ulcorner",!0);d(m,_,jt,"┐","\\@urcorner",!0);d(m,_,Gt,"└","\\@llcorner",!0);d(m,_,jt,"┘","\\@lrcorner",!0);d(m,_,z,"≦","\\leqq",!0);d(m,_,z,"⩽","\\leqslant",!0);d(m,_,z,"⪕","\\eqslantless",!0);d(m,_,z,"≲","\\lesssim",!0);d(m,_,z,"⪅","\\lessapprox",!0);d(m,_,z,"≊","\\approxeq",!0);d(m,_,ce,"⋖","\\lessdot");d(m,_,z,"⋘","\\lll",!0);d(m,_,z,"≶","\\lessgtr",!0);d(m,_,z,"⋚","\\lesseqgtr",!0);d(m,_,z,"⪋","\\lesseqqgtr",!0);d(m,_,z,"≑","\\doteqdot");d(m,_,z,"≓","\\risingdotseq",!0);d(m,_,z,"≒","\\fallingdotseq",!0);d(m,_,z,"∽","\\backsim",!0);d(m,_,z,"⋍","\\backsimeq",!0);d(m,_,z,"⫅","\\subseteqq",!0);d(m,_,z,"⋐","\\Subset",!0);d(m,_,z,"⊏","\\sqsubset",!0);d(m,_,z,"≼","\\preccurlyeq",!0);d(m,_,z,"⋞","\\curlyeqprec",!0);d(m,_,z,"≾","\\precsim",!0);d(m,_,z,"⪷","\\precapprox",!0);d(m,_,z,"⊲","\\vartriangleleft");d(m,_,z,"⊴","\\trianglelefteq");d(m,_,z,"⊨","\\vDash",!0);d(m,_,z,"⊪","\\Vvdash",!0);d(m,_,z,"⌣","\\smallsmile");d(m,_,z,"⌢","\\smallfrown");d(m,_,z,"≏","\\bumpeq",!0);d(m,_,z,"≎","\\Bumpeq",!0);d(m,_,z,"≧","\\geqq",!0);d(m,_,z,"⩾","\\geqslant",!0);d(m,_,z,"⪖","\\eqslantgtr",!0);d(m,_,z,"≳","\\gtrsim",!0);d(m,_,z,"⪆","\\gtrapprox",!0);d(m,_,ce,"⋗","\\gtrdot");d(m,_,z,"⋙","\\ggg",!0);d(m,_,z,"≷","\\gtrless",!0);d(m,_,z,"⋛","\\gtreqless",!0);d(m,_,z,"⪌","\\gtreqqless",!0);d(m,_,z,"≖","\\eqcirc",!0);d(m,_,z,"≗","\\circeq",!0);d(m,_,z,"≜","\\triangleq",!0);d(m,_,z,"∼","\\thicksim");d(m,_,z,"≈","\\thickapprox");d(m,_,z,"⫆","\\supseteqq",!0);d(m,_,z,"⋑","\\Supset",!0);d(m,_,z,"⊐","\\sqsupset",!0);d(m,_,z,"≽","\\succcurlyeq",!0);d(m,_,z,"⋟","\\curlyeqsucc",!0);d(m,_,z,"≿","\\succsim",!0);d(m,_,z,"⪸","\\succapprox",!0);d(m,_,z,"⊳","\\vartriangleright");d(m,_,z,"⊵","\\trianglerighteq");d(m,_,z,"⊩","\\Vdash",!0);d(m,_,z,"∣","\\shortmid");d(m,_,z,"∥","\\shortparallel");d(m,_,z,"≬","\\between",!0);d(m,_,z,"⋔","\\pitchfork",!0);d(m,_,z,"∝","\\varpropto");d(m,_,z,"◀","\\blacktriangleleft");d(m,_,z,"∴","\\therefore",!0);d(m,_,z,"∍","\\backepsilon");d(m,_,z,"▶","\\blacktriangleright");d(m,_,z,"∵","\\because",!0);d(m,_,z,"⋘","\\llless");d(m,_,z,"⋙","\\gggtr");d(m,_,ce,"⊲","\\lhd");d(m,_,ce,"⊳","\\rhd");d(m,_,z,"≂","\\eqsim",!0);d(m,g,z,"⋈","\\Join");d(m,_,z,"≑","\\Doteq",!0);d(m,_,ce,"∔","\\dotplus",!0);d(m,_,ce,"∖","\\smallsetminus");d(m,_,ce,"⋒","\\Cap",!0);d(m,_,ce,"⋓","\\Cup",!0);d(m,_,ce,"⩞","\\doublebarwedge",!0);d(m,_,ce,"⊟","\\boxminus",!0);d(m,_,ce,"⊞","\\boxplus",!0);d(m,_,ce,"⋇","\\divideontimes",!0);d(m,_,ce,"⋉","\\ltimes",!0);d(m,_,ce,"⋊","\\rtimes",!0);d(m,_,ce,"⋋","\\leftthreetimes",!0);d(m,_,ce,"⋌","\\rightthreetimes",!0);d(m,_,ce,"⋏","\\curlywedge",!0);d(m,_,ce,"⋎","\\curlyvee",!0);d(m,_,ce,"⊝","\\circleddash",!0);d(m,_,ce,"⊛","\\circledast",!0);d(m,_,ce,"⋅","\\centerdot");d(m,_,ce,"⊺","\\intercal",!0);d(m,_,ce,"⋒","\\doublecap");d(m,_,ce,"⋓","\\doublecup");d(m,_,ce,"⊠","\\boxtimes",!0);d(m,_,z,"⇢","\\dashrightarrow",!0);d(m,_,z,"⇠","\\dashleftarrow",!0);d(m,_,z,"⇇","\\leftleftarrows",!0);d(m,_,z,"⇆","\\leftrightarrows",!0);d(m,_,z,"⇚","\\Lleftarrow",!0);d(m,_,z,"↞","\\twoheadleftarrow",!0);d(m,_,z,"↢","\\leftarrowtail",!0);d(m,_,z,"↫","\\looparrowleft",!0);d(m,_,z,"⇋","\\leftrightharpoons",!0);d(m,_,z,"↶","\\curvearrowleft",!0);d(m,_,z,"↺","\\circlearrowleft",!0);d(m,_,z,"↰","\\Lsh",!0);d(m,_,z,"⇈","\\upuparrows",!0);d(m,_,z,"↿","\\upharpoonleft",!0);d(m,_,z,"⇃","\\downharpoonleft",!0);d(m,g,z,"⊶","\\origof",!0);d(m,g,z,"⊷","\\imageof",!0);d(m,_,z,"⊸","\\multimap",!0);d(m,_,z,"↭","\\leftrightsquigarrow",!0);d(m,_,z,"⇉","\\rightrightarrows",!0);d(m,_,z,"⇄","\\rightleftarrows",!0);d(m,_,z,"↠","\\twoheadrightarrow",!0);d(m,_,z,"↣","\\rightarrowtail",!0);d(m,_,z,"↬","\\looparrowright",!0);d(m,_,z,"↷","\\curvearrowright",!0);d(m,_,z,"↻","\\circlearrowright",!0);d(m,_,z,"↱","\\Rsh",!0);d(m,_,z,"⇊","\\downdownarrows",!0);d(m,_,z,"↾","\\upharpoonright",!0);d(m,_,z,"⇂","\\downharpoonright",!0);d(m,_,z,"⇝","\\rightsquigarrow",!0);d(m,_,z,"⇝","\\leadsto");d(m,_,z,"⇛","\\Rrightarrow",!0);d(m,_,z,"↾","\\restriction");d(m,g,A,"‘","`");d(m,g,A,"$","\\$");d(Y,g,A,"$","\\$");d(Y,g,A,"$","\\textdollar");d(m,g,A,"%","\\%");d(Y,g,A,"%","\\%");d(m,g,A,"_","\\_");d(Y,g,A,"_","\\_");d(Y,g,A,"_","\\textunderscore");d(m,g,A,"∠","\\angle",!0);d(m,g,A,"∞","\\infty",!0);d(m,g,A,"′","\\prime");d(m,g,A,"△","\\triangle");d(m,g,A,"Γ","\\Gamma",!0);d(m,g,A,"Δ","\\Delta",!0);d(m,g,A,"Θ","\\Theta",!0);d(m,g,A,"Λ","\\Lambda",!0);d(m,g,A,"Ξ","\\Xi",!0);d(m,g,A,"Π","\\Pi",!0);d(m,g,A,"Σ","\\Sigma",!0);d(m,g,A,"Υ","\\Upsilon",!0);d(m,g,A,"Φ","\\Phi",!0);d(m,g,A,"Ψ","\\Psi",!0);d(m,g,A,"Ω","\\Omega",!0);d(m,g,A,"A","Α");d(m,g,A,"B","Β");d(m,g,A,"E","Ε");d(m,g,A,"Z","Ζ");d(m,g,A,"H","Η");d(m,g,A,"I","Ι");d(m,g,A,"K","Κ");d(m,g,A,"M","Μ");d(m,g,A,"N","Ν");d(m,g,A,"O","Ο");d(m,g,A,"P","Ρ");d(m,g,A,"T","Τ");d(m,g,A,"X","Χ");d(m,g,A,"¬","\\neg",!0);d(m,g,A,"¬","\\lnot");d(m,g,A,"⊤","\\top");d(m,g,A,"⊥","\\bot");d(m,g,A,"∅","\\emptyset");d(m,_,A,"∅","\\varnothing");d(m,g,be,"α","\\alpha",!0);d(m,g,be,"β","\\beta",!0);d(m,g,be,"γ","\\gamma",!0);d(m,g,be,"δ","\\delta",!0);d(m,g,be,"ϵ","\\epsilon",!0);d(m,g,be,"ζ","\\zeta",!0);d(m,g,be,"η","\\eta",!0);d(m,g,be,"θ","\\theta",!0);d(m,g,be,"ι","\\iota",!0);d(m,g,be,"κ","\\kappa",!0);d(m,g,be,"λ","\\lambda",!0);d(m,g,be,"μ","\\mu",!0);d(m,g,be,"ν","\\nu",!0);d(m,g,be,"ξ","\\xi",!0);d(m,g,be,"ο","\\omicron",!0);d(m,g,be,"π","\\pi",!0);d(m,g,be,"ρ","\\rho",!0);d(m,g,be,"σ","\\sigma",!0);d(m,g,be,"τ","\\tau",!0);d(m,g,be,"υ","\\upsilon",!0);d(m,g,be,"ϕ","\\phi",!0);d(m,g,be,"χ","\\chi",!0);d(m,g,be,"ψ","\\psi",!0);d(m,g,be,"ω","\\omega",!0);d(m,g,be,"ε","\\varepsilon",!0);d(m,g,be,"ϑ","\\vartheta",!0);d(m,g,be,"ϖ","\\varpi",!0);d(m,g,be,"ϱ","\\varrho",!0);d(m,g,be,"ς","\\varsigma",!0);d(m,g,be,"φ","\\varphi",!0);d(m,g,ce,"∗","*",!0);d(m,g,ce,"+","+");d(m,g,ce,"−","-",!0);d(m,g,ce,"⋅","\\cdot",!0);d(m,g,ce,"∘","\\circ",!0);d(m,g,ce,"÷","\\div",!0);d(m,g,ce,"±","\\pm",!0);d(m,g,ce,"×","\\times",!0);d(m,g,ce,"∩","\\cap",!0);d(m,g,ce,"∪","\\cup",!0);d(m,g,ce,"∖","\\setminus",!0);d(m,g,ce,"∧","\\land");d(m,g,ce,"∨","\\lor");d(m,g,ce,"∧","\\wedge",!0);d(m,g,ce,"∨","\\vee",!0);d(m,g,A,"√","\\surd");d(m,g,Gt,"⟨","\\langle",!0);d(m,g,Gt,"∣","\\lvert");d(m,g,Gt,"∥","\\lVert");d(m,g,jt,"?","?");d(m,g,jt,"!","!");d(m,g,jt,"⟩","\\rangle",!0);d(m,g,jt,"∣","\\rvert");d(m,g,jt,"∥","\\rVert");d(m,g,z,"=","=");d(m,g,z,":",":");d(m,g,z,"≈","\\approx",!0);d(m,g,z,"≅","\\cong",!0);d(m,g,z,"≥","\\ge");d(m,g,z,"≥","\\geq",!0);d(m,g,z,"←","\\gets");d(m,g,z,">","\\gt",!0);d(m,g,z,"∈","\\in",!0);d(m,g,z,"","\\@not");d(m,g,z,"⊂","\\subset",!0);d(m,g,z,"⊃","\\supset",!0);d(m,g,z,"⊆","\\subseteq",!0);d(m,g,z,"⊇","\\supseteq",!0);d(m,_,z,"⊈","\\nsubseteq",!0);d(m,_,z,"⊉","\\nsupseteq",!0);d(m,g,z,"⊨","\\models");d(m,g,z,"←","\\leftarrow",!0);d(m,g,z,"≤","\\le");d(m,g,z,"≤","\\leq",!0);d(m,g,z,"<","\\lt",!0);d(m,g,z,"→","\\rightarrow",!0);d(m,g,z,"→","\\to");d(m,_,z,"≱","\\ngeq",!0);d(m,_,z,"≰","\\nleq",!0);d(m,g,In," ","\\ ");d(m,g,In," ","\\space");d(m,g,In," ","\\nobreakspace");d(Y,g,In," ","\\ ");d(Y,g,In," "," ");d(Y,g,In," ","\\space");d(Y,g,In," ","\\nobreakspace");d(m,g,In,null,"\\nobreak");d(m,g,In,null,"\\allowbreak");d(m,g,Ka,",",",");d(m,g,Ka,";",";");d(m,_,ce,"⊼","\\barwedge",!0);d(m,_,ce,"⊻","\\veebar",!0);d(m,g,ce,"⊙","\\odot",!0);d(m,g,ce,"⊕","\\oplus",!0);d(m,g,ce,"⊗","\\otimes",!0);d(m,g,A,"∂","\\partial",!0);d(m,g,ce,"⊘","\\oslash",!0);d(m,_,ce,"⊚","\\circledcirc",!0);d(m,_,ce,"⊡","\\boxdot",!0);d(m,g,ce,"△","\\bigtriangleup");d(m,g,ce,"▽","\\bigtriangledown");d(m,g,ce,"†","\\dagger");d(m,g,ce,"⋄","\\diamond");d(m,g,ce,"⋆","\\star");d(m,g,ce,"◃","\\triangleleft");d(m,g,ce,"▹","\\triangleright");d(m,g,Gt,"{","\\{");d(Y,g,A,"{","\\{");d(Y,g,A,"{","\\textbraceleft");d(m,g,jt,"}","\\}");d(Y,g,A,"}","\\}");d(Y,g,A,"}","\\textbraceright");d(m,g,Gt,"{","\\lbrace");d(m,g,jt,"}","\\rbrace");d(m,g,Gt,"[","\\lbrack",!0);d(Y,g,A,"[","\\lbrack",!0);d(m,g,jt,"]","\\rbrack",!0);d(Y,g,A,"]","\\rbrack",!0);d(m,g,Gt,"(","\\lparen",!0);d(m,g,jt,")","\\rparen",!0);d(Y,g,A,"<","\\textless",!0);d(Y,g,A,">","\\textgreater",!0);d(m,g,Gt,"⌊","\\lfloor",!0);d(m,g,jt,"⌋","\\rfloor",!0);d(m,g,Gt,"⌈","\\lceil",!0);d(m,g,jt,"⌉","\\rceil",!0);d(m,g,A,"\\","\\backslash");d(m,g,A,"∣","|");d(m,g,A,"∣","\\vert");d(Y,g,A,"|","\\textbar",!0);d(m,g,A,"∥","\\|");d(m,g,A,"∥","\\Vert");d(Y,g,A,"∥","\\textbardbl");d(Y,g,A,"~","\\textasciitilde");d(Y,g,A,"\\","\\textbackslash");d(Y,g,A,"^","\\textasciicircum");d(m,g,z,"↑","\\uparrow",!0);d(m,g,z,"⇑","\\Uparrow",!0);d(m,g,z,"↓","\\downarrow",!0);d(m,g,z,"⇓","\\Downarrow",!0);d(m,g,z,"↕","\\updownarrow",!0);d(m,g,z,"⇕","\\Updownarrow",!0);d(m,g,ft,"∐","\\coprod");d(m,g,ft,"⋁","\\bigvee");d(m,g,ft,"⋀","\\bigwedge");d(m,g,ft,"⨄","\\biguplus");d(m,g,ft,"⋂","\\bigcap");d(m,g,ft,"⋃","\\bigcup");d(m,g,ft,"∫","\\int");d(m,g,ft,"∫","\\intop");d(m,g,ft,"∬","\\iint");d(m,g,ft,"∭","\\iiint");d(m,g,ft,"∏","\\prod");d(m,g,ft,"∑","\\sum");d(m,g,ft,"⨂","\\bigotimes");d(m,g,ft,"⨁","\\bigoplus");d(m,g,ft,"⨀","\\bigodot");d(m,g,ft,"∮","\\oint");d(m,g,ft,"∯","\\oiint");d(m,g,ft,"∰","\\oiiint");d(m,g,ft,"⨆","\\bigsqcup");d(m,g,ft,"∫","\\smallint");d(Y,g,y0,"…","\\textellipsis");d(m,g,y0,"…","\\mathellipsis");d(Y,g,y0,"…","\\ldots",!0);d(m,g,y0,"…","\\ldots",!0);d(m,g,y0,"⋯","\\@cdots",!0);d(m,g,y0,"⋱","\\ddots",!0);d(m,g,A,"⋮","\\varvdots");d(Y,g,A,"⋮","\\varvdots");d(m,g,Ze,"ˊ","\\acute");d(m,g,Ze,"ˋ","\\grave");d(m,g,Ze,"¨","\\ddot");d(m,g,Ze,"~","\\tilde");d(m,g,Ze,"ˉ","\\bar");d(m,g,Ze,"˘","\\breve");d(m,g,Ze,"ˇ","\\check");d(m,g,Ze,"^","\\hat");d(m,g,Ze,"⃗","\\vec");d(m,g,Ze,"˙","\\dot");d(m,g,Ze,"˚","\\mathring");d(m,g,be,"","\\@imath");d(m,g,be,"","\\@jmath");d(m,g,A,"ı","ı");d(m,g,A,"ȷ","ȷ");d(Y,g,A,"ı","\\i",!0);d(Y,g,A,"ȷ","\\j",!0);d(Y,g,A,"ß","\\ss",!0);d(Y,g,A,"æ","\\ae",!0);d(Y,g,A,"œ","\\oe",!0);d(Y,g,A,"ø","\\o",!0);d(Y,g,A,"Æ","\\AE",!0);d(Y,g,A,"Œ","\\OE",!0);d(Y,g,A,"Ø","\\O",!0);d(Y,g,Ze,"ˊ","\\'");d(Y,g,Ze,"ˋ","\\`");d(Y,g,Ze,"ˆ","\\^");d(Y,g,Ze,"˜","\\~");d(Y,g,Ze,"ˉ","\\=");d(Y,g,Ze,"˘","\\u");d(Y,g,Ze,"˙","\\.");d(Y,g,Ze,"¸","\\c");d(Y,g,Ze,"˚","\\r");d(Y,g,Ze,"ˇ","\\v");d(Y,g,Ze,"¨",'\\"');d(Y,g,Ze,"˝","\\H");d(Y,g,Ze,"◯","\\textcircled");var Fd={"--":!0,"---":!0,"``":!0,"''":!0};d(Y,g,A,"–","--",!0);d(Y,g,A,"–","\\textendash");d(Y,g,A,"—","---",!0);d(Y,g,A,"—","\\textemdash");d(Y,g,A,"‘","`",!0);d(Y,g,A,"‘","\\textquoteleft");d(Y,g,A,"’","'",!0);d(Y,g,A,"’","\\textquoteright");d(Y,g,A,"“","``",!0);d(Y,g,A,"“","\\textquotedblleft");d(Y,g,A,"”","''",!0);d(Y,g,A,"”","\\textquotedblright");d(m,g,A,"°","\\degree",!0);d(Y,g,A,"°","\\degree");d(Y,g,A,"°","\\textdegree",!0);d(m,g,A,"£","\\pounds");d(m,g,A,"£","\\mathsterling",!0);d(Y,g,A,"£","\\pounds");d(Y,g,A,"£","\\textsterling",!0);d(m,_,A,"✠","\\maltese");d(Y,_,A,"✠","\\maltese");var Jc='0123456789/@."';for(var es=0;es<Jc.length;es++){var ed=Jc.charAt(es);d(m,g,A,ed,ed)}var td='0123456789!@*()-=+";:?/.,';for(var ts=0;ts<td.length;ts++){var nd=td.charAt(ts);d(Y,g,A,nd,nd)}var Va="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var ns=0;ns<Va.length;ns++){var qa=Va.charAt(ns);d(m,g,be,qa,qa),d(Y,g,A,qa,qa)}d(m,_,A,"C","ℂ");d(Y,_,A,"C","ℂ");d(m,_,A,"H","ℍ");d(Y,_,A,"H","ℍ");d(m,_,A,"N","ℕ");d(Y,_,A,"N","ℕ");d(m,_,A,"P","ℙ");d(Y,_,A,"P","ℙ");d(m,_,A,"Q","ℚ");d(Y,_,A,"Q","ℚ");d(m,_,A,"R","ℝ");d(Y,_,A,"R","ℝ");d(m,_,A,"Z","ℤ");d(Y,_,A,"Z","ℤ");d(m,g,be,"h","ℎ");d(Y,g,be,"h","ℎ");var _e="";for(var At=0;At<Va.length;At++){var it=Va.charAt(At);_e=String.fromCharCode(55349,56320+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56372+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56424+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56580+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56684+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56736+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56788+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56840+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56944+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),At<26&&(_e=String.fromCharCode(55349,56632+At),d(m,g,be,it,_e),d(Y,g,A,it,_e),_e=String.fromCharCode(55349,56476+At),d(m,g,be,it,_e),d(Y,g,A,it,_e))}_e="𝕜";d(m,g,be,"k",_e);d(Y,g,A,"k",_e);for(var Rr=0;Rr<10;Rr++){var fr=Rr.toString();_e=String.fromCharCode(55349,57294+Rr),d(m,g,be,fr,_e),d(Y,g,A,fr,_e),_e=String.fromCharCode(55349,57314+Rr),d(m,g,be,fr,_e),d(Y,g,A,fr,_e),_e=String.fromCharCode(55349,57324+Rr),d(m,g,be,fr,_e),d(Y,g,A,fr,_e),_e=String.fromCharCode(55349,57334+Rr),d(m,g,be,fr,_e),d(Y,g,A,fr,_e)}var ys="ÐÞþ";for(var rs=0;rs<ys.length;rs++){var ja=ys.charAt(rs);d(m,g,be,ja,ja),d(Y,g,A,ja,ja)}var Pa=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],rd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],j6=function(n,r){var o=n.charCodeAt(0),s=n.charCodeAt(1),u=(o-55296)*1024+(s-56320)+65536,f=r==="math"?0:1;if(119808<=u&&u<120484){var p=Math.floor((u-119808)/26);return[Pa[p][2],Pa[p][f]]}else if(120782<=u&&u<=120831){var v=Math.floor((u-120782)/10);return[rd[v][2],rd[v][f]]}else{if(u===120485||u===120486)return[Pa[0][2],Pa[0][f]];if(120486<u&&u<120782)return["",""];throw new ee("Unsupported character: "+n)}},Za=function(n,r,o){return Ye[o][n]&&Ye[o][n].replace&&(n=Ye[o][n].replace),{value:n,metrics:js(n,r,o)}},Et=function(n,r,o,s,u){var f=Za(n,r,o),p=f.metrics;n=f.value;var v;if(p){var w=p.italic;(o==="text"||s&&s.font==="mathit")&&(w=0),v=new nn(n,p.height,p.depth,w,p.skew,p.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+o+"'")),v=new nn(n,0,0,0,0,0,u);if(s){v.maxFontSize=s.sizeMultiplier,s.style.isTight()&&v.classes.push("mtight");var b=s.getColor();b&&(v.style.color=b)}return v},Rs=function(n,r,o,s){return s===void 0&&(s=[]),o.font==="boldsymbol"&&Za(n,"Main-Bold",r).metrics?Et(n,"Main-Bold",r,o,s.concat(["mathbf"])):n==="\\"||Ye[r][n].font==="main"?Et(n,"Main-Regular",r,o,s):Et(n,"AMS-Regular",r,o,s.concat(["amsrm"]))},P6=function(n,r,o,s,u){return u!=="textord"&&Za(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ja=function(n,r,o){var s=n.mode,u=n.text,f=["mord"],p=s==="math"||s==="text"&&r.font,v=p?r.font:r.fontFamily,w="",b="";if(u.charCodeAt(0)===55349&&([w,b]=j6(u,s)),w.length>0)return Et(u,w,s,r,f.concat(b));if(v){var $,T;if(v==="boldsymbol"){var S=P6(u,s,r,f,o);$=S.fontName,T=[S.fontClass]}else p?($=xs[v].fontName,T=[v]):($=Ra(v,r.fontWeight,r.fontShape),T=[v,r.fontWeight,r.fontShape]);if(Za(u,$,s).metrics)return Et(u,$,s,r,f.concat(T));if(Fd.hasOwnProperty(u)&&$.slice(0,10)==="Typewriter"){for(var P=[],D=0;D<u.length;D++)P.push(Et(u[D],$,s,r,f.concat(T)));return Fn(P)}}if(o==="mathord")return Et(u,"Math-Italic",s,r,f.concat(["mathnormal"]));if(o==="textord"){var j=Ye[s][u]&&Ye[s][u].font;if(j==="ams"){var I=Ra("amsrm",r.fontWeight,r.fontShape);return Et(u,I,s,r,f.concat("amsrm",r.fontWeight,r.fontShape))}else if(j==="main"||!j){var W=Ra("textrm",r.fontWeight,r.fontShape);return Et(u,W,s,r,f.concat(r.fontWeight,r.fontShape))}else{var N=Ra(j,r.fontWeight,r.fontShape);return Et(u,N,s,r,f.concat(N,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+o+" in makeOrd")},R6=(a,n)=>{if(mr(a.classes)!==mr(n.classes)||a.skew!==n.skew||a.maxFontSize!==n.maxFontSize||a.italic!==0&&a.hasClass("mathnormal"))return!1;if(a.classes.length===1){var r=a.classes[0];if(r==="mbin"||r==="mord")return!1}for(var o in a.style)if(a.style.hasOwnProperty(o)&&a.style[o]!==n.style[o])return!1;for(var s in n.style)if(n.style.hasOwnProperty(s)&&a.style[s]!==n.style[s])return!1;return!0},Hd=a=>{for(var n=0;n<a.length-1;n++){var r=a[n],o=a[n+1];r instanceof nn&&o instanceof nn&&R6(r,o)&&(r.text+=o.text,r.height=Math.max(r.height,o.height),r.depth=Math.max(r.depth,o.depth),r.italic=o.italic,a.splice(n+1,1),n--)}return a},Ds=function(n){for(var r=0,o=0,s=0,u=0;u<n.children.length;u++){var f=n.children[u];f.height>r&&(r=f.height),f.depth>o&&(o=f.depth),f.maxFontSize>s&&(s=f.maxFontSize)}n.height=r,n.depth=o,n.maxFontSize=s},Q=function(n,r,o,s){var u=new wi(n,r,o,s);return Ds(u),u},vr=(a,n,r,o)=>new wi(a,n,r,o),p0=function(n,r,o){var s=Q([n],[],r);return s.height=Math.max(o||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=oe(s.height),s.maxFontSize=1,s},D6=function(n,r,o,s){var u=new Ps(n,r,o,s);return Ds(u),u},Fn=function(n){var r=new xi(n);return Ds(r),r},v0=function(n,r){return n instanceof xi?Q([],[n],r):n},B6=function(n){if(n.positionType==="individualShift"){for(var r=n.children,o=[r[0]],s=-r[0].shift-r[0].elem.depth,u=s,f=1;f<r.length;f++){var p=-r[f].shift-u-r[f].elem.depth,v=p-(r[f-1].elem.height+r[f-1].elem.depth);u=u+p,o.push({type:"kern",size:v}),o.push(r[f])}return{children:o,depth:s}}var w;if(n.positionType==="top"){for(var b=n.positionData,$=0;$<n.children.length;$++){var T=n.children[$];b-=T.type==="kern"?T.size:T.elem.height+T.elem.depth}w=b}else if(n.positionType==="bottom")w=-n.positionData;else{var S=n.children[0];if(S.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")w=-S.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")w=-S.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:w}},Oe=function(n,r){for(var{children:o,depth:s}=B6(n),u=0,f=0;f<o.length;f++){var p=o[f];if(p.type==="elem"){var v=p.elem;u=Math.max(u,v.maxFontSize,v.height)}}u+=2;var w=Q(["pstrut"],[]);w.style.height=oe(u);for(var b=[],$=s,T=s,S=s,P=0;P<o.length;P++){var D=o[P];if(D.type==="kern")S+=D.size;else{var j=D.elem,I=D.wrapperClasses||[],W=D.wrapperStyle||{},N=Q(I,[w,j],void 0,W);N.style.top=oe(-u-S-j.depth),D.marginLeft&&(N.style.marginLeft=D.marginLeft),D.marginRight&&(N.style.marginRight=D.marginRight),b.push(N),S+=j.height+j.depth}$=Math.min($,S),T=Math.max(T,S)}var L=Q(["vlist"],b);L.style.height=oe(T);var U;if($<0){var K=Q([],[]),H=Q(["vlist"],[K]);H.style.height=oe(-$);var Z=Q(["vlist-s"],[new nn("​")]);U=[Q(["vlist-r"],[L,Z]),Q(["vlist-r"],[H])]}else U=[Q(["vlist-r"],[L])];var V=Q(["vlist-t"],U);return U.length===2&&V.classes.push("vlist-t2"),V.height=T,V.depth=-$,V},Wd=(a,n)=>{var r=Q(["mspace"],[],n),o=nt(a,n);return r.style.marginRight=oe(o),r},Ra=function(n,r,o){var s="";switch(n){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=n}var u;return r==="textbf"&&o==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",s+"-"+u},xs={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Ud={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Vd=function(n,r){var[o,s,u]=Ud[n],f=new pr(o),p=new Ln([f],{width:oe(s),height:oe(u),style:"width:"+oe(s),viewBox:"0 0 "+1e3*s+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),v=vr(["overlay"],[p],r);return v.height=u,v.style.height=oe(u),v.style.width=oe(s),v},tt={number:3,unit:"mu"},Dr={number:4,unit:"mu"},Dn={number:5,unit:"mu"},N6={mord:{mop:tt,mbin:Dr,mrel:Dn,minner:tt},mop:{mord:tt,mop:tt,mrel:Dn,minner:tt},mbin:{mord:Dr,mop:Dr,mopen:Dr,minner:Dr},mrel:{mord:Dn,mop:Dn,mopen:Dn,minner:Dn},mopen:{},mclose:{mop:tt,mbin:Dr,mrel:Dn,minner:tt},mpunct:{mord:tt,mop:tt,mrel:Dn,mopen:tt,mclose:tt,mpunct:tt,minner:tt},minner:{mord:tt,mop:tt,mbin:Dr,mrel:Dn,mopen:tt,mpunct:tt,minner:tt}},L6={mord:{mop:tt},mop:{mord:tt,mop:tt},mbin:{},mrel:{},mopen:{},mclose:{mop:tt},mpunct:{},minner:{mop:tt}},Gd={},Ga={},Ya={};function se(a){for(var{type:n,names:r,props:o,handler:s,htmlBuilder:u,mathmlBuilder:f}=a,p={type:n,numArgs:o.numArgs,argTypes:o.argTypes,allowedInArgument:!!o.allowedInArgument,allowedInText:!!o.allowedInText,allowedInMath:o.allowedInMath===void 0?!0:o.allowedInMath,numOptionalArgs:o.numOptionalArgs||0,infix:!!o.infix,primitive:!!o.primitive,handler:s},v=0;v<r.length;++v)Gd[r[v]]=p;n&&(u&&(Ga[n]=u),f&&(Ya[n]=f))}function Br(a){var{type:n,htmlBuilder:r,mathmlBuilder:o}=a;se({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:o})}var Xa=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},lt=function(n){return n.type==="ordgroup"?n.body:[n]},O6=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),I6=new Set(["rightmost","mrel","mclose","mpunct"]),F6={display:Me.DISPLAY,text:Me.TEXT,script:Me.SCRIPT,scriptscript:Me.SCRIPTSCRIPT},H6={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},pt=function(n,r,o,s){s===void 0&&(s=[null,null]);for(var u=[],f=0;f<n.length;f++){var p=Ne(n[f],r);if(p instanceof xi){var v=p.children;u.push(...v)}else u.push(p)}if(Hd(u),!o)return u;var w=r;if(n.length===1){var b=n[0];b.type==="sizing"?w=r.havingSize(b.size):b.type==="styling"&&(w=r.havingStyle(F6[b.style]))}var $=Q([s[0]||"leftmost"],[],r),T=Q([s[1]||"rightmost"],[],r),S=o==="root";return id(u,(P,D)=>{var j=D.classes[0],I=P.classes[0];j==="mbin"&&I6.has(I)?D.classes[0]="mord":I==="mbin"&&O6.has(j)&&(P.classes[0]="mord")},{node:$},T,S),id(u,(P,D)=>{var j=ws(D),I=ws(P),W=j&&I?P.hasClass("mtight")?L6[j][I]:N6[j][I]:null;if(W)return Wd(W,w)},{node:$},T,S),u},id=function a(n,r,o,s,u){s&&n.push(s);for(var f=0;f<n.length;f++){var p=n[f],v=Yd(p);if(v){a(v.children,r,o,null,u);continue}var w=!p.hasClass("mspace");if(w){var b=r(p,o.node);b&&(o.insertAfter?o.insertAfter(b):(n.unshift(b),f++))}w?o.node=p:u&&p.hasClass("newline")&&(o.node=Q(["leftmost"])),o.insertAfter=($=>T=>{n.splice($+1,0,T),f++})(f)}s&&n.pop()},Yd=function(n){return n instanceof xi||n instanceof Ps||n instanceof wi&&n.hasClass("enclosing")?n:null},W6=function a(n,r){var o=Yd(n);if(o){var s=o.children;if(s.length){if(r==="right")return a(s[s.length-1],"right");if(r==="left")return a(s[0],"left")}}return n},ws=function(n,r){return n?(r&&(n=W6(n,r)),H6[n.classes[0]]||null):null},yi=function(n,r){var o=["nulldelimiter"].concat(n.baseSizingClasses());return Q(r.concat(o))},Ne=function(n,r,o){if(!n)return Q();if(Ga[n.type]){var s=Ga[n.type](n,r);if(o&&r.size!==o.size){s=Q(r.sizingClasses(o),[s],r);var u=r.sizeMultiplier/o.sizeMultiplier;s.height*=u,s.depth*=u}return s}else throw new ee("Got group of unknown type: '"+n.type+"'")};function Da(a,n){var r=Q(["base"],a,n),o=Q(["strut"]);return o.style.height=oe(r.height+r.depth),r.depth&&(o.style.verticalAlign=oe(-r.depth)),r.children.unshift(o),r}function bs(a,n){var r=null;a.length===1&&a[0].type==="tag"&&(r=a[0].tag,a=a[0].body);var o=pt(a,n,"root"),s;o.length===2&&o[1].hasClass("tag")&&(s=o.pop());for(var u=[],f=[],p=0;p<o.length;p++)if(f.push(o[p]),o[p].hasClass("mbin")||o[p].hasClass("mrel")||o[p].hasClass("allowbreak")){for(var v=!1;p<o.length-1&&o[p+1].hasClass("mspace")&&!o[p+1].hasClass("newline");)p++,f.push(o[p]),o[p].hasClass("nobreak")&&(v=!0);v||(u.push(Da(f,n)),f=[])}else o[p].hasClass("newline")&&(f.pop(),f.length>0&&(u.push(Da(f,n)),f=[]),u.push(o[p]));f.length>0&&u.push(Da(f,n));var w;r?(w=Da(pt(r,n,!0)),w.classes=["tag"],u.push(w)):s&&u.push(s);var b=Q(["katex-html"],u);if(b.setAttribute("aria-hidden","true"),w){var $=w.children[0];$.style.height=oe(b.height+b.depth),b.depth&&($.style.verticalAlign=oe(-b.depth))}return b}function Xd(a){return new xi(a)}class te{constructor(n,r,o){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=o||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=mr(this.classes));for(var o=0;o<this.children.length;o++)if(this.children[o]instanceof dt&&this.children[o+1]instanceof dt){for(var s=this.children[o].toText()+this.children[++o].toText();this.children[o+1]instanceof dt;)s+=this.children[++o].toText();n.appendChild(new dt(s).toNode())}else n.appendChild(this.children[o].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=St(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+St(mr(this.classes))+'"'),n+=">";for(var o=0;o<this.children.length;o++)n+=this.children[o].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class dt{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return St(this.toText())}toText(){return this.text}}class Qd{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",oe(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+oe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var U6=new Set(["\\imath","\\jmath"]),V6=new Set(["mrow","mtable"]),rn=function(n,r,o){return Ye[r][n]&&Ye[r][n].replace&&n.charCodeAt(0)!==55349&&!(Fd.hasOwnProperty(n)&&o&&(o.fontFamily&&o.fontFamily.slice(4,6)==="tt"||o.font&&o.font.slice(4,6)==="tt"))&&(n=Ye[r][n].replace),new dt(n)},Bs=function(n){return n.length===1?n[0]:new te("mrow",n)},Ns=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var o=r.font;if(!o||o==="mathnormal")return null;var s=n.mode;if(o==="mathit")return"italic";if(o==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(o==="mathbf")return"bold";if(o==="mathbb")return"double-struck";if(o==="mathsfit")return"sans-serif-italic";if(o==="mathfrak")return"fraktur";if(o==="mathscr"||o==="mathcal")return"script";if(o==="mathsf")return"sans-serif";if(o==="mathtt")return"monospace";var u=n.text;if(U6.has(u))return null;Ye[s][u]&&Ye[s][u].replace&&(u=Ye[s][u].replace);var f=xs[o].fontName;return js(u,f,s)?xs[o].variant:null};function is(a){if(!a)return!1;if(a.type==="mi"&&a.children.length===1){var n=a.children[0];return n instanceof dt&&n.text==="."}else if(a.type==="mo"&&a.children.length===1&&a.getAttribute("separator")==="true"&&a.getAttribute("lspace")==="0em"&&a.getAttribute("rspace")==="0em"){var r=a.children[0];return r instanceof dt&&r.text===","}else return!1}var It=function(n,r,o){if(n.length===1){var s=Ue(n[0],r);return o&&s instanceof te&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var u=[],f,p=0;p<n.length;p++){var v=Ue(n[p],r);if(v instanceof te&&f instanceof te){if(v.type==="mtext"&&f.type==="mtext"&&v.getAttribute("mathvariant")===f.getAttribute("mathvariant")){f.children.push(...v.children);continue}else if(v.type==="mn"&&f.type==="mn"){f.children.push(...v.children);continue}else if(is(v)&&f.type==="mn"){f.children.push(...v.children);continue}else if(v.type==="mn"&&is(f))v.children=[...f.children,...v.children],u.pop();else if((v.type==="msup"||v.type==="msub")&&v.children.length>=1&&(f.type==="mn"||is(f))){var w=v.children[0];w instanceof te&&w.type==="mn"&&(w.children=[...f.children,...w.children],u.pop())}else if(f.type==="mi"&&f.children.length===1){var b=f.children[0];if(b instanceof dt&&b.text==="̸"&&(v.type==="mo"||v.type==="mi"||v.type==="mn")){var $=v.children[0];$ instanceof dt&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),u.pop())}}}u.push(v),f=v}return u},gr=function(n,r,o){return Bs(It(n,r,o))},Ue=function(n,r){if(!n)return new te("mrow");if(Ya[n.type]){var o=Ya[n.type](n,r);return o}else throw new ee("Got group of unknown type: '"+n.type+"'")};function ad(a,n,r,o,s){var u=It(a,r),f;u.length===1&&u[0]instanceof te&&V6.has(u[0].type)?f=u[0]:f=new te("mrow",u);var p=new te("annotation",[new dt(n)]);p.setAttribute("encoding","application/x-tex");var v=new te("semantics",[f,p]),w=new te("math",[v]);w.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),o&&w.setAttribute("display","block");var b=s?"katex":"katex-mathml";return Q([b],[w])}var Kd=function(n){return new Bn({style:n.displayMode?Me.DISPLAY:Me.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},Zd=function(n,r){if(r.displayMode){var o=["katex-display"];r.leqno&&o.push("leqno"),r.fleqn&&o.push("fleqn"),n=Q(o,[n])}return n},G6=function(n,r,o){var s=Kd(o),u;if(o.output==="mathml")return ad(n,r,s,o.displayMode,!0);if(o.output==="html"){var f=bs(n,s);u=Q(["katex"],[f])}else{var p=ad(n,r,s,o.displayMode,!1),v=bs(n,s);u=Q(["katex"],[p,v])}return Zd(u,o)},Y6=function(n,r,o){var s=Kd(o),u=bs(n,s),f=Q(["katex"],[u]);return Zd(f,o)},X6={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},eo=function(n){var r=new te("mo",[new dt(X6[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Q6={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},K6=new Set(["widehat","widecheck","widetilde","utilde"]),to=function(n,r){function o(){var p=4e5,v=n.label.slice(1);if(K6.has(v)){var w=n,b=w.base.type==="ordgroup"?w.base.body.length:1,$,T,S;if(b>5)v==="widehat"||v==="widecheck"?($=420,p=2364,S=.42,T=v+"4"):($=312,p=2340,S=.34,T="tilde4");else{var P=[1,1,2,2,3,3][b];v==="widehat"||v==="widecheck"?(p=[0,1062,2364,2364,2364][P],$=[0,239,300,360,420][P],S=[0,.24,.3,.3,.36,.42][P],T=v+P):(p=[0,600,1033,2339,2340][P],$=[0,260,286,306,312][P],S=[0,.26,.286,.3,.306,.34][P],T="tilde"+P)}var D=new pr(T),j=new Ln([D],{width:"100%",height:oe(S),viewBox:"0 0 "+p+" "+$,preserveAspectRatio:"none"});return{span:vr([],[j],r),minWidth:0,height:S}}else{var I=[],W=Q6[v],[N,L,U]=W,K=U/1e3,H=N.length,Z,V;if(H===1){var ge=W[3];Z=["hide-tail"],V=[ge]}else if(H===2)Z=["halfarrow-left","halfarrow-right"],V=["xMinYMin","xMaxYMin"];else if(H===3)Z=["brace-left","brace-center","brace-right"],V=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+H+" children.");for(var ze=0;ze<H;ze++){var Te=new pr(N[ze]),Fe=new Ln([Te],{width:"400em",height:oe(K),viewBox:"0 0 "+p+" "+U,preserveAspectRatio:V[ze]+" slice"}),Ie=vr([Z[ze]],[Fe],r);if(H===1)return{span:Ie,minWidth:L,height:K};Ie.style.height=oe(K),I.push(Ie)}return{span:Q(["stretchy"],I,r),minWidth:L,height:K}}}var{span:s,minWidth:u,height:f}=o();return s.height=f,s.style.height=oe(f),u>0&&(s.style.minWidth=oe(u)),s},Z6=function(n,r,o,s,u){var f,p=n.height+n.depth+o+s;if(/fbox|color|angl/.test(r)){if(f=Q(["stretchy",r],[],u),r==="fbox"){var v=u.color&&u.getColor();v&&(f.style.borderColor=v)}}else{var w=[];/^[bx]cancel$/.test(r)&&w.push(new gs({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&w.push(new gs({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new Ln(w,{width:"100%",height:oe(p)});f=vr([],[b],u)}return f.height=p,f.style.height=oe(p),f};function Ae(a,n){if(!a||a.type!==n)throw new Error("Expected node of type "+n+", but got "+(a?"node of type "+a.type:String(a)));return a}function Ls(a){var n=no(a);if(!n)throw new Error("Expected node of symbol group type, but got "+(a?"node of type "+a.type:String(a)));return n}function no(a){return a&&(a.type==="atom"||q6.hasOwnProperty(a.type))?a:null}var Os=(a,n)=>{var r,o,s;a&&a.type==="supsub"?(o=Ae(a.base,"accent"),r=o.base,a.base=r,s=A6(Ne(a,n)),a.base=o):(o=Ae(a,"accent"),r=o.base);var u=Ne(r,n.havingCrampedStyle()),f=o.isShifty&&On(r),p=0;if(f){var v=mi(r),w=Ne(v,n.havingCrampedStyle());p=Zc(w).skew}var b=o.label==="\\c",$=b?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),T;if(o.isStretchy)T=to(o,n),T=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:T,wrapperClasses:["svg-align"],wrapperStyle:p>0?{width:"calc(100% - "+oe(2*p)+")",marginLeft:oe(2*p)}:void 0}]});else{var S,P;o.label==="\\vec"?(S=Vd("vec",n),P=Ud.vec[1]):(S=Ja({mode:o.mode,text:o.label},n,"textord"),S=Zc(S),S.italic=0,P=S.width,b&&($+=S.depth)),T=Q(["accent-body"],[S]);var D=o.label==="\\textcircled";D&&(T.classes.push("accent-full"),$=u.height);var j=p;D||(j-=P/2),T.style.left=oe(j),o.label==="\\textcircled"&&(T.style.top=".2em"),T=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-$},{type:"elem",elem:T}]})}var I=Q(["mord","accent"],[T],n);return s?(s.children[0]=I,s.height=Math.max(I.height,s.height),s.classes[0]="mord",s):I},Jd=(a,n)=>{var r=a.isStretchy?eo(a.label):new te("mo",[rn(a.label,a.mode)]),o=new te("mover",[Ue(a.base,n),r]);return o.setAttribute("accent","true"),o},J6=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(a=>"\\"+a).join("|"));se({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(a,n)=>{var r=Xa(n[0]),o=!J6.test(a.funcName),s=!o||a.funcName==="\\widehat"||a.funcName==="\\widetilde"||a.funcName==="\\widecheck";return{type:"accent",mode:a.parser.mode,label:a.funcName,isStretchy:o,isShifty:s,base:r}},htmlBuilder:Os,mathmlBuilder:Jd});se({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(a,n)=>{var r=n[0],o=a.parser.mode;return o==="math"&&(a.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+a.funcName+" works only in text mode"),o="text"),{type:"accent",mode:o,label:a.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Os,mathmlBuilder:Jd});se({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0];return{type:"accentUnder",mode:r.mode,label:o,base:s}},htmlBuilder:(a,n)=>{var r=Ne(a.base,n),o=to(a,n),s=a.label==="\\utilde"?.12:0,u=Oe({positionType:"top",positionData:r.height,children:[{type:"elem",elem:o,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return Q(["mord","accentunder"],[u],n)},mathmlBuilder:(a,n)=>{var r=eo(a.label),o=new te("munder",[Ue(a.base,n),r]);return o.setAttribute("accentunder","true"),o}});var Ba=a=>{var n=new te("mpadded",a?[a]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};se({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(a,n,r){var{parser:o,funcName:s}=a;return{type:"xArrow",mode:o.mode,label:s,body:n[0],below:r[0]}},htmlBuilder(a,n){var r=n.style,o=n.havingStyle(r.sup()),s=v0(Ne(a.body,o,n),n),u=a.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(u+"-arrow-pad");var f;a.below&&(o=n.havingStyle(r.sub()),f=v0(Ne(a.below,o,n),n),f.classes.push(u+"-arrow-pad"));var p=to(a,n),v=-n.fontMetrics().axisHeight+.5*p.height,w=-n.fontMetrics().axisHeight-.5*p.height-.111;(s.depth>.25||a.label==="\\xleftequilibrium")&&(w-=s.depth);var b;if(f){var $=-n.fontMetrics().axisHeight+f.height+.5*p.height+.111;b=Oe({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:p,shift:v},{type:"elem",elem:f,shift:$}]})}else b=Oe({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:p,shift:v}]});return b.children[0].children[0].children[1].classes.push("svg-align"),Q(["mrel","x-arrow"],[b],n)},mathmlBuilder(a,n){var r=eo(a.label);r.setAttribute("minsize",a.label.charAt(0)==="x"?"1.75em":"3.0em");var o;if(a.body){var s=Ba(Ue(a.body,n));if(a.below){var u=Ba(Ue(a.below,n));o=new te("munderover",[r,u,s])}else o=new te("mover",[r,s])}else if(a.below){var f=Ba(Ue(a.below,n));o=new te("munder",[r,f])}else o=Ba(),o=new te("mover",[r,o]);return o}});function e4(a,n){var r=pt(a.body,n,!0);return Q([a.mclass],r,n)}function t4(a,n){var r,o=It(a.body,n);return a.mclass==="minner"?r=new te("mpadded",o):a.mclass==="mord"?a.isCharacterBox?(r=o[0],r.type="mi"):r=new te("mi",o):(a.isCharacterBox?(r=o[0],r.type="mo"):r=new te("mo",o),a.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):a.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):a.mclass==="mopen"||a.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):a.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}se({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+o.slice(5),body:lt(s),isCharacterBox:On(s)}},htmlBuilder:e4,mathmlBuilder:t4});var ro=a=>{var n=a.type==="ordgroup"&&a.body.length?a.body[0]:a;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};se({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(a,n){var{parser:r}=a;return{type:"mclass",mode:r.mode,mclass:ro(n[0]),body:lt(n[1]),isCharacterBox:On(n[1])}}});se({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(a,n){var{parser:r,funcName:o}=a,s=n[1],u=n[0],f;o!=="\\stackrel"?f=ro(s):f="mrel";var p={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:o!=="\\stackrel",body:lt(s)},v={type:"supsub",mode:u.mode,base:p,sup:o==="\\underset"?null:u,sub:o==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:f,body:[v],isCharacterBox:On(v)}},htmlBuilder:e4,mathmlBuilder:t4});se({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(a,n){var{parser:r}=a;return{type:"pmb",mode:r.mode,mclass:ro(n[0]),body:lt(n[0])}},htmlBuilder(a,n){var r=pt(a.body,n,!0),o=Q([a.mclass],r,n);return o.style.textShadow="0.02em 0.01em 0.04px",o},mathmlBuilder(a,n){var r=It(a.body,n),o=new te("mstyle",r);return o.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),o}});var e7={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},od=()=>({type:"styling",body:[],mode:"math",style:"display"}),ld=a=>a.type==="textord"&&a.text==="@",t7=(a,n)=>(a.type==="mathord"||a.type==="atom")&&a.text===n;function n7(a,n,r){var o=e7[a];switch(o){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(o,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:o,mode:"math",family:"rel"},f=r.callFunction("\\Big",[u],[]),p=r.callFunction("\\\\cdright",[n[1]],[]),v={type:"ordgroup",mode:"math",body:[s,f,p]};return r.callFunction("\\\\cdparent",[v],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var w={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[w],[])}default:return{type:"textord",text:" ",mode:"math"}}}function r7(a){var n=[];for(a.gullet.beginGroup(),a.gullet.macros.set("\\cr","\\\\\\relax"),a.gullet.beginGroup();;){n.push(a.parseExpression(!1,"\\\\")),a.gullet.endGroup(),a.gullet.beginGroup();var r=a.fetch().text;if(r==="&"||r==="\\\\")a.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new ee("Expected \\\\ or \\cr or \\end",a.nextToken)}for(var o=[],s=[o],u=0;u<n.length;u++){for(var f=n[u],p=od(),v=0;v<f.length;v++)if(!ld(f[v]))p.body.push(f[v]);else{o.push(p),v+=1;var w=Ls(f[v]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(w))if("<>AV".includes(w))for(var $=0;$<2;$++){for(var T=!0,S=v+1;S<f.length;S++){if(t7(f[S],w)){T=!1,v=S;break}if(ld(f[S]))throw new ee("Missing a "+w+" character to complete a CD arrow.",f[S]);b[$].body.push(f[S])}if(T)throw new ee("Missing a "+w+" character to complete a CD arrow.",f[v])}else throw new ee('Expected one of "<>AV=|." after @',f[v]);var P=n7(w,b,a),D={type:"styling",body:[P],mode:"math",style:"display"};o.push(D),p=od()}u%2===0?o.push(p):o.shift(),o=[],s.push(o)}a.gullet.endGroup(),a.gullet.endGroup();var j=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:j,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}se({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(a,n){var{parser:r,funcName:o}=a;return{type:"cdlabel",mode:r.mode,side:o.slice(4),label:n[0]}},htmlBuilder(a,n){var r=n.havingStyle(n.style.sup()),o=v0(Ne(a.label,r,n),n);return o.classes.push("cd-label-"+a.side),o.style.bottom=oe(.8-o.depth),o.height=0,o.depth=0,o},mathmlBuilder(a,n){var r=new te("mrow",[Ue(a.label,n)]);return r=new te("mpadded",[r]),r.setAttribute("width","0"),a.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new te("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});se({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(a,n){var{parser:r}=a;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(a,n){var r=v0(Ne(a.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(a,n){return new te("mrow",[Ue(a.fragment,n)])}});se({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(a,n){for(var{parser:r}=a,o=Ae(n[0],"ordgroup"),s=o.body,u="",f=0;f<s.length;f++){var p=Ae(s[f],"textord");u+=p.text}var v=parseInt(u),w;if(isNaN(v))throw new ee("\\@char has non-numeric argument "+u);if(v<0||v>=1114111)throw new ee("\\@char with invalid code point "+u);return v<=65535?w=String.fromCharCode(v):(v-=65536,w=String.fromCharCode((v>>10)+55296,(v&1023)+56320)),{type:"textord",mode:r.mode,text:w}}});var n4=(a,n)=>{var r=pt(a.body,n.withColor(a.color),!1);return Fn(r)},r4=(a,n)=>{var r=It(a.body,n.withColor(a.color)),o=new te("mstyle",r);return o.setAttribute("mathcolor",a.color),o};se({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(a,n){var{parser:r}=a,o=Ae(n[0],"color-token").color,s=n[1];return{type:"color",mode:r.mode,color:o,body:lt(s)}},htmlBuilder:n4,mathmlBuilder:r4});se({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(a,n){var{parser:r,breakOnTokenText:o}=a,s=Ae(n[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var u=r.parseExpression(!0,o);return{type:"color",mode:r.mode,color:s,body:u}},htmlBuilder:n4,mathmlBuilder:r4});se({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(a,n,r){var{parser:o}=a,s=o.gullet.future().text==="["?o.parseSizeGroup(!0):null,u=!o.settings.displayMode||!o.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:o.mode,newLine:u,size:s&&Ae(s,"size").value}},htmlBuilder(a,n){var r=Q(["mspace"],[],n);return a.newLine&&(r.classes.push("newline"),a.size&&(r.style.marginTop=oe(nt(a.size,n)))),r},mathmlBuilder(a,n){var r=new te("mspace");return a.newLine&&(r.setAttribute("linebreak","newline"),a.size&&r.setAttribute("height",oe(nt(a.size,n)))),r}});var $s={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},i4=a=>{var n=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new ee("Expected a control sequence",a);return n},i7=a=>{var n=a.gullet.popToken();return n.text==="="&&(n=a.gullet.popToken(),n.text===" "&&(n=a.gullet.popToken())),n},a4=(a,n,r,o)=>{var s=a.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!a.gullet.isExpandable(r.text)}),a.gullet.macros.set(n,s,o)};se({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(a){var{parser:n,funcName:r}=a;n.consumeSpaces();var o=n.fetch();if($s[o.text])return(r==="\\global"||r==="\\\\globallong")&&(o.text=$s[o.text]),Ae(n.parseFunction(),"internal");throw new ee("Invalid token after macro prefix",o)}});se({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a){var{parser:n,funcName:r}=a,o=n.gullet.popToken(),s=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new ee("Expected a control sequence",o);for(var u=0,f,p=[[]];n.gullet.future().text!=="{";)if(o=n.gullet.popToken(),o.text==="#"){if(n.gullet.future().text==="{"){f=n.gullet.future(),p[u].push("{");break}if(o=n.gullet.popToken(),!/^[1-9]$/.test(o.text))throw new ee('Invalid argument number "'+o.text+'"');if(parseInt(o.text)!==u+1)throw new ee('Argument number "'+o.text+'" out of order');u++,p.push([])}else{if(o.text==="EOF")throw new ee("Expected a macro definition");p[u].push(o.text)}var{tokens:v}=n.gullet.consumeArg();return f&&v.unshift(f),(r==="\\edef"||r==="\\xdef")&&(v=n.gullet.expandTokens(v),v.reverse()),n.gullet.macros.set(s,{tokens:v,numArgs:u,delimiters:p},r===$s[r]),{type:"internal",mode:n.mode}}});se({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a){var{parser:n,funcName:r}=a,o=i4(n.gullet.popToken());n.gullet.consumeSpaces();var s=i7(n);return a4(n,o,s,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});se({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a){var{parser:n,funcName:r}=a,o=i4(n.gullet.popToken()),s=n.gullet.popToken(),u=n.gullet.popToken();return a4(n,o,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(s),{type:"internal",mode:n.mode}}});var hi=function(n,r,o){var s=Ye.math[n]&&Ye.math[n].replace,u=js(s||n,r,o);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Is=function(n,r,o,s){var u=o.havingBaseStyle(r),f=Q(s.concat(u.sizingClasses(o)),[n],o),p=u.sizeMultiplier/o.sizeMultiplier;return f.height*=p,f.depth*=p,f.maxFontSize=u.sizeMultiplier,f},o4=function(n,r,o){var s=r.havingBaseStyle(o),u=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=oe(u),n.height-=u,n.depth+=u},a7=function(n,r,o,s,u,f){var p=Et(n,"Main-Regular",u,s),v=Is(p,r,s,f);return o4(v,s,r),v},o7=function(n,r,o,s){return Et(n,"Size"+r+"-Regular",o,s)},l4=function(n,r,o,s,u,f){var p=o7(n,r,u,s),v=Is(Q(["delimsizing","size"+r],[p],s),Me.TEXT,s,f);return o&&o4(v,s,Me.TEXT),v},as=function(n,r,o){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var u=Q(["delimsizinginner",s],[Q([],[Et(n,r,o)])]);return{type:"elem",elem:u}},os=function(n,r,o){var s=$n["Size4-Regular"][n.charCodeAt(0)]?$n["Size4-Regular"][n.charCodeAt(0)][4]:$n["Size1-Regular"][n.charCodeAt(0)][4],u=new pr("inner",b6(n,Math.round(1e3*r))),f=new Ln([u],{width:oe(s),height:oe(r),style:"width:"+oe(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),p=vr([],[f],o);return p.height=r,p.style.height=oe(r),p.style.width=oe(s),{type:"elem",elem:p}},ks=.008,Na={type:"kern",size:-1*ks},l7=new Set(["|","\\lvert","\\rvert","\\vert"]),s7=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),s4=function(n,r,o,s,u,f){var p,v,w,b,$="",T=0;p=w=b=n,v=null;var S="Size1-Regular";n==="\\uparrow"?w=b="⏐":n==="\\Uparrow"?w=b="‖":n==="\\downarrow"?p=w="⏐":n==="\\Downarrow"?p=w="‖":n==="\\updownarrow"?(p="\\uparrow",w="⏐",b="\\downarrow"):n==="\\Updownarrow"?(p="\\Uparrow",w="‖",b="\\Downarrow"):l7.has(n)?(w="∣",$="vert",T=333):s7.has(n)?(w="∥",$="doublevert",T=556):n==="["||n==="\\lbrack"?(p="⎡",w="⎢",b="⎣",S="Size4-Regular",$="lbrack",T=667):n==="]"||n==="\\rbrack"?(p="⎤",w="⎥",b="⎦",S="Size4-Regular",$="rbrack",T=667):n==="\\lfloor"||n==="⌊"?(w=p="⎢",b="⎣",S="Size4-Regular",$="lfloor",T=667):n==="\\lceil"||n==="⌈"?(p="⎡",w=b="⎢",S="Size4-Regular",$="lceil",T=667):n==="\\rfloor"||n==="⌋"?(w=p="⎥",b="⎦",S="Size4-Regular",$="rfloor",T=667):n==="\\rceil"||n==="⌉"?(p="⎤",w=b="⎥",S="Size4-Regular",$="rceil",T=667):n==="("||n==="\\lparen"?(p="⎛",w="⎜",b="⎝",S="Size4-Regular",$="lparen",T=875):n===")"||n==="\\rparen"?(p="⎞",w="⎟",b="⎠",S="Size4-Regular",$="rparen",T=875):n==="\\{"||n==="\\lbrace"?(p="⎧",v="⎨",b="⎩",w="⎪",S="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(p="⎫",v="⎬",b="⎭",w="⎪",S="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(p="⎧",b="⎩",w="⎪",S="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(p="⎫",b="⎭",w="⎪",S="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(p="⎧",b="⎭",w="⎪",S="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(p="⎫",b="⎩",w="⎪",S="Size4-Regular");var P=hi(p,S,u),D=P.height+P.depth,j=hi(w,S,u),I=j.height+j.depth,W=hi(b,S,u),N=W.height+W.depth,L=0,U=1;if(v!==null){var K=hi(v,S,u);L=K.height+K.depth,U=2}var H=D+N+L,Z=Math.max(0,Math.ceil((r-H)/(U*I))),V=H+Z*U*I,ge=s.fontMetrics().axisHeight;o&&(ge*=s.sizeMultiplier);var ze=V/2-ge,Te=[];if($.length>0){var Fe=V-D-N,Ie=Math.round(V*1e3),Ve=$6($,Math.round(Fe*1e3)),We=new pr($,Ve),ye=(T/1e3).toFixed(3)+"em",ne=(Ie/1e3).toFixed(3)+"em",de=new Ln([We],{width:ye,height:ne,viewBox:"0 0 "+T+" "+Ie}),ae=vr([],[de],s);ae.height=Ie/1e3,ae.style.width=ye,ae.style.height=ne,Te.push({type:"elem",elem:ae})}else{if(Te.push(as(b,S,u)),Te.push(Na),v===null){var E=V-D-N+2*ks;Te.push(os(w,E,s))}else{var F=(V-D-N-L)/2+2*ks;Te.push(os(w,F,s)),Te.push(Na),Te.push(as(v,S,u)),Te.push(Na),Te.push(os(w,F,s))}Te.push(Na),Te.push(as(p,S,u))}var $e=s.havingBaseStyle(Me.TEXT),pe=Oe({positionType:"bottom",positionData:ze,children:Te});return Is(Q(["delimsizing","mult"],[pe],$e),Me.TEXT,s,f)},ls=80,ss=.08,us=function(n,r,o,s,u){var f=w6(n,s,o),p=new pr(n,f),v=new Ln([p],{width:"400em",height:oe(r),viewBox:"0 0 400000 "+o,preserveAspectRatio:"xMinYMin slice"});return vr(["hide-tail"],[v],u)},u7=function(n,r){var o=r.havingBaseSizing(),s=h4("\\surd",n*o.sizeMultiplier,f4,o),u=o.sizeMultiplier,f=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),p,v=0,w=0,b=0,$;return s.type==="small"?(b=1e3+1e3*f+ls,n<1?u=1:n<1.4&&(u=.7),v=(1+f+ss)/u,w=(1+f)/u,p=us("sqrtMain",v,b,f,r),p.style.minWidth="0.853em",$=.833/u):s.type==="large"?(b=(1e3+ls)*pi[s.size],w=(pi[s.size]+f)/u,v=(pi[s.size]+f+ss)/u,p=us("sqrtSize"+s.size,v,b,f,r),p.style.minWidth="1.02em",$=1/u):(v=n+f+ss,w=n+f,b=Math.floor(1e3*n+f)+ls,p=us("sqrtTall",v,b,f,r),p.style.minWidth="0.742em",$=1.056),p.height=w,p.style.height=oe(v),{span:p,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+f)*u}},u4=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),c7=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),c4=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),pi=[0,1.2,1.8,2.4,3],d4=function(n,r,o,s,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),u4.has(n)||c4.has(n))return l4(n,r,!1,o,s,u);if(c7.has(n))return s4(n,pi[r],!1,o,s,u);throw new ee("Illegal delimiter: '"+n+"'")},d7=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],f7=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"stack"}],f4=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],h7=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},h4=function(n,r,o,s){for(var u=Math.min(2,3-s.style.size),f=u;f<o.length&&o[f].type!=="stack";f++){var p=hi(n,h7(o[f]),"math"),v=p.height+p.depth;if(o[f].type==="small"){var w=s.havingBaseStyle(o[f].style);v*=w.sizeMultiplier}if(v>r)return o[f]}return o[o.length-1]},_s=function(n,r,o,s,u,f){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var p;c4.has(n)?p=d7:u4.has(n)?p=f4:p=f7;var v=h4(n,r,p,s);return v.type==="small"?a7(n,v.style,o,s,u,f):v.type==="large"?l4(n,v.size,o,s,u,f):s4(n,r,o,s,u,f)},cs=function(n,r,o,s,u,f){var p=s.fontMetrics().axisHeight*s.sizeMultiplier,v=901,w=5/s.fontMetrics().ptPerEm,b=Math.max(r-p,o+p),$=Math.max(b/500*v,2*b-w);return _s(n,$,!0,s,u,f)},sd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},m7=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function io(a,n){var r=no(a);if(r&&m7.has(r.text))return r;throw r?new ee("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",a):new ee("Invalid delimiter type '"+a.type+"'",a)}se({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(a,n)=>{var r=io(n[0],a);return{type:"delimsizing",mode:a.parser.mode,size:sd[a.funcName].size,mclass:sd[a.funcName].mclass,delim:r.text}},htmlBuilder:(a,n)=>a.delim==="."?Q([a.mclass]):d4(a.delim,a.size,n,a.mode,[a.mclass]),mathmlBuilder:a=>{var n=[];a.delim!=="."&&n.push(rn(a.delim,a.mode));var r=new te("mo",n);a.mclass==="mopen"||a.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var o=oe(pi[a.size]);return r.setAttribute("minsize",o),r.setAttribute("maxsize",o),r}});function ud(a){if(!a.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}se({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var r=a.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ee("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:a.parser.mode,delim:io(n[0],a).text,color:r}}});se({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var r=io(n[0],a),o=a.parser;++o.leftrightDepth;var s=o.parseExpression(!1);--o.leftrightDepth,o.expect("\\right",!1);var u=Ae(o.parseFunction(),"leftright-right");return{type:"leftright",mode:o.mode,body:s,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(a,n)=>{ud(a);for(var r=pt(a.body,n,!0,["mopen","mclose"]),o=0,s=0,u=!1,f=0;f<r.length;f++)r[f].isMiddle?u=!0:(o=Math.max(r[f].height,o),s=Math.max(r[f].depth,s));o*=n.sizeMultiplier,s*=n.sizeMultiplier;var p;if(a.left==="."?p=yi(n,["mopen"]):p=cs(a.left,o,s,n,a.mode,["mopen"]),r.unshift(p),u)for(var v=1;v<r.length;v++){var w=r[v],b=w.isMiddle;b&&(r[v]=cs(b.delim,o,s,b.options,a.mode,[]))}var $;if(a.right===".")$=yi(n,["mclose"]);else{var T=a.rightColor?n.withColor(a.rightColor):n;$=cs(a.right,o,s,T,a.mode,["mclose"])}return r.push($),Q(["minner"],r,n)},mathmlBuilder:(a,n)=>{ud(a);var r=It(a.body,n);if(a.left!=="."){var o=new te("mo",[rn(a.left,a.mode)]);o.setAttribute("fence","true"),r.unshift(o)}if(a.right!=="."){var s=new te("mo",[rn(a.right,a.mode)]);s.setAttribute("fence","true"),a.rightColor&&s.setAttribute("mathcolor",a.rightColor),r.push(s)}return Bs(r)}});se({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var r=io(n[0],a);if(!a.parser.leftrightDepth)throw new ee("\\middle without preceding \\left",r);return{type:"middle",mode:a.parser.mode,delim:r.text}},htmlBuilder:(a,n)=>{var r;if(a.delim===".")r=yi(n,[]);else{r=d4(a.delim,1,n,a.mode,[]);var o={delim:a.delim,options:n};r.isMiddle=o}return r},mathmlBuilder:(a,n)=>{var r=a.delim==="\\vert"||a.delim==="|"?rn("|","text"):rn(a.delim,a.mode),o=new te("mo",[r]);return o.setAttribute("fence","true"),o.setAttribute("lspace","0.05em"),o.setAttribute("rspace","0.05em"),o}});var Fs=(a,n)=>{var r=v0(Ne(a.body,n),n),o=a.label.slice(1),s=n.sizeMultiplier,u,f=0,p=On(a.body);if(o==="sout")u=Q(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/s,f=-.5*n.fontMetrics().xHeight;else if(o==="phase"){var v=nt({number:.6,unit:"pt"},n),w=nt({number:.35,unit:"ex"},n),b=n.havingBaseSizing();s=s/b.sizeMultiplier;var $=r.height+r.depth+v+w;r.style.paddingLeft=oe($/2+v);var T=Math.floor(1e3*$*s),S=y6(T),P=new Ln([new pr("phase",S)],{width:"400em",height:oe(T/1e3),viewBox:"0 0 400000 "+T,preserveAspectRatio:"xMinYMin slice"});u=vr(["hide-tail"],[P],n),u.style.height=oe($),f=r.depth+v+w}else{/cancel/.test(o)?p||r.classes.push("cancel-pad"):o==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var D=0,j=0,I=0;/box/.test(o)?(I=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),D=n.fontMetrics().fboxsep+(o==="colorbox"?0:I),j=D):o==="angl"?(I=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),D=4*I,j=Math.max(0,.25-r.depth)):(D=p?.2:0,j=D),u=Z6(r,o,D,j,n),/fbox|boxed|fcolorbox/.test(o)?(u.style.borderStyle="solid",u.style.borderWidth=oe(I)):o==="angl"&&I!==.049&&(u.style.borderTopWidth=oe(I),u.style.borderRightWidth=oe(I)),f=r.depth+j,a.backgroundColor&&(u.style.backgroundColor=a.backgroundColor,a.borderColor&&(u.style.borderColor=a.borderColor))}var W;if(a.backgroundColor)W=Oe({positionType:"individualShift",children:[{type:"elem",elem:u,shift:f},{type:"elem",elem:r,shift:0}]});else{var N=/cancel|phase/.test(o)?["svg-align"]:[];W=Oe({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:f,wrapperClasses:N}]})}return/cancel/.test(o)&&(W.height=r.height,W.depth=r.depth),/cancel/.test(o)&&!p?Q(["mord","cancel-lap"],[W],n):Q(["mord"],[W],n)},Hs=(a,n)=>{var r=0,o=new te(a.label.includes("colorbox")?"mpadded":"menclose",[Ue(a.body,n)]);switch(a.label){case"\\cancel":o.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":o.setAttribute("notation","downdiagonalstrike");break;case"\\phase":o.setAttribute("notation","phasorangle");break;case"\\sout":o.setAttribute("notation","horizontalstrike");break;case"\\fbox":o.setAttribute("notation","box");break;case"\\angl":o.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,o.setAttribute("width","+"+2*r+"pt"),o.setAttribute("height","+"+2*r+"pt"),o.setAttribute("lspace",r+"pt"),o.setAttribute("voffset",r+"pt"),a.label==="\\fcolorbox"){var s=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);o.setAttribute("style","border: "+s+"em solid "+String(a.borderColor))}break;case"\\xcancel":o.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return a.backgroundColor&&o.setAttribute("mathbackground",a.backgroundColor),o};se({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(a,n,r){var{parser:o,funcName:s}=a,u=Ae(n[0],"color-token").color,f=n[1];return{type:"enclose",mode:o.mode,label:s,backgroundColor:u,body:f}},htmlBuilder:Fs,mathmlBuilder:Hs});se({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(a,n,r){var{parser:o,funcName:s}=a,u=Ae(n[0],"color-token").color,f=Ae(n[1],"color-token").color,p=n[2];return{type:"enclose",mode:o.mode,label:s,backgroundColor:f,borderColor:u,body:p}},htmlBuilder:Fs,mathmlBuilder:Hs});se({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(a,n){var{parser:r}=a;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});se({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];return{type:"enclose",mode:r.mode,label:o,body:s}},htmlBuilder:Fs,mathmlBuilder:Hs});se({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(a,n){var{parser:r}=a;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var m4={};function kn(a){for(var{type:n,names:r,props:o,handler:s,htmlBuilder:u,mathmlBuilder:f}=a,p={type:n,numArgs:o.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},v=0;v<r.length;++v)m4[r[v]]=p;u&&(Ga[n]=u),f&&(Ya[n]=f)}var p4={};function x(a,n){p4[a]=n}function cd(a){var n=[];a.consumeSpaces();var r=a.fetch().text;for(r==="\\relax"&&(a.consume(),a.consumeSpaces(),r=a.fetch().text);r==="\\hline"||r==="\\hdashline";)a.consume(),n.push(r==="\\hdashline"),a.consumeSpaces(),r=a.fetch().text;return n}var ao=a=>{var n=a.parser.settings;if(!n.displayMode)throw new ee("{"+a.envName+"} can be used only in display mode.")},p7=new Set(["gather","gather*"]);function Ws(a){if(!a.includes("ed"))return!a.includes("*")}function yr(a,n,r){var{hskipBeforeAndAfter:o,addJot:s,cols:u,arraystretch:f,colSeparationType:p,autoTag:v,singleRow:w,emptySingleRow:b,maxNumCols:$,leqno:T}=n;if(a.gullet.beginGroup(),w||a.gullet.macros.set("\\cr","\\\\\\relax"),!f){var S=a.gullet.expandMacroAsText("\\arraystretch");if(S==null)f=1;else if(f=parseFloat(S),!f||f<0)throw new ee("Invalid \\arraystretch: "+S)}a.gullet.beginGroup();var P=[],D=[P],j=[],I=[],W=v!=null?[]:void 0;function N(){v&&a.gullet.macros.set("\\@eqnsw","1",!0)}function L(){W&&(a.gullet.macros.get("\\df@tag")?(W.push(a.subparse([new Vt("\\df@tag")])),a.gullet.macros.set("\\df@tag",void 0,!0)):W.push(!!v&&a.gullet.macros.get("\\@eqnsw")==="1"))}for(N(),I.push(cd(a));;){var U=a.parseExpression(!1,w?"\\end":"\\\\");a.gullet.endGroup(),a.gullet.beginGroup(),U={type:"ordgroup",mode:a.mode,body:U},r&&(U={type:"styling",mode:a.mode,style:r,body:[U]}),P.push(U);var K=a.fetch().text;if(K==="&"){if($&&P.length===$){if(w||p)throw new ee("Too many tab characters: &",a.nextToken);a.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}a.consume()}else if(K==="\\end"){L(),P.length===1&&U.type==="styling"&&U.body[0].body.length===0&&(D.length>1||!b)&&D.pop(),I.length<D.length+1&&I.push([]);break}else if(K==="\\\\"){a.consume();var H=void 0;a.gullet.future().text!==" "&&(H=a.parseSizeGroup(!0)),j.push(H?H.value:null),L(),I.push(cd(a)),P=[],D.push(P),N()}else throw new ee("Expected & or \\\\ or \\cr or \\end",a.nextToken)}return a.gullet.endGroup(),a.gullet.endGroup(),{type:"array",mode:a.mode,addJot:s,arraystretch:f,body:D,cols:u,rowGaps:j,hskipBeforeAndAfter:o,hLinesBeforeRow:I,colSeparationType:p,tags:W,leqno:T}}function Us(a){return a.slice(0,1)==="d"?"display":"text"}var _n=function(n,r){var o,s,u=n.body.length,f=n.hLinesBeforeRow,p=0,v=new Array(u),w=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,T=5*$;if(n.colSeparationType&&n.colSeparationType==="small"){var S=r.havingStyle(Me.SCRIPT).sizeMultiplier;T=.2778*(S/r.sizeMultiplier)}var P=n.colSeparationType==="CD"?nt({number:3,unit:"ex"},r):12*$,D=3*$,j=n.arraystretch*P,I=.7*j,W=.3*j,N=0;function L(Yt){for(var Mt=0;Mt<Yt.length;++Mt)Mt>0&&(N+=.25),w.push({pos:N,isDashed:Yt[Mt]})}for(L(f[0]),o=0;o<n.body.length;++o){var U=n.body[o],K=I,H=W;p<U.length&&(p=U.length);var Z=new Array(U.length);for(s=0;s<U.length;++s){var V=Ne(U[s],r);H<V.depth&&(H=V.depth),K<V.height&&(K=V.height),Z[s]=V}var ge=n.rowGaps[o],ze=0;ge&&(ze=nt(ge,r),ze>0&&(ze+=W,H<ze&&(H=ze),ze=0)),n.addJot&&(H+=D),Z.height=K,Z.depth=H,N+=K,Z.pos=N,N+=H+ze,v[o]=Z,L(f[o+1])}var Te=N/2+r.fontMetrics().axisHeight,Fe=n.cols||[],Ie=[],Ve,We,ye=[];if(n.tags&&n.tags.some(Yt=>Yt))for(o=0;o<u;++o){var ne=v[o],de=ne.pos-Te,ae=n.tags[o],E=void 0;ae===!0?E=Q(["eqn-num"],[],r):ae===!1?E=Q([],[],r):E=Q([],pt(ae,r,!0),r),E.depth=ne.depth,E.height=ne.height,ye.push({type:"elem",elem:E,shift:de})}for(s=0,We=0;s<p||We<Fe.length;++s,++We){for(var F=Fe[We]||{},$e=!0;F.type==="separator";){if($e||(Ve=Q(["arraycolsep"],[]),Ve.style.width=oe(r.fontMetrics().doubleRuleSep),Ie.push(Ve)),F.separator==="|"||F.separator===":"){var pe=F.separator==="|"?"solid":"dashed",ke=Q(["vertical-separator"],[],r);ke.style.height=oe(N),ke.style.borderRightWidth=oe(b),ke.style.borderRightStyle=pe,ke.style.margin="0 "+oe(-b/2);var Ce=N-Te;Ce&&(ke.style.verticalAlign=oe(-Ce)),Ie.push(ke)}else throw new ee("Invalid separator type: "+F.separator);We++,F=Fe[We]||{},$e=!1}if(!(s>=p)){var je=void 0;if(s>0||n.hskipBeforeAndAfter){var Re;je=(Re=F.pregap)!=null?Re:T,je!==0&&(Ve=Q(["arraycolsep"],[]),Ve.style.width=oe(je),Ie.push(Ve))}var De=[];for(o=0;o<u;++o){var st=v[o],bt=st[s];if(bt){var Nr=st.pos-Te;bt.depth=st.depth,bt.height=st.height,De.push({type:"elem",elem:bt,shift:Nr})}}if(De=Oe({positionType:"individualShift",children:De}),De=Q(["col-align-"+(F.align||"c")],[De]),Ie.push(De),s<p-1||n.hskipBeforeAndAfter){var fn;je=(fn=F.postgap)!=null?fn:T,je!==0&&(Ve=Q(["arraycolsep"],[]),Ve.style.width=oe(je),Ie.push(Ve))}}}if(v=Q(["mtable"],Ie),w.length>0){for(var Hn=p0("hline",r,b),Lr=p0("hdashline",r,b),Sn=[{type:"elem",elem:v,shift:0}];w.length>0;){var hn=w.pop(),mn=hn.pos-Te;hn.isDashed?Sn.push({type:"elem",elem:Lr,shift:mn}):Sn.push({type:"elem",elem:Hn,shift:mn})}v=Oe({positionType:"individualShift",children:Sn})}if(ye.length===0)return Q(["mord"],[v],r);var Mn=Oe({positionType:"individualShift",children:ye});return Mn=Q(["tag"],[Mn],r),Fn([v,Mn])},v7={c:"center ",l:"left ",r:"right "},zn=function(n,r){for(var o=[],s=new te("mtd",[],["mtr-glue"]),u=new te("mtd",[],["mml-eqn-num"]),f=0;f<n.body.length;f++){for(var p=n.body[f],v=[],w=0;w<p.length;w++)v.push(new te("mtd",[Ue(p[w],r)]));n.tags&&n.tags[f]&&(v.unshift(s),v.push(s),n.leqno?v.unshift(u):v.push(u)),o.push(new te("mtr",v))}var b=new te("mtable",o),$=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);b.setAttribute("rowspacing",oe($));var T="",S="";if(n.cols&&n.cols.length>0){var P=n.cols,D="",j=!1,I=0,W=P.length;P[0].type==="separator"&&(T+="top ",I=1),P[P.length-1].type==="separator"&&(T+="bottom ",W-=1);for(var N=I;N<W;N++)P[N].type==="align"?(S+=v7[P[N].align],j&&(D+="none "),j=!0):P[N].type==="separator"&&j&&(D+=P[N].separator==="|"?"solid ":"dashed ",j=!1);b.setAttribute("columnalign",S.trim()),/[sd]/.test(D)&&b.setAttribute("columnlines",D.trim())}if(n.colSeparationType==="align"){for(var L=n.cols||[],U="",K=1;K<L.length;K++)U+=K%2?"0em ":"1em ";b.setAttribute("columnspacing",U.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var H="",Z=n.hLinesBeforeRow;T+=Z[0].length>0?"left ":"",T+=Z[Z.length-1].length>0?"right ":"";for(var V=1;V<Z.length-1;V++)H+=Z[V].length===0?"none ":Z[V][0]?"dashed ":"solid ";return/[sd]/.test(H)&&b.setAttribute("rowlines",H.trim()),T!==""&&(b=new te("menclose",[b]),b.setAttribute("notation",T.trim())),n.arraystretch&&n.arraystretch<1&&(b=new te("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},v4=function(n,r){n.envName.includes("ed")||ao(n);var o=[],s=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",f=yr(n.parser,{cols:o,addJot:!0,autoTag:u?void 0:Ws(n.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),p,v=0,w={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",$=0;$<r[0].body.length;$++){var T=Ae(r[0].body[$],"textord");b+=T.text}p=Number(b),v=p*2}var S=!v;f.body.forEach(function(I){for(var W=1;W<I.length;W+=2){var N=Ae(I[W],"styling"),L=Ae(N.body[0],"ordgroup");L.body.unshift(w)}if(S)v<I.length&&(v=I.length);else{var U=I.length/2;if(p<U)throw new ee("Too many math in a row: "+("expected "+p+", but got "+U),I[0])}});for(var P=0;P<v;++P){var D="r",j=0;P%2===1?D="l":P>0&&S&&(j=1),o[P]={type:"align",align:D,pregap:j,postgap:0}}return f.colSeparationType=S?"align":"alignat",f};kn({type:"array",names:["array","darray"],props:{numArgs:1},handler(a,n){var r=no(n[0]),o=r?[n[0]]:Ae(n[0],"ordgroup").body,s=o.map(function(f){var p=Ls(f),v=p.text;if("lcr".includes(v))return{type:"align",align:v};if(v==="|")return{type:"separator",separator:"|"};if(v===":")return{type:"separator",separator:":"};throw new ee("Unknown column alignment: "+v,f)}),u={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return yr(a.parser,u,Us(a.envName))},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(a){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[a.envName.replace("*","")],r="c",o={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(a.envName.charAt(a.envName.length-1)==="*"){var s=a.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new ee("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),o.cols=[{type:"align",align:r}]}}var u=yr(a.parser,o,Us(a.envName)),f=Math.max(0,...u.body.map(p=>p.length));return u.cols=new Array(f).fill({type:"align",align:r}),n?{type:"leftright",mode:a.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(a){var n={arraystretch:.5},r=yr(a.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["subarray"],props:{numArgs:1},handler(a,n){var r=no(n[0]),o=r?[n[0]]:Ae(n[0],"ordgroup").body,s=o.map(function(f){var p=Ls(f),v=p.text;if("lc".includes(v))return{type:"align",align:v};throw new ee("Unknown column alignment: "+v,f)});if(s.length>1)throw new ee("{subarray} can contain only one column");var u={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=yr(a.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new ee("{subarray} can contain only one column");return u},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(a){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=yr(a.parser,n,Us(a.envName));return{type:"leftright",mode:a.mode,body:[r],left:a.envName.includes("r")?".":"\\{",right:a.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:v4,htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(a){p7.has(a.envName)&&ao(a);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Ws(a.envName),emptySingleRow:!0,leqno:a.parser.settings.leqno};return yr(a.parser,n,"display")},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:v4,htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(a){ao(a);var n={autoTag:Ws(a.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:a.parser.settings.leqno};return yr(a.parser,n,"display")},htmlBuilder:_n,mathmlBuilder:zn});kn({type:"array",names:["CD"],props:{numArgs:0},handler(a){return ao(a),r7(a.parser)},htmlBuilder:_n,mathmlBuilder:zn});x("\\nonumber","\\gdef\\@eqnsw{0}");x("\\notag","\\nonumber");se({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(a,n){throw new ee(a.funcName+" valid only within array environment")}});var dd=m4;se({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];if(s.type!=="ordgroup")throw new ee("Invalid environment name",s);for(var u="",f=0;f<s.body.length;++f)u+=Ae(s.body[f],"textord").text;if(o==="\\begin"){if(!dd.hasOwnProperty(u))throw new ee("No such environment: "+u,s);var p=dd[u],{args:v,optArgs:w}=r.parseArguments("\\begin{"+u+"}",p),b={mode:r.mode,envName:u,parser:r},$=p.handler(b,v,w);r.expect("\\end",!1);var T=r.nextToken,S=Ae(r.parseFunction(),"environment");if(S.name!==u)throw new ee("Mismatch: \\begin{"+u+"} matched by \\end{"+S.name+"}",T);return $}return{type:"environment",mode:r.mode,name:u,nameGroup:s}}});var g4=(a,n)=>{var r=a.font,o=n.withFont(r);return Ne(a.body,o)},y4=(a,n)=>{var r=a.font,o=n.withFont(r);return Ue(a.body,o)},fd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};se({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=Xa(n[0]),u=o;return u in fd&&(u=fd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:s}},htmlBuilder:g4,mathmlBuilder:y4});se({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"mclass",mode:r.mode,mclass:ro(o),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:o}],isCharacterBox:On(o)}}});se({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(a,n)=>{var{parser:r,funcName:o,breakOnTokenText:s}=a,{mode:u}=r,f=r.parseExpression(!0,s),p="math"+o.slice(1);return{type:"font",mode:u,font:p,body:{type:"ordgroup",mode:r.mode,body:f}}},htmlBuilder:g4,mathmlBuilder:y4});var g7=(a,n)=>{var r=n.style,o=r.fracNum(),s=r.fracDen(),u;u=n.havingStyle(o);var f=Ne(a.numer,u,n);if(a.continued){var p=8.5/n.fontMetrics().ptPerEm,v=3.5/n.fontMetrics().ptPerEm;f.height=f.height<p?p:f.height,f.depth=f.depth<v?v:f.depth}u=n.havingStyle(s);var w=Ne(a.denom,u,n),b,$,T;a.hasBarLine?(a.barSize?($=nt(a.barSize,n),b=p0("frac-line",n,$)):b=p0("frac-line",n),$=b.height,T=b.height):(b=null,$=0,T=n.fontMetrics().defaultRuleThickness);var S,P,D;r.size===Me.DISPLAY.size?(S=n.fontMetrics().num1,$>0?P=3*T:P=7*T,D=n.fontMetrics().denom1):($>0?(S=n.fontMetrics().num2,P=T):(S=n.fontMetrics().num3,P=3*T),D=n.fontMetrics().denom2);var j;if(b){var W=n.fontMetrics().axisHeight;S-f.depth-(W+.5*$)<P&&(S+=P-(S-f.depth-(W+.5*$))),W-.5*$-(w.height-D)<P&&(D+=P-(W-.5*$-(w.height-D)));var N=-(W-.5*$);j=Oe({positionType:"individualShift",children:[{type:"elem",elem:w,shift:D},{type:"elem",elem:b,shift:N},{type:"elem",elem:f,shift:-S}]})}else{var I=S-f.depth-(w.height-D);I<P&&(S+=.5*(P-I),D+=.5*(P-I)),j=Oe({positionType:"individualShift",children:[{type:"elem",elem:w,shift:D},{type:"elem",elem:f,shift:-S}]})}u=n.havingStyle(r),j.height*=u.sizeMultiplier/n.sizeMultiplier,j.depth*=u.sizeMultiplier/n.sizeMultiplier;var L;r.size===Me.DISPLAY.size?L=n.fontMetrics().delim1:r.size===Me.SCRIPTSCRIPT.size?L=n.havingStyle(Me.SCRIPT).fontMetrics().delim2:L=n.fontMetrics().delim2;var U,K;return a.leftDelim==null?U=yi(n,["mopen"]):U=_s(a.leftDelim,L,!0,n.havingStyle(r),a.mode,["mopen"]),a.continued?K=Q([]):a.rightDelim==null?K=yi(n,["mclose"]):K=_s(a.rightDelim,L,!0,n.havingStyle(r),a.mode,["mclose"]),Q(["mord"].concat(u.sizingClasses(n)),[U,Q(["mfrac"],[j]),K],n)},y7=(a,n)=>{var r=new te("mfrac",[Ue(a.numer,n),Ue(a.denom,n)]);if(!a.hasBarLine)r.setAttribute("linethickness","0px");else if(a.barSize){var o=nt(a.barSize,n);r.setAttribute("linethickness",oe(o))}if(a.leftDelim!=null||a.rightDelim!=null){var s=[];if(a.leftDelim!=null){var u=new te("mo",[new dt(a.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),s.push(u)}if(s.push(r),a.rightDelim!=null){var f=new te("mo",[new dt(a.rightDelim.replace("\\",""))]);f.setAttribute("fence","true"),s.push(f)}return Bs(s)}return r},x4=(a,n)=>{if(!n)return a;var r={type:"styling",mode:a.mode,style:n,body:[a]};return r};se({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0],u=n[1],f,p=null,v=null;switch(o){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":f=!0;break;case"\\\\atopfrac":f=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":f=!1,p="(",v=")";break;case"\\\\bracefrac":f=!1,p="\\{",v="\\}";break;case"\\\\brackfrac":f=!1,p="[",v="]";break;default:throw new Error("Unrecognized genfrac command")}var w=o==="\\cfrac",b=null;return w||o.startsWith("\\d")?b="display":o.startsWith("\\t")&&(b="text"),x4({type:"genfrac",mode:r.mode,numer:s,denom:u,continued:w,hasBarLine:f,leftDelim:p,rightDelim:v,barSize:null},b)},htmlBuilder:g7,mathmlBuilder:y7});se({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(a){var{parser:n,funcName:r,token:o}=a,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:s,token:o}}});var hd=["display","text","script","scriptscript"],md=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};se({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(a,n){var{parser:r}=a,o=n[4],s=n[5],u=Xa(n[0]),f=u.type==="atom"&&u.family==="open"?md(u.text):null,p=Xa(n[1]),v=p.type==="atom"&&p.family==="close"?md(p.text):null,w=Ae(n[2],"size"),b,$=null;w.isBlank?b=!0:($=w.value,b=$.number>0);var T=null,S=n[3];if(S.type==="ordgroup"){if(S.body.length>0){var P=Ae(S.body[0],"textord");T=hd[Number(P.text)]}}else S=Ae(S,"textord"),T=hd[Number(S.text)];return x4({type:"genfrac",mode:r.mode,numer:o,denom:s,continued:!1,hasBarLine:b,barSize:$,leftDelim:f,rightDelim:v},T)}});se({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(a,n){var{parser:r,funcName:o,token:s}=a;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ae(n[0],"size").value,token:s}}});se({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0],u=Ae(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var f=n[2],p=u.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:f,continued:!1,hasBarLine:p,barSize:u,leftDelim:null,rightDelim:null}}});var w4=(a,n)=>{var r=n.style,o,s;a.type==="supsub"?(o=a.sup?Ne(a.sup,n.havingStyle(r.sup()),n):Ne(a.sub,n.havingStyle(r.sub()),n),s=Ae(a.base,"horizBrace")):s=Ae(a,"horizBrace");var u=Ne(s.base,n.havingBaseStyle(Me.DISPLAY)),f=to(s,n),p;if(s.isOver?(p=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:f}]}),p.children[0].children[0].children[1].classes.push("svg-align")):(p=Oe({positionType:"bottom",positionData:u.depth+.1+f.height,children:[{type:"elem",elem:f},{type:"kern",size:.1},{type:"elem",elem:u}]}),p.children[0].children[0].children[0].classes.push("svg-align")),o){var v=Q(["mord",s.isOver?"mover":"munder"],[p],n);s.isOver?p=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:v},{type:"kern",size:.2},{type:"elem",elem:o}]}):p=Oe({positionType:"bottom",positionData:v.depth+.2+o.height+o.depth,children:[{type:"elem",elem:o},{type:"kern",size:.2},{type:"elem",elem:v}]})}return Q(["mord",s.isOver?"mover":"munder"],[p],n)},x7=(a,n)=>{var r=eo(a.label);return new te(a.isOver?"mover":"munder",[Ue(a.base,n),r])};se({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(a,n){var{parser:r,funcName:o}=a;return{type:"horizBrace",mode:r.mode,label:o,isOver:/^\\over/.test(o),base:n[0]}},htmlBuilder:w4,mathmlBuilder:x7});se({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[1],s=Ae(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:lt(o)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(a,n)=>{var r=pt(a.body,n,!1);return D6(a.href,[],r,n)},mathmlBuilder:(a,n)=>{var r=gr(a.body,n);return r instanceof te||(r=new te("mrow",[r])),r.setAttribute("href",a.href),r}});se({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=Ae(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:o}))return r.formatUnsupportedCmd("\\url");for(var s=[],u=0;u<o.length;u++){var f=o[u];f==="~"&&(f="\\textasciitilde"),s.push({type:"textord",mode:"text",text:f})}var p={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:o,body:lt(p)}}});se({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(a,n){var{parser:r}=a;return{type:"hbox",mode:r.mode,body:lt(n[0])}},htmlBuilder(a,n){var r=pt(a.body,n,!1);return Fn(r)},mathmlBuilder(a,n){return new te("mrow",It(a.body,n))}});se({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(a,n)=>{var{parser:r,funcName:o,token:s}=a,u=Ae(n[0],"raw").string,f=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var p,v={};switch(o){case"\\htmlClass":v.class=u,p={command:"\\htmlClass",class:u};break;case"\\htmlId":v.id=u,p={command:"\\htmlId",id:u};break;case"\\htmlStyle":v.style=u,p={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var w=u.split(","),b=0;b<w.length;b++){var $=w[b],T=$.indexOf("=");if(T<0)throw new ee("\\htmlData key/value '"+$+"' missing equals sign");var S=$.slice(0,T),P=$.slice(T+1);v["data-"+S.trim()]=P}p={command:"\\htmlData",attributes:v};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(p)?{type:"html",mode:r.mode,attributes:v,body:lt(f)}:r.formatUnsupportedCmd(o)},htmlBuilder:(a,n)=>{var r=pt(a.body,n,!1),o=["enclosing"];a.attributes.class&&o.push(...a.attributes.class.trim().split(/\s+/));var s=Q(o,r,n);for(var u in a.attributes)u!=="class"&&a.attributes.hasOwnProperty(u)&&s.setAttribute(u,a.attributes[u]);return s},mathmlBuilder:(a,n)=>gr(a.body,n)});se({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a;return{type:"htmlmathml",mode:r.mode,html:lt(n[0]),mathml:lt(n[1])}},htmlBuilder:(a,n)=>{var r=pt(a.html,n,!1);return Fn(r)},mathmlBuilder:(a,n)=>gr(a.mathml,n)});var ds=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new ee("Invalid size: '"+n+"' in \\includegraphics");var o={number:+(r[1]+r[2]),unit:r[3]};if(!Nd(o))throw new ee("Invalid unit: '"+o.unit+"' in \\includegraphics.");return o};se({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(a,n,r)=>{var{parser:o}=a,s={number:0,unit:"em"},u={number:.9,unit:"em"},f={number:0,unit:"em"},p="";if(r[0])for(var v=Ae(r[0],"raw").string,w=v.split(","),b=0;b<w.length;b++){var $=w[b].split("=");if($.length===2){var T=$[1].trim();switch($[0].trim()){case"alt":p=T;break;case"width":s=ds(T);break;case"height":u=ds(T);break;case"totalheight":f=ds(T);break;default:throw new ee("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var S=Ae(n[0],"url").url;return p===""&&(p=S,p=p.replace(/^.*[\\/]/,""),p=p.substring(0,p.lastIndexOf("."))),o.settings.isTrusted({command:"\\includegraphics",url:S})?{type:"includegraphics",mode:o.mode,alt:p,width:s,height:u,totalheight:f,src:S}:o.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(a,n)=>{var r=nt(a.height,n),o=0;a.totalheight.number>0&&(o=nt(a.totalheight,n)-r);var s=0;a.width.number>0&&(s=nt(a.width,n));var u={height:oe(r+o)};s>0&&(u.width=oe(s)),o>0&&(u.verticalAlign=oe(-o));var f=new T6(a.src,a.alt,u);return f.height=r,f.depth=o,f},mathmlBuilder:(a,n)=>{var r=new te("mglyph",[]);r.setAttribute("alt",a.alt);var o=nt(a.height,n),s=0;if(a.totalheight.number>0&&(s=nt(a.totalheight,n)-o,r.setAttribute("valign",oe(-s))),r.setAttribute("height",oe(o+s)),a.width.number>0){var u=nt(a.width,n);r.setAttribute("width",oe(u))}return r.setAttribute("src",a.src),r}});se({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(a,n){var{parser:r,funcName:o}=a,s=Ae(n[0],"size");if(r.settings.strict){var u=o[1]==="m",f=s.value.unit==="mu";u?(f||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" works only in math mode")):f&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(a,n){return Wd(a.dimension,n)},mathmlBuilder(a,n){var r=nt(a.dimension,n);return new Qd(r)}});se({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0];return{type:"lap",mode:r.mode,alignment:o.slice(5),body:s}},htmlBuilder:(a,n)=>{var r;a.alignment==="clap"?(r=Q([],[Ne(a.body,n)]),r=Q(["inner"],[r],n)):r=Q(["inner"],[Ne(a.body,n)]);var o=Q(["fix"],[]),s=Q([a.alignment],[r,o],n),u=Q(["strut"]);return u.style.height=oe(s.height+s.depth),s.depth&&(u.style.verticalAlign=oe(-s.depth)),s.children.unshift(u),s=Q(["thinbox"],[s],n),Q(["mord","vbox"],[s],n)},mathmlBuilder:(a,n)=>{var r=new te("mpadded",[Ue(a.body,n)]);if(a.alignment!=="rlap"){var o=a.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",o+"width")}return r.setAttribute("width","0px"),r}});se({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(a,n){var{funcName:r,parser:o}=a,s=o.mode;o.switchMode("math");var u=r==="\\("?"\\)":"$",f=o.parseExpression(!1,u);return o.expect(u),o.switchMode(s),{type:"styling",mode:o.mode,style:"text",body:f}}});se({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(a,n){throw new ee("Mismatched "+a.funcName)}});var pd=(a,n)=>{switch(n.style.size){case Me.DISPLAY.size:return a.display;case Me.TEXT.size:return a.text;case Me.SCRIPT.size:return a.script;case Me.SCRIPTSCRIPT.size:return a.scriptscript;default:return a.text}};se({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(a,n)=>{var{parser:r}=a;return{type:"mathchoice",mode:r.mode,display:lt(n[0]),text:lt(n[1]),script:lt(n[2]),scriptscript:lt(n[3])}},htmlBuilder:(a,n)=>{var r=pd(a,n),o=pt(r,n,!1);return Fn(o)},mathmlBuilder:(a,n)=>{var r=pd(a,n);return gr(r,n)}});var b4=(a,n,r,o,s,u,f)=>{a=Q([],[a]);var p=r&&On(r),v,w;if(n){var b=Ne(n,o.havingStyle(s.sup()),o);w={elem:b,kern:Math.max(o.fontMetrics().bigOpSpacing1,o.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var $=Ne(r,o.havingStyle(s.sub()),o);v={elem:$,kern:Math.max(o.fontMetrics().bigOpSpacing2,o.fontMetrics().bigOpSpacing4-$.height)}}var T;if(w&&v){var S=o.fontMetrics().bigOpSpacing5+v.elem.height+v.elem.depth+v.kern+a.depth+f;T=Oe({positionType:"bottom",positionData:S,children:[{type:"kern",size:o.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:oe(-u)},{type:"kern",size:v.kern},{type:"elem",elem:a},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:oe(u)},{type:"kern",size:o.fontMetrics().bigOpSpacing5}]})}else if(v){var P=a.height-f;T=Oe({positionType:"top",positionData:P,children:[{type:"kern",size:o.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:oe(-u)},{type:"kern",size:v.kern},{type:"elem",elem:a}]})}else if(w){var D=a.depth+f;T=Oe({positionType:"bottom",positionData:D,children:[{type:"elem",elem:a},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:oe(u)},{type:"kern",size:o.fontMetrics().bigOpSpacing5}]})}else return a;var j=[T];if(v&&u!==0&&!p){var I=Q(["mspace"],[],o);I.style.marginRight=oe(u),j.unshift(I)}return Q(["mop","op-limits"],j,o)},$4=new Set(["\\smallint"]),x0=(a,n)=>{var r,o,s=!1,u;a.type==="supsub"?(r=a.sup,o=a.sub,u=Ae(a.base,"op"),s=!0):u=Ae(a,"op");var f=n.style,p=!1;f.size===Me.DISPLAY.size&&u.symbol&&!$4.has(u.name)&&(p=!0);var v;if(u.symbol){var w=p?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),v=Et(u.name,w,"math",n,["mop","op-symbol",p?"large-op":"small-op"]),b.length>0){var $=v.italic,T=Vd(b+"Size"+(p?"2":"1"),n);v=Oe({positionType:"individualShift",children:[{type:"elem",elem:v,shift:0},{type:"elem",elem:T,shift:p?.08:0}]}),u.name="\\"+b,v.classes.unshift("mop"),v.italic=$}}else if(u.body){var S=pt(u.body,n,!0);S.length===1&&S[0]instanceof nn?(v=S[0],v.classes[0]="mop"):v=Q(["mop"],S,n)}else{for(var P=[],D=1;D<u.name.length;D++)P.push(Rs(u.name[D],u.mode,n));v=Q(["mop"],P,n)}var j=0,I=0;return(v instanceof nn||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(j=(v.height-v.depth)/2-n.fontMetrics().axisHeight,I=v.italic),s?b4(v,r,o,n,f,I,j):(j&&(v.style.position="relative",v.style.top=oe(j)),v)},bi=(a,n)=>{var r;if(a.symbol)r=new te("mo",[rn(a.name,a.mode)]),$4.has(a.name)&&r.setAttribute("largeop","false");else if(a.body)r=new te("mo",It(a.body,n));else{r=new te("mi",[new dt(a.name.slice(1))]);var o=new te("mo",[rn("⁡","text")]);a.parentIsSupSub?r=new te("mrow",[r,o]):r=Xd([r,o])}return r},w7={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};se({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=o;return s.length===1&&(s=w7[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:x0,mathmlBuilder:bi});se({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:lt(o)}},htmlBuilder:x0,mathmlBuilder:bi});var b7={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};se({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(a){var{parser:n,funcName:r}=a;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:x0,mathmlBuilder:bi});se({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(a){var{parser:n,funcName:r}=a;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:x0,mathmlBuilder:bi});se({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(a){var{parser:n,funcName:r}=a,o=r;return o.length===1&&(o=b7[o]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:o}},htmlBuilder:x0,mathmlBuilder:bi});var k4=(a,n)=>{var r,o,s=!1,u;a.type==="supsub"?(r=a.sup,o=a.sub,u=Ae(a.base,"operatorname"),s=!0):u=Ae(a,"operatorname");var f;if(u.body.length>0){for(var p=u.body.map($=>{var T=$.text;return typeof T=="string"?{type:"textord",mode:$.mode,text:T}:$}),v=pt(p,n.withFont("mathrm"),!0),w=0;w<v.length;w++){var b=v[w];b instanceof nn&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}f=Q(["mop"],v,n)}else f=Q(["mop"],[],n);return s?b4(f,r,o,n,n.style,0,0):f},$7=(a,n)=>{for(var r=It(a.body,n.withFont("mathrm")),o=!0,s=0;s<r.length;s++){var u=r[s];if(!(u instanceof Qd))if(u instanceof te)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var f=u.children[0];u.children.length===1&&f instanceof dt?f.text=f.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):o=!1;break}default:o=!1}else o=!1}if(o){var p=r.map(b=>b.toText()).join("");r=[new dt(p)]}var v=new te("mi",r);v.setAttribute("mathvariant","normal");var w=new te("mo",[rn("⁡","text")]);return a.parentIsSupSub?new te("mrow",[v,w]):Xd([v,w])};se({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0];return{type:"operatorname",mode:r.mode,body:lt(s),alwaysHandleSupSub:o==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:k4,mathmlBuilder:$7});x("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Br({type:"ordgroup",htmlBuilder(a,n){return a.semisimple?Fn(pt(a.body,n,!1)):Q(["mord"],pt(a.body,n,!0),n)},mathmlBuilder(a,n){return gr(a.body,n,!0)}});se({type:"overline",names:["\\overline"],props:{numArgs:1},handler(a,n){var{parser:r}=a,o=n[0];return{type:"overline",mode:r.mode,body:o}},htmlBuilder(a,n){var r=Ne(a.body,n.havingCrampedStyle()),o=p0("overline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:o},{type:"kern",size:s}]});return Q(["mord","overline"],[u],n)},mathmlBuilder(a,n){var r=new te("mo",[new dt("‾")]);r.setAttribute("stretchy","true");var o=new te("mover",[Ue(a.body,n),r]);return o.setAttribute("accent","true"),o}});se({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"phantom",mode:r.mode,body:lt(o)}},htmlBuilder:(a,n)=>{var r=pt(a.body,n.withPhantom(),!1);return Fn(r)},mathmlBuilder:(a,n)=>{var r=It(a.body,n);return new te("mphantom",r)}});se({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"hphantom",mode:r.mode,body:o}},htmlBuilder:(a,n)=>{var r=Q([],[Ne(a.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var o=0;o<r.children.length;o++)r.children[o].height=0,r.children[o].depth=0;return r=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),Q(["mord"],[r],n)},mathmlBuilder:(a,n)=>{var r=It(lt(a.body),n),o=new te("mphantom",r),s=new te("mpadded",[o]);return s.setAttribute("height","0px"),s.setAttribute("depth","0px"),s}});se({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"vphantom",mode:r.mode,body:o}},htmlBuilder:(a,n)=>{var r=Q(["inner"],[Ne(a.body,n.withPhantom())]),o=Q(["fix"],[]);return Q(["mord","rlap"],[r,o],n)},mathmlBuilder:(a,n)=>{var r=It(lt(a.body),n),o=new te("mphantom",r),s=new te("mpadded",[o]);return s.setAttribute("width","0px"),s}});se({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(a,n){var{parser:r}=a,o=Ae(n[0],"size").value,s=n[1];return{type:"raisebox",mode:r.mode,dy:o,body:s}},htmlBuilder(a,n){var r=Ne(a.body,n),o=nt(a.dy,n);return Oe({positionType:"shift",positionData:-o,children:[{type:"elem",elem:r}]})},mathmlBuilder(a,n){var r=new te("mpadded",[Ue(a.body,n)]),o=a.dy.number+a.dy.unit;return r.setAttribute("voffset",o),r}});se({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(a){var{parser:n}=a;return{type:"internal",mode:n.mode}}});se({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(a,n,r){var{parser:o}=a,s=r[0],u=Ae(n[0],"size"),f=Ae(n[1],"size");return{type:"rule",mode:o.mode,shift:s&&Ae(s,"size").value,width:u.value,height:f.value}},htmlBuilder(a,n){var r=Q(["mord","rule"],[],n),o=nt(a.width,n),s=nt(a.height,n),u=a.shift?nt(a.shift,n):0;return r.style.borderRightWidth=oe(o),r.style.borderTopWidth=oe(s),r.style.bottom=oe(u),r.width=o,r.height=s+u,r.depth=-u,r.maxFontSize=s*1.125*n.sizeMultiplier,r},mathmlBuilder(a,n){var r=nt(a.width,n),o=nt(a.height,n),s=a.shift?nt(a.shift,n):0,u=n.color&&n.getColor()||"black",f=new te("mspace");f.setAttribute("mathbackground",u),f.setAttribute("width",oe(r)),f.setAttribute("height",oe(o));var p=new te("mpadded",[f]);return s>=0?p.setAttribute("height",oe(s)):(p.setAttribute("height",oe(s)),p.setAttribute("depth",oe(-s))),p.setAttribute("voffset",oe(s)),p}});function _4(a,n,r){for(var o=pt(a,n,!1),s=n.sizeMultiplier/r.sizeMultiplier,u=0;u<o.length;u++){var f=o[u].classes.indexOf("sizing");f<0?Array.prototype.push.apply(o[u].classes,n.sizingClasses(r)):o[u].classes[f+1]==="reset-size"+n.size&&(o[u].classes[f+1]="reset-size"+r.size),o[u].height*=s,o[u].depth*=s}return Fn(o)}var vd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],k7=(a,n)=>{var r=n.havingSize(a.size);return _4(a.body,r,n)};se({type:"sizing",names:vd,props:{numArgs:0,allowedInText:!0},handler:(a,n)=>{var{breakOnTokenText:r,funcName:o,parser:s}=a,u=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:vd.indexOf(o)+1,body:u}},htmlBuilder:k7,mathmlBuilder:(a,n)=>{var r=n.havingSize(a.size),o=It(a.body,r),s=new te("mstyle",o);return s.setAttribute("mathsize",oe(r.sizeMultiplier)),s}});se({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(a,n,r)=>{var{parser:o}=a,s=!1,u=!1,f=r[0]&&Ae(r[0],"ordgroup");if(f)for(var p="",v=0;v<f.body.length;++v){var w=f.body[v];if(p=w.text,p==="t")s=!0;else if(p==="b")u=!0;else{s=!1,u=!1;break}}else s=!0,u=!0;var b=n[0];return{type:"smash",mode:o.mode,body:b,smashHeight:s,smashDepth:u}},htmlBuilder:(a,n)=>{var r=Q([],[Ne(a.body,n)]);if(!a.smashHeight&&!a.smashDepth)return r;if(a.smashHeight&&(r.height=0,r.children))for(var o=0;o<r.children.length;o++)r.children[o].height=0;if(a.smashDepth&&(r.depth=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].depth=0;var u=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return Q(["mord"],[u],n)},mathmlBuilder:(a,n)=>{var r=new te("mpadded",[Ue(a.body,n)]);return a.smashHeight&&r.setAttribute("height","0px"),a.smashDepth&&r.setAttribute("depth","0px"),r}});se({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(a,n,r){var{parser:o}=a,s=r[0],u=n[0];return{type:"sqrt",mode:o.mode,body:u,index:s}},htmlBuilder(a,n){var r=Ne(a.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=v0(r,n);var o=n.fontMetrics(),s=o.defaultRuleThickness,u=s;n.style.id<Me.TEXT.id&&(u=n.fontMetrics().xHeight);var f=s+u/4,p=r.height+r.depth+f+s,{span:v,ruleWidth:w,advanceWidth:b}=u7(p,n),$=v.height-w;$>r.height+r.depth+f&&(f=(f+$-r.height-r.depth)/2);var T=v.height-r.height-f-w;r.style.paddingLeft=oe(b);var S=Oe({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+T)},{type:"elem",elem:v},{type:"kern",size:w}]});if(a.index){var P=n.havingStyle(Me.SCRIPTSCRIPT),D=Ne(a.index,P,n),j=.6*(S.height-S.depth),I=Oe({positionType:"shift",positionData:-j,children:[{type:"elem",elem:D}]}),W=Q(["root"],[I]);return Q(["mord","sqrt"],[W,S],n)}else return Q(["mord","sqrt"],[S],n)},mathmlBuilder(a,n){var{body:r,index:o}=a;return o?new te("mroot",[Ue(r,n),Ue(o,n)]):new te("msqrt",[Ue(r,n)])}});var gd={display:Me.DISPLAY,text:Me.TEXT,script:Me.SCRIPT,scriptscript:Me.SCRIPTSCRIPT};se({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a,n){var{breakOnTokenText:r,funcName:o,parser:s}=a,u=s.parseExpression(!0,r),f=o.slice(1,o.length-5);return{type:"styling",mode:s.mode,style:f,body:u}},htmlBuilder(a,n){var r=gd[a.style],o=n.havingStyle(r).withFont("");return _4(a.body,o,n)},mathmlBuilder(a,n){var r=gd[a.style],o=n.havingStyle(r),s=It(a.body,o),u=new te("mstyle",s),f={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},p=f[a.style];return u.setAttribute("scriptlevel",p[0]),u.setAttribute("displaystyle",p[1]),u}});var _7=function(n,r){var o=n.base;if(o)if(o.type==="op"){var s=o.limits&&(r.style.size===Me.DISPLAY.size||o.alwaysHandleSupSub);return s?x0:null}else if(o.type==="operatorname"){var u=o.alwaysHandleSupSub&&(r.style.size===Me.DISPLAY.size||o.limits);return u?k4:null}else{if(o.type==="accent")return On(o.base)?Os:null;if(o.type==="horizBrace"){var f=!n.sub;return f===o.isOver?w4:null}else return null}else return null};Br({type:"supsub",htmlBuilder(a,n){var r=_7(a,n);if(r)return r(a,n);var{base:o,sup:s,sub:u}=a,f=Ne(o,n),p,v,w=n.fontMetrics(),b=0,$=0,T=o&&On(o);if(s){var S=n.havingStyle(n.style.sup());p=Ne(s,S,n),T||(b=f.height-S.fontMetrics().supDrop*S.sizeMultiplier/n.sizeMultiplier)}if(u){var P=n.havingStyle(n.style.sub());v=Ne(u,P,n),T||($=f.depth+P.fontMetrics().subDrop*P.sizeMultiplier/n.sizeMultiplier)}var D;n.style===Me.DISPLAY?D=w.sup1:n.style.cramped?D=w.sup3:D=w.sup2;var j=n.sizeMultiplier,I=oe(.5/w.ptPerEm/j),W=null;if(v){var N=a.base&&a.base.type==="op"&&a.base.name&&(a.base.name==="\\oiint"||a.base.name==="\\oiiint");(f instanceof nn||N)&&(W=oe(-f.italic))}var L;if(p&&v){b=Math.max(b,D,p.depth+.25*w.xHeight),$=Math.max($,w.sub2);var U=w.defaultRuleThickness,K=4*U;if(b-p.depth-(v.height-$)<K){$=K-(b-p.depth)+v.height;var H=.8*w.xHeight-(b-p.depth);H>0&&(b+=H,$-=H)}var Z=[{type:"elem",elem:v,shift:$,marginRight:I,marginLeft:W},{type:"elem",elem:p,shift:-b,marginRight:I}];L=Oe({positionType:"individualShift",children:Z})}else if(v){$=Math.max($,w.sub1,v.height-.8*w.xHeight);var V=[{type:"elem",elem:v,marginLeft:W,marginRight:I}];L=Oe({positionType:"shift",positionData:$,children:V})}else if(p)b=Math.max(b,D,p.depth+.25*w.xHeight),L=Oe({positionType:"shift",positionData:-b,children:[{type:"elem",elem:p,marginRight:I}]});else throw new Error("supsub must have either sup or sub.");var ge=ws(f,"right")||"mord";return Q([ge],[f,Q(["msupsub"],[L])],n)},mathmlBuilder(a,n){var r=!1,o,s;a.base&&a.base.type==="horizBrace"&&(s=!!a.sup,s===a.base.isOver&&(r=!0,o=a.base.isOver)),a.base&&(a.base.type==="op"||a.base.type==="operatorname")&&(a.base.parentIsSupSub=!0);var u=[Ue(a.base,n)];a.sub&&u.push(Ue(a.sub,n)),a.sup&&u.push(Ue(a.sup,n));var f;if(r)f=o?"mover":"munder";else if(a.sub)if(a.sup){var w=a.base;w&&w.type==="op"&&w.limits&&n.style===Me.DISPLAY||w&&w.type==="operatorname"&&w.alwaysHandleSupSub&&(n.style===Me.DISPLAY||w.limits)?f="munderover":f="msubsup"}else{var v=a.base;v&&v.type==="op"&&v.limits&&(n.style===Me.DISPLAY||v.alwaysHandleSupSub)||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(v.limits||n.style===Me.DISPLAY)?f="munder":f="msub"}else{var p=a.base;p&&p.type==="op"&&p.limits&&(n.style===Me.DISPLAY||p.alwaysHandleSupSub)||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(p.limits||n.style===Me.DISPLAY)?f="mover":f="msup"}return new te(f,u)}});Br({type:"atom",htmlBuilder(a,n){return Rs(a.text,a.mode,n,["m"+a.family])},mathmlBuilder(a,n){var r=new te("mo",[rn(a.text,a.mode)]);if(a.family==="bin"){var o=Ns(a,n);o==="bold-italic"&&r.setAttribute("mathvariant",o)}else a.family==="punct"?r.setAttribute("separator","true"):(a.family==="open"||a.family==="close")&&r.setAttribute("stretchy","false");return r}});var z4={mi:"italic",mn:"normal",mtext:"normal"};Br({type:"mathord",htmlBuilder(a,n){return Ja(a,n,"mathord")},mathmlBuilder(a,n){var r=new te("mi",[rn(a.text,a.mode,n)]),o=Ns(a,n)||"italic";return o!==z4[r.type]&&r.setAttribute("mathvariant",o),r}});Br({type:"textord",htmlBuilder(a,n){return Ja(a,n,"textord")},mathmlBuilder(a,n){var r=rn(a.text,a.mode,n),o=Ns(a,n)||"normal",s;return a.mode==="text"?s=new te("mtext",[r]):/[0-9]/.test(a.text)?s=new te("mn",[r]):a.text==="\\prime"?s=new te("mo",[r]):s=new te("mi",[r]),o!==z4[s.type]&&s.setAttribute("mathvariant",o),s}});var fs={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},hs={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Br({type:"spacing",htmlBuilder(a,n){if(hs.hasOwnProperty(a.text)){var r=hs[a.text].className||"";if(a.mode==="text"){var o=Ja(a,n,"textord");return o.classes.push(r),o}else return Q(["mspace",r],[Rs(a.text,a.mode,n)],n)}else{if(fs.hasOwnProperty(a.text))return Q(["mspace",fs[a.text]],[],n);throw new ee('Unknown type of space "'+a.text+'"')}},mathmlBuilder(a,n){var r;if(hs.hasOwnProperty(a.text))r=new te("mtext",[new dt(" ")]);else{if(fs.hasOwnProperty(a.text))return new te("mspace");throw new ee('Unknown type of space "'+a.text+'"')}return r}});var yd=()=>{var a=new te("mtd",[]);return a.setAttribute("width","50%"),a};Br({type:"tag",mathmlBuilder(a,n){var r=new te("mtable",[new te("mtr",[yd(),new te("mtd",[gr(a.body,n)]),yd(),new te("mtd",[gr(a.tag,n)])])]);return r.setAttribute("width","100%"),r}});var xd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},wd={"\\textbf":"textbf","\\textmd":"textmd"},z7={"\\textit":"textit","\\textup":"textup"},bd=(a,n)=>{var r=a.font;if(r){if(xd[r])return n.withTextFontFamily(xd[r]);if(wd[r])return n.withTextFontWeight(wd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(z7[r])};se({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];return{type:"text",mode:r.mode,body:lt(s),font:o}},htmlBuilder(a,n){var r=bd(a,n),o=pt(a.body,r,!0);return Q(["mord","text"],o,r)},mathmlBuilder(a,n){var r=bd(a,n);return gr(a.body,r)}});se({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(a,n){var{parser:r}=a;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(a,n){var r=Ne(a.body,n),o=p0("underline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Oe({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:o},{type:"kern",size:3*s},{type:"elem",elem:r}]});return Q(["mord","underline"],[u],n)},mathmlBuilder(a,n){var r=new te("mo",[new dt("‾")]);r.setAttribute("stretchy","true");var o=new te("munder",[Ue(a.body,n),r]);return o.setAttribute("accentunder","true"),o}});se({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(a,n){var{parser:r}=a;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(a,n){var r=Ne(a.body,n),o=n.fontMetrics().axisHeight,s=.5*(r.height-o-(r.depth+o));return Oe({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(a,n){return new te("mpadded",[Ue(a.body,n)],["vcenter"])}});se({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(a,n,r){throw new ee("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(a,n){for(var r=$d(a),o=[],s=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var f=r[u];f==="~"&&(f="\\textasciitilde"),o.push(Et(f,"Typewriter-Regular",a.mode,s,["mord","texttt"]))}return Q(["mord","text"].concat(s.sizingClasses(n)),Hd(o),s)},mathmlBuilder(a,n){var r=new dt($d(a)),o=new te("mtext",[r]);return o.setAttribute("mathvariant","monospace"),o}});var $d=a=>a.body.replace(/ /g,a.star?"␣":" "),hr=Gd,S4=`[ \r
	]`,S7="\\\\[a-zA-Z@]+",M7="\\\\[^\uD800-\uDFFF]",T7="("+S7+")"+S4+"*",C7=`\\\\(
|[ \r	]+
?)[ \r	]*`,zs="[̀-ͯ]",A7=new RegExp(zs+"+$"),E7="("+S4+"+)|"+(C7+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(zs+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(zs+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+T7)+("|"+M7+")");class kd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(E7,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Vt("EOF",new Ot(this,r,r));var o=this.tokenRegex.exec(n);if(o===null||o.index!==r)throw new ee("Unexpected character: '"+n[r]+"'",new Vt(n[r],new Ot(this,r,r+1)));var s=o[6]||o[3]||(o[2]?"\\ ":" ");if(this.catcodes[s]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Vt(s,new Ot(this,r,this.tokenRegex.lastIndex))}}class q7{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ee("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,o){if(o===void 0&&(o=!1),o){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var j7=p4;x("\\noexpand",function(a){var n=a.popToken();return a.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});x("\\expandafter",function(a){var n=a.popToken();return a.expandOnce(!0),{tokens:[n],numArgs:0}});x("\\@firstoftwo",function(a){var n=a.consumeArgs(2);return{tokens:n[0],numArgs:0}});x("\\@secondoftwo",function(a){var n=a.consumeArgs(2);return{tokens:n[1],numArgs:0}});x("\\@ifnextchar",function(a){var n=a.consumeArgs(3);a.consumeSpaces();var r=a.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});x("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");x("\\TextOrMath",function(a){var n=a.consumeArgs(2);return a.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var _d={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};x("\\char",function(a){var n=a.popToken(),r,o="";if(n.text==="'")r=8,n=a.popToken();else if(n.text==='"')r=16,n=a.popToken();else if(n.text==="`")if(n=a.popToken(),n.text[0]==="\\")o=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new ee("\\char` missing argument");o=n.text.charCodeAt(0)}else r=10;if(r){if(o=_d[n.text],o==null||o>=r)throw new ee("Invalid base-"+r+" digit "+n.text);for(var s;(s=_d[a.future().text])!=null&&s<r;)o*=r,o+=s,a.popToken()}return"\\@char{"+o+"}"});var Vs=(a,n,r,o)=>{var s=a.consumeArg().tokens;if(s.length!==1)throw new ee("\\newcommand's first argument must be a macro name");var u=s[0].text,f=a.isDefined(u);if(f&&!n)throw new ee("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!f&&!r)throw new ee("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var p=0;if(s=a.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var v="",w=a.expandNextToken();w.text!=="]"&&w.text!=="EOF";)v+=w.text,w=a.expandNextToken();if(!v.match(/^\s*[0-9]+\s*$/))throw new ee("Invalid number of arguments: "+v);p=parseInt(v),s=a.consumeArg().tokens}return f&&o||a.macros.set(u,{tokens:s,numArgs:p}),""};x("\\newcommand",a=>Vs(a,!1,!0,!1));x("\\renewcommand",a=>Vs(a,!0,!1,!1));x("\\providecommand",a=>Vs(a,!0,!0,!0));x("\\message",a=>{var n=a.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});x("\\errmessage",a=>{var n=a.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});x("\\show",a=>{var n=a.popToken(),r=n.text;return console.log(n,a.macros.get(r),hr[r],Ye.math[r],Ye.text[r]),""});x("\\bgroup","{");x("\\egroup","}");x("~","\\nobreakspace");x("\\lq","`");x("\\rq","'");x("\\aa","\\r a");x("\\AA","\\r A");x("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");x("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");x("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");x("ℬ","\\mathscr{B}");x("ℰ","\\mathscr{E}");x("ℱ","\\mathscr{F}");x("ℋ","\\mathscr{H}");x("ℐ","\\mathscr{I}");x("ℒ","\\mathscr{L}");x("ℳ","\\mathscr{M}");x("ℛ","\\mathscr{R}");x("ℭ","\\mathfrak{C}");x("ℌ","\\mathfrak{H}");x("ℨ","\\mathfrak{Z}");x("\\Bbbk","\\Bbb{k}");x("·","\\cdotp");x("\\llap","\\mathllap{\\textrm{#1}}");x("\\rlap","\\mathrlap{\\textrm{#1}}");x("\\clap","\\mathclap{\\textrm{#1}}");x("\\mathstrut","\\vphantom{(}");x("\\underbar","\\underline{\\text{#1}}");x("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');x("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");x("\\ne","\\neq");x("≠","\\neq");x("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");x("∉","\\notin");x("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");x("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");x("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");x("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");x("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");x("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");x("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");x("⟂","\\perp");x("‼","\\mathclose{!\\mkern-0.8mu!}");x("∌","\\notni");x("⌜","\\ulcorner");x("⌝","\\urcorner");x("⌞","\\llcorner");x("⌟","\\lrcorner");x("©","\\copyright");x("®","\\textregistered");x("️","\\textregistered");x("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');x("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');x("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');x("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');x("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");x("⋮","\\vdots");x("\\varGamma","\\mathit{\\Gamma}");x("\\varDelta","\\mathit{\\Delta}");x("\\varTheta","\\mathit{\\Theta}");x("\\varLambda","\\mathit{\\Lambda}");x("\\varXi","\\mathit{\\Xi}");x("\\varPi","\\mathit{\\Pi}");x("\\varSigma","\\mathit{\\Sigma}");x("\\varUpsilon","\\mathit{\\Upsilon}");x("\\varPhi","\\mathit{\\Phi}");x("\\varPsi","\\mathit{\\Psi}");x("\\varOmega","\\mathit{\\Omega}");x("\\substack","\\begin{subarray}{c}#1\\end{subarray}");x("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");x("\\boxed","\\fbox{$\\displaystyle{#1}$}");x("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");x("\\implies","\\DOTSB\\;\\Longrightarrow\\;");x("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");x("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");x("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var zd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},P7=new Set(["bin","rel"]);x("\\dots",function(a){var n="\\dotso",r=a.expandAfterFuture().text;return r in zd?n=zd[r]:(r.slice(0,4)==="\\not"||r in Ye.math&&P7.has(Ye.math[r].group))&&(n="\\dotsb"),n});var Gs={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};x("\\dotso",function(a){var n=a.future().text;return n in Gs?"\\ldots\\,":"\\ldots"});x("\\dotsc",function(a){var n=a.future().text;return n in Gs&&n!==","?"\\ldots\\,":"\\ldots"});x("\\cdots",function(a){var n=a.future().text;return n in Gs?"\\@cdots\\,":"\\@cdots"});x("\\dotsb","\\cdots");x("\\dotsm","\\cdots");x("\\dotsi","\\!\\cdots");x("\\dotsx","\\ldots\\,");x("\\DOTSI","\\relax");x("\\DOTSB","\\relax");x("\\DOTSX","\\relax");x("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");x("\\,","\\tmspace+{3mu}{.1667em}");x("\\thinspace","\\,");x("\\>","\\mskip{4mu}");x("\\:","\\tmspace+{4mu}{.2222em}");x("\\medspace","\\:");x("\\;","\\tmspace+{5mu}{.2777em}");x("\\thickspace","\\;");x("\\!","\\tmspace-{3mu}{.1667em}");x("\\negthinspace","\\!");x("\\negmedspace","\\tmspace-{4mu}{.2222em}");x("\\negthickspace","\\tmspace-{5mu}{.277em}");x("\\enspace","\\kern.5em ");x("\\enskip","\\hskip.5em\\relax");x("\\quad","\\hskip1em\\relax");x("\\qquad","\\hskip2em\\relax");x("\\tag","\\@ifstar\\tag@literal\\tag@paren");x("\\tag@paren","\\tag@literal{({#1})}");x("\\tag@literal",a=>{if(a.macros.get("\\df@tag"))throw new ee("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});x("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");x("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");x("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");x("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");x("\\newline","\\\\\\relax");x("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var M4=oe($n["Main-Regular"][84][1]-.7*$n["Main-Regular"][65][1]);x("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+M4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");x("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+M4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");x("\\hspace","\\@ifstar\\@hspacer\\@hspace");x("\\@hspace","\\hskip #1\\relax");x("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");x("\\ordinarycolon",":");x("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");x("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');x("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');x("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');x("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');x("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');x("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');x("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');x("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');x("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');x("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');x("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');x("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');x("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');x("∷","\\dblcolon");x("∹","\\eqcolon");x("≔","\\coloneqq");x("≕","\\eqqcolon");x("⩴","\\Coloneqq");x("\\ratio","\\vcentcolon");x("\\coloncolon","\\dblcolon");x("\\colonequals","\\coloneqq");x("\\coloncolonequals","\\Coloneqq");x("\\equalscolon","\\eqqcolon");x("\\equalscoloncolon","\\Eqqcolon");x("\\colonminus","\\coloneq");x("\\coloncolonminus","\\Coloneq");x("\\minuscolon","\\eqcolon");x("\\minuscoloncolon","\\Eqcolon");x("\\coloncolonapprox","\\Colonapprox");x("\\coloncolonsim","\\Colonsim");x("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");x("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");x("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");x("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");x("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");x("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");x("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");x("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");x("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");x("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");x("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");x("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");x("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");x("\\nleqq","\\html@mathml{\\@nleqq}{≰}");x("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");x("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");x("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");x("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");x("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");x("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");x("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");x("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");x("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");x("\\imath","\\html@mathml{\\@imath}{ı}");x("\\jmath","\\html@mathml{\\@jmath}{ȷ}");x("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");x("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");x("⟦","\\llbracket");x("⟧","\\rrbracket");x("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");x("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");x("⦃","\\lBrace");x("⦄","\\rBrace");x("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");x("⦵","\\minuso");x("\\darr","\\downarrow");x("\\dArr","\\Downarrow");x("\\Darr","\\Downarrow");x("\\lang","\\langle");x("\\rang","\\rangle");x("\\uarr","\\uparrow");x("\\uArr","\\Uparrow");x("\\Uarr","\\Uparrow");x("\\N","\\mathbb{N}");x("\\R","\\mathbb{R}");x("\\Z","\\mathbb{Z}");x("\\alef","\\aleph");x("\\alefsym","\\aleph");x("\\Alpha","\\mathrm{A}");x("\\Beta","\\mathrm{B}");x("\\bull","\\bullet");x("\\Chi","\\mathrm{X}");x("\\clubs","\\clubsuit");x("\\cnums","\\mathbb{C}");x("\\Complex","\\mathbb{C}");x("\\Dagger","\\ddagger");x("\\diamonds","\\diamondsuit");x("\\empty","\\emptyset");x("\\Epsilon","\\mathrm{E}");x("\\Eta","\\mathrm{H}");x("\\exist","\\exists");x("\\harr","\\leftrightarrow");x("\\hArr","\\Leftrightarrow");x("\\Harr","\\Leftrightarrow");x("\\hearts","\\heartsuit");x("\\image","\\Im");x("\\infin","\\infty");x("\\Iota","\\mathrm{I}");x("\\isin","\\in");x("\\Kappa","\\mathrm{K}");x("\\larr","\\leftarrow");x("\\lArr","\\Leftarrow");x("\\Larr","\\Leftarrow");x("\\lrarr","\\leftrightarrow");x("\\lrArr","\\Leftrightarrow");x("\\Lrarr","\\Leftrightarrow");x("\\Mu","\\mathrm{M}");x("\\natnums","\\mathbb{N}");x("\\Nu","\\mathrm{N}");x("\\Omicron","\\mathrm{O}");x("\\plusmn","\\pm");x("\\rarr","\\rightarrow");x("\\rArr","\\Rightarrow");x("\\Rarr","\\Rightarrow");x("\\real","\\Re");x("\\reals","\\mathbb{R}");x("\\Reals","\\mathbb{R}");x("\\Rho","\\mathrm{P}");x("\\sdot","\\cdot");x("\\sect","\\S");x("\\spades","\\spadesuit");x("\\sub","\\subset");x("\\sube","\\subseteq");x("\\supe","\\supseteq");x("\\Tau","\\mathrm{T}");x("\\thetasym","\\vartheta");x("\\weierp","\\wp");x("\\Zeta","\\mathrm{Z}");x("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");x("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");x("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");x("\\bra","\\mathinner{\\langle{#1}|}");x("\\ket","\\mathinner{|{#1}\\rangle}");x("\\braket","\\mathinner{\\langle{#1}\\rangle}");x("\\Bra","\\left\\langle#1\\right|");x("\\Ket","\\left|#1\\right\\rangle");var T4=a=>n=>{var r=n.consumeArg().tokens,o=n.consumeArg().tokens,s=n.consumeArg().tokens,u=n.consumeArg().tokens,f=n.macros.get("|"),p=n.macros.get("\\|");n.macros.beginGroup();var v=$=>T=>{a&&(T.macros.set("|",f),s.length&&T.macros.set("\\|",p));var S=$;if(!$&&s.length){var P=T.future();P.text==="|"&&(T.popToken(),S=!0)}return{tokens:S?s:o,numArgs:0}};n.macros.set("|",v(!1)),s.length&&n.macros.set("\\|",v(!0));var w=n.consumeArg().tokens,b=n.expandTokens([...u,...w,...r]);return n.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};x("\\bra@ket",T4(!1));x("\\bra@set",T4(!0));x("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");x("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");x("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");x("\\angln","{\\angl n}");x("\\blue","\\textcolor{##6495ed}{#1}");x("\\orange","\\textcolor{##ffa500}{#1}");x("\\pink","\\textcolor{##ff00af}{#1}");x("\\red","\\textcolor{##df0030}{#1}");x("\\green","\\textcolor{##28ae7b}{#1}");x("\\gray","\\textcolor{gray}{#1}");x("\\purple","\\textcolor{##9d38bd}{#1}");x("\\blueA","\\textcolor{##ccfaff}{#1}");x("\\blueB","\\textcolor{##80f6ff}{#1}");x("\\blueC","\\textcolor{##63d9ea}{#1}");x("\\blueD","\\textcolor{##11accd}{#1}");x("\\blueE","\\textcolor{##0c7f99}{#1}");x("\\tealA","\\textcolor{##94fff5}{#1}");x("\\tealB","\\textcolor{##26edd5}{#1}");x("\\tealC","\\textcolor{##01d1c1}{#1}");x("\\tealD","\\textcolor{##01a995}{#1}");x("\\tealE","\\textcolor{##208170}{#1}");x("\\greenA","\\textcolor{##b6ffb0}{#1}");x("\\greenB","\\textcolor{##8af281}{#1}");x("\\greenC","\\textcolor{##74cf70}{#1}");x("\\greenD","\\textcolor{##1fab54}{#1}");x("\\greenE","\\textcolor{##0d923f}{#1}");x("\\goldA","\\textcolor{##ffd0a9}{#1}");x("\\goldB","\\textcolor{##ffbb71}{#1}");x("\\goldC","\\textcolor{##ff9c39}{#1}");x("\\goldD","\\textcolor{##e07d10}{#1}");x("\\goldE","\\textcolor{##a75a05}{#1}");x("\\redA","\\textcolor{##fca9a9}{#1}");x("\\redB","\\textcolor{##ff8482}{#1}");x("\\redC","\\textcolor{##f9685d}{#1}");x("\\redD","\\textcolor{##e84d39}{#1}");x("\\redE","\\textcolor{##bc2612}{#1}");x("\\maroonA","\\textcolor{##ffbde0}{#1}");x("\\maroonB","\\textcolor{##ff92c6}{#1}");x("\\maroonC","\\textcolor{##ed5fa6}{#1}");x("\\maroonD","\\textcolor{##ca337c}{#1}");x("\\maroonE","\\textcolor{##9e034e}{#1}");x("\\purpleA","\\textcolor{##ddd7ff}{#1}");x("\\purpleB","\\textcolor{##c6b9fc}{#1}");x("\\purpleC","\\textcolor{##aa87ff}{#1}");x("\\purpleD","\\textcolor{##7854ab}{#1}");x("\\purpleE","\\textcolor{##543b78}{#1}");x("\\mintA","\\textcolor{##f5f9e8}{#1}");x("\\mintB","\\textcolor{##edf2df}{#1}");x("\\mintC","\\textcolor{##e0e5cc}{#1}");x("\\grayA","\\textcolor{##f6f7f7}{#1}");x("\\grayB","\\textcolor{##f0f1f2}{#1}");x("\\grayC","\\textcolor{##e3e5e6}{#1}");x("\\grayD","\\textcolor{##d6d8da}{#1}");x("\\grayE","\\textcolor{##babec2}{#1}");x("\\grayF","\\textcolor{##888d93}{#1}");x("\\grayG","\\textcolor{##626569}{#1}");x("\\grayH","\\textcolor{##3b3e40}{#1}");x("\\grayI","\\textcolor{##21242c}{#1}");x("\\kaBlue","\\textcolor{##314453}{#1}");x("\\kaGreen","\\textcolor{##71B307}{#1}");var C4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class R7{constructor(n,r,o){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new q7(j7,r.macros),this.mode=o,this.stack=[]}feed(n){this.lexer=new kd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,o,s;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:o}=this.consumeArg(["]"])}else({tokens:s,start:r,end:o}=this.consumeArg());return this.pushToken(new Vt("EOF",o.loc)),this.pushTokens(s),new Vt("",Ot.range(r,o))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],o=n&&n.length>0;o||this.consumeSpaces();var s=this.future(),u,f=0,p=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++f;else if(u.text==="}"){if(--f,f===-1)throw new ee("Extra }",u)}else if(u.text==="EOF")throw new ee("Unexpected end of input in a macro argument, expected '"+(n&&o?n[p]:"}")+"'",u);if(n&&o)if((f===0||f===1&&n[p]==="{")&&u.text===n[p]){if(++p,p===n.length){r.splice(-p,p);break}}else p=0}while(f!==0||o);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new ee("The length of delimiters doesn't match the number of args!");for(var o=r[0],s=0;s<o.length;s++){var u=this.popToken();if(o[s]!==u.text)throw new ee("Use of the macro doesn't match its definition",u)}}for(var f=[],p=0;p<n;p++)f.push(this.consumeArg(r&&r[p+1]).tokens);return f}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new ee("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),o=r.text,s=r.noexpand?null:this._getExpansion(o);if(s==null||n&&s.unexpandable){if(n&&s==null&&o[0]==="\\"&&!this.isDefined(o))throw new ee("Undefined control sequence: "+o);return this.pushToken(r),!1}this.countExpansion(1);var u=s.tokens,f=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){u=u.slice();for(var p=u.length-1;p>=0;--p){var v=u[p];if(v.text==="#"){if(p===0)throw new ee("Incomplete placeholder at end of macro body",v);if(v=u[--p],v.text==="#")u.splice(p+1,1);else if(/^[1-9]$/.test(v.text))u.splice(p,2,...f[+v.text-1]);else throw new ee("Not a valid argument number",v)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Vt(n)]):void 0}expandTokens(n){var r=[],o=this.stack.length;for(this.pushTokens(n);this.stack.length>o;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(o=>o.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var o=this.lexer.catcodes[n];if(o!=null&&o!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var u=0;if(s.includes("#"))for(var f=s.replace(/##/g,"");f.includes("#"+(u+1));)++u;for(var p=new kd(s,this.settings),v=[],w=p.lex();w.text!=="EOF";)v.push(w),w=p.lex();v.reverse();var b={tokens:v,numArgs:u};return b}return s}isDefined(n){return this.macros.has(n)||hr.hasOwnProperty(n)||Ye.math.hasOwnProperty(n)||Ye.text.hasOwnProperty(n)||C4.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:hr.hasOwnProperty(n)&&!hr[n].primitive}}var Sd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,La=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),ms={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Md={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class oo{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new R7(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new ee("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Vt("}")),this.gullet.pushTokens(n);var o=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,o}parseExpression(n,r){for(var o=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(oo.endOfExpression.has(s.text)||r&&s.text===r||n&&hr[s.text]&&hr[s.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;o.push(u)}return this.mode==="text"&&this.formLigatures(o),this.handleInfixNodes(o)}handleInfixNodes(n){for(var r=-1,o,s=0;s<n.length;s++)if(n[s].type==="infix"){if(r!==-1)throw new ee("only one infix operator per group",n[s].token);r=s,o=n[s].replaceWith}if(r!==-1&&o){var u,f,p=n.slice(0,r),v=n.slice(r+1);p.length===1&&p[0].type==="ordgroup"?u=p[0]:u={type:"ordgroup",mode:this.mode,body:p},v.length===1&&v[0].type==="ordgroup"?f=v[0]:f={type:"ordgroup",mode:this.mode,body:v};var w;return o==="\\\\abovefrac"?w=this.callFunction(o,[u,n[r],f],[]):w=this.callFunction(o,[u,f],[]),[w]}else return n}handleSupSubscript(n){var r=this.fetch(),o=r.text;this.consume(),this.consumeSpaces();var s;do{var u;s=this.parseGroup(n)}while(((u=s)==null?void 0:u.type)==="internal");if(!s)throw new ee("Expected group after '"+o+"'",r);return s}formatUnsupportedCmd(n){for(var r=[],o=0;o<n.length;o++)r.push({type:"textord",mode:"text",text:n[o]});var s={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var o,s;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var f=u.text==="\\limits";r.limits=f,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new ee("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(o)throw new ee("Double superscript",u);o=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(s)throw new ee("Double subscript",u);s=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(o)throw new ee("Double superscript",u);var p={type:"textord",mode:this.mode,text:"\\prime"},v=[p];for(this.consume();this.fetch().text==="'";)v.push(p),this.consume();this.fetch().text==="^"&&v.push(this.handleSupSubscript("superscript")),o={type:"ordgroup",mode:this.mode,body:v}}else if(La[u.text]){var w=Sd.test(u.text),b=[];for(b.push(new Vt(La[u.text])),this.consume();;){var $=this.fetch().text;if(!La[$]||Sd.test($)!==w)break;b.unshift(new Vt(La[$])),this.consume()}var T=this.subparse(b);w?s={type:"ordgroup",mode:"math",body:T}:o={type:"ordgroup",mode:"math",body:T}}else break}return o||s?{type:"supsub",mode:this.mode,base:r,sup:o,sub:s}:r}parseFunction(n,r){var o=this.fetch(),s=o.text,u=hr[s];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new ee("Got function '"+s+"' with no arguments"+(r?" as "+r:""),o);if(this.mode==="text"&&!u.allowedInText)throw new ee("Can't use function '"+s+"' in text mode",o);if(this.mode==="math"&&u.allowedInMath===!1)throw new ee("Can't use function '"+s+"' in math mode",o);var{args:f,optArgs:p}=this.parseArguments(s,u);return this.callFunction(s,f,p,o,n)}callFunction(n,r,o,s,u){var f={funcName:n,parser:this,token:s,breakOnTokenText:u},p=hr[n];if(p&&p.handler)return p.handler(f,r,o);throw new ee("No function handler for "+n)}parseArguments(n,r){var o=r.numArgs+r.numOptionalArgs;if(o===0)return{args:[],optArgs:[]};for(var s=[],u=[],f=0;f<o;f++){var p=r.argTypes&&r.argTypes[f],v=f<r.numOptionalArgs;(r.primitive&&p==null||r.type==="sqrt"&&f===1&&u[0]==null)&&(p="primitive");var w=this.parseGroupOfType("argument to '"+n+"'",p,v);if(v)u.push(w);else if(w!=null)s.push(w);else throw new ee("Null argument, please report this as a bug")}return{args:s,optArgs:u}}parseGroupOfType(n,r,o){switch(r){case"color":return this.parseColorGroup(o);case"size":return this.parseSizeGroup(o);case"url":return this.parseUrlGroup(o);case"math":case"text":return this.parseArgumentGroup(o,r);case"hbox":{var s=this.parseArgumentGroup(o,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",o);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(o)throw new ee("A primitive argument cannot be optional");var f=this.parseGroup(n);if(f==null)throw new ee("Expected group as "+n,this.fetch());return f}case"original":case null:case void 0:return this.parseArgumentGroup(o);default:throw new ee("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var o=this.gullet.scanArgument(r);if(o==null)return null;for(var s="",u;(u=this.fetch()).text!=="EOF";)s+=u.text,this.consume();return this.consume(),o.text=s,o}parseRegexGroup(n,r){for(var o=this.fetch(),s=o,u="",f;(f=this.fetch()).text!=="EOF"&&n.test(u+f.text);)s=f,u+=s.text,this.consume();if(u==="")throw new ee("Invalid "+r+": '"+o.text+"'",o);return o.range(s,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var o=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!o)throw new ee("Invalid color: '"+r.text+"'",r);var s=o[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(n){var r,o=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",o=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new ee("Invalid size: '"+r.text+"'",r);var u={number:+(s[1]+s[2]),unit:s[3]};if(!Nd(u))throw new ee("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:o}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var o=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:o}}parseArgumentGroup(n,r){var o=this.gullet.scanArgument(n);if(o==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var f={type:"ordgroup",mode:this.mode,loc:o.loc,body:u};return r&&this.switchMode(s),f}parseGroup(n,r){var o=this.fetch(),s=o.text,u;if(s==="{"||s==="\\begingroup"){this.consume();var f=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var p=this.parseExpression(!1,f),v=this.fetch();this.expect(f),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Ot.range(o,v),body:p,semisimple:s==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&s[0]==="\\"&&!C4.hasOwnProperty(s)){if(this.settings.throwOnError)throw new ee("Undefined control sequence: "+s,o);u=this.formatUnsupportedCmd(s),this.consume()}return u}formLigatures(n){for(var r=n.length-1,o=0;o<r;++o){var s=n[o],u=s.text;u==="-"&&n[o+1].text==="-"&&(o+1<r&&n[o+2].text==="-"?(n.splice(o,3,{type:"textord",mode:"text",loc:Ot.range(s,n[o+2]),text:"---"}),r-=2):(n.splice(o,2,{type:"textord",mode:"text",loc:Ot.range(s,n[o+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[o+1].text===u&&(n.splice(o,2,{type:"textord",mode:"text",loc:Ot.range(s,n[o+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var o=r.slice(5),s=o.charAt(0)==="*";if(s&&(o=o.slice(1)),o.length<2||o.charAt(0)!==o.slice(-1))throw new ee(`\\verb assertion failed --
                    please report what input caused this bug`);return o=o.slice(1,-1),{type:"verb",mode:"text",body:o,star:s}}Md.hasOwnProperty(r[0])&&!Ye[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Md[r[0]]+r.slice(1));var u=A7.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var f;if(Ye[this.mode][r]){this.settings.strict&&this.mode==="math"&&ys.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var p=Ye[this.mode][r].group,v=Ot.range(n),w;if(E6.hasOwnProperty(p)){var b=p;w={type:"atom",mode:this.mode,family:b,loc:v,text:r}}else w={type:p,mode:this.mode,loc:v,text:r};f=w}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Bd(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),f={type:"textord",mode:"text",loc:Ot.range(n),text:r};else return null;if(this.consume(),u)for(var $=0;$<u[0].length;$++){var T=u[0][$];if(!ms[T])throw new ee("Unknown accent ' "+T+"'",n);var S=ms[T][this.mode]||ms[T].text;if(!S)throw new ee("Accent "+T+" unsupported in "+this.mode+" mode",n);f={type:"accent",mode:this.mode,loc:Ot.range(n),label:S,isStretchy:!1,isShifty:!0,base:f}}return f}}oo.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Ys=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var o=new oo(n,r);delete o.gullet.macros.current["\\df@tag"];var s=o.parse();if(delete o.gullet.macros.current["\\current@color"],delete o.gullet.macros.current["\\color"],o.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ee("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:o.subparse([new Vt("\\df@tag")])}]}return s},A4=function(n,r,o){r.textContent="";var s=Xs(n,o).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),A4=function(){throw new ee("KaTeX doesn't work in quirks mode.")});var D7=function(n,r){var o=Xs(n,r).toMarkup();return o},B7=function(n,r){var o=new Es(r);return Ys(n,o)},E4=function(n,r,o){if(o.throwOnError||!(n instanceof ee))throw n;var s=Q(["katex-error"],[new nn(r)]);return s.setAttribute("title",n.toString()),s.setAttribute("style","color:"+o.errorColor),s},Xs=function(n,r){var o=new Es(r);try{var s=Ys(n,o);return G6(s,n,o)}catch(u){return E4(u,n,o)}},N7=function(n,r){var o=new Es(r);try{var s=Ys(n,o);return Y6(s,n,o)}catch(u){return E4(u,n,o)}},L7="0.16.33",O7={Span:wi,Anchor:Ps,SymbolNode:nn,SvgNode:Ln,PathNode:pr,LineNode:gs},Td={version:L7,render:A4,renderToString:D7,ParseError:ee,SETTINGS_SCHEMA:Oa,__parse:B7,__renderToDomTree:Xs,__renderToHTMLTree:N7,__setFontMetrics:k6,__defineSymbol:d,__defineFunction:se,__defineMacro:x,__domTree:O7};function I7(a){if(!a)return"";let n=a.replace(/\$\$([\s\S]*?)\$\$/g,(r,o)=>{try{return Td.renderToString(o.trim(),{displayMode:!0,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,o)=>{try{return Td.renderToString(o.trim(),{displayMode:!1,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}}),n}function F7({nodeId:a,nodes:n,onAnswer:r,onSkip:o,lang:s,excludeIndices:u=[]}){const f=n.find(I=>I.id===a),p=re.useMemo(()=>y5(a,u),[a,u]),v=g0[f==null?void 0:f.scope]||"#4a9eff",w=f?s==="pl"?f.labelPl:f.label:a,[b,$]=re.useState(null),[T,S]=re.useState(!1),P=()=>{b!==null&&S(!0)},D=()=>{r(b===p.correct,p,p.index),$(null),S(!1)},j=I=>M.jsx("span",{dangerouslySetInnerHTML:{__html:I7(I)}});return p?M.jsxs("div",{style:Uc(v),children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[M.jsx("div",{style:{color:v,fontWeight:700,fontSize:12},children:w}),M.jsx("button",{onClick:o,style:{background:"none",border:"none",color:"#3a4d63",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})]}),M.jsx("div",{style:{fontSize:11,color:"#c8d6e5",marginBottom:12,lineHeight:1.6},children:j(p.q)}),M.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:p.options.map((I,W)=>{let N="#0d1520",L="#1e2d45",U="#c8d6e5";return b===W&&!T&&(N=`${v}22`,L=v,U=v),T&&(W===p.correct?(N="#27ae6022",L="#27ae60",U="#2ecc71"):W===b&&(N="#e74c3c22",L="#e74c3c",U="#ff6b6b")),M.jsxs("button",{onClick:()=>{T||$(W)},style:{textAlign:"left",padding:"7px 10px",borderRadius:5,fontSize:10,cursor:T?"default":"pointer",background:N,border:`1px solid ${L}`,color:U,lineHeight:1.4},children:[M.jsxs("span",{style:{marginRight:8,opacity:.5},children:[["A","B","C","D"][W],"."]}),j(I)]},W)})}),T&&p.hint&&M.jsx("div",{style:{fontSize:10,color:"#8a9dbe",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,lineHeight:1.5},children:j(p.hint)}),T?M.jsx("div",{style:{display:"flex",gap:8},children:M.jsx("button",{onClick:D,style:{...fi(b===p.correct?"#27ae60":"#e74c3c"),flex:1},children:b===p.correct?"✓ Znam!":"✗ Nie znam"})}):M.jsx("button",{onClick:P,disabled:b===null,style:{...fi(v),width:"100%",opacity:b===null?.4:1},children:"Sprawdź"})]}):M.jsxs("div",{style:Uc(v),children:[M.jsx("div",{style:{color:v,fontWeight:700,marginBottom:8},children:w}),M.jsx("div",{style:{color:"#6b7d9a",fontSize:11,marginBottom:12},children:"Brak pytania dla tego węzła. Czy znasz ten temat?"}),M.jsxs("div",{style:{display:"flex",gap:8},children:[M.jsx("button",{onClick:()=>r(!0,null),style:fi("#27ae60"),children:"✓ Tak"}),M.jsx("button",{onClick:()=>r(!1,null),style:fi("#e74c3c"),children:"✗ Nie"}),M.jsx("button",{onClick:o,style:fi("#3a4d63"),children:"Pomiń"})]})]})}function H7({belief:a,frontier:n,visibleFrontier:r,hasStarted:o,nextSuggestedId:s,sessionComplete:u,adjacency:f,expectedRemaining:p,pCorrect:v,questionsAnswered:w,nodes:b,lang:$,onReset:T,onNodeClick:S}){var U,K;const P=Object.fromEntries(b.map(H=>[H.id,H])),D=H=>{var Z,V;return $==="pl"?(Z=P[H])==null?void 0:Z.labelPl:(V=P[H])==null?void 0:V.label},j=ct.filter(H=>a[H.id]==="known"),I=ct.filter(H=>a[H.id]==="unknown"),W=ct.length,N=[{label:"Znam",count:j.length,color:"#27ae60"},{label:"Nie znam",count:I.length,color:"#e74c3c"},{label:"Do odp.",count:p??"-",color:"#4a9eff"}],L=v?Math.round(v*100):50;return M.jsxs("div",{style:{position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[M.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:10,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsxs("span",{children:["Diagnostic ",u?"✓":""]}),M.jsx("button",{onClick:T,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:"reset"})]}),M.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:N.map(({label:H,count:Z,color:V})=>M.jsxs("div",{style:{flex:1,textAlign:"center",background:`${V}18`,borderRadius:5,padding:"5px 0",border:`1px solid ${V}40`},children:[M.jsx("div",{style:{color:V,fontWeight:700,fontSize:15},children:Z}),M.jsx("div",{style:{color:"#6b7d9a",fontSize:8},children:H})]},H))}),!u&&o&&M.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between"},children:[M.jsxs("span",{children:["Odpowiedzi: ",M.jsx("span",{style:{color:"#f5f6fa"},children:w})]}),M.jsxs("span",{children:["Szacowane: ",M.jsxs("span",{style:{color:"#4a9eff"},children:["~",p??"-"]})]}),M.jsxs("span",{children:["Skuteczność: ",M.jsxs("span",{style:{color:"#4a9eff"},children:[L,"%"]})]})]}),u&&M.jsxs("div",{children:[M.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[M.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:12,marginBottom:4},children:"Sesja zakończona ✓"}),M.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:["Odpowiedziano na ",M.jsx("span",{style:{color:"#f5f6fa"},children:w})," pytań."," ","Sklasyfikowano ",j.length+I.length,"/",W," tematów.",M.jsx("br",{}),"Skuteczność: ",M.jsxs("span",{style:{color:"#4a9eff"},children:[L,"%"]}),"."," ","Znasz ",M.jsx("span",{style:{color:"#2ecc71"},children:j.length}),","," ","do nauki ",M.jsx("span",{style:{color:"#e74c3c"},children:I.length}),"."]})]}),I.length>0&&M.jsxs(M.Fragment,{children:[M.jsxs("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:["Do nauki (",I.length,")"]}),ct.filter(H=>a[H.id]==="unknown").filter(H=>(f.prereqs[H.id]??[]).every(Z=>a[Z]==="known")).slice(0,8).map(H=>{var Z,V;return M.jsxs("div",{style:{padding:"5px 8px",marginBottom:3,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:9,color:"#ff8a8a",lineHeight:1.4},children:[D(H.id),M.jsx("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:(V=f0[(Z=P[H.id])==null?void 0:Z.scope])==null?void 0:V.pl})]},H.id)})]}),j.length>0&&M.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:9},children:["✓ Znam ",j.length," ",j.length===1?"temat":j.length<5?"tematy":"tematów"]})]}),!u&&!o&&M.jsxs("div",{style:{marginBottom:10},children:[s&&M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:5},children:"★ Zacznij tutaj"}),M.jsx(W7,{id:s,label:D(s),scope:(K=f0[(U=P[s])==null?void 0:U.scope])==null?void 0:K.pl,subtitle:"najwięcej powiązań w grafie",onClick:()=>S==null?void 0:S(s)})]}),M.jsx("div",{style:{fontSize:9,color:"#3a4d63",marginTop:8,lineHeight:1.5},children:"Lub kliknij dowolny węzeł na grafie."})]}),!u&&o&&r.length>0&&M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:5},children:"▶ Co dalej"}),r.map(H=>{var V,ge;const Z=H===s;return M.jsxs("div",{onClick:()=>S==null?void 0:S(H),style:{padding:"6px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:Z?"#4a9eff18":"#f39c1215",border:`1px solid ${Z?"#4a9eff55":"#f39c1240"}`,fontSize:10,color:Z?"#a8d4ff":"#f5d78e",transition:"background 0.15s"},onMouseEnter:ze=>ze.currentTarget.style.background=Z?"#4a9eff30":"#f39c1230",onMouseLeave:ze=>ze.currentTarget.style.background=Z?"#4a9eff18":"#f39c1215",children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsx("span",{children:D(H)}),M.jsx("span",{style:{fontSize:9,opacity:.7},children:Z?"★":"→"})]}),M.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:[(ge=f0[(V=P[H])==null?void 0:V.scope])==null?void 0:ge.pl,Z&&M.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:"najlepsze"})]})]},H)})]}),!u&&j.length>0&&M.jsxs(M.Fragment,{children:[M.jsxs("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"10px 0 4px"},children:["✓ Znam (",j.length,")"]}),j.map(H=>M.jsx("div",{style:{fontSize:9,color:"#6dbb87",paddingLeft:4,lineHeight:1.7},children:D(H.id)},H.id))]}),!u&&M.jsxs("div",{style:{marginTop:12,color:"#3a4d63",fontSize:9,lineHeight:1.5},children:["Kliknij węzeł → pytanie",M.jsx("br",{}),"Shift+click → oznacz jako nieznany",M.jsx("br",{}),"Kliknij zielony → usuń oznaczenie"]})]})}function W7({id:a,label:n,scope:r,subtitle:o,onClick:s}){return M.jsxs("div",{onClick:s,style:{padding:"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff",transition:"background 0.15s"},onMouseEnter:u=>u.currentTarget.style.background="#4a9eff30",onMouseLeave:u=>u.currentTarget.style.background="#4a9eff18",children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[M.jsx("span",{style:{fontWeight:600},children:n}),M.jsx("span",{style:{opacity:.5},children:"→"})]}),M.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[r,o?` · ${o}`:""]})]})}function U7({nodes:a,lang:n,targetNode:r,subgraphIds:o,ddClassification:s,betaBeliefs:u,ddComplete:f,ddNextNodeId:p,questionsAnswered:v,onNodeClick:w,onReset:b}){const $=Object.fromEntries(a.map(L=>[L.id,L])),T=L=>{var U,K;return n==="pl"?(U=$[L])==null?void 0:U.labelPl:(K=$[L])==null?void 0:K.label},S=o.filter(L=>s[L]==="known"),P=o.filter(L=>s[L]==="unknown"),D=o.filter(L=>s[L]==="uncertain"),j=o.length,I=S.length+P.length,W=j>0?Math.round(I/j*100):0,N=T(r);return M.jsxs("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[M.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsxs("span",{children:["Deep-Dive ",f?"✓":""]}),M.jsx("button",{onClick:b,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:"reset"})]}),M.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[M.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:"Cel"}),M.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:N}),M.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[j," węzłów w podgrafie"]})]}),M.jsxs("div",{style:{marginBottom:10},children:[M.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:M.jsx("div",{style:{height:"100%",borderRadius:3,width:`${W}%`,background:f?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[M.jsxs("span",{children:["Sklasyfikowano: ",M.jsxs("span",{style:{color:"#f5f6fa"},children:[I,"/",j]})]}),M.jsxs("span",{children:["Pytań: ",M.jsx("span",{style:{color:"#f5f6fa"},children:v})]})]})]}),f&&M.jsxs("div",{children:[M.jsxs("div",{style:{background:S.length>P.length?"#27ae6018":"#e74c3c18",border:`1px solid ${S.length>P.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[M.jsx("div",{style:{color:S.length>P.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:"Diagnoza gotowa ✓"}),M.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:["Znam: ",M.jsx("span",{style:{color:"#2ecc71"},children:S.length})," / ","Do nauki: ",M.jsx("span",{style:{color:"#ff6b6b"},children:P.length})," / ","Razem: ",j]})]}),P.length>0&&M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:"Do nauki — zacznij od tych:"}),o.filter(L=>s[L]==="unknown").slice(0,8).map(L=>{var U;return M.jsx(Cd,{id:L,label:T(L),scope:(U=$[L])==null?void 0:U.scope,classification:"unknown",beta:u[L]},L)})]}),S.length>0&&M.jsxs(M.Fragment,{children:[M.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:"Opanowane:"}),o.filter(L=>s[L]==="known").map(L=>{var U;return M.jsx(Cd,{id:L,label:T(L),scope:(U=$[L])==null?void 0:U.scope,classification:"known",beta:u[L]},L)})]})]}),!f&&M.jsxs(M.Fragment,{children:[p&&M.jsxs("div",{style:{marginBottom:10},children:[M.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:"★ Następne pytanie"}),M.jsxs("div",{onClick:()=>w==null?void 0:w(p),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[T(p),M.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:["pewność: ",V7(u[p])]})]})]}),D.length>0&&M.jsxs(M.Fragment,{children:[M.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:["Niezbadane (",D.length,")"]}),D.map(L=>M.jsxs("div",{onClick:()=>w==null?void 0:w(L),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:L===p?"#4a9eff18":"#f39c1212",border:`1px solid ${L===p?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:L===p?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsx("span",{children:T(L)}),M.jsx(q4,{beta:u[L]})]},L))]})]})]})}function V7(a){if(!a)return"50%";const n=a.alpha/(a.alpha+a.beta);return`${Math.round(n*100)}%`}function q4({beta:a}){const n=a?a.alpha/(a.alpha+a.beta):.5,r=a?a.alpha+a.beta:2,o=Math.min(1,(r-2)/4),s=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return M.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:M.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:s,opacity:.4+o*.6,transition:"width 0.3s ease"}})})}function Cd({id:a,label:n,scope:r,classification:o,beta:s}){const u=o==="known"?"#27ae60":"#e74c3c";return M.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:o==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsx("span",{children:n}),M.jsx(q4,{beta:s})]})}function G7({filterScope:a,toggleScope:n,clearScope:r,filterSection:o,toggleSection:s,clearSection:u,searchTerm:f,setSearchTerm:p,lang:v,setLang:w}){return M.jsxs("div",{style:{padding:"8px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[M.jsx("input",{value:f,onChange:b=>p(b.target.value),placeholder:"Search…",style:{background:"#0d1520",border:"1px solid #1e2d45",borderRadius:4,color:"#c8d6e5",padding:"3px 8px",fontSize:11,width:120,outline:"none"}}),M.jsx("span",{style:{color:"#3a4d63",fontSize:10},children:"|"}),M.jsx("button",{style:di(o.size===0,"#c8d6e5"),onClick:u,children:"All"}),Object.entries(Qa).map(([b,$])=>M.jsx("button",{style:di(o.has(b),$.color),onClick:()=>s(b),children:$.label},b)),M.jsx("span",{style:{color:"#3a4d63",fontSize:10},children:"|"}),M.jsx("button",{style:di(a.size===0,"#c8d6e5"),onClick:r,children:"All"}),Object.entries(g0).map(([b,$])=>{var T;return M.jsx("button",{style:di(a.has(b),$),onClick:()=>n(b),children:(T=f0[b])==null?void 0:T[v==="pl"?"pl":"en"]},b)}),M.jsx("span",{style:{color:"#3a4d63",fontSize:10},children:"|"}),M.jsx("button",{style:di(v==="pl","#f5a623"),onClick:()=>w(b=>b==="pl"?"en":"pl"),children:v==="pl"?"PL":"EN"})]})}function Y7({lang:a}){const n=Object.entries(g0).map(([r,o])=>{var s;return{color:o,label:(s=f0[r])==null?void 0:s[a==="pl"?"pl":"en"]}});return M.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152090",backdropFilter:"blur(4px)",borderRadius:6,padding:"8px 12px",display:"flex",flexDirection:"column",gap:4},children:[n.map(({color:r,label:o})=>M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:9},children:[M.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:r}}),M.jsx("span",{style:{color:"#8a9dbe"},children:o})]},o)),M.jsx("div",{style:{marginTop:4,borderTop:"1px solid #1e2d45",paddingTop:4},children:Object.entries(Qa).map(([r,o])=>M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:9},children:[M.jsx("div",{style:{width:8,height:3,borderRadius:1,background:o.color}}),M.jsx("span",{style:{color:"#8a9dbe"},children:o.label})]},r))})]})}function X7({nodes:a,lang:n,onSelect:r,onClose:o}){const[s,u]=re.useState(""),[f,p]=re.useState(-1),v=re.useRef([]),w=re.useRef(null),b=re.useMemo(()=>{const j=s.toLowerCase();return a.filter(I=>!j||I.label.toLowerCase().includes(j)||I.labelPl.toLowerCase().includes(j))},[a,s]),$=re.useMemo(()=>{const j=[],I=["SP8","LP","LR","UNIV"],W={};for(const N of I)W[N]=[];for(const N of b){const L=N.section??"LP";W[L]||(W[L]=[]),W[L].push(N)}for(const N of I)if(W[N])for(const L of W[N])j.push(L);return j},[b]),T=["SP8","LP","LR","UNIV"],S=re.useMemo(()=>{const j={};for(const I of T)j[I]=[];for(const I of b){const W=I.section??"LP";j[W]||(j[W]=[]),j[W].push(I)}return j},[b]),P=j=>n==="pl"?j.labelPl:j.label;re.useEffect(()=>{const j=I=>{if(I.key==="Escape"){o();return}I.key==="ArrowDown"&&(I.preventDefault(),p(W=>Math.min(W+1,$.length-1))),I.key==="ArrowUp"&&(I.preventDefault(),p(W=>Math.max(W-1,0))),I.key==="Enter"&&f>=0&&$[f]&&(I.preventDefault(),r($[f].id))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[$,f,o,r]),re.useEffect(()=>{f>=0&&v.current[f]&&v.current[f].scrollIntoView({block:"nearest"})},[f]),re.useEffect(()=>{p(-1)},[s]);const D={title:"Wybierz cel",subtitle:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",searchPlaceholder:"Szukaj tematu...",noResults:"Brak wyników",footer:`${b.length} / ${a.length} tematów`,cancel:"Anuluj"};return M.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:j=>{j.target===j.currentTarget&&o()},children:M.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[M.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:D.title}),M.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:D.subtitle})]}),M.jsx("button",{onClick:o,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),M.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:M.jsx("input",{ref:w,autoFocus:!0,value:s,onChange:j=>u(j.target.value),placeholder:D.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),M.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[T.map(j=>{const I=S[j];if(!I||I.length===0)return null;const W=Qa[j];return M.jsxs("div",{style:{marginBottom:12},children:[M.jsx("div",{style:{fontSize:9,fontWeight:700,color:(W==null?void 0:W.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(W==null?void 0:W.label)??j}),M.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:I.map((N,L)=>{const U=$.indexOf(N),K=g0[N.scope]??"#4a9eff",H=f===U;return M.jsxs("button",{ref:Z=>v.current[U]=Z,onClick:()=>r(N.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:H?`${K}35`:`${K}15`,border:`1px solid ${H?K:`${K}40`}`,color:"#c8d6e5",cursor:"pointer",transition:"background 0.12s, border-color 0.12s",outline:H?`2px solid ${K}`:"none",outlineOffset:1},onMouseEnter:Z=>{Z.currentTarget.style.background=`${K}30`,Z.currentTarget.style.borderColor=`${K}90`},onMouseLeave:Z=>{$.indexOf(N)!==f&&(Z.currentTarget.style.background=`${K}15`,Z.currentTarget.style.borderColor=`${K}40`)},children:[M.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:K,verticalAlign:"middle"}}),P(N)]},N.id)})})]},j)}),b.length===0&&M.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:D.noResults})]}),M.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:D.footer}),M.jsx("button",{onClick:o,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:D.cancel})]})]})})}const Q7=[{id:"quick",label:"Szybka diagnoza",description:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",icon:"⚡",color:"#4a9eff"},{id:"deepdive",label:"Szczegółowa analiza",description:"Wybierz konkretny cel (np. maturę rozszerzoną). System przeanalizuje tylko wymagane tematy.",icon:"◎",color:"#8e44ad"}];function K7({isOpen:a,onSelect:n,onClose:r}){const[o,s]=re.useState(null),u=re.useRef(null);return re.useEffect(()=>{a&&(s(null),setTimeout(()=>{var f;return(f=u.current)==null?void 0:f.focus()},100))},[a]),re.useEffect(()=>{if(!a)return;const f=p=>{p.key==="Escape"&&r(),p.key==="Enter"&&o&&n(o)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[a,o,r,n]),a?M.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:f=>{f.target===f.currentTarget&&r()},children:M.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[M.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:"Wybierz tryb diagnozy"}),M.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:"Jak chcesz sprawdzić swoją wiedzę?"})]}),M.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:Q7.map((f,p)=>M.jsxs("button",{ref:p===0?u:null,onClick:()=>s(f.id),onDoubleClick:()=>n(f.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:o===f.id?`${f.color}18`:"#0a0e17",border:`1px solid ${o===f.id?f.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:v=>{v.currentTarget.style.background=`${f.color}18`,v.currentTarget.style.borderColor=`${f.color}60`},onMouseLeave:v=>{o!==f.id&&(v.currentTarget.style.background="#0a0e17",v.currentTarget.style.borderColor="#1e2d45")},children:[M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[M.jsx("span",{style:{fontSize:16},children:f.icon}),M.jsx("span",{style:{fontWeight:600,color:o===f.id?f.color:"#f5f6fa"},children:f.label})]}),M.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:f.description})]},f.id))}),M.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[M.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:"Anuluj"}),M.jsx("button",{onClick:()=>o&&n(o),disabled:!o,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:o?"pointer":"not-allowed",background:o?"#4a9eff":"#1e2d45",border:"none",color:o?"#fff":"#3a4d63",opacity:o?1:.5},children:"Dalej"})]})]})}):null}const Ad={x:40,y:40,scale:.72};function Z7(){const[a,n]=re.useState(Ts),[r,o]=re.useState("pl"),[s,u]=re.useState(new Set),[f,p]=re.useState(new Set),[v,w]=re.useState(""),[b,$]=re.useState(null),[T,S]=re.useState(null),[P,D]=re.useState(!1),[j,I]=re.useState(!1),W=re.useCallback(le=>u(Pe=>{const qe=new Set(Pe);return qe.has(le)?qe.delete(le):qe.add(le),qe}),[]),N=re.useCallback(le=>p(Pe=>{const qe=new Set(Pe);return qe.has(le)?qe.delete(le):qe.add(le),qe}),[]),L=re.useCallback(()=>u(new Set),[]),U=re.useCallback(()=>p(new Set),[]),K=re.useMemo(()=>x5(ct,d0),[]),[H,Z]=re.useState(()=>Zl(a)),V=re.useMemo(()=>ct.map(le=>{var Pe,qe;return{...le,x:((Pe=H[le.id])==null?void 0:Pe.x)??le.x,y:((qe=H[le.id])==null?void 0:qe.y)??le.y}}),[H]),ge=re.useRef(null),{viewTransform:ze,setViewTransform:Te,toCanvas:Fe,startPan:Ie,cursorStyle:Ve,setCursorStyle:We,handleMouseMove:ye,handleMouseUp:ne}=D5(ge),{startNodeDrag:de,handleDragMove:ae,handleDragEnd:E}=B5(Fe,V,Z,We),{diagMode:F,setDiagMode:$e,mode:pe,quizNode:ke,setQuizNode:Ce,questionsAnswered:je,getAnsweredIndices:Re,handleDiagClick:De,handleQuizAnswer:st,resetDiagnostic:bt,startDeepDive:Nr,targetNode:fn,belief:Hn,frontier:Lr,visibleFrontier:Sn,hasStarted:hn,nextSuggestedId:mn,expectedRemaining:Mn,pCorrect:Yt,sessionComplete:Mt,betaBeliefs:w0,subgraphIds:Wn,ddClassification:xr,ddNextNodeId:wr,ddComplete:Or}=Y5(K),b0=re.useMemo(()=>{const le=v.toLowerCase(),Pe=ct.filter(qe=>!(s.size>0&&!s.has(qe.scope)||f.size>0&&!f.has(qe.section)||le&&!qe.label.toLowerCase().includes(le)&&!qe.labelPl.toLowerCase().includes(le)));return Pe.length<ct.length?new Set(Pe.map(qe=>qe.id)):null},[s,f,v]),pn=b||T,$0=re.useMemo(()=>{var Pe,qe;if(!pn)return null;const le=new Set([pn]);return(Pe=K.prereqs[pn])==null||Pe.forEach(Ir=>le.add(Ir)),(qe=K.dependents[pn])==null||qe.forEach(Ir=>le.add(Ir)),le},[pn,K]),Un=re.useMemo(()=>!F||pe!=="deepdive"||Wn.length===0?null:new Set(Wn),[F,pe,Wn]),br=re.useCallback(le=>{const Pe=le.target.closest("[data-node-id]");if(Pe){de(Pe.getAttribute("data-node-id"),le.clientX,le.clientY),le.stopPropagation();return}Ie(le.clientX,le.clientY)},[de,Ie]),lo=re.useCallback(le=>{ae(le.clientX,le.clientY)||ye(le)},[ae,ye]),k0=re.useCallback(()=>{E(),ne()},[E,ne]);re.useEffect(()=>{if(pe==="quick"&&!ke&&mn&&!Mt&&hn){const le=setTimeout(()=>Ce(mn),400);return()=>clearTimeout(le)}},[pe,ke,mn,Mt,hn]),re.useEffect(()=>{if(pe==="deepdive"&&!ke&&wr&&!Or){const le=setTimeout(()=>Ce(wr),400);return()=>clearTimeout(le)}},[pe,ke,wr,Or]),re.useEffect(()=>{const le=Pe=>{Pe.key==="Escape"&&($(null),D(!1))};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[]);const $i=re.useCallback(le=>{n(le),Z(Zl(le)),Te(Ad)},[Te]),so=re.useCallback(()=>{F?($e(!1),bt(),$(null)):I(!0)},[F,$e,bt]),_0=re.useCallback(le=>{I(!1),bt(),le==="deepdive"?($e(!0),D(!0)):($e(!0),setMode("quick"),$(null))},[$e,setMode,bt]),z0=re.useMemo(()=>{if(pe!=="deepdive")return{};const le={};for(const[Pe,qe]of Object.entries(xr))qe==="known"?le[Pe]="known":qe==="unknown"&&(le[Pe]="unknown");return le},[pe,xr]),S0=pe==="deepdive"?z0:Hn,M0=pe==="deepdive"?Wn.filter(le=>xr[le]==="uncertain"):Sn;return M.jsxs("div",{style:{width:"100%",height:"100vh",background:"#0a0e17",fontFamily:R5,color:"#c8d6e5",display:"flex",flexDirection:"column",overflow:"hidden"},children:[M.jsxs("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:12,flexShrink:0},children:[M.jsx("h1",{style:{margin:0,fontSize:14,fontWeight:700,color:"#f5f6fa",letterSpacing:1},children:"PODSTAWA PROGRAMOWA — MATEMATYKA"}),M.jsxs("span",{style:{fontSize:10,color:"#3a4d63"},children:[ct.length," topics · ",d0.length," edges"]}),M.jsx("div",{style:{display:"flex",gap:4,marginLeft:8},children:jd.map(le=>M.jsx("button",{onClick:()=>$i(le.meta.id),style:{padding:"3px 10px",borderRadius:4,fontSize:10,cursor:"pointer",border:a===le.meta.id?"1px solid #4a9eff":"1px solid #1e2d45",background:a===le.meta.id?"#4a9eff22":"transparent",color:a===le.meta.id?"#4a9eff":"#6b7d9a"},children:le.meta.label},le.meta.id))}),M.jsx("span",{style:{fontSize:10,color:"#3a4d63",marginLeft:"auto"},children:F?pe==="deepdive"?"deep-dive: kliknij węzeł w podgrafie":"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij":"scroll to zoom · drag to pan · drag node to move · click to inspect"}),M.jsxs("div",{style:{display:"flex",gap:4},children:[M.jsx("button",{onClick:so,style:{padding:"4px 12px",borderRadius:5,fontSize:11,cursor:"pointer",fontWeight:600,border:F?"1px solid #f39c12":"1px solid #1e2d45",background:F?"#f39c1222":"transparent",color:F?"#f39c12":"#6b7d9a"},children:F?`Diagnostic (${pe==="deepdive"?"Deep-Dive":"Quick"}) ON`:"Diagnostic"}),F&&M.jsx("button",{onClick:()=>D(!0),style:{padding:"4px 10px",borderRadius:5,fontSize:11,cursor:"pointer",border:"1px solid #8e44ad",background:pe==="deepdive"?"#8e44ad22":"transparent",color:pe==="deepdive"?"#c39bd3":"#6b7d9a"},title:"Wybierz cel deep-dive",children:"◎ Cel"})]})]}),M.jsx(G7,{filterScope:s,toggleScope:W,clearScope:L,filterSection:f,toggleSection:N,clearSection:U,searchTerm:v,setSearchTerm:w,lang:r,setLang:o}),M.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[M.jsxs("svg",{ref:ge,width:"100%",height:"100%",style:{cursor:Ve},onMouseDown:br,onMouseMove:lo,onMouseUp:k0,onMouseLeave:k0,onClick:le=>{if(!F)return;const Pe=le.target.closest("[data-node-id]");Pe&&De(Pe.getAttribute("data-node-id"),le.shiftKey)},children:[M.jsxs("defs",{children:[M.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),M.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),M.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:M.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),M.jsxs("g",{transform:`translate(${ze.x},${ze.y}) scale(${ze.scale})`,children:[M.jsx(X5,{edges:d0,nodes:V,highlightedIds:F&&pe==="deepdive"?Un:$0}),M.jsx(Z5,{nodes:V,filteredIds:F&&pe==="deepdive"?Un:b0,highlightedIds:F?null:$0,selected:b,onSelect:le=>{if(F){De(le,!1);return}$(le===b?null:le)},onHover:S,lang:r,diagMode:F,belief:S0,frontier:M0,scale:ze.scale})]})]}),b&&!F&&M.jsx(J5,{nodeId:b,nodes:V,adjacency:K,lang:r}),F&&ke&&M.jsx(F7,{nodeId:ke,nodes:V,lang:r,excludeIndices:Re(ke),onAnswer:(le,Pe,qe)=>st(ke,le,Pe,qe),onSkip:()=>Ce(null)}),F&&pe==="quick"&&!ke&&M.jsx(H7,{belief:Hn,frontier:Lr,visibleFrontier:Sn,hasStarted:hn,nextSuggestedId:mn,sessionComplete:Mt,adjacency:K,expectedRemaining:Mn,pCorrect:Yt,questionsAnswered:je,nodes:V,lang:r,onNodeClick:le=>Ce(le),onReset:bt}),F&&pe==="deepdive"&&!ke&&fn&&M.jsx(U7,{nodes:V,lang:r,targetNode:fn,subgraphIds:Wn,ddClassification:xr,betaBeliefs:w0,ddComplete:Or,ddNextNodeId:wr,questionsAnswered:je,onNodeClick:le=>Ce(le),onReset:bt}),M.jsx(Y7,{lang:r}),M.jsx("div",{style:{position:"absolute",right:16,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([le,Pe])=>M.jsx("button",{onClick:()=>{Pe===null?(Z(Zl(a)),Te(Ad)):Te(qe=>({...qe,scale:Math.max(.15,Math.min(5,qe.scale*Pe))}))},style:{width:28,height:28,background:"#0d1520",border:"1px solid #1e2d45",color:"#c8d6e5",borderRadius:4,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:le},le))})]}),P&&M.jsx(X7,{nodes:V,lang:r,onSelect:le=>{D(!1),Nr(le)},onClose:()=>D(!1)}),M.jsx(K7,{isOpen:j,onSelect:_0,onClose:()=>I(!1)})]})}Df.createRoot(document.getElementById("root")).render(M.jsx(re.StrictMode,{children:M.jsx(Z7,{})}));
