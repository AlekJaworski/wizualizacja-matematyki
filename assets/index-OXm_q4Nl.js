(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();var sl={exports:{}},ko={},al={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function Cp(){if(P1)return Pe;P1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),$=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=$&&j[$]||j["@@iterator"],typeof j=="function"?j:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function I(j,U,xe){this.props=j,this.context=U,this.refs=R,this.updater=xe||q}I.prototype.isReactComponent={},I.prototype.setState=function(j,U){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,U,"setState")},I.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function P(){}P.prototype=I.prototype;function W(j,U,xe){this.props=j,this.context=U,this.refs=R,this.updater=xe||q}var G=W.prototype=new P;G.constructor=W,E(G,I.prototype),G.isPureReactComponent=!0;var L=Array.isArray,F=Object.prototype.hasOwnProperty,V={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function H(j,U,xe){var _e,ke={},Ce=null,Re=null;if(U!=null)for(_e in U.ref!==void 0&&(Re=U.ref),U.key!==void 0&&(Ce=""+U.key),U)F.call(U,_e)&&!N.hasOwnProperty(_e)&&(ke[_e]=U[_e]);var Be=arguments.length-2;if(Be===1)ke.children=xe;else if(1<Be){for(var Ie=Array(Be),ft=0;ft<Be;ft++)Ie[ft]=arguments[ft+2];ke.children=Ie}if(j&&j.defaultProps)for(_e in Be=j.defaultProps,Be)ke[_e]===void 0&&(ke[_e]=Be[_e]);return{$$typeof:o,type:j,key:Ce,ref:Re,props:ke,_owner:V.current}}function J(j,U){return{$$typeof:o,type:j.type,key:U,ref:j.ref,props:j.props,_owner:j._owner}}function be(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function ge(j){var U={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(xe){return U[xe]})}var ce=/\/+/g;function pe(j,U){return typeof j=="object"&&j!==null&&j.key!=null?ge(""+j.key):U.toString(36)}function qe(j,U,xe,_e,ke){var Ce=typeof j;(Ce==="undefined"||Ce==="boolean")&&(j=null);var Re=!1;if(j===null)Re=!0;else switch(Ce){case"string":case"number":Re=!0;break;case"object":switch(j.$$typeof){case o:case n:Re=!0}}if(Re)return Re=j,ke=ke(Re),j=_e===""?"."+pe(Re,0):_e,L(ke)?(xe="",j!=null&&(xe=j.replace(ce,"$&/")+"/"),qe(ke,U,xe,"",function(ft){return ft})):ke!=null&&(be(ke)&&(ke=J(ke,xe+(!ke.key||Re&&Re.key===ke.key?"":(""+ke.key).replace(ce,"$&/")+"/")+j)),U.push(ke)),1;if(Re=0,_e=_e===""?".":_e+":",L(j))for(var Be=0;Be<j.length;Be++){Ce=j[Be];var Ie=_e+pe(Ce,Be);Re+=qe(Ce,U,xe,Ie,ke)}else if(Ie=k(j),typeof Ie=="function")for(j=Ie.call(j),Be=0;!(Ce=j.next()).done;)Ce=Ce.value,Ie=_e+pe(Ce,Be++),Re+=qe(Ce,U,xe,Ie,ke);else if(Ce==="object")throw U=String(j),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return Re}function Ue(j,U,xe){if(j==null)return j;var _e=[],ke=0;return qe(j,_e,"","",function(Ce){return U.call(xe,Ce,ke++)}),_e}function Ke(j){if(j._status===-1){var U=j._result;U=U(),U.then(function(xe){(j._status===0||j._status===-1)&&(j._status=1,j._result=xe)},function(xe){(j._status===0||j._status===-1)&&(j._status=2,j._result=xe)}),j._status===-1&&(j._status=0,j._result=U)}if(j._status===1)return j._result.default;throw j._result}var Fe={current:null},ae={transition:null},$e={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ae,ReactCurrentOwner:V};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Ue,forEach:function(j,U,xe){Ue(j,function(){U.apply(this,arguments)},xe)},count:function(j){var U=0;return Ue(j,function(){U++}),U},toArray:function(j){return Ue(j,function(U){return U})||[]},only:function(j){if(!be(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Pe.Component=I,Pe.Fragment=r,Pe.Profiler=l,Pe.PureComponent=W,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$e,Pe.act=ue,Pe.cloneElement=function(j,U,xe){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var _e=E({},j.props),ke=j.key,Ce=j.ref,Re=j._owner;if(U!=null){if(U.ref!==void 0&&(Ce=U.ref,Re=V.current),U.key!==void 0&&(ke=""+U.key),j.type&&j.type.defaultProps)var Be=j.type.defaultProps;for(Ie in U)F.call(U,Ie)&&!N.hasOwnProperty(Ie)&&(_e[Ie]=U[Ie]===void 0&&Be!==void 0?Be[Ie]:U[Ie])}var Ie=arguments.length-2;if(Ie===1)_e.children=xe;else if(1<Ie){Be=Array(Ie);for(var ft=0;ft<Ie;ft++)Be[ft]=arguments[ft+2];_e.children=Be}return{$$typeof:o,type:j.type,key:ke,ref:Ce,props:_e,_owner:Re}},Pe.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:u,_context:j},j.Consumer=j},Pe.createElement=H,Pe.createFactory=function(j){var U=H.bind(null,j);return U.type=j,U},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(j){return{$$typeof:h,render:j}},Pe.isValidElement=be,Pe.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:Ke}},Pe.memo=function(j,U){return{$$typeof:y,type:j,compare:U===void 0?null:U}},Pe.startTransition=function(j){var U=ae.transition;ae.transition={};try{j()}finally{ae.transition=U}},Pe.unstable_act=ue,Pe.useCallback=function(j,U){return Fe.current.useCallback(j,U)},Pe.useContext=function(j){return Fe.current.useContext(j)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(j){return Fe.current.useDeferredValue(j)},Pe.useEffect=function(j,U){return Fe.current.useEffect(j,U)},Pe.useId=function(){return Fe.current.useId()},Pe.useImperativeHandle=function(j,U,xe){return Fe.current.useImperativeHandle(j,U,xe)},Pe.useInsertionEffect=function(j,U){return Fe.current.useInsertionEffect(j,U)},Pe.useLayoutEffect=function(j,U){return Fe.current.useLayoutEffect(j,U)},Pe.useMemo=function(j,U){return Fe.current.useMemo(j,U)},Pe.useReducer=function(j,U,xe){return Fe.current.useReducer(j,U,xe)},Pe.useRef=function(j){return Fe.current.useRef(j)},Pe.useState=function(j){return Fe.current.useState(j)},Pe.useSyncExternalStore=function(j,U,xe){return Fe.current.useSyncExternalStore(j,U,xe)},Pe.useTransition=function(){return Fe.current.useTransition()},Pe.version="18.3.1",Pe}var D1;function Il(){return D1||(D1=1,al.exports=Cp()),al.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function Ep(){if(N1)return ko;N1=1;var o=Il(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function m(h,g,y){var b,$={},k=null,q=null;y!==void 0&&(k=""+y),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(q=g.ref);for(b in g)s.call(g,b)&&!u.hasOwnProperty(b)&&($[b]=g[b]);if(h&&h.defaultProps)for(b in g=h.defaultProps,g)$[b]===void 0&&($[b]=g[b]);return{$$typeof:n,type:h,key:k,ref:q,props:$,_owner:l.current}}return ko.Fragment=r,ko.jsx=m,ko.jsxs=m,ko}var B1;function Rp(){return B1||(B1=1,sl.exports=Ep()),sl.exports}var _=Rp(),K=Il(),U0={},ll={exports:{}},Lt={},ul={exports:{}},cl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function Pp(){return I1||(I1=1,(function(o){function n(ae,$e){var ue=ae.length;ae.push($e);e:for(;0<ue;){var j=ue-1>>>1,U=ae[j];if(0<l(U,$e))ae[j]=$e,ae[ue]=U,ue=j;else break e}}function r(ae){return ae.length===0?null:ae[0]}function s(ae){if(ae.length===0)return null;var $e=ae[0],ue=ae.pop();if(ue!==$e){ae[0]=ue;e:for(var j=0,U=ae.length,xe=U>>>1;j<xe;){var _e=2*(j+1)-1,ke=ae[_e],Ce=_e+1,Re=ae[Ce];if(0>l(ke,ue))Ce<U&&0>l(Re,ke)?(ae[j]=Re,ae[Ce]=ue,j=Ce):(ae[j]=ke,ae[_e]=ue,j=_e);else if(Ce<U&&0>l(Re,ue))ae[j]=Re,ae[Ce]=ue,j=Ce;else break e}}return $e}function l(ae,$e){var ue=ae.sortIndex-$e.sortIndex;return ue!==0?ue:ae.id-$e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var m=Date,h=m.now();o.unstable_now=function(){return m.now()-h}}var g=[],y=[],b=1,$=null,k=3,q=!1,E=!1,R=!1,I=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(ae){for(var $e=r(y);$e!==null;){if($e.callback===null)s(y);else if($e.startTime<=ae)s(y),$e.sortIndex=$e.expirationTime,n(g,$e);else break;$e=r(y)}}function L(ae){if(R=!1,G(ae),!E)if(r(g)!==null)E=!0,Ke(F);else{var $e=r(y);$e!==null&&Fe(L,$e.startTime-ae)}}function F(ae,$e){E=!1,R&&(R=!1,P(H),H=-1),q=!0;var ue=k;try{for(G($e),$=r(g);$!==null&&(!($.expirationTime>$e)||ae&&!ge());){var j=$.callback;if(typeof j=="function"){$.callback=null,k=$.priorityLevel;var U=j($.expirationTime<=$e);$e=o.unstable_now(),typeof U=="function"?$.callback=U:$===r(g)&&s(g),G($e)}else s(g);$=r(g)}if($!==null)var xe=!0;else{var _e=r(y);_e!==null&&Fe(L,_e.startTime-$e),xe=!1}return xe}finally{$=null,k=ue,q=!1}}var V=!1,N=null,H=-1,J=5,be=-1;function ge(){return!(o.unstable_now()-be<J)}function ce(){if(N!==null){var ae=o.unstable_now();be=ae;var $e=!0;try{$e=N(!0,ae)}finally{$e?pe():(V=!1,N=null)}}else V=!1}var pe;if(typeof W=="function")pe=function(){W(ce)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Ue=qe.port2;qe.port1.onmessage=ce,pe=function(){Ue.postMessage(null)}}else pe=function(){I(ce,0)};function Ke(ae){N=ae,V||(V=!0,pe())}function Fe(ae,$e){H=I(function(){ae(o.unstable_now())},$e)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ae){ae.callback=null},o.unstable_continueExecution=function(){E||q||(E=!0,Ke(F))},o.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<ae?Math.floor(1e3/ae):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_getFirstCallbackNode=function(){return r(g)},o.unstable_next=function(ae){switch(k){case 1:case 2:case 3:var $e=3;break;default:$e=k}var ue=k;k=$e;try{return ae()}finally{k=ue}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ae,$e){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var ue=k;k=ae;try{return $e()}finally{k=ue}},o.unstable_scheduleCallback=function(ae,$e,ue){var j=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?j+ue:j):ue=j,ae){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=ue+U,ae={id:b++,callback:$e,priorityLevel:ae,startTime:ue,expirationTime:U,sortIndex:-1},ue>j?(ae.sortIndex=ue,n(y,ae),r(g)===null&&ae===r(y)&&(R?(P(H),H=-1):R=!0,Fe(L,ue-j))):(ae.sortIndex=U,n(g,ae),E||q||(E=!0,Ke(F))),ae},o.unstable_shouldYield=ge,o.unstable_wrapCallback=function(ae){var $e=k;return function(){var ue=k;k=$e;try{return ae.apply(this,arguments)}finally{k=ue}}}})(cl)),cl}var F1;function Dp(){return F1||(F1=1,ul.exports=Pp()),ul.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function Np(){if(L1)return Lt;L1=1;var o=Il(),n=Dp();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},$={};function k(e){return g.call($,e)?!0:g.call(b,e)?!1:y.test(e)?$[e]=!0:(b[e]=!0,!1)}function q(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,t,i,a){if(t===null||typeof t>"u"||q(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,i,a,c,f,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=f,this.removeEmptyString=x}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,W);I[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,W);I[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,W);I[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,i,a){var c=I.hasOwnProperty(t)?I[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E(t,i,c,a)&&(i=null),a||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,a=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),V=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),ge=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Ue=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),ae=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,j;function U(e){if(j===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var xe=!1;function _e(e,t){if(!e||xe)return"";xe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var a=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){a=O}e.call(t.prototype)}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var c=O.stack.split(`
`),f=a.stack.split(`
`),x=c.length-1,z=f.length-1;1<=x&&0<=z&&c[x]!==f[z];)z--;for(;1<=x&&0<=z;x--,z--)if(c[x]!==f[z]){if(x!==1||z!==1)do if(x--,z--,0>z||c[x]!==f[z]){var M=`
`+c[x].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=x&&0<=z);break}}}finally{xe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?U(e):""}function ke(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=_e(e.type,!1),e;case 11:return e=_e(e.type.render,!1),e;case 1:return e=_e(e.type,!0),e;default:return""}}function Ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case V:return"Portal";case J:return"Profiler";case H:return"StrictMode";case pe:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ge:return(e.displayName||"Context")+".Consumer";case be:return(e._context.displayName||"Context")+".Provider";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ue:return t=e.displayName||null,t!==null?t:Ce(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}function Re(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(t);case 8:return t===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ft(e){var t=Ie(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function un(e){e._valueTracker||(e._valueTracker=ft(e))}function jr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=Ie(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xn(e,t){var i=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ar(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=Be(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cn(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function De(e,t){Cn(e,t);var i=Be(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ze(e,t.type,i):t.hasOwnProperty("defaultValue")&&Ze(e,t.type,Be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xt(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ze(e,t,i){(t!=="number"||bn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Gt=Array.isArray;function at(e,t,i,a){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Be(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function En(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ai(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(Gt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Be(i)}}function Do(e,t){var i=Be(t.value),a=Be(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function No(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ci(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ei(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ci(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zt,Bo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zt=Zt||document.createElement("div"),Zt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ws=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){ws.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function Ri(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function Yr(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,c=Ri(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,c):e[i]=c}}var Xr=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(e,t){if(t){if(Xr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function Di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cr=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rn=null,cn=null,dn=null;function Zr(e){if(e=lo(e)){if(typeof Rn!="function")throw Error(r(280));var t=e.stateNode;t&&(t=a0(t),Rn(e.stateNode,e.type,t))}}function Io(e){cn?dn?dn.push(e):dn=[e]:cn=e}function er(){if(cn){var e=cn,t=dn;if(dn=cn=null,Zr(e),t)for(e=0;e<t.length;e++)Zr(t[e])}}function Bi(e,t){return e(t)}function Ii(){}var Fi=!1;function Fo(e,t,i){if(Fi)return e(t,i);Fi=!0;try{return Bi(e,t,i)}finally{Fi=!1,(cn!==null||dn!==null)&&(Ii(),er())}}function tr(e,t){var i=e.stateNode;if(i===null)return null;var a=a0(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var Li=!1;if(h)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Li=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Li=!1}function _s(e,t,i,a,c,f,x,z,M){var O=Array.prototype.slice.call(arguments,3);try{t.apply(i,O)}catch(X){this.onError(X)}}var Er=!1,nr=null,Jr=!1,Oi=null,$s={onError:function(e){Er=!0,nr=e}};function ks(e,t,i,a,c,f,x,z,M){Er=!1,nr=null,_s.apply($s,arguments)}function zs(e,t,i,a,c,f,x,z,M){if(ks.apply(this,arguments),Er){if(Er){var O=nr;Er=!1,nr=null}else throw Error(r(198));Jr||(Jr=!0,Oi=O)}}function Pn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Hi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ie(e){if(Pn(e)!==e)throw Error(r(188))}function Ne(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,a=t;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(a=c.return,a!==null){i=a;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return ie(c),e;if(f===a)return ie(c),t;f=f.sibling}throw Error(r(188))}if(i.return!==a.return)i=c,a=f;else{for(var x=!1,z=c.child;z;){if(z===i){x=!0,i=c,a=f;break}if(z===a){x=!0,a=c,i=f;break}z=z.sibling}if(!x){for(z=f.child;z;){if(z===i){x=!0,i=f,a=c;break}if(z===a){x=!0,a=f,i=c;break}z=z.sibling}if(!x)throw Error(r(189))}}if(i.alternate!==a)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function Le(e){return e=Ne(e),e!==null?ei(e):null}function ei(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ei(e);if(t!==null)return t;e=e.sibling}return null}var lu=n.unstable_scheduleCallback,uu=n.unstable_cancelCallback,Om=n.unstable_shouldYield,Hm=n.unstable_requestPaint,ct=n.unstable_now,Gm=n.unstable_getCurrentPriorityLevel,Ss=n.unstable_ImmediatePriority,cu=n.unstable_UserBlockingPriority,Lo=n.unstable_NormalPriority,Wm=n.unstable_LowPriority,du=n.unstable_IdlePriority,Oo=null,wn=null;function Um(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Qm,Vm=Math.log,Km=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Vm(e)/Km|0)|0}var Ho=64,Go=4194304;function Gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,c=e.suspendedLanes,f=e.pingedLanes,x=i&268435455;if(x!==0){var z=x&~c;z!==0?a=Gi(z):(f&=x,f!==0&&(a=Gi(f)))}else x=i&~c,x!==0?a=Gi(x):f!==0&&(a=Gi(f));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,f=t&-t,c>=f||c===16&&(f&4194240)!==0))return t;if((a&4)!==0&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-fn(t),c=1<<i,a|=e[i],t&=~c;return a}function Ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var x=31-fn(f),z=1<<x,M=c[x];M===-1?((z&i)===0||(z&a)!==0)&&(c[x]=Ym(z,t)):M<=t&&(e.expiredLanes|=z),f&=~z}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mu(){var e=Ho;return Ho<<=1,(Ho&4194240)===0&&(Ho=64),e}function qs(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Wi(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=i}function Zm(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-fn(i),f=1<<c;t[c]=0,a[c]=-1,e[c]=-1,i&=~f}}function Ms(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-fn(i),c=1<<a;c&t|e[a]&t&&(e[a]|=t),i&=~c}}var Ve=0;function fu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pu,js,hu,gu,vu,As=!1,Uo=[],rr=null,ir=null,or=null,Ui=new Map,Vi=new Map,sr=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function Ki(e,t,i,a,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:f,targetContainers:[c]},t!==null&&(t=lo(t),t!==null&&js(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function ef(e,t,i,a,c){switch(t){case"focusin":return rr=Ki(rr,e,t,i,a,c),!0;case"dragenter":return ir=Ki(ir,e,t,i,a,c),!0;case"mouseover":return or=Ki(or,e,t,i,a,c),!0;case"pointerover":var f=c.pointerId;return Ui.set(f,Ki(Ui.get(f)||null,e,t,i,a,c)),!0;case"gotpointercapture":return f=c.pointerId,Vi.set(f,Ki(Vi.get(f)||null,e,t,i,a,c)),!0}return!1}function xu(e){var t=Rr(e.target);if(t!==null){var i=Pn(t);if(i!==null){if(t=i.tag,t===13){if(t=Hi(i),t!==null){e.blockedOn=t,vu(e.priority,function(){hu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Cr=a,i.target.dispatchEvent(a),Cr=null}else return t=lo(i),t!==null&&js(t),e.blockedOn=i,!1;t.shift()}return!0}function bu(e,t,i){Vo(e)&&i.delete(t)}function tf(){As=!1,rr!==null&&Vo(rr)&&(rr=null),ir!==null&&Vo(ir)&&(ir=null),or!==null&&Vo(or)&&(or=null),Ui.forEach(bu),Vi.forEach(bu)}function Qi(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,tf)))}function Yi(e){function t(c){return Qi(c,e)}if(0<Uo.length){Qi(Uo[0],e);for(var i=1;i<Uo.length;i++){var a=Uo[i];a.blockedOn===e&&(a.blockedOn=null)}}for(rr!==null&&Qi(rr,e),ir!==null&&Qi(ir,e),or!==null&&Qi(or,e),Ui.forEach(t),Vi.forEach(t),i=0;i<sr.length;i++)a=sr[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<sr.length&&(i=sr[0],i.blockedOn===null);)xu(i),i.blockedOn===null&&sr.shift()}var ti=L.ReactCurrentBatchConfig,Ko=!0;function nf(e,t,i,a){var c=Ve,f=ti.transition;ti.transition=null;try{Ve=1,Cs(e,t,i,a)}finally{Ve=c,ti.transition=f}}function rf(e,t,i,a){var c=Ve,f=ti.transition;ti.transition=null;try{Ve=4,Cs(e,t,i,a)}finally{Ve=c,ti.transition=f}}function Cs(e,t,i,a){if(Ko){var c=Es(e,t,i,a);if(c===null)Ys(e,t,a,Qo,i),yu(e,a);else if(ef(c,e,t,i,a))a.stopPropagation();else if(yu(e,a),t&4&&-1<Jm.indexOf(e)){for(;c!==null;){var f=lo(c);if(f!==null&&pu(f),f=Es(e,t,i,a),f===null&&Ys(e,t,a,Qo,i),f===c)break;c=f}c!==null&&a.stopPropagation()}else Ys(e,t,a,null,i)}}var Qo=null;function Es(e,t,i,a){if(Qo=null,e=Ni(a),e=Rr(e),e!==null)if(t=Pn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Hi(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qo=e,null}function wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gm()){case Ss:return 1;case cu:return 4;case Lo:case Wm:return 16;case du:return 536870912;default:return 16}default:return 16}}var ar=null,Rs=null,Yo=null;function _u(){if(Yo)return Yo;var e,t=Rs,i=t.length,a,c="value"in ar?ar.value:ar.textContent,f=c.length;for(e=0;e<i&&t[e]===c[e];e++);var x=i-e;for(a=1;a<=x&&t[i-a]===c[f-a];a++);return Yo=c.slice(e,1<a?1-a:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function $u(){return!1}function Wt(e){function t(i,a,c,f,x){this._reactName=i,this._targetInst=c,this.type=a,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(f):f[z]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:$u,this.isPropagationStopped=$u,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=Wt(ni),Xi=ue({},ni,{view:0,detail:0}),of=Wt(Xi),Ds,Ns,Zi,Jo=ue({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zi&&(Zi&&e.type==="mousemove"?(Ds=e.screenX-Zi.screenX,Ns=e.screenY-Zi.screenY):Ns=Ds=0,Zi=e),Ds)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),ku=Wt(Jo),sf=ue({},Jo,{dataTransfer:0}),af=Wt(sf),lf=ue({},Xi,{relatedTarget:0}),Bs=Wt(lf),uf=ue({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=Wt(uf),df=ue({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=Wt(df),ff=ue({},ni,{data:0}),zu=Wt(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gf[e])?!!t[e]:!1}function Is(){return vf}var yf=ue({},Xi,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=Wt(yf),bf=ue({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Wt(bf),wf=ue({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),_f=Wt(wf),$f=ue({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),kf=Wt($f),zf=ue({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Wt(zf),Tf=[9,13,27,32],Fs=h&&"CompositionEvent"in window,Ji=null;h&&"documentMode"in document&&(Ji=document.documentMode);var qf=h&&"TextEvent"in window&&!Ji,Tu=h&&(!Fs||Ji&&8<Ji&&11>=Ji),qu=" ",Mu=!1;function ju(e,t){switch(e){case"keyup":return Tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function Mf(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Mu=!0,qu);case"textInput":return e=t.data,e===qu&&Mu?null:e;default:return null}}function jf(e,t){if(ri)return e==="compositionend"||!Fs&&ju(e,t)?(e=_u(),Yo=Rs=ar=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Eu(e,t,i,a){Io(a),t=i0(t,"onChange"),0<t.length&&(i=new Ps("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var eo=null,to=null;function Cf(e){Xu(e,0)}function e0(e){var t=li(e);if(jr(t))return e}function Ef(e,t){if(e==="change")return t}var Ru=!1;if(h){var Ls;if(h){var Os="oninput"in document;if(!Os){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Os=typeof Pu.oninput=="function"}Ls=Os}else Ls=!1;Ru=Ls&&(!document.documentMode||9<document.documentMode)}function Du(){eo&&(eo.detachEvent("onpropertychange",Nu),to=eo=null)}function Nu(e){if(e.propertyName==="value"&&e0(to)){var t=[];Eu(t,to,e,Ni(e)),Fo(Cf,t)}}function Rf(e,t,i){e==="focusin"?(Du(),eo=t,to=i,eo.attachEvent("onpropertychange",Nu)):e==="focusout"&&Du()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return e0(to)}function Df(e,t){if(e==="click")return e0(t)}function Nf(e,t){if(e==="input"||e==="change")return e0(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pn=typeof Object.is=="function"?Object.is:Bf;function no(e,t){if(pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var c=i[a];if(!g.call(t,c)||!pn(e[c],t[c]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var i=Bu(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Bu(i)}}function Fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lu(){for(var e=window,t=bn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=bn(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function If(e){var t=Lu(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Fu(i.ownerDocument.documentElement,i)){if(a!==null&&Hs(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(a.start,c);a=a.end===void 0?f:Math.min(a.end,c),!e.extend&&f>a&&(c=a,a=f,f=c),c=Iu(i,f);var x=Iu(i,a);c&&x&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),f>a?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=h&&"documentMode"in document&&11>=document.documentMode,ii=null,Gs=null,ro=null,Ws=!1;function Ou(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ws||ii==null||ii!==bn(a)||(a=ii,"selectionStart"in a&&Hs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ro&&no(ro,a)||(ro=a,a=i0(Gs,"onSelect"),0<a.length&&(t=new Ps("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=ii)))}function t0(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var oi={animationend:t0("Animation","AnimationEnd"),animationiteration:t0("Animation","AnimationIteration"),animationstart:t0("Animation","AnimationStart"),transitionend:t0("Transition","TransitionEnd")},Us={},Hu={};h&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function n0(e){if(Us[e])return Us[e];if(!oi[e])return e;var t=oi[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Hu)return Us[e]=t[i];return e}var Gu=n0("animationend"),Wu=n0("animationiteration"),Uu=n0("animationstart"),Vu=n0("transitionend"),Ku=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(e,t){Ku.set(e,t),u(t,[e])}for(var Vs=0;Vs<Qu.length;Vs++){var Ks=Qu[Vs],Lf=Ks.toLowerCase(),Of=Ks[0].toUpperCase()+Ks.slice(1);lr(Lf,"on"+Of)}lr(Gu,"onAnimationEnd"),lr(Wu,"onAnimationIteration"),lr(Uu,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(Vu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Yu(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,zs(a,t,void 0,e),e.currentTarget=null}function Xu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],c=a.event;a=a.listeners;e:{var f=void 0;if(t)for(var x=a.length-1;0<=x;x--){var z=a[x],M=z.instance,O=z.currentTarget;if(z=z.listener,M!==f&&c.isPropagationStopped())break e;Yu(c,z,O),f=M}else for(x=0;x<a.length;x++){if(z=a[x],M=z.instance,O=z.currentTarget,z=z.listener,M!==f&&c.isPropagationStopped())break e;Yu(c,z,O),f=M}}}if(Jr)throw e=Oi,Jr=!1,Oi=null,e}function Je(e,t){var i=t[na];i===void 0&&(i=t[na]=new Set);var a=e+"__bubble";i.has(a)||(Zu(t,e,2,!1),i.add(a))}function Qs(e,t,i){var a=0;t&&(a|=4),Zu(i,e,a,t)}var r0="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[r0]){e[r0]=!0,s.forEach(function(i){i!=="selectionchange"&&(Hf.has(i)||Qs(i,!1,e),Qs(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[r0]||(t[r0]=!0,Qs("selectionchange",!1,t))}}function Zu(e,t,i,a){switch(wu(t)){case 1:var c=nf;break;case 4:c=rf;break;default:c=Cs}i=c.bind(null,t,i,e),c=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Ys(e,t,i,a,c){var f=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var z=a.stateNode.containerInfo;if(z===c||z.nodeType===8&&z.parentNode===c)break;if(x===4)for(x=a.return;x!==null;){var M=x.tag;if((M===3||M===4)&&(M=x.stateNode.containerInfo,M===c||M.nodeType===8&&M.parentNode===c))return;x=x.return}for(;z!==null;){if(x=Rr(z),x===null)return;if(M=x.tag,M===5||M===6){a=f=x;continue e}z=z.parentNode}}a=a.return}Fo(function(){var O=f,X=Ni(i),te=[];e:{var Q=Ku.get(e);if(Q!==void 0){var me=Ps,ve=e;switch(e){case"keypress":if(Xo(i)===0)break e;case"keydown":case"keyup":me=xf;break;case"focusin":ve="focus",me=Bs;break;case"focusout":ve="blur",me=Bs;break;case"beforeblur":case"afterblur":me=Bs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=_f;break;case Gu:case Wu:case Uu:me=cf;break;case Vu:me=kf;break;case"scroll":me=of;break;case"wheel":me=Sf;break;case"copy":case"cut":case"paste":me=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Su}var ye=(t&4)!==0,dt=!ye&&e==="scroll",D=ye?Q!==null?Q+"Capture":null:Q;ye=[];for(var C=O,B;C!==null;){B=C;var oe=B.stateNode;if(B.tag===5&&oe!==null&&(B=oe,D!==null&&(oe=tr(C,D),oe!=null&&ye.push(so(C,oe,B)))),dt)break;C=C.return}0<ye.length&&(Q=new me(Q,ve,null,i,X),te.push({event:Q,listeners:ye}))}}if((t&7)===0){e:{if(Q=e==="mouseover"||e==="pointerover",me=e==="mouseout"||e==="pointerout",Q&&i!==Cr&&(ve=i.relatedTarget||i.fromElement)&&(Rr(ve)||ve[Dn]))break e;if((me||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,me?(ve=i.relatedTarget||i.toElement,me=O,ve=ve?Rr(ve):null,ve!==null&&(dt=Pn(ve),ve!==dt||ve.tag!==5&&ve.tag!==6)&&(ve=null)):(me=null,ve=O),me!==ve)){if(ye=ku,oe="onMouseLeave",D="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Su,oe="onPointerLeave",D="onPointerEnter",C="pointer"),dt=me==null?Q:li(me),B=ve==null?Q:li(ve),Q=new ye(oe,C+"leave",me,i,X),Q.target=dt,Q.relatedTarget=B,oe=null,Rr(X)===O&&(ye=new ye(D,C+"enter",ve,i,X),ye.target=B,ye.relatedTarget=dt,oe=ye),dt=oe,me&&ve)t:{for(ye=me,D=ve,C=0,B=ye;B;B=si(B))C++;for(B=0,oe=D;oe;oe=si(oe))B++;for(;0<C-B;)ye=si(ye),C--;for(;0<B-C;)D=si(D),B--;for(;C--;){if(ye===D||D!==null&&ye===D.alternate)break t;ye=si(ye),D=si(D)}ye=null}else ye=null;me!==null&&Ju(te,Q,me,ye,!1),ve!==null&&dt!==null&&Ju(te,dt,ve,ye,!0)}}e:{if(Q=O?li(O):window,me=Q.nodeName&&Q.nodeName.toLowerCase(),me==="select"||me==="input"&&Q.type==="file")var we=Ef;else if(Cu(Q))if(Ru)we=Nf;else{we=Pf;var ze=Rf}else(me=Q.nodeName)&&me.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(we=Df);if(we&&(we=we(e,O))){Eu(te,we,i,X);break e}ze&&ze(e,Q,O),e==="focusout"&&(ze=Q._wrapperState)&&ze.controlled&&Q.type==="number"&&Ze(Q,"number",Q.value)}switch(ze=O?li(O):window,e){case"focusin":(Cu(ze)||ze.contentEditable==="true")&&(ii=ze,Gs=O,ro=null);break;case"focusout":ro=Gs=ii=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Ou(te,i,X);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Ou(te,i,X)}var Se;if(Fs)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ri?ju(e,i)&&(je="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(je="onCompositionStart");je&&(Tu&&i.locale!=="ko"&&(ri||je!=="onCompositionStart"?je==="onCompositionEnd"&&ri&&(Se=_u()):(ar=X,Rs="value"in ar?ar.value:ar.textContent,ri=!0)),ze=i0(O,je),0<ze.length&&(je=new zu(je,e,null,i,X),te.push({event:je,listeners:ze}),Se?je.data=Se:(Se=Au(i),Se!==null&&(je.data=Se)))),(Se=qf?Mf(e,i):jf(e,i))&&(O=i0(O,"onBeforeInput"),0<O.length&&(X=new zu("onBeforeInput","beforeinput",null,i,X),te.push({event:X,listeners:O}),X.data=Se))}Xu(te,t)})}function so(e,t,i){return{instance:e,listener:t,currentTarget:i}}function i0(e,t){for(var i=t+"Capture",a=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=tr(e,i),f!=null&&a.unshift(so(e,f,c)),f=tr(e,t),f!=null&&a.push(so(e,f,c))),e=e.return}return a}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ju(e,t,i,a,c){for(var f=t._reactName,x=[];i!==null&&i!==a;){var z=i,M=z.alternate,O=z.stateNode;if(M!==null&&M===a)break;z.tag===5&&O!==null&&(z=O,c?(M=tr(i,f),M!=null&&x.unshift(so(i,M,z))):c||(M=tr(i,f),M!=null&&x.push(so(i,M,z)))),i=i.return}x.length!==0&&e.push({event:t,listeners:x})}var Gf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function ec(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Wf,"")}function o0(e,t,i){if(t=ec(t),ec(e)!==t&&i)throw Error(r(425))}function s0(){}var Xs=null,Zs=null;function Js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,Uf=typeof clearTimeout=="function"?clearTimeout:void 0,tc=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof tc<"u"?function(e){return tc.resolve(null).then(e).catch(Kf)}:ea;function Kf(e){setTimeout(function(){throw e})}function ta(e,t){var i=t,a=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(a===0){e.removeChild(c),Yi(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=c}while(i);Yi(t)}function ur(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var ai=Math.random().toString(36).slice(2),_n="__reactFiber$"+ai,ao="__reactProps$"+ai,Dn="__reactContainer$"+ai,na="__reactEvents$"+ai,Qf="__reactListeners$"+ai,Yf="__reactHandles$"+ai;function Rr(e){var t=e[_n];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Dn]||i[_n]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=nc(e);e!==null;){if(i=e[_n])return i;e=nc(e)}return t}e=i,i=e.parentNode}return null}function lo(e){return e=e[_n]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function a0(e){return e[ao]||null}var ra=[],ui=-1;function cr(e){return{current:e}}function et(e){0>ui||(e.current=ra[ui],ra[ui]=null,ui--)}function Ye(e,t){ui++,ra[ui]=e.current,e.current=t}var dr={},zt=cr(dr),Dt=cr(!1),Pr=dr;function ci(e,t){var i=e.type.contextTypes;if(!i)return dr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=t[f];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Nt(e){return e=e.childContextTypes,e!=null}function l0(){et(Dt),et(zt)}function rc(e,t,i){if(zt.current!==dr)throw Error(r(168));Ye(zt,t),Ye(Dt,i)}function ic(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(r(108,Re(e)||"Unknown",c));return ue({},i,a)}function u0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Pr=zt.current,Ye(zt,e),Ye(Dt,Dt.current),!0}function oc(e,t,i){var a=e.stateNode;if(!a)throw Error(r(169));i?(e=ic(e,t,Pr),a.__reactInternalMemoizedMergedChildContext=e,et(Dt),et(zt),Ye(zt,e)):et(Dt),Ye(Dt,i)}var Nn=null,c0=!1,ia=!1;function sc(e){Nn===null?Nn=[e]:Nn.push(e)}function Xf(e){c0=!0,sc(e)}function mr(){if(!ia&&Nn!==null){ia=!0;var e=0,t=Ve;try{var i=Nn;for(Ve=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Nn=null,c0=!1}catch(c){throw Nn!==null&&(Nn=Nn.slice(e+1)),lu(Ss,mr),c}finally{Ve=t,ia=!1}}return null}var di=[],mi=0,d0=null,m0=0,Jt=[],en=0,Dr=null,Bn=1,In="";function Nr(e,t){di[mi++]=m0,di[mi++]=d0,d0=e,m0=t}function ac(e,t,i){Jt[en++]=Bn,Jt[en++]=In,Jt[en++]=Dr,Dr=e;var a=Bn;e=In;var c=32-fn(a)-1;a&=~(1<<c),i+=1;var f=32-fn(t)+c;if(30<f){var x=c-c%5;f=(a&(1<<x)-1).toString(32),a>>=x,c-=x,Bn=1<<32-fn(t)+c|i<<c|a,In=f+e}else Bn=1<<f|i<<c|a,In=e}function oa(e){e.return!==null&&(Nr(e,1),ac(e,1,0))}function sa(e){for(;e===d0;)d0=di[--mi],di[mi]=null,m0=di[--mi],di[mi]=null;for(;e===Dr;)Dr=Jt[--en],Jt[en]=null,In=Jt[--en],Jt[en]=null,Bn=Jt[--en],Jt[en]=null}var Ut=null,Vt=null,tt=!1,hn=null;function lc(e,t){var i=on(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function uc(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Vt=ur(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Dr!==null?{id:Bn,overflow:In}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=on(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ut=e,Vt=null,!0):!1;default:return!1}}function aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(tt){var t=Vt;if(t){var i=t;if(!uc(e,t)){if(aa(e))throw Error(r(418));t=ur(i.nextSibling);var a=Ut;t&&uc(e,t)?lc(a,i):(e.flags=e.flags&-4097|2,tt=!1,Ut=e)}}else{if(aa(e))throw Error(r(418));e.flags=e.flags&-4097|2,tt=!1,Ut=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function f0(e){if(e!==Ut)return!1;if(!tt)return cc(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Js(e.type,e.memoizedProps)),t&&(t=Vt)){if(aa(e))throw dc(),Error(r(418));for(;t;)lc(e,t),t=ur(t.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Vt=ur(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Ut?ur(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=Vt;e;)e=ur(e.nextSibling)}function fi(){Vt=Ut=null,tt=!1}function ua(e){hn===null?hn=[e]:hn.push(e)}var Zf=L.ReactCurrentBatchConfig;function uo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var a=i.stateNode}if(!a)throw Error(r(147,e));var c=a,f=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f?t.ref:(t=function(x){var z=c.refs;x===null?delete z[f]:z[f]=x},t._stringRef=f,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function p0(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mc(e){var t=e._init;return t(e._payload)}function fc(e){function t(D,C){if(e){var B=D.deletions;B===null?(D.deletions=[C],D.flags|=16):B.push(C)}}function i(D,C){if(!e)return null;for(;C!==null;)t(D,C),C=C.sibling;return null}function a(D,C){for(D=new Map;C!==null;)C.key!==null?D.set(C.key,C):D.set(C.index,C),C=C.sibling;return D}function c(D,C){return D=br(D,C),D.index=0,D.sibling=null,D}function f(D,C,B){return D.index=B,e?(B=D.alternate,B!==null?(B=B.index,B<C?(D.flags|=2,C):B):(D.flags|=2,C)):(D.flags|=1048576,C)}function x(D){return e&&D.alternate===null&&(D.flags|=2),D}function z(D,C,B,oe){return C===null||C.tag!==6?(C=el(B,D.mode,oe),C.return=D,C):(C=c(C,B),C.return=D,C)}function M(D,C,B,oe){var we=B.type;return we===N?X(D,C,B.props.children,oe,B.key):C!==null&&(C.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Ke&&mc(we)===C.type)?(oe=c(C,B.props),oe.ref=uo(D,C,B),oe.return=D,oe):(oe=B0(B.type,B.key,B.props,null,D.mode,oe),oe.ref=uo(D,C,B),oe.return=D,oe)}function O(D,C,B,oe){return C===null||C.tag!==4||C.stateNode.containerInfo!==B.containerInfo||C.stateNode.implementation!==B.implementation?(C=tl(B,D.mode,oe),C.return=D,C):(C=c(C,B.children||[]),C.return=D,C)}function X(D,C,B,oe,we){return C===null||C.tag!==7?(C=Wr(B,D.mode,oe,we),C.return=D,C):(C=c(C,B),C.return=D,C)}function te(D,C,B){if(typeof C=="string"&&C!==""||typeof C=="number")return C=el(""+C,D.mode,B),C.return=D,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return B=B0(C.type,C.key,C.props,null,D.mode,B),B.ref=uo(D,null,C),B.return=D,B;case V:return C=tl(C,D.mode,B),C.return=D,C;case Ke:var oe=C._init;return te(D,oe(C._payload),B)}if(Gt(C)||$e(C))return C=Wr(C,D.mode,B,null),C.return=D,C;p0(D,C)}return null}function Q(D,C,B,oe){var we=C!==null?C.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return we!==null?null:z(D,C,""+B,oe);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case F:return B.key===we?M(D,C,B,oe):null;case V:return B.key===we?O(D,C,B,oe):null;case Ke:return we=B._init,Q(D,C,we(B._payload),oe)}if(Gt(B)||$e(B))return we!==null?null:X(D,C,B,oe,null);p0(D,B)}return null}function me(D,C,B,oe,we){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return D=D.get(B)||null,z(C,D,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:return D=D.get(oe.key===null?B:oe.key)||null,M(C,D,oe,we);case V:return D=D.get(oe.key===null?B:oe.key)||null,O(C,D,oe,we);case Ke:var ze=oe._init;return me(D,C,B,ze(oe._payload),we)}if(Gt(oe)||$e(oe))return D=D.get(B)||null,X(C,D,oe,we,null);p0(C,oe)}return null}function ve(D,C,B,oe){for(var we=null,ze=null,Se=C,je=C=0,_t=null;Se!==null&&je<B.length;je++){Se.index>je?(_t=Se,Se=null):_t=Se.sibling;var Ge=Q(D,Se,B[je],oe);if(Ge===null){Se===null&&(Se=_t);break}e&&Se&&Ge.alternate===null&&t(D,Se),C=f(Ge,C,je),ze===null?we=Ge:ze.sibling=Ge,ze=Ge,Se=_t}if(je===B.length)return i(D,Se),tt&&Nr(D,je),we;if(Se===null){for(;je<B.length;je++)Se=te(D,B[je],oe),Se!==null&&(C=f(Se,C,je),ze===null?we=Se:ze.sibling=Se,ze=Se);return tt&&Nr(D,je),we}for(Se=a(D,Se);je<B.length;je++)_t=me(Se,D,je,B[je],oe),_t!==null&&(e&&_t.alternate!==null&&Se.delete(_t.key===null?je:_t.key),C=f(_t,C,je),ze===null?we=_t:ze.sibling=_t,ze=_t);return e&&Se.forEach(function(wr){return t(D,wr)}),tt&&Nr(D,je),we}function ye(D,C,B,oe){var we=$e(B);if(typeof we!="function")throw Error(r(150));if(B=we.call(B),B==null)throw Error(r(151));for(var ze=we=null,Se=C,je=C=0,_t=null,Ge=B.next();Se!==null&&!Ge.done;je++,Ge=B.next()){Se.index>je?(_t=Se,Se=null):_t=Se.sibling;var wr=Q(D,Se,Ge.value,oe);if(wr===null){Se===null&&(Se=_t);break}e&&Se&&wr.alternate===null&&t(D,Se),C=f(wr,C,je),ze===null?we=wr:ze.sibling=wr,ze=wr,Se=_t}if(Ge.done)return i(D,Se),tt&&Nr(D,je),we;if(Se===null){for(;!Ge.done;je++,Ge=B.next())Ge=te(D,Ge.value,oe),Ge!==null&&(C=f(Ge,C,je),ze===null?we=Ge:ze.sibling=Ge,ze=Ge);return tt&&Nr(D,je),we}for(Se=a(D,Se);!Ge.done;je++,Ge=B.next())Ge=me(Se,D,je,Ge.value,oe),Ge!==null&&(e&&Ge.alternate!==null&&Se.delete(Ge.key===null?je:Ge.key),C=f(Ge,C,je),ze===null?we=Ge:ze.sibling=Ge,ze=Ge);return e&&Se.forEach(function(Ap){return t(D,Ap)}),tt&&Nr(D,je),we}function dt(D,C,B,oe){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case F:e:{for(var we=B.key,ze=C;ze!==null;){if(ze.key===we){if(we=B.type,we===N){if(ze.tag===7){i(D,ze.sibling),C=c(ze,B.props.children),C.return=D,D=C;break e}}else if(ze.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Ke&&mc(we)===ze.type){i(D,ze.sibling),C=c(ze,B.props),C.ref=uo(D,ze,B),C.return=D,D=C;break e}i(D,ze);break}else t(D,ze);ze=ze.sibling}B.type===N?(C=Wr(B.props.children,D.mode,oe,B.key),C.return=D,D=C):(oe=B0(B.type,B.key,B.props,null,D.mode,oe),oe.ref=uo(D,C,B),oe.return=D,D=oe)}return x(D);case V:e:{for(ze=B.key;C!==null;){if(C.key===ze)if(C.tag===4&&C.stateNode.containerInfo===B.containerInfo&&C.stateNode.implementation===B.implementation){i(D,C.sibling),C=c(C,B.children||[]),C.return=D,D=C;break e}else{i(D,C);break}else t(D,C);C=C.sibling}C=tl(B,D.mode,oe),C.return=D,D=C}return x(D);case Ke:return ze=B._init,dt(D,C,ze(B._payload),oe)}if(Gt(B))return ve(D,C,B,oe);if($e(B))return ye(D,C,B,oe);p0(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,C!==null&&C.tag===6?(i(D,C.sibling),C=c(C,B),C.return=D,D=C):(i(D,C),C=el(B,D.mode,oe),C.return=D,D=C),x(D)):i(D,C)}return dt}var pi=fc(!0),pc=fc(!1),h0=cr(null),g0=null,hi=null,ca=null;function da(){ca=hi=g0=null}function ma(e){var t=h0.current;et(h0),e._currentValue=t}function fa(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function gi(e,t){g0=e,ca=hi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Bt=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},hi===null){if(g0===null)throw Error(r(308));hi=e,g0.dependencies={lanes:0,firstContext:e}}else hi=hi.next=e;return t}var Br=null;function pa(e){Br===null?Br=[e]:Br.push(e)}function hc(e,t,i,a){var c=t.interleaved;return c===null?(i.next=i,pa(t)):(i.next=c.next,c.next=i),t.interleaved=i,Fn(e,a)}function Fn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var fr=!1;function ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pr(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Oe&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,Fn(e,i)}return c=a.interleaved,c===null?(t.next=t,pa(a)):(t.next=c.next,c.next=t),a.interleaved=t,Fn(e,i)}function v0(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,Ms(e,i)}}function vc(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var x={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=x:f=f.next=x,i=i.next}while(i!==null);f===null?c=f=t:f=f.next=t}else c=f=t;i={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function y0(e,t,i,a){var c=e.updateQueue;fr=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,z=c.shared.pending;if(z!==null){c.shared.pending=null;var M=z,O=M.next;M.next=null,x===null?f=O:x.next=O,x=M;var X=e.alternate;X!==null&&(X=X.updateQueue,z=X.lastBaseUpdate,z!==x&&(z===null?X.firstBaseUpdate=O:z.next=O,X.lastBaseUpdate=M))}if(f!==null){var te=c.baseState;x=0,X=O=M=null,z=f;do{var Q=z.lane,me=z.eventTime;if((a&Q)===Q){X!==null&&(X=X.next={eventTime:me,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ve=e,ye=z;switch(Q=t,me=i,ye.tag){case 1:if(ve=ye.payload,typeof ve=="function"){te=ve.call(me,te,Q);break e}te=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=ye.payload,Q=typeof ve=="function"?ve.call(me,te,Q):ve,Q==null)break e;te=ue({},te,Q);break e;case 2:fr=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,Q=c.effects,Q===null?c.effects=[z]:Q.push(z))}else me={eventTime:me,lane:Q,tag:z.tag,payload:z.payload,callback:z.callback,next:null},X===null?(O=X=me,M=te):X=X.next=me,x|=Q;if(z=z.next,z===null){if(z=c.shared.pending,z===null)break;Q=z,z=Q.next,Q.next=null,c.lastBaseUpdate=Q,c.shared.pending=null}}while(!0);if(X===null&&(M=te),c.baseState=M,c.firstBaseUpdate=O,c.lastBaseUpdate=X,t=c.shared.interleaved,t!==null){c=t;do x|=c.lane,c=c.next;while(c!==t)}else f===null&&(c.shared.lanes=0);Lr|=x,e.lanes=x,e.memoizedState=te}}function yc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=i,typeof c!="function")throw Error(r(191,c));c.call(a)}}}var co={},$n=cr(co),mo=cr(co),fo=cr(co);function Ir(e){if(e===co)throw Error(r(174));return e}function ga(e,t){switch(Ye(fo,t),Ye(mo,e),Ye($n,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ei(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ei(t,e)}et($n),Ye($n,t)}function vi(){et($n),et(mo),et(fo)}function xc(e){Ir(fo.current);var t=Ir($n.current),i=Ei(t,e.type);t!==i&&(Ye(mo,e),Ye($n,i))}function va(e){mo.current===e&&(et($n),et(mo))}var rt=cr(0);function x0(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function xa(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var b0=L.ReactCurrentDispatcher,ba=L.ReactCurrentBatchConfig,Fr=0,it=null,vt=null,bt=null,w0=!1,po=!1,ho=0,Jf=0;function St(){throw Error(r(321))}function wa(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!pn(e[i],t[i]))return!1;return!0}function _a(e,t,i,a,c,f){if(Fr=f,it=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b0.current=e===null||e.memoizedState===null?rp:ip,e=i(a,c),po){f=0;do{if(po=!1,ho=0,25<=f)throw Error(r(301));f+=1,bt=vt=null,t.updateQueue=null,b0.current=op,e=i(a,c)}while(po)}if(b0.current=k0,t=vt!==null&&vt.next!==null,Fr=0,bt=vt=it=null,w0=!1,t)throw Error(r(300));return e}function $a(){var e=ho!==0;return ho=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?it.memoizedState=bt=e:bt=bt.next=e,bt}function nn(){if(vt===null){var e=it.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=bt===null?it.memoizedState:bt.next;if(t!==null)bt=t,vt=e;else{if(e===null)throw Error(r(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},bt===null?it.memoizedState=bt=e:bt=bt.next=e}return bt}function go(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=nn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var a=vt,c=a.baseQueue,f=i.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}a.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,a=a.baseState;var z=x=null,M=null,O=f;do{var X=O.lane;if((Fr&X)===X)M!==null&&(M=M.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),a=O.hasEagerState?O.eagerState:e(a,O.action);else{var te={lane:X,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};M===null?(z=M=te,x=a):M=M.next=te,it.lanes|=X,Lr|=X}O=O.next}while(O!==null&&O!==f);M===null?x=a:M.next=z,pn(a,t.memoizedState)||(Bt=!0),t.memoizedState=a,t.baseState=x,t.baseQueue=M,i.lastRenderedState=a}if(e=i.interleaved,e!==null){c=e;do f=c.lane,it.lanes|=f,Lr|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function za(e){var t=nn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var a=i.dispatch,c=i.pending,f=t.memoizedState;if(c!==null){i.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);pn(f,t.memoizedState)||(Bt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),i.lastRenderedState=f}return[f,a]}function bc(){}function wc(e,t){var i=it,a=nn(),c=t(),f=!pn(a.memoizedState,c);if(f&&(a.memoizedState=c,Bt=!0),a=a.queue,Sa(kc.bind(null,i,a,e),[e]),a.getSnapshot!==t||f||bt!==null&&bt.memoizedState.tag&1){if(i.flags|=2048,vo(9,$c.bind(null,i,a,c,t),void 0,null),wt===null)throw Error(r(349));(Fr&30)!==0||_c(i,t,c)}return c}function _c(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function $c(e,t,i,a){t.value=i,t.getSnapshot=a,zc(t)&&Sc(e)}function kc(e,t,i){return i(function(){zc(t)&&Sc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!pn(e,i)}catch{return!0}}function Sc(e){var t=Fn(e,1);t!==null&&xn(t,e,1,-1)}function Tc(e){var t=kn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=np.bind(null,it,e),[t.memoizedState,e]}function vo(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function qc(){return nn().memoizedState}function _0(e,t,i,a){var c=kn();it.flags|=e,c.memoizedState=vo(1|t,i,void 0,a===void 0?null:a)}function $0(e,t,i,a){var c=nn();a=a===void 0?null:a;var f=void 0;if(vt!==null){var x=vt.memoizedState;if(f=x.destroy,a!==null&&wa(a,x.deps)){c.memoizedState=vo(t,i,f,a);return}}it.flags|=e,c.memoizedState=vo(1|t,i,f,a)}function Mc(e,t){return _0(8390656,8,e,t)}function Sa(e,t){return $0(2048,8,e,t)}function jc(e,t){return $0(4,2,e,t)}function Ac(e,t){return $0(4,4,e,t)}function Cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ec(e,t,i){return i=i!=null?i.concat([e]):null,$0(4,4,Cc.bind(null,t,e),i)}function Ta(){}function Rc(e,t){var i=nn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&wa(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function Pc(e,t){var i=nn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&wa(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function Dc(e,t,i){return(Fr&21)===0?(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=i):(pn(i,t)||(i=mu(),it.lanes|=i,Lr|=i,e.baseState=!0),t)}function ep(e,t){var i=Ve;Ve=i!==0&&4>i?i:4,e(!0);var a=ba.transition;ba.transition={};try{e(!1),t()}finally{Ve=i,ba.transition=a}}function Nc(){return nn().memoizedState}function tp(e,t,i){var a=yr(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Bc(e))Ic(t,i);else if(i=hc(e,t,i,a),i!==null){var c=At();xn(i,e,a,c),Fc(i,t,a)}}function np(e,t,i){var a=yr(e),c={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Ic(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var x=t.lastRenderedState,z=f(x,i);if(c.hasEagerState=!0,c.eagerState=z,pn(z,x)){var M=t.interleaved;M===null?(c.next=c,pa(t)):(c.next=M.next,M.next=c),t.interleaved=c;return}}catch{}finally{}i=hc(e,t,c,a),i!==null&&(c=At(),xn(i,e,a,c),Fc(i,t,a))}}function Bc(e){var t=e.alternate;return e===it||t!==null&&t===it}function Ic(e,t){po=w0=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Fc(e,t,i){if((i&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,Ms(e,i)}}var k0={readContext:tn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},rp={readContext:tn,useCallback:function(e,t){return kn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Mc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,_0(4194308,4,Cc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return _0(4194308,4,e,t)},useInsertionEffect:function(e,t){return _0(4,2,e,t)},useMemo:function(e,t){var i=kn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=kn();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=tp.bind(null,it,e),[a.memoizedState,e]},useRef:function(e){var t=kn();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:Ta,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=ep.bind(null,e[1]),kn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=it,c=kn();if(tt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),wt===null)throw Error(r(349));(Fr&30)!==0||_c(a,t,i)}c.memoizedState=i;var f={value:i,getSnapshot:t};return c.queue=f,Mc(kc.bind(null,a,f,e),[e]),a.flags|=2048,vo(9,$c.bind(null,a,f,i,t),void 0,null),i},useId:function(){var e=kn(),t=wt.identifierPrefix;if(tt){var i=In,a=Bn;i=(a&~(1<<32-fn(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=ho++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Jf++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ip={readContext:tn,useCallback:Rc,useContext:tn,useEffect:Sa,useImperativeHandle:Ec,useInsertionEffect:jc,useLayoutEffect:Ac,useMemo:Pc,useReducer:ka,useRef:qc,useState:function(){return ka(go)},useDebugValue:Ta,useDeferredValue:function(e){var t=nn();return Dc(t,vt.memoizedState,e)},useTransition:function(){var e=ka(go)[0],t=nn().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:wc,useId:Nc,unstable_isNewReconciler:!1},op={readContext:tn,useCallback:Rc,useContext:tn,useEffect:Sa,useImperativeHandle:Ec,useInsertionEffect:jc,useLayoutEffect:Ac,useMemo:Pc,useReducer:za,useRef:qc,useState:function(){return za(go)},useDebugValue:Ta,useDeferredValue:function(e){var t=nn();return vt===null?t.memoizedState=e:Dc(t,vt.memoizedState,e)},useTransition:function(){var e=za(go)[0],t=nn().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:wc,useId:Nc,unstable_isNewReconciler:!1};function gn(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function qa(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:ue({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var z0={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=At(),c=yr(e),f=Ln(a,c);f.payload=t,i!=null&&(f.callback=i),t=pr(e,f,c),t!==null&&(xn(t,e,c,a),v0(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=At(),c=yr(e),f=Ln(a,c);f.tag=1,f.payload=t,i!=null&&(f.callback=i),t=pr(e,f,c),t!==null&&(xn(t,e,c,a),v0(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=At(),a=yr(e),c=Ln(i,a);c.tag=2,t!=null&&(c.callback=t),t=pr(e,c,a),t!==null&&(xn(t,e,a,i),v0(t,e,a))}};function Lc(e,t,i,a,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,x):t.prototype&&t.prototype.isPureReactComponent?!no(i,a)||!no(c,f):!0}function Oc(e,t,i){var a=!1,c=dr,f=t.contextType;return typeof f=="object"&&f!==null?f=tn(f):(c=Nt(t)?Pr:zt.current,a=t.contextTypes,f=(a=a!=null)?ci(e,c):dr),t=new t(i,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=z0,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),t}function Hc(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&z0.enqueueReplaceState(t,t.state,null)}function Ma(e,t,i,a){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},ha(e);var f=t.contextType;typeof f=="object"&&f!==null?c.context=tn(f):(f=Nt(t)?Pr:zt.current,c.context=ci(e,f)),c.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(qa(e,t,f,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&z0.enqueueReplaceState(c,c.state,null),y0(e,i,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function yi(e,t){try{var i="",a=t;do i+=ke(a),a=a.return;while(a);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:t,stack:c,digest:null}}function ja(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Aa(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var sp=typeof WeakMap=="function"?WeakMap:Map;function Gc(e,t,i){i=Ln(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){C0||(C0=!0,Ua=a),Aa(e,t)},i}function Wc(e,t,i){i=Ln(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;i.payload=function(){return a(c)},i.callback=function(){Aa(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){Aa(e,t),typeof a!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),i}function Uc(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new sp;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(i)||(c.add(i),e=bp.bind(null,e,t,i),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kc(e,t,i,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Ln(-1,1),t.tag=2,pr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var ap=L.ReactCurrentOwner,Bt=!1;function jt(e,t,i,a){t.child=e===null?pc(t,null,i,a):pi(t,e.child,i,a)}function Qc(e,t,i,a,c){i=i.render;var f=t.ref;return gi(t,c),a=_a(e,t,i,a,f,c),i=$a(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,On(e,t,c)):(tt&&i&&oa(t),t.flags|=1,jt(e,t,a,c),t.child)}function Yc(e,t,i,a,c){if(e===null){var f=i.type;return typeof f=="function"&&!Ja(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=f,Xc(e,t,f,a,c)):(e=B0(i.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,(e.lanes&c)===0){var x=f.memoizedProps;if(i=i.compare,i=i!==null?i:no,i(x,a)&&e.ref===t.ref)return On(e,t,c)}return t.flags|=1,e=br(f,a),e.ref=t.ref,e.return=t,t.child=e}function Xc(e,t,i,a,c){if(e!==null){var f=e.memoizedProps;if(no(f,a)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=a=f,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Bt=!0);else return t.lanes=e.lanes,On(e,t,c)}return Ca(e,t,i,a,c)}function Zc(e,t,i){var a=t.pendingProps,c=a.children,f=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(bi,Kt),Kt|=i;else{if((i&1073741824)===0)return e=f!==null?f.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ye(bi,Kt),Kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=f!==null?f.baseLanes:i,Ye(bi,Kt),Kt|=a}else f!==null?(a=f.baseLanes|i,t.memoizedState=null):a=i,Ye(bi,Kt),Kt|=a;return jt(e,t,c,i),t.child}function Jc(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,i,a,c){var f=Nt(i)?Pr:zt.current;return f=ci(t,f),gi(t,c),i=_a(e,t,i,a,f,c),a=$a(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,On(e,t,c)):(tt&&a&&oa(t),t.flags|=1,jt(e,t,i,c),t.child)}function e1(e,t,i,a,c){if(Nt(i)){var f=!0;u0(t)}else f=!1;if(gi(t,c),t.stateNode===null)T0(e,t),Oc(t,i,a),Ma(t,i,a,c),a=!0;else if(e===null){var x=t.stateNode,z=t.memoizedProps;x.props=z;var M=x.context,O=i.contextType;typeof O=="object"&&O!==null?O=tn(O):(O=Nt(i)?Pr:zt.current,O=ci(t,O));var X=i.getDerivedStateFromProps,te=typeof X=="function"||typeof x.getSnapshotBeforeUpdate=="function";te||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(z!==a||M!==O)&&Hc(t,x,a,O),fr=!1;var Q=t.memoizedState;x.state=Q,y0(t,a,x,c),M=t.memoizedState,z!==a||Q!==M||Dt.current||fr?(typeof X=="function"&&(qa(t,i,X,a),M=t.memoizedState),(z=fr||Lc(t,i,z,a,Q,M,O))?(te||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=M),x.props=a,x.state=M,x.context=O,a=z):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{x=t.stateNode,gc(e,t),z=t.memoizedProps,O=t.type===t.elementType?z:gn(t.type,z),x.props=O,te=t.pendingProps,Q=x.context,M=i.contextType,typeof M=="object"&&M!==null?M=tn(M):(M=Nt(i)?Pr:zt.current,M=ci(t,M));var me=i.getDerivedStateFromProps;(X=typeof me=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(z!==te||Q!==M)&&Hc(t,x,a,M),fr=!1,Q=t.memoizedState,x.state=Q,y0(t,a,x,c);var ve=t.memoizedState;z!==te||Q!==ve||Dt.current||fr?(typeof me=="function"&&(qa(t,i,me,a),ve=t.memoizedState),(O=fr||Lc(t,i,O,a,Q,ve,M)||!1)?(X||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(a,ve,M),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(a,ve,M)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||z===e.memoizedProps&&Q===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&Q===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ve),x.props=a,x.state=ve,x.context=M,a=O):(typeof x.componentDidUpdate!="function"||z===e.memoizedProps&&Q===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&Q===e.memoizedState||(t.flags|=1024),a=!1)}return Ea(e,t,i,a,f,c)}function Ea(e,t,i,a,c,f){Jc(e,t);var x=(t.flags&128)!==0;if(!a&&!x)return c&&oc(t,i,!1),On(e,t,f);a=t.stateNode,ap.current=t;var z=x&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&x?(t.child=pi(t,e.child,null,f),t.child=pi(t,null,z,f)):jt(e,t,z,f),t.memoizedState=a.state,c&&oc(t,i,!0),t.child}function t1(e){var t=e.stateNode;t.pendingContext?rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rc(e,t.context,!1),ga(e,t.containerInfo)}function n1(e,t,i,a,c){return fi(),ua(c),t.flags|=256,jt(e,t,i,a),t.child}var Ra={dehydrated:null,treeContext:null,retryLane:0};function Pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function r1(e,t,i){var a=t.pendingProps,c=rt.current,f=!1,x=(t.flags&128)!==0,z;if((z=x)||(z=e!==null&&e.memoizedState===null?!1:(c&2)!==0),z?(f=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ye(rt,c&1),e===null)return la(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=a.children,e=a.fallback,f?(a=t.mode,f=t.child,x={mode:"hidden",children:x},(a&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=x):f=I0(x,a,0,null),e=Wr(e,a,i,null),f.return=t,e.return=t,f.sibling=e,t.child=f,t.child.memoizedState=Pa(i),t.memoizedState=Ra,e):Da(t,x));if(c=e.memoizedState,c!==null&&(z=c.dehydrated,z!==null))return lp(e,t,x,a,z,c,i);if(f){f=a.fallback,x=t.mode,c=e.child,z=c.sibling;var M={mode:"hidden",children:a.children};return(x&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=M,t.deletions=null):(a=br(c,M),a.subtreeFlags=c.subtreeFlags&14680064),z!==null?f=br(z,f):(f=Wr(f,x,i,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,a=f,f=t.child,x=e.child.memoizedState,x=x===null?Pa(i):{baseLanes:x.baseLanes|i,cachePool:null,transitions:x.transitions},f.memoizedState=x,f.childLanes=e.childLanes&~i,t.memoizedState=Ra,a}return f=e.child,e=f.sibling,a=br(f,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function Da(e,t){return t=I0({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function S0(e,t,i,a){return a!==null&&ua(a),pi(t,e.child,null,i),e=Da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lp(e,t,i,a,c,f,x){if(i)return t.flags&256?(t.flags&=-257,a=ja(Error(r(422))),S0(e,t,x,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(f=a.fallback,c=t.mode,a=I0({mode:"visible",children:a.children},c,0,null),f=Wr(f,c,x,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,(t.mode&1)!==0&&pi(t,e.child,null,x),t.child.memoizedState=Pa(x),t.memoizedState=Ra,f);if((t.mode&1)===0)return S0(e,t,x,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var z=a.dgst;return a=z,f=Error(r(419)),a=ja(f,a,void 0),S0(e,t,x,a)}if(z=(x&e.childLanes)!==0,Bt||z){if(a=wt,a!==null){switch(x&-x){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|x))!==0?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,Fn(e,c),xn(a,e,c,-1))}return Za(),a=ja(Error(r(421))),S0(e,t,x,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),c._reactRetry=t,null):(e=f.treeContext,Vt=ur(c.nextSibling),Ut=t,tt=!0,hn=null,e!==null&&(Jt[en++]=Bn,Jt[en++]=In,Jt[en++]=Dr,Bn=e.id,In=e.overflow,Dr=t),t=Da(t,a.children),t.flags|=4096,t)}function i1(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fa(e.return,t,i)}function Na(e,t,i,a,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=i,f.tailMode=c)}function o1(e,t,i){var a=t.pendingProps,c=a.revealOrder,f=a.tail;if(jt(e,t,a.children,i),a=rt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i1(e,i,t);else if(e.tag===19)i1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ye(rt,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&x0(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Na(t,!1,c,i,f);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&x0(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Na(t,!0,i,null,f);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function T0(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function On(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=br(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=br(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function up(e,t,i){switch(t.tag){case 3:t1(t),fi();break;case 5:xc(t);break;case 1:Nt(t.type)&&u0(t);break;case 4:ga(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;Ye(h0,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ye(rt,rt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?r1(e,t,i):(Ye(rt,rt.current&1),e=On(e,t,i),e!==null?e.sibling:null);Ye(rt,rt.current&1);break;case 19:if(a=(i&t.childLanes)!==0,(e.flags&128)!==0){if(a)return o1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ye(rt,rt.current),a)break;return null;case 22:case 23:return t.lanes=0,Zc(e,t,i)}return On(e,t,i)}var s1,Ba,a1,l1;s1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ba=function(){},a1=function(e,t,i,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,Ir($n.current);var f=null;switch(i){case"input":c=Xn(e,c),a=Xn(e,a),f=[];break;case"select":c=ue({},c,{value:void 0}),a=ue({},a,{value:void 0}),f=[];break;case"textarea":c=En(e,c),a=En(e,a),f=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=s0)}Pi(i,a);var x;i=null;for(O in c)if(!a.hasOwnProperty(O)&&c.hasOwnProperty(O)&&c[O]!=null)if(O==="style"){var z=c[O];for(x in z)z.hasOwnProperty(x)&&(i||(i={}),i[x]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(l.hasOwnProperty(O)?f||(f=[]):(f=f||[]).push(O,null));for(O in a){var M=a[O];if(z=c!=null?c[O]:void 0,a.hasOwnProperty(O)&&M!==z&&(M!=null||z!=null))if(O==="style")if(z){for(x in z)!z.hasOwnProperty(x)||M&&M.hasOwnProperty(x)||(i||(i={}),i[x]="");for(x in M)M.hasOwnProperty(x)&&z[x]!==M[x]&&(i||(i={}),i[x]=M[x])}else i||(f||(f=[]),f.push(O,i)),i=M;else O==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,z=z?z.__html:void 0,M!=null&&z!==M&&(f=f||[]).push(O,M)):O==="children"?typeof M!="string"&&typeof M!="number"||(f=f||[]).push(O,""+M):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(l.hasOwnProperty(O)?(M!=null&&O==="onScroll"&&Je("scroll",e),f||z===M||(f=[])):(f=f||[]).push(O,M))}i&&(f=f||[]).push("style",i);var O=f;(t.updateQueue=O)&&(t.flags|=4)}},l1=function(e,t,i,a){i!==a&&(t.flags|=4)};function yo(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function cp(e,t,i){var a=t.pendingProps;switch(sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Nt(t.type)&&l0(),Tt(t),null;case 3:return a=t.stateNode,vi(),et(Dt),et(zt),xa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(f0(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hn!==null&&(Qa(hn),hn=null))),Ba(e,t),Tt(t),null;case 5:va(t);var c=Ir(fo.current);if(i=t.type,e!==null&&t.stateNode!=null)a1(e,t,i,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Tt(t),null}if(e=Ir($n.current),f0(t)){a=t.stateNode,i=t.type;var f=t.memoizedProps;switch(a[_n]=t,a[ao]=f,e=(t.mode&1)!==0,i){case"dialog":Je("cancel",a),Je("close",a);break;case"iframe":case"object":case"embed":Je("load",a);break;case"video":case"audio":for(c=0;c<io.length;c++)Je(io[c],a);break;case"source":Je("error",a);break;case"img":case"image":case"link":Je("error",a),Je("load",a);break;case"details":Je("toggle",a);break;case"input":Ar(a,f),Je("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!f.multiple},Je("invalid",a);break;case"textarea":Ai(a,f),Je("invalid",a)}Pi(i,f),c=null;for(var x in f)if(f.hasOwnProperty(x)){var z=f[x];x==="children"?typeof z=="string"?a.textContent!==z&&(f.suppressHydrationWarning!==!0&&o0(a.textContent,z,e),c=["children",z]):typeof z=="number"&&a.textContent!==""+z&&(f.suppressHydrationWarning!==!0&&o0(a.textContent,z,e),c=["children",""+z]):l.hasOwnProperty(x)&&z!=null&&x==="onScroll"&&Je("scroll",a)}switch(i){case"input":un(a),Xt(a,f,!0);break;case"textarea":un(a),No(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=s0)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{x=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ci(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=x.createElement(i,{is:a.is}):(e=x.createElement(i),i==="select"&&(x=e,a.multiple?x.multiple=!0:a.size&&(x.size=a.size))):e=x.createElementNS(e,i),e[_n]=t,e[ao]=a,s1(e,t,!1,!1),t.stateNode=e;e:{switch(x=Di(i,a),i){case"dialog":Je("cancel",e),Je("close",e),c=a;break;case"iframe":case"object":case"embed":Je("load",e),c=a;break;case"video":case"audio":for(c=0;c<io.length;c++)Je(io[c],e);c=a;break;case"source":Je("error",e),c=a;break;case"img":case"image":case"link":Je("error",e),Je("load",e),c=a;break;case"details":Je("toggle",e),c=a;break;case"input":Ar(e,a),c=Xn(e,a),Je("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=ue({},a,{value:void 0}),Je("invalid",e);break;case"textarea":Ai(e,a),c=En(e,a),Je("invalid",e);break;default:c=a}Pi(i,c),z=c;for(f in z)if(z.hasOwnProperty(f)){var M=z[f];f==="style"?Yr(e,M):f==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Bo(e,M)):f==="children"?typeof M=="string"?(i!=="textarea"||M!=="")&&Zn(e,M):typeof M=="number"&&Zn(e,""+M):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?M!=null&&f==="onScroll"&&Je("scroll",e):M!=null&&G(e,f,M,x))}switch(i){case"input":un(e),Xt(e,a,!1);break;case"textarea":un(e),No(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Be(a.value));break;case"select":e.multiple=!!a.multiple,f=a.value,f!=null?at(e,!!a.multiple,f,!1):a.defaultValue!=null&&at(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=s0)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)l1(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(i=Ir(fo.current),Ir($n.current),f0(t)){if(a=t.stateNode,i=t.memoizedProps,a[_n]=t,(f=a.nodeValue!==i)&&(e=Ut,e!==null))switch(e.tag){case 3:o0(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&o0(a.nodeValue,i,(e.mode&1)!==0)}f&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[_n]=t,t.stateNode=a}return Tt(t),null;case 13:if(et(rt),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)dc(),fi(),t.flags|=98560,f=!1;else if(f=f0(t),a!==null&&a.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[_n]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tt(t),f=!1}else hn!==null&&(Qa(hn),hn=null),f=!0;if(!f)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(rt.current&1)!==0?yt===0&&(yt=3):Za())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return vi(),Ba(e,t),e===null&&oo(t.stateNode.containerInfo),Tt(t),null;case 10:return ma(t.type._context),Tt(t),null;case 17:return Nt(t.type)&&l0(),Tt(t),null;case 19:if(et(rt),f=t.memoizedState,f===null)return Tt(t),null;if(a=(t.flags&128)!==0,x=f.rendering,x===null)if(a)yo(f,!1);else{if(yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=x0(e),x!==null){for(t.flags|=128,yo(f,!1),a=x.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)f=i,e=a,f.flags&=14680066,x=f.alternate,x===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=x.childLanes,f.lanes=x.lanes,f.child=x.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=x.memoizedProps,f.memoizedState=x.memoizedState,f.updateQueue=x.updateQueue,f.type=x.type,e=x.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ye(rt,rt.current&1|2),t.child}e=e.sibling}f.tail!==null&&ct()>wi&&(t.flags|=128,a=!0,yo(f,!1),t.lanes=4194304)}else{if(!a)if(e=x0(x),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),yo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!x.alternate&&!tt)return Tt(t),null}else 2*ct()-f.renderingStartTime>wi&&i!==1073741824&&(t.flags|=128,a=!0,yo(f,!1),t.lanes=4194304);f.isBackwards?(x.sibling=t.child,t.child=x):(i=f.last,i!==null?i.sibling=x:t.child=x,f.last=x)}return f.tail!==null?(t=f.tail,f.rendering=t,f.tail=t.sibling,f.renderingStartTime=ct(),t.sibling=null,i=rt.current,Ye(rt,a?i&1|2:i&1),t):(Tt(t),null);case 22:case 23:return Xa(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Kt&1073741824)!==0&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function dp(e,t){switch(sa(t),t.tag){case 1:return Nt(t.type)&&l0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),et(Dt),et(zt),xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return va(t),null;case 13:if(et(rt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(rt),null;case 4:return vi(),null;case 10:return ma(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var q0=!1,qt=!1,mp=typeof WeakSet=="function"?WeakSet:Set,he=null;function xi(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){lt(e,t,a)}else i.current=null}function Ia(e,t,i){try{i()}catch(a){lt(e,t,a)}}var u1=!1;function fp(e,t){if(Xs=Ko,e=Lu(),Hs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var c=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var x=0,z=-1,M=-1,O=0,X=0,te=e,Q=null;t:for(;;){for(var me;te!==i||c!==0&&te.nodeType!==3||(z=x+c),te!==f||a!==0&&te.nodeType!==3||(M=x+a),te.nodeType===3&&(x+=te.nodeValue.length),(me=te.firstChild)!==null;)Q=te,te=me;for(;;){if(te===e)break t;if(Q===i&&++O===c&&(z=x),Q===f&&++X===a&&(M=x),(me=te.nextSibling)!==null)break;te=Q,Q=te.parentNode}te=me}i=z===-1||M===-1?null:{start:z,end:M}}else i=null}i=i||{start:0,end:0}}else i=null;for(Zs={focusedElem:e,selectionRange:i},Ko=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var ve=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ve!==null){var ye=ve.memoizedProps,dt=ve.memoizedState,D=t.stateNode,C=D.getSnapshotBeforeUpdate(t.elementType===t.type?ye:gn(t.type,ye),dt);D.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(oe){lt(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return ve=u1,u1=!1,ve}function xo(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&Ia(t,i,f)}c=c.next}while(c!==a)}}function M0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function Fa(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function c1(e){var t=e.alternate;t!==null&&(e.alternate=null,c1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_n],delete t[ao],delete t[na],delete t[Qf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function d1(e){return e.tag===5||e.tag===3||e.tag===4}function m1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function La(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=s0));else if(a!==4&&(e=e.child,e!==null))for(La(e,t,i),e=e.sibling;e!==null;)La(e,t,i),e=e.sibling}function Oa(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Oa(e,t,i),e=e.sibling;e!==null;)Oa(e,t,i),e=e.sibling}var $t=null,vn=!1;function hr(e,t,i){for(i=i.child;i!==null;)f1(e,t,i),i=i.sibling}function f1(e,t,i){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Oo,i)}catch{}switch(i.tag){case 5:qt||xi(i,t);case 6:var a=$t,c=vn;$t=null,hr(e,t,i),$t=a,vn=c,$t!==null&&(vn?(e=$t,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):$t.removeChild(i.stateNode));break;case 18:$t!==null&&(vn?(e=$t,i=i.stateNode,e.nodeType===8?ta(e.parentNode,i):e.nodeType===1&&ta(e,i),Yi(e)):ta($t,i.stateNode));break;case 4:a=$t,c=vn,$t=i.stateNode.containerInfo,vn=!0,hr(e,t,i),$t=a,vn=c;break;case 0:case 11:case 14:case 15:if(!qt&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var f=c,x=f.destroy;f=f.tag,x!==void 0&&((f&2)!==0||(f&4)!==0)&&Ia(i,t,x),c=c.next}while(c!==a)}hr(e,t,i);break;case 1:if(!qt&&(xi(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(z){lt(i,t,z)}hr(e,t,i);break;case 21:hr(e,t,i);break;case 22:i.mode&1?(qt=(a=qt)||i.memoizedState!==null,hr(e,t,i),qt=a):hr(e,t,i);break;default:hr(e,t,i)}}function p1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new mp),t.forEach(function(a){var c=_p.bind(null,e,a);i.has(a)||(i.add(a),a.then(c,c))})}}function yn(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];try{var f=e,x=t,z=x;e:for(;z!==null;){switch(z.tag){case 5:$t=z.stateNode,vn=!1;break e;case 3:$t=z.stateNode.containerInfo,vn=!0;break e;case 4:$t=z.stateNode.containerInfo,vn=!0;break e}z=z.return}if($t===null)throw Error(r(160));f1(f,x,c),$t=null,vn=!1;var M=c.alternate;M!==null&&(M.return=null),c.return=null}catch(O){lt(c,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)h1(t,e),t=t.sibling}function h1(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),zn(e),a&4){try{xo(3,e,e.return),M0(3,e)}catch(ye){lt(e,e.return,ye)}try{xo(5,e,e.return)}catch(ye){lt(e,e.return,ye)}}break;case 1:yn(t,e),zn(e),a&512&&i!==null&&xi(i,i.return);break;case 5:if(yn(t,e),zn(e),a&512&&i!==null&&xi(i,i.return),e.flags&32){var c=e.stateNode;try{Zn(c,"")}catch(ye){lt(e,e.return,ye)}}if(a&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,x=i!==null?i.memoizedProps:f,z=e.type,M=e.updateQueue;if(e.updateQueue=null,M!==null)try{z==="input"&&f.type==="radio"&&f.name!=null&&Cn(c,f),Di(z,x);var O=Di(z,f);for(x=0;x<M.length;x+=2){var X=M[x],te=M[x+1];X==="style"?Yr(c,te):X==="dangerouslySetInnerHTML"?Bo(c,te):X==="children"?Zn(c,te):G(c,X,te,O)}switch(z){case"input":De(c,f);break;case"textarea":Do(c,f);break;case"select":var Q=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var me=f.value;me!=null?at(c,!!f.multiple,me,!1):Q!==!!f.multiple&&(f.defaultValue!=null?at(c,!!f.multiple,f.defaultValue,!0):at(c,!!f.multiple,f.multiple?[]:"",!1))}c[ao]=f}catch(ye){lt(e,e.return,ye)}}break;case 6:if(yn(t,e),zn(e),a&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(ye){lt(e,e.return,ye)}}break;case 3:if(yn(t,e),zn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(ye){lt(e,e.return,ye)}break;case 4:yn(t,e),zn(e);break;case 13:yn(t,e),zn(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(Wa=ct())),a&4&&p1(e);break;case 22:if(X=i!==null&&i.memoizedState!==null,e.mode&1?(qt=(O=qt)||X,yn(t,e),qt=O):yn(t,e),zn(e),a&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!X&&(e.mode&1)!==0)for(he=e,X=e.child;X!==null;){for(te=he=X;he!==null;){switch(Q=he,me=Q.child,Q.tag){case 0:case 11:case 14:case 15:xo(4,Q,Q.return);break;case 1:xi(Q,Q.return);var ve=Q.stateNode;if(typeof ve.componentWillUnmount=="function"){a=Q,i=Q.return;try{t=a,ve.props=t.memoizedProps,ve.state=t.memoizedState,ve.componentWillUnmount()}catch(ye){lt(a,i,ye)}}break;case 5:xi(Q,Q.return);break;case 22:if(Q.memoizedState!==null){y1(te);continue}}me!==null?(me.return=Q,he=me):y1(te)}X=X.sibling}e:for(X=null,te=e;;){if(te.tag===5){if(X===null){X=te;try{c=te.stateNode,O?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(z=te.stateNode,M=te.memoizedProps.style,x=M!=null&&M.hasOwnProperty("display")?M.display:null,z.style.display=Ri("display",x))}catch(ye){lt(e,e.return,ye)}}}else if(te.tag===6){if(X===null)try{te.stateNode.nodeValue=O?"":te.memoizedProps}catch(ye){lt(e,e.return,ye)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===e)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===e)break e;for(;te.sibling===null;){if(te.return===null||te.return===e)break e;X===te&&(X=null),te=te.return}X===te&&(X=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:yn(t,e),zn(e),a&4&&p1(e);break;case 21:break;default:yn(t,e),zn(e)}}function zn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(d1(i)){var a=i;break e}i=i.return}throw Error(r(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Zn(c,""),a.flags&=-33);var f=m1(e);Oa(e,f,c);break;case 3:case 4:var x=a.stateNode.containerInfo,z=m1(e);La(e,z,x);break;default:throw Error(r(161))}}catch(M){lt(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,i){he=e,g1(e)}function g1(e,t,i){for(var a=(e.mode&1)!==0;he!==null;){var c=he,f=c.child;if(c.tag===22&&a){var x=c.memoizedState!==null||q0;if(!x){var z=c.alternate,M=z!==null&&z.memoizedState!==null||qt;z=q0;var O=qt;if(q0=x,(qt=M)&&!O)for(he=c;he!==null;)x=he,M=x.child,x.tag===22&&x.memoizedState!==null?x1(c):M!==null?(M.return=x,he=M):x1(c);for(;f!==null;)he=f,g1(f),f=f.sibling;he=c,q0=z,qt=O}v1(e)}else(c.subtreeFlags&8772)!==0&&f!==null?(f.return=c,he=f):v1(e)}}function v1(e){for(;he!==null;){var t=he;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qt||M0(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!qt)if(i===null)a.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:gn(t.type,i.memoizedProps);a.componentDidUpdate(c,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var f=t.updateQueue;f!==null&&yc(t,f,a);break;case 3:var x=t.updateQueue;if(x!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}yc(t,x,i)}break;case 5:var z=t.stateNode;if(i===null&&t.flags&4){i=z;var M=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&i.focus();break;case"img":M.src&&(i.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var X=O.memoizedState;if(X!==null){var te=X.dehydrated;te!==null&&Yi(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}qt||t.flags&512&&Fa(t)}catch(Q){lt(t,t.return,Q)}}if(t===e){he=null;break}if(i=t.sibling,i!==null){i.return=t.return,he=i;break}he=t.return}}function y1(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var i=t.sibling;if(i!==null){i.return=t.return,he=i;break}he=t.return}}function x1(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{M0(4,t)}catch(M){lt(t,i,M)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(M){lt(t,c,M)}}var f=t.return;try{Fa(t)}catch(M){lt(t,f,M)}break;case 5:var x=t.return;try{Fa(t)}catch(M){lt(t,x,M)}}}catch(M){lt(t,t.return,M)}if(t===e){he=null;break}var z=t.sibling;if(z!==null){z.return=t.return,he=z;break}he=t.return}}var hp=Math.ceil,j0=L.ReactCurrentDispatcher,Ha=L.ReactCurrentOwner,rn=L.ReactCurrentBatchConfig,Oe=0,wt=null,pt=null,kt=0,Kt=0,bi=cr(0),yt=0,bo=null,Lr=0,A0=0,Ga=0,wo=null,It=null,Wa=0,wi=1/0,Hn=null,C0=!1,Ua=null,gr=null,E0=!1,vr=null,R0=0,_o=0,Va=null,P0=-1,D0=0;function At(){return(Oe&6)!==0?ct():P0!==-1?P0:P0=ct()}function yr(e){return(e.mode&1)===0?1:(Oe&2)!==0&&kt!==0?kt&-kt:Zf.transition!==null?(D0===0&&(D0=mu()),D0):(e=Ve,e!==0||(e=window.event,e=e===void 0?16:wu(e.type)),e)}function xn(e,t,i,a){if(50<_o)throw _o=0,Va=null,Error(r(185));Wi(e,i,a),((Oe&2)===0||e!==wt)&&(e===wt&&((Oe&2)===0&&(A0|=i),yt===4&&xr(e,kt)),Ft(e,a),i===1&&Oe===0&&(t.mode&1)===0&&(wi=ct()+500,c0&&mr()))}function Ft(e,t){var i=e.callbackNode;Xm(e,t);var a=Wo(e,e===wt?kt:0);if(a===0)i!==null&&uu(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&uu(i),t===1)e.tag===0?Xf(w1.bind(null,e)):sc(w1.bind(null,e)),Vf(function(){(Oe&6)===0&&mr()}),i=null;else{switch(fu(a)){case 1:i=Ss;break;case 4:i=cu;break;case 16:i=Lo;break;case 536870912:i=du;break;default:i=Lo}i=M1(i,b1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function b1(e,t){if(P0=-1,D0=0,(Oe&6)!==0)throw Error(r(327));var i=e.callbackNode;if(_i()&&e.callbackNode!==i)return null;var a=Wo(e,e===wt?kt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=N0(e,a);else{t=a;var c=Oe;Oe|=2;var f=$1();(wt!==e||kt!==t)&&(Hn=null,wi=ct()+500,Hr(e,t));do try{yp();break}catch(z){_1(e,z)}while(!0);da(),j0.current=f,Oe=c,pt!==null?t=0:(wt=null,kt=0,t=yt)}if(t!==0){if(t===2&&(c=Ts(e),c!==0&&(a=c,t=Ka(e,c))),t===1)throw i=bo,Hr(e,0),xr(e,a),Ft(e,ct()),i;if(t===6)xr(e,a);else{if(c=e.current.alternate,(a&30)===0&&!gp(c)&&(t=N0(e,a),t===2&&(f=Ts(e),f!==0&&(a=f,t=Ka(e,f))),t===1))throw i=bo,Hr(e,0),xr(e,a),Ft(e,ct()),i;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(r(345));case 2:Gr(e,It,Hn);break;case 3:if(xr(e,a),(a&130023424)===a&&(t=Wa+500-ct(),10<t)){if(Wo(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){At(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=ea(Gr.bind(null,e,It,Hn),t);break}Gr(e,It,Hn);break;case 4:if(xr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var x=31-fn(a);f=1<<x,x=t[x],x>c&&(c=x),a&=~f}if(a=c,a=ct()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*hp(a/1960))-a,10<a){e.timeoutHandle=ea(Gr.bind(null,e,It,Hn),a);break}Gr(e,It,Hn);break;case 5:Gr(e,It,Hn);break;default:throw Error(r(329))}}}return Ft(e,ct()),e.callbackNode===i?b1.bind(null,e):null}function Ka(e,t){var i=wo;return e.current.memoizedState.isDehydrated&&(Hr(e,t).flags|=256),e=N0(e,t),e!==2&&(t=It,It=i,t!==null&&Qa(t)),e}function Qa(e){It===null?It=e:It.push.apply(It,e)}function gp(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var c=i[a],f=c.getSnapshot;c=c.value;try{if(!pn(f(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t){for(t&=~Ga,t&=~A0,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-fn(t),a=1<<i;e[i]=-1,t&=~a}}function w1(e){if((Oe&6)!==0)throw Error(r(327));_i();var t=Wo(e,0);if((t&1)===0)return Ft(e,ct()),null;var i=N0(e,t);if(e.tag!==0&&i===2){var a=Ts(e);a!==0&&(t=a,i=Ka(e,a))}if(i===1)throw i=bo,Hr(e,0),xr(e,t),Ft(e,ct()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gr(e,It,Hn),Ft(e,ct()),null}function Ya(e,t){var i=Oe;Oe|=1;try{return e(t)}finally{Oe=i,Oe===0&&(wi=ct()+500,c0&&mr())}}function Or(e){vr!==null&&vr.tag===0&&(Oe&6)===0&&_i();var t=Oe;Oe|=1;var i=rn.transition,a=Ve;try{if(rn.transition=null,Ve=1,e)return e()}finally{Ve=a,rn.transition=i,Oe=t,(Oe&6)===0&&mr()}}function Xa(){Kt=bi.current,et(bi)}function Hr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Uf(i)),pt!==null)for(i=pt.return;i!==null;){var a=i;switch(sa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&l0();break;case 3:vi(),et(Dt),et(zt),xa();break;case 5:va(a);break;case 4:vi();break;case 13:et(rt);break;case 19:et(rt);break;case 10:ma(a.type._context);break;case 22:case 23:Xa()}i=i.return}if(wt=e,pt=e=br(e.current,null),kt=Kt=t,yt=0,bo=null,Ga=A0=Lr=0,It=wo=null,Br!==null){for(t=0;t<Br.length;t++)if(i=Br[t],a=i.interleaved,a!==null){i.interleaved=null;var c=a.next,f=i.pending;if(f!==null){var x=f.next;f.next=c,a.next=x}i.pending=a}Br=null}return e}function _1(e,t){do{var i=pt;try{if(da(),b0.current=k0,w0){for(var a=it.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}w0=!1}if(Fr=0,bt=vt=it=null,po=!1,ho=0,Ha.current=null,i===null||i.return===null){yt=1,bo=t,pt=null;break}e:{var f=e,x=i.return,z=i,M=t;if(t=kt,z.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var O=M,X=z,te=X.tag;if((X.mode&1)===0&&(te===0||te===11||te===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var me=Vc(x);if(me!==null){me.flags&=-257,Kc(me,x,z,f,t),me.mode&1&&Uc(f,O,t),t=me,M=O;var ve=t.updateQueue;if(ve===null){var ye=new Set;ye.add(M),t.updateQueue=ye}else ve.add(M);break e}else{if((t&1)===0){Uc(f,O,t),Za();break e}M=Error(r(426))}}else if(tt&&z.mode&1){var dt=Vc(x);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),Kc(dt,x,z,f,t),ua(yi(M,z));break e}}f=M=yi(M,z),yt!==4&&(yt=2),wo===null?wo=[f]:wo.push(f),f=x;do{switch(f.tag){case 3:f.flags|=65536,t&=-t,f.lanes|=t;var D=Gc(f,M,t);vc(f,D);break e;case 1:z=M;var C=f.type,B=f.stateNode;if((f.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(gr===null||!gr.has(B)))){f.flags|=65536,t&=-t,f.lanes|=t;var oe=Wc(f,z,t);vc(f,oe);break e}}f=f.return}while(f!==null)}z1(i)}catch(we){t=we,pt===i&&i!==null&&(pt=i=i.return);continue}break}while(!0)}function $1(){var e=j0.current;return j0.current=k0,e===null?k0:e}function Za(){(yt===0||yt===3||yt===2)&&(yt=4),wt===null||(Lr&268435455)===0&&(A0&268435455)===0||xr(wt,kt)}function N0(e,t){var i=Oe;Oe|=2;var a=$1();(wt!==e||kt!==t)&&(Hn=null,Hr(e,t));do try{vp();break}catch(c){_1(e,c)}while(!0);if(da(),Oe=i,j0.current=a,pt!==null)throw Error(r(261));return wt=null,kt=0,yt}function vp(){for(;pt!==null;)k1(pt)}function yp(){for(;pt!==null&&!Om();)k1(pt)}function k1(e){var t=q1(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?z1(e):pt=t,Ha.current=null}function z1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=cp(i,t,Kt),i!==null){pt=i;return}}else{if(i=dp(i,t),i!==null){i.flags&=32767,pt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,pt=null;return}}if(t=t.sibling,t!==null){pt=t;return}pt=t=e}while(t!==null);yt===0&&(yt=5)}function Gr(e,t,i){var a=Ve,c=rn.transition;try{rn.transition=null,Ve=1,xp(e,t,i,a)}finally{rn.transition=c,Ve=a}return null}function xp(e,t,i,a){do _i();while(vr!==null);if((Oe&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(Zm(e,f),e===wt&&(pt=wt=null,kt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||E0||(E0=!0,M1(Lo,function(){return _i(),null})),f=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||f){f=rn.transition,rn.transition=null;var x=Ve;Ve=1;var z=Oe;Oe|=4,Ha.current=null,fp(e,i),h1(i,e),If(Zs),Ko=!!Xs,Zs=Xs=null,e.current=i,pp(i),Hm(),Oe=z,Ve=x,rn.transition=f}else e.current=i;if(E0&&(E0=!1,vr=e,R0=c),f=e.pendingLanes,f===0&&(gr=null),Um(i.stateNode),Ft(e,ct()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],a(c.value,{componentStack:c.stack,digest:c.digest});if(C0)throw C0=!1,e=Ua,Ua=null,e;return(R0&1)!==0&&e.tag!==0&&_i(),f=e.pendingLanes,(f&1)!==0?e===Va?_o++:(_o=0,Va=e):_o=0,mr(),null}function _i(){if(vr!==null){var e=fu(R0),t=rn.transition,i=Ve;try{if(rn.transition=null,Ve=16>e?16:e,vr===null)var a=!1;else{if(e=vr,vr=null,R0=0,(Oe&6)!==0)throw Error(r(331));var c=Oe;for(Oe|=4,he=e.current;he!==null;){var f=he,x=f.child;if((he.flags&16)!==0){var z=f.deletions;if(z!==null){for(var M=0;M<z.length;M++){var O=z[M];for(he=O;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:xo(8,X,f)}var te=X.child;if(te!==null)te.return=X,he=te;else for(;he!==null;){X=he;var Q=X.sibling,me=X.return;if(c1(X),X===O){he=null;break}if(Q!==null){Q.return=me,he=Q;break}he=me}}}var ve=f.alternate;if(ve!==null){var ye=ve.child;if(ye!==null){ve.child=null;do{var dt=ye.sibling;ye.sibling=null,ye=dt}while(ye!==null)}}he=f}}if((f.subtreeFlags&2064)!==0&&x!==null)x.return=f,he=x;else e:for(;he!==null;){if(f=he,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:xo(9,f,f.return)}var D=f.sibling;if(D!==null){D.return=f.return,he=D;break e}he=f.return}}var C=e.current;for(he=C;he!==null;){x=he;var B=x.child;if((x.subtreeFlags&2064)!==0&&B!==null)B.return=x,he=B;else e:for(x=C;he!==null;){if(z=he,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:M0(9,z)}}catch(we){lt(z,z.return,we)}if(z===x){he=null;break e}var oe=z.sibling;if(oe!==null){oe.return=z.return,he=oe;break e}he=z.return}}if(Oe=c,mr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Oo,e)}catch{}a=!0}return a}finally{Ve=i,rn.transition=t}}return!1}function S1(e,t,i){t=yi(i,t),t=Gc(e,t,1),e=pr(e,t,1),t=At(),e!==null&&(Wi(e,1,t),Ft(e,t))}function lt(e,t,i){if(e.tag===3)S1(e,e,i);else for(;t!==null;){if(t.tag===3){S1(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gr===null||!gr.has(a))){e=yi(i,e),e=Wc(t,e,1),t=pr(t,e,1),e=At(),t!==null&&(Wi(t,1,e),Ft(t,e));break}}t=t.return}}function bp(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&i,wt===e&&(kt&i)===i&&(yt===4||yt===3&&(kt&130023424)===kt&&500>ct()-Wa?Hr(e,0):Ga|=i),Ft(e,t)}function T1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Go,Go<<=1,(Go&130023424)===0&&(Go=4194304)));var i=At();e=Fn(e,t),e!==null&&(Wi(e,t,i),Ft(e,i))}function wp(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),T1(e,i)}function _p(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(r(314))}a!==null&&a.delete(t),T1(e,i)}var q1;q1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)Bt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Bt=!1,up(e,t,i);Bt=(e.flags&131072)!==0}else Bt=!1,tt&&(t.flags&1048576)!==0&&ac(t,m0,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;T0(e,t),e=t.pendingProps;var c=ci(t,zt.current);gi(t,i),c=_a(null,t,a,e,c,i);var f=$a();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(a)?(f=!0,u0(t)):f=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ha(t),c.updater=z0,t.stateNode=c,c._reactInternals=t,Ma(t,a,e,i),t=Ea(null,t,a,!0,f,i)):(t.tag=0,tt&&f&&oa(t),jt(null,t,c,i),t=t.child),t;case 16:a=t.elementType;e:{switch(T0(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=kp(a),e=gn(a,e),c){case 0:t=Ca(null,t,a,e,i);break e;case 1:t=e1(null,t,a,e,i);break e;case 11:t=Qc(null,t,a,e,i);break e;case 14:t=Yc(null,t,a,gn(a.type,e),i);break e}throw Error(r(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:gn(a,c),Ca(e,t,a,c,i);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:gn(a,c),e1(e,t,a,c,i);case 3:e:{if(t1(t),e===null)throw Error(r(387));a=t.pendingProps,f=t.memoizedState,c=f.element,gc(e,t),y0(t,a,null,i);var x=t.memoizedState;if(a=x.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){c=yi(Error(r(423)),t),t=n1(e,t,a,i,c);break e}else if(a!==c){c=yi(Error(r(424)),t),t=n1(e,t,a,i,c);break e}else for(Vt=ur(t.stateNode.containerInfo.firstChild),Ut=t,tt=!0,hn=null,i=pc(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(fi(),a===c){t=On(e,t,i);break e}jt(e,t,a,i)}t=t.child}return t;case 5:return xc(t),e===null&&la(t),a=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,x=c.children,Js(a,c)?x=null:f!==null&&Js(a,f)&&(t.flags|=32),Jc(e,t),jt(e,t,x,i),t.child;case 6:return e===null&&la(t),null;case 13:return r1(e,t,i);case 4:return ga(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=pi(t,null,a,i):jt(e,t,a,i),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:gn(a,c),Qc(e,t,a,c,i);case 7:return jt(e,t,t.pendingProps,i),t.child;case 8:return jt(e,t,t.pendingProps.children,i),t.child;case 12:return jt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,f=t.memoizedProps,x=c.value,Ye(h0,a._currentValue),a._currentValue=x,f!==null)if(pn(f.value,x)){if(f.children===c.children&&!Dt.current){t=On(e,t,i);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var z=f.dependencies;if(z!==null){x=f.child;for(var M=z.firstContext;M!==null;){if(M.context===a){if(f.tag===1){M=Ln(-1,i&-i),M.tag=2;var O=f.updateQueue;if(O!==null){O=O.shared;var X=O.pending;X===null?M.next=M:(M.next=X.next,X.next=M),O.pending=M}}f.lanes|=i,M=f.alternate,M!==null&&(M.lanes|=i),fa(f.return,i,t),z.lanes|=i;break}M=M.next}}else if(f.tag===10)x=f.type===t.type?null:f.child;else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=i,z=x.alternate,z!==null&&(z.lanes|=i),fa(x,i,t),x=f.sibling}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}jt(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,gi(t,i),c=tn(c),a=a(c),t.flags|=1,jt(e,t,a,i),t.child;case 14:return a=t.type,c=gn(a,t.pendingProps),c=gn(a.type,c),Yc(e,t,a,c,i);case 15:return Xc(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:gn(a,c),T0(e,t),t.tag=1,Nt(a)?(e=!0,u0(t)):e=!1,gi(t,i),Oc(t,a,c),Ma(t,a,c,i),Ea(null,t,a,!0,e,i);case 19:return o1(e,t,i);case 22:return Zc(e,t,i)}throw Error(r(156,t.tag))};function M1(e,t){return lu(e,t)}function $p(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,t,i,a){return new $p(e,t,i,a)}function Ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kp(e){if(typeof e=="function")return Ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ce)return 11;if(e===Ue)return 14}return 2}function br(e,t){var i=e.alternate;return i===null?(i=on(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function B0(e,t,i,a,c,f){var x=2;if(a=e,typeof e=="function")Ja(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case N:return Wr(i.children,c,f,t);case H:x=8,c|=8;break;case J:return e=on(12,i,t,c|2),e.elementType=J,e.lanes=f,e;case pe:return e=on(13,i,t,c),e.elementType=pe,e.lanes=f,e;case qe:return e=on(19,i,t,c),e.elementType=qe,e.lanes=f,e;case Fe:return I0(i,c,f,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case be:x=10;break e;case ge:x=9;break e;case ce:x=11;break e;case Ue:x=14;break e;case Ke:x=16,a=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=on(x,i,t,c),t.elementType=e,t.type=a,t.lanes=f,t}function Wr(e,t,i,a){return e=on(7,e,a,t),e.lanes=i,e}function I0(e,t,i,a){return e=on(22,e,a,t),e.elementType=Fe,e.lanes=i,e.stateNode={isHidden:!1},e}function el(e,t,i){return e=on(6,e,null,t),e.lanes=i,e}function tl(e,t,i){return t=on(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zp(e,t,i,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function nl(e,t,i,a,c,f,x,z,M){return e=new zp(e,t,i,z,M),t===1?(t=1,f===!0&&(t|=8)):t=0,f=on(3,null,null,t),e.current=f,f.stateNode=e,f.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ha(f),e}function Sp(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function j1(e){if(!e)return dr;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Nt(i))return ic(e,i,t)}return t}function A1(e,t,i,a,c,f,x,z,M){return e=nl(i,a,!0,e,c,f,x,z,M),e.context=j1(null),i=e.current,a=At(),c=yr(i),f=Ln(a,c),f.callback=t??null,pr(i,f,c),e.current.lanes=c,Wi(e,c,a),Ft(e,a),e}function F0(e,t,i,a){var c=t.current,f=At(),x=yr(c);return i=j1(i),t.context===null?t.context=i:t.pendingContext=i,t=Ln(f,x),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=pr(c,t,x),e!==null&&(xn(e,c,x,f),v0(e,c,x)),x}function L0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function C1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function rl(e,t){C1(e,t),(e=e.alternate)&&C1(e,t)}function Tp(){return null}var E1=typeof reportError=="function"?reportError:function(e){console.error(e)};function il(e){this._internalRoot=e}O0.prototype.render=il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));F0(e,t,null,null)},O0.prototype.unmount=il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){F0(null,e,null,null)}),t[Dn]=null}};function O0(e){this._internalRoot=e}O0.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<sr.length&&t!==0&&t<sr[i].priority;i++);sr.splice(i,0,e),i===0&&xu(e)}};function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function H0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function R1(){}function qp(e,t,i,a,c){if(c){if(typeof a=="function"){var f=a;a=function(){var O=L0(x);f.call(O)}}var x=A1(t,a,e,0,null,!1,!1,"",R1);return e._reactRootContainer=x,e[Dn]=x.current,oo(e.nodeType===8?e.parentNode:e),Or(),x}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var z=a;a=function(){var O=L0(M);z.call(O)}}var M=nl(e,0,!1,null,null,!1,!1,"",R1);return e._reactRootContainer=M,e[Dn]=M.current,oo(e.nodeType===8?e.parentNode:e),Or(function(){F0(t,M,i,a)}),M}function G0(e,t,i,a,c){var f=i._reactRootContainer;if(f){var x=f;if(typeof c=="function"){var z=c;c=function(){var M=L0(x);z.call(M)}}F0(t,x,e,c)}else x=qp(i,t,e,c,a);return L0(x)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Gi(t.pendingLanes);i!==0&&(Ms(t,i|1),Ft(t,ct()),(Oe&6)===0&&(wi=ct()+500,mr()))}break;case 13:Or(function(){var a=Fn(e,1);if(a!==null){var c=At();xn(a,e,1,c)}}),rl(e,1)}},js=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var i=At();xn(t,e,134217728,i)}rl(e,134217728)}},hu=function(e){if(e.tag===13){var t=yr(e),i=Fn(e,t);if(i!==null){var a=At();xn(i,e,t,a)}rl(e,t)}},gu=function(){return Ve},vu=function(e,t){var i=Ve;try{return Ve=e,t()}finally{Ve=i}},Rn=function(e,t,i){switch(t){case"input":if(De(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var c=a0(a);if(!c)throw Error(r(90));jr(a),De(a,c)}}}break;case"textarea":Do(e,i);break;case"select":t=i.value,t!=null&&at(e,!!i.multiple,t,!1)}},Bi=Ya,Ii=Or;var Mp={usingClientEntryPoint:!1,Events:[lo,li,a0,Io,er,Ya]},$o={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jp={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Le(e),e===null?null:e.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var W0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!W0.isDisabled&&W0.supportsFiber)try{Oo=W0.inject(jp),wn=W0}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp,Lt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(t))throw Error(r(200));return Sp(e,t,null,i)},Lt.createRoot=function(e,t){if(!ol(e))throw Error(r(299));var i=!1,a="",c=E1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=nl(e,1,!1,null,null,i,!1,a,c),e[Dn]=t.current,oo(e.nodeType===8?e.parentNode:e),new il(t)},Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Le(t),e=e===null?null:e.stateNode,e},Lt.flushSync=function(e){return Or(e)},Lt.hydrate=function(e,t,i){if(!H0(t))throw Error(r(200));return G0(null,e,t,!0,i)},Lt.hydrateRoot=function(e,t,i){if(!ol(e))throw Error(r(405));var a=i!=null&&i.hydratedSources||null,c=!1,f="",x=E1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),t=A1(t,null,e,1,i??null,c,!1,f,x),e[Dn]=t.current,oo(e),a)for(e=0;e<a.length;e++)i=a[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new O0(t)},Lt.render=function(e,t,i){if(!H0(t))throw Error(r(200));return G0(null,e,t,!1,i)},Lt.unmountComponentAtNode=function(e){if(!H0(e))throw Error(r(40));return e._reactRootContainer?(Or(function(){G0(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1},Lt.unstable_batchedUpdates=Ya,Lt.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!H0(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return G0(e,t,i,!1,a)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var O1;function Bp(){if(O1)return ll.exports;O1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),ll.exports=Np(),ll.exports}var H1;function Ip(){if(H1)return U0;H1=1;var o=Bp();return U0.createRoot=o.createRoot,U0.hydrateRoot=o.hydrateRoot,U0}var Fp=Ip();const Lp=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Op=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Hp=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Gp=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,Wp=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Up=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Vp=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Kp=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Qp=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Yp=`---
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
`,Xp=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Zp=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,Jp=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,eh=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,th=`---
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
`,nh=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,rh=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,ih=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,oh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,sh=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,ah=`---
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
`,lh=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,uh=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,ch=`---
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
`,dh=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,mh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,fh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,ph=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,hh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,gh=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
---
`,vh=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
---
`,yh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,xh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,bh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,wh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,_h=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,$h=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
`,kh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,zh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,Sh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,Th=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,qh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,Mh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,jh=`---
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
`,Ah=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,Ch=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
---
`,Eh=`---
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
`,Rh=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
`,Ph=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Dh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Nh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Bh=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
---
`,Ih=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Fh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Lh=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
`,Oh=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,Hh=`---
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
`,Gh=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,Wh=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,Uh=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,Vh=`---
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
`,Kh=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
`,Qh=`---
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
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,Yh=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,Xh=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,Zh=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,Jh=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,e4=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,t4=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,n4=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,r4=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,i4=`---
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
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,o4=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,s4=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,a4=`---
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
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,l4=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,u4=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,c4=`---
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
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,d4=`---
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
Rozwiń $(a + b)^3$:`,m4=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,f4=`---
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
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,p4=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,h4=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,g4=`---
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
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,v4=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,y4=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,x4=`---
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
Moduł liczby zespolonej z = 3 + 4i wynosi:`,b4=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,w4=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,_4=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,$4=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,k4=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,z4=`---
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
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,S4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,T4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,q4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,M4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,j4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,A4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,C4=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,E4=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,R4=`---
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
Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:`,P4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,D4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,N4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,B4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,I4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,F4=`---
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
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,L4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,O4=`---
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
Wykres rozkładu normalnego ma kształt:`,H4=`---
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
Rozkład na czynniki: x² − 5x + 6 =`,G4=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,W4=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,U4=`---
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
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,V4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,K4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,Q4=`---
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
Która z poniższych relacji NIE jest funkcją?`,Y4=`---
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
Funkcja to takie przyporządkowanie, że:`,X4=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,Z4=`---
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
Funkcja f(x) = 2ˣ jest:`,J4=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,e2=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,t2=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,n2=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,r2=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,i2=`---
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
Dziedzina funkcji f(x) = log(x − 2) to:`,o2=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,s2=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,a2=`---
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
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,l2=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,u2=`---
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
Funkcja $f(x) = x^3$ jest:`,c2=`---
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
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,d2=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,m2=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,f2=`---
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
Okres funkcji f(x) = sin(2x) wynosi:`,p2=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,h2=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,g2=`---
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
Uproszczona postać ułamka 45/60 to:`,v2=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,y2=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,x2=`---
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
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,b2=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,w2=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,_2=`---
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
Ile wynosi NWD(84, 56)?`,$2=`---
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
Oblicz: $(-3) \\cdot 4 =$`,k2=`---
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
Oblicz: $3 - 8 =$`,z2=`---
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
$\\displaystyle \\int 2x \\, dx =$`,S2=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,T2=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,q2=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,M2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,j2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,A2=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,C2=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,E2=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,R2=`---
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
Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:`,P2=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,D2=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,N2=`---
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
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,B2=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,I2=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,F2=`---
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
Rozwiązaniem równania log₂(x) = 3 jest:`,L2=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,O2=`---
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
Rozwiąż równanie: $2^x = 16$`,H2=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,G2=`---
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
Oblicz: $\\log_2 8 =$`,W2=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,U2=`---
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
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,V2=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,K2=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,Q2=`---
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
Prostokąt o obwodzie 20 ma największe pole gdy:`,Y2=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,X2=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,Z2=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,J2=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,e3=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,t3=`---
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
Liczba permutacji zbioru {A, B, C, D} wynosi:`,n3=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,r3=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,i3=`---
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
Kąt wpisany w okrąg oparty na średnicy mierzy:`,o3=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,s3=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,a3=`---
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
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,l3=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,u3=`---
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
Wielomian stopnia $n$ ma:`,c3=`---
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
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,d3=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,m3=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,f3=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,p3=`---
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
Oblicz: $2^3 =$`,h3=`---
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
Uprość: $a^2 \\cdot a^3 =$`,g3=`---
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
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,v3=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,y3=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,x3=`---
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
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,b3=`---
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
Dowód nie wprost polega na tym, że:`,w3=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,$3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,k3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,z3=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,S3=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,q3=`---
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
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,M3=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,j3=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,A3=`---
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
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,C3=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,E3=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,R3=`---
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
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,P3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,D3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,N3=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,B3=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,I3=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,F3=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,L3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,O3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,H3=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,G3=`---
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
Twierdzenie cosinusów brzmi:`,W3=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,U3=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,V3=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,K3=`---
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
Wzór na objętość kuli o promieniu $r$:`,Q3=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,Y3=`---
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
Dominanta (moda) zbioru danych to:`,X3=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,Z3=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,J3=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,e5=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,t5=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,n5=`---
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
Wartość $\\sin 30°$ wynosi:`,r5=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,i5=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,o5=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,s5=`---
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
Rozwiąż równanie: $\\tan x = 1$`,a5=`---
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
sin(2α) jest równe:`,l5=`---
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
Wzór na $\\sin 2\\alpha$:`,u5=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,c5=`---
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
Wartość sin(120°) jest równa:`,d5=`---
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
Wartość $\\cos 30°$ wynosi:`,m5=`---
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
Wartość $\\sin 45°$ wynosi:`,f5=`---
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
Długość wektora v = [3, 4] wynosi:`,p5=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,h5=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,g5=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,v5=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,y5=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`;function Rd(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],s=n[2].trim(),l={},u=r.split(/\r?\n/);let m=0;for(;m<u.length;){const h=u[m];if(h.startsWith("  ")){m++;continue}const g=h.match(/^(\w+):\s*(.*)/);if(!g){m++;continue}const y=g[1];let b=g[2].trim();if(b===""||b===null){const $=u[m+1]??"";if($.startsWith("  - ")){const k=[];for(m++;m<u.length&&u[m].startsWith("  - ");){let q=u[m].replace(/^  - /,"").trim();q=q.replace(/^["']|["']$/g,""),k.push(q),m++}l[y]=k.length>0?k:null}else if($.match(/^  \w+:/)){const k={};for(m++;m<u.length&&u[m].match(/^  \w+:/);){const q=u[m].match(/^  (\w+):\s*(.*)/);if(q){const E=q[1];let R=q[2].trim().replace(/^["']|["']$/g,"");k[E]=!isNaN(R)&&R!==""?Number(R):R}m++}l[y]=k}else l[y]=null,m++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?l[y]=Number(b):b==="true"?l[y]=!0:b==="false"?l[y]=!1:l[y]=b,m++}return{meta:l,body:s}}function Pd(o,n){return Object.entries(o).map(([r,s])=>{var m;const l=(m=r.match(n))==null?void 0:m[1],{meta:u}=Rd(s);return{id:l,label:u.label??l,labelPl:u.labelPl??u.label??l,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0,resources:Array.isArray(u.resources)?u.resources.map(h=>{if(typeof h!="string")return null;const[g,y,b,$]=h.split("|").map(q=>q.trim()),k=y&&!y.includes("/")&&!y.startsWith("http")?`resources/${l}/${y}`:y??"";return{type:g??"article",url:k,titleEn:b??"",titlePl:$??b??""}}).filter(Boolean):[]}})}function Dd(o,n){var s;const r={};for(const[l,u]of Object.entries(o)){const m=(s=l.match(n))==null?void 0:s[1];if(!m)continue;const{meta:h,body:g}=Rd(u);r[m]||(r[m]=[]),r[m].push({q:g,options:h.options??[],correct:h.correct??0,hint:h.hint??"",tests:h.tests&&typeof h.tests=="object"&&Object.keys(h.tests).length>0?h.tests:{[m]:1}})}return r}function x5(o,n,r=[]){const s=o[n];if(!s||s.length===0||r.includes(-1))return null;const l=s.map((m,h)=>({q:m,i:h})).filter(({i:m})=>!r.includes(m));if(l.length===0)return null;const u=l[Math.floor(Math.random()*l.length)];return{...u.q,index:u.i}}const b5=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],w5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},_5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},$5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Nd={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},k5=Object.assign({"./nodes/abs_value/node.md":Lp,"./nodes/analytic_geom/node.md":Op,"./nodes/area_perimeter/node.md":Hp,"./nodes/arith_geom/node.md":Gp,"./nodes/bernoulli/node.md":Wp,"./nodes/binom_theorem/node.md":Up,"./nodes/circle_eq/node.md":Vp,"./nodes/combinations/node.md":Kp,"./nodes/complex/node.md":Qp,"./nodes/cond_prob/node.md":Yp,"./nodes/conic_sections/node.md":Xp,"./nodes/counting/node.md":Zp,"./nodes/data_basics/node.md":Jp,"./nodes/deriv_apps/node.md":eh,"./nodes/derivative/node.md":th,"./nodes/distributions/node.md":nh,"./nodes/factoring/node.md":rh,"./nodes/fn_compositions/node.md":ih,"./nodes/fn_concept/node.md":oh,"./nodes/fn_exp/node.md":sh,"./nodes/fn_linear/node.md":ah,"./nodes/fn_log/node.md":lh,"./nodes/fn_poly/node.md":uh,"./nodes/fn_quadratic/node.md":ch,"./nodes/fn_trig/node.md":dh,"./nodes/fractions/node.md":mh,"./nodes/geo_series/node.md":fh,"./nodes/integers/node.md":ph,"./nodes/integral/node.md":hh,"./nodes/limits/node.md":gh,"./nodes/linear_eq/node.md":vh,"./nodes/linear_ineq/node.md":yh,"./nodes/linear_sys/node.md":xh,"./nodes/log_eq/node.md":bh,"./nodes/log_exp/node.md":wh,"./nodes/logic_basics/node.md":_h,"./nodes/optimization_lp/node.md":$h,"./nodes/param_eq/node.md":kh,"./nodes/permutations/node.md":zh,"./nodes/planimetria_lp/node.md":Sh,"./nodes/poly_roots/node.md":Th,"./nodes/polynomials/node.md":qh,"./nodes/powers/node.md":Mh,"./nodes/probability/node.md":jh,"./nodes/proof/node.md":Ah,"./nodes/pythagoras/node.md":Ch,"./nodes/quadratic_eq/node.md":Eh,"./nodes/quadratic_ineq/node.md":Rh,"./nodes/rational_expr/node.md":Ph,"./nodes/seq_limits/node.md":Dh,"./nodes/sequences/node.md":Nh,"./nodes/sets/node.md":Bh,"./nodes/sin_cos_law/node.md":Ih,"./nodes/solid_geom/node.md":Fh,"./nodes/stat_lp/node.md":Lh,"./nodes/thales/node.md":Oh,"./nodes/trig_basic/node.md":Hh,"./nodes/trig_eq/node.md":Gh,"./nodes/trig_formulas/node.md":Wh,"./nodes/trig_lp/node.md":Uh,"./nodes/vectors/node.md":Vh,"./nodes/vieta/node.md":Kh}),z5=Pd(k5,/\.\/nodes\/([^/]+)\/node\.md$/),S5=Object.assign({"./nodes/abs_value/questions/01.md":Qh,"./nodes/abs_value/questions/02.md":Yh,"./nodes/abs_value/questions/03.md":Xh,"./nodes/analytic_geom/questions/01.md":Zh,"./nodes/analytic_geom/questions/02.md":Jh,"./nodes/analytic_geom/questions/03.md":e4,"./nodes/area_perimeter/questions/01.md":t4,"./nodes/area_perimeter/questions/02.md":n4,"./nodes/area_perimeter/questions/03.md":r4,"./nodes/arith_geom/questions/01.md":i4,"./nodes/arith_geom/questions/02.md":o4,"./nodes/arith_geom/questions/03.md":s4,"./nodes/bernoulli/questions/01.md":a4,"./nodes/bernoulli/questions/02.md":l4,"./nodes/bernoulli/questions/03.md":u4,"./nodes/binom_theorem/questions/01.md":c4,"./nodes/binom_theorem/questions/02.md":d4,"./nodes/binom_theorem/questions/03.md":m4,"./nodes/circle_eq/questions/01.md":f4,"./nodes/circle_eq/questions/02.md":p4,"./nodes/circle_eq/questions/03.md":h4,"./nodes/combinations/questions/01.md":g4,"./nodes/combinations/questions/02.md":v4,"./nodes/combinations/questions/03.md":y4,"./nodes/complex/questions/01.md":x4,"./nodes/complex/questions/02.md":b4,"./nodes/complex/questions/03.md":w4,"./nodes/cond_prob/questions/01.md":_4,"./nodes/cond_prob/questions/02.md":$4,"./nodes/cond_prob/questions/03.md":k4,"./nodes/conic_sections/questions/01.md":z4,"./nodes/conic_sections/questions/02.md":S4,"./nodes/conic_sections/questions/03.md":T4,"./nodes/counting/questions/01.md":q4,"./nodes/counting/questions/02.md":M4,"./nodes/counting/questions/03.md":j4,"./nodes/data_basics/questions/01.md":A4,"./nodes/data_basics/questions/02.md":C4,"./nodes/data_basics/questions/03.md":E4,"./nodes/deriv_apps/questions/01.md":R4,"./nodes/deriv_apps/questions/02.md":P4,"./nodes/deriv_apps/questions/03.md":D4,"./nodes/derivative/questions/01.md":N4,"./nodes/derivative/questions/02.md":B4,"./nodes/derivative/questions/03.md":I4,"./nodes/distributions/questions/01.md":F4,"./nodes/distributions/questions/02.md":L4,"./nodes/distributions/questions/03.md":O4,"./nodes/factoring/questions/01.md":H4,"./nodes/factoring/questions/02.md":G4,"./nodes/factoring/questions/03.md":W4,"./nodes/fn_compositions/questions/01.md":U4,"./nodes/fn_compositions/questions/02.md":V4,"./nodes/fn_compositions/questions/03.md":K4,"./nodes/fn_concept/questions/01.md":Q4,"./nodes/fn_concept/questions/02.md":Y4,"./nodes/fn_concept/questions/03.md":X4,"./nodes/fn_exp/questions/01.md":Z4,"./nodes/fn_exp/questions/02.md":J4,"./nodes/fn_exp/questions/03.md":e2,"./nodes/fn_linear/questions/01.md":t2,"./nodes/fn_linear/questions/02.md":n2,"./nodes/fn_linear/questions/03.md":r2,"./nodes/fn_log/questions/01.md":i2,"./nodes/fn_log/questions/02.md":o2,"./nodes/fn_log/questions/03.md":s2,"./nodes/fn_poly/questions/01.md":a2,"./nodes/fn_poly/questions/02.md":l2,"./nodes/fn_poly/questions/03.md":u2,"./nodes/fn_quadratic/questions/01.md":c2,"./nodes/fn_quadratic/questions/02.md":d2,"./nodes/fn_quadratic/questions/03.md":m2,"./nodes/fn_trig/questions/01.md":f2,"./nodes/fn_trig/questions/02.md":p2,"./nodes/fn_trig/questions/03.md":h2,"./nodes/fractions/questions/01.md":g2,"./nodes/fractions/questions/02.md":v2,"./nodes/fractions/questions/03.md":y2,"./nodes/geo_series/questions/01.md":x2,"./nodes/geo_series/questions/02.md":b2,"./nodes/geo_series/questions/03.md":w2,"./nodes/integers/questions/01.md":_2,"./nodes/integers/questions/02.md":$2,"./nodes/integers/questions/03.md":k2,"./nodes/integral/questions/01.md":z2,"./nodes/integral/questions/02.md":S2,"./nodes/integral/questions/03.md":T2,"./nodes/limits/questions/01.md":q2,"./nodes/limits/questions/02.md":M2,"./nodes/limits/questions/03.md":j2,"./nodes/linear_eq/questions/01.md":A2,"./nodes/linear_eq/questions/02.md":C2,"./nodes/linear_eq/questions/03.md":E2,"./nodes/linear_ineq/questions/01.md":R2,"./nodes/linear_ineq/questions/02.md":P2,"./nodes/linear_ineq/questions/03.md":D2,"./nodes/linear_sys/questions/01.md":N2,"./nodes/linear_sys/questions/02.md":B2,"./nodes/linear_sys/questions/03.md":I2,"./nodes/log_eq/questions/01.md":F2,"./nodes/log_eq/questions/02.md":L2,"./nodes/log_eq/questions/03.md":O2,"./nodes/log_exp/questions/01.md":H2,"./nodes/log_exp/questions/02.md":G2,"./nodes/log_exp/questions/03.md":W2,"./nodes/logic_basics/questions/01.md":U2,"./nodes/logic_basics/questions/02.md":V2,"./nodes/logic_basics/questions/03.md":K2,"./nodes/optimization_lp/questions/01.md":Q2,"./nodes/optimization_lp/questions/02.md":Y2,"./nodes/optimization_lp/questions/03.md":X2,"./nodes/param_eq/questions/01.md":Z2,"./nodes/param_eq/questions/02.md":J2,"./nodes/param_eq/questions/03.md":e3,"./nodes/permutations/questions/01.md":t3,"./nodes/permutations/questions/02.md":n3,"./nodes/permutations/questions/03.md":r3,"./nodes/planimetria_lp/questions/01.md":i3,"./nodes/planimetria_lp/questions/02.md":o3,"./nodes/planimetria_lp/questions/03.md":s3,"./nodes/poly_roots/questions/01.md":a3,"./nodes/poly_roots/questions/02.md":l3,"./nodes/poly_roots/questions/03.md":u3,"./nodes/polynomials/questions/01.md":c3,"./nodes/polynomials/questions/02.md":d3,"./nodes/polynomials/questions/03.md":m3,"./nodes/powers/questions/01.md":f3,"./nodes/powers/questions/02.md":p3,"./nodes/powers/questions/03.md":h3,"./nodes/probability/questions/01.md":g3,"./nodes/probability/questions/02.md":v3,"./nodes/probability/questions/03.md":y3,"./nodes/proof/questions/01.md":x3,"./nodes/proof/questions/02.md":b3,"./nodes/proof/questions/03.md":w3,"./nodes/pythagoras/questions/01.md":_3,"./nodes/pythagoras/questions/02.md":$3,"./nodes/pythagoras/questions/03.md":k3,"./nodes/quadratic_eq/questions/01.md":z3,"./nodes/quadratic_eq/questions/02.md":S3,"./nodes/quadratic_eq/questions/03.md":T3,"./nodes/quadratic_ineq/questions/01.md":q3,"./nodes/quadratic_ineq/questions/02.md":M3,"./nodes/quadratic_ineq/questions/03.md":j3,"./nodes/rational_expr/questions/01.md":A3,"./nodes/rational_expr/questions/02.md":C3,"./nodes/rational_expr/questions/03.md":E3,"./nodes/seq_limits/questions/01.md":R3,"./nodes/seq_limits/questions/02.md":P3,"./nodes/seq_limits/questions/03.md":D3,"./nodes/sequences/questions/01.md":N3,"./nodes/sequences/questions/02.md":B3,"./nodes/sequences/questions/03.md":I3,"./nodes/sets/questions/01.md":F3,"./nodes/sets/questions/02.md":L3,"./nodes/sets/questions/03.md":O3,"./nodes/sin_cos_law/questions/01.md":H3,"./nodes/sin_cos_law/questions/02.md":G3,"./nodes/sin_cos_law/questions/03.md":W3,"./nodes/solid_geom/questions/01.md":U3,"./nodes/solid_geom/questions/02.md":V3,"./nodes/solid_geom/questions/03.md":K3,"./nodes/stat_lp/questions/01.md":Q3,"./nodes/stat_lp/questions/02.md":Y3,"./nodes/stat_lp/questions/03.md":X3,"./nodes/thales/questions/01.md":Z3,"./nodes/thales/questions/02.md":J3,"./nodes/thales/questions/03.md":e5,"./nodes/trig_basic/questions/01.md":t5,"./nodes/trig_basic/questions/02.md":n5,"./nodes/trig_basic/questions/03.md":r5,"./nodes/trig_eq/questions/01.md":i5,"./nodes/trig_eq/questions/02.md":o5,"./nodes/trig_eq/questions/03.md":s5,"./nodes/trig_formulas/questions/01.md":a5,"./nodes/trig_formulas/questions/02.md":l5,"./nodes/trig_formulas/questions/03.md":u5,"./nodes/trig_lp/questions/01.md":c5,"./nodes/trig_lp/questions/02.md":d5,"./nodes/trig_lp/questions/03.md":m5,"./nodes/vectors/questions/01.md":f5,"./nodes/vectors/questions/02.md":p5,"./nodes/vectors/questions/03.md":h5,"./nodes/vieta/questions/01.md":g5,"./nodes/vieta/questions/02.md":v5,"./nodes/vieta/questions/03.md":y5}),T5=Dd(S5,/\.\/nodes\/([^/]+)\/questions\//),q5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Nd,QUESTION_BANK:T5,RAW_EDGES:b5,RAW_NODES:z5,SCOPE_COLORS:_5,SCOPE_LABELS:$5,SECTIONS:w5},Symbol.toStringTag,{value:"Module"})),M5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,j5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,A5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,C5=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,E5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,R5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,P5=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,D5=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,N5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,B5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,I5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,F5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,L5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,O5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,H5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,G5=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,W5=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,U5=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,V5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,K5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,Q5=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Y5=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,X5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,Z5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,J5=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,e6=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,t6=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,n6=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,r6=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,i6=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,o6=`---
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
`,s6=`---
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
`,a6=`---
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
`,l6=`---
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
`,u6=`---
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
`,c6=`---
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
`,d6=`---
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
`,m6=`---
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
`,f6=`---
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
`,p6=`---
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

`,h6=`---
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

`,g6=`---
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

`,v6=`---
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
`,y6=`---
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
`,x6=`---
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
`,b6=`---
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
`,w6=`---
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
`,_6=`---
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
`,$6=`---
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

`,k6=`---
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

`,z6=`---
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

`,S6=`---
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

`,T6=`---
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

`,q6=`---
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

`,M6=`---
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
`,j6=`---
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
`,A6=`---
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
`,C6=`---
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
`,E6=`---
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
`,R6=`---
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
`,P6=`---
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
`,D6=`---
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
`,N6=`---
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
`,B6=`---
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
`,I6=`---
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
`,F6=`---
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
`,L6=`---
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
`,O6=`---
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
`,H6=`---
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
`,G6=`---
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
`,W6=`---
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
`,U6=`---
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
`,V6=`---
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
`,K6=`---
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
`,Q6=`---
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
`,Y6=`---
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

`,X6=`---
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

`,Z6=`---
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

`,J6=`---
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

`,e7=`---
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

`,t7=`---
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

`,n7=`---
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

`,r7=`---
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

`,i7=`---
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

`,o7=`---
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
`,s7=`---
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
`,a7=`---
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
`,l7=`---
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
`,u7=`---
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
`,c7=`---
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
`,d7=`---
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

`,m7=`---
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

`,f7=`---
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

`,p7=`---
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

`,h7=`---
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

`,g7=`---
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

`,v7=`---
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
`,y7=`---
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
`,x7=`---
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
`,b7=`---
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
`,w7=`---
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
`,_7=`---
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
`,$7=`---
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
`,k7=`---
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
`,z7=`---
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
`,S7=`---
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
`,T7=`---
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

`,q7=`---
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

`,M7=`---
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
`,j7=`---
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
`,A7=`---
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
`,C7=`---
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

`,E7=`---
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

`,R7=`---
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

`,P7=`---
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
`,D7=`---
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
`,N7=`---
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
`,B7=`---
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

`,I7=`---
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

`,F7=`---
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

`,L7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],O7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},H7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},G7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},Bd={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},W7=Object.assign({"./nodes/binary_ops/node.md":M5,"./nodes/cosets/node.md":j5,"./nodes/cyclic_groups/node.md":A5,"./nodes/direct_sums/node.md":C5,"./nodes/field_extensions/node.md":E5,"./nodes/fields_intro/node.md":R5,"./nodes/finitely_generated/node.md":P5,"./nodes/free_modules/node.md":D5,"./nodes/group_actions/node.md":N5,"./nodes/group_homomorphisms/node.md":B5,"./nodes/groups_intro/node.md":I5,"./nodes/ideals/node.md":F5,"./nodes/induction/node.md":L5,"./nodes/integral_domains/node.md":O5,"./nodes/iso_theorem/node.md":H5,"./nodes/jordan_normal_form/node.md":G5,"./nodes/module_homs/node.md":W5,"./nodes/modules_intro/node.md":U5,"./nodes/normal_subgroups/node.md":V5,"./nodes/poly_rings/node.md":K5,"./nodes/primary_decomp/node.md":Q5,"./nodes/rational_canonical/node.md":Y5,"./nodes/relations/node.md":X5,"./nodes/ring_homomorphisms/node.md":Z5,"./nodes/rings_intro/node.md":J5,"./nodes/sets_functions/node.md":e6,"./nodes/subgroups/node.md":t6,"./nodes/submodules/node.md":n6,"./nodes/sylow/node.md":r6,"./nodes/torsion_modules/node.md":i6}),U7=Pd(W7,/\.\/nodes\/([^/]+)\/node\.md$/),V7=Object.assign({"./nodes/binary_ops/questions/01.md":o6,"./nodes/binary_ops/questions/02.md":s6,"./nodes/binary_ops/questions/03.md":a6,"./nodes/cosets/questions/01.md":l6,"./nodes/cosets/questions/02.md":u6,"./nodes/cosets/questions/03.md":c6,"./nodes/cyclic_groups/questions/01.md":d6,"./nodes/cyclic_groups/questions/02.md":m6,"./nodes/cyclic_groups/questions/03.md":f6,"./nodes/direct_sums/questions/01.md":p6,"./nodes/direct_sums/questions/02.md":h6,"./nodes/direct_sums/questions/03.md":g6,"./nodes/field_extensions/questions/01.md":v6,"./nodes/field_extensions/questions/02.md":y6,"./nodes/field_extensions/questions/03.md":x6,"./nodes/fields_intro/questions/01.md":b6,"./nodes/fields_intro/questions/02.md":w6,"./nodes/fields_intro/questions/03.md":_6,"./nodes/finitely_generated/questions/01.md":$6,"./nodes/finitely_generated/questions/02.md":k6,"./nodes/finitely_generated/questions/03.md":z6,"./nodes/free_modules/questions/01.md":S6,"./nodes/free_modules/questions/02.md":T6,"./nodes/free_modules/questions/03.md":q6,"./nodes/group_actions/questions/01.md":M6,"./nodes/group_actions/questions/02.md":j6,"./nodes/group_actions/questions/03.md":A6,"./nodes/group_homomorphisms/questions/01.md":C6,"./nodes/group_homomorphisms/questions/02.md":E6,"./nodes/group_homomorphisms/questions/03.md":R6,"./nodes/groups_intro/questions/01.md":P6,"./nodes/groups_intro/questions/02.md":D6,"./nodes/groups_intro/questions/03.md":N6,"./nodes/ideals/questions/01.md":B6,"./nodes/ideals/questions/02.md":I6,"./nodes/ideals/questions/03.md":F6,"./nodes/induction/questions/01.md":L6,"./nodes/induction/questions/02.md":O6,"./nodes/induction/questions/03.md":H6,"./nodes/integral_domains/questions/01.md":G6,"./nodes/integral_domains/questions/02.md":W6,"./nodes/integral_domains/questions/03.md":U6,"./nodes/iso_theorem/questions/01.md":V6,"./nodes/iso_theorem/questions/02.md":K6,"./nodes/iso_theorem/questions/03.md":Q6,"./nodes/jordan_normal_form/questions/01.md":Y6,"./nodes/jordan_normal_form/questions/02.md":X6,"./nodes/jordan_normal_form/questions/03.md":Z6,"./nodes/module_homs/questions/01.md":J6,"./nodes/module_homs/questions/02.md":e7,"./nodes/module_homs/questions/03.md":t7,"./nodes/modules_intro/questions/01.md":n7,"./nodes/modules_intro/questions/02.md":r7,"./nodes/modules_intro/questions/03.md":i7,"./nodes/normal_subgroups/questions/01.md":o7,"./nodes/normal_subgroups/questions/02.md":s7,"./nodes/normal_subgroups/questions/03.md":a7,"./nodes/poly_rings/questions/01.md":l7,"./nodes/poly_rings/questions/02.md":u7,"./nodes/poly_rings/questions/03.md":c7,"./nodes/primary_decomp/questions/01.md":d7,"./nodes/primary_decomp/questions/02.md":m7,"./nodes/primary_decomp/questions/03.md":f7,"./nodes/rational_canonical/questions/01.md":p7,"./nodes/rational_canonical/questions/02.md":h7,"./nodes/rational_canonical/questions/03.md":g7,"./nodes/relations/questions/01.md":v7,"./nodes/relations/questions/02.md":y7,"./nodes/relations/questions/03.md":x7,"./nodes/ring_homomorphisms/questions/01.md":b7,"./nodes/ring_homomorphisms/questions/02.md":w7,"./nodes/ring_homomorphisms/questions/03.md":_7,"./nodes/rings_intro/questions/01.md":$7,"./nodes/rings_intro/questions/02.md":k7,"./nodes/rings_intro/questions/03.md":z7,"./nodes/sets_functions/questions/01.md":S7,"./nodes/sets_functions/questions/02.md":T7,"./nodes/sets_functions/questions/03.md":q7,"./nodes/subgroups/questions/01.md":M7,"./nodes/subgroups/questions/02.md":j7,"./nodes/subgroups/questions/03.md":A7,"./nodes/submodules/questions/01.md":C7,"./nodes/submodules/questions/02.md":E7,"./nodes/submodules/questions/03.md":R7,"./nodes/sylow/questions/01.md":P7,"./nodes/sylow/questions/02.md":D7,"./nodes/sylow/questions/03.md":N7,"./nodes/torsion_modules/questions/01.md":B7,"./nodes/torsion_modules/questions/02.md":I7,"./nodes/torsion_modules/questions/03.md":F7}),K7=Dd(V7,/\.\/nodes\/([^/]+)\/questions\//),Q7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Bd,QUESTION_BANK:K7,RAW_EDGES:L7,RAW_NODES:U7,SCOPE_COLORS:H7,SCOPE_LABELS:G7,SECTIONS:O7},Symbol.toStringTag,{value:"Module"})),Y7={math_pl:q5,abstract_algebra:Q7},X7=[Nd,Bd],Z7="math_pl",J7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."}};function ee(o,n="pl"){const r=J7[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function eg(o,n){const r={},s={};return o.forEach(l=>{r[l.id]=[],s[l.id]=[]}),n.forEach(([l,u])=>{var m,h;(m=r[u])==null||m.push(l),(h=s[l])==null||h.push(u)}),{prereqs:r,dependents:s}}function Fl(o,n){const r=Object.fromEntries(o.map(m=>[m.id,0])),s=Object.fromEntries(o.map(m=>[m.id,[]]));for(const[m,h]of n)r[h]!==void 0&&r[h]++,s[m]!==void 0&&s[m].push(h);const l=Object.fromEntries(o.map(m=>[m.id,0])),u=o.filter(m=>r[m.id]===0).map(m=>m.id);for(;u.length;){const m=u.shift();for(const h of s[m])l[h]=Math.max(l[h],l[m]+1),--r[h]===0&&u.push(h)}return l}const tg={id:"spectral",label:"Spectral"};function ng(o,n,r,s,l=80){const u=o.length,m=Object.fromEntries(o.map((N,H)=>[N.id,H])),h=Array.from({length:u},()=>new Float64Array(u));n.forEach(([N,H])=>{const J=m[N],be=m[H];J==null||be==null||(h[J][be]=1,h[be][J]=1)});const g=h.map(N=>N.reduce((H,J)=>H+J,0)),y=N=>N.map((H,J)=>{let be=0;for(let ge=0;ge<u;ge++)be+=h[J][ge]*N[ge];return g[J]*N[J]-be}),b=(N,H)=>N.reduce((J,be,ge)=>J+be*H[ge],0),$=N=>{const H=Math.sqrt(b(N,N))||1;return N.map(J=>J/H)},k=(N,H)=>{let J=[...N];return H.forEach(be=>{const ge=b(J,be);J=J.map((ce,pe)=>ce-ge*be[pe])}),$(J)},q=(N,H=400)=>{let J=$(Array.from({length:u},()=>Math.random()-.5));J=k(J,N);for(let be=0;be<H;be++){const ge=Math.max(...g)+1;J=k(J.map((ce,pe)=>ge*ce-y(J)[pe]),N)}return J},E=$(new Array(u).fill(1)),R=q([E]),I=q([E,R]),P=Math.min(...R),W=Math.max(...R),G=Math.min(...I),L=Math.max(...I),F=W-P<1e-6?1:(r-2*l)/(W-P),V=L-G<1e-6?1:(s-2*l)/(L-G);return o.map((N,H)=>({id:N.id,x:l+(R[H]-P)*F,y:l+(I[H]-G)*V,vx:0,vy:0}))}const rg=Object.freeze(Object.defineProperty({__proto__:null,apply:ng,meta:tg},Symbol.toStringTag,{value:"Module"})),ig={id:"topoRank",label:"Topo Rank"},G1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function og(o,n,r,s,l=80){const u=Fl(o,n),m=Math.max(...o.map(b=>u[b.id]??0),0),h={};for(const b of o){const $=u[b.id]??0;(h[$]??(h[$]=[])).push(b)}for(const b of Object.values(h))b.sort(($,k)=>{const q=G1.indexOf($.scope),E=G1.indexOf(k.scope);return(q===-1?999:q)-(E===-1?999:E)});const g=r-2*l,y=s-2*l;return o.map(b=>{const $=u[b.id]??0,k=h[$],q=k.indexOf(b);return{id:b.id,x:l+(q+.5)/k.length*g,y:l+$/Math.max(m,1)*y,vx:0,vy:0}})}const sg=Object.freeze(Object.defineProperty({__proto__:null,apply:og,meta:ig},Symbol.toStringTag,{value:"Module"})),ag={id:"nPartite",label:"N-Partite Grid"};function lg(o,n,r,s,l=80){const u=Fl(o,n),m=Math.max(...o.map(q=>u[q.id]??0),0),h={};for(const q of o){const E=u[q.id]??0;(h[E]??(h[E]=[])).push(q)}const g={};for(const q of o)g[q.id]=[];for(const[q,E]of n)g[E]&&g[E].push(q);const y=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},$=r-2*l,k=s-2*l;for(let q=0;q<=m;q++){const E=h[q]??[];q===0?E.sort((I,P)=>{const W=y.indexOf(I.scope),G=y.indexOf(P.scope);return(W===-1?999:W)-(G===-1?999:G)}):E.sort((I,P)=>{const W=G=>{const L=g[G.id]??[];return L.length===0?r/2:L.reduce((F,V)=>{var N;return F+(((N=b[V])==null?void 0:N.x)??r/2)},0)/L.length};return W(I)-W(P)});const R=l+q/Math.max(m,1)*k;E.forEach((I,P)=>{const W=E.length===1?r/2:l+P/(E.length-1)*$;b[I.id]={x:W,y:R}})}return o.map(q=>{var E,R;return{id:q.id,x:((E=b[q.id])==null?void 0:E.x)??r/2,y:((R=b[q.id])==null?void 0:R.y)??s/2,vx:0,vy:0}})}const Id=Object.freeze(Object.defineProperty({__proto__:null,apply:lg,meta:ag},Symbol.toStringTag,{value:"Module"})),Fd=[Id,sg,rg],Ld="nPartite";function ug(o){return Fd.find(n=>n.meta.id===o)??Id}const is=1400,Ll=1e3,Mo=80,cg=.4,W1=6,dg=.35,U1=.012;function mg(o,n){const r=Fl(o,n),s=Math.max(...o.map(u=>r[u.id]??0),0),l=Object.fromEntries(o.map(u=>[u.id,Mo+(r[u.id]??0)/Math.max(s,1)*(Ll-2*Mo)]));return{ranks:r,rankY:l}}function fg(o,n){const r=Object.fromEntries(o.map((s,l)=>[s.id,l]));return n.map(([s,l])=>[r[s],r[l]]).filter(([s,l])=>s!=null&&l!=null)}function pg(o){return Math.sqrt(is*Ll/Math.max(o.length,1))*.9}function hg(o,n,r,s){return ug(o).apply(n,r,is,Ll,Mo).map(m=>({id:m.id,x:m.x+(Math.random()-.5)*20,y:s[m.id]??m.y,vx:0,vy:0}))}function gg(o,n,r,s,{ranks:l,rankY:u,simEdges:m,idealK:h}){const g=o.length,y=new Float64Array(g);for(let b=0;b<g;b++)for(let $=b+1;$<g;$++){if(l[o[b].id]!==l[o[$].id])continue;const k=o[b].x-o[$].x,q=Math.abs(k)||.1,E=h*h/(q*q),R=k<0?-1:1;y[b]+=R*E,y[$]-=R*E}for(const[b,$]of m){const k=o[$].x-o[b].x;y[b]+=k*U1,y[$]-=k*U1}for(let b=0;b<g;b++)y[b]+=(is/2-o[b].x)*.003;return o.map((b,$)=>{if(b.id===n)return{...b,x:r,y:s,vx:0,vy:0};let k=(b.vx+y[$])*cg;Math.abs(k)>W1&&(k*=W1/Math.abs(k));const q=u[b.id]??b.y,E=b.y+(q-b.y)*dg;return{...b,vx:k,vy:0,x:Math.max(Mo,Math.min(is-Mo,b.x+k)),y:E}})}function dl(o=Ld,n=300,r,s){if(!r||r.length===0)return{};const{ranks:l,rankY:u}=mg(r,s??[]),m=fg(r,s??[]),h=pg(r),g={ranks:l,rankY:u,simEdges:m,idealK:h};let y=hg(o,r,s??[],u);for(let b=0;b<n;b++)y=gg(y,null,0,0,g);return Object.fromEntries(y.map(b=>[b.id,{x:b.x,y:b.y}]))}const se={bg:"#0a0e17",surface:"#0d1520",surfaceHi:"#0d1520ee",border:"#1e2d45",borderSubtle:"#1a2235",textPrimary:"#f5f6fa",textBody:"#c8d6e5",textMuted:"#8a9dbe",textDim:"#6b7d9a",textFaint:"#3a4d63",knownHi:"#2ecc71",unknownHi:"#e74c3c",frontier:"#f39c12"},Co="'JetBrains Mono','SF Mono','Fira Code',monospace",$i=(o,n)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${se.border}`,background:o?`${n}22`:"transparent",color:o?n:se.textDim,minHeight:32}),zo=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function vg(o){const n=typeof window<"u"&&window.innerWidth<600,[r,s]=K.useState(n?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[l,u]=K.useState("grab"),m=K.useRef(!1),h=K.useRef({x:0,y:0}),g=K.useRef(null),y=K.useRef(null),b=K.useCallback(L=>{L.preventDefault();const F=L.deltaY>0?.9:1.1;s(V=>{const N=Math.max(.15,Math.min(5,V.scale*F)),H=L.clientX,J=L.clientY,be=H-(H-V.x)/V.scale*N,ge=J-(J-V.y)/V.scale*N;return{x:be,y:ge,scale:N}})},[]),$=K.useCallback((L,F)=>({x:(L-r.x)/r.scale,y:(F-r.y)/r.scale}),[r]),k=K.useCallback((L,F)=>{m.current=!0,u("grabbing"),h.current={x:L-r.x,y:F-r.y}},[r]),q=K.useCallback(L=>m.current?(s(F=>({...F,x:L.clientX-h.current.x,y:L.clientY-h.current.y})),!0):!1,[]),E=K.useCallback(()=>{m.current=!1,u("grab")},[]),R=(L,F)=>{const V=L.clientX-F.clientX,N=L.clientY-F.clientY;return Math.sqrt(V*V+N*N)},I=(L,F)=>({x:(L.clientX+F.clientX)/2,y:(L.clientY+F.clientY)/2}),P=K.useCallback(L=>{L.touches.length===1?(m.current=!0,s(F=>(h.current={x:L.touches[0].clientX-F.x,y:L.touches[0].clientY-F.y},F)),g.current=null,y.current=null):L.touches.length===2&&(m.current=!1,g.current=R(L.touches[0],L.touches[1]),y.current=I(L.touches[0],L.touches[1]))},[]),W=K.useCallback(L=>{if(L.preventDefault(),L.touches.length===1&&m.current)s(F=>({...F,x:L.touches[0].clientX-h.current.x,y:L.touches[0].clientY-h.current.y}));else if(L.touches.length===2&&g.current!==null){const F=R(L.touches[0],L.touches[1]),V=I(L.touches[0],L.touches[1]),N=F/g.current;s(H=>{const J=Math.max(.15,Math.min(5,H.scale*N)),be=y.current.x,ge=y.current.y,ce=be-(be-H.x)/H.scale*J,pe=ge-(ge-H.y)/H.scale*J;return{x:ce,y:pe,scale:J}}),g.current=F,y.current=V}},[]),G=K.useCallback(()=>{m.current=!1,g.current=null,y.current=null},[]);return K.useEffect(()=>{const L=o.current;if(L)return L.addEventListener("wheel",b,{passive:!1}),L.addEventListener("touchstart",P,{passive:!1}),L.addEventListener("touchmove",W,{passive:!1}),L.addEventListener("touchend",G,{passive:!1}),()=>{L.removeEventListener("wheel",b),L.removeEventListener("touchstart",P),L.removeEventListener("touchmove",W),L.removeEventListener("touchend",G)}},[o,b,P,W,G]),{viewTransform:r,setViewTransform:s,toCanvas:$,isPanning:m,panStart:h,startPan:k,cursorStyle:l,setCursorStyle:u,handleMouseMove:q,handleMouseUp:E,handleWheel:b}}function yg(o,n,r,s){const l=K.useRef(null),u=K.useRef({x:0,y:0}),m=K.useCallback((y,b,$)=>{const k=o(b,$),q=n.find(E=>E.id===y);q&&(l.current=y,u.current={x:k.x-q.x,y:k.y-q.y},s==null||s("grabbing"))},[o,n,s]),h=K.useCallback((y,b)=>{if(!l.current)return!1;const $=o(y,b),k=l.current;return r(q=>({...q,[k]:{x:$.x-u.current.x,y:$.y-u.current.y}})),!0},[o,r]),g=K.useCallback(()=>{l.current=null,s==null||s("grab")},[s]);return{draggingNode:l,startNodeDrag:m,handleDragMove:h,handleDragEnd:g}}const Od="wizmat_v1_";function xg(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function bg(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function Sn(o,n){const r=Od+o,[s,l]=K.useState(()=>{try{const m=localStorage.getItem(r);return m===null?n:bg(m,n)}catch{return n}});K.useEffect(()=>{try{localStorage.setItem(r,xg(s))}catch{}},[r,s]);const u=K.useCallback(m=>{l(h=>typeof m=="function"?m(h):m)},[]);return[s,u]}function wg(){try{Object.keys(localStorage).filter(o=>o.startsWith(Od)).forEach(o=>localStorage.removeItem(o))}catch{}}const Kr={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function _g(o,n,r){var u;const s={...n},l=[o];for(;l.length;){const m=l.shift();s[m]!=="known"&&(s[m]="known",(u=r.prereqs[m])==null||u.forEach(h=>{s[h]!=="known"&&l.push(h)}))}return s}function Hd(o,n,r){var u;const s={...n},l=[o];for(;l.length;){const m=l.shift();s[m]!=="unknown"&&(s[m]="unknown",(u=r.dependents[m])==null||u.forEach(h=>{s[h]!=="unknown"&&l.push(h)}))}return s}function $g(o,n,r,s,l){let u={...s};if(n){for(const m of Object.keys(r))u[m]="known";for(const m of Object.keys(r))u=_g(m,u,l)}else{for(const m of Object.keys(r))u[m]="unknown";for(const m of Object.keys(r))u=Hd(m,u,l)}return u}function kg(o,n,r){return o.filter(s=>n[s.id]!=="known"&&n[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(l=>n[l]==="known")).map(s=>s.id)}function zg(o,n,r,s=.5){var l,u,m;try{const h=1-s,g=o.filter($=>n[$.id]!=="known"&&n[$.id]!=="unknown");if(g.length===0)return null;const y=g.map($=>{const k=Gd($.id,n,r),q=Wd($.id,n,r),E=s*k+h*q;return{id:$.id,erv:E||0,ancestorsToReveal:k,descendantsToReveal:q}});return y.sort(($,k)=>k.erv-$.erv),((l=y[0])==null?void 0:l.id)||((u=g[0])==null?void 0:u.id)||null}catch(h){return console.error("pickNextQuestion error:",h),((m=o.filter(y=>n[y.id]!=="known"&&n[y.id]!=="unknown")[0])==null?void 0:m.id)||null}}function Gd(o,n,r){const s=new Set,l=[...r.prereqs[o]??[]];let u=0;for(;l.length>0;){const m=l.shift();if(s.has(m))continue;s.add(m),n[m]!=="known"&&n[m]!=="unknown"&&u++;const h=r.prereqs[m]??[];for(const g of h)s.has(g)||l.push(g)}return u}function Wd(o,n,r){const s=new Set,l=[...r.dependents[o]??[]];let u=0;for(;l.length>0;){const m=l.shift();if(s.has(m))continue;s.add(m),n[m]!=="known"&&n[m]!=="unknown"&&u++;const h=r.dependents[m]??[];for(const g of h)s.has(g)||l.push(g)}return u}function Sg(o,n,r,s=.5){try{const l=o.filter(y=>n[y.id]!=="known"&&n[y.id]!=="unknown");if(l.length===0)return 0;const u=1-s;let m=0;for(const y of l){const b=Gd(y.id,n,r),$=Wd(y.id,n,r),k=s*b+u*$;m+=k||0}if(!m||m===0)return l.length;const h=l.length,g=h*h/m;return isNaN(g)?l.length:Math.ceil(g)}catch(l){return console.error("estimateRemainingQuestions error:",l),null}}function Tg(o,n,r){const s={...o};for(const[l,u]of Object.entries(n)){const m=s[l]??{alpha:1,beta:1};s[l]={alpha:m.alpha+(r?u:0),beta:m.beta+(r?0:u)}}return s}function qg(o,n){const r={};for(const s of o){const l=n[s]??{alpha:1,beta:1},u=l.alpha+l.beta,m=l.alpha/u;m>Kr.deepKnownThreshold&&u>Kr.deepMinStrength?r[s]="known":m<Kr.deepUnknownThreshold&&u>Kr.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function Mg(o,n,r){const s=new Set,l=new Set(r.map(m=>m.id)),u=[o];for(;u.length;){const m=u.shift();if(!s.has(m)&&l.has(m)){s.add(m);for(const h of n.prereqs[m]??[])s.has(h)||u.push(h)}}return s}function jg(o,n,r,s,l){var h;const u=o.filter(g=>r[g]==="uncertain");if(u.length===0)return null;const m=u.map(g=>{const y=n[g]??{alpha:1,beta:1},b=y.alpha+y.beta,$=y.alpha/b,k=1-$,q=new Set(o);let E=0;const R=[...s.prereqs[g]??[]],I=new Set;for(;R.length;){const F=R.shift();if(!I.has(F)){I.add(F),q.has(F)&&r[F]==="uncertain"&&E++;for(const V of s.prereqs[F]??[])I.has(V)||R.push(V)}}let P=0;const W=[...s.dependents[g]??[]],G=new Set;for(;W.length;){const F=W.shift();if(!G.has(F)){G.add(F),q.has(F)&&r[F]==="uncertain"&&P++;for(const V of s.dependents[F]??[])G.has(V)||W.push(V)}}const L=$*E+k*P;return{id:g,erv:L,strength:b}});return m.sort((g,y)=>Math.abs(g.erv-y.erv)>.01?y.erv-g.erv:g.strength-y.strength),((h=m[0])==null?void 0:h.id)??u[0]}function Ag(o,n,r=0){return!!(o.every(s=>n[s]!=="uncertain")||r>=Kr.deepMaxQuestions)}function Cg(o,n,r=0){const s=o.length;if(s===0)return!0;const l=o.filter(u=>n[u.id]!=="known"&&n[u.id]!=="unknown").length;return l===0||r>=Kr.quickMaxQuestions||l/s<=Kr.quickCompletionRatio}function Eg(o,n,r){const s=r?`${r}_`:"",[l,u]=Sn(`${s}diagMode`,!1),[m,h]=Sn(`${s}diagSubMode`,"quick"),[g,y]=Sn(`${s}belief`,{}),[b,$]=Sn(`${s}targetNode`,null),[k,q]=Sn(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[E,R]=Sn(`${s}answeredQuestions`,new Set),[I,P]=Sn(`${s}betaBeliefs`,{}),[W,G]=Sn(`${s}quizNode`,null),L=K.useMemo(()=>{const j=k.correct+k.incorrect;return j===0?.5:(k.correct+.5)/(j+1)},[k]),F=k.questionsAnswered,V=K.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(n)])].map(U=>({id:U})),[o,n]),N=K.useMemo(()=>l&&m==="quick"?kg(V,g,o):[],[l,m,g,o,V]),H=K.useMemo(()=>Object.keys(g).length>0||k.questionsAnswered>0,[g,k]),J=H?N:[],be=K.useMemo(()=>l&&m==="quick"?zg(V,g,o,L):null,[l,m,g,o,L,V]),ge=K.useMemo(()=>l&&m==="quick"?Sg(V,g,o,L):null,[l,m,g,o,L,V]),ce=K.useMemo(()=>l&&m==="quick"&&H&&Cg(V,g,F),[l,m,H,g,V,F]),pe=K.useMemo(()=>!l||m!=="deepdive"||!b?[]:[...Mg(b,o,V)],[l,m,b,o,V]),qe=K.useMemo(()=>m!=="deepdive"?{}:qg(pe,I),[m,pe,I]),Ue=K.useMemo(()=>!l||m!=="deepdive"||pe.length===0?null:jg(pe,I,qe,o),[l,m,pe,I,qe,o,V]),Ke=K.useMemo(()=>!l||m!=="deepdive"||pe.length===0?!1:Ag(pe,qe,F),[l,m,pe,qe,F]),Fe=K.useCallback((j,U)=>l?m==="deepdive"?pe.includes(j)?(qe[j]!=="uncertain"||G(j),!0):!1:g[j]==="unknown"?!0:U?(y(xe=>Hd(j,xe,o)),G(null),!0):g[j]==="known"?(y(xe=>{const _e={...xe};return delete _e[j],_e}),G(null),!0):(G(j),!0):!1,[l,m,g,o,pe,qe]),ae=K.useCallback((j,U,xe,_e)=>{if(m==="deepdive"){const ke=(xe==null?void 0:xe.tests)??{[j]:1};P(Ce=>Tg(Ce,ke,U))}else{const ke=(xe==null?void 0:xe.tests)??{[j]:1};y(Ce=>$g(j,U,ke,Ce,o))}typeof _e=="number"&&R(ke=>new Set([...ke,`${j}:${_e}`])),q(ke=>({correct:ke.correct+(U?1:0),incorrect:ke.incorrect+(U?0:1),questionsAnswered:ke.questionsAnswered+1})),G(null)},[m,o]),$e=K.useCallback(()=>{wg(),u(!1),h("quick"),y({}),P({}),G(null),$(null),q({correct:0,incorrect:0,questionsAnswered:0}),R(new Set)},[]),ue=K.useCallback(j=>{h("deepdive"),$(j),P({}),y({}),G(null),q({correct:0,incorrect:0,questionsAnswered:0}),R(new Set),u(!0)},[]);return{diagMode:l,setDiagMode:u,mode:m,setMode:h,quizNode:W,setQuizNode:G,questionsAnswered:F,answeredQuestions:E,setAnsweredQuestions:R,getAnsweredIndices:j=>{const U=[];return E.forEach(xe=>{const[_e,ke]=xe.split(":");_e===j&&U.push(parseInt(ke,10))}),U},handleDiagClick:Fe,handleQuizAnswer:ae,resetDiagnostic:$e,startDeepDive:ue,targetNode:b,belief:g,frontier:N,visibleFrontier:J,hasStarted:H,nextSuggestedId:be,expectedRemaining:ge,pCorrect:L,sessionComplete:ce,betaBeliefs:I,subgraphIds:pe,ddClassification:qe,ddNextNodeId:Ue,ddComplete:Ke}}const V1=640;function Rg(){const[o,n]=K.useState(()=>typeof window<"u"&&window.innerWidth<V1);return K.useEffect(()=>{const r=window.matchMedia(`(max-width: ${V1-1}px)`),s=l=>n(l.matches);return r.addEventListener("change",s),n(r.matches),()=>r.removeEventListener("change",s)},[]),o}function K1(o){return 6+o.level*2}function Pg({edges:o,nodes:n,highlightedIds:r}){const s=K.useMemo(()=>Object.fromEntries(n.map(l=>[l.id,l])),[n]);return _.jsx("g",{children:o.map(([l,u])=>{const m=s[l],h=s[u];if(!m||!h)return null;const g=(r==null?void 0:r.has(l))&&(r==null?void 0:r.has(u)),y=r&&!g,b=h.x-m.x,$=h.y-m.y,k=Math.sqrt(b*b+$*$)||1,q=K1(h)+3,E=h.x-b/k*q,R=h.y-$/k*q,I=K1(m)+2,P=m.x+b/k*I,W=m.y+$/k*I,G=y?"#0f1825":g?"#4a9eff":"#2a3f5a",L=g?1.8:1,F=y?.15:g?1:.55,V=y?"url(#arrow-dim)":g?"url(#arrow-hi)":"url(#arrow-default)";return _.jsx("line",{x1:P,y1:W,x2:E,y2:R,stroke:G,strokeWidth:L,opacity:F,markerEnd:V},`${l}-${u}`)})})}function Dg(o){return 6+o.level*2}function Ng(o){return o<.4?8:o<.65?13:o<1?18:28}function Bg({nodes:o,filteredIds:n,highlightedIds:r,selected:s,onSelect:l,onHover:u,lang:m,diagMode:h,belief:g,frontier:y,scale:b,scopeColors:$}){return _.jsx("g",{children:o.map(k=>{const q=Dg(k),E=($==null?void 0:$[k.scope])||"#4a9eff",R=n&&!n.has(k.id),I=r==null?void 0:r.has(k.id),P=s===k.id,W=r&&!I||R,G=m==="pl"?k.labelPl:k.label,L=Ng(b??1);let F=E,V=W?.15:.9,N=W?.2:.85,H=null,J=2;if(h){const be=g[k.id],ge=y.includes(k.id);V=R?.1:.9,N=R?.15:.9,be==="known"?(F="#27ae60",H="#2ecc71"):be==="unknown"?(F="#c0392b",V=R?.1:.5,H="#e74c3c"):ge?(F="#f39c12",H="#f1c40f",J=3):(F=E,V=R?.1:.35)}return _.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>l(k.id===s?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(P||h&&H)&&_.jsx("circle",{cx:k.x,cy:k.y,r:q+(P?5:4),fill:"none",stroke:P?E:H,strokeWidth:P?2:J,opacity:P?.5:.9}),_.jsx("circle",{cx:k.x,cy:k.y,r:q,fill:F,fillOpacity:V,stroke:!h&&(I||P)?E:"none",strokeWidth:1.5}),_.jsx("text",{x:k.x,y:k.y+q+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:N,style:{pointerEvents:"none",userSelect:"none"},children:G.length>L?G.slice(0,L-1)+"…":G})]},k.id)})})}function Ig({resource:o,lang:n,onClose:r}){const s=K.useRef(null);if(K.useEffect(()=>{const b=$=>{$.key==="Escape"&&r()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[r]),K.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const l=n==="pl"?o.titlePl:o.titleEn,u=o.type==="interactive",m={interactive:ee("resourceInteractive",n),video:ee("resourceVideo",n),article:ee("resourceArticle",n)}[o.type]??o.type,h={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!u)return window.open(o.url,"_blank","noopener"),r(),null;const y=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`;return _.jsxs("div",{ref:s,onClick:b=>{b.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[_.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),_.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${h}33`,boxShadow:`0 0 48px ${h}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#0d1520f8",borderBottom:`1px solid ${h}22`,flexShrink:0,fontFamily:Co},children:[_.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:h,background:`${h}18`,border:`1px solid ${h}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:m}),_.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:se.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l}),_.jsx("button",{onClick:()=>window.open(y,"_blank","noopener"),title:ee("openInTab",n),style:Q1,children:"↗"}),_.jsx("button",{onClick:r,title:ee("closeResource",n),style:{...Q1,fontSize:18,lineHeight:1},children:"×"})]}),_.jsx("iframe",{src:y,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:l,loading:"eager"})]})]})}const Q1={background:"none",border:`1px solid ${se.border}`,borderRadius:5,color:se.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:Co,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};function Fg({nodeId:o,nodes:n,adjacency:r,lang:s,SCOPE_COLORS:l,SCOPE_LABELS:u,SECTIONS:m,isMobile:h,onClose:g}){var V,N;const y=n.find(H=>H.id===o),[b,$]=K.useState(null);if(!y)return null;const k=(l==null?void 0:l[y.scope])??"#4a9eff",q=s==="pl"?y.labelPl:y.label,E=r.prereqs[o]||[],R=r.dependents[o]||[],I=y.resources??[],P=Object.fromEntries(n.map(H=>[H.id,H])),W=H=>{var J,be;return s==="pl"?(J=P[H])==null?void 0:J.labelPl:(be=P[H])==null?void 0:be.label},G=h?12:10,L={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"},F=_.jsxs(_.Fragment,{children:[h&&_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[_.jsx("div",{style:{color:k,fontWeight:700,fontSize:h?16:13,marginBottom:4},children:q}),h&&_.jsx("button",{onClick:g,style:{background:"none",border:"none",color:se.textDim,fontSize:22,cursor:"pointer",lineHeight:1,padding:"0 4px"},children:"×"})]}),_.jsxs("div",{style:{color:se.textDim,fontSize:G,marginBottom:12,lineHeight:1.6},children:[(V=m==null?void 0:m[y.section])==null?void 0:V.label," · ",(N=u==null?void 0:u[y.scope])==null?void 0:N[s==="pl"?"pl":"en"]," · ",ee("level",s)," ",y.level]}),E.length>0?_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:G,fontWeight:600,marginBottom:6},children:ee("prerequisites",s)}),E.map(H=>_.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:G,lineHeight:h?2:1.7},children:["← ",W(H)]},H))]}):_.jsx("div",{style:{color:se.textFaint,fontSize:G,fontStyle:"italic"},children:ee("noPrereqs",s)}),R.length>0?_.jsxs("div",{style:{marginTop:12},children:[_.jsx("div",{style:{color:"#3dc9b0",fontSize:G,fontWeight:600,marginBottom:6},children:ee("enables",s)}),R.map(H=>_.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:G,lineHeight:h?2:1.7},children:["→ ",W(H)]},H))]}):_.jsx("div",{style:{color:se.textFaint,fontSize:G,fontStyle:"italic",marginTop:10},children:ee("noDependents",s)}),I.length>0&&_.jsxs("div",{style:{marginTop:14,borderTop:`1px solid ${se.border}`,paddingTop:12},children:[_.jsx("div",{style:{color:"#FFD166",fontSize:G,fontWeight:600,marginBottom:8,letterSpacing:"0.02em"},children:ee("learningResources",s)}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:I.map((H,J)=>{const be=s==="pl"?H.titlePl:H.titleEn,ge=L[H.type]??"#8a9dbe",ce=H.type==="interactive"?"resourceInteractive":H.type==="video"?"resourceVideo":"resourceArticle";return _.jsxs("button",{onClick:()=>$(H),style:{display:"flex",alignItems:"flex-start",gap:8,background:`${ge}0f`,border:`1px solid ${ge}30`,borderRadius:6,padding:h?"10px 12px":"7px 10px",cursor:"pointer",textAlign:"left",width:"100%",transition:"background 0.15s, border-color 0.15s",fontFamily:Co},onMouseEnter:pe=>{pe.currentTarget.style.background=`${ge}1e`,pe.currentTarget.style.borderColor=`${ge}60`},onMouseLeave:pe=>{pe.currentTarget.style.background=`${ge}0f`,pe.currentTarget.style.borderColor=`${ge}30`},children:[_.jsx("span",{style:{fontSize:h?16:13,flexShrink:0,marginTop:1},children:H.type==="interactive"?"⬡":H.type==="video"?"▶":"📄"}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontSize:G,color:se.textBody,lineHeight:1.4,fontWeight:500},children:be}),_.jsx("div",{style:{fontSize:Math.max(G-1,9),color:ge,marginTop:2,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:ee(ce,s)})]}),_.jsx("span",{style:{fontSize:12,color:se.textDim,alignSelf:"center",flexShrink:0},children:"→"})]},J)})})]})]});return _.jsxs(_.Fragment,{children:[h?_.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:`1px solid ${k}40`,borderRadius:"14px 14px 0 0",padding:"16px 16px 32px",zIndex:30,maxHeight:"60vh",overflowY:"auto"},children:F}):_.jsx("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:`1px solid ${k}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:se.textBody,lineHeight:1.6,zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:F}),b&&_.jsx(Ig,{resource:b,lang:s,onClose:()=>$(null)})]})}class Ot{constructor(n,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=s}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Ot(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Qt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Qt(r,Ot.range(this,n))}}class ne{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+n,l,u,m=r&&r.loc;if(m&&m.start<=m.end){var h=m.lexer.input;l=m.start,u=m.end,l===h.length?s+=" at end of input: ":s+=" at position "+(l+1)+": ";var g=h.slice(l,u).replace(/[^]/g,"$&̲"),y;l>15?y="…"+h.slice(l-15,l):y=h.slice(0,l);var b;u+15<h.length?b=h.slice(u,u+15)+"…":b=h.slice(u),s+=y+g+b}var $=new Error(s);return $.name="ParseError",$.__proto__=ne.prototype,$.position=l,l!=null&&u!=null&&($.length=u-l),$.rawMessage=n,$}}ne.prototype.__proto__=Error.prototype;var Lg=/([A-Z])/g,Ol=o=>o.replace(Lg,"-$1").toLowerCase(),Og={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Hg=/[&><"']/g,Mt=o=>String(o).replace(Hg,n=>Og[n]),To=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?To(o.body[0]):o:o.type==="font"?To(o.body):o,Gg=new Set(["mathord","textord","atom"]),Kn=o=>Gg.has(To(o).type),Wg=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},ns={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Ug(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Hl{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in ns)if(ns.hasOwnProperty(r)){var s=ns[r];this[r]=n[r]!==void 0?s.processor?s.processor(n[r]):n[r]:Ug(s)}}reportNonstrict(n,r,s){var l=this.strict;if(typeof l=="function"&&(l=l(n,r,s)),!(!l||l==="ignore")){if(l===!0||l==="error")throw new ne("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),s);l==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,s){var l=this.strict;if(typeof l=="function")try{l=l(n,r,s)}catch{l="error"}return!l||l==="ignore"?!1:l===!0||l==="error"?!0:l==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=Wg(n.url);if(r==null)return!1;n.protocol=r}var s=typeof this.trust=="function"?this.trust(n):this.trust;return!!s}}class _r{constructor(n,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=s}sup(){return Tn[Vg[this.id]]}sub(){return Tn[Kg[this.id]]}fracNum(){return Tn[Qg[this.id]]}fracDen(){return Tn[Yg[this.id]]}cramp(){return Tn[Xg[this.id]]}text(){return Tn[Zg[this.id]]}isTight(){return this.size>=2}}var Gl=0,os=1,zi=2,Un=3,jo=4,sn=5,Si=6,Rt=7,Tn=[new _r(Gl,0,!1),new _r(os,0,!0),new _r(zi,1,!1),new _r(Un,1,!0),new _r(jo,2,!1),new _r(sn,2,!0),new _r(Si,3,!1),new _r(Rt,3,!0)],Vg=[jo,sn,jo,sn,Si,Rt,Si,Rt],Kg=[sn,sn,sn,sn,Rt,Rt,Rt,Rt],Qg=[zi,Un,jo,sn,Si,Rt,Si,Rt],Yg=[Un,Un,sn,sn,Rt,Rt,Rt,Rt],Xg=[os,os,Un,Un,sn,sn,Rt,Rt],Zg=[Gl,os,zi,Un,zi,Un,zi,Un],Ae={DISPLAY:Tn[Gl],TEXT:Tn[zi],SCRIPT:Tn[jo],SCRIPTSCRIPT:Tn[Si]},ql=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Jg(o){for(var n=0;n<ql.length;n++)for(var r=ql[n],s=0;s<r.blocks.length;s++){var l=r.blocks[s];if(o>=l[0]&&o<=l[1])return r.name}return null}var rs=[];ql.forEach(o=>o.blocks.forEach(n=>rs.push(...n)));function Ud(o){for(var n=0;n<rs.length;n+=2)if(o>=rs[n]&&o<=rs[n+1])return!0;return!1}var ki=80,ev=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},tv=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},nv=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},rv=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},iv=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},ov=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},sv=function(n,r,s){var l=s-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+l+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},av=function(n,r,s){r=1e3*r;var l="";switch(n){case"sqrtMain":l=ev(r,ki);break;case"sqrtSize1":l=tv(r,ki);break;case"sqrtSize2":l=nv(r,ki);break;case"sqrtSize3":l=rv(r,ki);break;case"sqrtSize4":l=iv(r,ki);break;case"sqrtTall":l=sv(r,ki,s)}return l},lv=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},Y1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},uv=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Eo{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var qn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},V0={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},X1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function cv(o,n){qn[o]=n}function Wl(o,n,r){if(!qn[n])throw new Error("Font metrics not found for font: "+n+".");var s=o.charCodeAt(0),l=qn[n][s];if(!l&&o[0]in X1&&(s=X1[o[0]].charCodeAt(0),l=qn[n][s]),!l&&r==="text"&&Ud(s)&&(l=qn[n][77]),l)return{depth:l[0],height:l[1],italic:l[2],skew:l[3],width:l[4]}}var ml={};function dv(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!ml[n]){var r=ml[n]={cssEmPerMu:V0.quad[n]/18};for(var s in V0)V0.hasOwnProperty(s)&&(r[s]=V0[s][n])}return ml[n]}var mv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Z1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],J1=function(n,r){return r.size<2?n:mv[n-1][r.size-1]};class Wn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Wn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Z1[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return new Wn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:J1(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Z1[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=J1(Wn.BASESIZE,n);return this.size===r&&this.textSize===Wn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Wn.BASESIZE?["sizing","reset-size"+this.size,"size"+Wn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=dv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Wn.BASESIZE=6;var Ml={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},fv={ex:!0,em:!0,mu:!0},Vd=function(n){return typeof n!="string"&&(n=n.unit),n in Ml||n in fv||n==="ex"},st=function(n,r){var s;if(n.unit in Ml)s=Ml[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var l;if(r.style.isTight()?l=r.havingStyle(r.style.text()):l=r,n.unit==="ex")s=l.fontMetrics().xHeight;else if(n.unit==="em")s=l.fontMetrics().quad;else throw new ne("Invalid unit: '"+n.unit+"'");l!==r&&(s*=l.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*s,r.maxSize)},le=function(n){return+n.toFixed(4)+"em"},zr=function(n){return n.filter(r=>r).join(" ")},Kd=function(n,r,s){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var l=r.getColor();l&&(this.style.color=l)}},Qd=function(n){var r=document.createElement(n);r.className=zr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var l in this.attributes)this.attributes.hasOwnProperty(l)&&r.setAttribute(l,this.attributes[l]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},pv=/[\s"'>/=\x00-\x1f]/,Yd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+Mt(zr(this.classes))+'"');var s="";for(var l in this.style)this.style.hasOwnProperty(l)&&(s+=Ol(l)+":"+this.style[l]+";");s&&(r+=' style="'+Mt(s)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(pv.test(u))throw new ne("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Mt(this.attributes[u])+'"'}r+=">";for(var m=0;m<this.children.length;m++)r+=this.children[m].toMarkup();return r+="</"+n+">",r};class Ro{constructor(n,r,s,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Kd.call(this,n,s,l),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Qd.call(this,"span")}toMarkup(){return Yd.call(this,"span")}}class Ul{constructor(n,r,s,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Kd.call(this,r,l),this.children=s||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Qd.call(this,"a")}toMarkup(){return Yd.call(this,"a")}}class hv{constructor(n,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=s}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+Mt(this.src)+'"'+(' alt="'+Mt(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=Ol(s)+":"+this.style[s]+";");return r&&(n+=' style="'+Mt(r)+'"'),n+="'/>",n}}var gv={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class an{constructor(n,r,s,l,u,m,h,g){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=s||0,this.italic=l||0,this.skew=u||0,this.width=m||0,this.classes=h||[],this.style=g||{},this.maxFontSize=0;var y=Jg(this.text.charCodeAt(0));y&&this.classes.push(y+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=gv[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=le(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=zr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=Mt(zr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var l in this.style)this.style.hasOwnProperty(l)&&(s+=Ol(l)+":"+this.style[l]+";");s&&(n=!0,r+=' style="'+Mt(s)+'"');var u=Mt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Vn{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var l=0;l<this.children.length;l++)r.appendChild(this.children[l].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</svg>",n}}class Sr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Y1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Mt(this.alternate)+'"/>':'<path d="'+Mt(Y1[this.pathName])+'"/>'}}class jl{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');return n+="/>",n}}function ed(o){if(o instanceof an)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function vv(o){if(o instanceof Ro)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var yv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},xv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Xe={math:{},text:{}};function d(o,n,r,s,l,u){Xe[o][l]={font:n,group:r,replace:s},u&&s&&(Xe[o][s]=Xe[o][l])}var p="math",Y="text",v="main",S="ams",nt="accent-token",fe="bin",Pt="close",Mi="inner",Te="mathord",gt="op-token",Yt="open",ds="punct",T="rel",Qn="spacing",A="textord";d(p,v,T,"≡","\\equiv",!0);d(p,v,T,"≺","\\prec",!0);d(p,v,T,"≻","\\succ",!0);d(p,v,T,"∼","\\sim",!0);d(p,v,T,"⊥","\\perp");d(p,v,T,"⪯","\\preceq",!0);d(p,v,T,"⪰","\\succeq",!0);d(p,v,T,"≃","\\simeq",!0);d(p,v,T,"∣","\\mid",!0);d(p,v,T,"≪","\\ll",!0);d(p,v,T,"≫","\\gg",!0);d(p,v,T,"≍","\\asymp",!0);d(p,v,T,"∥","\\parallel");d(p,v,T,"⋈","\\bowtie",!0);d(p,v,T,"⌣","\\smile",!0);d(p,v,T,"⊑","\\sqsubseteq",!0);d(p,v,T,"⊒","\\sqsupseteq",!0);d(p,v,T,"≐","\\doteq",!0);d(p,v,T,"⌢","\\frown",!0);d(p,v,T,"∋","\\ni",!0);d(p,v,T,"∝","\\propto",!0);d(p,v,T,"⊢","\\vdash",!0);d(p,v,T,"⊣","\\dashv",!0);d(p,v,T,"∋","\\owns");d(p,v,ds,".","\\ldotp");d(p,v,ds,"⋅","\\cdotp");d(p,v,A,"#","\\#");d(Y,v,A,"#","\\#");d(p,v,A,"&","\\&");d(Y,v,A,"&","\\&");d(p,v,A,"ℵ","\\aleph",!0);d(p,v,A,"∀","\\forall",!0);d(p,v,A,"ℏ","\\hbar",!0);d(p,v,A,"∃","\\exists",!0);d(p,v,A,"∇","\\nabla",!0);d(p,v,A,"♭","\\flat",!0);d(p,v,A,"ℓ","\\ell",!0);d(p,v,A,"♮","\\natural",!0);d(p,v,A,"♣","\\clubsuit",!0);d(p,v,A,"℘","\\wp",!0);d(p,v,A,"♯","\\sharp",!0);d(p,v,A,"♢","\\diamondsuit",!0);d(p,v,A,"ℜ","\\Re",!0);d(p,v,A,"♡","\\heartsuit",!0);d(p,v,A,"ℑ","\\Im",!0);d(p,v,A,"♠","\\spadesuit",!0);d(p,v,A,"§","\\S",!0);d(Y,v,A,"§","\\S");d(p,v,A,"¶","\\P",!0);d(Y,v,A,"¶","\\P");d(p,v,A,"†","\\dag");d(Y,v,A,"†","\\dag");d(Y,v,A,"†","\\textdagger");d(p,v,A,"‡","\\ddag");d(Y,v,A,"‡","\\ddag");d(Y,v,A,"‡","\\textdaggerdbl");d(p,v,Pt,"⎱","\\rmoustache",!0);d(p,v,Yt,"⎰","\\lmoustache",!0);d(p,v,Pt,"⟯","\\rgroup",!0);d(p,v,Yt,"⟮","\\lgroup",!0);d(p,v,fe,"∓","\\mp",!0);d(p,v,fe,"⊖","\\ominus",!0);d(p,v,fe,"⊎","\\uplus",!0);d(p,v,fe,"⊓","\\sqcap",!0);d(p,v,fe,"∗","\\ast");d(p,v,fe,"⊔","\\sqcup",!0);d(p,v,fe,"◯","\\bigcirc",!0);d(p,v,fe,"∙","\\bullet",!0);d(p,v,fe,"‡","\\ddagger");d(p,v,fe,"≀","\\wr",!0);d(p,v,fe,"⨿","\\amalg");d(p,v,fe,"&","\\And");d(p,v,T,"⟵","\\longleftarrow",!0);d(p,v,T,"⇐","\\Leftarrow",!0);d(p,v,T,"⟸","\\Longleftarrow",!0);d(p,v,T,"⟶","\\longrightarrow",!0);d(p,v,T,"⇒","\\Rightarrow",!0);d(p,v,T,"⟹","\\Longrightarrow",!0);d(p,v,T,"↔","\\leftrightarrow",!0);d(p,v,T,"⟷","\\longleftrightarrow",!0);d(p,v,T,"⇔","\\Leftrightarrow",!0);d(p,v,T,"⟺","\\Longleftrightarrow",!0);d(p,v,T,"↦","\\mapsto",!0);d(p,v,T,"⟼","\\longmapsto",!0);d(p,v,T,"↗","\\nearrow",!0);d(p,v,T,"↩","\\hookleftarrow",!0);d(p,v,T,"↪","\\hookrightarrow",!0);d(p,v,T,"↘","\\searrow",!0);d(p,v,T,"↼","\\leftharpoonup",!0);d(p,v,T,"⇀","\\rightharpoonup",!0);d(p,v,T,"↙","\\swarrow",!0);d(p,v,T,"↽","\\leftharpoondown",!0);d(p,v,T,"⇁","\\rightharpoondown",!0);d(p,v,T,"↖","\\nwarrow",!0);d(p,v,T,"⇌","\\rightleftharpoons",!0);d(p,S,T,"≮","\\nless",!0);d(p,S,T,"","\\@nleqslant");d(p,S,T,"","\\@nleqq");d(p,S,T,"⪇","\\lneq",!0);d(p,S,T,"≨","\\lneqq",!0);d(p,S,T,"","\\@lvertneqq");d(p,S,T,"⋦","\\lnsim",!0);d(p,S,T,"⪉","\\lnapprox",!0);d(p,S,T,"⊀","\\nprec",!0);d(p,S,T,"⋠","\\npreceq",!0);d(p,S,T,"⋨","\\precnsim",!0);d(p,S,T,"⪹","\\precnapprox",!0);d(p,S,T,"≁","\\nsim",!0);d(p,S,T,"","\\@nshortmid");d(p,S,T,"∤","\\nmid",!0);d(p,S,T,"⊬","\\nvdash",!0);d(p,S,T,"⊭","\\nvDash",!0);d(p,S,T,"⋪","\\ntriangleleft");d(p,S,T,"⋬","\\ntrianglelefteq",!0);d(p,S,T,"⊊","\\subsetneq",!0);d(p,S,T,"","\\@varsubsetneq");d(p,S,T,"⫋","\\subsetneqq",!0);d(p,S,T,"","\\@varsubsetneqq");d(p,S,T,"≯","\\ngtr",!0);d(p,S,T,"","\\@ngeqslant");d(p,S,T,"","\\@ngeqq");d(p,S,T,"⪈","\\gneq",!0);d(p,S,T,"≩","\\gneqq",!0);d(p,S,T,"","\\@gvertneqq");d(p,S,T,"⋧","\\gnsim",!0);d(p,S,T,"⪊","\\gnapprox",!0);d(p,S,T,"⊁","\\nsucc",!0);d(p,S,T,"⋡","\\nsucceq",!0);d(p,S,T,"⋩","\\succnsim",!0);d(p,S,T,"⪺","\\succnapprox",!0);d(p,S,T,"≆","\\ncong",!0);d(p,S,T,"","\\@nshortparallel");d(p,S,T,"∦","\\nparallel",!0);d(p,S,T,"⊯","\\nVDash",!0);d(p,S,T,"⋫","\\ntriangleright");d(p,S,T,"⋭","\\ntrianglerighteq",!0);d(p,S,T,"","\\@nsupseteqq");d(p,S,T,"⊋","\\supsetneq",!0);d(p,S,T,"","\\@varsupsetneq");d(p,S,T,"⫌","\\supsetneqq",!0);d(p,S,T,"","\\@varsupsetneqq");d(p,S,T,"⊮","\\nVdash",!0);d(p,S,T,"⪵","\\precneqq",!0);d(p,S,T,"⪶","\\succneqq",!0);d(p,S,T,"","\\@nsubseteqq");d(p,S,fe,"⊴","\\unlhd");d(p,S,fe,"⊵","\\unrhd");d(p,S,T,"↚","\\nleftarrow",!0);d(p,S,T,"↛","\\nrightarrow",!0);d(p,S,T,"⇍","\\nLeftarrow",!0);d(p,S,T,"⇏","\\nRightarrow",!0);d(p,S,T,"↮","\\nleftrightarrow",!0);d(p,S,T,"⇎","\\nLeftrightarrow",!0);d(p,S,T,"△","\\vartriangle");d(p,S,A,"ℏ","\\hslash");d(p,S,A,"▽","\\triangledown");d(p,S,A,"◊","\\lozenge");d(p,S,A,"Ⓢ","\\circledS");d(p,S,A,"®","\\circledR");d(Y,S,A,"®","\\circledR");d(p,S,A,"∡","\\measuredangle",!0);d(p,S,A,"∄","\\nexists");d(p,S,A,"℧","\\mho");d(p,S,A,"Ⅎ","\\Finv",!0);d(p,S,A,"⅁","\\Game",!0);d(p,S,A,"‵","\\backprime");d(p,S,A,"▲","\\blacktriangle");d(p,S,A,"▼","\\blacktriangledown");d(p,S,A,"■","\\blacksquare");d(p,S,A,"⧫","\\blacklozenge");d(p,S,A,"★","\\bigstar");d(p,S,A,"∢","\\sphericalangle",!0);d(p,S,A,"∁","\\complement",!0);d(p,S,A,"ð","\\eth",!0);d(Y,v,A,"ð","ð");d(p,S,A,"╱","\\diagup");d(p,S,A,"╲","\\diagdown");d(p,S,A,"□","\\square");d(p,S,A,"□","\\Box");d(p,S,A,"◊","\\Diamond");d(p,S,A,"¥","\\yen",!0);d(Y,S,A,"¥","\\yen",!0);d(p,S,A,"✓","\\checkmark",!0);d(Y,S,A,"✓","\\checkmark");d(p,S,A,"ℶ","\\beth",!0);d(p,S,A,"ℸ","\\daleth",!0);d(p,S,A,"ℷ","\\gimel",!0);d(p,S,A,"ϝ","\\digamma",!0);d(p,S,A,"ϰ","\\varkappa");d(p,S,Yt,"┌","\\@ulcorner",!0);d(p,S,Pt,"┐","\\@urcorner",!0);d(p,S,Yt,"└","\\@llcorner",!0);d(p,S,Pt,"┘","\\@lrcorner",!0);d(p,S,T,"≦","\\leqq",!0);d(p,S,T,"⩽","\\leqslant",!0);d(p,S,T,"⪕","\\eqslantless",!0);d(p,S,T,"≲","\\lesssim",!0);d(p,S,T,"⪅","\\lessapprox",!0);d(p,S,T,"≊","\\approxeq",!0);d(p,S,fe,"⋖","\\lessdot");d(p,S,T,"⋘","\\lll",!0);d(p,S,T,"≶","\\lessgtr",!0);d(p,S,T,"⋚","\\lesseqgtr",!0);d(p,S,T,"⪋","\\lesseqqgtr",!0);d(p,S,T,"≑","\\doteqdot");d(p,S,T,"≓","\\risingdotseq",!0);d(p,S,T,"≒","\\fallingdotseq",!0);d(p,S,T,"∽","\\backsim",!0);d(p,S,T,"⋍","\\backsimeq",!0);d(p,S,T,"⫅","\\subseteqq",!0);d(p,S,T,"⋐","\\Subset",!0);d(p,S,T,"⊏","\\sqsubset",!0);d(p,S,T,"≼","\\preccurlyeq",!0);d(p,S,T,"⋞","\\curlyeqprec",!0);d(p,S,T,"≾","\\precsim",!0);d(p,S,T,"⪷","\\precapprox",!0);d(p,S,T,"⊲","\\vartriangleleft");d(p,S,T,"⊴","\\trianglelefteq");d(p,S,T,"⊨","\\vDash",!0);d(p,S,T,"⊪","\\Vvdash",!0);d(p,S,T,"⌣","\\smallsmile");d(p,S,T,"⌢","\\smallfrown");d(p,S,T,"≏","\\bumpeq",!0);d(p,S,T,"≎","\\Bumpeq",!0);d(p,S,T,"≧","\\geqq",!0);d(p,S,T,"⩾","\\geqslant",!0);d(p,S,T,"⪖","\\eqslantgtr",!0);d(p,S,T,"≳","\\gtrsim",!0);d(p,S,T,"⪆","\\gtrapprox",!0);d(p,S,fe,"⋗","\\gtrdot");d(p,S,T,"⋙","\\ggg",!0);d(p,S,T,"≷","\\gtrless",!0);d(p,S,T,"⋛","\\gtreqless",!0);d(p,S,T,"⪌","\\gtreqqless",!0);d(p,S,T,"≖","\\eqcirc",!0);d(p,S,T,"≗","\\circeq",!0);d(p,S,T,"≜","\\triangleq",!0);d(p,S,T,"∼","\\thicksim");d(p,S,T,"≈","\\thickapprox");d(p,S,T,"⫆","\\supseteqq",!0);d(p,S,T,"⋑","\\Supset",!0);d(p,S,T,"⊐","\\sqsupset",!0);d(p,S,T,"≽","\\succcurlyeq",!0);d(p,S,T,"⋟","\\curlyeqsucc",!0);d(p,S,T,"≿","\\succsim",!0);d(p,S,T,"⪸","\\succapprox",!0);d(p,S,T,"⊳","\\vartriangleright");d(p,S,T,"⊵","\\trianglerighteq");d(p,S,T,"⊩","\\Vdash",!0);d(p,S,T,"∣","\\shortmid");d(p,S,T,"∥","\\shortparallel");d(p,S,T,"≬","\\between",!0);d(p,S,T,"⋔","\\pitchfork",!0);d(p,S,T,"∝","\\varpropto");d(p,S,T,"◀","\\blacktriangleleft");d(p,S,T,"∴","\\therefore",!0);d(p,S,T,"∍","\\backepsilon");d(p,S,T,"▶","\\blacktriangleright");d(p,S,T,"∵","\\because",!0);d(p,S,T,"⋘","\\llless");d(p,S,T,"⋙","\\gggtr");d(p,S,fe,"⊲","\\lhd");d(p,S,fe,"⊳","\\rhd");d(p,S,T,"≂","\\eqsim",!0);d(p,v,T,"⋈","\\Join");d(p,S,T,"≑","\\Doteq",!0);d(p,S,fe,"∔","\\dotplus",!0);d(p,S,fe,"∖","\\smallsetminus");d(p,S,fe,"⋒","\\Cap",!0);d(p,S,fe,"⋓","\\Cup",!0);d(p,S,fe,"⩞","\\doublebarwedge",!0);d(p,S,fe,"⊟","\\boxminus",!0);d(p,S,fe,"⊞","\\boxplus",!0);d(p,S,fe,"⋇","\\divideontimes",!0);d(p,S,fe,"⋉","\\ltimes",!0);d(p,S,fe,"⋊","\\rtimes",!0);d(p,S,fe,"⋋","\\leftthreetimes",!0);d(p,S,fe,"⋌","\\rightthreetimes",!0);d(p,S,fe,"⋏","\\curlywedge",!0);d(p,S,fe,"⋎","\\curlyvee",!0);d(p,S,fe,"⊝","\\circleddash",!0);d(p,S,fe,"⊛","\\circledast",!0);d(p,S,fe,"⋅","\\centerdot");d(p,S,fe,"⊺","\\intercal",!0);d(p,S,fe,"⋒","\\doublecap");d(p,S,fe,"⋓","\\doublecup");d(p,S,fe,"⊠","\\boxtimes",!0);d(p,S,T,"⇢","\\dashrightarrow",!0);d(p,S,T,"⇠","\\dashleftarrow",!0);d(p,S,T,"⇇","\\leftleftarrows",!0);d(p,S,T,"⇆","\\leftrightarrows",!0);d(p,S,T,"⇚","\\Lleftarrow",!0);d(p,S,T,"↞","\\twoheadleftarrow",!0);d(p,S,T,"↢","\\leftarrowtail",!0);d(p,S,T,"↫","\\looparrowleft",!0);d(p,S,T,"⇋","\\leftrightharpoons",!0);d(p,S,T,"↶","\\curvearrowleft",!0);d(p,S,T,"↺","\\circlearrowleft",!0);d(p,S,T,"↰","\\Lsh",!0);d(p,S,T,"⇈","\\upuparrows",!0);d(p,S,T,"↿","\\upharpoonleft",!0);d(p,S,T,"⇃","\\downharpoonleft",!0);d(p,v,T,"⊶","\\origof",!0);d(p,v,T,"⊷","\\imageof",!0);d(p,S,T,"⊸","\\multimap",!0);d(p,S,T,"↭","\\leftrightsquigarrow",!0);d(p,S,T,"⇉","\\rightrightarrows",!0);d(p,S,T,"⇄","\\rightleftarrows",!0);d(p,S,T,"↠","\\twoheadrightarrow",!0);d(p,S,T,"↣","\\rightarrowtail",!0);d(p,S,T,"↬","\\looparrowright",!0);d(p,S,T,"↷","\\curvearrowright",!0);d(p,S,T,"↻","\\circlearrowright",!0);d(p,S,T,"↱","\\Rsh",!0);d(p,S,T,"⇊","\\downdownarrows",!0);d(p,S,T,"↾","\\upharpoonright",!0);d(p,S,T,"⇂","\\downharpoonright",!0);d(p,S,T,"⇝","\\rightsquigarrow",!0);d(p,S,T,"⇝","\\leadsto");d(p,S,T,"⇛","\\Rrightarrow",!0);d(p,S,T,"↾","\\restriction");d(p,v,A,"‘","`");d(p,v,A,"$","\\$");d(Y,v,A,"$","\\$");d(Y,v,A,"$","\\textdollar");d(p,v,A,"%","\\%");d(Y,v,A,"%","\\%");d(p,v,A,"_","\\_");d(Y,v,A,"_","\\_");d(Y,v,A,"_","\\textunderscore");d(p,v,A,"∠","\\angle",!0);d(p,v,A,"∞","\\infty",!0);d(p,v,A,"′","\\prime");d(p,v,A,"△","\\triangle");d(p,v,A,"Γ","\\Gamma",!0);d(p,v,A,"Δ","\\Delta",!0);d(p,v,A,"Θ","\\Theta",!0);d(p,v,A,"Λ","\\Lambda",!0);d(p,v,A,"Ξ","\\Xi",!0);d(p,v,A,"Π","\\Pi",!0);d(p,v,A,"Σ","\\Sigma",!0);d(p,v,A,"Υ","\\Upsilon",!0);d(p,v,A,"Φ","\\Phi",!0);d(p,v,A,"Ψ","\\Psi",!0);d(p,v,A,"Ω","\\Omega",!0);d(p,v,A,"A","Α");d(p,v,A,"B","Β");d(p,v,A,"E","Ε");d(p,v,A,"Z","Ζ");d(p,v,A,"H","Η");d(p,v,A,"I","Ι");d(p,v,A,"K","Κ");d(p,v,A,"M","Μ");d(p,v,A,"N","Ν");d(p,v,A,"O","Ο");d(p,v,A,"P","Ρ");d(p,v,A,"T","Τ");d(p,v,A,"X","Χ");d(p,v,A,"¬","\\neg",!0);d(p,v,A,"¬","\\lnot");d(p,v,A,"⊤","\\top");d(p,v,A,"⊥","\\bot");d(p,v,A,"∅","\\emptyset");d(p,S,A,"∅","\\varnothing");d(p,v,Te,"α","\\alpha",!0);d(p,v,Te,"β","\\beta",!0);d(p,v,Te,"γ","\\gamma",!0);d(p,v,Te,"δ","\\delta",!0);d(p,v,Te,"ϵ","\\epsilon",!0);d(p,v,Te,"ζ","\\zeta",!0);d(p,v,Te,"η","\\eta",!0);d(p,v,Te,"θ","\\theta",!0);d(p,v,Te,"ι","\\iota",!0);d(p,v,Te,"κ","\\kappa",!0);d(p,v,Te,"λ","\\lambda",!0);d(p,v,Te,"μ","\\mu",!0);d(p,v,Te,"ν","\\nu",!0);d(p,v,Te,"ξ","\\xi",!0);d(p,v,Te,"ο","\\omicron",!0);d(p,v,Te,"π","\\pi",!0);d(p,v,Te,"ρ","\\rho",!0);d(p,v,Te,"σ","\\sigma",!0);d(p,v,Te,"τ","\\tau",!0);d(p,v,Te,"υ","\\upsilon",!0);d(p,v,Te,"ϕ","\\phi",!0);d(p,v,Te,"χ","\\chi",!0);d(p,v,Te,"ψ","\\psi",!0);d(p,v,Te,"ω","\\omega",!0);d(p,v,Te,"ε","\\varepsilon",!0);d(p,v,Te,"ϑ","\\vartheta",!0);d(p,v,Te,"ϖ","\\varpi",!0);d(p,v,Te,"ϱ","\\varrho",!0);d(p,v,Te,"ς","\\varsigma",!0);d(p,v,Te,"φ","\\varphi",!0);d(p,v,fe,"∗","*",!0);d(p,v,fe,"+","+");d(p,v,fe,"−","-",!0);d(p,v,fe,"⋅","\\cdot",!0);d(p,v,fe,"∘","\\circ",!0);d(p,v,fe,"÷","\\div",!0);d(p,v,fe,"±","\\pm",!0);d(p,v,fe,"×","\\times",!0);d(p,v,fe,"∩","\\cap",!0);d(p,v,fe,"∪","\\cup",!0);d(p,v,fe,"∖","\\setminus",!0);d(p,v,fe,"∧","\\land");d(p,v,fe,"∨","\\lor");d(p,v,fe,"∧","\\wedge",!0);d(p,v,fe,"∨","\\vee",!0);d(p,v,A,"√","\\surd");d(p,v,Yt,"⟨","\\langle",!0);d(p,v,Yt,"∣","\\lvert");d(p,v,Yt,"∥","\\lVert");d(p,v,Pt,"?","?");d(p,v,Pt,"!","!");d(p,v,Pt,"⟩","\\rangle",!0);d(p,v,Pt,"∣","\\rvert");d(p,v,Pt,"∥","\\rVert");d(p,v,T,"=","=");d(p,v,T,":",":");d(p,v,T,"≈","\\approx",!0);d(p,v,T,"≅","\\cong",!0);d(p,v,T,"≥","\\ge");d(p,v,T,"≥","\\geq",!0);d(p,v,T,"←","\\gets");d(p,v,T,">","\\gt",!0);d(p,v,T,"∈","\\in",!0);d(p,v,T,"","\\@not");d(p,v,T,"⊂","\\subset",!0);d(p,v,T,"⊃","\\supset",!0);d(p,v,T,"⊆","\\subseteq",!0);d(p,v,T,"⊇","\\supseteq",!0);d(p,S,T,"⊈","\\nsubseteq",!0);d(p,S,T,"⊉","\\nsupseteq",!0);d(p,v,T,"⊨","\\models");d(p,v,T,"←","\\leftarrow",!0);d(p,v,T,"≤","\\le");d(p,v,T,"≤","\\leq",!0);d(p,v,T,"<","\\lt",!0);d(p,v,T,"→","\\rightarrow",!0);d(p,v,T,"→","\\to");d(p,S,T,"≱","\\ngeq",!0);d(p,S,T,"≰","\\nleq",!0);d(p,v,Qn," ","\\ ");d(p,v,Qn," ","\\space");d(p,v,Qn," ","\\nobreakspace");d(Y,v,Qn," ","\\ ");d(Y,v,Qn," "," ");d(Y,v,Qn," ","\\space");d(Y,v,Qn," ","\\nobreakspace");d(p,v,Qn,null,"\\nobreak");d(p,v,Qn,null,"\\allowbreak");d(p,v,ds,",",",");d(p,v,ds,";",";");d(p,S,fe,"⊼","\\barwedge",!0);d(p,S,fe,"⊻","\\veebar",!0);d(p,v,fe,"⊙","\\odot",!0);d(p,v,fe,"⊕","\\oplus",!0);d(p,v,fe,"⊗","\\otimes",!0);d(p,v,A,"∂","\\partial",!0);d(p,v,fe,"⊘","\\oslash",!0);d(p,S,fe,"⊚","\\circledcirc",!0);d(p,S,fe,"⊡","\\boxdot",!0);d(p,v,fe,"△","\\bigtriangleup");d(p,v,fe,"▽","\\bigtriangledown");d(p,v,fe,"†","\\dagger");d(p,v,fe,"⋄","\\diamond");d(p,v,fe,"⋆","\\star");d(p,v,fe,"◃","\\triangleleft");d(p,v,fe,"▹","\\triangleright");d(p,v,Yt,"{","\\{");d(Y,v,A,"{","\\{");d(Y,v,A,"{","\\textbraceleft");d(p,v,Pt,"}","\\}");d(Y,v,A,"}","\\}");d(Y,v,A,"}","\\textbraceright");d(p,v,Yt,"{","\\lbrace");d(p,v,Pt,"}","\\rbrace");d(p,v,Yt,"[","\\lbrack",!0);d(Y,v,A,"[","\\lbrack",!0);d(p,v,Pt,"]","\\rbrack",!0);d(Y,v,A,"]","\\rbrack",!0);d(p,v,Yt,"(","\\lparen",!0);d(p,v,Pt,")","\\rparen",!0);d(Y,v,A,"<","\\textless",!0);d(Y,v,A,">","\\textgreater",!0);d(p,v,Yt,"⌊","\\lfloor",!0);d(p,v,Pt,"⌋","\\rfloor",!0);d(p,v,Yt,"⌈","\\lceil",!0);d(p,v,Pt,"⌉","\\rceil",!0);d(p,v,A,"\\","\\backslash");d(p,v,A,"∣","|");d(p,v,A,"∣","\\vert");d(Y,v,A,"|","\\textbar",!0);d(p,v,A,"∥","\\|");d(p,v,A,"∥","\\Vert");d(Y,v,A,"∥","\\textbardbl");d(Y,v,A,"~","\\textasciitilde");d(Y,v,A,"\\","\\textbackslash");d(Y,v,A,"^","\\textasciicircum");d(p,v,T,"↑","\\uparrow",!0);d(p,v,T,"⇑","\\Uparrow",!0);d(p,v,T,"↓","\\downarrow",!0);d(p,v,T,"⇓","\\Downarrow",!0);d(p,v,T,"↕","\\updownarrow",!0);d(p,v,T,"⇕","\\Updownarrow",!0);d(p,v,gt,"∐","\\coprod");d(p,v,gt,"⋁","\\bigvee");d(p,v,gt,"⋀","\\bigwedge");d(p,v,gt,"⨄","\\biguplus");d(p,v,gt,"⋂","\\bigcap");d(p,v,gt,"⋃","\\bigcup");d(p,v,gt,"∫","\\int");d(p,v,gt,"∫","\\intop");d(p,v,gt,"∬","\\iint");d(p,v,gt,"∭","\\iiint");d(p,v,gt,"∏","\\prod");d(p,v,gt,"∑","\\sum");d(p,v,gt,"⨂","\\bigotimes");d(p,v,gt,"⨁","\\bigoplus");d(p,v,gt,"⨀","\\bigodot");d(p,v,gt,"∮","\\oint");d(p,v,gt,"∯","\\oiint");d(p,v,gt,"∰","\\oiiint");d(p,v,gt,"⨆","\\bigsqcup");d(p,v,gt,"∫","\\smallint");d(Y,v,Mi,"…","\\textellipsis");d(p,v,Mi,"…","\\mathellipsis");d(Y,v,Mi,"…","\\ldots",!0);d(p,v,Mi,"…","\\ldots",!0);d(p,v,Mi,"⋯","\\@cdots",!0);d(p,v,Mi,"⋱","\\ddots",!0);d(p,v,A,"⋮","\\varvdots");d(Y,v,A,"⋮","\\varvdots");d(p,v,nt,"ˊ","\\acute");d(p,v,nt,"ˋ","\\grave");d(p,v,nt,"¨","\\ddot");d(p,v,nt,"~","\\tilde");d(p,v,nt,"ˉ","\\bar");d(p,v,nt,"˘","\\breve");d(p,v,nt,"ˇ","\\check");d(p,v,nt,"^","\\hat");d(p,v,nt,"⃗","\\vec");d(p,v,nt,"˙","\\dot");d(p,v,nt,"˚","\\mathring");d(p,v,Te,"","\\@imath");d(p,v,Te,"","\\@jmath");d(p,v,A,"ı","ı");d(p,v,A,"ȷ","ȷ");d(Y,v,A,"ı","\\i",!0);d(Y,v,A,"ȷ","\\j",!0);d(Y,v,A,"ß","\\ss",!0);d(Y,v,A,"æ","\\ae",!0);d(Y,v,A,"œ","\\oe",!0);d(Y,v,A,"ø","\\o",!0);d(Y,v,A,"Æ","\\AE",!0);d(Y,v,A,"Œ","\\OE",!0);d(Y,v,A,"Ø","\\O",!0);d(Y,v,nt,"ˊ","\\'");d(Y,v,nt,"ˋ","\\`");d(Y,v,nt,"ˆ","\\^");d(Y,v,nt,"˜","\\~");d(Y,v,nt,"ˉ","\\=");d(Y,v,nt,"˘","\\u");d(Y,v,nt,"˙","\\.");d(Y,v,nt,"¸","\\c");d(Y,v,nt,"˚","\\r");d(Y,v,nt,"ˇ","\\v");d(Y,v,nt,"¨",'\\"');d(Y,v,nt,"˝","\\H");d(Y,v,nt,"◯","\\textcircled");var Xd={"--":!0,"---":!0,"``":!0,"''":!0};d(Y,v,A,"–","--",!0);d(Y,v,A,"–","\\textendash");d(Y,v,A,"—","---",!0);d(Y,v,A,"—","\\textemdash");d(Y,v,A,"‘","`",!0);d(Y,v,A,"‘","\\textquoteleft");d(Y,v,A,"’","'",!0);d(Y,v,A,"’","\\textquoteright");d(Y,v,A,"“","``",!0);d(Y,v,A,"“","\\textquotedblleft");d(Y,v,A,"”","''",!0);d(Y,v,A,"”","\\textquotedblright");d(p,v,A,"°","\\degree",!0);d(Y,v,A,"°","\\degree");d(Y,v,A,"°","\\textdegree",!0);d(p,v,A,"£","\\pounds");d(p,v,A,"£","\\mathsterling",!0);d(Y,v,A,"£","\\pounds");d(Y,v,A,"£","\\textsterling",!0);d(p,S,A,"✠","\\maltese");d(Y,S,A,"✠","\\maltese");var td='0123456789/@."';for(var fl=0;fl<td.length;fl++){var nd=td.charAt(fl);d(p,v,A,nd,nd)}var rd='0123456789!@*()-=+";:?/.,';for(var pl=0;pl<rd.length;pl++){var id=rd.charAt(pl);d(Y,v,A,id,id)}var ss="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var hl=0;hl<ss.length;hl++){var K0=ss.charAt(hl);d(p,v,Te,K0,K0),d(Y,v,A,K0,K0)}d(p,S,A,"C","ℂ");d(Y,S,A,"C","ℂ");d(p,S,A,"H","ℍ");d(Y,S,A,"H","ℍ");d(p,S,A,"N","ℕ");d(Y,S,A,"N","ℕ");d(p,S,A,"P","ℙ");d(Y,S,A,"P","ℙ");d(p,S,A,"Q","ℚ");d(Y,S,A,"Q","ℚ");d(p,S,A,"R","ℝ");d(Y,S,A,"R","ℝ");d(p,S,A,"Z","ℤ");d(Y,S,A,"Z","ℤ");d(p,v,Te,"h","ℎ");d(Y,v,Te,"h","ℎ");var Me="";for(var Ct=0;Ct<ss.length;Ct++){var ut=ss.charAt(Ct);Me=String.fromCharCode(55349,56320+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56372+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56424+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56580+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56684+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56736+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56788+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56840+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56944+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Ct<26&&(Me=String.fromCharCode(55349,56632+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me),Me=String.fromCharCode(55349,56476+Ct),d(p,v,Te,ut,Me),d(Y,v,A,ut,Me))}Me="𝕜";d(p,v,Te,"k",Me);d(Y,v,A,"k",Me);for(var Ur=0;Ur<10;Ur++){var $r=Ur.toString();Me=String.fromCharCode(55349,57294+Ur),d(p,v,Te,$r,Me),d(Y,v,A,$r,Me),Me=String.fromCharCode(55349,57314+Ur),d(p,v,Te,$r,Me),d(Y,v,A,$r,Me),Me=String.fromCharCode(55349,57324+Ur),d(p,v,Te,$r,Me),d(Y,v,A,$r,Me),Me=String.fromCharCode(55349,57334+Ur),d(p,v,Te,$r,Me),d(Y,v,A,$r,Me)}var Al="ÐÞþ";for(var gl=0;gl<Al.length;gl++){var Q0=Al.charAt(gl);d(p,v,Te,Q0,Q0),d(Y,v,A,Q0,Q0)}var Y0=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],od=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],bv=function(n,r){var s=n.charCodeAt(0),l=n.charCodeAt(1),u=(s-55296)*1024+(l-56320)+65536,m=r==="math"?0:1;if(119808<=u&&u<120484){var h=Math.floor((u-119808)/26);return[Y0[h][2],Y0[h][m]]}else if(120782<=u&&u<=120831){var g=Math.floor((u-120782)/10);return[od[g][2],od[g][m]]}else{if(u===120485||u===120486)return[Y0[0][2],Y0[0][m]];if(120486<u&&u<120782)return["",""];throw new ne("Unsupported character: "+n)}},ms=function(n,r,s){return Xe[s][n]&&Xe[s][n].replace&&(n=Xe[s][n].replace),{value:n,metrics:Wl(n,r,s)}},Et=function(n,r,s,l,u){var m=ms(n,r,s),h=m.metrics;n=m.value;var g;if(h){var y=h.italic;(s==="text"||l&&l.font==="mathit")&&(y=0),g=new an(n,h.height,h.depth,y,h.skew,h.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+s+"'")),g=new an(n,0,0,0,0,0,u);if(l){g.maxFontSize=l.sizeMultiplier,l.style.isTight()&&g.classes.push("mtight");var b=l.getColor();b&&(g.style.color=b)}return g},Vl=function(n,r,s,l){return l===void 0&&(l=[]),s.font==="boldsymbol"&&ms(n,"Main-Bold",r).metrics?Et(n,"Main-Bold",r,s,l.concat(["mathbf"])):n==="\\"||Xe[r][n].font==="main"?Et(n,"Main-Regular",r,s,l):Et(n,"AMS-Regular",r,s,l.concat(["amsrm"]))},wv=function(n,r,s,l,u){return u!=="textord"&&ms(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},fs=function(n,r,s){var l=n.mode,u=n.text,m=["mord"],h=l==="math"||l==="text"&&r.font,g=h?r.font:r.fontFamily,y="",b="";if(u.charCodeAt(0)===55349&&([y,b]=bv(u,l)),y.length>0)return Et(u,y,l,r,m.concat(b));if(g){var $,k;if(g==="boldsymbol"){var q=wv(u,l,r,m,s);$=q.fontName,k=[q.fontClass]}else h?($=Cl[g].fontName,k=[g]):($=X0(g,r.fontWeight,r.fontShape),k=[g,r.fontWeight,r.fontShape]);if(ms(u,$,l).metrics)return Et(u,$,l,r,m.concat(k));if(Xd.hasOwnProperty(u)&&$.slice(0,10)==="Typewriter"){for(var E=[],R=0;R<u.length;R++)E.push(Et(u[R],$,l,r,m.concat(k)));return Yn(E)}}if(s==="mathord")return Et(u,"Math-Italic",l,r,m.concat(["mathnormal"]));if(s==="textord"){var I=Xe[l][u]&&Xe[l][u].font;if(I==="ams"){var P=X0("amsrm",r.fontWeight,r.fontShape);return Et(u,P,l,r,m.concat("amsrm",r.fontWeight,r.fontShape))}else if(I==="main"||!I){var W=X0("textrm",r.fontWeight,r.fontShape);return Et(u,W,l,r,m.concat(r.fontWeight,r.fontShape))}else{var G=X0(I,r.fontWeight,r.fontShape);return Et(u,G,l,r,m.concat(G,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},_v=(o,n)=>{if(zr(o.classes)!==zr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==n.style[s])return!1;for(var l in n.style)if(n.style.hasOwnProperty(l)&&o.style[l]!==n.style[l])return!1;return!0},Zd=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],s=o[n+1];r instanceof an&&s instanceof an&&_v(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(n+1,1),n--)}return o},Kl=function(n){for(var r=0,s=0,l=0,u=0;u<n.children.length;u++){var m=n.children[u];m.height>r&&(r=m.height),m.depth>s&&(s=m.depth),m.maxFontSize>l&&(l=m.maxFontSize)}n.height=r,n.depth=s,n.maxFontSize=l},Z=function(n,r,s,l){var u=new Ro(n,r,s,l);return Kl(u),u},Tr=(o,n,r,s)=>new Ro(o,n,r,s),Ti=function(n,r,s){var l=Z([n],[],r);return l.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),l.style.borderBottomWidth=le(l.height),l.maxFontSize=1,l},$v=function(n,r,s,l){var u=new Ul(n,r,s,l);return Kl(u),u},Yn=function(n){var r=new Eo(n);return Kl(r),r},qi=function(n,r){return n instanceof Eo?Z([],[n],r):n},kv=function(n){if(n.positionType==="individualShift"){for(var r=n.children,s=[r[0]],l=-r[0].shift-r[0].elem.depth,u=l,m=1;m<r.length;m++){var h=-r[m].shift-u-r[m].elem.depth,g=h-(r[m-1].elem.height+r[m-1].elem.depth);u=u+h,s.push({type:"kern",size:g}),s.push(r[m])}return{children:s,depth:l}}var y;if(n.positionType==="top"){for(var b=n.positionData,$=0;$<n.children.length;$++){var k=n.children[$];b-=k.type==="kern"?k.size:k.elem.height+k.elem.depth}y=b}else if(n.positionType==="bottom")y=-n.positionData;else{var q=n.children[0];if(q.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")y=-q.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")y=-q.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:y}},We=function(n,r){for(var{children:s,depth:l}=kv(n),u=0,m=0;m<s.length;m++){var h=s[m];if(h.type==="elem"){var g=h.elem;u=Math.max(u,g.maxFontSize,g.height)}}u+=2;var y=Z(["pstrut"],[]);y.style.height=le(u);for(var b=[],$=l,k=l,q=l,E=0;E<s.length;E++){var R=s[E];if(R.type==="kern")q+=R.size;else{var I=R.elem,P=R.wrapperClasses||[],W=R.wrapperStyle||{},G=Z(P,[y,I],void 0,W);G.style.top=le(-u-q-I.depth),R.marginLeft&&(G.style.marginLeft=R.marginLeft),R.marginRight&&(G.style.marginRight=R.marginRight),b.push(G),q+=I.height+I.depth}$=Math.min($,q),k=Math.max(k,q)}var L=Z(["vlist"],b);L.style.height=le(k);var F;if($<0){var V=Z([],[]),N=Z(["vlist"],[V]);N.style.height=le(-$);var H=Z(["vlist-s"],[new an("​")]);F=[Z(["vlist-r"],[L,H]),Z(["vlist-r"],[N])]}else F=[Z(["vlist-r"],[L])];var J=Z(["vlist-t"],F);return F.length===2&&J.classes.push("vlist-t2"),J.height=k,J.depth=-$,J},Jd=(o,n)=>{var r=Z(["mspace"],[],n),s=st(o,n);return r.style.marginRight=le(s),r},X0=function(n,r,s){var l="";switch(n){case"amsrm":l="AMS";break;case"textrm":l="Main";break;case"textsf":l="SansSerif";break;case"texttt":l="Typewriter";break;default:l=n}var u;return r==="textbf"&&s==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",l+"-"+u},Cl={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},em={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},tm=function(n,r){var[s,l,u]=em[n],m=new Sr(s),h=new Vn([m],{width:le(l),height:le(u),style:"width:"+le(l),viewBox:"0 0 "+1e3*l+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),g=Tr(["overlay"],[h],r);return g.height=u,g.style.height=le(u),g.style.width=le(l),g},ot={number:3,unit:"mu"},Vr={number:4,unit:"mu"},Gn={number:5,unit:"mu"},zv={mord:{mop:ot,mbin:Vr,mrel:Gn,minner:ot},mop:{mord:ot,mop:ot,mrel:Gn,minner:ot},mbin:{mord:Vr,mop:Vr,mopen:Vr,minner:Vr},mrel:{mord:Gn,mop:Gn,mopen:Gn,minner:Gn},mopen:{},mclose:{mop:ot,mbin:Vr,mrel:Gn,minner:ot},mpunct:{mord:ot,mop:ot,mrel:Gn,mopen:ot,mclose:ot,mpunct:ot,minner:ot},minner:{mord:ot,mop:ot,mbin:Vr,mrel:Gn,mopen:ot,mpunct:ot,minner:ot}},Sv={mord:{mop:ot},mop:{mord:ot,mop:ot},mbin:{},mrel:{},mopen:{},mclose:{mop:ot},mpunct:{},minner:{mop:ot}},nm={},as={},ls={};function de(o){for(var{type:n,names:r,props:s,handler:l,htmlBuilder:u,mathmlBuilder:m}=o,h={type:n,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:l},g=0;g<r.length;++g)nm[r[g]]=h;n&&(u&&(as[n]=u),m&&(ls[n]=m))}function Qr(o){var{type:n,htmlBuilder:r,mathmlBuilder:s}=o;de({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var us=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},mt=function(n){return n.type==="ordgroup"?n.body:[n]},Tv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),qv=new Set(["rightmost","mrel","mclose","mpunct"]),Mv={display:Ae.DISPLAY,text:Ae.TEXT,script:Ae.SCRIPT,scriptscript:Ae.SCRIPTSCRIPT},jv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},xt=function(n,r,s,l){l===void 0&&(l=[null,null]);for(var u=[],m=0;m<n.length;m++){var h=He(n[m],r);if(h instanceof Eo){var g=h.children;u.push(...g)}else u.push(h)}if(Zd(u),!s)return u;var y=r;if(n.length===1){var b=n[0];b.type==="sizing"?y=r.havingSize(b.size):b.type==="styling"&&(y=r.havingStyle(Mv[b.style]))}var $=Z([l[0]||"leftmost"],[],r),k=Z([l[1]||"rightmost"],[],r),q=s==="root";return sd(u,(E,R)=>{var I=R.classes[0],P=E.classes[0];I==="mbin"&&qv.has(P)?R.classes[0]="mord":P==="mbin"&&Tv.has(I)&&(E.classes[0]="mord")},{node:$},k,q),sd(u,(E,R)=>{var I=El(R),P=El(E),W=I&&P?E.hasClass("mtight")?Sv[I][P]:zv[I][P]:null;if(W)return Jd(W,y)},{node:$},k,q),u},sd=function o(n,r,s,l,u){l&&n.push(l);for(var m=0;m<n.length;m++){var h=n[m],g=rm(h);if(g){o(g.children,r,s,null,u);continue}var y=!h.hasClass("mspace");if(y){var b=r(h,s.node);b&&(s.insertAfter?s.insertAfter(b):(n.unshift(b),m++))}y?s.node=h:u&&h.hasClass("newline")&&(s.node=Z(["leftmost"])),s.insertAfter=($=>k=>{n.splice($+1,0,k),m++})(m)}l&&n.pop()},rm=function(n){return n instanceof Eo||n instanceof Ul||n instanceof Ro&&n.hasClass("enclosing")?n:null},Av=function o(n,r){var s=rm(n);if(s){var l=s.children;if(l.length){if(r==="right")return o(l[l.length-1],"right");if(r==="left")return o(l[0],"left")}}return n},El=function(n,r){return n?(r&&(n=Av(n,r)),jv[n.classes[0]]||null):null},Ao=function(n,r){var s=["nulldelimiter"].concat(n.baseSizingClasses());return Z(r.concat(s))},He=function(n,r,s){if(!n)return Z();if(as[n.type]){var l=as[n.type](n,r);if(s&&r.size!==s.size){l=Z(r.sizingClasses(s),[l],r);var u=r.sizeMultiplier/s.sizeMultiplier;l.height*=u,l.depth*=u}return l}else throw new ne("Got group of unknown type: '"+n.type+"'")};function Z0(o,n){var r=Z(["base"],o,n),s=Z(["strut"]);return s.style.height=le(r.height+r.depth),r.depth&&(s.style.verticalAlign=le(-r.depth)),r.children.unshift(s),r}function Rl(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=xt(o,n,"root"),l;s.length===2&&s[1].hasClass("tag")&&(l=s.pop());for(var u=[],m=[],h=0;h<s.length;h++)if(m.push(s[h]),s[h].hasClass("mbin")||s[h].hasClass("mrel")||s[h].hasClass("allowbreak")){for(var g=!1;h<s.length-1&&s[h+1].hasClass("mspace")&&!s[h+1].hasClass("newline");)h++,m.push(s[h]),s[h].hasClass("nobreak")&&(g=!0);g||(u.push(Z0(m,n)),m=[])}else s[h].hasClass("newline")&&(m.pop(),m.length>0&&(u.push(Z0(m,n)),m=[]),u.push(s[h]));m.length>0&&u.push(Z0(m,n));var y;r?(y=Z0(xt(r,n,!0)),y.classes=["tag"],u.push(y)):l&&u.push(l);var b=Z(["katex-html"],u);if(b.setAttribute("aria-hidden","true"),y){var $=y.children[0];$.style.height=le(b.height+b.depth),b.depth&&($.style.verticalAlign=le(-b.depth))}return b}function im(o){return new Eo(o)}class re{constructor(n,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=zr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof ht&&this.children[s+1]instanceof ht){for(var l=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof ht;)l+=this.children[++s].toText();n.appendChild(new ht(l).toNode())}else n.appendChild(this.children[s].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=Mt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+Mt(zr(this.classes))+'"'),n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class ht{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return Mt(this.toText())}toText(){return this.text}}class om{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",le(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+le(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Cv=new Set(["\\imath","\\jmath"]),Ev=new Set(["mrow","mtable"]),ln=function(n,r,s){return Xe[r][n]&&Xe[r][n].replace&&n.charCodeAt(0)!==55349&&!(Xd.hasOwnProperty(n)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(n=Xe[r][n].replace),new ht(n)},Ql=function(n){return n.length===1?n[0]:new re("mrow",n)},Yl=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var l=n.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var u=n.text;if(Cv.has(u))return null;Xe[l][u]&&Xe[l][u].replace&&(u=Xe[l][u].replace);var m=Cl[s].fontName;return Wl(u,m,l)?Cl[s].variant:null};function vl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof ht&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof ht&&r.text===","}else return!1}var Ht=function(n,r,s){if(n.length===1){var l=Qe(n[0],r);return s&&l instanceof re&&l.type==="mo"&&(l.setAttribute("lspace","0em"),l.setAttribute("rspace","0em")),[l]}for(var u=[],m,h=0;h<n.length;h++){var g=Qe(n[h],r);if(g instanceof re&&m instanceof re){if(g.type==="mtext"&&m.type==="mtext"&&g.getAttribute("mathvariant")===m.getAttribute("mathvariant")){m.children.push(...g.children);continue}else if(g.type==="mn"&&m.type==="mn"){m.children.push(...g.children);continue}else if(vl(g)&&m.type==="mn"){m.children.push(...g.children);continue}else if(g.type==="mn"&&vl(m))g.children=[...m.children,...g.children],u.pop();else if((g.type==="msup"||g.type==="msub")&&g.children.length>=1&&(m.type==="mn"||vl(m))){var y=g.children[0];y instanceof re&&y.type==="mn"&&(y.children=[...m.children,...y.children],u.pop())}else if(m.type==="mi"&&m.children.length===1){var b=m.children[0];if(b instanceof ht&&b.text==="̸"&&(g.type==="mo"||g.type==="mi"||g.type==="mn")){var $=g.children[0];$ instanceof ht&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),u.pop())}}}u.push(g),m=g}return u},qr=function(n,r,s){return Ql(Ht(n,r,s))},Qe=function(n,r){if(!n)return new re("mrow");if(ls[n.type]){var s=ls[n.type](n,r);return s}else throw new ne("Got group of unknown type: '"+n.type+"'")};function ad(o,n,r,s,l){var u=Ht(o,r),m;u.length===1&&u[0]instanceof re&&Ev.has(u[0].type)?m=u[0]:m=new re("mrow",u);var h=new re("annotation",[new ht(n)]);h.setAttribute("encoding","application/x-tex");var g=new re("semantics",[m,h]),y=new re("math",[g]);y.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&y.setAttribute("display","block");var b=l?"katex":"katex-mathml";return Z([b],[y])}var sm=function(n){return new Wn({style:n.displayMode?Ae.DISPLAY:Ae.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},am=function(n,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),n=Z(s,[n])}return n},Rv=function(n,r,s){var l=sm(s),u;if(s.output==="mathml")return ad(n,r,l,s.displayMode,!0);if(s.output==="html"){var m=Rl(n,l);u=Z(["katex"],[m])}else{var h=ad(n,r,l,s.displayMode,!1),g=Rl(n,l);u=Z(["katex"],[h,g])}return am(u,s)},Pv=function(n,r,s){var l=sm(s),u=Rl(n,l),m=Z(["katex"],[u]);return am(m,s)},Dv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ps=function(n){var r=new re("mo",[new ht(Dv[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Nv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Bv=new Set(["widehat","widecheck","widetilde","utilde"]),hs=function(n,r){function s(){var h=4e5,g=n.label.slice(1);if(Bv.has(g)){var y=n,b=y.base.type==="ordgroup"?y.base.body.length:1,$,k,q;if(b>5)g==="widehat"||g==="widecheck"?($=420,h=2364,q=.42,k=g+"4"):($=312,h=2340,q=.34,k="tilde4");else{var E=[1,1,2,2,3,3][b];g==="widehat"||g==="widecheck"?(h=[0,1062,2364,2364,2364][E],$=[0,239,300,360,420][E],q=[0,.24,.3,.3,.36,.42][E],k=g+E):(h=[0,600,1033,2339,2340][E],$=[0,260,286,306,312][E],q=[0,.26,.286,.3,.306,.34][E],k="tilde"+E)}var R=new Sr(k),I=new Vn([R],{width:"100%",height:le(q),viewBox:"0 0 "+h+" "+$,preserveAspectRatio:"none"});return{span:Tr([],[I],r),minWidth:0,height:q}}else{var P=[],W=Nv[g],[G,L,F]=W,V=F/1e3,N=G.length,H,J;if(N===1){var be=W[3];H=["hide-tail"],J=[be]}else if(N===2)H=["halfarrow-left","halfarrow-right"],J=["xMinYMin","xMaxYMin"];else if(N===3)H=["brace-left","brace-center","brace-right"],J=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+N+" children.");for(var ge=0;ge<N;ge++){var ce=new Sr(G[ge]),pe=new Vn([ce],{width:"400em",height:le(V),viewBox:"0 0 "+h+" "+F,preserveAspectRatio:J[ge]+" slice"}),qe=Tr([H[ge]],[pe],r);if(N===1)return{span:qe,minWidth:L,height:V};qe.style.height=le(V),P.push(qe)}return{span:Z(["stretchy"],P,r),minWidth:L,height:V}}}var{span:l,minWidth:u,height:m}=s();return l.height=m,l.style.height=le(m),u>0&&(l.style.minWidth=le(u)),l},Iv=function(n,r,s,l,u){var m,h=n.height+n.depth+s+l;if(/fbox|color|angl/.test(r)){if(m=Z(["stretchy",r],[],u),r==="fbox"){var g=u.color&&u.getColor();g&&(m.style.borderColor=g)}}else{var y=[];/^[bx]cancel$/.test(r)&&y.push(new jl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&y.push(new jl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new Vn(y,{width:"100%",height:le(h)});m=Tr([],[b],u)}return m.height=h,m.style.height=le(h),m};function Ee(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function Xl(o){var n=gs(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function gs(o){return o&&(o.type==="atom"||xv.hasOwnProperty(o.type))?o:null}var Zl=(o,n)=>{var r,s,l;o&&o.type==="supsub"?(s=Ee(o.base,"accent"),r=s.base,o.base=r,l=vv(He(o,n)),o.base=s):(s=Ee(o,"accent"),r=s.base);var u=He(r,n.havingCrampedStyle()),m=s.isShifty&&Kn(r),h=0;if(m){var g=To(r),y=He(g,n.havingCrampedStyle());h=ed(y).skew}var b=s.label==="\\c",$=b?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),k;if(s.isStretchy)k=hs(s,n),k=We({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:k,wrapperClasses:["svg-align"],wrapperStyle:h>0?{width:"calc(100% - "+le(2*h)+")",marginLeft:le(2*h)}:void 0}]});else{var q,E;s.label==="\\vec"?(q=tm("vec",n),E=em.vec[1]):(q=fs({mode:s.mode,text:s.label},n,"textord"),q=ed(q),q.italic=0,E=q.width,b&&($+=q.depth)),k=Z(["accent-body"],[q]);var R=s.label==="\\textcircled";R&&(k.classes.push("accent-full"),$=u.height);var I=h;R||(I-=E/2),k.style.left=le(I),s.label==="\\textcircled"&&(k.style.top=".2em"),k=We({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-$},{type:"elem",elem:k}]})}var P=Z(["mord","accent"],[k],n);return l?(l.children[0]=P,l.height=Math.max(P.height,l.height),l.classes[0]="mord",l):P},lm=(o,n)=>{var r=o.isStretchy?ps(o.label):new re("mo",[ln(o.label,o.mode)]),s=new re("mover",[Qe(o.base,n),r]);return s.setAttribute("accent","true"),s},Fv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));de({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=us(n[0]),s=!Fv.test(o.funcName),l=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:l,base:r}},htmlBuilder:Zl,mathmlBuilder:lm});de({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Zl,mathmlBuilder:lm});de({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0];return{type:"accentUnder",mode:r.mode,label:s,base:l}},htmlBuilder:(o,n)=>{var r=He(o.base,n),s=hs(o,n),l=o.label==="\\utilde"?.12:0,u=We({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:l},{type:"elem",elem:r}]});return Z(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=ps(o.label),s=new re("munder",[Qe(o.base,n),r]);return s.setAttribute("accentunder","true"),s}});var J0=o=>{var n=new re("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};de({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s,funcName:l}=o;return{type:"xArrow",mode:s.mode,label:l,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,s=n.havingStyle(r.sup()),l=qi(He(o.body,s,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";l.classes.push(u+"-arrow-pad");var m;o.below&&(s=n.havingStyle(r.sub()),m=qi(He(o.below,s,n),n),m.classes.push(u+"-arrow-pad"));var h=hs(o,n),g=-n.fontMetrics().axisHeight+.5*h.height,y=-n.fontMetrics().axisHeight-.5*h.height-.111;(l.depth>.25||o.label==="\\xleftequilibrium")&&(y-=l.depth);var b;if(m){var $=-n.fontMetrics().axisHeight+m.height+.5*h.height+.111;b=We({positionType:"individualShift",children:[{type:"elem",elem:l,shift:y},{type:"elem",elem:h,shift:g},{type:"elem",elem:m,shift:$}]})}else b=We({positionType:"individualShift",children:[{type:"elem",elem:l,shift:y},{type:"elem",elem:h,shift:g}]});return b.children[0].children[0].children[1].classes.push("svg-align"),Z(["mrel","x-arrow"],[b],n)},mathmlBuilder(o,n){var r=ps(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var l=J0(Qe(o.body,n));if(o.below){var u=J0(Qe(o.below,n));s=new re("munderover",[r,u,l])}else s=new re("mover",[r,l])}else if(o.below){var m=J0(Qe(o.below,n));s=new re("munder",[r,m])}else s=J0(),s=new re("mover",[r,s]);return s}});function um(o,n){var r=xt(o.body,n,!0);return Z([o.mclass],r,n)}function cm(o,n){var r,s=Ht(o.body,n);return o.mclass==="minner"?r=new re("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new re("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new re("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}de({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:mt(l),isCharacterBox:Kn(l)}},htmlBuilder:um,mathmlBuilder:cm});var vs=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};de({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:vs(n[0]),body:mt(n[1]),isCharacterBox:Kn(n[1])}}});de({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:s}=o,l=n[1],u=n[0],m;s!=="\\stackrel"?m=vs(l):m="mrel";var h={type:"op",mode:l.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:mt(l)},g={type:"supsub",mode:u.mode,base:h,sup:s==="\\underset"?null:u,sub:s==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:m,body:[g],isCharacterBox:Kn(g)}},htmlBuilder:um,mathmlBuilder:cm});de({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:vs(n[0]),body:mt(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!0),s=Z([o.mclass],r,n);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,n){var r=Ht(o.body,n),s=new re("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var Lv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},ld=()=>({type:"styling",body:[],mode:"math",style:"display"}),ud=o=>o.type==="textord"&&o.text==="@",Ov=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function Hv(o,n,r){var s=Lv[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var l=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:s,mode:"math",family:"rel"},m=r.callFunction("\\Big",[u],[]),h=r.callFunction("\\\\cdright",[n[1]],[]),g={type:"ordgroup",mode:"math",body:[l,m,h]};return r.callFunction("\\\\cdparent",[g],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var y={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[y],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Gv(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new ne("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],l=[s],u=0;u<n.length;u++){for(var m=n[u],h=ld(),g=0;g<m.length;g++)if(!ud(m[g]))h.body.push(m[g]);else{s.push(h),g+=1;var y=Xl(m[g]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(y))if("<>AV".includes(y))for(var $=0;$<2;$++){for(var k=!0,q=g+1;q<m.length;q++){if(Ov(m[q],y)){k=!1,g=q;break}if(ud(m[q]))throw new ne("Missing a "+y+" character to complete a CD arrow.",m[q]);b[$].body.push(m[q])}if(k)throw new ne("Missing a "+y+" character to complete a CD arrow.",m[g])}else throw new ne('Expected one of "<>AV=|." after @',m[g]);var E=Hv(y,b,o),R={type:"styling",body:[E],mode:"math",style:"display"};s.push(R),h=ld()}u%2===0?s.push(h):s.shift(),s=[],l.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var I=new Array(l[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:l,arraystretch:1,addJot:!0,rowGaps:[null],cols:I,colSeparationType:"CD",hLinesBeforeRow:new Array(l.length+1).fill([])}}de({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),s=qi(He(o.label,r,n),n);return s.classes.push("cd-label-"+o.side),s.style.bottom=le(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,n){var r=new re("mrow",[Qe(o.label,n)]);return r=new re("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new re("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});de({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=qi(He(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new re("mrow",[Qe(o.fragment,n)])}});de({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,s=Ee(n[0],"ordgroup"),l=s.body,u="",m=0;m<l.length;m++){var h=Ee(l[m],"textord");u+=h.text}var g=parseInt(u),y;if(isNaN(g))throw new ne("\\@char has non-numeric argument "+u);if(g<0||g>=1114111)throw new ne("\\@char with invalid code point "+u);return g<=65535?y=String.fromCharCode(g):(g-=65536,y=String.fromCharCode((g>>10)+55296,(g&1023)+56320)),{type:"textord",mode:r.mode,text:y}}});var dm=(o,n)=>{var r=xt(o.body,n.withColor(o.color),!1);return Yn(r)},mm=(o,n)=>{var r=Ht(o.body,n.withColor(o.color)),s=new re("mstyle",r);return s.setAttribute("mathcolor",o.color),s};de({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,s=Ee(n[0],"color-token").color,l=n[1];return{type:"color",mode:r.mode,color:s,body:mt(l)}},htmlBuilder:dm,mathmlBuilder:mm});de({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:s}=o,l=Ee(n[0],"color-token").color;r.gullet.macros.set("\\current@color",l);var u=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:l,body:u}},htmlBuilder:dm,mathmlBuilder:mm});de({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:s}=o,l=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,u=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:u,size:l&&Ee(l,"size").value}},htmlBuilder(o,n){var r=Z(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=le(st(o.size,n)))),r},mathmlBuilder(o,n){var r=new re("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",le(st(o.size,n)))),r}});var Pl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},fm=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new ne("Expected a control sequence",o);return n},Wv=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},pm=(o,n,r,s)=>{var l=o.gullet.macros.get(r.text);l==null&&(r.noexpand=!0,l={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,l,s)};de({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var s=n.fetch();if(Pl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Pl[s.text]),Ee(n.parseFunction(),"internal");throw new ne("Invalid token after macro prefix",s)}});de({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=n.gullet.popToken(),l=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(l))throw new ne("Expected a control sequence",s);for(var u=0,m,h=[[]];n.gullet.future().text!=="{";)if(s=n.gullet.popToken(),s.text==="#"){if(n.gullet.future().text==="{"){m=n.gullet.future(),h[u].push("{");break}if(s=n.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new ne('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==u+1)throw new ne('Argument number "'+s.text+'" out of order');u++,h.push([])}else{if(s.text==="EOF")throw new ne("Expected a macro definition");h[u].push(s.text)}var{tokens:g}=n.gullet.consumeArg();return m&&g.unshift(m),(r==="\\edef"||r==="\\xdef")&&(g=n.gullet.expandTokens(g),g.reverse()),n.gullet.macros.set(l,{tokens:g,numArgs:u,delimiters:h},r===Pl[r]),{type:"internal",mode:n.mode}}});de({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=fm(n.gullet.popToken());n.gullet.consumeSpaces();var l=Wv(n);return pm(n,s,l,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});de({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=fm(n.gullet.popToken()),l=n.gullet.popToken(),u=n.gullet.popToken();return pm(n,s,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(l),{type:"internal",mode:n.mode}}});var So=function(n,r,s){var l=Xe.math[n]&&Xe.math[n].replace,u=Wl(l||n,r,s);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Jl=function(n,r,s,l){var u=s.havingBaseStyle(r),m=Z(l.concat(u.sizingClasses(s)),[n],s),h=u.sizeMultiplier/s.sizeMultiplier;return m.height*=h,m.depth*=h,m.maxFontSize=u.sizeMultiplier,m},hm=function(n,r,s){var l=r.havingBaseStyle(s),u=(1-r.sizeMultiplier/l.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=le(u),n.height-=u,n.depth+=u},Uv=function(n,r,s,l,u,m){var h=Et(n,"Main-Regular",u,l),g=Jl(h,r,l,m);return hm(g,l,r),g},Vv=function(n,r,s,l){return Et(n,"Size"+r+"-Regular",s,l)},gm=function(n,r,s,l,u,m){var h=Vv(n,r,u,l),g=Jl(Z(["delimsizing","size"+r],[h],l),Ae.TEXT,l,m);return s&&hm(g,l,Ae.TEXT),g},yl=function(n,r,s){var l;r==="Size1-Regular"?l="delim-size1":l="delim-size4";var u=Z(["delimsizinginner",l],[Z([],[Et(n,r,s)])]);return{type:"elem",elem:u}},xl=function(n,r,s){var l=qn["Size4-Regular"][n.charCodeAt(0)]?qn["Size4-Regular"][n.charCodeAt(0)][4]:qn["Size1-Regular"][n.charCodeAt(0)][4],u=new Sr("inner",lv(n,Math.round(1e3*r))),m=new Vn([u],{width:le(l),height:le(r),style:"width:"+le(l),viewBox:"0 0 "+1e3*l+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),h=Tr([],[m],s);return h.height=r,h.style.height=le(r),h.style.width=le(l),{type:"elem",elem:h}},Dl=.008,es={type:"kern",size:-1*Dl},Kv=new Set(["|","\\lvert","\\rvert","\\vert"]),Qv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),vm=function(n,r,s,l,u,m){var h,g,y,b,$="",k=0;h=y=b=n,g=null;var q="Size1-Regular";n==="\\uparrow"?y=b="⏐":n==="\\Uparrow"?y=b="‖":n==="\\downarrow"?h=y="⏐":n==="\\Downarrow"?h=y="‖":n==="\\updownarrow"?(h="\\uparrow",y="⏐",b="\\downarrow"):n==="\\Updownarrow"?(h="\\Uparrow",y="‖",b="\\Downarrow"):Kv.has(n)?(y="∣",$="vert",k=333):Qv.has(n)?(y="∥",$="doublevert",k=556):n==="["||n==="\\lbrack"?(h="⎡",y="⎢",b="⎣",q="Size4-Regular",$="lbrack",k=667):n==="]"||n==="\\rbrack"?(h="⎤",y="⎥",b="⎦",q="Size4-Regular",$="rbrack",k=667):n==="\\lfloor"||n==="⌊"?(y=h="⎢",b="⎣",q="Size4-Regular",$="lfloor",k=667):n==="\\lceil"||n==="⌈"?(h="⎡",y=b="⎢",q="Size4-Regular",$="lceil",k=667):n==="\\rfloor"||n==="⌋"?(y=h="⎥",b="⎦",q="Size4-Regular",$="rfloor",k=667):n==="\\rceil"||n==="⌉"?(h="⎤",y=b="⎥",q="Size4-Regular",$="rceil",k=667):n==="("||n==="\\lparen"?(h="⎛",y="⎜",b="⎝",q="Size4-Regular",$="lparen",k=875):n===")"||n==="\\rparen"?(h="⎞",y="⎟",b="⎠",q="Size4-Regular",$="rparen",k=875):n==="\\{"||n==="\\lbrace"?(h="⎧",g="⎨",b="⎩",y="⎪",q="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(h="⎫",g="⎬",b="⎭",y="⎪",q="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(h="⎧",b="⎩",y="⎪",q="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(h="⎫",b="⎭",y="⎪",q="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(h="⎧",b="⎭",y="⎪",q="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(h="⎫",b="⎩",y="⎪",q="Size4-Regular");var E=So(h,q,u),R=E.height+E.depth,I=So(y,q,u),P=I.height+I.depth,W=So(b,q,u),G=W.height+W.depth,L=0,F=1;if(g!==null){var V=So(g,q,u);L=V.height+V.depth,F=2}var N=R+G+L,H=Math.max(0,Math.ceil((r-N)/(F*P))),J=N+H*F*P,be=l.fontMetrics().axisHeight;s&&(be*=l.sizeMultiplier);var ge=J/2-be,ce=[];if($.length>0){var pe=J-R-G,qe=Math.round(J*1e3),Ue=uv($,Math.round(pe*1e3)),Ke=new Sr($,Ue),Fe=(k/1e3).toFixed(3)+"em",ae=(qe/1e3).toFixed(3)+"em",$e=new Vn([Ke],{width:Fe,height:ae,viewBox:"0 0 "+k+" "+qe}),ue=Tr([],[$e],l);ue.height=qe/1e3,ue.style.width=Fe,ue.style.height=ae,ce.push({type:"elem",elem:ue})}else{if(ce.push(yl(b,q,u)),ce.push(es),g===null){var j=J-R-G+2*Dl;ce.push(xl(y,j,l))}else{var U=(J-R-G-L)/2+2*Dl;ce.push(xl(y,U,l)),ce.push(es),ce.push(yl(g,q,u)),ce.push(es),ce.push(xl(y,U,l))}ce.push(es),ce.push(yl(h,q,u))}var xe=l.havingBaseStyle(Ae.TEXT),_e=We({positionType:"bottom",positionData:ge,children:ce});return Jl(Z(["delimsizing","mult"],[_e],xe),Ae.TEXT,l,m)},bl=80,wl=.08,_l=function(n,r,s,l,u){var m=av(n,l,s),h=new Sr(n,m),g=new Vn([h],{width:"400em",height:le(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Tr(["hide-tail"],[g],u)},Yv=function(n,r){var s=r.havingBaseSizing(),l=_m("\\surd",n*s.sizeMultiplier,wm,s),u=s.sizeMultiplier,m=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),h,g=0,y=0,b=0,$;return l.type==="small"?(b=1e3+1e3*m+bl,n<1?u=1:n<1.4&&(u=.7),g=(1+m+wl)/u,y=(1+m)/u,h=_l("sqrtMain",g,b,m,r),h.style.minWidth="0.853em",$=.833/u):l.type==="large"?(b=(1e3+bl)*qo[l.size],y=(qo[l.size]+m)/u,g=(qo[l.size]+m+wl)/u,h=_l("sqrtSize"+l.size,g,b,m,r),h.style.minWidth="1.02em",$=1/u):(g=n+m+wl,y=n+m,b=Math.floor(1e3*n+m)+bl,h=_l("sqrtTall",g,b,m,r),h.style.minWidth="0.742em",$=1.056),h.height=y,h.style.height=le(g),{span:h,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+m)*u}},ym=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Xv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),xm=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),qo=[0,1.2,1.8,2.4,3],bm=function(n,r,s,l,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),ym.has(n)||xm.has(n))return gm(n,r,!1,s,l,u);if(Xv.has(n))return vm(n,qo[r],!1,s,l,u);throw new ne("Illegal delimiter: '"+n+"'")},Zv=[{type:"small",style:Ae.SCRIPTSCRIPT},{type:"small",style:Ae.SCRIPT},{type:"small",style:Ae.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Jv=[{type:"small",style:Ae.SCRIPTSCRIPT},{type:"small",style:Ae.SCRIPT},{type:"small",style:Ae.TEXT},{type:"stack"}],wm=[{type:"small",style:Ae.SCRIPTSCRIPT},{type:"small",style:Ae.SCRIPT},{type:"small",style:Ae.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],e8=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},_m=function(n,r,s,l){for(var u=Math.min(2,3-l.style.size),m=u;m<s.length&&s[m].type!=="stack";m++){var h=So(n,e8(s[m]),"math"),g=h.height+h.depth;if(s[m].type==="small"){var y=l.havingBaseStyle(s[m].style);g*=y.sizeMultiplier}if(g>r)return s[m]}return s[s.length-1]},Nl=function(n,r,s,l,u,m){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var h;xm.has(n)?h=Zv:ym.has(n)?h=wm:h=Jv;var g=_m(n,r,h,l);return g.type==="small"?Uv(n,g.style,s,l,u,m):g.type==="large"?gm(n,g.size,s,l,u,m):vm(n,r,s,l,u,m)},$l=function(n,r,s,l,u,m){var h=l.fontMetrics().axisHeight*l.sizeMultiplier,g=901,y=5/l.fontMetrics().ptPerEm,b=Math.max(r-h,s+h),$=Math.max(b/500*g,2*b-y);return Nl(n,$,!0,l,u,m)},cd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},t8=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function ys(o,n){var r=gs(o);if(r&&t8.has(r.text))return r;throw r?new ne("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new ne("Invalid delimiter type '"+o.type+"'",o)}de({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=ys(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:cd[o.funcName].size,mclass:cd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?Z([o.mclass]):bm(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(ln(o.delim,o.mode));var r=new re("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=le(qo[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function dd(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}de({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ne("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:ys(n[0],o).text,color:r}}});de({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=ys(n[0],o),s=o.parser;++s.leftrightDepth;var l=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var u=Ee(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:l,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{dd(o);for(var r=xt(o.body,n,!0,["mopen","mclose"]),s=0,l=0,u=!1,m=0;m<r.length;m++)r[m].isMiddle?u=!0:(s=Math.max(r[m].height,s),l=Math.max(r[m].depth,l));s*=n.sizeMultiplier,l*=n.sizeMultiplier;var h;if(o.left==="."?h=Ao(n,["mopen"]):h=$l(o.left,s,l,n,o.mode,["mopen"]),r.unshift(h),u)for(var g=1;g<r.length;g++){var y=r[g],b=y.isMiddle;b&&(r[g]=$l(b.delim,s,l,b.options,o.mode,[]))}var $;if(o.right===".")$=Ao(n,["mclose"]);else{var k=o.rightColor?n.withColor(o.rightColor):n;$=$l(o.right,s,l,k,o.mode,["mclose"])}return r.push($),Z(["minner"],r,n)},mathmlBuilder:(o,n)=>{dd(o);var r=Ht(o.body,n);if(o.left!=="."){var s=new re("mo",[ln(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var l=new re("mo",[ln(o.right,o.mode)]);l.setAttribute("fence","true"),o.rightColor&&l.setAttribute("mathcolor",o.rightColor),r.push(l)}return Ql(r)}});de({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=ys(n[0],o);if(!o.parser.leftrightDepth)throw new ne("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=Ao(n,[]);else{r=bm(o.delim,1,n,o.mode,[]);var s={delim:o.delim,options:n};r.isMiddle=s}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?ln("|","text"):ln(o.delim,o.mode),s=new re("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var eu=(o,n)=>{var r=qi(He(o.body,n),n),s=o.label.slice(1),l=n.sizeMultiplier,u,m=0,h=Kn(o.body);if(s==="sout")u=Z(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/l,m=-.5*n.fontMetrics().xHeight;else if(s==="phase"){var g=st({number:.6,unit:"pt"},n),y=st({number:.35,unit:"ex"},n),b=n.havingBaseSizing();l=l/b.sizeMultiplier;var $=r.height+r.depth+g+y;r.style.paddingLeft=le($/2+g);var k=Math.floor(1e3*$*l),q=ov(k),E=new Vn([new Sr("phase",q)],{width:"400em",height:le(k/1e3),viewBox:"0 0 400000 "+k,preserveAspectRatio:"xMinYMin slice"});u=Tr(["hide-tail"],[E],n),u.style.height=le($),m=r.depth+g+y}else{/cancel/.test(s)?h||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var R=0,I=0,P=0;/box/.test(s)?(P=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),R=n.fontMetrics().fboxsep+(s==="colorbox"?0:P),I=R):s==="angl"?(P=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),R=4*P,I=Math.max(0,.25-r.depth)):(R=h?.2:0,I=R),u=Iv(r,s,R,I,n),/fbox|boxed|fcolorbox/.test(s)?(u.style.borderStyle="solid",u.style.borderWidth=le(P)):s==="angl"&&P!==.049&&(u.style.borderTopWidth=le(P),u.style.borderRightWidth=le(P)),m=r.depth+I,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var W;if(o.backgroundColor)W=We({positionType:"individualShift",children:[{type:"elem",elem:u,shift:m},{type:"elem",elem:r,shift:0}]});else{var G=/cancel|phase/.test(s)?["svg-align"]:[];W=We({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:m,wrapperClasses:G}]})}return/cancel/.test(s)&&(W.height=r.height,W.depth=r.depth),/cancel/.test(s)&&!h?Z(["mord","cancel-lap"],[W],n):Z(["mord"],[W],n)},tu=(o,n)=>{var r=0,s=new re(o.label.includes("colorbox")?"mpadded":"menclose",[Qe(o.body,n)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var l=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);s.setAttribute("style","border: "+l+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};de({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:s,funcName:l}=o,u=Ee(n[0],"color-token").color,m=n[1];return{type:"enclose",mode:s.mode,label:l,backgroundColor:u,body:m}},htmlBuilder:eu,mathmlBuilder:tu});de({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:s,funcName:l}=o,u=Ee(n[0],"color-token").color,m=Ee(n[1],"color-token").color,h=n[2];return{type:"enclose",mode:s.mode,label:l,backgroundColor:m,borderColor:u,body:h}},htmlBuilder:eu,mathmlBuilder:tu});de({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});de({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];return{type:"enclose",mode:r.mode,label:s,body:l}},htmlBuilder:eu,mathmlBuilder:tu});de({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var $m={};function Mn(o){for(var{type:n,names:r,props:s,handler:l,htmlBuilder:u,mathmlBuilder:m}=o,h={type:n,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:l},g=0;g<r.length;++g)$m[r[g]]=h;u&&(as[n]=u),m&&(ls[n]=m)}var km={};function w(o,n){km[o]=n}function md(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var xs=o=>{var n=o.parser.settings;if(!n.displayMode)throw new ne("{"+o.envName+"} can be used only in display mode.")},n8=new Set(["gather","gather*"]);function nu(o){if(!o.includes("ed"))return!o.includes("*")}function Mr(o,n,r){var{hskipBeforeAndAfter:s,addJot:l,cols:u,arraystretch:m,colSeparationType:h,autoTag:g,singleRow:y,emptySingleRow:b,maxNumCols:$,leqno:k}=n;if(o.gullet.beginGroup(),y||o.gullet.macros.set("\\cr","\\\\\\relax"),!m){var q=o.gullet.expandMacroAsText("\\arraystretch");if(q==null)m=1;else if(m=parseFloat(q),!m||m<0)throw new ne("Invalid \\arraystretch: "+q)}o.gullet.beginGroup();var E=[],R=[E],I=[],P=[],W=g!=null?[]:void 0;function G(){g&&o.gullet.macros.set("\\@eqnsw","1",!0)}function L(){W&&(o.gullet.macros.get("\\df@tag")?(W.push(o.subparse([new Qt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):W.push(!!g&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(G(),P.push(md(o));;){var F=o.parseExpression(!1,y?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),F={type:"ordgroup",mode:o.mode,body:F},r&&(F={type:"styling",mode:o.mode,style:r,body:[F]}),E.push(F);var V=o.fetch().text;if(V==="&"){if($&&E.length===$){if(y||h)throw new ne("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(V==="\\end"){L(),E.length===1&&F.type==="styling"&&F.body[0].body.length===0&&(R.length>1||!b)&&R.pop(),P.length<R.length+1&&P.push([]);break}else if(V==="\\\\"){o.consume();var N=void 0;o.gullet.future().text!==" "&&(N=o.parseSizeGroup(!0)),I.push(N?N.value:null),L(),P.push(md(o)),E=[],R.push(E),G()}else throw new ne("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:l,arraystretch:m,body:R,cols:u,rowGaps:I,hskipBeforeAndAfter:s,hLinesBeforeRow:P,colSeparationType:h,tags:W,leqno:k}}function ru(o){return o.slice(0,1)==="d"?"display":"text"}var jn=function(n,r){var s,l,u=n.body.length,m=n.hLinesBeforeRow,h=0,g=new Array(u),y=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,k=5*$;if(n.colSeparationType&&n.colSeparationType==="small"){var q=r.havingStyle(Ae.SCRIPT).sizeMultiplier;k=.2778*(q/r.sizeMultiplier)}var E=n.colSeparationType==="CD"?st({number:3,unit:"ex"},r):12*$,R=3*$,I=n.arraystretch*E,P=.7*I,W=.3*I,G=0;function L(Gt){for(var at=0;at<Gt.length;++at)at>0&&(G+=.25),y.push({pos:G,isDashed:Gt[at]})}for(L(m[0]),s=0;s<n.body.length;++s){var F=n.body[s],V=P,N=W;h<F.length&&(h=F.length);var H=new Array(F.length);for(l=0;l<F.length;++l){var J=He(F[l],r);N<J.depth&&(N=J.depth),V<J.height&&(V=J.height),H[l]=J}var be=n.rowGaps[s],ge=0;be&&(ge=st(be,r),ge>0&&(ge+=W,N<ge&&(N=ge),ge=0)),n.addJot&&(N+=R),H.height=V,H.depth=N,G+=V,H.pos=G,G+=N+ge,g[s]=H,L(m[s+1])}var ce=G/2+r.fontMetrics().axisHeight,pe=n.cols||[],qe=[],Ue,Ke,Fe=[];if(n.tags&&n.tags.some(Gt=>Gt))for(s=0;s<u;++s){var ae=g[s],$e=ae.pos-ce,ue=n.tags[s],j=void 0;ue===!0?j=Z(["eqn-num"],[],r):ue===!1?j=Z([],[],r):j=Z([],xt(ue,r,!0),r),j.depth=ae.depth,j.height=ae.height,Fe.push({type:"elem",elem:j,shift:$e})}for(l=0,Ke=0;l<h||Ke<pe.length;++l,++Ke){for(var U=pe[Ke]||{},xe=!0;U.type==="separator";){if(xe||(Ue=Z(["arraycolsep"],[]),Ue.style.width=le(r.fontMetrics().doubleRuleSep),qe.push(Ue)),U.separator==="|"||U.separator===":"){var _e=U.separator==="|"?"solid":"dashed",ke=Z(["vertical-separator"],[],r);ke.style.height=le(G),ke.style.borderRightWidth=le(b),ke.style.borderRightStyle=_e,ke.style.margin="0 "+le(-b/2);var Ce=G-ce;Ce&&(ke.style.verticalAlign=le(-Ce)),qe.push(ke)}else throw new ne("Invalid separator type: "+U.separator);Ke++,U=pe[Ke]||{},xe=!1}if(!(l>=h)){var Re=void 0;if(l>0||n.hskipBeforeAndAfter){var Be;Re=(Be=U.pregap)!=null?Be:k,Re!==0&&(Ue=Z(["arraycolsep"],[]),Ue.style.width=le(Re),qe.push(Ue))}var Ie=[];for(s=0;s<u;++s){var ft=g[s],un=ft[l];if(un){var jr=ft.pos-ce;un.depth=ft.depth,un.height=ft.height,Ie.push({type:"elem",elem:un,shift:jr})}}if(Ie=We({positionType:"individualShift",children:Ie}),Ie=Z(["col-align-"+(U.align||"c")],[Ie]),qe.push(Ie),l<h-1||n.hskipBeforeAndAfter){var bn;Re=(bn=U.postgap)!=null?bn:k,Re!==0&&(Ue=Z(["arraycolsep"],[]),Ue.style.width=le(Re),qe.push(Ue))}}}if(g=Z(["mtable"],qe),y.length>0){for(var Xn=Ti("hline",r,b),Ar=Ti("hdashline",r,b),Cn=[{type:"elem",elem:g,shift:0}];y.length>0;){var De=y.pop(),Xt=De.pos-ce;De.isDashed?Cn.push({type:"elem",elem:Ar,shift:Xt}):Cn.push({type:"elem",elem:Xn,shift:Xt})}g=We({positionType:"individualShift",children:Cn})}if(Fe.length===0)return Z(["mord"],[g],r);var Ze=We({positionType:"individualShift",children:Fe});return Ze=Z(["tag"],[Ze],r),Yn([g,Ze])},r8={c:"center ",l:"left ",r:"right "},An=function(n,r){for(var s=[],l=new re("mtd",[],["mtr-glue"]),u=new re("mtd",[],["mml-eqn-num"]),m=0;m<n.body.length;m++){for(var h=n.body[m],g=[],y=0;y<h.length;y++)g.push(new re("mtd",[Qe(h[y],r)]));n.tags&&n.tags[m]&&(g.unshift(l),g.push(l),n.leqno?g.unshift(u):g.push(u)),s.push(new re("mtr",g))}var b=new re("mtable",s),$=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);b.setAttribute("rowspacing",le($));var k="",q="";if(n.cols&&n.cols.length>0){var E=n.cols,R="",I=!1,P=0,W=E.length;E[0].type==="separator"&&(k+="top ",P=1),E[E.length-1].type==="separator"&&(k+="bottom ",W-=1);for(var G=P;G<W;G++)E[G].type==="align"?(q+=r8[E[G].align],I&&(R+="none "),I=!0):E[G].type==="separator"&&I&&(R+=E[G].separator==="|"?"solid ":"dashed ",I=!1);b.setAttribute("columnalign",q.trim()),/[sd]/.test(R)&&b.setAttribute("columnlines",R.trim())}if(n.colSeparationType==="align"){for(var L=n.cols||[],F="",V=1;V<L.length;V++)F+=V%2?"0em ":"1em ";b.setAttribute("columnspacing",F.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var N="",H=n.hLinesBeforeRow;k+=H[0].length>0?"left ":"",k+=H[H.length-1].length>0?"right ":"";for(var J=1;J<H.length-1;J++)N+=H[J].length===0?"none ":H[J][0]?"dashed ":"solid ";return/[sd]/.test(N)&&b.setAttribute("rowlines",N.trim()),k!==""&&(b=new re("menclose",[b]),b.setAttribute("notation",k.trim())),n.arraystretch&&n.arraystretch<1&&(b=new re("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},zm=function(n,r){n.envName.includes("ed")||xs(n);var s=[],l=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",m=Mr(n.parser,{cols:s,addJot:!0,autoTag:u?void 0:nu(n.envName),emptySingleRow:!0,colSeparationType:l,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),h,g=0,y={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",$=0;$<r[0].body.length;$++){var k=Ee(r[0].body[$],"textord");b+=k.text}h=Number(b),g=h*2}var q=!g;m.body.forEach(function(P){for(var W=1;W<P.length;W+=2){var G=Ee(P[W],"styling"),L=Ee(G.body[0],"ordgroup");L.body.unshift(y)}if(q)g<P.length&&(g=P.length);else{var F=P.length/2;if(h<F)throw new ne("Too many math in a row: "+("expected "+h+", but got "+F),P[0])}});for(var E=0;E<g;++E){var R="r",I=0;E%2===1?R="l":E>0&&q&&(I=1),s[E]={type:"align",align:R,pregap:I,postgap:0}}return m.colSeparationType=q?"align":"alignat",m};Mn({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=gs(n[0]),s=r?[n[0]]:Ee(n[0],"ordgroup").body,l=s.map(function(m){var h=Xl(m),g=h.text;if("lcr".includes(g))return{type:"align",align:g};if(g==="|")return{type:"separator",separator:"|"};if(g===":")return{type:"separator",separator:":"};throw new ne("Unknown column alignment: "+g,m)}),u={cols:l,hskipBeforeAndAfter:!0,maxNumCols:l.length};return Mr(o.parser,u,ru(o.envName))},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var l=o.parser;if(l.consumeSpaces(),l.fetch().text==="["){if(l.consume(),l.consumeSpaces(),r=l.fetch().text,!"lcr".includes(r))throw new ne("Expected l or c or r",l.nextToken);l.consume(),l.consumeSpaces(),l.expect("]"),l.consume(),s.cols=[{type:"align",align:r}]}}var u=Mr(o.parser,s,ru(o.envName)),m=Math.max(0,...u.body.map(h=>h.length));return u.cols=new Array(m).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=Mr(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=gs(n[0]),s=r?[n[0]]:Ee(n[0],"ordgroup").body,l=s.map(function(m){var h=Xl(m),g=h.text;if("lc".includes(g))return{type:"align",align:g};throw new ne("Unknown column alignment: "+g,m)});if(l.length>1)throw new ne("{subarray} can contain only one column");var u={cols:l,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=Mr(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new ne("{subarray} can contain only one column");return u},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Mr(o.parser,n,ru(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:zm,htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){n8.has(o.envName)&&xs(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:nu(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Mr(o.parser,n,"display")},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:zm,htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){xs(o);var n={autoTag:nu(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Mr(o.parser,n,"display")},htmlBuilder:jn,mathmlBuilder:An});Mn({type:"array",names:["CD"],props:{numArgs:0},handler(o){return xs(o),Gv(o.parser)},htmlBuilder:jn,mathmlBuilder:An});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");de({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new ne(o.funcName+" valid only within array environment")}});var fd=$m;de({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];if(l.type!=="ordgroup")throw new ne("Invalid environment name",l);for(var u="",m=0;m<l.body.length;++m)u+=Ee(l.body[m],"textord").text;if(s==="\\begin"){if(!fd.hasOwnProperty(u))throw new ne("No such environment: "+u,l);var h=fd[u],{args:g,optArgs:y}=r.parseArguments("\\begin{"+u+"}",h),b={mode:r.mode,envName:u,parser:r},$=h.handler(b,g,y);r.expect("\\end",!1);var k=r.nextToken,q=Ee(r.parseFunction(),"environment");if(q.name!==u)throw new ne("Mismatch: \\begin{"+u+"} matched by \\end{"+q.name+"}",k);return $}return{type:"environment",mode:r.mode,name:u,nameGroup:l}}});var Sm=(o,n)=>{var r=o.font,s=n.withFont(r);return He(o.body,s)},Tm=(o,n)=>{var r=o.font,s=n.withFont(r);return Qe(o.body,s)},pd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};de({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=us(n[0]),u=s;return u in pd&&(u=pd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:l}},htmlBuilder:Sm,mathmlBuilder:Tm});de({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"mclass",mode:r.mode,mclass:vs(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:Kn(s)}}});de({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,breakOnTokenText:l}=o,{mode:u}=r,m=r.parseExpression(!0,l),h="math"+s.slice(1);return{type:"font",mode:u,font:h,body:{type:"ordgroup",mode:r.mode,body:m}}},htmlBuilder:Sm,mathmlBuilder:Tm});var i8=(o,n)=>{var r=n.style,s=r.fracNum(),l=r.fracDen(),u;u=n.havingStyle(s);var m=He(o.numer,u,n);if(o.continued){var h=8.5/n.fontMetrics().ptPerEm,g=3.5/n.fontMetrics().ptPerEm;m.height=m.height<h?h:m.height,m.depth=m.depth<g?g:m.depth}u=n.havingStyle(l);var y=He(o.denom,u,n),b,$,k;o.hasBarLine?(o.barSize?($=st(o.barSize,n),b=Ti("frac-line",n,$)):b=Ti("frac-line",n),$=b.height,k=b.height):(b=null,$=0,k=n.fontMetrics().defaultRuleThickness);var q,E,R;r.size===Ae.DISPLAY.size?(q=n.fontMetrics().num1,$>0?E=3*k:E=7*k,R=n.fontMetrics().denom1):($>0?(q=n.fontMetrics().num2,E=k):(q=n.fontMetrics().num3,E=3*k),R=n.fontMetrics().denom2);var I;if(b){var W=n.fontMetrics().axisHeight;q-m.depth-(W+.5*$)<E&&(q+=E-(q-m.depth-(W+.5*$))),W-.5*$-(y.height-R)<E&&(R+=E-(W-.5*$-(y.height-R)));var G=-(W-.5*$);I=We({positionType:"individualShift",children:[{type:"elem",elem:y,shift:R},{type:"elem",elem:b,shift:G},{type:"elem",elem:m,shift:-q}]})}else{var P=q-m.depth-(y.height-R);P<E&&(q+=.5*(E-P),R+=.5*(E-P)),I=We({positionType:"individualShift",children:[{type:"elem",elem:y,shift:R},{type:"elem",elem:m,shift:-q}]})}u=n.havingStyle(r),I.height*=u.sizeMultiplier/n.sizeMultiplier,I.depth*=u.sizeMultiplier/n.sizeMultiplier;var L;r.size===Ae.DISPLAY.size?L=n.fontMetrics().delim1:r.size===Ae.SCRIPTSCRIPT.size?L=n.havingStyle(Ae.SCRIPT).fontMetrics().delim2:L=n.fontMetrics().delim2;var F,V;return o.leftDelim==null?F=Ao(n,["mopen"]):F=Nl(o.leftDelim,L,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?V=Z([]):o.rightDelim==null?V=Ao(n,["mclose"]):V=Nl(o.rightDelim,L,!0,n.havingStyle(r),o.mode,["mclose"]),Z(["mord"].concat(u.sizingClasses(n)),[F,Z(["mfrac"],[I]),V],n)},o8=(o,n)=>{var r=new re("mfrac",[Qe(o.numer,n),Qe(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=st(o.barSize,n);r.setAttribute("linethickness",le(s))}if(o.leftDelim!=null||o.rightDelim!=null){var l=[];if(o.leftDelim!=null){var u=new re("mo",[new ht(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),l.push(u)}if(l.push(r),o.rightDelim!=null){var m=new re("mo",[new ht(o.rightDelim.replace("\\",""))]);m.setAttribute("fence","true"),l.push(m)}return Ql(l)}return r},qm=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};de({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0],u=n[1],m,h=null,g=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":m=!0;break;case"\\\\atopfrac":m=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":m=!1,h="(",g=")";break;case"\\\\bracefrac":m=!1,h="\\{",g="\\}";break;case"\\\\brackfrac":m=!1,h="[",g="]";break;default:throw new Error("Unrecognized genfrac command")}var y=s==="\\cfrac",b=null;return y||s.startsWith("\\d")?b="display":s.startsWith("\\t")&&(b="text"),qm({type:"genfrac",mode:r.mode,numer:l,denom:u,continued:y,hasBarLine:m,leftDelim:h,rightDelim:g,barSize:null},b)},htmlBuilder:i8,mathmlBuilder:o8});de({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:s}=o,l;switch(r){case"\\over":l="\\frac";break;case"\\choose":l="\\binom";break;case"\\atop":l="\\\\atopfrac";break;case"\\brace":l="\\\\bracefrac";break;case"\\brack":l="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:l,token:s}}});var hd=["display","text","script","scriptscript"],gd=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};de({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,s=n[4],l=n[5],u=us(n[0]),m=u.type==="atom"&&u.family==="open"?gd(u.text):null,h=us(n[1]),g=h.type==="atom"&&h.family==="close"?gd(h.text):null,y=Ee(n[2],"size"),b,$=null;y.isBlank?b=!0:($=y.value,b=$.number>0);var k=null,q=n[3];if(q.type==="ordgroup"){if(q.body.length>0){var E=Ee(q.body[0],"textord");k=hd[Number(E.text)]}}else q=Ee(q,"textord"),k=hd[Number(q.text)];return qm({type:"genfrac",mode:r.mode,numer:s,denom:l,continued:!1,hasBarLine:b,barSize:$,leftDelim:m,rightDelim:g},k)}});de({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:s,token:l}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ee(n[0],"size").value,token:l}}});de({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0],u=Ee(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var m=n[2],h=u.number>0;return{type:"genfrac",mode:r.mode,numer:l,denom:m,continued:!1,hasBarLine:h,barSize:u,leftDelim:null,rightDelim:null}}});var Mm=(o,n)=>{var r=n.style,s,l;o.type==="supsub"?(s=o.sup?He(o.sup,n.havingStyle(r.sup()),n):He(o.sub,n.havingStyle(r.sub()),n),l=Ee(o.base,"horizBrace")):l=Ee(o,"horizBrace");var u=He(l.base,n.havingBaseStyle(Ae.DISPLAY)),m=hs(l,n),h;if(l.isOver?(h=We({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:m}]}),h.children[0].children[0].children[1].classes.push("svg-align")):(h=We({positionType:"bottom",positionData:u.depth+.1+m.height,children:[{type:"elem",elem:m},{type:"kern",size:.1},{type:"elem",elem:u}]}),h.children[0].children[0].children[0].classes.push("svg-align")),s){var g=Z(["mord",l.isOver?"mover":"munder"],[h],n);l.isOver?h=We({positionType:"firstBaseline",children:[{type:"elem",elem:g},{type:"kern",size:.2},{type:"elem",elem:s}]}):h=We({positionType:"bottom",positionData:g.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:g}]})}return Z(["mord",l.isOver?"mover":"munder"],[h],n)},s8=(o,n)=>{var r=ps(o.label);return new re(o.isOver?"mover":"munder",[Qe(o.base,n),r])};de({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:n[0]}},htmlBuilder:Mm,mathmlBuilder:s8});de({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[1],l=Ee(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:l})?{type:"href",mode:r.mode,href:l,body:mt(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1);return $v(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=qr(o.body,n);return r instanceof re||(r=new re("mrow",[r])),r.setAttribute("href",o.href),r}});de({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=Ee(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var l=[],u=0;u<s.length;u++){var m=s[u];m==="~"&&(m="\\textasciitilde"),l.push({type:"textord",mode:"text",text:m})}var h={type:"text",mode:r.mode,font:"\\texttt",body:l};return{type:"href",mode:r.mode,href:s,body:mt(h)}}});de({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:mt(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!1);return Yn(r)},mathmlBuilder(o,n){return new re("mrow",Ht(o.body,n))}});de({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,token:l}=o,u=Ee(n[0],"raw").string,m=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var h,g={};switch(s){case"\\htmlClass":g.class=u,h={command:"\\htmlClass",class:u};break;case"\\htmlId":g.id=u,h={command:"\\htmlId",id:u};break;case"\\htmlStyle":g.style=u,h={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var y=u.split(","),b=0;b<y.length;b++){var $=y[b],k=$.indexOf("=");if(k<0)throw new ne("\\htmlData key/value '"+$+"' missing equals sign");var q=$.slice(0,k),E=$.slice(k+1);g["data-"+q.trim()]=E}h={command:"\\htmlData",attributes:g};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(h)?{type:"html",mode:r.mode,attributes:g,body:mt(m)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var l=Z(s,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&l.setAttribute(u,o.attributes[u]);return l},mathmlBuilder:(o,n)=>qr(o.body,n)});de({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:mt(n[0]),mathml:mt(n[1])}},htmlBuilder:(o,n)=>{var r=xt(o.html,n,!1);return Yn(r)},mathmlBuilder:(o,n)=>qr(o.mathml,n)});var kl=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new ne("Invalid size: '"+n+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!Vd(s))throw new ne("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};de({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:s}=o,l={number:0,unit:"em"},u={number:.9,unit:"em"},m={number:0,unit:"em"},h="";if(r[0])for(var g=Ee(r[0],"raw").string,y=g.split(","),b=0;b<y.length;b++){var $=y[b].split("=");if($.length===2){var k=$[1].trim();switch($[0].trim()){case"alt":h=k;break;case"width":l=kl(k);break;case"height":u=kl(k);break;case"totalheight":m=kl(k);break;default:throw new ne("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var q=Ee(n[0],"url").url;return h===""&&(h=q,h=h.replace(/^.*[\\/]/,""),h=h.substring(0,h.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:q})?{type:"includegraphics",mode:s.mode,alt:h,width:l,height:u,totalheight:m,src:q}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=st(o.height,n),s=0;o.totalheight.number>0&&(s=st(o.totalheight,n)-r);var l=0;o.width.number>0&&(l=st(o.width,n));var u={height:le(r+s)};l>0&&(u.width=le(l)),s>0&&(u.verticalAlign=le(-s));var m=new hv(o.src,o.alt,u);return m.height=r,m.depth=s,m},mathmlBuilder:(o,n)=>{var r=new re("mglyph",[]);r.setAttribute("alt",o.alt);var s=st(o.height,n),l=0;if(o.totalheight.number>0&&(l=st(o.totalheight,n)-s,r.setAttribute("valign",le(-l))),r.setAttribute("height",le(s+l)),o.width.number>0){var u=st(o.width,n);r.setAttribute("width",le(u))}return r.setAttribute("src",o.src),r}});de({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,l=Ee(n[0],"size");if(r.settings.strict){var u=s[1]==="m",m=l.value.unit==="mu";u?(m||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+l.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):m&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:l.value}},htmlBuilder(o,n){return Jd(o.dimension,n)},mathmlBuilder(o,n){var r=st(o.dimension,n);return new om(r)}});de({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:l}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=Z([],[He(o.body,n)]),r=Z(["inner"],[r],n)):r=Z(["inner"],[He(o.body,n)]);var s=Z(["fix"],[]),l=Z([o.alignment],[r,s],n),u=Z(["strut"]);return u.style.height=le(l.height+l.depth),l.depth&&(u.style.verticalAlign=le(-l.depth)),l.children.unshift(u),l=Z(["thinbox"],[l],n),Z(["mord","vbox"],[l],n)},mathmlBuilder:(o,n)=>{var r=new re("mpadded",[Qe(o.body,n)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});de({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:s}=o,l=s.mode;s.switchMode("math");var u=r==="\\("?"\\)":"$",m=s.parseExpression(!1,u);return s.expect(u),s.switchMode(l),{type:"styling",mode:s.mode,style:"text",body:m}}});de({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new ne("Mismatched "+o.funcName)}});var vd=(o,n)=>{switch(n.style.size){case Ae.DISPLAY.size:return o.display;case Ae.TEXT.size:return o.text;case Ae.SCRIPT.size:return o.script;case Ae.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};de({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:mt(n[0]),text:mt(n[1]),script:mt(n[2]),scriptscript:mt(n[3])}},htmlBuilder:(o,n)=>{var r=vd(o,n),s=xt(r,n,!1);return Yn(s)},mathmlBuilder:(o,n)=>{var r=vd(o,n);return qr(r,n)}});var jm=(o,n,r,s,l,u,m)=>{o=Z([],[o]);var h=r&&Kn(r),g,y;if(n){var b=He(n,s.havingStyle(l.sup()),s);y={elem:b,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var $=He(r,s.havingStyle(l.sub()),s);g={elem:$,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-$.height)}}var k;if(y&&g){var q=s.fontMetrics().bigOpSpacing5+g.elem.height+g.elem.depth+g.kern+o.depth+m;k=We({positionType:"bottom",positionData:q,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:le(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o},{type:"kern",size:y.kern},{type:"elem",elem:y.elem,marginLeft:le(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(g){var E=o.height-m;k=We({positionType:"top",positionData:E,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:le(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o}]})}else if(y){var R=o.depth+m;k=We({positionType:"bottom",positionData:R,children:[{type:"elem",elem:o},{type:"kern",size:y.kern},{type:"elem",elem:y.elem,marginLeft:le(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var I=[k];if(g&&u!==0&&!h){var P=Z(["mspace"],[],s);P.style.marginRight=le(u),I.unshift(P)}return Z(["mop","op-limits"],I,s)},Am=new Set(["\\smallint"]),ji=(o,n)=>{var r,s,l=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Ee(o.base,"op"),l=!0):u=Ee(o,"op");var m=n.style,h=!1;m.size===Ae.DISPLAY.size&&u.symbol&&!Am.has(u.name)&&(h=!0);var g;if(u.symbol){var y=h?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),g=Et(u.name,y,"math",n,["mop","op-symbol",h?"large-op":"small-op"]),b.length>0){var $=g.italic,k=tm(b+"Size"+(h?"2":"1"),n);g=We({positionType:"individualShift",children:[{type:"elem",elem:g,shift:0},{type:"elem",elem:k,shift:h?.08:0}]}),u.name="\\"+b,g.classes.unshift("mop"),g.italic=$}}else if(u.body){var q=xt(u.body,n,!0);q.length===1&&q[0]instanceof an?(g=q[0],g.classes[0]="mop"):g=Z(["mop"],q,n)}else{for(var E=[],R=1;R<u.name.length;R++)E.push(Vl(u.name[R],u.mode,n));g=Z(["mop"],E,n)}var I=0,P=0;return(g instanceof an||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(I=(g.height-g.depth)/2-n.fontMetrics().axisHeight,P=g.italic),l?jm(g,r,s,n,m,P,I):(I&&(g.style.position="relative",g.style.top=le(I)),g)},Po=(o,n)=>{var r;if(o.symbol)r=new re("mo",[ln(o.name,o.mode)]),Am.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new re("mo",Ht(o.body,n));else{r=new re("mi",[new ht(o.name.slice(1))]);var s=new re("mo",[ln("⁡","text")]);o.parentIsSupSub?r=new re("mrow",[r,s]):r=im([r,s])}return r},a8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};de({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=s;return l.length===1&&(l=a8[l]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:l}},htmlBuilder:ji,mathmlBuilder:Po});de({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:mt(s)}},htmlBuilder:ji,mathmlBuilder:Po});var l8={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};de({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:ji,mathmlBuilder:Po});de({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:ji,mathmlBuilder:Po});de({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,s=r;return s.length===1&&(s=l8[s]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:ji,mathmlBuilder:Po});var Cm=(o,n)=>{var r,s,l=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Ee(o.base,"operatorname"),l=!0):u=Ee(o,"operatorname");var m;if(u.body.length>0){for(var h=u.body.map($=>{var k=$.text;return typeof k=="string"?{type:"textord",mode:$.mode,text:k}:$}),g=xt(h,n.withFont("mathrm"),!0),y=0;y<g.length;y++){var b=g[y];b instanceof an&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}m=Z(["mop"],g,n)}else m=Z(["mop"],[],n);return l?jm(m,r,s,n,n.style,0,0):m},u8=(o,n)=>{for(var r=Ht(o.body,n.withFont("mathrm")),s=!0,l=0;l<r.length;l++){var u=r[l];if(!(u instanceof om))if(u instanceof re)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var m=u.children[0];u.children.length===1&&m instanceof ht?m.text=m.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var h=r.map(b=>b.toText()).join("");r=[new ht(h)]}var g=new re("mi",r);g.setAttribute("mathvariant","normal");var y=new re("mo",[ln("⁡","text")]);return o.parentIsSupSub?new re("mrow",[g,y]):im([g,y])};de({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0];return{type:"operatorname",mode:r.mode,body:mt(l),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Cm,mathmlBuilder:u8});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Qr({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?Yn(xt(o.body,n,!1)):Z(["mord"],xt(o.body,n,!0),n)},mathmlBuilder(o,n){return qr(o.body,n,!0)}});de({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,s=n[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,n){var r=He(o.body,n.havingCrampedStyle()),s=Ti("overline-line",n),l=n.fontMetrics().defaultRuleThickness,u=We({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*l},{type:"elem",elem:s},{type:"kern",size:l}]});return Z(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new re("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var s=new re("mover",[Qe(o.body,n),r]);return s.setAttribute("accent","true"),s}});de({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"phantom",mode:r.mode,body:mt(s)}},htmlBuilder:(o,n)=>{var r=xt(o.body,n.withPhantom(),!1);return Yn(r)},mathmlBuilder:(o,n)=>{var r=Ht(o.body,n);return new re("mphantom",r)}});de({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=Z([],[He(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=We({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),Z(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Ht(mt(o.body),n),s=new re("mphantom",r),l=new re("mpadded",[s]);return l.setAttribute("height","0px"),l.setAttribute("depth","0px"),l}});de({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=Z(["inner"],[He(o.body,n.withPhantom())]),s=Z(["fix"],[]);return Z(["mord","rlap"],[r,s],n)},mathmlBuilder:(o,n)=>{var r=Ht(mt(o.body),n),s=new re("mphantom",r),l=new re("mpadded",[s]);return l.setAttribute("width","0px"),l}});de({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,s=Ee(n[0],"size").value,l=n[1];return{type:"raisebox",mode:r.mode,dy:s,body:l}},htmlBuilder(o,n){var r=He(o.body,n),s=st(o.dy,n);return We({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new re("mpadded",[Qe(o.body,n)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});de({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});de({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:s}=o,l=r[0],u=Ee(n[0],"size"),m=Ee(n[1],"size");return{type:"rule",mode:s.mode,shift:l&&Ee(l,"size").value,width:u.value,height:m.value}},htmlBuilder(o,n){var r=Z(["mord","rule"],[],n),s=st(o.width,n),l=st(o.height,n),u=o.shift?st(o.shift,n):0;return r.style.borderRightWidth=le(s),r.style.borderTopWidth=le(l),r.style.bottom=le(u),r.width=s,r.height=l+u,r.depth=-u,r.maxFontSize=l*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=st(o.width,n),s=st(o.height,n),l=o.shift?st(o.shift,n):0,u=n.color&&n.getColor()||"black",m=new re("mspace");m.setAttribute("mathbackground",u),m.setAttribute("width",le(r)),m.setAttribute("height",le(s));var h=new re("mpadded",[m]);return l>=0?h.setAttribute("height",le(l)):(h.setAttribute("height",le(l)),h.setAttribute("depth",le(-l))),h.setAttribute("voffset",le(l)),h}});function Em(o,n,r){for(var s=xt(o,n,!1),l=n.sizeMultiplier/r.sizeMultiplier,u=0;u<s.length;u++){var m=s[u].classes.indexOf("sizing");m<0?Array.prototype.push.apply(s[u].classes,n.sizingClasses(r)):s[u].classes[m+1]==="reset-size"+n.size&&(s[u].classes[m+1]="reset-size"+r.size),s[u].height*=l,s[u].depth*=l}return Yn(s)}var yd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],c8=(o,n)=>{var r=n.havingSize(o.size);return Em(o.body,r,n)};de({type:"sizing",names:yd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:s,parser:l}=o,u=l.parseExpression(!1,r);return{type:"sizing",mode:l.mode,size:yd.indexOf(s)+1,body:u}},htmlBuilder:c8,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),s=Ht(o.body,r),l=new re("mstyle",s);return l.setAttribute("mathsize",le(r.sizeMultiplier)),l}});de({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:s}=o,l=!1,u=!1,m=r[0]&&Ee(r[0],"ordgroup");if(m)for(var h="",g=0;g<m.body.length;++g){var y=m.body[g];if(h=y.text,h==="t")l=!0;else if(h==="b")u=!0;else{l=!1,u=!1;break}}else l=!0,u=!0;var b=n[0];return{type:"smash",mode:s.mode,body:b,smashHeight:l,smashDepth:u}},htmlBuilder:(o,n)=>{var r=Z([],[He(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var l=0;l<r.children.length;l++)r.children[l].depth=0;var u=We({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return Z(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new re("mpadded",[Qe(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});de({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s}=o,l=r[0],u=n[0];return{type:"sqrt",mode:s.mode,body:u,index:l}},htmlBuilder(o,n){var r=He(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=qi(r,n);var s=n.fontMetrics(),l=s.defaultRuleThickness,u=l;n.style.id<Ae.TEXT.id&&(u=n.fontMetrics().xHeight);var m=l+u/4,h=r.height+r.depth+m+l,{span:g,ruleWidth:y,advanceWidth:b}=Yv(h,n),$=g.height-y;$>r.height+r.depth+m&&(m=(m+$-r.height-r.depth)/2);var k=g.height-r.height-m-y;r.style.paddingLeft=le(b);var q=We({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+k)},{type:"elem",elem:g},{type:"kern",size:y}]});if(o.index){var E=n.havingStyle(Ae.SCRIPTSCRIPT),R=He(o.index,E,n),I=.6*(q.height-q.depth),P=We({positionType:"shift",positionData:-I,children:[{type:"elem",elem:R}]}),W=Z(["root"],[P]);return Z(["mord","sqrt"],[W,q],n)}else return Z(["mord","sqrt"],[q],n)},mathmlBuilder(o,n){var{body:r,index:s}=o;return s?new re("mroot",[Qe(r,n),Qe(s,n)]):new re("msqrt",[Qe(r,n)])}});var xd={display:Ae.DISPLAY,text:Ae.TEXT,script:Ae.SCRIPT,scriptscript:Ae.SCRIPTSCRIPT};de({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:s,parser:l}=o,u=l.parseExpression(!0,r),m=s.slice(1,s.length-5);return{type:"styling",mode:l.mode,style:m,body:u}},htmlBuilder(o,n){var r=xd[o.style],s=n.havingStyle(r).withFont("");return Em(o.body,s,n)},mathmlBuilder(o,n){var r=xd[o.style],s=n.havingStyle(r),l=Ht(o.body,s),u=new re("mstyle",l),m={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},h=m[o.style];return u.setAttribute("scriptlevel",h[0]),u.setAttribute("displaystyle",h[1]),u}});var d8=function(n,r){var s=n.base;if(s)if(s.type==="op"){var l=s.limits&&(r.style.size===Ae.DISPLAY.size||s.alwaysHandleSupSub);return l?ji:null}else if(s.type==="operatorname"){var u=s.alwaysHandleSupSub&&(r.style.size===Ae.DISPLAY.size||s.limits);return u?Cm:null}else{if(s.type==="accent")return Kn(s.base)?Zl:null;if(s.type==="horizBrace"){var m=!n.sub;return m===s.isOver?Mm:null}else return null}else return null};Qr({type:"supsub",htmlBuilder(o,n){var r=d8(o,n);if(r)return r(o,n);var{base:s,sup:l,sub:u}=o,m=He(s,n),h,g,y=n.fontMetrics(),b=0,$=0,k=s&&Kn(s);if(l){var q=n.havingStyle(n.style.sup());h=He(l,q,n),k||(b=m.height-q.fontMetrics().supDrop*q.sizeMultiplier/n.sizeMultiplier)}if(u){var E=n.havingStyle(n.style.sub());g=He(u,E,n),k||($=m.depth+E.fontMetrics().subDrop*E.sizeMultiplier/n.sizeMultiplier)}var R;n.style===Ae.DISPLAY?R=y.sup1:n.style.cramped?R=y.sup3:R=y.sup2;var I=n.sizeMultiplier,P=le(.5/y.ptPerEm/I),W=null;if(g){var G=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(m instanceof an||G)&&(W=le(-m.italic))}var L;if(h&&g){b=Math.max(b,R,h.depth+.25*y.xHeight),$=Math.max($,y.sub2);var F=y.defaultRuleThickness,V=4*F;if(b-h.depth-(g.height-$)<V){$=V-(b-h.depth)+g.height;var N=.8*y.xHeight-(b-h.depth);N>0&&(b+=N,$-=N)}var H=[{type:"elem",elem:g,shift:$,marginRight:P,marginLeft:W},{type:"elem",elem:h,shift:-b,marginRight:P}];L=We({positionType:"individualShift",children:H})}else if(g){$=Math.max($,y.sub1,g.height-.8*y.xHeight);var J=[{type:"elem",elem:g,marginLeft:W,marginRight:P}];L=We({positionType:"shift",positionData:$,children:J})}else if(h)b=Math.max(b,R,h.depth+.25*y.xHeight),L=We({positionType:"shift",positionData:-b,children:[{type:"elem",elem:h,marginRight:P}]});else throw new Error("supsub must have either sup or sub.");var be=El(m,"right")||"mord";return Z([be],[m,Z(["msupsub"],[L])],n)},mathmlBuilder(o,n){var r=!1,s,l;o.base&&o.base.type==="horizBrace"&&(l=!!o.sup,l===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Qe(o.base,n)];o.sub&&u.push(Qe(o.sub,n)),o.sup&&u.push(Qe(o.sup,n));var m;if(r)m=s?"mover":"munder";else if(o.sub)if(o.sup){var y=o.base;y&&y.type==="op"&&y.limits&&n.style===Ae.DISPLAY||y&&y.type==="operatorname"&&y.alwaysHandleSupSub&&(n.style===Ae.DISPLAY||y.limits)?m="munderover":m="msubsup"}else{var g=o.base;g&&g.type==="op"&&g.limits&&(n.style===Ae.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||n.style===Ae.DISPLAY)?m="munder":m="msub"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(n.style===Ae.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||n.style===Ae.DISPLAY)?m="mover":m="msup"}return new re(m,u)}});Qr({type:"atom",htmlBuilder(o,n){return Vl(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new re("mo",[ln(o.text,o.mode)]);if(o.family==="bin"){var s=Yl(o,n);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Rm={mi:"italic",mn:"normal",mtext:"normal"};Qr({type:"mathord",htmlBuilder(o,n){return fs(o,n,"mathord")},mathmlBuilder(o,n){var r=new re("mi",[ln(o.text,o.mode,n)]),s=Yl(o,n)||"italic";return s!==Rm[r.type]&&r.setAttribute("mathvariant",s),r}});Qr({type:"textord",htmlBuilder(o,n){return fs(o,n,"textord")},mathmlBuilder(o,n){var r=ln(o.text,o.mode,n),s=Yl(o,n)||"normal",l;return o.mode==="text"?l=new re("mtext",[r]):/[0-9]/.test(o.text)?l=new re("mn",[r]):o.text==="\\prime"?l=new re("mo",[r]):l=new re("mi",[r]),s!==Rm[l.type]&&l.setAttribute("mathvariant",s),l}});var zl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Sl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Qr({type:"spacing",htmlBuilder(o,n){if(Sl.hasOwnProperty(o.text)){var r=Sl[o.text].className||"";if(o.mode==="text"){var s=fs(o,n,"textord");return s.classes.push(r),s}else return Z(["mspace",r],[Vl(o.text,o.mode,n)],n)}else{if(zl.hasOwnProperty(o.text))return Z(["mspace",zl[o.text]],[],n);throw new ne('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if(Sl.hasOwnProperty(o.text))r=new re("mtext",[new ht(" ")]);else{if(zl.hasOwnProperty(o.text))return new re("mspace");throw new ne('Unknown type of space "'+o.text+'"')}return r}});var bd=()=>{var o=new re("mtd",[]);return o.setAttribute("width","50%"),o};Qr({type:"tag",mathmlBuilder(o,n){var r=new re("mtable",[new re("mtr",[bd(),new re("mtd",[qr(o.body,n)]),bd(),new re("mtd",[qr(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var wd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},_d={"\\textbf":"textbf","\\textmd":"textmd"},m8={"\\textit":"textit","\\textup":"textup"},$d=(o,n)=>{var r=o.font;if(r){if(wd[r])return n.withTextFontFamily(wd[r]);if(_d[r])return n.withTextFontWeight(_d[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(m8[r])};de({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];return{type:"text",mode:r.mode,body:mt(l),font:s}},htmlBuilder(o,n){var r=$d(o,n),s=xt(o.body,r,!0);return Z(["mord","text"],s,r)},mathmlBuilder(o,n){var r=$d(o,n);return qr(o.body,r)}});de({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=He(o.body,n),s=Ti("underline-line",n),l=n.fontMetrics().defaultRuleThickness,u=We({positionType:"top",positionData:r.height,children:[{type:"kern",size:l},{type:"elem",elem:s},{type:"kern",size:3*l},{type:"elem",elem:r}]});return Z(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new re("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var s=new re("munder",[Qe(o.body,n),r]);return s.setAttribute("accentunder","true"),s}});de({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=He(o.body,n),s=n.fontMetrics().axisHeight,l=.5*(r.height-s-(r.depth+s));return We({positionType:"shift",positionData:l,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new re("mpadded",[Qe(o.body,n)],["vcenter"])}});de({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new ne("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=kd(o),s=[],l=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var m=r[u];m==="~"&&(m="\\textasciitilde"),s.push(Et(m,"Typewriter-Regular",o.mode,l,["mord","texttt"]))}return Z(["mord","text"].concat(l.sizingClasses(n)),Zd(s),l)},mathmlBuilder(o,n){var r=new ht(kd(o)),s=new re("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var kd=o=>o.body.replace(/ /g,o.star?"␣":" "),kr=nm,Pm=`[ \r
	]`,f8="\\\\[a-zA-Z@]+",p8="\\\\[^\uD800-\uDFFF]",h8="("+f8+")"+Pm+"*",g8=`\\\\(
|[ \r	]+
?)[ \r	]*`,Bl="[̀-ͯ]",v8=new RegExp(Bl+"+$"),y8="("+Pm+"+)|"+(g8+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Bl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Bl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+h8)+("|"+p8+")");class zd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(y8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Qt("EOF",new Ot(this,r,r));var s=this.tokenRegex.exec(n);if(s===null||s.index!==r)throw new ne("Unexpected character: '"+n[r]+"'",new Qt(n[r],new Ot(this,r,r+1)));var l=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[l]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Qt(l,new Ot(this,r,this.tokenRegex.lastIndex))}}class x8{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ne("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,s){if(s===void 0&&(s=!1),s){for(var l=0;l<this.undefStack.length;l++)delete this.undefStack[l][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var b8=km;w("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});w("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});w("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});w("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});w("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var Sd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(o){var n=o.popToken(),r,s="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")s=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new ne("\\char` missing argument");s=n.text.charCodeAt(0)}else r=10;if(r){if(s=Sd[n.text],s==null||s>=r)throw new ne("Invalid base-"+r+" digit "+n.text);for(var l;(l=Sd[o.future().text])!=null&&l<r;)s*=r,s+=l,o.popToken()}return"\\@char{"+s+"}"});var iu=(o,n,r,s)=>{var l=o.consumeArg().tokens;if(l.length!==1)throw new ne("\\newcommand's first argument must be a macro name");var u=l[0].text,m=o.isDefined(u);if(m&&!n)throw new ne("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!m&&!r)throw new ne("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var h=0;if(l=o.consumeArg().tokens,l.length===1&&l[0].text==="["){for(var g="",y=o.expandNextToken();y.text!=="]"&&y.text!=="EOF";)g+=y.text,y=o.expandNextToken();if(!g.match(/^\s*[0-9]+\s*$/))throw new ne("Invalid number of arguments: "+g);h=parseInt(g),l=o.consumeArg().tokens}return m&&s||o.macros.set(u,{tokens:l,numArgs:h}),""};w("\\newcommand",o=>iu(o,!1,!0,!1));w("\\renewcommand",o=>iu(o,!0,!1,!1));w("\\providecommand",o=>iu(o,!0,!0,!0));w("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});w("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});w("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),kr[r],Xe.math[r],Xe.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Td={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},w8=new Set(["bin","rel"]);w("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in Td?n=Td[r]:(r.slice(0,4)==="\\not"||r in Xe.math&&w8.has(Xe.math[r].group))&&(n="\\dotsb"),n});var ou={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(o){var n=o.future().text;return n in ou?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(o){var n=o.future().text;return n in ou&&n!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(o){var n=o.future().text;return n in ou?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new ne("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Dm=le(qn["Main-Regular"][84][1]-.7*qn["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Dm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Dm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var Nm=o=>n=>{var r=n.consumeArg().tokens,s=n.consumeArg().tokens,l=n.consumeArg().tokens,u=n.consumeArg().tokens,m=n.macros.get("|"),h=n.macros.get("\\|");n.macros.beginGroup();var g=$=>k=>{o&&(k.macros.set("|",m),l.length&&k.macros.set("\\|",h));var q=$;if(!$&&l.length){var E=k.future();E.text==="|"&&(k.popToken(),q=!0)}return{tokens:q?l:s,numArgs:0}};n.macros.set("|",g(!1)),l.length&&n.macros.set("\\|",g(!0));var y=n.consumeArg().tokens,b=n.expandTokens([...u,...y,...r]);return n.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};w("\\bra@ket",Nm(!1));w("\\bra@set",Nm(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var Bm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class _8{constructor(n,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new x8(b8,r.macros),this.mode=s,this.stack=[]}feed(n){this.lexer=new zd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,s,l;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:l,end:s}=this.consumeArg(["]"])}else({tokens:l,start:r,end:s}=this.consumeArg());return this.pushToken(new Qt("EOF",s.loc)),this.pushTokens(l),new Qt("",Ot.range(r,s))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],s=n&&n.length>0;s||this.consumeSpaces();var l=this.future(),u,m=0,h=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++m;else if(u.text==="}"){if(--m,m===-1)throw new ne("Extra }",u)}else if(u.text==="EOF")throw new ne("Unexpected end of input in a macro argument, expected '"+(n&&s?n[h]:"}")+"'",u);if(n&&s)if((m===0||m===1&&n[h]==="{")&&u.text===n[h]){if(++h,h===n.length){r.splice(-h,h);break}}else h=0}while(m!==0||s);return l.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:l,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new ne("The length of delimiters doesn't match the number of args!");for(var s=r[0],l=0;l<s.length;l++){var u=this.popToken();if(s[l]!==u.text)throw new ne("Use of the macro doesn't match its definition",u)}}for(var m=[],h=0;h<n;h++)m.push(this.consumeArg(r&&r[h+1]).tokens);return m}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new ne("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),s=r.text,l=r.noexpand?null:this._getExpansion(s);if(l==null||n&&l.unexpandable){if(n&&l==null&&s[0]==="\\"&&!this.isDefined(s))throw new ne("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var u=l.tokens,m=this.consumeArgs(l.numArgs,l.delimiters);if(l.numArgs){u=u.slice();for(var h=u.length-1;h>=0;--h){var g=u[h];if(g.text==="#"){if(h===0)throw new ne("Incomplete placeholder at end of macro body",g);if(g=u[--h],g.text==="#")u.splice(h+1,1);else if(/^[1-9]$/.test(g.text))u.splice(h,2,...m[+g.text-1]);else throw new ne("Not a valid argument number",g)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Qt(n)]):void 0}expandTokens(n){var r=[],s=this.stack.length;for(this.pushTokens(n);this.stack.length>s;)if(this.expandOnce(!0)===!1){var l=this.stack.pop();l.treatAsRelax&&(l.noexpand=!1,l.treatAsRelax=!1),r.push(l)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(s=>s.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var s=this.lexer.catcodes[n];if(s!=null&&s!==13)return}var l=typeof r=="function"?r(this):r;if(typeof l=="string"){var u=0;if(l.includes("#"))for(var m=l.replace(/##/g,"");m.includes("#"+(u+1));)++u;for(var h=new zd(l,this.settings),g=[],y=h.lex();y.text!=="EOF";)g.push(y),y=h.lex();g.reverse();var b={tokens:g,numArgs:u};return b}return l}isDefined(n){return this.macros.has(n)||kr.hasOwnProperty(n)||Xe.math.hasOwnProperty(n)||Xe.text.hasOwnProperty(n)||Bm.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:kr.hasOwnProperty(n)&&!kr[n].primitive}}var qd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ts=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Tl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Md={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class bs{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new _8(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new ne("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Qt("}")),this.gullet.pushTokens(n);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(n,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var l=this.fetch();if(bs.endOfExpression.has(l.text)||r&&l.text===r||n&&kr[l.text]&&kr[l.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;s.push(u)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(n){for(var r=-1,s,l=0;l<n.length;l++)if(n[l].type==="infix"){if(r!==-1)throw new ne("only one infix operator per group",n[l].token);r=l,s=n[l].replaceWith}if(r!==-1&&s){var u,m,h=n.slice(0,r),g=n.slice(r+1);h.length===1&&h[0].type==="ordgroup"?u=h[0]:u={type:"ordgroup",mode:this.mode,body:h},g.length===1&&g[0].type==="ordgroup"?m=g[0]:m={type:"ordgroup",mode:this.mode,body:g};var y;return s==="\\\\abovefrac"?y=this.callFunction(s,[u,n[r],m],[]):y=this.callFunction(s,[u,m],[]),[y]}else return n}handleSupSubscript(n){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var l;do{var u;l=this.parseGroup(n)}while(((u=l)==null?void 0:u.type)==="internal");if(!l)throw new ne("Expected group after '"+s+"'",r);return l}formatUnsupportedCmd(n){for(var r=[],s=0;s<n.length;s++)r.push({type:"textord",mode:"text",text:n[s]});var l={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[l]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,l;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var m=u.text==="\\limits";r.limits=m,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new ne("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(s)throw new ne("Double superscript",u);s=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(l)throw new ne("Double subscript",u);l=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(s)throw new ne("Double superscript",u);var h={type:"textord",mode:this.mode,text:"\\prime"},g=[h];for(this.consume();this.fetch().text==="'";)g.push(h),this.consume();this.fetch().text==="^"&&g.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:g}}else if(ts[u.text]){var y=qd.test(u.text),b=[];for(b.push(new Qt(ts[u.text])),this.consume();;){var $=this.fetch().text;if(!ts[$]||qd.test($)!==y)break;b.unshift(new Qt(ts[$])),this.consume()}var k=this.subparse(b);y?l={type:"ordgroup",mode:"math",body:k}:s={type:"ordgroup",mode:"math",body:k}}else break}return s||l?{type:"supsub",mode:this.mode,base:r,sup:s,sub:l}:r}parseFunction(n,r){var s=this.fetch(),l=s.text,u=kr[l];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new ne("Got function '"+l+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!u.allowedInText)throw new ne("Can't use function '"+l+"' in text mode",s);if(this.mode==="math"&&u.allowedInMath===!1)throw new ne("Can't use function '"+l+"' in math mode",s);var{args:m,optArgs:h}=this.parseArguments(l,u);return this.callFunction(l,m,h,s,n)}callFunction(n,r,s,l,u){var m={funcName:n,parser:this,token:l,breakOnTokenText:u},h=kr[n];if(h&&h.handler)return h.handler(m,r,s);throw new ne("No function handler for "+n)}parseArguments(n,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var l=[],u=[],m=0;m<s;m++){var h=r.argTypes&&r.argTypes[m],g=m<r.numOptionalArgs;(r.primitive&&h==null||r.type==="sqrt"&&m===1&&u[0]==null)&&(h="primitive");var y=this.parseGroupOfType("argument to '"+n+"'",h,g);if(g)u.push(y);else if(y!=null)l.push(y);else throw new ne("Null argument, please report this as a bug")}return{args:l,optArgs:u}}parseGroupOfType(n,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var l=this.parseArgumentGroup(s,"text");return l!=null?{type:"styling",mode:l.mode,body:[l],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",s);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(s)throw new ne("A primitive argument cannot be optional");var m=this.parseGroup(n);if(m==null)throw new ne("Expected group as "+n,this.fetch());return m}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new ne("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var l="",u;(u=this.fetch()).text!=="EOF";)l+=u.text,this.consume();return this.consume(),s.text=l,s}parseRegexGroup(n,r){for(var s=this.fetch(),l=s,u="",m;(m=this.fetch()).text!=="EOF"&&n.test(u+m.text);)l=m,u+=l.text,this.consume();if(u==="")throw new ne("Invalid "+r+": '"+s.text+"'",s);return s.range(l,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new ne("Invalid color: '"+r.text+"'",r);var l=s[0];return/^[0-9a-f]{6}$/i.test(l)&&(l="#"+l),{type:"color-token",mode:this.mode,color:l}}parseSizeGroup(n){var r,s=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",s=!0);var l=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!l)throw new ne("Invalid size: '"+r.text+"'",r);var u={number:+(l[1]+l[2]),unit:l[3]};if(!Vd(u))throw new ne("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:s}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(n,r){var s=this.gullet.scanArgument(n);if(s==null)return null;var l=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var m={type:"ordgroup",mode:this.mode,loc:s.loc,body:u};return r&&this.switchMode(l),m}parseGroup(n,r){var s=this.fetch(),l=s.text,u;if(l==="{"||l==="\\begingroup"){this.consume();var m=l==="{"?"}":"\\endgroup";this.gullet.beginGroup();var h=this.parseExpression(!1,m),g=this.fetch();this.expect(m),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Ot.range(s,g),body:h,semisimple:l==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&l[0]==="\\"&&!Bm.hasOwnProperty(l)){if(this.settings.throwOnError)throw new ne("Undefined control sequence: "+l,s);u=this.formatUnsupportedCmd(l),this.consume()}return u}formLigatures(n){for(var r=n.length-1,s=0;s<r;++s){var l=n[s],u=l.text;u==="-"&&n[s+1].text==="-"&&(s+1<r&&n[s+2].text==="-"?(n.splice(s,3,{type:"textord",mode:"text",loc:Ot.range(l,n[s+2]),text:"---"}),r-=2):(n.splice(s,2,{type:"textord",mode:"text",loc:Ot.range(l,n[s+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[s+1].text===u&&(n.splice(s,2,{type:"textord",mode:"text",loc:Ot.range(l,n[s+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),l=s.charAt(0)==="*";if(l&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new ne(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:l}}Md.hasOwnProperty(r[0])&&!Xe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Md[r[0]]+r.slice(1));var u=v8.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var m;if(Xe[this.mode][r]){this.settings.strict&&this.mode==="math"&&Al.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var h=Xe[this.mode][r].group,g=Ot.range(n),y;if(yv.hasOwnProperty(h)){var b=h;y={type:"atom",mode:this.mode,family:b,loc:g,text:r}}else y={type:h,mode:this.mode,loc:g,text:r};m=y}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Ud(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),m={type:"textord",mode:"text",loc:Ot.range(n),text:r};else return null;if(this.consume(),u)for(var $=0;$<u[0].length;$++){var k=u[0][$];if(!Tl[k])throw new ne("Unknown accent ' "+k+"'",n);var q=Tl[k][this.mode]||Tl[k].text;if(!q)throw new ne("Accent "+k+" unsupported in "+this.mode+" mode",n);m={type:"accent",mode:this.mode,loc:Ot.range(n),label:q,isStretchy:!1,isShifty:!0,base:m}}return m}}bs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var su=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new bs(n,r);delete s.gullet.macros.current["\\df@tag"];var l=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ne("\\tag works only in display equations");l=[{type:"tag",mode:"text",body:l,tag:s.subparse([new Qt("\\df@tag")])}]}return l},Im=function(n,r,s){r.textContent="";var l=au(n,s).toNode();r.appendChild(l)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Im=function(){throw new ne("KaTeX doesn't work in quirks mode.")});var $8=function(n,r){var s=au(n,r).toMarkup();return s},k8=function(n,r){var s=new Hl(r);return su(n,s)},Fm=function(n,r,s){if(s.throwOnError||!(n instanceof ne))throw n;var l=Z(["katex-error"],[new an(r)]);return l.setAttribute("title",n.toString()),l.setAttribute("style","color:"+s.errorColor),l},au=function(n,r){var s=new Hl(r);try{var l=su(n,s);return Rv(l,n,s)}catch(u){return Fm(u,n,s)}},z8=function(n,r){var s=new Hl(r);try{var l=su(n,s);return Pv(l,n,s)}catch(u){return Fm(u,n,s)}},S8="0.16.33",T8={Span:Ro,Anchor:Ul,SymbolNode:an,SvgNode:Vn,PathNode:Sr,LineNode:jl},jd={version:S8,render:Im,renderToString:$8,ParseError:ne,SETTINGS_SCHEMA:ns,__parse:k8,__renderToDomTree:au,__renderToHTMLTree:z8,__setFontMetrics:cv,__defineSymbol:d,__defineFunction:de,__defineMacro:w,__domTree:T8};function q8(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return jd.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return jd.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}}),n}class cs{constructor(n){this._perm=n}get length(){return this._perm.length}originalIndex(n){return this._perm[n]}displayIndex(n){return this._perm.indexOf(n)}apply(n){return this._perm.map(r=>n[r])}static random(n){const r=Array.from({length:n},(s,l)=>l);for(let s=n-1;s>0;s--){const l=Math.floor(Math.random()*(s+1));[r[s],r[l]]=[r[l],r[s]]}return new cs(r)}static identity(n){return new cs(Array.from({length:n},(r,s)=>s))}}function M8({nodeId:o,nodes:n,questionBank:r,onAnswer:s,onSkip:l,lang:u,excludeIndices:m=[],isMobile:h}){const g=n.find(N=>N.id===o),y=K.useMemo(()=>x5(r,o,m),[o,m]),b="#4a9eff",$=g?u==="pl"?g.labelPl:g.label:o,k=K.useMemo(()=>y?cs.random(y.options.length):null,[y]),q=K.useMemo(()=>k?k.apply(y.options):[],[k,y]),E=K.useMemo(()=>k?k.displayIndex(y.correct):-1,[k,y]),[R,I]=K.useState(null),[P,W]=K.useState(!1),G=()=>{R!==null&&W(!0)},L=()=>{s(R===E,y,y.index),I(null),W(!1)};K.useEffect(()=>{const N=H=>{H.key==="Escape"&&l((y==null?void 0:y.index)??-1)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[l,y]);const F=N=>_.jsx("span",{dangerouslySetInnerHTML:{__html:q8(N)}}),V=h?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:se.surface,border:`1px solid ${b}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:se.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:se.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${b}40`,borderRadius:10,padding:"14px 16px",color:se.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return _.jsxs("div",{style:V,children:[h&&_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[_.jsx("div",{style:{color:b,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:$}),_.jsx("button",{onClick:()=>l((y==null?void 0:y.index)??-1),style:{background:`${se.textDim}22`,border:`1px solid ${se.border}`,color:se.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:ee("close",u)})]}),y?_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{fontSize:13,color:se.textBody,marginBottom:12,lineHeight:1.65},children:F(y.q)}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:q.map((N,H)=>{let J=se.bg,be=se.border,ge=se.textBody;return R===H&&!P&&(J=`${b}22`,be=b,ge=b),P&&(H===E?(J="#27ae6022",be="#27ae60",ge="#2ecc71"):H===R&&(J="#e74c3c22",be="#e74c3c",ge="#ff6b6b")),_.jsxs("button",{onClick:()=>{P||I(H)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:P?"default":"pointer",background:J,border:`1px solid ${be}`,color:ge,lineHeight:1.5,minHeight:38},children:[_.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][H],"."]}),F(N)]},H)})}),P&&y.hint&&_.jsx("div",{style:{fontSize:11,color:se.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:F(y.hint)}),P?_.jsx("button",{onClick:L,style:{...zo(R===E?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:ee(R===E?"knownConfirm":"unknownConfirm",u)}):_.jsx("button",{onClick:G,disabled:R===null,style:{...zo(b),width:"100%",opacity:R===null?.4:1,fontSize:13},children:ee("checkAnswer",u)})]}):_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:se.textDim,fontSize:12,marginBottom:12},children:ee("noQuestion",u)}),_.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[_.jsx("button",{onClick:()=>s(!0,null,-1),style:{...zo("#27ae60"),fontSize:12,padding:"8px 14px"},children:ee("yesKnow",u)}),_.jsx("button",{onClick:()=>s(!1,null,-1),style:{...zo("#e74c3c"),fontSize:12,padding:"8px 14px"},children:ee("noKnow",u)}),_.jsx("button",{onClick:()=>l(-1),style:{...zo("#3a4d63"),fontSize:12,padding:"8px 14px"},children:ee("skipBtn",u)})]})]})]})}const j8={position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function A8({belief:o,frontier:n,visibleFrontier:r,hasStarted:s,nextSuggestedId:l,sessionComplete:u,adjacency:m,expectedRemaining:h,pCorrect:g,questionsAnswered:y,nodes:b,lang:$,onReset:k,onNodeClick:q,SCOPE_LABELS:E,isMobile:R}){var be,ge;const I=Object.fromEntries(b.map(ce=>[ce.id,ce])),P=ce=>{var pe,qe;return $==="pl"?(pe=I[ce])==null?void 0:pe.labelPl:(qe=I[ce])==null?void 0:qe.label},W=b.filter(ce=>o[ce.id]==="known"),G=b.filter(ce=>o[ce.id]==="unknown"),L=b.length,F=[{label:ee("statKnown",$),count:W.length,color:"#27ae60"},{label:ee("statUnknown",$),count:G.length,color:"#e74c3c"},{label:ee("statRemaining",$),count:h??"-",color:"#4a9eff"}],V=g?Math.round(g*100):50,N=R?13:11,H=R?11:9,J=_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{fontWeight:700,fontSize:R?14:12,marginBottom:10,color:se.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{children:[ee("diagHeader",$)," ",u?"✓":""]}),_.jsx("button",{onClick:k,style:{fontSize:H,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${se.textFaint}`,color:se.textDim,minHeight:R?32:"auto"},children:ee("reset",$)})]}),_.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:F.map(({label:ce,count:pe,color:qe})=>_.jsxs("div",{style:{flex:1,textAlign:"center",background:`${qe}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${qe}40`},children:[_.jsx("div",{style:{color:qe,fontWeight:700,fontSize:R?20:15},children:pe}),_.jsx("div",{style:{color:se.textDim,fontSize:H},children:ce})]},ce))}),!u&&s&&_.jsxs("div",{style:{fontSize:H,color:se.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[_.jsxs("span",{children:[ee("answered",$),": ",_.jsx("span",{style:{color:se.textPrimary},children:y})]}),_.jsxs("span",{children:[ee("estimated",$),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:["~",h??"-"]})]}),_.jsxs("span",{children:[ee("accuracy",$),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:[V,"%"]})]})]}),u&&_.jsxs("div",{children:[_.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[_.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:R?14:12,marginBottom:4},children:ee("sessionDone",$)}),_.jsxs("div",{style:{color:se.textDim,fontSize:H,lineHeight:1.6},children:[ee("sessionDoneSub",$)," ",_.jsx("span",{style:{color:se.textPrimary},children:y})," ",ee("sessionDoneQ",$),"."," ",ee("sessionDoneClass",$)," ",W.length+G.length,"/",L,".",_.jsx("br",{}),ee("sessionDoneAcc",$),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:[V,"%"]}),"."," ",ee("sessionDoneKnown",$)," ",_.jsx("span",{style:{color:"#2ecc71"},children:W.length}),","," ",ee("sessionDoneStudy",$)," ",_.jsx("span",{style:{color:"#e74c3c"},children:G.length}),"."]})]}),G.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#e74c3c",fontSize:N,fontWeight:600,marginBottom:5},children:[ee("toStudy",$)," (",G.length,")"]}),b.filter(ce=>o[ce.id]==="unknown").filter(ce=>(m.prereqs[ce.id]??[]).every(pe=>o[pe]==="known")).slice(0,8).map(ce=>{var pe,qe;return _.jsxs("div",{style:{padding:R?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:N,color:"#ff8a8a",lineHeight:1.4},children:[P(ce.id),_.jsx("div",{style:{fontSize:H,color:se.textDim,marginTop:1},children:(qe=E==null?void 0:E[(pe=I[ce.id])==null?void 0:pe.scope])==null?void 0:qe[$==="pl"?"pl":"en"]})]},ce.id)})]}),W.length>0&&_.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:N},children:["✓ ",ee("knownList",$)," ",W.length]})]}),!u&&!s&&_.jsxs("div",{style:{marginBottom:10},children:[l&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:N,fontWeight:600,marginBottom:5},children:ee("startHere",$)}),_.jsxs("div",{onClick:()=>q==null?void 0:q(l),style:{padding:R?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:N,color:"#a8d4ff",minHeight:R?44:"auto"},children:[_.jsx("div",{style:{fontWeight:600},children:P(l)}),_.jsxs("div",{style:{fontSize:H,color:se.textDim,marginTop:2},children:[(ge=E==null?void 0:E[(be=I[l])==null?void 0:be.scope])==null?void 0:ge[$==="pl"?"pl":"en"]," · ",ee("startHereSub",$)]})]})]}),_.jsx("div",{style:{fontSize:H,color:se.textFaint,marginTop:8,lineHeight:1.5},children:ee("clickAnyNode",$)})]}),!u&&s&&r.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#f39c12",fontSize:N,fontWeight:600,marginBottom:5},children:ee("whatNext",$)}),r.map(ce=>{var qe,Ue;const pe=ce===l;return _.jsxs("div",{onClick:()=>q==null?void 0:q(ce),style:{padding:R?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:pe?"#4a9eff18":"#f39c1215",border:`1px solid ${pe?"#4a9eff55":"#f39c1240"}`,fontSize:N,color:pe?"#a8d4ff":"#f5d78e",minHeight:R?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[_.jsxs("div",{children:[_.jsx("div",{children:P(ce)}),_.jsxs("div",{style:{fontSize:H,color:se.textDim,marginTop:1},children:[(Ue=E==null?void 0:E[(qe=I[ce])==null?void 0:qe.scope])==null?void 0:Ue[$==="pl"?"pl":"en"],pe&&_.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:ee("best",$)})]})]}),_.jsx("span",{style:{opacity:.7},children:pe?"★":"→"})]},ce)})]}),!u&&W.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#27ae60",fontSize:N,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",ee("knownList",$)," (",W.length,")"]}),W.map(ce=>_.jsx("div",{style:{fontSize:H,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:P(ce.id)},ce.id))]}),!u&&!R&&_.jsxs("div",{style:{marginTop:12,color:se.textFaint,fontSize:H,lineHeight:1.5},children:[ee("hintClick",$),_.jsx("br",{}),ee("hintShift",$),_.jsx("br",{}),ee("hintGreen",$)]})]});return R?_.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),J]}):_.jsx("div",{style:j8,children:J})}function C8({nodes:o,lang:n,targetNode:r,subgraphIds:s,ddClassification:l,betaBeliefs:u,ddComplete:m,ddNextNodeId:h,questionsAnswered:g,onNodeClick:y,onReset:b,isMobile:$}){const k=Object.fromEntries(o.map(N=>[N.id,N])),q=N=>{var H,J;return n==="pl"?(H=k[N])==null?void 0:H.labelPl:(J=k[N])==null?void 0:J.label},E=s.filter(N=>l[N]==="known"),R=s.filter(N=>l[N]==="unknown"),I=s.filter(N=>l[N]==="uncertain"),P=s.length,W=E.length+R.length,G=P>0?Math.round(W/P*100):0,L=q(r),F=$?11:9,V=$?{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return _.jsxs("div",{style:V,children:[$&&_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),_.jsxs("div",{style:{fontWeight:700,fontSize:$?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{children:[ee("deepDiveHeader",n)," ",m?"✓":""]}),_.jsx("button",{onClick:b,style:{fontSize:F,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${se.textFaint}`,color:se.textDim,minHeight:$?32:"auto"},children:ee("reset",n)})]}),_.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[_.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:ee("deepDiveTarget",n)}),_.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:L}),_.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[P," ",ee("deepDiveNodes",n)]})]}),_.jsxs("div",{style:{marginBottom:10},children:[_.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:_.jsx("div",{style:{height:"100%",borderRadius:3,width:`${G}%`,background:m?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[_.jsxs("span",{children:[ee("classified",n),": ",_.jsxs("span",{style:{color:"#f5f6fa"},children:[W,"/",P]})]}),_.jsxs("span",{children:[ee("questions",n),": ",_.jsx("span",{style:{color:"#f5f6fa"},children:g})]})]})]}),m&&_.jsxs("div",{children:[_.jsxs("div",{style:{background:E.length>R.length?"#27ae6018":"#e74c3c18",border:`1px solid ${E.length>R.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[_.jsx("div",{style:{color:E.length>R.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:ee("diagReady",n)}),_.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[ee("diagKnown",n),": ",_.jsx("span",{style:{color:"#2ecc71"},children:E.length})," / ",ee("diagStudy",n),": ",_.jsx("span",{style:{color:"#ff6b6b"},children:R.length})," / ",ee("diagTotal",n),": ",P]})]}),R.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:ee("studyThese",n)}),s.filter(N=>l[N]==="unknown").slice(0,8).map(N=>{var H;return _.jsx(Ad,{id:N,label:q(N),scope:(H=k[N])==null?void 0:H.scope,classification:"unknown",beta:u[N]},N)})]}),E.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:ee("mastered",n)}),s.filter(N=>l[N]==="known").map(N=>{var H;return _.jsx(Ad,{id:N,label:q(N),scope:(H=k[N])==null?void 0:H.scope,classification:"known",beta:u[N]},N)})]})]}),!m&&_.jsxs(_.Fragment,{children:[h&&_.jsxs("div",{style:{marginBottom:10},children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:ee("nextQuestion",n)}),_.jsxs("div",{onClick:()=>y==null?void 0:y(h),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[q(h),_.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[ee("confidence",n),": ",E8(u[h])]})]})]}),I.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[ee("unclassified",n)," (",I.length,")"]}),I.map(N=>_.jsxs("div",{onClick:()=>y==null?void 0:y(N),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:N===h?"#4a9eff18":"#f39c1212",border:`1px solid ${N===h?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:N===h?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:q(N)}),_.jsx(Lm,{beta:u[N]})]},N))]})]})]})}function E8(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function Lm({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),l=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return _.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:_.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:l,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function Ad({id:o,label:n,scope:r,classification:s,beta:l}){const u=s==="known"?"#27ae60":"#e74c3c";return _.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:n}),_.jsx(Lm,{beta:l})]})}function R8({lang:o,diagMode:n,SCOPE_COLORS:r,SCOPE_LABELS:s,SECTIONS:l}){const[u,m]=K.useState(!1),h=Object.entries(r).map(([g,y])=>{var b;return{color:y,label:(b=s[g])==null?void 0:b[o==="pl"?"pl":"en"]}});return _.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152095",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[_.jsxs("button",{onClick:()=>m(g=>!g),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[_.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),ee("legendTitle",o)]}),u&&_.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&_.jsxs("div",{style:{marginBottom:8},children:[[{color:se.knownHi,label:ee("legendKnown",o)},{color:se.unknownHi,label:ee("legendUnknown",o)},{color:se.frontier,label:ee("legendFrontier",o)},{color:"#4a5568",label:ee("legendUnclassified",o)}].map(({color:g,label:y})=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:y})]},y)),_.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),_.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:ee("legendScopes",o)}),h.map(({color:g,label:y})=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:y})]},y)),_.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[_.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:ee("legendStages",o)}),Object.entries(l).map(([g,y])=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[_.jsx("div",{style:{width:8,height:3,borderRadius:1,background:y.color,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:y.label})]},g))]})]})]})}function P8({nodes:o,lang:n,onSelect:r,onClose:s,SECTIONS:l,SCOPE_COLORS:u}){const[m,h]=K.useState(""),[g,y]=K.useState(-1),b=K.useRef([]),$=K.useMemo(()=>Object.keys(l??{}),[l]),k=K.useMemo(()=>{const P=m.toLowerCase();return o.filter(W=>!P||W.label.toLowerCase().includes(P)||W.labelPl.toLowerCase().includes(P))},[o,m]),q=K.useMemo(()=>{const P={};for(const G of $)P[G]=[];for(const G of k){const L=G.section??$[0]??"default";P[L]||(P[L]=[]),P[L].push(G)}const W=[];for(const G of $)for(const L of P[G]??[])W.push(L);return W},[k,$]),E=K.useMemo(()=>{const P={};for(const W of $)P[W]=[];for(const W of k){const G=W.section??$[0]??"default";P[G]||(P[G]=[]),P[G].push(W)}return P},[k,$]),R=P=>n==="pl"?P.labelPl:P.label;K.useEffect(()=>{const P=W=>{if(W.key==="Escape"){s();return}W.key==="ArrowDown"&&(W.preventDefault(),y(G=>Math.min(G+1,q.length-1))),W.key==="ArrowUp"&&(W.preventDefault(),y(G=>Math.max(G-1,0))),W.key==="Enter"&&g>=0&&q[g]&&(W.preventDefault(),r(q[g].id))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[q,g,s,r]),K.useEffect(()=>{g>=0&&b.current[g]&&b.current[g].scrollIntoView({block:"nearest"})},[g]),K.useEffect(()=>{y(-1)},[m]);const I={title:n==="pl"?"Wybierz cel":"Select Goal",subtitle:n==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:n==="pl"?"Szukaj tematu...":"Search topics...",noResults:n==="pl"?"Brak wyników":"No results",footer:`${k.length} / ${o.length} ${n==="pl"?"tematów":"topics"}`,cancel:n==="pl"?"Anuluj":"Cancel"};return _.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:P=>{P.target===P.currentTarget&&s()},children:_.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:I.title}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:I.subtitle})]}),_.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),_.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:_.jsx("input",{autoFocus:!0,value:m,onChange:P=>h(P.target.value),placeholder:I.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),_.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[$.map(P=>{const W=E[P];if(!W||W.length===0)return null;const G=l==null?void 0:l[P];return _.jsxs("div",{style:{marginBottom:12},children:[_.jsx("div",{style:{fontSize:9,fontWeight:700,color:(G==null?void 0:G.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(G==null?void 0:G.label)??P}),_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:W.map(L=>{const F=q.indexOf(L),V=(u==null?void 0:u[L.scope])??"#4a9eff",N=g===F;return _.jsxs("button",{ref:H=>b.current[F]=H,onClick:()=>r(L.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:N?`${V}35`:`${V}15`,border:`1px solid ${N?V:`${V}40`}`,color:"#c8d6e5",cursor:"pointer",outline:N?`2px solid ${V}`:"none",outlineOffset:1},onMouseEnter:H=>{H.currentTarget.style.background=`${V}30`,H.currentTarget.style.borderColor=`${V}90`},onMouseLeave:H=>{q.indexOf(L)!==g&&(H.currentTarget.style.background=`${V}15`,H.currentTarget.style.borderColor=`${V}40`)},children:[_.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:V,verticalAlign:"middle"}}),R(L)]},L.id)})})]},P)}),k.length===0&&_.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:I.noResults})]}),_.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:I.footer}),_.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:I.cancel})]})]})})}function D8({isOpen:o,onSelect:n,onClose:r,lang:s="pl"}){const l=[{id:"quick",icon:"⚡",color:"#4a9eff",label:ee("modeQuickLabel",s),description:ee("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:ee("modeDeepLabel",s),description:ee("modeDeepDesc",s)}],[u,m]=K.useState(null),h=K.useRef(null);return K.useEffect(()=>{o&&(m(null),setTimeout(()=>{var g;return(g=h.current)==null?void 0:g.focus()},100))},[o]),K.useEffect(()=>{if(!o)return;const g=y=>{y.key==="Escape"&&r(),y.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[o,u,r,n]),o?_.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:g=>{g.target===g.currentTarget&&r()},children:_.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[_.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:ee("modePickerTitle",s)}),_.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:ee("modePickerSub",s)})]}),_.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:l.map((g,y)=>_.jsxs("button",{ref:y===0?h:null,onClick:()=>m(g.id),onDoubleClick:()=>n(g.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===g.id?`${g.color}18`:"#0a0e17",border:`1px solid ${u===g.id?g.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:b=>{b.currentTarget.style.background=`${g.color}18`,b.currentTarget.style.borderColor=`${g.color}60`},onMouseLeave:b=>{u!==g.id&&(b.currentTarget.style.background="#0a0e17",b.currentTarget.style.borderColor="#1e2d45")},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[_.jsx("span",{style:{fontSize:16},children:g.icon}),_.jsx("span",{style:{fontWeight:600,color:u===g.id?g.color:"#f5f6fa"},children:g.label})]}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:g.description})]},g.id))}),_.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:ee("cancel",s)}),_.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#1e2d45",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:ee("next",s)})]})]})}):null}const N8=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function B8({isOpen:o,onSelect:n,onClose:r,lang:s}){return K.useEffect(()=>{if(!o)return;const l=u=>{u.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[o,r]),o?_.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:l=>{l.target===l.currentTarget&&r()},children:_.jsxs("div",{style:{width:"100%",maxWidth:480,background:se.surface,border:"1px solid #1e2d45",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[_.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #0a1628 100%)",borderBottom:"1px solid #1e2d45",textAlign:"center"},children:[_.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),_.jsx("div",{style:{fontWeight:700,fontSize:18,color:se.textPrimary,marginBottom:8},children:ee("onboardingTitle",s)}),_.jsx("div",{style:{fontSize:12,color:se.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:ee("onboardingSub",s)})]}),_.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[_.jsx("div",{style:{fontSize:11,color:se.textFaint,marginBottom:2},children:ee("onboardingChoose",s)}),N8.map(({id:l,key:u,descKey:m,color:h})=>_.jsxs("button",{onClick:()=>n(l),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${h}0e`,border:`1px solid ${h}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${h}1c`,g.currentTarget.style.borderColor=`${h}70`},onMouseLeave:g=>{g.currentTarget.style.background=`${h}0e`,g.currentTarget.style.borderColor=`${h}30`},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0,marginTop:5}}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontWeight:600,fontSize:13,color:se.textPrimary,marginBottom:3},children:ee(u,s)}),_.jsx("div",{style:{fontSize:11,color:se.textDim,lineHeight:1.5},children:ee(m,s)})]}),_.jsx("div",{style:{color:h,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},l))]}),_.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:se.textFaint,textAlign:"center"},children:ee("onboardingLangHint",s)})]})}):null}function I8({lang:o,setLang:n,layoutId:r,layouts:s,onLayoutChange:l,searchTerm:u,setSearchTerm:m,filterScope:h,toggleScope:g,clearScope:y,filterSection:b,toggleSection:$,clearSection:k,SECTIONS:q,SCOPE_COLORS:E,SCOPE_LABELS:R,isMobile:I}){const[P,W]=K.useState(!1),G=K.useRef(null);K.useEffect(()=>{if(!P)return;const F=N=>{G.current&&!G.current.contains(N.target)&&W(!1)},V=N=>{N.key==="Escape"&&W(!1)};return document.addEventListener("mousedown",F),document.addEventListener("keydown",V),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("keydown",V)}},[P]);const L=h.size+b.size+(u?1:0);return _.jsxs("div",{ref:G,style:{position:"relative"},children:[_.jsxs("button",{onClick:()=>W(F=>!F),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:P||L>0?"1px solid #4a9eff":`1px solid ${se.border}`,background:P?"#4a9eff22":"transparent",color:P||L>0?"#4a9eff":se.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:ee("moreOptions",o),children:[_.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[_.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),_.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),_.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),L>0&&_.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:L})]}),P&&_.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:I?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:se.surface,border:`1px solid ${se.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:ee("search",o)}),_.jsx("input",{value:u,onChange:F=>m(F.target.value),placeholder:ee("search",o),style:{width:"100%",boxSizing:"border-box",background:se.bg,border:`1px solid ${se.border}`,borderRadius:6,color:se.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),_.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(F=>_.jsx("button",{onClick:()=>n(F),style:{...$i(o===F,F==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:F.toUpperCase()},F))})]}),_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:ee("layoutLabel",o)}),_.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(F=>_.jsx("button",{onClick:()=>l(F.meta.id),style:{...$i(r===F.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:F.meta.label},F.meta.id))})]}),_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:ee("filterSection",o)}),_.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[_.jsx("button",{style:{...$i(b.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:k,children:ee("all",o)}),Object.entries(q).map(([F,V])=>_.jsx("button",{style:{...$i(b.has(F),V.color),fontSize:11,padding:"4px 10px"},onClick:()=>$(F),children:V.label},F))]})]}),_.jsxs("div",{children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:ee("filterScope",o)}),_.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[_.jsx("button",{style:{...$i(h.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:y,children:ee("all",o)}),Object.entries(E).map(([F,V])=>{var N;return _.jsx("button",{style:{...$i(h.has(F),V),fontSize:11,padding:"4px 10px"},onClick:()=>g(F),children:(N=R[F])==null?void 0:N[o==="pl"?"pl":"en"]},F)})]})]})]})]})}const Cd={x:40,y:40,scale:.72},Ed={x:20,y:20,scale:.42};function F8({courseId:o,RAW_NODES:n,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:m,COURSE_META:h,onBackToCourses:g}){const y=Rg(),[b,$]=K.useState(Ld),[k,q]=Sn("lang","pl"),[E,R]=K.useState(new Set),[I,P]=K.useState(new Set),[W,G]=K.useState(""),[L,F]=K.useState(null),[V,N]=K.useState(null),[H,J]=K.useState(!1),[be,ge]=K.useState(!1),[ce,pe]=Sn("onboardingSeen",!1),[qe,Ue]=K.useState(!ce),Ke=K.useCallback(()=>{pe(!0),Ue(!1)},[pe]),Fe=K.useCallback(ie=>R(Ne=>{const Le=new Set(Ne);return Le.has(ie)?Le.delete(ie):Le.add(ie),Le}),[]),ae=K.useCallback(ie=>P(Ne=>{const Le=new Set(Ne);return Le.has(ie)?Le.delete(ie):Le.add(ie),Le}),[]),$e=K.useCallback(()=>R(new Set),[]),ue=K.useCallback(()=>P(new Set),[]),j=K.useMemo(()=>eg(n,r),[n,r]),[U,xe]=K.useState(()=>dl(b,300,n,r)),_e=K.useMemo(()=>n.map(ie=>{var Ne,Le;return{...ie,x:((Ne=U[ie.id])==null?void 0:Ne.x)??ie.x,y:((Le=U[ie.id])==null?void 0:Le.y)??ie.y}}),[n,U]),ke=K.useRef(null),{viewTransform:Ce,setViewTransform:Re,toCanvas:Be,startPan:Ie,cursorStyle:ft,setCursorStyle:un,handleMouseMove:jr,handleMouseUp:bn}=vg(ke),{startNodeDrag:Xn,handleDragMove:Ar,handleDragEnd:Cn}=yg(Be,_e,xe,un),{diagMode:De,setDiagMode:Xt,mode:Ze,setMode:Gt,quizNode:at,setQuizNode:En,questionsAnswered:Ai,setAnsweredQuestions:Do,getAnsweredIndices:No,handleDiagClick:Ci,handleQuizAnswer:Ei,resetDiagnostic:Zt,startDeepDive:Bo,targetNode:Zn,belief:Jn,frontier:ws,visibleFrontier:Ri,hasStarted:Yr,nextSuggestedId:Xr,expectedRemaining:Pi,pCorrect:Di,sessionComplete:Cr,betaBeliefs:Ni,subgraphIds:Rn,ddClassification:cn,ddNextNodeId:dn,ddComplete:Zr}=Eg(j,s,o),Io=K.useMemo(()=>{const ie=W.toLowerCase(),Ne=n.filter(Le=>!(E.size>0&&!E.has(Le.scope)||I.size>0&&!I.has(Le.section)||ie&&!Le.label.toLowerCase().includes(ie)&&!Le.labelPl.toLowerCase().includes(ie)));return Ne.length<n.length?new Set(Ne.map(Le=>Le.id)):null},[n,E,I,W]),er=L||V,Bi=K.useMemo(()=>{var Ne,Le;if(!er)return null;const ie=new Set([er]);return(Ne=j.prereqs[er])==null||Ne.forEach(ei=>ie.add(ei)),(Le=j.dependents[er])==null||Le.forEach(ei=>ie.add(ei)),ie},[er,j]),Ii=K.useMemo(()=>!De||Ze!=="deepdive"||Rn.length===0?null:new Set(Rn),[De,Ze,Rn]),Fi=K.useCallback(ie=>{const Ne=ie.target.closest("[data-node-id]");if(Ne){Xn(Ne.getAttribute("data-node-id"),ie.clientX,ie.clientY),ie.stopPropagation();return}Ie(ie.clientX,ie.clientY)},[Xn,Ie]),Fo=K.useCallback(ie=>{Ar(ie.clientX,ie.clientY)||jr(ie)},[Ar,jr]),tr=K.useCallback(()=>{Cn(),bn()},[Cn,bn]),Li=K.useCallback(ie=>{y&&!ie.target.closest("[data-node-id]")&&F(null)},[y]),mn=K.useRef(!1);K.useEffect(()=>{if(!(!De||Ze!=="quick")&&!at&&Xr&&!Cr&&Yr&&mn.current){mn.current=!1;const ie=setTimeout(()=>En(Xr),400);return()=>clearTimeout(ie)}},[De,Ze,at,Xr,Cr,Yr]),K.useEffect(()=>{if(!(!De||Ze!=="deepdive")&&!at&&dn&&!Zr&&mn.current){mn.current=!1;const ie=setTimeout(()=>En(dn),400);return()=>clearTimeout(ie)}},[De,Ze,at,dn,Zr]),K.useEffect(()=>{const ie=Ne=>{Ne.key==="Escape"&&(F(null),J(!1))};return window.addEventListener("keydown",ie),()=>window.removeEventListener("keydown",ie)},[]);const _s=K.useCallback(ie=>{$(ie),xe(dl(ie,300,n,r)),Re(y?Ed:Cd)},[Re,n,r,y]),Er=K.useCallback(()=>{De?(Xt(!1),Zt(),F(null)):ge(!0)},[De,Xt,Zt]),nr=K.useCallback(ie=>{ge(!1),Zt(),ie==="deepdive"?(Xt(!0),J(!0)):(Xt(!0),Gt("quick"),F(null))},[Xt,Gt,Zt]),Jr=K.useCallback(ie=>{pe(!0),Ue(!1),(ie==="quick"||ie==="deepdive")&&nr(ie)},[pe,nr]),Oi=K.useMemo(()=>{if(Ze!=="deepdive")return{};const ie={};for(const[Ne,Le]of Object.entries(cn))Le==="known"?ie[Ne]="known":Le==="unknown"&&(ie[Ne]="unknown");return ie},[Ze,cn]),$s=Ze==="deepdive"?Oi:Jn,ks=Ze==="deepdive"?Rn.filter(ie=>cn[ie]==="uncertain"):Ri,zs=k==="pl"?h.title??h.titleEn:h.titleEn??h.title,Pn=qe||be||H,Hi=(ie,Ne="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:ie?`1px solid ${Ne}`:`1px solid ${se.border}`,background:ie?`${Ne}22`:"transparent",color:ie?Ne:se.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:ie?600:400});return _.jsxs("div",{style:{width:"100%",height:"100dvh",background:se.bg,fontFamily:Co,color:se.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:y?"8px 12px":"8px 16px",borderBottom:`1px solid ${se.borderSubtle}`,display:"flex",alignItems:"center",gap:y?8:10,flexShrink:0},children:[g&&_.jsx("button",{onClick:g,style:{...Hi(!1),padding:"7px 10px"},children:"←"}),_.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:se.textPrimary,letterSpacing:y?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:zs}),_.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${se.border}`},children:[_.jsx("button",{onClick:()=>{De&&(Xt(!1),Zt(),F(null))},style:{padding:y?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:De?400:700,background:De?"transparent":"#4a9eff22",color:De?se.textDim:"#4a9eff"},children:ee("exploreMode",k)}),_.jsx("button",{onClick:()=>{De||ge(!0)},style:{padding:y?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${se.border}`,fontWeight:De?700:400,background:De?"#f39c1222":"transparent",color:De?"#f39c12":se.textDim},children:ee(De?Ze==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",k)})]}),De&&_.jsx("button",{onClick:()=>J(!0),style:Hi(Ze==="deepdive","#8e44ad"),children:ee("goalBtn",k)}),_.jsx(I8,{lang:k,setLang:ie=>q(ie),layoutId:b,layouts:Fd,onLayoutChange:_s,searchTerm:W,setSearchTerm:G,filterScope:E,toggleScope:Fe,clearScope:$e,filterSection:I,toggleSection:ae,clearSection:ue,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:m,isMobile:y})]}),_.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[_.jsxs("svg",{ref:ke,width:"100%",height:"100%",style:{cursor:ft,touchAction:"none",pointerEvents:Pn?"none":"auto"},onMouseDown:Fi,onMouseMove:Fo,onMouseUp:tr,onMouseLeave:tr,onClick:ie=>{if(Li(ie),!De)return;const Ne=ie.target.closest("[data-node-id]");Ne&&Ci(Ne.getAttribute("data-node-id"),ie.shiftKey)},children:[_.jsxs("defs",{children:[_.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),_.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),_.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),_.jsxs("g",{transform:`translate(${Ce.x},${Ce.y}) scale(${Ce.scale})`,children:[_.jsx(Pg,{edges:r,nodes:_e,highlightedIds:De&&Ze==="deepdive"?Ii:Bi}),_.jsx(Bg,{nodes:_e,filteredIds:De&&Ze==="deepdive"?Ii:Io,highlightedIds:De?null:Bi,selected:L,onSelect:ie=>{if(De){Ci(ie,!1);return}F(ie===L?null:ie)},onHover:N,lang:k,diagMode:De,belief:$s,frontier:ks,scale:Ce.scale,scopeColors:u})]})]}),L&&!De&&_.jsx(Fg,{nodeId:L,nodes:_e,adjacency:j,lang:k,SCOPE_COLORS:u,SCOPE_LABELS:m,SECTIONS:l,isMobile:y,onClose:()=>F(null)}),De&&at&&_.jsx(M8,{nodeId:at,nodes:_e,lang:k,questionBank:s,excludeIndices:No(at),isMobile:y,onAnswer:(ie,Ne,Le)=>{mn.current=!0,Ei(at,ie,Ne,Le)},onSkip:ie=>{typeof ie=="number"&&Do(Ne=>new Set([...Ne,`${at}:${ie}`])),En(null)}}),De&&Ze==="quick"&&_.jsx(A8,{belief:Jn,frontier:ws,visibleFrontier:Ri,hasStarted:Yr,nextSuggestedId:Xr,sessionComplete:Cr,adjacency:j,expectedRemaining:Pi,pCorrect:Di,questionsAnswered:Ai,nodes:_e,lang:k,onNodeClick:ie=>En(ie),onReset:Zt,SCOPE_LABELS:m,isMobile:y}),De&&Ze==="deepdive"&&Zn&&_.jsx(C8,{nodes:_e,lang:k,targetNode:Zn,subgraphIds:Rn,ddClassification:cn,betaBeliefs:Ni,ddComplete:Zr,ddNextNodeId:dn,questionsAnswered:Ai,onNodeClick:ie=>En(ie),onReset:Zt,isMobile:y}),!y&&_.jsx(R8,{lang:k,diagMode:De,SCOPE_COLORS:u,SCOPE_LABELS:m,SECTIONS:l}),_.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([ie,Ne])=>_.jsx("button",{onClick:()=>{Ne===null?(xe(dl(b,300,n,r)),Re(y?Ed:Cd)):Re(Le=>({...Le,scale:Math.max(.15,Math.min(5,Le.scale*Ne))}))},style:{width:44,height:44,background:se.surface,border:`1px solid ${se.border}`,color:se.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:ie},ie))}),y&&De&&!at&&_.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${se.surface}ee`,borderTop:`1px solid ${se.border}`,display:"flex",gap:0,zIndex:20},children:[_.jsx("button",{onClick:()=>J(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${se.border}`,color:Ze==="deepdive"?"#c39bd3":se.textDim,cursor:"pointer"},children:ee("goalBtn",k)}),_.jsx("button",{onClick:Er,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:ee("reset",k)})]})]}),H&&_.jsx(P8,{nodes:_e,lang:k,SECTIONS:l,SCOPE_COLORS:u,onSelect:ie=>{J(!1),Bo(ie)},onClose:()=>J(!1)}),_.jsx(D8,{isOpen:be,onSelect:nr,onClose:()=>ge(!1),lang:k}),_.jsx(B8,{isOpen:qe,onSelect:Jr,onClose:Ke,lang:k})]})}function L8(){const[o,n]=K.useState(Z7),[r,s]=K.useState(!1),l=Y7[o];return l?r?_.jsx(O8,{courses:X7,activeCourseId:o,onSelect:u=>{n(u),s(!1)},onClose:()=>s(!1)}):_.jsx(F8,{courseId:o,RAW_NODES:l.RAW_NODES,RAW_EDGES:l.RAW_EDGES,QUESTION_BANK:l.QUESTION_BANK,SECTIONS:l.SECTIONS,SCOPE_COLORS:l.SCOPE_COLORS,SCOPE_LABELS:l.SCOPE_LABELS,COURSE_META:l.COURSE_META,onBackToCourses:()=>s(!0)},o):_.jsxs("div",{style:{color:"#ff6b6b",padding:20},children:["Unknown course: ",o]})}function O8({courses:o,activeCourseId:n,onSelect:r,onClose:s}){return _.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#0a0e17",fontFamily:Co,color:"#c8d6e5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32},children:[_.jsxs("div",{style:{textAlign:"center"},children:[_.jsx("div",{style:{fontSize:28,fontWeight:700,color:"#f5f6fa",marginBottom:6},children:"oczochodzi.pl"}),_.jsx("div",{style:{fontSize:12,color:"#3a4d63"},children:"Select a course"})]}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"min(340px, calc(100vw - 32px))"},children:o.map(l=>_.jsxs("button",{onClick:()=>r(l.id),style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:10,cursor:"pointer",border:l.id===n?`1px solid ${l.color}`:"1px solid #1a2235",background:l.id===n?`${l.color}18`:"#0d1520",color:"#c8d6e5",textAlign:"left",transition:"border-color 0.15s, background 0.15s"},children:[_.jsx("span",{style:{fontSize:28,lineHeight:1},children:l.icon}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:l.titleEn??l.title}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:3,lineHeight:1.4},children:l.descriptionEn??l.description})]})]},l.id))}),_.jsx("button",{onClick:s,style:{fontSize:11,color:"#3a4d63",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"},children:"Cancel"})]})}Fp.createRoot(document.getElementById("root")).render(_.jsx(K.StrictMode,{children:_.jsx(L8,{})}));
