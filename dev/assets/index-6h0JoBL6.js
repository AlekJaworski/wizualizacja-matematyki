(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();var Ql={exports:{}},hi={},Kl={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function jf(){if(P1)return qe;P1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),b=Symbol.iterator;function M(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,R={};function q(j,F,ke){this.props=j,this.context=F,this.refs=R,this.updater=ke||T}q.prototype.isReactComponent={},q.prototype.setState=function(j,F){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,F,"setState")},q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function I(){}I.prototype=q.prototype;function W(j,F,ke){this.props=j,this.context=F,this.refs=R,this.updater=ke||T}var N=W.prototype=new I;N.constructor=W,P(N,q.prototype),N.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,K={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function Z(j,F,ke){var ve,Ae={},Te=null,Ee=null;if(F!=null)for(ve in F.ref!==void 0&&(Ee=F.ref),F.key!==void 0&&(Te=""+F.key),F)U.call(F,ve)&&!H.hasOwnProperty(ve)&&(Ae[ve]=F[ve]);var Pe=arguments.length-2;if(Pe===1)Ae.children=ke;else if(1<Pe){for(var Re=Array(Pe),at=0;at<Pe;at++)Re[at]=arguments[at+2];Ae.children=Re}if(j&&j.defaultProps)for(ve in Pe=j.defaultProps,Pe)Ae[ve]===void 0&&(Ae[ve]=Pe[ve]);return{$$typeof:o,type:j,key:Te,ref:Ee,props:Ae,_owner:K.current}}function V(j,F){return{$$typeof:o,type:j.type,key:F,ref:j.ref,props:j.props,_owner:j._owner}}function ye(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function ze(j){var F={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ke){return F[ke]})}var Ce=/\/+/g;function He(j,F){return typeof j=="object"&&j!==null&&j.key!=null?ze(""+j.key):F.toString(36)}function Fe(j,F,ke,ve,Ae){var Te=typeof j;(Te==="undefined"||Te==="boolean")&&(j=null);var Ee=!1;if(j===null)Ee=!0;else switch(Te){case"string":case"number":Ee=!0;break;case"object":switch(j.$$typeof){case o:case n:Ee=!0}}if(Ee)return Ee=j,Ae=Ae(Ee),j=ve===""?"."+He(Ee,0):ve,L(Ae)?(ke="",j!=null&&(ke=j.replace(Ce,"$&/")+"/"),Fe(Ae,F,ke,"",function(at){return at})):Ae!=null&&(ye(Ae)&&(Ae=V(Ae,ke+(!Ae.key||Ee&&Ee.key===Ae.key?"":(""+Ae.key).replace(Ce,"$&/")+"/")+j)),F.push(Ae)),1;if(Ee=0,ve=ve===""?".":ve+":",L(j))for(var Pe=0;Pe<j.length;Pe++){Te=j[Pe];var Re=ve+He(Te,Pe);Ee+=Fe(Te,F,ke,Re,Ae)}else if(Re=M(j),typeof Re=="function")for(j=Re.call(j),Pe=0;!(Te=j.next()).done;)Te=Te.value,Re=ve+He(Te,Pe++),Ee+=Fe(Te,F,ke,Re,Ae);else if(Te==="object")throw F=String(j),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Ge(j,F,ke){if(j==null)return j;var ve=[],Ae=0;return Fe(j,ve,"","",function(Te){return F.call(ke,Te,Ae++)}),ve}function Ue(j){if(j._status===-1){var F=j._result;F=F(),F.then(function(ke){(j._status===0||j._status===-1)&&(j._status=1,j._result=ke)},function(ke){(j._status===0||j._status===-1)&&(j._status=2,j._result=ke)}),j._status===-1&&(j._status=0,j._result=F)}if(j._status===1)return j._result.default;throw j._result}var xe={current:null},ne={transition:null},fe={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:ne,ReactCurrentOwner:K};function oe(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:Ge,forEach:function(j,F,ke){Ge(j,function(){F.apply(this,arguments)},ke)},count:function(j){var F=0;return Ge(j,function(){F++}),F},toArray:function(j){return Ge(j,function(F){return F})||[]},only:function(j){if(!ye(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},qe.Component=q,qe.Fragment=r,qe.Profiler=s,qe.PureComponent=W,qe.StrictMode=a,qe.Suspense=v,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,qe.act=oe,qe.cloneElement=function(j,F,ke){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var ve=P({},j.props),Ae=j.key,Te=j.ref,Ee=j._owner;if(F!=null){if(F.ref!==void 0&&(Te=F.ref,Ee=K.current),F.key!==void 0&&(Ae=""+F.key),j.type&&j.type.defaultProps)var Pe=j.type.defaultProps;for(Re in F)U.call(F,Re)&&!H.hasOwnProperty(Re)&&(ve[Re]=F[Re]===void 0&&Pe!==void 0?Pe[Re]:F[Re])}var Re=arguments.length-2;if(Re===1)ve.children=ke;else if(1<Re){Pe=Array(Re);for(var at=0;at<Re;at++)Pe[at]=arguments[at+2];ve.children=Pe}return{$$typeof:o,type:j.type,key:Ae,ref:Te,props:ve,_owner:Ee}},qe.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:u,_context:j},j.Consumer=j},qe.createElement=Z,qe.createFactory=function(j){var F=Z.bind(null,j);return F.type=j,F},qe.createRef=function(){return{current:null}},qe.forwardRef=function(j){return{$$typeof:p,render:j}},qe.isValidElement=ye,qe.lazy=function(j){return{$$typeof:$,_payload:{_status:-1,_result:j},_init:Ue}},qe.memo=function(j,F){return{$$typeof:w,type:j,compare:F===void 0?null:F}},qe.startTransition=function(j){var F=ne.transition;ne.transition={};try{j()}finally{ne.transition=F}},qe.unstable_act=oe,qe.useCallback=function(j,F){return xe.current.useCallback(j,F)},qe.useContext=function(j){return xe.current.useContext(j)},qe.useDebugValue=function(){},qe.useDeferredValue=function(j){return xe.current.useDeferredValue(j)},qe.useEffect=function(j,F){return xe.current.useEffect(j,F)},qe.useId=function(){return xe.current.useId()},qe.useImperativeHandle=function(j,F,ke){return xe.current.useImperativeHandle(j,F,ke)},qe.useInsertionEffect=function(j,F){return xe.current.useInsertionEffect(j,F)},qe.useLayoutEffect=function(j,F){return xe.current.useLayoutEffect(j,F)},qe.useMemo=function(j,F){return xe.current.useMemo(j,F)},qe.useReducer=function(j,F,ke){return xe.current.useReducer(j,F,ke)},qe.useRef=function(j){return xe.current.useRef(j)},qe.useState=function(j){return xe.current.useState(j)},qe.useSyncExternalStore=function(j,F,ke){return xe.current.useSyncExternalStore(j,F,ke)},qe.useTransition=function(){return xe.current.useTransition()},qe.version="18.3.1",qe}var D1;function Cs(){return D1||(D1=1,Kl.exports=jf()),Kl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function Ef(){if(R1)return hi;R1=1;var o=Cs(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,v,w){var $,b={},M=null,T=null;w!==void 0&&(M=""+w),v.key!==void 0&&(M=""+v.key),v.ref!==void 0&&(T=v.ref);for($ in v)a.call(v,$)&&!u.hasOwnProperty($)&&(b[$]=v[$]);if(p&&p.defaultProps)for($ in v=p.defaultProps,v)b[$]===void 0&&(b[$]=v[$]);return{$$typeof:n,type:p,key:M,ref:T,props:b,_owner:s.current}}return hi.Fragment=r,hi.jsx=f,hi.jsxs=f,hi}var B1;function qf(){return B1||(B1=1,Ql.exports=Ef()),Ql.exports}var z=qf(),ie=Cs(),Do={},Zl={exports:{}},Nt={},Jl={exports:{}},es={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function Pf(){return N1||(N1=1,(function(o){function n(ne,fe){var oe=ne.length;ne.push(fe);e:for(;0<oe;){var j=oe-1>>>1,F=ne[j];if(0<s(F,fe))ne[j]=fe,ne[oe]=F,oe=j;else break e}}function r(ne){return ne.length===0?null:ne[0]}function a(ne){if(ne.length===0)return null;var fe=ne[0],oe=ne.pop();if(oe!==fe){ne[0]=oe;e:for(var j=0,F=ne.length,ke=F>>>1;j<ke;){var ve=2*(j+1)-1,Ae=ne[ve],Te=ve+1,Ee=ne[Te];if(0>s(Ae,oe))Te<F&&0>s(Ee,Ae)?(ne[j]=Ee,ne[Te]=oe,j=Te):(ne[j]=Ae,ne[ve]=oe,j=ve);else if(Te<F&&0>s(Ee,oe))ne[j]=Ee,ne[Te]=oe,j=Te;else break e}}return fe}function s(ne,fe){var oe=ne.sortIndex-fe.sortIndex;return oe!==0?oe:ne.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();o.unstable_now=function(){return f.now()-p}}var v=[],w=[],$=1,b=null,M=3,T=!1,P=!1,R=!1,q=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(ne){for(var fe=r(w);fe!==null;){if(fe.callback===null)a(w);else if(fe.startTime<=ne)a(w),fe.sortIndex=fe.expirationTime,n(v,fe);else break;fe=r(w)}}function L(ne){if(R=!1,N(ne),!P)if(r(v)!==null)P=!0,Ue(U);else{var fe=r(w);fe!==null&&xe(L,fe.startTime-ne)}}function U(ne,fe){P=!1,R&&(R=!1,I(Z),Z=-1),T=!0;var oe=M;try{for(N(fe),b=r(v);b!==null&&(!(b.expirationTime>fe)||ne&&!ze());){var j=b.callback;if(typeof j=="function"){b.callback=null,M=b.priorityLevel;var F=j(b.expirationTime<=fe);fe=o.unstable_now(),typeof F=="function"?b.callback=F:b===r(v)&&a(v),N(fe)}else a(v);b=r(v)}if(b!==null)var ke=!0;else{var ve=r(w);ve!==null&&xe(L,ve.startTime-fe),ke=!1}return ke}finally{b=null,M=oe,T=!1}}var K=!1,H=null,Z=-1,V=5,ye=-1;function ze(){return!(o.unstable_now()-ye<V)}function Ce(){if(H!==null){var ne=o.unstable_now();ye=ne;var fe=!0;try{fe=H(!0,ne)}finally{fe?He():(K=!1,H=null)}}else K=!1}var He;if(typeof W=="function")He=function(){W(Ce)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Ge=Fe.port2;Fe.port1.onmessage=Ce,He=function(){Ge.postMessage(null)}}else He=function(){q(Ce,0)};function Ue(ne){H=ne,K||(K=!0,He())}function xe(ne,fe){Z=q(function(){ne(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ne){ne.callback=null},o.unstable_continueExecution=function(){P||T||(P=!0,Ue(U))},o.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<ne?Math.floor(1e3/ne):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return r(v)},o.unstable_next=function(ne){switch(M){case 1:case 2:case 3:var fe=3;break;default:fe=M}var oe=M;M=fe;try{return ne()}finally{M=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ne,fe){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var oe=M;M=ne;try{return fe()}finally{M=oe}},o.unstable_scheduleCallback=function(ne,fe,oe){var j=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?j+oe:j):oe=j,ne){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=oe+F,ne={id:$++,callback:fe,priorityLevel:ne,startTime:oe,expirationTime:F,sortIndex:-1},oe>j?(ne.sortIndex=oe,n(w,ne),r(v)===null&&ne===r(w)&&(R?(I(Z),Z=-1):R=!0,xe(L,oe-j))):(ne.sortIndex=F,n(v,ne),P||T||(P=!0,Ue(U))),ne},o.unstable_shouldYield=ze,o.unstable_wrapCallback=function(ne){var fe=M;return function(){var oe=M;M=fe;try{return ne.apply(this,arguments)}finally{M=oe}}}})(es)),es}var L1;function Df(){return L1||(L1=1,Jl.exports=Pf()),Jl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1;function Rf(){if(O1)return Nt;O1=1;var o=Cs(),n=Df();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},b={};function M(e){return v.call(b,e)?!0:v.call($,e)?!1:w.test(e)?b[e]=!0:($[e]=!0,!1)}function T(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,i,l){if(t===null||typeof t>"u"||T(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,i,l,c,h,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=y}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,W);q[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,W);q[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,W);q[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,t,i,l){var c=q.hasOwnProperty(t)?q[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,i,c,l)&&(i=null),l||c===null?M(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var L=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),K=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),ne=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,j;function F(e){if(j===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var ke=!1;function ve(e,t){if(!e||ke)return"";ke=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var l=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){l=O}e.call(t.prototype)}else{try{throw Error()}catch(O){l=O}e()}}catch(O){if(O&&l&&typeof O.stack=="string"){for(var c=O.stack.split(`
`),h=l.stack.split(`
`),y=c.length-1,k=h.length-1;1<=y&&0<=k&&c[y]!==h[k];)k--;for(;1<=y&&0<=k;y--,k--)if(c[y]!==h[k]){if(y!==1||k!==1)do if(y--,k--,0>k||c[y]!==h[k]){var C=`
`+c[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=y&&0<=k);break}}}finally{ke=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?F(e):""}function Ae(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function Te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case K:return"Portal";case V:return"Profiler";case Z:return"StrictMode";case He:return"Suspense";case Fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ze:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case Ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(t);case 8:return t===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function at(e){var t=Re(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){l=""+y,h.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function an(e){e._valueTracker||(e._valueTracker=at(e))}function ln(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=Re(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wn(e,t){var i=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function kr(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=Pe(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Un(e,t){t=t.checked,t!=null&&N(e,"checked",t,!1)}function Sn(e,t){Un(e,t);var i=Pe(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yt(e,t.type,i):t.hasOwnProperty("defaultValue")&&Yt(e,t.type,Pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Yt(e,t,i){(t!=="number"||zn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Xt=Array.isArray;function It(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Pe(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function _r(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zi(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(Xt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Pe(i)}}function Vn(e,t){var i=Pe(t.value),l=Pe(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function zr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,Gn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},da=["Webkit","ms","Moz","O"];Object.keys(Xn).forEach(function(e){da.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xn[t]=Xn[e]})});function Si(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Xn.hasOwnProperty(e)&&Xn[e]?(""+t).trim():t+"px"}function z0(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Si(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var fa=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function S0(e,t){if(t){if(fa[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function T0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=null;function C0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var A0=null,se=null,De=null;function Be(e){if(e=Z0(e)){if(typeof A0!="function")throw Error(r(280));var t=e.stateNode;t&&(t=Xi(t),A0(e.stateNode,e.type,t))}}function Vr(e){se?De?De.push(e):De=[e]:se=e}function Js(){if(se){var e=se,t=De;if(De=se=null,Be(e),t)for(e=0;e<t.length;e++)Be(t[e])}}function eu(e,t){return e(t)}function tu(){}var ha=!1;function nu(e,t,i){if(ha)return e(t,i);ha=!0;try{return eu(e,t,i)}finally{ha=!1,(se!==null||De!==null)&&(tu(),Js())}}function j0(e,t){var i=e.stateNode;if(i===null)return null;var l=Xi(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var ma=!1;if(p)try{var E0={};Object.defineProperty(E0,"passive",{get:function(){ma=!0}}),window.addEventListener("test",E0,E0),window.removeEventListener("test",E0,E0)}catch{ma=!1}function R4(e,t,i,l,c,h,y,k,C){var O=Array.prototype.slice.call(arguments,3);try{t.apply(i,O)}catch(X){this.onError(X)}}var q0=!1,Ti=null,Mi=!1,pa=null,B4={onError:function(e){q0=!0,Ti=e}};function N4(e,t,i,l,c,h,y,k,C){q0=!1,Ti=null,R4.apply(B4,arguments)}function L4(e,t,i,l,c,h,y,k,C){if(N4.apply(this,arguments),q0){if(q0){var O=Ti;q0=!1,Ti=null}else throw Error(r(198));Mi||(Mi=!0,pa=O)}}function Mr(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(Mr(e)!==e)throw Error(r(188))}function O4(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===i)return iu(c),e;if(h===l)return iu(c),t;h=h.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=h;else{for(var y=!1,k=c.child;k;){if(k===i){y=!0,i=c,l=h;break}if(k===l){y=!0,l=c,i=h;break}k=k.sibling}if(!y){for(k=h.child;k;){if(k===i){y=!0,i=h,l=c;break}if(k===l){y=!0,l=h,i=c;break}k=k.sibling}if(!y)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function ou(e){return e=O4(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=au(e);if(t!==null)return t;e=e.sibling}return null}var lu=n.unstable_scheduleCallback,su=n.unstable_cancelCallback,I4=n.unstable_shouldYield,F4=n.unstable_requestPaint,lt=n.unstable_now,H4=n.unstable_getCurrentPriorityLevel,va=n.unstable_ImmediatePriority,uu=n.unstable_UserBlockingPriority,Ci=n.unstable_NormalPriority,W4=n.unstable_LowPriority,cu=n.unstable_IdlePriority,Ai=null,pn=null;function U4(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:Y4,V4=Math.log,G4=Math.LN2;function Y4(e){return e>>>=0,e===0?32:31-(V4(e)/G4|0)|0}var ji=64,Ei=4194304;function P0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,h=e.pingedLanes,y=i&268435455;if(y!==0){var k=y&~c;k!==0?l=P0(k):(h&=y,h!==0&&(l=P0(h)))}else y=i&~c,y!==0?l=P0(y):h!==0&&(l=P0(h));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,h=t&-t,c>=h||c===16&&(h&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-sn(t),c=1<<i,l|=e[i],t&=~c;return l}function X4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q4(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-sn(h),k=1<<y,C=c[y];C===-1?((k&i)===0||(k&l)!==0)&&(c[y]=X4(k,t)):C<=t&&(e.expiredLanes|=k),h&=~k}}function ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function du(){var e=ji;return ji<<=1,(ji&4194240)===0&&(ji=64),e}function ya(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function D0(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=i}function K4(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-sn(i),h=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~h}}function xa(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-sn(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var We=0;function fu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hu,wa,mu,pu,vu,ba=!1,Pi=[],Qn=null,Kn=null,Zn=null,R0=new Map,B0=new Map,Jn=[],Z4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gu(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":R0.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":B0.delete(t.pointerId)}}function N0(e,t,i,l,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},t!==null&&(t=Z0(t),t!==null&&wa(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function J4(e,t,i,l,c){switch(t){case"focusin":return Qn=N0(Qn,e,t,i,l,c),!0;case"dragenter":return Kn=N0(Kn,e,t,i,l,c),!0;case"mouseover":return Zn=N0(Zn,e,t,i,l,c),!0;case"pointerover":var h=c.pointerId;return R0.set(h,N0(R0.get(h)||null,e,t,i,l,c)),!0;case"gotpointercapture":return h=c.pointerId,B0.set(h,N0(B0.get(h)||null,e,t,i,l,c)),!0}return!1}function yu(e){var t=Cr(e.target);if(t!==null){var i=Mr(t);if(i!==null){if(t=i.tag,t===13){if(t=ru(i),t!==null){e.blockedOn=t,vu(e.priority,function(){mu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ka(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);M0=l,i.target.dispatchEvent(l),M0=null}else return t=Z0(i),t!==null&&wa(t),e.blockedOn=i,!1;t.shift()}return!0}function xu(e,t,i){Di(e)&&i.delete(t)}function e2(){ba=!1,Qn!==null&&Di(Qn)&&(Qn=null),Kn!==null&&Di(Kn)&&(Kn=null),Zn!==null&&Di(Zn)&&(Zn=null),R0.forEach(xu),B0.forEach(xu)}function L0(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,e2)))}function O0(e){function t(c){return L0(c,e)}if(0<Pi.length){L0(Pi[0],e);for(var i=1;i<Pi.length;i++){var l=Pi[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Qn!==null&&L0(Qn,e),Kn!==null&&L0(Kn,e),Zn!==null&&L0(Zn,e),R0.forEach(t),B0.forEach(t),i=0;i<Jn.length;i++)l=Jn[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Jn.length&&(i=Jn[0],i.blockedOn===null);)yu(i),i.blockedOn===null&&Jn.shift()}var Gr=L.ReactCurrentBatchConfig,Ri=!0;function t2(e,t,i,l){var c=We,h=Gr.transition;Gr.transition=null;try{We=1,$a(e,t,i,l)}finally{We=c,Gr.transition=h}}function n2(e,t,i,l){var c=We,h=Gr.transition;Gr.transition=null;try{We=4,$a(e,t,i,l)}finally{We=c,Gr.transition=h}}function $a(e,t,i,l){if(Ri){var c=ka(e,t,i,l);if(c===null)Oa(e,t,l,Bi,i),gu(e,l);else if(J4(c,e,t,i,l))l.stopPropagation();else if(gu(e,l),t&4&&-1<Z4.indexOf(e)){for(;c!==null;){var h=Z0(c);if(h!==null&&hu(h),h=ka(e,t,i,l),h===null&&Oa(e,t,l,Bi,i),h===c)break;c=h}c!==null&&l.stopPropagation()}else Oa(e,t,l,null,i)}}var Bi=null;function ka(e,t,i,l){if(Bi=null,e=C0(l),e=Cr(e),e!==null)if(t=Mr(e),t===null)e=null;else if(i=t.tag,i===13){if(e=ru(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H4()){case va:return 1;case uu:return 4;case Ci:case W4:return 16;case cu:return 536870912;default:return 16}default:return 16}}var er=null,_a=null,Ni=null;function bu(){if(Ni)return Ni;var e,t=_a,i=t.length,l,c="value"in er?er.value:er.textContent,h=c.length;for(e=0;e<i&&t[e]===c[e];e++);var y=i-e;for(l=1;l<=y&&t[i-l]===c[h-l];l++);return Ni=c.slice(e,1<l?1-l:void 0)}function Li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function $u(){return!1}function Ft(e){function t(i,l,c,h,y){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(i=e[k],this[k]=i?i(h):h[k]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Oi:$u,this.isPropagationStopped=$u,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Ft(Yr),I0=oe({},Yr,{view:0,detail:0}),r2=Ft(I0),Sa,Ta,F0,Ii=oe({},I0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==F0&&(F0&&e.type==="mousemove"?(Sa=e.screenX-F0.screenX,Ta=e.screenY-F0.screenY):Ta=Sa=0,F0=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ta}}),ku=Ft(Ii),i2=oe({},Ii,{dataTransfer:0}),o2=Ft(i2),a2=oe({},I0,{relatedTarget:0}),Ma=Ft(a2),l2=oe({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),s2=Ft(l2),u2=oe({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c2=Ft(u2),d2=oe({},Yr,{data:0}),_u=Ft(d2),f2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m2[e])?!!t[e]:!1}function Ca(){return p2}var v2=oe({},I0,{key:function(e){if(e.key){var t=f2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?Li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g2=Ft(v2),y2=oe({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zu=Ft(y2),x2=oe({},I0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),w2=Ft(x2),b2=oe({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$2=Ft(b2),k2=oe({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_2=Ft(k2),z2=[9,13,27,32],Aa=p&&"CompositionEvent"in window,H0=null;p&&"documentMode"in document&&(H0=document.documentMode);var S2=p&&"TextEvent"in window&&!H0,Su=p&&(!Aa||H0&&8<H0&&11>=H0),Tu=" ",Mu=!1;function Cu(e,t){switch(e){case"keyup":return z2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function T2(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Mu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Mu?null:e;default:return null}}function M2(e,t){if(Xr)return e==="compositionend"||!Aa&&Cu(e,t)?(e=bu(),Ni=_a=er=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var C2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C2[e.type]:t==="textarea"}function Eu(e,t,i,l){Vr(l),t=Vi(t,"onChange"),0<t.length&&(i=new za("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var W0=null,U0=null;function A2(e){Qu(e,0)}function Fi(e){var t=e0(e);if(ln(t))return e}function j2(e,t){if(e==="change")return t}var qu=!1;if(p){var ja;if(p){var Ea="oninput"in document;if(!Ea){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Ea=typeof Pu.oninput=="function"}ja=Ea}else ja=!1;qu=ja&&(!document.documentMode||9<document.documentMode)}function Du(){W0&&(W0.detachEvent("onpropertychange",Ru),U0=W0=null)}function Ru(e){if(e.propertyName==="value"&&Fi(U0)){var t=[];Eu(t,U0,e,C0(e)),nu(A2,t)}}function E2(e,t,i){e==="focusin"?(Du(),W0=t,U0=i,W0.attachEvent("onpropertychange",Ru)):e==="focusout"&&Du()}function q2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(U0)}function P2(e,t){if(e==="click")return Fi(t)}function D2(e,t){if(e==="input"||e==="change")return Fi(t)}function R2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:R2;function V0(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!v.call(t,c)||!un(e[c],t[c]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var i=Bu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Bu(i)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=zn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=zn(e.document)}return t}function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function B2(e){var t=Ou(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Lu(i.ownerDocument.documentElement,i)){if(l!==null&&qa(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!e.extend&&h>l&&(c=l,l=h,h=c),c=Nu(i,h);var y=Nu(i,l);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),h>l?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var N2=p&&"documentMode"in document&&11>=document.documentMode,Qr=null,Pa=null,G0=null,Da=!1;function Iu(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Da||Qr==null||Qr!==zn(l)||(l=Qr,"selectionStart"in l&&qa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),G0&&V0(G0,l)||(G0=l,l=Vi(Pa,"onSelect"),0<l.length&&(t=new za("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Qr)))}function Hi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Kr={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Ra={},Fu={};p&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Wi(e){if(Ra[e])return Ra[e];if(!Kr[e])return e;var t=Kr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Fu)return Ra[e]=t[i];return e}var Hu=Wi("animationend"),Wu=Wi("animationiteration"),Uu=Wi("animationstart"),Vu=Wi("transitionend"),Gu=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){Gu.set(e,t),u(t,[e])}for(var Ba=0;Ba<Yu.length;Ba++){var Na=Yu[Ba],L2=Na.toLowerCase(),O2=Na[0].toUpperCase()+Na.slice(1);tr(L2,"on"+O2)}tr(Hu,"onAnimationEnd"),tr(Wu,"onAnimationIteration"),tr(Uu,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Vu,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Y0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Y0));function Xu(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,L4(l,t,void 0,e),e.currentTarget=null}function Qu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var h=void 0;if(t)for(var y=l.length-1;0<=y;y--){var k=l[y],C=k.instance,O=k.currentTarget;if(k=k.listener,C!==h&&c.isPropagationStopped())break e;Xu(c,k,O),h=C}else for(y=0;y<l.length;y++){if(k=l[y],C=k.instance,O=k.currentTarget,k=k.listener,C!==h&&c.isPropagationStopped())break e;Xu(c,k,O),h=C}}}if(Mi)throw e=pa,Mi=!1,pa=null,e}function Qe(e,t){var i=t[Va];i===void 0&&(i=t[Va]=new Set);var l=e+"__bubble";i.has(l)||(Ku(t,e,2,!1),i.add(l))}function La(e,t,i){var l=0;t&&(l|=4),Ku(i,e,l,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function X0(e){if(!e[Ui]){e[Ui]=!0,a.forEach(function(i){i!=="selectionchange"&&(I2.has(i)||La(i,!1,e),La(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,La("selectionchange",!1,t))}}function Ku(e,t,i,l){switch(wu(t)){case 1:var c=t2;break;case 4:c=n2;break;default:c=$a}i=c.bind(null,t,i,e),c=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Oa(e,t,i,l,c){var h=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var k=l.stateNode.containerInfo;if(k===c||k.nodeType===8&&k.parentNode===c)break;if(y===4)for(y=l.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===c||C.nodeType===8&&C.parentNode===c))return;y=y.return}for(;k!==null;){if(y=Cr(k),y===null)return;if(C=y.tag,C===5||C===6){l=h=y;continue e}k=k.parentNode}}l=l.return}nu(function(){var O=h,X=C0(i),J=[];e:{var G=Gu.get(e);if(G!==void 0){var ce=za,me=e;switch(e){case"keypress":if(Li(i)===0)break e;case"keydown":case"keyup":ce=g2;break;case"focusin":me="focus",ce=Ma;break;case"focusout":me="blur",ce=Ma;break;case"beforeblur":case"afterblur":ce=Ma;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=o2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=w2;break;case Hu:case Wu:case Uu:ce=s2;break;case Vu:ce=$2;break;case"scroll":ce=r2;break;case"wheel":ce=_2;break;case"copy":case"cut":case"paste":ce=c2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=zu}var pe=(t&4)!==0,st=!pe&&e==="scroll",D=pe?G!==null?G+"Capture":null:G;pe=[];for(var E=O,B;E!==null;){B=E;var re=B.stateNode;if(B.tag===5&&re!==null&&(B=re,D!==null&&(re=j0(E,D),re!=null&&pe.push(Q0(E,re,B)))),st)break;E=E.return}0<pe.length&&(G=new ce(G,me,null,i,X),J.push({event:G,listeners:pe}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",G&&i!==M0&&(me=i.relatedTarget||i.fromElement)&&(Cr(me)||me[Mn]))break e;if((ce||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,ce?(me=i.relatedTarget||i.toElement,ce=O,me=me?Cr(me):null,me!==null&&(st=Mr(me),me!==st||me.tag!==5&&me.tag!==6)&&(me=null)):(ce=null,me=O),ce!==me)){if(pe=ku,re="onMouseLeave",D="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(pe=zu,re="onPointerLeave",D="onPointerEnter",E="pointer"),st=ce==null?G:e0(ce),B=me==null?G:e0(me),G=new pe(re,E+"leave",ce,i,X),G.target=st,G.relatedTarget=B,re=null,Cr(X)===O&&(pe=new pe(D,E+"enter",me,i,X),pe.target=B,pe.relatedTarget=st,re=pe),st=re,ce&&me)t:{for(pe=ce,D=me,E=0,B=pe;B;B=Zr(B))E++;for(B=0,re=D;re;re=Zr(re))B++;for(;0<E-B;)pe=Zr(pe),E--;for(;0<B-E;)D=Zr(D),B--;for(;E--;){if(pe===D||D!==null&&pe===D.alternate)break t;pe=Zr(pe),D=Zr(D)}pe=null}else pe=null;ce!==null&&Zu(J,G,ce,pe,!1),me!==null&&st!==null&&Zu(J,st,me,pe,!0)}}e:{if(G=O?e0(O):window,ce=G.nodeName&&G.nodeName.toLowerCase(),ce==="select"||ce==="input"&&G.type==="file")var ge=j2;else if(ju(G))if(qu)ge=D2;else{ge=q2;var we=E2}else(ce=G.nodeName)&&ce.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ge=P2);if(ge&&(ge=ge(e,O))){Eu(J,ge,i,X);break e}we&&we(e,G,O),e==="focusout"&&(we=G._wrapperState)&&we.controlled&&G.type==="number"&&Yt(G,"number",G.value)}switch(we=O?e0(O):window,e){case"focusin":(ju(we)||we.contentEditable==="true")&&(Qr=we,Pa=O,G0=null);break;case"focusout":G0=Pa=Qr=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,Iu(J,i,X);break;case"selectionchange":if(N2)break;case"keydown":case"keyup":Iu(J,i,X)}var be;if(Aa)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Xr?Cu(e,i)&&(Se="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Se="onCompositionStart");Se&&(Su&&i.locale!=="ko"&&(Xr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Xr&&(be=bu()):(er=X,_a="value"in er?er.value:er.textContent,Xr=!0)),we=Vi(O,Se),0<we.length&&(Se=new _u(Se,e,null,i,X),J.push({event:Se,listeners:we}),be?Se.data=be:(be=Au(i),be!==null&&(Se.data=be)))),(be=S2?T2(e,i):M2(e,i))&&(O=Vi(O,"onBeforeInput"),0<O.length&&(X=new _u("onBeforeInput","beforeinput",null,i,X),J.push({event:X,listeners:O}),X.data=be))}Qu(J,t)})}function Q0(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Vi(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=j0(e,i),h!=null&&l.unshift(Q0(e,h,c)),h=j0(e,t),h!=null&&l.push(Q0(e,h,c))),e=e.return}return l}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,t,i,l,c){for(var h=t._reactName,y=[];i!==null&&i!==l;){var k=i,C=k.alternate,O=k.stateNode;if(C!==null&&C===l)break;k.tag===5&&O!==null&&(k=O,c?(C=j0(i,h),C!=null&&y.unshift(Q0(i,C,k))):c||(C=j0(i,h),C!=null&&y.push(Q0(i,C,k)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var F2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function Ju(e){return(typeof e=="string"?e:""+e).replace(F2,`
`).replace(H2,"")}function Gi(e,t,i){if(t=Ju(t),Ju(e)!==t&&i)throw Error(r(425))}function Yi(){}var Ia=null,Fa=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,W2=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,U2=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(V2)}:Wa;function V2(e){setTimeout(function(){throw e})}function Ua(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),O0(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);O0(t)}function nr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),vn="__reactFiber$"+Jr,K0="__reactProps$"+Jr,Mn="__reactContainer$"+Jr,Va="__reactEvents$"+Jr,G2="__reactListeners$"+Jr,Y2="__reactHandles$"+Jr;function Cr(e){var t=e[vn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Mn]||i[vn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=tc(e);e!==null;){if(i=e[vn])return i;e=tc(e)}return t}e=i,i=e.parentNode}return null}function Z0(e){return e=e[vn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function e0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Xi(e){return e[K0]||null}var Ga=[],t0=-1;function rr(e){return{current:e}}function Ke(e){0>t0||(e.current=Ga[t0],Ga[t0]=null,t0--)}function Ye(e,t){t0++,Ga[t0]=e.current,e.current=t}var ir={},$t=rr(ir),qt=rr(!1),Ar=ir;function n0(e,t){var i=e.type.contextTypes;if(!i)return ir;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in i)c[h]=t[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Pt(e){return e=e.childContextTypes,e!=null}function Qi(){Ke(qt),Ke($t)}function nc(e,t,i){if($t.current!==ir)throw Error(r(168));Ye($t,t),Ye(qt,i)}function rc(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(r(108,Ee(e)||"Unknown",c));return oe({},i,l)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ir,Ar=$t.current,Ye($t,e),Ye(qt,qt.current),!0}function ic(e,t,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=rc(e,t,Ar),l.__reactInternalMemoizedMergedChildContext=e,Ke(qt),Ke($t),Ye($t,e)):Ke(qt),Ye(qt,i)}var Cn=null,Zi=!1,Ya=!1;function oc(e){Cn===null?Cn=[e]:Cn.push(e)}function X2(e){Zi=!0,oc(e)}function or(){if(!Ya&&Cn!==null){Ya=!0;var e=0,t=We;try{var i=Cn;for(We=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Cn=null,Zi=!1}catch(c){throw Cn!==null&&(Cn=Cn.slice(e+1)),lu(va,or),c}finally{We=t,Ya=!1}}return null}var r0=[],i0=0,Ji=null,eo=0,Qt=[],Kt=0,jr=null,An=1,jn="";function Er(e,t){r0[i0++]=eo,r0[i0++]=Ji,Ji=e,eo=t}function ac(e,t,i){Qt[Kt++]=An,Qt[Kt++]=jn,Qt[Kt++]=jr,jr=e;var l=An;e=jn;var c=32-sn(l)-1;l&=~(1<<c),i+=1;var h=32-sn(t)+c;if(30<h){var y=c-c%5;h=(l&(1<<y)-1).toString(32),l>>=y,c-=y,An=1<<32-sn(t)+c|i<<c|l,jn=h+e}else An=1<<h|i<<c|l,jn=e}function Xa(e){e.return!==null&&(Er(e,1),ac(e,1,0))}function Qa(e){for(;e===Ji;)Ji=r0[--i0],r0[i0]=null,eo=r0[--i0],r0[i0]=null;for(;e===jr;)jr=Qt[--Kt],Qt[Kt]=null,jn=Qt[--Kt],Qt[Kt]=null,An=Qt[--Kt],Qt[Kt]=null}var Ht=null,Wt=null,Ze=!1,cn=null;function lc(e,t){var i=tn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function sc(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=nr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=jr!==null?{id:An,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=tn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ht=e,Wt=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Za(e){if(Ze){var t=Wt;if(t){var i=t;if(!sc(e,t)){if(Ka(e))throw Error(r(418));t=nr(i.nextSibling);var l=Ht;t&&sc(e,t)?lc(l,i):(e.flags=e.flags&-4097|2,Ze=!1,Ht=e)}}else{if(Ka(e))throw Error(r(418));e.flags=e.flags&-4097|2,Ze=!1,Ht=e}}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function to(e){if(e!==Ht)return!1;if(!Ze)return uc(e),Ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=Wt)){if(Ka(e))throw cc(),Error(r(418));for(;t;)lc(e,t),t=nr(t.nextSibling)}if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Wt=nr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Ht?nr(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=Wt;e;)e=nr(e.nextSibling)}function o0(){Wt=Ht=null,Ze=!1}function Ja(e){cn===null?cn=[e]:cn.push(e)}var Q2=L.ReactCurrentBatchConfig;function J0(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(y){var k=c.refs;y===null?delete k[h]:k[h]=y},t._stringRef=h,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dc(e){var t=e._init;return t(e._payload)}function fc(e){function t(D,E){if(e){var B=D.deletions;B===null?(D.deletions=[E],D.flags|=16):B.push(E)}}function i(D,E){if(!e)return null;for(;E!==null;)t(D,E),E=E.sibling;return null}function l(D,E){for(D=new Map;E!==null;)E.key!==null?D.set(E.key,E):D.set(E.index,E),E=E.sibling;return D}function c(D,E){return D=hr(D,E),D.index=0,D.sibling=null,D}function h(D,E,B){return D.index=B,e?(B=D.alternate,B!==null?(B=B.index,B<E?(D.flags|=2,E):B):(D.flags|=2,E)):(D.flags|=1048576,E)}function y(D){return e&&D.alternate===null&&(D.flags|=2),D}function k(D,E,B,re){return E===null||E.tag!==6?(E=Wl(B,D.mode,re),E.return=D,E):(E=c(E,B),E.return=D,E)}function C(D,E,B,re){var ge=B.type;return ge===H?X(D,E,B.props.children,re,B.key):E!==null&&(E.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ue&&dc(ge)===E.type)?(re=c(E,B.props),re.ref=J0(D,E,B),re.return=D,re):(re=To(B.type,B.key,B.props,null,D.mode,re),re.ref=J0(D,E,B),re.return=D,re)}function O(D,E,B,re){return E===null||E.tag!==4||E.stateNode.containerInfo!==B.containerInfo||E.stateNode.implementation!==B.implementation?(E=Ul(B,D.mode,re),E.return=D,E):(E=c(E,B.children||[]),E.return=D,E)}function X(D,E,B,re,ge){return E===null||E.tag!==7?(E=Or(B,D.mode,re,ge),E.return=D,E):(E=c(E,B),E.return=D,E)}function J(D,E,B){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Wl(""+E,D.mode,B),E.return=D,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case U:return B=To(E.type,E.key,E.props,null,D.mode,B),B.ref=J0(D,null,E),B.return=D,B;case K:return E=Ul(E,D.mode,B),E.return=D,E;case Ue:var re=E._init;return J(D,re(E._payload),B)}if(Xt(E)||fe(E))return E=Or(E,D.mode,B,null),E.return=D,E;no(D,E)}return null}function G(D,E,B,re){var ge=E!==null?E.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return ge!==null?null:k(D,E,""+B,re);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case U:return B.key===ge?C(D,E,B,re):null;case K:return B.key===ge?O(D,E,B,re):null;case Ue:return ge=B._init,G(D,E,ge(B._payload),re)}if(Xt(B)||fe(B))return ge!==null?null:X(D,E,B,re,null);no(D,B)}return null}function ce(D,E,B,re,ge){if(typeof re=="string"&&re!==""||typeof re=="number")return D=D.get(B)||null,k(E,D,""+re,ge);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case U:return D=D.get(re.key===null?B:re.key)||null,C(E,D,re,ge);case K:return D=D.get(re.key===null?B:re.key)||null,O(E,D,re,ge);case Ue:var we=re._init;return ce(D,E,B,we(re._payload),ge)}if(Xt(re)||fe(re))return D=D.get(B)||null,X(E,D,re,ge,null);no(E,re)}return null}function me(D,E,B,re){for(var ge=null,we=null,be=E,Se=E=0,xt=null;be!==null&&Se<B.length;Se++){be.index>Se?(xt=be,be=null):xt=be.sibling;var Oe=G(D,be,B[Se],re);if(Oe===null){be===null&&(be=xt);break}e&&be&&Oe.alternate===null&&t(D,be),E=h(Oe,E,Se),we===null?ge=Oe:we.sibling=Oe,we=Oe,be=xt}if(Se===B.length)return i(D,be),Ze&&Er(D,Se),ge;if(be===null){for(;Se<B.length;Se++)be=J(D,B[Se],re),be!==null&&(E=h(be,E,Se),we===null?ge=be:we.sibling=be,we=be);return Ze&&Er(D,Se),ge}for(be=l(D,be);Se<B.length;Se++)xt=ce(be,D,Se,B[Se],re),xt!==null&&(e&&xt.alternate!==null&&be.delete(xt.key===null?Se:xt.key),E=h(xt,E,Se),we===null?ge=xt:we.sibling=xt,we=xt);return e&&be.forEach(function(mr){return t(D,mr)}),Ze&&Er(D,Se),ge}function pe(D,E,B,re){var ge=fe(B);if(typeof ge!="function")throw Error(r(150));if(B=ge.call(B),B==null)throw Error(r(151));for(var we=ge=null,be=E,Se=E=0,xt=null,Oe=B.next();be!==null&&!Oe.done;Se++,Oe=B.next()){be.index>Se?(xt=be,be=null):xt=be.sibling;var mr=G(D,be,Oe.value,re);if(mr===null){be===null&&(be=xt);break}e&&be&&mr.alternate===null&&t(D,be),E=h(mr,E,Se),we===null?ge=mr:we.sibling=mr,we=mr,be=xt}if(Oe.done)return i(D,be),Ze&&Er(D,Se),ge;if(be===null){for(;!Oe.done;Se++,Oe=B.next())Oe=J(D,Oe.value,re),Oe!==null&&(E=h(Oe,E,Se),we===null?ge=Oe:we.sibling=Oe,we=Oe);return Ze&&Er(D,Se),ge}for(be=l(D,be);!Oe.done;Se++,Oe=B.next())Oe=ce(be,D,Se,Oe.value,re),Oe!==null&&(e&&Oe.alternate!==null&&be.delete(Oe.key===null?Se:Oe.key),E=h(Oe,E,Se),we===null?ge=Oe:we.sibling=Oe,we=Oe);return e&&be.forEach(function(Af){return t(D,Af)}),Ze&&Er(D,Se),ge}function st(D,E,B,re){if(typeof B=="object"&&B!==null&&B.type===H&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case U:e:{for(var ge=B.key,we=E;we!==null;){if(we.key===ge){if(ge=B.type,ge===H){if(we.tag===7){i(D,we.sibling),E=c(we,B.props.children),E.return=D,D=E;break e}}else if(we.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ue&&dc(ge)===we.type){i(D,we.sibling),E=c(we,B.props),E.ref=J0(D,we,B),E.return=D,D=E;break e}i(D,we);break}else t(D,we);we=we.sibling}B.type===H?(E=Or(B.props.children,D.mode,re,B.key),E.return=D,D=E):(re=To(B.type,B.key,B.props,null,D.mode,re),re.ref=J0(D,E,B),re.return=D,D=re)}return y(D);case K:e:{for(we=B.key;E!==null;){if(E.key===we)if(E.tag===4&&E.stateNode.containerInfo===B.containerInfo&&E.stateNode.implementation===B.implementation){i(D,E.sibling),E=c(E,B.children||[]),E.return=D,D=E;break e}else{i(D,E);break}else t(D,E);E=E.sibling}E=Ul(B,D.mode,re),E.return=D,D=E}return y(D);case Ue:return we=B._init,st(D,E,we(B._payload),re)}if(Xt(B))return me(D,E,B,re);if(fe(B))return pe(D,E,B,re);no(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,E!==null&&E.tag===6?(i(D,E.sibling),E=c(E,B),E.return=D,D=E):(i(D,E),E=Wl(B,D.mode,re),E.return=D,D=E),y(D)):i(D,E)}return st}var a0=fc(!0),hc=fc(!1),ro=rr(null),io=null,l0=null,el=null;function tl(){el=l0=io=null}function nl(e){var t=ro.current;Ke(ro),e._currentValue=t}function rl(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function s0(e,t){io=e,el=l0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Dt=!0),e.firstContext=null)}function Zt(e){var t=e._currentValue;if(el!==e)if(e={context:e,memoizedValue:t,next:null},l0===null){if(io===null)throw Error(r(308));l0=e,io.dependencies={lanes:0,firstContext:e}}else l0=l0.next=e;return t}var qr=null;function il(e){qr===null?qr=[e]:qr.push(e)}function mc(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,il(t)):(i.next=c.next,c.next=i),t.interleaved=i,En(e,l)}function En(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var ar=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,En(e,i)}return c=l.interleaved,c===null?(t.next=t,il(l)):(t.next=c.next,c.next=t),l.interleaved=t,En(e,i)}function oo(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,xa(e,i)}}function vc(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?c=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?c=h=t:h=h.next=t}else c=h=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function ao(e,t,i,l){var c=e.updateQueue;ar=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,k=c.shared.pending;if(k!==null){c.shared.pending=null;var C=k,O=C.next;C.next=null,y===null?h=O:y.next=O,y=C;var X=e.alternate;X!==null&&(X=X.updateQueue,k=X.lastBaseUpdate,k!==y&&(k===null?X.firstBaseUpdate=O:k.next=O,X.lastBaseUpdate=C))}if(h!==null){var J=c.baseState;y=0,X=O=C=null,k=h;do{var G=k.lane,ce=k.eventTime;if((l&G)===G){X!==null&&(X=X.next={eventTime:ce,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var me=e,pe=k;switch(G=t,ce=i,pe.tag){case 1:if(me=pe.payload,typeof me=="function"){J=me.call(ce,J,G);break e}J=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=pe.payload,G=typeof me=="function"?me.call(ce,J,G):me,G==null)break e;J=oe({},J,G);break e;case 2:ar=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,G=c.effects,G===null?c.effects=[k]:G.push(k))}else ce={eventTime:ce,lane:G,tag:k.tag,payload:k.payload,callback:k.callback,next:null},X===null?(O=X=ce,C=J):X=X.next=ce,y|=G;if(k=k.next,k===null){if(k=c.shared.pending,k===null)break;G=k,k=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);if(X===null&&(C=J),c.baseState=C,c.firstBaseUpdate=O,c.lastBaseUpdate=X,t=c.shared.interleaved,t!==null){c=t;do y|=c.lane,c=c.next;while(c!==t)}else h===null&&(c.shared.lanes=0);Rr|=y,e.lanes=y,e.memoizedState=J}}function gc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var ei={},gn=rr(ei),ti=rr(ei),ni=rr(ei);function Pr(e){if(e===ei)throw Error(r(174));return e}function al(e,t){switch(Ye(ni,t),Ye(ti,e),Ye(gn,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tr(t,e)}Ke(gn),Ye(gn,t)}function u0(){Ke(gn),Ke(ti),Ke(ni)}function yc(e){Pr(ni.current);var t=Pr(gn.current),i=Tr(t,e.type);t!==i&&(Ye(ti,e),Ye(gn,i))}function ll(e){ti.current===e&&(Ke(gn),Ke(ti))}var et=rr(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sl=[];function ul(){for(var e=0;e<sl.length;e++)sl[e]._workInProgressVersionPrimary=null;sl.length=0}var so=L.ReactCurrentDispatcher,cl=L.ReactCurrentBatchConfig,Dr=0,tt=null,mt=null,gt=null,uo=!1,ri=!1,ii=0,K2=0;function kt(){throw Error(r(321))}function dl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!un(e[i],t[i]))return!1;return!0}function fl(e,t,i,l,c,h){if(Dr=h,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,so.current=e===null||e.memoizedState===null?tf:nf,e=i(l,c),ri){h=0;do{if(ri=!1,ii=0,25<=h)throw Error(r(301));h+=1,gt=mt=null,t.updateQueue=null,so.current=rf,e=i(l,c)}while(ri)}if(so.current=ho,t=mt!==null&&mt.next!==null,Dr=0,gt=mt=tt=null,uo=!1,t)throw Error(r(300));return e}function hl(){var e=ii!==0;return ii=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?tt.memoizedState=gt=e:gt=gt.next=e,gt}function Jt(){if(mt===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=mt.next;var t=gt===null?tt.memoizedState:gt.next;if(t!==null)gt=t,mt=e;else{if(e===null)throw Error(r(310));mt=e,e={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},gt===null?tt.memoizedState=gt=e:gt=gt.next=e}return gt}function oi(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=Jt(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=mt,c=l.baseQueue,h=i.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}l.baseQueue=c=h,i.pending=null}if(c!==null){h=c.next,l=l.baseState;var k=y=null,C=null,O=h;do{var X=O.lane;if((Dr&X)===X)C!==null&&(C=C.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),l=O.hasEagerState?O.eagerState:e(l,O.action);else{var J={lane:X,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};C===null?(k=C=J,y=l):C=C.next=J,tt.lanes|=X,Rr|=X}O=O.next}while(O!==null&&O!==h);C===null?y=l:C.next=k,un(l,t.memoizedState)||(Dt=!0),t.memoizedState=l,t.baseState=y,t.baseQueue=C,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do h=c.lane,tt.lanes|=h,Rr|=h,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function pl(e){var t=Jt(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,h=t.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);un(h,t.memoizedState)||(Dt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,l]}function xc(){}function wc(e,t){var i=tt,l=Jt(),c=t(),h=!un(l.memoizedState,c);if(h&&(l.memoizedState=c,Dt=!0),l=l.queue,vl(kc.bind(null,i,l,e),[e]),l.getSnapshot!==t||h||gt!==null&&gt.memoizedState.tag&1){if(i.flags|=2048,ai(9,$c.bind(null,i,l,c,t),void 0,null),yt===null)throw Error(r(349));(Dr&30)!==0||bc(i,t,c)}return c}function bc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function $c(e,t,i,l){t.value=i,t.getSnapshot=l,_c(t)&&zc(e)}function kc(e,t,i){return i(function(){_c(t)&&zc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!un(e,i)}catch{return!0}}function zc(e){var t=En(e,1);t!==null&&mn(t,e,1,-1)}function Sc(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,tt,e),[t.memoizedState,e]}function ai(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function Tc(){return Jt().memoizedState}function co(e,t,i,l){var c=yn();tt.flags|=e,c.memoizedState=ai(1|t,i,void 0,l===void 0?null:l)}function fo(e,t,i,l){var c=Jt();l=l===void 0?null:l;var h=void 0;if(mt!==null){var y=mt.memoizedState;if(h=y.destroy,l!==null&&dl(l,y.deps)){c.memoizedState=ai(t,i,h,l);return}}tt.flags|=e,c.memoizedState=ai(1|t,i,h,l)}function Mc(e,t){return co(8390656,8,e,t)}function vl(e,t){return fo(2048,8,e,t)}function Cc(e,t){return fo(4,2,e,t)}function Ac(e,t){return fo(4,4,e,t)}function jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ec(e,t,i){return i=i!=null?i.concat([e]):null,fo(4,4,jc.bind(null,t,e),i)}function gl(){}function qc(e,t){var i=Jt();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&dl(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Pc(e,t){var i=Jt();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&dl(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function Dc(e,t,i){return(Dr&21)===0?(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=i):(un(i,t)||(i=du(),tt.lanes|=i,Rr|=i,e.baseState=!0),t)}function Z2(e,t){var i=We;We=i!==0&&4>i?i:4,e(!0);var l=cl.transition;cl.transition={};try{e(!1),t()}finally{We=i,cl.transition=l}}function Rc(){return Jt().memoizedState}function J2(e,t,i){var l=dr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Bc(e))Nc(t,i);else if(i=mc(e,t,i,l),i!==null){var c=Mt();mn(i,e,l,c),Lc(i,t,l)}}function ef(e,t,i){var l=dr(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Nc(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var y=t.lastRenderedState,k=h(y,i);if(c.hasEagerState=!0,c.eagerState=k,un(k,y)){var C=t.interleaved;C===null?(c.next=c,il(t)):(c.next=C.next,C.next=c),t.interleaved=c;return}}catch{}finally{}i=mc(e,t,c,l),i!==null&&(c=Mt(),mn(i,e,l,c),Lc(i,t,l))}}function Bc(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function Nc(e,t){ri=uo=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Lc(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,xa(e,i)}}var ho={readContext:Zt,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},tf={readContext:Zt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Zt,useEffect:Mc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,co(4194308,4,jc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var i=yn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=yn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=J2.bind(null,tt,e),[l.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Sc,useDebugValue:gl,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Sc(!1),t=e[0];return e=Z2.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=tt,c=yn();if(Ze){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),yt===null)throw Error(r(349));(Dr&30)!==0||bc(l,t,i)}c.memoizedState=i;var h={value:i,getSnapshot:t};return c.queue=h,Mc(kc.bind(null,l,h,e),[e]),l.flags|=2048,ai(9,$c.bind(null,l,h,i,t),void 0,null),i},useId:function(){var e=yn(),t=yt.identifierPrefix;if(Ze){var i=jn,l=An;i=(l&~(1<<32-sn(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=ii++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=K2++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:Zt,useCallback:qc,useContext:Zt,useEffect:vl,useImperativeHandle:Ec,useInsertionEffect:Cc,useLayoutEffect:Ac,useMemo:Pc,useReducer:ml,useRef:Tc,useState:function(){return ml(oi)},useDebugValue:gl,useDeferredValue:function(e){var t=Jt();return Dc(t,mt.memoizedState,e)},useTransition:function(){var e=ml(oi)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:wc,useId:Rc,unstable_isNewReconciler:!1},rf={readContext:Zt,useCallback:qc,useContext:Zt,useEffect:vl,useImperativeHandle:Ec,useInsertionEffect:Cc,useLayoutEffect:Ac,useMemo:Pc,useReducer:pl,useRef:Tc,useState:function(){return pl(oi)},useDebugValue:gl,useDeferredValue:function(e){var t=Jt();return mt===null?t.memoizedState=e:Dc(t,mt.memoizedState,e)},useTransition:function(){var e=pl(oi)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:wc,useId:Rc,unstable_isNewReconciler:!1};function dn(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function yl(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:oe({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var mo={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=Mt(),c=dr(e),h=qn(l,c);h.payload=t,i!=null&&(h.callback=i),t=lr(e,h,c),t!==null&&(mn(t,e,c,l),oo(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=Mt(),c=dr(e),h=qn(l,c);h.tag=1,h.payload=t,i!=null&&(h.callback=i),t=lr(e,h,c),t!==null&&(mn(t,e,c,l),oo(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Mt(),l=dr(e),c=qn(i,l);c.tag=2,t!=null&&(c.callback=t),t=lr(e,c,l),t!==null&&(mn(t,e,l,i),oo(t,e,l))}};function Oc(e,t,i,l,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,y):t.prototype&&t.prototype.isPureReactComponent?!V0(i,l)||!V0(c,h):!0}function Ic(e,t,i){var l=!1,c=ir,h=t.contextType;return typeof h=="object"&&h!==null?h=Zt(h):(c=Pt(t)?Ar:$t.current,l=t.contextTypes,h=(l=l!=null)?n0(e,c):ir),t=new t(i,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),t}function Fc(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function xl(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},ol(e);var h=t.contextType;typeof h=="object"&&h!==null?c.context=Zt(h):(h=Pt(t)?Ar:$t.current,c.context=n0(e,h)),c.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(yl(e,t,h,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&mo.enqueueReplaceState(c,c.state,null),ao(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function c0(e,t){try{var i="",l=t;do i+=Ae(l),l=l.return;while(l);var c=i}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:c,digest:null}}function wl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var of=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,t,i){i=qn(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){bo||(bo=!0,Rl=l),bl(e,t)},i}function Wc(e,t,i){i=qn(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){bl(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){bl(e,t),typeof l!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function Uc(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new of;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=xf.bind(null,e,t,i),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=qn(-1,1),t.tag=2,lr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var af=L.ReactCurrentOwner,Dt=!1;function Tt(e,t,i,l){t.child=e===null?hc(t,null,i,l):a0(t,e.child,i,l)}function Yc(e,t,i,l,c){i=i.render;var h=t.ref;return s0(t,c),l=fl(e,t,i,l,h,c),i=hl(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Pn(e,t,c)):(Ze&&i&&Xa(t),t.flags|=1,Tt(e,t,l,c),t.child)}function Xc(e,t,i,l,c){if(e===null){var h=i.type;return typeof h=="function"&&!Hl(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=h,Qc(e,t,h,l,c)):(e=To(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&c)===0){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:V0,i(y,l)&&e.ref===t.ref)return Pn(e,t,c)}return t.flags|=1,e=hr(h,l),e.ref=t.ref,e.return=t,t.child=e}function Qc(e,t,i,l,c){if(e!==null){var h=e.memoizedProps;if(V0(h,l)&&e.ref===t.ref)if(Dt=!1,t.pendingProps=l=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Dt=!0);else return t.lanes=e.lanes,Pn(e,t,c)}return $l(e,t,i,l,c)}function Kc(e,t,i){var l=t.pendingProps,c=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(f0,Ut),Ut|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ye(f0,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,Ye(f0,Ut),Ut|=l}else h!==null?(l=h.baseLanes|i,t.memoizedState=null):l=i,Ye(f0,Ut),Ut|=l;return Tt(e,t,c,i),t.child}function Zc(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function $l(e,t,i,l,c){var h=Pt(i)?Ar:$t.current;return h=n0(t,h),s0(t,c),i=fl(e,t,i,l,h,c),l=hl(),e!==null&&!Dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Pn(e,t,c)):(Ze&&l&&Xa(t),t.flags|=1,Tt(e,t,i,c),t.child)}function Jc(e,t,i,l,c){if(Pt(i)){var h=!0;Ki(t)}else h=!1;if(s0(t,c),t.stateNode===null)vo(e,t),Ic(t,i,l),xl(t,i,l,c),l=!0;else if(e===null){var y=t.stateNode,k=t.memoizedProps;y.props=k;var C=y.context,O=i.contextType;typeof O=="object"&&O!==null?O=Zt(O):(O=Pt(i)?Ar:$t.current,O=n0(t,O));var X=i.getDerivedStateFromProps,J=typeof X=="function"||typeof y.getSnapshotBeforeUpdate=="function";J||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==l||C!==O)&&Fc(t,y,l,O),ar=!1;var G=t.memoizedState;y.state=G,ao(t,l,y,c),C=t.memoizedState,k!==l||G!==C||qt.current||ar?(typeof X=="function"&&(yl(t,i,X,l),C=t.memoizedState),(k=ar||Oc(t,i,k,l,G,C,O))?(J||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),y.props=l,y.state=C,y.context=O,l=k):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{y=t.stateNode,pc(e,t),k=t.memoizedProps,O=t.type===t.elementType?k:dn(t.type,k),y.props=O,J=t.pendingProps,G=y.context,C=i.contextType,typeof C=="object"&&C!==null?C=Zt(C):(C=Pt(i)?Ar:$t.current,C=n0(t,C));var ce=i.getDerivedStateFromProps;(X=typeof ce=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==J||G!==C)&&Fc(t,y,l,C),ar=!1,G=t.memoizedState,y.state=G,ao(t,l,y,c);var me=t.memoizedState;k!==J||G!==me||qt.current||ar?(typeof ce=="function"&&(yl(t,i,ce,l),me=t.memoizedState),(O=ar||Oc(t,i,O,l,G,me,C)||!1)?(X||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,me,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,me,C)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=me),y.props=l,y.state=me,y.context=C,l=O):(typeof y.componentDidUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),l=!1)}return kl(e,t,i,l,h,c)}function kl(e,t,i,l,c,h){Zc(e,t);var y=(t.flags&128)!==0;if(!l&&!y)return c&&ic(t,i,!1),Pn(e,t,h);l=t.stateNode,af.current=t;var k=y&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&y?(t.child=a0(t,e.child,null,h),t.child=a0(t,null,k,h)):Tt(e,t,k,h),t.memoizedState=l.state,c&&ic(t,i,!0),t.child}function e1(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),al(e,t.containerInfo)}function t1(e,t,i,l,c){return o0(),Ja(c),t.flags|=256,Tt(e,t,i,l),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function n1(e,t,i){var l=t.pendingProps,c=et.current,h=!1,y=(t.flags&128)!==0,k;if((k=y)||(k=e!==null&&e.memoizedState===null?!1:(c&2)!==0),k?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ye(et,c&1),e===null)return Za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=l.children,e=l.fallback,h?(l=t.mode,h=t.child,y={mode:"hidden",children:y},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=Mo(y,l,0,null),e=Or(e,l,i,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=zl(i),t.memoizedState=_l,e):Sl(t,y));if(c=e.memoizedState,c!==null&&(k=c.dehydrated,k!==null))return lf(e,t,y,l,k,c,i);if(h){h=l.fallback,y=t.mode,c=e.child,k=c.sibling;var C={mode:"hidden",children:l.children};return(y&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=C,t.deletions=null):(l=hr(c,C),l.subtreeFlags=c.subtreeFlags&14680064),k!==null?h=hr(k,h):(h=Or(h,y,i,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,l=h,h=t.child,y=e.child.memoizedState,y=y===null?zl(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~i,t.memoizedState=_l,l}return h=e.child,e=h.sibling,l=hr(h,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function Sl(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,i,l){return l!==null&&Ja(l),a0(t,e.child,null,i),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lf(e,t,i,l,c,h,y){if(i)return t.flags&256?(t.flags&=-257,l=wl(Error(r(422))),po(e,t,y,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=l.fallback,c=t.mode,l=Mo({mode:"visible",children:l.children},c,0,null),h=Or(h,c,y,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,(t.mode&1)!==0&&a0(t,e.child,null,y),t.child.memoizedState=zl(y),t.memoizedState=_l,h);if((t.mode&1)===0)return po(e,t,y,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var k=l.dgst;return l=k,h=Error(r(419)),l=wl(h,l,void 0),po(e,t,y,l)}if(k=(y&e.childLanes)!==0,Dt||k){if(l=yt,l!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|y))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,En(e,c),mn(l,e,c,-1))}return Fl(),l=wl(Error(r(421))),po(e,t,y,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),c._reactRetry=t,null):(e=h.treeContext,Wt=nr(c.nextSibling),Ht=t,Ze=!0,cn=null,e!==null&&(Qt[Kt++]=An,Qt[Kt++]=jn,Qt[Kt++]=jr,An=e.id,jn=e.overflow,jr=t),t=Sl(t,l.children),t.flags|=4096,t)}function r1(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),rl(e.return,t,i)}function Tl(e,t,i,l,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=c)}function i1(e,t,i){var l=t.pendingProps,c=l.revealOrder,h=l.tail;if(Tt(e,t,l.children,i),l=et.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r1(e,i,t);else if(e.tag===19)r1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ye(et,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&lo(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Tl(t,!1,c,i,h);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&lo(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Tl(t,!0,i,null,h);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=hr(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=hr(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function sf(e,t,i){switch(t.tag){case 3:e1(t),o0();break;case 5:yc(t);break;case 1:Pt(t.type)&&Ki(t);break;case 4:al(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Ye(ro,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ye(et,et.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?n1(e,t,i):(Ye(et,et.current&1),e=Pn(e,t,i),e!==null?e.sibling:null);Ye(et,et.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return i1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ye(et,et.current),l)break;return null;case 22:case 23:return t.lanes=0,Kc(e,t,i)}return Pn(e,t,i)}var o1,Ml,a1,l1;o1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ml=function(){},a1=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Pr(gn.current);var h=null;switch(i){case"input":c=Wn(e,c),l=Wn(e,l),h=[];break;case"select":c=oe({},c,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":c=_r(e,c),l=_r(e,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Yi)}S0(i,l);var y;i=null;for(O in c)if(!l.hasOwnProperty(O)&&c.hasOwnProperty(O)&&c[O]!=null)if(O==="style"){var k=c[O];for(y in k)k.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(s.hasOwnProperty(O)?h||(h=[]):(h=h||[]).push(O,null));for(O in l){var C=l[O];if(k=c!=null?c[O]:void 0,l.hasOwnProperty(O)&&C!==k&&(C!=null||k!=null))if(O==="style")if(k){for(y in k)!k.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in C)C.hasOwnProperty(y)&&k[y]!==C[y]&&(i||(i={}),i[y]=C[y])}else i||(h||(h=[]),h.push(O,i)),i=C;else O==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,k=k?k.__html:void 0,C!=null&&k!==C&&(h=h||[]).push(O,C)):O==="children"?typeof C!="string"&&typeof C!="number"||(h=h||[]).push(O,""+C):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(s.hasOwnProperty(O)?(C!=null&&O==="onScroll"&&Qe("scroll",e),h||k===C||(h=[])):(h=h||[]).push(O,C))}i&&(h=h||[]).push("style",i);var O=h;(t.updateQueue=O)&&(t.flags|=4)}},l1=function(e,t,i,l){i!==l&&(t.flags|=4)};function li(e,t){if(!Ze)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _t(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function uf(e,t,i){var l=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(t),null;case 1:return Pt(t.type)&&Qi(),_t(t),null;case 3:return l=t.stateNode,u0(),Ke(qt),Ke($t),ul(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,cn!==null&&(Ll(cn),cn=null))),Ml(e,t),_t(t),null;case 5:ll(t);var c=Pr(ni.current);if(i=t.type,e!==null&&t.stateNode!=null)a1(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(r(166));return _t(t),null}if(e=Pr(gn.current),to(t)){l=t.stateNode,i=t.type;var h=t.memoizedProps;switch(l[vn]=t,l[K0]=h,e=(t.mode&1)!==0,i){case"dialog":Qe("cancel",l),Qe("close",l);break;case"iframe":case"object":case"embed":Qe("load",l);break;case"video":case"audio":for(c=0;c<Y0.length;c++)Qe(Y0[c],l);break;case"source":Qe("error",l);break;case"img":case"image":case"link":Qe("error",l),Qe("load",l);break;case"details":Qe("toggle",l);break;case"input":kr(l,h),Qe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Qe("invalid",l);break;case"textarea":zi(l,h),Qe("invalid",l)}S0(i,h),c=null;for(var y in h)if(h.hasOwnProperty(y)){var k=h[y];y==="children"?typeof k=="string"?l.textContent!==k&&(h.suppressHydrationWarning!==!0&&Gi(l.textContent,k,e),c=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(h.suppressHydrationWarning!==!0&&Gi(l.textContent,k,e),c=["children",""+k]):s.hasOwnProperty(y)&&k!=null&&y==="onScroll"&&Qe("scroll",l)}switch(i){case"input":an(l),Tn(l,h,!0);break;case"textarea":an(l),zr(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Yi)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sr(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(i,{is:l.is}):(e=y.createElement(i),i==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,i),e[vn]=t,e[K0]=l,o1(e,t,!1,!1),t.stateNode=e;e:{switch(y=T0(i,l),i){case"dialog":Qe("cancel",e),Qe("close",e),c=l;break;case"iframe":case"object":case"embed":Qe("load",e),c=l;break;case"video":case"audio":for(c=0;c<Y0.length;c++)Qe(Y0[c],e);c=l;break;case"source":Qe("error",e),c=l;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),c=l;break;case"details":Qe("toggle",e),c=l;break;case"input":kr(e,l),c=Wn(e,l),Qe("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=oe({},l,{value:void 0}),Qe("invalid",e);break;case"textarea":zi(e,l),c=_r(e,l),Qe("invalid",e);break;default:c=l}S0(i,c),k=c;for(h in k)if(k.hasOwnProperty(h)){var C=k[h];h==="style"?z0(e,C):h==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Gn(e,C)):h==="children"?typeof C=="string"?(i!=="textarea"||C!=="")&&Yn(e,C):typeof C=="number"&&Yn(e,""+C):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(s.hasOwnProperty(h)?C!=null&&h==="onScroll"&&Qe("scroll",e):C!=null&&N(e,h,C,y))}switch(i){case"input":an(e),Tn(e,l,!1);break;case"textarea":an(e),zr(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Pe(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?It(e,!!l.multiple,h,!1):l.defaultValue!=null&&It(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Yi)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _t(t),null;case 6:if(e&&t.stateNode!=null)l1(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(i=Pr(ni.current),Pr(gn.current),to(t)){if(l=t.stateNode,i=t.memoizedProps,l[vn]=t,(h=l.nodeValue!==i)&&(e=Ht,e!==null))switch(e.tag){case 3:Gi(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(l.nodeValue,i,(e.mode&1)!==0)}h&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[vn]=t,t.stateNode=l}return _t(t),null;case 13:if(Ke(et),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ze&&Wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cc(),o0(),t.flags|=98560,h=!1;else if(h=to(t),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[vn]=t}else o0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_t(t),h=!1}else cn!==null&&(Ll(cn),cn=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(et.current&1)!==0?pt===0&&(pt=3):Fl())),t.updateQueue!==null&&(t.flags|=4),_t(t),null);case 4:return u0(),Ml(e,t),e===null&&X0(t.stateNode.containerInfo),_t(t),null;case 10:return nl(t.type._context),_t(t),null;case 17:return Pt(t.type)&&Qi(),_t(t),null;case 19:if(Ke(et),h=t.memoizedState,h===null)return _t(t),null;if(l=(t.flags&128)!==0,y=h.rendering,y===null)if(l)li(h,!1);else{if(pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=lo(e),y!==null){for(t.flags|=128,li(h,!1),l=y.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)h=i,e=l,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ye(et,et.current&1|2),t.child}e=e.sibling}h.tail!==null&&lt()>h0&&(t.flags|=128,l=!0,li(h,!1),t.lanes=4194304)}else{if(!l)if(e=lo(y),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),li(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Ze)return _t(t),null}else 2*lt()-h.renderingStartTime>h0&&i!==1073741824&&(t.flags|=128,l=!0,li(h,!1),t.lanes=4194304);h.isBackwards?(y.sibling=t.child,t.child=y):(i=h.last,i!==null?i.sibling=y:t.child=y,h.last=y)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=lt(),t.sibling=null,i=et.current,Ye(et,l?i&1|2:i&1),t):(_t(t),null);case 22:case 23:return Il(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Ut&1073741824)!==0&&(_t(t),t.subtreeFlags&6&&(t.flags|=8192)):_t(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function cf(e,t){switch(Qa(t),t.tag){case 1:return Pt(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return u0(),Ke(qt),Ke($t),ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ll(t),null;case 13:if(Ke(et),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));o0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ke(et),null;case 4:return u0(),null;case 10:return nl(t.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var go=!1,zt=!1,df=typeof WeakSet=="function"?WeakSet:Set,he=null;function d0(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){it(e,t,l)}else i.current=null}function Cl(e,t,i){try{i()}catch(l){it(e,t,l)}}var s1=!1;function ff(e,t){if(Ia=Ri,e=Ou(),qa(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,k=-1,C=-1,O=0,X=0,J=e,G=null;t:for(;;){for(var ce;J!==i||c!==0&&J.nodeType!==3||(k=y+c),J!==h||l!==0&&J.nodeType!==3||(C=y+l),J.nodeType===3&&(y+=J.nodeValue.length),(ce=J.firstChild)!==null;)G=J,J=ce;for(;;){if(J===e)break t;if(G===i&&++O===c&&(k=y),G===h&&++X===l&&(C=y),(ce=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=ce}i=k===-1||C===-1?null:{start:k,end:C}}else i=null}i=i||{start:0,end:0}}else i=null;for(Fa={focusedElem:e,selectionRange:i},Ri=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var me=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var pe=me.memoizedProps,st=me.memoizedState,D=t.stateNode,E=D.getSnapshotBeforeUpdate(t.elementType===t.type?pe:dn(t.type,pe),st);D.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(re){it(t,t.return,re)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return me=s1,s1=!1,me}function si(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&Cl(t,i,h)}c=c.next}while(c!==l)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Al(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function u1(e){var t=e.alternate;t!==null&&(e.alternate=null,u1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[K0],delete t[Va],delete t[G2],delete t[Y2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c1(e){return e.tag===5||e.tag===3||e.tag===4}function d1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Yi));else if(l!==4&&(e=e.child,e!==null))for(jl(e,t,i),e=e.sibling;e!==null;)jl(e,t,i),e=e.sibling}function El(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(El(e,t,i),e=e.sibling;e!==null;)El(e,t,i),e=e.sibling}var wt=null,fn=!1;function sr(e,t,i){for(i=i.child;i!==null;)f1(e,t,i),i=i.sibling}function f1(e,t,i){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Ai,i)}catch{}switch(i.tag){case 5:zt||d0(i,t);case 6:var l=wt,c=fn;wt=null,sr(e,t,i),wt=l,fn=c,wt!==null&&(fn?(e=wt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):wt.removeChild(i.stateNode));break;case 18:wt!==null&&(fn?(e=wt,i=i.stateNode,e.nodeType===8?Ua(e.parentNode,i):e.nodeType===1&&Ua(e,i),O0(e)):Ua(wt,i.stateNode));break;case 4:l=wt,c=fn,wt=i.stateNode.containerInfo,fn=!0,sr(e,t,i),wt=l,fn=c;break;case 0:case 11:case 14:case 15:if(!zt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&Cl(i,t,y),c=c.next}while(c!==l)}sr(e,t,i);break;case 1:if(!zt&&(d0(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(k){it(i,t,k)}sr(e,t,i);break;case 21:sr(e,t,i);break;case 22:i.mode&1?(zt=(l=zt)||i.memoizedState!==null,sr(e,t,i),zt=l):sr(e,t,i);break;default:sr(e,t,i)}}function h1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new df),t.forEach(function(l){var c=bf.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function hn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var h=e,y=t,k=y;e:for(;k!==null;){switch(k.tag){case 5:wt=k.stateNode,fn=!1;break e;case 3:wt=k.stateNode.containerInfo,fn=!0;break e;case 4:wt=k.stateNode.containerInfo,fn=!0;break e}k=k.return}if(wt===null)throw Error(r(160));f1(h,y,c),wt=null,fn=!1;var C=c.alternate;C!==null&&(C.return=null),c.return=null}catch(O){it(c,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)m1(t,e),t=t.sibling}function m1(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(t,e),xn(e),l&4){try{si(3,e,e.return),yo(3,e)}catch(pe){it(e,e.return,pe)}try{si(5,e,e.return)}catch(pe){it(e,e.return,pe)}}break;case 1:hn(t,e),xn(e),l&512&&i!==null&&d0(i,i.return);break;case 5:if(hn(t,e),xn(e),l&512&&i!==null&&d0(i,i.return),e.flags&32){var c=e.stateNode;try{Yn(c,"")}catch(pe){it(e,e.return,pe)}}if(l&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,y=i!==null?i.memoizedProps:h,k=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{k==="input"&&h.type==="radio"&&h.name!=null&&Un(c,h),T0(k,y);var O=T0(k,h);for(y=0;y<C.length;y+=2){var X=C[y],J=C[y+1];X==="style"?z0(c,J):X==="dangerouslySetInnerHTML"?Gn(c,J):X==="children"?Yn(c,J):N(c,X,J,O)}switch(k){case"input":Sn(c,h);break;case"textarea":Vn(c,h);break;case"select":var G=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var ce=h.value;ce!=null?It(c,!!h.multiple,ce,!1):G!==!!h.multiple&&(h.defaultValue!=null?It(c,!!h.multiple,h.defaultValue,!0):It(c,!!h.multiple,h.multiple?[]:"",!1))}c[K0]=h}catch(pe){it(e,e.return,pe)}}break;case 6:if(hn(t,e),xn(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(pe){it(e,e.return,pe)}}break;case 3:if(hn(t,e),xn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{O0(t.containerInfo)}catch(pe){it(e,e.return,pe)}break;case 4:hn(t,e),xn(e);break;case 13:hn(t,e),xn(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Dl=lt())),l&4&&h1(e);break;case 22:if(X=i!==null&&i.memoizedState!==null,e.mode&1?(zt=(O=zt)||X,hn(t,e),zt=O):hn(t,e),xn(e),l&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!X&&(e.mode&1)!==0)for(he=e,X=e.child;X!==null;){for(J=he=X;he!==null;){switch(G=he,ce=G.child,G.tag){case 0:case 11:case 14:case 15:si(4,G,G.return);break;case 1:d0(G,G.return);var me=G.stateNode;if(typeof me.componentWillUnmount=="function"){l=G,i=G.return;try{t=l,me.props=t.memoizedProps,me.state=t.memoizedState,me.componentWillUnmount()}catch(pe){it(l,i,pe)}}break;case 5:d0(G,G.return);break;case 22:if(G.memoizedState!==null){g1(J);continue}}ce!==null?(ce.return=G,he=ce):g1(J)}X=X.sibling}e:for(X=null,J=e;;){if(J.tag===5){if(X===null){X=J;try{c=J.stateNode,O?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(k=J.stateNode,C=J.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,k.style.display=Si("display",y))}catch(pe){it(e,e.return,pe)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=O?"":J.memoizedProps}catch(pe){it(e,e.return,pe)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===e)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===e)break e;for(;J.sibling===null;){if(J.return===null||J.return===e)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:hn(t,e),xn(e),l&4&&h1(e);break;case 21:break;default:hn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(c1(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Yn(c,""),l.flags&=-33);var h=d1(e);El(e,h,c);break;case 3:case 4:var y=l.stateNode.containerInfo,k=d1(e);jl(e,k,y);break;default:throw Error(r(161))}}catch(C){it(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hf(e,t,i){he=e,p1(e)}function p1(e,t,i){for(var l=(e.mode&1)!==0;he!==null;){var c=he,h=c.child;if(c.tag===22&&l){var y=c.memoizedState!==null||go;if(!y){var k=c.alternate,C=k!==null&&k.memoizedState!==null||zt;k=go;var O=zt;if(go=y,(zt=C)&&!O)for(he=c;he!==null;)y=he,C=y.child,y.tag===22&&y.memoizedState!==null?y1(c):C!==null?(C.return=y,he=C):y1(c);for(;h!==null;)he=h,p1(h),h=h.sibling;he=c,go=k,zt=O}v1(e)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,he=h):v1(e)}}function v1(e){for(;he!==null;){var t=he;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:zt||yo(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!zt)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:dn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&gc(t,h,l);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}gc(t,y,i)}break;case 5:var k=t.stateNode;if(i===null&&t.flags&4){i=k;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&i.focus();break;case"img":C.src&&(i.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var X=O.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&O0(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}zt||t.flags&512&&Al(t)}catch(G){it(t,t.return,G)}}if(t===e){he=null;break}if(i=t.sibling,i!==null){i.return=t.return,he=i;break}he=t.return}}function g1(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var i=t.sibling;if(i!==null){i.return=t.return,he=i;break}he=t.return}}function y1(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{yo(4,t)}catch(C){it(t,i,C)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(C){it(t,c,C)}}var h=t.return;try{Al(t)}catch(C){it(t,h,C)}break;case 5:var y=t.return;try{Al(t)}catch(C){it(t,y,C)}}}catch(C){it(t,t.return,C)}if(t===e){he=null;break}var k=t.sibling;if(k!==null){k.return=t.return,he=k;break}he=t.return}}var mf=Math.ceil,xo=L.ReactCurrentDispatcher,ql=L.ReactCurrentOwner,en=L.ReactCurrentBatchConfig,Ne=0,yt=null,ct=null,bt=0,Ut=0,f0=rr(0),pt=0,ui=null,Rr=0,wo=0,Pl=0,ci=null,Rt=null,Dl=0,h0=1/0,Dn=null,bo=!1,Rl=null,ur=null,$o=!1,cr=null,ko=0,di=0,Bl=null,_o=-1,zo=0;function Mt(){return(Ne&6)!==0?lt():_o!==-1?_o:_o=lt()}function dr(e){return(e.mode&1)===0?1:(Ne&2)!==0&&bt!==0?bt&-bt:Q2.transition!==null?(zo===0&&(zo=du()),zo):(e=We,e!==0||(e=window.event,e=e===void 0?16:wu(e.type)),e)}function mn(e,t,i,l){if(50<di)throw di=0,Bl=null,Error(r(185));D0(e,i,l),((Ne&2)===0||e!==yt)&&(e===yt&&((Ne&2)===0&&(wo|=i),pt===4&&fr(e,bt)),Bt(e,l),i===1&&Ne===0&&(t.mode&1)===0&&(h0=lt()+500,Zi&&or()))}function Bt(e,t){var i=e.callbackNode;Q4(e,t);var l=qi(e,e===yt?bt:0);if(l===0)i!==null&&su(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&su(i),t===1)e.tag===0?X2(w1.bind(null,e)):oc(w1.bind(null,e)),U2(function(){(Ne&6)===0&&or()}),i=null;else{switch(fu(l)){case 1:i=va;break;case 4:i=uu;break;case 16:i=Ci;break;case 536870912:i=cu;break;default:i=Ci}i=M1(i,x1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function x1(e,t){if(_o=-1,zo=0,(Ne&6)!==0)throw Error(r(327));var i=e.callbackNode;if(m0()&&e.callbackNode!==i)return null;var l=qi(e,e===yt?bt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=So(e,l);else{t=l;var c=Ne;Ne|=2;var h=$1();(yt!==e||bt!==t)&&(Dn=null,h0=lt()+500,Nr(e,t));do try{gf();break}catch(k){b1(e,k)}while(!0);tl(),xo.current=h,Ne=c,ct!==null?t=0:(yt=null,bt=0,t=pt)}if(t!==0){if(t===2&&(c=ga(e),c!==0&&(l=c,t=Nl(e,c))),t===1)throw i=ui,Nr(e,0),fr(e,l),Bt(e,lt()),i;if(t===6)fr(e,l);else{if(c=e.current.alternate,(l&30)===0&&!pf(c)&&(t=So(e,l),t===2&&(h=ga(e),h!==0&&(l=h,t=Nl(e,h))),t===1))throw i=ui,Nr(e,0),fr(e,l),Bt(e,lt()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(r(345));case 2:Lr(e,Rt,Dn);break;case 3:if(fr(e,l),(l&130023424)===l&&(t=Dl+500-lt(),10<t)){if(qi(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){Mt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Wa(Lr.bind(null,e,Rt,Dn),t);break}Lr(e,Rt,Dn);break;case 4:if(fr(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var y=31-sn(l);h=1<<y,y=t[y],y>c&&(c=y),l&=~h}if(l=c,l=lt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*mf(l/1960))-l,10<l){e.timeoutHandle=Wa(Lr.bind(null,e,Rt,Dn),l);break}Lr(e,Rt,Dn);break;case 5:Lr(e,Rt,Dn);break;default:throw Error(r(329))}}}return Bt(e,lt()),e.callbackNode===i?x1.bind(null,e):null}function Nl(e,t){var i=ci;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=So(e,t),e!==2&&(t=Rt,Rt=i,t!==null&&Ll(t)),e}function Ll(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function pf(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],h=c.getSnapshot;c=c.value;try{if(!un(h(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fr(e,t){for(t&=~Pl,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-sn(t),l=1<<i;e[i]=-1,t&=~l}}function w1(e){if((Ne&6)!==0)throw Error(r(327));m0();var t=qi(e,0);if((t&1)===0)return Bt(e,lt()),null;var i=So(e,t);if(e.tag!==0&&i===2){var l=ga(e);l!==0&&(t=l,i=Nl(e,l))}if(i===1)throw i=ui,Nr(e,0),fr(e,t),Bt(e,lt()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lr(e,Rt,Dn),Bt(e,lt()),null}function Ol(e,t){var i=Ne;Ne|=1;try{return e(t)}finally{Ne=i,Ne===0&&(h0=lt()+500,Zi&&or())}}function Br(e){cr!==null&&cr.tag===0&&(Ne&6)===0&&m0();var t=Ne;Ne|=1;var i=en.transition,l=We;try{if(en.transition=null,We=1,e)return e()}finally{We=l,en.transition=i,Ne=t,(Ne&6)===0&&or()}}function Il(){Ut=f0.current,Ke(f0)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,W2(i)),ct!==null)for(i=ct.return;i!==null;){var l=i;switch(Qa(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Qi();break;case 3:u0(),Ke(qt),Ke($t),ul();break;case 5:ll(l);break;case 4:u0();break;case 13:Ke(et);break;case 19:Ke(et);break;case 10:nl(l.type._context);break;case 22:case 23:Il()}i=i.return}if(yt=e,ct=e=hr(e.current,null),bt=Ut=t,pt=0,ui=null,Pl=wo=Rr=0,Rt=ci=null,qr!==null){for(t=0;t<qr.length;t++)if(i=qr[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,h=i.pending;if(h!==null){var y=h.next;h.next=c,l.next=y}i.pending=l}qr=null}return e}function b1(e,t){do{var i=ct;try{if(tl(),so.current=ho,uo){for(var l=tt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}uo=!1}if(Dr=0,gt=mt=tt=null,ri=!1,ii=0,ql.current=null,i===null||i.return===null){pt=1,ui=t,ct=null;break}e:{var h=e,y=i.return,k=i,C=t;if(t=bt,k.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var O=C,X=k,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var G=X.alternate;G?(X.updateQueue=G.updateQueue,X.memoizedState=G.memoizedState,X.lanes=G.lanes):(X.updateQueue=null,X.memoizedState=null)}var ce=Vc(y);if(ce!==null){ce.flags&=-257,Gc(ce,y,k,h,t),ce.mode&1&&Uc(h,O,t),t=ce,C=O;var me=t.updateQueue;if(me===null){var pe=new Set;pe.add(C),t.updateQueue=pe}else me.add(C);break e}else{if((t&1)===0){Uc(h,O,t),Fl();break e}C=Error(r(426))}}else if(Ze&&k.mode&1){var st=Vc(y);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Gc(st,y,k,h,t),Ja(c0(C,k));break e}}h=C=c0(C,k),pt!==4&&(pt=2),ci===null?ci=[h]:ci.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var D=Hc(h,C,t);vc(h,D);break e;case 1:k=C;var E=h.type,B=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(ur===null||!ur.has(B)))){h.flags|=65536,t&=-t,h.lanes|=t;var re=Wc(h,k,t);vc(h,re);break e}}h=h.return}while(h!==null)}_1(i)}catch(ge){t=ge,ct===i&&i!==null&&(ct=i=i.return);continue}break}while(!0)}function $1(){var e=xo.current;return xo.current=ho,e===null?ho:e}function Fl(){(pt===0||pt===3||pt===2)&&(pt=4),yt===null||(Rr&268435455)===0&&(wo&268435455)===0||fr(yt,bt)}function So(e,t){var i=Ne;Ne|=2;var l=$1();(yt!==e||bt!==t)&&(Dn=null,Nr(e,t));do try{vf();break}catch(c){b1(e,c)}while(!0);if(tl(),Ne=i,xo.current=l,ct!==null)throw Error(r(261));return yt=null,bt=0,pt}function vf(){for(;ct!==null;)k1(ct)}function gf(){for(;ct!==null&&!I4();)k1(ct)}function k1(e){var t=T1(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?_1(e):ct=t,ql.current=null}function _1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=uf(i,t,Ut),i!==null){ct=i;return}}else{if(i=cf(i,t),i!==null){i.flags&=32767,ct=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ct=null;return}}if(t=t.sibling,t!==null){ct=t;return}ct=t=e}while(t!==null);pt===0&&(pt=5)}function Lr(e,t,i){var l=We,c=en.transition;try{en.transition=null,We=1,yf(e,t,i,l)}finally{en.transition=c,We=l}return null}function yf(e,t,i,l){do m0();while(cr!==null);if((Ne&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(K4(e,h),e===yt&&(ct=yt=null,bt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||$o||($o=!0,M1(Ci,function(){return m0(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=en.transition,en.transition=null;var y=We;We=1;var k=Ne;Ne|=4,ql.current=null,ff(e,i),m1(i,e),B2(Fa),Ri=!!Ia,Fa=Ia=null,e.current=i,hf(i),F4(),Ne=k,We=y,en.transition=h}else e.current=i;if($o&&($o=!1,cr=e,ko=c),h=e.pendingLanes,h===0&&(ur=null),U4(i.stateNode),Bt(e,lt()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(bo)throw bo=!1,e=Rl,Rl=null,e;return(ko&1)!==0&&e.tag!==0&&m0(),h=e.pendingLanes,(h&1)!==0?e===Bl?di++:(di=0,Bl=e):di=0,or(),null}function m0(){if(cr!==null){var e=fu(ko),t=en.transition,i=We;try{if(en.transition=null,We=16>e?16:e,cr===null)var l=!1;else{if(e=cr,cr=null,ko=0,(Ne&6)!==0)throw Error(r(331));var c=Ne;for(Ne|=4,he=e.current;he!==null;){var h=he,y=h.child;if((he.flags&16)!==0){var k=h.deletions;if(k!==null){for(var C=0;C<k.length;C++){var O=k[C];for(he=O;he!==null;){var X=he;switch(X.tag){case 0:case 11:case 15:si(8,X,h)}var J=X.child;if(J!==null)J.return=X,he=J;else for(;he!==null;){X=he;var G=X.sibling,ce=X.return;if(u1(X),X===O){he=null;break}if(G!==null){G.return=ce,he=G;break}he=ce}}}var me=h.alternate;if(me!==null){var pe=me.child;if(pe!==null){me.child=null;do{var st=pe.sibling;pe.sibling=null,pe=st}while(pe!==null)}}he=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,he=y;else e:for(;he!==null;){if(h=he,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:si(9,h,h.return)}var D=h.sibling;if(D!==null){D.return=h.return,he=D;break e}he=h.return}}var E=e.current;for(he=E;he!==null;){y=he;var B=y.child;if((y.subtreeFlags&2064)!==0&&B!==null)B.return=y,he=B;else e:for(y=E;he!==null;){if(k=he,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:yo(9,k)}}catch(ge){it(k,k.return,ge)}if(k===y){he=null;break e}var re=k.sibling;if(re!==null){re.return=k.return,he=re;break e}he=k.return}}if(Ne=c,or(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Ai,e)}catch{}l=!0}return l}finally{We=i,en.transition=t}}return!1}function z1(e,t,i){t=c0(i,t),t=Hc(e,t,1),e=lr(e,t,1),t=Mt(),e!==null&&(D0(e,1,t),Bt(e,t))}function it(e,t,i){if(e.tag===3)z1(e,e,i);else for(;t!==null;){if(t.tag===3){z1(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ur===null||!ur.has(l))){e=c0(i,e),e=Wc(t,e,1),t=lr(t,e,1),e=Mt(),t!==null&&(D0(t,1,e),Bt(t,e));break}}t=t.return}}function xf(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=Mt(),e.pingedLanes|=e.suspendedLanes&i,yt===e&&(bt&i)===i&&(pt===4||pt===3&&(bt&130023424)===bt&&500>lt()-Dl?Nr(e,0):Pl|=i),Bt(e,t)}function S1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ei,Ei<<=1,(Ei&130023424)===0&&(Ei=4194304)));var i=Mt();e=En(e,t),e!==null&&(D0(e,t,i),Bt(e,i))}function wf(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),S1(e,i)}function bf(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(t),S1(e,i)}var T1;T1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||qt.current)Dt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Dt=!1,sf(e,t,i);Dt=(e.flags&131072)!==0}else Dt=!1,Ze&&(t.flags&1048576)!==0&&ac(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;vo(e,t),e=t.pendingProps;var c=n0(t,$t.current);s0(t,i),c=fl(null,t,l,e,c,i);var h=hl();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(l)?(h=!0,Ki(t)):h=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ol(t),c.updater=mo,t.stateNode=c,c._reactInternals=t,xl(t,l,e,i),t=kl(null,t,l,!0,h,i)):(t.tag=0,Ze&&h&&Xa(t),Tt(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=kf(l),e=dn(l,e),c){case 0:t=$l(null,t,l,e,i);break e;case 1:t=Jc(null,t,l,e,i);break e;case 11:t=Yc(null,t,l,e,i);break e;case 14:t=Xc(null,t,l,dn(l.type,e),i);break e}throw Error(r(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:dn(l,c),$l(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:dn(l,c),Jc(e,t,l,c,i);case 3:e:{if(e1(t),e===null)throw Error(r(387));l=t.pendingProps,h=t.memoizedState,c=h.element,pc(e,t),ao(t,l,null,i);var y=t.memoizedState;if(l=y.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){c=c0(Error(r(423)),t),t=t1(e,t,l,i,c);break e}else if(l!==c){c=c0(Error(r(424)),t),t=t1(e,t,l,i,c);break e}else for(Wt=nr(t.stateNode.containerInfo.firstChild),Ht=t,Ze=!0,cn=null,i=hc(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(o0(),l===c){t=Pn(e,t,i);break e}Tt(e,t,l,i)}t=t.child}return t;case 5:return yc(t),e===null&&Za(t),l=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,y=c.children,Ha(l,c)?y=null:h!==null&&Ha(l,h)&&(t.flags|=32),Zc(e,t),Tt(e,t,y,i),t.child;case 6:return e===null&&Za(t),null;case 13:return n1(e,t,i);case 4:return al(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=a0(t,null,l,i):Tt(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:dn(l,c),Yc(e,t,l,c,i);case 7:return Tt(e,t,t.pendingProps,i),t.child;case 8:return Tt(e,t,t.pendingProps.children,i),t.child;case 12:return Tt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,h=t.memoizedProps,y=c.value,Ye(ro,l._currentValue),l._currentValue=y,h!==null)if(un(h.value,y)){if(h.children===c.children&&!qt.current){t=Pn(e,t,i);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var k=h.dependencies;if(k!==null){y=h.child;for(var C=k.firstContext;C!==null;){if(C.context===l){if(h.tag===1){C=qn(-1,i&-i),C.tag=2;var O=h.updateQueue;if(O!==null){O=O.shared;var X=O.pending;X===null?C.next=C:(C.next=X.next,X.next=C),O.pending=C}}h.lanes|=i,C=h.alternate,C!==null&&(C.lanes|=i),rl(h.return,i,t),k.lanes|=i;break}C=C.next}}else if(h.tag===10)y=h.type===t.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=i,k=y.alternate,k!==null&&(k.lanes|=i),rl(y,i,t),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===t){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}Tt(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,s0(t,i),c=Zt(c),l=l(c),t.flags|=1,Tt(e,t,l,i),t.child;case 14:return l=t.type,c=dn(l,t.pendingProps),c=dn(l.type,c),Xc(e,t,l,c,i);case 15:return Qc(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:dn(l,c),vo(e,t),t.tag=1,Pt(l)?(e=!0,Ki(t)):e=!1,s0(t,i),Ic(t,l,c),xl(t,l,c,i),kl(null,t,l,!0,e,i);case 19:return i1(e,t,i);case 22:return Kc(e,t,i)}throw Error(r(156,t.tag))};function M1(e,t){return lu(e,t)}function $f(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,t,i,l){return new $f(e,t,i,l)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kf(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ce)return 11;if(e===Ge)return 14}return 2}function hr(e,t){var i=e.alternate;return i===null?(i=tn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function To(e,t,i,l,c,h){var y=2;if(l=e,typeof e=="function")Hl(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case H:return Or(i.children,c,h,t);case Z:y=8,c|=8;break;case V:return e=tn(12,i,t,c|2),e.elementType=V,e.lanes=h,e;case He:return e=tn(13,i,t,c),e.elementType=He,e.lanes=h,e;case Fe:return e=tn(19,i,t,c),e.elementType=Fe,e.lanes=h,e;case xe:return Mo(i,c,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:y=10;break e;case ze:y=9;break e;case Ce:y=11;break e;case Ge:y=14;break e;case Ue:y=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=tn(y,i,t,c),t.elementType=e,t.type=l,t.lanes=h,t}function Or(e,t,i,l){return e=tn(7,e,l,t),e.lanes=i,e}function Mo(e,t,i,l){return e=tn(22,e,l,t),e.elementType=xe,e.lanes=i,e.stateNode={isHidden:!1},e}function Wl(e,t,i){return e=tn(6,e,null,t),e.lanes=i,e}function Ul(e,t,i){return t=tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Vl(e,t,i,l,c,h,y,k,C){return e=new _f(e,t,i,k,C),t===1?(t=1,h===!0&&(t|=8)):t=0,h=tn(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ol(h),e}function zf(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function C1(e){if(!e)return ir;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Pt(i))return rc(e,i,t)}return t}function A1(e,t,i,l,c,h,y,k,C){return e=Vl(i,l,!0,e,c,h,y,k,C),e.context=C1(null),i=e.current,l=Mt(),c=dr(i),h=qn(l,c),h.callback=t??null,lr(i,h,c),e.current.lanes=c,D0(e,c,l),Bt(e,l),e}function Co(e,t,i,l){var c=t.current,h=Mt(),y=dr(c);return i=C1(i),t.context===null?t.context=i:t.pendingContext=i,t=qn(h,y),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=lr(c,t,y),e!==null&&(mn(e,c,y,h),oo(e,c,y)),y}function Ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Gl(e,t){j1(e,t),(e=e.alternate)&&j1(e,t)}function Sf(){return null}var E1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}jo.prototype.render=Yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));Co(e,t,null,null)},jo.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Br(function(){Co(null,e,null,null)}),t[Mn]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Jn.length&&t!==0&&t<Jn[i].priority;i++);Jn.splice(i,0,e),i===0&&yu(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function q1(){}function Tf(e,t,i,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var O=Ao(y);h.call(O)}}var y=A1(t,l,e,0,null,!1,!1,"",q1);return e._reactRootContainer=y,e[Mn]=y.current,X0(e.nodeType===8?e.parentNode:e),Br(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var k=l;l=function(){var O=Ao(C);k.call(O)}}var C=Vl(e,0,!1,null,null,!1,!1,"",q1);return e._reactRootContainer=C,e[Mn]=C.current,X0(e.nodeType===8?e.parentNode:e),Br(function(){Co(t,C,i,l)}),C}function qo(e,t,i,l,c){var h=i._reactRootContainer;if(h){var y=h;if(typeof c=="function"){var k=c;c=function(){var C=Ao(y);k.call(C)}}Co(t,y,e,c)}else y=Tf(i,t,e,c,l);return Ao(y)}hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=P0(t.pendingLanes);i!==0&&(xa(t,i|1),Bt(t,lt()),(Ne&6)===0&&(h0=lt()+500,or()))}break;case 13:Br(function(){var l=En(e,1);if(l!==null){var c=Mt();mn(l,e,1,c)}}),Gl(e,1)}},wa=function(e){if(e.tag===13){var t=En(e,134217728);if(t!==null){var i=Mt();mn(t,e,134217728,i)}Gl(e,134217728)}},mu=function(e){if(e.tag===13){var t=dr(e),i=En(e,t);if(i!==null){var l=Mt();mn(i,e,t,l)}Gl(e,t)}},pu=function(){return We},vu=function(e,t){var i=We;try{return We=e,t()}finally{We=i}},A0=function(e,t,i){switch(t){case"input":if(Sn(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=Xi(l);if(!c)throw Error(r(90));ln(l),Sn(l,c)}}}break;case"textarea":Vn(e,i);break;case"select":t=i.value,t!=null&&It(e,!!i.multiple,t,!1)}},eu=Ol,tu=Br;var Mf={usingClientEntryPoint:!1,Events:[Z0,e0,Xi,Vr,Js,Ol]},fi={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cf={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Sf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Ai=Po.inject(Cf),pn=Po}catch{}}return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf,Nt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(r(200));return zf(e,t,null,i)},Nt.createRoot=function(e,t){if(!Xl(e))throw Error(r(299));var i=!1,l="",c=E1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Vl(e,1,!1,null,null,i,!1,l,c),e[Mn]=t.current,X0(e.nodeType===8?e.parentNode:e),new Yl(t)},Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e},Nt.flushSync=function(e){return Br(e)},Nt.hydrate=function(e,t,i){if(!Eo(t))throw Error(r(200));return qo(null,e,t,!0,i)},Nt.hydrateRoot=function(e,t,i){if(!Xl(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,h="",y=E1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=A1(t,null,e,1,i??null,c,!1,h,y),e[Mn]=t.current,X0(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new jo(t)},Nt.render=function(e,t,i){if(!Eo(t))throw Error(r(200));return qo(null,e,t,!1,i)},Nt.unmountComponentAtNode=function(e){if(!Eo(e))throw Error(r(40));return e._reactRootContainer?(Br(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1},Nt.unstable_batchedUpdates=Ol,Nt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!Eo(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return qo(e,t,i,!1,l)},Nt.version="18.3.1-next-f1338f8080-20240426",Nt}var I1;function Bf(){if(I1)return Zl.exports;I1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Zl.exports=Rf(),Zl.exports}var F1;function Nf(){if(F1)return Do;F1=1;var o=Bf();return Do.createRoot=o.createRoot,Do.hydrateRoot=o.hydrateRoot,Do}var Lf=Nf();const Of=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,If=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Ff=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Hf=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,Wf=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Uf=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Vf=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Gf=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Yf=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Xf=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
---
`,Qf=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Kf=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,Zf=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,Jf=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,eh=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
---
`,th=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,nh=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,rh=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,ih=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,oh=`---
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
`,sh=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,uh=`---
label: "Quadratic Function"
labelPl: "Funkcja kwadratowa"
scope: funkcje
section: LP
level: 2
x: 390
y: 700
---
`,ch=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,dh=`---
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
`,hh=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
`,mh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,ph=`---
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
`,gh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,yh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,xh=`---
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
`,bh=`---
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
`,_h=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,zh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,Sh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,Th=`---
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
`,Ch=`---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
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
`,jh=`---
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
`,Rh=`---
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
`,Nh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Lh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Oh=`---
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
`,Hh=`---
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
---
`,Gh=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
`,Yh=`---
options:
  - "(−∞, −2] ∪ [4, +∞)"
  - "[−2, 4]"
  - "(−∞, −2)"
  - "(4, +∞)"
correct: 0
hint: "Nierówność |x−1| ≥ 3 daje x−1 ≥ 3 lub x−1 ≤ −3."
---

Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:
`,Xh=`---
options:
  - "$|x| = -x$ dla $x < 0$"
  - "$|x| = x$ dla każdego $x$"
  - "$|x| = -x$ dla $x > 0$"
  - "$|x|$ może być ujemna"
correct: 0
hint: "Wartość bezwzględna to odległość od zera — zawsze nieujemna. Dla $x < 0$: $|x| = -x > 0$."
---

Które zdanie o wartości bezwzględnej jest prawdziwe?
`,Qh=`---
options:
  - "$x \\in (-3, 3)$"
  - "$x \\in [-3, 3]$"
  - "$x \\in (-\\infty, -3) \\cup (3, +\\infty)$"
  - "$x \\in \\{-3, 3\\}$"
correct: 0
hint: "$|x| < 3$ oznacza $-3 < x < 3$. To przedział otwarty."
---

Zbiór rozwiązań nierówności $|x| < 3$ to:
`,Kh=`---
options:
  - "2"
  - "4"
  - "1/2"
  - "3"
correct: 0
hint: "a = (6−2)/(3−1) = 4/2 = 2."
---

Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:
`,Zh=`---
options:
  - "$\\sqrt{13}$"
  - "$\\sqrt{7}$"
  - "$5$"
  - "$13$"
correct: 0
hint: "$d = \\sqrt{(3-1)^2 + (5-2)^2} = \\sqrt{4+9} = \\sqrt{13}$."
---

Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:
`,Jh=`---
options:
  - "$(2, 3{,}5)$"
  - "$(4, 7)$"
  - "$(1, 3)$"
  - "$(3, 2{,}5)$"
correct: 0
hint: "Środek odcinka $AB$: $S = \\left(\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2}\\right) = \\left(\\frac{0+4}{2}, \\frac{2+5}{2}\\right) = (2, 3{,}5)$."
---

Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:
`,em=`---
options:
  - "$24$"
  - "$48$"
  - "$14$"
  - "$12$"
correct: 0
hint: "$P = \\frac{d_1 \\cdot d_2}{2} = \\frac{8 \\cdot 6}{2} = \\frac{48}{2} = 24$."
---

Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:
`,tm=`---
options:
  - "$24\\ \\text{cm}^2$"
  - "$20\\ \\text{cm}^2$"
  - "$12\\ \\text{cm}^2$"
  - "$48\\ \\text{cm}^2$"
correct: 0
hint: "Pole prostokąta = $a \\cdot b = 6 \\cdot 4 = 24\\ \\text{cm}^2$."
---

Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:
`,nm=`---
options:
  - "$9\\pi\\ \\text{cm}^2$"
  - "$6\\pi\\ \\text{cm}^2$"
  - "$3\\pi\\ \\text{cm}^2$"
  - "$18\\pi\\ \\text{cm}^2$"
correct: 0
hint: "Pole koła = $\\pi r^2 = \\pi \\cdot 3^2 = 9\\pi\\ \\text{cm}^2$."
---

Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:
`,rm=`---
options:
  - "155"
  - "150"
  - "145"
  - "160"
correct: 0
hint: "S₁₀ = (10/2)·(2·2 + 9·3) = 5·31 = 155."
---

Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:
`,im=`---
options:
  - "$48$"
  - "$24$"
  - "$96$"
  - "$16$"
correct: 0
hint: "Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$. $a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$."
---

Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:
`,om=`---
options:
  - "$S_{10} = 55$"
  - "$S_{10} = 50$"
  - "$S_{10} = 45$"
  - "$S_{10} = 100$"
correct: 0
hint: "Suma $n$ wyrazów ciągu arytm.: $S_n = \\frac{n(a_1 + a_n)}{2}$. $a_{10} = 10$, $S_{10} = \\frac{10 \\cdot (1+10)}{2} = 55$."
---

Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:
`,am=`---
options:
  - "1/4"
  - "1/8"
  - "3/8"
  - "1/2"
correct: 0
hint: "C(4,3)·(1/2)³·(1/2)¹ = 4/16 = 1/4."
---

Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:
`,lm=`---
options:
  - "$\\binom{n}{k} p^k (1-p)^{n-k}$"
  - "$p^k (1-p)^{n-k}$"
  - "$\\binom{n}{k} p^{n-k} (1-p)^k$"
  - "$n \\cdot p^k$"
correct: 0
hint: "Wzór Bernoulliego: $P(X=k) = \\binom{n}{k} p^k q^{n-k}$, gdzie $q = 1-p$."
---

W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:
`,sm=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{1}{8}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "$P(X=2) = \\binom{3}{2} \\cdot (\\frac{1}{2})^2 \\cdot \\frac{1}{2} = 3 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:
`,um=`---
options:
  - "10"
  - "5"
  - "20"
  - "15"
correct: 0
hint: "C(5,2) = 5!/(2!·3!) = 10."
---

Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:
`,cm=`---
options:
  - "$a^3 + 3a^2b + 3ab^2 + b^3$"
  - "$a^3 + b^3$"
  - "$a^3 - 3a^2b + 3ab^2 - b^3$"
  - "$3a^2b + 3ab^2$"
correct: 0
hint: "Wzór dwumianowy dla $n=3$: $(a+b)^3 = \\binom{3}{0}a^3 + \\binom{3}{1}a^2b + \\binom{3}{2}ab^2 + \\binom{3}{3}b^3$."
---

Rozwiń $(a + b)^3$:
`,dm=`---
options:
  - "$\\binom{n}{k} a^{n-k} b^k$"
  - "$\\binom{n}{k} a^k b^{n-k}$"
  - "$n! \\cdot a^{n-k} b^k$"
  - "$\\binom{k}{n} a^{n-k} b^k$"
correct: 0
hint: "$(k+1)$-ty wyraz (od $k=0$) rozwinięcia $(a+b)^n$: $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$."
---

Wyraz ogólny rozwinięcia $(a+b)^n$ to:
`,fm=`---
options:
  - "(x−2)²+(y+1)²=9"
  - "(x+2)²+(y−1)²=9"
  - "(x−2)²+(y−1)²=9"
  - "(x+2)²+(y+1)²=3"
correct: 0
hint: "Wzór: (x−a)²+(y−b)²=r². Tu a=2, b=−1, r=3."
---

Okrąg o środku (2,−1) i promieniu 3 ma równanie:
`,hm=`---
options:
  - "$(x-2)^2 + (y+1)^2 = 9$"
  - "$(x+2)^2 + (y-1)^2 = 9$"
  - "$(x-2)^2 + (y+1)^2 = 3$"
  - "$(x+2)^2 + (y-1)^2 = 3$"
correct: 0
hint: "Równanie okręgu o środku $(a, b)$ i promieniu $r$: $(x-a)^2 + (y-b)^2 = r^2$. Tu: $(x-2)^2+(y+1)^2=9$."
---

Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:
`,mm=`---
options:
  - "Środek $(1, -2)$, promień $3$"
  - "Środek $(-1, 2)$, promień $3$"
  - "Środek $(1, -2)$, promień $9$"
  - "Środek $(-1, 2)$, promień $9$"
correct: 0
hint: "$(x-1)^2 + (y+2)^2 = 9$: środek $(1, -2)$, promień $\\sqrt{9} = 3$."
---

Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:
`,pm=`---
options:
  - "10"
  - "15"
  - "20"
  - "60"
correct: 0
hint: "C(5,3) = 5!/(3!·2!) = 10."
---

Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?
`,vm=`---
options:
  - "$10$"
  - "$20$"
  - "$60$"
  - "$5$"
correct: 0
hint: "$\\binom{5}{2} = \\frac{5!}{2!\\cdot 3!} = \\frac{20}{2} = 10$."
---

Ile jest sposobów wybrania 2 osób z 5?
`,gm=`---
options:
  - "$\\binom{n}{k} = \\binom{n}{n-k}$"
  - "$\\binom{n}{k} = \\binom{n+1}{k}$"
  - "$\\binom{n}{k} = k \\cdot \\binom{n}{k-1}$"
  - "$\\binom{n}{k} = n \\cdot \\binom{n-1}{k}$"
correct: 0
hint: "Symetria kombinacji: wybór $k$ elementów jest równoznaczny z pominięciem $n-k$. Więc $\\binom{n}{k} = \\binom{n}{n-k}$."
---

Który wzór jest prawdziwą własnością symbolu Newtona?
`,ym=`---
options:
  - "5"
  - "7"
  - "1"
  - "√5"
correct: 0
hint: "|z| = √(3²+4²) = √25 = 5."
---

Moduł liczby zespolonej z = 3 + 4i wynosi:
`,xm=`---
options:
  - "$2 + 3i$"
  - "$2 - 3i$"
  - "$-2 + 3i$"
  - "$-2 - 3i$"
correct: 0
hint: "$(1+2i) + (1+i) = (1+1) + (2+1)i = 2 + 3i$."
---

Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$
`,wm=`---
options:
  - "$\\sqrt{5}$"
  - "$5$"
  - "$3$"
  - "$\\sqrt{3}$"
correct: 0
hint: "$|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$."
---

Moduł liczby zespolonej $z = 1 + 2i$ wynosi:
`,bm=`---
options:
  - "0.2"
  - "0.9"
  - "0.5"
  - "0.1"
correct: 0
hint: "P(A∩B) = P(A)·P(B|A) = 0.4·0.5 = 0.2."
---

P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =
`,$m=`---
options:
  - "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$"
  - "$P(A|B) = P(A) \\cdot P(B)$"
  - "$P(A|B) = P(A) + P(B)$"
  - "$P(A|B) = \\frac{P(A)}{P(B)}$"
correct: 0
hint: "Definicja prawdopodobieństwa warunkowego: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (dla $P(B) > 0$)."
---

Wzór na prawdopodobieństwo warunkowe $P(A|B)$:
`,km=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{5}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Karty $\\leq 4$: {1,2,3,4}. Parzyste wśród nich: {2,4}. $P = \\frac{2}{4} = \\frac{1}{2}$."
---

Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:
`,_m=`---
options:
  - "a=3, b=2"
  - "a=9, b=4"
  - "a=2, b=3"
  - "a=√3, b=√2"
correct: 0
hint: "Standardowa postać: x²/a² + y²/b² = 1."
---

Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:
`,zm=`---
options:
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
  - "$y = ax^2$"
  - "$(x-h)^2 + (y-k)^2 = r^2$"
correct: 0
hint: "Równanie elipsy o półosiach $a$ (pozioma) i $b$ (pionowa): $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
---

Równanie elipsy o środku w początku układu współrzędnych to:
`,Sm=`---
options:
  - "$y = \\frac{1}{4p}x^2$"
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$x^2 + y^2 = r^2$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
correct: 0
hint: "Parabola z ogniskiem w $(0,p)$: $y = \\frac{x^2}{4p}$. Jest to krzywa stożkowa będąca przekrojem stożka płaszczyzną równoległą do tworzącej."
---

Które równanie opisuje parabolę jako krzywą stożkową?
`,Tm=`---
options:
  - "6"
  - "3"
  - "9"
  - "27"
correct: 0
hint: "3! = 6 permutacji."
---

Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?
`,Mm=`---
options:
  - "$8$"
  - "$6$"
  - "$3$"
  - "$12$"
correct: 0
hint: "Zasada mnożenia: $2 \\times 4 = 8$ możliwości (każda koszulka z każdą spodnicą)."
---

Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?
`,Cm=`---
options:
  - "$12$"
  - "$6$"
  - "$3$"
  - "$24$"
correct: 0
hint: "Zasada mnożenia: $3 \\times 4 = 12$ tras (3 drogi z A do B, 4 z B do C)."
---

Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?
`,Am=`---
options:
  - "5"
  - "3"
  - "7"
  - "25/5"
correct: 0
hint: "Sortujesz: 1,3,5,7,9. Środkowy element to 5."
---

Mediana zbioru {3, 7, 1, 9, 5} wynosi:
`,jm=`---
options:
  - "$7$"
  - "$6$"
  - "$8$"
  - "$7{,}5$"
correct: 0
hint: "Mediana to środkowa wartość po posortowaniu. Posortowane: 3, 5, 7, 9, 11. Środkowa to 7."
---

Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:
`,Em=`---
options:
  - "$6$"
  - "$5$"
  - "$7$"
  - "$8$"
correct: 0
hint: "Średnia arytmetyczna: suma wszystkich / liczba elementów. $(4+6+8+6)/4 = 24/4 = 6$."
---

Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:
`,qm=`---
options:
  - "(−∞,−1) ∪ (1,+∞)"
  - "(−1, 1)"
  - "(0, +∞)"
  - "(−∞, 0)"
correct: 0
hint: "f'(x) = 3x²−3 = 3(x−1)(x+1). f'>0 gdy |x|>1."
---

Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:
`,Pm=`---
options:
  - "Funkcja rośnie"
  - "Funkcja maleje"
  - "Funkcja jest stała"
  - "Funkcja ma minimum"
correct: 0
hint: "Gdy $f'(x) > 0$ na przedziale, funkcja jest rosnąca na tym przedziale."
---

Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:
`,Dm=`---
options:
  - "$x = 1$ (minimum)"
  - "$x = 1$ (maksimum)"
  - "$x = -1$ (minimum)"
  - "$x = 0$ (minimum)"
correct: 0
hint: "$f'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f''(x) = 2 > 0$, więc to minimum."
---

Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:
`,Rm=`---
options:
  - "$3x^2 - 4$"
  - "$3x^2 + 4$"
  - "$x^2 - 4$"
  - "$3x^2$"
correct: 0
hint: "Reguła potęgi: $(x^n)' = n \\cdot x^{n-1}$. Ponadto $(x^3)' = 3x^2$ i $(-4x)' = -4$."
---

Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:
`,Bm=`---
options:
  - "$\\cos x$"
  - "$-\\cos x$"
  - "$-\\sin x$"
  - "$\\sin x$"
correct: 0
hint: "Podstawowa reguła: $(\\sin x)' = \\cos x$."
---

Pochodna funkcji $f(x) = \\sin x$ wynosi:
`,Nm=`---
options:
  - "$6x^2 - 2$"
  - "$6x^2 + 2$"
  - "$2x^3 - 2x$"
  - "$6x - 2$"
correct: 0
hint: "$(2x^3)' = 6x^2$, $(-2x)' = -2$. Łącznie: $6x^2 - 2$."
---

Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:
`,Lm=`---
options:
  - "5"
  - "10"
  - "2.5"
  - "0.5"
correct: 0
hint: "E(X) = n·p = 10·0.5 = 5."
---

W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:
`,Om=`---
options:
  - "$np$"
  - "$np(1-p)$"
  - "$\\sqrt{np(1-p)}$"
  - "$\\frac{1}{np}$"
correct: 0
hint: "Wartość oczekiwana rozkładu dwumianowego $B(n,p)$: $E(X) = np$."
---

Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:
`,Im=`---
options:
  - "Symetryczny dzwon wokół średniej"
  - "Wykładniczy wzrost"
  - "Jednostajny prostokąt"
  - "Asymetryczny skok w górę"
correct: 0
hint: "Rozkład normalny (Gaussa) ma charakterystyczny kształt dzwonu, symetryczny względem średniej $\\mu$."
---

Wykres rozkładu normalnego ma kształt:
`,Fm=`---
options:
  - "(x−2)(x−3)"
  - "(x+2)(x+3)"
  - "(x−1)(x−6)"
  - "(x−2)(x+3)"
correct: 0
hint: "Szukasz dwóch liczb, których suma = −5 i iloczyn = 6."
---

Rozkład na czynniki: x² − 5x + 6 =
`,Hm=`---
options:
  - "$(x-4)(x+2)$"
  - "$(x+4)(x-2)$"
  - "$(x-4)(x-2)$"
  - "$(x+4)(x+2)$"
correct: 0
hint: "Szukasz dwóch liczb o sumie $-2$ i iloczynie $-8$: to $-4$ i $2$."
---

Rozłóż na czynniki: $x^2 - 2x - 8 =$
`,Wm=`---
options:
  - "$2x(x - 3)$"
  - "$2(x^2 - 3)$"
  - "$x(2x - 3)$"
  - "$2x^2 - 6x$"
correct: 0
hint: "Wyłącz wspólny czynnik $2x$: $2x^2 - 6x = 2x(x - 3)$."
---

Rozłóż na czynniki: $2x^2 - 6x =$
`,Um=`---
options:
  - "2x+2"
  - "2x+1"
  - "2x²+2"
  - "x+2"
correct: 0
hint: "f(g(x)) = f(x+1) = 2(x+1) = 2x+2."
---

Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =
`,Vm=`---
options:
  - "$4x^2 - 1$"
  - "$2x^2 - 1$"
  - "$4x - 1$"
  - "$2x - 1$"
correct: 0
hint: "$(f \\circ g)(x) = f(g(x)) = f(2x) = (2x)^2 - 1 = 4x^2 - 1$."
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:
`,Gm=`---
options:
  - "$2x^2 - 2$"
  - "$4x^2 - 1$"
  - "$2x - 1$"
  - "$x^2 - 2$"
correct: 0
hint: "$(g \\circ f)(x) = g(f(x)) = g(x^2 - 1) = 2(x^2-1) = 2x^2 - 2$. Złożenia nie są przemienne!"
---

Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:
`,Ym=`---
options:
  - "{(1,2),(1,3),(2,4)}"
  - "{(1,2),(2,3),(3,4)}"
  - "{(1,1),(2,2),(3,3)}"
  - "{(1,2),(2,1)}"
correct: 0
hint: "Funkcja przypisuje każdemu argumentowi dokładnie jedną wartość. Para (1,2) i (1,3) — jeden argument, dwie wartości."
---

Która z poniższych relacji NIE jest funkcją?
`,Xm=`---
options:
  - "Każdemu argumentowi odpowiada dokładnie jedna wartość"
  - "Każdej wartości odpowiada dokładnie jeden argument"
  - "Funkcja musi być rosnąca"
  - "Dziedzina musi być zbiorem liczb rzeczywistych"
correct: 0
hint: "Funkcja to przyporządkowanie: każdemu $x$ z dziedziny odpowiada dokładnie jedno $f(x)$."
---

Funkcja to takie przyporządkowanie, że:
`,Qm=`---
options:
  - "$10$"
  - "$-10$"
  - "$7$"
  - "$5$"
correct: 0
hint: "Podstawiamy $x=3$: $f(3) = 2 \\cdot 3 + 4 = 6 + 4 = 10$."
---

Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:
`,Km=`---
options:
  - "rosnąca na całej dziedzinie"
  - "malejąca na całej dziedzinie"
  - "stała"
  - "rosnąca tylko dla x > 0"
correct: 0
hint: "Podstawa 2 > 1, więc funkcja wykładnicza jest rosnąca."
---

Funkcja f(x) = 2ˣ jest:
`,Zm=`---
options:
  - "Rosnąca dla $a > 1$, malejąca dla $0 < a < 1$"
  - "Zawsze rosnąca"
  - "Zawsze malejąca"
  - "Rosnąca dla $a < 0$"
correct: 0
hint: "$f(x) = a^x$: jeśli $a > 1$, funkcja rośnie; jeśli $0 < a < 1$, maleje."
---

Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:
`,Jm=`---
options:
  - "$(0, 1)$"
  - "$(1, 0)$"
  - "$(0, 0)$"
  - "$(1, a)$"
correct: 0
hint: "Dla każdego $a \\neq 0$: $a^0 = 1$, więc wykres przecina oś $Oy$ w punkcie $(0, 1)$."
---

Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:
`,ep=`---
options:
  - "$k > \\frac{3}{2}$"
  - "$k < \\frac{3}{2}$"
  - "$k > 1$"
  - "$k < 0$"
correct: 0
hint: "Funkcja liniowa jest malejąca gdy współczynnik kierunkowy $a < 0$, czyli $-2k + 3 < 0$."
---

Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:
`,tp=`---
options:
  - "Rosnąca"
  - "Malejąca"
  - "Stała"
  - "Parzysta"
correct: 0
hint: "Dla $f(x) = 2x - 1$ współczynnik kierunkowy $a = 2 > 0$, więc funkcja jest rosnąca."
---

Funkcja $f(x) = 2x - 1$ jest:
`,np=`---
options:
  - "$(0, -3)$ i $(3/2, 0)$"
  - "$(0, 3)$ i $(3/2, 0)$"
  - "$(0, -3)$ i $(-3/2, 0)$"
  - "$(3, 0)$ i $(0, 3/2)$"
correct: 0
hint: "Przecięcie z $Oy$: $x=0 \\Rightarrow f(0) = -3$. Z $Ox$: $2x-3=0 \\Rightarrow x = 3/2$."
---

Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:
`,rp=`---
options:
  - "(2, +∞)"
  - "[2, +∞)"
  - "(−∞, 2)"
  - "R"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: x − 2 > 0."
---

Dziedzina funkcji f(x) = log(x − 2) to:
`,ip=`---
options:
  - "$(1, 0)$"
  - "$(0, 1)$"
  - "$(0, 0)$"
  - "$(a, 1)$"
correct: 0
hint: "Dla każdej podstawy $a$: $\\log_a 1 = 0$, więc wykres przechodzi przez $(1, 0)$."
---

Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:
`,op=`---
options:
  - "$(0, +\\infty)$"
  - "$(-\\infty, +\\infty)$"
  - "$(1, +\\infty)$"
  - "$[0, +\\infty)$"
correct: 0
hint: "Logarytm jest określony tylko dla argumentów dodatnich: $\\log_a x$ istnieje $\\Leftrightarrow x > 0$."
---

Dziedzina funkcji $f(x) = \\log_a x$ to:
`,ap=`---
options:
  - "3"
  - "1"
  - "2"
  - "0"
correct: 0
hint: "W(x) = x(x−1)(x+1). Trzy miejsca zerowe: 0, 1, −1."
---

Wielomian W(x) = x³ − x ma ile miejsc zerowych?
`,lp=`---
options:
  - "Parzysta"
  - "Nieparzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Rosnąca"
correct: 0
hint: "$f(-x) = (-x)^4 + 2(-x)^2 = x^4 + 2x^2 = f(x)$, więc funkcja jest parzysta."
---

Funkcja $f(x) = x^4 + 2x^2$ jest:
`,sp=`---
options:
  - "Nieparzysta"
  - "Parzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Stała"
correct: 0
hint: "$f(-x) = (-x)^3 = -x^3 = -f(x)$, więc funkcja jest nieparzysta."
---

Funkcja $f(x) = x^3$ jest:
`,up=`---
options:
  - "(2, −1)"
  - "(−2, 1)"
  - "(2, 1)"
  - "(4, 3)"
correct: 0
hint: "p = −b/(2a) = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
---

Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:
`,cp=`---
options:
  - "$(1, -4)$"
  - "$(-1, -4)$"
  - "$(1, 4)$"
  - "$(2, 0)$"
correct: 0
hint: "Wierzchołek paraboli $f(x) = ax^2 + bx + c$: $p = -b/(2a) = 2/2 = 1$, $q = f(1) = 1 - 2 - 3 = -4$."
---

Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:
`,dp=`---
options:
  - "W górę (ramiona skierowane w górę)"
  - "W dół (ramiona skierowane w dół)"
  - "Jest pozioma"
  - "Nie jest parabolą"
correct: 0
hint: "Gdy $a > 0$, parabola ma ramiona skierowane w górę (minimum). Gdy $a < 0$ — w dół."
---

Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:
`,fp=`---
options:
  - "π"
  - "2π"
  - "π/2"
  - "4π"
correct: 0
hint: "Podstawowy okres sin to 2π. Przy sin(2x) dzielisz przez 2: T = π."
---

Okres funkcji f(x) = sin(2x) wynosi:
`,hp=`---
options:
  - "$2\\pi$"
  - "$\\pi$"
  - "$\\frac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Funkcje $\\sin$ i $\\cos$ mają okres $2\\pi$ (pełny obrót)."
---

Okres funkcji $f(x) = \\sin x$ wynosi:
`,mp=`---
options:
  - "$[-1, 1]$"
  - "$[0, 1]$"
  - "$\\mathbb{R}$"
  - "$[0, 2\\pi]$"
correct: 0
hint: "Zbiór wartości funkcji $\\sin x$ to $[-1, 1]$ — sinus jest zawsze między $-1$ a $1$."
---

Zbiór wartości funkcji $f(x) = \\sin x$ to:
`,pp=`---
options:
  - "3/4"
  - "9/12"
  - "4/5"
  - "7/9"
correct: 0
hint: "Dzielisz licznik i mianownik przez NWD(45,60) = 15."
---

Uproszczona postać ułamka 45/60 to:
`,vp=`---
options:
  - "$\\frac{7}{12}$"
  - "$\\frac{7}{6}$"
  - "$\\frac{2}{6}$"
  - "$\\frac{5}{12}$"
correct: 0
hint: "Wspólny mianownik to 12: $\\frac{1}{4} = \\frac{3}{12}$, $\\frac{1}{3} = \\frac{4}{12}$. Suma: $\\frac{7}{12}$."
---

Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$
`,gp=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{6}{8}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Mnożenie ułamków: licznik przez licznik, mianownik przez mianownik. $\\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
---

Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$
`,yp=`---
options:
  - "9"
  - "6"
  - "18"
  - "3"
correct: 0
hint: "S = a₁/(1−q) = 6/(1−1/3) = 6/(2/3) = 9."
---

Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:
`,xp=`---
options:
  - "$\\frac{a_1}{1 - q}$"
  - "$\\frac{a_1}{1 + q}$"
  - "$a_1 \\cdot q$"
  - "$\\frac{a_1 q}{1-q}$"
correct: 0
hint: "Suma nieskończonego szeregu geometrycznego (dla $|q| < 1$): $S = \\frac{a_1}{1-q}$."
---

Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:
`,wp=`---
options:
  - "$2$"
  - "$1$"
  - "$4$"
  - "Szereg rozbieżny"
correct: 0
hint: "$a_1 = 1$, $q = \\frac{1}{2}$. $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$."
---

Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:
`,bp=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: 84 = 4·21, 56 = 8·7."
---

Ile wynosi NWD(84, 56)?
`,$p=`---
options:
  - "$-12$"
  - "$12$"
  - "$-4$"
  - "$4$"
correct: 0
hint: "Minus razy plus to minus. $(-3) \\cdot 4 = -12$."
---

Oblicz: $(-3) \\cdot 4 =$
`,kp=`---
options:
  - "$-5$"
  - "$5$"
  - "$-15$"
  - "$15$"
correct: 0
hint: "Odejmowanie to dodawanie liczby przeciwnej: $3 - 8 = 3 + (-8) = -5$."
---

Oblicz: $3 - 8 =$
`,_p=`---
options:
  - "$x^2 + C$"
  - "$2 + C$"
  - "$x + C$"
  - "$2x^2 + C$"
correct: 0
hint: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Dla $n = 1$: $\\int x \\, dx = \\frac{x^2}{2} + C$ — uwaga, to $\\int 2x \\, dx = x^2 + C$."
---

$\\displaystyle \\int 2x \\, dx =$
`,zp=`---
options:
  - "$\\frac{x^3}{3} + C$"
  - "$2x + C$"
  - "$x^3 + C$"
  - "$\\frac{x^2}{2} + C$"
correct: 0
hint: "$\\int x^2\\,dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$."
---

Oblicz całkę: $\\displaystyle\\int x^2\\,dx$
`,Sp=`---
options:
  - "$\\frac{9}{2}$"
  - "$9$"
  - "$3$"
  - "$\\frac{3}{2}$"
correct: 0
hint: "$\\int_0^3 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{9}{2} - 0 = \\frac{9}{2}$."
---

Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$
`,Tp=`---
options:
  - "$3$"
  - "$1$"
  - "$\\infty$"
  - "$0$"
correct: 0
hint: "Dzielimy licznik i mianownik przez $x^2$. Wyrazy $\\frac{1}{x^2}$ i $\\frac{5}{x^2}$ dążą do $0$."
---

Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:
`,Mp=`---
options:
  - "$1$"
  - "$0$"
  - "$\\infty$"
  - "$-1$"
correct: 0
hint: "$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ — to ważna granica (granica Eulera)."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$
`,Cp=`---
options:
  - "$5$"
  - "$0$"
  - "$\\infty$"
  - "$\\frac{5}{3}$"
correct: 0
hint: "Podziel przez $x^2$: $\\frac{5x^2-1}{x^2+3} = \\frac{5 - 1/x^2}{1 + 3/x^2} \\to \\frac{5}{1} = 5$."
---

Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$
`,Ap=`---
options:
  - "$x = 5$"
  - "$x = 2$"
  - "$x = -2$"
  - "$x = 7$"
correct: 0
hint: "$2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."
---

Rozwiązaniem równania $2x - 3 = 7$ jest:
`,jp=`---
options:
  - "$x = 4$"
  - "$x = -4$"
  - "$x = 2$"
  - "$x = 8$"
correct: 0
hint: "$3x = 12$, więc $x = 4$."
---

Rozwiąż równanie: $3x - 2 = 10$
`,Ep=`---
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
`,Pp=`---
options:
  - "$x > 3$"
  - "$x < 3$"
  - "$x > -3$"
  - "$x \\geq 3$"
correct: 0
hint: "Dodaj 1 do obu stron: $2x > 6$, dziel przez 2: $x > 3$."
---

Rozwiąż nierówność: $2x - 1 > 5$
`,Dp=`---
options:
  - "$x \\geq -2$"
  - "$x \\leq -2$"
  - "$x \\geq 2$"
  - "$x \\leq 2$"
correct: 0
hint: "Przy dzieleniu przez liczbę ujemną odwracamy znak: $-3x \\leq 6 \\Rightarrow x \\geq -2$."
---

Rozwiąż nierówność: $-3x \\leq 6$
`,Rp=`---
options:
  - "x=3, y=2"
  - "x=2, y=3"
  - "x=4, y=1"
  - "x=1, y=4"
correct: 0
hint: "Dodajesz równania: 2x = 6, x = 3."
---

Układ { x+y=5, x−y=1 } ma rozwiązanie:
`,Bp=`---
options:
  - "$x = 1,\\ y = 2$"
  - "$x = 2,\\ y = 1$"
  - "$x = -1,\\ y = 2$"
  - "$x = 1,\\ y = -2$"
correct: 0
hint: "Z drugiego równania $y = 2x$. Podstaw do pierwszego: $x + 2x = 3$, $3x = 3$, $x = 1$, $y = 2$."
---

Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$
`,Np=`---
options:
  - "$x = 3,\\ y = -1$"
  - "$x = 1,\\ y = 3$"
  - "$x = -3,\\ y = 1$"
  - "$x = 2,\\ y = 0$"
correct: 0
hint: "Odejmij równania: $(2x + y) - (x + y) = 5 - 2$, więc $x = 3$. Potem $y = 2 - 3 = -1$."
---

Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$
`,Lp=`---
options:
  - "x = 8"
  - "x = 6"
  - "x = 9"
  - "x = 4"
correct: 0
hint: "log₂(x) = 3 ⟺ x = 2³ = 8."
---

Rozwiązaniem równania log₂(x) = 3 jest:
`,Op=`---
options:
  - "$x = 9$"
  - "$x = 3$"
  - "$x = 27$"
  - "$x = 81$"
correct: 0
hint: "$\\log_3 x = 2 \\Leftrightarrow x = 3^2 = 9$."
---

Rozwiąż równanie: $\\log_3 x = 2$
`,Ip=`---
options:
  - "$x = 4$"
  - "$x = 2$"
  - "$x = 8$"
  - "$x = 16$"
correct: 0
hint: "$2^x = 16 = 2^4$, więc $x = 4$."
---

Rozwiąż równanie: $2^x = 16$
`,Fp=`---
options:
  - "$2$"
  - "$3$"
  - "$4$"
  - "$9$"
correct: 2
hint: "$(\\sqrt{3})^x = 9$, czyli $3^{x/2} = 3^2$, więc $\\frac{x}{2} = 2$ i $x = 4$."
---

Wartość $\\log_{\\sqrt{3}} 9$ jest równa:
`,Hp=`---
options:
  - "$3$"
  - "$8$"
  - "$\\frac{1}{3}$"
  - "$27$"
correct: 0
hint: "$\\log_2 8 = x \\Leftrightarrow 2^x = 8 = 2^3$, więc $x = 3$."
---

Oblicz: $\\log_2 8 =$
`,Wp=`---
options:
  - "$\\log_a x + \\log_a y$"
  - "$\\log_a x \\cdot \\log_a y$"
  - "$\\log_a (x + y)$"
  - "$\\log_a x - \\log_a y$"
correct: 0
hint: "Własność logarytmu: $\\log_a(xy) = \\log_a x + \\log_a y$."
---

Które wyrażenie jest równe $\\log_a(xy)$?
`,Up=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja ∀x: P(x) to ∃x: ¬P(x)."
---

Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:
`,Vp=`---
options:
  - "Fałsz"
  - "Prawda"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Koniunkcja $p \\wedge q$ jest prawdziwa tylko gdy obie zdania są prawdziwe. Jeśli $q$ jest fałszywe, wynik to fałsz."
---

Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:
`,Gp=`---
options:
  - "Prawda"
  - "Fałsz"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Alternatywa $p \\vee q$ jest fałszywa tylko gdy oba zdania są fałszywe. Jeśli $p$ jest prawdziwe, wynik to prawda."
---

Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:
`,Yp=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "x + y = 10. Pole P = x·y maksymalne dla x=y=5 (wierzchołek paraboli)."
---

Prostokąt o obwodzie 20 ma największe pole gdy:
`,Xp=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 0$"
  - "$x = 6$"
correct: 0
hint: "Minimum paraboli $f(x) = (x-3)^2 + 2$ jest w wierzchołku $x = 3$."
---

Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:
`,Qp=`---
options:
  - "$25$"
  - "$20$"
  - "$30$"
  - "$50$"
correct: 0
hint: "Suma $x + y = 10$, więc $y = 10-x$. Iloczyn $P = x(10-x) = 10x - x^2$. Maksimum w $x=5$: $P = 25$."
---

Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:
`,Kp=`---
options:
  - "$k \\leq 0 \\lor k \\geq 1$"
  - "$0 < k < 1$"
  - "$k < 0 \\lor k > 1$"
  - "$k = 0 \\lor k = 1$"
correct: 0
hint: "$\\Delta = (2k)^2 - 4k = 4k^2 - 4k \\geq 0$, czyli $k(k-1) \\geq 0$, co zachodzi dla $k \\leq 0$ lub $k \\geq 1$."
---

Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:
`,Zp=`---
options:
  - "$k = 0$ lub $k = 4$"
  - "$k = 2$"
  - "$k \\in \\mathbb{R}$"
  - "Brak rozwiązań"
correct: 0
hint: "$\\Delta = 0$: $4k^2 - 4k \\cdot 4 = 0 \\Rightarrow 4k(k-4) = 0 \\Rightarrow k=0$ lub $k=4$."
---

Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:
`,Jp=`---
options:
  - "$m < -2$ lub $m > 2$"
  - "$-2 < m < 2$"
  - "$m = \\pm 2$"
  - "$m \\in \\mathbb{R}$"
correct: 0
hint: "$\\Delta > 0$: $4m^2 - 4 \\cdot 1 \\cdot 4 > 0 \\Rightarrow m^2 > 4 \\Rightarrow |m| > 2$."
---

Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:
`,e3=`---
options:
  - "24"
  - "12"
  - "16"
  - "10"
correct: 0
hint: "P₄ = 4! = 24."
---

Liczba permutacji zbioru {A, B, C, D} wynosi:
`,t3=`---
options:
  - "$24$"
  - "$12$"
  - "$6$"
  - "$120$"
correct: 0
hint: "$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$."
---

Na ile sposobów można ustawić 4 osoby w rzędzie?
`,n3=`---
options:
  - "$60$"
  - "$120$"
  - "$20$"
  - "$30$"
correct: 0
hint: "$P_5 / n_A! = 5! / 2! = 120 / 2 = 60$. Słowo ABCDA ma 5 liter, A powtarza się 2 razy."
---

Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?
`,r3=`---
options:
  - "90°"
  - "45°"
  - "60°"
  - "180°"
correct: 0
hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
---

Kąt wpisany w okrąg oparty na średnicy mierzy:
`,i3=`---
options:
  - "$180°$"
  - "$360°$"
  - "$90°$"
  - "$270°$"
correct: 0
hint: "Suma kątów wewnętrznych trójkąta zawsze równa się $180°$."
---

Suma kątów wewnętrznych trójkąta wynosi:
`,o3=`---
options:
  - "$P = \\frac{a \\cdot h}{2}$"
  - "$P = a \\cdot h$"
  - "$P = \\frac{a + h}{2}$"
  - "$P = a^2$"
correct: 0
hint: "Pole trójkąta = $\\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość}$."
---

Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:
`,a3=`---
options:
  - "W(2) = 0"
  - "W(2) = 4"
  - "W(2) = 2"
  - "W(0) = 0"
correct: 0
hint: "Podstaw x=2: 8 − 8 − 6 + 6 = 0."
---

Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:
`,l3=`---
options:
  - "Tak, bo $2^3 - 4 \\cdot 2 = 0$"
  - "Nie, bo $2^3 - 4 \\cdot 2 \\neq 0$"
  - "Tak, bo stopień wielomianu to $3$"
  - "Nie, bo wielomian ma zawsze 3 pierwiastki"
correct: 0
hint: "$p(2) = 8 - 8 = 0$, więc $x=2$ jest pierwiastkiem."
---

Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?
`,s3=`---
options:
  - "Co najwyżej $n$ pierwiastków"
  - "Dokładnie $n$ pierwiastków"
  - "Zawsze nieskończenie wiele"
  - "Co najmniej $1$ pierwiastek"
correct: 0
hint: "Wielomian stopnia $n$ ma co najwyżej $n$ pierwiastków rzeczywistych (może mieć mniej lub zero)."
---

Wielomian stopnia $n$ ma:
`,u3=`---
options:
  - "3x(x² + 2x + 3)"
  - "3(x³ + 2x + 3)"
  - "x(3x² + 6x)"
  - "3x²(x + 2)"
correct: 0
hint: "Wyłącz przed nawias 3x z każdego wyrazu."
---

Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:
`,c3=`---
options:
  - "$3$"
  - "$2$"
  - "$4$"
  - "$1$"
correct: 0
hint: "Stopień wielomianu to najwyższy wykładnik. W $2x^3 + x - 5$ najwyższy to $3$."
---

Stopień wielomianu $2x^3 + x - 5$ wynosi:
`,d3=`---
options:
  - "$x^2 + 3x + 2$"
  - "$x^2 - 3x + 2$"
  - "$x^2 + x + 2$"
  - "$x^2 + 3x - 2$"
correct: 0
hint: "$(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$."
---

Rozwiń: $(x + 1)(x + 2) =$
`,f3=`---
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^8$"
correct: 1
hint: "$\\frac{1}{16} = 2^{-4}$, więc $(\\frac{1}{16})^8 = 2^{-32}$. Ponadto $8 = 2^3$, więc $8^{16} = 2^{48}$. Razem: $2^{-32} \\cdot 2^{48} = 2^{16}$."
---

Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:
`,h3=`---
options:
  - "$8$"
  - "$6$"
  - "$9$"
  - "$4$"
correct: 0
hint: "$2^3 = 2 \\cdot 2 \\cdot 2 = 8$."
---

Oblicz: $2^3 =$
`,m3=`---
options:
  - "$a^5$"
  - "$a^6$"
  - "$a^2$"
  - "$2a^3$"
correct: 0
hint: "Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki: $a^2 \\cdot a^3 = a^{2+3} = a^5$."
---

Uprość: $a^2 \\cdot a^3 =$
`,p3=`---
options:
  - "1/2"
  - "1/3"
  - "2/3"
  - "1/6"
correct: 0
hint: "Parzyste: {2,4,6}. P = 3/6 = 1/2."
---

Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,v3=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Prawa liczb parzystych na kostce: 2, 4, 6 — to 3 z 6 możliwych wyników. $P = \\frac{3}{6} = \\frac{1}{2}$."
---

Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,g3=`---
options:
  - "$\\frac{1}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
  - "$1$"
correct: 0
hint: "Zdarzenia niezależne: $P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$."
---

Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:
`,y3=`---
options:
  - "2k+1 i 2m+1 są nieparzyste, ich suma = 2(k+m+1) — parzysta"
  - "5+7=12, więc działa"
  - "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta"
  - "Wystarczy sprawdzić kilka przykładów"
correct: 0
hint: "Dowód ogólny: reprezentujesz liczby jako 2k+1 i 2m+1."
---

Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?
`,x3=`---
options:
  - "Przyjmujemy negację tezy i dochodzimy do sprzeczności"
  - "Sprawdzamy wszystkie przypadki"
  - "Używamy tylko przykładów"
  - "Dowodzimy przez analogię"
correct: 0
hint: "Dowód nie wprost (reductio ad absurdum): zakładamy, że teza jest fałszywa, i wyprowadzamy sprzeczność."
---

Dowód nie wprost polega na tym, że:
`,w3=`---
options:
  - "Krok bazowy + krok indukcyjny (zakładamy prawdziwość dla $n$, dowodzimy dla $n+1$)"
  - "Sprawdzenie kilku pierwszych przypadków"
  - "Dowód dla $n=1$ wystarczy"
  - "Zakładamy prawdziwość dla $n+1$ i dowodzimy dla $n$"
correct: 0
hint: "Indukcja matematyczna: 1) Krok bazowy — sprawdzamy dla $n=1$. 2) Krok indukcyjny — zakładamy dla $n$, dowodzimy dla $n+1$."
---

Dowód przez indukcję matematyczną składa się z:
`,b3=`---
options:
  - "$10$"
  - "$12$"
  - "$14$"
  - "$\\sqrt{48}$"
correct: 0
hint: "$c^2 = 6^2 + 8^2 = 36 + 64 = 100$, więc $c = 10$."
---

Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:
`,$3=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$\\sqrt{58}$"
correct: 0
hint: "$c^2 = 3^2 + 4^2 = 9 + 16 = 25$, więc $c = 5$."
---

Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:
`,k3=`---
options:
  - "$\\sqrt{11}$"
  - "$\\sqrt{13}$"
  - "$11$"
  - "$3$"
correct: 0
hint: "$a^2 = c^2 - b^2 = 36 - 25 = 11$, więc $a = \\sqrt{11}$."
---

Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:
`,_3=`---
options:
  - "$x = 2$ i $x = 3$"
  - "$x = -2$ i $x = -3$"
  - "$x = 1$ i $x = 6$"
  - "$x = 2$ i $x = -3$"
correct: 0
hint: "$\\Delta = 25 - 24 = 1$. Wzory Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = 6$. Lub $x = \\frac{5 \\pm 1}{2}$."
---

Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:
`,z3=`---
options:
  - "$x = 1$ lub $x = -3$"
  - "$x = -1$ lub $x = 3$"
  - "$x = 1$ lub $x = 3$"
  - "Brak rozwiązań rzeczywistych"
correct: 0
hint: "$\\Delta = 4 + 12 = 16$, $\\sqrt{\\Delta} = 4$. $x = \\frac{-2 \\pm 4}{2}$: $x_1 = 1$, $x_2 = -3$."
---

Rozwiąż: $x^2 + 2x - 3 = 0$
`,S3=`---
options:
  - "Brak rozwiązań rzeczywistych"
  - "$x = 0$"
  - "$x = \\pm 2$"
  - "$x = 4$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. Ujemna delta oznacza brak rozwiązań w $\\mathbb{R}$."
---

Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?
`,T3=`---
options:
  - "(−2, 3)"
  - "(−∞,−2)∪(3,+∞)"
  - "[−2, 3]"
  - "(−3, 2)"
correct: 0
hint: "Pierwiastki to −2 i 3. Parabola jest nad osią poza przedziałem (−2,3)."
---

Rozwiązaniem nierówności x² − x − 6 < 0 jest:
`,M3=`---
options:
  - "$x \\in (-2, 3)$"
  - "$x \\in (-\\infty, -2) \\cup (3, +\\infty)$"
  - "$x \\in [-2, 3]$"
  - "$x \\in \\mathbb{R}$"
correct: 0
hint: "Pierwiastki to $x = -2$ i $x = 3$. Ramiona paraboli skierowane w górę ($a=1>0$), więc parabola jest poniżej zera między pierwiastkami."
---

Rozwiąż nierówność: $x^2 - x - 6 < 0$
`,C3=`---
options:
  - "$x \\in (-\\infty, -1] \\cup [4, +\\infty)$"
  - "$x \\in (-1, 4)$"
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
correct: 0
hint: "Pierwiastki: $\\Delta = 25$, $x_1 = -1$, $x_2 = 4$. Parabola ($a=1>0$) jest powyżej zera poza pierwiastkami."
---

Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$
`,A3=`---
options:
  - "x + 2"
  - "x − 2"
  - "x² + 2"
  - "2x"
correct: 0
hint: "x²−4 = (x−2)(x+2). Skracasz (x−2)."
---

Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:
`,j3=`---
options:
  - "$\\frac{x+1}{x-1}$"
  - "$\\frac{x-1}{x+1}$"
  - "$\\frac{x^2-1}{(x-1)^2}$"
  - "$1$"
correct: 0
hint: "Licznik $x^2-1 = (x-1)(x+1)$. Po skróceniu przez $(x-1)$ zostaje $\\frac{x+1}{x-1} \\cdot \\frac{1}{1}$... Sprawdź: $\\frac{(x-1)(x+1)}{(x-1)^2} = \\frac{x+1}{x-1}$."
---

Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$
`,E3=`---
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
`,P3=`---
options:
  - "$0$"
  - "$1$"
  - "$\\infty$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$, bo mianownik rośnie bez ograniczeń."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$
`,D3=`---
options:
  - "$3$"
  - "$\\infty$"
  - "$0$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Podziel licznik i mianownik przez $n$: $\\frac{3n+1}{n} = 3 + \\frac{1}{n} \\to 3$."
---

Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$
`,R3=`---
options:
  - "$14$"
  - "$13$"
  - "$15$"
  - "$12$"
correct: 0
hint: "$a_5 = 3 \\cdot 5 - 1 = 15 - 1 = 14$."
---

Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:
`,B3=`---
options:
  - "$a_n = 2n - 1$"
  - "$a_n = 2n + 1$"
  - "$a_n = n + 2$"
  - "$a_n = 2n$"
correct: 0
hint: "Ciąg: $1, 3, 5, 7, \\ldots$ — liczby nieparzyste. Wzór ogólny: $a_n = 2n - 1$."
---

Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:
`,N3=`---
options:
  - "$a_5 = 17$"
  - "$a_5 = 15$"
  - "$a_5 = 13$"
  - "$a_5 = 20$"
correct: 0
hint: "$a_1 = 1$, $r = 4$, $a_5 = a_1 + 4r = 1 + 16 = 17$."
---

Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:
`,L3=`---
options:
  - "{3,4}"
  - "{1,2,5,6}"
  - "{1,2,3,4,5,6}"
  - "{3}"
correct: 0
hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
---

A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =
`,O3=`---
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
`,H3=`---
options:
  - "$c^2 = a^2 + b^2 - 2ab\\cos\\gamma$"
  - "$c^2 = a^2 + b^2 + 2ab\\cos\\gamma$"
  - "$c = a + b - 2\\cos\\gamma$"
  - "$\\cos\\gamma = a^2 + b^2 - c^2$"
correct: 0
hint: "Twierdzenie cosinusów: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$, gdzie $\\gamma$ to kąt między bokami $a$ i $b$."
---

Twierdzenie cosinusów brzmi:
`,W3=`---
options:
  - "$\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma}$"
  - "$a \\cdot \\sin\\alpha = b \\cdot \\sin\\beta$"
  - "$\\frac{\\sin\\alpha}{a} = \\frac{\\sin\\beta}{b} + \\frac{\\sin\\gamma}{c}$"
  - "$a = b \\cdot \\sin\\alpha$"
correct: 0
hint: "Twierdzenie sinusów: iloraz każdego boku przez sinus przeciwległego kąta jest stały (= $2R$)."
---

Twierdzenie sinusów głosi, że w każdym trójkącie:
`,U3=`---
options:
  - "12π"
  - "36π"
  - "9π"
  - "48π"
correct: 0
hint: "V = (1/3)πr²h = (1/3)·π·9·4 = 12π."
---

Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:
`,V3=`---
options:
  - "$V = a^3$"
  - "$V = 6a^2$"
  - "$V = 3a^3$"
  - "$V = a^2 h$"
correct: 0
hint: "Objętość sześcianu o krawędzi $a$: $V = a \\cdot a \\cdot a = a^3$."
---

Wzór na objętość sześcianu o krawędzi $a$:
`,G3=`---
options:
  - "$V = \\frac{4}{3}\\pi r^3$"
  - "$V = \\pi r^2 h$"
  - "$V = 4\\pi r^2$"
  - "$V = \\frac{1}{3}\\pi r^2 h$"
correct: 0
hint: "Objętość kuli o promieniu $r$: $V = \\frac{4}{3}\\pi r^3$."
---

Wzór na objętość kuli o promieniu $r$:
`,Y3=`---
options:
  - "6"
  - "5"
  - "7"
  - "8"
correct: 0
hint: "Suma = 30, liczba wyrazów = 5. 30/5 = 6."
---

Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:
`,X3=`---
options:
  - "Najczęściej powtarzająca się wartość"
  - "Środkowa wartość po posortowaniu"
  - "Suma podzielona przez liczbę elementów"
  - "Różnica między max i min"
correct: 0
hint: "Dominanta (moda) to wartość, która pojawia się najczęściej w danych."
---

Dominanta (moda) zbioru danych to:
`,Q3=`---
options:
  - "$8$"
  - "$4$"
  - "$2$"
  - "$16$"
correct: 0
hint: "Rozstęp = max $-$ min $= 12 - 4 = 8$."
---

Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:
`,K3=`---
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
`,Z3=`---
options:
  - "$6$"
  - "$4$"
  - "$8$"
  - "$3$"
correct: 0
hint: "Twierdzenie Talesa: $\\frac{AB}{BC} = \\frac{DE}{EF}$. Mamy $\\frac{4}{8} = \\frac{3}{EF}$, więc $EF = 6$."
---

Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$
`,J3=`---
options:
  - "Odcinki są proporcjonalne"
  - "Kąty są równe"
  - "Trójkąty są przystające"
  - "Pole trójkąta jest stałe"
correct: 0
hint: "Twierdzenie Talesa stwierdza, że prosta równoległa do boku trójkąta wyznacza proporcjonalne odcinki na pozostałych bokach."
---

Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?
`,e5=`---
options:
  - "$\\frac{4}{5}$"
  - "$\\frac{3}{4}$"
  - "$\\frac{5}{3}$"
  - "$\\frac{1}{5}$"
correct: 0
hint: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$, więc $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, a $\\cos\\alpha = \\frac{4}{5}$ (dla kąta ostrego)."
---

W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:
`,t5=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "Trójkąt prostokątny 30-60-90: $\\sin 30° = \\frac{1}{2}$."
---

Wartość $\\sin 30°$ wynosi:
`,n5=`---
options:
  - "$1$"
  - "$0$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
correct: 0
hint: "Tożsamość Pitagorejska: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ dla każdego kąta $\\alpha$."
---

Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:
`,r5=`---
options:
  - "x = 30° i x = 150°"
  - "x = 30° tylko"
  - "x = 60° i x = 120°"
  - "x = 45°"
correct: 0
hint: "sin jest symetryczny względem 90°. sin(30°) = sin(150°) = 1/2."
---

Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:
`,i5=`---
options:
  - "$x = \\frac{\\pi}{6} + 2k\\pi$ lub $x = \\frac{5\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$ lub $x = -\\frac{\\pi}{6} + k\\pi$"
correct: 0
hint: "$\\sin x = \\frac{1}{2}$ dla $x = \\frac{\\pi}{6}$ (30°) i $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (150°), plus okresy $2\\pi$."
---

Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$
`,o5=`---
options:
  - "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = k\\pi$, $k \\in \\mathbb{Z}$"
correct: 0
hint: "$\\tan x = 1$ dla $x = \\frac{\\pi}{4}$. Tangens ma okres $\\pi$, więc ogólne rozwiązanie: $x = \\frac{\\pi}{4} + k\\pi$."
---

Rozwiąż równanie: $\\tan x = 1$
`,a5=`---
options:
  - "2sin(α)cos(α)"
  - "sin²(α)−cos²(α)"
  - "cos²(α)−sin²(α)"
  - "2cos²(α)−1"
correct: 0
hint: "Wzór na sinus kąta podwojonego: sin(2α) = 2sin(α)cos(α)."
---

sin(2α) jest równe:
`,l5=`---
options:
  - "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$"
  - "$\\sin 2\\alpha = \\sin^2\\alpha + \\cos^2\\alpha$"
  - "$\\sin 2\\alpha = 2\\sin^2\\alpha$"
  - "$\\sin 2\\alpha = \\sin\\alpha \\cdot \\cos\\alpha$"
correct: 0
hint: "Wzór na sinus podwojonego kąta: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$."
---

Wzór na $\\sin 2\\alpha$:
`,s5=`---
options:
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha - \\cos\\beta$"
correct: 0
hint: "Wzór redukcyjny: $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$."
---

Wzór na $\\cos(\\alpha - \\beta)$:
`,u5=`---
options:
  - "√3/2"
  - "1/2"
  - "−√3/2"
  - "√2/2"
correct: 0
hint: "120° = 180°−60°, sin(180°−α) = sin(α), sin(60°) = √3/2."
---

Wartość sin(120°) jest równa:
`,c5=`---
options:
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "$\\cos 30° = \\frac{\\sqrt{3}}{2}$. Zapamiętaj wartości dla 30°, 45°, 60°."
---

Wartość $\\cos 30°$ wynosi:
`,d5=`---
options:
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$0$"
correct: 0
hint: "$\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$."
---

Wartość $\\sin 45°$ wynosi:
`,f5=`---
options:
  - "5"
  - "7"
  - "√7"
  - "12"
correct: 0
hint: "|v| = √(3²+4²) = √25 = 5."
---

Długość wektora v = [3, 4] wynosi:
`,h5=`---
options:
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$"
  - "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|$"
  - "$\\vec{a} \\cdot \\vec{b} = (a_1+b_1, a_2+b_2)$"
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_2 - a_2 b_1$"
correct: 0
hint: "Iloczyn skalarny: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$. Wynikiem jest liczba, nie wektor."
---

Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:
`,m5=`---
options:
  - "$\\sqrt{13}$"
  - "$5$"
  - "$13$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|\\vec{v}| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$."
---

Długość wektora $\\vec{v} = (2, 3)$ wynosi:
`,p5=`---
options:
  - "12"
  - "7"
  - "−12"
  - "−7"
correct: 0
hint: "Wzór Viète'a: x₁·x₂ = c/a = 12/1 = 12."
---

Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =
`,v5=`---
options:
  - "$x_1 + x_2 = 5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = 5$, $x_1 x_2 = -6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = -6$"
correct: 0
hint: "Wzory Viète'a dla $ax^2+bx+c=0$: $x_1+x_2 = -b/a$, $x_1 x_2 = c/a$. Tu: $-(-5)/1=5$, $6/1=6$."
---

Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:
`,g5=`---
options:
  - "$13$"
  - "$25$"
  - "$12$"
  - "$5$"
correct: 0
hint: "Wzory Viète'a: $x_1+x_2=5$, $x_1 x_2=6$. Suma kwadratów: $(x_1+x_2)^2 - 2x_1x_2 = 25 - 12 = 13$."
---

Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:
`;function qd(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],a=n[2].trim(),s={},u=r.split(/\r?\n/);let f=0;for(;f<u.length;){const p=u[f];if(p.startsWith("  ")){f++;continue}const v=p.match(/^(\w+):\s*(.*)/);if(!v){f++;continue}const w=v[1];let $=v[2].trim();if($===""||$===null){const b=u[f+1]??"";if(b.startsWith("  - ")){const M=[];for(f++;f<u.length&&u[f].startsWith("  - ");){let T=u[f].replace(/^  - /,"").trim();T=T.replace(/^["']|["']$/g,""),M.push(T),f++}s[w]=M.length>0?M:null}else if(b.match(/^  \w+:/)){const M={};for(f++;f<u.length&&u[f].match(/^  \w+:/);){const T=u[f].match(/^  (\w+):\s*(.*)/);if(T){const P=T[1];let R=T[2].trim().replace(/^["']|["']$/g,"");M[P]=!isNaN(R)&&R!==""?Number(R):R}f++}s[w]=M}else s[w]=null,f++}else $=$.replace(/^["']|["']$/g,""),!isNaN($)&&$!==""?s[w]=Number($):$==="true"?s[w]=!0:$==="false"?s[w]=!1:s[w]=$,f++}return{meta:s,body:a}}const y5=Object.assign({"./nodes/abs_value/node.md":Of,"./nodes/analytic_geom/node.md":If,"./nodes/area_perimeter/node.md":Ff,"./nodes/arith_geom/node.md":Hf,"./nodes/bernoulli/node.md":Wf,"./nodes/binom_theorem/node.md":Uf,"./nodes/circle_eq/node.md":Vf,"./nodes/combinations/node.md":Gf,"./nodes/complex/node.md":Yf,"./nodes/cond_prob/node.md":Xf,"./nodes/conic_sections/node.md":Qf,"./nodes/counting/node.md":Kf,"./nodes/data_basics/node.md":Zf,"./nodes/deriv_apps/node.md":Jf,"./nodes/derivative/node.md":eh,"./nodes/distributions/node.md":th,"./nodes/factoring/node.md":nh,"./nodes/fn_compositions/node.md":rh,"./nodes/fn_concept/node.md":ih,"./nodes/fn_exp/node.md":oh,"./nodes/fn_linear/node.md":ah,"./nodes/fn_log/node.md":lh,"./nodes/fn_poly/node.md":sh,"./nodes/fn_quadratic/node.md":uh,"./nodes/fn_trig/node.md":ch,"./nodes/fractions/node.md":dh,"./nodes/geo_series/node.md":fh,"./nodes/integers/node.md":hh,"./nodes/integral/node.md":mh,"./nodes/limits/node.md":ph,"./nodes/linear_eq/node.md":vh,"./nodes/linear_ineq/node.md":gh,"./nodes/linear_sys/node.md":yh,"./nodes/log_eq/node.md":xh,"./nodes/log_exp/node.md":wh,"./nodes/logic_basics/node.md":bh,"./nodes/optimization_lp/node.md":$h,"./nodes/param_eq/node.md":kh,"./nodes/permutations/node.md":_h,"./nodes/planimetria_lp/node.md":zh,"./nodes/poly_roots/node.md":Sh,"./nodes/polynomials/node.md":Th,"./nodes/powers/node.md":Mh,"./nodes/probability/node.md":Ch,"./nodes/proof/node.md":Ah,"./nodes/pythagoras/node.md":jh,"./nodes/quadratic_eq/node.md":Eh,"./nodes/quadratic_ineq/node.md":qh,"./nodes/rational_expr/node.md":Ph,"./nodes/seq_limits/node.md":Dh,"./nodes/sequences/node.md":Rh,"./nodes/sets/node.md":Bh,"./nodes/sin_cos_law/node.md":Nh,"./nodes/solid_geom/node.md":Lh,"./nodes/stat_lp/node.md":Oh,"./nodes/thales/node.md":Ih,"./nodes/trig_basic/node.md":Fh,"./nodes/trig_eq/node.md":Hh,"./nodes/trig_formulas/node.md":Wh,"./nodes/trig_lp/node.md":Uh,"./nodes/vectors/node.md":Vh,"./nodes/vieta/node.md":Gh}),dt=Object.entries(y5).map(([o,n])=>{var s;const r=(s=o.match(/\.\/nodes\/([^/]+)\/node\.md$/))==null?void 0:s[1],{meta:a}=qd(n);return{id:r,label:a.label??r,labelPl:a.labelPl??a.label??r,scope:a.scope??"unknown",section:a.section??"SP8",level:a.level??1,x:a.x??0,y:a.y??0}}),x5=Object.assign({"./nodes/abs_value/questions/01.md":Yh,"./nodes/abs_value/questions/02.md":Xh,"./nodes/abs_value/questions/03.md":Qh,"./nodes/analytic_geom/questions/01.md":Kh,"./nodes/analytic_geom/questions/02.md":Zh,"./nodes/analytic_geom/questions/03.md":Jh,"./nodes/area_perimeter/questions/01.md":em,"./nodes/area_perimeter/questions/02.md":tm,"./nodes/area_perimeter/questions/03.md":nm,"./nodes/arith_geom/questions/01.md":rm,"./nodes/arith_geom/questions/02.md":im,"./nodes/arith_geom/questions/03.md":om,"./nodes/bernoulli/questions/01.md":am,"./nodes/bernoulli/questions/02.md":lm,"./nodes/bernoulli/questions/03.md":sm,"./nodes/binom_theorem/questions/01.md":um,"./nodes/binom_theorem/questions/02.md":cm,"./nodes/binom_theorem/questions/03.md":dm,"./nodes/circle_eq/questions/01.md":fm,"./nodes/circle_eq/questions/02.md":hm,"./nodes/circle_eq/questions/03.md":mm,"./nodes/combinations/questions/01.md":pm,"./nodes/combinations/questions/02.md":vm,"./nodes/combinations/questions/03.md":gm,"./nodes/complex/questions/01.md":ym,"./nodes/complex/questions/02.md":xm,"./nodes/complex/questions/03.md":wm,"./nodes/cond_prob/questions/01.md":bm,"./nodes/cond_prob/questions/02.md":$m,"./nodes/cond_prob/questions/03.md":km,"./nodes/conic_sections/questions/01.md":_m,"./nodes/conic_sections/questions/02.md":zm,"./nodes/conic_sections/questions/03.md":Sm,"./nodes/counting/questions/01.md":Tm,"./nodes/counting/questions/02.md":Mm,"./nodes/counting/questions/03.md":Cm,"./nodes/data_basics/questions/01.md":Am,"./nodes/data_basics/questions/02.md":jm,"./nodes/data_basics/questions/03.md":Em,"./nodes/deriv_apps/questions/01.md":qm,"./nodes/deriv_apps/questions/02.md":Pm,"./nodes/deriv_apps/questions/03.md":Dm,"./nodes/derivative/questions/01.md":Rm,"./nodes/derivative/questions/02.md":Bm,"./nodes/derivative/questions/03.md":Nm,"./nodes/distributions/questions/01.md":Lm,"./nodes/distributions/questions/02.md":Om,"./nodes/distributions/questions/03.md":Im,"./nodes/factoring/questions/01.md":Fm,"./nodes/factoring/questions/02.md":Hm,"./nodes/factoring/questions/03.md":Wm,"./nodes/fn_compositions/questions/01.md":Um,"./nodes/fn_compositions/questions/02.md":Vm,"./nodes/fn_compositions/questions/03.md":Gm,"./nodes/fn_concept/questions/01.md":Ym,"./nodes/fn_concept/questions/02.md":Xm,"./nodes/fn_concept/questions/03.md":Qm,"./nodes/fn_exp/questions/01.md":Km,"./nodes/fn_exp/questions/02.md":Zm,"./nodes/fn_exp/questions/03.md":Jm,"./nodes/fn_linear/questions/01.md":ep,"./nodes/fn_linear/questions/02.md":tp,"./nodes/fn_linear/questions/03.md":np,"./nodes/fn_log/questions/01.md":rp,"./nodes/fn_log/questions/02.md":ip,"./nodes/fn_log/questions/03.md":op,"./nodes/fn_poly/questions/01.md":ap,"./nodes/fn_poly/questions/02.md":lp,"./nodes/fn_poly/questions/03.md":sp,"./nodes/fn_quadratic/questions/01.md":up,"./nodes/fn_quadratic/questions/02.md":cp,"./nodes/fn_quadratic/questions/03.md":dp,"./nodes/fn_trig/questions/01.md":fp,"./nodes/fn_trig/questions/02.md":hp,"./nodes/fn_trig/questions/03.md":mp,"./nodes/fractions/questions/01.md":pp,"./nodes/fractions/questions/02.md":vp,"./nodes/fractions/questions/03.md":gp,"./nodes/geo_series/questions/01.md":yp,"./nodes/geo_series/questions/02.md":xp,"./nodes/geo_series/questions/03.md":wp,"./nodes/integers/questions/01.md":bp,"./nodes/integers/questions/02.md":$p,"./nodes/integers/questions/03.md":kp,"./nodes/integral/questions/01.md":_p,"./nodes/integral/questions/02.md":zp,"./nodes/integral/questions/03.md":Sp,"./nodes/limits/questions/01.md":Tp,"./nodes/limits/questions/02.md":Mp,"./nodes/limits/questions/03.md":Cp,"./nodes/linear_eq/questions/01.md":Ap,"./nodes/linear_eq/questions/02.md":jp,"./nodes/linear_eq/questions/03.md":Ep,"./nodes/linear_ineq/questions/01.md":qp,"./nodes/linear_ineq/questions/02.md":Pp,"./nodes/linear_ineq/questions/03.md":Dp,"./nodes/linear_sys/questions/01.md":Rp,"./nodes/linear_sys/questions/02.md":Bp,"./nodes/linear_sys/questions/03.md":Np,"./nodes/log_eq/questions/01.md":Lp,"./nodes/log_eq/questions/02.md":Op,"./nodes/log_eq/questions/03.md":Ip,"./nodes/log_exp/questions/01.md":Fp,"./nodes/log_exp/questions/02.md":Hp,"./nodes/log_exp/questions/03.md":Wp,"./nodes/logic_basics/questions/01.md":Up,"./nodes/logic_basics/questions/02.md":Vp,"./nodes/logic_basics/questions/03.md":Gp,"./nodes/optimization_lp/questions/01.md":Yp,"./nodes/optimization_lp/questions/02.md":Xp,"./nodes/optimization_lp/questions/03.md":Qp,"./nodes/param_eq/questions/01.md":Kp,"./nodes/param_eq/questions/02.md":Zp,"./nodes/param_eq/questions/03.md":Jp,"./nodes/permutations/questions/01.md":e3,"./nodes/permutations/questions/02.md":t3,"./nodes/permutations/questions/03.md":n3,"./nodes/planimetria_lp/questions/01.md":r3,"./nodes/planimetria_lp/questions/02.md":i3,"./nodes/planimetria_lp/questions/03.md":o3,"./nodes/poly_roots/questions/01.md":a3,"./nodes/poly_roots/questions/02.md":l3,"./nodes/poly_roots/questions/03.md":s3,"./nodes/polynomials/questions/01.md":u3,"./nodes/polynomials/questions/02.md":c3,"./nodes/polynomials/questions/03.md":d3,"./nodes/powers/questions/01.md":f3,"./nodes/powers/questions/02.md":h3,"./nodes/powers/questions/03.md":m3,"./nodes/probability/questions/01.md":p3,"./nodes/probability/questions/02.md":v3,"./nodes/probability/questions/03.md":g3,"./nodes/proof/questions/01.md":y3,"./nodes/proof/questions/02.md":x3,"./nodes/proof/questions/03.md":w3,"./nodes/pythagoras/questions/01.md":b3,"./nodes/pythagoras/questions/02.md":$3,"./nodes/pythagoras/questions/03.md":k3,"./nodes/quadratic_eq/questions/01.md":_3,"./nodes/quadratic_eq/questions/02.md":z3,"./nodes/quadratic_eq/questions/03.md":S3,"./nodes/quadratic_ineq/questions/01.md":T3,"./nodes/quadratic_ineq/questions/02.md":M3,"./nodes/quadratic_ineq/questions/03.md":C3,"./nodes/rational_expr/questions/01.md":A3,"./nodes/rational_expr/questions/02.md":j3,"./nodes/rational_expr/questions/03.md":E3,"./nodes/seq_limits/questions/01.md":q3,"./nodes/seq_limits/questions/02.md":P3,"./nodes/seq_limits/questions/03.md":D3,"./nodes/sequences/questions/01.md":R3,"./nodes/sequences/questions/02.md":B3,"./nodes/sequences/questions/03.md":N3,"./nodes/sets/questions/01.md":L3,"./nodes/sets/questions/02.md":O3,"./nodes/sets/questions/03.md":I3,"./nodes/sin_cos_law/questions/01.md":F3,"./nodes/sin_cos_law/questions/02.md":H3,"./nodes/sin_cos_law/questions/03.md":W3,"./nodes/solid_geom/questions/01.md":U3,"./nodes/solid_geom/questions/02.md":V3,"./nodes/solid_geom/questions/03.md":G3,"./nodes/stat_lp/questions/01.md":Y3,"./nodes/stat_lp/questions/02.md":X3,"./nodes/stat_lp/questions/03.md":Q3,"./nodes/thales/questions/01.md":K3,"./nodes/thales/questions/02.md":Z3,"./nodes/thales/questions/03.md":J3,"./nodes/trig_basic/questions/01.md":e5,"./nodes/trig_basic/questions/02.md":t5,"./nodes/trig_basic/questions/03.md":n5,"./nodes/trig_eq/questions/01.md":r5,"./nodes/trig_eq/questions/02.md":i5,"./nodes/trig_eq/questions/03.md":o5,"./nodes/trig_formulas/questions/01.md":a5,"./nodes/trig_formulas/questions/02.md":l5,"./nodes/trig_formulas/questions/03.md":s5,"./nodes/trig_lp/questions/01.md":u5,"./nodes/trig_lp/questions/02.md":c5,"./nodes/trig_lp/questions/03.md":d5,"./nodes/vectors/questions/01.md":f5,"./nodes/vectors/questions/02.md":h5,"./nodes/vectors/questions/03.md":m5,"./nodes/vieta/questions/01.md":p5,"./nodes/vieta/questions/02.md":v5,"./nodes/vieta/questions/03.md":g5}),w5=(()=>{var n;const o={};for(const[r,a]of Object.entries(x5)){const s=(n=r.match(/\.\/nodes\/([^/]+)\/questions\//))==null?void 0:n[1];if(!s)continue;const{meta:u,body:f}=qd(a);o[s]||(o[s]=[]),o[s].push({q:f,options:u.options??[],correct:u.correct??0,hint:u.hint??"",tests:u.tests&&typeof u.tests=="object"&&Object.keys(u.tests).length>0?u.tests:{[s]:1}})}return o})();function b5(o,n=[]){const r=w5[o];if(!r||r.length===0)return null;const a=r.map((u,f)=>({q:u,i:f})).filter(({i:u})=>!n.includes(u));if(a.length===0)return null;const s=a[Math.floor(Math.random()*a.length)];return{...s.q,index:s.i}}const v0=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],$5={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w grafie wiedzy",en:"Welcome to the knowledge graph"},onboardingSub:{pl:"Każdy węzeł to temat matematyczny. Połączenia pokazują wymagania wstępne.",en:"Each node is a math topic. Edges show prerequisites."},onboardingBrowse:{pl:"Przeglądaj",en:"Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły i powiązania.",en:"Click any node to see details and connections."},onboardingDiag:{pl:"Zdiagnozuj się",en:"Run a diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — system zaproponuje pytania i pokaże Twój poziom wiedzy.",en:"Find out what you know — the system picks questions and maps your knowledge."},onboardingStart:{pl:"Zacznij →",en:"Get started →"}};function ae(o,n="pl"){const r=$5[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function k5(o,n){const r={},a={};return o.forEach(s=>{r[s.id]=[],a[s.id]=[]}),n.forEach(([s,u])=>{var f,p;(f=r[u])==null||f.push(s),(p=a[s])==null||p.push(u)}),{prereqs:r,dependents:a}}function As(o,n){const r=Object.fromEntries(o.map(f=>[f.id,0])),a=Object.fromEntries(o.map(f=>[f.id,[]]));for(const[f,p]of n)r[p]!==void 0&&r[p]++,a[f]!==void 0&&a[f].push(p);const s=Object.fromEntries(o.map(f=>[f.id,0])),u=o.filter(f=>r[f.id]===0).map(f=>f.id);for(;u.length;){const f=u.shift();for(const p of a[f])s[p]=Math.max(s[p],s[f]+1),--r[p]===0&&u.push(p)}return s}const _5={id:"spectral",label:"Spectral"};function z5(o,n,r,a,s=80){const u=o.length,f=Object.fromEntries(o.map((H,Z)=>[H.id,Z])),p=Array.from({length:u},()=>new Float64Array(u));n.forEach(([H,Z])=>{const V=f[H],ye=f[Z];V==null||ye==null||(p[V][ye]=1,p[ye][V]=1)});const v=p.map(H=>H.reduce((Z,V)=>Z+V,0)),w=H=>H.map((Z,V)=>{let ye=0;for(let ze=0;ze<u;ze++)ye+=p[V][ze]*H[ze];return v[V]*H[V]-ye}),$=(H,Z)=>H.reduce((V,ye,ze)=>V+ye*Z[ze],0),b=H=>{const Z=Math.sqrt($(H,H))||1;return H.map(V=>V/Z)},M=(H,Z)=>{let V=[...H];return Z.forEach(ye=>{const ze=$(V,ye);V=V.map((Ce,He)=>Ce-ze*ye[He])}),b(V)},T=(H,Z=400)=>{let V=b(Array.from({length:u},()=>Math.random()-.5));V=M(V,H);for(let ye=0;ye<Z;ye++){const ze=Math.max(...v)+1;V=M(V.map((Ce,He)=>ze*Ce-w(V)[He]),H)}return V},P=b(new Array(u).fill(1)),R=T([P]),q=T([P,R]),I=Math.min(...R),W=Math.max(...R),N=Math.min(...q),L=Math.max(...q),U=W-I<1e-6?1:(r-2*s)/(W-I),K=L-N<1e-6?1:(a-2*s)/(L-N);return o.map((H,Z)=>({id:H.id,x:s+(R[Z]-I)*U,y:s+(q[Z]-N)*K,vx:0,vy:0}))}const S5=Object.freeze(Object.defineProperty({__proto__:null,apply:z5,meta:_5},Symbol.toStringTag,{value:"Module"})),T5={id:"topoRank",label:"Topo Rank"},H1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function M5(o,n,r,a,s=80){const u=As(o,n),f=Math.max(...o.map($=>u[$.id]??0),0),p={};for(const $ of o){const b=u[$.id]??0;(p[b]??(p[b]=[])).push($)}for(const $ of Object.values(p))$.sort((b,M)=>{const T=H1.indexOf(b.scope),P=H1.indexOf(M.scope);return(T===-1?999:T)-(P===-1?999:P)});const v=r-2*s,w=a-2*s;return o.map($=>{const b=u[$.id]??0,M=p[b],T=M.indexOf($);return{id:$.id,x:s+(T+.5)/M.length*v,y:s+b/Math.max(f,1)*w,vx:0,vy:0}})}const C5=Object.freeze(Object.defineProperty({__proto__:null,apply:M5,meta:T5},Symbol.toStringTag,{value:"Module"})),A5={id:"nPartite",label:"N-Partite Grid"};function j5(o,n,r,a,s=80){const u=As(o,n),f=Math.max(...o.map(T=>u[T.id]??0),0),p={};for(const T of o){const P=u[T.id]??0;(p[P]??(p[P]=[])).push(T)}const v={};for(const T of o)v[T.id]=[];for(const[T,P]of n)v[P]&&v[P].push(T);const w=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],$={},b=r-2*s,M=a-2*s;for(let T=0;T<=f;T++){const P=p[T]??[];T===0?P.sort((q,I)=>{const W=w.indexOf(q.scope),N=w.indexOf(I.scope);return(W===-1?999:W)-(N===-1?999:N)}):P.sort((q,I)=>{const W=N=>{const L=v[N.id]??[];return L.length===0?r/2:L.reduce((U,K)=>{var H;return U+(((H=$[K])==null?void 0:H.x)??r/2)},0)/L.length};return W(q)-W(I)});const R=s+T/Math.max(f,1)*M;P.forEach((q,I)=>{const W=P.length===1?r/2:s+I/(P.length-1)*b;$[q.id]={x:W,y:R}})}return o.map(T=>{var P,R;return{id:T.id,x:((P=$[T.id])==null?void 0:P.x)??r/2,y:((R=$[T.id])==null?void 0:R.y)??a/2,vx:0,vy:0}})}const Pd=Object.freeze(Object.defineProperty({__proto__:null,apply:j5,meta:A5},Symbol.toStringTag,{value:"Module"})),Dd=[Pd,C5,S5],js="nPartite";function E5(o){return Dd.find(n=>n.meta.id===o)??Pd}const Go=1400,Es=1e3,xi=80,Yo=As(dt,v0),q5=Math.max(...dt.map(o=>Yo[o.id]??0),0),Rd=Object.fromEntries(dt.map(o=>[o.id,xi+(Yo[o.id]??0)/Math.max(q5,1)*(Es-2*xi)])),P5=(()=>{const o=Object.fromEntries(dt.map((n,r)=>[n.id,r]));return v0.map(([n,r])=>[o[n],o[r]]).filter(([n,r])=>n!=null&&r!=null)})(),W1=Math.sqrt(Go*Es/dt.length)*.9,D5=.4,U1=6,R5=.35,V1=.012;function B5(o=js){return E5(o).apply(dt,v0,Go,Es,xi).map(a=>({id:a.id,x:a.x+(Math.random()-.5)*20,y:Rd[a.id]??a.y,vx:0,vy:0}))}function N5(o,n,r,a){const s=o.length,u=new Float64Array(s);for(let f=0;f<s;f++)for(let p=f+1;p<s;p++){if(Yo[o[f].id]!==Yo[o[p].id])continue;const v=o[f].x-o[p].x,w=Math.abs(v)||.1,$=W1*W1/(w*w),b=v<0?-1:1;u[f]+=b*$,u[p]-=b*$}for(const[f,p]of P5){const v=o[p].x-o[f].x;u[f]+=v*V1,u[p]-=v*V1}for(let f=0;f<s;f++)u[f]+=(Go/2-o[f].x)*.003;return o.map((f,p)=>{if(f.id===n)return{...f,x:r,y:a,vx:0,vy:0};let v=(f.vx+u[p])*D5;Math.abs(v)>U1&&(v*=U1/Math.abs(v));const w=Rd[f.id]??f.y,$=f.y+(w-f.y)*R5;return{...f,vx:v,vy:0,x:Math.max(xi,Math.min(Go-xi,f.x+v)),y:$}})}function ts(o=js,n=300){let r=B5(o);for(let a=0;a<n;a++)r=N5(r,null,0,0);return Object.fromEntries(r.map(a=>[a.id,{x:a.x,y:a.y}]))}const Hr={surfaceHi:"#0d1520ee",border:"#1e2d45",textBody:"#c8d6e5",textDim:"#6b7d9a",knownHi:"#2ecc71",unknownHi:"#e74c3c",frontier:"#f39c12"},L5="'JetBrains Mono','SF Mono','Fira Code',monospace",mi=(o,n)=>({padding:"3px 10px",borderRadius:20,fontSize:10,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${Hr.border}`,background:o?`${n}22`:"transparent",color:o?n:Hr.textDim}),G1=o=>({position:"absolute",right:16,top:16,width:280,background:Hr.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${o}40`,borderRadius:8,padding:"14px 16px",fontSize:11,color:Hr.textBody,zIndex:20,maxHeight:"85vh",overflowY:"auto"}),pi=o=>({padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o});function O5(o){const[n,r]=ie.useState({x:40,y:40,scale:.72}),[a,s]=ie.useState("grab"),u=ie.useRef(!1),f=ie.useRef({x:0,y:0}),p=ie.useRef(null),v=ie.useRef(null),w=ie.useCallback(N=>{N.preventDefault();const L=N.deltaY>0?.9:1.1;r(U=>{const K=Math.max(.15,Math.min(5,U.scale*L)),H=N.clientX,Z=N.clientY,V=H-(H-U.x)/U.scale*K,ye=Z-(Z-U.y)/U.scale*K;return{x:V,y:ye,scale:K}})},[]),$=ie.useCallback((N,L)=>({x:(N-n.x)/n.scale,y:(L-n.y)/n.scale}),[n]),b=ie.useCallback((N,L)=>{u.current=!0,s("grabbing"),f.current={x:N-n.x,y:L-n.y}},[n]),M=ie.useCallback(N=>u.current?(r(L=>({...L,x:N.clientX-f.current.x,y:N.clientY-f.current.y})),!0):!1,[]),T=ie.useCallback(()=>{u.current=!1,s("grab")},[]),P=(N,L)=>{const U=N.clientX-L.clientX,K=N.clientY-L.clientY;return Math.sqrt(U*U+K*K)},R=(N,L)=>({x:(N.clientX+L.clientX)/2,y:(N.clientY+L.clientY)/2}),q=ie.useCallback(N=>{N.touches.length===1?(u.current=!0,r(L=>(f.current={x:N.touches[0].clientX-L.x,y:N.touches[0].clientY-L.y},L)),p.current=null,v.current=null):N.touches.length===2&&(u.current=!1,p.current=P(N.touches[0],N.touches[1]),v.current=R(N.touches[0],N.touches[1]))},[]),I=ie.useCallback(N=>{if(N.preventDefault(),N.touches.length===1&&u.current)r(L=>({...L,x:N.touches[0].clientX-f.current.x,y:N.touches[0].clientY-f.current.y}));else if(N.touches.length===2&&p.current!==null){const L=P(N.touches[0],N.touches[1]),U=R(N.touches[0],N.touches[1]),K=L/p.current;r(H=>{const Z=Math.max(.15,Math.min(5,H.scale*K)),V=v.current.x,ye=v.current.y,ze=V-(V-H.x)/H.scale*Z,Ce=ye-(ye-H.y)/H.scale*Z;return{x:ze,y:Ce,scale:Z}}),p.current=L,v.current=U}},[]),W=ie.useCallback(()=>{u.current=!1,p.current=null,v.current=null},[]);return ie.useEffect(()=>{const N=o.current;if(N)return N.addEventListener("wheel",w,{passive:!1}),N.addEventListener("touchstart",q,{passive:!1}),N.addEventListener("touchmove",I,{passive:!1}),N.addEventListener("touchend",W,{passive:!1}),()=>{N.removeEventListener("wheel",w),N.removeEventListener("touchstart",q),N.removeEventListener("touchmove",I),N.removeEventListener("touchend",W)}},[o,w,q,I,W]),{viewTransform:n,setViewTransform:r,toCanvas:$,isPanning:u,panStart:f,startPan:b,cursorStyle:a,setCursorStyle:s,handleMouseMove:M,handleMouseUp:T,handleWheel:w}}function I5(o,n,r,a){const s=ie.useRef(null),u=ie.useRef({x:0,y:0}),f=ie.useCallback((w,$,b)=>{const M=o($,b),T=n.find(P=>P.id===w);T&&(s.current=w,u.current={x:M.x-T.x,y:M.y-T.y},a==null||a("grabbing"))},[o,n,a]),p=ie.useCallback((w,$)=>{if(!s.current)return!1;const b=o(w,$),M=s.current;return r(T=>({...T,[M]:{x:b.x-u.current.x,y:b.y-u.current.y}})),!0},[o,r]),v=ie.useCallback(()=>{s.current=null,a==null||a("grab")},[a]);return{draggingNode:s,startNodeDrag:f,handleDragMove:p,handleDragEnd:v}}const Bd="wizmat_v1_";function F5(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function H5(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function Bn(o,n){const r=Bd+o,[a,s]=ie.useState(()=>{try{const f=localStorage.getItem(r);return f===null?n:H5(f,n)}catch{return n}});ie.useEffect(()=>{try{localStorage.setItem(r,F5(a))}catch{}},[r,a]);const u=ie.useCallback(f=>{s(p=>typeof f=="function"?f(p):f)},[]);return[a,u]}function W5(){try{Object.keys(localStorage).filter(o=>o.startsWith(Bd)).forEach(o=>localStorage.removeItem(o))}catch{}}function U5(o,n,r){var u;const a={...n},s=[o];for(;s.length;){const f=s.shift();a[f]!=="known"&&(a[f]="known",(u=r.prereqs[f])==null||u.forEach(p=>{a[p]!=="known"&&s.push(p)}))}return a}function Y1(o,n,r){var u;const a={...n},s=[o];for(;s.length;){const f=s.shift();a[f]!=="unknown"&&(a[f]="unknown",(u=r.dependents[f])==null||u.forEach(p=>{a[p]!=="unknown"&&s.push(p)}))}return a}function V5(o,n,r){return o.filter(a=>n[a.id]!=="known"&&n[a.id]!=="unknown").filter(a=>(r.prereqs[a.id]??[]).every(s=>n[s]==="known")).map(a=>a.id)}function G5(o,n,r,a=.5){var s,u,f;try{const p=1-a,v=o.filter(b=>n[b.id]!=="known"&&n[b.id]!=="unknown");if(v.length===0)return null;const w=v.map(b=>{const M=Nd(b.id,n,r),T=Ld(b.id,n,r),P=a*M+p*T;return{id:b.id,erv:P||0,ancestorsToReveal:M,descendantsToReveal:T}});return w.sort((b,M)=>M.erv-b.erv),((s=w[0])==null?void 0:s.id)||((u=v[0])==null?void 0:u.id)||null}catch(p){return console.error("pickNextQuestion error:",p),((f=o.filter(w=>n[w.id]!=="known"&&n[w.id]!=="unknown")[0])==null?void 0:f.id)||null}}function Nd(o,n,r){const a=new Set,s=[...r.prereqs[o]??[]];let u=0;for(;s.length>0;){const f=s.shift();if(a.has(f))continue;a.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const p=r.prereqs[f]??[];for(const v of p)a.has(v)||s.push(v)}return u}function Ld(o,n,r){const a=new Set,s=[...r.dependents[o]??[]];let u=0;for(;s.length>0;){const f=s.shift();if(a.has(f))continue;a.add(f),n[f]!=="known"&&n[f]!=="unknown"&&u++;const p=r.dependents[f]??[];for(const v of p)a.has(v)||s.push(v)}return u}function Y5(o,n,r,a=.5){try{const s=o.filter(w=>n[w.id]!=="known"&&n[w.id]!=="unknown");if(s.length===0)return 0;const u=1-a;let f=0;for(const w of s){const $=Nd(w.id,n,r),b=Ld(w.id,n,r),M=a*$+u*b;f+=M||0}if(!f||f===0)return s.length;const p=s.length,v=p*p/f;return isNaN(v)?s.length:Math.ceil(v)}catch(s){return console.error("estimateRemainingQuestions error:",s),null}}function X5(o,n,r){const a={...o};for(const[s,u]of Object.entries(n)){const f=a[s]??{alpha:1,beta:1};a[s]={alpha:f.alpha+(r?u:0),beta:f.beta+(r?0:u)}}return a}function Q5(o,n){const r={};for(const a of o){const s=n[a]??{alpha:1,beta:1},u=s.alpha+s.beta,f=s.alpha/u;f>.75&&u>2?r[a]="known":f<.25&&u>2?r[a]="unknown":r[a]="uncertain"}return r}function K5(o,n,r){const a=new Set,s=new Set(r.map(f=>f.id)),u=[o];for(;u.length;){const f=u.shift();if(!a.has(f)&&s.has(f)){a.add(f);for(const p of n.prereqs[f]??[])a.has(p)||u.push(p)}}return a}function Z5(o,n,r,a,s){var p;const u=o.filter(v=>r[v]==="uncertain");if(u.length===0)return null;const f=u.map(v=>{const w=n[v]??{alpha:1,beta:1},$=w.alpha+w.beta,b=w.alpha/$,M=1-b,T=new Set(o);let P=0;const R=[...a.prereqs[v]??[]],q=new Set;for(;R.length;){const U=R.shift();if(!q.has(U)){q.add(U),T.has(U)&&r[U]==="uncertain"&&P++;for(const K of a.prereqs[U]??[])q.has(K)||R.push(K)}}let I=0;const W=[...a.dependents[v]??[]],N=new Set;for(;W.length;){const U=W.shift();if(!N.has(U)){N.add(U),T.has(U)&&r[U]==="uncertain"&&I++;for(const K of a.dependents[U]??[])N.has(K)||W.push(K)}}const L=b*P+M*I;return{id:v,erv:L,strength:$}});return f.sort((v,w)=>Math.abs(v.erv-w.erv)>.01?w.erv-v.erv:v.strength-w.strength),((p=f[0])==null?void 0:p.id)??u[0]}function J5(o,n){return o.every(r=>n[r]!=="uncertain")}function e6(o,n){return o.every(r=>n[r.id]==="known"||n[r.id]==="unknown")}function t6(o){const[n,r]=Bn("diagMode",!1),[a,s]=Bn("diagSubMode","quick"),[u,f]=Bn("belief",{}),[p,v]=Bn("targetNode",null),[w,$]=Bn("stats",{correct:0,incorrect:0,questionsAnswered:0}),[b,M]=Bn("answeredQuestions",new Set),[T,P]=Bn("betaBeliefs",{}),[R,q]=Bn("quizNode",null),I=ie.useMemo(()=>{const xe=w.correct+w.incorrect;return xe===0?.5:(w.correct+.5)/(xe+1)},[w]),W=w.questionsAnswered,N=ie.useMemo(()=>n&&a==="quick"?V5(dt,u,o):[],[n,a,u,o]),L=ie.useMemo(()=>Object.keys(u).length>0||w.questionsAnswered>0,[u,w]),U=L?N:[],K=ie.useMemo(()=>n&&a==="quick"?G5(dt,u,o,I):null,[n,a,u,o,I]),H=ie.useMemo(()=>n&&a==="quick"?Y5(dt,u,o,I):null,[n,a,u,o,I]),Z=ie.useMemo(()=>n&&a==="quick"&&L&&e6(dt,u),[n,a,L,u]),V=ie.useMemo(()=>!n||a!=="deepdive"||!p?[]:[...K5(p,o,dt)],[n,a,p,o]),ye=ie.useMemo(()=>a!=="deepdive"?{}:Q5(V,T),[a,V,T]),ze=ie.useMemo(()=>!n||a!=="deepdive"||V.length===0?null:Z5(V,T,ye,o),[n,a,V,T,ye,o]),Ce=ie.useMemo(()=>!n||a!=="deepdive"||V.length===0?!1:J5(V,ye),[n,a,V,ye]),He=ie.useCallback((xe,ne)=>n?a==="deepdive"?V.includes(xe)?(ye[xe]!=="uncertain"||q(xe),!0):!1:u[xe]==="unknown"?!0:ne?(f(fe=>Y1(xe,fe,o)),q(null),!0):u[xe]==="known"?(f(fe=>{const oe={...fe};return delete oe[xe],oe}),q(null),!0):(q(xe),!0):!1,[n,a,u,o,V,ye]),Fe=ie.useCallback((xe,ne,fe,oe)=>{if(a==="deepdive"){const j=(fe==null?void 0:fe.tests)??{[xe]:1};P(F=>X5(F,j,ne))}else f(j=>ne?U5(xe,j,o):Y1(xe,j,o));typeof oe=="number"&&M(j=>new Set([...j,`${xe}:${oe}`])),$(j=>({correct:j.correct+(ne?1:0),incorrect:j.incorrect+(ne?0:1),questionsAnswered:j.questionsAnswered+1})),q(null)},[a,o]),Ge=ie.useCallback(()=>{W5(),r(!1),s("quick"),f({}),P({}),q(null),v(null),$({correct:0,incorrect:0,questionsAnswered:0}),M(new Set)},[]),Ue=ie.useCallback(xe=>{s("deepdive"),v(xe),P({}),f({}),q(null),$({correct:0,incorrect:0,questionsAnswered:0}),M(new Set),r(!0)},[]);return{diagMode:n,setDiagMode:r,mode:a,setMode:s,quizNode:R,setQuizNode:q,questionsAnswered:W,answeredQuestions:b,getAnsweredIndices:xe=>{const ne=[];return b.forEach(fe=>{const[oe,j]=fe.split(":");oe===xe&&ne.push(parseInt(j,10))}),ne},handleDiagClick:He,handleQuizAnswer:Fe,resetDiagnostic:Ge,startDeepDive:Ue,targetNode:p,belief:u,frontier:N,visibleFrontier:U,hasStarted:L,nextSuggestedId:K,expectedRemaining:H,pCorrect:I,sessionComplete:Z,betaBeliefs:T,subgraphIds:V,ddClassification:ye,ddNextNodeId:ze,ddComplete:Ce}}function X1(o){return 6+o.level*2}function n6({edges:o,nodes:n,highlightedIds:r}){const a=ie.useMemo(()=>Object.fromEntries(n.map(s=>[s.id,s])),[n]);return z.jsx("g",{children:o.map(([s,u])=>{const f=a[s],p=a[u];if(!f||!p)return null;const v=(r==null?void 0:r.has(s))&&(r==null?void 0:r.has(u)),w=r&&!v,$=p.x-f.x,b=p.y-f.y,M=Math.sqrt($*$+b*b)||1,T=X1(p)+3,P=p.x-$/M*T,R=p.y-b/M*T,q=X1(f)+2,I=f.x+$/M*q,W=f.y+b/M*q,N=w?"#0f1825":v?"#4a9eff":"#2a3f5a",L=v?1.8:1,U=w?.15:v?1:.55,K=w?"url(#arrow-dim)":v?"url(#arrow-hi)":"url(#arrow-default)";return z.jsx("line",{x1:I,y1:W,x2:P,y2:R,stroke:N,strokeWidth:L,opacity:U,markerEnd:K},`${s}-${u}`)})})}const ea={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},$0={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},g0={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}};function r6(o){return 6+o.level*2}function i6(o){return o<.4?8:o<.65?13:o<1?18:28}function o6({nodes:o,filteredIds:n,highlightedIds:r,selected:a,onSelect:s,onHover:u,lang:f,diagMode:p,belief:v,frontier:w,scale:$}){return z.jsx("g",{children:o.map(b=>{const M=r6(b),T=$0[b.scope]||"#aaa",P=n&&!n.has(b.id),R=r==null?void 0:r.has(b.id),q=a===b.id,I=r&&!R||P,W=f==="pl"?b.labelPl:b.label,N=i6($??1);let L=T,U=I?.15:.9,K=I?.2:.85,H=null,Z=2;if(p){const V=v[b.id],ye=w.includes(b.id);U=P?.1:.9,K=P?.15:.9,V==="known"?(L="#27ae60",H="#2ecc71"):V==="unknown"?(L="#c0392b",U=P?.1:.5,H="#e74c3c"):ye?(L="#f39c12",H="#f1c40f",Z=3):(L=T,U=P?.1:.35)}return z.jsxs("g",{"data-node-id":b.id,style:{cursor:"pointer"},onClick:()=>s(b.id===a?null:b.id),onMouseEnter:()=>u(b.id),onMouseLeave:()=>u(null),children:[(q||p&&H)&&z.jsx("circle",{cx:b.x,cy:b.y,r:M+(q?5:4),fill:"none",stroke:q?T:H,strokeWidth:q?2:Z,opacity:q?.5:.9}),z.jsx("circle",{cx:b.x,cy:b.y,r:M,fill:L,fillOpacity:U,stroke:!p&&(R||q)?T:"none",strokeWidth:1.5}),z.jsx("text",{x:b.x,y:b.y+M+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:K,style:{pointerEvents:"none",userSelect:"none"},children:W.length>N?W.slice(0,N-1)+"…":W})]},b.id)})})}function a6({nodeId:o,nodes:n,adjacency:r,lang:a}){var b,M;const s=n.find(T=>T.id===o);if(!s)return null;const u=$0[s.scope]||"#aaa",f=a==="pl"?s.labelPl:s.label,p=r.prereqs[o]||[],v=r.dependents[o]||[],w=Object.fromEntries(n.map(T=>[T.id,T])),$=T=>{var P,R;return a==="pl"?(P=w[T])==null?void 0:P.labelPl:(R=w[T])==null?void 0:R.label};return z.jsxs("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:`1px solid ${u}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",lineHeight:1.6,zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[z.jsx("div",{style:{color:u,fontWeight:700,fontSize:13,marginBottom:6},children:f}),z.jsxs("div",{style:{color:"#6b7d9a",fontSize:10,marginBottom:8},children:[(b=ea[s.section])==null?void 0:b.label," · ",(M=g0[s.scope])==null?void 0:M[a==="pl"?"pl":"en"]," · ",ae("level",a)," ",s.level]}),p.length>0?z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:ae("prerequisites",a)}),p.map(T=>z.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:10,lineHeight:1.7},children:["← ",$(T)]},T))]}):z.jsx("div",{style:{color:"#3a4d63",fontSize:10,fontStyle:"italic"},children:ae("noPrereqs",a)}),v.length>0?z.jsxs("div",{style:{marginTop:10},children:[z.jsx("div",{style:{color:"#3dc9b0",fontSize:10,fontWeight:600,marginBottom:4},children:ae("enables",a)}),v.map(T=>z.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:10,lineHeight:1.7},children:["→ ",$(T)]},T))]}):z.jsx("div",{style:{color:"#3a4d63",fontSize:10,fontStyle:"italic",marginTop:8},children:ae("noDependents",a)})]})}class Lt{constructor(n,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=a}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Lt(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Vt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Vt(r,Lt.range(this,n))}}class ee{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var a="KaTeX parse error: "+n,s,u,f=r&&r.loc;if(f&&f.start<=f.end){var p=f.lexer.input;s=f.start,u=f.end,s===p.length?a+=" at end of input: ":a+=" at position "+(s+1)+": ";var v=p.slice(s,u).replace(/[^]/g,"$&̲"),w;s>15?w="…"+p.slice(s-15,s):w=p.slice(0,s);var $;u+15<p.length?$=p.slice(u,u+15)+"…":$=p.slice(u),a+=w+v+$}var b=new Error(a);return b.name="ParseError",b.__proto__=ee.prototype,b.position=s,s!=null&&u!=null&&(b.length=u-s),b.rawMessage=n,b}}ee.prototype.__proto__=Error.prototype;var l6=/([A-Z])/g,qs=o=>o.replace(l6,"-$1").toLowerCase(),s6={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},u6=/[&><"']/g,St=o=>String(o).replace(u6,n=>s6[n]),gi=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?gi(o.body[0]):o:o.type==="font"?gi(o.body):o,c6=new Set(["mathord","textord","atom"]),In=o=>c6.has(gi(o).type),d6=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},Uo={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function f6(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Ps{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in Uo)if(Uo.hasOwnProperty(r)){var a=Uo[r];this[r]=n[r]!==void 0?a.processor?a.processor(n[r]):n[r]:f6(a)}}reportNonstrict(n,r,a){var s=this.strict;if(typeof s=="function"&&(s=s(n,r,a)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new ee("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),a);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,a){var s=this.strict;if(typeof s=="function")try{s=s(n,r,a)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=d6(n.url);if(r==null)return!1;n.protocol=r}var a=typeof this.trust=="function"?this.trust(n):this.trust;return!!a}}class pr{constructor(n,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=a}sup(){return wn[h6[this.id]]}sub(){return wn[m6[this.id]]}fracNum(){return wn[p6[this.id]]}fracDen(){return wn[v6[this.id]]}cramp(){return wn[g6[this.id]]}text(){return wn[y6[this.id]]}isTight(){return this.size>=2}}var Ds=0,Xo=1,y0=2,Ln=3,wi=4,nn=5,x0=6,jt=7,wn=[new pr(Ds,0,!1),new pr(Xo,0,!0),new pr(y0,1,!1),new pr(Ln,1,!0),new pr(wi,2,!1),new pr(nn,2,!0),new pr(x0,3,!1),new pr(jt,3,!0)],h6=[wi,nn,wi,nn,x0,jt,x0,jt],m6=[nn,nn,nn,nn,jt,jt,jt,jt],p6=[y0,Ln,wi,nn,x0,jt,x0,jt],v6=[Ln,Ln,nn,nn,jt,jt,jt,jt],g6=[Xo,Xo,Ln,Ln,nn,nn,jt,jt],y6=[Ds,Xo,y0,Ln,y0,Ln,y0,Ln],Me={DISPLAY:wn[Ds],TEXT:wn[y0],SCRIPT:wn[wi],SCRIPTSCRIPT:wn[x0]},ys=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function x6(o){for(var n=0;n<ys.length;n++)for(var r=ys[n],a=0;a<r.blocks.length;a++){var s=r.blocks[a];if(o>=s[0]&&o<=s[1])return r.name}return null}var Vo=[];ys.forEach(o=>o.blocks.forEach(n=>Vo.push(...n)));function Od(o){for(var n=0;n<Vo.length;n+=2)if(o>=Vo[n]&&o<=Vo[n+1])return!0;return!1}var p0=80,w6=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},b6=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},$6=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},k6=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},_6=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},z6=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},S6=function(n,r,a){var s=a-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},T6=function(n,r,a){r=1e3*r;var s="";switch(n){case"sqrtMain":s=w6(r,p0);break;case"sqrtSize1":s=b6(r,p0);break;case"sqrtSize2":s=$6(r,p0);break;case"sqrtSize3":s=k6(r,p0);break;case"sqrtSize4":s=_6(r,p0);break;case"sqrtTall":s=S6(r,p0,a)}return s},M6=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},Q1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},C6=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class $i{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var bn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ro={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},K1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function A6(o,n){bn[o]=n}function Rs(o,n,r){if(!bn[n])throw new Error("Font metrics not found for font: "+n+".");var a=o.charCodeAt(0),s=bn[n][a];if(!s&&o[0]in K1&&(a=K1[o[0]].charCodeAt(0),s=bn[n][a]),!s&&r==="text"&&Od(a)&&(s=bn[n][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var ns={};function j6(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!ns[n]){var r=ns[n]={cssEmPerMu:Ro.quad[n]/18};for(var a in Ro)Ro.hasOwnProperty(a)&&(r[a]=Ro[a][n])}return ns[n]}var E6=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Z1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],J1=function(n,r){return r.size<2?n:E6[n-1][r.size-1]};class Nn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Nn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Z1[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a]);return new Nn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:J1(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Z1[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=J1(Nn.BASESIZE,n);return this.size===r&&this.textSize===Nn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Nn.BASESIZE?["sizing","reset-size"+this.size,"size"+Nn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=j6(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Nn.BASESIZE=6;var xs={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},q6={ex:!0,em:!0,mu:!0},Id=function(n){return typeof n!="string"&&(n=n.unit),n in xs||n in q6||n==="ex"},rt=function(n,r){var a;if(n.unit in xs)a=xs[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,n.unit==="ex")a=s.fontMetrics().xHeight;else if(n.unit==="em")a=s.fontMetrics().quad;else throw new ee("Invalid unit: '"+n.unit+"'");s!==r&&(a*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*a,r.maxSize)},le=function(n){return+n.toFixed(4)+"em"},yr=function(n){return n.filter(r=>r).join(" ")},Fd=function(n,r,a){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},Hd=function(n){var r=document.createElement(n);r.className=yr(this.classes);for(var a in this.style)this.style.hasOwnProperty(a)&&(r.style[a]=this.style[a]);for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&r.setAttribute(s,this.attributes[s]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},P6=/[\s"'>/=\x00-\x1f]/,Wd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+St(yr(this.classes))+'"');var a="";for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=qs(s)+":"+this.style[s]+";");a&&(r+=' style="'+St(a)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(P6.test(u))throw new ee("Invalid attribute name '"+u+"'");r+=" "+u+'="'+St(this.attributes[u])+'"'}r+=">";for(var f=0;f<this.children.length;f++)r+=this.children[f].toMarkup();return r+="</"+n+">",r};class ki{constructor(n,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Fd.call(this,n,a,s),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Hd.call(this,"span")}toMarkup(){return Wd.call(this,"span")}}class Bs{constructor(n,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Fd.call(this,r,s),this.children=a||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Hd.call(this,"a")}toMarkup(){return Wd.call(this,"a")}}class D6{constructor(n,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=a}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+St(this.src)+'"'+(' alt="'+St(this.alt)+'"'),r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=qs(a)+":"+this.style[a]+";");return r&&(n+=' style="'+St(r)+'"'),n+="'/>",n}}var R6={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class rn{constructor(n,r,a,s,u,f,p,v){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=a||0,this.italic=s||0,this.skew=u||0,this.width=f||0,this.classes=p||[],this.style=v||{},this.maxFontSize=0;var w=x6(this.text.charCodeAt(0));w&&this.classes.push(w+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=R6[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=le(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=yr(this.classes));for(var a in this.style)this.style.hasOwnProperty(a)&&(r=r||document.createElement("span"),r.style[a]=this.style[a]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=St(yr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+this.italic+"em;");for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=qs(s)+":"+this.style[s]+";");a&&(n=!0,r+=' style="'+St(a)+'"');var u=St(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class On{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+St(this.attributes[r])+'"');n+=">";for(var a=0;a<this.children.length;a++)n+=this.children[a].toMarkup();return n+="</svg>",n}}class xr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",Q1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+St(this.alternate)+'"/>':'<path d="'+St(Q1[this.pathName])+'"/>'}}class ws{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+St(this.attributes[r])+'"');return n+="/>",n}}function ed(o){if(o instanceof rn)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function B6(o){if(o instanceof ki)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var N6={bin:1,close:1,inner:1,open:1,punct:1,rel:1},L6={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Xe={math:{},text:{}};function d(o,n,r,a,s,u){Xe[o][s]={font:n,group:r,replace:a},u&&a&&(Xe[o][a]=Xe[o][s])}var m="math",Y="text",g="main",_="ams",Je="accent-token",de="bin",Et="close",k0="inner",$e="mathord",ht="op-token",Gt="open",ta="punct",S="rel",Fn="spacing",A="textord";d(m,g,S,"≡","\\equiv",!0);d(m,g,S,"≺","\\prec",!0);d(m,g,S,"≻","\\succ",!0);d(m,g,S,"∼","\\sim",!0);d(m,g,S,"⊥","\\perp");d(m,g,S,"⪯","\\preceq",!0);d(m,g,S,"⪰","\\succeq",!0);d(m,g,S,"≃","\\simeq",!0);d(m,g,S,"∣","\\mid",!0);d(m,g,S,"≪","\\ll",!0);d(m,g,S,"≫","\\gg",!0);d(m,g,S,"≍","\\asymp",!0);d(m,g,S,"∥","\\parallel");d(m,g,S,"⋈","\\bowtie",!0);d(m,g,S,"⌣","\\smile",!0);d(m,g,S,"⊑","\\sqsubseteq",!0);d(m,g,S,"⊒","\\sqsupseteq",!0);d(m,g,S,"≐","\\doteq",!0);d(m,g,S,"⌢","\\frown",!0);d(m,g,S,"∋","\\ni",!0);d(m,g,S,"∝","\\propto",!0);d(m,g,S,"⊢","\\vdash",!0);d(m,g,S,"⊣","\\dashv",!0);d(m,g,S,"∋","\\owns");d(m,g,ta,".","\\ldotp");d(m,g,ta,"⋅","\\cdotp");d(m,g,A,"#","\\#");d(Y,g,A,"#","\\#");d(m,g,A,"&","\\&");d(Y,g,A,"&","\\&");d(m,g,A,"ℵ","\\aleph",!0);d(m,g,A,"∀","\\forall",!0);d(m,g,A,"ℏ","\\hbar",!0);d(m,g,A,"∃","\\exists",!0);d(m,g,A,"∇","\\nabla",!0);d(m,g,A,"♭","\\flat",!0);d(m,g,A,"ℓ","\\ell",!0);d(m,g,A,"♮","\\natural",!0);d(m,g,A,"♣","\\clubsuit",!0);d(m,g,A,"℘","\\wp",!0);d(m,g,A,"♯","\\sharp",!0);d(m,g,A,"♢","\\diamondsuit",!0);d(m,g,A,"ℜ","\\Re",!0);d(m,g,A,"♡","\\heartsuit",!0);d(m,g,A,"ℑ","\\Im",!0);d(m,g,A,"♠","\\spadesuit",!0);d(m,g,A,"§","\\S",!0);d(Y,g,A,"§","\\S");d(m,g,A,"¶","\\P",!0);d(Y,g,A,"¶","\\P");d(m,g,A,"†","\\dag");d(Y,g,A,"†","\\dag");d(Y,g,A,"†","\\textdagger");d(m,g,A,"‡","\\ddag");d(Y,g,A,"‡","\\ddag");d(Y,g,A,"‡","\\textdaggerdbl");d(m,g,Et,"⎱","\\rmoustache",!0);d(m,g,Gt,"⎰","\\lmoustache",!0);d(m,g,Et,"⟯","\\rgroup",!0);d(m,g,Gt,"⟮","\\lgroup",!0);d(m,g,de,"∓","\\mp",!0);d(m,g,de,"⊖","\\ominus",!0);d(m,g,de,"⊎","\\uplus",!0);d(m,g,de,"⊓","\\sqcap",!0);d(m,g,de,"∗","\\ast");d(m,g,de,"⊔","\\sqcup",!0);d(m,g,de,"◯","\\bigcirc",!0);d(m,g,de,"∙","\\bullet",!0);d(m,g,de,"‡","\\ddagger");d(m,g,de,"≀","\\wr",!0);d(m,g,de,"⨿","\\amalg");d(m,g,de,"&","\\And");d(m,g,S,"⟵","\\longleftarrow",!0);d(m,g,S,"⇐","\\Leftarrow",!0);d(m,g,S,"⟸","\\Longleftarrow",!0);d(m,g,S,"⟶","\\longrightarrow",!0);d(m,g,S,"⇒","\\Rightarrow",!0);d(m,g,S,"⟹","\\Longrightarrow",!0);d(m,g,S,"↔","\\leftrightarrow",!0);d(m,g,S,"⟷","\\longleftrightarrow",!0);d(m,g,S,"⇔","\\Leftrightarrow",!0);d(m,g,S,"⟺","\\Longleftrightarrow",!0);d(m,g,S,"↦","\\mapsto",!0);d(m,g,S,"⟼","\\longmapsto",!0);d(m,g,S,"↗","\\nearrow",!0);d(m,g,S,"↩","\\hookleftarrow",!0);d(m,g,S,"↪","\\hookrightarrow",!0);d(m,g,S,"↘","\\searrow",!0);d(m,g,S,"↼","\\leftharpoonup",!0);d(m,g,S,"⇀","\\rightharpoonup",!0);d(m,g,S,"↙","\\swarrow",!0);d(m,g,S,"↽","\\leftharpoondown",!0);d(m,g,S,"⇁","\\rightharpoondown",!0);d(m,g,S,"↖","\\nwarrow",!0);d(m,g,S,"⇌","\\rightleftharpoons",!0);d(m,_,S,"≮","\\nless",!0);d(m,_,S,"","\\@nleqslant");d(m,_,S,"","\\@nleqq");d(m,_,S,"⪇","\\lneq",!0);d(m,_,S,"≨","\\lneqq",!0);d(m,_,S,"","\\@lvertneqq");d(m,_,S,"⋦","\\lnsim",!0);d(m,_,S,"⪉","\\lnapprox",!0);d(m,_,S,"⊀","\\nprec",!0);d(m,_,S,"⋠","\\npreceq",!0);d(m,_,S,"⋨","\\precnsim",!0);d(m,_,S,"⪹","\\precnapprox",!0);d(m,_,S,"≁","\\nsim",!0);d(m,_,S,"","\\@nshortmid");d(m,_,S,"∤","\\nmid",!0);d(m,_,S,"⊬","\\nvdash",!0);d(m,_,S,"⊭","\\nvDash",!0);d(m,_,S,"⋪","\\ntriangleleft");d(m,_,S,"⋬","\\ntrianglelefteq",!0);d(m,_,S,"⊊","\\subsetneq",!0);d(m,_,S,"","\\@varsubsetneq");d(m,_,S,"⫋","\\subsetneqq",!0);d(m,_,S,"","\\@varsubsetneqq");d(m,_,S,"≯","\\ngtr",!0);d(m,_,S,"","\\@ngeqslant");d(m,_,S,"","\\@ngeqq");d(m,_,S,"⪈","\\gneq",!0);d(m,_,S,"≩","\\gneqq",!0);d(m,_,S,"","\\@gvertneqq");d(m,_,S,"⋧","\\gnsim",!0);d(m,_,S,"⪊","\\gnapprox",!0);d(m,_,S,"⊁","\\nsucc",!0);d(m,_,S,"⋡","\\nsucceq",!0);d(m,_,S,"⋩","\\succnsim",!0);d(m,_,S,"⪺","\\succnapprox",!0);d(m,_,S,"≆","\\ncong",!0);d(m,_,S,"","\\@nshortparallel");d(m,_,S,"∦","\\nparallel",!0);d(m,_,S,"⊯","\\nVDash",!0);d(m,_,S,"⋫","\\ntriangleright");d(m,_,S,"⋭","\\ntrianglerighteq",!0);d(m,_,S,"","\\@nsupseteqq");d(m,_,S,"⊋","\\supsetneq",!0);d(m,_,S,"","\\@varsupsetneq");d(m,_,S,"⫌","\\supsetneqq",!0);d(m,_,S,"","\\@varsupsetneqq");d(m,_,S,"⊮","\\nVdash",!0);d(m,_,S,"⪵","\\precneqq",!0);d(m,_,S,"⪶","\\succneqq",!0);d(m,_,S,"","\\@nsubseteqq");d(m,_,de,"⊴","\\unlhd");d(m,_,de,"⊵","\\unrhd");d(m,_,S,"↚","\\nleftarrow",!0);d(m,_,S,"↛","\\nrightarrow",!0);d(m,_,S,"⇍","\\nLeftarrow",!0);d(m,_,S,"⇏","\\nRightarrow",!0);d(m,_,S,"↮","\\nleftrightarrow",!0);d(m,_,S,"⇎","\\nLeftrightarrow",!0);d(m,_,S,"△","\\vartriangle");d(m,_,A,"ℏ","\\hslash");d(m,_,A,"▽","\\triangledown");d(m,_,A,"◊","\\lozenge");d(m,_,A,"Ⓢ","\\circledS");d(m,_,A,"®","\\circledR");d(Y,_,A,"®","\\circledR");d(m,_,A,"∡","\\measuredangle",!0);d(m,_,A,"∄","\\nexists");d(m,_,A,"℧","\\mho");d(m,_,A,"Ⅎ","\\Finv",!0);d(m,_,A,"⅁","\\Game",!0);d(m,_,A,"‵","\\backprime");d(m,_,A,"▲","\\blacktriangle");d(m,_,A,"▼","\\blacktriangledown");d(m,_,A,"■","\\blacksquare");d(m,_,A,"⧫","\\blacklozenge");d(m,_,A,"★","\\bigstar");d(m,_,A,"∢","\\sphericalangle",!0);d(m,_,A,"∁","\\complement",!0);d(m,_,A,"ð","\\eth",!0);d(Y,g,A,"ð","ð");d(m,_,A,"╱","\\diagup");d(m,_,A,"╲","\\diagdown");d(m,_,A,"□","\\square");d(m,_,A,"□","\\Box");d(m,_,A,"◊","\\Diamond");d(m,_,A,"¥","\\yen",!0);d(Y,_,A,"¥","\\yen",!0);d(m,_,A,"✓","\\checkmark",!0);d(Y,_,A,"✓","\\checkmark");d(m,_,A,"ℶ","\\beth",!0);d(m,_,A,"ℸ","\\daleth",!0);d(m,_,A,"ℷ","\\gimel",!0);d(m,_,A,"ϝ","\\digamma",!0);d(m,_,A,"ϰ","\\varkappa");d(m,_,Gt,"┌","\\@ulcorner",!0);d(m,_,Et,"┐","\\@urcorner",!0);d(m,_,Gt,"└","\\@llcorner",!0);d(m,_,Et,"┘","\\@lrcorner",!0);d(m,_,S,"≦","\\leqq",!0);d(m,_,S,"⩽","\\leqslant",!0);d(m,_,S,"⪕","\\eqslantless",!0);d(m,_,S,"≲","\\lesssim",!0);d(m,_,S,"⪅","\\lessapprox",!0);d(m,_,S,"≊","\\approxeq",!0);d(m,_,de,"⋖","\\lessdot");d(m,_,S,"⋘","\\lll",!0);d(m,_,S,"≶","\\lessgtr",!0);d(m,_,S,"⋚","\\lesseqgtr",!0);d(m,_,S,"⪋","\\lesseqqgtr",!0);d(m,_,S,"≑","\\doteqdot");d(m,_,S,"≓","\\risingdotseq",!0);d(m,_,S,"≒","\\fallingdotseq",!0);d(m,_,S,"∽","\\backsim",!0);d(m,_,S,"⋍","\\backsimeq",!0);d(m,_,S,"⫅","\\subseteqq",!0);d(m,_,S,"⋐","\\Subset",!0);d(m,_,S,"⊏","\\sqsubset",!0);d(m,_,S,"≼","\\preccurlyeq",!0);d(m,_,S,"⋞","\\curlyeqprec",!0);d(m,_,S,"≾","\\precsim",!0);d(m,_,S,"⪷","\\precapprox",!0);d(m,_,S,"⊲","\\vartriangleleft");d(m,_,S,"⊴","\\trianglelefteq");d(m,_,S,"⊨","\\vDash",!0);d(m,_,S,"⊪","\\Vvdash",!0);d(m,_,S,"⌣","\\smallsmile");d(m,_,S,"⌢","\\smallfrown");d(m,_,S,"≏","\\bumpeq",!0);d(m,_,S,"≎","\\Bumpeq",!0);d(m,_,S,"≧","\\geqq",!0);d(m,_,S,"⩾","\\geqslant",!0);d(m,_,S,"⪖","\\eqslantgtr",!0);d(m,_,S,"≳","\\gtrsim",!0);d(m,_,S,"⪆","\\gtrapprox",!0);d(m,_,de,"⋗","\\gtrdot");d(m,_,S,"⋙","\\ggg",!0);d(m,_,S,"≷","\\gtrless",!0);d(m,_,S,"⋛","\\gtreqless",!0);d(m,_,S,"⪌","\\gtreqqless",!0);d(m,_,S,"≖","\\eqcirc",!0);d(m,_,S,"≗","\\circeq",!0);d(m,_,S,"≜","\\triangleq",!0);d(m,_,S,"∼","\\thicksim");d(m,_,S,"≈","\\thickapprox");d(m,_,S,"⫆","\\supseteqq",!0);d(m,_,S,"⋑","\\Supset",!0);d(m,_,S,"⊐","\\sqsupset",!0);d(m,_,S,"≽","\\succcurlyeq",!0);d(m,_,S,"⋟","\\curlyeqsucc",!0);d(m,_,S,"≿","\\succsim",!0);d(m,_,S,"⪸","\\succapprox",!0);d(m,_,S,"⊳","\\vartriangleright");d(m,_,S,"⊵","\\trianglerighteq");d(m,_,S,"⊩","\\Vdash",!0);d(m,_,S,"∣","\\shortmid");d(m,_,S,"∥","\\shortparallel");d(m,_,S,"≬","\\between",!0);d(m,_,S,"⋔","\\pitchfork",!0);d(m,_,S,"∝","\\varpropto");d(m,_,S,"◀","\\blacktriangleleft");d(m,_,S,"∴","\\therefore",!0);d(m,_,S,"∍","\\backepsilon");d(m,_,S,"▶","\\blacktriangleright");d(m,_,S,"∵","\\because",!0);d(m,_,S,"⋘","\\llless");d(m,_,S,"⋙","\\gggtr");d(m,_,de,"⊲","\\lhd");d(m,_,de,"⊳","\\rhd");d(m,_,S,"≂","\\eqsim",!0);d(m,g,S,"⋈","\\Join");d(m,_,S,"≑","\\Doteq",!0);d(m,_,de,"∔","\\dotplus",!0);d(m,_,de,"∖","\\smallsetminus");d(m,_,de,"⋒","\\Cap",!0);d(m,_,de,"⋓","\\Cup",!0);d(m,_,de,"⩞","\\doublebarwedge",!0);d(m,_,de,"⊟","\\boxminus",!0);d(m,_,de,"⊞","\\boxplus",!0);d(m,_,de,"⋇","\\divideontimes",!0);d(m,_,de,"⋉","\\ltimes",!0);d(m,_,de,"⋊","\\rtimes",!0);d(m,_,de,"⋋","\\leftthreetimes",!0);d(m,_,de,"⋌","\\rightthreetimes",!0);d(m,_,de,"⋏","\\curlywedge",!0);d(m,_,de,"⋎","\\curlyvee",!0);d(m,_,de,"⊝","\\circleddash",!0);d(m,_,de,"⊛","\\circledast",!0);d(m,_,de,"⋅","\\centerdot");d(m,_,de,"⊺","\\intercal",!0);d(m,_,de,"⋒","\\doublecap");d(m,_,de,"⋓","\\doublecup");d(m,_,de,"⊠","\\boxtimes",!0);d(m,_,S,"⇢","\\dashrightarrow",!0);d(m,_,S,"⇠","\\dashleftarrow",!0);d(m,_,S,"⇇","\\leftleftarrows",!0);d(m,_,S,"⇆","\\leftrightarrows",!0);d(m,_,S,"⇚","\\Lleftarrow",!0);d(m,_,S,"↞","\\twoheadleftarrow",!0);d(m,_,S,"↢","\\leftarrowtail",!0);d(m,_,S,"↫","\\looparrowleft",!0);d(m,_,S,"⇋","\\leftrightharpoons",!0);d(m,_,S,"↶","\\curvearrowleft",!0);d(m,_,S,"↺","\\circlearrowleft",!0);d(m,_,S,"↰","\\Lsh",!0);d(m,_,S,"⇈","\\upuparrows",!0);d(m,_,S,"↿","\\upharpoonleft",!0);d(m,_,S,"⇃","\\downharpoonleft",!0);d(m,g,S,"⊶","\\origof",!0);d(m,g,S,"⊷","\\imageof",!0);d(m,_,S,"⊸","\\multimap",!0);d(m,_,S,"↭","\\leftrightsquigarrow",!0);d(m,_,S,"⇉","\\rightrightarrows",!0);d(m,_,S,"⇄","\\rightleftarrows",!0);d(m,_,S,"↠","\\twoheadrightarrow",!0);d(m,_,S,"↣","\\rightarrowtail",!0);d(m,_,S,"↬","\\looparrowright",!0);d(m,_,S,"↷","\\curvearrowright",!0);d(m,_,S,"↻","\\circlearrowright",!0);d(m,_,S,"↱","\\Rsh",!0);d(m,_,S,"⇊","\\downdownarrows",!0);d(m,_,S,"↾","\\upharpoonright",!0);d(m,_,S,"⇂","\\downharpoonright",!0);d(m,_,S,"⇝","\\rightsquigarrow",!0);d(m,_,S,"⇝","\\leadsto");d(m,_,S,"⇛","\\Rrightarrow",!0);d(m,_,S,"↾","\\restriction");d(m,g,A,"‘","`");d(m,g,A,"$","\\$");d(Y,g,A,"$","\\$");d(Y,g,A,"$","\\textdollar");d(m,g,A,"%","\\%");d(Y,g,A,"%","\\%");d(m,g,A,"_","\\_");d(Y,g,A,"_","\\_");d(Y,g,A,"_","\\textunderscore");d(m,g,A,"∠","\\angle",!0);d(m,g,A,"∞","\\infty",!0);d(m,g,A,"′","\\prime");d(m,g,A,"△","\\triangle");d(m,g,A,"Γ","\\Gamma",!0);d(m,g,A,"Δ","\\Delta",!0);d(m,g,A,"Θ","\\Theta",!0);d(m,g,A,"Λ","\\Lambda",!0);d(m,g,A,"Ξ","\\Xi",!0);d(m,g,A,"Π","\\Pi",!0);d(m,g,A,"Σ","\\Sigma",!0);d(m,g,A,"Υ","\\Upsilon",!0);d(m,g,A,"Φ","\\Phi",!0);d(m,g,A,"Ψ","\\Psi",!0);d(m,g,A,"Ω","\\Omega",!0);d(m,g,A,"A","Α");d(m,g,A,"B","Β");d(m,g,A,"E","Ε");d(m,g,A,"Z","Ζ");d(m,g,A,"H","Η");d(m,g,A,"I","Ι");d(m,g,A,"K","Κ");d(m,g,A,"M","Μ");d(m,g,A,"N","Ν");d(m,g,A,"O","Ο");d(m,g,A,"P","Ρ");d(m,g,A,"T","Τ");d(m,g,A,"X","Χ");d(m,g,A,"¬","\\neg",!0);d(m,g,A,"¬","\\lnot");d(m,g,A,"⊤","\\top");d(m,g,A,"⊥","\\bot");d(m,g,A,"∅","\\emptyset");d(m,_,A,"∅","\\varnothing");d(m,g,$e,"α","\\alpha",!0);d(m,g,$e,"β","\\beta",!0);d(m,g,$e,"γ","\\gamma",!0);d(m,g,$e,"δ","\\delta",!0);d(m,g,$e,"ϵ","\\epsilon",!0);d(m,g,$e,"ζ","\\zeta",!0);d(m,g,$e,"η","\\eta",!0);d(m,g,$e,"θ","\\theta",!0);d(m,g,$e,"ι","\\iota",!0);d(m,g,$e,"κ","\\kappa",!0);d(m,g,$e,"λ","\\lambda",!0);d(m,g,$e,"μ","\\mu",!0);d(m,g,$e,"ν","\\nu",!0);d(m,g,$e,"ξ","\\xi",!0);d(m,g,$e,"ο","\\omicron",!0);d(m,g,$e,"π","\\pi",!0);d(m,g,$e,"ρ","\\rho",!0);d(m,g,$e,"σ","\\sigma",!0);d(m,g,$e,"τ","\\tau",!0);d(m,g,$e,"υ","\\upsilon",!0);d(m,g,$e,"ϕ","\\phi",!0);d(m,g,$e,"χ","\\chi",!0);d(m,g,$e,"ψ","\\psi",!0);d(m,g,$e,"ω","\\omega",!0);d(m,g,$e,"ε","\\varepsilon",!0);d(m,g,$e,"ϑ","\\vartheta",!0);d(m,g,$e,"ϖ","\\varpi",!0);d(m,g,$e,"ϱ","\\varrho",!0);d(m,g,$e,"ς","\\varsigma",!0);d(m,g,$e,"φ","\\varphi",!0);d(m,g,de,"∗","*",!0);d(m,g,de,"+","+");d(m,g,de,"−","-",!0);d(m,g,de,"⋅","\\cdot",!0);d(m,g,de,"∘","\\circ",!0);d(m,g,de,"÷","\\div",!0);d(m,g,de,"±","\\pm",!0);d(m,g,de,"×","\\times",!0);d(m,g,de,"∩","\\cap",!0);d(m,g,de,"∪","\\cup",!0);d(m,g,de,"∖","\\setminus",!0);d(m,g,de,"∧","\\land");d(m,g,de,"∨","\\lor");d(m,g,de,"∧","\\wedge",!0);d(m,g,de,"∨","\\vee",!0);d(m,g,A,"√","\\surd");d(m,g,Gt,"⟨","\\langle",!0);d(m,g,Gt,"∣","\\lvert");d(m,g,Gt,"∥","\\lVert");d(m,g,Et,"?","?");d(m,g,Et,"!","!");d(m,g,Et,"⟩","\\rangle",!0);d(m,g,Et,"∣","\\rvert");d(m,g,Et,"∥","\\rVert");d(m,g,S,"=","=");d(m,g,S,":",":");d(m,g,S,"≈","\\approx",!0);d(m,g,S,"≅","\\cong",!0);d(m,g,S,"≥","\\ge");d(m,g,S,"≥","\\geq",!0);d(m,g,S,"←","\\gets");d(m,g,S,">","\\gt",!0);d(m,g,S,"∈","\\in",!0);d(m,g,S,"","\\@not");d(m,g,S,"⊂","\\subset",!0);d(m,g,S,"⊃","\\supset",!0);d(m,g,S,"⊆","\\subseteq",!0);d(m,g,S,"⊇","\\supseteq",!0);d(m,_,S,"⊈","\\nsubseteq",!0);d(m,_,S,"⊉","\\nsupseteq",!0);d(m,g,S,"⊨","\\models");d(m,g,S,"←","\\leftarrow",!0);d(m,g,S,"≤","\\le");d(m,g,S,"≤","\\leq",!0);d(m,g,S,"<","\\lt",!0);d(m,g,S,"→","\\rightarrow",!0);d(m,g,S,"→","\\to");d(m,_,S,"≱","\\ngeq",!0);d(m,_,S,"≰","\\nleq",!0);d(m,g,Fn," ","\\ ");d(m,g,Fn," ","\\space");d(m,g,Fn," ","\\nobreakspace");d(Y,g,Fn," ","\\ ");d(Y,g,Fn," "," ");d(Y,g,Fn," ","\\space");d(Y,g,Fn," ","\\nobreakspace");d(m,g,Fn,null,"\\nobreak");d(m,g,Fn,null,"\\allowbreak");d(m,g,ta,",",",");d(m,g,ta,";",";");d(m,_,de,"⊼","\\barwedge",!0);d(m,_,de,"⊻","\\veebar",!0);d(m,g,de,"⊙","\\odot",!0);d(m,g,de,"⊕","\\oplus",!0);d(m,g,de,"⊗","\\otimes",!0);d(m,g,A,"∂","\\partial",!0);d(m,g,de,"⊘","\\oslash",!0);d(m,_,de,"⊚","\\circledcirc",!0);d(m,_,de,"⊡","\\boxdot",!0);d(m,g,de,"△","\\bigtriangleup");d(m,g,de,"▽","\\bigtriangledown");d(m,g,de,"†","\\dagger");d(m,g,de,"⋄","\\diamond");d(m,g,de,"⋆","\\star");d(m,g,de,"◃","\\triangleleft");d(m,g,de,"▹","\\triangleright");d(m,g,Gt,"{","\\{");d(Y,g,A,"{","\\{");d(Y,g,A,"{","\\textbraceleft");d(m,g,Et,"}","\\}");d(Y,g,A,"}","\\}");d(Y,g,A,"}","\\textbraceright");d(m,g,Gt,"{","\\lbrace");d(m,g,Et,"}","\\rbrace");d(m,g,Gt,"[","\\lbrack",!0);d(Y,g,A,"[","\\lbrack",!0);d(m,g,Et,"]","\\rbrack",!0);d(Y,g,A,"]","\\rbrack",!0);d(m,g,Gt,"(","\\lparen",!0);d(m,g,Et,")","\\rparen",!0);d(Y,g,A,"<","\\textless",!0);d(Y,g,A,">","\\textgreater",!0);d(m,g,Gt,"⌊","\\lfloor",!0);d(m,g,Et,"⌋","\\rfloor",!0);d(m,g,Gt,"⌈","\\lceil",!0);d(m,g,Et,"⌉","\\rceil",!0);d(m,g,A,"\\","\\backslash");d(m,g,A,"∣","|");d(m,g,A,"∣","\\vert");d(Y,g,A,"|","\\textbar",!0);d(m,g,A,"∥","\\|");d(m,g,A,"∥","\\Vert");d(Y,g,A,"∥","\\textbardbl");d(Y,g,A,"~","\\textasciitilde");d(Y,g,A,"\\","\\textbackslash");d(Y,g,A,"^","\\textasciicircum");d(m,g,S,"↑","\\uparrow",!0);d(m,g,S,"⇑","\\Uparrow",!0);d(m,g,S,"↓","\\downarrow",!0);d(m,g,S,"⇓","\\Downarrow",!0);d(m,g,S,"↕","\\updownarrow",!0);d(m,g,S,"⇕","\\Updownarrow",!0);d(m,g,ht,"∐","\\coprod");d(m,g,ht,"⋁","\\bigvee");d(m,g,ht,"⋀","\\bigwedge");d(m,g,ht,"⨄","\\biguplus");d(m,g,ht,"⋂","\\bigcap");d(m,g,ht,"⋃","\\bigcup");d(m,g,ht,"∫","\\int");d(m,g,ht,"∫","\\intop");d(m,g,ht,"∬","\\iint");d(m,g,ht,"∭","\\iiint");d(m,g,ht,"∏","\\prod");d(m,g,ht,"∑","\\sum");d(m,g,ht,"⨂","\\bigotimes");d(m,g,ht,"⨁","\\bigoplus");d(m,g,ht,"⨀","\\bigodot");d(m,g,ht,"∮","\\oint");d(m,g,ht,"∯","\\oiint");d(m,g,ht,"∰","\\oiiint");d(m,g,ht,"⨆","\\bigsqcup");d(m,g,ht,"∫","\\smallint");d(Y,g,k0,"…","\\textellipsis");d(m,g,k0,"…","\\mathellipsis");d(Y,g,k0,"…","\\ldots",!0);d(m,g,k0,"…","\\ldots",!0);d(m,g,k0,"⋯","\\@cdots",!0);d(m,g,k0,"⋱","\\ddots",!0);d(m,g,A,"⋮","\\varvdots");d(Y,g,A,"⋮","\\varvdots");d(m,g,Je,"ˊ","\\acute");d(m,g,Je,"ˋ","\\grave");d(m,g,Je,"¨","\\ddot");d(m,g,Je,"~","\\tilde");d(m,g,Je,"ˉ","\\bar");d(m,g,Je,"˘","\\breve");d(m,g,Je,"ˇ","\\check");d(m,g,Je,"^","\\hat");d(m,g,Je,"⃗","\\vec");d(m,g,Je,"˙","\\dot");d(m,g,Je,"˚","\\mathring");d(m,g,$e,"","\\@imath");d(m,g,$e,"","\\@jmath");d(m,g,A,"ı","ı");d(m,g,A,"ȷ","ȷ");d(Y,g,A,"ı","\\i",!0);d(Y,g,A,"ȷ","\\j",!0);d(Y,g,A,"ß","\\ss",!0);d(Y,g,A,"æ","\\ae",!0);d(Y,g,A,"œ","\\oe",!0);d(Y,g,A,"ø","\\o",!0);d(Y,g,A,"Æ","\\AE",!0);d(Y,g,A,"Œ","\\OE",!0);d(Y,g,A,"Ø","\\O",!0);d(Y,g,Je,"ˊ","\\'");d(Y,g,Je,"ˋ","\\`");d(Y,g,Je,"ˆ","\\^");d(Y,g,Je,"˜","\\~");d(Y,g,Je,"ˉ","\\=");d(Y,g,Je,"˘","\\u");d(Y,g,Je,"˙","\\.");d(Y,g,Je,"¸","\\c");d(Y,g,Je,"˚","\\r");d(Y,g,Je,"ˇ","\\v");d(Y,g,Je,"¨",'\\"');d(Y,g,Je,"˝","\\H");d(Y,g,Je,"◯","\\textcircled");var Ud={"--":!0,"---":!0,"``":!0,"''":!0};d(Y,g,A,"–","--",!0);d(Y,g,A,"–","\\textendash");d(Y,g,A,"—","---",!0);d(Y,g,A,"—","\\textemdash");d(Y,g,A,"‘","`",!0);d(Y,g,A,"‘","\\textquoteleft");d(Y,g,A,"’","'",!0);d(Y,g,A,"’","\\textquoteright");d(Y,g,A,"“","``",!0);d(Y,g,A,"“","\\textquotedblleft");d(Y,g,A,"”","''",!0);d(Y,g,A,"”","\\textquotedblright");d(m,g,A,"°","\\degree",!0);d(Y,g,A,"°","\\degree");d(Y,g,A,"°","\\textdegree",!0);d(m,g,A,"£","\\pounds");d(m,g,A,"£","\\mathsterling",!0);d(Y,g,A,"£","\\pounds");d(Y,g,A,"£","\\textsterling",!0);d(m,_,A,"✠","\\maltese");d(Y,_,A,"✠","\\maltese");var td='0123456789/@."';for(var rs=0;rs<td.length;rs++){var nd=td.charAt(rs);d(m,g,A,nd,nd)}var rd='0123456789!@*()-=+";:?/.,';for(var is=0;is<rd.length;is++){var id=rd.charAt(is);d(Y,g,A,id,id)}var Qo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var os=0;os<Qo.length;os++){var Bo=Qo.charAt(os);d(m,g,$e,Bo,Bo),d(Y,g,A,Bo,Bo)}d(m,_,A,"C","ℂ");d(Y,_,A,"C","ℂ");d(m,_,A,"H","ℍ");d(Y,_,A,"H","ℍ");d(m,_,A,"N","ℕ");d(Y,_,A,"N","ℕ");d(m,_,A,"P","ℙ");d(Y,_,A,"P","ℙ");d(m,_,A,"Q","ℚ");d(Y,_,A,"Q","ℚ");d(m,_,A,"R","ℝ");d(Y,_,A,"R","ℝ");d(m,_,A,"Z","ℤ");d(Y,_,A,"Z","ℤ");d(m,g,$e,"h","ℎ");d(Y,g,$e,"h","ℎ");var _e="";for(var Ct=0;Ct<Qo.length;Ct++){var ot=Qo.charAt(Ct);_e=String.fromCharCode(55349,56320+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56372+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56424+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56580+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56684+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56736+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56788+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56840+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56944+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),Ct<26&&(_e=String.fromCharCode(55349,56632+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e),_e=String.fromCharCode(55349,56476+Ct),d(m,g,$e,ot,_e),d(Y,g,A,ot,_e))}_e="𝕜";d(m,g,$e,"k",_e);d(Y,g,A,"k",_e);for(var Ir=0;Ir<10;Ir++){var vr=Ir.toString();_e=String.fromCharCode(55349,57294+Ir),d(m,g,$e,vr,_e),d(Y,g,A,vr,_e),_e=String.fromCharCode(55349,57314+Ir),d(m,g,$e,vr,_e),d(Y,g,A,vr,_e),_e=String.fromCharCode(55349,57324+Ir),d(m,g,$e,vr,_e),d(Y,g,A,vr,_e),_e=String.fromCharCode(55349,57334+Ir),d(m,g,$e,vr,_e),d(Y,g,A,vr,_e)}var bs="ÐÞþ";for(var as=0;as<bs.length;as++){var No=bs.charAt(as);d(m,g,$e,No,No),d(Y,g,A,No,No)}var Lo=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],od=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],O6=function(n,r){var a=n.charCodeAt(0),s=n.charCodeAt(1),u=(a-55296)*1024+(s-56320)+65536,f=r==="math"?0:1;if(119808<=u&&u<120484){var p=Math.floor((u-119808)/26);return[Lo[p][2],Lo[p][f]]}else if(120782<=u&&u<=120831){var v=Math.floor((u-120782)/10);return[od[v][2],od[v][f]]}else{if(u===120485||u===120486)return[Lo[0][2],Lo[0][f]];if(120486<u&&u<120782)return["",""];throw new ee("Unsupported character: "+n)}},na=function(n,r,a){return Xe[a][n]&&Xe[a][n].replace&&(n=Xe[a][n].replace),{value:n,metrics:Rs(n,r,a)}},At=function(n,r,a,s,u){var f=na(n,r,a),p=f.metrics;n=f.value;var v;if(p){var w=p.italic;(a==="text"||s&&s.font==="mathit")&&(w=0),v=new rn(n,p.height,p.depth,w,p.skew,p.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+a+"'")),v=new rn(n,0,0,0,0,0,u);if(s){v.maxFontSize=s.sizeMultiplier,s.style.isTight()&&v.classes.push("mtight");var $=s.getColor();$&&(v.style.color=$)}return v},Ns=function(n,r,a,s){return s===void 0&&(s=[]),a.font==="boldsymbol"&&na(n,"Main-Bold",r).metrics?At(n,"Main-Bold",r,a,s.concat(["mathbf"])):n==="\\"||Xe[r][n].font==="main"?At(n,"Main-Regular",r,a,s):At(n,"AMS-Regular",r,a,s.concat(["amsrm"]))},I6=function(n,r,a,s,u){return u!=="textord"&&na(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ra=function(n,r,a){var s=n.mode,u=n.text,f=["mord"],p=s==="math"||s==="text"&&r.font,v=p?r.font:r.fontFamily,w="",$="";if(u.charCodeAt(0)===55349&&([w,$]=O6(u,s)),w.length>0)return At(u,w,s,r,f.concat($));if(v){var b,M;if(v==="boldsymbol"){var T=I6(u,s,r,f,a);b=T.fontName,M=[T.fontClass]}else p?(b=$s[v].fontName,M=[v]):(b=Oo(v,r.fontWeight,r.fontShape),M=[v,r.fontWeight,r.fontShape]);if(na(u,b,s).metrics)return At(u,b,s,r,f.concat(M));if(Ud.hasOwnProperty(u)&&b.slice(0,10)==="Typewriter"){for(var P=[],R=0;R<u.length;R++)P.push(At(u[R],b,s,r,f.concat(M)));return Hn(P)}}if(a==="mathord")return At(u,"Math-Italic",s,r,f.concat(["mathnormal"]));if(a==="textord"){var q=Xe[s][u]&&Xe[s][u].font;if(q==="ams"){var I=Oo("amsrm",r.fontWeight,r.fontShape);return At(u,I,s,r,f.concat("amsrm",r.fontWeight,r.fontShape))}else if(q==="main"||!q){var W=Oo("textrm",r.fontWeight,r.fontShape);return At(u,W,s,r,f.concat(r.fontWeight,r.fontShape))}else{var N=Oo(q,r.fontWeight,r.fontShape);return At(u,N,s,r,f.concat(N,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+a+" in makeOrd")},F6=(o,n)=>{if(yr(o.classes)!==yr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a in o.style)if(o.style.hasOwnProperty(a)&&o.style[a]!==n.style[a])return!1;for(var s in n.style)if(n.style.hasOwnProperty(s)&&o.style[s]!==n.style[s])return!1;return!0},Vd=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],a=o[n+1];r instanceof rn&&a instanceof rn&&F6(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,o.splice(n+1,1),n--)}return o},Ls=function(n){for(var r=0,a=0,s=0,u=0;u<n.children.length;u++){var f=n.children[u];f.height>r&&(r=f.height),f.depth>a&&(a=f.depth),f.maxFontSize>s&&(s=f.maxFontSize)}n.height=r,n.depth=a,n.maxFontSize=s},Q=function(n,r,a,s){var u=new ki(n,r,a,s);return Ls(u),u},wr=(o,n,r,a)=>new ki(o,n,r,a),w0=function(n,r,a){var s=Q([n],[],r);return s.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=le(s.height),s.maxFontSize=1,s},H6=function(n,r,a,s){var u=new Bs(n,r,a,s);return Ls(u),u},Hn=function(n){var r=new $i(n);return Ls(r),r},b0=function(n,r){return n instanceof $i?Q([],[n],r):n},W6=function(n){if(n.positionType==="individualShift"){for(var r=n.children,a=[r[0]],s=-r[0].shift-r[0].elem.depth,u=s,f=1;f<r.length;f++){var p=-r[f].shift-u-r[f].elem.depth,v=p-(r[f-1].elem.height+r[f-1].elem.depth);u=u+p,a.push({type:"kern",size:v}),a.push(r[f])}return{children:a,depth:s}}var w;if(n.positionType==="top"){for(var $=n.positionData,b=0;b<n.children.length;b++){var M=n.children[b];$-=M.type==="kern"?M.size:M.elem.height+M.elem.depth}w=$}else if(n.positionType==="bottom")w=-n.positionData;else{var T=n.children[0];if(T.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")w=-T.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")w=-T.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:w}},Ie=function(n,r){for(var{children:a,depth:s}=W6(n),u=0,f=0;f<a.length;f++){var p=a[f];if(p.type==="elem"){var v=p.elem;u=Math.max(u,v.maxFontSize,v.height)}}u+=2;var w=Q(["pstrut"],[]);w.style.height=le(u);for(var $=[],b=s,M=s,T=s,P=0;P<a.length;P++){var R=a[P];if(R.type==="kern")T+=R.size;else{var q=R.elem,I=R.wrapperClasses||[],W=R.wrapperStyle||{},N=Q(I,[w,q],void 0,W);N.style.top=le(-u-T-q.depth),R.marginLeft&&(N.style.marginLeft=R.marginLeft),R.marginRight&&(N.style.marginRight=R.marginRight),$.push(N),T+=q.height+q.depth}b=Math.min(b,T),M=Math.max(M,T)}var L=Q(["vlist"],$);L.style.height=le(M);var U;if(b<0){var K=Q([],[]),H=Q(["vlist"],[K]);H.style.height=le(-b);var Z=Q(["vlist-s"],[new rn("​")]);U=[Q(["vlist-r"],[L,Z]),Q(["vlist-r"],[H])]}else U=[Q(["vlist-r"],[L])];var V=Q(["vlist-t"],U);return U.length===2&&V.classes.push("vlist-t2"),V.height=M,V.depth=-b,V},Gd=(o,n)=>{var r=Q(["mspace"],[],n),a=rt(o,n);return r.style.marginRight=le(a),r},Oo=function(n,r,a){var s="";switch(n){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=n}var u;return r==="textbf"&&a==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",s+"-"+u},$s={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Yd={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Xd=function(n,r){var[a,s,u]=Yd[n],f=new xr(a),p=new On([f],{width:le(s),height:le(u),style:"width:"+le(s),viewBox:"0 0 "+1e3*s+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),v=wr(["overlay"],[p],r);return v.height=u,v.style.height=le(u),v.style.width=le(s),v},nt={number:3,unit:"mu"},Fr={number:4,unit:"mu"},Rn={number:5,unit:"mu"},U6={mord:{mop:nt,mbin:Fr,mrel:Rn,minner:nt},mop:{mord:nt,mop:nt,mrel:Rn,minner:nt},mbin:{mord:Fr,mop:Fr,mopen:Fr,minner:Fr},mrel:{mord:Rn,mop:Rn,mopen:Rn,minner:Rn},mopen:{},mclose:{mop:nt,mbin:Fr,mrel:Rn,minner:nt},mpunct:{mord:nt,mop:nt,mrel:Rn,mopen:nt,mclose:nt,mpunct:nt,minner:nt},minner:{mord:nt,mop:nt,mbin:Fr,mrel:Rn,mopen:nt,mpunct:nt,minner:nt}},V6={mord:{mop:nt},mop:{mord:nt,mop:nt},mbin:{},mrel:{},mopen:{},mclose:{mop:nt},mpunct:{},minner:{mop:nt}},Qd={},Ko={},Zo={};function ue(o){for(var{type:n,names:r,props:a,handler:s,htmlBuilder:u,mathmlBuilder:f}=o,p={type:n,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:s},v=0;v<r.length;++v)Qd[r[v]]=p;n&&(u&&(Ko[n]=u),f&&(Zo[n]=f))}function Wr(o){var{type:n,htmlBuilder:r,mathmlBuilder:a}=o;ue({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var Jo=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},ut=function(n){return n.type==="ordgroup"?n.body:[n]},G6=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Y6=new Set(["rightmost","mrel","mclose","mpunct"]),X6={display:Me.DISPLAY,text:Me.TEXT,script:Me.SCRIPT,scriptscript:Me.SCRIPTSCRIPT},Q6={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},vt=function(n,r,a,s){s===void 0&&(s=[null,null]);for(var u=[],f=0;f<n.length;f++){var p=Le(n[f],r);if(p instanceof $i){var v=p.children;u.push(...v)}else u.push(p)}if(Vd(u),!a)return u;var w=r;if(n.length===1){var $=n[0];$.type==="sizing"?w=r.havingSize($.size):$.type==="styling"&&(w=r.havingStyle(X6[$.style]))}var b=Q([s[0]||"leftmost"],[],r),M=Q([s[1]||"rightmost"],[],r),T=a==="root";return ad(u,(P,R)=>{var q=R.classes[0],I=P.classes[0];q==="mbin"&&Y6.has(I)?R.classes[0]="mord":I==="mbin"&&G6.has(q)&&(P.classes[0]="mord")},{node:b},M,T),ad(u,(P,R)=>{var q=ks(R),I=ks(P),W=q&&I?P.hasClass("mtight")?V6[q][I]:U6[q][I]:null;if(W)return Gd(W,w)},{node:b},M,T),u},ad=function o(n,r,a,s,u){s&&n.push(s);for(var f=0;f<n.length;f++){var p=n[f],v=Kd(p);if(v){o(v.children,r,a,null,u);continue}var w=!p.hasClass("mspace");if(w){var $=r(p,a.node);$&&(a.insertAfter?a.insertAfter($):(n.unshift($),f++))}w?a.node=p:u&&p.hasClass("newline")&&(a.node=Q(["leftmost"])),a.insertAfter=(b=>M=>{n.splice(b+1,0,M),f++})(f)}s&&n.pop()},Kd=function(n){return n instanceof $i||n instanceof Bs||n instanceof ki&&n.hasClass("enclosing")?n:null},K6=function o(n,r){var a=Kd(n);if(a){var s=a.children;if(s.length){if(r==="right")return o(s[s.length-1],"right");if(r==="left")return o(s[0],"left")}}return n},ks=function(n,r){return n?(r&&(n=K6(n,r)),Q6[n.classes[0]]||null):null},bi=function(n,r){var a=["nulldelimiter"].concat(n.baseSizingClasses());return Q(r.concat(a))},Le=function(n,r,a){if(!n)return Q();if(Ko[n.type]){var s=Ko[n.type](n,r);if(a&&r.size!==a.size){s=Q(r.sizingClasses(a),[s],r);var u=r.sizeMultiplier/a.sizeMultiplier;s.height*=u,s.depth*=u}return s}else throw new ee("Got group of unknown type: '"+n.type+"'")};function Io(o,n){var r=Q(["base"],o,n),a=Q(["strut"]);return a.style.height=le(r.height+r.depth),r.depth&&(a.style.verticalAlign=le(-r.depth)),r.children.unshift(a),r}function _s(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var a=vt(o,n,"root"),s;a.length===2&&a[1].hasClass("tag")&&(s=a.pop());for(var u=[],f=[],p=0;p<a.length;p++)if(f.push(a[p]),a[p].hasClass("mbin")||a[p].hasClass("mrel")||a[p].hasClass("allowbreak")){for(var v=!1;p<a.length-1&&a[p+1].hasClass("mspace")&&!a[p+1].hasClass("newline");)p++,f.push(a[p]),a[p].hasClass("nobreak")&&(v=!0);v||(u.push(Io(f,n)),f=[])}else a[p].hasClass("newline")&&(f.pop(),f.length>0&&(u.push(Io(f,n)),f=[]),u.push(a[p]));f.length>0&&u.push(Io(f,n));var w;r?(w=Io(vt(r,n,!0)),w.classes=["tag"],u.push(w)):s&&u.push(s);var $=Q(["katex-html"],u);if($.setAttribute("aria-hidden","true"),w){var b=w.children[0];b.style.height=le($.height+$.depth),$.depth&&(b.style.verticalAlign=le(-$.depth))}return $}function Zd(o){return new $i(o)}class te{constructor(n,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=yr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof ft&&this.children[a+1]instanceof ft){for(var s=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof ft;)s+=this.children[++a].toText();n.appendChild(new ft(s).toNode())}else n.appendChild(this.children[a].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=St(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+St(yr(this.classes))+'"'),n+=">";for(var a=0;a<this.children.length;a++)n+=this.children[a].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class ft{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return St(this.toText())}toText(){return this.text}}class Jd{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",le(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+le(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Z6=new Set(["\\imath","\\jmath"]),J6=new Set(["mrow","mtable"]),on=function(n,r,a){return Xe[r][n]&&Xe[r][n].replace&&n.charCodeAt(0)!==55349&&!(Ud.hasOwnProperty(n)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(n=Xe[r][n].replace),new ft(n)},Os=function(n){return n.length===1?n[0]:new te("mrow",n)},Is=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var a=r.font;if(!a||a==="mathnormal")return null;var s=n.mode;if(a==="mathit")return"italic";if(a==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(a==="mathbf")return"bold";if(a==="mathbb")return"double-struck";if(a==="mathsfit")return"sans-serif-italic";if(a==="mathfrak")return"fraktur";if(a==="mathscr"||a==="mathcal")return"script";if(a==="mathsf")return"sans-serif";if(a==="mathtt")return"monospace";var u=n.text;if(Z6.has(u))return null;Xe[s][u]&&Xe[s][u].replace&&(u=Xe[s][u].replace);var f=$s[a].fontName;return Rs(u,f,s)?$s[a].variant:null};function ls(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof ft&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof ft&&r.text===","}else return!1}var Ot=function(n,r,a){if(n.length===1){var s=Ve(n[0],r);return a&&s instanceof te&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var u=[],f,p=0;p<n.length;p++){var v=Ve(n[p],r);if(v instanceof te&&f instanceof te){if(v.type==="mtext"&&f.type==="mtext"&&v.getAttribute("mathvariant")===f.getAttribute("mathvariant")){f.children.push(...v.children);continue}else if(v.type==="mn"&&f.type==="mn"){f.children.push(...v.children);continue}else if(ls(v)&&f.type==="mn"){f.children.push(...v.children);continue}else if(v.type==="mn"&&ls(f))v.children=[...f.children,...v.children],u.pop();else if((v.type==="msup"||v.type==="msub")&&v.children.length>=1&&(f.type==="mn"||ls(f))){var w=v.children[0];w instanceof te&&w.type==="mn"&&(w.children=[...f.children,...w.children],u.pop())}else if(f.type==="mi"&&f.children.length===1){var $=f.children[0];if($ instanceof ft&&$.text==="̸"&&(v.type==="mo"||v.type==="mi"||v.type==="mn")){var b=v.children[0];b instanceof ft&&b.text.length>0&&(b.text=b.text.slice(0,1)+"̸"+b.text.slice(1),u.pop())}}}u.push(v),f=v}return u},br=function(n,r,a){return Os(Ot(n,r,a))},Ve=function(n,r){if(!n)return new te("mrow");if(Zo[n.type]){var a=Zo[n.type](n,r);return a}else throw new ee("Got group of unknown type: '"+n.type+"'")};function ld(o,n,r,a,s){var u=Ot(o,r),f;u.length===1&&u[0]instanceof te&&J6.has(u[0].type)?f=u[0]:f=new te("mrow",u);var p=new te("annotation",[new ft(n)]);p.setAttribute("encoding","application/x-tex");var v=new te("semantics",[f,p]),w=new te("math",[v]);w.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&w.setAttribute("display","block");var $=s?"katex":"katex-mathml";return Q([$],[w])}var e4=function(n){return new Nn({style:n.displayMode?Me.DISPLAY:Me.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},t4=function(n,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),n=Q(a,[n])}return n},e7=function(n,r,a){var s=e4(a),u;if(a.output==="mathml")return ld(n,r,s,a.displayMode,!0);if(a.output==="html"){var f=_s(n,s);u=Q(["katex"],[f])}else{var p=ld(n,r,s,a.displayMode,!1),v=_s(n,s);u=Q(["katex"],[p,v])}return t4(u,a)},t7=function(n,r,a){var s=e4(a),u=_s(n,s),f=Q(["katex"],[u]);return t4(f,a)},n7={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ia=function(n){var r=new te("mo",[new ft(n7[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},r7={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},i7=new Set(["widehat","widecheck","widetilde","utilde"]),oa=function(n,r){function a(){var p=4e5,v=n.label.slice(1);if(i7.has(v)){var w=n,$=w.base.type==="ordgroup"?w.base.body.length:1,b,M,T;if($>5)v==="widehat"||v==="widecheck"?(b=420,p=2364,T=.42,M=v+"4"):(b=312,p=2340,T=.34,M="tilde4");else{var P=[1,1,2,2,3,3][$];v==="widehat"||v==="widecheck"?(p=[0,1062,2364,2364,2364][P],b=[0,239,300,360,420][P],T=[0,.24,.3,.3,.36,.42][P],M=v+P):(p=[0,600,1033,2339,2340][P],b=[0,260,286,306,312][P],T=[0,.26,.286,.3,.306,.34][P],M="tilde"+P)}var R=new xr(M),q=new On([R],{width:"100%",height:le(T),viewBox:"0 0 "+p+" "+b,preserveAspectRatio:"none"});return{span:wr([],[q],r),minWidth:0,height:T}}else{var I=[],W=r7[v],[N,L,U]=W,K=U/1e3,H=N.length,Z,V;if(H===1){var ye=W[3];Z=["hide-tail"],V=[ye]}else if(H===2)Z=["halfarrow-left","halfarrow-right"],V=["xMinYMin","xMaxYMin"];else if(H===3)Z=["brace-left","brace-center","brace-right"],V=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+H+" children.");for(var ze=0;ze<H;ze++){var Ce=new xr(N[ze]),He=new On([Ce],{width:"400em",height:le(K),viewBox:"0 0 "+p+" "+U,preserveAspectRatio:V[ze]+" slice"}),Fe=wr([Z[ze]],[He],r);if(H===1)return{span:Fe,minWidth:L,height:K};Fe.style.height=le(K),I.push(Fe)}return{span:Q(["stretchy"],I,r),minWidth:L,height:K}}}var{span:s,minWidth:u,height:f}=a();return s.height=f,s.style.height=le(f),u>0&&(s.style.minWidth=le(u)),s},o7=function(n,r,a,s,u){var f,p=n.height+n.depth+a+s;if(/fbox|color|angl/.test(r)){if(f=Q(["stretchy",r],[],u),r==="fbox"){var v=u.color&&u.getColor();v&&(f.style.borderColor=v)}}else{var w=[];/^[bx]cancel$/.test(r)&&w.push(new ws({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&w.push(new ws({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var $=new On(w,{width:"100%",height:le(p)});f=wr([],[$],u)}return f.height=p,f.style.height=le(p),f};function je(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function Fs(o){var n=aa(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function aa(o){return o&&(o.type==="atom"||L6.hasOwnProperty(o.type))?o:null}var Hs=(o,n)=>{var r,a,s;o&&o.type==="supsub"?(a=je(o.base,"accent"),r=a.base,o.base=r,s=B6(Le(o,n)),o.base=a):(a=je(o,"accent"),r=a.base);var u=Le(r,n.havingCrampedStyle()),f=a.isShifty&&In(r),p=0;if(f){var v=gi(r),w=Le(v,n.havingCrampedStyle());p=ed(w).skew}var $=a.label==="\\c",b=$?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),M;if(a.isStretchy)M=oa(a,n),M=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:M,wrapperClasses:["svg-align"],wrapperStyle:p>0?{width:"calc(100% - "+le(2*p)+")",marginLeft:le(2*p)}:void 0}]});else{var T,P;a.label==="\\vec"?(T=Xd("vec",n),P=Yd.vec[1]):(T=ra({mode:a.mode,text:a.label},n,"textord"),T=ed(T),T.italic=0,P=T.width,$&&(b+=T.depth)),M=Q(["accent-body"],[T]);var R=a.label==="\\textcircled";R&&(M.classes.push("accent-full"),b=u.height);var q=p;R||(q-=P/2),M.style.left=le(q),a.label==="\\textcircled"&&(M.style.top=".2em"),M=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-b},{type:"elem",elem:M}]})}var I=Q(["mord","accent"],[M],n);return s?(s.children[0]=I,s.height=Math.max(I.height,s.height),s.classes[0]="mord",s):I},n4=(o,n)=>{var r=o.isStretchy?ia(o.label):new te("mo",[on(o.label,o.mode)]),a=new te("mover",[Ve(o.base,n),r]);return a.setAttribute("accent","true"),a},a7=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ue({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=Jo(n[0]),a=!a7.test(o.funcName),s=!a||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:a,isShifty:s,base:r}},htmlBuilder:Hs,mathmlBuilder:n4});ue({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],a=o.parser.mode;return a==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Hs,mathmlBuilder:n4});ue({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=n[0];return{type:"accentUnder",mode:r.mode,label:a,base:s}},htmlBuilder:(o,n)=>{var r=Le(o.base,n),a=oa(o,n),s=o.label==="\\utilde"?.12:0,u=Ie({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return Q(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=ia(o.label),a=new te("munder",[Ve(o.base,n),r]);return a.setAttribute("accentunder","true"),a}});var Fo=o=>{var n=new te("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};ue({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:a,funcName:s}=o;return{type:"xArrow",mode:a.mode,label:s,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,a=n.havingStyle(r.sup()),s=b0(Le(o.body,a,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(u+"-arrow-pad");var f;o.below&&(a=n.havingStyle(r.sub()),f=b0(Le(o.below,a,n),n),f.classes.push(u+"-arrow-pad"));var p=oa(o,n),v=-n.fontMetrics().axisHeight+.5*p.height,w=-n.fontMetrics().axisHeight-.5*p.height-.111;(s.depth>.25||o.label==="\\xleftequilibrium")&&(w-=s.depth);var $;if(f){var b=-n.fontMetrics().axisHeight+f.height+.5*p.height+.111;$=Ie({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:p,shift:v},{type:"elem",elem:f,shift:b}]})}else $=Ie({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:p,shift:v}]});return $.children[0].children[0].children[1].classes.push("svg-align"),Q(["mrel","x-arrow"],[$],n)},mathmlBuilder(o,n){var r=ia(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(o.body){var s=Fo(Ve(o.body,n));if(o.below){var u=Fo(Ve(o.below,n));a=new te("munderover",[r,u,s])}else a=new te("mover",[r,s])}else if(o.below){var f=Fo(Ve(o.below,n));a=new te("munder",[r,f])}else a=Fo(),a=new te("mover",[r,a]);return a}});function r4(o,n){var r=vt(o.body,n,!0);return Q([o.mclass],r,n)}function i4(o,n){var r,a=Ot(o.body,n);return o.mclass==="minner"?r=new te("mpadded",a):o.mclass==="mord"?o.isCharacterBox?(r=a[0],r.type="mi"):r=new te("mi",a):(o.isCharacterBox?(r=a[0],r.type="mo"):r=new te("mo",a),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ue({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:a}=o,s=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:ut(s),isCharacterBox:In(s)}},htmlBuilder:r4,mathmlBuilder:i4});var la=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};ue({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:la(n[0]),body:ut(n[1]),isCharacterBox:In(n[1])}}});ue({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:a}=o,s=n[1],u=n[0],f;a!=="\\stackrel"?f=la(s):f="mrel";var p={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:ut(s)},v={type:"supsub",mode:u.mode,base:p,sup:a==="\\underset"?null:u,sub:a==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:f,body:[v],isCharacterBox:In(v)}},htmlBuilder:r4,mathmlBuilder:i4});ue({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:la(n[0]),body:ut(n[0])}},htmlBuilder(o,n){var r=vt(o.body,n,!0),a=Q([o.mclass],r,n);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(o,n){var r=Ot(o.body,n),a=new te("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var l7={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},sd=()=>({type:"styling",body:[],mode:"math",style:"display"}),ud=o=>o.type==="textord"&&o.text==="@",s7=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function u7(o,n,r){var a=l7[o];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:a,mode:"math",family:"rel"},f=r.callFunction("\\Big",[u],[]),p=r.callFunction("\\\\cdright",[n[1]],[]),v={type:"ordgroup",mode:"math",body:[s,f,p]};return r.callFunction("\\\\cdparent",[v],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var w={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[w],[])}default:return{type:"textord",text:" ",mode:"math"}}}function c7(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new ee("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var a=[],s=[a],u=0;u<n.length;u++){for(var f=n[u],p=sd(),v=0;v<f.length;v++)if(!ud(f[v]))p.body.push(f[v]);else{a.push(p),v+=1;var w=Fs(f[v]).text,$=new Array(2);if($[0]={type:"ordgroup",mode:"math",body:[]},$[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(w))if("<>AV".includes(w))for(var b=0;b<2;b++){for(var M=!0,T=v+1;T<f.length;T++){if(s7(f[T],w)){M=!1,v=T;break}if(ud(f[T]))throw new ee("Missing a "+w+" character to complete a CD arrow.",f[T]);$[b].body.push(f[T])}if(M)throw new ee("Missing a "+w+" character to complete a CD arrow.",f[v])}else throw new ee('Expected one of "<>AV=|." after @',f[v]);var P=u7(w,$,o),R={type:"styling",body:[P],mode:"math",style:"display"};a.push(R),p=sd()}u%2===0?a.push(p):a.shift(),a=[],s.push(a)}o.gullet.endGroup(),o.gullet.endGroup();var q=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:q,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}ue({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),a=b0(Le(o.label,r,n),n);return a.classes.push("cd-label-"+o.side),a.style.bottom=le(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(o,n){var r=new te("mrow",[Ve(o.label,n)]);return r=new te("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new te("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ue({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=b0(Le(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new te("mrow",[Ve(o.fragment,n)])}});ue({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,a=je(n[0],"ordgroup"),s=a.body,u="",f=0;f<s.length;f++){var p=je(s[f],"textord");u+=p.text}var v=parseInt(u),w;if(isNaN(v))throw new ee("\\@char has non-numeric argument "+u);if(v<0||v>=1114111)throw new ee("\\@char with invalid code point "+u);return v<=65535?w=String.fromCharCode(v):(v-=65536,w=String.fromCharCode((v>>10)+55296,(v&1023)+56320)),{type:"textord",mode:r.mode,text:w}}});var o4=(o,n)=>{var r=vt(o.body,n.withColor(o.color),!1);return Hn(r)},a4=(o,n)=>{var r=Ot(o.body,n.withColor(o.color)),a=new te("mstyle",r);return a.setAttribute("mathcolor",o.color),a};ue({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,a=je(n[0],"color-token").color,s=n[1];return{type:"color",mode:r.mode,color:a,body:ut(s)}},htmlBuilder:o4,mathmlBuilder:a4});ue({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:a}=o,s=je(n[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var u=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:s,body:u}},htmlBuilder:o4,mathmlBuilder:a4});ue({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:a}=o,s=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,u=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:u,size:s&&je(s,"size").value}},htmlBuilder(o,n){var r=Q(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=le(rt(o.size,n)))),r},mathmlBuilder(o,n){var r=new te("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",le(rt(o.size,n)))),r}});var zs={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},l4=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new ee("Expected a control sequence",o);return n},d7=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},s4=(o,n,r,a)=>{var s=o.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,s,a)};ue({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var a=n.fetch();if(zs[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=zs[a.text]),je(n.parseFunction(),"internal");throw new ee("Invalid token after macro prefix",a)}});ue({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=n.gullet.popToken(),s=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new ee("Expected a control sequence",a);for(var u=0,f,p=[[]];n.gullet.future().text!=="{";)if(a=n.gullet.popToken(),a.text==="#"){if(n.gullet.future().text==="{"){f=n.gullet.future(),p[u].push("{");break}if(a=n.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new ee('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==u+1)throw new ee('Argument number "'+a.text+'" out of order');u++,p.push([])}else{if(a.text==="EOF")throw new ee("Expected a macro definition");p[u].push(a.text)}var{tokens:v}=n.gullet.consumeArg();return f&&v.unshift(f),(r==="\\edef"||r==="\\xdef")&&(v=n.gullet.expandTokens(v),v.reverse()),n.gullet.macros.set(s,{tokens:v,numArgs:u,delimiters:p},r===zs[r]),{type:"internal",mode:n.mode}}});ue({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=l4(n.gullet.popToken());n.gullet.consumeSpaces();var s=d7(n);return s4(n,a,s,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});ue({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,a=l4(n.gullet.popToken()),s=n.gullet.popToken(),u=n.gullet.popToken();return s4(n,a,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(s),{type:"internal",mode:n.mode}}});var vi=function(n,r,a){var s=Xe.math[n]&&Xe.math[n].replace,u=Rs(s||n,r,a);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Ws=function(n,r,a,s){var u=a.havingBaseStyle(r),f=Q(s.concat(u.sizingClasses(a)),[n],a),p=u.sizeMultiplier/a.sizeMultiplier;return f.height*=p,f.depth*=p,f.maxFontSize=u.sizeMultiplier,f},u4=function(n,r,a){var s=r.havingBaseStyle(a),u=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=le(u),n.height-=u,n.depth+=u},f7=function(n,r,a,s,u,f){var p=At(n,"Main-Regular",u,s),v=Ws(p,r,s,f);return u4(v,s,r),v},h7=function(n,r,a,s){return At(n,"Size"+r+"-Regular",a,s)},c4=function(n,r,a,s,u,f){var p=h7(n,r,u,s),v=Ws(Q(["delimsizing","size"+r],[p],s),Me.TEXT,s,f);return a&&u4(v,s,Me.TEXT),v},ss=function(n,r,a){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var u=Q(["delimsizinginner",s],[Q([],[At(n,r,a)])]);return{type:"elem",elem:u}},us=function(n,r,a){var s=bn["Size4-Regular"][n.charCodeAt(0)]?bn["Size4-Regular"][n.charCodeAt(0)][4]:bn["Size1-Regular"][n.charCodeAt(0)][4],u=new xr("inner",M6(n,Math.round(1e3*r))),f=new On([u],{width:le(s),height:le(r),style:"width:"+le(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),p=wr([],[f],a);return p.height=r,p.style.height=le(r),p.style.width=le(s),{type:"elem",elem:p}},Ss=.008,Ho={type:"kern",size:-1*Ss},m7=new Set(["|","\\lvert","\\rvert","\\vert"]),p7=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),d4=function(n,r,a,s,u,f){var p,v,w,$,b="",M=0;p=w=$=n,v=null;var T="Size1-Regular";n==="\\uparrow"?w=$="⏐":n==="\\Uparrow"?w=$="‖":n==="\\downarrow"?p=w="⏐":n==="\\Downarrow"?p=w="‖":n==="\\updownarrow"?(p="\\uparrow",w="⏐",$="\\downarrow"):n==="\\Updownarrow"?(p="\\Uparrow",w="‖",$="\\Downarrow"):m7.has(n)?(w="∣",b="vert",M=333):p7.has(n)?(w="∥",b="doublevert",M=556):n==="["||n==="\\lbrack"?(p="⎡",w="⎢",$="⎣",T="Size4-Regular",b="lbrack",M=667):n==="]"||n==="\\rbrack"?(p="⎤",w="⎥",$="⎦",T="Size4-Regular",b="rbrack",M=667):n==="\\lfloor"||n==="⌊"?(w=p="⎢",$="⎣",T="Size4-Regular",b="lfloor",M=667):n==="\\lceil"||n==="⌈"?(p="⎡",w=$="⎢",T="Size4-Regular",b="lceil",M=667):n==="\\rfloor"||n==="⌋"?(w=p="⎥",$="⎦",T="Size4-Regular",b="rfloor",M=667):n==="\\rceil"||n==="⌉"?(p="⎤",w=$="⎥",T="Size4-Regular",b="rceil",M=667):n==="("||n==="\\lparen"?(p="⎛",w="⎜",$="⎝",T="Size4-Regular",b="lparen",M=875):n===")"||n==="\\rparen"?(p="⎞",w="⎟",$="⎠",T="Size4-Regular",b="rparen",M=875):n==="\\{"||n==="\\lbrace"?(p="⎧",v="⎨",$="⎩",w="⎪",T="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(p="⎫",v="⎬",$="⎭",w="⎪",T="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(p="⎧",$="⎩",w="⎪",T="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(p="⎫",$="⎭",w="⎪",T="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(p="⎧",$="⎭",w="⎪",T="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(p="⎫",$="⎩",w="⎪",T="Size4-Regular");var P=vi(p,T,u),R=P.height+P.depth,q=vi(w,T,u),I=q.height+q.depth,W=vi($,T,u),N=W.height+W.depth,L=0,U=1;if(v!==null){var K=vi(v,T,u);L=K.height+K.depth,U=2}var H=R+N+L,Z=Math.max(0,Math.ceil((r-H)/(U*I))),V=H+Z*U*I,ye=s.fontMetrics().axisHeight;a&&(ye*=s.sizeMultiplier);var ze=V/2-ye,Ce=[];if(b.length>0){var He=V-R-N,Fe=Math.round(V*1e3),Ge=C6(b,Math.round(He*1e3)),Ue=new xr(b,Ge),xe=(M/1e3).toFixed(3)+"em",ne=(Fe/1e3).toFixed(3)+"em",fe=new On([Ue],{width:xe,height:ne,viewBox:"0 0 "+M+" "+Fe}),oe=wr([],[fe],s);oe.height=Fe/1e3,oe.style.width=xe,oe.style.height=ne,Ce.push({type:"elem",elem:oe})}else{if(Ce.push(ss($,T,u)),Ce.push(Ho),v===null){var j=V-R-N+2*Ss;Ce.push(us(w,j,s))}else{var F=(V-R-N-L)/2+2*Ss;Ce.push(us(w,F,s)),Ce.push(Ho),Ce.push(ss(v,T,u)),Ce.push(Ho),Ce.push(us(w,F,s))}Ce.push(Ho),Ce.push(ss(p,T,u))}var ke=s.havingBaseStyle(Me.TEXT),ve=Ie({positionType:"bottom",positionData:ze,children:Ce});return Ws(Q(["delimsizing","mult"],[ve],ke),Me.TEXT,s,f)},cs=80,ds=.08,fs=function(n,r,a,s,u){var f=T6(n,s,a),p=new xr(n,f),v=new On([p],{width:"400em",height:le(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return wr(["hide-tail"],[v],u)},v7=function(n,r){var a=r.havingBaseSizing(),s=v4("\\surd",n*a.sizeMultiplier,p4,a),u=a.sizeMultiplier,f=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),p,v=0,w=0,$=0,b;return s.type==="small"?($=1e3+1e3*f+cs,n<1?u=1:n<1.4&&(u=.7),v=(1+f+ds)/u,w=(1+f)/u,p=fs("sqrtMain",v,$,f,r),p.style.minWidth="0.853em",b=.833/u):s.type==="large"?($=(1e3+cs)*yi[s.size],w=(yi[s.size]+f)/u,v=(yi[s.size]+f+ds)/u,p=fs("sqrtSize"+s.size,v,$,f,r),p.style.minWidth="1.02em",b=1/u):(v=n+f+ds,w=n+f,$=Math.floor(1e3*n+f)+cs,p=fs("sqrtTall",v,$,f,r),p.style.minWidth="0.742em",b=1.056),p.height=w,p.style.height=le(v),{span:p,advanceWidth:b,ruleWidth:(r.fontMetrics().sqrtRuleThickness+f)*u}},f4=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),g7=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),h4=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),yi=[0,1.2,1.8,2.4,3],m4=function(n,r,a,s,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),f4.has(n)||h4.has(n))return c4(n,r,!1,a,s,u);if(g7.has(n))return d4(n,yi[r],!1,a,s,u);throw new ee("Illegal delimiter: '"+n+"'")},y7=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],x7=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"stack"}],p4=[{type:"small",style:Me.SCRIPTSCRIPT},{type:"small",style:Me.SCRIPT},{type:"small",style:Me.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],w7=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},v4=function(n,r,a,s){for(var u=Math.min(2,3-s.style.size),f=u;f<a.length&&a[f].type!=="stack";f++){var p=vi(n,w7(a[f]),"math"),v=p.height+p.depth;if(a[f].type==="small"){var w=s.havingBaseStyle(a[f].style);v*=w.sizeMultiplier}if(v>r)return a[f]}return a[a.length-1]},Ts=function(n,r,a,s,u,f){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var p;h4.has(n)?p=y7:f4.has(n)?p=p4:p=x7;var v=v4(n,r,p,s);return v.type==="small"?f7(n,v.style,a,s,u,f):v.type==="large"?c4(n,v.size,a,s,u,f):d4(n,r,a,s,u,f)},hs=function(n,r,a,s,u,f){var p=s.fontMetrics().axisHeight*s.sizeMultiplier,v=901,w=5/s.fontMetrics().ptPerEm,$=Math.max(r-p,a+p),b=Math.max($/500*v,2*$-w);return Ts(n,b,!0,s,u,f)},cd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},b7=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function sa(o,n){var r=aa(o);if(r&&b7.has(r.text))return r;throw r?new ee("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new ee("Invalid delimiter type '"+o.type+"'",o)}ue({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=sa(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:cd[o.funcName].size,mclass:cd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?Q([o.mclass]):m4(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(on(o.delim,o.mode));var r=new te("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=le(yi[o.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function dd(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ue({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ee("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:sa(n[0],o).text,color:r}}});ue({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=sa(n[0],o),a=o.parser;++a.leftrightDepth;var s=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var u=je(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:s,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{dd(o);for(var r=vt(o.body,n,!0,["mopen","mclose"]),a=0,s=0,u=!1,f=0;f<r.length;f++)r[f].isMiddle?u=!0:(a=Math.max(r[f].height,a),s=Math.max(r[f].depth,s));a*=n.sizeMultiplier,s*=n.sizeMultiplier;var p;if(o.left==="."?p=bi(n,["mopen"]):p=hs(o.left,a,s,n,o.mode,["mopen"]),r.unshift(p),u)for(var v=1;v<r.length;v++){var w=r[v],$=w.isMiddle;$&&(r[v]=hs($.delim,a,s,$.options,o.mode,[]))}var b;if(o.right===".")b=bi(n,["mclose"]);else{var M=o.rightColor?n.withColor(o.rightColor):n;b=hs(o.right,a,s,M,o.mode,["mclose"])}return r.push(b),Q(["minner"],r,n)},mathmlBuilder:(o,n)=>{dd(o);var r=Ot(o.body,n);if(o.left!=="."){var a=new te("mo",[on(o.left,o.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(o.right!=="."){var s=new te("mo",[on(o.right,o.mode)]);s.setAttribute("fence","true"),o.rightColor&&s.setAttribute("mathcolor",o.rightColor),r.push(s)}return Os(r)}});ue({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=sa(n[0],o);if(!o.parser.leftrightDepth)throw new ee("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=bi(n,[]);else{r=m4(o.delim,1,n,o.mode,[]);var a={delim:o.delim,options:n};r.isMiddle=a}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?on("|","text"):on(o.delim,o.mode),a=new te("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var Us=(o,n)=>{var r=b0(Le(o.body,n),n),a=o.label.slice(1),s=n.sizeMultiplier,u,f=0,p=In(o.body);if(a==="sout")u=Q(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/s,f=-.5*n.fontMetrics().xHeight;else if(a==="phase"){var v=rt({number:.6,unit:"pt"},n),w=rt({number:.35,unit:"ex"},n),$=n.havingBaseSizing();s=s/$.sizeMultiplier;var b=r.height+r.depth+v+w;r.style.paddingLeft=le(b/2+v);var M=Math.floor(1e3*b*s),T=z6(M),P=new On([new xr("phase",T)],{width:"400em",height:le(M/1e3),viewBox:"0 0 400000 "+M,preserveAspectRatio:"xMinYMin slice"});u=wr(["hide-tail"],[P],n),u.style.height=le(b),f=r.depth+v+w}else{/cancel/.test(a)?p||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var R=0,q=0,I=0;/box/.test(a)?(I=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),R=n.fontMetrics().fboxsep+(a==="colorbox"?0:I),q=R):a==="angl"?(I=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),R=4*I,q=Math.max(0,.25-r.depth)):(R=p?.2:0,q=R),u=o7(r,a,R,q,n),/fbox|boxed|fcolorbox/.test(a)?(u.style.borderStyle="solid",u.style.borderWidth=le(I)):a==="angl"&&I!==.049&&(u.style.borderTopWidth=le(I),u.style.borderRightWidth=le(I)),f=r.depth+q,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var W;if(o.backgroundColor)W=Ie({positionType:"individualShift",children:[{type:"elem",elem:u,shift:f},{type:"elem",elem:r,shift:0}]});else{var N=/cancel|phase/.test(a)?["svg-align"]:[];W=Ie({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:f,wrapperClasses:N}]})}return/cancel/.test(a)&&(W.height=r.height,W.depth=r.depth),/cancel/.test(a)&&!p?Q(["mord","cancel-lap"],[W],n):Q(["mord"],[W],n)},Vs=(o,n)=>{var r=0,a=new te(o.label.includes("colorbox")?"mpadded":"menclose",[Ve(o.body,n)]);switch(o.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var s=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);a.setAttribute("style","border: "+s+"em solid "+String(o.borderColor))}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&a.setAttribute("mathbackground",o.backgroundColor),a};ue({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:a,funcName:s}=o,u=je(n[0],"color-token").color,f=n[1];return{type:"enclose",mode:a.mode,label:s,backgroundColor:u,body:f}},htmlBuilder:Us,mathmlBuilder:Vs});ue({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:a,funcName:s}=o,u=je(n[0],"color-token").color,f=je(n[1],"color-token").color,p=n[2];return{type:"enclose",mode:a.mode,label:s,backgroundColor:f,borderColor:u,body:p}},htmlBuilder:Us,mathmlBuilder:Vs});ue({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});ue({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o,s=n[0];return{type:"enclose",mode:r.mode,label:a,body:s}},htmlBuilder:Us,mathmlBuilder:Vs});ue({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var g4={};function $n(o){for(var{type:n,names:r,props:a,handler:s,htmlBuilder:u,mathmlBuilder:f}=o,p={type:n,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},v=0;v<r.length;++v)g4[r[v]]=p;u&&(Ko[n]=u),f&&(Zo[n]=f)}var y4={};function x(o,n){y4[o]=n}function fd(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var ua=o=>{var n=o.parser.settings;if(!n.displayMode)throw new ee("{"+o.envName+"} can be used only in display mode.")},$7=new Set(["gather","gather*"]);function Gs(o){if(!o.includes("ed"))return!o.includes("*")}function $r(o,n,r){var{hskipBeforeAndAfter:a,addJot:s,cols:u,arraystretch:f,colSeparationType:p,autoTag:v,singleRow:w,emptySingleRow:$,maxNumCols:b,leqno:M}=n;if(o.gullet.beginGroup(),w||o.gullet.macros.set("\\cr","\\\\\\relax"),!f){var T=o.gullet.expandMacroAsText("\\arraystretch");if(T==null)f=1;else if(f=parseFloat(T),!f||f<0)throw new ee("Invalid \\arraystretch: "+T)}o.gullet.beginGroup();var P=[],R=[P],q=[],I=[],W=v!=null?[]:void 0;function N(){v&&o.gullet.macros.set("\\@eqnsw","1",!0)}function L(){W&&(o.gullet.macros.get("\\df@tag")?(W.push(o.subparse([new Vt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):W.push(!!v&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(N(),I.push(fd(o));;){var U=o.parseExpression(!1,w?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),U={type:"ordgroup",mode:o.mode,body:U},r&&(U={type:"styling",mode:o.mode,style:r,body:[U]}),P.push(U);var K=o.fetch().text;if(K==="&"){if(b&&P.length===b){if(w||p)throw new ee("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(K==="\\end"){L(),P.length===1&&U.type==="styling"&&U.body[0].body.length===0&&(R.length>1||!$)&&R.pop(),I.length<R.length+1&&I.push([]);break}else if(K==="\\\\"){o.consume();var H=void 0;o.gullet.future().text!==" "&&(H=o.parseSizeGroup(!0)),q.push(H?H.value:null),L(),I.push(fd(o)),P=[],R.push(P),N()}else throw new ee("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:s,arraystretch:f,body:R,cols:u,rowGaps:q,hskipBeforeAndAfter:a,hLinesBeforeRow:I,colSeparationType:p,tags:W,leqno:M}}function Ys(o){return o.slice(0,1)==="d"?"display":"text"}var kn=function(n,r){var a,s,u=n.body.length,f=n.hLinesBeforeRow,p=0,v=new Array(u),w=[],$=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),b=1/r.fontMetrics().ptPerEm,M=5*b;if(n.colSeparationType&&n.colSeparationType==="small"){var T=r.havingStyle(Me.SCRIPT).sizeMultiplier;M=.2778*(T/r.sizeMultiplier)}var P=n.colSeparationType==="CD"?rt({number:3,unit:"ex"},r):12*b,R=3*b,q=n.arraystretch*P,I=.7*q,W=.3*q,N=0;function L(Xt){for(var It=0;It<Xt.length;++It)It>0&&(N+=.25),w.push({pos:N,isDashed:Xt[It]})}for(L(f[0]),a=0;a<n.body.length;++a){var U=n.body[a],K=I,H=W;p<U.length&&(p=U.length);var Z=new Array(U.length);for(s=0;s<U.length;++s){var V=Le(U[s],r);H<V.depth&&(H=V.depth),K<V.height&&(K=V.height),Z[s]=V}var ye=n.rowGaps[a],ze=0;ye&&(ze=rt(ye,r),ze>0&&(ze+=W,H<ze&&(H=ze),ze=0)),n.addJot&&(H+=R),Z.height=K,Z.depth=H,N+=K,Z.pos=N,N+=H+ze,v[a]=Z,L(f[a+1])}var Ce=N/2+r.fontMetrics().axisHeight,He=n.cols||[],Fe=[],Ge,Ue,xe=[];if(n.tags&&n.tags.some(Xt=>Xt))for(a=0;a<u;++a){var ne=v[a],fe=ne.pos-Ce,oe=n.tags[a],j=void 0;oe===!0?j=Q(["eqn-num"],[],r):oe===!1?j=Q([],[],r):j=Q([],vt(oe,r,!0),r),j.depth=ne.depth,j.height=ne.height,xe.push({type:"elem",elem:j,shift:fe})}for(s=0,Ue=0;s<p||Ue<He.length;++s,++Ue){for(var F=He[Ue]||{},ke=!0;F.type==="separator";){if(ke||(Ge=Q(["arraycolsep"],[]),Ge.style.width=le(r.fontMetrics().doubleRuleSep),Fe.push(Ge)),F.separator==="|"||F.separator===":"){var ve=F.separator==="|"?"solid":"dashed",Ae=Q(["vertical-separator"],[],r);Ae.style.height=le(N),Ae.style.borderRightWidth=le($),Ae.style.borderRightStyle=ve,Ae.style.margin="0 "+le(-$/2);var Te=N-Ce;Te&&(Ae.style.verticalAlign=le(-Te)),Fe.push(Ae)}else throw new ee("Invalid separator type: "+F.separator);Ue++,F=He[Ue]||{},ke=!1}if(!(s>=p)){var Ee=void 0;if(s>0||n.hskipBeforeAndAfter){var Pe;Ee=(Pe=F.pregap)!=null?Pe:M,Ee!==0&&(Ge=Q(["arraycolsep"],[]),Ge.style.width=le(Ee),Fe.push(Ge))}var Re=[];for(a=0;a<u;++a){var at=v[a],an=at[s];if(an){var ln=at.pos-Ce;an.depth=at.depth,an.height=at.height,Re.push({type:"elem",elem:an,shift:ln})}}if(Re=Ie({positionType:"individualShift",children:Re}),Re=Q(["col-align-"+(F.align||"c")],[Re]),Fe.push(Re),s<p-1||n.hskipBeforeAndAfter){var zn;Ee=(zn=F.postgap)!=null?zn:M,Ee!==0&&(Ge=Q(["arraycolsep"],[]),Ge.style.width=le(Ee),Fe.push(Ge))}}}if(v=Q(["mtable"],Fe),w.length>0){for(var Wn=w0("hline",r,$),kr=w0("hdashline",r,$),Un=[{type:"elem",elem:v,shift:0}];w.length>0;){var Sn=w.pop(),Tn=Sn.pos-Ce;Sn.isDashed?Un.push({type:"elem",elem:kr,shift:Tn}):Un.push({type:"elem",elem:Wn,shift:Tn})}v=Ie({positionType:"individualShift",children:Un})}if(xe.length===0)return Q(["mord"],[v],r);var Yt=Ie({positionType:"individualShift",children:xe});return Yt=Q(["tag"],[Yt],r),Hn([v,Yt])},k7={c:"center ",l:"left ",r:"right "},_n=function(n,r){for(var a=[],s=new te("mtd",[],["mtr-glue"]),u=new te("mtd",[],["mml-eqn-num"]),f=0;f<n.body.length;f++){for(var p=n.body[f],v=[],w=0;w<p.length;w++)v.push(new te("mtd",[Ve(p[w],r)]));n.tags&&n.tags[f]&&(v.unshift(s),v.push(s),n.leqno?v.unshift(u):v.push(u)),a.push(new te("mtr",v))}var $=new te("mtable",a),b=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);$.setAttribute("rowspacing",le(b));var M="",T="";if(n.cols&&n.cols.length>0){var P=n.cols,R="",q=!1,I=0,W=P.length;P[0].type==="separator"&&(M+="top ",I=1),P[P.length-1].type==="separator"&&(M+="bottom ",W-=1);for(var N=I;N<W;N++)P[N].type==="align"?(T+=k7[P[N].align],q&&(R+="none "),q=!0):P[N].type==="separator"&&q&&(R+=P[N].separator==="|"?"solid ":"dashed ",q=!1);$.setAttribute("columnalign",T.trim()),/[sd]/.test(R)&&$.setAttribute("columnlines",R.trim())}if(n.colSeparationType==="align"){for(var L=n.cols||[],U="",K=1;K<L.length;K++)U+=K%2?"0em ":"1em ";$.setAttribute("columnspacing",U.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?$.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?$.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?$.setAttribute("columnspacing","0.5em"):$.setAttribute("columnspacing","1em");var H="",Z=n.hLinesBeforeRow;M+=Z[0].length>0?"left ":"",M+=Z[Z.length-1].length>0?"right ":"";for(var V=1;V<Z.length-1;V++)H+=Z[V].length===0?"none ":Z[V][0]?"dashed ":"solid ";return/[sd]/.test(H)&&$.setAttribute("rowlines",H.trim()),M!==""&&($=new te("menclose",[$]),$.setAttribute("notation",M.trim())),n.arraystretch&&n.arraystretch<1&&($=new te("mstyle",[$]),$.setAttribute("scriptlevel","1")),$},x4=function(n,r){n.envName.includes("ed")||ua(n);var a=[],s=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",f=$r(n.parser,{cols:a,addJot:!0,autoTag:u?void 0:Gs(n.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),p,v=0,w={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var $="",b=0;b<r[0].body.length;b++){var M=je(r[0].body[b],"textord");$+=M.text}p=Number($),v=p*2}var T=!v;f.body.forEach(function(I){for(var W=1;W<I.length;W+=2){var N=je(I[W],"styling"),L=je(N.body[0],"ordgroup");L.body.unshift(w)}if(T)v<I.length&&(v=I.length);else{var U=I.length/2;if(p<U)throw new ee("Too many math in a row: "+("expected "+p+", but got "+U),I[0])}});for(var P=0;P<v;++P){var R="r",q=0;P%2===1?R="l":P>0&&T&&(q=1),a[P]={type:"align",align:R,pregap:q,postgap:0}}return f.colSeparationType=T?"align":"alignat",f};$n({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=aa(n[0]),a=r?[n[0]]:je(n[0],"ordgroup").body,s=a.map(function(f){var p=Fs(f),v=p.text;if("lcr".includes(v))return{type:"align",align:v};if(v==="|")return{type:"separator",separator:"|"};if(v===":")return{type:"separator",separator:":"};throw new ee("Unknown column alignment: "+v,f)}),u={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return $r(o.parser,u,Ys(o.envName))},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var s=o.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new ee("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),a.cols=[{type:"align",align:r}]}}var u=$r(o.parser,a,Ys(o.envName)),f=Math.max(0,...u.body.map(p=>p.length));return u.cols=new Array(f).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=$r(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=aa(n[0]),a=r?[n[0]]:je(n[0],"ordgroup").body,s=a.map(function(f){var p=Fs(f),v=p.text;if("lc".includes(v))return{type:"align",align:v};throw new ee("Unknown column alignment: "+v,f)});if(s.length>1)throw new ee("{subarray} can contain only one column");var u={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=$r(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new ee("{subarray} can contain only one column");return u},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=$r(o.parser,n,Ys(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:x4,htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){$7.has(o.envName)&&ua(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Gs(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return $r(o.parser,n,"display")},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:x4,htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){ua(o);var n={autoTag:Gs(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return $r(o.parser,n,"display")},htmlBuilder:kn,mathmlBuilder:_n});$n({type:"array",names:["CD"],props:{numArgs:0},handler(o){return ua(o),c7(o.parser)},htmlBuilder:kn,mathmlBuilder:_n});x("\\nonumber","\\gdef\\@eqnsw{0}");x("\\notag","\\nonumber");ue({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new ee(o.funcName+" valid only within array environment")}});var hd=g4;ue({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:a}=o,s=n[0];if(s.type!=="ordgroup")throw new ee("Invalid environment name",s);for(var u="",f=0;f<s.body.length;++f)u+=je(s.body[f],"textord").text;if(a==="\\begin"){if(!hd.hasOwnProperty(u))throw new ee("No such environment: "+u,s);var p=hd[u],{args:v,optArgs:w}=r.parseArguments("\\begin{"+u+"}",p),$={mode:r.mode,envName:u,parser:r},b=p.handler($,v,w);r.expect("\\end",!1);var M=r.nextToken,T=je(r.parseFunction(),"environment");if(T.name!==u)throw new ee("Mismatch: \\begin{"+u+"} matched by \\end{"+T.name+"}",M);return b}return{type:"environment",mode:r.mode,name:u,nameGroup:s}}});var w4=(o,n)=>{var r=o.font,a=n.withFont(r);return Le(o.body,a)},b4=(o,n)=>{var r=o.font,a=n.withFont(r);return Ve(o.body,a)},md={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ue({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=Jo(n[0]),u=a;return u in md&&(u=md[u]),{type:"font",mode:r.mode,font:u.slice(1),body:s}},htmlBuilder:w4,mathmlBuilder:b4});ue({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"mclass",mode:r.mode,mclass:la(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:In(a)}}});ue({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a,breakOnTokenText:s}=o,{mode:u}=r,f=r.parseExpression(!0,s),p="math"+a.slice(1);return{type:"font",mode:u,font:p,body:{type:"ordgroup",mode:r.mode,body:f}}},htmlBuilder:w4,mathmlBuilder:b4});var _7=(o,n)=>{var r=n.style,a=r.fracNum(),s=r.fracDen(),u;u=n.havingStyle(a);var f=Le(o.numer,u,n);if(o.continued){var p=8.5/n.fontMetrics().ptPerEm,v=3.5/n.fontMetrics().ptPerEm;f.height=f.height<p?p:f.height,f.depth=f.depth<v?v:f.depth}u=n.havingStyle(s);var w=Le(o.denom,u,n),$,b,M;o.hasBarLine?(o.barSize?(b=rt(o.barSize,n),$=w0("frac-line",n,b)):$=w0("frac-line",n),b=$.height,M=$.height):($=null,b=0,M=n.fontMetrics().defaultRuleThickness);var T,P,R;r.size===Me.DISPLAY.size?(T=n.fontMetrics().num1,b>0?P=3*M:P=7*M,R=n.fontMetrics().denom1):(b>0?(T=n.fontMetrics().num2,P=M):(T=n.fontMetrics().num3,P=3*M),R=n.fontMetrics().denom2);var q;if($){var W=n.fontMetrics().axisHeight;T-f.depth-(W+.5*b)<P&&(T+=P-(T-f.depth-(W+.5*b))),W-.5*b-(w.height-R)<P&&(R+=P-(W-.5*b-(w.height-R)));var N=-(W-.5*b);q=Ie({positionType:"individualShift",children:[{type:"elem",elem:w,shift:R},{type:"elem",elem:$,shift:N},{type:"elem",elem:f,shift:-T}]})}else{var I=T-f.depth-(w.height-R);I<P&&(T+=.5*(P-I),R+=.5*(P-I)),q=Ie({positionType:"individualShift",children:[{type:"elem",elem:w,shift:R},{type:"elem",elem:f,shift:-T}]})}u=n.havingStyle(r),q.height*=u.sizeMultiplier/n.sizeMultiplier,q.depth*=u.sizeMultiplier/n.sizeMultiplier;var L;r.size===Me.DISPLAY.size?L=n.fontMetrics().delim1:r.size===Me.SCRIPTSCRIPT.size?L=n.havingStyle(Me.SCRIPT).fontMetrics().delim2:L=n.fontMetrics().delim2;var U,K;return o.leftDelim==null?U=bi(n,["mopen"]):U=Ts(o.leftDelim,L,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?K=Q([]):o.rightDelim==null?K=bi(n,["mclose"]):K=Ts(o.rightDelim,L,!0,n.havingStyle(r),o.mode,["mclose"]),Q(["mord"].concat(u.sizingClasses(n)),[U,Q(["mfrac"],[q]),K],n)},z7=(o,n)=>{var r=new te("mfrac",[Ve(o.numer,n),Ve(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var a=rt(o.barSize,n);r.setAttribute("linethickness",le(a))}if(o.leftDelim!=null||o.rightDelim!=null){var s=[];if(o.leftDelim!=null){var u=new te("mo",[new ft(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),s.push(u)}if(s.push(r),o.rightDelim!=null){var f=new te("mo",[new ft(o.rightDelim.replace("\\",""))]);f.setAttribute("fence","true"),s.push(f)}return Os(s)}return r},$4=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};ue({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=n[0],u=n[1],f,p=null,v=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":f=!0;break;case"\\\\atopfrac":f=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":f=!1,p="(",v=")";break;case"\\\\bracefrac":f=!1,p="\\{",v="\\}";break;case"\\\\brackfrac":f=!1,p="[",v="]";break;default:throw new Error("Unrecognized genfrac command")}var w=a==="\\cfrac",$=null;return w||a.startsWith("\\d")?$="display":a.startsWith("\\t")&&($="text"),$4({type:"genfrac",mode:r.mode,numer:s,denom:u,continued:w,hasBarLine:f,leftDelim:p,rightDelim:v,barSize:null},$)},htmlBuilder:_7,mathmlBuilder:z7});ue({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:a}=o,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:s,token:a}}});var pd=["display","text","script","scriptscript"],vd=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};ue({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,a=n[4],s=n[5],u=Jo(n[0]),f=u.type==="atom"&&u.family==="open"?vd(u.text):null,p=Jo(n[1]),v=p.type==="atom"&&p.family==="close"?vd(p.text):null,w=je(n[2],"size"),$,b=null;w.isBlank?$=!0:(b=w.value,$=b.number>0);var M=null,T=n[3];if(T.type==="ordgroup"){if(T.body.length>0){var P=je(T.body[0],"textord");M=pd[Number(P.text)]}}else T=je(T,"textord"),M=pd[Number(T.text)];return $4({type:"genfrac",mode:r.mode,numer:a,denom:s,continued:!1,hasBarLine:$,barSize:b,leftDelim:f,rightDelim:v},M)}});ue({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:a,token:s}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:je(n[0],"size").value,token:s}}});ue({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=n[0],u=je(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var f=n[2],p=u.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:f,continued:!1,hasBarLine:p,barSize:u,leftDelim:null,rightDelim:null}}});var k4=(o,n)=>{var r=n.style,a,s;o.type==="supsub"?(a=o.sup?Le(o.sup,n.havingStyle(r.sup()),n):Le(o.sub,n.havingStyle(r.sub()),n),s=je(o.base,"horizBrace")):s=je(o,"horizBrace");var u=Le(s.base,n.havingBaseStyle(Me.DISPLAY)),f=oa(s,n),p;if(s.isOver?(p=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:f}]}),p.children[0].children[0].children[1].classes.push("svg-align")):(p=Ie({positionType:"bottom",positionData:u.depth+.1+f.height,children:[{type:"elem",elem:f},{type:"kern",size:.1},{type:"elem",elem:u}]}),p.children[0].children[0].children[0].classes.push("svg-align")),a){var v=Q(["mord",s.isOver?"mover":"munder"],[p],n);s.isOver?p=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:v},{type:"kern",size:.2},{type:"elem",elem:a}]}):p=Ie({positionType:"bottom",positionData:v.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:v}]})}return Q(["mord",s.isOver?"mover":"munder"],[p],n)},S7=(o,n)=>{var r=ia(o.label);return new te(o.isOver?"mover":"munder",[Ve(o.base,n),r])};ue({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:a}=o;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:n[0]}},htmlBuilder:k4,mathmlBuilder:S7});ue({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[1],s=je(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:ut(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=vt(o.body,n,!1);return H6(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=br(o.body,n);return r instanceof te||(r=new te("mrow",[r])),r.setAttribute("href",o.href),r}});ue({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=je(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var s=[],u=0;u<a.length;u++){var f=a[u];f==="~"&&(f="\\textasciitilde"),s.push({type:"textord",mode:"text",text:f})}var p={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:a,body:ut(p)}}});ue({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:ut(n[0])}},htmlBuilder(o,n){var r=vt(o.body,n,!1);return Hn(r)},mathmlBuilder(o,n){return new te("mrow",Ot(o.body,n))}});ue({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a,token:s}=o,u=je(n[0],"raw").string,f=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var p,v={};switch(a){case"\\htmlClass":v.class=u,p={command:"\\htmlClass",class:u};break;case"\\htmlId":v.id=u,p={command:"\\htmlId",id:u};break;case"\\htmlStyle":v.style=u,p={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var w=u.split(","),$=0;$<w.length;$++){var b=w[$],M=b.indexOf("=");if(M<0)throw new ee("\\htmlData key/value '"+b+"' missing equals sign");var T=b.slice(0,M),P=b.slice(M+1);v["data-"+T.trim()]=P}p={command:"\\htmlData",attributes:v};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(p)?{type:"html",mode:r.mode,attributes:v,body:ut(f)}:r.formatUnsupportedCmd(a)},htmlBuilder:(o,n)=>{var r=vt(o.body,n,!1),a=["enclosing"];o.attributes.class&&a.push(...o.attributes.class.trim().split(/\s+/));var s=Q(a,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&s.setAttribute(u,o.attributes[u]);return s},mathmlBuilder:(o,n)=>br(o.body,n)});ue({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:ut(n[0]),mathml:ut(n[1])}},htmlBuilder:(o,n)=>{var r=vt(o.html,n,!1);return Hn(r)},mathmlBuilder:(o,n)=>br(o.mathml,n)});var ms=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new ee("Invalid size: '"+n+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!Id(a))throw new ee("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};ue({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:a}=o,s={number:0,unit:"em"},u={number:.9,unit:"em"},f={number:0,unit:"em"},p="";if(r[0])for(var v=je(r[0],"raw").string,w=v.split(","),$=0;$<w.length;$++){var b=w[$].split("=");if(b.length===2){var M=b[1].trim();switch(b[0].trim()){case"alt":p=M;break;case"width":s=ms(M);break;case"height":u=ms(M);break;case"totalheight":f=ms(M);break;default:throw new ee("Invalid key: '"+b[0]+"' in \\includegraphics.")}}}var T=je(n[0],"url").url;return p===""&&(p=T,p=p.replace(/^.*[\\/]/,""),p=p.substring(0,p.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:T})?{type:"includegraphics",mode:a.mode,alt:p,width:s,height:u,totalheight:f,src:T}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=rt(o.height,n),a=0;o.totalheight.number>0&&(a=rt(o.totalheight,n)-r);var s=0;o.width.number>0&&(s=rt(o.width,n));var u={height:le(r+a)};s>0&&(u.width=le(s)),a>0&&(u.verticalAlign=le(-a));var f=new D6(o.src,o.alt,u);return f.height=r,f.depth=a,f},mathmlBuilder:(o,n)=>{var r=new te("mglyph",[]);r.setAttribute("alt",o.alt);var a=rt(o.height,n),s=0;if(o.totalheight.number>0&&(s=rt(o.totalheight,n)-a,r.setAttribute("valign",le(-s))),r.setAttribute("height",le(a+s)),o.width.number>0){var u=rt(o.width,n);r.setAttribute("width",le(u))}return r.setAttribute("src",o.src),r}});ue({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:a}=o,s=je(n[0],"size");if(r.settings.strict){var u=a[1]==="m",f=s.value.unit==="mu";u?(f||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):f&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(o,n){return Gd(o.dimension,n)},mathmlBuilder(o,n){var r=rt(o.dimension,n);return new Jd(r)}});ue({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=n[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:s}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=Q([],[Le(o.body,n)]),r=Q(["inner"],[r],n)):r=Q(["inner"],[Le(o.body,n)]);var a=Q(["fix"],[]),s=Q([o.alignment],[r,a],n),u=Q(["strut"]);return u.style.height=le(s.height+s.depth),s.depth&&(u.style.verticalAlign=le(-s.depth)),s.children.unshift(u),s=Q(["thinbox"],[s],n),Q(["mord","vbox"],[s],n)},mathmlBuilder:(o,n)=>{var r=new te("mpadded",[Ve(o.body,n)]);if(o.alignment!=="rlap"){var a=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});ue({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:a}=o,s=a.mode;a.switchMode("math");var u=r==="\\("?"\\)":"$",f=a.parseExpression(!1,u);return a.expect(u),a.switchMode(s),{type:"styling",mode:a.mode,style:"text",body:f}}});ue({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new ee("Mismatched "+o.funcName)}});var gd=(o,n)=>{switch(n.style.size){case Me.DISPLAY.size:return o.display;case Me.TEXT.size:return o.text;case Me.SCRIPT.size:return o.script;case Me.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ue({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:ut(n[0]),text:ut(n[1]),script:ut(n[2]),scriptscript:ut(n[3])}},htmlBuilder:(o,n)=>{var r=gd(o,n),a=vt(r,n,!1);return Hn(a)},mathmlBuilder:(o,n)=>{var r=gd(o,n);return br(r,n)}});var _4=(o,n,r,a,s,u,f)=>{o=Q([],[o]);var p=r&&In(r),v,w;if(n){var $=Le(n,a.havingStyle(s.sup()),a);w={elem:$,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-$.depth)}}if(r){var b=Le(r,a.havingStyle(s.sub()),a);v={elem:b,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-b.height)}}var M;if(w&&v){var T=a.fontMetrics().bigOpSpacing5+v.elem.height+v.elem.depth+v.kern+o.depth+f;M=Ie({positionType:"bottom",positionData:T,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:le(-u)},{type:"kern",size:v.kern},{type:"elem",elem:o},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:le(u)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if(v){var P=o.height-f;M=Ie({positionType:"top",positionData:P,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:le(-u)},{type:"kern",size:v.kern},{type:"elem",elem:o}]})}else if(w){var R=o.depth+f;M=Ie({positionType:"bottom",positionData:R,children:[{type:"elem",elem:o},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:le(u)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return o;var q=[M];if(v&&u!==0&&!p){var I=Q(["mspace"],[],a);I.style.marginRight=le(u),q.unshift(I)}return Q(["mop","op-limits"],q,a)},z4=new Set(["\\smallint"]),_0=(o,n)=>{var r,a,s=!1,u;o.type==="supsub"?(r=o.sup,a=o.sub,u=je(o.base,"op"),s=!0):u=je(o,"op");var f=n.style,p=!1;f.size===Me.DISPLAY.size&&u.symbol&&!z4.has(u.name)&&(p=!0);var v;if(u.symbol){var w=p?"Size2-Regular":"Size1-Regular",$="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&($=u.name.slice(1),u.name=$==="oiint"?"\\iint":"\\iiint"),v=At(u.name,w,"math",n,["mop","op-symbol",p?"large-op":"small-op"]),$.length>0){var b=v.italic,M=Xd($+"Size"+(p?"2":"1"),n);v=Ie({positionType:"individualShift",children:[{type:"elem",elem:v,shift:0},{type:"elem",elem:M,shift:p?.08:0}]}),u.name="\\"+$,v.classes.unshift("mop"),v.italic=b}}else if(u.body){var T=vt(u.body,n,!0);T.length===1&&T[0]instanceof rn?(v=T[0],v.classes[0]="mop"):v=Q(["mop"],T,n)}else{for(var P=[],R=1;R<u.name.length;R++)P.push(Ns(u.name[R],u.mode,n));v=Q(["mop"],P,n)}var q=0,I=0;return(v instanceof rn||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(q=(v.height-v.depth)/2-n.fontMetrics().axisHeight,I=v.italic),s?_4(v,r,a,n,f,I,q):(q&&(v.style.position="relative",v.style.top=le(q)),v)},_i=(o,n)=>{var r;if(o.symbol)r=new te("mo",[on(o.name,o.mode)]),z4.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new te("mo",Ot(o.body,n));else{r=new te("mi",[new ft(o.name.slice(1))]);var a=new te("mo",[on("⁡","text")]);o.parentIsSupSub?r=new te("mrow",[r,a]):r=Zd([r,a])}return r},T7={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ue({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=a;return s.length===1&&(s=T7[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:_0,mathmlBuilder:_i});ue({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:ut(a)}},htmlBuilder:_0,mathmlBuilder:_i});var M7={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ue({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:_0,mathmlBuilder:_i});ue({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:_0,mathmlBuilder:_i});ue({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,a=r;return a.length===1&&(a=M7[a]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:_0,mathmlBuilder:_i});var S4=(o,n)=>{var r,a,s=!1,u;o.type==="supsub"?(r=o.sup,a=o.sub,u=je(o.base,"operatorname"),s=!0):u=je(o,"operatorname");var f;if(u.body.length>0){for(var p=u.body.map(b=>{var M=b.text;return typeof M=="string"?{type:"textord",mode:b.mode,text:M}:b}),v=vt(p,n.withFont("mathrm"),!0),w=0;w<v.length;w++){var $=v[w];$ instanceof rn&&($.text=$.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}f=Q(["mop"],v,n)}else f=Q(["mop"],[],n);return s?_4(f,r,a,n,n.style,0,0):f},C7=(o,n)=>{for(var r=Ot(o.body,n.withFont("mathrm")),a=!0,s=0;s<r.length;s++){var u=r[s];if(!(u instanceof Jd))if(u instanceof te)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var f=u.children[0];u.children.length===1&&f instanceof ft?f.text=f.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var p=r.map($=>$.toText()).join("");r=[new ft(p)]}var v=new te("mi",r);v.setAttribute("mathvariant","normal");var w=new te("mo",[on("⁡","text")]);return o.parentIsSupSub?new te("mrow",[v,w]):Zd([v,w])};ue({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:a}=o,s=n[0];return{type:"operatorname",mode:r.mode,body:ut(s),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:S4,mathmlBuilder:C7});x("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Wr({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?Hn(vt(o.body,n,!1)):Q(["mord"],vt(o.body,n,!0),n)},mathmlBuilder(o,n){return br(o.body,n,!0)}});ue({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,a=n[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(o,n){var r=Le(o.body,n.havingCrampedStyle()),a=w0("overline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:a},{type:"kern",size:s}]});return Q(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new te("mo",[new ft("‾")]);r.setAttribute("stretchy","true");var a=new te("mover",[Ve(o.body,n),r]);return a.setAttribute("accent","true"),a}});ue({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"phantom",mode:r.mode,body:ut(a)}},htmlBuilder:(o,n)=>{var r=vt(o.body,n.withPhantom(),!1);return Hn(r)},mathmlBuilder:(o,n)=>{var r=Ot(o.body,n);return new te("mphantom",r)}});ue({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:(o,n)=>{var r=Q([],[Le(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),Q(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Ot(ut(o.body),n),a=new te("mphantom",r),s=new te("mpadded",[a]);return s.setAttribute("height","0px"),s.setAttribute("depth","0px"),s}});ue({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,a=n[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(o,n)=>{var r=Q(["inner"],[Le(o.body,n.withPhantom())]),a=Q(["fix"],[]);return Q(["mord","rlap"],[r,a],n)},mathmlBuilder:(o,n)=>{var r=Ot(ut(o.body),n),a=new te("mphantom",r),s=new te("mpadded",[a]);return s.setAttribute("width","0px"),s}});ue({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,a=je(n[0],"size").value,s=n[1];return{type:"raisebox",mode:r.mode,dy:a,body:s}},htmlBuilder(o,n){var r=Le(o.body,n),a=rt(o.dy,n);return Ie({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new te("mpadded",[Ve(o.body,n)]),a=o.dy.number+o.dy.unit;return r.setAttribute("voffset",a),r}});ue({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});ue({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:a}=o,s=r[0],u=je(n[0],"size"),f=je(n[1],"size");return{type:"rule",mode:a.mode,shift:s&&je(s,"size").value,width:u.value,height:f.value}},htmlBuilder(o,n){var r=Q(["mord","rule"],[],n),a=rt(o.width,n),s=rt(o.height,n),u=o.shift?rt(o.shift,n):0;return r.style.borderRightWidth=le(a),r.style.borderTopWidth=le(s),r.style.bottom=le(u),r.width=a,r.height=s+u,r.depth=-u,r.maxFontSize=s*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=rt(o.width,n),a=rt(o.height,n),s=o.shift?rt(o.shift,n):0,u=n.color&&n.getColor()||"black",f=new te("mspace");f.setAttribute("mathbackground",u),f.setAttribute("width",le(r)),f.setAttribute("height",le(a));var p=new te("mpadded",[f]);return s>=0?p.setAttribute("height",le(s)):(p.setAttribute("height",le(s)),p.setAttribute("depth",le(-s))),p.setAttribute("voffset",le(s)),p}});function T4(o,n,r){for(var a=vt(o,n,!1),s=n.sizeMultiplier/r.sizeMultiplier,u=0;u<a.length;u++){var f=a[u].classes.indexOf("sizing");f<0?Array.prototype.push.apply(a[u].classes,n.sizingClasses(r)):a[u].classes[f+1]==="reset-size"+n.size&&(a[u].classes[f+1]="reset-size"+r.size),a[u].height*=s,a[u].depth*=s}return Hn(a)}var yd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],A7=(o,n)=>{var r=n.havingSize(o.size);return T4(o.body,r,n)};ue({type:"sizing",names:yd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:a,parser:s}=o,u=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:yd.indexOf(a)+1,body:u}},htmlBuilder:A7,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),a=Ot(o.body,r),s=new te("mstyle",a);return s.setAttribute("mathsize",le(r.sizeMultiplier)),s}});ue({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:a}=o,s=!1,u=!1,f=r[0]&&je(r[0],"ordgroup");if(f)for(var p="",v=0;v<f.body.length;++v){var w=f.body[v];if(p=w.text,p==="t")s=!0;else if(p==="b")u=!0;else{s=!1,u=!1;break}}else s=!0,u=!0;var $=n[0];return{type:"smash",mode:a.mode,body:$,smashHeight:s,smashDepth:u}},htmlBuilder:(o,n)=>{var r=Q([],[Le(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].depth=0;var u=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return Q(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new te("mpadded",[Ve(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ue({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:a}=o,s=r[0],u=n[0];return{type:"sqrt",mode:a.mode,body:u,index:s}},htmlBuilder(o,n){var r=Le(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=b0(r,n);var a=n.fontMetrics(),s=a.defaultRuleThickness,u=s;n.style.id<Me.TEXT.id&&(u=n.fontMetrics().xHeight);var f=s+u/4,p=r.height+r.depth+f+s,{span:v,ruleWidth:w,advanceWidth:$}=v7(p,n),b=v.height-w;b>r.height+r.depth+f&&(f=(f+b-r.height-r.depth)/2);var M=v.height-r.height-f-w;r.style.paddingLeft=le($);var T=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+M)},{type:"elem",elem:v},{type:"kern",size:w}]});if(o.index){var P=n.havingStyle(Me.SCRIPTSCRIPT),R=Le(o.index,P,n),q=.6*(T.height-T.depth),I=Ie({positionType:"shift",positionData:-q,children:[{type:"elem",elem:R}]}),W=Q(["root"],[I]);return Q(["mord","sqrt"],[W,T],n)}else return Q(["mord","sqrt"],[T],n)},mathmlBuilder(o,n){var{body:r,index:a}=o;return a?new te("mroot",[Ve(r,n),Ve(a,n)]):new te("msqrt",[Ve(r,n)])}});var xd={display:Me.DISPLAY,text:Me.TEXT,script:Me.SCRIPT,scriptscript:Me.SCRIPTSCRIPT};ue({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:a,parser:s}=o,u=s.parseExpression(!0,r),f=a.slice(1,a.length-5);return{type:"styling",mode:s.mode,style:f,body:u}},htmlBuilder(o,n){var r=xd[o.style],a=n.havingStyle(r).withFont("");return T4(o.body,a,n)},mathmlBuilder(o,n){var r=xd[o.style],a=n.havingStyle(r),s=Ot(o.body,a),u=new te("mstyle",s),f={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},p=f[o.style];return u.setAttribute("scriptlevel",p[0]),u.setAttribute("displaystyle",p[1]),u}});var j7=function(n,r){var a=n.base;if(a)if(a.type==="op"){var s=a.limits&&(r.style.size===Me.DISPLAY.size||a.alwaysHandleSupSub);return s?_0:null}else if(a.type==="operatorname"){var u=a.alwaysHandleSupSub&&(r.style.size===Me.DISPLAY.size||a.limits);return u?S4:null}else{if(a.type==="accent")return In(a.base)?Hs:null;if(a.type==="horizBrace"){var f=!n.sub;return f===a.isOver?k4:null}else return null}else return null};Wr({type:"supsub",htmlBuilder(o,n){var r=j7(o,n);if(r)return r(o,n);var{base:a,sup:s,sub:u}=o,f=Le(a,n),p,v,w=n.fontMetrics(),$=0,b=0,M=a&&In(a);if(s){var T=n.havingStyle(n.style.sup());p=Le(s,T,n),M||($=f.height-T.fontMetrics().supDrop*T.sizeMultiplier/n.sizeMultiplier)}if(u){var P=n.havingStyle(n.style.sub());v=Le(u,P,n),M||(b=f.depth+P.fontMetrics().subDrop*P.sizeMultiplier/n.sizeMultiplier)}var R;n.style===Me.DISPLAY?R=w.sup1:n.style.cramped?R=w.sup3:R=w.sup2;var q=n.sizeMultiplier,I=le(.5/w.ptPerEm/q),W=null;if(v){var N=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(f instanceof rn||N)&&(W=le(-f.italic))}var L;if(p&&v){$=Math.max($,R,p.depth+.25*w.xHeight),b=Math.max(b,w.sub2);var U=w.defaultRuleThickness,K=4*U;if($-p.depth-(v.height-b)<K){b=K-($-p.depth)+v.height;var H=.8*w.xHeight-($-p.depth);H>0&&($+=H,b-=H)}var Z=[{type:"elem",elem:v,shift:b,marginRight:I,marginLeft:W},{type:"elem",elem:p,shift:-$,marginRight:I}];L=Ie({positionType:"individualShift",children:Z})}else if(v){b=Math.max(b,w.sub1,v.height-.8*w.xHeight);var V=[{type:"elem",elem:v,marginLeft:W,marginRight:I}];L=Ie({positionType:"shift",positionData:b,children:V})}else if(p)$=Math.max($,R,p.depth+.25*w.xHeight),L=Ie({positionType:"shift",positionData:-$,children:[{type:"elem",elem:p,marginRight:I}]});else throw new Error("supsub must have either sup or sub.");var ye=ks(f,"right")||"mord";return Q([ye],[f,Q(["msupsub"],[L])],n)},mathmlBuilder(o,n){var r=!1,a,s;o.base&&o.base.type==="horizBrace"&&(s=!!o.sup,s===o.base.isOver&&(r=!0,a=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Ve(o.base,n)];o.sub&&u.push(Ve(o.sub,n)),o.sup&&u.push(Ve(o.sup,n));var f;if(r)f=a?"mover":"munder";else if(o.sub)if(o.sup){var w=o.base;w&&w.type==="op"&&w.limits&&n.style===Me.DISPLAY||w&&w.type==="operatorname"&&w.alwaysHandleSupSub&&(n.style===Me.DISPLAY||w.limits)?f="munderover":f="msubsup"}else{var v=o.base;v&&v.type==="op"&&v.limits&&(n.style===Me.DISPLAY||v.alwaysHandleSupSub)||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(v.limits||n.style===Me.DISPLAY)?f="munder":f="msub"}else{var p=o.base;p&&p.type==="op"&&p.limits&&(n.style===Me.DISPLAY||p.alwaysHandleSupSub)||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(p.limits||n.style===Me.DISPLAY)?f="mover":f="msup"}return new te(f,u)}});Wr({type:"atom",htmlBuilder(o,n){return Ns(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new te("mo",[on(o.text,o.mode)]);if(o.family==="bin"){var a=Is(o,n);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var M4={mi:"italic",mn:"normal",mtext:"normal"};Wr({type:"mathord",htmlBuilder(o,n){return ra(o,n,"mathord")},mathmlBuilder(o,n){var r=new te("mi",[on(o.text,o.mode,n)]),a=Is(o,n)||"italic";return a!==M4[r.type]&&r.setAttribute("mathvariant",a),r}});Wr({type:"textord",htmlBuilder(o,n){return ra(o,n,"textord")},mathmlBuilder(o,n){var r=on(o.text,o.mode,n),a=Is(o,n)||"normal",s;return o.mode==="text"?s=new te("mtext",[r]):/[0-9]/.test(o.text)?s=new te("mn",[r]):o.text==="\\prime"?s=new te("mo",[r]):s=new te("mi",[r]),a!==M4[s.type]&&s.setAttribute("mathvariant",a),s}});var ps={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},vs={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Wr({type:"spacing",htmlBuilder(o,n){if(vs.hasOwnProperty(o.text)){var r=vs[o.text].className||"";if(o.mode==="text"){var a=ra(o,n,"textord");return a.classes.push(r),a}else return Q(["mspace",r],[Ns(o.text,o.mode,n)],n)}else{if(ps.hasOwnProperty(o.text))return Q(["mspace",ps[o.text]],[],n);throw new ee('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if(vs.hasOwnProperty(o.text))r=new te("mtext",[new ft(" ")]);else{if(ps.hasOwnProperty(o.text))return new te("mspace");throw new ee('Unknown type of space "'+o.text+'"')}return r}});var wd=()=>{var o=new te("mtd",[]);return o.setAttribute("width","50%"),o};Wr({type:"tag",mathmlBuilder(o,n){var r=new te("mtable",[new te("mtr",[wd(),new te("mtd",[br(o.body,n)]),wd(),new te("mtd",[br(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var bd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},$d={"\\textbf":"textbf","\\textmd":"textmd"},E7={"\\textit":"textit","\\textup":"textup"},kd=(o,n)=>{var r=o.font;if(r){if(bd[r])return n.withTextFontFamily(bd[r]);if($d[r])return n.withTextFontWeight($d[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(E7[r])};ue({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:a}=o,s=n[0];return{type:"text",mode:r.mode,body:ut(s),font:a}},htmlBuilder(o,n){var r=kd(o,n),a=vt(o.body,r,!0);return Q(["mord","text"],a,r)},mathmlBuilder(o,n){var r=kd(o,n);return br(o.body,r)}});ue({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Le(o.body,n),a=w0("underline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Ie({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:a},{type:"kern",size:3*s},{type:"elem",elem:r}]});return Q(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new te("mo",[new ft("‾")]);r.setAttribute("stretchy","true");var a=new te("munder",[Ve(o.body,n),r]);return a.setAttribute("accentunder","true"),a}});ue({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Le(o.body,n),a=n.fontMetrics().axisHeight,s=.5*(r.height-a-(r.depth+a));return Ie({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new te("mpadded",[Ve(o.body,n)],["vcenter"])}});ue({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new ee("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=_d(o),a=[],s=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var f=r[u];f==="~"&&(f="\\textasciitilde"),a.push(At(f,"Typewriter-Regular",o.mode,s,["mord","texttt"]))}return Q(["mord","text"].concat(s.sizingClasses(n)),Vd(a),s)},mathmlBuilder(o,n){var r=new ft(_d(o)),a=new te("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var _d=o=>o.body.replace(/ /g,o.star?"␣":" "),gr=Qd,C4=`[ \r
	]`,q7="\\\\[a-zA-Z@]+",P7="\\\\[^\uD800-\uDFFF]",D7="("+q7+")"+C4+"*",R7=`\\\\(
|[ \r	]+
?)[ \r	]*`,Ms="[̀-ͯ]",B7=new RegExp(Ms+"+$"),N7="("+C4+"+)|"+(R7+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Ms+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Ms+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+D7)+("|"+P7+")");class zd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(N7,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Vt("EOF",new Lt(this,r,r));var a=this.tokenRegex.exec(n);if(a===null||a.index!==r)throw new ee("Unexpected character: '"+n[r]+"'",new Vt(n[r],new Lt(this,r,r+1)));var s=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[s]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Vt(s,new Lt(this,r,this.tokenRegex.lastIndex))}}class L7{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ee("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,a){if(a===void 0&&(a=!1),a){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var O7=y4;x("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});x("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});x("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});x("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});x("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});x("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");x("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var Sd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};x("\\char",function(o){var n=o.popToken(),r,a="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")a=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new ee("\\char` missing argument");a=n.text.charCodeAt(0)}else r=10;if(r){if(a=Sd[n.text],a==null||a>=r)throw new ee("Invalid base-"+r+" digit "+n.text);for(var s;(s=Sd[o.future().text])!=null&&s<r;)a*=r,a+=s,o.popToken()}return"\\@char{"+a+"}"});var Xs=(o,n,r,a)=>{var s=o.consumeArg().tokens;if(s.length!==1)throw new ee("\\newcommand's first argument must be a macro name");var u=s[0].text,f=o.isDefined(u);if(f&&!n)throw new ee("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!f&&!r)throw new ee("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var p=0;if(s=o.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var v="",w=o.expandNextToken();w.text!=="]"&&w.text!=="EOF";)v+=w.text,w=o.expandNextToken();if(!v.match(/^\s*[0-9]+\s*$/))throw new ee("Invalid number of arguments: "+v);p=parseInt(v),s=o.consumeArg().tokens}return f&&a||o.macros.set(u,{tokens:s,numArgs:p}),""};x("\\newcommand",o=>Xs(o,!1,!0,!1));x("\\renewcommand",o=>Xs(o,!0,!1,!1));x("\\providecommand",o=>Xs(o,!0,!0,!0));x("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});x("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});x("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),gr[r],Xe.math[r],Xe.text[r]),""});x("\\bgroup","{");x("\\egroup","}");x("~","\\nobreakspace");x("\\lq","`");x("\\rq","'");x("\\aa","\\r a");x("\\AA","\\r A");x("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");x("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");x("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");x("ℬ","\\mathscr{B}");x("ℰ","\\mathscr{E}");x("ℱ","\\mathscr{F}");x("ℋ","\\mathscr{H}");x("ℐ","\\mathscr{I}");x("ℒ","\\mathscr{L}");x("ℳ","\\mathscr{M}");x("ℛ","\\mathscr{R}");x("ℭ","\\mathfrak{C}");x("ℌ","\\mathfrak{H}");x("ℨ","\\mathfrak{Z}");x("\\Bbbk","\\Bbb{k}");x("·","\\cdotp");x("\\llap","\\mathllap{\\textrm{#1}}");x("\\rlap","\\mathrlap{\\textrm{#1}}");x("\\clap","\\mathclap{\\textrm{#1}}");x("\\mathstrut","\\vphantom{(}");x("\\underbar","\\underline{\\text{#1}}");x("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');x("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");x("\\ne","\\neq");x("≠","\\neq");x("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");x("∉","\\notin");x("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");x("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");x("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");x("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");x("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");x("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");x("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");x("⟂","\\perp");x("‼","\\mathclose{!\\mkern-0.8mu!}");x("∌","\\notni");x("⌜","\\ulcorner");x("⌝","\\urcorner");x("⌞","\\llcorner");x("⌟","\\lrcorner");x("©","\\copyright");x("®","\\textregistered");x("️","\\textregistered");x("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');x("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');x("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');x("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');x("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");x("⋮","\\vdots");x("\\varGamma","\\mathit{\\Gamma}");x("\\varDelta","\\mathit{\\Delta}");x("\\varTheta","\\mathit{\\Theta}");x("\\varLambda","\\mathit{\\Lambda}");x("\\varXi","\\mathit{\\Xi}");x("\\varPi","\\mathit{\\Pi}");x("\\varSigma","\\mathit{\\Sigma}");x("\\varUpsilon","\\mathit{\\Upsilon}");x("\\varPhi","\\mathit{\\Phi}");x("\\varPsi","\\mathit{\\Psi}");x("\\varOmega","\\mathit{\\Omega}");x("\\substack","\\begin{subarray}{c}#1\\end{subarray}");x("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");x("\\boxed","\\fbox{$\\displaystyle{#1}$}");x("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");x("\\implies","\\DOTSB\\;\\Longrightarrow\\;");x("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");x("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");x("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Td={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},I7=new Set(["bin","rel"]);x("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in Td?n=Td[r]:(r.slice(0,4)==="\\not"||r in Xe.math&&I7.has(Xe.math[r].group))&&(n="\\dotsb"),n});var Qs={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};x("\\dotso",function(o){var n=o.future().text;return n in Qs?"\\ldots\\,":"\\ldots"});x("\\dotsc",function(o){var n=o.future().text;return n in Qs&&n!==","?"\\ldots\\,":"\\ldots"});x("\\cdots",function(o){var n=o.future().text;return n in Qs?"\\@cdots\\,":"\\@cdots"});x("\\dotsb","\\cdots");x("\\dotsm","\\cdots");x("\\dotsi","\\!\\cdots");x("\\dotsx","\\ldots\\,");x("\\DOTSI","\\relax");x("\\DOTSB","\\relax");x("\\DOTSX","\\relax");x("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");x("\\,","\\tmspace+{3mu}{.1667em}");x("\\thinspace","\\,");x("\\>","\\mskip{4mu}");x("\\:","\\tmspace+{4mu}{.2222em}");x("\\medspace","\\:");x("\\;","\\tmspace+{5mu}{.2777em}");x("\\thickspace","\\;");x("\\!","\\tmspace-{3mu}{.1667em}");x("\\negthinspace","\\!");x("\\negmedspace","\\tmspace-{4mu}{.2222em}");x("\\negthickspace","\\tmspace-{5mu}{.277em}");x("\\enspace","\\kern.5em ");x("\\enskip","\\hskip.5em\\relax");x("\\quad","\\hskip1em\\relax");x("\\qquad","\\hskip2em\\relax");x("\\tag","\\@ifstar\\tag@literal\\tag@paren");x("\\tag@paren","\\tag@literal{({#1})}");x("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new ee("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});x("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");x("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");x("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");x("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");x("\\newline","\\\\\\relax");x("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var A4=le(bn["Main-Regular"][84][1]-.7*bn["Main-Regular"][65][1]);x("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+A4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");x("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+A4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");x("\\hspace","\\@ifstar\\@hspacer\\@hspace");x("\\@hspace","\\hskip #1\\relax");x("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");x("\\ordinarycolon",":");x("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");x("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');x("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');x("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');x("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');x("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');x("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');x("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');x("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');x("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');x("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');x("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');x("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');x("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');x("∷","\\dblcolon");x("∹","\\eqcolon");x("≔","\\coloneqq");x("≕","\\eqqcolon");x("⩴","\\Coloneqq");x("\\ratio","\\vcentcolon");x("\\coloncolon","\\dblcolon");x("\\colonequals","\\coloneqq");x("\\coloncolonequals","\\Coloneqq");x("\\equalscolon","\\eqqcolon");x("\\equalscoloncolon","\\Eqqcolon");x("\\colonminus","\\coloneq");x("\\coloncolonminus","\\Coloneq");x("\\minuscolon","\\eqcolon");x("\\minuscoloncolon","\\Eqcolon");x("\\coloncolonapprox","\\Colonapprox");x("\\coloncolonsim","\\Colonsim");x("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");x("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");x("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");x("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");x("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");x("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");x("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");x("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");x("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");x("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");x("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");x("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");x("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");x("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");x("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");x("\\nleqq","\\html@mathml{\\@nleqq}{≰}");x("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");x("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");x("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");x("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");x("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");x("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");x("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");x("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");x("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");x("\\imath","\\html@mathml{\\@imath}{ı}");x("\\jmath","\\html@mathml{\\@jmath}{ȷ}");x("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");x("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");x("⟦","\\llbracket");x("⟧","\\rrbracket");x("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");x("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");x("⦃","\\lBrace");x("⦄","\\rBrace");x("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");x("⦵","\\minuso");x("\\darr","\\downarrow");x("\\dArr","\\Downarrow");x("\\Darr","\\Downarrow");x("\\lang","\\langle");x("\\rang","\\rangle");x("\\uarr","\\uparrow");x("\\uArr","\\Uparrow");x("\\Uarr","\\Uparrow");x("\\N","\\mathbb{N}");x("\\R","\\mathbb{R}");x("\\Z","\\mathbb{Z}");x("\\alef","\\aleph");x("\\alefsym","\\aleph");x("\\Alpha","\\mathrm{A}");x("\\Beta","\\mathrm{B}");x("\\bull","\\bullet");x("\\Chi","\\mathrm{X}");x("\\clubs","\\clubsuit");x("\\cnums","\\mathbb{C}");x("\\Complex","\\mathbb{C}");x("\\Dagger","\\ddagger");x("\\diamonds","\\diamondsuit");x("\\empty","\\emptyset");x("\\Epsilon","\\mathrm{E}");x("\\Eta","\\mathrm{H}");x("\\exist","\\exists");x("\\harr","\\leftrightarrow");x("\\hArr","\\Leftrightarrow");x("\\Harr","\\Leftrightarrow");x("\\hearts","\\heartsuit");x("\\image","\\Im");x("\\infin","\\infty");x("\\Iota","\\mathrm{I}");x("\\isin","\\in");x("\\Kappa","\\mathrm{K}");x("\\larr","\\leftarrow");x("\\lArr","\\Leftarrow");x("\\Larr","\\Leftarrow");x("\\lrarr","\\leftrightarrow");x("\\lrArr","\\Leftrightarrow");x("\\Lrarr","\\Leftrightarrow");x("\\Mu","\\mathrm{M}");x("\\natnums","\\mathbb{N}");x("\\Nu","\\mathrm{N}");x("\\Omicron","\\mathrm{O}");x("\\plusmn","\\pm");x("\\rarr","\\rightarrow");x("\\rArr","\\Rightarrow");x("\\Rarr","\\Rightarrow");x("\\real","\\Re");x("\\reals","\\mathbb{R}");x("\\Reals","\\mathbb{R}");x("\\Rho","\\mathrm{P}");x("\\sdot","\\cdot");x("\\sect","\\S");x("\\spades","\\spadesuit");x("\\sub","\\subset");x("\\sube","\\subseteq");x("\\supe","\\supseteq");x("\\Tau","\\mathrm{T}");x("\\thetasym","\\vartheta");x("\\weierp","\\wp");x("\\Zeta","\\mathrm{Z}");x("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");x("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");x("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");x("\\bra","\\mathinner{\\langle{#1}|}");x("\\ket","\\mathinner{|{#1}\\rangle}");x("\\braket","\\mathinner{\\langle{#1}\\rangle}");x("\\Bra","\\left\\langle#1\\right|");x("\\Ket","\\left|#1\\right\\rangle");var j4=o=>n=>{var r=n.consumeArg().tokens,a=n.consumeArg().tokens,s=n.consumeArg().tokens,u=n.consumeArg().tokens,f=n.macros.get("|"),p=n.macros.get("\\|");n.macros.beginGroup();var v=b=>M=>{o&&(M.macros.set("|",f),s.length&&M.macros.set("\\|",p));var T=b;if(!b&&s.length){var P=M.future();P.text==="|"&&(M.popToken(),T=!0)}return{tokens:T?s:a,numArgs:0}};n.macros.set("|",v(!1)),s.length&&n.macros.set("\\|",v(!0));var w=n.consumeArg().tokens,$=n.expandTokens([...u,...w,...r]);return n.macros.endGroup(),{tokens:$.reverse(),numArgs:0}};x("\\bra@ket",j4(!1));x("\\bra@set",j4(!0));x("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");x("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");x("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");x("\\angln","{\\angl n}");x("\\blue","\\textcolor{##6495ed}{#1}");x("\\orange","\\textcolor{##ffa500}{#1}");x("\\pink","\\textcolor{##ff00af}{#1}");x("\\red","\\textcolor{##df0030}{#1}");x("\\green","\\textcolor{##28ae7b}{#1}");x("\\gray","\\textcolor{gray}{#1}");x("\\purple","\\textcolor{##9d38bd}{#1}");x("\\blueA","\\textcolor{##ccfaff}{#1}");x("\\blueB","\\textcolor{##80f6ff}{#1}");x("\\blueC","\\textcolor{##63d9ea}{#1}");x("\\blueD","\\textcolor{##11accd}{#1}");x("\\blueE","\\textcolor{##0c7f99}{#1}");x("\\tealA","\\textcolor{##94fff5}{#1}");x("\\tealB","\\textcolor{##26edd5}{#1}");x("\\tealC","\\textcolor{##01d1c1}{#1}");x("\\tealD","\\textcolor{##01a995}{#1}");x("\\tealE","\\textcolor{##208170}{#1}");x("\\greenA","\\textcolor{##b6ffb0}{#1}");x("\\greenB","\\textcolor{##8af281}{#1}");x("\\greenC","\\textcolor{##74cf70}{#1}");x("\\greenD","\\textcolor{##1fab54}{#1}");x("\\greenE","\\textcolor{##0d923f}{#1}");x("\\goldA","\\textcolor{##ffd0a9}{#1}");x("\\goldB","\\textcolor{##ffbb71}{#1}");x("\\goldC","\\textcolor{##ff9c39}{#1}");x("\\goldD","\\textcolor{##e07d10}{#1}");x("\\goldE","\\textcolor{##a75a05}{#1}");x("\\redA","\\textcolor{##fca9a9}{#1}");x("\\redB","\\textcolor{##ff8482}{#1}");x("\\redC","\\textcolor{##f9685d}{#1}");x("\\redD","\\textcolor{##e84d39}{#1}");x("\\redE","\\textcolor{##bc2612}{#1}");x("\\maroonA","\\textcolor{##ffbde0}{#1}");x("\\maroonB","\\textcolor{##ff92c6}{#1}");x("\\maroonC","\\textcolor{##ed5fa6}{#1}");x("\\maroonD","\\textcolor{##ca337c}{#1}");x("\\maroonE","\\textcolor{##9e034e}{#1}");x("\\purpleA","\\textcolor{##ddd7ff}{#1}");x("\\purpleB","\\textcolor{##c6b9fc}{#1}");x("\\purpleC","\\textcolor{##aa87ff}{#1}");x("\\purpleD","\\textcolor{##7854ab}{#1}");x("\\purpleE","\\textcolor{##543b78}{#1}");x("\\mintA","\\textcolor{##f5f9e8}{#1}");x("\\mintB","\\textcolor{##edf2df}{#1}");x("\\mintC","\\textcolor{##e0e5cc}{#1}");x("\\grayA","\\textcolor{##f6f7f7}{#1}");x("\\grayB","\\textcolor{##f0f1f2}{#1}");x("\\grayC","\\textcolor{##e3e5e6}{#1}");x("\\grayD","\\textcolor{##d6d8da}{#1}");x("\\grayE","\\textcolor{##babec2}{#1}");x("\\grayF","\\textcolor{##888d93}{#1}");x("\\grayG","\\textcolor{##626569}{#1}");x("\\grayH","\\textcolor{##3b3e40}{#1}");x("\\grayI","\\textcolor{##21242c}{#1}");x("\\kaBlue","\\textcolor{##314453}{#1}");x("\\kaGreen","\\textcolor{##71B307}{#1}");var E4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class F7{constructor(n,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new L7(O7,r.macros),this.mode=a,this.stack=[]}feed(n){this.lexer=new zd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,a,s;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:a}=this.consumeArg(["]"])}else({tokens:s,start:r,end:a}=this.consumeArg());return this.pushToken(new Vt("EOF",a.loc)),this.pushTokens(s),new Vt("",Lt.range(r,a))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],a=n&&n.length>0;a||this.consumeSpaces();var s=this.future(),u,f=0,p=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++f;else if(u.text==="}"){if(--f,f===-1)throw new ee("Extra }",u)}else if(u.text==="EOF")throw new ee("Unexpected end of input in a macro argument, expected '"+(n&&a?n[p]:"}")+"'",u);if(n&&a)if((f===0||f===1&&n[p]==="{")&&u.text===n[p]){if(++p,p===n.length){r.splice(-p,p);break}}else p=0}while(f!==0||a);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new ee("The length of delimiters doesn't match the number of args!");for(var a=r[0],s=0;s<a.length;s++){var u=this.popToken();if(a[s]!==u.text)throw new ee("Use of the macro doesn't match its definition",u)}}for(var f=[],p=0;p<n;p++)f.push(this.consumeArg(r&&r[p+1]).tokens);return f}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new ee("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),a=r.text,s=r.noexpand?null:this._getExpansion(a);if(s==null||n&&s.unexpandable){if(n&&s==null&&a[0]==="\\"&&!this.isDefined(a))throw new ee("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var u=s.tokens,f=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){u=u.slice();for(var p=u.length-1;p>=0;--p){var v=u[p];if(v.text==="#"){if(p===0)throw new ee("Incomplete placeholder at end of macro body",v);if(v=u[--p],v.text==="#")u.splice(p+1,1);else if(/^[1-9]$/.test(v.text))u.splice(p,2,...f[+v.text-1]);else throw new ee("Not a valid argument number",v)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Vt(n)]):void 0}expandTokens(n){var r=[],a=this.stack.length;for(this.pushTokens(n);this.stack.length>a;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(a=>a.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var a=this.lexer.catcodes[n];if(a!=null&&a!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var u=0;if(s.includes("#"))for(var f=s.replace(/##/g,"");f.includes("#"+(u+1));)++u;for(var p=new zd(s,this.settings),v=[],w=p.lex();w.text!=="EOF";)v.push(w),w=p.lex();v.reverse();var $={tokens:v,numArgs:u};return $}return s}isDefined(n){return this.macros.has(n)||gr.hasOwnProperty(n)||Xe.math.hasOwnProperty(n)||Xe.text.hasOwnProperty(n)||E4.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:gr.hasOwnProperty(n)&&!gr[n].primitive}}var Md=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Wo=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),gs={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Cd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class ca{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new F7(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new ee("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Vt("}")),this.gullet.pushTokens(n);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(n,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(ca.endOfExpression.has(s.text)||r&&s.text===r||n&&gr[s.text]&&gr[s.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;a.push(u)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(n){for(var r=-1,a,s=0;s<n.length;s++)if(n[s].type==="infix"){if(r!==-1)throw new ee("only one infix operator per group",n[s].token);r=s,a=n[s].replaceWith}if(r!==-1&&a){var u,f,p=n.slice(0,r),v=n.slice(r+1);p.length===1&&p[0].type==="ordgroup"?u=p[0]:u={type:"ordgroup",mode:this.mode,body:p},v.length===1&&v[0].type==="ordgroup"?f=v[0]:f={type:"ordgroup",mode:this.mode,body:v};var w;return a==="\\\\abovefrac"?w=this.callFunction(a,[u,n[r],f],[]):w=this.callFunction(a,[u,f],[]),[w]}else return n}handleSupSubscript(n){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var s;do{var u;s=this.parseGroup(n)}while(((u=s)==null?void 0:u.type)==="internal");if(!s)throw new ee("Expected group after '"+a+"'",r);return s}formatUnsupportedCmd(n){for(var r=[],a=0;a<n.length;a++)r.push({type:"textord",mode:"text",text:n[a]});var s={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,s;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var f=u.text==="\\limits";r.limits=f,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new ee("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(a)throw new ee("Double superscript",u);a=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(s)throw new ee("Double subscript",u);s=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(a)throw new ee("Double superscript",u);var p={type:"textord",mode:this.mode,text:"\\prime"},v=[p];for(this.consume();this.fetch().text==="'";)v.push(p),this.consume();this.fetch().text==="^"&&v.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:v}}else if(Wo[u.text]){var w=Md.test(u.text),$=[];for($.push(new Vt(Wo[u.text])),this.consume();;){var b=this.fetch().text;if(!Wo[b]||Md.test(b)!==w)break;$.unshift(new Vt(Wo[b])),this.consume()}var M=this.subparse($);w?s={type:"ordgroup",mode:"math",body:M}:a={type:"ordgroup",mode:"math",body:M}}else break}return a||s?{type:"supsub",mode:this.mode,base:r,sup:a,sub:s}:r}parseFunction(n,r){var a=this.fetch(),s=a.text,u=gr[s];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new ee("Got function '"+s+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!u.allowedInText)throw new ee("Can't use function '"+s+"' in text mode",a);if(this.mode==="math"&&u.allowedInMath===!1)throw new ee("Can't use function '"+s+"' in math mode",a);var{args:f,optArgs:p}=this.parseArguments(s,u);return this.callFunction(s,f,p,a,n)}callFunction(n,r,a,s,u){var f={funcName:n,parser:this,token:s,breakOnTokenText:u},p=gr[n];if(p&&p.handler)return p.handler(f,r,a);throw new ee("No function handler for "+n)}parseArguments(n,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var s=[],u=[],f=0;f<a;f++){var p=r.argTypes&&r.argTypes[f],v=f<r.numOptionalArgs;(r.primitive&&p==null||r.type==="sqrt"&&f===1&&u[0]==null)&&(p="primitive");var w=this.parseGroupOfType("argument to '"+n+"'",p,v);if(v)u.push(w);else if(w!=null)s.push(w);else throw new ee("Null argument, please report this as a bug")}return{args:s,optArgs:u}}parseGroupOfType(n,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var s=this.parseArgumentGroup(a,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",a);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(a)throw new ee("A primitive argument cannot be optional");var f=this.parseGroup(n);if(f==null)throw new ee("Expected group as "+n,this.fetch());return f}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new ee("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var s="",u;(u=this.fetch()).text!=="EOF";)s+=u.text,this.consume();return this.consume(),a.text=s,a}parseRegexGroup(n,r){for(var a=this.fetch(),s=a,u="",f;(f=this.fetch()).text!=="EOF"&&n.test(u+f.text);)s=f,u+=s.text,this.consume();if(u==="")throw new ee("Invalid "+r+": '"+a.text+"'",a);return a.range(s,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new ee("Invalid color: '"+r.text+"'",r);var s=a[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(n){var r,a=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",a=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new ee("Invalid size: '"+r.text+"'",r);var u={number:+(s[1]+s[2]),unit:s[3]};if(!Id(u))throw new ee("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:a}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(n,r){var a=this.gullet.scanArgument(n);if(a==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var f={type:"ordgroup",mode:this.mode,loc:a.loc,body:u};return r&&this.switchMode(s),f}parseGroup(n,r){var a=this.fetch(),s=a.text,u;if(s==="{"||s==="\\begingroup"){this.consume();var f=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var p=this.parseExpression(!1,f),v=this.fetch();this.expect(f),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Lt.range(a,v),body:p,semisimple:s==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&s[0]==="\\"&&!E4.hasOwnProperty(s)){if(this.settings.throwOnError)throw new ee("Undefined control sequence: "+s,a);u=this.formatUnsupportedCmd(s),this.consume()}return u}formLigatures(n){for(var r=n.length-1,a=0;a<r;++a){var s=n[a],u=s.text;u==="-"&&n[a+1].text==="-"&&(a+1<r&&n[a+2].text==="-"?(n.splice(a,3,{type:"textord",mode:"text",loc:Lt.range(s,n[a+2]),text:"---"}),r-=2):(n.splice(a,2,{type:"textord",mode:"text",loc:Lt.range(s,n[a+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[a+1].text===u&&(n.splice(a,2,{type:"textord",mode:"text",loc:Lt.range(s,n[a+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),s=a.charAt(0)==="*";if(s&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new ee(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:s}}Cd.hasOwnProperty(r[0])&&!Xe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Cd[r[0]]+r.slice(1));var u=B7.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var f;if(Xe[this.mode][r]){this.settings.strict&&this.mode==="math"&&bs.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var p=Xe[this.mode][r].group,v=Lt.range(n),w;if(N6.hasOwnProperty(p)){var $=p;w={type:"atom",mode:this.mode,family:$,loc:v,text:r}}else w={type:p,mode:this.mode,loc:v,text:r};f=w}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Od(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),f={type:"textord",mode:"text",loc:Lt.range(n),text:r};else return null;if(this.consume(),u)for(var b=0;b<u[0].length;b++){var M=u[0][b];if(!gs[M])throw new ee("Unknown accent ' "+M+"'",n);var T=gs[M][this.mode]||gs[M].text;if(!T)throw new ee("Accent "+M+" unsupported in "+this.mode+" mode",n);f={type:"accent",mode:this.mode,loc:Lt.range(n),label:T,isStretchy:!1,isShifty:!0,base:f}}return f}}ca.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Ks=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new ca(n,r);delete a.gullet.macros.current["\\df@tag"];var s=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ee("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:a.subparse([new Vt("\\df@tag")])}]}return s},q4=function(n,r,a){r.textContent="";var s=Zs(n,a).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),q4=function(){throw new ee("KaTeX doesn't work in quirks mode.")});var H7=function(n,r){var a=Zs(n,r).toMarkup();return a},W7=function(n,r){var a=new Ps(r);return Ks(n,a)},P4=function(n,r,a){if(a.throwOnError||!(n instanceof ee))throw n;var s=Q(["katex-error"],[new rn(r)]);return s.setAttribute("title",n.toString()),s.setAttribute("style","color:"+a.errorColor),s},Zs=function(n,r){var a=new Ps(r);try{var s=Ks(n,a);return e7(s,n,a)}catch(u){return P4(u,n,a)}},U7=function(n,r){var a=new Ps(r);try{var s=Ks(n,a);return t7(s,n,a)}catch(u){return P4(u,n,a)}},V7="0.16.33",G7={Span:ki,Anchor:Bs,SymbolNode:rn,SvgNode:On,PathNode:xr,LineNode:ws},Ad={version:V7,render:q4,renderToString:H7,ParseError:ee,SETTINGS_SCHEMA:Uo,__parse:W7,__renderToDomTree:Zs,__renderToHTMLTree:U7,__setFontMetrics:A6,__defineSymbol:d,__defineFunction:ue,__defineMacro:x,__domTree:G7};function Y7(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,a)=>{try{return Ad.renderToString(a.trim(),{displayMode:!0,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,a)=>{try{return Ad.renderToString(a.trim(),{displayMode:!1,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}}),n}function X7({nodeId:o,nodes:n,onAnswer:r,onSkip:a,lang:s,excludeIndices:u=[]}){const f=n.find(I=>I.id===o),p=ie.useMemo(()=>b5(o,u),[o,u]),v=$0[f==null?void 0:f.scope]||"#4a9eff",w=f?s==="pl"?f.labelPl:f.label:o,[$,b]=ie.useState(null),[M,T]=ie.useState(!1),P=()=>{$!==null&&T(!0)},R=()=>{r($===p.correct,p,p.index),b(null),T(!1)},q=I=>z.jsx("span",{dangerouslySetInnerHTML:{__html:Y7(I)}});return p?z.jsxs("div",{style:G1(v),children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8},children:[z.jsx("div",{style:{color:v,fontWeight:700,fontSize:12},children:w}),z.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#3a4d63",cursor:"pointer",fontSize:16,lineHeight:1},children:"×"})]}),z.jsx("div",{style:{fontSize:11,color:"#c8d6e5",marginBottom:12,lineHeight:1.6},children:q(p.q)}),z.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:p.options.map((I,W)=>{let N="#0d1520",L="#1e2d45",U="#c8d6e5";return $===W&&!M&&(N=`${v}22`,L=v,U=v),M&&(W===p.correct?(N="#27ae6022",L="#27ae60",U="#2ecc71"):W===$&&(N="#e74c3c22",L="#e74c3c",U="#ff6b6b")),z.jsxs("button",{onClick:()=>{M||b(W)},style:{textAlign:"left",padding:"7px 10px",borderRadius:5,fontSize:10,cursor:M?"default":"pointer",background:N,border:`1px solid ${L}`,color:U,lineHeight:1.4},children:[z.jsxs("span",{style:{marginRight:8,opacity:.5},children:[["A","B","C","D"][W],"."]}),q(I)]},W)})}),M&&p.hint&&z.jsx("div",{style:{fontSize:10,color:"#8a9dbe",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,lineHeight:1.5},children:q(p.hint)}),M?z.jsx("div",{style:{display:"flex",gap:8},children:z.jsx("button",{onClick:R,style:{...pi($===p.correct?"#27ae60":"#e74c3c"),flex:1},children:$===p.correct?ae("knownConfirm",s):ae("unknownConfirm",s)})}):z.jsx("button",{onClick:P,disabled:$===null,style:{...pi(v),width:"100%",opacity:$===null?.4:1},children:ae("checkAnswer",s)})]}):z.jsxs("div",{style:G1(v),children:[z.jsx("div",{style:{color:v,fontWeight:700,marginBottom:8},children:w}),z.jsx("div",{style:{color:"#6b7d9a",fontSize:11,marginBottom:12},children:ae("noQuestion",s)}),z.jsxs("div",{style:{display:"flex",gap:8},children:[z.jsx("button",{onClick:()=>r(!0,null),style:pi("#27ae60"),children:ae("yesKnow",s)}),z.jsx("button",{onClick:()=>r(!1,null),style:pi("#e74c3c"),children:ae("noKnow",s)}),z.jsx("button",{onClick:a,style:pi("#3a4d63"),children:ae("skipBtn",s)})]})]})}function Q7({belief:o,frontier:n,visibleFrontier:r,hasStarted:a,nextSuggestedId:s,sessionComplete:u,adjacency:f,expectedRemaining:p,pCorrect:v,questionsAnswered:w,nodes:$,lang:b,onReset:M,onNodeClick:T}){var U,K;const P=Object.fromEntries($.map(H=>[H.id,H])),R=H=>{var Z,V;return b==="pl"?(Z=P[H])==null?void 0:Z.labelPl:(V=P[H])==null?void 0:V.label},q=dt.filter(H=>o[H.id]==="known"),I=dt.filter(H=>o[H.id]==="unknown"),W=dt.length,N=[{label:ae("statKnown",b),count:q.length,color:"#27ae60"},{label:ae("statUnknown",b),count:I.length,color:"#e74c3c"},{label:ae("statRemaining",b),count:p??"-",color:"#4a9eff"}],L=v?Math.round(v*100):50;return z.jsxs("div",{style:{position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[z.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:10,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("span",{children:[ae("diagHeader",b)," ",u?"✓":""]}),z.jsx("button",{onClick:M,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:ae("reset",b)})]}),z.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:N.map(({label:H,count:Z,color:V})=>z.jsxs("div",{style:{flex:1,textAlign:"center",background:`${V}18`,borderRadius:5,padding:"5px 0",border:`1px solid ${V}40`},children:[z.jsx("div",{style:{color:V,fontWeight:700,fontSize:15},children:Z}),z.jsx("div",{style:{color:"#6b7d9a",fontSize:8},children:H})]},H))}),!u&&a&&z.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between"},children:[z.jsxs("span",{children:[ae("answered",b),": ",z.jsx("span",{style:{color:"#f5f6fa"},children:w})]}),z.jsxs("span",{children:[ae("estimated",b),": ",z.jsxs("span",{style:{color:"#4a9eff"},children:["~",p??"-"]})]}),z.jsxs("span",{children:[ae("accuracy",b),": ",z.jsxs("span",{style:{color:"#4a9eff"},children:[L,"%"]})]})]}),u&&z.jsxs("div",{children:[z.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[z.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:12,marginBottom:4},children:ae("sessionDone",b)}),z.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[ae("sessionDoneSub",b)," ",z.jsx("span",{style:{color:"#f5f6fa"},children:w})," ",ae("sessionDoneQ",b),"."," ",ae("sessionDoneClass",b)," ",q.length+I.length,"/",W,".",z.jsx("br",{}),ae("sessionDoneAcc",b),": ",z.jsxs("span",{style:{color:"#4a9eff"},children:[L,"%"]}),"."," ",ae("sessionDoneKnown",b)," ",z.jsx("span",{style:{color:"#2ecc71"},children:q.length}),","," ",ae("sessionDoneStudy",b)," ",z.jsx("span",{style:{color:"#e74c3c"},children:I.length}),"."]})]}),I.length>0&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:[ae("toStudy",b)," (",I.length,")"]}),dt.filter(H=>o[H.id]==="unknown").filter(H=>(f.prereqs[H.id]??[]).every(Z=>o[Z]==="known")).slice(0,8).map(H=>{var Z,V;return z.jsxs("div",{style:{padding:"5px 8px",marginBottom:3,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:9,color:"#ff8a8a",lineHeight:1.4},children:[R(H.id),z.jsx("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:(V=g0[(Z=P[H.id])==null?void 0:Z.scope])==null?void 0:V[b==="pl"?"pl":"en"]})]},H.id)})]}),q.length>0&&z.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:9},children:["✓ ",ae("knownList",b)," ",q.length]})]}),!u&&!a&&z.jsxs("div",{style:{marginBottom:10},children:[s&&z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:5},children:ae("startHere",b)}),z.jsx(K7,{id:s,label:R(s),scope:(K=g0[(U=P[s])==null?void 0:U.scope])==null?void 0:K[b==="pl"?"pl":"en"],subtitle:ae("startHereSub",b),onClick:()=>T==null?void 0:T(s)})]}),z.jsx("div",{style:{fontSize:9,color:"#3a4d63",marginTop:8,lineHeight:1.5},children:ae("clickAnyNode",b)})]}),!u&&a&&r.length>0&&z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:5},children:ae("whatNext",b)}),r.map(H=>{var V,ye;const Z=H===s;return z.jsxs("div",{onClick:()=>T==null?void 0:T(H),style:{padding:"6px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:Z?"#4a9eff18":"#f39c1215",border:`1px solid ${Z?"#4a9eff55":"#f39c1240"}`,fontSize:10,color:Z?"#a8d4ff":"#f5d78e",transition:"background 0.15s"},onMouseEnter:ze=>ze.currentTarget.style.background=Z?"#4a9eff30":"#f39c1230",onMouseLeave:ze=>ze.currentTarget.style.background=Z?"#4a9eff18":"#f39c1215",children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("span",{children:R(H)}),z.jsx("span",{style:{fontSize:9,opacity:.7},children:Z?"★":"→"})]}),z.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:1},children:[(ye=g0[(V=P[H])==null?void 0:V.scope])==null?void 0:ye[b==="pl"?"pl":"en"],Z&&z.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:ae("best",b)})]})]},H)})]}),!u&&q.length>0&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",ae("knownList",b)," (",q.length,")"]}),q.map(H=>z.jsx("div",{style:{fontSize:9,color:"#6dbb87",paddingLeft:4,lineHeight:1.7},children:R(H.id)},H.id))]}),!u&&z.jsxs("div",{style:{marginTop:12,color:"#3a4d63",fontSize:9,lineHeight:1.5},children:[ae("hintClick",b),z.jsx("br",{}),ae("hintShift",b),z.jsx("br",{}),ae("hintGreen",b)]})]})}function K7({id:o,label:n,scope:r,subtitle:a,onClick:s}){return z.jsxs("div",{onClick:s,style:{padding:"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff",transition:"background 0.15s"},onMouseEnter:u=>u.currentTarget.style.background="#4a9eff30",onMouseLeave:u=>u.currentTarget.style.background="#4a9eff18",children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[z.jsx("span",{style:{fontWeight:600},children:n}),z.jsx("span",{style:{opacity:.5},children:"→"})]}),z.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[r,a?` · ${a}`:""]})]})}function Z7({nodes:o,lang:n,targetNode:r,subgraphIds:a,ddClassification:s,betaBeliefs:u,ddComplete:f,ddNextNodeId:p,questionsAnswered:v,onNodeClick:w,onReset:$}){const b=Object.fromEntries(o.map(L=>[L.id,L])),M=L=>{var U,K;return n==="pl"?(U=b[L])==null?void 0:U.labelPl:(K=b[L])==null?void 0:K.label},T=a.filter(L=>s[L]==="known"),P=a.filter(L=>s[L]==="unknown"),R=a.filter(L=>s[L]==="uncertain"),q=a.length,I=T.length+P.length,W=q>0?Math.round(I/q*100):0,N=M(r);return z.jsxs("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:[z.jsxs("div",{style:{fontWeight:700,fontSize:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsxs("span",{children:[ae("deepDiveHeader",n)," ",f?"✓":""]}),z.jsx("button",{onClick:$,style:{fontSize:9,padding:"2px 7px",borderRadius:4,cursor:"pointer",background:"transparent",border:"1px solid #3a4d63",color:"#6b7d9a"},children:ae("reset",n)})]}),z.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[z.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:ae("deepDiveTarget",n)}),z.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:N}),z.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[q," ",ae("deepDiveNodes",n)]})]}),z.jsxs("div",{style:{marginBottom:10},children:[z.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:z.jsx("div",{style:{height:"100%",borderRadius:3,width:`${W}%`,background:f?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[z.jsxs("span",{children:[ae("classified",n),": ",z.jsxs("span",{style:{color:"#f5f6fa"},children:[I,"/",q]})]}),z.jsxs("span",{children:[ae("questions",n),": ",z.jsx("span",{style:{color:"#f5f6fa"},children:v})]})]})]}),f&&z.jsxs("div",{children:[z.jsxs("div",{style:{background:T.length>P.length?"#27ae6018":"#e74c3c18",border:`1px solid ${T.length>P.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[z.jsx("div",{style:{color:T.length>P.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:ae("diagReady",n)}),z.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[ae("diagKnown",n),": ",z.jsx("span",{style:{color:"#2ecc71"},children:T.length})," / ",ae("diagStudy",n),": ",z.jsx("span",{style:{color:"#ff6b6b"},children:P.length})," / ",ae("diagTotal",n),": ",q]})]}),P.length>0&&z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:ae("studyThese",n)}),a.filter(L=>s[L]==="unknown").slice(0,8).map(L=>{var U;return z.jsx(jd,{id:L,label:M(L),scope:(U=b[L])==null?void 0:U.scope,classification:"unknown",beta:u[L]},L)})]}),T.length>0&&z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:ae("mastered",n)}),a.filter(L=>s[L]==="known").map(L=>{var U;return z.jsx(jd,{id:L,label:M(L),scope:(U=b[L])==null?void 0:U.scope,classification:"known",beta:u[L]},L)})]})]}),!f&&z.jsxs(z.Fragment,{children:[p&&z.jsxs("div",{style:{marginBottom:10},children:[z.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:ae("nextQuestion",n)}),z.jsxs("div",{onClick:()=>w==null?void 0:w(p),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[M(p),z.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[ae("confidence",n),": ",J7(u[p])]})]})]}),R.length>0&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[ae("unclassified",n)," (",R.length,")"]}),R.map(L=>z.jsxs("div",{onClick:()=>w==null?void 0:w(L),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:L===p?"#4a9eff18":"#f39c1212",border:`1px solid ${L===p?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:L===p?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("span",{children:M(L)}),z.jsx(D4,{beta:u[L]})]},L))]})]})]})}function J7(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function D4({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,a=Math.min(1,(r-2)/4),s=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return z.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:z.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:s,opacity:.4+a*.6,transition:"width 0.3s ease"}})})}function jd({id:o,label:n,scope:r,classification:a,beta:s}){const u=a==="known"?"#27ae60":"#e74c3c";return z.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:a==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("span",{children:n}),z.jsx(D4,{beta:s})]})}function e8({filterScope:o,toggleScope:n,clearScope:r,filterSection:a,toggleSection:s,clearSection:u,searchTerm:f,setSearchTerm:p,lang:v,setLang:w}){return z.jsxs("div",{style:{padding:"6px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",flexShrink:0},children:[z.jsx("input",{value:f,onChange:$=>p($.target.value),placeholder:ae("search",v),style:{background:"#0d1520",border:"1px solid #1e2d45",borderRadius:4,color:"#c8d6e5",padding:"3px 8px",fontSize:11,width:120,outline:"none"}}),z.jsx("span",{style:{color:"#1e2d45",fontSize:10},children:"|"}),z.jsx("span",{style:{fontSize:9,color:"#3a4d63"},children:ae("filterSection",v)}),z.jsx("button",{style:mi(a.size===0,"#c8d6e5"),onClick:u,children:ae("all",v)}),Object.entries(ea).map(([$,b])=>z.jsx("button",{style:mi(a.has($),b.color),onClick:()=>s($),children:b.label},$)),z.jsx("span",{style:{color:"#1e2d45",fontSize:10},children:"|"}),z.jsx("span",{style:{fontSize:9,color:"#3a4d63"},children:ae("filterScope",v)}),z.jsx("button",{style:mi(o.size===0,"#c8d6e5"),onClick:r,children:ae("all",v)}),Object.entries($0).map(([$,b])=>{var M;return z.jsx("button",{style:mi(o.has($),b),onClick:()=>n($),children:(M=g0[$])==null?void 0:M[v==="pl"?"pl":"en"]},$)}),z.jsx("span",{style:{color:"#1e2d45",fontSize:10},children:"|"}),z.jsx("button",{style:mi(!0,v==="pl"?"#f5a623":"#4a9eff"),onClick:()=>w($=>$==="pl"?"en":"pl"),title:v==="pl"?"Switch to English":"Przełącz na polski",children:v==="pl"?"PL":"EN"})]})}function t8({lang:o,diagMode:n}){const[r,a]=ie.useState(!1),s=Object.entries($0).map(([u,f])=>{var p;return{color:f,label:(p=g0[u])==null?void 0:p[o==="pl"?"pl":"en"]}});return z.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152095",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[z.jsxs("button",{onClick:()=>a(u=>!u),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[z.jsx("span",{style:{opacity:.6},children:r?"▼":"▶"}),ae("legendTitle",o)]}),r&&z.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&z.jsxs("div",{style:{marginBottom:8},children:[[{color:Hr.knownHi,label:ae("legendKnown",o)},{color:Hr.unknownHi,label:ae("legendUnknown",o)},{color:Hr.frontier,label:ae("legendFrontier",o)},{color:"#4a5568",label:ae("legendUnclassified",o)}].map(({color:u,label:f})=>z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[z.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:u,flexShrink:0}}),z.jsx("span",{style:{color:"#8a9dbe"},children:f})]},f)),z.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),z.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:ae("legendScopes",o)}),s.map(({color:u,label:f})=>z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[z.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:u,flexShrink:0}}),z.jsx("span",{style:{color:"#8a9dbe"},children:f})]},f)),z.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[z.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:ae("legendStages",o)}),Object.entries(ea).map(([u,f])=>z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[z.jsx("div",{style:{width:8,height:3,borderRadius:1,background:f.color,flexShrink:0}}),z.jsx("span",{style:{color:"#8a9dbe"},children:f.label})]},u))]})]})]})}function n8({nodes:o,lang:n,onSelect:r,onClose:a}){const[s,u]=ie.useState(""),[f,p]=ie.useState(-1),v=ie.useRef([]),w=ie.useRef(null),$=ie.useMemo(()=>{const q=s.toLowerCase();return o.filter(I=>!q||I.label.toLowerCase().includes(q)||I.labelPl.toLowerCase().includes(q))},[o,s]),b=ie.useMemo(()=>{const q=[],I=["SP8","LP","LR","UNIV"],W={};for(const N of I)W[N]=[];for(const N of $){const L=N.section??"LP";W[L]||(W[L]=[]),W[L].push(N)}for(const N of I)if(W[N])for(const L of W[N])q.push(L);return q},[$]),M=["SP8","LP","LR","UNIV"],T=ie.useMemo(()=>{const q={};for(const I of M)q[I]=[];for(const I of $){const W=I.section??"LP";q[W]||(q[W]=[]),q[W].push(I)}return q},[$]),P=q=>n==="pl"?q.labelPl:q.label;ie.useEffect(()=>{const q=I=>{if(I.key==="Escape"){a();return}I.key==="ArrowDown"&&(I.preventDefault(),p(W=>Math.min(W+1,b.length-1))),I.key==="ArrowUp"&&(I.preventDefault(),p(W=>Math.max(W-1,0))),I.key==="Enter"&&f>=0&&b[f]&&(I.preventDefault(),r(b[f].id))};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[b,f,a,r]),ie.useEffect(()=>{f>=0&&v.current[f]&&v.current[f].scrollIntoView({block:"nearest"})},[f]),ie.useEffect(()=>{p(-1)},[s]);const R={title:"Wybierz cel",subtitle:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",searchPlaceholder:"Szukaj tematu...",noResults:"Brak wyników",footer:`${$.length} / ${o.length} tematów`,cancel:"Anuluj"};return z.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:q=>{q.target===q.currentTarget&&a()},children:z.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[z.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[z.jsxs("div",{children:[z.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:R.title}),z.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:R.subtitle})]}),z.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),z.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:z.jsx("input",{ref:w,autoFocus:!0,value:s,onChange:q=>u(q.target.value),placeholder:R.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),z.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[M.map(q=>{const I=T[q];if(!I||I.length===0)return null;const W=ea[q];return z.jsxs("div",{style:{marginBottom:12},children:[z.jsx("div",{style:{fontSize:9,fontWeight:700,color:(W==null?void 0:W.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(W==null?void 0:W.label)??q}),z.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:I.map((N,L)=>{const U=b.indexOf(N),K=$0[N.scope]??"#4a9eff",H=f===U;return z.jsxs("button",{ref:Z=>v.current[U]=Z,onClick:()=>r(N.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:H?`${K}35`:`${K}15`,border:`1px solid ${H?K:`${K}40`}`,color:"#c8d6e5",cursor:"pointer",transition:"background 0.12s, border-color 0.12s",outline:H?`2px solid ${K}`:"none",outlineOffset:1},onMouseEnter:Z=>{Z.currentTarget.style.background=`${K}30`,Z.currentTarget.style.borderColor=`${K}90`},onMouseLeave:Z=>{b.indexOf(N)!==f&&(Z.currentTarget.style.background=`${K}15`,Z.currentTarget.style.borderColor=`${K}40`)},children:[z.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:K,verticalAlign:"middle"}}),P(N)]},N.id)})})]},q)}),$.length===0&&z.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:R.noResults})]}),z.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:R.footer}),z.jsx("button",{onClick:a,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:R.cancel})]})]})})}function r8({isOpen:o,onSelect:n,onClose:r,lang:a="pl"}){const s=[{id:"quick",icon:"⚡",color:"#4a9eff",label:ae("modeQuickLabel",a),description:ae("modeQuickDesc",a)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:ae("modeDeepLabel",a),description:ae("modeDeepDesc",a)}],[u,f]=ie.useState(null),p=ie.useRef(null);return ie.useEffect(()=>{o&&(f(null),setTimeout(()=>{var v;return(v=p.current)==null?void 0:v.focus()},100))},[o]),ie.useEffect(()=>{if(!o)return;const v=w=>{w.key==="Escape"&&r(),w.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[o,u,r,n]),o?z.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:v=>{v.target===v.currentTarget&&r()},children:z.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[z.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[z.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:ae("modePickerTitle",a)}),z.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:ae("modePickerSub",a)})]}),z.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:s.map((v,w)=>z.jsxs("button",{ref:w===0?p:null,onClick:()=>f(v.id),onDoubleClick:()=>n(v.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===v.id?`${v.color}18`:"#0a0e17",border:`1px solid ${u===v.id?v.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:$=>{$.currentTarget.style.background=`${v.color}18`,$.currentTarget.style.borderColor=`${v.color}60`},onMouseLeave:$=>{u!==v.id&&($.currentTarget.style.background="#0a0e17",$.currentTarget.style.borderColor="#1e2d45")},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[z.jsx("span",{style:{fontSize:16},children:v.icon}),z.jsx("span",{style:{fontWeight:600,color:u===v.id?v.color:"#f5f6fa"},children:v.label})]}),z.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:v.description})]},v.id))}),z.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[z.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:ae("cancel",a)}),z.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#1e2d45",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:ae("next",a)})]})]})}):null}const Ed={x:40,y:40,scale:.72};function i8(){const[o,n]=ie.useState(js),[r,a]=Bn("lang","pl"),[s,u]=ie.useState(new Set),[f,p]=ie.useState(new Set),[v,w]=ie.useState(""),[$,b]=ie.useState(null),[M,T]=ie.useState(null),[P,R]=ie.useState(!1),[q,I]=ie.useState(!1),W=ie.useCallback(se=>u(De=>{const Be=new Set(De);return Be.has(se)?Be.delete(se):Be.add(se),Be}),[]),N=ie.useCallback(se=>p(De=>{const Be=new Set(De);return Be.has(se)?Be.delete(se):Be.add(se),Be}),[]),L=ie.useCallback(()=>u(new Set),[]),U=ie.useCallback(()=>p(new Set),[]),K=ie.useMemo(()=>k5(dt,v0),[]),[H,Z]=ie.useState(()=>ts(o)),V=ie.useMemo(()=>dt.map(se=>{var De,Be;return{...se,x:((De=H[se.id])==null?void 0:De.x)??se.x,y:((Be=H[se.id])==null?void 0:Be.y)??se.y}}),[H]),ye=ie.useRef(null),{viewTransform:ze,setViewTransform:Ce,toCanvas:He,startPan:Fe,cursorStyle:Ge,setCursorStyle:Ue,handleMouseMove:xe,handleMouseUp:ne}=O5(ye),{startNodeDrag:fe,handleDragMove:oe,handleDragEnd:j}=I5(He,V,Z,Ue),{diagMode:F,setDiagMode:ke,mode:ve,setMode:Ae,quizNode:Te,setQuizNode:Ee,questionsAnswered:Pe,getAnsweredIndices:Re,handleDiagClick:at,handleQuizAnswer:an,resetDiagnostic:ln,startDeepDive:zn,targetNode:Wn,belief:kr,frontier:Un,visibleFrontier:Sn,hasStarted:Tn,nextSuggestedId:Yt,expectedRemaining:Xt,pCorrect:It,sessionComplete:_r,betaBeliefs:zi,subgraphIds:Vn,ddClassification:zr,ddNextNodeId:Sr,ddComplete:Tr}=t6(K),Ur=ie.useMemo(()=>{const se=v.toLowerCase(),De=dt.filter(Be=>!(s.size>0&&!s.has(Be.scope)||f.size>0&&!f.has(Be.section)||se&&!Be.label.toLowerCase().includes(se)&&!Be.labelPl.toLowerCase().includes(se)));return De.length<dt.length?new Set(De.map(Be=>Be.id)):null},[s,f,v]),Gn=$||M,Yn=ie.useMemo(()=>{var De,Be;if(!Gn)return null;const se=new Set([Gn]);return(De=K.prereqs[Gn])==null||De.forEach(Vr=>se.add(Vr)),(Be=K.dependents[Gn])==null||Be.forEach(Vr=>se.add(Vr)),se},[Gn,K]),Xn=ie.useMemo(()=>!F||ve!=="deepdive"||Vn.length===0?null:new Set(Vn),[F,ve,Vn]),da=ie.useCallback(se=>{const De=se.target.closest("[data-node-id]");if(De){fe(De.getAttribute("data-node-id"),se.clientX,se.clientY),se.stopPropagation();return}Fe(se.clientX,se.clientY)},[fe,Fe]),Si=ie.useCallback(se=>{oe(se.clientX,se.clientY)||xe(se)},[oe,xe]),z0=ie.useCallback(()=>{j(),ne()},[j,ne]);ie.useEffect(()=>{if(ve==="quick"&&!Te&&Yt&&!_r&&Tn){const se=setTimeout(()=>Ee(Yt),400);return()=>clearTimeout(se)}},[ve,Te,Yt,_r,Tn]),ie.useEffect(()=>{if(ve==="deepdive"&&!Te&&Sr&&!Tr){const se=setTimeout(()=>Ee(Sr),400);return()=>clearTimeout(se)}},[ve,Te,Sr,Tr]),ie.useEffect(()=>{const se=De=>{De.key==="Escape"&&(b(null),R(!1))};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[]);const fa=ie.useCallback(se=>{n(se),Z(ts(se)),Ce(Ed)},[Ce]),S0=ie.useCallback(()=>{F?(ke(!1),ln(),b(null)):I(!0)},[F,ke,ln]),T0=ie.useCallback(se=>{I(!1),ln(),se==="deepdive"?(ke(!0),R(!0)):(ke(!0),Ae("quick"),b(null))},[ke,Ae,ln]),M0=ie.useMemo(()=>{if(ve!=="deepdive")return{};const se={};for(const[De,Be]of Object.entries(zr))Be==="known"?se[De]="known":Be==="unknown"&&(se[De]="unknown");return se},[ve,zr]),C0=ve==="deepdive"?M0:kr,A0=ve==="deepdive"?Vn.filter(se=>zr[se]==="uncertain"):Sn;return z.jsxs("div",{style:{width:"100%",height:"100vh",background:"#0a0e17",fontFamily:L5,color:"#c8d6e5",display:"flex",flexDirection:"column",overflow:"hidden"},children:[z.jsxs("div",{style:{padding:"8px 16px",borderBottom:"1px solid #1a2235",display:"flex",alignItems:"center",gap:10,flexShrink:0,flexWrap:"wrap"},children:[z.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:"#f5f6fa",letterSpacing:1,whiteSpace:"nowrap"},children:ae("appTitle",r)}),z.jsxs("span",{style:{fontSize:9,color:"#3a4d63",whiteSpace:"nowrap"},children:[dt.length," ",ae("topicsCount",r)," · ",v0.length," ",ae("edgesCount",r)]}),z.jsx("span",{style:{fontSize:9,color:"#3a4d63",marginLeft:"auto"},children:ae(F?ve==="deepdive"?"hintDiagDeep":"hintDiagQuick":"hintBrowse",r)}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[z.jsx("div",{style:{display:"flex",gap:3},children:Dd.map(se=>z.jsx("button",{onClick:()=>fa(se.meta.id),title:ae("layoutLabel",r),style:{padding:"3px 8px",borderRadius:4,fontSize:10,cursor:"pointer",border:o===se.meta.id?"1px solid #4a9eff":"1px solid #1e2d45",background:o===se.meta.id?"#4a9eff22":"transparent",color:o===se.meta.id?"#4a9eff":"#6b7d9a"},children:se.meta.label},se.meta.id))}),z.jsx("span",{style:{color:"#1e2d45"},children:"|"}),z.jsx("button",{onClick:S0,style:{padding:"4px 12px",borderRadius:5,fontSize:11,cursor:"pointer",fontWeight:600,border:F?"1px solid #f39c12":"1px solid #1e2d45",background:F?"#f39c1222":"transparent",color:F?"#f39c12":"#6b7d9a",whiteSpace:"nowrap"},children:ae(F?ve==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",r)}),F&&z.jsx("button",{onClick:()=>R(!0),title:ae("goalBtnTitle",r),style:{padding:"4px 10px",borderRadius:5,fontSize:11,cursor:"pointer",border:"1px solid #8e44ad",background:ve==="deepdive"?"#8e44ad22":"transparent",color:ve==="deepdive"?"#c39bd3":"#6b7d9a",whiteSpace:"nowrap"},children:ae("goalBtn",r)})]})]}),z.jsx(e8,{filterScope:s,toggleScope:W,clearScope:L,filterSection:f,toggleSection:N,clearSection:U,searchTerm:v,setSearchTerm:w,lang:r,setLang:a}),z.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[z.jsxs("svg",{ref:ye,width:"100%",height:"100%",style:{cursor:Ge},onMouseDown:da,onMouseMove:Si,onMouseUp:z0,onMouseLeave:z0,onClick:se=>{if(!F)return;const De=se.target.closest("[data-node-id]");De&&at(De.getAttribute("data-node-id"),se.shiftKey)},children:[z.jsxs("defs",{children:[z.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:z.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),z.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:z.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),z.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:z.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),z.jsxs("g",{transform:`translate(${ze.x},${ze.y}) scale(${ze.scale})`,children:[z.jsx(n6,{edges:v0,nodes:V,highlightedIds:F&&ve==="deepdive"?Xn:Yn}),z.jsx(o6,{nodes:V,filteredIds:F&&ve==="deepdive"?Xn:Ur,highlightedIds:F?null:Yn,selected:$,onSelect:se=>{if(F){at(se,!1);return}b(se===$?null:se)},onHover:T,lang:r,diagMode:F,belief:C0,frontier:A0,scale:ze.scale})]})]}),$&&!F&&z.jsx(a6,{nodeId:$,nodes:V,adjacency:K,lang:r}),F&&Te&&z.jsx(X7,{nodeId:Te,nodes:V,lang:r,excludeIndices:Re(Te),onAnswer:(se,De,Be)=>an(Te,se,De,Be),onSkip:()=>Ee(null)}),F&&ve==="quick"&&!Te&&z.jsx(Q7,{belief:kr,frontier:Un,visibleFrontier:Sn,hasStarted:Tn,nextSuggestedId:Yt,sessionComplete:_r,adjacency:K,expectedRemaining:Xt,pCorrect:It,questionsAnswered:Pe,nodes:V,lang:r,onNodeClick:se=>Ee(se),onReset:ln}),F&&ve==="deepdive"&&!Te&&Wn&&z.jsx(Z7,{nodes:V,lang:r,targetNode:Wn,subgraphIds:Vn,ddClassification:zr,betaBeliefs:zi,ddComplete:Tr,ddNextNodeId:Sr,questionsAnswered:Pe,onNodeClick:se=>Ee(se),onReset:ln}),z.jsx(t8,{lang:r,diagMode:F}),z.jsx("div",{style:{position:"absolute",right:16,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([se,De])=>z.jsx("button",{onClick:()=>{De===null?(Z(ts(o)),Ce(Ed)):Ce(Be=>({...Be,scale:Math.max(.15,Math.min(5,Be.scale*De))}))},style:{width:28,height:28,background:"#0d1520",border:"1px solid #1e2d45",color:"#c8d6e5",borderRadius:4,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"},children:se},se))})]}),P&&z.jsx(n8,{nodes:V,lang:r,onSelect:se=>{R(!1),zn(se)},onClose:()=>R(!1)}),z.jsx(r8,{isOpen:q,onSelect:T0,onClose:()=>I(!1),lang:r})]})}Lf.createRoot(document.getElementById("root")).render(z.jsx(ie.StrictMode,{children:z.jsx(i8,{})}));
