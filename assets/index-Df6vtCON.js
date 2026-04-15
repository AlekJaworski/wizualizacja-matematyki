(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();var pl={exports:{}},jo={},fl={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function Of(){if(O1)return Ie;O1=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.iterator;function z(M){return M===null||typeof M!="object"?null:(M=_&&M[_]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,T={};function B(M,Q,_e){this.props=M,this.context=Q,this.refs=T,this.updater=_e||k}B.prototype.isReactComponent={},B.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},B.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function R(){}R.prototype=B.prototype;function I(M,Q,_e){this.props=M,this.context=Q,this.refs=T,this.updater=_e||k}var W=I.prototype=new R;W.constructor=I,D(W,B.prototype),W.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,Z={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function V(M,Q,_e){var qe,Se={},De=null,he=null;if(Q!=null)for(qe in Q.ref!==void 0&&(he=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)O.call(Q,qe)&&!E.hasOwnProperty(qe)&&(Se[qe]=Q[qe]);var je=arguments.length-2;if(je===1)Se.children=_e;else if(1<je){for(var $e=Array(je),He=0;He<je;He++)$e[He]=arguments[He+2];Se.children=$e}if(M&&M.defaultProps)for(qe in je=M.defaultProps,je)Se[qe]===void 0&&(Se[qe]=je[qe]);return{$$typeof:o,type:M,key:De,ref:he,props:Se,_owner:Z.current}}function te(M,Q){return{$$typeof:o,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function me(M){return typeof M=="object"&&M!==null&&M.$$typeof===o}function se(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(_e){return Q[_e]})}var ae=/\/+/g;function ye(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?se(""+M.key):Q.toString(36)}function xe(M,Q,_e,qe,Se){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var he=!1;if(M===null)he=!0;else switch(De){case"string":case"number":he=!0;break;case"object":switch(M.$$typeof){case o:case t:he=!0}}if(he)return he=M,Se=Se(he),M=qe===""?"."+ye(he,0):qe,F(Se)?(_e="",M!=null&&(_e=M.replace(ae,"$&/")+"/"),xe(Se,Q,_e,"",function(He){return He})):Se!=null&&(me(Se)&&(Se=te(Se,_e+(!Se.key||he&&he.key===Se.key?"":(""+Se.key).replace(ae,"$&/")+"/")+M)),Q.push(Se)),1;if(he=0,qe=qe===""?".":qe+":",F(M))for(var je=0;je<M.length;je++){De=M[je];var $e=qe+ye(De,je);he+=xe(De,Q,_e,$e,Se)}else if($e=z(M),typeof $e=="function")for(M=$e.call(M),je=0;!(De=M.next()).done;)De=De.value,$e=qe+ye(De,je++),he+=xe(De,Q,_e,$e,Se);else if(De==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return he}function Fe(M,Q,_e){if(M==null)return M;var qe=[],Se=0;return xe(M,qe,"","",function(De){return Q.call(_e,De,Se++)}),qe}function Be(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(_e){(M._status===0||M._status===-1)&&(M._status=1,M._result=_e)},function(_e){(M._status===0||M._status===-1)&&(M._status=2,M._result=_e)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Le={current:null},ue={transition:null},be={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:ue,ReactCurrentOwner:Z};function de(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Fe,forEach:function(M,Q,_e){Fe(M,function(){Q.apply(this,arguments)},_e)},count:function(M){var Q=0;return Fe(M,function(){Q++}),Q},toArray:function(M){return Fe(M,function(Q){return Q})||[]},only:function(M){if(!me(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ie.Component=B,Ie.Fragment=r,Ie.Profiler=a,Ie.PureComponent=I,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=be,Ie.act=de,Ie.cloneElement=function(M,Q,_e){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var qe=D({},M.props),Se=M.key,De=M.ref,he=M._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,he=Z.current),Q.key!==void 0&&(Se=""+Q.key),M.type&&M.type.defaultProps)var je=M.type.defaultProps;for($e in Q)O.call(Q,$e)&&!E.hasOwnProperty($e)&&(qe[$e]=Q[$e]===void 0&&je!==void 0?je[$e]:Q[$e])}var $e=arguments.length-2;if($e===1)qe.children=_e;else if(1<$e){je=Array($e);for(var He=0;He<$e;He++)je[He]=arguments[He+2];qe.children=je}return{$$typeof:o,type:M.type,key:Se,ref:De,props:qe,_owner:he}},Ie.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},Ie.createElement=V,Ie.createFactory=function(M){var Q=V.bind(null,M);return Q.type=M,Q},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(M){return{$$typeof:h,render:M}},Ie.isValidElement=me,Ie.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:Be}},Ie.memo=function(M,Q){return{$$typeof:x,type:M,compare:Q===void 0?null:Q}},Ie.startTransition=function(M){var Q=ue.transition;ue.transition={};try{M()}finally{ue.transition=Q}},Ie.unstable_act=de,Ie.useCallback=function(M,Q){return Le.current.useCallback(M,Q)},Ie.useContext=function(M){return Le.current.useContext(M)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(M){return Le.current.useDeferredValue(M)},Ie.useEffect=function(M,Q){return Le.current.useEffect(M,Q)},Ie.useId=function(){return Le.current.useId()},Ie.useImperativeHandle=function(M,Q,_e){return Le.current.useImperativeHandle(M,Q,_e)},Ie.useInsertionEffect=function(M,Q){return Le.current.useInsertionEffect(M,Q)},Ie.useLayoutEffect=function(M,Q){return Le.current.useLayoutEffect(M,Q)},Ie.useMemo=function(M,Q){return Le.current.useMemo(M,Q)},Ie.useReducer=function(M,Q,_e){return Le.current.useReducer(M,Q,_e)},Ie.useRef=function(M){return Le.current.useRef(M)},Ie.useState=function(M){return Le.current.useState(M)},Ie.useSyncExternalStore=function(M,Q,_e){return Le.current.useSyncExternalStore(M,Q,_e)},Ie.useTransition=function(){return Le.current.useTransition()},Ie.version="18.3.1",Ie}var H1;function Kl(){return H1||(H1=1,fl.exports=Of()),fl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function Hf(){if(W1)return jo;W1=1;var o=Kl(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,g,x){var b,_={},z=null,k=null;x!==void 0&&(z=""+x),g.key!==void 0&&(z=""+g.key),g.ref!==void 0&&(k=g.ref);for(b in g)s.call(g,b)&&!u.hasOwnProperty(b)&&(_[b]=g[b]);if(h&&h.defaultProps)for(b in g=h.defaultProps,g)_[b]===void 0&&(_[b]=g[b]);return{$$typeof:t,type:h,key:z,ref:k,props:_,_owner:a.current}}return jo.Fragment=r,jo.jsx=d,jo.jsxs=d,jo}var G1;function Wf(){return G1||(G1=1,pl.exports=Hf()),pl.exports}var y=Wf(),H=Kl(),es={},hl={exports:{}},Gn={},gl={exports:{}},yl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function Gf(){return U1||(U1=1,(function(o){function t(ue,be){var de=ue.length;ue.push(be);e:for(;0<de;){var M=de-1>>>1,Q=ue[M];if(0<a(Q,be))ue[M]=be,ue[de]=Q,de=M;else break e}}function r(ue){return ue.length===0?null:ue[0]}function s(ue){if(ue.length===0)return null;var be=ue[0],de=ue.pop();if(de!==be){ue[0]=de;e:for(var M=0,Q=ue.length,_e=Q>>>1;M<_e;){var qe=2*(M+1)-1,Se=ue[qe],De=qe+1,he=ue[De];if(0>a(Se,de))De<Q&&0>a(he,Se)?(ue[M]=he,ue[De]=de,M=De):(ue[M]=Se,ue[qe]=de,M=qe);else if(De<Q&&0>a(he,de))ue[M]=he,ue[De]=de,M=De;else break e}}return be}function a(ue,be){var de=ue.sortIndex-be.sortIndex;return de!==0?de:ue.id-be.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],x=[],b=1,_=null,z=3,k=!1,D=!1,T=!1,B=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(ue){for(var be=r(x);be!==null;){if(be.callback===null)s(x);else if(be.startTime<=ue)s(x),be.sortIndex=be.expirationTime,t(g,be);else break;be=r(x)}}function F(ue){if(T=!1,W(ue),!D)if(r(g)!==null)D=!0,Be(O);else{var be=r(x);be!==null&&Le(F,be.startTime-ue)}}function O(ue,be){D=!1,T&&(T=!1,R(V),V=-1),k=!0;var de=z;try{for(W(be),_=r(g);_!==null&&(!(_.expirationTime>be)||ue&&!se());){var M=_.callback;if(typeof M=="function"){_.callback=null,z=_.priorityLevel;var Q=M(_.expirationTime<=be);be=o.unstable_now(),typeof Q=="function"?_.callback=Q:_===r(g)&&s(g),W(be)}else s(g);_=r(g)}if(_!==null)var _e=!0;else{var qe=r(x);qe!==null&&Le(F,qe.startTime-be),_e=!1}return _e}finally{_=null,z=de,k=!1}}var Z=!1,E=null,V=-1,te=5,me=-1;function se(){return!(o.unstable_now()-me<te)}function ae(){if(E!==null){var ue=o.unstable_now();me=ue;var be=!0;try{be=E(!0,ue)}finally{be?ye():(Z=!1,E=null)}}else Z=!1}var ye;if(typeof I=="function")ye=function(){I(ae)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Fe=xe.port2;xe.port1.onmessage=ae,ye=function(){Fe.postMessage(null)}}else ye=function(){B(ae,0)};function Be(ue){E=ue,Z||(Z=!0,ye())}function Le(ue,be){V=B(function(){ue(o.unstable_now())},be)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ue){ue.callback=null},o.unstable_continueExecution=function(){D||k||(D=!0,Be(O))},o.unstable_forceFrameRate=function(ue){0>ue||125<ue?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<ue?Math.floor(1e3/ue):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return r(g)},o.unstable_next=function(ue){switch(z){case 1:case 2:case 3:var be=3;break;default:be=z}var de=z;z=be;try{return ue()}finally{z=de}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ue,be){switch(ue){case 1:case 2:case 3:case 4:case 5:break;default:ue=3}var de=z;z=ue;try{return be()}finally{z=de}},o.unstable_scheduleCallback=function(ue,be,de){var M=o.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?M+de:M):de=M,ue){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=de+Q,ue={id:b++,callback:be,priorityLevel:ue,startTime:de,expirationTime:Q,sortIndex:-1},de>M?(ue.sortIndex=de,t(x,ue),r(g)===null&&ue===r(x)&&(T?(R(V),V=-1):T=!0,Le(F,de-M))):(ue.sortIndex=Q,t(g,ue),D||k||(D=!0,Be(O))),ue},o.unstable_shouldYield=se,o.unstable_wrapCallback=function(ue){var be=z;return function(){var de=z;z=be;try{return ue.apply(this,arguments)}finally{z=de}}}})(yl)),yl}var V1;function Uf(){return V1||(V1=1,gl.exports=Gf()),gl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1;function Vf(){if(K1)return Gn;K1=1;var o=Kl(),t=Uf();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(a[e]=n,e=0;e<n.length;e++)s.add(n[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},_={};function z(e){return g.call(_,e)?!0:g.call(b,e)?!1:x.test(e)?_[e]=!0:(b[e]=!0,!1)}function k(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,n,i,l){if(n===null||typeof n>"u"||k(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function T(e,n,i,l,c,p,$){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=$}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];B[n]=new T(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(R,I);B[n]=new T(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(R,I);B[n]=new T(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(R,I);B[n]=new T(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,n,i,l){var c=B.hasOwnProperty(n)?B[n]:null;(c!==null?c.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(D(n,i,c,l)&&(i=null),l||c===null?z(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(n=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(n):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var F=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),Z=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),se=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),ue=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,M;function Q(e){if(M===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var _e=!1;function qe(e,n){if(!e||_e)return"";_e=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(U){var l=U}Reflect.construct(e,[],n)}else{try{n.call()}catch(U){l=U}e.call(n.prototype)}else{try{throw Error()}catch(U){l=U}e()}}catch(U){if(U&&l&&typeof U.stack=="string"){for(var c=U.stack.split(`
`),p=l.stack.split(`
`),$=c.length-1,S=p.length-1;1<=$&&0<=S&&c[$]!==p[S];)S--;for(;1<=$&&0<=S;$--,S--)if(c[$]!==p[S]){if($!==1||S!==1)do if($--,S--,0>S||c[$]!==p[S]){var A=`
`+c[$].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=$&&0<=S);break}}}finally{_e=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Q(e):""}function Se(e){switch(e.tag){case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return e=qe(e.type,!1),e;case 11:return e=qe(e.type.render,!1),e;case 1:return e=qe(e.type,!0),e;default:return""}}function De(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case Z:return"Portal";case te:return"Profiler";case V:return"StrictMode";case ye:return"Suspense";case xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case me:return(e._context.displayName||"Context")+".Provider";case ae:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fe:return n=e.displayName||null,n!==null?n:De(e.type)||"Memo";case Be:n=e._payload,e=e._init;try{return De(e(n))}catch{}}return null}function he(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(n);case 8:return n===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function je(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(e){var n=$e(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,p=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function($){l=""+$,p.call(this,$)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function($){l=""+$},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bn(e){e._valueTracker||(e._valueTracker=He(e))}function Nt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=$e(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function tt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dr(e,n){var i=n.checked;return de({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Er(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=je(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function tr(e,n){n=n.checked,n!=null&&W(e,"checked",n,!1)}function rr(e,n){tr(e,n);var i=je(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?kt(e,n.type,i):n.hasOwnProperty("defaultValue")&&kt(e,n.type,je(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ir(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function kt(e,n,i){(n!=="number"||tt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Kn=Array.isArray;function Nn(e,n,i,l){if(e=e.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=n.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+je(i),n=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function oi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return de({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oe(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(Kn(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:je(i)}}function rt(e,n){var i=je(n.value),l=je(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function un(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Br(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function In(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Br(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zt,Ii=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,c)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(zt=zt||document.createElement("div"),zt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Nr(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Io=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){Io.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ir[n]=Ir[e]})});function Fo(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+n).trim():n+"px"}function St(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Fo(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var Fi=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function It(e,n){if(n){if(Fi[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function si(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ai=null,jt=null,ft=null;function Lo(e){if(e=mo(e)){if(typeof ai!="function")throw Error(r(280));var n=e.stateNode;n&&(n=h0(n),ai(e.stateNode,e.type,n))}}function Oo(e){jt?ft?ft.push(e):ft=[e]:jt=e}function li(){if(jt){var e=jt,n=ft;if(ft=jt=null,Lo(e),n)for(e=0;e<n.length;e++)Lo(n[e])}}function Ho(e,n){return e(n)}function or(){}var sr=!1;function Fr(e,n,i){if(sr)return e(n,i);sr=!0;try{return Ho(e,n,i)}finally{sr=!1,(jt!==null||ft!==null)&&(or(),li())}}function Ft(e,n){var i=e.stateNode;if(i===null)return null;var l=h0(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var Hi=!1;if(h)try{var it={};Object.defineProperty(it,"passive",{get:function(){Hi=!0}}),window.addEventListener("test",it,it),window.removeEventListener("test",it,it)}catch{Hi=!1}function Ts(e,n,i,l,c,p,$,S,A){var U=Array.prototype.slice.call(arguments,3);try{n.apply(i,U)}catch(ee){this.onError(ee)}}var ht=!1,Lr=null,Or=!1,Wi=null,As={onError:function(e){ht=!0,Lr=e}};function Wo(e,n,i,l,c,p,$,S,A){ht=!1,Lr=null,Ts.apply(As,arguments)}function Ms(e,n,i,l,c,p,$,S,A){if(Wo.apply(this,arguments),ht){if(ht){var U=Lr;ht=!1,Lr=null}else throw Error(r(198));Or||(Or=!0,Wi=U)}}function Qn(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Go(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Uo(e){if(Qn(e)!==e)throw Error(r(188))}function Gi(e){var n=e.alternate;if(!n){if(n=Qn(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,l=n;;){var c=i.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===i)return Uo(c),e;if(p===l)return Uo(c),n;p=p.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=p;else{for(var $=!1,S=c.child;S;){if(S===i){$=!0,i=c,l=p;break}if(S===l){$=!0,l=c,i=p;break}S=S.sibling}if(!$){for(S=p.child;S;){if(S===i){$=!0,i=p,l=c;break}if(S===l){$=!0,l=p,i=c;break}S=S.sibling}if(!$)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function Vo(e){return e=Gi(e),e!==null?Ko(e):null}function Ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ko(e);if(n!==null)return n;e=e.sibling}return null}var Ui=t.unstable_scheduleCallback,Qo=t.unstable_cancelCallback,Ps=t.unstable_shouldYield,Cs=t.unstable_requestPaint,nn=t.unstable_now,Y=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,We=t.unstable_UserBlockingPriority,ar=t.unstable_NormalPriority,np=t.unstable_LowPriority,vu=t.unstable_IdlePriority,Zo=null,qt=null;function tp(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:op,rp=Math.log,ip=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(rp(e)/ip|0)|0}var Yo=64,Xo=4194304;function Vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,p=e.pingedLanes,$=i&268435455;if($!==0){var S=$&~c;S!==0?l=Vi(S):(p&=$,p!==0&&(l=Vi(p)))}else $=i&~c,$!==0?l=Vi($):p!==0&&(l=Vi(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&c)===0&&(c=l&-l,p=n&-n,c>=p||c===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-gt(n),c=1<<i,l|=e[i],n&=~c;return l}function sp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,p=e.pendingLanes;0<p;){var $=31-gt(p),S=1<<$,A=c[$];A===-1?((S&i)===0||(S&l)!==0)&&(c[$]=sp(S,n)):A<=n&&(e.expiredLanes|=S),p&=~S}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=Yo;return Yo<<=1,(Yo&4194240)===0&&(Yo=64),e}function Ds(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ki(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-gt(n),e[n]=i}function lp(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-gt(i),p=1<<c;n[c]=0,l[c]=-1,e[c]=-1,i&=~p}}function Es(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-gt(i),c=1<<l;c&n|e[l]&n&&(e[l]|=n),i&=~c}}var Qe=0;function $u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bu,Bs,wu,_u,ku,Ns=!1,e0=[],lr=null,ur=null,cr=null,Qi=new Map,Zi=new Map,dr=[],up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(e,n){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Qi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(n.pointerId)}}function Yi(e,n,i,l,c,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},n!==null&&(n=mo(n),n!==null&&Bs(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function cp(e,n,i,l,c){switch(n){case"focusin":return lr=Yi(lr,e,n,i,l,c),!0;case"dragenter":return ur=Yi(ur,e,n,i,l,c),!0;case"mouseover":return cr=Yi(cr,e,n,i,l,c),!0;case"pointerover":var p=c.pointerId;return Qi.set(p,Yi(Qi.get(p)||null,e,n,i,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Zi.set(p,Yi(Zi.get(p)||null,e,n,i,l,c)),!0}return!1}function Su(e){var n=Hr(e.target);if(n!==null){var i=Qn(n);if(i!==null){if(n=i.tag,n===13){if(n=Go(i),n!==null){e.blockedOn=n,ku(e.priority,function(){wu(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function n0(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Fs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Li=l,i.target.dispatchEvent(l),Li=null}else return n=mo(i),n!==null&&Bs(n),e.blockedOn=i,!1;n.shift()}return!0}function ju(e,n,i){n0(e)&&i.delete(n)}function dp(){Ns=!1,lr!==null&&n0(lr)&&(lr=null),ur!==null&&n0(ur)&&(ur=null),cr!==null&&n0(cr)&&(cr=null),Qi.forEach(ju),Zi.forEach(ju)}function Xi(e,n){e.blockedOn===n&&(e.blockedOn=null,Ns||(Ns=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,dp)))}function Ji(e){function n(c){return Xi(c,e)}if(0<e0.length){Xi(e0[0],e);for(var i=1;i<e0.length;i++){var l=e0[i];l.blockedOn===e&&(l.blockedOn=null)}}for(lr!==null&&Xi(lr,e),ur!==null&&Xi(ur,e),cr!==null&&Xi(cr,e),Qi.forEach(n),Zi.forEach(n),i=0;i<dr.length;i++)l=dr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<dr.length&&(i=dr[0],i.blockedOn===null);)Su(i),i.blockedOn===null&&dr.shift()}var ui=F.ReactCurrentBatchConfig,t0=!0;function mp(e,n,i,l){var c=Qe,p=ui.transition;ui.transition=null;try{Qe=1,Is(e,n,i,l)}finally{Qe=c,ui.transition=p}}function pp(e,n,i,l){var c=Qe,p=ui.transition;ui.transition=null;try{Qe=4,Is(e,n,i,l)}finally{Qe=c,ui.transition=p}}function Is(e,n,i,l){if(t0){var c=Fs(e,n,i,l);if(c===null)ra(e,n,l,r0,i),zu(e,l);else if(cp(c,e,n,i,l))l.stopPropagation();else if(zu(e,l),n&4&&-1<up.indexOf(e)){for(;c!==null;){var p=mo(c);if(p!==null&&bu(p),p=Fs(e,n,i,l),p===null&&ra(e,n,l,r0,i),p===c)break;c=p}c!==null&&l.stopPropagation()}else ra(e,n,l,null,i)}}var r0=null;function Fs(e,n,i,l){if(r0=null,e=Oi(l),e=Hr(e),e!==null)if(n=Qn(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Go(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return r0=e,null}function qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ne:return 1;case We:return 4;case ar:case np:return 16;case vu:return 536870912;default:return 16}default:return 16}}var mr=null,Ls=null,i0=null;function Tu(){if(i0)return i0;var e,n=Ls,i=n.length,l,c="value"in mr?mr.value:mr.textContent,p=c.length;for(e=0;e<i&&n[e]===c[e];e++);var $=i-e;for(l=1;l<=$&&n[i-l]===c[p-l];l++);return i0=c.slice(e,1<l?1-l:void 0)}function o0(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function s0(){return!0}function Au(){return!1}function Zn(e){function n(i,l,c,p,$){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=$,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?s0:Au,this.isPropagationStopped=Au,this}return de(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=s0)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=s0)},persist:function(){},isPersistent:s0}),n}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Zn(ci),eo=de({},ci,{view:0,detail:0}),fp=Zn(eo),Hs,Ws,no,a0=de({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(Hs=e.screenX-no.screenX,Ws=e.screenY-no.screenY):Ws=Hs=0,no=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),Mu=Zn(a0),hp=de({},a0,{dataTransfer:0}),gp=Zn(hp),yp=de({},eo,{relatedTarget:0}),Gs=Zn(yp),vp=de({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),xp=Zn(vp),$p=de({},ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=Zn($p),wp=de({},ci,{data:0}),Pu=Zn(wp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zp[e])?!!n[e]:!1}function Us(){return Sp}var jp=de({},eo,{key:function(e){if(e.key){var n=_p[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=o0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?o0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?o0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qp=Zn(jp),Tp=de({},a0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Zn(Tp),Ap=de({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),Mp=Zn(Ap),Pp=de({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cp=Zn(Pp),Rp=de({},a0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=Zn(Rp),Ep=[9,13,27,32],Vs=h&&"CompositionEvent"in window,to=null;h&&"documentMode"in document&&(to=document.documentMode);var Bp=h&&"TextEvent"in window&&!to,Ru=h&&(!Vs||to&&8<to&&11>=to),Du=" ",Eu=!1;function Bu(e,n){switch(e){case"keyup":return Ep.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var di=!1;function Np(e,n){switch(e){case"compositionend":return Nu(n);case"keypress":return n.which!==32?null:(Eu=!0,Du);case"textInput":return e=n.data,e===Du&&Eu?null:e;default:return null}}function Ip(e,n){if(di)return e==="compositionend"||!Vs&&Bu(e,n)?(e=Tu(),i0=Ls=mr=null,di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ru&&n.locale!=="ko"?null:n.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fp[e.type]:n==="textarea"}function Fu(e,n,i,l){Oo(l),n=m0(n,"onChange"),0<n.length&&(i=new Os("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var ro=null,io=null;function Lp(e){ic(e,0)}function l0(e){var n=gi(e);if(Nt(n))return e}function Op(e,n){if(e==="change")return n}var Lu=!1;if(h){var Ks;if(h){var Qs="oninput"in document;if(!Qs){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Qs=typeof Ou.oninput=="function"}Ks=Qs}else Ks=!1;Lu=Ks&&(!document.documentMode||9<document.documentMode)}function Hu(){ro&&(ro.detachEvent("onpropertychange",Wu),io=ro=null)}function Wu(e){if(e.propertyName==="value"&&l0(io)){var n=[];Fu(n,io,e,Oi(e)),Fr(Lp,n)}}function Hp(e,n,i){e==="focusin"?(Hu(),ro=n,io=i,ro.attachEvent("onpropertychange",Wu)):e==="focusout"&&Hu()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return l0(io)}function Gp(e,n){if(e==="click")return l0(n)}function Up(e,n){if(e==="input"||e==="change")return l0(n)}function Vp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yt=typeof Object.is=="function"?Object.is:Vp;function oo(e,n){if(yt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!g.call(n,c)||!yt(e[c],n[c]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uu(e,n){var i=Gu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Gu(i)}}function Vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ku(){for(var e=window,n=tt();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=tt(e.document)}return n}function Zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Kp(e){var n=Ku(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Vu(i.ownerDocument.documentElement,i)){if(l!==null&&Zs(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!e.extend&&p>l&&(c=l,l=p,p=c),c=Uu(i,p);var $=Uu(i,l);c&&$&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==$.node||e.focusOffset!==$.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),e.removeAllRanges(),p>l?(e.addRange(n),e.extend($.node,$.offset)):(n.setEnd($.node,$.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qp=h&&"documentMode"in document&&11>=document.documentMode,mi=null,Ys=null,so=null,Xs=!1;function Qu(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Xs||mi==null||mi!==tt(l)||(l=mi,"selectionStart"in l&&Zs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&oo(so,l)||(so=l,l=m0(Ys,"onSelect"),0<l.length&&(n=new Os("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=mi)))}function u0(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var pi={animationend:u0("Animation","AnimationEnd"),animationiteration:u0("Animation","AnimationIteration"),animationstart:u0("Animation","AnimationStart"),transitionend:u0("Transition","TransitionEnd")},Js={},Zu={};h&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function c0(e){if(Js[e])return Js[e];if(!pi[e])return e;var n=pi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Zu)return Js[e]=n[i];return e}var Yu=c0("animationend"),Xu=c0("animationiteration"),Ju=c0("animationstart"),ec=c0("transitionend"),nc=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(e,n){nc.set(e,n),u(n,[e])}for(var ea=0;ea<tc.length;ea++){var na=tc[ea],Zp=na.toLowerCase(),Yp=na[0].toUpperCase()+na.slice(1);pr(Zp,"on"+Yp)}pr(Yu,"onAnimationEnd"),pr(Xu,"onAnimationIteration"),pr(Ju,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(ec,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function rc(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,Ms(l,n,void 0,e),e.currentTarget=null}function ic(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var $=l.length-1;0<=$;$--){var S=l[$],A=S.instance,U=S.currentTarget;if(S=S.listener,A!==p&&c.isPropagationStopped())break e;rc(c,S,U),p=A}else for($=0;$<l.length;$++){if(S=l[$],A=S.instance,U=S.currentTarget,S=S.listener,A!==p&&c.isPropagationStopped())break e;rc(c,S,U),p=A}}}if(Or)throw e=Wi,Or=!1,Wi=null,e}function Je(e,n){var i=n[ua];i===void 0&&(i=n[ua]=new Set);var l=e+"__bubble";i.has(l)||(oc(n,e,2,!1),i.add(l))}function ta(e,n,i){var l=0;n&&(l|=4),oc(i,e,l,n)}var d0="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[d0]){e[d0]=!0,s.forEach(function(i){i!=="selectionchange"&&(Xp.has(i)||ta(i,!1,e),ta(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[d0]||(n[d0]=!0,ta("selectionchange",!1,n))}}function oc(e,n,i,l){switch(qu(n)){case 1:var c=mp;break;case 4:c=pp;break;default:c=Is}i=c.bind(null,n,i,e),c=void 0,!Hi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(n,i,{capture:!0,passive:c}):e.addEventListener(n,i,!0):c!==void 0?e.addEventListener(n,i,{passive:c}):e.addEventListener(n,i,!1)}function ra(e,n,i,l,c){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var $=l.tag;if($===3||$===4){var S=l.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if($===4)for($=l.return;$!==null;){var A=$.tag;if((A===3||A===4)&&(A=$.stateNode.containerInfo,A===c||A.nodeType===8&&A.parentNode===c))return;$=$.return}for(;S!==null;){if($=Hr(S),$===null)return;if(A=$.tag,A===5||A===6){l=p=$;continue e}S=S.parentNode}}l=l.return}Fr(function(){var U=p,ee=Oi(i),re=[];e:{var X=nc.get(e);if(X!==void 0){var fe=Os,we=e;switch(e){case"keypress":if(o0(i)===0)break e;case"keydown":case"keyup":fe=qp;break;case"focusin":we="focus",fe=Gs;break;case"focusout":we="blur",fe=Gs;break;case"beforeblur":case"afterblur":fe=Gs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Mp;break;case Yu:case Xu:case Ju:fe=xp;break;case ec:fe=Cp;break;case"scroll":fe=fp;break;case"wheel":fe=Dp;break;case"copy":case"cut":case"paste":fe=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Cu}var ke=(n&4)!==0,mn=!ke&&e==="scroll",N=ke?X!==null?X+"Capture":null:X;ke=[];for(var C=U,L;C!==null;){L=C;var le=L.stateNode;if(L.tag===5&&le!==null&&(L=le,N!==null&&(le=Ft(C,N),le!=null&&ke.push(uo(C,le,L)))),mn)break;C=C.return}0<ke.length&&(X=new fe(X,we,null,i,ee),re.push({event:X,listeners:ke}))}}if((n&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",X&&i!==Li&&(we=i.relatedTarget||i.fromElement)&&(Hr(we)||we[Lt]))break e;if((fe||X)&&(X=ee.window===ee?ee:(X=ee.ownerDocument)?X.defaultView||X.parentWindow:window,fe?(we=i.relatedTarget||i.toElement,fe=U,we=we?Hr(we):null,we!==null&&(mn=Qn(we),we!==mn||we.tag!==5&&we.tag!==6)&&(we=null)):(fe=null,we=U),fe!==we)){if(ke=Mu,le="onMouseLeave",N="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Cu,le="onPointerLeave",N="onPointerEnter",C="pointer"),mn=fe==null?X:gi(fe),L=we==null?X:gi(we),X=new ke(le,C+"leave",fe,i,ee),X.target=mn,X.relatedTarget=L,le=null,Hr(ee)===U&&(ke=new ke(N,C+"enter",we,i,ee),ke.target=L,ke.relatedTarget=mn,le=ke),mn=le,fe&&we)n:{for(ke=fe,N=we,C=0,L=ke;L;L=fi(L))C++;for(L=0,le=N;le;le=fi(le))L++;for(;0<C-L;)ke=fi(ke),C--;for(;0<L-C;)N=fi(N),L--;for(;C--;){if(ke===N||N!==null&&ke===N.alternate)break n;ke=fi(ke),N=fi(N)}ke=null}else ke=null;fe!==null&&sc(re,X,fe,ke,!1),we!==null&&mn!==null&&sc(re,mn,we,ke,!0)}}e:{if(X=U?gi(U):window,fe=X.nodeName&&X.nodeName.toLowerCase(),fe==="select"||fe==="input"&&X.type==="file")var ze=Op;else if(Iu(X))if(Lu)ze=Up;else{ze=Wp;var Te=Hp}else(fe=X.nodeName)&&fe.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(ze=Gp);if(ze&&(ze=ze(e,U))){Fu(re,ze,i,ee);break e}Te&&Te(e,X,U),e==="focusout"&&(Te=X._wrapperState)&&Te.controlled&&X.type==="number"&&kt(X,"number",X.value)}switch(Te=U?gi(U):window,e){case"focusin":(Iu(Te)||Te.contentEditable==="true")&&(mi=Te,Ys=U,so=null);break;case"focusout":so=Ys=mi=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,Qu(re,i,ee);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Qu(re,i,ee)}var Ae;if(Vs)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else di?Bu(e,i)&&(Ce="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ce="onCompositionStart");Ce&&(Ru&&i.locale!=="ko"&&(di||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&di&&(Ae=Tu()):(mr=ee,Ls="value"in mr?mr.value:mr.textContent,di=!0)),Te=m0(U,Ce),0<Te.length&&(Ce=new Pu(Ce,e,null,i,ee),re.push({event:Ce,listeners:Te}),Ae?Ce.data=Ae:(Ae=Nu(i),Ae!==null&&(Ce.data=Ae)))),(Ae=Bp?Np(e,i):Ip(e,i))&&(U=m0(U,"onBeforeInput"),0<U.length&&(ee=new Pu("onBeforeInput","beforeinput",null,i,ee),re.push({event:ee,listeners:U}),ee.data=Ae))}ic(re,n)})}function uo(e,n,i){return{instance:e,listener:n,currentTarget:i}}function m0(e,n){for(var i=n+"Capture",l=[];e!==null;){var c=e,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=Ft(e,i),p!=null&&l.unshift(uo(e,p,c)),p=Ft(e,n),p!=null&&l.push(uo(e,p,c))),e=e.return}return l}function fi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sc(e,n,i,l,c){for(var p=n._reactName,$=[];i!==null&&i!==l;){var S=i,A=S.alternate,U=S.stateNode;if(A!==null&&A===l)break;S.tag===5&&U!==null&&(S=U,c?(A=Ft(i,p),A!=null&&$.unshift(uo(i,A,S))):c||(A=Ft(i,p),A!=null&&$.push(uo(i,A,S)))),i=i.return}$.length!==0&&e.push({event:n,listeners:$})}var Jp=/\r\n?/g,ef=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace(ef,"")}function p0(e,n,i){if(n=ac(n),ac(e)!==n&&i)throw Error(r(425))}function f0(){}var ia=null,oa=null;function sa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var aa=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,tf=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(rf)}:aa;function rf(e){setTimeout(function(){throw e})}function la(e,n){var i=n,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),Ji(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);Ji(n)}function fr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function uc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Tt="__reactFiber$"+hi,co="__reactProps$"+hi,Lt="__reactContainer$"+hi,ua="__reactEvents$"+hi,of="__reactListeners$"+hi,sf="__reactHandles$"+hi;function Hr(e){var n=e[Tt];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Lt]||i[Tt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=uc(e);e!==null;){if(i=e[Tt])return i;e=uc(e)}return n}e=i,i=e.parentNode}return null}function mo(e){return e=e[Tt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function h0(e){return e[co]||null}var ca=[],yi=-1;function hr(e){return{current:e}}function en(e){0>yi||(e.current=ca[yi],ca[yi]=null,yi--)}function Ye(e,n){yi++,ca[yi]=e.current,e.current=n}var gr={},jn=hr(gr),Fn=hr(!1),Wr=gr;function vi(e,n){var i=e.type.contextTypes;if(!i)return gr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in i)c[p]=n[p];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=c),c}function Ln(e){return e=e.childContextTypes,e!=null}function g0(){en(Fn),en(jn)}function cc(e,n,i){if(jn.current!==gr)throw Error(r(168));Ye(jn,n),Ye(Fn,i)}function dc(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in n))throw Error(r(108,he(e)||"Unknown",c));return de({},i,l)}function y0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Wr=jn.current,Ye(jn,e),Ye(Fn,Fn.current),!0}function mc(e,n,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=dc(e,n,Wr),l.__reactInternalMemoizedMergedChildContext=e,en(Fn),en(jn),Ye(jn,e)):en(Fn),Ye(Fn,i)}var Ot=null,v0=!1,da=!1;function pc(e){Ot===null?Ot=[e]:Ot.push(e)}function af(e){v0=!0,pc(e)}function yr(){if(!da&&Ot!==null){da=!0;var e=0,n=Qe;try{var i=Ot;for(Qe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Ot=null,v0=!1}catch(c){throw Ot!==null&&(Ot=Ot.slice(e+1)),Ui(Ne,yr),c}finally{Qe=n,da=!1}}return null}var xi=[],$i=0,x0=null,$0=0,ot=[],st=0,Gr=null,Ht=1,Wt="";function Ur(e,n){xi[$i++]=$0,xi[$i++]=x0,x0=e,$0=n}function fc(e,n,i){ot[st++]=Ht,ot[st++]=Wt,ot[st++]=Gr,Gr=e;var l=Ht;e=Wt;var c=32-gt(l)-1;l&=~(1<<c),i+=1;var p=32-gt(n)+c;if(30<p){var $=c-c%5;p=(l&(1<<$)-1).toString(32),l>>=$,c-=$,Ht=1<<32-gt(n)+c|i<<c|l,Wt=p+e}else Ht=1<<p|i<<c|l,Wt=e}function ma(e){e.return!==null&&(Ur(e,1),fc(e,1,0))}function pa(e){for(;e===x0;)x0=xi[--$i],xi[$i]=null,$0=xi[--$i],xi[$i]=null;for(;e===Gr;)Gr=ot[--st],ot[st]=null,Wt=ot[--st],ot[st]=null,Ht=ot[--st],ot[st]=null}var Yn=null,Xn=null,tn=!1,vt=null;function hc(e,n){var i=ct(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function gc(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Yn=e,Xn=fr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Yn=e,Xn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Gr!==null?{id:Ht,overflow:Wt}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=ct(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Yn=e,Xn=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(tn){var n=Xn;if(n){var i=n;if(!gc(e,n)){if(fa(e))throw Error(r(418));n=fr(i.nextSibling);var l=Yn;n&&gc(e,n)?hc(l,i):(e.flags=e.flags&-4097|2,tn=!1,Yn=e)}}else{if(fa(e))throw Error(r(418));e.flags=e.flags&-4097|2,tn=!1,Yn=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yn=e}function b0(e){if(e!==Yn)return!1;if(!tn)return yc(e),tn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!sa(e.type,e.memoizedProps)),n&&(n=Xn)){if(fa(e))throw vc(),Error(r(418));for(;n;)hc(e,n),n=fr(n.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Xn=fr(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Xn=null}}else Xn=Yn?fr(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=Xn;e;)e=fr(e.nextSibling)}function bi(){Xn=Yn=null,tn=!1}function ga(e){vt===null?vt=[e]:vt.push(e)}var lf=F.ReactCurrentBatchConfig;function po(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function($){var S=c.refs;$===null?delete S[p]:S[p]=$},n._stringRef=p,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function w0(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xc(e){var n=e._init;return n(e._payload)}function $c(e){function n(N,C){if(e){var L=N.deletions;L===null?(N.deletions=[C],N.flags|=16):L.push(C)}}function i(N,C){if(!e)return null;for(;C!==null;)n(N,C),C=C.sibling;return null}function l(N,C){for(N=new Map;C!==null;)C.key!==null?N.set(C.key,C):N.set(C.index,C),C=C.sibling;return N}function c(N,C){return N=zr(N,C),N.index=0,N.sibling=null,N}function p(N,C,L){return N.index=L,e?(L=N.alternate,L!==null?(L=L.index,L<C?(N.flags|=2,C):L):(N.flags|=2,C)):(N.flags|=1048576,C)}function $(N){return e&&N.alternate===null&&(N.flags|=2),N}function S(N,C,L,le){return C===null||C.tag!==6?(C=al(L,N.mode,le),C.return=N,C):(C=c(C,L),C.return=N,C)}function A(N,C,L,le){var ze=L.type;return ze===E?ee(N,C,L.props.children,le,L.key):C!==null&&(C.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===Be&&xc(ze)===C.type)?(le=c(C,L.props),le.ref=po(N,C,L),le.return=N,le):(le=U0(L.type,L.key,L.props,null,N.mode,le),le.ref=po(N,C,L),le.return=N,le)}function U(N,C,L,le){return C===null||C.tag!==4||C.stateNode.containerInfo!==L.containerInfo||C.stateNode.implementation!==L.implementation?(C=ll(L,N.mode,le),C.return=N,C):(C=c(C,L.children||[]),C.return=N,C)}function ee(N,C,L,le,ze){return C===null||C.tag!==7?(C=ei(L,N.mode,le,ze),C.return=N,C):(C=c(C,L),C.return=N,C)}function re(N,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return C=al(""+C,N.mode,L),C.return=N,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O:return L=U0(C.type,C.key,C.props,null,N.mode,L),L.ref=po(N,null,C),L.return=N,L;case Z:return C=ll(C,N.mode,L),C.return=N,C;case Be:var le=C._init;return re(N,le(C._payload),L)}if(Kn(C)||be(C))return C=ei(C,N.mode,L,null),C.return=N,C;w0(N,C)}return null}function X(N,C,L,le){var ze=C!==null?C.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ze!==null?null:S(N,C,""+L,le);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case O:return L.key===ze?A(N,C,L,le):null;case Z:return L.key===ze?U(N,C,L,le):null;case Be:return ze=L._init,X(N,C,ze(L._payload),le)}if(Kn(L)||be(L))return ze!==null?null:ee(N,C,L,le,null);w0(N,L)}return null}function fe(N,C,L,le,ze){if(typeof le=="string"&&le!==""||typeof le=="number")return N=N.get(L)||null,S(C,N,""+le,ze);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case O:return N=N.get(le.key===null?L:le.key)||null,A(C,N,le,ze);case Z:return N=N.get(le.key===null?L:le.key)||null,U(C,N,le,ze);case Be:var Te=le._init;return fe(N,C,L,Te(le._payload),ze)}if(Kn(le)||be(le))return N=N.get(L)||null,ee(C,N,le,ze,null);w0(C,le)}return null}function we(N,C,L,le){for(var ze=null,Te=null,Ae=C,Ce=C=0,kn=null;Ae!==null&&Ce<L.length;Ce++){Ae.index>Ce?(kn=Ae,Ae=null):kn=Ae.sibling;var Ve=X(N,Ae,L[Ce],le);if(Ve===null){Ae===null&&(Ae=kn);break}e&&Ae&&Ve.alternate===null&&n(N,Ae),C=p(Ve,C,Ce),Te===null?ze=Ve:Te.sibling=Ve,Te=Ve,Ae=kn}if(Ce===L.length)return i(N,Ae),tn&&Ur(N,Ce),ze;if(Ae===null){for(;Ce<L.length;Ce++)Ae=re(N,L[Ce],le),Ae!==null&&(C=p(Ae,C,Ce),Te===null?ze=Ae:Te.sibling=Ae,Te=Ae);return tn&&Ur(N,Ce),ze}for(Ae=l(N,Ae);Ce<L.length;Ce++)kn=fe(Ae,N,Ce,L[Ce],le),kn!==null&&(e&&kn.alternate!==null&&Ae.delete(kn.key===null?Ce:kn.key),C=p(kn,C,Ce),Te===null?ze=kn:Te.sibling=kn,Te=kn);return e&&Ae.forEach(function(Sr){return n(N,Sr)}),tn&&Ur(N,Ce),ze}function ke(N,C,L,le){var ze=be(L);if(typeof ze!="function")throw Error(r(150));if(L=ze.call(L),L==null)throw Error(r(151));for(var Te=ze=null,Ae=C,Ce=C=0,kn=null,Ve=L.next();Ae!==null&&!Ve.done;Ce++,Ve=L.next()){Ae.index>Ce?(kn=Ae,Ae=null):kn=Ae.sibling;var Sr=X(N,Ae,Ve.value,le);if(Sr===null){Ae===null&&(Ae=kn);break}e&&Ae&&Sr.alternate===null&&n(N,Ae),C=p(Sr,C,Ce),Te===null?ze=Sr:Te.sibling=Sr,Te=Sr,Ae=kn}if(Ve.done)return i(N,Ae),tn&&Ur(N,Ce),ze;if(Ae===null){for(;!Ve.done;Ce++,Ve=L.next())Ve=re(N,Ve.value,le),Ve!==null&&(C=p(Ve,C,Ce),Te===null?ze=Ve:Te.sibling=Ve,Te=Ve);return tn&&Ur(N,Ce),ze}for(Ae=l(N,Ae);!Ve.done;Ce++,Ve=L.next())Ve=fe(Ae,N,Ce,Ve.value,le),Ve!==null&&(e&&Ve.alternate!==null&&Ae.delete(Ve.key===null?Ce:Ve.key),C=p(Ve,C,Ce),Te===null?ze=Ve:Te.sibling=Ve,Te=Ve);return e&&Ae.forEach(function(Lf){return n(N,Lf)}),tn&&Ur(N,Ce),ze}function mn(N,C,L,le){if(typeof L=="object"&&L!==null&&L.type===E&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case O:e:{for(var ze=L.key,Te=C;Te!==null;){if(Te.key===ze){if(ze=L.type,ze===E){if(Te.tag===7){i(N,Te.sibling),C=c(Te,L.props.children),C.return=N,N=C;break e}}else if(Te.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===Be&&xc(ze)===Te.type){i(N,Te.sibling),C=c(Te,L.props),C.ref=po(N,Te,L),C.return=N,N=C;break e}i(N,Te);break}else n(N,Te);Te=Te.sibling}L.type===E?(C=ei(L.props.children,N.mode,le,L.key),C.return=N,N=C):(le=U0(L.type,L.key,L.props,null,N.mode,le),le.ref=po(N,C,L),le.return=N,N=le)}return $(N);case Z:e:{for(Te=L.key;C!==null;){if(C.key===Te)if(C.tag===4&&C.stateNode.containerInfo===L.containerInfo&&C.stateNode.implementation===L.implementation){i(N,C.sibling),C=c(C,L.children||[]),C.return=N,N=C;break e}else{i(N,C);break}else n(N,C);C=C.sibling}C=ll(L,N.mode,le),C.return=N,N=C}return $(N);case Be:return Te=L._init,mn(N,C,Te(L._payload),le)}if(Kn(L))return we(N,C,L,le);if(be(L))return ke(N,C,L,le);w0(N,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,C!==null&&C.tag===6?(i(N,C.sibling),C=c(C,L),C.return=N,N=C):(i(N,C),C=al(L,N.mode,le),C.return=N,N=C),$(N)):i(N,C)}return mn}var wi=$c(!0),bc=$c(!1),_0=hr(null),k0=null,_i=null,ya=null;function va(){ya=_i=k0=null}function xa(e){var n=_0.current;en(_0),e._currentValue=n}function $a(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function ki(e,n){k0=e,ya=_i=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(On=!0),e.firstContext=null)}function at(e){var n=e._currentValue;if(ya!==e)if(e={context:e,memoizedValue:n,next:null},_i===null){if(k0===null)throw Error(r(308));_i=e,k0.dependencies={lanes:0,firstContext:e}}else _i=_i.next=e;return n}var Vr=null;function ba(e){Vr===null?Vr=[e]:Vr.push(e)}function wc(e,n,i,l){var c=n.interleaved;return c===null?(i.next=i,ba(n)):(i.next=c.next,c.next=i),n.interleaved=i,Gt(e,l)}function Gt(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var vr=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xr(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,Gt(e,i)}return c=l.interleaved,c===null?(n.next=n,ba(l)):(n.next=c.next,c.next=n),l.interleaved=n,Gt(e,i)}function z0(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Es(e,i)}}function kc(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var $={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?c=p=$:p=p.next=$,i=i.next}while(i!==null);p===null?c=p=n:p=p.next=n}else c=p=n;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function S0(e,n,i,l){var c=e.updateQueue;vr=!1;var p=c.firstBaseUpdate,$=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var A=S,U=A.next;A.next=null,$===null?p=U:$.next=U,$=A;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,S=ee.lastBaseUpdate,S!==$&&(S===null?ee.firstBaseUpdate=U:S.next=U,ee.lastBaseUpdate=A))}if(p!==null){var re=c.baseState;$=0,ee=U=A=null,S=p;do{var X=S.lane,fe=S.eventTime;if((l&X)===X){ee!==null&&(ee=ee.next={eventTime:fe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var we=e,ke=S;switch(X=n,fe=i,ke.tag){case 1:if(we=ke.payload,typeof we=="function"){re=we.call(fe,re,X);break e}re=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=ke.payload,X=typeof we=="function"?we.call(fe,re,X):we,X==null)break e;re=de({},re,X);break e;case 2:vr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,X=c.effects,X===null?c.effects=[S]:X.push(S))}else fe={eventTime:fe,lane:X,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ee===null?(U=ee=fe,A=re):ee=ee.next=fe,$|=X;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;X=S,S=X.next,X.next=null,c.lastBaseUpdate=X,c.shared.pending=null}}while(!0);if(ee===null&&(A=re),c.baseState=A,c.firstBaseUpdate=U,c.lastBaseUpdate=ee,n=c.shared.interleaved,n!==null){c=n;do $|=c.lane,c=c.next;while(c!==n)}else p===null&&(c.shared.lanes=0);Zr|=$,e.lanes=$,e.memoizedState=re}}function zc(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var fo={},At=hr(fo),ho=hr(fo),go=hr(fo);function Kr(e){if(e===fo)throw Error(r(174));return e}function _a(e,n){switch(Ye(go,n),Ye(ho,e),Ye(At,fo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:In(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=In(n,e)}en(At),Ye(At,n)}function zi(){en(At),en(ho),en(go)}function Sc(e){Kr(go.current);var n=Kr(At.current),i=In(n,e.type);n!==i&&(Ye(ho,e),Ye(At,i))}function ka(e){ho.current===e&&(en(At),en(ho))}var on=hr(0);function j0(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var za=[];function Sa(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var q0=F.ReactCurrentDispatcher,ja=F.ReactCurrentBatchConfig,Qr=0,sn=null,vn=null,wn=null,T0=!1,yo=!1,vo=0,uf=0;function qn(){throw Error(r(321))}function qa(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!yt(e[i],n[i]))return!1;return!0}function Ta(e,n,i,l,c,p){if(Qr=p,sn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,q0.current=e===null||e.memoizedState===null?pf:ff,e=i(l,c),yo){p=0;do{if(yo=!1,vo=0,25<=p)throw Error(r(301));p+=1,wn=vn=null,n.updateQueue=null,q0.current=hf,e=i(l,c)}while(yo)}if(q0.current=P0,n=vn!==null&&vn.next!==null,Qr=0,wn=vn=sn=null,T0=!1,n)throw Error(r(300));return e}function Aa(){var e=vo!==0;return vo=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?sn.memoizedState=wn=e:wn=wn.next=e,wn}function lt(){if(vn===null){var e=sn.alternate;e=e!==null?e.memoizedState:null}else e=vn.next;var n=wn===null?sn.memoizedState:wn.next;if(n!==null)wn=n,vn=e;else{if(e===null)throw Error(r(310));vn=e,e={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},wn===null?sn.memoizedState=wn=e:wn=wn.next=e}return wn}function xo(e,n){return typeof n=="function"?n(e):n}function Ma(e){var n=lt(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=vn,c=l.baseQueue,p=i.pending;if(p!==null){if(c!==null){var $=c.next;c.next=p.next,p.next=$}l.baseQueue=c=p,i.pending=null}if(c!==null){p=c.next,l=l.baseState;var S=$=null,A=null,U=p;do{var ee=U.lane;if((Qr&ee)===ee)A!==null&&(A=A.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),l=U.hasEagerState?U.eagerState:e(l,U.action);else{var re={lane:ee,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};A===null?(S=A=re,$=l):A=A.next=re,sn.lanes|=ee,Zr|=ee}U=U.next}while(U!==null&&U!==p);A===null?$=l:A.next=S,yt(l,n.memoizedState)||(On=!0),n.memoizedState=l,n.baseState=$,n.baseQueue=A,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do p=c.lane,sn.lanes|=p,Zr|=p,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Pa(e){var n=lt(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,p=n.memoizedState;if(c!==null){i.pending=null;var $=c=c.next;do p=e(p,$.action),$=$.next;while($!==c);yt(p,n.memoizedState)||(On=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,l]}function jc(){}function qc(e,n){var i=sn,l=lt(),c=n(),p=!yt(l.memoizedState,c);if(p&&(l.memoizedState=c,On=!0),l=l.queue,Ca(Mc.bind(null,i,l,e),[e]),l.getSnapshot!==n||p||wn!==null&&wn.memoizedState.tag&1){if(i.flags|=2048,$o(9,Ac.bind(null,i,l,c,n),void 0,null),_n===null)throw Error(r(349));(Qr&30)!==0||Tc(i,n,c)}return c}function Tc(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=sn.updateQueue,n===null?(n={lastEffect:null,stores:null},sn.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Ac(e,n,i,l){n.value=i,n.getSnapshot=l,Pc(n)&&Cc(e)}function Mc(e,n,i){return i(function(){Pc(n)&&Cc(e)})}function Pc(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!yt(e,i)}catch{return!0}}function Cc(e){var n=Gt(e,1);n!==null&&wt(n,e,1,-1)}function Rc(e){var n=Mt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},n.queue=e,e=e.dispatch=mf.bind(null,sn,e),[n.memoizedState,e]}function $o(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=sn.updateQueue,n===null?(n={lastEffect:null,stores:null},sn.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function Dc(){return lt().memoizedState}function A0(e,n,i,l){var c=Mt();sn.flags|=e,c.memoizedState=$o(1|n,i,void 0,l===void 0?null:l)}function M0(e,n,i,l){var c=lt();l=l===void 0?null:l;var p=void 0;if(vn!==null){var $=vn.memoizedState;if(p=$.destroy,l!==null&&qa(l,$.deps)){c.memoizedState=$o(n,i,p,l);return}}sn.flags|=e,c.memoizedState=$o(1|n,i,p,l)}function Ec(e,n){return A0(8390656,8,e,n)}function Ca(e,n){return M0(2048,8,e,n)}function Bc(e,n){return M0(4,2,e,n)}function Nc(e,n){return M0(4,4,e,n)}function Ic(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fc(e,n,i){return i=i!=null?i.concat([e]):null,M0(4,4,Ic.bind(null,n,e),i)}function Ra(){}function Lc(e,n){var i=lt();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&qa(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Oc(e,n){var i=lt();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&qa(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function Hc(e,n,i){return(Qr&21)===0?(e.baseState&&(e.baseState=!1,On=!0),e.memoizedState=i):(yt(i,n)||(i=xu(),sn.lanes|=i,Zr|=i,e.baseState=!0),n)}function cf(e,n){var i=Qe;Qe=i!==0&&4>i?i:4,e(!0);var l=ja.transition;ja.transition={};try{e(!1),n()}finally{Qe=i,ja.transition=l}}function Wc(){return lt().memoizedState}function df(e,n,i){var l=_r(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Gc(e))Uc(n,i);else if(i=wc(e,n,i,l),i!==null){var c=Cn();wt(i,e,l,c),Vc(i,n,l)}}function mf(e,n,i){var l=_r(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Uc(n,c);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var $=n.lastRenderedState,S=p($,i);if(c.hasEagerState=!0,c.eagerState=S,yt(S,$)){var A=n.interleaved;A===null?(c.next=c,ba(n)):(c.next=A.next,A.next=c),n.interleaved=c;return}}catch{}finally{}i=wc(e,n,c,l),i!==null&&(c=Cn(),wt(i,e,l,c),Vc(i,n,l))}}function Gc(e){var n=e.alternate;return e===sn||n!==null&&n===sn}function Uc(e,n){yo=T0=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Vc(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Es(e,i)}}var P0={readContext:at,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useInsertionEffect:qn,useLayoutEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useMutableSource:qn,useSyncExternalStore:qn,useId:qn,unstable_isNewReconciler:!1},pf={readContext:at,useCallback:function(e,n){return Mt().memoizedState=[e,n===void 0?null:n],e},useContext:at,useEffect:Ec,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,A0(4194308,4,Ic.bind(null,n,e),i)},useLayoutEffect:function(e,n){return A0(4194308,4,e,n)},useInsertionEffect:function(e,n){return A0(4,2,e,n)},useMemo:function(e,n){var i=Mt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=Mt();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=df.bind(null,sn,e),[l.memoizedState,e]},useRef:function(e){var n=Mt();return e={current:e},n.memoizedState=e},useState:Rc,useDebugValue:Ra,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Rc(!1),n=e[0];return e=cf.bind(null,e[1]),Mt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=sn,c=Mt();if(tn){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),_n===null)throw Error(r(349));(Qr&30)!==0||Tc(l,n,i)}c.memoizedState=i;var p={value:i,getSnapshot:n};return c.queue=p,Ec(Mc.bind(null,l,p,e),[e]),l.flags|=2048,$o(9,Ac.bind(null,l,p,i,n),void 0,null),i},useId:function(){var e=Mt(),n=_n.identifierPrefix;if(tn){var i=Wt,l=Ht;i=(l&~(1<<32-gt(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=vo++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=uf++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ff={readContext:at,useCallback:Lc,useContext:at,useEffect:Ca,useImperativeHandle:Fc,useInsertionEffect:Bc,useLayoutEffect:Nc,useMemo:Oc,useReducer:Ma,useRef:Dc,useState:function(){return Ma(xo)},useDebugValue:Ra,useDeferredValue:function(e){var n=lt();return Hc(n,vn.memoizedState,e)},useTransition:function(){var e=Ma(xo)[0],n=lt().memoizedState;return[e,n]},useMutableSource:jc,useSyncExternalStore:qc,useId:Wc,unstable_isNewReconciler:!1},hf={readContext:at,useCallback:Lc,useContext:at,useEffect:Ca,useImperativeHandle:Fc,useInsertionEffect:Bc,useLayoutEffect:Nc,useMemo:Oc,useReducer:Pa,useRef:Dc,useState:function(){return Pa(xo)},useDebugValue:Ra,useDeferredValue:function(e){var n=lt();return vn===null?n.memoizedState=e:Hc(n,vn.memoizedState,e)},useTransition:function(){var e=Pa(xo)[0],n=lt().memoizedState;return[e,n]},useMutableSource:jc,useSyncExternalStore:qc,useId:Wc,unstable_isNewReconciler:!1};function xt(e,n){if(e&&e.defaultProps){n=de({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Da(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:de({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var C0={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Cn(),c=_r(e),p=Ut(l,c);p.payload=n,i!=null&&(p.callback=i),n=xr(e,p,c),n!==null&&(wt(n,e,c,l),z0(n,e,c))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Cn(),c=_r(e),p=Ut(l,c);p.tag=1,p.payload=n,i!=null&&(p.callback=i),n=xr(e,p,c),n!==null&&(wt(n,e,c,l),z0(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Cn(),l=_r(e),c=Ut(i,l);c.tag=2,n!=null&&(c.callback=n),n=xr(e,c,l),n!==null&&(wt(n,e,l,i),z0(n,e,l))}};function Kc(e,n,i,l,c,p,$){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,$):n.prototype&&n.prototype.isPureReactComponent?!oo(i,l)||!oo(c,p):!0}function Qc(e,n,i){var l=!1,c=gr,p=n.contextType;return typeof p=="object"&&p!==null?p=at(p):(c=Ln(n)?Wr:jn.current,l=n.contextTypes,p=(l=l!=null)?vi(e,c):gr),n=new n(i,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=C0,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=p),n}function Zc(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&C0.enqueueReplaceState(n,n.state,null)}function Ea(e,n,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},wa(e);var p=n.contextType;typeof p=="object"&&p!==null?c.context=at(p):(p=Ln(n)?Wr:jn.current,c.context=vi(e,p)),c.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Da(e,n,p,i),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&C0.enqueueReplaceState(c,c.state,null),S0(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Si(e,n){try{var i="",l=n;do i+=Se(l),l=l.return;while(l);var c=i}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:c,digest:null}}function Ba(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Na(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var gf=typeof WeakMap=="function"?WeakMap:Map;function Yc(e,n,i){i=Ut(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){F0||(F0=!0,Ja=l),Na(e,n)},i}function Xc(e,n,i){i=Ut(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=n.value;i.payload=function(){return l(c)},i.callback=function(){Na(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){Na(e,n),typeof l!="function"&&(br===null?br=new Set([this]):br.add(this));var $=n.stack;this.componentDidCatch(n.value,{componentStack:$!==null?$:""})}),i}function Jc(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new gf;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(i)||(c.add(i),e=Af.bind(null,e,n,i),n.then(e,e))}function e1(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function n1(e,n,i,l,c){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Ut(-1,1),n.tag=2,xr(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var yf=F.ReactCurrentOwner,On=!1;function Pn(e,n,i,l){n.child=e===null?bc(n,null,i,l):wi(n,e.child,i,l)}function t1(e,n,i,l,c){i=i.render;var p=n.ref;return ki(n,c),l=Ta(e,n,i,l,p,c),i=Aa(),e!==null&&!On?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,Vt(e,n,c)):(tn&&i&&ma(n),n.flags|=1,Pn(e,n,l,c),n.child)}function r1(e,n,i,l,c){if(e===null){var p=i.type;return typeof p=="function"&&!sl(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=p,i1(e,n,p,l,c)):(e=U0(i.type,null,l,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&c)===0){var $=p.memoizedProps;if(i=i.compare,i=i!==null?i:oo,i($,l)&&e.ref===n.ref)return Vt(e,n,c)}return n.flags|=1,e=zr(p,l),e.ref=n.ref,e.return=n,n.child=e}function i1(e,n,i,l,c){if(e!==null){var p=e.memoizedProps;if(oo(p,l)&&e.ref===n.ref)if(On=!1,n.pendingProps=l=p,(e.lanes&c)!==0)(e.flags&131072)!==0&&(On=!0);else return n.lanes=e.lanes,Vt(e,n,c)}return Ia(e,n,i,l,c)}function o1(e,n,i){var l=n.pendingProps,c=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(qi,Jn),Jn|=i;else{if((i&1073741824)===0)return e=p!==null?p.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ye(qi,Jn),Jn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:i,Ye(qi,Jn),Jn|=l}else p!==null?(l=p.baseLanes|i,n.memoizedState=null):l=i,Ye(qi,Jn),Jn|=l;return Pn(e,n,c,i),n.child}function s1(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Ia(e,n,i,l,c){var p=Ln(i)?Wr:jn.current;return p=vi(n,p),ki(n,c),i=Ta(e,n,i,l,p,c),l=Aa(),e!==null&&!On?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,Vt(e,n,c)):(tn&&l&&ma(n),n.flags|=1,Pn(e,n,i,c),n.child)}function a1(e,n,i,l,c){if(Ln(i)){var p=!0;y0(n)}else p=!1;if(ki(n,c),n.stateNode===null)D0(e,n),Qc(n,i,l),Ea(n,i,l,c),l=!0;else if(e===null){var $=n.stateNode,S=n.memoizedProps;$.props=S;var A=$.context,U=i.contextType;typeof U=="object"&&U!==null?U=at(U):(U=Ln(i)?Wr:jn.current,U=vi(n,U));var ee=i.getDerivedStateFromProps,re=typeof ee=="function"||typeof $.getSnapshotBeforeUpdate=="function";re||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(S!==l||A!==U)&&Zc(n,$,l,U),vr=!1;var X=n.memoizedState;$.state=X,S0(n,l,$,c),A=n.memoizedState,S!==l||X!==A||Fn.current||vr?(typeof ee=="function"&&(Da(n,i,ee,l),A=n.memoizedState),(S=vr||Kc(n,i,S,l,X,A,U))?(re||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount()),typeof $.componentDidMount=="function"&&(n.flags|=4194308)):(typeof $.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=A),$.props=l,$.state=A,$.context=U,l=S):(typeof $.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{$=n.stateNode,_c(e,n),S=n.memoizedProps,U=n.type===n.elementType?S:xt(n.type,S),$.props=U,re=n.pendingProps,X=$.context,A=i.contextType,typeof A=="object"&&A!==null?A=at(A):(A=Ln(i)?Wr:jn.current,A=vi(n,A));var fe=i.getDerivedStateFromProps;(ee=typeof fe=="function"||typeof $.getSnapshotBeforeUpdate=="function")||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(S!==re||X!==A)&&Zc(n,$,l,A),vr=!1,X=n.memoizedState,$.state=X,S0(n,l,$,c);var we=n.memoizedState;S!==re||X!==we||Fn.current||vr?(typeof fe=="function"&&(Da(n,i,fe,l),we=n.memoizedState),(U=vr||Kc(n,i,U,l,X,we,A)||!1)?(ee||typeof $.UNSAFE_componentWillUpdate!="function"&&typeof $.componentWillUpdate!="function"||(typeof $.componentWillUpdate=="function"&&$.componentWillUpdate(l,we,A),typeof $.UNSAFE_componentWillUpdate=="function"&&$.UNSAFE_componentWillUpdate(l,we,A)),typeof $.componentDidUpdate=="function"&&(n.flags|=4),typeof $.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof $.componentDidUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(n.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=we),$.props=l,$.state=we,$.context=A,l=U):(typeof $.componentDidUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(n.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&X===e.memoizedState||(n.flags|=1024),l=!1)}return Fa(e,n,i,l,p,c)}function Fa(e,n,i,l,c,p){s1(e,n);var $=(n.flags&128)!==0;if(!l&&!$)return c&&mc(n,i,!1),Vt(e,n,p);l=n.stateNode,yf.current=n;var S=$&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&$?(n.child=wi(n,e.child,null,p),n.child=wi(n,null,S,p)):Pn(e,n,S,p),n.memoizedState=l.state,c&&mc(n,i,!0),n.child}function l1(e){var n=e.stateNode;n.pendingContext?cc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&cc(e,n.context,!1),_a(e,n.containerInfo)}function u1(e,n,i,l,c){return bi(),ga(c),n.flags|=256,Pn(e,n,i,l),n.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function c1(e,n,i){var l=n.pendingProps,c=on.current,p=!1,$=(n.flags&128)!==0,S;if((S=$)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ye(on,c&1),e===null)return ha(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):($=l.children,e=l.fallback,p?(l=n.mode,p=n.child,$={mode:"hidden",children:$},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=$):p=V0($,l,0,null),e=ei(e,l,i,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=Oa(i),n.memoizedState=La,e):Ha(n,$));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return vf(e,n,$,l,S,c,i);if(p){p=l.fallback,$=n.mode,c=e.child,S=c.sibling;var A={mode:"hidden",children:l.children};return($&1)===0&&n.child!==c?(l=n.child,l.childLanes=0,l.pendingProps=A,n.deletions=null):(l=zr(c,A),l.subtreeFlags=c.subtreeFlags&14680064),S!==null?p=zr(S,p):(p=ei(p,$,i,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,$=e.child.memoizedState,$=$===null?Oa(i):{baseLanes:$.baseLanes|i,cachePool:null,transitions:$.transitions},p.memoizedState=$,p.childLanes=e.childLanes&~i,n.memoizedState=La,l}return p=e.child,e=p.sibling,l=zr(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function Ha(e,n){return n=V0({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function R0(e,n,i,l){return l!==null&&ga(l),wi(n,e.child,null,i),e=Ha(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function vf(e,n,i,l,c,p,$){if(i)return n.flags&256?(n.flags&=-257,l=Ba(Error(r(422))),R0(e,n,$,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=l.fallback,c=n.mode,l=V0({mode:"visible",children:l.children},c,0,null),p=ei(p,c,$,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&wi(n,e.child,null,$),n.child.memoizedState=Oa($),n.memoizedState=La,p);if((n.mode&1)===0)return R0(e,n,$,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var S=l.dgst;return l=S,p=Error(r(419)),l=Ba(p,l,void 0),R0(e,n,$,l)}if(S=($&e.childLanes)!==0,On||S){if(l=_n,l!==null){switch($&-$){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|$))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Gt(e,c),wt(l,e,c,-1))}return ol(),l=Ba(Error(r(421))),R0(e,n,$,l)}return c.data==="$?"?(n.flags|=128,n.child=e.child,n=Mf.bind(null,e),c._reactRetry=n,null):(e=p.treeContext,Xn=fr(c.nextSibling),Yn=n,tn=!0,vt=null,e!==null&&(ot[st++]=Ht,ot[st++]=Wt,ot[st++]=Gr,Ht=e.id,Wt=e.overflow,Gr=n),n=Ha(n,l.children),n.flags|=4096,n)}function d1(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),$a(e.return,n,i)}function Wa(e,n,i,l,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=i,p.tailMode=c)}function m1(e,n,i){var l=n.pendingProps,c=l.revealOrder,p=l.tail;if(Pn(e,n,l.children,i),l=on.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d1(e,i,n);else if(e.tag===19)d1(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ye(on,l),(n.mode&1)===0)n.memoizedState=null;else switch(c){case"forwards":for(i=n.child,c=null;i!==null;)e=i.alternate,e!==null&&j0(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),Wa(n,!1,c,i,p);break;case"backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&j0(e)===null){n.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Wa(n,!0,i,null,p);break;case"together":Wa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function D0(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Vt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Zr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=zr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=zr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function xf(e,n,i){switch(n.tag){case 3:l1(n),bi();break;case 5:Sc(n);break;case 1:Ln(n.type)&&y0(n);break;case 4:_a(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,c=n.memoizedProps.value;Ye(_0,l._currentValue),l._currentValue=c;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Ye(on,on.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?c1(e,n,i):(Ye(on,on.current&1),e=Vt(e,n,i),e!==null?e.sibling:null);Ye(on,on.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return m1(e,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ye(on,on.current),l)break;return null;case 22:case 23:return n.lanes=0,o1(e,n,i)}return Vt(e,n,i)}var p1,Ga,f1,h1;p1=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ga=function(){},f1=function(e,n,i,l){var c=e.memoizedProps;if(c!==l){e=n.stateNode,Kr(At.current);var p=null;switch(i){case"input":c=Dr(e,c),l=Dr(e,l),p=[];break;case"select":c=de({},c,{value:void 0}),l=de({},l,{value:void 0}),p=[];break;case"textarea":c=oi(e,c),l=oi(e,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=f0)}It(i,l);var $;i=null;for(U in c)if(!l.hasOwnProperty(U)&&c.hasOwnProperty(U)&&c[U]!=null)if(U==="style"){var S=c[U];for($ in S)S.hasOwnProperty($)&&(i||(i={}),i[$]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(a.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in l){var A=l[U];if(S=c!=null?c[U]:void 0,l.hasOwnProperty(U)&&A!==S&&(A!=null||S!=null))if(U==="style")if(S){for($ in S)!S.hasOwnProperty($)||A&&A.hasOwnProperty($)||(i||(i={}),i[$]="");for($ in A)A.hasOwnProperty($)&&S[$]!==A[$]&&(i||(i={}),i[$]=A[$])}else i||(p||(p=[]),p.push(U,i)),i=A;else U==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,S=S?S.__html:void 0,A!=null&&S!==A&&(p=p||[]).push(U,A)):U==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(U,""+A):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(a.hasOwnProperty(U)?(A!=null&&U==="onScroll"&&Je("scroll",e),p||S===A||(p=[])):(p=p||[]).push(U,A))}i&&(p=p||[]).push("style",i);var U=p;(n.updateQueue=U)&&(n.flags|=4)}},h1=function(e,n,i,l){i!==l&&(n.flags|=4)};function bo(e,n){if(!tn)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function $f(e,n,i){var l=n.pendingProps;switch(pa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(n),null;case 1:return Ln(n.type)&&g0(),Tn(n),null;case 3:return l=n.stateNode,zi(),en(Fn),en(jn),Sa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(b0(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vt!==null&&(tl(vt),vt=null))),Ga(e,n),Tn(n),null;case 5:ka(n);var c=Kr(go.current);if(i=n.type,e!==null&&n.stateNode!=null)f1(e,n,i,l,c),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Tn(n),null}if(e=Kr(At.current),b0(n)){l=n.stateNode,i=n.type;var p=n.memoizedProps;switch(l[Tt]=n,l[co]=p,e=(n.mode&1)!==0,i){case"dialog":Je("cancel",l),Je("close",l);break;case"iframe":case"object":case"embed":Je("load",l);break;case"video":case"audio":for(c=0;c<ao.length;c++)Je(ao[c],l);break;case"source":Je("error",l);break;case"img":case"image":case"link":Je("error",l),Je("load",l);break;case"details":Je("toggle",l);break;case"input":Er(l,p),Je("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Je("invalid",l);break;case"textarea":Oe(l,p),Je("invalid",l)}It(i,p),c=null;for(var $ in p)if(p.hasOwnProperty($)){var S=p[$];$==="children"?typeof S=="string"?l.textContent!==S&&(p.suppressHydrationWarning!==!0&&p0(l.textContent,S,e),c=["children",S]):typeof S=="number"&&l.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&p0(l.textContent,S,e),c=["children",""+S]):a.hasOwnProperty($)&&S!=null&&$==="onScroll"&&Je("scroll",l)}switch(i){case"input":bn(l),ir(l,p,!0);break;case"textarea":bn(l),un(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=f0)}l=c,n.updateQueue=l,l!==null&&(n.flags|=4)}else{$=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Br(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=$.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=$.createElement(i,{is:l.is}):(e=$.createElement(i),i==="select"&&($=e,l.multiple?$.multiple=!0:l.size&&($.size=l.size))):e=$.createElementNS(e,i),e[Tt]=n,e[co]=l,p1(e,n,!1,!1),n.stateNode=e;e:{switch($=si(i,l),i){case"dialog":Je("cancel",e),Je("close",e),c=l;break;case"iframe":case"object":case"embed":Je("load",e),c=l;break;case"video":case"audio":for(c=0;c<ao.length;c++)Je(ao[c],e);c=l;break;case"source":Je("error",e),c=l;break;case"img":case"image":case"link":Je("error",e),Je("load",e),c=l;break;case"details":Je("toggle",e),c=l;break;case"input":Er(e,l),c=Dr(e,l),Je("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=de({},l,{value:void 0}),Je("invalid",e);break;case"textarea":Oe(e,l),c=oi(e,l),Je("invalid",e);break;default:c=l}It(i,c),S=c;for(p in S)if(S.hasOwnProperty(p)){var A=S[p];p==="style"?St(e,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Ii(e,A)):p==="children"?typeof A=="string"?(i!=="textarea"||A!=="")&&Nr(e,A):typeof A=="number"&&Nr(e,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?A!=null&&p==="onScroll"&&Je("scroll",e):A!=null&&W(e,p,A,$))}switch(i){case"input":bn(e),ir(e,l,!1);break;case"textarea":bn(e),un(e);break;case"option":l.value!=null&&e.setAttribute("value",""+je(l.value));break;case"select":e.multiple=!!l.multiple,p=l.value,p!=null?Nn(e,!!l.multiple,p,!1):l.defaultValue!=null&&Nn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=f0)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Tn(n),null;case 6:if(e&&n.stateNode!=null)h1(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=Kr(go.current),Kr(At.current),b0(n)){if(l=n.stateNode,i=n.memoizedProps,l[Tt]=n,(p=l.nodeValue!==i)&&(e=Yn,e!==null))switch(e.tag){case 3:p0(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&p0(l.nodeValue,i,(e.mode&1)!==0)}p&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Tt]=n,n.stateNode=l}return Tn(n),null;case 13:if(en(on),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tn&&Xn!==null&&(n.mode&1)!==0&&(n.flags&128)===0)vc(),bi(),n.flags|=98560,p=!1;else if(p=b0(n),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(r(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[Tt]=n}else bi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Tn(n),p=!1}else vt!==null&&(tl(vt),vt=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(on.current&1)!==0?xn===0&&(xn=3):ol())),n.updateQueue!==null&&(n.flags|=4),Tn(n),null);case 4:return zi(),Ga(e,n),e===null&&lo(n.stateNode.containerInfo),Tn(n),null;case 10:return xa(n.type._context),Tn(n),null;case 17:return Ln(n.type)&&g0(),Tn(n),null;case 19:if(en(on),p=n.memoizedState,p===null)return Tn(n),null;if(l=(n.flags&128)!==0,$=p.rendering,$===null)if(l)bo(p,!1);else{if(xn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if($=j0(e),$!==null){for(n.flags|=128,bo(p,!1),l=$.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)p=i,e=l,p.flags&=14680066,$=p.alternate,$===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=$.childLanes,p.lanes=$.lanes,p.child=$.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=$.memoizedProps,p.memoizedState=$.memoizedState,p.updateQueue=$.updateQueue,p.type=$.type,e=$.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ye(on,on.current&1|2),n.child}e=e.sibling}p.tail!==null&&nn()>Ti&&(n.flags|=128,l=!0,bo(p,!1),n.lanes=4194304)}else{if(!l)if(e=j0($),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),bo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!$.alternate&&!tn)return Tn(n),null}else 2*nn()-p.renderingStartTime>Ti&&i!==1073741824&&(n.flags|=128,l=!0,bo(p,!1),n.lanes=4194304);p.isBackwards?($.sibling=n.child,n.child=$):(i=p.last,i!==null?i.sibling=$:n.child=$,p.last=$)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=nn(),n.sibling=null,i=on.current,Ye(on,l?i&1|2:i&1),n):(Tn(n),null);case 22:case 23:return il(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Jn&1073741824)!==0&&(Tn(n),n.subtreeFlags&6&&(n.flags|=8192)):Tn(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function bf(e,n){switch(pa(n),n.tag){case 1:return Ln(n.type)&&g0(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zi(),en(Fn),en(jn),Sa(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ka(n),null;case 13:if(en(on),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));bi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return en(on),null;case 4:return zi(),null;case 10:return xa(n.type._context),null;case 22:case 23:return il(),null;case 24:return null;default:return null}}var E0=!1,An=!1,wf=typeof WeakSet=="function"?WeakSet:Set,ve=null;function ji(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){cn(e,n,l)}else i.current=null}function Ua(e,n,i){try{i()}catch(l){cn(e,n,l)}}var g1=!1;function _f(e,n){if(ia=t0,e=Ku(),Zs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var $=0,S=-1,A=-1,U=0,ee=0,re=e,X=null;n:for(;;){for(var fe;re!==i||c!==0&&re.nodeType!==3||(S=$+c),re!==p||l!==0&&re.nodeType!==3||(A=$+l),re.nodeType===3&&($+=re.nodeValue.length),(fe=re.firstChild)!==null;)X=re,re=fe;for(;;){if(re===e)break n;if(X===i&&++U===c&&(S=$),X===p&&++ee===l&&(A=$),(fe=re.nextSibling)!==null)break;re=X,X=re.parentNode}re=fe}i=S===-1||A===-1?null:{start:S,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(oa={focusedElem:e,selectionRange:i},t0=!1,ve=n;ve!==null;)if(n=ve,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ve=e;else for(;ve!==null;){n=ve;try{var we=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(we!==null){var ke=we.memoizedProps,mn=we.memoizedState,N=n.stateNode,C=N.getSnapshotBeforeUpdate(n.elementType===n.type?ke:xt(n.type,ke),mn);N.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var L=n.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(le){cn(n,n.return,le)}if(e=n.sibling,e!==null){e.return=n.return,ve=e;break}ve=n.return}return we=g1,g1=!1,we}function wo(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var p=c.destroy;c.destroy=void 0,p!==void 0&&Ua(n,i,p)}c=c.next}while(c!==l)}}function B0(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function Va(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function y1(e){var n=e.alternate;n!==null&&(e.alternate=null,y1(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Tt],delete n[co],delete n[ua],delete n[of],delete n[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function v1(e){return e.tag===5||e.tag===3||e.tag===4}function x1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=f0));else if(l!==4&&(e=e.child,e!==null))for(Ka(e,n,i),e=e.sibling;e!==null;)Ka(e,n,i),e=e.sibling}function Qa(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Qa(e,n,i),e=e.sibling;e!==null;)Qa(e,n,i),e=e.sibling}var zn=null,$t=!1;function $r(e,n,i){for(i=i.child;i!==null;)$1(e,n,i),i=i.sibling}function $1(e,n,i){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Zo,i)}catch{}switch(i.tag){case 5:An||ji(i,n);case 6:var l=zn,c=$t;zn=null,$r(e,n,i),zn=l,$t=c,zn!==null&&($t?(e=zn,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):zn.removeChild(i.stateNode));break;case 18:zn!==null&&($t?(e=zn,i=i.stateNode,e.nodeType===8?la(e.parentNode,i):e.nodeType===1&&la(e,i),Ji(e)):la(zn,i.stateNode));break;case 4:l=zn,c=$t,zn=i.stateNode.containerInfo,$t=!0,$r(e,n,i),zn=l,$t=c;break;case 0:case 11:case 14:case 15:if(!An&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,$=p.destroy;p=p.tag,$!==void 0&&((p&2)!==0||(p&4)!==0)&&Ua(i,n,$),c=c.next}while(c!==l)}$r(e,n,i);break;case 1:if(!An&&(ji(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(S){cn(i,n,S)}$r(e,n,i);break;case 21:$r(e,n,i);break;case 22:i.mode&1?(An=(l=An)||i.memoizedState!==null,$r(e,n,i),An=l):$r(e,n,i);break;default:$r(e,n,i)}}function b1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new wf),n.forEach(function(l){var c=Pf.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function bt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var p=e,$=n,S=$;e:for(;S!==null;){switch(S.tag){case 5:zn=S.stateNode,$t=!1;break e;case 3:zn=S.stateNode.containerInfo,$t=!0;break e;case 4:zn=S.stateNode.containerInfo,$t=!0;break e}S=S.return}if(zn===null)throw Error(r(160));$1(p,$,c),zn=null,$t=!1;var A=c.alternate;A!==null&&(A.return=null),c.return=null}catch(U){cn(c,n,U)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)w1(n,e),n=n.sibling}function w1(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(n,e),Pt(e),l&4){try{wo(3,e,e.return),B0(3,e)}catch(ke){cn(e,e.return,ke)}try{wo(5,e,e.return)}catch(ke){cn(e,e.return,ke)}}break;case 1:bt(n,e),Pt(e),l&512&&i!==null&&ji(i,i.return);break;case 5:if(bt(n,e),Pt(e),l&512&&i!==null&&ji(i,i.return),e.flags&32){var c=e.stateNode;try{Nr(c,"")}catch(ke){cn(e,e.return,ke)}}if(l&4&&(c=e.stateNode,c!=null)){var p=e.memoizedProps,$=i!==null?i.memoizedProps:p,S=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&tr(c,p),si(S,$);var U=si(S,p);for($=0;$<A.length;$+=2){var ee=A[$],re=A[$+1];ee==="style"?St(c,re):ee==="dangerouslySetInnerHTML"?Ii(c,re):ee==="children"?Nr(c,re):W(c,ee,re,U)}switch(S){case"input":rr(c,p);break;case"textarea":rt(c,p);break;case"select":var X=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var fe=p.value;fe!=null?Nn(c,!!p.multiple,fe,!1):X!==!!p.multiple&&(p.defaultValue!=null?Nn(c,!!p.multiple,p.defaultValue,!0):Nn(c,!!p.multiple,p.multiple?[]:"",!1))}c[co]=p}catch(ke){cn(e,e.return,ke)}}break;case 6:if(bt(n,e),Pt(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,p=e.memoizedProps;try{c.nodeValue=p}catch(ke){cn(e,e.return,ke)}}break;case 3:if(bt(n,e),Pt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Ji(n.containerInfo)}catch(ke){cn(e,e.return,ke)}break;case 4:bt(n,e),Pt(e);break;case 13:bt(n,e),Pt(e),c=e.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(Xa=nn())),l&4&&b1(e);break;case 22:if(ee=i!==null&&i.memoizedState!==null,e.mode&1?(An=(U=An)||ee,bt(n,e),An=U):bt(n,e),Pt(e),l&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!ee&&(e.mode&1)!==0)for(ve=e,ee=e.child;ee!==null;){for(re=ve=ee;ve!==null;){switch(X=ve,fe=X.child,X.tag){case 0:case 11:case 14:case 15:wo(4,X,X.return);break;case 1:ji(X,X.return);var we=X.stateNode;if(typeof we.componentWillUnmount=="function"){l=X,i=X.return;try{n=l,we.props=n.memoizedProps,we.state=n.memoizedState,we.componentWillUnmount()}catch(ke){cn(l,i,ke)}}break;case 5:ji(X,X.return);break;case 22:if(X.memoizedState!==null){z1(re);continue}}fe!==null?(fe.return=X,ve=fe):z1(re)}ee=ee.sibling}e:for(ee=null,re=e;;){if(re.tag===5){if(ee===null){ee=re;try{c=re.stateNode,U?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=re.stateNode,A=re.memoizedProps.style,$=A!=null&&A.hasOwnProperty("display")?A.display:null,S.style.display=Fo("display",$))}catch(ke){cn(e,e.return,ke)}}}else if(re.tag===6){if(ee===null)try{re.stateNode.nodeValue=U?"":re.memoizedProps}catch(ke){cn(e,e.return,ke)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===e)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===e)break e;for(;re.sibling===null;){if(re.return===null||re.return===e)break e;ee===re&&(ee=null),re=re.return}ee===re&&(ee=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:bt(n,e),Pt(e),l&4&&b1(e);break;case 21:break;default:bt(n,e),Pt(e)}}function Pt(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(v1(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Nr(c,""),l.flags&=-33);var p=x1(e);Qa(e,p,c);break;case 3:case 4:var $=l.stateNode.containerInfo,S=x1(e);Ka(e,S,$);break;default:throw Error(r(161))}}catch(A){cn(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function kf(e,n,i){ve=e,_1(e)}function _1(e,n,i){for(var l=(e.mode&1)!==0;ve!==null;){var c=ve,p=c.child;if(c.tag===22&&l){var $=c.memoizedState!==null||E0;if(!$){var S=c.alternate,A=S!==null&&S.memoizedState!==null||An;S=E0;var U=An;if(E0=$,(An=A)&&!U)for(ve=c;ve!==null;)$=ve,A=$.child,$.tag===22&&$.memoizedState!==null?S1(c):A!==null?(A.return=$,ve=A):S1(c);for(;p!==null;)ve=p,_1(p),p=p.sibling;ve=c,E0=S,An=U}k1(e)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,ve=p):k1(e)}}function k1(e){for(;ve!==null;){var n=ve;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:An||B0(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!An)if(i===null)l.componentDidMount();else{var c=n.elementType===n.type?i.memoizedProps:xt(n.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&zc(n,p,l);break;case 3:var $=n.updateQueue;if($!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}zc(n,$,i)}break;case 5:var S=n.stateNode;if(i===null&&n.flags&4){i=S;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&i.focus();break;case"img":A.src&&(i.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var U=n.alternate;if(U!==null){var ee=U.memoizedState;if(ee!==null){var re=ee.dehydrated;re!==null&&Ji(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}An||n.flags&512&&Va(n)}catch(X){cn(n,n.return,X)}}if(n===e){ve=null;break}if(i=n.sibling,i!==null){i.return=n.return,ve=i;break}ve=n.return}}function z1(e){for(;ve!==null;){var n=ve;if(n===e){ve=null;break}var i=n.sibling;if(i!==null){i.return=n.return,ve=i;break}ve=n.return}}function S1(e){for(;ve!==null;){var n=ve;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{B0(4,n)}catch(A){cn(n,i,A)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var c=n.return;try{l.componentDidMount()}catch(A){cn(n,c,A)}}var p=n.return;try{Va(n)}catch(A){cn(n,p,A)}break;case 5:var $=n.return;try{Va(n)}catch(A){cn(n,$,A)}}}catch(A){cn(n,n.return,A)}if(n===e){ve=null;break}var S=n.sibling;if(S!==null){S.return=n.return,ve=S;break}ve=n.return}}var zf=Math.ceil,N0=F.ReactCurrentDispatcher,Za=F.ReactCurrentOwner,ut=F.ReactCurrentBatchConfig,Ge=0,_n=null,fn=null,Sn=0,Jn=0,qi=hr(0),xn=0,_o=null,Zr=0,I0=0,Ya=0,ko=null,Hn=null,Xa=0,Ti=1/0,Kt=null,F0=!1,Ja=null,br=null,L0=!1,wr=null,O0=0,zo=0,el=null,H0=-1,W0=0;function Cn(){return(Ge&6)!==0?nn():H0!==-1?H0:H0=nn()}function _r(e){return(e.mode&1)===0?1:(Ge&2)!==0&&Sn!==0?Sn&-Sn:lf.transition!==null?(W0===0&&(W0=xu()),W0):(e=Qe,e!==0||(e=window.event,e=e===void 0?16:qu(e.type)),e)}function wt(e,n,i,l){if(50<zo)throw zo=0,el=null,Error(r(185));Ki(e,i,l),((Ge&2)===0||e!==_n)&&(e===_n&&((Ge&2)===0&&(I0|=i),xn===4&&kr(e,Sn)),Wn(e,l),i===1&&Ge===0&&(n.mode&1)===0&&(Ti=nn()+500,v0&&yr()))}function Wn(e,n){var i=e.callbackNode;ap(e,n);var l=Jo(e,e===_n?Sn:0);if(l===0)i!==null&&Qo(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&Qo(i),n===1)e.tag===0?af(q1.bind(null,e)):pc(q1.bind(null,e)),tf(function(){(Ge&6)===0&&yr()}),i=null;else{switch($u(l)){case 1:i=Ne;break;case 4:i=We;break;case 16:i=ar;break;case 536870912:i=vu;break;default:i=ar}i=E1(i,j1.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function j1(e,n){if(H0=-1,W0=0,(Ge&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Ai()&&e.callbackNode!==i)return null;var l=Jo(e,e===_n?Sn:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=G0(e,l);else{n=l;var c=Ge;Ge|=2;var p=A1();(_n!==e||Sn!==n)&&(Kt=null,Ti=nn()+500,Xr(e,n));do try{qf();break}catch(S){T1(e,S)}while(!0);va(),N0.current=p,Ge=c,fn!==null?n=0:(_n=null,Sn=0,n=xn)}if(n!==0){if(n===2&&(c=Rs(e),c!==0&&(l=c,n=nl(e,c))),n===1)throw i=_o,Xr(e,0),kr(e,l),Wn(e,nn()),i;if(n===6)kr(e,l);else{if(c=e.current.alternate,(l&30)===0&&!Sf(c)&&(n=G0(e,l),n===2&&(p=Rs(e),p!==0&&(l=p,n=nl(e,p))),n===1))throw i=_o,Xr(e,0),kr(e,l),Wn(e,nn()),i;switch(e.finishedWork=c,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:Jr(e,Hn,Kt);break;case 3:if(kr(e,l),(l&130023424)===l&&(n=Xa+500-nn(),10<n)){if(Jo(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){Cn(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=aa(Jr.bind(null,e,Hn,Kt),n);break}Jr(e,Hn,Kt);break;case 4:if(kr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,c=-1;0<l;){var $=31-gt(l);p=1<<$,$=n[$],$>c&&(c=$),l&=~p}if(l=c,l=nn()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*zf(l/1960))-l,10<l){e.timeoutHandle=aa(Jr.bind(null,e,Hn,Kt),l);break}Jr(e,Hn,Kt);break;case 5:Jr(e,Hn,Kt);break;default:throw Error(r(329))}}}return Wn(e,nn()),e.callbackNode===i?j1.bind(null,e):null}function nl(e,n){var i=ko;return e.current.memoizedState.isDehydrated&&(Xr(e,n).flags|=256),e=G0(e,n),e!==2&&(n=Hn,Hn=i,n!==null&&tl(n)),e}function tl(e){Hn===null?Hn=e:Hn.push.apply(Hn,e)}function Sf(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],p=c.getSnapshot;c=c.value;try{if(!yt(p(),c))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function kr(e,n){for(n&=~Ya,n&=~I0,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-gt(n),l=1<<i;e[i]=-1,n&=~l}}function q1(e){if((Ge&6)!==0)throw Error(r(327));Ai();var n=Jo(e,0);if((n&1)===0)return Wn(e,nn()),null;var i=G0(e,n);if(e.tag!==0&&i===2){var l=Rs(e);l!==0&&(n=l,i=nl(e,l))}if(i===1)throw i=_o,Xr(e,0),kr(e,n),Wn(e,nn()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Jr(e,Hn,Kt),Wn(e,nn()),null}function rl(e,n){var i=Ge;Ge|=1;try{return e(n)}finally{Ge=i,Ge===0&&(Ti=nn()+500,v0&&yr())}}function Yr(e){wr!==null&&wr.tag===0&&(Ge&6)===0&&Ai();var n=Ge;Ge|=1;var i=ut.transition,l=Qe;try{if(ut.transition=null,Qe=1,e)return e()}finally{Qe=l,ut.transition=i,Ge=n,(Ge&6)===0&&yr()}}function il(){Jn=qi.current,en(qi)}function Xr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,nf(i)),fn!==null)for(i=fn.return;i!==null;){var l=i;switch(pa(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&g0();break;case 3:zi(),en(Fn),en(jn),Sa();break;case 5:ka(l);break;case 4:zi();break;case 13:en(on);break;case 19:en(on);break;case 10:xa(l.type._context);break;case 22:case 23:il()}i=i.return}if(_n=e,fn=e=zr(e.current,null),Sn=Jn=n,xn=0,_o=null,Ya=I0=Zr=0,Hn=ko=null,Vr!==null){for(n=0;n<Vr.length;n++)if(i=Vr[n],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,p=i.pending;if(p!==null){var $=p.next;p.next=c,l.next=$}i.pending=l}Vr=null}return e}function T1(e,n){do{var i=fn;try{if(va(),q0.current=P0,T0){for(var l=sn.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}T0=!1}if(Qr=0,wn=vn=sn=null,yo=!1,vo=0,Za.current=null,i===null||i.return===null){xn=1,_o=n,fn=null;break}e:{var p=e,$=i.return,S=i,A=n;if(n=Sn,S.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=A,ee=S,re=ee.tag;if((ee.mode&1)===0&&(re===0||re===11||re===15)){var X=ee.alternate;X?(ee.updateQueue=X.updateQueue,ee.memoizedState=X.memoizedState,ee.lanes=X.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var fe=e1($);if(fe!==null){fe.flags&=-257,n1(fe,$,S,p,n),fe.mode&1&&Jc(p,U,n),n=fe,A=U;var we=n.updateQueue;if(we===null){var ke=new Set;ke.add(A),n.updateQueue=ke}else we.add(A);break e}else{if((n&1)===0){Jc(p,U,n),ol();break e}A=Error(r(426))}}else if(tn&&S.mode&1){var mn=e1($);if(mn!==null){(mn.flags&65536)===0&&(mn.flags|=256),n1(mn,$,S,p,n),ga(Si(A,S));break e}}p=A=Si(A,S),xn!==4&&(xn=2),ko===null?ko=[p]:ko.push(p),p=$;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var N=Yc(p,A,n);kc(p,N);break e;case 1:S=A;var C=p.type,L=p.stateNode;if((p.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(br===null||!br.has(L)))){p.flags|=65536,n&=-n,p.lanes|=n;var le=Xc(p,S,n);kc(p,le);break e}}p=p.return}while(p!==null)}P1(i)}catch(ze){n=ze,fn===i&&i!==null&&(fn=i=i.return);continue}break}while(!0)}function A1(){var e=N0.current;return N0.current=P0,e===null?P0:e}function ol(){(xn===0||xn===3||xn===2)&&(xn=4),_n===null||(Zr&268435455)===0&&(I0&268435455)===0||kr(_n,Sn)}function G0(e,n){var i=Ge;Ge|=2;var l=A1();(_n!==e||Sn!==n)&&(Kt=null,Xr(e,n));do try{jf();break}catch(c){T1(e,c)}while(!0);if(va(),Ge=i,N0.current=l,fn!==null)throw Error(r(261));return _n=null,Sn=0,xn}function jf(){for(;fn!==null;)M1(fn)}function qf(){for(;fn!==null&&!Ps();)M1(fn)}function M1(e){var n=D1(e.alternate,e,Jn);e.memoizedProps=e.pendingProps,n===null?P1(e):fn=n,Za.current=null}function P1(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=$f(i,n,Jn),i!==null){fn=i;return}}else{if(i=bf(i,n),i!==null){i.flags&=32767,fn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xn=6,fn=null;return}}if(n=n.sibling,n!==null){fn=n;return}fn=n=e}while(n!==null);xn===0&&(xn=5)}function Jr(e,n,i){var l=Qe,c=ut.transition;try{ut.transition=null,Qe=1,Tf(e,n,i,l)}finally{ut.transition=c,Qe=l}return null}function Tf(e,n,i,l){do Ai();while(wr!==null);if((Ge&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var p=i.lanes|i.childLanes;if(lp(e,p),e===_n&&(fn=_n=null,Sn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||L0||(L0=!0,E1(ar,function(){return Ai(),null})),p=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||p){p=ut.transition,ut.transition=null;var $=Qe;Qe=1;var S=Ge;Ge|=4,Za.current=null,_f(e,i),w1(i,e),Kp(oa),t0=!!ia,oa=ia=null,e.current=i,kf(i),Cs(),Ge=S,Qe=$,ut.transition=p}else e.current=i;if(L0&&(L0=!1,wr=e,O0=c),p=e.pendingLanes,p===0&&(br=null),tp(i.stateNode),Wn(e,nn()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)c=n[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(F0)throw F0=!1,e=Ja,Ja=null,e;return(O0&1)!==0&&e.tag!==0&&Ai(),p=e.pendingLanes,(p&1)!==0?e===el?zo++:(zo=0,el=e):zo=0,yr(),null}function Ai(){if(wr!==null){var e=$u(O0),n=ut.transition,i=Qe;try{if(ut.transition=null,Qe=16>e?16:e,wr===null)var l=!1;else{if(e=wr,wr=null,O0=0,(Ge&6)!==0)throw Error(r(331));var c=Ge;for(Ge|=4,ve=e.current;ve!==null;){var p=ve,$=p.child;if((ve.flags&16)!==0){var S=p.deletions;if(S!==null){for(var A=0;A<S.length;A++){var U=S[A];for(ve=U;ve!==null;){var ee=ve;switch(ee.tag){case 0:case 11:case 15:wo(8,ee,p)}var re=ee.child;if(re!==null)re.return=ee,ve=re;else for(;ve!==null;){ee=ve;var X=ee.sibling,fe=ee.return;if(y1(ee),ee===U){ve=null;break}if(X!==null){X.return=fe,ve=X;break}ve=fe}}}var we=p.alternate;if(we!==null){var ke=we.child;if(ke!==null){we.child=null;do{var mn=ke.sibling;ke.sibling=null,ke=mn}while(ke!==null)}}ve=p}}if((p.subtreeFlags&2064)!==0&&$!==null)$.return=p,ve=$;else e:for(;ve!==null;){if(p=ve,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:wo(9,p,p.return)}var N=p.sibling;if(N!==null){N.return=p.return,ve=N;break e}ve=p.return}}var C=e.current;for(ve=C;ve!==null;){$=ve;var L=$.child;if(($.subtreeFlags&2064)!==0&&L!==null)L.return=$,ve=L;else e:for($=C;ve!==null;){if(S=ve,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:B0(9,S)}}catch(ze){cn(S,S.return,ze)}if(S===$){ve=null;break e}var le=S.sibling;if(le!==null){le.return=S.return,ve=le;break e}ve=S.return}}if(Ge=c,yr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Zo,e)}catch{}l=!0}return l}finally{Qe=i,ut.transition=n}}return!1}function C1(e,n,i){n=Si(i,n),n=Yc(e,n,1),e=xr(e,n,1),n=Cn(),e!==null&&(Ki(e,1,n),Wn(e,n))}function cn(e,n,i){if(e.tag===3)C1(e,e,i);else for(;n!==null;){if(n.tag===3){C1(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(br===null||!br.has(l))){e=Si(i,e),e=Xc(n,e,1),n=xr(n,e,1),e=Cn(),n!==null&&(Ki(n,1,e),Wn(n,e));break}}n=n.return}}function Af(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=Cn(),e.pingedLanes|=e.suspendedLanes&i,_n===e&&(Sn&i)===i&&(xn===4||xn===3&&(Sn&130023424)===Sn&&500>nn()-Xa?Xr(e,0):Ya|=i),Wn(e,n)}function R1(e,n){n===0&&((e.mode&1)===0?n=1:(n=Xo,Xo<<=1,(Xo&130023424)===0&&(Xo=4194304)));var i=Cn();e=Gt(e,n),e!==null&&(Ki(e,n,i),Wn(e,i))}function Mf(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),R1(e,i)}function Pf(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),R1(e,i)}var D1;D1=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Fn.current)On=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return On=!1,xf(e,n,i);On=(e.flags&131072)!==0}else On=!1,tn&&(n.flags&1048576)!==0&&fc(n,$0,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;D0(e,n),e=n.pendingProps;var c=vi(n,jn.current);ki(n,i),c=Ta(null,n,l,e,c,i);var p=Aa();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ln(l)?(p=!0,y0(n)):p=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,wa(n),c.updater=C0,n.stateNode=c,c._reactInternals=n,Ea(n,l,e,i),n=Fa(null,n,l,!0,p,i)):(n.tag=0,tn&&p&&ma(n),Pn(null,n,c,i),n=n.child),n;case 16:l=n.elementType;e:{switch(D0(e,n),e=n.pendingProps,c=l._init,l=c(l._payload),n.type=l,c=n.tag=Rf(l),e=xt(l,e),c){case 0:n=Ia(null,n,l,e,i);break e;case 1:n=a1(null,n,l,e,i);break e;case 11:n=t1(null,n,l,e,i);break e;case 14:n=r1(null,n,l,xt(l.type,e),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:xt(l,c),Ia(e,n,l,c,i);case 1:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:xt(l,c),a1(e,n,l,c,i);case 3:e:{if(l1(n),e===null)throw Error(r(387));l=n.pendingProps,p=n.memoizedState,c=p.element,_c(e,n),S0(n,l,null,i);var $=n.memoizedState;if(l=$.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:$.cache,pendingSuspenseBoundaries:$.pendingSuspenseBoundaries,transitions:$.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){c=Si(Error(r(423)),n),n=u1(e,n,l,i,c);break e}else if(l!==c){c=Si(Error(r(424)),n),n=u1(e,n,l,i,c);break e}else for(Xn=fr(n.stateNode.containerInfo.firstChild),Yn=n,tn=!0,vt=null,i=bc(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(bi(),l===c){n=Vt(e,n,i);break e}Pn(e,n,l,i)}n=n.child}return n;case 5:return Sc(n),e===null&&ha(n),l=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,$=c.children,sa(l,c)?$=null:p!==null&&sa(l,p)&&(n.flags|=32),s1(e,n),Pn(e,n,$,i),n.child;case 6:return e===null&&ha(n),null;case 13:return c1(e,n,i);case 4:return _a(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=wi(n,null,l,i):Pn(e,n,l,i),n.child;case 11:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:xt(l,c),t1(e,n,l,c,i);case 7:return Pn(e,n,n.pendingProps,i),n.child;case 8:return Pn(e,n,n.pendingProps.children,i),n.child;case 12:return Pn(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,c=n.pendingProps,p=n.memoizedProps,$=c.value,Ye(_0,l._currentValue),l._currentValue=$,p!==null)if(yt(p.value,$)){if(p.children===c.children&&!Fn.current){n=Vt(e,n,i);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var S=p.dependencies;if(S!==null){$=p.child;for(var A=S.firstContext;A!==null;){if(A.context===l){if(p.tag===1){A=Ut(-1,i&-i),A.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var ee=U.pending;ee===null?A.next=A:(A.next=ee.next,ee.next=A),U.pending=A}}p.lanes|=i,A=p.alternate,A!==null&&(A.lanes|=i),$a(p.return,i,n),S.lanes|=i;break}A=A.next}}else if(p.tag===10)$=p.type===n.type?null:p.child;else if(p.tag===18){if($=p.return,$===null)throw Error(r(341));$.lanes|=i,S=$.alternate,S!==null&&(S.lanes|=i),$a($,i,n),$=p.sibling}else $=p.child;if($!==null)$.return=p;else for($=p;$!==null;){if($===n){$=null;break}if(p=$.sibling,p!==null){p.return=$.return,$=p;break}$=$.return}p=$}Pn(e,n,c.children,i),n=n.child}return n;case 9:return c=n.type,l=n.pendingProps.children,ki(n,i),c=at(c),l=l(c),n.flags|=1,Pn(e,n,l,i),n.child;case 14:return l=n.type,c=xt(l,n.pendingProps),c=xt(l.type,c),r1(e,n,l,c,i);case 15:return i1(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:xt(l,c),D0(e,n),n.tag=1,Ln(l)?(e=!0,y0(n)):e=!1,ki(n,i),Qc(n,l,c),Ea(n,l,c,i),Fa(null,n,l,!0,e,i);case 19:return m1(e,n,i);case 22:return o1(e,n,i)}throw Error(r(156,n.tag))};function E1(e,n){return Ui(e,n)}function Cf(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,n,i,l){return new Cf(e,n,i,l)}function sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ae)return 11;if(e===Fe)return 14}return 2}function zr(e,n){var i=e.alternate;return i===null?(i=ct(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function U0(e,n,i,l,c,p){var $=2;if(l=e,typeof e=="function")sl(e)&&($=1);else if(typeof e=="string")$=5;else e:switch(e){case E:return ei(i.children,c,p,n);case V:$=8,c|=8;break;case te:return e=ct(12,i,n,c|2),e.elementType=te,e.lanes=p,e;case ye:return e=ct(13,i,n,c),e.elementType=ye,e.lanes=p,e;case xe:return e=ct(19,i,n,c),e.elementType=xe,e.lanes=p,e;case Le:return V0(i,c,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case me:$=10;break e;case se:$=9;break e;case ae:$=11;break e;case Fe:$=14;break e;case Be:$=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=ct($,i,n,c),n.elementType=e,n.type=l,n.lanes=p,n}function ei(e,n,i,l){return e=ct(7,e,l,n),e.lanes=i,e}function V0(e,n,i,l){return e=ct(22,e,l,n),e.elementType=Le,e.lanes=i,e.stateNode={isHidden:!1},e}function al(e,n,i){return e=ct(6,e,null,n),e.lanes=i,e}function ll(e,n,i){return n=ct(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Df(e,n,i,l,c){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ul(e,n,i,l,c,p,$,S,A){return e=new Df(e,n,i,S,A),n===1?(n=1,p===!0&&(n|=8)):n=0,p=ct(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(p),e}function Ef(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function B1(e){if(!e)return gr;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ln(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Ln(i))return dc(e,i,n)}return n}function N1(e,n,i,l,c,p,$,S,A){return e=ul(i,l,!0,e,c,p,$,S,A),e.context=B1(null),i=e.current,l=Cn(),c=_r(i),p=Ut(l,c),p.callback=n??null,xr(i,p,c),e.current.lanes=c,Ki(e,c,l),Wn(e,l),e}function K0(e,n,i,l){var c=n.current,p=Cn(),$=_r(c);return i=B1(i),n.context===null?n.context=i:n.pendingContext=i,n=Ut(p,$),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=xr(c,n,$),e!==null&&(wt(e,c,$,p),z0(e,c,$)),$}function Q0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function I1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function cl(e,n){I1(e,n),(e=e.alternate)&&I1(e,n)}function Bf(){return null}var F1=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}Z0.prototype.render=dl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));K0(e,n,null,null)},Z0.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yr(function(){K0(null,e,null,null)}),n[Lt]=null}};function Z0(e){this._internalRoot=e}Z0.prototype.unstable_scheduleHydration=function(e){if(e){var n=_u();e={blockedOn:null,target:e,priority:n};for(var i=0;i<dr.length&&n!==0&&n<dr[i].priority;i++);dr.splice(i,0,e),i===0&&Su(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Y0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function L1(){}function Nf(e,n,i,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var U=Q0($);p.call(U)}}var $=N1(n,l,e,0,null,!1,!1,"",L1);return e._reactRootContainer=$,e[Lt]=$.current,lo(e.nodeType===8?e.parentNode:e),Yr(),$}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var S=l;l=function(){var U=Q0(A);S.call(U)}}var A=ul(e,0,!1,null,null,!1,!1,"",L1);return e._reactRootContainer=A,e[Lt]=A.current,lo(e.nodeType===8?e.parentNode:e),Yr(function(){K0(n,A,i,l)}),A}function X0(e,n,i,l,c){var p=i._reactRootContainer;if(p){var $=p;if(typeof c=="function"){var S=c;c=function(){var A=Q0($);S.call(A)}}K0(n,$,e,c)}else $=Nf(i,n,e,c,l);return Q0($)}bu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Vi(n.pendingLanes);i!==0&&(Es(n,i|1),Wn(n,nn()),(Ge&6)===0&&(Ti=nn()+500,yr()))}break;case 13:Yr(function(){var l=Gt(e,1);if(l!==null){var c=Cn();wt(l,e,1,c)}}),cl(e,1)}},Bs=function(e){if(e.tag===13){var n=Gt(e,134217728);if(n!==null){var i=Cn();wt(n,e,134217728,i)}cl(e,134217728)}},wu=function(e){if(e.tag===13){var n=_r(e),i=Gt(e,n);if(i!==null){var l=Cn();wt(i,e,n,l)}cl(e,n)}},_u=function(){return Qe},ku=function(e,n){var i=Qe;try{return Qe=e,n()}finally{Qe=i}},ai=function(e,n,i){switch(n){case"input":if(rr(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var c=h0(l);if(!c)throw Error(r(90));Nt(l),rr(l,c)}}}break;case"textarea":rt(e,i);break;case"select":n=i.value,n!=null&&Nn(e,!!i.multiple,n,!1)}},Ho=rl,or=Yr;var If={usingClientEntryPoint:!1,Events:[mo,gi,h0,Oo,li,rl]},So={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vo(e),e===null?null:e.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||Bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var J0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!J0.isDisabled&&J0.supportsFiber)try{Zo=J0.inject(Ff),qt=J0}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If,Gn.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(n))throw Error(r(200));return Ef(e,n,null,i)},Gn.createRoot=function(e,n){if(!ml(e))throw Error(r(299));var i=!1,l="",c=F1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=ul(e,1,!1,null,null,i,!1,l,c),e[Lt]=n.current,lo(e.nodeType===8?e.parentNode:e),new dl(n)},Gn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Vo(n),e=e===null?null:e.stateNode,e},Gn.flushSync=function(e){return Yr(e)},Gn.hydrate=function(e,n,i){if(!Y0(n))throw Error(r(200));return X0(null,e,n,!0,i)},Gn.hydrateRoot=function(e,n,i){if(!ml(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,p="",$=F1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&($=i.onRecoverableError)),n=N1(n,null,e,1,i??null,c,!1,p,$),e[Lt]=n.current,lo(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,c]:n.mutableSourceEagerHydrationData.push(i,c);return new Z0(n)},Gn.render=function(e,n,i){if(!Y0(n))throw Error(r(200));return X0(null,e,n,!1,i)},Gn.unmountComponentAtNode=function(e){if(!Y0(e))throw Error(r(40));return e._reactRootContainer?(Yr(function(){X0(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},Gn.unstable_batchedUpdates=rl,Gn.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!Y0(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return X0(e,n,i,!1,l)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var Q1;function Kf(){if(Q1)return hl.exports;Q1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),hl.exports=Vf(),hl.exports}var Z1;function Qf(){if(Z1)return es;Z1=1;var o=Kf();return es.createRoot=o.createRoot,es.hydrateRoot=o.hydrateRoot,es}var Zf=Qf();const Yf=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Xf=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Jf=`---
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
`,nh=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
Schemat Bernoulliego: n niezależnych powtórzeń doświadczenia z dwoma wynikami (sukces z p, porażka z 1−p). P(dokładnie k sukcesów) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ. Wartość oczekiwana: E = n·p. Typowe zadania: rzuty monetą, kontrola jakości, testy wielokrotne.
`,th=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
Dwumian Newtona: (a+b)ⁿ = Σ C(n,k) · aⁿ⁻ᵏ · bᵏ dla k=0..n. Wyraz ogólny: C(n,k) · aⁿ⁻ᵏ · bᵏ. Współczynniki to kolejne wiersze trójkąta Pascala. Zastosowania: rozwinięcia potęg, przybliżenia, tożsamości kombinatoryczne.
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
Kombinacja to wybór k elementów z n bez uwzględnienia kolejności. C(n,k) = n! / (k! · (n−k)!). Kluczowa różnica: permutacje uwzględniają kolejność, kombinacje nie. Symbol Newtona (n po k) to to samo co C(n,k). Trójkąt Pascala: C(n,k) = C(n−1,k−1) + C(n−1,k).
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
Prawdopodobieństwo warunkowe P(A|B) = P(A∩B)/P(B) — prawdopodobieństwo A, gdy wiemy że zaszło B. Twierdzenie Bayesa: P(A|B) = P(B|A)·P(A)/P(B). Wzór na prawdopodobieństwo całkowite: P(B) = Σ P(B|Aᵢ)·P(Aᵢ). Drzewo decyzyjne pomaga organizować obliczenia.
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
Reguła mnożenia: jeśli jedno zdarzenie ma m możliwości, a drugie n, to razem m·n. Reguła dodawania: jeśli zdarzenia się wykluczają, sumujemy możliwości. Zasada szufladkowa: jeśli n+1 obiektów umieszczamy w n szufladkach, to w co najmniej jednej są ≥ 2 obiekty.
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
  - "interactive|product-rule-explorer.html|Product Rule — Why d/dx[x²] = 2x|Reguła iloczynu — dlaczego pochodna x² to 2x"
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
`,ph=`---
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
`,fh=`---
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
`,yh=`---
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
`,vh=`---
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
`,$h=`---
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
`,bh=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,wh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,_h=`---
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
`,jh=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
---
`,qh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,Th=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,Ah=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,Mh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,Ph=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,Ch=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
Optymalizacja z funkcją kwadratową: gdy zależność jest parabolą, wartość największa lub najmniejsza jest w wierzchołku. Typowe zadania: największe pole prostokąta o zadanym obwodzie, maksymalny dochód, zasięg pocisku. Klucz: zapisz wielkość do optymalizacji jako funkcję kwadratową jednej zmiennej.
`,Rh=`---
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
Permutacja to uporządkowanie n elementów. Liczba permutacji: P(n) = n!. Permutacje z powtórzeniami: n! / (k₁! · k₂! · …). Wariacje bez powtórzeń (k z n elementów w ustalonej kolejności): V(n,k) = n!/(n−k)!.
`,Eh=`---
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
Wielomian to wyrażenie postaci aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀. Stopień wielomianu to najwyższa potęga x z niezerowym współczynnikiem. Kluczowe umiejętności: mnożenie wielomianów, wyłączanie przed nawias, dzielenie wielomianów, twierdzenie Bézouta.
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
Prawdopodobieństwo klasyczne: P(A) = |A|/|Ω| (liczba zdarzeń sprzyjających / wszystkich). P(A') = 1 − P(A). Dla zdarzeń niezależnych: P(A∩B) = P(A)·P(B). Dla dowolnych: P(A∪B) = P(A) + P(B) − P(A∩B).
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
  - "interactive|resources/factoring/factoring-explorer.html|Factoring Explorer — Two Lines × Parabola|Rozkład na czynniki — dwie proste × parabola"
---
Równanie ax² + bx + c = 0 rozwiązujemy za pomocą wyróżnika Δ = b² − 4ac. Gdy Δ > 0: dwa rozwiązania x = (−b ± √Δ) / 2a. Gdy Δ = 0: jedno rozwiązanie x = −b/2a. Gdy Δ < 0: brak rozwiązań rzeczywistych. Alternatywnie: rozkład na czynniki lub wzory Viète'a.
`,Wh=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
Nierówność kwadratowa ax² + bx + c > 0 (lub <, ≥, ≤). Metoda rozwiązywania: znajdź miejsca zerowe, narysuj schemat znaku paraboli, odczytaj przedziały spełniające nierówność. Parabola z a > 0 jest ujemna między pierwiastkami, dodatnia na zewnątrz.
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
Zbiór to kolekcja elementów. Operacje: suma A∪B (elementy z A lub B), iloczyn A∩B (elementy wspólne), różnica A\\B (elementy z A, których nie ma w B), dopełnienie A' (elementy spoza A). Diagram Venna pomaga wizualizować relacje między zbiorami.
`,Qh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Zh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Yh=`---
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
`,e2=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,n2=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,t2=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,r2=`---
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
`,i2=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
Wzory Viète'a łączą współczynniki równania kwadratowego z jego pierwiastkami. Dla ax² + bx + c = 0 z pierwiastkami x₁, x₂: suma x₁ + x₂ = −b/a, iloczyn x₁·x₂ = c/a. Pozwalają konstruować równania o zadanych pierwiastkach i obliczać wyrażenia symetryczne bez rozwiązywania równania.
`,o2=`---
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
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,s2=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,a2=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,l2=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,u2=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,c2=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,d2=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,m2=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,p2=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,f2=`---
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
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,h2=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,g2=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,y2=`---
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
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,v2=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,x2=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,$2=`---
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
Prawdopodobieństwo sukcesu w pojedynczej próbie wynosi $\\frac{1}{3}$. Wykonujemy 5 niezależnych prób. Jakie jest prawdopodobieństwo dokładnie 2 sukcesów?`,b2=`---
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
Rzucamy monetą 6 razy. Jaka jest oczekiwana liczba orłów?`,w2=`---
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
Rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo otrzymania co najmniej jednego orła?`,_2=`---
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
Rzucamy monetą 7 razy. Jakie jest prawdopodobieństwo uzyskania dokładnie 3 orłów?`,k2=`---
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
Prawdopodobieństwo trafienia w cel jednym strzałem wynosi $\\frac{1}{5}$. Strzelec oddaje 4 strzały. Jakie jest prawdopodobieństwo, że nie trafi ani razu?`,z2=`---
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
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,S2=`---
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
Rozwiń $(a + b)^3$:`,j2=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,q2=`---
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
Rozwiń $(x+1)^4$:`,T2=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x+2)^5$?`,A2=`---
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
Ile wynosi suma wszystkich współczynników dwumianowych w rozwinięciu $(a+b)^5$?`,M2=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x - 3)^6$?`,P2=`---
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
Ile wyrazów ma rozwinięcie dwumianu $(a+b)^6$?`,C2=`---
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
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,R2=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,D2=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,E2=`---
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
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,B2=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,N2=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,I2=`---
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
Na turnieju gra 8 drużyn. Każda para gra ze sobą dokładnie raz. Ile meczów zostanie rozegranych?`,F2=`---
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
Z 10 uczniów wybieramy 4-osobową drużynę. Na ile sposobów?`,L2=`---
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
Która z poniższych tożsamości jest prawdziwa dla $0 \\le k \\le n$?`,O2=`---
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
Z grupy 6 kobiet i 8 mężczyzn wybieramy komisję złożoną z 2 kobiet i 3 mężczyzn. Na ile sposobów można to zrobić?`,H2=`---
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
Ile wynosi $\\binom{7}{3}$?`,W2=`---
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
Moduł liczby zespolonej z = 3 + 4i wynosi:`,G2=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,U2=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,V2=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,K2=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,Q2=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,Z2=`---
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
Rzucamy kostką. Wiemy, że wypadła liczba parzysta. Jakie jest prawdopodobieństwo, że jest ona większa niż 4?`,Y2=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(B|A) = 0{,}8$. Korzystając ze wzoru Bayesa, oblicz $P(A|B)$.`,X2=`---
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
$P(A) = 0{,}4$, $P(B|A) = 0{,}9$, $P(B|A') = 0{,}4$. Oblicz $P(B)$ korzystając ze wzoru prawdopodobieństwa całkowitego.`,J2=`---
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
W urnie są 3 kule czerwone i 9 niebieskich. Losujemy bez zwracania. Pierwsza kula była czerwona. Jakie jest prawdopodobieństwo, że druga też będzie czerwona?`,e4=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}12$. Czy zdarzenia $A$ i $B$ są niezależne?`,n4=`---
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
$P(A) = 0{,}4$ i $P(A \\cap B) = 0{,}3$. Ile wynosi $P(B|A)$?`,t4=`---
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
Fabryka ma dwie linie produkcyjne. Linia I wytwarza 40% produkcji z 5% braków, linia II — 60% produkcji z 3% braków. Losowo wybrany produkt okazał się wadliwy. Jakie jest prawdopodobieństwo, że pochodzi z linii I?`,r4=`---
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
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,i4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,o4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,s4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,a4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,l4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,u4=`---
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
Ile jest liczb 5-cyfrowych, w których każda cyfra (od 1 do 5) występuje dokładnie raz?`,c4=`---
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
Na jednej półce stoi 7 książek, na drugiej 8. Na ile sposobów można wybrać jedną książkę?`,d4=`---
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
Ile jest możliwych 4-cyfrowych kodów PIN (cyfry 0–9, mogą się powtarzać)?`,m4=`---
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
W restauracji jest 4 rodzaje zup i 9 dań głównych. Na ile sposobów można zamówić obiad składający się z zupy i dania głównego?`,p4=`---
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
W pokoju jest 13 osób. Co najmniej ile osób musiało urodzić się w tym samym miesiącu?`,f4=`---
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
Z 10 zawodników wybieramy 3 na podium (1., 2. i 3. miejsce). Na ile sposobów można to zrobić?`,h4=`---
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
Ile liczb parzystych 4-cyfrowych można utworzyć z cyfr $\\{1, 2, 3, 4\\}$, jeśli każda cyfra występuje dokładnie raz?`,g4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,y4=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,v4=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,x4=`---
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
Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:`,$4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,b4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,w4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,_4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,k4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,z4=`---
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
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,S4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,j4=`---
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
Wykres rozkładu normalnego ma kształt:`,q4=`---
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
Rozkład na czynniki: x² − 5x + 6 =`,T4=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,A4=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,M4=`---
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
Rozłóż na czynniki: $x^2 - 25 =$`,P4=`---
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
Rozłóż na czynniki: $x^2 + 6x + 9 =$`,C4=`---
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
Rozłóż na czynniki: $4x^2 - 9 =$`,R4=`---
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
Rozłóż na czynniki: $3x^2 - 3x - 6 =$`,D4=`---
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
Rozłóż przez grupowanie: $x^3 + x^2 + 3x + 3 =$`,E4=`---
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
Rozłóż na czynniki: $3x^2 + 7x + 2 =$`,B4=`---
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
Rozłóż na czynniki: $x^3 - 1 =$`,N4=`---
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
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,I4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,F4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,L4=`---
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
Która z poniższych relacji NIE jest funkcją?`,O4=`---
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
Funkcja to takie przyporządkowanie, że:`,H4=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,W4=`---
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
Funkcja f(x) = 2ˣ jest:`,G4=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,U4=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,V4=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,K4=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,Q4=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,Z4=`---
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
Dziedzina funkcji f(x) = log(x − 2) to:`,Y4=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,X4=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,J4=`---
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
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,e3=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,n3=`---
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
Funkcja $f(x) = x^3$ jest:`,t3=`---
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
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,r3=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,i3=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,o3=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 6$"
  - "$x = -6$"
correct: 0
hint: "Oś symetrii paraboli $f(x) = ax^2 + bx + c$ to $x = -\\\\frac{b}{2a} = -\\\\frac{-6}{2} = 3$."
tests:
  fn_quadratic: 1.0
---
Oś symetrii paraboli $f(x) = x^2 - 6x + 5$ ma równanie:`,s3=`---
options:
  - "$\\\\langle -8, +\\\\infty)$"
  - "$(-\\\\infty, -8 \\\\rangle$"
  - "$\\\\langle 0, +\\\\infty)$"
  - "$(-\\\\infty, +\\\\infty)$"
correct: 0
hint: "Ramiona w górę ($a = 1 > 0$), minimum w wierzchołku. $p = 2$, $q = 4 - 8 - 4 = -8$. Zbiór wartości: $\\\\langle -8, +\\\\infty)$."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,a3=`---
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
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,l3=`---
options:
  - "ramiona skierowane w dół, wierzchołek $(1, 4)$"
  - "ramiona skierowane w górę, wierzchołek $(1, 4)$"
  - "ramiona skierowane w dół, wierzchołek $(-1, 4)$"
  - "ramiona skierowane w dół, wierzchołek $(1, 2)$"
correct: 0
hint: "$a = -1 < 0$, więc ramiona w dół. Wierzchołek: $p = -\\\\frac{2}{-2} = 1$, $q = -(1) + 2 + 3 = 4$."
tests:
  fn_quadratic: 1.0
---
Funkcja $f(x) = -x^2 + 2x + 3$ ma:`,u3=`---
options:
  - "$f(x) = (x - 3)^2 + 1$"
  - "$f(x) = (x + 3)^2 + 1$"
  - "$f(x) = (x - 3)^2 - 1$"
  - "$f(x) = (x - 1)^2 + 3$"
correct: 0
hint: "Postać kanoniczna: $f(x) = a(x-p)^2 + q$. $p = \\\\frac{6}{2} = 3$, $q = 9 - 9 + 1 = 1$."
tests:
  fn_quadratic: 1.0
---
Postać kanoniczna funkcji $f(x) = x^2 - 6x + 10$ to:`,c3=`---
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
Funkcja $g(x) = (x - 2)^2 + 3$ jest obrazem funkcji $f(x) = x^2$ przez:`,d3=`---
options:
  - "największa wartość to $7$"
  - "najmniejsza wartość to $7$"
  - "największa wartość to $3$"
  - "największa wartość to $-1$"
correct: 0
hint: "$a = -2 < 0$, więc funkcja ma maksimum w wierzchołku. $p = -\\\\frac{b}{2a} = \\\\frac{4}{4} = 1$, $q = -2 + 4 + 5 = 7$."
tests:
  fn_quadratic: 1.0
---
Funkcja $f(x) = -2x^2 + 4x + 5$ ma:`,m3=`---
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
Okres funkcji f(x) = sin(2x) wynosi:`,p3=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,f3=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,h3=`---
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
Uproszczona postać ułamka 45/60 to:`,g3=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,y3=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,v3=`---
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
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,x3=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,$3=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,b3=`---
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
Ile wynosi NWD(84, 56)?`,w3=`---
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
Oblicz: $(-3) \\cdot 4 =$`,_3=`---
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
Oblicz: $3 - 8 =$`,k3=`---
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
$\\displaystyle \\int 2x \\, dx =$`,z3=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,S3=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,j3=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,q3=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,T3=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,A3=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,M3=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,P3=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,C3=`---
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
Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:`,R3=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,D3=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,E3=`---
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
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,B3=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,N3=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,I3=`---
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
Rozwiązaniem równania log₂(x) = 3 jest:`,F3=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,L3=`---
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
Rozwiąż równanie: $2^x = 16$`,O3=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,H3=`---
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
Oblicz: $\\log_2 8 =$`,W3=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,G3=`---
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
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,U3=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,V3=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,K3=`---
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
Prostokąt o obwodzie 20 ma największe pole gdy:`,Q3=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,Z3=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,Y3=`---
options:
  - "$25$ m"
  - "$20$ m"
  - "$30$ m"
  - "$50$ m"
correct: 0
hint: "Niech długość przy ścianie to $x$. Drugi bok: $y = \\\\frac{50 - x}{2}$. Pole: $P = x \\\\cdot \\\\frac{50 - x}{2} = -\\\\frac{x^2}{2} + 25x$. Maksimum dla $x = 25$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Rolnik ma $50$ m ogrodzenia i chce ogrodzić prostokątny wybieg przy ścianie stodoły (jedna strona nie wymaga ogrodzenia). Jaką długość powinna mieć strona przy ścianie, aby pole wybiegu było największe?`,X3=`---
options:
  - "$45$ m"
  - "$40$ m"
  - "$50$ m"
  - "$44$ m"
correct: 0
hint: "Wysokość: $h(t) = -5t^2 + 30t$. Wierzchołek: $t = -\\\\frac{30}{-10} = 3$. Maks. wysokość: $h(3) = -45 + 90 = 45$ m."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Piłkę wyrzucono pionowo w górę. Jej wysokość (w metrach) po $t$ sekundach opisuje wzór $h(t) = -5t^2 + 30t$. Jaka jest maksymalna wysokość piłki?`,J3=`---
options:
  - "$2500$ zł"
  - "$2000$ zł"
  - "$3000$ zł"
  - "$2400$ zł"
correct: 0
hint: "Przychód: $P(x) = x \\\\cdot (100 - x) = -x^2 + 100x$. Wierzchołek: $x = 50$. $P(50) = 50 \\\\cdot 50 = 2500$ zł."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Sklep sprzedaje produkt w cenie $x$ zł za sztukę. Liczba sprzedanych sztuk wynosi $(100 - x)$. Przy jakiej cenie przychód jest największy i ile wynosi?`,e5=`---
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
Suma dwóch liczb nieujemnych wynosi $16$. Iloczyn tych liczb jest największy, gdy te liczby to:`,n5=`---
options:
  - "$-3$"
  - "$3$"
  - "$-5$"
  - "$1$"
correct: 0
hint: "Współczynnik $a = 2 > 0$, więc funkcja ma minimum. $p = -\\\\frac{-4}{4} = 1$, $q = 2 - 4 - 1 = -3$. Najmniejsza wartość to $-3$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Najmniejsza wartość funkcji $f(x) = 2x^2 - 4x - 1$ wynosi:`,t5=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,r5=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,i5=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,o5=`---
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
Liczba permutacji zbioru {A, B, C, D} wynosi:`,s5=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,a5=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,l5=`---
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
Na ile sposobów można ustawić 5 różnych książek na półce?`,u5=`---
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
Ile różnych „słów" (ciągów liter) można utworzyć ze wszystkich liter wyrazu KOTEK?`,c5=`---
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
Z 5 kandydatów wybieramy przewodniczącego, zastępcę i sekretarza. Na ile sposobów?`,d5=`---
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
Ile anagramów (różnych ciągów liter) można utworzyć ze wszystkich liter wyrazu MATEMATYKA?`,m5=`---
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
Na ile sposobów można ustawić w rzędzie 5 osób, jeśli dwie konkretne osoby muszą stać obok siebie?`,p5=`---
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
Kąt wpisany w okrąg oparty na średnicy mierzy:`,f5=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,h5=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,g5=`---
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
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,y5=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,v5=`---
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
Wielomian stopnia $n$ ma:`,x5=`---
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
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,$5=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,b5=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,w5=`---
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
Rozwiń: $(2x - 1)(x + 3) =$`,_5=`---
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
Jaki jest stopień wielomianu $W(x) = x^5 - 3x^3 + 2x - 7$?`,k5=`---
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
Oblicz wartość wielomianu $W(x) = 2x^3 - 3x^2 + 2x - 2$ dla $x = 2$.`,z5=`---
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
Iloraz $\\frac{x^3 + 4x^2 + 7x + 6}{x + 2}$ jest równy:`,S5=`---
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
Suma wielomianów $P(x) = x^4 - 3x^2 + 1$ i $Q(x) = -2x^3 + 4x^2 + 2x - 3$ wynosi:`,j5=`---
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
Rozwiń $(x + 1)^3 =$`,q5=`---
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
Wielomian $P(x)$ ma stopień $1$, a wielomian $Q(x)$ ma stopień $3$. Jaki jest stopień wielomianu $P(x) \\cdot Q(x)$?`,T5=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,A5=`---
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
Oblicz: $2^3 =$`,M5=`---
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
Uprość: $a^2 \\cdot a^3 =$`,P5=`---
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
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,C5=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,R5=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,D5=`---
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
Z talii 52 kart losujemy jedną kartę. Jakie jest prawdopodobieństwo wylosowania asa?`,E5=`---
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
Rzucamy kostką sześcienną. Jakie jest prawdopodobieństwo, że NIE wypadnie szóstka?`,B5=`---
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
Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo otrzymania dwóch orłów?`,N5=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?`,I5=`---
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
$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$, $P(A \\cap B) = \\frac{1}{6}$. Ile wynosi $P(A \\cup B)$?`,F5=`---
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
Zdarzenia $A$ i $B$ są niezależne. $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{5}$. Ile wynosi $P(A \\cap B)$?`,L5=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek będzie większa niż 8?`,O5=`---
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
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,H5=`---
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
Dowód nie wprost polega na tym, że:`,W5=`---
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
Dowód przez indukcję matematyczną składa się z:`,G5=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,U5=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,V5=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,K5=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,Q5=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,Z5=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,Y5=`---
options:
  - "$\\\\Delta = 0$, jedno rozwiązanie"
  - "$\\\\Delta > 0$, dwa rozwiązania"
  - "$\\\\Delta < 0$, brak rozwiązań"
  - "$\\\\Delta = 1$, dwa rozwiązania"
correct: 0
hint: "$\\\\Delta = 36 - 4 \\\\cdot 9 = 36 - 36 = 0$. Gdy $\\\\Delta = 0$, równanie ma dokładnie jedno rozwiązanie (podwójne)."
tests:
  quadratic_eq: 1.0
---
Ile rozwiązań ma równanie $x^2 - 6x + 9 = 0$?`,X5=`---
options:
  - "brak rozwiązań rzeczywistych"
  - "$x = 1$ i $x = -1$"
  - "$x = 0$"
  - "$x = 1$"
correct: 0
hint: "$\\\\Delta = 0 - 4 \\\\cdot 1 \\\\cdot 1 = -4 < 0$. Wyróżnik ujemny oznacza brak pierwiastków rzeczywistych."
tests:
  quadratic_eq: 1.0
---
Równanie $x^2 + 1 = 0$ ma:`,J5=`---
options:
  - "$x = -1$ i $x = \\\\frac{3}{2}$"
  - "$x = 1$ i $x = -\\\\frac{3}{2}$"
  - "$x = 2$ i $x = -3$"
  - "$x = -1$ i $x = 3$"
correct: 0
hint: "$\\\\Delta = 4 + 24 = 28$... Albo rozłóż: $2x^2 - x - 3 = (2x - 3)(x + 1) = 0$, stąd $x = -1$ lub $x = \\\\frac{3}{2}$."
tests:
  quadratic_eq: 1.0
  factoring: 0.5
---
Rozwiąż równanie $2x^2 - x - 3 = 0$.`,e6=`---
options:
  - "$49$"
  - "$-49$"
  - "$1$"
  - "$25$"
correct: 0
hint: "$\\\\Delta = b^2 - 4ac = (-3)^2 - 4 \\\\cdot 2 \\\\cdot (-5) = 9 + 40 = 49$."
tests:
  quadratic_eq: 1.0
---
Wyróżnik równania $2x^2 - 3x - 5 = 0$ wynosi:`,n6=`---
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
Rozwiąż równanie $x^2 - 5x = 0$.`,t6=`---
options:
  - "$m < \\\\frac{1}{8}$"
  - "$m > \\\\frac{1}{8}$"
  - "$m > 0$"
  - "$m = \\\\frac{1}{8}$"
correct: 0
hint: "Warunek na dwa pierwiastki: $\\\\Delta > 0$. Tutaj $\\\\Delta = 1 - 8m > 0$, czyli $m < \\\\frac{1}{8}$."
tests:
  quadratic_eq: 1.0
---
Równanie $2x^2 + x + m = 0$ ma dwa różne pierwiastki rzeczywiste, gdy:`,r6=`---
options:
  - "$5$ i $7$"
  - "$4$ i $8$"
  - "$3$ i $9$"
  - "$6$ i $6$"
correct: 0
hint: "Niech liczby to $x$ i $x+2$. Wtedy $x(x+2) = 35$, czyli $x^2 + 2x - 35 = 0$. $\\\\Delta = 4 + 140 = 144$. $x = \\\\frac{-2+12}{2} = 5$."
tests:
  quadratic_eq: 1.0
---
Iloczyn dwóch kolejnych liczb nieparzystych wynosi $35$. Te liczby to:`,i6=`---
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
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,o6=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,s6=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,a6=`---
options:
  - "$(-\\\\infty, -1) \\\\cup (5, +\\\\infty)$"
  - "$(-1, 5)$"
  - "$(-5, 1)$"
  - "$(-\\\\infty, -5) \\\\cup (1, +\\\\infty)$"
correct: 0
hint: "Pierwiastki: $x^2 - 4x - 5 = (x-5)(x+1) = 0$, czyli $x = -1$ i $x = 5$. Dla $a > 0$ nierówność $> 0$ jest spełniona poza pierwiastkami."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,l6=`---
options:
  - "$x \\\\in \\\\mathbb{R}$"
  - "$x \\\\in \\\\emptyset$"
  - "$x \\\\in (-1, 1)$"
  - "$x \\\\in (-\\\\infty, 0)$"
correct: 0
hint: "$x^2 + 2x + 5 = (x+1)^2 + 4 \\\\geq 4 > 0$ dla każdego $x$. Nierówność jest spełniona zawsze."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności $x^2 + 2x + 5 > 0$ jest:`,u6=`---
options:
  - "$\\\\langle 1, 4 \\\\rangle$"
  - "$(1, 4)$"
  - "$(-\\\\infty, 1 \\\\rangle \\\\cup \\\\langle 4, +\\\\infty)$"
  - "$(-\\\\infty, 1) \\\\cup (4, +\\\\infty)$"
correct: 0
hint: "Pierwiastki: $x^2 - 5x + 4 = (x-1)(x-4) = 0$. Nierówność $\\\\leq 0$ z $a > 0$: rozwiązanie to $\\\\langle 1, 4 \\\\rangle$ (przedział domknięty, bo $\\\\leq$)."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność $x^2 - 5x + 4 \\\\leq 0$.`,c6=`---
options:
  - "$(-\\\\infty, -3 \\\\rangle \\\\cup \\\\langle 1, +\\\\infty)$"
  - "$\\\\langle -3, 1 \\\\rangle$"
  - "$(-3, 1)$"
  - "$(-\\\\infty, -1 \\\\rangle \\\\cup \\\\langle 3, +\\\\infty)$"
correct: 0
hint: "Podziel przez $-1$ (zmień znak nierówności!): $x^2 + 2x - 3 \\\\leq 0$... Nie! Oryginalna: $-x^2 - 2x + 3 \\\\leq 0$, czyli $x^2 + 2x - 3 \\\\geq 0$. Pierwiastki: $(x+3)(x-1) = 0$. Dla $\\\\geq 0$: $x \\\\leq -3$ lub $x \\\\geq 1$."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność $-x^2 - 2x + 3 \\\\leq 0$.`,d6=`---
options:
  - "$(-\\\\infty, 2) \\\\cup (2, +\\\\infty)$"
  - "$x \\\\in \\\\mathbb{R}$"
  - "$x \\\\in \\\\emptyset$"
  - "$\\\\{2\\\\}$"
correct: 0
hint: "$x^2 - 4x + 4 = (x-2)^2 \\\\geq 0$. Wyrażenie $(x-2)^2 > 0$ dla wszystkich $x \\\\neq 2$, a równe $0$ tylko dla $x = 2$."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności $x^2 - 4x + 4 > 0$ jest:`,m6=`---
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
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,p6=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,f6=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,h6=`---
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
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,g6=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,y6=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,v6=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,x6=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,$6=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,b6=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,w6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,_6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,k6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,z6=`---
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
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,S6=`---
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
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,j6=`---
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
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,q6=`---
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
Które z poniższych jest poprawnym prawem De Morgana?`,T6=`---
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
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,A6=`---
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
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,M6=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,P6=`---
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
Twierdzenie cosinusów brzmi:`,C6=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,R6=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,D6=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,E6=`---
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
Wzór na objętość kuli o promieniu $r$:`,B6=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,N6=`---
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
Dominanta (moda) zbioru danych to:`,I6=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,F6=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,L6=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,O6=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,H6=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,W6=`---
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
Wartość $\\sin 30°$ wynosi:`,G6=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,U6=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,V6=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,K6=`---
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
Rozwiąż równanie: $\\tan x = 1$`,Q6=`---
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
sin(2α) jest równe:`,Z6=`---
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
Wzór na $\\sin 2\\alpha$:`,Y6=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,X6=`---
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
Wartość sin(120°) jest równa:`,J6=`---
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
Wartość $\\cos 30°$ wynosi:`,eg=`---
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
Wartość $\\sin 45°$ wynosi:`,ng=`---
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
Długość wektora v = [3, 4] wynosi:`,tg=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,rg=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,ig=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,og=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,sg=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,ag=`---
options:
  - "$-5$"
  - "$5$"
  - "$6$"
  - "$-6$"
correct: 0
hint: "Wzory Viete'a: $x_1 + x_2 = -\\\\frac{b}{a} = -\\\\frac{5}{1} = -5$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,lg=`---
options:
  - "$x^2 - 5x + 6 = 0$"
  - "$x^2 + 5x + 6 = 0$"
  - "$x^2 - 5x - 6 = 0$"
  - "$x^2 - 6x + 5 = 0$"
correct: 0
hint: "Jeśli pierwiastki to $2$ i $3$, to $x_1 + x_2 = 5$ i $x_1 \\\\cdot x_2 = 6$. Równanie: $x^2 - 5x + 6 = 0$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,ug=`---
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
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,cg=`---
options:
  - "$-\\\\frac{5}{6}$"
  - "$\\\\frac{5}{6}$"
  - "$\\\\frac{6}{5}$"
  - "$-\\\\frac{6}{5}$"
correct: 0
hint: "$\\\\frac{1}{x_1} + \\\\frac{1}{x_2} = \\\\frac{x_1 + x_2}{x_1 x_2}$. Z Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = -6$. Wynik: $\\\\frac{5}{-6} = -\\\\frac{5}{6}$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,dg=`---
options:
  - "$\\\\frac{3}{2}$"
  - "$-\\\\frac{3}{2}$"
  - "$3$"
  - "$6$"
correct: 0
hint: "Wzory Viete'a: $x_1 \\\\cdot x_2 = \\\\frac{c}{a} = \\\\frac{3}{2}$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`;function Gd(o){const t=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:o.trim()};const r=t[1],s=t[2].trim(),a={},u=r.split(/\r?\n/);let d=0;for(;d<u.length;){const h=u[d];if(h.startsWith("  ")){d++;continue}const g=h.match(/^(\w+):\s*(.*)/);if(!g){d++;continue}const x=g[1];let b=g[2].trim();if(b===""||b===null){const _=u[d+1]??"";if(_.startsWith("  - ")){const z=[];for(d++;d<u.length&&u[d].startsWith("  - ");){let k=u[d].replace(/^  - /,"").trim();k=k.replace(/^["']|["']$/g,""),z.push(k),d++}a[x]=z.length>0?z:null}else if(_.match(/^  \w+:/)){const z={};for(d++;d<u.length&&u[d].match(/^  \w+:/);){const k=u[d].match(/^  (\w+):\s*(.*)/);if(k){const D=k[1];let T=k[2].trim().replace(/^["']|["']$/g,"");z[D]=!isNaN(T)&&T!==""?Number(T):T}d++}a[x]=z}else a[x]=null,d++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?a[x]=Number(b):b==="true"?a[x]=!0:b==="false"?a[x]=!1:a[x]=b,d++}return{meta:a,body:s}}function Ud(o,t){return Object.entries(o).map(([r,s])=>{var d;const a=(d=r.match(t))==null?void 0:d[1],{meta:u}=Gd(s);return{id:a,label:u.label??a,labelPl:u.labelPl??u.label??a,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0,resources:Array.isArray(u.resources)?u.resources.map(h=>{if(typeof h!="string")return null;const[g,x,b,_]=h.split("|").map(k=>k.trim()),z=x&&!x.includes("/")&&!x.startsWith("http")?`resources/${a}/${x}`:x??"";return{type:g??"article",url:z,titleEn:b??"",titlePl:_??b??""}}).filter(Boolean):[]}})}function Vd(o,t){var s;const r={};for(const[a,u]of Object.entries(o)){const d=(s=a.match(t))==null?void 0:s[1];if(!d)continue;const{meta:h,body:g}=Gd(u);r[d]||(r[d]=[]),r[d].push({q:g,options:h.options??[],correct:h.correct??0,hint:h.hint??"",tests:h.tests&&typeof h.tests=="object"&&Object.keys(h.tests).length>0?h.tests:{[d]:1}})}return r}function Kd(o,t,r=[]){const s=o[t];if(!s||s.length===0||r.includes(-1))return null;const a=s.map((d,h)=>({q:d,i:h})).filter(({i:d})=>!r.includes(d));if(a.length===0)return null;const u=a[Math.floor(Math.random()*a.length)];return{...u.q,index:u.i}}const mg=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],pg={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},fg={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},hg={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},gg={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},yg=Object.assign({"./nodes/abs_value/node.md":Yf,"./nodes/analytic_geom/node.md":Xf,"./nodes/area_perimeter/node.md":Jf,"./nodes/arith_geom/node.md":eh,"./nodes/bernoulli/node.md":nh,"./nodes/binom_theorem/node.md":th,"./nodes/circle_eq/node.md":rh,"./nodes/combinations/node.md":ih,"./nodes/complex/node.md":oh,"./nodes/cond_prob/node.md":sh,"./nodes/conic_sections/node.md":ah,"./nodes/counting/node.md":lh,"./nodes/data_basics/node.md":uh,"./nodes/deriv_apps/node.md":ch,"./nodes/derivative/node.md":dh,"./nodes/distributions/node.md":mh,"./nodes/factoring/node.md":ph,"./nodes/fn_compositions/node.md":fh,"./nodes/fn_concept/node.md":hh,"./nodes/fn_exp/node.md":gh,"./nodes/fn_linear/node.md":yh,"./nodes/fn_log/node.md":vh,"./nodes/fn_poly/node.md":xh,"./nodes/fn_quadratic/node.md":$h,"./nodes/fn_trig/node.md":bh,"./nodes/fractions/node.md":wh,"./nodes/geo_series/node.md":_h,"./nodes/integers/node.md":kh,"./nodes/integral/node.md":zh,"./nodes/limits/node.md":Sh,"./nodes/linear_eq/node.md":jh,"./nodes/linear_ineq/node.md":qh,"./nodes/linear_sys/node.md":Th,"./nodes/log_eq/node.md":Ah,"./nodes/log_exp/node.md":Mh,"./nodes/logic_basics/node.md":Ph,"./nodes/optimization_lp/node.md":Ch,"./nodes/param_eq/node.md":Rh,"./nodes/permutations/node.md":Dh,"./nodes/planimetria_lp/node.md":Eh,"./nodes/poly_roots/node.md":Bh,"./nodes/polynomials/node.md":Nh,"./nodes/powers/node.md":Ih,"./nodes/probability/node.md":Fh,"./nodes/proof/node.md":Lh,"./nodes/pythagoras/node.md":Oh,"./nodes/quadratic_eq/node.md":Hh,"./nodes/quadratic_ineq/node.md":Wh,"./nodes/rational_expr/node.md":Gh,"./nodes/seq_limits/node.md":Uh,"./nodes/sequences/node.md":Vh,"./nodes/sets/node.md":Kh,"./nodes/sin_cos_law/node.md":Qh,"./nodes/solid_geom/node.md":Zh,"./nodes/stat_lp/node.md":Yh,"./nodes/thales/node.md":Xh,"./nodes/trig_basic/node.md":Jh,"./nodes/trig_eq/node.md":e2,"./nodes/trig_formulas/node.md":n2,"./nodes/trig_lp/node.md":t2,"./nodes/vectors/node.md":r2,"./nodes/vieta/node.md":i2}),vg=Ud(yg,/\.\/nodes\/([^/]+)\/node\.md$/),xg=Object.assign({"./nodes/abs_value/questions/01.md":o2,"./nodes/abs_value/questions/02.md":s2,"./nodes/abs_value/questions/03.md":a2,"./nodes/analytic_geom/questions/01.md":l2,"./nodes/analytic_geom/questions/02.md":u2,"./nodes/analytic_geom/questions/03.md":c2,"./nodes/area_perimeter/questions/01.md":d2,"./nodes/area_perimeter/questions/02.md":m2,"./nodes/area_perimeter/questions/03.md":p2,"./nodes/arith_geom/questions/01.md":f2,"./nodes/arith_geom/questions/02.md":h2,"./nodes/arith_geom/questions/03.md":g2,"./nodes/bernoulli/questions/01.md":y2,"./nodes/bernoulli/questions/02.md":v2,"./nodes/bernoulli/questions/03.md":x2,"./nodes/bernoulli/questions/04.md":$2,"./nodes/bernoulli/questions/05.md":b2,"./nodes/bernoulli/questions/06.md":w2,"./nodes/bernoulli/questions/07.md":_2,"./nodes/bernoulli/questions/08.md":k2,"./nodes/binom_theorem/questions/01.md":z2,"./nodes/binom_theorem/questions/02.md":S2,"./nodes/binom_theorem/questions/03.md":j2,"./nodes/binom_theorem/questions/04.md":q2,"./nodes/binom_theorem/questions/05.md":T2,"./nodes/binom_theorem/questions/06.md":A2,"./nodes/binom_theorem/questions/07.md":M2,"./nodes/binom_theorem/questions/08.md":P2,"./nodes/circle_eq/questions/01.md":C2,"./nodes/circle_eq/questions/02.md":R2,"./nodes/circle_eq/questions/03.md":D2,"./nodes/combinations/questions/01.md":E2,"./nodes/combinations/questions/02.md":B2,"./nodes/combinations/questions/03.md":N2,"./nodes/combinations/questions/04.md":I2,"./nodes/combinations/questions/05.md":F2,"./nodes/combinations/questions/06.md":L2,"./nodes/combinations/questions/07.md":O2,"./nodes/combinations/questions/08.md":H2,"./nodes/complex/questions/01.md":W2,"./nodes/complex/questions/02.md":G2,"./nodes/complex/questions/03.md":U2,"./nodes/cond_prob/questions/01.md":V2,"./nodes/cond_prob/questions/02.md":K2,"./nodes/cond_prob/questions/03.md":Q2,"./nodes/cond_prob/questions/04.md":Z2,"./nodes/cond_prob/questions/05.md":Y2,"./nodes/cond_prob/questions/06.md":X2,"./nodes/cond_prob/questions/07.md":J2,"./nodes/cond_prob/questions/08.md":e4,"./nodes/cond_prob/questions/09.md":n4,"./nodes/cond_prob/questions/10.md":t4,"./nodes/conic_sections/questions/01.md":r4,"./nodes/conic_sections/questions/02.md":i4,"./nodes/conic_sections/questions/03.md":o4,"./nodes/counting/questions/01.md":s4,"./nodes/counting/questions/02.md":a4,"./nodes/counting/questions/03.md":l4,"./nodes/counting/questions/04.md":u4,"./nodes/counting/questions/05.md":c4,"./nodes/counting/questions/06.md":d4,"./nodes/counting/questions/07.md":m4,"./nodes/counting/questions/08.md":p4,"./nodes/counting/questions/09.md":f4,"./nodes/counting/questions/10.md":h4,"./nodes/data_basics/questions/01.md":g4,"./nodes/data_basics/questions/02.md":y4,"./nodes/data_basics/questions/03.md":v4,"./nodes/deriv_apps/questions/01.md":x4,"./nodes/deriv_apps/questions/02.md":$4,"./nodes/deriv_apps/questions/03.md":b4,"./nodes/derivative/questions/01.md":w4,"./nodes/derivative/questions/02.md":_4,"./nodes/derivative/questions/03.md":k4,"./nodes/distributions/questions/01.md":z4,"./nodes/distributions/questions/02.md":S4,"./nodes/distributions/questions/03.md":j4,"./nodes/factoring/questions/01.md":q4,"./nodes/factoring/questions/02.md":T4,"./nodes/factoring/questions/03.md":A4,"./nodes/factoring/questions/04.md":M4,"./nodes/factoring/questions/05.md":P4,"./nodes/factoring/questions/06.md":C4,"./nodes/factoring/questions/07.md":R4,"./nodes/factoring/questions/08.md":D4,"./nodes/factoring/questions/09.md":E4,"./nodes/factoring/questions/10.md":B4,"./nodes/fn_compositions/questions/01.md":N4,"./nodes/fn_compositions/questions/02.md":I4,"./nodes/fn_compositions/questions/03.md":F4,"./nodes/fn_concept/questions/01.md":L4,"./nodes/fn_concept/questions/02.md":O4,"./nodes/fn_concept/questions/03.md":H4,"./nodes/fn_exp/questions/01.md":W4,"./nodes/fn_exp/questions/02.md":G4,"./nodes/fn_exp/questions/03.md":U4,"./nodes/fn_linear/questions/01.md":V4,"./nodes/fn_linear/questions/02.md":K4,"./nodes/fn_linear/questions/03.md":Q4,"./nodes/fn_log/questions/01.md":Z4,"./nodes/fn_log/questions/02.md":Y4,"./nodes/fn_log/questions/03.md":X4,"./nodes/fn_poly/questions/01.md":J4,"./nodes/fn_poly/questions/02.md":e3,"./nodes/fn_poly/questions/03.md":n3,"./nodes/fn_quadratic/questions/01.md":t3,"./nodes/fn_quadratic/questions/02.md":r3,"./nodes/fn_quadratic/questions/03.md":i3,"./nodes/fn_quadratic/questions/04.md":o3,"./nodes/fn_quadratic/questions/05.md":s3,"./nodes/fn_quadratic/questions/06.md":a3,"./nodes/fn_quadratic/questions/07.md":l3,"./nodes/fn_quadratic/questions/08.md":u3,"./nodes/fn_quadratic/questions/09.md":c3,"./nodes/fn_quadratic/questions/10.md":d3,"./nodes/fn_trig/questions/01.md":m3,"./nodes/fn_trig/questions/02.md":p3,"./nodes/fn_trig/questions/03.md":f3,"./nodes/fractions/questions/01.md":h3,"./nodes/fractions/questions/02.md":g3,"./nodes/fractions/questions/03.md":y3,"./nodes/geo_series/questions/01.md":v3,"./nodes/geo_series/questions/02.md":x3,"./nodes/geo_series/questions/03.md":$3,"./nodes/integers/questions/01.md":b3,"./nodes/integers/questions/02.md":w3,"./nodes/integers/questions/03.md":_3,"./nodes/integral/questions/01.md":k3,"./nodes/integral/questions/02.md":z3,"./nodes/integral/questions/03.md":S3,"./nodes/limits/questions/01.md":j3,"./nodes/limits/questions/02.md":q3,"./nodes/limits/questions/03.md":T3,"./nodes/linear_eq/questions/01.md":A3,"./nodes/linear_eq/questions/02.md":M3,"./nodes/linear_eq/questions/03.md":P3,"./nodes/linear_ineq/questions/01.md":C3,"./nodes/linear_ineq/questions/02.md":R3,"./nodes/linear_ineq/questions/03.md":D3,"./nodes/linear_sys/questions/01.md":E3,"./nodes/linear_sys/questions/02.md":B3,"./nodes/linear_sys/questions/03.md":N3,"./nodes/log_eq/questions/01.md":I3,"./nodes/log_eq/questions/02.md":F3,"./nodes/log_eq/questions/03.md":L3,"./nodes/log_exp/questions/01.md":O3,"./nodes/log_exp/questions/02.md":H3,"./nodes/log_exp/questions/03.md":W3,"./nodes/logic_basics/questions/01.md":G3,"./nodes/logic_basics/questions/02.md":U3,"./nodes/logic_basics/questions/03.md":V3,"./nodes/optimization_lp/questions/01.md":K3,"./nodes/optimization_lp/questions/02.md":Q3,"./nodes/optimization_lp/questions/03.md":Z3,"./nodes/optimization_lp/questions/04.md":Y3,"./nodes/optimization_lp/questions/05.md":X3,"./nodes/optimization_lp/questions/06.md":J3,"./nodes/optimization_lp/questions/07.md":e5,"./nodes/optimization_lp/questions/08.md":n5,"./nodes/param_eq/questions/01.md":t5,"./nodes/param_eq/questions/02.md":r5,"./nodes/param_eq/questions/03.md":i5,"./nodes/permutations/questions/01.md":o5,"./nodes/permutations/questions/02.md":s5,"./nodes/permutations/questions/03.md":a5,"./nodes/permutations/questions/04.md":l5,"./nodes/permutations/questions/05.md":u5,"./nodes/permutations/questions/06.md":c5,"./nodes/permutations/questions/07.md":d5,"./nodes/permutations/questions/08.md":m5,"./nodes/planimetria_lp/questions/01.md":p5,"./nodes/planimetria_lp/questions/02.md":f5,"./nodes/planimetria_lp/questions/03.md":h5,"./nodes/poly_roots/questions/01.md":g5,"./nodes/poly_roots/questions/02.md":y5,"./nodes/poly_roots/questions/03.md":v5,"./nodes/polynomials/questions/01.md":x5,"./nodes/polynomials/questions/02.md":$5,"./nodes/polynomials/questions/03.md":b5,"./nodes/polynomials/questions/04.md":w5,"./nodes/polynomials/questions/05.md":_5,"./nodes/polynomials/questions/06.md":k5,"./nodes/polynomials/questions/07.md":z5,"./nodes/polynomials/questions/08.md":S5,"./nodes/polynomials/questions/09.md":j5,"./nodes/polynomials/questions/10.md":q5,"./nodes/powers/questions/01.md":T5,"./nodes/powers/questions/02.md":A5,"./nodes/powers/questions/03.md":M5,"./nodes/probability/questions/01.md":P5,"./nodes/probability/questions/02.md":C5,"./nodes/probability/questions/03.md":R5,"./nodes/probability/questions/04.md":D5,"./nodes/probability/questions/05.md":E5,"./nodes/probability/questions/06.md":B5,"./nodes/probability/questions/07.md":N5,"./nodes/probability/questions/08.md":I5,"./nodes/probability/questions/09.md":F5,"./nodes/probability/questions/10.md":L5,"./nodes/proof/questions/01.md":O5,"./nodes/proof/questions/02.md":H5,"./nodes/proof/questions/03.md":W5,"./nodes/pythagoras/questions/01.md":G5,"./nodes/pythagoras/questions/02.md":U5,"./nodes/pythagoras/questions/03.md":V5,"./nodes/quadratic_eq/questions/01.md":K5,"./nodes/quadratic_eq/questions/02.md":Q5,"./nodes/quadratic_eq/questions/03.md":Z5,"./nodes/quadratic_eq/questions/04.md":Y5,"./nodes/quadratic_eq/questions/05.md":X5,"./nodes/quadratic_eq/questions/06.md":J5,"./nodes/quadratic_eq/questions/07.md":e6,"./nodes/quadratic_eq/questions/08.md":n6,"./nodes/quadratic_eq/questions/09.md":t6,"./nodes/quadratic_eq/questions/10.md":r6,"./nodes/quadratic_ineq/questions/01.md":i6,"./nodes/quadratic_ineq/questions/02.md":o6,"./nodes/quadratic_ineq/questions/03.md":s6,"./nodes/quadratic_ineq/questions/04.md":a6,"./nodes/quadratic_ineq/questions/05.md":l6,"./nodes/quadratic_ineq/questions/06.md":u6,"./nodes/quadratic_ineq/questions/07.md":c6,"./nodes/quadratic_ineq/questions/08.md":d6,"./nodes/rational_expr/questions/01.md":m6,"./nodes/rational_expr/questions/02.md":p6,"./nodes/rational_expr/questions/03.md":f6,"./nodes/seq_limits/questions/01.md":h6,"./nodes/seq_limits/questions/02.md":g6,"./nodes/seq_limits/questions/03.md":y6,"./nodes/sequences/questions/01.md":v6,"./nodes/sequences/questions/02.md":x6,"./nodes/sequences/questions/03.md":$6,"./nodes/sets/questions/01.md":b6,"./nodes/sets/questions/02.md":w6,"./nodes/sets/questions/03.md":_6,"./nodes/sets/questions/04.md":k6,"./nodes/sets/questions/05.md":z6,"./nodes/sets/questions/06.md":S6,"./nodes/sets/questions/07.md":j6,"./nodes/sets/questions/08.md":q6,"./nodes/sets/questions/09.md":T6,"./nodes/sets/questions/10.md":A6,"./nodes/sin_cos_law/questions/01.md":M6,"./nodes/sin_cos_law/questions/02.md":P6,"./nodes/sin_cos_law/questions/03.md":C6,"./nodes/solid_geom/questions/01.md":R6,"./nodes/solid_geom/questions/02.md":D6,"./nodes/solid_geom/questions/03.md":E6,"./nodes/stat_lp/questions/01.md":B6,"./nodes/stat_lp/questions/02.md":N6,"./nodes/stat_lp/questions/03.md":I6,"./nodes/thales/questions/01.md":F6,"./nodes/thales/questions/02.md":L6,"./nodes/thales/questions/03.md":O6,"./nodes/trig_basic/questions/01.md":H6,"./nodes/trig_basic/questions/02.md":W6,"./nodes/trig_basic/questions/03.md":G6,"./nodes/trig_eq/questions/01.md":U6,"./nodes/trig_eq/questions/02.md":V6,"./nodes/trig_eq/questions/03.md":K6,"./nodes/trig_formulas/questions/01.md":Q6,"./nodes/trig_formulas/questions/02.md":Z6,"./nodes/trig_formulas/questions/03.md":Y6,"./nodes/trig_lp/questions/01.md":X6,"./nodes/trig_lp/questions/02.md":J6,"./nodes/trig_lp/questions/03.md":eg,"./nodes/vectors/questions/01.md":ng,"./nodes/vectors/questions/02.md":tg,"./nodes/vectors/questions/03.md":rg,"./nodes/vieta/questions/01.md":ig,"./nodes/vieta/questions/02.md":og,"./nodes/vieta/questions/03.md":sg,"./nodes/vieta/questions/04.md":ag,"./nodes/vieta/questions/05.md":lg,"./nodes/vieta/questions/06.md":ug,"./nodes/vieta/questions/07.md":cg,"./nodes/vieta/questions/08.md":dg}),$g=Vd(xg,/\.\/nodes\/([^/]+)\/questions\//),bg=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:gg,QUESTION_BANK:$g,RAW_EDGES:mg,RAW_NODES:vg,SCOPE_COLORS:fg,SCOPE_LABELS:hg,SECTIONS:pg},Symbol.toStringTag,{value:"Module"})),wg=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,_g=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,kg=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,zg=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Sg=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,jg=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,qg=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Tg=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Ag=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,Mg=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,Pg=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,Cg=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,Rg=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,Dg=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,Eg=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,Bg=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Ng=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Ig=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Fg=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,Lg=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,Og=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Hg=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Wg=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,Gg=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,Ug=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,Vg=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,Kg=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,Qg=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Zg=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,Yg=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Xg=`---
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
`,Jg=`---
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
`,ey=`---
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
`,ny=`---
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
`,ty=`---
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
`,ry=`---
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
`,iy=`---
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
`,oy=`---
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
`,sy=`---
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
`,ay=`---
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

`,ly=`---
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

`,uy=`---
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

`,cy=`---
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
`,dy=`---
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
`,my=`---
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
`,py=`---
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
`,fy=`---
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
`,hy=`---
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
`,gy=`---
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

`,yy=`---
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

`,vy=`---
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

`,xy=`---
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

`,$y=`---
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

`,by=`---
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

`,wy=`---
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
`,_y=`---
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
`,ky=`---
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
`,zy=`---
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
`,Sy=`---
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
`,jy=`---
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
`,qy=`---
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
`,Ty=`---
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
`,Ay=`---
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
`,My=`---
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
`,Py=`---
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
`,Cy=`---
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
`,Ry=`---
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
`,Dy=`---
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
`,Ey=`---
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
`,By=`---
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
`,Ny=`---
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
`,Iy=`---
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
`,Fy=`---
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
`,Ly=`---
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
`,Oy=`---
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
`,Hy=`---
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

`,Wy=`---
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

`,Gy=`---
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

`,Uy=`---
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

`,Vy=`---
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

`,Ky=`---
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

`,Qy=`---
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

`,Zy=`---
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

`,Yy=`---
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

`,Xy=`---
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
`,Jy=`---
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
`,e7=`---
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
`,n7=`---
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
`,t7=`---
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
`,r7=`---
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
`,i7=`---
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

`,o7=`---
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

`,s7=`---
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

`,a7=`---
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

`,l7=`---
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

`,u7=`---
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

`,c7=`---
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
`,d7=`---
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
`,m7=`---
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
`,p7=`---
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
`,f7=`---
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
`,h7=`---
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
`,g7=`---
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
`,y7=`---
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
`,v7=`---
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
`,x7=`---
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
`,$7=`---
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

`,b7=`---
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

`,w7=`---
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
`,_7=`---
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
`,k7=`---
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
`,z7=`---
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

`,S7=`---
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

`,j7=`---
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

`,q7=`---
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
`,T7=`---
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
`,A7=`---
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
`,M7=`---
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

`,P7=`---
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

`,C7=`---
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

`,R7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],D7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},E7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},B7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},N7={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},I7=Object.assign({"./nodes/binary_ops/node.md":wg,"./nodes/cosets/node.md":_g,"./nodes/cyclic_groups/node.md":kg,"./nodes/direct_sums/node.md":zg,"./nodes/field_extensions/node.md":Sg,"./nodes/fields_intro/node.md":jg,"./nodes/finitely_generated/node.md":qg,"./nodes/free_modules/node.md":Tg,"./nodes/group_actions/node.md":Ag,"./nodes/group_homomorphisms/node.md":Mg,"./nodes/groups_intro/node.md":Pg,"./nodes/ideals/node.md":Cg,"./nodes/induction/node.md":Rg,"./nodes/integral_domains/node.md":Dg,"./nodes/iso_theorem/node.md":Eg,"./nodes/jordan_normal_form/node.md":Bg,"./nodes/module_homs/node.md":Ng,"./nodes/modules_intro/node.md":Ig,"./nodes/normal_subgroups/node.md":Fg,"./nodes/poly_rings/node.md":Lg,"./nodes/primary_decomp/node.md":Og,"./nodes/rational_canonical/node.md":Hg,"./nodes/relations/node.md":Wg,"./nodes/ring_homomorphisms/node.md":Gg,"./nodes/rings_intro/node.md":Ug,"./nodes/sets_functions/node.md":Vg,"./nodes/subgroups/node.md":Kg,"./nodes/submodules/node.md":Qg,"./nodes/sylow/node.md":Zg,"./nodes/torsion_modules/node.md":Yg}),F7=Ud(I7,/\.\/nodes\/([^/]+)\/node\.md$/),L7=Object.assign({"./nodes/binary_ops/questions/01.md":Xg,"./nodes/binary_ops/questions/02.md":Jg,"./nodes/binary_ops/questions/03.md":ey,"./nodes/cosets/questions/01.md":ny,"./nodes/cosets/questions/02.md":ty,"./nodes/cosets/questions/03.md":ry,"./nodes/cyclic_groups/questions/01.md":iy,"./nodes/cyclic_groups/questions/02.md":oy,"./nodes/cyclic_groups/questions/03.md":sy,"./nodes/direct_sums/questions/01.md":ay,"./nodes/direct_sums/questions/02.md":ly,"./nodes/direct_sums/questions/03.md":uy,"./nodes/field_extensions/questions/01.md":cy,"./nodes/field_extensions/questions/02.md":dy,"./nodes/field_extensions/questions/03.md":my,"./nodes/fields_intro/questions/01.md":py,"./nodes/fields_intro/questions/02.md":fy,"./nodes/fields_intro/questions/03.md":hy,"./nodes/finitely_generated/questions/01.md":gy,"./nodes/finitely_generated/questions/02.md":yy,"./nodes/finitely_generated/questions/03.md":vy,"./nodes/free_modules/questions/01.md":xy,"./nodes/free_modules/questions/02.md":$y,"./nodes/free_modules/questions/03.md":by,"./nodes/group_actions/questions/01.md":wy,"./nodes/group_actions/questions/02.md":_y,"./nodes/group_actions/questions/03.md":ky,"./nodes/group_homomorphisms/questions/01.md":zy,"./nodes/group_homomorphisms/questions/02.md":Sy,"./nodes/group_homomorphisms/questions/03.md":jy,"./nodes/groups_intro/questions/01.md":qy,"./nodes/groups_intro/questions/02.md":Ty,"./nodes/groups_intro/questions/03.md":Ay,"./nodes/ideals/questions/01.md":My,"./nodes/ideals/questions/02.md":Py,"./nodes/ideals/questions/03.md":Cy,"./nodes/induction/questions/01.md":Ry,"./nodes/induction/questions/02.md":Dy,"./nodes/induction/questions/03.md":Ey,"./nodes/integral_domains/questions/01.md":By,"./nodes/integral_domains/questions/02.md":Ny,"./nodes/integral_domains/questions/03.md":Iy,"./nodes/iso_theorem/questions/01.md":Fy,"./nodes/iso_theorem/questions/02.md":Ly,"./nodes/iso_theorem/questions/03.md":Oy,"./nodes/jordan_normal_form/questions/01.md":Hy,"./nodes/jordan_normal_form/questions/02.md":Wy,"./nodes/jordan_normal_form/questions/03.md":Gy,"./nodes/module_homs/questions/01.md":Uy,"./nodes/module_homs/questions/02.md":Vy,"./nodes/module_homs/questions/03.md":Ky,"./nodes/modules_intro/questions/01.md":Qy,"./nodes/modules_intro/questions/02.md":Zy,"./nodes/modules_intro/questions/03.md":Yy,"./nodes/normal_subgroups/questions/01.md":Xy,"./nodes/normal_subgroups/questions/02.md":Jy,"./nodes/normal_subgroups/questions/03.md":e7,"./nodes/poly_rings/questions/01.md":n7,"./nodes/poly_rings/questions/02.md":t7,"./nodes/poly_rings/questions/03.md":r7,"./nodes/primary_decomp/questions/01.md":i7,"./nodes/primary_decomp/questions/02.md":o7,"./nodes/primary_decomp/questions/03.md":s7,"./nodes/rational_canonical/questions/01.md":a7,"./nodes/rational_canonical/questions/02.md":l7,"./nodes/rational_canonical/questions/03.md":u7,"./nodes/relations/questions/01.md":c7,"./nodes/relations/questions/02.md":d7,"./nodes/relations/questions/03.md":m7,"./nodes/ring_homomorphisms/questions/01.md":p7,"./nodes/ring_homomorphisms/questions/02.md":f7,"./nodes/ring_homomorphisms/questions/03.md":h7,"./nodes/rings_intro/questions/01.md":g7,"./nodes/rings_intro/questions/02.md":y7,"./nodes/rings_intro/questions/03.md":v7,"./nodes/sets_functions/questions/01.md":x7,"./nodes/sets_functions/questions/02.md":$7,"./nodes/sets_functions/questions/03.md":b7,"./nodes/subgroups/questions/01.md":w7,"./nodes/subgroups/questions/02.md":_7,"./nodes/subgroups/questions/03.md":k7,"./nodes/submodules/questions/01.md":z7,"./nodes/submodules/questions/02.md":S7,"./nodes/submodules/questions/03.md":j7,"./nodes/sylow/questions/01.md":q7,"./nodes/sylow/questions/02.md":T7,"./nodes/sylow/questions/03.md":A7,"./nodes/torsion_modules/questions/01.md":M7,"./nodes/torsion_modules/questions/02.md":P7,"./nodes/torsion_modules/questions/03.md":C7}),O7=Vd(L7,/\.\/nodes\/([^/]+)\/questions\//),H7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:N7,QUESTION_BANK:O7,RAW_EDGES:R7,RAW_NODES:F7,SCOPE_COLORS:E7,SCOPE_LABELS:B7,SECTIONS:D7},Symbol.toStringTag,{value:"Module"})),W7={math_pl:bg,abstract_algebra:H7},G7="math_pl",Qd="wizmat_v1_";function U7(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function V7(o,t){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function _t(o,t){const r=Qd+o,[s,a]=H.useState(()=>{try{const d=localStorage.getItem(r);return d===null?t:V7(d,t)}catch{return t}});H.useEffect(()=>{try{localStorage.setItem(r,U7(s))}catch{}},[r,s]);const u=H.useCallback(d=>{a(h=>typeof d=="function"?d(h):d)},[]);return[s,u]}function K7(){try{Object.keys(localStorage).filter(o=>o.startsWith(Qd)).forEach(o=>localStorage.removeItem(o))}catch{}}const Q7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Znajdź swoje luki w matematyce",en:"Find your gaps in mathematics"},heroSub:{pl:"Odpowiedz na kilkanaście pytań. Pokażemy Ci, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",en:"Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations."},heroStart:{pl:"Sprawdź się",en:"Start assessment"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki ogląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje najniższe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your lowest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicNoResources:{pl:"Brak materiałów do nauki dla tego tematu — wkrótce!",en:"No learning resources for this topic yet — coming soon!"}};function K(o,t="pl"){const r=Q7[o];return r?r[t]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function Ql(o,t){const r={},s={};return o.forEach(a=>{r[a.id]=[],s[a.id]=[]}),t.forEach(([a,u])=>{var d,h;(d=r[u])==null||d.push(a),(h=s[a])==null||h.push(u)}),{prereqs:r,dependents:s}}function Zl(o,t){const r=Object.fromEntries(o.map(d=>[d.id,0])),s=Object.fromEntries(o.map(d=>[d.id,[]]));for(const[d,h]of t)r[h]!==void 0&&r[h]++,s[d]!==void 0&&s[d].push(h);const a=Object.fromEntries(o.map(d=>[d.id,0])),u=o.filter(d=>r[d.id]===0).map(d=>d.id);for(;u.length;){const d=u.shift();for(const h of s[d])a[h]=Math.max(a[h],a[d]+1),--r[h]===0&&u.push(h)}return a}const Z7={id:"spectral",label:"Spectral"};function Y7(o,t,r,s,a=80){const u=o.length,d=Object.fromEntries(o.map((E,V)=>[E.id,V])),h=Array.from({length:u},()=>new Float64Array(u));t.forEach(([E,V])=>{const te=d[E],me=d[V];te==null||me==null||(h[te][me]=1,h[me][te]=1)});const g=h.map(E=>E.reduce((V,te)=>V+te,0)),x=E=>E.map((V,te)=>{let me=0;for(let se=0;se<u;se++)me+=h[te][se]*E[se];return g[te]*E[te]-me}),b=(E,V)=>E.reduce((te,me,se)=>te+me*V[se],0),_=E=>{const V=Math.sqrt(b(E,E))||1;return E.map(te=>te/V)},z=(E,V)=>{let te=[...E];return V.forEach(me=>{const se=b(te,me);te=te.map((ae,ye)=>ae-se*me[ye])}),_(te)},k=(E,V=400)=>{let te=_(Array.from({length:u},()=>Math.random()-.5));te=z(te,E);for(let me=0;me<V;me++){const se=Math.max(...g)+1;te=z(te.map((ae,ye)=>se*ae-x(te)[ye]),E)}return te},D=_(new Array(u).fill(1)),T=k([D]),B=k([D,T]),R=Math.min(...T),I=Math.max(...T),W=Math.min(...B),F=Math.max(...B),O=I-R<1e-6?1:(r-2*a)/(I-R),Z=F-W<1e-6?1:(s-2*a)/(F-W);return o.map((E,V)=>({id:E.id,x:a+(T[V]-R)*O,y:a+(B[V]-W)*Z,vx:0,vy:0}))}const X7=Object.freeze(Object.defineProperty({__proto__:null,apply:Y7,meta:Z7},Symbol.toStringTag,{value:"Module"})),J7={id:"topoRank",label:"Topo Rank"},Y1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function ev(o,t,r,s,a=80){const u=Zl(o,t),d=Math.max(...o.map(b=>u[b.id]??0),0),h={};for(const b of o){const _=u[b.id]??0;(h[_]??(h[_]=[])).push(b)}for(const b of Object.values(h))b.sort((_,z)=>{const k=Y1.indexOf(_.scope),D=Y1.indexOf(z.scope);return(k===-1?999:k)-(D===-1?999:D)});const g=r-2*a,x=s-2*a;return o.map(b=>{const _=u[b.id]??0,z=h[_],k=z.indexOf(b);return{id:b.id,x:a+(k+.5)/z.length*g,y:a+_/Math.max(d,1)*x,vx:0,vy:0}})}const nv=Object.freeze(Object.defineProperty({__proto__:null,apply:ev,meta:J7},Symbol.toStringTag,{value:"Module"})),tv={id:"nPartite",label:"N-Partite Grid"};function rv(o,t,r,s,a=80){const u=Zl(o,t),d=Math.max(...o.map(k=>u[k.id]??0),0),h={};for(const k of o){const D=u[k.id]??0;(h[D]??(h[D]=[])).push(k)}const g={};for(const k of o)g[k.id]=[];for(const[k,D]of t)g[D]&&g[D].push(k);const x=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},_=r-2*a,z=s-2*a;for(let k=0;k<=d;k++){const D=h[k]??[];k===0?D.sort((B,R)=>{const I=x.indexOf(B.scope),W=x.indexOf(R.scope);return(I===-1?999:I)-(W===-1?999:W)}):D.sort((B,R)=>{const I=W=>{const F=g[W.id]??[];return F.length===0?r/2:F.reduce((O,Z)=>{var E;return O+(((E=b[Z])==null?void 0:E.x)??r/2)},0)/F.length};return I(B)-I(R)});const T=a+k/Math.max(d,1)*z;D.forEach((B,R)=>{const I=D.length===1?r/2:a+R/(D.length-1)*_;b[B.id]={x:I,y:T}})}return o.map(k=>{var D,T;return{id:k.id,x:((D=b[k.id])==null?void 0:D.x)??r/2,y:((T=b[k.id])==null?void 0:T.y)??s/2,vx:0,vy:0}})}const Zd=Object.freeze(Object.defineProperty({__proto__:null,apply:rv,meta:tv},Symbol.toStringTag,{value:"Module"})),Yd=[Zd,nv,X7],Xd="nPartite";function iv(o){return Yd.find(t=>t.meta.id===o)??Zd}const ps=1400,Yl=1e3,Po=80,ov=.4,X1=6,sv=.35,J1=.012;function av(o,t){const r=Zl(o,t),s=Math.max(...o.map(u=>r[u.id]??0),0),a=Object.fromEntries(o.map(u=>[u.id,Po+(r[u.id]??0)/Math.max(s,1)*(Yl-2*Po)]));return{ranks:r,rankY:a}}function lv(o,t){const r=Object.fromEntries(o.map((s,a)=>[s.id,a]));return t.map(([s,a])=>[r[s],r[a]]).filter(([s,a])=>s!=null&&a!=null)}function uv(o){return Math.sqrt(ps*Yl/Math.max(o.length,1))*.9}function cv(o,t,r,s){return iv(o).apply(t,r,ps,Yl,Po).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:s[d.id]??d.y,vx:0,vy:0}))}function dv(o,t,r,s,{ranks:a,rankY:u,simEdges:d,idealK:h}){const g=o.length,x=new Float64Array(g);for(let b=0;b<g;b++)for(let _=b+1;_<g;_++){if(a[o[b].id]!==a[o[_].id])continue;const z=o[b].x-o[_].x,k=Math.abs(z)||.1,D=h*h/(k*k),T=z<0?-1:1;x[b]+=T*D,x[_]-=T*D}for(const[b,_]of d){const z=o[_].x-o[b].x;x[b]+=z*J1,x[_]-=z*J1}for(let b=0;b<g;b++)x[b]+=(ps/2-o[b].x)*.003;return o.map((b,_)=>{if(b.id===t)return{...b,x:r,y:s,vx:0,vy:0};let z=(b.vx+x[_])*ov;Math.abs(z)>X1&&(z*=X1/Math.abs(z));const k=u[b.id]??b.y,D=b.y+(k-b.y)*sv;return{...b,vx:z,vy:0,x:Math.max(Po,Math.min(ps-Po,b.x+z)),y:D}})}function vl(o=Xd,t=300,r,s){if(!r||r.length===0)return{};const{ranks:a,rankY:u}=av(r,s??[]),d=lv(r,s??[]),h=uv(r),g={ranks:a,rankY:u,simEdges:d,idealK:h};let x=cv(o,r,s??[],u);for(let b=0;b<t;b++)x=dv(x,null,0,0,g);return Object.fromEntries(x.map(b=>[b.id,{x:b.x,y:b.y}]))}const G={bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",edgeDefault:"#334766"},hn="'JetBrains Mono','SF Mono','Fira Code',monospace",Mi=(o,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${t}`:`1px solid ${G.border}`,background:o?`${t}22`:"transparent",color:o?t:G.textDim,minHeight:32}),qo=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function mv(o){const t=typeof window<"u"&&window.innerWidth<600,[r,s]=H.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[a,u]=H.useState("grab"),d=H.useRef(!1),h=H.useRef({x:0,y:0}),g=H.useRef(null),x=H.useRef(null),b=H.useCallback(F=>{F.preventDefault();const O=F.deltaY>0?.9:1.1;s(Z=>{const E=Math.max(.15,Math.min(5,Z.scale*O)),V=F.clientX,te=F.clientY,me=V-(V-Z.x)/Z.scale*E,se=te-(te-Z.y)/Z.scale*E;return{x:me,y:se,scale:E}})},[]),_=H.useCallback((F,O)=>({x:(F-r.x)/r.scale,y:(O-r.y)/r.scale}),[r]),z=H.useCallback((F,O)=>{d.current=!0,u("grabbing"),h.current={x:F-r.x,y:O-r.y}},[r]),k=H.useCallback(F=>d.current?(s(O=>({...O,x:F.clientX-h.current.x,y:F.clientY-h.current.y})),!0):!1,[]),D=H.useCallback(()=>{d.current=!1,u("grab")},[]),T=(F,O)=>{const Z=F.clientX-O.clientX,E=F.clientY-O.clientY;return Math.sqrt(Z*Z+E*E)},B=(F,O)=>({x:(F.clientX+O.clientX)/2,y:(F.clientY+O.clientY)/2}),R=H.useCallback(F=>{F.touches.length===1?(d.current=!0,s(O=>(h.current={x:F.touches[0].clientX-O.x,y:F.touches[0].clientY-O.y},O)),g.current=null,x.current=null):F.touches.length===2&&(d.current=!1,g.current=T(F.touches[0],F.touches[1]),x.current=B(F.touches[0],F.touches[1]))},[]),I=H.useCallback(F=>{if(F.preventDefault(),F.touches.length===1&&d.current)s(O=>({...O,x:F.touches[0].clientX-h.current.x,y:F.touches[0].clientY-h.current.y}));else if(F.touches.length===2&&g.current!==null){const O=T(F.touches[0],F.touches[1]),Z=B(F.touches[0],F.touches[1]),E=O/g.current;s(V=>{const te=Math.max(.15,Math.min(5,V.scale*E)),me=x.current.x,se=x.current.y,ae=me-(me-V.x)/V.scale*te,ye=se-(se-V.y)/V.scale*te;return{x:ae,y:ye,scale:te}}),g.current=O,x.current=Z}},[]),W=H.useCallback(()=>{d.current=!1,g.current=null,x.current=null},[]);return H.useEffect(()=>{const F=o.current;if(F)return F.addEventListener("wheel",b,{passive:!1}),F.addEventListener("touchstart",R,{passive:!1}),F.addEventListener("touchmove",I,{passive:!1}),F.addEventListener("touchend",W,{passive:!1}),()=>{F.removeEventListener("wheel",b),F.removeEventListener("touchstart",R),F.removeEventListener("touchmove",I),F.removeEventListener("touchend",W)}},[o,b,R,I,W]),{viewTransform:r,setViewTransform:s,toCanvas:_,isPanning:d,panStart:h,startPan:z,cursorStyle:a,setCursorStyle:u,handleMouseMove:k,handleMouseUp:D,handleWheel:b}}function pv(o,t,r,s){const a=H.useRef(null),u=H.useRef({x:0,y:0}),d=H.useCallback((x,b,_)=>{const z=o(b,_),k=t.find(D=>D.id===x);k&&(a.current=x,u.current={x:z.x-k.x,y:z.y-k.y},s==null||s("grabbing"))},[o,t,s]),h=H.useCallback((x,b)=>{if(!a.current)return!1;const _=o(x,b),z=a.current;return r(k=>({...k,[z]:{x:_.x-u.current.x,y:_.y-u.current.y}})),!0},[o,r]),g=H.useCallback(()=>{a.current=null,s==null||s("grab")},[s]);return{draggingNode:a,startNodeDrag:d,handleDragMove:h,handleDragEnd:g}}const ri={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function fv(o,t,r){var u;const s={...t},a=[o];for(;a.length;){const d=a.shift();s[d]!=="known"&&(s[d]="known",(u=r.prereqs[d])==null||u.forEach(h=>{s[h]!=="known"&&a.push(h)}))}return s}function Jd(o,t,r){var u;const s={...t},a=[o];for(;a.length;){const d=a.shift();s[d]!=="unknown"&&(s[d]="unknown",(u=r.dependents[d])==null||u.forEach(h=>{s[h]!=="unknown"&&a.push(h)}))}return s}function Dl(o,t,r,s,a){let u={...s};if(t){for(const d of Object.keys(r))u[d]="known";for(const d of Object.keys(r))u=fv(d,u,a)}else{for(const d of Object.keys(r))u[d]="unknown";for(const d of Object.keys(r))u=Jd(d,u,a)}return u}function hv(o,t,r){return o.filter(s=>t[s.id]!=="known"&&t[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(a=>t[a]==="known")).map(s=>s.id)}function em(o,t,r,s=.5){var a,u,d;try{const h=1-s,g=o.filter(_=>t[_.id]!=="known"&&t[_.id]!=="unknown");if(g.length===0)return null;const x=g.map(_=>{const z=nm(_.id,t,r),k=tm(_.id,t,r),D=s*z+h*k;return{id:_.id,erv:D||0,ancestorsToReveal:z,descendantsToReveal:k}});return x.sort((_,z)=>z.erv-_.erv),((a=x[0])==null?void 0:a.id)||((u=g[0])==null?void 0:u.id)||null}catch(h){return console.error("pickNextQuestion error:",h),((d=o.filter(x=>t[x.id]!=="known"&&t[x.id]!=="unknown")[0])==null?void 0:d.id)||null}}function nm(o,t,r){const s=new Set,a=[...r.prereqs[o]??[]];let u=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&u++;const h=r.prereqs[d]??[];for(const g of h)s.has(g)||a.push(g)}return u}function tm(o,t,r){const s=new Set,a=[...r.dependents[o]??[]];let u=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&u++;const h=r.dependents[d]??[];for(const g of h)s.has(g)||a.push(g)}return u}function gv(o,t,r,s=.5){try{const a=o.filter(x=>t[x.id]!=="known"&&t[x.id]!=="unknown");if(a.length===0)return 0;const u=1-s;let d=0;for(const x of a){const b=nm(x.id,t,r),_=tm(x.id,t,r),z=s*b+u*_;d+=z||0}if(!d||d===0)return a.length;const h=a.length,g=h*h/d;return isNaN(g)?a.length:Math.ceil(g)}catch(a){return console.error("estimateRemainingQuestions error:",a),null}}function yv(o,t,r){const s={...o};for(const[a,u]of Object.entries(t)){const d=s[a]??{alpha:1,beta:1};s[a]={alpha:d.alpha+(r?u:0),beta:d.beta+(r?0:u)}}return s}function vv(o,t){const r={};for(const s of o){const a=t[s]??{alpha:1,beta:1},u=a.alpha+a.beta,d=a.alpha/u;d>ri.deepKnownThreshold&&u>ri.deepMinStrength?r[s]="known":d<ri.deepUnknownThreshold&&u>ri.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function xv(o,t,r){const s=new Set,a=new Set(r.map(d=>d.id)),u=[o];for(;u.length;){const d=u.shift();if(!s.has(d)&&a.has(d)){s.add(d);for(const h of t.prereqs[d]??[])s.has(h)||u.push(h)}}return s}function $v(o,t,r,s,a){var h;const u=o.filter(g=>r[g]==="uncertain");if(u.length===0)return null;const d=u.map(g=>{const x=t[g]??{alpha:1,beta:1},b=x.alpha+x.beta,_=x.alpha/b,z=1-_,k=new Set(o);let D=0;const T=[...s.prereqs[g]??[]],B=new Set;for(;T.length;){const O=T.shift();if(!B.has(O)){B.add(O),k.has(O)&&r[O]==="uncertain"&&D++;for(const Z of s.prereqs[O]??[])B.has(Z)||T.push(Z)}}let R=0;const I=[...s.dependents[g]??[]],W=new Set;for(;I.length;){const O=I.shift();if(!W.has(O)){W.add(O),k.has(O)&&r[O]==="uncertain"&&R++;for(const Z of s.dependents[O]??[])W.has(Z)||I.push(Z)}}const F=_*D+z*R;return{id:g,erv:F,strength:b}});return d.sort((g,x)=>Math.abs(g.erv-x.erv)>.01?x.erv-g.erv:g.strength-x.strength),((h=d[0])==null?void 0:h.id)??u[0]}function bv(o,t,r=0){return!!(o.every(s=>t[s]!=="uncertain")||r>=ri.deepMaxQuestions)}function rm(o,t,r=0,s){const a=(s==null?void 0:s.maxQuestions)??ri.quickMaxQuestions,u=(s==null?void 0:s.completionRatio)??ri.quickCompletionRatio,d=o.length;if(d===0)return!0;const h=o.filter(g=>t[g.id]!=="known"&&t[g.id]!=="unknown").length;return h===0||r>=a||h/d<=u}const El={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function wv(o,t,r){const s=r?`${r}_`:"",[a,u]=_t(`${s}diagMode`,!1),[d,h]=_t(`${s}diagSubMode`,"quick"),[g,x]=_t(`${s}belief`,{}),[b,_]=_t(`${s}targetNode`,null),[z,k]=_t(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[D,T]=_t(`${s}answeredQuestions`,new Set),[B,R]=_t(`${s}betaBeliefs`,{}),[I,W]=_t(`${s}quizNode`,null),F=H.useMemo(()=>{const M=z.correct+z.incorrect;return M===0?.5:(z.correct+.5)/(M+1)},[z]),O=z.questionsAnswered,Z=H.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(t)])].map(Q=>({id:Q})),[o,t]),E=H.useMemo(()=>Object.keys(g).length>0||z.questionsAnswered>0,[g,z]),V=H.useMemo(()=>E?hv(Z,g,o):[],[E,g,o,Z]),te=E?V:[],me=H.useMemo(()=>a&&d==="quick"?em(Z,g,o,F):null,[a,d,g,o,F,Z]),se=H.useMemo(()=>a&&d==="quick"?gv(Z,g,o,F):null,[a,d,g,o,F,Z]),ae=H.useMemo(()=>a&&d==="quick"&&E&&rm(Z,g,O),[a,d,E,g,Z,O]),ye=H.useMemo(()=>!a||d!=="deepdive"||!b?[]:[...xv(b,o,Z)],[a,d,b,o,Z]),xe=H.useMemo(()=>d!=="deepdive"?{}:vv(ye,B),[d,ye,B]),Fe=H.useMemo(()=>!a||d!=="deepdive"||ye.length===0?null:$v(ye,B,xe,o),[a,d,ye,B,xe,o,Z]),Be=H.useMemo(()=>!a||d!=="deepdive"||ye.length===0?!1:bv(ye,xe,O),[a,d,ye,xe,O]),Le=H.useCallback((M,Q)=>a?d==="deepdive"?ye.includes(M)?(xe[M]!=="uncertain"||W(M),!0):!1:g[M]==="unknown"?!0:Q?(x(_e=>Jd(M,_e,o)),W(null),!0):g[M]==="known"?(x(_e=>{const qe={..._e};return delete qe[M],qe}),W(null),!0):(W(M),!0):!1,[a,d,g,o,ye,xe]),ue=H.useCallback((M,Q,_e,qe)=>{if(d==="deepdive"){const Se=(_e==null?void 0:_e.tests)??{[M]:1};R(De=>yv(De,Se,Q))}else{const Se=(_e==null?void 0:_e.tests)??{[M]:1};x(De=>Dl(M,Q,Se,De,o))}typeof qe=="number"&&T(Se=>new Set([...Se,`${M}:${qe}`])),k(Se=>({correct:Se.correct+(Q?1:0),incorrect:Se.incorrect+(Q?0:1),questionsAnswered:Se.questionsAnswered+1})),W(null)},[d,o]),be=H.useCallback(()=>{K7(),u(!1),h("quick"),x({}),R({}),W(null),_(null),k({correct:0,incorrect:0,questionsAnswered:0}),T(new Set)},[]),de=H.useCallback(M=>{h("deepdive"),_(M),R({}),x({}),W(null),k({correct:0,incorrect:0,questionsAnswered:0}),T(new Set),u(!0)},[]);return{diagMode:a,setDiagMode:u,mode:d,setMode:h,quizNode:I,setQuizNode:W,questionsAnswered:O,answeredQuestions:D,setAnsweredQuestions:T,getAnsweredIndices:M=>{const Q=[];return D.forEach(_e=>{const[qe,Se]=_e.split(":");qe===M&&Q.push(parseInt(Se,10))}),Q},handleDiagClick:Le,handleQuizAnswer:ue,resetDiagnostic:be,startDeepDive:de,targetNode:b,belief:g,setBelief:x,frontier:V,visibleFrontier:te,hasStarted:E,nextSuggestedId:me,expectedRemaining:se,pCorrect:F,sessionComplete:ae,betaBeliefs:B,subgraphIds:ye,ddClassification:xe,ddNextNodeId:Fe,ddComplete:Be}}const ed=640;function _v(){const[o,t]=H.useState(()=>typeof window<"u"&&window.innerWidth<ed);return H.useEffect(()=>{const r=window.matchMedia(`(max-width: ${ed-1}px)`),s=a=>t(a.matches);return r.addEventListener("change",s),t(r.matches),()=>r.removeEventListener("change",s)},[]),o}const kv=new Set(["pl","en"]);function nd(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let s="pl",a=r;if(r.length>0&&kv.has(r[0])&&(s=r[0],a=r.slice(1)),a[0]==="node"&&a[1]){const u=decodeURIComponent(a[1]);return a[2]==="resource"&&a[3]!=null?{view:"resource",nodeId:u,resourceIndex:parseInt(a[3],10),lang:s}:{view:"node",nodeId:u,lang:s}}if(a[0]==="diagnostic"){if(a[1]==="deepdive"&&a[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(a[2]),lang:s};if(a[1]==="quick")return{view:"diagnostic",mode:"quick",lang:s}}return{view:"graph",lang:s}}function zv(o){const t=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${t}`;switch(o.view){case"node":return`#/${t}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function Sv(o){const t=H.useRef(o);t.current=o;const r=H.useRef(!1),s=H.useCallback(a=>{const u=zv(a);window.location.hash!==u&&(r.current=!0,window.location.hash=u)},[]);return H.useEffect(()=>{const a=()=>{if(r.current){r.current=!1;return}t.current(nd(window.location.hash))};window.addEventListener("hashchange",a);const u=nd(window.location.hash);return Promise.resolve().then(()=>t.current(u)),()=>window.removeEventListener("hashchange",a)},[]),{setRoute:s}}function td(o){return 6+o.level*2}function jv({edges:o,nodes:t,highlightedIds:r}){const s=H.useMemo(()=>Object.fromEntries(t.map(a=>[a.id,a])),[t]);return y.jsx("g",{children:o.map(([a,u])=>{const d=s[a],h=s[u];if(!d||!h)return null;const g=(r==null?void 0:r.has(a))&&(r==null?void 0:r.has(u)),x=r&&!g,b=h.x-d.x,_=h.y-d.y,z=Math.sqrt(b*b+_*_)||1,k=td(h)+3,D=h.x-b/z*k,T=h.y-_/z*k,B=td(d)+2,R=d.x+b/z*B,I=d.y+_/z*B,W=x?"#151b26":g?"#4a9eff":"#334766",F=g?1.8:1,O=x?.15:g?1:.55,Z=x?"url(#arrow-dim)":g?"url(#arrow-hi)":"url(#arrow-default)";return y.jsx("line",{x1:R,y1:I,x2:D,y2:T,stroke:W,strokeWidth:F,opacity:O,markerEnd:Z},`${a}-${u}`)})})}function qv(o){return 6+o.level*2}function Tv(o){return o<.4?8:o<.65?13:o<1?18:28}function Av({nodes:o,filteredIds:t,highlightedIds:r,selected:s,onSelect:a,onHover:u,lang:d,diagMode:h,belief:g,frontier:x,scale:b,scopeColors:_}){const z=g&&Object.keys(g).length>0;return y.jsx("g",{children:o.map(k=>{const D=qv(k),T=(_==null?void 0:_[k.scope])||"#4a9eff",B=t&&!t.has(k.id),R=r==null?void 0:r.has(k.id),I=s===k.id,W=r&&!R||B,F=d==="pl"?k.labelPl:k.label,O=Tv(b??1);let Z=T,E=W?.15:.9,V=W?.2:.85,te=null,me=2;if(z){const se=g[k.id],ae=x==null?void 0:x.includes(k.id);se==="known"?(Z="#27ae60",te="#2ecc71",E=B?.1:.85,V=B?.15:.9):se==="unknown"?(Z="#c0392b",E=B?.1:.45,te="#e74c3c",V=B?.15:.7):ae?(Z="#f39c12",te="#f1c40f",me=3,E=B?.1:.9,V=B?.15:.9):(E=B?.1:h?.35:.5,V=B?.15:.7)}return y.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>a(k.id===s?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(I||te)&&y.jsx("circle",{cx:k.x,cy:k.y,r:D+(I?5:4),fill:"none",stroke:I?T:te,strokeWidth:I?2:me,opacity:I?.5:.9}),y.jsx("circle",{cx:k.x,cy:k.y,r:D,fill:Z,fillOpacity:E,stroke:(R||I)&&!z?T:"none",strokeWidth:1.5}),y.jsx("text",{x:k.x,y:k.y+D+10,textAnchor:"middle",fontSize:8,fill:"#cdd8e4",opacity:V,style:{pointerEvents:"none",userSelect:"none"},children:F.length>O?F.slice(0,O-1)+"…":F})]},k.id)})})}function Mv({resource:o,lang:t,onClose:r}){const s=H.useRef(null);if(H.useEffect(()=>{const _=z=>{z.key==="Escape"&&r()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[r]),H.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const a=t==="pl"?o.titlePl:o.titleEn,u=o.type==="interactive",d={interactive:K("resourceInteractive",t),video:K("resourceVideo",t),article:K("resourceArticle",t)}[o.type]??o.type,h={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!u)return window.open(o.url,"_blank","noopener"),r(),null;const x=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,b=x+(x.includes("?")?"&":"?")+"lang="+t;return y.jsxs("div",{ref:s,onClick:_=>{_.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[y.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),y.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${h}33`,boxShadow:`0 0 48px ${h}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#161c28f8",borderBottom:`1px solid ${h}22`,flexShrink:0,fontFamily:hn},children:[y.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:h,background:`${h}18`,border:`1px solid ${h}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),y.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:G.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),y.jsx("button",{onClick:()=>window.open(b,"_blank","noopener"),title:K("openInTab",t),style:rd,children:"↗"}),y.jsx("button",{onClick:r,title:K("closeResource",t),style:{...rd,fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("iframe",{src:b,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:a,loading:"eager"})]})]})}const rd={background:"none",border:`1px solid ${G.border}`,borderRadius:5,color:G.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:hn,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};function Pv({nodeId:o,nodes:t,adjacency:r,lang:s,SCOPE_COLORS:a,SCOPE_LABELS:u,SECTIONS:d,belief:h,onClose:g,onNavigate:x}){var te,me;const[b,_]=H.useState(null),z=t.find(se=>se.id===o);if(!z)return null;const k=Object.fromEntries(t.map(se=>[se.id,se])),D=se=>{var ae,ye;return s==="pl"?(ae=k[se])==null?void 0:ae.labelPl:(ye=k[se])==null?void 0:ye.label},T=s==="pl"?z.labelPl:z.label,B=(a==null?void 0:a[z.scope])??"#4a9eff",R=((te=u==null?void 0:u[z.scope])==null?void 0:te[s==="pl"?"pl":"en"])??"",I=((me=d==null?void 0:d[z.section])==null?void 0:me.label)??"",W=r.prereqs[o]??[],F=r.dependents[o]??[],O=z.resources??[],Z=h==null?void 0:h[o],E=b!=null?O[b]??null:null,V={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return y.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:G.bg,fontFamily:hn,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[y.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),y.jsxs("div",{style:{maxWidth:580,width:"100%",margin:"0 auto",padding:"32px 24px 64px"},children:[y.jsxs("button",{onClick:g,style:{padding:"6px 14px",fontSize:12,fontFamily:hn,borderRadius:6,border:`1px solid ${G.border}`,background:"transparent",color:G.textDim,cursor:"pointer",marginBottom:28},children:["← ",K("topicBack",s)]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[y.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:B,opacity:.8,flexShrink:0}}),y.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:G.textPrimary,lineHeight:1.3},children:T})]}),y.jsxs("div",{style:{fontSize:12,color:G.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[I," · ",R," · ",K("level",s)," ",z.level]}),Z&&y.jsx("div",{style:{display:"inline-block",fontSize:12,fontWeight:600,padding:"6px 14px",borderRadius:6,marginBottom:20,background:Z==="known"?"#27ae6012":"#e74c3c12",border:`1px solid ${Z==="known"?"#27ae6040":"#e74c3c40"}`,color:Z==="known"?"#2ecc71":"#ff6b6b"},children:K(Z==="known"?"beliefKnown":"beliefUnknown",s)}),y.jsx(id,{title:K("prerequisites",s),color:"#4a9eff",empty:W.length===0,emptyText:K("noPrereqs",s),children:W.map(se=>{var ae;return y.jsx(od,{label:D(se),color:(a==null?void 0:a[(ae=k[se])==null?void 0:ae.scope])??"#4a9eff",status:h==null?void 0:h[se],onClick:()=>x(se)},se)})}),y.jsx(id,{title:K("enables",s),color:"#3dc9b0",empty:F.length===0,emptyText:K("noDependents",s),children:F.map(se=>{var ae;return y.jsx(od,{label:D(se),color:(a==null?void 0:a[(ae=k[se])==null?void 0:ae.scope])??"#4a9eff",status:h==null?void 0:h[se],onClick:()=>x(se)},se)})}),O.length>0&&y.jsxs("div",{style:{marginTop:28},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:K("learningResources",s)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:O.map((se,ae)=>{const ye=s==="pl"?se.titlePl:se.titleEn,xe=V[se.type]??"#8a9dbe",Fe=se.type==="interactive"?"resourceInteractive":se.type==="video"?"resourceVideo":"resourceArticle";return y.jsxs("button",{onClick:()=>_(ae),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${xe}0a`,border:`1px solid ${xe}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:hn,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Be=>{Be.currentTarget.style.background=`${xe}18`,Be.currentTarget.style.borderColor=`${xe}50`},onMouseLeave:Be=>{Be.currentTarget.style.background=`${xe}0a`,Be.currentTarget.style.borderColor=`${xe}25`},children:[y.jsx("span",{style:{fontSize:18,flexShrink:0},children:se.type==="interactive"?"⬡":se.type==="video"?"▶":"📄"}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:G.textBody,fontWeight:500,lineHeight:1.4},children:ye}),y.jsx("div",{style:{fontSize:10,color:xe,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:K(Fe,s)})]}),y.jsx("span",{style:{fontSize:14,color:G.textFaint},children:"→"})]},ae)})})]}),O.length===0&&y.jsx("div",{style:{marginTop:28,padding:"16px 18px",borderRadius:8,background:"#ffffff04",border:`1px solid ${G.border}`,fontSize:12,color:G.textFaint,lineHeight:1.6},children:K("topicNoResources",s)})]}),E&&y.jsx(Mv,{resource:E,lang:s,onClose:()=>_(null)})]})}function id({title:o,color:t,empty:r,emptyText:s,children:a}){return y.jsxs("div",{style:{marginTop:24},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:o}),r?y.jsx("div",{style:{fontSize:12,color:G.textFaint,fontStyle:"italic"},children:s}):y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:a})]})}function od({label:o,color:t,status:r,onClick:s}){const a=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return y.jsxs("button",{onClick:s,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:hn,fontSize:12,color:G.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:u=>{u.currentTarget.style.background=`${t}1c`,u.currentTarget.style.borderColor=`${t}50`},onMouseLeave:u=>{u.currentTarget.style.background=`${t}0c`,u.currentTarget.style.borderColor=`${t}25`},children:[a&&y.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:a,flexShrink:0}}),o]})}class Un{constructor(t,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=s}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Un(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class et{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new et(r,Un.range(this,t))}}class ie{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+t,a,u,d=r&&r.loc;if(d&&d.start<=d.end){var h=d.lexer.input;a=d.start,u=d.end,a===h.length?s+=" at end of input: ":s+=" at position "+(a+1)+": ";var g=h.slice(a,u).replace(/[^]/g,"$&̲"),x;a>15?x="…"+h.slice(a-15,a):x=h.slice(0,a);var b;u+15<h.length?b=h.slice(u,u+15)+"…":b=h.slice(u),s+=x+g+b}var _=new Error(s);return _.name="ParseError",_.__proto__=ie.prototype,_.position=a,a!=null&&u!=null&&(_.length=u-a),_.rawMessage=t,_}}ie.prototype.__proto__=Error.prototype;var Cv=/([A-Z])/g,Xl=o=>o.replace(Cv,"-$1").toLowerCase(),Rv={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Dv=/[&><"']/g,Mn=o=>String(o).replace(Dv,t=>Rv[t]),Ao=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Ao(o.body[0]):o:o.type==="font"?Ao(o.body):o,Ev=new Set(["mathord","textord","atom"]),Jt=o=>Ev.has(Ao(o).type),Bv=o=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},ds={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,t)=>(t.push(o),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Nv(o){if(o.default)return o.default;var t=o.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Jl{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in ds)if(ds.hasOwnProperty(r)){var s=ds[r];this[r]=t[r]!==void 0?s.processor?s.processor(t[r]):t[r]:Nv(s)}}reportNonstrict(t,r,s){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,s)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new ie("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),s);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,s){var a=this.strict;if(typeof a=="function")try{a=a(t,r,s)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=Bv(t.url);if(r==null)return!1;t.protocol=r}var s=typeof this.trust=="function"?this.trust(t):this.trust;return!!s}}class jr{constructor(t,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=s}sup(){return Ct[Iv[this.id]]}sub(){return Ct[Fv[this.id]]}fracNum(){return Ct[Lv[this.id]]}fracDen(){return Ct[Ov[this.id]]}cramp(){return Ct[Hv[this.id]]}text(){return Ct[Wv[this.id]]}isTight(){return this.size>=2}}var eu=0,fs=1,Ci=2,Yt=3,Co=4,dt=5,Ri=6,En=7,Ct=[new jr(eu,0,!1),new jr(fs,0,!0),new jr(Ci,1,!1),new jr(Yt,1,!0),new jr(Co,2,!1),new jr(dt,2,!0),new jr(Ri,3,!1),new jr(En,3,!0)],Iv=[Co,dt,Co,dt,Ri,En,Ri,En],Fv=[dt,dt,dt,dt,En,En,En,En],Lv=[Ci,Yt,Co,dt,Ri,En,Ri,En],Ov=[Yt,Yt,dt,dt,En,En,En,En],Hv=[fs,fs,Yt,Yt,dt,dt,En,En],Wv=[eu,fs,Ci,Yt,Ci,Yt,Ci,Yt],Re={DISPLAY:Ct[eu],TEXT:Ct[Ci],SCRIPT:Ct[Co],SCRIPTSCRIPT:Ct[Ri]},Bl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Gv(o){for(var t=0;t<Bl.length;t++)for(var r=Bl[t],s=0;s<r.blocks.length;s++){var a=r.blocks[s];if(o>=a[0]&&o<=a[1])return r.name}return null}var ms=[];Bl.forEach(o=>o.blocks.forEach(t=>ms.push(...t)));function im(o){for(var t=0;t<ms.length;t+=2)if(o>=ms[t]&&o<=ms[t+1])return!0;return!1}var Pi=80,Uv=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Vv=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Kv=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Qv=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},Zv=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},Yv=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},Xv=function(t,r,s){var a=s-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},Jv=function(t,r,s){r=1e3*r;var a="";switch(t){case"sqrtMain":a=Uv(r,Pi);break;case"sqrtSize1":a=Vv(r,Pi);break;case"sqrtSize2":a=Kv(r,Pi);break;case"sqrtSize3":a=Qv(r,Pi);break;case"sqrtSize4":a=Zv(r,Pi);break;case"sqrtTall":a=Xv(r,Pi,s)}return a},e8=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},sd={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},n8=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Eo{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Rt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},ns={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},ad={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function t8(o,t){Rt[o]=t}function nu(o,t,r){if(!Rt[t])throw new Error("Font metrics not found for font: "+t+".");var s=o.charCodeAt(0),a=Rt[t][s];if(!a&&o[0]in ad&&(s=ad[o[0]].charCodeAt(0),a=Rt[t][s]),!a&&r==="text"&&im(s)&&(a=Rt[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var xl={};function r8(o){var t;if(o>=5?t=0:o>=3?t=1:t=2,!xl[t]){var r=xl[t]={cssEmPerMu:ns.quad[t]/18};for(var s in ns)ns.hasOwnProperty(s)&&(r[s]=ns[s][t])}return xl[t]}var i8=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],ld=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],ud=function(t,r){return r.size<2?t:i8[t-1][r.size-1]};class Zt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Zt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=ld[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in t)t.hasOwnProperty(s)&&(r[s]=t[s]);return new Zt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:ud(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:ld[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=ud(Zt.BASESIZE,t);return this.size===r&&this.textSize===Zt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Zt.BASESIZE?["sizing","reset-size"+this.size,"size"+Zt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=r8(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Zt.BASESIZE=6;var Nl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},o8={ex:!0,em:!0,mu:!0},om=function(t){return typeof t!="string"&&(t=t.unit),t in Nl||t in o8||t==="ex"},ln=function(t,r){var s;if(t.unit in Nl)s=Nl[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")s=a.fontMetrics().xHeight;else if(t.unit==="em")s=a.fontMetrics().quad;else throw new ie("Invalid unit: '"+t.unit+"'");a!==r&&(s*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*s,r.maxSize)},ce=function(t){return+t.toFixed(4)+"em"},Ar=function(t){return t.filter(r=>r).join(" ")},sm=function(t,r,s){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},am=function(t){var r=document.createElement(t);r.className=Ar(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},s8=/[\s"'>/=\x00-\x1f]/,lm=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Mn(Ar(this.classes))+'"');var s="";for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=Xl(a)+":"+this.style[a]+";");s&&(r+=' style="'+Mn(s)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(s8.test(u))throw new ie("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Mn(this.attributes[u])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+t+">",r};class Bo{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,sm.call(this,t,s,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return am.call(this,"span")}toMarkup(){return lm.call(this,"span")}}class tu{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,sm.call(this,r,a),this.children=s||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return am.call(this,"a")}toMarkup(){return lm.call(this,"a")}}class a8{constructor(t,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=s}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+Mn(this.src)+'"'+(' alt="'+Mn(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=Xl(s)+":"+this.style[s]+";");return r&&(t+=' style="'+Mn(r)+'"'),t+="'/>",t}}var l8={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class mt{constructor(t,r,s,a,u,d,h,g){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=s||0,this.italic=a||0,this.skew=u||0,this.width=d||0,this.classes=h||[],this.style=g||{},this.maxFontSize=0;var x=Gv(this.text.charCodeAt(0));x&&this.classes.push(x+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=l8[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=ce(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Ar(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Mn(Ar(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=Xl(a)+":"+this.style[a]+";");s&&(t=!0,r+=' style="'+Mn(s)+'"');var u=Mn(this.text);return t?(r+=">",r+=u,r+="</span>",r):u}}class Xt{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Mn(this.attributes[r])+'"');t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</svg>",t}}class Mr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",sd[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Mn(this.alternate)+'"/>':'<path d="'+Mn(sd[this.pathName])+'"/>'}}class Il{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Mn(this.attributes[r])+'"');return t+="/>",t}}function cd(o){if(o instanceof mt)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function u8(o){if(o instanceof Bo)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var c8={bin:1,close:1,inner:1,open:1,punct:1,rel:1},d8={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Xe={math:{},text:{}};function m(o,t,r,s,a,u){Xe[o][a]={font:t,group:r,replace:s},u&&s&&(Xe[o][s]=Xe[o][a])}var f="math",J="text",v="main",j="ams",rn="accent-token",ge="bin",Bn="close",Bi="inner",Me="mathord",yn="op-token",nt="open",xs="punct",q="rel",er="spacing",P="textord";m(f,v,q,"≡","\\equiv",!0);m(f,v,q,"≺","\\prec",!0);m(f,v,q,"≻","\\succ",!0);m(f,v,q,"∼","\\sim",!0);m(f,v,q,"⊥","\\perp");m(f,v,q,"⪯","\\preceq",!0);m(f,v,q,"⪰","\\succeq",!0);m(f,v,q,"≃","\\simeq",!0);m(f,v,q,"∣","\\mid",!0);m(f,v,q,"≪","\\ll",!0);m(f,v,q,"≫","\\gg",!0);m(f,v,q,"≍","\\asymp",!0);m(f,v,q,"∥","\\parallel");m(f,v,q,"⋈","\\bowtie",!0);m(f,v,q,"⌣","\\smile",!0);m(f,v,q,"⊑","\\sqsubseteq",!0);m(f,v,q,"⊒","\\sqsupseteq",!0);m(f,v,q,"≐","\\doteq",!0);m(f,v,q,"⌢","\\frown",!0);m(f,v,q,"∋","\\ni",!0);m(f,v,q,"∝","\\propto",!0);m(f,v,q,"⊢","\\vdash",!0);m(f,v,q,"⊣","\\dashv",!0);m(f,v,q,"∋","\\owns");m(f,v,xs,".","\\ldotp");m(f,v,xs,"⋅","\\cdotp");m(f,v,P,"#","\\#");m(J,v,P,"#","\\#");m(f,v,P,"&","\\&");m(J,v,P,"&","\\&");m(f,v,P,"ℵ","\\aleph",!0);m(f,v,P,"∀","\\forall",!0);m(f,v,P,"ℏ","\\hbar",!0);m(f,v,P,"∃","\\exists",!0);m(f,v,P,"∇","\\nabla",!0);m(f,v,P,"♭","\\flat",!0);m(f,v,P,"ℓ","\\ell",!0);m(f,v,P,"♮","\\natural",!0);m(f,v,P,"♣","\\clubsuit",!0);m(f,v,P,"℘","\\wp",!0);m(f,v,P,"♯","\\sharp",!0);m(f,v,P,"♢","\\diamondsuit",!0);m(f,v,P,"ℜ","\\Re",!0);m(f,v,P,"♡","\\heartsuit",!0);m(f,v,P,"ℑ","\\Im",!0);m(f,v,P,"♠","\\spadesuit",!0);m(f,v,P,"§","\\S",!0);m(J,v,P,"§","\\S");m(f,v,P,"¶","\\P",!0);m(J,v,P,"¶","\\P");m(f,v,P,"†","\\dag");m(J,v,P,"†","\\dag");m(J,v,P,"†","\\textdagger");m(f,v,P,"‡","\\ddag");m(J,v,P,"‡","\\ddag");m(J,v,P,"‡","\\textdaggerdbl");m(f,v,Bn,"⎱","\\rmoustache",!0);m(f,v,nt,"⎰","\\lmoustache",!0);m(f,v,Bn,"⟯","\\rgroup",!0);m(f,v,nt,"⟮","\\lgroup",!0);m(f,v,ge,"∓","\\mp",!0);m(f,v,ge,"⊖","\\ominus",!0);m(f,v,ge,"⊎","\\uplus",!0);m(f,v,ge,"⊓","\\sqcap",!0);m(f,v,ge,"∗","\\ast");m(f,v,ge,"⊔","\\sqcup",!0);m(f,v,ge,"◯","\\bigcirc",!0);m(f,v,ge,"∙","\\bullet",!0);m(f,v,ge,"‡","\\ddagger");m(f,v,ge,"≀","\\wr",!0);m(f,v,ge,"⨿","\\amalg");m(f,v,ge,"&","\\And");m(f,v,q,"⟵","\\longleftarrow",!0);m(f,v,q,"⇐","\\Leftarrow",!0);m(f,v,q,"⟸","\\Longleftarrow",!0);m(f,v,q,"⟶","\\longrightarrow",!0);m(f,v,q,"⇒","\\Rightarrow",!0);m(f,v,q,"⟹","\\Longrightarrow",!0);m(f,v,q,"↔","\\leftrightarrow",!0);m(f,v,q,"⟷","\\longleftrightarrow",!0);m(f,v,q,"⇔","\\Leftrightarrow",!0);m(f,v,q,"⟺","\\Longleftrightarrow",!0);m(f,v,q,"↦","\\mapsto",!0);m(f,v,q,"⟼","\\longmapsto",!0);m(f,v,q,"↗","\\nearrow",!0);m(f,v,q,"↩","\\hookleftarrow",!0);m(f,v,q,"↪","\\hookrightarrow",!0);m(f,v,q,"↘","\\searrow",!0);m(f,v,q,"↼","\\leftharpoonup",!0);m(f,v,q,"⇀","\\rightharpoonup",!0);m(f,v,q,"↙","\\swarrow",!0);m(f,v,q,"↽","\\leftharpoondown",!0);m(f,v,q,"⇁","\\rightharpoondown",!0);m(f,v,q,"↖","\\nwarrow",!0);m(f,v,q,"⇌","\\rightleftharpoons",!0);m(f,j,q,"≮","\\nless",!0);m(f,j,q,"","\\@nleqslant");m(f,j,q,"","\\@nleqq");m(f,j,q,"⪇","\\lneq",!0);m(f,j,q,"≨","\\lneqq",!0);m(f,j,q,"","\\@lvertneqq");m(f,j,q,"⋦","\\lnsim",!0);m(f,j,q,"⪉","\\lnapprox",!0);m(f,j,q,"⊀","\\nprec",!0);m(f,j,q,"⋠","\\npreceq",!0);m(f,j,q,"⋨","\\precnsim",!0);m(f,j,q,"⪹","\\precnapprox",!0);m(f,j,q,"≁","\\nsim",!0);m(f,j,q,"","\\@nshortmid");m(f,j,q,"∤","\\nmid",!0);m(f,j,q,"⊬","\\nvdash",!0);m(f,j,q,"⊭","\\nvDash",!0);m(f,j,q,"⋪","\\ntriangleleft");m(f,j,q,"⋬","\\ntrianglelefteq",!0);m(f,j,q,"⊊","\\subsetneq",!0);m(f,j,q,"","\\@varsubsetneq");m(f,j,q,"⫋","\\subsetneqq",!0);m(f,j,q,"","\\@varsubsetneqq");m(f,j,q,"≯","\\ngtr",!0);m(f,j,q,"","\\@ngeqslant");m(f,j,q,"","\\@ngeqq");m(f,j,q,"⪈","\\gneq",!0);m(f,j,q,"≩","\\gneqq",!0);m(f,j,q,"","\\@gvertneqq");m(f,j,q,"⋧","\\gnsim",!0);m(f,j,q,"⪊","\\gnapprox",!0);m(f,j,q,"⊁","\\nsucc",!0);m(f,j,q,"⋡","\\nsucceq",!0);m(f,j,q,"⋩","\\succnsim",!0);m(f,j,q,"⪺","\\succnapprox",!0);m(f,j,q,"≆","\\ncong",!0);m(f,j,q,"","\\@nshortparallel");m(f,j,q,"∦","\\nparallel",!0);m(f,j,q,"⊯","\\nVDash",!0);m(f,j,q,"⋫","\\ntriangleright");m(f,j,q,"⋭","\\ntrianglerighteq",!0);m(f,j,q,"","\\@nsupseteqq");m(f,j,q,"⊋","\\supsetneq",!0);m(f,j,q,"","\\@varsupsetneq");m(f,j,q,"⫌","\\supsetneqq",!0);m(f,j,q,"","\\@varsupsetneqq");m(f,j,q,"⊮","\\nVdash",!0);m(f,j,q,"⪵","\\precneqq",!0);m(f,j,q,"⪶","\\succneqq",!0);m(f,j,q,"","\\@nsubseteqq");m(f,j,ge,"⊴","\\unlhd");m(f,j,ge,"⊵","\\unrhd");m(f,j,q,"↚","\\nleftarrow",!0);m(f,j,q,"↛","\\nrightarrow",!0);m(f,j,q,"⇍","\\nLeftarrow",!0);m(f,j,q,"⇏","\\nRightarrow",!0);m(f,j,q,"↮","\\nleftrightarrow",!0);m(f,j,q,"⇎","\\nLeftrightarrow",!0);m(f,j,q,"△","\\vartriangle");m(f,j,P,"ℏ","\\hslash");m(f,j,P,"▽","\\triangledown");m(f,j,P,"◊","\\lozenge");m(f,j,P,"Ⓢ","\\circledS");m(f,j,P,"®","\\circledR");m(J,j,P,"®","\\circledR");m(f,j,P,"∡","\\measuredangle",!0);m(f,j,P,"∄","\\nexists");m(f,j,P,"℧","\\mho");m(f,j,P,"Ⅎ","\\Finv",!0);m(f,j,P,"⅁","\\Game",!0);m(f,j,P,"‵","\\backprime");m(f,j,P,"▲","\\blacktriangle");m(f,j,P,"▼","\\blacktriangledown");m(f,j,P,"■","\\blacksquare");m(f,j,P,"⧫","\\blacklozenge");m(f,j,P,"★","\\bigstar");m(f,j,P,"∢","\\sphericalangle",!0);m(f,j,P,"∁","\\complement",!0);m(f,j,P,"ð","\\eth",!0);m(J,v,P,"ð","ð");m(f,j,P,"╱","\\diagup");m(f,j,P,"╲","\\diagdown");m(f,j,P,"□","\\square");m(f,j,P,"□","\\Box");m(f,j,P,"◊","\\Diamond");m(f,j,P,"¥","\\yen",!0);m(J,j,P,"¥","\\yen",!0);m(f,j,P,"✓","\\checkmark",!0);m(J,j,P,"✓","\\checkmark");m(f,j,P,"ℶ","\\beth",!0);m(f,j,P,"ℸ","\\daleth",!0);m(f,j,P,"ℷ","\\gimel",!0);m(f,j,P,"ϝ","\\digamma",!0);m(f,j,P,"ϰ","\\varkappa");m(f,j,nt,"┌","\\@ulcorner",!0);m(f,j,Bn,"┐","\\@urcorner",!0);m(f,j,nt,"└","\\@llcorner",!0);m(f,j,Bn,"┘","\\@lrcorner",!0);m(f,j,q,"≦","\\leqq",!0);m(f,j,q,"⩽","\\leqslant",!0);m(f,j,q,"⪕","\\eqslantless",!0);m(f,j,q,"≲","\\lesssim",!0);m(f,j,q,"⪅","\\lessapprox",!0);m(f,j,q,"≊","\\approxeq",!0);m(f,j,ge,"⋖","\\lessdot");m(f,j,q,"⋘","\\lll",!0);m(f,j,q,"≶","\\lessgtr",!0);m(f,j,q,"⋚","\\lesseqgtr",!0);m(f,j,q,"⪋","\\lesseqqgtr",!0);m(f,j,q,"≑","\\doteqdot");m(f,j,q,"≓","\\risingdotseq",!0);m(f,j,q,"≒","\\fallingdotseq",!0);m(f,j,q,"∽","\\backsim",!0);m(f,j,q,"⋍","\\backsimeq",!0);m(f,j,q,"⫅","\\subseteqq",!0);m(f,j,q,"⋐","\\Subset",!0);m(f,j,q,"⊏","\\sqsubset",!0);m(f,j,q,"≼","\\preccurlyeq",!0);m(f,j,q,"⋞","\\curlyeqprec",!0);m(f,j,q,"≾","\\precsim",!0);m(f,j,q,"⪷","\\precapprox",!0);m(f,j,q,"⊲","\\vartriangleleft");m(f,j,q,"⊴","\\trianglelefteq");m(f,j,q,"⊨","\\vDash",!0);m(f,j,q,"⊪","\\Vvdash",!0);m(f,j,q,"⌣","\\smallsmile");m(f,j,q,"⌢","\\smallfrown");m(f,j,q,"≏","\\bumpeq",!0);m(f,j,q,"≎","\\Bumpeq",!0);m(f,j,q,"≧","\\geqq",!0);m(f,j,q,"⩾","\\geqslant",!0);m(f,j,q,"⪖","\\eqslantgtr",!0);m(f,j,q,"≳","\\gtrsim",!0);m(f,j,q,"⪆","\\gtrapprox",!0);m(f,j,ge,"⋗","\\gtrdot");m(f,j,q,"⋙","\\ggg",!0);m(f,j,q,"≷","\\gtrless",!0);m(f,j,q,"⋛","\\gtreqless",!0);m(f,j,q,"⪌","\\gtreqqless",!0);m(f,j,q,"≖","\\eqcirc",!0);m(f,j,q,"≗","\\circeq",!0);m(f,j,q,"≜","\\triangleq",!0);m(f,j,q,"∼","\\thicksim");m(f,j,q,"≈","\\thickapprox");m(f,j,q,"⫆","\\supseteqq",!0);m(f,j,q,"⋑","\\Supset",!0);m(f,j,q,"⊐","\\sqsupset",!0);m(f,j,q,"≽","\\succcurlyeq",!0);m(f,j,q,"⋟","\\curlyeqsucc",!0);m(f,j,q,"≿","\\succsim",!0);m(f,j,q,"⪸","\\succapprox",!0);m(f,j,q,"⊳","\\vartriangleright");m(f,j,q,"⊵","\\trianglerighteq");m(f,j,q,"⊩","\\Vdash",!0);m(f,j,q,"∣","\\shortmid");m(f,j,q,"∥","\\shortparallel");m(f,j,q,"≬","\\between",!0);m(f,j,q,"⋔","\\pitchfork",!0);m(f,j,q,"∝","\\varpropto");m(f,j,q,"◀","\\blacktriangleleft");m(f,j,q,"∴","\\therefore",!0);m(f,j,q,"∍","\\backepsilon");m(f,j,q,"▶","\\blacktriangleright");m(f,j,q,"∵","\\because",!0);m(f,j,q,"⋘","\\llless");m(f,j,q,"⋙","\\gggtr");m(f,j,ge,"⊲","\\lhd");m(f,j,ge,"⊳","\\rhd");m(f,j,q,"≂","\\eqsim",!0);m(f,v,q,"⋈","\\Join");m(f,j,q,"≑","\\Doteq",!0);m(f,j,ge,"∔","\\dotplus",!0);m(f,j,ge,"∖","\\smallsetminus");m(f,j,ge,"⋒","\\Cap",!0);m(f,j,ge,"⋓","\\Cup",!0);m(f,j,ge,"⩞","\\doublebarwedge",!0);m(f,j,ge,"⊟","\\boxminus",!0);m(f,j,ge,"⊞","\\boxplus",!0);m(f,j,ge,"⋇","\\divideontimes",!0);m(f,j,ge,"⋉","\\ltimes",!0);m(f,j,ge,"⋊","\\rtimes",!0);m(f,j,ge,"⋋","\\leftthreetimes",!0);m(f,j,ge,"⋌","\\rightthreetimes",!0);m(f,j,ge,"⋏","\\curlywedge",!0);m(f,j,ge,"⋎","\\curlyvee",!0);m(f,j,ge,"⊝","\\circleddash",!0);m(f,j,ge,"⊛","\\circledast",!0);m(f,j,ge,"⋅","\\centerdot");m(f,j,ge,"⊺","\\intercal",!0);m(f,j,ge,"⋒","\\doublecap");m(f,j,ge,"⋓","\\doublecup");m(f,j,ge,"⊠","\\boxtimes",!0);m(f,j,q,"⇢","\\dashrightarrow",!0);m(f,j,q,"⇠","\\dashleftarrow",!0);m(f,j,q,"⇇","\\leftleftarrows",!0);m(f,j,q,"⇆","\\leftrightarrows",!0);m(f,j,q,"⇚","\\Lleftarrow",!0);m(f,j,q,"↞","\\twoheadleftarrow",!0);m(f,j,q,"↢","\\leftarrowtail",!0);m(f,j,q,"↫","\\looparrowleft",!0);m(f,j,q,"⇋","\\leftrightharpoons",!0);m(f,j,q,"↶","\\curvearrowleft",!0);m(f,j,q,"↺","\\circlearrowleft",!0);m(f,j,q,"↰","\\Lsh",!0);m(f,j,q,"⇈","\\upuparrows",!0);m(f,j,q,"↿","\\upharpoonleft",!0);m(f,j,q,"⇃","\\downharpoonleft",!0);m(f,v,q,"⊶","\\origof",!0);m(f,v,q,"⊷","\\imageof",!0);m(f,j,q,"⊸","\\multimap",!0);m(f,j,q,"↭","\\leftrightsquigarrow",!0);m(f,j,q,"⇉","\\rightrightarrows",!0);m(f,j,q,"⇄","\\rightleftarrows",!0);m(f,j,q,"↠","\\twoheadrightarrow",!0);m(f,j,q,"↣","\\rightarrowtail",!0);m(f,j,q,"↬","\\looparrowright",!0);m(f,j,q,"↷","\\curvearrowright",!0);m(f,j,q,"↻","\\circlearrowright",!0);m(f,j,q,"↱","\\Rsh",!0);m(f,j,q,"⇊","\\downdownarrows",!0);m(f,j,q,"↾","\\upharpoonright",!0);m(f,j,q,"⇂","\\downharpoonright",!0);m(f,j,q,"⇝","\\rightsquigarrow",!0);m(f,j,q,"⇝","\\leadsto");m(f,j,q,"⇛","\\Rrightarrow",!0);m(f,j,q,"↾","\\restriction");m(f,v,P,"‘","`");m(f,v,P,"$","\\$");m(J,v,P,"$","\\$");m(J,v,P,"$","\\textdollar");m(f,v,P,"%","\\%");m(J,v,P,"%","\\%");m(f,v,P,"_","\\_");m(J,v,P,"_","\\_");m(J,v,P,"_","\\textunderscore");m(f,v,P,"∠","\\angle",!0);m(f,v,P,"∞","\\infty",!0);m(f,v,P,"′","\\prime");m(f,v,P,"△","\\triangle");m(f,v,P,"Γ","\\Gamma",!0);m(f,v,P,"Δ","\\Delta",!0);m(f,v,P,"Θ","\\Theta",!0);m(f,v,P,"Λ","\\Lambda",!0);m(f,v,P,"Ξ","\\Xi",!0);m(f,v,P,"Π","\\Pi",!0);m(f,v,P,"Σ","\\Sigma",!0);m(f,v,P,"Υ","\\Upsilon",!0);m(f,v,P,"Φ","\\Phi",!0);m(f,v,P,"Ψ","\\Psi",!0);m(f,v,P,"Ω","\\Omega",!0);m(f,v,P,"A","Α");m(f,v,P,"B","Β");m(f,v,P,"E","Ε");m(f,v,P,"Z","Ζ");m(f,v,P,"H","Η");m(f,v,P,"I","Ι");m(f,v,P,"K","Κ");m(f,v,P,"M","Μ");m(f,v,P,"N","Ν");m(f,v,P,"O","Ο");m(f,v,P,"P","Ρ");m(f,v,P,"T","Τ");m(f,v,P,"X","Χ");m(f,v,P,"¬","\\neg",!0);m(f,v,P,"¬","\\lnot");m(f,v,P,"⊤","\\top");m(f,v,P,"⊥","\\bot");m(f,v,P,"∅","\\emptyset");m(f,j,P,"∅","\\varnothing");m(f,v,Me,"α","\\alpha",!0);m(f,v,Me,"β","\\beta",!0);m(f,v,Me,"γ","\\gamma",!0);m(f,v,Me,"δ","\\delta",!0);m(f,v,Me,"ϵ","\\epsilon",!0);m(f,v,Me,"ζ","\\zeta",!0);m(f,v,Me,"η","\\eta",!0);m(f,v,Me,"θ","\\theta",!0);m(f,v,Me,"ι","\\iota",!0);m(f,v,Me,"κ","\\kappa",!0);m(f,v,Me,"λ","\\lambda",!0);m(f,v,Me,"μ","\\mu",!0);m(f,v,Me,"ν","\\nu",!0);m(f,v,Me,"ξ","\\xi",!0);m(f,v,Me,"ο","\\omicron",!0);m(f,v,Me,"π","\\pi",!0);m(f,v,Me,"ρ","\\rho",!0);m(f,v,Me,"σ","\\sigma",!0);m(f,v,Me,"τ","\\tau",!0);m(f,v,Me,"υ","\\upsilon",!0);m(f,v,Me,"ϕ","\\phi",!0);m(f,v,Me,"χ","\\chi",!0);m(f,v,Me,"ψ","\\psi",!0);m(f,v,Me,"ω","\\omega",!0);m(f,v,Me,"ε","\\varepsilon",!0);m(f,v,Me,"ϑ","\\vartheta",!0);m(f,v,Me,"ϖ","\\varpi",!0);m(f,v,Me,"ϱ","\\varrho",!0);m(f,v,Me,"ς","\\varsigma",!0);m(f,v,Me,"φ","\\varphi",!0);m(f,v,ge,"∗","*",!0);m(f,v,ge,"+","+");m(f,v,ge,"−","-",!0);m(f,v,ge,"⋅","\\cdot",!0);m(f,v,ge,"∘","\\circ",!0);m(f,v,ge,"÷","\\div",!0);m(f,v,ge,"±","\\pm",!0);m(f,v,ge,"×","\\times",!0);m(f,v,ge,"∩","\\cap",!0);m(f,v,ge,"∪","\\cup",!0);m(f,v,ge,"∖","\\setminus",!0);m(f,v,ge,"∧","\\land");m(f,v,ge,"∨","\\lor");m(f,v,ge,"∧","\\wedge",!0);m(f,v,ge,"∨","\\vee",!0);m(f,v,P,"√","\\surd");m(f,v,nt,"⟨","\\langle",!0);m(f,v,nt,"∣","\\lvert");m(f,v,nt,"∥","\\lVert");m(f,v,Bn,"?","?");m(f,v,Bn,"!","!");m(f,v,Bn,"⟩","\\rangle",!0);m(f,v,Bn,"∣","\\rvert");m(f,v,Bn,"∥","\\rVert");m(f,v,q,"=","=");m(f,v,q,":",":");m(f,v,q,"≈","\\approx",!0);m(f,v,q,"≅","\\cong",!0);m(f,v,q,"≥","\\ge");m(f,v,q,"≥","\\geq",!0);m(f,v,q,"←","\\gets");m(f,v,q,">","\\gt",!0);m(f,v,q,"∈","\\in",!0);m(f,v,q,"","\\@not");m(f,v,q,"⊂","\\subset",!0);m(f,v,q,"⊃","\\supset",!0);m(f,v,q,"⊆","\\subseteq",!0);m(f,v,q,"⊇","\\supseteq",!0);m(f,j,q,"⊈","\\nsubseteq",!0);m(f,j,q,"⊉","\\nsupseteq",!0);m(f,v,q,"⊨","\\models");m(f,v,q,"←","\\leftarrow",!0);m(f,v,q,"≤","\\le");m(f,v,q,"≤","\\leq",!0);m(f,v,q,"<","\\lt",!0);m(f,v,q,"→","\\rightarrow",!0);m(f,v,q,"→","\\to");m(f,j,q,"≱","\\ngeq",!0);m(f,j,q,"≰","\\nleq",!0);m(f,v,er," ","\\ ");m(f,v,er," ","\\space");m(f,v,er," ","\\nobreakspace");m(J,v,er," ","\\ ");m(J,v,er," "," ");m(J,v,er," ","\\space");m(J,v,er," ","\\nobreakspace");m(f,v,er,null,"\\nobreak");m(f,v,er,null,"\\allowbreak");m(f,v,xs,",",",");m(f,v,xs,";",";");m(f,j,ge,"⊼","\\barwedge",!0);m(f,j,ge,"⊻","\\veebar",!0);m(f,v,ge,"⊙","\\odot",!0);m(f,v,ge,"⊕","\\oplus",!0);m(f,v,ge,"⊗","\\otimes",!0);m(f,v,P,"∂","\\partial",!0);m(f,v,ge,"⊘","\\oslash",!0);m(f,j,ge,"⊚","\\circledcirc",!0);m(f,j,ge,"⊡","\\boxdot",!0);m(f,v,ge,"△","\\bigtriangleup");m(f,v,ge,"▽","\\bigtriangledown");m(f,v,ge,"†","\\dagger");m(f,v,ge,"⋄","\\diamond");m(f,v,ge,"⋆","\\star");m(f,v,ge,"◃","\\triangleleft");m(f,v,ge,"▹","\\triangleright");m(f,v,nt,"{","\\{");m(J,v,P,"{","\\{");m(J,v,P,"{","\\textbraceleft");m(f,v,Bn,"}","\\}");m(J,v,P,"}","\\}");m(J,v,P,"}","\\textbraceright");m(f,v,nt,"{","\\lbrace");m(f,v,Bn,"}","\\rbrace");m(f,v,nt,"[","\\lbrack",!0);m(J,v,P,"[","\\lbrack",!0);m(f,v,Bn,"]","\\rbrack",!0);m(J,v,P,"]","\\rbrack",!0);m(f,v,nt,"(","\\lparen",!0);m(f,v,Bn,")","\\rparen",!0);m(J,v,P,"<","\\textless",!0);m(J,v,P,">","\\textgreater",!0);m(f,v,nt,"⌊","\\lfloor",!0);m(f,v,Bn,"⌋","\\rfloor",!0);m(f,v,nt,"⌈","\\lceil",!0);m(f,v,Bn,"⌉","\\rceil",!0);m(f,v,P,"\\","\\backslash");m(f,v,P,"∣","|");m(f,v,P,"∣","\\vert");m(J,v,P,"|","\\textbar",!0);m(f,v,P,"∥","\\|");m(f,v,P,"∥","\\Vert");m(J,v,P,"∥","\\textbardbl");m(J,v,P,"~","\\textasciitilde");m(J,v,P,"\\","\\textbackslash");m(J,v,P,"^","\\textasciicircum");m(f,v,q,"↑","\\uparrow",!0);m(f,v,q,"⇑","\\Uparrow",!0);m(f,v,q,"↓","\\downarrow",!0);m(f,v,q,"⇓","\\Downarrow",!0);m(f,v,q,"↕","\\updownarrow",!0);m(f,v,q,"⇕","\\Updownarrow",!0);m(f,v,yn,"∐","\\coprod");m(f,v,yn,"⋁","\\bigvee");m(f,v,yn,"⋀","\\bigwedge");m(f,v,yn,"⨄","\\biguplus");m(f,v,yn,"⋂","\\bigcap");m(f,v,yn,"⋃","\\bigcup");m(f,v,yn,"∫","\\int");m(f,v,yn,"∫","\\intop");m(f,v,yn,"∬","\\iint");m(f,v,yn,"∭","\\iiint");m(f,v,yn,"∏","\\prod");m(f,v,yn,"∑","\\sum");m(f,v,yn,"⨂","\\bigotimes");m(f,v,yn,"⨁","\\bigoplus");m(f,v,yn,"⨀","\\bigodot");m(f,v,yn,"∮","\\oint");m(f,v,yn,"∯","\\oiint");m(f,v,yn,"∰","\\oiiint");m(f,v,yn,"⨆","\\bigsqcup");m(f,v,yn,"∫","\\smallint");m(J,v,Bi,"…","\\textellipsis");m(f,v,Bi,"…","\\mathellipsis");m(J,v,Bi,"…","\\ldots",!0);m(f,v,Bi,"…","\\ldots",!0);m(f,v,Bi,"⋯","\\@cdots",!0);m(f,v,Bi,"⋱","\\ddots",!0);m(f,v,P,"⋮","\\varvdots");m(J,v,P,"⋮","\\varvdots");m(f,v,rn,"ˊ","\\acute");m(f,v,rn,"ˋ","\\grave");m(f,v,rn,"¨","\\ddot");m(f,v,rn,"~","\\tilde");m(f,v,rn,"ˉ","\\bar");m(f,v,rn,"˘","\\breve");m(f,v,rn,"ˇ","\\check");m(f,v,rn,"^","\\hat");m(f,v,rn,"⃗","\\vec");m(f,v,rn,"˙","\\dot");m(f,v,rn,"˚","\\mathring");m(f,v,Me,"","\\@imath");m(f,v,Me,"","\\@jmath");m(f,v,P,"ı","ı");m(f,v,P,"ȷ","ȷ");m(J,v,P,"ı","\\i",!0);m(J,v,P,"ȷ","\\j",!0);m(J,v,P,"ß","\\ss",!0);m(J,v,P,"æ","\\ae",!0);m(J,v,P,"œ","\\oe",!0);m(J,v,P,"ø","\\o",!0);m(J,v,P,"Æ","\\AE",!0);m(J,v,P,"Œ","\\OE",!0);m(J,v,P,"Ø","\\O",!0);m(J,v,rn,"ˊ","\\'");m(J,v,rn,"ˋ","\\`");m(J,v,rn,"ˆ","\\^");m(J,v,rn,"˜","\\~");m(J,v,rn,"ˉ","\\=");m(J,v,rn,"˘","\\u");m(J,v,rn,"˙","\\.");m(J,v,rn,"¸","\\c");m(J,v,rn,"˚","\\r");m(J,v,rn,"ˇ","\\v");m(J,v,rn,"¨",'\\"');m(J,v,rn,"˝","\\H");m(J,v,rn,"◯","\\textcircled");var um={"--":!0,"---":!0,"``":!0,"''":!0};m(J,v,P,"–","--",!0);m(J,v,P,"–","\\textendash");m(J,v,P,"—","---",!0);m(J,v,P,"—","\\textemdash");m(J,v,P,"‘","`",!0);m(J,v,P,"‘","\\textquoteleft");m(J,v,P,"’","'",!0);m(J,v,P,"’","\\textquoteright");m(J,v,P,"“","``",!0);m(J,v,P,"“","\\textquotedblleft");m(J,v,P,"”","''",!0);m(J,v,P,"”","\\textquotedblright");m(f,v,P,"°","\\degree",!0);m(J,v,P,"°","\\degree");m(J,v,P,"°","\\textdegree",!0);m(f,v,P,"£","\\pounds");m(f,v,P,"£","\\mathsterling",!0);m(J,v,P,"£","\\pounds");m(J,v,P,"£","\\textsterling",!0);m(f,j,P,"✠","\\maltese");m(J,j,P,"✠","\\maltese");var dd='0123456789/@."';for(var $l=0;$l<dd.length;$l++){var md=dd.charAt($l);m(f,v,P,md,md)}var pd='0123456789!@*()-=+";:?/.,';for(var bl=0;bl<pd.length;bl++){var fd=pd.charAt(bl);m(J,v,P,fd,fd)}var hs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var wl=0;wl<hs.length;wl++){var ts=hs.charAt(wl);m(f,v,Me,ts,ts),m(J,v,P,ts,ts)}m(f,j,P,"C","ℂ");m(J,j,P,"C","ℂ");m(f,j,P,"H","ℍ");m(J,j,P,"H","ℍ");m(f,j,P,"N","ℕ");m(J,j,P,"N","ℕ");m(f,j,P,"P","ℙ");m(J,j,P,"P","ℙ");m(f,j,P,"Q","ℚ");m(J,j,P,"Q","ℚ");m(f,j,P,"R","ℝ");m(J,j,P,"R","ℝ");m(f,j,P,"Z","ℤ");m(J,j,P,"Z","ℤ");m(f,v,Me,"h","ℎ");m(J,v,Me,"h","ℎ");var Pe="";for(var Rn=0;Rn<hs.length;Rn++){var dn=hs.charAt(Rn);Pe=String.fromCharCode(55349,56320+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56372+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56424+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56580+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56684+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56736+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56788+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56840+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56944+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Rn<26&&(Pe=String.fromCharCode(55349,56632+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe),Pe=String.fromCharCode(55349,56476+Rn),m(f,v,Me,dn,Pe),m(J,v,P,dn,Pe))}Pe="𝕜";m(f,v,Me,"k",Pe);m(J,v,P,"k",Pe);for(var ni=0;ni<10;ni++){var qr=ni.toString();Pe=String.fromCharCode(55349,57294+ni),m(f,v,Me,qr,Pe),m(J,v,P,qr,Pe),Pe=String.fromCharCode(55349,57314+ni),m(f,v,Me,qr,Pe),m(J,v,P,qr,Pe),Pe=String.fromCharCode(55349,57324+ni),m(f,v,Me,qr,Pe),m(J,v,P,qr,Pe),Pe=String.fromCharCode(55349,57334+ni),m(f,v,Me,qr,Pe),m(J,v,P,qr,Pe)}var Fl="ÐÞþ";for(var _l=0;_l<Fl.length;_l++){var rs=Fl.charAt(_l);m(f,v,Me,rs,rs),m(J,v,P,rs,rs)}var is=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],hd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],m8=function(t,r){var s=t.charCodeAt(0),a=t.charCodeAt(1),u=(s-55296)*1024+(a-56320)+65536,d=r==="math"?0:1;if(119808<=u&&u<120484){var h=Math.floor((u-119808)/26);return[is[h][2],is[h][d]]}else if(120782<=u&&u<=120831){var g=Math.floor((u-120782)/10);return[hd[g][2],hd[g][d]]}else{if(u===120485||u===120486)return[is[0][2],is[0][d]];if(120486<u&&u<120782)return["",""];throw new ie("Unsupported character: "+t)}},$s=function(t,r,s){return Xe[s][t]&&Xe[s][t].replace&&(t=Xe[s][t].replace),{value:t,metrics:nu(t,r,s)}},Dn=function(t,r,s,a,u){var d=$s(t,r,s),h=d.metrics;t=d.value;var g;if(h){var x=h.italic;(s==="text"||a&&a.font==="mathit")&&(x=0),g=new mt(t,h.height,h.depth,x,h.skew,h.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+s+"'")),g=new mt(t,0,0,0,0,0,u);if(a){g.maxFontSize=a.sizeMultiplier,a.style.isTight()&&g.classes.push("mtight");var b=a.getColor();b&&(g.style.color=b)}return g},ru=function(t,r,s,a){return a===void 0&&(a=[]),s.font==="boldsymbol"&&$s(t,"Main-Bold",r).metrics?Dn(t,"Main-Bold",r,s,a.concat(["mathbf"])):t==="\\"||Xe[r][t].font==="main"?Dn(t,"Main-Regular",r,s,a):Dn(t,"AMS-Regular",r,s,a.concat(["amsrm"]))},p8=function(t,r,s,a,u){return u!=="textord"&&$s(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},bs=function(t,r,s){var a=t.mode,u=t.text,d=["mord"],h=a==="math"||a==="text"&&r.font,g=h?r.font:r.fontFamily,x="",b="";if(u.charCodeAt(0)===55349&&([x,b]=m8(u,a)),x.length>0)return Dn(u,x,a,r,d.concat(b));if(g){var _,z;if(g==="boldsymbol"){var k=p8(u,a,r,d,s);_=k.fontName,z=[k.fontClass]}else h?(_=Ll[g].fontName,z=[g]):(_=os(g,r.fontWeight,r.fontShape),z=[g,r.fontWeight,r.fontShape]);if($s(u,_,a).metrics)return Dn(u,_,a,r,d.concat(z));if(um.hasOwnProperty(u)&&_.slice(0,10)==="Typewriter"){for(var D=[],T=0;T<u.length;T++)D.push(Dn(u[T],_,a,r,d.concat(z)));return nr(D)}}if(s==="mathord")return Dn(u,"Math-Italic",a,r,d.concat(["mathnormal"]));if(s==="textord"){var B=Xe[a][u]&&Xe[a][u].font;if(B==="ams"){var R=os("amsrm",r.fontWeight,r.fontShape);return Dn(u,R,a,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(B==="main"||!B){var I=os("textrm",r.fontWeight,r.fontShape);return Dn(u,I,a,r,d.concat(r.fontWeight,r.fontShape))}else{var W=os(B,r.fontWeight,r.fontShape);return Dn(u,W,a,r,d.concat(W,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},f8=(o,t)=>{if(Ar(o.classes)!==Ar(t.classes)||o.skew!==t.skew||o.maxFontSize!==t.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==t.style[s])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&o.style[a]!==t.style[a])return!1;return!0},cm=o=>{for(var t=0;t<o.length-1;t++){var r=o[t],s=o[t+1];r instanceof mt&&s instanceof mt&&f8(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(t+1,1),t--)}return o},iu=function(t){for(var r=0,s=0,a=0,u=0;u<t.children.length;u++){var d=t.children[u];d.height>r&&(r=d.height),d.depth>s&&(s=d.depth),d.maxFontSize>a&&(a=d.maxFontSize)}t.height=r,t.depth=s,t.maxFontSize=a},ne=function(t,r,s,a){var u=new Bo(t,r,s,a);return iu(u),u},Pr=(o,t,r,s)=>new Bo(o,t,r,s),Di=function(t,r,s){var a=ne([t],[],r);return a.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=ce(a.height),a.maxFontSize=1,a},h8=function(t,r,s,a){var u=new tu(t,r,s,a);return iu(u),u},nr=function(t){var r=new Eo(t);return iu(r),r},Ei=function(t,r){return t instanceof Eo?ne([],[t],r):t},g8=function(t){if(t.positionType==="individualShift"){for(var r=t.children,s=[r[0]],a=-r[0].shift-r[0].elem.depth,u=a,d=1;d<r.length;d++){var h=-r[d].shift-u-r[d].elem.depth,g=h-(r[d-1].elem.height+r[d-1].elem.depth);u=u+h,s.push({type:"kern",size:g}),s.push(r[d])}return{children:s,depth:a}}var x;if(t.positionType==="top"){for(var b=t.positionData,_=0;_<t.children.length;_++){var z=t.children[_];b-=z.type==="kern"?z.size:z.elem.height+z.elem.depth}x=b}else if(t.positionType==="bottom")x=-t.positionData;else{var k=t.children[0];if(k.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")x=-k.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")x=-k.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:x}},Ke=function(t,r){for(var{children:s,depth:a}=g8(t),u=0,d=0;d<s.length;d++){var h=s[d];if(h.type==="elem"){var g=h.elem;u=Math.max(u,g.maxFontSize,g.height)}}u+=2;var x=ne(["pstrut"],[]);x.style.height=ce(u);for(var b=[],_=a,z=a,k=a,D=0;D<s.length;D++){var T=s[D];if(T.type==="kern")k+=T.size;else{var B=T.elem,R=T.wrapperClasses||[],I=T.wrapperStyle||{},W=ne(R,[x,B],void 0,I);W.style.top=ce(-u-k-B.depth),T.marginLeft&&(W.style.marginLeft=T.marginLeft),T.marginRight&&(W.style.marginRight=T.marginRight),b.push(W),k+=B.height+B.depth}_=Math.min(_,k),z=Math.max(z,k)}var F=ne(["vlist"],b);F.style.height=ce(z);var O;if(_<0){var Z=ne([],[]),E=ne(["vlist"],[Z]);E.style.height=ce(-_);var V=ne(["vlist-s"],[new mt("​")]);O=[ne(["vlist-r"],[F,V]),ne(["vlist-r"],[E])]}else O=[ne(["vlist-r"],[F])];var te=ne(["vlist-t"],O);return O.length===2&&te.classes.push("vlist-t2"),te.height=z,te.depth=-_,te},dm=(o,t)=>{var r=ne(["mspace"],[],t),s=ln(o,t);return r.style.marginRight=ce(s),r},os=function(t,r,s){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var u;return r==="textbf"&&s==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",a+"-"+u},Ll={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},mm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},pm=function(t,r){var[s,a,u]=mm[t],d=new Mr(s),h=new Xt([d],{width:ce(a),height:ce(u),style:"width:"+ce(a),viewBox:"0 0 "+1e3*a+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),g=Pr(["overlay"],[h],r);return g.height=u,g.style.height=ce(u),g.style.width=ce(a),g},an={number:3,unit:"mu"},ti={number:4,unit:"mu"},Qt={number:5,unit:"mu"},y8={mord:{mop:an,mbin:ti,mrel:Qt,minner:an},mop:{mord:an,mop:an,mrel:Qt,minner:an},mbin:{mord:ti,mop:ti,mopen:ti,minner:ti},mrel:{mord:Qt,mop:Qt,mopen:Qt,minner:Qt},mopen:{},mclose:{mop:an,mbin:ti,mrel:Qt,minner:an},mpunct:{mord:an,mop:an,mrel:Qt,mopen:an,mclose:an,mpunct:an,minner:an},minner:{mord:an,mop:an,mbin:ti,mrel:Qt,mopen:an,mpunct:an,minner:an}},v8={mord:{mop:an},mop:{mord:an,mop:an},mbin:{},mrel:{},mopen:{},mclose:{mop:an},mpunct:{},minner:{mop:an}},fm={},gs={},ys={};function pe(o){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:d}=o,h={type:t,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:a},g=0;g<r.length;++g)fm[r[g]]=h;t&&(u&&(gs[t]=u),d&&(ys[t]=d))}function ii(o){var{type:t,htmlBuilder:r,mathmlBuilder:s}=o;pe({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var vs=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},pn=function(t){return t.type==="ordgroup"?t.body:[t]},x8=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),$8=new Set(["rightmost","mrel","mclose","mpunct"]),b8={display:Re.DISPLAY,text:Re.TEXT,script:Re.SCRIPT,scriptscript:Re.SCRIPTSCRIPT},w8={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},$n=function(t,r,s,a){a===void 0&&(a=[null,null]);for(var u=[],d=0;d<t.length;d++){var h=Ue(t[d],r);if(h instanceof Eo){var g=h.children;u.push(...g)}else u.push(h)}if(cm(u),!s)return u;var x=r;if(t.length===1){var b=t[0];b.type==="sizing"?x=r.havingSize(b.size):b.type==="styling"&&(x=r.havingStyle(b8[b.style]))}var _=ne([a[0]||"leftmost"],[],r),z=ne([a[1]||"rightmost"],[],r),k=s==="root";return gd(u,(D,T)=>{var B=T.classes[0],R=D.classes[0];B==="mbin"&&$8.has(R)?T.classes[0]="mord":R==="mbin"&&x8.has(B)&&(D.classes[0]="mord")},{node:_},z,k),gd(u,(D,T)=>{var B=Ol(T),R=Ol(D),I=B&&R?D.hasClass("mtight")?v8[B][R]:y8[B][R]:null;if(I)return dm(I,x)},{node:_},z,k),u},gd=function o(t,r,s,a,u){a&&t.push(a);for(var d=0;d<t.length;d++){var h=t[d],g=hm(h);if(g){o(g.children,r,s,null,u);continue}var x=!h.hasClass("mspace");if(x){var b=r(h,s.node);b&&(s.insertAfter?s.insertAfter(b):(t.unshift(b),d++))}x?s.node=h:u&&h.hasClass("newline")&&(s.node=ne(["leftmost"])),s.insertAfter=(_=>z=>{t.splice(_+1,0,z),d++})(d)}a&&t.pop()},hm=function(t){return t instanceof Eo||t instanceof tu||t instanceof Bo&&t.hasClass("enclosing")?t:null},_8=function o(t,r){var s=hm(t);if(s){var a=s.children;if(a.length){if(r==="right")return o(a[a.length-1],"right");if(r==="left")return o(a[0],"left")}}return t},Ol=function(t,r){return t?(r&&(t=_8(t,r)),w8[t.classes[0]]||null):null},Ro=function(t,r){var s=["nulldelimiter"].concat(t.baseSizingClasses());return ne(r.concat(s))},Ue=function(t,r,s){if(!t)return ne();if(gs[t.type]){var a=gs[t.type](t,r);if(s&&r.size!==s.size){a=ne(r.sizingClasses(s),[a],r);var u=r.sizeMultiplier/s.sizeMultiplier;a.height*=u,a.depth*=u}return a}else throw new ie("Got group of unknown type: '"+t.type+"'")};function ss(o,t){var r=ne(["base"],o,t),s=ne(["strut"]);return s.style.height=ce(r.height+r.depth),r.depth&&(s.style.verticalAlign=ce(-r.depth)),r.children.unshift(s),r}function Hl(o,t){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=$n(o,t,"root"),a;s.length===2&&s[1].hasClass("tag")&&(a=s.pop());for(var u=[],d=[],h=0;h<s.length;h++)if(d.push(s[h]),s[h].hasClass("mbin")||s[h].hasClass("mrel")||s[h].hasClass("allowbreak")){for(var g=!1;h<s.length-1&&s[h+1].hasClass("mspace")&&!s[h+1].hasClass("newline");)h++,d.push(s[h]),s[h].hasClass("nobreak")&&(g=!0);g||(u.push(ss(d,t)),d=[])}else s[h].hasClass("newline")&&(d.pop(),d.length>0&&(u.push(ss(d,t)),d=[]),u.push(s[h]));d.length>0&&u.push(ss(d,t));var x;r?(x=ss($n(r,t,!0)),x.classes=["tag"],u.push(x)):a&&u.push(a);var b=ne(["katex-html"],u);if(b.setAttribute("aria-hidden","true"),x){var _=x.children[0];_.style.height=ce(b.height+b.depth),b.depth&&(_.style.verticalAlign=ce(-b.depth))}return b}function gm(o){return new Eo(o)}class oe{constructor(t,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Ar(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof gn&&this.children[s+1]instanceof gn){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof gn;)a+=this.children[++s].toText();t.appendChild(new gn(a).toNode())}else t.appendChild(this.children[s].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Mn(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Mn(Ar(this.classes))+'"'),t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class gn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Mn(this.toText())}toText(){return this.text}}class ym{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",ce(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ce(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var k8=new Set(["\\imath","\\jmath"]),z8=new Set(["mrow","mtable"]),pt=function(t,r,s){return Xe[r][t]&&Xe[r][t].replace&&t.charCodeAt(0)!==55349&&!(um.hasOwnProperty(t)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(t=Xe[r][t].replace),new gn(t)},ou=function(t){return t.length===1?t[0]:new oe("mrow",t)},su=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var a=t.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var u=t.text;if(k8.has(u))return null;Xe[a][u]&&Xe[a][u].replace&&(u=Xe[a][u].replace);var d=Ll[s].fontName;return nu(u,d,a)?Ll[s].variant:null};function kl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var t=o.children[0];return t instanceof gn&&t.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof gn&&r.text===","}else return!1}var Vn=function(t,r,s){if(t.length===1){var a=Ze(t[0],r);return s&&a instanceof oe&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var u=[],d,h=0;h<t.length;h++){var g=Ze(t[h],r);if(g instanceof oe&&d instanceof oe){if(g.type==="mtext"&&d.type==="mtext"&&g.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...g.children);continue}else if(g.type==="mn"&&d.type==="mn"){d.children.push(...g.children);continue}else if(kl(g)&&d.type==="mn"){d.children.push(...g.children);continue}else if(g.type==="mn"&&kl(d))g.children=[...d.children,...g.children],u.pop();else if((g.type==="msup"||g.type==="msub")&&g.children.length>=1&&(d.type==="mn"||kl(d))){var x=g.children[0];x instanceof oe&&x.type==="mn"&&(x.children=[...d.children,...x.children],u.pop())}else if(d.type==="mi"&&d.children.length===1){var b=d.children[0];if(b instanceof gn&&b.text==="̸"&&(g.type==="mo"||g.type==="mi"||g.type==="mn")){var _=g.children[0];_ instanceof gn&&_.text.length>0&&(_.text=_.text.slice(0,1)+"̸"+_.text.slice(1),u.pop())}}}u.push(g),d=g}return u},Cr=function(t,r,s){return ou(Vn(t,r,s))},Ze=function(t,r){if(!t)return new oe("mrow");if(ys[t.type]){var s=ys[t.type](t,r);return s}else throw new ie("Got group of unknown type: '"+t.type+"'")};function yd(o,t,r,s,a){var u=Vn(o,r),d;u.length===1&&u[0]instanceof oe&&z8.has(u[0].type)?d=u[0]:d=new oe("mrow",u);var h=new oe("annotation",[new gn(t)]);h.setAttribute("encoding","application/x-tex");var g=new oe("semantics",[d,h]),x=new oe("math",[g]);x.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&x.setAttribute("display","block");var b=a?"katex":"katex-mathml";return ne([b],[x])}var vm=function(t){return new Zt({style:t.displayMode?Re.DISPLAY:Re.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},xm=function(t,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),t=ne(s,[t])}return t},S8=function(t,r,s){var a=vm(s),u;if(s.output==="mathml")return yd(t,r,a,s.displayMode,!0);if(s.output==="html"){var d=Hl(t,a);u=ne(["katex"],[d])}else{var h=yd(t,r,a,s.displayMode,!1),g=Hl(t,a);u=ne(["katex"],[h,g])}return xm(u,s)},j8=function(t,r,s){var a=vm(s),u=Hl(t,a),d=ne(["katex"],[u]);return xm(d,s)},q8={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ws=function(t){var r=new oe("mo",[new gn(q8[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},T8={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},A8=new Set(["widehat","widecheck","widetilde","utilde"]),_s=function(t,r){function s(){var h=4e5,g=t.label.slice(1);if(A8.has(g)){var x=t,b=x.base.type==="ordgroup"?x.base.body.length:1,_,z,k;if(b>5)g==="widehat"||g==="widecheck"?(_=420,h=2364,k=.42,z=g+"4"):(_=312,h=2340,k=.34,z="tilde4");else{var D=[1,1,2,2,3,3][b];g==="widehat"||g==="widecheck"?(h=[0,1062,2364,2364,2364][D],_=[0,239,300,360,420][D],k=[0,.24,.3,.3,.36,.42][D],z=g+D):(h=[0,600,1033,2339,2340][D],_=[0,260,286,306,312][D],k=[0,.26,.286,.3,.306,.34][D],z="tilde"+D)}var T=new Mr(z),B=new Xt([T],{width:"100%",height:ce(k),viewBox:"0 0 "+h+" "+_,preserveAspectRatio:"none"});return{span:Pr([],[B],r),minWidth:0,height:k}}else{var R=[],I=T8[g],[W,F,O]=I,Z=O/1e3,E=W.length,V,te;if(E===1){var me=I[3];V=["hide-tail"],te=[me]}else if(E===2)V=["halfarrow-left","halfarrow-right"],te=["xMinYMin","xMaxYMin"];else if(E===3)V=["brace-left","brace-center","brace-right"],te=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+E+" children.");for(var se=0;se<E;se++){var ae=new Mr(W[se]),ye=new Xt([ae],{width:"400em",height:ce(Z),viewBox:"0 0 "+h+" "+O,preserveAspectRatio:te[se]+" slice"}),xe=Pr([V[se]],[ye],r);if(E===1)return{span:xe,minWidth:F,height:Z};xe.style.height=ce(Z),R.push(xe)}return{span:ne(["stretchy"],R,r),minWidth:F,height:Z}}}var{span:a,minWidth:u,height:d}=s();return a.height=d,a.style.height=ce(d),u>0&&(a.style.minWidth=ce(u)),a},M8=function(t,r,s,a,u){var d,h=t.height+t.depth+s+a;if(/fbox|color|angl/.test(r)){if(d=ne(["stretchy",r],[],u),r==="fbox"){var g=u.color&&u.getColor();g&&(d.style.borderColor=g)}}else{var x=[];/^[bx]cancel$/.test(r)&&x.push(new Il({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&x.push(new Il({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new Xt(x,{width:"100%",height:ce(h)});d=Pr([],[b],u)}return d.height=h,d.style.height=ce(h),d};function Ee(o,t){if(!o||o.type!==t)throw new Error("Expected node of type "+t+", but got "+(o?"node of type "+o.type:String(o)));return o}function au(o){var t=ks(o);if(!t)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return t}function ks(o){return o&&(o.type==="atom"||d8.hasOwnProperty(o.type))?o:null}var lu=(o,t)=>{var r,s,a;o&&o.type==="supsub"?(s=Ee(o.base,"accent"),r=s.base,o.base=r,a=u8(Ue(o,t)),o.base=s):(s=Ee(o,"accent"),r=s.base);var u=Ue(r,t.havingCrampedStyle()),d=s.isShifty&&Jt(r),h=0;if(d){var g=Ao(r),x=Ue(g,t.havingCrampedStyle());h=cd(x).skew}var b=s.label==="\\c",_=b?u.height+u.depth:Math.min(u.height,t.fontMetrics().xHeight),z;if(s.isStretchy)z=_s(s,t),z=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:z,wrapperClasses:["svg-align"],wrapperStyle:h>0?{width:"calc(100% - "+ce(2*h)+")",marginLeft:ce(2*h)}:void 0}]});else{var k,D;s.label==="\\vec"?(k=pm("vec",t),D=mm.vec[1]):(k=bs({mode:s.mode,text:s.label},t,"textord"),k=cd(k),k.italic=0,D=k.width,b&&(_+=k.depth)),z=ne(["accent-body"],[k]);var T=s.label==="\\textcircled";T&&(z.classes.push("accent-full"),_=u.height);var B=h;T||(B-=D/2),z.style.left=ce(B),s.label==="\\textcircled"&&(z.style.top=".2em"),z=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-_},{type:"elem",elem:z}]})}var R=ne(["mord","accent"],[z],t);return a?(a.children[0]=R,a.height=Math.max(R.height,a.height),a.classes[0]="mord",a):R},$m=(o,t)=>{var r=o.isStretchy?ws(o.label):new oe("mo",[pt(o.label,o.mode)]),s=new oe("mover",[Ze(o.base,t),r]);return s.setAttribute("accent","true"),s},P8=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));pe({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,t)=>{var r=vs(t[0]),s=!P8.test(o.funcName),a=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:a,base:r}},htmlBuilder:lu,mathmlBuilder:$m});pe({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,t)=>{var r=t[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:lu,mathmlBuilder:$m});pe({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"accentUnder",mode:r.mode,label:s,base:a}},htmlBuilder:(o,t)=>{var r=Ue(o.base,t),s=_s(o,t),a=o.label==="\\utilde"?.12:0,u=Ke({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return ne(["mord","accentunder"],[u],t)},mathmlBuilder:(o,t)=>{var r=ws(o.label),s=new oe("munder",[Ze(o.base,t),r]);return s.setAttribute("accentunder","true"),s}});var as=o=>{var t=new oe("mpadded",o?[o]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};pe({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:s,funcName:a}=o;return{type:"xArrow",mode:s.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(o,t){var r=t.style,s=t.havingStyle(r.sup()),a=Ei(Ue(o.body,s,t),t),u=o.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(u+"-arrow-pad");var d;o.below&&(s=t.havingStyle(r.sub()),d=Ei(Ue(o.below,s,t),t),d.classes.push(u+"-arrow-pad"));var h=_s(o,t),g=-t.fontMetrics().axisHeight+.5*h.height,x=-t.fontMetrics().axisHeight-.5*h.height-.111;(a.depth>.25||o.label==="\\xleftequilibrium")&&(x-=a.depth);var b;if(d){var _=-t.fontMetrics().axisHeight+d.height+.5*h.height+.111;b=Ke({positionType:"individualShift",children:[{type:"elem",elem:a,shift:x},{type:"elem",elem:h,shift:g},{type:"elem",elem:d,shift:_}]})}else b=Ke({positionType:"individualShift",children:[{type:"elem",elem:a,shift:x},{type:"elem",elem:h,shift:g}]});return b.children[0].children[0].children[1].classes.push("svg-align"),ne(["mrel","x-arrow"],[b],t)},mathmlBuilder(o,t){var r=ws(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var a=as(Ze(o.body,t));if(o.below){var u=as(Ze(o.below,t));s=new oe("munderover",[r,u,a])}else s=new oe("mover",[r,a])}else if(o.below){var d=as(Ze(o.below,t));s=new oe("munder",[r,d])}else s=as(),s=new oe("mover",[r,s]);return s}});function bm(o,t){var r=$n(o.body,t,!0);return ne([o.mclass],r,t)}function wm(o,t){var r,s=Vn(o.body,t);return o.mclass==="minner"?r=new oe("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new oe("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new oe("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}pe({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:pn(a),isCharacterBox:Jt(a)}},htmlBuilder:bm,mathmlBuilder:wm});var zs=o=>{var t=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};pe({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,t){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:zs(t[0]),body:pn(t[1]),isCharacterBox:Jt(t[1])}}});pe({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,t){var{parser:r,funcName:s}=o,a=t[1],u=t[0],d;s!=="\\stackrel"?d=zs(a):d="mrel";var h={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:pn(a)},g={type:"supsub",mode:u.mode,base:h,sup:s==="\\underset"?null:u,sub:s==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:d,body:[g],isCharacterBox:Jt(g)}},htmlBuilder:bm,mathmlBuilder:wm});pe({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:zs(t[0]),body:pn(t[0])}},htmlBuilder(o,t){var r=$n(o.body,t,!0),s=ne([o.mclass],r,t);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,t){var r=Vn(o.body,t),s=new oe("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var C8={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},vd=()=>({type:"styling",body:[],mode:"math",style:"display"}),xd=o=>o.type==="textord"&&o.text==="@",R8=(o,t)=>(o.type==="mathord"||o.type==="atom")&&o.text===t;function D8(o,t,r){var s=C8[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),u={type:"atom",text:s,mode:"math",family:"rel"},d=r.callFunction("\\Big",[u],[]),h=r.callFunction("\\\\cdright",[t[1]],[]),g={type:"ordgroup",mode:"math",body:[a,d,h]};return r.callFunction("\\\\cdparent",[g],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var x={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[x],[])}default:return{type:"textord",text:" ",mode:"math"}}}function E8(o){var t=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){t.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new ie("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],a=[s],u=0;u<t.length;u++){for(var d=t[u],h=vd(),g=0;g<d.length;g++)if(!xd(d[g]))h.body.push(d[g]);else{s.push(h),g+=1;var x=au(d[g]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(x))if("<>AV".includes(x))for(var _=0;_<2;_++){for(var z=!0,k=g+1;k<d.length;k++){if(R8(d[k],x)){z=!1,g=k;break}if(xd(d[k]))throw new ie("Missing a "+x+" character to complete a CD arrow.",d[k]);b[_].body.push(d[k])}if(z)throw new ie("Missing a "+x+" character to complete a CD arrow.",d[g])}else throw new ie('Expected one of "<>AV=|." after @',d[g]);var D=D8(x,b,o),T={type:"styling",body:[D],mode:"math",style:"display"};s.push(T),h=vd()}u%2===0?s.push(h):s.shift(),s=[],a.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var B=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:B,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}pe({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:t[0]}},htmlBuilder(o,t){var r=t.havingStyle(t.style.sup()),s=Ei(Ue(o.label,r,t),t);return s.classes.push("cd-label-"+o.side),s.style.bottom=ce(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,t){var r=new oe("mrow",[Ze(o.label,t)]);return r=new oe("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new oe("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});pe({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,t){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(o,t){var r=Ei(Ue(o.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,t){return new oe("mrow",[Ze(o.fragment,t)])}});pe({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,t){for(var{parser:r}=o,s=Ee(t[0],"ordgroup"),a=s.body,u="",d=0;d<a.length;d++){var h=Ee(a[d],"textord");u+=h.text}var g=parseInt(u),x;if(isNaN(g))throw new ie("\\@char has non-numeric argument "+u);if(g<0||g>=1114111)throw new ie("\\@char with invalid code point "+u);return g<=65535?x=String.fromCharCode(g):(g-=65536,x=String.fromCharCode((g>>10)+55296,(g&1023)+56320)),{type:"textord",mode:r.mode,text:x}}});var _m=(o,t)=>{var r=$n(o.body,t.withColor(o.color),!1);return nr(r)},km=(o,t)=>{var r=Vn(o.body,t.withColor(o.color)),s=new oe("mstyle",r);return s.setAttribute("mathcolor",o.color),s};pe({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,t){var{parser:r}=o,s=Ee(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:s,body:pn(a)}},htmlBuilder:_m,mathmlBuilder:km});pe({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,t){var{parser:r,breakOnTokenText:s}=o,a=Ee(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var u=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:a,body:u}},htmlBuilder:_m,mathmlBuilder:km});pe({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,t,r){var{parser:s}=o,a=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,u=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:u,size:a&&Ee(a,"size").value}},htmlBuilder(o,t){var r=ne(["mspace"],[],t);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=ce(ln(o.size,t)))),r},mathmlBuilder(o,t){var r=new oe("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",ce(ln(o.size,t)))),r}});var Wl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},zm=o=>{var t=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new ie("Expected a control sequence",o);return t},B8=o=>{var t=o.gullet.popToken();return t.text==="="&&(t=o.gullet.popToken(),t.text===" "&&(t=o.gullet.popToken())),t},Sm=(o,t,r,s)=>{var a=o.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(t,a,s)};pe({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:t,funcName:r}=o;t.consumeSpaces();var s=t.fetch();if(Wl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Wl[s.text]),Ee(t.parseFunction(),"internal");throw new ie("Invalid token after macro prefix",s)}});pe({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=t.gullet.popToken(),a=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new ie("Expected a control sequence",s);for(var u=0,d,h=[[]];t.gullet.future().text!=="{";)if(s=t.gullet.popToken(),s.text==="#"){if(t.gullet.future().text==="{"){d=t.gullet.future(),h[u].push("{");break}if(s=t.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new ie('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==u+1)throw new ie('Argument number "'+s.text+'" out of order');u++,h.push([])}else{if(s.text==="EOF")throw new ie("Expected a macro definition");h[u].push(s.text)}var{tokens:g}=t.gullet.consumeArg();return d&&g.unshift(d),(r==="\\edef"||r==="\\xdef")&&(g=t.gullet.expandTokens(g),g.reverse()),t.gullet.macros.set(a,{tokens:g,numArgs:u,delimiters:h},r===Wl[r]),{type:"internal",mode:t.mode}}});pe({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=zm(t.gullet.popToken());t.gullet.consumeSpaces();var a=B8(t);return Sm(t,s,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});pe({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=zm(t.gullet.popToken()),a=t.gullet.popToken(),u=t.gullet.popToken();return Sm(t,s,u,r==="\\\\globalfuture"),t.gullet.pushToken(u),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var To=function(t,r,s){var a=Xe.math[t]&&Xe.math[t].replace,u=nu(a||t,r,s);if(!u)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return u},uu=function(t,r,s,a){var u=s.havingBaseStyle(r),d=ne(a.concat(u.sizingClasses(s)),[t],s),h=u.sizeMultiplier/s.sizeMultiplier;return d.height*=h,d.depth*=h,d.maxFontSize=u.sizeMultiplier,d},jm=function(t,r,s){var a=r.havingBaseStyle(s),u=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=ce(u),t.height-=u,t.depth+=u},N8=function(t,r,s,a,u,d){var h=Dn(t,"Main-Regular",u,a),g=uu(h,r,a,d);return jm(g,a,r),g},I8=function(t,r,s,a){return Dn(t,"Size"+r+"-Regular",s,a)},qm=function(t,r,s,a,u,d){var h=I8(t,r,u,a),g=uu(ne(["delimsizing","size"+r],[h],a),Re.TEXT,a,d);return s&&jm(g,a,Re.TEXT),g},zl=function(t,r,s){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var u=ne(["delimsizinginner",a],[ne([],[Dn(t,r,s)])]);return{type:"elem",elem:u}},Sl=function(t,r,s){var a=Rt["Size4-Regular"][t.charCodeAt(0)]?Rt["Size4-Regular"][t.charCodeAt(0)][4]:Rt["Size1-Regular"][t.charCodeAt(0)][4],u=new Mr("inner",e8(t,Math.round(1e3*r))),d=new Xt([u],{width:ce(a),height:ce(r),style:"width:"+ce(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),h=Pr([],[d],s);return h.height=r,h.style.height=ce(r),h.style.width=ce(a),{type:"elem",elem:h}},Gl=.008,ls={type:"kern",size:-1*Gl},F8=new Set(["|","\\lvert","\\rvert","\\vert"]),L8=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Tm=function(t,r,s,a,u,d){var h,g,x,b,_="",z=0;h=x=b=t,g=null;var k="Size1-Regular";t==="\\uparrow"?x=b="⏐":t==="\\Uparrow"?x=b="‖":t==="\\downarrow"?h=x="⏐":t==="\\Downarrow"?h=x="‖":t==="\\updownarrow"?(h="\\uparrow",x="⏐",b="\\downarrow"):t==="\\Updownarrow"?(h="\\Uparrow",x="‖",b="\\Downarrow"):F8.has(t)?(x="∣",_="vert",z=333):L8.has(t)?(x="∥",_="doublevert",z=556):t==="["||t==="\\lbrack"?(h="⎡",x="⎢",b="⎣",k="Size4-Regular",_="lbrack",z=667):t==="]"||t==="\\rbrack"?(h="⎤",x="⎥",b="⎦",k="Size4-Regular",_="rbrack",z=667):t==="\\lfloor"||t==="⌊"?(x=h="⎢",b="⎣",k="Size4-Regular",_="lfloor",z=667):t==="\\lceil"||t==="⌈"?(h="⎡",x=b="⎢",k="Size4-Regular",_="lceil",z=667):t==="\\rfloor"||t==="⌋"?(x=h="⎥",b="⎦",k="Size4-Regular",_="rfloor",z=667):t==="\\rceil"||t==="⌉"?(h="⎤",x=b="⎥",k="Size4-Regular",_="rceil",z=667):t==="("||t==="\\lparen"?(h="⎛",x="⎜",b="⎝",k="Size4-Regular",_="lparen",z=875):t===")"||t==="\\rparen"?(h="⎞",x="⎟",b="⎠",k="Size4-Regular",_="rparen",z=875):t==="\\{"||t==="\\lbrace"?(h="⎧",g="⎨",b="⎩",x="⎪",k="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(h="⎫",g="⎬",b="⎭",x="⎪",k="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(h="⎧",b="⎩",x="⎪",k="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(h="⎫",b="⎭",x="⎪",k="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(h="⎧",b="⎭",x="⎪",k="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(h="⎫",b="⎩",x="⎪",k="Size4-Regular");var D=To(h,k,u),T=D.height+D.depth,B=To(x,k,u),R=B.height+B.depth,I=To(b,k,u),W=I.height+I.depth,F=0,O=1;if(g!==null){var Z=To(g,k,u);F=Z.height+Z.depth,O=2}var E=T+W+F,V=Math.max(0,Math.ceil((r-E)/(O*R))),te=E+V*O*R,me=a.fontMetrics().axisHeight;s&&(me*=a.sizeMultiplier);var se=te/2-me,ae=[];if(_.length>0){var ye=te-T-W,xe=Math.round(te*1e3),Fe=n8(_,Math.round(ye*1e3)),Be=new Mr(_,Fe),Le=(z/1e3).toFixed(3)+"em",ue=(xe/1e3).toFixed(3)+"em",be=new Xt([Be],{width:Le,height:ue,viewBox:"0 0 "+z+" "+xe}),de=Pr([],[be],a);de.height=xe/1e3,de.style.width=Le,de.style.height=ue,ae.push({type:"elem",elem:de})}else{if(ae.push(zl(b,k,u)),ae.push(ls),g===null){var M=te-T-W+2*Gl;ae.push(Sl(x,M,a))}else{var Q=(te-T-W-F)/2+2*Gl;ae.push(Sl(x,Q,a)),ae.push(ls),ae.push(zl(g,k,u)),ae.push(ls),ae.push(Sl(x,Q,a))}ae.push(ls),ae.push(zl(h,k,u))}var _e=a.havingBaseStyle(Re.TEXT),qe=Ke({positionType:"bottom",positionData:se,children:ae});return uu(ne(["delimsizing","mult"],[qe],_e),Re.TEXT,a,d)},jl=80,ql=.08,Tl=function(t,r,s,a,u){var d=Jv(t,a,s),h=new Mr(t,d),g=new Xt([h],{width:"400em",height:ce(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Pr(["hide-tail"],[g],u)},O8=function(t,r){var s=r.havingBaseSizing(),a=Rm("\\surd",t*s.sizeMultiplier,Cm,s),u=s.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),h,g=0,x=0,b=0,_;return a.type==="small"?(b=1e3+1e3*d+jl,t<1?u=1:t<1.4&&(u=.7),g=(1+d+ql)/u,x=(1+d)/u,h=Tl("sqrtMain",g,b,d,r),h.style.minWidth="0.853em",_=.833/u):a.type==="large"?(b=(1e3+jl)*Mo[a.size],x=(Mo[a.size]+d)/u,g=(Mo[a.size]+d+ql)/u,h=Tl("sqrtSize"+a.size,g,b,d,r),h.style.minWidth="1.02em",_=1/u):(g=t+d+ql,x=t+d,b=Math.floor(1e3*t+d)+jl,h=Tl("sqrtTall",g,b,d,r),h.style.minWidth="0.742em",_=1.056),h.height=x,h.style.height=ce(g),{span:h,advanceWidth:_,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*u}},Am=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),H8=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Mm=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Mo=[0,1.2,1.8,2.4,3],Pm=function(t,r,s,a,u){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Am.has(t)||Mm.has(t))return qm(t,r,!1,s,a,u);if(H8.has(t))return Tm(t,Mo[r],!1,s,a,u);throw new ie("Illegal delimiter: '"+t+"'")},W8=[{type:"small",style:Re.SCRIPTSCRIPT},{type:"small",style:Re.SCRIPT},{type:"small",style:Re.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],G8=[{type:"small",style:Re.SCRIPTSCRIPT},{type:"small",style:Re.SCRIPT},{type:"small",style:Re.TEXT},{type:"stack"}],Cm=[{type:"small",style:Re.SCRIPTSCRIPT},{type:"small",style:Re.SCRIPT},{type:"small",style:Re.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],U8=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Rm=function(t,r,s,a){for(var u=Math.min(2,3-a.style.size),d=u;d<s.length&&s[d].type!=="stack";d++){var h=To(t,U8(s[d]),"math"),g=h.height+h.depth;if(s[d].type==="small"){var x=a.havingBaseStyle(s[d].style);g*=x.sizeMultiplier}if(g>r)return s[d]}return s[s.length-1]},Ul=function(t,r,s,a,u,d){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var h;Mm.has(t)?h=W8:Am.has(t)?h=Cm:h=G8;var g=Rm(t,r,h,a);return g.type==="small"?N8(t,g.style,s,a,u,d):g.type==="large"?qm(t,g.size,s,a,u,d):Tm(t,r,s,a,u,d)},Al=function(t,r,s,a,u,d){var h=a.fontMetrics().axisHeight*a.sizeMultiplier,g=901,x=5/a.fontMetrics().ptPerEm,b=Math.max(r-h,s+h),_=Math.max(b/500*g,2*b-x);return Ul(t,_,!0,a,u,d)},$d={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},V8=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ss(o,t){var r=ks(o);if(r&&V8.has(r.text))return r;throw r?new ie("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",o):new ie("Invalid delimiter type '"+o.type+"'",o)}pe({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,t)=>{var r=Ss(t[0],o);return{type:"delimsizing",mode:o.parser.mode,size:$d[o.funcName].size,mclass:$d[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,t)=>o.delim==="."?ne([o.mclass]):Pm(o.delim,o.size,t,o.mode,[o.mclass]),mathmlBuilder:o=>{var t=[];o.delim!=="."&&t.push(pt(o.delim,o.mode));var r=new oe("mo",t);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=ce(Mo[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function bd(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}pe({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ie("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:Ss(t[0],o).text,color:r}}});pe({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ss(t[0],o),s=o.parser;++s.leftrightDepth;var a=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var u=Ee(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:a,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,t)=>{bd(o);for(var r=$n(o.body,t,!0,["mopen","mclose"]),s=0,a=0,u=!1,d=0;d<r.length;d++)r[d].isMiddle?u=!0:(s=Math.max(r[d].height,s),a=Math.max(r[d].depth,a));s*=t.sizeMultiplier,a*=t.sizeMultiplier;var h;if(o.left==="."?h=Ro(t,["mopen"]):h=Al(o.left,s,a,t,o.mode,["mopen"]),r.unshift(h),u)for(var g=1;g<r.length;g++){var x=r[g],b=x.isMiddle;b&&(r[g]=Al(b.delim,s,a,b.options,o.mode,[]))}var _;if(o.right===".")_=Ro(t,["mclose"]);else{var z=o.rightColor?t.withColor(o.rightColor):t;_=Al(o.right,s,a,z,o.mode,["mclose"])}return r.push(_),ne(["minner"],r,t)},mathmlBuilder:(o,t)=>{bd(o);var r=Vn(o.body,t);if(o.left!=="."){var s=new oe("mo",[pt(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var a=new oe("mo",[pt(o.right,o.mode)]);a.setAttribute("fence","true"),o.rightColor&&a.setAttribute("mathcolor",o.rightColor),r.push(a)}return ou(r)}});pe({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ss(t[0],o);if(!o.parser.leftrightDepth)throw new ie("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,t)=>{var r;if(o.delim===".")r=Ro(t,[]);else{r=Pm(o.delim,1,t,o.mode,[]);var s={delim:o.delim,options:t};r.isMiddle=s}return r},mathmlBuilder:(o,t)=>{var r=o.delim==="\\vert"||o.delim==="|"?pt("|","text"):pt(o.delim,o.mode),s=new oe("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var cu=(o,t)=>{var r=Ei(Ue(o.body,t),t),s=o.label.slice(1),a=t.sizeMultiplier,u,d=0,h=Jt(o.body);if(s==="sout")u=ne(["stretchy","sout"]),u.height=t.fontMetrics().defaultRuleThickness/a,d=-.5*t.fontMetrics().xHeight;else if(s==="phase"){var g=ln({number:.6,unit:"pt"},t),x=ln({number:.35,unit:"ex"},t),b=t.havingBaseSizing();a=a/b.sizeMultiplier;var _=r.height+r.depth+g+x;r.style.paddingLeft=ce(_/2+g);var z=Math.floor(1e3*_*a),k=Yv(z),D=new Xt([new Mr("phase",k)],{width:"400em",height:ce(z/1e3),viewBox:"0 0 400000 "+z,preserveAspectRatio:"xMinYMin slice"});u=Pr(["hide-tail"],[D],t),u.style.height=ce(_),d=r.depth+g+x}else{/cancel/.test(s)?h||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var T=0,B=0,R=0;/box/.test(s)?(R=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),T=t.fontMetrics().fboxsep+(s==="colorbox"?0:R),B=T):s==="angl"?(R=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),T=4*R,B=Math.max(0,.25-r.depth)):(T=h?.2:0,B=T),u=M8(r,s,T,B,t),/fbox|boxed|fcolorbox/.test(s)?(u.style.borderStyle="solid",u.style.borderWidth=ce(R)):s==="angl"&&R!==.049&&(u.style.borderTopWidth=ce(R),u.style.borderRightWidth=ce(R)),d=r.depth+B,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var I;if(o.backgroundColor)I=Ke({positionType:"individualShift",children:[{type:"elem",elem:u,shift:d},{type:"elem",elem:r,shift:0}]});else{var W=/cancel|phase/.test(s)?["svg-align"]:[];I=Ke({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:d,wrapperClasses:W}]})}return/cancel/.test(s)&&(I.height=r.height,I.depth=r.depth),/cancel/.test(s)&&!h?ne(["mord","cancel-lap"],[I],t):ne(["mord"],[I],t)},du=(o,t)=>{var r=0,s=new oe(o.label.includes("colorbox")?"mpadded":"menclose",[Ze(o.body,t)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);s.setAttribute("style","border: "+a+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};pe({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,t,r){var{parser:s,funcName:a}=o,u=Ee(t[0],"color-token").color,d=t[1];return{type:"enclose",mode:s.mode,label:a,backgroundColor:u,body:d}},htmlBuilder:cu,mathmlBuilder:du});pe({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,t,r){var{parser:s,funcName:a}=o,u=Ee(t[0],"color-token").color,d=Ee(t[1],"color-token").color,h=t[2];return{type:"enclose",mode:s.mode,label:a,backgroundColor:d,borderColor:u,body:h}},htmlBuilder:cu,mathmlBuilder:du});pe({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});pe({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"enclose",mode:r.mode,label:s,body:a}},htmlBuilder:cu,mathmlBuilder:du});pe({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Dm={};function Dt(o){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:d}=o,h={type:t,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},g=0;g<r.length;++g)Dm[r[g]]=h;u&&(gs[t]=u),d&&(ys[t]=d)}var Em={};function w(o,t){Em[o]=t}function wd(o){var t=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),t.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return t}var js=o=>{var t=o.parser.settings;if(!t.displayMode)throw new ie("{"+o.envName+"} can be used only in display mode.")},K8=new Set(["gather","gather*"]);function mu(o){if(!o.includes("ed"))return!o.includes("*")}function Rr(o,t,r){var{hskipBeforeAndAfter:s,addJot:a,cols:u,arraystretch:d,colSeparationType:h,autoTag:g,singleRow:x,emptySingleRow:b,maxNumCols:_,leqno:z}=t;if(o.gullet.beginGroup(),x||o.gullet.macros.set("\\cr","\\\\\\relax"),!d){var k=o.gullet.expandMacroAsText("\\arraystretch");if(k==null)d=1;else if(d=parseFloat(k),!d||d<0)throw new ie("Invalid \\arraystretch: "+k)}o.gullet.beginGroup();var D=[],T=[D],B=[],R=[],I=g!=null?[]:void 0;function W(){g&&o.gullet.macros.set("\\@eqnsw","1",!0)}function F(){I&&(o.gullet.macros.get("\\df@tag")?(I.push(o.subparse([new et("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):I.push(!!g&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(W(),R.push(wd(o));;){var O=o.parseExpression(!1,x?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),O={type:"ordgroup",mode:o.mode,body:O},r&&(O={type:"styling",mode:o.mode,style:r,body:[O]}),D.push(O);var Z=o.fetch().text;if(Z==="&"){if(_&&D.length===_){if(x||h)throw new ie("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(Z==="\\end"){F(),D.length===1&&O.type==="styling"&&O.body[0].body.length===0&&(T.length>1||!b)&&T.pop(),R.length<T.length+1&&R.push([]);break}else if(Z==="\\\\"){o.consume();var E=void 0;o.gullet.future().text!==" "&&(E=o.parseSizeGroup(!0)),B.push(E?E.value:null),F(),R.push(wd(o)),D=[],T.push(D),W()}else throw new ie("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:a,arraystretch:d,body:T,cols:u,rowGaps:B,hskipBeforeAndAfter:s,hLinesBeforeRow:R,colSeparationType:h,tags:I,leqno:z}}function pu(o){return o.slice(0,1)==="d"?"display":"text"}var Et=function(t,r){var s,a,u=t.body.length,d=t.hLinesBeforeRow,h=0,g=new Array(u),x=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),_=1/r.fontMetrics().ptPerEm,z=5*_;if(t.colSeparationType&&t.colSeparationType==="small"){var k=r.havingStyle(Re.SCRIPT).sizeMultiplier;z=.2778*(k/r.sizeMultiplier)}var D=t.colSeparationType==="CD"?ln({number:3,unit:"ex"},r):12*_,T=3*_,B=t.arraystretch*D,R=.7*B,I=.3*B,W=0;function F(Kn){for(var Nn=0;Nn<Kn.length;++Nn)Nn>0&&(W+=.25),x.push({pos:W,isDashed:Kn[Nn]})}for(F(d[0]),s=0;s<t.body.length;++s){var O=t.body[s],Z=R,E=I;h<O.length&&(h=O.length);var V=new Array(O.length);for(a=0;a<O.length;++a){var te=Ue(O[a],r);E<te.depth&&(E=te.depth),Z<te.height&&(Z=te.height),V[a]=te}var me=t.rowGaps[s],se=0;me&&(se=ln(me,r),se>0&&(se+=I,E<se&&(E=se),se=0)),t.addJot&&(E+=T),V.height=Z,V.depth=E,W+=Z,V.pos=W,W+=E+se,g[s]=V,F(d[s+1])}var ae=W/2+r.fontMetrics().axisHeight,ye=t.cols||[],xe=[],Fe,Be,Le=[];if(t.tags&&t.tags.some(Kn=>Kn))for(s=0;s<u;++s){var ue=g[s],be=ue.pos-ae,de=t.tags[s],M=void 0;de===!0?M=ne(["eqn-num"],[],r):de===!1?M=ne([],[],r):M=ne([],$n(de,r,!0),r),M.depth=ue.depth,M.height=ue.height,Le.push({type:"elem",elem:M,shift:be})}for(a=0,Be=0;a<h||Be<ye.length;++a,++Be){for(var Q=ye[Be]||{},_e=!0;Q.type==="separator";){if(_e||(Fe=ne(["arraycolsep"],[]),Fe.style.width=ce(r.fontMetrics().doubleRuleSep),xe.push(Fe)),Q.separator==="|"||Q.separator===":"){var qe=Q.separator==="|"?"solid":"dashed",Se=ne(["vertical-separator"],[],r);Se.style.height=ce(W),Se.style.borderRightWidth=ce(b),Se.style.borderRightStyle=qe,Se.style.margin="0 "+ce(-b/2);var De=W-ae;De&&(Se.style.verticalAlign=ce(-De)),xe.push(Se)}else throw new ie("Invalid separator type: "+Q.separator);Be++,Q=ye[Be]||{},_e=!1}if(!(a>=h)){var he=void 0;if(a>0||t.hskipBeforeAndAfter){var je;he=(je=Q.pregap)!=null?je:z,he!==0&&(Fe=ne(["arraycolsep"],[]),Fe.style.width=ce(he),xe.push(Fe))}var $e=[];for(s=0;s<u;++s){var He=g[s],bn=He[a];if(bn){var Nt=He.pos-ae;bn.depth=He.depth,bn.height=He.height,$e.push({type:"elem",elem:bn,shift:Nt})}}if($e=Ke({positionType:"individualShift",children:$e}),$e=ne(["col-align-"+(Q.align||"c")],[$e]),xe.push($e),a<h-1||t.hskipBeforeAndAfter){var tt;he=(tt=Q.postgap)!=null?tt:z,he!==0&&(Fe=ne(["arraycolsep"],[]),Fe.style.width=ce(he),xe.push(Fe))}}}if(g=ne(["mtable"],xe),x.length>0){for(var Dr=Di("hline",r,b),Er=Di("hdashline",r,b),tr=[{type:"elem",elem:g,shift:0}];x.length>0;){var rr=x.pop(),ir=rr.pos-ae;rr.isDashed?tr.push({type:"elem",elem:Er,shift:ir}):tr.push({type:"elem",elem:Dr,shift:ir})}g=Ke({positionType:"individualShift",children:tr})}if(Le.length===0)return ne(["mord"],[g],r);var kt=Ke({positionType:"individualShift",children:Le});return kt=ne(["tag"],[kt],r),nr([g,kt])},Q8={c:"center ",l:"left ",r:"right "},Bt=function(t,r){for(var s=[],a=new oe("mtd",[],["mtr-glue"]),u=new oe("mtd",[],["mml-eqn-num"]),d=0;d<t.body.length;d++){for(var h=t.body[d],g=[],x=0;x<h.length;x++)g.push(new oe("mtd",[Ze(h[x],r)]));t.tags&&t.tags[d]&&(g.unshift(a),g.push(a),t.leqno?g.unshift(u):g.push(u)),s.push(new oe("mtr",g))}var b=new oe("mtable",s),_=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);b.setAttribute("rowspacing",ce(_));var z="",k="";if(t.cols&&t.cols.length>0){var D=t.cols,T="",B=!1,R=0,I=D.length;D[0].type==="separator"&&(z+="top ",R=1),D[D.length-1].type==="separator"&&(z+="bottom ",I-=1);for(var W=R;W<I;W++)D[W].type==="align"?(k+=Q8[D[W].align],B&&(T+="none "),B=!0):D[W].type==="separator"&&B&&(T+=D[W].separator==="|"?"solid ":"dashed ",B=!1);b.setAttribute("columnalign",k.trim()),/[sd]/.test(T)&&b.setAttribute("columnlines",T.trim())}if(t.colSeparationType==="align"){for(var F=t.cols||[],O="",Z=1;Z<F.length;Z++)O+=Z%2?"0em ":"1em ";b.setAttribute("columnspacing",O.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var E="",V=t.hLinesBeforeRow;z+=V[0].length>0?"left ":"",z+=V[V.length-1].length>0?"right ":"";for(var te=1;te<V.length-1;te++)E+=V[te].length===0?"none ":V[te][0]?"dashed ":"solid ";return/[sd]/.test(E)&&b.setAttribute("rowlines",E.trim()),z!==""&&(b=new oe("menclose",[b]),b.setAttribute("notation",z.trim())),t.arraystretch&&t.arraystretch<1&&(b=new oe("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},Bm=function(t,r){t.envName.includes("ed")||js(t);var s=[],a=t.envName.includes("at")?"alignat":"align",u=t.envName==="split",d=Rr(t.parser,{cols:s,addJot:!0,autoTag:u?void 0:mu(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:u?2:void 0,leqno:t.parser.settings.leqno},"display"),h,g=0,x={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",_=0;_<r[0].body.length;_++){var z=Ee(r[0].body[_],"textord");b+=z.text}h=Number(b),g=h*2}var k=!g;d.body.forEach(function(R){for(var I=1;I<R.length;I+=2){var W=Ee(R[I],"styling"),F=Ee(W.body[0],"ordgroup");F.body.unshift(x)}if(k)g<R.length&&(g=R.length);else{var O=R.length/2;if(h<O)throw new ie("Too many math in a row: "+("expected "+h+", but got "+O),R[0])}});for(var D=0;D<g;++D){var T="r",B=0;D%2===1?T="l":D>0&&k&&(B=1),s[D]={type:"align",align:T,pregap:B,postgap:0}}return d.colSeparationType=k?"align":"alignat",d};Dt({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,t){var r=ks(t[0]),s=r?[t[0]]:Ee(t[0],"ordgroup").body,a=s.map(function(d){var h=au(d),g=h.text;if("lcr".includes(g))return{type:"align",align:g};if(g==="|")return{type:"separator",separator:"|"};if(g===":")return{type:"separator",separator:":"};throw new ie("Unknown column alignment: "+g,d)}),u={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Rr(o.parser,u,pu(o.envName))},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var a=o.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new ie("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),s.cols=[{type:"align",align:r}]}}var u=Rr(o.parser,s,pu(o.envName)),d=Math.max(0,...u.body.map(h=>h.length));return u.cols=new Array(d).fill({type:"align",align:r}),t?{type:"leftright",mode:o.mode,body:[u],left:t[0],right:t[1],rightColor:void 0}:u},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var t={arraystretch:.5},r=Rr(o.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["subarray"],props:{numArgs:1},handler(o,t){var r=ks(t[0]),s=r?[t[0]]:Ee(t[0],"ordgroup").body,a=s.map(function(d){var h=au(d),g=h.text;if("lc".includes(g))return{type:"align",align:g};throw new ie("Unknown column alignment: "+g,d)});if(a.length>1)throw new ie("{subarray} can contain only one column");var u={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=Rr(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new ie("{subarray} can contain only one column");return u},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Rr(o.parser,t,pu(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Bm,htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){K8.has(o.envName)&&js(o);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:mu(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Rr(o.parser,t,"display")},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Bm,htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){js(o);var t={autoTag:mu(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Rr(o.parser,t,"display")},htmlBuilder:Et,mathmlBuilder:Bt});Dt({type:"array",names:["CD"],props:{numArgs:0},handler(o){return js(o),E8(o.parser)},htmlBuilder:Et,mathmlBuilder:Bt});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");pe({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,t){throw new ie(o.funcName+" valid only within array environment")}});var _d=Dm;pe({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];if(a.type!=="ordgroup")throw new ie("Invalid environment name",a);for(var u="",d=0;d<a.body.length;++d)u+=Ee(a.body[d],"textord").text;if(s==="\\begin"){if(!_d.hasOwnProperty(u))throw new ie("No such environment: "+u,a);var h=_d[u],{args:g,optArgs:x}=r.parseArguments("\\begin{"+u+"}",h),b={mode:r.mode,envName:u,parser:r},_=h.handler(b,g,x);r.expect("\\end",!1);var z=r.nextToken,k=Ee(r.parseFunction(),"environment");if(k.name!==u)throw new ie("Mismatch: \\begin{"+u+"} matched by \\end{"+k.name+"}",z);return _}return{type:"environment",mode:r.mode,name:u,nameGroup:a}}});var Nm=(o,t)=>{var r=o.font,s=t.withFont(r);return Ue(o.body,s)},Im=(o,t)=>{var r=o.font,s=t.withFont(r);return Ze(o.body,s)},kd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};pe({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=vs(t[0]),u=s;return u in kd&&(u=kd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:a}},htmlBuilder:Nm,mathmlBuilder:Im});pe({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"mclass",mode:r.mode,mclass:zs(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:Jt(s)}}});pe({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s,breakOnTokenText:a}=o,{mode:u}=r,d=r.parseExpression(!0,a),h="math"+s.slice(1);return{type:"font",mode:u,font:h,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:Nm,mathmlBuilder:Im});var Z8=(o,t)=>{var r=t.style,s=r.fracNum(),a=r.fracDen(),u;u=t.havingStyle(s);var d=Ue(o.numer,u,t);if(o.continued){var h=8.5/t.fontMetrics().ptPerEm,g=3.5/t.fontMetrics().ptPerEm;d.height=d.height<h?h:d.height,d.depth=d.depth<g?g:d.depth}u=t.havingStyle(a);var x=Ue(o.denom,u,t),b,_,z;o.hasBarLine?(o.barSize?(_=ln(o.barSize,t),b=Di("frac-line",t,_)):b=Di("frac-line",t),_=b.height,z=b.height):(b=null,_=0,z=t.fontMetrics().defaultRuleThickness);var k,D,T;r.size===Re.DISPLAY.size?(k=t.fontMetrics().num1,_>0?D=3*z:D=7*z,T=t.fontMetrics().denom1):(_>0?(k=t.fontMetrics().num2,D=z):(k=t.fontMetrics().num3,D=3*z),T=t.fontMetrics().denom2);var B;if(b){var I=t.fontMetrics().axisHeight;k-d.depth-(I+.5*_)<D&&(k+=D-(k-d.depth-(I+.5*_))),I-.5*_-(x.height-T)<D&&(T+=D-(I-.5*_-(x.height-T)));var W=-(I-.5*_);B=Ke({positionType:"individualShift",children:[{type:"elem",elem:x,shift:T},{type:"elem",elem:b,shift:W},{type:"elem",elem:d,shift:-k}]})}else{var R=k-d.depth-(x.height-T);R<D&&(k+=.5*(D-R),T+=.5*(D-R)),B=Ke({positionType:"individualShift",children:[{type:"elem",elem:x,shift:T},{type:"elem",elem:d,shift:-k}]})}u=t.havingStyle(r),B.height*=u.sizeMultiplier/t.sizeMultiplier,B.depth*=u.sizeMultiplier/t.sizeMultiplier;var F;r.size===Re.DISPLAY.size?F=t.fontMetrics().delim1:r.size===Re.SCRIPTSCRIPT.size?F=t.havingStyle(Re.SCRIPT).fontMetrics().delim2:F=t.fontMetrics().delim2;var O,Z;return o.leftDelim==null?O=Ro(t,["mopen"]):O=Ul(o.leftDelim,F,!0,t.havingStyle(r),o.mode,["mopen"]),o.continued?Z=ne([]):o.rightDelim==null?Z=Ro(t,["mclose"]):Z=Ul(o.rightDelim,F,!0,t.havingStyle(r),o.mode,["mclose"]),ne(["mord"].concat(u.sizingClasses(t)),[O,ne(["mfrac"],[B]),Z],t)},Y8=(o,t)=>{var r=new oe("mfrac",[Ze(o.numer,t),Ze(o.denom,t)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=ln(o.barSize,t);r.setAttribute("linethickness",ce(s))}if(o.leftDelim!=null||o.rightDelim!=null){var a=[];if(o.leftDelim!=null){var u=new oe("mo",[new gn(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),a.push(u)}if(a.push(r),o.rightDelim!=null){var d=new oe("mo",[new gn(o.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),a.push(d)}return ou(a)}return r},Fm=(o,t)=>{if(!t)return o;var r={type:"styling",mode:o.mode,style:t,body:[o]};return r};pe({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0],u=t[1],d,h=null,g=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,h="(",g=")";break;case"\\\\bracefrac":d=!1,h="\\{",g="\\}";break;case"\\\\brackfrac":d=!1,h="[",g="]";break;default:throw new Error("Unrecognized genfrac command")}var x=s==="\\cfrac",b=null;return x||s.startsWith("\\d")?b="display":s.startsWith("\\t")&&(b="text"),Fm({type:"genfrac",mode:r.mode,numer:a,denom:u,continued:x,hasBarLine:d,leftDelim:h,rightDelim:g,barSize:null},b)},htmlBuilder:Z8,mathmlBuilder:Y8});pe({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:t,funcName:r,token:s}=o,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:s}}});var zd=["display","text","script","scriptscript"],Sd=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};pe({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,t){var{parser:r}=o,s=t[4],a=t[5],u=vs(t[0]),d=u.type==="atom"&&u.family==="open"?Sd(u.text):null,h=vs(t[1]),g=h.type==="atom"&&h.family==="close"?Sd(h.text):null,x=Ee(t[2],"size"),b,_=null;x.isBlank?b=!0:(_=x.value,b=_.number>0);var z=null,k=t[3];if(k.type==="ordgroup"){if(k.body.length>0){var D=Ee(k.body[0],"textord");z=zd[Number(D.text)]}}else k=Ee(k,"textord"),z=zd[Number(k.text)];return Fm({type:"genfrac",mode:r.mode,numer:s,denom:a,continued:!1,hasBarLine:b,barSize:_,leftDelim:d,rightDelim:g},z)}});pe({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,t){var{parser:r,funcName:s,token:a}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ee(t[0],"size").value,token:a}}});pe({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0],u=Ee(t[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var d=t[2],h=u.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:d,continued:!1,hasBarLine:h,barSize:u,leftDelim:null,rightDelim:null}}});var Lm=(o,t)=>{var r=t.style,s,a;o.type==="supsub"?(s=o.sup?Ue(o.sup,t.havingStyle(r.sup()),t):Ue(o.sub,t.havingStyle(r.sub()),t),a=Ee(o.base,"horizBrace")):a=Ee(o,"horizBrace");var u=Ue(a.base,t.havingBaseStyle(Re.DISPLAY)),d=_s(a,t),h;if(a.isOver?(h=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:d}]}),h.children[0].children[0].children[1].classes.push("svg-align")):(h=Ke({positionType:"bottom",positionData:u.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:u}]}),h.children[0].children[0].children[0].classes.push("svg-align")),s){var g=ne(["mord",a.isOver?"mover":"munder"],[h],t);a.isOver?h=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:g},{type:"kern",size:.2},{type:"elem",elem:s}]}):h=Ke({positionType:"bottom",positionData:g.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:g}]})}return ne(["mord",a.isOver?"mover":"munder"],[h],t)},X8=(o,t)=>{var r=ws(o.label);return new oe(o.isOver?"mover":"munder",[Ze(o.base,t),r])};pe({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:t[0]}},htmlBuilder:Lm,mathmlBuilder:X8});pe({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[1],a=Ee(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:pn(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,t)=>{var r=$n(o.body,t,!1);return h8(o.href,[],r,t)},mathmlBuilder:(o,t)=>{var r=Cr(o.body,t);return r instanceof oe||(r=new oe("mrow",[r])),r.setAttribute("href",o.href),r}});pe({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=Ee(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var a=[],u=0;u<s.length;u++){var d=s[u];d==="~"&&(d="\\textasciitilde"),a.push({type:"textord",mode:"text",text:d})}var h={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:s,body:pn(h)}}});pe({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,t){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:pn(t[0])}},htmlBuilder(o,t){var r=$n(o.body,t,!1);return nr(r)},mathmlBuilder(o,t){return new oe("mrow",Vn(o.body,t))}});pe({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s,token:a}=o,u=Ee(t[0],"raw").string,d=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var h,g={};switch(s){case"\\htmlClass":g.class=u,h={command:"\\htmlClass",class:u};break;case"\\htmlId":g.id=u,h={command:"\\htmlId",id:u};break;case"\\htmlStyle":g.style=u,h={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var x=u.split(","),b=0;b<x.length;b++){var _=x[b],z=_.indexOf("=");if(z<0)throw new ie("\\htmlData key/value '"+_+"' missing equals sign");var k=_.slice(0,z),D=_.slice(z+1);g["data-"+k.trim()]=D}h={command:"\\htmlData",attributes:g};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(h)?{type:"html",mode:r.mode,attributes:g,body:pn(d)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,t)=>{var r=$n(o.body,t,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var a=ne(s,r,t);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&a.setAttribute(u,o.attributes[u]);return a},mathmlBuilder:(o,t)=>Cr(o.body,t)});pe({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:pn(t[0]),mathml:pn(t[1])}},htmlBuilder:(o,t)=>{var r=$n(o.html,t,!1);return nr(r)},mathmlBuilder:(o,t)=>Cr(o.mathml,t)});var Ml=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new ie("Invalid size: '"+t+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!om(s))throw new ie("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};pe({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,t,r)=>{var{parser:s}=o,a={number:0,unit:"em"},u={number:.9,unit:"em"},d={number:0,unit:"em"},h="";if(r[0])for(var g=Ee(r[0],"raw").string,x=g.split(","),b=0;b<x.length;b++){var _=x[b].split("=");if(_.length===2){var z=_[1].trim();switch(_[0].trim()){case"alt":h=z;break;case"width":a=Ml(z);break;case"height":u=Ml(z);break;case"totalheight":d=Ml(z);break;default:throw new ie("Invalid key: '"+_[0]+"' in \\includegraphics.")}}}var k=Ee(t[0],"url").url;return h===""&&(h=k,h=h.replace(/^.*[\\/]/,""),h=h.substring(0,h.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:k})?{type:"includegraphics",mode:s.mode,alt:h,width:a,height:u,totalheight:d,src:k}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,t)=>{var r=ln(o.height,t),s=0;o.totalheight.number>0&&(s=ln(o.totalheight,t)-r);var a=0;o.width.number>0&&(a=ln(o.width,t));var u={height:ce(r+s)};a>0&&(u.width=ce(a)),s>0&&(u.verticalAlign=ce(-s));var d=new a8(o.src,o.alt,u);return d.height=r,d.depth=s,d},mathmlBuilder:(o,t)=>{var r=new oe("mglyph",[]);r.setAttribute("alt",o.alt);var s=ln(o.height,t),a=0;if(o.totalheight.number>0&&(a=ln(o.totalheight,t)-s,r.setAttribute("valign",ce(-a))),r.setAttribute("height",ce(s+a)),o.width.number>0){var u=ln(o.width,t);r.setAttribute("width",ce(u))}return r.setAttribute("src",o.src),r}});pe({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:s}=o,a=Ee(t[0],"size");if(r.settings.strict){var u=s[1]==="m",d=a.value.unit==="mu";u?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(o,t){return dm(o.dimension,t)},mathmlBuilder(o,t){var r=ln(o.dimension,t);return new ym(r)}});pe({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:a}},htmlBuilder:(o,t)=>{var r;o.alignment==="clap"?(r=ne([],[Ue(o.body,t)]),r=ne(["inner"],[r],t)):r=ne(["inner"],[Ue(o.body,t)]);var s=ne(["fix"],[]),a=ne([o.alignment],[r,s],t),u=ne(["strut"]);return u.style.height=ce(a.height+a.depth),a.depth&&(u.style.verticalAlign=ce(-a.depth)),a.children.unshift(u),a=ne(["thinbox"],[a],t),ne(["mord","vbox"],[a],t)},mathmlBuilder:(o,t)=>{var r=new oe("mpadded",[Ze(o.body,t)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});pe({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){var{funcName:r,parser:s}=o,a=s.mode;s.switchMode("math");var u=r==="\\("?"\\)":"$",d=s.parseExpression(!1,u);return s.expect(u),s.switchMode(a),{type:"styling",mode:s.mode,style:"text",body:d}}});pe({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){throw new ie("Mismatched "+o.funcName)}});var jd=(o,t)=>{switch(t.style.size){case Re.DISPLAY.size:return o.display;case Re.TEXT.size:return o.text;case Re.SCRIPT.size:return o.script;case Re.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};pe({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:pn(t[0]),text:pn(t[1]),script:pn(t[2]),scriptscript:pn(t[3])}},htmlBuilder:(o,t)=>{var r=jd(o,t),s=$n(r,t,!1);return nr(s)},mathmlBuilder:(o,t)=>{var r=jd(o,t);return Cr(r,t)}});var Om=(o,t,r,s,a,u,d)=>{o=ne([],[o]);var h=r&&Jt(r),g,x;if(t){var b=Ue(t,s.havingStyle(a.sup()),s);x={elem:b,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var _=Ue(r,s.havingStyle(a.sub()),s);g={elem:_,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-_.height)}}var z;if(x&&g){var k=s.fontMetrics().bigOpSpacing5+g.elem.height+g.elem.depth+g.kern+o.depth+d;z=Ke({positionType:"bottom",positionData:k,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:ce(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:ce(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(g){var D=o.height-d;z=Ke({positionType:"top",positionData:D,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:ce(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o}]})}else if(x){var T=o.depth+d;z=Ke({positionType:"bottom",positionData:T,children:[{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:ce(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var B=[z];if(g&&u!==0&&!h){var R=ne(["mspace"],[],s);R.style.marginRight=ce(u),B.unshift(R)}return ne(["mop","op-limits"],B,s)},Hm=new Set(["\\smallint"]),Ni=(o,t)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Ee(o.base,"op"),a=!0):u=Ee(o,"op");var d=t.style,h=!1;d.size===Re.DISPLAY.size&&u.symbol&&!Hm.has(u.name)&&(h=!0);var g;if(u.symbol){var x=h?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),g=Dn(u.name,x,"math",t,["mop","op-symbol",h?"large-op":"small-op"]),b.length>0){var _=g.italic,z=pm(b+"Size"+(h?"2":"1"),t);g=Ke({positionType:"individualShift",children:[{type:"elem",elem:g,shift:0},{type:"elem",elem:z,shift:h?.08:0}]}),u.name="\\"+b,g.classes.unshift("mop"),g.italic=_}}else if(u.body){var k=$n(u.body,t,!0);k.length===1&&k[0]instanceof mt?(g=k[0],g.classes[0]="mop"):g=ne(["mop"],k,t)}else{for(var D=[],T=1;T<u.name.length;T++)D.push(ru(u.name[T],u.mode,t));g=ne(["mop"],D,t)}var B=0,R=0;return(g instanceof mt||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(B=(g.height-g.depth)/2-t.fontMetrics().axisHeight,R=g.italic),a?Om(g,r,s,t,d,R,B):(B&&(g.style.position="relative",g.style.top=ce(B)),g)},No=(o,t)=>{var r;if(o.symbol)r=new oe("mo",[pt(o.name,o.mode)]),Hm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new oe("mo",Vn(o.body,t));else{r=new oe("mi",[new gn(o.name.slice(1))]);var s=new oe("mo",[pt("⁡","text")]);o.parentIsSupSub?r=new oe("mrow",[r,s]):r=gm([r,s])}return r},J8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};pe({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=s;return a.length===1&&(a=J8[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Ni,mathmlBuilder:No});pe({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:pn(s)}},htmlBuilder:Ni,mathmlBuilder:No});var ex={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};pe({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Ni,mathmlBuilder:No});pe({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Ni,mathmlBuilder:No});pe({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:t,funcName:r}=o,s=r;return s.length===1&&(s=ex[s]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Ni,mathmlBuilder:No});var Wm=(o,t)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Ee(o.base,"operatorname"),a=!0):u=Ee(o,"operatorname");var d;if(u.body.length>0){for(var h=u.body.map(_=>{var z=_.text;return typeof z=="string"?{type:"textord",mode:_.mode,text:z}:_}),g=$n(h,t.withFont("mathrm"),!0),x=0;x<g.length;x++){var b=g[x];b instanceof mt&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=ne(["mop"],g,t)}else d=ne(["mop"],[],t);return a?Om(d,r,s,t,t.style,0,0):d},nx=(o,t)=>{for(var r=Vn(o.body,t.withFont("mathrm")),s=!0,a=0;a<r.length;a++){var u=r[a];if(!(u instanceof ym))if(u instanceof oe)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=u.children[0];u.children.length===1&&d instanceof gn?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var h=r.map(b=>b.toText()).join("");r=[new gn(h)]}var g=new oe("mi",r);g.setAttribute("mathvariant","normal");var x=new oe("mo",[pt("⁡","text")]);return o.parentIsSupSub?new oe("mrow",[g,x]):gm([g,x])};pe({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"operatorname",mode:r.mode,body:pn(a),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Wm,mathmlBuilder:nx});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ii({type:"ordgroup",htmlBuilder(o,t){return o.semisimple?nr($n(o.body,t,!1)):ne(["mord"],$n(o.body,t,!0),t)},mathmlBuilder(o,t){return Cr(o.body,t,!0)}});pe({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,t){var{parser:r}=o,s=t[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,t){var r=Ue(o.body,t.havingCrampedStyle()),s=Di("overline-line",t),a=t.fontMetrics().defaultRuleThickness,u=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}]});return ne(["mord","overline"],[u],t)},mathmlBuilder(o,t){var r=new oe("mo",[new gn("‾")]);r.setAttribute("stretchy","true");var s=new oe("mover",[Ze(o.body,t),r]);return s.setAttribute("accent","true"),s}});pe({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"phantom",mode:r.mode,body:pn(s)}},htmlBuilder:(o,t)=>{var r=$n(o.body,t.withPhantom(),!1);return nr(r)},mathmlBuilder:(o,t)=>{var r=Vn(o.body,t);return new oe("mphantom",r)}});pe({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,t)=>{var r=ne([],[Ue(o.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),ne(["mord"],[r],t)},mathmlBuilder:(o,t)=>{var r=Vn(pn(o.body),t),s=new oe("mphantom",r),a=new oe("mpadded",[s]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});pe({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,t)=>{var r=ne(["inner"],[Ue(o.body,t.withPhantom())]),s=ne(["fix"],[]);return ne(["mord","rlap"],[r,s],t)},mathmlBuilder:(o,t)=>{var r=Vn(pn(o.body),t),s=new oe("mphantom",r),a=new oe("mpadded",[s]);return a.setAttribute("width","0px"),a}});pe({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o,s=Ee(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:s,body:a}},htmlBuilder(o,t){var r=Ue(o.body,t),s=ln(o.dy,t);return Ke({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){var r=new oe("mpadded",[Ze(o.body,t)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});pe({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:t}=o;return{type:"internal",mode:t.mode}}});pe({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,t,r){var{parser:s}=o,a=r[0],u=Ee(t[0],"size"),d=Ee(t[1],"size");return{type:"rule",mode:s.mode,shift:a&&Ee(a,"size").value,width:u.value,height:d.value}},htmlBuilder(o,t){var r=ne(["mord","rule"],[],t),s=ln(o.width,t),a=ln(o.height,t),u=o.shift?ln(o.shift,t):0;return r.style.borderRightWidth=ce(s),r.style.borderTopWidth=ce(a),r.style.bottom=ce(u),r.width=s,r.height=a+u,r.depth=-u,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(o,t){var r=ln(o.width,t),s=ln(o.height,t),a=o.shift?ln(o.shift,t):0,u=t.color&&t.getColor()||"black",d=new oe("mspace");d.setAttribute("mathbackground",u),d.setAttribute("width",ce(r)),d.setAttribute("height",ce(s));var h=new oe("mpadded",[d]);return a>=0?h.setAttribute("height",ce(a)):(h.setAttribute("height",ce(a)),h.setAttribute("depth",ce(-a))),h.setAttribute("voffset",ce(a)),h}});function Gm(o,t,r){for(var s=$n(o,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,u=0;u<s.length;u++){var d=s[u].classes.indexOf("sizing");d<0?Array.prototype.push.apply(s[u].classes,t.sizingClasses(r)):s[u].classes[d+1]==="reset-size"+t.size&&(s[u].classes[d+1]="reset-size"+r.size),s[u].height*=a,s[u].depth*=a}return nr(s)}var qd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],tx=(o,t)=>{var r=t.havingSize(o.size);return Gm(o.body,r,t)};pe({type:"sizing",names:qd,props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:qd.indexOf(s)+1,body:u}},htmlBuilder:tx,mathmlBuilder:(o,t)=>{var r=t.havingSize(o.size),s=Vn(o.body,r),a=new oe("mstyle",s);return a.setAttribute("mathsize",ce(r.sizeMultiplier)),a}});pe({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,t,r)=>{var{parser:s}=o,a=!1,u=!1,d=r[0]&&Ee(r[0],"ordgroup");if(d)for(var h="",g=0;g<d.body.length;++g){var x=d.body[g];if(h=x.text,h==="t")a=!0;else if(h==="b")u=!0;else{a=!1,u=!1;break}}else a=!0,u=!0;var b=t[0];return{type:"smash",mode:s.mode,body:b,smashHeight:a,smashDepth:u}},htmlBuilder:(o,t)=>{var r=ne([],[Ue(o.body,t)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var u=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return ne(["mord"],[u],t)},mathmlBuilder:(o,t)=>{var r=new oe("mpadded",[Ze(o.body,t)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});pe({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:s}=o,a=r[0],u=t[0];return{type:"sqrt",mode:s.mode,body:u,index:a}},htmlBuilder(o,t){var r=Ue(o.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Ei(r,t);var s=t.fontMetrics(),a=s.defaultRuleThickness,u=a;t.style.id<Re.TEXT.id&&(u=t.fontMetrics().xHeight);var d=a+u/4,h=r.height+r.depth+d+a,{span:g,ruleWidth:x,advanceWidth:b}=O8(h,t),_=g.height-x;_>r.height+r.depth+d&&(d=(d+_-r.height-r.depth)/2);var z=g.height-r.height-d-x;r.style.paddingLeft=ce(b);var k=Ke({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+z)},{type:"elem",elem:g},{type:"kern",size:x}]});if(o.index){var D=t.havingStyle(Re.SCRIPTSCRIPT),T=Ue(o.index,D,t),B=.6*(k.height-k.depth),R=Ke({positionType:"shift",positionData:-B,children:[{type:"elem",elem:T}]}),I=ne(["root"],[R]);return ne(["mord","sqrt"],[I,k],t)}else return ne(["mord","sqrt"],[k],t)},mathmlBuilder(o,t){var{body:r,index:s}=o;return s?new oe("mroot",[Ze(r,t),Ze(s,t)]):new oe("msqrt",[Ze(r,t)])}});var Td={display:Re.DISPLAY,text:Re.TEXT,script:Re.SCRIPT,scriptscript:Re.SCRIPTSCRIPT};pe({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,t){var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!0,r),d=s.slice(1,s.length-5);return{type:"styling",mode:a.mode,style:d,body:u}},htmlBuilder(o,t){var r=Td[o.style],s=t.havingStyle(r).withFont("");return Gm(o.body,s,t)},mathmlBuilder(o,t){var r=Td[o.style],s=t.havingStyle(r),a=Vn(o.body,s),u=new oe("mstyle",a),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},h=d[o.style];return u.setAttribute("scriptlevel",h[0]),u.setAttribute("displaystyle",h[1]),u}});var rx=function(t,r){var s=t.base;if(s)if(s.type==="op"){var a=s.limits&&(r.style.size===Re.DISPLAY.size||s.alwaysHandleSupSub);return a?Ni:null}else if(s.type==="operatorname"){var u=s.alwaysHandleSupSub&&(r.style.size===Re.DISPLAY.size||s.limits);return u?Wm:null}else{if(s.type==="accent")return Jt(s.base)?lu:null;if(s.type==="horizBrace"){var d=!t.sub;return d===s.isOver?Lm:null}else return null}else return null};ii({type:"supsub",htmlBuilder(o,t){var r=rx(o,t);if(r)return r(o,t);var{base:s,sup:a,sub:u}=o,d=Ue(s,t),h,g,x=t.fontMetrics(),b=0,_=0,z=s&&Jt(s);if(a){var k=t.havingStyle(t.style.sup());h=Ue(a,k,t),z||(b=d.height-k.fontMetrics().supDrop*k.sizeMultiplier/t.sizeMultiplier)}if(u){var D=t.havingStyle(t.style.sub());g=Ue(u,D,t),z||(_=d.depth+D.fontMetrics().subDrop*D.sizeMultiplier/t.sizeMultiplier)}var T;t.style===Re.DISPLAY?T=x.sup1:t.style.cramped?T=x.sup3:T=x.sup2;var B=t.sizeMultiplier,R=ce(.5/x.ptPerEm/B),I=null;if(g){var W=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(d instanceof mt||W)&&(I=ce(-d.italic))}var F;if(h&&g){b=Math.max(b,T,h.depth+.25*x.xHeight),_=Math.max(_,x.sub2);var O=x.defaultRuleThickness,Z=4*O;if(b-h.depth-(g.height-_)<Z){_=Z-(b-h.depth)+g.height;var E=.8*x.xHeight-(b-h.depth);E>0&&(b+=E,_-=E)}var V=[{type:"elem",elem:g,shift:_,marginRight:R,marginLeft:I},{type:"elem",elem:h,shift:-b,marginRight:R}];F=Ke({positionType:"individualShift",children:V})}else if(g){_=Math.max(_,x.sub1,g.height-.8*x.xHeight);var te=[{type:"elem",elem:g,marginLeft:I,marginRight:R}];F=Ke({positionType:"shift",positionData:_,children:te})}else if(h)b=Math.max(b,T,h.depth+.25*x.xHeight),F=Ke({positionType:"shift",positionData:-b,children:[{type:"elem",elem:h,marginRight:R}]});else throw new Error("supsub must have either sup or sub.");var me=Ol(d,"right")||"mord";return ne([me],[d,ne(["msupsub"],[F])],t)},mathmlBuilder(o,t){var r=!1,s,a;o.base&&o.base.type==="horizBrace"&&(a=!!o.sup,a===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Ze(o.base,t)];o.sub&&u.push(Ze(o.sub,t)),o.sup&&u.push(Ze(o.sup,t));var d;if(r)d=s?"mover":"munder";else if(o.sub)if(o.sup){var x=o.base;x&&x.type==="op"&&x.limits&&t.style===Re.DISPLAY||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(t.style===Re.DISPLAY||x.limits)?d="munderover":d="msubsup"}else{var g=o.base;g&&g.type==="op"&&g.limits&&(t.style===Re.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||t.style===Re.DISPLAY)?d="munder":d="msub"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(t.style===Re.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||t.style===Re.DISPLAY)?d="mover":d="msup"}return new oe(d,u)}});ii({type:"atom",htmlBuilder(o,t){return ru(o.text,o.mode,t,["m"+o.family])},mathmlBuilder(o,t){var r=new oe("mo",[pt(o.text,o.mode)]);if(o.family==="bin"){var s=su(o,t);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Um={mi:"italic",mn:"normal",mtext:"normal"};ii({type:"mathord",htmlBuilder(o,t){return bs(o,t,"mathord")},mathmlBuilder(o,t){var r=new oe("mi",[pt(o.text,o.mode,t)]),s=su(o,t)||"italic";return s!==Um[r.type]&&r.setAttribute("mathvariant",s),r}});ii({type:"textord",htmlBuilder(o,t){return bs(o,t,"textord")},mathmlBuilder(o,t){var r=pt(o.text,o.mode,t),s=su(o,t)||"normal",a;return o.mode==="text"?a=new oe("mtext",[r]):/[0-9]/.test(o.text)?a=new oe("mn",[r]):o.text==="\\prime"?a=new oe("mo",[r]):a=new oe("mi",[r]),s!==Um[a.type]&&a.setAttribute("mathvariant",s),a}});var Pl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Cl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ii({type:"spacing",htmlBuilder(o,t){if(Cl.hasOwnProperty(o.text)){var r=Cl[o.text].className||"";if(o.mode==="text"){var s=bs(o,t,"textord");return s.classes.push(r),s}else return ne(["mspace",r],[ru(o.text,o.mode,t)],t)}else{if(Pl.hasOwnProperty(o.text))return ne(["mspace",Pl[o.text]],[],t);throw new ie('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,t){var r;if(Cl.hasOwnProperty(o.text))r=new oe("mtext",[new gn(" ")]);else{if(Pl.hasOwnProperty(o.text))return new oe("mspace");throw new ie('Unknown type of space "'+o.text+'"')}return r}});var Ad=()=>{var o=new oe("mtd",[]);return o.setAttribute("width","50%"),o};ii({type:"tag",mathmlBuilder(o,t){var r=new oe("mtable",[new oe("mtr",[Ad(),new oe("mtd",[Cr(o.body,t)]),Ad(),new oe("mtd",[Cr(o.tag,t)])])]);return r.setAttribute("width","100%"),r}});var Md={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Pd={"\\textbf":"textbf","\\textmd":"textmd"},ix={"\\textit":"textit","\\textup":"textup"},Cd=(o,t)=>{var r=o.font;if(r){if(Md[r])return t.withTextFontFamily(Md[r]);if(Pd[r])return t.withTextFontWeight(Pd[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(ix[r])};pe({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"text",mode:r.mode,body:pn(a),font:s}},htmlBuilder(o,t){var r=Cd(o,t),s=$n(o.body,r,!0);return ne(["mord","text"],s,r)},mathmlBuilder(o,t){var r=Cd(o,t);return Cr(o.body,r)}});pe({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ue(o.body,t),s=Di("underline-line",t),a=t.fontMetrics().defaultRuleThickness,u=Ke({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:s},{type:"kern",size:3*a},{type:"elem",elem:r}]});return ne(["mord","underline"],[u],t)},mathmlBuilder(o,t){var r=new oe("mo",[new gn("‾")]);r.setAttribute("stretchy","true");var s=new oe("munder",[Ze(o.body,t),r]);return s.setAttribute("accentunder","true"),s}});pe({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ue(o.body,t),s=t.fontMetrics().axisHeight,a=.5*(r.height-s-(r.depth+s));return Ke({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){return new oe("mpadded",[Ze(o.body,t)],["vcenter"])}});pe({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,t,r){throw new ie("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,t){for(var r=Rd(o),s=[],a=t.havingStyle(t.style.text()),u=0;u<r.length;u++){var d=r[u];d==="~"&&(d="\\textasciitilde"),s.push(Dn(d,"Typewriter-Regular",o.mode,a,["mord","texttt"]))}return ne(["mord","text"].concat(a.sizingClasses(t)),cm(s),a)},mathmlBuilder(o,t){var r=new gn(Rd(o)),s=new oe("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var Rd=o=>o.body.replace(/ /g,o.star?"␣":" "),Tr=fm,Vm=`[ \r
	]`,ox="\\\\[a-zA-Z@]+",sx="\\\\[^\uD800-\uDFFF]",ax="("+ox+")"+Vm+"*",lx=`\\\\(
|[ \r	]+
?)[ \r	]*`,Vl="[̀-ͯ]",ux=new RegExp(Vl+"+$"),cx="("+Vm+"+)|"+(lx+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Vl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Vl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+ax)+("|"+sx+")");class Dd{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(cx,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new et("EOF",new Un(this,r,r));var s=this.tokenRegex.exec(t);if(s===null||s.index!==r)throw new ie("Unexpected character: '"+t[r]+"'",new et(t[r],new Un(this,r,r+1)));var a=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[a]===14){var u=t.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new et(a,new Un(this,r,this.tokenRegex.lastIndex))}}class dx{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ie("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,s){if(s===void 0&&(s=!1),s){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(t)&&(u[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var mx=Em;w("\\noexpand",function(o){var t=o.popToken();return o.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});w("\\expandafter",function(o){var t=o.popToken();return o.expandOnce(!0),{tokens:[t],numArgs:0}});w("\\@firstoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[0],numArgs:0}});w("\\@secondoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[1],numArgs:0}});w("\\@ifnextchar",function(o){var t=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(o){var t=o.consumeArgs(2);return o.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Ed={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(o){var t=o.popToken(),r,s="";if(t.text==="'")r=8,t=o.popToken();else if(t.text==='"')r=16,t=o.popToken();else if(t.text==="`")if(t=o.popToken(),t.text[0]==="\\")s=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new ie("\\char` missing argument");s=t.text.charCodeAt(0)}else r=10;if(r){if(s=Ed[t.text],s==null||s>=r)throw new ie("Invalid base-"+r+" digit "+t.text);for(var a;(a=Ed[o.future().text])!=null&&a<r;)s*=r,s+=a,o.popToken()}return"\\@char{"+s+"}"});var fu=(o,t,r,s)=>{var a=o.consumeArg().tokens;if(a.length!==1)throw new ie("\\newcommand's first argument must be a macro name");var u=a[0].text,d=o.isDefined(u);if(d&&!t)throw new ie("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!d&&!r)throw new ie("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var h=0;if(a=o.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var g="",x=o.expandNextToken();x.text!=="]"&&x.text!=="EOF";)g+=x.text,x=o.expandNextToken();if(!g.match(/^\s*[0-9]+\s*$/))throw new ie("Invalid number of arguments: "+g);h=parseInt(g),a=o.consumeArg().tokens}return d&&s||o.macros.set(u,{tokens:a,numArgs:h}),""};w("\\newcommand",o=>fu(o,!1,!0,!1));w("\\renewcommand",o=>fu(o,!0,!1,!1));w("\\providecommand",o=>fu(o,!0,!0,!0));w("\\message",o=>{var t=o.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});w("\\errmessage",o=>{var t=o.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});w("\\show",o=>{var t=o.popToken(),r=t.text;return console.log(t,o.macros.get(r),Tr[r],Xe.math[r],Xe.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Bd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},px=new Set(["bin","rel"]);w("\\dots",function(o){var t="\\dotso",r=o.expandAfterFuture().text;return r in Bd?t=Bd[r]:(r.slice(0,4)==="\\not"||r in Xe.math&&px.has(Xe.math[r].group))&&(t="\\dotsb"),t});var hu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(o){var t=o.future().text;return t in hu?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(o){var t=o.future().text;return t in hu&&t!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(o){var t=o.future().text;return t in hu?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new ie("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Km=ce(Rt["Main-Regular"][84][1]-.7*Rt["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Km+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Km+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var Qm=o=>t=>{var r=t.consumeArg().tokens,s=t.consumeArg().tokens,a=t.consumeArg().tokens,u=t.consumeArg().tokens,d=t.macros.get("|"),h=t.macros.get("\\|");t.macros.beginGroup();var g=_=>z=>{o&&(z.macros.set("|",d),a.length&&z.macros.set("\\|",h));var k=_;if(!_&&a.length){var D=z.future();D.text==="|"&&(z.popToken(),k=!0)}return{tokens:k?a:s,numArgs:0}};t.macros.set("|",g(!1)),a.length&&t.macros.set("\\|",g(!0));var x=t.consumeArg().tokens,b=t.expandTokens([...u,...x,...r]);return t.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};w("\\bra@ket",Qm(!1));w("\\bra@set",Qm(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var Zm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class fx{constructor(t,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new dx(mx,r.macros),this.mode=s,this.stack=[]}feed(t){this.lexer=new Dd(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,s,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:s}=this.consumeArg(["]"])}else({tokens:a,start:r,end:s}=this.consumeArg());return this.pushToken(new et("EOF",s.loc)),this.pushTokens(a),new et("",Un.range(r,s))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],s=t&&t.length>0;s||this.consumeSpaces();var a=this.future(),u,d=0,h=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++d;else if(u.text==="}"){if(--d,d===-1)throw new ie("Extra }",u)}else if(u.text==="EOF")throw new ie("Unexpected end of input in a macro argument, expected '"+(t&&s?t[h]:"}")+"'",u);if(t&&s)if((d===0||d===1&&t[h]==="{")&&u.text===t[h]){if(++h,h===t.length){r.splice(-h,h);break}}else h=0}while(d!==0||s);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:u}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new ie("The length of delimiters doesn't match the number of args!");for(var s=r[0],a=0;a<s.length;a++){var u=this.popToken();if(s[a]!==u.text)throw new ie("Use of the macro doesn't match its definition",u)}}for(var d=[],h=0;h<t;h++)d.push(this.consumeArg(r&&r[h+1]).tokens);return d}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new ie("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),s=r.text,a=r.noexpand?null:this._getExpansion(s);if(a==null||t&&a.unexpandable){if(t&&a==null&&s[0]==="\\"&&!this.isDefined(s))throw new ie("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var u=a.tokens,d=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){u=u.slice();for(var h=u.length-1;h>=0;--h){var g=u[h];if(g.text==="#"){if(h===0)throw new ie("Incomplete placeholder at end of macro body",g);if(g=u[--h],g.text==="#")u.splice(h+1,1);else if(/^[1-9]$/.test(g.text))u.splice(h,2,...d[+g.text-1]);else throw new ie("Not a valid argument number",g)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new et(t)]):void 0}expandTokens(t){var r=[],s=this.stack.length;for(this.pushTokens(t);this.stack.length>s;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(s=>s.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var s=this.lexer.catcodes[t];if(s!=null&&s!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var u=0;if(a.includes("#"))for(var d=a.replace(/##/g,"");d.includes("#"+(u+1));)++u;for(var h=new Dd(a,this.settings),g=[],x=h.lex();x.text!=="EOF";)g.push(x),x=h.lex();g.reverse();var b={tokens:g,numArgs:u};return b}return a}isDefined(t){return this.macros.has(t)||Tr.hasOwnProperty(t)||Xe.math.hasOwnProperty(t)||Xe.text.hasOwnProperty(t)||Zm.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Tr.hasOwnProperty(t)&&!Tr[t].primitive}}var Nd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,us=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Rl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Id={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class qs{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new fx(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new ie("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new et("}")),this.gullet.pushTokens(t);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(t,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(qs.endOfExpression.has(a.text)||r&&a.text===r||t&&Tr[a.text]&&Tr[a.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;s.push(u)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(t){for(var r=-1,s,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new ie("only one infix operator per group",t[a].token);r=a,s=t[a].replaceWith}if(r!==-1&&s){var u,d,h=t.slice(0,r),g=t.slice(r+1);h.length===1&&h[0].type==="ordgroup"?u=h[0]:u={type:"ordgroup",mode:this.mode,body:h},g.length===1&&g[0].type==="ordgroup"?d=g[0]:d={type:"ordgroup",mode:this.mode,body:g};var x;return s==="\\\\abovefrac"?x=this.callFunction(s,[u,t[r],d],[]):x=this.callFunction(s,[u,d],[]),[x]}else return t}handleSupSubscript(t){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var a;do{var u;a=this.parseGroup(t)}while(((u=a)==null?void 0:u.type)==="internal");if(!a)throw new ie("Expected group after '"+s+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],s=0;s<t.length;s++)r.push({type:"textord",mode:"text",text:t[s]});var a={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return u}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,a;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var d=u.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new ie("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(s)throw new ie("Double superscript",u);s=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(a)throw new ie("Double subscript",u);a=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(s)throw new ie("Double superscript",u);var h={type:"textord",mode:this.mode,text:"\\prime"},g=[h];for(this.consume();this.fetch().text==="'";)g.push(h),this.consume();this.fetch().text==="^"&&g.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:g}}else if(us[u.text]){var x=Nd.test(u.text),b=[];for(b.push(new et(us[u.text])),this.consume();;){var _=this.fetch().text;if(!us[_]||Nd.test(_)!==x)break;b.unshift(new et(us[_])),this.consume()}var z=this.subparse(b);x?a={type:"ordgroup",mode:"math",body:z}:s={type:"ordgroup",mode:"math",body:z}}else break}return s||a?{type:"supsub",mode:this.mode,base:r,sup:s,sub:a}:r}parseFunction(t,r){var s=this.fetch(),a=s.text,u=Tr[a];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new ie("Got function '"+a+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!u.allowedInText)throw new ie("Can't use function '"+a+"' in text mode",s);if(this.mode==="math"&&u.allowedInMath===!1)throw new ie("Can't use function '"+a+"' in math mode",s);var{args:d,optArgs:h}=this.parseArguments(a,u);return this.callFunction(a,d,h,s,t)}callFunction(t,r,s,a,u){var d={funcName:t,parser:this,token:a,breakOnTokenText:u},h=Tr[t];if(h&&h.handler)return h.handler(d,r,s);throw new ie("No function handler for "+t)}parseArguments(t,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var a=[],u=[],d=0;d<s;d++){var h=r.argTypes&&r.argTypes[d],g=d<r.numOptionalArgs;(r.primitive&&h==null||r.type==="sqrt"&&d===1&&u[0]==null)&&(h="primitive");var x=this.parseGroupOfType("argument to '"+t+"'",h,g);if(g)u.push(x);else if(x!=null)a.push(x);else throw new ie("Null argument, please report this as a bug")}return{args:a,optArgs:u}}parseGroupOfType(t,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var a=this.parseArgumentGroup(s,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",s);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(s)throw new ie("A primitive argument cannot be optional");var d=this.parseGroup(t);if(d==null)throw new ie("Expected group as "+t,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new ie("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var a="",u;(u=this.fetch()).text!=="EOF";)a+=u.text,this.consume();return this.consume(),s.text=a,s}parseRegexGroup(t,r){for(var s=this.fetch(),a=s,u="",d;(d=this.fetch()).text!=="EOF"&&t.test(u+d.text);)a=d,u+=a.text,this.consume();if(u==="")throw new ie("Invalid "+r+": '"+s.text+"'",s);return s.range(a,u)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new ie("Invalid color: '"+r.text+"'",r);var a=s[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,s=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",s=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new ie("Invalid size: '"+r.text+"'",r);var u={number:+(a[1]+a[2]),unit:a[3]};if(!om(u))throw new ie("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:s}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(t,r){var s=this.gullet.scanArgument(t);if(s==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:s.loc,body:u};return r&&this.switchMode(a),d}parseGroup(t,r){var s=this.fetch(),a=s.text,u;if(a==="{"||a==="\\begingroup"){this.consume();var d=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var h=this.parseExpression(!1,d),g=this.fetch();this.expect(d),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Un.range(s,g),body:h,semisimple:a==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,t)||this.parseSymbol(),u==null&&a[0]==="\\"&&!Zm.hasOwnProperty(a)){if(this.settings.throwOnError)throw new ie("Undefined control sequence: "+a,s);u=this.formatUnsupportedCmd(a),this.consume()}return u}formLigatures(t){for(var r=t.length-1,s=0;s<r;++s){var a=t[s],u=a.text;u==="-"&&t[s+1].text==="-"&&(s+1<r&&t[s+2].text==="-"?(t.splice(s,3,{type:"textord",mode:"text",loc:Un.range(a,t[s+2]),text:"---"}),r-=2):(t.splice(s,2,{type:"textord",mode:"text",loc:Un.range(a,t[s+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&t[s+1].text===u&&(t.splice(s,2,{type:"textord",mode:"text",loc:Un.range(a,t[s+1]),text:u+u}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),a=s.charAt(0)==="*";if(a&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new ie(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:a}}Id.hasOwnProperty(r[0])&&!Xe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=Id[r[0]]+r.slice(1));var u=ux.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(Xe[this.mode][r]){this.settings.strict&&this.mode==="math"&&Fl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var h=Xe[this.mode][r].group,g=Un.range(t),x;if(c8.hasOwnProperty(h)){var b=h;x={type:"atom",mode:this.mode,family:b,loc:g,text:r}}else x={type:h,mode:this.mode,loc:g,text:r};d=x}else if(r.charCodeAt(0)>=128)this.settings.strict&&(im(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),d={type:"textord",mode:"text",loc:Un.range(t),text:r};else return null;if(this.consume(),u)for(var _=0;_<u[0].length;_++){var z=u[0][_];if(!Rl[z])throw new ie("Unknown accent ' "+z+"'",t);var k=Rl[z][this.mode]||Rl[z].text;if(!k)throw new ie("Accent "+z+" unsupported in "+this.mode+" mode",t);d={type:"accent",mode:this.mode,loc:Un.range(t),label:k,isStretchy:!1,isShifty:!0,base:d}}return d}}qs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var gu=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new qs(t,r);delete s.gullet.macros.current["\\df@tag"];var a=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ie("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:s.subparse([new et("\\df@tag")])}]}return a},Ym=function(t,r,s){r.textContent="";var a=yu(t,s).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Ym=function(){throw new ie("KaTeX doesn't work in quirks mode.")});var hx=function(t,r){var s=yu(t,r).toMarkup();return s},gx=function(t,r){var s=new Jl(r);return gu(t,s)},Xm=function(t,r,s){if(s.throwOnError||!(t instanceof ie))throw t;var a=ne(["katex-error"],[new mt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+s.errorColor),a},yu=function(t,r){var s=new Jl(r);try{var a=gu(t,s);return S8(a,t,s)}catch(u){return Xm(u,t,s)}},yx=function(t,r){var s=new Jl(r);try{var a=gu(t,s);return j8(a,t,s)}catch(u){return Xm(u,t,s)}},vx="0.16.33",xx={Span:Bo,Anchor:tu,SymbolNode:mt,SvgNode:Xt,PathNode:Mr,LineNode:Il},Fd={version:vx,render:Ym,renderToString:hx,ParseError:ie,SETTINGS_SCHEMA:ds,__parse:gx,__renderToDomTree:yu,__renderToHTMLTree:yx,__setFontMetrics:t8,__defineSymbol:m,__defineFunction:pe,__defineMacro:w,__domTree:xx};function Jm(o){if(!o)return"";let t=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Fd.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}});return t=t.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Fd.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}}),t}class Do{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(s,a)=>a);for(let s=t-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return new Do(r)}static identity(t){return new Do(Array.from({length:t},(r,s)=>s))}}function $x({nodeId:o,nodes:t,questionBank:r,onAnswer:s,onSkip:a,lang:u,excludeIndices:d=[],isMobile:h}){const g=t.find(E=>E.id===o),x=H.useMemo(()=>Kd(r,o,d),[o,d]),b="#4a9eff",_=g?u==="pl"?g.labelPl:g.label:o,z=H.useMemo(()=>x?Do.random(x.options.length):null,[x]),k=H.useMemo(()=>z?z.apply(x.options):[],[z,x]),D=H.useMemo(()=>z?z.displayIndex(x.correct):-1,[z,x]),[T,B]=H.useState(null),[R,I]=H.useState(!1),W=()=>{T!==null&&I(!0)},F=()=>{s(T===D,x,x.index),B(null),I(!1)};H.useEffect(()=>{const E=V=>{V.key==="Escape"&&a((x==null?void 0:x.index)??-1)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[a,x]);const O=E=>y.jsx("span",{dangerouslySetInnerHTML:{__html:Jm(E)}}),Z=h?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:G.surface,border:`1px solid ${b}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:G.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:G.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${b}40`,borderRadius:10,padding:"14px 16px",color:G.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return y.jsxs("div",{style:Z,children:[h&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:G.textFaint}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[y.jsx("div",{style:{color:b,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:_}),y.jsx("button",{onClick:()=>a((x==null?void 0:x.index)??-1),style:{background:`${G.textDim}22`,border:`1px solid ${G.border}`,color:G.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:K("close",u)})]}),x?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:13,color:G.textBody,marginBottom:12,lineHeight:1.65},children:O(x.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:k.map((E,V)=>{let te=G.bg,me=G.border,se=G.textBody;return T===V&&!R&&(te=`${b}22`,me=b,se=b),R&&(V===D?(te="#27ae6022",me="#27ae60",se="#2ecc71"):V===T&&(te="#e74c3c22",me="#e74c3c",se="#ff6b6b")),y.jsxs("button",{onClick:()=>{R||B(V)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:R?"default":"pointer",background:te,border:`1px solid ${me}`,color:se,lineHeight:1.5,minHeight:38},children:[y.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][V],"."]}),O(E)]},V)})}),R&&x.hint&&y.jsx("div",{style:{fontSize:11,color:G.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:O(x.hint)}),R?y.jsx("button",{onClick:F,style:{...qo(T===D?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:K(T===D?"knownConfirm":"unknownConfirm",u)}):y.jsx("button",{onClick:W,disabled:T===null,style:{...qo(b),width:"100%",opacity:T===null?.4:1,fontSize:13},children:K("checkAnswer",u)})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:G.textDim,fontSize:12,marginBottom:12},children:K("noQuestion",u)}),y.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[y.jsx("button",{onClick:()=>s(!0,null,-1),style:{...qo("#27ae60"),fontSize:12,padding:"8px 14px"},children:K("yesKnow",u)}),y.jsx("button",{onClick:()=>s(!1,null,-1),style:{...qo("#e74c3c"),fontSize:12,padding:"8px 14px"},children:K("noKnow",u)}),y.jsx("button",{onClick:()=>a(-1),style:{...qo("#3a4d63"),fontSize:12,padding:"8px 14px"},children:K("skipBtn",u)})]})]})]})}const bx={position:"absolute",right:16,top:16,width:230,background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function wx({belief:o,frontier:t,visibleFrontier:r,hasStarted:s,nextSuggestedId:a,sessionComplete:u,adjacency:d,expectedRemaining:h,pCorrect:g,questionsAnswered:x,nodes:b,lang:_,onReset:z,onNodeClick:k,SCOPE_LABELS:D,isMobile:T}){var me,se;const B=Object.fromEntries(b.map(ae=>[ae.id,ae])),R=ae=>{var ye,xe;return _==="pl"?(ye=B[ae])==null?void 0:ye.labelPl:(xe=B[ae])==null?void 0:xe.label},I=b.filter(ae=>o[ae.id]==="known"),W=b.filter(ae=>o[ae.id]==="unknown"),F=b.length,O=[{label:K("statKnown",_),count:I.length,color:"#27ae60"},{label:K("statUnknown",_),count:W.length,color:"#e74c3c"},{label:K("statRemaining",_),count:h??"-",color:"#4a9eff"}],Z=g?Math.round(g*100):50,E=T?13:11,V=T?11:9,te=y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{fontWeight:700,fontSize:T?14:12,marginBottom:10,color:G.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[K("diagHeader",_)," ",u?"✓":""]}),y.jsx("button",{onClick:z,style:{fontSize:V,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${G.textFaint}`,color:G.textDim,minHeight:T?32:"auto"},children:K("reset",_)})]}),y.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:O.map(({label:ae,count:ye,color:xe})=>y.jsxs("div",{style:{flex:1,textAlign:"center",background:`${xe}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${xe}40`},children:[y.jsx("div",{style:{color:xe,fontWeight:700,fontSize:T?20:15},children:ye}),y.jsx("div",{style:{color:G.textDim,fontSize:V},children:ae})]},ae))}),!u&&s&&y.jsxs("div",{style:{fontSize:V,color:G.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[y.jsxs("span",{children:[K("answered",_),": ",y.jsx("span",{style:{color:G.textPrimary},children:x})]}),y.jsxs("span",{children:[K("estimated",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:["~",h??"-"]})]}),y.jsxs("span",{children:[K("accuracy",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[Z,"%"]})]})]}),u&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:T?14:12,marginBottom:4},children:K("sessionDone",_)}),y.jsxs("div",{style:{color:G.textDim,fontSize:V,lineHeight:1.6},children:[K("sessionDoneSub",_)," ",y.jsx("span",{style:{color:G.textPrimary},children:x})," ",K("sessionDoneQ",_),"."," ",K("sessionDoneClass",_)," ",I.length+W.length,"/",F,".",y.jsx("br",{}),K("sessionDoneAcc",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[Z,"%"]}),"."," ",K("sessionDoneKnown",_)," ",y.jsx("span",{style:{color:"#2ecc71"},children:I.length}),","," ",K("sessionDoneStudy",_)," ",y.jsx("span",{style:{color:"#e74c3c"},children:W.length}),"."]})]}),W.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#e74c3c",fontSize:E,fontWeight:600,marginBottom:5},children:[K("toStudy",_)," (",W.length,")"]}),b.filter(ae=>o[ae.id]==="unknown").filter(ae=>(d.prereqs[ae.id]??[]).every(ye=>o[ye]==="known")).slice(0,8).map(ae=>{var ye,xe;return y.jsxs("div",{style:{padding:T?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:E,color:"#ff8a8a",lineHeight:1.4},children:[R(ae.id),y.jsx("div",{style:{fontSize:V,color:G.textDim,marginTop:1},children:(xe=D==null?void 0:D[(ye=B[ae.id])==null?void 0:ye.scope])==null?void 0:xe[_==="pl"?"pl":"en"]})]},ae.id)})]}),I.length>0&&y.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:E},children:["✓ ",K("knownList",_)," ",I.length]})]}),!u&&!s&&y.jsxs("div",{style:{marginBottom:10},children:[a&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:E,fontWeight:600,marginBottom:5},children:K("startHere",_)}),y.jsxs("div",{onClick:()=>k==null?void 0:k(a),style:{padding:T?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:E,color:"#a8d4ff",minHeight:T?44:"auto"},children:[y.jsx("div",{style:{fontWeight:600},children:R(a)}),y.jsxs("div",{style:{fontSize:V,color:G.textDim,marginTop:2},children:[(se=D==null?void 0:D[(me=B[a])==null?void 0:me.scope])==null?void 0:se[_==="pl"?"pl":"en"]," · ",K("startHereSub",_)]})]})]}),y.jsx("div",{style:{fontSize:V,color:G.textFaint,marginTop:8,lineHeight:1.5},children:K("clickAnyNode",_)})]}),!u&&s&&r.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#f39c12",fontSize:E,fontWeight:600,marginBottom:5},children:K("whatNext",_)}),r.map(ae=>{var xe,Fe;const ye=ae===a;return y.jsxs("div",{onClick:()=>k==null?void 0:k(ae),style:{padding:T?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:ye?"#4a9eff18":"#f39c1215",border:`1px solid ${ye?"#4a9eff55":"#f39c1240"}`,fontSize:E,color:ye?"#a8d4ff":"#f5d78e",minHeight:T?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{children:R(ae)}),y.jsxs("div",{style:{fontSize:V,color:G.textDim,marginTop:1},children:[(Fe=D==null?void 0:D[(xe=B[ae])==null?void 0:xe.scope])==null?void 0:Fe[_==="pl"?"pl":"en"],ye&&y.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:K("best",_)})]})]}),y.jsx("span",{style:{opacity:.7},children:ye?"★":"→"})]},ae)})]}),!u&&I.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#27ae60",fontSize:E,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",K("knownList",_)," (",I.length,")"]}),I.map(ae=>y.jsx("div",{style:{fontSize:V,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:R(ae.id)},ae.id))]}),!u&&!T&&y.jsxs("div",{style:{marginTop:12,color:G.textFaint,fontSize:V,lineHeight:1.5},children:[K("hintClick",_),y.jsx("br",{}),K("hintShift",_),y.jsx("br",{}),K("hintGreen",_)]})]});return T?y.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:G.textFaint}})}),te]}):y.jsx("div",{style:bx,children:te})}function _x({nodes:o,lang:t,targetNode:r,subgraphIds:s,ddClassification:a,betaBeliefs:u,ddComplete:d,ddNextNodeId:h,questionsAnswered:g,onNodeClick:x,onReset:b,isMobile:_}){const z=Object.fromEntries(o.map(E=>[E.id,E])),k=E=>{var V,te;return t==="pl"?(V=z[E])==null?void 0:V.labelPl:(te=z[E])==null?void 0:te.label},D=s.filter(E=>a[E]==="known"),T=s.filter(E=>a[E]==="unknown"),B=s.filter(E=>a[E]==="uncertain"),R=s.length,I=D.length+T.length,W=R>0?Math.round(I/R*100):0,F=k(r),O=_?11:9,Z=_?{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return y.jsxs("div",{style:Z,children:[_&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:G.textFaint}})}),y.jsxs("div",{style:{fontWeight:700,fontSize:_?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[K("deepDiveHeader",t)," ",d?"✓":""]}),y.jsx("button",{onClick:b,style:{fontSize:O,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${G.textFaint}`,color:G.textDim,minHeight:_?32:"auto"},children:K("reset",t)})]}),y.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[y.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:K("deepDiveTarget",t)}),y.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:F}),y.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[R," ",K("deepDiveNodes",t)]})]}),y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{height:5,borderRadius:3,background:"#10141c",overflow:"hidden",marginBottom:4},children:y.jsx("div",{style:{height:"100%",borderRadius:3,width:`${W}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[y.jsxs("span",{children:[K("classified",t),": ",y.jsxs("span",{style:{color:"#f5f6fa"},children:[I,"/",R]})]}),y.jsxs("span",{children:[K("questions",t),": ",y.jsx("span",{style:{color:"#f5f6fa"},children:g})]})]})]}),d&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:D.length>T.length?"#27ae6018":"#e74c3c18",border:`1px solid ${D.length>T.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:D.length>T.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:K("diagReady",t)}),y.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[K("diagKnown",t),": ",y.jsx("span",{style:{color:"#2ecc71"},children:D.length})," / ",K("diagStudy",t),": ",y.jsx("span",{style:{color:"#ff6b6b"},children:T.length})," / ",K("diagTotal",t),": ",R]})]}),T.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:K("studyThese",t)}),s.filter(E=>a[E]==="unknown").slice(0,8).map(E=>{var V;return y.jsx(Ld,{id:E,label:k(E),scope:(V=z[E])==null?void 0:V.scope,classification:"unknown",beta:u[E]},E)})]}),D.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:K("mastered",t)}),s.filter(E=>a[E]==="known").map(E=>{var V;return y.jsx(Ld,{id:E,label:k(E),scope:(V=z[E])==null?void 0:V.scope,classification:"known",beta:u[E]},E)})]})]}),!d&&y.jsxs(y.Fragment,{children:[h&&y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:K("nextQuestion",t)}),y.jsxs("div",{onClick:()=>x==null?void 0:x(h),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[k(h),y.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[K("confidence",t),": ",kx(u[h])]})]})]}),B.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[K("unclassified",t)," (",B.length,")"]}),B.map(E=>y.jsxs("div",{onClick:()=>x==null?void 0:x(E),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:E===h?"#4a9eff18":"#f39c1212",border:`1px solid ${E===h?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:E===h?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:k(E)}),y.jsx(ep,{beta:u[E]})]},E))]})]})]})}function kx(o){if(!o)return"50%";const t=o.alpha/(o.alpha+o.beta);return`${Math.round(t*100)}%`}function ep({beta:o}){const t=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),a=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return y.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#10141c",overflow:"hidden",flexShrink:0},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:a,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function Ld({id:o,label:t,scope:r,classification:s,beta:a}){const u=s==="known"?"#27ae60":"#e74c3c";return y.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:t}),y.jsx(ep,{beta:a})]})}function zx({lang:o,diagMode:t,SCOPE_COLORS:r,SCOPE_LABELS:s,SECTIONS:a}){const[u,d]=H.useState(!1),h=Object.entries(r).map(([g,x])=>{var b;return{color:x,label:(b=s[g])==null?void 0:b[o==="pl"?"pl":"en"]}});return y.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#161c2895",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[y.jsxs("button",{onClick:()=>d(g=>!g),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[y.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),K("legendTitle",o)]}),u&&y.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[t&&y.jsxs("div",{style:{marginBottom:8},children:[[{color:G.knownHi,label:K("legendKnown",o)},{color:G.unknownHi,label:K("legendUnknown",o)},{color:G.frontier,label:K("legendFrontier",o)},{color:"#4a5568",label:K("legendUnclassified",o)}].map(({color:g,label:x})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),y.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:K("legendScopes",o)}),h.map(({color:g,label:x})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),y.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:K("legendStages",o)}),Object.entries(a).map(([g,x])=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:3,borderRadius:1,background:x.color,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:x.label})]},g))]})]})]})}function Sx({nodes:o,lang:t,onSelect:r,onClose:s,SECTIONS:a,SCOPE_COLORS:u}){const[d,h]=H.useState(""),[g,x]=H.useState(-1),b=H.useRef([]),_=H.useMemo(()=>Object.keys(a??{}),[a]),z=H.useMemo(()=>{const R=d.toLowerCase();return o.filter(I=>!R||I.label.toLowerCase().includes(R)||I.labelPl.toLowerCase().includes(R))},[o,d]),k=H.useMemo(()=>{const R={};for(const W of _)R[W]=[];for(const W of z){const F=W.section??_[0]??"default";R[F]||(R[F]=[]),R[F].push(W)}const I=[];for(const W of _)for(const F of R[W]??[])I.push(F);return I},[z,_]),D=H.useMemo(()=>{const R={};for(const I of _)R[I]=[];for(const I of z){const W=I.section??_[0]??"default";R[W]||(R[W]=[]),R[W].push(I)}return R},[z,_]),T=R=>t==="pl"?R.labelPl:R.label;H.useEffect(()=>{const R=I=>{if(I.key==="Escape"){s();return}I.key==="ArrowDown"&&(I.preventDefault(),x(W=>Math.min(W+1,k.length-1))),I.key==="ArrowUp"&&(I.preventDefault(),x(W=>Math.max(W-1,0))),I.key==="Enter"&&g>=0&&k[g]&&(I.preventDefault(),r(k[g].id))};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[k,g,s,r]),H.useEffect(()=>{g>=0&&b.current[g]&&b.current[g].scrollIntoView({block:"nearest"})},[g]),H.useEffect(()=>{x(-1)},[d]);const B={title:t==="pl"?"Wybierz cel":"Select Goal",subtitle:t==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:t==="pl"?"Szukaj tematu...":"Search topics...",noResults:t==="pl"?"Brak wyników":"No results",footer:`${z.length} / ${o.length} ${t==="pl"?"tematów":"topics"}`,cancel:t==="pl"?"Anuluj":"Cancel"};return y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:R=>{R.target===R.currentTarget&&s()},children:y.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #263248",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:B.title}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:B.subtitle})]}),y.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:y.jsx("input",{autoFocus:!0,value:d,onChange:R=>h(R.target.value),placeholder:B.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#10141c",border:"1px solid #263248",color:"#c8d6e5",outline:"none"}})}),y.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[_.map(R=>{const I=D[R];if(!I||I.length===0)return null;const W=a==null?void 0:a[R];return y.jsxs("div",{style:{marginBottom:12},children:[y.jsx("div",{style:{fontSize:9,fontWeight:700,color:(W==null?void 0:W.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(W==null?void 0:W.label)??R}),y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:I.map(F=>{const O=k.indexOf(F),Z=(u==null?void 0:u[F.scope])??"#4a9eff",E=g===O;return y.jsxs("button",{ref:V=>b.current[O]=V,onClick:()=>r(F.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:E?`${Z}35`:`${Z}15`,border:`1px solid ${E?Z:`${Z}40`}`,color:"#c8d6e5",cursor:"pointer",outline:E?`2px solid ${Z}`:"none",outlineOffset:1},onMouseEnter:V=>{V.currentTarget.style.background=`${Z}30`,V.currentTarget.style.borderColor=`${Z}90`},onMouseLeave:V=>{k.indexOf(F)!==g&&(V.currentTarget.style.background=`${Z}15`,V.currentTarget.style.borderColor=`${Z}40`)},children:[y.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:Z,verticalAlign:"middle"}}),T(F)]},F.id)})})]},R)}),z.length===0&&y.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:B.noResults})]}),y.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:B.footer}),y.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:B.cancel})]})]})})}function jx({isOpen:o,onSelect:t,onClose:r,lang:s="pl"}){const a=[{id:"quick",icon:"⚡",color:"#4a9eff",label:K("modeQuickLabel",s),description:K("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:K("modeDeepLabel",s),description:K("modeDeepDesc",s)}],[u,d]=H.useState(null),h=H.useRef(null);return H.useEffect(()=>{o&&(d(null),setTimeout(()=>{var g;return(g=h.current)==null?void 0:g.focus()},100))},[o]),H.useEffect(()=>{if(!o)return;const g=x=>{x.key==="Escape"&&r(),x.key==="Enter"&&u&&t(u)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[o,u,r,t]),o?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:g=>{g.target===g.currentTarget&&r()},children:y.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #263248"},children:[y.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:K("modePickerTitle",s)}),y.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:K("modePickerSub",s)})]}),y.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:a.map((g,x)=>y.jsxs("button",{ref:x===0?h:null,onClick:()=>d(g.id),onDoubleClick:()=>t(g.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===g.id?`${g.color}18`:"#10141c",border:`1px solid ${u===g.id?g.color:"#263248"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:b=>{b.currentTarget.style.background=`${g.color}18`,b.currentTarget.style.borderColor=`${g.color}60`},onMouseLeave:b=>{u!==g.id&&(b.currentTarget.style.background="#10141c",b.currentTarget.style.borderColor="#263248")},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[y.jsx("span",{style:{fontSize:16},children:g.icon}),y.jsx("span",{style:{fontWeight:600,color:u===g.id?g.color:"#f5f6fa"},children:g.label})]}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:g.description})]},g.id))}),y.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:K("cancel",s)}),y.jsx("button",{onClick:()=>u&&t(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#263248",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:K("next",s)})]})]})}):null}const qx=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function Tx({isOpen:o,onSelect:t,onClose:r,lang:s}){return H.useEffect(()=>{if(!o)return;const a=u=>{u.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,r]),o?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&r()},children:y.jsxs("div",{style:{width:"100%",maxWidth:480,background:G.surface,border:"1px solid #263248",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[y.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:"1px solid #263248",textAlign:"center"},children:[y.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),y.jsx("div",{style:{fontWeight:700,fontSize:18,color:G.textPrimary,marginBottom:8},children:K("onboardingTitle",s)}),y.jsx("div",{style:{fontSize:12,color:G.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:K("onboardingSub",s)})]}),y.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[y.jsx("div",{style:{fontSize:11,color:G.textFaint,marginBottom:2},children:K("onboardingChoose",s)}),qx.map(({id:a,key:u,descKey:d,color:h})=>y.jsxs("button",{onClick:()=>t(a),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${h}0e`,border:`1px solid ${h}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${h}1c`,g.currentTarget.style.borderColor=`${h}70`},onMouseLeave:g=>{g.currentTarget.style.background=`${h}0e`,g.currentTarget.style.borderColor=`${h}30`},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0,marginTop:5}}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontWeight:600,fontSize:13,color:G.textPrimary,marginBottom:3},children:K(u,s)}),y.jsx("div",{style:{fontSize:11,color:G.textDim,lineHeight:1.5},children:K(d,s)})]}),y.jsx("div",{style:{color:h,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},a))]}),y.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:G.textFaint,textAlign:"center"},children:K("onboardingLangHint",s)})]})}):null}function Ax({lang:o,setLang:t,layoutId:r,layouts:s,onLayoutChange:a,searchTerm:u,setSearchTerm:d,filterScope:h,toggleScope:g,clearScope:x,filterSection:b,toggleSection:_,clearSection:z,SECTIONS:k,SCOPE_COLORS:D,SCOPE_LABELS:T,isMobile:B}){const[R,I]=H.useState(!1),W=H.useRef(null);H.useEffect(()=>{if(!R)return;const O=E=>{W.current&&!W.current.contains(E.target)&&I(!1)},Z=E=>{E.key==="Escape"&&I(!1)};return document.addEventListener("mousedown",O),document.addEventListener("keydown",Z),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",Z)}},[R]);const F=h.size+b.size+(u?1:0);return y.jsxs("div",{ref:W,style:{position:"relative"},children:[y.jsxs("button",{onClick:()=>I(O=>!O),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:R||F>0?"1px solid #4a9eff":`1px solid ${G.border}`,background:R?"#4a9eff22":"transparent",color:R||F>0?"#4a9eff":G.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:K("moreOptions",o),children:[y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),F>0&&y.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:F})]}),R&&y.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:B?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:G.surface,border:`1px solid ${G.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("search",o)}),y.jsx("input",{value:u,onChange:O=>d(O.target.value),placeholder:K("search",o),style:{width:"100%",boxSizing:"border-box",background:G.bg,border:`1px solid ${G.border}`,borderRadius:6,color:G.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),y.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(O=>y.jsx("button",{onClick:()=>t(O),style:{...Mi(o===O,O==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:O.toUpperCase()},O))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("layoutLabel",o)}),y.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(O=>y.jsx("button",{onClick:()=>a(O.meta.id),style:{...Mi(r===O.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:O.meta.label},O.meta.id))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("filterSection",o)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Mi(b.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:z,children:K("all",o)}),Object.entries(k).map(([O,Z])=>y.jsx("button",{style:{...Mi(b.has(O),Z.color),fontSize:11,padding:"4px 10px"},onClick:()=>_(O),children:Z.label},O))]})]}),y.jsxs("div",{children:[y.jsx("label",{style:{fontSize:11,color:G.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("filterScope",o)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Mi(h.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:x,children:K("all",o)}),Object.entries(D).map(([O,Z])=>{var E;return y.jsx("button",{style:{...Mi(h.has(O),Z),fontSize:11,padding:"4px 10px"},onClick:()=>g(O),children:(E=T[O])==null?void 0:E[o==="pl"?"pl":"en"]},O)})]})]})]})]})}const Od={x:40,y:40,scale:.72},Hd={x:20,y:20,scale:.42};function Mx({courseId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:d,COURSE_META:h,onBackToCourses:g,initialBelief:x,initialLang:b,onBackToHome:_}){const z=_v(),[k,D]=H.useState(Xd),[T,B]=_t("lang",b??"pl"),[R,I]=H.useState(new Set),[W,F]=H.useState(new Set),[O,Z]=H.useState(""),[E,V]=H.useState(null),[te,me]=H.useState(null),[se,ae]=H.useState(null),[ye,xe]=H.useState(!1),[Fe,Be]=H.useState(!1),Le=!!x,[ue,be]=_t("onboardingSeen",!1),[de,M]=H.useState(!ue&&!Le),Q=H.useCallback(()=>{be(!0),M(!1)},[be]),_e=H.useCallback(Y=>I(Ne=>{const We=new Set(Ne);return We.has(Y)?We.delete(Y):We.add(Y),We}),[]),qe=H.useCallback(Y=>F(Ne=>{const We=new Set(Ne);return We.has(Y)?We.delete(Y):We.add(Y),We}),[]),Se=H.useCallback(()=>I(new Set),[]),De=H.useCallback(()=>F(new Set),[]),he=H.useMemo(()=>Ql(t,r),[t,r]),[je,$e]=H.useState(()=>vl(k,300,t,r)),He=H.useMemo(()=>t.map(Y=>{var Ne,We;return{...Y,x:((Ne=je[Y.id])==null?void 0:Ne.x)??Y.x,y:((We=je[Y.id])==null?void 0:We.y)??Y.y}}),[t,je]),bn=H.useRef(null),{viewTransform:Nt,setViewTransform:tt,toCanvas:Dr,startPan:Er,cursorStyle:tr,setCursorStyle:rr,handleMouseMove:ir,handleMouseUp:kt}=mv(bn),{startNodeDrag:Kn,handleDragMove:Nn,handleDragEnd:oi}=pv(Dr,He,$e,rr),{diagMode:Oe,setDiagMode:rt,mode:un,setMode:Br,quizNode:In,setQuizNode:zt,questionsAnswered:Ii,setAnsweredQuestions:Nr,getAnsweredIndices:Ir,handleDiagClick:Io,handleQuizAnswer:Fo,resetDiagnostic:St,startDeepDive:Fi,targetNode:It,belief:si,setBelief:Li,frontier:Oi,visibleFrontier:ai,hasStarted:jt,nextSuggestedId:ft,expectedRemaining:Lo,pCorrect:Oo,sessionComplete:li,betaBeliefs:Ho,subgraphIds:or,ddClassification:sr,ddNextNodeId:Fr,ddComplete:Ft}=wv(he,s,o);H.useEffect(()=>{x&&Object.keys(x).length>0&&Li(x)},[]);const Hi=H.useCallback(Y=>{Y.lang&&B(Y.lang),Y.view==="node"?(V(Y.nodeId),ae(null)):Y.view==="resource"?(V(Y.nodeId),ae(Y.resourceIndex)):Y.view==="diagnostic"?Y.mode==="quick"?(rt(!0),Br("quick"),V(null)):Y.mode==="deepdive"&&Y.goalNode&&(rt(!0),Fi(Y.goalNode)):(V(null),ae(null))},[B,rt,Br,Fi]),{setRoute:it}=Sv(Hi);H.useEffect(()=>{Oe?it(un==="deepdive"&&It?{view:"diagnostic",mode:"deepdive",goalNode:It,lang:T}:{view:"diagnostic",mode:"quick",lang:T}):E?se!=null?it({view:"resource",nodeId:E,resourceIndex:se,lang:T}):it({view:"node",nodeId:E,lang:T}):it({view:"graph",lang:T})},[E,se,Oe,un,It,T,it]);const Ts=H.useMemo(()=>{const Y=O.toLowerCase(),Ne=t.filter(We=>!(R.size>0&&!R.has(We.scope)||W.size>0&&!W.has(We.section)||Y&&!We.label.toLowerCase().includes(Y)&&!We.labelPl.toLowerCase().includes(Y)));return Ne.length<t.length?new Set(Ne.map(We=>We.id)):null},[t,R,W,O]),ht=E||te,Lr=H.useMemo(()=>{var Ne,We;if(!ht)return null;const Y=new Set([ht]);return(Ne=he.prereqs[ht])==null||Ne.forEach(ar=>Y.add(ar)),(We=he.dependents[ht])==null||We.forEach(ar=>Y.add(ar)),Y},[ht,he]),Or=H.useMemo(()=>!Oe||un!=="deepdive"||or.length===0?null:new Set(or),[Oe,un,or]),Wi=H.useCallback(Y=>{const Ne=Y.target.closest("[data-node-id]");if(Ne){Kn(Ne.getAttribute("data-node-id"),Y.clientX,Y.clientY),Y.stopPropagation();return}Er(Y.clientX,Y.clientY)},[Kn,Er]),As=H.useCallback(Y=>{Nn(Y.clientX,Y.clientY)||ir(Y)},[Nn,ir]),Wo=H.useCallback(()=>{oi(),kt()},[oi,kt]),Ms=H.useCallback(Y=>{z&&!Y.target.closest("[data-node-id]")&&V(null)},[z]),Qn=H.useRef(!1);H.useEffect(()=>{if(!(!Oe||un!=="quick")&&!In&&ft&&!li&&jt&&Qn.current){Qn.current=!1;const Y=setTimeout(()=>zt(ft),400);return()=>clearTimeout(Y)}},[Oe,un,In,ft,li,jt]),H.useEffect(()=>{if(!(!Oe||un!=="deepdive")&&!In&&Fr&&!Ft&&Qn.current){Qn.current=!1;const Y=setTimeout(()=>zt(Fr),400);return()=>clearTimeout(Y)}},[Oe,un,In,Fr,Ft]),H.useEffect(()=>{const Y=Ne=>{Ne.key==="Escape"&&(V(null),xe(!1))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[]);const Go=H.useCallback(Y=>{D(Y),$e(vl(Y,300,t,r)),tt(z?Hd:Od)},[tt,t,r,z]),Uo=H.useCallback(()=>{Oe?(rt(!1),St(),V(null)):Be(!0)},[Oe,rt,St]),Gi=H.useCallback(Y=>{Be(!1),St(),Y==="deepdive"?(rt(!0),xe(!0)):(rt(!0),Br("quick"),V(null))},[rt,Br,St]),Vo=H.useCallback(Y=>{be(!0),M(!1),(Y==="quick"||Y==="deepdive")&&Gi(Y)},[be,Gi]),Ko=H.useMemo(()=>{if(un!=="deepdive")return{};const Y={};for(const[Ne,We]of Object.entries(sr))We==="known"?Y[Ne]="known":We==="unknown"&&(Y[Ne]="unknown");return Y},[un,sr]),Ui=un==="deepdive"?Ko:si,Qo=un==="deepdive"?or.filter(Y=>sr[Y]==="uncertain"):ai,Ps=T==="pl"?h.title??h.titleEn:h.titleEn??h.title,Cs=de||Fe||ye,nn=(Y,Ne="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:Y?`1px solid ${Ne}`:`1px solid ${G.border}`,background:Y?`${Ne}22`:"transparent",color:Y?Ne:G.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:Y?600:400});return y.jsxs("div",{style:{width:"100%",height:"100dvh",background:G.bg,fontFamily:hn,color:G.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:z?"8px 12px":"8px 16px",borderBottom:`1px solid ${G.borderSubtle}`,display:"flex",alignItems:"center",gap:z?8:10,flexShrink:0},children:[(_||g)&&y.jsx("button",{onClick:_??g,style:{...nn(!1),padding:"7px 10px"},children:"←"}),y.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:G.textPrimary,letterSpacing:z?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:Ps}),y.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${G.border}`},children:[y.jsx("button",{onClick:()=>{Oe&&(rt(!1),St(),V(null))},style:{padding:z?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Oe?400:700,background:Oe?"transparent":"#4a9eff22",color:Oe?G.textDim:"#4a9eff"},children:K("exploreMode",T)}),y.jsx("button",{onClick:()=>{Oe||Be(!0)},style:{padding:z?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${G.border}`,fontWeight:Oe?700:400,background:Oe?"#f39c1222":"transparent",color:Oe?"#f39c12":G.textDim},children:K(Oe?un==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",T)})]}),Oe&&y.jsx("button",{onClick:()=>xe(!0),style:nn(un==="deepdive","#8e44ad"),children:K("goalBtn",T)}),y.jsx(Ax,{lang:T,setLang:Y=>B(Y),layoutId:k,layouts:Yd,onLayoutChange:Go,searchTerm:O,setSearchTerm:Z,filterScope:R,toggleScope:_e,clearScope:Se,filterSection:W,toggleSection:qe,clearSection:De,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:d,isMobile:z})]}),y.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[y.jsxs("svg",{ref:bn,width:"100%",height:"100%",style:{cursor:tr,touchAction:"none",pointerEvents:Cs?"none":"auto"},onMouseDown:Wi,onMouseMove:As,onMouseUp:Wo,onMouseLeave:Wo,onClick:Y=>{if(Ms(Y),!Oe)return;const Ne=Y.target.closest("[data-node-id]");Ne&&Io(Ne.getAttribute("data-node-id"),Y.shiftKey)},children:[y.jsxs("defs",{children:[y.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),y.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),y.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#151b26"})})]}),y.jsxs("g",{transform:`translate(${Nt.x},${Nt.y}) scale(${Nt.scale})`,children:[y.jsx(jv,{edges:r,nodes:He,highlightedIds:Oe&&un==="deepdive"?Or:Lr}),y.jsx(Av,{nodes:He,filteredIds:Oe&&un==="deepdive"?Or:Ts,highlightedIds:Oe?null:Lr,selected:E,onSelect:Y=>{if(Oe){Io(Y,!1);return}ae(null),V(Y===E?null:Y)},onHover:me,lang:T,diagMode:Oe,belief:Ui,frontier:Qo,scale:Nt.scale,scopeColors:u})]})]}),E&&!Oe&&y.jsx(Pv,{nodeId:E,nodes:He,adjacency:he,lang:T,SCOPE_COLORS:u,SCOPE_LABELS:d,SECTIONS:a,belief:Ui,onClose:()=>V(null),onNavigate:Y=>V(Y)}),Oe&&In&&y.jsx($x,{nodeId:In,nodes:He,lang:T,questionBank:s,excludeIndices:Ir(In),isMobile:z,onAnswer:(Y,Ne,We)=>{Qn.current=!0,Fo(In,Y,Ne,We)},onSkip:Y=>{typeof Y=="number"&&Nr(Ne=>new Set([...Ne,`${In}:${Y}`])),zt(null)}}),Oe&&un==="quick"&&y.jsx(wx,{belief:si,frontier:Oi,visibleFrontier:ai,hasStarted:jt,nextSuggestedId:ft,sessionComplete:li,adjacency:he,expectedRemaining:Lo,pCorrect:Oo,questionsAnswered:Ii,nodes:He,lang:T,onNodeClick:Y=>zt(Y),onReset:St,SCOPE_LABELS:d,isMobile:z}),Oe&&un==="deepdive"&&It&&y.jsx(_x,{nodes:He,lang:T,targetNode:It,subgraphIds:or,ddClassification:sr,betaBeliefs:Ho,ddComplete:Ft,ddNextNodeId:Fr,questionsAnswered:Ii,onNodeClick:Y=>zt(Y),onReset:St,isMobile:z}),!z&&y.jsx(zx,{lang:T,diagMode:Oe,SCOPE_COLORS:u,SCOPE_LABELS:d,SECTIONS:a}),y.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([Y,Ne])=>y.jsx("button",{onClick:()=>{Ne===null?($e(vl(k,300,t,r)),tt(z?Hd:Od)):tt(We=>({...We,scale:Math.max(.15,Math.min(5,We.scale*Ne))}))},style:{width:44,height:44,background:G.surface,border:`1px solid ${G.border}`,color:G.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:Y},Y))}),z&&Oe&&!In&&y.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${G.surface}ee`,borderTop:`1px solid ${G.border}`,display:"flex",gap:0,zIndex:20},children:[y.jsx("button",{onClick:()=>xe(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${G.border}`,color:un==="deepdive"?"#c39bd3":G.textDim,cursor:"pointer"},children:K("goalBtn",T)}),y.jsx("button",{onClick:Uo,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:K("reset",T)})]})]}),ye&&y.jsx(Sx,{nodes:He,lang:T,SECTIONS:a,SCOPE_COLORS:u,onSelect:Y=>{xe(!1),Fi(Y)},onClose:()=>xe(!1)}),y.jsx(jx,{isOpen:Fe,onSelect:Gi,onClose:()=>Be(!1),lang:T}),y.jsx(Tx,{isOpen:de,onSelect:Vo,onClose:Q,lang:T})]})}function Px({lang:o,setLang:t,onStartQuiz:r,onBrowseMap:s}){const[a,u]=H.useState("standard");return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:hn,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[y.jsx("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${G.border}`},children:["pl","en"].map(d=>y.jsx("button",{onClick:()=>t(d),style:{padding:"6px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:d==="en"?`1px solid ${G.border}`:"none",background:o===d?"#4a9eff18":"transparent",color:o===d?"#4a9eff":G.textDim,fontWeight:o===d?600:400,fontFamily:hn},children:d.toUpperCase()},d))}),y.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[y.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:G.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:G.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:G.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:G.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:G.edgeDefault,strokeWidth:"1.5"}),y.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),y.jsx("circle",{cx:"14",cy:"44",r:"5",fill:G.known,opacity:"0.8"}),y.jsx("circle",{cx:"40",cy:"44",r:"5",fill:G.frontier,opacity:"0.8"}),y.jsx("circle",{cx:"66",cy:"44",r:"5",fill:G.unknown,opacity:"0.6"})]}),y.jsx("div",{style:{fontSize:13,fontWeight:600,color:G.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:G.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:K("heroTitle",o)}),y.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:G.textDim,maxWidth:360},children:K("heroSub",o)}),y.jsx("button",{onClick:()=>r(a),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:hn,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:d=>{d.currentTarget.style.background="#4a9eff28",d.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:d=>{d.currentTarget.style.background="#4a9eff18",d.currentTarget.style.borderColor="#4a9eff50"},children:K("heroStart",o)}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,fontSize:12},children:[y.jsx("span",{style:{color:G.textFaint},children:K("heroLength",o)}),y.jsx("select",{value:a,onChange:d=>u(d.target.value),style:{background:G.surface,border:`1px solid ${G.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:hn,color:G.textBody,cursor:"pointer",outline:"none"},children:Object.entries(El).map(([d,h])=>y.jsxs("option",{value:d,children:[K(h.labelKey,o)," (~",h.maxQuestions," ",K("heroQuestions",o),")"]},d))})]}),y.jsx("button",{onClick:s,style:{padding:"12px 24px",fontSize:13,fontFamily:hn,borderRadius:8,border:"none",background:"transparent",color:G.textDim,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:d=>{d.currentTarget.style.color=G.textBody},onMouseLeave:d=>{d.currentTarget.style.color=G.textDim},children:K("heroBrowse",o)}),y.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:G.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:K("heroStep1",o)},{num:"2",text:K("heroStep2",o)},{num:"3",text:K("heroStep3",o)}].map(({num:d,text:h})=>y.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[y.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${G.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:G.textDim,flexShrink:0},children:d}),y.jsx("span",{children:h})]},d))})]})]})}function Cx({RAW_NODES:o,RAW_EDGES:t,QUESTION_BANK:r,lang:s,quizPreset:a="standard",onComplete:u,onExit:d}){var Se,De;const h=El[a]??El.standard,g=H.useMemo(()=>Ql(o,t),[o,t]),x=H.useMemo(()=>[...new Set([...Object.keys(g.prereqs),...Object.keys(g.dependents),...Object.keys(r)])].map(je=>({id:je})),[g,r]),b=H.useMemo(()=>Object.fromEntries(o.map(he=>[he.id,he])),[o]),[_,z]=H.useState({}),[k,D]=H.useState({correct:0,incorrect:0,questionsAnswered:0}),[T,B]=H.useState(new Set),[R,I]=H.useState("answering"),[W,F]=H.useState(null),[O,Z]=H.useState(0),E=H.useMemo(()=>{const he=k.correct+k.incorrect;return he===0?.5:(k.correct+.5)/(he+1)},[k]),V=H.useMemo(()=>em(x,_,g,E),[x,_,g,E]),te=H.useMemo(()=>{const he=[];return T.forEach(je=>{const[$e,He]=je.split(":");$e===V&&he.push(parseInt(He,10))}),he},[T,V]),me=H.useMemo(()=>V?Kd(r,V,te):null,[r,V,te]),se=H.useMemo(()=>me?Do.random(me.options.length):null,[me]),ae=H.useMemo(()=>se?se.apply(me.options):[],[se,me]),ye=H.useMemo(()=>se?se.displayIndex(me.correct):-1,[se,me]),xe=H.useMemo(()=>rm(x,_,k.questionsAnswered,h),[x,_,k.questionsAnswered,h]);H.useEffect(()=>{xe&&k.questionsAnswered>0&&I("done")},[xe,k.questionsAnswered]);const Fe=H.useCallback(()=>{W!==null&&I("revealed")},[W]),Be=H.useCallback(()=>{const he=W===ye,je=(me==null?void 0:me.tests)??{[V]:1};z($e=>Dl(V,he,je,$e,g)),(me==null?void 0:me.index)!=null&&B($e=>new Set([...$e,`${V}:${me.index}`])),D($e=>({correct:$e.correct+(he?1:0),incorrect:$e.incorrect+(he?0:1),questionsAnswered:$e.questionsAnswered+1})),F(null),I("answering"),Z($e=>$e+1)},[W,ye,me,V,g]),Le=H.useCallback(he=>{const je={[V]:1};z($e=>Dl(V,he,je,$e,g)),B($e=>new Set([...$e,`${V}:-1`])),D($e=>({correct:$e.correct+(he?1:0),incorrect:$e.incorrect+(he?0:1),questionsAnswered:$e.questionsAnswered+1})),Z($e=>$e+1)},[V,g]);H.useEffect(()=>{const he=je=>{if(je.key==="Enter"&&(R==="answering"&&W!==null?Fe():R==="revealed"&&Be()),R==="answering"&&["1","2","3","4"].includes(je.key)){const $e=parseInt(je.key)-1;$e<ae.length&&F($e)}};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)},[R,W,Fe,Be,ae.length]),H.useEffect(()=>{R==="done"&&u(_,k)},[R]);const ue=V?(s==="pl"?(Se=b[V])==null?void 0:Se.labelPl:(De=b[V])==null?void 0:De.label)??V:"",be=he=>y.jsx("span",{dangerouslySetInnerHTML:{__html:Jm(he)}});if(R==="done"||!V&&k.questionsAnswered>0)return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:hn,display:"flex",alignItems:"center",justifyContent:"center",color:G.textDim,fontSize:14},children:[K("quizContinue",s),"..."]});const de=Object.values(_).filter(he=>he==="known").length,M=Object.values(_).filter(he=>he==="unknown").length,Q=de+M,_e=x.length,qe=_e>0?Math.round(Q/_e*100):0;return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:hn,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[y.jsxs("div",{style:{width:"100%",maxWidth:520,padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("button",{onClick:d,style:{padding:"6px 12px",fontSize:12,fontFamily:hn,borderRadius:6,border:`1px solid ${G.border}`,background:"transparent",color:G.textDim,cursor:"pointer"},children:K("quizExit",s)}),y.jsxs("span",{style:{fontSize:12,color:G.textFaint},children:[K("quizQuestion",s)," ",k.questionsAnswered+1]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:520,marginTop:16},children:[y.jsx("div",{style:{height:3,borderRadius:2,background:G.border,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${qe}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:G.textFaint},children:[y.jsxs("span",{children:[Q,"/",_e," ",K("quizClassified",s)]}),y.jsxs("span",{children:[Math.round(E*100),"% ",K("quizAccuracy",s)]})]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:520,marginTop:40,animation:"fadeIn 0.25s ease"},children:[y.jsx("div",{style:{fontSize:11,color:G.textFaint,marginBottom:16,letterSpacing:.5},children:ue}),me?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:16,color:G.textPrimary,lineHeight:1.7,marginBottom:28},children:be(me.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:ae.map((he,je)=>{let $e="transparent",He=G.border,bn=G.textBody;return W===je&&R==="answering"&&($e="#4a9eff12",He="#4a9eff60",bn="#4a9eff"),R==="revealed"&&(je===ye?($e="#27ae6015",He="#27ae6060",bn="#2ecc71"):je===W?($e="#e74c3c15",He="#e74c3c60",bn="#ff6b6b"):bn=G.textFaint),y.jsxs("button",{onClick:()=>{R==="answering"&&F(je)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:hn,cursor:R==="answering"?"pointer":"default",background:$e,border:`1px solid ${He}`,color:bn,lineHeight:1.6,transition:"all 0.15s ease"},children:[y.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][je]}),be(he)]},je)})}),R==="revealed"&&me.hint&&y.jsx("div",{style:{fontSize:12,color:G.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${G.border}`},children:be(me.hint)}),R==="answering"?y.jsxs("button",{onClick:Fe,disabled:W===null,style:{...cs("#4a9eff"),width:"100%",opacity:W===null?.3:1},children:[K("quizCheck",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):y.jsxs("button",{onClick:Be,style:{...cs(W===ye?G.known:"#4a9eff"),width:"100%"},children:[K("quizContinue",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):y.jsxs("div",{children:[y.jsx("p",{style:{fontSize:15,color:G.textBody,lineHeight:1.7,marginBottom:24},children:K("quizNoQuestion",s)}),y.jsxs("div",{style:{display:"flex",gap:10},children:[y.jsx("button",{onClick:()=>Le(!0),style:{...cs(G.known),flex:1},children:K("quizYes",s)}),y.jsx("button",{onClick:()=>Le(!1),style:{...cs(G.unknown),flex:1},children:K("quizNo",s)})]})]})]},O),y.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function cs(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:hn,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function Rx({RAW_NODES:o,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:s,belief:a,stats:u,lang:d,onSeeMap:h,onRetake:g}){const x=H.useMemo(()=>Ql(o,t),[o,t]),b=H.useMemo(()=>Object.fromEntries(o.map(I=>[I.id,I])),[o]),_=I=>{var W,F;return d==="pl"?(W=b[I])==null?void 0:W.labelPl:(F=b[I])==null?void 0:F.label},z=o.filter(I=>a[I.id]==="known"),k=o.filter(I=>a[I.id]==="unknown"),D=o.length,T=H.useMemo(()=>k.filter(I=>(x.prereqs[I.id]??[]).every(W=>a[W]==="known")).slice(0,8),[k,x,a]),B=u.correct+u.incorrect>0?Math.round((u.correct+.5)/(u.correct+u.incorrect+1)*100):50,R=T.length>0;return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:G.bg,fontFamily:hn,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:y.jsxs("div",{style:{maxWidth:520,width:"100%"},children:[y.jsx("div",{style:{fontSize:11,color:G.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:G.textPrimary,lineHeight:1.3},children:K("resultsTitle",d)}),y.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:G.textDim,lineHeight:1.6},children:[u.questionsAnswered," ",K("resultsAnswered",d)," · ",B,"% ",K("resultsAccuracy",d)]}),y.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[y.jsx(Wd,{count:z.length,label:K("resultsKnown",d),color:G.known,total:D}),y.jsx(Wd,{count:k.length,label:K("resultsToStudy",d),color:"#e74c3c",total:D})]}),R&&y.jsxs("div",{style:{marginBottom:32},children:[y.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:G.textPrimary},children:K("resultsGapsTitle",d)}),y.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:G.textDim,lineHeight:1.6},children:K("resultsGapsSub",d)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:T.map((I,W)=>{var E;const F=(r==null?void 0:r[I.scope])??G.textDim,O=((E=s==null?void 0:s[I.scope])==null?void 0:E[d==="pl"?"pl":"en"])??"",Z=I.resources&&I.resources.length>0;return y.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12},children:[y.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${F}18`,border:`1px solid ${F}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:F,flexShrink:0,fontWeight:600},children:W+1}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:G.textPrimary,fontWeight:500},children:_(I.id)}),y.jsxs("div",{style:{fontSize:10,color:G.textFaint,marginTop:2},children:[O,Z&&y.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:K("resultsHasResource",d)})]})]})]},I.id)})}),k.length>T.length&&y.jsxs("div",{style:{marginTop:8,fontSize:11,color:G.textFaint},children:["+",k.length-T.length," ",K("resultsMore",d)]})]}),!R&&k.length===0&&y.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:15,color:G.known,fontWeight:600,marginBottom:4},children:K("resultsAllGood",d)}),y.jsx("div",{style:{fontSize:12,color:G.textDim},children:K("resultsAllGoodSub",d)})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[y.jsx("button",{onClick:h,style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:hn,borderRadius:8,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer"},children:K("resultsSeeMap",d)}),y.jsx("button",{onClick:g,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:hn,borderRadius:8,border:`1px solid ${G.border}`,background:"transparent",color:G.textDim,cursor:"pointer"},children:K("resultsRetake",d)})]})]})})}function Wd({count:o,label:t,color:r,total:s}){const a=s>0?Math.round(o/s*100):0;return y.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),y.jsx("div",{style:{fontSize:11,color:G.textFaint,marginTop:6},children:t}),y.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${a}%`,background:r,opacity:.6}})}),y.jsxs("div",{style:{fontSize:10,color:G.textFaint,marginTop:4},children:[a,"% of ",s]})]})}function Dx(){const o=G7,t=W7[o],[r,s]=_t("lang","pl"),[a,u]=H.useState("hero"),[d,h]=H.useState(null),[g,x]=H.useState(null),[b,_]=H.useState("standard"),z=H.useCallback((R="standard")=>{_(R),h(null),x(null),u("quiz")},[]),k=H.useCallback((R,I)=>{h(R),x(I),u("results")},[]),D=H.useCallback(()=>{u("map")},[]),T=H.useCallback(()=>{h(null),x(null),u("map")},[]),B=H.useCallback(()=>{u("hero")},[]);if(!t)return null;switch(a){case"hero":return y.jsx(Px,{lang:r,setLang:s,onStartQuiz:z,onBrowseMap:T});case"quiz":return y.jsx(Cx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:b,onComplete:k,onExit:B});case"results":return y.jsx(Rx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:d,stats:g,lang:r,onSeeMap:D,onRetake:z});case"map":return y.jsx(Mx,{courseId:o,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:d,initialLang:r,onBackToHome:B},o);default:return null}}Zf.createRoot(document.getElementById("root")).render(y.jsx(H.StrictMode,{children:y.jsx(Dx,{})}));
