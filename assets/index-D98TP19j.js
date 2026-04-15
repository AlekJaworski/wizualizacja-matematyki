(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();var fl={exports:{}},To={},hl={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1;function Wf(){if(G1)return Le;G1=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.iterator;function z(A){return A===null||typeof A!="object"?null:(A=_&&A[_]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,P={};function R(A,Q,$e){this.props=A,this.context=Q,this.refs=P,this.updater=$e||k}R.prototype.isReactComponent={},R.prototype.setState=function(A,Q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Q,"setState")},R.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function E(){}E.prototype=R.prototype;function F(A,Q,$e){this.props=A,this.context=Q,this.refs=P,this.updater=$e||k}var G=F.prototype=new E;G.constructor=F,M(G,R.prototype),G.isPureReactComponent=!0;var I=Array.isArray,L=Object.prototype.hasOwnProperty,K={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Z(A,Q,$e){var Se,ze={},Ee=null,Fe=null;if(Q!=null)for(Se in Q.ref!==void 0&&(Fe=Q.ref),Q.key!==void 0&&(Ee=""+Q.key),Q)L.call(Q,Se)&&!B.hasOwnProperty(Se)&&(ze[Se]=Q[Se]);var Be=arguments.length-2;if(Be===1)ze.children=$e;else if(1<Be){for(var ge=Array(Be),Ne=0;Ne<Be;Ne++)ge[Ne]=arguments[Ne+2];ze.children=ge}if(A&&A.defaultProps)for(Se in Be=A.defaultProps,Be)ze[Se]===void 0&&(ze[Se]=Be[Se]);return{$$typeof:o,type:A,key:Ee,ref:Fe,props:ze,_owner:K.current}}function X(A,Q){return{$$typeof:o,type:A.type,key:Q,ref:A.ref,props:A.props,_owner:A._owner}}function me(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function be(A){var Q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function($e){return Q[$e]})}var Y=/\/+/g;function de(A,Q){return typeof A=="object"&&A!==null&&A.key!=null?be(""+A.key):Q.toString(36)}function ke(A,Q,$e,Se,ze){var Ee=typeof A;(Ee==="undefined"||Ee==="boolean")&&(A=null);var Fe=!1;if(A===null)Fe=!0;else switch(Ee){case"string":case"number":Fe=!0;break;case"object":switch(A.$$typeof){case o:case t:Fe=!0}}if(Fe)return Fe=A,ze=ze(Fe),A=Se===""?"."+de(Fe,0):Se,I(ze)?($e="",A!=null&&($e=A.replace(Y,"$&/")+"/"),ke(ze,Q,$e,"",function(Ne){return Ne})):ze!=null&&(me(ze)&&(ze=X(ze,$e+(!ze.key||Fe&&Fe.key===ze.key?"":(""+ze.key).replace(Y,"$&/")+"/")+A)),Q.push(ze)),1;if(Fe=0,Se=Se===""?".":Se+":",I(A))for(var Be=0;Be<A.length;Be++){Ee=A[Be];var ge=Se+de(Ee,Be);Fe+=ke(Ee,Q,$e,ge,ze)}else if(ge=z(A),typeof ge=="function")for(A=ge.call(A),Be=0;!(Ee=A.next()).done;)Ee=Ee.value,ge=Se+de(Ee,Be++),Fe+=ke(Ee,Q,$e,ge,ze);else if(Ee==="object")throw Q=String(A),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Pe(A,Q,$e){if(A==null)return A;var Se=[],ze=0;return ke(A,Se,"","",function(Ee){return Q.call($e,Ee,ze++)}),Se}function Ge(A){if(A._status===-1){var Q=A._result;Q=Q(),Q.then(function($e){(A._status===0||A._status===-1)&&(A._status=1,A._result=$e)},function($e){(A._status===0||A._status===-1)&&(A._status=2,A._result=$e)}),A._status===-1&&(A._status=0,A._result=Q)}if(A._status===1)return A._result.default;throw A._result}var Re={current:null},le={transition:null},we={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:le,ReactCurrentOwner:K};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Pe,forEach:function(A,Q,$e){Pe(A,function(){Q.apply(this,arguments)},$e)},count:function(A){var Q=0;return Pe(A,function(){Q++}),Q},toArray:function(A){return Pe(A,function(Q){return Q})||[]},only:function(A){if(!me(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Le.Component=R,Le.Fragment=r,Le.Profiler=a,Le.PureComponent=F,Le.StrictMode=s,Le.Suspense=f,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=we,Le.act=ue,Le.cloneElement=function(A,Q,$e){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var Se=M({},A.props),ze=A.key,Ee=A.ref,Fe=A._owner;if(Q!=null){if(Q.ref!==void 0&&(Ee=Q.ref,Fe=K.current),Q.key!==void 0&&(ze=""+Q.key),A.type&&A.type.defaultProps)var Be=A.type.defaultProps;for(ge in Q)L.call(Q,ge)&&!B.hasOwnProperty(ge)&&(Se[ge]=Q[ge]===void 0&&Be!==void 0?Be[ge]:Q[ge])}var ge=arguments.length-2;if(ge===1)Se.children=$e;else if(1<ge){Be=Array(ge);for(var Ne=0;Ne<ge;Ne++)Be[Ne]=arguments[Ne+2];Se.children=Be}return{$$typeof:o,type:A.type,key:ze,ref:Ee,props:Se,_owner:Fe}},Le.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},Le.createElement=Z,Le.createFactory=function(A){var Q=Z.bind(null,A);return Q.type=A,Q},Le.createRef=function(){return{current:null}},Le.forwardRef=function(A){return{$$typeof:g,render:A}},Le.isValidElement=me,Le.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:Ge}},Le.memo=function(A,Q){return{$$typeof:v,type:A,compare:Q===void 0?null:Q}},Le.startTransition=function(A){var Q=le.transition;le.transition={};try{A()}finally{le.transition=Q}},Le.unstable_act=ue,Le.useCallback=function(A,Q){return Re.current.useCallback(A,Q)},Le.useContext=function(A){return Re.current.useContext(A)},Le.useDebugValue=function(){},Le.useDeferredValue=function(A){return Re.current.useDeferredValue(A)},Le.useEffect=function(A,Q){return Re.current.useEffect(A,Q)},Le.useId=function(){return Re.current.useId()},Le.useImperativeHandle=function(A,Q,$e){return Re.current.useImperativeHandle(A,Q,$e)},Le.useInsertionEffect=function(A,Q){return Re.current.useInsertionEffect(A,Q)},Le.useLayoutEffect=function(A,Q){return Re.current.useLayoutEffect(A,Q)},Le.useMemo=function(A,Q){return Re.current.useMemo(A,Q)},Le.useReducer=function(A,Q,$e){return Re.current.useReducer(A,Q,$e)},Le.useRef=function(A){return Re.current.useRef(A)},Le.useState=function(A){return Re.current.useState(A)},Le.useSyncExternalStore=function(A,Q,$e){return Re.current.useSyncExternalStore(A,Q,$e)},Le.useTransition=function(){return Re.current.useTransition()},Le.version="18.3.1",Le}var U1;function Ql(){return U1||(U1=1,hl.exports=Wf()),hl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1;function Gf(){if(V1)return To;V1=1;var o=Ql(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(g,f,v){var b,_={},z=null,k=null;v!==void 0&&(z=""+v),f.key!==void 0&&(z=""+f.key),f.ref!==void 0&&(k=f.ref);for(b in f)s.call(f,b)&&!u.hasOwnProperty(b)&&(_[b]=f[b]);if(g&&g.defaultProps)for(b in f=g.defaultProps,f)_[b]===void 0&&(_[b]=f[b]);return{$$typeof:t,type:g,key:z,ref:k,props:_,_owner:a.current}}return To.Fragment=r,To.jsx=d,To.jsxs=d,To}var K1;function Uf(){return K1||(K1=1,fl.exports=Gf()),fl.exports}var y=Uf(),W=Ql(),e0={},gl={exports:{}},Vn={},yl={exports:{}},vl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1;function Vf(){return Q1||(Q1=1,(function(o){function t(le,we){var ue=le.length;le.push(we);e:for(;0<ue;){var A=ue-1>>>1,Q=le[A];if(0<a(Q,we))le[A]=we,le[ue]=Q,ue=A;else break e}}function r(le){return le.length===0?null:le[0]}function s(le){if(le.length===0)return null;var we=le[0],ue=le.pop();if(ue!==we){le[0]=ue;e:for(var A=0,Q=le.length,$e=Q>>>1;A<$e;){var Se=2*(A+1)-1,ze=le[Se],Ee=Se+1,Fe=le[Ee];if(0>a(ze,ue))Ee<Q&&0>a(Fe,ze)?(le[A]=Fe,le[Ee]=ue,A=Ee):(le[A]=ze,le[Se]=ue,A=Se);else if(Ee<Q&&0>a(Fe,ue))le[A]=Fe,le[Ee]=ue,A=Ee;else break e}}return we}function a(le,we){var ue=le.sortIndex-we.sortIndex;return ue!==0?ue:le.id-we.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,g=d.now();o.unstable_now=function(){return d.now()-g}}var f=[],v=[],b=1,_=null,z=3,k=!1,M=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(le){for(var we=r(v);we!==null;){if(we.callback===null)s(v);else if(we.startTime<=le)s(v),we.sortIndex=we.expirationTime,t(f,we);else break;we=r(v)}}function I(le){if(P=!1,G(le),!M)if(r(f)!==null)M=!0,Ge(L);else{var we=r(v);we!==null&&Re(I,we.startTime-le)}}function L(le,we){M=!1,P&&(P=!1,E(Z),Z=-1),k=!0;var ue=z;try{for(G(we),_=r(f);_!==null&&(!(_.expirationTime>we)||le&&!be());){var A=_.callback;if(typeof A=="function"){_.callback=null,z=_.priorityLevel;var Q=A(_.expirationTime<=we);we=o.unstable_now(),typeof Q=="function"?_.callback=Q:_===r(f)&&s(f),G(we)}else s(f);_=r(f)}if(_!==null)var $e=!0;else{var Se=r(v);Se!==null&&Re(I,Se.startTime-we),$e=!1}return $e}finally{_=null,z=ue,k=!1}}var K=!1,B=null,Z=-1,X=5,me=-1;function be(){return!(o.unstable_now()-me<X)}function Y(){if(B!==null){var le=o.unstable_now();me=le;var we=!0;try{we=B(!0,le)}finally{we?de():(K=!1,B=null)}}else K=!1}var de;if(typeof F=="function")de=function(){F(Y)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Pe=ke.port2;ke.port1.onmessage=Y,de=function(){Pe.postMessage(null)}}else de=function(){R(Y,0)};function Ge(le){B=le,K||(K=!0,de())}function Re(le,we){Z=R(function(){le(o.unstable_now())},we)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(le){le.callback=null},o.unstable_continueExecution=function(){M||k||(M=!0,Ge(L))},o.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<le?Math.floor(1e3/le):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return r(f)},o.unstable_next=function(le){switch(z){case 1:case 2:case 3:var we=3;break;default:we=z}var ue=z;z=we;try{return le()}finally{z=ue}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(le,we){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var ue=z;z=le;try{return we()}finally{z=ue}},o.unstable_scheduleCallback=function(le,we,ue){var A=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?A+ue:A):ue=A,le){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ue+Q,le={id:b++,callback:we,priorityLevel:le,startTime:ue,expirationTime:Q,sortIndex:-1},ue>A?(le.sortIndex=ue,t(v,le),r(f)===null&&le===r(v)&&(P?(E(Z),Z=-1):P=!0,Re(I,ue-A))):(le.sortIndex=Q,t(f,le),M||k||(M=!0,Ge(L))),le},o.unstable_shouldYield=be,o.unstable_wrapCallback=function(le){var we=z;return function(){var ue=z;z=we;try{return le.apply(this,arguments)}finally{z=ue}}}})(vl)),vl}var Z1;function Kf(){return Z1||(Z1=1,yl.exports=Vf()),yl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1;function Qf(){if(Y1)return Vn;Y1=1;var o=Ql(),t=Kf();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(a[e]=n,e=0;e<n.length;e++)s.add(n[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},_={};function z(e){return f.call(_,e)?!0:f.call(b,e)?!1:v.test(e)?_[e]=!0:(b[e]=!0,!1)}function k(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,n,i,l){if(n===null||typeof n>"u"||k(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(e,n,i,l,c,p,$){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=$}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new P(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(E,F);R[n]=new P(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(E,F);R[n]=new P(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(E,F);R[n]=new P(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,n,i,l){var c=R.hasOwnProperty(n)?R[n]:null;(c!==null?c.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(M(n,i,c,l)&&(i=null),l||c===null?z(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(n=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(n):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var I=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),K=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),be=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),le=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,A;function Q(e){if(A===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||""}return`
`+A+e}var $e=!1;function Se(e,n){if(!e||$e)return"";$e=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(U){var l=U}Reflect.construct(e,[],n)}else{try{n.call()}catch(U){l=U}e.call(n.prototype)}else{try{throw Error()}catch(U){l=U}e()}}catch(U){if(U&&l&&typeof U.stack=="string"){for(var c=U.stack.split(`
`),p=l.stack.split(`
`),$=c.length-1,S=p.length-1;1<=$&&0<=S&&c[$]!==p[S];)S--;for(;1<=$&&0<=S;$--,S--)if(c[$]!==p[S]){if($!==1||S!==1)do if($--,S--,0>S||c[$]!==p[S]){var T=`
`+c[$].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=$&&0<=S);break}}}finally{$e=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Q(e):""}function ze(e){switch(e.tag){case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function Ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Portal";case X:return"Profiler";case Z:return"StrictMode";case de:return"Suspense";case ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case be:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case Y:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pe:return n=e.displayName||null,n!==null?n:Ee(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return Ee(e(n))}catch{}}return null}function Fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(n);case 8:return n===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ne(e){var n=ge(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,p=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function($){l=""+$,p.call(this,$)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function($){l=""+$},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Ne(e))}function Fn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=ge(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bt(e,n){var i=n.checked;return ue({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ai(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=Be(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Et(e,n){n=n.checked,n!=null&&G(e,"checked",n,!1)}function rr(e,n){Et(e,n);var i=Be(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?wt(e,n.type,i):n.hasOwnProperty("defaultValue")&&wt(e,n.type,Be(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Er(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function wt(e,n,i){(n!=="number"||wn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Zn=Array.isArray;function Ln(e,n,i,l){if(e=e.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=n.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Be(i),n=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function li(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return ue({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(Zn(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:Be(i)}}function He(e,n){var i=Be(n.value),l=Be(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function rt(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ir(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cn,or=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,c)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sr(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){T0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Br[n]=Br[e]})});function Gi(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Br.hasOwnProperty(e)&&Br[e]?(""+n).trim():n+"px"}function Lo(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Gi(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var Bt=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nr(e,n){if(n){if(Bt[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Nt(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,It=null,_t=null;function Ir(e){if(e=fo(e)){if(typeof Vi!="function")throw Error(r(280));var n=e.stateNode;n&&(n=hs(n),Vi(e.stateNode,e.type,n))}}function Oo(e){It?_t?_t.push(e):_t=[e]:It=e}function Ho(){if(It){var e=It,n=_t;if(_t=It=null,Ir(e),n)for(e=0;e<n.length;e++)Ir(n[e])}}function ci(e,n){return e(n)}function Wo(){}var Ft=!1;function Fr(e,n,i){if(Ft)return e(n,i);Ft=!0;try{return ci(e,n,i)}finally{Ft=!1,(It!==null||_t!==null)&&(Wo(),Ho())}}function kt(e,n){var i=e.stateNode;if(i===null)return null;var l=hs(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var Lr=!1;if(g)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Lr=!1}function ar(e,n,i,l,c,p,$,S,T){var U=Array.prototype.slice.call(arguments,3);try{n.apply(i,U)}catch(te){this.onError(te)}}var Hr=!1,zt=null,Wr=!1,di=null,A0={onError:function(e){Hr=!0,zt=e}};function M0(e,n,i,l,c,p,$,S,T){Hr=!1,zt=null,ar.apply(A0,arguments)}function Go(e,n,i,l,c,p,$,S,T){if(M0.apply(this,arguments),Hr){if(Hr){var U=zt;Hr=!1,zt=null}else throw Error(r(198));Wr||(Wr=!0,di=U)}}function Lt(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function lr(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Uo(e){if(Lt(e)!==e)throw Error(r(188))}function P0(e){var n=e.alternate;if(!n){if(n=Lt(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,l=n;;){var c=i.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===i)return Uo(c),e;if(p===l)return Uo(c),n;p=p.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=p;else{for(var $=!1,S=c.child;S;){if(S===i){$=!0,i=c,l=p;break}if(S===l){$=!0,l=c,i=p;break}S=S.sibling}if(!$){for(S=p.child;S;){if(S===i){$=!0,i=p,l=c;break}if(S===l){$=!0,l=p,i=c;break}S=S.sibling}if(!$)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function mi(e){return e=P0(e),e!==null?Vo(e):null}function Vo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Vo(e);if(n!==null)return n;e=e.sibling}return null}var Ko=t.unstable_scheduleCallback,pi=t.unstable_cancelCallback,C0=t.unstable_shouldYield,R0=t.unstable_requestPaint,on=t.unstable_now,Qo=t.unstable_getCurrentPriorityLevel,J=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,We=t.unstable_NormalPriority,Ki=t.unstable_LowPriority,bu=t.unstable_IdlePriority,Zo=null,St=null;function ip(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:ap,op=Math.log,sp=Math.LN2;function ap(e){return e>>>=0,e===0?32:31-(op(e)/sp|0)|0}var Yo=64,Xo=4194304;function Qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,p=e.pingedLanes,$=i&268435455;if($!==0){var S=$&~c;S!==0?l=Qi(S):(p&=$,p!==0&&(l=Qi(p)))}else $=i&~c,$!==0?l=Qi($):p!==0&&(l=Qi(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&c)===0&&(c=l&-l,p=n&-n,c>=p||c===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-ft(n),c=1<<i,l|=e[i],n&=~c;return l}function lp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,p=e.pendingLanes;0<p;){var $=31-ft(p),S=1<<$,T=c[$];T===-1?((S&i)===0||(S&l)!==0)&&(c[$]=lp(S,n)):T<=n&&(e.expiredLanes|=S),p&=~S}}function D0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wu(){var e=Yo;return Yo<<=1,(Yo&4194240)===0&&(Yo=64),e}function E0(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Zi(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ft(n),e[n]=i}function cp(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-ft(i),p=1<<c;n[c]=0,l[c]=-1,e[c]=-1,i&=~p}}function B0(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-ft(i),c=1<<l;c&n|e[l]&n&&(e[l]|=n),i&=~c}}var Ze=0;function _u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ku,N0,zu,Su,ju,I0=!1,es=[],ur=null,cr=null,dr=null,Yi=new Map,Xi=new Map,mr=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,n){switch(e){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Yi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(n.pointerId)}}function Ji(e,n,i,l,c,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},n!==null&&(n=fo(n),n!==null&&N0(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function mp(e,n,i,l,c){switch(n){case"focusin":return ur=Ji(ur,e,n,i,l,c),!0;case"dragenter":return cr=Ji(cr,e,n,i,l,c),!0;case"mouseover":return dr=Ji(dr,e,n,i,l,c),!0;case"pointerover":var p=c.pointerId;return Yi.set(p,Ji(Yi.get(p)||null,e,n,i,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Xi.set(p,Ji(Xi.get(p)||null,e,n,i,l,c)),!0}return!1}function Tu(e){var n=Gr(e.target);if(n!==null){var i=Lt(n);if(i!==null){if(n=i.tag,n===13){if(n=lr(i),n!==null){e.blockedOn=n,ju(e.priority,function(){zu(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=L0(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);ui=l,i.target.dispatchEvent(l),ui=null}else return n=fo(i),n!==null&&N0(n),e.blockedOn=i,!1;n.shift()}return!0}function Au(e,n,i){ns(e)&&i.delete(n)}function pp(){I0=!1,ur!==null&&ns(ur)&&(ur=null),cr!==null&&ns(cr)&&(cr=null),dr!==null&&ns(dr)&&(dr=null),Yi.forEach(Au),Xi.forEach(Au)}function eo(e,n){e.blockedOn===n&&(e.blockedOn=null,I0||(I0=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,pp)))}function no(e){function n(c){return eo(c,e)}if(0<es.length){eo(es[0],e);for(var i=1;i<es.length;i++){var l=es[i];l.blockedOn===e&&(l.blockedOn=null)}}for(ur!==null&&eo(ur,e),cr!==null&&eo(cr,e),dr!==null&&eo(dr,e),Yi.forEach(n),Xi.forEach(n),i=0;i<mr.length;i++)l=mr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<mr.length&&(i=mr[0],i.blockedOn===null);)Tu(i),i.blockedOn===null&&mr.shift()}var fi=I.ReactCurrentBatchConfig,ts=!0;function fp(e,n,i,l){var c=Ze,p=fi.transition;fi.transition=null;try{Ze=1,F0(e,n,i,l)}finally{Ze=c,fi.transition=p}}function hp(e,n,i,l){var c=Ze,p=fi.transition;fi.transition=null;try{Ze=4,F0(e,n,i,l)}finally{Ze=c,fi.transition=p}}function F0(e,n,i,l){if(ts){var c=L0(e,n,i,l);if(c===null)ia(e,n,l,rs,i),qu(e,l);else if(mp(c,e,n,i,l))l.stopPropagation();else if(qu(e,l),n&4&&-1<dp.indexOf(e)){for(;c!==null;){var p=fo(c);if(p!==null&&ku(p),p=L0(e,n,i,l),p===null&&ia(e,n,l,rs,i),p===c)break;c=p}c!==null&&l.stopPropagation()}else ia(e,n,l,null,i)}}var rs=null;function L0(e,n,i,l){if(rs=null,e=Ui(l),e=Gr(e),e!==null)if(n=Lt(e),n===null)e=null;else if(i=n.tag,i===13){if(e=lr(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return rs=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qo()){case J:return 1;case Oe:return 4;case We:case Ki:return 16;case bu:return 536870912;default:return 16}default:return 16}}var pr=null,O0=null,is=null;function Pu(){if(is)return is;var e,n=O0,i=n.length,l,c="value"in pr?pr.value:pr.textContent,p=c.length;for(e=0;e<i&&n[e]===c[e];e++);var $=i-e;for(l=1;l<=$&&n[i-l]===c[p-l];l++);return is=c.slice(e,1<l?1-l:void 0)}function os(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ss(){return!0}function Cu(){return!1}function Yn(e){function n(i,l,c,p,$){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=$,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ss:Cu,this.isPropagationStopped=Cu,this}return ue(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ss)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ss)},persist:function(){},isPersistent:ss}),n}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},H0=Yn(hi),to=ue({},hi,{view:0,detail:0}),gp=Yn(to),W0,G0,ro,as=ue({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(W0=e.screenX-ro.screenX,G0=e.screenY-ro.screenY):G0=W0=0,ro=e),W0)},movementY:function(e){return"movementY"in e?e.movementY:G0}}),Ru=Yn(as),yp=ue({},as,{dataTransfer:0}),vp=Yn(yp),xp=ue({},to,{relatedTarget:0}),U0=Yn(xp),$p=ue({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=Yn($p),wp=ue({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Yn(wp),kp=ue({},hi,{data:0}),Du=Yn(kp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jp[e])?!!n[e]:!1}function V0(){return qp}var Tp=ue({},to,{key:function(e){if(e.key){var n=zp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V0,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Yn(Tp),Mp=ue({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eu=Yn(Mp),Pp=ue({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V0}),Cp=Yn(Pp),Rp=ue({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=Yn(Rp),Ep=ue({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Yn(Ep),Np=[9,13,27,32],K0=g&&"CompositionEvent"in window,io=null;g&&"documentMode"in document&&(io=document.documentMode);var Ip=g&&"TextEvent"in window&&!io,Bu=g&&(!K0||io&&8<io&&11>=io),Nu=" ",Iu=!1;function Fu(e,n){switch(e){case"keyup":return Np.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gi=!1;function Fp(e,n){switch(e){case"compositionend":return Lu(n);case"keypress":return n.which!==32?null:(Iu=!0,Nu);case"textInput":return e=n.data,e===Nu&&Iu?null:e;default:return null}}function Lp(e,n){if(gi)return e==="compositionend"||!K0&&Fu(e,n)?(e=Pu(),is=O0=pr=null,gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bu&&n.locale!=="ko"?null:n.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Op[e.type]:n==="textarea"}function Hu(e,n,i,l){Oo(l),n=ms(n,"onChange"),0<n.length&&(i=new H0("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var oo=null,so=null;function Hp(e){ac(e,0)}function ls(e){var n=bi(e);if(Fn(n))return e}function Wp(e,n){if(e==="change")return n}var Wu=!1;if(g){var Q0;if(g){var Z0="oninput"in document;if(!Z0){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),Z0=typeof Gu.oninput=="function"}Q0=Z0}else Q0=!1;Wu=Q0&&(!document.documentMode||9<document.documentMode)}function Uu(){oo&&(oo.detachEvent("onpropertychange",Vu),so=oo=null)}function Vu(e){if(e.propertyName==="value"&&ls(so)){var n=[];Hu(n,so,e,Ui(e)),Fr(Hp,n)}}function Gp(e,n,i){e==="focusin"?(Uu(),oo=n,so=i,oo.attachEvent("onpropertychange",Vu)):e==="focusout"&&Uu()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ls(so)}function Vp(e,n){if(e==="click")return ls(n)}function Kp(e,n){if(e==="input"||e==="change")return ls(n)}function Qp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ht=typeof Object.is=="function"?Object.is:Qp;function ao(e,n){if(ht(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!f.call(n,c)||!ht(e[c],n[c]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,n){var i=Ku(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ku(i)}}function Zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yu(){for(var e=window,n=wn();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=wn(e.document)}return n}function Y0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zp(e){var n=Yu(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Zu(i.ownerDocument.documentElement,i)){if(l!==null&&Y0(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!e.extend&&p>l&&(c=l,l=p,p=c),c=Qu(i,p);var $=Qu(i,l);c&&$&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==$.node||e.focusOffset!==$.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),e.removeAllRanges(),p>l?(e.addRange(n),e.extend($.node,$.offset)):(n.setEnd($.node,$.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yp=g&&"documentMode"in document&&11>=document.documentMode,yi=null,X0=null,lo=null,J0=!1;function Xu(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;J0||yi==null||yi!==wn(l)||(l=yi,"selectionStart"in l&&Y0(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=ms(X0,"onSelect"),0<l.length&&(n=new H0("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=yi)))}function us(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var vi={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},ea={},Ju={};g&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function cs(e){if(ea[e])return ea[e];if(!vi[e])return e;var n=vi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ju)return ea[e]=n[i];return e}var ec=cs("animationend"),nc=cs("animationiteration"),tc=cs("animationstart"),rc=cs("transitionend"),ic=new Map,oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,n){ic.set(e,n),u(n,[e])}for(var na=0;na<oc.length;na++){var ta=oc[na],Xp=ta.toLowerCase(),Jp=ta[0].toUpperCase()+ta.slice(1);fr(Xp,"on"+Jp)}fr(ec,"onAnimationEnd"),fr(nc,"onAnimationIteration"),fr(tc,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(rc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function sc(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,Go(l,n,void 0,e),e.currentTarget=null}function ac(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var $=l.length-1;0<=$;$--){var S=l[$],T=S.instance,U=S.currentTarget;if(S=S.listener,T!==p&&c.isPropagationStopped())break e;sc(c,S,U),p=T}else for($=0;$<l.length;$++){if(S=l[$],T=S.instance,U=S.currentTarget,S=S.listener,T!==p&&c.isPropagationStopped())break e;sc(c,S,U),p=T}}}if(Wr)throw e=di,Wr=!1,di=null,e}function en(e,n){var i=n[ca];i===void 0&&(i=n[ca]=new Set);var l=e+"__bubble";i.has(l)||(lc(n,e,2,!1),i.add(l))}function ra(e,n,i){var l=0;n&&(l|=4),lc(i,e,l,n)}var ds="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[ds]){e[ds]=!0,s.forEach(function(i){i!=="selectionchange"&&(ef.has(i)||ra(i,!1,e),ra(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ds]||(n[ds]=!0,ra("selectionchange",!1,n))}}function lc(e,n,i,l){switch(Mu(n)){case 1:var c=fp;break;case 4:c=hp;break;default:c=F0}i=c.bind(null,n,i,e),c=void 0,!Lr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(n,i,{capture:!0,passive:c}):e.addEventListener(n,i,!0):c!==void 0?e.addEventListener(n,i,{passive:c}):e.addEventListener(n,i,!1)}function ia(e,n,i,l,c){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var $=l.tag;if($===3||$===4){var S=l.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if($===4)for($=l.return;$!==null;){var T=$.tag;if((T===3||T===4)&&(T=$.stateNode.containerInfo,T===c||T.nodeType===8&&T.parentNode===c))return;$=$.return}for(;S!==null;){if($=Gr(S),$===null)return;if(T=$.tag,T===5||T===6){l=p=$;continue e}S=S.parentNode}}l=l.return}Fr(function(){var U=p,te=Ui(i),ie=[];e:{var ee=ic.get(e);if(ee!==void 0){var fe=H0,ve=e;switch(e){case"keypress":if(os(i)===0)break e;case"keydown":case"keyup":fe=Ap;break;case"focusin":ve="focus",fe=U0;break;case"focusout":ve="blur",fe=U0;break;case"beforeblur":case"afterblur":fe=U0;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Cp;break;case ec:case nc:case tc:fe=bp;break;case rc:fe=Dp;break;case"scroll":fe=gp;break;case"wheel":fe=Bp;break;case"copy":case"cut":case"paste":fe=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Eu}var xe=(n&4)!==0,fn=!xe&&e==="scroll",N=xe?ee!==null?ee+"Capture":null:ee;xe=[];for(var D=U,O;D!==null;){O=D;var ae=O.stateNode;if(O.tag===5&&ae!==null&&(O=ae,N!==null&&(ae=kt(D,N),ae!=null&&xe.push(mo(D,ae,O)))),fn)break;D=D.return}0<xe.length&&(ee=new fe(ee,ve,null,i,te),ie.push({event:ee,listeners:xe}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ee&&i!==ui&&(ve=i.relatedTarget||i.fromElement)&&(Gr(ve)||ve[Ot]))break e;if((fe||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(ve=i.relatedTarget||i.toElement,fe=U,ve=ve?Gr(ve):null,ve!==null&&(fn=Lt(ve),ve!==fn||ve.tag!==5&&ve.tag!==6)&&(ve=null)):(fe=null,ve=U),fe!==ve)){if(xe=Ru,ae="onMouseLeave",N="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(xe=Eu,ae="onPointerLeave",N="onPointerEnter",D="pointer"),fn=fe==null?ee:bi(fe),O=ve==null?ee:bi(ve),ee=new xe(ae,D+"leave",fe,i,te),ee.target=fn,ee.relatedTarget=O,ae=null,Gr(te)===U&&(xe=new xe(N,D+"enter",ve,i,te),xe.target=O,xe.relatedTarget=fn,ae=xe),fn=ae,fe&&ve)n:{for(xe=fe,N=ve,D=0,O=xe;O;O=xi(O))D++;for(O=0,ae=N;ae;ae=xi(ae))O++;for(;0<D-O;)xe=xi(xe),D--;for(;0<O-D;)N=xi(N),O--;for(;D--;){if(xe===N||N!==null&&xe===N.alternate)break n;xe=xi(xe),N=xi(N)}xe=null}else xe=null;fe!==null&&uc(ie,ee,fe,xe,!1),ve!==null&&fn!==null&&uc(ie,fn,ve,xe,!0)}}e:{if(ee=U?bi(U):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var _e=Wp;else if(Ou(ee))if(Wu)_e=Kp;else{_e=Up;var qe=Gp}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(_e=Vp);if(_e&&(_e=_e(e,U))){Hu(ie,_e,i,te);break e}qe&&qe(e,ee,U),e==="focusout"&&(qe=ee._wrapperState)&&qe.controlled&&ee.type==="number"&&wt(ee,"number",ee.value)}switch(qe=U?bi(U):window,e){case"focusin":(Ou(qe)||qe.contentEditable==="true")&&(yi=qe,X0=U,lo=null);break;case"focusout":lo=X0=yi=null;break;case"mousedown":J0=!0;break;case"contextmenu":case"mouseup":case"dragend":J0=!1,Xu(ie,i,te);break;case"selectionchange":if(Yp)break;case"keydown":case"keyup":Xu(ie,i,te)}var Te;if(K0)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else gi?Fu(e,i)&&(Ce="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ce="onCompositionStart");Ce&&(Bu&&i.locale!=="ko"&&(gi||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&gi&&(Te=Pu()):(pr=te,O0="value"in pr?pr.value:pr.textContent,gi=!0)),qe=ms(U,Ce),0<qe.length&&(Ce=new Du(Ce,e,null,i,te),ie.push({event:Ce,listeners:qe}),Te?Ce.data=Te:(Te=Lu(i),Te!==null&&(Ce.data=Te)))),(Te=Ip?Fp(e,i):Lp(e,i))&&(U=ms(U,"onBeforeInput"),0<U.length&&(te=new Du("onBeforeInput","beforeinput",null,i,te),ie.push({event:te,listeners:U}),te.data=Te))}ac(ie,n)})}function mo(e,n,i){return{instance:e,listener:n,currentTarget:i}}function ms(e,n){for(var i=n+"Capture",l=[];e!==null;){var c=e,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=kt(e,i),p!=null&&l.unshift(mo(e,p,c)),p=kt(e,n),p!=null&&l.push(mo(e,p,c))),e=e.return}return l}function xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uc(e,n,i,l,c){for(var p=n._reactName,$=[];i!==null&&i!==l;){var S=i,T=S.alternate,U=S.stateNode;if(T!==null&&T===l)break;S.tag===5&&U!==null&&(S=U,c?(T=kt(i,p),T!=null&&$.unshift(mo(i,T,S))):c||(T=kt(i,p),T!=null&&$.push(mo(i,T,S)))),i=i.return}$.length!==0&&e.push({event:n,listeners:$})}var nf=/\r\n?/g,tf=/\u0000|\uFFFD/g;function cc(e){return(typeof e=="string"?e:""+e).replace(nf,`
`).replace(tf,"")}function ps(e,n,i){if(n=cc(n),cc(e)!==n&&i)throw Error(r(425))}function fs(){}var oa=null,sa=null;function aa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var la=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(sf)}:la;function sf(e){setTimeout(function(){throw e})}function ua(e,n){var i=n,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),no(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);no(n)}function hr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),jt="__reactFiber$"+$i,po="__reactProps$"+$i,Ot="__reactContainer$"+$i,ca="__reactEvents$"+$i,af="__reactListeners$"+$i,lf="__reactHandles$"+$i;function Gr(e){var n=e[jt];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ot]||i[jt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=mc(e);e!==null;){if(i=e[jt])return i;e=mc(e)}return n}e=i,i=e.parentNode}return null}function fo(e){return e=e[jt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function hs(e){return e[po]||null}var da=[],wi=-1;function gr(e){return{current:e}}function nn(e){0>wi||(e.current=da[wi],da[wi]=null,wi--)}function Xe(e,n){wi++,da[wi]=e.current,e.current=n}var yr={},qn=gr(yr),On=gr(!1),Ur=yr;function _i(e,n){var i=e.type.contextTypes;if(!i)return yr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in i)c[p]=n[p];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=c),c}function Hn(e){return e=e.childContextTypes,e!=null}function gs(){nn(On),nn(qn)}function pc(e,n,i){if(qn.current!==yr)throw Error(r(168));Xe(qn,n),Xe(On,i)}function fc(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in n))throw Error(r(108,Fe(e)||"Unknown",c));return ue({},i,l)}function ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yr,Ur=qn.current,Xe(qn,e),Xe(On,On.current),!0}function hc(e,n,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=fc(e,n,Ur),l.__reactInternalMemoizedMergedChildContext=e,nn(On),nn(qn),Xe(qn,e)):nn(On),Xe(On,i)}var Ht=null,vs=!1,ma=!1;function gc(e){Ht===null?Ht=[e]:Ht.push(e)}function uf(e){vs=!0,gc(e)}function vr(){if(!ma&&Ht!==null){ma=!0;var e=0,n=Ze;try{var i=Ht;for(Ze=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Ht=null,vs=!1}catch(c){throw Ht!==null&&(Ht=Ht.slice(e+1)),Ko(J,vr),c}finally{Ze=n,ma=!1}}return null}var ki=[],zi=0,xs=null,$s=0,it=[],ot=0,Vr=null,Wt=1,Gt="";function Kr(e,n){ki[zi++]=$s,ki[zi++]=xs,xs=e,$s=n}function yc(e,n,i){it[ot++]=Wt,it[ot++]=Gt,it[ot++]=Vr,Vr=e;var l=Wt;e=Gt;var c=32-ft(l)-1;l&=~(1<<c),i+=1;var p=32-ft(n)+c;if(30<p){var $=c-c%5;p=(l&(1<<$)-1).toString(32),l>>=$,c-=$,Wt=1<<32-ft(n)+c|i<<c|l,Gt=p+e}else Wt=1<<p|i<<c|l,Gt=e}function pa(e){e.return!==null&&(Kr(e,1),yc(e,1,0))}function fa(e){for(;e===xs;)xs=ki[--zi],ki[zi]=null,$s=ki[--zi],ki[zi]=null;for(;e===Vr;)Vr=it[--ot],it[ot]=null,Gt=it[--ot],it[ot]=null,Wt=it[--ot],it[ot]=null}var Xn=null,Jn=null,tn=!1,gt=null;function vc(e,n){var i=ut(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function xc(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Xn=e,Jn=hr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Xn=e,Jn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Vr!==null?{id:Wt,overflow:Gt}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=ut(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Xn=e,Jn=null,!0):!1;default:return!1}}function ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ga(e){if(tn){var n=Jn;if(n){var i=n;if(!xc(e,n)){if(ha(e))throw Error(r(418));n=hr(i.nextSibling);var l=Xn;n&&xc(e,n)?vc(l,i):(e.flags=e.flags&-4097|2,tn=!1,Xn=e)}}else{if(ha(e))throw Error(r(418));e.flags=e.flags&-4097|2,tn=!1,Xn=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xn=e}function bs(e){if(e!==Xn)return!1;if(!tn)return $c(e),tn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!aa(e.type,e.memoizedProps)),n&&(n=Jn)){if(ha(e))throw bc(),Error(r(418));for(;n;)vc(e,n),n=hr(n.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Jn=hr(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Jn=null}}else Jn=Xn?hr(e.stateNode.nextSibling):null;return!0}function bc(){for(var e=Jn;e;)e=hr(e.nextSibling)}function Si(){Jn=Xn=null,tn=!1}function ya(e){gt===null?gt=[e]:gt.push(e)}var cf=I.ReactCurrentBatchConfig;function ho(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function($){var S=c.refs;$===null?delete S[p]:S[p]=$},n._stringRef=p,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function ws(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wc(e){var n=e._init;return n(e._payload)}function _c(e){function n(N,D){if(e){var O=N.deletions;O===null?(N.deletions=[D],N.flags|=16):O.push(D)}}function i(N,D){if(!e)return null;for(;D!==null;)n(N,D),D=D.sibling;return null}function l(N,D){for(N=new Map;D!==null;)D.key!==null?N.set(D.key,D):N.set(D.index,D),D=D.sibling;return N}function c(N,D){return N=Sr(N,D),N.index=0,N.sibling=null,N}function p(N,D,O){return N.index=O,e?(O=N.alternate,O!==null?(O=O.index,O<D?(N.flags|=2,D):O):(N.flags|=2,D)):(N.flags|=1048576,D)}function $(N){return e&&N.alternate===null&&(N.flags|=2),N}function S(N,D,O,ae){return D===null||D.tag!==6?(D=ll(O,N.mode,ae),D.return=N,D):(D=c(D,O),D.return=N,D)}function T(N,D,O,ae){var _e=O.type;return _e===B?te(N,D,O.props.children,ae,O.key):D!==null&&(D.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Ge&&wc(_e)===D.type)?(ae=c(D,O.props),ae.ref=ho(N,D,O),ae.return=N,ae):(ae=Us(O.type,O.key,O.props,null,N.mode,ae),ae.ref=ho(N,D,O),ae.return=N,ae)}function U(N,D,O,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==O.containerInfo||D.stateNode.implementation!==O.implementation?(D=ul(O,N.mode,ae),D.return=N,D):(D=c(D,O.children||[]),D.return=N,D)}function te(N,D,O,ae,_e){return D===null||D.tag!==7?(D=ti(O,N.mode,ae,_e),D.return=N,D):(D=c(D,O),D.return=N,D)}function ie(N,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return D=ll(""+D,N.mode,O),D.return=N,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case L:return O=Us(D.type,D.key,D.props,null,N.mode,O),O.ref=ho(N,null,D),O.return=N,O;case K:return D=ul(D,N.mode,O),D.return=N,D;case Ge:var ae=D._init;return ie(N,ae(D._payload),O)}if(Zn(D)||we(D))return D=ti(D,N.mode,O,null),D.return=N,D;ws(N,D)}return null}function ee(N,D,O,ae){var _e=D!==null?D.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return _e!==null?null:S(N,D,""+O,ae);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case L:return O.key===_e?T(N,D,O,ae):null;case K:return O.key===_e?U(N,D,O,ae):null;case Ge:return _e=O._init,ee(N,D,_e(O._payload),ae)}if(Zn(O)||we(O))return _e!==null?null:te(N,D,O,ae,null);ws(N,O)}return null}function fe(N,D,O,ae,_e){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return N=N.get(O)||null,S(D,N,""+ae,_e);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:return N=N.get(ae.key===null?O:ae.key)||null,T(D,N,ae,_e);case K:return N=N.get(ae.key===null?O:ae.key)||null,U(D,N,ae,_e);case Ge:var qe=ae._init;return fe(N,D,O,qe(ae._payload),_e)}if(Zn(ae)||we(ae))return N=N.get(O)||null,te(D,N,ae,_e,null);ws(D,ae)}return null}function ve(N,D,O,ae){for(var _e=null,qe=null,Te=D,Ce=D=0,zn=null;Te!==null&&Ce<O.length;Ce++){Te.index>Ce?(zn=Te,Te=null):zn=Te.sibling;var Ke=ee(N,Te,O[Ce],ae);if(Ke===null){Te===null&&(Te=zn);break}e&&Te&&Ke.alternate===null&&n(N,Te),D=p(Ke,D,Ce),qe===null?_e=Ke:qe.sibling=Ke,qe=Ke,Te=zn}if(Ce===O.length)return i(N,Te),tn&&Kr(N,Ce),_e;if(Te===null){for(;Ce<O.length;Ce++)Te=ie(N,O[Ce],ae),Te!==null&&(D=p(Te,D,Ce),qe===null?_e=Te:qe.sibling=Te,qe=Te);return tn&&Kr(N,Ce),_e}for(Te=l(N,Te);Ce<O.length;Ce++)zn=fe(Te,N,Ce,O[Ce],ae),zn!==null&&(e&&zn.alternate!==null&&Te.delete(zn.key===null?Ce:zn.key),D=p(zn,D,Ce),qe===null?_e=zn:qe.sibling=zn,qe=zn);return e&&Te.forEach(function(jr){return n(N,jr)}),tn&&Kr(N,Ce),_e}function xe(N,D,O,ae){var _e=we(O);if(typeof _e!="function")throw Error(r(150));if(O=_e.call(O),O==null)throw Error(r(151));for(var qe=_e=null,Te=D,Ce=D=0,zn=null,Ke=O.next();Te!==null&&!Ke.done;Ce++,Ke=O.next()){Te.index>Ce?(zn=Te,Te=null):zn=Te.sibling;var jr=ee(N,Te,Ke.value,ae);if(jr===null){Te===null&&(Te=zn);break}e&&Te&&jr.alternate===null&&n(N,Te),D=p(jr,D,Ce),qe===null?_e=jr:qe.sibling=jr,qe=jr,Te=zn}if(Ke.done)return i(N,Te),tn&&Kr(N,Ce),_e;if(Te===null){for(;!Ke.done;Ce++,Ke=O.next())Ke=ie(N,Ke.value,ae),Ke!==null&&(D=p(Ke,D,Ce),qe===null?_e=Ke:qe.sibling=Ke,qe=Ke);return tn&&Kr(N,Ce),_e}for(Te=l(N,Te);!Ke.done;Ce++,Ke=O.next())Ke=fe(Te,N,Ce,Ke.value,ae),Ke!==null&&(e&&Ke.alternate!==null&&Te.delete(Ke.key===null?Ce:Ke.key),D=p(Ke,D,Ce),qe===null?_e=Ke:qe.sibling=Ke,qe=Ke);return e&&Te.forEach(function(Hf){return n(N,Hf)}),tn&&Kr(N,Ce),_e}function fn(N,D,O,ae){if(typeof O=="object"&&O!==null&&O.type===B&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case L:e:{for(var _e=O.key,qe=D;qe!==null;){if(qe.key===_e){if(_e=O.type,_e===B){if(qe.tag===7){i(N,qe.sibling),D=c(qe,O.props.children),D.return=N,N=D;break e}}else if(qe.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===Ge&&wc(_e)===qe.type){i(N,qe.sibling),D=c(qe,O.props),D.ref=ho(N,qe,O),D.return=N,N=D;break e}i(N,qe);break}else n(N,qe);qe=qe.sibling}O.type===B?(D=ti(O.props.children,N.mode,ae,O.key),D.return=N,N=D):(ae=Us(O.type,O.key,O.props,null,N.mode,ae),ae.ref=ho(N,D,O),ae.return=N,N=ae)}return $(N);case K:e:{for(qe=O.key;D!==null;){if(D.key===qe)if(D.tag===4&&D.stateNode.containerInfo===O.containerInfo&&D.stateNode.implementation===O.implementation){i(N,D.sibling),D=c(D,O.children||[]),D.return=N,N=D;break e}else{i(N,D);break}else n(N,D);D=D.sibling}D=ul(O,N.mode,ae),D.return=N,N=D}return $(N);case Ge:return qe=O._init,fn(N,D,qe(O._payload),ae)}if(Zn(O))return ve(N,D,O,ae);if(we(O))return xe(N,D,O,ae);ws(N,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,D!==null&&D.tag===6?(i(N,D.sibling),D=c(D,O),D.return=N,N=D):(i(N,D),D=ll(O,N.mode,ae),D.return=N,N=D),$(N)):i(N,D)}return fn}var ji=_c(!0),kc=_c(!1),_s=gr(null),ks=null,qi=null,va=null;function xa(){va=qi=ks=null}function $a(e){var n=_s.current;nn(_s),e._currentValue=n}function ba(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function Ti(e,n){ks=e,va=qi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Wn=!0),e.firstContext=null)}function st(e){var n=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:n,next:null},qi===null){if(ks===null)throw Error(r(308));qi=e,ks.dependencies={lanes:0,firstContext:e}}else qi=qi.next=e;return n}var Qr=null;function wa(e){Qr===null?Qr=[e]:Qr.push(e)}function zc(e,n,i,l){var c=n.interleaved;return c===null?(i.next=i,wa(n)):(i.next=c.next,c.next=i),n.interleaved=i,Ut(e,l)}function Ut(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var xr=!1;function _a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function $r(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,Ut(e,i)}return c=l.interleaved,c===null?(n.next=n,wa(l)):(n.next=c.next,c.next=n),l.interleaved=n,Ut(e,i)}function zs(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,B0(e,i)}}function jc(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var $={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?c=p=$:p=p.next=$,i=i.next}while(i!==null);p===null?c=p=n:p=p.next=n}else c=p=n;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Ss(e,n,i,l){var c=e.updateQueue;xr=!1;var p=c.firstBaseUpdate,$=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var T=S,U=T.next;T.next=null,$===null?p=U:$.next=U,$=T;var te=e.alternate;te!==null&&(te=te.updateQueue,S=te.lastBaseUpdate,S!==$&&(S===null?te.firstBaseUpdate=U:S.next=U,te.lastBaseUpdate=T))}if(p!==null){var ie=c.baseState;$=0,te=U=T=null,S=p;do{var ee=S.lane,fe=S.eventTime;if((l&ee)===ee){te!==null&&(te=te.next={eventTime:fe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ve=e,xe=S;switch(ee=n,fe=i,xe.tag){case 1:if(ve=xe.payload,typeof ve=="function"){ie=ve.call(fe,ie,ee);break e}ie=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=xe.payload,ee=typeof ve=="function"?ve.call(fe,ie,ee):ve,ee==null)break e;ie=ue({},ie,ee);break e;case 2:xr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,ee=c.effects,ee===null?c.effects=[S]:ee.push(S))}else fe={eventTime:fe,lane:ee,tag:S.tag,payload:S.payload,callback:S.callback,next:null},te===null?(U=te=fe,T=ie):te=te.next=fe,$|=ee;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;ee=S,S=ee.next,ee.next=null,c.lastBaseUpdate=ee,c.shared.pending=null}}while(!0);if(te===null&&(T=ie),c.baseState=T,c.firstBaseUpdate=U,c.lastBaseUpdate=te,n=c.shared.interleaved,n!==null){c=n;do $|=c.lane,c=c.next;while(c!==n)}else p===null&&(c.shared.lanes=0);Xr|=$,e.lanes=$,e.memoizedState=ie}}function qc(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var go={},qt=gr(go),yo=gr(go),vo=gr(go);function Zr(e){if(e===go)throw Error(r(174));return e}function ka(e,n){switch(Xe(vo,n),Xe(yo,e),Xe(qt,go),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ir(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ir(n,e)}nn(qt),Xe(qt,n)}function Ai(){nn(qt),nn(yo),nn(vo)}function Tc(e){Zr(vo.current);var n=Zr(qt.current),i=ir(n,e.type);n!==i&&(Xe(yo,e),Xe(qt,i))}function za(e){yo.current===e&&(nn(qt),nn(yo))}var sn=gr(0);function js(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=[];function ja(){for(var e=0;e<Sa.length;e++)Sa[e]._workInProgressVersionPrimary=null;Sa.length=0}var qs=I.ReactCurrentDispatcher,qa=I.ReactCurrentBatchConfig,Yr=0,an=null,xn=null,_n=null,Ts=!1,xo=!1,$o=0,df=0;function Tn(){throw Error(r(321))}function Ta(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!ht(e[i],n[i]))return!1;return!0}function Aa(e,n,i,l,c,p){if(Yr=p,an=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,qs.current=e===null||e.memoizedState===null?hf:gf,e=i(l,c),xo){p=0;do{if(xo=!1,$o=0,25<=p)throw Error(r(301));p+=1,_n=xn=null,n.updateQueue=null,qs.current=yf,e=i(l,c)}while(xo)}if(qs.current=Ps,n=xn!==null&&xn.next!==null,Yr=0,_n=xn=an=null,Ts=!1,n)throw Error(r(300));return e}function Ma(){var e=$o!==0;return $o=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?an.memoizedState=_n=e:_n=_n.next=e,_n}function at(){if(xn===null){var e=an.alternate;e=e!==null?e.memoizedState:null}else e=xn.next;var n=_n===null?an.memoizedState:_n.next;if(n!==null)_n=n,xn=e;else{if(e===null)throw Error(r(310));xn=e,e={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},_n===null?an.memoizedState=_n=e:_n=_n.next=e}return _n}function bo(e,n){return typeof n=="function"?n(e):n}function Pa(e){var n=at(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=xn,c=l.baseQueue,p=i.pending;if(p!==null){if(c!==null){var $=c.next;c.next=p.next,p.next=$}l.baseQueue=c=p,i.pending=null}if(c!==null){p=c.next,l=l.baseState;var S=$=null,T=null,U=p;do{var te=U.lane;if((Yr&te)===te)T!==null&&(T=T.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),l=U.hasEagerState?U.eagerState:e(l,U.action);else{var ie={lane:te,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};T===null?(S=T=ie,$=l):T=T.next=ie,an.lanes|=te,Xr|=te}U=U.next}while(U!==null&&U!==p);T===null?$=l:T.next=S,ht(l,n.memoizedState)||(Wn=!0),n.memoizedState=l,n.baseState=$,n.baseQueue=T,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do p=c.lane,an.lanes|=p,Xr|=p,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Ca(e){var n=at(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,p=n.memoizedState;if(c!==null){i.pending=null;var $=c=c.next;do p=e(p,$.action),$=$.next;while($!==c);ht(p,n.memoizedState)||(Wn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,l]}function Ac(){}function Mc(e,n){var i=an,l=at(),c=n(),p=!ht(l.memoizedState,c);if(p&&(l.memoizedState=c,Wn=!0),l=l.queue,Ra(Rc.bind(null,i,l,e),[e]),l.getSnapshot!==n||p||_n!==null&&_n.memoizedState.tag&1){if(i.flags|=2048,wo(9,Cc.bind(null,i,l,c,n),void 0,null),kn===null)throw Error(r(349));(Yr&30)!==0||Pc(i,n,c)}return c}function Pc(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=an.updateQueue,n===null?(n={lastEffect:null,stores:null},an.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Cc(e,n,i,l){n.value=i,n.getSnapshot=l,Dc(n)&&Ec(e)}function Rc(e,n,i){return i(function(){Dc(n)&&Ec(e)})}function Dc(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!ht(e,i)}catch{return!0}}function Ec(e){var n=Ut(e,1);n!==null&&$t(n,e,1,-1)}function Bc(e){var n=Tt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},n.queue=e,e=e.dispatch=ff.bind(null,an,e),[n.memoizedState,e]}function wo(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=an.updateQueue,n===null?(n={lastEffect:null,stores:null},an.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function Nc(){return at().memoizedState}function As(e,n,i,l){var c=Tt();an.flags|=e,c.memoizedState=wo(1|n,i,void 0,l===void 0?null:l)}function Ms(e,n,i,l){var c=at();l=l===void 0?null:l;var p=void 0;if(xn!==null){var $=xn.memoizedState;if(p=$.destroy,l!==null&&Ta(l,$.deps)){c.memoizedState=wo(n,i,p,l);return}}an.flags|=e,c.memoizedState=wo(1|n,i,p,l)}function Ic(e,n){return As(8390656,8,e,n)}function Ra(e,n){return Ms(2048,8,e,n)}function Fc(e,n){return Ms(4,2,e,n)}function Lc(e,n){return Ms(4,4,e,n)}function Oc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hc(e,n,i){return i=i!=null?i.concat([e]):null,Ms(4,4,Oc.bind(null,n,e),i)}function Da(){}function Wc(e,n){var i=at();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&Ta(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Gc(e,n){var i=at();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&Ta(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function Uc(e,n,i){return(Yr&21)===0?(e.baseState&&(e.baseState=!1,Wn=!0),e.memoizedState=i):(ht(i,n)||(i=wu(),an.lanes|=i,Xr|=i,e.baseState=!0),n)}function mf(e,n){var i=Ze;Ze=i!==0&&4>i?i:4,e(!0);var l=qa.transition;qa.transition={};try{e(!1),n()}finally{Ze=i,qa.transition=l}}function Vc(){return at().memoizedState}function pf(e,n,i){var l=kr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Kc(e))Qc(n,i);else if(i=zc(e,n,i,l),i!==null){var c=Dn();$t(i,e,l,c),Zc(i,n,l)}}function ff(e,n,i){var l=kr(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Qc(n,c);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var $=n.lastRenderedState,S=p($,i);if(c.hasEagerState=!0,c.eagerState=S,ht(S,$)){var T=n.interleaved;T===null?(c.next=c,wa(n)):(c.next=T.next,T.next=c),n.interleaved=c;return}}catch{}finally{}i=zc(e,n,c,l),i!==null&&(c=Dn(),$t(i,e,l,c),Zc(i,n,l))}}function Kc(e){var n=e.alternate;return e===an||n!==null&&n===an}function Qc(e,n){xo=Ts=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Zc(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,B0(e,i)}}var Ps={readContext:st,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},hf={readContext:st,useCallback:function(e,n){return Tt().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:Ic,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,As(4194308,4,Oc.bind(null,n,e),i)},useLayoutEffect:function(e,n){return As(4194308,4,e,n)},useInsertionEffect:function(e,n){return As(4,2,e,n)},useMemo:function(e,n){var i=Tt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=Tt();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=pf.bind(null,an,e),[l.memoizedState,e]},useRef:function(e){var n=Tt();return e={current:e},n.memoizedState=e},useState:Bc,useDebugValue:Da,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Bc(!1),n=e[0];return e=mf.bind(null,e[1]),Tt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=an,c=Tt();if(tn){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),kn===null)throw Error(r(349));(Yr&30)!==0||Pc(l,n,i)}c.memoizedState=i;var p={value:i,getSnapshot:n};return c.queue=p,Ic(Rc.bind(null,l,p,e),[e]),l.flags|=2048,wo(9,Cc.bind(null,l,p,i,n),void 0,null),i},useId:function(){var e=Tt(),n=kn.identifierPrefix;if(tn){var i=Gt,l=Wt;i=(l&~(1<<32-ft(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=$o++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=df++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},gf={readContext:st,useCallback:Wc,useContext:st,useEffect:Ra,useImperativeHandle:Hc,useInsertionEffect:Fc,useLayoutEffect:Lc,useMemo:Gc,useReducer:Pa,useRef:Nc,useState:function(){return Pa(bo)},useDebugValue:Da,useDeferredValue:function(e){var n=at();return Uc(n,xn.memoizedState,e)},useTransition:function(){var e=Pa(bo)[0],n=at().memoizedState;return[e,n]},useMutableSource:Ac,useSyncExternalStore:Mc,useId:Vc,unstable_isNewReconciler:!1},yf={readContext:st,useCallback:Wc,useContext:st,useEffect:Ra,useImperativeHandle:Hc,useInsertionEffect:Fc,useLayoutEffect:Lc,useMemo:Gc,useReducer:Ca,useRef:Nc,useState:function(){return Ca(bo)},useDebugValue:Da,useDeferredValue:function(e){var n=at();return xn===null?n.memoizedState=e:Uc(n,xn.memoizedState,e)},useTransition:function(){var e=Ca(bo)[0],n=at().memoizedState;return[e,n]},useMutableSource:Ac,useSyncExternalStore:Mc,useId:Vc,unstable_isNewReconciler:!1};function yt(e,n){if(e&&e.defaultProps){n=ue({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Ea(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:ue({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Cs={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Dn(),c=kr(e),p=Vt(l,c);p.payload=n,i!=null&&(p.callback=i),n=$r(e,p,c),n!==null&&($t(n,e,c,l),zs(n,e,c))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Dn(),c=kr(e),p=Vt(l,c);p.tag=1,p.payload=n,i!=null&&(p.callback=i),n=$r(e,p,c),n!==null&&($t(n,e,c,l),zs(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Dn(),l=kr(e),c=Vt(i,l);c.tag=2,n!=null&&(c.callback=n),n=$r(e,c,l),n!==null&&($t(n,e,l,i),zs(n,e,l))}};function Yc(e,n,i,l,c,p,$){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,$):n.prototype&&n.prototype.isPureReactComponent?!ao(i,l)||!ao(c,p):!0}function Xc(e,n,i){var l=!1,c=yr,p=n.contextType;return typeof p=="object"&&p!==null?p=st(p):(c=Hn(n)?Ur:qn.current,l=n.contextTypes,p=(l=l!=null)?_i(e,c):yr),n=new n(i,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Cs,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=p),n}function Jc(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&Cs.enqueueReplaceState(n,n.state,null)}function Ba(e,n,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},_a(e);var p=n.contextType;typeof p=="object"&&p!==null?c.context=st(p):(p=Hn(n)?Ur:qn.current,c.context=_i(e,p)),c.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Ea(e,n,p,i),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&Cs.enqueueReplaceState(c,c.state,null),Ss(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Mi(e,n){try{var i="",l=n;do i+=ze(l),l=l.return;while(l);var c=i}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:c,digest:null}}function Na(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Ia(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function e1(e,n,i){i=Vt(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Fs||(Fs=!0,el=l),Ia(e,n)},i}function n1(e,n,i){i=Vt(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=n.value;i.payload=function(){return l(c)},i.callback=function(){Ia(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){Ia(e,n),typeof l!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var $=n.stack;this.componentDidCatch(n.value,{componentStack:$!==null?$:""})}),i}function t1(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new vf;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(i)||(c.add(i),e=Pf.bind(null,e,n,i),n.then(e,e))}function r1(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function i1(e,n,i,l,c){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Vt(-1,1),n.tag=2,$r(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var xf=I.ReactCurrentOwner,Wn=!1;function Rn(e,n,i,l){n.child=e===null?kc(n,null,i,l):ji(n,e.child,i,l)}function o1(e,n,i,l,c){i=i.render;var p=n.ref;return Ti(n,c),l=Aa(e,n,i,l,p,c),i=Ma(),e!==null&&!Wn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,Kt(e,n,c)):(tn&&i&&pa(n),n.flags|=1,Rn(e,n,l,c),n.child)}function s1(e,n,i,l,c){if(e===null){var p=i.type;return typeof p=="function"&&!al(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=p,a1(e,n,p,l,c)):(e=Us(i.type,null,l,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&c)===0){var $=p.memoizedProps;if(i=i.compare,i=i!==null?i:ao,i($,l)&&e.ref===n.ref)return Kt(e,n,c)}return n.flags|=1,e=Sr(p,l),e.ref=n.ref,e.return=n,n.child=e}function a1(e,n,i,l,c){if(e!==null){var p=e.memoizedProps;if(ao(p,l)&&e.ref===n.ref)if(Wn=!1,n.pendingProps=l=p,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Wn=!0);else return n.lanes=e.lanes,Kt(e,n,c)}return Fa(e,n,i,l,c)}function l1(e,n,i){var l=n.pendingProps,c=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Ci,et),et|=i;else{if((i&1073741824)===0)return e=p!==null?p.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Xe(Ci,et),et|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:i,Xe(Ci,et),et|=l}else p!==null?(l=p.baseLanes|i,n.memoizedState=null):l=i,Xe(Ci,et),et|=l;return Rn(e,n,c,i),n.child}function u1(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Fa(e,n,i,l,c){var p=Hn(i)?Ur:qn.current;return p=_i(n,p),Ti(n,c),i=Aa(e,n,i,l,p,c),l=Ma(),e!==null&&!Wn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,Kt(e,n,c)):(tn&&l&&pa(n),n.flags|=1,Rn(e,n,i,c),n.child)}function c1(e,n,i,l,c){if(Hn(i)){var p=!0;ys(n)}else p=!1;if(Ti(n,c),n.stateNode===null)Ds(e,n),Xc(n,i,l),Ba(n,i,l,c),l=!0;else if(e===null){var $=n.stateNode,S=n.memoizedProps;$.props=S;var T=$.context,U=i.contextType;typeof U=="object"&&U!==null?U=st(U):(U=Hn(i)?Ur:qn.current,U=_i(n,U));var te=i.getDerivedStateFromProps,ie=typeof te=="function"||typeof $.getSnapshotBeforeUpdate=="function";ie||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(S!==l||T!==U)&&Jc(n,$,l,U),xr=!1;var ee=n.memoizedState;$.state=ee,Ss(n,l,$,c),T=n.memoizedState,S!==l||ee!==T||On.current||xr?(typeof te=="function"&&(Ea(n,i,te,l),T=n.memoizedState),(S=xr||Yc(n,i,S,l,ee,T,U))?(ie||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount()),typeof $.componentDidMount=="function"&&(n.flags|=4194308)):(typeof $.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=T),$.props=l,$.state=T,$.context=U,l=S):(typeof $.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{$=n.stateNode,Sc(e,n),S=n.memoizedProps,U=n.type===n.elementType?S:yt(n.type,S),$.props=U,ie=n.pendingProps,ee=$.context,T=i.contextType,typeof T=="object"&&T!==null?T=st(T):(T=Hn(i)?Ur:qn.current,T=_i(n,T));var fe=i.getDerivedStateFromProps;(te=typeof fe=="function"||typeof $.getSnapshotBeforeUpdate=="function")||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(S!==ie||ee!==T)&&Jc(n,$,l,T),xr=!1,ee=n.memoizedState,$.state=ee,Ss(n,l,$,c);var ve=n.memoizedState;S!==ie||ee!==ve||On.current||xr?(typeof fe=="function"&&(Ea(n,i,fe,l),ve=n.memoizedState),(U=xr||Yc(n,i,U,l,ee,ve,T)||!1)?(te||typeof $.UNSAFE_componentWillUpdate!="function"&&typeof $.componentWillUpdate!="function"||(typeof $.componentWillUpdate=="function"&&$.componentWillUpdate(l,ve,T),typeof $.UNSAFE_componentWillUpdate=="function"&&$.UNSAFE_componentWillUpdate(l,ve,T)),typeof $.componentDidUpdate=="function"&&(n.flags|=4),typeof $.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof $.componentDidUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ve),$.props=l,$.state=ve,$.context=T,l=U):(typeof $.componentDidUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),l=!1)}return La(e,n,i,l,p,c)}function La(e,n,i,l,c,p){u1(e,n);var $=(n.flags&128)!==0;if(!l&&!$)return c&&hc(n,i,!1),Kt(e,n,p);l=n.stateNode,xf.current=n;var S=$&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&$?(n.child=ji(n,e.child,null,p),n.child=ji(n,null,S,p)):Rn(e,n,S,p),n.memoizedState=l.state,c&&hc(n,i,!0),n.child}function d1(e){var n=e.stateNode;n.pendingContext?pc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pc(e,n.context,!1),ka(e,n.containerInfo)}function m1(e,n,i,l,c){return Si(),ya(c),n.flags|=256,Rn(e,n,i,l),n.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function p1(e,n,i){var l=n.pendingProps,c=sn.current,p=!1,$=(n.flags&128)!==0,S;if((S=$)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Xe(sn,c&1),e===null)return ga(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):($=l.children,e=l.fallback,p?(l=n.mode,p=n.child,$={mode:"hidden",children:$},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=$):p=Vs($,l,0,null),e=ti(e,l,i,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=Ha(i),n.memoizedState=Oa,e):Wa(n,$));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return $f(e,n,$,l,S,c,i);if(p){p=l.fallback,$=n.mode,c=e.child,S=c.sibling;var T={mode:"hidden",children:l.children};return($&1)===0&&n.child!==c?(l=n.child,l.childLanes=0,l.pendingProps=T,n.deletions=null):(l=Sr(c,T),l.subtreeFlags=c.subtreeFlags&14680064),S!==null?p=Sr(S,p):(p=ti(p,$,i,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,$=e.child.memoizedState,$=$===null?Ha(i):{baseLanes:$.baseLanes|i,cachePool:null,transitions:$.transitions},p.memoizedState=$,p.childLanes=e.childLanes&~i,n.memoizedState=Oa,l}return p=e.child,e=p.sibling,l=Sr(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function Wa(e,n){return n=Vs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Rs(e,n,i,l){return l!==null&&ya(l),ji(n,e.child,null,i),e=Wa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $f(e,n,i,l,c,p,$){if(i)return n.flags&256?(n.flags&=-257,l=Na(Error(r(422))),Rs(e,n,$,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=l.fallback,c=n.mode,l=Vs({mode:"visible",children:l.children},c,0,null),p=ti(p,c,$,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&ji(n,e.child,null,$),n.child.memoizedState=Ha($),n.memoizedState=Oa,p);if((n.mode&1)===0)return Rs(e,n,$,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var S=l.dgst;return l=S,p=Error(r(419)),l=Na(p,l,void 0),Rs(e,n,$,l)}if(S=($&e.childLanes)!==0,Wn||S){if(l=kn,l!==null){switch($&-$){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|$))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Ut(e,c),$t(l,e,c,-1))}return sl(),l=Na(Error(r(421))),Rs(e,n,$,l)}return c.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),c._reactRetry=n,null):(e=p.treeContext,Jn=hr(c.nextSibling),Xn=n,tn=!0,gt=null,e!==null&&(it[ot++]=Wt,it[ot++]=Gt,it[ot++]=Vr,Wt=e.id,Gt=e.overflow,Vr=n),n=Wa(n,l.children),n.flags|=4096,n)}function f1(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ba(e.return,n,i)}function Ga(e,n,i,l,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=i,p.tailMode=c)}function h1(e,n,i){var l=n.pendingProps,c=l.revealOrder,p=l.tail;if(Rn(e,n,l.children,i),l=sn.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f1(e,i,n);else if(e.tag===19)f1(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Xe(sn,l),(n.mode&1)===0)n.memoizedState=null;else switch(c){case"forwards":for(i=n.child,c=null;i!==null;)e=i.alternate,e!==null&&js(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),Ga(n,!1,c,i,p);break;case"backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&js(e)===null){n.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Ga(n,!0,i,null,p);break;case"together":Ga(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ds(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Kt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Xr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=Sr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Sr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function bf(e,n,i){switch(n.tag){case 3:d1(n),Si();break;case 5:Tc(n);break;case 1:Hn(n.type)&&ys(n);break;case 4:ka(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,c=n.memoizedProps.value;Xe(_s,l._currentValue),l._currentValue=c;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Xe(sn,sn.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?p1(e,n,i):(Xe(sn,sn.current&1),e=Kt(e,n,i),e!==null?e.sibling:null);Xe(sn,sn.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return h1(e,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xe(sn,sn.current),l)break;return null;case 22:case 23:return n.lanes=0,l1(e,n,i)}return Kt(e,n,i)}var g1,Ua,y1,v1;g1=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ua=function(){},y1=function(e,n,i,l){var c=e.memoizedProps;if(c!==l){e=n.stateNode,Zr(qt.current);var p=null;switch(i){case"input":c=bt(e,c),l=bt(e,l),p=[];break;case"select":c=ue({},c,{value:void 0}),l=ue({},l,{value:void 0}),p=[];break;case"textarea":c=li(e,c),l=li(e,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=fs)}Nr(i,l);var $;i=null;for(U in c)if(!l.hasOwnProperty(U)&&c.hasOwnProperty(U)&&c[U]!=null)if(U==="style"){var S=c[U];for($ in S)S.hasOwnProperty($)&&(i||(i={}),i[$]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(a.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in l){var T=l[U];if(S=c!=null?c[U]:void 0,l.hasOwnProperty(U)&&T!==S&&(T!=null||S!=null))if(U==="style")if(S){for($ in S)!S.hasOwnProperty($)||T&&T.hasOwnProperty($)||(i||(i={}),i[$]="");for($ in T)T.hasOwnProperty($)&&S[$]!==T[$]&&(i||(i={}),i[$]=T[$])}else i||(p||(p=[]),p.push(U,i)),i=T;else U==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,S=S?S.__html:void 0,T!=null&&S!==T&&(p=p||[]).push(U,T)):U==="children"?typeof T!="string"&&typeof T!="number"||(p=p||[]).push(U,""+T):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(a.hasOwnProperty(U)?(T!=null&&U==="onScroll"&&en("scroll",e),p||S===T||(p=[])):(p=p||[]).push(U,T))}i&&(p=p||[]).push("style",i);var U=p;(n.updateQueue=U)&&(n.flags|=4)}},v1=function(e,n,i,l){i!==l&&(n.flags|=4)};function _o(e,n){if(!tn)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function An(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function wf(e,n,i){var l=n.pendingProps;switch(fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(n),null;case 1:return Hn(n.type)&&gs(),An(n),null;case 3:return l=n.stateNode,Ai(),nn(On),nn(qn),ja(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(bs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gt!==null&&(rl(gt),gt=null))),Ua(e,n),An(n),null;case 5:za(n);var c=Zr(vo.current);if(i=n.type,e!==null&&n.stateNode!=null)y1(e,n,i,l,c),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return An(n),null}if(e=Zr(qt.current),bs(n)){l=n.stateNode,i=n.type;var p=n.memoizedProps;switch(l[jt]=n,l[po]=p,e=(n.mode&1)!==0,i){case"dialog":en("cancel",l),en("close",l);break;case"iframe":case"object":case"embed":en("load",l);break;case"video":case"audio":for(c=0;c<uo.length;c++)en(uo[c],l);break;case"source":en("error",l);break;case"img":case"image":case"link":en("error",l),en("load",l);break;case"details":en("toggle",l);break;case"input":ai(l,p),en("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},en("invalid",l);break;case"textarea":Wi(l,p),en("invalid",l)}Nr(i,p),c=null;for(var $ in p)if(p.hasOwnProperty($)){var S=p[$];$==="children"?typeof S=="string"?l.textContent!==S&&(p.suppressHydrationWarning!==!0&&ps(l.textContent,S,e),c=["children",S]):typeof S=="number"&&l.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&ps(l.textContent,S,e),c=["children",""+S]):a.hasOwnProperty($)&&S!=null&&$==="onScroll"&&en("scroll",l)}switch(i){case"input":je(l),Er(l,p,!0);break;case"textarea":je(l),rt(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=fs)}l=c,n.updateQueue=l,l!==null&&(n.flags|=4)}else{$=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cn(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=$.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=$.createElement(i,{is:l.is}):(e=$.createElement(i),i==="select"&&($=e,l.multiple?$.multiple=!0:l.size&&($.size=l.size))):e=$.createElementNS(e,i),e[jt]=n,e[po]=l,g1(e,n,!1,!1),n.stateNode=e;e:{switch($=Nt(i,l),i){case"dialog":en("cancel",e),en("close",e),c=l;break;case"iframe":case"object":case"embed":en("load",e),c=l;break;case"video":case"audio":for(c=0;c<uo.length;c++)en(uo[c],e);c=l;break;case"source":en("error",e),c=l;break;case"img":case"image":case"link":en("error",e),en("load",e),c=l;break;case"details":en("toggle",e),c=l;break;case"input":ai(e,l),c=bt(e,l),en("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=ue({},l,{value:void 0}),en("invalid",e);break;case"textarea":Wi(e,l),c=li(e,l),en("invalid",e);break;default:c=l}Nr(i,c),S=c;for(p in S)if(S.hasOwnProperty(p)){var T=S[p];p==="style"?Lo(e,T):p==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&or(e,T)):p==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&sr(e,T):typeof T=="number"&&sr(e,""+T):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?T!=null&&p==="onScroll"&&en("scroll",e):T!=null&&G(e,p,T,$))}switch(i){case"input":je(e),Er(e,l,!1);break;case"textarea":je(e),rt(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Be(l.value));break;case"select":e.multiple=!!l.multiple,p=l.value,p!=null?Ln(e,!!l.multiple,p,!1):l.defaultValue!=null&&Ln(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=fs)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return An(n),null;case 6:if(e&&n.stateNode!=null)v1(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=Zr(vo.current),Zr(qt.current),bs(n)){if(l=n.stateNode,i=n.memoizedProps,l[jt]=n,(p=l.nodeValue!==i)&&(e=Xn,e!==null))switch(e.tag){case 3:ps(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ps(l.nodeValue,i,(e.mode&1)!==0)}p&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[jt]=n,n.stateNode=l}return An(n),null;case 13:if(nn(sn),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tn&&Jn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)bc(),Si(),n.flags|=98560,p=!1;else if(p=bs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(r(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[jt]=n}else Si(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;An(n),p=!1}else gt!==null&&(rl(gt),gt=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(sn.current&1)!==0?$n===0&&($n=3):sl())),n.updateQueue!==null&&(n.flags|=4),An(n),null);case 4:return Ai(),Ua(e,n),e===null&&co(n.stateNode.containerInfo),An(n),null;case 10:return $a(n.type._context),An(n),null;case 17:return Hn(n.type)&&gs(),An(n),null;case 19:if(nn(sn),p=n.memoizedState,p===null)return An(n),null;if(l=(n.flags&128)!==0,$=p.rendering,$===null)if(l)_o(p,!1);else{if($n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if($=js(e),$!==null){for(n.flags|=128,_o(p,!1),l=$.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)p=i,e=l,p.flags&=14680066,$=p.alternate,$===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=$.childLanes,p.lanes=$.lanes,p.child=$.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=$.memoizedProps,p.memoizedState=$.memoizedState,p.updateQueue=$.updateQueue,p.type=$.type,e=$.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Xe(sn,sn.current&1|2),n.child}e=e.sibling}p.tail!==null&&on()>Ri&&(n.flags|=128,l=!0,_o(p,!1),n.lanes=4194304)}else{if(!l)if(e=js($),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),_o(p,!0),p.tail===null&&p.tailMode==="hidden"&&!$.alternate&&!tn)return An(n),null}else 2*on()-p.renderingStartTime>Ri&&i!==1073741824&&(n.flags|=128,l=!0,_o(p,!1),n.lanes=4194304);p.isBackwards?($.sibling=n.child,n.child=$):(i=p.last,i!==null?i.sibling=$:n.child=$,p.last=$)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=on(),n.sibling=null,i=sn.current,Xe(sn,l?i&1|2:i&1),n):(An(n),null);case 22:case 23:return ol(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(et&1073741824)!==0&&(An(n),n.subtreeFlags&6&&(n.flags|=8192)):An(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function _f(e,n){switch(fa(n),n.tag){case 1:return Hn(n.type)&&gs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ai(),nn(On),nn(qn),ja(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return za(n),null;case 13:if(nn(sn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Si()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nn(sn),null;case 4:return Ai(),null;case 10:return $a(n.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var Es=!1,Mn=!1,kf=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Pi(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){dn(e,n,l)}else i.current=null}function Va(e,n,i){try{i()}catch(l){dn(e,n,l)}}var x1=!1;function zf(e,n){if(oa=ts,e=Yu(),Y0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var $=0,S=-1,T=-1,U=0,te=0,ie=e,ee=null;n:for(;;){for(var fe;ie!==i||c!==0&&ie.nodeType!==3||(S=$+c),ie!==p||l!==0&&ie.nodeType!==3||(T=$+l),ie.nodeType===3&&($+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)ee=ie,ie=fe;for(;;){if(ie===e)break n;if(ee===i&&++U===c&&(S=$),ee===p&&++te===l&&(T=$),(fe=ie.nextSibling)!==null)break;ie=ee,ee=ie.parentNode}ie=fe}i=S===-1||T===-1?null:{start:S,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(sa={focusedElem:e,selectionRange:i},ts=!1,ye=n;ye!==null;)if(n=ye,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ye=e;else for(;ye!==null;){n=ye;try{var ve=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ve!==null){var xe=ve.memoizedProps,fn=ve.memoizedState,N=n.stateNode,D=N.getSnapshotBeforeUpdate(n.elementType===n.type?xe:yt(n.type,xe),fn);N.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var O=n.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ae){dn(n,n.return,ae)}if(e=n.sibling,e!==null){e.return=n.return,ye=e;break}ye=n.return}return ve=x1,x1=!1,ve}function ko(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var p=c.destroy;c.destroy=void 0,p!==void 0&&Va(n,i,p)}c=c.next}while(c!==l)}}function Bs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function Ka(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function $1(e){var n=e.alternate;n!==null&&(e.alternate=null,$1(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[jt],delete n[po],delete n[ca],delete n[af],delete n[lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b1(e){return e.tag===5||e.tag===3||e.tag===4}function w1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=fs));else if(l!==4&&(e=e.child,e!==null))for(Qa(e,n,i),e=e.sibling;e!==null;)Qa(e,n,i),e=e.sibling}function Za(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Za(e,n,i),e=e.sibling;e!==null;)Za(e,n,i),e=e.sibling}var Sn=null,vt=!1;function br(e,n,i){for(i=i.child;i!==null;)_1(e,n,i),i=i.sibling}function _1(e,n,i){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Zo,i)}catch{}switch(i.tag){case 5:Mn||Pi(i,n);case 6:var l=Sn,c=vt;Sn=null,br(e,n,i),Sn=l,vt=c,Sn!==null&&(vt?(e=Sn,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Sn.removeChild(i.stateNode));break;case 18:Sn!==null&&(vt?(e=Sn,i=i.stateNode,e.nodeType===8?ua(e.parentNode,i):e.nodeType===1&&ua(e,i),no(e)):ua(Sn,i.stateNode));break;case 4:l=Sn,c=vt,Sn=i.stateNode.containerInfo,vt=!0,br(e,n,i),Sn=l,vt=c;break;case 0:case 11:case 14:case 15:if(!Mn&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,$=p.destroy;p=p.tag,$!==void 0&&((p&2)!==0||(p&4)!==0)&&Va(i,n,$),c=c.next}while(c!==l)}br(e,n,i);break;case 1:if(!Mn&&(Pi(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(S){dn(i,n,S)}br(e,n,i);break;case 21:br(e,n,i);break;case 22:i.mode&1?(Mn=(l=Mn)||i.memoizedState!==null,br(e,n,i),Mn=l):br(e,n,i);break;default:br(e,n,i)}}function k1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new kf),n.forEach(function(l){var c=Rf.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function xt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var p=e,$=n,S=$;e:for(;S!==null;){switch(S.tag){case 5:Sn=S.stateNode,vt=!1;break e;case 3:Sn=S.stateNode.containerInfo,vt=!0;break e;case 4:Sn=S.stateNode.containerInfo,vt=!0;break e}S=S.return}if(Sn===null)throw Error(r(160));_1(p,$,c),Sn=null,vt=!1;var T=c.alternate;T!==null&&(T.return=null),c.return=null}catch(U){dn(c,n,U)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)z1(n,e),n=n.sibling}function z1(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(n,e),At(e),l&4){try{ko(3,e,e.return),Bs(3,e)}catch(xe){dn(e,e.return,xe)}try{ko(5,e,e.return)}catch(xe){dn(e,e.return,xe)}}break;case 1:xt(n,e),At(e),l&512&&i!==null&&Pi(i,i.return);break;case 5:if(xt(n,e),At(e),l&512&&i!==null&&Pi(i,i.return),e.flags&32){var c=e.stateNode;try{sr(c,"")}catch(xe){dn(e,e.return,xe)}}if(l&4&&(c=e.stateNode,c!=null)){var p=e.memoizedProps,$=i!==null?i.memoizedProps:p,S=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Et(c,p),Nt(S,$);var U=Nt(S,p);for($=0;$<T.length;$+=2){var te=T[$],ie=T[$+1];te==="style"?Lo(c,ie):te==="dangerouslySetInnerHTML"?or(c,ie):te==="children"?sr(c,ie):G(c,te,ie,U)}switch(S){case"input":rr(c,p);break;case"textarea":He(c,p);break;case"select":var ee=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var fe=p.value;fe!=null?Ln(c,!!p.multiple,fe,!1):ee!==!!p.multiple&&(p.defaultValue!=null?Ln(c,!!p.multiple,p.defaultValue,!0):Ln(c,!!p.multiple,p.multiple?[]:"",!1))}c[po]=p}catch(xe){dn(e,e.return,xe)}}break;case 6:if(xt(n,e),At(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,p=e.memoizedProps;try{c.nodeValue=p}catch(xe){dn(e,e.return,xe)}}break;case 3:if(xt(n,e),At(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{no(n.containerInfo)}catch(xe){dn(e,e.return,xe)}break;case 4:xt(n,e),At(e);break;case 13:xt(n,e),At(e),c=e.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(Ja=on())),l&4&&k1(e);break;case 22:if(te=i!==null&&i.memoizedState!==null,e.mode&1?(Mn=(U=Mn)||te,xt(n,e),Mn=U):xt(n,e),At(e),l&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!te&&(e.mode&1)!==0)for(ye=e,te=e.child;te!==null;){for(ie=ye=te;ye!==null;){switch(ee=ye,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:ko(4,ee,ee.return);break;case 1:Pi(ee,ee.return);var ve=ee.stateNode;if(typeof ve.componentWillUnmount=="function"){l=ee,i=ee.return;try{n=l,ve.props=n.memoizedProps,ve.state=n.memoizedState,ve.componentWillUnmount()}catch(xe){dn(l,i,xe)}}break;case 5:Pi(ee,ee.return);break;case 22:if(ee.memoizedState!==null){q1(ie);continue}}fe!==null?(fe.return=ee,ye=fe):q1(ie)}te=te.sibling}e:for(te=null,ie=e;;){if(ie.tag===5){if(te===null){te=ie;try{c=ie.stateNode,U?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=ie.stateNode,T=ie.memoizedProps.style,$=T!=null&&T.hasOwnProperty("display")?T.display:null,S.style.display=Gi("display",$))}catch(xe){dn(e,e.return,xe)}}}else if(ie.tag===6){if(te===null)try{ie.stateNode.nodeValue=U?"":ie.memoizedProps}catch(xe){dn(e,e.return,xe)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;te===ie&&(te=null),ie=ie.return}te===ie&&(te=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:xt(n,e),At(e),l&4&&k1(e);break;case 21:break;default:xt(n,e),At(e)}}function At(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(b1(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(sr(c,""),l.flags&=-33);var p=w1(e);Za(e,p,c);break;case 3:case 4:var $=l.stateNode.containerInfo,S=w1(e);Qa(e,S,$);break;default:throw Error(r(161))}}catch(T){dn(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sf(e,n,i){ye=e,S1(e)}function S1(e,n,i){for(var l=(e.mode&1)!==0;ye!==null;){var c=ye,p=c.child;if(c.tag===22&&l){var $=c.memoizedState!==null||Es;if(!$){var S=c.alternate,T=S!==null&&S.memoizedState!==null||Mn;S=Es;var U=Mn;if(Es=$,(Mn=T)&&!U)for(ye=c;ye!==null;)$=ye,T=$.child,$.tag===22&&$.memoizedState!==null?T1(c):T!==null?(T.return=$,ye=T):T1(c);for(;p!==null;)ye=p,S1(p),p=p.sibling;ye=c,Es=S,Mn=U}j1(e)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,ye=p):j1(e)}}function j1(e){for(;ye!==null;){var n=ye;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Mn||Bs(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Mn)if(i===null)l.componentDidMount();else{var c=n.elementType===n.type?i.memoizedProps:yt(n.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&qc(n,p,l);break;case 3:var $=n.updateQueue;if($!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}qc(n,$,i)}break;case 5:var S=n.stateNode;if(i===null&&n.flags&4){i=S;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var U=n.alternate;if(U!==null){var te=U.memoizedState;if(te!==null){var ie=te.dehydrated;ie!==null&&no(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Mn||n.flags&512&&Ka(n)}catch(ee){dn(n,n.return,ee)}}if(n===e){ye=null;break}if(i=n.sibling,i!==null){i.return=n.return,ye=i;break}ye=n.return}}function q1(e){for(;ye!==null;){var n=ye;if(n===e){ye=null;break}var i=n.sibling;if(i!==null){i.return=n.return,ye=i;break}ye=n.return}}function T1(e){for(;ye!==null;){var n=ye;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Bs(4,n)}catch(T){dn(n,i,T)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var c=n.return;try{l.componentDidMount()}catch(T){dn(n,c,T)}}var p=n.return;try{Ka(n)}catch(T){dn(n,p,T)}break;case 5:var $=n.return;try{Ka(n)}catch(T){dn(n,$,T)}}}catch(T){dn(n,n.return,T)}if(n===e){ye=null;break}var S=n.sibling;if(S!==null){S.return=n.return,ye=S;break}ye=n.return}}var jf=Math.ceil,Ns=I.ReactCurrentDispatcher,Ya=I.ReactCurrentOwner,lt=I.ReactCurrentBatchConfig,Ue=0,kn=null,gn=null,jn=0,et=0,Ci=gr(0),$n=0,zo=null,Xr=0,Is=0,Xa=0,So=null,Gn=null,Ja=0,Ri=1/0,Qt=null,Fs=!1,el=null,wr=null,Ls=!1,_r=null,Os=0,jo=0,nl=null,Hs=-1,Ws=0;function Dn(){return(Ue&6)!==0?on():Hs!==-1?Hs:Hs=on()}function kr(e){return(e.mode&1)===0?1:(Ue&2)!==0&&jn!==0?jn&-jn:cf.transition!==null?(Ws===0&&(Ws=wu()),Ws):(e=Ze,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e)}function $t(e,n,i,l){if(50<jo)throw jo=0,nl=null,Error(r(185));Zi(e,i,l),((Ue&2)===0||e!==kn)&&(e===kn&&((Ue&2)===0&&(Is|=i),$n===4&&zr(e,jn)),Un(e,l),i===1&&Ue===0&&(n.mode&1)===0&&(Ri=on()+500,vs&&vr()))}function Un(e,n){var i=e.callbackNode;up(e,n);var l=Jo(e,e===kn?jn:0);if(l===0)i!==null&&pi(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&pi(i),n===1)e.tag===0?uf(M1.bind(null,e)):gc(M1.bind(null,e)),of(function(){(Ue&6)===0&&vr()}),i=null;else{switch(_u(l)){case 1:i=J;break;case 4:i=Oe;break;case 16:i=We;break;case 536870912:i=bu;break;default:i=We}i=I1(i,A1.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function A1(e,n){if(Hs=-1,Ws=0,(Ue&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Di()&&e.callbackNode!==i)return null;var l=Jo(e,e===kn?jn:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=Gs(e,l);else{n=l;var c=Ue;Ue|=2;var p=C1();(kn!==e||jn!==n)&&(Qt=null,Ri=on()+500,ei(e,n));do try{Af();break}catch(S){P1(e,S)}while(!0);xa(),Ns.current=p,Ue=c,gn!==null?n=0:(kn=null,jn=0,n=$n)}if(n!==0){if(n===2&&(c=D0(e),c!==0&&(l=c,n=tl(e,c))),n===1)throw i=zo,ei(e,0),zr(e,l),Un(e,on()),i;if(n===6)zr(e,l);else{if(c=e.current.alternate,(l&30)===0&&!qf(c)&&(n=Gs(e,l),n===2&&(p=D0(e),p!==0&&(l=p,n=tl(e,p))),n===1))throw i=zo,ei(e,0),zr(e,l),Un(e,on()),i;switch(e.finishedWork=c,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:ni(e,Gn,Qt);break;case 3:if(zr(e,l),(l&130023424)===l&&(n=Ja+500-on(),10<n)){if(Jo(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){Dn(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=la(ni.bind(null,e,Gn,Qt),n);break}ni(e,Gn,Qt);break;case 4:if(zr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,c=-1;0<l;){var $=31-ft(l);p=1<<$,$=n[$],$>c&&(c=$),l&=~p}if(l=c,l=on()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*jf(l/1960))-l,10<l){e.timeoutHandle=la(ni.bind(null,e,Gn,Qt),l);break}ni(e,Gn,Qt);break;case 5:ni(e,Gn,Qt);break;default:throw Error(r(329))}}}return Un(e,on()),e.callbackNode===i?A1.bind(null,e):null}function tl(e,n){var i=So;return e.current.memoizedState.isDehydrated&&(ei(e,n).flags|=256),e=Gs(e,n),e!==2&&(n=Gn,Gn=i,n!==null&&rl(n)),e}function rl(e){Gn===null?Gn=e:Gn.push.apply(Gn,e)}function qf(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],p=c.getSnapshot;c=c.value;try{if(!ht(p(),c))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zr(e,n){for(n&=~Xa,n&=~Is,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-ft(n),l=1<<i;e[i]=-1,n&=~l}}function M1(e){if((Ue&6)!==0)throw Error(r(327));Di();var n=Jo(e,0);if((n&1)===0)return Un(e,on()),null;var i=Gs(e,n);if(e.tag!==0&&i===2){var l=D0(e);l!==0&&(n=l,i=tl(e,l))}if(i===1)throw i=zo,ei(e,0),zr(e,n),Un(e,on()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ni(e,Gn,Qt),Un(e,on()),null}function il(e,n){var i=Ue;Ue|=1;try{return e(n)}finally{Ue=i,Ue===0&&(Ri=on()+500,vs&&vr())}}function Jr(e){_r!==null&&_r.tag===0&&(Ue&6)===0&&Di();var n=Ue;Ue|=1;var i=lt.transition,l=Ze;try{if(lt.transition=null,Ze=1,e)return e()}finally{Ze=l,lt.transition=i,Ue=n,(Ue&6)===0&&vr()}}function ol(){et=Ci.current,nn(Ci)}function ei(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,rf(i)),gn!==null)for(i=gn.return;i!==null;){var l=i;switch(fa(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&gs();break;case 3:Ai(),nn(On),nn(qn),ja();break;case 5:za(l);break;case 4:Ai();break;case 13:nn(sn);break;case 19:nn(sn);break;case 10:$a(l.type._context);break;case 22:case 23:ol()}i=i.return}if(kn=e,gn=e=Sr(e.current,null),jn=et=n,$n=0,zo=null,Xa=Is=Xr=0,Gn=So=null,Qr!==null){for(n=0;n<Qr.length;n++)if(i=Qr[n],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,p=i.pending;if(p!==null){var $=p.next;p.next=c,l.next=$}i.pending=l}Qr=null}return e}function P1(e,n){do{var i=gn;try{if(xa(),qs.current=Ps,Ts){for(var l=an.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ts=!1}if(Yr=0,_n=xn=an=null,xo=!1,$o=0,Ya.current=null,i===null||i.return===null){$n=1,zo=n,gn=null;break}e:{var p=e,$=i.return,S=i,T=n;if(n=jn,S.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var U=T,te=S,ie=te.tag;if((te.mode&1)===0&&(ie===0||ie===11||ie===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var fe=r1($);if(fe!==null){fe.flags&=-257,i1(fe,$,S,p,n),fe.mode&1&&t1(p,U,n),n=fe,T=U;var ve=n.updateQueue;if(ve===null){var xe=new Set;xe.add(T),n.updateQueue=xe}else ve.add(T);break e}else{if((n&1)===0){t1(p,U,n),sl();break e}T=Error(r(426))}}else if(tn&&S.mode&1){var fn=r1($);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),i1(fn,$,S,p,n),ya(Mi(T,S));break e}}p=T=Mi(T,S),$n!==4&&($n=2),So===null?So=[p]:So.push(p),p=$;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var N=e1(p,T,n);jc(p,N);break e;case 1:S=T;var D=p.type,O=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(wr===null||!wr.has(O)))){p.flags|=65536,n&=-n,p.lanes|=n;var ae=n1(p,S,n);jc(p,ae);break e}}p=p.return}while(p!==null)}D1(i)}catch(_e){n=_e,gn===i&&i!==null&&(gn=i=i.return);continue}break}while(!0)}function C1(){var e=Ns.current;return Ns.current=Ps,e===null?Ps:e}function sl(){($n===0||$n===3||$n===2)&&($n=4),kn===null||(Xr&268435455)===0&&(Is&268435455)===0||zr(kn,jn)}function Gs(e,n){var i=Ue;Ue|=2;var l=C1();(kn!==e||jn!==n)&&(Qt=null,ei(e,n));do try{Tf();break}catch(c){P1(e,c)}while(!0);if(xa(),Ue=i,Ns.current=l,gn!==null)throw Error(r(261));return kn=null,jn=0,$n}function Tf(){for(;gn!==null;)R1(gn)}function Af(){for(;gn!==null&&!C0();)R1(gn)}function R1(e){var n=N1(e.alternate,e,et);e.memoizedProps=e.pendingProps,n===null?D1(e):gn=n,Ya.current=null}function D1(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=wf(i,n,et),i!==null){gn=i;return}}else{if(i=_f(i,n),i!==null){i.flags&=32767,gn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$n=6,gn=null;return}}if(n=n.sibling,n!==null){gn=n;return}gn=n=e}while(n!==null);$n===0&&($n=5)}function ni(e,n,i){var l=Ze,c=lt.transition;try{lt.transition=null,Ze=1,Mf(e,n,i,l)}finally{lt.transition=c,Ze=l}return null}function Mf(e,n,i,l){do Di();while(_r!==null);if((Ue&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var p=i.lanes|i.childLanes;if(cp(e,p),e===kn&&(gn=kn=null,jn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Ls||(Ls=!0,I1(We,function(){return Di(),null})),p=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||p){p=lt.transition,lt.transition=null;var $=Ze;Ze=1;var S=Ue;Ue|=4,Ya.current=null,zf(e,i),z1(i,e),Zp(sa),ts=!!oa,sa=oa=null,e.current=i,Sf(i),R0(),Ue=S,Ze=$,lt.transition=p}else e.current=i;if(Ls&&(Ls=!1,_r=e,Os=c),p=e.pendingLanes,p===0&&(wr=null),ip(i.stateNode),Un(e,on()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)c=n[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(Fs)throw Fs=!1,e=el,el=null,e;return(Os&1)!==0&&e.tag!==0&&Di(),p=e.pendingLanes,(p&1)!==0?e===nl?jo++:(jo=0,nl=e):jo=0,vr(),null}function Di(){if(_r!==null){var e=_u(Os),n=lt.transition,i=Ze;try{if(lt.transition=null,Ze=16>e?16:e,_r===null)var l=!1;else{if(e=_r,_r=null,Os=0,(Ue&6)!==0)throw Error(r(331));var c=Ue;for(Ue|=4,ye=e.current;ye!==null;){var p=ye,$=p.child;if((ye.flags&16)!==0){var S=p.deletions;if(S!==null){for(var T=0;T<S.length;T++){var U=S[T];for(ye=U;ye!==null;){var te=ye;switch(te.tag){case 0:case 11:case 15:ko(8,te,p)}var ie=te.child;if(ie!==null)ie.return=te,ye=ie;else for(;ye!==null;){te=ye;var ee=te.sibling,fe=te.return;if($1(te),te===U){ye=null;break}if(ee!==null){ee.return=fe,ye=ee;break}ye=fe}}}var ve=p.alternate;if(ve!==null){var xe=ve.child;if(xe!==null){ve.child=null;do{var fn=xe.sibling;xe.sibling=null,xe=fn}while(xe!==null)}}ye=p}}if((p.subtreeFlags&2064)!==0&&$!==null)$.return=p,ye=$;else e:for(;ye!==null;){if(p=ye,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ko(9,p,p.return)}var N=p.sibling;if(N!==null){N.return=p.return,ye=N;break e}ye=p.return}}var D=e.current;for(ye=D;ye!==null;){$=ye;var O=$.child;if(($.subtreeFlags&2064)!==0&&O!==null)O.return=$,ye=O;else e:for($=D;ye!==null;){if(S=ye,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Bs(9,S)}}catch(_e){dn(S,S.return,_e)}if(S===$){ye=null;break e}var ae=S.sibling;if(ae!==null){ae.return=S.return,ye=ae;break e}ye=S.return}}if(Ue=c,vr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Zo,e)}catch{}l=!0}return l}finally{Ze=i,lt.transition=n}}return!1}function E1(e,n,i){n=Mi(i,n),n=e1(e,n,1),e=$r(e,n,1),n=Dn(),e!==null&&(Zi(e,1,n),Un(e,n))}function dn(e,n,i){if(e.tag===3)E1(e,e,i);else for(;n!==null;){if(n.tag===3){E1(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wr===null||!wr.has(l))){e=Mi(i,e),e=n1(n,e,1),n=$r(n,e,1),e=Dn(),n!==null&&(Zi(n,1,e),Un(n,e));break}}n=n.return}}function Pf(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=Dn(),e.pingedLanes|=e.suspendedLanes&i,kn===e&&(jn&i)===i&&($n===4||$n===3&&(jn&130023424)===jn&&500>on()-Ja?ei(e,0):Xa|=i),Un(e,n)}function B1(e,n){n===0&&((e.mode&1)===0?n=1:(n=Xo,Xo<<=1,(Xo&130023424)===0&&(Xo=4194304)));var i=Dn();e=Ut(e,n),e!==null&&(Zi(e,n,i),Un(e,i))}function Cf(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),B1(e,i)}function Rf(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),B1(e,i)}var N1;N1=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||On.current)Wn=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return Wn=!1,bf(e,n,i);Wn=(e.flags&131072)!==0}else Wn=!1,tn&&(n.flags&1048576)!==0&&yc(n,$s,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ds(e,n),e=n.pendingProps;var c=_i(n,qn.current);Ti(n,i),c=Aa(null,n,l,e,c,i);var p=Ma();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Hn(l)?(p=!0,ys(n)):p=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,_a(n),c.updater=Cs,n.stateNode=c,c._reactInternals=n,Ba(n,l,e,i),n=La(null,n,l,!0,p,i)):(n.tag=0,tn&&p&&pa(n),Rn(null,n,c,i),n=n.child),n;case 16:l=n.elementType;e:{switch(Ds(e,n),e=n.pendingProps,c=l._init,l=c(l._payload),n.type=l,c=n.tag=Ef(l),e=yt(l,e),c){case 0:n=Fa(null,n,l,e,i);break e;case 1:n=c1(null,n,l,e,i);break e;case 11:n=o1(null,n,l,e,i);break e;case 14:n=s1(null,n,l,yt(l.type,e),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:yt(l,c),Fa(e,n,l,c,i);case 1:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:yt(l,c),c1(e,n,l,c,i);case 3:e:{if(d1(n),e===null)throw Error(r(387));l=n.pendingProps,p=n.memoizedState,c=p.element,Sc(e,n),Ss(n,l,null,i);var $=n.memoizedState;if(l=$.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:$.cache,pendingSuspenseBoundaries:$.pendingSuspenseBoundaries,transitions:$.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){c=Mi(Error(r(423)),n),n=m1(e,n,l,i,c);break e}else if(l!==c){c=Mi(Error(r(424)),n),n=m1(e,n,l,i,c);break e}else for(Jn=hr(n.stateNode.containerInfo.firstChild),Xn=n,tn=!0,gt=null,i=kc(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Si(),l===c){n=Kt(e,n,i);break e}Rn(e,n,l,i)}n=n.child}return n;case 5:return Tc(n),e===null&&ga(n),l=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,$=c.children,aa(l,c)?$=null:p!==null&&aa(l,p)&&(n.flags|=32),u1(e,n),Rn(e,n,$,i),n.child;case 6:return e===null&&ga(n),null;case 13:return p1(e,n,i);case 4:return ka(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ji(n,null,l,i):Rn(e,n,l,i),n.child;case 11:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:yt(l,c),o1(e,n,l,c,i);case 7:return Rn(e,n,n.pendingProps,i),n.child;case 8:return Rn(e,n,n.pendingProps.children,i),n.child;case 12:return Rn(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,c=n.pendingProps,p=n.memoizedProps,$=c.value,Xe(_s,l._currentValue),l._currentValue=$,p!==null)if(ht(p.value,$)){if(p.children===c.children&&!On.current){n=Kt(e,n,i);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var S=p.dependencies;if(S!==null){$=p.child;for(var T=S.firstContext;T!==null;){if(T.context===l){if(p.tag===1){T=Vt(-1,i&-i),T.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var te=U.pending;te===null?T.next=T:(T.next=te.next,te.next=T),U.pending=T}}p.lanes|=i,T=p.alternate,T!==null&&(T.lanes|=i),ba(p.return,i,n),S.lanes|=i;break}T=T.next}}else if(p.tag===10)$=p.type===n.type?null:p.child;else if(p.tag===18){if($=p.return,$===null)throw Error(r(341));$.lanes|=i,S=$.alternate,S!==null&&(S.lanes|=i),ba($,i,n),$=p.sibling}else $=p.child;if($!==null)$.return=p;else for($=p;$!==null;){if($===n){$=null;break}if(p=$.sibling,p!==null){p.return=$.return,$=p;break}$=$.return}p=$}Rn(e,n,c.children,i),n=n.child}return n;case 9:return c=n.type,l=n.pendingProps.children,Ti(n,i),c=st(c),l=l(c),n.flags|=1,Rn(e,n,l,i),n.child;case 14:return l=n.type,c=yt(l,n.pendingProps),c=yt(l.type,c),s1(e,n,l,c,i);case 15:return a1(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:yt(l,c),Ds(e,n),n.tag=1,Hn(l)?(e=!0,ys(n)):e=!1,Ti(n,i),Xc(n,l,c),Ba(n,l,c,i),La(null,n,l,!0,e,i);case 19:return h1(e,n,i);case 22:return l1(e,n,i)}throw Error(r(156,n.tag))};function I1(e,n){return Ko(e,n)}function Df(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,n,i,l){return new Df(e,n,i,l)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Y)return 11;if(e===Pe)return 14}return 2}function Sr(e,n){var i=e.alternate;return i===null?(i=ut(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Us(e,n,i,l,c,p){var $=2;if(l=e,typeof e=="function")al(e)&&($=1);else if(typeof e=="string")$=5;else e:switch(e){case B:return ti(i.children,c,p,n);case Z:$=8,c|=8;break;case X:return e=ut(12,i,n,c|2),e.elementType=X,e.lanes=p,e;case de:return e=ut(13,i,n,c),e.elementType=de,e.lanes=p,e;case ke:return e=ut(19,i,n,c),e.elementType=ke,e.lanes=p,e;case Re:return Vs(i,c,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:$=10;break e;case be:$=9;break e;case Y:$=11;break e;case Pe:$=14;break e;case Ge:$=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=ut($,i,n,c),n.elementType=e,n.type=l,n.lanes=p,n}function ti(e,n,i,l){return e=ut(7,e,l,n),e.lanes=i,e}function Vs(e,n,i,l){return e=ut(22,e,l,n),e.elementType=Re,e.lanes=i,e.stateNode={isHidden:!1},e}function ll(e,n,i){return e=ut(6,e,null,n),e.lanes=i,e}function ul(e,n,i){return n=ut(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bf(e,n,i,l,c){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=E0(0),this.expirationTimes=E0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=E0(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function cl(e,n,i,l,c,p,$,S,T){return e=new Bf(e,n,i,S,T),n===1?(n=1,p===!0&&(n|=8)):n=0,p=ut(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},_a(p),e}function Nf(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function F1(e){if(!e)return yr;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Hn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Hn(i))return fc(e,i,n)}return n}function L1(e,n,i,l,c,p,$,S,T){return e=cl(i,l,!0,e,c,p,$,S,T),e.context=F1(null),i=e.current,l=Dn(),c=kr(i),p=Vt(l,c),p.callback=n??null,$r(i,p,c),e.current.lanes=c,Zi(e,c,l),Un(e,l),e}function Ks(e,n,i,l){var c=n.current,p=Dn(),$=kr(c);return i=F1(i),n.context===null?n.context=i:n.pendingContext=i,n=Vt(p,$),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=$r(c,n,$),e!==null&&($t(e,c,$,p),zs(e,c,$)),$}function Qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function O1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function dl(e,n){O1(e,n),(e=e.alternate)&&O1(e,n)}function If(){return null}var H1=typeof reportError=="function"?reportError:function(e){console.error(e)};function ml(e){this._internalRoot=e}Zs.prototype.render=ml.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));Ks(e,n,null,null)},Zs.prototype.unmount=ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jr(function(){Ks(null,e,null,null)}),n[Ot]=null}};function Zs(e){this._internalRoot=e}Zs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Su();e={blockedOn:null,target:e,priority:n};for(var i=0;i<mr.length&&n!==0&&n<mr[i].priority;i++);mr.splice(i,0,e),i===0&&Tu(e)}};function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function W1(){}function Ff(e,n,i,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var U=Qs($);p.call(U)}}var $=L1(n,l,e,0,null,!1,!1,"",W1);return e._reactRootContainer=$,e[Ot]=$.current,co(e.nodeType===8?e.parentNode:e),Jr(),$}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var S=l;l=function(){var U=Qs(T);S.call(U)}}var T=cl(e,0,!1,null,null,!1,!1,"",W1);return e._reactRootContainer=T,e[Ot]=T.current,co(e.nodeType===8?e.parentNode:e),Jr(function(){Ks(n,T,i,l)}),T}function Xs(e,n,i,l,c){var p=i._reactRootContainer;if(p){var $=p;if(typeof c=="function"){var S=c;c=function(){var T=Qs($);S.call(T)}}Ks(n,$,e,c)}else $=Ff(i,n,e,c,l);return Qs($)}ku=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Qi(n.pendingLanes);i!==0&&(B0(n,i|1),Un(n,on()),(Ue&6)===0&&(Ri=on()+500,vr()))}break;case 13:Jr(function(){var l=Ut(e,1);if(l!==null){var c=Dn();$t(l,e,1,c)}}),dl(e,1)}},N0=function(e){if(e.tag===13){var n=Ut(e,134217728);if(n!==null){var i=Dn();$t(n,e,134217728,i)}dl(e,134217728)}},zu=function(e){if(e.tag===13){var n=kr(e),i=Ut(e,n);if(i!==null){var l=Dn();$t(i,e,n,l)}dl(e,n)}},Su=function(){return Ze},ju=function(e,n){var i=Ze;try{return Ze=e,n()}finally{Ze=i}},Vi=function(e,n,i){switch(n){case"input":if(rr(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var c=hs(l);if(!c)throw Error(r(90));Fn(l),rr(l,c)}}}break;case"textarea":He(e,i);break;case"select":n=i.value,n!=null&&Ln(e,!!i.multiple,n,!1)}},ci=il,Wo=Jr;var Lf={usingClientEntryPoint:!1,Events:[fo,bi,hs,Oo,Ho,il]},qo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mi(e),e===null?null:e.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{Zo=Js.inject(Of),St=Js}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf,Vn.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pl(n))throw Error(r(200));return Nf(e,n,null,i)},Vn.createRoot=function(e,n){if(!pl(e))throw Error(r(299));var i=!1,l="",c=H1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=cl(e,1,!1,null,null,i,!1,l,c),e[Ot]=n.current,co(e.nodeType===8?e.parentNode:e),new ml(n)},Vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=mi(n),e=e===null?null:e.stateNode,e},Vn.flushSync=function(e){return Jr(e)},Vn.hydrate=function(e,n,i){if(!Ys(n))throw Error(r(200));return Xs(null,e,n,!0,i)},Vn.hydrateRoot=function(e,n,i){if(!pl(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,p="",$=H1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&($=i.onRecoverableError)),n=L1(n,null,e,1,i??null,c,!1,p,$),e[Ot]=n.current,co(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,c]:n.mutableSourceEagerHydrationData.push(i,c);return new Zs(n)},Vn.render=function(e,n,i){if(!Ys(n))throw Error(r(200));return Xs(null,e,n,!1,i)},Vn.unmountComponentAtNode=function(e){if(!Ys(e))throw Error(r(40));return e._reactRootContainer?(Jr(function(){Xs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},Vn.unstable_batchedUpdates=il,Vn.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!Ys(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Xs(e,n,i,!1,l)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var X1;function Zf(){if(X1)return gl.exports;X1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gl.exports=Qf(),gl.exports}var J1;function Yf(){if(J1)return e0;J1=1;var o=Zf();return e0.createRoot=o.createRoot,e0.hydrateRoot=o.hydrateRoot,e0}var Xf=Yf();const Jf=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,eh=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,nh=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,th=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,rh=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
Schemat Bernoulliego: n niezależnych powtórzeń doświadczenia z dwoma wynikami (sukces z p, porażka z 1−p). P(dokładnie k sukcesów) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ. Wartość oczekiwana: E = n·p. Typowe zadania: rzuty monetą, kontrola jakości, testy wielokrotne.

<!-- example -->
Na przykład: rzucamy monetą 4 razy, P(dokładnie 3 orły) = C(4,3) · (1/2)³ · (1/2)¹ = 4 · 1/8 · 1/2 = 4/16 = 1/4.
`,ih=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
Dwumian Newtona: (a+b)ⁿ = Σ C(n,k) · aⁿ⁻ᵏ · bᵏ dla k=0..n. Wyraz ogólny: C(n,k) · aⁿ⁻ᵏ · bᵏ. Współczynniki to kolejne wiersze trójkąta Pascala. Zastosowania: rozwinięcia potęg, przybliżenia, tożsamości kombinatoryczne.

<!-- example -->
Na przykład: (1+x)³ = 1 + 3x + 3x² + x³. Współczynniki 1,3,3,1 to trzeci wiersz trójkąta Pascala.
`,oh=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,sh=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
Kombinacja to wybór k elementów z n bez uwzględnienia kolejności. C(n,k) = n! / (k! · (n−k)!). Kluczowa różnica: permutacje uwzględniają kolejność, kombinacje nie. Symbol Newtona (n po k) to to samo co C(n,k). Trójkąt Pascala: C(n,k) = C(n−1,k−1) + C(n−1,k).

<!-- example -->
Na przykład: ile 2-osobowych par z grupy {A,B,C}? To AB, AC, BC — 3 pary = C(3,2) = 3!/(2!·1!) = 3. Kolejność nie ma znaczenia: AB to to samo co BA.
`,ah=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,lh=`---
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
`,uh=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,ch=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
Reguła mnożenia: jeśli jedno zdarzenie ma m możliwości, a drugie n, to razem m·n. Reguła dodawania: jeśli zdarzenia się wykluczają, sumujemy możliwości. Zasada szufladkowa: jeśli n+1 obiektów umieszczamy w n szufladkach, to w co najmniej jednej są ≥ 2 obiekty.

<!-- example -->
Na przykład: 3 koszulki × 4 spodnie = 12 zestawów (reguła mnożenia). Albo: wejście A ma 5 opcji, wejście B ma 3 opcje, razem 5+3 = 8 opcji jeśli się wykluczają (reguła dodawania).
`,dh=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,mh=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,ph=`---
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
`,fh=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,hh=`---
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
`,gh=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,yh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,vh=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,xh=`---
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
`,$h=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,bh=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,wh=`---
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
`,_h=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,kh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,zh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,Sh=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,jh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,qh=`---
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
`,Ah=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,Mh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,Ph=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,Ch=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,Rh=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,Dh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
Optymalizacja z funkcją kwadratową: gdy zależność jest parabolą, wartość największa lub najmniejsza jest w wierzchołku. Typowe zadania: największe pole prostokąta o zadanym obwodzie, maksymalny dochód, zasięg pocisku. Klucz: zapisz wielkość do optymalizacji jako funkcję kwadratową jednej zmiennej.

<!-- example -->
Na przykład: prostokąt o obwodzie 20. Boki: x i (10−x). Pole: P = x(10−x) = −x² + 10x. Wierzchołek: x = 5, P = 25. Największe pole ma kwadrat 5×5.
`,Eh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,Bh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
Permutacja to uporządkowanie n elementów. Liczba permutacji: P(n) = n!. Permutacje z powtórzeniami: n! / (k₁! · k₂! · …). Wariacje bez powtórzeń (k z n elementów w ustalonej kolejności): V(n,k) = n!/(n−k)!.

<!-- example -->
Na przykład: na ile sposobów ustawić litery A, B, C? To ABC, ACB, BAC, BCA, CAB, CBA — 6 sposobów = 3! = 3·2·1 = 6.
`,Nh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,Ih=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,Fh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
Wielomian to wyrażenie postaci aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀. Stopień wielomianu to najwyższa potęga x z niezerowym współczynnikiem. Kluczowe umiejętności: mnożenie wielomianów, wyłączanie przed nawias, dzielenie wielomianów, twierdzenie Bézouta.

<!-- example -->
Na przykład: 2x³ + 5x² − 3x + 1. Tu a₃=2, a₂=5, a₁=−3, a₀=1. Stopień = 3, bo najwyższa potęga x to x³.
`,Lh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,Oh=`---
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
`,Hh=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,Wh=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
---
`,Gh=`---
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
`,Uh=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
Nierówność kwadratowa ax² + bx + c > 0 (lub <, ≥, ≤). Metoda rozwiązywania: znajdź miejsca zerowe, narysuj schemat znaku paraboli, odczytaj przedziały spełniające nierówność. Parabola z a > 0 jest ujemna między pierwiastkami, dodatnia na zewnątrz.

<!-- example -->
Na przykład: x² − x − 6 < 0. Pierwiastki: x=−2 i x=3. Parabola (a>0) jest pod osią X między pierwiastkami, więc odpowiedź: x ∈ (−2, 3).
`,Vh=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Kh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Qh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Zh=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
---
Zbiór to kolekcja elementów. Operacje: suma A∪B (elementy z A lub B), iloczyn A∩B (elementy wspólne), różnica A\\B (elementy z A, których nie ma w B), dopełnienie A' (elementy spoza A). Diagram Venna pomaga wizualizować relacje między zbiorami.

<!-- example -->
Na przykład: A = {1,2,3,4}, B = {3,4,5,6}. A∩B = {3,4} (wspólne). A∪B = {1,2,3,4,5,6} (wszystkie). A\\B = {1,2} (z A, których nie ma w B).
`,Yh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Xh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Jh=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
`,e2=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,n2=`---
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
`,t2=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,r2=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,i2=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,o2=`---
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
`,s2=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
Wzory Viète'a łączą współczynniki równania kwadratowego z jego pierwiastkami. Dla ax² + bx + c = 0 z pierwiastkami x₁, x₂: suma x₁ + x₂ = −b/a, iloczyn x₁·x₂ = c/a. Pozwalają konstruować równania o zadanych pierwiastkach i obliczać wyrażenia symetryczne bez rozwiązywania równania.

<!-- example -->
Na przykład: x² − 7x + 12 = 0 ma pierwiastki 3 i 4. Sprawdź: 3+4 = 7 = −(−7)/1 ✓, 3·4 = 12 = 12/1 ✓. Bez rozwiązywania wiesz, że suma = 7, iloczyn = 12.
`,a2=`---
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
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,l2=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,u2=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,c2=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,d2=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,m2=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,p2=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,f2=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,h2=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,g2=`---
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
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,y2=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,v2=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,x2=`---
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
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,$2=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,b2=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,w2=`---
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
Prawdopodobieństwo sukcesu w pojedynczej próbie wynosi $\\frac{1}{3}$. Wykonujemy 5 niezależnych prób. Jakie jest prawdopodobieństwo dokładnie 2 sukcesów?`,_2=`---
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
Rzucamy monetą 6 razy. Jaka jest oczekiwana liczba orłów?`,k2=`---
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
Rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo otrzymania co najmniej jednego orła?`,z2=`---
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
Rzucamy monetą 7 razy. Jakie jest prawdopodobieństwo uzyskania dokładnie 3 orłów?`,S2=`---
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
Prawdopodobieństwo trafienia w cel jednym strzałem wynosi $\\frac{1}{5}$. Strzelec oddaje 4 strzały. Jakie jest prawdopodobieństwo, że nie trafi ani razu?`,j2=`---
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
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,q2=`---
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
Rozwiń $(a + b)^3$:`,T2=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,A2=`---
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
Rozwiń $(x+1)^4$:`,M2=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x+2)^5$?`,P2=`---
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
Ile wynosi suma wszystkich współczynników dwumianowych w rozwinięciu $(a+b)^5$?`,C2=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x - 3)^6$?`,R2=`---
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
Ile wyrazów ma rozwinięcie dwumianu $(a+b)^6$?`,D2=`---
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
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,E2=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,B2=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,N2=`---
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
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,I2=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,F2=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,L2=`---
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
Na turnieju gra 8 drużyn. Każda para gra ze sobą dokładnie raz. Ile meczów zostanie rozegranych?`,O2=`---
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
Z 10 uczniów wybieramy 4-osobową drużynę. Na ile sposobów?`,H2=`---
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
Która z poniższych tożsamości jest prawdziwa dla $0 \\le k \\le n$?`,W2=`---
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
Z grupy 6 kobiet i 8 mężczyzn wybieramy komisję złożoną z 2 kobiet i 3 mężczyzn. Na ile sposobów można to zrobić?`,G2=`---
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
Ile wynosi $\\binom{7}{3}$?`,U2=`---
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
Moduł liczby zespolonej z = 3 + 4i wynosi:`,V2=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,K2=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,Q2=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,Z2=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,Y2=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,X2=`---
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
Rzucamy kostką. Wiemy, że wypadła liczba parzysta. Jakie jest prawdopodobieństwo, że jest ona większa niż 4?`,J2=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(B|A) = 0{,}8$. Korzystając ze wzoru Bayesa, oblicz $P(A|B)$.`,e4=`---
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
$P(A) = 0{,}4$, $P(B|A) = 0{,}9$, $P(B|A') = 0{,}4$. Oblicz $P(B)$ korzystając ze wzoru prawdopodobieństwa całkowitego.`,n4=`---
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
W urnie są 3 kule czerwone i 9 niebieskich. Losujemy bez zwracania. Pierwsza kula była czerwona. Jakie jest prawdopodobieństwo, że druga też będzie czerwona?`,t4=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}12$. Czy zdarzenia $A$ i $B$ są niezależne?`,r4=`---
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
$P(A) = 0{,}4$ i $P(A \\cap B) = 0{,}3$. Ile wynosi $P(B|A)$?`,i4=`---
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
Fabryka ma dwie linie produkcyjne. Linia I wytwarza 40% produkcji z 5% braków, linia II — 60% produkcji z 3% braków. Losowo wybrany produkt okazał się wadliwy. Jakie jest prawdopodobieństwo, że pochodzi z linii I?`,o4=`---
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
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,s4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,a4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,l4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,u4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,c4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,d4=`---
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
Ile jest liczb 5-cyfrowych, w których każda cyfra (od 1 do 5) występuje dokładnie raz?`,m4=`---
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
Na jednej półce stoi 7 książek, na drugiej 8. Na ile sposobów można wybrać jedną książkę?`,p4=`---
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
Ile jest możliwych 4-cyfrowych kodów PIN (cyfry 0–9, mogą się powtarzać)?`,f4=`---
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
W restauracji jest 4 rodzaje zup i 9 dań głównych. Na ile sposobów można zamówić obiad składający się z zupy i dania głównego?`,h4=`---
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
W pokoju jest 13 osób. Co najmniej ile osób musiało urodzić się w tym samym miesiącu?`,g4=`---
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
Z 10 zawodników wybieramy 3 na podium (1., 2. i 3. miejsce). Na ile sposobów można to zrobić?`,y4=`---
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
Ile liczb parzystych 4-cyfrowych można utworzyć z cyfr $\\{1, 2, 3, 4\\}$, jeśli każda cyfra występuje dokładnie raz?`,v4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,x4=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,$4=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,b4=`---
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
Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:`,w4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,_4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,k4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,z4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,S4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,j4=`---
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
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,q4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,T4=`---
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
Wykres rozkładu normalnego ma kształt:`,A4=`---
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
Rozkład na czynniki: x² − 5x + 6 =`,M4=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,P4=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,C4=`---
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
Rozłóż na czynniki: $x^2 - 25 =$`,R4=`---
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
Rozłóż na czynniki: $x^2 + 6x + 9 =$`,D4=`---
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
Rozłóż na czynniki: $4x^2 - 9 =$`,E4=`---
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
Rozłóż na czynniki: $3x^2 - 3x - 6 =$`,B4=`---
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
Rozłóż przez grupowanie: $x^3 + x^2 + 3x + 3 =$`,N4=`---
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
Rozłóż na czynniki: $3x^2 + 7x + 2 =$`,I4=`---
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
Rozłóż na czynniki: $x^3 - 1 =$`,F4=`---
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
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,L4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,O4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,H4=`---
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
Która z poniższych relacji NIE jest funkcją?`,W4=`---
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
Funkcja to takie przyporządkowanie, że:`,G4=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,U4=`---
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
Funkcja f(x) = 2ˣ jest:`,V4=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,K4=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,Q4=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,Z4=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,Y4=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,X4=`---
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
Dziedzina funkcji f(x) = log(x − 2) to:`,J4=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,e3=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,n3=`---
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
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,t3=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,r3=`---
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
Funkcja $f(x) = x^3$ jest:`,i3=`---
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
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,o3=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,s3=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,a3=`---
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
Oś symetrii paraboli $f(x) = x^2 - 6x + 5$ ma równanie:`,l3=`---
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
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,u3=`---
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
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,c3=`---
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
Funkcja $f(x) = -x^2 + 2x + 3$ ma:`,d3=`---
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
Postać kanoniczna funkcji $f(x) = x^2 - 6x + 10$ to:`,m3=`---
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
Funkcja $g(x) = (x - 2)^2 + 3$ jest obrazem funkcji $f(x) = x^2$ przez:`,p3=`---
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
Funkcja $f(x) = -2x^2 + 4x + 5$ ma:`,f3=`---
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
Okres funkcji f(x) = sin(2x) wynosi:`,h3=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,g3=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,y3=`---
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
Uproszczona postać ułamka 45/60 to:`,v3=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,x3=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,$3=`---
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
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,b3=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,w3=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,_3=`---
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
Ile wynosi NWD(84, 56)?`,k3=`---
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
Oblicz: $(-3) \\cdot 4 =$`,z3=`---
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
Oblicz: $3 - 8 =$`,S3=`---
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
$\\displaystyle \\int 2x \\, dx =$`,j3=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,q3=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,T3=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,A3=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,M3=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,P3=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,C3=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,R3=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,D3=`---
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
Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:`,E3=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,B3=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,N3=`---
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
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,I3=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,F3=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,L3=`---
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
Rozwiązaniem równania log₂(x) = 3 jest:`,O3=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,H3=`---
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
Rozwiąż równanie: $2^x = 16$`,W3=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,G3=`---
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
Oblicz: $\\log_2 8 =$`,U3=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,V3=`---
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
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,K3=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,Q3=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,Z3=`---
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
Prostokąt o obwodzie 20 ma największe pole gdy:`,Y3=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,X3=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,J3=`---
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
Rolnik ma $50$ m ogrodzenia i chce ogrodzić prostokątny wybieg przy ścianie stodoły (jedna strona nie wymaga ogrodzenia). Jaką długość powinna mieć strona przy ścianie, aby pole wybiegu było największe?`,e5=`---
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
Piłkę wyrzucono pionowo w górę. Jej wysokość (w metrach) po $t$ sekundach opisuje wzór $h(t) = -5t^2 + 30t$. Jaka jest maksymalna wysokość piłki?`,n5=`---
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
Sklep sprzedaje produkt w cenie $x$ zł za sztukę. Liczba sprzedanych sztuk wynosi $(100 - x)$. Przy jakiej cenie przychód jest największy i ile wynosi?`,t5=`---
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
Suma dwóch liczb nieujemnych wynosi $16$. Iloczyn tych liczb jest największy, gdy te liczby to:`,r5=`---
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
Najmniejsza wartość funkcji $f(x) = 2x^2 - 4x - 1$ wynosi:`,i5=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,o5=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,s5=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,a5=`---
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
Liczba permutacji zbioru {A, B, C, D} wynosi:`,l5=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,u5=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,c5=`---
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
Na ile sposobów można ustawić 5 różnych książek na półce?`,d5=`---
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
Ile różnych „słów" (ciągów liter) można utworzyć ze wszystkich liter wyrazu KOTEK?`,m5=`---
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
Z 5 kandydatów wybieramy przewodniczącego, zastępcę i sekretarza. Na ile sposobów?`,p5=`---
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
Ile anagramów (różnych ciągów liter) można utworzyć ze wszystkich liter wyrazu MATEMATYKA?`,f5=`---
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
Na ile sposobów można ustawić w rzędzie 5 osób, jeśli dwie konkretne osoby muszą stać obok siebie?`,h5=`---
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
Kąt wpisany w okrąg oparty na średnicy mierzy:`,g5=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,y5=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,v5=`---
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
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,x5=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,$5=`---
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
Wielomian stopnia $n$ ma:`,b5=`---
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
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,w5=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,_5=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,k5=`---
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
Rozwiń: $(2x - 1)(x + 3) =$`,z5=`---
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
Jaki jest stopień wielomianu $W(x) = x^5 - 3x^3 + 2x - 7$?`,S5=`---
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
Oblicz wartość wielomianu $W(x) = 2x^3 - 3x^2 + 2x - 2$ dla $x = 2$.`,j5=`---
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
Iloraz $\\frac{x^3 + 4x^2 + 7x + 6}{x + 2}$ jest równy:`,q5=`---
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
Suma wielomianów $P(x) = x^4 - 3x^2 + 1$ i $Q(x) = -2x^3 + 4x^2 + 2x - 3$ wynosi:`,T5=`---
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
Rozwiń $(x + 1)^3 =$`,A5=`---
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
Wielomian $P(x)$ ma stopień $1$, a wielomian $Q(x)$ ma stopień $3$. Jaki jest stopień wielomianu $P(x) \\cdot Q(x)$?`,M5=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,P5=`---
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
Oblicz: $2^3 =$`,C5=`---
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
Uprość: $a^2 \\cdot a^3 =$`,R5=`---
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
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,D5=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,E5=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,B5=`---
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
Z talii 52 kart losujemy jedną kartę. Jakie jest prawdopodobieństwo wylosowania asa?`,N5=`---
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
Rzucamy kostką sześcienną. Jakie jest prawdopodobieństwo, że NIE wypadnie szóstka?`,I5=`---
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
Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo otrzymania dwóch orłów?`,F5=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?`,L5=`---
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
$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$, $P(A \\cap B) = \\frac{1}{6}$. Ile wynosi $P(A \\cup B)$?`,O5=`---
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
Zdarzenia $A$ i $B$ są niezależne. $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{5}$. Ile wynosi $P(A \\cap B)$?`,H5=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek będzie większa niż 8?`,W5=`---
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
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,G5=`---
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
Dowód nie wprost polega na tym, że:`,U5=`---
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
Dowód przez indukcję matematyczną składa się z:`,V5=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,K5=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,Q5=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,Z5=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,Y5=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,X5=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,J5=`---
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
Ile rozwiązań ma równanie $x^2 - 6x + 9 = 0$?`,e6=`---
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
Równanie $x^2 + 1 = 0$ ma:`,n6=`---
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
Rozwiąż równanie $2x^2 - x - 3 = 0$.`,t6=`---
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
Wyróżnik równania $2x^2 - 3x - 5 = 0$ wynosi:`,r6=`---
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
Rozwiąż równanie $x^2 - 5x = 0$.`,i6=`---
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
Równanie $2x^2 + x + m = 0$ ma dwa różne pierwiastki rzeczywiste, gdy:`,o6=`---
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
Iloczyn dwóch kolejnych liczb nieparzystych wynosi $35$. Te liczby to:`,s6=`---
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
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,a6=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,l6=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,u6=`---
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
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,c6=`---
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
Rozwiązaniem nierówności $x^2 + 2x + 5 > 0$ jest:`,d6=`---
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
Rozwiąż nierówność $x^2 - 5x + 4 \\leq 0$.`,m6=`---
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
Rozwiąż nierówność $-x^2 - 2x + 3 \\leq 0$.`,p6=`---
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
Rozwiązaniem nierówności $x^2 - 4x + 4 > 0$ jest:`,f6=`---
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
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,h6=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,g6=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,y6=`---
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
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,v6=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,x6=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,$6=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,b6=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,w6=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,_6=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,k6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,z6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,S6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,j6=`---
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
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,q6=`---
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
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,T6=`---
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
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,A6=`---
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
Które z poniższych jest poprawnym prawem De Morgana?`,M6=`---
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
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,P6=`---
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
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,C6=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,R6=`---
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
Twierdzenie cosinusów brzmi:`,D6=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,E6=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,B6=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,N6=`---
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
Wzór na objętość kuli o promieniu $r$:`,I6=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,F6=`---
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
Dominanta (moda) zbioru danych to:`,L6=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,O6=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,H6=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,W6=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,G6=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,U6=`---
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
Wartość $\\sin 30°$ wynosi:`,V6=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,K6=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,Q6=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,Z6=`---
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
Rozwiąż równanie: $\\tan x = 1$`,Y6=`---
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
sin(2α) jest równe:`,X6=`---
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
Wzór na $\\sin 2\\alpha$:`,J6=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,eg=`---
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
Wartość sin(120°) jest równa:`,ng=`---
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
Wartość $\\cos 30°$ wynosi:`,tg=`---
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
Wartość $\\sin 45°$ wynosi:`,rg=`---
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
Długość wektora v = [3, 4] wynosi:`,ig=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,og=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,sg=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,ag=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,lg=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,ug=`---
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
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,cg=`---
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
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,dg=`---
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
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,mg=`---
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
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,pg=`---
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
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`;function Qd(o){const t=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:o.trim()};const r=t[1],s=t[2].trim(),a={},u=r.split(/\r?\n/);let d=0;for(;d<u.length;){const g=u[d];if(g.startsWith("  ")){d++;continue}const f=g.match(/^(\w+):\s*(.*)/);if(!f){d++;continue}const v=f[1];let b=f[2].trim();if(b===""||b===null){const _=u[d+1]??"";if(_.startsWith("  - ")){const z=[];for(d++;d<u.length&&u[d].startsWith("  - ");){let k=u[d].replace(/^  - /,"").trim();k=k.replace(/^["']|["']$/g,""),z.push(k),d++}a[v]=z.length>0?z:null}else if(_.match(/^  \w+:/)){const z={};for(d++;d<u.length&&u[d].match(/^  \w+:/);){const k=u[d].match(/^  (\w+):\s*(.*)/);if(k){const M=k[1];let P=k[2].trim().replace(/^["']|["']$/g,"");z[M]=!isNaN(P)&&P!==""?Number(P):P}d++}a[v]=z}else a[v]=null,d++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?a[v]=Number(b):b==="true"?a[v]=!0:b==="false"?a[v]=!1:a[v]=b,d++}return{meta:a,body:s}}function Zd(o,t){return Object.entries(o).map(([r,s])=>{var g;const a=(g=r.match(t))==null?void 0:g[1],{meta:u,body:d}=Qd(s);return{id:a,body:d||"",label:u.label??a,labelPl:u.labelPl??u.label??a,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0,resources:Array.isArray(u.resources)?u.resources.map(f=>{if(typeof f!="string")return null;const[v,b,_,z]=f.split("|").map(M=>M.trim()),k=b&&!b.includes("/")&&!b.startsWith("http")?`resources/${a}/${b}`:b??"";return{type:v??"article",url:k,titleEn:_??"",titlePl:z??_??""}}).filter(Boolean):[]}})}function Yd(o,t){var s;const r={};for(const[a,u]of Object.entries(o)){const d=(s=a.match(t))==null?void 0:s[1];if(!d)continue;const{meta:g,body:f}=Qd(u);r[d]||(r[d]=[]),r[d].push({q:f,options:g.options??[],correct:g.correct??0,hint:g.hint??"",tests:g.tests&&typeof g.tests=="object"&&Object.keys(g.tests).length>0?g.tests:{[d]:1}})}return r}function Xd(o,t,r=[]){const s=o[t];if(!s||s.length===0||r.includes(-1))return null;const a=s.map((d,g)=>({q:d,i:g})).filter(({i:d})=>!r.includes(d));if(a.length===0)return null;const u=a[Math.floor(Math.random()*a.length)];return{...u.q,index:u.i}}const fg=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],hg={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},gg={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},yg={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},vg={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},xg=Object.assign({"./nodes/abs_value/node.md":Jf,"./nodes/analytic_geom/node.md":eh,"./nodes/area_perimeter/node.md":nh,"./nodes/arith_geom/node.md":th,"./nodes/bernoulli/node.md":rh,"./nodes/binom_theorem/node.md":ih,"./nodes/circle_eq/node.md":oh,"./nodes/combinations/node.md":sh,"./nodes/complex/node.md":ah,"./nodes/cond_prob/node.md":lh,"./nodes/conic_sections/node.md":uh,"./nodes/counting/node.md":ch,"./nodes/data_basics/node.md":dh,"./nodes/deriv_apps/node.md":mh,"./nodes/derivative/node.md":ph,"./nodes/distributions/node.md":fh,"./nodes/factoring/node.md":hh,"./nodes/fn_compositions/node.md":gh,"./nodes/fn_concept/node.md":yh,"./nodes/fn_exp/node.md":vh,"./nodes/fn_linear/node.md":xh,"./nodes/fn_log/node.md":$h,"./nodes/fn_poly/node.md":bh,"./nodes/fn_quadratic/node.md":wh,"./nodes/fn_trig/node.md":_h,"./nodes/fractions/node.md":kh,"./nodes/geo_series/node.md":zh,"./nodes/integers/node.md":Sh,"./nodes/integral/node.md":jh,"./nodes/limits/node.md":qh,"./nodes/linear_eq/node.md":Th,"./nodes/linear_ineq/node.md":Ah,"./nodes/linear_sys/node.md":Mh,"./nodes/log_eq/node.md":Ph,"./nodes/log_exp/node.md":Ch,"./nodes/logic_basics/node.md":Rh,"./nodes/optimization_lp/node.md":Dh,"./nodes/param_eq/node.md":Eh,"./nodes/permutations/node.md":Bh,"./nodes/planimetria_lp/node.md":Nh,"./nodes/poly_roots/node.md":Ih,"./nodes/polynomials/node.md":Fh,"./nodes/powers/node.md":Lh,"./nodes/probability/node.md":Oh,"./nodes/proof/node.md":Hh,"./nodes/pythagoras/node.md":Wh,"./nodes/quadratic_eq/node.md":Gh,"./nodes/quadratic_ineq/node.md":Uh,"./nodes/rational_expr/node.md":Vh,"./nodes/seq_limits/node.md":Kh,"./nodes/sequences/node.md":Qh,"./nodes/sets/node.md":Zh,"./nodes/sin_cos_law/node.md":Yh,"./nodes/solid_geom/node.md":Xh,"./nodes/stat_lp/node.md":Jh,"./nodes/thales/node.md":e2,"./nodes/trig_basic/node.md":n2,"./nodes/trig_eq/node.md":t2,"./nodes/trig_formulas/node.md":r2,"./nodes/trig_lp/node.md":i2,"./nodes/vectors/node.md":o2,"./nodes/vieta/node.md":s2}),$g=Zd(xg,/\.\/nodes\/([^/]+)\/node\.md$/),bg=Object.assign({"./nodes/abs_value/questions/01.md":a2,"./nodes/abs_value/questions/02.md":l2,"./nodes/abs_value/questions/03.md":u2,"./nodes/analytic_geom/questions/01.md":c2,"./nodes/analytic_geom/questions/02.md":d2,"./nodes/analytic_geom/questions/03.md":m2,"./nodes/area_perimeter/questions/01.md":p2,"./nodes/area_perimeter/questions/02.md":f2,"./nodes/area_perimeter/questions/03.md":h2,"./nodes/arith_geom/questions/01.md":g2,"./nodes/arith_geom/questions/02.md":y2,"./nodes/arith_geom/questions/03.md":v2,"./nodes/bernoulli/questions/01.md":x2,"./nodes/bernoulli/questions/02.md":$2,"./nodes/bernoulli/questions/03.md":b2,"./nodes/bernoulli/questions/04.md":w2,"./nodes/bernoulli/questions/05.md":_2,"./nodes/bernoulli/questions/06.md":k2,"./nodes/bernoulli/questions/07.md":z2,"./nodes/bernoulli/questions/08.md":S2,"./nodes/binom_theorem/questions/01.md":j2,"./nodes/binom_theorem/questions/02.md":q2,"./nodes/binom_theorem/questions/03.md":T2,"./nodes/binom_theorem/questions/04.md":A2,"./nodes/binom_theorem/questions/05.md":M2,"./nodes/binom_theorem/questions/06.md":P2,"./nodes/binom_theorem/questions/07.md":C2,"./nodes/binom_theorem/questions/08.md":R2,"./nodes/circle_eq/questions/01.md":D2,"./nodes/circle_eq/questions/02.md":E2,"./nodes/circle_eq/questions/03.md":B2,"./nodes/combinations/questions/01.md":N2,"./nodes/combinations/questions/02.md":I2,"./nodes/combinations/questions/03.md":F2,"./nodes/combinations/questions/04.md":L2,"./nodes/combinations/questions/05.md":O2,"./nodes/combinations/questions/06.md":H2,"./nodes/combinations/questions/07.md":W2,"./nodes/combinations/questions/08.md":G2,"./nodes/complex/questions/01.md":U2,"./nodes/complex/questions/02.md":V2,"./nodes/complex/questions/03.md":K2,"./nodes/cond_prob/questions/01.md":Q2,"./nodes/cond_prob/questions/02.md":Z2,"./nodes/cond_prob/questions/03.md":Y2,"./nodes/cond_prob/questions/04.md":X2,"./nodes/cond_prob/questions/05.md":J2,"./nodes/cond_prob/questions/06.md":e4,"./nodes/cond_prob/questions/07.md":n4,"./nodes/cond_prob/questions/08.md":t4,"./nodes/cond_prob/questions/09.md":r4,"./nodes/cond_prob/questions/10.md":i4,"./nodes/conic_sections/questions/01.md":o4,"./nodes/conic_sections/questions/02.md":s4,"./nodes/conic_sections/questions/03.md":a4,"./nodes/counting/questions/01.md":l4,"./nodes/counting/questions/02.md":u4,"./nodes/counting/questions/03.md":c4,"./nodes/counting/questions/04.md":d4,"./nodes/counting/questions/05.md":m4,"./nodes/counting/questions/06.md":p4,"./nodes/counting/questions/07.md":f4,"./nodes/counting/questions/08.md":h4,"./nodes/counting/questions/09.md":g4,"./nodes/counting/questions/10.md":y4,"./nodes/data_basics/questions/01.md":v4,"./nodes/data_basics/questions/02.md":x4,"./nodes/data_basics/questions/03.md":$4,"./nodes/deriv_apps/questions/01.md":b4,"./nodes/deriv_apps/questions/02.md":w4,"./nodes/deriv_apps/questions/03.md":_4,"./nodes/derivative/questions/01.md":k4,"./nodes/derivative/questions/02.md":z4,"./nodes/derivative/questions/03.md":S4,"./nodes/distributions/questions/01.md":j4,"./nodes/distributions/questions/02.md":q4,"./nodes/distributions/questions/03.md":T4,"./nodes/factoring/questions/01.md":A4,"./nodes/factoring/questions/02.md":M4,"./nodes/factoring/questions/03.md":P4,"./nodes/factoring/questions/04.md":C4,"./nodes/factoring/questions/05.md":R4,"./nodes/factoring/questions/06.md":D4,"./nodes/factoring/questions/07.md":E4,"./nodes/factoring/questions/08.md":B4,"./nodes/factoring/questions/09.md":N4,"./nodes/factoring/questions/10.md":I4,"./nodes/fn_compositions/questions/01.md":F4,"./nodes/fn_compositions/questions/02.md":L4,"./nodes/fn_compositions/questions/03.md":O4,"./nodes/fn_concept/questions/01.md":H4,"./nodes/fn_concept/questions/02.md":W4,"./nodes/fn_concept/questions/03.md":G4,"./nodes/fn_exp/questions/01.md":U4,"./nodes/fn_exp/questions/02.md":V4,"./nodes/fn_exp/questions/03.md":K4,"./nodes/fn_linear/questions/01.md":Q4,"./nodes/fn_linear/questions/02.md":Z4,"./nodes/fn_linear/questions/03.md":Y4,"./nodes/fn_log/questions/01.md":X4,"./nodes/fn_log/questions/02.md":J4,"./nodes/fn_log/questions/03.md":e3,"./nodes/fn_poly/questions/01.md":n3,"./nodes/fn_poly/questions/02.md":t3,"./nodes/fn_poly/questions/03.md":r3,"./nodes/fn_quadratic/questions/01.md":i3,"./nodes/fn_quadratic/questions/02.md":o3,"./nodes/fn_quadratic/questions/03.md":s3,"./nodes/fn_quadratic/questions/04.md":a3,"./nodes/fn_quadratic/questions/05.md":l3,"./nodes/fn_quadratic/questions/06.md":u3,"./nodes/fn_quadratic/questions/07.md":c3,"./nodes/fn_quadratic/questions/08.md":d3,"./nodes/fn_quadratic/questions/09.md":m3,"./nodes/fn_quadratic/questions/10.md":p3,"./nodes/fn_trig/questions/01.md":f3,"./nodes/fn_trig/questions/02.md":h3,"./nodes/fn_trig/questions/03.md":g3,"./nodes/fractions/questions/01.md":y3,"./nodes/fractions/questions/02.md":v3,"./nodes/fractions/questions/03.md":x3,"./nodes/geo_series/questions/01.md":$3,"./nodes/geo_series/questions/02.md":b3,"./nodes/geo_series/questions/03.md":w3,"./nodes/integers/questions/01.md":_3,"./nodes/integers/questions/02.md":k3,"./nodes/integers/questions/03.md":z3,"./nodes/integral/questions/01.md":S3,"./nodes/integral/questions/02.md":j3,"./nodes/integral/questions/03.md":q3,"./nodes/limits/questions/01.md":T3,"./nodes/limits/questions/02.md":A3,"./nodes/limits/questions/03.md":M3,"./nodes/linear_eq/questions/01.md":P3,"./nodes/linear_eq/questions/02.md":C3,"./nodes/linear_eq/questions/03.md":R3,"./nodes/linear_ineq/questions/01.md":D3,"./nodes/linear_ineq/questions/02.md":E3,"./nodes/linear_ineq/questions/03.md":B3,"./nodes/linear_sys/questions/01.md":N3,"./nodes/linear_sys/questions/02.md":I3,"./nodes/linear_sys/questions/03.md":F3,"./nodes/log_eq/questions/01.md":L3,"./nodes/log_eq/questions/02.md":O3,"./nodes/log_eq/questions/03.md":H3,"./nodes/log_exp/questions/01.md":W3,"./nodes/log_exp/questions/02.md":G3,"./nodes/log_exp/questions/03.md":U3,"./nodes/logic_basics/questions/01.md":V3,"./nodes/logic_basics/questions/02.md":K3,"./nodes/logic_basics/questions/03.md":Q3,"./nodes/optimization_lp/questions/01.md":Z3,"./nodes/optimization_lp/questions/02.md":Y3,"./nodes/optimization_lp/questions/03.md":X3,"./nodes/optimization_lp/questions/04.md":J3,"./nodes/optimization_lp/questions/05.md":e5,"./nodes/optimization_lp/questions/06.md":n5,"./nodes/optimization_lp/questions/07.md":t5,"./nodes/optimization_lp/questions/08.md":r5,"./nodes/param_eq/questions/01.md":i5,"./nodes/param_eq/questions/02.md":o5,"./nodes/param_eq/questions/03.md":s5,"./nodes/permutations/questions/01.md":a5,"./nodes/permutations/questions/02.md":l5,"./nodes/permutations/questions/03.md":u5,"./nodes/permutations/questions/04.md":c5,"./nodes/permutations/questions/05.md":d5,"./nodes/permutations/questions/06.md":m5,"./nodes/permutations/questions/07.md":p5,"./nodes/permutations/questions/08.md":f5,"./nodes/planimetria_lp/questions/01.md":h5,"./nodes/planimetria_lp/questions/02.md":g5,"./nodes/planimetria_lp/questions/03.md":y5,"./nodes/poly_roots/questions/01.md":v5,"./nodes/poly_roots/questions/02.md":x5,"./nodes/poly_roots/questions/03.md":$5,"./nodes/polynomials/questions/01.md":b5,"./nodes/polynomials/questions/02.md":w5,"./nodes/polynomials/questions/03.md":_5,"./nodes/polynomials/questions/04.md":k5,"./nodes/polynomials/questions/05.md":z5,"./nodes/polynomials/questions/06.md":S5,"./nodes/polynomials/questions/07.md":j5,"./nodes/polynomials/questions/08.md":q5,"./nodes/polynomials/questions/09.md":T5,"./nodes/polynomials/questions/10.md":A5,"./nodes/powers/questions/01.md":M5,"./nodes/powers/questions/02.md":P5,"./nodes/powers/questions/03.md":C5,"./nodes/probability/questions/01.md":R5,"./nodes/probability/questions/02.md":D5,"./nodes/probability/questions/03.md":E5,"./nodes/probability/questions/04.md":B5,"./nodes/probability/questions/05.md":N5,"./nodes/probability/questions/06.md":I5,"./nodes/probability/questions/07.md":F5,"./nodes/probability/questions/08.md":L5,"./nodes/probability/questions/09.md":O5,"./nodes/probability/questions/10.md":H5,"./nodes/proof/questions/01.md":W5,"./nodes/proof/questions/02.md":G5,"./nodes/proof/questions/03.md":U5,"./nodes/pythagoras/questions/01.md":V5,"./nodes/pythagoras/questions/02.md":K5,"./nodes/pythagoras/questions/03.md":Q5,"./nodes/quadratic_eq/questions/01.md":Z5,"./nodes/quadratic_eq/questions/02.md":Y5,"./nodes/quadratic_eq/questions/03.md":X5,"./nodes/quadratic_eq/questions/04.md":J5,"./nodes/quadratic_eq/questions/05.md":e6,"./nodes/quadratic_eq/questions/06.md":n6,"./nodes/quadratic_eq/questions/07.md":t6,"./nodes/quadratic_eq/questions/08.md":r6,"./nodes/quadratic_eq/questions/09.md":i6,"./nodes/quadratic_eq/questions/10.md":o6,"./nodes/quadratic_ineq/questions/01.md":s6,"./nodes/quadratic_ineq/questions/02.md":a6,"./nodes/quadratic_ineq/questions/03.md":l6,"./nodes/quadratic_ineq/questions/04.md":u6,"./nodes/quadratic_ineq/questions/05.md":c6,"./nodes/quadratic_ineq/questions/06.md":d6,"./nodes/quadratic_ineq/questions/07.md":m6,"./nodes/quadratic_ineq/questions/08.md":p6,"./nodes/rational_expr/questions/01.md":f6,"./nodes/rational_expr/questions/02.md":h6,"./nodes/rational_expr/questions/03.md":g6,"./nodes/seq_limits/questions/01.md":y6,"./nodes/seq_limits/questions/02.md":v6,"./nodes/seq_limits/questions/03.md":x6,"./nodes/sequences/questions/01.md":$6,"./nodes/sequences/questions/02.md":b6,"./nodes/sequences/questions/03.md":w6,"./nodes/sets/questions/01.md":_6,"./nodes/sets/questions/02.md":k6,"./nodes/sets/questions/03.md":z6,"./nodes/sets/questions/04.md":S6,"./nodes/sets/questions/05.md":j6,"./nodes/sets/questions/06.md":q6,"./nodes/sets/questions/07.md":T6,"./nodes/sets/questions/08.md":A6,"./nodes/sets/questions/09.md":M6,"./nodes/sets/questions/10.md":P6,"./nodes/sin_cos_law/questions/01.md":C6,"./nodes/sin_cos_law/questions/02.md":R6,"./nodes/sin_cos_law/questions/03.md":D6,"./nodes/solid_geom/questions/01.md":E6,"./nodes/solid_geom/questions/02.md":B6,"./nodes/solid_geom/questions/03.md":N6,"./nodes/stat_lp/questions/01.md":I6,"./nodes/stat_lp/questions/02.md":F6,"./nodes/stat_lp/questions/03.md":L6,"./nodes/thales/questions/01.md":O6,"./nodes/thales/questions/02.md":H6,"./nodes/thales/questions/03.md":W6,"./nodes/trig_basic/questions/01.md":G6,"./nodes/trig_basic/questions/02.md":U6,"./nodes/trig_basic/questions/03.md":V6,"./nodes/trig_eq/questions/01.md":K6,"./nodes/trig_eq/questions/02.md":Q6,"./nodes/trig_eq/questions/03.md":Z6,"./nodes/trig_formulas/questions/01.md":Y6,"./nodes/trig_formulas/questions/02.md":X6,"./nodes/trig_formulas/questions/03.md":J6,"./nodes/trig_lp/questions/01.md":eg,"./nodes/trig_lp/questions/02.md":ng,"./nodes/trig_lp/questions/03.md":tg,"./nodes/vectors/questions/01.md":rg,"./nodes/vectors/questions/02.md":ig,"./nodes/vectors/questions/03.md":og,"./nodes/vieta/questions/01.md":sg,"./nodes/vieta/questions/02.md":ag,"./nodes/vieta/questions/03.md":lg,"./nodes/vieta/questions/04.md":ug,"./nodes/vieta/questions/05.md":cg,"./nodes/vieta/questions/06.md":dg,"./nodes/vieta/questions/07.md":mg,"./nodes/vieta/questions/08.md":pg}),wg=Yd(bg,/\.\/nodes\/([^/]+)\/questions\//),_g=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:vg,QUESTION_BANK:wg,RAW_EDGES:fg,RAW_NODES:$g,SCOPE_COLORS:gg,SCOPE_LABELS:yg,SECTIONS:hg},Symbol.toStringTag,{value:"Module"})),kg=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,zg=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,Sg=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,jg=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,qg=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,Tg=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,Ag=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Mg=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Pg=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,Cg=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,Rg=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,Dg=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,Eg=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,Bg=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,Ng=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,Ig=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Fg=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Lg=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Og=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,Hg=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,Wg=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Gg=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Ug=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,Vg=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,Kg=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,Qg=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,Zg=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,Yg=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Xg=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,Jg=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,ey=`---
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
`,ny=`---
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
`,ty=`---
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
`,ry=`---
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
`,iy=`---
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
`,oy=`---
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
`,sy=`---
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
`,ay=`---
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
`,ly=`---
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
`,uy=`---
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

`,cy=`---
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

`,dy=`---
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

`,my=`---
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
`,py=`---
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
`,fy=`---
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
`,hy=`---
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
`,gy=`---
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
`,yy=`---
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
`,vy=`---
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

`,xy=`---
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

`,$y=`---
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

`,by=`---
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

`,wy=`---
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

`,_y=`---
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

`,ky=`---
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
`,zy=`---
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
`,Sy=`---
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
`,jy=`---
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
`,qy=`---
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
`,Ty=`---
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
`,Ay=`---
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
`,My=`---
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
`,Py=`---
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
`,Cy=`---
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
`,Ry=`---
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
`,Dy=`---
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
`,Ey=`---
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
`,By=`---
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
`,Ny=`---
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
`,Iy=`---
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
`,Fy=`---
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
`,Ly=`---
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
`,Oy=`---
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
`,Hy=`---
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
`,Wy=`---
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
`,Gy=`---
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

`,Uy=`---
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

`,Vy=`---
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

`,Ky=`---
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

`,Qy=`---
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

`,Zy=`---
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

`,Yy=`---
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

`,Xy=`---
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

`,Jy=`---
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

`,e7=`---
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
`,n7=`---
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
`,t7=`---
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
`,r7=`---
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
`,i7=`---
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
`,o7=`---
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
`,s7=`---
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

`,a7=`---
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

`,l7=`---
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

`,u7=`---
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

`,c7=`---
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

`,d7=`---
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

`,m7=`---
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
`,p7=`---
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
`,f7=`---
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
`,h7=`---
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
`,g7=`---
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
`,y7=`---
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
`,v7=`---
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
`,x7=`---
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
`,$7=`---
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
`,b7=`---
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
`,w7=`---
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

`,_7=`---
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

`,k7=`---
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
`,z7=`---
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
`,S7=`---
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
`,j7=`---
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

`,q7=`---
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

`,T7=`---
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

`,A7=`---
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
`,M7=`---
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
`,P7=`---
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
`,C7=`---
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

`,R7=`---
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

`,D7=`---
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

`,E7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],B7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},N7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},I7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},F7={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},L7=Object.assign({"./nodes/binary_ops/node.md":kg,"./nodes/cosets/node.md":zg,"./nodes/cyclic_groups/node.md":Sg,"./nodes/direct_sums/node.md":jg,"./nodes/field_extensions/node.md":qg,"./nodes/fields_intro/node.md":Tg,"./nodes/finitely_generated/node.md":Ag,"./nodes/free_modules/node.md":Mg,"./nodes/group_actions/node.md":Pg,"./nodes/group_homomorphisms/node.md":Cg,"./nodes/groups_intro/node.md":Rg,"./nodes/ideals/node.md":Dg,"./nodes/induction/node.md":Eg,"./nodes/integral_domains/node.md":Bg,"./nodes/iso_theorem/node.md":Ng,"./nodes/jordan_normal_form/node.md":Ig,"./nodes/module_homs/node.md":Fg,"./nodes/modules_intro/node.md":Lg,"./nodes/normal_subgroups/node.md":Og,"./nodes/poly_rings/node.md":Hg,"./nodes/primary_decomp/node.md":Wg,"./nodes/rational_canonical/node.md":Gg,"./nodes/relations/node.md":Ug,"./nodes/ring_homomorphisms/node.md":Vg,"./nodes/rings_intro/node.md":Kg,"./nodes/sets_functions/node.md":Qg,"./nodes/subgroups/node.md":Zg,"./nodes/submodules/node.md":Yg,"./nodes/sylow/node.md":Xg,"./nodes/torsion_modules/node.md":Jg}),O7=Zd(L7,/\.\/nodes\/([^/]+)\/node\.md$/),H7=Object.assign({"./nodes/binary_ops/questions/01.md":ey,"./nodes/binary_ops/questions/02.md":ny,"./nodes/binary_ops/questions/03.md":ty,"./nodes/cosets/questions/01.md":ry,"./nodes/cosets/questions/02.md":iy,"./nodes/cosets/questions/03.md":oy,"./nodes/cyclic_groups/questions/01.md":sy,"./nodes/cyclic_groups/questions/02.md":ay,"./nodes/cyclic_groups/questions/03.md":ly,"./nodes/direct_sums/questions/01.md":uy,"./nodes/direct_sums/questions/02.md":cy,"./nodes/direct_sums/questions/03.md":dy,"./nodes/field_extensions/questions/01.md":my,"./nodes/field_extensions/questions/02.md":py,"./nodes/field_extensions/questions/03.md":fy,"./nodes/fields_intro/questions/01.md":hy,"./nodes/fields_intro/questions/02.md":gy,"./nodes/fields_intro/questions/03.md":yy,"./nodes/finitely_generated/questions/01.md":vy,"./nodes/finitely_generated/questions/02.md":xy,"./nodes/finitely_generated/questions/03.md":$y,"./nodes/free_modules/questions/01.md":by,"./nodes/free_modules/questions/02.md":wy,"./nodes/free_modules/questions/03.md":_y,"./nodes/group_actions/questions/01.md":ky,"./nodes/group_actions/questions/02.md":zy,"./nodes/group_actions/questions/03.md":Sy,"./nodes/group_homomorphisms/questions/01.md":jy,"./nodes/group_homomorphisms/questions/02.md":qy,"./nodes/group_homomorphisms/questions/03.md":Ty,"./nodes/groups_intro/questions/01.md":Ay,"./nodes/groups_intro/questions/02.md":My,"./nodes/groups_intro/questions/03.md":Py,"./nodes/ideals/questions/01.md":Cy,"./nodes/ideals/questions/02.md":Ry,"./nodes/ideals/questions/03.md":Dy,"./nodes/induction/questions/01.md":Ey,"./nodes/induction/questions/02.md":By,"./nodes/induction/questions/03.md":Ny,"./nodes/integral_domains/questions/01.md":Iy,"./nodes/integral_domains/questions/02.md":Fy,"./nodes/integral_domains/questions/03.md":Ly,"./nodes/iso_theorem/questions/01.md":Oy,"./nodes/iso_theorem/questions/02.md":Hy,"./nodes/iso_theorem/questions/03.md":Wy,"./nodes/jordan_normal_form/questions/01.md":Gy,"./nodes/jordan_normal_form/questions/02.md":Uy,"./nodes/jordan_normal_form/questions/03.md":Vy,"./nodes/module_homs/questions/01.md":Ky,"./nodes/module_homs/questions/02.md":Qy,"./nodes/module_homs/questions/03.md":Zy,"./nodes/modules_intro/questions/01.md":Yy,"./nodes/modules_intro/questions/02.md":Xy,"./nodes/modules_intro/questions/03.md":Jy,"./nodes/normal_subgroups/questions/01.md":e7,"./nodes/normal_subgroups/questions/02.md":n7,"./nodes/normal_subgroups/questions/03.md":t7,"./nodes/poly_rings/questions/01.md":r7,"./nodes/poly_rings/questions/02.md":i7,"./nodes/poly_rings/questions/03.md":o7,"./nodes/primary_decomp/questions/01.md":s7,"./nodes/primary_decomp/questions/02.md":a7,"./nodes/primary_decomp/questions/03.md":l7,"./nodes/rational_canonical/questions/01.md":u7,"./nodes/rational_canonical/questions/02.md":c7,"./nodes/rational_canonical/questions/03.md":d7,"./nodes/relations/questions/01.md":m7,"./nodes/relations/questions/02.md":p7,"./nodes/relations/questions/03.md":f7,"./nodes/ring_homomorphisms/questions/01.md":h7,"./nodes/ring_homomorphisms/questions/02.md":g7,"./nodes/ring_homomorphisms/questions/03.md":y7,"./nodes/rings_intro/questions/01.md":v7,"./nodes/rings_intro/questions/02.md":x7,"./nodes/rings_intro/questions/03.md":$7,"./nodes/sets_functions/questions/01.md":b7,"./nodes/sets_functions/questions/02.md":w7,"./nodes/sets_functions/questions/03.md":_7,"./nodes/subgroups/questions/01.md":k7,"./nodes/subgroups/questions/02.md":z7,"./nodes/subgroups/questions/03.md":S7,"./nodes/submodules/questions/01.md":j7,"./nodes/submodules/questions/02.md":q7,"./nodes/submodules/questions/03.md":T7,"./nodes/sylow/questions/01.md":A7,"./nodes/sylow/questions/02.md":M7,"./nodes/sylow/questions/03.md":P7,"./nodes/torsion_modules/questions/01.md":C7,"./nodes/torsion_modules/questions/02.md":R7,"./nodes/torsion_modules/questions/03.md":D7}),W7=Yd(H7,/\.\/nodes\/([^/]+)\/questions\//),G7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:F7,QUESTION_BANK:W7,RAW_EDGES:E7,RAW_NODES:O7,SCOPE_COLORS:N7,SCOPE_LABELS:I7,SECTIONS:B7},Symbol.toStringTag,{value:"Module"})),U7={math_pl:_g,abstract_algebra:G7},V7="math_pl",Jd="wizmat_v1_";function K7(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function Q7(o,t){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function ct(o,t){const r=Jd+o,[s,a]=W.useState(()=>{try{const d=localStorage.getItem(r);return d===null?t:Q7(d,t)}catch{return t}});W.useEffect(()=>{try{localStorage.setItem(r,K7(s))}catch{}},[r,s]);const u=W.useCallback(d=>{a(g=>typeof d=="function"?d(g):d)},[]);return[s,u]}function Z7(){try{Object.keys(localStorage).filter(o=>o.startsWith(Jd)).forEach(o=>localStorage.removeItem(o))}catch{}}const Zl={midnight:{name:"Midnight",bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",edgeDefault:"#334766",edgeHighlighted:"#4a9eff",edgeDimmed:"#151b26"},highContrast:{name:"High Contrast",bg:"#08090d",surface:"#111318",surfaceHi:"#111318ee",border:"#2e3a50",borderSubtle:"#1c2436",textPrimary:"#ffffff",textBody:"#dce4ef",textMuted:"#a3b5cc",textDim:"#8899b3",textFaint:"#556a85",edgeDefault:"#3d5577",edgeHighlighted:"#5ab0ff",edgeDimmed:"#0d1118"},warm:{name:"Warm",bg:"#131110",surface:"#1c1916",surfaceHi:"#1c1916ee",border:"#33291f",borderSubtle:"#28211a",textPrimary:"#f2ede6",textBody:"#d4cabb",textMuted:"#a89d8e",textDim:"#8a7e6f",textFaint:"#5c5347",edgeDefault:"#4a3f32",edgeHighlighted:"#e8a84c",edgeDimmed:"#1a1614"}},H={...Zl.midnight,known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",frontierHi:"#f1c40f"};function ed(o){const t=Zl[o];t&&Object.assign(H,t)}const pn="'JetBrains Mono','SF Mono','Fira Code',monospace",Ei=(o,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${t}`:`1px solid ${H.border}`,background:o?`${t}22`:"transparent",color:o?t:H.textDim,minHeight:32}),Ao=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44}),Y7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Znajdź swoje luki w matematyce",en:"Find your gaps in mathematics"},heroSub:{pl:"Odpowiedz na kilkanaście pytań. Pokażemy Ci, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",en:"Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations."},heroStart:{pl:"Sprawdź się",en:"Start assessment"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki ogląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizProcessing:{pl:"Analizuję wyniki…",en:"Analyzing results…"},quizExitConfirm:{pl:"Na pewno chcesz przerwać? Postęp zostanie utracony.",en:"Are you sure you want to quit? Progress will be lost."},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your biggest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicNoResources:{pl:"Brak materiałów do nauki dla tego tematu — wkrótce!",en:"No learning resources for this topic yet — coming soon!"}};function V(o,t="pl"){const r=Y7[o];return r?r[t]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function Yl(o,t){const r={},s={};return o.forEach(a=>{r[a.id]=[],s[a.id]=[]}),t.forEach(([a,u])=>{var d,g;(d=r[u])==null||d.push(a),(g=s[a])==null||g.push(u)}),{prereqs:r,dependents:s}}function Xl(o,t){const r=Object.fromEntries(o.map(d=>[d.id,0])),s=Object.fromEntries(o.map(d=>[d.id,[]]));for(const[d,g]of t)r[g]!==void 0&&r[g]++,s[d]!==void 0&&s[d].push(g);const a=Object.fromEntries(o.map(d=>[d.id,0])),u=o.filter(d=>r[d.id]===0).map(d=>d.id);for(;u.length;){const d=u.shift();for(const g of s[d])a[g]=Math.max(a[g],a[d]+1),--r[g]===0&&u.push(g)}return a}const X7={id:"spectral",label:"Spectral"};function J7(o,t,r,s,a=80){const u=o.length,d=Object.fromEntries(o.map((B,Z)=>[B.id,Z])),g=Array.from({length:u},()=>new Float64Array(u));t.forEach(([B,Z])=>{const X=d[B],me=d[Z];X==null||me==null||(g[X][me]=1,g[me][X]=1)});const f=g.map(B=>B.reduce((Z,X)=>Z+X,0)),v=B=>B.map((Z,X)=>{let me=0;for(let be=0;be<u;be++)me+=g[X][be]*B[be];return f[X]*B[X]-me}),b=(B,Z)=>B.reduce((X,me,be)=>X+me*Z[be],0),_=B=>{const Z=Math.sqrt(b(B,B))||1;return B.map(X=>X/Z)},z=(B,Z)=>{let X=[...B];return Z.forEach(me=>{const be=b(X,me);X=X.map((Y,de)=>Y-be*me[de])}),_(X)},k=(B,Z=400)=>{let X=_(Array.from({length:u},()=>Math.random()-.5));X=z(X,B);for(let me=0;me<Z;me++){const be=Math.max(...f)+1;X=z(X.map((Y,de)=>be*Y-v(X)[de]),B)}return X},M=_(new Array(u).fill(1)),P=k([M]),R=k([M,P]),E=Math.min(...P),F=Math.max(...P),G=Math.min(...R),I=Math.max(...R),L=F-E<1e-6?1:(r-2*a)/(F-E),K=I-G<1e-6?1:(s-2*a)/(I-G);return o.map((B,Z)=>({id:B.id,x:a+(P[Z]-E)*L,y:a+(R[Z]-G)*K,vx:0,vy:0}))}const ev=Object.freeze(Object.defineProperty({__proto__:null,apply:J7,meta:X7},Symbol.toStringTag,{value:"Module"})),nv={id:"topoRank",label:"Topo Rank"},nd=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function tv(o,t,r,s,a=80){const u=Xl(o,t),d=Math.max(...o.map(b=>u[b.id]??0),0),g={};for(const b of o){const _=u[b.id]??0;(g[_]??(g[_]=[])).push(b)}for(const b of Object.values(g))b.sort((_,z)=>{const k=nd.indexOf(_.scope),M=nd.indexOf(z.scope);return(k===-1?999:k)-(M===-1?999:M)});const f=r-2*a,v=s-2*a;return o.map(b=>{const _=u[b.id]??0,z=g[_],k=z.indexOf(b);return{id:b.id,x:a+(k+.5)/z.length*f,y:a+_/Math.max(d,1)*v,vx:0,vy:0}})}const rv=Object.freeze(Object.defineProperty({__proto__:null,apply:tv,meta:nv},Symbol.toStringTag,{value:"Module"})),iv={id:"nPartite",label:"N-Partite Grid"};function ov(o,t,r,s,a=80){const u=Xl(o,t),d=Math.max(...o.map(k=>u[k.id]??0),0),g={};for(const k of o){const M=u[k.id]??0;(g[M]??(g[M]=[])).push(k)}const f={};for(const k of o)f[k.id]=[];for(const[k,M]of t)f[M]&&f[M].push(k);const v=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},_=r-2*a,z=s-2*a;for(let k=0;k<=d;k++){const M=g[k]??[];k===0?M.sort((R,E)=>{const F=v.indexOf(R.scope),G=v.indexOf(E.scope);return(F===-1?999:F)-(G===-1?999:G)}):M.sort((R,E)=>{const F=G=>{const I=f[G.id]??[];return I.length===0?r/2:I.reduce((L,K)=>{var B;return L+(((B=b[K])==null?void 0:B.x)??r/2)},0)/I.length};return F(R)-F(E)});const P=a+k/Math.max(d,1)*z;M.forEach((R,E)=>{const F=M.length===1?r/2:a+E/(M.length-1)*_;b[R.id]={x:F,y:P}})}return o.map(k=>{var M,P;return{id:k.id,x:((M=b[k.id])==null?void 0:M.x)??r/2,y:((P=b[k.id])==null?void 0:P.y)??s/2,vx:0,vy:0}})}const em=Object.freeze(Object.defineProperty({__proto__:null,apply:ov,meta:iv},Symbol.toStringTag,{value:"Module"})),nm=[em,rv,ev],tm="nPartite";function sv(o){return nm.find(t=>t.meta.id===o)??em}const p0=1400,Jl=1e3,Ro=80,av=.4,td=6,lv=.35,rd=.012;function uv(o,t){const r=Xl(o,t),s=Math.max(...o.map(u=>r[u.id]??0),0),a=Object.fromEntries(o.map(u=>[u.id,Ro+(r[u.id]??0)/Math.max(s,1)*(Jl-2*Ro)]));return{ranks:r,rankY:a}}function cv(o,t){const r=Object.fromEntries(o.map((s,a)=>[s.id,a]));return t.map(([s,a])=>[r[s],r[a]]).filter(([s,a])=>s!=null&&a!=null)}function dv(o){return Math.sqrt(p0*Jl/Math.max(o.length,1))*.9}function mv(o,t,r,s){return sv(o).apply(t,r,p0,Jl,Ro).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:s[d.id]??d.y,vx:0,vy:0}))}function pv(o,t,r,s,{ranks:a,rankY:u,simEdges:d,idealK:g}){const f=o.length,v=new Float64Array(f);for(let b=0;b<f;b++)for(let _=b+1;_<f;_++){if(a[o[b].id]!==a[o[_].id])continue;const z=o[b].x-o[_].x,k=Math.abs(z)||.1,M=g*g/(k*k),P=z<0?-1:1;v[b]+=P*M,v[_]-=P*M}for(const[b,_]of d){const z=o[_].x-o[b].x;v[b]+=z*rd,v[_]-=z*rd}for(let b=0;b<f;b++)v[b]+=(p0/2-o[b].x)*.003;return o.map((b,_)=>{if(b.id===t)return{...b,x:r,y:s,vx:0,vy:0};let z=(b.vx+v[_])*av;Math.abs(z)>td&&(z*=td/Math.abs(z));const k=u[b.id]??b.y,M=b.y+(k-b.y)*lv;return{...b,vx:z,vy:0,x:Math.max(Ro,Math.min(p0-Ro,b.x+z)),y:M}})}function xl(o=tm,t=300,r,s){if(!r||r.length===0)return{};const{ranks:a,rankY:u}=uv(r,s??[]),d=cv(r,s??[]),g=dv(r),f={ranks:a,rankY:u,simEdges:d,idealK:g};let v=mv(o,r,s??[],u);for(let b=0;b<t;b++)v=pv(v,null,0,0,f);return Object.fromEntries(v.map(b=>[b.id,{x:b.x,y:b.y}]))}function fv(o){const t=typeof window<"u"&&window.innerWidth<600,[r,s]=W.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[a,u]=W.useState("grab"),d=W.useRef(!1),g=W.useRef({x:0,y:0}),f=W.useRef(null),v=W.useRef(null),b=W.useCallback(I=>{I.preventDefault();const L=I.deltaY>0?.9:1.1;s(K=>{const B=Math.max(.15,Math.min(5,K.scale*L)),Z=I.clientX,X=I.clientY,me=Z-(Z-K.x)/K.scale*B,be=X-(X-K.y)/K.scale*B;return{x:me,y:be,scale:B}})},[]),_=W.useCallback((I,L)=>({x:(I-r.x)/r.scale,y:(L-r.y)/r.scale}),[r]),z=W.useCallback((I,L)=>{d.current=!0,u("grabbing"),g.current={x:I-r.x,y:L-r.y}},[r]),k=W.useCallback(I=>d.current?(s(L=>({...L,x:I.clientX-g.current.x,y:I.clientY-g.current.y})),!0):!1,[]),M=W.useCallback(()=>{d.current=!1,u("grab")},[]),P=(I,L)=>{const K=I.clientX-L.clientX,B=I.clientY-L.clientY;return Math.sqrt(K*K+B*B)},R=(I,L)=>({x:(I.clientX+L.clientX)/2,y:(I.clientY+L.clientY)/2}),E=W.useCallback(I=>{I.touches.length===1?(d.current=!0,s(L=>(g.current={x:I.touches[0].clientX-L.x,y:I.touches[0].clientY-L.y},L)),f.current=null,v.current=null):I.touches.length===2&&(d.current=!1,f.current=P(I.touches[0],I.touches[1]),v.current=R(I.touches[0],I.touches[1]))},[]),F=W.useCallback(I=>{if(I.preventDefault(),I.touches.length===1&&d.current)s(L=>({...L,x:I.touches[0].clientX-g.current.x,y:I.touches[0].clientY-g.current.y}));else if(I.touches.length===2&&f.current!==null){const L=P(I.touches[0],I.touches[1]),K=R(I.touches[0],I.touches[1]),B=L/f.current;s(Z=>{const X=Math.max(.15,Math.min(5,Z.scale*B)),me=v.current.x,be=v.current.y,Y=me-(me-Z.x)/Z.scale*X,de=be-(be-Z.y)/Z.scale*X;return{x:Y,y:de,scale:X}}),f.current=L,v.current=K}},[]),G=W.useCallback(()=>{d.current=!1,f.current=null,v.current=null},[]);return W.useEffect(()=>{const I=o.current;if(I)return I.addEventListener("wheel",b,{passive:!1}),I.addEventListener("touchstart",E,{passive:!1}),I.addEventListener("touchmove",F,{passive:!1}),I.addEventListener("touchend",G,{passive:!1}),()=>{I.removeEventListener("wheel",b),I.removeEventListener("touchstart",E),I.removeEventListener("touchmove",F),I.removeEventListener("touchend",G)}},[o,b,E,F,G]),{viewTransform:r,setViewTransform:s,toCanvas:_,isPanning:d,panStart:g,startPan:z,cursorStyle:a,setCursorStyle:u,handleMouseMove:k,handleMouseUp:M,handleWheel:b}}function hv(o,t,r,s){const a=W.useRef(null),u=W.useRef({x:0,y:0}),d=W.useCallback((v,b,_)=>{const z=o(b,_),k=t.find(M=>M.id===v);k&&(a.current=v,u.current={x:z.x-k.x,y:z.y-k.y},s==null||s("grabbing"))},[o,t,s]),g=W.useCallback((v,b)=>{if(!a.current)return!1;const _=o(v,b),z=a.current;return r(k=>({...k,[z]:{x:_.x-u.current.x,y:_.y-u.current.y}})),!0},[o,r]),f=W.useCallback(()=>{a.current=null,s==null||s("grab")},[s]);return{draggingNode:a,startNodeDrag:d,handleDragMove:g,handleDragEnd:f}}const oi={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function gv(o,t,r){var u;const s={...t},a=[o];for(;a.length;){const d=a.shift();s[d]!=="known"&&(s[d]="known",(u=r.prereqs[d])==null||u.forEach(g=>{s[g]!=="known"&&a.push(g)}))}return s}function rm(o,t,r){var u;const s={...t},a=[o];for(;a.length;){const d=a.shift();s[d]!=="unknown"&&(s[d]="unknown",(u=r.dependents[d])==null||u.forEach(g=>{s[g]!=="unknown"&&a.push(g)}))}return s}function El(o,t,r,s,a){let u={...s};if(t){for(const d of Object.keys(r))u[d]="known";for(const d of Object.keys(r))u=gv(d,u,a)}else{for(const d of Object.keys(r))u[d]="unknown";for(const d of Object.keys(r))u=rm(d,u,a)}return u}function yv(o,t,r){return o.filter(s=>t[s.id]!=="known"&&t[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(a=>t[a]==="known")).map(s=>s.id)}function im(o,t,r,s=.5){var a,u,d;try{const g=1-s,f=o.filter(_=>t[_.id]!=="known"&&t[_.id]!=="unknown");if(f.length===0)return null;const v=f.map(_=>{const z=om(_.id,t,r),k=sm(_.id,t,r),M=s*z+g*k;return{id:_.id,erv:M||0,ancestorsToReveal:z,descendantsToReveal:k}});return v.sort((_,z)=>z.erv-_.erv),((a=v[0])==null?void 0:a.id)||((u=f[0])==null?void 0:u.id)||null}catch(g){return console.error("pickNextQuestion error:",g),((d=o.filter(v=>t[v.id]!=="known"&&t[v.id]!=="unknown")[0])==null?void 0:d.id)||null}}function om(o,t,r){const s=new Set,a=[...r.prereqs[o]??[]];let u=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&u++;const g=r.prereqs[d]??[];for(const f of g)s.has(f)||a.push(f)}return u}function sm(o,t,r){const s=new Set,a=[...r.dependents[o]??[]];let u=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&u++;const g=r.dependents[d]??[];for(const f of g)s.has(f)||a.push(f)}return u}function vv(o,t,r,s=.5){try{const a=o.filter(v=>t[v.id]!=="known"&&t[v.id]!=="unknown");if(a.length===0)return 0;const u=1-s;let d=0;for(const v of a){const b=om(v.id,t,r),_=sm(v.id,t,r),z=s*b+u*_;d+=z||0}if(!d||d===0)return a.length;const g=a.length,f=g*g/d;return isNaN(f)?a.length:Math.ceil(f)}catch(a){return console.error("estimateRemainingQuestions error:",a),null}}function xv(o,t,r){const s={...o};for(const[a,u]of Object.entries(t)){const d=s[a]??{alpha:1,beta:1};s[a]={alpha:d.alpha+(r?u:0),beta:d.beta+(r?0:u)}}return s}function $v(o,t){const r={};for(const s of o){const a=t[s]??{alpha:1,beta:1},u=a.alpha+a.beta,d=a.alpha/u;d>oi.deepKnownThreshold&&u>oi.deepMinStrength?r[s]="known":d<oi.deepUnknownThreshold&&u>oi.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function bv(o,t,r){const s=new Set,a=new Set(r.map(d=>d.id)),u=[o];for(;u.length;){const d=u.shift();if(!s.has(d)&&a.has(d)){s.add(d);for(const g of t.prereqs[d]??[])s.has(g)||u.push(g)}}return s}function wv(o,t,r,s,a){var g;const u=o.filter(f=>r[f]==="uncertain");if(u.length===0)return null;const d=u.map(f=>{const v=t[f]??{alpha:1,beta:1},b=v.alpha+v.beta,_=v.alpha/b,z=1-_,k=new Set(o);let M=0;const P=[...s.prereqs[f]??[]],R=new Set;for(;P.length;){const L=P.shift();if(!R.has(L)){R.add(L),k.has(L)&&r[L]==="uncertain"&&M++;for(const K of s.prereqs[L]??[])R.has(K)||P.push(K)}}let E=0;const F=[...s.dependents[f]??[]],G=new Set;for(;F.length;){const L=F.shift();if(!G.has(L)){G.add(L),k.has(L)&&r[L]==="uncertain"&&E++;for(const K of s.dependents[L]??[])G.has(K)||F.push(K)}}const I=_*M+z*E;return{id:f,erv:I,strength:b}});return d.sort((f,v)=>Math.abs(f.erv-v.erv)>.01?v.erv-f.erv:f.strength-v.strength),((g=d[0])==null?void 0:g.id)??u[0]}function _v(o,t,r=0){return!!(o.every(s=>t[s]!=="uncertain")||r>=oi.deepMaxQuestions)}function am(o,t,r=0,s){const a=(s==null?void 0:s.maxQuestions)??oi.quickMaxQuestions,u=(s==null?void 0:s.completionRatio)??oi.quickCompletionRatio,d=o.length;if(d===0)return!0;const g=o.filter(f=>t[f.id]!=="known"&&t[f.id]!=="unknown").length;return g===0||r>=a||g/d<=u}const Bl={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function kv(o,t,r){const s=r?`${r}_`:"",[a,u]=ct(`${s}diagMode`,!1),[d,g]=ct(`${s}diagSubMode`,"quick"),[f,v]=ct(`${s}belief`,{}),[b,_]=ct(`${s}targetNode`,null),[z,k]=ct(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[M,P]=ct(`${s}answeredQuestions`,new Set),[R,E]=ct(`${s}betaBeliefs`,{}),[F,G]=ct(`${s}quizNode`,null),I=W.useMemo(()=>{const A=z.correct+z.incorrect;return A===0?.5:(z.correct+.5)/(A+1)},[z]),L=z.questionsAnswered,K=W.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(t)])].map(Q=>({id:Q})),[o,t]),B=W.useMemo(()=>Object.keys(f).length>0||z.questionsAnswered>0,[f,z]),Z=W.useMemo(()=>B?yv(K,f,o):[],[B,f,o,K]),X=B?Z:[],me=W.useMemo(()=>a&&d==="quick"?im(K,f,o,I):null,[a,d,f,o,I,K]),be=W.useMemo(()=>a&&d==="quick"?vv(K,f,o,I):null,[a,d,f,o,I,K]),Y=W.useMemo(()=>a&&d==="quick"&&B&&am(K,f,L),[a,d,B,f,K,L]),de=W.useMemo(()=>!a||d!=="deepdive"||!b?[]:[...bv(b,o,K)],[a,d,b,o,K]),ke=W.useMemo(()=>d!=="deepdive"?{}:$v(de,R),[d,de,R]),Pe=W.useMemo(()=>!a||d!=="deepdive"||de.length===0?null:wv(de,R,ke,o),[a,d,de,R,ke,o,K]),Ge=W.useMemo(()=>!a||d!=="deepdive"||de.length===0?!1:_v(de,ke,L),[a,d,de,ke,L]),Re=W.useCallback((A,Q)=>a?d==="deepdive"?de.includes(A)?(ke[A]!=="uncertain"||G(A),!0):!1:f[A]==="unknown"?!0:Q?(v($e=>rm(A,$e,o)),G(null),!0):f[A]==="known"?(v($e=>{const Se={...$e};return delete Se[A],Se}),G(null),!0):(G(A),!0):!1,[a,d,f,o,de,ke]),le=W.useCallback((A,Q,$e,Se)=>{if(d==="deepdive"){const ze=($e==null?void 0:$e.tests)??{[A]:1};E(Ee=>xv(Ee,ze,Q))}else{const ze=($e==null?void 0:$e.tests)??{[A]:1};v(Ee=>El(A,Q,ze,Ee,o))}typeof Se=="number"&&P(ze=>new Set([...ze,`${A}:${Se}`])),k(ze=>({correct:ze.correct+(Q?1:0),incorrect:ze.incorrect+(Q?0:1),questionsAnswered:ze.questionsAnswered+1})),G(null)},[d,o]),we=W.useCallback(()=>{Z7(),u(!1),g("quick"),v({}),E({}),G(null),_(null),k({correct:0,incorrect:0,questionsAnswered:0}),P(new Set)},[]),ue=W.useCallback(A=>{g("deepdive"),_(A),E({}),v({}),G(null),k({correct:0,incorrect:0,questionsAnswered:0}),P(new Set),u(!0)},[]);return{diagMode:a,setDiagMode:u,mode:d,setMode:g,quizNode:F,setQuizNode:G,questionsAnswered:L,answeredQuestions:M,setAnsweredQuestions:P,getAnsweredIndices:A=>{const Q=[];return M.forEach($e=>{const[Se,ze]=$e.split(":");Se===A&&Q.push(parseInt(ze,10))}),Q},handleDiagClick:Re,handleQuizAnswer:le,resetDiagnostic:we,startDeepDive:ue,targetNode:b,belief:f,setBelief:v,frontier:Z,visibleFrontier:X,hasStarted:B,nextSuggestedId:me,expectedRemaining:be,pCorrect:I,sessionComplete:Y,betaBeliefs:R,subgraphIds:de,ddClassification:ke,ddNextNodeId:Pe,ddComplete:Ge}}const id=640;function zv(){const[o,t]=W.useState(()=>typeof window<"u"&&window.innerWidth<id);return W.useEffect(()=>{const r=window.matchMedia(`(max-width: ${id-1}px)`),s=a=>t(a.matches);return r.addEventListener("change",s),t(r.matches),()=>r.removeEventListener("change",s)},[]),o}const Sv=new Set(["pl","en"]);function od(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let s="pl",a=r;if(r.length>0&&Sv.has(r[0])&&(s=r[0],a=r.slice(1)),a[0]==="node"&&a[1]){const u=decodeURIComponent(a[1]);return a[2]==="resource"&&a[3]!=null?{view:"resource",nodeId:u,resourceIndex:parseInt(a[3],10),lang:s}:{view:"node",nodeId:u,lang:s}}if(a[0]==="diagnostic"){if(a[1]==="deepdive"&&a[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(a[2]),lang:s};if(a[1]==="quick")return{view:"diagnostic",mode:"quick",lang:s}}return{view:"graph",lang:s}}function jv(o){const t=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${t}`;switch(o.view){case"node":return`#/${t}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function qv(o){const t=W.useRef(o);t.current=o;const r=W.useRef(!1),s=W.useCallback(a=>{const u=jv(a);window.location.hash!==u&&(r.current=!0,window.location.hash=u)},[]);return W.useEffect(()=>{const a=()=>{if(r.current){r.current=!1;return}t.current(od(window.location.hash))};window.addEventListener("hashchange",a);const u=od(window.location.hash);return Promise.resolve().then(()=>t.current(u)),()=>window.removeEventListener("hashchange",a)},[]),{setRoute:s}}function sd(o){return 6+o.level*2}function Tv({edges:o,nodes:t,highlightedIds:r}){const s=W.useMemo(()=>Object.fromEntries(t.map(a=>[a.id,a])),[t]);return y.jsx("g",{children:o.map(([a,u])=>{const d=s[a],g=s[u];if(!d||!g)return null;const f=(r==null?void 0:r.has(a))&&(r==null?void 0:r.has(u)),v=r&&!f,b=g.x-d.x,_=g.y-d.y,z=Math.sqrt(b*b+_*_)||1,k=sd(g)+3,M=g.x-b/z*k,P=g.y-_/z*k,R=sd(d)+2,E=d.x+b/z*R,F=d.y+_/z*R,G=v?"#151b26":f?"#4a9eff":"#334766",I=f?1.8:1,L=v?.15:f?1:.55,K=v?"url(#arrow-dim)":f?"url(#arrow-hi)":"url(#arrow-default)";return y.jsx("line",{x1:E,y1:F,x2:M,y2:P,stroke:G,strokeWidth:I,opacity:L,markerEnd:K},`${a}-${u}`)})})}function Av(o){return 6+o.level*2}function Mv(o){return o<.4?8:o<.65?13:o<1?18:28}function Pv({nodes:o,filteredIds:t,highlightedIds:r,selected:s,onSelect:a,onHover:u,lang:d,diagMode:g,belief:f,frontier:v,scale:b,scopeColors:_}){const z=f&&Object.keys(f).length>0;return y.jsx("g",{children:o.map(k=>{const M=Av(k),P=(_==null?void 0:_[k.scope])||"#4a9eff",R=t&&!t.has(k.id),E=r==null?void 0:r.has(k.id),F=s===k.id,G=r&&!E||R,I=d==="pl"?k.labelPl:k.label,L=Mv(b??1);let K=P,B=G?.15:.9,Z=G?.2:.85,X=null,me=2;if(z){const be=f[k.id],Y=v==null?void 0:v.includes(k.id);be==="known"?(K="#27ae60",X="#2ecc71",B=R?.1:.85,Z=R?.15:.9):be==="unknown"?(K="#c0392b",B=R?.1:.45,X="#e74c3c",Z=R?.15:.7):Y?(K="#f39c12",X="#f1c40f",me=3,B=R?.1:.9,Z=R?.15:.9):(B=R?.1:g?.35:.5,Z=R?.15:.7)}return y.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>a(k.id===s?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(F||X)&&y.jsx("circle",{cx:k.x,cy:k.y,r:M+(F?5:4),fill:"none",stroke:F?P:X,strokeWidth:F?2:me,opacity:F?.5:.9}),y.jsx("circle",{cx:k.x,cy:k.y,r:M,fill:K,fillOpacity:B,stroke:(E||F)&&!z?P:"none",strokeWidth:1.5}),y.jsx("text",{x:k.x,y:k.y+M+10,textAnchor:"middle",fontSize:8,fill:"#cdd8e4",opacity:Z,style:{pointerEvents:"none",userSelect:"none"},children:I.length>L?I.slice(0,L-1)+"…":I})]},k.id)})})}function Cv({resource:o,lang:t,onClose:r}){const s=W.useRef(null);if(W.useEffect(()=>{const _=z=>{z.key==="Escape"&&r()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[r]),W.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const a=t==="pl"?o.titlePl:o.titleEn,u=o.type==="interactive",d={interactive:V("resourceInteractive",t),video:V("resourceVideo",t),article:V("resourceArticle",t)}[o.type]??o.type,g={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!u)return window.open(o.url,"_blank","noopener"),r(),null;const v=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,b=v+(v.includes("?")?"&":"?")+"lang="+t;return y.jsxs("div",{ref:s,onClick:_=>{_.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[y.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),y.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${g}33`,boxShadow:`0 0 48px ${g}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#161c28f8",borderBottom:`1px solid ${g}22`,flexShrink:0,fontFamily:pn},children:[y.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:g,background:`${g}18`,border:`1px solid ${g}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),y.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:H.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),y.jsx("button",{onClick:()=>window.open(b,"_blank","noopener"),title:V("openInTab",t),style:ad,children:"↗"}),y.jsx("button",{onClick:r,title:V("closeResource",t),style:{...ad,fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("iframe",{src:b,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:a,loading:"eager"})]})]})}const ad={background:"none",border:`1px solid ${H.border}`,borderRadius:5,color:H.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:pn,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};class Kn{constructor(t,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=s}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Kn(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class nt{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new nt(r,Kn.range(this,t))}}class oe{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+t,a,u,d=r&&r.loc;if(d&&d.start<=d.end){var g=d.lexer.input;a=d.start,u=d.end,a===g.length?s+=" at end of input: ":s+=" at position "+(a+1)+": ";var f=g.slice(a,u).replace(/[^]/g,"$&̲"),v;a>15?v="…"+g.slice(a-15,a):v=g.slice(0,a);var b;u+15<g.length?b=g.slice(u,u+15)+"…":b=g.slice(u),s+=v+f+b}var _=new Error(s);return _.name="ParseError",_.__proto__=oe.prototype,_.position=a,a!=null&&u!=null&&(_.length=u-a),_.rawMessage=t,_}}oe.prototype.__proto__=Error.prototype;var Rv=/([A-Z])/g,eu=o=>o.replace(Rv,"-$1").toLowerCase(),Dv={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Ev=/[&><"']/g,Pn=o=>String(o).replace(Ev,t=>Dv[t]),Po=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Po(o.body[0]):o:o.type==="font"?Po(o.body):o,Bv=new Set(["mathord","textord","atom"]),er=o=>Bv.has(Po(o).type),Nv=o=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},d0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,t)=>(t.push(o),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Iv(o){if(o.default)return o.default;var t=o.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class nu{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in d0)if(d0.hasOwnProperty(r)){var s=d0[r];this[r]=t[r]!==void 0?s.processor?s.processor(t[r]):t[r]:Iv(s)}}reportNonstrict(t,r,s){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,s)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new oe("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),s);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,s){var a=this.strict;if(typeof a=="function")try{a=a(t,r,s)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=Nv(t.url);if(r==null)return!1;t.protocol=r}var s=typeof this.trust=="function"?this.trust(t):this.trust;return!!s}}class qr{constructor(t,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=s}sup(){return Mt[Fv[this.id]]}sub(){return Mt[Lv[this.id]]}fracNum(){return Mt[Ov[this.id]]}fracDen(){return Mt[Hv[this.id]]}cramp(){return Mt[Wv[this.id]]}text(){return Mt[Gv[this.id]]}isTight(){return this.size>=2}}var tu=0,f0=1,Ni=2,Xt=3,Do=4,dt=5,Ii=6,Nn=7,Mt=[new qr(tu,0,!1),new qr(f0,0,!0),new qr(Ni,1,!1),new qr(Xt,1,!0),new qr(Do,2,!1),new qr(dt,2,!0),new qr(Ii,3,!1),new qr(Nn,3,!0)],Fv=[Do,dt,Do,dt,Ii,Nn,Ii,Nn],Lv=[dt,dt,dt,dt,Nn,Nn,Nn,Nn],Ov=[Ni,Xt,Do,dt,Ii,Nn,Ii,Nn],Hv=[Xt,Xt,dt,dt,Nn,Nn,Nn,Nn],Wv=[f0,f0,Xt,Xt,dt,dt,Nn,Nn],Gv=[tu,f0,Ni,Xt,Ni,Xt,Ni,Xt],De={DISPLAY:Mt[tu],TEXT:Mt[Ni],SCRIPT:Mt[Do],SCRIPTSCRIPT:Mt[Ii]},Nl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Uv(o){for(var t=0;t<Nl.length;t++)for(var r=Nl[t],s=0;s<r.blocks.length;s++){var a=r.blocks[s];if(o>=a[0]&&o<=a[1])return r.name}return null}var m0=[];Nl.forEach(o=>o.blocks.forEach(t=>m0.push(...t)));function lm(o){for(var t=0;t<m0.length;t+=2)if(o>=m0[t]&&o<=m0[t+1])return!0;return!1}var Bi=80,Vv=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Kv=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Qv=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Zv=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},Yv=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},Xv=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},Jv=function(t,r,s){var a=s-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},e8=function(t,r,s){r=1e3*r;var a="";switch(t){case"sqrtMain":a=Vv(r,Bi);break;case"sqrtSize1":a=Kv(r,Bi);break;case"sqrtSize2":a=Qv(r,Bi);break;case"sqrtSize3":a=Zv(r,Bi);break;case"sqrtSize4":a=Yv(r,Bi);break;case"sqrtTall":a=Jv(r,Bi,s)}return a},n8=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},ld={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},t8=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class No{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Pt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},n0={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},ud={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function r8(o,t){Pt[o]=t}function ru(o,t,r){if(!Pt[t])throw new Error("Font metrics not found for font: "+t+".");var s=o.charCodeAt(0),a=Pt[t][s];if(!a&&o[0]in ud&&(s=ud[o[0]].charCodeAt(0),a=Pt[t][s]),!a&&r==="text"&&lm(s)&&(a=Pt[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var $l={};function i8(o){var t;if(o>=5?t=0:o>=3?t=1:t=2,!$l[t]){var r=$l[t]={cssEmPerMu:n0.quad[t]/18};for(var s in n0)n0.hasOwnProperty(s)&&(r[s]=n0[s][t])}return $l[t]}var o8=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],cd=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],dd=function(t,r){return r.size<2?t:o8[t-1][r.size-1]};class Yt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Yt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=cd[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in t)t.hasOwnProperty(s)&&(r[s]=t[s]);return new Yt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:dd(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:cd[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=dd(Yt.BASESIZE,t);return this.size===r&&this.textSize===Yt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Yt.BASESIZE?["sizing","reset-size"+this.size,"size"+Yt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=i8(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Yt.BASESIZE=6;var Il={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},s8={ex:!0,em:!0,mu:!0},um=function(t){return typeof t!="string"&&(t=t.unit),t in Il||t in s8||t==="ex"},un=function(t,r){var s;if(t.unit in Il)s=Il[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")s=a.fontMetrics().xHeight;else if(t.unit==="em")s=a.fontMetrics().quad;else throw new oe("Invalid unit: '"+t.unit+"'");a!==r&&(s*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*s,r.maxSize)},ce=function(t){return+t.toFixed(4)+"em"},Mr=function(t){return t.filter(r=>r).join(" ")},cm=function(t,r,s){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},dm=function(t){var r=document.createElement(t);r.className=Mr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},a8=/[\s"'>/=\x00-\x1f]/,mm=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Pn(Mr(this.classes))+'"');var s="";for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=eu(a)+":"+this.style[a]+";");s&&(r+=' style="'+Pn(s)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(a8.test(u))throw new oe("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Pn(this.attributes[u])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+t+">",r};class Io{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,cm.call(this,t,s,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return dm.call(this,"span")}toMarkup(){return mm.call(this,"span")}}class iu{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,cm.call(this,r,a),this.children=s||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return dm.call(this,"a")}toMarkup(){return mm.call(this,"a")}}class l8{constructor(t,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=s}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+Pn(this.src)+'"'+(' alt="'+Pn(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=eu(s)+":"+this.style[s]+";");return r&&(t+=' style="'+Pn(r)+'"'),t+="'/>",t}}var u8={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class mt{constructor(t,r,s,a,u,d,g,f){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=s||0,this.italic=a||0,this.skew=u||0,this.width=d||0,this.classes=g||[],this.style=f||{},this.maxFontSize=0;var v=Uv(this.text.charCodeAt(0));v&&this.classes.push(v+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=u8[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=ce(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Mr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Pn(Mr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=eu(a)+":"+this.style[a]+";");s&&(t=!0,r+=' style="'+Pn(s)+'"');var u=Pn(this.text);return t?(r+=">",r+=u,r+="</span>",r):u}}class Jt{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Pn(this.attributes[r])+'"');t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</svg>",t}}class Pr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",ld[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Pn(this.alternate)+'"/>':'<path d="'+Pn(ld[this.pathName])+'"/>'}}class Fl{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Pn(this.attributes[r])+'"');return t+="/>",t}}function md(o){if(o instanceof mt)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function c8(o){if(o instanceof Io)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var d8={bin:1,close:1,inner:1,open:1,punct:1,rel:1},m8={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Je={math:{},text:{}};function m(o,t,r,s,a,u){Je[o][a]={font:t,group:r,replace:s},u&&s&&(Je[o][s]=Je[o][a])}var h="math",ne="text",x="main",j="ams",rn="accent-token",he="bin",In="close",Oi="inner",Ae="mathord",vn="op-token",tt="open",x0="punct",q="rel",nr="spacing",C="textord";m(h,x,q,"≡","\\equiv",!0);m(h,x,q,"≺","\\prec",!0);m(h,x,q,"≻","\\succ",!0);m(h,x,q,"∼","\\sim",!0);m(h,x,q,"⊥","\\perp");m(h,x,q,"⪯","\\preceq",!0);m(h,x,q,"⪰","\\succeq",!0);m(h,x,q,"≃","\\simeq",!0);m(h,x,q,"∣","\\mid",!0);m(h,x,q,"≪","\\ll",!0);m(h,x,q,"≫","\\gg",!0);m(h,x,q,"≍","\\asymp",!0);m(h,x,q,"∥","\\parallel");m(h,x,q,"⋈","\\bowtie",!0);m(h,x,q,"⌣","\\smile",!0);m(h,x,q,"⊑","\\sqsubseteq",!0);m(h,x,q,"⊒","\\sqsupseteq",!0);m(h,x,q,"≐","\\doteq",!0);m(h,x,q,"⌢","\\frown",!0);m(h,x,q,"∋","\\ni",!0);m(h,x,q,"∝","\\propto",!0);m(h,x,q,"⊢","\\vdash",!0);m(h,x,q,"⊣","\\dashv",!0);m(h,x,q,"∋","\\owns");m(h,x,x0,".","\\ldotp");m(h,x,x0,"⋅","\\cdotp");m(h,x,C,"#","\\#");m(ne,x,C,"#","\\#");m(h,x,C,"&","\\&");m(ne,x,C,"&","\\&");m(h,x,C,"ℵ","\\aleph",!0);m(h,x,C,"∀","\\forall",!0);m(h,x,C,"ℏ","\\hbar",!0);m(h,x,C,"∃","\\exists",!0);m(h,x,C,"∇","\\nabla",!0);m(h,x,C,"♭","\\flat",!0);m(h,x,C,"ℓ","\\ell",!0);m(h,x,C,"♮","\\natural",!0);m(h,x,C,"♣","\\clubsuit",!0);m(h,x,C,"℘","\\wp",!0);m(h,x,C,"♯","\\sharp",!0);m(h,x,C,"♢","\\diamondsuit",!0);m(h,x,C,"ℜ","\\Re",!0);m(h,x,C,"♡","\\heartsuit",!0);m(h,x,C,"ℑ","\\Im",!0);m(h,x,C,"♠","\\spadesuit",!0);m(h,x,C,"§","\\S",!0);m(ne,x,C,"§","\\S");m(h,x,C,"¶","\\P",!0);m(ne,x,C,"¶","\\P");m(h,x,C,"†","\\dag");m(ne,x,C,"†","\\dag");m(ne,x,C,"†","\\textdagger");m(h,x,C,"‡","\\ddag");m(ne,x,C,"‡","\\ddag");m(ne,x,C,"‡","\\textdaggerdbl");m(h,x,In,"⎱","\\rmoustache",!0);m(h,x,tt,"⎰","\\lmoustache",!0);m(h,x,In,"⟯","\\rgroup",!0);m(h,x,tt,"⟮","\\lgroup",!0);m(h,x,he,"∓","\\mp",!0);m(h,x,he,"⊖","\\ominus",!0);m(h,x,he,"⊎","\\uplus",!0);m(h,x,he,"⊓","\\sqcap",!0);m(h,x,he,"∗","\\ast");m(h,x,he,"⊔","\\sqcup",!0);m(h,x,he,"◯","\\bigcirc",!0);m(h,x,he,"∙","\\bullet",!0);m(h,x,he,"‡","\\ddagger");m(h,x,he,"≀","\\wr",!0);m(h,x,he,"⨿","\\amalg");m(h,x,he,"&","\\And");m(h,x,q,"⟵","\\longleftarrow",!0);m(h,x,q,"⇐","\\Leftarrow",!0);m(h,x,q,"⟸","\\Longleftarrow",!0);m(h,x,q,"⟶","\\longrightarrow",!0);m(h,x,q,"⇒","\\Rightarrow",!0);m(h,x,q,"⟹","\\Longrightarrow",!0);m(h,x,q,"↔","\\leftrightarrow",!0);m(h,x,q,"⟷","\\longleftrightarrow",!0);m(h,x,q,"⇔","\\Leftrightarrow",!0);m(h,x,q,"⟺","\\Longleftrightarrow",!0);m(h,x,q,"↦","\\mapsto",!0);m(h,x,q,"⟼","\\longmapsto",!0);m(h,x,q,"↗","\\nearrow",!0);m(h,x,q,"↩","\\hookleftarrow",!0);m(h,x,q,"↪","\\hookrightarrow",!0);m(h,x,q,"↘","\\searrow",!0);m(h,x,q,"↼","\\leftharpoonup",!0);m(h,x,q,"⇀","\\rightharpoonup",!0);m(h,x,q,"↙","\\swarrow",!0);m(h,x,q,"↽","\\leftharpoondown",!0);m(h,x,q,"⇁","\\rightharpoondown",!0);m(h,x,q,"↖","\\nwarrow",!0);m(h,x,q,"⇌","\\rightleftharpoons",!0);m(h,j,q,"≮","\\nless",!0);m(h,j,q,"","\\@nleqslant");m(h,j,q,"","\\@nleqq");m(h,j,q,"⪇","\\lneq",!0);m(h,j,q,"≨","\\lneqq",!0);m(h,j,q,"","\\@lvertneqq");m(h,j,q,"⋦","\\lnsim",!0);m(h,j,q,"⪉","\\lnapprox",!0);m(h,j,q,"⊀","\\nprec",!0);m(h,j,q,"⋠","\\npreceq",!0);m(h,j,q,"⋨","\\precnsim",!0);m(h,j,q,"⪹","\\precnapprox",!0);m(h,j,q,"≁","\\nsim",!0);m(h,j,q,"","\\@nshortmid");m(h,j,q,"∤","\\nmid",!0);m(h,j,q,"⊬","\\nvdash",!0);m(h,j,q,"⊭","\\nvDash",!0);m(h,j,q,"⋪","\\ntriangleleft");m(h,j,q,"⋬","\\ntrianglelefteq",!0);m(h,j,q,"⊊","\\subsetneq",!0);m(h,j,q,"","\\@varsubsetneq");m(h,j,q,"⫋","\\subsetneqq",!0);m(h,j,q,"","\\@varsubsetneqq");m(h,j,q,"≯","\\ngtr",!0);m(h,j,q,"","\\@ngeqslant");m(h,j,q,"","\\@ngeqq");m(h,j,q,"⪈","\\gneq",!0);m(h,j,q,"≩","\\gneqq",!0);m(h,j,q,"","\\@gvertneqq");m(h,j,q,"⋧","\\gnsim",!0);m(h,j,q,"⪊","\\gnapprox",!0);m(h,j,q,"⊁","\\nsucc",!0);m(h,j,q,"⋡","\\nsucceq",!0);m(h,j,q,"⋩","\\succnsim",!0);m(h,j,q,"⪺","\\succnapprox",!0);m(h,j,q,"≆","\\ncong",!0);m(h,j,q,"","\\@nshortparallel");m(h,j,q,"∦","\\nparallel",!0);m(h,j,q,"⊯","\\nVDash",!0);m(h,j,q,"⋫","\\ntriangleright");m(h,j,q,"⋭","\\ntrianglerighteq",!0);m(h,j,q,"","\\@nsupseteqq");m(h,j,q,"⊋","\\supsetneq",!0);m(h,j,q,"","\\@varsupsetneq");m(h,j,q,"⫌","\\supsetneqq",!0);m(h,j,q,"","\\@varsupsetneqq");m(h,j,q,"⊮","\\nVdash",!0);m(h,j,q,"⪵","\\precneqq",!0);m(h,j,q,"⪶","\\succneqq",!0);m(h,j,q,"","\\@nsubseteqq");m(h,j,he,"⊴","\\unlhd");m(h,j,he,"⊵","\\unrhd");m(h,j,q,"↚","\\nleftarrow",!0);m(h,j,q,"↛","\\nrightarrow",!0);m(h,j,q,"⇍","\\nLeftarrow",!0);m(h,j,q,"⇏","\\nRightarrow",!0);m(h,j,q,"↮","\\nleftrightarrow",!0);m(h,j,q,"⇎","\\nLeftrightarrow",!0);m(h,j,q,"△","\\vartriangle");m(h,j,C,"ℏ","\\hslash");m(h,j,C,"▽","\\triangledown");m(h,j,C,"◊","\\lozenge");m(h,j,C,"Ⓢ","\\circledS");m(h,j,C,"®","\\circledR");m(ne,j,C,"®","\\circledR");m(h,j,C,"∡","\\measuredangle",!0);m(h,j,C,"∄","\\nexists");m(h,j,C,"℧","\\mho");m(h,j,C,"Ⅎ","\\Finv",!0);m(h,j,C,"⅁","\\Game",!0);m(h,j,C,"‵","\\backprime");m(h,j,C,"▲","\\blacktriangle");m(h,j,C,"▼","\\blacktriangledown");m(h,j,C,"■","\\blacksquare");m(h,j,C,"⧫","\\blacklozenge");m(h,j,C,"★","\\bigstar");m(h,j,C,"∢","\\sphericalangle",!0);m(h,j,C,"∁","\\complement",!0);m(h,j,C,"ð","\\eth",!0);m(ne,x,C,"ð","ð");m(h,j,C,"╱","\\diagup");m(h,j,C,"╲","\\diagdown");m(h,j,C,"□","\\square");m(h,j,C,"□","\\Box");m(h,j,C,"◊","\\Diamond");m(h,j,C,"¥","\\yen",!0);m(ne,j,C,"¥","\\yen",!0);m(h,j,C,"✓","\\checkmark",!0);m(ne,j,C,"✓","\\checkmark");m(h,j,C,"ℶ","\\beth",!0);m(h,j,C,"ℸ","\\daleth",!0);m(h,j,C,"ℷ","\\gimel",!0);m(h,j,C,"ϝ","\\digamma",!0);m(h,j,C,"ϰ","\\varkappa");m(h,j,tt,"┌","\\@ulcorner",!0);m(h,j,In,"┐","\\@urcorner",!0);m(h,j,tt,"└","\\@llcorner",!0);m(h,j,In,"┘","\\@lrcorner",!0);m(h,j,q,"≦","\\leqq",!0);m(h,j,q,"⩽","\\leqslant",!0);m(h,j,q,"⪕","\\eqslantless",!0);m(h,j,q,"≲","\\lesssim",!0);m(h,j,q,"⪅","\\lessapprox",!0);m(h,j,q,"≊","\\approxeq",!0);m(h,j,he,"⋖","\\lessdot");m(h,j,q,"⋘","\\lll",!0);m(h,j,q,"≶","\\lessgtr",!0);m(h,j,q,"⋚","\\lesseqgtr",!0);m(h,j,q,"⪋","\\lesseqqgtr",!0);m(h,j,q,"≑","\\doteqdot");m(h,j,q,"≓","\\risingdotseq",!0);m(h,j,q,"≒","\\fallingdotseq",!0);m(h,j,q,"∽","\\backsim",!0);m(h,j,q,"⋍","\\backsimeq",!0);m(h,j,q,"⫅","\\subseteqq",!0);m(h,j,q,"⋐","\\Subset",!0);m(h,j,q,"⊏","\\sqsubset",!0);m(h,j,q,"≼","\\preccurlyeq",!0);m(h,j,q,"⋞","\\curlyeqprec",!0);m(h,j,q,"≾","\\precsim",!0);m(h,j,q,"⪷","\\precapprox",!0);m(h,j,q,"⊲","\\vartriangleleft");m(h,j,q,"⊴","\\trianglelefteq");m(h,j,q,"⊨","\\vDash",!0);m(h,j,q,"⊪","\\Vvdash",!0);m(h,j,q,"⌣","\\smallsmile");m(h,j,q,"⌢","\\smallfrown");m(h,j,q,"≏","\\bumpeq",!0);m(h,j,q,"≎","\\Bumpeq",!0);m(h,j,q,"≧","\\geqq",!0);m(h,j,q,"⩾","\\geqslant",!0);m(h,j,q,"⪖","\\eqslantgtr",!0);m(h,j,q,"≳","\\gtrsim",!0);m(h,j,q,"⪆","\\gtrapprox",!0);m(h,j,he,"⋗","\\gtrdot");m(h,j,q,"⋙","\\ggg",!0);m(h,j,q,"≷","\\gtrless",!0);m(h,j,q,"⋛","\\gtreqless",!0);m(h,j,q,"⪌","\\gtreqqless",!0);m(h,j,q,"≖","\\eqcirc",!0);m(h,j,q,"≗","\\circeq",!0);m(h,j,q,"≜","\\triangleq",!0);m(h,j,q,"∼","\\thicksim");m(h,j,q,"≈","\\thickapprox");m(h,j,q,"⫆","\\supseteqq",!0);m(h,j,q,"⋑","\\Supset",!0);m(h,j,q,"⊐","\\sqsupset",!0);m(h,j,q,"≽","\\succcurlyeq",!0);m(h,j,q,"⋟","\\curlyeqsucc",!0);m(h,j,q,"≿","\\succsim",!0);m(h,j,q,"⪸","\\succapprox",!0);m(h,j,q,"⊳","\\vartriangleright");m(h,j,q,"⊵","\\trianglerighteq");m(h,j,q,"⊩","\\Vdash",!0);m(h,j,q,"∣","\\shortmid");m(h,j,q,"∥","\\shortparallel");m(h,j,q,"≬","\\between",!0);m(h,j,q,"⋔","\\pitchfork",!0);m(h,j,q,"∝","\\varpropto");m(h,j,q,"◀","\\blacktriangleleft");m(h,j,q,"∴","\\therefore",!0);m(h,j,q,"∍","\\backepsilon");m(h,j,q,"▶","\\blacktriangleright");m(h,j,q,"∵","\\because",!0);m(h,j,q,"⋘","\\llless");m(h,j,q,"⋙","\\gggtr");m(h,j,he,"⊲","\\lhd");m(h,j,he,"⊳","\\rhd");m(h,j,q,"≂","\\eqsim",!0);m(h,x,q,"⋈","\\Join");m(h,j,q,"≑","\\Doteq",!0);m(h,j,he,"∔","\\dotplus",!0);m(h,j,he,"∖","\\smallsetminus");m(h,j,he,"⋒","\\Cap",!0);m(h,j,he,"⋓","\\Cup",!0);m(h,j,he,"⩞","\\doublebarwedge",!0);m(h,j,he,"⊟","\\boxminus",!0);m(h,j,he,"⊞","\\boxplus",!0);m(h,j,he,"⋇","\\divideontimes",!0);m(h,j,he,"⋉","\\ltimes",!0);m(h,j,he,"⋊","\\rtimes",!0);m(h,j,he,"⋋","\\leftthreetimes",!0);m(h,j,he,"⋌","\\rightthreetimes",!0);m(h,j,he,"⋏","\\curlywedge",!0);m(h,j,he,"⋎","\\curlyvee",!0);m(h,j,he,"⊝","\\circleddash",!0);m(h,j,he,"⊛","\\circledast",!0);m(h,j,he,"⋅","\\centerdot");m(h,j,he,"⊺","\\intercal",!0);m(h,j,he,"⋒","\\doublecap");m(h,j,he,"⋓","\\doublecup");m(h,j,he,"⊠","\\boxtimes",!0);m(h,j,q,"⇢","\\dashrightarrow",!0);m(h,j,q,"⇠","\\dashleftarrow",!0);m(h,j,q,"⇇","\\leftleftarrows",!0);m(h,j,q,"⇆","\\leftrightarrows",!0);m(h,j,q,"⇚","\\Lleftarrow",!0);m(h,j,q,"↞","\\twoheadleftarrow",!0);m(h,j,q,"↢","\\leftarrowtail",!0);m(h,j,q,"↫","\\looparrowleft",!0);m(h,j,q,"⇋","\\leftrightharpoons",!0);m(h,j,q,"↶","\\curvearrowleft",!0);m(h,j,q,"↺","\\circlearrowleft",!0);m(h,j,q,"↰","\\Lsh",!0);m(h,j,q,"⇈","\\upuparrows",!0);m(h,j,q,"↿","\\upharpoonleft",!0);m(h,j,q,"⇃","\\downharpoonleft",!0);m(h,x,q,"⊶","\\origof",!0);m(h,x,q,"⊷","\\imageof",!0);m(h,j,q,"⊸","\\multimap",!0);m(h,j,q,"↭","\\leftrightsquigarrow",!0);m(h,j,q,"⇉","\\rightrightarrows",!0);m(h,j,q,"⇄","\\rightleftarrows",!0);m(h,j,q,"↠","\\twoheadrightarrow",!0);m(h,j,q,"↣","\\rightarrowtail",!0);m(h,j,q,"↬","\\looparrowright",!0);m(h,j,q,"↷","\\curvearrowright",!0);m(h,j,q,"↻","\\circlearrowright",!0);m(h,j,q,"↱","\\Rsh",!0);m(h,j,q,"⇊","\\downdownarrows",!0);m(h,j,q,"↾","\\upharpoonright",!0);m(h,j,q,"⇂","\\downharpoonright",!0);m(h,j,q,"⇝","\\rightsquigarrow",!0);m(h,j,q,"⇝","\\leadsto");m(h,j,q,"⇛","\\Rrightarrow",!0);m(h,j,q,"↾","\\restriction");m(h,x,C,"‘","`");m(h,x,C,"$","\\$");m(ne,x,C,"$","\\$");m(ne,x,C,"$","\\textdollar");m(h,x,C,"%","\\%");m(ne,x,C,"%","\\%");m(h,x,C,"_","\\_");m(ne,x,C,"_","\\_");m(ne,x,C,"_","\\textunderscore");m(h,x,C,"∠","\\angle",!0);m(h,x,C,"∞","\\infty",!0);m(h,x,C,"′","\\prime");m(h,x,C,"△","\\triangle");m(h,x,C,"Γ","\\Gamma",!0);m(h,x,C,"Δ","\\Delta",!0);m(h,x,C,"Θ","\\Theta",!0);m(h,x,C,"Λ","\\Lambda",!0);m(h,x,C,"Ξ","\\Xi",!0);m(h,x,C,"Π","\\Pi",!0);m(h,x,C,"Σ","\\Sigma",!0);m(h,x,C,"Υ","\\Upsilon",!0);m(h,x,C,"Φ","\\Phi",!0);m(h,x,C,"Ψ","\\Psi",!0);m(h,x,C,"Ω","\\Omega",!0);m(h,x,C,"A","Α");m(h,x,C,"B","Β");m(h,x,C,"E","Ε");m(h,x,C,"Z","Ζ");m(h,x,C,"H","Η");m(h,x,C,"I","Ι");m(h,x,C,"K","Κ");m(h,x,C,"M","Μ");m(h,x,C,"N","Ν");m(h,x,C,"O","Ο");m(h,x,C,"P","Ρ");m(h,x,C,"T","Τ");m(h,x,C,"X","Χ");m(h,x,C,"¬","\\neg",!0);m(h,x,C,"¬","\\lnot");m(h,x,C,"⊤","\\top");m(h,x,C,"⊥","\\bot");m(h,x,C,"∅","\\emptyset");m(h,j,C,"∅","\\varnothing");m(h,x,Ae,"α","\\alpha",!0);m(h,x,Ae,"β","\\beta",!0);m(h,x,Ae,"γ","\\gamma",!0);m(h,x,Ae,"δ","\\delta",!0);m(h,x,Ae,"ϵ","\\epsilon",!0);m(h,x,Ae,"ζ","\\zeta",!0);m(h,x,Ae,"η","\\eta",!0);m(h,x,Ae,"θ","\\theta",!0);m(h,x,Ae,"ι","\\iota",!0);m(h,x,Ae,"κ","\\kappa",!0);m(h,x,Ae,"λ","\\lambda",!0);m(h,x,Ae,"μ","\\mu",!0);m(h,x,Ae,"ν","\\nu",!0);m(h,x,Ae,"ξ","\\xi",!0);m(h,x,Ae,"ο","\\omicron",!0);m(h,x,Ae,"π","\\pi",!0);m(h,x,Ae,"ρ","\\rho",!0);m(h,x,Ae,"σ","\\sigma",!0);m(h,x,Ae,"τ","\\tau",!0);m(h,x,Ae,"υ","\\upsilon",!0);m(h,x,Ae,"ϕ","\\phi",!0);m(h,x,Ae,"χ","\\chi",!0);m(h,x,Ae,"ψ","\\psi",!0);m(h,x,Ae,"ω","\\omega",!0);m(h,x,Ae,"ε","\\varepsilon",!0);m(h,x,Ae,"ϑ","\\vartheta",!0);m(h,x,Ae,"ϖ","\\varpi",!0);m(h,x,Ae,"ϱ","\\varrho",!0);m(h,x,Ae,"ς","\\varsigma",!0);m(h,x,Ae,"φ","\\varphi",!0);m(h,x,he,"∗","*",!0);m(h,x,he,"+","+");m(h,x,he,"−","-",!0);m(h,x,he,"⋅","\\cdot",!0);m(h,x,he,"∘","\\circ",!0);m(h,x,he,"÷","\\div",!0);m(h,x,he,"±","\\pm",!0);m(h,x,he,"×","\\times",!0);m(h,x,he,"∩","\\cap",!0);m(h,x,he,"∪","\\cup",!0);m(h,x,he,"∖","\\setminus",!0);m(h,x,he,"∧","\\land");m(h,x,he,"∨","\\lor");m(h,x,he,"∧","\\wedge",!0);m(h,x,he,"∨","\\vee",!0);m(h,x,C,"√","\\surd");m(h,x,tt,"⟨","\\langle",!0);m(h,x,tt,"∣","\\lvert");m(h,x,tt,"∥","\\lVert");m(h,x,In,"?","?");m(h,x,In,"!","!");m(h,x,In,"⟩","\\rangle",!0);m(h,x,In,"∣","\\rvert");m(h,x,In,"∥","\\rVert");m(h,x,q,"=","=");m(h,x,q,":",":");m(h,x,q,"≈","\\approx",!0);m(h,x,q,"≅","\\cong",!0);m(h,x,q,"≥","\\ge");m(h,x,q,"≥","\\geq",!0);m(h,x,q,"←","\\gets");m(h,x,q,">","\\gt",!0);m(h,x,q,"∈","\\in",!0);m(h,x,q,"","\\@not");m(h,x,q,"⊂","\\subset",!0);m(h,x,q,"⊃","\\supset",!0);m(h,x,q,"⊆","\\subseteq",!0);m(h,x,q,"⊇","\\supseteq",!0);m(h,j,q,"⊈","\\nsubseteq",!0);m(h,j,q,"⊉","\\nsupseteq",!0);m(h,x,q,"⊨","\\models");m(h,x,q,"←","\\leftarrow",!0);m(h,x,q,"≤","\\le");m(h,x,q,"≤","\\leq",!0);m(h,x,q,"<","\\lt",!0);m(h,x,q,"→","\\rightarrow",!0);m(h,x,q,"→","\\to");m(h,j,q,"≱","\\ngeq",!0);m(h,j,q,"≰","\\nleq",!0);m(h,x,nr," ","\\ ");m(h,x,nr," ","\\space");m(h,x,nr," ","\\nobreakspace");m(ne,x,nr," ","\\ ");m(ne,x,nr," "," ");m(ne,x,nr," ","\\space");m(ne,x,nr," ","\\nobreakspace");m(h,x,nr,null,"\\nobreak");m(h,x,nr,null,"\\allowbreak");m(h,x,x0,",",",");m(h,x,x0,";",";");m(h,j,he,"⊼","\\barwedge",!0);m(h,j,he,"⊻","\\veebar",!0);m(h,x,he,"⊙","\\odot",!0);m(h,x,he,"⊕","\\oplus",!0);m(h,x,he,"⊗","\\otimes",!0);m(h,x,C,"∂","\\partial",!0);m(h,x,he,"⊘","\\oslash",!0);m(h,j,he,"⊚","\\circledcirc",!0);m(h,j,he,"⊡","\\boxdot",!0);m(h,x,he,"△","\\bigtriangleup");m(h,x,he,"▽","\\bigtriangledown");m(h,x,he,"†","\\dagger");m(h,x,he,"⋄","\\diamond");m(h,x,he,"⋆","\\star");m(h,x,he,"◃","\\triangleleft");m(h,x,he,"▹","\\triangleright");m(h,x,tt,"{","\\{");m(ne,x,C,"{","\\{");m(ne,x,C,"{","\\textbraceleft");m(h,x,In,"}","\\}");m(ne,x,C,"}","\\}");m(ne,x,C,"}","\\textbraceright");m(h,x,tt,"{","\\lbrace");m(h,x,In,"}","\\rbrace");m(h,x,tt,"[","\\lbrack",!0);m(ne,x,C,"[","\\lbrack",!0);m(h,x,In,"]","\\rbrack",!0);m(ne,x,C,"]","\\rbrack",!0);m(h,x,tt,"(","\\lparen",!0);m(h,x,In,")","\\rparen",!0);m(ne,x,C,"<","\\textless",!0);m(ne,x,C,">","\\textgreater",!0);m(h,x,tt,"⌊","\\lfloor",!0);m(h,x,In,"⌋","\\rfloor",!0);m(h,x,tt,"⌈","\\lceil",!0);m(h,x,In,"⌉","\\rceil",!0);m(h,x,C,"\\","\\backslash");m(h,x,C,"∣","|");m(h,x,C,"∣","\\vert");m(ne,x,C,"|","\\textbar",!0);m(h,x,C,"∥","\\|");m(h,x,C,"∥","\\Vert");m(ne,x,C,"∥","\\textbardbl");m(ne,x,C,"~","\\textasciitilde");m(ne,x,C,"\\","\\textbackslash");m(ne,x,C,"^","\\textasciicircum");m(h,x,q,"↑","\\uparrow",!0);m(h,x,q,"⇑","\\Uparrow",!0);m(h,x,q,"↓","\\downarrow",!0);m(h,x,q,"⇓","\\Downarrow",!0);m(h,x,q,"↕","\\updownarrow",!0);m(h,x,q,"⇕","\\Updownarrow",!0);m(h,x,vn,"∐","\\coprod");m(h,x,vn,"⋁","\\bigvee");m(h,x,vn,"⋀","\\bigwedge");m(h,x,vn,"⨄","\\biguplus");m(h,x,vn,"⋂","\\bigcap");m(h,x,vn,"⋃","\\bigcup");m(h,x,vn,"∫","\\int");m(h,x,vn,"∫","\\intop");m(h,x,vn,"∬","\\iint");m(h,x,vn,"∭","\\iiint");m(h,x,vn,"∏","\\prod");m(h,x,vn,"∑","\\sum");m(h,x,vn,"⨂","\\bigotimes");m(h,x,vn,"⨁","\\bigoplus");m(h,x,vn,"⨀","\\bigodot");m(h,x,vn,"∮","\\oint");m(h,x,vn,"∯","\\oiint");m(h,x,vn,"∰","\\oiiint");m(h,x,vn,"⨆","\\bigsqcup");m(h,x,vn,"∫","\\smallint");m(ne,x,Oi,"…","\\textellipsis");m(h,x,Oi,"…","\\mathellipsis");m(ne,x,Oi,"…","\\ldots",!0);m(h,x,Oi,"…","\\ldots",!0);m(h,x,Oi,"⋯","\\@cdots",!0);m(h,x,Oi,"⋱","\\ddots",!0);m(h,x,C,"⋮","\\varvdots");m(ne,x,C,"⋮","\\varvdots");m(h,x,rn,"ˊ","\\acute");m(h,x,rn,"ˋ","\\grave");m(h,x,rn,"¨","\\ddot");m(h,x,rn,"~","\\tilde");m(h,x,rn,"ˉ","\\bar");m(h,x,rn,"˘","\\breve");m(h,x,rn,"ˇ","\\check");m(h,x,rn,"^","\\hat");m(h,x,rn,"⃗","\\vec");m(h,x,rn,"˙","\\dot");m(h,x,rn,"˚","\\mathring");m(h,x,Ae,"","\\@imath");m(h,x,Ae,"","\\@jmath");m(h,x,C,"ı","ı");m(h,x,C,"ȷ","ȷ");m(ne,x,C,"ı","\\i",!0);m(ne,x,C,"ȷ","\\j",!0);m(ne,x,C,"ß","\\ss",!0);m(ne,x,C,"æ","\\ae",!0);m(ne,x,C,"œ","\\oe",!0);m(ne,x,C,"ø","\\o",!0);m(ne,x,C,"Æ","\\AE",!0);m(ne,x,C,"Œ","\\OE",!0);m(ne,x,C,"Ø","\\O",!0);m(ne,x,rn,"ˊ","\\'");m(ne,x,rn,"ˋ","\\`");m(ne,x,rn,"ˆ","\\^");m(ne,x,rn,"˜","\\~");m(ne,x,rn,"ˉ","\\=");m(ne,x,rn,"˘","\\u");m(ne,x,rn,"˙","\\.");m(ne,x,rn,"¸","\\c");m(ne,x,rn,"˚","\\r");m(ne,x,rn,"ˇ","\\v");m(ne,x,rn,"¨",'\\"');m(ne,x,rn,"˝","\\H");m(ne,x,rn,"◯","\\textcircled");var pm={"--":!0,"---":!0,"``":!0,"''":!0};m(ne,x,C,"–","--",!0);m(ne,x,C,"–","\\textendash");m(ne,x,C,"—","---",!0);m(ne,x,C,"—","\\textemdash");m(ne,x,C,"‘","`",!0);m(ne,x,C,"‘","\\textquoteleft");m(ne,x,C,"’","'",!0);m(ne,x,C,"’","\\textquoteright");m(ne,x,C,"“","``",!0);m(ne,x,C,"“","\\textquotedblleft");m(ne,x,C,"”","''",!0);m(ne,x,C,"”","\\textquotedblright");m(h,x,C,"°","\\degree",!0);m(ne,x,C,"°","\\degree");m(ne,x,C,"°","\\textdegree",!0);m(h,x,C,"£","\\pounds");m(h,x,C,"£","\\mathsterling",!0);m(ne,x,C,"£","\\pounds");m(ne,x,C,"£","\\textsterling",!0);m(h,j,C,"✠","\\maltese");m(ne,j,C,"✠","\\maltese");var pd='0123456789/@."';for(var bl=0;bl<pd.length;bl++){var fd=pd.charAt(bl);m(h,x,C,fd,fd)}var hd='0123456789!@*()-=+";:?/.,';for(var wl=0;wl<hd.length;wl++){var gd=hd.charAt(wl);m(ne,x,C,gd,gd)}var h0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var _l=0;_l<h0.length;_l++){var t0=h0.charAt(_l);m(h,x,Ae,t0,t0),m(ne,x,C,t0,t0)}m(h,j,C,"C","ℂ");m(ne,j,C,"C","ℂ");m(h,j,C,"H","ℍ");m(ne,j,C,"H","ℍ");m(h,j,C,"N","ℕ");m(ne,j,C,"N","ℕ");m(h,j,C,"P","ℙ");m(ne,j,C,"P","ℙ");m(h,j,C,"Q","ℚ");m(ne,j,C,"Q","ℚ");m(h,j,C,"R","ℝ");m(ne,j,C,"R","ℝ");m(h,j,C,"Z","ℤ");m(ne,j,C,"Z","ℤ");m(h,x,Ae,"h","ℎ");m(ne,x,Ae,"h","ℎ");var Me="";for(var En=0;En<h0.length;En++){var mn=h0.charAt(En);Me=String.fromCharCode(55349,56320+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56372+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56424+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56580+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56684+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56736+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56788+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56840+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56944+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),En<26&&(Me=String.fromCharCode(55349,56632+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me),Me=String.fromCharCode(55349,56476+En),m(h,x,Ae,mn,Me),m(ne,x,C,mn,Me))}Me="𝕜";m(h,x,Ae,"k",Me);m(ne,x,C,"k",Me);for(var ri=0;ri<10;ri++){var Tr=ri.toString();Me=String.fromCharCode(55349,57294+ri),m(h,x,Ae,Tr,Me),m(ne,x,C,Tr,Me),Me=String.fromCharCode(55349,57314+ri),m(h,x,Ae,Tr,Me),m(ne,x,C,Tr,Me),Me=String.fromCharCode(55349,57324+ri),m(h,x,Ae,Tr,Me),m(ne,x,C,Tr,Me),Me=String.fromCharCode(55349,57334+ri),m(h,x,Ae,Tr,Me),m(ne,x,C,Tr,Me)}var Ll="ÐÞþ";for(var kl=0;kl<Ll.length;kl++){var r0=Ll.charAt(kl);m(h,x,Ae,r0,r0),m(ne,x,C,r0,r0)}var i0=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],yd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],p8=function(t,r){var s=t.charCodeAt(0),a=t.charCodeAt(1),u=(s-55296)*1024+(a-56320)+65536,d=r==="math"?0:1;if(119808<=u&&u<120484){var g=Math.floor((u-119808)/26);return[i0[g][2],i0[g][d]]}else if(120782<=u&&u<=120831){var f=Math.floor((u-120782)/10);return[yd[f][2],yd[f][d]]}else{if(u===120485||u===120486)return[i0[0][2],i0[0][d]];if(120486<u&&u<120782)return["",""];throw new oe("Unsupported character: "+t)}},$0=function(t,r,s){return Je[s][t]&&Je[s][t].replace&&(t=Je[s][t].replace),{value:t,metrics:ru(t,r,s)}},Bn=function(t,r,s,a,u){var d=$0(t,r,s),g=d.metrics;t=d.value;var f;if(g){var v=g.italic;(s==="text"||a&&a.font==="mathit")&&(v=0),f=new mt(t,g.height,g.depth,v,g.skew,g.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+s+"'")),f=new mt(t,0,0,0,0,0,u);if(a){f.maxFontSize=a.sizeMultiplier,a.style.isTight()&&f.classes.push("mtight");var b=a.getColor();b&&(f.style.color=b)}return f},ou=function(t,r,s,a){return a===void 0&&(a=[]),s.font==="boldsymbol"&&$0(t,"Main-Bold",r).metrics?Bn(t,"Main-Bold",r,s,a.concat(["mathbf"])):t==="\\"||Je[r][t].font==="main"?Bn(t,"Main-Regular",r,s,a):Bn(t,"AMS-Regular",r,s,a.concat(["amsrm"]))},f8=function(t,r,s,a,u){return u!=="textord"&&$0(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},b0=function(t,r,s){var a=t.mode,u=t.text,d=["mord"],g=a==="math"||a==="text"&&r.font,f=g?r.font:r.fontFamily,v="",b="";if(u.charCodeAt(0)===55349&&([v,b]=p8(u,a)),v.length>0)return Bn(u,v,a,r,d.concat(b));if(f){var _,z;if(f==="boldsymbol"){var k=f8(u,a,r,d,s);_=k.fontName,z=[k.fontClass]}else g?(_=Ol[f].fontName,z=[f]):(_=o0(f,r.fontWeight,r.fontShape),z=[f,r.fontWeight,r.fontShape]);if($0(u,_,a).metrics)return Bn(u,_,a,r,d.concat(z));if(pm.hasOwnProperty(u)&&_.slice(0,10)==="Typewriter"){for(var M=[],P=0;P<u.length;P++)M.push(Bn(u[P],_,a,r,d.concat(z)));return tr(M)}}if(s==="mathord")return Bn(u,"Math-Italic",a,r,d.concat(["mathnormal"]));if(s==="textord"){var R=Je[a][u]&&Je[a][u].font;if(R==="ams"){var E=o0("amsrm",r.fontWeight,r.fontShape);return Bn(u,E,a,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(R==="main"||!R){var F=o0("textrm",r.fontWeight,r.fontShape);return Bn(u,F,a,r,d.concat(r.fontWeight,r.fontShape))}else{var G=o0(R,r.fontWeight,r.fontShape);return Bn(u,G,a,r,d.concat(G,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},h8=(o,t)=>{if(Mr(o.classes)!==Mr(t.classes)||o.skew!==t.skew||o.maxFontSize!==t.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==t.style[s])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&o.style[a]!==t.style[a])return!1;return!0},fm=o=>{for(var t=0;t<o.length-1;t++){var r=o[t],s=o[t+1];r instanceof mt&&s instanceof mt&&h8(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(t+1,1),t--)}return o},su=function(t){for(var r=0,s=0,a=0,u=0;u<t.children.length;u++){var d=t.children[u];d.height>r&&(r=d.height),d.depth>s&&(s=d.depth),d.maxFontSize>a&&(a=d.maxFontSize)}t.height=r,t.depth=s,t.maxFontSize=a},re=function(t,r,s,a){var u=new Io(t,r,s,a);return su(u),u},Cr=(o,t,r,s)=>new Io(o,t,r,s),Fi=function(t,r,s){var a=re([t],[],r);return a.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=ce(a.height),a.maxFontSize=1,a},g8=function(t,r,s,a){var u=new iu(t,r,s,a);return su(u),u},tr=function(t){var r=new No(t);return su(r),r},Li=function(t,r){return t instanceof No?re([],[t],r):t},y8=function(t){if(t.positionType==="individualShift"){for(var r=t.children,s=[r[0]],a=-r[0].shift-r[0].elem.depth,u=a,d=1;d<r.length;d++){var g=-r[d].shift-u-r[d].elem.depth,f=g-(r[d-1].elem.height+r[d-1].elem.depth);u=u+g,s.push({type:"kern",size:f}),s.push(r[d])}return{children:s,depth:a}}var v;if(t.positionType==="top"){for(var b=t.positionData,_=0;_<t.children.length;_++){var z=t.children[_];b-=z.type==="kern"?z.size:z.elem.height+z.elem.depth}v=b}else if(t.positionType==="bottom")v=-t.positionData;else{var k=t.children[0];if(k.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")v=-k.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")v=-k.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:v}},Qe=function(t,r){for(var{children:s,depth:a}=y8(t),u=0,d=0;d<s.length;d++){var g=s[d];if(g.type==="elem"){var f=g.elem;u=Math.max(u,f.maxFontSize,f.height)}}u+=2;var v=re(["pstrut"],[]);v.style.height=ce(u);for(var b=[],_=a,z=a,k=a,M=0;M<s.length;M++){var P=s[M];if(P.type==="kern")k+=P.size;else{var R=P.elem,E=P.wrapperClasses||[],F=P.wrapperStyle||{},G=re(E,[v,R],void 0,F);G.style.top=ce(-u-k-R.depth),P.marginLeft&&(G.style.marginLeft=P.marginLeft),P.marginRight&&(G.style.marginRight=P.marginRight),b.push(G),k+=R.height+R.depth}_=Math.min(_,k),z=Math.max(z,k)}var I=re(["vlist"],b);I.style.height=ce(z);var L;if(_<0){var K=re([],[]),B=re(["vlist"],[K]);B.style.height=ce(-_);var Z=re(["vlist-s"],[new mt("​")]);L=[re(["vlist-r"],[I,Z]),re(["vlist-r"],[B])]}else L=[re(["vlist-r"],[I])];var X=re(["vlist-t"],L);return L.length===2&&X.classes.push("vlist-t2"),X.height=z,X.depth=-_,X},hm=(o,t)=>{var r=re(["mspace"],[],t),s=un(o,t);return r.style.marginRight=ce(s),r},o0=function(t,r,s){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var u;return r==="textbf"&&s==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",a+"-"+u},Ol={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},gm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},ym=function(t,r){var[s,a,u]=gm[t],d=new Pr(s),g=new Jt([d],{width:ce(a),height:ce(u),style:"width:"+ce(a),viewBox:"0 0 "+1e3*a+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),f=Cr(["overlay"],[g],r);return f.height=u,f.style.height=ce(u),f.style.width=ce(a),f},ln={number:3,unit:"mu"},ii={number:4,unit:"mu"},Zt={number:5,unit:"mu"},v8={mord:{mop:ln,mbin:ii,mrel:Zt,minner:ln},mop:{mord:ln,mop:ln,mrel:Zt,minner:ln},mbin:{mord:ii,mop:ii,mopen:ii,minner:ii},mrel:{mord:Zt,mop:Zt,mopen:Zt,minner:Zt},mopen:{},mclose:{mop:ln,mbin:ii,mrel:Zt,minner:ln},mpunct:{mord:ln,mop:ln,mrel:Zt,mopen:ln,mclose:ln,mpunct:ln,minner:ln},minner:{mord:ln,mop:ln,mbin:ii,mrel:Zt,mopen:ln,mpunct:ln,minner:ln}},x8={mord:{mop:ln},mop:{mord:ln,mop:ln},mbin:{},mrel:{},mopen:{},mclose:{mop:ln},mpunct:{},minner:{mop:ln}},vm={},g0={},y0={};function pe(o){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:d}=o,g={type:t,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:a},f=0;f<r.length;++f)vm[r[f]]=g;t&&(u&&(g0[t]=u),d&&(y0[t]=d))}function si(o){var{type:t,htmlBuilder:r,mathmlBuilder:s}=o;pe({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var v0=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},hn=function(t){return t.type==="ordgroup"?t.body:[t]},$8=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),b8=new Set(["rightmost","mrel","mclose","mpunct"]),w8={display:De.DISPLAY,text:De.TEXT,script:De.SCRIPT,scriptscript:De.SCRIPTSCRIPT},_8={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},bn=function(t,r,s,a){a===void 0&&(a=[null,null]);for(var u=[],d=0;d<t.length;d++){var g=Ve(t[d],r);if(g instanceof No){var f=g.children;u.push(...f)}else u.push(g)}if(fm(u),!s)return u;var v=r;if(t.length===1){var b=t[0];b.type==="sizing"?v=r.havingSize(b.size):b.type==="styling"&&(v=r.havingStyle(w8[b.style]))}var _=re([a[0]||"leftmost"],[],r),z=re([a[1]||"rightmost"],[],r),k=s==="root";return vd(u,(M,P)=>{var R=P.classes[0],E=M.classes[0];R==="mbin"&&b8.has(E)?P.classes[0]="mord":E==="mbin"&&$8.has(R)&&(M.classes[0]="mord")},{node:_},z,k),vd(u,(M,P)=>{var R=Hl(P),E=Hl(M),F=R&&E?M.hasClass("mtight")?x8[R][E]:v8[R][E]:null;if(F)return hm(F,v)},{node:_},z,k),u},vd=function o(t,r,s,a,u){a&&t.push(a);for(var d=0;d<t.length;d++){var g=t[d],f=xm(g);if(f){o(f.children,r,s,null,u);continue}var v=!g.hasClass("mspace");if(v){var b=r(g,s.node);b&&(s.insertAfter?s.insertAfter(b):(t.unshift(b),d++))}v?s.node=g:u&&g.hasClass("newline")&&(s.node=re(["leftmost"])),s.insertAfter=(_=>z=>{t.splice(_+1,0,z),d++})(d)}a&&t.pop()},xm=function(t){return t instanceof No||t instanceof iu||t instanceof Io&&t.hasClass("enclosing")?t:null},k8=function o(t,r){var s=xm(t);if(s){var a=s.children;if(a.length){if(r==="right")return o(a[a.length-1],"right");if(r==="left")return o(a[0],"left")}}return t},Hl=function(t,r){return t?(r&&(t=k8(t,r)),_8[t.classes[0]]||null):null},Eo=function(t,r){var s=["nulldelimiter"].concat(t.baseSizingClasses());return re(r.concat(s))},Ve=function(t,r,s){if(!t)return re();if(g0[t.type]){var a=g0[t.type](t,r);if(s&&r.size!==s.size){a=re(r.sizingClasses(s),[a],r);var u=r.sizeMultiplier/s.sizeMultiplier;a.height*=u,a.depth*=u}return a}else throw new oe("Got group of unknown type: '"+t.type+"'")};function s0(o,t){var r=re(["base"],o,t),s=re(["strut"]);return s.style.height=ce(r.height+r.depth),r.depth&&(s.style.verticalAlign=ce(-r.depth)),r.children.unshift(s),r}function Wl(o,t){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=bn(o,t,"root"),a;s.length===2&&s[1].hasClass("tag")&&(a=s.pop());for(var u=[],d=[],g=0;g<s.length;g++)if(d.push(s[g]),s[g].hasClass("mbin")||s[g].hasClass("mrel")||s[g].hasClass("allowbreak")){for(var f=!1;g<s.length-1&&s[g+1].hasClass("mspace")&&!s[g+1].hasClass("newline");)g++,d.push(s[g]),s[g].hasClass("nobreak")&&(f=!0);f||(u.push(s0(d,t)),d=[])}else s[g].hasClass("newline")&&(d.pop(),d.length>0&&(u.push(s0(d,t)),d=[]),u.push(s[g]));d.length>0&&u.push(s0(d,t));var v;r?(v=s0(bn(r,t,!0)),v.classes=["tag"],u.push(v)):a&&u.push(a);var b=re(["katex-html"],u);if(b.setAttribute("aria-hidden","true"),v){var _=v.children[0];_.style.height=ce(b.height+b.depth),b.depth&&(_.style.verticalAlign=ce(-b.depth))}return b}function $m(o){return new No(o)}class se{constructor(t,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Mr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof yn&&this.children[s+1]instanceof yn){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof yn;)a+=this.children[++s].toText();t.appendChild(new yn(a).toNode())}else t.appendChild(this.children[s].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Pn(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Pn(Mr(this.classes))+'"'),t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class yn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Pn(this.toText())}toText(){return this.text}}class bm{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",ce(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ce(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var z8=new Set(["\\imath","\\jmath"]),S8=new Set(["mrow","mtable"]),pt=function(t,r,s){return Je[r][t]&&Je[r][t].replace&&t.charCodeAt(0)!==55349&&!(pm.hasOwnProperty(t)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(t=Je[r][t].replace),new yn(t)},au=function(t){return t.length===1?t[0]:new se("mrow",t)},lu=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var a=t.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var u=t.text;if(z8.has(u))return null;Je[a][u]&&Je[a][u].replace&&(u=Je[a][u].replace);var d=Ol[s].fontName;return ru(u,d,a)?Ol[s].variant:null};function zl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var t=o.children[0];return t instanceof yn&&t.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof yn&&r.text===","}else return!1}var Qn=function(t,r,s){if(t.length===1){var a=Ye(t[0],r);return s&&a instanceof se&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var u=[],d,g=0;g<t.length;g++){var f=Ye(t[g],r);if(f instanceof se&&d instanceof se){if(f.type==="mtext"&&d.type==="mtext"&&f.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...f.children);continue}else if(f.type==="mn"&&d.type==="mn"){d.children.push(...f.children);continue}else if(zl(f)&&d.type==="mn"){d.children.push(...f.children);continue}else if(f.type==="mn"&&zl(d))f.children=[...d.children,...f.children],u.pop();else if((f.type==="msup"||f.type==="msub")&&f.children.length>=1&&(d.type==="mn"||zl(d))){var v=f.children[0];v instanceof se&&v.type==="mn"&&(v.children=[...d.children,...v.children],u.pop())}else if(d.type==="mi"&&d.children.length===1){var b=d.children[0];if(b instanceof yn&&b.text==="̸"&&(f.type==="mo"||f.type==="mi"||f.type==="mn")){var _=f.children[0];_ instanceof yn&&_.text.length>0&&(_.text=_.text.slice(0,1)+"̸"+_.text.slice(1),u.pop())}}}u.push(f),d=f}return u},Rr=function(t,r,s){return au(Qn(t,r,s))},Ye=function(t,r){if(!t)return new se("mrow");if(y0[t.type]){var s=y0[t.type](t,r);return s}else throw new oe("Got group of unknown type: '"+t.type+"'")};function xd(o,t,r,s,a){var u=Qn(o,r),d;u.length===1&&u[0]instanceof se&&S8.has(u[0].type)?d=u[0]:d=new se("mrow",u);var g=new se("annotation",[new yn(t)]);g.setAttribute("encoding","application/x-tex");var f=new se("semantics",[d,g]),v=new se("math",[f]);v.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&v.setAttribute("display","block");var b=a?"katex":"katex-mathml";return re([b],[v])}var wm=function(t){return new Yt({style:t.displayMode?De.DISPLAY:De.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},_m=function(t,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),t=re(s,[t])}return t},j8=function(t,r,s){var a=wm(s),u;if(s.output==="mathml")return xd(t,r,a,s.displayMode,!0);if(s.output==="html"){var d=Wl(t,a);u=re(["katex"],[d])}else{var g=xd(t,r,a,s.displayMode,!1),f=Wl(t,a);u=re(["katex"],[g,f])}return _m(u,s)},q8=function(t,r,s){var a=wm(s),u=Wl(t,a),d=re(["katex"],[u]);return _m(d,s)},T8={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},w0=function(t){var r=new se("mo",[new yn(T8[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},A8={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},M8=new Set(["widehat","widecheck","widetilde","utilde"]),_0=function(t,r){function s(){var g=4e5,f=t.label.slice(1);if(M8.has(f)){var v=t,b=v.base.type==="ordgroup"?v.base.body.length:1,_,z,k;if(b>5)f==="widehat"||f==="widecheck"?(_=420,g=2364,k=.42,z=f+"4"):(_=312,g=2340,k=.34,z="tilde4");else{var M=[1,1,2,2,3,3][b];f==="widehat"||f==="widecheck"?(g=[0,1062,2364,2364,2364][M],_=[0,239,300,360,420][M],k=[0,.24,.3,.3,.36,.42][M],z=f+M):(g=[0,600,1033,2339,2340][M],_=[0,260,286,306,312][M],k=[0,.26,.286,.3,.306,.34][M],z="tilde"+M)}var P=new Pr(z),R=new Jt([P],{width:"100%",height:ce(k),viewBox:"0 0 "+g+" "+_,preserveAspectRatio:"none"});return{span:Cr([],[R],r),minWidth:0,height:k}}else{var E=[],F=A8[f],[G,I,L]=F,K=L/1e3,B=G.length,Z,X;if(B===1){var me=F[3];Z=["hide-tail"],X=[me]}else if(B===2)Z=["halfarrow-left","halfarrow-right"],X=["xMinYMin","xMaxYMin"];else if(B===3)Z=["brace-left","brace-center","brace-right"],X=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+B+" children.");for(var be=0;be<B;be++){var Y=new Pr(G[be]),de=new Jt([Y],{width:"400em",height:ce(K),viewBox:"0 0 "+g+" "+L,preserveAspectRatio:X[be]+" slice"}),ke=Cr([Z[be]],[de],r);if(B===1)return{span:ke,minWidth:I,height:K};ke.style.height=ce(K),E.push(ke)}return{span:re(["stretchy"],E,r),minWidth:I,height:K}}}var{span:a,minWidth:u,height:d}=s();return a.height=d,a.style.height=ce(d),u>0&&(a.style.minWidth=ce(u)),a},P8=function(t,r,s,a,u){var d,g=t.height+t.depth+s+a;if(/fbox|color|angl/.test(r)){if(d=re(["stretchy",r],[],u),r==="fbox"){var f=u.color&&u.getColor();f&&(d.style.borderColor=f)}}else{var v=[];/^[bx]cancel$/.test(r)&&v.push(new Fl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&v.push(new Fl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new Jt(v,{width:"100%",height:ce(g)});d=Cr([],[b],u)}return d.height=g,d.style.height=ce(g),d};function Ie(o,t){if(!o||o.type!==t)throw new Error("Expected node of type "+t+", but got "+(o?"node of type "+o.type:String(o)));return o}function uu(o){var t=k0(o);if(!t)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return t}function k0(o){return o&&(o.type==="atom"||m8.hasOwnProperty(o.type))?o:null}var cu=(o,t)=>{var r,s,a;o&&o.type==="supsub"?(s=Ie(o.base,"accent"),r=s.base,o.base=r,a=c8(Ve(o,t)),o.base=s):(s=Ie(o,"accent"),r=s.base);var u=Ve(r,t.havingCrampedStyle()),d=s.isShifty&&er(r),g=0;if(d){var f=Po(r),v=Ve(f,t.havingCrampedStyle());g=md(v).skew}var b=s.label==="\\c",_=b?u.height+u.depth:Math.min(u.height,t.fontMetrics().xHeight),z;if(s.isStretchy)z=_0(s,t),z=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:z,wrapperClasses:["svg-align"],wrapperStyle:g>0?{width:"calc(100% - "+ce(2*g)+")",marginLeft:ce(2*g)}:void 0}]});else{var k,M;s.label==="\\vec"?(k=ym("vec",t),M=gm.vec[1]):(k=b0({mode:s.mode,text:s.label},t,"textord"),k=md(k),k.italic=0,M=k.width,b&&(_+=k.depth)),z=re(["accent-body"],[k]);var P=s.label==="\\textcircled";P&&(z.classes.push("accent-full"),_=u.height);var R=g;P||(R-=M/2),z.style.left=ce(R),s.label==="\\textcircled"&&(z.style.top=".2em"),z=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-_},{type:"elem",elem:z}]})}var E=re(["mord","accent"],[z],t);return a?(a.children[0]=E,a.height=Math.max(E.height,a.height),a.classes[0]="mord",a):E},km=(o,t)=>{var r=o.isStretchy?w0(o.label):new se("mo",[pt(o.label,o.mode)]),s=new se("mover",[Ye(o.base,t),r]);return s.setAttribute("accent","true"),s},C8=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));pe({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,t)=>{var r=v0(t[0]),s=!C8.test(o.funcName),a=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:a,base:r}},htmlBuilder:cu,mathmlBuilder:km});pe({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,t)=>{var r=t[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:cu,mathmlBuilder:km});pe({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"accentUnder",mode:r.mode,label:s,base:a}},htmlBuilder:(o,t)=>{var r=Ve(o.base,t),s=_0(o,t),a=o.label==="\\utilde"?.12:0,u=Qe({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return re(["mord","accentunder"],[u],t)},mathmlBuilder:(o,t)=>{var r=w0(o.label),s=new se("munder",[Ye(o.base,t),r]);return s.setAttribute("accentunder","true"),s}});var a0=o=>{var t=new se("mpadded",o?[o]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};pe({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:s,funcName:a}=o;return{type:"xArrow",mode:s.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(o,t){var r=t.style,s=t.havingStyle(r.sup()),a=Li(Ve(o.body,s,t),t),u=o.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(u+"-arrow-pad");var d;o.below&&(s=t.havingStyle(r.sub()),d=Li(Ve(o.below,s,t),t),d.classes.push(u+"-arrow-pad"));var g=_0(o,t),f=-t.fontMetrics().axisHeight+.5*g.height,v=-t.fontMetrics().axisHeight-.5*g.height-.111;(a.depth>.25||o.label==="\\xleftequilibrium")&&(v-=a.depth);var b;if(d){var _=-t.fontMetrics().axisHeight+d.height+.5*g.height+.111;b=Qe({positionType:"individualShift",children:[{type:"elem",elem:a,shift:v},{type:"elem",elem:g,shift:f},{type:"elem",elem:d,shift:_}]})}else b=Qe({positionType:"individualShift",children:[{type:"elem",elem:a,shift:v},{type:"elem",elem:g,shift:f}]});return b.children[0].children[0].children[1].classes.push("svg-align"),re(["mrel","x-arrow"],[b],t)},mathmlBuilder(o,t){var r=w0(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var a=a0(Ye(o.body,t));if(o.below){var u=a0(Ye(o.below,t));s=new se("munderover",[r,u,a])}else s=new se("mover",[r,a])}else if(o.below){var d=a0(Ye(o.below,t));s=new se("munder",[r,d])}else s=a0(),s=new se("mover",[r,s]);return s}});function zm(o,t){var r=bn(o.body,t,!0);return re([o.mclass],r,t)}function Sm(o,t){var r,s=Qn(o.body,t);return o.mclass==="minner"?r=new se("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new se("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new se("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}pe({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:hn(a),isCharacterBox:er(a)}},htmlBuilder:zm,mathmlBuilder:Sm});var z0=o=>{var t=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};pe({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,t){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:z0(t[0]),body:hn(t[1]),isCharacterBox:er(t[1])}}});pe({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,t){var{parser:r,funcName:s}=o,a=t[1],u=t[0],d;s!=="\\stackrel"?d=z0(a):d="mrel";var g={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:hn(a)},f={type:"supsub",mode:u.mode,base:g,sup:s==="\\underset"?null:u,sub:s==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:d,body:[f],isCharacterBox:er(f)}},htmlBuilder:zm,mathmlBuilder:Sm});pe({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:z0(t[0]),body:hn(t[0])}},htmlBuilder(o,t){var r=bn(o.body,t,!0),s=re([o.mclass],r,t);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,t){var r=Qn(o.body,t),s=new se("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var R8={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},$d=()=>({type:"styling",body:[],mode:"math",style:"display"}),bd=o=>o.type==="textord"&&o.text==="@",D8=(o,t)=>(o.type==="mathord"||o.type==="atom")&&o.text===t;function E8(o,t,r){var s=R8[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),u={type:"atom",text:s,mode:"math",family:"rel"},d=r.callFunction("\\Big",[u],[]),g=r.callFunction("\\\\cdright",[t[1]],[]),f={type:"ordgroup",mode:"math",body:[a,d,g]};return r.callFunction("\\\\cdparent",[f],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var v={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[v],[])}default:return{type:"textord",text:" ",mode:"math"}}}function B8(o){var t=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){t.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new oe("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],a=[s],u=0;u<t.length;u++){for(var d=t[u],g=$d(),f=0;f<d.length;f++)if(!bd(d[f]))g.body.push(d[f]);else{s.push(g),f+=1;var v=uu(d[f]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(v))if("<>AV".includes(v))for(var _=0;_<2;_++){for(var z=!0,k=f+1;k<d.length;k++){if(D8(d[k],v)){z=!1,f=k;break}if(bd(d[k]))throw new oe("Missing a "+v+" character to complete a CD arrow.",d[k]);b[_].body.push(d[k])}if(z)throw new oe("Missing a "+v+" character to complete a CD arrow.",d[f])}else throw new oe('Expected one of "<>AV=|." after @',d[f]);var M=E8(v,b,o),P={type:"styling",body:[M],mode:"math",style:"display"};s.push(P),g=$d()}u%2===0?s.push(g):s.shift(),s=[],a.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var R=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:R,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}pe({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:t[0]}},htmlBuilder(o,t){var r=t.havingStyle(t.style.sup()),s=Li(Ve(o.label,r,t),t);return s.classes.push("cd-label-"+o.side),s.style.bottom=ce(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,t){var r=new se("mrow",[Ye(o.label,t)]);return r=new se("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new se("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});pe({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,t){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(o,t){var r=Li(Ve(o.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,t){return new se("mrow",[Ye(o.fragment,t)])}});pe({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,t){for(var{parser:r}=o,s=Ie(t[0],"ordgroup"),a=s.body,u="",d=0;d<a.length;d++){var g=Ie(a[d],"textord");u+=g.text}var f=parseInt(u),v;if(isNaN(f))throw new oe("\\@char has non-numeric argument "+u);if(f<0||f>=1114111)throw new oe("\\@char with invalid code point "+u);return f<=65535?v=String.fromCharCode(f):(f-=65536,v=String.fromCharCode((f>>10)+55296,(f&1023)+56320)),{type:"textord",mode:r.mode,text:v}}});var jm=(o,t)=>{var r=bn(o.body,t.withColor(o.color),!1);return tr(r)},qm=(o,t)=>{var r=Qn(o.body,t.withColor(o.color)),s=new se("mstyle",r);return s.setAttribute("mathcolor",o.color),s};pe({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,t){var{parser:r}=o,s=Ie(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:s,body:hn(a)}},htmlBuilder:jm,mathmlBuilder:qm});pe({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,t){var{parser:r,breakOnTokenText:s}=o,a=Ie(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var u=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:a,body:u}},htmlBuilder:jm,mathmlBuilder:qm});pe({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,t,r){var{parser:s}=o,a=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,u=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:u,size:a&&Ie(a,"size").value}},htmlBuilder(o,t){var r=re(["mspace"],[],t);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=ce(un(o.size,t)))),r},mathmlBuilder(o,t){var r=new se("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",ce(un(o.size,t)))),r}});var Gl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Tm=o=>{var t=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new oe("Expected a control sequence",o);return t},N8=o=>{var t=o.gullet.popToken();return t.text==="="&&(t=o.gullet.popToken(),t.text===" "&&(t=o.gullet.popToken())),t},Am=(o,t,r,s)=>{var a=o.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(t,a,s)};pe({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:t,funcName:r}=o;t.consumeSpaces();var s=t.fetch();if(Gl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Gl[s.text]),Ie(t.parseFunction(),"internal");throw new oe("Invalid token after macro prefix",s)}});pe({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=t.gullet.popToken(),a=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new oe("Expected a control sequence",s);for(var u=0,d,g=[[]];t.gullet.future().text!=="{";)if(s=t.gullet.popToken(),s.text==="#"){if(t.gullet.future().text==="{"){d=t.gullet.future(),g[u].push("{");break}if(s=t.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new oe('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==u+1)throw new oe('Argument number "'+s.text+'" out of order');u++,g.push([])}else{if(s.text==="EOF")throw new oe("Expected a macro definition");g[u].push(s.text)}var{tokens:f}=t.gullet.consumeArg();return d&&f.unshift(d),(r==="\\edef"||r==="\\xdef")&&(f=t.gullet.expandTokens(f),f.reverse()),t.gullet.macros.set(a,{tokens:f,numArgs:u,delimiters:g},r===Gl[r]),{type:"internal",mode:t.mode}}});pe({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=Tm(t.gullet.popToken());t.gullet.consumeSpaces();var a=N8(t);return Am(t,s,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});pe({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=Tm(t.gullet.popToken()),a=t.gullet.popToken(),u=t.gullet.popToken();return Am(t,s,u,r==="\\\\globalfuture"),t.gullet.pushToken(u),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var Mo=function(t,r,s){var a=Je.math[t]&&Je.math[t].replace,u=ru(a||t,r,s);if(!u)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return u},du=function(t,r,s,a){var u=s.havingBaseStyle(r),d=re(a.concat(u.sizingClasses(s)),[t],s),g=u.sizeMultiplier/s.sizeMultiplier;return d.height*=g,d.depth*=g,d.maxFontSize=u.sizeMultiplier,d},Mm=function(t,r,s){var a=r.havingBaseStyle(s),u=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=ce(u),t.height-=u,t.depth+=u},I8=function(t,r,s,a,u,d){var g=Bn(t,"Main-Regular",u,a),f=du(g,r,a,d);return Mm(f,a,r),f},F8=function(t,r,s,a){return Bn(t,"Size"+r+"-Regular",s,a)},Pm=function(t,r,s,a,u,d){var g=F8(t,r,u,a),f=du(re(["delimsizing","size"+r],[g],a),De.TEXT,a,d);return s&&Mm(f,a,De.TEXT),f},Sl=function(t,r,s){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var u=re(["delimsizinginner",a],[re([],[Bn(t,r,s)])]);return{type:"elem",elem:u}},jl=function(t,r,s){var a=Pt["Size4-Regular"][t.charCodeAt(0)]?Pt["Size4-Regular"][t.charCodeAt(0)][4]:Pt["Size1-Regular"][t.charCodeAt(0)][4],u=new Pr("inner",n8(t,Math.round(1e3*r))),d=new Jt([u],{width:ce(a),height:ce(r),style:"width:"+ce(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),g=Cr([],[d],s);return g.height=r,g.style.height=ce(r),g.style.width=ce(a),{type:"elem",elem:g}},Ul=.008,l0={type:"kern",size:-1*Ul},L8=new Set(["|","\\lvert","\\rvert","\\vert"]),O8=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Cm=function(t,r,s,a,u,d){var g,f,v,b,_="",z=0;g=v=b=t,f=null;var k="Size1-Regular";t==="\\uparrow"?v=b="⏐":t==="\\Uparrow"?v=b="‖":t==="\\downarrow"?g=v="⏐":t==="\\Downarrow"?g=v="‖":t==="\\updownarrow"?(g="\\uparrow",v="⏐",b="\\downarrow"):t==="\\Updownarrow"?(g="\\Uparrow",v="‖",b="\\Downarrow"):L8.has(t)?(v="∣",_="vert",z=333):O8.has(t)?(v="∥",_="doublevert",z=556):t==="["||t==="\\lbrack"?(g="⎡",v="⎢",b="⎣",k="Size4-Regular",_="lbrack",z=667):t==="]"||t==="\\rbrack"?(g="⎤",v="⎥",b="⎦",k="Size4-Regular",_="rbrack",z=667):t==="\\lfloor"||t==="⌊"?(v=g="⎢",b="⎣",k="Size4-Regular",_="lfloor",z=667):t==="\\lceil"||t==="⌈"?(g="⎡",v=b="⎢",k="Size4-Regular",_="lceil",z=667):t==="\\rfloor"||t==="⌋"?(v=g="⎥",b="⎦",k="Size4-Regular",_="rfloor",z=667):t==="\\rceil"||t==="⌉"?(g="⎤",v=b="⎥",k="Size4-Regular",_="rceil",z=667):t==="("||t==="\\lparen"?(g="⎛",v="⎜",b="⎝",k="Size4-Regular",_="lparen",z=875):t===")"||t==="\\rparen"?(g="⎞",v="⎟",b="⎠",k="Size4-Regular",_="rparen",z=875):t==="\\{"||t==="\\lbrace"?(g="⎧",f="⎨",b="⎩",v="⎪",k="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(g="⎫",f="⎬",b="⎭",v="⎪",k="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(g="⎧",b="⎩",v="⎪",k="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(g="⎫",b="⎭",v="⎪",k="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(g="⎧",b="⎭",v="⎪",k="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(g="⎫",b="⎩",v="⎪",k="Size4-Regular");var M=Mo(g,k,u),P=M.height+M.depth,R=Mo(v,k,u),E=R.height+R.depth,F=Mo(b,k,u),G=F.height+F.depth,I=0,L=1;if(f!==null){var K=Mo(f,k,u);I=K.height+K.depth,L=2}var B=P+G+I,Z=Math.max(0,Math.ceil((r-B)/(L*E))),X=B+Z*L*E,me=a.fontMetrics().axisHeight;s&&(me*=a.sizeMultiplier);var be=X/2-me,Y=[];if(_.length>0){var de=X-P-G,ke=Math.round(X*1e3),Pe=t8(_,Math.round(de*1e3)),Ge=new Pr(_,Pe),Re=(z/1e3).toFixed(3)+"em",le=(ke/1e3).toFixed(3)+"em",we=new Jt([Ge],{width:Re,height:le,viewBox:"0 0 "+z+" "+ke}),ue=Cr([],[we],a);ue.height=ke/1e3,ue.style.width=Re,ue.style.height=le,Y.push({type:"elem",elem:ue})}else{if(Y.push(Sl(b,k,u)),Y.push(l0),f===null){var A=X-P-G+2*Ul;Y.push(jl(v,A,a))}else{var Q=(X-P-G-I)/2+2*Ul;Y.push(jl(v,Q,a)),Y.push(l0),Y.push(Sl(f,k,u)),Y.push(l0),Y.push(jl(v,Q,a))}Y.push(l0),Y.push(Sl(g,k,u))}var $e=a.havingBaseStyle(De.TEXT),Se=Qe({positionType:"bottom",positionData:be,children:Y});return du(re(["delimsizing","mult"],[Se],$e),De.TEXT,a,d)},ql=80,Tl=.08,Al=function(t,r,s,a,u){var d=e8(t,a,s),g=new Pr(t,d),f=new Jt([g],{width:"400em",height:ce(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Cr(["hide-tail"],[f],u)},H8=function(t,r){var s=r.havingBaseSizing(),a=Nm("\\surd",t*s.sizeMultiplier,Bm,s),u=s.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),g,f=0,v=0,b=0,_;return a.type==="small"?(b=1e3+1e3*d+ql,t<1?u=1:t<1.4&&(u=.7),f=(1+d+Tl)/u,v=(1+d)/u,g=Al("sqrtMain",f,b,d,r),g.style.minWidth="0.853em",_=.833/u):a.type==="large"?(b=(1e3+ql)*Co[a.size],v=(Co[a.size]+d)/u,f=(Co[a.size]+d+Tl)/u,g=Al("sqrtSize"+a.size,f,b,d,r),g.style.minWidth="1.02em",_=1/u):(f=t+d+Tl,v=t+d,b=Math.floor(1e3*t+d)+ql,g=Al("sqrtTall",f,b,d,r),g.style.minWidth="0.742em",_=1.056),g.height=v,g.style.height=ce(f),{span:g,advanceWidth:_,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*u}},Rm=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),W8=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Dm=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Co=[0,1.2,1.8,2.4,3],Em=function(t,r,s,a,u){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Rm.has(t)||Dm.has(t))return Pm(t,r,!1,s,a,u);if(W8.has(t))return Cm(t,Co[r],!1,s,a,u);throw new oe("Illegal delimiter: '"+t+"'")},G8=[{type:"small",style:De.SCRIPTSCRIPT},{type:"small",style:De.SCRIPT},{type:"small",style:De.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],U8=[{type:"small",style:De.SCRIPTSCRIPT},{type:"small",style:De.SCRIPT},{type:"small",style:De.TEXT},{type:"stack"}],Bm=[{type:"small",style:De.SCRIPTSCRIPT},{type:"small",style:De.SCRIPT},{type:"small",style:De.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],V8=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Nm=function(t,r,s,a){for(var u=Math.min(2,3-a.style.size),d=u;d<s.length&&s[d].type!=="stack";d++){var g=Mo(t,V8(s[d]),"math"),f=g.height+g.depth;if(s[d].type==="small"){var v=a.havingBaseStyle(s[d].style);f*=v.sizeMultiplier}if(f>r)return s[d]}return s[s.length-1]},Vl=function(t,r,s,a,u,d){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var g;Dm.has(t)?g=G8:Rm.has(t)?g=Bm:g=U8;var f=Nm(t,r,g,a);return f.type==="small"?I8(t,f.style,s,a,u,d):f.type==="large"?Pm(t,f.size,s,a,u,d):Cm(t,r,s,a,u,d)},Ml=function(t,r,s,a,u,d){var g=a.fontMetrics().axisHeight*a.sizeMultiplier,f=901,v=5/a.fontMetrics().ptPerEm,b=Math.max(r-g,s+g),_=Math.max(b/500*f,2*b-v);return Vl(t,_,!0,a,u,d)},wd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},K8=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function S0(o,t){var r=k0(o);if(r&&K8.has(r.text))return r;throw r?new oe("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",o):new oe("Invalid delimiter type '"+o.type+"'",o)}pe({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,t)=>{var r=S0(t[0],o);return{type:"delimsizing",mode:o.parser.mode,size:wd[o.funcName].size,mclass:wd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,t)=>o.delim==="."?re([o.mclass]):Em(o.delim,o.size,t,o.mode,[o.mclass]),mathmlBuilder:o=>{var t=[];o.delim!=="."&&t.push(pt(o.delim,o.mode));var r=new se("mo",t);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=ce(Co[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function _d(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}pe({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new oe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:S0(t[0],o).text,color:r}}});pe({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=S0(t[0],o),s=o.parser;++s.leftrightDepth;var a=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var u=Ie(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:a,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,t)=>{_d(o);for(var r=bn(o.body,t,!0,["mopen","mclose"]),s=0,a=0,u=!1,d=0;d<r.length;d++)r[d].isMiddle?u=!0:(s=Math.max(r[d].height,s),a=Math.max(r[d].depth,a));s*=t.sizeMultiplier,a*=t.sizeMultiplier;var g;if(o.left==="."?g=Eo(t,["mopen"]):g=Ml(o.left,s,a,t,o.mode,["mopen"]),r.unshift(g),u)for(var f=1;f<r.length;f++){var v=r[f],b=v.isMiddle;b&&(r[f]=Ml(b.delim,s,a,b.options,o.mode,[]))}var _;if(o.right===".")_=Eo(t,["mclose"]);else{var z=o.rightColor?t.withColor(o.rightColor):t;_=Ml(o.right,s,a,z,o.mode,["mclose"])}return r.push(_),re(["minner"],r,t)},mathmlBuilder:(o,t)=>{_d(o);var r=Qn(o.body,t);if(o.left!=="."){var s=new se("mo",[pt(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var a=new se("mo",[pt(o.right,o.mode)]);a.setAttribute("fence","true"),o.rightColor&&a.setAttribute("mathcolor",o.rightColor),r.push(a)}return au(r)}});pe({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=S0(t[0],o);if(!o.parser.leftrightDepth)throw new oe("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,t)=>{var r;if(o.delim===".")r=Eo(t,[]);else{r=Em(o.delim,1,t,o.mode,[]);var s={delim:o.delim,options:t};r.isMiddle=s}return r},mathmlBuilder:(o,t)=>{var r=o.delim==="\\vert"||o.delim==="|"?pt("|","text"):pt(o.delim,o.mode),s=new se("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var mu=(o,t)=>{var r=Li(Ve(o.body,t),t),s=o.label.slice(1),a=t.sizeMultiplier,u,d=0,g=er(o.body);if(s==="sout")u=re(["stretchy","sout"]),u.height=t.fontMetrics().defaultRuleThickness/a,d=-.5*t.fontMetrics().xHeight;else if(s==="phase"){var f=un({number:.6,unit:"pt"},t),v=un({number:.35,unit:"ex"},t),b=t.havingBaseSizing();a=a/b.sizeMultiplier;var _=r.height+r.depth+f+v;r.style.paddingLeft=ce(_/2+f);var z=Math.floor(1e3*_*a),k=Xv(z),M=new Jt([new Pr("phase",k)],{width:"400em",height:ce(z/1e3),viewBox:"0 0 400000 "+z,preserveAspectRatio:"xMinYMin slice"});u=Cr(["hide-tail"],[M],t),u.style.height=ce(_),d=r.depth+f+v}else{/cancel/.test(s)?g||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var P=0,R=0,E=0;/box/.test(s)?(E=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),P=t.fontMetrics().fboxsep+(s==="colorbox"?0:E),R=P):s==="angl"?(E=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),P=4*E,R=Math.max(0,.25-r.depth)):(P=g?.2:0,R=P),u=P8(r,s,P,R,t),/fbox|boxed|fcolorbox/.test(s)?(u.style.borderStyle="solid",u.style.borderWidth=ce(E)):s==="angl"&&E!==.049&&(u.style.borderTopWidth=ce(E),u.style.borderRightWidth=ce(E)),d=r.depth+R,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var F;if(o.backgroundColor)F=Qe({positionType:"individualShift",children:[{type:"elem",elem:u,shift:d},{type:"elem",elem:r,shift:0}]});else{var G=/cancel|phase/.test(s)?["svg-align"]:[];F=Qe({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:d,wrapperClasses:G}]})}return/cancel/.test(s)&&(F.height=r.height,F.depth=r.depth),/cancel/.test(s)&&!g?re(["mord","cancel-lap"],[F],t):re(["mord"],[F],t)},pu=(o,t)=>{var r=0,s=new se(o.label.includes("colorbox")?"mpadded":"menclose",[Ye(o.body,t)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);s.setAttribute("style","border: "+a+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};pe({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,t,r){var{parser:s,funcName:a}=o,u=Ie(t[0],"color-token").color,d=t[1];return{type:"enclose",mode:s.mode,label:a,backgroundColor:u,body:d}},htmlBuilder:mu,mathmlBuilder:pu});pe({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,t,r){var{parser:s,funcName:a}=o,u=Ie(t[0],"color-token").color,d=Ie(t[1],"color-token").color,g=t[2];return{type:"enclose",mode:s.mode,label:a,backgroundColor:d,borderColor:u,body:g}},htmlBuilder:mu,mathmlBuilder:pu});pe({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});pe({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"enclose",mode:r.mode,label:s,body:a}},htmlBuilder:mu,mathmlBuilder:pu});pe({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Im={};function Ct(o){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:d}=o,g={type:t,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},f=0;f<r.length;++f)Im[r[f]]=g;u&&(g0[t]=u),d&&(y0[t]=d)}var Fm={};function w(o,t){Fm[o]=t}function kd(o){var t=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),t.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return t}var j0=o=>{var t=o.parser.settings;if(!t.displayMode)throw new oe("{"+o.envName+"} can be used only in display mode.")},Q8=new Set(["gather","gather*"]);function fu(o){if(!o.includes("ed"))return!o.includes("*")}function Dr(o,t,r){var{hskipBeforeAndAfter:s,addJot:a,cols:u,arraystretch:d,colSeparationType:g,autoTag:f,singleRow:v,emptySingleRow:b,maxNumCols:_,leqno:z}=t;if(o.gullet.beginGroup(),v||o.gullet.macros.set("\\cr","\\\\\\relax"),!d){var k=o.gullet.expandMacroAsText("\\arraystretch");if(k==null)d=1;else if(d=parseFloat(k),!d||d<0)throw new oe("Invalid \\arraystretch: "+k)}o.gullet.beginGroup();var M=[],P=[M],R=[],E=[],F=f!=null?[]:void 0;function G(){f&&o.gullet.macros.set("\\@eqnsw","1",!0)}function I(){F&&(o.gullet.macros.get("\\df@tag")?(F.push(o.subparse([new nt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):F.push(!!f&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(G(),E.push(kd(o));;){var L=o.parseExpression(!1,v?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),L={type:"ordgroup",mode:o.mode,body:L},r&&(L={type:"styling",mode:o.mode,style:r,body:[L]}),M.push(L);var K=o.fetch().text;if(K==="&"){if(_&&M.length===_){if(v||g)throw new oe("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(K==="\\end"){I(),M.length===1&&L.type==="styling"&&L.body[0].body.length===0&&(P.length>1||!b)&&P.pop(),E.length<P.length+1&&E.push([]);break}else if(K==="\\\\"){o.consume();var B=void 0;o.gullet.future().text!==" "&&(B=o.parseSizeGroup(!0)),R.push(B?B.value:null),I(),E.push(kd(o)),M=[],P.push(M),G()}else throw new oe("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:a,arraystretch:d,body:P,cols:u,rowGaps:R,hskipBeforeAndAfter:s,hLinesBeforeRow:E,colSeparationType:g,tags:F,leqno:z}}function hu(o){return o.slice(0,1)==="d"?"display":"text"}var Rt=function(t,r){var s,a,u=t.body.length,d=t.hLinesBeforeRow,g=0,f=new Array(u),v=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),_=1/r.fontMetrics().ptPerEm,z=5*_;if(t.colSeparationType&&t.colSeparationType==="small"){var k=r.havingStyle(De.SCRIPT).sizeMultiplier;z=.2778*(k/r.sizeMultiplier)}var M=t.colSeparationType==="CD"?un({number:3,unit:"ex"},r):12*_,P=3*_,R=t.arraystretch*M,E=.7*R,F=.3*R,G=0;function I(Zn){for(var Ln=0;Ln<Zn.length;++Ln)Ln>0&&(G+=.25),v.push({pos:G,isDashed:Zn[Ln]})}for(I(d[0]),s=0;s<t.body.length;++s){var L=t.body[s],K=E,B=F;g<L.length&&(g=L.length);var Z=new Array(L.length);for(a=0;a<L.length;++a){var X=Ve(L[a],r);B<X.depth&&(B=X.depth),K<X.height&&(K=X.height),Z[a]=X}var me=t.rowGaps[s],be=0;me&&(be=un(me,r),be>0&&(be+=F,B<be&&(B=be),be=0)),t.addJot&&(B+=P),Z.height=K,Z.depth=B,G+=K,Z.pos=G,G+=B+be,f[s]=Z,I(d[s+1])}var Y=G/2+r.fontMetrics().axisHeight,de=t.cols||[],ke=[],Pe,Ge,Re=[];if(t.tags&&t.tags.some(Zn=>Zn))for(s=0;s<u;++s){var le=f[s],we=le.pos-Y,ue=t.tags[s],A=void 0;ue===!0?A=re(["eqn-num"],[],r):ue===!1?A=re([],[],r):A=re([],bn(ue,r,!0),r),A.depth=le.depth,A.height=le.height,Re.push({type:"elem",elem:A,shift:we})}for(a=0,Ge=0;a<g||Ge<de.length;++a,++Ge){for(var Q=de[Ge]||{},$e=!0;Q.type==="separator";){if($e||(Pe=re(["arraycolsep"],[]),Pe.style.width=ce(r.fontMetrics().doubleRuleSep),ke.push(Pe)),Q.separator==="|"||Q.separator===":"){var Se=Q.separator==="|"?"solid":"dashed",ze=re(["vertical-separator"],[],r);ze.style.height=ce(G),ze.style.borderRightWidth=ce(b),ze.style.borderRightStyle=Se,ze.style.margin="0 "+ce(-b/2);var Ee=G-Y;Ee&&(ze.style.verticalAlign=ce(-Ee)),ke.push(ze)}else throw new oe("Invalid separator type: "+Q.separator);Ge++,Q=de[Ge]||{},$e=!1}if(!(a>=g)){var Fe=void 0;if(a>0||t.hskipBeforeAndAfter){var Be;Fe=(Be=Q.pregap)!=null?Be:z,Fe!==0&&(Pe=re(["arraycolsep"],[]),Pe.style.width=ce(Fe),ke.push(Pe))}var ge=[];for(s=0;s<u;++s){var Ne=f[s],je=Ne[a];if(je){var Fn=Ne.pos-Y;je.depth=Ne.depth,je.height=Ne.height,ge.push({type:"elem",elem:je,shift:Fn})}}if(ge=Qe({positionType:"individualShift",children:ge}),ge=re(["col-align-"+(Q.align||"c")],[ge]),ke.push(ge),a<g-1||t.hskipBeforeAndAfter){var wn;Fe=(wn=Q.postgap)!=null?wn:z,Fe!==0&&(Pe=re(["arraycolsep"],[]),Pe.style.width=ce(Fe),ke.push(Pe))}}}if(f=re(["mtable"],ke),v.length>0){for(var bt=Fi("hline",r,b),ai=Fi("hdashline",r,b),Et=[{type:"elem",elem:f,shift:0}];v.length>0;){var rr=v.pop(),Er=rr.pos-Y;rr.isDashed?Et.push({type:"elem",elem:ai,shift:Er}):Et.push({type:"elem",elem:bt,shift:Er})}f=Qe({positionType:"individualShift",children:Et})}if(Re.length===0)return re(["mord"],[f],r);var wt=Qe({positionType:"individualShift",children:Re});return wt=re(["tag"],[wt],r),tr([f,wt])},Z8={c:"center ",l:"left ",r:"right "},Dt=function(t,r){for(var s=[],a=new se("mtd",[],["mtr-glue"]),u=new se("mtd",[],["mml-eqn-num"]),d=0;d<t.body.length;d++){for(var g=t.body[d],f=[],v=0;v<g.length;v++)f.push(new se("mtd",[Ye(g[v],r)]));t.tags&&t.tags[d]&&(f.unshift(a),f.push(a),t.leqno?f.unshift(u):f.push(u)),s.push(new se("mtr",f))}var b=new se("mtable",s),_=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);b.setAttribute("rowspacing",ce(_));var z="",k="";if(t.cols&&t.cols.length>0){var M=t.cols,P="",R=!1,E=0,F=M.length;M[0].type==="separator"&&(z+="top ",E=1),M[M.length-1].type==="separator"&&(z+="bottom ",F-=1);for(var G=E;G<F;G++)M[G].type==="align"?(k+=Z8[M[G].align],R&&(P+="none "),R=!0):M[G].type==="separator"&&R&&(P+=M[G].separator==="|"?"solid ":"dashed ",R=!1);b.setAttribute("columnalign",k.trim()),/[sd]/.test(P)&&b.setAttribute("columnlines",P.trim())}if(t.colSeparationType==="align"){for(var I=t.cols||[],L="",K=1;K<I.length;K++)L+=K%2?"0em ":"1em ";b.setAttribute("columnspacing",L.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var B="",Z=t.hLinesBeforeRow;z+=Z[0].length>0?"left ":"",z+=Z[Z.length-1].length>0?"right ":"";for(var X=1;X<Z.length-1;X++)B+=Z[X].length===0?"none ":Z[X][0]?"dashed ":"solid ";return/[sd]/.test(B)&&b.setAttribute("rowlines",B.trim()),z!==""&&(b=new se("menclose",[b]),b.setAttribute("notation",z.trim())),t.arraystretch&&t.arraystretch<1&&(b=new se("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},Lm=function(t,r){t.envName.includes("ed")||j0(t);var s=[],a=t.envName.includes("at")?"alignat":"align",u=t.envName==="split",d=Dr(t.parser,{cols:s,addJot:!0,autoTag:u?void 0:fu(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:u?2:void 0,leqno:t.parser.settings.leqno},"display"),g,f=0,v={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",_=0;_<r[0].body.length;_++){var z=Ie(r[0].body[_],"textord");b+=z.text}g=Number(b),f=g*2}var k=!f;d.body.forEach(function(E){for(var F=1;F<E.length;F+=2){var G=Ie(E[F],"styling"),I=Ie(G.body[0],"ordgroup");I.body.unshift(v)}if(k)f<E.length&&(f=E.length);else{var L=E.length/2;if(g<L)throw new oe("Too many math in a row: "+("expected "+g+", but got "+L),E[0])}});for(var M=0;M<f;++M){var P="r",R=0;M%2===1?P="l":M>0&&k&&(R=1),s[M]={type:"align",align:P,pregap:R,postgap:0}}return d.colSeparationType=k?"align":"alignat",d};Ct({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,t){var r=k0(t[0]),s=r?[t[0]]:Ie(t[0],"ordgroup").body,a=s.map(function(d){var g=uu(d),f=g.text;if("lcr".includes(f))return{type:"align",align:f};if(f==="|")return{type:"separator",separator:"|"};if(f===":")return{type:"separator",separator:":"};throw new oe("Unknown column alignment: "+f,d)}),u={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Dr(o.parser,u,hu(o.envName))},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var a=o.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new oe("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),s.cols=[{type:"align",align:r}]}}var u=Dr(o.parser,s,hu(o.envName)),d=Math.max(0,...u.body.map(g=>g.length));return u.cols=new Array(d).fill({type:"align",align:r}),t?{type:"leftright",mode:o.mode,body:[u],left:t[0],right:t[1],rightColor:void 0}:u},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var t={arraystretch:.5},r=Dr(o.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["subarray"],props:{numArgs:1},handler(o,t){var r=k0(t[0]),s=r?[t[0]]:Ie(t[0],"ordgroup").body,a=s.map(function(d){var g=uu(d),f=g.text;if("lc".includes(f))return{type:"align",align:f};throw new oe("Unknown column alignment: "+f,d)});if(a.length>1)throw new oe("{subarray} can contain only one column");var u={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=Dr(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new oe("{subarray} can contain only one column");return u},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Dr(o.parser,t,hu(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Lm,htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){Q8.has(o.envName)&&j0(o);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:fu(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Dr(o.parser,t,"display")},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Lm,htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){j0(o);var t={autoTag:fu(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Dr(o.parser,t,"display")},htmlBuilder:Rt,mathmlBuilder:Dt});Ct({type:"array",names:["CD"],props:{numArgs:0},handler(o){return j0(o),B8(o.parser)},htmlBuilder:Rt,mathmlBuilder:Dt});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");pe({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,t){throw new oe(o.funcName+" valid only within array environment")}});var zd=Im;pe({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];if(a.type!=="ordgroup")throw new oe("Invalid environment name",a);for(var u="",d=0;d<a.body.length;++d)u+=Ie(a.body[d],"textord").text;if(s==="\\begin"){if(!zd.hasOwnProperty(u))throw new oe("No such environment: "+u,a);var g=zd[u],{args:f,optArgs:v}=r.parseArguments("\\begin{"+u+"}",g),b={mode:r.mode,envName:u,parser:r},_=g.handler(b,f,v);r.expect("\\end",!1);var z=r.nextToken,k=Ie(r.parseFunction(),"environment");if(k.name!==u)throw new oe("Mismatch: \\begin{"+u+"} matched by \\end{"+k.name+"}",z);return _}return{type:"environment",mode:r.mode,name:u,nameGroup:a}}});var Om=(o,t)=>{var r=o.font,s=t.withFont(r);return Ve(o.body,s)},Hm=(o,t)=>{var r=o.font,s=t.withFont(r);return Ye(o.body,s)},Sd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};pe({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=v0(t[0]),u=s;return u in Sd&&(u=Sd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:a}},htmlBuilder:Om,mathmlBuilder:Hm});pe({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"mclass",mode:r.mode,mclass:z0(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:er(s)}}});pe({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s,breakOnTokenText:a}=o,{mode:u}=r,d=r.parseExpression(!0,a),g="math"+s.slice(1);return{type:"font",mode:u,font:g,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:Om,mathmlBuilder:Hm});var Y8=(o,t)=>{var r=t.style,s=r.fracNum(),a=r.fracDen(),u;u=t.havingStyle(s);var d=Ve(o.numer,u,t);if(o.continued){var g=8.5/t.fontMetrics().ptPerEm,f=3.5/t.fontMetrics().ptPerEm;d.height=d.height<g?g:d.height,d.depth=d.depth<f?f:d.depth}u=t.havingStyle(a);var v=Ve(o.denom,u,t),b,_,z;o.hasBarLine?(o.barSize?(_=un(o.barSize,t),b=Fi("frac-line",t,_)):b=Fi("frac-line",t),_=b.height,z=b.height):(b=null,_=0,z=t.fontMetrics().defaultRuleThickness);var k,M,P;r.size===De.DISPLAY.size?(k=t.fontMetrics().num1,_>0?M=3*z:M=7*z,P=t.fontMetrics().denom1):(_>0?(k=t.fontMetrics().num2,M=z):(k=t.fontMetrics().num3,M=3*z),P=t.fontMetrics().denom2);var R;if(b){var F=t.fontMetrics().axisHeight;k-d.depth-(F+.5*_)<M&&(k+=M-(k-d.depth-(F+.5*_))),F-.5*_-(v.height-P)<M&&(P+=M-(F-.5*_-(v.height-P)));var G=-(F-.5*_);R=Qe({positionType:"individualShift",children:[{type:"elem",elem:v,shift:P},{type:"elem",elem:b,shift:G},{type:"elem",elem:d,shift:-k}]})}else{var E=k-d.depth-(v.height-P);E<M&&(k+=.5*(M-E),P+=.5*(M-E)),R=Qe({positionType:"individualShift",children:[{type:"elem",elem:v,shift:P},{type:"elem",elem:d,shift:-k}]})}u=t.havingStyle(r),R.height*=u.sizeMultiplier/t.sizeMultiplier,R.depth*=u.sizeMultiplier/t.sizeMultiplier;var I;r.size===De.DISPLAY.size?I=t.fontMetrics().delim1:r.size===De.SCRIPTSCRIPT.size?I=t.havingStyle(De.SCRIPT).fontMetrics().delim2:I=t.fontMetrics().delim2;var L,K;return o.leftDelim==null?L=Eo(t,["mopen"]):L=Vl(o.leftDelim,I,!0,t.havingStyle(r),o.mode,["mopen"]),o.continued?K=re([]):o.rightDelim==null?K=Eo(t,["mclose"]):K=Vl(o.rightDelim,I,!0,t.havingStyle(r),o.mode,["mclose"]),re(["mord"].concat(u.sizingClasses(t)),[L,re(["mfrac"],[R]),K],t)},X8=(o,t)=>{var r=new se("mfrac",[Ye(o.numer,t),Ye(o.denom,t)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=un(o.barSize,t);r.setAttribute("linethickness",ce(s))}if(o.leftDelim!=null||o.rightDelim!=null){var a=[];if(o.leftDelim!=null){var u=new se("mo",[new yn(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),a.push(u)}if(a.push(r),o.rightDelim!=null){var d=new se("mo",[new yn(o.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),a.push(d)}return au(a)}return r},Wm=(o,t)=>{if(!t)return o;var r={type:"styling",mode:o.mode,style:t,body:[o]};return r};pe({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0],u=t[1],d,g=null,f=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,g="(",f=")";break;case"\\\\bracefrac":d=!1,g="\\{",f="\\}";break;case"\\\\brackfrac":d=!1,g="[",f="]";break;default:throw new Error("Unrecognized genfrac command")}var v=s==="\\cfrac",b=null;return v||s.startsWith("\\d")?b="display":s.startsWith("\\t")&&(b="text"),Wm({type:"genfrac",mode:r.mode,numer:a,denom:u,continued:v,hasBarLine:d,leftDelim:g,rightDelim:f,barSize:null},b)},htmlBuilder:Y8,mathmlBuilder:X8});pe({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:t,funcName:r,token:s}=o,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:s}}});var jd=["display","text","script","scriptscript"],qd=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};pe({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,t){var{parser:r}=o,s=t[4],a=t[5],u=v0(t[0]),d=u.type==="atom"&&u.family==="open"?qd(u.text):null,g=v0(t[1]),f=g.type==="atom"&&g.family==="close"?qd(g.text):null,v=Ie(t[2],"size"),b,_=null;v.isBlank?b=!0:(_=v.value,b=_.number>0);var z=null,k=t[3];if(k.type==="ordgroup"){if(k.body.length>0){var M=Ie(k.body[0],"textord");z=jd[Number(M.text)]}}else k=Ie(k,"textord"),z=jd[Number(k.text)];return Wm({type:"genfrac",mode:r.mode,numer:s,denom:a,continued:!1,hasBarLine:b,barSize:_,leftDelim:d,rightDelim:f},z)}});pe({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,t){var{parser:r,funcName:s,token:a}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ie(t[0],"size").value,token:a}}});pe({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0],u=Ie(t[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var d=t[2],g=u.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:d,continued:!1,hasBarLine:g,barSize:u,leftDelim:null,rightDelim:null}}});var Gm=(o,t)=>{var r=t.style,s,a;o.type==="supsub"?(s=o.sup?Ve(o.sup,t.havingStyle(r.sup()),t):Ve(o.sub,t.havingStyle(r.sub()),t),a=Ie(o.base,"horizBrace")):a=Ie(o,"horizBrace");var u=Ve(a.base,t.havingBaseStyle(De.DISPLAY)),d=_0(a,t),g;if(a.isOver?(g=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:d}]}),g.children[0].children[0].children[1].classes.push("svg-align")):(g=Qe({positionType:"bottom",positionData:u.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:u}]}),g.children[0].children[0].children[0].classes.push("svg-align")),s){var f=re(["mord",a.isOver?"mover":"munder"],[g],t);a.isOver?g=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:f},{type:"kern",size:.2},{type:"elem",elem:s}]}):g=Qe({positionType:"bottom",positionData:f.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:f}]})}return re(["mord",a.isOver?"mover":"munder"],[g],t)},J8=(o,t)=>{var r=w0(o.label);return new se(o.isOver?"mover":"munder",[Ye(o.base,t),r])};pe({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:t[0]}},htmlBuilder:Gm,mathmlBuilder:J8});pe({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[1],a=Ie(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:hn(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,t)=>{var r=bn(o.body,t,!1);return g8(o.href,[],r,t)},mathmlBuilder:(o,t)=>{var r=Rr(o.body,t);return r instanceof se||(r=new se("mrow",[r])),r.setAttribute("href",o.href),r}});pe({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=Ie(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var a=[],u=0;u<s.length;u++){var d=s[u];d==="~"&&(d="\\textasciitilde"),a.push({type:"textord",mode:"text",text:d})}var g={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:s,body:hn(g)}}});pe({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,t){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:hn(t[0])}},htmlBuilder(o,t){var r=bn(o.body,t,!1);return tr(r)},mathmlBuilder(o,t){return new se("mrow",Qn(o.body,t))}});pe({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s,token:a}=o,u=Ie(t[0],"raw").string,d=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var g,f={};switch(s){case"\\htmlClass":f.class=u,g={command:"\\htmlClass",class:u};break;case"\\htmlId":f.id=u,g={command:"\\htmlId",id:u};break;case"\\htmlStyle":f.style=u,g={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var v=u.split(","),b=0;b<v.length;b++){var _=v[b],z=_.indexOf("=");if(z<0)throw new oe("\\htmlData key/value '"+_+"' missing equals sign");var k=_.slice(0,z),M=_.slice(z+1);f["data-"+k.trim()]=M}g={command:"\\htmlData",attributes:f};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(g)?{type:"html",mode:r.mode,attributes:f,body:hn(d)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,t)=>{var r=bn(o.body,t,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var a=re(s,r,t);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&a.setAttribute(u,o.attributes[u]);return a},mathmlBuilder:(o,t)=>Rr(o.body,t)});pe({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:hn(t[0]),mathml:hn(t[1])}},htmlBuilder:(o,t)=>{var r=bn(o.html,t,!1);return tr(r)},mathmlBuilder:(o,t)=>Rr(o.mathml,t)});var Pl=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new oe("Invalid size: '"+t+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!um(s))throw new oe("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};pe({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,t,r)=>{var{parser:s}=o,a={number:0,unit:"em"},u={number:.9,unit:"em"},d={number:0,unit:"em"},g="";if(r[0])for(var f=Ie(r[0],"raw").string,v=f.split(","),b=0;b<v.length;b++){var _=v[b].split("=");if(_.length===2){var z=_[1].trim();switch(_[0].trim()){case"alt":g=z;break;case"width":a=Pl(z);break;case"height":u=Pl(z);break;case"totalheight":d=Pl(z);break;default:throw new oe("Invalid key: '"+_[0]+"' in \\includegraphics.")}}}var k=Ie(t[0],"url").url;return g===""&&(g=k,g=g.replace(/^.*[\\/]/,""),g=g.substring(0,g.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:k})?{type:"includegraphics",mode:s.mode,alt:g,width:a,height:u,totalheight:d,src:k}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,t)=>{var r=un(o.height,t),s=0;o.totalheight.number>0&&(s=un(o.totalheight,t)-r);var a=0;o.width.number>0&&(a=un(o.width,t));var u={height:ce(r+s)};a>0&&(u.width=ce(a)),s>0&&(u.verticalAlign=ce(-s));var d=new l8(o.src,o.alt,u);return d.height=r,d.depth=s,d},mathmlBuilder:(o,t)=>{var r=new se("mglyph",[]);r.setAttribute("alt",o.alt);var s=un(o.height,t),a=0;if(o.totalheight.number>0&&(a=un(o.totalheight,t)-s,r.setAttribute("valign",ce(-a))),r.setAttribute("height",ce(s+a)),o.width.number>0){var u=un(o.width,t);r.setAttribute("width",ce(u))}return r.setAttribute("src",o.src),r}});pe({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:s}=o,a=Ie(t[0],"size");if(r.settings.strict){var u=s[1]==="m",d=a.value.unit==="mu";u?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(o,t){return hm(o.dimension,t)},mathmlBuilder(o,t){var r=un(o.dimension,t);return new bm(r)}});pe({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:a}},htmlBuilder:(o,t)=>{var r;o.alignment==="clap"?(r=re([],[Ve(o.body,t)]),r=re(["inner"],[r],t)):r=re(["inner"],[Ve(o.body,t)]);var s=re(["fix"],[]),a=re([o.alignment],[r,s],t),u=re(["strut"]);return u.style.height=ce(a.height+a.depth),a.depth&&(u.style.verticalAlign=ce(-a.depth)),a.children.unshift(u),a=re(["thinbox"],[a],t),re(["mord","vbox"],[a],t)},mathmlBuilder:(o,t)=>{var r=new se("mpadded",[Ye(o.body,t)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});pe({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){var{funcName:r,parser:s}=o,a=s.mode;s.switchMode("math");var u=r==="\\("?"\\)":"$",d=s.parseExpression(!1,u);return s.expect(u),s.switchMode(a),{type:"styling",mode:s.mode,style:"text",body:d}}});pe({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){throw new oe("Mismatched "+o.funcName)}});var Td=(o,t)=>{switch(t.style.size){case De.DISPLAY.size:return o.display;case De.TEXT.size:return o.text;case De.SCRIPT.size:return o.script;case De.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};pe({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:hn(t[0]),text:hn(t[1]),script:hn(t[2]),scriptscript:hn(t[3])}},htmlBuilder:(o,t)=>{var r=Td(o,t),s=bn(r,t,!1);return tr(s)},mathmlBuilder:(o,t)=>{var r=Td(o,t);return Rr(r,t)}});var Um=(o,t,r,s,a,u,d)=>{o=re([],[o]);var g=r&&er(r),f,v;if(t){var b=Ve(t,s.havingStyle(a.sup()),s);v={elem:b,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var _=Ve(r,s.havingStyle(a.sub()),s);f={elem:_,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-_.height)}}var z;if(v&&f){var k=s.fontMetrics().bigOpSpacing5+f.elem.height+f.elem.depth+f.kern+o.depth+d;z=Qe({positionType:"bottom",positionData:k,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:f.elem,marginLeft:ce(-u)},{type:"kern",size:f.kern},{type:"elem",elem:o},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:ce(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(f){var M=o.height-d;z=Qe({positionType:"top",positionData:M,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:f.elem,marginLeft:ce(-u)},{type:"kern",size:f.kern},{type:"elem",elem:o}]})}else if(v){var P=o.depth+d;z=Qe({positionType:"bottom",positionData:P,children:[{type:"elem",elem:o},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:ce(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var R=[z];if(f&&u!==0&&!g){var E=re(["mspace"],[],s);E.style.marginRight=ce(u),R.unshift(E)}return re(["mop","op-limits"],R,s)},Vm=new Set(["\\smallint"]),Hi=(o,t)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Ie(o.base,"op"),a=!0):u=Ie(o,"op");var d=t.style,g=!1;d.size===De.DISPLAY.size&&u.symbol&&!Vm.has(u.name)&&(g=!0);var f;if(u.symbol){var v=g?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),f=Bn(u.name,v,"math",t,["mop","op-symbol",g?"large-op":"small-op"]),b.length>0){var _=f.italic,z=ym(b+"Size"+(g?"2":"1"),t);f=Qe({positionType:"individualShift",children:[{type:"elem",elem:f,shift:0},{type:"elem",elem:z,shift:g?.08:0}]}),u.name="\\"+b,f.classes.unshift("mop"),f.italic=_}}else if(u.body){var k=bn(u.body,t,!0);k.length===1&&k[0]instanceof mt?(f=k[0],f.classes[0]="mop"):f=re(["mop"],k,t)}else{for(var M=[],P=1;P<u.name.length;P++)M.push(ou(u.name[P],u.mode,t));f=re(["mop"],M,t)}var R=0,E=0;return(f instanceof mt||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(R=(f.height-f.depth)/2-t.fontMetrics().axisHeight,E=f.italic),a?Um(f,r,s,t,d,E,R):(R&&(f.style.position="relative",f.style.top=ce(R)),f)},Fo=(o,t)=>{var r;if(o.symbol)r=new se("mo",[pt(o.name,o.mode)]),Vm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new se("mo",Qn(o.body,t));else{r=new se("mi",[new yn(o.name.slice(1))]);var s=new se("mo",[pt("⁡","text")]);o.parentIsSupSub?r=new se("mrow",[r,s]):r=$m([r,s])}return r},ex={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};pe({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=s;return a.length===1&&(a=ex[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Hi,mathmlBuilder:Fo});pe({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:hn(s)}},htmlBuilder:Hi,mathmlBuilder:Fo});var nx={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};pe({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Hi,mathmlBuilder:Fo});pe({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Hi,mathmlBuilder:Fo});pe({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:t,funcName:r}=o,s=r;return s.length===1&&(s=nx[s]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Hi,mathmlBuilder:Fo});var Km=(o,t)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Ie(o.base,"operatorname"),a=!0):u=Ie(o,"operatorname");var d;if(u.body.length>0){for(var g=u.body.map(_=>{var z=_.text;return typeof z=="string"?{type:"textord",mode:_.mode,text:z}:_}),f=bn(g,t.withFont("mathrm"),!0),v=0;v<f.length;v++){var b=f[v];b instanceof mt&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=re(["mop"],f,t)}else d=re(["mop"],[],t);return a?Um(d,r,s,t,t.style,0,0):d},tx=(o,t)=>{for(var r=Qn(o.body,t.withFont("mathrm")),s=!0,a=0;a<r.length;a++){var u=r[a];if(!(u instanceof bm))if(u instanceof se)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=u.children[0];u.children.length===1&&d instanceof yn?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var g=r.map(b=>b.toText()).join("");r=[new yn(g)]}var f=new se("mi",r);f.setAttribute("mathvariant","normal");var v=new se("mo",[pt("⁡","text")]);return o.parentIsSupSub?new se("mrow",[f,v]):$m([f,v])};pe({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"operatorname",mode:r.mode,body:hn(a),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Km,mathmlBuilder:tx});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");si({type:"ordgroup",htmlBuilder(o,t){return o.semisimple?tr(bn(o.body,t,!1)):re(["mord"],bn(o.body,t,!0),t)},mathmlBuilder(o,t){return Rr(o.body,t,!0)}});pe({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,t){var{parser:r}=o,s=t[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,t){var r=Ve(o.body,t.havingCrampedStyle()),s=Fi("overline-line",t),a=t.fontMetrics().defaultRuleThickness,u=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}]});return re(["mord","overline"],[u],t)},mathmlBuilder(o,t){var r=new se("mo",[new yn("‾")]);r.setAttribute("stretchy","true");var s=new se("mover",[Ye(o.body,t),r]);return s.setAttribute("accent","true"),s}});pe({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"phantom",mode:r.mode,body:hn(s)}},htmlBuilder:(o,t)=>{var r=bn(o.body,t.withPhantom(),!1);return tr(r)},mathmlBuilder:(o,t)=>{var r=Qn(o.body,t);return new se("mphantom",r)}});pe({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,t)=>{var r=re([],[Ve(o.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),re(["mord"],[r],t)},mathmlBuilder:(o,t)=>{var r=Qn(hn(o.body),t),s=new se("mphantom",r),a=new se("mpadded",[s]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});pe({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,t)=>{var r=re(["inner"],[Ve(o.body,t.withPhantom())]),s=re(["fix"],[]);return re(["mord","rlap"],[r,s],t)},mathmlBuilder:(o,t)=>{var r=Qn(hn(o.body),t),s=new se("mphantom",r),a=new se("mpadded",[s]);return a.setAttribute("width","0px"),a}});pe({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o,s=Ie(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:s,body:a}},htmlBuilder(o,t){var r=Ve(o.body,t),s=un(o.dy,t);return Qe({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){var r=new se("mpadded",[Ye(o.body,t)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});pe({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:t}=o;return{type:"internal",mode:t.mode}}});pe({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,t,r){var{parser:s}=o,a=r[0],u=Ie(t[0],"size"),d=Ie(t[1],"size");return{type:"rule",mode:s.mode,shift:a&&Ie(a,"size").value,width:u.value,height:d.value}},htmlBuilder(o,t){var r=re(["mord","rule"],[],t),s=un(o.width,t),a=un(o.height,t),u=o.shift?un(o.shift,t):0;return r.style.borderRightWidth=ce(s),r.style.borderTopWidth=ce(a),r.style.bottom=ce(u),r.width=s,r.height=a+u,r.depth=-u,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(o,t){var r=un(o.width,t),s=un(o.height,t),a=o.shift?un(o.shift,t):0,u=t.color&&t.getColor()||"black",d=new se("mspace");d.setAttribute("mathbackground",u),d.setAttribute("width",ce(r)),d.setAttribute("height",ce(s));var g=new se("mpadded",[d]);return a>=0?g.setAttribute("height",ce(a)):(g.setAttribute("height",ce(a)),g.setAttribute("depth",ce(-a))),g.setAttribute("voffset",ce(a)),g}});function Qm(o,t,r){for(var s=bn(o,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,u=0;u<s.length;u++){var d=s[u].classes.indexOf("sizing");d<0?Array.prototype.push.apply(s[u].classes,t.sizingClasses(r)):s[u].classes[d+1]==="reset-size"+t.size&&(s[u].classes[d+1]="reset-size"+r.size),s[u].height*=a,s[u].depth*=a}return tr(s)}var Ad=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],rx=(o,t)=>{var r=t.havingSize(o.size);return Qm(o.body,r,t)};pe({type:"sizing",names:Ad,props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:Ad.indexOf(s)+1,body:u}},htmlBuilder:rx,mathmlBuilder:(o,t)=>{var r=t.havingSize(o.size),s=Qn(o.body,r),a=new se("mstyle",s);return a.setAttribute("mathsize",ce(r.sizeMultiplier)),a}});pe({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,t,r)=>{var{parser:s}=o,a=!1,u=!1,d=r[0]&&Ie(r[0],"ordgroup");if(d)for(var g="",f=0;f<d.body.length;++f){var v=d.body[f];if(g=v.text,g==="t")a=!0;else if(g==="b")u=!0;else{a=!1,u=!1;break}}else a=!0,u=!0;var b=t[0];return{type:"smash",mode:s.mode,body:b,smashHeight:a,smashDepth:u}},htmlBuilder:(o,t)=>{var r=re([],[Ve(o.body,t)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var u=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return re(["mord"],[u],t)},mathmlBuilder:(o,t)=>{var r=new se("mpadded",[Ye(o.body,t)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});pe({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:s}=o,a=r[0],u=t[0];return{type:"sqrt",mode:s.mode,body:u,index:a}},htmlBuilder(o,t){var r=Ve(o.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Li(r,t);var s=t.fontMetrics(),a=s.defaultRuleThickness,u=a;t.style.id<De.TEXT.id&&(u=t.fontMetrics().xHeight);var d=a+u/4,g=r.height+r.depth+d+a,{span:f,ruleWidth:v,advanceWidth:b}=H8(g,t),_=f.height-v;_>r.height+r.depth+d&&(d=(d+_-r.height-r.depth)/2);var z=f.height-r.height-d-v;r.style.paddingLeft=ce(b);var k=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+z)},{type:"elem",elem:f},{type:"kern",size:v}]});if(o.index){var M=t.havingStyle(De.SCRIPTSCRIPT),P=Ve(o.index,M,t),R=.6*(k.height-k.depth),E=Qe({positionType:"shift",positionData:-R,children:[{type:"elem",elem:P}]}),F=re(["root"],[E]);return re(["mord","sqrt"],[F,k],t)}else return re(["mord","sqrt"],[k],t)},mathmlBuilder(o,t){var{body:r,index:s}=o;return s?new se("mroot",[Ye(r,t),Ye(s,t)]):new se("msqrt",[Ye(r,t)])}});var Md={display:De.DISPLAY,text:De.TEXT,script:De.SCRIPT,scriptscript:De.SCRIPTSCRIPT};pe({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,t){var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!0,r),d=s.slice(1,s.length-5);return{type:"styling",mode:a.mode,style:d,body:u}},htmlBuilder(o,t){var r=Md[o.style],s=t.havingStyle(r).withFont("");return Qm(o.body,s,t)},mathmlBuilder(o,t){var r=Md[o.style],s=t.havingStyle(r),a=Qn(o.body,s),u=new se("mstyle",a),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},g=d[o.style];return u.setAttribute("scriptlevel",g[0]),u.setAttribute("displaystyle",g[1]),u}});var ix=function(t,r){var s=t.base;if(s)if(s.type==="op"){var a=s.limits&&(r.style.size===De.DISPLAY.size||s.alwaysHandleSupSub);return a?Hi:null}else if(s.type==="operatorname"){var u=s.alwaysHandleSupSub&&(r.style.size===De.DISPLAY.size||s.limits);return u?Km:null}else{if(s.type==="accent")return er(s.base)?cu:null;if(s.type==="horizBrace"){var d=!t.sub;return d===s.isOver?Gm:null}else return null}else return null};si({type:"supsub",htmlBuilder(o,t){var r=ix(o,t);if(r)return r(o,t);var{base:s,sup:a,sub:u}=o,d=Ve(s,t),g,f,v=t.fontMetrics(),b=0,_=0,z=s&&er(s);if(a){var k=t.havingStyle(t.style.sup());g=Ve(a,k,t),z||(b=d.height-k.fontMetrics().supDrop*k.sizeMultiplier/t.sizeMultiplier)}if(u){var M=t.havingStyle(t.style.sub());f=Ve(u,M,t),z||(_=d.depth+M.fontMetrics().subDrop*M.sizeMultiplier/t.sizeMultiplier)}var P;t.style===De.DISPLAY?P=v.sup1:t.style.cramped?P=v.sup3:P=v.sup2;var R=t.sizeMultiplier,E=ce(.5/v.ptPerEm/R),F=null;if(f){var G=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(d instanceof mt||G)&&(F=ce(-d.italic))}var I;if(g&&f){b=Math.max(b,P,g.depth+.25*v.xHeight),_=Math.max(_,v.sub2);var L=v.defaultRuleThickness,K=4*L;if(b-g.depth-(f.height-_)<K){_=K-(b-g.depth)+f.height;var B=.8*v.xHeight-(b-g.depth);B>0&&(b+=B,_-=B)}var Z=[{type:"elem",elem:f,shift:_,marginRight:E,marginLeft:F},{type:"elem",elem:g,shift:-b,marginRight:E}];I=Qe({positionType:"individualShift",children:Z})}else if(f){_=Math.max(_,v.sub1,f.height-.8*v.xHeight);var X=[{type:"elem",elem:f,marginLeft:F,marginRight:E}];I=Qe({positionType:"shift",positionData:_,children:X})}else if(g)b=Math.max(b,P,g.depth+.25*v.xHeight),I=Qe({positionType:"shift",positionData:-b,children:[{type:"elem",elem:g,marginRight:E}]});else throw new Error("supsub must have either sup or sub.");var me=Hl(d,"right")||"mord";return re([me],[d,re(["msupsub"],[I])],t)},mathmlBuilder(o,t){var r=!1,s,a;o.base&&o.base.type==="horizBrace"&&(a=!!o.sup,a===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Ye(o.base,t)];o.sub&&u.push(Ye(o.sub,t)),o.sup&&u.push(Ye(o.sup,t));var d;if(r)d=s?"mover":"munder";else if(o.sub)if(o.sup){var v=o.base;v&&v.type==="op"&&v.limits&&t.style===De.DISPLAY||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(t.style===De.DISPLAY||v.limits)?d="munderover":d="msubsup"}else{var f=o.base;f&&f.type==="op"&&f.limits&&(t.style===De.DISPLAY||f.alwaysHandleSupSub)||f&&f.type==="operatorname"&&f.alwaysHandleSupSub&&(f.limits||t.style===De.DISPLAY)?d="munder":d="msub"}else{var g=o.base;g&&g.type==="op"&&g.limits&&(t.style===De.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||t.style===De.DISPLAY)?d="mover":d="msup"}return new se(d,u)}});si({type:"atom",htmlBuilder(o,t){return ou(o.text,o.mode,t,["m"+o.family])},mathmlBuilder(o,t){var r=new se("mo",[pt(o.text,o.mode)]);if(o.family==="bin"){var s=lu(o,t);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Zm={mi:"italic",mn:"normal",mtext:"normal"};si({type:"mathord",htmlBuilder(o,t){return b0(o,t,"mathord")},mathmlBuilder(o,t){var r=new se("mi",[pt(o.text,o.mode,t)]),s=lu(o,t)||"italic";return s!==Zm[r.type]&&r.setAttribute("mathvariant",s),r}});si({type:"textord",htmlBuilder(o,t){return b0(o,t,"textord")},mathmlBuilder(o,t){var r=pt(o.text,o.mode,t),s=lu(o,t)||"normal",a;return o.mode==="text"?a=new se("mtext",[r]):/[0-9]/.test(o.text)?a=new se("mn",[r]):o.text==="\\prime"?a=new se("mo",[r]):a=new se("mi",[r]),s!==Zm[a.type]&&a.setAttribute("mathvariant",s),a}});var Cl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Rl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};si({type:"spacing",htmlBuilder(o,t){if(Rl.hasOwnProperty(o.text)){var r=Rl[o.text].className||"";if(o.mode==="text"){var s=b0(o,t,"textord");return s.classes.push(r),s}else return re(["mspace",r],[ou(o.text,o.mode,t)],t)}else{if(Cl.hasOwnProperty(o.text))return re(["mspace",Cl[o.text]],[],t);throw new oe('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,t){var r;if(Rl.hasOwnProperty(o.text))r=new se("mtext",[new yn(" ")]);else{if(Cl.hasOwnProperty(o.text))return new se("mspace");throw new oe('Unknown type of space "'+o.text+'"')}return r}});var Pd=()=>{var o=new se("mtd",[]);return o.setAttribute("width","50%"),o};si({type:"tag",mathmlBuilder(o,t){var r=new se("mtable",[new se("mtr",[Pd(),new se("mtd",[Rr(o.body,t)]),Pd(),new se("mtd",[Rr(o.tag,t)])])]);return r.setAttribute("width","100%"),r}});var Cd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Rd={"\\textbf":"textbf","\\textmd":"textmd"},ox={"\\textit":"textit","\\textup":"textup"},Dd=(o,t)=>{var r=o.font;if(r){if(Cd[r])return t.withTextFontFamily(Cd[r]);if(Rd[r])return t.withTextFontWeight(Rd[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(ox[r])};pe({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"text",mode:r.mode,body:hn(a),font:s}},htmlBuilder(o,t){var r=Dd(o,t),s=bn(o.body,r,!0);return re(["mord","text"],s,r)},mathmlBuilder(o,t){var r=Dd(o,t);return Rr(o.body,r)}});pe({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ve(o.body,t),s=Fi("underline-line",t),a=t.fontMetrics().defaultRuleThickness,u=Qe({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:s},{type:"kern",size:3*a},{type:"elem",elem:r}]});return re(["mord","underline"],[u],t)},mathmlBuilder(o,t){var r=new se("mo",[new yn("‾")]);r.setAttribute("stretchy","true");var s=new se("munder",[Ye(o.body,t),r]);return s.setAttribute("accentunder","true"),s}});pe({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ve(o.body,t),s=t.fontMetrics().axisHeight,a=.5*(r.height-s-(r.depth+s));return Qe({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){return new se("mpadded",[Ye(o.body,t)],["vcenter"])}});pe({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,t,r){throw new oe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,t){for(var r=Ed(o),s=[],a=t.havingStyle(t.style.text()),u=0;u<r.length;u++){var d=r[u];d==="~"&&(d="\\textasciitilde"),s.push(Bn(d,"Typewriter-Regular",o.mode,a,["mord","texttt"]))}return re(["mord","text"].concat(a.sizingClasses(t)),fm(s),a)},mathmlBuilder(o,t){var r=new yn(Ed(o)),s=new se("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var Ed=o=>o.body.replace(/ /g,o.star?"␣":" "),Ar=vm,Ym=`[ \r
	]`,sx="\\\\[a-zA-Z@]+",ax="\\\\[^\uD800-\uDFFF]",lx="("+sx+")"+Ym+"*",ux=`\\\\(
|[ \r	]+
?)[ \r	]*`,Kl="[̀-ͯ]",cx=new RegExp(Kl+"+$"),dx="("+Ym+"+)|"+(ux+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Kl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Kl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+lx)+("|"+ax+")");class Bd{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(dx,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new nt("EOF",new Kn(this,r,r));var s=this.tokenRegex.exec(t);if(s===null||s.index!==r)throw new oe("Unexpected character: '"+t[r]+"'",new nt(t[r],new Kn(this,r,r+1)));var a=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[a]===14){var u=t.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new nt(a,new Kn(this,r,this.tokenRegex.lastIndex))}}class mx{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new oe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,s){if(s===void 0&&(s=!1),s){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(t)&&(u[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var px=Fm;w("\\noexpand",function(o){var t=o.popToken();return o.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});w("\\expandafter",function(o){var t=o.popToken();return o.expandOnce(!0),{tokens:[t],numArgs:0}});w("\\@firstoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[0],numArgs:0}});w("\\@secondoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[1],numArgs:0}});w("\\@ifnextchar",function(o){var t=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(o){var t=o.consumeArgs(2);return o.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Nd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(o){var t=o.popToken(),r,s="";if(t.text==="'")r=8,t=o.popToken();else if(t.text==='"')r=16,t=o.popToken();else if(t.text==="`")if(t=o.popToken(),t.text[0]==="\\")s=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new oe("\\char` missing argument");s=t.text.charCodeAt(0)}else r=10;if(r){if(s=Nd[t.text],s==null||s>=r)throw new oe("Invalid base-"+r+" digit "+t.text);for(var a;(a=Nd[o.future().text])!=null&&a<r;)s*=r,s+=a,o.popToken()}return"\\@char{"+s+"}"});var gu=(o,t,r,s)=>{var a=o.consumeArg().tokens;if(a.length!==1)throw new oe("\\newcommand's first argument must be a macro name");var u=a[0].text,d=o.isDefined(u);if(d&&!t)throw new oe("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!d&&!r)throw new oe("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var g=0;if(a=o.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var f="",v=o.expandNextToken();v.text!=="]"&&v.text!=="EOF";)f+=v.text,v=o.expandNextToken();if(!f.match(/^\s*[0-9]+\s*$/))throw new oe("Invalid number of arguments: "+f);g=parseInt(f),a=o.consumeArg().tokens}return d&&s||o.macros.set(u,{tokens:a,numArgs:g}),""};w("\\newcommand",o=>gu(o,!1,!0,!1));w("\\renewcommand",o=>gu(o,!0,!1,!1));w("\\providecommand",o=>gu(o,!0,!0,!0));w("\\message",o=>{var t=o.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});w("\\errmessage",o=>{var t=o.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});w("\\show",o=>{var t=o.popToken(),r=t.text;return console.log(t,o.macros.get(r),Ar[r],Je.math[r],Je.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Id={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},fx=new Set(["bin","rel"]);w("\\dots",function(o){var t="\\dotso",r=o.expandAfterFuture().text;return r in Id?t=Id[r]:(r.slice(0,4)==="\\not"||r in Je.math&&fx.has(Je.math[r].group))&&(t="\\dotsb"),t});var yu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(o){var t=o.future().text;return t in yu?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(o){var t=o.future().text;return t in yu&&t!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(o){var t=o.future().text;return t in yu?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new oe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Xm=ce(Pt["Main-Regular"][84][1]-.7*Pt["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Xm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Xm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var Jm=o=>t=>{var r=t.consumeArg().tokens,s=t.consumeArg().tokens,a=t.consumeArg().tokens,u=t.consumeArg().tokens,d=t.macros.get("|"),g=t.macros.get("\\|");t.macros.beginGroup();var f=_=>z=>{o&&(z.macros.set("|",d),a.length&&z.macros.set("\\|",g));var k=_;if(!_&&a.length){var M=z.future();M.text==="|"&&(z.popToken(),k=!0)}return{tokens:k?a:s,numArgs:0}};t.macros.set("|",f(!1)),a.length&&t.macros.set("\\|",f(!0));var v=t.consumeArg().tokens,b=t.expandTokens([...u,...v,...r]);return t.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};w("\\bra@ket",Jm(!1));w("\\bra@set",Jm(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var ep={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class hx{constructor(t,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new mx(px,r.macros),this.mode=s,this.stack=[]}feed(t){this.lexer=new Bd(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,s,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:s}=this.consumeArg(["]"])}else({tokens:a,start:r,end:s}=this.consumeArg());return this.pushToken(new nt("EOF",s.loc)),this.pushTokens(a),new nt("",Kn.range(r,s))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],s=t&&t.length>0;s||this.consumeSpaces();var a=this.future(),u,d=0,g=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++d;else if(u.text==="}"){if(--d,d===-1)throw new oe("Extra }",u)}else if(u.text==="EOF")throw new oe("Unexpected end of input in a macro argument, expected '"+(t&&s?t[g]:"}")+"'",u);if(t&&s)if((d===0||d===1&&t[g]==="{")&&u.text===t[g]){if(++g,g===t.length){r.splice(-g,g);break}}else g=0}while(d!==0||s);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:u}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new oe("The length of delimiters doesn't match the number of args!");for(var s=r[0],a=0;a<s.length;a++){var u=this.popToken();if(s[a]!==u.text)throw new oe("Use of the macro doesn't match its definition",u)}}for(var d=[],g=0;g<t;g++)d.push(this.consumeArg(r&&r[g+1]).tokens);return d}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new oe("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),s=r.text,a=r.noexpand?null:this._getExpansion(s);if(a==null||t&&a.unexpandable){if(t&&a==null&&s[0]==="\\"&&!this.isDefined(s))throw new oe("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var u=a.tokens,d=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){u=u.slice();for(var g=u.length-1;g>=0;--g){var f=u[g];if(f.text==="#"){if(g===0)throw new oe("Incomplete placeholder at end of macro body",f);if(f=u[--g],f.text==="#")u.splice(g+1,1);else if(/^[1-9]$/.test(f.text))u.splice(g,2,...d[+f.text-1]);else throw new oe("Not a valid argument number",f)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new nt(t)]):void 0}expandTokens(t){var r=[],s=this.stack.length;for(this.pushTokens(t);this.stack.length>s;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(s=>s.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var s=this.lexer.catcodes[t];if(s!=null&&s!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var u=0;if(a.includes("#"))for(var d=a.replace(/##/g,"");d.includes("#"+(u+1));)++u;for(var g=new Bd(a,this.settings),f=[],v=g.lex();v.text!=="EOF";)f.push(v),v=g.lex();f.reverse();var b={tokens:f,numArgs:u};return b}return a}isDefined(t){return this.macros.has(t)||Ar.hasOwnProperty(t)||Je.math.hasOwnProperty(t)||Je.text.hasOwnProperty(t)||ep.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Ar.hasOwnProperty(t)&&!Ar[t].primitive}}var Fd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,u0=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Dl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Ld={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class q0{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new hx(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new oe("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new nt("}")),this.gullet.pushTokens(t);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(t,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(q0.endOfExpression.has(a.text)||r&&a.text===r||t&&Ar[a.text]&&Ar[a.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;s.push(u)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(t){for(var r=-1,s,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new oe("only one infix operator per group",t[a].token);r=a,s=t[a].replaceWith}if(r!==-1&&s){var u,d,g=t.slice(0,r),f=t.slice(r+1);g.length===1&&g[0].type==="ordgroup"?u=g[0]:u={type:"ordgroup",mode:this.mode,body:g},f.length===1&&f[0].type==="ordgroup"?d=f[0]:d={type:"ordgroup",mode:this.mode,body:f};var v;return s==="\\\\abovefrac"?v=this.callFunction(s,[u,t[r],d],[]):v=this.callFunction(s,[u,d],[]),[v]}else return t}handleSupSubscript(t){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var a;do{var u;a=this.parseGroup(t)}while(((u=a)==null?void 0:u.type)==="internal");if(!a)throw new oe("Expected group after '"+s+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],s=0;s<t.length;s++)r.push({type:"textord",mode:"text",text:t[s]});var a={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return u}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,a;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var d=u.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new oe("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(s)throw new oe("Double superscript",u);s=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(a)throw new oe("Double subscript",u);a=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(s)throw new oe("Double superscript",u);var g={type:"textord",mode:this.mode,text:"\\prime"},f=[g];for(this.consume();this.fetch().text==="'";)f.push(g),this.consume();this.fetch().text==="^"&&f.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:f}}else if(u0[u.text]){var v=Fd.test(u.text),b=[];for(b.push(new nt(u0[u.text])),this.consume();;){var _=this.fetch().text;if(!u0[_]||Fd.test(_)!==v)break;b.unshift(new nt(u0[_])),this.consume()}var z=this.subparse(b);v?a={type:"ordgroup",mode:"math",body:z}:s={type:"ordgroup",mode:"math",body:z}}else break}return s||a?{type:"supsub",mode:this.mode,base:r,sup:s,sub:a}:r}parseFunction(t,r){var s=this.fetch(),a=s.text,u=Ar[a];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new oe("Got function '"+a+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!u.allowedInText)throw new oe("Can't use function '"+a+"' in text mode",s);if(this.mode==="math"&&u.allowedInMath===!1)throw new oe("Can't use function '"+a+"' in math mode",s);var{args:d,optArgs:g}=this.parseArguments(a,u);return this.callFunction(a,d,g,s,t)}callFunction(t,r,s,a,u){var d={funcName:t,parser:this,token:a,breakOnTokenText:u},g=Ar[t];if(g&&g.handler)return g.handler(d,r,s);throw new oe("No function handler for "+t)}parseArguments(t,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var a=[],u=[],d=0;d<s;d++){var g=r.argTypes&&r.argTypes[d],f=d<r.numOptionalArgs;(r.primitive&&g==null||r.type==="sqrt"&&d===1&&u[0]==null)&&(g="primitive");var v=this.parseGroupOfType("argument to '"+t+"'",g,f);if(f)u.push(v);else if(v!=null)a.push(v);else throw new oe("Null argument, please report this as a bug")}return{args:a,optArgs:u}}parseGroupOfType(t,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var a=this.parseArgumentGroup(s,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",s);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(s)throw new oe("A primitive argument cannot be optional");var d=this.parseGroup(t);if(d==null)throw new oe("Expected group as "+t,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new oe("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var a="",u;(u=this.fetch()).text!=="EOF";)a+=u.text,this.consume();return this.consume(),s.text=a,s}parseRegexGroup(t,r){for(var s=this.fetch(),a=s,u="",d;(d=this.fetch()).text!=="EOF"&&t.test(u+d.text);)a=d,u+=a.text,this.consume();if(u==="")throw new oe("Invalid "+r+": '"+s.text+"'",s);return s.range(a,u)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new oe("Invalid color: '"+r.text+"'",r);var a=s[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,s=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",s=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new oe("Invalid size: '"+r.text+"'",r);var u={number:+(a[1]+a[2]),unit:a[3]};if(!um(u))throw new oe("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:s}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(t,r){var s=this.gullet.scanArgument(t);if(s==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:s.loc,body:u};return r&&this.switchMode(a),d}parseGroup(t,r){var s=this.fetch(),a=s.text,u;if(a==="{"||a==="\\begingroup"){this.consume();var d=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var g=this.parseExpression(!1,d),f=this.fetch();this.expect(d),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Kn.range(s,f),body:g,semisimple:a==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,t)||this.parseSymbol(),u==null&&a[0]==="\\"&&!ep.hasOwnProperty(a)){if(this.settings.throwOnError)throw new oe("Undefined control sequence: "+a,s);u=this.formatUnsupportedCmd(a),this.consume()}return u}formLigatures(t){for(var r=t.length-1,s=0;s<r;++s){var a=t[s],u=a.text;u==="-"&&t[s+1].text==="-"&&(s+1<r&&t[s+2].text==="-"?(t.splice(s,3,{type:"textord",mode:"text",loc:Kn.range(a,t[s+2]),text:"---"}),r-=2):(t.splice(s,2,{type:"textord",mode:"text",loc:Kn.range(a,t[s+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&t[s+1].text===u&&(t.splice(s,2,{type:"textord",mode:"text",loc:Kn.range(a,t[s+1]),text:u+u}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),a=s.charAt(0)==="*";if(a&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new oe(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:a}}Ld.hasOwnProperty(r[0])&&!Je[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=Ld[r[0]]+r.slice(1));var u=cx.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(Je[this.mode][r]){this.settings.strict&&this.mode==="math"&&Ll.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var g=Je[this.mode][r].group,f=Kn.range(t),v;if(d8.hasOwnProperty(g)){var b=g;v={type:"atom",mode:this.mode,family:b,loc:f,text:r}}else v={type:g,mode:this.mode,loc:f,text:r};d=v}else if(r.charCodeAt(0)>=128)this.settings.strict&&(lm(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),d={type:"textord",mode:"text",loc:Kn.range(t),text:r};else return null;if(this.consume(),u)for(var _=0;_<u[0].length;_++){var z=u[0][_];if(!Dl[z])throw new oe("Unknown accent ' "+z+"'",t);var k=Dl[z][this.mode]||Dl[z].text;if(!k)throw new oe("Accent "+z+" unsupported in "+this.mode+" mode",t);d={type:"accent",mode:this.mode,loc:Kn.range(t),label:k,isStretchy:!1,isShifty:!0,base:d}}return d}}q0.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var vu=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new q0(t,r);delete s.gullet.macros.current["\\df@tag"];var a=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new oe("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:s.subparse([new nt("\\df@tag")])}]}return a},np=function(t,r,s){r.textContent="";var a=xu(t,s).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),np=function(){throw new oe("KaTeX doesn't work in quirks mode.")});var gx=function(t,r){var s=xu(t,r).toMarkup();return s},yx=function(t,r){var s=new nu(r);return vu(t,s)},tp=function(t,r,s){if(s.throwOnError||!(t instanceof oe))throw t;var a=re(["katex-error"],[new mt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+s.errorColor),a},xu=function(t,r){var s=new nu(r);try{var a=vu(t,s);return j8(a,t,s)}catch(u){return tp(u,t,s)}},vx=function(t,r){var s=new nu(r);try{var a=vu(t,s);return q8(a,t,s)}catch(u){return tp(u,t,s)}},xx="0.16.33",$x={Span:Io,Anchor:iu,SymbolNode:mt,SvgNode:Jt,PathNode:Pr,LineNode:Fl},Od={version:xx,render:np,renderToString:gx,ParseError:oe,SETTINGS_SCHEMA:d0,__parse:yx,__renderToDomTree:xu,__renderToHTMLTree:vx,__setFontMetrics:r8,__defineSymbol:m,__defineFunction:pe,__defineMacro:w,__domTree:$x};function $u(o){if(!o)return"";let t=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Od.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}});return t=t.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Od.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}}),t}function bx({nodeId:o,nodes:t,adjacency:r,lang:s,SCOPE_COLORS:a,SCOPE_LABELS:u,SECTIONS:d,belief:g,evidence:f,onClose:v,onNavigate:b}){var me,be;const[_,z]=W.useState(null),k=t.find(Y=>Y.id===o);if(!k)return null;const M=Object.fromEntries(t.map(Y=>[Y.id,Y])),P=Y=>{var de,ke;return s==="pl"?(de=M[Y])==null?void 0:de.labelPl:(ke=M[Y])==null?void 0:ke.label},R=s==="pl"?k.labelPl:k.label,E=(a==null?void 0:a[k.scope])??"#4a9eff",F=((me=u==null?void 0:u[k.scope])==null?void 0:me[s==="pl"?"pl":"en"])??"",G=((be=d==null?void 0:d[k.section])==null?void 0:be.label)??"",I=r.prereqs[o]??[],L=r.dependents[o]??[],K=k.resources??[],B=g==null?void 0:g[o],Z=_!=null?K[_]??null:null,X={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return y.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:H.bg,fontFamily:pn,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[y.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),y.jsxs("div",{style:{maxWidth:580,width:"100%",margin:"0 auto",padding:"32px 24px 64px"},children:[y.jsxs("button",{onClick:v,style:{padding:"6px 14px",fontSize:12,fontFamily:pn,borderRadius:6,border:`1px solid ${H.border}`,background:"transparent",color:H.textDim,cursor:"pointer",marginBottom:28},children:["← ",V("topicBack",s)]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[y.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:E,opacity:.8,flexShrink:0}}),y.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:H.textPrimary,lineHeight:1.3},children:R})]}),y.jsxs("div",{style:{fontSize:12,color:H.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[G," · ",F," · ",V("level",s)," ",k.level]}),B&&y.jsx(wx,{nodeId:o,status:B,evidence:f,adjacency:r,belief:g,nodes:t,lang:s,onNavigate:b}),k.body&&y.jsx(_x,{body:k.body,lang:s}),y.jsx(Hd,{title:V("prerequisites",s),color:"#4a9eff",empty:I.length===0,emptyText:V("noPrereqs",s),children:I.map(Y=>{var de;return y.jsx(Wd,{label:P(Y),color:(a==null?void 0:a[(de=M[Y])==null?void 0:de.scope])??"#4a9eff",status:g==null?void 0:g[Y],onClick:()=>b(Y)},Y)})}),y.jsx(Hd,{title:V("enables",s),color:"#3dc9b0",empty:L.length===0,emptyText:V("noDependents",s),children:L.map(Y=>{var de;return y.jsx(Wd,{label:P(Y),color:(a==null?void 0:a[(de=M[Y])==null?void 0:de.scope])??"#4a9eff",status:g==null?void 0:g[Y],onClick:()=>b(Y)},Y)})}),K.length>0&&y.jsxs("div",{style:{marginTop:28},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:V("learningResources",s)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:K.map((Y,de)=>{const ke=s==="pl"?Y.titlePl:Y.titleEn,Pe=X[Y.type]??"#8a9dbe",Ge=Y.type==="interactive"?"resourceInteractive":Y.type==="video"?"resourceVideo":"resourceArticle";return y.jsxs("button",{onClick:()=>z(de),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${Pe}0a`,border:`1px solid ${Pe}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:pn,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Re=>{Re.currentTarget.style.background=`${Pe}18`,Re.currentTarget.style.borderColor=`${Pe}50`},onMouseLeave:Re=>{Re.currentTarget.style.background=`${Pe}0a`,Re.currentTarget.style.borderColor=`${Pe}25`},children:[y.jsx("span",{style:{fontSize:18,flexShrink:0},children:Y.type==="interactive"?"⬡":Y.type==="video"?"▶":"📄"}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:H.textBody,fontWeight:500,lineHeight:1.4},children:ke}),y.jsx("div",{style:{fontSize:10,color:Pe,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:V(Ge,s)})]}),y.jsx("span",{style:{fontSize:14,color:H.textFaint},children:"→"})]},de)})})]})]}),Z&&y.jsx(Cv,{resource:Z,lang:s,onClose:()=>z(null)})]})}function wx({nodeId:o,status:t,evidence:r,adjacency:s,belief:a,nodes:u,lang:d,onNavigate:g}){const f=r==null?void 0:r[o],v=!!f,b=t==="known"?"#27ae60":"#e74c3c",_=t==="known"?"#2ecc71":"#ff6b6b",z=Object.fromEntries(u.map(P=>[P.id,P])),k=P=>{var R,E;return d==="pl"?(R=z[P])==null?void 0:R.labelPl:(E=z[P])==null?void 0:E.label};let M=null;return!v&&r&&(t==="known"?M=(s.dependents[o]??[]).find(R=>{var E;return((E=r[R])==null?void 0:E.correct)&&a[R]==="known"}):M=(s.prereqs[o]??[]).find(R=>r[R]&&!r[R].correct&&a[R]==="unknown")),y.jsxs("div",{style:{marginBottom:20,padding:"12px 14px",borderRadius:8,background:`${b}08`,border:`1px solid ${b}20`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:b}}),y.jsx("span",{style:{fontSize:13,fontWeight:600,color:_},children:V(t==="known"?"beliefKnown":"beliefUnknown",d)}),y.jsx("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:4,background:v?`${b}15`:"#ffffff08",color:v?_:H.textFaint,border:`1px solid ${v?b+"30":H.border}`},children:v?d==="pl"?"sprawdzone":"tested":d==="pl"?"wywnioskowane":"inferred"})]}),v&&y.jsxs("div",{style:{fontSize:12,color:H.textDim,lineHeight:1.6},children:[f.correct?d==="pl"?"Odpowiedź poprawna":"Answered correctly":d==="pl"?"Odpowiedź niepoprawna":"Answered incorrectly",f.questionText&&y.jsx("div",{style:{marginTop:8,padding:"8px 10px",borderRadius:6,background:"#ffffff06",borderLeft:`2px solid ${b}40`,fontSize:12,color:H.textBody,lineHeight:1.6},children:y.jsx("span",{dangerouslySetInnerHTML:{__html:$u(f.questionText)}})})]}),!v&&y.jsxs("div",{style:{fontSize:12,color:H.textDim,lineHeight:1.6},children:[t==="known"?d==="pl"?"Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten.":"Inferred — if you know a harder topic, you likely know this one too.":d==="pl"?"Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem.":"Inferred — if you don't know the foundation, topics that build on it may also be difficult.",M&&y.jsxs("button",{onClick:()=>g(M),style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:4,background:"#ffffff06",border:`1px solid ${H.border}`,color:"#4a9eff",cursor:"pointer",fontSize:11,fontFamily:pn},children:[d==="pl"?"Na podstawie:":"Based on:"," ",k(M)," →"]})]})]})}function _x({body:o,lang:t}){var g,f;const[r,s]=W.useState(!1),a=o.split("<!-- example -->"),u=(g=a[0])==null?void 0:g.trim(),d=(f=a[1])==null?void 0:f.trim();return u?y.jsxs("div",{style:{marginBottom:20},children:[y.jsx("div",{style:{fontSize:13,color:H.textBody,lineHeight:1.7},children:u}),d&&y.jsxs(y.Fragment,{children:[y.jsx("button",{onClick:()=>s(v=>!v),style:{marginTop:10,padding:"6px 14px",fontSize:12,fontFamily:pn,borderRadius:6,border:`1px solid ${r?"#FFD16640":H.border}`,background:r?"#FFD16610":"transparent",color:r?"#FFD166":H.textDim,cursor:"pointer",transition:"all 0.15s"},children:r?t==="pl"?"Schowaj przykład":"Hide example":t==="pl"?"Nie kumam — pokaż na liczbach":"Show me a concrete example"}),r&&y.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#FFD16608",border:"1px solid #FFD16620",color:"#e8d5a0",lineHeight:1.7},children:d})]})]}):null}function Hd({title:o,color:t,empty:r,emptyText:s,children:a}){return y.jsxs("div",{style:{marginTop:24},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:o}),r?y.jsx("div",{style:{fontSize:12,color:H.textFaint,fontStyle:"italic"},children:s}):y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:a})]})}function Wd({label:o,color:t,status:r,onClick:s}){const a=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return y.jsxs("button",{onClick:s,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:pn,fontSize:12,color:H.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:u=>{u.currentTarget.style.background=`${t}1c`,u.currentTarget.style.borderColor=`${t}50`},onMouseLeave:u=>{u.currentTarget.style.background=`${t}0c`,u.currentTarget.style.borderColor=`${t}25`},children:[a&&y.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:a,flexShrink:0}}),o]})}class Bo{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(s,a)=>a);for(let s=t-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return new Bo(r)}static identity(t){return new Bo(Array.from({length:t},(r,s)=>s))}}function kx({nodeId:o,nodes:t,questionBank:r,onAnswer:s,onSkip:a,lang:u,excludeIndices:d=[],isMobile:g}){const f=t.find(B=>B.id===o),v=W.useMemo(()=>Xd(r,o,d),[o,d]),b="#4a9eff",_=f?u==="pl"?f.labelPl:f.label:o,z=W.useMemo(()=>v?Bo.random(v.options.length):null,[v]),k=W.useMemo(()=>z?z.apply(v.options):[],[z,v]),M=W.useMemo(()=>z?z.displayIndex(v.correct):-1,[z,v]),[P,R]=W.useState(null),[E,F]=W.useState(!1),G=()=>{P!==null&&F(!0)},I=()=>{s(P===M,v,v.index),R(null),F(!1)};W.useEffect(()=>{const B=Z=>{Z.key==="Escape"&&a((v==null?void 0:v.index)??-1)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[a,v]);const L=B=>y.jsx("span",{dangerouslySetInnerHTML:{__html:$u(B)}}),K=g?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:H.surface,border:`1px solid ${b}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:H.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:H.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${b}40`,borderRadius:10,padding:"14px 16px",color:H.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return y.jsxs("div",{style:K,children:[g&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:H.textFaint}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[y.jsx("div",{style:{color:b,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:_}),y.jsx("button",{onClick:()=>a((v==null?void 0:v.index)??-1),style:{background:`${H.textDim}22`,border:`1px solid ${H.border}`,color:H.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:V("close",u)})]}),v?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:13,color:H.textBody,marginBottom:12,lineHeight:1.65},children:L(v.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:k.map((B,Z)=>{let X=H.bg,me=H.border,be=H.textBody;return P===Z&&!E&&(X=`${b}22`,me=b,be=b),E&&(Z===M?(X="#27ae6022",me="#27ae60",be="#2ecc71"):Z===P&&(X="#e74c3c22",me="#e74c3c",be="#ff6b6b")),y.jsxs("button",{onClick:()=>{E||R(Z)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:E?"default":"pointer",background:X,border:`1px solid ${me}`,color:be,lineHeight:1.5,minHeight:38},children:[y.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][Z],"."]}),L(B)]},Z)})}),E&&v.hint&&y.jsx("div",{style:{fontSize:11,color:H.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:L(v.hint)}),E?y.jsx("button",{onClick:I,style:{...Ao(P===M?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:V(P===M?"knownConfirm":"unknownConfirm",u)}):y.jsx("button",{onClick:G,disabled:P===null,style:{...Ao(b),width:"100%",opacity:P===null?.4:1,fontSize:13},children:V("checkAnswer",u)})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:H.textDim,fontSize:12,marginBottom:12},children:V("noQuestion",u)}),y.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[y.jsx("button",{onClick:()=>s(!0,null,-1),style:{...Ao("#27ae60"),fontSize:12,padding:"8px 14px"},children:V("yesKnow",u)}),y.jsx("button",{onClick:()=>s(!1,null,-1),style:{...Ao("#e74c3c"),fontSize:12,padding:"8px 14px"},children:V("noKnow",u)}),y.jsx("button",{onClick:()=>a(-1),style:{...Ao("#3a4d63"),fontSize:12,padding:"8px 14px"},children:V("skipBtn",u)})]})]})]})}const zx={position:"absolute",right:16,top:16,width:230,background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function Sx({belief:o,frontier:t,visibleFrontier:r,hasStarted:s,nextSuggestedId:a,sessionComplete:u,adjacency:d,expectedRemaining:g,pCorrect:f,questionsAnswered:v,nodes:b,lang:_,onReset:z,onNodeClick:k,SCOPE_LABELS:M,isMobile:P}){var me,be;const R=Object.fromEntries(b.map(Y=>[Y.id,Y])),E=Y=>{var de,ke;return _==="pl"?(de=R[Y])==null?void 0:de.labelPl:(ke=R[Y])==null?void 0:ke.label},F=b.filter(Y=>o[Y.id]==="known"),G=b.filter(Y=>o[Y.id]==="unknown"),I=b.length,L=[{label:V("statKnown",_),count:F.length,color:"#27ae60"},{label:V("statUnknown",_),count:G.length,color:"#e74c3c"},{label:V("statRemaining",_),count:g??"-",color:"#4a9eff"}],K=f?Math.round(f*100):50,B=P?13:11,Z=P?11:9,X=y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{fontWeight:700,fontSize:P?14:12,marginBottom:10,color:H.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[V("diagHeader",_)," ",u?"✓":""]}),y.jsx("button",{onClick:z,style:{fontSize:Z,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${H.textFaint}`,color:H.textDim,minHeight:P?32:"auto"},children:V("reset",_)})]}),y.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:L.map(({label:Y,count:de,color:ke})=>y.jsxs("div",{style:{flex:1,textAlign:"center",background:`${ke}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${ke}40`},children:[y.jsx("div",{style:{color:ke,fontWeight:700,fontSize:P?20:15},children:de}),y.jsx("div",{style:{color:H.textDim,fontSize:Z},children:Y})]},Y))}),!u&&s&&y.jsxs("div",{style:{fontSize:Z,color:H.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[y.jsxs("span",{children:[V("answered",_),": ",y.jsx("span",{style:{color:H.textPrimary},children:v})]}),y.jsxs("span",{children:[V("estimated",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:["~",g??"-"]})]}),y.jsxs("span",{children:[V("accuracy",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[K,"%"]})]})]}),u&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:P?14:12,marginBottom:4},children:V("sessionDone",_)}),y.jsxs("div",{style:{color:H.textDim,fontSize:Z,lineHeight:1.6},children:[V("sessionDoneSub",_)," ",y.jsx("span",{style:{color:H.textPrimary},children:v})," ",V("sessionDoneQ",_),"."," ",V("sessionDoneClass",_)," ",F.length+G.length,"/",I,".",y.jsx("br",{}),V("sessionDoneAcc",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[K,"%"]}),"."," ",V("sessionDoneKnown",_)," ",y.jsx("span",{style:{color:"#2ecc71"},children:F.length}),","," ",V("sessionDoneStudy",_)," ",y.jsx("span",{style:{color:"#e74c3c"},children:G.length}),"."]})]}),G.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#e74c3c",fontSize:B,fontWeight:600,marginBottom:5},children:[V("toStudy",_)," (",G.length,")"]}),b.filter(Y=>o[Y.id]==="unknown").filter(Y=>(d.prereqs[Y.id]??[]).every(de=>o[de]==="known")).slice(0,8).map(Y=>{var de,ke;return y.jsxs("div",{style:{padding:P?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:B,color:"#ff8a8a",lineHeight:1.4},children:[E(Y.id),y.jsx("div",{style:{fontSize:Z,color:H.textDim,marginTop:1},children:(ke=M==null?void 0:M[(de=R[Y.id])==null?void 0:de.scope])==null?void 0:ke[_==="pl"?"pl":"en"]})]},Y.id)})]}),F.length>0&&y.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:B},children:["✓ ",V("knownList",_)," ",F.length]})]}),!u&&!s&&y.jsxs("div",{style:{marginBottom:10},children:[a&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:B,fontWeight:600,marginBottom:5},children:V("startHere",_)}),y.jsxs("div",{onClick:()=>k==null?void 0:k(a),style:{padding:P?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:B,color:"#a8d4ff",minHeight:P?44:"auto"},children:[y.jsx("div",{style:{fontWeight:600},children:E(a)}),y.jsxs("div",{style:{fontSize:Z,color:H.textDim,marginTop:2},children:[(be=M==null?void 0:M[(me=R[a])==null?void 0:me.scope])==null?void 0:be[_==="pl"?"pl":"en"]," · ",V("startHereSub",_)]})]})]}),y.jsx("div",{style:{fontSize:Z,color:H.textFaint,marginTop:8,lineHeight:1.5},children:V("clickAnyNode",_)})]}),!u&&s&&r.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#f39c12",fontSize:B,fontWeight:600,marginBottom:5},children:V("whatNext",_)}),r.map(Y=>{var ke,Pe;const de=Y===a;return y.jsxs("div",{onClick:()=>k==null?void 0:k(Y),style:{padding:P?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:de?"#4a9eff18":"#f39c1215",border:`1px solid ${de?"#4a9eff55":"#f39c1240"}`,fontSize:B,color:de?"#a8d4ff":"#f5d78e",minHeight:P?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{children:E(Y)}),y.jsxs("div",{style:{fontSize:Z,color:H.textDim,marginTop:1},children:[(Pe=M==null?void 0:M[(ke=R[Y])==null?void 0:ke.scope])==null?void 0:Pe[_==="pl"?"pl":"en"],de&&y.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:V("best",_)})]})]}),y.jsx("span",{style:{opacity:.7},children:de?"★":"→"})]},Y)})]}),!u&&F.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#27ae60",fontSize:B,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",V("knownList",_)," (",F.length,")"]}),F.map(Y=>y.jsx("div",{style:{fontSize:Z,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:E(Y.id)},Y.id))]}),!u&&!P&&y.jsxs("div",{style:{marginTop:12,color:H.textFaint,fontSize:Z,lineHeight:1.5},children:[V("hintClick",_),y.jsx("br",{}),V("hintShift",_),y.jsx("br",{}),V("hintGreen",_)]})]});return P?y.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:H.textFaint}})}),X]}):y.jsx("div",{style:zx,children:X})}function jx({nodes:o,lang:t,targetNode:r,subgraphIds:s,ddClassification:a,betaBeliefs:u,ddComplete:d,ddNextNodeId:g,questionsAnswered:f,onNodeClick:v,onReset:b,isMobile:_}){const z=Object.fromEntries(o.map(B=>[B.id,B])),k=B=>{var Z,X;return t==="pl"?(Z=z[B])==null?void 0:Z.labelPl:(X=z[B])==null?void 0:X.label},M=s.filter(B=>a[B]==="known"),P=s.filter(B=>a[B]==="unknown"),R=s.filter(B=>a[B]==="uncertain"),E=s.length,F=M.length+P.length,G=E>0?Math.round(F/E*100):0,I=k(r),L=_?11:9,K=_?{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return y.jsxs("div",{style:K,children:[_&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:H.textFaint}})}),y.jsxs("div",{style:{fontWeight:700,fontSize:_?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[V("deepDiveHeader",t)," ",d?"✓":""]}),y.jsx("button",{onClick:b,style:{fontSize:L,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${H.textFaint}`,color:H.textDim,minHeight:_?32:"auto"},children:V("reset",t)})]}),y.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[y.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:V("deepDiveTarget",t)}),y.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:I}),y.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[E," ",V("deepDiveNodes",t)]})]}),y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{height:5,borderRadius:3,background:"#10141c",overflow:"hidden",marginBottom:4},children:y.jsx("div",{style:{height:"100%",borderRadius:3,width:`${G}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[y.jsxs("span",{children:[V("classified",t),": ",y.jsxs("span",{style:{color:"#f5f6fa"},children:[F,"/",E]})]}),y.jsxs("span",{children:[V("questions",t),": ",y.jsx("span",{style:{color:"#f5f6fa"},children:f})]})]})]}),d&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:M.length>P.length?"#27ae6018":"#e74c3c18",border:`1px solid ${M.length>P.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:M.length>P.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:V("diagReady",t)}),y.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[V("diagKnown",t),": ",y.jsx("span",{style:{color:"#2ecc71"},children:M.length})," / ",V("diagStudy",t),": ",y.jsx("span",{style:{color:"#ff6b6b"},children:P.length})," / ",V("diagTotal",t),": ",E]})]}),P.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:V("studyThese",t)}),s.filter(B=>a[B]==="unknown").slice(0,8).map(B=>{var Z;return y.jsx(Gd,{id:B,label:k(B),scope:(Z=z[B])==null?void 0:Z.scope,classification:"unknown",beta:u[B]},B)})]}),M.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:V("mastered",t)}),s.filter(B=>a[B]==="known").map(B=>{var Z;return y.jsx(Gd,{id:B,label:k(B),scope:(Z=z[B])==null?void 0:Z.scope,classification:"known",beta:u[B]},B)})]})]}),!d&&y.jsxs(y.Fragment,{children:[g&&y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:V("nextQuestion",t)}),y.jsxs("div",{onClick:()=>v==null?void 0:v(g),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[k(g),y.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[V("confidence",t),": ",qx(u[g])]})]})]}),R.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[V("unclassified",t)," (",R.length,")"]}),R.map(B=>y.jsxs("div",{onClick:()=>v==null?void 0:v(B),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:B===g?"#4a9eff18":"#f39c1212",border:`1px solid ${B===g?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:B===g?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:k(B)}),y.jsx(rp,{beta:u[B]})]},B))]})]})]})}function qx(o){if(!o)return"50%";const t=o.alpha/(o.alpha+o.beta);return`${Math.round(t*100)}%`}function rp({beta:o}){const t=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),a=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return y.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#10141c",overflow:"hidden",flexShrink:0},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:a,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function Gd({id:o,label:t,scope:r,classification:s,beta:a}){const u=s==="known"?"#27ae60":"#e74c3c";return y.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:t}),y.jsx(rp,{beta:a})]})}function Tx({lang:o,diagMode:t,hasBelief:r,SCOPE_COLORS:s,SCOPE_LABELS:a,SECTIONS:u}){const[d,g]=W.useState(r),f=Object.entries(s).map(([v,b])=>{var _;return{color:b,label:(_=a[v])==null?void 0:_[o==="pl"?"pl":"en"]}});return y.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#161c2895",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[y.jsxs("button",{onClick:()=>g(v=>!v),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[y.jsx("span",{style:{opacity:.6},children:d?"▼":"▶"}),V("legendTitle",o)]}),d&&y.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[(t||r)&&y.jsxs("div",{style:{marginBottom:8},children:[[{color:H.knownHi,label:V("legendKnown",o)},{color:H.unknownHi,label:V("legendUnknown",o)},{color:H.frontier,label:V("legendFrontier",o)},{color:"#4a5568",label:V("legendUnclassified",o)}].map(({color:v,label:b})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:v,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:b})]},b)),y.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:V("legendScopes",o)}),f.map(({color:v,label:b})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:v,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:b})]},b)),y.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:V("legendStages",o)}),Object.entries(u).map(([v,b])=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:3,borderRadius:1,background:b.color,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:b.label})]},v))]})]})]})}function Ax({nodes:o,lang:t,onSelect:r,onClose:s,SECTIONS:a,SCOPE_COLORS:u}){const[d,g]=W.useState(""),[f,v]=W.useState(-1),b=W.useRef([]),_=W.useMemo(()=>Object.keys(a??{}),[a]),z=W.useMemo(()=>{const E=d.toLowerCase();return o.filter(F=>!E||F.label.toLowerCase().includes(E)||F.labelPl.toLowerCase().includes(E))},[o,d]),k=W.useMemo(()=>{const E={};for(const G of _)E[G]=[];for(const G of z){const I=G.section??_[0]??"default";E[I]||(E[I]=[]),E[I].push(G)}const F=[];for(const G of _)for(const I of E[G]??[])F.push(I);return F},[z,_]),M=W.useMemo(()=>{const E={};for(const F of _)E[F]=[];for(const F of z){const G=F.section??_[0]??"default";E[G]||(E[G]=[]),E[G].push(F)}return E},[z,_]),P=E=>t==="pl"?E.labelPl:E.label;W.useEffect(()=>{const E=F=>{if(F.key==="Escape"){s();return}F.key==="ArrowDown"&&(F.preventDefault(),v(G=>Math.min(G+1,k.length-1))),F.key==="ArrowUp"&&(F.preventDefault(),v(G=>Math.max(G-1,0))),F.key==="Enter"&&f>=0&&k[f]&&(F.preventDefault(),r(k[f].id))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[k,f,s,r]),W.useEffect(()=>{f>=0&&b.current[f]&&b.current[f].scrollIntoView({block:"nearest"})},[f]),W.useEffect(()=>{v(-1)},[d]);const R={title:t==="pl"?"Wybierz cel":"Select Goal",subtitle:t==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:t==="pl"?"Szukaj tematu...":"Search topics...",noResults:t==="pl"?"Brak wyników":"No results",footer:`${z.length} / ${o.length} ${t==="pl"?"tematów":"topics"}`,cancel:t==="pl"?"Anuluj":"Cancel"};return y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:E=>{E.target===E.currentTarget&&s()},children:y.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #263248",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:R.title}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:R.subtitle})]}),y.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:y.jsx("input",{autoFocus:!0,value:d,onChange:E=>g(E.target.value),placeholder:R.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#10141c",border:"1px solid #263248",color:"#c8d6e5",outline:"none"}})}),y.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[_.map(E=>{const F=M[E];if(!F||F.length===0)return null;const G=a==null?void 0:a[E];return y.jsxs("div",{style:{marginBottom:12},children:[y.jsx("div",{style:{fontSize:9,fontWeight:700,color:(G==null?void 0:G.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(G==null?void 0:G.label)??E}),y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:F.map(I=>{const L=k.indexOf(I),K=(u==null?void 0:u[I.scope])??"#4a9eff",B=f===L;return y.jsxs("button",{ref:Z=>b.current[L]=Z,onClick:()=>r(I.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:B?`${K}35`:`${K}15`,border:`1px solid ${B?K:`${K}40`}`,color:"#c8d6e5",cursor:"pointer",outline:B?`2px solid ${K}`:"none",outlineOffset:1},onMouseEnter:Z=>{Z.currentTarget.style.background=`${K}30`,Z.currentTarget.style.borderColor=`${K}90`},onMouseLeave:Z=>{k.indexOf(I)!==f&&(Z.currentTarget.style.background=`${K}15`,Z.currentTarget.style.borderColor=`${K}40`)},children:[y.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:K,verticalAlign:"middle"}}),P(I)]},I.id)})})]},E)}),z.length===0&&y.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:R.noResults})]}),y.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:R.footer}),y.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:R.cancel})]})]})})}function Mx({isOpen:o,onSelect:t,onClose:r,lang:s="pl"}){const a=[{id:"quick",icon:"⚡",color:"#4a9eff",label:V("modeQuickLabel",s),description:V("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:V("modeDeepLabel",s),description:V("modeDeepDesc",s)}],[u,d]=W.useState(null),g=W.useRef(null);return W.useEffect(()=>{o&&(d(null),setTimeout(()=>{var f;return(f=g.current)==null?void 0:f.focus()},100))},[o]),W.useEffect(()=>{if(!o)return;const f=v=>{v.key==="Escape"&&r(),v.key==="Enter"&&u&&t(u)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[o,u,r,t]),o?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:f=>{f.target===f.currentTarget&&r()},children:y.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #263248"},children:[y.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:V("modePickerTitle",s)}),y.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:V("modePickerSub",s)})]}),y.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:a.map((f,v)=>y.jsxs("button",{ref:v===0?g:null,onClick:()=>d(f.id),onDoubleClick:()=>t(f.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===f.id?`${f.color}18`:"#10141c",border:`1px solid ${u===f.id?f.color:"#263248"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:b=>{b.currentTarget.style.background=`${f.color}18`,b.currentTarget.style.borderColor=`${f.color}60`},onMouseLeave:b=>{u!==f.id&&(b.currentTarget.style.background="#10141c",b.currentTarget.style.borderColor="#263248")},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[y.jsx("span",{style:{fontSize:16},children:f.icon}),y.jsx("span",{style:{fontWeight:600,color:u===f.id?f.color:"#f5f6fa"},children:f.label})]}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:f.description})]},f.id))}),y.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:V("cancel",s)}),y.jsx("button",{onClick:()=>u&&t(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#263248",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:V("next",s)})]})]})}):null}const Px=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function Cx({isOpen:o,onSelect:t,onClose:r,lang:s}){return W.useEffect(()=>{if(!o)return;const a=u=>{u.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,r]),o?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&r()},children:y.jsxs("div",{style:{width:"100%",maxWidth:480,background:H.surface,border:"1px solid #263248",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[y.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:"1px solid #263248",textAlign:"center"},children:[y.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),y.jsx("div",{style:{fontWeight:700,fontSize:18,color:H.textPrimary,marginBottom:8},children:V("onboardingTitle",s)}),y.jsx("div",{style:{fontSize:12,color:H.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:V("onboardingSub",s)})]}),y.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[y.jsx("div",{style:{fontSize:11,color:H.textFaint,marginBottom:2},children:V("onboardingChoose",s)}),Px.map(({id:a,key:u,descKey:d,color:g})=>y.jsxs("button",{onClick:()=>t(a),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${g}0e`,border:`1px solid ${g}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:f=>{f.currentTarget.style.background=`${g}1c`,f.currentTarget.style.borderColor=`${g}70`},onMouseLeave:f=>{f.currentTarget.style.background=`${g}0e`,f.currentTarget.style.borderColor=`${g}30`},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0,marginTop:5}}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontWeight:600,fontSize:13,color:H.textPrimary,marginBottom:3},children:V(u,s)}),y.jsx("div",{style:{fontSize:11,color:H.textDim,lineHeight:1.5},children:V(d,s)})]}),y.jsx("div",{style:{color:g,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},a))]}),y.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:H.textFaint,textAlign:"center"},children:V("onboardingLangHint",s)})]})}):null}function Rx({lang:o,setLang:t,layoutId:r,layouts:s,onLayoutChange:a,searchTerm:u,setSearchTerm:d,filterScope:g,toggleScope:f,clearScope:v,filterSection:b,toggleSection:_,clearSection:z,SECTIONS:k,SCOPE_COLORS:M,SCOPE_LABELS:P,isMobile:R}){const[E,F]=W.useState(!1),G=W.useRef(null);W.useEffect(()=>{if(!E)return;const L=B=>{G.current&&!G.current.contains(B.target)&&F(!1)},K=B=>{B.key==="Escape"&&F(!1)};return document.addEventListener("mousedown",L),document.addEventListener("keydown",K),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("keydown",K)}},[E]);const I=g.size+b.size+(u?1:0);return y.jsxs("div",{ref:G,style:{position:"relative"},children:[y.jsxs("button",{onClick:()=>F(L=>!L),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:E||I>0?"1px solid #4a9eff":`1px solid ${H.border}`,background:E?"#4a9eff22":"transparent",color:E||I>0?"#4a9eff":H.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:V("moreOptions",o),children:[y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),I>0&&y.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:I})]}),E&&y.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:R?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:H.surface,border:`1px solid ${H.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:H.textDim,fontWeight:600,marginBottom:6,display:"block"},children:V("search",o)}),y.jsx("input",{value:u,onChange:L=>d(L.target.value),placeholder:V("search",o),style:{width:"100%",boxSizing:"border-box",background:H.bg,border:`1px solid ${H.border}`,borderRadius:6,color:H.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:H.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),y.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(L=>y.jsx("button",{onClick:()=>t(L),style:{...Ei(o===L,L==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:L.toUpperCase()},L))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:H.textDim,fontWeight:600,marginBottom:6,display:"block"},children:V("layoutLabel",o)}),y.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(L=>y.jsx("button",{onClick:()=>a(L.meta.id),style:{...Ei(r===L.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:L.meta.label},L.meta.id))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:H.textDim,fontWeight:600,marginBottom:6,display:"block"},children:V("filterSection",o)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Ei(b.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:z,children:V("all",o)}),Object.entries(k).map(([L,K])=>y.jsx("button",{style:{...Ei(b.has(L),K.color),fontSize:11,padding:"4px 10px"},onClick:()=>_(L),children:K.label},L))]})]}),y.jsxs("div",{children:[y.jsx("label",{style:{fontSize:11,color:H.textDim,fontWeight:600,marginBottom:6,display:"block"},children:V("filterScope",o)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Ei(g.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:v,children:V("all",o)}),Object.entries(M).map(([L,K])=>{var B;return y.jsx("button",{style:{...Ei(g.has(L),K),fontSize:11,padding:"4px 10px"},onClick:()=>f(L),children:(B=P[L])==null?void 0:B[o==="pl"?"pl":"en"]},L)})]})]})]})]})}const Ud={x:40,y:40,scale:.72},Vd={x:20,y:20,scale:.42};function Dx({courseId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:d,COURSE_META:g,onBackToCourses:f,initialBelief:v,initialEvidence:b,initialLang:_,onBackToHome:z}){const k=zv(),[M,P]=W.useState(tm),[R,E]=ct("lang",_??"pl"),[F,G]=W.useState(new Set),[I,L]=W.useState(new Set),[K,B]=W.useState(""),[Z,X]=W.useState(null),[me,be]=W.useState(null),[Y,de]=W.useState(null),[ke,Pe]=W.useState(!1),[Ge,Re]=W.useState(!1),le=!!v,[we,ue]=ct("onboardingSeen",!1),[A,Q]=W.useState(!we&&!le),$e=W.useCallback(()=>{ue(!0),Q(!1)},[ue]),Se=W.useCallback(J=>G(Oe=>{const We=new Set(Oe);return We.has(J)?We.delete(J):We.add(J),We}),[]),ze=W.useCallback(J=>L(Oe=>{const We=new Set(Oe);return We.has(J)?We.delete(J):We.add(J),We}),[]),Ee=W.useCallback(()=>G(new Set),[]),Fe=W.useCallback(()=>L(new Set),[]),Be=W.useMemo(()=>Yl(t,r),[t,r]),[ge,Ne]=W.useState(()=>xl(M,300,t,r)),je=W.useMemo(()=>t.map(J=>{var Oe,We;return{...J,x:((Oe=ge[J.id])==null?void 0:Oe.x)??J.x,y:((We=ge[J.id])==null?void 0:We.y)??J.y}}),[t,ge]),Fn=W.useRef(null),{viewTransform:wn,setViewTransform:bt,toCanvas:ai,startPan:Et,cursorStyle:rr,setCursorStyle:Er,handleMouseMove:wt,handleMouseUp:Zn}=fv(Fn),{startNodeDrag:Ln,handleDragMove:li,handleDragEnd:Wi}=hv(ai,je,Ne,Er),{diagMode:He,setDiagMode:rt,mode:cn,setMode:ir,quizNode:Cn,setQuizNode:or,questionsAnswered:sr,setAnsweredQuestions:Br,getAnsweredIndices:T0,handleDiagClick:Gi,handleQuizAnswer:Lo,resetDiagnostic:Bt,startDeepDive:Nr,targetNode:Nt,belief:ui,setBelief:Ui,frontier:Vi,visibleFrontier:It,hasStarted:_t,nextSuggestedId:Ir,expectedRemaining:Oo,pCorrect:Ho,sessionComplete:ci,betaBeliefs:Wo,subgraphIds:Ft,ddClassification:Fr,ddNextNodeId:kt,ddComplete:Lr}=kv(Be,s,o);W.useEffect(()=>{v&&Object.keys(v).length>0&&Ui(v)},[]);const Or=W.useCallback(J=>{J.lang&&E(J.lang),J.view==="node"?(X(J.nodeId),de(null)):J.view==="resource"?(X(J.nodeId),de(J.resourceIndex)):J.view==="diagnostic"?J.mode==="quick"?(rt(!0),ir("quick"),X(null)):J.mode==="deepdive"&&J.goalNode&&(rt(!0),Nr(J.goalNode)):(X(null),de(null))},[E,rt,ir,Nr]),{setRoute:ar}=qv(Or);W.useEffect(()=>{He?ar(cn==="deepdive"&&Nt?{view:"diagnostic",mode:"deepdive",goalNode:Nt,lang:R}:{view:"diagnostic",mode:"quick",lang:R}):Z?Y!=null?ar({view:"resource",nodeId:Z,resourceIndex:Y,lang:R}):ar({view:"node",nodeId:Z,lang:R}):ar({view:"graph",lang:R})},[Z,Y,He,cn,Nt,R,ar]);const Hr=W.useMemo(()=>{const J=K.toLowerCase(),Oe=t.filter(We=>!(F.size>0&&!F.has(We.scope)||I.size>0&&!I.has(We.section)||J&&!We.label.toLowerCase().includes(J)&&!We.labelPl.toLowerCase().includes(J)));return Oe.length<t.length?new Set(Oe.map(We=>We.id)):null},[t,F,I,K]),zt=Z||me,Wr=W.useMemo(()=>{var Oe,We;if(!zt)return null;const J=new Set([zt]);return(Oe=Be.prereqs[zt])==null||Oe.forEach(Ki=>J.add(Ki)),(We=Be.dependents[zt])==null||We.forEach(Ki=>J.add(Ki)),J},[zt,Be]),di=W.useMemo(()=>!He||cn!=="deepdive"||Ft.length===0?null:new Set(Ft),[He,cn,Ft]),A0=W.useCallback(J=>{const Oe=J.target.closest("[data-node-id]");if(Oe){Ln(Oe.getAttribute("data-node-id"),J.clientX,J.clientY),J.stopPropagation();return}Et(J.clientX,J.clientY)},[Ln,Et]),M0=W.useCallback(J=>{li(J.clientX,J.clientY)||wt(J)},[li,wt]),Go=W.useCallback(()=>{Wi(),Zn()},[Wi,Zn]),Lt=W.useCallback(J=>{k&&!J.target.closest("[data-node-id]")&&X(null)},[k]),lr=W.useRef(!1);W.useEffect(()=>{if(!(!He||cn!=="quick")&&!Cn&&Ir&&!ci&&_t&&lr.current){lr.current=!1;const J=setTimeout(()=>or(Ir),400);return()=>clearTimeout(J)}},[He,cn,Cn,Ir,ci,_t]),W.useEffect(()=>{if(!(!He||cn!=="deepdive")&&!Cn&&kt&&!Lr&&lr.current){lr.current=!1;const J=setTimeout(()=>or(kt),400);return()=>clearTimeout(J)}},[He,cn,Cn,kt,Lr]),W.useEffect(()=>{const J=Oe=>{Oe.key==="Escape"&&(X(null),Pe(!1))};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[]);const Uo=W.useCallback(J=>{P(J),Ne(xl(J,300,t,r)),bt(k?Vd:Ud)},[bt,t,r,k]),P0=W.useCallback(()=>{He?(rt(!1),Bt(),X(null)):Re(!0)},[He,rt,Bt]),mi=W.useCallback(J=>{Re(!1),Bt(),J==="deepdive"?(rt(!0),Pe(!0)):(rt(!0),ir("quick"),X(null))},[rt,ir,Bt]),Vo=W.useCallback(J=>{ue(!0),Q(!1),(J==="quick"||J==="deepdive")&&mi(J)},[ue,mi]),Ko=W.useMemo(()=>{if(cn!=="deepdive")return{};const J={};for(const[Oe,We]of Object.entries(Fr))We==="known"?J[Oe]="known":We==="unknown"&&(J[Oe]="unknown");return J},[cn,Fr]),pi=cn==="deepdive"?Ko:ui,C0=cn==="deepdive"?Ft.filter(J=>Fr[J]==="uncertain"):It,R0=R==="pl"?g.title??g.titleEn:g.titleEn??g.title,on=A||Ge||ke,Qo=(J,Oe="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:J?`1px solid ${Oe}`:`1px solid ${H.border}`,background:J?`${Oe}22`:"transparent",color:J?Oe:H.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:J?600:400});return y.jsxs("div",{style:{width:"100%",height:"100dvh",background:H.bg,fontFamily:pn,color:H.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:k?"8px 12px":"8px 16px",borderBottom:`1px solid ${H.borderSubtle}`,display:"flex",alignItems:"center",gap:k?8:10,flexShrink:0},children:[(z||f)&&y.jsx("button",{onClick:z??f,style:{...Qo(!1),padding:"7px 10px"},children:"←"}),y.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:H.textPrimary,letterSpacing:k?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:R0}),y.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${H.border}`},children:[y.jsx("button",{onClick:()=>{He&&(rt(!1),Bt(),X(null))},style:{padding:k?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:He?400:700,background:He?"transparent":"#4a9eff22",color:He?H.textDim:"#4a9eff"},children:V("exploreMode",R)}),y.jsx("button",{onClick:()=>{He||Re(!0)},style:{padding:k?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${H.border}`,fontWeight:He?700:400,background:He?"#f39c1222":"transparent",color:He?"#f39c12":H.textDim},children:V(He?cn==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",R)})]}),He&&y.jsx("button",{onClick:()=>Pe(!0),style:Qo(cn==="deepdive","#8e44ad"),children:V("goalBtn",R)}),y.jsx(Rx,{lang:R,setLang:J=>E(J),layoutId:M,layouts:nm,onLayoutChange:Uo,searchTerm:K,setSearchTerm:B,filterScope:F,toggleScope:Se,clearScope:Ee,filterSection:I,toggleSection:ze,clearSection:Fe,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:d,isMobile:k})]}),y.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[y.jsxs("svg",{ref:Fn,width:"100%",height:"100%",style:{cursor:rr,touchAction:"none",pointerEvents:on?"none":"auto"},onMouseDown:A0,onMouseMove:M0,onMouseUp:Go,onMouseLeave:Go,onClick:J=>{if(Lt(J),!He)return;const Oe=J.target.closest("[data-node-id]");Oe&&Gi(Oe.getAttribute("data-node-id"),J.shiftKey)},children:[y.jsxs("defs",{children:[y.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),y.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),y.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#151b26"})})]}),y.jsxs("g",{transform:`translate(${wn.x},${wn.y}) scale(${wn.scale})`,children:[y.jsx(Tv,{edges:r,nodes:je,highlightedIds:He&&cn==="deepdive"?di:Wr}),y.jsx(Pv,{nodes:je,filteredIds:He&&cn==="deepdive"?di:Hr,highlightedIds:He?null:Wr,selected:Z,onSelect:J=>{if(He){Gi(J,!1);return}de(null),X(J===Z?null:J)},onHover:be,lang:R,diagMode:He,belief:pi,frontier:C0,scale:wn.scale,scopeColors:u})]})]}),Z&&!He&&y.jsx(bx,{nodeId:Z,nodes:je,adjacency:Be,lang:R,SCOPE_COLORS:u,SCOPE_LABELS:d,SECTIONS:a,belief:pi,evidence:b,onClose:()=>X(null),onNavigate:J=>X(J)}),He&&Cn&&y.jsx(kx,{nodeId:Cn,nodes:je,lang:R,questionBank:s,excludeIndices:T0(Cn),isMobile:k,onAnswer:(J,Oe,We)=>{lr.current=!0,Lo(Cn,J,Oe,We)},onSkip:J=>{typeof J=="number"&&Br(Oe=>new Set([...Oe,`${Cn}:${J}`])),or(null)}}),He&&cn==="quick"&&y.jsx(Sx,{belief:ui,frontier:Vi,visibleFrontier:It,hasStarted:_t,nextSuggestedId:Ir,sessionComplete:ci,adjacency:Be,expectedRemaining:Oo,pCorrect:Ho,questionsAnswered:sr,nodes:je,lang:R,onNodeClick:J=>or(J),onReset:Bt,SCOPE_LABELS:d,isMobile:k}),He&&cn==="deepdive"&&Nt&&y.jsx(jx,{nodes:je,lang:R,targetNode:Nt,subgraphIds:Ft,ddClassification:Fr,betaBeliefs:Wo,ddComplete:Lr,ddNextNodeId:kt,questionsAnswered:sr,onNodeClick:J=>or(J),onReset:Bt,isMobile:k}),!k&&y.jsx(Tx,{lang:R,diagMode:He,hasBelief:Object.keys(pi).length>0,SCOPE_COLORS:u,SCOPE_LABELS:d,SECTIONS:a}),y.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([J,Oe])=>y.jsx("button",{onClick:()=>{Oe===null?(Ne(xl(M,300,t,r)),bt(k?Vd:Ud)):bt(We=>({...We,scale:Math.max(.15,Math.min(5,We.scale*Oe))}))},style:{width:44,height:44,background:H.surface,border:`1px solid ${H.border}`,color:H.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:J},J))}),k&&He&&!Cn&&y.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${H.surface}ee`,borderTop:`1px solid ${H.border}`,display:"flex",gap:0,zIndex:20},children:[y.jsx("button",{onClick:()=>Pe(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${H.border}`,color:cn==="deepdive"?"#c39bd3":H.textDim,cursor:"pointer"},children:V("goalBtn",R)}),y.jsx("button",{onClick:P0,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:V("reset",R)})]})]}),ke&&y.jsx(Ax,{nodes:je,lang:R,SECTIONS:a,SCOPE_COLORS:u,onSelect:J=>{Pe(!1),Nr(J)},onClose:()=>Pe(!1)}),y.jsx(Mx,{isOpen:Ge,onSelect:mi,onClose:()=>Re(!1),lang:R}),y.jsx(Cx,{isOpen:A,onSelect:Vo,onClose:$e,lang:R})]})}function Ex({lang:o,setLang:t,themeId:r,onThemeChange:s,onStartQuiz:a,onBrowseMap:u}){const[d,g]=W.useState("standard");return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:H.bg,fontFamily:pn,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[y.jsxs("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:10,alignItems:"center"},children:[y.jsx("div",{style:{display:"flex",gap:5},children:Object.entries(Zl).map(([f,v])=>y.jsx("button",{onClick:()=>s(f),title:v.name,style:{width:18,height:18,borderRadius:"50%",background:v.bg,border:r===f?`2px solid ${v.textPrimary}`:`2px solid ${v.border}`,cursor:"pointer",padding:0,boxShadow:r===f?`0 0 6px ${v.textDim}`:"none"}},f))}),y.jsx("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${H.border}`},children:["pl","en"].map(f=>y.jsx("button",{onClick:()=>t(f),style:{padding:"6px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:f==="en"?`1px solid ${H.border}`:"none",background:o===f?"#4a9eff18":"transparent",color:o===f?"#4a9eff":H.textDim,fontWeight:o===f?600:400,fontFamily:pn},children:f.toUpperCase()},f))})]}),y.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[y.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:H.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:H.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:H.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:H.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:H.edgeDefault,strokeWidth:"1.5"}),y.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),y.jsx("circle",{cx:"14",cy:"44",r:"5",fill:H.known,opacity:"0.8"}),y.jsx("circle",{cx:"40",cy:"44",r:"5",fill:H.frontier,opacity:"0.8"}),y.jsx("circle",{cx:"66",cy:"44",r:"5",fill:H.unknown,opacity:"0.6"})]}),y.jsx("div",{style:{fontSize:13,fontWeight:600,color:H.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:H.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:V("heroTitle",o)}),y.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:H.textDim,maxWidth:360},children:V("heroSub",o)}),y.jsx("button",{onClick:()=>a(d),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:pn,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:f=>{f.currentTarget.style.background="#4a9eff28",f.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:f=>{f.currentTarget.style.background="#4a9eff18",f.currentTarget.style.borderColor="#4a9eff50"},children:V("heroStart",o)}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,fontSize:12},children:[y.jsx("span",{style:{color:H.textFaint},children:V("heroLength",o)}),y.jsx("select",{value:d,onChange:f=>g(f.target.value),style:{background:H.surface,border:`1px solid ${H.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:pn,color:H.textBody,cursor:"pointer",outline:"none"},children:Object.entries(Bl).map(([f,v])=>y.jsxs("option",{value:f,children:[V(v.labelKey,o)," (~",v.maxQuestions," ",V("heroQuestions",o),")"]},f))})]}),y.jsx("button",{onClick:u,style:{padding:"12px 24px",fontSize:13,fontFamily:pn,borderRadius:8,border:"none",background:"transparent",color:H.textDim,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:f=>{f.currentTarget.style.color=H.textBody},onMouseLeave:f=>{f.currentTarget.style.color=H.textDim},children:V("heroBrowse",o)}),y.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:H.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:V("heroStep1",o)},{num:"2",text:V("heroStep2",o)},{num:"3",text:V("heroStep3",o)}].map(({num:f,text:v})=>y.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[y.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${H.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:H.textDim,flexShrink:0},children:f}),y.jsx("span",{children:v})]},f))})]})]})}function Bx({RAW_NODES:o,RAW_EDGES:t,QUESTION_BANK:r,lang:s,quizPreset:a="standard",onComplete:u,onExit:d}){var Fe,Be;const g=Bl[a]??Bl.standard,f=W.useMemo(()=>Yl(o,t),[o,t]),v=W.useMemo(()=>[...new Set([...Object.keys(f.prereqs),...Object.keys(f.dependents),...Object.keys(r)])].map(Ne=>({id:Ne})),[f,r]),b=W.useMemo(()=>Object.fromEntries(o.map(ge=>[ge.id,ge])),[o]),[_,z]=W.useState({}),[k,M]=W.useState({correct:0,incorrect:0,questionsAnswered:0}),[P,R]=W.useState(new Set),[E,F]=W.useState({}),[G,I]=W.useState("answering"),[L,K]=W.useState(null),[B,Z]=W.useState(0),X=W.useMemo(()=>{const ge=k.correct+k.incorrect;return ge===0?.5:(k.correct+.5)/(ge+1)},[k]),me=W.useMemo(()=>im(v,_,f,X),[v,_,f,X]),be=W.useMemo(()=>{const ge=[];return P.forEach(Ne=>{const[je,Fn]=Ne.split(":");je===me&&ge.push(parseInt(Fn,10))}),ge},[P,me]),Y=W.useMemo(()=>me?Xd(r,me,be):null,[r,me,be]),de=W.useMemo(()=>Y?Bo.random(Y.options.length):null,[Y]),ke=W.useMemo(()=>de?de.apply(Y.options):[],[de,Y]),Pe=W.useMemo(()=>de?de.displayIndex(Y.correct):-1,[de,Y]),Ge=W.useMemo(()=>am(v,_,k.questionsAnswered,g),[v,_,k.questionsAnswered,g]);W.useEffect(()=>{Ge&&k.questionsAnswered>0&&I("done")},[Ge,k.questionsAnswered]);const Re=W.useCallback(()=>{L!==null&&I("revealed")},[L]),le=W.useCallback(()=>{const ge=L===Pe,Ne=(Y==null?void 0:Y.tests)??{[me]:1};z(je=>El(me,ge,Ne,je,f)),F(je=>({...je,[me]:{correct:ge,questionText:(Y==null?void 0:Y.q)??null}})),(Y==null?void 0:Y.index)!=null&&R(je=>new Set([...je,`${me}:${Y.index}`])),M(je=>({correct:je.correct+(ge?1:0),incorrect:je.incorrect+(ge?0:1),questionsAnswered:je.questionsAnswered+1})),K(null),I("answering"),Z(je=>je+1)},[L,Pe,Y,me,f]),we=W.useCallback(ge=>{const Ne={[me]:1};z(je=>El(me,ge,Ne,je,f)),F(je=>({...je,[me]:{correct:ge,questionText:null}})),R(je=>new Set([...je,`${me}:-1`])),M(je=>({correct:je.correct+(ge?1:0),incorrect:je.incorrect+(ge?0:1),questionsAnswered:je.questionsAnswered+1})),Z(je=>je+1)},[me,f]);W.useEffect(()=>{const ge=Ne=>{if(Ne.key==="Enter"&&(G==="answering"&&L!==null?Re():G==="revealed"&&le()),G==="answering"&&["1","2","3","4"].includes(Ne.key)){const je=parseInt(Ne.key)-1;je<ke.length&&K(je)}};return window.addEventListener("keydown",ge),()=>window.removeEventListener("keydown",ge)},[G,L,Re,le,ke.length]),W.useEffect(()=>{G==="done"&&u(_,k,E)},[G]);const ue=me?(s==="pl"?(Fe=b[me])==null?void 0:Fe.labelPl:(Be=b[me])==null?void 0:Be.label)??me:"",A=ge=>y.jsx("span",{dangerouslySetInnerHTML:{__html:$u(ge)}});if(G==="done"||!me&&k.questionsAnswered>0)return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:H.bg,fontFamily:pn,display:"flex",alignItems:"center",justifyContent:"center",color:H.textDim,fontSize:14},children:V("quizProcessing",s)});const Q=Object.values(_).filter(ge=>ge==="known").length,$e=Object.values(_).filter(ge=>ge==="unknown").length,Se=Q+$e,ze=v.length,Ee=ze>0?Math.round(Se/ze*100):0;return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:H.bg,fontFamily:pn,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[y.jsxs("div",{style:{width:"100%",maxWidth:520,padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("button",{onClick:()=>{(k.questionsAnswered===0||window.confirm(V("quizExitConfirm",s)))&&d()},style:{padding:"6px 12px",fontSize:12,fontFamily:pn,borderRadius:6,border:`1px solid ${H.border}`,background:"transparent",color:H.textDim,cursor:"pointer"},children:V("quizExit",s)}),y.jsxs("span",{style:{fontSize:12,color:H.textFaint},children:[V("quizQuestion",s)," ",k.questionsAnswered+1]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:520,marginTop:16},children:[y.jsx("div",{style:{height:3,borderRadius:2,background:H.border,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Ee}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:H.textFaint},children:[y.jsxs("span",{children:[Se,"/",ze," ",V("quizClassified",s)]}),y.jsxs("span",{children:[Math.round(X*100),"% ",V("quizAccuracy",s)]})]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:520,marginTop:40,animation:"fadeIn 0.25s ease"},children:[y.jsx("div",{style:{fontSize:11,color:H.textFaint,marginBottom:16,letterSpacing:.5},children:ue}),Y?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:16,color:H.textPrimary,lineHeight:1.7,marginBottom:28},children:A(Y.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:ke.map((ge,Ne)=>{let je="transparent",Fn=H.border,wn=H.textBody;return L===Ne&&G==="answering"&&(je="#4a9eff12",Fn="#4a9eff60",wn="#4a9eff"),G==="revealed"&&(Ne===Pe?(je="#27ae6015",Fn="#27ae6060",wn="#2ecc71"):Ne===L?(je="#e74c3c15",Fn="#e74c3c60",wn="#ff6b6b"):wn=H.textFaint),y.jsxs("button",{onClick:()=>{G==="answering"&&K(Ne)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:pn,cursor:G==="answering"?"pointer":"default",background:je,border:`1px solid ${Fn}`,color:wn,lineHeight:1.6,transition:"all 0.15s ease"},children:[y.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][Ne]}),A(ge)]},Ne)})}),G==="revealed"&&Y.hint&&y.jsx("div",{style:{fontSize:12,color:H.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${H.border}`},children:A(Y.hint)}),G==="answering"?y.jsxs("button",{onClick:Re,disabled:L===null,style:{...c0("#4a9eff"),width:"100%",opacity:L===null?.3:1},children:[V("quizCheck",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):y.jsxs("button",{onClick:le,style:{...c0(L===Pe?H.known:"#4a9eff"),width:"100%"},children:[V("quizContinue",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):y.jsxs("div",{children:[y.jsx("p",{style:{fontSize:15,color:H.textBody,lineHeight:1.7,marginBottom:24},children:V("quizNoQuestion",s)}),y.jsxs("div",{style:{display:"flex",gap:10},children:[y.jsx("button",{onClick:()=>we(!0),style:{...c0(H.known),flex:1},children:V("quizYes",s)}),y.jsx("button",{onClick:()=>we(!1),style:{...c0(H.unknown),flex:1},children:V("quizNo",s)})]})]})]},B),y.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function c0(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:pn,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function Nx({RAW_NODES:o,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:s,belief:a,stats:u,lang:d,onSeeMap:g,onRetake:f}){const v=W.useMemo(()=>Yl(o,t),[o,t]),b=W.useMemo(()=>Object.fromEntries(o.map(F=>[F.id,F])),[o]),_=F=>{var G,I;return d==="pl"?(G=b[F])==null?void 0:G.labelPl:(I=b[F])==null?void 0:I.label},z=o.filter(F=>a[F.id]==="known"),k=o.filter(F=>a[F.id]==="unknown"),M=o.length,P=W.useMemo(()=>k.filter(F=>(v.prereqs[F.id]??[]).every(G=>a[G]==="known")).slice(0,8),[k,v,a]),R=u.correct+u.incorrect>0?Math.round(u.correct/(u.correct+u.incorrect)*100):0,E=P.length>0;return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:H.bg,fontFamily:pn,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:y.jsxs("div",{style:{maxWidth:520,width:"100%"},children:[y.jsx("div",{style:{fontSize:11,color:H.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:H.textPrimary,lineHeight:1.3},children:V("resultsTitle",d)}),y.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:H.textDim,lineHeight:1.6},children:[u.questionsAnswered," ",V("resultsAnswered",d)," · ",R,"% ",V("resultsAccuracy",d)]}),y.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[y.jsx(Kd,{count:z.length,label:V("resultsKnown",d),color:H.known,total:M}),y.jsx(Kd,{count:k.length,label:V("resultsToStudy",d),color:"#e74c3c",total:M})]}),E&&y.jsxs("div",{style:{marginBottom:32},children:[y.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:H.textPrimary},children:V("resultsGapsTitle",d)}),y.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:H.textDim,lineHeight:1.6},children:V("resultsGapsSub",d)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:P.map((F,G)=>{var B;const I=(r==null?void 0:r[F.scope])??H.textDim,L=((B=s==null?void 0:s[F.scope])==null?void 0:B[d==="pl"?"pl":"en"])??"",K=F.resources&&F.resources.length>0;return y.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12},children:[y.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${I}18`,border:`1px solid ${I}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:I,flexShrink:0,fontWeight:600},children:G+1}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:H.textPrimary,fontWeight:500},children:_(F.id)}),y.jsxs("div",{style:{fontSize:10,color:H.textFaint,marginTop:2},children:[L,K&&y.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:V("resultsHasResource",d)})]})]})]},F.id)})}),k.length>P.length&&y.jsxs("div",{style:{marginTop:8,fontSize:11,color:H.textFaint},children:["+",k.length-P.length," ",V("resultsMore",d)]})]}),!E&&k.length===0&&y.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:15,color:H.known,fontWeight:600,marginBottom:4},children:V("resultsAllGood",d)}),y.jsx("div",{style:{fontSize:12,color:H.textDim},children:V("resultsAllGoodSub",d)})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[y.jsx("button",{onClick:g,style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:pn,borderRadius:8,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer"},children:V("resultsSeeMap",d)}),y.jsx("button",{onClick:f,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:pn,borderRadius:8,border:`1px solid ${H.border}`,background:"transparent",color:H.textDim,cursor:"pointer"},children:V("resultsRetake",d)})]})]})})}function Kd({count:o,label:t,color:r,total:s}){const a=s>0?Math.round(o/s*100):0;return y.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),y.jsx("div",{style:{fontSize:11,color:H.textFaint,marginTop:6},children:t}),y.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${a}%`,background:r,opacity:.6}})}),y.jsxs("div",{style:{fontSize:10,color:H.textFaint,marginTop:4},children:[a,"% of ",s]})]})}function Ix(){const o=V7,t=U7[o],[r,s]=ct("lang","pl"),[a,u]=ct("theme","midnight"),[d,g]=W.useState("hero"),f=W.useCallback(K=>{ed(K),u(K)},[u]);ed(a);const[v,b]=W.useState(null),[_,z]=W.useState(null),[k,M]=W.useState(null),[P,R]=W.useState("standard"),E=W.useCallback((K="standard")=>{R(K),b(null),z(null),M(null),g("quiz")},[]),F=W.useCallback((K,B,Z)=>{b(K),z(B),M(Z??{}),g("results")},[]),G=W.useCallback(()=>{g("map")},[]),I=W.useCallback(()=>{b(null),z(null),M(null),g("map")},[]),L=W.useCallback(()=>{g("hero")},[]);if(!t)return null;switch(d){case"hero":return y.jsx(Ex,{lang:r,setLang:s,themeId:a,onThemeChange:f,onStartQuiz:E,onBrowseMap:I});case"quiz":return y.jsx(Bx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:P,onComplete:F,onExit:L});case"results":return y.jsx(Nx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:v,stats:_,evidence:k,lang:r,onSeeMap:G,onRetake:()=>E(P)});case"map":return y.jsx(Dx,{courseId:o,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:v,initialEvidence:k,initialLang:r,onBackToHome:L},o);default:return null}}Xf.createRoot(document.getElementById("root")).render(y.jsx(W.StrictMode,{children:y.jsx(Ix,{})}));
