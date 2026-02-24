(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();var Vl={exports:{}},ai={},Gl={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec;function Tf(){if(Ec)return Ee;Ec=1;var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),$=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=$&&E[$]||E["@@iterator"],typeof E=="function"?E:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,R={};function B(E,I,ve){this.props=E,this.context=I,this.refs=R,this.updater=ve||z}B.prototype.isReactComponent={},B.prototype.setState=function(E,I){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,I,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function H(){}H.prototype=B.prototype;function X(E,I,ve){this.props=E,this.context=I,this.refs=R,this.updater=ve||z}var F=X.prototype=new H;F.constructor=X,P(F,B.prototype),F.isPureReactComponent=!0;var L=Array.isArray,V=Object.prototype.hasOwnProperty,ae={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function J(E,I,ve){var $e,Me={},qe=null,je=null;if(I!=null)for($e in I.ref!==void 0&&(je=I.ref),I.key!==void 0&&(qe=""+I.key),I)V.call(I,$e)&&!O.hasOwnProperty($e)&&(Me[$e]=I[$e]);var Pe=arguments.length-2;if(Pe===1)Me.children=ve;else if(1<Pe){for(var De=Array(Pe),at=0;at<Pe;at++)De[at]=arguments[at+2];Me.children=De}if(E&&E.defaultProps)for($e in Pe=E.defaultProps,Pe)Me[$e]===void 0&&(Me[$e]=Pe[$e]);return{$$typeof:a,type:E,key:qe,ref:je,props:Me,_owner:ae.current}}function ne(E,I){return{$$typeof:a,type:E.type,key:I,ref:E.ref,props:E.props,_owner:E._owner}}function we(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function ze(E){var I={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ve){return I[ve]})}var Te=/\/+/g;function We(E,I){return typeof E=="object"&&E!==null&&E.key!=null?ze(""+E.key):I.toString(36)}function He(E,I,ve,$e,Me){var qe=typeof E;(qe==="undefined"||qe==="boolean")&&(E=null);var je=!1;if(E===null)je=!0;else switch(qe){case"string":case"number":je=!0;break;case"object":switch(E.$$typeof){case a:case n:je=!0}}if(je)return je=E,Me=Me(je),E=$e===""?"."+We(je,0):$e,L(Me)?(ve="",E!=null&&(ve=E.replace(Te,"$&/")+"/"),He(Me,I,ve,"",function(at){return at})):Me!=null&&(we(Me)&&(Me=ne(Me,ve+(!Me.key||je&&je.key===Me.key?"":(""+Me.key).replace(Te,"$&/")+"/")+E)),I.push(Me)),1;if(je=0,$e=$e===""?".":$e+":",L(E))for(var Pe=0;Pe<E.length;Pe++){qe=E[Pe];var De=$e+We(qe,Pe);je+=He(qe,I,ve,De,Me)}else if(De=M(E),typeof De=="function")for(E=De.call(E),Pe=0;!(qe=E.next()).done;)qe=qe.value,De=$e+We(qe,Pe++),je+=He(qe,I,ve,De,Me);else if(qe==="object")throw I=String(E),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return je}function Se(E,I,ve){if(E==null)return E;var $e=[],Me=0;return He(E,$e,"","",function(qe){return I.call(ve,qe,Me++)}),$e}function Re(E){if(E._status===-1){var I=E._result;I=I(),I.then(function(ve){(E._status===0||E._status===-1)&&(E._status=1,E._result=ve)},function(ve){(E._status===0||E._status===-1)&&(E._status=2,E._result=ve)}),E._status===-1&&(E._status=0,E._result=I)}if(E._status===1)return E._result.default;throw E._result}var Ae={current:null},Z={transition:null},pe={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ae};function K(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:Se,forEach:function(E,I,ve){Se(E,function(){I.apply(this,arguments)},ve)},count:function(E){var I=0;return Se(E,function(){I++}),I},toArray:function(E){return Se(E,function(I){return I})||[]},only:function(E){if(!we(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ee.Component=B,Ee.Fragment=r,Ee.Profiler=s,Ee.PureComponent=X,Ee.StrictMode=o,Ee.Suspense=v,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ee.act=K,Ee.cloneElement=function(E,I,ve){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var $e=P({},E.props),Me=E.key,qe=E.ref,je=E._owner;if(I!=null){if(I.ref!==void 0&&(qe=I.ref,je=ae.current),I.key!==void 0&&(Me=""+I.key),E.type&&E.type.defaultProps)var Pe=E.type.defaultProps;for(De in I)V.call(I,De)&&!O.hasOwnProperty(De)&&($e[De]=I[De]===void 0&&Pe!==void 0?Pe[De]:I[De])}var De=arguments.length-2;if(De===1)$e.children=ve;else if(1<De){Pe=Array(De);for(var at=0;at<De;at++)Pe[at]=arguments[at+2];$e.children=Pe}return{$$typeof:a,type:E.type,key:Me,ref:qe,props:$e,_owner:je}},Ee.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:u,_context:E},E.Consumer=E},Ee.createElement=J,Ee.createFactory=function(E){var I=J.bind(null,E);return I.type=E,I},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(E){return{$$typeof:p,render:E}},Ee.isValidElement=we,Ee.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:Re}},Ee.memo=function(E,I){return{$$typeof:w,type:E,compare:I===void 0?null:I}},Ee.startTransition=function(E){var I=Z.transition;Z.transition={};try{E()}finally{Z.transition=I}},Ee.unstable_act=K,Ee.useCallback=function(E,I){return Ae.current.useCallback(E,I)},Ee.useContext=function(E){return Ae.current.useContext(E)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(E){return Ae.current.useDeferredValue(E)},Ee.useEffect=function(E,I){return Ae.current.useEffect(E,I)},Ee.useId=function(){return Ae.current.useId()},Ee.useImperativeHandle=function(E,I,ve){return Ae.current.useImperativeHandle(E,I,ve)},Ee.useInsertionEffect=function(E,I){return Ae.current.useInsertionEffect(E,I)},Ee.useLayoutEffect=function(E,I){return Ae.current.useLayoutEffect(E,I)},Ee.useMemo=function(E,I){return Ae.current.useMemo(E,I)},Ee.useReducer=function(E,I,ve){return Ae.current.useReducer(E,I,ve)},Ee.useRef=function(E){return Ae.current.useRef(E)},Ee.useState=function(E){return Ae.current.useState(E)},Ee.useSyncExternalStore=function(E,I,ve){return Ae.current.useSyncExternalStore(E,I,ve)},Ee.useTransition=function(){return Ae.current.useTransition()},Ee.version="18.3.1",Ee}var Pc;function zs(){return Pc||(Pc=1,Gl.exports=Tf()),Gl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc;function Cf(){if(jc)return ai;jc=1;var a=zs(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,v,w){var b,$={},M=null,z=null;w!==void 0&&(M=""+w),v.key!==void 0&&(M=""+v.key),v.ref!==void 0&&(z=v.ref);for(b in v)o.call(v,b)&&!u.hasOwnProperty(b)&&($[b]=v[b]);if(p&&p.defaultProps)for(b in v=p.defaultProps,v)$[b]===void 0&&($[b]=v[b]);return{$$typeof:n,type:p,key:M,ref:z,props:$,_owner:s.current}}return ai.Fragment=r,ai.jsx=f,ai.jsxs=f,ai}var Rc;function Af(){return Rc||(Rc=1,Vl.exports=Cf()),Vl.exports}var T=Af(),le=zs(),Ta={},Yl={exports:{}},Lt={},Xl={exports:{}},Ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function qf(){return Dc||(Dc=1,(function(a){function n(Z,pe){var K=Z.length;Z.push(pe);e:for(;0<K;){var E=K-1>>>1,I=Z[E];if(0<s(I,pe))Z[E]=pe,Z[K]=I,K=E;else break e}}function r(Z){return Z.length===0?null:Z[0]}function o(Z){if(Z.length===0)return null;var pe=Z[0],K=Z.pop();if(K!==pe){Z[0]=K;e:for(var E=0,I=Z.length,ve=I>>>1;E<ve;){var $e=2*(E+1)-1,Me=Z[$e],qe=$e+1,je=Z[qe];if(0>s(Me,K))qe<I&&0>s(je,Me)?(Z[E]=je,Z[qe]=K,E=qe):(Z[E]=Me,Z[$e]=K,E=$e);else if(qe<I&&0>s(je,K))Z[E]=je,Z[qe]=K,E=qe;else break e}}return pe}function s(Z,pe){var K=Z.sortIndex-pe.sortIndex;return K!==0?K:Z.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();a.unstable_now=function(){return f.now()-p}}var v=[],w=[],b=1,$=null,M=3,z=!1,P=!1,R=!1,B=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Z){for(var pe=r(w);pe!==null;){if(pe.callback===null)o(w);else if(pe.startTime<=Z)o(w),pe.sortIndex=pe.expirationTime,n(v,pe);else break;pe=r(w)}}function L(Z){if(R=!1,F(Z),!P)if(r(v)!==null)P=!0,Re(V);else{var pe=r(w);pe!==null&&Ae(L,pe.startTime-Z)}}function V(Z,pe){P=!1,R&&(R=!1,H(J),J=-1),z=!0;var K=M;try{for(F(pe),$=r(v);$!==null&&(!($.expirationTime>pe)||Z&&!ze());){var E=$.callback;if(typeof E=="function"){$.callback=null,M=$.priorityLevel;var I=E($.expirationTime<=pe);pe=a.unstable_now(),typeof I=="function"?$.callback=I:$===r(v)&&o(v),F(pe)}else o(v);$=r(v)}if($!==null)var ve=!0;else{var $e=r(w);$e!==null&&Ae(L,$e.startTime-pe),ve=!1}return ve}finally{$=null,M=K,z=!1}}var ae=!1,O=null,J=-1,ne=5,we=-1;function ze(){return!(a.unstable_now()-we<ne)}function Te(){if(O!==null){var Z=a.unstable_now();we=Z;var pe=!0;try{pe=O(!0,Z)}finally{pe?We():(ae=!1,O=null)}}else ae=!1}var We;if(typeof X=="function")We=function(){X(Te)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Se=He.port2;He.port1.onmessage=Te,We=function(){Se.postMessage(null)}}else We=function(){B(Te,0)};function Re(Z){O=Z,ae||(ae=!0,We())}function Ae(Z,pe){J=B(function(){Z(a.unstable_now())},pe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Z){Z.callback=null},a.unstable_continueExecution=function(){P||z||(P=!0,Re(V))},a.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<Z?Math.floor(1e3/Z):5},a.unstable_getCurrentPriorityLevel=function(){return M},a.unstable_getFirstCallbackNode=function(){return r(v)},a.unstable_next=function(Z){switch(M){case 1:case 2:case 3:var pe=3;break;default:pe=M}var K=M;M=pe;try{return Z()}finally{M=K}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(Z,pe){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var K=M;M=Z;try{return pe()}finally{M=K}},a.unstable_scheduleCallback=function(Z,pe,K){var E=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?E+K:E):K=E,Z){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=K+I,Z={id:b++,callback:pe,priorityLevel:Z,startTime:K,expirationTime:I,sortIndex:-1},K>E?(Z.sortIndex=K,n(w,Z),r(v)===null&&Z===r(w)&&(R?(H(J),J=-1):R=!0,Ae(L,K-E))):(Z.sortIndex=I,n(v,Z),P||z||(P=!0,Re(V))),Z},a.unstable_shouldYield=ze,a.unstable_wrapCallback=function(Z){var pe=M;return function(){var K=M;M=pe;try{return Z.apply(this,arguments)}finally{M=K}}}})(Ql)),Ql}var Bc;function Ef(){return Bc||(Bc=1,Xl.exports=qf()),Xl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function Pf(){if(Nc)return Lt;Nc=1;var a=zs(),n=Ef();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},$={};function M(e){return v.call($,e)?!0:v.call(b,e)?!1:w.test(e)?$[e]=!0:(b[e]=!0,!1)}function z(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,i,l){if(t===null||typeof t>"u"||z(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,i,l,c,h,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=y}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];B[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(H,X);B[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(H,X);B[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(H,X);B[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,t,i,l){var c=B.hasOwnProperty(t)?B[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,i,c,l)&&(i=null),l||c===null?M(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var L=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),ae=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),we=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),Z=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,E;function I(e){if(E===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var ve=!1;function $e(e,t){if(!e||ve)return"";ve=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var l=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){l=N}e.call(t.prototype)}else{try{throw Error()}catch(N){l=N}e()}}catch(N){if(N&&l&&typeof N.stack=="string"){for(var c=N.stack.split(`
`),h=l.stack.split(`
`),y=c.length-1,_=h.length-1;1<=y&&0<=_&&c[y]!==h[_];)_--;for(;1<=y&&0<=_;y--,_--)if(c[y]!==h[_]){if(y!==1||_!==1)do if(y--,_--,0>_||c[y]!==h[_]){var C=`
`+c[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=y&&0<=_);break}}}finally{ve=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?I(e):""}function Me(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=$e(e.type,!1),e;case 11:return e=$e(e.type.render,!1),e;case 1:return e=$e(e.type,!0),e;default:return""}}function qe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case ae:return"Portal";case ne:return"Profiler";case J:return"StrictMode";case We:return"Suspense";case He:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ze:return(e.displayName||"Context")+".Consumer";case we:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Se:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}function je(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qe(t);case 8:return t===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function at(e){var t=De(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){l=""+y,h.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yt(e){e._valueTracker||(e._valueTracker=at(e))}function Nr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=De(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function fn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _n(e,t){var i=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function kn(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=Pe(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fn(e,t){t=t.checked,t!=null&&F(e,"checked",t,!1)}function Hn(e,t){Fn(e,t);var i=Pe(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sn(e,t.type,i):t.hasOwnProperty("defaultValue")&&Sn(e,t.type,Pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Sn(e,t,i){(t!=="number"||fn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var bt=Array.isArray;function $t(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Pe(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Wn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lr(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(bt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Pe(i)}}function gi(e,t){var i=Pe(t.value),l=Pe(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Un(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Or(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,yi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ao=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(e){ao.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wr[t]=wr[e]})});function xi(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||wr.hasOwnProperty(e)&&wr[e]?(""+t).trim():t+"px"}function wi(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=xi(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var oo=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oe(e,t){if(t){if(oo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function Le(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Fr=null,Hr=null;function Xs(e){if(e=W0(e)){if(typeof lo!="function")throw Error(r(280));var t=e.stateNode;t&&(t=Hi(t),lo(e.stateNode,e.type,t))}}function Qs(e){Fr?Hr?Hr.push(e):Hr=[e]:Fr=e}function Ks(){if(Fr){var e=Fr,t=Hr;if(Hr=Fr=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function Zs(e,t){return e(t)}function Js(){}var so=!1;function eu(e,t,i){if(so)return e(t,i);so=!0;try{return Zs(e,t,i)}finally{so=!1,(Fr!==null||Hr!==null)&&(Js(),Ks())}}function _0(e,t){var i=e.stateNode;if(i===null)return null;var l=Hi(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var uo=!1;if(p)try{var k0={};Object.defineProperty(k0,"passive",{get:function(){uo=!0}}),window.addEventListener("test",k0,k0),window.removeEventListener("test",k0,k0)}catch{uo=!1}function P4(e,t,i,l,c,h,y,_,C){var N=Array.prototype.slice.call(arguments,3);try{t.apply(i,N)}catch(G){this.onError(G)}}var z0=!1,bi=null,$i=!1,co=null,j4={onError:function(e){z0=!0,bi=e}};function R4(e,t,i,l,c,h,y,_,C){z0=!1,bi=null,P4.apply(j4,arguments)}function D4(e,t,i,l,c,h,y,_,C){if(R4.apply(this,arguments),z0){if(z0){var N=bi;z0=!1,bi=null}else throw Error(r(198));$i||($i=!0,co=N)}}function $r(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if($r(e)!==e)throw Error(r(188))}function B4(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===i)return nu(c),e;if(h===l)return nu(c),t;h=h.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=h;else{for(var y=!1,_=c.child;_;){if(_===i){y=!0,i=c,l=h;break}if(_===l){y=!0,l=c,i=h;break}_=_.sibling}if(!y){for(_=h.child;_;){if(_===i){y=!0,i=h,l=c;break}if(_===l){y=!0,l=h,i=c;break}_=_.sibling}if(!y)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function ru(e){return e=B4(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var au=n.unstable_scheduleCallback,ou=n.unstable_cancelCallback,N4=n.unstable_shouldYield,L4=n.unstable_requestPaint,ot=n.unstable_now,O4=n.unstable_getCurrentPriorityLevel,fo=n.unstable_ImmediatePriority,lu=n.unstable_UserBlockingPriority,_i=n.unstable_NormalPriority,I4=n.unstable_LowPriority,su=n.unstable_IdlePriority,ki=null,hn=null;function F4(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:U4,H4=Math.log,W4=Math.LN2;function U4(e){return e>>>=0,e===0?32:31-(H4(e)/W4|0)|0}var zi=64,Si=4194304;function S0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,h=e.pingedLanes,y=i&268435455;if(y!==0){var _=y&~c;_!==0?l=S0(_):(h&=y,h!==0&&(l=S0(h)))}else y=i&~c,y!==0?l=S0(y):h!==0&&(l=S0(h));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,h=t&-t,c>=h||c===16&&(h&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-an(t),c=1<<i,l|=e[i],t&=~c;return l}function V4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G4(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-an(h),_=1<<y,C=c[y];C===-1?((_&i)===0||(_&l)!==0)&&(c[y]=V4(_,t)):C<=t&&(e.expiredLanes|=_),h&=~_}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uu(){var e=zi;return zi<<=1,(zi&4194240)===0&&(zi=64),e}function mo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function M0(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-an(t),e[t]=i}function Y4(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-an(i),h=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~h}}function po(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-an(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var Ue=0;function cu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var du,vo,fu,hu,mu,go=!1,Ti=[],Gn=null,Yn=null,Xn=null,T0=new Map,C0=new Map,Qn=[],X4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":T0.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":C0.delete(t.pointerId)}}function A0(e,t,i,l,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},t!==null&&(t=W0(t),t!==null&&vo(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Q4(e,t,i,l,c){switch(t){case"focusin":return Gn=A0(Gn,e,t,i,l,c),!0;case"dragenter":return Yn=A0(Yn,e,t,i,l,c),!0;case"mouseover":return Xn=A0(Xn,e,t,i,l,c),!0;case"pointerover":var h=c.pointerId;return T0.set(h,A0(T0.get(h)||null,e,t,i,l,c)),!0;case"gotpointercapture":return h=c.pointerId,C0.set(h,A0(C0.get(h)||null,e,t,i,l,c)),!0}return!1}function vu(e){var t=_r(e.target);if(t!==null){var i=$r(t);if(i!==null){if(t=i.tag,t===13){if(t=tu(i),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=xo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Oe=l,i.target.dispatchEvent(l),Oe=null}else return t=W0(i),t!==null&&vo(t),e.blockedOn=i,!1;t.shift()}return!0}function gu(e,t,i){Ci(e)&&i.delete(t)}function K4(){go=!1,Gn!==null&&Ci(Gn)&&(Gn=null),Yn!==null&&Ci(Yn)&&(Yn=null),Xn!==null&&Ci(Xn)&&(Xn=null),T0.forEach(gu),C0.forEach(gu)}function q0(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,K4)))}function E0(e){function t(c){return q0(c,e)}if(0<Ti.length){q0(Ti[0],e);for(var i=1;i<Ti.length;i++){var l=Ti[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Gn!==null&&q0(Gn,e),Yn!==null&&q0(Yn,e),Xn!==null&&q0(Xn,e),T0.forEach(t),C0.forEach(t),i=0;i<Qn.length;i++)l=Qn[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Qn.length&&(i=Qn[0],i.blockedOn===null);)vu(i),i.blockedOn===null&&Qn.shift()}var Wr=L.ReactCurrentBatchConfig,Ai=!0;function Z4(e,t,i,l){var c=Ue,h=Wr.transition;Wr.transition=null;try{Ue=1,yo(e,t,i,l)}finally{Ue=c,Wr.transition=h}}function J4(e,t,i,l){var c=Ue,h=Wr.transition;Wr.transition=null;try{Ue=4,yo(e,t,i,l)}finally{Ue=c,Wr.transition=h}}function yo(e,t,i,l){if(Ai){var c=xo(e,t,i,l);if(c===null)Do(e,t,l,qi,i),pu(e,l);else if(Q4(c,e,t,i,l))l.stopPropagation();else if(pu(e,l),t&4&&-1<X4.indexOf(e)){for(;c!==null;){var h=W0(c);if(h!==null&&du(h),h=xo(e,t,i,l),h===null&&Do(e,t,l,qi,i),h===c)break;c=h}c!==null&&l.stopPropagation()}else Do(e,t,l,null,i)}}var qi=null;function xo(e,t,i,l){if(qi=null,e=br(l),e=_r(e),e!==null)if(t=$r(e),t===null)e=null;else if(i=t.tag,i===13){if(e=tu(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O4()){case fo:return 1;case lu:return 4;case _i:case I4:return 16;case su:return 536870912;default:return 16}default:return 16}}var Kn=null,wo=null,Ei=null;function xu(){if(Ei)return Ei;var e,t=wo,i=t.length,l,c="value"in Kn?Kn.value:Kn.textContent,h=c.length;for(e=0;e<i&&t[e]===c[e];e++);var y=i-e;for(l=1;l<=y&&t[i-l]===c[h-l];l++);return Ei=c.slice(e,1<l?1-l:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function wu(){return!1}function Ft(e){function t(i,l,c,h,y){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(i=e[_],this[_]=i?i(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ji:wu,this.isPropagationStopped=wu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Ft(Ur),P0=K({},Ur,{view:0,detail:0}),e2=Ft(P0),$o,_o,j0,Ri=K({},P0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==j0&&(j0&&e.type==="mousemove"?($o=e.screenX-j0.screenX,_o=e.screenY-j0.screenY):_o=$o=0,j0=e),$o)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),bu=Ft(Ri),t2=K({},Ri,{dataTransfer:0}),n2=Ft(t2),r2=K({},P0,{relatedTarget:0}),ko=Ft(r2),i2=K({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),a2=Ft(i2),o2=K({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l2=Ft(o2),s2=K({},Ur,{data:0}),$u=Ft(s2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d2[e])?!!t[e]:!1}function zo(){return f2}var h2=K({},P0,{key:function(e){if(e.key){var t=u2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m2=Ft(h2),p2=K({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Ft(p2),v2=K({},P0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),g2=Ft(v2),y2=K({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),x2=Ft(y2),w2=K({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b2=Ft(w2),$2=[9,13,27,32],So=p&&"CompositionEvent"in window,R0=null;p&&"documentMode"in document&&(R0=document.documentMode);var _2=p&&"TextEvent"in window&&!R0,ku=p&&(!So||R0&&8<R0&&11>=R0),zu=" ",Su=!1;function Mu(e,t){switch(e){case"keyup":return $2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function k2(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Su=!0,zu);case"textInput":return e=t.data,e===zu&&Su?null:e;default:return null}}function z2(e,t){if(Vr)return e==="compositionend"||!So&&Mu(e,t)?(e=xu(),Ei=wo=Kn=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var S2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S2[e.type]:t==="textarea"}function Au(e,t,i,l){Qs(l),t=Oi(t,"onChange"),0<t.length&&(i=new bo("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var D0=null,B0=null;function M2(e){Yu(e,0)}function Di(e){var t=Kr(e);if(Nr(t))return e}function T2(e,t){if(e==="change")return t}var qu=!1;if(p){var Mo;if(p){var To="oninput"in document;if(!To){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),To=typeof Eu.oninput=="function"}Mo=To}else Mo=!1;qu=Mo&&(!document.documentMode||9<document.documentMode)}function Pu(){D0&&(D0.detachEvent("onpropertychange",ju),B0=D0=null)}function ju(e){if(e.propertyName==="value"&&Di(B0)){var t=[];Au(t,B0,e,br(e)),eu(M2,t)}}function C2(e,t,i){e==="focusin"?(Pu(),D0=t,B0=i,D0.attachEvent("onpropertychange",ju)):e==="focusout"&&Pu()}function A2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(B0)}function q2(e,t){if(e==="click")return Di(t)}function E2(e,t){if(e==="input"||e==="change")return Di(t)}function P2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var on=typeof Object.is=="function"?Object.is:P2;function N0(e,t){if(on(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!v.call(t,c)||!on(e[c],t[c]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var i=Ru(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ru(i)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(){for(var e=window,t=fn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=fn(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j2(e){var t=Nu(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Bu(i.ownerDocument.documentElement,i)){if(l!==null&&Co(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!e.extend&&h>l&&(c=l,l=h,h=c),c=Du(i,h);var y=Du(i,l);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),h>l?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R2=p&&"documentMode"in document&&11>=document.documentMode,Gr=null,Ao=null,L0=null,qo=!1;function Lu(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;qo||Gr==null||Gr!==fn(l)||(l=Gr,"selectionStart"in l&&Co(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),L0&&N0(L0,l)||(L0=l,l=Oi(Ao,"onSelect"),0<l.length&&(t=new bo("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Gr)))}function Bi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Yr={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Eo={},Ou={};p&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Ni(e){if(Eo[e])return Eo[e];if(!Yr[e])return e;var t=Yr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Ou)return Eo[e]=t[i];return e}var Iu=Ni("animationend"),Fu=Ni("animationiteration"),Hu=Ni("animationstart"),Wu=Ni("transitionend"),Uu=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,t){Uu.set(e,t),u(t,[e])}for(var Po=0;Po<Vu.length;Po++){var jo=Vu[Po],D2=jo.toLowerCase(),B2=jo[0].toUpperCase()+jo.slice(1);Zn(D2,"on"+B2)}Zn(Iu,"onAnimationEnd"),Zn(Fu,"onAnimationIteration"),Zn(Hu,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(Wu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var O0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N2=new Set("cancel close invalid load scroll toggle".split(" ").concat(O0));function Gu(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,D4(l,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var h=void 0;if(t)for(var y=l.length-1;0<=y;y--){var _=l[y],C=_.instance,N=_.currentTarget;if(_=_.listener,C!==h&&c.isPropagationStopped())break e;Gu(c,_,N),h=C}else for(y=0;y<l.length;y++){if(_=l[y],C=_.instance,N=_.currentTarget,_=_.listener,C!==h&&c.isPropagationStopped())break e;Gu(c,_,N),h=C}}}if($i)throw e=co,$i=!1,co=null,e}function Xe(e,t){var i=t[Fo];i===void 0&&(i=t[Fo]=new Set);var l=e+"__bubble";i.has(l)||(Xu(t,e,2,!1),i.add(l))}function Ro(e,t,i){var l=0;t&&(l|=4),Xu(i,e,l,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function I0(e){if(!e[Li]){e[Li]=!0,o.forEach(function(i){i!=="selectionchange"&&(N2.has(i)||Ro(i,!1,e),Ro(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Ro("selectionchange",!1,t))}}function Xu(e,t,i,l){switch(yu(t)){case 1:var c=Z4;break;case 4:c=J4;break;default:c=yo}i=c.bind(null,t,i,e),c=void 0,!uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Do(e,t,i,l,c){var h=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var _=l.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(y===4)for(y=l.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===c||C.nodeType===8&&C.parentNode===c))return;y=y.return}for(;_!==null;){if(y=_r(_),y===null)return;if(C=y.tag,C===5||C===6){l=h=y;continue e}_=_.parentNode}}l=l.return}eu(function(){var N=h,G=br(i),Q=[];e:{var W=Uu.get(e);if(W!==void 0){var ue=bo,fe=e;switch(e){case"keypress":if(Pi(i)===0)break e;case"keydown":case"keyup":ue=m2;break;case"focusin":fe="focus",ue=ko;break;case"focusout":fe="blur",ue=ko;break;case"beforeblur":case"afterblur":ue=ko;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=n2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=g2;break;case Iu:case Fu:case Hu:ue=a2;break;case Wu:ue=x2;break;case"scroll":ue=e2;break;case"wheel":ue=b2;break;case"copy":case"cut":case"paste":ue=l2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=_u}var he=(t&4)!==0,lt=!he&&e==="scroll",j=he?W!==null?W+"Capture":null:W;he=[];for(var q=N,D;q!==null;){D=q;var re=D.stateNode;if(D.tag===5&&re!==null&&(D=re,j!==null&&(re=_0(q,j),re!=null&&he.push(F0(q,re,D)))),lt)break;q=q.return}0<he.length&&(W=new ue(W,fe,null,i,G),Q.push({event:W,listeners:he}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",W&&i!==Oe&&(fe=i.relatedTarget||i.fromElement)&&(_r(fe)||fe[Mn]))break e;if((ue||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,ue?(fe=i.relatedTarget||i.toElement,ue=N,fe=fe?_r(fe):null,fe!==null&&(lt=$r(fe),fe!==lt||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ue=null,fe=N),ue!==fe)){if(he=bu,re="onMouseLeave",j="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(he=_u,re="onPointerLeave",j="onPointerEnter",q="pointer"),lt=ue==null?W:Kr(ue),D=fe==null?W:Kr(fe),W=new he(re,q+"leave",ue,i,G),W.target=lt,W.relatedTarget=D,re=null,_r(G)===N&&(he=new he(j,q+"enter",fe,i,G),he.target=D,he.relatedTarget=lt,re=he),lt=re,ue&&fe)t:{for(he=ue,j=fe,q=0,D=he;D;D=Xr(D))q++;for(D=0,re=j;re;re=Xr(re))D++;for(;0<q-D;)he=Xr(he),q--;for(;0<D-q;)j=Xr(j),D--;for(;q--;){if(he===j||j!==null&&he===j.alternate)break t;he=Xr(he),j=Xr(j)}he=null}else he=null;ue!==null&&Qu(Q,W,ue,he,!1),fe!==null&&lt!==null&&Qu(Q,lt,fe,he,!0)}}e:{if(W=N?Kr(N):window,ue=W.nodeName&&W.nodeName.toLowerCase(),ue==="select"||ue==="input"&&W.type==="file")var me=T2;else if(Cu(W))if(qu)me=E2;else{me=A2;var ge=C2}else(ue=W.nodeName)&&ue.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(me=q2);if(me&&(me=me(e,N))){Au(Q,me,i,G);break e}ge&&ge(e,W,N),e==="focusout"&&(ge=W._wrapperState)&&ge.controlled&&W.type==="number"&&Sn(W,"number",W.value)}switch(ge=N?Kr(N):window,e){case"focusin":(Cu(ge)||ge.contentEditable==="true")&&(Gr=ge,Ao=N,L0=null);break;case"focusout":L0=Ao=Gr=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Lu(Q,i,G);break;case"selectionchange":if(R2)break;case"keydown":case"keyup":Lu(Q,i,G)}var ye;if(So)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Vr?Mu(e,i)&&(_e="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(_e="onCompositionStart");_e&&(ku&&i.locale!=="ko"&&(Vr||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Vr&&(ye=xu()):(Kn=G,wo="value"in Kn?Kn.value:Kn.textContent,Vr=!0)),ge=Oi(N,_e),0<ge.length&&(_e=new $u(_e,e,null,i,G),Q.push({event:_e,listeners:ge}),ye?_e.data=ye:(ye=Tu(i),ye!==null&&(_e.data=ye)))),(ye=_2?k2(e,i):z2(e,i))&&(N=Oi(N,"onBeforeInput"),0<N.length&&(G=new $u("onBeforeInput","beforeinput",null,i,G),Q.push({event:G,listeners:N}),G.data=ye))}Yu(Q,t)})}function F0(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Oi(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=_0(e,i),h!=null&&l.unshift(F0(e,h,c)),h=_0(e,t),h!=null&&l.push(F0(e,h,c))),e=e.return}return l}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,i,l,c){for(var h=t._reactName,y=[];i!==null&&i!==l;){var _=i,C=_.alternate,N=_.stateNode;if(C!==null&&C===l)break;_.tag===5&&N!==null&&(_=N,c?(C=_0(i,h),C!=null&&y.unshift(F0(i,C,_))):c||(C=_0(i,h),C!=null&&y.push(F0(i,C,_)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var L2=/\r\n?/g,O2=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(L2,`
`).replace(O2,"")}function Ii(e,t,i){if(t=Ku(t),Ku(e)!==t&&i)throw Error(r(425))}function Fi(){}var Bo=null,No=null;function Lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oo=typeof setTimeout=="function"?setTimeout:void 0,I2=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,F2=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(H2)}:Oo;function H2(e){setTimeout(function(){throw e})}function Io(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),E0(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);E0(t)}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),mn="__reactFiber$"+Qr,H0="__reactProps$"+Qr,Mn="__reactContainer$"+Qr,Fo="__reactEvents$"+Qr,W2="__reactListeners$"+Qr,U2="__reactHandles$"+Qr;function _r(e){var t=e[mn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Mn]||i[mn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ju(e);e!==null;){if(i=e[mn])return i;e=Ju(e)}return t}e=i,i=e.parentNode}return null}function W0(e){return e=e[mn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Hi(e){return e[H0]||null}var Ho=[],Zr=-1;function er(e){return{current:e}}function Qe(e){0>Zr||(e.current=Ho[Zr],Ho[Zr]=null,Zr--)}function Ge(e,t){Zr++,Ho[Zr]=e.current,e.current=t}var tr={},_t=er(tr),jt=er(!1),kr=tr;function Jr(e,t){var i=e.type.contextTypes;if(!i)return tr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in i)c[h]=t[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Rt(e){return e=e.childContextTypes,e!=null}function Wi(){Qe(jt),Qe(_t)}function e1(e,t,i){if(_t.current!==tr)throw Error(r(168));Ge(_t,t),Ge(jt,i)}function t1(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(r(108,je(e)||"Unknown",c));return K({},i,l)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,kr=_t.current,Ge(_t,e),Ge(jt,jt.current),!0}function n1(e,t,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=t1(e,t,kr),l.__reactInternalMemoizedMergedChildContext=e,Qe(jt),Qe(_t),Ge(_t,e)):Qe(jt),Ge(jt,i)}var Tn=null,Vi=!1,Wo=!1;function r1(e){Tn===null?Tn=[e]:Tn.push(e)}function V2(e){Vi=!0,r1(e)}function nr(){if(!Wo&&Tn!==null){Wo=!0;var e=0,t=Ue;try{var i=Tn;for(Ue=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Tn=null,Vi=!1}catch(c){throw Tn!==null&&(Tn=Tn.slice(e+1)),au(fo,nr),c}finally{Ue=t,Wo=!1}}return null}var e0=[],t0=0,Gi=null,Yi=0,Xt=[],Qt=0,zr=null,Cn=1,An="";function Sr(e,t){e0[t0++]=Yi,e0[t0++]=Gi,Gi=e,Yi=t}function i1(e,t,i){Xt[Qt++]=Cn,Xt[Qt++]=An,Xt[Qt++]=zr,zr=e;var l=Cn;e=An;var c=32-an(l)-1;l&=~(1<<c),i+=1;var h=32-an(t)+c;if(30<h){var y=c-c%5;h=(l&(1<<y)-1).toString(32),l>>=y,c-=y,Cn=1<<32-an(t)+c|i<<c|l,An=h+e}else Cn=1<<h|i<<c|l,An=e}function Uo(e){e.return!==null&&(Sr(e,1),i1(e,1,0))}function Vo(e){for(;e===Gi;)Gi=e0[--t0],e0[t0]=null,Yi=e0[--t0],e0[t0]=null;for(;e===zr;)zr=Xt[--Qt],Xt[Qt]=null,An=Xt[--Qt],Xt[Qt]=null,Cn=Xt[--Qt],Xt[Qt]=null}var Ht=null,Wt=null,Ke=!1,ln=null;function a1(e,t){var i=en(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function o1(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=Jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=zr!==null?{id:Cn,overflow:An}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=en(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ht=e,Wt=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if(Ke){var t=Wt;if(t){var i=t;if(!o1(e,t)){if(Go(e))throw Error(r(418));t=Jn(i.nextSibling);var l=Ht;t&&o1(e,t)?a1(l,i):(e.flags=e.flags&-4097|2,Ke=!1,Ht=e)}}else{if(Go(e))throw Error(r(418));e.flags=e.flags&-4097|2,Ke=!1,Ht=e}}}function l1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Xi(e){if(e!==Ht)return!1;if(!Ke)return l1(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lo(e.type,e.memoizedProps)),t&&(t=Wt)){if(Go(e))throw s1(),Error(r(418));for(;t;)a1(e,t),t=Jn(t.nextSibling)}if(l1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Wt=Jn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Ht?Jn(e.stateNode.nextSibling):null;return!0}function s1(){for(var e=Wt;e;)e=Jn(e.nextSibling)}function n0(){Wt=Ht=null,Ke=!1}function Xo(e){ln===null?ln=[e]:ln.push(e)}var G2=L.ReactCurrentBatchConfig;function U0(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(y){var _=c.refs;y===null?delete _[h]:_[h]=y},t._stringRef=h,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function u1(e){var t=e._init;return t(e._payload)}function c1(e){function t(j,q){if(e){var D=j.deletions;D===null?(j.deletions=[q],j.flags|=16):D.push(q)}}function i(j,q){if(!e)return null;for(;q!==null;)t(j,q),q=q.sibling;return null}function l(j,q){for(j=new Map;q!==null;)q.key!==null?j.set(q.key,q):j.set(q.index,q),q=q.sibling;return j}function c(j,q){return j=cr(j,q),j.index=0,j.sibling=null,j}function h(j,q,D){return j.index=D,e?(D=j.alternate,D!==null?(D=D.index,D<q?(j.flags|=2,q):D):(j.flags|=2,q)):(j.flags|=1048576,q)}function y(j){return e&&j.alternate===null&&(j.flags|=2),j}function _(j,q,D,re){return q===null||q.tag!==6?(q=Ol(D,j.mode,re),q.return=j,q):(q=c(q,D),q.return=j,q)}function C(j,q,D,re){var me=D.type;return me===O?G(j,q,D.props.children,re,D.key):q!==null&&(q.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Re&&u1(me)===q.type)?(re=c(q,D.props),re.ref=U0(j,q,D),re.return=j,re):(re=wa(D.type,D.key,D.props,null,j.mode,re),re.ref=U0(j,q,D),re.return=j,re)}function N(j,q,D,re){return q===null||q.tag!==4||q.stateNode.containerInfo!==D.containerInfo||q.stateNode.implementation!==D.implementation?(q=Il(D,j.mode,re),q.return=j,q):(q=c(q,D.children||[]),q.return=j,q)}function G(j,q,D,re,me){return q===null||q.tag!==7?(q=jr(D,j.mode,re,me),q.return=j,q):(q=c(q,D),q.return=j,q)}function Q(j,q,D){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Ol(""+q,j.mode,D),q.return=j,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return D=wa(q.type,q.key,q.props,null,j.mode,D),D.ref=U0(j,null,q),D.return=j,D;case ae:return q=Il(q,j.mode,D),q.return=j,q;case Re:var re=q._init;return Q(j,re(q._payload),D)}if(bt(q)||pe(q))return q=jr(q,j.mode,D,null),q.return=j,q;Qi(j,q)}return null}function W(j,q,D,re){var me=q!==null?q.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return me!==null?null:_(j,q,""+D,re);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case V:return D.key===me?C(j,q,D,re):null;case ae:return D.key===me?N(j,q,D,re):null;case Re:return me=D._init,W(j,q,me(D._payload),re)}if(bt(D)||pe(D))return me!==null?null:G(j,q,D,re,null);Qi(j,D)}return null}function ue(j,q,D,re,me){if(typeof re=="string"&&re!==""||typeof re=="number")return j=j.get(D)||null,_(q,j,""+re,me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case V:return j=j.get(re.key===null?D:re.key)||null,C(q,j,re,me);case ae:return j=j.get(re.key===null?D:re.key)||null,N(q,j,re,me);case Re:var ge=re._init;return ue(j,q,D,ge(re._payload),me)}if(bt(re)||pe(re))return j=j.get(D)||null,G(q,j,re,me,null);Qi(q,re)}return null}function fe(j,q,D,re){for(var me=null,ge=null,ye=q,_e=q=0,yt=null;ye!==null&&_e<D.length;_e++){ye.index>_e?(yt=ye,ye=null):yt=ye.sibling;var Ie=W(j,ye,D[_e],re);if(Ie===null){ye===null&&(ye=yt);break}e&&ye&&Ie.alternate===null&&t(j,ye),q=h(Ie,q,_e),ge===null?me=Ie:ge.sibling=Ie,ge=Ie,ye=yt}if(_e===D.length)return i(j,ye),Ke&&Sr(j,_e),me;if(ye===null){for(;_e<D.length;_e++)ye=Q(j,D[_e],re),ye!==null&&(q=h(ye,q,_e),ge===null?me=ye:ge.sibling=ye,ge=ye);return Ke&&Sr(j,_e),me}for(ye=l(j,ye);_e<D.length;_e++)yt=ue(ye,j,_e,D[_e],re),yt!==null&&(e&&yt.alternate!==null&&ye.delete(yt.key===null?_e:yt.key),q=h(yt,q,_e),ge===null?me=yt:ge.sibling=yt,ge=yt);return e&&ye.forEach(function(dr){return t(j,dr)}),Ke&&Sr(j,_e),me}function he(j,q,D,re){var me=pe(D);if(typeof me!="function")throw Error(r(150));if(D=me.call(D),D==null)throw Error(r(151));for(var ge=me=null,ye=q,_e=q=0,yt=null,Ie=D.next();ye!==null&&!Ie.done;_e++,Ie=D.next()){ye.index>_e?(yt=ye,ye=null):yt=ye.sibling;var dr=W(j,ye,Ie.value,re);if(dr===null){ye===null&&(ye=yt);break}e&&ye&&dr.alternate===null&&t(j,ye),q=h(dr,q,_e),ge===null?me=dr:ge.sibling=dr,ge=dr,ye=yt}if(Ie.done)return i(j,ye),Ke&&Sr(j,_e),me;if(ye===null){for(;!Ie.done;_e++,Ie=D.next())Ie=Q(j,Ie.value,re),Ie!==null&&(q=h(Ie,q,_e),ge===null?me=Ie:ge.sibling=Ie,ge=Ie);return Ke&&Sr(j,_e),me}for(ye=l(j,ye);!Ie.done;_e++,Ie=D.next())Ie=ue(ye,j,_e,Ie.value,re),Ie!==null&&(e&&Ie.alternate!==null&&ye.delete(Ie.key===null?_e:Ie.key),q=h(Ie,q,_e),ge===null?me=Ie:ge.sibling=Ie,ge=Ie);return e&&ye.forEach(function(Mf){return t(j,Mf)}),Ke&&Sr(j,_e),me}function lt(j,q,D,re){if(typeof D=="object"&&D!==null&&D.type===O&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case V:e:{for(var me=D.key,ge=q;ge!==null;){if(ge.key===me){if(me=D.type,me===O){if(ge.tag===7){i(j,ge.sibling),q=c(ge,D.props.children),q.return=j,j=q;break e}}else if(ge.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Re&&u1(me)===ge.type){i(j,ge.sibling),q=c(ge,D.props),q.ref=U0(j,ge,D),q.return=j,j=q;break e}i(j,ge);break}else t(j,ge);ge=ge.sibling}D.type===O?(q=jr(D.props.children,j.mode,re,D.key),q.return=j,j=q):(re=wa(D.type,D.key,D.props,null,j.mode,re),re.ref=U0(j,q,D),re.return=j,j=re)}return y(j);case ae:e:{for(ge=D.key;q!==null;){if(q.key===ge)if(q.tag===4&&q.stateNode.containerInfo===D.containerInfo&&q.stateNode.implementation===D.implementation){i(j,q.sibling),q=c(q,D.children||[]),q.return=j,j=q;break e}else{i(j,q);break}else t(j,q);q=q.sibling}q=Il(D,j.mode,re),q.return=j,j=q}return y(j);case Re:return ge=D._init,lt(j,q,ge(D._payload),re)}if(bt(D))return fe(j,q,D,re);if(pe(D))return he(j,q,D,re);Qi(j,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,q!==null&&q.tag===6?(i(j,q.sibling),q=c(q,D),q.return=j,j=q):(i(j,q),q=Ol(D,j.mode,re),q.return=j,j=q),y(j)):i(j,q)}return lt}var r0=c1(!0),d1=c1(!1),Ki=er(null),Zi=null,i0=null,Qo=null;function Ko(){Qo=i0=Zi=null}function Zo(e){var t=Ki.current;Qe(Ki),e._currentValue=t}function Jo(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function a0(e,t){Zi=e,Qo=i0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Dt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:t,next:null},i0===null){if(Zi===null)throw Error(r(308));i0=e,Zi.dependencies={lanes:0,firstContext:e}}else i0=i0.next=e;return t}var Mr=null;function el(e){Mr===null?Mr=[e]:Mr.push(e)}function f1(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,el(t)):(i.next=c.next,c.next=i),t.interleaved=i,qn(e,l)}function qn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var rr=!1;function tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ir(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,qn(e,i)}return c=l.interleaved,c===null?(t.next=t,el(l)):(t.next=c.next,c.next=t),l.interleaved=t,qn(e,i)}function Ji(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,po(e,i)}}function m1(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?c=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?c=h=t:h=h.next=t}else c=h=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ea(e,t,i,l){var c=e.updateQueue;rr=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var C=_,N=C.next;C.next=null,y===null?h=N:y.next=N,y=C;var G=e.alternate;G!==null&&(G=G.updateQueue,_=G.lastBaseUpdate,_!==y&&(_===null?G.firstBaseUpdate=N:_.next=N,G.lastBaseUpdate=C))}if(h!==null){var Q=c.baseState;y=0,G=N=C=null,_=h;do{var W=_.lane,ue=_.eventTime;if((l&W)===W){G!==null&&(G=G.next={eventTime:ue,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var fe=e,he=_;switch(W=t,ue=i,he.tag){case 1:if(fe=he.payload,typeof fe=="function"){Q=fe.call(ue,Q,W);break e}Q=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=he.payload,W=typeof fe=="function"?fe.call(ue,Q,W):fe,W==null)break e;Q=K({},Q,W);break e;case 2:rr=!0}}_.callback!==null&&_.lane!==0&&(e.flags|=64,W=c.effects,W===null?c.effects=[_]:W.push(_))}else ue={eventTime:ue,lane:W,tag:_.tag,payload:_.payload,callback:_.callback,next:null},G===null?(N=G=ue,C=Q):G=G.next=ue,y|=W;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;W=_,_=W.next,W.next=null,c.lastBaseUpdate=W,c.shared.pending=null}}while(!0);if(G===null&&(C=Q),c.baseState=C,c.firstBaseUpdate=N,c.lastBaseUpdate=G,t=c.shared.interleaved,t!==null){c=t;do y|=c.lane,c=c.next;while(c!==t)}else h===null&&(c.shared.lanes=0);Ar|=y,e.lanes=y,e.memoizedState=Q}}function p1(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var V0={},pn=er(V0),G0=er(V0),Y0=er(V0);function Tr(e){if(e===V0)throw Error(r(174));return e}function nl(e,t){switch(Ge(Y0,t),Ge(G0,e),Ge(pn,V0),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Or(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Or(t,e)}Qe(pn),Ge(pn,t)}function o0(){Qe(pn),Qe(G0),Qe(Y0)}function v1(e){Tr(Y0.current);var t=Tr(pn.current),i=Or(t,e.type);t!==i&&(Ge(G0,e),Ge(pn,i))}function rl(e){G0.current===e&&(Qe(pn),Qe(G0))}var Je=er(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function al(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var na=L.ReactCurrentDispatcher,ol=L.ReactCurrentBatchConfig,Cr=0,et=null,ht=null,vt=null,ra=!1,X0=!1,Q0=0,Y2=0;function kt(){throw Error(r(321))}function ll(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!on(e[i],t[i]))return!1;return!0}function sl(e,t,i,l,c,h){if(Cr=h,et=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,na.current=e===null||e.memoizedState===null?Z2:J2,e=i(l,c),X0){h=0;do{if(X0=!1,Q0=0,25<=h)throw Error(r(301));h+=1,vt=ht=null,t.updateQueue=null,na.current=ef,e=i(l,c)}while(X0)}if(na.current=oa,t=ht!==null&&ht.next!==null,Cr=0,vt=ht=et=null,ra=!1,t)throw Error(r(300));return e}function ul(){var e=Q0!==0;return Q0=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=e:vt=vt.next=e,vt}function Zt(){if(ht===null){var e=et.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var t=vt===null?et.memoizedState:vt.next;if(t!==null)vt=t,ht=e;else{if(e===null)throw Error(r(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},vt===null?et.memoizedState=vt=e:vt=vt.next=e}return vt}function K0(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=Zt(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=ht,c=l.baseQueue,h=i.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}l.baseQueue=c=h,i.pending=null}if(c!==null){h=c.next,l=l.baseState;var _=y=null,C=null,N=h;do{var G=N.lane;if((Cr&G)===G)C!==null&&(C=C.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),l=N.hasEagerState?N.eagerState:e(l,N.action);else{var Q={lane:G,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};C===null?(_=C=Q,y=l):C=C.next=Q,et.lanes|=G,Ar|=G}N=N.next}while(N!==null&&N!==h);C===null?y=l:C.next=_,on(l,t.memoizedState)||(Dt=!0),t.memoizedState=l,t.baseState=y,t.baseQueue=C,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do h=c.lane,et.lanes|=h,Ar|=h,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function dl(e){var t=Zt(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,h=t.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);on(h,t.memoizedState)||(Dt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,l]}function g1(){}function y1(e,t){var i=et,l=Zt(),c=t(),h=!on(l.memoizedState,c);if(h&&(l.memoizedState=c,Dt=!0),l=l.queue,fl(b1.bind(null,i,l,e),[e]),l.getSnapshot!==t||h||vt!==null&&vt.memoizedState.tag&1){if(i.flags|=2048,Z0(9,w1.bind(null,i,l,c,t),void 0,null),gt===null)throw Error(r(349));(Cr&30)!==0||x1(i,t,c)}return c}function x1(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function w1(e,t,i,l){t.value=i,t.getSnapshot=l,$1(t)&&_1(e)}function b1(e,t,i){return i(function(){$1(t)&&_1(e)})}function $1(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!on(e,i)}catch{return!0}}function _1(e){var t=qn(e,1);t!==null&&dn(t,e,1,-1)}function k1(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:e},t.queue=e,e=e.dispatch=K2.bind(null,et,e),[t.memoizedState,e]}function Z0(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=et.updateQueue,t===null?(t={lastEffect:null,stores:null},et.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function z1(){return Zt().memoizedState}function ia(e,t,i,l){var c=vn();et.flags|=e,c.memoizedState=Z0(1|t,i,void 0,l===void 0?null:l)}function aa(e,t,i,l){var c=Zt();l=l===void 0?null:l;var h=void 0;if(ht!==null){var y=ht.memoizedState;if(h=y.destroy,l!==null&&ll(l,y.deps)){c.memoizedState=Z0(t,i,h,l);return}}et.flags|=e,c.memoizedState=Z0(1|t,i,h,l)}function S1(e,t){return ia(8390656,8,e,t)}function fl(e,t){return aa(2048,8,e,t)}function M1(e,t){return aa(4,2,e,t)}function T1(e,t){return aa(4,4,e,t)}function C1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function A1(e,t,i){return i=i!=null?i.concat([e]):null,aa(4,4,C1.bind(null,t,e),i)}function hl(){}function q1(e,t){var i=Zt();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&ll(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function E1(e,t){var i=Zt();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&ll(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function P1(e,t,i){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=i):(on(i,t)||(i=uu(),et.lanes|=i,Ar|=i,e.baseState=!0),t)}function X2(e,t){var i=Ue;Ue=i!==0&&4>i?i:4,e(!0);var l=ol.transition;ol.transition={};try{e(!1),t()}finally{Ue=i,ol.transition=l}}function j1(){return Zt().memoizedState}function Q2(e,t,i){var l=sr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},R1(e))D1(t,i);else if(i=f1(e,t,i,l),i!==null){var c=Ct();dn(i,e,l,c),B1(i,t,l)}}function K2(e,t,i){var l=sr(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(R1(e))D1(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var y=t.lastRenderedState,_=h(y,i);if(c.hasEagerState=!0,c.eagerState=_,on(_,y)){var C=t.interleaved;C===null?(c.next=c,el(t)):(c.next=C.next,C.next=c),t.interleaved=c;return}}catch{}finally{}i=f1(e,t,c,l),i!==null&&(c=Ct(),dn(i,e,l,c),B1(i,t,l))}}function R1(e){var t=e.alternate;return e===et||t!==null&&t===et}function D1(e,t){X0=ra=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function B1(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,po(e,i)}}var oa={readContext:Kt,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Z2={readContext:Kt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:S1,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ia(4194308,4,C1.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ia(4194308,4,e,t)},useInsertionEffect:function(e,t){return ia(4,2,e,t)},useMemo:function(e,t){var i=vn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=vn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Q2.bind(null,et,e),[l.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:k1,useDebugValue:hl,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=k1(!1),t=e[0];return e=X2.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=et,c=vn();if(Ke){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),gt===null)throw Error(r(349));(Cr&30)!==0||x1(l,t,i)}c.memoizedState=i;var h={value:i,getSnapshot:t};return c.queue=h,S1(b1.bind(null,l,h,e),[e]),l.flags|=2048,Z0(9,w1.bind(null,l,h,i,t),void 0,null),i},useId:function(){var e=vn(),t=gt.identifierPrefix;if(Ke){var i=An,l=Cn;i=(l&~(1<<32-an(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=Q0++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Y2++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J2={readContext:Kt,useCallback:q1,useContext:Kt,useEffect:fl,useImperativeHandle:A1,useInsertionEffect:M1,useLayoutEffect:T1,useMemo:E1,useReducer:cl,useRef:z1,useState:function(){return cl(K0)},useDebugValue:hl,useDeferredValue:function(e){var t=Zt();return P1(t,ht.memoizedState,e)},useTransition:function(){var e=cl(K0)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:g1,useSyncExternalStore:y1,useId:j1,unstable_isNewReconciler:!1},ef={readContext:Kt,useCallback:q1,useContext:Kt,useEffect:fl,useImperativeHandle:A1,useInsertionEffect:M1,useLayoutEffect:T1,useMemo:E1,useReducer:dl,useRef:z1,useState:function(){return dl(K0)},useDebugValue:hl,useDeferredValue:function(e){var t=Zt();return ht===null?t.memoizedState=e:P1(t,ht.memoizedState,e)},useTransition:function(){var e=dl(K0)[0],t=Zt().memoizedState;return[e,t]},useMutableSource:g1,useSyncExternalStore:y1,useId:j1,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function ml(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:K({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var la={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Ct(),c=sr(e),h=En(l,c);h.payload=t,i!=null&&(h.callback=i),t=ir(e,h,c),t!==null&&(dn(t,e,c,l),Ji(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Ct(),c=sr(e),h=En(l,c);h.tag=1,h.payload=t,i!=null&&(h.callback=i),t=ir(e,h,c),t!==null&&(dn(t,e,c,l),Ji(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ct(),l=sr(e),c=En(i,l);c.tag=2,t!=null&&(c.callback=t),t=ir(e,c,l),t!==null&&(dn(t,e,l,i),Ji(t,e,l))}};function N1(e,t,i,l,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,y):t.prototype&&t.prototype.isPureReactComponent?!N0(i,l)||!N0(c,h):!0}function L1(e,t,i){var l=!1,c=tr,h=t.contextType;return typeof h=="object"&&h!==null?h=Kt(h):(c=Rt(t)?kr:_t.current,l=t.contextTypes,h=(l=l!=null)?Jr(e,c):tr),t=new t(i,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=la,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),t}function O1(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&la.enqueueReplaceState(t,t.state,null)}function pl(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},tl(e);var h=t.contextType;typeof h=="object"&&h!==null?c.context=Kt(h):(h=Rt(t)?kr:_t.current,c.context=Jr(e,h)),c.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(ml(e,t,h,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&la.enqueueReplaceState(c,c.state,null),ea(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function l0(e,t){try{var i="",l=t;do i+=Me(l),l=l.return;while(l);var c=i}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:c,digest:null}}function vl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function I1(e,t,i){i=En(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){ma||(ma=!0,El=l),gl(e,t)},i}function F1(e,t,i){i=En(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){gl(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){gl(e,t),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function H1(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new tf;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=vf.bind(null,e,t,i),t.then(e,e))}function W1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function U1(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=En(-1,1),t.tag=2,ir(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var nf=L.ReactCurrentOwner,Dt=!1;function Tt(e,t,i,l){t.child=e===null?d1(t,null,i,l):r0(t,e.child,i,l)}function V1(e,t,i,l,c){i=i.render;var h=t.ref;return a0(t,c),l=sl(e,t,i,l,h,c),i=ul(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Pn(e,t,c)):(Ke&&i&&Uo(t),t.flags|=1,Tt(e,t,l,c),t.child)}function G1(e,t,i,l,c){if(e===null){var h=i.type;return typeof h=="function"&&!Ll(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=h,Y1(e,t,h,l,c)):(e=wa(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&c)===0){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:N0,i(y,l)&&e.ref===t.ref)return Pn(e,t,c)}return t.flags|=1,e=cr(h,l),e.ref=t.ref,e.return=t,t.child=e}function Y1(e,t,i,l,c){if(e!==null){var h=e.memoizedProps;if(N0(h,l)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=l=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Dt=!0);else return t.lanes=e.lanes,Pn(e,t,c)}return yl(e,t,i,l,c)}function X1(e,t,i){var l=t.pendingProps,c=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(u0,Ut),Ut|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ge(u0,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,Ge(u0,Ut),Ut|=l}else h!==null?(l=h.baseLanes|i,t.memoizedState=null):l=i,Ge(u0,Ut),Ut|=l;return Tt(e,t,c,i),t.child}function Q1(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,i,l,c){var h=Rt(i)?kr:_t.current;return h=Jr(t,h),a0(t,c),i=sl(e,t,i,l,h,c),l=ul(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Pn(e,t,c)):(Ke&&l&&Uo(t),t.flags|=1,Tt(e,t,i,c),t.child)}function K1(e,t,i,l,c){if(Rt(i)){var h=!0;Ui(t)}else h=!1;if(a0(t,c),t.stateNode===null)ua(e,t),L1(t,i,l),pl(t,i,l,c),l=!0;else if(e===null){var y=t.stateNode,_=t.memoizedProps;y.props=_;var C=y.context,N=i.contextType;typeof N=="object"&&N!==null?N=Kt(N):(N=Rt(i)?kr:_t.current,N=Jr(t,N));var G=i.getDerivedStateFromProps,Q=typeof G=="function"||typeof y.getSnapshotBeforeUpdate=="function";Q||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(_!==l||C!==N)&&O1(t,y,l,N),rr=!1;var W=t.memoizedState;y.state=W,ea(t,l,y,c),C=t.memoizedState,_!==l||W!==C||jt.current||rr?(typeof G=="function"&&(ml(t,i,G,l),C=t.memoizedState),(_=rr||N1(t,i,_,l,W,C,N))?(Q||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),y.props=l,y.state=C,y.context=N,l=_):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{y=t.stateNode,h1(e,t),_=t.memoizedProps,N=t.type===t.elementType?_:sn(t.type,_),y.props=N,Q=t.pendingProps,W=y.context,C=i.contextType,typeof C=="object"&&C!==null?C=Kt(C):(C=Rt(i)?kr:_t.current,C=Jr(t,C));var ue=i.getDerivedStateFromProps;(G=typeof ue=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(_!==Q||W!==C)&&O1(t,y,l,C),rr=!1,W=t.memoizedState,y.state=W,ea(t,l,y,c);var fe=t.memoizedState;_!==Q||W!==fe||jt.current||rr?(typeof ue=="function"&&(ml(t,i,ue,l),fe=t.memoizedState),(N=rr||N1(t,i,N,l,W,fe,C)||!1)?(G||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,fe,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,fe,C)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||_===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=fe),y.props=l,y.state=fe,y.context=C,l=N):(typeof y.componentDidUpdate!="function"||_===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),l=!1)}return xl(e,t,i,l,h,c)}function xl(e,t,i,l,c,h){Q1(e,t);var y=(t.flags&128)!==0;if(!l&&!y)return c&&n1(t,i,!1),Pn(e,t,h);l=t.stateNode,nf.current=t;var _=y&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&y?(t.child=r0(t,e.child,null,h),t.child=r0(t,null,_,h)):Tt(e,t,_,h),t.memoizedState=l.state,c&&n1(t,i,!0),t.child}function Z1(e){var t=e.stateNode;t.pendingContext?e1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&e1(e,t.context,!1),nl(e,t.containerInfo)}function J1(e,t,i,l,c){return n0(),Xo(c),t.flags|=256,Tt(e,t,i,l),t.child}var wl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,i){var l=t.pendingProps,c=Je.current,h=!1,y=(t.flags&128)!==0,_;if((_=y)||(_=e!==null&&e.memoizedState===null?!1:(c&2)!==0),_?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ge(Je,c&1),e===null)return Yo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=l.children,e=l.fallback,h?(l=t.mode,h=t.child,y={mode:"hidden",children:y},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=ba(y,l,0,null),e=jr(e,l,i,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=bl(i),t.memoizedState=wl,e):$l(t,y));if(c=e.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return rf(e,t,y,l,_,c,i);if(h){h=l.fallback,y=t.mode,c=e.child,_=c.sibling;var C={mode:"hidden",children:l.children};return(y&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=C,t.deletions=null):(l=cr(c,C),l.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=cr(_,h):(h=jr(h,y,i,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,l=h,h=t.child,y=e.child.memoizedState,y=y===null?bl(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~i,t.memoizedState=wl,l}return h=e.child,e=h.sibling,l=cr(h,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function $l(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sa(e,t,i,l){return l!==null&&Xo(l),r0(t,e.child,null,i),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,i,l,c,h,y){if(i)return t.flags&256?(t.flags&=-257,l=vl(Error(r(422))),sa(e,t,y,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=l.fallback,c=t.mode,l=ba({mode:"visible",children:l.children},c,0,null),h=jr(h,c,y,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,(t.mode&1)!==0&&r0(t,e.child,null,y),t.child.memoizedState=bl(y),t.memoizedState=wl,h);if((t.mode&1)===0)return sa(e,t,y,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var _=l.dgst;return l=_,h=Error(r(419)),l=vl(h,l,void 0),sa(e,t,y,l)}if(_=(y&e.childLanes)!==0,Dt||_){if(l=gt,l!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|y))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,qn(e,c),dn(l,e,c,-1))}return Nl(),l=vl(Error(r(421))),sa(e,t,y,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),c._reactRetry=t,null):(e=h.treeContext,Wt=Jn(c.nextSibling),Ht=t,Ke=!0,ln=null,e!==null&&(Xt[Qt++]=Cn,Xt[Qt++]=An,Xt[Qt++]=zr,Cn=e.id,An=e.overflow,zr=t),t=$l(t,l.children),t.flags|=4096,t)}function tc(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Jo(e.return,t,i)}function _l(e,t,i,l,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=c)}function nc(e,t,i){var l=t.pendingProps,c=l.revealOrder,h=l.tail;if(Tt(e,t,l.children,i),l=Je.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,i,t);else if(e.tag===19)tc(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ge(Je,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&ta(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),_l(t,!1,c,i,h);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ta(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}_l(t,!0,i,null,h);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ua(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=cr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=cr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function af(e,t,i){switch(t.tag){case 3:Z1(t),n0();break;case 5:v1(t);break;case 1:Rt(t.type)&&Ui(t);break;case 4:nl(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Ge(Ki,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ge(Je,Je.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?ec(e,t,i):(Ge(Je,Je.current&1),e=Pn(e,t,i),e!==null?e.sibling:null);Ge(Je,Je.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return nc(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ge(Je,Je.current),l)break;return null;case 22:case 23:return t.lanes=0,X1(e,t,i)}return Pn(e,t,i)}var rc,kl,ic,ac;rc=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},kl=function(){},ic=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Tr(pn.current);var h=null;switch(i){case"input":c=_n(e,c),l=_n(e,l),h=[];break;case"select":c=K({},c,{value:void 0}),l=K({},l,{value:void 0}),h=[];break;case"textarea":c=Wn(e,c),l=Wn(e,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Fi)}oe(i,l);var y;i=null;for(N in c)if(!l.hasOwnProperty(N)&&c.hasOwnProperty(N)&&c[N]!=null)if(N==="style"){var _=c[N];for(y in _)_.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(s.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in l){var C=l[N];if(_=c!=null?c[N]:void 0,l.hasOwnProperty(N)&&C!==_&&(C!=null||_!=null))if(N==="style")if(_){for(y in _)!_.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in C)C.hasOwnProperty(y)&&_[y]!==C[y]&&(i||(i={}),i[y]=C[y])}else i||(h||(h=[]),h.push(N,i)),i=C;else N==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,_=_?_.__html:void 0,C!=null&&_!==C&&(h=h||[]).push(N,C)):N==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(N,""+C):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(s.hasOwnProperty(N)?(C!=null&&N==="onScroll"&&Xe("scroll",e),h||_===C||(h=[])):(h=h||[]).push(N,C))}i&&(h=h||[]).push("style",i);var N=h;(t.updateQueue=N)&&(t.flags|=4)}},ac=function(e,t,i,l){i!==l&&(t.flags|=4)};function J0(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function zt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function of(e,t,i){var l=t.pendingProps;switch(Vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(t),null;case 1:return Rt(t.type)&&Wi(),zt(t),null;case 3:return l=t.stateNode,o0(),Qe(jt),Qe(_t),al(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ln!==null&&(Rl(ln),ln=null))),kl(e,t),zt(t),null;case 5:rl(t);var c=Tr(Y0.current);if(i=t.type,e!==null&&t.stateNode!=null)ic(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(r(166));return zt(t),null}if(e=Tr(pn.current),Xi(t)){l=t.stateNode,i=t.type;var h=t.memoizedProps;switch(l[mn]=t,l[H0]=h,e=(t.mode&1)!==0,i){case"dialog":Xe("cancel",l),Xe("close",l);break;case"iframe":case"object":case"embed":Xe("load",l);break;case"video":case"audio":for(c=0;c<O0.length;c++)Xe(O0[c],l);break;case"source":Xe("error",l);break;case"img":case"image":case"link":Xe("error",l),Xe("load",l);break;case"details":Xe("toggle",l);break;case"input":kn(l,h),Xe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Xe("invalid",l);break;case"textarea":Lr(l,h),Xe("invalid",l)}oe(i,h),c=null;for(var y in h)if(h.hasOwnProperty(y)){var _=h[y];y==="children"?typeof _=="string"?l.textContent!==_&&(h.suppressHydrationWarning!==!0&&Ii(l.textContent,_,e),c=["children",_]):typeof _=="number"&&l.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&Ii(l.textContent,_,e),c=["children",""+_]):s.hasOwnProperty(y)&&_!=null&&y==="onScroll"&&Xe("scroll",l)}switch(i){case"input":Yt(l),zn(l,h,!0);break;case"textarea":Yt(l),Un(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Fi)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$0(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(i,{is:l.is}):(e=y.createElement(i),i==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,i),e[mn]=t,e[H0]=l,rc(e,t,!1,!1),t.stateNode=e;e:{switch(y=Le(i,l),i){case"dialog":Xe("cancel",e),Xe("close",e),c=l;break;case"iframe":case"object":case"embed":Xe("load",e),c=l;break;case"video":case"audio":for(c=0;c<O0.length;c++)Xe(O0[c],e);c=l;break;case"source":Xe("error",e),c=l;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),c=l;break;case"details":Xe("toggle",e),c=l;break;case"input":kn(e,l),c=_n(e,l),Xe("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=K({},l,{value:void 0}),Xe("invalid",e);break;case"textarea":Lr(e,l),c=Wn(e,l),Xe("invalid",e);break;default:c=l}oe(i,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var C=_[h];h==="style"?wi(e,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yi(e,C)):h==="children"?typeof C=="string"?(i!=="textarea"||C!=="")&&Vn(e,C):typeof C=="number"&&Vn(e,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(s.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Xe("scroll",e):C!=null&&F(e,h,C,y))}switch(i){case"input":Yt(e),zn(e,l,!1);break;case"textarea":Yt(e),Un(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Pe(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?$t(e,!!l.multiple,h,!1):l.defaultValue!=null&&$t(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Fi)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return zt(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(i=Tr(Y0.current),Tr(pn.current),Xi(t)){if(l=t.stateNode,i=t.memoizedProps,l[mn]=t,(h=l.nodeValue!==i)&&(e=Ht,e!==null))switch(e.tag){case 3:Ii(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(l.nodeValue,i,(e.mode&1)!==0)}h&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[mn]=t,t.stateNode=l}return zt(t),null;case 13:if(Qe(Je),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&Wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)s1(),n0(),t.flags|=98560,h=!1;else if(h=Xi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[mn]=t}else n0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;zt(t),h=!1}else ln!==null&&(Rl(ln),ln=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Je.current&1)!==0?mt===0&&(mt=3):Nl())),t.updateQueue!==null&&(t.flags|=4),zt(t),null);case 4:return o0(),kl(e,t),e===null&&I0(t.stateNode.containerInfo),zt(t),null;case 10:return Zo(t.type._context),zt(t),null;case 17:return Rt(t.type)&&Wi(),zt(t),null;case 19:if(Qe(Je),h=t.memoizedState,h===null)return zt(t),null;if(l=(t.flags&128)!==0,y=h.rendering,y===null)if(l)J0(h,!1);else{if(mt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=ta(e),y!==null){for(t.flags|=128,J0(h,!1),l=y.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)h=i,e=l,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ge(Je,Je.current&1|2),t.child}e=e.sibling}h.tail!==null&&ot()>c0&&(t.flags|=128,l=!0,J0(h,!1),t.lanes=4194304)}else{if(!l)if(e=ta(y),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),J0(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Ke)return zt(t),null}else 2*ot()-h.renderingStartTime>c0&&i!==1073741824&&(t.flags|=128,l=!0,J0(h,!1),t.lanes=4194304);h.isBackwards?(y.sibling=t.child,t.child=y):(i=h.last,i!==null?i.sibling=y:t.child=y,h.last=y)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=ot(),t.sibling=null,i=Je.current,Ge(Je,l?i&1|2:i&1),t):(zt(t),null);case 22:case 23:return Bl(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Ut&1073741824)!==0&&(zt(t),t.subtreeFlags&6&&(t.flags|=8192)):zt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function lf(e,t){switch(Vo(t),t.tag){case 1:return Rt(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return o0(),Qe(jt),Qe(_t),al(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return rl(t),null;case 13:if(Qe(Je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));n0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(Je),null;case 4:return o0(),null;case 10:return Zo(t.type._context),null;case 22:case 23:return Bl(),null;case 24:return null;default:return null}}var ca=!1,St=!1,sf=typeof WeakSet=="function"?WeakSet:Set,de=null;function s0(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){rt(e,t,l)}else i.current=null}function zl(e,t,i){try{i()}catch(l){rt(e,t,l)}}var oc=!1;function uf(e,t){if(Bo=Ai,e=Nu(),Co(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,_=-1,C=-1,N=0,G=0,Q=e,W=null;t:for(;;){for(var ue;Q!==i||c!==0&&Q.nodeType!==3||(_=y+c),Q!==h||l!==0&&Q.nodeType!==3||(C=y+l),Q.nodeType===3&&(y+=Q.nodeValue.length),(ue=Q.firstChild)!==null;)W=Q,Q=ue;for(;;){if(Q===e)break t;if(W===i&&++N===c&&(_=y),W===h&&++G===l&&(C=y),(ue=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=ue}i=_===-1||C===-1?null:{start:_,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(No={focusedElem:e,selectionRange:i},Ai=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var fe=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var he=fe.memoizedProps,lt=fe.memoizedState,j=t.stateNode,q=j.getSnapshotBeforeUpdate(t.elementType===t.type?he:sn(t.type,he),lt);j.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(re){rt(t,t.return,re)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return fe=oc,oc=!1,fe}function ei(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&zl(t,i,h)}c=c.next}while(c!==l)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Sl(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[H0],delete t[Fo],delete t[W2],delete t[U2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sc(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Fi));else if(l!==4&&(e=e.child,e!==null))for(Ml(e,t,i),e=e.sibling;e!==null;)Ml(e,t,i),e=e.sibling}function Tl(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Tl(e,t,i),e=e.sibling;e!==null;)Tl(e,t,i),e=e.sibling}var xt=null,un=!1;function ar(e,t,i){for(i=i.child;i!==null;)cc(e,t,i),i=i.sibling}function cc(e,t,i){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ki,i)}catch{}switch(i.tag){case 5:St||s0(i,t);case 6:var l=xt,c=un;xt=null,ar(e,t,i),xt=l,un=c,xt!==null&&(un?(e=xt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):xt.removeChild(i.stateNode));break;case 18:xt!==null&&(un?(e=xt,i=i.stateNode,e.nodeType===8?Io(e.parentNode,i):e.nodeType===1&&Io(e,i),E0(e)):Io(xt,i.stateNode));break;case 4:l=xt,c=un,xt=i.stateNode.containerInfo,un=!0,ar(e,t,i),xt=l,un=c;break;case 0:case 11:case 14:case 15:if(!St&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&zl(i,t,y),c=c.next}while(c!==l)}ar(e,t,i);break;case 1:if(!St&&(s0(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(_){rt(i,t,_)}ar(e,t,i);break;case 21:ar(e,t,i);break;case 22:i.mode&1?(St=(l=St)||i.memoizedState!==null,ar(e,t,i),St=l):ar(e,t,i);break;default:ar(e,t,i)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new sf),t.forEach(function(l){var c=yf.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function cn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var h=e,y=t,_=y;e:for(;_!==null;){switch(_.tag){case 5:xt=_.stateNode,un=!1;break e;case 3:xt=_.stateNode.containerInfo,un=!0;break e;case 4:xt=_.stateNode.containerInfo,un=!0;break e}_=_.return}if(xt===null)throw Error(r(160));cc(h,y,c),xt=null,un=!1;var C=c.alternate;C!==null&&(C.return=null),c.return=null}catch(N){rt(c,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),gn(e),l&4){try{ei(3,e,e.return),da(3,e)}catch(he){rt(e,e.return,he)}try{ei(5,e,e.return)}catch(he){rt(e,e.return,he)}}break;case 1:cn(t,e),gn(e),l&512&&i!==null&&s0(i,i.return);break;case 5:if(cn(t,e),gn(e),l&512&&i!==null&&s0(i,i.return),e.flags&32){var c=e.stateNode;try{Vn(c,"")}catch(he){rt(e,e.return,he)}}if(l&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,y=i!==null?i.memoizedProps:h,_=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Fn(c,h),Le(_,y);var N=Le(_,h);for(y=0;y<C.length;y+=2){var G=C[y],Q=C[y+1];G==="style"?wi(c,Q):G==="dangerouslySetInnerHTML"?yi(c,Q):G==="children"?Vn(c,Q):F(c,G,Q,N)}switch(_){case"input":Hn(c,h);break;case"textarea":gi(c,h);break;case"select":var W=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var ue=h.value;ue!=null?$t(c,!!h.multiple,ue,!1):W!==!!h.multiple&&(h.defaultValue!=null?$t(c,!!h.multiple,h.defaultValue,!0):$t(c,!!h.multiple,h.multiple?[]:"",!1))}c[H0]=h}catch(he){rt(e,e.return,he)}}break;case 6:if(cn(t,e),gn(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(he){rt(e,e.return,he)}}break;case 3:if(cn(t,e),gn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{E0(t.containerInfo)}catch(he){rt(e,e.return,he)}break;case 4:cn(t,e),gn(e);break;case 13:cn(t,e),gn(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ql=ot())),l&4&&dc(e);break;case 22:if(G=i!==null&&i.memoizedState!==null,e.mode&1?(St=(N=St)||G,cn(t,e),St=N):cn(t,e),gn(e),l&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!G&&(e.mode&1)!==0)for(de=e,G=e.child;G!==null;){for(Q=de=G;de!==null;){switch(W=de,ue=W.child,W.tag){case 0:case 11:case 14:case 15:ei(4,W,W.return);break;case 1:s0(W,W.return);var fe=W.stateNode;if(typeof fe.componentWillUnmount=="function"){l=W,i=W.return;try{t=l,fe.props=t.memoizedProps,fe.state=t.memoizedState,fe.componentWillUnmount()}catch(he){rt(l,i,he)}}break;case 5:s0(W,W.return);break;case 22:if(W.memoizedState!==null){pc(Q);continue}}ue!==null?(ue.return=W,de=ue):pc(Q)}G=G.sibling}e:for(G=null,Q=e;;){if(Q.tag===5){if(G===null){G=Q;try{c=Q.stateNode,N?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=Q.stateNode,C=Q.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,_.style.display=xi("display",y))}catch(he){rt(e,e.return,he)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=N?"":Q.memoizedProps}catch(he){rt(e,e.return,he)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===e)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===e)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===e)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:cn(t,e),gn(e),l&4&&dc(e);break;case 21:break;default:cn(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(sc(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Vn(c,""),l.flags&=-33);var h=uc(e);Tl(e,h,c);break;case 3:case 4:var y=l.stateNode.containerInfo,_=uc(e);Ml(e,_,y);break;default:throw Error(r(161))}}catch(C){rt(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,i){de=e,hc(e)}function hc(e,t,i){for(var l=(e.mode&1)!==0;de!==null;){var c=de,h=c.child;if(c.tag===22&&l){var y=c.memoizedState!==null||ca;if(!y){var _=c.alternate,C=_!==null&&_.memoizedState!==null||St;_=ca;var N=St;if(ca=y,(St=C)&&!N)for(de=c;de!==null;)y=de,C=y.child,y.tag===22&&y.memoizedState!==null?vc(c):C!==null?(C.return=y,de=C):vc(c);for(;h!==null;)de=h,hc(h),h=h.sibling;de=c,ca=_,St=N}mc(e)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,de=h):mc(e)}}function mc(e){for(;de!==null;){var t=de;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:St||da(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!St)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:sn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&p1(t,h,l);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}p1(t,y,i)}break;case 5:var _=t.stateNode;if(i===null&&t.flags&4){i=_;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&i.focus();break;case"img":C.src&&(i.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var G=N.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&E0(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}St||t.flags&512&&Sl(t)}catch(W){rt(t,t.return,W)}}if(t===e){de=null;break}if(i=t.sibling,i!==null){i.return=t.return,de=i;break}de=t.return}}function pc(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var i=t.sibling;if(i!==null){i.return=t.return,de=i;break}de=t.return}}function vc(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{da(4,t)}catch(C){rt(t,i,C)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(C){rt(t,c,C)}}var h=t.return;try{Sl(t)}catch(C){rt(t,h,C)}break;case 5:var y=t.return;try{Sl(t)}catch(C){rt(t,y,C)}}}catch(C){rt(t,t.return,C)}if(t===e){de=null;break}var _=t.sibling;if(_!==null){_.return=t.return,de=_;break}de=t.return}}var df=Math.ceil,fa=L.ReactCurrentDispatcher,Cl=L.ReactCurrentOwner,Jt=L.ReactCurrentBatchConfig,Be=0,gt=null,ut=null,wt=0,Ut=0,u0=er(0),mt=0,ti=null,Ar=0,ha=0,Al=0,ni=null,Bt=null,ql=0,c0=1/0,jn=null,ma=!1,El=null,or=null,pa=!1,lr=null,va=0,ri=0,Pl=null,ga=-1,ya=0;function Ct(){return(Be&6)!==0?ot():ga!==-1?ga:ga=ot()}function sr(e){return(e.mode&1)===0?1:(Be&2)!==0&&wt!==0?wt&-wt:G2.transition!==null?(ya===0&&(ya=uu()),ya):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e)}function dn(e,t,i,l){if(50<ri)throw ri=0,Pl=null,Error(r(185));M0(e,i,l),((Be&2)===0||e!==gt)&&(e===gt&&((Be&2)===0&&(ha|=i),mt===4&&ur(e,wt)),Nt(e,l),i===1&&Be===0&&(t.mode&1)===0&&(c0=ot()+500,Vi&&nr()))}function Nt(e,t){var i=e.callbackNode;G4(e,t);var l=Mi(e,e===gt?wt:0);if(l===0)i!==null&&ou(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&ou(i),t===1)e.tag===0?V2(yc.bind(null,e)):r1(yc.bind(null,e)),F2(function(){(Be&6)===0&&nr()}),i=null;else{switch(cu(l)){case 1:i=fo;break;case 4:i=lu;break;case 16:i=_i;break;case 536870912:i=su;break;default:i=_i}i=Sc(i,gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function gc(e,t){if(ga=-1,ya=0,(Be&6)!==0)throw Error(r(327));var i=e.callbackNode;if(d0()&&e.callbackNode!==i)return null;var l=Mi(e,e===gt?wt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=xa(e,l);else{t=l;var c=Be;Be|=2;var h=wc();(gt!==e||wt!==t)&&(jn=null,c0=ot()+500,Er(e,t));do try{mf();break}catch(_){xc(e,_)}while(!0);Ko(),fa.current=h,Be=c,ut!==null?t=0:(gt=null,wt=0,t=mt)}if(t!==0){if(t===2&&(c=ho(e),c!==0&&(l=c,t=jl(e,c))),t===1)throw i=ti,Er(e,0),ur(e,l),Nt(e,ot()),i;if(t===6)ur(e,l);else{if(c=e.current.alternate,(l&30)===0&&!ff(c)&&(t=xa(e,l),t===2&&(h=ho(e),h!==0&&(l=h,t=jl(e,h))),t===1))throw i=ti,Er(e,0),ur(e,l),Nt(e,ot()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(r(345));case 2:Pr(e,Bt,jn);break;case 3:if(ur(e,l),(l&130023424)===l&&(t=ql+500-ot(),10<t)){if(Mi(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){Ct(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Oo(Pr.bind(null,e,Bt,jn),t);break}Pr(e,Bt,jn);break;case 4:if(ur(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var y=31-an(l);h=1<<y,y=t[y],y>c&&(c=y),l&=~h}if(l=c,l=ot()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*df(l/1960))-l,10<l){e.timeoutHandle=Oo(Pr.bind(null,e,Bt,jn),l);break}Pr(e,Bt,jn);break;case 5:Pr(e,Bt,jn);break;default:throw Error(r(329))}}}return Nt(e,ot()),e.callbackNode===i?gc.bind(null,e):null}function jl(e,t){var i=ni;return e.current.memoizedState.isDehydrated&&(Er(e,t).flags|=256),e=xa(e,t),e!==2&&(t=Bt,Bt=i,t!==null&&Rl(t)),e}function Rl(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function ff(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],h=c.getSnapshot;c=c.value;try{if(!on(h(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ur(e,t){for(t&=~Al,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-an(t),l=1<<i;e[i]=-1,t&=~l}}function yc(e){if((Be&6)!==0)throw Error(r(327));d0();var t=Mi(e,0);if((t&1)===0)return Nt(e,ot()),null;var i=xa(e,t);if(e.tag!==0&&i===2){var l=ho(e);l!==0&&(t=l,i=jl(e,l))}if(i===1)throw i=ti,Er(e,0),ur(e,t),Nt(e,ot()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,Bt,jn),Nt(e,ot()),null}function Dl(e,t){var i=Be;Be|=1;try{return e(t)}finally{Be=i,Be===0&&(c0=ot()+500,Vi&&nr())}}function qr(e){lr!==null&&lr.tag===0&&(Be&6)===0&&d0();var t=Be;Be|=1;var i=Jt.transition,l=Ue;try{if(Jt.transition=null,Ue=1,e)return e()}finally{Ue=l,Jt.transition=i,Be=t,(Be&6)===0&&nr()}}function Bl(){Ut=u0.current,Qe(u0)}function Er(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,I2(i)),ut!==null)for(i=ut.return;i!==null;){var l=i;switch(Vo(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Wi();break;case 3:o0(),Qe(jt),Qe(_t),al();break;case 5:rl(l);break;case 4:o0();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:Zo(l.type._context);break;case 22:case 23:Bl()}i=i.return}if(gt=e,ut=e=cr(e.current,null),wt=Ut=t,mt=0,ti=null,Al=ha=Ar=0,Bt=ni=null,Mr!==null){for(t=0;t<Mr.length;t++)if(i=Mr[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,h=i.pending;if(h!==null){var y=h.next;h.next=c,l.next=y}i.pending=l}Mr=null}return e}function xc(e,t){do{var i=ut;try{if(Ko(),na.current=oa,ra){for(var l=et.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ra=!1}if(Cr=0,vt=ht=et=null,X0=!1,Q0=0,Cl.current=null,i===null||i.return===null){mt=1,ti=t,ut=null;break}e:{var h=e,y=i.return,_=i,C=t;if(t=wt,_.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var N=C,G=_,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var ue=W1(y);if(ue!==null){ue.flags&=-257,U1(ue,y,_,h,t),ue.mode&1&&H1(h,N,t),t=ue,C=N;var fe=t.updateQueue;if(fe===null){var he=new Set;he.add(C),t.updateQueue=he}else fe.add(C);break e}else{if((t&1)===0){H1(h,N,t),Nl();break e}C=Error(r(426))}}else if(Ke&&_.mode&1){var lt=W1(y);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),U1(lt,y,_,h,t),Xo(l0(C,_));break e}}h=C=l0(C,_),mt!==4&&(mt=2),ni===null?ni=[h]:ni.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var j=I1(h,C,t);m1(h,j);break e;case 1:_=C;var q=h.type,D=h.stateNode;if((h.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(or===null||!or.has(D)))){h.flags|=65536,t&=-t,h.lanes|=t;var re=F1(h,_,t);m1(h,re);break e}}h=h.return}while(h!==null)}$c(i)}catch(me){t=me,ut===i&&i!==null&&(ut=i=i.return);continue}break}while(!0)}function wc(){var e=fa.current;return fa.current=oa,e===null?oa:e}function Nl(){(mt===0||mt===3||mt===2)&&(mt=4),gt===null||(Ar&268435455)===0&&(ha&268435455)===0||ur(gt,wt)}function xa(e,t){var i=Be;Be|=2;var l=wc();(gt!==e||wt!==t)&&(jn=null,Er(e,t));do try{hf();break}catch(c){xc(e,c)}while(!0);if(Ko(),Be=i,fa.current=l,ut!==null)throw Error(r(261));return gt=null,wt=0,mt}function hf(){for(;ut!==null;)bc(ut)}function mf(){for(;ut!==null&&!N4();)bc(ut)}function bc(e){var t=zc(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?$c(e):ut=t,Cl.current=null}function $c(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=of(i,t,Ut),i!==null){ut=i;return}}else{if(i=lf(i,t),i!==null){i.flags&=32767,ut=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{mt=6,ut=null;return}}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);mt===0&&(mt=5)}function Pr(e,t,i){var l=Ue,c=Jt.transition;try{Jt.transition=null,Ue=1,pf(e,t,i,l)}finally{Jt.transition=c,Ue=l}return null}function pf(e,t,i,l){do d0();while(lr!==null);if((Be&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(Y4(e,h),e===gt&&(ut=gt=null,wt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||pa||(pa=!0,Sc(_i,function(){return d0(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=Jt.transition,Jt.transition=null;var y=Ue;Ue=1;var _=Be;Be|=4,Cl.current=null,uf(e,i),fc(i,e),j2(No),Ai=!!Bo,No=Bo=null,e.current=i,cf(i),L4(),Be=_,Ue=y,Jt.transition=h}else e.current=i;if(pa&&(pa=!1,lr=e,va=c),h=e.pendingLanes,h===0&&(or=null),F4(i.stateNode),Nt(e,ot()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(ma)throw ma=!1,e=El,El=null,e;return(va&1)!==0&&e.tag!==0&&d0(),h=e.pendingLanes,(h&1)!==0?e===Pl?ri++:(ri=0,Pl=e):ri=0,nr(),null}function d0(){if(lr!==null){var e=cu(va),t=Jt.transition,i=Ue;try{if(Jt.transition=null,Ue=16>e?16:e,lr===null)var l=!1;else{if(e=lr,lr=null,va=0,(Be&6)!==0)throw Error(r(331));var c=Be;for(Be|=4,de=e.current;de!==null;){var h=de,y=h.child;if((de.flags&16)!==0){var _=h.deletions;if(_!==null){for(var C=0;C<_.length;C++){var N=_[C];for(de=N;de!==null;){var G=de;switch(G.tag){case 0:case 11:case 15:ei(8,G,h)}var Q=G.child;if(Q!==null)Q.return=G,de=Q;else for(;de!==null;){G=de;var W=G.sibling,ue=G.return;if(lc(G),G===N){de=null;break}if(W!==null){W.return=ue,de=W;break}de=ue}}}var fe=h.alternate;if(fe!==null){var he=fe.child;if(he!==null){fe.child=null;do{var lt=he.sibling;he.sibling=null,he=lt}while(he!==null)}}de=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,de=y;else e:for(;de!==null;){if(h=de,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ei(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,de=j;break e}de=h.return}}var q=e.current;for(de=q;de!==null;){y=de;var D=y.child;if((y.subtreeFlags&2064)!==0&&D!==null)D.return=y,de=D;else e:for(y=q;de!==null;){if(_=de,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:da(9,_)}}catch(me){rt(_,_.return,me)}if(_===y){de=null;break e}var re=_.sibling;if(re!==null){re.return=_.return,de=re;break e}de=_.return}}if(Be=c,nr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ki,e)}catch{}l=!0}return l}finally{Ue=i,Jt.transition=t}}return!1}function _c(e,t,i){t=l0(i,t),t=I1(e,t,1),e=ir(e,t,1),t=Ct(),e!==null&&(M0(e,1,t),Nt(e,t))}function rt(e,t,i){if(e.tag===3)_c(e,e,i);else for(;t!==null;){if(t.tag===3){_c(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){e=l0(i,e),e=F1(t,e,1),t=ir(t,e,1),e=Ct(),t!==null&&(M0(t,1,e),Nt(t,e));break}}t=t.return}}function vf(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&i,gt===e&&(wt&i)===i&&(mt===4||mt===3&&(wt&130023424)===wt&&500>ot()-ql?Er(e,0):Al|=i),Nt(e,t)}function kc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Si,Si<<=1,(Si&130023424)===0&&(Si=4194304)));var i=Ct();e=qn(e,t),e!==null&&(M0(e,t,i),Nt(e,i))}function gf(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),kc(e,i)}function yf(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(t),kc(e,i)}var zc;zc=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)Dt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Dt=!1,af(e,t,i);Dt=(e.flags&131072)!==0}else Dt=!1,Ke&&(t.flags&1048576)!==0&&i1(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ua(e,t),e=t.pendingProps;var c=Jr(t,_t.current);a0(t,i),c=sl(null,t,l,e,c,i);var h=ul();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(l)?(h=!0,Ui(t)):h=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,tl(t),c.updater=la,t.stateNode=c,c._reactInternals=t,pl(t,l,e,i),t=xl(null,t,l,!0,h,i)):(t.tag=0,Ke&&h&&Uo(t),Tt(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(ua(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=wf(l),e=sn(l,e),c){case 0:t=yl(null,t,l,e,i);break e;case 1:t=K1(null,t,l,e,i);break e;case 11:t=V1(null,t,l,e,i);break e;case 14:t=G1(null,t,l,sn(l.type,e),i);break e}throw Error(r(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),yl(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),K1(e,t,l,c,i);case 3:e:{if(Z1(t),e===null)throw Error(r(387));l=t.pendingProps,h=t.memoizedState,c=h.element,h1(e,t),ea(t,l,null,i);var y=t.memoizedState;if(l=y.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){c=l0(Error(r(423)),t),t=J1(e,t,l,i,c);break e}else if(l!==c){c=l0(Error(r(424)),t),t=J1(e,t,l,i,c);break e}else for(Wt=Jn(t.stateNode.containerInfo.firstChild),Ht=t,Ke=!0,ln=null,i=d1(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(n0(),l===c){t=Pn(e,t,i);break e}Tt(e,t,l,i)}t=t.child}return t;case 5:return v1(t),e===null&&Yo(t),l=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,y=c.children,Lo(l,c)?y=null:h!==null&&Lo(l,h)&&(t.flags|=32),Q1(e,t),Tt(e,t,y,i),t.child;case 6:return e===null&&Yo(t),null;case 13:return ec(e,t,i);case 4:return nl(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=r0(t,null,l,i):Tt(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),V1(e,t,l,c,i);case 7:return Tt(e,t,t.pendingProps,i),t.child;case 8:return Tt(e,t,t.pendingProps.children,i),t.child;case 12:return Tt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,h=t.memoizedProps,y=c.value,Ge(Ki,l._currentValue),l._currentValue=y,h!==null)if(on(h.value,y)){if(h.children===c.children&&!jt.current){t=Pn(e,t,i);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var _=h.dependencies;if(_!==null){y=h.child;for(var C=_.firstContext;C!==null;){if(C.context===l){if(h.tag===1){C=En(-1,i&-i),C.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var G=N.pending;G===null?C.next=C:(C.next=G.next,G.next=C),N.pending=C}}h.lanes|=i,C=h.alternate,C!==null&&(C.lanes|=i),Jo(h.return,i,t),_.lanes|=i;break}C=C.next}}else if(h.tag===10)y=h.type===t.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=i,_=y.alternate,_!==null&&(_.lanes|=i),Jo(y,i,t),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}Tt(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,a0(t,i),c=Kt(c),l=l(c),t.flags|=1,Tt(e,t,l,i),t.child;case 14:return l=t.type,c=sn(l,t.pendingProps),c=sn(l.type,c),G1(e,t,l,c,i);case 15:return Y1(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:sn(l,c),ua(e,t),t.tag=1,Rt(l)?(e=!0,Ui(t)):e=!1,a0(t,i),L1(t,l,c),pl(t,l,c,i),xl(null,t,l,!0,e,i);case 19:return nc(e,t,i);case 22:return X1(e,t,i)}throw Error(r(156,t.tag))};function Sc(e,t){return au(e,t)}function xf(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,i,l){return new xf(e,t,i,l)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wf(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===Se)return 14}return 2}function cr(e,t){var i=e.alternate;return i===null?(i=en(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function wa(e,t,i,l,c,h){var y=2;if(l=e,typeof e=="function")Ll(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case O:return jr(i.children,c,h,t);case J:y=8,c|=8;break;case ne:return e=en(12,i,t,c|2),e.elementType=ne,e.lanes=h,e;case We:return e=en(13,i,t,c),e.elementType=We,e.lanes=h,e;case He:return e=en(19,i,t,c),e.elementType=He,e.lanes=h,e;case Ae:return ba(i,c,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:y=10;break e;case ze:y=9;break e;case Te:y=11;break e;case Se:y=14;break e;case Re:y=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=en(y,i,t,c),t.elementType=e,t.type=l,t.lanes=h,t}function jr(e,t,i,l){return e=en(7,e,l,t),e.lanes=i,e}function ba(e,t,i,l){return e=en(22,e,l,t),e.elementType=Ae,e.lanes=i,e.stateNode={isHidden:!1},e}function Ol(e,t,i){return e=en(6,e,null,t),e.lanes=i,e}function Il(e,t,i){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mo(0),this.expirationTimes=mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Fl(e,t,i,l,c,h,y,_,C){return e=new bf(e,t,i,_,C),t===1?(t=1,h===!0&&(t|=8)):t=0,h=en(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},tl(h),e}function $f(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function Mc(e){if(!e)return tr;e=e._reactInternals;e:{if($r(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Rt(i))return t1(e,i,t)}return t}function Tc(e,t,i,l,c,h,y,_,C){return e=Fl(i,l,!0,e,c,h,y,_,C),e.context=Mc(null),i=e.current,l=Ct(),c=sr(i),h=En(l,c),h.callback=t??null,ir(i,h,c),e.current.lanes=c,M0(e,c,l),Nt(e,l),e}function $a(e,t,i,l){var c=t.current,h=Ct(),y=sr(c);return i=Mc(i),t.context===null?t.context=i:t.pendingContext=i,t=En(h,y),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=ir(c,t,y),e!==null&&(dn(e,c,y,h),Ji(e,c,y)),y}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Hl(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function _f(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wl(e){this._internalRoot=e}ka.prototype.render=Wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));$a(e,t,null,null)},ka.prototype.unmount=Wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){$a(null,e,null,null)}),t[Mn]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=hu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Qn.length&&t!==0&&t<Qn[i].priority;i++);Qn.splice(i,0,e),i===0&&vu(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function kf(e,t,i,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var N=_a(y);h.call(N)}}var y=Tc(t,l,e,0,null,!1,!1,"",qc);return e._reactRootContainer=y,e[Mn]=y.current,I0(e.nodeType===8?e.parentNode:e),qr(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var _=l;l=function(){var N=_a(C);_.call(N)}}var C=Fl(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=C,e[Mn]=C.current,I0(e.nodeType===8?e.parentNode:e),qr(function(){$a(t,C,i,l)}),C}function Sa(e,t,i,l,c){var h=i._reactRootContainer;if(h){var y=h;if(typeof c=="function"){var _=c;c=function(){var C=_a(y);_.call(C)}}$a(t,y,e,c)}else y=kf(i,t,e,c,l);return _a(y)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=S0(t.pendingLanes);i!==0&&(po(t,i|1),Nt(t,ot()),(Be&6)===0&&(c0=ot()+500,nr()))}break;case 13:qr(function(){var l=qn(e,1);if(l!==null){var c=Ct();dn(l,e,1,c)}}),Hl(e,1)}},vo=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var i=Ct();dn(t,e,134217728,i)}Hl(e,134217728)}},fu=function(e){if(e.tag===13){var t=sr(e),i=qn(e,t);if(i!==null){var l=Ct();dn(i,e,t,l)}Hl(e,t)}},hu=function(){return Ue},mu=function(e,t){var i=Ue;try{return Ue=e,t()}finally{Ue=i}},lo=function(e,t,i){switch(t){case"input":if(Hn(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=Hi(l);if(!c)throw Error(r(90));Nr(l),Hn(l,c)}}}break;case"textarea":gi(e,i);break;case"select":t=i.value,t!=null&&$t(e,!!i.multiple,t,!1)}},Zs=Dl,Js=qr;var zf={usingClientEntryPoint:!1,Events:[W0,Kr,Hi,Qs,Ks,Dl]},ii={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sf={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{ki=Ma.inject(Sf),hn=Ma}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf,Lt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(r(200));return $f(e,t,null,i)},Lt.createRoot=function(e,t){if(!Ul(e))throw Error(r(299));var i=!1,l="",c=Ac;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Fl(e,1,!1,null,null,i,!1,l,c),e[Mn]=t.current,I0(e.nodeType===8?e.parentNode:e),new Wl(t)},Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e},Lt.flushSync=function(e){return qr(e)},Lt.hydrate=function(e,t,i){if(!za(t))throw Error(r(200));return Sa(null,e,t,!0,i)},Lt.hydrateRoot=function(e,t,i){if(!Ul(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,h="",y=Ac;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=Tc(t,null,e,1,i??null,c,!1,h,y),e[Mn]=t.current,I0(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new ka(t)},Lt.render=function(e,t,i){if(!za(t))throw Error(r(200));return Sa(null,e,t,!1,i)},Lt.unmountComponentAtNode=function(e){if(!za(e))throw Error(r(40));return e._reactRootContainer?(qr(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Lt.unstable_batchedUpdates=Dl,Lt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!za(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Sa(e,t,i,!1,l)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var Lc;function jf(){if(Lc)return Yl.exports;Lc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),Yl.exports=Pf(),Yl.exports}var Oc;function Rf(){if(Oc)return Ta;Oc=1;var a=jf();return Ta.createRoot=a.createRoot,Ta.hydrateRoot=a.hydrateRoot,Ta}var Df=Rf();const Bf=`---
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
`,_h=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,kh=`---
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
`,qh=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Eh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Ph=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,jh=`---
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
`,_m=`---
options:
  - "$y = \\frac{1}{4p}x^2$"
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$x^2 + y^2 = r^2$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
correct: 0
hint: "Parabola z ogniskiem w $(0,p)$: $y = \\frac{x^2}{4p}$. Jest to krzywa stożkowa będąca przekrojem stożka płaszczyzną równoległą do tworzącej."
---

Które równanie opisuje parabolę jako krzywą stożkową?
`,km=`---
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
`,qm=`---
options:
  - "Funkcja rośnie"
  - "Funkcja maleje"
  - "Funkcja jest stała"
  - "Funkcja ma minimum"
correct: 0
hint: "Gdy $f'(x) > 0$ na przedziale, funkcja jest rosnąca na tym przedziale."
---

Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:
`,Em=`---
options:
  - "$x = 1$ (minimum)"
  - "$x = 1$ (maksimum)"
  - "$x = -1$ (minimum)"
  - "$x = 0$ (minimum)"
correct: 0
hint: "$f'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f''(x) = 2 > 0$, więc to minimum."
---

Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:
`,Pm=`---
options:
  - "$3x^2 - 4$"
  - "$3x^2 + 4$"
  - "$x^2 - 4$"
  - "$3x^2$"
correct: 0
hint: "Reguła potęgi: $(x^n)' = n \\cdot x^{n-1}$. Ponadto $(x^3)' = 3x^2$ i $(-4x)' = -4$."
---

Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:
`,jm=`---
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
`,_3=`---
options:
  - "$\\frac{9}{2}$"
  - "$9$"
  - "$3$"
  - "$\\frac{3}{2}$"
correct: 0
hint: "$\\int_0^3 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{9}{2} - 0 = \\frac{9}{2}$."
---

Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$
`,k3=`---
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
`,q3=`---
options:
  - "$x > 3$"
  - "$x < 3$"
  - "$x > -3$"
  - "$x \\geq 3$"
correct: 0
hint: "Dodaj 1 do obu stron: $2x > 6$, dziel przez 2: $x > 3$."
---

Rozwiąż nierówność: $2x - 1 > 5$
`,E3=`---
options:
  - "$x \\geq -2$"
  - "$x \\leq -2$"
  - "$x \\geq 2$"
  - "$x \\leq 2$"
correct: 0
hint: "Przy dzieleniu przez liczbę ujemną odwracamy znak: $-3x \\leq 6 \\Rightarrow x \\geq -2$."
---

Rozwiąż nierówność: $-3x \\leq 6$
`,P3=`---
options:
  - "x=3, y=2"
  - "x=2, y=3"
  - "x=4, y=1"
  - "x=1, y=4"
correct: 0
hint: "Dodajesz równania: 2x = 6, x = 3."
---

Układ { x+y=5, x−y=1 } ma rozwiązanie:
`,j3=`---
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
`,_p=`---
options:
  - "Brak rozwiązań rzeczywistych"
  - "$x = 0$"
  - "$x = \\pm 2$"
  - "$x = 4$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. Ujemna delta oznacza brak rozwiązań w $\\mathbb{R}$."
---

Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?
`,kp=`---
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
`,qp=`---
options:
  - "$0$"
  - "$1$"
  - "$\\infty$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$, bo mianownik rośnie bez ograniczeń."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$
`,Ep=`---
options:
  - "$3$"
  - "$\\infty$"
  - "$0$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Podziel licznik i mianownik przez $n$: $\\frac{3n+1}{n} = 3 + \\frac{1}{n} \\to 3$."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$
`,Pp=`---
options:
  - "$14$"
  - "$13$"
  - "$15$"
  - "$12$"
correct: 0
hint: "$a_5 = 3 \\cdot 5 - 1 = 15 - 1 = 14$."
---

Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:
`,jp=`---
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
`;function qd(a){const n=a.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:a.trim()};const r=n[1],o=n[2].trim(),s={},u=r.split(/\r?\n/);let f=0;for(;f<u.length;){const p=u[f];if(p.startsWith("  ")){f++;continue}const v=p.match(/^(\w+):\s*(.*)/);if(!v){f++;continue}const w=v[1];let b=v[2].trim();if(b===""||b===null){const $=u[f+1]??"";if($.startsWith("  - ")){const M=[];for(f++;f<u.length&&u[f].startsWith("  - ");){let z=u[f].replace(/^  - /,"").trim();z=z.replace(/^["']|["']$/g,""),M.push(z),f++}s[w]=M.length>0?M:null}else if($.match(/^  \w+:/)){const M={};for(f++;f<u.length&&u[f].match(/^  \w+:/);){const z=u[f].match(/^  (\w+):\s*(.*)/);if(z){const P=z[1];let R=z[2].trim().replace(/^["']|["']$/g,"");M[P]=!isNaN(R)&&R!==""?Number(R):R}f++}s[w]=M}else s[w]=null,f++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?s[w]=Number(b):b==="true"?s[w]=!0:b==="false"?s[w]=!1:s[w]=b,f++}return{meta:s,body:o}}const p5=Object.assign({"./nodes/abs_value/node.md":Bf,"./nodes/analytic_geom/node.md":Nf,"./nodes/area_perimeter/node.md":Lf,"./nodes/arith_geom/node.md":Of,"./nodes/bernoulli/node.md":If,"./nodes/binom_theorem/node.md":Ff,"./nodes/circle_eq/node.md":Hf,"./nodes/combinations/node.md":Wf,"./nodes/complex/node.md":Uf,"./nodes/cond_prob/node.md":Vf,"./nodes/conic_sections/node.md":Gf,"./nodes/counting/node.md":Yf,"./nodes/data_basics/node.md":Xf,"./nodes/deriv_apps/node.md":Qf,"./nodes/derivative/node.md":Kf,"./nodes/distributions/node.md":Zf,"./nodes/factoring/node.md":Jf,"./nodes/fn_compositions/node.md":eh,"./nodes/fn_concept/node.md":th,"./nodes/fn_exp/node.md":nh,"./nodes/fn_linear/node.md":rh,"./nodes/fn_log/node.md":ih,"./nodes/fn_poly/node.md":ah,"./nodes/fn_quadratic/node.md":oh,"./nodes/fn_trig/node.md":lh,"./nodes/fractions/node.md":sh,"./nodes/geo_series/node.md":uh,"./nodes/integers/node.md":ch,"./nodes/integral/node.md":dh,"./nodes/limits/node.md":fh,"./nodes/linear_eq/node.md":hh,"./nodes/linear_ineq/node.md":mh,"./nodes/linear_sys/node.md":ph,"./nodes/log_eq/node.md":vh,"./nodes/log_exp/node.md":gh,"./nodes/logic_basics/node.md":yh,"./nodes/optimization_lp/node.md":xh,"./nodes/param_eq/node.md":wh,"./nodes/permutations/node.md":bh,"./nodes/planimetria_lp/node.md":$h,"./nodes/poly_roots/node.md":_h,"./nodes/polynomials/node.md":kh,"./nodes/powers/node.md":zh,"./nodes/probability/node.md":Sh,"./nodes/proof/node.md":Mh,"./nodes/pythagoras/node.md":Th,"./nodes/quadratic_eq/node.md":Ch,"./nodes/quadratic_ineq/node.md":Ah,"./nodes/rational_expr/node.md":qh,"./nodes/seq_limits/node.md":Eh,"./nodes/sequences/node.md":Ph,"./nodes/sets/node.md":jh,"./nodes/sin_cos_law/node.md":Rh,"./nodes/solid_geom/node.md":Dh,"./nodes/stat_lp/node.md":Bh,"./nodes/thales/node.md":Nh,"./nodes/trig_basic/node.md":Lh,"./nodes/trig_eq/node.md":Oh,"./nodes/trig_formulas/node.md":Ih,"./nodes/trig_lp/node.md":Fh,"./nodes/vectors/node.md":Hh,"./nodes/vieta/node.md":Wh}),ct=Object.entries(p5).map(([a,n])=>{var s;const r=(s=a.match(/\.\/nodes\/([^/]+)\/node\.md$/))==null?void 0:s[1],{meta:o}=qd(n);return{id:r,label:o.label??r,labelPl:o.labelPl??o.label??r,scope:o.scope??"unknown",section:o.section??"SP8",level:o.level??1,x:o.x??0,y:o.y??0}}),v5=Object.assign({"./nodes/abs_value/questions/01.md":Uh,"./nodes/abs_value/questions/02.md":Vh,"./nodes/abs_value/questions/03.md":Gh,"./nodes/analytic_geom/questions/01.md":Yh,"./nodes/analytic_geom/questions/02.md":Xh,"./nodes/analytic_geom/questions/03.md":Qh,"./nodes/area_perimeter/questions/01.md":Kh,"./nodes/area_perimeter/questions/02.md":Zh,"./nodes/area_perimeter/questions/03.md":Jh,"./nodes/arith_geom/questions/01.md":em,"./nodes/arith_geom/questions/02.md":tm,"./nodes/arith_geom/questions/03.md":nm,"./nodes/bernoulli/questions/01.md":rm,"./nodes/bernoulli/questions/02.md":im,"./nodes/bernoulli/questions/03.md":am,"./nodes/binom_theorem/questions/01.md":om,"./nodes/binom_theorem/questions/02.md":lm,"./nodes/binom_theorem/questions/03.md":sm,"./nodes/circle_eq/questions/01.md":um,"./nodes/circle_eq/questions/02.md":cm,"./nodes/circle_eq/questions/03.md":dm,"./nodes/combinations/questions/01.md":fm,"./nodes/combinations/questions/02.md":hm,"./nodes/combinations/questions/03.md":mm,"./nodes/complex/questions/01.md":pm,"./nodes/complex/questions/02.md":vm,"./nodes/complex/questions/03.md":gm,"./nodes/cond_prob/questions/01.md":ym,"./nodes/cond_prob/questions/02.md":xm,"./nodes/cond_prob/questions/03.md":wm,"./nodes/conic_sections/questions/01.md":bm,"./nodes/conic_sections/questions/02.md":$m,"./nodes/conic_sections/questions/03.md":_m,"./nodes/counting/questions/01.md":km,"./nodes/counting/questions/02.md":zm,"./nodes/counting/questions/03.md":Sm,"./nodes/data_basics/questions/01.md":Mm,"./nodes/data_basics/questions/02.md":Tm,"./nodes/data_basics/questions/03.md":Cm,"./nodes/deriv_apps/questions/01.md":Am,"./nodes/deriv_apps/questions/02.md":qm,"./nodes/deriv_apps/questions/03.md":Em,"./nodes/derivative/questions/01.md":Pm,"./nodes/derivative/questions/02.md":jm,"./nodes/derivative/questions/03.md":Rm,"./nodes/distributions/questions/01.md":Dm,"./nodes/distributions/questions/02.md":Bm,"./nodes/distributions/questions/03.md":Nm,"./nodes/factoring/questions/01.md":Lm,"./nodes/factoring/questions/02.md":Om,"./nodes/factoring/questions/03.md":Im,"./nodes/fn_compositions/questions/01.md":Fm,"./nodes/fn_compositions/questions/02.md":Hm,"./nodes/fn_compositions/questions/03.md":Wm,"./nodes/fn_concept/questions/01.md":Um,"./nodes/fn_concept/questions/02.md":Vm,"./nodes/fn_concept/questions/03.md":Gm,"./nodes/fn_exp/questions/01.md":Ym,"./nodes/fn_exp/questions/02.md":Xm,"./nodes/fn_exp/questions/03.md":Qm,"./nodes/fn_linear/questions/01.md":Km,"./nodes/fn_linear/questions/02.md":Zm,"./nodes/fn_linear/questions/03.md":Jm,"./nodes/fn_log/questions/01.md":e3,"./nodes/fn_log/questions/02.md":t3,"./nodes/fn_log/questions/03.md":n3,"./nodes/fn_poly/questions/01.md":r3,"./nodes/fn_poly/questions/02.md":i3,"./nodes/fn_poly/questions/03.md":a3,"./nodes/fn_quadratic/questions/01.md":o3,"./nodes/fn_quadratic/questions/02.md":l3,"./nodes/fn_quadratic/questions/03.md":s3,"./nodes/fn_trig/questions/01.md":u3,"./nodes/fn_trig/questions/02.md":c3,"./nodes/fn_trig/questions/03.md":d3,"./nodes/fractions/questions/01.md":f3,"./nodes/fractions/questions/02.md":h3,"./nodes/fractions/questions/03.md":m3,"./nodes/geo_series/questions/01.md":p3,"./nodes/geo_series/questions/02.md":v3,"./nodes/geo_series/questions/03.md":g3,"./nodes/integers/questions/01.md":y3,"./nodes/integers/questions/02.md":x3,"./nodes/integers/questions/03.md":w3,"./nodes/integral/questions/01.md":b3,"./nodes/integral/questions/02.md":$3,"./nodes/integral/questions/03.md":_3,"./nodes/limits/questions/01.md":k3,"./nodes/limits/questions/02.md":z3,"./nodes/limits/questions/03.md":S3,"./nodes/linear_eq/questions/01.md":M3,"./nodes/linear_eq/questions/02.md":T3,"./nodes/linear_eq/questions/03.md":C3,"./nodes/linear_ineq/questions/01.md":A3,"./nodes/linear_ineq/questions/02.md":q3,"./nodes/linear_ineq/questions/03.md":E3,"./nodes/linear_sys/questions/01.md":P3,"./nodes/linear_sys/questions/02.md":j3,"./nodes/linear_sys/questions/03.md":R3,"./nodes/log_eq/questions/01.md":D3,"./nodes/log_eq/questions/02.md":B3,"./nodes/log_eq/questions/03.md":N3,"./nodes/log_exp/questions/01.md":L3,"./nodes/log_exp/questions/02.md":O3,"./nodes/log_exp/questions/03.md":I3,"./nodes/logic_basics/questions/01.md":F3,"./nodes/logic_basics/questions/02.md":H3,"./nodes/logic_basics/questions/03.md":W3,"./nodes/optimization_lp/questions/01.md":U3,"./nodes/optimization_lp/questions/02.md":V3,"./nodes/optimization_lp/questions/03.md":G3,"./nodes/param_eq/questions/01.md":Y3,"./nodes/param_eq/questions/02.md":X3,"./nodes/param_eq/questions/03.md":Q3,"./nodes/permutations/questions/01.md":K3,"./nodes/permutations/questions/02.md":Z3,"./nodes/permutations/questions/03.md":J3,"./nodes/planimetria_lp/questions/01.md":ep,"./nodes/planimetria_lp/questions/02.md":tp,"./nodes/planimetria_lp/questions/03.md":np,"./nodes/poly_roots/questions/01.md":rp,"./nodes/poly_roots/questions/02.md":ip,"./nodes/poly_roots/questions/03.md":ap,"./nodes/polynomials/questions/01.md":op,"./nodes/polynomials/questions/02.md":lp,"./nodes/polynomials/questions/03.md":sp,"./nodes/powers/questions/01.md":up,"./nodes/powers/questions/02.md":cp,"./nodes/powers/questions/03.md":dp,"./nodes/probability/questions/01.md":fp,"./nodes/probability/questions/02.md":hp,"./nodes/probability/questions/03.md":mp,"./nodes/proof/questions/01.md":pp,"./nodes/proof/questions/02.md":vp,"./nodes/proof/questions/03.md":gp,"./nodes/pythagoras/questions/01.md":yp,"./nodes/pythagoras/questions/02.md":xp,"./nodes/pythagoras/questions/03.md":wp,"./nodes/quadratic_eq/questions/01.md":bp,"./nodes/quadratic_eq/questions/02.md":$p,"./nodes/quadratic_eq/questions/03.md":_p,"./nodes/quadratic_ineq/questions/01.md":kp,"./nodes/quadratic_ineq/questions/02.md":zp,"./nodes/quadratic_ineq/questions/03.md":Sp,"./nodes/rational_expr/questions/01.md":Mp,"./nodes/rational_expr/questions/02.md":Tp,"./nodes/rational_expr/questions/03.md":Cp,"./nodes/seq_limits/questions/01.md":Ap,"./nodes/seq_limits/questions/02.md":qp,"./nodes/seq_limits/questions/03.md":Ep,"./nodes/sequences/questions/01.md":Pp,"./nodes/sequences/questions/02.md":jp,"./nodes/sequences/questions/03.md":Rp,"./nodes/sets/questions/01.md":Dp,"./nodes/sets/questions/02.md":Bp,"./nodes/sets/questions/03.md":Np,"./nodes/sin_cos_law/questions/01.md":Lp,"./nodes/sin_cos_law/questions/02.md":Op,"./nodes/sin_cos_law/questions/03.md":Ip,"./nodes/solid_geom/questions/01.md":Fp,"./nodes/solid_geom/questions/02.md":Hp,"./nodes/solid_geom/questions/03.md":Wp,"./nodes/stat_lp/questions/01.md":Up,"./nodes/stat_lp/questions/02.md":Vp,"./nodes/stat_lp/questions/03.md":Gp,"./nodes/thales/questions/01.md":Yp,"./nodes/thales/questions/02.md":Xp,"./nodes/thales/questions/03.md":Qp,"./nodes/trig_basic/questions/01.md":Kp,"./nodes/trig_basic/questions/02.md":Zp,"./nodes/trig_basic/questions/03.md":Jp,"./nodes/trig_eq/questions/01.md":e5,"./nodes/trig_eq/questions/02.md":t5,"./nodes/trig_eq/questions/03.md":n5,"./nodes/trig_formulas/questions/01.md":r5,"./nodes/trig_formulas/questions/02.md":i5,"./nodes/trig_formulas/questions/03.md":a5,"./nodes/trig_lp/questions/01.md":o5,"./nodes/trig_lp/questions/02.md":l5,"./nodes/trig_lp/questions/03.md":s5,"./nodes/vectors/questions/01.md":u5,"./nodes/vectors/questions/02.md":c5,"./nodes/vectors/questions/03.md":d5,"./nodes/vieta/questions/01.md":f5,"./nodes/vieta/questions/02.md":h5,"./nodes/vieta/questions/03.md":m5}),g5=(()=>{var n;const a={};for(const[r,o]of Object.entries(v5)){const s=(n=r.match(/\.\/nodes\/([^/]+)\/questions\//))==null?void 0:n[1];if(!s)continue;const{meta:u,body:f}=qd(o);a[s]||(a[s]=[]),a[s].push({q:f,options:u.options??[],correct:u.correct??0,hint:u.hint??"",tests:u.tests&&typeof u.tests=="object"&&Object.keys(u.tests).length>0?u.tests:{[s]:1}})}return a})();function y5(a){const n=g5[a];return!n||n.length===0?null:n[Math.floor(Math.random()*n.length)]}const h0=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]];function x5(a,n){const r={},o={};return a.forEach(s=>{r[s.id]=[],o[s.id]=[]}),n.forEach(([s,u])=>{var f,p;(f=r[u])==null||f.push(s),(p=o[s])==null||p.push(u)}),{prereqs:r,dependents:o}}function Ss(a,n){const r=Object.fromEntries(a.map(f=>[f.id,0])),o=Object.fromEntries(a.map(f=>[f.id,[]]));for(const[f,p]of n)r[p]!==void 0&&r[p]++,o[f]!==void 0&&o[f].push(p);const s=Object.fromEntries(a.map(f=>[f.id,0])),u=a.filter(f=>r[f.id]===0).map(f=>f.id);for(;u.length;){const f=u.shift();for(const p of o[f])s[p]=Math.max(s[p],s[f]+1),--r[p]===0&&u.push(p)}return s}const w5={id:"spectral",label:"Spectral"};function b5(a,n,r,o,s=80){const u=a.length,f=Object.fromEntries(a.map((O,J)=>[O.id,J])),p=Array.from({length:u},()=>new Float64Array(u));n.forEach(([O,J])=>{const ne=f[O],we=f[J];ne==null||we==null||(p[ne][we]=1,p[we][ne]=1)});const v=p.map(O=>O.reduce((J,ne)=>J+ne,0)),w=O=>O.map((J,ne)=>{let we=0;for(let ze=0;ze<u;ze++)we+=p[ne][ze]*O[ze];return v[ne]*O[ne]-we}),b=(O,J)=>O.reduce((ne,we,ze)=>ne+we*J[ze],0),$=O=>{const J=Math.sqrt(b(O,O))||1;return O.map(ne=>ne/J)},M=(O,J)=>{let ne=[...O];return J.forEach(we=>{const ze=b(ne,we);ne=ne.map((Te,We)=>Te-ze*we[We])}),$(ne)},z=(O,J=400)=>{let ne=$(Array.from({length:u},()=>Math.random()-.5));ne=M(ne,O);for(let we=0;we<J;we++){const ze=Math.max(...v)+1;ne=M(ne.map((Te,We)=>ze*Te-w(ne)[We]),O)}return ne},P=$(new Array(u).fill(1)),R=z([P]),B=z([P,R]),H=Math.min(...R),X=Math.max(...R),F=Math.min(...B),L=Math.max(...B),V=X-H<1e-6?1:(r-2*s)/(X-H),ae=L-F<1e-6?1:(o-2*s)/(L-F);return a.map((O,J)=>({id:O.id,x:s+(R[J]-H)*V,y:s+(B[J]-F)*ae,vx:0,vy:0}))}const $5=Object.freeze(Object.defineProperty({__proto__:null,apply:b5,meta:w5},Symbol.toStringTag,{value:"Module"})),_5={id:"topoRank",label:"Topo Rank"},Ic=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function k5(a,n,r,o,s=80){const u=Ss(a,n),f=Math.max(...a.map(b=>u[b.id]??0),0),p={};for(const b of a){const $=u[b.id]??0;(p[$]??(p[$]=[])).push(b)}for(const b of Object.values(p))b.sort(($,M)=>{const z=Ic.indexOf($.scope),P=Ic.indexOf(M.scope);return(z===-1?999:z)-(P===-1?999:P)});const v=r-2*s,w=o-2*s;return a.map(b=>{const $=u[b.id]??0,M=p[$],z=M.indexOf(b);return{id:b.id,x:s+(z+.5)/M.length*v,y:s+$/Math.max(f,1)*w,vx:0,vy:0}})}const z5=Object.freeze(Object.defineProperty({__proto__:null,apply:k5,meta:_5},Symbol.toStringTag,{value:"Module"})),S5={id:"nPartite",label:"N-Partite Grid"};function M5(a,n,r,o,s=80){const u=Ss(a,n),f=Math.max(...a.map(z=>u[z.id]??0),0),p={};for(const z of a){const P=u[z.id]??0;(p[P]??(p[P]=[])).push(z)}const v={};for(const z of a)v[z.id]=[];for(const[z,P]of n)v[P]&&v[P].push(z);const w=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},$=r-2*s,M=o-2*s;for(let z=0;z<=f;z++){const P=p[z]??[];z===0?P.sort((B,H)=>{const X=w.indexOf(B.scope),F=w.indexOf(H.scope);return(X===-1?999:X)-(F===-1?999:F)}):P.sort((B,H)=>{const X=F=>{const L=v[F.id]??[];return L.length===0?r/2:L.reduce((V,ae)=>{var O;return V+(((O=b[ae])==null?void 0:O.x)??r/2)},0)/L.length};return X(B)-X(H)});const R=s+z/Math.max(f,1)*M;P.forEach((B,H)=>{const X=P.length===1?r/2:s+H/(P.length-1)*$;b[B.id]={x:X,y:R}})}return a.map(z=>{var P,R;return{id:z.id,x:((P=b[z.id])==null?void 0:P.x)??r/2,y:((R=b[z.id])==null?void 0:R.y)??o/2,vx:0,vy:0}})}const Ed=Object.freeze(Object.defineProperty({__proto__:null,apply:M5,meta:S5},Symbol.toStringTag,{value:"Module"})),Pd=[Ed,z5,$5],Ms="nPartite";function T5(a){return Pd.find(n=>n.meta.id===a)??Ed}const Oa=1400,Ts=1e3,di=80,Ia=Ss(ct,h0),C5=Math.max(...ct.map(a=>Ia[a.id]??0),0),jd=Object.fromEntries(ct.map(a=>[a.id,di+(Ia[a.id]??0)/Math.max(C5,1)*(Ts-2*di)])),A5=(()=>{const a=Object.fromEntries(ct.map((n,r)=>[n.id,r]));return h0.map(([n,r])=>[a[n],a[r]]).filter(([n,r])=>n!=null&&r!=null)})(),Fc=Math.sqrt(Oa*Ts/ct.length)*.9,q5=.4,Hc=6,E5=.35,Wc=.012;function P5(a=Ms){return T5(a).apply(ct,h0,Oa,Ts,di).map(o=>({id:o.id,x:o.x+(Math.random()-.5)*20,y:jd[o.id]??o.y,vx:0,vy:0}))}function j5(a,n,r,o){const s=a.length,u=new Float64Array(s);for(let f=0;f<s;f++)for(let p=f+1;p<s;p++){if(Ia[a[f].id]!==Ia[a[p].id])continue;const v=a[f].x-a[p].x,w=Math.abs(v)||.1,b=Fc*Fc/(w*w),$=v<0?-1:1;u[f]+=$*b,u[p]-=$*b}for(const[f,p]of A5){const v=a[p].x-a[f].x;u[f]+=v*Wc,u[p]-=v*Wc}for(let f=0;f<s;f++)u[f]+=(Oa/2-a[f].x)*.003;return a.map((f,p)=>{if(f.id===n)return{...f,x:r,y:o,vx:0,vy:0};let v=(f.vx+u[p])*q5;Math.abs(v)>Hc&&(v*=Hc/Math.abs(v));const w=jd[f.id]??f.y,b=f.y+(w-f.y)*E5;return{...f,vx:v,vy:0,x:Math.max(di,Math.min(Oa-di,f.x+v)),y:b}})}function Kl(a=Ms,n=300){let r=P5(a);for(let o=0;o<n;o++)r=j5(r,null,0,0);return Object.fromEntries(r.map(o=>[o.id,{x:o.x,y:o.y}]))}const Fa={surfaceHi:"#0d1520ee",border:"#1e2d45",textBody:"#c8d6e5",textDim:"#6b7d9a"},R5="'JetBrains Mono','SF Mono','Fira Code',monospace",oi=(a,n)=>({padding:"3px 10px",borderRadius:20,fontSize:10,cursor:"pointer",border:a?`1px solid ${n}`:`1px solid ${Fa.border}`,background:a?`${n}22`:"transparent",color:a?n:Fa.textDim}),Uc=a=>({position:"absolute",right:16,top:16,width:280,background:Fa.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${a}40`,borderRadius:8,padding:"14px 16px",fontSize:11,color:Fa.textBody,zIndex:20,maxHeight:"85vh",overflowY:"auto"}),li=a=>({padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",fontWeight:600,border:`1px solid ${a}`,background:`${a}22`,color:a});function D5(a){const[n,r]=le.useState({x:40,y:40,scale:.72}),[o,s]=le.useState("grab"),u=le.useRef(!1),f=le.useRef({x:0,y:0}),p=le.useRef(null),v=le.useRef(null),w=le.useCallback(F=>{F.preventDefault();const L=F.deltaY>0?.9:1.1;r(V=>{const ae=Math.max(.15,Math.min(5,V.scale*L)),O=F.clientX,J=F.clientY,ne=O-(O-V.x)/V.scale*ae,we=J-(J-V.y)/V.scale*ae;return{x:ne,y:we,scale:ae}})},[]),b=le.useCallback((F,L)=>({x:(F-n.x)/n.scale,y:(L-n.y)/n.scale}),[n]),$=le.useCallback((F,L)=>{u.current=!0,s("grabbing"),f.current={x:F-n.x,y:L-n.y}},[n]),M=le.useCallback(F=>u.current?(r(L=>({...L,x:F.clientX-f.current.x,y:F.clientY-f.current.y})),!0):!1,[]),z=le.useCallback(()=>{u.current=!1,s("grab")},[]),P=(F,L)=>{const V=F.clientX-L.clientX,ae=F.clientY-L.clientY;return Math.sqrt(V*V+ae*ae)},R=(F,L)=>({x:(F.clientX+L.clientX)/2,y:(F.clientY+L.clientY)/2}),B=le.useCallback(F=>{F.touches.length===1?(u.current=!0,r(L=>(f.current={x:F.touches[0].clientX-L.x,y:F.touches[0].clientY-L.y},L)),p.current=null,v.current=null):F.touches.length===2&&(u.current=!1,p.current=P(F.touches[0],F.touches[1]),v.current=R(F.touches[0],F.touches[1]))},[]),H=le.useCallback(F=>{if(F.preventDefault(),F.touches.length===1&&u.current)r(L=>({...L,x:F.touches[0].clientX-f.current.x,y:F.touches[0].clientY-f.current.y}));else if(F.touches.length===2&&p.current!==null){const L=P(F.touches[0],F.touches[1]),V=R(F.touches[0],F.touches[1]),ae=L/p.current;r(O=>{const J=Math.max(.15,Math.min(5,O.scale*ae)),ne=v.current.x,we=v.current.y,ze=ne-(ne-O.x)/O.scale*J,Te=we-(we-O.y)/O.scale*J;return{x:ze,y:Te,scale:J}}),p.current=L,v.current=V}},[]),X=le.useCallback(()=>{u.current=!1,p.current=null,v.current=null},[]);return le.useEffect(()=>{const F=a.current;if(F)return F.addEventListener("wheel",w,{passive:!1}),F.addEventListener("touchstart",B,{passive:!1}),F.addEventListener("touchmove",H,{passive:!1}),F.addEventListener("touchend",X,{passive:!1}),()=>{F.removeEventListener("wheel",w),F.removeEventListener("touchstart",B),F.removeEventListener("touchmove",H),F.removeEventListener("touchend",X)}},[a,w,B,H,X]),{viewTransform:n,setViewTransform:r,toCanvas:b,isPanning:u,panStart:f,startPan:$,cursorStyle:o,setCursorStyle:s,handleMouseMove:M,handleMouseUp:z,handleWheel:w}}function B5(a,n,r,o){const s=le.useRef(null),u=le.useRef({x:0,y:0}),f=le.useCallback((w,b,$)=>{const M=a(b,$),z=n.find(P=>P.id===w);z&&(s.current=w,u.current={x:M.x-z.x,y:M.y-z.y},o==null||o("grabbing"))},[a,n,o]),p=le.useCallback((w,b)=>{if(!s.current)return!1;const $=a(w,b),M=s.current;return r(z=>({...z,[M]:{x:$.x-u.current.x,y:$.y-u.current.y}})),!0},[a,r]),v=le.useCallback(()=>{s.current=null,o==null||o("grab")},[o]);return{draggingNode:s,startNodeDrag:f,handleDragMove:p,handleDragEnd:v}}function N5(a,n,r){var u;const o={...n},s=[a];for(;s.length;){const f=s.shift();o[f]!=="known"&&(o[f]="known",(u=r.prereqs[f])==null||u.forEach(p=>{o[p]!=="known"&&s.push(p)}))}return o}function Vc(a,n,r){var u;const o={...n},s=[a];for(;s.length;){const f=s.shift();o[f]!=="unknown"&&(o[f]="unknown",(u=r.dependents[f])==null||u.forEach(p=>{o[p]!=="unknown"&&s.push(p)}))}return o}function L5(a,n,r){return a.filter(o=>n[o.id]!=="known"&&n[o.id]!=="unknown").filter(o=>(r.prereqs[o.id]??[]).every(s=>n[s]==="known")).map(o=>o.id)}function O5(a,n,r,o=.5){var s,u,f;try{const p=1-o,v=a.filter($=>n[$.id]!=="known"&&n[$.id]!=="unknown");if(v.length===0)return null;const w=v.map($=>{const M=Rd($.id,n,r),z=Dd($.id,n,r),P=o*M+p*z;return{id:$.id,erv:P||0,ancestorsToReveal:M,descendantsToReveal:z}});return w.sort(($,M)=>M.erv-$.erv),((s=w[0])==null?void 0:s.id)||((u=v[0])==null?void 0:u.id)||null}catch(p){return console.error("pickNextQuestion error:",p),((f=a.filter(w=>n[w.id]!=="known"&&n[w.id]!=="unknown")[0])==null?void 0:f.id)||null}}function Rd(a,n,r){const o=new Set,s=[...r.prereqs[a]??[]];let u=0;for(;s.length>0;){const f=s.shift();if(o.has(f))continue;o.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const p=r.prereqs[f]??[];for(const v of p)o.has(v)||s.push(v)}return u}function Dd(a,n,r){const o=new Set,s=[...r.dependents[a]??[]];let u=0;for(;s.length>0;){const f=s.shift();if(o.has(f))continue;o.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const p=r.dependents[f]??[];for(const v of p)o.has(v)||s.push(v)}return u}function I5(a,n,r,o=.5){try{const s=a.filter(w=>n[w.id]!=="known"&&n[w.id]!=="unknown");if(s.length===0)return 0;const u=1-o;let f=0;for(const w of s){const b=Rd(w.id,n,r),$=Dd(w.id,n,r),M=o*b+u*$;f+=M||0}if(!f||f===0)return s.length;const p=s.length,v=p*p/f;return isNaN(v)?s.length:Math.ceil(v)}catch(s){return console.error("estimateRemainingQuestions error:",s),null}}function F5(a,n,r){const o={...a};for(const[s,u]of Object.entries(n)){const f=o[s]??{alpha:1,beta:1};o[s]={alpha:f.alpha+(r?u:0),beta:f.beta+(r?0:u)}}return o}function H5(a,n){const r={};for(const o of a){const s=n[o]??{alpha:1,beta:1},u=s.alpha+s.beta,f=s.alpha/u;f>.75&&u>2?r[o]="known":f<.25&&u>2?r[o]="unknown":r[o]="uncertain"}return r}function W5(a,n,r){const o=new Set,s=new Set(r.map(f=>f.id)),u=[a];for(;u.length;){const f=u.shift();if(!o.has(f)&&s.has(f)){o.add(f);for(const p of n.prereqs[f]??[])o.has(p)||u.push(p)}}return o}function U5(a,n,r,o,s){var p;const u=a.filter(v=>r[v]==="uncertain");if(u.length===0)return null;const f=u.map(v=>{const w=n[v]??{alpha:1,beta:1},b=w.alpha+w.beta,$=w.alpha/b,M=1-$,z=new Set(a);let P=0;const R=[...o.prereqs[v]??[]],B=new Set;for(;R.length;){const V=R.shift();if(!B.has(V)){B.add(V),z.has(V)&&r[V]==="uncertain"&&P++;for(const ae of o.prereqs[V]??[])B.has(ae)||R.push(ae)}}let H=0;const X=[...o.dependents[v]??[]],F=new Set;for(;X.length;){const V=X.shift();if(!F.has(V)){F.add(V),z.has(V)&&r[V]==="uncertain"&&H++;for(const ae of o.dependents[V]??[])F.has(ae)||X.push(ae)}}const L=$*P+M*H;return{id:v,erv:L,strength:b}});return f.sort((v,w)=>Math.abs(v.erv-w.erv)>.01?w.erv-v.erv:v.strength-w.strength),((p=f[0])==null?void 0:p.id)??u[0]}function V5(a,n){return a.every(r=>n[r]!=="uncertain")}function G5(a,n){return a.every(r=>n[r.id]==="known"||n[r.id]==="unknown")}function Y5(a){const[n,r]=le.useState(!1),[o,s]=le.useState("quick"),[u,f]=le.useState({}),[p,v]=le.useState(null),[w,b]=le.useState(null),[$,M]=le.useState({correct:0,incorrect:0,questionsAnswered:0}),[z,P]=le.useState({}),R=le.useMemo(()=>{const Se=$.correct+$.incorrect;return Se===0?.5:($.correct+.5)/(Se+1)},[$]),B=$.questionsAnswered,H=le.useMemo(()=>n&&o==="quick"?L5(ct,u,a):[],[n,o,u,a]),X=le.useMemo(()=>Object.keys(u).length>0||$.questionsAnswered>0,[u,$]),F=X?H:[],L=le.useMemo(()=>n&&o==="quick"?O5(ct,u,a,R):null,[n,o,u,a,R]),V=le.useMemo(()=>n&&o==="quick"?I5(ct,u,a,R):null,[n,o,u,a,R]),ae=le.useMemo(()=>n&&o==="quick"&&X&&G5(ct,u),[n,o,X,u]),O=le.useMemo(()=>!n||o!=="deepdive"||!w?[]:[...W5(w,a,ct)],[n,o,w,a]),J=le.useMemo(()=>o!=="deepdive"?{}:H5(O,z),[o,O,z]),ne=le.useMemo(()=>!n||o!=="deepdive"||O.length===0?null:U5(O,z,J,a),[n,o,O,z,J,a]),we=le.useMemo(()=>!n||o!=="deepdive"||O.length===0?!1:V5(O,J),[n,o,O,J]),ze=le.useCallback((Se,Re)=>n?o==="deepdive"?O.includes(Se)?(J[Se]!=="uncertain"||v(Se),!0):!1:u[Se]==="unknown"?!0:Re?(f(Ae=>Vc(Se,Ae,a)),v(null),!0):u[Se]==="known"?(f(Ae=>{const Z={...Ae};return delete Z[Se],Z}),v(null),!0):(v(Se),!0):!1,[n,o,u,a,O,J]),Te=le.useCallback((Se,Re,Ae)=>{if(o==="deepdive"){const Z=(Ae==null?void 0:Ae.tests)??{[Se]:1};P(pe=>F5(pe,Z,Re))}else f(Z=>Re?N5(Se,Z,a):Vc(Se,Z,a));M(Z=>({correct:Z.correct+(Re?1:0),incorrect:Z.incorrect+(Re?0:1),questionsAnswered:Z.questionsAnswered+1})),v(null)},[o,a]),We=le.useCallback(()=>{f({}),P({}),v(null),b(null),M({correct:0,incorrect:0,questionsAnswered:0})},[]),He=le.useCallback(Se=>{s("deepdive"),b(Se),P({}),f({}),v(null),M({correct:0,incorrect:0,questionsAnswered:0}),r(!0)},[]);return{diagMode:n,setDiagMode:r,mode:o,setMode:s,quizNode:p,setQuizNode:v,questionsAnswered:B,handleDiagClick:ze,handleQuizAnswer:Te,resetDiagnostic:We,startDeepDive:He,targetNode:w,belief:u,frontier:H,visibleFrontier:F,hasStarted:X,nextSuggestedId:L,expectedRemaining:V,pCorrect:R,sessionComplete:ae,betaBeliefs:z,subgraphIds:O,ddClassification:J,ddNextNodeId:ne,ddComplete:we}}function Gc(a){return 6+a.level*2}function X5({edges:a,nodes:n,highlightedIds:r}){const o=le.useMemo(()=>Object.fromEntries(n.map(s=>[s.id,s])),[n]);return T.jsx("g",{children:a.map(([s,u])=>{const f=o[s],p=o[u];if(!f||!p)return null;const v=(r==null?void 0:r.has(s))&&(r==null?void 0:r.has(u)),w=r&&!v,b=p.x-f.x,$=p.y-f.y,M=Math.sqrt(b*b+$*$)||1,z=Gc(p)+3,P=p.x-b/M*z,R=p.y-$/M*z,B=Gc(f)+2,H=f.x+b/M*B,X=f.y+$/M*B,F=w?"#0f1825":v?"#4a9eff":"#2a3f5a",L=v?1.8:1,V=w?.15:v?1:.55,ae=w?"url(#arrow-dim)":v?"url(#arrow-hi)":"url(#arrow-default)";return T.jsx("line",{x1:H,y1:X,x2:P,y2:R,stroke:F,strokeWidth:L,opacity:V,markerEnd:ae},`${s}-${u}`)})})}const Ya={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},x0={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},m0={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}};function Q5(a){return 6+a.level*2}function K5(a){return a<.4?8:a<.65?13:a<1?18:28}function Z5({nodes:a,filteredIds:n,highlightedIds:r,selected:o,onSelect:s,onHover:u,lang:f,diagMode:p,belief:v,frontier:w,scale:b}){return T.jsx("g",{children:a.map($=>{const M=Q5($),z=x0[$.scope]||"#aaa",P=n&&!n.has($.id),R=r==null?void 0:r.has($.id),B=o===$.id,H=r&&!R||P,X=f==="pl"?$.labelPl:$.label,F=K5(b??1);let L=z,V=H?.15:.9,ae=H?.2:.85,O=null,J=2;if(p){const ne=v[$.id],we=w.includes($.id);V=P?.1:.9,ae=P?.15:.9,ne==="known"?(L="#27ae60",O="#2ecc71"):ne==="unknown"?(L="#c0392b",V=P?.1:.5,O="#e74c3c"):we?(L="#f39c12",O="#f1c40f",J=3):(L=z,V=P?.1:.35)}return T.jsxs("g",{"data-node-id":$.id,style:{cursor:"pointer"},onClick:()=>s($.id===o?null:$.id),onMouseEnter:()=>u($.id),onMouseLeave:()=>u(null),children:[(B||p&&O)&&T.jsx("circle",{cx:$.x,cy:$.y,r:M+(B?5:4),fill:"none",stroke:B?z:O,strokeWidth:B?2:J,opacity:B?.5:.9}),T.jsx("circle",{cx:$.x,cy:$.y,r:M,fill:L,fillOpacity:V,stroke:!p&&(R||B)?z:"none",strokeWidth:1.5}),T.jsx("text",{x:$.x,y:$.y+M+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:ae,style:{pointerEvents:"none",userSelect:"none"},children:X.length>F?X.slice(0,F-1)+"…":X})]},$.id)})})}function J5({nodeId:a,nodes:n,adjacency:r,lang:o}){var $,M;const s=n.find(z=>z.id===a);if(!s)return null;const u=x0[s.scope]||"#aaa",f=o==="pl"?s.labelPl:s.label,p=r.prereqs[a]||[],v=r.dependents[a]||[],w=Object.fromEntries(n.map(z=>[z.id,z])),b=z=>{var P,R;return o==="pl"?(P=w[z])==null?void 0:P.labelPl:(R=w[z])==null?void 0:R.label};return T.jsxs("div",{style:{position:"absolute",right:16,top:70,width:240,background:"#0d1520",border:`1px solid ${u}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",lineHeight:1.6},children:[T.jsx("div",{style:{color:u,fontWeight:700,fontSize:13,marginBottom:6},children:f}),T.jsxs("div",{style:{color:"#6b7d9a",fontSize:10,marginBottom:8},children:[($=Ya[s.section])==null?void 0:$.label," · ",(M=m0[s.scope])==null?void 0:M[o==="pl"?"pl":"en"]," · Level ",s.level]}),p.length>0&&T.jsxs(T.Fragment,{children:[T.jsx("div",{style:{color:"#4a9eff",fontSize:10,marginBottom:4},children:"Prerequisites:"}),p.map(z=>T.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:10},children:["← ",b(z)]},z))]}),v.length>0&&T.jsxs("div",{style:{marginTop:8},children:[T.jsx("div",{style:{color:"#3dc9b0",fontSize:10,marginBottom:4},children:"Enables:"}),v.map(z=>T.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:10},children:["→ ",b(z)]},z))]})]})}class Ot{constructor(n,r,o){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=o}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Ot(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Vt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Vt(r,Ot.range(this,n))}}class ee{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var o="KaTeX parse error: "+n,s,u,f=r&&r.loc;if(f&&f.start<=f.end){var p=f.lexer.input;s=f.start,u=f.end,s===p.length?o+=" at end of input: ":o+=" at position "+(s+1)+": ";var v=p.slice(s,u).replace(/[^]/g,"$&̲"),w;s>15?w="…"+p.slice(s-15,s):w=p.slice(0,s);var b;u+15<p.length?b=p.slice(u,u+15)+"…":b=p.slice(u),o+=w+v+b}var $=new Error(o);return $.name="ParseError",$.__proto__=ee.prototype,$.position=s,s!=null&&u!=null&&($.length=u-s),$.rawMessage=n,$}}ee.prototype.__proto__=Error.prototype;var e6=/([A-Z])/g,Cs=a=>a.replace(e6,"-$1").toLowerCase(),t6={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},n6=/[&><"']/g,Mt=a=>String(a).replace(n6,n=>t6[n]),ui=a=>a.type==="ordgroup"||a.type==="color"?a.body.length===1?ui(a.body[0]):a:a.type==="font"?ui(a.body):a,r6=new Set(["mathord","textord","atom"]),Ln=a=>r6.has(ui(a).type),i6=a=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(a);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},Na={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:a=>"#"+a},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(a,n)=>(n.push(a),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:a=>Math.max(0,a),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:a=>Math.max(0,a),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:a=>Math.max(0,a),cli:"-e, --max-expand <n>",cliProcessor:a=>a==="Infinity"?1/0:parseInt(a)},globalGroup:{type:"boolean",cli:!1}};function a6(a){if(a.default)return a.default;var n=a.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class As{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in Na)if(Na.hasOwnProperty(r)){var o=Na[r];this[r]=n[r]!==void 0?o.processor?o.processor(n[r]):n[r]:a6(o)}}reportNonstrict(n,r,o){var s=this.strict;if(typeof s=="function"&&(s=s(n,r,o)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new ee("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),o);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,o){var s=this.strict;if(typeof s=="function")try{s=s(n,r,o)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=i6(n.url);if(r==null)return!1;n.protocol=r}var o=typeof this.trust=="function"?this.trust(n):this.trust;return!!o}}class fr{constructor(n,r,o){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=o}sup(){return yn[o6[this.id]]}sub(){return yn[l6[this.id]]}fracNum(){return yn[s6[this.id]]}fracDen(){return yn[u6[this.id]]}cramp(){return yn[c6[this.id]]}text(){return yn[d6[this.id]]}isTight(){return this.size>=2}}var qs=0,Ha=1,p0=2,Bn=3,fi=4,tn=5,v0=6,Et=7,yn=[new fr(qs,0,!1),new fr(Ha,0,!0),new fr(p0,1,!1),new fr(Bn,1,!0),new fr(fi,2,!1),new fr(tn,2,!0),new fr(v0,3,!1),new fr(Et,3,!0)],o6=[fi,tn,fi,tn,v0,Et,v0,Et],l6=[tn,tn,tn,tn,Et,Et,Et,Et],s6=[p0,Bn,fi,tn,v0,Et,v0,Et],u6=[Bn,Bn,tn,tn,Et,Et,Et,Et],c6=[Ha,Ha,Bn,Bn,tn,tn,Et,Et],d6=[qs,Ha,p0,Bn,p0,Bn,p0,Bn],ke={DISPLAY:yn[qs],TEXT:yn[p0],SCRIPT:yn[fi],SCRIPTSCRIPT:yn[v0]},ms=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function f6(a){for(var n=0;n<ms.length;n++)for(var r=ms[n],o=0;o<r.blocks.length;o++){var s=r.blocks[o];if(a>=s[0]&&a<=s[1])return r.name}return null}var La=[];ms.forEach(a=>a.blocks.forEach(n=>La.push(...n)));function Bd(a){for(var n=0;n<La.length;n+=2)if(a>=La[n]&&a<=La[n+1])return!0;return!1}var f0=80,h6=function(n,r){return"M95,"+(622+n+r)+`
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
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},w6=function(n,r,o){r=1e3*r;var s="";switch(n){case"sqrtMain":s=h6(r,f0);break;case"sqrtSize1":s=m6(r,f0);break;case"sqrtSize2":s=p6(r,f0);break;case"sqrtSize3":s=v6(r,f0);break;case"sqrtSize4":s=g6(r,f0);break;case"sqrtTall":s=x6(r,f0,o)}return s},b6=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},Yc={doubleleftarrow:`M262 157
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class mi{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var xn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ca={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Xc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function _6(a,n){xn[a]=n}function Es(a,n,r){if(!xn[n])throw new Error("Font metrics not found for font: "+n+".");var o=a.charCodeAt(0),s=xn[n][o];if(!s&&a[0]in Xc&&(o=Xc[a[0]].charCodeAt(0),s=xn[n][o]),!s&&r==="text"&&Bd(o)&&(s=xn[n][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var Zl={};function k6(a){var n;if(a>=5?n=0:a>=3?n=1:n=2,!Zl[n]){var r=Zl[n]={cssEmPerMu:Ca.quad[n]/18};for(var o in Ca)Ca.hasOwnProperty(o)&&(r[o]=Ca[o][n])}return Zl[n]}var z6=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Qc=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Kc=function(n,r){return r.size<2?n:z6[n-1][r.size-1]};class Dn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Dn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Qc[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return new Dn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:Kc(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Qc[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=Kc(Dn.BASESIZE,n);return this.size===r&&this.textSize===Dn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Dn.BASESIZE?["sizing","reset-size"+this.size,"size"+Dn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=k6(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Dn.BASESIZE=6;var ps={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},S6={ex:!0,em:!0,mu:!0},Nd=function(n){return typeof n!="string"&&(n=n.unit),n in ps||n in S6||n==="ex"},nt=function(n,r){var o;if(n.unit in ps)o=ps[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")o=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,n.unit==="ex")o=s.fontMetrics().xHeight;else if(n.unit==="em")o=s.fontMetrics().quad;else throw new ee("Invalid unit: '"+n.unit+"'");s!==r&&(o*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*o,r.maxSize)},ie=function(n){return+n.toFixed(4)+"em"},pr=function(n){return n.filter(r=>r).join(" ")},Ld=function(n,r,o){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=o||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},Od=function(n){var r=document.createElement(n);r.className=pr(this.classes);for(var o in this.style)this.style.hasOwnProperty(o)&&(r.style[o]=this.style[o]);for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&r.setAttribute(s,this.attributes[s]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},M6=/[\s"'>/=\x00-\x1f]/,Id=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+Mt(pr(this.classes))+'"');var o="";for(var s in this.style)this.style.hasOwnProperty(s)&&(o+=Cs(s)+":"+this.style[s]+";");o&&(r+=' style="'+Mt(o)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(M6.test(u))throw new ee("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Mt(this.attributes[u])+'"'}r+=">";for(var f=0;f<this.children.length;f++)r+=this.children[f].toMarkup();return r+="</"+n+">",r};class pi{constructor(n,r,o,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Ld.call(this,n,o,s),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Od.call(this,"span")}toMarkup(){return Id.call(this,"span")}}class Ps{constructor(n,r,o,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Ld.call(this,r,s),this.children=o||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Od.call(this,"a")}toMarkup(){return Id.call(this,"a")}}class T6{constructor(n,r,o){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=o}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+Mt(this.src)+'"'+(' alt="'+Mt(this.alt)+'"'),r="";for(var o in this.style)this.style.hasOwnProperty(o)&&(r+=Cs(o)+":"+this.style[o]+";");return r&&(n+=' style="'+Mt(r)+'"'),n+="'/>",n}}var C6={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class nn{constructor(n,r,o,s,u,f,p,v){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=o||0,this.italic=s||0,this.skew=u||0,this.width=f||0,this.classes=p||[],this.style=v||{},this.maxFontSize=0;var w=f6(this.text.charCodeAt(0));w&&this.classes.push(w+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=C6[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=ie(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=pr(this.classes));for(var o in this.style)this.style.hasOwnProperty(o)&&(r=r||document.createElement("span"),r.style[o]=this.style[o]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=Mt(pr(this.classes)),r+='"');var o="";this.italic>0&&(o+="margin-right:"+this.italic+"em;");for(var s in this.style)this.style.hasOwnProperty(s)&&(o+=Cs(s)+":"+this.style[s]+";");o&&(n=!0,r+=' style="'+Mt(o)+'"');var u=Mt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Nn{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var o in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,o)&&r.setAttribute(o,this.attributes[o]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');n+=">";for(var o=0;o<this.children.length;o++)n+=this.children[o].toMarkup();return n+="</svg>",n}}class vr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Yc[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Mt(this.alternate)+'"/>':'<path d="'+Mt(Yc[this.pathName])+'"/>'}}class vs{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var o in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,o)&&r.setAttribute(o,this.attributes[o]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');return n+="/>",n}}function Zc(a){if(a instanceof nn)return a;throw new Error("Expected symbolNode but got "+String(a)+".")}function A6(a){if(a instanceof pi)return a;throw new Error("Expected span<HtmlDomNode> but got "+String(a)+".")}var q6={bin:1,close:1,inner:1,open:1,punct:1,rel:1},E6={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ye={math:{},text:{}};function d(a,n,r,o,s,u){Ye[a][s]={font:n,group:r,replace:o},u&&o&&(Ye[a][o]=Ye[a][s])}var m="math",U="text",g="main",k="ams",Ze="accent-token",ce="bin",Pt="close",w0="inner",xe="mathord",ft="op-token",Gt="open",Xa="punct",S="rel",On="spacing",A="textord";d(m,g,S,"≡","\\equiv",!0);d(m,g,S,"≺","\\prec",!0);d(m,g,S,"≻","\\succ",!0);d(m,g,S,"∼","\\sim",!0);d(m,g,S,"⊥","\\perp");d(m,g,S,"⪯","\\preceq",!0);d(m,g,S,"⪰","\\succeq",!0);d(m,g,S,"≃","\\simeq",!0);d(m,g,S,"∣","\\mid",!0);d(m,g,S,"≪","\\ll",!0);d(m,g,S,"≫","\\gg",!0);d(m,g,S,"≍","\\asymp",!0);d(m,g,S,"∥","\\parallel");d(m,g,S,"⋈","\\bowtie",!0);d(m,g,S,"⌣","\\smile",!0);d(m,g,S,"⊑","\\sqsubseteq",!0);d(m,g,S,"⊒","\\sqsupseteq",!0);d(m,g,S,"≐","\\doteq",!0);d(m,g,S,"⌢","\\frown",!0);d(m,g,S,"∋","\\ni",!0);d(m,g,S,"∝","\\propto",!0);d(m,g,S,"⊢","\\vdash",!0);d(m,g,S,"⊣","\\dashv",!0);d(m,g,S,"∋","\\owns");d(m,g,Xa,".","\\ldotp");d(m,g,Xa,"⋅","\\cdotp");d(m,g,A,"#","\\#");d(U,g,A,"#","\\#");d(m,g,A,"&","\\&");d(U,g,A,"&","\\&");d(m,g,A,"ℵ","\\aleph",!0);d(m,g,A,"∀","\\forall",!0);d(m,g,A,"ℏ","\\hbar",!0);d(m,g,A,"∃","\\exists",!0);d(m,g,A,"∇","\\nabla",!0);d(m,g,A,"♭","\\flat",!0);d(m,g,A,"ℓ","\\ell",!0);d(m,g,A,"♮","\\natural",!0);d(m,g,A,"♣","\\clubsuit",!0);d(m,g,A,"℘","\\wp",!0);d(m,g,A,"♯","\\sharp",!0);d(m,g,A,"♢","\\diamondsuit",!0);d(m,g,A,"ℜ","\\Re",!0);d(m,g,A,"♡","\\heartsuit",!0);d(m,g,A,"ℑ","\\Im",!0);d(m,g,A,"♠","\\spadesuit",!0);d(m,g,A,"§","\\S",!0);d(U,g,A,"§","\\S");d(m,g,A,"¶","\\P",!0);d(U,g,A,"¶","\\P");d(m,g,A,"†","\\dag");d(U,g,A,"†","\\dag");d(U,g,A,"†","\\textdagger");d(m,g,A,"‡","\\ddag");d(U,g,A,"‡","\\ddag");d(U,g,A,"‡","\\textdaggerdbl");d(m,g,Pt,"⎱","\\rmoustache",!0);d(m,g,Gt,"⎰","\\lmoustache",!0);d(m,g,Pt,"⟯","\\rgroup",!0);d(m,g,Gt,"⟮","\\lgroup",!0);d(m,g,ce,"∓","\\mp",!0);d(m,g,ce,"⊖","\\ominus",!0);d(m,g,ce,"⊎","\\uplus",!0);d(m,g,ce,"⊓","\\sqcap",!0);d(m,g,ce,"∗","\\ast");d(m,g,ce,"⊔","\\sqcup",!0);d(m,g,ce,"◯","\\bigcirc",!0);d(m,g,ce,"∙","\\bullet",!0);d(m,g,ce,"‡","\\ddagger");d(m,g,ce,"≀","\\wr",!0);d(m,g,ce,"⨿","\\amalg");d(m,g,ce,"&","\\And");d(m,g,S,"⟵","\\longleftarrow",!0);d(m,g,S,"⇐","\\Leftarrow",!0);d(m,g,S,"⟸","\\Longleftarrow",!0);d(m,g,S,"⟶","\\longrightarrow",!0);d(m,g,S,"⇒","\\Rightarrow",!0);d(m,g,S,"⟹","\\Longrightarrow",!0);d(m,g,S,"↔","\\leftrightarrow",!0);d(m,g,S,"⟷","\\longleftrightarrow",!0);d(m,g,S,"⇔","\\Leftrightarrow",!0);d(m,g,S,"⟺","\\Longleftrightarrow",!0);d(m,g,S,"↦","\\mapsto",!0);d(m,g,S,"⟼","\\longmapsto",!0);d(m,g,S,"↗","\\nearrow",!0);d(m,g,S,"↩","\\hookleftarrow",!0);d(m,g,S,"↪","\\hookrightarrow",!0);d(m,g,S,"↘","\\searrow",!0);d(m,g,S,"↼","\\leftharpoonup",!0);d(m,g,S,"⇀","\\rightharpoonup",!0);d(m,g,S,"↙","\\swarrow",!0);d(m,g,S,"↽","\\leftharpoondown",!0);d(m,g,S,"⇁","\\rightharpoondown",!0);d(m,g,S,"↖","\\nwarrow",!0);d(m,g,S,"⇌","\\rightleftharpoons",!0);d(m,k,S,"≮","\\nless",!0);d(m,k,S,"","\\@nleqslant");d(m,k,S,"","\\@nleqq");d(m,k,S,"⪇","\\lneq",!0);d(m,k,S,"≨","\\lneqq",!0);d(m,k,S,"","\\@lvertneqq");d(m,k,S,"⋦","\\lnsim",!0);d(m,k,S,"⪉","\\lnapprox",!0);d(m,k,S,"⊀","\\nprec",!0);d(m,k,S,"⋠","\\npreceq",!0);d(m,k,S,"⋨","\\precnsim",!0);d(m,k,S,"⪹","\\precnapprox",!0);d(m,k,S,"≁","\\nsim",!0);d(m,k,S,"","\\@nshortmid");d(m,k,S,"∤","\\nmid",!0);d(m,k,S,"⊬","\\nvdash",!0);d(m,k,S,"⊭","\\nvDash",!0);d(m,k,S,"⋪","\\ntriangleleft");d(m,k,S,"⋬","\\ntrianglelefteq",!0);d(m,k,S,"⊊","\\subsetneq",!0);d(m,k,S,"","\\@varsubsetneq");d(m,k,S,"⫋","\\subsetneqq",!0);d(m,k,S,"","\\@varsubsetneqq");d(m,k,S,"≯","\\ngtr",!0);d(m,k,S,"","\\@ngeqslant");d(m,k,S,"","\\@ngeqq");d(m,k,S,"⪈","\\gneq",!0);d(m,k,S,"≩","\\gneqq",!0);d(m,k,S,"","\\@gvertneqq");d(m,k,S,"⋧","\\gnsim",!0);d(m,k,S,"⪊","\\gnapprox",!0);d(m,k,S,"⊁","\\nsucc",!0);d(m,k,S,"⋡","\\nsucceq",!0);d(m,k,S,"⋩","\\succnsim",!0);d(m,k,S,"⪺","\\succnapprox",!0);d(m,k,S,"≆","\\ncong",!0);d(m,k,S,"","\\@nshortparallel");d(m,k,S,"∦","\\nparallel",!0);d(m,k,S,"⊯","\\nVDash",!0);d(m,k,S,"⋫","\\ntriangleright");d(m,k,S,"⋭","\\ntrianglerighteq",!0);d(m,k,S,"","\\@nsupseteqq");d(m,k,S,"⊋","\\supsetneq",!0);d(m,k,S,"","\\@varsupsetneq");d(m,k,S,"⫌","\\supsetneqq",!0);d(m,k,S,"","\\@varsupsetneqq");d(m,k,S,"⊮","\\nVdash",!0);d(m,k,S,"⪵","\\precneqq",!0);d(m,k,S,"⪶","\\succneqq",!0);d(m,k,S,"","\\@nsubseteqq");d(m,k,ce,"⊴","\\unlhd");d(m,k,ce,"⊵","\\unrhd");d(m,k,S,"↚","\\nleftarrow",!0);d(m,k,S,"↛","\\nrightarrow",!0);d(m,k,S,"⇍","\\nLeftarrow",!0);d(m,k,S,"⇏","\\nRightarrow",!0);d(m,k,S,"↮","\\nleftrightarrow",!0);d(m,k,S,"⇎","\\nLeftrightarrow",!0);d(m,k,S,"△","\\vartriangle");d(m,k,A,"ℏ","\\hslash");d(m,k,A,"▽","\\triangledown");d(m,k,A,"◊","\\lozenge");d(m,k,A,"Ⓢ","\\circledS");d(m,k,A,"®","\\circledR");d(U,k,A,"®","\\circledR");d(m,k,A,"∡","\\measuredangle",!0);d(m,k,A,"∄","\\nexists");d(m,k,A,"℧","\\mho");d(m,k,A,"Ⅎ","\\Finv",!0);d(m,k,A,"⅁","\\Game",!0);d(m,k,A,"‵","\\backprime");d(m,k,A,"▲","\\blacktriangle");d(m,k,A,"▼","\\blacktriangledown");d(m,k,A,"■","\\blacksquare");d(m,k,A,"⧫","\\blacklozenge");d(m,k,A,"★","\\bigstar");d(m,k,A,"∢","\\sphericalangle",!0);d(m,k,A,"∁","\\complement",!0);d(m,k,A,"ð","\\eth",!0);d(U,g,A,"ð","ð");d(m,k,A,"╱","\\diagup");d(m,k,A,"╲","\\diagdown");d(m,k,A,"□","\\square");d(m,k,A,"□","\\Box");d(m,k,A,"◊","\\Diamond");d(m,k,A,"¥","\\yen",!0);d(U,k,A,"¥","\\yen",!0);d(m,k,A,"✓","\\checkmark",!0);d(U,k,A,"✓","\\checkmark");d(m,k,A,"ℶ","\\beth",!0);d(m,k,A,"ℸ","\\daleth",!0);d(m,k,A,"ℷ","\\gimel",!0);d(m,k,A,"ϝ","\\digamma",!0);d(m,k,A,"ϰ","\\varkappa");d(m,k,Gt,"┌","\\@ulcorner",!0);d(m,k,Pt,"┐","\\@urcorner",!0);d(m,k,Gt,"└","\\@llcorner",!0);d(m,k,Pt,"┘","\\@lrcorner",!0);d(m,k,S,"≦","\\leqq",!0);d(m,k,S,"⩽","\\leqslant",!0);d(m,k,S,"⪕","\\eqslantless",!0);d(m,k,S,"≲","\\lesssim",!0);d(m,k,S,"⪅","\\lessapprox",!0);d(m,k,S,"≊","\\approxeq",!0);d(m,k,ce,"⋖","\\lessdot");d(m,k,S,"⋘","\\lll",!0);d(m,k,S,"≶","\\lessgtr",!0);d(m,k,S,"⋚","\\lesseqgtr",!0);d(m,k,S,"⪋","\\lesseqqgtr",!0);d(m,k,S,"≑","\\doteqdot");d(m,k,S,"≓","\\risingdotseq",!0);d(m,k,S,"≒","\\fallingdotseq",!0);d(m,k,S,"∽","\\backsim",!0);d(m,k,S,"⋍","\\backsimeq",!0);d(m,k,S,"⫅","\\subseteqq",!0);d(m,k,S,"⋐","\\Subset",!0);d(m,k,S,"⊏","\\sqsubset",!0);d(m,k,S,"≼","\\preccurlyeq",!0);d(m,k,S,"⋞","\\curlyeqprec",!0);d(m,k,S,"≾","\\precsim",!0);d(m,k,S,"⪷","\\precapprox",!0);d(m,k,S,"⊲","\\vartriangleleft");d(m,k,S,"⊴","\\trianglelefteq");d(m,k,S,"⊨","\\vDash",!0);d(m,k,S,"⊪","\\Vvdash",!0);d(m,k,S,"⌣","\\smallsmile");d(m,k,S,"⌢","\\smallfrown");d(m,k,S,"≏","\\bumpeq",!0);d(m,k,S,"≎","\\Bumpeq",!0);d(m,k,S,"≧","\\geqq",!0);d(m,k,S,"⩾","\\geqslant",!0);d(m,k,S,"⪖","\\eqslantgtr",!0);d(m,k,S,"≳","\\gtrsim",!0);d(m,k,S,"⪆","\\gtrapprox",!0);d(m,k,ce,"⋗","\\gtrdot");d(m,k,S,"⋙","\\ggg",!0);d(m,k,S,"≷","\\gtrless",!0);d(m,k,S,"⋛","\\gtreqless",!0);d(m,k,S,"⪌","\\gtreqqless",!0);d(m,k,S,"≖","\\eqcirc",!0);d(m,k,S,"≗","\\circeq",!0);d(m,k,S,"≜","\\triangleq",!0);d(m,k,S,"∼","\\thicksim");d(m,k,S,"≈","\\thickapprox");d(m,k,S,"⫆","\\supseteqq",!0);d(m,k,S,"⋑","\\Supset",!0);d(m,k,S,"⊐","\\sqsupset",!0);d(m,k,S,"≽","\\succcurlyeq",!0);d(m,k,S,"⋟","\\curlyeqsucc",!0);d(m,k,S,"≿","\\succsim",!0);d(m,k,S,"⪸","\\succapprox",!0);d(m,k,S,"⊳","\\vartriangleright");d(m,k,S,"⊵","\\trianglerighteq");d(m,k,S,"⊩","\\Vdash",!0);d(m,k,S,"∣","\\shortmid");d(m,k,S,"∥","\\shortparallel");d(m,k,S,"≬","\\between",!0);d(m,k,S,"⋔","\\pitchfork",!0);d(m,k,S,"∝","\\varpropto");d(m,k,S,"◀","\\blacktriangleleft");d(m,k,S,"∴","\\therefore",!0);d(m,k,S,"∍","\\backepsilon");d(m,k,S,"▶","\\blacktriangleright");d(m,k,S,"∵","\\because",!0);d(m,k,S,"⋘","\\llless");d(m,k,S,"⋙","\\gggtr");d(m,k,ce,"⊲","\\lhd");d(m,k,ce,"⊳","\\rhd");d(m,k,S,"≂","\\eqsim",!0);d(m,g,S,"⋈","\\Join");d(m,k,S,"≑","\\Doteq",!0);d(m,k,ce,"∔","\\dotplus",!0);d(m,k,ce,"∖","\\smallsetminus");d(m,k,ce,"⋒","\\Cap",!0);d(m,k,ce,"⋓","\\Cup",!0);d(m,k,ce,"⩞","\\doublebarwedge",!0);d(m,k,ce,"⊟","\\boxminus",!0);d(m,k,ce,"⊞","\\boxplus",!0);d(m,k,ce,"⋇","\\divideontimes",!0);d(m,k,ce,"⋉","\\ltimes",!0);d(m,k,ce,"⋊","\\rtimes",!0);d(m,k,ce,"⋋","\\leftthreetimes",!0);d(m,k,ce,"⋌","\\rightthreetimes",!0);d(m,k,ce,"⋏","\\curlywedge",!0);d(m,k,ce,"⋎","\\curlyvee",!0);d(m,k,ce,"⊝","\\circleddash",!0);d(m,k,ce,"⊛","\\circledast",!0);d(m,k,ce,"⋅","\\centerdot");d(m,k,ce,"⊺","\\intercal",!0);d(m,k,ce,"⋒","\\doublecap");d(m,k,ce,"⋓","\\doublecup");d(m,k,ce,"⊠","\\boxtimes",!0);d(m,k,S,"⇢","\\dashrightarrow",!0);d(m,k,S,"⇠","\\dashleftarrow",!0);d(m,k,S,"⇇","\\leftleftarrows",!0);d(m,k,S,"⇆","\\leftrightarrows",!0);d(m,k,S,"⇚","\\Lleftarrow",!0);d(m,k,S,"↞","\\twoheadleftarrow",!0);d(m,k,S,"↢","\\leftarrowtail",!0);d(m,k,S,"↫","\\looparrowleft",!0);d(m,k,S,"⇋","\\leftrightharpoons",!0);d(m,k,S,"↶","\\curvearrowleft",!0);d(m,k,S,"↺","\\circlearrowleft",!0);d(m,k,S,"↰","\\Lsh",!0);d(m,k,S,"⇈","\\upuparrows",!0);d(m,k,S,"↿","\\upharpoonleft",!0);d(m,k,S,"⇃","\\downharpoonleft",!0);d(m,g,S,"⊶","\\origof",!0);d(m,g,S,"⊷","\\imageof",!0);d(m,k,S,"⊸","\\multimap",!0);d(m,k,S,"↭","\\leftrightsquigarrow",!0);d(m,k,S,"⇉","\\rightrightarrows",!0);d(m,k,S,"⇄","\\rightleftarrows",!0);d(m,k,S,"↠","\\twoheadrightarrow",!0);d(m,k,S,"↣","\\rightarrowtail",!0);d(m,k,S,"↬","\\looparrowright",!0);d(m,k,S,"↷","\\curvearrowright",!0);d(m,k,S,"↻","\\circlearrowright",!0);d(m,k,S,"↱","\\Rsh",!0);d(m,k,S,"⇊","\\downdownarrows",!0);d(m,k,S,"↾","\\upharpoonright",!0);d(m,k,S,"⇂","\\downharpoonright",!0);d(m,k,S,"⇝","\\rightsquigarrow",!0);d(m,k,S,"⇝","\\leadsto");d(m,k,S,"⇛","\\Rrightarrow",!0);d(m,k,S,"↾","\\restriction");d(m,g,A,"‘","`");d(m,g,A,"$","\\$");d(U,g,A,"$","\\$");d(U,g,A,"$","\\textdollar");d(m,g,A,"%","\\%");d(U,g,A,"%","\\%");d(m,g,A,"_","\\_");d(U,g,A,"_","\\_");d(U,g,A,"_","\\textunderscore");d(m,g,A,"∠","\\angle",!0);d(m,g,A,"∞","\\infty",!0);d(m,g,A,"′","\\prime");d(m,g,A,"△","\\triangle");d(m,g,A,"Γ","\\Gamma",!0);d(m,g,A,"Δ","\\Delta",!0);d(m,g,A,"Θ","\\Theta",!0);d(m,g,A,"Λ","\\Lambda",!0);d(m,g,A,"Ξ","\\Xi",!0);d(m,g,A,"Π","\\Pi",!0);d(m,g,A,"Σ","\\Sigma",!0);d(m,g,A,"Υ","\\Upsilon",!0);d(m,g,A,"Φ","\\Phi",!0);d(m,g,A,"Ψ","\\Psi",!0);d(m,g,A,"Ω","\\Omega",!0);d(m,g,A,"A","Α");d(m,g,A,"B","Β");d(m,g,A,"E","Ε");d(m,g,A,"Z","Ζ");d(m,g,A,"H","Η");d(m,g,A,"I","Ι");d(m,g,A,"K","Κ");d(m,g,A,"M","Μ");d(m,g,A,"N","Ν");d(m,g,A,"O","Ο");d(m,g,A,"P","Ρ");d(m,g,A,"T","Τ");d(m,g,A,"X","Χ");d(m,g,A,"¬","\\neg",!0);d(m,g,A,"¬","\\lnot");d(m,g,A,"⊤","\\top");d(m,g,A,"⊥","\\bot");d(m,g,A,"∅","\\emptyset");d(m,k,A,"∅","\\varnothing");d(m,g,xe,"α","\\alpha",!0);d(m,g,xe,"β","\\beta",!0);d(m,g,xe,"γ","\\gamma",!0);d(m,g,xe,"δ","\\delta",!0);d(m,g,xe,"ϵ","\\epsilon",!0);d(m,g,xe,"ζ","\\zeta",!0);d(m,g,xe,"η","\\eta",!0);d(m,g,xe,"θ","\\theta",!0);d(m,g,xe,"ι","\\iota",!0);d(m,g,xe,"κ","\\kappa",!0);d(m,g,xe,"λ","\\lambda",!0);d(m,g,xe,"μ","\\mu",!0);d(m,g,xe,"ν","\\nu",!0);d(m,g,xe,"ξ","\\xi",!0);d(m,g,xe,"ο","\\omicron",!0);d(m,g,xe,"π","\\pi",!0);d(m,g,xe,"ρ","\\rho",!0);d(m,g,xe,"σ","\\sigma",!0);d(m,g,xe,"τ","\\tau",!0);d(m,g,xe,"υ","\\upsilon",!0);d(m,g,xe,"ϕ","\\phi",!0);d(m,g,xe,"χ","\\chi",!0);d(m,g,xe,"ψ","\\psi",!0);d(m,g,xe,"ω","\\omega",!0);d(m,g,xe,"ε","\\varepsilon",!0);d(m,g,xe,"ϑ","\\vartheta",!0);d(m,g,xe,"ϖ","\\varpi",!0);d(m,g,xe,"ϱ","\\varrho",!0);d(m,g,xe,"ς","\\varsigma",!0);d(m,g,xe,"φ","\\varphi",!0);d(m,g,ce,"∗","*",!0);d(m,g,ce,"+","+");d(m,g,ce,"−","-",!0);d(m,g,ce,"⋅","\\cdot",!0);d(m,g,ce,"∘","\\circ",!0);d(m,g,ce,"÷","\\div",!0);d(m,g,ce,"±","\\pm",!0);d(m,g,ce,"×","\\times",!0);d(m,g,ce,"∩","\\cap",!0);d(m,g,ce,"∪","\\cup",!0);d(m,g,ce,"∖","\\setminus",!0);d(m,g,ce,"∧","\\land");d(m,g,ce,"∨","\\lor");d(m,g,ce,"∧","\\wedge",!0);d(m,g,ce,"∨","\\vee",!0);d(m,g,A,"√","\\surd");d(m,g,Gt,"⟨","\\langle",!0);d(m,g,Gt,"∣","\\lvert");d(m,g,Gt,"∥","\\lVert");d(m,g,Pt,"?","?");d(m,g,Pt,"!","!");d(m,g,Pt,"⟩","\\rangle",!0);d(m,g,Pt,"∣","\\rvert");d(m,g,Pt,"∥","\\rVert");d(m,g,S,"=","=");d(m,g,S,":",":");d(m,g,S,"≈","\\approx",!0);d(m,g,S,"≅","\\cong",!0);d(m,g,S,"≥","\\ge");d(m,g,S,"≥","\\geq",!0);d(m,g,S,"←","\\gets");d(m,g,S,">","\\gt",!0);d(m,g,S,"∈","\\in",!0);d(m,g,S,"","\\@not");d(m,g,S,"⊂","\\subset",!0);d(m,g,S,"⊃","\\supset",!0);d(m,g,S,"⊆","\\subseteq",!0);d(m,g,S,"⊇","\\supseteq",!0);d(m,k,S,"⊈","\\nsubseteq",!0);d(m,k,S,"⊉","\\nsupseteq",!0);d(m,g,S,"⊨","\\models");d(m,g,S,"←","\\leftarrow",!0);d(m,g,S,"≤","\\le");d(m,g,S,"≤","\\leq",!0);d(m,g,S,"<","\\lt",!0);d(m,g,S,"→","\\rightarrow",!0);d(m,g,S,"→","\\to");d(m,k,S,"≱","\\ngeq",!0);d(m,k,S,"≰","\\nleq",!0);d(m,g,On," ","\\ ");d(m,g,On," ","\\space");d(m,g,On," ","\\nobreakspace");d(U,g,On," ","\\ ");d(U,g,On," "," ");d(U,g,On," ","\\space");d(U,g,On," ","\\nobreakspace");d(m,g,On,null,"\\nobreak");d(m,g,On,null,"\\allowbreak");d(m,g,Xa,",",",");d(m,g,Xa,";",";");d(m,k,ce,"⊼","\\barwedge",!0);d(m,k,ce,"⊻","\\veebar",!0);d(m,g,ce,"⊙","\\odot",!0);d(m,g,ce,"⊕","\\oplus",!0);d(m,g,ce,"⊗","\\otimes",!0);d(m,g,A,"∂","\\partial",!0);d(m,g,ce,"⊘","\\oslash",!0);d(m,k,ce,"⊚","\\circledcirc",!0);d(m,k,ce,"⊡","\\boxdot",!0);d(m,g,ce,"△","\\bigtriangleup");d(m,g,ce,"▽","\\bigtriangledown");d(m,g,ce,"†","\\dagger");d(m,g,ce,"⋄","\\diamond");d(m,g,ce,"⋆","\\star");d(m,g,ce,"◃","\\triangleleft");d(m,g,ce,"▹","\\triangleright");d(m,g,Gt,"{","\\{");d(U,g,A,"{","\\{");d(U,g,A,"{","\\textbraceleft");d(m,g,Pt,"}","\\}");d(U,g,A,"}","\\}");d(U,g,A,"}","\\textbraceright");d(m,g,Gt,"{","\\lbrace");d(m,g,Pt,"}","\\rbrace");d(m,g,Gt,"[","\\lbrack",!0);d(U,g,A,"[","\\lbrack",!0);d(m,g,Pt,"]","\\rbrack",!0);d(U,g,A,"]","\\rbrack",!0);d(m,g,Gt,"(","\\lparen",!0);d(m,g,Pt,")","\\rparen",!0);d(U,g,A,"<","\\textless",!0);d(U,g,A,">","\\textgreater",!0);d(m,g,Gt,"⌊","\\lfloor",!0);d(m,g,Pt,"⌋","\\rfloor",!0);d(m,g,Gt,"⌈","\\lceil",!0);d(m,g,Pt,"⌉","\\rceil",!0);d(m,g,A,"\\","\\backslash");d(m,g,A,"∣","|");d(m,g,A,"∣","\\vert");d(U,g,A,"|","\\textbar",!0);d(m,g,A,"∥","\\|");d(m,g,A,"∥","\\Vert");d(U,g,A,"∥","\\textbardbl");d(U,g,A,"~","\\textasciitilde");d(U,g,A,"\\","\\textbackslash");d(U,g,A,"^","\\textasciicircum");d(m,g,S,"↑","\\uparrow",!0);d(m,g,S,"⇑","\\Uparrow",!0);d(m,g,S,"↓","\\downarrow",!0);d(m,g,S,"⇓","\\Downarrow",!0);d(m,g,S,"↕","\\updownarrow",!0);d(m,g,S,"⇕","\\Updownarrow",!0);d(m,g,ft,"∐","\\coprod");d(m,g,ft,"⋁","\\bigvee");d(m,g,ft,"⋀","\\bigwedge");d(m,g,ft,"⨄","\\biguplus");d(m,g,ft,"⋂","\\bigcap");d(m,g,ft,"⋃","\\bigcup");d(m,g,ft,"∫","\\int");d(m,g,ft,"∫","\\intop");d(m,g,ft,"∬","\\iint");d(m,g,ft,"∭","\\iiint");d(m,g,ft,"∏","\\prod");d(m,g,ft,"∑","\\sum");d(m,g,ft,"⨂","\\bigotimes");d(m,g,ft,"⨁","\\bigoplus");d(m,g,ft,"⨀","\\bigodot");d(m,g,ft,"∮","\\oint");d(m,g,ft,"∯","\\oiint");d(m,g,ft,"∰","\\oiiint");d(m,g,ft,"⨆","\\bigsqcup");d(m,g,ft,"∫","\\smallint");d(U,g,w0,"…","\\textellipsis");d(m,g,w0,"…","\\mathellipsis");d(U,g,w0,"…","\\ldots",!0);d(m,g,w0,"…","\\ldots",!0);d(m,g,w0,"⋯","\\@cdots",!0);d(m,g,w0,"⋱","\\ddots",!0);d(m,g,A,"⋮","\\varvdots");d(U,g,A,"⋮","\\varvdots");d(m,g,Ze,"ˊ","\\acute");d(m,g,Ze,"ˋ","\\grave");d(m,g,Ze,"¨","\\ddot");d(m,g,Ze,"~","\\tilde");d(m,g,Ze,"ˉ","\\bar");d(m,g,Ze,"˘","\\breve");d(m,g,Ze,"ˇ","\\check");d(m,g,Ze,"^","\\hat");d(m,g,Ze,"⃗","\\vec");d(m,g,Ze,"˙","\\dot");d(m,g,Ze,"˚","\\mathring");d(m,g,xe,"","\\@imath");d(m,g,xe,"","\\@jmath");d(m,g,A,"ı","ı");d(m,g,A,"ȷ","ȷ");d(U,g,A,"ı","\\i",!0);d(U,g,A,"ȷ","\\j",!0);d(U,g,A,"ß","\\ss",!0);d(U,g,A,"æ","\\ae",!0);d(U,g,A,"œ","\\oe",!0);d(U,g,A,"ø","\\o",!0);d(U,g,A,"Æ","\\AE",!0);d(U,g,A,"Œ","\\OE",!0);d(U,g,A,"Ø","\\O",!0);d(U,g,Ze,"ˊ","\\'");d(U,g,Ze,"ˋ","\\`");d(U,g,Ze,"ˆ","\\^");d(U,g,Ze,"˜","\\~");d(U,g,Ze,"ˉ","\\=");d(U,g,Ze,"˘","\\u");d(U,g,Ze,"˙","\\.");d(U,g,Ze,"¸","\\c");d(U,g,Ze,"˚","\\r");d(U,g,Ze,"ˇ","\\v");d(U,g,Ze,"¨",'\\"');d(U,g,Ze,"˝","\\H");d(U,g,Ze,"◯","\\textcircled");var Fd={"--":!0,"---":!0,"``":!0,"''":!0};d(U,g,A,"–","--",!0);d(U,g,A,"–","\\textendash");d(U,g,A,"—","---",!0);d(U,g,A,"—","\\textemdash");d(U,g,A,"‘","`",!0);d(U,g,A,"‘","\\textquoteleft");d(U,g,A,"’","'",!0);d(U,g,A,"’","\\textquoteright");d(U,g,A,"“","``",!0);d(U,g,A,"“","\\textquotedblleft");d(U,g,A,"”","''",!0);d(U,g,A,"”","\\textquotedblright");d(m,g,A,"°","\\degree",!0);d(U,g,A,"°","\\degree");d(U,g,A,"°","\\textdegree",!0);d(m,g,A,"£","\\pounds");d(m,g,A,"£","\\mathsterling",!0);d(U,g,A,"£","\\pounds");d(U,g,A,"£","\\textsterling",!0);d(m,k,A,"✠","\\maltese");d(U,k,A,"✠","\\maltese");var Jc='0123456789/@."';for(var Jl=0;Jl<Jc.length;Jl++){var ed=Jc.charAt(Jl);d(m,g,A,ed,ed)}var td='0123456789!@*()-=+";:?/.,';for(var es=0;es<td.length;es++){var nd=td.charAt(es);d(U,g,A,nd,nd)}var Wa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var ts=0;ts<Wa.length;ts++){var Aa=Wa.charAt(ts);d(m,g,xe,Aa,Aa),d(U,g,A,Aa,Aa)}d(m,k,A,"C","ℂ");d(U,k,A,"C","ℂ");d(m,k,A,"H","ℍ");d(U,k,A,"H","ℍ");d(m,k,A,"N","ℕ");d(U,k,A,"N","ℕ");d(m,k,A,"P","ℙ");d(U,k,A,"P","ℙ");d(m,k,A,"Q","ℚ");d(U,k,A,"Q","ℚ");d(m,k,A,"R","ℝ");d(U,k,A,"R","ℝ");d(m,k,A,"Z","ℤ");d(U,k,A,"Z","ℤ");d(m,g,xe,"h","ℎ");d(U,g,xe,"h","ℎ");var be="";for(var At=0;At<Wa.length;At++){var it=Wa.charAt(At);be=String.fromCharCode(55349,56320+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56372+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56424+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56580+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56684+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56736+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56788+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56840+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56944+At),d(m,g,xe,it,be),d(U,g,A,it,be),At<26&&(be=String.fromCharCode(55349,56632+At),d(m,g,xe,it,be),d(U,g,A,it,be),be=String.fromCharCode(55349,56476+At),d(m,g,xe,it,be),d(U,g,A,it,be))}be="𝕜";d(m,g,xe,"k",be);d(U,g,A,"k",be);for(var Rr=0;Rr<10;Rr++){var hr=Rr.toString();be=String.fromCharCode(55349,57294+Rr),d(m,g,xe,hr,be),d(U,g,A,hr,be),be=String.fromCharCode(55349,57314+Rr),d(m,g,xe,hr,be),d(U,g,A,hr,be),be=String.fromCharCode(55349,57324+Rr),d(m,g,xe,hr,be),d(U,g,A,hr,be),be=String.fromCharCode(55349,57334+Rr),d(m,g,xe,hr,be),d(U,g,A,hr,be)}var gs="ÐÞþ";for(var ns=0;ns<gs.length;ns++){var qa=gs.charAt(ns);d(m,g,xe,qa,qa),d(U,g,A,qa,qa)}var Ea=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],rd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],P6=function(n,r){var o=n.charCodeAt(0),s=n.charCodeAt(1),u=(o-55296)*1024+(s-56320)+65536,f=r==="math"?0:1;if(119808<=u&&u<120484){var p=Math.floor((u-119808)/26);return[Ea[p][2],Ea[p][f]]}else if(120782<=u&&u<=120831){var v=Math.floor((u-120782)/10);return[rd[v][2],rd[v][f]]}else{if(u===120485||u===120486)return[Ea[0][2],Ea[0][f]];if(120486<u&&u<120782)return["",""];throw new ee("Unsupported character: "+n)}},Qa=function(n,r,o){return Ye[o][n]&&Ye[o][n].replace&&(n=Ye[o][n].replace),{value:n,metrics:Es(n,r,o)}},qt=function(n,r,o,s,u){var f=Qa(n,r,o),p=f.metrics;n=f.value;var v;if(p){var w=p.italic;(o==="text"||s&&s.font==="mathit")&&(w=0),v=new nn(n,p.height,p.depth,w,p.skew,p.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+o+"'")),v=new nn(n,0,0,0,0,0,u);if(s){v.maxFontSize=s.sizeMultiplier,s.style.isTight()&&v.classes.push("mtight");var b=s.getColor();b&&(v.style.color=b)}return v},js=function(n,r,o,s){return s===void 0&&(s=[]),o.font==="boldsymbol"&&Qa(n,"Main-Bold",r).metrics?qt(n,"Main-Bold",r,o,s.concat(["mathbf"])):n==="\\"||Ye[r][n].font==="main"?qt(n,"Main-Regular",r,o,s):qt(n,"AMS-Regular",r,o,s.concat(["amsrm"]))},j6=function(n,r,o,s,u){return u!=="textord"&&Qa(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ka=function(n,r,o){var s=n.mode,u=n.text,f=["mord"],p=s==="math"||s==="text"&&r.font,v=p?r.font:r.fontFamily,w="",b="";if(u.charCodeAt(0)===55349&&([w,b]=P6(u,s)),w.length>0)return qt(u,w,s,r,f.concat(b));if(v){var $,M;if(v==="boldsymbol"){var z=j6(u,s,r,f,o);$=z.fontName,M=[z.fontClass]}else p?($=ys[v].fontName,M=[v]):($=Pa(v,r.fontWeight,r.fontShape),M=[v,r.fontWeight,r.fontShape]);if(Qa(u,$,s).metrics)return qt(u,$,s,r,f.concat(M));if(Fd.hasOwnProperty(u)&&$.slice(0,10)==="Typewriter"){for(var P=[],R=0;R<u.length;R++)P.push(qt(u[R],$,s,r,f.concat(M)));return In(P)}}if(o==="mathord")return qt(u,"Math-Italic",s,r,f.concat(["mathnormal"]));if(o==="textord"){var B=Ye[s][u]&&Ye[s][u].font;if(B==="ams"){var H=Pa("amsrm",r.fontWeight,r.fontShape);return qt(u,H,s,r,f.concat("amsrm",r.fontWeight,r.fontShape))}else if(B==="main"||!B){var X=Pa("textrm",r.fontWeight,r.fontShape);return qt(u,X,s,r,f.concat(r.fontWeight,r.fontShape))}else{var F=Pa(B,r.fontWeight,r.fontShape);return qt(u,F,s,r,f.concat(F,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+o+" in makeOrd")},R6=(a,n)=>{if(pr(a.classes)!==pr(n.classes)||a.skew!==n.skew||a.maxFontSize!==n.maxFontSize||a.italic!==0&&a.hasClass("mathnormal"))return!1;if(a.classes.length===1){var r=a.classes[0];if(r==="mbin"||r==="mord")return!1}for(var o in a.style)if(a.style.hasOwnProperty(o)&&a.style[o]!==n.style[o])return!1;for(var s in n.style)if(n.style.hasOwnProperty(s)&&a.style[s]!==n.style[s])return!1;return!0},Hd=a=>{for(var n=0;n<a.length-1;n++){var r=a[n],o=a[n+1];r instanceof nn&&o instanceof nn&&R6(r,o)&&(r.text+=o.text,r.height=Math.max(r.height,o.height),r.depth=Math.max(r.depth,o.depth),r.italic=o.italic,a.splice(n+1,1),n--)}return a},Rs=function(n){for(var r=0,o=0,s=0,u=0;u<n.children.length;u++){var f=n.children[u];f.height>r&&(r=f.height),f.depth>o&&(o=f.depth),f.maxFontSize>s&&(s=f.maxFontSize)}n.height=r,n.depth=o,n.maxFontSize=s},Y=function(n,r,o,s){var u=new pi(n,r,o,s);return Rs(u),u},gr=(a,n,r,o)=>new pi(a,n,r,o),g0=function(n,r,o){var s=Y([n],[],r);return s.height=Math.max(o||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=ie(s.height),s.maxFontSize=1,s},D6=function(n,r,o,s){var u=new Ps(n,r,o,s);return Rs(u),u},In=function(n){var r=new mi(n);return Rs(r),r},y0=function(n,r){return n instanceof mi?Y([],[n],r):n},B6=function(n){if(n.positionType==="individualShift"){for(var r=n.children,o=[r[0]],s=-r[0].shift-r[0].elem.depth,u=s,f=1;f<r.length;f++){var p=-r[f].shift-u-r[f].elem.depth,v=p-(r[f-1].elem.height+r[f-1].elem.depth);u=u+p,o.push({type:"kern",size:v}),o.push(r[f])}return{children:o,depth:s}}var w;if(n.positionType==="top"){for(var b=n.positionData,$=0;$<n.children.length;$++){var M=n.children[$];b-=M.type==="kern"?M.size:M.elem.height+M.elem.depth}w=b}else if(n.positionType==="bottom")w=-n.positionData;else{var z=n.children[0];if(z.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")w=-z.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")w=-z.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:w}},Fe=function(n,r){for(var{children:o,depth:s}=B6(n),u=0,f=0;f<o.length;f++){var p=o[f];if(p.type==="elem"){var v=p.elem;u=Math.max(u,v.maxFontSize,v.height)}}u+=2;var w=Y(["pstrut"],[]);w.style.height=ie(u);for(var b=[],$=s,M=s,z=s,P=0;P<o.length;P++){var R=o[P];if(R.type==="kern")z+=R.size;else{var B=R.elem,H=R.wrapperClasses||[],X=R.wrapperStyle||{},F=Y(H,[w,B],void 0,X);F.style.top=ie(-u-z-B.depth),R.marginLeft&&(F.style.marginLeft=R.marginLeft),R.marginRight&&(F.style.marginRight=R.marginRight),b.push(F),z+=B.height+B.depth}$=Math.min($,z),M=Math.max(M,z)}var L=Y(["vlist"],b);L.style.height=ie(M);var V;if($<0){var ae=Y([],[]),O=Y(["vlist"],[ae]);O.style.height=ie(-$);var J=Y(["vlist-s"],[new nn("​")]);V=[Y(["vlist-r"],[L,J]),Y(["vlist-r"],[O])]}else V=[Y(["vlist-r"],[L])];var ne=Y(["vlist-t"],V);return V.length===2&&ne.classes.push("vlist-t2"),ne.height=M,ne.depth=-$,ne},Wd=(a,n)=>{var r=Y(["mspace"],[],n),o=nt(a,n);return r.style.marginRight=ie(o),r},Pa=function(n,r,o){var s="";switch(n){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=n}var u;return r==="textbf"&&o==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",s+"-"+u},ys={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Ud={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Vd=function(n,r){var[o,s,u]=Ud[n],f=new vr(o),p=new Nn([f],{width:ie(s),height:ie(u),style:"width:"+ie(s),viewBox:"0 0 "+1e3*s+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),v=gr(["overlay"],[p],r);return v.height=u,v.style.height=ie(u),v.style.width=ie(s),v},tt={number:3,unit:"mu"},Dr={number:4,unit:"mu"},Rn={number:5,unit:"mu"},N6={mord:{mop:tt,mbin:Dr,mrel:Rn,minner:tt},mop:{mord:tt,mop:tt,mrel:Rn,minner:tt},mbin:{mord:Dr,mop:Dr,mopen:Dr,minner:Dr},mrel:{mord:Rn,mop:Rn,mopen:Rn,minner:Rn},mopen:{},mclose:{mop:tt,mbin:Dr,mrel:Rn,minner:tt},mpunct:{mord:tt,mop:tt,mrel:Rn,mopen:tt,mclose:tt,mpunct:tt,minner:tt},minner:{mord:tt,mop:tt,mbin:Dr,mrel:Rn,mopen:tt,mpunct:tt,minner:tt}},L6={mord:{mop:tt},mop:{mord:tt,mop:tt},mbin:{},mrel:{},mopen:{},mclose:{mop:tt},mpunct:{},minner:{mop:tt}},Gd={},Ua={},Va={};function se(a){for(var{type:n,names:r,props:o,handler:s,htmlBuilder:u,mathmlBuilder:f}=a,p={type:n,numArgs:o.numArgs,argTypes:o.argTypes,allowedInArgument:!!o.allowedInArgument,allowedInText:!!o.allowedInText,allowedInMath:o.allowedInMath===void 0?!0:o.allowedInMath,numOptionalArgs:o.numOptionalArgs||0,infix:!!o.infix,primitive:!!o.primitive,handler:s},v=0;v<r.length;++v)Gd[r[v]]=p;n&&(u&&(Ua[n]=u),f&&(Va[n]=f))}function Br(a){var{type:n,htmlBuilder:r,mathmlBuilder:o}=a;se({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:o})}var Ga=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},st=function(n){return n.type==="ordgroup"?n.body:[n]},O6=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),I6=new Set(["rightmost","mrel","mclose","mpunct"]),F6={display:ke.DISPLAY,text:ke.TEXT,script:ke.SCRIPT,scriptscript:ke.SCRIPTSCRIPT},H6={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},pt=function(n,r,o,s){s===void 0&&(s=[null,null]);for(var u=[],f=0;f<n.length;f++){var p=Ne(n[f],r);if(p instanceof mi){var v=p.children;u.push(...v)}else u.push(p)}if(Hd(u),!o)return u;var w=r;if(n.length===1){var b=n[0];b.type==="sizing"?w=r.havingSize(b.size):b.type==="styling"&&(w=r.havingStyle(F6[b.style]))}var $=Y([s[0]||"leftmost"],[],r),M=Y([s[1]||"rightmost"],[],r),z=o==="root";return id(u,(P,R)=>{var B=R.classes[0],H=P.classes[0];B==="mbin"&&I6.has(H)?R.classes[0]="mord":H==="mbin"&&O6.has(B)&&(P.classes[0]="mord")},{node:$},M,z),id(u,(P,R)=>{var B=xs(R),H=xs(P),X=B&&H?P.hasClass("mtight")?L6[B][H]:N6[B][H]:null;if(X)return Wd(X,w)},{node:$},M,z),u},id=function a(n,r,o,s,u){s&&n.push(s);for(var f=0;f<n.length;f++){var p=n[f],v=Yd(p);if(v){a(v.children,r,o,null,u);continue}var w=!p.hasClass("mspace");if(w){var b=r(p,o.node);b&&(o.insertAfter?o.insertAfter(b):(n.unshift(b),f++))}w?o.node=p:u&&p.hasClass("newline")&&(o.node=Y(["leftmost"])),o.insertAfter=($=>M=>{n.splice($+1,0,M),f++})(f)}s&&n.pop()},Yd=function(n){return n instanceof mi||n instanceof Ps||n instanceof pi&&n.hasClass("enclosing")?n:null},W6=function a(n,r){var o=Yd(n);if(o){var s=o.children;if(s.length){if(r==="right")return a(s[s.length-1],"right");if(r==="left")return a(s[0],"left")}}return n},xs=function(n,r){return n?(r&&(n=W6(n,r)),H6[n.classes[0]]||null):null},hi=function(n,r){var o=["nulldelimiter"].concat(n.baseSizingClasses());return Y(r.concat(o))},Ne=function(n,r,o){if(!n)return Y();if(Ua[n.type]){var s=Ua[n.type](n,r);if(o&&r.size!==o.size){s=Y(r.sizingClasses(o),[s],r);var u=r.sizeMultiplier/o.sizeMultiplier;s.height*=u,s.depth*=u}return s}else throw new ee("Got group of unknown type: '"+n.type+"'")};function ja(a,n){var r=Y(["base"],a,n),o=Y(["strut"]);return o.style.height=ie(r.height+r.depth),r.depth&&(o.style.verticalAlign=ie(-r.depth)),r.children.unshift(o),r}function ws(a,n){var r=null;a.length===1&&a[0].type==="tag"&&(r=a[0].tag,a=a[0].body);var o=pt(a,n,"root"),s;o.length===2&&o[1].hasClass("tag")&&(s=o.pop());for(var u=[],f=[],p=0;p<o.length;p++)if(f.push(o[p]),o[p].hasClass("mbin")||o[p].hasClass("mrel")||o[p].hasClass("allowbreak")){for(var v=!1;p<o.length-1&&o[p+1].hasClass("mspace")&&!o[p+1].hasClass("newline");)p++,f.push(o[p]),o[p].hasClass("nobreak")&&(v=!0);v||(u.push(ja(f,n)),f=[])}else o[p].hasClass("newline")&&(f.pop(),f.length>0&&(u.push(ja(f,n)),f=[]),u.push(o[p]));f.length>0&&u.push(ja(f,n));var w;r?(w=ja(pt(r,n,!0)),w.classes=["tag"],u.push(w)):s&&u.push(s);var b=Y(["katex-html"],u);if(b.setAttribute("aria-hidden","true"),w){var $=w.children[0];$.style.height=ie(b.height+b.depth),b.depth&&($.style.verticalAlign=ie(-b.depth))}return b}function Xd(a){return new mi(a)}class te{constructor(n,r,o){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=o||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=pr(this.classes));for(var o=0;o<this.children.length;o++)if(this.children[o]instanceof dt&&this.children[o+1]instanceof dt){for(var s=this.children[o].toText()+this.children[++o].toText();this.children[o+1]instanceof dt;)s+=this.children[++o].toText();n.appendChild(new dt(s).toNode())}else n.appendChild(this.children[o].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=Mt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+Mt(pr(this.classes))+'"'),n+=">";for(var o=0;o<this.children.length;o++)n+=this.children[o].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class dt{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return Mt(this.toText())}toText(){return this.text}}class Qd{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",ie(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ie(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var U6=new Set(["\\imath","\\jmath"]),V6=new Set(["mrow","mtable"]),rn=function(n,r,o){return Ye[r][n]&&Ye[r][n].replace&&n.charCodeAt(0)!==55349&&!(Fd.hasOwnProperty(n)&&o&&(o.fontFamily&&o.fontFamily.slice(4,6)==="tt"||o.font&&o.font.slice(4,6)==="tt"))&&(n=Ye[r][n].replace),new dt(n)},Ds=function(n){return n.length===1?n[0]:new te("mrow",n)},Bs=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var o=r.font;if(!o||o==="mathnormal")return null;var s=n.mode;if(o==="mathit")return"italic";if(o==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(o==="mathbf")return"bold";if(o==="mathbb")return"double-struck";if(o==="mathsfit")return"sans-serif-italic";if(o==="mathfrak")return"fraktur";if(o==="mathscr"||o==="mathcal")return"script";if(o==="mathsf")return"sans-serif";if(o==="mathtt")return"monospace";var u=n.text;if(U6.has(u))return null;Ye[s][u]&&Ye[s][u].replace&&(u=Ye[s][u].replace);var f=ys[o].fontName;return Es(u,f,s)?ys[o].variant:null};function rs(a){if(!a)return!1;if(a.type==="mi"&&a.children.length===1){var n=a.children[0];return n instanceof dt&&n.text==="."}else if(a.type==="mo"&&a.children.length===1&&a.getAttribute("separator")==="true"&&a.getAttribute("lspace")==="0em"&&a.getAttribute("rspace")==="0em"){var r=a.children[0];return r instanceof dt&&r.text===","}else return!1}var It=function(n,r,o){if(n.length===1){var s=Ve(n[0],r);return o&&s instanceof te&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var u=[],f,p=0;p<n.length;p++){var v=Ve(n[p],r);if(v instanceof te&&f instanceof te){if(v.type==="mtext"&&f.type==="mtext"&&v.getAttribute("mathvariant")===f.getAttribute("mathvariant")){f.children.push(...v.children);continue}else if(v.type==="mn"&&f.type==="mn"){f.children.push(...v.children);continue}else if(rs(v)&&f.type==="mn"){f.children.push(...v.children);continue}else if(v.type==="mn"&&rs(f))v.children=[...f.children,...v.children],u.pop();else if((v.type==="msup"||v.type==="msub")&&v.children.length>=1&&(f.type==="mn"||rs(f))){var w=v.children[0];w instanceof te&&w.type==="mn"&&(w.children=[...f.children,...w.children],u.pop())}else if(f.type==="mi"&&f.children.length===1){var b=f.children[0];if(b instanceof dt&&b.text==="̸"&&(v.type==="mo"||v.type==="mi"||v.type==="mn")){var $=v.children[0];$ instanceof dt&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),u.pop())}}}u.push(v),f=v}return u},yr=function(n,r,o){return Ds(It(n,r,o))},Ve=function(n,r){if(!n)return new te("mrow");if(Va[n.type]){var o=Va[n.type](n,r);return o}else throw new ee("Got group of unknown type: '"+n.type+"'")};function ad(a,n,r,o,s){var u=It(a,r),f;u.length===1&&u[0]instanceof te&&V6.has(u[0].type)?f=u[0]:f=new te("mrow",u);var p=new te("annotation",[new dt(n)]);p.setAttribute("encoding","application/x-tex");var v=new te("semantics",[f,p]),w=new te("math",[v]);w.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),o&&w.setAttribute("display","block");var b=s?"katex":"katex-mathml";return Y([b],[w])}var Kd=function(n){return new Dn({style:n.displayMode?ke.DISPLAY:ke.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},Zd=function(n,r){if(r.displayMode){var o=["katex-display"];r.leqno&&o.push("leqno"),r.fleqn&&o.push("fleqn"),n=Y(o,[n])}return n},G6=function(n,r,o){var s=Kd(o),u;if(o.output==="mathml")return ad(n,r,s,o.displayMode,!0);if(o.output==="html"){var f=ws(n,s);u=Y(["katex"],[f])}else{var p=ad(n,r,s,o.displayMode,!1),v=ws(n,s);u=Y(["katex"],[p,v])}return Zd(u,o)},Y6=function(n,r,o){var s=Kd(o),u=ws(n,s),f=Y(["katex"],[u]);return Zd(f,o)},X6={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Za=function(n){var r=new te("mo",[new dt(X6[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Q6={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},K6=new Set(["widehat","widecheck","widetilde","utilde"]),Ja=function(n,r){function o(){var p=4e5,v=n.label.slice(1);if(K6.has(v)){var w=n,b=w.base.type==="ordgroup"?w.base.body.length:1,$,M,z;if(b>5)v==="widehat"||v==="widecheck"?($=420,p=2364,z=.42,M=v+"4"):($=312,p=2340,z=.34,M="tilde4");else{var P=[1,1,2,2,3,3][b];v==="widehat"||v==="widecheck"?(p=[0,1062,2364,2364,2364][P],$=[0,239,300,360,420][P],z=[0,.24,.3,.3,.36,.42][P],M=v+P):(p=[0,600,1033,2339,2340][P],$=[0,260,286,306,312][P],z=[0,.26,.286,.3,.306,.34][P],M="tilde"+P)}var R=new vr(M),B=new Nn([R],{width:"100%",height:ie(z),viewBox:"0 0 "+p+" "+$,preserveAspectRatio:"none"});return{span:gr([],[B],r),minWidth:0,height:z}}else{var H=[],X=Q6[v],[F,L,V]=X,ae=V/1e3,O=F.length,J,ne;if(O===1){var we=X[3];J=["hide-tail"],ne=[we]}else if(O===2)J=["halfarrow-left","halfarrow-right"],ne=["xMinYMin","xMaxYMin"];else if(O===3)J=["brace-left","brace-center","brace-right"],ne=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+O+" children.");for(var ze=0;ze<O;ze++){var Te=new vr(F[ze]),We=new Nn([Te],{width:"400em",height:ie(ae),viewBox:"0 0 "+p+" "+V,preserveAspectRatio:ne[ze]+" slice"}),He=gr([J[ze]],[We],r);if(O===1)return{span:He,minWidth:L,height:ae};He.style.height=ie(ae),H.push(He)}return{span:Y(["stretchy"],H,r),minWidth:L,height:ae}}}var{span:s,minWidth:u,height:f}=o();return s.height=f,s.style.height=ie(f),u>0&&(s.style.minWidth=ie(u)),s},Z6=function(n,r,o,s,u){var f,p=n.height+n.depth+o+s;if(/fbox|color|angl/.test(r)){if(f=Y(["stretchy",r],[],u),r==="fbox"){var v=u.color&&u.getColor();v&&(f.style.borderColor=v)}}else{var w=[];/^[bx]cancel$/.test(r)&&w.push(new vs({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&w.push(new vs({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new Nn(w,{width:"100%",height:ie(p)});f=gr([],[b],u)}return f.height=p,f.style.height=ie(p),f};function Ce(a,n){if(!a||a.type!==n)throw new Error("Expected node of type "+n+", but got "+(a?"node of type "+a.type:String(a)));return a}function Ns(a){var n=eo(a);if(!n)throw new Error("Expected node of symbol group type, but got "+(a?"node of type "+a.type:String(a)));return n}function eo(a){return a&&(a.type==="atom"||E6.hasOwnProperty(a.type))?a:null}var Ls=(a,n)=>{var r,o,s;a&&a.type==="supsub"?(o=Ce(a.base,"accent"),r=o.base,a.base=r,s=A6(Ne(a,n)),a.base=o):(o=Ce(a,"accent"),r=o.base);var u=Ne(r,n.havingCrampedStyle()),f=o.isShifty&&Ln(r),p=0;if(f){var v=ui(r),w=Ne(v,n.havingCrampedStyle());p=Zc(w).skew}var b=o.label==="\\c",$=b?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),M;if(o.isStretchy)M=Ja(o,n),M=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:M,wrapperClasses:["svg-align"],wrapperStyle:p>0?{width:"calc(100% - "+ie(2*p)+")",marginLeft:ie(2*p)}:void 0}]});else{var z,P;o.label==="\\vec"?(z=Vd("vec",n),P=Ud.vec[1]):(z=Ka({mode:o.mode,text:o.label},n,"textord"),z=Zc(z),z.italic=0,P=z.width,b&&($+=z.depth)),M=Y(["accent-body"],[z]);var R=o.label==="\\textcircled";R&&(M.classes.push("accent-full"),$=u.height);var B=p;R||(B-=P/2),M.style.left=ie(B),o.label==="\\textcircled"&&(M.style.top=".2em"),M=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-$},{type:"elem",elem:M}]})}var H=Y(["mord","accent"],[M],n);return s?(s.children[0]=H,s.height=Math.max(H.height,s.height),s.classes[0]="mord",s):H},Jd=(a,n)=>{var r=a.isStretchy?Za(a.label):new te("mo",[rn(a.label,a.mode)]),o=new te("mover",[Ve(a.base,n),r]);return o.setAttribute("accent","true"),o},J6=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(a=>"\\"+a).join("|"));se({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(a,n)=>{var r=Ga(n[0]),o=!J6.test(a.funcName),s=!o||a.funcName==="\\widehat"||a.funcName==="\\widetilde"||a.funcName==="\\widecheck";return{type:"accent",mode:a.parser.mode,label:a.funcName,isStretchy:o,isShifty:s,base:r}},htmlBuilder:Ls,mathmlBuilder:Jd});se({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(a,n)=>{var r=n[0],o=a.parser.mode;return o==="math"&&(a.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+a.funcName+" works only in text mode"),o="text"),{type:"accent",mode:o,label:a.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Ls,mathmlBuilder:Jd});se({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0];return{type:"accentUnder",mode:r.mode,label:o,base:s}},htmlBuilder:(a,n)=>{var r=Ne(a.base,n),o=Ja(a,n),s=a.label==="\\utilde"?.12:0,u=Fe({positionType:"top",positionData:r.height,children:[{type:"elem",elem:o,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return Y(["mord","accentunder"],[u],n)},mathmlBuilder:(a,n)=>{var r=Za(a.label),o=new te("munder",[Ve(a.base,n),r]);return o.setAttribute("accentunder","true"),o}});var Ra=a=>{var n=new te("mpadded",a?[a]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};se({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(a,n,r){var{parser:o,funcName:s}=a;return{type:"xArrow",mode:o.mode,label:s,body:n[0],below:r[0]}},htmlBuilder(a,n){var r=n.style,o=n.havingStyle(r.sup()),s=y0(Ne(a.body,o,n),n),u=a.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(u+"-arrow-pad");var f;a.below&&(o=n.havingStyle(r.sub()),f=y0(Ne(a.below,o,n),n),f.classes.push(u+"-arrow-pad"));var p=Ja(a,n),v=-n.fontMetrics().axisHeight+.5*p.height,w=-n.fontMetrics().axisHeight-.5*p.height-.111;(s.depth>.25||a.label==="\\xleftequilibrium")&&(w-=s.depth);var b;if(f){var $=-n.fontMetrics().axisHeight+f.height+.5*p.height+.111;b=Fe({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:p,shift:v},{type:"elem",elem:f,shift:$}]})}else b=Fe({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:p,shift:v}]});return b.children[0].children[0].children[1].classes.push("svg-align"),Y(["mrel","x-arrow"],[b],n)},mathmlBuilder(a,n){var r=Za(a.label);r.setAttribute("minsize",a.label.charAt(0)==="x"?"1.75em":"3.0em");var o;if(a.body){var s=Ra(Ve(a.body,n));if(a.below){var u=Ra(Ve(a.below,n));o=new te("munderover",[r,u,s])}else o=new te("mover",[r,s])}else if(a.below){var f=Ra(Ve(a.below,n));o=new te("munder",[r,f])}else o=Ra(),o=new te("mover",[r,o]);return o}});function e4(a,n){var r=pt(a.body,n,!0);return Y([a.mclass],r,n)}function t4(a,n){var r,o=It(a.body,n);return a.mclass==="minner"?r=new te("mpadded",o):a.mclass==="mord"?a.isCharacterBox?(r=o[0],r.type="mi"):r=new te("mi",o):(a.isCharacterBox?(r=o[0],r.type="mo"):r=new te("mo",o),a.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):a.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):a.mclass==="mopen"||a.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):a.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}se({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+o.slice(5),body:st(s),isCharacterBox:Ln(s)}},htmlBuilder:e4,mathmlBuilder:t4});var to=a=>{var n=a.type==="ordgroup"&&a.body.length?a.body[0]:a;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};se({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(a,n){var{parser:r}=a;return{type:"mclass",mode:r.mode,mclass:to(n[0]),body:st(n[1]),isCharacterBox:Ln(n[1])}}});se({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(a,n){var{parser:r,funcName:o}=a,s=n[1],u=n[0],f;o!=="\\stackrel"?f=to(s):f="mrel";var p={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:o!=="\\stackrel",body:st(s)},v={type:"supsub",mode:u.mode,base:p,sup:o==="\\underset"?null:u,sub:o==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:f,body:[v],isCharacterBox:Ln(v)}},htmlBuilder:e4,mathmlBuilder:t4});se({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(a,n){var{parser:r}=a;return{type:"pmb",mode:r.mode,mclass:to(n[0]),body:st(n[0])}},htmlBuilder(a,n){var r=pt(a.body,n,!0),o=Y([a.mclass],r,n);return o.style.textShadow="0.02em 0.01em 0.04px",o},mathmlBuilder(a,n){var r=It(a.body,n),o=new te("mstyle",r);return o.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),o}});var e7={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},od=()=>({type:"styling",body:[],mode:"math",style:"display"}),ld=a=>a.type==="textord"&&a.text==="@",t7=(a,n)=>(a.type==="mathord"||a.type==="atom")&&a.text===n;function n7(a,n,r){var o=e7[a];switch(o){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(o,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:o,mode:"math",family:"rel"},f=r.callFunction("\\Big",[u],[]),p=r.callFunction("\\\\cdright",[n[1]],[]),v={type:"ordgroup",mode:"math",body:[s,f,p]};return r.callFunction("\\\\cdparent",[v],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var w={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[w],[])}default:return{type:"textord",text:" ",mode:"math"}}}function r7(a){var n=[];for(a.gullet.beginGroup(),a.gullet.macros.set("\\cr","\\\\\\relax"),a.gullet.beginGroup();;){n.push(a.parseExpression(!1,"\\\\")),a.gullet.endGroup(),a.gullet.beginGroup();var r=a.fetch().text;if(r==="&"||r==="\\\\")a.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new ee("Expected \\\\ or \\cr or \\end",a.nextToken)}for(var o=[],s=[o],u=0;u<n.length;u++){for(var f=n[u],p=od(),v=0;v<f.length;v++)if(!ld(f[v]))p.body.push(f[v]);else{o.push(p),v+=1;var w=Ns(f[v]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(w))if("<>AV".includes(w))for(var $=0;$<2;$++){for(var M=!0,z=v+1;z<f.length;z++){if(t7(f[z],w)){M=!1,v=z;break}if(ld(f[z]))throw new ee("Missing a "+w+" character to complete a CD arrow.",f[z]);b[$].body.push(f[z])}if(M)throw new ee("Missing a "+w+" character to complete a CD arrow.",f[v])}else throw new ee('Expected one of "<>AV=|." after @',f[v]);var P=n7(w,b,a),R={type:"styling",body:[P],mode:"math",style:"display"};o.push(R),p=od()}u%2===0?o.push(p):o.shift(),o=[],s.push(o)}a.gullet.endGroup(),a.gullet.endGroup();var B=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:B,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}se({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(a,n){var{parser:r,funcName:o}=a;return{type:"cdlabel",mode:r.mode,side:o.slice(4),label:n[0]}},htmlBuilder(a,n){var r=n.havingStyle(n.style.sup()),o=y0(Ne(a.label,r,n),n);return o.classes.push("cd-label-"+a.side),o.style.bottom=ie(.8-o.depth),o.height=0,o.depth=0,o},mathmlBuilder(a,n){var r=new te("mrow",[Ve(a.label,n)]);return r=new te("mpadded",[r]),r.setAttribute("width","0"),a.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new te("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});se({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(a,n){var{parser:r}=a;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(a,n){var r=y0(Ne(a.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(a,n){return new te("mrow",[Ve(a.fragment,n)])}});se({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(a,n){for(var{parser:r}=a,o=Ce(n[0],"ordgroup"),s=o.body,u="",f=0;f<s.length;f++){var p=Ce(s[f],"textord");u+=p.text}var v=parseInt(u),w;if(isNaN(v))throw new ee("\\@char has non-numeric argument "+u);if(v<0||v>=1114111)throw new ee("\\@char with invalid code point "+u);return v<=65535?w=String.fromCharCode(v):(v-=65536,w=String.fromCharCode((v>>10)+55296,(v&1023)+56320)),{type:"textord",mode:r.mode,text:w}}});var n4=(a,n)=>{var r=pt(a.body,n.withColor(a.color),!1);return In(r)},r4=(a,n)=>{var r=It(a.body,n.withColor(a.color)),o=new te("mstyle",r);return o.setAttribute("mathcolor",a.color),o};se({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(a,n){var{parser:r}=a,o=Ce(n[0],"color-token").color,s=n[1];return{type:"color",mode:r.mode,color:o,body:st(s)}},htmlBuilder:n4,mathmlBuilder:r4});se({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(a,n){var{parser:r,breakOnTokenText:o}=a,s=Ce(n[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var u=r.parseExpression(!0,o);return{type:"color",mode:r.mode,color:s,body:u}},htmlBuilder:n4,mathmlBuilder:r4});se({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(a,n,r){var{parser:o}=a,s=o.gullet.future().text==="["?o.parseSizeGroup(!0):null,u=!o.settings.displayMode||!o.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:o.mode,newLine:u,size:s&&Ce(s,"size").value}},htmlBuilder(a,n){var r=Y(["mspace"],[],n);return a.newLine&&(r.classes.push("newline"),a.size&&(r.style.marginTop=ie(nt(a.size,n)))),r},mathmlBuilder(a,n){var r=new te("mspace");return a.newLine&&(r.setAttribute("linebreak","newline"),a.size&&r.setAttribute("height",ie(nt(a.size,n)))),r}});var bs={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},i4=a=>{var n=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new ee("Expected a control sequence",a);return n},i7=a=>{var n=a.gullet.popToken();return n.text==="="&&(n=a.gullet.popToken(),n.text===" "&&(n=a.gullet.popToken())),n},a4=(a,n,r,o)=>{var s=a.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!a.gullet.isExpandable(r.text)}),a.gullet.macros.set(n,s,o)};se({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(a){var{parser:n,funcName:r}=a;n.consumeSpaces();var o=n.fetch();if(bs[o.text])return(r==="\\global"||r==="\\\\globallong")&&(o.text=bs[o.text]),Ce(n.parseFunction(),"internal");throw new ee("Invalid token after macro prefix",o)}});se({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a){var{parser:n,funcName:r}=a,o=n.gullet.popToken(),s=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new ee("Expected a control sequence",o);for(var u=0,f,p=[[]];n.gullet.future().text!=="{";)if(o=n.gullet.popToken(),o.text==="#"){if(n.gullet.future().text==="{"){f=n.gullet.future(),p[u].push("{");break}if(o=n.gullet.popToken(),!/^[1-9]$/.test(o.text))throw new ee('Invalid argument number "'+o.text+'"');if(parseInt(o.text)!==u+1)throw new ee('Argument number "'+o.text+'" out of order');u++,p.push([])}else{if(o.text==="EOF")throw new ee("Expected a macro definition");p[u].push(o.text)}var{tokens:v}=n.gullet.consumeArg();return f&&v.unshift(f),(r==="\\edef"||r==="\\xdef")&&(v=n.gullet.expandTokens(v),v.reverse()),n.gullet.macros.set(s,{tokens:v,numArgs:u,delimiters:p},r===bs[r]),{type:"internal",mode:n.mode}}});se({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a){var{parser:n,funcName:r}=a,o=i4(n.gullet.popToken());n.gullet.consumeSpaces();var s=i7(n);return a4(n,o,s,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});se({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a){var{parser:n,funcName:r}=a,o=i4(n.gullet.popToken()),s=n.gullet.popToken(),u=n.gullet.popToken();return a4(n,o,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(s),{type:"internal",mode:n.mode}}});var si=function(n,r,o){var s=Ye.math[n]&&Ye.math[n].replace,u=Es(s||n,r,o);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Os=function(n,r,o,s){var u=o.havingBaseStyle(r),f=Y(s.concat(u.sizingClasses(o)),[n],o),p=u.sizeMultiplier/o.sizeMultiplier;return f.height*=p,f.depth*=p,f.maxFontSize=u.sizeMultiplier,f},o4=function(n,r,o){var s=r.havingBaseStyle(o),u=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=ie(u),n.height-=u,n.depth+=u},a7=function(n,r,o,s,u,f){var p=qt(n,"Main-Regular",u,s),v=Os(p,r,s,f);return o4(v,s,r),v},o7=function(n,r,o,s){return qt(n,"Size"+r+"-Regular",o,s)},l4=function(n,r,o,s,u,f){var p=o7(n,r,u,s),v=Os(Y(["delimsizing","size"+r],[p],s),ke.TEXT,s,f);return o&&o4(v,s,ke.TEXT),v},is=function(n,r,o){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var u=Y(["delimsizinginner",s],[Y([],[qt(n,r,o)])]);return{type:"elem",elem:u}},as=function(n,r,o){var s=xn["Size4-Regular"][n.charCodeAt(0)]?xn["Size4-Regular"][n.charCodeAt(0)][4]:xn["Size1-Regular"][n.charCodeAt(0)][4],u=new vr("inner",b6(n,Math.round(1e3*r))),f=new Nn([u],{width:ie(s),height:ie(r),style:"width:"+ie(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),p=gr([],[f],o);return p.height=r,p.style.height=ie(r),p.style.width=ie(s),{type:"elem",elem:p}},$s=.008,Da={type:"kern",size:-1*$s},l7=new Set(["|","\\lvert","\\rvert","\\vert"]),s7=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),s4=function(n,r,o,s,u,f){var p,v,w,b,$="",M=0;p=w=b=n,v=null;var z="Size1-Regular";n==="\\uparrow"?w=b="⏐":n==="\\Uparrow"?w=b="‖":n==="\\downarrow"?p=w="⏐":n==="\\Downarrow"?p=w="‖":n==="\\updownarrow"?(p="\\uparrow",w="⏐",b="\\downarrow"):n==="\\Updownarrow"?(p="\\Uparrow",w="‖",b="\\Downarrow"):l7.has(n)?(w="∣",$="vert",M=333):s7.has(n)?(w="∥",$="doublevert",M=556):n==="["||n==="\\lbrack"?(p="⎡",w="⎢",b="⎣",z="Size4-Regular",$="lbrack",M=667):n==="]"||n==="\\rbrack"?(p="⎤",w="⎥",b="⎦",z="Size4-Regular",$="rbrack",M=667):n==="\\lfloor"||n==="⌊"?(w=p="⎢",b="⎣",z="Size4-Regular",$="lfloor",M=667):n==="\\lceil"||n==="⌈"?(p="⎡",w=b="⎢",z="Size4-Regular",$="lceil",M=667):n==="\\rfloor"||n==="⌋"?(w=p="⎥",b="⎦",z="Size4-Regular",$="rfloor",M=667):n==="\\rceil"||n==="⌉"?(p="⎤",w=b="⎥",z="Size4-Regular",$="rceil",M=667):n==="("||n==="\\lparen"?(p="⎛",w="⎜",b="⎝",z="Size4-Regular",$="lparen",M=875):n===")"||n==="\\rparen"?(p="⎞",w="⎟",b="⎠",z="Size4-Regular",$="rparen",M=875):n==="\\{"||n==="\\lbrace"?(p="⎧",v="⎨",b="⎩",w="⎪",z="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(p="⎫",v="⎬",b="⎭",w="⎪",z="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(p="⎧",b="⎩",w="⎪",z="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(p="⎫",b="⎭",w="⎪",z="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(p="⎧",b="⎭",w="⎪",z="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(p="⎫",b="⎩",w="⎪",z="Size4-Regular");var P=si(p,z,u),R=P.height+P.depth,B=si(w,z,u),H=B.height+B.depth,X=si(b,z,u),F=X.height+X.depth,L=0,V=1;if(v!==null){var ae=si(v,z,u);L=ae.height+ae.depth,V=2}var O=R+F+L,J=Math.max(0,Math.ceil((r-O)/(V*H))),ne=O+J*V*H,we=s.fontMetrics().axisHeight;o&&(we*=s.sizeMultiplier);var ze=ne/2-we,Te=[];if($.length>0){var We=ne-R-F,He=Math.round(ne*1e3),Se=$6($,Math.round(We*1e3)),Re=new vr($,Se),Ae=(M/1e3).toFixed(3)+"em",Z=(He/1e3).toFixed(3)+"em",pe=new Nn([Re],{width:Ae,height:Z,viewBox:"0 0 "+M+" "+He}),K=gr([],[pe],s);K.height=He/1e3,K.style.width=Ae,K.style.height=Z,Te.push({type:"elem",elem:K})}else{if(Te.push(is(b,z,u)),Te.push(Da),v===null){var E=ne-R-F+2*$s;Te.push(as(w,E,s))}else{var I=(ne-R-F-L)/2+2*$s;Te.push(as(w,I,s)),Te.push(Da),Te.push(is(v,z,u)),Te.push(Da),Te.push(as(w,I,s))}Te.push(Da),Te.push(is(p,z,u))}var ve=s.havingBaseStyle(ke.TEXT),$e=Fe({positionType:"bottom",positionData:ze,children:Te});return Os(Y(["delimsizing","mult"],[$e],ve),ke.TEXT,s,f)},os=80,ls=.08,ss=function(n,r,o,s,u){var f=w6(n,s,o),p=new vr(n,f),v=new Nn([p],{width:"400em",height:ie(r),viewBox:"0 0 400000 "+o,preserveAspectRatio:"xMinYMin slice"});return gr(["hide-tail"],[v],u)},u7=function(n,r){var o=r.havingBaseSizing(),s=h4("\\surd",n*o.sizeMultiplier,f4,o),u=o.sizeMultiplier,f=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),p,v=0,w=0,b=0,$;return s.type==="small"?(b=1e3+1e3*f+os,n<1?u=1:n<1.4&&(u=.7),v=(1+f+ls)/u,w=(1+f)/u,p=ss("sqrtMain",v,b,f,r),p.style.minWidth="0.853em",$=.833/u):s.type==="large"?(b=(1e3+os)*ci[s.size],w=(ci[s.size]+f)/u,v=(ci[s.size]+f+ls)/u,p=ss("sqrtSize"+s.size,v,b,f,r),p.style.minWidth="1.02em",$=1/u):(v=n+f+ls,w=n+f,b=Math.floor(1e3*n+f)+os,p=ss("sqrtTall",v,b,f,r),p.style.minWidth="0.742em",$=1.056),p.height=w,p.style.height=ie(v),{span:p,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+f)*u}},u4=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),c7=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),c4=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),ci=[0,1.2,1.8,2.4,3],d4=function(n,r,o,s,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),u4.has(n)||c4.has(n))return l4(n,r,!1,o,s,u);if(c7.has(n))return s4(n,ci[r],!1,o,s,u);throw new ee("Illegal delimiter: '"+n+"'")},d7=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],f7=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"stack"}],f4=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],h7=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},h4=function(n,r,o,s){for(var u=Math.min(2,3-s.style.size),f=u;f<o.length&&o[f].type!=="stack";f++){var p=si(n,h7(o[f]),"math"),v=p.height+p.depth;if(o[f].type==="small"){var w=s.havingBaseStyle(o[f].style);v*=w.sizeMultiplier}if(v>r)return o[f]}return o[o.length-1]},_s=function(n,r,o,s,u,f){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var p;c4.has(n)?p=d7:u4.has(n)?p=f4:p=f7;var v=h4(n,r,p,s);return v.type==="small"?a7(n,v.style,o,s,u,f):v.type==="large"?l4(n,v.size,o,s,u,f):s4(n,r,o,s,u,f)},us=function(n,r,o,s,u,f){var p=s.fontMetrics().axisHeight*s.sizeMultiplier,v=901,w=5/s.fontMetrics().ptPerEm,b=Math.max(r-p,o+p),$=Math.max(b/500*v,2*b-w);return _s(n,$,!0,s,u,f)},sd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},m7=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function no(a,n){var r=eo(a);if(r&&m7.has(r.text))return r;throw r?new ee("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",a):new ee("Invalid delimiter type '"+a.type+"'",a)}se({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(a,n)=>{var r=no(n[0],a);return{type:"delimsizing",mode:a.parser.mode,size:sd[a.funcName].size,mclass:sd[a.funcName].mclass,delim:r.text}},htmlBuilder:(a,n)=>a.delim==="."?Y([a.mclass]):d4(a.delim,a.size,n,a.mode,[a.mclass]),mathmlBuilder:a=>{var n=[];a.delim!=="."&&n.push(rn(a.delim,a.mode));var r=new te("mo",n);a.mclass==="mopen"||a.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var o=ie(ci[a.size]);return r.setAttribute("minsize",o),r.setAttribute("maxsize",o),r}});function ud(a){if(!a.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}se({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var r=a.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ee("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:a.parser.mode,delim:no(n[0],a).text,color:r}}});se({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var r=no(n[0],a),o=a.parser;++o.leftrightDepth;var s=o.parseExpression(!1);--o.leftrightDepth,o.expect("\\right",!1);var u=Ce(o.parseFunction(),"leftright-right");return{type:"leftright",mode:o.mode,body:s,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(a,n)=>{ud(a);for(var r=pt(a.body,n,!0,["mopen","mclose"]),o=0,s=0,u=!1,f=0;f<r.length;f++)r[f].isMiddle?u=!0:(o=Math.max(r[f].height,o),s=Math.max(r[f].depth,s));o*=n.sizeMultiplier,s*=n.sizeMultiplier;var p;if(a.left==="."?p=hi(n,["mopen"]):p=us(a.left,o,s,n,a.mode,["mopen"]),r.unshift(p),u)for(var v=1;v<r.length;v++){var w=r[v],b=w.isMiddle;b&&(r[v]=us(b.delim,o,s,b.options,a.mode,[]))}var $;if(a.right===".")$=hi(n,["mclose"]);else{var M=a.rightColor?n.withColor(a.rightColor):n;$=us(a.right,o,s,M,a.mode,["mclose"])}return r.push($),Y(["minner"],r,n)},mathmlBuilder:(a,n)=>{ud(a);var r=It(a.body,n);if(a.left!=="."){var o=new te("mo",[rn(a.left,a.mode)]);o.setAttribute("fence","true"),r.unshift(o)}if(a.right!=="."){var s=new te("mo",[rn(a.right,a.mode)]);s.setAttribute("fence","true"),a.rightColor&&s.setAttribute("mathcolor",a.rightColor),r.push(s)}return Ds(r)}});se({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var r=no(n[0],a);if(!a.parser.leftrightDepth)throw new ee("\\middle without preceding \\left",r);return{type:"middle",mode:a.parser.mode,delim:r.text}},htmlBuilder:(a,n)=>{var r;if(a.delim===".")r=hi(n,[]);else{r=d4(a.delim,1,n,a.mode,[]);var o={delim:a.delim,options:n};r.isMiddle=o}return r},mathmlBuilder:(a,n)=>{var r=a.delim==="\\vert"||a.delim==="|"?rn("|","text"):rn(a.delim,a.mode),o=new te("mo",[r]);return o.setAttribute("fence","true"),o.setAttribute("lspace","0.05em"),o.setAttribute("rspace","0.05em"),o}});var Is=(a,n)=>{var r=y0(Ne(a.body,n),n),o=a.label.slice(1),s=n.sizeMultiplier,u,f=0,p=Ln(a.body);if(o==="sout")u=Y(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/s,f=-.5*n.fontMetrics().xHeight;else if(o==="phase"){var v=nt({number:.6,unit:"pt"},n),w=nt({number:.35,unit:"ex"},n),b=n.havingBaseSizing();s=s/b.sizeMultiplier;var $=r.height+r.depth+v+w;r.style.paddingLeft=ie($/2+v);var M=Math.floor(1e3*$*s),z=y6(M),P=new Nn([new vr("phase",z)],{width:"400em",height:ie(M/1e3),viewBox:"0 0 400000 "+M,preserveAspectRatio:"xMinYMin slice"});u=gr(["hide-tail"],[P],n),u.style.height=ie($),f=r.depth+v+w}else{/cancel/.test(o)?p||r.classes.push("cancel-pad"):o==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var R=0,B=0,H=0;/box/.test(o)?(H=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),R=n.fontMetrics().fboxsep+(o==="colorbox"?0:H),B=R):o==="angl"?(H=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),R=4*H,B=Math.max(0,.25-r.depth)):(R=p?.2:0,B=R),u=Z6(r,o,R,B,n),/fbox|boxed|fcolorbox/.test(o)?(u.style.borderStyle="solid",u.style.borderWidth=ie(H)):o==="angl"&&H!==.049&&(u.style.borderTopWidth=ie(H),u.style.borderRightWidth=ie(H)),f=r.depth+B,a.backgroundColor&&(u.style.backgroundColor=a.backgroundColor,a.borderColor&&(u.style.borderColor=a.borderColor))}var X;if(a.backgroundColor)X=Fe({positionType:"individualShift",children:[{type:"elem",elem:u,shift:f},{type:"elem",elem:r,shift:0}]});else{var F=/cancel|phase/.test(o)?["svg-align"]:[];X=Fe({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:f,wrapperClasses:F}]})}return/cancel/.test(o)&&(X.height=r.height,X.depth=r.depth),/cancel/.test(o)&&!p?Y(["mord","cancel-lap"],[X],n):Y(["mord"],[X],n)},Fs=(a,n)=>{var r=0,o=new te(a.label.includes("colorbox")?"mpadded":"menclose",[Ve(a.body,n)]);switch(a.label){case"\\cancel":o.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":o.setAttribute("notation","downdiagonalstrike");break;case"\\phase":o.setAttribute("notation","phasorangle");break;case"\\sout":o.setAttribute("notation","horizontalstrike");break;case"\\fbox":o.setAttribute("notation","box");break;case"\\angl":o.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,o.setAttribute("width","+"+2*r+"pt"),o.setAttribute("height","+"+2*r+"pt"),o.setAttribute("lspace",r+"pt"),o.setAttribute("voffset",r+"pt"),a.label==="\\fcolorbox"){var s=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);o.setAttribute("style","border: "+s+"em solid "+String(a.borderColor))}break;case"\\xcancel":o.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return a.backgroundColor&&o.setAttribute("mathbackground",a.backgroundColor),o};se({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(a,n,r){var{parser:o,funcName:s}=a,u=Ce(n[0],"color-token").color,f=n[1];return{type:"enclose",mode:o.mode,label:s,backgroundColor:u,body:f}},htmlBuilder:Is,mathmlBuilder:Fs});se({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(a,n,r){var{parser:o,funcName:s}=a,u=Ce(n[0],"color-token").color,f=Ce(n[1],"color-token").color,p=n[2];return{type:"enclose",mode:o.mode,label:s,backgroundColor:f,borderColor:u,body:p}},htmlBuilder:Is,mathmlBuilder:Fs});se({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(a,n){var{parser:r}=a;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});se({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];return{type:"enclose",mode:r.mode,label:o,body:s}},htmlBuilder:Is,mathmlBuilder:Fs});se({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(a,n){var{parser:r}=a;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var m4={};function wn(a){for(var{type:n,names:r,props:o,handler:s,htmlBuilder:u,mathmlBuilder:f}=a,p={type:n,numArgs:o.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},v=0;v<r.length;++v)m4[r[v]]=p;u&&(Ua[n]=u),f&&(Va[n]=f)}var p4={};function x(a,n){p4[a]=n}function cd(a){var n=[];a.consumeSpaces();var r=a.fetch().text;for(r==="\\relax"&&(a.consume(),a.consumeSpaces(),r=a.fetch().text);r==="\\hline"||r==="\\hdashline";)a.consume(),n.push(r==="\\hdashline"),a.consumeSpaces(),r=a.fetch().text;return n}var ro=a=>{var n=a.parser.settings;if(!n.displayMode)throw new ee("{"+a.envName+"} can be used only in display mode.")},p7=new Set(["gather","gather*"]);function Hs(a){if(!a.includes("ed"))return!a.includes("*")}function xr(a,n,r){var{hskipBeforeAndAfter:o,addJot:s,cols:u,arraystretch:f,colSeparationType:p,autoTag:v,singleRow:w,emptySingleRow:b,maxNumCols:$,leqno:M}=n;if(a.gullet.beginGroup(),w||a.gullet.macros.set("\\cr","\\\\\\relax"),!f){var z=a.gullet.expandMacroAsText("\\arraystretch");if(z==null)f=1;else if(f=parseFloat(z),!f||f<0)throw new ee("Invalid \\arraystretch: "+z)}a.gullet.beginGroup();var P=[],R=[P],B=[],H=[],X=v!=null?[]:void 0;function F(){v&&a.gullet.macros.set("\\@eqnsw","1",!0)}function L(){X&&(a.gullet.macros.get("\\df@tag")?(X.push(a.subparse([new Vt("\\df@tag")])),a.gullet.macros.set("\\df@tag",void 0,!0)):X.push(!!v&&a.gullet.macros.get("\\@eqnsw")==="1"))}for(F(),H.push(cd(a));;){var V=a.parseExpression(!1,w?"\\end":"\\\\");a.gullet.endGroup(),a.gullet.beginGroup(),V={type:"ordgroup",mode:a.mode,body:V},r&&(V={type:"styling",mode:a.mode,style:r,body:[V]}),P.push(V);var ae=a.fetch().text;if(ae==="&"){if($&&P.length===$){if(w||p)throw new ee("Too many tab characters: &",a.nextToken);a.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}a.consume()}else if(ae==="\\end"){L(),P.length===1&&V.type==="styling"&&V.body[0].body.length===0&&(R.length>1||!b)&&R.pop(),H.length<R.length+1&&H.push([]);break}else if(ae==="\\\\"){a.consume();var O=void 0;a.gullet.future().text!==" "&&(O=a.parseSizeGroup(!0)),B.push(O?O.value:null),L(),H.push(cd(a)),P=[],R.push(P),F()}else throw new ee("Expected & or \\\\ or \\cr or \\end",a.nextToken)}return a.gullet.endGroup(),a.gullet.endGroup(),{type:"array",mode:a.mode,addJot:s,arraystretch:f,body:R,cols:u,rowGaps:B,hskipBeforeAndAfter:o,hLinesBeforeRow:H,colSeparationType:p,tags:X,leqno:M}}function Ws(a){return a.slice(0,1)==="d"?"display":"text"}var bn=function(n,r){var o,s,u=n.body.length,f=n.hLinesBeforeRow,p=0,v=new Array(u),w=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,M=5*$;if(n.colSeparationType&&n.colSeparationType==="small"){var z=r.havingStyle(ke.SCRIPT).sizeMultiplier;M=.2778*(z/r.sizeMultiplier)}var P=n.colSeparationType==="CD"?nt({number:3,unit:"ex"},r):12*$,R=3*$,B=n.arraystretch*P,H=.7*B,X=.3*B,F=0;function L(bt){for(var $t=0;$t<bt.length;++$t)$t>0&&(F+=.25),w.push({pos:F,isDashed:bt[$t]})}for(L(f[0]),o=0;o<n.body.length;++o){var V=n.body[o],ae=H,O=X;p<V.length&&(p=V.length);var J=new Array(V.length);for(s=0;s<V.length;++s){var ne=Ne(V[s],r);O<ne.depth&&(O=ne.depth),ae<ne.height&&(ae=ne.height),J[s]=ne}var we=n.rowGaps[o],ze=0;we&&(ze=nt(we,r),ze>0&&(ze+=X,O<ze&&(O=ze),ze=0)),n.addJot&&(O+=R),J.height=ae,J.depth=O,F+=ae,J.pos=F,F+=O+ze,v[o]=J,L(f[o+1])}var Te=F/2+r.fontMetrics().axisHeight,We=n.cols||[],He=[],Se,Re,Ae=[];if(n.tags&&n.tags.some(bt=>bt))for(o=0;o<u;++o){var Z=v[o],pe=Z.pos-Te,K=n.tags[o],E=void 0;K===!0?E=Y(["eqn-num"],[],r):K===!1?E=Y([],[],r):E=Y([],pt(K,r,!0),r),E.depth=Z.depth,E.height=Z.height,Ae.push({type:"elem",elem:E,shift:pe})}for(s=0,Re=0;s<p||Re<We.length;++s,++Re){for(var I=We[Re]||{},ve=!0;I.type==="separator";){if(ve||(Se=Y(["arraycolsep"],[]),Se.style.width=ie(r.fontMetrics().doubleRuleSep),He.push(Se)),I.separator==="|"||I.separator===":"){var $e=I.separator==="|"?"solid":"dashed",Me=Y(["vertical-separator"],[],r);Me.style.height=ie(F),Me.style.borderRightWidth=ie(b),Me.style.borderRightStyle=$e,Me.style.margin="0 "+ie(-b/2);var qe=F-Te;qe&&(Me.style.verticalAlign=ie(-qe)),He.push(Me)}else throw new ee("Invalid separator type: "+I.separator);Re++,I=We[Re]||{},ve=!1}if(!(s>=p)){var je=void 0;if(s>0||n.hskipBeforeAndAfter){var Pe;je=(Pe=I.pregap)!=null?Pe:M,je!==0&&(Se=Y(["arraycolsep"],[]),Se.style.width=ie(je),He.push(Se))}var De=[];for(o=0;o<u;++o){var at=v[o],Yt=at[s];if(Yt){var Nr=at.pos-Te;Yt.depth=at.depth,Yt.height=at.height,De.push({type:"elem",elem:Yt,shift:Nr})}}if(De=Fe({positionType:"individualShift",children:De}),De=Y(["col-align-"+(I.align||"c")],[De]),He.push(De),s<p-1||n.hskipBeforeAndAfter){var fn;je=(fn=I.postgap)!=null?fn:M,je!==0&&(Se=Y(["arraycolsep"],[]),Se.style.width=ie(je),He.push(Se))}}}if(v=Y(["mtable"],He),w.length>0){for(var _n=g0("hline",r,b),kn=g0("hdashline",r,b),Fn=[{type:"elem",elem:v,shift:0}];w.length>0;){var Hn=w.pop(),zn=Hn.pos-Te;Hn.isDashed?Fn.push({type:"elem",elem:kn,shift:zn}):Fn.push({type:"elem",elem:_n,shift:zn})}v=Fe({positionType:"individualShift",children:Fn})}if(Ae.length===0)return Y(["mord"],[v],r);var Sn=Fe({positionType:"individualShift",children:Ae});return Sn=Y(["tag"],[Sn],r),In([v,Sn])},v7={c:"center ",l:"left ",r:"right "},$n=function(n,r){for(var o=[],s=new te("mtd",[],["mtr-glue"]),u=new te("mtd",[],["mml-eqn-num"]),f=0;f<n.body.length;f++){for(var p=n.body[f],v=[],w=0;w<p.length;w++)v.push(new te("mtd",[Ve(p[w],r)]));n.tags&&n.tags[f]&&(v.unshift(s),v.push(s),n.leqno?v.unshift(u):v.push(u)),o.push(new te("mtr",v))}var b=new te("mtable",o),$=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);b.setAttribute("rowspacing",ie($));var M="",z="";if(n.cols&&n.cols.length>0){var P=n.cols,R="",B=!1,H=0,X=P.length;P[0].type==="separator"&&(M+="top ",H=1),P[P.length-1].type==="separator"&&(M+="bottom ",X-=1);for(var F=H;F<X;F++)P[F].type==="align"?(z+=v7[P[F].align],B&&(R+="none "),B=!0):P[F].type==="separator"&&B&&(R+=P[F].separator==="|"?"solid ":"dashed ",B=!1);b.setAttribute("columnalign",z.trim()),/[sd]/.test(R)&&b.setAttribute("columnlines",R.trim())}if(n.colSeparationType==="align"){for(var L=n.cols||[],V="",ae=1;ae<L.length;ae++)V+=ae%2?"0em ":"1em ";b.setAttribute("columnspacing",V.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var O="",J=n.hLinesBeforeRow;M+=J[0].length>0?"left ":"",M+=J[J.length-1].length>0?"right ":"";for(var ne=1;ne<J.length-1;ne++)O+=J[ne].length===0?"none ":J[ne][0]?"dashed ":"solid ";return/[sd]/.test(O)&&b.setAttribute("rowlines",O.trim()),M!==""&&(b=new te("menclose",[b]),b.setAttribute("notation",M.trim())),n.arraystretch&&n.arraystretch<1&&(b=new te("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},v4=function(n,r){n.envName.includes("ed")||ro(n);var o=[],s=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",f=xr(n.parser,{cols:o,addJot:!0,autoTag:u?void 0:Hs(n.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),p,v=0,w={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",$=0;$<r[0].body.length;$++){var M=Ce(r[0].body[$],"textord");b+=M.text}p=Number(b),v=p*2}var z=!v;f.body.forEach(function(H){for(var X=1;X<H.length;X+=2){var F=Ce(H[X],"styling"),L=Ce(F.body[0],"ordgroup");L.body.unshift(w)}if(z)v<H.length&&(v=H.length);else{var V=H.length/2;if(p<V)throw new ee("Too many math in a row: "+("expected "+p+", but got "+V),H[0])}});for(var P=0;P<v;++P){var R="r",B=0;P%2===1?R="l":P>0&&z&&(B=1),o[P]={type:"align",align:R,pregap:B,postgap:0}}return f.colSeparationType=z?"align":"alignat",f};wn({type:"array",names:["array","darray"],props:{numArgs:1},handler(a,n){var r=eo(n[0]),o=r?[n[0]]:Ce(n[0],"ordgroup").body,s=o.map(function(f){var p=Ns(f),v=p.text;if("lcr".includes(v))return{type:"align",align:v};if(v==="|")return{type:"separator",separator:"|"};if(v===":")return{type:"separator",separator:":"};throw new ee("Unknown column alignment: "+v,f)}),u={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return xr(a.parser,u,Ws(a.envName))},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(a){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[a.envName.replace("*","")],r="c",o={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(a.envName.charAt(a.envName.length-1)==="*"){var s=a.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new ee("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),o.cols=[{type:"align",align:r}]}}var u=xr(a.parser,o,Ws(a.envName)),f=Math.max(0,...u.body.map(p=>p.length));return u.cols=new Array(f).fill({type:"align",align:r}),n?{type:"leftright",mode:a.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(a){var n={arraystretch:.5},r=xr(a.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["subarray"],props:{numArgs:1},handler(a,n){var r=eo(n[0]),o=r?[n[0]]:Ce(n[0],"ordgroup").body,s=o.map(function(f){var p=Ns(f),v=p.text;if("lc".includes(v))return{type:"align",align:v};throw new ee("Unknown column alignment: "+v,f)});if(s.length>1)throw new ee("{subarray} can contain only one column");var u={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=xr(a.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new ee("{subarray} can contain only one column");return u},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(a){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=xr(a.parser,n,Ws(a.envName));return{type:"leftright",mode:a.mode,body:[r],left:a.envName.includes("r")?".":"\\{",right:a.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:v4,htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(a){p7.has(a.envName)&&ro(a);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Hs(a.envName),emptySingleRow:!0,leqno:a.parser.settings.leqno};return xr(a.parser,n,"display")},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:v4,htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(a){ro(a);var n={autoTag:Hs(a.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:a.parser.settings.leqno};return xr(a.parser,n,"display")},htmlBuilder:bn,mathmlBuilder:$n});wn({type:"array",names:["CD"],props:{numArgs:0},handler(a){return ro(a),r7(a.parser)},htmlBuilder:bn,mathmlBuilder:$n});x("\\nonumber","\\gdef\\@eqnsw{0}");x("\\notag","\\nonumber");se({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(a,n){throw new ee(a.funcName+" valid only within array environment")}});var dd=m4;se({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];if(s.type!=="ordgroup")throw new ee("Invalid environment name",s);for(var u="",f=0;f<s.body.length;++f)u+=Ce(s.body[f],"textord").text;if(o==="\\begin"){if(!dd.hasOwnProperty(u))throw new ee("No such environment: "+u,s);var p=dd[u],{args:v,optArgs:w}=r.parseArguments("\\begin{"+u+"}",p),b={mode:r.mode,envName:u,parser:r},$=p.handler(b,v,w);r.expect("\\end",!1);var M=r.nextToken,z=Ce(r.parseFunction(),"environment");if(z.name!==u)throw new ee("Mismatch: \\begin{"+u+"} matched by \\end{"+z.name+"}",M);return $}return{type:"environment",mode:r.mode,name:u,nameGroup:s}}});var g4=(a,n)=>{var r=a.font,o=n.withFont(r);return Ne(a.body,o)},y4=(a,n)=>{var r=a.font,o=n.withFont(r);return Ve(a.body,o)},fd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};se({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=Ga(n[0]),u=o;return u in fd&&(u=fd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:s}},htmlBuilder:g4,mathmlBuilder:y4});se({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"mclass",mode:r.mode,mclass:to(o),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:o}],isCharacterBox:Ln(o)}}});se({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(a,n)=>{var{parser:r,funcName:o,breakOnTokenText:s}=a,{mode:u}=r,f=r.parseExpression(!0,s),p="math"+o.slice(1);return{type:"font",mode:u,font:p,body:{type:"ordgroup",mode:r.mode,body:f}}},htmlBuilder:g4,mathmlBuilder:y4});var g7=(a,n)=>{var r=n.style,o=r.fracNum(),s=r.fracDen(),u;u=n.havingStyle(o);var f=Ne(a.numer,u,n);if(a.continued){var p=8.5/n.fontMetrics().ptPerEm,v=3.5/n.fontMetrics().ptPerEm;f.height=f.height<p?p:f.height,f.depth=f.depth<v?v:f.depth}u=n.havingStyle(s);var w=Ne(a.denom,u,n),b,$,M;a.hasBarLine?(a.barSize?($=nt(a.barSize,n),b=g0("frac-line",n,$)):b=g0("frac-line",n),$=b.height,M=b.height):(b=null,$=0,M=n.fontMetrics().defaultRuleThickness);var z,P,R;r.size===ke.DISPLAY.size?(z=n.fontMetrics().num1,$>0?P=3*M:P=7*M,R=n.fontMetrics().denom1):($>0?(z=n.fontMetrics().num2,P=M):(z=n.fontMetrics().num3,P=3*M),R=n.fontMetrics().denom2);var B;if(b){var X=n.fontMetrics().axisHeight;z-f.depth-(X+.5*$)<P&&(z+=P-(z-f.depth-(X+.5*$))),X-.5*$-(w.height-R)<P&&(R+=P-(X-.5*$-(w.height-R)));var F=-(X-.5*$);B=Fe({positionType:"individualShift",children:[{type:"elem",elem:w,shift:R},{type:"elem",elem:b,shift:F},{type:"elem",elem:f,shift:-z}]})}else{var H=z-f.depth-(w.height-R);H<P&&(z+=.5*(P-H),R+=.5*(P-H)),B=Fe({positionType:"individualShift",children:[{type:"elem",elem:w,shift:R},{type:"elem",elem:f,shift:-z}]})}u=n.havingStyle(r),B.height*=u.sizeMultiplier/n.sizeMultiplier,B.depth*=u.sizeMultiplier/n.sizeMultiplier;var L;r.size===ke.DISPLAY.size?L=n.fontMetrics().delim1:r.size===ke.SCRIPTSCRIPT.size?L=n.havingStyle(ke.SCRIPT).fontMetrics().delim2:L=n.fontMetrics().delim2;var V,ae;return a.leftDelim==null?V=hi(n,["mopen"]):V=_s(a.leftDelim,L,!0,n.havingStyle(r),a.mode,["mopen"]),a.continued?ae=Y([]):a.rightDelim==null?ae=hi(n,["mclose"]):ae=_s(a.rightDelim,L,!0,n.havingStyle(r),a.mode,["mclose"]),Y(["mord"].concat(u.sizingClasses(n)),[V,Y(["mfrac"],[B]),ae],n)},y7=(a,n)=>{var r=new te("mfrac",[Ve(a.numer,n),Ve(a.denom,n)]);if(!a.hasBarLine)r.setAttribute("linethickness","0px");else if(a.barSize){var o=nt(a.barSize,n);r.setAttribute("linethickness",ie(o))}if(a.leftDelim!=null||a.rightDelim!=null){var s=[];if(a.leftDelim!=null){var u=new te("mo",[new dt(a.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),s.push(u)}if(s.push(r),a.rightDelim!=null){var f=new te("mo",[new dt(a.rightDelim.replace("\\",""))]);f.setAttribute("fence","true"),s.push(f)}return Ds(s)}return r},x4=(a,n)=>{if(!n)return a;var r={type:"styling",mode:a.mode,style:n,body:[a]};return r};se({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0],u=n[1],f,p=null,v=null;switch(o){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":f=!0;break;case"\\\\atopfrac":f=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":f=!1,p="(",v=")";break;case"\\\\bracefrac":f=!1,p="\\{",v="\\}";break;case"\\\\brackfrac":f=!1,p="[",v="]";break;default:throw new Error("Unrecognized genfrac command")}var w=o==="\\cfrac",b=null;return w||o.startsWith("\\d")?b="display":o.startsWith("\\t")&&(b="text"),x4({type:"genfrac",mode:r.mode,numer:s,denom:u,continued:w,hasBarLine:f,leftDelim:p,rightDelim:v,barSize:null},b)},htmlBuilder:g7,mathmlBuilder:y7});se({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(a){var{parser:n,funcName:r,token:o}=a,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:s,token:o}}});var hd=["display","text","script","scriptscript"],md=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};se({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(a,n){var{parser:r}=a,o=n[4],s=n[5],u=Ga(n[0]),f=u.type==="atom"&&u.family==="open"?md(u.text):null,p=Ga(n[1]),v=p.type==="atom"&&p.family==="close"?md(p.text):null,w=Ce(n[2],"size"),b,$=null;w.isBlank?b=!0:($=w.value,b=$.number>0);var M=null,z=n[3];if(z.type==="ordgroup"){if(z.body.length>0){var P=Ce(z.body[0],"textord");M=hd[Number(P.text)]}}else z=Ce(z,"textord"),M=hd[Number(z.text)];return x4({type:"genfrac",mode:r.mode,numer:o,denom:s,continued:!1,hasBarLine:b,barSize:$,leftDelim:f,rightDelim:v},M)}});se({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(a,n){var{parser:r,funcName:o,token:s}=a;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ce(n[0],"size").value,token:s}}});se({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0],u=Ce(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var f=n[2],p=u.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:f,continued:!1,hasBarLine:p,barSize:u,leftDelim:null,rightDelim:null}}});var w4=(a,n)=>{var r=n.style,o,s;a.type==="supsub"?(o=a.sup?Ne(a.sup,n.havingStyle(r.sup()),n):Ne(a.sub,n.havingStyle(r.sub()),n),s=Ce(a.base,"horizBrace")):s=Ce(a,"horizBrace");var u=Ne(s.base,n.havingBaseStyle(ke.DISPLAY)),f=Ja(s,n),p;if(s.isOver?(p=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:f}]}),p.children[0].children[0].children[1].classes.push("svg-align")):(p=Fe({positionType:"bottom",positionData:u.depth+.1+f.height,children:[{type:"elem",elem:f},{type:"kern",size:.1},{type:"elem",elem:u}]}),p.children[0].children[0].children[0].classes.push("svg-align")),o){var v=Y(["mord",s.isOver?"mover":"munder"],[p],n);s.isOver?p=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:v},{type:"kern",size:.2},{type:"elem",elem:o}]}):p=Fe({positionType:"bottom",positionData:v.depth+.2+o.height+o.depth,children:[{type:"elem",elem:o},{type:"kern",size:.2},{type:"elem",elem:v}]})}return Y(["mord",s.isOver?"mover":"munder"],[p],n)},x7=(a,n)=>{var r=Za(a.label);return new te(a.isOver?"mover":"munder",[Ve(a.base,n),r])};se({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(a,n){var{parser:r,funcName:o}=a;return{type:"horizBrace",mode:r.mode,label:o,isOver:/^\\over/.test(o),base:n[0]}},htmlBuilder:w4,mathmlBuilder:x7});se({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[1],s=Ce(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:st(o)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(a,n)=>{var r=pt(a.body,n,!1);return D6(a.href,[],r,n)},mathmlBuilder:(a,n)=>{var r=yr(a.body,n);return r instanceof te||(r=new te("mrow",[r])),r.setAttribute("href",a.href),r}});se({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=Ce(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:o}))return r.formatUnsupportedCmd("\\url");for(var s=[],u=0;u<o.length;u++){var f=o[u];f==="~"&&(f="\\textasciitilde"),s.push({type:"textord",mode:"text",text:f})}var p={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:o,body:st(p)}}});se({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(a,n){var{parser:r}=a;return{type:"hbox",mode:r.mode,body:st(n[0])}},htmlBuilder(a,n){var r=pt(a.body,n,!1);return In(r)},mathmlBuilder(a,n){return new te("mrow",It(a.body,n))}});se({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(a,n)=>{var{parser:r,funcName:o,token:s}=a,u=Ce(n[0],"raw").string,f=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var p,v={};switch(o){case"\\htmlClass":v.class=u,p={command:"\\htmlClass",class:u};break;case"\\htmlId":v.id=u,p={command:"\\htmlId",id:u};break;case"\\htmlStyle":v.style=u,p={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var w=u.split(","),b=0;b<w.length;b++){var $=w[b],M=$.indexOf("=");if(M<0)throw new ee("\\htmlData key/value '"+$+"' missing equals sign");var z=$.slice(0,M),P=$.slice(M+1);v["data-"+z.trim()]=P}p={command:"\\htmlData",attributes:v};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(p)?{type:"html",mode:r.mode,attributes:v,body:st(f)}:r.formatUnsupportedCmd(o)},htmlBuilder:(a,n)=>{var r=pt(a.body,n,!1),o=["enclosing"];a.attributes.class&&o.push(...a.attributes.class.trim().split(/\s+/));var s=Y(o,r,n);for(var u in a.attributes)u!=="class"&&a.attributes.hasOwnProperty(u)&&s.setAttribute(u,a.attributes[u]);return s},mathmlBuilder:(a,n)=>yr(a.body,n)});se({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a;return{type:"htmlmathml",mode:r.mode,html:st(n[0]),mathml:st(n[1])}},htmlBuilder:(a,n)=>{var r=pt(a.html,n,!1);return In(r)},mathmlBuilder:(a,n)=>yr(a.mathml,n)});var cs=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new ee("Invalid size: '"+n+"' in \\includegraphics");var o={number:+(r[1]+r[2]),unit:r[3]};if(!Nd(o))throw new ee("Invalid unit: '"+o.unit+"' in \\includegraphics.");return o};se({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(a,n,r)=>{var{parser:o}=a,s={number:0,unit:"em"},u={number:.9,unit:"em"},f={number:0,unit:"em"},p="";if(r[0])for(var v=Ce(r[0],"raw").string,w=v.split(","),b=0;b<w.length;b++){var $=w[b].split("=");if($.length===2){var M=$[1].trim();switch($[0].trim()){case"alt":p=M;break;case"width":s=cs(M);break;case"height":u=cs(M);break;case"totalheight":f=cs(M);break;default:throw new ee("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var z=Ce(n[0],"url").url;return p===""&&(p=z,p=p.replace(/^.*[\\/]/,""),p=p.substring(0,p.lastIndexOf("."))),o.settings.isTrusted({command:"\\includegraphics",url:z})?{type:"includegraphics",mode:o.mode,alt:p,width:s,height:u,totalheight:f,src:z}:o.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(a,n)=>{var r=nt(a.height,n),o=0;a.totalheight.number>0&&(o=nt(a.totalheight,n)-r);var s=0;a.width.number>0&&(s=nt(a.width,n));var u={height:ie(r+o)};s>0&&(u.width=ie(s)),o>0&&(u.verticalAlign=ie(-o));var f=new T6(a.src,a.alt,u);return f.height=r,f.depth=o,f},mathmlBuilder:(a,n)=>{var r=new te("mglyph",[]);r.setAttribute("alt",a.alt);var o=nt(a.height,n),s=0;if(a.totalheight.number>0&&(s=nt(a.totalheight,n)-o,r.setAttribute("valign",ie(-s))),r.setAttribute("height",ie(o+s)),a.width.number>0){var u=nt(a.width,n);r.setAttribute("width",ie(u))}return r.setAttribute("src",a.src),r}});se({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(a,n){var{parser:r,funcName:o}=a,s=Ce(n[0],"size");if(r.settings.strict){var u=o[1]==="m",f=s.value.unit==="mu";u?(f||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" works only in math mode")):f&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(a,n){return Wd(a.dimension,n)},mathmlBuilder(a,n){var r=nt(a.dimension,n);return new Qd(r)}});se({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0];return{type:"lap",mode:r.mode,alignment:o.slice(5),body:s}},htmlBuilder:(a,n)=>{var r;a.alignment==="clap"?(r=Y([],[Ne(a.body,n)]),r=Y(["inner"],[r],n)):r=Y(["inner"],[Ne(a.body,n)]);var o=Y(["fix"],[]),s=Y([a.alignment],[r,o],n),u=Y(["strut"]);return u.style.height=ie(s.height+s.depth),s.depth&&(u.style.verticalAlign=ie(-s.depth)),s.children.unshift(u),s=Y(["thinbox"],[s],n),Y(["mord","vbox"],[s],n)},mathmlBuilder:(a,n)=>{var r=new te("mpadded",[Ve(a.body,n)]);if(a.alignment!=="rlap"){var o=a.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",o+"width")}return r.setAttribute("width","0px"),r}});se({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(a,n){var{funcName:r,parser:o}=a,s=o.mode;o.switchMode("math");var u=r==="\\("?"\\)":"$",f=o.parseExpression(!1,u);return o.expect(u),o.switchMode(s),{type:"styling",mode:o.mode,style:"text",body:f}}});se({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(a,n){throw new ee("Mismatched "+a.funcName)}});var pd=(a,n)=>{switch(n.style.size){case ke.DISPLAY.size:return a.display;case ke.TEXT.size:return a.text;case ke.SCRIPT.size:return a.script;case ke.SCRIPTSCRIPT.size:return a.scriptscript;default:return a.text}};se({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(a,n)=>{var{parser:r}=a;return{type:"mathchoice",mode:r.mode,display:st(n[0]),text:st(n[1]),script:st(n[2]),scriptscript:st(n[3])}},htmlBuilder:(a,n)=>{var r=pd(a,n),o=pt(r,n,!1);return In(o)},mathmlBuilder:(a,n)=>{var r=pd(a,n);return yr(r,n)}});var b4=(a,n,r,o,s,u,f)=>{a=Y([],[a]);var p=r&&Ln(r),v,w;if(n){var b=Ne(n,o.havingStyle(s.sup()),o);w={elem:b,kern:Math.max(o.fontMetrics().bigOpSpacing1,o.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var $=Ne(r,o.havingStyle(s.sub()),o);v={elem:$,kern:Math.max(o.fontMetrics().bigOpSpacing2,o.fontMetrics().bigOpSpacing4-$.height)}}var M;if(w&&v){var z=o.fontMetrics().bigOpSpacing5+v.elem.height+v.elem.depth+v.kern+a.depth+f;M=Fe({positionType:"bottom",positionData:z,children:[{type:"kern",size:o.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:ie(-u)},{type:"kern",size:v.kern},{type:"elem",elem:a},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:ie(u)},{type:"kern",size:o.fontMetrics().bigOpSpacing5}]})}else if(v){var P=a.height-f;M=Fe({positionType:"top",positionData:P,children:[{type:"kern",size:o.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:ie(-u)},{type:"kern",size:v.kern},{type:"elem",elem:a}]})}else if(w){var R=a.depth+f;M=Fe({positionType:"bottom",positionData:R,children:[{type:"elem",elem:a},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:ie(u)},{type:"kern",size:o.fontMetrics().bigOpSpacing5}]})}else return a;var B=[M];if(v&&u!==0&&!p){var H=Y(["mspace"],[],o);H.style.marginRight=ie(u),B.unshift(H)}return Y(["mop","op-limits"],B,o)},$4=new Set(["\\smallint"]),b0=(a,n)=>{var r,o,s=!1,u;a.type==="supsub"?(r=a.sup,o=a.sub,u=Ce(a.base,"op"),s=!0):u=Ce(a,"op");var f=n.style,p=!1;f.size===ke.DISPLAY.size&&u.symbol&&!$4.has(u.name)&&(p=!0);var v;if(u.symbol){var w=p?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),v=qt(u.name,w,"math",n,["mop","op-symbol",p?"large-op":"small-op"]),b.length>0){var $=v.italic,M=Vd(b+"Size"+(p?"2":"1"),n);v=Fe({positionType:"individualShift",children:[{type:"elem",elem:v,shift:0},{type:"elem",elem:M,shift:p?.08:0}]}),u.name="\\"+b,v.classes.unshift("mop"),v.italic=$}}else if(u.body){var z=pt(u.body,n,!0);z.length===1&&z[0]instanceof nn?(v=z[0],v.classes[0]="mop"):v=Y(["mop"],z,n)}else{for(var P=[],R=1;R<u.name.length;R++)P.push(js(u.name[R],u.mode,n));v=Y(["mop"],P,n)}var B=0,H=0;return(v instanceof nn||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(B=(v.height-v.depth)/2-n.fontMetrics().axisHeight,H=v.italic),s?b4(v,r,o,n,f,H,B):(B&&(v.style.position="relative",v.style.top=ie(B)),v)},vi=(a,n)=>{var r;if(a.symbol)r=new te("mo",[rn(a.name,a.mode)]),$4.has(a.name)&&r.setAttribute("largeop","false");else if(a.body)r=new te("mo",It(a.body,n));else{r=new te("mi",[new dt(a.name.slice(1))]);var o=new te("mo",[rn("⁡","text")]);a.parentIsSupSub?r=new te("mrow",[r,o]):r=Xd([r,o])}return r},w7={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};se({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=o;return s.length===1&&(s=w7[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:b0,mathmlBuilder:vi});se({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:st(o)}},htmlBuilder:b0,mathmlBuilder:vi});var b7={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};se({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(a){var{parser:n,funcName:r}=a;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:b0,mathmlBuilder:vi});se({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(a){var{parser:n,funcName:r}=a;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:b0,mathmlBuilder:vi});se({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(a){var{parser:n,funcName:r}=a,o=r;return o.length===1&&(o=b7[o]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:o}},htmlBuilder:b0,mathmlBuilder:vi});var _4=(a,n)=>{var r,o,s=!1,u;a.type==="supsub"?(r=a.sup,o=a.sub,u=Ce(a.base,"operatorname"),s=!0):u=Ce(a,"operatorname");var f;if(u.body.length>0){for(var p=u.body.map($=>{var M=$.text;return typeof M=="string"?{type:"textord",mode:$.mode,text:M}:$}),v=pt(p,n.withFont("mathrm"),!0),w=0;w<v.length;w++){var b=v[w];b instanceof nn&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}f=Y(["mop"],v,n)}else f=Y(["mop"],[],n);return s?b4(f,r,o,n,n.style,0,0):f},$7=(a,n)=>{for(var r=It(a.body,n.withFont("mathrm")),o=!0,s=0;s<r.length;s++){var u=r[s];if(!(u instanceof Qd))if(u instanceof te)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var f=u.children[0];u.children.length===1&&f instanceof dt?f.text=f.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):o=!1;break}default:o=!1}else o=!1}if(o){var p=r.map(b=>b.toText()).join("");r=[new dt(p)]}var v=new te("mi",r);v.setAttribute("mathvariant","normal");var w=new te("mo",[rn("⁡","text")]);return a.parentIsSupSub?new te("mrow",[v,w]):Xd([v,w])};se({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(a,n)=>{var{parser:r,funcName:o}=a,s=n[0];return{type:"operatorname",mode:r.mode,body:st(s),alwaysHandleSupSub:o==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:_4,mathmlBuilder:$7});x("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Br({type:"ordgroup",htmlBuilder(a,n){return a.semisimple?In(pt(a.body,n,!1)):Y(["mord"],pt(a.body,n,!0),n)},mathmlBuilder(a,n){return yr(a.body,n,!0)}});se({type:"overline",names:["\\overline"],props:{numArgs:1},handler(a,n){var{parser:r}=a,o=n[0];return{type:"overline",mode:r.mode,body:o}},htmlBuilder(a,n){var r=Ne(a.body,n.havingCrampedStyle()),o=g0("overline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:o},{type:"kern",size:s}]});return Y(["mord","overline"],[u],n)},mathmlBuilder(a,n){var r=new te("mo",[new dt("‾")]);r.setAttribute("stretchy","true");var o=new te("mover",[Ve(a.body,n),r]);return o.setAttribute("accent","true"),o}});se({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"phantom",mode:r.mode,body:st(o)}},htmlBuilder:(a,n)=>{var r=pt(a.body,n.withPhantom(),!1);return In(r)},mathmlBuilder:(a,n)=>{var r=It(a.body,n);return new te("mphantom",r)}});se({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"hphantom",mode:r.mode,body:o}},htmlBuilder:(a,n)=>{var r=Y([],[Ne(a.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var o=0;o<r.children.length;o++)r.children[o].height=0,r.children[o].depth=0;return r=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),Y(["mord"],[r],n)},mathmlBuilder:(a,n)=>{var r=It(st(a.body),n),o=new te("mphantom",r),s=new te("mpadded",[o]);return s.setAttribute("height","0px"),s.setAttribute("depth","0px"),s}});se({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(a,n)=>{var{parser:r}=a,o=n[0];return{type:"vphantom",mode:r.mode,body:o}},htmlBuilder:(a,n)=>{var r=Y(["inner"],[Ne(a.body,n.withPhantom())]),o=Y(["fix"],[]);return Y(["mord","rlap"],[r,o],n)},mathmlBuilder:(a,n)=>{var r=It(st(a.body),n),o=new te("mphantom",r),s=new te("mpadded",[o]);return s.setAttribute("width","0px"),s}});se({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(a,n){var{parser:r}=a,o=Ce(n[0],"size").value,s=n[1];return{type:"raisebox",mode:r.mode,dy:o,body:s}},htmlBuilder(a,n){var r=Ne(a.body,n),o=nt(a.dy,n);return Fe({positionType:"shift",positionData:-o,children:[{type:"elem",elem:r}]})},mathmlBuilder(a,n){var r=new te("mpadded",[Ve(a.body,n)]),o=a.dy.number+a.dy.unit;return r.setAttribute("voffset",o),r}});se({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(a){var{parser:n}=a;return{type:"internal",mode:n.mode}}});se({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(a,n,r){var{parser:o}=a,s=r[0],u=Ce(n[0],"size"),f=Ce(n[1],"size");return{type:"rule",mode:o.mode,shift:s&&Ce(s,"size").value,width:u.value,height:f.value}},htmlBuilder(a,n){var r=Y(["mord","rule"],[],n),o=nt(a.width,n),s=nt(a.height,n),u=a.shift?nt(a.shift,n):0;return r.style.borderRightWidth=ie(o),r.style.borderTopWidth=ie(s),r.style.bottom=ie(u),r.width=o,r.height=s+u,r.depth=-u,r.maxFontSize=s*1.125*n.sizeMultiplier,r},mathmlBuilder(a,n){var r=nt(a.width,n),o=nt(a.height,n),s=a.shift?nt(a.shift,n):0,u=n.color&&n.getColor()||"black",f=new te("mspace");f.setAttribute("mathbackground",u),f.setAttribute("width",ie(r)),f.setAttribute("height",ie(o));var p=new te("mpadded",[f]);return s>=0?p.setAttribute("height",ie(s)):(p.setAttribute("height",ie(s)),p.setAttribute("depth",ie(-s))),p.setAttribute("voffset",ie(s)),p}});function k4(a,n,r){for(var o=pt(a,n,!1),s=n.sizeMultiplier/r.sizeMultiplier,u=0;u<o.length;u++){var f=o[u].classes.indexOf("sizing");f<0?Array.prototype.push.apply(o[u].classes,n.sizingClasses(r)):o[u].classes[f+1]==="reset-size"+n.size&&(o[u].classes[f+1]="reset-size"+r.size),o[u].height*=s,o[u].depth*=s}return In(o)}var vd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],_7=(a,n)=>{var r=n.havingSize(a.size);return k4(a.body,r,n)};se({type:"sizing",names:vd,props:{numArgs:0,allowedInText:!0},handler:(a,n)=>{var{breakOnTokenText:r,funcName:o,parser:s}=a,u=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:vd.indexOf(o)+1,body:u}},htmlBuilder:_7,mathmlBuilder:(a,n)=>{var r=n.havingSize(a.size),o=It(a.body,r),s=new te("mstyle",o);return s.setAttribute("mathsize",ie(r.sizeMultiplier)),s}});se({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(a,n,r)=>{var{parser:o}=a,s=!1,u=!1,f=r[0]&&Ce(r[0],"ordgroup");if(f)for(var p="",v=0;v<f.body.length;++v){var w=f.body[v];if(p=w.text,p==="t")s=!0;else if(p==="b")u=!0;else{s=!1,u=!1;break}}else s=!0,u=!0;var b=n[0];return{type:"smash",mode:o.mode,body:b,smashHeight:s,smashDepth:u}},htmlBuilder:(a,n)=>{var r=Y([],[Ne(a.body,n)]);if(!a.smashHeight&&!a.smashDepth)return r;if(a.smashHeight&&(r.height=0,r.children))for(var o=0;o<r.children.length;o++)r.children[o].height=0;if(a.smashDepth&&(r.depth=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].depth=0;var u=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return Y(["mord"],[u],n)},mathmlBuilder:(a,n)=>{var r=new te("mpadded",[Ve(a.body,n)]);return a.smashHeight&&r.setAttribute("height","0px"),a.smashDepth&&r.setAttribute("depth","0px"),r}});se({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(a,n,r){var{parser:o}=a,s=r[0],u=n[0];return{type:"sqrt",mode:o.mode,body:u,index:s}},htmlBuilder(a,n){var r=Ne(a.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=y0(r,n);var o=n.fontMetrics(),s=o.defaultRuleThickness,u=s;n.style.id<ke.TEXT.id&&(u=n.fontMetrics().xHeight);var f=s+u/4,p=r.height+r.depth+f+s,{span:v,ruleWidth:w,advanceWidth:b}=u7(p,n),$=v.height-w;$>r.height+r.depth+f&&(f=(f+$-r.height-r.depth)/2);var M=v.height-r.height-f-w;r.style.paddingLeft=ie(b);var z=Fe({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+M)},{type:"elem",elem:v},{type:"kern",size:w}]});if(a.index){var P=n.havingStyle(ke.SCRIPTSCRIPT),R=Ne(a.index,P,n),B=.6*(z.height-z.depth),H=Fe({positionType:"shift",positionData:-B,children:[{type:"elem",elem:R}]}),X=Y(["root"],[H]);return Y(["mord","sqrt"],[X,z],n)}else return Y(["mord","sqrt"],[z],n)},mathmlBuilder(a,n){var{body:r,index:o}=a;return o?new te("mroot",[Ve(r,n),Ve(o,n)]):new te("msqrt",[Ve(r,n)])}});var gd={display:ke.DISPLAY,text:ke.TEXT,script:ke.SCRIPT,scriptscript:ke.SCRIPTSCRIPT};se({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(a,n){var{breakOnTokenText:r,funcName:o,parser:s}=a,u=s.parseExpression(!0,r),f=o.slice(1,o.length-5);return{type:"styling",mode:s.mode,style:f,body:u}},htmlBuilder(a,n){var r=gd[a.style],o=n.havingStyle(r).withFont("");return k4(a.body,o,n)},mathmlBuilder(a,n){var r=gd[a.style],o=n.havingStyle(r),s=It(a.body,o),u=new te("mstyle",s),f={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},p=f[a.style];return u.setAttribute("scriptlevel",p[0]),u.setAttribute("displaystyle",p[1]),u}});var k7=function(n,r){var o=n.base;if(o)if(o.type==="op"){var s=o.limits&&(r.style.size===ke.DISPLAY.size||o.alwaysHandleSupSub);return s?b0:null}else if(o.type==="operatorname"){var u=o.alwaysHandleSupSub&&(r.style.size===ke.DISPLAY.size||o.limits);return u?_4:null}else{if(o.type==="accent")return Ln(o.base)?Ls:null;if(o.type==="horizBrace"){var f=!n.sub;return f===o.isOver?w4:null}else return null}else return null};Br({type:"supsub",htmlBuilder(a,n){var r=k7(a,n);if(r)return r(a,n);var{base:o,sup:s,sub:u}=a,f=Ne(o,n),p,v,w=n.fontMetrics(),b=0,$=0,M=o&&Ln(o);if(s){var z=n.havingStyle(n.style.sup());p=Ne(s,z,n),M||(b=f.height-z.fontMetrics().supDrop*z.sizeMultiplier/n.sizeMultiplier)}if(u){var P=n.havingStyle(n.style.sub());v=Ne(u,P,n),M||($=f.depth+P.fontMetrics().subDrop*P.sizeMultiplier/n.sizeMultiplier)}var R;n.style===ke.DISPLAY?R=w.sup1:n.style.cramped?R=w.sup3:R=w.sup2;var B=n.sizeMultiplier,H=ie(.5/w.ptPerEm/B),X=null;if(v){var F=a.base&&a.base.type==="op"&&a.base.name&&(a.base.name==="\\oiint"||a.base.name==="\\oiiint");(f instanceof nn||F)&&(X=ie(-f.italic))}var L;if(p&&v){b=Math.max(b,R,p.depth+.25*w.xHeight),$=Math.max($,w.sub2);var V=w.defaultRuleThickness,ae=4*V;if(b-p.depth-(v.height-$)<ae){$=ae-(b-p.depth)+v.height;var O=.8*w.xHeight-(b-p.depth);O>0&&(b+=O,$-=O)}var J=[{type:"elem",elem:v,shift:$,marginRight:H,marginLeft:X},{type:"elem",elem:p,shift:-b,marginRight:H}];L=Fe({positionType:"individualShift",children:J})}else if(v){$=Math.max($,w.sub1,v.height-.8*w.xHeight);var ne=[{type:"elem",elem:v,marginLeft:X,marginRight:H}];L=Fe({positionType:"shift",positionData:$,children:ne})}else if(p)b=Math.max(b,R,p.depth+.25*w.xHeight),L=Fe({positionType:"shift",positionData:-b,children:[{type:"elem",elem:p,marginRight:H}]});else throw new Error("supsub must have either sup or sub.");var we=xs(f,"right")||"mord";return Y([we],[f,Y(["msupsub"],[L])],n)},mathmlBuilder(a,n){var r=!1,o,s;a.base&&a.base.type==="horizBrace"&&(s=!!a.sup,s===a.base.isOver&&(r=!0,o=a.base.isOver)),a.base&&(a.base.type==="op"||a.base.type==="operatorname")&&(a.base.parentIsSupSub=!0);var u=[Ve(a.base,n)];a.sub&&u.push(Ve(a.sub,n)),a.sup&&u.push(Ve(a.sup,n));var f;if(r)f=o?"mover":"munder";else if(a.sub)if(a.sup){var w=a.base;w&&w.type==="op"&&w.limits&&n.style===ke.DISPLAY||w&&w.type==="operatorname"&&w.alwaysHandleSupSub&&(n.style===ke.DISPLAY||w.limits)?f="munderover":f="msubsup"}else{var v=a.base;v&&v.type==="op"&&v.limits&&(n.style===ke.DISPLAY||v.alwaysHandleSupSub)||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(v.limits||n.style===ke.DISPLAY)?f="munder":f="msub"}else{var p=a.base;p&&p.type==="op"&&p.limits&&(n.style===ke.DISPLAY||p.alwaysHandleSupSub)||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(p.limits||n.style===ke.DISPLAY)?f="mover":f="msup"}return new te(f,u)}});Br({type:"atom",htmlBuilder(a,n){return js(a.text,a.mode,n,["m"+a.family])},mathmlBuilder(a,n){var r=new te("mo",[rn(a.text,a.mode)]);if(a.family==="bin"){var o=Bs(a,n);o==="bold-italic"&&r.setAttribute("mathvariant",o)}else a.family==="punct"?r.setAttribute("separator","true"):(a.family==="open"||a.family==="close")&&r.setAttribute("stretchy","false");return r}});var z4={mi:"italic",mn:"normal",mtext:"normal"};Br({type:"mathord",htmlBuilder(a,n){return Ka(a,n,"mathord")},mathmlBuilder(a,n){var r=new te("mi",[rn(a.text,a.mode,n)]),o=Bs(a,n)||"italic";return o!==z4[r.type]&&r.setAttribute("mathvariant",o),r}});Br({type:"textord",htmlBuilder(a,n){return Ka(a,n,"textord")},mathmlBuilder(a,n){var r=rn(a.text,a.mode,n),o=Bs(a,n)||"normal",s;return a.mode==="text"?s=new te("mtext",[r]):/[0-9]/.test(a.text)?s=new te("mn",[r]):a.text==="\\prime"?s=new te("mo",[r]):s=new te("mi",[r]),o!==z4[s.type]&&s.setAttribute("mathvariant",o),s}});var ds={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},fs={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Br({type:"spacing",htmlBuilder(a,n){if(fs.hasOwnProperty(a.text)){var r=fs[a.text].className||"";if(a.mode==="text"){var o=Ka(a,n,"textord");return o.classes.push(r),o}else return Y(["mspace",r],[js(a.text,a.mode,n)],n)}else{if(ds.hasOwnProperty(a.text))return Y(["mspace",ds[a.text]],[],n);throw new ee('Unknown type of space "'+a.text+'"')}},mathmlBuilder(a,n){var r;if(fs.hasOwnProperty(a.text))r=new te("mtext",[new dt(" ")]);else{if(ds.hasOwnProperty(a.text))return new te("mspace");throw new ee('Unknown type of space "'+a.text+'"')}return r}});var yd=()=>{var a=new te("mtd",[]);return a.setAttribute("width","50%"),a};Br({type:"tag",mathmlBuilder(a,n){var r=new te("mtable",[new te("mtr",[yd(),new te("mtd",[yr(a.body,n)]),yd(),new te("mtd",[yr(a.tag,n)])])]);return r.setAttribute("width","100%"),r}});var xd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},wd={"\\textbf":"textbf","\\textmd":"textmd"},z7={"\\textit":"textit","\\textup":"textup"},bd=(a,n)=>{var r=a.font;if(r){if(xd[r])return n.withTextFontFamily(xd[r]);if(wd[r])return n.withTextFontWeight(wd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(z7[r])};se({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(a,n){var{parser:r,funcName:o}=a,s=n[0];return{type:"text",mode:r.mode,body:st(s),font:o}},htmlBuilder(a,n){var r=bd(a,n),o=pt(a.body,r,!0);return Y(["mord","text"],o,r)},mathmlBuilder(a,n){var r=bd(a,n);return yr(a.body,r)}});se({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(a,n){var{parser:r}=a;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(a,n){var r=Ne(a.body,n),o=g0("underline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Fe({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:o},{type:"kern",size:3*s},{type:"elem",elem:r}]});return Y(["mord","underline"],[u],n)},mathmlBuilder(a,n){var r=new te("mo",[new dt("‾")]);r.setAttribute("stretchy","true");var o=new te("munder",[Ve(a.body,n),r]);return o.setAttribute("accentunder","true"),o}});se({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(a,n){var{parser:r}=a;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(a,n){var r=Ne(a.body,n),o=n.fontMetrics().axisHeight,s=.5*(r.height-o-(r.depth+o));return Fe({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(a,n){return new te("mpadded",[Ve(a.body,n)],["vcenter"])}});se({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(a,n,r){throw new ee("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(a,n){for(var r=$d(a),o=[],s=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var f=r[u];f==="~"&&(f="\\textasciitilde"),o.push(qt(f,"Typewriter-Regular",a.mode,s,["mord","texttt"]))}return Y(["mord","text"].concat(s.sizingClasses(n)),Hd(o),s)},mathmlBuilder(a,n){var r=new dt($d(a)),o=new te("mtext",[r]);return o.setAttribute("mathvariant","monospace"),o}});var $d=a=>a.body.replace(/ /g,a.star?"␣":" "),mr=Gd,S4=`[ \r
	]`,S7="\\\\[a-zA-Z@]+",M7="\\\\[^\uD800-\uDFFF]",T7="("+S7+")"+S4+"*",C7=`\\\\(
|[ \r	]+
?)[ \r	]*`,ks="[̀-ͯ]",A7=new RegExp(ks+"+$"),q7="("+S4+"+)|"+(C7+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(ks+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(ks+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+T7)+("|"+M7+")");class _d{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(q7,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Vt("EOF",new Ot(this,r,r));var o=this.tokenRegex.exec(n);if(o===null||o.index!==r)throw new ee("Unexpected character: '"+n[r]+"'",new Vt(n[r],new Ot(this,r,r+1)));var s=o[6]||o[3]||(o[2]?"\\ ":" ");if(this.catcodes[s]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Vt(s,new Ot(this,r,this.tokenRegex.lastIndex))}}class E7{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ee("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,o){if(o===void 0&&(o=!1),o){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var P7=p4;x("\\noexpand",function(a){var n=a.popToken();return a.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});x("\\expandafter",function(a){var n=a.popToken();return a.expandOnce(!0),{tokens:[n],numArgs:0}});x("\\@firstoftwo",function(a){var n=a.consumeArgs(2);return{tokens:n[0],numArgs:0}});x("\\@secondoftwo",function(a){var n=a.consumeArgs(2);return{tokens:n[1],numArgs:0}});x("\\@ifnextchar",function(a){var n=a.consumeArgs(3);a.consumeSpaces();var r=a.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});x("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");x("\\TextOrMath",function(a){var n=a.consumeArgs(2);return a.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var kd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};x("\\char",function(a){var n=a.popToken(),r,o="";if(n.text==="'")r=8,n=a.popToken();else if(n.text==='"')r=16,n=a.popToken();else if(n.text==="`")if(n=a.popToken(),n.text[0]==="\\")o=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new ee("\\char` missing argument");o=n.text.charCodeAt(0)}else r=10;if(r){if(o=kd[n.text],o==null||o>=r)throw new ee("Invalid base-"+r+" digit "+n.text);for(var s;(s=kd[a.future().text])!=null&&s<r;)o*=r,o+=s,a.popToken()}return"\\@char{"+o+"}"});var Us=(a,n,r,o)=>{var s=a.consumeArg().tokens;if(s.length!==1)throw new ee("\\newcommand's first argument must be a macro name");var u=s[0].text,f=a.isDefined(u);if(f&&!n)throw new ee("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!f&&!r)throw new ee("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var p=0;if(s=a.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var v="",w=a.expandNextToken();w.text!=="]"&&w.text!=="EOF";)v+=w.text,w=a.expandNextToken();if(!v.match(/^\s*[0-9]+\s*$/))throw new ee("Invalid number of arguments: "+v);p=parseInt(v),s=a.consumeArg().tokens}return f&&o||a.macros.set(u,{tokens:s,numArgs:p}),""};x("\\newcommand",a=>Us(a,!1,!0,!1));x("\\renewcommand",a=>Us(a,!0,!1,!1));x("\\providecommand",a=>Us(a,!0,!0,!0));x("\\message",a=>{var n=a.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});x("\\errmessage",a=>{var n=a.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});x("\\show",a=>{var n=a.popToken(),r=n.text;return console.log(n,a.macros.get(r),mr[r],Ye.math[r],Ye.text[r]),""});x("\\bgroup","{");x("\\egroup","}");x("~","\\nobreakspace");x("\\lq","`");x("\\rq","'");x("\\aa","\\r a");x("\\AA","\\r A");x("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");x("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");x("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");x("ℬ","\\mathscr{B}");x("ℰ","\\mathscr{E}");x("ℱ","\\mathscr{F}");x("ℋ","\\mathscr{H}");x("ℐ","\\mathscr{I}");x("ℒ","\\mathscr{L}");x("ℳ","\\mathscr{M}");x("ℛ","\\mathscr{R}");x("ℭ","\\mathfrak{C}");x("ℌ","\\mathfrak{H}");x("ℨ","\\mathfrak{Z}");x("\\Bbbk","\\Bbb{k}");x("·","\\cdotp");x("\\llap","\\mathllap{\\textrm{#1}}");x("\\rlap","\\mathrlap{\\textrm{#1}}");x("\\clap","\\mathclap{\\textrm{#1}}");x("\\mathstrut","\\vphantom{(}");x("\\underbar","\\underline{\\text{#1}}");x("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');x("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");x("\\ne","\\neq");x("≠","\\neq");x("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");x("∉","\\notin");x("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");x("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");x("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");x("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");x("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");x("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");x("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");x("⟂","\\perp");x("‼","\\mathclose{!\\mkern-0.8mu!}");x("∌","\\notni");x("⌜","\\ulcorner");x("⌝","\\urcorner");x("⌞","\\llcorner");x("⌟","\\lrcorner");x("©","\\copyright");x("®","\\textregistered");x("️","\\textregistered");x("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');x("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');x("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');x("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');x("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");x("⋮","\\vdots");x("\\varGamma","\\mathit{\\Gamma}");x("\\varDelta","\\mathit{\\Delta}");x("\\varTheta","\\mathit{\\Theta}");x("\\varLambda","\\mathit{\\Lambda}");x("\\varXi","\\mathit{\\Xi}");x("\\varPi","\\mathit{\\Pi}");x("\\varSigma","\\mathit{\\Sigma}");x("\\varUpsilon","\\mathit{\\Upsilon}");x("\\varPhi","\\mathit{\\Phi}");x("\\varPsi","\\mathit{\\Psi}");x("\\varOmega","\\mathit{\\Omega}");x("\\substack","\\begin{subarray}{c}#1\\end{subarray}");x("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");x("\\boxed","\\fbox{$\\displaystyle{#1}$}");x("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");x("\\implies","\\DOTSB\\;\\Longrightarrow\\;");x("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");x("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");x("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var zd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},j7=new Set(["bin","rel"]);x("\\dots",function(a){var n="\\dotso",r=a.expandAfterFuture().text;return r in zd?n=zd[r]:(r.slice(0,4)==="\\not"||r in Ye.math&&j7.has(Ye.math[r].group))&&(n="\\dotsb"),n});var Vs={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};x("\\dotso",function(a){var n=a.future().text;return n in Vs?"\\ldots\\,":"\\ldots"});x("\\dotsc",function(a){var n=a.future().text;return n in Vs&&n!==","?"\\ldots\\,":"\\ldots"});x("\\cdots",function(a){var n=a.future().text;return n in Vs?"\\@cdots\\,":"\\@cdots"});x("\\dotsb","\\cdots");x("\\dotsm","\\cdots");x("\\dotsi","\\!\\cdots");x("\\dotsx","\\ldots\\,");x("\\DOTSI","\\relax");x("\\DOTSB","\\relax");x("\\DOTSX","\\relax");x("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");x("\\,","\\tmspace+{3mu}{.1667em}");x("\\thinspace","\\,");x("\\>","\\mskip{4mu}");x("\\:","\\tmspace+{4mu}{.2222em}");x("\\medspace","\\:");x("\\;","\\tmspace+{5mu}{.2777em}");x("\\thickspace","\\;");x("\\!","\\tmspace-{3mu}{.1667em}");x("\\negthinspace","\\!");x("\\negmedspace","\\tmspace-{4mu}{.2222em}");x("\\negthickspace","\\tmspace-{5mu}{.277em}");x("\\enspace","\\kern.5em ");x("\\enskip","\\hskip.5em\\relax");x("\\quad","\\hskip1em\\relax");x("\\qquad","\\hskip2em\\relax");x("\\tag","\\@ifstar\\tag@literal\\tag@paren");x("\\tag@paren","\\tag@literal{({#1})}");x("\\tag@literal",a=>{if(a.macros.get("\\df@tag"))throw new ee("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});x("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");x("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");x("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");x("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");x("\\newline","\\\\\\relax");x("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var M4=ie(xn["Main-Regular"][84][1]-.7*xn["Main-Regular"][65][1]);x("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+M4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");x("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+M4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");x("\\hspace","\\@ifstar\\@hspacer\\@hspace");x("\\@hspace","\\hskip #1\\relax");x("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");x("\\ordinarycolon",":");x("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");x("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');x("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');x("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');x("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');x("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');x("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');x("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');x("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');x("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');x("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');x("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');x("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');x("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');x("∷","\\dblcolon");x("∹","\\eqcolon");x("≔","\\coloneqq");x("≕","\\eqqcolon");x("⩴","\\Coloneqq");x("\\ratio","\\vcentcolon");x("\\coloncolon","\\dblcolon");x("\\colonequals","\\coloneqq");x("\\coloncolonequals","\\Coloneqq");x("\\equalscolon","\\eqqcolon");x("\\equalscoloncolon","\\Eqqcolon");x("\\colonminus","\\coloneq");x("\\coloncolonminus","\\Coloneq");x("\\minuscolon","\\eqcolon");x("\\minuscoloncolon","\\Eqcolon");x("\\coloncolonapprox","\\Colonapprox");x("\\coloncolonsim","\\Colonsim");x("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");x("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");x("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");x("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");x("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");x("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");x("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");x("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");x("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");x("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");x("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");x("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");x("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");x("\\nleqq","\\html@mathml{\\@nleqq}{≰}");x("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");x("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");x("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");x("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");x("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");x("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");x("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");x("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");x("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");x("\\imath","\\html@mathml{\\@imath}{ı}");x("\\jmath","\\html@mathml{\\@jmath}{ȷ}");x("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");x("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");x("⟦","\\llbracket");x("⟧","\\rrbracket");x("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");x("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");x("⦃","\\lBrace");x("⦄","\\rBrace");x("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");x("⦵","\\minuso");x("\\darr","\\downarrow");x("\\dArr","\\Downarrow");x("\\Darr","\\Downarrow");x("\\lang","\\langle");x("\\rang","\\rangle");x("\\uarr","\\uparrow");x("\\uArr","\\Uparrow");x("\\Uarr","\\Uparrow");x("\\N","\\mathbb{N}");x("\\R","\\mathbb{R}");x("\\Z","\\mathbb{Z}");x("\\alef","\\aleph");x("\\alefsym","\\aleph");x("\\Alpha","\\mathrm{A}");x("\\Beta","\\mathrm{B}");x("\\bull","\\bullet");x("\\Chi","\\mathrm{X}");x("\\clubs","\\clubsuit");x("\\cnums","\\mathbb{C}");x("\\Complex","\\mathbb{C}");x("\\Dagger","\\ddagger");x("\\diamonds","\\diamondsuit");x("\\empty","\\emptyset");x("\\Epsilon","\\mathrm{E}");x("\\Eta","\\mathrm{H}");x("\\exist","\\exists");x("\\harr","\\leftrightarrow");x("\\hArr","\\Leftrightarrow");x("\\Harr","\\Leftrightarrow");x("\\hearts","\\heartsuit");x("\\image","\\Im");x("\\infin","\\infty");x("\\Iota","\\mathrm{I}");x("\\isin","\\in");x("\\Kappa","\\mathrm{K}");x("\\larr","\\leftarrow");x("\\lArr","\\Leftarrow");x("\\Larr","\\Leftarrow");x("\\lrarr","\\leftrightarrow");x("\\lrArr","\\Leftrightarrow");x("\\Lrarr","\\Leftrightarrow");x("\\Mu","\\mathrm{M}");x("\\natnums","\\mathbb{N}");x("\\Nu","\\mathrm{N}");x("\\Omicron","\\mathrm{O}");x("\\plusmn","\\pm");x("\\rarr","\\rightarrow");x("\\rArr","\\Rightarrow");x("\\Rarr","\\Rightarrow");x("\\real","\\Re");x("\\reals","\\mathbb{R}");x("\\Reals","\\mathbb{R}");x("\\Rho","\\mathrm{P}");x("\\sdot","\\cdot");x("\\sect","\\S");x("\\spades","\\spadesuit");x("\\sub","\\subset");x("\\sube","\\subseteq");x("\\supe","\\supseteq");x("\\Tau","\\mathrm{T}");x("\\thetasym","\\vartheta");x("\\weierp","\\wp");x("\\Zeta","\\mathrm{Z}");x("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");x("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");x("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");x("\\bra","\\mathinner{\\langle{#1}|}");x("\\ket","\\mathinner{|{#1}\\rangle}");x("\\braket","\\mathinner{\\langle{#1}\\rangle}");x("\\Bra","\\left\\langle#1\\right|");x("\\Ket","\\left|#1\\right\\rangle");var T4=a=>n=>{var r=n.consumeArg().tokens,o=n.consumeArg().tokens,s=n.consumeArg().tokens,u=n.consumeArg().tokens,f=n.macros.get("|"),p=n.macros.get("\\|");n.macros.beginGroup();var v=$=>M=>{a&&(M.macros.set("|",f),s.length&&M.macros.set("\\|",p));var z=$;if(!$&&s.length){var P=M.future();P.text==="|"&&(M.popToken(),z=!0)}return{tokens:z?s:o,numArgs:0}};n.macros.set("|",v(!1)),s.length&&n.macros.set("\\|",v(!0));var w=n.consumeArg().tokens,b=n.expandTokens([...u,...w,...r]);return n.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};x("\\bra@ket",T4(!1));x("\\bra@set",T4(!0));x("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");x("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");x("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");x("\\angln","{\\angl n}");x("\\blue","\\textcolor{##6495ed}{#1}");x("\\orange","\\textcolor{##ffa500}{#1}");x("\\pink","\\textcolor{##ff00af}{#1}");x("\\red","\\textcolor{##df0030}{#1}");x("\\green","\\textcolor{##28ae7b}{#1}");x("\\gray","\\textcolor{gray}{#1}");x("\\purple","\\textcolor{##9d38bd}{#1}");x("\\blueA","\\textcolor{##ccfaff}{#1}");x("\\blueB","\\textcolor{##80f6ff}{#1}");x("\\blueC","\\textcolor{##63d9ea}{#1}");x("\\blueD","\\textcolor{##11accd}{#1}");x("\\blueE","\\textcolor{##0c7f99}{#1}");x("\\tealA","\\textcolor{##94fff5}{#1}");x("\\tealB","\\textcolor{##26edd5}{#1}");x("\\tealC","\\textcolor{##01d1c1}{#1}");x("\\tealD","\\textcolor{##01a995}{#1}");x("\\tealE","\\textcolor{##208170}{#1}");x("\\greenA","\\textcolor{##b6ffb0}{#1}");x("\\greenB","\\textcolor{##8af281}{#1}");x("\\greenC","\\textcolor{##74cf70}{#1}");x("\\greenD","\\textcolor{##1fab54}{#1}");x("\\greenE","\\textcolor{##0d923f}{#1}");x("\\goldA","\\textcolor{##ffd0a9}{#1}");x("\\goldB","\\textcolor{##ffbb71}{#1}");x("\\goldC","\\textcolor{##ff9c39}{#1}");x("\\goldD","\\textcolor{##e07d10}{#1}");x("\\goldE","\\textcolor{##a75a05}{#1}");x("\\redA","\\textcolor{##fca9a9}{#1}");x("\\redB","\\textcolor{##ff8482}{#1}");x("\\redC","\\textcolor{##f9685d}{#1}");x("\\redD","\\textcolor{##e84d39}{#1}");x("\\redE","\\textcolor{##bc2612}{#1}");x("\\maroonA","\\textcolor{##ffbde0}{#1}");x("\\maroonB","\\textcolor{##ff92c6}{#1}");x("\\maroonC","\\textcolor{##ed5fa6}{#1}");x("\\maroonD","\\textcolor{##ca337c}{#1}");x("\\maroonE","\\textcolor{##9e034e}{#1}");x("\\purpleA","\\textcolor{##ddd7ff}{#1}");x("\\purpleB","\\textcolor{##c6b9fc}{#1}");x("\\purpleC","\\textcolor{##aa87ff}{#1}");x("\\purpleD","\\textcolor{##7854ab}{#1}");x("\\purpleE","\\textcolor{##543b78}{#1}");x("\\mintA","\\textcolor{##f5f9e8}{#1}");x("\\mintB","\\textcolor{##edf2df}{#1}");x("\\mintC","\\textcolor{##e0e5cc}{#1}");x("\\grayA","\\textcolor{##f6f7f7}{#1}");x("\\grayB","\\textcolor{##f0f1f2}{#1}");x("\\grayC","\\textcolor{##e3e5e6}{#1}");x("\\grayD","\\textcolor{##d6d8da}{#1}");x("\\grayE","\\textcolor{##babec2}{#1}");x("\\grayF","\\textcolor{##888d93}{#1}");x("\\grayG","\\textcolor{##626569}{#1}");x("\\grayH","\\textcolor{##3b3e40}{#1}");x("\\grayI","\\textcolor{##21242c}{#1}");x("\\kaBlue","\\textcolor{##314453}{#1}");x("\\kaGreen","\\textcolor{##71B307}{#1}");var C4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class R7{constructor(n,r,o){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new E7(P7,r.macros),this.mode=o,this.stack=[]}feed(n){this.lexer=new _d(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,o,s;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:o}=this.consumeArg(["]"])}else({tokens:s,start:r,end:o}=this.consumeArg());return this.pushToken(new Vt("EOF",o.loc)),this.pushTokens(s),new Vt("",Ot.range(r,o))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],o=n&&n.length>0;o||this.consumeSpaces();var s=this.future(),u,f=0,p=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++f;else if(u.text==="}"){if(--f,f===-1)throw new ee("Extra }",u)}else if(u.text==="EOF")throw new ee("Unexpected end of input in a macro argument, expected '"+(n&&o?n[p]:"}")+"'",u);if(n&&o)if((f===0||f===1&&n[p]==="{")&&u.text===n[p]){if(++p,p===n.length){r.splice(-p,p);break}}else p=0}while(f!==0||o);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new ee("The length of delimiters doesn't match the number of args!");for(var o=r[0],s=0;s<o.length;s++){var u=this.popToken();if(o[s]!==u.text)throw new ee("Use of the macro doesn't match its definition",u)}}for(var f=[],p=0;p<n;p++)f.push(this.consumeArg(r&&r[p+1]).tokens);return f}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new ee("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),o=r.text,s=r.noexpand?null:this._getExpansion(o);if(s==null||n&&s.unexpandable){if(n&&s==null&&o[0]==="\\"&&!this.isDefined(o))throw new ee("Undefined control sequence: "+o);return this.pushToken(r),!1}this.countExpansion(1);var u=s.tokens,f=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){u=u.slice();for(var p=u.length-1;p>=0;--p){var v=u[p];if(v.text==="#"){if(p===0)throw new ee("Incomplete placeholder at end of macro body",v);if(v=u[--p],v.text==="#")u.splice(p+1,1);else if(/^[1-9]$/.test(v.text))u.splice(p,2,...f[+v.text-1]);else throw new ee("Not a valid argument number",v)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Vt(n)]):void 0}expandTokens(n){var r=[],o=this.stack.length;for(this.pushTokens(n);this.stack.length>o;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(o=>o.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var o=this.lexer.catcodes[n];if(o!=null&&o!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var u=0;if(s.includes("#"))for(var f=s.replace(/##/g,"");f.includes("#"+(u+1));)++u;for(var p=new _d(s,this.settings),v=[],w=p.lex();w.text!=="EOF";)v.push(w),w=p.lex();v.reverse();var b={tokens:v,numArgs:u};return b}return s}isDefined(n){return this.macros.has(n)||mr.hasOwnProperty(n)||Ye.math.hasOwnProperty(n)||Ye.text.hasOwnProperty(n)||C4.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:mr.hasOwnProperty(n)&&!mr[n].primitive}}var Sd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Ba=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),hs={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Md={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class io{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new R7(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new ee("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Vt("}")),this.gullet.pushTokens(n);var o=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,o}parseExpression(n,r){for(var o=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(io.endOfExpression.has(s.text)||r&&s.text===r||n&&mr[s.text]&&mr[s.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;o.push(u)}return this.mode==="text"&&this.formLigatures(o),this.handleInfixNodes(o)}handleInfixNodes(n){for(var r=-1,o,s=0;s<n.length;s++)if(n[s].type==="infix"){if(r!==-1)throw new ee("only one infix operator per group",n[s].token);r=s,o=n[s].replaceWith}if(r!==-1&&o){var u,f,p=n.slice(0,r),v=n.slice(r+1);p.length===1&&p[0].type==="ordgroup"?u=p[0]:u={type:"ordgroup",mode:this.mode,body:p},v.length===1&&v[0].type==="ordgroup"?f=v[0]:f={type:"ordgroup",mode:this.mode,body:v};var w;return o==="\\\\abovefrac"?w=this.callFunction(o,[u,n[r],f],[]):w=this.callFunction(o,[u,f],[]),[w]}else return n}handleSupSubscript(n){var r=this.fetch(),o=r.text;this.consume(),this.consumeSpaces();var s;do{var u;s=this.parseGroup(n)}while(((u=s)==null?void 0:u.type)==="internal");if(!s)throw new ee("Expected group after '"+o+"'",r);return s}formatUnsupportedCmd(n){for(var r=[],o=0;o<n.length;o++)r.push({type:"textord",mode:"text",text:n[o]});var s={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var o,s;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var f=u.text==="\\limits";r.limits=f,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new ee("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(o)throw new ee("Double superscript",u);o=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(s)throw new ee("Double subscript",u);s=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(o)throw new ee("Double superscript",u);var p={type:"textord",mode:this.mode,text:"\\prime"},v=[p];for(this.consume();this.fetch().text==="'";)v.push(p),this.consume();this.fetch().text==="^"&&v.push(this.handleSupSubscript("superscript")),o={type:"ordgroup",mode:this.mode,body:v}}else if(Ba[u.text]){var w=Sd.test(u.text),b=[];for(b.push(new Vt(Ba[u.text])),this.consume();;){var $=this.fetch().text;if(!Ba[$]||Sd.test($)!==w)break;b.unshift(new Vt(Ba[$])),this.consume()}var M=this.subparse(b);w?s={type:"ordgroup",mode:"math",body:M}:o={type:"ordgroup",mode:"math",body:M}}else break}return o||s?{type:"supsub",mode:this.mode,base:r,sup:o,sub:s}:r}parseFunction(n,r){var o=this.fetch(),s=o.text,u=mr[s];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new ee("Got function '"+s+"' with no arguments"+(r?" as "+r:""),o);if(this.mode==="text"&&!u.allowedInText)throw new ee("Can't use function '"+s+"' in text mode",o);if(this.mode==="math"&&u.allowedInMath===!1)throw new ee("Can't use function '"+s+"' in math mode",o);var{args:f,optArgs:p}=this.parseArguments(s,u);return this.callFunction(s,f,p,o,n)}callFunction(n,r,o,s,u){var f={funcName:n,parser:this,token:s,breakOnTokenText:u},p=mr[n];if(p&&p.handler)return p.handler(f,r,o);throw new ee("No function handler for "+n)}parseArguments(n,r){var o=r.numArgs+r.numOptionalArgs;if(o===0)return{args:[],optArgs:[]};for(var s=[],u=[],f=0;f<o;f++){var p=r.argTypes&&r.argTypes[f],v=f<r.numOptionalArgs;(r.primitive&&p==null||r.type==="sqrt"&&f===1&&u[0]==null)&&(p="primitive");var w=this.parseGroupOfType("argument to '"+n+"'",p,v);if(v)u.push(w);else if(w!=null)s.push(w);else throw new ee("Null argument, please report this as a bug")}return{args:s,optArgs:u}}parseGroupOfType(n,r,o){switch(r){case"color":return this.parseColorGroup(o);case"size":return this.parseSizeGroup(o);case"url":return this.parseUrlGroup(o);case"math":case"text":return this.parseArgumentGroup(o,r);case"hbox":{var s=this.parseArgumentGroup(o,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",o);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(o)throw new ee("A primitive argument cannot be optional");var f=this.parseGroup(n);if(f==null)throw new ee("Expected group as "+n,this.fetch());return f}case"original":case null:case void 0:return this.parseArgumentGroup(o);default:throw new ee("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var o=this.gullet.scanArgument(r);if(o==null)return null;for(var s="",u;(u=this.fetch()).text!=="EOF";)s+=u.text,this.consume();return this.consume(),o.text=s,o}parseRegexGroup(n,r){for(var o=this.fetch(),s=o,u="",f;(f=this.fetch()).text!=="EOF"&&n.test(u+f.text);)s=f,u+=s.text,this.consume();if(u==="")throw new ee("Invalid "+r+": '"+o.text+"'",o);return o.range(s,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var o=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!o)throw new ee("Invalid color: '"+r.text+"'",r);var s=o[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(n){var r,o=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",o=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new ee("Invalid size: '"+r.text+"'",r);var u={number:+(s[1]+s[2]),unit:s[3]};if(!Nd(u))throw new ee("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:o}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var o=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:o}}parseArgumentGroup(n,r){var o=this.gullet.scanArgument(n);if(o==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var f={type:"ordgroup",mode:this.mode,loc:o.loc,body:u};return r&&this.switchMode(s),f}parseGroup(n,r){var o=this.fetch(),s=o.text,u;if(s==="{"||s==="\\begingroup"){this.consume();var f=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var p=this.parseExpression(!1,f),v=this.fetch();this.expect(f),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Ot.range(o,v),body:p,semisimple:s==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&s[0]==="\\"&&!C4.hasOwnProperty(s)){if(this.settings.throwOnError)throw new ee("Undefined control sequence: "+s,o);u=this.formatUnsupportedCmd(s),this.consume()}return u}formLigatures(n){for(var r=n.length-1,o=0;o<r;++o){var s=n[o],u=s.text;u==="-"&&n[o+1].text==="-"&&(o+1<r&&n[o+2].text==="-"?(n.splice(o,3,{type:"textord",mode:"text",loc:Ot.range(s,n[o+2]),text:"---"}),r-=2):(n.splice(o,2,{type:"textord",mode:"text",loc:Ot.range(s,n[o+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[o+1].text===u&&(n.splice(o,2,{type:"textord",mode:"text",loc:Ot.range(s,n[o+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var o=r.slice(5),s=o.charAt(0)==="*";if(s&&(o=o.slice(1)),o.length<2||o.charAt(0)!==o.slice(-1))throw new ee(`\\verb assertion failed --
                    please report what input caused this bug`);return o=o.slice(1,-1),{type:"verb",mode:"text",body:o,star:s}}Md.hasOwnProperty(r[0])&&!Ye[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Md[r[0]]+r.slice(1));var u=A7.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var f;if(Ye[this.mode][r]){this.settings.strict&&this.mode==="math"&&gs.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var p=Ye[this.mode][r].group,v=Ot.range(n),w;if(q6.hasOwnProperty(p)){var b=p;w={type:"atom",mode:this.mode,family:b,loc:v,text:r}}else w={type:p,mode:this.mode,loc:v,text:r};f=w}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Bd(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),f={type:"textord",mode:"text",loc:Ot.range(n),text:r};else return null;if(this.consume(),u)for(var $=0;$<u[0].length;$++){var M=u[0][$];if(!hs[M])throw new ee("Unknown accent ' "+M+"'",n);var z=hs[M][this.mode]||hs[M].text;if(!z)throw new ee("Accent "+M+" unsupported in "+this.mode+" mode",n);f={type:"accent",mode:this.mode,loc:Ot.range(n),label:z,isStretchy:!1,isShifty:!0,base:f}}return f}}io.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Gs=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var o=new io(n,r);delete o.gullet.macros.current["\\df@tag"];var s=o.parse();if(delete o.gullet.macros.current["\\current@color"],delete o.gullet.macros.current["\\color"],o.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ee("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:o.subparse([new Vt("\\df@tag")])}]}return s},A4=function(n,r,o){r.textContent="";var s=Ys(n,o).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),A4=function(){throw new ee("KaTeX doesn't work in quirks mode.")});var D7=function(n,r){var o=Ys(n,r).toMarkup();return o},B7=function(n,r){var o=new As(r);return Gs(n,o)},q4=function(n,r,o){if(o.throwOnError||!(n instanceof ee))throw n;var s=Y(["katex-error"],[new nn(r)]);return s.setAttribute("title",n.toString()),s.setAttribute("style","color:"+o.errorColor),s},Ys=function(n,r){var o=new As(r);try{var s=Gs(n,o);return G6(s,n,o)}catch(u){return q4(u,n,o)}},N7=function(n,r){var o=new As(r);try{var s=Gs(n,o);return Y6(s,n,o)}catch(u){return q4(u,n,o)}},L7="0.16.33",O7={Span:pi,Anchor:Ps,SymbolNode:nn,SvgNode:Nn,PathNode:vr,LineNode:vs},Td={version:L7,render:A4,renderToString:D7,ParseError:ee,SETTINGS_SCHEMA:Na,__parse:B7,__renderToDomTree:Ys,__renderToHTMLTree:N7,__setFontMetrics:_6,__defineSymbol:d,__defineFunction:se,__defineMacro:x,__domTree:O7};function I7(a){if(!a)return"";let n=a.replace(/\$\$([\s\S]*?)\$\$/g,(r,o)=>{try{return Td.renderToString(o.trim(),{displayMode:!0,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,o)=>{try{return Td.renderToString(o.trim(),{displayMode:!1,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}}),n}function F7({nodeId:a,nodes:n,onAnswer:r,onSkip:o,lang:s}){const u=n.find(B=>B.id===a),f=le.useMemo(()=>y5(a),[a]),p=x0[u==null?void 0:u.scope]||"#4a9eff",v=u?s==="pl"?u.labelPl:u.label:a,[w,b]=le.useState(null),[$,M]=le.useState(!1),z=()=>{w!==null&&M(!0)},P=()=>{r(w===f.correct,f),b(null),M(!1)},R=B=>T.jsx("span",{dangerouslySetInnerHTML:{__html:I7(B)}});return f?T.jsxs("div",{style:Uc(p),children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[T.jsx("div",{style:{color:p,fontWeight:700,fontSize:12},children:v}),T.jsx("button",{onClick:o,style:{background:"none",border:"none",color:"#3a4d63",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})]}),T.jsx("div",{style:{fontSize:11,color:"#c8d6e5",marginBottom:12,lineHeight:1.6},children:R(f.q)}),T.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:f.options.map((B,H)=>{let X="#0d1520",F="#1e2d45",L="#c8d6e5";return w===H&&!$&&(X=`${p}22`,F=p,L=p),$&&(H===f.correct?(X="#27ae6022",F="#27ae60",L="#2ecc71"):H===w&&(X="#e74c3c22",F="#e74c3c",L="#ff6b6b")),T.jsxs("button",{onClick:()=>{$||b(H)},style:{textAlign:"left",padding:"7px 10px",borderRadius:5,fontSize:10,cursor:$?"default":"pointer",background:X,border:`1px solid ${F}`,color:L,lineHeight:1.4},children:[T.jsxs("span",{style:{marginRight:8,opacity:.5},children:[["A","B","C","D"][H],"."]}),R(B)]},H)})}),$&&f.hint&&T.jsx("div",{style:{fontSize:10,color:"#8a9dbe",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,lineHeight:1.5},children:R(f.hint)}),$?T.jsx("div",{style:{display:"flex",gap:8},children:T.jsx("button",{onClick:P,style:{...li(w===f.correct?"#27ae60":"#e74c3c"),flex:1},children:w===f.correct?"✓ Znam!":"✗ Nie znam"})}):T.jsx("button",{onClick:z,disabled:w===null,style:{...li(p),width:"100%",opacity:w===null?.4:1},children:"Sprawdź"})]}):T.jsxs("div",{style:Uc(p),children:[T.jsx("div",{style:{color:p,fontWeight:700,marginBottom:8},children:v}),T.jsx("div",{style:{color:"#6b7d9a",fontSize:11,marginBottom:12},children:"Brak pytania dla tego węzła. Czy znasz ten temat?"}),T.jsxs("div",{style:{display:"flex",gap:8},children:[T.jsx("button",{onClick:()=>r(!0,null),style:li("#27ae60"),children:"✓ Tak"}),T.jsx("button",{onClick:()=>r(!1,null),style:li("#e74c3c"),children:"✗ Nie"}),T.jsx("button",{onClick:o,style:li("#3a4d63"),children:"Pomiń"})]})]})}function H7({belief:a,frontier:n,visibleFrontier:r,hasStarted:o,nextSuggestedId:s,sessionComplete:u,adjacency:f,expectedRemaining:p,pCorrect:v,questionsAnswered:w,nodes:b,lang:$,onReset:M,onNodeClick:z}){var V,ae;const P=Object.fromEntries(b.map(O=>[O.id,O])),R=O=>{var J,ne;return $==="pl"?(J=P[O])==null?void 0:J.labelPl:(ne=P[O])==null?void 0:ne.label},B=ct.filter(O=>a[O.id]==="known"),H=ct.filter(O=>a[O.id]==="unknown"),X=ct.length,F=[{label:"Znam",count:B.length,color:"#27ae60"},{label:"Nie znam",count:H.length,color:"#e74c3c"},{label:"Do odp.",count:p??"-",color:"#4a9eff"}],L=v?Math.round(v*100):50;return T.jsxs("div",{style:{position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[T.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:10,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsxs("span",{children:["Diagnostic ",u?"✓":""]}),T.jsx("button",{onClick:M,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:"reset"})]}),T.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:F.map(({label:O,count:J,color:ne})=>T.jsxs("div",{style:{flex:1,textAlign:"center",background:`${ne}18`,borderRadius:5,padding:"5px 0",border:`1px solid ${ne}40`},children:[T.jsx("div",{style:{color:ne,fontWeight:700,fontSize:15},children:J}),T.jsx("div",{style:{color:"#6b7d9a",fontSize:8},children:O})]},O))}),!u&&o&&T.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between"},children:[T.jsxs("span",{children:["Odpowiedzi: ",T.jsx("span",{style:{color:"#f5f6fa"},children:w})]}),T.jsxs("span",{children:["Szacowane: ",T.jsxs("span",{style:{color:"#4a9eff"},children:["~",p??"-"]})]}),T.jsxs("span",{children:["Skuteczność: ",T.jsxs("span",{style:{color:"#4a9eff"},children:[L,"%"]})]})]}),u&&T.jsxs("div",{children:[T.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[T.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:12,marginBottom:4},children:"Sesja zakończona ✓"}),T.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:["Odpowiedziano na ",T.jsx("span",{style:{color:"#f5f6fa"},children:w})," pytań."," ","Sklasyfikowano ",B.length+H.length,"/",X," tematów.",T.jsx("br",{}),"Skuteczność: ",T.jsxs("span",{style:{color:"#4a9eff"},children:[L,"%"]}),"."," ","Znasz ",T.jsx("span",{style:{color:"#2ecc71"},children:B.length}),","," ","do nauki ",T.jsx("span",{style:{color:"#e74c3c"},children:H.length}),"."]})]}),H.length>0&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:["Do nauki (",H.length,")"]}),ct.filter(O=>a[O.id]==="unknown").filter(O=>(f.prereqs[O.id]??[]).every(J=>a[J]==="known")).slice(0,8).map(O=>{var J,ne;return T.jsxs("div",{style:{padding:"5px 8px",marginBottom:3,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:9,color:"#ff8a8a",lineHeight:1.4},children:[R(O.id),T.jsx("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:(ne=m0[(J=P[O.id])==null?void 0:J.scope])==null?void 0:ne.pl})]},O.id)})]}),B.length>0&&T.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:9},children:["✓ Znam ",B.length," ",B.length===1?"temat":B.length<5?"tematy":"tematów"]})]}),!u&&!o&&T.jsxs("div",{style:{marginBottom:10},children:[s&&T.jsxs(T.Fragment,{children:[T.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:5},children:"★ Zacznij tutaj"}),T.jsx(W7,{id:s,label:R(s),scope:(ae=m0[(V=P[s])==null?void 0:V.scope])==null?void 0:ae.pl,subtitle:"najwięcej powiązań w grafie",onClick:()=>z==null?void 0:z(s)})]}),T.jsx("div",{style:{fontSize:9,color:"#3a4d63",marginTop:8,lineHeight:1.5},children:"Lub kliknij dowolny węzeł na grafie."})]}),!u&&o&&r.length>0&&T.jsxs(T.Fragment,{children:[T.jsx("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:5},children:"▶ Co dalej"}),r.map(O=>{var ne,we;const J=O===s;return T.jsxs("div",{onClick:()=>z==null?void 0:z(O),style:{padding:"6px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:J?"#4a9eff18":"#f39c1215",border:`1px solid ${J?"#4a9eff55":"#f39c1240"}`,fontSize:10,color:J?"#a8d4ff":"#f5d78e",transition:"background 0.15s"},onMouseEnter:ze=>ze.currentTarget.style.background=J?"#4a9eff30":"#f39c1230",onMouseLeave:ze=>ze.currentTarget.style.background=J?"#4a9eff18":"#f39c1215",children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsx("span",{children:R(O)}),T.jsx("span",{style:{fontSize:9,opacity:.7},children:J?"★":"→"})]}),T.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:[(we=m0[(ne=P[O])==null?void 0:ne.scope])==null?void 0:we.pl,J&&T.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:"najlepsze"})]})]},O)})]}),!u&&B.length>0&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"10px 0 4px"},children:["✓ Znam (",B.length,")"]}),B.map(O=>T.jsx("div",{style:{fontSize:9,color:"#6dbb87",paddingLeft:4,lineHeight:1.7},children:R(O.id)},O.id))]}),!u&&T.jsxs("div",{style:{marginTop:12,color:"#3a4d63",fontSize:9,lineHeight:1.5},children:["Kliknij węzeł → pytanie",T.jsx("br",{}),"Shift+click → oznacz jako nieznany",T.jsx("br",{}),"Kliknij zielony → usuń oznaczenie"]})]})}function W7({id:a,label:n,scope:r,subtitle:o,onClick:s}){return T.jsxs("div",{onClick:s,style:{padding:"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff",transition:"background 0.15s"},onMouseEnter:u=>u.currentTarget.style.background="#4a9eff30",onMouseLeave:u=>u.currentTarget.style.background="#4a9eff18",children:[T.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[T.jsx("span",{style:{fontWeight:600},children:n}),T.jsx("span",{style:{opacity:.5},children:"→"})]}),T.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[r,o?` · ${o}`:""]})]})}function U7({nodes:a,lang:n,targetNode:r,subgraphIds:o,ddClassification:s,betaBeliefs:u,ddComplete:f,ddNextNodeId:p,questionsAnswered:v,onNodeClick:w,onReset:b}){const $=Object.fromEntries(a.map(L=>[L.id,L])),M=L=>{var V,ae;return n==="pl"?(V=$[L])==null?void 0:V.labelPl:(ae=$[L])==null?void 0:ae.label},z=o.filter(L=>s[L]==="known"),P=o.filter(L=>s[L]==="unknown"),R=o.filter(L=>s[L]==="uncertain"),B=o.length,H=z.length+P.length,X=B>0?Math.round(H/B*100):0,F=M(r);return T.jsxs("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[T.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsxs("span",{children:["Deep-Dive ",f?"✓":""]}),T.jsx("button",{onClick:b,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:"reset"})]}),T.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[T.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:"Cel"}),T.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:F}),T.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[B," węzłów w podgrafie"]})]}),T.jsxs("div",{style:{marginBottom:10},children:[T.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:T.jsx("div",{style:{height:"100%",borderRadius:3,width:`${X}%`,background:f?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),T.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[T.jsxs("span",{children:["Sklasyfikowano: ",T.jsxs("span",{style:{color:"#f5f6fa"},children:[H,"/",B]})]}),T.jsxs("span",{children:["Pytań: ",T.jsx("span",{style:{color:"#f5f6fa"},children:v})]})]})]}),f&&T.jsxs("div",{children:[T.jsxs("div",{style:{background:z.length>P.length?"#27ae6018":"#e74c3c18",border:`1px solid ${z.length>P.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[T.jsx("div",{style:{color:z.length>P.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:"Diagnoza gotowa ✓"}),T.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:["Znam: ",T.jsx("span",{style:{color:"#2ecc71"},children:z.length})," / ","Do nauki: ",T.jsx("span",{style:{color:"#ff6b6b"},children:P.length})," / ","Razem: ",B]})]}),P.length>0&&T.jsxs(T.Fragment,{children:[T.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:"Do nauki — zacznij od tych:"}),o.filter(L=>s[L]==="unknown").slice(0,8).map(L=>{var V;return T.jsx(Cd,{id:L,label:M(L),scope:(V=$[L])==null?void 0:V.scope,classification:"unknown",beta:u[L]},L)})]}),z.length>0&&T.jsxs(T.Fragment,{children:[T.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:"Opanowane:"}),o.filter(L=>s[L]==="known").map(L=>{var V;return T.jsx(Cd,{id:L,label:M(L),scope:(V=$[L])==null?void 0:V.scope,classification:"known",beta:u[L]},L)})]})]}),!f&&T.jsxs(T.Fragment,{children:[p&&T.jsxs("div",{style:{marginBottom:10},children:[T.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:"★ Następne pytanie"}),T.jsxs("div",{onClick:()=>w==null?void 0:w(p),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[M(p),T.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:["pewność: ",V7(u[p])]})]})]}),R.length>0&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:["Niezbadane (",R.length,")"]}),R.map(L=>T.jsxs("div",{onClick:()=>w==null?void 0:w(L),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:L===p?"#4a9eff18":"#f39c1212",border:`1px solid ${L===p?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:L===p?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsx("span",{children:M(L)}),T.jsx(E4,{beta:u[L]})]},L))]})]})]})}function V7(a){if(!a)return"50%";const n=a.alpha/(a.alpha+a.beta);return`${Math.round(n*100)}%`}function E4({beta:a}){const n=a?a.alpha/(a.alpha+a.beta):.5,r=a?a.alpha+a.beta:2,o=Math.min(1,(r-2)/4),s=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return T.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:T.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:s,opacity:.4+o*.6,transition:"width 0.3s ease"}})})}function Cd({id:a,label:n,scope:r,classification:o,beta:s}){const u=o==="known"?"#27ae60":"#e74c3c";return T.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:o==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsx("span",{children:n}),T.jsx(E4,{beta:s})]})}function G7({filterScope:a,toggleScope:n,clearScope:r,filterSection:o,toggleSection:s,clearSection:u,searchTerm:f,setSearchTerm:p,lang:v,setLang:w}){return T.jsxs("div",{style:{padding:"8px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[T.jsx("input",{value:f,onChange:b=>p(b.target.value),placeholder:"Search…",style:{background:"#0d1520",border:"1px solid #1e2d45",borderRadius:4,color:"#c8d6e5",padding:"3px 8px",fontSize:11,width:120,outline:"none"}}),T.jsx("span",{style:{color:"#3a4d63",fontSize:10},children:"|"}),T.jsx("button",{style:oi(o.size===0,"#c8d6e5"),onClick:u,children:"All"}),Object.entries(Ya).map(([b,$])=>T.jsx("button",{style:oi(o.has(b),$.color),onClick:()=>s(b),children:$.label},b)),T.jsx("span",{style:{color:"#3a4d63",fontSize:10},children:"|"}),T.jsx("button",{style:oi(a.size===0,"#c8d6e5"),onClick:r,children:"All"}),Object.entries(x0).map(([b,$])=>{var M;return T.jsx("button",{style:oi(a.has(b),$),onClick:()=>n(b),children:(M=m0[b])==null?void 0:M[v==="pl"?"pl":"en"]},b)}),T.jsx("span",{style:{color:"#3a4d63",fontSize:10},children:"|"}),T.jsx("button",{style:oi(v==="pl","#f5a623"),onClick:()=>w(b=>b==="pl"?"en":"pl"),children:v==="pl"?"PL":"EN"})]})}function Y7({lang:a}){const n=Object.entries(x0).map(([r,o])=>{var s;return{color:o,label:(s=m0[r])==null?void 0:s[a==="pl"?"pl":"en"]}});return T.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152090",backdropFilter:"blur(4px)",borderRadius:6,padding:"8px 12px",display:"flex",flexDirection:"column",gap:4},children:[n.map(({color:r,label:o})=>T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:9},children:[T.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:r}}),T.jsx("span",{style:{color:"#8a9dbe"},children:o})]},o)),T.jsx("div",{style:{marginTop:4,borderTop:"1px solid #1e2d45",paddingTop:4},children:Object.entries(Ya).map(([r,o])=>T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:9},children:[T.jsx("div",{style:{width:8,height:3,borderRadius:1,background:o.color}}),T.jsx("span",{style:{color:"#8a9dbe"},children:o.label})]},r))})]})}function X7({nodes:a,lang:n,onSelect:r,onClose:o}){const[s,u]=le.useState(""),f=le.useMemo(()=>{const b=s.toLowerCase();return a.filter($=>!b||$.label.toLowerCase().includes(b)||$.labelPl.toLowerCase().includes(b))},[a,s]),p=["SP8","LP","LR","UNIV"],v=le.useMemo(()=>{const b={};for(const $ of p)b[$]=[];for(const $ of f){const M=$.section??"LP";b[M]||(b[M]=[]),b[M].push($)}return b},[f]),w=b=>n==="pl"?b.labelPl:b.label;return T.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:b=>{b.target===b.currentTarget&&o()},children:T.jsxs("div",{style:{width:440,maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[T.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[T.jsxs("div",{children:[T.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:"Deep-Dive Diagnostic"}),T.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne."})]}),T.jsx("button",{onClick:o,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),T.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:T.jsx("input",{autoFocus:!0,value:s,onChange:b=>u(b.target.value),placeholder:"Szukaj tematu...",style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),T.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[p.map(b=>{const $=v[b];if(!$||$.length===0)return null;const M=Ya[b];return T.jsxs("div",{style:{marginBottom:12},children:[T.jsx("div",{style:{fontSize:9,fontWeight:700,color:(M==null?void 0:M.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(M==null?void 0:M.label)??b}),T.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:$.map(z=>{const P=x0[z.scope]??"#4a9eff";return T.jsxs("button",{onClick:()=>r(z.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:`${P}15`,border:`1px solid ${P}40`,color:"#c8d6e5",cursor:"pointer",transition:"background 0.12s, border-color 0.12s"},onMouseEnter:R=>{R.currentTarget.style.background=`${P}30`,R.currentTarget.style.borderColor=`${P}90`},onMouseLeave:R=>{R.currentTarget.style.background=`${P}15`,R.currentTarget.style.borderColor=`${P}40`},children:[T.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:P,verticalAlign:"middle"}}),w(z)]},z.id)})})]},b)}),f.length===0&&T.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:"Brak wyników"})]}),T.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[T.jsxs("div",{style:{fontSize:9,color:"#3a4d63"},children:[f.length," / ",a.length," tematów"]}),T.jsx("button",{onClick:o,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:"Anuluj"})]})]})})}const Ad={x:40,y:40,scale:.72};function Q7(){const[a,n]=le.useState(Ms),[r,o]=le.useState("pl"),[s,u]=le.useState(new Set),[f,p]=le.useState(new Set),[v,w]=le.useState(""),[b,$]=le.useState(null),[M,z]=le.useState(null),[P,R]=le.useState(!1),B=le.useCallback(oe=>u(Le=>{const Oe=new Set(Le);return Oe.has(oe)?Oe.delete(oe):Oe.add(oe),Oe}),[]),H=le.useCallback(oe=>p(Le=>{const Oe=new Set(Le);return Oe.has(oe)?Oe.delete(oe):Oe.add(oe),Oe}),[]),X=le.useCallback(()=>u(new Set),[]),F=le.useCallback(()=>p(new Set),[]),L=le.useMemo(()=>x5(ct,h0),[]),[V,ae]=le.useState(()=>Kl(a)),O=le.useMemo(()=>ct.map(oe=>{var Le,Oe;return{...oe,x:((Le=V[oe.id])==null?void 0:Le.x)??oe.x,y:((Oe=V[oe.id])==null?void 0:Oe.y)??oe.y}}),[V]),J=le.useRef(null),{viewTransform:ne,setViewTransform:we,toCanvas:ze,startPan:Te,cursorStyle:We,setCursorStyle:He,handleMouseMove:Se,handleMouseUp:Re}=D5(J),{startNodeDrag:Ae,handleDragMove:Z,handleDragEnd:pe}=B5(ze,O,ae,He),{diagMode:K,setDiagMode:E,mode:I,quizNode:ve,setQuizNode:$e,questionsAnswered:Me,handleDiagClick:qe,handleQuizAnswer:je,resetDiagnostic:Pe,startDeepDive:De,targetNode:at,belief:Yt,frontier:Nr,visibleFrontier:fn,hasStarted:_n,nextSuggestedId:kn,expectedRemaining:Fn,pCorrect:Hn,sessionComplete:zn,betaBeliefs:Sn,subgraphIds:bt,ddClassification:$t,ddNextNodeId:Wn,ddComplete:Lr}=Y5(L),gi=le.useMemo(()=>{const oe=v.toLowerCase(),Le=ct.filter(Oe=>!(s.size>0&&!s.has(Oe.scope)||f.size>0&&!f.has(Oe.section)||oe&&!Oe.label.toLowerCase().includes(oe)&&!Oe.labelPl.toLowerCase().includes(oe)));return Le.length<ct.length?new Set(Le.map(Oe=>Oe.id)):null},[s,f,v]),Un=b||M,$0=le.useMemo(()=>{var Le,Oe;if(!Un)return null;const oe=new Set([Un]);return(Le=L.prereqs[Un])==null||Le.forEach(br=>oe.add(br)),(Oe=L.dependents[Un])==null||Oe.forEach(br=>oe.add(br)),oe},[Un,L]),Or=le.useMemo(()=>!K||I!=="deepdive"||bt.length===0?null:new Set(bt),[K,I,bt]),Ir=le.useCallback(oe=>{const Le=oe.target.closest("[data-node-id]");if(Le){Ae(Le.getAttribute("data-node-id"),oe.clientX,oe.clientY),oe.stopPropagation();return}Te(oe.clientX,oe.clientY)},[Ae,Te]),yi=le.useCallback(oe=>{Z(oe.clientX,oe.clientY)||Se(oe)},[Z,Se]),Vn=le.useCallback(()=>{pe(),Re()},[pe,Re]);le.useEffect(()=>{if(I==="quick"&&!ve&&kn&&!zn&&_n){const oe=setTimeout(()=>$e(kn),400);return()=>clearTimeout(oe)}},[I,ve,kn,zn,_n]),le.useEffect(()=>{if(I==="deepdive"&&!ve&&Wn&&!Lr){const oe=setTimeout(()=>$e(Wn),400);return()=>clearTimeout(oe)}},[I,ve,Wn,Lr]),le.useEffect(()=>{const oe=Le=>{Le.key==="Escape"&&($(null),R(!1))};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[]);const wr=le.useCallback(oe=>{n(oe),ae(Kl(oe)),we(Ad)},[we]),ao=le.useCallback(()=>{K?(E(!1),Pe(),$(null)):(E(!0),$(null))},[K,E,Pe]),xi=le.useMemo(()=>{if(I!=="deepdive")return{};const oe={};for(const[Le,Oe]of Object.entries($t))Oe==="known"?oe[Le]="known":Oe==="unknown"&&(oe[Le]="unknown");return oe},[I,$t]),wi=I==="deepdive"?xi:Yt,oo=I==="deepdive"?bt.filter(oe=>$t[oe]==="uncertain"):fn;return T.jsxs("div",{style:{width:"100%",height:"100vh",background:"#0a0e17",fontFamily:R5,color:"#c8d6e5",display:"flex",flexDirection:"column",overflow:"hidden"},children:[T.jsxs("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:12,flexShrink:0},children:[T.jsx("h1",{style:{margin:0,fontSize:14,fontWeight:700,color:"#f5f6fa",letterSpacing:1},children:"PODSTAWA PROGRAMOWA — MATEMATYKA"}),T.jsxs("span",{style:{fontSize:10,color:"#3a4d63"},children:[ct.length," topics · ",h0.length," edges"]}),T.jsx("div",{style:{display:"flex",gap:4,marginLeft:8},children:Pd.map(oe=>T.jsx("button",{onClick:()=>wr(oe.meta.id),style:{padding:"3px 10px",borderRadius:4,fontSize:10,cursor:"pointer",border:a===oe.meta.id?"1px solid #4a9eff":"1px solid #1e2d45",background:a===oe.meta.id?"#4a9eff22":"transparent",color:a===oe.meta.id?"#4a9eff":"#6b7d9a"},children:oe.meta.label},oe.meta.id))}),T.jsx("span",{style:{fontSize:10,color:"#3a4d63",marginLeft:"auto"},children:K?I==="deepdive"?"deep-dive: kliknij węzeł w podgrafie":"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij":"scroll to zoom · drag to pan · drag node to move · click to inspect"}),T.jsxs("div",{style:{display:"flex",gap:4},children:[T.jsx("button",{onClick:ao,style:{padding:"4px 12px",borderRadius:5,fontSize:11,cursor:"pointer",fontWeight:600,border:K?"1px solid #f39c12":"1px solid #1e2d45",background:K?"#f39c1222":"transparent",color:K?"#f39c12":"#6b7d9a"},children:K?`Diagnostic (${I==="deepdive"?"Deep-Dive":"Quick"}) ON`:"Diagnostic"}),K&&T.jsx("button",{onClick:()=>R(!0),style:{padding:"4px 10px",borderRadius:5,fontSize:11,cursor:"pointer",border:"1px solid #8e44ad",background:I==="deepdive"?"#8e44ad22":"transparent",color:I==="deepdive"?"#c39bd3":"#6b7d9a"},title:"Wybierz cel deep-dive",children:"◎ Cel"})]})]}),T.jsx(G7,{filterScope:s,toggleScope:B,clearScope:X,filterSection:f,toggleSection:H,clearSection:F,searchTerm:v,setSearchTerm:w,lang:r,setLang:o}),T.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[T.jsxs("svg",{ref:J,width:"100%",height:"100%",style:{cursor:We},onMouseDown:Ir,onMouseMove:yi,onMouseUp:Vn,onMouseLeave:Vn,onClick:oe=>{if(!K)return;const Le=oe.target.closest("[data-node-id]");Le&&qe(Le.getAttribute("data-node-id"),oe.shiftKey)},children:[T.jsxs("defs",{children:[T.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:T.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),T.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:T.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),T.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:T.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),T.jsxs("g",{transform:`translate(${ne.x},${ne.y}) scale(${ne.scale})`,children:[T.jsx(X5,{edges:h0,nodes:O,highlightedIds:K&&I==="deepdive"?Or:$0}),T.jsx(Z5,{nodes:O,filteredIds:K&&I==="deepdive"?Or:gi,highlightedIds:K?null:$0,selected:b,onSelect:oe=>{if(K){qe(oe,!1);return}$(oe===b?null:oe)},onHover:z,lang:r,diagMode:K,belief:wi,frontier:oo,scale:ne.scale})]})]}),b&&!K&&T.jsx(J5,{nodeId:b,nodes:O,adjacency:L,lang:r}),K&&ve&&T.jsx(F7,{nodeId:ve,nodes:O,lang:r,onAnswer:(oe,Le)=>je(ve,oe,Le),onSkip:()=>$e(null)}),K&&I==="quick"&&!ve&&T.jsx(H7,{belief:Yt,frontier:Nr,visibleFrontier:fn,hasStarted:_n,nextSuggestedId:kn,sessionComplete:zn,adjacency:L,expectedRemaining:Fn,pCorrect:Hn,questionsAnswered:Me,nodes:O,lang:r,onNodeClick:oe=>$e(oe),onReset:Pe}),K&&I==="deepdive"&&!ve&&at&&T.jsx(U7,{nodes:O,lang:r,targetNode:at,subgraphIds:bt,ddClassification:$t,betaBeliefs:Sn,ddComplete:Lr,ddNextNodeId:Wn,questionsAnswered:Me,onNodeClick:oe=>$e(oe),onReset:Pe}),T.jsx(Y7,{lang:r}),T.jsx("div",{style:{position:"absolute",right:16,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([oe,Le])=>T.jsx("button",{onClick:()=>{Le===null?(ae(Kl(a)),we(Ad)):we(Oe=>({...Oe,scale:Math.max(.15,Math.min(5,Oe.scale*Le))}))},style:{width:28,height:28,background:"#0d1520",border:"1px solid #1e2d45",color:"#c8d6e5",borderRadius:4,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:oe},oe))})]}),P&&T.jsx(X7,{nodes:O,lang:r,onSelect:oe=>{R(!1),De(oe)},onClose:()=>R(!1)})]})}Df.createRoot(document.getElementById("root")).render(T.jsx(le.StrictMode,{children:T.jsx(Q7,{})}));
